import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateLifecyclePolicyResponse {
		PolicyId?: string;
	}

	export enum PolicyTypeValues { EBS_SNAPSHOT_MANAGEMENT = 0 }

	export enum ResourceTypeValues { VOLUME = 0, INSTANCE = 1 }


	/** Specifies a tag for a resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}


	/** Specifies a backup schedule. */
	export interface Schedule {
		Name?: string;
		CopyTags?: boolean;
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


	/** <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p> */
	export interface CreateRule {
		Interval?: number;
		IntervalUnit?: CreateRuleIntervalUnit;
		Times?: Array<string>;
		CronExpression?: string;
	}

	export enum CreateRuleIntervalUnit { HOURS = 0 }


	/** Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval. */
	export interface RetainRule {
		Count?: number;
		Interval?: number;
		IntervalUnit?: RetainRuleIntervalUnit;
	}

	export enum RetainRuleIntervalUnit { DAYS = 0, WEEKS = 1, MONTHS = 2, YEARS = 3 }


	/** Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval. */
	export interface FastRestoreRule {
		Count?: number;
		Interval?: number;
		IntervalUnit?: RetainRuleIntervalUnit;
		AvailabilityZones: Array<string>;
	}


	/** Specifies a rule for cross-Region snapshot copies. */
	export interface CrossRegionCopyRule {
		TargetRegion: string;
		Encrypted: boolean;
		CmkArn?: string;
		CopyTags?: boolean;

		/** Specifies the retention rule for cross-Region snapshot copies. */
		RetainRule?: CrossRegionCopyRetainRule;
	}


	/** Specifies the retention rule for cross-Region snapshot copies. */
	export interface CrossRegionCopyRetainRule {
		Interval?: number;
		IntervalUnit?: RetainRuleIntervalUnit;
	}


	/** Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
	export interface Parameters {
		ExcludeBootVolume?: boolean;
	}

	export interface InvalidRequestException {
	}

	export interface LimitExceededException {
	}

	export interface InternalServerException {
	}

	export interface DeleteLifecyclePolicyResponse {
	}

	export interface ResourceNotFoundException {
	}

	export interface GetLifecyclePoliciesResponse {
		Policies?: Array<LifecyclePolicySummary>;
	}


	/** Summary information about a lifecycle policy. */
	export interface LifecyclePolicySummary {
		PolicyId?: string;
		Description?: string;
		State?: LifecyclePolicySummaryState;
		Tags?: TagMap;
	}

	export enum LifecyclePolicySummaryState { ENABLED = 0, DISABLED = 1, ERROR = 2 }

	export interface TagMap {
	}

	export interface GetLifecyclePolicyResponse {

		/** Detailed information about a lifecycle policy. */
		Policy?: LifecyclePolicy;
	}


	/** Detailed information about a lifecycle policy. */
	export interface LifecyclePolicy {
		PolicyId?: string;
		Description?: string;
		State?: LifecyclePolicySummaryState;
		StatusMessage?: string;
		ExecutionRoleArn?: string;
		DateCreated?: Date;
		DateModified?: Date;

		/** Specifies the configuration of a lifecycle policy. */
		PolicyDetails?: PolicyDetails;
		Tags?: TagMap;
		PolicyArn?: string;
	}


	/** Specifies the configuration of a lifecycle policy. */
	export interface PolicyDetails {
		PolicyType?: PolicyTypeValues;
		ResourceTypes?: Array<ResourceTypeValues>;
		TargetTags?: Array<Tag>;
		Schedules?: Array<Schedule>;

		/** Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
		Parameters?: Parameters;
	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateLifecyclePolicyResponse {
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

	export enum IntervalUnitValues { HOURS = 0 }

	export enum RetentionIntervalUnitValues { DAYS = 0, WEEKS = 1, MONTHS = 2, YEARS = 3 }

	export interface DeleteLifecyclePolicyRequest {
	}

	export enum GettablePolicyStateValues { ENABLED = 0, DISABLED = 1, ERROR = 2 }

	export interface GetLifecyclePoliciesRequest {
	}

	export interface GetLifecyclePolicyRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface TagResourceRequest {
		Tags: TagMap;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateLifecyclePolicyRequest {
		ExecutionRoleArn?: string;
		State?: SettablePolicyStateValues;
		Description?: string;

		/** Specifies the configuration of a lifecycle policy. */
		PolicyDetails?: PolicyDetails;
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
		GetLifecyclePolicies(policyIds: Array<string>, state: LifecyclePolicySummaryState, resourceTypes: Array<ResourceTypeValues>, targetTags: Array<string>, tagsToAdd: Array<string>): Observable<GetLifecyclePoliciesResponse> {
			return this.http.get<GetLifecyclePoliciesResponse>(this.baseUri + 'policies?' + policyIds.map(z => `policyIds=${encodeURIComponent(z)}`).join('&') + '&state=' + state + '&' + resourceTypes.map(z => `resourceTypes=${z}`).join('&') + '&' + targetTags.map(z => `targetTags=${encodeURIComponent(z)}`).join('&') + '&' + tagsToAdd.map(z => `tagsToAdd=${encodeURIComponent(z)}`).join('&'), {});
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

	export interface CreateLifecyclePolicyPostBodyPolicyDetails {
		PolicyType?: PolicyTypeValues;
		ResourceTypes?: Array<ResourceTypeValues>;
		TargetTags?: Array<Tag>;
		Schedules?: Array<Schedule>;

		/** Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
		Parameters?: Parameters;
	}

	export interface TagResourcePostBody {

		/**
		 * One or more tags.
		 * Required
		 */
		Tags: {[id: string]: string };
	}

	export interface UpdateLifecyclePolicyPatchBody {

		/**
		 * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
		 * Max length: 2048
		 * Min length: 0
		 * Pattern: arn:aws(-[a-z]{1,3}){0,2}:iam::\d+:role/.*
		 */
		ExecutionRoleArn?: string;

		/** The desired activation state of the lifecycle policy after creation. */
		State?: SettablePolicyStateValues;

		/**
		 * A description of the lifecycle policy.
		 * Max length: 500
		 * Min length: 0
		 * Pattern: [0-9A-Za-z _-]+
		 */
		Description?: string;

		/** Specifies the configuration of a lifecycle policy. */
		PolicyDetails?: UpdateLifecyclePolicyPatchBodyPolicyDetails;
	}

	export interface UpdateLifecyclePolicyPatchBodyPolicyDetails {
		PolicyType?: PolicyTypeValues;
		ResourceTypes?: Array<ResourceTypeValues>;
		TargetTags?: Array<Tag>;
		Schedules?: Array<Schedule>;

		/** Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type. */
		Parameters?: Parameters;
	}

}

