import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateNotificationRuleResult {
		Arn?: string;
	}


	/** Information about the SNS topics associated with a notification rule. */
	export interface Target {
		TargetType?: string;
		TargetAddress?: string;
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface ValidationException {
	}

	export interface LimitExceededException {
	}

	export interface ConfigurationException {
	}

	export interface ConcurrentModificationException {
	}

	export interface AccessDeniedException {
	}

	export interface DeleteNotificationRuleResult {
		Arn?: string;
	}

	export interface DeleteTargetResult {
	}

	export interface DescribeNotificationRuleResult {
		Arn: string;
		Name?: string;
		EventTypes?: Array<EventTypeSummary>;
		Resource?: string;
		Targets?: Array<TargetSummary>;
		DetailType?: DescribeNotificationRuleResultDetailType;
		CreatedBy?: string;
		Status?: DescribeNotificationRuleResultStatus;
		CreatedTimestamp?: Date;
		LastModifiedTimestamp?: Date;
		Tags?: Tags;
	}


	/** Returns information about an event that has triggered a notification rule. */
	export interface EventTypeSummary {
		EventTypeId?: string;
		ServiceName?: string;
		EventTypeName?: string;
		ResourceType?: string;
	}


	/** Information about the targets specified for a notification rule. */
	export interface TargetSummary {
		TargetAddress?: string;
		TargetType?: string;
		TargetStatus?: TargetSummaryTargetStatus;
	}

	export enum TargetSummaryTargetStatus { PENDING = 0, ACTIVE = 1, UNREACHABLE = 2, INACTIVE = 3, DEACTIVATED = 4 }

	export enum DescribeNotificationRuleResultDetailType { BASIC = 0, FULL = 1 }

	export enum DescribeNotificationRuleResultStatus { ENABLED = 0, DISABLED = 1 }

	export interface Tags {
	}

	export interface ResourceNotFoundException {
	}

	export interface ListEventTypesResult {
		EventTypes?: Array<EventTypeSummary>;
		NextToken?: string;
	}


	/** Information about a filter to apply to the list of returned event types. You can filter by resource type or service name. */
	export interface ListEventTypesFilter {
		Name: ListEventTypesFilterName;
		Value: string;
	}

	export enum ListEventTypesFilterName { RESOURCE_TYPE = 0, SERVICE_NAME = 1 }

	export interface InvalidNextTokenException {
	}

	export interface ListNotificationRulesResult {
		NextToken?: string;
		NotificationRules?: Array<NotificationRuleSummary>;
	}


	/** Information about a specified notification rule. */
	export interface NotificationRuleSummary {
		Id?: string;
		Arn?: string;
	}


	/** Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target. */
	export interface ListNotificationRulesFilter {
		Name: ListNotificationRulesFilterName;
		Value: string;
	}

	export enum ListNotificationRulesFilterName { EVENT_TYPE_ID = 0, CREATED_BY = 1, RESOURCE = 2, TARGET_ADDRESS = 3 }

	export interface ListTagsForResourceResult {
		Tags?: Tags;
	}

	export interface ListTargetsResult {
		Targets?: Array<TargetSummary>;
		NextToken?: string;
	}


	/** Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Amazon SNS topics as targets, you could specify a ListTargetsFilter Name as TargetType and a Value of SNS, and a Name of TARGET_STATUS and a Value of ACTIVE. */
	export interface ListTargetsFilter {
		Name: ListTargetsFilterName;
		Value: string;
	}

	export enum ListTargetsFilterName { TARGET_TYPE = 0, TARGET_ADDRESS = 1, TARGET_STATUS = 2 }

	export interface SubscribeResult {
		Arn?: string;
	}

	export interface TagResourceResult {
		Tags?: Tags;
	}

	export interface UnsubscribeResult {
		Arn: string;
	}

	export interface UntagResourceResult {
	}

	export interface UpdateNotificationRuleResult {
	}

	export enum DetailType { BASIC = 0, FULL = 1 }

	export enum NotificationRuleStatus { ENABLED = 0, DISABLED = 1 }

	export interface CreateNotificationRuleRequest {
		Name: string;
		EventTypeIds: Array<string>;
		Resource: string;
		Targets: Array<Target>;
		DetailType: DescribeNotificationRuleResultDetailType;
		ClientRequestToken?: string;
		Tags?: Tags;
		Status?: DescribeNotificationRuleResultStatus;
	}

	export interface DeleteNotificationRuleRequest {
		Arn: string;
	}

	export interface DeleteTargetRequest {
		TargetAddress: string;
		ForceUnsubscribeAll?: boolean;
	}

	export interface DescribeNotificationRuleRequest {
		Arn: string;
	}

	export interface ListEventTypesRequest {
		Filters?: Array<ListEventTypesFilter>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListNotificationRulesRequest {
		Filters?: Array<ListNotificationRulesFilter>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTagsForResourceRequest {
		Arn: string;
	}

	export interface ListTargetsRequest {
		Filters?: Array<ListTargetsFilter>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface SubscribeRequest {
		Arn: string;

		/**
		 * Information about the SNS topics associated with a notification rule.
		 * Required
		 */
		Target: Target;
		ClientRequestToken?: string;
	}

	export interface TagResourceRequest {
		Arn: string;
		Tags: Tags;
	}

	export enum TargetStatus { PENDING = 0, ACTIVE = 1, UNREACHABLE = 2, INACTIVE = 3, DEACTIVATED = 4 }

	export interface UnsubscribeRequest {
		Arn: string;
		TargetAddress: string;
	}

	export interface UntagResourceRequest {
		Arn: string;
		TagKeys: Array<string>;
	}

	export interface UpdateNotificationRuleRequest {
		Arn: string;
		Name?: string;
		Status?: DescribeNotificationRuleResultStatus;
		EventTypeIds?: Array<string>;
		Targets?: Array<Target>;
		DetailType?: DescribeNotificationRuleResultDetailType;
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
		ListEventTypes(MaxResults: string, NextToken: string, requestBody: ListEventTypesPostBody): Observable<ListEventTypesResult> {
			return this.http.post<ListEventTypesResult>(this.baseUri + 'listEventTypes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the notification rules for an AWS account.
		 * Post listNotificationRules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNotificationRulesResult} Success
		 */
		ListNotificationRules(MaxResults: string, NextToken: string, requestBody: ListNotificationRulesPostBody): Observable<ListNotificationRulesResult> {
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
		ListTargets(MaxResults: string, NextToken: string, requestBody: ListTargetsPostBody): Observable<ListTargetsResult> {
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
		ClientRequestToken?: string;

		/** A list of tags to apply to this notification rule. Key names cannot start with "aws". */
		Tags?: {[id: string]: string };

		/** The status of the notification rule. The default value is ENABLED. If the status is set to DISABLED, notifications aren't sent for the notification rule. */
		Status?: DescribeNotificationRuleResultStatus;
	}

	export interface DeleteNotificationRulePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule you want to delete.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;
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
		ForceUnsubscribeAll?: boolean;
	}

	export interface DescribeNotificationRulePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the notification rule.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;
	}

	export interface ListEventTypesPostBody {

		/** The filters to use to return information by service or resource type. */
		Filters?: Array<ListEventTypesFilter>;

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Pattern: ^[\w/+=]+$
		 */
		NextToken?: string;

		/**
		 * A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;
	}

	export interface ListNotificationRulesPostBody {

		/** <p>The filters to use to return information by service or resource type. For valid values, see <a>ListNotificationRulesFilter</a>.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note> */
		Filters?: Array<ListNotificationRulesFilter>;

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Pattern: ^[\w/+=]+$
		 */
		NextToken?: string;

		/**
		 * A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;
	}

	export interface ListTagsForResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) for the notification rule.
		 * Required
		 * Pattern: ^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$
		 */
		Arn: string;
	}

	export interface ListTargetsPostBody {

		/** <p>The filters to use to return information by service or resource type. Valid filters include target type, target address, and target status.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note> */
		Filters?: Array<ListTargetsFilter>;

		/**
		 * An enumeration token that, when provided in a request, returns the next batch of the results.
		 * Pattern: ^[\w/+=]+$
		 */
		NextToken?: string;

		/**
		 * A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;
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
		ClientRequestToken?: string;
	}

	export interface SubscribePostBodyTarget {
		TargetType?: string;
		TargetAddress?: string;
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
		Name?: string;

		/** The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications). */
		Status?: DescribeNotificationRuleResultStatus;

		/** A list of event types associated with this notification rule. */
		EventTypeIds?: Array<string>;

		/**
		 * The address and type of the targets to receive notifications from this notification rule.
		 * Maximum items: 10
		 */
		Targets?: Array<Target>;

		/** The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created. */
		DetailType?: DescribeNotificationRuleResultDetailType;
	}

}

