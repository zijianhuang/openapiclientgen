import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateApplicationResponse {

		/** Describes the status of the application. */
		ApplicationInfo?: ApplicationInfo;
	}


	/** Describes the status of the application. */
	export interface ApplicationInfo {
		ResourceGroupName?: string;
		LifeCycle?: string;
		OpsItemSNSTopicArn?: string;
		OpsCenterEnabled?: boolean;
		CWEMonitorEnabled?: boolean;
		Remarks?: string;
	}

	export interface CreateApplicationRequest {
		ResourceGroupName: string;
		OpsCenterEnabled?: boolean;
		CWEMonitorEnabled?: boolean;
		OpsItemSNSTopicArn?: string;
		Tags?: Array<Tag>;
	}


	/** <p>An object that defines the tags associated with an application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. </p> </li> </ul> */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface ResourceInUseException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ValidationException {
	}

	export interface InternalServerException {
	}

	export interface TagsAlreadyExistException {
	}

	export interface CreateComponentResponse {
	}

	export interface CreateComponentRequest {
		ResourceGroupName: string;
		ComponentName: string;
		ResourceList: Array<string>;
	}

	export interface CreateLogPatternResponse {

		/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
		LogPattern?: LogPattern;
		ResourceGroupName?: string;
	}


	/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
	export interface LogPattern {
		PatternSetName?: string;
		PatternName?: string;
		Pattern?: string;
		Rank?: number;
	}

	export interface CreateLogPatternRequest {
		ResourceGroupName: string;
		PatternSetName: string;
		PatternName: string;
		Pattern: string;
		Rank: number;
	}

	export interface DeleteApplicationResponse {
	}

	export interface DeleteApplicationRequest {
		ResourceGroupName: string;
	}

	export interface BadRequestException {
	}

	export interface DeleteComponentResponse {
	}

	export interface DeleteComponentRequest {
		ResourceGroupName: string;
		ComponentName: string;
	}

	export interface DeleteLogPatternResponse {
	}

	export interface DeleteLogPatternRequest {
		ResourceGroupName: string;
		PatternSetName: string;
		PatternName: string;
	}

	export interface DescribeApplicationResponse {

		/** Describes the status of the application. */
		ApplicationInfo?: ApplicationInfo;
	}

	export interface DescribeApplicationRequest {
		ResourceGroupName: string;
	}

	export interface DescribeComponentResponse {

		/** Describes a standalone resource or similarly grouped resources that the application is made up of. */
		ApplicationComponent?: ApplicationComponent;
		ResourceList?: Array<string>;
	}


	/** Describes a standalone resource or similarly grouped resources that the application is made up of. */
	export interface ApplicationComponent {
		ComponentName?: string;
		ResourceType?: string;
		Tier?: ApplicationComponentTier;
		Monitor?: boolean;
	}

	export enum ApplicationComponentTier { DEFAULT = 0, DOT_NET_CORE = 1, DOT_NET_WORKER = 2, DOT_NET_WEB = 3, SQL_SERVER = 4 }

	export interface DescribeComponentRequest {
		ResourceGroupName: string;
		ComponentName: string;
	}

	export interface DescribeComponentConfigurationResponse {
		Monitor?: boolean;
		Tier?: ApplicationComponentTier;
		ComponentConfiguration?: string;
	}

	export interface DescribeComponentConfigurationRequest {
		ResourceGroupName: string;
		ComponentName: string;
	}

	export interface DescribeComponentConfigurationRecommendationResponse {
		ComponentConfiguration?: string;
	}

	export interface DescribeComponentConfigurationRecommendationRequest {
		ResourceGroupName: string;
		ComponentName: string;
		Tier: ApplicationComponentTier;
	}

	export interface DescribeLogPatternResponse {
		ResourceGroupName?: string;

		/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
		LogPattern?: LogPattern;
	}

	export interface DescribeLogPatternRequest {
		ResourceGroupName: string;
		PatternSetName: string;
		PatternName: string;
	}

	export interface DescribeObservationResponse {

		/** Describes an anomaly or error with the application. */
		Observation?: Observation;
	}


	/** Describes an anomaly or error with the application. */
	export interface Observation {
		Id?: string;
		StartTime?: Date;
		EndTime?: Date;
		SourceType?: string;
		SourceARN?: string;
		LogGroup?: string;
		LineTime?: Date;
		LogText?: string;
		LogFilter?: ObservationLogFilter;
		MetricNamespace?: string;
		MetricName?: string;
		Unit?: string;
		Value?: number;
		CloudWatchEventId?: string;
		CloudWatchEventSource?: ObservationCloudWatchEventSource;
		CloudWatchEventDetailType?: string;
		HealthEventArn?: string;
		HealthService?: string;
		HealthEventTypeCode?: string;
		HealthEventTypeCategory?: string;
		HealthEventDescription?: string;
		CodeDeployDeploymentId?: string;
		CodeDeployDeploymentGroup?: string;
		CodeDeployState?: string;
		CodeDeployApplication?: string;
		CodeDeployInstanceGroupId?: string;
		Ec2State?: string;
		XRayFaultPercent?: number;
		XRayThrottlePercent?: number;
		XRayErrorPercent?: number;
		XRayRequestCount?: number;
		XRayRequestAverageLatency?: number;
		XRayNodeName?: string;
		XRayNodeType?: string;
	}

	export enum ObservationLogFilter { ERROR = 0, WARN = 1, INFO = 2 }

	export enum ObservationCloudWatchEventSource { EC2 = 0, CODE_DEPLOY = 1, HEALTH = 2 }

	export interface DescribeObservationRequest {
		ObservationId: string;
	}

	export interface DescribeProblemResponse {

		/** Describes a problem that is detected by correlating observations. */
		Problem?: Problem;
	}


	/** Describes a problem that is detected by correlating observations. */
	export interface Problem {
		Id?: string;
		Title?: string;
		Insights?: string;
		Status?: ProblemStatus;
		AffectedResource?: string;
		StartTime?: Date;
		EndTime?: Date;
		SeverityLevel?: ProblemSeverityLevel;
		ResourceGroupName?: string;
		Feedback?: Feedback;
	}

	export enum ProblemStatus { IGNORE = 0, RESOLVED = 1, PENDING = 2 }

	export enum ProblemSeverityLevel { Low = 0, Medium = 1, High = 2 }

	export interface Feedback {
	}

	export interface DescribeProblemRequest {
		ProblemId: string;
	}

	export interface DescribeProblemObservationsResponse {

		/** Describes observations related to the problem. */
		RelatedObservations?: RelatedObservations;
	}


	/** Describes observations related to the problem. */
	export interface RelatedObservations {
		ObservationList?: Array<Observation>;
	}

	export interface DescribeProblemObservationsRequest {
		ProblemId: string;
	}

	export interface ListApplicationsResponse {
		ApplicationInfoList?: Array<ApplicationInfo>;
		NextToken?: string;
	}

	export interface ListApplicationsRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListComponentsResponse {
		ApplicationComponentList?: Array<ApplicationComponent>;
		NextToken?: string;
	}

	export interface ListComponentsRequest {
		ResourceGroupName: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListConfigurationHistoryResponse {
		EventList?: Array<ConfigurationEvent>;
		NextToken?: string;
	}


	/**  The event information.  */
	export interface ConfigurationEvent {
		MonitoredResourceARN?: string;
		EventStatus?: ConfigurationEventEventStatus;
		EventResourceType?: ConfigurationEventEventResourceType;
		EventTime?: Date;
		EventDetail?: string;
		EventResourceName?: string;
	}

	export enum ConfigurationEventEventStatus { INFO = 0, WARN = 1, ERROR = 2 }

	export enum ConfigurationEventEventResourceType { CLOUDWATCH_ALARM = 0, CLOUDFORMATION = 1, SSM_ASSOCIATION = 2 }

	export interface ListConfigurationHistoryRequest {
		ResourceGroupName?: string;
		StartTime?: Date;
		EndTime?: Date;
		EventStatus?: ConfigurationEventEventStatus;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListLogPatternSetsResponse {
		ResourceGroupName?: string;
		LogPatternSets?: Array<string>;
		NextToken?: string;
	}

	export interface ListLogPatternSetsRequest {
		ResourceGroupName: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListLogPatternsResponse {
		ResourceGroupName?: string;
		LogPatterns?: Array<LogPattern>;
		NextToken?: string;
	}

	export interface ListLogPatternsRequest {
		ResourceGroupName: string;
		PatternSetName?: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListProblemsResponse {
		ProblemList?: Array<Problem>;
		NextToken?: string;
	}

	export interface ListProblemsRequest {
		ResourceGroupName?: string;
		StartTime?: Date;
		EndTime?: Date;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface TooManyTagsException {
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<string>;
	}

	export interface UpdateApplicationResponse {

		/** Describes the status of the application. */
		ApplicationInfo?: ApplicationInfo;
	}

	export interface UpdateApplicationRequest {
		ResourceGroupName: string;
		OpsCenterEnabled?: boolean;
		CWEMonitorEnabled?: boolean;
		OpsItemSNSTopicArn?: string;
		RemoveSNSTopic?: boolean;
	}

	export interface UpdateComponentResponse {
	}

	export interface UpdateComponentRequest {
		ResourceGroupName: string;
		ComponentName: string;
		NewComponentName?: string;
		ResourceList?: Array<string>;
	}

	export interface UpdateComponentConfigurationResponse {
	}

	export interface UpdateComponentConfigurationRequest {
		ResourceGroupName: string;
		ComponentName: string;
		Monitor?: boolean;
		Tier?: ApplicationComponentTier;
		ComponentConfiguration?: string;
	}

	export interface UpdateLogPatternResponse {
		ResourceGroupName?: string;

		/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
		LogPattern?: LogPattern;
	}

	export interface UpdateLogPatternRequest {
		ResourceGroupName: string;
		PatternSetName: string;
		PatternName: string;
		Pattern?: string;
		Rank?: number;
	}

	export enum Tier { DEFAULT = 0, DOT_NET_CORE = 1, DOT_NET_WORKER = 2, DOT_NET_WEB = 3, SQL_SERVER = 4 }

	export enum CloudWatchEventSource { EC2 = 0, CODE_DEPLOY = 1, HEALTH = 2 }

	export enum ConfigurationEventStatus { INFO = 0, WARN = 1, ERROR = 2 }

	export enum ConfigurationEventResourceType { CLOUDWATCH_ALARM = 0, CLOUDFORMATION = 1, SSM_ASSOCIATION = 2 }

	export enum FeedbackValue { NOT_SPECIFIED = 0, USEFUL = 1, NOT_USEFUL = 2 }

	export enum FeedbackKey { INSIGHTS_FEEDBACK = 0 }

	export enum LogFilter { ERROR = 0, WARN = 1, INFO = 2 }

	export enum Status { IGNORE = 0, RESOLVED = 1, PENDING = 2 }

	export enum SeverityLevel { Low = 0, Medium = 1, High = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds an application that is created from a resource group.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.CreateApplication
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(requestBody: CreateApplicationRequest): Observable<CreateApplicationResponse> {
			return this.http.post<CreateApplicationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.CreateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a custom component by grouping similar standalone instances to monitor.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.CreateComponent
		 * @return {CreateComponentResponse} Success
		 */
		CreateComponent(requestBody: CreateComponentRequest): Observable<CreateComponentResponse> {
			return this.http.post<CreateComponentResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.CreateComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds an log pattern to a <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern
		 * @return {CreateLogPatternResponse} Success
		 */
		CreateLogPattern(requestBody: CreateLogPatternRequest): Observable<CreateLogPatternResponse> {
			return this.http.post<CreateLogPatternResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified application from monitoring. Does not delete the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DeleteApplication
		 * @return {DeleteApplicationResponse} Success
		 */
		DeleteApplication(requestBody: DeleteApplicationRequest): Observable<DeleteApplicationResponse> {
			return this.http.post<DeleteApplicationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DeleteComponent
		 * @return {DeleteComponentResponse} Success
		 */
		DeleteComponent(requestBody: DeleteComponentRequest): Observable<DeleteComponentResponse> {
			return this.http.post<DeleteComponentResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified log pattern from a <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern
		 * @return {DeleteLogPatternResponse} Success
		 */
		DeleteLogPattern(requestBody: DeleteLogPatternRequest): Observable<DeleteLogPatternResponse> {
			return this.http.post<DeleteLogPatternResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeApplication
		 * @return {DescribeApplicationResponse} Success
		 */
		DescribeApplication(requestBody: DescribeApplicationRequest): Observable<DescribeApplicationResponse> {
			return this.http.post<DescribeApplicationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a component and lists the resources that are grouped together in a component.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeComponent
		 * @return {DescribeComponentResponse} Success
		 */
		DescribeComponent(requestBody: DescribeComponentRequest): Observable<DescribeComponentResponse> {
			return this.http.post<DescribeComponentResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the monitoring configuration of the component.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration
		 * @return {DescribeComponentConfigurationResponse} Success
		 */
		DescribeComponentConfiguration(requestBody: DescribeComponentConfigurationRequest): Observable<DescribeComponentConfigurationResponse> {
			return this.http.post<DescribeComponentConfigurationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the recommended monitoring configuration of the component.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation
		 * @return {DescribeComponentConfigurationRecommendationResponse} Success
		 */
		DescribeComponentConfigurationRecommendation(requestBody: DescribeComponentConfigurationRecommendationRequest): Observable<DescribeComponentConfigurationRecommendationResponse> {
			return this.http.post<DescribeComponentConfigurationRecommendationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe a specific log pattern from a <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern
		 * @return {DescribeLogPatternResponse} Success
		 */
		DescribeLogPattern(requestBody: DescribeLogPatternRequest): Observable<DescribeLogPatternResponse> {
			return this.http.post<DescribeLogPatternResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an anomaly or error with the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeObservation
		 * @return {DescribeObservationResponse} Success
		 */
		DescribeObservation(requestBody: DescribeObservationRequest): Observable<DescribeObservationResponse> {
			return this.http.post<DescribeObservationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an application problem.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeProblem
		 * @return {DescribeProblemResponse} Success
		 */
		DescribeProblem(requestBody: DescribeProblemRequest): Observable<DescribeProblemResponse> {
			return this.http.post<DescribeProblemResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the anomalies or errors associated with the problem.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations
		 * @return {DescribeProblemObservationsResponse} Success
		 */
		DescribeProblemObservations(requestBody: DescribeProblemObservationsRequest): Observable<DescribeProblemObservationsResponse> {
			return this.http.post<DescribeProblemObservationsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the IDs of the applications that you are monitoring.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListApplications
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(MaxResults: string, NextToken: string, requestBody: ListApplicationsRequest): Observable<ListApplicationsResponse> {
			return this.http.post<ListApplicationsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListApplications?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the auto-grouped, standalone, and custom components of the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListComponents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListComponentsResponse} Success
		 */
		ListComponents(MaxResults: string, NextToken: string, requestBody: ListComponentsRequest): Observable<ListComponentsResponse> {
			return this.http.post<ListComponentsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListComponents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConfigurationHistoryResponse} Success
		 */
		ListConfigurationHistory(MaxResults: string, NextToken: string, requestBody: ListConfigurationHistoryRequest): Observable<ListConfigurationHistoryResponse> {
			return this.http.post<ListConfigurationHistoryResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the log pattern sets in the specific application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLogPatternSetsResponse} Success
		 */
		ListLogPatternSets(MaxResults: string, NextToken: string, requestBody: ListLogPatternSetsRequest): Observable<ListLogPatternSetsResponse> {
			return this.http.post<ListLogPatternSetsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the log patterns in the specific log <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLogPatternsResponse} Success
		 */
		ListLogPatterns(MaxResults: string, NextToken: string, requestBody: ListLogPatternsRequest): Observable<ListLogPatternsResponse> {
			return this.http.post<ListLogPatternsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the problems with your application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListProblems
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProblemsResponse} Success
		 */
		ListProblems(MaxResults: string, NextToken: string, requestBody: ListProblemsRequest): Observable<ListProblemsResponse> {
			return this.http.post<ListProblemsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListProblems?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
		 * Post #X-Amz-Target=EC2WindowsBarleyService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove one or more tags (keys and values) from a specified application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UpdateApplication
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationRequest): Observable<UpdateApplicationResponse> {
			return this.http.post<UpdateApplicationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the custom component name and/or the list of resources that make up the component.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UpdateComponent
		 * @return {UpdateComponentResponse} Success
		 */
		UpdateComponent(requestBody: UpdateComponentRequest): Observable<UpdateComponentResponse> {
			return this.http.post<UpdateComponentResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration
		 * @return {UpdateComponentConfigurationResponse} Success
		 */
		UpdateComponentConfiguration(requestBody: UpdateComponentConfigurationRequest): Observable<UpdateComponentConfigurationResponse> {
			return this.http.post<UpdateComponentConfigurationResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a log pattern to a <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern
		 * @return {UpdateLogPatternResponse} Success
		 */
		UpdateLogPattern(requestBody: UpdateLogPatternRequest): Observable<UpdateLogPatternResponse> {
			return this.http.post<UpdateLogPatternResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateApplicationX_Amz_Target { EC2WindowsBarleyService_CreateApplication = 0 }

	export enum CreateComponentX_Amz_Target { EC2WindowsBarleyService_CreateComponent = 0 }

	export enum CreateLogPatternX_Amz_Target { EC2WindowsBarleyService_CreateLogPattern = 0 }

	export enum DeleteApplicationX_Amz_Target { EC2WindowsBarleyService_DeleteApplication = 0 }

	export enum DeleteComponentX_Amz_Target { EC2WindowsBarleyService_DeleteComponent = 0 }

	export enum DeleteLogPatternX_Amz_Target { EC2WindowsBarleyService_DeleteLogPattern = 0 }

	export enum DescribeApplicationX_Amz_Target { EC2WindowsBarleyService_DescribeApplication = 0 }

	export enum DescribeComponentX_Amz_Target { EC2WindowsBarleyService_DescribeComponent = 0 }

	export enum DescribeComponentConfigurationX_Amz_Target { EC2WindowsBarleyService_DescribeComponentConfiguration = 0 }

	export enum DescribeComponentConfigurationRecommendationX_Amz_Target { EC2WindowsBarleyService_DescribeComponentConfigurationRecommendation = 0 }

	export enum DescribeLogPatternX_Amz_Target { EC2WindowsBarleyService_DescribeLogPattern = 0 }

	export enum DescribeObservationX_Amz_Target { EC2WindowsBarleyService_DescribeObservation = 0 }

	export enum DescribeProblemX_Amz_Target { EC2WindowsBarleyService_DescribeProblem = 0 }

	export enum DescribeProblemObservationsX_Amz_Target { EC2WindowsBarleyService_DescribeProblemObservations = 0 }

	export enum ListApplicationsX_Amz_Target { EC2WindowsBarleyService_ListApplications = 0 }

	export enum ListComponentsX_Amz_Target { EC2WindowsBarleyService_ListComponents = 0 }

	export enum ListConfigurationHistoryX_Amz_Target { EC2WindowsBarleyService_ListConfigurationHistory = 0 }

	export enum ListLogPatternSetsX_Amz_Target { EC2WindowsBarleyService_ListLogPatternSets = 0 }

	export enum ListLogPatternsX_Amz_Target { EC2WindowsBarleyService_ListLogPatterns = 0 }

	export enum ListProblemsX_Amz_Target { EC2WindowsBarleyService_ListProblems = 0 }

	export enum ListTagsForResourceX_Amz_Target { EC2WindowsBarleyService_ListTagsForResource = 0 }

	export enum TagResourceX_Amz_Target { EC2WindowsBarleyService_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { EC2WindowsBarleyService_UntagResource = 0 }

	export enum UpdateApplicationX_Amz_Target { EC2WindowsBarleyService_UpdateApplication = 0 }

	export enum UpdateComponentX_Amz_Target { EC2WindowsBarleyService_UpdateComponent = 0 }

	export enum UpdateComponentConfigurationX_Amz_Target { EC2WindowsBarleyService_UpdateComponentConfiguration = 0 }

	export enum UpdateLogPatternX_Amz_Target { EC2WindowsBarleyService_UpdateLogPattern = 0 }

}

