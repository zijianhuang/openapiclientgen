import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateNotificationRuleResult {
		Arn?: string;
	}
	export interface CreateNotificationRuleResultFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateNotificationRuleResultFormGroup() {
		return new FormGroup<CreateNotificationRuleResultFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the Chatbot topics or Chatbot clients associated with a notification rule. */
	export interface Target {
		TargetType?: string;
		TargetAddress?: string;
	}

	/** Information about the Chatbot topics or Chatbot clients associated with a notification rule. */
	export interface TargetFormProperties {
		TargetType: FormControl<string | null | undefined>,
		TargetAddress: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			TargetType: new FormControl<string | null | undefined>(undefined),
			TargetAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ConfigurationException {
	}
	export interface ConfigurationExceptionFormProperties {
	}
	export function CreateConfigurationExceptionFormGroup() {
		return new FormGroup<ConfigurationExceptionFormProperties>({
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface DeleteNotificationRuleResult {
		Arn?: string;
	}
	export interface DeleteNotificationRuleResultFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNotificationRuleResultFormGroup() {
		return new FormGroup<DeleteNotificationRuleResultFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteTargetResult {
	}
	export interface DeleteTargetResultFormProperties {
	}
	export function CreateDeleteTargetResultFormGroup() {
		return new FormGroup<DeleteTargetResultFormProperties>({
		});

	}

	export interface DescribeNotificationRuleResult {

		/** Required */
		Arn: string;
		Name?: string;
		EventTypes?: Array<EventTypeSummary>;
		Resource?: string;
		Targets?: Array<TargetSummary>;
		DetailType?: DetailType;
		CreatedBy?: string;
		Status?: NotificationRuleStatus;
		CreatedTimestamp?: Date;
		LastModifiedTimestamp?: Date;
		Tags?: Tags;
	}
	export interface DescribeNotificationRuleResultFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Resource: FormControl<string | null | undefined>,
		DetailType: FormControl<DetailType | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		Status: FormControl<NotificationRuleStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeNotificationRuleResultFormGroup() {
		return new FormGroup<DescribeNotificationRuleResultFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Resource: new FormControl<string | null | undefined>(undefined),
			DetailType: new FormControl<DetailType | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NotificationRuleStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Returns information about an event that has triggered a notification rule. */
	export interface EventTypeSummary {
		EventTypeId?: string;
		ServiceName?: string;
		EventTypeName?: string;
		ResourceType?: string;
	}

	/** Returns information about an event that has triggered a notification rule. */
	export interface EventTypeSummaryFormProperties {
		EventTypeId: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		EventTypeName: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateEventTypeSummaryFormGroup() {
		return new FormGroup<EventTypeSummaryFormProperties>({
			EventTypeId: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			EventTypeName: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the targets specified for a notification rule. */
	export interface TargetSummary {
		TargetAddress?: string;
		TargetType?: string;
		TargetStatus?: TargetStatus;
	}

	/** Information about the targets specified for a notification rule. */
	export interface TargetSummaryFormProperties {
		TargetAddress: FormControl<string | null | undefined>,
		TargetType: FormControl<string | null | undefined>,
		TargetStatus: FormControl<TargetStatus | null | undefined>,
	}
	export function CreateTargetSummaryFormGroup() {
		return new FormGroup<TargetSummaryFormProperties>({
			TargetAddress: new FormControl<string | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined),
			TargetStatus: new FormControl<TargetStatus | null | undefined>(undefined),
		});

	}

	export enum TargetStatus { PENDING = 0, ACTIVE = 1, UNREACHABLE = 2, INACTIVE = 3, DEACTIVATED = 4 }

	export enum DetailType { BASIC = 0, FULL = 1 }

	export enum NotificationRuleStatus { ENABLED = 0, DISABLED = 1 }

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
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

	export interface ListEventTypesResult {
		EventTypes?: Array<EventTypeSummary>;
		NextToken?: string;
	}
	export interface ListEventTypesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventTypesResultFormGroup() {
		return new FormGroup<ListEventTypesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a filter to apply to the list of returned event types. You can filter by resource type or service name. */
	export interface ListEventTypesFilter {

		/** Required */
		Name: ListEventTypesFilterName;

		/** Required */
		Value: string;
	}

	/** Information about a filter to apply to the list of returned event types. You can filter by resource type or service name. */
	export interface ListEventTypesFilterFormProperties {

		/** Required */
		Name: FormControl<ListEventTypesFilterName | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateListEventTypesFilterFormGroup() {
		return new FormGroup<ListEventTypesFilterFormProperties>({
			Name: new FormControl<ListEventTypesFilterName | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ListEventTypesFilterName { RESOURCE_TYPE = 0, SERVICE_NAME = 1 }

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface ListNotificationRulesResult {
		NextToken?: string;
		NotificationRules?: Array<NotificationRuleSummary>;
	}
	export interface ListNotificationRulesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotificationRulesResultFormGroup() {
		return new FormGroup<ListNotificationRulesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a specified notification rule. */
	export interface NotificationRuleSummary {
		Id?: string;
		Arn?: string;
	}

	/** Information about a specified notification rule. */
	export interface NotificationRuleSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateNotificationRuleSummaryFormGroup() {
		return new FormGroup<NotificationRuleSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target. */
	export interface ListNotificationRulesFilter {

		/** Required */
		Name: ListNotificationRulesFilterName;

		/** Required */
		Value: string;
	}

	/** Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target. */
	export interface ListNotificationRulesFilterFormProperties {

		/** Required */
		Name: FormControl<ListNotificationRulesFilterName | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateListNotificationRulesFilterFormGroup() {
		return new FormGroup<ListNotificationRulesFilterFormProperties>({
			Name: new FormControl<ListNotificationRulesFilterName | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ListNotificationRulesFilterName { EVENT_TYPE_ID = 0, CREATED_BY = 1, RESOURCE = 2, TARGET_ADDRESS = 3 }

	export interface ListTagsForResourceResult {
		Tags?: Tags;
	}
	export interface ListTagsForResourceResultFormProperties {
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
		});

	}

	export interface ListTargetsResult {
		Targets?: Array<TargetSummary>;
		NextToken?: string;
	}
	export interface ListTargetsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsResultFormGroup() {
		return new FormGroup<ListTargetsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Chatbot topics as targets, you could specify a ListTargetsFilter Name as <code>TargetType</code> and a Value of <code>SNS</code>, and a Name of <code>TARGET_STATUS</code> and a Value of <code>ACTIVE</code>. */
	export interface ListTargetsFilter {

		/** Required */
		Name: ListTargetsFilterName;

		/** Required */
		Value: string;
	}

	/** Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Chatbot topics as targets, you could specify a ListTargetsFilter Name as <code>TargetType</code> and a Value of <code>SNS</code>, and a Name of <code>TARGET_STATUS</code> and a Value of <code>ACTIVE</code>. */
	export interface ListTargetsFilterFormProperties {

		/** Required */
		Name: FormControl<ListTargetsFilterName | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsFilterFormGroup() {
		return new FormGroup<ListTargetsFilterFormProperties>({
			Name: new FormControl<ListTargetsFilterName | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ListTargetsFilterName { TARGET_TYPE = 0, TARGET_ADDRESS = 1, TARGET_STATUS = 2 }

	export interface SubscribeResult {
		Arn?: string;
	}
	export interface SubscribeResultFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeResultFormGroup() {
		return new FormGroup<SubscribeResultFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceResult {
		Tags?: Tags;
	}
	export interface TagResourceResultFormProperties {
	}
	export function CreateTagResourceResultFormGroup() {
		return new FormGroup<TagResourceResultFormProperties>({
		});

	}

	export interface UnsubscribeResult {

		/** Required */
		Arn: string;
	}
	export interface UnsubscribeResultFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeResultFormGroup() {
		return new FormGroup<UnsubscribeResultFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResult {
	}
	export interface UntagResourceResultFormProperties {
	}
	export function CreateUntagResourceResultFormGroup() {
		return new FormGroup<UntagResourceResultFormProperties>({
		});

	}

	export interface UpdateNotificationRuleResult {
	}
	export interface UpdateNotificationRuleResultFormProperties {
	}
	export function CreateUpdateNotificationRuleResultFormGroup() {
		return new FormGroup<UpdateNotificationRuleResultFormProperties>({
		});

	}

	export interface CreateNotificationRuleRequest {

		/** Required */
		Name: string;

		/** Required */
		EventTypeIds: Array<string>;

		/** Required */
		Resource: string;

		/** Required */
		Targets: Array<Target>;

		/** Required */
		DetailType: DetailType;
		ClientRequestToken?: string;
		Tags?: Tags;
		Status?: NotificationRuleStatus;
	}
	export interface CreateNotificationRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Resource: FormControl<string | null | undefined>,

		/** Required */
		DetailType: FormControl<DetailType | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		Status: FormControl<NotificationRuleStatus | null | undefined>,
	}
	export function CreateCreateNotificationRuleRequestFormGroup() {
		return new FormGroup<CreateNotificationRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DetailType: new FormControl<DetailType | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NotificationRuleStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteNotificationRuleRequest {

		/** Required */
		Arn: string;
	}
	export interface DeleteNotificationRuleRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNotificationRuleRequestFormGroup() {
		return new FormGroup<DeleteNotificationRuleRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTargetRequest {

		/** Required */
		TargetAddress: string;
		ForceUnsubscribeAll?: boolean | null;
	}
	export interface DeleteTargetRequestFormProperties {

		/** Required */
		TargetAddress: FormControl<string | null | undefined>,
		ForceUnsubscribeAll: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteTargetRequestFormGroup() {
		return new FormGroup<DeleteTargetRequestFormProperties>({
			TargetAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceUnsubscribeAll: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeNotificationRuleRequest {

		/** Required */
		Arn: string;
	}
	export interface DescribeNotificationRuleRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationRuleRequestFormGroup() {
		return new FormGroup<DescribeNotificationRuleRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEventTypesRequest {
		Filters?: Array<ListEventTypesFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEventTypesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEventTypesRequestFormGroup() {
		return new FormGroup<ListEventTypesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListNotificationRulesRequest {
		Filters?: Array<ListNotificationRulesFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListNotificationRulesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListNotificationRulesRequestFormGroup() {
		return new FormGroup<ListNotificationRulesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		Arn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTargetsRequest {
		Filters?: Array<ListTargetsFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTargetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTargetsRequestFormGroup() {
		return new FormGroup<ListTargetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SubscribeRequest {

		/** Required */
		Arn: string;

		/**
		 * Information about the Chatbot topics or Chatbot clients associated with a notification rule.
		 * Required
		 */
		Target: Target;
		ClientRequestToken?: string;
	}
	export interface SubscribeRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeRequestFormGroup() {
		return new FormGroup<SubscribeRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Arn: string;

		/** Required */
		Tags: Tags;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnsubscribeRequest {

		/** Required */
		Arn: string;

		/** Required */
		TargetAddress: string;
	}
	export interface UnsubscribeRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		TargetAddress: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeRequestFormGroup() {
		return new FormGroup<UnsubscribeRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateNotificationRuleRequest {

		/** Required */
		Arn: string;
		Name?: string;
		Status?: NotificationRuleStatus;
		EventTypeIds?: Array<string>;
		Targets?: Array<Target>;
		DetailType?: DetailType;
	}
	export interface UpdateNotificationRuleRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<NotificationRuleStatus | null | undefined>,
		DetailType: FormControl<DetailType | null | undefined>,
	}
	export function CreateUpdateNotificationRuleRequestFormGroup() {
		return new FormGroup<UpdateNotificationRuleRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NotificationRuleStatus | null | undefined>(undefined),
			DetailType: new FormControl<DetailType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.
		 * Post createNotificationRule
		 * @return {CreateNotificationRuleResult} Success
		 */
		CreateNotificationRule(requestBody: CreateNotificationRulePostBody): Observable<CreateNotificationRuleResult> {
			return this.http.post<CreateNotificationRuleResult>(this.baseUri + 'createNotificationRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a notification rule for a resource.
		 * Post deleteNotificationRule
		 * @return {DeleteNotificationRuleResult} Success
		 */
		DeleteNotificationRule(requestBody: DeleteNotificationRulePostBody): Observable<DeleteNotificationRuleResult> {
			return this.http.post<DeleteNotificationRuleResult>(this.baseUri + 'deleteNotificationRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified target for notifications.
		 * Post deleteTarget
		 * @return {DeleteTargetResult} Success
		 */
		DeleteTarget(requestBody: DeleteTargetPostBody): Observable<DeleteTargetResult> {
			return this.http.post<DeleteTargetResult>(this.baseUri + 'deleteTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specified notification rule.
		 * Post describeNotificationRule
		 * @return {DescribeNotificationRuleResult} Success
		 */
		DescribeNotificationRule(requestBody: DescribeNotificationRulePostBody): Observable<DescribeNotificationRuleResult> {
			return this.http.post<DescribeNotificationRuleResult>(this.baseUri + 'describeNotificationRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the event types available for configuring notifications.
		 * Post listEventTypes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEventTypesResult} Success
		 */
		ListEventTypes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEventTypesPostBody): Observable<ListEventTypesResult> {
			return this.http.post<ListEventTypesResult>(this.baseUri + 'listEventTypes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the notification rules for an Amazon Web Services account.
		 * Post listNotificationRules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNotificationRulesResult} Success
		 */
		ListNotificationRules(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListNotificationRulesPostBody): Observable<ListNotificationRulesResult> {
			return this.http.post<ListNotificationRulesResult>(this.baseUri + 'listNotificationRules?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the tags associated with a notification rule.
		 * Post listTagsForResource
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourcePostBody): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + 'listTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the notification rule targets for an Amazon Web Services account.
		 * Post listTargets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTargetsResult} Success
		 */
		ListTargets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTargetsPostBody): Observable<ListTargetsResult> {
			return this.http.post<ListTargetsResult>(this.baseUri + 'listTargets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.
		 * Post subscribe
		 * @return {SubscribeResult} Success
		 */
		Subscribe(requestBody: SubscribePostBody): Observable<SubscribeResult> {
			return this.http.post<SubscribeResult>(this.baseUri + 'subscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a set of provided tags with a notification rule.
		 * Post tagResource
		 * @return {TagResourceResult} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + 'tagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
		 * Post unsubscribe
		 * @return {UnsubscribeResult} Success
		 */
		Unsubscribe(requestBody: UnsubscribePostBody): Observable<UnsubscribeResult> {
			return this.http.post<UnsubscribeResult>(this.baseUri + 'unsubscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the association between one or more provided tags and a notification rule.
		 * Post untagResource/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the notification rule from which to remove the tags.
		 * @param {Array<string>} tagKeys The key names of the tags to remove.
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResult> {
			return this.http.post<UntagResourceResult>(this.baseUri + 'untagResource/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), null, {});
		}

		/**
		 * <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>
		 * Post updateNotificationRule
		 * @return {UpdateNotificationRuleResult} Success
		 */
		UpdateNotificationRule(requestBody: UpdateNotificationRulePostBody): Observable<UpdateNotificationRuleResult> {
			return this.http.post<UpdateNotificationRuleResult>(this.baseUri + 'updateNotificationRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateNotificationRulePostBody {

		/**
		 * The name for the notification rule. Notification rule names must be unique in your Amazon Web Services account.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * A list of event types associated with this notification rule. For a list of allowed events, see <a>EventTypeSummary</a>.
		 * Required
		 */
		EventTypeIds: Array<string>;

		/**
		 * The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in CodePipeline, repositories in CodeCommit, and build projects in CodeBuild.
		 * Required
		 */
		Resource: string;

		/**
		 * A list of Amazon Resource Names (ARNs) of Amazon Simple Notification Service topics and Chatbot clients to associate with the notification rule.
		 * Required
		 * Maximum items: 10
		 */
		Targets: Array<Target>;

		/**
		 * The level of detail to include in the notifications for this resource. <code>BASIC</code> will include only the contents of the event as it would appear in Amazon CloudWatch. <code>FULL</code> will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
		 * Required
		 */
		DetailType: DetailType;

		/**
		 * <p>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request with the same parameters is received and a token is included, the request returns information about the initial request that used that token.</p> <note> <p>The Amazon Web Services SDKs prepopulate client request tokens. If you are using an Amazon Web Services SDK, an idempotency token is created for you.</p> </note>
		 * Max length: 256
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;

		/** A list of tags to apply to this notification rule. Key names cannot start with "<code>aws</code>". */
		Tags?: {[id: string]: string };

		/** The status of the notification rule. The default value is <code>ENABLED</code>. If the status is set to <code>DISABLED</code>, notifications aren't sent for the notification rule. */
		Status?: NotificationRuleStatus | null;
	}
	export interface CreateNotificationRulePostBodyFormProperties {

		/**
		 * The name for the notification rule. Notification rule names must be unique in your Amazon Web Services account.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in CodePipeline, repositories in CodeCommit, and build projects in CodeBuild.
		 * Required
		 */
		Resource: FormControl<string | null | undefined>,

		/**
		 * The level of detail to include in the notifications for this resource. <code>BASIC</code> will include only the contents of the event as it would appear in Amazon CloudWatch. <code>FULL</code> will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
		 * Required
		 */
		DetailType: FormControl<DetailType | null | undefined>,

		/**
		 * <p>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request with the same parameters is received and a token is included, the request returns information about the initial request that used that token.</p> <note> <p>The Amazon Web Services SDKs prepopulate client request tokens. If you are using an Amazon Web Services SDK, an idempotency token is created for you.</p> </note>
		 * Max length: 256
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** A list of tags to apply to this notification rule. Key names cannot start with "<code>aws</code>". */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The status of the notification rule. The default value is <code>ENABLED</code>. If the status is set to <code>DISABLED</code>, notifications aren't sent for the notification rule. */
		Status: FormControl<NotificationRuleStatus | null | undefined>,
	}
	export function CreateCreateNotificationRulePostBodyFormGroup() {
		return new FormGroup<CreateNotificationRulePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9\-_ ]+$')]),
			Resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:\s]*:[^:\s]*:[^:\s]*:[0-9]{12}:[^\s]+$')]),
			DetailType: new FormControl<DetailType | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w:/-]+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Status: new FormControl<NotificationRuleStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteNotificationRulePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule you want to delete.
		 * Required
		 */
		Arn: string;
	}
	export interface DeleteNotificationRulePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule you want to delete.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNotificationRulePostBodyFormGroup() {
		return new FormGroup<DeleteNotificationRulePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$')]),
		});

	}

	export interface DeleteTargetPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client to delete.
		 * Required
		 * Max length: 320
		 * Min length: 1
		 */
		TargetAddress: string;

		/** A Boolean value that can be used to delete all associations with this Chatbot topic. The default value is FALSE. If set to TRUE, all associations between that target and every notification rule in your Amazon Web Services account are deleted. */
		ForceUnsubscribeAll?: boolean | null;
	}
	export interface DeleteTargetPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client to delete.
		 * Required
		 * Max length: 320
		 * Min length: 1
		 */
		TargetAddress: FormControl<string | null | undefined>,

		/** A Boolean value that can be used to delete all associations with this Chatbot topic. The default value is FALSE. If set to TRUE, all associations between that target and every notification rule in your Amazon Web Services account are deleted. */
		ForceUnsubscribeAll: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteTargetPostBodyFormGroup() {
		return new FormGroup<DeleteTargetPostBodyFormProperties>({
			TargetAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(320)]),
			ForceUnsubscribeAll: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeNotificationRulePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 */
		Arn: string;
	}
	export interface DescribeNotificationRulePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationRulePostBodyFormGroup() {
		return new FormGroup<DescribeNotificationRulePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$')]),
		});

	}

	export interface ListEventTypesPostBody {

		/** The filters to use to return information by service or resource type. */
		Filters?: Array<ListEventTypesFilter>;

		/** An enumeration token that, when provided in a request, returns the next batch of the results. */
		NextToken?: string | null;

		/**
		 * A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListEventTypesPostBodyFormProperties {

		/** An enumeration token that, when provided in a request, returns the next batch of the results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEventTypesPostBodyFormGroup() {
		return new FormGroup<ListEventTypesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\w/+=]+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListNotificationRulesPostBody {

		/** <p>The filters to use to return information by service or resource type. For valid values, see <a>ListNotificationRulesFilter</a>.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note> */
		Filters?: Array<ListNotificationRulesFilter>;

		/** An enumeration token that, when provided in a request, returns the next batch of the results. */
		NextToken?: string | null;

		/**
		 * A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListNotificationRulesPostBodyFormProperties {

		/** An enumeration token that, when provided in a request, returns the next batch of the results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListNotificationRulesPostBodyFormGroup() {
		return new FormGroup<ListNotificationRulesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\w/+=]+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListTagsForResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) for the notification rule.
		 * Required
		 */
		Arn: string;
	}
	export interface ListTagsForResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for the notification rule.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourcePostBodyFormGroup() {
		return new FormGroup<ListTagsForResourcePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$')]),
		});

	}

	export interface ListTargetsPostBody {

		/** <p>The filters to use to return information by service or resource type. Valid filters include target type, target address, and target status.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note> */
		Filters?: Array<ListTargetsFilter>;

		/** An enumeration token that, when provided in a request, returns the next batch of the results. */
		NextToken?: string | null;

		/**
		 * A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListTargetsPostBodyFormProperties {

		/** An enumeration token that, when provided in a request, returns the next batch of the results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTargetsPostBodyFormGroup() {
		return new FormGroup<ListTargetsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\w/+=]+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface SubscribePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.
		 * Required
		 */
		Arn: string;

		/**
		 * Information about the Chatbot topics or Chatbot clients associated with a notification rule.
		 * Required
		 */
		Target: SubscribePostBodyTarget;

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Max length: 256
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface SubscribePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Max length: 256
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateSubscribePostBodyFormGroup() {
		return new FormGroup<SubscribePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w:/-]+$')]),
		});

	}

	export interface SubscribePostBodyTarget {
		TargetType?: string;
		TargetAddress?: string;
	}
	export interface SubscribePostBodyTargetFormProperties {
		TargetType: FormControl<string | null | undefined>,
		TargetAddress: FormControl<string | null | undefined>,
	}
	export function CreateSubscribePostBodyTargetFormGroup() {
		return new FormGroup<SubscribePostBodyTargetFormProperties>({
			TargetType: new FormControl<string | null | undefined>(undefined),
			TargetAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule to tag.
		 * Required
		 */
		Arn: string;

		/**
		 * The list of tags to associate with the resource. Tag key names cannot start with "<code>aws</code>".
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule to tag.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The list of tags to associate with the resource. Tag key names cannot start with "<code>aws</code>".
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnsubscribePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 */
		Arn: string;

		/**
		 * The ARN of the Chatbot topic to unsubscribe from the notification rule.
		 * Required
		 * Max length: 320
		 * Min length: 1
		 */
		TargetAddress: string;
	}
	export interface UnsubscribePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The ARN of the Chatbot topic to unsubscribe from the notification rule.
		 * Required
		 * Max length: 320
		 * Min length: 1
		 */
		TargetAddress: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribePostBodyFormGroup() {
		return new FormGroup<UnsubscribePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$')]),
			TargetAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(320)]),
		});

	}

	export interface UpdateNotificationRulePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 */
		Arn: string;

		/**
		 * The name of the notification rule.
		 * Max length: 64
		 * Min length: 1
		 */
		Name?: string | null;

		/** The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications). */
		Status?: NotificationRuleStatus | null;

		/** A list of event types associated with this notification rule. For a complete list of event types and IDs, see <a href="https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api">Notification concepts</a> in the <i>Developer Tools Console User Guide</i>. */
		EventTypeIds?: Array<string>;

		/**
		 * The address and type of the targets to receive notifications from this notification rule.
		 * Maximum items: 10
		 */
		Targets?: Array<Target>;

		/** The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created. */
		DetailType?: DetailType | null;
	}
	export interface UpdateNotificationRulePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The name of the notification rule.
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications). */
		Status: FormControl<NotificationRuleStatus | null | undefined>,

		/** The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created. */
		DetailType: FormControl<DetailType | null | undefined>,
	}
	export function CreateUpdateNotificationRulePostBodyFormGroup() {
		return new FormGroup<UpdateNotificationRulePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9\-_ ]+$')]),
			Status: new FormControl<NotificationRuleStatus | null | undefined>(undefined),
			DetailType: new FormControl<DetailType | null | undefined>(undefined),
		});

	}

}

