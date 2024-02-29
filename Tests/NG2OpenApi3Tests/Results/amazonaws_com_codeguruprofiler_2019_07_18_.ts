import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The structure representing the AddNotificationChannelsResponse. */
	export interface AddNotificationChannelsResponse {
		notificationConfiguration?: NotificationConfiguration;
	}

	/** The structure representing the AddNotificationChannelsResponse. */
	export interface AddNotificationChannelsResponseFormProperties {
	}
	export function CreateAddNotificationChannelsResponseFormGroup() {
		return new FormGroup<AddNotificationChannelsResponseFormProperties>({
		});

	}


	/** The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel. */
	export interface NotificationConfiguration {
		channels?: Array<Channel>;
	}

	/** The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel. */
	export interface NotificationConfigurationFormProperties {
	}
	export function CreateNotificationConfigurationFormGroup() {
		return new FormGroup<NotificationConfigurationFormProperties>({
		});

	}


	/** Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel. */
	export interface Channel {

		/** Required */
		eventPublishers: Array<EventPublisher>;
		id?: string;

		/** Required */
		uri: string;
	}

	/** Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel. */
	export interface ChannelFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventPublisher { AnomalyDetection = 'AnomalyDetection' }

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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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


	/** The structure representing the BatchGetFrameMetricDataResponse. */
	export interface BatchGetFrameMetricDataResponse {

		/** Required */
		endTime: Date;

		/** Required */
		endTimes: Array<TimestampStructure>;

		/** Required */
		frameMetricData: Array<FrameMetricDatum>;

		/** Required */
		resolution: AggregationPeriod;

		/** Required */
		startTime: Date;

		/** Required */
		unprocessedEndTimes: UnprocessedEndTimeMap;
	}

	/** The structure representing the BatchGetFrameMetricDataResponse. */
	export interface BatchGetFrameMetricDataResponseFormProperties {

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		resolution: FormControl<AggregationPeriod | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateBatchGetFrameMetricDataResponseFormGroup() {
		return new FormGroup<BatchGetFrameMetricDataResponseFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<AggregationPeriod | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A data type that contains a <code>Timestamp</code> object. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.  */
	export interface TimestampStructure {

		/** Required */
		value: Date;
	}

	/**  A data type that contains a <code>Timestamp</code> object. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.  */
	export interface TimestampStructureFormProperties {

		/** Required */
		value: FormControl<Date | null | undefined>,
	}
	export function CreateTimestampStructureFormGroup() {
		return new FormGroup<TimestampStructureFormProperties>({
			value: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Information about a frame metric and its values.  */
	export interface FrameMetricDatum {

		/**
		 * The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
		 * Required
		 */
		frameMetric: FrameMetric;

		/** Required */
		values: Array<number>;
	}

	/**  Information about a frame metric and its values.  */
	export interface FrameMetricDatumFormProperties {
	}
	export function CreateFrameMetricDatumFormGroup() {
		return new FormGroup<FrameMetricDatumFormProperties>({
		});

	}


	/**  The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame. */
	export interface FrameMetric {

		/** Required */
		frameName: string;

		/** Required */
		threadStates: Array<string>;

		/** Required */
		type: MetricType;
	}

	/**  The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame. */
	export interface FrameMetricFormProperties {

		/** Required */
		frameName: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<MetricType | null | undefined>,
	}
	export function CreateFrameMetricFormGroup() {
		return new FormGroup<FrameMetricFormProperties>({
			frameName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<MetricType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MetricType { AggregatedRelativeTotalTime = 'AggregatedRelativeTotalTime' }

	export enum AggregationPeriod { PT5M = 'PT5M', PT1H = 'PT1H', P1D = 'P1D' }

	export interface UnprocessedEndTimeMap {
	}
	export interface UnprocessedEndTimeMapFormProperties {
	}
	export function CreateUnprocessedEndTimeMapFormGroup() {
		return new FormGroup<UnprocessedEndTimeMapFormProperties>({
		});

	}


	/** The structure representing the configureAgentResponse. */
	export interface ConfigureAgentResponse {

		/** Required */
		configuration: AgentConfiguration;
	}

	/** The structure representing the configureAgentResponse. */
	export interface ConfigureAgentResponseFormProperties {
	}
	export function CreateConfigureAgentResponseFormGroup() {
		return new FormGroup<ConfigureAgentResponseFormProperties>({
		});

	}


	/**  The response of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> that specifies if an agent profiles or not and for how long to return profiling data.  */
	export interface AgentConfiguration {
		agentParameters?: AgentParameters;

		/** Required */
		periodInSeconds: number;

		/** Required */
		shouldProfile: boolean;
	}

	/**  The response of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> that specifies if an agent profiles or not and for how long to return profiling data.  */
	export interface AgentConfigurationFormProperties {

		/** Required */
		periodInSeconds: FormControl<number | null | undefined>,

		/** Required */
		shouldProfile: FormControl<boolean | null | undefined>,
	}
	export function CreateAgentConfigurationFormGroup() {
		return new FormGroup<AgentConfigurationFormProperties>({
			periodInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shouldProfile: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AgentParameters {
	}
	export interface AgentParametersFormProperties {
	}
	export function CreateAgentParametersFormGroup() {
		return new FormGroup<AgentParametersFormProperties>({
		});

	}


	/** The structure representing the createProfilingGroupResponse. */
	export interface CreateProfilingGroupResponse {

		/** Required */
		profilingGroup: ProfilingGroupDescription;
	}

	/** The structure representing the createProfilingGroupResponse. */
	export interface CreateProfilingGroupResponseFormProperties {
	}
	export function CreateCreateProfilingGroupResponseFormGroup() {
		return new FormGroup<CreateProfilingGroupResponseFormProperties>({
		});

	}


	/**  Contains information about a profiling group.  */
	export interface ProfilingGroupDescription {
		agentOrchestrationConfig?: AgentOrchestrationConfig;
		arn?: string;
		computePlatform?: ComputePlatform;
		createdAt?: Date;
		name?: string;
		profilingStatus?: ProfilingStatus;
		tags?: TagsMap;
		updatedAt?: Date;
	}

	/**  Contains information about a profiling group.  */
	export interface ProfilingGroupDescriptionFormProperties {
		arn: FormControl<string | null | undefined>,
		computePlatform: FormControl<ComputePlatform | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateProfilingGroupDescriptionFormGroup() {
		return new FormGroup<ProfilingGroupDescriptionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			computePlatform: new FormControl<ComputePlatform | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.  */
	export interface AgentOrchestrationConfig {

		/** Required */
		profilingEnabled: boolean;
	}

	/**  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.  */
	export interface AgentOrchestrationConfigFormProperties {

		/** Required */
		profilingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAgentOrchestrationConfigFormGroup() {
		return new FormGroup<AgentOrchestrationConfigFormProperties>({
			profilingEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComputePlatform { Default = 'Default', AWSLambda = 'AWSLambda' }


	/**  Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile.  */
	export interface ProfilingStatus {
		latestAgentOrchestratedAt?: Date;
		latestAgentProfileReportedAt?: Date;
		latestAggregatedProfile?: AggregatedProfileTime;
	}

	/**  Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile.  */
	export interface ProfilingStatusFormProperties {
		latestAgentOrchestratedAt: FormControl<Date | null | undefined>,
		latestAgentProfileReportedAt: FormControl<Date | null | undefined>,
	}
	export function CreateProfilingStatusFormGroup() {
		return new FormGroup<ProfilingStatusFormProperties>({
			latestAgentOrchestratedAt: new FormControl<Date | null | undefined>(undefined),
			latestAgentProfileReportedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes).  */
	export interface AggregatedProfileTime {
		period?: AggregationPeriod;
		start?: Date;
	}

	/**  Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes).  */
	export interface AggregatedProfileTimeFormProperties {
		period: FormControl<AggregationPeriod | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateAggregatedProfileTimeFormGroup() {
		return new FormGroup<AggregatedProfileTimeFormProperties>({
			period: new FormControl<AggregationPeriod | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}


	/** The structure representing the deleteProfilingGroupResponse. */
	export interface DeleteProfilingGroupResponse {
	}

	/** The structure representing the deleteProfilingGroupResponse. */
	export interface DeleteProfilingGroupResponseFormProperties {
	}
	export function CreateDeleteProfilingGroupResponseFormGroup() {
		return new FormGroup<DeleteProfilingGroupResponseFormProperties>({
		});

	}


	/** The structure representing the describeProfilingGroupResponse. */
	export interface DescribeProfilingGroupResponse {

		/** Required */
		profilingGroup: ProfilingGroupDescription;
	}

	/** The structure representing the describeProfilingGroupResponse. */
	export interface DescribeProfilingGroupResponseFormProperties {
	}
	export function CreateDescribeProfilingGroupResponseFormGroup() {
		return new FormGroup<DescribeProfilingGroupResponseFormProperties>({
		});

	}


	/** The structure representing the GetFindingsReportAccountSummaryResponse. */
	export interface GetFindingsReportAccountSummaryResponse {
		nextToken?: string;

		/** Required */
		reportSummaries: Array<FindingsReportSummary>;
	}

	/** The structure representing the GetFindingsReportAccountSummaryResponse. */
	export interface GetFindingsReportAccountSummaryResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFindingsReportAccountSummaryResponseFormGroup() {
		return new FormGroup<GetFindingsReportAccountSummaryResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about potential recommendations that might be created from the analysis of profiling data.  */
	export interface FindingsReportSummary {
		id?: string;
		profileEndTime?: Date;
		profileStartTime?: Date;
		profilingGroupName?: string;
		totalNumberOfFindings?: number | null;
	}

	/**  Information about potential recommendations that might be created from the analysis of profiling data.  */
	export interface FindingsReportSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		profileEndTime: FormControl<Date | null | undefined>,
		profileStartTime: FormControl<Date | null | undefined>,
		profilingGroupName: FormControl<string | null | undefined>,
		totalNumberOfFindings: FormControl<number | null | undefined>,
	}
	export function CreateFindingsReportSummaryFormGroup() {
		return new FormGroup<FindingsReportSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			profileEndTime: new FormControl<Date | null | undefined>(undefined),
			profileStartTime: new FormControl<Date | null | undefined>(undefined),
			profilingGroupName: new FormControl<string | null | undefined>(undefined),
			totalNumberOfFindings: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The structure representing the GetNotificationConfigurationResponse. */
	export interface GetNotificationConfigurationResponse {

		/** Required */
		notificationConfiguration: NotificationConfiguration;
	}

	/** The structure representing the GetNotificationConfigurationResponse. */
	export interface GetNotificationConfigurationResponseFormProperties {
	}
	export function CreateGetNotificationConfigurationResponseFormGroup() {
		return new FormGroup<GetNotificationConfigurationResponseFormProperties>({
		});

	}


	/** The structure representing the <code>getPolicyResponse</code>. */
	export interface GetPolicyResponse {

		/** Required */
		policy: string;

		/** Required */
		revisionId: string;
	}

	/** The structure representing the <code>getPolicyResponse</code>. */
	export interface GetPolicyResponseFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyResponseFormGroup() {
		return new FormGroup<GetPolicyResponseFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the getProfileResponse. */
	export interface GetProfileResponse {

		/** Required */
		profile: string;
	}

	/** The structure representing the getProfileResponse. */
	export interface GetProfileResponseFormProperties {

		/** Required */
		profile: FormControl<string | null | undefined>,
	}
	export function CreateGetProfileResponseFormGroup() {
		return new FormGroup<GetProfileResponseFormProperties>({
			profile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the GetRecommendationsResponse. */
	export interface GetRecommendationsResponse {

		/** Required */
		anomalies: Array<Anomaly>;

		/** Required */
		profileEndTime: Date;

		/** Required */
		profileStartTime: Date;

		/** Required */
		profilingGroupName: string;

		/** Required */
		recommendations: Array<Recommendation>;
	}

	/** The structure representing the GetRecommendationsResponse. */
	export interface GetRecommendationsResponseFormProperties {

		/** Required */
		profileEndTime: FormControl<Date | null | undefined>,

		/** Required */
		profileStartTime: FormControl<Date | null | undefined>,

		/** Required */
		profilingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateGetRecommendationsResponseFormGroup() {
		return new FormGroup<GetRecommendationsResponseFormProperties>({
			profileEndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			profileStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			profilingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time.  */
	export interface Anomaly {

		/** Required */
		instances: Array<AnomalyInstance>;

		/** Required */
		metric: Metric;

		/** Required */
		reason: string;
	}

	/**  Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time.  */
	export interface AnomalyFormProperties {

		/** Required */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateAnomalyFormGroup() {
		return new FormGroup<AnomalyFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The specific duration in which the metric is flagged as anomalous. */
	export interface AnomalyInstance {
		endTime?: Date;

		/** Required */
		id: string;

		/** Required */
		startTime: Date;
		userFeedback?: UserFeedback;
	}

	/** The specific duration in which the metric is flagged as anomalous. */
	export interface AnomalyInstanceFormProperties {
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateAnomalyInstanceFormGroup() {
		return new FormGroup<AnomalyInstanceFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application. */
	export interface UserFeedback {

		/** Required */
		type: FeedbackType;
	}

	/** Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application. */
	export interface UserFeedbackFormProperties {

		/** Required */
		type: FormControl<FeedbackType | null | undefined>,
	}
	export function CreateUserFeedbackFormGroup() {
		return new FormGroup<UserFeedbackFormProperties>({
			type: new FormControl<FeedbackType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FeedbackType { Positive = 'Positive', Negative = 'Negative' }


	/**  Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame.  */
	export interface Metric {

		/** Required */
		frameName: string;

		/** Required */
		threadStates: Array<string>;

		/** Required */
		type: MetricType;
	}

	/**  Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame.  */
	export interface MetricFormProperties {

		/** Required */
		frameName: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<MetricType | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			frameName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<MetricType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A potential improvement that was found from analyzing the profiling data. */
	export interface Recommendation {

		/** Required */
		allMatchesCount: number;

		/** Required */
		allMatchesSum: number;

		/** Required */
		endTime: Date;

		/** Required */
		pattern: Pattern;

		/** Required */
		startTime: Date;

		/** Required */
		topMatches: Array<Match>;
	}

	/** A potential improvement that was found from analyzing the profiling data. */
	export interface RecommendationFormProperties {

		/** Required */
		allMatchesCount: FormControl<number | null | undefined>,

		/** Required */
		allMatchesSum: FormControl<number | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			allMatchesCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			allMatchesSum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A set of rules used to make a recommendation during an analysis.  */
	export interface Pattern {
		countersToAggregate?: Array<string>;
		description?: string;
		id?: string;
		name?: string;
		resolutionSteps?: string;
		targetFrames?: Array<Array<string>>;
		thresholdPercent?: number | null;
	}

	/**  A set of rules used to make a recommendation during an analysis.  */
	export interface PatternFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		resolutionSteps: FormControl<string | null | undefined>,
		thresholdPercent: FormControl<number | null | undefined>,
	}
	export function CreatePatternFormGroup() {
		return new FormGroup<PatternFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resolutionSteps: new FormControl<string | null | undefined>(undefined),
			thresholdPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The part of a profile that contains a recommendation found during analysis. */
	export interface Match {
		frameAddress?: string;
		targetFramesIndex?: number | null;
		thresholdBreachValue?: number | null;
	}

	/** The part of a profile that contains a recommendation found during analysis. */
	export interface MatchFormProperties {
		frameAddress: FormControl<string | null | undefined>,
		targetFramesIndex: FormControl<number | null | undefined>,
		thresholdBreachValue: FormControl<number | null | undefined>,
	}
	export function CreateMatchFormGroup() {
		return new FormGroup<MatchFormProperties>({
			frameAddress: new FormControl<string | null | undefined>(undefined),
			targetFramesIndex: new FormControl<number | null | undefined>(undefined),
			thresholdBreachValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The structure representing the ListFindingsReportsResponse. */
	export interface ListFindingsReportsResponse {

		/** Required */
		findingsReportSummaries: Array<FindingsReportSummary>;
		nextToken?: string;
	}

	/** The structure representing the ListFindingsReportsResponse. */
	export interface ListFindingsReportsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsReportsResponseFormGroup() {
		return new FormGroup<ListFindingsReportsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure representing the listProfileTimesResponse. */
	export interface ListProfileTimesResponse {
		nextToken?: string;

		/** Required */
		profileTimes: Array<ProfileTime>;
	}

	/** The structure representing the listProfileTimesResponse. */
	export interface ListProfileTimesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfileTimesResponseFormGroup() {
		return new FormGroup<ListProfileTimesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains the start time of a profile.  */
	export interface ProfileTime {
		start?: Date;
	}

	/**  Contains the start time of a profile.  */
	export interface ProfileTimeFormProperties {
		start: FormControl<Date | null | undefined>,
	}
	export function CreateProfileTimeFormGroup() {
		return new FormGroup<ProfileTimeFormProperties>({
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The structure representing the listProfilingGroupsResponse. */
	export interface ListProfilingGroupsResponse {
		nextToken?: string;

		/** Required */
		profilingGroupNames: Array<string>;
		profilingGroups?: Array<ProfilingGroupDescription>;
	}

	/** The structure representing the listProfilingGroupsResponse. */
	export interface ListProfilingGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfilingGroupsResponseFormGroup() {
		return new FormGroup<ListProfilingGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagsMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** The structure representing the postAgentProfileResponse. */
	export interface PostAgentProfileResponse {
	}

	/** The structure representing the postAgentProfileResponse. */
	export interface PostAgentProfileResponseFormProperties {
	}
	export function CreatePostAgentProfileResponseFormGroup() {
		return new FormGroup<PostAgentProfileResponseFormProperties>({
		});

	}


	/** The structure representing the <code>putPermissionResponse</code>. */
	export interface PutPermissionResponse {

		/** Required */
		policy: string;

		/** Required */
		revisionId: string;
	}

	/** The structure representing the <code>putPermissionResponse</code>. */
	export interface PutPermissionResponseFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionResponseFormGroup() {
		return new FormGroup<PutPermissionResponseFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the RemoveNotificationChannelResponse. */
	export interface RemoveNotificationChannelResponse {
		notificationConfiguration?: NotificationConfiguration;
	}

	/** The structure representing the RemoveNotificationChannelResponse. */
	export interface RemoveNotificationChannelResponseFormProperties {
	}
	export function CreateRemoveNotificationChannelResponseFormGroup() {
		return new FormGroup<RemoveNotificationChannelResponseFormProperties>({
		});

	}


	/** The structure representing the <code>removePermissionResponse</code>. */
	export interface RemovePermissionResponse {

		/** Required */
		policy: string;

		/** Required */
		revisionId: string;
	}

	/** The structure representing the <code>removePermissionResponse</code>. */
	export interface RemovePermissionResponseFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateRemovePermissionResponseFormGroup() {
		return new FormGroup<RemovePermissionResponseFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the SubmitFeedbackResponse. */
	export interface SubmitFeedbackResponse {
	}

	/** The structure representing the SubmitFeedbackResponse. */
	export interface SubmitFeedbackResponseFormProperties {
	}
	export function CreateSubmitFeedbackResponseFormGroup() {
		return new FormGroup<SubmitFeedbackResponseFormProperties>({
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


	/** The structure representing the updateProfilingGroupResponse. */
	export interface UpdateProfilingGroupResponse {

		/** Required */
		profilingGroup: ProfilingGroupDescription;
	}

	/** The structure representing the updateProfilingGroupResponse. */
	export interface UpdateProfilingGroupResponseFormProperties {
	}
	export function CreateUpdateProfilingGroupResponseFormGroup() {
		return new FormGroup<UpdateProfilingGroupResponseFormProperties>({
		});

	}

	export enum ActionGroup { agentPermissions = 'agentPermissions' }


	/** The structure representing the AddNotificationChannelsRequest. */
	export interface AddNotificationChannelsRequest {

		/** Required */
		channels: Array<Channel>;
	}

	/** The structure representing the AddNotificationChannelsRequest. */
	export interface AddNotificationChannelsRequestFormProperties {
	}
	export function CreateAddNotificationChannelsRequestFormGroup() {
		return new FormGroup<AddNotificationChannelsRequestFormProperties>({
		});

	}

	export enum AgentParameterField { SamplingIntervalInMilliseconds = 'SamplingIntervalInMilliseconds', ReportingIntervalInMilliseconds = 'ReportingIntervalInMilliseconds', MinimumTimeForReportingInMilliseconds = 'MinimumTimeForReportingInMilliseconds', MemoryUsageLimitPercent = 'MemoryUsageLimitPercent', MaxStackDepth = 'MaxStackDepth' }


	/** The structure representing the BatchGetFrameMetricDataRequest. */
	export interface BatchGetFrameMetricDataRequest {
		frameMetrics?: Array<FrameMetric>;
	}

	/** The structure representing the BatchGetFrameMetricDataRequest. */
	export interface BatchGetFrameMetricDataRequestFormProperties {
	}
	export function CreateBatchGetFrameMetricDataRequestFormGroup() {
		return new FormGroup<BatchGetFrameMetricDataRequestFormProperties>({
		});

	}

	export interface Metadata {
	}
	export interface MetadataFormProperties {
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
		});

	}


	/** The structure representing the configureAgentRequest. */
	export interface ConfigureAgentRequest {
		fleetInstanceId?: string;
		metadata?: Metadata;
	}

	/** The structure representing the configureAgentRequest. */
	export interface ConfigureAgentRequestFormProperties {
		fleetInstanceId: FormControl<string | null | undefined>,
	}
	export function CreateConfigureAgentRequestFormGroup() {
		return new FormGroup<ConfigureAgentRequestFormProperties>({
			fleetInstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure representing the createProfiliingGroupRequest. */
	export interface CreateProfilingGroupRequest {
		agentOrchestrationConfig?: AgentOrchestrationConfig;
		computePlatform?: ComputePlatform;

		/** Required */
		profilingGroupName: string;
		tags?: TagsMap;
	}

	/** The structure representing the createProfiliingGroupRequest. */
	export interface CreateProfilingGroupRequestFormProperties {
		computePlatform: FormControl<ComputePlatform | null | undefined>,

		/** Required */
		profilingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfilingGroupRequestFormGroup() {
		return new FormGroup<CreateProfilingGroupRequestFormProperties>({
			computePlatform: new FormControl<ComputePlatform | null | undefined>(undefined),
			profilingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the deleteProfilingGroupRequest. */
	export interface DeleteProfilingGroupRequest {
	}

	/** The structure representing the deleteProfilingGroupRequest. */
	export interface DeleteProfilingGroupRequestFormProperties {
	}
	export function CreateDeleteProfilingGroupRequestFormGroup() {
		return new FormGroup<DeleteProfilingGroupRequestFormProperties>({
		});

	}


	/** The structure representing the describeProfilingGroupRequest. */
	export interface DescribeProfilingGroupRequest {
	}

	/** The structure representing the describeProfilingGroupRequest. */
	export interface DescribeProfilingGroupRequestFormProperties {
	}
	export function CreateDescribeProfilingGroupRequestFormGroup() {
		return new FormGroup<DescribeProfilingGroupRequestFormProperties>({
		});

	}


	/** The structure representing the GetFindingsReportAccountSummaryRequest. */
	export interface GetFindingsReportAccountSummaryRequest {
	}

	/** The structure representing the GetFindingsReportAccountSummaryRequest. */
	export interface GetFindingsReportAccountSummaryRequestFormProperties {
	}
	export function CreateGetFindingsReportAccountSummaryRequestFormGroup() {
		return new FormGroup<GetFindingsReportAccountSummaryRequestFormProperties>({
		});

	}


	/** The structure representing the GetNotificationConfigurationRequest. */
	export interface GetNotificationConfigurationRequest {
	}

	/** The structure representing the GetNotificationConfigurationRequest. */
	export interface GetNotificationConfigurationRequestFormProperties {
	}
	export function CreateGetNotificationConfigurationRequestFormGroup() {
		return new FormGroup<GetNotificationConfigurationRequestFormProperties>({
		});

	}


	/**  The structure representing the <code>getPolicyRequest</code>.  */
	export interface GetPolicyRequest {
	}

	/**  The structure representing the <code>getPolicyRequest</code>.  */
	export interface GetPolicyRequestFormProperties {
	}
	export function CreateGetPolicyRequestFormGroup() {
		return new FormGroup<GetPolicyRequestFormProperties>({
		});

	}


	/** The structure representing the getProfileRequest. */
	export interface GetProfileRequest {
	}

	/** The structure representing the getProfileRequest. */
	export interface GetProfileRequestFormProperties {
	}
	export function CreateGetProfileRequestFormGroup() {
		return new FormGroup<GetProfileRequestFormProperties>({
		});

	}


	/** The structure representing the GetRecommendationsRequest. */
	export interface GetRecommendationsRequest {
	}

	/** The structure representing the GetRecommendationsRequest. */
	export interface GetRecommendationsRequestFormProperties {
	}
	export function CreateGetRecommendationsRequestFormGroup() {
		return new FormGroup<GetRecommendationsRequestFormProperties>({
		});

	}


	/** The structure representing the ListFindingsReportsRequest. */
	export interface ListFindingsReportsRequest {
	}

	/** The structure representing the ListFindingsReportsRequest. */
	export interface ListFindingsReportsRequestFormProperties {
	}
	export function CreateListFindingsReportsRequestFormGroup() {
		return new FormGroup<ListFindingsReportsRequestFormProperties>({
		});

	}

	export enum OrderBy { TimestampDescending = 'TimestampDescending', TimestampAscending = 'TimestampAscending' }


	/** The structure representing the listProfileTimesRequest. */
	export interface ListProfileTimesRequest {
	}

	/** The structure representing the listProfileTimesRequest. */
	export interface ListProfileTimesRequestFormProperties {
	}
	export function CreateListProfileTimesRequestFormGroup() {
		return new FormGroup<ListProfileTimesRequestFormProperties>({
		});

	}


	/** The structure representing the listProfilingGroupsRequest. */
	export interface ListProfilingGroupsRequest {
	}

	/** The structure representing the listProfilingGroupsRequest. */
	export interface ListProfilingGroupsRequestFormProperties {
	}
	export function CreateListProfilingGroupsRequestFormGroup() {
		return new FormGroup<ListProfilingGroupsRequestFormProperties>({
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

	export enum MetadataField { ComputePlatform = 'ComputePlatform', AgentId = 'AgentId', AwsRequestId = 'AwsRequestId', ExecutionEnvironment = 'ExecutionEnvironment', LambdaFunctionArn = 'LambdaFunctionArn', LambdaMemoryLimitInMB = 'LambdaMemoryLimitInMB', LambdaRemainingTimeInMilliseconds = 'LambdaRemainingTimeInMilliseconds', LambdaTimeGapBetweenInvokesInMilliseconds = 'LambdaTimeGapBetweenInvokesInMilliseconds', LambdaPreviousExecutionTimeInMilliseconds = 'LambdaPreviousExecutionTimeInMilliseconds' }


	/** The structure representing the postAgentProfileRequest. */
	export interface PostAgentProfileRequest {

		/** Required */
		agentProfile: string;
	}

	/** The structure representing the postAgentProfileRequest. */
	export interface PostAgentProfileRequestFormProperties {

		/** Required */
		agentProfile: FormControl<string | null | undefined>,
	}
	export function CreatePostAgentProfileRequestFormGroup() {
		return new FormGroup<PostAgentProfileRequestFormProperties>({
			agentProfile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the <code>putPermissionRequest</code>. */
	export interface PutPermissionRequest {

		/** Required */
		principals: Array<string>;
		revisionId?: string;
	}

	/** The structure representing the <code>putPermissionRequest</code>. */
	export interface PutPermissionRequestFormProperties {
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionRequestFormGroup() {
		return new FormGroup<PutPermissionRequestFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure representing the RemoveNotificationChannelRequest. */
	export interface RemoveNotificationChannelRequest {
	}

	/** The structure representing the RemoveNotificationChannelRequest. */
	export interface RemoveNotificationChannelRequestFormProperties {
	}
	export function CreateRemoveNotificationChannelRequestFormGroup() {
		return new FormGroup<RemoveNotificationChannelRequestFormProperties>({
		});

	}


	/**  <pre><code> The structure representing the &lt;code&gt;removePermissionRequest&lt;/code&gt;.&lt;/p&gt; </code></pre> */
	export interface RemovePermissionRequest {
	}

	/**  <pre><code> The structure representing the &lt;code&gt;removePermissionRequest&lt;/code&gt;.&lt;/p&gt; </code></pre> */
	export interface RemovePermissionRequestFormProperties {
	}
	export function CreateRemovePermissionRequestFormGroup() {
		return new FormGroup<RemovePermissionRequestFormProperties>({
		});

	}


	/** The structure representing the SubmitFeedbackRequest. */
	export interface SubmitFeedbackRequest {
		comment?: string;

		/** Required */
		type: FeedbackType;
	}

	/** The structure representing the SubmitFeedbackRequest. */
	export interface SubmitFeedbackRequestFormProperties {
		comment: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<FeedbackType | null | undefined>,
	}
	export function CreateSubmitFeedbackRequestFormGroup() {
		return new FormGroup<SubmitFeedbackRequestFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FeedbackType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagsMap;
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


	/** The structure representing the updateProfilingGroupRequest. */
	export interface UpdateProfilingGroupRequest {

		/** Required */
		agentOrchestrationConfig: AgentOrchestrationConfig;
	}

	/** The structure representing the updateProfilingGroupRequest. */
	export interface UpdateProfilingGroupRequestFormProperties {
	}
	export function CreateUpdateProfilingGroupRequestFormGroup() {
		return new FormGroup<UpdateProfilingGroupRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Add up to 2 anomaly notifications channels for a profiling group.
		 * Post profilingGroups/{profilingGroupName}/notificationConfiguration
		 * @param {string} profilingGroupName The name of the profiling group that we are setting up notifications for.
		 *     Min length: 1    Max length: 255
		 * @return {AddNotificationChannelsResponse} Success
		 */
		AddNotificationChannels(profilingGroupName: string, requestBody: AddNotificationChannelsPostBody): Observable<AddNotificationChannelsResponse> {
			return this.http.post<AddNotificationChannelsResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/notificationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the current configuration for anomaly notifications for a profiling group.
		 * Get profilingGroups/{profilingGroupName}/notificationConfiguration
		 * @param {string} profilingGroupName The name of the profiling group we want to get the notification configuration for.
		 *     Min length: 1    Max length: 255
		 * @return {GetNotificationConfigurationResponse} Success
		 */
		GetNotificationConfiguration(profilingGroupName: string): Observable<GetNotificationConfigurationResponse> {
			return this.http.get<GetNotificationConfigurationResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/notificationConfiguration', {});
		}

		/**
		 * Returns the time series of values for a requested list of frame metrics from a time period.
		 * Post profilingGroups/{profilingGroupName}/frames/-/metrics
		 * @param {Date} endTime  The end time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. 
		 * @param {string} period  The duration of the frame metrics used to return the time series values. Specify using the ISO 8601 format. The maximum period duration is one day (<code>PT24H</code> or <code>P1D</code>). 
		 *     Min length: 1    Max length: 64
		 * @param {string} profilingGroupName  The name of the profiling group associated with the the frame metrics used to return the time series values. 
		 *     Min length: 1    Max length: 255
		 * @param {Date} startTime  The start time of the time period for the frame metrics used to return the time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. 
		 * @param {AggregationPeriod} targetResolution <p>The requested resolution of time steps for the returned time series of values. If the requested target resolution is not available due to data not being retained we provide a best effort result by falling back to the most granular available resolution after the target resolution. There are 3 valid values. </p> <ul> <li> <p> <code>P1D</code> — 1 day </p> </li> <li> <p> <code>PT1H</code> — 1 hour </p> </li> <li> <p> <code>PT5M</code> — 5 minutes </p> </li> </ul>
		 * @return {BatchGetFrameMetricDataResponse} Success
		 */
		BatchGetFrameMetricData(endTime: Date | null | undefined, period: string | null | undefined, profilingGroupName: string, startTime: Date | null | undefined, targetResolution: AggregationPeriod | null | undefined, requestBody: BatchGetFrameMetricDataPostBody): Observable<BatchGetFrameMetricDataResponse> {
			return this.http.post<BatchGetFrameMetricDataResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/frames/-/metrics?endTime=' + endTime?.toISOString() + '&period=' + (period == null ? '' : encodeURIComponent(period)) + '&startTime=' + startTime?.toISOString() + '&targetResolution=' + targetResolution, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data.
		 * Post profilingGroups/{profilingGroupName}/configureAgent
		 * @param {string} profilingGroupName  The name of the profiling group for which the configured agent is collecting profiling data. 
		 *     Min length: 1    Max length: 255
		 * @return {ConfigureAgentResponse} Success
		 */
		ConfigureAgent(profilingGroupName: string, requestBody: ConfigureAgentPostBody): Observable<ConfigureAgentResponse> {
			return this.http.post<ConfigureAgentResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/configureAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a profiling group.
		 * Post profilingGroups#clientToken
		 * @param {string} clientToken  Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental creation of duplicate profiling groups if there are failures and retries. 
		 *     Min length: 1    Max length: 64
		 * @return {void} 
		 */
		CreateProfilingGroup(clientToken: string, requestBody: CreateProfilingGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'profilingGroups#clientToken?clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a profiling group.
		 * Delete profilingGroups/{profilingGroupName}
		 * @param {string} profilingGroupName The name of the profiling group to delete.
		 *     Min length: 1    Max length: 255
		 * @return {void} 
		 */
		DeleteProfilingGroup(profilingGroupName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group.
		 * Get profilingGroups/{profilingGroupName}
		 * @param {string} profilingGroupName  The name of the profiling group to get information about. 
		 *     Min length: 1    Max length: 255
		 * @return {DescribeProfilingGroupResponse} Success
		 */
		DescribeProfilingGroup(profilingGroupName: string): Observable<DescribeProfilingGroupResponse> {
			return this.http.get<DescribeProfilingGroupResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)), {});
		}

		/**
		 * Updates a profiling group.
		 * Put profilingGroups/{profilingGroupName}
		 * @param {string} profilingGroupName The name of the profiling group to update.
		 *     Min length: 1    Max length: 255
		 * @return {UpdateProfilingGroupResponse} Success
		 */
		UpdateProfilingGroup(profilingGroupName: string, requestBody: UpdateProfilingGroupPutBody): Observable<UpdateProfilingGroupResponse> {
			return this.http.put<UpdateProfilingGroupResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account.
		 * Get internal/findingsReports
		 * @param {boolean} dailyReportsOnly A <code>Boolean</code> value indicating whether to only return reports from daily profiles. If set to <code>True</code>, only analysis data from daily profiles is returned. If set to <code>False</code>, analysis data is returned from smaller time windows (for example, one hour).
		 * @param {number} maxResults The maximum number of results returned by <code> GetFindingsReportAccountSummary</code> in paginated output. When this parameter is used, <code>GetFindingsReportAccountSummary</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>GetFindingsReportAccountSummary</code> request with the returned <code>nextToken</code> value.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>GetFindingsReportAccountSummary</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 *     Min length: 1    Max length: 64
		 * @return {GetFindingsReportAccountSummaryResponse} Success
		 */
		GetFindingsReportAccountSummary(dailyReportsOnly: boolean | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<GetFindingsReportAccountSummaryResponse> {
			return this.http.get<GetFindingsReportAccountSummaryResponse>(this.baseUri + 'internal/findingsReports?dailyReportsOnly=' + dailyReportsOnly + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Returns the JSON-formatted resource-based policy on a profiling group.
		 * Get profilingGroups/{profilingGroupName}/policy
		 * @param {string} profilingGroupName The name of the profiling group.
		 *     Min length: 1    Max length: 255
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(profilingGroupName: string): Observable<GetPolicyResponse> {
			return this.http.get<GetPolicyResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/policy', {});
		}

		/**
		 * <p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>
		 * Get profilingGroups/{profilingGroupName}/profile
		 * @param {Date} endTime <p> The end time of the requested profile. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. </p> <p> If you specify <code>endTime</code>, then you must also specify <code>period</code> or <code>startTime</code>, but not both. </p>
		 * @param {number} maxDepth  The maximum depth of the stacks in the code that is represented in the aggregated profile. For example, if CodeGuru Profiler finds a method <code>A</code>, which calls method <code>B</code>, which calls method <code>C</code>, which calls method <code>D</code>, then the depth is 4. If the <code>maxDepth</code> is set to 2, then the aggregated profile contains representations of methods <code>A</code> and <code>B</code>. 
		 *     Minimum: 1    Maximum: 10000
		 * @param {string} period <p> Used with <code>startTime</code> or <code>endTime</code> to specify the time range for the returned aggregated profile. Specify using the ISO 8601 format. For example, <code>P1DT1H1M1S</code>. </p> <pre><code> &lt;p&gt; To get the latest aggregated profile, specify only &lt;code&gt;period&lt;/code&gt;. &lt;/p&gt; </code></pre>
		 *     Min length: 1    Max length: 64
		 * @param {string} profilingGroupName The name of the profiling group to get.
		 *     Min length: 1    Max length: 255
		 * @param {Date} startTime <p>The start time of the profile to get. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</p> <pre><code> &lt;p&gt; If you specify &lt;code&gt;startTime&lt;/code&gt;, then you must also specify &lt;code&gt;period&lt;/code&gt; or &lt;code&gt;endTime&lt;/code&gt;, but not both. &lt;/p&gt; </code></pre>
		 * @return {GetProfileResponse} Success
		 */
		GetProfile(endTime: Date | null | undefined, maxDepth: number | null | undefined, period: string | null | undefined, profilingGroupName: string, startTime: Date | null | undefined): Observable<GetProfileResponse> {
			return this.http.get<GetProfileResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/profile?endTime=' + endTime?.toISOString() + '&maxDepth=' + maxDepth + '&period=' + (period == null ? '' : encodeURIComponent(period)) + '&startTime=' + startTime?.toISOString(), {});
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned.
		 * Get internal/profilingGroups/{profilingGroupName}/recommendations#endTime&startTime
		 * @param {Date} endTime  The start time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. 
		 * @param {string} locale <p> The language used to provide analysis. Specify using a string that is one of the following <code>BCP 47</code> language codes. </p> <ul> <li> <p> <code>de-DE</code> - German, Germany </p> </li> <li> <p> <code>en-GB</code> - English, United Kingdom </p> </li> <li> <p> <code>en-US</code> - English, United States </p> </li> <li> <p> <code>es-ES</code> - Spanish, Spain </p> </li> <li> <p> <code>fr-FR</code> - French, France </p> </li> <li> <p> <code>it-IT</code> - Italian, Italy </p> </li> <li> <p> <code>ja-JP</code> - Japanese, Japan </p> </li> <li> <p> <code>ko-KR</code> - Korean, Republic of Korea </p> </li> <li> <p> <code>pt-BR</code> - Portugese, Brazil </p> </li> <li> <p> <code>zh-CN</code> - Chinese, China </p> </li> <li> <p> <code>zh-TW</code> - Chinese, Taiwan </p> </li> </ul>
		 * @param {string} profilingGroupName  The name of the profiling group to get analysis data about. 
		 *     Min length: 1    Max length: 255
		 * @param {Date} startTime  The end time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. 
		 * @return {GetRecommendationsResponse} Success
		 */
		GetRecommendations(endTime: Date, locale: string | null | undefined, profilingGroupName: string, startTime: Date): Observable<GetRecommendationsResponse> {
			return this.http.get<GetRecommendationsResponse>(this.baseUri + 'internal/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/recommendations#endTime&startTime?endTime=' + endTime.toISOString() + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&startTime=' + startTime.toISOString(), {});
		}

		/**
		 * List the available reports for a given profiling group and time range.
		 * Get internal/profilingGroups/{profilingGroupName}/findingsReports#endTime&startTime
		 * @param {boolean} dailyReportsOnly A <code>Boolean</code> value indicating whether to only return reports from daily profiles. If set to <code>True</code>, only analysis data from daily profiles is returned. If set to <code>False</code>, analysis data is returned from smaller time windows (for example, one hour).
		 * @param {Date} endTime  The end time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. 
		 * @param {number} maxResults The maximum number of report results returned by <code>ListFindingsReports</code> in paginated output. When this parameter is used, <code>ListFindingsReports</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFindingsReports</code> request with the returned <code>nextToken</code> value.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListFindingsReportsRequest</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 *     Min length: 1    Max length: 64
		 * @param {string} profilingGroupName The name of the profiling group from which to search for analysis data.
		 *     Min length: 1    Max length: 255
		 * @param {Date} startTime  The start time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. 
		 * @return {ListFindingsReportsResponse} Success
		 */
		ListFindingsReports(dailyReportsOnly: boolean | null | undefined, endTime: Date, maxResults: number | null | undefined, nextToken: string | null | undefined, profilingGroupName: string, startTime: Date): Observable<ListFindingsReportsResponse> {
			return this.http.get<ListFindingsReportsResponse>(this.baseUri + 'internal/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/findingsReports#endTime&startTime?dailyReportsOnly=' + dailyReportsOnly + '&endTime=' + endTime.toISOString() + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&startTime=' + startTime.toISOString(), {});
		}

		/**
		 * Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
		 * Get profilingGroups/{profilingGroupName}/profileTimes#endTime&period&startTime
		 * @param {Date} endTime The end time of the time range from which to list the profiles.
		 * @param {number} maxResults The maximum number of profile time results returned by <code>ListProfileTimes</code> in paginated output. When this parameter is used, <code>ListProfileTimes</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfileTimes</code> request with the returned <code>nextToken</code> value. 
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfileTimes</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 *     Min length: 1    Max length: 64
		 * @param {OrderBy} orderBy The order (ascending or descending by start time of the profile) to use when listing profiles. Defaults to <code>TIMESTAMP_DESCENDING</code>. 
		 * @param {AggregationPeriod} period <p> The aggregation period. This specifies the period during which an aggregation profile collects posted agent profiles for a profiling group. There are 3 valid values. </p> <ul> <li> <p> <code>P1D</code> — 1 day </p> </li> <li> <p> <code>PT1H</code> — 1 hour </p> </li> <li> <p> <code>PT5M</code> — 5 minutes </p> </li> </ul>
		 * @param {string} profilingGroupName The name of the profiling group.
		 *     Min length: 1    Max length: 255
		 * @param {Date} startTime The start time of the time range from which to list the profiles.
		 * @return {ListProfileTimesResponse} Success
		 */
		ListProfileTimes(endTime: Date, maxResults: number | null | undefined, nextToken: string | null | undefined, orderBy: OrderBy | null | undefined, period: AggregationPeriod, profilingGroupName: string, startTime: Date): Observable<ListProfileTimesResponse> {
			return this.http.get<ListProfileTimesResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/profileTimes#endTime&period&startTime?endTime=' + endTime.toISOString() + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&orderBy=' + orderBy + '&period=' + period + '&startTime=' + startTime.toISOString(), {});
		}

		/**
		 * Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects.
		 * Get profilingGroups
		 * @param {boolean} includeDescription A <code>Boolean</code> value indicating whether to include a description. If <code>true</code>, then a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects that contain detailed information about profiling groups is returned. If <code>false</code>, then a list of profiling group names is returned.
		 * @param {number} maxResults The maximum number of profiling groups results returned by <code>ListProfilingGroups</code> in paginated output. When this parameter is used, <code>ListProfilingGroups</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfilingGroups</code> request with the returned <code>nextToken</code> value. 
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfilingGroups</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 *     Min length: 1    Max length: 64
		 * @return {ListProfilingGroupsResponse} Success
		 */
		ListProfilingGroups(includeDescription: boolean | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListProfilingGroupsResponse> {
			return this.http.get<ListProfilingGroupsResponse>(this.baseUri + 'profilingGroups?includeDescription=' + includeDescription + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Returns a list of the tags that are assigned to a specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) of the resource that contains the tags to return. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Use to assign one or more tags to a resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) of the resource that the tags are added to. 
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>.
		 * Post profilingGroups/{profilingGroupName}/agentProfile#Content-Type
		 * @param {string} profileToken  Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental submission of duplicate profiling data if there are failures and retries. 
		 *     Min length: 1    Max length: 64
		 * @param {string} profilingGroupName  The name of the profiling group with the aggregated profile that receives the submitted profiling data. 
		 *     Min length: 1    Max length: 255
		 * @return {void} 
		 */
		PostAgentProfile(profileToken: string | null | undefined, profilingGroupName: string, requestBody: PostAgentProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/agentProfile#Content-Type?profileToken=' + (profileToken == null ? '' : encodeURIComponent(profileToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>
		 * Put profilingGroups/{profilingGroupName}/policy/{actionGroup}
		 * @param {ActionGroup} actionGroup  Specifies an action group that contains permissions to add to a profiling group resource. One action group is supported, <code>agentPermissions</code>, which grants permission to perform actions required by the profiling agent, <code>ConfigureAgent</code> and <code>PostAgentProfile</code> permissions. 
		 * @param {string} profilingGroupName The name of the profiling group to grant access to.
		 *     Min length: 1    Max length: 255
		 * @return {PutPermissionResponse} Success
		 */
		PutPermission(actionGroup: ActionGroup, profilingGroupName: string, requestBody: PutPermissionPutBody): Observable<PutPermissionResponse> {
			return this.http.put<PutPermissionResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/policy/' + actionGroup, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove one anomaly notifications channel for a profiling group.
		 * Delete profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}
		 * @param {string} channelId The id of the channel that we want to stop receiving notifications.
		 * @param {string} profilingGroupName The name of the profiling group we want to change notification configuration for.
		 *     Min length: 1    Max length: 255
		 * @return {RemoveNotificationChannelResponse} Success
		 */
		RemoveNotificationChannel(channelId: string, profilingGroupName: string): Observable<RemoveNotificationChannelResponse> {
			return this.http.delete<RemoveNotificationChannelResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/notificationConfiguration/' + (channelId == null ? '' : encodeURIComponent(channelId)), {});
		}

		/**
		 * Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>.
		 * Delete profilingGroups/{profilingGroupName}/policy/{actionGroup}#revisionId
		 * @param {ActionGroup} actionGroup  Specifies an action group that contains the permissions to remove from a profiling group's resource-based policy. One action group is supported, <code>agentPermissions</code>, which grants <code>ConfigureAgent</code> and <code>PostAgentProfile</code> permissions. 
		 * @param {string} profilingGroupName The name of the profiling group.
		 *     Min length: 1    Max length: 255
		 * @param {string} revisionId  A universally unique identifier (UUID) for the revision of the resource-based policy from which you want to remove permissions. 
		 * @return {RemovePermissionResponse} Success
		 */
		RemovePermission(actionGroup: ActionGroup, profilingGroupName: string, revisionId: string): Observable<RemovePermissionResponse> {
			return this.http.delete<RemovePermissionResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/policy/' + actionGroup + '#revisionId&revisionId=' + (revisionId == null ? '' : encodeURIComponent(revisionId)), {});
		}

		/**
		 * Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.
		 * Post internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback
		 * @param {string} anomalyInstanceId The universally unique identifier (UUID) of the <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AnomalyInstance.html"> <code>AnomalyInstance</code> </a> object that is included in the analysis data.
		 * @param {string} profilingGroupName The name of the profiling group that is associated with the analysis data.
		 *     Min length: 1    Max length: 255
		 * @return {void} 
		 */
		SubmitFeedback(anomalyInstanceId: string, profilingGroupName: string, requestBody: SubmitFeedbackPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'internal/profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/anomalies/' + (anomalyInstanceId == null ? '' : encodeURIComponent(anomalyInstanceId)) + '/feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Use to remove one or more tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) of the resource that contains the tags to remove. 
		 * @param {Array<string>} tagKeys  A list of tag keys. Existing tags of resources with keys in this list are removed from the specified resource. 
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface AddNotificationChannelsPostBody {

		/**
		 * One or 2 channels to report to when anomalies are detected.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		channels: Array<Channel>;
	}
	export interface AddNotificationChannelsPostBodyFormProperties {
	}
	export function CreateAddNotificationChannelsPostBodyFormGroup() {
		return new FormGroup<AddNotificationChannelsPostBodyFormProperties>({
		});

	}

	export interface BatchGetFrameMetricDataPostBody {

		/** The details of the metrics that are used to request a time series of values. The metric includes the name of the frame, the aggregation type to calculate the metric value for the frame, and the thread states to use to get the count for the metric value of the frame. */
		frameMetrics?: Array<FrameMetric>;
	}
	export interface BatchGetFrameMetricDataPostBodyFormProperties {
	}
	export function CreateBatchGetFrameMetricDataPostBodyFormGroup() {
		return new FormGroup<BatchGetFrameMetricDataPostBodyFormProperties>({
		});

	}

	export interface ConfigureAgentPostBody {

		/**
		 * A universally unique identifier (UUID) for a profiling instance. For example, if the profiling instance is an Amazon EC2 instance, it is the instance ID. If it is an AWS Fargate container, it is the container's task ID.
		 * Min length: 1
		 * Max length: 255
		 */
		fleetInstanceId?: string | null;

		/** <p> Metadata captured about the compute platform the agent is running on. It includes information about sampling and reporting. The valid fields are:</p> <ul> <li> <p> <code>COMPUTE_PLATFORM</code> - The compute platform on which the agent is running </p> </li> <li> <p> <code>AGENT_ID</code> - The ID for an agent instance. </p> </li> <li> <p> <code>AWS_REQUEST_ID</code> - The AWS request ID of a Lambda invocation. </p> </li> <li> <p> <code>EXECUTION_ENVIRONMENT</code> - The execution environment a Lambda function is running on. </p> </li> <li> <p> <code>LAMBDA_FUNCTION_ARN</code> - The Amazon Resource Name (ARN) that is used to invoke a Lambda function. </p> </li> <li> <p> <code>LAMBDA_MEMORY_LIMIT_IN_MB</code> - The memory allocated to a Lambda function. </p> </li> <li> <p> <code>LAMBDA_REMAINING_TIME_IN_MILLISECONDS</code> - The time in milliseconds before execution of a Lambda function times out. </p> </li> <li> <p> <code>LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS</code> - The time in milliseconds between two invocations of a Lambda function. </p> </li> <li> <p> <code>LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS</code> - The time in milliseconds for the previous Lambda invocation. </p> </li> </ul> */
		metadata?: {[id: string]: string };
	}
	export interface ConfigureAgentPostBodyFormProperties {

		/**
		 * A universally unique identifier (UUID) for a profiling instance. For example, if the profiling instance is an Amazon EC2 instance, it is the instance ID. If it is an AWS Fargate container, it is the container's task ID.
		 * Min length: 1
		 * Max length: 255
		 */
		fleetInstanceId: FormControl<string | null | undefined>,

		/** <p> Metadata captured about the compute platform the agent is running on. It includes information about sampling and reporting. The valid fields are:</p> <ul> <li> <p> <code>COMPUTE_PLATFORM</code> - The compute platform on which the agent is running </p> </li> <li> <p> <code>AGENT_ID</code> - The ID for an agent instance. </p> </li> <li> <p> <code>AWS_REQUEST_ID</code> - The AWS request ID of a Lambda invocation. </p> </li> <li> <p> <code>EXECUTION_ENVIRONMENT</code> - The execution environment a Lambda function is running on. </p> </li> <li> <p> <code>LAMBDA_FUNCTION_ARN</code> - The Amazon Resource Name (ARN) that is used to invoke a Lambda function. </p> </li> <li> <p> <code>LAMBDA_MEMORY_LIMIT_IN_MB</code> - The memory allocated to a Lambda function. </p> </li> <li> <p> <code>LAMBDA_REMAINING_TIME_IN_MILLISECONDS</code> - The time in milliseconds before execution of a Lambda function times out. </p> </li> <li> <p> <code>LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS</code> - The time in milliseconds between two invocations of a Lambda function. </p> </li> <li> <p> <code>LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS</code> - The time in milliseconds for the previous Lambda invocation. </p> </li> </ul> */
		metadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateConfigureAgentPostBodyFormGroup() {
		return new FormGroup<ConfigureAgentPostBodyFormProperties>({
			fleetInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateProfilingGroupPostBody {

		/** Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. */
		agentOrchestrationConfig?: CreateProfilingGroupPostBodyAgentOrchestrationConfig;

		/** The compute platform of the profiling group. Use <code>AWSLambda</code> if your application runs on AWS Lambda. Use <code>Default</code> if your application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, <code>Default</code> is used. */
		computePlatform?: ComputePlatform | null;

		/**
		 * The name of the profiling group to create.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		profilingGroupName: string;

		/** A list of tags to add to the created profiling group. */
		tags?: {[id: string]: string };
	}
	export interface CreateProfilingGroupPostBodyFormProperties {

		/** The compute platform of the profiling group. Use <code>AWSLambda</code> if your application runs on AWS Lambda. Use <code>Default</code> if your application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, <code>Default</code> is used. */
		computePlatform: FormControl<ComputePlatform | null | undefined>,

		/**
		 * The name of the profiling group to create.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		profilingGroupName: FormControl<string | null | undefined>,

		/** A list of tags to add to the created profiling group. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateProfilingGroupPostBodyFormGroup() {
		return new FormGroup<CreateProfilingGroupPostBodyFormProperties>({
			computePlatform: new FormControl<ComputePlatform | null | undefined>(undefined),
			profilingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\w-]+$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateProfilingGroupPostBodyAgentOrchestrationConfig {
		profilingEnabled?: boolean | null;
	}
	export interface CreateProfilingGroupPostBodyAgentOrchestrationConfigFormProperties {
		profilingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateProfilingGroupPostBodyAgentOrchestrationConfigFormGroup() {
		return new FormGroup<CreateProfilingGroupPostBodyAgentOrchestrationConfigFormProperties>({
			profilingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateProfilingGroupPutBody {

		/**
		 * Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.
		 * Required
		 */
		agentOrchestrationConfig: UpdateProfilingGroupPutBodyAgentOrchestrationConfig;
	}
	export interface UpdateProfilingGroupPutBodyFormProperties {
	}
	export function CreateUpdateProfilingGroupPutBodyFormGroup() {
		return new FormGroup<UpdateProfilingGroupPutBodyFormProperties>({
		});

	}

	export interface UpdateProfilingGroupPutBodyAgentOrchestrationConfig {
		profilingEnabled?: boolean | null;
	}
	export interface UpdateProfilingGroupPutBodyAgentOrchestrationConfigFormProperties {
		profilingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateProfilingGroupPutBodyAgentOrchestrationConfigFormGroup() {
		return new FormGroup<UpdateProfilingGroupPutBodyAgentOrchestrationConfigFormProperties>({
			profilingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The list of tags that are added to the specified resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The list of tags that are added to the specified resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostAgentProfilePostBody {

		/**
		 * The submitted profiling data.
		 * Required
		 */
		agentProfile: string;
	}
	export interface PostAgentProfilePostBodyFormProperties {

		/**
		 * The submitted profiling data.
		 * Required
		 */
		agentProfile: FormControl<string | null | undefined>,
	}
	export function CreatePostAgentProfilePostBodyFormGroup() {
		return new FormGroup<PostAgentProfilePostBodyFormProperties>({
			agentProfile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutPermissionPutBody {

		/**
		 * A list ARNs for the roles and users you want to grant access to the profiling group. Wildcards are not are supported in the ARNs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		principals: Array<string>;

		/** A universally unique identifier (UUID) for the revision of the policy you are adding to the profiling group. Do not specify this when you add permissions to a profiling group for the first time. If a policy already exists on the profiling group, you must specify the <code>revisionId</code>. */
		revisionId?: string | null;
	}
	export interface PutPermissionPutBodyFormProperties {

		/** A universally unique identifier (UUID) for the revision of the policy you are adding to the profiling group. Do not specify this when you add permissions to a profiling group for the first time. If a policy already exists on the profiling group, you must specify the <code>revisionId</code>. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionPutBodyFormGroup() {
		return new FormGroup<PutPermissionPutBodyFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}')]),
		});

	}

	export interface SubmitFeedbackPostBody {

		/** Optional feedback about this anomaly. */
		comment?: string | null;

		/**
		 * The feedback tpye. Thee are two valid values, <code>Positive</code> and <code>Negative</code>.
		 * Required
		 */
		type: FeedbackType;
	}
	export interface SubmitFeedbackPostBodyFormProperties {

		/** Optional feedback about this anomaly. */
		comment: FormControl<string | null | undefined>,

		/**
		 * The feedback tpye. Thee are two valid values, <code>Positive</code> and <code>Negative</code>.
		 * Required
		 */
		type: FormControl<FeedbackType | null | undefined>,
	}
	export function CreateSubmitFeedbackPostBodyFormGroup() {
		return new FormGroup<SubmitFeedbackPostBodyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FeedbackType | null | undefined>(undefined, [Validators.required]),
		});

	}

}

