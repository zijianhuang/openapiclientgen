import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The request object used by `AbandonRelease`. */
	export interface AbandonReleaseRequest {
	}

	/** The request object used by `AbandonRelease`. */
	export interface AbandonReleaseRequestFormProperties {
	}
	export function CreateAbandonReleaseRequestFormGroup() {
		return new FormGroup<AbandonReleaseRequestFormProperties>({
		});

	}


	/** The response object for `AbandonRelease`. */
	export interface AbandonReleaseResponse {
	}

	/** The response object for `AbandonRelease`. */
	export interface AbandonReleaseResponseFormProperties {
	}
	export function CreateAbandonReleaseResponseFormGroup() {
		return new FormGroup<AbandonReleaseResponseFormProperties>({
		});

	}


	/** An advanceChildRollout Job. */
	export interface AdvanceChildRolloutJob {
	}

	/** An advanceChildRollout Job. */
	export interface AdvanceChildRolloutJobFormProperties {
	}
	export function CreateAdvanceChildRolloutJobFormGroup() {
		return new FormGroup<AdvanceChildRolloutJobFormProperties>({
		});

	}


	/** AdvanceChildRolloutJobRun contains information specific to a advanceChildRollout `JobRun`. */
	export interface AdvanceChildRolloutJobRun {

		/** Output only. Name of the `ChildRollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}`. */
		rollout?: string | null;

		/** Output only. the ID of the ChildRollout's Phase. */
		rolloutPhaseId?: string | null;
	}

	/** AdvanceChildRolloutJobRun contains information specific to a advanceChildRollout `JobRun`. */
	export interface AdvanceChildRolloutJobRunFormProperties {

		/** Output only. Name of the `ChildRollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}`. */
		rollout: FormControl<string | null | undefined>,

		/** Output only. the ID of the ChildRollout's Phase. */
		rolloutPhaseId: FormControl<string | null | undefined>,
	}
	export function CreateAdvanceChildRolloutJobRunFormGroup() {
		return new FormGroup<AdvanceChildRolloutJobRunFormProperties>({
			rollout: new FormControl<string | null | undefined>(undefined),
			rolloutPhaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the information of an automated advance-rollout operation. */
	export interface AdvanceRolloutOperation {

		/** Output only. The phase the rollout will be advanced to. */
		destinationPhase?: string | null;

		/** Output only. The name of the rollout that initiates the `AutomationRun`. */
		rollout?: string | null;

		/** Output only. The phase of a deployment that initiated the operation. */
		sourcePhase?: string | null;

		/** Output only. How long the operation will be paused. */
		wait?: string | null;
	}

	/** Contains the information of an automated advance-rollout operation. */
	export interface AdvanceRolloutOperationFormProperties {

		/** Output only. The phase the rollout will be advanced to. */
		destinationPhase: FormControl<string | null | undefined>,

		/** Output only. The name of the rollout that initiates the `AutomationRun`. */
		rollout: FormControl<string | null | undefined>,

		/** Output only. The phase of a deployment that initiated the operation. */
		sourcePhase: FormControl<string | null | undefined>,

		/** Output only. How long the operation will be paused. */
		wait: FormControl<string | null | undefined>,
	}
	export function CreateAdvanceRolloutOperationFormGroup() {
		return new FormGroup<AdvanceRolloutOperationFormProperties>({
			destinationPhase: new FormControl<string | null | undefined>(undefined),
			rollout: new FormControl<string | null | undefined>(undefined),
			sourcePhase: new FormControl<string | null | undefined>(undefined),
			wait: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object used by `AdvanceRollout`. */
	export interface AdvanceRolloutRequest {

		/** Required. The phase ID to advance the `Rollout` to. */
		phaseId?: string | null;
	}

	/** The request object used by `AdvanceRollout`. */
	export interface AdvanceRolloutRequestFormProperties {

		/** Required. The phase ID to advance the `Rollout` to. */
		phaseId: FormControl<string | null | undefined>,
	}
	export function CreateAdvanceRolloutRequestFormGroup() {
		return new FormGroup<AdvanceRolloutRequestFormProperties>({
			phaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object from `AdvanceRollout`. */
	export interface AdvanceRolloutResponse {
	}

	/** The response object from `AdvanceRollout`. */
	export interface AdvanceRolloutResponseFormProperties {
	}
	export function CreateAdvanceRolloutResponseFormGroup() {
		return new FormGroup<AdvanceRolloutResponseFormProperties>({
		});

	}


	/** The `AdvanceRollout` automation rule will automatically advance a successful Rollout to the next phase. */
	export interface AdvanceRolloutRule {

		/** `AutomationRuleCondition` contains conditions relevant to an `Automation` rule. */
		condition?: AutomationRuleCondition;

		/** Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`. */
		id?: string | null;

		/** Optional. Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
		sourcePhases?: Array<string>;

		/** Optional. How long to wait after a rollout is finished. */
		wait?: string | null;
	}

	/** The `AdvanceRollout` automation rule will automatically advance a successful Rollout to the next phase. */
	export interface AdvanceRolloutRuleFormProperties {

		/** Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`. */
		id: FormControl<string | null | undefined>,

		/** Optional. How long to wait after a rollout is finished. */
		wait: FormControl<string | null | undefined>,
	}
	export function CreateAdvanceRolloutRuleFormGroup() {
		return new FormGroup<AdvanceRolloutRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			wait: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `AutomationRuleCondition` contains conditions relevant to an `Automation` rule. */
	export interface AutomationRuleCondition {

		/** `TargetsPresentCondition` contains information on any Targets referenced in the Delivery Pipeline that do not actually exist. */
		targetsPresentCondition?: TargetsPresentCondition;
	}

	/** `AutomationRuleCondition` contains conditions relevant to an `Automation` rule. */
	export interface AutomationRuleConditionFormProperties {
	}
	export function CreateAutomationRuleConditionFormGroup() {
		return new FormGroup<AutomationRuleConditionFormProperties>({
		});

	}


	/** `TargetsPresentCondition` contains information on any Targets referenced in the Delivery Pipeline that do not actually exist. */
	export interface TargetsPresentCondition {

		/** The list of Target names that do not exist. For example, `projects/{project_id}/locations/{location_name}/targets/{target_name}`. */
		missingTargets?: Array<string>;

		/** True if there aren't any missing Targets. */
		status?: boolean | null;

		/** Last time the condition was updated. */
		updateTime?: string | null;
	}

	/** `TargetsPresentCondition` contains information on any Targets referenced in the Delivery Pipeline that do not actually exist. */
	export interface TargetsPresentConditionFormProperties {

		/** True if there aren't any missing Targets. */
		status: FormControl<boolean | null | undefined>,

		/** Last time the condition was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTargetsPresentConditionFormGroup() {
		return new FormGroup<TargetsPresentConditionFormProperties>({
			status: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information specifying an Anthos Cluster. */
	export interface AnthosCluster {

		/** Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. */
		membership?: string | null;
	}

	/** Information specifying an Anthos Cluster. */
	export interface AnthosClusterFormProperties {

		/** Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. */
		membership: FormControl<string | null | undefined>,
	}
	export function CreateAnthosClusterFormGroup() {
		return new FormGroup<AnthosClusterFormProperties>({
			membership: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object used by `ApproveRollout`. */
	export interface ApproveRolloutRequest {

		/** Required. True = approve; false = reject */
		approved?: boolean | null;
	}

	/** The request object used by `ApproveRollout`. */
	export interface ApproveRolloutRequestFormProperties {

		/** Required. True = approve; false = reject */
		approved: FormControl<boolean | null | undefined>,
	}
	export function CreateApproveRolloutRequestFormGroup() {
		return new FormGroup<ApproveRolloutRequestFormProperties>({
			approved: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response object from `ApproveRollout`. */
	export interface ApproveRolloutResponse {
	}

	/** The response object from `ApproveRollout`. */
	export interface ApproveRolloutResponseFormProperties {
	}
	export function CreateApproveRolloutResponseFormGroup() {
		return new FormGroup<ApproveRolloutResponseFormProperties>({
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<AuditLogConfigLogType | null | undefined>,
	}
	export function CreateAuditLogConfigFormGroup() {
		return new FormGroup<AuditLogConfigFormProperties>({
			logType: new FormControl<AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** An `Automation` resource in the Cloud Deploy API. An `Automation` enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement. The intention of Automation is to reduce manual intervention in the continuous delivery process. */
	export interface Automation {

		/** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details. */
		annotations?: {[id: string]: string };

		/** Output only. Time at which the automation was created. */
		createTime?: string | null;

		/** Optional. Description of the `Automation`. Max length is 255 characters. */
		description?: string | null;

		/** Optional. The weak etag of the `Automation` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters. */
		labels?: {[id: string]: string };

		/** Output only. Name of the `Automation`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automations/{automation}`. */
		name?: string | null;

		/** Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution. */
		rules?: Array<AutomationRule>;

		/** AutomationResourceSelector contains the information to select the resources to which an Automation is going to be applied. */
		selector?: AutomationResourceSelector;

		/** Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. */
		serviceAccount?: string | null;

		/** Optional. When Suspended, automation is deactivated from execution. */
		suspended?: boolean | null;

		/** Output only. Unique identifier of the `Automation`. */
		uid?: string | null;

		/** Output only. Time at which the automation was updated. */
		updateTime?: string | null;
	}

	/** An `Automation` resource in the Cloud Deploy API. An `Automation` enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement. The intention of Automation is to reduce manual intervention in the continuous delivery process. */
	export interface AutomationFormProperties {

		/** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Time at which the automation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the `Automation`. Max length is 255 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. The weak etag of the `Automation` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Name of the `Automation`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automations/{automation}`. */
		name: FormControl<string | null | undefined>,

		/** Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Optional. When Suspended, automation is deactivated from execution. */
		suspended: FormControl<boolean | null | undefined>,

		/** Output only. Unique identifier of the `Automation`. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Time at which the automation was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAutomationFormGroup() {
		return new FormGroup<AutomationFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `AutomationRule` defines the automation activities. */
	export interface AutomationRule {

		/** The `AdvanceRollout` automation rule will automatically advance a successful Rollout to the next phase. */
		advanceRolloutRule?: AdvanceRolloutRule;

		/** `PromoteRelease` rule will automatically promote a release from the current target to a specified target. */
		promoteReleaseRule?: PromoteReleaseRule;

		/** The `RepairRolloutRule` automation rule will automatically repair a failed `Rollout`. */
		repairRolloutRule?: RepairRolloutRule;
	}

	/** `AutomationRule` defines the automation activities. */
	export interface AutomationRuleFormProperties {
	}
	export function CreateAutomationRuleFormGroup() {
		return new FormGroup<AutomationRuleFormProperties>({
		});

	}


	/** `PromoteRelease` rule will automatically promote a release from the current target to a specified target. */
	export interface PromoteReleaseRule {

		/** `AutomationRuleCondition` contains conditions relevant to an `Automation` rule. */
		condition?: AutomationRuleCondition;

		/** Optional. The starting phase of the rollout created by this operation. Default to the first phase. */
		destinationPhase?: string | null;

		/** Optional. The ID of the stage in the pipeline to which this `Release` is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence. */
		destinationTargetId?: string | null;

		/** Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`. */
		id?: string | null;

		/** Optional. How long the release need to be paused until being promoted to the next target. */
		wait?: string | null;
	}

	/** `PromoteRelease` rule will automatically promote a release from the current target to a specified target. */
	export interface PromoteReleaseRuleFormProperties {

		/** Optional. The starting phase of the rollout created by this operation. Default to the first phase. */
		destinationPhase: FormControl<string | null | undefined>,

		/** Optional. The ID of the stage in the pipeline to which this `Release` is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence. */
		destinationTargetId: FormControl<string | null | undefined>,

		/** Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`. */
		id: FormControl<string | null | undefined>,

		/** Optional. How long the release need to be paused until being promoted to the next target. */
		wait: FormControl<string | null | undefined>,
	}
	export function CreatePromoteReleaseRuleFormGroup() {
		return new FormGroup<PromoteReleaseRuleFormProperties>({
			destinationPhase: new FormControl<string | null | undefined>(undefined),
			destinationTargetId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			wait: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `RepairRolloutRule` automation rule will automatically repair a failed `Rollout`. */
	export interface RepairRolloutRule {

		/** `AutomationRuleCondition` contains conditions relevant to an `Automation` rule. */
		condition?: AutomationRuleCondition;

		/** Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`. */
		id?: string | null;

		/** Optional. Jobs to repair. Proceeds only after job name matched any one in the list, or for all jobs if unspecified or empty. The phase that includes the job must match the phase ID specified in `source_phase`. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
		jobs?: Array<string>;

		/** Required. Defines the types of automatic repair actions for failed jobs. */
		repairModes?: Array<RepairMode>;

		/** Optional. Phases within which jobs are subject to automatic repair actions on failure. Proceeds only after phase name matched any one in the list, or for all phases if unspecified. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
		sourcePhases?: Array<string>;
	}

	/** The `RepairRolloutRule` automation rule will automatically repair a failed `Rollout`. */
	export interface RepairRolloutRuleFormProperties {

		/** Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateRepairRolloutRuleFormGroup() {
		return new FormGroup<RepairRolloutRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration of the repair action. */
	export interface RepairMode {

		/** Retries the failed job. */
		retry?: Retry;

		/** Rolls back a `Rollout`. */
		rollback?: Rollback;
	}

	/** Configuration of the repair action. */
	export interface RepairModeFormProperties {
	}
	export function CreateRepairModeFormGroup() {
		return new FormGroup<RepairModeFormProperties>({
		});

	}


	/** Retries the failed job. */
	export interface Retry {

		/** Required. Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10. */
		attempts?: string | null;

		/** Optional. The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if `wait` is 0. */
		backoffMode?: RetryBackoffMode | null;

		/** Optional. How long to wait for the first retry. Default is 0, and the maximum value is 14d. */
		wait?: string | null;
	}

	/** Retries the failed job. */
	export interface RetryFormProperties {

		/** Required. Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10. */
		attempts: FormControl<string | null | undefined>,

		/** Optional. The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if `wait` is 0. */
		backoffMode: FormControl<RetryBackoffMode | null | undefined>,

		/** Optional. How long to wait for the first retry. Default is 0, and the maximum value is 14d. */
		wait: FormControl<string | null | undefined>,
	}
	export function CreateRetryFormGroup() {
		return new FormGroup<RetryFormProperties>({
			attempts: new FormControl<string | null | undefined>(undefined),
			backoffMode: new FormControl<RetryBackoffMode | null | undefined>(undefined),
			wait: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RetryBackoffMode { BACKOFF_MODE_UNSPECIFIED = 'BACKOFF_MODE_UNSPECIFIED', BACKOFF_MODE_LINEAR = 'BACKOFF_MODE_LINEAR', BACKOFF_MODE_EXPONENTIAL = 'BACKOFF_MODE_EXPONENTIAL' }


	/** Rolls back a `Rollout`. */
	export interface Rollback {

		/** Optional. The starting phase ID for the `Rollout`. If unspecified, the `Rollout` will start in the stable phase. */
		destinationPhase?: string | null;
	}

	/** Rolls back a `Rollout`. */
	export interface RollbackFormProperties {

		/** Optional. The starting phase ID for the `Rollout`. If unspecified, the `Rollout` will start in the stable phase. */
		destinationPhase: FormControl<string | null | undefined>,
	}
	export function CreateRollbackFormGroup() {
		return new FormGroup<RollbackFormProperties>({
			destinationPhase: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AutomationResourceSelector contains the information to select the resources to which an Automation is going to be applied. */
	export interface AutomationResourceSelector {

		/** Contains attributes about a target. */
		targets?: Array<TargetAttribute>;
	}

	/** AutomationResourceSelector contains the information to select the resources to which an Automation is going to be applied. */
	export interface AutomationResourceSelectorFormProperties {
	}
	export function CreateAutomationResourceSelectorFormGroup() {
		return new FormGroup<AutomationResourceSelectorFormProperties>({
		});

	}


	/** Contains criteria for selecting Targets. Attributes provided must match the target resource in order for policy restrictions to apply. E.g. if id "prod" and labels "foo: bar" are given the target resource must match both that id and have that label in order to be selected. */
	export interface TargetAttribute {

		/** ID of the `Target`. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location. */
		id?: string | null;

		/** Target labels. */
		labels?: {[id: string]: string };
	}

	/** Contains criteria for selecting Targets. Attributes provided must match the target resource in order for policy restrictions to apply. E.g. if id "prod" and labels "foo: bar" are given the target resource must match both that id and have that label in order to be selected. */
	export interface TargetAttributeFormProperties {

		/** ID of the `Target`. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location. */
		id: FormControl<string | null | undefined>,

		/** Target labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTargetAttributeFormGroup() {
		return new FormGroup<TargetAttributeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Payload proto for "clouddeploy.googleapis.com/automation" Platform Log event that describes the Automation related events. */
	export interface AutomationEvent {

		/** The name of the `AutomationRun`. */
		automation?: string | null;

		/** Debug message for when there is an update on the AutomationRun. Provides further details about the resource creation or state change. */
		message?: string | null;

		/** Unique identifier of the `DeliveryPipeline`. */
		pipelineUid?: string | null;

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type?: AutomationEventType | null;
	}

	/** Payload proto for "clouddeploy.googleapis.com/automation" Platform Log event that describes the Automation related events. */
	export interface AutomationEventFormProperties {

		/** The name of the `AutomationRun`. */
		automation: FormControl<string | null | undefined>,

		/** Debug message for when there is an update on the AutomationRun. Provides further details about the resource creation or state change. */
		message: FormControl<string | null | undefined>,

		/** Unique identifier of the `DeliveryPipeline`. */
		pipelineUid: FormControl<string | null | undefined>,

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type: FormControl<AutomationEventType | null | undefined>,
	}
	export function CreateAutomationEventFormGroup() {
		return new FormGroup<AutomationEventFormProperties>({
			automation: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			pipelineUid: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AutomationEventType | null | undefined>(undefined),
		});

	}

	export enum AutomationEventType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', TYPE_PUBSUB_NOTIFICATION_FAILURE = 'TYPE_PUBSUB_NOTIFICATION_FAILURE', TYPE_RESOURCE_STATE_CHANGE = 'TYPE_RESOURCE_STATE_CHANGE', TYPE_PROCESS_ABORTED = 'TYPE_PROCESS_ABORTED', TYPE_RESTRICTION_VIOLATED = 'TYPE_RESTRICTION_VIOLATED', TYPE_RESOURCE_DELETED = 'TYPE_RESOURCE_DELETED', TYPE_ROLLOUT_UPDATE = 'TYPE_ROLLOUT_UPDATE', TYPE_RENDER_STATUES_CHANGE = 'TYPE_RENDER_STATUES_CHANGE' }


	/** AutomationRolloutMetadata contains Automation-related actions that were performed on a rollout. */
	export interface AutomationRolloutMetadata {

		/** Output only. The IDs of the AutomationRuns initiated by an advance rollout rule. */
		advanceAutomationRuns?: Array<string>;

		/** Output only. The ID of the AutomationRun initiated by a promote release rule. */
		promoteAutomationRun?: string | null;

		/** Output only. The IDs of the AutomationRuns initiated by a repair rollout rule. */
		repairAutomationRuns?: Array<string>;
	}

	/** AutomationRolloutMetadata contains Automation-related actions that were performed on a rollout. */
	export interface AutomationRolloutMetadataFormProperties {

		/** Output only. The ID of the AutomationRun initiated by a promote release rule. */
		promoteAutomationRun: FormControl<string | null | undefined>,
	}
	export function CreateAutomationRolloutMetadataFormGroup() {
		return new FormGroup<AutomationRolloutMetadataFormProperties>({
			promoteAutomationRun: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An `AutomationRun` resource in the Cloud Deploy API. An `AutomationRun` represents an execution instance of an automation rule. */
	export interface AutomationRun {

		/** Contains the information of an automated advance-rollout operation. */
		advanceRolloutOperation?: AdvanceRolloutOperation;

		/** Output only. The ID of the automation that initiated the operation. */
		automationId?: string | null;

		/** An `Automation` resource in the Cloud Deploy API. An `Automation` enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement. The intention of Automation is to reduce manual intervention in the continuous delivery process. */
		automationSnapshot?: Automation;

		/** Output only. Time at which the `AutomationRun` was created. */
		createTime?: string | null;

		/** Output only. The weak etag of the `AutomationRun` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. Time the `AutomationRun` expires. An `AutomationRun` expires after 14 days from its creation date. */
		expireTime?: string | null;

		/** Output only. Name of the `AutomationRun`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automationRuns/{automation_run}`. */
		name?: string | null;

		/** Contains the information of an automated promote-release operation. */
		promoteReleaseOperation?: PromoteReleaseOperation;

		/** Contains the information for an automated `repair rollout` operation. */
		repairRolloutOperation?: RepairRolloutOperation;

		/** Output only. The ID of the automation rule that initiated the operation. */
		ruleId?: string | null;

		/** Output only. Email address of the user-managed IAM service account that performs the operations against Cloud Deploy resources. */
		serviceAccount?: string | null;

		/** Output only. Current state of the `AutomationRun`. */
		state?: AutomationRunState | null;

		/** Output only. Explains the current state of the `AutomationRun`. Present only when an explanation is needed. */
		stateDescription?: string | null;

		/** Output only. The ID of the target that represents the promotion stage that initiates the `AutomationRun`. The value of this field is the last segment of a target name. */
		targetId?: string | null;

		/** Output only. Time at which the automationRun was updated. */
		updateTime?: string | null;

		/** Output only. Earliest time the `AutomationRun` will attempt to resume. Wait-time is configured by `wait` in automation rule. */
		waitUntilTime?: string | null;
	}

	/** An `AutomationRun` resource in the Cloud Deploy API. An `AutomationRun` represents an execution instance of an automation rule. */
	export interface AutomationRunFormProperties {

		/** Output only. The ID of the automation that initiated the operation. */
		automationId: FormControl<string | null | undefined>,

		/** Output only. Time at which the `AutomationRun` was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The weak etag of the `AutomationRun` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Time the `AutomationRun` expires. An `AutomationRun` expires after 14 days from its creation date. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. Name of the `AutomationRun`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automationRuns/{automation_run}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The ID of the automation rule that initiated the operation. */
		ruleId: FormControl<string | null | undefined>,

		/** Output only. Email address of the user-managed IAM service account that performs the operations against Cloud Deploy resources. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. Current state of the `AutomationRun`. */
		state: FormControl<AutomationRunState | null | undefined>,

		/** Output only. Explains the current state of the `AutomationRun`. Present only when an explanation is needed. */
		stateDescription: FormControl<string | null | undefined>,

		/** Output only. The ID of the target that represents the promotion stage that initiates the `AutomationRun`. The value of this field is the last segment of a target name. */
		targetId: FormControl<string | null | undefined>,

		/** Output only. Time at which the automationRun was updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. Earliest time the `AutomationRun` will attempt to resume. Wait-time is configured by `wait` in automation rule. */
		waitUntilTime: FormControl<string | null | undefined>,
	}
	export function CreateAutomationRunFormGroup() {
		return new FormGroup<AutomationRunFormProperties>({
			automationId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ruleId: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AutomationRunState | null | undefined>(undefined),
			stateDescription: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			waitUntilTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the information of an automated promote-release operation. */
	export interface PromoteReleaseOperation {

		/** Output only. The starting phase of the rollout created by this operation. */
		phase?: string | null;

		/** Output only. The name of the rollout that initiates the `AutomationRun`. */
		rollout?: string | null;

		/** Output only. The ID of the target that represents the promotion stage to which the release will be promoted. The value of this field is the last segment of a target name. */
		targetId?: string | null;

		/** Output only. How long the operation will be paused. */
		wait?: string | null;
	}

	/** Contains the information of an automated promote-release operation. */
	export interface PromoteReleaseOperationFormProperties {

		/** Output only. The starting phase of the rollout created by this operation. */
		phase: FormControl<string | null | undefined>,

		/** Output only. The name of the rollout that initiates the `AutomationRun`. */
		rollout: FormControl<string | null | undefined>,

		/** Output only. The ID of the target that represents the promotion stage to which the release will be promoted. The value of this field is the last segment of a target name. */
		targetId: FormControl<string | null | undefined>,

		/** Output only. How long the operation will be paused. */
		wait: FormControl<string | null | undefined>,
	}
	export function CreatePromoteReleaseOperationFormGroup() {
		return new FormGroup<PromoteReleaseOperationFormProperties>({
			phase: new FormControl<string | null | undefined>(undefined),
			rollout: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			wait: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the information for an automated `repair rollout` operation. */
	export interface RepairRolloutOperation {

		/** Output only. The index of the current repair action in the repair sequence. */
		currentRepairModeIndex?: string | null;

		/** Output only. The job ID for the Job to repair. */
		jobId?: string | null;

		/** Output only. The phase ID of the phase that includes the job being repaired. */
		phaseId?: string | null;

		/** Output only. Records of the repair attempts. Each repair phase may have multiple retry attempts or single rollback attempt. */
		repairPhases?: Array<RepairPhase>;

		/** Output only. The name of the rollout that initiates the `AutomationRun`. */
		rollout?: string | null;
	}

	/** Contains the information for an automated `repair rollout` operation. */
	export interface RepairRolloutOperationFormProperties {

		/** Output only. The index of the current repair action in the repair sequence. */
		currentRepairModeIndex: FormControl<string | null | undefined>,

		/** Output only. The job ID for the Job to repair. */
		jobId: FormControl<string | null | undefined>,

		/** Output only. The phase ID of the phase that includes the job being repaired. */
		phaseId: FormControl<string | null | undefined>,

		/** Output only. The name of the rollout that initiates the `AutomationRun`. */
		rollout: FormControl<string | null | undefined>,
	}
	export function CreateRepairRolloutOperationFormGroup() {
		return new FormGroup<RepairRolloutOperationFormProperties>({
			currentRepairModeIndex: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			phaseId: new FormControl<string | null | undefined>(undefined),
			rollout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RepairPhase tracks the repair attempts that have been made for each `RepairMode` specified in the `Automation` resource. */
	export interface RepairPhase {

		/** RetryPhase contains the retry attempts and the metadata for initiating a new attempt. */
		retry?: RetryPhase;

		/** RollbackAttempt represents an action of rolling back a Cloud Deploy 'Target'. */
		rollback?: RollbackAttempt;
	}

	/** RepairPhase tracks the repair attempts that have been made for each `RepairMode` specified in the `Automation` resource. */
	export interface RepairPhaseFormProperties {
	}
	export function CreateRepairPhaseFormGroup() {
		return new FormGroup<RepairPhaseFormProperties>({
		});

	}


	/** RetryPhase contains the retry attempts and the metadata for initiating a new attempt. */
	export interface RetryPhase {

		/** Output only. Detail of a retry action. */
		attempts?: Array<RetryAttempt>;

		/** Output only. The pattern of how the wait time of the retry attempt is calculated. */
		backoffMode?: RetryBackoffMode | null;

		/** Output only. The job ID for the Job to retry. */
		jobId?: string | null;

		/** Output only. The phase ID of the phase that includes the job being retried. */
		phaseId?: string | null;

		/** Output only. The number of attempts that have been made. */
		totalAttempts?: string | null;
	}

	/** RetryPhase contains the retry attempts and the metadata for initiating a new attempt. */
	export interface RetryPhaseFormProperties {

		/** Output only. The pattern of how the wait time of the retry attempt is calculated. */
		backoffMode: FormControl<RetryBackoffMode | null | undefined>,

		/** Output only. The job ID for the Job to retry. */
		jobId: FormControl<string | null | undefined>,

		/** Output only. The phase ID of the phase that includes the job being retried. */
		phaseId: FormControl<string | null | undefined>,

		/** Output only. The number of attempts that have been made. */
		totalAttempts: FormControl<string | null | undefined>,
	}
	export function CreateRetryPhaseFormGroup() {
		return new FormGroup<RetryPhaseFormProperties>({
			backoffMode: new FormControl<RetryBackoffMode | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			phaseId: new FormControl<string | null | undefined>(undefined),
			totalAttempts: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RetryAttempt represents an action of retrying the failed Cloud Deploy job. */
	export interface RetryAttempt {

		/** Output only. The index of this retry attempt. */
		attempt?: string | null;

		/** Output only. Valid state of this retry action. */
		state?: RetryAttemptState | null;

		/** Output only. Description of the state of the Retry. */
		stateDesc?: string | null;

		/** Output only. How long the operation will be paused. */
		wait?: string | null;
	}

	/** RetryAttempt represents an action of retrying the failed Cloud Deploy job. */
	export interface RetryAttemptFormProperties {

		/** Output only. The index of this retry attempt. */
		attempt: FormControl<string | null | undefined>,

		/** Output only. Valid state of this retry action. */
		state: FormControl<RetryAttemptState | null | undefined>,

		/** Output only. Description of the state of the Retry. */
		stateDesc: FormControl<string | null | undefined>,

		/** Output only. How long the operation will be paused. */
		wait: FormControl<string | null | undefined>,
	}
	export function CreateRetryAttemptFormGroup() {
		return new FormGroup<RetryAttemptFormProperties>({
			attempt: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<RetryAttemptState | null | undefined>(undefined),
			stateDesc: new FormControl<string | null | undefined>(undefined),
			wait: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RetryAttemptState { REPAIR_STATE_UNSPECIFIED = 'REPAIR_STATE_UNSPECIFIED', REPAIR_STATE_SUCCEEDED = 'REPAIR_STATE_SUCCEEDED', REPAIR_STATE_CANCELLED = 'REPAIR_STATE_CANCELLED', REPAIR_STATE_FAILED = 'REPAIR_STATE_FAILED', REPAIR_STATE_IN_PROGRESS = 'REPAIR_STATE_IN_PROGRESS', REPAIR_STATE_PENDING = 'REPAIR_STATE_PENDING', REPAIR_STATE_SKIPPED = 'REPAIR_STATE_SKIPPED' }


	/** RollbackAttempt represents an action of rolling back a Cloud Deploy 'Target'. */
	export interface RollbackAttempt {

		/** Output only. The phase to which the rollout will be rolled back to. */
		destinationPhase?: string | null;

		/** Output only. ID of the rollback `Rollout` to create. */
		rolloutId?: string | null;

		/** Output only. Valid state of this rollback action. */
		state?: RetryAttemptState | null;

		/** Output only. Description of the state of the Rollback. */
		stateDesc?: string | null;
	}

	/** RollbackAttempt represents an action of rolling back a Cloud Deploy 'Target'. */
	export interface RollbackAttemptFormProperties {

		/** Output only. The phase to which the rollout will be rolled back to. */
		destinationPhase: FormControl<string | null | undefined>,

		/** Output only. ID of the rollback `Rollout` to create. */
		rolloutId: FormControl<string | null | undefined>,

		/** Output only. Valid state of this rollback action. */
		state: FormControl<RetryAttemptState | null | undefined>,

		/** Output only. Description of the state of the Rollback. */
		stateDesc: FormControl<string | null | undefined>,
	}
	export function CreateRollbackAttemptFormGroup() {
		return new FormGroup<RollbackAttemptFormProperties>({
			destinationPhase: new FormControl<string | null | undefined>(undefined),
			rolloutId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<RetryAttemptState | null | undefined>(undefined),
			stateDesc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AutomationRunState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', SUCCEEDED = 'SUCCEEDED', CANCELLED = 'CANCELLED', FAILED = 'FAILED', IN_PROGRESS = 'IN_PROGRESS', PENDING = 'PENDING' }


	/** Payload proto for "clouddeploy.googleapis.com/automation_run" Platform Log event that describes the AutomationRun related events. */
	export interface AutomationRunEvent {

		/** Identifier of the `Automation`. */
		automationId?: string | null;

		/** The name of the `AutomationRun`. */
		automationRun?: string | null;

		/** ID of the `Target` to which the `AutomationRun` is created. */
		destinationTargetId?: string | null;

		/** Debug message for when there is an update on the AutomationRun. Provides further details about the resource creation or state change. */
		message?: string | null;

		/** Unique identifier of the `DeliveryPipeline`. */
		pipelineUid?: string | null;

		/** Identifier of the `Automation` rule. */
		ruleId?: string | null;

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type?: AutomationEventType | null;
	}

	/** Payload proto for "clouddeploy.googleapis.com/automation_run" Platform Log event that describes the AutomationRun related events. */
	export interface AutomationRunEventFormProperties {

		/** Identifier of the `Automation`. */
		automationId: FormControl<string | null | undefined>,

		/** The name of the `AutomationRun`. */
		automationRun: FormControl<string | null | undefined>,

		/** ID of the `Target` to which the `AutomationRun` is created. */
		destinationTargetId: FormControl<string | null | undefined>,

		/** Debug message for when there is an update on the AutomationRun. Provides further details about the resource creation or state change. */
		message: FormControl<string | null | undefined>,

		/** Unique identifier of the `DeliveryPipeline`. */
		pipelineUid: FormControl<string | null | undefined>,

		/** Identifier of the `Automation` rule. */
		ruleId: FormControl<string | null | undefined>,

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type: FormControl<AutomationEventType | null | undefined>,
	}
	export function CreateAutomationRunEventFormGroup() {
		return new FormGroup<AutomationRunEventFormProperties>({
			automationId: new FormControl<string | null | undefined>(undefined),
			automationRun: new FormControl<string | null | undefined>(undefined),
			destinationTargetId: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			pipelineUid: new FormControl<string | null | undefined>(undefined),
			ruleId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AutomationEventType | null | undefined>(undefined),
		});

	}


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of an a image to use during Skaffold rendering. */
	export interface BuildArtifact {

		/** Image name in Skaffold configuration. */
		image?: string | null;

		/** Image tag to use. This will generally be the full path to an image, such as "gcr.io/my-project/busybox:1.2.3" or "gcr.io/my-project/busybox@sha256:abc123". */
		tag?: string | null;
	}

	/** Description of an a image to use during Skaffold rendering. */
	export interface BuildArtifactFormProperties {

		/** Image name in Skaffold configuration. */
		image: FormControl<string | null | undefined>,

		/** Image tag to use. This will generally be the full path to an image, such as "gcr.io/my-project/busybox:1.2.3" or "gcr.io/my-project/busybox@sha256:abc123". */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateBuildArtifactFormGroup() {
		return new FormGroup<BuildArtifactFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Canary represents the canary deployment strategy. */
	export interface Canary {

		/** CanaryDeployment represents the canary deployment configuration */
		canaryDeployment?: CanaryDeployment;

		/** CustomCanaryDeployment represents the custom canary deployment configuration. */
		customCanaryDeployment?: CustomCanaryDeployment;

		/** RuntimeConfig contains the runtime specific configurations for a deployment strategy. */
		runtimeConfig?: RuntimeConfig;
	}

	/** Canary represents the canary deployment strategy. */
	export interface CanaryFormProperties {
	}
	export function CreateCanaryFormGroup() {
		return new FormGroup<CanaryFormProperties>({
		});

	}


	/** CanaryDeployment represents the canary deployment configuration */
	export interface CanaryDeployment {

		/** Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100. */
		percentages?: Array<number>;

		/** Postdeploy contains the postdeploy job configuration information. */
		postdeploy?: Postdeploy;

		/** Predeploy contains the predeploy job configuration information. */
		predeploy?: Predeploy;

		/** Whether to run verify tests after each percentage deployment. */
		verify?: boolean | null;
	}

	/** CanaryDeployment represents the canary deployment configuration */
	export interface CanaryDeploymentFormProperties {

		/** Whether to run verify tests after each percentage deployment. */
		verify: FormControl<boolean | null | undefined>,
	}
	export function CreateCanaryDeploymentFormGroup() {
		return new FormGroup<CanaryDeploymentFormProperties>({
			verify: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Postdeploy contains the postdeploy job configuration information. */
	export interface Postdeploy {

		/** Optional. A sequence of Skaffold custom actions to invoke during execution of the postdeploy job. */
		actions?: Array<string>;
	}

	/** Postdeploy contains the postdeploy job configuration information. */
	export interface PostdeployFormProperties {
	}
	export function CreatePostdeployFormGroup() {
		return new FormGroup<PostdeployFormProperties>({
		});

	}


	/** Predeploy contains the predeploy job configuration information. */
	export interface Predeploy {

		/** Optional. A sequence of Skaffold custom actions to invoke during execution of the predeploy job. */
		actions?: Array<string>;
	}

	/** Predeploy contains the predeploy job configuration information. */
	export interface PredeployFormProperties {
	}
	export function CreatePredeployFormGroup() {
		return new FormGroup<PredeployFormProperties>({
		});

	}


	/** CustomCanaryDeployment represents the custom canary deployment configuration. */
	export interface CustomCanaryDeployment {

		/** Required. Configuration for each phase in the canary deployment in the order executed. */
		phaseConfigs?: Array<PhaseConfig>;
	}

	/** CustomCanaryDeployment represents the custom canary deployment configuration. */
	export interface CustomCanaryDeploymentFormProperties {
	}
	export function CreateCustomCanaryDeploymentFormGroup() {
		return new FormGroup<CustomCanaryDeploymentFormProperties>({
		});

	}


	/** PhaseConfig represents the configuration for a phase in the custom canary deployment. */
	export interface PhaseConfig {

		/**
		 * Required. Percentage deployment for the phase.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage?: number | null;

		/** Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
		phaseId?: string | null;

		/** Postdeploy contains the postdeploy job configuration information. */
		postdeploy?: Postdeploy;

		/** Predeploy contains the predeploy job configuration information. */
		predeploy?: Predeploy;

		/** Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage. */
		profiles?: Array<string>;

		/** Whether to run verify tests after the deployment. */
		verify?: boolean | null;
	}

	/** PhaseConfig represents the configuration for a phase in the custom canary deployment. */
	export interface PhaseConfigFormProperties {

		/**
		 * Required. Percentage deployment for the phase.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage: FormControl<number | null | undefined>,

		/** Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
		phaseId: FormControl<string | null | undefined>,

		/** Whether to run verify tests after the deployment. */
		verify: FormControl<boolean | null | undefined>,
	}
	export function CreatePhaseConfigFormGroup() {
		return new FormGroup<PhaseConfigFormProperties>({
			percentage: new FormControl<number | null | undefined>(undefined),
			phaseId: new FormControl<string | null | undefined>(undefined),
			verify: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** RuntimeConfig contains the runtime specific configurations for a deployment strategy. */
	export interface RuntimeConfig {

		/** CloudRunConfig contains the Cloud Run runtime configuration. */
		cloudRun?: CloudRunConfig;

		/** KubernetesConfig contains the Kubernetes runtime configuration. */
		kubernetes?: KubernetesConfig;
	}

	/** RuntimeConfig contains the runtime specific configurations for a deployment strategy. */
	export interface RuntimeConfigFormProperties {
	}
	export function CreateRuntimeConfigFormGroup() {
		return new FormGroup<RuntimeConfigFormProperties>({
		});

	}


	/** CloudRunConfig contains the Cloud Run runtime configuration. */
	export interface CloudRunConfig {

		/** Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments. */
		automaticTrafficControl?: boolean | null;

		/** Optional. A list of tags that are added to the canary revision while the canary deployment is in progress. */
		canaryRevisionTags?: Array<string>;

		/** Optional. A list of tags that are added to the prior revision while the canary deployment is in progress. */
		priorRevisionTags?: Array<string>;

		/** Optional. A list of tags that are added to the final stable revision after the canary deployment is completed. */
		stableRevisionTags?: Array<string>;
	}

	/** CloudRunConfig contains the Cloud Run runtime configuration. */
	export interface CloudRunConfigFormProperties {

		/** Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments. */
		automaticTrafficControl: FormControl<boolean | null | undefined>,
	}
	export function CreateCloudRunConfigFormGroup() {
		return new FormGroup<CloudRunConfigFormProperties>({
			automaticTrafficControl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** KubernetesConfig contains the Kubernetes runtime configuration. */
	export interface KubernetesConfig {

		/** Information about the Kubernetes Gateway API service mesh configuration. */
		gatewayServiceMesh?: GatewayServiceMesh;

		/** Information about the Kubernetes Service networking configuration. */
		serviceNetworking?: ServiceNetworking;
	}

	/** KubernetesConfig contains the Kubernetes runtime configuration. */
	export interface KubernetesConfigFormProperties {
	}
	export function CreateKubernetesConfigFormGroup() {
		return new FormGroup<KubernetesConfigFormProperties>({
		});

	}


	/** Information about the Kubernetes Gateway API service mesh configuration. */
	export interface GatewayServiceMesh {

		/** Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service. */
		deployment?: string | null;

		/** Required. Name of the Gateway API HTTPRoute. */
		httpRoute?: string | null;

		/** Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time. */
		routeUpdateWaitTime?: string | null;

		/** Required. Name of the Kubernetes Service. */
		service?: string | null;
	}

	/** Information about the Kubernetes Gateway API service mesh configuration. */
	export interface GatewayServiceMeshFormProperties {

		/** Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service. */
		deployment: FormControl<string | null | undefined>,

		/** Required. Name of the Gateway API HTTPRoute. */
		httpRoute: FormControl<string | null | undefined>,

		/** Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time. */
		routeUpdateWaitTime: FormControl<string | null | undefined>,

		/** Required. Name of the Kubernetes Service. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGatewayServiceMeshFormGroup() {
		return new FormGroup<GatewayServiceMeshFormProperties>({
			deployment: new FormControl<string | null | undefined>(undefined),
			httpRoute: new FormControl<string | null | undefined>(undefined),
			routeUpdateWaitTime: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the Kubernetes Service networking configuration. */
	export interface ServiceNetworking {

		/** Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service. */
		deployment?: string | null;

		/** Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster. */
		disablePodOverprovisioning?: boolean | null;

		/** Required. Name of the Kubernetes Service. */
		service?: string | null;
	}

	/** Information about the Kubernetes Service networking configuration. */
	export interface ServiceNetworkingFormProperties {

		/** Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service. */
		deployment: FormControl<string | null | undefined>,

		/** Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster. */
		disablePodOverprovisioning: FormControl<boolean | null | undefined>,

		/** Required. Name of the Kubernetes Service. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateServiceNetworkingFormGroup() {
		return new FormGroup<ServiceNetworkingFormProperties>({
			deployment: new FormControl<string | null | undefined>(undefined),
			disablePodOverprovisioning: new FormControl<boolean | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object used by `CancelAutomationRun`. */
	export interface CancelAutomationRunRequest {
	}

	/** The request object used by `CancelAutomationRun`. */
	export interface CancelAutomationRunRequestFormProperties {
	}
	export function CreateCancelAutomationRunRequestFormGroup() {
		return new FormGroup<CancelAutomationRunRequestFormProperties>({
		});

	}


	/** The response object from `CancelAutomationRun`. */
	export interface CancelAutomationRunResponse {
	}

	/** The response object from `CancelAutomationRun`. */
	export interface CancelAutomationRunResponseFormProperties {
	}
	export function CreateCancelAutomationRunResponseFormGroup() {
		return new FormGroup<CancelAutomationRunResponseFormProperties>({
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** The request object used by `CancelRollout`. */
	export interface CancelRolloutRequest {
	}

	/** The request object used by `CancelRollout`. */
	export interface CancelRolloutRequestFormProperties {
	}
	export function CreateCancelRolloutRequestFormGroup() {
		return new FormGroup<CancelRolloutRequestFormProperties>({
		});

	}


	/** The response object from `CancelRollout`. */
	export interface CancelRolloutResponse {
	}

	/** The response object from `CancelRollout`. */
	export interface CancelRolloutResponseFormProperties {
	}
	export function CreateCancelRolloutResponseFormGroup() {
		return new FormGroup<CancelRolloutResponseFormProperties>({
		});

	}


	/** ChildRollouts job composition */
	export interface ChildRolloutJobs {

		/** Output only. List of AdvanceChildRolloutJobs */
		advanceRolloutJobs?: Array<Job>;

		/** Output only. List of CreateChildRolloutJobs */
		createRolloutJobs?: Array<Job>;
	}

	/** ChildRollouts job composition */
	export interface ChildRolloutJobsFormProperties {
	}
	export function CreateChildRolloutJobsFormGroup() {
		return new FormGroup<ChildRolloutJobsFormProperties>({
		});

	}


	/** Job represents an operation for a `Rollout`. */
	export interface Job {

		/** An advanceChildRollout Job. */
		advanceChildRolloutJob?: AdvanceChildRolloutJob;

		/** A createChildRollout Job. */
		createChildRolloutJob?: CreateChildRolloutJob;

		/** A deploy Job. */
		deployJob?: DeployJob;

		/** Output only. The ID of the Job. */
		id?: string | null;

		/** Output only. The name of the `JobRun` responsible for the most recent invocation of this Job. */
		jobRun?: string | null;

		/** A postdeploy Job. */
		postdeployJob?: PostdeployJob;

		/** A predeploy Job. */
		predeployJob?: PredeployJob;

		/** Output only. Additional information on why the Job was skipped, if available. */
		skipMessage?: string | null;

		/** Output only. The current state of the Job. */
		state?: JobState | null;

		/** A verify Job. */
		verifyJob?: VerifyJob;
	}

	/** Job represents an operation for a `Rollout`. */
	export interface JobFormProperties {

		/** Output only. The ID of the Job. */
		id: FormControl<string | null | undefined>,

		/** Output only. The name of the `JobRun` responsible for the most recent invocation of this Job. */
		jobRun: FormControl<string | null | undefined>,

		/** Output only. Additional information on why the Job was skipped, if available. */
		skipMessage: FormControl<string | null | undefined>,

		/** Output only. The current state of the Job. */
		state: FormControl<JobState | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			jobRun: new FormControl<string | null | undefined>(undefined),
			skipMessage: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<JobState | null | undefined>(undefined),
		});

	}


	/** A createChildRollout Job. */
	export interface CreateChildRolloutJob {
	}

	/** A createChildRollout Job. */
	export interface CreateChildRolloutJobFormProperties {
	}
	export function CreateCreateChildRolloutJobFormGroup() {
		return new FormGroup<CreateChildRolloutJobFormProperties>({
		});

	}


	/** A deploy Job. */
	export interface DeployJob {
	}

	/** A deploy Job. */
	export interface DeployJobFormProperties {
	}
	export function CreateDeployJobFormGroup() {
		return new FormGroup<DeployJobFormProperties>({
		});

	}


	/** A postdeploy Job. */
	export interface PostdeployJob {

		/** Output only. The custom actions that the postdeploy Job executes. */
		actions?: Array<string>;
	}

	/** A postdeploy Job. */
	export interface PostdeployJobFormProperties {
	}
	export function CreatePostdeployJobFormGroup() {
		return new FormGroup<PostdeployJobFormProperties>({
		});

	}


	/** A predeploy Job. */
	export interface PredeployJob {

		/** Output only. The custom actions that the predeploy Job executes. */
		actions?: Array<string>;
	}

	/** A predeploy Job. */
	export interface PredeployJobFormProperties {
	}
	export function CreatePredeployJobFormGroup() {
		return new FormGroup<PredeployJobFormProperties>({
		});

	}

	export enum JobState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', DISABLED = 'DISABLED', IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', ABORTED = 'ABORTED', SKIPPED = 'SKIPPED', IGNORED = 'IGNORED' }


	/** A verify Job. */
	export interface VerifyJob {
	}

	/** A verify Job. */
	export interface VerifyJobFormProperties {
	}
	export function CreateVerifyJobFormGroup() {
		return new FormGroup<VerifyJobFormProperties>({
		});

	}


	/** Information specifying where to deploy a Cloud Run Service. */
	export interface CloudRunLocation {

		/** Required. The location for the Cloud Run Service. Format must be `projects/{project}/locations/{location}`. */
		location?: string | null;
	}

	/** Information specifying where to deploy a Cloud Run Service. */
	export interface CloudRunLocationFormProperties {

		/** Required. The location for the Cloud Run Service. Format must be `projects/{project}/locations/{location}`. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateCloudRunLocationFormGroup() {
		return new FormGroup<CloudRunLocationFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CloudRunMetadata contains information from a Cloud Run deployment. */
	export interface CloudRunMetadata {

		/** Output only. The name of the Cloud Run job that is associated with a `Rollout`. Format is `projects/{project}/locations/{location}/jobs/{job_name}`. */
		job?: string | null;

		/** Output only. The Cloud Run Revision id associated with a `Rollout`. */
		revision?: string | null;

		/** Output only. The name of the Cloud Run Service that is associated with a `Rollout`. Format is `projects/{project}/locations/{location}/services/{service}`. */
		service?: string | null;

		/** Output only. The Cloud Run Service urls that are associated with a `Rollout`. */
		serviceUrls?: Array<string>;
	}

	/** CloudRunMetadata contains information from a Cloud Run deployment. */
	export interface CloudRunMetadataFormProperties {

		/** Output only. The name of the Cloud Run job that is associated with a `Rollout`. Format is `projects/{project}/locations/{location}/jobs/{job_name}`. */
		job: FormControl<string | null | undefined>,

		/** Output only. The Cloud Run Revision id associated with a `Rollout`. */
		revision: FormControl<string | null | undefined>,

		/** Output only. The name of the Cloud Run Service that is associated with a `Rollout`. Format is `projects/{project}/locations/{location}/services/{service}`. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateCloudRunMetadataFormGroup() {
		return new FormGroup<CloudRunMetadataFormProperties>({
			job: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CloudRunRenderMetadata contains Cloud Run information associated with a `Release` render. */
	export interface CloudRunRenderMetadata {

		/** Output only. The name of the Cloud Run Service in the rendered manifest. Format is `projects/{project}/locations/{location}/services/{service}`. */
		service?: string | null;
	}

	/** CloudRunRenderMetadata contains Cloud Run information associated with a `Release` render. */
	export interface CloudRunRenderMetadataFormProperties {

		/** Output only. The name of the Cloud Run Service in the rendered manifest. Format is `projects/{project}/locations/{location}/services/{service}`. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateCloudRunRenderMetadataFormGroup() {
		return new FormGroup<CloudRunRenderMetadataFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service-wide configuration. */
	export interface Config {

		/** Default Skaffold version that is assigned when a Release is created without specifying a Skaffold version. */
		defaultSkaffoldVersion?: string | null;

		/** Name of the configuration. */
		name?: string | null;

		/** All supported versions of Skaffold. */
		supportedVersions?: Array<SkaffoldVersion>;
	}

	/** Service-wide configuration. */
	export interface ConfigFormProperties {

		/** Default Skaffold version that is assigned when a Release is created without specifying a Skaffold version. */
		defaultSkaffoldVersion: FormControl<string | null | undefined>,

		/** Name of the configuration. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConfigFormGroup() {
		return new FormGroup<ConfigFormProperties>({
			defaultSkaffoldVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a supported Skaffold version. */
	export interface SkaffoldVersion {

		/** The time at which this version of Skaffold will enter maintenance mode. */
		maintenanceModeTime?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		supportEndDate?: Date;

		/** The time at which this version of Skaffold will no longer be supported. */
		supportExpirationTime?: string | null;

		/** Release version number. For example, "1.20.3". */
		version?: string | null;
	}

	/** Details of a supported Skaffold version. */
	export interface SkaffoldVersionFormProperties {

		/** The time at which this version of Skaffold will enter maintenance mode. */
		maintenanceModeTime: FormControl<string | null | undefined>,

		/** The time at which this version of Skaffold will no longer be supported. */
		supportExpirationTime: FormControl<string | null | undefined>,

		/** Release version number. For example, "1.20.3". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSkaffoldVersionFormGroup() {
		return new FormGroup<SkaffoldVersionFormProperties>({
			maintenanceModeTime: new FormControl<string | null | undefined>(undefined),
			supportExpirationTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** CreateChildRolloutJobRun contains information specific to a createChildRollout `JobRun`. */
	export interface CreateChildRolloutJobRun {

		/** Output only. Name of the `ChildRollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}`. */
		rollout?: string | null;

		/** Output only. The ID of the childRollout Phase initiated by this JobRun. */
		rolloutPhaseId?: string | null;
	}

	/** CreateChildRolloutJobRun contains information specific to a createChildRollout `JobRun`. */
	export interface CreateChildRolloutJobRunFormProperties {

		/** Output only. Name of the `ChildRollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}`. */
		rollout: FormControl<string | null | undefined>,

		/** Output only. The ID of the childRollout Phase initiated by this JobRun. */
		rolloutPhaseId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChildRolloutJobRunFormGroup() {
		return new FormGroup<CreateChildRolloutJobRunFormProperties>({
			rollout: new FormControl<string | null | undefined>(undefined),
			rolloutPhaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CustomMetadata contains information from a user defined operation. */
	export interface CustomMetadata {

		/** Output only. Key-value pairs provided by the user defined operation. */
		values?: {[id: string]: string };
	}

	/** CustomMetadata contains information from a user defined operation. */
	export interface CustomMetadataFormProperties {

		/** Output only. Key-value pairs provided by the user defined operation. */
		values: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCustomMetadataFormGroup() {
		return new FormGroup<CustomMetadataFormProperties>({
			values: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Information specifying a Custom Target. */
	export interface CustomTarget {

		/** Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`. */
		customTargetType?: string | null;
	}

	/** Information specifying a Custom Target. */
	export interface CustomTargetFormProperties {

		/** Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`. */
		customTargetType: FormControl<string | null | undefined>,
	}
	export function CreateCustomTargetFormGroup() {
		return new FormGroup<CustomTargetFormProperties>({
			customTargetType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CustomTargetDeployMetadata contains information from a Custom Target deploy operation. */
	export interface CustomTargetDeployMetadata {

		/** Output only. Skip message provided in the results of a custom deploy operation. */
		skipMessage?: string | null;
	}

	/** CustomTargetDeployMetadata contains information from a Custom Target deploy operation. */
	export interface CustomTargetDeployMetadataFormProperties {

		/** Output only. Skip message provided in the results of a custom deploy operation. */
		skipMessage: FormControl<string | null | undefined>,
	}
	export function CreateCustomTargetDeployMetadataFormGroup() {
		return new FormGroup<CustomTargetDeployMetadataFormProperties>({
			skipMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CustomTargetSkaffoldActions represents the `CustomTargetType` configuration using Skaffold custom actions. */
	export interface CustomTargetSkaffoldActions {

		/** Required. The Skaffold custom action responsible for deploy operations. */
		deployAction?: string | null;

		/** Optional. List of Skaffold modules Cloud Deploy will include in the Skaffold Config as required before performing diagnose. */
		includeSkaffoldModules?: Array<SkaffoldModules>;

		/** Optional. The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via `skaffold render`. */
		renderAction?: string | null;
	}

	/** CustomTargetSkaffoldActions represents the `CustomTargetType` configuration using Skaffold custom actions. */
	export interface CustomTargetSkaffoldActionsFormProperties {

		/** Required. The Skaffold custom action responsible for deploy operations. */
		deployAction: FormControl<string | null | undefined>,

		/** Optional. The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via `skaffold render`. */
		renderAction: FormControl<string | null | undefined>,
	}
	export function CreateCustomTargetSkaffoldActionsFormGroup() {
		return new FormGroup<CustomTargetSkaffoldActionsFormProperties>({
			deployAction: new FormControl<string | null | undefined>(undefined),
			renderAction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Skaffold Config modules and their remote source. */
	export interface SkaffoldModules {

		/** Optional. The Skaffold Config modules to use from the specified source. */
		configs?: Array<string>;

		/** Git repository containing Skaffold Config modules. */
		git?: SkaffoldGitSource;

		/** Cloud Storage bucket containing Skaffold Config modules. */
		googleCloudStorage?: SkaffoldGCSSource;
	}

	/** Skaffold Config modules and their remote source. */
	export interface SkaffoldModulesFormProperties {
	}
	export function CreateSkaffoldModulesFormGroup() {
		return new FormGroup<SkaffoldModulesFormProperties>({
		});

	}


	/** Git repository containing Skaffold Config modules. */
	export interface SkaffoldGitSource {

		/** Optional. Relative path from the repository root to the Skaffold file. */
		path?: string | null;

		/** Optional. Git ref the package should be cloned from. */
		ref?: string | null;

		/** Required. Git repository the package should be cloned from. */
		repo?: string | null;
	}

	/** Git repository containing Skaffold Config modules. */
	export interface SkaffoldGitSourceFormProperties {

		/** Optional. Relative path from the repository root to the Skaffold file. */
		path: FormControl<string | null | undefined>,

		/** Optional. Git ref the package should be cloned from. */
		ref: FormControl<string | null | undefined>,

		/** Required. Git repository the package should be cloned from. */
		repo: FormControl<string | null | undefined>,
	}
	export function CreateSkaffoldGitSourceFormGroup() {
		return new FormGroup<SkaffoldGitSourceFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			repo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud Storage bucket containing Skaffold Config modules. */
	export interface SkaffoldGCSSource {

		/** Optional. Relative path from the source to the Skaffold file. */
		path?: string | null;

		/** Required. Cloud Storage source paths to copy recursively. For example, providing "gs://my-bucket/dir/configs/*" will result in Skaffold copying all files within the "dir/configs" directory in the bucket "my-bucket". */
		source?: string | null;
	}

	/** Cloud Storage bucket containing Skaffold Config modules. */
	export interface SkaffoldGCSSourceFormProperties {

		/** Optional. Relative path from the source to the Skaffold file. */
		path: FormControl<string | null | undefined>,

		/** Required. Cloud Storage source paths to copy recursively. For example, providing "gs://my-bucket/dir/configs/*" will result in Skaffold copying all files within the "dir/configs" directory in the bucket "my-bucket". */
		source: FormControl<string | null | undefined>,
	}
	export function CreateSkaffoldGCSSourceFormGroup() {
		return new FormGroup<SkaffoldGCSSourceFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `CustomTargetType` resource in the Cloud Deploy API. A `CustomTargetType` defines a type of custom target that can be referenced in a `Target` in order to facilitate deploying to a runtime that does not have a 1P integration with Cloud Deploy. */
	export interface CustomTargetType {

		/** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
		annotations?: {[id: string]: string };

		/** Output only. Time at which the `CustomTargetType` was created. */
		createTime?: string | null;

		/** CustomTargetSkaffoldActions represents the `CustomTargetType` configuration using Skaffold custom actions. */
		customActions?: CustomTargetSkaffoldActions;

		/** Output only. Resource id of the `CustomTargetType`. */
		customTargetTypeId?: string | null;

		/** Optional. Description of the `CustomTargetType`. Max length is 255 characters. */
		description?: string | null;

		/** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
		labels?: {[id: string]: string };

		/** Optional. Name of the `CustomTargetType`. Format is `projects/{project}/locations/{location}/customTargetTypes/a-z{0,62}`. */
		name?: string | null;

		/** Output only. Unique identifier of the `CustomTargetType`. */
		uid?: string | null;

		/** Output only. Most recent time at which the `CustomTargetType` was updated. */
		updateTime?: string | null;
	}

	/** A `CustomTargetType` resource in the Cloud Deploy API. A `CustomTargetType` defines a type of custom target that can be referenced in a `Target` in order to facilitate deploying to a runtime that does not have a 1P integration with Cloud Deploy. */
	export interface CustomTargetTypeFormProperties {

		/** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Time at which the `CustomTargetType` was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Resource id of the `CustomTargetType`. */
		customTargetTypeId: FormControl<string | null | undefined>,

		/** Optional. Description of the `CustomTargetType`. Max length is 255 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Name of the `CustomTargetType`. Format is `projects/{project}/locations/{location}/customTargetTypes/a-z{0,62}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Unique identifier of the `CustomTargetType`. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Most recent time at which the `CustomTargetType` was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCustomTargetTypeFormGroup() {
		return new FormGroup<CustomTargetTypeFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			customTargetTypeId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Execution using the default Cloud Build pool. */
	export interface DefaultPool {

		/** Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used. */
		artifactStorage?: string | null;

		/** Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. */
		serviceAccount?: string | null;
	}

	/** Execution using the default Cloud Build pool. */
	export interface DefaultPoolFormProperties {

		/** Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used. */
		artifactStorage: FormControl<string | null | undefined>,

		/** Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. */
		serviceAccount: FormControl<string | null | undefined>,
	}
	export function CreateDefaultPoolFormGroup() {
		return new FormGroup<DefaultPoolFormProperties>({
			artifactStorage: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `DeliveryPipeline` resource in the Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress. */
	export interface DeliveryPipeline {

		/** User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. */
		annotations?: {[id: string]: string };

		/** PipelineCondition contains all conditions relevant to a Delivery Pipeline. */
		condition?: PipelineCondition;

		/** Output only. Time at which the pipeline was created. */
		createTime?: string | null;

		/** Description of the `DeliveryPipeline`. Max length is 255 characters. */
		description?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
		labels?: {[id: string]: string };

		/** Optional. Name of the `DeliveryPipeline`. Format is `projects/{project}/locations/{location}/deliveryPipelines/a-z{0,62}`. */
		name?: string | null;

		/** SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`. */
		serialPipeline?: SerialPipeline;

		/** When suspended, no new releases or rollouts can be created, but in-progress ones will complete. */
		suspended?: boolean | null;

		/** Output only. Unique identifier of the `DeliveryPipeline`. */
		uid?: string | null;

		/** Output only. Most recent time at which the pipeline was updated. */
		updateTime?: string | null;
	}

	/** A `DeliveryPipeline` resource in the Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress. */
	export interface DeliveryPipelineFormProperties {

		/** User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Time at which the pipeline was created. */
		createTime: FormControl<string | null | undefined>,

		/** Description of the `DeliveryPipeline`. Max length is 255 characters. */
		description: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Name of the `DeliveryPipeline`. Format is `projects/{project}/locations/{location}/deliveryPipelines/a-z{0,62}`. */
		name: FormControl<string | null | undefined>,

		/** When suspended, no new releases or rollouts can be created, but in-progress ones will complete. */
		suspended: FormControl<boolean | null | undefined>,

		/** Output only. Unique identifier of the `DeliveryPipeline`. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Most recent time at which the pipeline was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryPipelineFormGroup() {
		return new FormGroup<DeliveryPipelineFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PipelineCondition contains all conditions relevant to a Delivery Pipeline. */
	export interface PipelineCondition {

		/** PipelineReadyCondition contains information around the status of the Pipeline. */
		pipelineReadyCondition?: PipelineReadyCondition;

		/** `TargetsPresentCondition` contains information on any Targets referenced in the Delivery Pipeline that do not actually exist. */
		targetsPresentCondition?: TargetsPresentCondition;

		/** TargetsTypeCondition contains information on whether the Targets defined in the Delivery Pipeline are of the same type. */
		targetsTypeCondition?: TargetsTypeCondition;
	}

	/** PipelineCondition contains all conditions relevant to a Delivery Pipeline. */
	export interface PipelineConditionFormProperties {
	}
	export function CreatePipelineConditionFormGroup() {
		return new FormGroup<PipelineConditionFormProperties>({
		});

	}


	/** PipelineReadyCondition contains information around the status of the Pipeline. */
	export interface PipelineReadyCondition {

		/** True if the Pipeline is in a valid state. Otherwise at least one condition in `PipelineCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Pipeline. */
		status?: boolean | null;

		/** Last time the condition was updated. */
		updateTime?: string | null;
	}

	/** PipelineReadyCondition contains information around the status of the Pipeline. */
	export interface PipelineReadyConditionFormProperties {

		/** True if the Pipeline is in a valid state. Otherwise at least one condition in `PipelineCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Pipeline. */
		status: FormControl<boolean | null | undefined>,

		/** Last time the condition was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePipelineReadyConditionFormGroup() {
		return new FormGroup<PipelineReadyConditionFormProperties>({
			status: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TargetsTypeCondition contains information on whether the Targets defined in the Delivery Pipeline are of the same type. */
	export interface TargetsTypeCondition {

		/** Human readable error message. */
		errorDetails?: string | null;

		/** True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters. */
		status?: boolean | null;
	}

	/** TargetsTypeCondition contains information on whether the Targets defined in the Delivery Pipeline are of the same type. */
	export interface TargetsTypeConditionFormProperties {

		/** Human readable error message. */
		errorDetails: FormControl<string | null | undefined>,

		/** True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters. */
		status: FormControl<boolean | null | undefined>,
	}
	export function CreateTargetsTypeConditionFormGroup() {
		return new FormGroup<TargetsTypeConditionFormProperties>({
			errorDetails: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`. */
	export interface SerialPipeline {

		/** Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow. */
		stages?: Array<Stage>;
	}

	/** SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`. */
	export interface SerialPipelineFormProperties {
	}
	export function CreateSerialPipelineFormGroup() {
		return new FormGroup<SerialPipelineFormProperties>({
		});

	}


	/** Stage specifies a location to which to deploy. */
	export interface Stage {

		/** Optional. The deploy parameters to use for the target in this stage. */
		deployParameters?: Array<DeployParameters>;

		/** Skaffold profiles to use when rendering the manifest for this stage's `Target`. */
		profiles?: Array<string>;

		/** Strategy contains deployment strategy information. */
		strategy?: Strategy;

		/** The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`. */
		targetId?: string | null;
	}

	/** Stage specifies a location to which to deploy. */
	export interface StageFormProperties {

		/** The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`. */
		targetId: FormControl<string | null | undefined>,
	}
	export function CreateStageFormGroup() {
		return new FormGroup<StageFormProperties>({
			targetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DeployParameters contains deploy parameters information. */
	export interface DeployParameters {

		/** Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target). */
		matchTargetLabels?: {[id: string]: string };

		/** Required. Values are deploy parameters in key-value pairs. */
		values?: {[id: string]: string };
	}

	/** DeployParameters contains deploy parameters information. */
	export interface DeployParametersFormProperties {

		/** Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target). */
		matchTargetLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Values are deploy parameters in key-value pairs. */
		values: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDeployParametersFormGroup() {
		return new FormGroup<DeployParametersFormProperties>({
			matchTargetLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			values: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Strategy contains deployment strategy information. */
	export interface Strategy {

		/** Canary represents the canary deployment strategy. */
		canary?: Canary;

		/** Standard represents the standard deployment strategy. */
		standard?: Standard;
	}

	/** Strategy contains deployment strategy information. */
	export interface StrategyFormProperties {
	}
	export function CreateStrategyFormGroup() {
		return new FormGroup<StrategyFormProperties>({
		});

	}


	/** Standard represents the standard deployment strategy. */
	export interface Standard {

		/** Postdeploy contains the postdeploy job configuration information. */
		postdeploy?: Postdeploy;

		/** Predeploy contains the predeploy job configuration information. */
		predeploy?: Predeploy;

		/** Whether to verify a deployment. */
		verify?: boolean | null;
	}

	/** Standard represents the standard deployment strategy. */
	export interface StandardFormProperties {

		/** Whether to verify a deployment. */
		verify: FormControl<boolean | null | undefined>,
	}
	export function CreateStandardFormGroup() {
		return new FormGroup<StandardFormProperties>({
			verify: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Payload proto for "clouddeploy.googleapis.com/deliverypipeline_notification" Platform Log event that describes the failure to send delivery pipeline status change Pub/Sub notification. */
	export interface DeliveryPipelineNotificationEvent {

		/** The name of the `Delivery Pipeline`. */
		deliveryPipeline?: string | null;

		/** Debug message for when a notification fails to send. */
		message?: string | null;

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type?: AutomationEventType | null;
	}

	/** Payload proto for "clouddeploy.googleapis.com/deliverypipeline_notification" Platform Log event that describes the failure to send delivery pipeline status change Pub/Sub notification. */
	export interface DeliveryPipelineNotificationEventFormProperties {

		/** The name of the `Delivery Pipeline`. */
		deliveryPipeline: FormControl<string | null | undefined>,

		/** Debug message for when a notification fails to send. */
		message: FormControl<string | null | undefined>,

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type: FormControl<AutomationEventType | null | undefined>,
	}
	export function CreateDeliveryPipelineNotificationEventFormGroup() {
		return new FormGroup<DeliveryPipelineNotificationEventFormProperties>({
			deliveryPipeline: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AutomationEventType | null | undefined>(undefined),
		});

	}


	/** The artifacts produced by a deploy operation. */
	export interface DeployArtifact {

		/** Output only. URI of a directory containing the artifacts. All paths are relative to this location. */
		artifactUri?: string | null;

		/** Output only. File paths of the manifests applied during the deploy operation relative to the URI. */
		manifestPaths?: Array<string>;
	}

	/** The artifacts produced by a deploy operation. */
	export interface DeployArtifactFormProperties {

		/** Output only. URI of a directory containing the artifacts. All paths are relative to this location. */
		artifactUri: FormControl<string | null | undefined>,
	}
	export function CreateDeployArtifactFormGroup() {
		return new FormGroup<DeployArtifactFormProperties>({
			artifactUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DeployJobRun contains information specific to a deploy `JobRun`. */
	export interface DeployJobRun {

		/** The artifacts produced by a deploy operation. */
		artifact?: DeployArtifact;

		/** Output only. The resource name of the Cloud Build `Build` object that is used to deploy. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		build?: string | null;

		/** Output only. The reason the deploy failed. This will always be unspecified while the deploy is in progress or if it succeeded. */
		failureCause?: DeployJobRunFailureCause | null;

		/** Output only. Additional information about the deploy failure, if available. */
		failureMessage?: string | null;

		/** DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user. */
		metadata?: DeployJobRunMetadata;
	}

	/** DeployJobRun contains information specific to a deploy `JobRun`. */
	export interface DeployJobRunFormProperties {

		/** Output only. The resource name of the Cloud Build `Build` object that is used to deploy. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		build: FormControl<string | null | undefined>,

		/** Output only. The reason the deploy failed. This will always be unspecified while the deploy is in progress or if it succeeded. */
		failureCause: FormControl<DeployJobRunFailureCause | null | undefined>,

		/** Output only. Additional information about the deploy failure, if available. */
		failureMessage: FormControl<string | null | undefined>,
	}
	export function CreateDeployJobRunFormGroup() {
		return new FormGroup<DeployJobRunFormProperties>({
			build: new FormControl<string | null | undefined>(undefined),
			failureCause: new FormControl<DeployJobRunFailureCause | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeployJobRunFailureCause { FAILURE_CAUSE_UNSPECIFIED = 'FAILURE_CAUSE_UNSPECIFIED', CLOUD_BUILD_UNAVAILABLE = 'CLOUD_BUILD_UNAVAILABLE', EXECUTION_FAILED = 'EXECUTION_FAILED', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED', MISSING_RESOURCES_FOR_CANARY = 'MISSING_RESOURCES_FOR_CANARY', CLOUD_BUILD_REQUEST_FAILED = 'CLOUD_BUILD_REQUEST_FAILED', DEPLOY_FEATURE_NOT_SUPPORTED = 'DEPLOY_FEATURE_NOT_SUPPORTED' }


	/** DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user. */
	export interface DeployJobRunMetadata {

		/** CloudRunMetadata contains information from a Cloud Run deployment. */
		cloudRun?: CloudRunMetadata;

		/** CustomMetadata contains information from a user defined operation. */
		custom?: CustomMetadata;

		/** CustomTargetDeployMetadata contains information from a Custom Target deploy operation. */
		customTarget?: CustomTargetDeployMetadata;
	}

	/** DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user. */
	export interface DeployJobRunMetadataFormProperties {
	}
	export function CreateDeployJobRunMetadataFormGroup() {
		return new FormGroup<DeployJobRunMetadataFormProperties>({
		});

	}


	/** Deployment job composition. */
	export interface DeploymentJobs {

		/** Job represents an operation for a `Rollout`. */
		deployJob?: Job;

		/** Job represents an operation for a `Rollout`. */
		postdeployJob?: Job;

		/** Job represents an operation for a `Rollout`. */
		predeployJob?: Job;

		/** Job represents an operation for a `Rollout`. */
		verifyJob?: Job;
	}

	/** Deployment job composition. */
	export interface DeploymentJobsFormProperties {
	}
	export function CreateDeploymentJobsFormGroup() {
		return new FormGroup<DeploymentJobsFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Configuration of the environment to use when calling Skaffold. */
	export interface ExecutionConfig {

		/** Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used. */
		artifactStorage?: string | null;

		/** Execution using the default Cloud Build pool. */
		defaultPool?: DefaultPool;

		/** Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used. */
		executionTimeout?: string | null;

		/** Execution using a private Cloud Build pool. */
		privatePool?: PrivatePool;

		/** Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. */
		serviceAccount?: string | null;

		/** Required. Usages when this configuration should be applied. */
		usages?: Array<string>;

		/** Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used. */
		workerPool?: string | null;
	}

	/** Configuration of the environment to use when calling Skaffold. */
	export interface ExecutionConfigFormProperties {

		/** Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used. */
		artifactStorage: FormControl<string | null | undefined>,

		/** Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used. */
		executionTimeout: FormControl<string | null | undefined>,

		/** Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used. */
		workerPool: FormControl<string | null | undefined>,
	}
	export function CreateExecutionConfigFormGroup() {
		return new FormGroup<ExecutionConfigFormProperties>({
			artifactStorage: new FormControl<string | null | undefined>(undefined),
			executionTimeout: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Execution using a private Cloud Build pool. */
	export interface PrivatePool {

		/** Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used. */
		artifactStorage?: string | null;

		/** Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. */
		serviceAccount?: string | null;

		/** Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`. */
		workerPool?: string | null;
	}

	/** Execution using a private Cloud Build pool. */
	export interface PrivatePoolFormProperties {

		/** Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used. */
		artifactStorage: FormControl<string | null | undefined>,

		/** Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`. */
		workerPool: FormControl<string | null | undefined>,
	}
	export function CreatePrivatePoolFormGroup() {
		return new FormGroup<PrivatePoolFormProperties>({
			artifactStorage: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information specifying a GKE Cluster. */
	export interface GkeCluster {

		/** Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`. */
		cluster?: string | null;

		/** Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept). */
		internalIp?: boolean | null;
	}

	/** Information specifying a GKE Cluster. */
	export interface GkeClusterFormProperties {

		/** Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`. */
		cluster: FormControl<string | null | undefined>,

		/** Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept). */
		internalIp: FormControl<boolean | null | undefined>,
	}
	export function CreateGkeClusterFormGroup() {
		return new FormGroup<GkeClusterFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			internalIp: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The request object used by `IgnoreJob`. */
	export interface IgnoreJobRequest {

		/** Required. The job ID for the Job to ignore. */
		jobId?: string | null;

		/** Required. The phase ID the Job to ignore belongs to. */
		phaseId?: string | null;
	}

	/** The request object used by `IgnoreJob`. */
	export interface IgnoreJobRequestFormProperties {

		/** Required. The job ID for the Job to ignore. */
		jobId: FormControl<string | null | undefined>,

		/** Required. The phase ID the Job to ignore belongs to. */
		phaseId: FormControl<string | null | undefined>,
	}
	export function CreateIgnoreJobRequestFormGroup() {
		return new FormGroup<IgnoreJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			phaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object from `IgnoreJob`. */
	export interface IgnoreJobResponse {
	}

	/** The response object from `IgnoreJob`. */
	export interface IgnoreJobResponseFormProperties {
	}
	export function CreateIgnoreJobResponseFormGroup() {
		return new FormGroup<IgnoreJobResponseFormProperties>({
		});

	}


	/** A `JobRun` resource in the Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation. */
	export interface JobRun {

		/** AdvanceChildRolloutJobRun contains information specific to a advanceChildRollout `JobRun`. */
		advanceChildRolloutJobRun?: AdvanceChildRolloutJobRun;

		/** CreateChildRolloutJobRun contains information specific to a createChildRollout `JobRun`. */
		createChildRolloutJobRun?: CreateChildRolloutJobRun;

		/** Output only. Time at which the `JobRun` was created. */
		createTime?: string | null;

		/** DeployJobRun contains information specific to a deploy `JobRun`. */
		deployJobRun?: DeployJobRun;

		/** Output only. Time at which the `JobRun` ended. */
		endTime?: string | null;

		/** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. ID of the `Rollout` job this `JobRun` corresponds to. */
		jobId?: string | null;

		/** Optional. Name of the `JobRun`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{releases}/rollouts/{rollouts}/jobRuns/{uuid}`. */
		name?: string | null;

		/** Output only. ID of the `Rollout` phase this `JobRun` belongs in. */
		phaseId?: string | null;

		/** PostdeployJobRun contains information specific to a postdeploy `JobRun`. */
		postdeployJobRun?: PostdeployJobRun;

		/** PredeployJobRun contains information specific to a predeploy `JobRun`. */
		predeployJobRun?: PredeployJobRun;

		/** Output only. Time at which the `JobRun` was started. */
		startTime?: string | null;

		/** Output only. The current state of the `JobRun`. */
		state?: JobRunState | null;

		/** Output only. Unique identifier of the `JobRun`. */
		uid?: string | null;

		/** VerifyJobRun contains information specific to a verify `JobRun`. */
		verifyJobRun?: VerifyJobRun;
	}

	/** A `JobRun` resource in the Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation. */
	export interface JobRunFormProperties {

		/** Output only. Time at which the `JobRun` was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time at which the `JobRun` ended. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. ID of the `Rollout` job this `JobRun` corresponds to. */
		jobId: FormControl<string | null | undefined>,

		/** Optional. Name of the `JobRun`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{releases}/rollouts/{rollouts}/jobRuns/{uuid}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. ID of the `Rollout` phase this `JobRun` belongs in. */
		phaseId: FormControl<string | null | undefined>,

		/** Output only. Time at which the `JobRun` was started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The current state of the `JobRun`. */
		state: FormControl<JobRunState | null | undefined>,

		/** Output only. Unique identifier of the `JobRun`. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateJobRunFormGroup() {
		return new FormGroup<JobRunFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phaseId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<JobRunState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PostdeployJobRun contains information specific to a postdeploy `JobRun`. */
	export interface PostdeployJobRun {

		/** Output only. The resource name of the Cloud Build `Build` object that is used to execute the custom actions associated with the postdeploy Job. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		build?: string | null;

		/** Output only. The reason the postdeploy failed. This will always be unspecified while the postdeploy is in progress or if it succeeded. */
		failureCause?: PostdeployJobRunFailureCause | null;

		/** Output only. Additional information about the postdeploy failure, if available. */
		failureMessage?: string | null;
	}

	/** PostdeployJobRun contains information specific to a postdeploy `JobRun`. */
	export interface PostdeployJobRunFormProperties {

		/** Output only. The resource name of the Cloud Build `Build` object that is used to execute the custom actions associated with the postdeploy Job. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		build: FormControl<string | null | undefined>,

		/** Output only. The reason the postdeploy failed. This will always be unspecified while the postdeploy is in progress or if it succeeded. */
		failureCause: FormControl<PostdeployJobRunFailureCause | null | undefined>,

		/** Output only. Additional information about the postdeploy failure, if available. */
		failureMessage: FormControl<string | null | undefined>,
	}
	export function CreatePostdeployJobRunFormGroup() {
		return new FormGroup<PostdeployJobRunFormProperties>({
			build: new FormControl<string | null | undefined>(undefined),
			failureCause: new FormControl<PostdeployJobRunFailureCause | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PostdeployJobRunFailureCause { FAILURE_CAUSE_UNSPECIFIED = 'FAILURE_CAUSE_UNSPECIFIED', CLOUD_BUILD_UNAVAILABLE = 'CLOUD_BUILD_UNAVAILABLE', EXECUTION_FAILED = 'EXECUTION_FAILED', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED', CLOUD_BUILD_REQUEST_FAILED = 'CLOUD_BUILD_REQUEST_FAILED' }


	/** PredeployJobRun contains information specific to a predeploy `JobRun`. */
	export interface PredeployJobRun {

		/** Output only. The resource name of the Cloud Build `Build` object that is used to execute the custom actions associated with the predeploy Job. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		build?: string | null;

		/** Output only. The reason the predeploy failed. This will always be unspecified while the predeploy is in progress or if it succeeded. */
		failureCause?: PostdeployJobRunFailureCause | null;

		/** Output only. Additional information about the predeploy failure, if available. */
		failureMessage?: string | null;
	}

	/** PredeployJobRun contains information specific to a predeploy `JobRun`. */
	export interface PredeployJobRunFormProperties {

		/** Output only. The resource name of the Cloud Build `Build` object that is used to execute the custom actions associated with the predeploy Job. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		build: FormControl<string | null | undefined>,

		/** Output only. The reason the predeploy failed. This will always be unspecified while the predeploy is in progress or if it succeeded. */
		failureCause: FormControl<PostdeployJobRunFailureCause | null | undefined>,

		/** Output only. Additional information about the predeploy failure, if available. */
		failureMessage: FormControl<string | null | undefined>,
	}
	export function CreatePredeployJobRunFormGroup() {
		return new FormGroup<PredeployJobRunFormProperties>({
			build: new FormControl<string | null | undefined>(undefined),
			failureCause: new FormControl<PostdeployJobRunFailureCause | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobRunState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED' }


	/** VerifyJobRun contains information specific to a verify `JobRun`. */
	export interface VerifyJobRun {

		/** Output only. URI of a directory containing the verify artifacts. This contains the Skaffold event log. */
		artifactUri?: string | null;

		/** Output only. The resource name of the Cloud Build `Build` object that is used to verify. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		build?: string | null;

		/** Output only. File path of the Skaffold event log relative to the artifact URI. */
		eventLogPath?: string | null;

		/** Output only. The reason the verify failed. This will always be unspecified while the verify is in progress or if it succeeded. */
		failureCause?: VerifyJobRunFailureCause | null;

		/** Output only. Additional information about the verify failure, if available. */
		failureMessage?: string | null;
	}

	/** VerifyJobRun contains information specific to a verify `JobRun`. */
	export interface VerifyJobRunFormProperties {

		/** Output only. URI of a directory containing the verify artifacts. This contains the Skaffold event log. */
		artifactUri: FormControl<string | null | undefined>,

		/** Output only. The resource name of the Cloud Build `Build` object that is used to verify. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		build: FormControl<string | null | undefined>,

		/** Output only. File path of the Skaffold event log relative to the artifact URI. */
		eventLogPath: FormControl<string | null | undefined>,

		/** Output only. The reason the verify failed. This will always be unspecified while the verify is in progress or if it succeeded. */
		failureCause: FormControl<VerifyJobRunFailureCause | null | undefined>,

		/** Output only. Additional information about the verify failure, if available. */
		failureMessage: FormControl<string | null | undefined>,
	}
	export function CreateVerifyJobRunFormGroup() {
		return new FormGroup<VerifyJobRunFormProperties>({
			artifactUri: new FormControl<string | null | undefined>(undefined),
			build: new FormControl<string | null | undefined>(undefined),
			eventLogPath: new FormControl<string | null | undefined>(undefined),
			failureCause: new FormControl<VerifyJobRunFailureCause | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VerifyJobRunFailureCause { FAILURE_CAUSE_UNSPECIFIED = 'FAILURE_CAUSE_UNSPECIFIED', CLOUD_BUILD_UNAVAILABLE = 'CLOUD_BUILD_UNAVAILABLE', EXECUTION_FAILED = 'EXECUTION_FAILED', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED', VERIFICATION_CONFIG_NOT_FOUND = 'VERIFICATION_CONFIG_NOT_FOUND', CLOUD_BUILD_REQUEST_FAILED = 'CLOUD_BUILD_REQUEST_FAILED' }


	/** Payload proto for "clouddeploy.googleapis.com/jobrun_notification" Platform Log event that describes the failure to send JobRun resource update Pub/Sub notification. */
	export interface JobRunNotificationEvent {

		/** The name of the `JobRun`. */
		jobRun?: string | null;

		/** Debug message for when a notification fails to send. */
		message?: string | null;

		/** Unique identifier of the `DeliveryPipeline`. */
		pipelineUid?: string | null;

		/** Unique identifier of the `Release`. */
		releaseUid?: string | null;

		/** Unique identifier of the `Rollout`. */
		rolloutUid?: string | null;

		/** ID of the `Target`. */
		targetId?: string | null;

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type?: AutomationEventType | null;
	}

	/** Payload proto for "clouddeploy.googleapis.com/jobrun_notification" Platform Log event that describes the failure to send JobRun resource update Pub/Sub notification. */
	export interface JobRunNotificationEventFormProperties {

		/** The name of the `JobRun`. */
		jobRun: FormControl<string | null | undefined>,

		/** Debug message for when a notification fails to send. */
		message: FormControl<string | null | undefined>,

		/** Unique identifier of the `DeliveryPipeline`. */
		pipelineUid: FormControl<string | null | undefined>,

		/** Unique identifier of the `Release`. */
		releaseUid: FormControl<string | null | undefined>,

		/** Unique identifier of the `Rollout`. */
		rolloutUid: FormControl<string | null | undefined>,

		/** ID of the `Target`. */
		targetId: FormControl<string | null | undefined>,

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type: FormControl<AutomationEventType | null | undefined>,
	}
	export function CreateJobRunNotificationEventFormGroup() {
		return new FormGroup<JobRunNotificationEventFormProperties>({
			jobRun: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			pipelineUid: new FormControl<string | null | undefined>(undefined),
			releaseUid: new FormControl<string | null | undefined>(undefined),
			rolloutUid: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AutomationEventType | null | undefined>(undefined),
		});

	}


	/** The response object from `ListAutomationRuns`. */
	export interface ListAutomationRunsResponse {

		/** The `AutomationRuns` objects. */
		automationRuns?: Array<AutomationRun>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** The response object from `ListAutomationRuns`. */
	export interface ListAutomationRunsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAutomationRunsResponseFormGroup() {
		return new FormGroup<ListAutomationRunsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object from `ListAutomations`. */
	export interface ListAutomationsResponse {

		/** The `Automation` objects. */
		automations?: Array<Automation>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** The response object from `ListAutomations`. */
	export interface ListAutomationsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAutomationsResponseFormGroup() {
		return new FormGroup<ListAutomationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object from `ListCustomTargetTypes.` */
	export interface ListCustomTargetTypesResponse {

		/** The `CustomTargetType` objects. */
		customTargetTypes?: Array<CustomTargetType>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** The response object from `ListCustomTargetTypes.` */
	export interface ListCustomTargetTypesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomTargetTypesResponseFormGroup() {
		return new FormGroup<ListCustomTargetTypesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object from `ListDeliveryPipelines`. */
	export interface ListDeliveryPipelinesResponse {

		/** The `DeliveryPipeline` objects. */
		deliveryPipelines?: Array<DeliveryPipeline>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** The response object from `ListDeliveryPipelines`. */
	export interface ListDeliveryPipelinesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeliveryPipelinesResponseFormGroup() {
		return new FormGroup<ListDeliveryPipelinesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListJobRunsResponse is the response object returned by `ListJobRuns`. */
	export interface ListJobRunsResponse {

		/** The `JobRun` objects. */
		jobRuns?: Array<JobRun>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached */
		unreachable?: Array<string>;
	}

	/** ListJobRunsResponse is the response object returned by `ListJobRuns`. */
	export interface ListJobRunsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobRunsResponseFormGroup() {
		return new FormGroup<ListJobRunsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object from `ListReleases`. */
	export interface ListReleasesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The `Release` objects. */
		releases?: Array<Release>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** The response object from `ListReleases`. */
	export interface ListReleasesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReleasesResponseFormGroup() {
		return new FormGroup<ListReleasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `Release` resource in the Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed. */
	export interface Release {

		/** Output only. Indicates whether this is an abandoned release. */
		abandoned?: boolean | null;

		/** User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
		annotations?: {[id: string]: string };

		/** List of artifacts to pass through to Skaffold command. */
		buildArtifacts?: Array<BuildArtifact>;

		/** ReleaseCondition contains all conditions relevant to a Release. */
		condition?: ReleaseCondition;

		/** Output only. Time at which the `Release` was created. */
		createTime?: string | null;

		/** Output only. Snapshot of the custom target types referenced by the targets taken at release creation time. */
		customTargetTypeSnapshots?: Array<CustomTargetType>;

		/** A `DeliveryPipeline` resource in the Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress. */
		deliveryPipelineSnapshot?: DeliveryPipeline;

		/** Optional. The deploy parameters to use for all targets in this release. */
		deployParameters?: {[id: string]: string };

		/** Description of the `Release`. Max length is 255 characters. */
		description?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
		labels?: {[id: string]: string };

		/** Optional. Name of the `Release`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/a-z{0,62}`. */
		name?: string | null;

		/** Output only. Time at which the render completed. */
		renderEndTime?: string | null;

		/** Output only. Time at which the render began. */
		renderStartTime?: string | null;

		/** Output only. Current state of the render operation. */
		renderState?: ReleaseRenderState | null;

		/** Filepath of the Skaffold config inside of the config URI. */
		skaffoldConfigPath?: string | null;

		/** Cloud Storage URI of tar.gz archive containing Skaffold configuration. */
		skaffoldConfigUri?: string | null;

		/** The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used. */
		skaffoldVersion?: string | null;

		/** Output only. Map from target ID to the target artifacts created during the render operation. */
		targetArtifacts?: {[id: string]: TargetArtifact };

		/** Output only. Map from target ID to details of the render operation for that target. */
		targetRenders?: {[id: string]: TargetRender };

		/** Output only. Snapshot of the targets taken at release creation time. */
		targetSnapshots?: Array<Target>;

		/** Output only. Unique identifier of the `Release`. */
		uid?: string | null;
	}

	/** A `Release` resource in the Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed. */
	export interface ReleaseFormProperties {

		/** Output only. Indicates whether this is an abandoned release. */
		abandoned: FormControl<boolean | null | undefined>,

		/** User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Time at which the `Release` was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The deploy parameters to use for all targets in this release. */
		deployParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Description of the `Release`. Max length is 255 characters. */
		description: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Name of the `Release`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/a-z{0,62}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Time at which the render completed. */
		renderEndTime: FormControl<string | null | undefined>,

		/** Output only. Time at which the render began. */
		renderStartTime: FormControl<string | null | undefined>,

		/** Output only. Current state of the render operation. */
		renderState: FormControl<ReleaseRenderState | null | undefined>,

		/** Filepath of the Skaffold config inside of the config URI. */
		skaffoldConfigPath: FormControl<string | null | undefined>,

		/** Cloud Storage URI of tar.gz archive containing Skaffold configuration. */
		skaffoldConfigUri: FormControl<string | null | undefined>,

		/** The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used. */
		skaffoldVersion: FormControl<string | null | undefined>,

		/** Output only. Map from target ID to the target artifacts created during the render operation. */
		targetArtifacts: FormControl<{[id: string]: TargetArtifact } | null | undefined>,

		/** Output only. Map from target ID to details of the render operation for that target. */
		targetRenders: FormControl<{[id: string]: TargetRender } | null | undefined>,

		/** Output only. Unique identifier of the `Release`. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateReleaseFormGroup() {
		return new FormGroup<ReleaseFormProperties>({
			abandoned: new FormControl<boolean | null | undefined>(undefined),
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deployParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			renderEndTime: new FormControl<string | null | undefined>(undefined),
			renderStartTime: new FormControl<string | null | undefined>(undefined),
			renderState: new FormControl<ReleaseRenderState | null | undefined>(undefined),
			skaffoldConfigPath: new FormControl<string | null | undefined>(undefined),
			skaffoldConfigUri: new FormControl<string | null | undefined>(undefined),
			skaffoldVersion: new FormControl<string | null | undefined>(undefined),
			targetArtifacts: new FormControl<{[id: string]: TargetArtifact } | null | undefined>(undefined),
			targetRenders: new FormControl<{[id: string]: TargetRender } | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ReleaseCondition contains all conditions relevant to a Release. */
	export interface ReleaseCondition {

		/** ReleaseReadyCondition contains information around the status of the Release. If a release is not ready, you cannot create a rollout with the release. */
		releaseReadyCondition?: ReleaseReadyCondition;

		/** SkaffoldSupportedCondition contains information about when support for the release's version of Skaffold ends. */
		skaffoldSupportedCondition?: SkaffoldSupportedCondition;
	}

	/** ReleaseCondition contains all conditions relevant to a Release. */
	export interface ReleaseConditionFormProperties {
	}
	export function CreateReleaseConditionFormGroup() {
		return new FormGroup<ReleaseConditionFormProperties>({
		});

	}


	/** ReleaseReadyCondition contains information around the status of the Release. If a release is not ready, you cannot create a rollout with the release. */
	export interface ReleaseReadyCondition {

		/** True if the Release is in a valid state. Otherwise at least one condition in `ReleaseCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Release. */
		status?: boolean | null;
	}

	/** ReleaseReadyCondition contains information around the status of the Release. If a release is not ready, you cannot create a rollout with the release. */
	export interface ReleaseReadyConditionFormProperties {

		/** True if the Release is in a valid state. Otherwise at least one condition in `ReleaseCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Release. */
		status: FormControl<boolean | null | undefined>,
	}
	export function CreateReleaseReadyConditionFormGroup() {
		return new FormGroup<ReleaseReadyConditionFormProperties>({
			status: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** SkaffoldSupportedCondition contains information about when support for the release's version of Skaffold ends. */
	export interface SkaffoldSupportedCondition {

		/** The time at which this release's version of Skaffold will enter maintenance mode. */
		maintenanceModeTime?: string | null;

		/** The Skaffold support state for this release's version of Skaffold. */
		skaffoldSupportState?: SkaffoldSupportedConditionSkaffoldSupportState | null;

		/** True if the version of Skaffold used by this release is supported. */
		status?: boolean | null;

		/** The time at which this release's version of Skaffold will no longer be supported. */
		supportExpirationTime?: string | null;
	}

	/** SkaffoldSupportedCondition contains information about when support for the release's version of Skaffold ends. */
	export interface SkaffoldSupportedConditionFormProperties {

		/** The time at which this release's version of Skaffold will enter maintenance mode. */
		maintenanceModeTime: FormControl<string | null | undefined>,

		/** The Skaffold support state for this release's version of Skaffold. */
		skaffoldSupportState: FormControl<SkaffoldSupportedConditionSkaffoldSupportState | null | undefined>,

		/** True if the version of Skaffold used by this release is supported. */
		status: FormControl<boolean | null | undefined>,

		/** The time at which this release's version of Skaffold will no longer be supported. */
		supportExpirationTime: FormControl<string | null | undefined>,
	}
	export function CreateSkaffoldSupportedConditionFormGroup() {
		return new FormGroup<SkaffoldSupportedConditionFormProperties>({
			maintenanceModeTime: new FormControl<string | null | undefined>(undefined),
			skaffoldSupportState: new FormControl<SkaffoldSupportedConditionSkaffoldSupportState | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			supportExpirationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SkaffoldSupportedConditionSkaffoldSupportState { SKAFFOLD_SUPPORT_STATE_UNSPECIFIED = 'SKAFFOLD_SUPPORT_STATE_UNSPECIFIED', SKAFFOLD_SUPPORT_STATE_SUPPORTED = 'SKAFFOLD_SUPPORT_STATE_SUPPORTED', SKAFFOLD_SUPPORT_STATE_MAINTENANCE_MODE = 'SKAFFOLD_SUPPORT_STATE_MAINTENANCE_MODE', SKAFFOLD_SUPPORT_STATE_UNSUPPORTED = 'SKAFFOLD_SUPPORT_STATE_UNSUPPORTED' }

	export enum ReleaseRenderState { RENDER_STATE_UNSPECIFIED = 'RENDER_STATE_UNSPECIFIED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', IN_PROGRESS = 'IN_PROGRESS' }


	/** The artifacts produced by a target render operation. */
	export interface TargetArtifact {

		/** Output only. URI of a directory containing the artifacts. This contains deployment configuration used by Skaffold during a rollout, and all paths are relative to this location. */
		artifactUri?: string | null;

		/** Output only. File path of the rendered manifest relative to the URI. */
		manifestPath?: string | null;

		/** Output only. Map from the phase ID to the phase artifacts for the `Target`. */
		phaseArtifacts?: {[id: string]: PhaseArtifact };

		/** Output only. File path of the resolved Skaffold configuration relative to the URI. */
		skaffoldConfigPath?: string | null;
	}

	/** The artifacts produced by a target render operation. */
	export interface TargetArtifactFormProperties {

		/** Output only. URI of a directory containing the artifacts. This contains deployment configuration used by Skaffold during a rollout, and all paths are relative to this location. */
		artifactUri: FormControl<string | null | undefined>,

		/** Output only. File path of the rendered manifest relative to the URI. */
		manifestPath: FormControl<string | null | undefined>,

		/** Output only. Map from the phase ID to the phase artifacts for the `Target`. */
		phaseArtifacts: FormControl<{[id: string]: PhaseArtifact } | null | undefined>,

		/** Output only. File path of the resolved Skaffold configuration relative to the URI. */
		skaffoldConfigPath: FormControl<string | null | undefined>,
	}
	export function CreateTargetArtifactFormGroup() {
		return new FormGroup<TargetArtifactFormProperties>({
			artifactUri: new FormControl<string | null | undefined>(undefined),
			manifestPath: new FormControl<string | null | undefined>(undefined),
			phaseArtifacts: new FormControl<{[id: string]: PhaseArtifact } | null | undefined>(undefined),
			skaffoldConfigPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the paths to the artifacts, relative to the URI, for a phase. */
	export interface PhaseArtifact {

		/** Output only. File path of the directory of rendered job manifests relative to the URI. This is only set if it is applicable. */
		jobManifestsPath?: string | null;

		/** Output only. File path of the rendered manifest relative to the URI. */
		manifestPath?: string | null;

		/** Output only. File path of the resolved Skaffold configuration relative to the URI. */
		skaffoldConfigPath?: string | null;
	}

	/** Contains the paths to the artifacts, relative to the URI, for a phase. */
	export interface PhaseArtifactFormProperties {

		/** Output only. File path of the directory of rendered job manifests relative to the URI. This is only set if it is applicable. */
		jobManifestsPath: FormControl<string | null | undefined>,

		/** Output only. File path of the rendered manifest relative to the URI. */
		manifestPath: FormControl<string | null | undefined>,

		/** Output only. File path of the resolved Skaffold configuration relative to the URI. */
		skaffoldConfigPath: FormControl<string | null | undefined>,
	}
	export function CreatePhaseArtifactFormGroup() {
		return new FormGroup<PhaseArtifactFormProperties>({
			jobManifestsPath: new FormControl<string | null | undefined>(undefined),
			manifestPath: new FormControl<string | null | undefined>(undefined),
			skaffoldConfigPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of rendering for a single target. */
	export interface TargetRender {

		/** Output only. Reason this render failed. This will always be unspecified while the render in progress. */
		failureCause?: TargetRenderFailureCause | null;

		/** Output only. Additional information about the render failure, if available. */
		failureMessage?: string | null;

		/** RenderMetadata includes information associated with a `Release` render. */
		metadata?: RenderMetadata;

		/** Output only. The resource name of the Cloud Build `Build` object that is used to render the manifest for this target. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		renderingBuild?: string | null;

		/** Output only. Current state of the render operation for this Target. */
		renderingState?: TargetRenderRenderingState | null;
	}

	/** Details of rendering for a single target. */
	export interface TargetRenderFormProperties {

		/** Output only. Reason this render failed. This will always be unspecified while the render in progress. */
		failureCause: FormControl<TargetRenderFailureCause | null | undefined>,

		/** Output only. Additional information about the render failure, if available. */
		failureMessage: FormControl<string | null | undefined>,

		/** Output only. The resource name of the Cloud Build `Build` object that is used to render the manifest for this target. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		renderingBuild: FormControl<string | null | undefined>,

		/** Output only. Current state of the render operation for this Target. */
		renderingState: FormControl<TargetRenderRenderingState | null | undefined>,
	}
	export function CreateTargetRenderFormGroup() {
		return new FormGroup<TargetRenderFormProperties>({
			failureCause: new FormControl<TargetRenderFailureCause | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
			renderingBuild: new FormControl<string | null | undefined>(undefined),
			renderingState: new FormControl<TargetRenderRenderingState | null | undefined>(undefined),
		});

	}

	export enum TargetRenderFailureCause { FAILURE_CAUSE_UNSPECIFIED = 'FAILURE_CAUSE_UNSPECIFIED', CLOUD_BUILD_UNAVAILABLE = 'CLOUD_BUILD_UNAVAILABLE', EXECUTION_FAILED = 'EXECUTION_FAILED', CLOUD_BUILD_REQUEST_FAILED = 'CLOUD_BUILD_REQUEST_FAILED', VERIFICATION_CONFIG_NOT_FOUND = 'VERIFICATION_CONFIG_NOT_FOUND', CUSTOM_ACTION_NOT_FOUND = 'CUSTOM_ACTION_NOT_FOUND', DEPLOYMENT_STRATEGY_NOT_SUPPORTED = 'DEPLOYMENT_STRATEGY_NOT_SUPPORTED', RENDER_FEATURE_NOT_SUPPORTED = 'RENDER_FEATURE_NOT_SUPPORTED' }


	/** RenderMetadata includes information associated with a `Release` render. */
	export interface RenderMetadata {

		/** CloudRunRenderMetadata contains Cloud Run information associated with a `Release` render. */
		cloudRun?: CloudRunRenderMetadata;

		/** CustomMetadata contains information from a user defined operation. */
		custom?: CustomMetadata;
	}

	/** RenderMetadata includes information associated with a `Release` render. */
	export interface RenderMetadataFormProperties {
	}
	export function CreateRenderMetadataFormGroup() {
		return new FormGroup<RenderMetadataFormProperties>({
		});

	}

	export enum TargetRenderRenderingState { TARGET_RENDER_STATE_UNSPECIFIED = 'TARGET_RENDER_STATE_UNSPECIFIED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', IN_PROGRESS = 'IN_PROGRESS' }


	/** A `Target` resource in the Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed. */
	export interface Target {

		/** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
		annotations?: {[id: string]: string };

		/** Information specifying an Anthos Cluster. */
		anthosCluster?: AnthosCluster;

		/** Output only. Time at which the `Target` was created. */
		createTime?: string | null;

		/** Information specifying a Custom Target. */
		customTarget?: CustomTarget;

		/** Optional. The deploy parameters to use for this target. */
		deployParameters?: {[id: string]: string };

		/** Optional. Description of the `Target`. Max length is 255 characters. */
		description?: string | null;

		/** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`. */
		executionConfigs?: Array<ExecutionConfig>;

		/** Information specifying a GKE Cluster. */
		gke?: GkeCluster;

		/** Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
		labels?: {[id: string]: string };

		/** Information specifying a multiTarget. */
		multiTarget?: MultiTarget;

		/** Optional. Name of the `Target`. Format is `projects/{project}/locations/{location}/targets/a-z{0,62}`. */
		name?: string | null;

		/** Optional. Whether or not the `Target` requires approval. */
		requireApproval?: boolean | null;

		/** Information specifying where to deploy a Cloud Run Service. */
		run?: CloudRunLocation;

		/** Output only. Resource id of the `Target`. */
		targetId?: string | null;

		/** Output only. Unique identifier of the `Target`. */
		uid?: string | null;

		/** Output only. Most recent time at which the `Target` was updated. */
		updateTime?: string | null;
	}

	/** A `Target` resource in the Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed. */
	export interface TargetFormProperties {

		/** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Time at which the `Target` was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The deploy parameters to use for this target. */
		deployParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Description of the `Target`. Max length is 255 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Name of the `Target`. Format is `projects/{project}/locations/{location}/targets/a-z{0,62}`. */
		name: FormControl<string | null | undefined>,

		/** Optional. Whether or not the `Target` requires approval. */
		requireApproval: FormControl<boolean | null | undefined>,

		/** Output only. Resource id of the `Target`. */
		targetId: FormControl<string | null | undefined>,

		/** Output only. Unique identifier of the `Target`. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Most recent time at which the `Target` was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deployParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requireApproval: new FormControl<boolean | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information specifying a multiTarget. */
	export interface MultiTarget {

		/** Required. The target_ids of this multiTarget. */
		targetIds?: Array<string>;
	}

	/** Information specifying a multiTarget. */
	export interface MultiTargetFormProperties {
	}
	export function CreateMultiTargetFormGroup() {
		return new FormGroup<MultiTargetFormProperties>({
		});

	}


	/** ListRolloutsResponse is the response object reutrned by `ListRollouts`. */
	export interface ListRolloutsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The `Rollout` objects. */
		rollouts?: Array<Rollout>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListRolloutsResponse is the response object reutrned by `ListRollouts`. */
	export interface ListRolloutsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRolloutsResponseFormGroup() {
		return new FormGroup<ListRolloutsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `Rollout` resource in the Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`. */
	export interface Rollout {

		/** User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
		annotations?: {[id: string]: string };

		/** Output only. Approval state of the `Rollout`. */
		approvalState?: RolloutApprovalState | null;

		/** Output only. Time at which the `Rollout` was approved. */
		approveTime?: string | null;

		/** Output only. Name of the `ControllerRollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}`. */
		controllerRollout?: string | null;

		/** Output only. Time at which the `Rollout` was created. */
		createTime?: string | null;

		/** Output only. Time at which the `Rollout` finished deploying. */
		deployEndTime?: string | null;

		/** Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress. */
		deployFailureCause?: RolloutDeployFailureCause | null;

		/** Output only. Time at which the `Rollout` started deploying. */
		deployStartTime?: string | null;

		/** Output only. The resource name of the Cloud Build `Build` object that is used to deploy the Rollout. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		deployingBuild?: string | null;

		/** Description of the `Rollout` for user purposes. Max length is 255 characters. */
		description?: string | null;

		/** Output only. Time at which the `Rollout` was enqueued. */
		enqueueTime?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. Additional information about the rollout failure, if available. */
		failureReason?: string | null;

		/** Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
		labels?: {[id: string]: string };

		/** Metadata includes information associated with a `Rollout`. */
		metadata?: Metadata;

		/** Optional. Name of the `Rollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}`. */
		name?: string | null;

		/** Output only. The phases that represent the workflows of this `Rollout`. */
		phases?: Array<Phase>;

		/** Output only. Name of the `Rollout` that is rolled back by this `Rollout`. Empty if this `Rollout` wasn't created as a rollback. */
		rollbackOfRollout?: string | null;

		/** Output only. Names of `Rollouts` that rolled back this `Rollout`. */
		rolledBackByRollouts?: Array<string>;

		/** Output only. Current state of the `Rollout`. */
		state?: RolloutState | null;

		/** Required. The ID of Target to which this `Rollout` is deploying. */
		targetId?: string | null;

		/** Output only. Unique identifier of the `Rollout`. */
		uid?: string | null;
	}

	/** A `Rollout` resource in the Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`. */
	export interface RolloutFormProperties {

		/** User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Approval state of the `Rollout`. */
		approvalState: FormControl<RolloutApprovalState | null | undefined>,

		/** Output only. Time at which the `Rollout` was approved. */
		approveTime: FormControl<string | null | undefined>,

		/** Output only. Name of the `ControllerRollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}`. */
		controllerRollout: FormControl<string | null | undefined>,

		/** Output only. Time at which the `Rollout` was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time at which the `Rollout` finished deploying. */
		deployEndTime: FormControl<string | null | undefined>,

		/** Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress. */
		deployFailureCause: FormControl<RolloutDeployFailureCause | null | undefined>,

		/** Output only. Time at which the `Rollout` started deploying. */
		deployStartTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the Cloud Build `Build` object that is used to deploy the Rollout. Format is `projects/{project}/locations/{location}/builds/{build}`. */
		deployingBuild: FormControl<string | null | undefined>,

		/** Description of the `Rollout` for user purposes. Max length is 255 characters. */
		description: FormControl<string | null | undefined>,

		/** Output only. Time at which the `Rollout` was enqueued. */
		enqueueTime: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Additional information about the rollout failure, if available. */
		failureReason: FormControl<string | null | undefined>,

		/** Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Name of the `Rollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Name of the `Rollout` that is rolled back by this `Rollout`. Empty if this `Rollout` wasn't created as a rollback. */
		rollbackOfRollout: FormControl<string | null | undefined>,

		/** Output only. Current state of the `Rollout`. */
		state: FormControl<RolloutState | null | undefined>,

		/** Required. The ID of Target to which this `Rollout` is deploying. */
		targetId: FormControl<string | null | undefined>,

		/** Output only. Unique identifier of the `Rollout`. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateRolloutFormGroup() {
		return new FormGroup<RolloutFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			approvalState: new FormControl<RolloutApprovalState | null | undefined>(undefined),
			approveTime: new FormControl<string | null | undefined>(undefined),
			controllerRollout: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deployEndTime: new FormControl<string | null | undefined>(undefined),
			deployFailureCause: new FormControl<RolloutDeployFailureCause | null | undefined>(undefined),
			deployStartTime: new FormControl<string | null | undefined>(undefined),
			deployingBuild: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enqueueTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rollbackOfRollout: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<RolloutState | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RolloutApprovalState { APPROVAL_STATE_UNSPECIFIED = 'APPROVAL_STATE_UNSPECIFIED', NEEDS_APPROVAL = 'NEEDS_APPROVAL', DOES_NOT_NEED_APPROVAL = 'DOES_NOT_NEED_APPROVAL', APPROVED = 'APPROVED', REJECTED = 'REJECTED' }

	export enum RolloutDeployFailureCause { FAILURE_CAUSE_UNSPECIFIED = 'FAILURE_CAUSE_UNSPECIFIED', CLOUD_BUILD_UNAVAILABLE = 'CLOUD_BUILD_UNAVAILABLE', EXECUTION_FAILED = 'EXECUTION_FAILED', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED', RELEASE_FAILED = 'RELEASE_FAILED', RELEASE_ABANDONED = 'RELEASE_ABANDONED', VERIFICATION_CONFIG_NOT_FOUND = 'VERIFICATION_CONFIG_NOT_FOUND', CLOUD_BUILD_REQUEST_FAILED = 'CLOUD_BUILD_REQUEST_FAILED', OPERATION_FEATURE_NOT_SUPPORTED = 'OPERATION_FEATURE_NOT_SUPPORTED' }


	/** Metadata includes information associated with a `Rollout`. */
	export interface Metadata {

		/** AutomationRolloutMetadata contains Automation-related actions that were performed on a rollout. */
		automation?: AutomationRolloutMetadata;

		/** CloudRunMetadata contains information from a Cloud Run deployment. */
		cloudRun?: CloudRunMetadata;

		/** CustomMetadata contains information from a user defined operation. */
		custom?: CustomMetadata;
	}

	/** Metadata includes information associated with a `Rollout`. */
	export interface MetadataFormProperties {
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
		});

	}


	/** Phase represents a collection of jobs that are logically grouped together for a `Rollout`. */
	export interface Phase {

		/** ChildRollouts job composition */
		childRolloutJobs?: ChildRolloutJobs;

		/** Deployment job composition. */
		deploymentJobs?: DeploymentJobs;

		/** Output only. The ID of the Phase. */
		id?: string | null;

		/** Output only. Additional information on why the Phase was skipped, if available. */
		skipMessage?: string | null;

		/** Output only. Current state of the Phase. */
		state?: PhaseState | null;
	}

	/** Phase represents a collection of jobs that are logically grouped together for a `Rollout`. */
	export interface PhaseFormProperties {

		/** Output only. The ID of the Phase. */
		id: FormControl<string | null | undefined>,

		/** Output only. Additional information on why the Phase was skipped, if available. */
		skipMessage: FormControl<string | null | undefined>,

		/** Output only. Current state of the Phase. */
		state: FormControl<PhaseState | null | undefined>,
	}
	export function CreatePhaseFormGroup() {
		return new FormGroup<PhaseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			skipMessage: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PhaseState | null | undefined>(undefined),
		});

	}

	export enum PhaseState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', ABORTED = 'ABORTED', SKIPPED = 'SKIPPED' }

	export enum RolloutState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', IN_PROGRESS = 'IN_PROGRESS', PENDING_APPROVAL = 'PENDING_APPROVAL', APPROVAL_REJECTED = 'APPROVAL_REJECTED', PENDING = 'PENDING', PENDING_RELEASE = 'PENDING_RELEASE', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED', HALTED = 'HALTED' }


	/** The response object from `ListTargets`. */
	export interface ListTargetsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The `Target` objects. */
		targets?: Array<Target>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** The response object from `ListTargets`. */
	export interface ListTargetsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsResponseFormGroup() {
		return new FormGroup<ListTargetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Payload proto for "clouddeploy.googleapis.com/release_notification" Platform Log event that describes the failure to send release status change Pub/Sub notification. */
	export interface ReleaseNotificationEvent {

		/** Debug message for when a notification fails to send. */
		message?: string | null;

		/** The name of the `Release`. */
		release?: string | null;

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type?: AutomationEventType | null;
	}

	/** Payload proto for "clouddeploy.googleapis.com/release_notification" Platform Log event that describes the failure to send release status change Pub/Sub notification. */
	export interface ReleaseNotificationEventFormProperties {

		/** Debug message for when a notification fails to send. */
		message: FormControl<string | null | undefined>,

		/** The name of the `Release`. */
		release: FormControl<string | null | undefined>,

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type: FormControl<AutomationEventType | null | undefined>,
	}
	export function CreateReleaseNotificationEventFormGroup() {
		return new FormGroup<ReleaseNotificationEventFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			release: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AutomationEventType | null | undefined>(undefined),
		});

	}


	/** Payload proto for "clouddeploy.googleapis.com/release_render" Platform Log event that describes the render status change. */
	export interface ReleaseRenderEvent {

		/** Debug message for when a render transition occurs. Provides further details as rendering progresses through render states. */
		message?: string | null;

		/** The name of the release. */
		release?: string | null;

		/** The state of the release render. */
		releaseRenderState?: ReleaseRenderState | null;
	}

	/** Payload proto for "clouddeploy.googleapis.com/release_render" Platform Log event that describes the render status change. */
	export interface ReleaseRenderEventFormProperties {

		/** Debug message for when a render transition occurs. Provides further details as rendering progresses through render states. */
		message: FormControl<string | null | undefined>,

		/** The name of the release. */
		release: FormControl<string | null | undefined>,

		/** The state of the release render. */
		releaseRenderState: FormControl<ReleaseRenderState | null | undefined>,
	}
	export function CreateReleaseRenderEventFormGroup() {
		return new FormGroup<ReleaseRenderEventFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			release: new FormControl<string | null | undefined>(undefined),
			releaseRenderState: new FormControl<ReleaseRenderState | null | undefined>(undefined),
		});

	}


	/** RetryJobRequest is the request object used by `RetryJob`. */
	export interface RetryJobRequest {

		/** Required. The job ID for the Job to retry. */
		jobId?: string | null;

		/** Required. The phase ID the Job to retry belongs to. */
		phaseId?: string | null;
	}

	/** RetryJobRequest is the request object used by `RetryJob`. */
	export interface RetryJobRequestFormProperties {

		/** Required. The job ID for the Job to retry. */
		jobId: FormControl<string | null | undefined>,

		/** Required. The phase ID the Job to retry belongs to. */
		phaseId: FormControl<string | null | undefined>,
	}
	export function CreateRetryJobRequestFormGroup() {
		return new FormGroup<RetryJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			phaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object from 'RetryJob'. */
	export interface RetryJobResponse {
	}

	/** The response object from 'RetryJob'. */
	export interface RetryJobResponseFormProperties {
	}
	export function CreateRetryJobResponseFormGroup() {
		return new FormGroup<RetryJobResponseFormProperties>({
		});

	}


	/** Configs for the Rollback rollout. */
	export interface RollbackTargetConfig {

		/** A `Rollout` resource in the Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`. */
		rollout?: Rollout;

		/** Optional. The starting phase ID for the `Rollout`. If unspecified, the `Rollout` will start in the stable phase. */
		startingPhaseId?: string | null;
	}

	/** Configs for the Rollback rollout. */
	export interface RollbackTargetConfigFormProperties {

		/** Optional. The starting phase ID for the `Rollout`. If unspecified, the `Rollout` will start in the stable phase. */
		startingPhaseId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackTargetConfigFormGroup() {
		return new FormGroup<RollbackTargetConfigFormProperties>({
			startingPhaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for `RollbackTarget`. */
	export interface RollbackTargetRequest {

		/** Optional. ID of the `Release` to roll back to. If this isn't specified, the previous successful `Rollout` to the specified target will be used to determine the `Release`. */
		releaseId?: string | null;

		/** Configs for the Rollback rollout. */
		rollbackConfig?: RollbackTargetConfig;

		/** Required. ID of the rollback `Rollout` to create. */
		rolloutId?: string | null;

		/** Optional. If provided, this must be the latest `Rollout` that is on the `Target`. */
		rolloutToRollBack?: string | null;

		/** Required. ID of the `Target` that is being rolled back. */
		targetId?: string | null;

		/** Optional. If set to true, the request is validated and the user is provided with a `RollbackTargetResponse`. */
		validateOnly?: boolean | null;
	}

	/** The request object for `RollbackTarget`. */
	export interface RollbackTargetRequestFormProperties {

		/** Optional. ID of the `Release` to roll back to. If this isn't specified, the previous successful `Rollout` to the specified target will be used to determine the `Release`. */
		releaseId: FormControl<string | null | undefined>,

		/** Required. ID of the rollback `Rollout` to create. */
		rolloutId: FormControl<string | null | undefined>,

		/** Optional. If provided, this must be the latest `Rollout` that is on the `Target`. */
		rolloutToRollBack: FormControl<string | null | undefined>,

		/** Required. ID of the `Target` that is being rolled back. */
		targetId: FormControl<string | null | undefined>,

		/** Optional. If set to true, the request is validated and the user is provided with a `RollbackTargetResponse`. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateRollbackTargetRequestFormGroup() {
		return new FormGroup<RollbackTargetRequestFormProperties>({
			releaseId: new FormControl<string | null | undefined>(undefined),
			rolloutId: new FormControl<string | null | undefined>(undefined),
			rolloutToRollBack: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response object from `RollbackTarget`. */
	export interface RollbackTargetResponse {

		/** Configs for the Rollback rollout. */
		rollbackConfig?: RollbackTargetConfig;
	}

	/** The response object from `RollbackTarget`. */
	export interface RollbackTargetResponseFormProperties {
	}
	export function CreateRollbackTargetResponseFormGroup() {
		return new FormGroup<RollbackTargetResponseFormProperties>({
		});

	}


	/** Payload proto for "clouddeploy.googleapis.com/rollout_notification" Platform Log event that describes the failure to send rollout status change Pub/Sub notification. */
	export interface RolloutNotificationEvent {

		/** Debug message for when a notification fails to send. */
		message?: string | null;

		/** Unique identifier of the `DeliveryPipeline`. */
		pipelineUid?: string | null;

		/** Unique identifier of the `Release`. */
		releaseUid?: string | null;

		/** The name of the `Rollout`. */
		rollout?: string | null;

		/** ID of the `Target` that the rollout is deployed to. */
		targetId?: string | null;

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type?: AutomationEventType | null;
	}

	/** Payload proto for "clouddeploy.googleapis.com/rollout_notification" Platform Log event that describes the failure to send rollout status change Pub/Sub notification. */
	export interface RolloutNotificationEventFormProperties {

		/** Debug message for when a notification fails to send. */
		message: FormControl<string | null | undefined>,

		/** Unique identifier of the `DeliveryPipeline`. */
		pipelineUid: FormControl<string | null | undefined>,

		/** Unique identifier of the `Release`. */
		releaseUid: FormControl<string | null | undefined>,

		/** The name of the `Rollout`. */
		rollout: FormControl<string | null | undefined>,

		/** ID of the `Target` that the rollout is deployed to. */
		targetId: FormControl<string | null | undefined>,

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type: FormControl<AutomationEventType | null | undefined>,
	}
	export function CreateRolloutNotificationEventFormGroup() {
		return new FormGroup<RolloutNotificationEventFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			pipelineUid: new FormControl<string | null | undefined>(undefined),
			releaseUid: new FormControl<string | null | undefined>(undefined),
			rollout: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AutomationEventType | null | undefined>(undefined),
		});

	}


	/** Payload proto for "clouddeploy.googleapis.com/rollout_update" Platform Log event that describes the rollout update event. */
	export interface RolloutUpdateEvent {

		/** Debug message for when a rollout update event occurs. */
		message?: string | null;

		/** Unique identifier of the pipeline. */
		pipelineUid?: string | null;

		/** Unique identifier of the release. */
		releaseUid?: string | null;

		/** The name of the rollout. */
		rollout?: string | null;

		/** The type of the rollout update. */
		rolloutUpdateType?: RolloutUpdateEventRolloutUpdateType | null;

		/** ID of the target. */
		targetId?: string | null;

		/** Type of this notification, e.g. for a rollout update event. */
		type?: AutomationEventType | null;
	}

	/** Payload proto for "clouddeploy.googleapis.com/rollout_update" Platform Log event that describes the rollout update event. */
	export interface RolloutUpdateEventFormProperties {

		/** Debug message for when a rollout update event occurs. */
		message: FormControl<string | null | undefined>,

		/** Unique identifier of the pipeline. */
		pipelineUid: FormControl<string | null | undefined>,

		/** Unique identifier of the release. */
		releaseUid: FormControl<string | null | undefined>,

		/** The name of the rollout. */
		rollout: FormControl<string | null | undefined>,

		/** The type of the rollout update. */
		rolloutUpdateType: FormControl<RolloutUpdateEventRolloutUpdateType | null | undefined>,

		/** ID of the target. */
		targetId: FormControl<string | null | undefined>,

		/** Type of this notification, e.g. for a rollout update event. */
		type: FormControl<AutomationEventType | null | undefined>,
	}
	export function CreateRolloutUpdateEventFormGroup() {
		return new FormGroup<RolloutUpdateEventFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			pipelineUid: new FormControl<string | null | undefined>(undefined),
			releaseUid: new FormControl<string | null | undefined>(undefined),
			rollout: new FormControl<string | null | undefined>(undefined),
			rolloutUpdateType: new FormControl<RolloutUpdateEventRolloutUpdateType | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AutomationEventType | null | undefined>(undefined),
		});

	}

	export enum RolloutUpdateEventRolloutUpdateType { ROLLOUT_UPDATE_TYPE_UNSPECIFIED = 'ROLLOUT_UPDATE_TYPE_UNSPECIFIED', PENDING = 'PENDING', PENDING_RELEASE = 'PENDING_RELEASE', IN_PROGRESS = 'IN_PROGRESS', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED', HALTED = 'HALTED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', APPROVAL_REQUIRED = 'APPROVAL_REQUIRED', APPROVED = 'APPROVED', REJECTED = 'REJECTED', ADVANCE_REQUIRED = 'ADVANCE_REQUIRED', ADVANCED = 'ADVANCED' }


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Payload proto for "clouddeploy.googleapis.com/target_notification" Platform Log event that describes the failure to send target status change Pub/Sub notification. */
	export interface TargetNotificationEvent {

		/** Debug message for when a notification fails to send. */
		message?: string | null;

		/** The name of the `Target`. */
		target?: string | null;

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type?: AutomationEventType | null;
	}

	/** Payload proto for "clouddeploy.googleapis.com/target_notification" Platform Log event that describes the failure to send target status change Pub/Sub notification. */
	export interface TargetNotificationEventFormProperties {

		/** Debug message for when a notification fails to send. */
		message: FormControl<string | null | undefined>,

		/** The name of the `Target`. */
		target: FormControl<string | null | undefined>,

		/** Type of this notification, e.g. for a Pub/Sub failure. */
		type: FormControl<AutomationEventType | null | undefined>,
	}
	export function CreateTargetNotificationEventFormGroup() {
		return new FormGroup<TargetNotificationEventFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AutomationEventType | null | undefined>(undefined),
		});

	}


	/** The request object used by `TerminateJobRun`. */
	export interface TerminateJobRunRequest {
	}

	/** The request object used by `TerminateJobRun`. */
	export interface TerminateJobRunRequestFormProperties {
	}
	export function CreateTerminateJobRunRequestFormGroup() {
		return new FormGroup<TerminateJobRunRequestFormProperties>({
		});

	}


	/** The response object from `TerminateJobRun`. */
	export interface TerminateJobRunResponse {
	}

	/** The response object from `TerminateJobRun`. */
	export interface TerminateJobRunResponseFormProperties {
	}
	export function CreateTerminateJobRunResponseFormGroup() {
		return new FormGroup<TerminateJobRunResponseFormProperties>({
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a single Target.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the `Target` to delete. Format should be `projects/{project_id}/locations/{location_name}/targets/{target_name}`.
		 * @param {boolean} allowMissing Optional. If set to true, then deleting an already deleted or non-existing `Target` will succeed.
		 * @param {string} etag Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set, validate the request and preview the review, but do not actually post it.
		 * @return {Operation} Successful response
		 */
		Clouddeploy_projects_locations_targets_delete(name: string, allowMissing: boolean | null | undefined, etag: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Gets details of a single Target.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the `Target`. Format must be `projects/{project_id}/locations/{location_name}/targets/{target_name}`.
		 * @return {Target} Successful response
		 */
		Clouddeploy_projects_locations_targets_get(name: string): Observable<Target> {
			return this.http.get<Target>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the parameters of a single Target.
		 * Patch v1/{name}
		 * @param {string} name Optional. Name of the `Target`. Format is `projects/{project}/locations/{location}/targets/a-z{0,62}`.
		 * @param {boolean} allowMissing Optional. If set to true, updating a `Target` that does not exist will result in the creation of a new `Target`.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Required. Field mask is used to specify the fields to be overwritten in the Target resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
		 * @param {boolean} validateOnly Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
		 * @return {Operation} Successful response
		 */
		Clouddeploy_projects_locations_targets_patch(name: string, allowMissing: boolean | null | undefined, requestId: string | null | undefined, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Target): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Clouddeploy_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Clouddeploy_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Abandons a Release in the Delivery Pipeline.
		 * Post v1/{name}:abandon
		 * @param {string} name Required. Name of the Release. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}`.
		 * @return {AbandonReleaseResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_abandon(name: string, requestBody: AbandonReleaseRequest): Observable<AbandonReleaseResponse> {
			return this.http.post<AbandonReleaseResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':abandon', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Advances a Rollout in a given project and location.
		 * Post v1/{name}:advance
		 * @param {string} name Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`.
		 * @return {AdvanceRolloutResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_rollouts_advance(name: string, requestBody: AdvanceRolloutRequest): Observable<AdvanceRolloutResponse> {
			return this.http.post<AdvanceRolloutResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':advance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Approves a Rollout.
		 * Post v1/{name}:approve
		 * @param {string} name Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`.
		 * @return {ApproveRolloutResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_rollouts_approve(name: string, requestBody: ApproveRolloutRequest): Observable<ApproveRolloutResponse> {
			return this.http.post<ApproveRolloutResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':approve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Clouddeploy_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a `Rollout` to roll back the specified target.
		 * Post v1/{name}:rollbackTarget
		 * @param {string} name Required. The `DeliveryPipeline` for which the rollback `Rollout` should be created. Format should be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`.
		 * @return {RollbackTargetResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_rollbackTarget(name: string, requestBody: RollbackTargetRequest): Observable<RollbackTargetResponse> {
			return this.http.post<RollbackTargetResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':rollbackTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Terminates a Job Run in a given project and location.
		 * Post v1/{name}:terminate
		 * @param {string} name Required. Name of the `JobRun`. Format must be `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}/jobRuns/{jobRun}`.
		 * @return {TerminateJobRunResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_rollouts_jobRuns_terminate(name: string, requestBody: TerminateJobRunRequest): Observable<TerminateJobRunResponse> {
			return this.http.post<TerminateJobRunResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':terminate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists AutomationRuns in a given project and location.
		 * Get v1/{parent}/automationRuns
		 * @param {string} parent Required. The parent `Delivery Pipeline`, which owns this collection of automationRuns. Format must be `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}`.
		 * @param {string} filter Filter automationRuns to be returned. All fields can be used in the filter.
		 * @param {string} orderBy Field to sort by.
		 * @param {number} pageSize The maximum number of automationRuns to return. The service may return fewer than this value. If unspecified, at most 50 automationRuns will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListAutomationRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
		 * @return {ListAutomationRunsResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_automationRuns_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAutomationRunsResponse> {
			return this.http.get<ListAutomationRunsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/automationRuns&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists Automations in a given project and location.
		 * Get v1/{parent}/automations
		 * @param {string} parent Required. The parent `Delivery Pipeline`, which owns this collection of automations. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`.
		 * @param {string} filter Filter automations to be returned. All fields can be used in the filter.
		 * @param {string} orderBy Field to sort by.
		 * @param {number} pageSize The maximum number of automations to return. The service may return fewer than this value. If unspecified, at most 50 automations will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListAutomations` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
		 * @return {ListAutomationsResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_automations_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAutomationsResponse> {
			return this.http.get<ListAutomationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/automations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Automation in a given project and location.
		 * Post v1/{parent}/automations
		 * @param {string} parent Required. The parent collection in which the `Automation` should be created. Format should be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`.
		 * @param {string} automationId Required. ID of the `Automation`.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
		 * @return {Operation} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_automations_create(parent: string, automationId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Automation): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/automations&automationId=' + (automationId == null ? '' : encodeURIComponent(automationId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CustomTargetTypes in a given project and location.
		 * Get v1/{parent}/customTargetTypes
		 * @param {string} parent Required. The parent that owns this collection of custom target types. Format must be `projects/{project_id}/locations/{location_name}`.
		 * @param {string} filter Optional. Filter custom target types to be returned. See https://google.aip.dev/160 for more details.
		 * @param {string} orderBy Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Optional. The maximum number of `CustomTargetType` objects to return. The service may return fewer than this value. If unspecified, at most 50 `CustomTargetType` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListCustomTargetTypes` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
		 * @return {ListCustomTargetTypesResponse} Successful response
		 */
		Clouddeploy_projects_locations_customTargetTypes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCustomTargetTypesResponse> {
			return this.http.get<ListCustomTargetTypesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customTargetTypes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new CustomTargetType in a given project and location.
		 * Post v1/{parent}/customTargetTypes
		 * @param {string} parent Required. The parent collection in which the `CustomTargetType` should be created in. Format should be `projects/{project_id}/locations/{location_name}`.
		 * @param {string} customTargetTypeId Required. ID of the `CustomTargetType`.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
		 * @return {Operation} Successful response
		 */
		Clouddeploy_projects_locations_customTargetTypes_create(parent: string, customTargetTypeId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: CustomTargetType): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customTargetTypes&customTargetTypeId=' + (customTargetTypeId == null ? '' : encodeURIComponent(customTargetTypeId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DeliveryPipelines in a given project and location.
		 * Get v1/{parent}/deliveryPipelines
		 * @param {string} parent Required. The parent, which owns this collection of pipelines. Format must be `projects/{project_id}/locations/{location_name}`.
		 * @param {string} filter Filter pipelines to be returned. See https://google.aip.dev/160 for more details.
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize The maximum number of pipelines to return. The service may return fewer than this value. If unspecified, at most 50 pipelines will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListDeliveryPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
		 * @return {ListDeliveryPipelinesResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDeliveryPipelinesResponse> {
			return this.http.get<ListDeliveryPipelinesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deliveryPipelines&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new DeliveryPipeline in a given project and location.
		 * Post v1/{parent}/deliveryPipelines
		 * @param {string} parent Required. The parent collection in which the `DeliveryPipeline` should be created. Format should be `projects/{project_id}/locations/{location_name}`.
		 * @param {string} deliveryPipelineId Required. ID of the `DeliveryPipeline`.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
		 * @return {Operation} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_create(parent: string, deliveryPipelineId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: DeliveryPipeline): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deliveryPipelines&deliveryPipelineId=' + (deliveryPipelineId == null ? '' : encodeURIComponent(deliveryPipelineId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists JobRuns in a given project and location.
		 * Get v1/{parent}/jobRuns
		 * @param {string} parent Required. The `Rollout` which owns this collection of `JobRun` objects.
		 * @param {string} filter Optional. Filter results to be returned. See https://google.aip.dev/160 for more details.
		 * @param {string} orderBy Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Optional. The maximum number of `JobRun` objects to return. The service may return fewer than this value. If unspecified, at most 50 `JobRun` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListJobRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
		 * @return {ListJobRunsResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_rollouts_jobRuns_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListJobRunsResponse> {
			return this.http.get<ListJobRunsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobRuns&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists Releases in a given project and location.
		 * Get v1/{parent}/releases
		 * @param {string} parent Required. The `DeliveryPipeline` which owns this collection of `Release` objects.
		 * @param {string} filter Optional. Filter releases to be returned. See https://google.aip.dev/160 for more details.
		 * @param {string} orderBy Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Optional. The maximum number of `Release` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Release` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
		 * @return {ListReleasesResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReleasesResponse> {
			return this.http.get<ListReleasesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releases&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Release in a given project and location.
		 * Post v1/{parent}/releases
		 * @param {string} parent Required. The parent collection in which the `Release` should be created. Format should be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`.
		 * @param {string} releaseId Required. ID of the `Release`.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
		 * @return {Operation} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_create(parent: string, releaseId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Release): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releases&releaseId=' + (releaseId == null ? '' : encodeURIComponent(releaseId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Rollouts in a given project and location.
		 * Get v1/{parent}/rollouts
		 * @param {string} parent Required. The `Release` which owns this collection of `Rollout` objects.
		 * @param {string} filter Optional. Filter rollouts to be returned. See https://google.aip.dev/160 for more details.
		 * @param {string} orderBy Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Optional. The maximum number of `Rollout` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Rollout` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListRollouts` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
		 * @return {ListRolloutsResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_rollouts_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRolloutsResponse> {
			return this.http.get<ListRolloutsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rollouts&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Rollout in a given project and location.
		 * Post v1/{parent}/rollouts
		 * @param {string} parent Required. The parent collection in which the `Rollout` should be created. Format should be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}`.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} rolloutId Required. ID of the `Rollout`.
		 * @param {string} startingPhaseId Optional. The starting phase ID for the `Rollout`. If empty the `Rollout` will start at the first phase.
		 * @param {boolean} validateOnly Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
		 * @return {Operation} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_rollouts_create(parent: string, requestId: string | null | undefined, rolloutId: string | null | undefined, startingPhaseId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Rollout): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rollouts&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&rolloutId=' + (rolloutId == null ? '' : encodeURIComponent(rolloutId)) + '&startingPhaseId=' + (startingPhaseId == null ? '' : encodeURIComponent(startingPhaseId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Targets in a given project and location.
		 * Get v1/{parent}/targets
		 * @param {string} parent Required. The parent, which owns this collection of targets. Format must be `projects/{project_id}/locations/{location_name}`.
		 * @param {string} filter Optional. Filter targets to be returned. See https://google.aip.dev/160 for more details.
		 * @param {string} orderBy Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Optional. The maximum number of `Target` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Target` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
		 * @return {ListTargetsResponse} Successful response
		 */
		Clouddeploy_projects_locations_targets_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTargetsResponse> {
			return this.http.get<ListTargetsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/targets&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Target in a given project and location.
		 * Post v1/{parent}/targets
		 * @param {string} parent Required. The parent collection in which the `Target` should be created. Format should be `projects/{project_id}/locations/{location_name}`.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} targetId Required. ID of the `Target`.
		 * @param {boolean} validateOnly Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
		 * @return {Operation} Successful response
		 */
		Clouddeploy_projects_locations_targets_create(parent: string, requestId: string | null | undefined, targetId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Target): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/targets&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&targetId=' + (targetId == null ? '' : encodeURIComponent(targetId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Clouddeploy_projects_locations_targets_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Clouddeploy_projects_locations_targets_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Clouddeploy_projects_locations_targets_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ignores the specified Job in a Rollout.
		 * Post v1/{rollout}:ignoreJob
		 * @param {string} rollout Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`.
		 * @return {IgnoreJobResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_rollouts_ignoreJob(rollout: string, requestBody: IgnoreJobRequest): Observable<IgnoreJobResponse> {
			return this.http.post<IgnoreJobResponse>(this.baseUri + 'v1/' + (rollout == null ? '' : encodeURIComponent(rollout)) + ':ignoreJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retries the specified Job in a Rollout.
		 * Post v1/{rollout}:retryJob
		 * @param {string} rollout Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`.
		 * @return {RetryJobResponse} Successful response
		 */
		Clouddeploy_projects_locations_deliveryPipelines_releases_rollouts_retryJob(rollout: string, requestBody: RetryJobRequest): Observable<RetryJobResponse> {
			return this.http.post<RetryJobResponse>(this.baseUri + 'v1/' + (rollout == null ? '' : encodeURIComponent(rollout)) + ':retryJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

