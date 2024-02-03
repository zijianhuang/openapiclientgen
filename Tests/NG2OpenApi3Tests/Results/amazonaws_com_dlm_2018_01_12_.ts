import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateLifecyclePolicyResponse {
		PolicyId?: string;
	}
	export interface CreateLifecyclePolicyResponseFormProperties {
		PolicyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLifecyclePolicyResponseFormGroup() {
		return new FormGroup<CreateLifecyclePolicyResponseFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyTypeValues { EBS_SNAPSHOT_MANAGEMENT = 'EBS_SNAPSHOT_MANAGEMENT', IMAGE_MANAGEMENT = 'IMAGE_MANAGEMENT', EVENT_BASED_POLICY = 'EVENT_BASED_POLICY' }

	export enum ResourceTypeValues { VOLUME = 'VOLUME', INSTANCE = 'INSTANCE' }

	export enum ResourceLocationValues { CLOUD = 'CLOUD', OUTPOST = 'OUTPOST' }


	/** Specifies a tag for a resource. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Specifies a tag for a resource. */
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


	/**  <b>[Snapshot and AMI policies only]</b> Specifies a schedule for a snapshot or AMI lifecycle policy. */
	export interface Schedule {
		Name?: string;
		CopyTags?: boolean | null;
		TagsToAdd?: Array<Tag>;
		VariableTags?: Array<Tag>;
		CreateRule?: CreateRule;
		RetainRule?: RetainRule;
		FastRestoreRule?: FastRestoreRule;
		CrossRegionCopyRules?: Array<CrossRegionCopyRule>;
		ShareRules?: Array<ShareRule>;
		DeprecateRule?: DeprecateRule;
		ArchiveRule?: ArchiveRule;
	}

	/**  <b>[Snapshot and AMI policies only]</b> Specifies a schedule for a snapshot or AMI lifecycle policy. */
	export interface ScheduleFormProperties {
		Name: FormControl<string | null | undefined>,
		CopyTags: FormControl<boolean | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CopyTags: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p> <b>[Snapshot and AMI policies only]</b> Specifies when the policy should create snapshots or AMIs.</p> <note> <ul> <li> <p>You must specify either <b>CronExpression</b>, or <b>Interval</b>, <b>IntervalUnit</b>, and <b>Times</b>.</p> </li> <li> <p>If you need to specify an <a>ArchiveRule</a> for the schedule, then you must specify a creation frequency of at least 28 days.</p> </li> </ul> </note> */
	export interface CreateRule {
		Location?: LocationValues;
		Interval?: number | null;
		IntervalUnit?: IntervalUnitValues;
		Times?: Array<string>;
		CronExpression?: string;
	}

	/** <p> <b>[Snapshot and AMI policies only]</b> Specifies when the policy should create snapshots or AMIs.</p> <note> <ul> <li> <p>You must specify either <b>CronExpression</b>, or <b>Interval</b>, <b>IntervalUnit</b>, and <b>Times</b>.</p> </li> <li> <p>If you need to specify an <a>ArchiveRule</a> for the schedule, then you must specify a creation frequency of at least 28 days.</p> </li> </ul> </note> */
	export interface CreateRuleFormProperties {
		Location: FormControl<LocationValues | null | undefined>,
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<IntervalUnitValues | null | undefined>,
		CronExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleFormGroup() {
		return new FormGroup<CreateRuleFormProperties>({
			Location: new FormControl<LocationValues | null | undefined>(undefined),
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<IntervalUnitValues | null | undefined>(undefined),
			CronExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LocationValues { CLOUD = 'CLOUD', OUTPOST_LOCAL = 'OUTPOST_LOCAL' }

	export enum IntervalUnitValues { HOURS = 'HOURS' }


	/** <p> <b>[Snapshot and AMI policies only]</b> Specifies a retention rule for snapshots created by snapshot policies, or for AMIs created by AMI policies.</p> <note> <p>For snapshot policies that have an <a>ArchiveRule</a>, this retention rule applies to standard tier retention. When the retention threshold is met, snapshots are moved from the standard to the archive tier.</p> <p>For snapshot policies that do not have an <b>ArchiveRule</b>, snapshots are permanently deleted when this retention threshold is met.</p> </note> <p>You can retain snapshots based on either a count or a time interval.</p> <ul> <li> <p> <b>Count-based retention</b> </p> <p>You must specify <b>Count</b>. If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention count of <code>0</code> to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention count of <code>1</code> or more.</p> </li> <li> <p> <b>Age-based retention</b> </p> <p>You must specify <b>Interval</b> and <b>IntervalUnit</b>. If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention interval of <code>0</code> days to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention interval of <code>1</code> day or more.</p> </li> </ul> */
	export interface RetainRule {
		Count?: number | null;
		Interval?: number | null;
		IntervalUnit?: RetentionIntervalUnitValues;
	}

	/** <p> <b>[Snapshot and AMI policies only]</b> Specifies a retention rule for snapshots created by snapshot policies, or for AMIs created by AMI policies.</p> <note> <p>For snapshot policies that have an <a>ArchiveRule</a>, this retention rule applies to standard tier retention. When the retention threshold is met, snapshots are moved from the standard to the archive tier.</p> <p>For snapshot policies that do not have an <b>ArchiveRule</b>, snapshots are permanently deleted when this retention threshold is met.</p> </note> <p>You can retain snapshots based on either a count or a time interval.</p> <ul> <li> <p> <b>Count-based retention</b> </p> <p>You must specify <b>Count</b>. If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention count of <code>0</code> to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention count of <code>1</code> or more.</p> </li> <li> <p> <b>Age-based retention</b> </p> <p>You must specify <b>Interval</b> and <b>IntervalUnit</b>. If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention interval of <code>0</code> days to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention interval of <code>1</code> day or more.</p> </li> </ul> */
	export interface RetainRuleFormProperties {
		Count: FormControl<number | null | undefined>,
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<RetentionIntervalUnitValues | null | undefined>,
	}
	export function CreateRetainRuleFormGroup() {
		return new FormGroup<RetainRuleFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<RetentionIntervalUnitValues | null | undefined>(undefined),
		});

	}

	export enum RetentionIntervalUnitValues { DAYS = 'DAYS', WEEKS = 'WEEKS', MONTHS = 'MONTHS', YEARS = 'YEARS' }


	/**  <b>[Snapshot policies only]</b> Specifies a rule for enabling fast snapshot restore for snapshots created by snapshot policies. You can enable fast snapshot restore based on either a count or a time interval. */
	export interface FastRestoreRule {
		Count?: number | null;
		Interval?: number | null;
		IntervalUnit?: RetentionIntervalUnitValues;

		/** Required */
		AvailabilityZones: Array<string>;
	}

	/**  <b>[Snapshot policies only]</b> Specifies a rule for enabling fast snapshot restore for snapshots created by snapshot policies. You can enable fast snapshot restore based on either a count or a time interval. */
	export interface FastRestoreRuleFormProperties {
		Count: FormControl<number | null | undefined>,
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<RetentionIntervalUnitValues | null | undefined>,
	}
	export function CreateFastRestoreRuleFormGroup() {
		return new FormGroup<FastRestoreRuleFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<RetentionIntervalUnitValues | null | undefined>(undefined),
		});

	}


	/** <p> <b>[Snapshot and AMI policies only]</b> Specifies a cross-Region copy rule for snapshot and AMI policies.</p> <note> <p>To specify a cross-Region copy action for event-based polices, use <a>CrossRegionCopyAction</a>.</p> </note> */
	export interface CrossRegionCopyRule {
		TargetRegion?: string;
		Target?: string;

		/** Required */
		Encrypted: boolean;
		CmkArn?: string;
		CopyTags?: boolean | null;
		RetainRule?: CrossRegionCopyRetainRule;
		DeprecateRule?: CrossRegionCopyDeprecateRule;
	}

	/** <p> <b>[Snapshot and AMI policies only]</b> Specifies a cross-Region copy rule for snapshot and AMI policies.</p> <note> <p>To specify a cross-Region copy action for event-based polices, use <a>CrossRegionCopyAction</a>.</p> </note> */
	export interface CrossRegionCopyRuleFormProperties {
		TargetRegion: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,

		/** Required */
		Encrypted: FormControl<boolean | null | undefined>,
		CmkArn: FormControl<string | null | undefined>,
		CopyTags: FormControl<boolean | null | undefined>,
	}
	export function CreateCrossRegionCopyRuleFormGroup() {
		return new FormGroup<CrossRegionCopyRuleFormProperties>({
			TargetRegion: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			CmkArn: new FormControl<string | null | undefined>(undefined),
			CopyTags: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted. */
	export interface CrossRegionCopyRetainRule {
		Interval?: number | null;
		IntervalUnit?: RetentionIntervalUnitValues;
	}

	/** Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted. */
	export interface CrossRegionCopyRetainRuleFormProperties {
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<RetentionIntervalUnitValues | null | undefined>,
	}
	export function CreateCrossRegionCopyRetainRuleFormGroup() {
		return new FormGroup<CrossRegionCopyRetainRuleFormProperties>({
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<RetentionIntervalUnitValues | null | undefined>(undefined),
		});

	}


	/**  <b>[AMI policies only]</b> Specifies an AMI deprecation rule for cross-Region AMI copies created by an AMI policy. */
	export interface CrossRegionCopyDeprecateRule {
		Interval?: number | null;
		IntervalUnit?: RetentionIntervalUnitValues;
	}

	/**  <b>[AMI policies only]</b> Specifies an AMI deprecation rule for cross-Region AMI copies created by an AMI policy. */
	export interface CrossRegionCopyDeprecateRuleFormProperties {
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<RetentionIntervalUnitValues | null | undefined>,
	}
	export function CreateCrossRegionCopyDeprecateRuleFormGroup() {
		return new FormGroup<CrossRegionCopyDeprecateRuleFormProperties>({
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<RetentionIntervalUnitValues | null | undefined>(undefined),
		});

	}


	/**  <b>[Snapshot policies only]</b> Specifies a rule for sharing snapshots across Amazon Web Services accounts. */
	export interface ShareRule {

		/** Required */
		TargetAccounts: Array<string>;
		UnshareInterval?: number | null;
		UnshareIntervalUnit?: RetentionIntervalUnitValues;
	}

	/**  <b>[Snapshot policies only]</b> Specifies a rule for sharing snapshots across Amazon Web Services accounts. */
	export interface ShareRuleFormProperties {
		UnshareInterval: FormControl<number | null | undefined>,
		UnshareIntervalUnit: FormControl<RetentionIntervalUnitValues | null | undefined>,
	}
	export function CreateShareRuleFormGroup() {
		return new FormGroup<ShareRuleFormProperties>({
			UnshareInterval: new FormControl<number | null | undefined>(undefined),
			UnshareIntervalUnit: new FormControl<RetentionIntervalUnitValues | null | undefined>(undefined),
		});

	}


	/** <p> <b>[AMI policies only]</b> Specifies an AMI deprecation rule for AMIs created by an AMI lifecycle policy.</p> <p>For age-based schedules, you must specify <b>Interval</b> and <b>IntervalUnit</b>. For count-based schedules, you must specify <b>Count</b>.</p> */
	export interface DeprecateRule {
		Count?: number | null;
		Interval?: number | null;
		IntervalUnit?: RetentionIntervalUnitValues;
	}

	/** <p> <b>[AMI policies only]</b> Specifies an AMI deprecation rule for AMIs created by an AMI lifecycle policy.</p> <p>For age-based schedules, you must specify <b>Interval</b> and <b>IntervalUnit</b>. For count-based schedules, you must specify <b>Count</b>.</p> */
	export interface DeprecateRuleFormProperties {
		Count: FormControl<number | null | undefined>,
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<RetentionIntervalUnitValues | null | undefined>,
	}
	export function CreateDeprecateRuleFormGroup() {
		return new FormGroup<DeprecateRuleFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<RetentionIntervalUnitValues | null | undefined>(undefined),
		});

	}


	/**  <b>[Snapshot policies only]</b> Specifies a snapshot archiving rule for a schedule. */
	export interface ArchiveRule {

		/** Required */
		RetainRule: ArchiveRetainRule;
	}

	/**  <b>[Snapshot policies only]</b> Specifies a snapshot archiving rule for a schedule. */
	export interface ArchiveRuleFormProperties {
	}
	export function CreateArchiveRuleFormGroup() {
		return new FormGroup<ArchiveRuleFormProperties>({
		});

	}


	/**  <b>[Snapshot policies only]</b> Specifies information about the archive storage tier retention period. */
	export interface ArchiveRetainRule {

		/** Required */
		RetentionArchiveTier: RetentionArchiveTier;
	}

	/**  <b>[Snapshot policies only]</b> Specifies information about the archive storage tier retention period. */
	export interface ArchiveRetainRuleFormProperties {
	}
	export function CreateArchiveRetainRuleFormGroup() {
		return new FormGroup<ArchiveRetainRuleFormProperties>({
		});

	}


	/** <p> <b>[Snapshot policies only]</b> Describes the retention rule for archived snapshots. Once the archive retention threshold is met, the snapshots are permanently deleted from the archive tier.</p> <note> <p>The archive retention rule must retain snapshots in the archive tier for a minimum of 90 days.</p> </note> <p>For <b>count-based schedules</b>, you must specify <b>Count</b>. For <b>age-based schedules</b>, you must specify <b>Interval</b> and <b> IntervalUnit</b>.</p> <p>For more information about using snapshot archiving, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive">Considerations for snapshot lifecycle policies</a>.</p> */
	export interface RetentionArchiveTier {
		Count?: number | null;
		Interval?: number | null;
		IntervalUnit?: RetentionIntervalUnitValues;
	}

	/** <p> <b>[Snapshot policies only]</b> Describes the retention rule for archived snapshots. Once the archive retention threshold is met, the snapshots are permanently deleted from the archive tier.</p> <note> <p>The archive retention rule must retain snapshots in the archive tier for a minimum of 90 days.</p> </note> <p>For <b>count-based schedules</b>, you must specify <b>Count</b>. For <b>age-based schedules</b>, you must specify <b>Interval</b> and <b> IntervalUnit</b>.</p> <p>For more information about using snapshot archiving, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive">Considerations for snapshot lifecycle policies</a>.</p> */
	export interface RetentionArchiveTierFormProperties {
		Count: FormControl<number | null | undefined>,
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<RetentionIntervalUnitValues | null | undefined>,
	}
	export function CreateRetentionArchiveTierFormGroup() {
		return new FormGroup<RetentionArchiveTierFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<RetentionIntervalUnitValues | null | undefined>(undefined),
		});

	}


	/** <p> <b>[Snapshot and AMI policies only]</b> Specifies optional parameters for snapshot and AMI policies. The set of valid parameters depends on the combination of policy type and target resource type.</p> <p>If you choose to exclude boot volumes and you specify tags that consequently exclude all of the additional data volumes attached to an instance, then Amazon Data Lifecycle Manager will not create any snapshots for the affected instance, and it will emit a <code>SnapshotsCreateFailed</code> Amazon CloudWatch metric. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-dlm-cw-metrics.html">Monitor your policies using Amazon CloudWatch</a>.</p> */
	export interface Parameters {
		ExcludeBootVolume?: boolean | null;
		NoReboot?: boolean | null;
		ExcludeDataVolumeTags?: Array<Tag>;
	}

	/** <p> <b>[Snapshot and AMI policies only]</b> Specifies optional parameters for snapshot and AMI policies. The set of valid parameters depends on the combination of policy type and target resource type.</p> <p>If you choose to exclude boot volumes and you specify tags that consequently exclude all of the additional data volumes attached to an instance, then Amazon Data Lifecycle Manager will not create any snapshots for the affected instance, and it will emit a <code>SnapshotsCreateFailed</code> Amazon CloudWatch metric. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-dlm-cw-metrics.html">Monitor your policies using Amazon CloudWatch</a>.</p> */
	export interface ParametersFormProperties {
		ExcludeBootVolume: FormControl<boolean | null | undefined>,
		NoReboot: FormControl<boolean | null | undefined>,
	}
	export function CreateParametersFormGroup() {
		return new FormGroup<ParametersFormProperties>({
			ExcludeBootVolume: new FormControl<boolean | null | undefined>(undefined),
			NoReboot: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy. */
	export interface EventSource {

		/** Required */
		Type: EventSourceValues;
		Parameters?: EventParameters;
	}

	/**  <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy. */
	export interface EventSourceFormProperties {

		/** Required */
		Type: FormControl<EventSourceValues | null | undefined>,
	}
	export function CreateEventSourceFormGroup() {
		return new FormGroup<EventSourceFormProperties>({
			Type: new FormControl<EventSourceValues | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventSourceValues { MANAGED_CWE = 'MANAGED_CWE' }


	/**  <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy. */
	export interface EventParameters {

		/** Required */
		EventType: EventTypeValues;

		/** Required */
		SnapshotOwner: Array<string>;

		/** Required */
		DescriptionRegex: string;
	}

	/**  <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy. */
	export interface EventParametersFormProperties {

		/** Required */
		EventType: FormControl<EventTypeValues | null | undefined>,

		/** Required */
		DescriptionRegex: FormControl<string | null | undefined>,
	}
	export function CreateEventParametersFormGroup() {
		return new FormGroup<EventParametersFormProperties>({
			EventType: new FormControl<EventTypeValues | null | undefined>(undefined, [Validators.required]),
			DescriptionRegex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventTypeValues { shareSnapshot = 'shareSnapshot' }


	/**  <b>[Event-based policies only]</b> Specifies an action for an event-based policy. */
	export interface Action {

		/** Required */
		Name: string;

		/** Required */
		CrossRegionCopy: Array<CrossRegionCopyAction>;
	}

	/**  <b>[Event-based policies only]</b> Specifies an action for an event-based policy. */
	export interface ActionFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p> <b>[Event-based policies only]</b> Specifies a cross-Region copy action for event-based policies.</p> <note> <p>To specify a cross-Region copy rule for snapshot and AMI policies, use <a>CrossRegionCopyRule</a>.</p> </note> */
	export interface CrossRegionCopyAction {

		/** Required */
		Target: string;

		/** Required */
		EncryptionConfiguration: EncryptionConfiguration;

		/** Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted. */
		RetainRule?: CrossRegionCopyRetainRule;
	}

	/** <p> <b>[Event-based policies only]</b> Specifies a cross-Region copy action for event-based policies.</p> <note> <p>To specify a cross-Region copy rule for snapshot and AMI policies, use <a>CrossRegionCopyRule</a>.</p> </note> */
	export interface CrossRegionCopyActionFormProperties {

		/** Required */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateCrossRegionCopyActionFormGroup() {
		return new FormGroup<CrossRegionCopyActionFormProperties>({
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  <b>[Event-based policies only]</b> Specifies the encryption settings for cross-Region snapshot copies created by event-based policies. */
	export interface EncryptionConfiguration {

		/** Required */
		Encrypted: boolean;
		CmkArn?: string;
	}

	/**  <b>[Event-based policies only]</b> Specifies the encryption settings for cross-Region snapshot copies created by event-based policies. */
	export interface EncryptionConfigurationFormProperties {

		/** Required */
		Encrypted: FormControl<boolean | null | undefined>,
		CmkArn: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
			Encrypted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			CmkArn: new FormControl<string | null | undefined>(undefined),
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface DeleteLifecyclePolicyResponse {
	}
	export interface DeleteLifecyclePolicyResponseFormProperties {
	}
	export function CreateDeleteLifecyclePolicyResponseFormGroup() {
		return new FormGroup<DeleteLifecyclePolicyResponseFormProperties>({
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

	export interface GetLifecyclePoliciesResponse {
		Policies?: Array<LifecyclePolicySummary>;
	}
	export interface GetLifecyclePoliciesResponseFormProperties {
	}
	export function CreateGetLifecyclePoliciesResponseFormGroup() {
		return new FormGroup<GetLifecyclePoliciesResponseFormProperties>({
		});

	}


	/** Summary information about a lifecycle policy. */
	export interface LifecyclePolicySummary {
		PolicyId?: string;
		Description?: string;
		State?: GettablePolicyStateValues;
		Tags?: TagMap;
		PolicyType?: PolicyTypeValues;
	}

	/** Summary information about a lifecycle policy. */
	export interface LifecyclePolicySummaryFormProperties {
		PolicyId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<GettablePolicyStateValues | null | undefined>,
		PolicyType: FormControl<PolicyTypeValues | null | undefined>,
	}
	export function CreateLifecyclePolicySummaryFormGroup() {
		return new FormGroup<LifecyclePolicySummaryFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<GettablePolicyStateValues | null | undefined>(undefined),
			PolicyType: new FormControl<PolicyTypeValues | null | undefined>(undefined),
		});

	}

	export enum GettablePolicyStateValues { ENABLED = 'ENABLED', DISABLED = 'DISABLED', ERROR = 'ERROR' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface GetLifecyclePolicyResponse {
		Policy?: LifecyclePolicy;
	}
	export interface GetLifecyclePolicyResponseFormProperties {
	}
	export function CreateGetLifecyclePolicyResponseFormGroup() {
		return new FormGroup<GetLifecyclePolicyResponseFormProperties>({
		});

	}


	/**  <b>[All policy types]</b> Detailed information about a snapshot, AMI, or event-based lifecycle policy. */
	export interface LifecyclePolicy {
		PolicyId?: string;
		Description?: string;
		State?: GettablePolicyStateValues;
		StatusMessage?: string;
		ExecutionRoleArn?: string;
		DateCreated?: Date;
		DateModified?: Date;
		PolicyDetails?: PolicyDetails;
		Tags?: TagMap;
		PolicyArn?: string;
	}

	/**  <b>[All policy types]</b> Detailed information about a snapshot, AMI, or event-based lifecycle policy. */
	export interface LifecyclePolicyFormProperties {
		PolicyId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<GettablePolicyStateValues | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateModified: FormControl<Date | null | undefined>,
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateLifecyclePolicyFormGroup() {
		return new FormGroup<LifecyclePolicyFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<GettablePolicyStateValues | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  <b>[All policy types]</b> Specifies the configuration of a lifecycle policy. */
	export interface PolicyDetails {
		PolicyType?: PolicyTypeValues;
		ResourceTypes?: Array<ResourceTypeValues>;
		ResourceLocations?: Array<ResourceLocationValues>;
		TargetTags?: Array<Tag>;
		Schedules?: Array<Schedule>;
		Parameters?: Parameters;
		EventSource?: EventSource;
		Actions?: Array<Action>;
	}

	/**  <b>[All policy types]</b> Specifies the configuration of a lifecycle policy. */
	export interface PolicyDetailsFormProperties {
		PolicyType: FormControl<PolicyTypeValues | null | undefined>,
	}
	export function CreatePolicyDetailsFormGroup() {
		return new FormGroup<PolicyDetailsFormProperties>({
			PolicyType: new FormControl<PolicyTypeValues | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface UpdateLifecyclePolicyResponse {
	}
	export interface UpdateLifecyclePolicyResponseFormProperties {
	}
	export function CreateUpdateLifecyclePolicyResponseFormGroup() {
		return new FormGroup<UpdateLifecyclePolicyResponseFormProperties>({
		});

	}

	export enum SettablePolicyStateValues { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface CreateLifecyclePolicyRequest {

		/** Required */
		ExecutionRoleArn: string;

		/** Required */
		Description: string;

		/** Required */
		State: SettablePolicyStateValues;

		/** Required */
		PolicyDetails: PolicyDetails;
		Tags?: TagMap;
	}
	export interface CreateLifecyclePolicyRequestFormProperties {

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<SettablePolicyStateValues | null | undefined>,
	}
	export function CreateCreateLifecyclePolicyRequestFormGroup() {
		return new FormGroup<CreateLifecyclePolicyRequestFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<SettablePolicyStateValues | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLifecyclePolicyRequest {
	}
	export interface DeleteLifecyclePolicyRequestFormProperties {
	}
	export function CreateDeleteLifecyclePolicyRequestFormGroup() {
		return new FormGroup<DeleteLifecyclePolicyRequestFormProperties>({
		});

	}

	export interface GetLifecyclePoliciesRequest {
	}
	export interface GetLifecyclePoliciesRequestFormProperties {
	}
	export function CreateGetLifecyclePoliciesRequestFormGroup() {
		return new FormGroup<GetLifecyclePoliciesRequestFormProperties>({
		});

	}

	export interface GetLifecyclePolicyRequest {
	}
	export interface GetLifecyclePolicyRequestFormProperties {
	}
	export function CreateGetLifecyclePolicyRequestFormGroup() {
		return new FormGroup<GetLifecyclePolicyRequestFormProperties>({
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

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
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

	export interface UpdateLifecyclePolicyRequest {
		ExecutionRoleArn?: string;
		State?: SettablePolicyStateValues;
		Description?: string;
		PolicyDetails?: PolicyDetails;
	}
	export interface UpdateLifecyclePolicyRequestFormProperties {
		ExecutionRoleArn: FormControl<string | null | undefined>,
		State: FormControl<SettablePolicyStateValues | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLifecyclePolicyRequestFormGroup() {
		return new FormGroup<UpdateLifecyclePolicyRequestFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<SettablePolicyStateValues | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
		 * Post policies
		 * @return {CreateLifecyclePolicyResponse} Success
		 */
		CreateLifecyclePolicy(requestBody: CreateLifecyclePolicyPostBody): Observable<CreateLifecyclePolicyResponse> {
			return this.http.post<CreateLifecyclePolicyResponse>(this.baseUri + 'policies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
		 * Get policies
		 * @param {Array<string>} policyIds The identifiers of the data lifecycle policies.
		 * @param {GettablePolicyStateValues} state The activation state.
		 * @param {Array<ResourceTypeValues>} resourceTypes The resource type.
		 * @param {Array<string>} targetTags <p>The target tag for a policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p>
		 * @param {Array<string>} tagsToAdd <p>The tags to add to objects created by the policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p> <p>These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags.</p>
		 * @return {GetLifecyclePoliciesResponse} Success
		 */
		GetLifecyclePolicies(policyIds: Array<string> | null | undefined, state: GettablePolicyStateValues | null | undefined, resourceTypes: Array<ResourceTypeValues> | null | undefined, targetTags: Array<string> | null | undefined, tagsToAdd: Array<string> | null | undefined): Observable<GetLifecyclePoliciesResponse> {
			return this.http.get<GetLifecyclePoliciesResponse>(this.baseUri + 'policies?' + policyIds?.map(z => `policyIds=${encodeURIComponent(z)}`).join('&') + '&state=' + state + '&' + resourceTypes?.map(z => `resourceTypes=${z}`).join('&') + '&' + targetTags?.map(z => `targetTags=${encodeURIComponent(z)}`).join('&') + '&' + tagsToAdd?.map(z => `tagsToAdd=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>
		 * Delete policies/{policyId}/
		 * @param {string} policyId The identifier of the lifecycle policy.
		 * @return {DeleteLifecyclePolicyResponse} Success
		 */
		DeleteLifecyclePolicy(policyId: string): Observable<DeleteLifecyclePolicyResponse> {
			return this.http.delete<DeleteLifecyclePolicyResponse>(this.baseUri + 'policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '/', {});
		}

		/**
		 * Gets detailed information about the specified lifecycle policy.
		 * Get policies/{policyId}/
		 * @param {string} policyId The identifier of the lifecycle policy.
		 * @return {GetLifecyclePolicyResponse} Success
		 */
		GetLifecyclePolicy(policyId: string): Observable<GetLifecyclePolicyResponse> {
			return this.http.get<GetLifecyclePolicyResponse>(this.baseUri + 'policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '/', {});
		}

		/**
		 * Lists the tags for the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds the specified tags to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The tag keys.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>
		 * Patch policies/{policyId}
		 * @param {string} policyId The identifier of the lifecycle policy.
		 * @return {UpdateLifecyclePolicyResponse} Success
		 */
		UpdateLifecyclePolicy(policyId: string, requestBody: UpdateLifecyclePolicyPatchBody): Observable<UpdateLifecyclePolicyResponse> {
			return this.http.patch<UpdateLifecyclePolicyResponse>(this.baseUri + 'policies/' + (policyId == null ? '' : encodeURIComponent(policyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateLifecyclePolicyPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
		 * Required
		 * Max length: 2048
		 * Min length: 0
		 */
		ExecutionRoleArn: string;

		/**
		 * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		Description: string;

		/**
		 * The desired activation state of the lifecycle policy after creation.
		 * Required
		 */
		State: SettablePolicyStateValues;

		/**
		 * <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.
		 * Required
		 */
		PolicyDetails: CreateLifecyclePolicyPostBodyPolicyDetails;

		/** The tags to apply to the lifecycle policy during creation. */
		Tags?: {[id: string]: string };
	}
	export interface CreateLifecyclePolicyPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
		 * Required
		 * Max length: 2048
		 * Min length: 0
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The desired activation state of the lifecycle policy after creation.
		 * Required
		 */
		State: FormControl<SettablePolicyStateValues | null | undefined>,

		/** The tags to apply to the lifecycle policy during creation. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateLifecyclePolicyPostBodyFormGroup() {
		return new FormGroup<CreateLifecyclePolicyPostBodyFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role/.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[0-9A-Za-z _-]+')]),
			State: new FormControl<SettablePolicyStateValues | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLifecyclePolicyPostBodyPolicyDetails {
		PolicyType?: PolicyTypeValues;
		ResourceTypes?: Array<ResourceTypeValues>;
		ResourceLocations?: Array<ResourceLocationValues>;
		TargetTags?: Array<Tag>;
		Schedules?: Array<Schedule>;
		Parameters?: Parameters;
		EventSource?: EventSource;
		Actions?: Array<Action>;
	}
	export interface CreateLifecyclePolicyPostBodyPolicyDetailsFormProperties {
		PolicyType: FormControl<PolicyTypeValues | null | undefined>,
	}
	export function CreateCreateLifecyclePolicyPostBodyPolicyDetailsFormGroup() {
		return new FormGroup<CreateLifecyclePolicyPostBodyPolicyDetailsFormProperties>({
			PolicyType: new FormControl<PolicyTypeValues | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * One or more tags.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * One or more tags.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLifecyclePolicyPatchBody {

		/**
		 * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
		 * Max length: 2048
		 * Min length: 0
		 */
		ExecutionRoleArn?: string | null;

		/** The desired activation state of the lifecycle policy after creation. */
		State?: SettablePolicyStateValues | null;

		/**
		 * A description of the lifecycle policy.
		 * Max length: 500
		 * Min length: 0
		 */
		Description?: string | null;

		/** <b>[All policy types]</b> Specifies the configuration of a lifecycle policy. */
		PolicyDetails?: UpdateLifecyclePolicyPatchBodyPolicyDetails;
	}
	export interface UpdateLifecyclePolicyPatchBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
		 * Max length: 2048
		 * Min length: 0
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/** The desired activation state of the lifecycle policy after creation. */
		State: FormControl<SettablePolicyStateValues | null | undefined>,

		/**
		 * A description of the lifecycle policy.
		 * Max length: 500
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLifecyclePolicyPatchBodyFormGroup() {
		return new FormGroup<UpdateLifecyclePolicyPatchBodyFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role/.*')]),
			State: new FormControl<SettablePolicyStateValues | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[0-9A-Za-z _-]+')]),
		});

	}

	export interface UpdateLifecyclePolicyPatchBodyPolicyDetails {
		PolicyType?: PolicyTypeValues;
		ResourceTypes?: Array<ResourceTypeValues>;
		ResourceLocations?: Array<ResourceLocationValues>;
		TargetTags?: Array<Tag>;
		Schedules?: Array<Schedule>;
		Parameters?: Parameters;
		EventSource?: EventSource;
		Actions?: Array<Action>;
	}
	export interface UpdateLifecyclePolicyPatchBodyPolicyDetailsFormProperties {
		PolicyType: FormControl<PolicyTypeValues | null | undefined>,
	}
	export function CreateUpdateLifecyclePolicyPatchBodyPolicyDetailsFormGroup() {
		return new FormGroup<UpdateLifecyclePolicyPatchBodyPolicyDetailsFormProperties>({
			PolicyType: new FormControl<PolicyTypeValues | null | undefined>(undefined),
		});

	}

}

