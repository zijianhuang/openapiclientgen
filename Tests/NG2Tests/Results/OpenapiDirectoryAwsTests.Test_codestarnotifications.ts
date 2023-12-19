import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateNotificationRuleResult {
		Arn?: string | null;
	}
	export interface CreateNotificationRuleResultFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateNotificationRuleResultFormGroup() {
		return new FormGroup<CreateNotificationRuleResultFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the SNS topics associated with a notification rule. */
	export interface Target {
		TargetType?: string | null;
		TargetAddress?: string | null;
	}

	/** Information about the SNS topics associated with a notification rule. */
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
		Arn?: string | null;
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
		Arn: string;
		Name?: string | null;
		EventTypes?: Array<EventTypeSummary>;
		Resource?: string | null;
		Targets?: Array<TargetSummary>;
		DetailType?: DescribeNotificationRuleResultDetailType | null;
		CreatedBy?: string | null;
		Status?: DescribeNotificationRuleResultStatus | null;
		CreatedTimestamp?: Date | null;
		LastModifiedTimestamp?: Date | null;
		Tags?: Tags;
	}
	export interface DescribeNotificationRuleResultFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Resource: FormControl<string | null | undefined>,
		DetailType: FormControl<DescribeNotificationRuleResultDetailType | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		Status: FormControl<DescribeNotificationRuleResultStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeNotificationRuleResultFormGroup() {
		return new FormGroup<DescribeNotificationRuleResultFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Resource: new FormControl<string | null | undefined>(undefined),
			DetailType: new FormControl<DescribeNotificationRuleResultDetailType | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DescribeNotificationRuleResultStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Returns information about an event that has triggered a notification rule. */
	export interface EventTypeSummary {
		EventTypeId?: string | null;
		ServiceName?: string | null;
		EventTypeName?: string | null;
		ResourceType?: string | null;
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
		TargetAddress?: string | null;
		TargetType?: string | null;
		TargetStatus?: TargetSummaryTargetStatus | null;
	}

	/** Information about the targets specified for a notification rule. */
	export interface TargetSummaryFormProperties {
		TargetAddress: FormControl<string | null | undefined>,
		TargetType: FormControl<string | null | undefined>,
		TargetStatus: FormControl<TargetSummaryTargetStatus | null | undefined>,
	}
	export function CreateTargetSummaryFormGroup() {
		return new FormGroup<TargetSummaryFormProperties>({
			TargetAddress: new FormControl<string | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined),
			TargetStatus: new FormControl<TargetSummaryTargetStatus | null | undefined>(undefined),
		});

	}

	export enum TargetSummaryTargetStatus { PENDING = 0, ACTIVE = 1, UNREACHABLE = 2, INACTIVE = 3, DEACTIVATED = 4 }

	export enum DescribeNotificationRuleResultDetailType { BASIC = 0, FULL = 1 }

	export enum DescribeNotificationRuleResultStatus { ENABLED = 0, DISABLED = 1 }

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
		NextToken?: string | null;
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
		Name: ListEventTypesFilterName;
		Value: string;
	}

	/** Information about a filter to apply to the list of returned event types. You can filter by resource type or service name. */
	export interface ListEventTypesFilterFormProperties {
		Name: FormControl<ListEventTypesFilterName | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateListEventTypesFilterFormGroup() {
		return new FormGroup<ListEventTypesFilterFormProperties>({
			Name: new FormControl<ListEventTypesFilterName | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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
		NextToken?: string | null;
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
		Id?: string | null;
		Arn?: string | null;
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
		Name: ListNotificationRulesFilterName;
		Value: string;
	}

	/** Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target. */
	export interface ListNotificationRulesFilterFormProperties {
		Name: FormControl<ListNotificationRulesFilterName | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateListNotificationRulesFilterFormGroup() {
		return new FormGroup<ListNotificationRulesFilterFormProperties>({
			Name: new FormControl<ListNotificationRulesFilterName | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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
		NextToken?: string | null;
	}
	export interface ListTargetsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsResultFormGroup() {
		return new FormGroup<ListTargetsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Amazon SNS topics as targets, you could specify a ListTargetsFilter Name as TargetType and a Value of SNS, and a Name of TARGET_STATUS and a Value of ACTIVE. */
	export interface ListTargetsFilter {
		Name: ListTargetsFilterName;
		Value: string;
	}

	/** Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Amazon SNS topics as targets, you could specify a ListTargetsFilter Name as TargetType and a Value of SNS, and a Name of TARGET_STATUS and a Value of ACTIVE. */
	export interface ListTargetsFilterFormProperties {
		Name: FormControl<ListTargetsFilterName | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsFilterFormGroup() {
		return new FormGroup<ListTargetsFilterFormProperties>({
			Name: new FormControl<ListTargetsFilterName | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListTargetsFilterName { TARGET_TYPE = 0, TARGET_ADDRESS = 1, TARGET_STATUS = 2 }

	export interface SubscribeResult {
		Arn?: string | null;
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
		Arn: string;
	}
	export interface UnsubscribeResultFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeResultFormGroup() {
		return new FormGroup<UnsubscribeResultFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
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

	export enum DetailType { BASIC = 0, FULL = 1 }

	export enum NotificationRuleStatus { ENABLED = 0, DISABLED = 1 }

	export interface CreateNotificationRuleRequest {
		Name: string;
		EventTypeIds: Array<string>;
		Resource: string;
		Targets: Array<Target>;
		DetailType: DescribeNotificationRuleResultDetailType;
		ClientRequestToken?: string | null;
		Tags?: Tags;
		Status?: DescribeNotificationRuleResultStatus | null;
	}
	export interface CreateNotificationRuleRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Resource: FormControl<string | null | undefined>,
		DetailType: FormControl<DescribeNotificationRuleResultDetailType | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		Status: FormControl<DescribeNotificationRuleResultStatus | null | undefined>,
	}
	export function CreateCreateNotificationRuleRequestFormGroup() {
		return new FormGroup<CreateNotificationRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Resource: new FormControl<string | null | undefined>(undefined),
			DetailType: new FormControl<DescribeNotificationRuleResultDetailType | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DescribeNotificationRuleResultStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteNotificationRuleRequest {
		Arn: string;
	}
	export interface DeleteNotificationRuleRequestFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNotificationRuleRequestFormGroup() {
		return new FormGroup<DeleteNotificationRuleRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteTargetRequest {
		TargetAddress: string;
		ForceUnsubscribeAll?: boolean | null;
	}
	export interface DeleteTargetRequestFormProperties {
		TargetAddress: FormControl<string | null | undefined>,
		ForceUnsubscribeAll: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteTargetRequestFormGroup() {
		return new FormGroup<DeleteTargetRequestFormProperties>({
			TargetAddress: new FormControl<string | null | undefined>(undefined),
			ForceUnsubscribeAll: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeNotificationRuleRequest {
		Arn: string;
	}
	export interface DescribeNotificationRuleRequestFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationRuleRequestFormGroup() {
		return new FormGroup<DescribeNotificationRuleRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventTypesRequest {
		Filters?: Array<ListEventTypesFilter>;
		NextToken?: string | null;
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
		NextToken?: string | null;
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
		Arn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTargetsRequest {
		Filters?: Array<ListTargetsFilter>;
		NextToken?: string | null;
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
		Arn: string;

		/**
		 * Information about the SNS topics associated with a notification rule.
		 * Required
		 */
		Target: Target;
		ClientRequestToken?: string | null;
	}
	export interface SubscribeRequestFormProperties {
		Arn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeRequestFormGroup() {
		return new FormGroup<SubscribeRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {
		Arn: string;
		Tags: Tags;
	}
	export interface TagResourceRequestFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TargetStatus { PENDING = 0, ACTIVE = 1, UNREACHABLE = 2, INACTIVE = 3, DEACTIVATED = 4 }

	export interface UnsubscribeRequest {
		Arn: string;
		TargetAddress: string;
	}
	export interface UnsubscribeRequestFormProperties {
		Arn: FormControl<string | null | undefined>,
		TargetAddress: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeRequestFormGroup() {
		return new FormGroup<UnsubscribeRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			TargetAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceRequest {
		Arn: string;
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNotificationRuleRequest {
		Arn: string;
		Name?: string | null;
		Status?: DescribeNotificationRuleResultStatus | null;
		EventTypeIds?: Array<string>;
		Targets?: Array<Target>;
		DetailType?: DescribeNotificationRuleResultDetailType | null;
	}
	export interface UpdateNotificationRuleRequestFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<DescribeNotificationRuleResultStatus | null | undefined>,
		DetailType: FormControl<DescribeNotificationRuleResultDetailType | null | undefined>,
	}
	export function CreateUpdateNotificationRuleRequestFormGroup() {
		return new FormGroup<UpdateNotificationRuleRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DescribeNotificationRuleResultStatus | null | undefined>(undefined),
			DetailType: new FormControl<DescribeNotificationRuleResultDetailType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as SNS topics) where you want to receive them.
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
		 * Returns a list of the notification rules for an AWS account.
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
		 * Returns a list of the notification rule targets for an AWS account.
		 * Post listTargets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTargetsResult} Success
		 */
		ListTargets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTargetsPostBody): Observable<ListTargetsResult> {
			return this.http.post<ListTargetsResult>(this.baseUri + 'listTargets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an association between a notification rule and an SNS topic so that the associated target can receive notifications when the events described in the rule are triggered.
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
		 * Removes an association between a notification rule and an Amazon SNS topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
		 * Post unsubscribe
		 * @return {UnsubscribeResult} Success
		 */
		Unsubscribe(requestBody: UnsubscribePostBody): Observable<UnsubscribeResult> {
			return this.http.post<UnsubscribeResult>(this.baseUri + 'unsubscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the association between one or more provided tags and a notification rule.
		 * Post untagResource
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResult> {
			return this.http.post<UntagResourceResult>(this.baseUri + 'untagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * The name for the notification rule. Notifictaion rule names must be unique in your AWS account.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [A-Za-z0-9\-_ ]+$
		 */
		Name: string;

		/**
		 * A list of event types associated with this notification rule. For a list of allowed events, see <a>EventTypeSummary</a>.
		 * Required
		 */
		EventTypeIds: Array<string>;

		/**
		 * The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in AWS CodePipeline, repositories in AWS CodeCommit, and build projects in AWS CodeBuild.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:[^:\s]*:[^:\s]*:[0-9]{12}:[^\s]+$
		 */
		Resource: string;

		/**
		 * A list of Amazon Resource Names (ARNs) of SNS topics to associate with the notification rule.
		 * Required
		 * Maximum items: 10
		 */
		Targets: Array<Target>;

		/**
		 * The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
		 * Required
		 */
		DetailType: DescribeNotificationRuleResultDetailType;

		/**
		 * <p>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request with the same parameters is received and a token is included, the request returns information about the initial request that used that token.</p> <note> <p>The AWS SDKs prepopulate client request tokens. If you are using an AWS SDK, an idempotency token is created for you.</p> </note>
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^[\w:/-]+$
		 */
		ClientRequestToken?: string | null;

		/** A list of tags to apply to this notification rule. Key names cannot start with "aws". */
		Tags?: {[id: string]: string };

		/** The status of the notification rule. The default value is ENABLED. If the status is set to DISABLED, notifications aren't sent for the notification rule. */
		Status?: DescribeNotificationRuleResultStatus | null;
	}
	export interface CreateNotificationRulePostBodyFormProperties {

		/**
		 * The name for the notification rule. Notifictaion rule names must be unique in your AWS account.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [A-Za-z0-9\-_ ]+$
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in AWS CodePipeline, repositories in AWS CodeCommit, and build projects in AWS CodeBuild.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:[^:\s]*:[^:\s]*:[0-9]{12}:[^\s]+$
		 */
		Resource: FormControl<string | null | undefined>,

		/**
		 * The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
		 * Required
		 */
		DetailType: FormControl<DescribeNotificationRuleResultDetailType | null | undefined>,

		/**
		 * <p>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request with the same parameters is received and a token is included, the request returns information about the initial request that used that token.</p> <note> <p>The AWS SDKs prepopulate client request tokens. If you are using an AWS SDK, an idempotency token is created for you.</p> </note>
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^[\w:/-]+$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** A list of tags to apply to this notification rule. Key names cannot start with "aws". */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The status of the notification rule. The default value is ENABLED. If the status is set to DISABLED, notifications aren't sent for the notification rule. */
		Status: FormControl<DescribeNotificationRuleResultStatus | null | undefined>,
	}
	export function CreateCreateNotificationRulePostBodyFormGroup() {
		return new FormGroup<CreateNotificationRulePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Resource: new FormControl<string | null | undefined>(undefined),
			DetailType: new FormControl<DescribeNotificationRuleResultDetailType | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Status: new FormControl<DescribeNotificationRuleResultStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteNotificationRulePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule you want to delete.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;
	}
	export interface DeleteNotificationRulePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule you want to delete.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNotificationRulePostBodyFormGroup() {
		return new FormGroup<DeleteNotificationRulePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteTargetPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the SNS topic to delete.
		 * Required
		 * Max length: 320
		 * Min length: 1
		 */
		TargetAddress: string;

		/** A Boolean value that can be used to delete all associations with this SNS topic. The default value is FALSE. If set to TRUE, all associations between that target and every notification rule in your AWS account are deleted. */
		ForceUnsubscribeAll?: boolean | null;
	}
	export interface DeleteTargetPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the SNS topic to delete.
		 * Required
		 * Max length: 320
		 * Min length: 1
		 */
		TargetAddress: FormControl<string | null | undefined>,

		/** A Boolean value that can be used to delete all associations with this SNS topic. The default value is FALSE. If set to TRUE, all associations between that target and every notification rule in your AWS account are deleted. */
		ForceUnsubscribeAll: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteTargetPostBodyFormGroup() {
		return new FormGroup<DeleteTargetPostBodyFormProperties>({
			TargetAddress: new FormControl<string | null | undefined>(undefined),
			ForceUnsubscribeAll: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeNotificationRulePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;
	}
	export interface DescribeNotificationRulePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationRulePostBodyFormGroup() {
		return new FormGroup<DescribeNotificationRulePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventTypesPostBody {

		/** The filters to use to return information by service or resource type. */
		Filters?: Array<ListEventTypesFilter>;

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Pattern: ^[\w/+=]+$
		 */
		NextToken?: string | null;

		/**
		 * A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListEventTypesPostBodyFormProperties {

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Pattern: ^[\w/+=]+$
		 */
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
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListNotificationRulesPostBody {

		/** <p>The filters to use to return information by service or resource type. For valid values, see <a>ListNotificationRulesFilter</a>.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note> */
		Filters?: Array<ListNotificationRulesFilter>;

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Pattern: ^[\w/+=]+$
		 */
		NextToken?: string | null;

		/**
		 * A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListNotificationRulesPostBodyFormProperties {

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Pattern: ^[\w/+=]+$
		 */
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
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) for the notification rule.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;
	}
	export interface ListTagsForResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) for the notification rule.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourcePostBodyFormGroup() {
		return new FormGroup<ListTagsForResourcePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTargetsPostBody {

		/** <p>The filters to use to return information by service or resource type. Valid filters include target type, target address, and target status.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note> */
		Filters?: Array<ListTargetsFilter>;

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Pattern: ^[\w/+=]+$
		 */
		NextToken?: string | null;

		/**
		 * A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListTargetsPostBodyFormProperties {

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Pattern: ^[\w/+=]+$
		 */
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
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SubscribePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;

		/**
		 * Information about the SNS topics associated with a notification rule.
		 * Required
		 */
		Target: SubscribePostBodyTarget;

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^[\w:/-]+$
		 */
		ClientRequestToken?: string | null;
	}
	export interface SubscribePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: ^[\w:/-]+$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateSubscribePostBodyFormGroup() {
		return new FormGroup<SubscribePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscribePostBodyTarget {
		TargetType?: string | null;
		TargetAddress?: string | null;
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
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;

		/**
		 * The list of tags to associate with the resource. Tag key names cannot start with "aws".
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule to tag.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The list of tags to associate with the resource. Tag key names cannot start with "aws".
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UnsubscribePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;

		/**
		 * The ARN of the SNS topic to unsubscribe from the notification rule.
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
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The ARN of the SNS topic to unsubscribe from the notification rule.
		 * Required
		 * Max length: 320
		 * Min length: 1
		 */
		TargetAddress: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribePostBodyFormGroup() {
		return new FormGroup<UnsubscribePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			TargetAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule from which to remove the tags.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;

		/**
		 * The key names of the tags to remove.
		 * Required
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule from which to remove the tags.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNotificationRulePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;

		/**
		 * The name of the notification rule.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [A-Za-z0-9\-_ ]+$
		 */
		Name?: string | null;

		/** The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications). */
		Status?: DescribeNotificationRuleResultStatus | null;

		/** A list of event types associated with this notification rule. */
		EventTypeIds?: Array<string>;

		/**
		 * The address and type of the targets to receive notifications from this notification rule.
		 * Maximum items: 10
		 */
		Targets?: Array<Target>;

		/** The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created. */
		DetailType?: DescribeNotificationRuleResultDetailType | null;
	}
	export interface UpdateNotificationRulePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The name of the notification rule.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [A-Za-z0-9\-_ ]+$
		 */
		Name: FormControl<string | null | undefined>,

		/** The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications). */
		Status: FormControl<DescribeNotificationRuleResultStatus | null | undefined>,

		/** The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created. */
		DetailType: FormControl<DescribeNotificationRuleResultDetailType | null | undefined>,
	}
	export function CreateUpdateNotificationRulePostBodyFormGroup() {
		return new FormGroup<UpdateNotificationRulePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DescribeNotificationRuleResultStatus | null | undefined>(undefined),
			DetailType: new FormControl<DescribeNotificationRuleResultDetailType | null | undefined>(undefined),
		});

	}

}

