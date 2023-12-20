import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateLifecyclePolicyResponse {
		PolicyId?: string | null;
	}
	export interface CreateLifecyclePolicyResponseFormProperties {
		PolicyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLifecyclePolicyResponseFormGroup() {
		return new FormGroup<CreateLifecyclePolicyResponseFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyTypeValues { EBS_SNAPSHOT_MANAGEMENT = 0 }

	export enum ResourceTypeValues { VOLUME = 0, INSTANCE = 1 }


	/** Specifies a tag for a resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	/** Specifies a tag for a resource. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a backup schedule. */
	export interface Schedule {
		Name?: string | null;
		CopyTags?: boolean | null;
		TagsToAdd?: Array<Tag>;
		VariableTags?: Array<Tag>;

		/** <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p> */
		CreateRule?: CreateRule;

		/** Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval. */
		RetainRule?: RetainRule;

		/** Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval. */
		FastRestoreRule?: FastRestoreRule;
		CrossRegionCopyRules?: Array<CrossRegionCopyRule>;
	}

	/** Specifies a backup schedule. */
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


	/** <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p> */
	export interface CreateRule {
		Interval?: number | null;
		IntervalUnit?: CreateRuleIntervalUnit | null;
		Times?: Array<string>;
		CronExpression?: string | null;
	}

	/** <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p> */
	export interface CreateRuleFormProperties {
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<CreateRuleIntervalUnit | null | undefined>,
		CronExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleFormGroup() {
		return new FormGroup<CreateRuleFormProperties>({
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<CreateRuleIntervalUnit | null | undefined>(undefined),
			CronExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateRuleIntervalUnit { HOURS = 0 }


	/** Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval. */
	export interface RetainRule {
		Count?: number | null;
		Interval?: number | null;
		IntervalUnit?: RetainRuleIntervalUnit | null;
	}

	/** Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval. */
	export interface RetainRuleFormProperties {
		Count: FormControl<number | null | undefined>,
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<RetainRuleIntervalUnit | null | undefined>,
	}
	export function CreateRetainRuleFormGroup() {
		return new FormGroup<RetainRuleFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<RetainRuleIntervalUnit | null | undefined>(undefined),
		});

	}

	export enum RetainRuleIntervalUnit { DAYS = 0, WEEKS = 1, MONTHS = 2, YEARS = 3 }


	/** Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval. */
	export interface FastRestoreRule {
		Count?: number | null;
		Interval?: number | null;
		IntervalUnit?: RetainRuleIntervalUnit | null;
		AvailabilityZones: Array<string>;
	}

	/** Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval. */
	export interface FastRestoreRuleFormProperties {
		Count: FormControl<number | null | undefined>,
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<RetainRuleIntervalUnit | null | undefined>,
	}
	export function CreateFastRestoreRuleFormGroup() {
		return new FormGroup<FastRestoreRuleFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<RetainRuleIntervalUnit | null | undefined>(undefined),
		});

	}


	/** Specifies a rule for cross-Region snapshot copies. */
	export interface CrossRegionCopyRule {
		TargetRegion: string;
		Encrypted: boolean;
		CmkArn?: string | null;
		CopyTags?: boolean | null;

		/** Specifies the retention rule for cross-Region snapshot copies. */
		RetainRule?: CrossRegionCopyRetainRule;
	}

	/** Specifies a rule for cross-Region snapshot copies. */
	export interface CrossRegionCopyRuleFormProperties {
		TargetRegion: FormControl<string | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		CmkArn: FormControl<string | null | undefined>,
		CopyTags: FormControl<boolean | null | undefined>,
	}
	export function CreateCrossRegionCopyRuleFormGroup() {
		return new FormGroup<CrossRegionCopyRuleFormProperties>({
			TargetRegion: new FormControl<string | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			CmkArn: new FormControl<string | null | undefined>(undefined),
			CopyTags: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the retention rule for cross-Region snapshot copies. */
	export interface CrossRegionCopyRetainRule {
		Interval?: number | null;
		IntervalUnit?: RetainRuleIntervalUnit | null;
	}

	/** Specifies the retention rule for cross-Region snapshot copies. */
	export interface CrossRegionCopyRetainRuleFormProperties {
		Interval: FormControl<number | null | undefined>,
		IntervalUnit: FormControl<RetainRuleIntervalUnit | null | undefined>,
	}
	export function CreateCrossRegionCopyRetainRuleFormGroup() {
		return new FormGroup<CrossRegionCopyRetainRuleFormProperties>({
			Interval: new FormControl<number | null | undefined>(undefined),
			IntervalUnit: new FormControl<RetainRuleIntervalUnit | null | undefined>(undefined),
		});

	}


	/** Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
	export interface Parameters {
		ExcludeBootVolume?: boolean | null;
	}

	/** Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
	export interface ParametersFormProperties {
		ExcludeBootVolume: FormControl<boolean | null | undefined>,
	}
	export function CreateParametersFormGroup() {
		return new FormGroup<ParametersFormProperties>({
			ExcludeBootVolume: new FormControl<boolean | null | undefined>(undefined),
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
		PolicyId?: string | null;
		Description?: string | null;
		State?: LifecyclePolicySummaryState | null;
		Tags?: TagMap;
	}

	/** Summary information about a lifecycle policy. */
	export interface LifecyclePolicySummaryFormProperties {
		PolicyId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<LifecyclePolicySummaryState | null | undefined>,
	}
	export function CreateLifecyclePolicySummaryFormGroup() {
		return new FormGroup<LifecyclePolicySummaryFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<LifecyclePolicySummaryState | null | undefined>(undefined),
		});

	}

	export enum LifecyclePolicySummaryState { ENABLED = 0, DISABLED = 1, ERROR = 2 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface GetLifecyclePolicyResponse {

		/** Detailed information about a lifecycle policy. */
		Policy?: LifecyclePolicy;
	}
	export interface GetLifecyclePolicyResponseFormProperties {
	}
	export function CreateGetLifecyclePolicyResponseFormGroup() {
		return new FormGroup<GetLifecyclePolicyResponseFormProperties>({
		});

	}


	/** Detailed information about a lifecycle policy. */
	export interface LifecyclePolicy {
		PolicyId?: string | null;
		Description?: string | null;
		State?: LifecyclePolicySummaryState | null;
		StatusMessage?: string | null;
		ExecutionRoleArn?: string | null;
		DateCreated?: Date | null;
		DateModified?: Date | null;

		/** Specifies the configuration of a lifecycle policy. */
		PolicyDetails?: PolicyDetails;
		Tags?: TagMap;
		PolicyArn?: string | null;
	}

	/** Detailed information about a lifecycle policy. */
	export interface LifecyclePolicyFormProperties {
		PolicyId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<LifecyclePolicySummaryState | null | undefined>,
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
			State: new FormControl<LifecyclePolicySummaryState | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the configuration of a lifecycle policy. */
	export interface PolicyDetails {
		PolicyType?: PolicyTypeValues | null;
		ResourceTypes?: Array<ResourceTypeValues>;
		TargetTags?: Array<Tag>;
		Schedules?: Array<Schedule>;

		/** Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
		Parameters?: Parameters;
	}

	/** Specifies the configuration of a lifecycle policy. */
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

	export enum SettablePolicyStateValues { ENABLED = 0, DISABLED = 1 }

	export interface CreateLifecyclePolicyRequest {
		ExecutionRoleArn: string;
		Description: string;
		State: SettablePolicyStateValues;

		/**
		 * Specifies the configuration of a lifecycle policy.
		 * Required
		 */
		PolicyDetails: PolicyDetails;
		Tags?: TagMap;
	}
	export interface CreateLifecyclePolicyRequestFormProperties {
		ExecutionRoleArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<SettablePolicyStateValues | null | undefined>,
	}
	export function CreateCreateLifecyclePolicyRequestFormGroup() {
		return new FormGroup<CreateLifecyclePolicyRequestFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<SettablePolicyStateValues | null | undefined>(undefined),
		});

	}

	export enum IntervalUnitValues { HOURS = 0 }

	export enum RetentionIntervalUnitValues { DAYS = 0, WEEKS = 1, MONTHS = 2, YEARS = 3 }

	export interface DeleteLifecyclePolicyRequest {
	}
	export interface DeleteLifecyclePolicyRequestFormProperties {
	}
	export function CreateDeleteLifecyclePolicyRequestFormGroup() {
		return new FormGroup<DeleteLifecyclePolicyRequestFormProperties>({
		});

	}

	export enum GettablePolicyStateValues { ENABLED = 0, DISABLED = 1, ERROR = 2 }

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
		ExecutionRoleArn?: string | null;
		State?: SettablePolicyStateValues | null;
		Description?: string | null;

		/** Specifies the configuration of a lifecycle policy. */
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
		 * Creates a policy to manage the lifecycle of the specified AWS resources. You can create up to 100 lifecycle policies.
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
		 * @param {LifecyclePolicySummaryState} state The activation state.
		 * @param {Array<ResourceTypeValues>} resourceTypes The resource type.
		 * @param {Array<string>} targetTags <p>The target tag for a policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p>
		 * @param {Array<string>} tagsToAdd <p>The tags to add to objects created by the policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p> <p>These user-defined tags are added in addition to the AWS-added lifecycle tags.</p>
		 * @return {GetLifecyclePoliciesResponse} Success
		 */
		GetLifecyclePolicies(policyIds: Array<string> | null | undefined, state: LifecyclePolicySummaryState | null | undefined, resourceTypes: Array<ResourceTypeValues> | null | undefined, targetTags: Array<string> | null | undefined, tagsToAdd: Array<string> | null | undefined): Observable<GetLifecyclePoliciesResponse> {
			return this.http.get<GetLifecyclePoliciesResponse>(this.baseUri + 'policies?' + policyIds?.map(z => `policyIds=${encodeURIComponent(z)}`).join('&') + '&state=' + state + '&' + resourceTypes?.map(z => `resourceTypes=${z}`).join('&') + '&' + targetTags?.map(z => `targetTags=${encodeURIComponent(z)}`).join('&') + '&' + tagsToAdd?.map(z => `tagsToAdd=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
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
		 * Updates the specified lifecycle policy.
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
		 * Pattern: arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role/.*
		 */
		ExecutionRoleArn: string;

		/**
		 * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 * Pattern: [0-9A-Za-z _-]+
		 */
		Description: string;

		/**
		 * The desired activation state of the lifecycle policy after creation.
		 * Required
		 */
		State: SettablePolicyStateValues;

		/**
		 * Specifies the configuration of a lifecycle policy.
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
		 * Pattern: arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role/.*
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 * Pattern: [0-9A-Za-z _-]+
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
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<SettablePolicyStateValues | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLifecyclePolicyPostBodyPolicyDetails {
		PolicyType?: PolicyTypeValues | null;
		ResourceTypes?: Array<ResourceTypeValues>;
		TargetTags?: Array<Tag>;
		Schedules?: Array<Schedule>;

		/** Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
		Parameters?: Parameters;
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
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateLifecyclePolicyPatchBody {

		/**
		 * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
		 * Max length: 2048
		 * Min length: 0
		 * Pattern: arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role/.*
		 */
		ExecutionRoleArn?: string | null;

		/** The desired activation state of the lifecycle policy after creation. */
		State?: SettablePolicyStateValues | null;

		/**
		 * A description of the lifecycle policy.
		 * Max length: 500
		 * Min length: 0
		 * Pattern: [0-9A-Za-z _-]+
		 */
		Description?: string | null;

		/** Specifies the configuration of a lifecycle policy. */
		PolicyDetails?: UpdateLifecyclePolicyPatchBodyPolicyDetails;
	}
	export interface UpdateLifecyclePolicyPatchBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
		 * Max length: 2048
		 * Min length: 0
		 * Pattern: arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role/.*
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/** The desired activation state of the lifecycle policy after creation. */
		State: FormControl<SettablePolicyStateValues | null | undefined>,

		/**
		 * A description of the lifecycle policy.
		 * Max length: 500
		 * Min length: 0
		 * Pattern: [0-9A-Za-z _-]+
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLifecyclePolicyPatchBodyFormGroup() {
		return new FormGroup<UpdateLifecyclePolicyPatchBodyFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<SettablePolicyStateValues | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLifecyclePolicyPatchBodyPolicyDetails {
		PolicyType?: PolicyTypeValues | null;
		ResourceTypes?: Array<ResourceTypeValues>;
		TargetTags?: Array<Tag>;
		Schedules?: Array<Schedule>;

		/** Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
		Parameters?: Parameters;
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

