import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateRuleResponse {
		Identifier?: string;

		/** Information about the retention period for which the retention rule is to retain resources. */
		RetentionPeriod?: RetentionPeriod;
		Description?: string;
		Tags?: Array<Tag>;
		ResourceType?: ResourceType;
		ResourceTags?: Array<ResourceTag>;
		Status?: RuleStatus;
		LockConfiguration?: LockConfiguration;
		LockState?: LockState;
	}
	export interface CreateRuleResponseFormProperties {
		Identifier: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
		Status: FormControl<RuleStatus | null | undefined>,
		LockState: FormControl<LockState | null | undefined>,
	}
	export function CreateCreateRuleResponseFormGroup() {
		return new FormGroup<CreateRuleResponseFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			Status: new FormControl<RuleStatus | null | undefined>(undefined),
			LockState: new FormControl<LockState | null | undefined>(undefined),
		});

	}


	/** Information about the retention period for which the retention rule is to retain resources. */
	export interface RetentionPeriod {

		/** Required */
		RetentionPeriodValue: number;

		/** Required */
		RetentionPeriodUnit: RetentionPeriodUnit;
	}

	/** Information about the retention period for which the retention rule is to retain resources. */
	export interface RetentionPeriodFormProperties {

		/** Required */
		RetentionPeriodValue: FormControl<number | null | undefined>,

		/** Required */
		RetentionPeriodUnit: FormControl<RetentionPeriodUnit | null | undefined>,
	}
	export function CreateRetentionPeriodFormGroup() {
		return new FormGroup<RetentionPeriodFormProperties>({
			RetentionPeriodValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RetentionPeriodUnit: new FormControl<RetentionPeriodUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RetentionPeriodUnit { DAYS = 'DAYS' }


	/** Information about the tags to assign to the retention rule. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Information about the tags to assign to the retention rule. */
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

	export enum ResourceType { EBS_SNAPSHOT = 'EBS_SNAPSHOT', EC2_IMAGE = 'EC2_IMAGE' }


	/** Information about the resource tags used to identify resources that are retained by the retention rule. */
	export interface ResourceTag {

		/** Required */
		ResourceTagKey: string;
		ResourceTagValue?: string;
	}

	/** Information about the resource tags used to identify resources that are retained by the retention rule. */
	export interface ResourceTagFormProperties {

		/** Required */
		ResourceTagKey: FormControl<string | null | undefined>,
		ResourceTagValue: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagFormGroup() {
		return new FormGroup<ResourceTagFormProperties>({
			ResourceTagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceTagValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RuleStatus { pending = 'pending', available = 'available' }


	/** Information about a retention rule lock configuration. */
	export interface LockConfiguration {

		/** Required */
		UnlockDelay: UnlockDelay;
	}

	/** Information about a retention rule lock configuration. */
	export interface LockConfigurationFormProperties {
	}
	export function CreateLockConfigurationFormGroup() {
		return new FormGroup<LockConfigurationFormProperties>({
		});

	}


	/** Information about the retention rule unlock delay. The unlock delay is the period after which a retention rule can be modified or edited after it has been unlocked by a user with the required permissions. The retention rule can't be modified or deleted during the unlock delay. */
	export interface UnlockDelay {

		/** Required */
		UnlockDelayValue: number;

		/** Required */
		UnlockDelayUnit: RetentionPeriodUnit;
	}

	/** Information about the retention rule unlock delay. The unlock delay is the period after which a retention rule can be modified or edited after it has been unlocked by a user with the required permissions. The retention rule can't be modified or deleted during the unlock delay. */
	export interface UnlockDelayFormProperties {

		/** Required */
		UnlockDelayValue: FormControl<number | null | undefined>,

		/** Required */
		UnlockDelayUnit: FormControl<RetentionPeriodUnit | null | undefined>,
	}
	export function CreateUnlockDelayFormGroup() {
		return new FormGroup<UnlockDelayFormProperties>({
			UnlockDelayValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UnlockDelayUnit: new FormControl<RetentionPeriodUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LockState { locked = 'locked', pending_unlock = 'pending_unlock', unlocked = 'unlocked' }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface DeleteRuleResponse {
	}
	export interface DeleteRuleResponseFormProperties {
	}
	export function CreateDeleteRuleResponseFormGroup() {
		return new FormGroup<DeleteRuleResponseFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface GetRuleResponse {
		Identifier?: string;
		Description?: string;
		ResourceType?: ResourceType;
		RetentionPeriod?: RetentionPeriod;
		ResourceTags?: Array<ResourceTag>;
		Status?: RuleStatus;
		LockConfiguration?: LockConfiguration;
		LockState?: LockState;
		LockEndTime?: Date;
	}
	export interface GetRuleResponseFormProperties {
		Identifier: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
		Status: FormControl<RuleStatus | null | undefined>,
		LockState: FormControl<LockState | null | undefined>,
		LockEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetRuleResponseFormGroup() {
		return new FormGroup<GetRuleResponseFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			Status: new FormControl<RuleStatus | null | undefined>(undefined),
			LockState: new FormControl<LockState | null | undefined>(undefined),
			LockEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRulesResponse {
		Rules?: Array<RuleSummary>;
		NextToken?: string;
	}
	export interface ListRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRulesResponseFormGroup() {
		return new FormGroup<ListRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Recycle Bin retention rule. */
	export interface RuleSummary {
		Identifier?: string;
		Description?: string;
		RetentionPeriod?: RetentionPeriod;
		LockState?: LockState;
	}

	/** Information about a Recycle Bin retention rule. */
	export interface RuleSummaryFormProperties {
		Identifier: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LockState: FormControl<LockState | null | undefined>,
	}
	export function CreateRuleSummaryFormGroup() {
		return new FormGroup<RuleSummaryFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LockState: new FormControl<LockState | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface LockRuleResponse {
		Identifier?: string;
		Description?: string;
		ResourceType?: ResourceType;

		/** Information about the retention period for which the retention rule is to retain resources. */
		RetentionPeriod?: RetentionPeriod;
		ResourceTags?: Array<ResourceTag>;
		Status?: RuleStatus;
		LockConfiguration?: LockConfiguration;
		LockState?: LockState;
	}
	export interface LockRuleResponseFormProperties {
		Identifier: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
		Status: FormControl<RuleStatus | null | undefined>,
		LockState: FormControl<LockState | null | undefined>,
	}
	export function CreateLockRuleResponseFormGroup() {
		return new FormGroup<LockRuleResponseFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			Status: new FormControl<RuleStatus | null | undefined>(undefined),
			LockState: new FormControl<LockState | null | undefined>(undefined),
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

	export interface UnlockRuleResponse {
		Identifier?: string;
		Description?: string;
		ResourceType?: ResourceType;

		/** Information about the retention period for which the retention rule is to retain resources. */
		RetentionPeriod?: RetentionPeriod;
		ResourceTags?: Array<ResourceTag>;
		Status?: RuleStatus;
		LockConfiguration?: LockConfiguration;
		LockState?: LockState;
		LockEndTime?: Date;
	}
	export interface UnlockRuleResponseFormProperties {
		Identifier: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
		Status: FormControl<RuleStatus | null | undefined>,
		LockState: FormControl<LockState | null | undefined>,
		LockEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateUnlockRuleResponseFormGroup() {
		return new FormGroup<UnlockRuleResponseFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			Status: new FormControl<RuleStatus | null | undefined>(undefined),
			LockState: new FormControl<LockState | null | undefined>(undefined),
			LockEndTime: new FormControl<Date | null | undefined>(undefined),
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

	export interface UpdateRuleResponse {
		Identifier?: string;

		/** Information about the retention period for which the retention rule is to retain resources. */
		RetentionPeriod?: RetentionPeriod;
		Description?: string;
		ResourceType?: ResourceType;
		ResourceTags?: Array<ResourceTag>;
		Status?: RuleStatus;
		LockState?: LockState;
		LockEndTime?: Date;
	}
	export interface UpdateRuleResponseFormProperties {
		Identifier: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
		Status: FormControl<RuleStatus | null | undefined>,
		LockState: FormControl<LockState | null | undefined>,
		LockEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateRuleResponseFormGroup() {
		return new FormGroup<UpdateRuleResponseFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			Status: new FormControl<RuleStatus | null | undefined>(undefined),
			LockState: new FormControl<LockState | null | undefined>(undefined),
			LockEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateRuleRequest {

		/** Required */
		RetentionPeriod: RetentionPeriod;
		Description?: string;
		Tags?: Array<Tag>;

		/** Required */
		ResourceType: ResourceType;
		ResourceTags?: Array<ResourceTag>;
		LockConfiguration?: LockConfiguration;
	}
	export interface CreateRuleRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateCreateRuleRequestFormGroup() {
		return new FormGroup<CreateRuleRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRuleRequest {
	}
	export interface DeleteRuleRequestFormProperties {
	}
	export function CreateDeleteRuleRequestFormGroup() {
		return new FormGroup<DeleteRuleRequestFormProperties>({
		});

	}

	export interface GetRuleRequest {
	}
	export interface GetRuleRequestFormProperties {
	}
	export function CreateGetRuleRequestFormGroup() {
		return new FormGroup<GetRuleRequestFormProperties>({
		});

	}

	export interface ListRulesRequest {
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		ResourceType: ResourceType;
		ResourceTags?: Array<ResourceTag>;
		LockState?: LockState;
	}
	export interface ListRulesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<ResourceType | null | undefined>,
		LockState: FormControl<LockState | null | undefined>,
	}
	export function CreateListRulesRequestFormGroup() {
		return new FormGroup<ListRulesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			LockState: new FormControl<LockState | null | undefined>(undefined),
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

	export interface LockRuleRequest {

		/** Required */
		LockConfiguration: LockConfiguration;
	}
	export interface LockRuleRequestFormProperties {
	}
	export function CreateLockRuleRequestFormGroup() {
		return new FormGroup<LockRuleRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export enum UnlockDelayUnit { DAYS = 'DAYS' }

	export interface UnlockRuleRequest {
	}
	export interface UnlockRuleRequestFormProperties {
	}
	export function CreateUnlockRuleRequestFormGroup() {
		return new FormGroup<UnlockRuleRequestFormProperties>({
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

	export interface UpdateRuleRequest {
		RetentionPeriod?: RetentionPeriod;
		Description?: string;
		ResourceType?: ResourceType;
		ResourceTags?: Array<ResourceTag>;
	}
	export interface UpdateRuleRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateUpdateRuleRequestFormGroup() {
		return new FormGroup<UpdateRuleRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
		 * Post rules
		 * @return {void} 
		 */
		CreateRule(requestBody: CreateRulePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
		 * Delete rules/{identifier}
		 * @param {string} identifier The unique ID of the retention rule.
		 * @return {void} 
		 */
		DeleteRule(identifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'rules/' + (identifier == null ? '' : encodeURIComponent(identifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a Recycle Bin retention rule.
		 * Get rules/{identifier}
		 * @param {string} identifier The unique ID of the retention rule.
		 * @return {GetRuleResponse} Success
		 */
		GetRule(identifier: string): Observable<GetRuleResponse> {
			return this.http.get<GetRuleResponse>(this.baseUri + 'rules/' + (identifier == null ? '' : encodeURIComponent(identifier)), {});
		}

		/**
		 * Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
		 * Patch rules/{identifier}
		 * @param {string} identifier The unique ID of the retention rule.
		 * @return {UpdateRuleResponse} Success
		 */
		UpdateRule(identifier: string, requestBody: UpdateRulePatchBody): Observable<UpdateRuleResponse> {
			return this.http.patch<UpdateRuleResponse>(this.baseUri + 'rules/' + (identifier == null ? '' : encodeURIComponent(identifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Recycle Bin retention rules in the Region.
		 * Post list-rules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRulesResponse} Success
		 */
		ListRules(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRulesPostBody): Observable<ListRulesResponse> {
			return this.http.post<ListRulesResponse>(this.baseUri + 'list-rules?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags assigned to a retention rule.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the retention rule.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Assigns tags to the specified retention rule.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the retention rule.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Locks a retention rule. A locked retention rule can't be modified or deleted.
		 * Patch rules/{identifier}/lock
		 * @param {string} identifier The unique ID of the retention rule.
		 * @return {LockRuleResponse} Success
		 */
		LockRule(identifier: string, requestBody: LockRulePatchBody): Observable<LockRuleResponse> {
			return this.http.patch<LockRuleResponse>(this.baseUri + 'rules/' + (identifier == null ? '' : encodeURIComponent(identifier)) + '/lock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
		 * Patch rules/{identifier}/unlock
		 * @param {string} identifier The unique ID of the retention rule.
		 * @return {UnlockRuleResponse} Success
		 */
		UnlockRule(identifier: string): Observable<UnlockRuleResponse> {
			return this.http.patch<UnlockRuleResponse>(this.baseUri + 'rules/' + (identifier == null ? '' : encodeURIComponent(identifier)) + '/unlock', null, {});
		}

		/**
		 * Unassigns a tag from a retention rule.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the retention rule.
		 * @param {Array<string>} tagKeys The tag keys of the tags to unassign. All tags that have the specified tag key are unassigned.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateRulePostBody {

		/**
		 * Information about the retention period for which the retention rule is to retain resources.
		 * Required
		 */
		RetentionPeriod: CreateRulePostBodyRetentionPeriod;

		/** The retention rule description. */
		Description?: string | null;

		/**
		 * Information about the tags to assign to the retention rule.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To retain snapshots, specify <code>EBS_SNAPSHOT</code>. To retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.
		 * Required
		 */
		ResourceType: ResourceType;

		/**
		 * <p>Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.</p> <p>You can add the same tag key and value pair to a maximum or five retention rules.</p> <p>To create a Region-level retention rule, omit this parameter. A Region-level retention rule does not have any resource tags specified. It retains all deleted resources of the specified resource type in the Region in which the rule is created, even if the resources are not tagged.</p>
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		ResourceTags?: Array<ResourceTag>;

		/** Information about a retention rule lock configuration. */
		LockConfiguration?: CreateRulePostBodyLockConfiguration;
	}
	export interface CreateRulePostBodyFormProperties {

		/** The retention rule description. */
		Description: FormControl<string | null | undefined>,

		/**
		 * The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To retain snapshots, specify <code>EBS_SNAPSHOT</code>. To retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.
		 * Required
		 */
		ResourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateCreateRulePostBodyFormGroup() {
		return new FormGroup<CreateRulePostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\S ]{0,255}$')]),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRulePostBodyRetentionPeriod {
		RetentionPeriodValue?: number | null;
		RetentionPeriodUnit?: RetentionPeriodUnit;
	}
	export interface CreateRulePostBodyRetentionPeriodFormProperties {
		RetentionPeriodValue: FormControl<number | null | undefined>,
		RetentionPeriodUnit: FormControl<RetentionPeriodUnit | null | undefined>,
	}
	export function CreateCreateRulePostBodyRetentionPeriodFormGroup() {
		return new FormGroup<CreateRulePostBodyRetentionPeriodFormProperties>({
			RetentionPeriodValue: new FormControl<number | null | undefined>(undefined),
			RetentionPeriodUnit: new FormControl<RetentionPeriodUnit | null | undefined>(undefined),
		});

	}

	export interface CreateRulePostBodyLockConfiguration {
		UnlockDelay?: UnlockDelay;
	}
	export interface CreateRulePostBodyLockConfigurationFormProperties {
	}
	export function CreateCreateRulePostBodyLockConfigurationFormGroup() {
		return new FormGroup<CreateRulePostBodyLockConfigurationFormProperties>({
		});

	}

	export interface UpdateRulePatchBody {

		/** Information about the retention period for which the retention rule is to retain resources. */
		RetentionPeriod?: UpdateRulePatchBodyRetentionPeriod;

		/** The retention rule description. */
		Description?: string | null;

		/** <note> <p>This parameter is currently not supported. You can't update a retention rule's resource type after creation.</p> </note> */
		ResourceType?: ResourceType | null;

		/**
		 * <p>Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.</p> <p>You can add the same tag key and value pair to a maximum or five retention rules.</p> <p>To create a Region-level retention rule, omit this parameter. A Region-level retention rule does not have any resource tags specified. It retains all deleted resources of the specified resource type in the Region in which the rule is created, even if the resources are not tagged.</p>
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		ResourceTags?: Array<ResourceTag>;
	}
	export interface UpdateRulePatchBodyFormProperties {

		/** The retention rule description. */
		Description: FormControl<string | null | undefined>,

		/** <note> <p>This parameter is currently not supported. You can't update a retention rule's resource type after creation.</p> </note> */
		ResourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateUpdateRulePatchBodyFormGroup() {
		return new FormGroup<UpdateRulePatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\S ]{0,255}$')]),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}

	export interface UpdateRulePatchBodyRetentionPeriod {
		RetentionPeriodValue?: number | null;
		RetentionPeriodUnit?: RetentionPeriodUnit;
	}
	export interface UpdateRulePatchBodyRetentionPeriodFormProperties {
		RetentionPeriodValue: FormControl<number | null | undefined>,
		RetentionPeriodUnit: FormControl<RetentionPeriodUnit | null | undefined>,
	}
	export function CreateUpdateRulePatchBodyRetentionPeriodFormGroup() {
		return new FormGroup<UpdateRulePatchBodyRetentionPeriodFormProperties>({
			RetentionPeriodValue: new FormControl<number | null | undefined>(undefined),
			RetentionPeriodUnit: new FormControl<RetentionPeriodUnit | null | undefined>(undefined),
		});

	}

	export interface ListRulesPostBody {

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/** The token for the next page of results. */
		NextToken?: string | null;

		/**
		 * The resource type retained by the retention rule. Only retention rules that retain the specified resource type are listed. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To list retention rules that retain snapshots, specify <code>EBS_SNAPSHOT</code>. To list retention rules that retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.
		 * Required
		 */
		ResourceType: ResourceType;

		/**
		 * Information about the resource tags used to identify resources that are retained by the retention rule.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		ResourceTags?: Array<ResourceTag>;

		/** The lock state of the retention rules to list. Only retention rules with the specified lock state are returned. */
		LockState?: LockState | null;
	}
	export interface ListRulesPostBodyFormProperties {

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The token for the next page of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The resource type retained by the retention rule. Only retention rules that retain the specified resource type are listed. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To list retention rules that retain snapshots, specify <code>EBS_SNAPSHOT</code>. To list retention rules that retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.
		 * Required
		 */
		ResourceType: FormControl<ResourceType | null | undefined>,

		/** The lock state of the retention rules to list. Only retention rules with the specified lock state are returned. */
		LockState: FormControl<LockState | null | undefined>,
	}
	export function CreateListRulesPostBodyFormGroup() {
		return new FormGroup<ListRulesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9+/=]{1,2048}$')]),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			LockState: new FormControl<LockState | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Information about the tags to assign to the retention rule.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface LockRulePatchBody {

		/**
		 * Information about a retention rule lock configuration.
		 * Required
		 */
		LockConfiguration: LockRulePatchBodyLockConfiguration;
	}
	export interface LockRulePatchBodyFormProperties {
	}
	export function CreateLockRulePatchBodyFormGroup() {
		return new FormGroup<LockRulePatchBodyFormProperties>({
		});

	}

	export interface LockRulePatchBodyLockConfiguration {
		UnlockDelay?: UnlockDelay;
	}
	export interface LockRulePatchBodyLockConfigurationFormProperties {
	}
	export function CreateLockRulePatchBodyLockConfigurationFormGroup() {
		return new FormGroup<LockRulePatchBodyLockConfigurationFormProperties>({
		});

	}

}

