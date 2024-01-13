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
		ResourceType: AddTagsToResourceRequestResourceType;

		/** Required */
		ResourceId: string;

		/**
		 * Required
		 * Maximum items: 1000
		 */
		Tags: Array<Tag>;
	}
	export interface AddTagsToResourceRequestFormProperties {

		/** Required */
		ResourceType: FormControl<AddTagsToResourceRequestResourceType | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceRequestFormGroup() {
		return new FormGroup<AddTagsToResourceRequestFormProperties>({
			ResourceType: new FormControl<AddTagsToResourceRequestResourceType | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddTagsToResourceRequestResourceType { Document = 0, ManagedInstance = 1, MaintenanceWindow = 2, Parameter = 3, PatchBaseline = 4, OpsItem = 5 }


	/** Metadata that you assign to your AWS resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Systems Manager, you can apply tags to documents, managed instances, maintenance windows, Parameter Store parameters, and patch baselines. */
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

	/** Metadata that you assign to your AWS resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Systems Manager, you can apply tags to documents, managed instances, maintenance windows, Parameter Store parameters, and patch baselines. */
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
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
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

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		InstanceIds?: Array<string>;
	}

	/** <p/> */
	export interface CancelCommandRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId: FormControl<string | null | undefined>,
	}
	export function CreateCancelCommandRequestFormGroup() {
		return new FormGroup<CancelCommandRequestFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
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

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId?: string | null;
	}
	export interface CancelMaintenanceWindowExecutionResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateCancelMaintenanceWindowExecutionResultFormGroup() {
		return new FormGroup<CancelMaintenanceWindowExecutionResultFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface CancelMaintenanceWindowExecutionRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: string;
	}
	export interface CancelMaintenanceWindowExecutionRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateCancelMaintenanceWindowExecutionRequestFormGroup() {
		return new FormGroup<CancelMaintenanceWindowExecutionRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
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
		ActivationId?: string | null;

		/**
		 * Max length: 250
		 * Min length: 20
		 */
		ActivationCode?: string | null;
	}
	export interface CreateActivationResultFormProperties {
		ActivationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 250
		 * Min length: 20
		 */
		ActivationCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateActivationResultFormGroup() {
		return new FormGroup<CreateActivationResultFormProperties>({
			ActivationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
			ActivationCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(250)]),
		});

	}

	export interface CreateActivationRequest {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		DefaultInstanceName?: string | null;

		/**
		 * Required
		 * Max length: 64
		 */
		IamRole: string;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		RegistrationLimit?: number | null;
		ExpirationDate?: Date | null;

		/** Maximum items: 1000 */
		Tags?: Array<Tag>;
	}
	export interface CreateActivationRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		DefaultInstanceName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 */
		IamRole: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		RegistrationLimit: FormControl<number | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateActivationRequestFormGroup() {
		return new FormGroup<CreateActivationRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			DefaultInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			IamRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64)]),
			RegistrationLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateAssociationResult {

		/** Describes the parameters for a document. */
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
		Name?: string | null;
		InstanceId?: string | null;
		AssociationVersion?: string | null;
		Date?: Date | null;
		LastUpdateAssociationDate?: Date | null;

		/** Describes an association status. */
		Status?: AssociationStatus;

		/** Information about the association. */
		Overview?: AssociationOverview;
		DocumentVersion?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		AutomationTargetParameterName?: string | null;
		Parameters?: Parameters;
		AssociationId?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression?: string | null;

		/** An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation;
		LastExecutionDate?: Date | null;
		LastSuccessfulExecutionDate?: Date | null;
		AssociationName?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity | null;
		SyncCompliance?: AssociationDescriptionSyncCompliance | null;
		ApplyOnlyAtCronInterval?: boolean | null;
	}

	/** Describes the parameters for a document. */
	export interface AssociationDescriptionFormProperties {
		Name: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		Date: FormControl<Date | null | undefined>,
		LastUpdateAssociationDate: FormControl<Date | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		AutomationTargetParameterName: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: FormControl<string | null | undefined>,
		LastExecutionDate: FormControl<Date | null | undefined>,
		LastSuccessfulExecutionDate: FormControl<Date | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,
		ComplianceSeverity: FormControl<AssociationDescriptionComplianceSeverity | null | undefined>,
		SyncCompliance: FormControl<AssociationDescriptionSyncCompliance | null | undefined>,
		ApplyOnlyAtCronInterval: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociationDescriptionFormGroup() {
		return new FormGroup<AssociationDescriptionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			AssociationVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST)|([1-9][0-9]*)')]),
			Date: new FormControl<Date | null | undefined>(undefined),
			LastUpdateAssociationDate: new FormControl<Date | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			AutomationTargetParameterName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			LastExecutionDate: new FormControl<Date | null | undefined>(undefined),
			LastSuccessfulExecutionDate: new FormControl<Date | null | undefined>(undefined),
			AssociationName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			ComplianceSeverity: new FormControl<AssociationDescriptionComplianceSeverity | null | undefined>(undefined),
			SyncCompliance: new FormControl<AssociationDescriptionSyncCompliance | null | undefined>(undefined),
			ApplyOnlyAtCronInterval: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes an association status. */
	export interface AssociationStatus {

		/** Required */
		Date: Date;

		/** Required */
		Name: AssociationStatusName;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Message: string;

		/** Max length: 1024 */
		AdditionalInfo?: string | null;
	}

	/** Describes an association status. */
	export interface AssociationStatusFormProperties {

		/** Required */
		Date: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<AssociationStatusName | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		AdditionalInfo: FormControl<string | null | undefined>,
	}
	export function CreateAssociationStatusFormGroup() {
		return new FormGroup<AssociationStatusFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<AssociationStatusName | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			AdditionalInfo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export enum AssociationStatusName { Pending = 0, Success = 1, Failed = 2 }


	/** Information about the association. */
	export interface AssociationOverview {
		Status?: string | null;
		DetailedStatus?: string | null;
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


	/** <p>An array of search criteria that targets instances using a Key,Value combination that you specify. </p> <p>Supported formats include the following.</p> <ul> <li> <p> <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i> </code> </p> </li> <li> <p> <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i> </code> </p> </li> <li> <p> <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i> </code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:Name,Values=<i>resource-group-name</i> </code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i> </code> </p> </li> </ul> <p>For example:</p> <ul> <li> <p> <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code> </p> </li> <li> <p> <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code> </p> </li> <li> <p> <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code> </p> <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i> </code> </p> <p>This example demonstrates how to target only EC2 instances and VPCs in your maintenance window.</p> </li> <li> <p>(State Manager association targets only) <code>Key=InstanceIds,Values=<i>*</i> </code> </p> <p>This example demonstrates how to target all managed instances in the AWS Region where the association was created.</p> </li> </ul> <p>For information about how to send commands that target instances using <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>AWS Systems Manager User Guide</i>.</p> */
	export interface Target {

		/**
		 * Max length: 163
		 * Min length: 1
		 */
		Key?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Values?: Array<string>;
	}

	/** <p>An array of search criteria that targets instances using a Key,Value combination that you specify. </p> <p>Supported formats include the following.</p> <ul> <li> <p> <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i> </code> </p> </li> <li> <p> <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i> </code> </p> </li> <li> <p> <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i> </code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:Name,Values=<i>resource-group-name</i> </code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i> </code> </p> </li> </ul> <p>For example:</p> <ul> <li> <p> <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code> </p> </li> <li> <p> <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code> </p> </li> <li> <p> <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code> </p> <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i> </code> </p> <p>This example demonstrates how to target only EC2 instances and VPCs in your maintenance window.</p> </li> <li> <p>(State Manager association targets only) <code>Key=InstanceIds,Values=<i>*</i> </code> </p> <p>This example demonstrates how to target all managed instances in the AWS Region where the association was created.</p> </li> </ul> <p>For information about how to send commands that target instances using <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>AWS Systems Manager User Guide</i>.</p> */
	export interface TargetFormProperties {

		/**
		 * Max length: 163
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(163), Validators.pattern('^[\p{L}\p{Z}\p{N}_.:/=\-@]*$|resource-groups:ResourceTypeFilters|resource-groups:Name')]),
		});

	}


	/** An S3 bucket where you want to store the results of this request. */
	export interface InstanceAssociationOutputLocation {

		/** An S3 bucket where you want to store the results of this request. */
		S3Location?: S3OutputLocation;
	}

	/** An S3 bucket where you want to store the results of this request. */
	export interface InstanceAssociationOutputLocationFormProperties {
	}
	export function CreateInstanceAssociationOutputLocationFormGroup() {
		return new FormGroup<InstanceAssociationOutputLocationFormProperties>({
		});

	}


	/** An S3 bucket where you want to store the results of this request. */
	export interface S3OutputLocation {

		/**
		 * Max length: 20
		 * Min length: 3
		 */
		OutputS3Region?: string | null;

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		OutputS3BucketName?: string | null;

		/** Max length: 500 */
		OutputS3KeyPrefix?: string | null;
	}

	/** An S3 bucket where you want to store the results of this request. */
	export interface S3OutputLocationFormProperties {

		/**
		 * Max length: 20
		 * Min length: 3
		 */
		OutputS3Region: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		OutputS3BucketName: FormControl<string | null | undefined>,

		/** Max length: 500 */
		OutputS3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3OutputLocationFormGroup() {
		return new FormGroup<S3OutputLocationFormProperties>({
			OutputS3Region: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(20)]),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63)]),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export enum AssociationDescriptionComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }

	export enum AssociationDescriptionSyncCompliance { AUTO = 0, MANUAL = 1 }

	export interface CreateAssociationRequest {

		/** Required */
		Name: string;
		DocumentVersion?: string | null;
		InstanceId?: string | null;
		Parameters?: Parameters;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression?: string | null;

		/** An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation;
		AssociationName?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		AutomationTargetParameterName?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity | null;
		SyncCompliance?: AssociationDescriptionSyncCompliance | null;
		ApplyOnlyAtCronInterval?: boolean | null;
	}
	export interface CreateAssociationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		AutomationTargetParameterName: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,
		ComplianceSeverity: FormControl<AssociationDescriptionComplianceSeverity | null | undefined>,
		SyncCompliance: FormControl<AssociationDescriptionSyncCompliance | null | undefined>,
		ApplyOnlyAtCronInterval: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAssociationRequestFormGroup() {
		return new FormGroup<CreateAssociationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			AssociationName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			AutomationTargetParameterName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			ComplianceSeverity: new FormControl<AssociationDescriptionComplianceSeverity | null | undefined>(undefined),
			SyncCompliance: new FormControl<AssociationDescriptionSyncCompliance | null | undefined>(undefined),
			ApplyOnlyAtCronInterval: new FormControl<boolean | null | undefined>(undefined),
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

	export interface InvalidParameters {
	}
	export interface InvalidParametersFormProperties {
	}
	export function CreateInvalidParametersFormGroup() {
		return new FormGroup<InvalidParametersFormProperties>({
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

		/** Describes the association of a Systems Manager SSM document and an instance. */
		Entry?: CreateAssociationBatchRequestEntry;
		Message?: string | null;
		Fault?: FailedCreateAssociationFault | null;
	}

	/** Describes a failed association. */
	export interface FailedCreateAssociationFormProperties {
		Message: FormControl<string | null | undefined>,
		Fault: FormControl<FailedCreateAssociationFault | null | undefined>,
	}
	export function CreateFailedCreateAssociationFormGroup() {
		return new FormGroup<FailedCreateAssociationFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Fault: new FormControl<FailedCreateAssociationFault | null | undefined>(undefined),
		});

	}


	/** Describes the association of a Systems Manager SSM document and an instance. */
	export interface CreateAssociationBatchRequestEntry {

		/** Required */
		Name: string;
		InstanceId?: string | null;
		Parameters?: Parameters;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		AutomationTargetParameterName?: string | null;
		DocumentVersion?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression?: string | null;

		/** An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation;
		AssociationName?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity | null;
		SyncCompliance?: AssociationDescriptionSyncCompliance | null;
		ApplyOnlyAtCronInterval?: boolean | null;
	}

	/** Describes the association of a Systems Manager SSM document and an instance. */
	export interface CreateAssociationBatchRequestEntryFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		AutomationTargetParameterName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,
		ComplianceSeverity: FormControl<AssociationDescriptionComplianceSeverity | null | undefined>,
		SyncCompliance: FormControl<AssociationDescriptionSyncCompliance | null | undefined>,
		ApplyOnlyAtCronInterval: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAssociationBatchRequestEntryFormGroup() {
		return new FormGroup<CreateAssociationBatchRequestEntryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			AutomationTargetParameterName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			AssociationName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			ComplianceSeverity: new FormControl<AssociationDescriptionComplianceSeverity | null | undefined>(undefined),
			SyncCompliance: new FormControl<AssociationDescriptionSyncCompliance | null | undefined>(undefined),
			ApplyOnlyAtCronInterval: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FailedCreateAssociationFault { Client = 0, Server = 1, Unknown = 2 }

	export interface CreateAssociationBatchRequest {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Entries: Array<CreateAssociationBatchRequestEntry>;
	}
	export interface CreateAssociationBatchRequestFormProperties {
	}
	export function CreateCreateAssociationBatchRequestFormGroup() {
		return new FormGroup<CreateAssociationBatchRequestFormProperties>({
		});

	}

	export interface CreateDocumentResult {

		/** Describes a Systems Manager document. */
		DocumentDescription?: DocumentDescription;
	}
	export interface CreateDocumentResultFormProperties {
	}
	export function CreateCreateDocumentResultFormGroup() {
		return new FormGroup<CreateDocumentResultFormProperties>({
		});

	}


	/** Describes a Systems Manager document.  */
	export interface DocumentDescription {
		Sha1?: string | null;

		/** Max length: 256 */
		Hash?: string | null;
		HashType?: DocumentDescriptionHashType | null;
		Name?: string | null;
		VersionName?: string | null;
		Owner?: string | null;
		CreatedDate?: Date | null;

		/** The status of a document. */
		Status?: DocumentDescriptionStatus | null;
		StatusInformation?: string | null;
		DocumentVersion?: string | null;
		Description?: string | null;
		Parameters?: Array<DocumentParameter>;
		PlatformTypes?: Array<PlatformType>;
		DocumentType?: DocumentDescriptionDocumentType | null;
		SchemaVersion?: string | null;
		LatestVersion?: string | null;
		DefaultVersion?: string | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;

		/** Max length: 200 */
		TargetType?: string | null;

		/** Maximum items: 1000 */
		Tags?: Array<Tag>;
		AttachmentsInformation?: Array<AttachmentInformation>;

		/** Minimum items: 1 */
		Requires?: Array<DocumentRequires>;
	}

	/** Describes a Systems Manager document.  */
	export interface DocumentDescriptionFormProperties {
		Sha1: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Hash: FormControl<string | null | undefined>,
		HashType: FormControl<DocumentDescriptionHashType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** The status of a document. */
		Status: FormControl<DocumentDescriptionStatus | null | undefined>,
		StatusInformation: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DocumentType: FormControl<DocumentDescriptionDocumentType | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		DefaultVersion: FormControl<string | null | undefined>,
		DocumentFormat: FormControl<DocumentDescriptionDocumentFormat | null | undefined>,

		/** Max length: 200 */
		TargetType: FormControl<string | null | undefined>,
	}
	export function CreateDocumentDescriptionFormGroup() {
		return new FormGroup<DocumentDescriptionFormProperties>({
			Sha1: new FormControl<string | null | undefined>(undefined),
			Hash: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			HashType: new FormControl<DocumentDescriptionHashType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{1,128}$')]),
			Owner: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DocumentDescriptionStatus | null | undefined>(undefined),
			StatusInformation: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			Description: new FormControl<string | null | undefined>(undefined),
			DocumentType: new FormControl<DocumentDescriptionDocumentType | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([0-9]+)\.([0-9]+)')]),
			LatestVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			DefaultVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			DocumentFormat: new FormControl<DocumentDescriptionDocumentFormat | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.pattern('^\/[\w\.\-\:\/]*$')]),
		});

	}

	export enum DocumentDescriptionHashType { Sha256 = 0, Sha1 = 1 }

	export enum DocumentDescriptionStatus { Creating = 0, Active = 1, Updating = 2, Deleting = 3, Failed = 4 }


	/** Parameters specified in a System Manager document that run on the server when the command is run.  */
	export interface DocumentParameter {
		Name?: string | null;
		Type?: DocumentParameterType | null;
		Description?: string | null;
		DefaultValue?: string | null;
	}

	/** Parameters specified in a System Manager document that run on the server when the command is run.  */
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

	export enum PlatformType { Windows = 0, Linux = 1 }

	export enum DocumentDescriptionDocumentType { Command = 0, Policy = 1, Automation = 2, Session = 3, Package = 4, ApplicationConfiguration = 5, ApplicationConfigurationSchema = 6, DeploymentStrategy = 7, ChangeCalendar = 8 }

	export enum DocumentDescriptionDocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }


	/** An attribute of an attachment, such as the attachment name. */
	export interface AttachmentInformation {
		Name?: string | null;
	}

	/** An attribute of an attachment, such as the attachment name. */
	export interface AttachmentInformationFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentInformationFormGroup() {
		return new FormGroup<AttachmentInformationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
		});

	}


	/** An SSM document required by the current document. */
	export interface DocumentRequires {

		/** Required */
		Name: string;
		Version?: string | null;
	}

	/** An SSM document required by the current document. */
	export interface DocumentRequiresFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateDocumentRequiresFormGroup() {
		return new FormGroup<DocumentRequiresFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
		});

	}

	export interface CreateDocumentRequest {

		/**
		 * Required
		 * Min length: 1
		 */
		Content: string;

		/** Minimum items: 1 */
		Requires?: Array<DocumentRequires>;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		Attachments?: Array<AttachmentsSource>;

		/** Required */
		Name: string;
		VersionName?: string | null;
		DocumentType?: DocumentDescriptionDocumentType | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;

		/** Max length: 200 */
		TargetType?: string | null;

		/** Maximum items: 1000 */
		Tags?: Array<Tag>;
	}
	export interface CreateDocumentRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		DocumentType: FormControl<DocumentDescriptionDocumentType | null | undefined>,
		DocumentFormat: FormControl<DocumentDescriptionDocumentFormat | null | undefined>,

		/** Max length: 200 */
		TargetType: FormControl<string | null | undefined>,
	}
	export function CreateCreateDocumentRequestFormGroup() {
		return new FormGroup<CreateDocumentRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{1,128}$')]),
			DocumentType: new FormControl<DocumentDescriptionDocumentType | null | undefined>(undefined),
			DocumentFormat: new FormControl<DocumentDescriptionDocumentFormat | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.pattern('^\/[\w\.\-\:\/]*$')]),
		});

	}


	/** Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document. */
	export interface AttachmentsSource {
		Key?: AttachmentsSourceKey | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Values?: Array<string>;
		Name?: string | null;
	}

	/** Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document. */
	export interface AttachmentsSourceFormProperties {
		Key: FormControl<AttachmentsSourceKey | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentsSourceFormGroup() {
		return new FormGroup<AttachmentsSourceFormProperties>({
			Key: new FormControl<AttachmentsSourceKey | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
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

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;
	}
	export interface CreateMaintenanceWindowResultFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMaintenanceWindowResultFormGroup() {
		return new FormGroup<CreateMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
		});

	}

	export interface CreateMaintenanceWindowRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 3
		 */
		Name: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
		StartDate?: string | null;
		EndDate?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Schedule: string;
		ScheduleTimezone?: string | null;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 24
		 */
		Duration: number;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 23
		 */
		Cutoff: number;

		/** Required */
		AllowUnassociatedTargets: boolean;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/** Maximum items: 1000 */
		Tags?: Array<Tag>;
	}
	export interface CreateMaintenanceWindowRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Schedule: FormControl<string | null | undefined>,
		ScheduleTimezone: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 24
		 */
		Duration: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 23
		 */
		Cutoff: FormControl<number | null | undefined>,

		/** Required */
		AllowUnassociatedTargets: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMaintenanceWindowRequestFormGroup() {
		return new FormGroup<CreateMaintenanceWindowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			ScheduleTimezone: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(24)]),
			Cutoff: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(23)]),
			AllowUnassociatedTargets: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
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
		OpsItemId?: string | null;
	}
	export interface CreateOpsItemResponseFormProperties {
		OpsItemId: FormControl<string | null | undefined>,
	}
	export function CreateCreateOpsItemResponseFormGroup() {
		return new FormGroup<CreateOpsItemResponseFormProperties>({
			OpsItemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOpsItemRequest {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: string;
		OperationalData?: OpsItemOperationalData;
		Notifications?: Array<OpsItemNotification>;

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		Priority?: number | null;
		RelatedOpsItems?: Array<RelatedOpsItem>;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Source: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Title: string;

		/** Maximum items: 1000 */
		Tags?: Array<Tag>;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Category?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Severity?: string | null;
	}
	export interface CreateOpsItemRequestFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		Priority: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Source: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Title: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Category: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Severity: FormControl<string | null | undefined>,
	}
	export function CreateCreateOpsItemRequestFormGroup() {
		return new FormGroup<CreateOpsItemRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			Category: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Severity: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
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
		Arn?: string | null;
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

	export interface CreatePatchBaselineResult {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId?: string | null;
	}
	export interface CreatePatchBaselineResultFormProperties {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePatchBaselineResultFormGroup() {
		return new FormGroup<CreatePatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
		});

	}

	export interface CreatePatchBaselineRequest {
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 3
		 */
		Name: string;

		/** A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup;

		/** A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		ApprovedPatches?: Array<string>;
		ApprovedPatchesComplianceLevel?: PatchRuleComplianceLevel | null;
		ApprovedPatchesEnableNonSecurity?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		RejectedPatches?: Array<string>;
		RejectedPatchesAction?: CreatePatchBaselineRequestRejectedPatchesAction | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		Sources?: Array<PatchSource>;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/** Maximum items: 1000 */
		Tags?: Array<Tag>;
	}
	export interface CreatePatchBaselineRequestFormProperties {
		OperatingSystem: FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,
		ApprovedPatchesComplianceLevel: FormControl<PatchRuleComplianceLevel | null | undefined>,
		ApprovedPatchesEnableNonSecurity: FormControl<boolean | null | undefined>,
		RejectedPatchesAction: FormControl<CreatePatchBaselineRequestRejectedPatchesAction | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePatchBaselineRequestFormGroup() {
		return new FormGroup<CreatePatchBaselineRequestFormProperties>({
			OperatingSystem: new FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			ApprovedPatchesComplianceLevel: new FormControl<PatchRuleComplianceLevel | null | undefined>(undefined),
			ApprovedPatchesEnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
			RejectedPatchesAction: new FormControl<CreatePatchBaselineRequestRejectedPatchesAction | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export enum CreatePatchBaselineRequestOperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }


	/** A set of patch filters, typically used for approval rules. */
	export interface PatchFilterGroup {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 4
		 */
		PatchFilters: Array<PatchFilter>;
	}

	/** A set of patch filters, typically used for approval rules. */
	export interface PatchFilterGroupFormProperties {
	}
	export function CreatePatchFilterGroupFormGroup() {
		return new FormGroup<PatchFilterGroupFormProperties>({
		});

	}


	/** <p> Defines which patches should be included in a patch baseline.</p> <p>A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for WINDOWS are PATCH_SET, PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, and MSRC_SEVERITY. The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is PRODUCT and the filter values are ["Office 2013", "Office 2016"], then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.</p> <p>You can view lists of valid values for the patch properties by running the <code>DescribePatchProperties</code> command. For information about which patch properties can be used with each major operating system, see <a>DescribePatchProperties</a>.</p> */
	export interface PatchFilter {

		/** Required */
		Key: PatchFilterKey;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Values: Array<string>;
	}

	/** <p> Defines which patches should be included in a patch baseline.</p> <p>A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for WINDOWS are PATCH_SET, PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, and MSRC_SEVERITY. The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is PRODUCT and the filter values are ["Office 2013", "Office 2016"], then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.</p> <p>You can view lists of valid values for the patch properties by running the <code>DescribePatchProperties</code> command. For information about which patch properties can be used with each major operating system, see <a>DescribePatchProperties</a>.</p> */
	export interface PatchFilterFormProperties {

		/** Required */
		Key: FormControl<PatchFilterKey | null | undefined>,
	}
	export function CreatePatchFilterFormGroup() {
		return new FormGroup<PatchFilterFormProperties>({
			Key: new FormControl<PatchFilterKey | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatchFilterKey { PATCH_SET = 0, PRODUCT = 1, PRODUCT_FAMILY = 2, CLASSIFICATION = 3, MSRC_SEVERITY = 4, PATCH_ID = 5, SECTION = 6, PRIORITY = 7, SEVERITY = 8 }


	/** A set of rules defining the approval rules for a patch baseline. */
	export interface PatchRuleGroup {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
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

		/**
		 * A set of patch filters, typically used for approval rules.
		 * Required
		 */
		PatchFilterGroup: PatchFilterGroup;
		ComplianceLevel?: PatchRuleComplianceLevel | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		ApproveAfterDays?: number | null;

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		ApproveUntilDate?: string | null;
		EnableNonSecurity?: boolean | null;
	}

	/** Defines an approval rule for a patch baseline. */
	export interface PatchRuleFormProperties {
		ComplianceLevel: FormControl<PatchRuleComplianceLevel | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		ApproveAfterDays: FormControl<number | null | undefined>,

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		ApproveUntilDate: FormControl<string | null | undefined>,
		EnableNonSecurity: FormControl<boolean | null | undefined>,
	}
	export function CreatePatchRuleFormGroup() {
		return new FormGroup<PatchRuleFormProperties>({
			ComplianceLevel: new FormControl<PatchRuleComplianceLevel | null | undefined>(undefined),
			ApproveAfterDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			ApproveUntilDate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10)]),
			EnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PatchRuleComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum CreatePatchBaselineRequestRejectedPatchesAction { ALLOW_AS_DEPENDENCY = 0, BLOCK = 1 }


	/** Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only. */
	export interface PatchSource {

		/** Required */
		Name: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Products: Array<string>;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Configuration: string;
	}

	/** Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only. */
	export interface PatchSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Configuration: FormControl<string | null | undefined>,
	}
	export function CreatePatchSourceFormGroup() {
		return new FormGroup<PatchSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.]{3,50}$')]),
			Configuration: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		SyncName: string;

		/** Information about the target S3 bucket for the Resource Data Sync. */
		S3Destination?: ResourceDataSyncS3Destination;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncType?: string | null;

		/** Information about the source of the data included in the resource data sync. */
		SyncSource?: ResourceDataSyncSource;
	}
	export interface CreateResourceDataSyncRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		SyncName: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncType: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceDataSyncRequestFormGroup() {
		return new FormGroup<CreateResourceDataSyncRequestFormProperties>({
			SyncName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			SyncType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}


	/** Information about the target S3 bucket for the Resource Data Sync. */
	export interface ResourceDataSyncS3Destination {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketName: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Prefix?: string | null;

		/** Required */
		SyncFormat: ResourceDataSyncS3DestinationSyncFormat;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Region: string;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		AWSKMSKeyARN?: string | null;

		/** Synchronize Systems Manager Inventory data from multiple AWS accounts defined in AWS Organizations to a centralized S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different AWS account ID. */
		DestinationDataSharing?: ResourceDataSyncDestinationDataSharing;
	}

	/** Information about the target S3 bucket for the Resource Data Sync. */
	export interface ResourceDataSyncS3DestinationFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketName: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Prefix: FormControl<string | null | undefined>,

		/** Required */
		SyncFormat: FormControl<ResourceDataSyncS3DestinationSyncFormat | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Region: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		AWSKMSKeyARN: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncS3DestinationFormGroup() {
		return new FormGroup<ResourceDataSyncS3DestinationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			SyncFormat: new FormControl<ResourceDataSyncS3DestinationSyncFormat | null | undefined>(undefined, [Validators.required]),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			AWSKMSKeyARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
		});

	}

	export enum ResourceDataSyncS3DestinationSyncFormat { JsonSerDe = 0 }


	/** Synchronize Systems Manager Inventory data from multiple AWS accounts defined in AWS Organizations to a centralized S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different AWS account ID. */
	export interface ResourceDataSyncDestinationDataSharing {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DestinationDataSharingType?: string | null;
	}

	/** Synchronize Systems Manager Inventory data from multiple AWS accounts defined in AWS Organizations to a centralized S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different AWS account ID. */
	export interface ResourceDataSyncDestinationDataSharingFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DestinationDataSharingType: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncDestinationDataSharingFormGroup() {
		return new FormGroup<ResourceDataSyncDestinationDataSharingFormProperties>({
			DestinationDataSharingType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}


	/** Information about the source of the data included in the resource data sync. */
	export interface ResourceDataSyncSource {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		SourceType: string;

		/** Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions. */
		AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

		/** Required */
		SourceRegions: Array<string>;
		IncludeFutureRegions?: boolean | null;
	}

	/** Information about the source of the data included in the resource data sync. */
	export interface ResourceDataSyncSourceFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		SourceType: FormControl<string | null | undefined>,
		IncludeFutureRegions: FormControl<boolean | null | undefined>,
	}
	export function CreateResourceDataSyncSourceFormGroup() {
		return new FormGroup<ResourceDataSyncSourceFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			IncludeFutureRegions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions. */
	export interface ResourceDataSyncAwsOrganizationsSource {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		OrganizationSourceType: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		OrganizationalUnits?: Array<ResourceDataSyncOrganizationalUnit>;
	}

	/** Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions. */
	export interface ResourceDataSyncAwsOrganizationsSourceFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		OrganizationSourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncAwsOrganizationsSourceFormGroup() {
		return new FormGroup<ResourceDataSyncAwsOrganizationsSourceFormProperties>({
			OrganizationSourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}


	/** The AWS Organizations organizational unit data source for the sync. */
	export interface ResourceDataSyncOrganizationalUnit {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OrganizationalUnitId?: string | null;
	}

	/** The AWS Organizations organizational unit data source for the sync. */
	export interface ResourceDataSyncOrganizationalUnitFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OrganizationalUnitId: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncOrganizationalUnitFormGroup() {
		return new FormGroup<ResourceDataSyncOrganizationalUnitFormProperties>({
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^ou-[0-9a-z]{4,32}-[a-z0-9]{8,32}$')]),
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
			ActivationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
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
		Name?: string | null;
		InstanceId?: string | null;
		AssociationId?: string | null;
	}
	export interface DeleteAssociationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAssociationRequestFormGroup() {
		return new FormGroup<DeleteAssociationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
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
		DocumentVersion?: string | null;
		VersionName?: string | null;
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
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{1,128}$')]),
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
		DeletionId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName?: string | null;

		/** Information about the delete operation. */
		DeletionSummary?: InventoryDeletionSummary;
	}
	export interface DeleteInventoryResultFormProperties {
		DeletionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInventoryResultFormGroup() {
		return new FormGroup<DeleteInventoryResultFormProperties>({
			DeletionId: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
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
		Version?: string | null;
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
			Version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]{1,6})(\.[0-9]{1,6})$')]),
			Count: new FormControl<number | null | undefined>(undefined),
			RemainingCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteInventoryRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: string;
		SchemaDeleteOption?: DeleteInventoryRequestSchemaDeleteOption | null;
		DryRun?: boolean | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;
	}
	export interface DeleteInventoryRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,
		SchemaDeleteOption: FormControl<DeleteInventoryRequestSchemaDeleteOption | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInventoryRequestFormGroup() {
		return new FormGroup<DeleteInventoryRequestFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
			SchemaDeleteOption: new FormControl<DeleteInventoryRequestSchemaDeleteOption | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export enum DeleteInventoryRequestSchemaDeleteOption { DisableSchema = 0, DeleteSchema = 1 }

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

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;
	}
	export interface DeleteMaintenanceWindowResultFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMaintenanceWindowResultFormGroup() {
		return new FormGroup<DeleteMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
		});

	}

	export interface DeleteMaintenanceWindowRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;
	}
	export interface DeleteMaintenanceWindowRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMaintenanceWindowRequestFormGroup() {
		return new FormGroup<DeleteMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteParameterRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteParameterRequestFormGroup() {
		return new FormGroup<DeleteParameterRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
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

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		DeletedParameters?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		InvalidParameters?: Array<string>;
	}
	export interface DeleteParametersResultFormProperties {
	}
	export function CreateDeleteParametersResultFormGroup() {
		return new FormGroup<DeleteParametersResultFormProperties>({
		});

	}

	export interface DeleteParametersRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Names: Array<string>;
	}
	export interface DeleteParametersRequestFormProperties {
	}
	export function CreateDeleteParametersRequestFormGroup() {
		return new FormGroup<DeleteParametersRequestFormProperties>({
		});

	}

	export interface DeletePatchBaselineResult {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId?: string | null;
	}
	export interface DeletePatchBaselineResultFormProperties {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePatchBaselineResultFormGroup() {
		return new FormGroup<DeletePatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
		});

	}

	export interface DeletePatchBaselineRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: string;
	}
	export interface DeletePatchBaselineRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePatchBaselineRequestFormGroup() {
		return new FormGroup<DeletePatchBaselineRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		SyncName: string;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncType?: string | null;
	}
	export interface DeleteResourceDataSyncRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		SyncName: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncType: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceDataSyncRequestFormGroup() {
		return new FormGroup<DeleteResourceDataSyncRequestFormProperties>({
			SyncName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			SyncType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
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
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^mi-[0-9a-f]{17}$')]),
		});

	}

	export interface DeregisterPatchBaselineForPatchGroupResult {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup?: string | null;
	}
	export interface DeregisterPatchBaselineForPatchGroupResultFormProperties {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterPatchBaselineForPatchGroupResultFormGroup() {
		return new FormGroup<DeregisterPatchBaselineForPatchGroupResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface DeregisterPatchBaselineForPatchGroupRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: string;
	}
	export interface DeregisterPatchBaselineForPatchGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterPatchBaselineForPatchGroupRequestFormGroup() {
		return new FormGroup<DeregisterPatchBaselineForPatchGroupRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface DeregisterTargetFromMaintenanceWindowResult {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId?: string | null;
	}
	export interface DeregisterTargetFromMaintenanceWindowResultFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterTargetFromMaintenanceWindowResultFormGroup() {
		return new FormGroup<DeregisterTargetFromMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTargetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface DeregisterTargetFromMaintenanceWindowRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId: string;
		Safe?: boolean | null;
	}
	export interface DeregisterTargetFromMaintenanceWindowRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId: FormControl<string | null | undefined>,
		Safe: FormControl<boolean | null | undefined>,
	}
	export function CreateDeregisterTargetFromMaintenanceWindowRequestFormGroup() {
		return new FormGroup<DeregisterTargetFromMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTargetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
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

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId?: string | null;
	}
	export interface DeregisterTaskFromMaintenanceWindowResultFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterTaskFromMaintenanceWindowResultFormGroup() {
		return new FormGroup<DeregisterTaskFromMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface DeregisterTaskFromMaintenanceWindowRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: string;
	}
	export interface DeregisterTaskFromMaintenanceWindowRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterTaskFromMaintenanceWindowRequestFormGroup() {
		return new FormGroup<DeregisterTaskFromMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface DescribeActivationsResult {
		ActivationList?: Array<Activation>;
		NextToken?: string | null;
	}
	export interface DescribeActivationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActivationsResultFormGroup() {
		return new FormGroup<DescribeActivationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activation registers one or more on-premises servers or virtual machines (VMs) with AWS so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with AWS is called a managed instance. */
	export interface Activation {
		ActivationId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		DefaultInstanceName?: string | null;

		/** Max length: 64 */
		IamRole?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		RegistrationLimit?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		RegistrationsCount?: number | null;
		ExpirationDate?: Date | null;
		Expired?: boolean | null;
		CreatedDate?: Date | null;

		/** Maximum items: 1000 */
		Tags?: Array<Tag>;
	}

	/** An activation registers one or more on-premises servers or virtual machines (VMs) with AWS so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with AWS is called a managed instance. */
	export interface ActivationFormProperties {
		ActivationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		DefaultInstanceName: FormControl<string | null | undefined>,

		/** Max length: 64 */
		IamRole: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		RegistrationLimit: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		RegistrationsCount: FormControl<number | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
		Expired: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateActivationFormGroup() {
		return new FormGroup<ActivationFormProperties>({
			ActivationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			DefaultInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			IamRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			RegistrationLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			RegistrationsCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			Expired: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeActivationsRequest {
		Filters?: Array<DescribeActivationsFilter>;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeActivationsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActivationsRequestFormGroup() {
		return new FormGroup<DescribeActivationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filter for the DescribeActivation API. */
	export interface DescribeActivationsFilter {
		FilterKey?: DescribeActivationsFilterFilterKey | null;
		FilterValues?: Array<string>;
	}

	/** Filter for the DescribeActivation API. */
	export interface DescribeActivationsFilterFormProperties {
		FilterKey: FormControl<DescribeActivationsFilterFilterKey | null | undefined>,
	}
	export function CreateDescribeActivationsFilterFormGroup() {
		return new FormGroup<DescribeActivationsFilterFormProperties>({
			FilterKey: new FormControl<DescribeActivationsFilterFilterKey | null | undefined>(undefined),
		});

	}

	export enum DescribeActivationsFilterFilterKey { ActivationIds = 0, DefaultInstanceName = 1, IamRole = 2 }

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

		/** Describes the parameters for a document. */
		AssociationDescription?: AssociationDescription;
	}
	export interface DescribeAssociationResultFormProperties {
	}
	export function CreateDescribeAssociationResultFormGroup() {
		return new FormGroup<DescribeAssociationResultFormProperties>({
		});

	}

	export interface DescribeAssociationRequest {
		Name?: string | null;
		InstanceId?: string | null;
		AssociationId?: string | null;
		AssociationVersion?: string | null;
	}
	export interface DescribeAssociationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssociationRequestFormGroup() {
		return new FormGroup<DescribeAssociationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			AssociationVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST)|([1-9][0-9]*)')]),
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
		NextToken?: string | null;
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
		AssociationId?: string | null;
		AssociationVersion?: string | null;
		ExecutionId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		ResourceType?: string | null;
		Status?: string | null;
		DetailedStatus?: string | null;
		LastExecutionDate?: Date | null;

		/** Information about the source where the association execution details are stored. */
		OutputSource?: OutputSource;
	}

	/** Includes information about the specified association execution. */
	export interface AssociationExecutionTargetFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		ExecutionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		DetailedStatus: FormControl<string | null | undefined>,
		LastExecutionDate: FormControl<Date | null | undefined>,
	}
	export function CreateAssociationExecutionTargetFormGroup() {
		return new FormGroup<AssociationExecutionTargetFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			AssociationVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST)|([1-9][0-9]*)')]),
			ExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			Status: new FormControl<string | null | undefined>(undefined),
			DetailedStatus: new FormControl<string | null | undefined>(undefined),
			LastExecutionDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the source where the association execution details are stored. */
	export interface OutputSource {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		OutputSourceId?: string | null;
		OutputSourceType?: string | null;
	}

	/** Information about the source where the association execution details are stored. */
	export interface OutputSourceFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		OutputSourceId: FormControl<string | null | undefined>,
		OutputSourceType: FormControl<string | null | undefined>,
	}
	export function CreateOutputSourceFormGroup() {
		return new FormGroup<OutputSourceFormProperties>({
			OutputSourceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			OutputSourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAssociationExecutionTargetsRequest {

		/** Required */
		AssociationId: string;

		/** Required */
		ExecutionId: string;

		/** Minimum items: 1 */
		Filters?: Array<AssociationExecutionTargetsFilter>;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeAssociationExecutionTargetsRequestFormProperties {

		/** Required */
		AssociationId: FormControl<string | null | undefined>,

		/** Required */
		ExecutionId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssociationExecutionTargetsRequestFormGroup() {
		return new FormGroup<DescribeAssociationExecutionTargetsRequestFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			ExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters for the association execution. */
	export interface AssociationExecutionTargetsFilter {

		/** Required */
		Key: AssociationExecutionTargetsFilterKey;

		/**
		 * Required
		 * Min length: 1
		 */
		Value: string;
	}

	/** Filters for the association execution. */
	export interface AssociationExecutionTargetsFilterFormProperties {

		/** Required */
		Key: FormControl<AssociationExecutionTargetsFilterKey | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAssociationExecutionTargetsFilterFormGroup() {
		return new FormGroup<AssociationExecutionTargetsFilterFormProperties>({
			Key: new FormControl<AssociationExecutionTargetsFilterKey | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
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
		NextToken?: string | null;
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
		AssociationId?: string | null;
		AssociationVersion?: string | null;
		ExecutionId?: string | null;
		Status?: string | null;
		DetailedStatus?: string | null;
		CreatedTime?: Date | null;
		LastExecutionDate?: Date | null;
		ResourceCountByStatus?: string | null;
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
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			AssociationVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST)|([1-9][0-9]*)')]),
			ExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
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

		/** Minimum items: 1 */
		Filters?: Array<AssociationExecutionFilter>;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeAssociationExecutionsRequestFormProperties {

		/** Required */
		AssociationId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssociationExecutionsRequestFormGroup() {
		return new FormGroup<DescribeAssociationExecutionsRequestFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters used in the request. */
	export interface AssociationExecutionFilter {

		/** Required */
		Key: AssociationExecutionFilterKey;

		/**
		 * Required
		 * Min length: 1
		 */
		Value: string;

		/** Required */
		Type: AssociationExecutionFilterType;
	}

	/** Filters used in the request. */
	export interface AssociationExecutionFilterFormProperties {

		/** Required */
		Key: FormControl<AssociationExecutionFilterKey | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<AssociationExecutionFilterType | null | undefined>,
	}
	export function CreateAssociationExecutionFilterFormGroup() {
		return new FormGroup<AssociationExecutionFilterFormProperties>({
			Key: new FormControl<AssociationExecutionFilterKey | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			Type: new FormControl<AssociationExecutionFilterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssociationExecutionFilterKey { ExecutionId = 0, Status = 1, CreatedTime = 2 }

	export enum AssociationExecutionFilterType { EQUAL = 0, LESS_THAN = 1, GREATER_THAN = 2 }

	export interface DescribeAutomationExecutionsResult {
		AutomationExecutionMetadataList?: Array<AutomationExecutionMetadata>;
		NextToken?: string | null;
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

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId?: string | null;
		DocumentName?: string | null;
		DocumentVersion?: string | null;
		AutomationExecutionStatus?: AutomationExecutionMetadataAutomationExecutionStatus | null;
		ExecutionStartTime?: Date | null;
		ExecutionEndTime?: Date | null;
		ExecutedBy?: string | null;
		LogFile?: string | null;
		Outputs?: AutomationParameterMap;
		Mode?: AutomationExecutionMetadataMode | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		ParentAutomationExecutionId?: string | null;
		CurrentStepName?: string | null;
		CurrentAction?: string | null;
		FailureMessage?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		TargetParameterName?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Minimum items: 0
		 * Maximum items: 300
		 */
		TargetMaps?: Array<TargetMap>;

		/** Information about targets that resolved during the Automation execution. */
		ResolvedTargets?: ResolvedTargets;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;
		Target?: string | null;
		AutomationType?: AutomationExecutionMetadataAutomationType | null;
	}

	/** Details about a specific Automation execution. */
	export interface AutomationExecutionMetadataFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		AutomationExecutionStatus: FormControl<AutomationExecutionMetadataAutomationExecutionStatus | null | undefined>,
		ExecutionStartTime: FormControl<Date | null | undefined>,
		ExecutionEndTime: FormControl<Date | null | undefined>,
		ExecutedBy: FormControl<string | null | undefined>,
		LogFile: FormControl<string | null | undefined>,
		Mode: FormControl<AutomationExecutionMetadataMode | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		ParentAutomationExecutionId: FormControl<string | null | undefined>,
		CurrentStepName: FormControl<string | null | undefined>,
		CurrentAction: FormControl<string | null | undefined>,
		FailureMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		TargetParameterName: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
		AutomationType: FormControl<AutomationExecutionMetadataAutomationType | null | undefined>,
	}
	export function CreateAutomationExecutionMetadataFormGroup() {
		return new FormGroup<AutomationExecutionMetadataFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			AutomationExecutionStatus: new FormControl<AutomationExecutionMetadataAutomationExecutionStatus | null | undefined>(undefined),
			ExecutionStartTime: new FormControl<Date | null | undefined>(undefined),
			ExecutionEndTime: new FormControl<Date | null | undefined>(undefined),
			ExecutedBy: new FormControl<string | null | undefined>(undefined),
			LogFile: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<AutomationExecutionMetadataMode | null | undefined>(undefined),
			ParentAutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			CurrentStepName: new FormControl<string | null | undefined>(undefined),
			CurrentAction: new FormControl<string | null | undefined>(undefined),
			FailureMessage: new FormControl<string | null | undefined>(undefined),
			TargetParameterName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			Target: new FormControl<string | null | undefined>(undefined),
			AutomationType: new FormControl<AutomationExecutionMetadataAutomationType | null | undefined>(undefined),
		});

	}

	export enum AutomationExecutionMetadataAutomationExecutionStatus { Pending = 0, InProgress = 1, Waiting = 2, Success = 3, TimedOut = 4, Cancelling = 5, Cancelled = 6, Failed = 7 }

	export interface AutomationParameterMap {
	}
	export interface AutomationParameterMapFormProperties {
	}
	export function CreateAutomationParameterMapFormGroup() {
		return new FormGroup<AutomationParameterMapFormProperties>({
		});

	}

	export enum AutomationExecutionMetadataMode { Auto = 0, Interactive = 1 }

	export interface TargetMap {
	}
	export interface TargetMapFormProperties {
	}
	export function CreateTargetMapFormGroup() {
		return new FormGroup<TargetMapFormProperties>({
		});

	}


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

	export enum AutomationExecutionMetadataAutomationType { CrossAccount = 0, Local = 1 }

	export interface DescribeAutomationExecutionsRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Filters?: Array<AutomationExecutionFilter>;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeAutomationExecutionsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAutomationExecutionsRequestFormGroup() {
		return new FormGroup<DescribeAutomationExecutionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned. */
	export interface AutomationExecutionFilter {

		/** Required */
		Key: AutomationExecutionFilterKey;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
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

	export enum AutomationExecutionFilterKey { DocumentNamePrefix = 0, ExecutionStatus = 1, ExecutionId = 2, ParentExecutionId = 3, CurrentAction = 4, StartTimeBefore = 5, StartTimeAfter = 6, AutomationType = 7, TagKey = 8 }

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
		NextToken?: string | null;
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
		StepName?: string | null;
		Action?: string | null;
		TimeoutSeconds?: number | null;
		OnFailure?: string | null;
		MaxAttempts?: number | null;
		ExecutionStartTime?: Date | null;
		ExecutionEndTime?: Date | null;
		StepStatus?: AutomationExecutionMetadataAutomationExecutionStatus | null;
		ResponseCode?: string | null;
		Inputs?: NormalStringMap;
		Outputs?: AutomationParameterMap;
		Response?: string | null;
		FailureMessage?: string | null;

		/** Information about an Automation failure. */
		FailureDetails?: FailureDetails;
		StepExecutionId?: string | null;
		OverriddenParameters?: AutomationParameterMap;
		IsEnd?: boolean | null;
		NextStep?: string | null;
		IsCritical?: boolean | null;
		ValidNextSteps?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/** The combination of AWS Regions and accounts targeted by the current Automation execution. */
		TargetLocation?: TargetLocation;
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
		StepStatus: FormControl<AutomationExecutionMetadataAutomationExecutionStatus | null | undefined>,
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
			Action: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^aws:[a-zA-Z]{3,25}$')]),
			TimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			OnFailure: new FormControl<string | null | undefined>(undefined),
			MaxAttempts: new FormControl<number | null | undefined>(undefined),
			ExecutionStartTime: new FormControl<Date | null | undefined>(undefined),
			ExecutionEndTime: new FormControl<Date | null | undefined>(undefined),
			StepStatus: new FormControl<AutomationExecutionMetadataAutomationExecutionStatus | null | undefined>(undefined),
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
		FailureStage?: string | null;
		FailureType?: string | null;
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


	/** The combination of AWS Regions and accounts targeted by the current Automation execution. */
	export interface TargetLocation {

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Accounts?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Regions?: Array<string>;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		TargetLocationMaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		TargetLocationMaxErrors?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExecutionRoleName?: string | null;
	}

	/** The combination of AWS Regions and accounts targeted by the current Automation execution. */
	export interface TargetLocationFormProperties {

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		TargetLocationMaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		TargetLocationMaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExecutionRoleName: FormControl<string | null | undefined>,
	}
	export function CreateTargetLocationFormGroup() {
		return new FormGroup<TargetLocationFormProperties>({
			TargetLocationMaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			TargetLocationMaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			ExecutionRoleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface DescribeAutomationStepExecutionsRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 6
		 */
		Filters?: Array<StepExecutionFilter>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		ReverseOrder?: boolean | null;
	}
	export interface DescribeAutomationStepExecutionsRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		ReverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeAutomationStepExecutionsRequestFormGroup() {
		return new FormGroup<DescribeAutomationStepExecutionsRequestFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			ReverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A filter to limit the amount of step execution information returned by the call. */
	export interface StepExecutionFilter {

		/** Required */
		Key: StepExecutionFilterKey;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
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
		NextToken?: string | null;
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

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Id?: string | null;
		ReleaseDate?: Date | null;
		Title?: string | null;
		Description?: string | null;
		ContentUrl?: string | null;
		Vendor?: string | null;
		ProductFamily?: string | null;
		Product?: string | null;
		Classification?: string | null;
		MsrcSeverity?: string | null;
		KbNumber?: string | null;
		MsrcNumber?: string | null;
		Language?: string | null;
	}

	/** Represents metadata about a patch. */
	export interface PatchFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
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
	}
	export function CreatePatchFormGroup() {
		return new FormGroup<PatchFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
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
		});

	}

	export interface DescribeAvailablePatchesRequest {

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<PatchOrchestratorFilter>;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeAvailablePatchesRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAvailablePatchesRequestFormGroup() {
		return new FormGroup<DescribeAvailablePatchesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a filter used in Patch Manager APIs. */
	export interface PatchOrchestratorFilter {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key?: string | null;
		Values?: Array<string>;
	}

	/** Defines a filter used in Patch Manager APIs. */
	export interface PatchOrchestratorFilterFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreatePatchOrchestratorFilterFormGroup() {
		return new FormGroup<PatchOrchestratorFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface DescribeDocumentResult {

		/** Describes a Systems Manager document. */
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
		DocumentVersion?: string | null;
		VersionName?: string | null;
	}
	export interface DescribeDocumentRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDocumentRequestFormGroup() {
		return new FormGroup<DescribeDocumentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{1,128}$')]),
		});

	}

	export interface DescribeDocumentPermissionResponse {

		/** Maximum items: 20 */
		AccountIds?: Array<string>;

		/** A list of of AWS accounts where the current document is shared and the version shared with each account. */
		AccountSharingInfoList?: Array<AccountSharingInfo>;
	}
	export interface DescribeDocumentPermissionResponseFormProperties {
	}
	export function CreateDescribeDocumentPermissionResponseFormGroup() {
		return new FormGroup<DescribeDocumentPermissionResponseFormProperties>({
		});

	}


	/** Information includes the AWS account ID where the current document is shared and the version shared with that account. */
	export interface AccountSharingInfo {
		AccountId?: string | null;

		/**
		 * The document version shared with other accounts. You can share <code>Latest</code>, <code>Default</code> or <code>All versions</code>.
		 * Max length: 8
		 */
		SharedDocumentVersion?: string | null;
	}

	/** Information includes the AWS account ID where the current document is shared and the version shared with that account. */
	export interface AccountSharingInfoFormProperties {
		AccountId: FormControl<string | null | undefined>,

		/**
		 * The document version shared with other accounts. You can share <code>Latest</code>, <code>Default</code> or <code>All versions</code>.
		 * Max length: 8
		 */
		SharedDocumentVersion: FormControl<string | null | undefined>,
	}
	export function CreateAccountSharingInfoFormGroup() {
		return new FormGroup<AccountSharingInfoFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\(\?i\)all\|[0-9]\{12\}')]),
			SharedDocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8), Validators.pattern('([$]LATEST|[$]DEFAULT|[$]ALL)')]),
		});

	}

	export interface DescribeDocumentPermissionRequest {

		/** Required */
		Name: string;

		/** Required */
		PermissionType: DescribeDocumentPermissionRequestPermissionType;
	}
	export interface DescribeDocumentPermissionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PermissionType: FormControl<DescribeDocumentPermissionRequestPermissionType | null | undefined>,
	}
	export function CreateDescribeDocumentPermissionRequestFormGroup() {
		return new FormGroup<DescribeDocumentPermissionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			PermissionType: new FormControl<DescribeDocumentPermissionRequestPermissionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DescribeDocumentPermissionRequestPermissionType { Share = 0 }

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
		NextToken?: string | null;
	}
	export interface DescribeEffectiveInstanceAssociationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEffectiveInstanceAssociationsResultFormGroup() {
		return new FormGroup<DescribeEffectiveInstanceAssociationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One or more association documents on the instance.  */
	export interface InstanceAssociation {
		AssociationId?: string | null;
		InstanceId?: string | null;

		/** Min length: 1 */
		Content?: string | null;
		AssociationVersion?: string | null;
	}

	/** One or more association documents on the instance.  */
	export interface InstanceAssociationFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		Content: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
	}
	export function CreateInstanceAssociationFormGroup() {
		return new FormGroup<InstanceAssociationFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			AssociationVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST)|([1-9][0-9]*)')]),
		});

	}

	export interface DescribeEffectiveInstanceAssociationsRequest {

		/** Required */
		InstanceId: string;

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeEffectiveInstanceAssociationsRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEffectiveInstanceAssociationsRequestFormGroup() {
		return new FormGroup<DescribeEffectiveInstanceAssociationsRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEffectivePatchesForPatchBaselineResult {
		EffectivePatches?: Array<EffectivePatch>;
		NextToken?: string | null;
	}
	export interface DescribeEffectivePatchesForPatchBaselineResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEffectivePatchesForPatchBaselineResultFormGroup() {
		return new FormGroup<DescribeEffectivePatchesForPatchBaselineResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The EffectivePatch structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved. */
	export interface EffectivePatch {

		/** Represents metadata about a patch. */
		Patch?: Patch;

		/** Information about the approval status of a patch. */
		PatchStatus?: PatchStatus;
	}

	/** The EffectivePatch structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved. */
	export interface EffectivePatchFormProperties {
	}
	export function CreateEffectivePatchFormGroup() {
		return new FormGroup<EffectivePatchFormProperties>({
		});

	}


	/** Information about the approval status of a patch. */
	export interface PatchStatus {
		DeploymentStatus?: PatchStatusDeploymentStatus | null;
		ComplianceLevel?: PatchRuleComplianceLevel | null;
		ApprovalDate?: Date | null;
	}

	/** Information about the approval status of a patch. */
	export interface PatchStatusFormProperties {
		DeploymentStatus: FormControl<PatchStatusDeploymentStatus | null | undefined>,
		ComplianceLevel: FormControl<PatchRuleComplianceLevel | null | undefined>,
		ApprovalDate: FormControl<Date | null | undefined>,
	}
	export function CreatePatchStatusFormGroup() {
		return new FormGroup<PatchStatusFormProperties>({
			DeploymentStatus: new FormControl<PatchStatusDeploymentStatus | null | undefined>(undefined),
			ComplianceLevel: new FormControl<PatchRuleComplianceLevel | null | undefined>(undefined),
			ApprovalDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PatchStatusDeploymentStatus { APPROVED = 0, PENDING_APPROVAL = 1, EXPLICIT_APPROVED = 2, EXPLICIT_REJECTED = 3 }

	export interface DescribeEffectivePatchesForPatchBaselineRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: string;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeEffectivePatchesForPatchBaselineRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEffectivePatchesForPatchBaselineRequestFormGroup() {
		return new FormGroup<DescribeEffectivePatchesForPatchBaselineRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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
		NextToken?: string | null;
	}
	export interface DescribeInstanceAssociationsStatusResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceAssociationsStatusResultFormGroup() {
		return new FormGroup<DescribeInstanceAssociationsStatusResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status information about the instance association. */
	export interface InstanceAssociationStatusInfo {
		AssociationId?: string | null;
		Name?: string | null;
		DocumentVersion?: string | null;
		AssociationVersion?: string | null;
		InstanceId?: string | null;
		ExecutionDate?: Date | null;
		Status?: string | null;
		DetailedStatus?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		ExecutionSummary?: string | null;

		/** Max length: 10 */
		ErrorCode?: string | null;

		/** The URL of S3 bucket where you want to store the results of this request. */
		OutputUrl?: InstanceAssociationOutputUrl;
		AssociationName?: string | null;
	}

	/** Status information about the instance association. */
	export interface InstanceAssociationStatusInfoFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		ExecutionDate: FormControl<Date | null | undefined>,
		Status: FormControl<string | null | undefined>,
		DetailedStatus: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		ExecutionSummary: FormControl<string | null | undefined>,

		/** Max length: 10 */
		ErrorCode: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,
	}
	export function CreateInstanceAssociationStatusInfoFormGroup() {
		return new FormGroup<InstanceAssociationStatusInfoFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			AssociationVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST)|([1-9][0-9]*)')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			ExecutionDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			DetailedStatus: new FormControl<string | null | undefined>(undefined),
			ExecutionSummary: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10)]),
			AssociationName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
		});

	}


	/** The URL of S3 bucket where you want to store the results of this request. */
	export interface InstanceAssociationOutputUrl {

		/** A URL for the S3 bucket where you want to store the results of this request. */
		S3OutputUrl?: S3OutputUrl;
	}

	/** The URL of S3 bucket where you want to store the results of this request. */
	export interface InstanceAssociationOutputUrlFormProperties {
	}
	export function CreateInstanceAssociationOutputUrlFormGroup() {
		return new FormGroup<InstanceAssociationOutputUrlFormProperties>({
		});

	}


	/** A URL for the S3 bucket where you want to store the results of this request. */
	export interface S3OutputUrl {
		OutputUrl?: string | null;
	}

	/** A URL for the S3 bucket where you want to store the results of this request. */
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

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeInstanceAssociationsStatusRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceAssociationsStatusRequestFormGroup() {
		return new FormGroup<DescribeInstanceAssociationsStatusRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstanceInformationResult {
		InstanceInformationList?: Array<InstanceInformation>;
		NextToken?: string | null;
	}
	export interface DescribeInstanceInformationResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceInformationResultFormGroup() {
		return new FormGroup<DescribeInstanceInformationResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a filter for a specific list of instances.  */
	export interface InstanceInformation {
		InstanceId?: string | null;
		PingStatus?: InstanceInformationPingStatus | null;
		LastPingDateTime?: Date | null;
		AgentVersion?: string | null;
		IsLatestVersion?: boolean | null;
		PlatformType?: PlatformType | null;
		PlatformName?: string | null;
		PlatformVersion?: string | null;
		ActivationId?: string | null;

		/** Max length: 64 */
		IamRole?: string | null;
		RegistrationDate?: Date | null;
		ResourceType?: InstanceInformationResourceType | null;
		Name?: string | null;

		/**
		 * Max length: 46
		 * Min length: 1
		 */
		IPAddress?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ComputerName?: string | null;
		AssociationStatus?: string | null;
		LastAssociationExecutionDate?: Date | null;
		LastSuccessfulAssociationExecutionDate?: Date | null;

		/** Status information about the aggregated associations. */
		AssociationOverview?: InstanceAggregatedAssociationOverview;
	}

	/** Describes a filter for a specific list of instances.  */
	export interface InstanceInformationFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		PingStatus: FormControl<InstanceInformationPingStatus | null | undefined>,
		LastPingDateTime: FormControl<Date | null | undefined>,
		AgentVersion: FormControl<string | null | undefined>,
		IsLatestVersion: FormControl<boolean | null | undefined>,
		PlatformType: FormControl<PlatformType | null | undefined>,
		PlatformName: FormControl<string | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		ActivationId: FormControl<string | null | undefined>,

		/** Max length: 64 */
		IamRole: FormControl<string | null | undefined>,
		RegistrationDate: FormControl<Date | null | undefined>,
		ResourceType: FormControl<InstanceInformationResourceType | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 46
		 * Min length: 1
		 */
		IPAddress: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ComputerName: FormControl<string | null | undefined>,
		AssociationStatus: FormControl<string | null | undefined>,
		LastAssociationExecutionDate: FormControl<Date | null | undefined>,
		LastSuccessfulAssociationExecutionDate: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceInformationFormGroup() {
		return new FormGroup<InstanceInformationFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			PingStatus: new FormControl<InstanceInformationPingStatus | null | undefined>(undefined),
			LastPingDateTime: new FormControl<Date | null | undefined>(undefined),
			AgentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1,6}(\.[0-9]{1,6}){2,3}$')]),
			IsLatestVersion: new FormControl<boolean | null | undefined>(undefined),
			PlatformType: new FormControl<PlatformType | null | undefined>(undefined),
			PlatformName: new FormControl<string | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			ActivationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
			IamRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			RegistrationDate: new FormControl<Date | null | undefined>(undefined),
			ResourceType: new FormControl<InstanceInformationResourceType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			IPAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(46)]),
			ComputerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			AssociationStatus: new FormControl<string | null | undefined>(undefined),
			LastAssociationExecutionDate: new FormControl<Date | null | undefined>(undefined),
			LastSuccessfulAssociationExecutionDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum InstanceInformationPingStatus { Online = 0, ConnectionLost = 1, Inactive = 2 }

	export enum InstanceInformationResourceType { ManagedInstance = 0, Document = 1, EC2Instance = 2 }


	/** Status information about the aggregated associations. */
	export interface InstanceAggregatedAssociationOverview {
		DetailedStatus?: string | null;
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

	export interface DescribeInstanceInformationRequest {

		/** Minimum items: 0 */
		InstanceInformationFilterList?: Array<InstanceInformationFilter>;

		/** Minimum items: 0 */
		Filters?: Array<InstanceInformationStringFilter>;

		/**
		 * Minimum: 5
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeInstanceInformationRequestFormProperties {

		/**
		 * Minimum: 5
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceInformationRequestFormGroup() {
		return new FormGroup<DescribeInstanceInformationRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a filter for a specific list of instances. You can filter instances information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this action instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and does not support tags. </p> */
	export interface InstanceInformationFilter {

		/** Required */
		key: InstanceInformationFilterKey;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		valueSet: Array<string>;
	}

	/** <p>Describes a filter for a specific list of instances. You can filter instances information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this action instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and does not support tags. </p> */
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


	/** The filters to describe or get information about your managed instances. */
	export interface InstanceInformationStringFilter {

		/**
		 * Required
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Values: Array<string>;
	}

	/** The filters to describe or get information about your managed instances. */
	export interface InstanceInformationStringFilterFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateInstanceInformationStringFilterFormGroup() {
		return new FormGroup<InstanceInformationStringFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
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
		NextToken?: string | null;
	}
	export interface DescribeInstancePatchStatesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstancePatchStatesResultFormGroup() {
		return new FormGroup<DescribeInstancePatchStatesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance. */
	export interface InstancePatchState {

		/** Required */
		InstanceId: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: string;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		SnapshotId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		InstallOverrideList?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation?: string | null;
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
		Operation: InstancePatchStateOperation;
		LastNoRebootInstallOperationTime?: Date | null;
		RebootOption?: InstancePatchStateRebootOption | null;
	}

	/** Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance. */
	export interface InstancePatchStateFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		SnapshotId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		InstallOverrideList: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
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
		Operation: FormControl<InstancePatchStateOperation | null | undefined>,
		LastNoRebootInstallOperationTime: FormControl<Date | null | undefined>,
		RebootOption: FormControl<InstancePatchStateRebootOption | null | undefined>,
	}
	export function CreateInstancePatchStateFormGroup() {
		return new FormGroup<InstancePatchStateFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')]),
			InstallOverrideList: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^https://.+$|^s3://([^/]+)/(.*?([^/]+))$')]),
			OwnerInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
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
			Operation: new FormControl<InstancePatchStateOperation | null | undefined>(undefined, [Validators.required]),
			LastNoRebootInstallOperationTime: new FormControl<Date | null | undefined>(undefined),
			RebootOption: new FormControl<InstancePatchStateRebootOption | null | undefined>(undefined),
		});

	}

	export enum InstancePatchStateOperation { Scan = 0, Install = 1 }

	export enum InstancePatchStateRebootOption { RebootIfNeeded = 0, NoReboot = 1 }

	export interface DescribeInstancePatchStatesRequest {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		InstanceIds: Array<string>;
		NextToken?: string | null;

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeInstancePatchStatesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeInstancePatchStatesRequestFormGroup() {
		return new FormGroup<DescribeInstancePatchStatesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(10), Validators.max(100)]),
		});

	}

	export interface DescribeInstancePatchStatesForPatchGroupResult {

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		InstancePatchStates?: Array<InstancePatchState>;
		NextToken?: string | null;
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 4
		 */
		Filters?: Array<InstancePatchStateFilter>;
		NextToken?: string | null;

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeInstancePatchStatesForPatchGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeInstancePatchStatesForPatchGroupRequestFormGroup() {
		return new FormGroup<DescribeInstancePatchStatesForPatchGroupRequestFormProperties>({
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(10), Validators.max(100)]),
		});

	}


	/** Defines a filter used in DescribeInstancePatchStatesForPatchGroup used to scope down the information returned by the API. */
	export interface InstancePatchStateFilter {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Values: Array<string>;

		/** Required */
		Type: InstancePatchStateFilterType;
	}

	/** Defines a filter used in DescribeInstancePatchStatesForPatchGroup used to scope down the information returned by the API. */
	export interface InstancePatchStateFilterFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<InstancePatchStateFilterType | null | undefined>,
	}
	export function CreateInstancePatchStateFilterFormGroup() {
		return new FormGroup<InstancePatchStateFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
			Type: new FormControl<InstancePatchStateFilterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InstancePatchStateFilterType { Equal = 0, NotEqual = 1, LessThan = 2, GreaterThan = 3 }

	export interface DescribeInstancePatchesResult {
		Patches?: Array<PatchComplianceData>;
		NextToken?: string | null;
	}
	export interface DescribeInstancePatchesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstancePatchesResultFormGroup() {
		return new FormGroup<DescribeInstancePatchesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance. */
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
	}

	/** Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance. */
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
	}
	export function CreatePatchComplianceDataFormGroup() {
		return new FormGroup<PatchComplianceDataFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KBId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Severity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<PatchComplianceDataState | null | undefined>(undefined, [Validators.required]),
			InstalledTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatchComplianceDataState { INSTALLED = 0, INSTALLED_OTHER = 1, INSTALLED_PENDING_REBOOT = 2, INSTALLED_REJECTED = 3, MISSING = 4, NOT_APPLICABLE = 5, FAILED = 6 }

	export interface DescribeInstancePatchesRequest {

		/** Required */
		InstanceId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<PatchOrchestratorFilter>;
		NextToken?: string | null;

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeInstancePatchesRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeInstancePatchesRequestFormGroup() {
		return new FormGroup<DescribeInstancePatchesRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(10), Validators.max(100)]),
		});

	}

	export interface DescribeInventoryDeletionsResult {
		InventoryDeletions?: Array<InventoryDeletionStatusItem>;
		NextToken?: string | null;
	}
	export interface DescribeInventoryDeletionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInventoryDeletionsResultFormGroup() {
		return new FormGroup<DescribeInventoryDeletionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status information returned by the <code>DeleteInventory</code> action. */
	export interface InventoryDeletionStatusItem {
		DeletionId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName?: string | null;
		DeletionStartTime?: Date | null;
		LastStatus?: InventoryDeletionStatusItemLastStatus | null;
		LastStatusMessage?: string | null;

		/** Information about the delete operation. */
		DeletionSummary?: InventoryDeletionSummary;
		LastStatusUpdateTime?: Date | null;
	}

	/** Status information returned by the <code>DeleteInventory</code> action. */
	export interface InventoryDeletionStatusItemFormProperties {
		DeletionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,
		DeletionStartTime: FormControl<Date | null | undefined>,
		LastStatus: FormControl<InventoryDeletionStatusItemLastStatus | null | undefined>,
		LastStatusMessage: FormControl<string | null | undefined>,
		LastStatusUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateInventoryDeletionStatusItemFormGroup() {
		return new FormGroup<InventoryDeletionStatusItemFormProperties>({
			DeletionId: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
			DeletionStartTime: new FormControl<Date | null | undefined>(undefined),
			LastStatus: new FormControl<InventoryDeletionStatusItemLastStatus | null | undefined>(undefined),
			LastStatusMessage: new FormControl<string | null | undefined>(undefined),
			LastStatusUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum InventoryDeletionStatusItemLastStatus { InProgress = 0, Complete = 1 }

	export interface DescribeInventoryDeletionsRequest {
		DeletionId?: string | null;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface DescribeInventoryDeletionsRequestFormProperties {
		DeletionId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeInventoryDeletionsRequestFormGroup() {
		return new FormGroup<DescribeInventoryDeletionsRequestFormProperties>({
			DeletionId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
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
		NextToken?: string | null;
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

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		TaskExecutionId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		InvocationId?: string | null;
		ExecutionId?: string | null;
		TaskType?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
		Parameters?: string | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation?: string | null;

		/** Max length: 36 */
		WindowTargetId?: string | null;
	}

	/** Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution. */
	export interface MaintenanceWindowExecutionTaskInvocationIdentityFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		TaskExecutionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		InvocationId: FormControl<string | null | undefined>,
		ExecutionId: FormControl<string | null | undefined>,
		TaskType: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>,
		Parameters: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>,

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation: FormControl<string | null | undefined>,

		/** Max length: 36 */
		WindowTargetId: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowExecutionTaskInvocationIdentityFormGroup() {
		return new FormGroup<MaintenanceWindowExecutionTaskInvocationIdentityFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			InvocationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			TaskType: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>(undefined),
			Parameters: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			OwnerInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			WindowTargetId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(36)]),
		});

	}

	export enum MaintenanceWindowExecutionTaskInvocationIdentityTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }

	export enum MaintenanceWindowExecutionTaskInvocationIdentityStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }

	export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		TaskId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<MaintenanceWindowFilter>;

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		TaskId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowExecutionTaskInvocationsRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowExecutionTaskInvocationsRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(10), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filter used in the request. Supported filter keys are Name and Enabled. */
	export interface MaintenanceWindowFilter {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key?: string | null;
		Values?: Array<string>;
	}

	/** Filter used in the request. Supported filter keys are Name and Enabled. */
	export interface MaintenanceWindowFilterFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowFilterFormGroup() {
		return new FormGroup<MaintenanceWindowFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface DescribeMaintenanceWindowExecutionTasksResult {
		WindowExecutionTaskIdentities?: Array<MaintenanceWindowExecutionTaskIdentity>;
		NextToken?: string | null;
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

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		TaskExecutionId?: string | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn?: string | null;
		TaskType?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
	}

	/** Information about a task execution performed as part of a maintenance window execution. */
	export interface MaintenanceWindowExecutionTaskIdentityFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		TaskExecutionId: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>,

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn: FormControl<string | null | undefined>,
		TaskType: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>,
	}
	export function CreateMaintenanceWindowExecutionTaskIdentityFormGroup() {
		return new FormGroup<MaintenanceWindowExecutionTaskIdentityFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			Status: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			TaskType: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowExecutionTasksRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<MaintenanceWindowFilter>;

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeMaintenanceWindowExecutionTasksRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowExecutionTasksRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowExecutionTasksRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(10), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowExecutionsResult {
		WindowExecutions?: Array<MaintenanceWindowExecution>;
		NextToken?: string | null;
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

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId?: string | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
	}

	/** Describes the information about an execution of a maintenance window.  */
	export interface MaintenanceWindowExecutionFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>,

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateMaintenanceWindowExecutionFormGroup() {
		return new FormGroup<MaintenanceWindowExecutionFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			Status: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowExecutionsRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<MaintenanceWindowFilter>;

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeMaintenanceWindowExecutionsRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowExecutionsRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowExecutionsRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(10), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowScheduleResult {
		ScheduledWindowExecutions?: Array<ScheduledWindowExecution>;
		NextToken?: string | null;
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

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;
		ExecutionTime?: string | null;
	}

	/** Information about a scheduled execution for a maintenance window. */
	export interface ScheduledWindowExecutionFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,
		ExecutionTime: FormControl<string | null | undefined>,
	}
	export function CreateScheduledWindowExecutionFormGroup() {
		return new FormGroup<ScheduledWindowExecutionFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			ExecutionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowScheduleRequest {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;
		ResourceType?: DescribeMaintenanceWindowScheduleRequestResourceType | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<PatchOrchestratorFilter>;

		/** Minimum: 1 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeMaintenanceWindowScheduleRequestFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,
		ResourceType: FormControl<DescribeMaintenanceWindowScheduleRequestResourceType | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowScheduleRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowScheduleRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			ResourceType: new FormControl<DescribeMaintenanceWindowScheduleRequestResourceType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeMaintenanceWindowScheduleRequestResourceType { INSTANCE = 0, RESOURCE_GROUP = 1 }

	export interface DescribeMaintenanceWindowTargetsResult {
		Targets?: Array<MaintenanceWindowTarget>;
		NextToken?: string | null;
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

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId?: string | null;
		ResourceType?: DescribeMaintenanceWindowScheduleRequestResourceType | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/** The target registered with the maintenance window. */
	export interface MaintenanceWindowTargetFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId: FormControl<string | null | undefined>,
		ResourceType: FormControl<DescribeMaintenanceWindowScheduleRequestResourceType | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowTargetFormGroup() {
		return new FormGroup<MaintenanceWindowTargetFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTargetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			ResourceType: new FormControl<DescribeMaintenanceWindowScheduleRequestResourceType | null | undefined>(undefined),
			OwnerInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface DescribeMaintenanceWindowTargetsRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<MaintenanceWindowFilter>;

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeMaintenanceWindowTargetsRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowTargetsRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowTargetsRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(10), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowTasksResult {
		Tasks?: Array<MaintenanceWindowTask>;
		NextToken?: string | null;
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

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn?: string | null;
		Type?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;
		TaskParameters?: MaintenanceWindowTaskParameters;

		/** Minimum: 0 */
		Priority?: number | null;

		/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo;
		ServiceRoleArn?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/** Information about a task defined for a maintenance window. */
	export interface MaintenanceWindowTaskFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn: FormControl<string | null | undefined>,
		Type: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>,

		/** Minimum: 0 */
		Priority: FormControl<number | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowTaskFormGroup() {
		return new FormGroup<MaintenanceWindowTaskFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			Type: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
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


	/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
	export interface LoggingInfo {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		S3BucketName: string;

		/** Max length: 500 */
		S3KeyPrefix?: string | null;

		/**
		 * Required
		 * Max length: 20
		 * Min length: 3
		 */
		S3Region: string;
	}

	/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
	export interface LoggingInfoFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		S3BucketName: FormControl<string | null | undefined>,

		/** Max length: 500 */
		S3KeyPrefix: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 20
		 * Min length: 3
		 */
		S3Region: FormControl<string | null | undefined>,
	}
	export function CreateLoggingInfoFormGroup() {
		return new FormGroup<LoggingInfoFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63)]),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			S3Region: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
		});

	}

	export interface DescribeMaintenanceWindowTasksRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<MaintenanceWindowFilter>;

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeMaintenanceWindowTasksRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowTasksRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowTasksRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(10), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowsResult {
		WindowIdentities?: Array<MaintenanceWindowIdentity>;
		NextToken?: string | null;
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

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
		Enabled?: boolean | null;

		/**
		 * Minimum: 1
		 * Maximum: 24
		 */
		Duration?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 23
		 */
		Cutoff?: number | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Schedule?: string | null;
		ScheduleTimezone?: string | null;
		EndDate?: string | null;
		StartDate?: string | null;
		NextExecutionTime?: string | null;
	}

	/** Information about the maintenance window. */
	export interface MaintenanceWindowIdentityFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 24
		 */
		Duration: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 23
		 */
		Cutoff: FormControl<number | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Schedule: FormControl<string | null | undefined>,
		ScheduleTimezone: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		NextExecutionTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowIdentityFormGroup() {
		return new FormGroup<MaintenanceWindowIdentityFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(24)]),
			Cutoff: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(23)]),
			Schedule: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ScheduleTimezone: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			NextExecutionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowsRequest {

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<MaintenanceWindowFilter>;

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeMaintenanceWindowsRequestFormProperties {

		/**
		 * Minimum: 10
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowsRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(10), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowsForTargetResult {
		WindowIdentities?: Array<MaintenanceWindowIdentityForTarget>;
		NextToken?: string | null;
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

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;
	}

	/** The maintenance window to which the specified target belongs. */
	export interface MaintenanceWindowIdentityForTargetFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowIdentityForTargetFormGroup() {
		return new FormGroup<MaintenanceWindowIdentityForTargetFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
		});

	}

	export interface DescribeMaintenanceWindowsForTargetRequest {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets: Array<Target>;

		/** Required */
		ResourceType: DescribeMaintenanceWindowScheduleRequestResourceType;

		/** Minimum: 1 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeMaintenanceWindowsForTargetRequestFormProperties {

		/** Required */
		ResourceType: FormControl<DescribeMaintenanceWindowScheduleRequestResourceType | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowsForTargetRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowsForTargetRequestFormProperties>({
			ResourceType: new FormControl<DescribeMaintenanceWindowScheduleRequestResourceType | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOpsItemsResponse {
		NextToken?: string | null;
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
		CreatedBy?: string | null;
		CreatedTime?: Date | null;
		LastModifiedBy?: string | null;
		LastModifiedTime?: Date | null;

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		Priority?: number | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Source?: string | null;
		Status?: OpsItemSummaryStatus | null;
		OpsItemId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Title?: string | null;
		OperationalData?: OpsItemOperationalData;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Category?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Severity?: string | null;
	}

	/** A count of OpsItems. */
	export interface OpsItemSummaryFormProperties {
		CreatedBy: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		Priority: FormControl<number | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Source: FormControl<string | null | undefined>,
		Status: FormControl<OpsItemSummaryStatus | null | undefined>,
		OpsItemId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Title: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Category: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Severity: FormControl<string | null | undefined>,
	}
	export function CreateOpsItemSummaryFormGroup() {
		return new FormGroup<OpsItemSummaryFormProperties>({
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Status: new FormControl<OpsItemSummaryStatus | null | undefined>(undefined),
			OpsItemId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(oi)-[0-9a-f]{12}$')]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Category: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Severity: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export enum OpsItemSummaryStatus { Open = 0, InProgress = 1, Resolved = 2 }

	export interface DescribeOpsItemsRequest {
		OpsItemFilters?: Array<OpsItemFilter>;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeOpsItemsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOpsItemsRequestFormGroup() {
		return new FormGroup<DescribeOpsItemsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
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

	export enum OpsItemFilterKey { Status = 0, CreatedBy = 1, Source = 2, Priority = 3, Title = 4, OpsItemId = 5, CreatedTime = 6, LastModifiedTime = 7, OperationalData = 8, OperationalDataKey = 9, OperationalDataValue = 10, ResourceId = 11, AutomationId = 12, Category = 13, Severity = 14 }

	export enum OpsItemFilterOperator { Equal = 0, Contains = 1, GreaterThan = 2, LessThan = 3 }

	export interface DescribeParametersResult {
		Parameters?: Array<ParameterMetadata>;
		NextToken?: string | null;
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

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;
		Type?: ParameterMetadataType | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		KeyId?: string | null;
		LastModifiedDate?: Date | null;
		LastModifiedUser?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AllowedPattern?: string | null;
		Version?: number | null;
		Tier?: ParameterMetadataTier | null;
		Policies?: Array<ParameterInlinePolicy>;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		DataType?: string | null;
	}

	/** Metadata includes information like the ARN of the last user and the date/time the parameter was last used. */
	export interface ParameterMetadataFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ParameterMetadataType | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedUser: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AllowedPattern: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Tier: FormControl<ParameterMetadataTier | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateParameterMetadataFormGroup() {
		return new FormGroup<ParameterMetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			Type: new FormControl<ParameterMetadataType | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([a-zA-Z0-9:/_-]+)$')]),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedUser: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			AllowedPattern: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Version: new FormControl<number | null | undefined>(undefined),
			Tier: new FormControl<ParameterMetadataTier | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
		});

	}

	export enum ParameterMetadataType { String = 0, StringList = 1, SecureString = 2 }

	export enum ParameterMetadataTier { Standard = 0, Advanced = 1, 'Intelligent-Tiering' = 2 }


	/** One or more policies assigned to a parameter. */
	export interface ParameterInlinePolicy {
		PolicyText?: string | null;
		PolicyType?: string | null;
		PolicyStatus?: string | null;
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

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeParametersRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParametersRequestFormGroup() {
		return new FormGroup<DescribeParametersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This data type is deprecated. Instead, use <a>ParameterStringFilter</a>. */
	export interface ParametersFilter {

		/** Required */
		Key: ParametersFilterKey;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
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


	/** <p>One or more filters. Use a filter to return a more specific list of results.</p> <important> <p>The <code>ParameterStringFilter</code> object is used by the <a>DescribeParameters</a> and <a>GetParametersByPath</a> API actions. However, not all of the pattern values listed for <code>Key</code> can be used with both actions.</p> <p>For <code>DescribeActions</code>, all of the listed patterns are valid, with the exception of <code>Label</code>.</p> <p>For <code>GetParametersByPath</code>, the following patterns listed for <code>Key</code> are not valid: <code>Name</code>, <code>Path</code>, and <code>Tier</code>.</p> <p>For examples of CLI commands demonstrating valid parameter filter constructions, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-search.html">Searching for Systems Manager parameters</a> in the <i>AWS Systems Manager User Guide</i>.</p> </important> */
	export interface ParameterStringFilter {

		/**
		 * Required
		 * Max length: 132
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		Option?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Values?: Array<string>;
	}

	/** <p>One or more filters. Use a filter to return a more specific list of results.</p> <important> <p>The <code>ParameterStringFilter</code> object is used by the <a>DescribeParameters</a> and <a>GetParametersByPath</a> API actions. However, not all of the pattern values listed for <code>Key</code> can be used with both actions.</p> <p>For <code>DescribeActions</code>, all of the listed patterns are valid, with the exception of <code>Label</code>.</p> <p>For <code>GetParametersByPath</code>, the following patterns listed for <code>Key</code> are not valid: <code>Name</code>, <code>Path</code>, and <code>Tier</code>.</p> <p>For examples of CLI commands demonstrating valid parameter filter constructions, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-search.html">Searching for Systems Manager parameters</a> in the <i>AWS Systems Manager User Guide</i>.</p> </important> */
	export interface ParameterStringFilterFormProperties {

		/**
		 * Required
		 * Max length: 132
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		Option: FormControl<string | null | undefined>,
	}
	export function CreateParameterStringFilterFormGroup() {
		return new FormGroup<ParameterStringFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(132), Validators.pattern('tag:.+|Name|Type|KeyId|Path|Label|Tier|DataType')]),
			Option: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10)]),
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
		NextToken?: string | null;
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

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		BaselineName?: string | null;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		BaselineDescription?: string | null;
		DefaultBaseline?: boolean | null;
	}

	/** Defines the basic information about a patch baseline. */
	export interface PatchBaselineIdentityFormProperties {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		BaselineName: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		BaselineDescription: FormControl<string | null | undefined>,
		DefaultBaseline: FormControl<boolean | null | undefined>,
	}
	export function CreatePatchBaselineIdentityFormGroup() {
		return new FormGroup<PatchBaselineIdentityFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			BaselineName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			OperatingSystem: new FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>(undefined),
			BaselineDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			DefaultBaseline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribePatchBaselinesRequest {

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<PatchOrchestratorFilter>;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribePatchBaselinesRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchBaselinesRequestFormGroup() {
		return new FormGroup<DescribePatchBaselinesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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
		});

	}

	export interface DescribePatchGroupStateRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: string;
	}
	export interface DescribePatchGroupStateRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchGroupStateRequestFormGroup() {
		return new FormGroup<DescribePatchGroupStateRequestFormProperties>({
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface DescribePatchGroupsResult {
		Mappings?: Array<PatchGroupPatchBaselineMapping>;
		NextToken?: string | null;
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

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup?: string | null;

		/** Defines the basic information about a patch baseline. */
		BaselineIdentity?: PatchBaselineIdentity;
	}

	/** The mapping between a patch group and the patch baseline the patch group is registered with. */
	export interface PatchGroupPatchBaselineMappingFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreatePatchGroupPatchBaselineMappingFormGroup() {
		return new FormGroup<PatchGroupPatchBaselineMappingFormProperties>({
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface DescribePatchGroupsRequest {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Filters?: Array<PatchOrchestratorFilter>;
		NextToken?: string | null;
	}
	export interface DescribePatchGroupsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchGroupsRequestFormGroup() {
		return new FormGroup<DescribePatchGroupsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePatchPropertiesResult {
		Properties?: Array<PatchPropertyEntry>;
		NextToken?: string | null;
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
		OperatingSystem: CreatePatchBaselineRequestOperatingSystem;

		/** Required */
		Property: DescribePatchPropertiesRequestProperty;
		PatchSet?: DescribePatchPropertiesRequestPatchSet | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribePatchPropertiesRequestFormProperties {

		/** Required */
		OperatingSystem: FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>,

		/** Required */
		Property: FormControl<DescribePatchPropertiesRequestProperty | null | undefined>,
		PatchSet: FormControl<DescribePatchPropertiesRequestPatchSet | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchPropertiesRequestFormGroup() {
		return new FormGroup<DescribePatchPropertiesRequestFormProperties>({
			OperatingSystem: new FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>(undefined, [Validators.required]),
			Property: new FormControl<DescribePatchPropertiesRequestProperty | null | undefined>(undefined, [Validators.required]),
			PatchSet: new FormControl<DescribePatchPropertiesRequestPatchSet | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribePatchPropertiesRequestProperty { PRODUCT = 0, PRODUCT_FAMILY = 1, CLASSIFICATION = 2, MSRC_SEVERITY = 3, PRIORITY = 4, SEVERITY = 5 }

	export enum DescribePatchPropertiesRequestPatchSet { OS = 0, APPLICATION = 1 }

	export interface DescribeSessionsResponse {
		Sessions?: Array<Session>;
		NextToken?: string | null;
	}
	export interface DescribeSessionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSessionsResponseFormGroup() {
		return new FormGroup<DescribeSessionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Session Manager connection to an instance. */
	export interface Session {

		/**
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId?: string | null;

		/**
		 * Max length: 400
		 * Min length: 1
		 */
		Target?: string | null;
		Status?: SessionStatus | null;
		StartDate?: Date | null;
		EndDate?: Date | null;
		DocumentName?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Owner?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Details?: string | null;

		/** Reserved for future use. */
		OutputUrl?: SessionManagerOutputUrl;
	}

	/** Information about a Session Manager connection to an instance. */
	export interface SessionFormProperties {

		/**
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 400
		 * Min length: 1
		 */
		Target: FormControl<string | null | undefined>,
		Status: FormControl<SessionStatus | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		EndDate: FormControl<Date | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Owner: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Details: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(96)]),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(400)]),
			Status: new FormControl<SessionStatus | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Details: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum SessionStatus { Connected = 0, Connecting = 1, Disconnected = 2, Terminated = 3, Terminating = 4, Failed = 5 }


	/** Reserved for future use. */
	export interface SessionManagerOutputUrl {

		/**
		 * Max length: 2083
		 * Min length: 1
		 */
		S3OutputUrl?: string | null;

		/**
		 * Max length: 2083
		 * Min length: 1
		 */
		CloudWatchOutputUrl?: string | null;
	}

	/** Reserved for future use. */
	export interface SessionManagerOutputUrlFormProperties {

		/**
		 * Max length: 2083
		 * Min length: 1
		 */
		S3OutputUrl: FormControl<string | null | undefined>,

		/**
		 * Max length: 2083
		 * Min length: 1
		 */
		CloudWatchOutputUrl: FormControl<string | null | undefined>,
	}
	export function CreateSessionManagerOutputUrlFormGroup() {
		return new FormGroup<SessionManagerOutputUrlFormProperties>({
			S3OutputUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2083)]),
			CloudWatchOutputUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2083)]),
		});

	}

	export interface DescribeSessionsRequest {

		/** Required */
		State: DescribeSessionsRequestState;

		/**
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
		NextToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Filters?: Array<SessionFilter>;
	}
	export interface DescribeSessionsRequestFormProperties {

		/** Required */
		State: FormControl<DescribeSessionsRequestState | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSessionsRequestFormGroup() {
		return new FormGroup<DescribeSessionsRequestFormProperties>({
			State: new FormControl<DescribeSessionsRequestState | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeSessionsRequestState { Active = 0, History = 1 }


	/** Describes a filter for Session Manager information. */
	export interface SessionFilter {

		/** Required */
		key: SessionFilterKey;

		/**
		 * Required
		 * Max length: 400
		 * Min length: 1
		 */
		value: string;
	}

	/** Describes a filter for Session Manager information. */
	export interface SessionFilterFormProperties {

		/** Required */
		key: FormControl<SessionFilterKey | null | undefined>,

		/**
		 * Required
		 * Max length: 400
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSessionFilterFormGroup() {
		return new FormGroup<SessionFilterFormProperties>({
			key: new FormControl<SessionFilterKey | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(400)]),
		});

	}

	export enum SessionFilterKey { InvokedAfter = 0, InvokedBefore = 1, Target = 2, Owner = 3, Status = 4 }

	export interface GetAutomationExecutionResult {

		/** Detailed information about the current state of an individual Automation execution. */
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

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId?: string | null;
		DocumentName?: string | null;
		DocumentVersion?: string | null;
		ExecutionStartTime?: Date | null;
		ExecutionEndTime?: Date | null;
		AutomationExecutionStatus?: AutomationExecutionMetadataAutomationExecutionStatus | null;
		StepExecutions?: Array<StepExecution>;
		StepExecutionsTruncated?: boolean | null;
		Parameters?: AutomationParameterMap;
		Outputs?: AutomationParameterMap;
		FailureMessage?: string | null;
		Mode?: AutomationExecutionMetadataMode | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		ParentAutomationExecutionId?: string | null;
		ExecutedBy?: string | null;
		CurrentStepName?: string | null;
		CurrentAction?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		TargetParameterName?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Minimum items: 0
		 * Maximum items: 300
		 */
		TargetMaps?: Array<TargetMap>;

		/** Information about targets that resolved during the Automation execution. */
		ResolvedTargets?: ResolvedTargets;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;
		Target?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		TargetLocations?: Array<TargetLocation>;

		/** An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution. */
		ProgressCounters?: ProgressCounters;
	}

	/** Detailed information about the current state of an individual Automation execution. */
	export interface AutomationExecutionFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		ExecutionStartTime: FormControl<Date | null | undefined>,
		ExecutionEndTime: FormControl<Date | null | undefined>,
		AutomationExecutionStatus: FormControl<AutomationExecutionMetadataAutomationExecutionStatus | null | undefined>,
		StepExecutionsTruncated: FormControl<boolean | null | undefined>,
		FailureMessage: FormControl<string | null | undefined>,
		Mode: FormControl<AutomationExecutionMetadataMode | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		ParentAutomationExecutionId: FormControl<string | null | undefined>,
		ExecutedBy: FormControl<string | null | undefined>,
		CurrentStepName: FormControl<string | null | undefined>,
		CurrentAction: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		TargetParameterName: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreateAutomationExecutionFormGroup() {
		return new FormGroup<AutomationExecutionFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			ExecutionStartTime: new FormControl<Date | null | undefined>(undefined),
			ExecutionEndTime: new FormControl<Date | null | undefined>(undefined),
			AutomationExecutionStatus: new FormControl<AutomationExecutionMetadataAutomationExecutionStatus | null | undefined>(undefined),
			StepExecutionsTruncated: new FormControl<boolean | null | undefined>(undefined),
			FailureMessage: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<AutomationExecutionMetadataMode | null | undefined>(undefined),
			ParentAutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			ExecutedBy: new FormControl<string | null | undefined>(undefined),
			CurrentStepName: new FormControl<string | null | undefined>(undefined),
			CurrentAction: new FormControl<string | null | undefined>(undefined),
			TargetParameterName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution. */
	export interface ProgressCounters {
		TotalSteps?: number | null;
		SuccessSteps?: number | null;
		FailedSteps?: number | null;
		CancelledSteps?: number | null;
		TimedOutSteps?: number | null;
	}

	/** An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution. */
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

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: string;
	}
	export interface GetAutomationExecutionRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetAutomationExecutionRequestFormGroup() {
		return new FormGroup<GetAutomationExecutionRequestFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
		});

	}

	export interface GetCalendarStateResponse {
		State?: GetCalendarStateResponseState | null;
		AtTime?: string | null;
		NextTransitionTime?: string | null;
	}
	export interface GetCalendarStateResponseFormProperties {
		State: FormControl<GetCalendarStateResponseState | null | undefined>,
		AtTime: FormControl<string | null | undefined>,
		NextTransitionTime: FormControl<string | null | undefined>,
	}
	export function CreateGetCalendarStateResponseFormGroup() {
		return new FormGroup<GetCalendarStateResponseFormProperties>({
			State: new FormControl<GetCalendarStateResponseState | null | undefined>(undefined),
			AtTime: new FormControl<string | null | undefined>(undefined),
			NextTransitionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetCalendarStateResponseState { OPEN = 0, CLOSED = 1 }

	export interface GetCalendarStateRequest {

		/** Required */
		CalendarNames: Array<string>;
		AtTime?: string | null;
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

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId?: string | null;
		InstanceId?: string | null;

		/** Max length: 100 */
		Comment?: string | null;
		DocumentName?: string | null;
		DocumentVersion?: string | null;

		/** Min length: 4 */
		PluginName?: string | null;
		ResponseCode?: number | null;
		ExecutionStartDateTime?: string | null;
		ExecutionElapsedTime?: string | null;
		ExecutionEndDateTime?: string | null;
		Status?: GetCommandInvocationResultStatus | null;

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		StatusDetails?: string | null;

		/** Max length: 24000 */
		StandardOutputContent?: string | null;
		StandardOutputUrl?: string | null;

		/** Max length: 8000 */
		StandardErrorContent?: string | null;
		StandardErrorUrl?: string | null;

		/** Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
	}
	export interface GetCommandInvocationResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,

		/** Max length: 100 */
		Comment: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/** Min length: 4 */
		PluginName: FormControl<string | null | undefined>,
		ResponseCode: FormControl<number | null | undefined>,
		ExecutionStartDateTime: FormControl<string | null | undefined>,
		ExecutionElapsedTime: FormControl<string | null | undefined>,
		ExecutionEndDateTime: FormControl<string | null | undefined>,
		Status: FormControl<GetCommandInvocationResultStatus | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		StatusDetails: FormControl<string | null | undefined>,

		/** Max length: 24000 */
		StandardOutputContent: FormControl<string | null | undefined>,
		StandardOutputUrl: FormControl<string | null | undefined>,

		/** Max length: 8000 */
		StandardErrorContent: FormControl<string | null | undefined>,
		StandardErrorUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetCommandInvocationResultFormGroup() {
		return new FormGroup<GetCommandInvocationResultFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			PluginName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4)]),
			ResponseCode: new FormControl<number | null | undefined>(undefined),
			ExecutionStartDateTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([\-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d(?!:))?)?(\\17[0-5]\d([\.,]\d)?)?([zZ]|([\-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$')]),
			ExecutionElapsedTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([\-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d(?!:))?)?(\\17[0-5]\d([\.,]\d)?)?([zZ]|([\-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$')]),
			ExecutionEndDateTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([\-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d(?!:))?)?(\\17[0-5]\d([\.,]\d)?)?([zZ]|([\-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$')]),
			Status: new FormControl<GetCommandInvocationResultStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			StandardOutputContent: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(24000)]),
			StandardOutputUrl: new FormControl<string | null | undefined>(undefined),
			StandardErrorContent: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8000)]),
			StandardErrorUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetCommandInvocationResultStatus { Pending = 0, InProgress = 1, Delayed = 2, Success = 3, Cancelled = 4, TimedOut = 5, Failed = 6, Cancelling = 7 }


	/** Configuration options for sending command output to CloudWatch Logs. */
	export interface CloudWatchOutputConfig {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		CloudWatchLogGroupName?: string | null;
		CloudWatchOutputEnabled?: boolean | null;
	}

	/** Configuration options for sending command output to CloudWatch Logs. */
	export interface CloudWatchOutputConfigFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		CloudWatchLogGroupName: FormControl<string | null | undefined>,
		CloudWatchOutputEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCloudWatchOutputConfigFormGroup() {
		return new FormGroup<CloudWatchOutputConfigFormProperties>({
			CloudWatchLogGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			CloudWatchOutputEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetCommandInvocationRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId: string;

		/** Required */
		InstanceId: string;

		/** Min length: 4 */
		PluginName?: string | null;
	}
	export interface GetCommandInvocationRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Min length: 4 */
		PluginName: FormControl<string | null | undefined>,
	}
	export function CreateGetCommandInvocationRequestFormGroup() {
		return new FormGroup<GetCommandInvocationRequestFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			PluginName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4)]),
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

		/**
		 * Max length: 400
		 * Min length: 1
		 */
		Target?: string | null;
		Status?: GetConnectionStatusResponseStatus | null;
	}
	export interface GetConnectionStatusResponseFormProperties {

		/**
		 * Max length: 400
		 * Min length: 1
		 */
		Target: FormControl<string | null | undefined>,
		Status: FormControl<GetConnectionStatusResponseStatus | null | undefined>,
	}
	export function CreateGetConnectionStatusResponseFormGroup() {
		return new FormGroup<GetConnectionStatusResponseFormProperties>({
			Target: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(400)]),
			Status: new FormControl<GetConnectionStatusResponseStatus | null | undefined>(undefined),
		});

	}

	export enum GetConnectionStatusResponseStatus { Connected = 0, NotConnected = 1 }

	export interface GetConnectionStatusRequest {

		/**
		 * Required
		 * Max length: 400
		 * Min length: 1
		 */
		Target: string;
	}
	export interface GetConnectionStatusRequestFormProperties {

		/**
		 * Required
		 * Max length: 400
		 * Min length: 1
		 */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectionStatusRequestFormGroup() {
		return new FormGroup<GetConnectionStatusRequestFormProperties>({
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(400)]),
		});

	}

	export interface GetDefaultPatchBaselineResult {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId?: string | null;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;
	}
	export interface GetDefaultPatchBaselineResultFormProperties {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>,
	}
	export function CreateGetDefaultPatchBaselineResultFormGroup() {
		return new FormGroup<GetDefaultPatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			OperatingSystem: new FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>(undefined),
		});

	}

	export interface GetDefaultPatchBaselineRequest {
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;
	}
	export interface GetDefaultPatchBaselineRequestFormProperties {
		OperatingSystem: FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>,
	}
	export function CreateGetDefaultPatchBaselineRequestFormGroup() {
		return new FormGroup<GetDefaultPatchBaselineRequestFormProperties>({
			OperatingSystem: new FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>(undefined),
		});

	}

	export interface GetDeployablePatchSnapshotForInstanceResult {
		InstanceId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		SnapshotId?: string | null;
		SnapshotDownloadUrl?: string | null;
		Product?: string | null;
	}
	export interface GetDeployablePatchSnapshotForInstanceResultFormProperties {
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		SnapshotId: FormControl<string | null | undefined>,
		SnapshotDownloadUrl: FormControl<string | null | undefined>,
		Product: FormControl<string | null | undefined>,
	}
	export function CreateGetDeployablePatchSnapshotForInstanceResultFormGroup() {
		return new FormGroup<GetDeployablePatchSnapshotForInstanceResultFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')]),
			SnapshotDownloadUrl: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDeployablePatchSnapshotForInstanceRequest {

		/** Required */
		InstanceId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		SnapshotId: string;
	}
	export interface GetDeployablePatchSnapshotForInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateGetDeployablePatchSnapshotForInstanceRequestFormGroup() {
		return new FormGroup<GetDeployablePatchSnapshotForInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')]),
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
		Name?: string | null;
		VersionName?: string | null;
		DocumentVersion?: string | null;

		/** The status of a document. */
		Status?: DocumentDescriptionStatus | null;
		StatusInformation?: string | null;

		/** Min length: 1 */
		Content?: string | null;
		DocumentType?: DocumentDescriptionDocumentType | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;

		/** Minimum items: 1 */
		Requires?: Array<DocumentRequires>;
		AttachmentsContent?: Array<AttachmentContent>;
	}
	export interface GetDocumentResultFormProperties {
		Name: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/** The status of a document. */
		Status: FormControl<DocumentDescriptionStatus | null | undefined>,
		StatusInformation: FormControl<string | null | undefined>,

		/** Min length: 1 */
		Content: FormControl<string | null | undefined>,
		DocumentType: FormControl<DocumentDescriptionDocumentType | null | undefined>,
		DocumentFormat: FormControl<DocumentDescriptionDocumentFormat | null | undefined>,
	}
	export function CreateGetDocumentResultFormGroup() {
		return new FormGroup<GetDocumentResultFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{1,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			Status: new FormControl<DocumentDescriptionStatus | null | undefined>(undefined),
			StatusInformation: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			DocumentType: new FormControl<DocumentDescriptionDocumentType | null | undefined>(undefined),
			DocumentFormat: new FormControl<DocumentDescriptionDocumentFormat | null | undefined>(undefined),
		});

	}


	/** A structure that includes attributes that describe a document attachment. */
	export interface AttachmentContent {
		Name?: string | null;
		Size?: number | null;

		/** Max length: 256 */
		Hash?: string | null;
		HashType?: AttachmentContentHashType | null;
		Url?: string | null;
	}

	/** A structure that includes attributes that describe a document attachment. */
	export interface AttachmentContentFormProperties {
		Name: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,

		/** Max length: 256 */
		Hash: FormControl<string | null | undefined>,
		HashType: FormControl<AttachmentContentHashType | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentContentFormGroup() {
		return new FormGroup<AttachmentContentFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Size: new FormControl<number | null | undefined>(undefined),
			Hash: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			HashType: new FormControl<AttachmentContentHashType | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttachmentContentHashType { Sha256 = 0 }

	export interface GetDocumentRequest {

		/** Required */
		Name: string;
		VersionName?: string | null;
		DocumentVersion?: string | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;
	}
	export interface GetDocumentRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		DocumentFormat: FormControl<DocumentDescriptionDocumentFormat | null | undefined>,
	}
	export function CreateGetDocumentRequestFormGroup() {
		return new FormGroup<GetDocumentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{1,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			DocumentFormat: new FormControl<DocumentDescriptionDocumentFormat | null | undefined>(undefined),
		});

	}

	export interface GetInventoryResult {
		Entities?: Array<InventoryResultEntity>;
		NextToken?: string | null;
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
		Id?: string | null;
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

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Filters?: Array<InventoryFilter>;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Aggregators?: Array<InventoryAggregator>;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		ResultAttributes?: Array<ResultAttribute>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface GetInventoryRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetInventoryRequestFormGroup() {
		return new FormGroup<GetInventoryRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}


	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface InventoryFilter {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 40
		 */
		Values: Array<string>;
		Type?: InventoryFilterType | null;
	}

	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface InventoryFilterFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
		Type: FormControl<InventoryFilterType | null | undefined>,
	}
	export function CreateInventoryFilterFormGroup() {
		return new FormGroup<InventoryFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
			Type: new FormControl<InventoryFilterType | null | undefined>(undefined),
		});

	}

	export enum InventoryFilterType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }


	/** Specifies the inventory type and attribute for the aggregation execution. */
	export interface InventoryAggregator {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Expression?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Aggregators?: Array<InventoryAggregator>;

		/**
		 * Minimum items: 1
		 * Maximum items: 15
		 */
		Groups?: Array<InventoryGroup>;
	}

	/** Specifies the inventory type and attribute for the aggregation execution. */
	export interface InventoryAggregatorFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Expression: FormControl<string | null | undefined>,
	}
	export function CreateInventoryAggregatorFormGroup() {
		return new FormGroup<InventoryAggregatorFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
		});

	}


	/** A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria. */
	export interface InventoryGroup {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Filters: Array<InventoryFilter>;
	}

	/** A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria. */
	export interface InventoryGroupFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateInventoryGroupFormGroup() {
		return new FormGroup<InventoryGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
		});

	}


	/** The inventory item result attribute. */
	export interface ResultAttribute {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: string;
	}

	/** The inventory item result attribute. */
	export interface ResultAttributeFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,
	}
	export function CreateResultAttributeFormGroup() {
		return new FormGroup<ResultAttributeFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
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
		NextToken?: string | null;
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

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: string;
		Version?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Attributes: Array<InventoryItemAttribute>;
		DisplayName?: string | null;
	}

	/** The inventory item schema definition. Users can use this to compose inventory query filters. */
	export interface InventoryItemSchemaFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateInventoryItemSchemaFormGroup() {
		return new FormGroup<InventoryItemSchemaFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]{1,6})(\.[0-9]{1,6})$')]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributes are the entries within the inventory item content. It contains name and value. */
	export interface InventoryItemAttribute {

		/** Required */
		Name: string;

		/** Required */
		DataType: InventoryItemAttributeDataType;
	}

	/** Attributes are the entries within the inventory item content. It contains name and value. */
	export interface InventoryItemAttributeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		DataType: FormControl<InventoryItemAttributeDataType | null | undefined>,
	}
	export function CreateInventoryItemAttributeFormGroup() {
		return new FormGroup<InventoryItemAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataType: new FormControl<InventoryItemAttributeDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InventoryItemAttributeDataType { string = 0, number = 1 }

	export interface GetInventorySchemaRequest {

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		TypeName?: string | null;
		NextToken?: string | null;

		/**
		 * Minimum: 50
		 * Maximum: 200
		 */
		MaxResults?: number | null;
		Aggregator?: boolean | null;
		SubType?: boolean | null;
	}
	export interface GetInventorySchemaRequestFormProperties {

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		TypeName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 50
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
		Aggregator: FormControl<boolean | null | undefined>,
		SubType: FormControl<boolean | null | undefined>,
	}
	export function CreateGetInventorySchemaRequestFormGroup() {
		return new FormGroup<GetInventorySchemaRequestFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(50), Validators.max(200)]),
			Aggregator: new FormControl<boolean | null | undefined>(undefined),
			SubType: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetMaintenanceWindowResult {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
		StartDate?: string | null;
		EndDate?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Schedule?: string | null;
		ScheduleTimezone?: string | null;
		NextExecutionTime?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 24
		 */
		Duration?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 23
		 */
		Cutoff?: number | null;
		AllowUnassociatedTargets?: boolean | null;
		Enabled?: boolean | null;
		CreatedDate?: Date | null;
		ModifiedDate?: Date | null;
	}
	export interface GetMaintenanceWindowResultFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Schedule: FormControl<string | null | undefined>,
		ScheduleTimezone: FormControl<string | null | undefined>,
		NextExecutionTime: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 24
		 */
		Duration: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 23
		 */
		Cutoff: FormControl<number | null | undefined>,
		AllowUnassociatedTargets: FormControl<boolean | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		ModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetMaintenanceWindowResultFormGroup() {
		return new FormGroup<GetMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ScheduleTimezone: new FormControl<string | null | undefined>(undefined),
			NextExecutionTime: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(24)]),
			Cutoff: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(23)]),
			AllowUnassociatedTargets: new FormControl<boolean | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			ModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetMaintenanceWindowRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;
	}
	export interface GetMaintenanceWindowRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowRequestFormGroup() {
		return new FormGroup<GetMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
		});

	}

	export interface GetMaintenanceWindowExecutionResult {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId?: string | null;
		TaskIds?: Array<string>;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
	}
	export interface GetMaintenanceWindowExecutionResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>,

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionResultFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionResultFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			Status: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetMaintenanceWindowExecutionRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: string;
	}
	export interface GetMaintenanceWindowExecutionRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionRequestFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface GetMaintenanceWindowExecutionTaskResult {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		TaskExecutionId?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn?: string | null;
		ServiceRole?: string | null;
		Type?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
		TaskParameters?: Array<MaintenanceWindowTaskParameters>;

		/** Minimum: 0 */
		Priority?: number | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
	}
	export interface GetMaintenanceWindowExecutionTaskResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		TaskExecutionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		Type: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>,

		/** Minimum: 0 */
		Priority: FormControl<number | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>,

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionTaskResultFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionTaskResultFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			Status: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetMaintenanceWindowExecutionTaskRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		TaskId: string;
	}
	export interface GetMaintenanceWindowExecutionTaskRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		TaskId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionTaskRequestFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionTaskRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface GetMaintenanceWindowExecutionTaskInvocationResult {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		TaskExecutionId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		InvocationId?: string | null;
		ExecutionId?: string | null;
		TaskType?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
		Parameters?: string | null;
		Status?: MaintenanceWindowExecutionTaskInvocationIdentityStatus | null;

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation?: string | null;

		/** Max length: 36 */
		WindowTargetId?: string | null;
	}
	export interface GetMaintenanceWindowExecutionTaskInvocationResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		TaskExecutionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		InvocationId: FormControl<string | null | undefined>,
		ExecutionId: FormControl<string | null | undefined>,
		TaskType: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>,
		Parameters: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>,

		/**
		 * Max length: 250
		 * Min length: 0
		 */
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation: FormControl<string | null | undefined>,

		/** Max length: 36 */
		WindowTargetId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionTaskInvocationResultFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionTaskInvocationResultFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			InvocationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			TaskType: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>(undefined),
			Parameters: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250)]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			OwnerInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			WindowTargetId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(36)]),
		});

	}

	export interface GetMaintenanceWindowExecutionTaskInvocationRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		TaskId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		InvocationId: string;
	}
	export interface GetMaintenanceWindowExecutionTaskInvocationRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowExecutionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		TaskId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		InvocationId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionTaskInvocationRequestFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionTaskInvocationRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			InvocationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface GetMaintenanceWindowTaskResult {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn?: string | null;
		ServiceRoleArn?: string | null;
		TaskType?: MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null;
		TaskParameters?: MaintenanceWindowTaskParameters;

		/** The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

		/** Minimum: 0 */
		Priority?: number | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;

		/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
	}
	export interface GetMaintenanceWindowTaskResultFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		TaskType: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>,

		/** Minimum: 0 */
		Priority: FormControl<number | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowTaskResultFormGroup() {
		return new FormGroup<GetMaintenanceWindowTaskResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			TaskType: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}


	/** The parameters for task execution. */
	export interface MaintenanceWindowTaskInvocationParameters {

		/** <p>The parameters for a RUN_COMMAND task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Run Command tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note> */
		RunCommand?: MaintenanceWindowRunCommandParameters;

		/** The parameters for an AUTOMATION task type. */
		Automation?: MaintenanceWindowAutomationParameters;

		/** <p>The parameters for a STEP_FUNCTIONS task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note> */
		StepFunctions?: MaintenanceWindowStepFunctionsParameters;

		/** <p>The parameters for a LAMBDA task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note> */
		Lambda?: MaintenanceWindowLambdaParameters;
	}

	/** The parameters for task execution. */
	export interface MaintenanceWindowTaskInvocationParametersFormProperties {
	}
	export function CreateMaintenanceWindowTaskInvocationParametersFormGroup() {
		return new FormGroup<MaintenanceWindowTaskInvocationParametersFormProperties>({
		});

	}


	/** <p>The parameters for a RUN_COMMAND task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Run Command tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note> */
	export interface MaintenanceWindowRunCommandParameters {

		/** Max length: 100 */
		Comment?: string | null;

		/** Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;

		/** Max length: 256 */
		DocumentHash?: string | null;
		DocumentHashType?: DocumentDescriptionHashType | null;
		DocumentVersion?: string | null;

		/** Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig;

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		OutputS3BucketName?: string | null;

		/** Max length: 500 */
		OutputS3KeyPrefix?: string | null;
		Parameters?: Parameters;
		ServiceRoleArn?: string | null;

		/**
		 * Minimum: 30
		 * Maximum: 2592000
		 */
		TimeoutSeconds?: number | null;
	}

	/** <p>The parameters for a RUN_COMMAND task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Run Command tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note> */
	export interface MaintenanceWindowRunCommandParametersFormProperties {

		/** Max length: 100 */
		Comment: FormControl<string | null | undefined>,

		/** Max length: 256 */
		DocumentHash: FormControl<string | null | undefined>,
		DocumentHashType: FormControl<DocumentDescriptionHashType | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		OutputS3BucketName: FormControl<string | null | undefined>,

		/** Max length: 500 */
		OutputS3KeyPrefix: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 30
		 * Maximum: 2592000
		 */
		TimeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateMaintenanceWindowRunCommandParametersFormGroup() {
		return new FormGroup<MaintenanceWindowRunCommandParametersFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			DocumentHash: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			DocumentHashType: new FormControl<DocumentDescriptionHashType | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63)]),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			TimeoutSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(30), Validators.max(2592000)]),
		});

	}


	/** Configurations for sending notifications. */
	export interface NotificationConfig {
		NotificationArn?: string | null;
		NotificationEvents?: Array<NotificationEvent>;
		NotificationType?: NotificationConfigNotificationType | null;
	}

	/** Configurations for sending notifications. */
	export interface NotificationConfigFormProperties {
		NotificationArn: FormControl<string | null | undefined>,
		NotificationType: FormControl<NotificationConfigNotificationType | null | undefined>,
	}
	export function CreateNotificationConfigFormGroup() {
		return new FormGroup<NotificationConfigFormProperties>({
			NotificationArn: new FormControl<string | null | undefined>(undefined),
			NotificationType: new FormControl<NotificationConfigNotificationType | null | undefined>(undefined),
		});

	}

	export enum NotificationEvent { All = 0, InProgress = 1, Success = 2, TimedOut = 3, Cancelled = 4, Failed = 5 }

	export enum NotificationConfigNotificationType { Command = 0, Invocation = 1 }


	/** The parameters for an AUTOMATION task type. */
	export interface MaintenanceWindowAutomationParameters {
		DocumentVersion?: string | null;
		Parameters?: AutomationParameterMap;
	}

	/** The parameters for an AUTOMATION task type. */
	export interface MaintenanceWindowAutomationParametersFormProperties {
		DocumentVersion: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowAutomationParametersFormGroup() {
		return new FormGroup<MaintenanceWindowAutomationParametersFormProperties>({
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
		});

	}


	/** <p>The parameters for a STEP_FUNCTIONS task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note> */
	export interface MaintenanceWindowStepFunctionsParameters {

		/** Max length: 4096 */
		Input?: string | null;

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		Name?: string | null;
	}

	/** <p>The parameters for a STEP_FUNCTIONS task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note> */
	export interface MaintenanceWindowStepFunctionsParametersFormProperties {

		/** Max length: 4096 */
		Input: FormControl<string | null | undefined>,

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowStepFunctionsParametersFormGroup() {
		return new FormGroup<MaintenanceWindowStepFunctionsParametersFormProperties>({
			Input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(80)]),
		});

	}


	/** <p>The parameters for a LAMBDA task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note> */
	export interface MaintenanceWindowLambdaParameters {

		/**
		 * Max length: 8000
		 * Min length: 1
		 */
		ClientContext?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Qualifier?: string | null;

		/** Max length: 4096 */
		Payload?: string | null;
	}

	/** <p>The parameters for a LAMBDA task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note> */
	export interface MaintenanceWindowLambdaParametersFormProperties {

		/**
		 * Max length: 8000
		 * Min length: 1
		 */
		ClientContext: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Qualifier: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowLambdaParametersFormGroup() {
		return new FormGroup<MaintenanceWindowLambdaParametersFormProperties>({
			ClientContext: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8000)]),
			Qualifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Payload: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface GetMaintenanceWindowTaskRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: string;
	}
	export interface GetMaintenanceWindowTaskRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowTaskRequestFormGroup() {
		return new FormGroup<GetMaintenanceWindowTaskRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface GetOpsItemResponse {

		/** Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. */
		OpsItem?: OpsItem;
	}
	export interface GetOpsItemResponseFormProperties {
	}
	export function CreateGetOpsItemResponseFormGroup() {
		return new FormGroup<GetOpsItemResponseFormProperties>({
		});

	}


	/** Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.  */
	export interface OpsItem {
		CreatedBy?: string | null;
		CreatedTime?: Date | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		LastModifiedBy?: string | null;
		LastModifiedTime?: Date | null;
		Notifications?: Array<OpsItemNotification>;

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		Priority?: number | null;
		RelatedOpsItems?: Array<RelatedOpsItem>;
		Status?: OpsItemSummaryStatus | null;
		OpsItemId?: string | null;
		Version?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Title?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Source?: string | null;
		OperationalData?: OpsItemOperationalData;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Category?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Severity?: string | null;
	}

	/** Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.  */
	export interface OpsItemFormProperties {
		CreatedBy: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		Priority: FormControl<number | null | undefined>,
		Status: FormControl<OpsItemSummaryStatus | null | undefined>,
		OpsItemId: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Title: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Source: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Category: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Severity: FormControl<string | null | undefined>,
	}
	export function CreateOpsItemFormGroup() {
		return new FormGroup<OpsItemFormProperties>({
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			Status: new FormControl<OpsItemSummaryStatus | null | undefined>(undefined),
			OpsItemId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(oi)-[0-9a-f]{12}$')]),
			Version: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Category: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Severity: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface GetOpsItemRequest {

		/** Required */
		OpsItemId: string;
	}
	export interface GetOpsItemRequestFormProperties {

		/** Required */
		OpsItemId: FormControl<string | null | undefined>,
	}
	export function CreateGetOpsItemRequestFormGroup() {
		return new FormGroup<GetOpsItemRequestFormProperties>({
			OpsItemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(oi)-[0-9a-f]{12}$')]),
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

	export interface GetOpsSummaryResult {
		Entities?: Array<OpsEntity>;
		NextToken?: string | null;
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
		Id?: string | null;
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

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Filters?: Array<OpsFilter>;

		/**
		 * Minimum items: 1
		 * Maximum items: 12
		 */
		Aggregators?: Array<OpsAggregator>;

		/** Minimum items: 1 */
		ResultAttributes?: Array<OpsResultAttribute>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface GetOpsSummaryRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetOpsSummaryRequestFormGroup() {
		return new FormGroup<GetOpsSummaryRequestFormProperties>({
			SyncName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}


	/** A filter for viewing OpsItem summaries. */
	export interface OpsFilter {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 40
		 */
		Values: Array<string>;
		Type?: InventoryFilterType | null;
	}

	/** A filter for viewing OpsItem summaries. */
	export interface OpsFilterFormProperties {

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
		Type: FormControl<InventoryFilterType | null | undefined>,
	}
	export function CreateOpsFilterFormGroup() {
		return new FormGroup<OpsFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
			Type: new FormControl<InventoryFilterType | null | undefined>(undefined),
		});

	}


	/** One or more aggregators for viewing counts of OpsItems using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few. */
	export interface OpsAggregator {

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		AggregatorType?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName?: string | null;
		AttributeName?: string | null;
		Values?: OpsAggregatorValueMap;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Filters?: Array<OpsFilter>;

		/**
		 * Minimum items: 1
		 * Maximum items: 12
		 */
		Aggregators?: Array<OpsAggregator>;
	}

	/** One or more aggregators for viewing counts of OpsItems using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few. */
	export interface OpsAggregatorFormProperties {

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		AggregatorType: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateOpsAggregatorFormGroup() {
		return new FormGroup<OpsAggregatorFormProperties>({
			AggregatorType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(20), Validators.pattern('^(range|count|sum)')]),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
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

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: string;
	}

	/** The OpsItem data type to return. */
	export interface OpsResultAttributeFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,
	}
	export function CreateOpsResultAttributeFormGroup() {
		return new FormGroup<OpsResultAttributeFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
		});

	}

	export interface GetParameterResult {

		/** An Systems Manager parameter in Parameter Store. */
		Parameter?: Parameter;
	}
	export interface GetParameterResultFormProperties {
	}
	export function CreateGetParameterResultFormGroup() {
		return new FormGroup<GetParameterResultFormProperties>({
		});

	}


	/** An Systems Manager parameter in Parameter Store. */
	export interface Parameter {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;
		Type?: ParameterMetadataType | null;
		Value?: string | null;
		Version?: number | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Selector?: string | null;
		SourceResult?: string | null;
		LastModifiedDate?: Date | null;
		ARN?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		DataType?: string | null;
	}

	/** An Systems Manager parameter in Parameter Store. */
	export interface ParameterFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ParameterMetadataType | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Selector: FormControl<string | null | undefined>,
		SourceResult: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		ARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			Type: new FormControl<ParameterMetadataType | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Selector: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			SourceResult: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
		});

	}

	export interface GetParameterRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: string;
		WithDecryption?: boolean | null;
	}
	export interface GetParameterRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		WithDecryption: FormControl<boolean | null | undefined>,
	}
	export function CreateGetParameterRequestFormGroup() {
		return new FormGroup<GetParameterRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
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
		NextToken?: string | null;
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

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;
		Type?: ParameterMetadataType | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		KeyId?: string | null;
		LastModifiedDate?: Date | null;
		LastModifiedUser?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;
		Value?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AllowedPattern?: string | null;
		Version?: number | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Labels?: Array<string>;
		Tier?: ParameterMetadataTier | null;
		Policies?: Array<ParameterInlinePolicy>;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		DataType?: string | null;
	}

	/** Information about parameter usage. */
	export interface ParameterHistoryFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ParameterMetadataType | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedUser: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AllowedPattern: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Tier: FormControl<ParameterMetadataTier | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateParameterHistoryFormGroup() {
		return new FormGroup<ParameterHistoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			Type: new FormControl<ParameterMetadataType | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([a-zA-Z0-9:/_-]+)$')]),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedUser: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Value: new FormControl<string | null | undefined>(undefined),
			AllowedPattern: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Version: new FormControl<number | null | undefined>(undefined),
			Tier: new FormControl<ParameterMetadataTier | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
		});

	}

	export interface GetParameterHistoryRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: string;
		WithDecryption?: boolean | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface GetParameterHistoryRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		WithDecryption: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetParameterHistoryRequestFormGroup() {
		return new FormGroup<GetParameterHistoryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			WithDecryption: new FormControl<boolean | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetParametersResult {
		Parameters?: Array<Parameter>;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		InvalidParameters?: Array<string>;
	}
	export interface GetParametersResultFormProperties {
	}
	export function CreateGetParametersResultFormGroup() {
		return new FormGroup<GetParametersResultFormProperties>({
		});

	}

	export interface GetParametersRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
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
		NextToken?: string | null;
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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Path: string;
		Recursive?: boolean | null;
		ParameterFilters?: Array<ParameterStringFilter>;
		WithDecryption?: boolean | null;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface GetParametersByPathRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Path: FormControl<string | null | undefined>,
		Recursive: FormControl<boolean | null | undefined>,
		WithDecryption: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetParametersByPathRequestFormGroup() {
		return new FormGroup<GetParametersByPathRequestFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Recursive: new FormControl<boolean | null | undefined>(undefined),
			WithDecryption: new FormControl<boolean | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPatchBaselineResult {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;

		/** A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup;

		/** A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		ApprovedPatches?: Array<string>;
		ApprovedPatchesComplianceLevel?: PatchRuleComplianceLevel | null;
		ApprovedPatchesEnableNonSecurity?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		RejectedPatches?: Array<string>;
		RejectedPatchesAction?: CreatePatchBaselineRequestRejectedPatchesAction | null;
		PatchGroups?: Array<string>;
		CreatedDate?: Date | null;
		ModifiedDate?: Date | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		Sources?: Array<PatchSource>;
	}
	export interface GetPatchBaselineResultFormProperties {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>,
		ApprovedPatchesComplianceLevel: FormControl<PatchRuleComplianceLevel | null | undefined>,
		ApprovedPatchesEnableNonSecurity: FormControl<boolean | null | undefined>,
		RejectedPatchesAction: FormControl<CreatePatchBaselineRequestRejectedPatchesAction | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		ModifiedDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGetPatchBaselineResultFormGroup() {
		return new FormGroup<GetPatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			OperatingSystem: new FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>(undefined),
			ApprovedPatchesComplianceLevel: new FormControl<PatchRuleComplianceLevel | null | undefined>(undefined),
			ApprovedPatchesEnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
			RejectedPatchesAction: new FormControl<CreatePatchBaselineRequestRejectedPatchesAction | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			ModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface GetPatchBaselineRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: string;
	}
	export interface GetPatchBaselineRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateGetPatchBaselineRequestFormGroup() {
		return new FormGroup<GetPatchBaselineRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
		});

	}

	export interface GetPatchBaselineForPatchGroupResult {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup?: string | null;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;
	}
	export interface GetPatchBaselineForPatchGroupResultFormProperties {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>,
	}
	export function CreateGetPatchBaselineForPatchGroupResultFormGroup() {
		return new FormGroup<GetPatchBaselineForPatchGroupResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			OperatingSystem: new FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>(undefined),
		});

	}

	export interface GetPatchBaselineForPatchGroupRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: string;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;
	}
	export interface GetPatchBaselineForPatchGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>,
	}
	export function CreateGetPatchBaselineForPatchGroupRequestFormGroup() {
		return new FormGroup<GetPatchBaselineForPatchGroupRequestFormProperties>({
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			OperatingSystem: new FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>(undefined),
		});

	}


	/** The query result body of the GetServiceSetting API action. */
	export interface GetServiceSettingResult {

		/** <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> */
		ServiceSetting?: ServiceSetting;
	}

	/** The query result body of the GetServiceSetting API action. */
	export interface GetServiceSettingResultFormProperties {
	}
	export function CreateGetServiceSettingResultFormGroup() {
		return new FormGroup<GetServiceSettingResultFormProperties>({
		});

	}


	/** <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> */
	export interface ServiceSetting {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		SettingId?: string | null;

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		SettingValue?: string | null;
		LastModifiedDate?: Date | null;
		LastModifiedUser?: string | null;
		ARN?: string | null;
		Status?: string | null;
	}

	/** <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> */
	export interface ServiceSettingFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		SettingId: FormControl<string | null | undefined>,

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		SettingValue: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedUser: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateServiceSettingFormGroup() {
		return new FormGroup<ServiceSettingFormProperties>({
			SettingId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			SettingValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedUser: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request body of the GetServiceSetting API action. */
	export interface GetServiceSettingRequest {

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		SettingId: string;
	}

	/** The request body of the GetServiceSetting API action. */
	export interface GetServiceSettingRequestFormProperties {

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		SettingId: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceSettingRequestFormGroup() {
		return new FormGroup<GetServiceSettingRequestFormProperties>({
			SettingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]),
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

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: string;
		ParameterVersion?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Labels: Array<string>;
	}
	export interface LabelParameterVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		ParameterVersion: FormControl<number | null | undefined>,
	}
	export function CreateLabelParameterVersionRequestFormGroup() {
		return new FormGroup<LabelParameterVersionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
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

		/** Minimum items: 1 */
		AssociationVersions?: Array<AssociationVersionInfo>;
		NextToken?: string | null;
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
		AssociationId?: string | null;
		AssociationVersion?: string | null;
		CreatedDate?: Date | null;
		Name?: string | null;
		DocumentVersion?: string | null;
		Parameters?: Parameters;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression?: string | null;

		/** An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation;
		AssociationName?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity | null;
		SyncCompliance?: AssociationDescriptionSyncCompliance | null;
		ApplyOnlyAtCronInterval?: boolean | null;
	}

	/** Information about the association version. */
	export interface AssociationVersionInfoFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,
		ComplianceSeverity: FormControl<AssociationDescriptionComplianceSeverity | null | undefined>,
		SyncCompliance: FormControl<AssociationDescriptionSyncCompliance | null | undefined>,
		ApplyOnlyAtCronInterval: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociationVersionInfoFormGroup() {
		return new FormGroup<AssociationVersionInfoFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			AssociationVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST)|([1-9][0-9]*)')]),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			AssociationName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			ComplianceSeverity: new FormControl<AssociationDescriptionComplianceSeverity | null | undefined>(undefined),
			SyncCompliance: new FormControl<AssociationDescriptionSyncCompliance | null | undefined>(undefined),
			ApplyOnlyAtCronInterval: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListAssociationVersionsRequest {

		/** Required */
		AssociationId: string;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListAssociationVersionsRequestFormProperties {

		/** Required */
		AssociationId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationVersionsRequestFormGroup() {
		return new FormGroup<ListAssociationVersionsRequestFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociationsResult {
		Associations?: Array<Association>;
		NextToken?: string | null;
	}
	export interface ListAssociationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationsResultFormGroup() {
		return new FormGroup<ListAssociationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an association of a Systems Manager document and an instance. */
	export interface Association {
		Name?: string | null;
		InstanceId?: string | null;
		AssociationId?: string | null;
		AssociationVersion?: string | null;
		DocumentVersion?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;
		LastExecutionDate?: Date | null;

		/** Information about the association. */
		Overview?: AssociationOverview;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression?: string | null;
		AssociationName?: string | null;
	}

	/** Describes an association of a Systems Manager document and an instance. */
	export interface AssociationFormProperties {
		Name: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		LastExecutionDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,
	}
	export function CreateAssociationFormGroup() {
		return new FormGroup<AssociationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			AssociationVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST)|([1-9][0-9]*)')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			LastExecutionDate: new FormControl<Date | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			AssociationName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
		});

	}

	export interface ListAssociationsRequest {

		/** Minimum items: 1 */
		AssociationFilterList?: Array<AssociationFilter>;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListAssociationsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationsRequestFormGroup() {
		return new FormGroup<ListAssociationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a filter. */
	export interface AssociationFilter {

		/** Required */
		key: AssociationFilterKey;

		/**
		 * Required
		 * Min length: 1
		 */
		value: string;
	}

	/** Describes a filter. */
	export interface AssociationFilterFormProperties {

		/** Required */
		key: FormControl<AssociationFilterKey | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAssociationFilterFormGroup() {
		return new FormGroup<AssociationFilterFormProperties>({
			key: new FormControl<AssociationFilterKey | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum AssociationFilterKey { InstanceId = 0, Name = 1, AssociationId = 2, AssociationStatusName = 3, LastExecutedBefore = 4, LastExecutedAfter = 5, AssociationName = 6, ResourceGroupName = 7 }

	export interface ListCommandInvocationsResult {
		CommandInvocations?: Array<CommandInvocation>;
		NextToken?: string | null;
	}
	export interface ListCommandInvocationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCommandInvocationsResultFormGroup() {
		return new FormGroup<ListCommandInvocationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran.  */
	export interface CommandInvocation {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId?: string | null;
		InstanceId?: string | null;

		/** Max length: 255 */
		InstanceName?: string | null;

		/** Max length: 100 */
		Comment?: string | null;
		DocumentName?: string | null;
		DocumentVersion?: string | null;
		RequestedDateTime?: Date | null;
		Status?: GetCommandInvocationResultStatus | null;

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		StatusDetails?: string | null;

		/** Max length: 2500 */
		TraceOutput?: string | null;
		StandardOutputUrl?: string | null;
		StandardErrorUrl?: string | null;
		CommandPlugins?: Array<CommandPlugin>;
		ServiceRole?: string | null;

		/** Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig;

		/** Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
	}

	/** An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran.  */
	export interface CommandInvocationFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,

		/** Max length: 255 */
		InstanceName: FormControl<string | null | undefined>,

		/** Max length: 100 */
		Comment: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		RequestedDateTime: FormControl<Date | null | undefined>,
		Status: FormControl<GetCommandInvocationResultStatus | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		StatusDetails: FormControl<string | null | undefined>,

		/** Max length: 2500 */
		TraceOutput: FormControl<string | null | undefined>,
		StandardOutputUrl: FormControl<string | null | undefined>,
		StandardErrorUrl: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
	}
	export function CreateCommandInvocationFormGroup() {
		return new FormGroup<CommandInvocationFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			InstanceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			RequestedDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<GetCommandInvocationResultStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			TraceOutput: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2500)]),
			StandardOutputUrl: new FormControl<string | null | undefined>(undefined),
			StandardErrorUrl: new FormControl<string | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes plugin details. */
	export interface CommandPlugin {

		/** Min length: 4 */
		Name?: string | null;
		Status?: CommandPluginStatus | null;

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		StatusDetails?: string | null;
		ResponseCode?: number | null;
		ResponseStartDateTime?: Date | null;
		ResponseFinishDateTime?: Date | null;

		/** Max length: 2500 */
		Output?: string | null;
		StandardOutputUrl?: string | null;
		StandardErrorUrl?: string | null;

		/**
		 * Max length: 20
		 * Min length: 3
		 */
		OutputS3Region?: string | null;

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		OutputS3BucketName?: string | null;

		/** Max length: 500 */
		OutputS3KeyPrefix?: string | null;
	}

	/** Describes plugin details. */
	export interface CommandPluginFormProperties {

		/** Min length: 4 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<CommandPluginStatus | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		StatusDetails: FormControl<string | null | undefined>,
		ResponseCode: FormControl<number | null | undefined>,
		ResponseStartDateTime: FormControl<Date | null | undefined>,
		ResponseFinishDateTime: FormControl<Date | null | undefined>,

		/** Max length: 2500 */
		Output: FormControl<string | null | undefined>,
		StandardOutputUrl: FormControl<string | null | undefined>,
		StandardErrorUrl: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 3
		 */
		OutputS3Region: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		OutputS3BucketName: FormControl<string | null | undefined>,

		/** Max length: 500 */
		OutputS3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCommandPluginFormGroup() {
		return new FormGroup<CommandPluginFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4)]),
			Status: new FormControl<CommandPluginStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			ResponseCode: new FormControl<number | null | undefined>(undefined),
			ResponseStartDateTime: new FormControl<Date | null | undefined>(undefined),
			ResponseFinishDateTime: new FormControl<Date | null | undefined>(undefined),
			Output: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2500)]),
			StandardOutputUrl: new FormControl<string | null | undefined>(undefined),
			StandardErrorUrl: new FormControl<string | null | undefined>(undefined),
			OutputS3Region: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(20)]),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63)]),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export enum CommandPluginStatus { Pending = 0, InProgress = 1, Success = 2, TimedOut = 3, Cancelled = 4, Failed = 5 }

	export interface ListCommandInvocationsRequest {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId?: string | null;
		InstanceId?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Filters?: Array<CommandFilter>;
		Details?: boolean | null;
	}
	export interface ListCommandInvocationsRequestFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Details: FormControl<boolean | null | undefined>,
	}
	export function CreateListCommandInvocationsRequestFormGroup() {
		return new FormGroup<ListCommandInvocationsRequestFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Details: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a command filter. */
	export interface CommandFilter {

		/** Required */
		key: CommandFilterKey;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		value: string;
	}

	/** Describes a command filter. */
	export interface CommandFilterFormProperties {

		/** Required */
		key: FormControl<CommandFilterKey | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCommandFilterFormGroup() {
		return new FormGroup<CommandFilterFormProperties>({
			key: new FormControl<CommandFilterKey | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export enum CommandFilterKey { InvokedAfter = 0, InvokedBefore = 1, Status = 2, ExecutionStage = 3, DocumentName = 4 }

	export interface ListCommandsResult {
		Commands?: Array<Command>;
		NextToken?: string | null;
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

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId?: string | null;
		DocumentName?: string | null;
		DocumentVersion?: string | null;

		/** Max length: 100 */
		Comment?: string | null;
		ExpiresAfter?: Date | null;
		Parameters?: Parameters;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		InstanceIds?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;
		RequestedDateTime?: Date | null;
		Status?: CommandStatus | null;

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		StatusDetails?: string | null;

		/**
		 * Max length: 20
		 * Min length: 3
		 */
		OutputS3Region?: string | null;

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		OutputS3BucketName?: string | null;

		/** Max length: 500 */
		OutputS3KeyPrefix?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;
		TargetCount?: number | null;
		CompletedCount?: number | null;
		ErrorCount?: number | null;
		DeliveryTimedOutCount?: number | null;
		ServiceRole?: string | null;

		/** Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig;

		/** Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;

		/**
		 * Minimum: 30
		 * Maximum: 2592000
		 */
		TimeoutSeconds?: number | null;
	}

	/** Describes a command request. */
	export interface CommandFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/** Max length: 100 */
		Comment: FormControl<string | null | undefined>,
		ExpiresAfter: FormControl<Date | null | undefined>,
		RequestedDateTime: FormControl<Date | null | undefined>,
		Status: FormControl<CommandStatus | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		StatusDetails: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 3
		 */
		OutputS3Region: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		OutputS3BucketName: FormControl<string | null | undefined>,

		/** Max length: 500 */
		OutputS3KeyPrefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,
		TargetCount: FormControl<number | null | undefined>,
		CompletedCount: FormControl<number | null | undefined>,
		ErrorCount: FormControl<number | null | undefined>,
		DeliveryTimedOutCount: FormControl<number | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,

		/**
		 * Minimum: 30
		 * Maximum: 2592000
		 */
		TimeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ExpiresAfter: new FormControl<Date | null | undefined>(undefined),
			RequestedDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<CommandStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			OutputS3Region: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(20)]),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63)]),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			TargetCount: new FormControl<number | null | undefined>(undefined),
			CompletedCount: new FormControl<number | null | undefined>(undefined),
			ErrorCount: new FormControl<number | null | undefined>(undefined),
			DeliveryTimedOutCount: new FormControl<number | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			TimeoutSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(30), Validators.max(2592000)]),
		});

	}

	export enum CommandStatus { Pending = 0, InProgress = 1, Success = 2, Cancelled = 3, Failed = 4, TimedOut = 5, Cancelling = 6 }

	export interface ListCommandsRequest {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId?: string | null;
		InstanceId?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Filters?: Array<CommandFilter>;
	}
	export interface ListCommandsRequestFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		CommandId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCommandsRequestFormGroup() {
		return new FormGroup<ListCommandsRequestFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComplianceItemsResult {
		ComplianceItems?: Array<ComplianceItem>;
		NextToken?: string | null;
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

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ComplianceType?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		ResourceType?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId?: string | null;
		Id?: string | null;

		/** Max length: 500 */
		Title?: string | null;
		Status?: ComplianceItemStatus | null;
		Severity?: PatchRuleComplianceLevel | null;

		/** A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
		ExecutionSummary?: ComplianceExecutionSummary;
		Details?: ComplianceItemDetails;
	}

	/** Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on. */
	export interface ComplianceItemFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ComplianceType: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,

		/** Max length: 500 */
		Title: FormControl<string | null | undefined>,
		Status: FormControl<ComplianceItemStatus | null | undefined>,
		Severity: FormControl<PatchRuleComplianceLevel | null | undefined>,
	}
	export function CreateComplianceItemFormGroup() {
		return new FormGroup<ComplianceItemFormProperties>({
			ComplianceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[A-Za-z0-9_\-]\w+|Custom:[a-zA-Z0-9_\-]\w+')]),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			Id: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			Status: new FormControl<ComplianceItemStatus | null | undefined>(undefined),
			Severity: new FormControl<PatchRuleComplianceLevel | null | undefined>(undefined),
		});

	}

	export enum ComplianceItemStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }


	/** A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
	export interface ComplianceExecutionSummary {

		/** Required */
		ExecutionTime: Date;

		/** Max length: 100 */
		ExecutionId?: string | null;

		/** Max length: 50 */
		ExecutionType?: string | null;
	}

	/** A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
	export interface ComplianceExecutionSummaryFormProperties {

		/** Required */
		ExecutionTime: FormControl<Date | null | undefined>,

		/** Max length: 100 */
		ExecutionId: FormControl<string | null | undefined>,

		/** Max length: 50 */
		ExecutionType: FormControl<string | null | undefined>,
	}
	export function CreateComplianceExecutionSummaryFormGroup() {
		return new FormGroup<ComplianceExecutionSummaryFormProperties>({
			ExecutionTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			ExecutionType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
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

		/** Minimum items: 1 */
		ResourceIds?: Array<string>;

		/** Minimum items: 1 */
		ResourceTypes?: Array<string>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListComplianceItemsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListComplianceItemsRequestFormGroup() {
		return new FormGroup<ListComplianceItemsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}


	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface ComplianceStringFilter {

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		Key?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Values?: Array<string>;
		Type?: ComplianceStringFilterType | null;
	}

	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface ComplianceStringFilterFormProperties {

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
		Type: FormControl<ComplianceStringFilterType | null | undefined>,
	}
	export function CreateComplianceStringFilterFormGroup() {
		return new FormGroup<ComplianceStringFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(200)]),
			Type: new FormControl<ComplianceStringFilterType | null | undefined>(undefined),
		});

	}

	export enum ComplianceStringFilterType { EQUAL = 0, NOT_EQUAL = 1, BEGIN_WITH = 2, LESS_THAN = 3, GREATER_THAN = 4 }

	export interface ListComplianceSummariesResult {
		ComplianceSummaryItems?: Array<ComplianceSummaryItem>;
		NextToken?: string | null;
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

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ComplianceType?: string | null;

		/** A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
		CompliantSummary?: CompliantSummary;

		/** A summary of resources that are not compliant. The summary is organized according to resource type. */
		NonCompliantSummary?: NonCompliantSummary;
	}

	/** A summary of compliance information by compliance type. */
	export interface ComplianceSummaryItemFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ComplianceType: FormControl<string | null | undefined>,
	}
	export function CreateComplianceSummaryItemFormGroup() {
		return new FormGroup<ComplianceSummaryItemFormProperties>({
			ComplianceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[A-Za-z0-9_\-]\w+|Custom:[a-zA-Z0-9_\-]\w+')]),
		});

	}


	/** A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
	export interface CompliantSummary {
		CompliantCount?: number | null;

		/** The number of managed instances found for each patch severity level defined in the request filter. */
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


	/** The number of managed instances found for each patch severity level defined in the request filter. */
	export interface SeveritySummary {
		CriticalCount?: number | null;
		HighCount?: number | null;
		MediumCount?: number | null;
		LowCount?: number | null;
		InformationalCount?: number | null;
		UnspecifiedCount?: number | null;
	}

	/** The number of managed instances found for each patch severity level defined in the request filter. */
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


	/** A summary of resources that are not compliant. The summary is organized according to resource type. */
	export interface NonCompliantSummary {
		NonCompliantCount?: number | null;

		/** The number of managed instances found for each patch severity level defined in the request filter. */
		SeveritySummary?: SeveritySummary;
	}

	/** A summary of resources that are not compliant. The summary is organized according to resource type. */
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
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListComplianceSummariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListComplianceSummariesRequestFormGroup() {
		return new FormGroup<ListComplianceSummariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListDocumentVersionsResult {

		/** Minimum items: 1 */
		DocumentVersions?: Array<DocumentVersionInfo>;
		NextToken?: string | null;
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
		Name?: string | null;
		DocumentVersion?: string | null;
		VersionName?: string | null;
		CreatedDate?: Date | null;
		IsDefaultVersion?: boolean | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;

		/** The status of a document. */
		Status?: DocumentDescriptionStatus | null;
		StatusInformation?: string | null;
	}

	/** Version information about the document. */
	export interface DocumentVersionInfoFormProperties {
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		IsDefaultVersion: FormControl<boolean | null | undefined>,
		DocumentFormat: FormControl<DocumentDescriptionDocumentFormat | null | undefined>,

		/** The status of a document. */
		Status: FormControl<DocumentDescriptionStatus | null | undefined>,
		StatusInformation: FormControl<string | null | undefined>,
	}
	export function CreateDocumentVersionInfoFormGroup() {
		return new FormGroup<DocumentVersionInfoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{1,128}$')]),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			IsDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			DocumentFormat: new FormControl<DocumentDescriptionDocumentFormat | null | undefined>(undefined),
			Status: new FormControl<DocumentDescriptionStatus | null | undefined>(undefined),
			StatusInformation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDocumentVersionsRequest {

		/** Required */
		Name: string;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListDocumentVersionsRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentVersionsRequestFormGroup() {
		return new FormGroup<ListDocumentVersionsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDocumentsResult {
		DocumentIdentifiers?: Array<DocumentIdentifier>;
		NextToken?: string | null;
	}
	export interface ListDocumentsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentsResultFormGroup() {
		return new FormGroup<ListDocumentsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the name of a Systems Manager document. */
	export interface DocumentIdentifier {
		Name?: string | null;
		Owner?: string | null;
		VersionName?: string | null;
		PlatformTypes?: Array<PlatformType>;
		DocumentVersion?: string | null;
		DocumentType?: DocumentDescriptionDocumentType | null;
		SchemaVersion?: string | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;

		/** Max length: 200 */
		TargetType?: string | null;

		/** Maximum items: 1000 */
		Tags?: Array<Tag>;

		/** Minimum items: 1 */
		Requires?: Array<DocumentRequires>;
	}

	/** Describes the name of a Systems Manager document. */
	export interface DocumentIdentifierFormProperties {
		Name: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		DocumentType: FormControl<DocumentDescriptionDocumentType | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		DocumentFormat: FormControl<DocumentDescriptionDocumentFormat | null | undefined>,

		/** Max length: 200 */
		TargetType: FormControl<string | null | undefined>,
	}
	export function CreateDocumentIdentifierFormGroup() {
		return new FormGroup<DocumentIdentifierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			Owner: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{1,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			DocumentType: new FormControl<DocumentDescriptionDocumentType | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([0-9]+)\.([0-9]+)')]),
			DocumentFormat: new FormControl<DocumentDescriptionDocumentFormat | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.pattern('^\/[\w\.\-\:\/]*$')]),
		});

	}

	export interface ListDocumentsRequest {

		/** Minimum items: 1 */
		DocumentFilterList?: Array<DocumentFilter>;

		/**
		 * Minimum items: 0
		 * Maximum items: 6
		 */
		Filters?: Array<DocumentKeyValuesFilter>;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListDocumentsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentsRequestFormGroup() {
		return new FormGroup<ListDocumentsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>. */
	export interface DocumentFilter {

		/** Required */
		key: DocumentFilterKey;

		/**
		 * Required
		 * Min length: 1
		 */
		value: string;
	}

	/** This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>. */
	export interface DocumentFilterFormProperties {

		/** Required */
		key: FormControl<DocumentFilterKey | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFilterFormGroup() {
		return new FormGroup<DocumentFilterFormProperties>({
			key: new FormControl<DocumentFilterKey | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum DocumentFilterKey { Name = 0, Owner = 1, PlatformTypes = 2, DocumentType = 3 }


	/** <p>One or more filters. Use a filter to return a more specific list of documents.</p> <p>For keys, you can specify one or more tags that have been applied to a document. </p> <p>Other valid values include <code>Owner</code>, <code>Name</code>, <code>PlatformTypes</code>, <code>DocumentType</code>, and <code>TargetType</code>.</p> <p>Note that only one Owner can be specified in a request. For example: <code>Key=Owner,Values=Self</code>.</p> <p>If you use Name as a key, you can use a name prefix to return a list of documents. For example, in the AWS CLI, to return a list of all documents that begin with <code>Te</code>, run the following command:</p> <p> <code>aws ssm list-documents --filters Key=Name,Values=Te</code> </p> <p>If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.</p> <p>To specify a custom key and value pair, use the format <code>Key=tag:tagName,Values=valueName</code>.</p> <p>For example, if you created a Key called region and are using the AWS CLI to call the <code>list-documents</code> command: </p> <p> <code>aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self</code> </p> */
	export interface DocumentKeyValuesFilter {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key?: string | null;
		Values?: Array<string>;
	}

	/** <p>One or more filters. Use a filter to return a more specific list of documents.</p> <p>For keys, you can specify one or more tags that have been applied to a document. </p> <p>Other valid values include <code>Owner</code>, <code>Name</code>, <code>PlatformTypes</code>, <code>DocumentType</code>, and <code>TargetType</code>.</p> <p>Note that only one Owner can be specified in a request. For example: <code>Key=Owner,Values=Self</code>.</p> <p>If you use Name as a key, you can use a name prefix to return a list of documents. For example, in the AWS CLI, to return a list of all documents that begin with <code>Te</code>, run the following command:</p> <p> <code>aws ssm list-documents --filters Key=Name,Values=Te</code> </p> <p>If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.</p> <p>To specify a custom key and value pair, use the format <code>Key=tag:tagName,Values=valueName</code>.</p> <p>For example, if you created a Key called region and are using the AWS CLI to call the <code>list-documents</code> command: </p> <p> <code>aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self</code> </p> */
	export interface DocumentKeyValuesFilterFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateDocumentKeyValuesFilterFormGroup() {
		return new FormGroup<DocumentKeyValuesFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface ListInventoryEntriesResult {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName?: string | null;
		InstanceId?: string | null;
		SchemaVersion?: string | null;
		CaptureTime?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10000
		 */
		Entries?: Array<InventoryItemEntry>;
		NextToken?: string | null;
	}
	export interface ListInventoryEntriesResultFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		CaptureTime: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInventoryEntriesResultFormGroup() {
		return new FormGroup<ListInventoryEntriesResultFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			SchemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([0-9]{1,6})(\.[0-9]{1,6})$')]),
			CaptureTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(20)[0-9][0-9]-(0[1-9]|1[012])-([12][0-9]|3[01]|0[1-9])(T)(2[0-3]|[0-1][0-9])(:[0-5][0-9])(:[0-5][0-9])(Z)$')]),
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

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Filters?: Array<InventoryFilter>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListInventoryEntriesRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListInventoryEntriesRequestFormGroup() {
		return new FormGroup<ListInventoryEntriesRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListResourceComplianceSummariesResult {
		ResourceComplianceSummaryItems?: Array<ResourceComplianceSummaryItem>;
		NextToken?: string | null;
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

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ComplianceType?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		ResourceType?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId?: string | null;
		Status?: ComplianceItemStatus | null;
		OverallSeverity?: PatchRuleComplianceLevel | null;

		/** A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
		ExecutionSummary?: ComplianceExecutionSummary;

		/** A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
		CompliantSummary?: CompliantSummary;

		/** A summary of resources that are not compliant. The summary is organized according to resource type. */
		NonCompliantSummary?: NonCompliantSummary;
	}

	/** Compliance summary information for a specific resource.  */
	export interface ResourceComplianceSummaryItemFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ComplianceType: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
		Status: FormControl<ComplianceItemStatus | null | undefined>,
		OverallSeverity: FormControl<PatchRuleComplianceLevel | null | undefined>,
	}
	export function CreateResourceComplianceSummaryItemFormGroup() {
		return new FormGroup<ResourceComplianceSummaryItemFormProperties>({
			ComplianceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[A-Za-z0-9_\-]\w+|Custom:[a-zA-Z0-9_\-]\w+')]),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			Status: new FormControl<ComplianceItemStatus | null | undefined>(undefined),
			OverallSeverity: new FormControl<PatchRuleComplianceLevel | null | undefined>(undefined),
		});

	}

	export interface ListResourceComplianceSummariesRequest {
		Filters?: Array<ComplianceStringFilter>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListResourceComplianceSummariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceComplianceSummariesRequestFormGroup() {
		return new FormGroup<ListResourceComplianceSummariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListResourceDataSyncResult {
		ResourceDataSyncItems?: Array<ResourceDataSyncItem>;
		NextToken?: string | null;
	}
	export interface ListResourceDataSyncResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceDataSyncResultFormGroup() {
		return new FormGroup<ListResourceDataSyncResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Resource Data Sync configuration, including its current status and last successful sync. */
	export interface ResourceDataSyncItem {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncName?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncType?: string | null;

		/** <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in AWS Organizations.)</p> */
		SyncSource?: ResourceDataSyncSourceWithState;

		/** Information about the target S3 bucket for the Resource Data Sync. */
		S3Destination?: ResourceDataSyncS3Destination;
		LastSyncTime?: Date | null;
		LastSuccessfulSyncTime?: Date | null;
		SyncLastModifiedTime?: Date | null;
		LastStatus?: ResourceDataSyncItemLastStatus | null;
		SyncCreatedTime?: Date | null;
		LastSyncStatusMessage?: string | null;
	}

	/** Information about a Resource Data Sync configuration, including its current status and last successful sync. */
	export interface ResourceDataSyncItemFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncName: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncType: FormControl<string | null | undefined>,
		LastSyncTime: FormControl<Date | null | undefined>,
		LastSuccessfulSyncTime: FormControl<Date | null | undefined>,
		SyncLastModifiedTime: FormControl<Date | null | undefined>,
		LastStatus: FormControl<ResourceDataSyncItemLastStatus | null | undefined>,
		SyncCreatedTime: FormControl<Date | null | undefined>,
		LastSyncStatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncItemFormGroup() {
		return new FormGroup<ResourceDataSyncItemFormProperties>({
			SyncName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			SyncType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			LastSyncTime: new FormControl<Date | null | undefined>(undefined),
			LastSuccessfulSyncTime: new FormControl<Date | null | undefined>(undefined),
			SyncLastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LastStatus: new FormControl<ResourceDataSyncItemLastStatus | null | undefined>(undefined),
			SyncCreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastSyncStatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in AWS Organizations.)</p> */
	export interface ResourceDataSyncSourceWithState {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SourceType?: string | null;

		/** Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS Organization is not present, from multiple AWS Regions. */
		AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;
		SourceRegions?: Array<string>;
		IncludeFutureRegions?: boolean | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		State?: string | null;
	}

	/** <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in AWS Organizations.)</p> */
	export interface ResourceDataSyncSourceWithStateFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SourceType: FormControl<string | null | undefined>,
		IncludeFutureRegions: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		State: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncSourceWithStateFormGroup() {
		return new FormGroup<ResourceDataSyncSourceWithStateFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			IncludeFutureRegions: new FormControl<boolean | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export enum ResourceDataSyncItemLastStatus { Successful = 0, Failed = 1, InProgress = 2 }

	export interface ListResourceDataSyncRequest {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncType?: string | null;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListResourceDataSyncRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		SyncType: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceDataSyncRequestFormGroup() {
		return new FormGroup<ListResourceDataSyncRequestFormProperties>({
			SyncType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListTagsForResourceResult {

		/** Maximum items: 1000 */
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
		ResourceType: AddTagsToResourceRequestResourceType;

		/** Required */
		ResourceId: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceType: FormControl<AddTagsToResourceRequestResourceType | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceType: new FormControl<AddTagsToResourceRequestResourceType | null | undefined>(undefined, [Validators.required]),
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
		PermissionType: DescribeDocumentPermissionRequestPermissionType;

		/** Maximum items: 20 */
		AccountIdsToAdd?: Array<string>;

		/** Maximum items: 20 */
		AccountIdsToRemove?: Array<string>;

		/**
		 * The document version shared with other accounts. You can share <code>Latest</code>, <code>Default</code> or <code>All versions</code>.
		 * Max length: 8
		 */
		SharedDocumentVersion?: string | null;
	}
	export interface ModifyDocumentPermissionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PermissionType: FormControl<DescribeDocumentPermissionRequestPermissionType | null | undefined>,

		/**
		 * The document version shared with other accounts. You can share <code>Latest</code>, <code>Default</code> or <code>All versions</code>.
		 * Max length: 8
		 */
		SharedDocumentVersion: FormControl<string | null | undefined>,
	}
	export function CreateModifyDocumentPermissionRequestFormGroup() {
		return new FormGroup<ModifyDocumentPermissionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			PermissionType: new FormControl<DescribeDocumentPermissionRequestPermissionType | null | undefined>(undefined, [Validators.required]),
			SharedDocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8), Validators.pattern('([$]LATEST|[$]DEFAULT|[$]ALL)')]),
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

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		ResourceType: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ComplianceType: string;

		/**
		 * A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.
		 * Required
		 */
		ExecutionSummary: ComplianceExecutionSummary;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10000
		 */
		Items: Array<ComplianceItemEntry>;

		/** Max length: 256 */
		ItemContentHash?: string | null;
		UploadType?: PutComplianceItemsRequestUploadType | null;
	}
	export interface PutComplianceItemsRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ComplianceType: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ItemContentHash: FormControl<string | null | undefined>,
		UploadType: FormControl<PutComplianceItemsRequestUploadType | null | undefined>,
	}
	export function CreatePutComplianceItemsRequestFormGroup() {
		return new FormGroup<PutComplianceItemsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
			ComplianceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[A-Za-z0-9_\-]\w+|Custom:[a-zA-Z0-9_\-]\w+')]),
			ItemContentHash: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			UploadType: new FormControl<PutComplianceItemsRequestUploadType | null | undefined>(undefined),
		});

	}


	/** Information about a compliance item. */
	export interface ComplianceItemEntry {
		Id?: string | null;

		/** Max length: 500 */
		Title?: string | null;

		/** Required */
		Severity: PatchRuleComplianceLevel;

		/** Required */
		Status: ComplianceItemStatus;
		Details?: ComplianceItemDetails;
	}

	/** Information about a compliance item. */
	export interface ComplianceItemEntryFormProperties {
		Id: FormControl<string | null | undefined>,

		/** Max length: 500 */
		Title: FormControl<string | null | undefined>,

		/** Required */
		Severity: FormControl<PatchRuleComplianceLevel | null | undefined>,

		/** Required */
		Status: FormControl<ComplianceItemStatus | null | undefined>,
	}
	export function CreateComplianceItemEntryFormGroup() {
		return new FormGroup<ComplianceItemEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			Severity: new FormControl<PatchRuleComplianceLevel | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<ComplianceItemStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PutComplianceItemsRequestUploadType { COMPLETE = 0, PARTIAL = 1 }

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
		Message?: string | null;
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 30
		 */
		Items: Array<InventoryItem>;
	}
	export interface PutInventoryRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreatePutInventoryRequestFormGroup() {
		return new FormGroup<PutInventoryRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
		});

	}


	/** Information collected from managed instances based on your inventory policy document */
	export interface InventoryItem {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: string;

		/** Required */
		SchemaVersion: string;

		/** Required */
		CaptureTime: string;

		/** Max length: 256 */
		ContentHash?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10000
		 */
		Content?: Array<InventoryItemEntry>;
		Context?: InventoryItemContentContext;
	}

	/** Information collected from managed instances based on your inventory policy document */
	export interface InventoryItemFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,

		/** Required */
		SchemaVersion: FormControl<string | null | undefined>,

		/** Required */
		CaptureTime: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ContentHash: FormControl<string | null | undefined>,
	}
	export function CreateInventoryItemFormGroup() {
		return new FormGroup<InventoryItemFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
			SchemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([0-9]{1,6})(\.[0-9]{1,6})$')]),
			CaptureTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(20)[0-9][0-9]-(0[1-9]|1[012])-([12][0-9]|3[01]|0[1-9])(T)(2[0-3]|[0-1][0-9])(:[0-5][0-9])(:[0-5][0-9])(Z)$')]),
			ContentHash: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
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
		Tier?: ParameterMetadataTier | null;
	}
	export interface PutParameterResultFormProperties {
		Version: FormControl<number | null | undefined>,
		Tier: FormControl<ParameterMetadataTier | null | undefined>,
	}
	export function CreatePutParameterResultFormGroup() {
		return new FormGroup<PutParameterResultFormProperties>({
			Version: new FormControl<number | null | undefined>(undefined),
			Tier: new FormControl<ParameterMetadataTier | null | undefined>(undefined),
		});

	}

	export interface PutParameterRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Description?: string | null;

		/** Required */
		Value: string;
		Type?: ParameterMetadataType | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		KeyId?: string | null;
		Overwrite?: boolean | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AllowedPattern?: string | null;

		/** Maximum items: 1000 */
		Tags?: Array<Tag>;
		Tier?: ParameterMetadataTier | null;

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		Policies?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		DataType?: string | null;
	}
	export interface PutParameterRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
		Type: FormControl<ParameterMetadataType | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		Overwrite: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AllowedPattern: FormControl<string | null | undefined>,
		Tier: FormControl<ParameterMetadataTier | null | undefined>,

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		Policies: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		DataType: FormControl<string | null | undefined>,
	}
	export function CreatePutParameterRequestFormGroup() {
		return new FormGroup<PutParameterRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ParameterMetadataType | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([a-zA-Z0-9:/_-]+)$')]),
			Overwrite: new FormControl<boolean | null | undefined>(undefined),
			AllowedPattern: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			Tier: new FormControl<ParameterMetadataTier | null | undefined>(undefined),
			Policies: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			DataType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
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

	export interface RegisterDefaultPatchBaselineResult {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId?: string | null;
	}
	export interface RegisterDefaultPatchBaselineResultFormProperties {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDefaultPatchBaselineResultFormGroup() {
		return new FormGroup<RegisterDefaultPatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
		});

	}

	export interface RegisterDefaultPatchBaselineRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: string;
	}
	export interface RegisterDefaultPatchBaselineRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDefaultPatchBaselineRequestFormGroup() {
		return new FormGroup<RegisterDefaultPatchBaselineRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
		});

	}

	export interface RegisterPatchBaselineForPatchGroupResult {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup?: string | null;
	}
	export interface RegisterPatchBaselineForPatchGroupResultFormProperties {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateRegisterPatchBaselineForPatchGroupResultFormGroup() {
		return new FormGroup<RegisterPatchBaselineForPatchGroupResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface RegisterPatchBaselineForPatchGroupRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: string;
	}
	export interface RegisterPatchBaselineForPatchGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateRegisterPatchBaselineForPatchGroupRequestFormGroup() {
		return new FormGroup<RegisterPatchBaselineForPatchGroupRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
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

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId?: string | null;
	}
	export interface RegisterTargetWithMaintenanceWindowResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTargetWithMaintenanceWindowResultFormGroup() {
		return new FormGroup<RegisterTargetWithMaintenanceWindowResultFormProperties>({
			WindowTargetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface RegisterTargetWithMaintenanceWindowRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/** Required */
		ResourceType: DescribeMaintenanceWindowScheduleRequestResourceType;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets: Array<Target>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;
	}
	export interface RegisterTargetWithMaintenanceWindowRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<DescribeMaintenanceWindowScheduleRequestResourceType | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTargetWithMaintenanceWindowRequestFormGroup() {
		return new FormGroup<RegisterTargetWithMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			ResourceType: new FormControl<DescribeMaintenanceWindowScheduleRequestResourceType | null | undefined>(undefined, [Validators.required]),
			OwnerInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface RegisterTaskWithMaintenanceWindowResult {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId?: string | null;
	}
	export interface RegisterTaskWithMaintenanceWindowResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTaskWithMaintenanceWindowResultFormGroup() {
		return new FormGroup<RegisterTaskWithMaintenanceWindowResultFormProperties>({
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
		});

	}

	export interface RegisterTaskWithMaintenanceWindowRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets: Array<Target>;

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn: string;
		ServiceRoleArn?: string | null;

		/** Required */
		TaskType: MaintenanceWindowExecutionTaskInvocationIdentityTaskType;
		TaskParameters?: MaintenanceWindowTaskParameters;

		/** The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

		/** Minimum: 0 */
		Priority?: number | null;

		/**
		 * Required
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: string;

		/**
		 * Required
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: string;

		/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;
	}
	export interface RegisterTaskWithMaintenanceWindowRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,

		/** Required */
		TaskType: FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>,

		/** Minimum: 0 */
		Priority: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTaskWithMaintenanceWindowRequestFormGroup() {
		return new FormGroup<RegisterTaskWithMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600)]),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			TaskType: new FormControl<MaintenanceWindowExecutionTaskInvocationIdentityTaskType | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
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
		ResourceType: AddTagsToResourceRequestResourceType;

		/** Required */
		ResourceId: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface RemoveTagsFromResourceRequestFormProperties {

		/** Required */
		ResourceType: FormControl<AddTagsToResourceRequestResourceType | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceRequestFormGroup() {
		return new FormGroup<RemoveTagsFromResourceRequestFormProperties>({
			ResourceType: new FormControl<AddTagsToResourceRequestResourceType | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The result body of the ResetServiceSetting API action. */
	export interface ResetServiceSettingResult {

		/** <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> */
		ServiceSetting?: ServiceSetting;
	}

	/** The result body of the ResetServiceSetting API action. */
	export interface ResetServiceSettingResultFormProperties {
	}
	export function CreateResetServiceSettingResultFormGroup() {
		return new FormGroup<ResetServiceSettingResultFormProperties>({
		});

	}


	/** The request body of the ResetServiceSetting API action. */
	export interface ResetServiceSettingRequest {

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		SettingId: string;
	}

	/** The request body of the ResetServiceSetting API action. */
	export interface ResetServiceSettingRequestFormProperties {

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		SettingId: FormControl<string | null | undefined>,
	}
	export function CreateResetServiceSettingRequestFormGroup() {
		return new FormGroup<ResetServiceSettingRequestFormProperties>({
			SettingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]),
		});

	}

	export interface ResumeSessionResponse {

		/**
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId?: string | null;

		/**
		 * Max length: 300
		 * Min length: 0
		 */
		TokenValue?: string | null;
		StreamUrl?: string | null;
	}
	export interface ResumeSessionResponseFormProperties {

		/**
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 300
		 * Min length: 0
		 */
		TokenValue: FormControl<string | null | undefined>,
		StreamUrl: FormControl<string | null | undefined>,
	}
	export function CreateResumeSessionResponseFormGroup() {
		return new FormGroup<ResumeSessionResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(96)]),
			TokenValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(300)]),
			StreamUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResumeSessionRequest {

		/**
		 * Required
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId: string;
	}
	export interface ResumeSessionRequestFormProperties {

		/**
		 * Required
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateResumeSessionRequestFormGroup() {
		return new FormGroup<ResumeSessionRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(96)]),
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

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: string;

		/** Required */
		SignalType: SendAutomationSignalRequestSignalType;
		Payload?: AutomationParameterMap;
	}
	export interface SendAutomationSignalRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: FormControl<string | null | undefined>,

		/** Required */
		SignalType: FormControl<SendAutomationSignalRequestSignalType | null | undefined>,
	}
	export function CreateSendAutomationSignalRequestFormGroup() {
		return new FormGroup<SendAutomationSignalRequestFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
			SignalType: new FormControl<SendAutomationSignalRequestSignalType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SendAutomationSignalRequestSignalType { Approve = 0, Reject = 1, StartStep = 2, StopStep = 3, Resume = 4 }

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

		/** Describes a command request. */
		Command?: Command;
	}
	export interface SendCommandResultFormProperties {
	}
	export function CreateSendCommandResultFormGroup() {
		return new FormGroup<SendCommandResultFormProperties>({
		});

	}

	export interface SendCommandRequest {

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		InstanceIds?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/** Required */
		DocumentName: string;
		DocumentVersion?: string | null;

		/** Max length: 256 */
		DocumentHash?: string | null;
		DocumentHashType?: DocumentDescriptionHashType | null;

		/**
		 * Minimum: 30
		 * Maximum: 2592000
		 */
		TimeoutSeconds?: number | null;

		/** Max length: 100 */
		Comment?: string | null;
		Parameters?: Parameters;

		/**
		 * Max length: 20
		 * Min length: 3
		 */
		OutputS3Region?: string | null;

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		OutputS3BucketName?: string | null;

		/** Max length: 500 */
		OutputS3KeyPrefix?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;
		ServiceRoleArn?: string | null;

		/** Configurations for sending notifications. */
		NotificationConfig?: NotificationConfig;

		/** Configuration options for sending command output to CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
	}
	export interface SendCommandRequestFormProperties {

		/** Required */
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/** Max length: 256 */
		DocumentHash: FormControl<string | null | undefined>,
		DocumentHashType: FormControl<DocumentDescriptionHashType | null | undefined>,

		/**
		 * Minimum: 30
		 * Maximum: 2592000
		 */
		TimeoutSeconds: FormControl<number | null | undefined>,

		/** Max length: 100 */
		Comment: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 3
		 */
		OutputS3Region: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		OutputS3BucketName: FormControl<string | null | undefined>,

		/** Max length: 500 */
		OutputS3KeyPrefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateSendCommandRequestFormGroup() {
		return new FormGroup<SendCommandRequestFormProperties>({
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			DocumentHash: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			DocumentHashType: new FormControl<DocumentDescriptionHashType | null | undefined>(undefined),
			TimeoutSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(30), Validators.max(2592000)]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			OutputS3Region: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(20)]),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63)]),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
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

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId?: string | null;
	}
	export interface StartAutomationExecutionResultFormProperties {

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStartAutomationExecutionResultFormGroup() {
		return new FormGroup<StartAutomationExecutionResultFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
		});

	}

	export interface StartAutomationExecutionRequest {

		/** Required */
		DocumentName: string;
		DocumentVersion?: string | null;
		Parameters?: AutomationParameterMap;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		ClientToken?: string | null;
		Mode?: AutomationExecutionMetadataMode | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		TargetParameterName?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Minimum items: 0
		 * Maximum items: 300
		 */
		TargetMaps?: Array<TargetMap>;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		TargetLocations?: Array<TargetLocation>;

		/** Maximum items: 1000 */
		Tags?: Array<Tag>;
	}
	export interface StartAutomationExecutionRequestFormProperties {

		/** Required */
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		ClientToken: FormControl<string | null | undefined>,
		Mode: FormControl<AutomationExecutionMetadataMode | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		TargetParameterName: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,
	}
	export function CreateStartAutomationExecutionRequestFormGroup() {
		return new FormGroup<StartAutomationExecutionRequestFormProperties>({
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}')]),
			Mode: new FormControl<AutomationExecutionMetadataMode | null | undefined>(undefined),
			TargetParameterName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
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

	export interface StartSessionResponse {

		/**
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId?: string | null;

		/**
		 * Max length: 300
		 * Min length: 0
		 */
		TokenValue?: string | null;
		StreamUrl?: string | null;
	}
	export interface StartSessionResponseFormProperties {

		/**
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 300
		 * Min length: 0
		 */
		TokenValue: FormControl<string | null | undefined>,
		StreamUrl: FormControl<string | null | undefined>,
	}
	export function CreateStartSessionResponseFormGroup() {
		return new FormGroup<StartSessionResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(96)]),
			TokenValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(300)]),
			StreamUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSessionRequest {

		/**
		 * Required
		 * Max length: 400
		 * Min length: 1
		 */
		Target: string;
		DocumentName?: string | null;
		Parameters?: SessionManagerParameters;
	}
	export interface StartSessionRequestFormProperties {

		/**
		 * Required
		 * Max length: 400
		 * Min length: 1
		 */
		Target: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
	}
	export function CreateStartSessionRequestFormGroup() {
		return new FormGroup<StartSessionRequestFormProperties>({
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(400)]),
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
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

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: string;
		Type?: StopAutomationExecutionRequestType | null;
	}
	export interface StopAutomationExecutionRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		AutomationExecutionId: FormControl<string | null | undefined>,
		Type: FormControl<StopAutomationExecutionRequestType | null | undefined>,
	}
	export function CreateStopAutomationExecutionRequestFormGroup() {
		return new FormGroup<StopAutomationExecutionRequestFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
			Type: new FormControl<StopAutomationExecutionRequestType | null | undefined>(undefined),
		});

	}

	export enum StopAutomationExecutionRequestType { Complete = 0, Cancel = 1 }

	export interface InvalidAutomationStatusUpdateException {
	}
	export interface InvalidAutomationStatusUpdateExceptionFormProperties {
	}
	export function CreateInvalidAutomationStatusUpdateExceptionFormGroup() {
		return new FormGroup<InvalidAutomationStatusUpdateExceptionFormProperties>({
		});

	}

	export interface TerminateSessionResponse {

		/**
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId?: string | null;
	}
	export interface TerminateSessionResponseFormProperties {

		/**
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateTerminateSessionResponseFormGroup() {
		return new FormGroup<TerminateSessionResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(96)]),
		});

	}

	export interface TerminateSessionRequest {

		/**
		 * Required
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId: string;
	}
	export interface TerminateSessionRequestFormProperties {

		/**
		 * Required
		 * Max length: 96
		 * Min length: 1
		 */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateTerminateSessionRequestFormGroup() {
		return new FormGroup<TerminateSessionRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(96)]),
		});

	}

	export interface UpdateAssociationResult {

		/** Describes the parameters for a document. */
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
		DocumentVersion?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression?: string | null;

		/** An S3 bucket where you want to store the results of this request. */
		OutputLocation?: InstanceAssociationOutputLocation;
		Name?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;
		AssociationName?: string | null;
		AssociationVersion?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		AutomationTargetParameterName?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;
		ComplianceSeverity?: AssociationDescriptionComplianceSeverity | null;
		SyncCompliance?: AssociationDescriptionSyncCompliance | null;
		ApplyOnlyAtCronInterval?: boolean | null;
	}
	export interface UpdateAssociationRequestFormProperties {

		/** Required */
		AssociationId: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		AutomationTargetParameterName: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,
		ComplianceSeverity: FormControl<AssociationDescriptionComplianceSeverity | null | undefined>,
		SyncCompliance: FormControl<AssociationDescriptionSyncCompliance | null | undefined>,
		ApplyOnlyAtCronInterval: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAssociationRequestFormGroup() {
		return new FormGroup<UpdateAssociationRequestFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			AssociationName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			AssociationVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST)|([1-9][0-9]*)')]),
			AutomationTargetParameterName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			ComplianceSeverity: new FormControl<AssociationDescriptionComplianceSeverity | null | undefined>(undefined),
			SyncCompliance: new FormControl<AssociationDescriptionSyncCompliance | null | undefined>(undefined),
			ApplyOnlyAtCronInterval: new FormControl<boolean | null | undefined>(undefined),
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

		/** Describes the parameters for a document. */
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

		/**
		 * Describes an association status.
		 * Required
		 */
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
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.:/]{3,128}$')]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)')]),
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

		/** Describes a Systems Manager document. */
		DocumentDescription?: DocumentDescription;
	}
	export interface UpdateDocumentResultFormProperties {
	}
	export function CreateUpdateDocumentResultFormGroup() {
		return new FormGroup<UpdateDocumentResultFormProperties>({
		});

	}

	export interface UpdateDocumentRequest {

		/**
		 * Required
		 * Min length: 1
		 */
		Content: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		Attachments?: Array<AttachmentsSource>;

		/** Required */
		Name: string;
		VersionName?: string | null;
		DocumentVersion?: string | null;
		DocumentFormat?: DocumentDescriptionDocumentFormat | null;

		/** Max length: 200 */
		TargetType?: string | null;
	}
	export interface UpdateDocumentRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		DocumentFormat: FormControl<DocumentDescriptionDocumentFormat | null | undefined>,

		/** Max length: 200 */
		TargetType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDocumentRequestFormGroup() {
		return new FormGroup<UpdateDocumentRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{1,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			DocumentFormat: new FormControl<DocumentDescriptionDocumentFormat | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.pattern('^\/[\w\.\-\:\/]*$')]),
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

		/** A default version of a document. */
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
		Name?: string | null;
		DefaultVersion?: string | null;
		DefaultVersionName?: string | null;
	}

	/** A default version of a document. */
	export interface DocumentDefaultVersionDescriptionFormProperties {
		Name: FormControl<string | null | undefined>,
		DefaultVersion: FormControl<string | null | undefined>,
		DefaultVersionName: FormControl<string | null | undefined>,
	}
	export function CreateDocumentDefaultVersionDescriptionFormGroup() {
		return new FormGroup<DocumentDefaultVersionDescriptionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			DefaultVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)')]),
			DefaultVersionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_\-.]{1,128}$')]),
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
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^[1-9][0-9]*$)')]),
		});

	}

	export interface UpdateMaintenanceWindowResult {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
		StartDate?: string | null;
		EndDate?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Schedule?: string | null;
		ScheduleTimezone?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 24
		 */
		Duration?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 23
		 */
		Cutoff?: number | null;
		AllowUnassociatedTargets?: boolean | null;
		Enabled?: boolean | null;
	}
	export interface UpdateMaintenanceWindowResultFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Schedule: FormControl<string | null | undefined>,
		ScheduleTimezone: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 24
		 */
		Duration: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 23
		 */
		Cutoff: FormControl<number | null | undefined>,
		AllowUnassociatedTargets: FormControl<boolean | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowResultFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ScheduleTimezone: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(24)]),
			Cutoff: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(23)]),
			AllowUnassociatedTargets: new FormControl<boolean | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateMaintenanceWindowRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
		StartDate?: string | null;
		EndDate?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Schedule?: string | null;
		ScheduleTimezone?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 24
		 */
		Duration?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 23
		 */
		Cutoff?: number | null;
		AllowUnassociatedTargets?: boolean | null;
		Enabled?: boolean | null;
		Replace?: boolean | null;
	}
	export interface UpdateMaintenanceWindowRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Schedule: FormControl<string | null | undefined>,
		ScheduleTimezone: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 24
		 */
		Duration: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 23
		 */
		Cutoff: FormControl<number | null | undefined>,
		AllowUnassociatedTargets: FormControl<boolean | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		Replace: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowRequestFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ScheduleTimezone: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(24)]),
			Cutoff: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(23)]),
			AllowUnassociatedTargets: new FormControl<boolean | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Replace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateMaintenanceWindowTargetResult {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
	}
	export interface UpdateMaintenanceWindowTargetResultFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowTargetResultFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowTargetResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTargetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			OwnerInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface UpdateMaintenanceWindowTargetRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
		Replace?: boolean | null;
	}
	export interface UpdateMaintenanceWindowTargetRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTargetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OwnerInformation: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Replace: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowTargetRequestFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowTargetRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTargetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			OwnerInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Replace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateMaintenanceWindowTaskResult {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn?: string | null;
		ServiceRoleArn?: string | null;
		TaskParameters?: MaintenanceWindowTaskParameters;

		/** The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

		/** Minimum: 0 */
		Priority?: number | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;

		/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
	}
	export interface UpdateMaintenanceWindowTaskResultFormProperties {

		/**
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Priority: FormControl<number | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowTaskResultFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowTaskResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface UpdateMaintenanceWindowTaskRequest {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn?: string | null;
		ServiceRoleArn?: string | null;
		TaskParameters?: MaintenanceWindowTaskParameters;

		/** The parameters for task execution. */
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

		/** Minimum: 0 */
		Priority?: number | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency?: string | null;

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors?: string | null;

		/** <p>Information about an S3 bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an S3 bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
		LoggingInfo?: LoggingInfo;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;
		Replace?: boolean | null;
	}
	export interface UpdateMaintenanceWindowTaskRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		WindowId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		WindowTaskId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskArn: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Priority: FormControl<number | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxConcurrency: FormControl<string | null | undefined>,

		/**
		 * Max length: 7
		 * Min length: 1
		 */
		MaxErrors: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Replace: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowTaskRequestFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowTaskRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^mw-[0-9a-f]{17}$')]),
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$')]),
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$')]),
			MaxErrors: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(7), Validators.pattern('^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Replace: new FormControl<boolean | null | undefined>(undefined),
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

		/**
		 * Required
		 * Max length: 64
		 */
		IamRole: string;
	}
	export interface UpdateManagedInstanceRoleRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 */
		IamRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateManagedInstanceRoleRequestFormGroup() {
		return new FormGroup<UpdateManagedInstanceRoleRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^mi-[0-9a-f]{17}$')]),
			IamRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64)]),
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

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		OperationalData?: OpsItemOperationalData;
		OperationalDataToDelete?: Array<string>;
		Notifications?: Array<OpsItemNotification>;

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		Priority?: number | null;
		RelatedOpsItems?: Array<RelatedOpsItem>;
		Status?: OpsItemSummaryStatus | null;

		/** Required */
		OpsItemId: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Title?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Category?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Severity?: string | null;
	}
	export interface UpdateOpsItemRequestFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		Priority: FormControl<number | null | undefined>,
		Status: FormControl<OpsItemSummaryStatus | null | undefined>,

		/** Required */
		OpsItemId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Title: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Category: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Severity: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOpsItemRequestFormGroup() {
		return new FormGroup<UpdateOpsItemRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			Status: new FormControl<OpsItemSummaryStatus | null | undefined>(undefined),
			OpsItemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(oi)-[0-9a-f]{12}$')]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Category: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Severity: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface UpdatePatchBaselineResult {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;
		OperatingSystem?: CreatePatchBaselineRequestOperatingSystem | null;

		/** A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup;

		/** A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		ApprovedPatches?: Array<string>;
		ApprovedPatchesComplianceLevel?: PatchRuleComplianceLevel | null;
		ApprovedPatchesEnableNonSecurity?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		RejectedPatches?: Array<string>;
		RejectedPatchesAction?: CreatePatchBaselineRequestRejectedPatchesAction | null;
		CreatedDate?: Date | null;
		ModifiedDate?: Date | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		Sources?: Array<PatchSource>;
	}
	export interface UpdatePatchBaselineResultFormProperties {

		/**
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>,
		ApprovedPatchesComplianceLevel: FormControl<PatchRuleComplianceLevel | null | undefined>,
		ApprovedPatchesEnableNonSecurity: FormControl<boolean | null | undefined>,
		RejectedPatchesAction: FormControl<CreatePatchBaselineRequestRejectedPatchesAction | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		ModifiedDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePatchBaselineResultFormGroup() {
		return new FormGroup<UpdatePatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			OperatingSystem: new FormControl<CreatePatchBaselineRequestOperatingSystem | null | undefined>(undefined),
			ApprovedPatchesComplianceLevel: new FormControl<PatchRuleComplianceLevel | null | undefined>(undefined),
			ApprovedPatchesEnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
			RejectedPatchesAction: new FormControl<CreatePatchBaselineRequestRejectedPatchesAction | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			ModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface UpdatePatchBaselineRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: string;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name?: string | null;

		/** A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup;

		/** A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		ApprovedPatches?: Array<string>;
		ApprovedPatchesComplianceLevel?: PatchRuleComplianceLevel | null;
		ApprovedPatchesEnableNonSecurity?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		RejectedPatches?: Array<string>;
		RejectedPatchesAction?: CreatePatchBaselineRequestRejectedPatchesAction | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		Sources?: Array<PatchSource>;
		Replace?: boolean | null;
	}
	export interface UpdatePatchBaselineRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 20
		 */
		BaselineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,
		ApprovedPatchesComplianceLevel: FormControl<PatchRuleComplianceLevel | null | undefined>,
		ApprovedPatchesEnableNonSecurity: FormControl<boolean | null | undefined>,
		RejectedPatchesAction: FormControl<CreatePatchBaselineRequestRejectedPatchesAction | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Replace: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePatchBaselineRequestFormGroup() {
		return new FormGroup<UpdatePatchBaselineRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-:/]{20,128}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_\-.]{3,128}$')]),
			ApprovedPatchesComplianceLevel: new FormControl<PatchRuleComplianceLevel | null | undefined>(undefined),
			ApprovedPatchesEnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
			RejectedPatchesAction: new FormControl<CreatePatchBaselineRequestRejectedPatchesAction | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		SyncName: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		SyncType: string;

		/**
		 * Information about the source of the data included in the resource data sync.
		 * Required
		 */
		SyncSource: ResourceDataSyncSource;
	}
	export interface UpdateResourceDataSyncRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		SyncName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		SyncType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceDataSyncRequestFormGroup() {
		return new FormGroup<UpdateResourceDataSyncRequestFormProperties>({
			SyncName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			SyncType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
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


	/** The result body of the UpdateServiceSetting API action. */
	export interface UpdateServiceSettingResult {
	}

	/** The result body of the UpdateServiceSetting API action. */
	export interface UpdateServiceSettingResultFormProperties {
	}
	export function CreateUpdateServiceSettingResultFormGroup() {
		return new FormGroup<UpdateServiceSettingResultFormProperties>({
		});

	}


	/** The request body of the UpdateServiceSetting API action. */
	export interface UpdateServiceSettingRequest {

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		SettingId: string;

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		SettingValue: string;
	}

	/** The request body of the UpdateServiceSetting API action. */
	export interface UpdateServiceSettingRequestFormProperties {

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		SettingId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		SettingValue: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceSettingRequestFormGroup() {
		return new FormGroup<UpdateServiceSettingRequestFormProperties>({
			SettingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]),
			SettingValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
		});

	}

	export enum ResourceTypeForTagging { Document = 0, ManagedInstance = 1, MaintenanceWindow = 2, Parameter = 3, PatchBaseline = 4, OpsItem = 5 }

	export enum AssociationComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }

	export enum AssociationSyncCompliance { AUTO = 0, MANUAL = 1 }

	export enum AssociationFilterOperatorType { EQUAL = 0, LESS_THAN = 1, GREATER_THAN = 2 }

	export enum AttachmentHashType { Sha256 = 0 }

	export enum AutomationExecutionStatus { Pending = 0, InProgress = 1, Waiting = 2, Success = 3, TimedOut = 4, Cancelling = 5, Cancelled = 6, Failed = 7 }

	export enum ExecutionMode { Auto = 0, Interactive = 1 }

	export enum AutomationType { CrossAccount = 0, Local = 1 }

	export enum CalendarState { OPEN = 0, CLOSED = 1 }

	export enum CommandInvocationStatus { Pending = 0, InProgress = 1, Delayed = 2, Success = 3, Cancelled = 4, TimedOut = 5, Failed = 6, Cancelling = 7 }

	export enum ComplianceStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export enum ComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum ComplianceQueryOperatorType { EQUAL = 0, NOT_EQUAL = 1, BEGIN_WITH = 2, LESS_THAN = 3, GREATER_THAN = 4 }

	export enum ComplianceUploadType { COMPLETE = 0, PARTIAL = 1 }

	export enum ConnectionStatus { Connected = 0, NotConnected = 1 }

	export enum DocumentType { Command = 0, Policy = 1, Automation = 2, Session = 3, Package = 4, ApplicationConfiguration = 5, ApplicationConfigurationSchema = 6, DeploymentStrategy = 7, ChangeCalendar = 8 }

	export enum DocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }

	export enum OperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, UBUNTU = 3, REDHAT_ENTERPRISE_LINUX = 4, SUSE = 5, CENTOS = 6, ORACLE_LINUX = 7, DEBIAN = 8 }

	export enum PatchComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum PatchAction { ALLOW_AS_DEPENDENCY = 0, BLOCK = 1 }

	export enum InventorySchemaDeleteOption { DisableSchema = 0, DeleteSchema = 1 }

	export enum DescribeActivationsFilterKeys { ActivationIds = 0, DefaultInstanceName = 1, IamRole = 2 }

	export enum DocumentPermissionType { Share = 0 }

	export enum MaintenanceWindowResourceType { INSTANCE = 0, RESOURCE_GROUP = 1 }

	export enum PatchProperty { PRODUCT = 0, PRODUCT_FAMILY = 1, CLASSIFICATION = 2, MSRC_SEVERITY = 3, PRIORITY = 4, SEVERITY = 5 }

	export enum PatchSet { OS = 0, APPLICATION = 1 }

	export enum SessionState { Active = 0, History = 1 }

	export enum DocumentHashType { Sha256 = 0, Sha1 = 1 }


	/** The status of a document. */
	export enum DocumentStatus { Creating = 0, Active = 1, Updating = 2, Deleting = 3, Failed = 4 }

	export enum Fault { Client = 0, Server = 1, Unknown = 2 }

	export enum MaintenanceWindowExecutionStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }

	export enum MaintenanceWindowTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }

	export enum PingStatus { Online = 0, ConnectionLost = 1, Inactive = 2 }

	export enum ResourceType { ManagedInstance = 0, Document = 1, EC2Instance = 2 }

	export enum PatchOperationType { Scan = 0, Install = 1 }

	export enum RebootOption { RebootIfNeeded = 0, NoReboot = 1 }

	export enum InstancePatchStateOperatorType { Equal = 0, NotEqual = 1, LessThan = 2, GreaterThan = 3 }

	export enum InventoryAttributeDataType { string = 0, number = 1 }

	export enum InventoryDeletionStatus { InProgress = 0, Complete = 1 }

	export enum InventoryQueryOperatorType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }


	/** The inventory result item. */
	export interface InventoryResultItem {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: string;

		/** Required */
		SchemaVersion: string;
		CaptureTime?: string | null;

		/** Max length: 256 */
		ContentHash?: string | null;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10000
		 */
		Content: Array<InventoryItemEntry>;
	}

	/** The inventory result item. */
	export interface InventoryResultItemFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		TypeName: FormControl<string | null | undefined>,

		/** Required */
		SchemaVersion: FormControl<string | null | undefined>,
		CaptureTime: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ContentHash: FormControl<string | null | undefined>,
	}
	export function CreateInventoryResultItemFormGroup() {
		return new FormGroup<InventoryResultItemFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(AWS|Custom):.*$')]),
			SchemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([0-9]{1,6})(\.[0-9]{1,6})$')]),
			CaptureTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(20)[0-9][0-9]-(0[1-9]|1[012])-([12][0-9]|3[01]|0[1-9])(T)(2[0-3]|[0-1][0-9])(:[0-5][0-9])(:[0-5][0-9])(Z)$')]),
			ContentHash: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export enum LastResourceDataSyncStatus { Successful = 0, Failed = 1, InProgress = 2 }


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

	export enum NotificationType { Command = 0, Invocation = 1 }

	export interface OpsEntityItemEntry {
	}
	export interface OpsEntityItemEntryFormProperties {
	}
	export function CreateOpsEntityItemEntryFormGroup() {
		return new FormGroup<OpsEntityItemEntryFormProperties>({
		});

	}


	/** The OpsItem summaries result item. */
	export interface OpsEntityItem {
		CaptureTime?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10000
		 */
		Content?: Array<OpsEntityItemEntry>;
	}

	/** The OpsItem summaries result item. */
	export interface OpsEntityItemFormProperties {
		CaptureTime: FormControl<string | null | undefined>,
	}
	export function CreateOpsEntityItemFormGroup() {
		return new FormGroup<OpsEntityItemFormProperties>({
			CaptureTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(20)[0-9][0-9]-(0[1-9]|1[012])-([12][0-9]|3[01]|0[1-9])(T)(2[0-3]|[0-1][0-9])(:[0-5][0-9])(:[0-5][0-9])(Z)$')]),
		});

	}

	export enum OpsFilterOperatorType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }

	export enum OpsItemStatus { Open = 0, InProgress = 1, Resolved = 2 }

	export enum OpsItemDataType { SearchableString = 0, String = 1 }


	/** An object that defines the value of the key and its type in the OperationalData map. */
	export interface OpsItemDataValue {
		Value?: string | null;
		Type?: OpsItemDataType | null;
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

	export enum ParameterType { String = 0, StringList = 1, SecureString = 2 }

	export enum ParameterTier { Standard = 0, Advanced = 1, 'Intelligent-Tiering' = 2 }

	export enum PatchDeploymentStatus { APPROVED = 0, PENDING_APPROVAL = 1, EXPLICIT_APPROVED = 2, EXPLICIT_REJECTED = 3 }

	export enum ResourceDataSyncS3Format { JsonSerDe = 0 }

	export enum SignalType { Approve = 0, Reject = 1, StartStep = 2, StopStep = 3, Resume = 4 }

	export enum StopType { Complete = 0, Cancel = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds or overwrites one or more tags for the specified resource. Tags are metadata that you can assign to your documents, managed instances, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed instances that helps you track each instance's owner and stack level. For example: Key=Owner and Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or Test.</p> <p>Each resource can have a maximum of 50 tags. </p> <p>We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters. </p> <p>For more information about using tags with EC2 instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonSSM.AddTagsToResource
		 * @return {AddTagsToResourceResult} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceRequest): Observable<AddTagsToResourceResult> {
			return this.http.post<AddTagsToResourceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.AddTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Stops a maintenance window execution that is already in progress and cancels any tasks in the window that have not already starting running. (Tasks already in progress will continue to completion.)
		 * Post #X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution
		 * @return {CancelMaintenanceWindowExecutionResult} Success
		 */
		CancelMaintenanceWindowExecution(requestBody: CancelMaintenanceWindowExecutionRequest): Observable<CancelMaintenanceWindowExecutionResult> {
			return this.http.post<CancelMaintenanceWindowExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates an activation code and activation ID you can use to register your on-premises server or virtual machine (VM) with Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises instances and VMs using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up AWS Systems Manager for hybrid environments</a> in the <i>AWS Systems Manager User Guide</i>. </p> <note> <p>On-premises servers or VMs that are registered with Systems Manager and EC2 instances that you manage with Systems Manager are all called <i>managed instances</i>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreateActivation
		 * @return {CreateActivationResult} Success
		 */
		CreateActivation(requestBody: CreateActivationRequest): Observable<CreateActivationResult> {
			return this.http.post<CreateActivationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateActivation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates the specified Systems Manager document with the specified instances or targets.</p> <p>When you associate a document with one or more instances, SSM Agent running on the instance processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system returns the <code>AssociationAlreadyExists</code> exception.</p>
		 * Post #X-Amz-Target=AmazonSSM.CreateAssociation
		 * @return {CreateAssociationResult} Success
		 */
		CreateAssociation(requestBody: CreateAssociationRequest): Observable<CreateAssociationResult> {
			return this.http.post<CreateAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates the specified Systems Manager document with the specified instances or targets.</p> <p>When you associate a document with one or more instances using instance IDs or tags, SSM Agent running on the instance processes the document and configures the instance as specified.</p> <p>If you associate a document with an instance that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>
		 * Post #X-Amz-Target=AmazonSSM.CreateAssociationBatch
		 * @return {CreateAssociationBatchResult} Success
		 */
		CreateAssociationBatch(requestBody: CreateAssociationBatchRequest): Observable<CreateAssociationBatchResult> {
			return this.http.post<CreateAssociationBatchResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateAssociationBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Systems Manager (SSM) document. An SSM document defines the actions that Systems Manager performs on your managed instances. For more information about SSM documents, including information about supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">AWS Systems Manager Documents</a> in the <i>AWS Systems Manager User Guide</i>.
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
		 * <p>Creates a new OpsItem. You must have permission in AWS Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.CreateOpsItem
		 * @return {CreateOpsItemResponse} Success
		 */
		CreateOpsItem(requestBody: CreateOpsItemRequest): Observable<CreateOpsItemResponse> {
			return this.http.post<CreateOpsItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateOpsItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a patch baseline.</p> <note> <p>For information about valid key and value pairs in <code>PatchFilters</code> for each supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreatePatchBaseline
		 * @return {CreatePatchBaselineResult} Success
		 */
		CreatePatchBaseline(requestBody: CreatePatchBaselineRequest): Observable<CreatePatchBaselineResult> {
			return this.http.post<CreatePatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreatePatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A resource data sync helps you view data from multiple sources in a single location. Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and <code>SyncFromSource</code>.</p> <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to synchronize Inventory data from multiple AWS Regions to a single S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring Resource Data Sync for Inventory</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple AWS Regions to a single S3 bucket. This type can synchronize OpsItems and OpsData from multiple AWS accounts and Regions or <code>EntireOrganization</code> by using AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the <a>ListResourceDataSync</a>.</p> <note> <p>By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreateResourceDataSync
		 * @return {CreateResourceDataSyncResult} Success
		 */
		CreateResourceDataSync(requestBody: CreateResourceDataSyncRequest): Observable<CreateResourceDataSyncResult> {
			return this.http.post<CreateResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an activation. You are not required to delete an activation. If you delete an activation, you can no longer use it to register additional managed instances. Deleting an activation does not de-register managed instances. You must manually de-register managed instances.
		 * Post #X-Amz-Target=AmazonSSM.DeleteActivation
		 * @return {DeleteActivationResult} Success
		 */
		DeleteActivation(requestBody: DeleteActivationRequest): Observable<DeleteActivationResult> {
			return this.http.post<DeleteActivationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteActivation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates the specified Systems Manager document from the specified instance.</p> <p>When you disassociate a document from an instance, it does not change the configuration of the instance. To change the configuration state of an instance after you disassociate a document, you must create a new document with the desired configuration and associate it with the instance.</p>
		 * Post #X-Amz-Target=AmazonSSM.DeleteAssociation
		 * @return {DeleteAssociationResult} Success
		 */
		DeleteAssociation(requestBody: DeleteAssociationRequest): Observable<DeleteAssociationResult> {
			return this.http.post<DeleteAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the Systems Manager document and all instance associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all instances that are associated with the document.</p>
		 * Post #X-Amz-Target=AmazonSSM.DeleteDocument
		 * @return {DeleteDocumentResult} Success
		 */
		DeleteDocument(requestBody: DeleteDocumentRequest): Observable<DeleteDocumentResult> {
			return this.http.post<DeleteDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a custom inventory type, or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
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
		 * Delete a parameter from the system.
		 * Post #X-Amz-Target=AmazonSSM.DeleteParameter
		 * @return {DeleteParameterResult} Success
		 */
		DeleteParameter(requestBody: DeleteParameterRequest): Observable<DeleteParameterResult> {
			return this.http.post<DeleteParameterResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a list of parameters.
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
		 * Deletes a Resource Data Sync configuration. After the configuration is deleted, changes to data on managed instances are no longer synced to or from the target. Deleting a sync configuration does not delete data.
		 * Post #X-Amz-Target=AmazonSSM.DeleteResourceDataSync
		 * @return {DeleteResourceDataSyncResult} Success
		 */
		DeleteResourceDataSync(requestBody: DeleteResourceDataSyncRequest): Observable<DeleteResourceDataSyncResult> {
			return this.http.post<DeleteResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the server or virtual machine from the list of registered servers. You can reregister the instance again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.
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
		 * Describes details about the activation, such as the date and time the activation was created, its expiration date, the IAM role assigned to the instances in the activation, and the number of instances registered by using this activation.
		 * Post #X-Amz-Target=AmazonSSM.DescribeActivations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeActivationsResult} Success
		 */
		DescribeActivations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeActivationsRequest): Observable<DescribeActivationsResult> {
			return this.http.post<DescribeActivationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeActivations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the association for the specified target or instance. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID. If you created the association by specifying an instance ID and a Systems Manager document, then you retrieve the association by specifying the document name and the instance ID.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAssociation
		 * @return {DescribeAssociationResult} Success
		 */
		DescribeAssociation(requestBody: DescribeAssociationRequest): Observable<DescribeAssociationResult> {
			return this.http.post<DescribeAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this API action to view information about a specific execution of a specific association.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets
		 * @return {DescribeAssociationExecutionTargetsResult} Success
		 */
		DescribeAssociationExecutionTargets(requestBody: DescribeAssociationExecutionTargetsRequest): Observable<DescribeAssociationExecutionTargetsResult> {
			return this.http.post<DescribeAssociationExecutionTargetsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this API action to view all executions for a specific association ID.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAssociationExecutions
		 * @return {DescribeAssociationExecutionsResult} Success
		 */
		DescribeAssociationExecutions(requestBody: DescribeAssociationExecutionsRequest): Observable<DescribeAssociationExecutionsResult> {
			return this.http.post<DescribeAssociationExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about all active and terminated Automation executions.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAutomationExecutions
		 * @return {DescribeAutomationExecutionsResult} Success
		 */
		DescribeAutomationExecutions(requestBody: DescribeAutomationExecutionsRequest): Observable<DescribeAutomationExecutionsResult> {
			return this.http.post<DescribeAutomationExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Information about all active and terminated step executions in an Automation workflow.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions
		 * @return {DescribeAutomationStepExecutionsResult} Success
		 */
		DescribeAutomationStepExecutions(requestBody: DescribeAutomationStepExecutionsRequest): Observable<DescribeAutomationStepExecutionsResult> {
			return this.http.post<DescribeAutomationStepExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all patches eligible to be included in a patch baseline.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAvailablePatches
		 * @return {DescribeAvailablePatchesResult} Success
		 */
		DescribeAvailablePatches(requestBody: DescribeAvailablePatchesRequest): Observable<DescribeAvailablePatchesResult> {
			return this.http.post<DescribeAvailablePatchesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAvailablePatches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Systems Manager document.
		 * Post #X-Amz-Target=AmazonSSM.DescribeDocument
		 * @return {DescribeDocumentResult} Success
		 */
		DescribeDocument(requestBody: DescribeDocumentRequest): Observable<DescribeDocumentResult> {
			return this.http.post<DescribeDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the permissions for a Systems Manager document. If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's AWS account ID) or publicly (<i>All</i>).
		 * Post #X-Amz-Target=AmazonSSM.DescribeDocumentPermission
		 * @return {DescribeDocumentPermissionResponse} Success
		 */
		DescribeDocumentPermission(requestBody: DescribeDocumentPermissionRequest): Observable<DescribeDocumentPermissionResponse> {
			return this.http.post<DescribeDocumentPermissionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeDocumentPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * All associations for the instance(s).
		 * Post #X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations
		 * @return {DescribeEffectiveInstanceAssociationsResult} Success
		 */
		DescribeEffectiveInstanceAssociations(requestBody: DescribeEffectiveInstanceAssociationsRequest): Observable<DescribeEffectiveInstanceAssociationsResult> {
			return this.http.post<DescribeEffectiveInstanceAssociationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Note that this API applies only to Windows patch baselines.
		 * Post #X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline
		 * @return {DescribeEffectivePatchesForPatchBaselineResult} Success
		 */
		DescribeEffectivePatchesForPatchBaseline(requestBody: DescribeEffectivePatchesForPatchBaselineRequest): Observable<DescribeEffectivePatchesForPatchBaselineResult> {
			return this.http.post<DescribeEffectivePatchesForPatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The status of the associations for the instance(s).
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus
		 * @return {DescribeInstanceAssociationsStatusResult} Success
		 */
		DescribeInstanceAssociationsStatus(requestBody: DescribeInstanceAssociationsStatusRequest): Observable<DescribeInstanceAssociationsStatusResult> {
			return this.http.post<DescribeInstanceAssociationsStatusResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes one or more of your instances, including information about the operating system platform, the version of SSM Agent installed on the instance, instance status, and so on.</p> <p>If you specify one or more instance IDs, it returns information for those instances. If you do not specify instance IDs, it returns information for all your instances. If you specify an instance ID that is not valid or an instance that you do not own, you receive an error.</p> <note> <p>The IamRole field for this API action is the Amazon Identity and Access Management (IAM) role assigned to on-premises instances. This call does not return the IAM role for EC2 instances.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstanceInformation
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInstanceInformationResult} Success
		 */
		DescribeInstanceInformation(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInstanceInformationRequest): Observable<DescribeInstanceInformationResult> {
			return this.http.post<DescribeInstanceInformationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstanceInformation?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the high-level patch state of one or more instances.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstancePatchStates
		 * @return {DescribeInstancePatchStatesResult} Success
		 */
		DescribeInstancePatchStates(requestBody: DescribeInstancePatchStatesRequest): Observable<DescribeInstancePatchStatesResult> {
			return this.http.post<DescribeInstancePatchStatesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the high-level patch state for the instances in the specified patch group.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup
		 * @return {DescribeInstancePatchStatesForPatchGroupResult} Success
		 */
		DescribeInstancePatchStatesForPatchGroup(requestBody: DescribeInstancePatchStatesForPatchGroupRequest): Observable<DescribeInstancePatchStatesForPatchGroupResult> {
			return this.http.post<DescribeInstancePatchStatesForPatchGroupResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the patches on the specified instance and their state relative to the patch baseline being used for the instance.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstancePatches
		 * @return {DescribeInstancePatchesResult} Success
		 */
		DescribeInstancePatches(requestBody: DescribeInstancePatchesRequest): Observable<DescribeInstancePatchesResult> {
			return this.http.post<DescribeInstancePatchesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstancePatches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a specific delete inventory operation.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInventoryDeletions
		 * @return {DescribeInventoryDeletionsResult} Success
		 */
		DescribeInventoryDeletions(requestBody: DescribeInventoryDeletionsRequest): Observable<DescribeInventoryDeletionsResult> {
			return this.http.post<DescribeInventoryDeletionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations
		 * @return {DescribeMaintenanceWindowExecutionTaskInvocationsResult} Success
		 */
		DescribeMaintenanceWindowExecutionTaskInvocations(requestBody: DescribeMaintenanceWindowExecutionTaskInvocationsRequest): Observable<DescribeMaintenanceWindowExecutionTaskInvocationsResult> {
			return this.http.post<DescribeMaintenanceWindowExecutionTaskInvocationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For a given maintenance window execution, lists the tasks that were run.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks
		 * @return {DescribeMaintenanceWindowExecutionTasksResult} Success
		 */
		DescribeMaintenanceWindowExecutionTasks(requestBody: DescribeMaintenanceWindowExecutionTasksRequest): Observable<DescribeMaintenanceWindowExecutionTasksResult> {
			return this.http.post<DescribeMaintenanceWindowExecutionTasksResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions
		 * @return {DescribeMaintenanceWindowExecutionsResult} Success
		 */
		DescribeMaintenanceWindowExecutions(requestBody: DescribeMaintenanceWindowExecutionsRequest): Observable<DescribeMaintenanceWindowExecutionsResult> {
			return this.http.post<DescribeMaintenanceWindowExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about upcoming executions of a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule
		 * @return {DescribeMaintenanceWindowScheduleResult} Success
		 */
		DescribeMaintenanceWindowSchedule(requestBody: DescribeMaintenanceWindowScheduleRequest): Observable<DescribeMaintenanceWindowScheduleResult> {
			return this.http.post<DescribeMaintenanceWindowScheduleResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targets registered with the maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets
		 * @return {DescribeMaintenanceWindowTargetsResult} Success
		 */
		DescribeMaintenanceWindowTargets(requestBody: DescribeMaintenanceWindowTargetsRequest): Observable<DescribeMaintenanceWindowTargetsResult> {
			return this.http.post<DescribeMaintenanceWindowTargetsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tasks in a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks
		 * @return {DescribeMaintenanceWindowTasksResult} Success
		 */
		DescribeMaintenanceWindowTasks(requestBody: DescribeMaintenanceWindowTasksRequest): Observable<DescribeMaintenanceWindowTasksResult> {
			return this.http.post<DescribeMaintenanceWindowTasksResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the maintenance windows in an AWS account.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows
		 * @return {DescribeMaintenanceWindowsResult} Success
		 */
		DescribeMaintenanceWindows(requestBody: DescribeMaintenanceWindowsRequest): Observable<DescribeMaintenanceWindowsResult> {
			return this.http.post<DescribeMaintenanceWindowsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the maintenance window targets or tasks that an instance is associated with.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget
		 * @return {DescribeMaintenanceWindowsForTargetResult} Success
		 */
		DescribeMaintenanceWindowsForTarget(requestBody: DescribeMaintenanceWindowsForTargetRequest): Observable<DescribeMaintenanceWindowsForTargetResult> {
			return this.http.post<DescribeMaintenanceWindowsForTargetResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Query a set of OpsItems. You must have permission in AWS Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.DescribeOpsItems
		 * @return {DescribeOpsItemsResponse} Success
		 */
		DescribeOpsItems(requestBody: DescribeOpsItemsRequest): Observable<DescribeOpsItemsResponse> {
			return this.http.post<DescribeOpsItemsResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeOpsItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get information about a parameter.</p> <note> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.DescribeParameters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeParametersResult} Success
		 */
		DescribeParameters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeParametersRequest): Observable<DescribeParametersResult> {
			return this.http.post<DescribeParametersResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeParameters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the patch baselines in your AWS account.
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchBaselines
		 * @return {DescribePatchBaselinesResult} Success
		 */
		DescribePatchBaselines(requestBody: DescribePatchBaselinesRequest): Observable<DescribePatchBaselinesResult> {
			return this.http.post<DescribePatchBaselinesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchBaselines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns high-level aggregated patch compliance state for a patch group.
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchGroupState
		 * @return {DescribePatchGroupStateResult} Success
		 */
		DescribePatchGroupState(requestBody: DescribePatchGroupStateRequest): Observable<DescribePatchGroupStateResult> {
			return this.http.post<DescribePatchGroupStateResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchGroupState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all patch groups that have been registered with patch baselines.
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchGroups
		 * @return {DescribePatchGroupsResult} Success
		 */
		DescribePatchGroups(requestBody: DescribePatchGroupsRequest): Observable<DescribePatchGroupsResult> {
			return this.http.post<DescribePatchGroupsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for actions such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>WINDOWS</dt> <dd> <p>Valid properties: PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, MSRC_SEVERITY</p> </dd> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>UBUNTU </dt> <dd> <p>Valid properties: PRODUCT, PRIORITY</p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> </dl>
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchProperties
		 * @return {DescribePatchPropertiesResult} Success
		 */
		DescribePatchProperties(requestBody: DescribePatchPropertiesRequest): Observable<DescribePatchPropertiesResult> {
			return this.http.post<DescribePatchPropertiesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.
		 * Post #X-Amz-Target=AmazonSSM.DescribeSessions
		 * @return {DescribeSessionsResponse} Success
		 */
		DescribeSessions(requestBody: DescribeSessionsRequest): Observable<DescribeSessionsResponse> {
			return this.http.post<DescribeSessionsResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Gets the state of the AWS Systems Manager Change Calendar at an optional, specified time. If you specify a time, <code>GetCalendarState</code> returns the state of the calendar at a specific time, and returns the next time that the Change Calendar state will transition. If you do not specify a time, <code>GetCalendarState</code> assumes the current time. Change Calendar entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>. For more information about Systems Manager Change Calendar, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">AWS Systems Manager Change Calendar</a> in the <i>AWS Systems Manager User Guide</i>.
		 * Post #X-Amz-Target=AmazonSSM.GetCalendarState
		 * @return {GetCalendarStateResponse} Success
		 */
		GetCalendarState(requestBody: GetCalendarStateRequest): Observable<GetCalendarStateResponse> {
			return this.http.post<GetCalendarStateResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetCalendarState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns detailed information about command execution for an invocation or plugin.
		 * Post #X-Amz-Target=AmazonSSM.GetCommandInvocation
		 * @return {GetCommandInvocationResult} Success
		 */
		GetCommandInvocation(requestBody: GetCommandInvocationRequest): Observable<GetCommandInvocationResult> {
			return this.http.post<GetCommandInvocationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetCommandInvocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the Session Manager connection status for an instance to determine whether it is running and ready to receive Session Manager connections.
		 * Post #X-Amz-Target=AmazonSSM.GetConnectionStatus
		 * @return {GetConnectionStatusResponse} Success
		 */
		GetConnectionStatus(requestBody: GetConnectionStatusRequest): Observable<GetConnectionStatusResponse> {
			return this.http.post<GetConnectionStatusResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetConnectionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you do not specify an operating system value, the default patch baseline for Windows is returned.</p>
		 * Post #X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline
		 * @return {GetDefaultPatchBaselineResult} Success
		 */
		GetDefaultPatchBaseline(requestBody: GetDefaultPatchBaselineRequest): Observable<GetDefaultPatchBaselineResult> {
			return this.http.post<GetDefaultPatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current snapshot for the patch baseline the instance uses. This API is primarily used by the AWS-RunPatchBaseline Systems Manager document.
		 * Post #X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance
		 * @return {GetDeployablePatchSnapshotForInstanceResult} Success
		 */
		GetDeployablePatchSnapshotForInstance(requestBody: GetDeployablePatchSnapshotForInstanceRequest): Observable<GetDeployablePatchSnapshotForInstanceResult> {
			return this.http.post<GetDeployablePatchSnapshotForInstanceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the contents of the specified Systems Manager document.
		 * Post #X-Amz-Target=AmazonSSM.GetDocument
		 * @return {GetDocumentResult} Success
		 */
		GetDocument(requestBody: GetDocumentRequest): Observable<GetDocumentResult> {
			return this.http.post<GetDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query inventory information.
		 * Post #X-Amz-Target=AmazonSSM.GetInventory
		 * @return {GetInventoryResult} Success
		 */
		GetInventory(requestBody: GetInventoryRequest): Observable<GetInventoryResult> {
			return this.http.post<GetInventoryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetInventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.
		 * Post #X-Amz-Target=AmazonSSM.GetInventorySchema
		 * @return {GetInventorySchemaResult} Success
		 */
		GetInventorySchema(requestBody: GetInventorySchemaRequest): Observable<GetInventorySchemaResult> {
			return this.http.post<GetInventorySchemaResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetInventorySchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Lists the tasks in a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask
		 * @return {GetMaintenanceWindowTaskResult} Success
		 */
		GetMaintenanceWindowTask(requestBody: GetMaintenanceWindowTaskRequest): Observable<GetMaintenanceWindowTaskResult> {
			return this.http.post<GetMaintenanceWindowTaskResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get information about an OpsItem by using the ID. You must have permission in AWS Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.GetOpsItem
		 * @return {GetOpsItemResponse} Success
		 */
		GetOpsItem(requestBody: GetOpsItemRequest): Observable<GetOpsItemResponse> {
			return this.http.post<GetOpsItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetOpsItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View a summary of OpsItems based on specified filters and aggregators.
		 * Post #X-Amz-Target=AmazonSSM.GetOpsSummary
		 * @return {GetOpsSummaryResult} Success
		 */
		GetOpsSummary(requestBody: GetOpsSummaryRequest): Observable<GetOpsSummaryResult> {
			return this.http.post<GetOpsSummaryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetOpsSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get information about a parameter by using the parameter name. Don't confuse this API action with the <a>GetParameters</a> API action.
		 * Post #X-Amz-Target=AmazonSSM.GetParameter
		 * @return {GetParameterResult} Success
		 */
		GetParameter(requestBody: GetParameterRequest): Observable<GetParameterResult> {
			return this.http.post<GetParameterResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query a list of all parameters used by the AWS account.
		 * Post #X-Amz-Target=AmazonSSM.GetParameterHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetParameterHistoryResult} Success
		 */
		GetParameterHistory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetParameterHistoryRequest): Observable<GetParameterHistoryResult> {
			return this.http.post<GetParameterHistoryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParameterHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get details of a parameter. Don't confuse this API action with the <a>GetParameter</a> API action.
		 * Post #X-Amz-Target=AmazonSSM.GetParameters
		 * @return {GetParametersResult} Success
		 */
		GetParameters(requestBody: GetParametersRequest): Observable<GetParametersResult> {
			return this.http.post<GetParametersResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieve information about one or more parameters in a specific hierarchy. </p> <note> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> </note>
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
		 * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> <p>Query the current service setting for the account. </p>
		 * Post #X-Amz-Target=AmazonSSM.GetServiceSetting
		 * @return {GetServiceSettingResult} Success
		 */
		GetServiceSetting(requestBody: GetServiceSettingRequest): Observable<GetServiceSettingResult> {
			return this.http.post<GetServiceSettingResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetServiceSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>You can't delete a parameter label. If you no longer want to use a parameter label, then you must move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "aws," or "ssm" (not case sensitive). If a label fails to meet these requirements, then the label is not associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonSSM.LabelParameterVersion
		 * @return {LabelParameterVersionResult} Success
		 */
		LabelParameterVersion(requestBody: LabelParameterVersionRequest): Observable<LabelParameterVersionResult> {
			return this.http.post<LabelParameterVersionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.LabelParameterVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all versions of an association for a specific association ID.
		 * Post #X-Amz-Target=AmazonSSM.ListAssociationVersions
		 * @return {ListAssociationVersionsResult} Success
		 */
		ListAssociationVersions(requestBody: ListAssociationVersionsRequest): Observable<ListAssociationVersionsResult> {
			return this.http.post<ListAssociationVersionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListAssociationVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all State Manager associations in the current AWS account and Region. You can limit the results to a specific State Manager association document or instance by specifying a filter.
		 * Post #X-Amz-Target=AmazonSSM.ListAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAssociationsResult} Success
		 */
		ListAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAssociationsRequest): Observable<ListAssociationsResult> {
			return this.http.post<ListAssociationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. ListCommandInvocations provide status about command execution.
		 * Post #X-Amz-Target=AmazonSSM.ListCommandInvocations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCommandInvocationsResult} Success
		 */
		ListCommandInvocations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCommandInvocationsRequest): Observable<ListCommandInvocationsResult> {
			return this.http.post<ListCommandInvocationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListCommandInvocations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the commands requested by users of the AWS account.
		 * Post #X-Amz-Target=AmazonSSM.ListCommands
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCommandsResult} Success
		 */
		ListCommands(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCommandsRequest): Observable<ListCommandsResult> {
			return this.http.post<ListCommandsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListCommands?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For a specified resource ID, this API action returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.
		 * Post #X-Amz-Target=AmazonSSM.ListComplianceItems
		 * @return {ListComplianceItemsResult} Success
		 */
		ListComplianceItems(requestBody: ListComplianceItemsRequest): Observable<ListComplianceItemsResult> {
			return this.http.post<ListComplianceItemsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListComplianceItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.
		 * Post #X-Amz-Target=AmazonSSM.ListComplianceSummaries
		 * @return {ListComplianceSummariesResult} Success
		 */
		ListComplianceSummaries(requestBody: ListComplianceSummariesRequest): Observable<ListComplianceSummariesResult> {
			return this.http.post<ListComplianceSummariesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListComplianceSummaries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all versions for a document.
		 * Post #X-Amz-Target=AmazonSSM.ListDocumentVersions
		 * @return {ListDocumentVersionsResult} Success
		 */
		ListDocumentVersions(requestBody: ListDocumentVersionsRequest): Observable<ListDocumentVersionsResult> {
			return this.http.post<ListDocumentVersionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListDocumentVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all Systems Manager (SSM) documents in the current AWS account and Region. You can limit the results of this request by using a filter.
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
		 * Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.
		 * Post #X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries
		 * @return {ListResourceComplianceSummariesResult} Success
		 */
		ListResourceComplianceSummaries(requestBody: ListResourceComplianceSummariesRequest): Observable<ListResourceComplianceSummariesResult> {
			return this.http.post<ListResourceComplianceSummariesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>
		 * Post #X-Amz-Target=AmazonSSM.ListResourceDataSync
		 * @return {ListResourceDataSyncResult} Success
		 */
		ListResourceDataSync(requestBody: ListResourceDataSyncRequest): Observable<ListResourceDataSyncResult> {
			return this.http.post<ListResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the tags assigned to the specified resource.
		 * Post #X-Amz-Target=AmazonSSM.ListTagsForResource
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Shares a Systems Manager document publicly or privately. If you share a document privately, you must specify the AWS user account IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.
		 * Post #X-Amz-Target=AmazonSSM.ModifyDocumentPermission
		 * @return {ModifyDocumentPermissionResponse} Success
		 */
		ModifyDocumentPermission(requestBody: ModifyDocumentPermissionRequest): Observable<ModifyDocumentPermissionResponse> {
			return this.http.post<ModifyDocumentPermissionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.ModifyDocumentPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a compliance type and other compliance details on a designated resource. This action lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the instance.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>critical</code>.</p> </li> <li> <p>DocumentName: A SSM document name. For example, AWS-RunPatchBaseline.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonSSM.PutComplianceItems
		 * @return {PutComplianceItemsResult} Success
		 */
		PutComplianceItems(requestBody: PutComplianceItemsRequest): Observable<PutComplianceItemsResult> {
			return this.http.post<PutComplianceItemsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.PutComplianceItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Bulk update custom inventory items on one more instance. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
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
		 * <p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the AWS predefined patch baseline as the default, specify the full patch baseline ARN as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>
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
		 * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API action to view the current value. Use the <a>UpdateServiceSetting</a> API action to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the AWS service team. </p>
		 * Post #X-Amz-Target=AmazonSSM.ResetServiceSetting
		 * @return {ResetServiceSettingResult} Success
		 */
		ResetServiceSetting(requestBody: ResetServiceSettingRequest): Observable<ResetServiceSettingResult> {
			return this.http.post<ResetServiceSettingResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ResetServiceSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reconnects a session to an instance after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It is not intended for any other use.</p> </note>
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
		 * Runs commands on one or more managed instances.
		 * Post #X-Amz-Target=AmazonSSM.SendCommand
		 * @return {SendCommandResult} Success
		 */
		SendCommand(requestBody: SendCommandRequest): Observable<SendCommandResult> {
			return this.http.post<SendCommandResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.SendCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this API action to run an association immediately and only one time. This action can be helpful when troubleshooting associations.
		 * Post #X-Amz-Target=AmazonSSM.StartAssociationsOnce
		 * @return {StartAssociationsOnceResult} Success
		 */
		StartAssociationsOnce(requestBody: StartAssociationsOnceRequest): Observable<StartAssociationsOnceResult> {
			return this.http.post<StartAssociationsOnceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.StartAssociationsOnce', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates execution of an Automation document.
		 * Post #X-Amz-Target=AmazonSSM.StartAutomationExecution
		 * @return {StartAutomationExecutionResult} Success
		 */
		StartAutomationExecution(requestBody: StartAutomationExecutionRequest): Observable<StartAutomationExecutionResult> {
			return this.http.post<StartAutomationExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.StartAutomationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>AWS CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install the Session Manager plugin for the AWS CLI</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>AWS Tools for PowerShell usage: Start-SSMSession is not currently supported by AWS Tools for PowerShell on Windows local machines.</p> </note>
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
		 * Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the instance. A terminated session cannot be resumed.
		 * Post #X-Amz-Target=AmazonSSM.TerminateSession
		 * @return {TerminateSessionResponse} Success
		 */
		TerminateSession(requestBody: TerminateSessionRequest): Observable<TerminateSessionResponse> {
			return this.http.post<TerminateSessionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.TerminateSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon S3 output. </p> <p>In order to call this API action, your IAM user account, group, or role must be configured with permission to call the <a>DescribeAssociation</a> API action. If you don't have permission to call DescribeAssociation, then you receive the following error: <code>An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; is not authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;</code> </p> <important> <p>When you update an association, the association immediately runs against the specified targets.</p> </important>
		 * Post #X-Amz-Target=AmazonSSM.UpdateAssociation
		 * @return {UpdateAssociationResult} Success
		 */
		UpdateAssociation(requestBody: UpdateAssociationRequest): Observable<UpdateAssociationResult> {
			return this.http.post<UpdateAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the status of the Systems Manager document associated with the specified instance.
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
		 * Set the default version of a document.
		 * Post #X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion
		 * @return {UpdateDocumentDefaultVersionResult} Success
		 */
		UpdateDocumentDefaultVersion(requestBody: UpdateDocumentDefaultVersionRequest): Observable<UpdateDocumentDefaultVersionResult> {
			return this.http.post<UpdateDocumentDefaultVersionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field is not modified.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget
		 * @return {UpdateMaintenanceWindowTargetResult} Success
		 */
		UpdateMaintenanceWindowTarget(requestBody: UpdateMaintenanceWindowTargetRequest): Observable<UpdateMaintenanceWindowTargetResult> {
			return this.http.post<UpdateMaintenanceWindowTargetResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p>TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to AWS-RunShellScript.</p> </li> <li> <p>ServiceRoleArn</p> </li> <li> <p>TaskInvocationParameters</p> </li> <li> <p>Priority</p> </li> <li> <p>MaxConcurrency</p> </li> <li> <p>MaxErrors</p> </li> </ul> <p>If a parameter is null, then the corresponding field is not modified. Also, if you set Replace to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> action are required for this request. Optional fields that aren't specified are set to null.</p>
		 * Post #X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask
		 * @return {UpdateMaintenanceWindowTaskResult} Success
		 */
		UpdateMaintenanceWindowTask(requestBody: UpdateMaintenanceWindowTaskRequest): Observable<UpdateMaintenanceWindowTaskResult> {
			return this.http.post<UpdateMaintenanceWindowTaskResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the Amazon Identity and Access Management (IAM) role that is assigned to the on-premises instance or virtual machines (VM). IAM roles are first assigned to these hybrid instances during the activation process. For more information, see <a>CreateActivation</a>.
		 * Post #X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole
		 * @return {UpdateManagedInstanceRoleResult} Success
		 */
		UpdateManagedInstanceRole(requestBody: UpdateManagedInstanceRoleRequest): Observable<UpdateManagedInstanceRoleResult> {
			return this.http.post<UpdateManagedInstanceRoleResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Edit or change an OpsItem. You must have permission in AWS Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.UpdateOpsItem
		 * @return {UpdateOpsItemResponse} Success
		 */
		UpdateOpsItem(requestBody: UpdateOpsItemRequest): Observable<UpdateOpsItemResponse> {
			return this.http.post<UpdateOpsItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateOpsItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key and value pairs in <code>PatchFilters</code> for each supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdatePatchBaseline
		 * @return {UpdatePatchBaselineResult} Success
		 */
		UpdatePatchBaseline(requestBody: UpdatePatchBaselineRequest): Observable<UpdatePatchBaselineResult> {
			return this.http.post<UpdatePatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdatePatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the Include only the current account option, you can't edit that sync later and choose the Include all accounts from my AWS Organizations configuration option. Instead, you must delete the first resource data sync, and create a new one.</p> <note> <p>This API action only supports a resource data sync that was created with a SyncFromSource <code>SyncType</code>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdateResourceDataSync
		 * @return {UpdateResourceDataSyncResult} Success
		 */
		UpdateResourceDataSync(requestBody: UpdateResourceDataSyncRequest): Observable<UpdateResourceDataSyncResult> {
			return this.http.post<UpdateResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API action to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> <p>Update the service setting for the account. </p>
		 * Post #X-Amz-Target=AmazonSSM.UpdateServiceSetting
		 * @return {UpdateServiceSettingResult} Success
		 */
		UpdateServiceSetting(requestBody: UpdateServiceSettingRequest): Observable<UpdateServiceSettingResult> {
			return this.http.post<UpdateServiceSettingResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateServiceSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsToResourceX_Amz_Target { 'AmazonSSM.AddTagsToResource' = 0 }

	export enum CancelCommandX_Amz_Target { 'AmazonSSM.CancelCommand' = 0 }

	export enum CancelMaintenanceWindowExecutionX_Amz_Target { 'AmazonSSM.CancelMaintenanceWindowExecution' = 0 }

	export enum CreateActivationX_Amz_Target { 'AmazonSSM.CreateActivation' = 0 }

	export enum CreateAssociationX_Amz_Target { 'AmazonSSM.CreateAssociation' = 0 }

	export enum CreateAssociationBatchX_Amz_Target { 'AmazonSSM.CreateAssociationBatch' = 0 }

	export enum CreateDocumentX_Amz_Target { 'AmazonSSM.CreateDocument' = 0 }

	export enum CreateMaintenanceWindowX_Amz_Target { 'AmazonSSM.CreateMaintenanceWindow' = 0 }

	export enum CreateOpsItemX_Amz_Target { 'AmazonSSM.CreateOpsItem' = 0 }

	export enum CreatePatchBaselineX_Amz_Target { 'AmazonSSM.CreatePatchBaseline' = 0 }

	export enum CreateResourceDataSyncX_Amz_Target { 'AmazonSSM.CreateResourceDataSync' = 0 }

	export enum DeleteActivationX_Amz_Target { 'AmazonSSM.DeleteActivation' = 0 }

	export enum DeleteAssociationX_Amz_Target { 'AmazonSSM.DeleteAssociation' = 0 }

	export enum DeleteDocumentX_Amz_Target { 'AmazonSSM.DeleteDocument' = 0 }

	export enum DeleteInventoryX_Amz_Target { 'AmazonSSM.DeleteInventory' = 0 }

	export enum DeleteMaintenanceWindowX_Amz_Target { 'AmazonSSM.DeleteMaintenanceWindow' = 0 }

	export enum DeleteParameterX_Amz_Target { 'AmazonSSM.DeleteParameter' = 0 }

	export enum DeleteParametersX_Amz_Target { 'AmazonSSM.DeleteParameters' = 0 }

	export enum DeletePatchBaselineX_Amz_Target { 'AmazonSSM.DeletePatchBaseline' = 0 }

	export enum DeleteResourceDataSyncX_Amz_Target { 'AmazonSSM.DeleteResourceDataSync' = 0 }

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

	export enum GetOpsSummaryX_Amz_Target { 'AmazonSSM.GetOpsSummary' = 0 }

	export enum GetParameterX_Amz_Target { 'AmazonSSM.GetParameter' = 0 }

	export enum GetParameterHistoryX_Amz_Target { 'AmazonSSM.GetParameterHistory' = 0 }

	export enum GetParametersX_Amz_Target { 'AmazonSSM.GetParameters' = 0 }

	export enum GetParametersByPathX_Amz_Target { 'AmazonSSM.GetParametersByPath' = 0 }

	export enum GetPatchBaselineX_Amz_Target { 'AmazonSSM.GetPatchBaseline' = 0 }

	export enum GetPatchBaselineForPatchGroupX_Amz_Target { 'AmazonSSM.GetPatchBaselineForPatchGroup' = 0 }

	export enum GetServiceSettingX_Amz_Target { 'AmazonSSM.GetServiceSetting' = 0 }

	export enum LabelParameterVersionX_Amz_Target { 'AmazonSSM.LabelParameterVersion' = 0 }

	export enum ListAssociationVersionsX_Amz_Target { 'AmazonSSM.ListAssociationVersions' = 0 }

	export enum ListAssociationsX_Amz_Target { 'AmazonSSM.ListAssociations' = 0 }

	export enum ListCommandInvocationsX_Amz_Target { 'AmazonSSM.ListCommandInvocations' = 0 }

	export enum ListCommandsX_Amz_Target { 'AmazonSSM.ListCommands' = 0 }

	export enum ListComplianceItemsX_Amz_Target { 'AmazonSSM.ListComplianceItems' = 0 }

	export enum ListComplianceSummariesX_Amz_Target { 'AmazonSSM.ListComplianceSummaries' = 0 }

	export enum ListDocumentVersionsX_Amz_Target { 'AmazonSSM.ListDocumentVersions' = 0 }

	export enum ListDocumentsX_Amz_Target { 'AmazonSSM.ListDocuments' = 0 }

	export enum ListInventoryEntriesX_Amz_Target { 'AmazonSSM.ListInventoryEntries' = 0 }

	export enum ListResourceComplianceSummariesX_Amz_Target { 'AmazonSSM.ListResourceComplianceSummaries' = 0 }

	export enum ListResourceDataSyncX_Amz_Target { 'AmazonSSM.ListResourceDataSync' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AmazonSSM.ListTagsForResource' = 0 }

	export enum ModifyDocumentPermissionX_Amz_Target { 'AmazonSSM.ModifyDocumentPermission' = 0 }

	export enum PutComplianceItemsX_Amz_Target { 'AmazonSSM.PutComplianceItems' = 0 }

	export enum PutInventoryX_Amz_Target { 'AmazonSSM.PutInventory' = 0 }

	export enum PutParameterX_Amz_Target { 'AmazonSSM.PutParameter' = 0 }

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

	export enum StartSessionX_Amz_Target { 'AmazonSSM.StartSession' = 0 }

	export enum StopAutomationExecutionX_Amz_Target { 'AmazonSSM.StopAutomationExecution' = 0 }

	export enum TerminateSessionX_Amz_Target { 'AmazonSSM.TerminateSession' = 0 }

	export enum UpdateAssociationX_Amz_Target { 'AmazonSSM.UpdateAssociation' = 0 }

	export enum UpdateAssociationStatusX_Amz_Target { 'AmazonSSM.UpdateAssociationStatus' = 0 }

	export enum UpdateDocumentX_Amz_Target { 'AmazonSSM.UpdateDocument' = 0 }

	export enum UpdateDocumentDefaultVersionX_Amz_Target { 'AmazonSSM.UpdateDocumentDefaultVersion' = 0 }

	export enum UpdateMaintenanceWindowX_Amz_Target { 'AmazonSSM.UpdateMaintenanceWindow' = 0 }

	export enum UpdateMaintenanceWindowTargetX_Amz_Target { 'AmazonSSM.UpdateMaintenanceWindowTarget' = 0 }

	export enum UpdateMaintenanceWindowTaskX_Amz_Target { 'AmazonSSM.UpdateMaintenanceWindowTask' = 0 }

	export enum UpdateManagedInstanceRoleX_Amz_Target { 'AmazonSSM.UpdateManagedInstanceRole' = 0 }

	export enum UpdateOpsItemX_Amz_Target { 'AmazonSSM.UpdateOpsItem' = 0 }

	export enum UpdatePatchBaselineX_Amz_Target { 'AmazonSSM.UpdatePatchBaseline' = 0 }

	export enum UpdateResourceDataSyncX_Amz_Target { 'AmazonSSM.UpdateResourceDataSync' = 0 }

	export enum UpdateServiceSettingX_Amz_Target { 'AmazonSSM.UpdateServiceSetting' = 0 }

}

