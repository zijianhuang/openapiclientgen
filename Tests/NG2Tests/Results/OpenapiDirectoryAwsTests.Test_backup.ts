import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateBackupPlanOutput {
		BackupPlanId?: string;
		BackupPlanArn?: string;
		CreationDate?: Date;
		VersionId?: string;
	}


	/** Specifies a scheduled task used to back up a selection of resources. */
	export interface BackupRuleInput {
		RuleName: string;
		TargetBackupVaultName: string;
		ScheduleExpression?: string;
		StartWindowMinutes?: number;
		CompletionWindowMinutes?: number;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		RecoveryPointTags?: Tags;
		CopyActions?: Array<CopyAction>;
	}


	/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
	export interface Lifecycle {
		MoveToColdStorageAfterDays?: number;
		DeleteAfterDays?: number;
	}

	export interface Tags {
	}


	/** The details of the copy operation. */
	export interface CopyAction {

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		DestinationBackupVaultArn: string;
	}

	export interface LimitExceededException {
	}

	export interface AlreadyExistsException {
	}

	export interface InvalidParameterValueException {
	}

	export interface MissingParameterValueException {
	}

	export interface ServiceUnavailableException {
	}

	export interface CreateBackupSelectionOutput {
		SelectionId?: string;
		BackupPlanId?: string;
		CreationDate?: Date;
	}


	/** Contains an array of triplets made up of a condition type (such as <code>STRINGEQUALS</code>), a key, and a value. Conditions are used to filter resources in a selection that is assigned to a backup plan. */
	export interface Condition {
		ConditionType: ConditionConditionType;
		ConditionKey: string;
		ConditionValue: string;
	}

	export enum ConditionConditionType { STRINGEQUALS = 0 }

	export interface CreateBackupVaultOutput {
		BackupVaultName?: string;
		BackupVaultArn?: string;
		CreationDate?: Date;
	}

	export interface DeleteBackupPlanOutput {
		BackupPlanId?: string;
		BackupPlanArn?: string;
		DeletionDate?: Date;
		VersionId?: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface InvalidRequestException {
	}

	export interface DescribeBackupJobOutput {
		BackupJobId?: string;
		BackupVaultName?: string;
		BackupVaultArn?: string;
		RecoveryPointArn?: string;
		ResourceArn?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		State?: DescribeBackupJobOutputState;
		StatusMessage?: string;
		PercentDone?: string;
		BackupSizeInBytes?: number;
		IamRoleArn?: string;

		/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		ResourceType?: string;
		BytesTransferred?: number;
		ExpectedCompletionDate?: Date;
		StartBy?: Date;
	}

	export enum DescribeBackupJobOutputState { CREATED = 0, PENDING = 1, RUNNING = 2, ABORTING = 3, ABORTED = 4, COMPLETED = 5, FAILED = 6, EXPIRED = 7 }


	/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
	export interface RecoveryPointCreator {
		BackupPlanId?: string;
		BackupPlanArn?: string;
		BackupPlanVersion?: string;
		BackupRuleId?: string;
	}

	export interface DependencyFailureException {
	}

	export interface DescribeBackupVaultOutput {
		BackupVaultName?: string;
		BackupVaultArn?: string;
		EncryptionKeyArn?: string;
		CreationDate?: Date;
		CreatorRequestId?: string;
		NumberOfRecoveryPoints?: number;
	}

	export interface DescribeCopyJobOutput {

		/** Contains detailed information about a copy job. */
		CopyJob?: CopyJob;
	}


	/** Contains detailed information about a copy job. */
	export interface CopyJob {
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
		BackupSizeInBytes?: number;
		IamRoleArn?: string;

		/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		ResourceType?: string;
	}

	export enum CopyJobState { CREATED = 0, RUNNING = 1, COMPLETED = 2, FAILED = 3 }

	export interface DescribeProtectedResourceOutput {
		ResourceArn?: string;
		ResourceType?: string;
		LastBackupTime?: Date;
	}

	export interface DescribeRecoveryPointOutput {
		RecoveryPointArn?: string;
		BackupVaultName?: string;
		BackupVaultArn?: string;
		ResourceArn?: string;
		ResourceType?: string;

		/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		IamRoleArn?: string;
		Status?: DescribeRecoveryPointOutputStatus;
		CreationDate?: Date;
		CompletionDate?: Date;
		BackupSizeInBytes?: number;

		/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		CalculatedLifecycle?: CalculatedLifecycle;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		EncryptionKeyArn?: string;
		IsEncrypted?: boolean;
		StorageClass?: DescribeRecoveryPointOutputStorageClass;
		LastRestoreTime?: Date;
	}

	export enum DescribeRecoveryPointOutputStatus { COMPLETED = 0, PARTIAL = 1, DELETING = 2, EXPIRED = 3 }


	/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
	export interface CalculatedLifecycle {
		MoveToColdStorageAt?: Date;
		DeleteAt?: Date;
	}

	export enum DescribeRecoveryPointOutputStorageClass { WARM = 0, COLD = 1, DELETED = 2 }

	export interface DescribeRegionSettingsOutput {
		ResourceTypeOptInPreference?: ResourceTypeOptInPreference;
	}

	export interface ResourceTypeOptInPreference {
	}

	export interface DescribeRestoreJobOutput {
		RestoreJobId?: string;
		RecoveryPointArn?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		Status?: DescribeRestoreJobOutputStatus;
		StatusMessage?: string;
		PercentDone?: string;
		BackupSizeInBytes?: number;
		IamRoleArn?: string;
		ExpectedCompletionTimeMinutes?: number;
		CreatedResourceArn?: string;
	}

	export enum DescribeRestoreJobOutputStatus { PENDING = 0, RUNNING = 1, COMPLETED = 2, ABORTED = 3, FAILED = 4 }

	export interface ExportBackupPlanTemplateOutput {
		BackupPlanTemplateJson?: string;
	}

	export interface GetBackupPlanOutput {

		/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. */
		BackupPlan?: BackupPlan;
		BackupPlanId?: string;
		BackupPlanArn?: string;
		VersionId?: string;
		CreatorRequestId?: string;
		CreationDate?: Date;
		DeletionDate?: Date;
		LastExecutionDate?: Date;
	}


	/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. */
	export interface BackupPlan {
		BackupPlanName: string;
		Rules: Array<BackupRule>;
	}


	/** Specifies a scheduled task used to back up a selection of resources. */
	export interface BackupRule {
		RuleName: string;
		TargetBackupVaultName: string;
		ScheduleExpression?: string;
		StartWindowMinutes?: number;
		CompletionWindowMinutes?: number;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		RecoveryPointTags?: Tags;
		RuleId?: string;
		CopyActions?: Array<CopyAction>;
	}

	export interface GetBackupPlanFromJSONOutput {

		/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. */
		BackupPlan?: BackupPlan;
	}

	export interface GetBackupPlanFromTemplateOutput {

		/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources. */
		BackupPlanDocument?: BackupPlan;
	}

	export interface GetBackupSelectionOutput {

		/** Used to specify a set of resources to a backup plan. */
		BackupSelection?: BackupSelection;
		SelectionId?: string;
		BackupPlanId?: string;
		CreationDate?: Date;
		CreatorRequestId?: string;
	}


	/** Used to specify a set of resources to a backup plan. */
	export interface BackupSelection {
		SelectionName: string;
		IamRoleArn: string;
		Resources?: Array<string>;
		ListOfTags?: Array<Condition>;
	}

	export interface GetBackupVaultAccessPolicyOutput {
		BackupVaultName?: string;
		BackupVaultArn?: string;
		Policy?: string;
	}

	export interface GetBackupVaultNotificationsOutput {
		BackupVaultName?: string;
		BackupVaultArn?: string;
		SNSTopicArn?: string;
		BackupVaultEvents?: Array<BackupVaultEvent>;
	}

	export enum BackupVaultEvent { BACKUP_JOB_STARTED = 0, BACKUP_JOB_COMPLETED = 1, BACKUP_JOB_SUCCESSFUL = 2, BACKUP_JOB_FAILED = 3, BACKUP_JOB_EXPIRED = 4, RESTORE_JOB_STARTED = 5, RESTORE_JOB_COMPLETED = 6, RESTORE_JOB_SUCCESSFUL = 7, RESTORE_JOB_FAILED = 8, COPY_JOB_STARTED = 9, COPY_JOB_SUCCESSFUL = 10, COPY_JOB_FAILED = 11, RECOVERY_POINT_MODIFIED = 12, BACKUP_PLAN_CREATED = 13, BACKUP_PLAN_MODIFIED = 14 }

	export interface GetRecoveryPointRestoreMetadataOutput {
		BackupVaultArn?: string;
		RecoveryPointArn?: string;
		RestoreMetadata?: Metadata;
	}

	export interface Metadata {
	}

	export interface GetSupportedResourceTypesOutput {
		ResourceTypes?: Array<string>;
	}

	export interface ListBackupJobsOutput {
		BackupJobs?: Array<BackupJob>;
		NextToken?: string;
	}


	/** Contains detailed information about a backup job. */
	export interface BackupJob {
		BackupJobId?: string;
		BackupVaultName?: string;
		BackupVaultArn?: string;
		RecoveryPointArn?: string;
		ResourceArn?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		State?: DescribeBackupJobOutputState;
		StatusMessage?: string;
		PercentDone?: string;
		BackupSizeInBytes?: number;
		IamRoleArn?: string;

		/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		ExpectedCompletionDate?: Date;
		StartBy?: Date;
		ResourceType?: string;
		BytesTransferred?: number;
	}

	export interface ListBackupPlanTemplatesOutput {
		NextToken?: string;
		BackupPlanTemplatesList?: Array<BackupPlanTemplatesListMember>;
	}


	/** An object specifying metadata associated with a backup plan template. */
	export interface BackupPlanTemplatesListMember {
		BackupPlanTemplateId?: string;
		BackupPlanTemplateName?: string;
	}

	export interface ListBackupPlanVersionsOutput {
		NextToken?: string;
		BackupPlanVersionsList?: Array<BackupPlansListMember>;
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
	}

	export interface ListBackupPlansOutput {
		NextToken?: string;
		BackupPlansList?: Array<BackupPlansListMember>;
	}

	export interface ListBackupSelectionsOutput {
		NextToken?: string;
		BackupSelectionsList?: Array<BackupSelectionsListMember>;
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

	export interface ListBackupVaultsOutput {
		BackupVaultList?: Array<BackupVaultListMember>;
		NextToken?: string;
	}


	/** Contains metadata about a backup vault. */
	export interface BackupVaultListMember {
		BackupVaultName?: string;
		BackupVaultArn?: string;
		CreationDate?: Date;
		EncryptionKeyArn?: string;
		CreatorRequestId?: string;
		NumberOfRecoveryPoints?: number;
	}

	export interface ListCopyJobsOutput {
		CopyJobs?: Array<CopyJob>;
		NextToken?: string;
	}

	export interface ListProtectedResourcesOutput {
		Results?: Array<ProtectedResource>;
		NextToken?: string;
	}


	/** A structure that contains information about a backed-up resource. */
	export interface ProtectedResource {
		ResourceArn?: string;
		ResourceType?: string;
		LastBackupTime?: Date;
	}

	export interface ListRecoveryPointsByBackupVaultOutput {
		NextToken?: string;
		RecoveryPoints?: Array<RecoveryPointByBackupVault>;
	}


	/** Contains detailed information about the recovery points stored in a backup vault. */
	export interface RecoveryPointByBackupVault {
		RecoveryPointArn?: string;
		BackupVaultName?: string;
		BackupVaultArn?: string;
		ResourceArn?: string;
		ResourceType?: string;

		/** Contains information about the backup plan and rule that AWS Backup used to initiate the recovery point backup. */
		CreatedBy?: RecoveryPointCreator;
		IamRoleArn?: string;
		Status?: DescribeRecoveryPointOutputStatus;
		CreationDate?: Date;
		CompletionDate?: Date;
		BackupSizeInBytes?: number;

		/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		CalculatedLifecycle?: CalculatedLifecycle;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		EncryptionKeyArn?: string;
		IsEncrypted?: boolean;
		LastRestoreTime?: Date;
	}

	export interface ListRecoveryPointsByResourceOutput {
		NextToken?: string;
		RecoveryPoints?: Array<RecoveryPointByResource>;
	}


	/** Contains detailed information about a saved recovery point. */
	export interface RecoveryPointByResource {
		RecoveryPointArn?: string;
		CreationDate?: Date;
		Status?: DescribeRecoveryPointOutputStatus;
		EncryptionKeyArn?: string;
		BackupSizeBytes?: number;
		BackupVaultName?: string;
	}

	export interface ListRestoreJobsOutput {
		RestoreJobs?: Array<RestoreJobsListMember>;
		NextToken?: string;
	}


	/** Contains metadata about a restore job. */
	export interface RestoreJobsListMember {
		RestoreJobId?: string;
		RecoveryPointArn?: string;
		CreationDate?: Date;
		CompletionDate?: Date;
		Status?: DescribeRestoreJobOutputStatus;
		StatusMessage?: string;
		PercentDone?: string;
		BackupSizeInBytes?: number;
		IamRoleArn?: string;
		ExpectedCompletionTimeMinutes?: number;
		CreatedResourceArn?: string;
	}

	export interface ListTagsOutput {
		NextToken?: string;
		Tags?: Tags;
	}

	export interface StartBackupJobOutput {
		BackupJobId?: string;
		RecoveryPointArn?: string;
		CreationDate?: Date;
	}

	export interface StartCopyJobOutput {
		CopyJobId?: string;
		CreationDate?: Date;
	}

	export interface StartRestoreJobOutput {
		RestoreJobId?: string;
	}

	export interface UpdateBackupPlanOutput {
		BackupPlanId?: string;
		BackupPlanArn?: string;
		CreationDate?: Date;
		VersionId?: string;
	}

	export interface UpdateRecoveryPointLifecycleOutput {
		BackupVaultArn?: string;
		RecoveryPointArn?: string;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;

		/** <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		CalculatedLifecycle?: CalculatedLifecycle;
	}

	export enum BackupJobState { CREATED = 0, PENDING = 1, RUNNING = 2, ABORTING = 3, ABORTED = 4, COMPLETED = 5, FAILED = 6, EXPIRED = 7 }


	/** Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.  */
	export interface BackupPlanInput {
		BackupPlanName: string;
		Rules: Array<BackupRuleInput>;
	}

	export enum ConditionType { STRINGEQUALS = 0 }

	export interface CreateBackupPlanInput {

		/**
		 * Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
		 * Required
		 */
		BackupPlan: BackupPlanInput;
		BackupPlanTags?: Tags;
		CreatorRequestId?: string;
	}

	export interface CreateBackupSelectionInput {

		/**
		 * Used to specify a set of resources to a backup plan.
		 * Required
		 */
		BackupSelection: BackupSelection;
		CreatorRequestId?: string;
	}

	export interface CreateBackupVaultInput {
		BackupVaultTags?: Tags;
		EncryptionKeyArn?: string;
		CreatorRequestId?: string;
	}

	export interface DeleteBackupPlanInput {
	}

	export interface DeleteBackupSelectionInput {
	}

	export interface DeleteBackupVaultAccessPolicyInput {
	}

	export interface DeleteBackupVaultInput {
	}

	export interface DeleteBackupVaultNotificationsInput {
	}

	export interface DeleteRecoveryPointInput {
	}

	export interface DescribeBackupJobInput {
	}

	export interface DescribeBackupVaultInput {
	}

	export interface DescribeCopyJobInput {
	}

	export interface DescribeProtectedResourceInput {
	}

	export interface DescribeRecoveryPointInput {
	}

	export enum RecoveryPointStatus { COMPLETED = 0, PARTIAL = 1, DELETING = 2, EXPIRED = 3 }

	export enum StorageClass { WARM = 0, COLD = 1, DELETED = 2 }

	export interface DescribeRegionSettingsInput {
	}

	export interface DescribeRestoreJobInput {
	}

	export enum RestoreJobStatus { PENDING = 0, RUNNING = 1, COMPLETED = 2, ABORTED = 3, FAILED = 4 }

	export interface ExportBackupPlanTemplateInput {
	}

	export interface GetBackupPlanFromJSONInput {
		BackupPlanTemplateJson: string;
	}

	export interface GetBackupPlanFromTemplateInput {
	}

	export interface GetBackupPlanInput {
	}

	export interface GetBackupSelectionInput {
	}

	export interface GetBackupVaultAccessPolicyInput {
	}

	export interface GetBackupVaultNotificationsInput {
	}

	export interface GetRecoveryPointRestoreMetadataInput {
	}

	export interface ListBackupJobsInput {
	}

	export interface ListBackupPlanTemplatesInput {
	}

	export interface ListBackupPlanVersionsInput {
	}

	export interface ListBackupPlansInput {
	}

	export interface ListBackupSelectionsInput {
	}

	export interface ListBackupVaultsInput {
	}

	export interface ListCopyJobsInput {
	}

	export interface ListProtectedResourcesInput {
	}

	export interface ListRecoveryPointsByBackupVaultInput {
	}

	export interface ListRecoveryPointsByResourceInput {
	}

	export interface ListRestoreJobsInput {
	}

	export interface ListTagsInput {
	}

	export interface PutBackupVaultAccessPolicyInput {
		Policy?: string;
	}

	export interface PutBackupVaultNotificationsInput {
		SNSTopicArn: string;
		BackupVaultEvents: Array<BackupVaultEvent>;
	}

	export interface StartBackupJobInput {
		BackupVaultName: string;
		ResourceArn: string;
		IamRoleArn: string;
		IdempotencyToken?: string;
		StartWindowMinutes?: number;
		CompleteWindowMinutes?: number;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
		RecoveryPointTags?: Tags;
	}

	export interface StartCopyJobInput {
		RecoveryPointArn: string;
		SourceBackupVaultName: string;
		DestinationBackupVaultArn: string;
		IamRoleArn: string;
		IdempotencyToken?: string;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
	}

	export interface StartRestoreJobInput {
		RecoveryPointArn: string;
		Metadata: Metadata;
		IamRoleArn: string;
		IdempotencyToken?: string;
		ResourceType?: string;
	}

	export interface StopBackupJobInput {
	}

	export interface TagResourceInput {
		Tags: Tags;
	}

	export interface UntagResourceInput {
		TagKeyList: Array<string>;
	}

	export interface UpdateBackupPlanInput {

		/**
		 * Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
		 * Required
		 */
		BackupPlan: BackupPlanInput;
	}

	export interface UpdateRecoveryPointLifecycleInput {

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: Lifecycle;
	}

	export interface UpdateRegionSettingsInput {
		ResourceTypeOptInPreference?: ResourceTypeOptInPreference;
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
		ListBackupPlans(nextToken: string, maxResults: number, includeDeleted: boolean, MaxResults: string, NextToken: string): Observable<ListBackupPlansOutput> {
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
		ListBackupSelections(backupPlanId: string, nextToken: string, maxResults: number, MaxResults: string, NextToken: string): Observable<ListBackupSelectionsOutput> {
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
		GetBackupPlan(backupPlanId: string, versionId: string): Observable<GetBackupPlanOutput> {
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
		ListBackupJobs(nextToken: string, maxResults: number, resourceArn: string, state: DescribeBackupJobOutputState, backupVaultName: string, createdBefore: Date, createdAfter: Date, resourceType: string, MaxResults: string, NextToken: string): Observable<ListBackupJobsOutput> {
			return this.http.get<ListBackupJobsOutput>(this.baseUri + 'backup-jobs/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&state=' + state + '&backupVaultName=' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '&createdBefore=' + createdBefore.toISOString() + '&createdAfter=' + createdAfter.toISOString() + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		ListBackupPlanTemplates(nextToken: string, maxResults: number, MaxResults: string, NextToken: string): Observable<ListBackupPlanTemplatesOutput> {
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
		ListBackupPlanVersions(backupPlanId: string, nextToken: string, maxResults: number, MaxResults: string, NextToken: string): Observable<ListBackupPlanVersionsOutput> {
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
		ListBackupVaults(nextToken: string, maxResults: number, MaxResults: string, NextToken: string): Observable<ListBackupVaultsOutput> {
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
		ListCopyJobs(nextToken: string, maxResults: number, resourceArn: string, state: CopyJobState, createdBefore: Date, createdAfter: Date, resourceType: string, destinationVaultArn: string, MaxResults: string, NextToken: string): Observable<ListCopyJobsOutput> {
			return this.http.get<ListCopyJobsOutput>(this.baseUri + 'copy-jobs/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&state=' + state + '&createdBefore=' + createdBefore.toISOString() + '&createdAfter=' + createdAfter.toISOString() + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&destinationVaultArn=' + (destinationVaultArn == null ? '' : encodeURIComponent(destinationVaultArn)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		ListProtectedResources(nextToken: string, maxResults: number, MaxResults: string, NextToken: string): Observable<ListProtectedResourcesOutput> {
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
		ListRecoveryPointsByBackupVault(backupVaultName: string, nextToken: string, maxResults: number, resourceArn: string, resourceType: string, backupPlanId: string, createdBefore: Date, createdAfter: Date, MaxResults: string, NextToken: string): Observable<ListRecoveryPointsByBackupVaultOutput> {
			return this.http.get<ListRecoveryPointsByBackupVaultOutput>(this.baseUri + 'backup-vaults/' + (backupVaultName == null ? '' : encodeURIComponent(backupVaultName)) + '/recovery-points/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&backupPlanId=' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)) + '&createdBefore=' + createdBefore.toISOString() + '&createdAfter=' + createdAfter.toISOString() + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		ListRecoveryPointsByResource(resourceArn: string, nextToken: string, maxResults: number, MaxResults: string, NextToken: string): Observable<ListRecoveryPointsByResourceOutput> {
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
		ListRestoreJobs(nextToken: string, maxResults: number, MaxResults: string, NextToken: string): Observable<ListRestoreJobsOutput> {
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
		ListTags(resourceArn: string, nextToken: string, maxResults: number, MaxResults: string, NextToken: string): Observable<ListTagsOutput> {
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
		CreatorRequestId?: string;
	}

	export interface CreateBackupPlanPutBodyBackupPlan {
		BackupPlanName?: string;
		Rules?: Array<BackupRuleInput>;
	}

	export interface CreateBackupSelectionPutBody {

		/**
		 * Used to specify a set of resources to a backup plan.
		 * Required
		 */
		BackupSelection: CreateBackupSelectionPutBodyBackupSelection;

		/** A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice. */
		CreatorRequestId?: string;
	}

	export interface CreateBackupSelectionPutBodyBackupSelection {
		SelectionName?: string;
		IamRoleArn?: string;
		Resources?: Array<string>;
		ListOfTags?: Array<Condition>;
	}

	export interface CreateBackupVaultPutBody {

		/** Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair. */
		BackupVaultTags?: {[id: string]: string };

		/** The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>. */
		EncryptionKeyArn?: string;

		/** A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice. */
		CreatorRequestId?: string;
	}

	export interface UpdateBackupPlanPostBody {

		/**
		 * Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
		 * Required
		 */
		BackupPlan: UpdateBackupPlanPostBodyBackupPlan;
	}

	export interface UpdateBackupPlanPostBodyBackupPlan {
		BackupPlanName?: string;
		Rules?: Array<BackupRuleInput>;
	}

	export interface PutBackupVaultAccessPolicyPutBody {

		/** The backup vault access policy document in JSON format. */
		Policy?: string;
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

	export interface UpdateRecoveryPointLifecyclePostBody {

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: UpdateRecoveryPointLifecyclePostBodyLifecycle;
	}

	export interface UpdateRecoveryPointLifecyclePostBodyLifecycle {
		MoveToColdStorageAfterDays?: number;
		DeleteAfterDays?: number;
	}

	export interface UpdateRegionSettingsPutBody {

		/** Updates the list of services along with the opt-in preferences for the region. */
		ResourceTypeOptInPreference?: {[id: string]: boolean };
	}

	export interface GetBackupPlanFromJSONPostBody {

		/**
		 * A customer-supplied backup plan document in JSON format.
		 * Required
		 */
		BackupPlanTemplateJson: string;
	}

	export interface StartBackupJobPutBody {

		/**
		 * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
		 * Required
		 * Pattern: ^[a-zA-Z0-9\-\_\.]{1,50}$
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
		IdempotencyToken?: string;

		/** A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. */
		StartWindowMinutes?: number;

		/** A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by AWS Backup. This value is optional. */
		CompleteWindowMinutes?: number;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: StartBackupJobPutBodyLifecycle;

		/** To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. */
		RecoveryPointTags?: {[id: string]: string };
	}

	export interface StartBackupJobPutBodyLifecycle {
		MoveToColdStorageAfterDays?: number;
		DeleteAfterDays?: number;
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
		 * Pattern: ^[a-zA-Z0-9\-\_\.]{1,50}$
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
		IdempotencyToken?: string;

		/** <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> */
		Lifecycle?: StartCopyJobPutBodyLifecycle;
	}

	export interface StartCopyJobPutBodyLifecycle {
		MoveToColdStorageAfterDays?: number;
		DeleteAfterDays?: number;
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
		IdempotencyToken?: string;

		/**
		 * <p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>Storage Gateway</code> for AWS Storage Gateway</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>DDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> </ul>
		 * Pattern: ^[a-zA-Z0-9\-\_\.]{1,50}$
		 */
		ResourceType?: string;
	}

	export interface TagResourcePostBody {

		/**
		 * Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create.
		 * Required
		 */
		Tags: {[id: string]: string };
	}

	export interface UntagResourcePostBody {

		/**
		 * A list of keys to identify which key-value tags to remove from a resource.
		 * Required
		 */
		TagKeyList: Array<string>;
	}

}

