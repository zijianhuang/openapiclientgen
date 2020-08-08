import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface AddTagsResponse {
	}


	/** Specifies the tags to add to a trail. */
	export interface AddTagsRequest {
		ResourceId: string;

		/** A list of tags. */
		TagsList?: Array<Tag>;
	}


	/** A custom key-value pair associated with a resource such as a CloudTrail trail. */
	export interface Tag {
		Key: string;
		Value?: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface CloudTrailARNInvalidException {
	}

	export interface ResourceTypeNotSupportedException {
	}

	export interface TagsLimitExceededException {
	}

	export interface InvalidTrailNameException {
	}

	export interface InvalidTagParameterException {
	}

	export interface UnsupportedOperationException {
	}

	export interface OperationNotPermittedException {
	}

	export interface NotOrganizationMasterAccountException {
	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface CreateTrailResponse {
		Name?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		SnsTopicName?: string;
		SnsTopicARN?: string;
		IncludeGlobalServiceEvents?: boolean;
		IsMultiRegionTrail?: boolean;
		TrailARN?: string;
		LogFileValidationEnabled?: boolean;
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		KmsKeyId?: string;
		IsOrganizationTrail?: boolean;
	}


	/** Specifies the settings for each trail. */
	export interface CreateTrailRequest {
		Name: string;
		S3BucketName: string;
		S3KeyPrefix?: string;
		SnsTopicName?: string;
		IncludeGlobalServiceEvents?: boolean;
		IsMultiRegionTrail?: boolean;
		EnableLogFileValidation?: boolean;
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		KmsKeyId?: string;
		IsOrganizationTrail?: boolean;

		/** A list of tags. */
		TagsList?: Array<Tag>;
	}

	export interface MaximumNumberOfTrailsExceededException {
	}

	export interface TrailAlreadyExistsException {
	}

	export interface S3BucketDoesNotExistException {
	}

	export interface InsufficientS3BucketPolicyException {
	}

	export interface InsufficientSnsTopicPolicyException {
	}

	export interface InsufficientEncryptionPolicyException {
	}

	export interface InvalidS3BucketNameException {
	}

	export interface InvalidS3PrefixException {
	}

	export interface InvalidSnsTopicNameException {
	}

	export interface InvalidKmsKeyIdException {
	}

	export interface TrailNotProvidedException {
	}

	export interface InvalidParameterCombinationException {
	}

	export interface KmsKeyNotFoundException {
	}

	export interface KmsKeyDisabledException {
	}

	export interface KmsException {
	}

	export interface InvalidCloudWatchLogsLogGroupArnException {
	}

	export interface InvalidCloudWatchLogsRoleArnException {
	}

	export interface CloudWatchLogsDeliveryUnavailableException {
	}

	export interface CloudTrailAccessNotEnabledException {
	}

	export interface InsufficientDependencyServiceAccessPermissionException {
	}

	export interface OrganizationsNotInUseException {
	}

	export interface OrganizationNotInAllFeaturesModeException {
	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface DeleteTrailResponse {
	}


	/** The request that specifies the name of a trail to delete. */
	export interface DeleteTrailRequest {
		Name: string;
	}

	export interface TrailNotFoundException {
	}

	export interface InvalidHomeRegionException {
	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface DescribeTrailsResponse {
		trailList?: Array<Trail>;
	}


	/** The settings for a trail. */
	export interface Trail {
		Name?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		SnsTopicName?: string;
		SnsTopicARN?: string;
		IncludeGlobalServiceEvents?: boolean;
		IsMultiRegionTrail?: boolean;
		HomeRegion?: string;
		TrailARN?: string;
		LogFileValidationEnabled?: boolean;
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		KmsKeyId?: string;
		HasCustomEventSelectors?: boolean;
		HasInsightSelectors?: boolean;
		IsOrganizationTrail?: boolean;
	}


	/** Returns information about the trail. */
	export interface DescribeTrailsRequest {
		trailNameList?: Array<string>;
		includeShadowTrails?: boolean;
	}

	export interface GetEventSelectorsResponse {
		TrailARN?: string;
		EventSelectors?: Array<EventSelector>;
	}


	/** <p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> */
	export interface EventSelector {
		ReadWriteType?: EventSelectorReadWriteType;
		IncludeManagementEvents?: boolean;
		DataResources?: Array<DataResource>;
		ExcludeManagementEventSources?: Array<string>;
	}

	export enum EventSelectorReadWriteType { ReadOnly = 0, WriteOnly = 1, All = 2 }


	/** <p>The Amazon S3 buckets or AWS Lambda functions that you specify in your event selectors for your trail to log data events. Data events provide information about the resource operations performed on or within a resource itself. These are also known as data plane operations. You can specify up to 250 data resources for a trail.</p> <note> <p>The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors.</p> </note> <p>The following example demonstrates how logging works when you configure logging of all data events for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix, and the option to log both <code>Read</code> and <code>Write</code> data events.</p> <ol> <li> <p>A user uploads an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.</p> </li> <li> <p>A user uploads an object to an Amazon S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.</p> </li> </ol> <p>The following example demonstrates how logging works when you configure logging of AWS Lambda data events for a Lambda function named <i>MyLambdaFunction</i>, but not for all AWS Lambda functions.</p> <ol> <li> <p>A user runs a script that includes a call to the <i>MyLambdaFunction</i> function and the <i>MyOtherLambdaFunction</i> function.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is an AWS Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for <i>MyLambdaFunction</i>, any invocations of that function are logged. The trail processes and logs the event. </p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyOtherLambdaFunction</i> is an AWS Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the <code>Invoke</code> operation for <i>MyOtherLambdaFunction</i> does not match the function specified for the trail. The trail doesn’t log the event. </p> </li> </ol> */
	export interface DataResource {
		Type?: string;
		Values?: Array<string>;
	}

	export interface GetEventSelectorsRequest {
		TrailName: string;
	}

	export interface GetInsightSelectorsResponse {
		TrailARN?: string;
		InsightSelectors?: Array<InsightSelector>;
	}


	/** A JSON string that contains a list of insight types that are logged on a trail. */
	export interface InsightSelector {
		InsightType?: InsightSelectorInsightType;
	}

	export enum InsightSelectorInsightType { ApiCallRateInsight = 0 }

	export interface GetInsightSelectorsRequest {
		TrailName: string;
	}

	export interface InsightNotEnabledException {
	}

	export interface GetTrailResponse {

		/** The settings for a trail. */
		Trail?: Trail;
	}

	export interface GetTrailRequest {
		Name: string;
	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface GetTrailStatusResponse {
		IsLogging?: boolean;
		LatestDeliveryError?: string;
		LatestNotificationError?: string;
		LatestDeliveryTime?: Date;
		LatestNotificationTime?: Date;
		StartLoggingTime?: Date;
		StopLoggingTime?: Date;
		LatestCloudWatchLogsDeliveryError?: string;
		LatestCloudWatchLogsDeliveryTime?: Date;
		LatestDigestDeliveryTime?: Date;
		LatestDigestDeliveryError?: string;
		LatestDeliveryAttemptTime?: string;
		LatestNotificationAttemptTime?: string;
		LatestNotificationAttemptSucceeded?: string;
		LatestDeliveryAttemptSucceeded?: string;
		TimeLoggingStarted?: string;
		TimeLoggingStopped?: string;
	}


	/** The name of a trail about which you want the current status. */
	export interface GetTrailStatusRequest {
		Name: string;
	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface ListPublicKeysResponse {
		PublicKeyList?: Array<PublicKey>;
		NextToken?: string;
	}


	/** Contains information about a returned public key. */
	export interface PublicKey {
		Value?: string;
		ValidityStartTime?: Date;
		ValidityEndTime?: Date;
		Fingerprint?: string;
	}


	/** Requests the public keys for a specified time range. */
	export interface ListPublicKeysRequest {
		StartTime?: Date;
		EndTime?: Date;
		NextToken?: string;
	}

	export interface InvalidTimeRangeException {
	}

	export interface InvalidTokenException {
	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface ListTagsResponse {
		ResourceTagList?: Array<ResourceTag>;
		NextToken?: string;
	}


	/** A resource tag. */
	export interface ResourceTag {
		ResourceId?: string;

		/** A list of tags. */
		TagsList?: Array<Tag>;
	}


	/** Specifies a list of trail tags to return. */
	export interface ListTagsRequest {
		ResourceIdList: Array<string>;
		NextToken?: string;
	}

	export interface ListTrailsResponse {
		Trails?: Array<TrailInfo>;
		NextToken?: string;
	}


	/** Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN). */
	export interface TrailInfo {
		TrailARN?: string;
		Name?: string;
		HomeRegion?: string;
	}

	export interface ListTrailsRequest {
		NextToken?: string;
	}


	/** Contains a response to a LookupEvents action. */
	export interface LookupEventsResponse {
		Events?: Array<Event>;
		NextToken?: string;
	}


	/** Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event. */
	export interface Event {
		EventId?: string;
		EventName?: string;
		ReadOnly?: string;
		AccessKeyId?: string;
		EventTime?: Date;
		EventSource?: string;
		Username?: string;

		/** A list of resources referenced by the event returned. */
		Resources?: Array<Resource>;
		CloudTrailEvent?: string;
	}


	/** Specifies the type and name of a resource referenced by an event. */
	export interface Resource {
		ResourceType?: string;
		ResourceName?: string;
	}


	/** Contains a request for LookupEvents. */
	export interface LookupEventsRequest {
		LookupAttributes?: Array<LookupAttribute>;
		StartTime?: Date;
		EndTime?: Date;
		EventCategory?: LookupEventsRequestEventCategory;
		MaxResults?: number;
		NextToken?: string;
	}


	/** Specifies an attribute and value that filter the events returned. */
	export interface LookupAttribute {
		AttributeKey: LookupAttributeAttributeKey;
		AttributeValue: string;
	}

	export enum LookupAttributeAttributeKey { EventId = 0, EventName = 1, ReadOnly = 2, Username = 3, ResourceType = 4, ResourceName = 5, EventSource = 6, AccessKeyId = 7 }

	export enum LookupEventsRequestEventCategory { insight = 0 }

	export interface InvalidLookupAttributesException {
	}

	export interface InvalidMaxResultsException {
	}

	export interface InvalidNextTokenException {
	}

	export interface InvalidEventCategoryException {
	}

	export interface PutEventSelectorsResponse {
		TrailARN?: string;
		EventSelectors?: Array<EventSelector>;
	}

	export interface PutEventSelectorsRequest {
		TrailName: string;
		EventSelectors: Array<EventSelector>;
	}

	export interface InvalidEventSelectorsException {
	}

	export interface PutInsightSelectorsResponse {
		TrailARN?: string;
		InsightSelectors?: Array<InsightSelector>;
	}

	export interface PutInsightSelectorsRequest {
		TrailName: string;
		InsightSelectors: Array<InsightSelector>;
	}

	export interface InvalidInsightSelectorsException {
	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface RemoveTagsResponse {
	}


	/** Specifies the tags to remove from a trail. */
	export interface RemoveTagsRequest {
		ResourceId: string;

		/** A list of tags. */
		TagsList?: Array<Tag>;
	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface StartLoggingResponse {
	}


	/** The request to CloudTrail to start logging AWS API calls for an account. */
	export interface StartLoggingRequest {
		Name: string;
	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface StopLoggingResponse {
	}


	/** Passes the request to CloudTrail to stop logging AWS API calls for the specified account. */
	export interface StopLoggingRequest {
		Name: string;
	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface UpdateTrailResponse {
		Name?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		SnsTopicName?: string;
		SnsTopicARN?: string;
		IncludeGlobalServiceEvents?: boolean;
		IsMultiRegionTrail?: boolean;
		TrailARN?: string;
		LogFileValidationEnabled?: boolean;
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		KmsKeyId?: string;
		IsOrganizationTrail?: boolean;
	}


	/** Specifies settings to update for the trail. */
	export interface UpdateTrailRequest {
		Name: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		SnsTopicName?: string;
		IncludeGlobalServiceEvents?: boolean;
		IsMultiRegionTrail?: boolean;
		EnableLogFileValidation?: boolean;
		CloudWatchLogsLogGroupArn?: string;
		CloudWatchLogsRoleArn?: string;
		KmsKeyId?: string;
		IsOrganizationTrail?: boolean;
	}

	export enum EventCategory { insight = 0 }

	export enum ReadWriteType { ReadOnly = 0, WriteOnly = 1, All = 2 }

	export enum InsightType { ApiCallRateInsight = 0 }

	export enum LookupAttributeKey { EventId = 0, EventName = 1, ReadOnly = 2, Username = 3, ResourceType = 4, ResourceName = 5, EventSource = 6, AccessKeyId = 7 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds one or more tags to a trail, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique for a trail; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail that applies to all AWS Regions only from the Region in which the trail was created (also known as its home region).
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags
		 * @return {AddTagsResponse} Success
		 */
		AddTags(requestBody: AddTagsRequest): Observable<AddTagsResponse> {
			return this.http.post<AddTagsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail
		 * @return {CreateTrailResponse} Success
		 */
		CreateTrail(requestBody: CreateTrailRequest): Observable<CreateTrailResponse> {
			return this.http.post<CreateTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail
		 * @return {DeleteTrailResponse} Success
		 */
		DeleteTrail(requestBody: DeleteTrailRequest): Observable<DeleteTrailResponse> {
			return this.http.post<DeleteTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves settings for one or more trails associated with the current region for your account.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails
		 * @return {DescribeTrailsResponse} Success
		 */
		DescribeTrails(requestBody: DescribeTrailsRequest): Observable<DescribeTrailsResponse> {
			return this.http.post<DescribeTrailsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the Amazon S3 objects or AWS Lambda functions that you are logging for data events.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails </a> in the <i>AWS CloudTrail User Guide</i>.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors
		 * @return {GetEventSelectorsResponse} Success
		 */
		GetEventSelectors(requestBody: GetEventSelectorsRequest): Observable<GetEventSelectorsResponse> {
			return this.http.post<GetEventSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails </a> in the <i>AWS CloudTrail User Guide</i>.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors
		 * @return {GetInsightSelectorsResponse} Success
		 */
		GetInsightSelectors(requestBody: GetInsightSelectorsRequest): Observable<GetInsightSelectorsResponse> {
			return this.http.post<GetInsightSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns settings information for a specified trail.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail
		 * @return {GetTrailResponse} Success
		 */
		GetTrail(requestBody: GetTrailRequest): Observable<GetTrailResponse> {
			return this.http.post<GetTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus
		 * @return {GetTrailStatusResponse} Success
		 */
		GetTrailStatus(requestBody: GetTrailStatusRequest): Observable<GetTrailStatusResponse> {
			return this.http.post<GetTrailStatusResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private/public key pairs per region. Each digest file is signed with a private key unique to its region. Therefore, when you validate a digest file from a particular region, you must look in the same region for its corresponding public key.</p> </note>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys
		 * @param {string} NextToken Pagination token
		 * @return {ListPublicKeysResponse} Success
		 */
		ListPublicKeys(NextToken: string, requestBody: ListPublicKeysRequest): Observable<ListPublicKeysResponse> {
			return this.http.post<ListPublicKeysResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the trail in the current region.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsResponse} Success
		 */
		ListTags(NextToken: string, requestBody: ListTagsRequest): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists trails that are in the current account.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails
		 * @param {string} NextToken Pagination token
		 * @return {ListTrailsResponse} Success
		 */
		ListTrails(NextToken: string, requestBody: ListTrailsRequest): Observable<ListTrailsResponse> {
			return this.http.post<ListTrailsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>AWS access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second per account. If this limit is exceeded, a throttling error occurs.</p> </important>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {LookupEventsResponse} Success
		 */
		LookupEvents(MaxResults: string, NextToken: string, requestBody: LookupEventsRequest): Observable<LookupEventsResponse> {
			return this.http.post<LookupEventsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures an event selector for your trail. Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. </p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. </p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event but it doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails </a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Limits in AWS CloudTrail</a> in the <i>AWS CloudTrail User Guide</i>.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors
		 * @return {PutEventSelectorsResponse} Success
		 */
		PutEventSelectors(requestBody: PutEventSelectorsRequest): Observable<PutEventSelectorsResponse> {
			return this.http.post<PutEventSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. In this release, only <code>ApiCallRateInsight</code> is supported as an Insights selector.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors
		 * @return {PutInsightSelectorsResponse} Success
		 */
		PutInsightSelectors(requestBody: PutInsightSelectorsRequest): Observable<PutInsightSelectorsResponse> {
			return this.http.post<PutInsightSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from a trail.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags
		 * @return {RemoveTagsResponse} Success
		 */
		RemoveTags(requestBody: RemoveTagsRequest): Observable<RemoveTagsResponse> {
			return this.http.post<RemoveTagsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the recording of AWS API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging
		 * @return {StartLoggingResponse} Success
		 */
		StartLogging(requestBody: StartLoggingRequest): Observable<StartLoggingResponse> {
			return this.http.post<StartLoggingResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Suspends the recording of AWS API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging
		 * @return {StopLoggingResponse} Success
		 */
		StopLogging(requestBody: StopLoggingRequest): Observable<StopLoggingResponse> {
			return this.http.post<StopLoggingResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the settings that specify delivery of log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail
		 * @return {UpdateTrailResponse} Success
		 */
		UpdateTrail(requestBody: UpdateTrailRequest): Observable<UpdateTrailResponse> {
			return this.http.post<UpdateTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_AddTags = 0 }

	export enum CreateTrailX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_CreateTrail = 0 }

	export enum DeleteTrailX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_DeleteTrail = 0 }

	export enum DescribeTrailsX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_DescribeTrails = 0 }

	export enum GetEventSelectorsX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_GetEventSelectors = 0 }

	export enum GetInsightSelectorsX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_GetInsightSelectors = 0 }

	export enum GetTrailX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_GetTrail = 0 }

	export enum GetTrailStatusX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_GetTrailStatus = 0 }

	export enum ListPublicKeysX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_ListPublicKeys = 0 }

	export enum ListTagsX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_ListTags = 0 }

	export enum ListTrailsX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_ListTrails = 0 }

	export enum LookupEventsX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_LookupEvents = 0 }

	export enum PutEventSelectorsX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_PutEventSelectors = 0 }

	export enum PutInsightSelectorsX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_PutInsightSelectors = 0 }

	export enum RemoveTagsX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_RemoveTags = 0 }

	export enum StartLoggingX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_StartLogging = 0 }

	export enum StopLoggingX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_StopLogging = 0 }

	export enum UpdateTrailX_Amz_Target { com_amazonaws_cloudtrail_v20131101_CloudTrail_20131101_UpdateTrail = 0 }

}

