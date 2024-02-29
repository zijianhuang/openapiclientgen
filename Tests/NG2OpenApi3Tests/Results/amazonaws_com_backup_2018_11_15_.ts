import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelLegalHoldOutput {
	}
	export interface CancelLegalHoldOutputFormProperties {
	}
	export function CreateCancelLegalHoldOutputFormGroup() {
		return new FormGroup<CancelLegalHoldOutputFormProperties>({
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

	export interface InvalidResourceStateException {
	}
	export interface InvalidResourceStateExceptionFormProperties {
	}
	export function CreateInvalidResourceStateExceptionFormGroup() {
		return new FormGroup<InvalidResourceStateExceptionFormProperties>({
		});

	}

	export interface MissingParameterValueException {
	}
	export interface MissingParameterValueExceptionFormProperties {
	}
	export function CreateMissingParameterValueExceptionFormGroup() {
		return new FormGroup<MissingParameterValueExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
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

	export interface CreateBackupPlanOutput {
		BackupPlanId?: string;
		BackupPlanArn?: string;
		CreationDate?: Date;
		VersionId?: string;
		AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
	}
	export interface CreateBackupPlanOutputFormProperties {
		BackupPlanId: FormControl<string | null | undefined>,
		BackupPlanArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupPlanOutputFormGroup() {
		return new FormGroup<CreateBackupPlanOutputFormProperties>({
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			BackupPlanArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of backup options for each resource type. */
	export interface AdvancedBackupSetting {
		ResourceType?: string;
		BackupOptions?: BackupOptions;
	}

	/** A list of backup options for each resource type. */
	export interface AdvancedBackupSettingFormProperties {
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateAdvancedBackupSettingFormGroup() {
		return new FormGroup<AdvancedBackupSettingFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BackupOptions {
	}
	export interface BackupOptionsFormProperties {
	}
	export function CreateBackupOptionsFormGroup() {
		return new FormGroup<BackupOptionsFormProperties>({
		});

	}


	/** Specifies a scheduled task used to back up a selection of resources. */
	export interface BackupRuleInput {

		/** Required */
		RuleName: string;

		/** Required */
		TargetBackupVaultName: string;
		ScheduleExpression?: string;
		StartWindowMinutes?: number | null;
		CompletionWindowMinutes?: number | null;
		Lifecycle?: Lifecycle;
		RecoveryPointTags?: Tags;
		CopyActions?: Array<CopyAction>;
		EnableContinuousBackup?: boolean | null;
	}

	/** Specifies a scheduled task used to back up a selection of resources. */
	export interface BackupRuleInputFormProperties {

		/** Required */
		RuleName: FormControl<string | null | undefined>,

		/** Required */
		TargetBackupVaultName: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		StartWindowMinutes: FormControl<number | null | undefined>,
		CompletionWindowMinutes: FormControl<number | null | undefined>,
		EnableContinuousBackup: FormControl<boolean | null | undefined>,
	}
	export function CreateBackupRuleInputFormGroup() {
		return new FormGroup<BackupRuleInputFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetBackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			StartWindowMinutes: new FormControl<number | null | undefined>(undefined),
			CompletionWindowMinutes: new FormControl<number | null | undefined>(undefined),
			EnableContinuousBackup: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> */
	export interface Lifecycle {
		MoveToColdStorageAfterDays?: number | null;
		DeleteAfterDays?: number | null;
	}

	/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> */
	export interface LifecycleFormProperties {
		MoveToColdStorageAfterDays: FormControl<number | null | undefined>,
		DeleteAfterDays: FormControl<number | null | undefined>,
	}
	export function CreateLifecycleFormGroup() {
		return new FormGroup<LifecycleFormProperties>({
			MoveToColdStorageAfterDays: new FormControl<number | null | undefined>(undefined),
			DeleteAfterDays: new FormControl<number | null | undefined>(undefined),
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


	/** The details of the copy operation. */
	export interface CopyAction {

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> */
		Lifecycle?: Lifecycle;

		/** Required */
		DestinationBackupVaultArn: string;
	}

	/** The details of the copy operation. */
	export interface CopyActionFormProperties {

		/** Required */
		DestinationBackupVaultArn: FormControl<string | null | undefined>,
	}
	export function CreateCopyActionFormGroup() {
		return new FormGroup<CopyActionFormProperties>({
			DestinationBackupVaultArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateBackupSelectionOutput {
		SelectionId?: string;
		BackupPlanId?: string;
		CreationDate?: Date;
	}
	export interface CreateBackupSelectionOutputFormProperties {
		SelectionId: FormControl<string | null | undefined>,
		BackupPlanId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateBackupSelectionOutputFormGroup() {
		return new FormGroup<CreateBackupSelectionOutputFormProperties>({
			SelectionId: new FormControl<string | null | undefined>(undefined),
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains an array of triplets made up of a condition type (such as <code>StringEquals</code>), a key, and a value. Used to filter resources using their tags and assign them to a backup plan. Case sensitive. */
	export interface Condition {

		/** Required */
		ConditionType: ConditionType;

		/** Required */
		ConditionKey: string;

		/** Required */
		ConditionValue: string;
	}

	/** Contains an array of triplets made up of a condition type (such as <code>StringEquals</code>), a key, and a value. Used to filter resources using their tags and assign them to a backup plan. Case sensitive. */
	export interface ConditionFormProperties {

		/** Required */
		ConditionType: FormControl<ConditionType | null | undefined>,

		/** Required */
		ConditionKey: FormControl<string | null | undefined>,

		/** Required */
		ConditionValue: FormControl<string | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			ConditionType: new FormControl<ConditionType | null | undefined>(undefined, [Validators.required]),
			ConditionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConditionValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConditionType { STRINGEQUALS = 'STRINGEQUALS' }


	/** Contains information about which resources to include or exclude from a backup plan using their tags. Conditions are case sensitive. */
	export interface Conditions {
		StringEquals?: Array<ConditionParameter>;
		StringNotEquals?: Array<ConditionParameter>;
		StringLike?: Array<ConditionParameter>;
		StringNotLike?: Array<ConditionParameter>;
	}

	/** Contains information about which resources to include or exclude from a backup plan using their tags. Conditions are case sensitive. */
	export interface ConditionsFormProperties {
	}
	export function CreateConditionsFormGroup() {
		return new FormGroup<ConditionsFormProperties>({
		});

	}


	/** Includes information about tags you define to assign tagged resources to a backup plan. */
	export interface ConditionParameter {
		ConditionKey?: string;
		ConditionValue?: string;
	}

	/** Includes information about tags you define to assign tagged resources to a backup plan. */
	export interface ConditionParameterFormProperties {
		ConditionKey: FormControl<string | null | undefined>,
		ConditionValue: FormControl<string | null | undefined>,
	}
	export function CreateConditionParameterFormGroup() {
		return new FormGroup<ConditionParameterFormProperties>({
			ConditionKey: new FormControl<string | null | undefined>(undefined),
			ConditionValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackupVaultOutput {
		BackupVaultName?: string;
		BackupVaultArn?: string;
		CreationDate?: Date;
	}
	export interface CreateBackupVaultOutputFormProperties {
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateBackupVaultOutputFormGroup() {
		return new FormGroup<CreateBackupVaultOutputFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateFrameworkOutput {
		FrameworkName?: string;
		FrameworkArn?: string;
	}
	export interface CreateFrameworkOutputFormProperties {
		FrameworkName: FormControl<string | null | undefined>,
		FrameworkArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFrameworkOutputFormGroup() {
		return new FormGroup<CreateFrameworkOutputFormProperties>({
			FrameworkName: new FormControl<string | null | undefined>(undefined),
			FrameworkArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains detailed information about all of the controls of a framework. Each framework must contain at least one control. */
	export interface FrameworkControl {

		/** Required */
		ControlName: string;
		ControlInputParameters?: Array<ControlInputParameter>;
		ControlScope?: ControlScope;
	}

	/** Contains detailed information about all of the controls of a framework. Each framework must contain at least one control. */
	export interface FrameworkControlFormProperties {

		/** Required */
		ControlName: FormControl<string | null | undefined>,
	}
	export function CreateFrameworkControlFormGroup() {
		return new FormGroup<FrameworkControlFormProperties>({
			ControlName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of parameters for a control. A control can have zero, one, or more than one parameter. An example of a control with two parameters is: "backup plan frequency is at least <code>daily</code> and the retention period is at least <code>1 year</code>". The first parameter is <code>daily</code>. The second parameter is <code>1 year</code>. */
	export interface ControlInputParameter {
		ParameterName?: string;
		ParameterValue?: string;
	}

	/** A list of parameters for a control. A control can have zero, one, or more than one parameter. An example of a control with two parameters is: "backup plan frequency is at least <code>daily</code> and the retention period is at least <code>1 year</code>". The first parameter is <code>daily</code>. The second parameter is <code>1 year</code>. */
	export interface ControlInputParameterFormProperties {
		ParameterName: FormControl<string | null | undefined>,
		ParameterValue: FormControl<string | null | undefined>,
	}
	export function CreateControlInputParameterFormGroup() {
		return new FormGroup<ControlInputParameterFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined),
			ParameterValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A framework consists of one or more controls. Each control has its own control scope. The control scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. If no scope is specified, evaluations for the rule are triggered when any resource in your recording group changes in configuration.</p> <note> <p>To set a control scope that includes all of a particular resource, leave the <code>ControlScope</code> empty or do not pass it when calling <code>CreateFramework</code>.</p> </note> */
	export interface ControlScope {
		ComplianceResourceIds?: Array<string>;
		ComplianceResourceTypes?: Array<string>;
		Tags?: StringMap;
	}

	/** <p>A framework consists of one or more controls. Each control has its own control scope. The control scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. If no scope is specified, evaluations for the rule are triggered when any resource in your recording group changes in configuration.</p> <note> <p>To set a control scope that includes all of a particular resource, leave the <code>ControlScope</code> empty or do not pass it when calling <code>CreateFramework</code>.</p> </note> */
	export interface ControlScopeFormProperties {
	}
	export function CreateControlScopeFormGroup() {
		return new FormGroup<ControlScopeFormProperties>({
		});

	}

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}

	export interface CreateLegalHoldOutput {
		Title?: string;
		Status?: LegalHoldStatus;
		Description?: string;
		LegalHoldId?: string;
		LegalHoldArn?: string;
		CreationDate?: Date;
		RecoveryPointSelection?: RecoveryPointSelection;
	}
	export interface CreateLegalHoldOutputFormProperties {
		Title: FormControl<string | null | undefined>,
		Status: FormControl<LegalHoldStatus | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LegalHoldId: FormControl<string | null | undefined>,
		LegalHoldArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateLegalHoldOutputFormGroup() {
		return new FormGroup<CreateLegalHoldOutputFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LegalHoldStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LegalHoldId: new FormControl<string | null | undefined>(undefined),
			LegalHoldArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum LegalHoldStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', CANCELING = 'CANCELING', CANCELED = 'CANCELED' }


	/** This specifies criteria to assign a set of resources, such as resource types or backup vaults. */
	export interface RecoveryPointSelection {
		VaultNames?: Array<string>;
		ResourceIdentifiers?: Array<string>;

		/** <p>This is a resource filter containing FromDate: DateTime and ToDate: DateTime. Both values are required. Future DateTime values are not permitted.</p> <p>The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds ((milliseconds are optional). For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p> */
		DateRange?: DateRange;
	}

	/** This specifies criteria to assign a set of resources, such as resource types or backup vaults. */
	export interface RecoveryPointSelectionFormProperties {
	}
	export function CreateRecoveryPointSelectionFormGroup() {
		return new FormGroup<RecoveryPointSelectionFormProperties>({
		});

	}


	/** <p>This is a resource filter containing FromDate: DateTime and ToDate: DateTime. Both values are required. Future DateTime values are not permitted.</p> <p>The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds ((milliseconds are optional). For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p> */
	export interface DateRange {

		/** Required */
		FromDate: Date;

		/** Required */
		ToDate: Date;
	}

	/** <p>This is a resource filter containing FromDate: DateTime and ToDate: DateTime. Both values are required. Future DateTime values are not permitted.</p> <p>The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds ((milliseconds are optional). For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p> */
	export interface DateRangeFormProperties {

		/** Required */
		FromDate: FormControl<Date | null | undefined>,

		/** Required */
		ToDate: FormControl<Date | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			FromDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ToDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReportPlanOutput {
		ReportPlanName?: string;
		ReportPlanArn?: string;
		CreationTime?: Date;
	}
	export interface CreateReportPlanOutputFormProperties {
		ReportPlanName: FormControl<string | null | undefined>,
		ReportPlanArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateReportPlanOutputFormGroup() {
		return new FormGroup<CreateReportPlanOutputFormProperties>({
			ReportPlanName: new FormControl<string | null | undefined>(undefined),
			ReportPlanArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteBackupPlanOutput {
		BackupPlanId?: string;
		BackupPlanArn?: string;
		DeletionDate?: Date;
		VersionId?: string;
	}
	export interface DeleteBackupPlanOutputFormProperties {
		BackupPlanId: FormControl<string | null | undefined>,
		BackupPlanArn: FormControl<string | null | undefined>,
		DeletionDate: FormControl<Date | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackupPlanOutputFormGroup() {
		return new FormGroup<DeleteBackupPlanOutputFormProperties>({
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			BackupPlanArn: new FormControl<string | null | undefined>(undefined),
			DeletionDate: new FormControl<Date | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
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

	export interface DescribeBackupJobOutput {
		AccountId?: string;
		BackupJobId?: string;
		BackupVaultName?: string;
		BackupVaultArn?: string;
		RecoveryPointArn?: string;
		ResourceArn?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		State?: BackupJobState;
		StatusMessage?: string;
		PercentDone?: string;
		BackupSizeInBytes?: number | null;
		IamRoleArn?: string;
		CreatedBy?: RecoveryPointCreator;
		ResourceType?: string;
		BytesTransferred?: number | null;
		ExpectedCompletionDate?: Date;
		StartBy?: Date;
		BackupOptions?: BackupOptions;
		BackupType?: string;
		ParentJobId?: string;
		IsParent?: boolean | null;
		NumberOfChildJobs?: number | null;
		ChildJobsInState?: BackupJobChildJobsInState;
		ResourceName?: string;
	}
	export interface DescribeBackupJobOutputFormProperties {
		AccountId: FormControl<string | null | undefined>,
		BackupJobId: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		State: FormControl<BackupJobState | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		PercentDone: FormControl<string | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		BytesTransferred: FormControl<number | null | undefined>,
		ExpectedCompletionDate: FormControl<Date | null | undefined>,
		StartBy: FormControl<Date | null | undefined>,
		BackupType: FormControl<string | null | undefined>,
		ParentJobId: FormControl<string | null | undefined>,
		IsParent: FormControl<boolean | null | undefined>,
		NumberOfChildJobs: FormControl<number | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBackupJobOutputFormGroup() {
		return new FormGroup<DescribeBackupJobOutputFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			BackupJobId: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<BackupJobState | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			PercentDone: new FormControl<string | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			BytesTransferred: new FormControl<number | null | undefined>(undefined),
			ExpectedCompletionDate: new FormControl<Date | null | undefined>(undefined),
			StartBy: new FormControl<Date | null | undefined>(undefined),
			BackupType: new FormControl<string | null | undefined>(undefined),
			ParentJobId: new FormControl<string | null | undefined>(undefined),
			IsParent: new FormControl<boolean | null | undefined>(undefined),
			NumberOfChildJobs: new FormControl<number | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupJobState { CREATED = 'CREATED', PENDING = 'PENDING', RUNNING = 'RUNNING', ABORTING = 'ABORTING', ABORTED = 'ABORTED', COMPLETED = 'COMPLETED', FAILED = 'FAILED', EXPIRED = 'EXPIRED', PARTIAL = 'PARTIAL' }


	/** Contains information about the backup plan and rule that Backup used to initiate the recovery point backup. */
	export interface RecoveryPointCreator {
		BackupPlanId?: string;
		BackupPlanArn?: string;
		BackupPlanVersion?: string;
		BackupRuleId?: string;
	}

	/** Contains information about the backup plan and rule that Backup used to initiate the recovery point backup. */
	export interface RecoveryPointCreatorFormProperties {
		BackupPlanId: FormControl<string | null | undefined>,
		BackupPlanArn: FormControl<string | null | undefined>,
		BackupPlanVersion: FormControl<string | null | undefined>,
		BackupRuleId: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryPointCreatorFormGroup() {
		return new FormGroup<RecoveryPointCreatorFormProperties>({
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			BackupPlanArn: new FormControl<string | null | undefined>(undefined),
			BackupPlanVersion: new FormControl<string | null | undefined>(undefined),
			BackupRuleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BackupJobChildJobsInState {
	}
	export interface BackupJobChildJobsInStateFormProperties {
	}
	export function CreateBackupJobChildJobsInStateFormGroup() {
		return new FormGroup<BackupJobChildJobsInStateFormProperties>({
		});

	}

	export interface DependencyFailureException {
	}
	export interface DependencyFailureExceptionFormProperties {
	}
	export function CreateDependencyFailureExceptionFormGroup() {
		return new FormGroup<DependencyFailureExceptionFormProperties>({
		});

	}

	export interface DescribeBackupVaultOutput {
		BackupVaultName?: string;
		BackupVaultArn?: string;
		EncryptionKeyArn?: string;
		CreationDate?: Date;
		CreatorRequestId?: string;
		NumberOfRecoveryPoints?: number | null;
		Locked?: boolean | null;
		MinRetentionDays?: number | null;
		MaxRetentionDays?: number | null;
		LockDate?: Date;
	}
	export interface DescribeBackupVaultOutputFormProperties {
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		NumberOfRecoveryPoints: FormControl<number | null | undefined>,
		Locked: FormControl<boolean | null | undefined>,
		MinRetentionDays: FormControl<number | null | undefined>,
		MaxRetentionDays: FormControl<number | null | undefined>,
		LockDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeBackupVaultOutputFormGroup() {
		return new FormGroup<DescribeBackupVaultOutputFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			NumberOfRecoveryPoints: new FormControl<number | null | undefined>(undefined),
			Locked: new FormControl<boolean | null | undefined>(undefined),
			MinRetentionDays: new FormControl<number | null | undefined>(undefined),
			MaxRetentionDays: new FormControl<number | null | undefined>(undefined),
			LockDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeCopyJobOutput {
		CopyJob?: CopyJob;
	}
	export interface DescribeCopyJobOutputFormProperties {
	}
	export function CreateDescribeCopyJobOutputFormGroup() {
		return new FormGroup<DescribeCopyJobOutputFormProperties>({
		});

	}


	/** Contains detailed information about a copy job. */
	export interface CopyJob {
		AccountId?: string;
		CopyJobId?: string;
		SourceBackupVaultArn?: string;
		SourceRecoveryPointArn?: string;
		DestinationBackupVaultArn?: string;
		DestinationRecoveryPointArn?: string;
		ResourceArn?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		State?: CopyJobState;
		StatusMessage?: string;
		BackupSizeInBytes?: number | null;
		IamRoleArn?: string;

		/** Contains information about the backup plan and rule that Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		ResourceType?: string;
		ParentJobId?: string;
		IsParent?: boolean | null;
		CompositeMemberIdentifier?: string;
		NumberOfChildJobs?: number | null;
		ChildJobsInState?: CopyJobChildJobsInState;
		ResourceName?: string;
	}

	/** Contains detailed information about a copy job. */
	export interface CopyJobFormProperties {
		AccountId: FormControl<string | null | undefined>,
		CopyJobId: FormControl<string | null | undefined>,
		SourceBackupVaultArn: FormControl<string | null | undefined>,
		SourceRecoveryPointArn: FormControl<string | null | undefined>,
		DestinationBackupVaultArn: FormControl<string | null | undefined>,
		DestinationRecoveryPointArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		State: FormControl<CopyJobState | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ParentJobId: FormControl<string | null | undefined>,
		IsParent: FormControl<boolean | null | undefined>,
		CompositeMemberIdentifier: FormControl<string | null | undefined>,
		NumberOfChildJobs: FormControl<number | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateCopyJobFormGroup() {
		return new FormGroup<CopyJobFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			CopyJobId: new FormControl<string | null | undefined>(undefined),
			SourceBackupVaultArn: new FormControl<string | null | undefined>(undefined),
			SourceRecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			DestinationBackupVaultArn: new FormControl<string | null | undefined>(undefined),
			DestinationRecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<CopyJobState | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ParentJobId: new FormControl<string | null | undefined>(undefined),
			IsParent: new FormControl<boolean | null | undefined>(undefined),
			CompositeMemberIdentifier: new FormControl<string | null | undefined>(undefined),
			NumberOfChildJobs: new FormControl<number | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CopyJobState { CREATED = 'CREATED', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', FAILED = 'FAILED', PARTIAL = 'PARTIAL' }

	export interface CopyJobChildJobsInState {
	}
	export interface CopyJobChildJobsInStateFormProperties {
	}
	export function CreateCopyJobChildJobsInStateFormGroup() {
		return new FormGroup<CopyJobChildJobsInStateFormProperties>({
		});

	}

	export interface DescribeFrameworkOutput {
		FrameworkName?: string;
		FrameworkArn?: string;
		FrameworkDescription?: string;
		FrameworkControls?: Array<FrameworkControl>;
		CreationTime?: Date;
		DeploymentStatus?: string;
		FrameworkStatus?: string;
		IdempotencyToken?: string;
	}
	export interface DescribeFrameworkOutputFormProperties {
		FrameworkName: FormControl<string | null | undefined>,
		FrameworkArn: FormControl<string | null | undefined>,
		FrameworkDescription: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		DeploymentStatus: FormControl<string | null | undefined>,
		FrameworkStatus: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFrameworkOutputFormGroup() {
		return new FormGroup<DescribeFrameworkOutputFormProperties>({
			FrameworkName: new FormControl<string | null | undefined>(undefined),
			FrameworkArn: new FormControl<string | null | undefined>(undefined),
			FrameworkDescription: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			DeploymentStatus: new FormControl<string | null | undefined>(undefined),
			FrameworkStatus: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeGlobalSettingsOutput {
		GlobalSettings?: GlobalSettings;
		LastUpdateTime?: Date;
	}
	export interface DescribeGlobalSettingsOutputFormProperties {
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeGlobalSettingsOutputFormGroup() {
		return new FormGroup<DescribeGlobalSettingsOutputFormProperties>({
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GlobalSettings {
	}
	export interface GlobalSettingsFormProperties {
	}
	export function CreateGlobalSettingsFormGroup() {
		return new FormGroup<GlobalSettingsFormProperties>({
		});

	}

	export interface DescribeProtectedResourceOutput {
		ResourceArn?: string;
		ResourceType?: string;
		LastBackupTime?: Date;
		ResourceName?: string;
	}
	export interface DescribeProtectedResourceOutputFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		LastBackupTime: FormControl<Date | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProtectedResourceOutputFormGroup() {
		return new FormGroup<DescribeProtectedResourceOutputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			LastBackupTime: new FormControl<Date | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRecoveryPointOutput {
		RecoveryPointArn?: string;
		BackupVaultName?: string;
		BackupVaultArn?: string;
		SourceBackupVaultArn?: string;
		ResourceArn?: string;
		ResourceType?: string;
		CreatedBy?: RecoveryPointCreator;
		IamRoleArn?: string;
		Status?: RecoveryPointStatus;
		StatusMessage?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		BackupSizeInBytes?: number | null;
		CalculatedLifecycle?: CalculatedLifecycle;
		Lifecycle?: Lifecycle;
		EncryptionKeyArn?: string;
		IsEncrypted?: boolean | null;
		StorageClass?: StorageClass;
		LastRestoreTime?: Date;
		ParentRecoveryPointArn?: string;
		CompositeMemberIdentifier?: string;
		IsParent?: boolean | null;
		ResourceName?: string;
	}
	export interface DescribeRecoveryPointOutputFormProperties {
		RecoveryPointArn: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		SourceBackupVaultArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		Status: FormControl<RecoveryPointStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		IsEncrypted: FormControl<boolean | null | undefined>,
		StorageClass: FormControl<StorageClass | null | undefined>,
		LastRestoreTime: FormControl<Date | null | undefined>,
		ParentRecoveryPointArn: FormControl<string | null | undefined>,
		CompositeMemberIdentifier: FormControl<string | null | undefined>,
		IsParent: FormControl<boolean | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecoveryPointOutputFormGroup() {
		return new FormGroup<DescribeRecoveryPointOutputFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			SourceBackupVaultArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RecoveryPointStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			IsEncrypted: new FormControl<boolean | null | undefined>(undefined),
			StorageClass: new FormControl<StorageClass | null | undefined>(undefined),
			LastRestoreTime: new FormControl<Date | null | undefined>(undefined),
			ParentRecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			CompositeMemberIdentifier: new FormControl<string | null | undefined>(undefined),
			IsParent: new FormControl<boolean | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RecoveryPointStatus { COMPLETED = 'COMPLETED', PARTIAL = 'PARTIAL', DELETING = 'DELETING', EXPIRED = 'EXPIRED' }


	/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> */
	export interface CalculatedLifecycle {
		MoveToColdStorageAt?: Date;
		DeleteAt?: Date;
	}

	/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> */
	export interface CalculatedLifecycleFormProperties {
		MoveToColdStorageAt: FormControl<Date | null | undefined>,
		DeleteAt: FormControl<Date | null | undefined>,
	}
	export function CreateCalculatedLifecycleFormGroup() {
		return new FormGroup<CalculatedLifecycleFormProperties>({
			MoveToColdStorageAt: new FormControl<Date | null | undefined>(undefined),
			DeleteAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StorageClass { WARM = 'WARM', COLD = 'COLD', DELETED = 'DELETED' }

	export interface DescribeRegionSettingsOutput {
		ResourceTypeOptInPreference?: ResourceTypeOptInPreference;
		ResourceTypeManagementPreference?: ResourceTypeManagementPreference;
	}
	export interface DescribeRegionSettingsOutputFormProperties {
	}
	export function CreateDescribeRegionSettingsOutputFormGroup() {
		return new FormGroup<DescribeRegionSettingsOutputFormProperties>({
		});

	}

	export interface ResourceTypeOptInPreference {
	}
	export interface ResourceTypeOptInPreferenceFormProperties {
	}
	export function CreateResourceTypeOptInPreferenceFormGroup() {
		return new FormGroup<ResourceTypeOptInPreferenceFormProperties>({
		});

	}

	export interface ResourceTypeManagementPreference {
	}
	export interface ResourceTypeManagementPreferenceFormProperties {
	}
	export function CreateResourceTypeManagementPreferenceFormGroup() {
		return new FormGroup<ResourceTypeManagementPreferenceFormProperties>({
		});

	}

	export interface DescribeReportJobOutput {
		ReportJob?: ReportJob;
	}
	export interface DescribeReportJobOutputFormProperties {
	}
	export function CreateDescribeReportJobOutputFormGroup() {
		return new FormGroup<DescribeReportJobOutputFormProperties>({
		});

	}


	/** Contains detailed information about a report job. A report job compiles a report based on a report plan and publishes it to Amazon S3. */
	export interface ReportJob {
		ReportJobId?: string;
		ReportPlanArn?: string;
		ReportTemplate?: string;
		CreationTime?: Date;
		CompletionTime?: Date;
		Status?: string;
		StatusMessage?: string;
		ReportDestination?: ReportDestination;
	}

	/** Contains detailed information about a report job. A report job compiles a report based on a report plan and publishes it to Amazon S3. */
	export interface ReportJobFormProperties {
		ReportJobId: FormControl<string | null | undefined>,
		ReportPlanArn: FormControl<string | null | undefined>,
		ReportTemplate: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		Status: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateReportJobFormGroup() {
		return new FormGroup<ReportJobFormProperties>({
			ReportJobId: new FormControl<string | null | undefined>(undefined),
			ReportPlanArn: new FormControl<string | null | undefined>(undefined),
			ReportTemplate: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information from your report job about your report destination. */
	export interface ReportDestination {
		S3BucketName?: string;
		S3Keys?: Array<string>;
	}

	/** Contains information from your report job about your report destination. */
	export interface ReportDestinationFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
	}
	export function CreateReportDestinationFormGroup() {
		return new FormGroup<ReportDestinationFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReportPlanOutput {
		ReportPlan?: ReportPlan;
	}
	export interface DescribeReportPlanOutputFormProperties {
	}
	export function CreateDescribeReportPlanOutputFormGroup() {
		return new FormGroup<DescribeReportPlanOutputFormProperties>({
		});

	}


	/** Contains detailed information about a report plan. */
	export interface ReportPlan {
		ReportPlanArn?: string;
		ReportPlanName?: string;
		ReportPlanDescription?: string;
		ReportSetting?: ReportSetting;
		ReportDeliveryChannel?: ReportDeliveryChannel;
		DeploymentStatus?: string;
		CreationTime?: Date;
		LastAttemptedExecutionTime?: Date;
		LastSuccessfulExecutionTime?: Date;
	}

	/** Contains detailed information about a report plan. */
	export interface ReportPlanFormProperties {
		ReportPlanArn: FormControl<string | null | undefined>,
		ReportPlanName: FormControl<string | null | undefined>,
		ReportPlanDescription: FormControl<string | null | undefined>,
		DeploymentStatus: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastAttemptedExecutionTime: FormControl<Date | null | undefined>,
		LastSuccessfulExecutionTime: FormControl<Date | null | undefined>,
	}
	export function CreateReportPlanFormGroup() {
		return new FormGroup<ReportPlanFormProperties>({
			ReportPlanArn: new FormControl<string | null | undefined>(undefined),
			ReportPlanName: new FormControl<string | null | undefined>(undefined),
			ReportPlanDescription: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastAttemptedExecutionTime: new FormControl<Date | null | undefined>(undefined),
			LastSuccessfulExecutionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains detailed information about a report setting. */
	export interface ReportSetting {

		/** Required */
		ReportTemplate: string;
		FrameworkArns?: Array<string>;
		NumberOfFrameworks?: number | null;
		Accounts?: Array<string>;
		OrganizationUnits?: Array<string>;
		Regions?: Array<string>;
	}

	/** Contains detailed information about a report setting. */
	export interface ReportSettingFormProperties {

		/** Required */
		ReportTemplate: FormControl<string | null | undefined>,
		NumberOfFrameworks: FormControl<number | null | undefined>,
	}
	export function CreateReportSettingFormGroup() {
		return new FormGroup<ReportSettingFormProperties>({
			ReportTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfFrameworks: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. */
	export interface ReportDeliveryChannel {

		/** Required */
		S3BucketName: string;
		S3KeyPrefix?: string;
		Formats?: Array<string>;
	}

	/** Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. */
	export interface ReportDeliveryChannelFormProperties {

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateReportDeliveryChannelFormGroup() {
		return new FormGroup<ReportDeliveryChannelFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRestoreJobOutput {
		AccountId?: string;
		RestoreJobId?: string;
		RecoveryPointArn?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		Status?: RestoreJobStatus;
		StatusMessage?: string;
		PercentDone?: string;
		BackupSizeInBytes?: number | null;
		IamRoleArn?: string;
		ExpectedCompletionTimeMinutes?: number | null;
		CreatedResourceArn?: string;
		ResourceType?: string;
	}
	export interface DescribeRestoreJobOutputFormProperties {
		AccountId: FormControl<string | null | undefined>,
		RestoreJobId: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		Status: FormControl<RestoreJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		PercentDone: FormControl<string | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		ExpectedCompletionTimeMinutes: FormControl<number | null | undefined>,
		CreatedResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRestoreJobOutputFormGroup() {
		return new FormGroup<DescribeRestoreJobOutputFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			RestoreJobId: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<RestoreJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			PercentDone: new FormControl<string | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ExpectedCompletionTimeMinutes: new FormControl<number | null | undefined>(undefined),
			CreatedResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RestoreJobStatus { PENDING = 'PENDING', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', ABORTED = 'ABORTED', FAILED = 'FAILED' }

	export interface ExportBackupPlanTemplateOutput {
		BackupPlanTemplateJson?: string;
	}
	export interface ExportBackupPlanTemplateOutputFormProperties {
		BackupPlanTemplateJson: FormControl<string | null | undefined>,
	}
	export function CreateExportBackupPlanTemplateOutputFormGroup() {
		return new FormGroup<ExportBackupPlanTemplateOutputFormProperties>({
			BackupPlanTemplateJson: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackupPlanOutput {
		BackupPlan?: BackupPlan;
		BackupPlanId?: string;
		BackupPlanArn?: string;
		VersionId?: string;
		CreatorRequestId?: string;
		CreationDate?: Date;
		DeletionDate?: Date;
		LastExecutionDate?: Date;
		AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
	}
	export interface GetBackupPlanOutputFormProperties {
		BackupPlanId: FormControl<string | null | undefined>,
		BackupPlanArn: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		DeletionDate: FormControl<Date | null | undefined>,
		LastExecutionDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetBackupPlanOutputFormGroup() {
		return new FormGroup<GetBackupPlanOutputFormProperties>({
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			BackupPlanArn: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			DeletionDate: new FormControl<Date | null | undefined>(undefined),
			LastExecutionDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of Amazon Web Services resources. */
	export interface BackupPlan {

		/** Required */
		BackupPlanName: string;

		/** Required */
		Rules: Array<BackupRule>;
		AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
	}

	/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of Amazon Web Services resources. */
	export interface BackupPlanFormProperties {

		/** Required */
		BackupPlanName: FormControl<string | null | undefined>,
	}
	export function CreateBackupPlanFormGroup() {
		return new FormGroup<BackupPlanFormProperties>({
			BackupPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a scheduled task used to back up a selection of resources. */
	export interface BackupRule {

		/** Required */
		RuleName: string;

		/** Required */
		TargetBackupVaultName: string;
		ScheduleExpression?: string;
		StartWindowMinutes?: number | null;
		CompletionWindowMinutes?: number | null;
		Lifecycle?: Lifecycle;
		RecoveryPointTags?: Tags;
		RuleId?: string;
		CopyActions?: Array<CopyAction>;
		EnableContinuousBackup?: boolean | null;
	}

	/** Specifies a scheduled task used to back up a selection of resources. */
	export interface BackupRuleFormProperties {

		/** Required */
		RuleName: FormControl<string | null | undefined>,

		/** Required */
		TargetBackupVaultName: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		StartWindowMinutes: FormControl<number | null | undefined>,
		CompletionWindowMinutes: FormControl<number | null | undefined>,
		RuleId: FormControl<string | null | undefined>,
		EnableContinuousBackup: FormControl<boolean | null | undefined>,
	}
	export function CreateBackupRuleFormGroup() {
		return new FormGroup<BackupRuleFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetBackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			StartWindowMinutes: new FormControl<number | null | undefined>(undefined),
			CompletionWindowMinutes: new FormControl<number | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
			EnableContinuousBackup: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetBackupPlanFromJSONOutput {
		BackupPlan?: BackupPlan;
	}
	export interface GetBackupPlanFromJSONOutputFormProperties {
	}
	export function CreateGetBackupPlanFromJSONOutputFormGroup() {
		return new FormGroup<GetBackupPlanFromJSONOutputFormProperties>({
		});

	}

	export interface GetBackupPlanFromTemplateOutput {
		BackupPlanDocument?: BackupPlan;
	}
	export interface GetBackupPlanFromTemplateOutputFormProperties {
	}
	export function CreateGetBackupPlanFromTemplateOutputFormGroup() {
		return new FormGroup<GetBackupPlanFromTemplateOutputFormProperties>({
		});

	}

	export interface GetBackupSelectionOutput {
		BackupSelection?: BackupSelection;
		SelectionId?: string;
		BackupPlanId?: string;
		CreationDate?: Date;
		CreatorRequestId?: string;
	}
	export interface GetBackupSelectionOutputFormProperties {
		SelectionId: FormControl<string | null | undefined>,
		BackupPlanId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateGetBackupSelectionOutputFormGroup() {
		return new FormGroup<GetBackupSelectionOutputFormProperties>({
			SelectionId: new FormControl<string | null | undefined>(undefined),
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Used to specify a set of resources to a backup plan.</p> <p>Specifying your desired <code>Conditions</code>, <code>ListOfTags</code>, <code>NotResources</code>, and/or <code>Resources</code> is recommended. If none of these are specified, Backup will attempt to select all supported and opted-in storage resources, which could have unintended cost implications.</p> */
	export interface BackupSelection {

		/** Required */
		SelectionName: string;

		/** Required */
		IamRoleArn: string;
		Resources?: Array<string>;
		ListOfTags?: Array<Condition>;
		NotResources?: Array<string>;
		Conditions?: Conditions;
	}

	/** <p>Used to specify a set of resources to a backup plan.</p> <p>Specifying your desired <code>Conditions</code>, <code>ListOfTags</code>, <code>NotResources</code>, and/or <code>Resources</code> is recommended. If none of these are specified, Backup will attempt to select all supported and opted-in storage resources, which could have unintended cost implications.</p> */
	export interface BackupSelectionFormProperties {

		/** Required */
		SelectionName: FormControl<string | null | undefined>,

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateBackupSelectionFormGroup() {
		return new FormGroup<BackupSelectionFormProperties>({
			SelectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBackupVaultAccessPolicyOutput {
		BackupVaultName?: string;
		BackupVaultArn?: string;
		Policy?: string;
	}
	export interface GetBackupVaultAccessPolicyOutputFormProperties {
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetBackupVaultAccessPolicyOutputFormGroup() {
		return new FormGroup<GetBackupVaultAccessPolicyOutputFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackupVaultNotificationsOutput {
		BackupVaultName?: string;
		BackupVaultArn?: string;
		SNSTopicArn?: string;
		BackupVaultEvents?: Array<BackupVaultEvent>;
	}
	export interface GetBackupVaultNotificationsOutputFormProperties {
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		SNSTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateGetBackupVaultNotificationsOutputFormGroup() {
		return new FormGroup<GetBackupVaultNotificationsOutputFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			SNSTopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupVaultEvent { BACKUP_JOB_STARTED = 'BACKUP_JOB_STARTED', BACKUP_JOB_COMPLETED = 'BACKUP_JOB_COMPLETED', BACKUP_JOB_SUCCESSFUL = 'BACKUP_JOB_SUCCESSFUL', BACKUP_JOB_FAILED = 'BACKUP_JOB_FAILED', BACKUP_JOB_EXPIRED = 'BACKUP_JOB_EXPIRED', RESTORE_JOB_STARTED = 'RESTORE_JOB_STARTED', RESTORE_JOB_COMPLETED = 'RESTORE_JOB_COMPLETED', RESTORE_JOB_SUCCESSFUL = 'RESTORE_JOB_SUCCESSFUL', RESTORE_JOB_FAILED = 'RESTORE_JOB_FAILED', COPY_JOB_STARTED = 'COPY_JOB_STARTED', COPY_JOB_SUCCESSFUL = 'COPY_JOB_SUCCESSFUL', COPY_JOB_FAILED = 'COPY_JOB_FAILED', RECOVERY_POINT_MODIFIED = 'RECOVERY_POINT_MODIFIED', BACKUP_PLAN_CREATED = 'BACKUP_PLAN_CREATED', BACKUP_PLAN_MODIFIED = 'BACKUP_PLAN_MODIFIED', S3_BACKUP_OBJECT_FAILED = 'S3_BACKUP_OBJECT_FAILED', S3_RESTORE_OBJECT_FAILED = 'S3_RESTORE_OBJECT_FAILED' }

	export interface GetLegalHoldOutput {
		Title?: string;
		Status?: LegalHoldStatus;
		Description?: string;
		CancelDescription?: string;
		LegalHoldId?: string;
		LegalHoldArn?: string;
		CreationDate?: Date;
		CancellationDate?: Date;
		RetainRecordUntil?: Date;
		RecoveryPointSelection?: RecoveryPointSelection;
	}
	export interface GetLegalHoldOutputFormProperties {
		Title: FormControl<string | null | undefined>,
		Status: FormControl<LegalHoldStatus | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CancelDescription: FormControl<string | null | undefined>,
		LegalHoldId: FormControl<string | null | undefined>,
		LegalHoldArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CancellationDate: FormControl<Date | null | undefined>,
		RetainRecordUntil: FormControl<Date | null | undefined>,
	}
	export function CreateGetLegalHoldOutputFormGroup() {
		return new FormGroup<GetLegalHoldOutputFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LegalHoldStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CancelDescription: new FormControl<string | null | undefined>(undefined),
			LegalHoldId: new FormControl<string | null | undefined>(undefined),
			LegalHoldArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CancellationDate: new FormControl<Date | null | undefined>(undefined),
			RetainRecordUntil: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetRecoveryPointRestoreMetadataOutput {
		BackupVaultArn?: string;
		RecoveryPointArn?: string;
		RestoreMetadata?: Metadata;
	}
	export interface GetRecoveryPointRestoreMetadataOutputFormProperties {
		BackupVaultArn: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
	}
	export function CreateGetRecoveryPointRestoreMetadataOutputFormGroup() {
		return new FormGroup<GetRecoveryPointRestoreMetadataOutputFormProperties>({
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Metadata {
	}
	export interface MetadataFormProperties {
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
		});

	}

	export interface GetSupportedResourceTypesOutput {
		ResourceTypes?: Array<string>;
	}
	export interface GetSupportedResourceTypesOutputFormProperties {
	}
	export function CreateGetSupportedResourceTypesOutputFormGroup() {
		return new FormGroup<GetSupportedResourceTypesOutputFormProperties>({
		});

	}

	export interface ListBackupJobsOutput {
		BackupJobs?: Array<BackupJob>;
		NextToken?: string;
	}
	export interface ListBackupJobsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupJobsOutputFormGroup() {
		return new FormGroup<ListBackupJobsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains detailed information about a backup job. */
	export interface BackupJob {
		AccountId?: string;
		BackupJobId?: string;
		BackupVaultName?: string;
		BackupVaultArn?: string;
		RecoveryPointArn?: string;
		ResourceArn?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		State?: BackupJobState;
		StatusMessage?: string;
		PercentDone?: string;
		BackupSizeInBytes?: number | null;
		IamRoleArn?: string;
		CreatedBy?: RecoveryPointCreator;
		ExpectedCompletionDate?: Date;
		StartBy?: Date;
		ResourceType?: string;
		BytesTransferred?: number | null;
		BackupOptions?: BackupOptions;
		BackupType?: string;
		ParentJobId?: string;
		IsParent?: boolean | null;
		ResourceName?: string;
	}

	/** Contains detailed information about a backup job. */
	export interface BackupJobFormProperties {
		AccountId: FormControl<string | null | undefined>,
		BackupJobId: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		State: FormControl<BackupJobState | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		PercentDone: FormControl<string | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		ExpectedCompletionDate: FormControl<Date | null | undefined>,
		StartBy: FormControl<Date | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		BytesTransferred: FormControl<number | null | undefined>,
		BackupType: FormControl<string | null | undefined>,
		ParentJobId: FormControl<string | null | undefined>,
		IsParent: FormControl<boolean | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateBackupJobFormGroup() {
		return new FormGroup<BackupJobFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			BackupJobId: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<BackupJobState | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			PercentDone: new FormControl<string | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ExpectedCompletionDate: new FormControl<Date | null | undefined>(undefined),
			StartBy: new FormControl<Date | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			BytesTransferred: new FormControl<number | null | undefined>(undefined),
			BackupType: new FormControl<string | null | undefined>(undefined),
			ParentJobId: new FormControl<string | null | undefined>(undefined),
			IsParent: new FormControl<boolean | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBackupPlanTemplatesOutput {
		NextToken?: string;
		BackupPlanTemplatesList?: Array<BackupPlanTemplatesListMember>;
	}
	export interface ListBackupPlanTemplatesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupPlanTemplatesOutputFormGroup() {
		return new FormGroup<ListBackupPlanTemplatesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object specifying metadata associated with a backup plan template. */
	export interface BackupPlanTemplatesListMember {
		BackupPlanTemplateId?: string;
		BackupPlanTemplateName?: string;
	}

	/** An object specifying metadata associated with a backup plan template. */
	export interface BackupPlanTemplatesListMemberFormProperties {
		BackupPlanTemplateId: FormControl<string | null | undefined>,
		BackupPlanTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateBackupPlanTemplatesListMemberFormGroup() {
		return new FormGroup<BackupPlanTemplatesListMemberFormProperties>({
			BackupPlanTemplateId: new FormControl<string | null | undefined>(undefined),
			BackupPlanTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBackupPlanVersionsOutput {
		NextToken?: string;
		BackupPlanVersionsList?: Array<BackupPlansListMember>;
	}
	export interface ListBackupPlanVersionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupPlanVersionsOutputFormGroup() {
		return new FormGroup<ListBackupPlanVersionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata about a backup plan. */
	export interface BackupPlansListMember {
		BackupPlanArn?: string;
		BackupPlanId?: string;
		CreationDate?: Date;
		DeletionDate?: Date;
		VersionId?: string;
		BackupPlanName?: string;
		CreatorRequestId?: string;
		LastExecutionDate?: Date;
		AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
	}

	/** Contains metadata about a backup plan. */
	export interface BackupPlansListMemberFormProperties {
		BackupPlanArn: FormControl<string | null | undefined>,
		BackupPlanId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		DeletionDate: FormControl<Date | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		BackupPlanName: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		LastExecutionDate: FormControl<Date | null | undefined>,
	}
	export function CreateBackupPlansListMemberFormGroup() {
		return new FormGroup<BackupPlansListMemberFormProperties>({
			BackupPlanArn: new FormControl<string | null | undefined>(undefined),
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			DeletionDate: new FormControl<Date | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
			BackupPlanName: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			LastExecutionDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListBackupPlansOutput {
		NextToken?: string;
		BackupPlansList?: Array<BackupPlansListMember>;
	}
	export interface ListBackupPlansOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupPlansOutputFormGroup() {
		return new FormGroup<ListBackupPlansOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBackupSelectionsOutput {
		NextToken?: string;
		BackupSelectionsList?: Array<BackupSelectionsListMember>;
	}
	export interface ListBackupSelectionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupSelectionsOutputFormGroup() {
		return new FormGroup<ListBackupSelectionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata about a <code>BackupSelection</code> object. */
	export interface BackupSelectionsListMember {
		SelectionId?: string;
		SelectionName?: string;
		BackupPlanId?: string;
		CreationDate?: Date;
		CreatorRequestId?: string;
		IamRoleArn?: string;
	}

	/** Contains metadata about a <code>BackupSelection</code> object. */
	export interface BackupSelectionsListMemberFormProperties {
		SelectionId: FormControl<string | null | undefined>,
		SelectionName: FormControl<string | null | undefined>,
		BackupPlanId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateBackupSelectionsListMemberFormGroup() {
		return new FormGroup<BackupSelectionsListMemberFormProperties>({
			SelectionId: new FormControl<string | null | undefined>(undefined),
			SelectionName: new FormControl<string | null | undefined>(undefined),
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBackupVaultsOutput {
		BackupVaultList?: Array<BackupVaultListMember>;
		NextToken?: string;
	}
	export interface ListBackupVaultsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupVaultsOutputFormGroup() {
		return new FormGroup<ListBackupVaultsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata about a backup vault. */
	export interface BackupVaultListMember {
		BackupVaultName?: string;
		BackupVaultArn?: string;
		CreationDate?: Date;
		EncryptionKeyArn?: string;
		CreatorRequestId?: string;
		NumberOfRecoveryPoints?: number | null;
		Locked?: boolean | null;
		MinRetentionDays?: number | null;
		MaxRetentionDays?: number | null;
		LockDate?: Date;
	}

	/** Contains metadata about a backup vault. */
	export interface BackupVaultListMemberFormProperties {
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		NumberOfRecoveryPoints: FormControl<number | null | undefined>,
		Locked: FormControl<boolean | null | undefined>,
		MinRetentionDays: FormControl<number | null | undefined>,
		MaxRetentionDays: FormControl<number | null | undefined>,
		LockDate: FormControl<Date | null | undefined>,
	}
	export function CreateBackupVaultListMemberFormGroup() {
		return new FormGroup<BackupVaultListMemberFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			NumberOfRecoveryPoints: new FormControl<number | null | undefined>(undefined),
			Locked: new FormControl<boolean | null | undefined>(undefined),
			MinRetentionDays: new FormControl<number | null | undefined>(undefined),
			MaxRetentionDays: new FormControl<number | null | undefined>(undefined),
			LockDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListCopyJobsOutput {
		CopyJobs?: Array<CopyJob>;
		NextToken?: string;
	}
	export interface ListCopyJobsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCopyJobsOutputFormGroup() {
		return new FormGroup<ListCopyJobsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFrameworksOutput {
		Frameworks?: Array<Framework>;
		NextToken?: string;
	}
	export interface ListFrameworksOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFrameworksOutputFormGroup() {
		return new FormGroup<ListFrameworksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results. */
	export interface Framework {
		FrameworkName?: string;
		FrameworkArn?: string;
		FrameworkDescription?: string;
		NumberOfControls?: number | null;
		CreationTime?: Date;
		DeploymentStatus?: string;
	}

	/** Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results. */
	export interface FrameworkFormProperties {
		FrameworkName: FormControl<string | null | undefined>,
		FrameworkArn: FormControl<string | null | undefined>,
		FrameworkDescription: FormControl<string | null | undefined>,
		NumberOfControls: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		DeploymentStatus: FormControl<string | null | undefined>,
	}
	export function CreateFrameworkFormGroup() {
		return new FormGroup<FrameworkFormProperties>({
			FrameworkName: new FormControl<string | null | undefined>(undefined),
			FrameworkArn: new FormControl<string | null | undefined>(undefined),
			FrameworkDescription: new FormControl<string | null | undefined>(undefined),
			NumberOfControls: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			DeploymentStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLegalHoldsOutput {
		NextToken?: string;
		LegalHolds?: Array<LegalHold>;
	}
	export interface ListLegalHoldsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLegalHoldsOutputFormGroup() {
		return new FormGroup<ListLegalHoldsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A legal hold is an administrative tool that helps prevent backups from being deleted while under a hold. While the hold is in place, backups under a hold cannot be deleted and lifecycle policies that would alter the backup status (such as transition to cold storage) are delayed until the legal hold is removed. A backup can have more than one legal hold. Legal holds are applied to one or more backups (also known as recovery points). These backups can be filtered by resource types and by resource IDs. */
	export interface LegalHold {
		Title?: string;
		Status?: LegalHoldStatus;
		Description?: string;
		LegalHoldId?: string;
		LegalHoldArn?: string;
		CreationDate?: Date;
		CancellationDate?: Date;
	}

	/** A legal hold is an administrative tool that helps prevent backups from being deleted while under a hold. While the hold is in place, backups under a hold cannot be deleted and lifecycle policies that would alter the backup status (such as transition to cold storage) are delayed until the legal hold is removed. A backup can have more than one legal hold. Legal holds are applied to one or more backups (also known as recovery points). These backups can be filtered by resource types and by resource IDs. */
	export interface LegalHoldFormProperties {
		Title: FormControl<string | null | undefined>,
		Status: FormControl<LegalHoldStatus | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LegalHoldId: FormControl<string | null | undefined>,
		LegalHoldArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CancellationDate: FormControl<Date | null | undefined>,
	}
	export function CreateLegalHoldFormGroup() {
		return new FormGroup<LegalHoldFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LegalHoldStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LegalHoldId: new FormControl<string | null | undefined>(undefined),
			LegalHoldArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CancellationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListProtectedResourcesOutput {
		Results?: Array<ProtectedResource>;
		NextToken?: string;
	}
	export interface ListProtectedResourcesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProtectedResourcesOutputFormGroup() {
		return new FormGroup<ListProtectedResourcesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about a backed-up resource. */
	export interface ProtectedResource {
		ResourceArn?: string;
		ResourceType?: string;
		LastBackupTime?: Date;
		ResourceName?: string;
	}

	/** A structure that contains information about a backed-up resource. */
	export interface ProtectedResourceFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		LastBackupTime: FormControl<Date | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateProtectedResourceFormGroup() {
		return new FormGroup<ProtectedResourceFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			LastBackupTime: new FormControl<Date | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecoveryPointsByBackupVaultOutput {
		NextToken?: string;
		RecoveryPoints?: Array<RecoveryPointByBackupVault>;
	}
	export interface ListRecoveryPointsByBackupVaultOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecoveryPointsByBackupVaultOutputFormGroup() {
		return new FormGroup<ListRecoveryPointsByBackupVaultOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains detailed information about the recovery points stored in a backup vault. */
	export interface RecoveryPointByBackupVault {
		RecoveryPointArn?: string;
		BackupVaultName?: string;
		BackupVaultArn?: string;
		SourceBackupVaultArn?: string;
		ResourceArn?: string;
		ResourceType?: string;
		CreatedBy?: RecoveryPointCreator;
		IamRoleArn?: string;
		Status?: RecoveryPointStatus;
		StatusMessage?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		BackupSizeInBytes?: number | null;
		CalculatedLifecycle?: CalculatedLifecycle;
		Lifecycle?: Lifecycle;
		EncryptionKeyArn?: string;
		IsEncrypted?: boolean | null;
		LastRestoreTime?: Date;
		ParentRecoveryPointArn?: string;
		CompositeMemberIdentifier?: string;
		IsParent?: boolean | null;
		ResourceName?: string;
	}

	/** Contains detailed information about the recovery points stored in a backup vault. */
	export interface RecoveryPointByBackupVaultFormProperties {
		RecoveryPointArn: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		SourceBackupVaultArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		Status: FormControl<RecoveryPointStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		IsEncrypted: FormControl<boolean | null | undefined>,
		LastRestoreTime: FormControl<Date | null | undefined>,
		ParentRecoveryPointArn: FormControl<string | null | undefined>,
		CompositeMemberIdentifier: FormControl<string | null | undefined>,
		IsParent: FormControl<boolean | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryPointByBackupVaultFormGroup() {
		return new FormGroup<RecoveryPointByBackupVaultFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			SourceBackupVaultArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RecoveryPointStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			IsEncrypted: new FormControl<boolean | null | undefined>(undefined),
			LastRestoreTime: new FormControl<Date | null | undefined>(undefined),
			ParentRecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			CompositeMemberIdentifier: new FormControl<string | null | undefined>(undefined),
			IsParent: new FormControl<boolean | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecoveryPointsByLegalHoldOutput {
		RecoveryPoints?: Array<RecoveryPointMember>;
		NextToken?: string;
	}
	export interface ListRecoveryPointsByLegalHoldOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecoveryPointsByLegalHoldOutputFormGroup() {
		return new FormGroup<ListRecoveryPointsByLegalHoldOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is a recovery point which is a child (nested) recovery point of a parent (composite) recovery point. These recovery points can be disassociated from their parent (composite) recovery point, in which case they will no longer be a member. */
	export interface RecoveryPointMember {
		RecoveryPointArn?: string;
		ResourceArn?: string;
		ResourceType?: string;
		BackupVaultName?: string;
	}

	/** This is a recovery point which is a child (nested) recovery point of a parent (composite) recovery point. These recovery points can be disassociated from their parent (composite) recovery point, in which case they will no longer be a member. */
	export interface RecoveryPointMemberFormProperties {
		RecoveryPointArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryPointMemberFormGroup() {
		return new FormGroup<RecoveryPointMemberFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecoveryPointsByResourceOutput {
		NextToken?: string;
		RecoveryPoints?: Array<RecoveryPointByResource>;
	}
	export interface ListRecoveryPointsByResourceOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecoveryPointsByResourceOutputFormGroup() {
		return new FormGroup<ListRecoveryPointsByResourceOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains detailed information about a saved recovery point. */
	export interface RecoveryPointByResource {
		RecoveryPointArn?: string;
		CreationDate?: Date;
		Status?: RecoveryPointStatus;
		StatusMessage?: string;
		EncryptionKeyArn?: string;
		BackupSizeBytes?: number | null;
		BackupVaultName?: string;
		IsParent?: boolean | null;
		ParentRecoveryPointArn?: string;
		ResourceName?: string;
	}

	/** Contains detailed information about a saved recovery point. */
	export interface RecoveryPointByResourceFormProperties {
		RecoveryPointArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Status: FormControl<RecoveryPointStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		BackupSizeBytes: FormControl<number | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		IsParent: FormControl<boolean | null | undefined>,
		ParentRecoveryPointArn: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryPointByResourceFormGroup() {
		return new FormGroup<RecoveryPointByResourceFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<RecoveryPointStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			BackupSizeBytes: new FormControl<number | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			IsParent: new FormControl<boolean | null | undefined>(undefined),
			ParentRecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReportJobsOutput {
		ReportJobs?: Array<ReportJob>;
		NextToken?: string;
	}
	export interface ListReportJobsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportJobsOutputFormGroup() {
		return new FormGroup<ListReportJobsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReportPlansOutput {
		ReportPlans?: Array<ReportPlan>;
		NextToken?: string;
	}
	export interface ListReportPlansOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportPlansOutputFormGroup() {
		return new FormGroup<ListReportPlansOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRestoreJobsOutput {
		RestoreJobs?: Array<RestoreJobsListMember>;
		NextToken?: string;
	}
	export interface ListRestoreJobsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRestoreJobsOutputFormGroup() {
		return new FormGroup<ListRestoreJobsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata about a restore job. */
	export interface RestoreJobsListMember {
		AccountId?: string;
		RestoreJobId?: string;
		RecoveryPointArn?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		Status?: RestoreJobStatus;
		StatusMessage?: string;
		PercentDone?: string;
		BackupSizeInBytes?: number | null;
		IamRoleArn?: string;
		ExpectedCompletionTimeMinutes?: number | null;
		CreatedResourceArn?: string;
		ResourceType?: string;
	}

	/** Contains metadata about a restore job. */
	export interface RestoreJobsListMemberFormProperties {
		AccountId: FormControl<string | null | undefined>,
		RestoreJobId: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		Status: FormControl<RestoreJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		PercentDone: FormControl<string | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		ExpectedCompletionTimeMinutes: FormControl<number | null | undefined>,
		CreatedResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateRestoreJobsListMemberFormGroup() {
		return new FormGroup<RestoreJobsListMemberFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			RestoreJobId: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<RestoreJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			PercentDone: new FormControl<string | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ExpectedCompletionTimeMinutes: new FormControl<number | null | undefined>(undefined),
			CreatedResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsOutput {
		NextToken?: string;
		Tags?: Tags;
	}
	export interface ListTagsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsOutputFormGroup() {
		return new FormGroup<ListTagsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartBackupJobOutput {
		BackupJobId?: string;
		RecoveryPointArn?: string;
		CreationDate?: Date;
		IsParent?: boolean | null;
	}
	export interface StartBackupJobOutputFormProperties {
		BackupJobId: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		IsParent: FormControl<boolean | null | undefined>,
	}
	export function CreateStartBackupJobOutputFormGroup() {
		return new FormGroup<StartBackupJobOutputFormProperties>({
			BackupJobId: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			IsParent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartCopyJobOutput {
		CopyJobId?: string;
		CreationDate?: Date;
		IsParent?: boolean | null;
	}
	export interface StartCopyJobOutputFormProperties {
		CopyJobId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		IsParent: FormControl<boolean | null | undefined>,
	}
	export function CreateStartCopyJobOutputFormGroup() {
		return new FormGroup<StartCopyJobOutputFormProperties>({
			CopyJobId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			IsParent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartReportJobOutput {
		ReportJobId?: string;
	}
	export interface StartReportJobOutputFormProperties {
		ReportJobId: FormControl<string | null | undefined>,
	}
	export function CreateStartReportJobOutputFormGroup() {
		return new FormGroup<StartReportJobOutputFormProperties>({
			ReportJobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRestoreJobOutput {
		RestoreJobId?: string;
	}
	export interface StartRestoreJobOutputFormProperties {
		RestoreJobId: FormControl<string | null | undefined>,
	}
	export function CreateStartRestoreJobOutputFormGroup() {
		return new FormGroup<StartRestoreJobOutputFormProperties>({
			RestoreJobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBackupPlanOutput {
		BackupPlanId?: string;
		BackupPlanArn?: string;
		CreationDate?: Date;
		VersionId?: string;
		AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
	}
	export interface UpdateBackupPlanOutputFormProperties {
		BackupPlanId: FormControl<string | null | undefined>,
		BackupPlanArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackupPlanOutputFormGroup() {
		return new FormGroup<UpdateBackupPlanOutputFormProperties>({
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			BackupPlanArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFrameworkOutput {
		FrameworkName?: string;
		FrameworkArn?: string;
		CreationTime?: Date;
	}
	export interface UpdateFrameworkOutputFormProperties {
		FrameworkName: FormControl<string | null | undefined>,
		FrameworkArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateFrameworkOutputFormGroup() {
		return new FormGroup<UpdateFrameworkOutputFormProperties>({
			FrameworkName: new FormControl<string | null | undefined>(undefined),
			FrameworkArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateRecoveryPointLifecycleOutput {
		BackupVaultArn?: string;
		RecoveryPointArn?: string;
		Lifecycle?: Lifecycle;
		CalculatedLifecycle?: CalculatedLifecycle;
	}
	export interface UpdateRecoveryPointLifecycleOutputFormProperties {
		BackupVaultArn: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecoveryPointLifecycleOutputFormGroup() {
		return new FormGroup<UpdateRecoveryPointLifecycleOutputFormProperties>({
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateReportPlanOutput {
		ReportPlanName?: string;
		ReportPlanArn?: string;
		CreationTime?: Date;
	}
	export interface UpdateReportPlanOutputFormProperties {
		ReportPlanName: FormControl<string | null | undefined>,
		ReportPlanArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateReportPlanOutputFormGroup() {
		return new FormGroup<UpdateReportPlanOutputFormProperties>({
			ReportPlanName: new FormControl<string | null | undefined>(undefined),
			ReportPlanArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task.  */
	export interface BackupPlanInput {

		/** Required */
		BackupPlanName: string;

		/** Required */
		Rules: Array<BackupRuleInput>;
		AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
	}

	/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task.  */
	export interface BackupPlanInputFormProperties {

		/** Required */
		BackupPlanName: FormControl<string | null | undefined>,
	}
	export function CreateBackupPlanInputFormGroup() {
		return new FormGroup<BackupPlanInputFormProperties>({
			BackupPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelLegalHoldInput {
	}
	export interface CancelLegalHoldInputFormProperties {
	}
	export function CreateCancelLegalHoldInputFormGroup() {
		return new FormGroup<CancelLegalHoldInputFormProperties>({
		});

	}

	export interface CreateBackupPlanInput {

		/** Required */
		BackupPlan: BackupPlanInput;
		BackupPlanTags?: Tags;
		CreatorRequestId?: string;
	}
	export interface CreateBackupPlanInputFormProperties {
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupPlanInputFormGroup() {
		return new FormGroup<CreateBackupPlanInputFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackupSelectionInput {

		/** Required */
		BackupSelection: BackupSelection;
		CreatorRequestId?: string;
	}
	export interface CreateBackupSelectionInputFormProperties {
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupSelectionInputFormGroup() {
		return new FormGroup<CreateBackupSelectionInputFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackupVaultInput {
		BackupVaultTags?: Tags;
		EncryptionKeyArn?: string;
		CreatorRequestId?: string;
	}
	export interface CreateBackupVaultInputFormProperties {
		EncryptionKeyArn: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupVaultInputFormGroup() {
		return new FormGroup<CreateBackupVaultInputFormProperties>({
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFrameworkInput {

		/** Required */
		FrameworkName: string;
		FrameworkDescription?: string;

		/** Required */
		FrameworkControls: Array<FrameworkControl>;
		IdempotencyToken?: string;
		FrameworkTags?: StringMap;
	}
	export interface CreateFrameworkInputFormProperties {

		/** Required */
		FrameworkName: FormControl<string | null | undefined>,
		FrameworkDescription: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateFrameworkInputFormGroup() {
		return new FormGroup<CreateFrameworkInputFormProperties>({
			FrameworkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FrameworkDescription: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLegalHoldInput {

		/** Required */
		Title: string;

		/** Required */
		Description: string;
		IdempotencyToken?: string;
		RecoveryPointSelection?: RecoveryPointSelection;
		Tags?: Tags;
	}
	export interface CreateLegalHoldInputFormProperties {

		/** Required */
		Title: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateLegalHoldInputFormGroup() {
		return new FormGroup<CreateLegalHoldInputFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateReportPlanInput {

		/** Required */
		ReportPlanName: string;
		ReportPlanDescription?: string;

		/** Required */
		ReportDeliveryChannel: ReportDeliveryChannel;

		/** Required */
		ReportSetting: ReportSetting;
		ReportPlanTags?: StringMap;
		IdempotencyToken?: string;
	}
	export interface CreateReportPlanInputFormProperties {

		/** Required */
		ReportPlanName: FormControl<string | null | undefined>,
		ReportPlanDescription: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateReportPlanInputFormGroup() {
		return new FormGroup<CreateReportPlanInputFormProperties>({
			ReportPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReportPlanDescription: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBackupPlanInput {
	}
	export interface DeleteBackupPlanInputFormProperties {
	}
	export function CreateDeleteBackupPlanInputFormGroup() {
		return new FormGroup<DeleteBackupPlanInputFormProperties>({
		});

	}

	export interface DeleteBackupSelectionInput {
	}
	export interface DeleteBackupSelectionInputFormProperties {
	}
	export function CreateDeleteBackupSelectionInputFormGroup() {
		return new FormGroup<DeleteBackupSelectionInputFormProperties>({
		});

	}

	export interface DeleteBackupVaultAccessPolicyInput {
	}
	export interface DeleteBackupVaultAccessPolicyInputFormProperties {
	}
	export function CreateDeleteBackupVaultAccessPolicyInputFormGroup() {
		return new FormGroup<DeleteBackupVaultAccessPolicyInputFormProperties>({
		});

	}

	export interface DeleteBackupVaultInput {
	}
	export interface DeleteBackupVaultInputFormProperties {
	}
	export function CreateDeleteBackupVaultInputFormGroup() {
		return new FormGroup<DeleteBackupVaultInputFormProperties>({
		});

	}

	export interface DeleteBackupVaultLockConfigurationInput {
	}
	export interface DeleteBackupVaultLockConfigurationInputFormProperties {
	}
	export function CreateDeleteBackupVaultLockConfigurationInputFormGroup() {
		return new FormGroup<DeleteBackupVaultLockConfigurationInputFormProperties>({
		});

	}

	export interface DeleteBackupVaultNotificationsInput {
	}
	export interface DeleteBackupVaultNotificationsInputFormProperties {
	}
	export function CreateDeleteBackupVaultNotificationsInputFormGroup() {
		return new FormGroup<DeleteBackupVaultNotificationsInputFormProperties>({
		});

	}

	export interface DeleteFrameworkInput {
	}
	export interface DeleteFrameworkInputFormProperties {
	}
	export function CreateDeleteFrameworkInputFormGroup() {
		return new FormGroup<DeleteFrameworkInputFormProperties>({
		});

	}

	export interface DeleteRecoveryPointInput {
	}
	export interface DeleteRecoveryPointInputFormProperties {
	}
	export function CreateDeleteRecoveryPointInputFormGroup() {
		return new FormGroup<DeleteRecoveryPointInputFormProperties>({
		});

	}

	export interface DeleteReportPlanInput {
	}
	export interface DeleteReportPlanInputFormProperties {
	}
	export function CreateDeleteReportPlanInputFormGroup() {
		return new FormGroup<DeleteReportPlanInputFormProperties>({
		});

	}

	export interface DescribeBackupJobInput {
	}
	export interface DescribeBackupJobInputFormProperties {
	}
	export function CreateDescribeBackupJobInputFormGroup() {
		return new FormGroup<DescribeBackupJobInputFormProperties>({
		});

	}

	export interface DescribeBackupVaultInput {
	}
	export interface DescribeBackupVaultInputFormProperties {
	}
	export function CreateDescribeBackupVaultInputFormGroup() {
		return new FormGroup<DescribeBackupVaultInputFormProperties>({
		});

	}

	export interface DescribeCopyJobInput {
	}
	export interface DescribeCopyJobInputFormProperties {
	}
	export function CreateDescribeCopyJobInputFormGroup() {
		return new FormGroup<DescribeCopyJobInputFormProperties>({
		});

	}

	export interface DescribeFrameworkInput {
	}
	export interface DescribeFrameworkInputFormProperties {
	}
	export function CreateDescribeFrameworkInputFormGroup() {
		return new FormGroup<DescribeFrameworkInputFormProperties>({
		});

	}

	export interface DescribeGlobalSettingsInput {
	}
	export interface DescribeGlobalSettingsInputFormProperties {
	}
	export function CreateDescribeGlobalSettingsInputFormGroup() {
		return new FormGroup<DescribeGlobalSettingsInputFormProperties>({
		});

	}

	export interface DescribeProtectedResourceInput {
	}
	export interface DescribeProtectedResourceInputFormProperties {
	}
	export function CreateDescribeProtectedResourceInputFormGroup() {
		return new FormGroup<DescribeProtectedResourceInputFormProperties>({
		});

	}

	export interface DescribeRecoveryPointInput {
	}
	export interface DescribeRecoveryPointInputFormProperties {
	}
	export function CreateDescribeRecoveryPointInputFormGroup() {
		return new FormGroup<DescribeRecoveryPointInputFormProperties>({
		});

	}

	export interface DescribeRegionSettingsInput {
	}
	export interface DescribeRegionSettingsInputFormProperties {
	}
	export function CreateDescribeRegionSettingsInputFormGroup() {
		return new FormGroup<DescribeRegionSettingsInputFormProperties>({
		});

	}

	export interface DescribeReportJobInput {
	}
	export interface DescribeReportJobInputFormProperties {
	}
	export function CreateDescribeReportJobInputFormGroup() {
		return new FormGroup<DescribeReportJobInputFormProperties>({
		});

	}

	export interface DescribeReportPlanInput {
	}
	export interface DescribeReportPlanInputFormProperties {
	}
	export function CreateDescribeReportPlanInputFormGroup() {
		return new FormGroup<DescribeReportPlanInputFormProperties>({
		});

	}

	export interface DescribeRestoreJobInput {
	}
	export interface DescribeRestoreJobInputFormProperties {
	}
	export function CreateDescribeRestoreJobInputFormGroup() {
		return new FormGroup<DescribeRestoreJobInputFormProperties>({
		});

	}

	export interface DisassociateRecoveryPointFromParentInput {
	}
	export interface DisassociateRecoveryPointFromParentInputFormProperties {
	}
	export function CreateDisassociateRecoveryPointFromParentInputFormGroup() {
		return new FormGroup<DisassociateRecoveryPointFromParentInputFormProperties>({
		});

	}

	export interface DisassociateRecoveryPointInput {
	}
	export interface DisassociateRecoveryPointInputFormProperties {
	}
	export function CreateDisassociateRecoveryPointInputFormGroup() {
		return new FormGroup<DisassociateRecoveryPointInputFormProperties>({
		});

	}

	export interface ExportBackupPlanTemplateInput {
	}
	export interface ExportBackupPlanTemplateInputFormProperties {
	}
	export function CreateExportBackupPlanTemplateInputFormGroup() {
		return new FormGroup<ExportBackupPlanTemplateInputFormProperties>({
		});

	}

	export interface GetBackupPlanFromJSONInput {

		/** Required */
		BackupPlanTemplateJson: string;
	}
	export interface GetBackupPlanFromJSONInputFormProperties {

		/** Required */
		BackupPlanTemplateJson: FormControl<string | null | undefined>,
	}
	export function CreateGetBackupPlanFromJSONInputFormGroup() {
		return new FormGroup<GetBackupPlanFromJSONInputFormProperties>({
			BackupPlanTemplateJson: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBackupPlanFromTemplateInput {
	}
	export interface GetBackupPlanFromTemplateInputFormProperties {
	}
	export function CreateGetBackupPlanFromTemplateInputFormGroup() {
		return new FormGroup<GetBackupPlanFromTemplateInputFormProperties>({
		});

	}

	export interface GetBackupPlanInput {
	}
	export interface GetBackupPlanInputFormProperties {
	}
	export function CreateGetBackupPlanInputFormGroup() {
		return new FormGroup<GetBackupPlanInputFormProperties>({
		});

	}

	export interface GetBackupSelectionInput {
	}
	export interface GetBackupSelectionInputFormProperties {
	}
	export function CreateGetBackupSelectionInputFormGroup() {
		return new FormGroup<GetBackupSelectionInputFormProperties>({
		});

	}

	export interface GetBackupVaultAccessPolicyInput {
	}
	export interface GetBackupVaultAccessPolicyInputFormProperties {
	}
	export function CreateGetBackupVaultAccessPolicyInputFormGroup() {
		return new FormGroup<GetBackupVaultAccessPolicyInputFormProperties>({
		});

	}

	export interface GetBackupVaultNotificationsInput {
	}
	export interface GetBackupVaultNotificationsInputFormProperties {
	}
	export function CreateGetBackupVaultNotificationsInputFormGroup() {
		return new FormGroup<GetBackupVaultNotificationsInputFormProperties>({
		});

	}

	export interface GetLegalHoldInput {
	}
	export interface GetLegalHoldInputFormProperties {
	}
	export function CreateGetLegalHoldInputFormGroup() {
		return new FormGroup<GetLegalHoldInputFormProperties>({
		});

	}

	export interface GetRecoveryPointRestoreMetadataInput {
	}
	export interface GetRecoveryPointRestoreMetadataInputFormProperties {
	}
	export function CreateGetRecoveryPointRestoreMetadataInputFormGroup() {
		return new FormGroup<GetRecoveryPointRestoreMetadataInputFormProperties>({
		});

	}

	export interface ListBackupJobsInput {
	}
	export interface ListBackupJobsInputFormProperties {
	}
	export function CreateListBackupJobsInputFormGroup() {
		return new FormGroup<ListBackupJobsInputFormProperties>({
		});

	}

	export interface ListBackupPlanTemplatesInput {
	}
	export interface ListBackupPlanTemplatesInputFormProperties {
	}
	export function CreateListBackupPlanTemplatesInputFormGroup() {
		return new FormGroup<ListBackupPlanTemplatesInputFormProperties>({
		});

	}

	export interface ListBackupPlanVersionsInput {
	}
	export interface ListBackupPlanVersionsInputFormProperties {
	}
	export function CreateListBackupPlanVersionsInputFormGroup() {
		return new FormGroup<ListBackupPlanVersionsInputFormProperties>({
		});

	}

	export interface ListBackupPlansInput {
	}
	export interface ListBackupPlansInputFormProperties {
	}
	export function CreateListBackupPlansInputFormGroup() {
		return new FormGroup<ListBackupPlansInputFormProperties>({
		});

	}

	export interface ListBackupSelectionsInput {
	}
	export interface ListBackupSelectionsInputFormProperties {
	}
	export function CreateListBackupSelectionsInputFormGroup() {
		return new FormGroup<ListBackupSelectionsInputFormProperties>({
		});

	}

	export interface ListBackupVaultsInput {
	}
	export interface ListBackupVaultsInputFormProperties {
	}
	export function CreateListBackupVaultsInputFormGroup() {
		return new FormGroup<ListBackupVaultsInputFormProperties>({
		});

	}

	export interface ListCopyJobsInput {
	}
	export interface ListCopyJobsInputFormProperties {
	}
	export function CreateListCopyJobsInputFormGroup() {
		return new FormGroup<ListCopyJobsInputFormProperties>({
		});

	}

	export interface ListFrameworksInput {
	}
	export interface ListFrameworksInputFormProperties {
	}
	export function CreateListFrameworksInputFormGroup() {
		return new FormGroup<ListFrameworksInputFormProperties>({
		});

	}

	export interface ListLegalHoldsInput {
	}
	export interface ListLegalHoldsInputFormProperties {
	}
	export function CreateListLegalHoldsInputFormGroup() {
		return new FormGroup<ListLegalHoldsInputFormProperties>({
		});

	}

	export interface ListProtectedResourcesInput {
	}
	export interface ListProtectedResourcesInputFormProperties {
	}
	export function CreateListProtectedResourcesInputFormGroup() {
		return new FormGroup<ListProtectedResourcesInputFormProperties>({
		});

	}

	export interface ListRecoveryPointsByBackupVaultInput {
	}
	export interface ListRecoveryPointsByBackupVaultInputFormProperties {
	}
	export function CreateListRecoveryPointsByBackupVaultInputFormGroup() {
		return new FormGroup<ListRecoveryPointsByBackupVaultInputFormProperties>({
		});

	}

	export interface ListRecoveryPointsByLegalHoldInput {
	}
	export interface ListRecoveryPointsByLegalHoldInputFormProperties {
	}
	export function CreateListRecoveryPointsByLegalHoldInputFormGroup() {
		return new FormGroup<ListRecoveryPointsByLegalHoldInputFormProperties>({
		});

	}

	export interface ListRecoveryPointsByResourceInput {
	}
	export interface ListRecoveryPointsByResourceInputFormProperties {
	}
	export function CreateListRecoveryPointsByResourceInputFormGroup() {
		return new FormGroup<ListRecoveryPointsByResourceInputFormProperties>({
		});

	}

	export interface ListReportJobsInput {
	}
	export interface ListReportJobsInputFormProperties {
	}
	export function CreateListReportJobsInputFormGroup() {
		return new FormGroup<ListReportJobsInputFormProperties>({
		});

	}

	export interface ListReportPlansInput {
	}
	export interface ListReportPlansInputFormProperties {
	}
	export function CreateListReportPlansInputFormGroup() {
		return new FormGroup<ListReportPlansInputFormProperties>({
		});

	}

	export interface ListRestoreJobsInput {
	}
	export interface ListRestoreJobsInputFormProperties {
	}
	export function CreateListRestoreJobsInputFormGroup() {
		return new FormGroup<ListRestoreJobsInputFormProperties>({
		});

	}

	export interface ListTagsInput {
	}
	export interface ListTagsInputFormProperties {
	}
	export function CreateListTagsInputFormGroup() {
		return new FormGroup<ListTagsInputFormProperties>({
		});

	}

	export interface PutBackupVaultAccessPolicyInput {
		Policy?: string;
	}
	export interface PutBackupVaultAccessPolicyInputFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutBackupVaultAccessPolicyInputFormGroup() {
		return new FormGroup<PutBackupVaultAccessPolicyInputFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutBackupVaultLockConfigurationInput {
		MinRetentionDays?: number | null;
		MaxRetentionDays?: number | null;
		ChangeableForDays?: number | null;
	}
	export interface PutBackupVaultLockConfigurationInputFormProperties {
		MinRetentionDays: FormControl<number | null | undefined>,
		MaxRetentionDays: FormControl<number | null | undefined>,
		ChangeableForDays: FormControl<number | null | undefined>,
	}
	export function CreatePutBackupVaultLockConfigurationInputFormGroup() {
		return new FormGroup<PutBackupVaultLockConfigurationInputFormProperties>({
			MinRetentionDays: new FormControl<number | null | undefined>(undefined),
			MaxRetentionDays: new FormControl<number | null | undefined>(undefined),
			ChangeableForDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutBackupVaultNotificationsInput {

		/** Required */
		SNSTopicArn: string;

		/** Required */
		BackupVaultEvents: Array<BackupVaultEvent>;
	}
	export interface PutBackupVaultNotificationsInputFormProperties {

		/** Required */
		SNSTopicArn: FormControl<string | null | undefined>,
	}
	export function CreatePutBackupVaultNotificationsInputFormGroup() {
		return new FormGroup<PutBackupVaultNotificationsInputFormProperties>({
			SNSTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartBackupJobInput {

		/** Required */
		BackupVaultName: string;

		/** Required */
		ResourceArn: string;

		/** Required */
		IamRoleArn: string;
		IdempotencyToken?: string;
		StartWindowMinutes?: number | null;
		CompleteWindowMinutes?: number | null;
		Lifecycle?: Lifecycle;
		RecoveryPointTags?: Tags;
		BackupOptions?: BackupOptions;
	}
	export interface StartBackupJobInputFormProperties {

		/** Required */
		BackupVaultName: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
		StartWindowMinutes: FormControl<number | null | undefined>,
		CompleteWindowMinutes: FormControl<number | null | undefined>,
	}
	export function CreateStartBackupJobInputFormGroup() {
		return new FormGroup<StartBackupJobInputFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			StartWindowMinutes: new FormControl<number | null | undefined>(undefined),
			CompleteWindowMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartCopyJobInput {

		/** Required */
		RecoveryPointArn: string;

		/** Required */
		SourceBackupVaultName: string;

		/** Required */
		DestinationBackupVaultArn: string;

		/** Required */
		IamRoleArn: string;
		IdempotencyToken?: string;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> */
		Lifecycle?: Lifecycle;
	}
	export interface StartCopyJobInputFormProperties {

		/** Required */
		RecoveryPointArn: FormControl<string | null | undefined>,

		/** Required */
		SourceBackupVaultName: FormControl<string | null | undefined>,

		/** Required */
		DestinationBackupVaultArn: FormControl<string | null | undefined>,

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateStartCopyJobInputFormGroup() {
		return new FormGroup<StartCopyJobInputFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceBackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationBackupVaultArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartReportJobInput {
		IdempotencyToken?: string;
	}
	export interface StartReportJobInputFormProperties {
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateStartReportJobInputFormGroup() {
		return new FormGroup<StartReportJobInputFormProperties>({
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRestoreJobInput {

		/** Required */
		RecoveryPointArn: string;

		/** Required */
		Metadata: Metadata;
		IamRoleArn?: string;
		IdempotencyToken?: string;
		ResourceType?: string;
		CopySourceTagsToRestoredResource?: boolean | null;
	}
	export interface StartRestoreJobInputFormProperties {

		/** Required */
		RecoveryPointArn: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		CopySourceTagsToRestoredResource: FormControl<boolean | null | undefined>,
	}
	export function CreateStartRestoreJobInputFormGroup() {
		return new FormGroup<StartRestoreJobInputFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			CopySourceTagsToRestoredResource: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StopBackupJobInput {
	}
	export interface StopBackupJobInputFormProperties {
	}
	export function CreateStopBackupJobInputFormGroup() {
		return new FormGroup<StopBackupJobInputFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		Tags: Tags;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {

		/** Required */
		TagKeyList: Array<string>;
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	export interface UpdateBackupPlanInput {

		/** Required */
		BackupPlan: BackupPlanInput;
	}
	export interface UpdateBackupPlanInputFormProperties {
	}
	export function CreateUpdateBackupPlanInputFormGroup() {
		return new FormGroup<UpdateBackupPlanInputFormProperties>({
		});

	}

	export interface UpdateFrameworkInput {
		FrameworkDescription?: string;
		FrameworkControls?: Array<FrameworkControl>;
		IdempotencyToken?: string;
	}
	export interface UpdateFrameworkInputFormProperties {
		FrameworkDescription: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFrameworkInputFormGroup() {
		return new FormGroup<UpdateFrameworkInputFormProperties>({
			FrameworkDescription: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalSettingsInput {
		GlobalSettings?: GlobalSettings;
	}
	export interface UpdateGlobalSettingsInputFormProperties {
	}
	export function CreateUpdateGlobalSettingsInputFormGroup() {
		return new FormGroup<UpdateGlobalSettingsInputFormProperties>({
		});

	}

	export interface UpdateRecoveryPointLifecycleInput {
		Lifecycle?: Lifecycle;
	}
	export interface UpdateRecoveryPointLifecycleInputFormProperties {
	}
	export function CreateUpdateRecoveryPointLifecycleInputFormGroup() {
		return new FormGroup<UpdateRecoveryPointLifecycleInputFormProperties>({
		});

	}

	export interface UpdateRegionSettingsInput {
		ResourceTypeOptInPreference?: ResourceTypeOptInPreference;
		ResourceTypeManagementPreference?: ResourceTypeManagementPreference;
	}
	export interface UpdateRegionSettingsInputFormProperties {
	}
	export function CreateUpdateRegionSettingsInputFormGroup() {
		return new FormGroup<UpdateRegionSettingsInputFormProperties>({
		});

	}

	export interface UpdateReportPlanInput {
		ReportPlanDescription?: string;
		ReportDeliveryChannel?: ReportDeliveryChannel;
		ReportSetting?: ReportSetting;
		IdempotencyToken?: string;
	}
	export interface UpdateReportPlanInputFormProperties {
		ReportPlanDescription: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReportPlanInputFormGroup() {
		return new FormGroup<UpdateReportPlanInputFormProperties>({
			ReportPlanDescription: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This action removes the specified legal hold on a recovery point. This action can only be performed by a user with sufficient permissions.
		 * Delete legal-holds/{legalHoldId}#cancelDescription
		 * @param {string} legalHoldId Legal hold ID required to remove the specified legal hold on a recovery point.
		 * @param {string} cancelDescription String describing the reason for removing the legal hold.
		 * @param {number} retainRecordInDays The integer amount in days specifying amount of days after this API operation to remove legal hold.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		CancelLegalHold(legalHoldId: string, cancelDescription: string, retainRecordInDays: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'legal-holds/' + (legalHoldId == null ? '' : encodeURIComponent(legalHoldId)) + '#cancelDescription&cancelDescription=' + (cancelDescription == null ? '' : encodeURIComponent(cancelDescription)) + '&retainRecordInDays=' + retainRecordInDays, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a backup plan using a backup plan name and backup rules. A backup plan is a document that contains information that Backup uses to schedule tasks that create recovery points for resources.</p> <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, you receive an <code>AlreadyExistsException</code> exception.</p>
		 * Put backup/plans/
		 * @return {CreateBackupPlanOutput} Success
		 */
		CreateBackupPlan(requestBody: CreateBackupPlanPutBody): Observable<CreateBackupPlanOutput> {
			return this.http.put<CreateBackupPlanOutput>(this.baseUri + 'backup/plans/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all active backup plans for an authenticated account. The list contains information such as Amazon Resource Names (ARNs), plan IDs, creation and deletion dates, version IDs, plan names, and creator request IDs.
		 * Get backup/plans/
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {boolean} includeDeleted A Boolean value with a default value of <code>FALSE</code> that returns deleted backup plans when set to <code>TRUE</code>.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBackupPlansOutput} Success
		 */
		ListBackupPlans(nextToken: string | null | undefined, maxResults: number | null | undefined, includeDeleted: boolean | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBackupPlansOutput> {
			return this.http.get<ListBackupPlansOutput>(this.baseUri + 'backup/plans/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&includeDeleted=' + includeDeleted + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a JSON document that specifies a set of resources to assign to a backup plan. For examples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-json">Assigning resources programmatically</a>.
		 * Put backup/plans/{backupPlanId}/selections/
		 * @param {string} backupPlanId Uniquely identifies the backup plan to be associated with the selection of resources.
		 * @return {CreateBackupSelectionOutput} Success
		 */
		CreateBackupSelection(backupPlanId: string, requestBody: CreateBackupSelectionPutBody): Observable<CreateBackupSelectionOutput> {
			return this.http.put<CreateBackupSelectionOutput>(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '/selections/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array containing metadata of the resources associated with the target backup plan.
		 * Get backup/plans/{backupPlanId}/selections/
		 * @param {string} backupPlanId Uniquely identifies a backup plan.
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBackupSelectionsOutput} Success
		 */
		ListBackupSelections(backupPlanId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBackupSelectionsOutput> {
			return this.http.get<ListBackupSelectionsOutput>(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '/selections/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a logical container where backups are stored. A <code>CreateBackupVault</code> request includes a name, optionally one or more resource tags, an encryption key, and a request ID.</p> <note> <p>Do not include sensitive data, such as passport numbers, in the name of a backup vault.</p> </note>
		 * Put backup-vaults/{backupVaultName}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of letters, numbers, and hyphens.
		 * @return {CreateBackupVaultOutput} Success
		 */
		CreateBackupVault(backupVaultName: string, requestBody: CreateBackupVaultPutBody): Observable<CreateBackupVaultOutput> {
			return this.http.put<CreateBackupVaultOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.
		 * Delete backup-vaults/{backupVaultName}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {void} Success
		 */
		DeleteBackupVault(backupVaultName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata about a backup vault specified by its name.
		 * Get backup-vaults/{backupVaultName}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {DescribeBackupVaultOutput} Success
		 */
		DescribeBackupVault(backupVaultName: string): Observable<DescribeBackupVaultOutput> {
			return this.http.get<DescribeBackupVaultOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)), {});
		}

		/**
		 * Creates a framework with one or more controls. A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance.
		 * Post audit/frameworks
		 * @return {CreateFrameworkOutput} Success
		 */
		CreateFramework(requestBody: CreateFrameworkPostBody): Observable<CreateFrameworkOutput> {
			return this.http.post<CreateFrameworkOutput>(this.baseUri + 'audit/frameworks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all frameworks for an Amazon Web Services account and Amazon Web Services Region.
		 * Get audit/frameworks
		 * @param {number} MaxResults The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} NextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
		 * @return {ListFrameworksOutput} Success
		 */
		ListFrameworks(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListFrameworksOutput> {
			return this.http.get<ListFrameworksOutput>(this.baseUri + 'audit/frameworks?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * This action creates a legal hold on a recovery point (backup). A legal hold is a restraint on altering or deleting a backup until an authorized user cancels the legal hold. Any actions to delete or disassociate a recovery point will fail with an error if one or more active legal holds are on the recovery point.
		 * Post legal-holds/
		 * @return {CreateLegalHoldOutput} Success
		 */
		CreateLegalHold(requestBody: CreateLegalHoldPostBody): Observable<CreateLegalHoldOutput> {
			return this.http.post<CreateLegalHoldOutput>(this.baseUri + 'legal-holds/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This action returns metadata about active and previous legal holds.
		 * Get legal-holds/
		 * @param {string} nextToken The next item following a partial list of returned resources. For example, if a request is made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of resource list items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLegalHoldsOutput} Success
		 */
		ListLegalHolds(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListLegalHoldsOutput> {
			return this.http.get<ListLegalHoldsOutput>(this.baseUri + 'legal-holds/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a report plan. A report plan is a document that contains information about the contents of the report and where Backup will deliver it.</p> <p>If you call <code>CreateReportPlan</code> with a plan that already exists, you receive an <code>AlreadyExistsException</code> exception.</p>
		 * Post audit/report-plans
		 * @return {CreateReportPlanOutput} Success
		 */
		CreateReportPlan(requestBody: CreateReportPlanPostBody): Observable<CreateReportPlanOutput> {
			return this.http.post<CreateReportPlanOutput>(this.baseUri + 'audit/report-plans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of your report plans. For detailed information about a single report plan, use <code>DescribeReportPlan</code>.
		 * Get audit/report-plans
		 * @param {number} MaxResults The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} NextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
		 * @return {ListReportPlansOutput} Success
		 */
		ListReportPlans(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListReportPlansOutput> {
			return this.http.get<ListReportPlansOutput>(this.baseUri + 'audit/report-plans?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes a backup plan. A backup plan can only be deleted after all associated selections of resources have been deleted. Deleting a backup plan deletes the current version of a backup plan. Previous versions, if any, will still exist.
		 * Delete backup/plans/{backupPlanId}
		 * @param {string} backupPlanId Uniquely identifies a backup plan.
		 * @return {DeleteBackupPlanOutput} Success
		 */
		DeleteBackupPlan(backupPlanId: string): Observable<DeleteBackupPlanOutput> {
			return this.http.delete<DeleteBackupPlanOutput>(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)), {});
		}

		/**
		 * Updates an existing backup plan identified by its <code>backupPlanId</code> with the input document in JSON format. The new version is uniquely identified by a <code>VersionId</code>.
		 * Post backup/plans/{backupPlanId}
		 * @param {string} backupPlanId Uniquely identifies a backup plan.
		 * @return {UpdateBackupPlanOutput} Success
		 */
		UpdateBackupPlan(backupPlanId: string, requestBody: UpdateBackupPlanPostBody): Observable<UpdateBackupPlanOutput> {
			return this.http.post<UpdateBackupPlanOutput>(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the resource selection associated with a backup plan that is specified by the <code>SelectionId</code>.
		 * Delete backup/plans/{backupPlanId}/selections/{selectionId}
		 * @param {string} backupPlanId Uniquely identifies a backup plan.
		 * @param {string} selectionId Uniquely identifies the body of a request to assign a set of resources to a backup plan.
		 * @return {void} Success
		 */
		DeleteBackupSelection(backupPlanId: string, selectionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '/selections/' + (selectionId == null ? '' : encodeURIComponent(selectionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns selection metadata and a document in JSON format that specifies a list of resources that are associated with a backup plan.
		 * Get backup/plans/{backupPlanId}/selections/{selectionId}
		 * @param {string} backupPlanId Uniquely identifies a backup plan.
		 * @param {string} selectionId Uniquely identifies the body of a request to assign a set of resources to a backup plan.
		 * @return {GetBackupSelectionOutput} Success
		 */
		GetBackupSelection(backupPlanId: string, selectionId: string): Observable<GetBackupSelectionOutput> {
			return this.http.get<GetBackupSelectionOutput>(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '/selections/' + (selectionId == null ? '' : encodeURIComponent(selectionId)), {});
		}

		/**
		 * Deletes the policy document that manages permissions on a backup vault.
		 * Delete backup-vaults/{backupVaultName}/access-policy
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {void} Success
		 */
		DeleteBackupVaultAccessPolicy(backupVaultName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/access-policy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the access policy document that is associated with the named backup vault.
		 * Get backup-vaults/{backupVaultName}/access-policy
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {GetBackupVaultAccessPolicyOutput} Success
		 */
		GetBackupVaultAccessPolicy(backupVaultName: string): Observable<GetBackupVaultAccessPolicyOutput> {
			return this.http.get<GetBackupVaultAccessPolicyOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/access-policy', {});
		}

		/**
		 * Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format.
		 * Put backup-vaults/{backupVaultName}/access-policy
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {void} Success
		 */
		PutBackupVaultAccessPolicy(backupVaultName: string, requestBody: PutBackupVaultAccessPolicyPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/access-policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes Backup Vault Lock from a backup vault specified by a backup vault name.</p> <p>If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using API operations, and you will receive an <code>InvalidRequestException</code> if you attempt to do so. For more information, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html">Vault Lock</a> in the <i>Backup Developer Guide</i>.</p>
		 * Delete backup-vaults/{backupVaultName}/vault-lock
		 * @param {string} backupVaultName The name of the backup vault from which to delete Backup Vault Lock.
		 * @return {void} Success
		 */
		DeleteBackupVaultLockConfiguration(backupVaultName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/vault-lock', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Applies Backup Vault Lock to a backup vault, preventing attempts to delete any recovery point stored in or created in a backup vault. Vault Lock also prevents attempts to update the lifecycle policy that controls the retention period of any recovery point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and maximum retention period for future backup and copy jobs that target a backup vault.</p> <note> <p>Backup Vault Lock has been assessed by Cohasset Associates for use in environments that are subject to SEC 17a-4, CFTC, and FINRA regulations. For more information about how Backup Vault Lock relates to these regulations, see the <a href="samples/cohassetreport.zip">Cohasset Associates Compliance Assessment.</a> </p> </note>
		 * Put backup-vaults/{backupVaultName}/vault-lock
		 * @param {string} backupVaultName The Backup Vault Lock configuration that specifies the name of the backup vault it protects.
		 * @return {void} Success
		 */
		PutBackupVaultLockConfiguration(backupVaultName: string, requestBody: PutBackupVaultLockConfigurationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/vault-lock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes event notifications for the specified backup vault.
		 * Delete backup-vaults/{backupVaultName}/notification-configuration
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {void} Success
		 */
		DeleteBackupVaultNotifications(backupVaultName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/notification-configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns event notifications for the specified backup vault.
		 * Get backup-vaults/{backupVaultName}/notification-configuration
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {GetBackupVaultNotificationsOutput} Success
		 */
		GetBackupVaultNotifications(backupVaultName: string): Observable<GetBackupVaultNotificationsOutput> {
			return this.http.get<GetBackupVaultNotificationsOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/notification-configuration', {});
		}

		/**
		 * Turns on notifications on a backup vault for the specified topic and events.
		 * Put backup-vaults/{backupVaultName}/notification-configuration
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {void} Success
		 */
		PutBackupVaultNotifications(backupVaultName: string, requestBody: PutBackupVaultNotificationsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/notification-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the framework specified by a framework name.
		 * Delete audit/frameworks/{frameworkName}
		 * @param {string} frameworkName The unique name of a framework.
		 *     Min length: 1    Max length: 256
		 * @return {void} Success
		 */
		DeleteFramework(frameworkName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'audit/frameworks/' + (frameworkName == null ? '' : encodeURIComponent(frameworkName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the framework details for the specified <code>FrameworkName</code>.
		 * Get audit/frameworks/{frameworkName}
		 * @param {string} frameworkName The unique name of a framework.
		 *     Min length: 1    Max length: 256
		 * @return {DescribeFrameworkOutput} Success
		 */
		DescribeFramework(frameworkName: string): Observable<DescribeFrameworkOutput> {
			return this.http.get<DescribeFrameworkOutput>(this.baseUri + 'audit/frameworks/' + (frameworkName == null ? '' : encodeURIComponent(frameworkName)), {});
		}

		/**
		 * Updates an existing framework identified by its <code>FrameworkName</code> with the input document in JSON format.
		 * Put audit/frameworks/{frameworkName}
		 * @param {string} frameworkName The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
		 *     Min length: 1    Max length: 256
		 * @return {UpdateFrameworkOutput} Success
		 */
		UpdateFramework(frameworkName: string, requestBody: UpdateFrameworkPutBody): Observable<UpdateFrameworkOutput> {
			return this.http.put<UpdateFrameworkOutput>(this.baseUri + 'audit/frameworks/' + (frameworkName == null ? '' : encodeURIComponent(frameworkName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the recovery point specified by a recovery point ID.</p> <p>If the recovery point ID belongs to a continuous backup, calling this endpoint deletes the existing continuous backup and stops future continuous backup.</p> <p>When an IAM role's permissions are insufficient to call this API, the service sends back an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted. Instead, it enters an <code>EXPIRED</code> state.</p> <p> <code>EXPIRED</code> recovery points can be deleted with this API once the IAM role has the <code>iam:CreateServiceLinkedRole</code> action. To learn more about adding this role, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/deleting-backups.html#deleting-backups-troubleshooting"> Troubleshooting manual deletions</a>.</p> <p>If the user or role is deleted or the permission within the role is removed, the deletion will not be successful and will enter an <code>EXPIRED</code> state.</p>
		 * Delete backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {string} recoveryPointArn An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * @return {void} Success
		 */
		DeleteRecoveryPoint(backupVaultName: string, recoveryPointArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/' + (recoveryPointArn == null ? '' : encodeURIComponent(recoveryPointArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.
		 * Get backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {string} recoveryPointArn An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * @return {DescribeRecoveryPointOutput} Success
		 */
		DescribeRecoveryPoint(backupVaultName: string, recoveryPointArn: string): Observable<DescribeRecoveryPointOutput> {
			return this.http.get<DescribeRecoveryPointOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/' + (recoveryPointArn == null ? '' : encodeURIComponent(recoveryPointArn)), {});
		}

		/**
		 * <p>Sets the transition lifecycle of a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> <p>This operation does not support continuous backups.</p>
		 * Post backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {string} recoveryPointArn An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * @return {UpdateRecoveryPointLifecycleOutput} Success
		 */
		UpdateRecoveryPointLifecycle(backupVaultName: string, recoveryPointArn: string, requestBody: UpdateRecoveryPointLifecyclePostBody): Observable<UpdateRecoveryPointLifecycleOutput> {
			return this.http.post<UpdateRecoveryPointLifecycleOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/' + (recoveryPointArn == null ? '' : encodeURIComponent(recoveryPointArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the report plan specified by a report plan name.
		 * Delete audit/report-plans/{reportPlanName}
		 * @param {string} reportPlanName The unique name of a report plan.
		 *     Min length: 1    Max length: 256
		 * @return {void} Success
		 */
		DeleteReportPlan(reportPlanName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'audit/report-plans/' + (reportPlanName == null ? '' : encodeURIComponent(reportPlanName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.
		 * Get audit/report-plans/{reportPlanName}
		 * @param {string} reportPlanName The unique name of a report plan.
		 *     Min length: 1    Max length: 256
		 * @return {DescribeReportPlanOutput} Success
		 */
		DescribeReportPlan(reportPlanName: string): Observable<DescribeReportPlanOutput> {
			return this.http.get<DescribeReportPlanOutput>(this.baseUri + 'audit/report-plans/' + (reportPlanName == null ? '' : encodeURIComponent(reportPlanName)), {});
		}

		/**
		 * Updates an existing report plan identified by its <code>ReportPlanName</code> with the input document in JSON format.
		 * Put audit/report-plans/{reportPlanName}
		 * @param {string} reportPlanName The unique name of the report plan. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
		 *     Min length: 1    Max length: 256
		 * @return {UpdateReportPlanOutput} Success
		 */
		UpdateReportPlan(reportPlanName: string, requestBody: UpdateReportPlanPutBody): Observable<UpdateReportPlanOutput> {
			return this.http.put<UpdateReportPlanOutput>(this.baseUri + 'audit/report-plans/' + (reportPlanName == null ? '' : encodeURIComponent(reportPlanName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns backup job details for the specified <code>BackupJobId</code>.
		 * Get backup-jobs/{backupJobId}
		 * @param {string} backupJobId Uniquely identifies a request to Backup to back up a resource.
		 * @return {DescribeBackupJobOutput} Success
		 */
		DescribeBackupJob(backupJobId: string): Observable<DescribeBackupJobOutput> {
			return this.http.get<DescribeBackupJobOutput>(this.baseUri + 'backup-jobs/' + (backupJobId == null ? '' : encodeURIComponent(backupJobId)), {});
		}

		/**
		 * <p>Attempts to cancel a job to create a one-time backup of a resource.</p> <p>This action is not supported for the following services: Amazon FSx for Windows File Server, Amazon FSx for Lustre, FSx for ONTAP , Amazon FSx for OpenZFS, Amazon DocumentDB (with MongoDB compatibility), Amazon RDS, Amazon Aurora, and Amazon Neptune.</p>
		 * Post backup-jobs/{backupJobId}
		 * @param {string} backupJobId Uniquely identifies a request to Backup to back up a resource.
		 * @return {void} Success
		 */
		StopBackupJob(backupJobId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'backup-jobs/' + (backupJobId == null ? '' : encodeURIComponent(backupJobId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata associated with creating a copy of a resource.
		 * Get copy-jobs/{copyJobId}
		 * @param {string} copyJobId Uniquely identifies a copy job.
		 * @return {DescribeCopyJobOutput} Success
		 */
		DescribeCopyJob(copyJobId: string): Observable<DescribeCopyJobOutput> {
			return this.http.get<DescribeCopyJobOutput>(this.baseUri + 'copy-jobs/' + (copyJobId == null ? '' : encodeURIComponent(copyJobId)), {});
		}

		/**
		 * Describes whether the Amazon Web Services account is opted in to cross-account backup. Returns an error if the account is not a member of an Organizations organization. Example: <code>describe-global-settings --region us-west-2</code>
		 * Get global-settings
		 * @return {DescribeGlobalSettingsOutput} Success
		 */
		DescribeGlobalSettings(): Observable<DescribeGlobalSettingsOutput> {
			return this.http.get<DescribeGlobalSettingsOutput>(this.baseUri + 'global-settings', {});
		}

		/**
		 * Updates whether the Amazon Web Services account is opted in to cross-account backup. Returns an error if the account is not an Organizations management account. Use the <code>DescribeGlobalSettings</code> API to determine the current settings.
		 * Put global-settings
		 * @return {void} Success
		 */
		UpdateGlobalSettings(requestBody: UpdateGlobalSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'global-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a saved resource, including the last time it was backed up, its Amazon Resource Name (ARN), and the Amazon Web Services service type of the saved resource.
		 * Get resources/{resourceArn}
		 * @param {string} resourceArn An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
		 * @return {DescribeProtectedResourceOutput} Success
		 */
		DescribeProtectedResource(resourceArn: string): Observable<DescribeProtectedResourceOutput> {
			return this.http.get<DescribeProtectedResourceOutput>(this.baseUri + 'resources/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Returns the current service opt-in settings for the Region. If service opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region.
		 * Get account-settings
		 * @return {DescribeRegionSettingsOutput} Success
		 */
		DescribeRegionSettings(): Observable<DescribeRegionSettingsOutput> {
			return this.http.get<DescribeRegionSettingsOutput>(this.baseUri + 'account-settings', {});
		}

		/**
		 * Updates the current service opt-in settings for the Region. If service-opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region. Use the <code>DescribeRegionSettings</code> API to determine the resource types that are supported.
		 * Put account-settings
		 * @return {void} Success
		 */
		UpdateRegionSettings(requestBody: UpdateRegionSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the details associated with creating a report as specified by its <code>ReportJobId</code>.
		 * Get audit/report-jobs/{reportJobId}
		 * @param {string} reportJobId The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. The report job ID cannot be edited.
		 * @return {DescribeReportJobOutput} Success
		 */
		DescribeReportJob(reportJobId: string): Observable<DescribeReportJobOutput> {
			return this.http.get<DescribeReportJobOutput>(this.baseUri + 'audit/report-jobs/' + (reportJobId == null ? '' : encodeURIComponent(reportJobId)), {});
		}

		/**
		 * Returns metadata associated with a restore job that is specified by a job ID.
		 * Get restore-jobs/{restoreJobId}
		 * @param {string} restoreJobId Uniquely identifies the job that restores a recovery point.
		 * @return {DescribeRestoreJobOutput} Success
		 */
		DescribeRestoreJob(restoreJobId: string): Observable<DescribeRestoreJobOutput> {
			return this.http.get<DescribeRestoreJobOutput>(this.baseUri + 'restore-jobs/' + (restoreJobId == null ? '' : encodeURIComponent(restoreJobId)), {});
		}

		/**
		 * <p>Deletes the specified continuous backup recovery point from Backup and releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the lifecycle that you specified in your original backup plan.</p> <p>Does not support snapshot backup recovery points.</p>
		 * Post backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/disassociate
		 * @param {string} backupVaultName The unique name of an Backup vault.
		 * @param {string} recoveryPointArn An Amazon Resource Name (ARN) that uniquely identifies an Backup recovery point.
		 * @return {void} Success
		 */
		DisassociateRecoveryPoint(backupVaultName: string, recoveryPointArn: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/' + (recoveryPointArn == null ? '' : encodeURIComponent(recoveryPointArn)) + '/disassociate', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This action to a specific child (nested) recovery point removes the relationship between the specified recovery point and its parent (composite) recovery point.
		 * Delete backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/parentAssociation
		 * @param {string} backupVaultName This is the name of a logical container where the child (nested) recovery point is stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {string} recoveryPointArn This is the Amazon Resource Name (ARN) that uniquely identifies the child (nested) recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</code> 
		 * @return {void} 
		 */
		DisassociateRecoveryPointFromParent(backupVaultName: string, recoveryPointArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/' + (recoveryPointArn == null ? '' : encodeURIComponent(recoveryPointArn)) + '/parentAssociation', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the backup plan that is specified by the plan ID as a backup template.
		 * Get backup/plans/{backupPlanId}/toTemplate/
		 * @param {string} backupPlanId Uniquely identifies a backup plan.
		 * @return {ExportBackupPlanTemplateOutput} Success
		 */
		ExportBackupPlanTemplate(backupPlanId: string): Observable<ExportBackupPlanTemplateOutput> {
			return this.http.get<ExportBackupPlanTemplateOutput>(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '/toTemplate/', {});
		}

		/**
		 * Returns <code>BackupPlan</code> details for the specified <code>BackupPlanId</code>. The details are the body of a backup plan in JSON format, in addition to plan metadata.
		 * Get backup/plans/{backupPlanId}/
		 * @param {string} backupPlanId Uniquely identifies a backup plan.
		 * @param {string} versionId Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.
		 * @return {GetBackupPlanOutput} Success
		 */
		GetBackupPlan(backupPlanId: string, versionId: string | null | undefined): Observable<GetBackupPlanOutput> {
			return this.http.get<GetBackupPlanOutput>(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '/&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), {});
		}

		/**
		 * Returns a valid JSON document specifying a backup plan or an error.
		 * Post backup/template/json/toPlan
		 * @return {GetBackupPlanFromJSONOutput} Success
		 */
		GetBackupPlanFromJSON(requestBody: GetBackupPlanFromJSONPostBody): Observable<GetBackupPlanFromJSONOutput> {
			return this.http.post<GetBackupPlanFromJSONOutput>(this.baseUri + 'backup/template/json/toPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the template specified by its <code>templateId</code> as a backup plan.
		 * Get backup/template/plans/{templateId}/toPlan
		 * @param {string} templateId Uniquely identifies a stored backup plan template.
		 * @return {GetBackupPlanFromTemplateOutput} Success
		 */
		GetBackupPlanFromTemplate(templateId: string): Observable<GetBackupPlanFromTemplateOutput> {
			return this.http.get<GetBackupPlanFromTemplateOutput>(this.baseUri + 'backup/template/plans/' + (templateId == null ? '' : encodeURIComponent(templateId)) + '/toPlan', {});
		}

		/**
		 * This action returns details for a specified legal hold. The details are the body of a legal hold in JSON format, in addition to metadata.
		 * Get legal-holds/{legalHoldId}/
		 * @param {string} legalHoldId This is the ID required to use <code>GetLegalHold</code>. This unique ID is associated with a specific legal hold.
		 * @return {GetLegalHoldOutput} Success
		 */
		GetLegalHold(legalHoldId: string): Observable<GetLegalHoldOutput> {
			return this.http.get<GetLegalHoldOutput>(this.baseUri + 'legal-holds/' + (legalHoldId == null ? '' : encodeURIComponent(legalHoldId)) + '/', {});
		}

		/**
		 * Returns a set of metadata key-value pairs that were used to create the backup.
		 * Get backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/restore-metadata
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {string} recoveryPointArn An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * @return {GetRecoveryPointRestoreMetadataOutput} Success
		 */
		GetRecoveryPointRestoreMetadata(backupVaultName: string, recoveryPointArn: string): Observable<GetRecoveryPointRestoreMetadataOutput> {
			return this.http.get<GetRecoveryPointRestoreMetadataOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/' + (recoveryPointArn == null ? '' : encodeURIComponent(recoveryPointArn)) + '/restore-metadata', {});
		}

		/**
		 * Returns the Amazon Web Services resource types supported by Backup.
		 * Get supported-resource-types
		 * @return {GetSupportedResourceTypesOutput} Success
		 */
		GetSupportedResourceTypes(): Observable<GetSupportedResourceTypesOutput> {
			return this.http.get<GetSupportedResourceTypesOutput>(this.baseUri + 'supported-resource-types', {});
		}

		/**
		 * Returns a list of existing backup jobs for an authenticated account for the last 30 days. For a longer period of time, consider using these <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">monitoring tools</a>.
		 * Get backup-jobs/
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} resourceArn Returns only backup jobs that match the specified resource Amazon Resource Name (ARN).
		 * @param {BackupJobState} state Returns only backup jobs that are in the specified state.
		 * @param {string} backupVaultName Returns only backup jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {Date} createdBefore Returns only backup jobs that were created before the specified date.
		 * @param {Date} createdAfter Returns only backup jobs that were created after the specified date.
		 * @param {string} resourceType <p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>
		 * @param {string} accountId <p>The account ID to list the jobs from. Returns only backup jobs associated with the specified account ID.</p> <p>If used from an Organizations management account, passing <code>*</code> returns all jobs across the organization.</p>
		 * @param {Date} completeAfter Returns only backup jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).
		 * @param {Date} completeBefore Returns only backup jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).
		 * @param {string} parentJobId This is a filter to list child (nested) jobs based on parent job ID.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBackupJobsOutput} Success
		 */
		ListBackupJobs(nextToken: string | null | undefined, maxResults: number | null | undefined, resourceArn: string | null | undefined, state: BackupJobState | null | undefined, backupVaultName: string | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, resourceType: string | null | undefined, accountId: string | null | undefined, completeAfter: Date | null | undefined, completeBefore: Date | null | undefined, parentJobId: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBackupJobsOutput> {
			return this.http.get<ListBackupJobsOutput>(this.baseUri + 'backup-jobs/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&state=' + state + '&backupVaultName=' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&completeAfter=' + completeAfter?.toISOString() + '&completeBefore=' + completeBefore?.toISOString() + '&parentJobId=' + (parentJobId == null ? '' : encodeURIComponent(parentJobId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns metadata of your saved backup plan templates, including the template ID, name, and the creation and deletion dates.
		 * Get backup/template/plans
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBackupPlanTemplatesOutput} Success
		 */
		ListBackupPlanTemplates(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBackupPlanTemplatesOutput> {
			return this.http.get<ListBackupPlanTemplatesOutput>(this.baseUri + 'backup/template/plans?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs.
		 * Get backup/plans/{backupPlanId}/versions/
		 * @param {string} backupPlanId Uniquely identifies a backup plan.
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBackupPlanVersionsOutput} Success
		 */
		ListBackupPlanVersions(backupPlanId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBackupPlanVersionsOutput> {
			return this.http.get<ListBackupPlanVersionsOutput>(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '/versions/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of recovery point storage containers along with information about them.
		 * Get backup-vaults/
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBackupVaultsOutput} Success
		 */
		ListBackupVaults(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBackupVaultsOutput> {
			return this.http.get<ListBackupVaultsOutput>(this.baseUri + 'backup-vaults/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns metadata about your copy jobs.
		 * Get copy-jobs/
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token. 
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} resourceArn Returns only copy jobs that match the specified resource Amazon Resource Name (ARN). 
		 * @param {CopyJobState} state Returns only copy jobs that are in the specified state.
		 * @param {Date} createdBefore Returns only copy jobs that were created before the specified date.
		 * @param {Date} createdAfter Returns only copy jobs that were created after the specified date.
		 * @param {string} resourceType <p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>
		 * @param {string} destinationVaultArn An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy from; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>. 
		 * @param {string} accountId The account ID to list the jobs from. Returns only copy jobs associated with the specified account ID.
		 * @param {Date} completeBefore Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).
		 * @param {Date} completeAfter Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).
		 * @param {string} parentJobId This is a filter to list child (nested) jobs based on parent job ID.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCopyJobsOutput} Success
		 */
		ListCopyJobs(nextToken: string | null | undefined, maxResults: number | null | undefined, resourceArn: string | null | undefined, state: CopyJobState | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, resourceType: string | null | undefined, destinationVaultArn: string | null | undefined, accountId: string | null | undefined, completeBefore: Date | null | undefined, completeAfter: Date | null | undefined, parentJobId: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListCopyJobsOutput> {
			return this.http.get<ListCopyJobsOutput>(this.baseUri + 'copy-jobs/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&state=' + state + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&destinationVaultArn=' + (destinationVaultArn == null ? '' : encodeURIComponent(destinationVaultArn)) + '&accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&completeBefore=' + completeBefore?.toISOString() + '&completeAfter=' + completeAfter?.toISOString() + '&parentJobId=' + (parentJobId == null ? '' : encodeURIComponent(parentJobId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns an array of resources successfully backed up by Backup, including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.
		 * Get resources/
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProtectedResourcesOutput} Success
		 */
		ListProtectedResources(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListProtectedResourcesOutput> {
			return this.http.get<ListProtectedResourcesOutput>(this.baseUri + 'resources/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns detailed information about the recovery points stored in a backup vault.
		 * Get backup-vaults/{backupVaultName}/recovery-points/
		 * @param {string} backupVaultName <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p> <note> <p>Backup vault name might not be available when a supported service creates the backup.</p> </note>
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} resourceArn Returns only recovery points that match the specified resource Amazon Resource Name (ARN).
		 * @param {string} resourceType Returns only recovery points that match the specified resource type.
		 * @param {string} backupPlanId Returns only recovery points that match the specified backup plan ID.
		 * @param {Date} createdBefore Returns only recovery points that were created before the specified timestamp.
		 * @param {Date} createdAfter Returns only recovery points that were created after the specified timestamp.
		 * @param {string} parentRecoveryPointArn This returns only recovery points that match the specified parent (composite) recovery point Amazon Resource Name (ARN).
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRecoveryPointsByBackupVaultOutput} Success
		 */
		ListRecoveryPointsByBackupVault(backupVaultName: string, nextToken: string | null | undefined, maxResults: number | null | undefined, resourceArn: string | null | undefined, resourceType: string | null | undefined, backupPlanId: string | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, parentRecoveryPointArn: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRecoveryPointsByBackupVaultOutput> {
			return this.http.get<ListRecoveryPointsByBackupVaultOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&backupPlanId=' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&parentRecoveryPointArn=' + (parentRecoveryPointArn == null ? '' : encodeURIComponent(parentRecoveryPointArn)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * This action returns recovery point ARNs (Amazon Resource Names) of the specified legal hold.
		 * Get legal-holds/{legalHoldId}/recovery-points
		 * @param {string} legalHoldId This is the ID of the legal hold.
		 * @param {string} nextToken This is the next item following a partial list of returned resources. For example, if a request is made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults This is the maximum number of resource list items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRecoveryPointsByLegalHoldOutput} Success
		 */
		ListRecoveryPointsByLegalHold(legalHoldId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRecoveryPointsByLegalHoldOutput> {
			return this.http.get<ListRecoveryPointsByLegalHoldOutput>(this.baseUri + 'legal-holds/' + (legalHoldId == null ? '' : encodeURIComponent(legalHoldId)) + '/recovery-points&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns detailed information about all the recovery points of the type specified by a resource Amazon Resource Name (ARN).</p> <note> <p>For Amazon EFS and Amazon EC2, this action only lists recovery points created by Backup.</p> </note>
		 * Get resources/{resourceArn}/recovery-points/
		 * @param {string} resourceArn An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults <p>The maximum number of items to be returned.</p> <note> <p>Amazon RDS requires a value of at least 20.</p> </note>
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRecoveryPointsByResourceOutput} Success
		 */
		ListRecoveryPointsByResource(resourceArn: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRecoveryPointsByResourceOutput> {
			return this.http.get<ListRecoveryPointsByResourceOutput>(this.baseUri + 'resources/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/recovery-points/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns details about your report jobs.
		 * Get audit/report-jobs
		 * @param {string} ReportPlanName Returns only report jobs with the specified report plan name.
		 *     Min length: 1    Max length: 256
		 * @param {Date} CreationBefore Returns only report jobs that were created before the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.
		 * @param {Date} CreationAfter Returns only report jobs that were created after the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.
		 * @param {string} Status <p>Returns only report jobs that are in the specified status. The statuses are:</p> <p> <code>CREATED | RUNNING | COMPLETED | FAILED</code> </p>
		 * @param {number} MaxResults The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} NextToken An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
		 * @return {ListReportJobsOutput} Success
		 */
		ListReportJobs(ReportPlanName: string | null | undefined, CreationBefore: Date | null | undefined, CreationAfter: Date | null | undefined, Status: string | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListReportJobsOutput> {
			return this.http.get<ListReportJobsOutput>(this.baseUri + 'audit/report-jobs?ReportPlanName=' + (ReportPlanName == null ? '' : encodeURIComponent(ReportPlanName)) + '&CreationBefore=' + CreationBefore?.toISOString() + '&CreationAfter=' + CreationAfter?.toISOString() + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)) + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of jobs that Backup initiated to restore a saved resource, including details about the recovery process.
		 * Get restore-jobs/
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} accountId The account ID to list the jobs from. Returns only restore jobs associated with the specified account ID.
		 * @param {Date} createdBefore Returns only restore jobs that were created before the specified date.
		 * @param {Date} createdAfter Returns only restore jobs that were created after the specified date.
		 * @param {RestoreJobStatus} status Returns only restore jobs associated with the specified job status.
		 * @param {Date} completeBefore Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).
		 * @param {Date} completeAfter Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRestoreJobsOutput} Success
		 */
		ListRestoreJobs(nextToken: string | null | undefined, maxResults: number | null | undefined, accountId: string | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, status: RestoreJobStatus | null | undefined, completeBefore: Date | null | undefined, completeAfter: Date | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRestoreJobsOutput> {
			return this.http.get<ListRestoreJobsOutput>(this.baseUri + 'restore-jobs/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&status=' + status + '&completeBefore=' + completeBefore?.toISOString() + '&completeAfter=' + completeAfter?.toISOString() + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of key-value pairs assigned to a target recovery point, backup plan, or backup vault.</p> <p> <code>ListTags</code> only works for resource types that support full Backup management of their backups. Those resource types are listed in the "Full Backup management" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table.</p>
		 * Get tags/{resourceArn}/
		 * @param {string} resourceArn An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the type of resource. Valid targets for <code>ListTags</code> are recovery points, backup plans, and backup vaults.
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsOutput} Success
		 */
		ListTags(resourceArn: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListTagsOutput> {
			return this.http.get<ListTagsOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Starts an on-demand backup job for the specified resource.
		 * Put backup-jobs
		 * @return {StartBackupJobOutput} Success
		 */
		StartBackupJob(requestBody: StartBackupJobPutBody): Observable<StartBackupJobOutput> {
			return this.http.put<StartBackupJobOutput>(this.baseUri + 'backup-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a job to create a one-time copy of the specified resource.</p> <p>Does not support continuous backups.</p>
		 * Put copy-jobs
		 * @return {StartCopyJobOutput} Success
		 */
		StartCopyJob(requestBody: StartCopyJobPutBody): Observable<StartCopyJobOutput> {
			return this.http.put<StartCopyJobOutput>(this.baseUri + 'copy-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an on-demand report job for the specified report plan.
		 * Post audit/report-jobs/{reportPlanName}
		 * @param {string} reportPlanName The unique name of a report plan.
		 *     Min length: 1    Max length: 256
		 * @return {StartReportJobOutput} Success
		 */
		StartReportJob(reportPlanName: string, requestBody: StartReportJobPostBody): Observable<StartReportJobOutput> {
			return this.http.post<StartReportJobOutput>(this.baseUri + 'audit/report-jobs/' + (reportPlanName == null ? '' : encodeURIComponent(reportPlanName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Recovers the saved resource identified by an Amazon Resource Name (ARN).
		 * Put restore-jobs
		 * @return {StartRestoreJobOutput} Success
		 */
		StartRestoreJob(requestBody: StartRestoreJobPutBody): Observable<StartRestoreJobOutput> {
			return this.http.put<StartRestoreJobOutput>(this.baseUri + 'restore-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Assigns a set of key-value pairs to a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN).
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.
		 * @return {void} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a set of key-value pairs from a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN)
		 * Post untag/{resourceArn}
		 * @param {string} resourceArn An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.
		 * @return {void} Success
		 */
		UntagResource(resourceArn: string, requestBody: UntagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'untag/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateBackupPlanPutBody {

		/**
		 * Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task.
		 * Required
		 */
		BackupPlan: CreateBackupPlanPutBodyBackupPlan;

		/** To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan. */
		BackupPlanTags?: {[id: string]: string };

		/** <p>Identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a <code>CreatorRequestId</code> that matches an existing backup plan, that plan is returned. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p> */
		CreatorRequestId?: string | null;
	}
	export interface CreateBackupPlanPutBodyFormProperties {

		/** To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan. */
		BackupPlanTags: FormControl<{[id: string]: string } | null | undefined>,

		/** <p>Identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a <code>CreatorRequestId</code> that matches an existing backup plan, that plan is returned. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p> */
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupPlanPutBodyFormGroup() {
		return new FormGroup<CreateBackupPlanPutBodyFormProperties>({
			BackupPlanTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackupPlanPutBodyBackupPlan {
		BackupPlanName?: string;
		Rules?: Array<BackupRuleInput>;
		AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
	}
	export interface CreateBackupPlanPutBodyBackupPlanFormProperties {
		BackupPlanName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupPlanPutBodyBackupPlanFormGroup() {
		return new FormGroup<CreateBackupPlanPutBodyBackupPlanFormProperties>({
			BackupPlanName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackupSelectionPutBody {

		/**
		 * <p>Used to specify a set of resources to a backup plan.</p> <p>Specifying your desired <code>Conditions</code>, <code>ListOfTags</code>, <code>NotResources</code>, and/or <code>Resources</code> is recommended. If none of these are specified, Backup will attempt to select all supported and opted-in storage resources, which could have unintended cost implications.</p>
		 * Required
		 */
		BackupSelection: CreateBackupSelectionPutBodyBackupSelection;

		/** <p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p> */
		CreatorRequestId?: string | null;
	}
	export interface CreateBackupSelectionPutBodyFormProperties {

		/** <p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p> */
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupSelectionPutBodyFormGroup() {
		return new FormGroup<CreateBackupSelectionPutBodyFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackupSelectionPutBodyBackupSelection {
		SelectionName?: string;
		IamRoleArn?: string;
		Resources?: Array<string>;
		ListOfTags?: Array<Condition>;
		NotResources?: Array<string>;
		Conditions?: Conditions;
	}
	export interface CreateBackupSelectionPutBodyBackupSelectionFormProperties {
		SelectionName: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupSelectionPutBodyBackupSelectionFormGroup() {
		return new FormGroup<CreateBackupSelectionPutBodyBackupSelectionFormProperties>({
			SelectionName: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackupVaultPutBody {

		/** Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair. */
		BackupVaultTags?: {[id: string]: string };

		/** The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>. */
		EncryptionKeyArn?: string | null;

		/** <p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p> */
		CreatorRequestId?: string | null;
	}
	export interface CreateBackupVaultPutBodyFormProperties {

		/** Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair. */
		BackupVaultTags: FormControl<{[id: string]: string } | null | undefined>,

		/** The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>. */
		EncryptionKeyArn: FormControl<string | null | undefined>,

		/** <p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p> */
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupVaultPutBodyFormGroup() {
		return new FormGroup<CreateBackupVaultPutBodyFormProperties>({
			BackupVaultTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFrameworkPostBody {

		/**
		 * The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		FrameworkName: string;

		/**
		 * An optional description of the framework with a maximum of 1,024 characters.
		 * Min length: 0
		 * Max length: 1024
		 */
		FrameworkDescription?: string | null;

		/**
		 * A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope.
		 * Required
		 */
		FrameworkControls: Array<FrameworkControl>;

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken?: string | null;

		/** Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. */
		FrameworkTags?: {[id: string]: string };
	}
	export interface CreateFrameworkPostBodyFormProperties {

		/**
		 * The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		FrameworkName: FormControl<string | null | undefined>,

		/**
		 * An optional description of the framework with a maximum of 1,024 characters.
		 * Min length: 0
		 * Max length: 1024
		 */
		FrameworkDescription: FormControl<string | null | undefined>,

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken: FormControl<string | null | undefined>,

		/** Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. */
		FrameworkTags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFrameworkPostBodyFormGroup() {
		return new FormGroup<CreateFrameworkPostBodyFormProperties>({
			FrameworkName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z][_a-zA-Z0-9]*')]),
			FrameworkDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*\S.*')]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			FrameworkTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLegalHoldPostBody {

		/**
		 * This is the string title of the legal hold.
		 * Required
		 */
		Title: string;

		/**
		 * This is the string description of the legal hold.
		 * Required
		 */
		Description: string;

		/** This is a user-chosen string used to distinguish between otherwise identical calls. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken?: string | null;

		/** This specifies criteria to assign a set of resources, such as resource types or backup vaults. */
		RecoveryPointSelection?: CreateLegalHoldPostBodyRecoveryPointSelection;

		/** Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /. */
		Tags?: {[id: string]: string };
	}
	export interface CreateLegalHoldPostBodyFormProperties {

		/**
		 * This is the string title of the legal hold.
		 * Required
		 */
		Title: FormControl<string | null | undefined>,

		/**
		 * This is the string description of the legal hold.
		 * Required
		 */
		Description: FormControl<string | null | undefined>,

		/** This is a user-chosen string used to distinguish between otherwise identical calls. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken: FormControl<string | null | undefined>,

		/** Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateLegalHoldPostBodyFormGroup() {
		return new FormGroup<CreateLegalHoldPostBodyFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLegalHoldPostBodyRecoveryPointSelection {
		VaultNames?: Array<string>;
		ResourceIdentifiers?: Array<string>;

		/** <p>This is a resource filter containing FromDate: DateTime and ToDate: DateTime. Both values are required. Future DateTime values are not permitted.</p> <p>The date and time are in Unix format and Coordinated Universal Time (UTC), and it is accurate to milliseconds ((milliseconds are optional). For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p> */
		DateRange?: DateRange;
	}
	export interface CreateLegalHoldPostBodyRecoveryPointSelectionFormProperties {
	}
	export function CreateCreateLegalHoldPostBodyRecoveryPointSelectionFormGroup() {
		return new FormGroup<CreateLegalHoldPostBodyRecoveryPointSelectionFormProperties>({
		});

	}

	export interface CreateReportPlanPostBody {

		/**
		 * The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ReportPlanName: string;

		/**
		 * An optional description of the report plan with a maximum of 1,024 characters.
		 * Min length: 0
		 * Max length: 1024
		 */
		ReportPlanDescription?: string | null;

		/**
		 * Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
		 * Required
		 */
		ReportDeliveryChannel: CreateReportPlanPostBodyReportDeliveryChannel;

		/**
		 * Contains detailed information about a report setting.
		 * Required
		 */
		ReportSetting: CreateReportPlanPostBodyReportSetting;

		/** Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair. */
		ReportPlanTags?: {[id: string]: string };

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken?: string | null;
	}
	export interface CreateReportPlanPostBodyFormProperties {

		/**
		 * The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ReportPlanName: FormControl<string | null | undefined>,

		/**
		 * An optional description of the report plan with a maximum of 1,024 characters.
		 * Min length: 0
		 * Max length: 1024
		 */
		ReportPlanDescription: FormControl<string | null | undefined>,

		/** Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair. */
		ReportPlanTags: FormControl<{[id: string]: string } | null | undefined>,

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateReportPlanPostBodyFormGroup() {
		return new FormGroup<CreateReportPlanPostBodyFormProperties>({
			ReportPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z][_a-zA-Z0-9]*')]),
			ReportPlanDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*\S.*')]),
			ReportPlanTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateReportPlanPostBodyReportDeliveryChannel {
		S3BucketName?: string;
		S3KeyPrefix?: string;
		Formats?: Array<string>;
	}
	export interface CreateReportPlanPostBodyReportDeliveryChannelFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateReportPlanPostBodyReportDeliveryChannelFormGroup() {
		return new FormGroup<CreateReportPlanPostBodyReportDeliveryChannelFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateReportPlanPostBodyReportSetting {
		ReportTemplate?: string;
		FrameworkArns?: Array<string>;
		NumberOfFrameworks?: number | null;
		Accounts?: Array<string>;
		OrganizationUnits?: Array<string>;
		Regions?: Array<string>;
	}
	export interface CreateReportPlanPostBodyReportSettingFormProperties {
		ReportTemplate: FormControl<string | null | undefined>,
		NumberOfFrameworks: FormControl<number | null | undefined>,
	}
	export function CreateCreateReportPlanPostBodyReportSettingFormGroup() {
		return new FormGroup<CreateReportPlanPostBodyReportSettingFormProperties>({
			ReportTemplate: new FormControl<string | null | undefined>(undefined),
			NumberOfFrameworks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateBackupPlanPostBody {

		/**
		 * Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task.
		 * Required
		 */
		BackupPlan: UpdateBackupPlanPostBodyBackupPlan;
	}
	export interface UpdateBackupPlanPostBodyFormProperties {
	}
	export function CreateUpdateBackupPlanPostBodyFormGroup() {
		return new FormGroup<UpdateBackupPlanPostBodyFormProperties>({
		});

	}

	export interface UpdateBackupPlanPostBodyBackupPlan {
		BackupPlanName?: string;
		Rules?: Array<BackupRuleInput>;
		AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
	}
	export interface UpdateBackupPlanPostBodyBackupPlanFormProperties {
		BackupPlanName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackupPlanPostBodyBackupPlanFormGroup() {
		return new FormGroup<UpdateBackupPlanPostBodyBackupPlanFormProperties>({
			BackupPlanName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutBackupVaultAccessPolicyPutBody {

		/** The backup vault access policy document in JSON format. */
		Policy?: string | null;
	}
	export interface PutBackupVaultAccessPolicyPutBodyFormProperties {

		/** The backup vault access policy document in JSON format. */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutBackupVaultAccessPolicyPutBodyFormGroup() {
		return new FormGroup<PutBackupVaultAccessPolicyPutBodyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutBackupVaultLockConfigurationPutBody {

		/**
		 * <p>The Backup Vault Lock configuration that specifies the minimum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to retain certain data for at least seven years (2555 days).</p> <p>If this parameter is not specified, Vault Lock will not enforce a minimum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails that backup or copy job, and you should either modify your lifecycle settings or use a different vault. The shortest minimum retention period you can specify is 1 day. Recovery points already saved in the vault prior to Vault Lock are not affected.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MinRetentionDays?: number | null;

		/**
		 * <p>The Backup Vault Lock configuration that specifies the maximum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to destroy certain data after retaining it for four years (1460 days).</p> <p>If this parameter is not included, Vault Lock does not enforce a maximum retention period on the recovery points in the vault. If this parameter is included without a value, Vault Lock will not enforce a maximum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. The longest maximum retention period you can specify is 36500 days (approximately 100 years). Recovery points already saved in the vault prior to Vault Lock are not affected.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxRetentionDays?: number | null;

		/**
		 * <p>The Backup Vault Lock configuration that specifies the number of days before the lock date. For example, setting <code>ChangeableForDays</code> to 30 on Jan. 1, 2022 at 8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC.</p> <p>Backup enforces a 72-hour cooling-off period before Vault Lock takes effect and becomes immutable. Therefore, you must set <code>ChangeableForDays</code> to 3 or greater.</p> <p>Before the lock date, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code>. On and after the lock date, the Vault Lock becomes immutable and cannot be changed or deleted.</p> <p>If this parameter is not specified, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code> at any time.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ChangeableForDays?: number | null;
	}
	export interface PutBackupVaultLockConfigurationPutBodyFormProperties {

		/**
		 * <p>The Backup Vault Lock configuration that specifies the minimum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to retain certain data for at least seven years (2555 days).</p> <p>If this parameter is not specified, Vault Lock will not enforce a minimum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails that backup or copy job, and you should either modify your lifecycle settings or use a different vault. The shortest minimum retention period you can specify is 1 day. Recovery points already saved in the vault prior to Vault Lock are not affected.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MinRetentionDays: FormControl<number | null | undefined>,

		/**
		 * <p>The Backup Vault Lock configuration that specifies the maximum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to destroy certain data after retaining it for four years (1460 days).</p> <p>If this parameter is not included, Vault Lock does not enforce a maximum retention period on the recovery points in the vault. If this parameter is included without a value, Vault Lock will not enforce a maximum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. The longest maximum retention period you can specify is 36500 days (approximately 100 years). Recovery points already saved in the vault prior to Vault Lock are not affected.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxRetentionDays: FormControl<number | null | undefined>,

		/**
		 * <p>The Backup Vault Lock configuration that specifies the number of days before the lock date. For example, setting <code>ChangeableForDays</code> to 30 on Jan. 1, 2022 at 8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC.</p> <p>Backup enforces a 72-hour cooling-off period before Vault Lock takes effect and becomes immutable. Therefore, you must set <code>ChangeableForDays</code> to 3 or greater.</p> <p>Before the lock date, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code>. On and after the lock date, the Vault Lock becomes immutable and cannot be changed or deleted.</p> <p>If this parameter is not specified, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code> at any time.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ChangeableForDays: FormControl<number | null | undefined>,
	}
	export function CreatePutBackupVaultLockConfigurationPutBodyFormGroup() {
		return new FormGroup<PutBackupVaultLockConfigurationPutBodyFormProperties>({
			MinRetentionDays: new FormControl<number | null | undefined>(undefined),
			MaxRetentionDays: new FormControl<number | null | undefined>(undefined),
			ChangeableForDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutBackupVaultNotificationsPutBody {

		/**
		 * The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.
		 * Required
		 */
		SNSTopicArn: string;

		/**
		 * <p>An array of events that indicate the status of jobs to back up resources to the backup vault.</p> <p>For common use cases and code samples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/sns-notifications.html">Using Amazon SNS to track Backup events</a>.</p> <p>The following events are supported:</p> <ul> <li> <p> <code>BACKUP_JOB_STARTED</code> | <code>BACKUP_JOB_COMPLETED</code> </p> </li> <li> <p> <code>COPY_JOB_STARTED</code> | <code>COPY_JOB_SUCCESSFUL</code> | <code>COPY_JOB_FAILED</code> </p> </li> <li> <p> <code>RESTORE_JOB_STARTED</code> | <code>RESTORE_JOB_COMPLETED</code> | <code>RECOVERY_POINT_MODIFIED</code> </p> </li> <li> <p> <code>S3_BACKUP_OBJECT_FAILED</code> | <code>S3_RESTORE_OBJECT_FAILED</code> </p> </li> </ul> <note> <p>The list below shows items that are deprecated events (for reference) and are no longer in use. They are no longer supported and will not return statuses or notifications. Refer to the list above for current supported events.</p> </note>
		 * Required
		 */
		BackupVaultEvents: Array<BackupVaultEvent>;
	}
	export interface PutBackupVaultNotificationsPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.
		 * Required
		 */
		SNSTopicArn: FormControl<string | null | undefined>,
	}
	export function CreatePutBackupVaultNotificationsPutBodyFormGroup() {
		return new FormGroup<PutBackupVaultNotificationsPutBodyFormProperties>({
			SNSTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFrameworkPutBody {

		/**
		 * An optional description of the framework with a maximum 1,024 characters.
		 * Min length: 0
		 * Max length: 1024
		 */
		FrameworkDescription?: string | null;

		/** A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope. */
		FrameworkControls?: Array<FrameworkControl>;

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken?: string | null;
	}
	export interface UpdateFrameworkPutBodyFormProperties {

		/**
		 * An optional description of the framework with a maximum 1,024 characters.
		 * Min length: 0
		 * Max length: 1024
		 */
		FrameworkDescription: FormControl<string | null | undefined>,

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFrameworkPutBodyFormGroup() {
		return new FormGroup<UpdateFrameworkPutBodyFormProperties>({
			FrameworkDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*\S.*')]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRecoveryPointLifecyclePostBody {

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> */
		Lifecycle?: UpdateRecoveryPointLifecyclePostBodyLifecycle;
	}
	export interface UpdateRecoveryPointLifecyclePostBodyFormProperties {
	}
	export function CreateUpdateRecoveryPointLifecyclePostBodyFormGroup() {
		return new FormGroup<UpdateRecoveryPointLifecyclePostBodyFormProperties>({
		});

	}

	export interface UpdateRecoveryPointLifecyclePostBodyLifecycle {
		MoveToColdStorageAfterDays?: number | null;
		DeleteAfterDays?: number | null;
	}
	export interface UpdateRecoveryPointLifecyclePostBodyLifecycleFormProperties {
		MoveToColdStorageAfterDays: FormControl<number | null | undefined>,
		DeleteAfterDays: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRecoveryPointLifecyclePostBodyLifecycleFormGroup() {
		return new FormGroup<UpdateRecoveryPointLifecyclePostBodyLifecycleFormProperties>({
			MoveToColdStorageAfterDays: new FormControl<number | null | undefined>(undefined),
			DeleteAfterDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateReportPlanPutBody {

		/**
		 * An optional description of the report plan with a maximum 1,024 characters.
		 * Min length: 0
		 * Max length: 1024
		 */
		ReportPlanDescription?: string | null;

		/** Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. */
		ReportDeliveryChannel?: UpdateReportPlanPutBodyReportDeliveryChannel;

		/** Contains detailed information about a report setting. */
		ReportSetting?: UpdateReportPlanPutBodyReportSetting;

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken?: string | null;
	}
	export interface UpdateReportPlanPutBodyFormProperties {

		/**
		 * An optional description of the report plan with a maximum 1,024 characters.
		 * Min length: 0
		 * Max length: 1024
		 */
		ReportPlanDescription: FormControl<string | null | undefined>,

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReportPlanPutBodyFormGroup() {
		return new FormGroup<UpdateReportPlanPutBodyFormProperties>({
			ReportPlanDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*\S.*')]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateReportPlanPutBodyReportDeliveryChannel {
		S3BucketName?: string;
		S3KeyPrefix?: string;
		Formats?: Array<string>;
	}
	export interface UpdateReportPlanPutBodyReportDeliveryChannelFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReportPlanPutBodyReportDeliveryChannelFormGroup() {
		return new FormGroup<UpdateReportPlanPutBodyReportDeliveryChannelFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateReportPlanPutBodyReportSetting {
		ReportTemplate?: string;
		FrameworkArns?: Array<string>;
		NumberOfFrameworks?: number | null;
		Accounts?: Array<string>;
		OrganizationUnits?: Array<string>;
		Regions?: Array<string>;
	}
	export interface UpdateReportPlanPutBodyReportSettingFormProperties {
		ReportTemplate: FormControl<string | null | undefined>,
		NumberOfFrameworks: FormControl<number | null | undefined>,
	}
	export function CreateUpdateReportPlanPutBodyReportSettingFormGroup() {
		return new FormGroup<UpdateReportPlanPutBodyReportSettingFormProperties>({
			ReportTemplate: new FormControl<string | null | undefined>(undefined),
			NumberOfFrameworks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalSettingsPutBody {

		/** A value for <code>isCrossAccountBackupEnabled</code> and a Region. Example: <code>update-global-settings --global-settings isCrossAccountBackupEnabled=false --region us-west-2</code>. */
		GlobalSettings?: {[id: string]: string };
	}
	export interface UpdateGlobalSettingsPutBodyFormProperties {

		/** A value for <code>isCrossAccountBackupEnabled</code> and a Region. Example: <code>update-global-settings --global-settings isCrossAccountBackupEnabled=false --region us-west-2</code>. */
		GlobalSettings: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateGlobalSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateGlobalSettingsPutBodyFormProperties>({
			GlobalSettings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateRegionSettingsPutBody {

		/** Updates the list of services along with the opt-in preferences for the Region. */
		ResourceTypeOptInPreference?: {[id: string]: boolean };

		/** Enables or disables full Backup management of backups for a resource type. To enable full Backup management for DynamoDB along with <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html"> Backup's advanced DynamoDB backup features</a>, follow the procedure to <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli"> enable advanced DynamoDB backup programmatically</a>. */
		ResourceTypeManagementPreference?: {[id: string]: boolean };
	}
	export interface UpdateRegionSettingsPutBodyFormProperties {

		/** Updates the list of services along with the opt-in preferences for the Region. */
		ResourceTypeOptInPreference: FormControl<{[id: string]: boolean } | null | undefined>,

		/** Enables or disables full Backup management of backups for a resource type. To enable full Backup management for DynamoDB along with <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html"> Backup's advanced DynamoDB backup features</a>, follow the procedure to <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli"> enable advanced DynamoDB backup programmatically</a>. */
		ResourceTypeManagementPreference: FormControl<{[id: string]: boolean } | null | undefined>,
	}
	export function CreateUpdateRegionSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateRegionSettingsPutBodyFormProperties>({
			ResourceTypeOptInPreference: new FormControl<{[id: string]: boolean } | null | undefined>(undefined),
			ResourceTypeManagementPreference: new FormControl<{[id: string]: boolean } | null | undefined>(undefined),
		});

	}

	export interface GetBackupPlanFromJSONPostBody {

		/**
		 * A customer-supplied backup plan document in JSON format.
		 * Required
		 */
		BackupPlanTemplateJson: string;
	}
	export interface GetBackupPlanFromJSONPostBodyFormProperties {

		/**
		 * A customer-supplied backup plan document in JSON format.
		 * Required
		 */
		BackupPlanTemplateJson: FormControl<string | null | undefined>,
	}
	export function CreateGetBackupPlanFromJSONPostBodyFormGroup() {
		return new FormGroup<GetBackupPlanFromJSONPostBodyFormProperties>({
			BackupPlanTemplateJson: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartBackupJobPutBody {

		/**
		 * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * Required
		 */
		BackupVaultName: string;

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
		 * Required
		 */
		ResourceArn: string;

		/**
		 * Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.
		 * Required
		 */
		IamRoleArn: string;

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartBackupJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken?: string | null;

		/**
		 * <p>A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional, and the default is 8 hours. If this value is included, it must be at least 60 minutes to avoid errors.</p> <p>During the start window, the backup job status remains in <code>CREATED</code> status until it has successfully begun or until the start window time has run out. If within the start window time Backup receives an error that allows the job to be retried, Backup will automatically retry to begin the job at least every 10 minutes until the backup successfully begins (the job status changes to <code>RUNNING</code>) or until the job status changes to <code>EXPIRED</code> (which is expected to occur when the start window time is over).</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StartWindowMinutes?: number | null;

		/**
		 * A value in minutes during which a successfully started backup must complete, or else Backup will cancel the job. This value is optional. This value begins counting down from when the backup was scheduled. It does not add additional time for <code>StartWindowMinutes</code>, or if the backup started later than scheduled.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CompleteWindowMinutes?: number | null;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> */
		Lifecycle?: StartBackupJobPutBodyLifecycle;

		/** To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. */
		RecoveryPointTags?: {[id: string]: string };

		/** <p>Specifies the backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p> <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to <code>"WindowsVSS""disabled"</code> to create a regular backup. The <code>WindowsVSS</code> option is not enabled by default.</p> */
		BackupOptions?: {[id: string]: string };
	}
	export interface StartBackupJobPutBodyFormProperties {

		/**
		 * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * Required
		 */
		BackupVaultName: FormControl<string | null | undefined>,

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/**
		 * Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.
		 * Required
		 */
		IamRoleArn: FormControl<string | null | undefined>,

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartBackupJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken: FormControl<string | null | undefined>,

		/**
		 * <p>A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional, and the default is 8 hours. If this value is included, it must be at least 60 minutes to avoid errors.</p> <p>During the start window, the backup job status remains in <code>CREATED</code> status until it has successfully begun or until the start window time has run out. If within the start window time Backup receives an error that allows the job to be retried, Backup will automatically retry to begin the job at least every 10 minutes until the backup successfully begins (the job status changes to <code>RUNNING</code>) or until the job status changes to <code>EXPIRED</code> (which is expected to occur when the start window time is over).</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StartWindowMinutes: FormControl<number | null | undefined>,

		/**
		 * A value in minutes during which a successfully started backup must complete, or else Backup will cancel the job. This value is optional. This value begins counting down from when the backup was scheduled. It does not add additional time for <code>StartWindowMinutes</code>, or if the backup started later than scheduled.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CompleteWindowMinutes: FormControl<number | null | undefined>,

		/** To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. */
		RecoveryPointTags: FormControl<{[id: string]: string } | null | undefined>,

		/** <p>Specifies the backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p> <p>Valid values: Set to <code>"WindowsVSS":"enabled"</code> to enable the <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to <code>"WindowsVSS""disabled"</code> to create a regular backup. The <code>WindowsVSS</code> option is not enabled by default.</p> */
		BackupOptions: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartBackupJobPutBodyFormGroup() {
		return new FormGroup<StartBackupJobPutBodyFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_]{2,50}$')]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			StartWindowMinutes: new FormControl<number | null | undefined>(undefined),
			CompleteWindowMinutes: new FormControl<number | null | undefined>(undefined),
			RecoveryPointTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			BackupOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartBackupJobPutBodyLifecycle {
		MoveToColdStorageAfterDays?: number | null;
		DeleteAfterDays?: number | null;
	}
	export interface StartBackupJobPutBodyLifecycleFormProperties {
		MoveToColdStorageAfterDays: FormControl<number | null | undefined>,
		DeleteAfterDays: FormControl<number | null | undefined>,
	}
	export function CreateStartBackupJobPutBodyLifecycleFormGroup() {
		return new FormGroup<StartBackupJobPutBodyLifecycleFormProperties>({
			MoveToColdStorageAfterDays: new FormControl<number | null | undefined>(undefined),
			DeleteAfterDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartCopyJobPutBody {

		/**
		 * An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
		 * Required
		 */
		RecoveryPointArn: string;

		/**
		 * The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * Required
		 */
		SourceBackupVaultName: string;

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.
		 * Required
		 */
		DestinationBackupVaultArn: string;

		/**
		 * Specifies the IAM role ARN used to copy the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.
		 * Required
		 */
		IamRoleArn: string;

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartCopyJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken?: string | null;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> */
		Lifecycle?: StartCopyJobPutBodyLifecycle;
	}
	export interface StartCopyJobPutBodyFormProperties {

		/**
		 * An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
		 * Required
		 */
		RecoveryPointArn: FormControl<string | null | undefined>,

		/**
		 * The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * Required
		 */
		SourceBackupVaultName: FormControl<string | null | undefined>,

		/**
		 * An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.
		 * Required
		 */
		DestinationBackupVaultArn: FormControl<string | null | undefined>,

		/**
		 * Specifies the IAM role ARN used to copy the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.
		 * Required
		 */
		IamRoleArn: FormControl<string | null | undefined>,

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartCopyJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateStartCopyJobPutBodyFormGroup() {
		return new FormGroup<StartCopyJobPutBodyFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceBackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_]{2,50}$')]),
			DestinationBackupVaultArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartCopyJobPutBodyLifecycle {
		MoveToColdStorageAfterDays?: number | null;
		DeleteAfterDays?: number | null;
	}
	export interface StartCopyJobPutBodyLifecycleFormProperties {
		MoveToColdStorageAfterDays: FormControl<number | null | undefined>,
		DeleteAfterDays: FormControl<number | null | undefined>,
	}
	export function CreateStartCopyJobPutBodyLifecycleFormGroup() {
		return new FormGroup<StartCopyJobPutBodyLifecycleFormProperties>({
			MoveToColdStorageAfterDays: new FormControl<number | null | undefined>(undefined),
			DeleteAfterDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartReportJobPostBody {

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartReportJobInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken?: string | null;
	}
	export interface StartReportJobPostBodyFormProperties {

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartReportJobInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateStartReportJobPostBodyFormGroup() {
		return new FormGroup<StartReportJobPostBodyFormProperties>({
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRestoreJobPutBody {

		/**
		 * An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * Required
		 */
		RecoveryPointArn: string;

		/**
		 * <p>A set of metadata key-value pairs. Contains information, such as a resource name, required to restore a recovery point.</p> <p> You can get configuration metadata about a resource at the time it was backed up by calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists.</p> <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p> <ul> <li> <p> <code>file-system-id</code>: The ID of the Amazon EFS file system that is backed up by Backup. Returned in <code>GetRecoveryPointRestoreMetadata</code>.</p> </li> <li> <p> <code>Encrypted</code>: A Boolean value that, if true, specifies that the file system is encrypted. If <code>KmsKeyId</code> is specified, <code>Encrypted</code> must be set to <code>true</code>.</p> </li> <li> <p> <code>KmsKeyId</code>: Specifies the Amazon Web Services KMS key that is used to encrypt the restored file system. You can specify a key from another Amazon Web Services account provided that key it is properly shared with your account via Amazon Web Services KMS.</p> </li> <li> <p> <code>PerformanceMode</code>: Specifies the throughput mode of the file system.</p> </li> <li> <p> <code>CreationToken</code>: A user-supplied value that ensures the uniqueness (idempotency) of the request.</p> </li> <li> <p> <code>newFileSystem</code>: A Boolean value that, if true, specifies that the recovery point is restored to a new Amazon EFS file system.</p> </li> <li> <p> <code>ItemsToRestore</code>: An array of one to five strings where each string is a file path. Use <code>ItemsToRestore</code> to restore specific files or directories rather than the entire file system. This parameter is optional. For example, <code>"itemsToRestore":"[\"/my.test\"]"</code>.</p> </li> </ul>
		 * Required
		 */
		Metadata: {[id: string]: string };

		/** The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: <code>arn:aws:iam::123456789012:role/S3Access</code>. */
		IamRoleArn?: string | null;

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartRestoreJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken?: string | null;

		/** <p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>CloudFormation</code> for CloudFormation</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Redshift</code> for Amazon Redshift</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>Timestream</code> for Amazon Timestream</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul> */
		ResourceType?: string | null;

		/** <p>This is an optional parameter. If this equals <code>True</code>, tags included in the backup will be copied to the restored resource.</p> <p>This can only be applied to backups created through Backup.</p> */
		CopySourceTagsToRestoredResource?: boolean | null;
	}
	export interface StartRestoreJobPutBodyFormProperties {

		/**
		 * An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * Required
		 */
		RecoveryPointArn: FormControl<string | null | undefined>,

		/**
		 * <p>A set of metadata key-value pairs. Contains information, such as a resource name, required to restore a recovery point.</p> <p> You can get configuration metadata about a resource at the time it was backed up by calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists.</p> <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p> <ul> <li> <p> <code>file-system-id</code>: The ID of the Amazon EFS file system that is backed up by Backup. Returned in <code>GetRecoveryPointRestoreMetadata</code>.</p> </li> <li> <p> <code>Encrypted</code>: A Boolean value that, if true, specifies that the file system is encrypted. If <code>KmsKeyId</code> is specified, <code>Encrypted</code> must be set to <code>true</code>.</p> </li> <li> <p> <code>KmsKeyId</code>: Specifies the Amazon Web Services KMS key that is used to encrypt the restored file system. You can specify a key from another Amazon Web Services account provided that key it is properly shared with your account via Amazon Web Services KMS.</p> </li> <li> <p> <code>PerformanceMode</code>: Specifies the throughput mode of the file system.</p> </li> <li> <p> <code>CreationToken</code>: A user-supplied value that ensures the uniqueness (idempotency) of the request.</p> </li> <li> <p> <code>newFileSystem</code>: A Boolean value that, if true, specifies that the recovery point is restored to a new Amazon EFS file system.</p> </li> <li> <p> <code>ItemsToRestore</code>: An array of one to five strings where each string is a file path. Use <code>ItemsToRestore</code> to restore specific files or directories rather than the entire file system. This parameter is optional. For example, <code>"itemsToRestore":"[\"/my.test\"]"</code>.</p> </li> </ul>
		 * Required
		 */
		Metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: <code>arn:aws:iam::123456789012:role/S3Access</code>. */
		IamRoleArn: FormControl<string | null | undefined>,

		/** A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartRestoreJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken. */
		IdempotencyToken: FormControl<string | null | undefined>,

		/** <p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>CloudFormation</code> for CloudFormation</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Redshift</code> for Amazon Redshift</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>Timestream</code> for Amazon Timestream</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul> */
		ResourceType: FormControl<string | null | undefined>,

		/** <p>This is an optional parameter. If this equals <code>True</code>, tags included in the backup will be copied to the restored resource.</p> <p>This can only be applied to backups created through Backup.</p> */
		CopySourceTagsToRestoredResource: FormControl<boolean | null | undefined>,
	}
	export function CreateStartRestoreJobPutBodyFormGroup() {
		return new FormGroup<StartRestoreJobPutBodyFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			CopySourceTagsToRestoredResource: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create. For clarity, this is the structure to assign tags: <code>[{"Key":"string","Value":"string"}]</code>.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create. For clarity, this is the structure to assign tags: <code>[{"Key":"string","Value":"string"}]</code>.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * A list of keys to identify which key-value tags to remove from a resource.
		 * Required
		 */
		TagKeyList: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
		});

	}

}

