import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateBackupPlanOutput {
		BackupPlanId?: string | null;
		BackupPlanArn?: string | null;
		CreationDate?: Date | null;
		VersionId?: string | null;
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


	/** Specifies a scheduled task used to back up a selection of resources. */
	export interface BackupRuleInput {

		/** Required */
		RuleName: string;

		/** Required */
		TargetBackupVaultName: string;
		ScheduleExpression?: string | null;
		StartWindowMinutes?: number | null;
		CompletionWindowMinutes?: number | null;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		RecoveryPointTags?: Tags;
		CopyActions?: Array<CopyAction>;
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
	}
	export function CreateBackupRuleInputFormGroup() {
		return new FormGroup<BackupRuleInputFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			TargetBackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			StartWindowMinutes: new FormControl<number | null | undefined>(undefined),
			CompletionWindowMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
	export interface Lifecycle {
		MoveToColdStorageAfterDays?: number | null;
		DeleteAfterDays?: number | null;
	}

	/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
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

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
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

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
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

	export interface CreateBackupSelectionOutput {
		SelectionId?: string | null;
		BackupPlanId?: string | null;
		CreationDate?: Date | null;
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


	/** Contains an array of triplets made up of a condition type (such as <code>STRINGEQUALS</code>), a key, and a value. Conditions are used to filter resources in a selection that is assigned to a backup plan. */
	export interface Condition {

		/** Required */
		ConditionType: ConditionConditionType;

		/** Required */
		ConditionKey: string;

		/** Required */
		ConditionValue: string;
	}

	/** Contains an array of triplets made up of a condition type (such as <code>STRINGEQUALS</code>), a key, and a value. Conditions are used to filter resources in a selection that is assigned to a backup plan. */
	export interface ConditionFormProperties {

		/** Required */
		ConditionType: FormControl<ConditionConditionType | null | undefined>,

		/** Required */
		ConditionKey: FormControl<string | null | undefined>,

		/** Required */
		ConditionValue: FormControl<string | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			ConditionType: new FormControl<ConditionConditionType | null | undefined>(undefined, [Validators.required]),
			ConditionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConditionValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConditionConditionType { STRINGEQUALS = 0 }

	export interface CreateBackupVaultOutput {
		BackupVaultName?: string | null;
		BackupVaultArn?: string | null;
		CreationDate?: Date | null;
	}
	export interface CreateBackupVaultOutputFormProperties {
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateBackupVaultOutputFormGroup() {
		return new FormGroup<CreateBackupVaultOutputFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteBackupPlanOutput {
		BackupPlanId?: string | null;
		BackupPlanArn?: string | null;
		DeletionDate?: Date | null;
		VersionId?: string | null;
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface DescribeBackupJobOutput {
		BackupJobId?: string | null;
		BackupVaultName?: string | null;
		BackupVaultArn?: string | null;
		RecoveryPointArn?: string | null;
		ResourceArn?: string | null;
		CreationDate?: Date | null;
		CompletionDate?: Date | null;
		State?: DescribeBackupJobOutputState | null;
		StatusMessage?: string | null;
		PercentDone?: string | null;
		BackupSizeInBytes?: number | null;
		IamRoleArn?: string | null;

		/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		ResourceType?: string | null;
		BytesTransferred?: number | null;
		ExpectedCompletionDate?: Date | null;
		StartBy?: Date | null;
	}
	export interface DescribeBackupJobOutputFormProperties {
		BackupJobId: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		State: FormControl<DescribeBackupJobOutputState | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		PercentDone: FormControl<string | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		BytesTransferred: FormControl<number | null | undefined>,
		ExpectedCompletionDate: FormControl<Date | null | undefined>,
		StartBy: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeBackupJobOutputFormGroup() {
		return new FormGroup<DescribeBackupJobOutputFormProperties>({
			BackupJobId: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<DescribeBackupJobOutputState | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			PercentDone: new FormControl<string | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BytesTransferred: new FormControl<number | null | undefined>(undefined),
			ExpectedCompletionDate: new FormControl<Date | null | undefined>(undefined),
			StartBy: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeBackupJobOutputState { CREATED = 0, PENDING = 1, RUNNING = 2, ABORTING = 3, ABORTED = 4, COMPLETED = 5, FAILED = 6, EXPIRED = 7 }


	/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
	export interface RecoveryPointCreator {
		BackupPlanId?: string | null;
		BackupPlanArn?: string | null;
		BackupPlanVersion?: string | null;
		BackupRuleId?: string | null;
	}

	/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
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

	export interface DependencyFailureException {
	}
	export interface DependencyFailureExceptionFormProperties {
	}
	export function CreateDependencyFailureExceptionFormGroup() {
		return new FormGroup<DependencyFailureExceptionFormProperties>({
		});

	}

	export interface DescribeBackupVaultOutput {
		BackupVaultName?: string | null;
		BackupVaultArn?: string | null;
		EncryptionKeyArn?: string | null;
		CreationDate?: Date | null;
		CreatorRequestId?: string | null;
		NumberOfRecoveryPoints?: number | null;
	}
	export interface DescribeBackupVaultOutputFormProperties {
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		NumberOfRecoveryPoints: FormControl<number | null | undefined>,
	}
	export function CreateDescribeBackupVaultOutputFormGroup() {
		return new FormGroup<DescribeBackupVaultOutputFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			NumberOfRecoveryPoints: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeCopyJobOutput {

		/** Contains detailed information about a copy job. */
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
		CopyJobId?: string | null;
		SourceBackupVaultArn?: string | null;
		SourceRecoveryPointArn?: string | null;
		DestinationBackupVaultArn?: string | null;
		DestinationRecoveryPointArn?: string | null;
		ResourceArn?: string | null;
		CreationDate?: Date | null;
		CompletionDate?: Date | null;
		State?: CopyJobState | null;
		StatusMessage?: string | null;
		BackupSizeInBytes?: number | null;
		IamRoleArn?: string | null;

		/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		ResourceType?: string | null;
	}

	/** Contains detailed information about a copy job. */
	export interface CopyJobFormProperties {
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
	}
	export function CreateCopyJobFormGroup() {
		return new FormGroup<CopyJobFormProperties>({
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
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
		});

	}

	export enum CopyJobState { CREATED = 0, RUNNING = 1, COMPLETED = 2, FAILED = 3 }

	export interface DescribeProtectedResourceOutput {
		ResourceArn?: string | null;
		ResourceType?: string | null;
		LastBackupTime?: Date | null;
	}
	export interface DescribeProtectedResourceOutputFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		LastBackupTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeProtectedResourceOutputFormGroup() {
		return new FormGroup<DescribeProtectedResourceOutputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			LastBackupTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeRecoveryPointOutput {
		RecoveryPointArn?: string | null;
		BackupVaultName?: string | null;
		BackupVaultArn?: string | null;
		ResourceArn?: string | null;
		ResourceType?: string | null;

		/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		IamRoleArn?: string | null;
		Status?: DescribeRecoveryPointOutputStatus | null;
		CreationDate?: Date | null;
		CompletionDate?: Date | null;
		BackupSizeInBytes?: number | null;

		/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		CalculatedLifecycle?: CalculatedLifecycle;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		EncryptionKeyArn?: string | null;
		IsEncrypted?: boolean | null;
		StorageClass?: DescribeRecoveryPointOutputStorageClass | null;
		LastRestoreTime?: Date | null;
	}
	export interface DescribeRecoveryPointOutputFormProperties {
		RecoveryPointArn: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		Status: FormControl<DescribeRecoveryPointOutputStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		IsEncrypted: FormControl<boolean | null | undefined>,
		StorageClass: FormControl<DescribeRecoveryPointOutputStorageClass | null | undefined>,
		LastRestoreTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeRecoveryPointOutputFormGroup() {
		return new FormGroup<DescribeRecoveryPointOutputFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DescribeRecoveryPointOutputStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			IsEncrypted: new FormControl<boolean | null | undefined>(undefined),
			StorageClass: new FormControl<DescribeRecoveryPointOutputStorageClass | null | undefined>(undefined),
			LastRestoreTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeRecoveryPointOutputStatus { COMPLETED = 0, PARTIAL = 1, DELETING = 2, EXPIRED = 3 }


	/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
	export interface CalculatedLifecycle {
		MoveToColdStorageAt?: Date | null;
		DeleteAt?: Date | null;
	}

	/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
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

	export enum DescribeRecoveryPointOutputStorageClass { WARM = 0, COLD = 1, DELETED = 2 }

	export interface DescribeRegionSettingsOutput {
		ResourceTypeOptInPreference?: ResourceTypeOptInPreference;
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

	export interface DescribeRestoreJobOutput {
		RestoreJobId?: string | null;
		RecoveryPointArn?: string | null;
		CreationDate?: Date | null;
		CompletionDate?: Date | null;
		Status?: DescribeRestoreJobOutputStatus | null;
		StatusMessage?: string | null;
		PercentDone?: string | null;
		BackupSizeInBytes?: number | null;
		IamRoleArn?: string | null;
		ExpectedCompletionTimeMinutes?: number | null;
		CreatedResourceArn?: string | null;
	}
	export interface DescribeRestoreJobOutputFormProperties {
		RestoreJobId: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		Status: FormControl<DescribeRestoreJobOutputStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		PercentDone: FormControl<string | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		ExpectedCompletionTimeMinutes: FormControl<number | null | undefined>,
		CreatedResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRestoreJobOutputFormGroup() {
		return new FormGroup<DescribeRestoreJobOutputFormProperties>({
			RestoreJobId: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DescribeRestoreJobOutputStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			PercentDone: new FormControl<string | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ExpectedCompletionTimeMinutes: new FormControl<number | null | undefined>(undefined),
			CreatedResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeRestoreJobOutputStatus { PENDING = 0, RUNNING = 1, COMPLETED = 2, ABORTED = 3, FAILED = 4 }

	export interface ExportBackupPlanTemplateOutput {
		BackupPlanTemplateJson?: string | null;
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

		/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. */
		BackupPlan?: BackupPlan;
		BackupPlanId?: string | null;
		BackupPlanArn?: string | null;
		VersionId?: string | null;
		CreatorRequestId?: string | null;
		CreationDate?: Date | null;
		DeletionDate?: Date | null;
		LastExecutionDate?: Date | null;
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


	/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. */
	export interface BackupPlan {

		/** Required */
		BackupPlanName: string;

		/** Required */
		Rules: Array<BackupRule>;
	}

	/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. */
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
		ScheduleExpression?: string | null;
		StartWindowMinutes?: number | null;
		CompletionWindowMinutes?: number | null;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		RecoveryPointTags?: Tags;
		RuleId?: string | null;
		CopyActions?: Array<CopyAction>;
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
	}
	export function CreateBackupRuleFormGroup() {
		return new FormGroup<BackupRuleFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			TargetBackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			StartWindowMinutes: new FormControl<number | null | undefined>(undefined),
			CompletionWindowMinutes: new FormControl<number | null | undefined>(undefined),
			RuleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackupPlanFromJSONOutput {

		/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. */
		BackupPlan?: BackupPlan;
	}
	export interface GetBackupPlanFromJSONOutputFormProperties {
	}
	export function CreateGetBackupPlanFromJSONOutputFormGroup() {
		return new FormGroup<GetBackupPlanFromJSONOutputFormProperties>({
		});

	}

	export interface GetBackupPlanFromTemplateOutput {

		/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. */
		BackupPlanDocument?: BackupPlan;
	}
	export interface GetBackupPlanFromTemplateOutputFormProperties {
	}
	export function CreateGetBackupPlanFromTemplateOutputFormGroup() {
		return new FormGroup<GetBackupPlanFromTemplateOutputFormProperties>({
		});

	}

	export interface GetBackupSelectionOutput {

		/** Used to specify a set of resources to a backup plan. */
		BackupSelection?: BackupSelection;
		SelectionId?: string | null;
		BackupPlanId?: string | null;
		CreationDate?: Date | null;
		CreatorRequestId?: string | null;
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


	/** Used to specify a set of resources to a backup plan. */
	export interface BackupSelection {

		/** Required */
		SelectionName: string;

		/** Required */
		IamRoleArn: string;
		Resources?: Array<string>;
		ListOfTags?: Array<Condition>;
	}

	/** Used to specify a set of resources to a backup plan. */
	export interface BackupSelectionFormProperties {

		/** Required */
		SelectionName: FormControl<string | null | undefined>,

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateBackupSelectionFormGroup() {
		return new FormGroup<BackupSelectionFormProperties>({
			SelectionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBackupVaultAccessPolicyOutput {
		BackupVaultName?: string | null;
		BackupVaultArn?: string | null;
		Policy?: string | null;
	}
	export interface GetBackupVaultAccessPolicyOutputFormProperties {
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetBackupVaultAccessPolicyOutputFormGroup() {
		return new FormGroup<GetBackupVaultAccessPolicyOutputFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackupVaultNotificationsOutput {
		BackupVaultName?: string | null;
		BackupVaultArn?: string | null;
		SNSTopicArn?: string | null;
		BackupVaultEvents?: Array<BackupVaultEvent>;
	}
	export interface GetBackupVaultNotificationsOutputFormProperties {
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		SNSTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateGetBackupVaultNotificationsOutputFormGroup() {
		return new FormGroup<GetBackupVaultNotificationsOutputFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			SNSTopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupVaultEvent { BACKUP_JOB_STARTED = 0, BACKUP_JOB_COMPLETED = 1, BACKUP_JOB_SUCCESSFUL = 2, BACKUP_JOB_FAILED = 3, BACKUP_JOB_EXPIRED = 4, RESTORE_JOB_STARTED = 5, RESTORE_JOB_COMPLETED = 6, RESTORE_JOB_SUCCESSFUL = 7, RESTORE_JOB_FAILED = 8, COPY_JOB_STARTED = 9, COPY_JOB_SUCCESSFUL = 10, COPY_JOB_FAILED = 11, RECOVERY_POINT_MODIFIED = 12, BACKUP_PLAN_CREATED = 13, BACKUP_PLAN_MODIFIED = 14 }

	export interface GetRecoveryPointRestoreMetadataOutput {
		BackupVaultArn?: string | null;
		RecoveryPointArn?: string | null;
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
		NextToken?: string | null;
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
		BackupJobId?: string | null;
		BackupVaultName?: string | null;
		BackupVaultArn?: string | null;
		RecoveryPointArn?: string | null;
		ResourceArn?: string | null;
		CreationDate?: Date | null;
		CompletionDate?: Date | null;
		State?: DescribeBackupJobOutputState | null;
		StatusMessage?: string | null;
		PercentDone?: string | null;
		BackupSizeInBytes?: number | null;
		IamRoleArn?: string | null;

		/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		ExpectedCompletionDate?: Date | null;
		StartBy?: Date | null;
		ResourceType?: string | null;
		BytesTransferred?: number | null;
	}

	/** Contains detailed information about a backup job. */
	export interface BackupJobFormProperties {
		BackupJobId: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		State: FormControl<DescribeBackupJobOutputState | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		PercentDone: FormControl<string | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		ExpectedCompletionDate: FormControl<Date | null | undefined>,
		StartBy: FormControl<Date | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		BytesTransferred: FormControl<number | null | undefined>,
	}
	export function CreateBackupJobFormGroup() {
		return new FormGroup<BackupJobFormProperties>({
			BackupJobId: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<DescribeBackupJobOutputState | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			PercentDone: new FormControl<string | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ExpectedCompletionDate: new FormControl<Date | null | undefined>(undefined),
			StartBy: new FormControl<Date | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BytesTransferred: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListBackupPlanTemplatesOutput {
		NextToken?: string | null;
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
		BackupPlanTemplateId?: string | null;
		BackupPlanTemplateName?: string | null;
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
		NextToken?: string | null;
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
		BackupPlanArn?: string | null;
		BackupPlanId?: string | null;
		CreationDate?: Date | null;
		DeletionDate?: Date | null;
		VersionId?: string | null;
		BackupPlanName?: string | null;
		CreatorRequestId?: string | null;
		LastExecutionDate?: Date | null;
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
		NextToken?: string | null;
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
		NextToken?: string | null;
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
		SelectionId?: string | null;
		SelectionName?: string | null;
		BackupPlanId?: string | null;
		CreationDate?: Date | null;
		CreatorRequestId?: string | null;
		IamRoleArn?: string | null;
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
			SelectionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BackupPlanId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBackupVaultsOutput {
		BackupVaultList?: Array<BackupVaultListMember>;
		NextToken?: string | null;
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
		BackupVaultName?: string | null;
		BackupVaultArn?: string | null;
		CreationDate?: Date | null;
		EncryptionKeyArn?: string | null;
		CreatorRequestId?: string | null;
		NumberOfRecoveryPoints?: number | null;
	}

	/** Contains metadata about a backup vault. */
	export interface BackupVaultListMemberFormProperties {
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		NumberOfRecoveryPoints: FormControl<number | null | undefined>,
	}
	export function CreateBackupVaultListMemberFormGroup() {
		return new FormGroup<BackupVaultListMemberFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			NumberOfRecoveryPoints: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListCopyJobsOutput {
		CopyJobs?: Array<CopyJob>;
		NextToken?: string | null;
	}
	export interface ListCopyJobsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCopyJobsOutputFormGroup() {
		return new FormGroup<ListCopyJobsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProtectedResourcesOutput {
		Results?: Array<ProtectedResource>;
		NextToken?: string | null;
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
		ResourceArn?: string | null;
		ResourceType?: string | null;
		LastBackupTime?: Date | null;
	}

	/** A structure that contains information about a backed-up resource. */
	export interface ProtectedResourceFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		LastBackupTime: FormControl<Date | null | undefined>,
	}
	export function CreateProtectedResourceFormGroup() {
		return new FormGroup<ProtectedResourceFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			LastBackupTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRecoveryPointsByBackupVaultOutput {
		NextToken?: string | null;
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
		RecoveryPointArn?: string | null;
		BackupVaultName?: string | null;
		BackupVaultArn?: string | null;
		ResourceArn?: string | null;
		ResourceType?: string | null;

		/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		IamRoleArn?: string | null;
		Status?: DescribeRecoveryPointOutputStatus | null;
		CreationDate?: Date | null;
		CompletionDate?: Date | null;
		BackupSizeInBytes?: number | null;

		/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		CalculatedLifecycle?: CalculatedLifecycle;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		EncryptionKeyArn?: string | null;
		IsEncrypted?: boolean | null;
		LastRestoreTime?: Date | null;
	}

	/** Contains detailed information about the recovery points stored in a backup vault. */
	export interface RecoveryPointByBackupVaultFormProperties {
		RecoveryPointArn: FormControl<string | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
		BackupVaultArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		Status: FormControl<DescribeRecoveryPointOutputStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		IsEncrypted: FormControl<boolean | null | undefined>,
		LastRestoreTime: FormControl<Date | null | undefined>,
	}
	export function CreateRecoveryPointByBackupVaultFormGroup() {
		return new FormGroup<RecoveryPointByBackupVaultFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			BackupVaultArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DescribeRecoveryPointOutputStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			IsEncrypted: new FormControl<boolean | null | undefined>(undefined),
			LastRestoreTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRecoveryPointsByResourceOutput {
		NextToken?: string | null;
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
		RecoveryPointArn?: string | null;
		CreationDate?: Date | null;
		Status?: DescribeRecoveryPointOutputStatus | null;
		EncryptionKeyArn?: string | null;
		BackupSizeBytes?: number | null;
		BackupVaultName?: string | null;
	}

	/** Contains detailed information about a saved recovery point. */
	export interface RecoveryPointByResourceFormProperties {
		RecoveryPointArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Status: FormControl<DescribeRecoveryPointOutputStatus | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		BackupSizeBytes: FormControl<number | null | undefined>,
		BackupVaultName: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryPointByResourceFormGroup() {
		return new FormGroup<RecoveryPointByResourceFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DescribeRecoveryPointOutputStatus | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			BackupSizeBytes: new FormControl<number | null | undefined>(undefined),
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
		});

	}

	export interface ListRestoreJobsOutput {
		RestoreJobs?: Array<RestoreJobsListMember>;
		NextToken?: string | null;
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
		RestoreJobId?: string | null;
		RecoveryPointArn?: string | null;
		CreationDate?: Date | null;
		CompletionDate?: Date | null;
		Status?: DescribeRestoreJobOutputStatus | null;
		StatusMessage?: string | null;
		PercentDone?: string | null;
		BackupSizeInBytes?: number | null;
		IamRoleArn?: string | null;
		ExpectedCompletionTimeMinutes?: number | null;
		CreatedResourceArn?: string | null;
	}

	/** Contains metadata about a restore job. */
	export interface RestoreJobsListMemberFormProperties {
		RestoreJobId: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		Status: FormControl<DescribeRestoreJobOutputStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		PercentDone: FormControl<string | null | undefined>,
		BackupSizeInBytes: FormControl<number | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
		ExpectedCompletionTimeMinutes: FormControl<number | null | undefined>,
		CreatedResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateRestoreJobsListMemberFormGroup() {
		return new FormGroup<RestoreJobsListMemberFormProperties>({
			RestoreJobId: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DescribeRestoreJobOutputStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			PercentDone: new FormControl<string | null | undefined>(undefined),
			BackupSizeInBytes: new FormControl<number | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			ExpectedCompletionTimeMinutes: new FormControl<number | null | undefined>(undefined),
			CreatedResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsOutput {
		NextToken?: string | null;
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
		BackupJobId?: string | null;
		RecoveryPointArn?: string | null;
		CreationDate?: Date | null;
	}
	export interface StartBackupJobOutputFormProperties {
		BackupJobId: FormControl<string | null | undefined>,
		RecoveryPointArn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateStartBackupJobOutputFormGroup() {
		return new FormGroup<StartBackupJobOutputFormProperties>({
			BackupJobId: new FormControl<string | null | undefined>(undefined),
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StartCopyJobOutput {
		CopyJobId?: string | null;
		CreationDate?: Date | null;
	}
	export interface StartCopyJobOutputFormProperties {
		CopyJobId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateStartCopyJobOutputFormGroup() {
		return new FormGroup<StartCopyJobOutputFormProperties>({
			CopyJobId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StartRestoreJobOutput {
		RestoreJobId?: string | null;
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
		BackupPlanId?: string | null;
		BackupPlanArn?: string | null;
		CreationDate?: Date | null;
		VersionId?: string | null;
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

	export interface UpdateRecoveryPointLifecycleOutput {
		BackupVaultArn?: string | null;
		RecoveryPointArn?: string | null;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;

		/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
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

	export enum BackupJobState { CREATED = 0, PENDING = 1, RUNNING = 2, ABORTING = 3, ABORTED = 4, COMPLETED = 5, FAILED = 6, EXPIRED = 7 }


	/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.  */
	export interface BackupPlanInput {

		/** Required */
		BackupPlanName: string;

		/** Required */
		Rules: Array<BackupRuleInput>;
	}

	/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.  */
	export interface BackupPlanInputFormProperties {

		/** Required */
		BackupPlanName: FormControl<string | null | undefined>,
	}
	export function CreateBackupPlanInputFormGroup() {
		return new FormGroup<BackupPlanInputFormProperties>({
			BackupPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConditionType { STRINGEQUALS = 0 }

	export interface CreateBackupPlanInput {

		/**
		 * Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
		 * Required
		 */
		BackupPlan: BackupPlanInput;
		BackupPlanTags?: Tags;
		CreatorRequestId?: string | null;
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

		/**
		 * Used to specify a set of resources to a backup plan.
		 * Required
		 */
		BackupSelection: BackupSelection;
		CreatorRequestId?: string | null;
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
		EncryptionKeyArn?: string | null;
		CreatorRequestId?: string | null;
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

	export interface DeleteBackupVaultNotificationsInput {
	}
	export interface DeleteBackupVaultNotificationsInputFormProperties {
	}
	export function CreateDeleteBackupVaultNotificationsInputFormGroup() {
		return new FormGroup<DeleteBackupVaultNotificationsInputFormProperties>({
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

	export enum RecoveryPointStatus { COMPLETED = 0, PARTIAL = 1, DELETING = 2, EXPIRED = 3 }

	export enum StorageClass { WARM = 0, COLD = 1, DELETED = 2 }

	export interface DescribeRegionSettingsInput {
	}
	export interface DescribeRegionSettingsInputFormProperties {
	}
	export function CreateDescribeRegionSettingsInputFormGroup() {
		return new FormGroup<DescribeRegionSettingsInputFormProperties>({
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

	export enum RestoreJobStatus { PENDING = 0, RUNNING = 1, COMPLETED = 2, ABORTED = 3, FAILED = 4 }

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

	export interface ListRecoveryPointsByResourceInput {
	}
	export interface ListRecoveryPointsByResourceInputFormProperties {
	}
	export function CreateListRecoveryPointsByResourceInputFormGroup() {
		return new FormGroup<ListRecoveryPointsByResourceInputFormProperties>({
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
		Policy?: string | null;
	}
	export interface PutBackupVaultAccessPolicyInputFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutBackupVaultAccessPolicyInputFormGroup() {
		return new FormGroup<PutBackupVaultAccessPolicyInputFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
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
		IdempotencyToken?: string | null;
		StartWindowMinutes?: number | null;
		CompleteWindowMinutes?: number | null;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		RecoveryPointTags?: Tags;
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
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
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
		IdempotencyToken?: string | null;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
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
			SourceBackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			DestinationBackupVaultArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRestoreJobInput {

		/** Required */
		RecoveryPointArn: string;

		/** Required */
		Metadata: Metadata;

		/** Required */
		IamRoleArn: string;
		IdempotencyToken?: string | null;
		ResourceType?: string | null;
	}
	export interface StartRestoreJobInputFormProperties {

		/** Required */
		RecoveryPointArn: FormControl<string | null | undefined>,

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateStartRestoreJobInputFormGroup() {
		return new FormGroup<StartRestoreJobInputFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
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

		/**
		 * Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
		 * Required
		 */
		BackupPlan: BackupPlanInput;
	}
	export interface UpdateBackupPlanInputFormProperties {
	}
	export function CreateUpdateBackupPlanInputFormGroup() {
		return new FormGroup<UpdateBackupPlanInputFormProperties>({
		});

	}

	export interface UpdateRecoveryPointLifecycleInput {

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
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
	}
	export interface UpdateRegionSettingsInputFormProperties {
	}
	export function CreateUpdateRegionSettingsInputFormGroup() {
		return new FormGroup<UpdateRegionSettingsInputFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Backup plans are documents that contain information that AWS Backup uses to schedule tasks that create recovery points of resources.</p> <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, an <code>AlreadyExistsException</code> is returned.</p>
		 * Put backup/plans/
		 * @return {CreateBackupPlanOutput} Success
		 */
		CreateBackupPlan(requestBody: CreateBackupPlanPutBody): Observable<CreateBackupPlanOutput> {
			return this.http.put<CreateBackupPlanOutput>(this.baseUri + 'backup/plans/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata of your saved backup plans, including Amazon Resource Names (ARNs), plan IDs, creation and deletion dates, version IDs, plan names, and creator request IDs.
		 * Get backup/plans/
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 * @param {boolean} includeDeleted A Boolean value with a default value of <code>FALSE</code> that returns deleted backup plans when set to <code>TRUE</code>.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBackupPlansOutput} Success
		 */
		ListBackupPlans(nextToken: string | null | undefined, maxResults: number | null | undefined, includeDeleted: boolean | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBackupPlansOutput> {
			return this.http.get<ListBackupPlansOutput>(this.baseUri + 'backup/plans/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&includeDeleted=' + includeDeleted + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a JSON document that specifies a set of resources to assign to a backup plan. Resources can be included by specifying patterns for a <code>ListOfTags</code> and selected <code>Resources</code>. </p> <p>For example, consider the following patterns:</p> <ul> <li> <p> <code>Resources: "arn:aws:ec2:region:account-id:volume/volume-id"</code> </p> </li> <li> <p> <code>ConditionKey:"department"</code> </p> <p> <code>ConditionValue:"finance"</code> </p> <p> <code>ConditionType:"STRINGEQUALS"</code> </p> </li> <li> <p> <code>ConditionKey:"importance"</code> </p> <p> <code>ConditionValue:"critical"</code> </p> <p> <code>ConditionType:"STRINGEQUALS"</code> </p> </li> </ul> <p>Using these patterns would back up all Amazon Elastic Block Store (Amazon EBS) volumes that are tagged as <code>"department=finance"</code>, <code>"importance=critical"</code>, in addition to an EBS volume with the specified volume Id.</p> <p>Resources and conditions are additive in that all resources that match the pattern are selected. This shouldn't be confused with a logical AND, where all conditions must match. The matching patterns are logically 'put together using the OR operator. In other words, all patterns that match are selected for backup.</p>
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
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBackupSelectionsOutput} Success
		 */
		ListBackupSelections(backupPlanId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBackupSelectionsOutput> {
			return this.http.get<ListBackupSelectionsOutput>(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '/selections/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a logical container where backups are stored. A <code>CreateBackupVault</code> request includes a name, optionally one or more resource tags, an encryption key, and a request ID.</p> <note> <p>Sensitive data, such as passport numbers, should not be included the name of a backup vault.</p> </note>
		 * Put backup-vaults/{backupVaultName}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {CreateBackupVaultOutput} Success
		 */
		CreateBackupVault(backupVaultName: string, requestBody: CreateBackupVaultPutBody): Observable<CreateBackupVaultOutput> {
			return this.http.put<CreateBackupVaultOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.
		 * Delete backup-vaults/{backupVaultName}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {void} Success
		 */
		DeleteBackupVault(backupVaultName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata about a backup vault specified by its name.
		 * Get backup-vaults/{backupVaultName}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {DescribeBackupVaultOutput} Success
		 */
		DescribeBackupVault(backupVaultName: string): Observable<DescribeBackupVaultOutput> {
			return this.http.get<DescribeBackupVaultOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)), {});
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
		 * Replaces the body of a saved backup plan identified by its <code>backupPlanId</code> with the input document in JSON format. The new version is uniquely identified by a <code>VersionId</code>.
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
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {void} Success
		 */
		DeleteBackupVaultAccessPolicy(backupVaultName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/access-policy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the access policy document that is associated with the named backup vault.
		 * Get backup-vaults/{backupVaultName}/access-policy
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {GetBackupVaultAccessPolicyOutput} Success
		 */
		GetBackupVaultAccessPolicy(backupVaultName: string): Observable<GetBackupVaultAccessPolicyOutput> {
			return this.http.get<GetBackupVaultAccessPolicyOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/access-policy', {});
		}

		/**
		 * Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format.
		 * Put backup-vaults/{backupVaultName}/access-policy
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {void} Success
		 */
		PutBackupVaultAccessPolicy(backupVaultName: string, requestBody: PutBackupVaultAccessPolicyPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/access-policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {GetBackupVaultNotificationsOutput} Success
		 */
		GetBackupVaultNotifications(backupVaultName: string): Observable<GetBackupVaultNotificationsOutput> {
			return this.http.get<GetBackupVaultNotificationsOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/notification-configuration', {});
		}

		/**
		 * Turns on notifications on a backup vault for the specified topic and events.
		 * Put backup-vaults/{backupVaultName}/notification-configuration
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @return {void} Success
		 */
		PutBackupVaultNotifications(backupVaultName: string, requestBody: PutBackupVaultNotificationsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/notification-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the recovery point specified by a recovery point ID.
		 * Delete backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {string} recoveryPointArn An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * @return {void} Success
		 */
		DeleteRecoveryPoint(backupVaultName: string, recoveryPointArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/' + (recoveryPointArn == null ? '' : encodeURIComponent(recoveryPointArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.
		 * Get backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {string} recoveryPointArn An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * @return {DescribeRecoveryPointOutput} Success
		 */
		DescribeRecoveryPoint(backupVaultName: string, recoveryPointArn: string): Observable<DescribeRecoveryPointOutput> {
			return this.http.get<DescribeRecoveryPointOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/' + (recoveryPointArn == null ? '' : encodeURIComponent(recoveryPointArn)), {});
		}

		/**
		 * <p>Sets the transition lifecycle of a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>
		 * Post backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {string} recoveryPointArn An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * @return {UpdateRecoveryPointLifecycleOutput} Success
		 */
		UpdateRecoveryPointLifecycle(backupVaultName: string, recoveryPointArn: string, requestBody: UpdateRecoveryPointLifecyclePostBody): Observable<UpdateRecoveryPointLifecycleOutput> {
			return this.http.post<UpdateRecoveryPointLifecycleOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/' + (recoveryPointArn == null ? '' : encodeURIComponent(recoveryPointArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata associated with creating a backup of a resource.
		 * Get backup-jobs/{backupJobId}
		 * @param {string} backupJobId Uniquely identifies a request to AWS Backup to back up a resource.
		 * @return {DescribeBackupJobOutput} Success
		 */
		DescribeBackupJob(backupJobId: string): Observable<DescribeBackupJobOutput> {
			return this.http.get<DescribeBackupJobOutput>(this.baseUri + 'backup-jobs/' + (backupJobId == null ? '' : encodeURIComponent(backupJobId)), {});
		}

		/**
		 * Attempts to cancel a job to create a one-time backup of a resource.
		 * Post backup-jobs/{backupJobId}
		 * @param {string} backupJobId Uniquely identifies a request to AWS Backup to back up a resource.
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
		 * Returns information about a saved resource, including the last time it was backed up, its Amazon Resource Name (ARN), and the AWS service type of the saved resource.
		 * Get resources/{resourceArn}
		 * @param {string} resourceArn An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
		 * @return {DescribeProtectedResourceOutput} Success
		 */
		DescribeProtectedResource(resourceArn: string): Observable<DescribeProtectedResourceOutput> {
			return this.http.get<DescribeProtectedResourceOutput>(this.baseUri + 'resources/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Returns the current service opt-in settings for the region. If the service has a value set to true, AWS Backup will attempt to protect that service's resources in this region, when included in an on-demand backup or scheduled backup plan. If the value is set to false for a service, AWS Backup will not attempt to protect that service's resources in this region.
		 * Get account-settings
		 * @return {DescribeRegionSettingsOutput} Success
		 */
		DescribeRegionSettings(): Observable<DescribeRegionSettingsOutput> {
			return this.http.get<DescribeRegionSettingsOutput>(this.baseUri + 'account-settings', {});
		}

		/**
		 * Updates the current service opt-in settings for the region. If the service has a value set to true, AWS Backup will attempt to protect that service's resources in this region, when included in an on-demand backup or scheduled backup plan. If the value is set to false for a service, AWS Backup will not attempt to protect that service's resources in this region.
		 * Put account-settings
		 * @return {void} Success
		 */
		UpdateRegionSettings(requestBody: UpdateRegionSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Returns the backup plan that is specified by the plan ID as a backup template.
		 * Get backup/plans/{backupPlanId}/toTemplate/
		 * @param {string} backupPlanId Uniquely identifies a backup plan.
		 * @return {ExportBackupPlanTemplateOutput} Success
		 */
		ExportBackupPlanTemplate(backupPlanId: string): Observable<ExportBackupPlanTemplateOutput> {
			return this.http.get<ExportBackupPlanTemplateOutput>(this.baseUri + 'backup/plans/' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '/toTemplate/', {});
		}

		/**
		 * Returns the body of a backup plan in JSON format, in addition to plan metadata.
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
		 * Returns a set of metadata key-value pairs that were used to create the backup.
		 * Get backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/restore-metadata
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {string} recoveryPointArn An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * @return {GetRecoveryPointRestoreMetadataOutput} Success
		 */
		GetRecoveryPointRestoreMetadata(backupVaultName: string, recoveryPointArn: string): Observable<GetRecoveryPointRestoreMetadataOutput> {
			return this.http.get<GetRecoveryPointRestoreMetadataOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/' + (recoveryPointArn == null ? '' : encodeURIComponent(recoveryPointArn)) + '/restore-metadata', {});
		}

		/**
		 * Returns the AWS resource types supported by AWS Backup.
		 * Get supported-resource-types
		 * @return {GetSupportedResourceTypesOutput} Success
		 */
		GetSupportedResourceTypes(): Observable<GetSupportedResourceTypesOutput> {
			return this.http.get<GetSupportedResourceTypesOutput>(this.baseUri + 'supported-resource-types', {});
		}

		/**
		 * Returns metadata about your backup jobs.
		 * Get backup-jobs/
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 * @param {string} resourceArn Returns only backup jobs that match the specified resource Amazon Resource Name (ARN).
		 * @param {DescribeBackupJobOutputState} state Returns only backup jobs that are in the specified state.
		 * @param {string} backupVaultName Returns only backup jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {Date} createdBefore Returns only backup jobs that were created before the specified date.
		 * @param {Date} createdAfter Returns only backup jobs that were created after the specified date.
		 * @param {string} resourceType <p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for AWS Storage Gateway</p> </li> </ul>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBackupJobsOutput} Success
		 */
		ListBackupJobs(nextToken: string | null | undefined, maxResults: number | null | undefined, resourceArn: string | null | undefined, state: DescribeBackupJobOutputState | null | undefined, backupVaultName: string | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, resourceType: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBackupJobsOutput> {
			return this.http.get<ListBackupJobsOutput>(this.baseUri + 'backup-jobs/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&state=' + state + '&backupVaultName=' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns metadata of your saved backup plan templates, including the template ID, name, and the creation and deletion dates.
		 * Get backup/template/plans
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
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
		 * @param {string} resourceArn Returns only copy jobs that match the specified resource Amazon Resource Name (ARN). 
		 * @param {CopyJobState} state Returns only copy jobs that are in the specified state.
		 * @param {Date} createdBefore Returns only copy jobs that were created before the specified date.
		 * @param {Date} createdAfter Returns only copy jobs that were created after the specified date.
		 * @param {string} resourceType <p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for AWS Storage Gateway</p> </li> </ul>
		 * @param {string} destinationVaultArn An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy from; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCopyJobsOutput} Success
		 */
		ListCopyJobs(nextToken: string | null | undefined, maxResults: number | null | undefined, resourceArn: string | null | undefined, state: CopyJobState | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, resourceType: string | null | undefined, destinationVaultArn: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListCopyJobsOutput> {
			return this.http.get<ListCopyJobsOutput>(this.baseUri + 'copy-jobs/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&state=' + state + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&destinationVaultArn=' + (destinationVaultArn == null ? '' : encodeURIComponent(destinationVaultArn)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns an array of resources successfully backed up by AWS Backup, including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.
		 * Get resources/
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
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
		 * @param {string} backupVaultName The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 * @param {string} resourceArn Returns only recovery points that match the specified resource Amazon Resource Name (ARN).
		 * @param {string} resourceType Returns only recovery points that match the specified resource type.
		 * @param {string} backupPlanId Returns only recovery points that match the specified backup plan ID.
		 * @param {Date} createdBefore Returns only recovery points that were created before the specified timestamp.
		 * @param {Date} createdAfter Returns only recovery points that were created after the specified timestamp.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRecoveryPointsByBackupVaultOutput} Success
		 */
		ListRecoveryPointsByBackupVault(backupVaultName: string, nextToken: string | null | undefined, maxResults: number | null | undefined, resourceArn: string | null | undefined, resourceType: string | null | undefined, backupPlanId: string | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRecoveryPointsByBackupVaultOutput> {
			return this.http.get<ListRecoveryPointsByBackupVaultOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&backupPlanId=' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns detailed information about recovery points of the type specified by a resource Amazon Resource Name (ARN).
		 * Get resources/{resourceArn}/recovery-points/
		 * @param {string} resourceArn An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRecoveryPointsByResourceOutput} Success
		 */
		ListRecoveryPointsByResource(resourceArn: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRecoveryPointsByResourceOutput> {
			return this.http.get<ListRecoveryPointsByResourceOutput>(this.baseUri + 'resources/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/recovery-points/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of jobs that AWS Backup initiated to restore a saved resource, including metadata about the recovery process.
		 * Get restore-jobs/
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRestoreJobsOutput} Success
		 */
		ListRestoreJobs(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRestoreJobsOutput> {
			return this.http.get<ListRestoreJobsOutput>(this.baseUri + 'restore-jobs/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of key-value pairs assigned to a target recovery point, backup plan, or backup vault.</p> <note> <p> <code>ListTags</code> are currently only supported with Amazon EFS backups.</p> </note>
		 * Get tags/{resourceArn}/
		 * @param {string} resourceArn An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the type of resource. Valid targets for <code>ListTags</code> are recovery points, backup plans, and backup vaults.
		 * @param {string} nextToken The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.
		 * @param {number} maxResults The maximum number of items to be returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsOutput} Success
		 */
		ListTags(resourceArn: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListTagsOutput> {
			return this.http.get<ListTagsOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Starts a job to create a one-time backup of the specified resource.
		 * Put backup-jobs
		 * @return {StartBackupJobOutput} Success
		 */
		StartBackupJob(requestBody: StartBackupJobPutBody): Observable<StartBackupJobOutput> {
			return this.http.put<StartBackupJobOutput>(this.baseUri + 'backup-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a job to create a one-time copy of the specified resource.
		 * Put copy-jobs
		 * @return {StartCopyJobOutput} Success
		 */
		StartCopyJob(requestBody: StartCopyJobPutBody): Observable<StartCopyJobOutput> {
			return this.http.put<StartCopyJobOutput>(this.baseUri + 'copy-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Recovers the saved resource identified by an Amazon Resource Name (ARN). </p> <p>If the resource ARN is included in the request, then the last complete backup of that resource is recovered. If the ARN of a recovery point is supplied, then that recovery point is restored.</p>
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
		 * Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
		 * Required
		 */
		BackupPlan: CreateBackupPlanPutBodyBackupPlan;

		/** To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan. */
		BackupPlanTags?: {[id: string]: string };

		/** Identifies the request and allows failed requests to be retried without the risk of executing the operation twice. If the request includes a <code>CreatorRequestId</code> that matches an existing backup plan, that plan is returned. This parameter is optional. */
		CreatorRequestId?: string | null;
	}
	export interface CreateBackupPlanPutBodyFormProperties {

		/** To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan. */
		BackupPlanTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Identifies the request and allows failed requests to be retried without the risk of executing the operation twice. If the request includes a <code>CreatorRequestId</code> that matches an existing backup plan, that plan is returned. This parameter is optional. */
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupPlanPutBodyFormGroup() {
		return new FormGroup<CreateBackupPlanPutBodyFormProperties>({
			BackupPlanTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackupPlanPutBodyBackupPlan {
		BackupPlanName?: string | null;
		Rules?: Array<BackupRuleInput>;
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
		 * Used to specify a set of resources to a backup plan.
		 * Required
		 */
		BackupSelection: CreateBackupSelectionPutBodyBackupSelection;

		/** A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice. */
		CreatorRequestId?: string | null;
	}
	export interface CreateBackupSelectionPutBodyFormProperties {

		/** A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice. */
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupSelectionPutBodyFormGroup() {
		return new FormGroup<CreateBackupSelectionPutBodyFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackupSelectionPutBodyBackupSelection {
		SelectionName?: string | null;
		IamRoleArn?: string | null;
		Resources?: Array<string>;
		ListOfTags?: Array<Condition>;
	}
	export interface CreateBackupSelectionPutBodyBackupSelectionFormProperties {
		SelectionName: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupSelectionPutBodyBackupSelectionFormGroup() {
		return new FormGroup<CreateBackupSelectionPutBodyBackupSelectionFormProperties>({
			SelectionName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackupVaultPutBody {

		/** Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair. */
		BackupVaultTags?: {[id: string]: string };

		/** The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>. */
		EncryptionKeyArn?: string | null;

		/** A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice. */
		CreatorRequestId?: string | null;
	}
	export interface CreateBackupVaultPutBodyFormProperties {

		/** Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair. */
		BackupVaultTags: FormControl<{[id: string]: string } | null | undefined>,

		/** The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>. */
		EncryptionKeyArn: FormControl<string | null | undefined>,

		/** A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice. */
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupVaultPutBodyFormGroup() {
		return new FormGroup<CreateBackupVaultPutBodyFormProperties>({
			BackupVaultTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBackupPlanPostBody {

		/**
		 * Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
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
		BackupPlanName?: string | null;
		Rules?: Array<BackupRuleInput>;
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

	export interface PutBackupVaultNotificationsPutBody {

		/**
		 * The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.
		 * Required
		 */
		SNSTopicArn: string;

		/**
		 * An array of events that indicate the status of jobs to back up resources to the backup vault.
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

	export interface UpdateRecoveryPointLifecyclePostBody {

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
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

	export interface UpdateRegionSettingsPutBody {

		/** Updates the list of services along with the opt-in preferences for the region. */
		ResourceTypeOptInPreference?: {[id: string]: boolean };
	}
	export interface UpdateRegionSettingsPutBodyFormProperties {

		/** Updates the list of services along with the opt-in preferences for the region. */
		ResourceTypeOptInPreference: FormControl<{[id: string]: boolean } | null | undefined>,
	}
	export function CreateUpdateRegionSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateRegionSettingsPutBodyFormProperties>({
			ResourceTypeOptInPreference: new FormControl<{[id: string]: boolean } | null | undefined>(undefined),
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
		 * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
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

		/** A customer chosen string that can be used to distinguish between calls to <code>StartBackupJob</code>. */
		IdempotencyToken?: string | null;

		/** A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. */
		StartWindowMinutes?: number | null;

		/** A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by AWS Backup. This value is optional. */
		CompleteWindowMinutes?: number | null;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: StartBackupJobPutBodyLifecycle;

		/** To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. */
		RecoveryPointTags?: {[id: string]: string };
	}
	export interface StartBackupJobPutBodyFormProperties {

		/**
		 * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
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

		/** A customer chosen string that can be used to distinguish between calls to <code>StartBackupJob</code>. */
		IdempotencyToken: FormControl<string | null | undefined>,

		/** A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. */
		StartWindowMinutes: FormControl<number | null | undefined>,

		/** A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by AWS Backup. This value is optional. */
		CompleteWindowMinutes: FormControl<number | null | undefined>,

		/** To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. */
		RecoveryPointTags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartBackupJobPutBodyFormGroup() {
		return new FormGroup<StartBackupJobPutBodyFormProperties>({
			BackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			StartWindowMinutes: new FormControl<number | null | undefined>(undefined),
			CompleteWindowMinutes: new FormControl<number | null | undefined>(undefined),
			RecoveryPointTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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
		 * The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
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

		/** A customer chosen string that can be used to distinguish between calls to <code>StartCopyJob</code>. */
		IdempotencyToken?: string | null;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: StartCopyJobPutBodyLifecycle;
	}
	export interface StartCopyJobPutBodyFormProperties {

		/**
		 * An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
		 * Required
		 */
		RecoveryPointArn: FormControl<string | null | undefined>,

		/**
		 * The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
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

		/** A customer chosen string that can be used to distinguish between calls to <code>StartCopyJob</code>. */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateStartCopyJobPutBodyFormGroup() {
		return new FormGroup<StartCopyJobPutBodyFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceBackupVaultName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
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

	export interface StartRestoreJobPutBody {

		/**
		 * An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * Required
		 */
		RecoveryPointArn: string;

		/**
		 * <p>A set of metadata key-value pairs. Contains information, such as a resource name, required to restore a recovery point.</p> <p> You can get configuration metadata about a resource at the time it was backed up by calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists.</p> <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p> <ul> <li> <p> <code>file-system-id</code>: ID of the Amazon EFS file system that is backed up by AWS Backup. Returned in <code>GetRecoveryPointRestoreMetadata</code>.</p> </li> <li> <p> <code>Encrypted</code>: A Boolean value that, if true, specifies that the file system is encrypted. If <code>KmsKeyId</code> is specified, <code>Encrypted</code> must be set to <code>true</code>.</p> </li> <li> <p> <code>KmsKeyId</code>: Specifies the AWS KMS key that is used to encrypt the restored file system.</p> </li> <li> <p> <code>PerformanceMode</code>: Specifies the throughput mode of the file system.</p> </li> <li> <p> <code>CreationToken</code>: A user-supplied value that ensures the uniqueness (idempotency) of the request.</p> </li> <li> <p> <code>newFileSystem</code>: A Boolean value that, if true, specifies that the recovery point is restored to a new Amazon EFS file system.</p> </li> </ul>
		 * Required
		 */
		Metadata: {[id: string]: string };

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that AWS Backup uses to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.
		 * Required
		 */
		IamRoleArn: string;

		/** A customer chosen string that can be used to distinguish between calls to <code>StartRestoreJob</code>. */
		IdempotencyToken?: string | null;

		/** <p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>Storage Gateway</code> for AWS Storage Gateway</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>DDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> </ul> */
		ResourceType?: string | null;
	}
	export interface StartRestoreJobPutBodyFormProperties {

		/**
		 * An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.
		 * Required
		 */
		RecoveryPointArn: FormControl<string | null | undefined>,

		/**
		 * <p>A set of metadata key-value pairs. Contains information, such as a resource name, required to restore a recovery point.</p> <p> You can get configuration metadata about a resource at the time it was backed up by calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists.</p> <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p> <ul> <li> <p> <code>file-system-id</code>: ID of the Amazon EFS file system that is backed up by AWS Backup. Returned in <code>GetRecoveryPointRestoreMetadata</code>.</p> </li> <li> <p> <code>Encrypted</code>: A Boolean value that, if true, specifies that the file system is encrypted. If <code>KmsKeyId</code> is specified, <code>Encrypted</code> must be set to <code>true</code>.</p> </li> <li> <p> <code>KmsKeyId</code>: Specifies the AWS KMS key that is used to encrypt the restored file system.</p> </li> <li> <p> <code>PerformanceMode</code>: Specifies the throughput mode of the file system.</p> </li> <li> <p> <code>CreationToken</code>: A user-supplied value that ensures the uniqueness (idempotency) of the request.</p> </li> <li> <p> <code>newFileSystem</code>: A Boolean value that, if true, specifies that the recovery point is restored to a new Amazon EFS file system.</p> </li> </ul>
		 * Required
		 */
		Metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that AWS Backup uses to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.
		 * Required
		 */
		IamRoleArn: FormControl<string | null | undefined>,

		/** A customer chosen string that can be used to distinguish between calls to <code>StartRestoreJob</code>. */
		IdempotencyToken: FormControl<string | null | undefined>,

		/** <p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>Storage Gateway</code> for AWS Storage Gateway</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>DDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> </ul> */
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateStartRestoreJobPutBodyFormGroup() {
		return new FormGroup<StartRestoreJobPutBodyFormProperties>({
			RecoveryPointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\-\_\.]{1,50}$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create.
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

