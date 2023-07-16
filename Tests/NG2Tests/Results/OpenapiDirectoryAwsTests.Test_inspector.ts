import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AddAttributesToFindingsResponse {
		failedItems: FailedItems;
	}

	export interface FailedItems {
	}

	export interface AddAttributesToFindingsRequest {
		findingArns: Array<string>;
		attributes: Array<Attribute>;
	}


	/** This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions. */
	export interface Attribute {
		key: string;
		value?: string;
	}

	export interface InternalException {
	}

	export interface InvalidInputException {
	}

	export interface AccessDeniedException {
	}

	export interface NoSuchEntityException {
	}

	export interface ServiceTemporarilyUnavailableException {
	}

	export interface CreateAssessmentTargetResponse {
		assessmentTargetArn: string;
	}

	export interface CreateAssessmentTargetRequest {
		assessmentTargetName: string;
		resourceGroupArn?: string;
	}

	export interface LimitExceededException {
	}

	export interface InvalidCrossAccountRoleException {
	}

	export interface CreateAssessmentTemplateResponse {
		assessmentTemplateArn: string;
	}

	export interface CreateAssessmentTemplateRequest {
		assessmentTargetArn: string;
		assessmentTemplateName: string;
		durationInSeconds: number;
		rulesPackageArns: Array<string>;
		userAttributesForFindings?: Array<Attribute>;
	}

	export interface CreateExclusionsPreviewResponse {
		previewToken: string;
	}

	export interface CreateExclusionsPreviewRequest {
		assessmentTemplateArn: string;
	}

	export interface PreviewGenerationInProgressException {
	}

	export interface CreateResourceGroupResponse {
		resourceGroupArn: string;
	}

	export interface CreateResourceGroupRequest {
		resourceGroupTags: Array<ResourceGroupTag>;
	}


	/** This data type is used as one of the elements of the <a>ResourceGroup</a> data type. */
	export interface ResourceGroupTag {
		key: string;
		value?: string;
	}

	export interface DeleteAssessmentRunRequest {
		assessmentRunArn: string;
	}

	export interface AssessmentRunInProgressException {
	}

	export interface DeleteAssessmentTargetRequest {
		assessmentTargetArn: string;
	}

	export interface DeleteAssessmentTemplateRequest {
		assessmentTemplateArn: string;
	}

	export interface DescribeAssessmentRunsResponse {
		assessmentRuns: Array<AssessmentRun>;
		failedItems: FailedItems;
	}


	/** <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p> */
	export interface AssessmentRun {
		arn: string;
		name: string;
		assessmentTemplateArn: string;
		state: AssessmentRunState;
		durationInSeconds: number;
		rulesPackageArns: Array<string>;
		userAttributesForFindings: Array<Attribute>;
		createdAt: Date;
		startedAt?: Date;
		completedAt?: Date;
		stateChangedAt: Date;
		dataCollected: boolean;
		stateChanges: Array<AssessmentRunStateChange>;
		notifications: Array<AssessmentRunNotification>;
		findingCounts: AssessmentRunFindingCounts;
	}

	export enum AssessmentRunState { CREATED = 0, START_DATA_COLLECTION_PENDING = 1, START_DATA_COLLECTION_IN_PROGRESS = 2, COLLECTING_DATA = 3, STOP_DATA_COLLECTION_PENDING = 4, DATA_COLLECTED = 5, START_EVALUATING_RULES_PENDING = 6, EVALUATING_RULES = 7, FAILED = 8, ERROR = 9, COMPLETED = 10, COMPLETED_WITH_ERRORS = 11, CANCELED = 12 }


	/** Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunStateChange {
		stateChangedAt: Date;
		state: AssessmentRunState;
	}


	/** Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunNotification {
		date: Date;
		event: AssessmentRunNotificationEvent;
		message?: string;
		error: boolean;
		snsTopicArn?: string;
		snsPublishStatusCode?: AssessmentRunNotificationSnsPublishStatusCode;
	}

	export enum AssessmentRunNotificationEvent { ASSESSMENT_RUN_STARTED = 0, ASSESSMENT_RUN_COMPLETED = 1, ASSESSMENT_RUN_STATE_CHANGED = 2, FINDING_REPORTED = 3, OTHER = 4 }

	export enum AssessmentRunNotificationSnsPublishStatusCode { SUCCESS = 0, TOPIC_DOES_NOT_EXIST = 1, ACCESS_DENIED = 2, INTERNAL_ERROR = 3 }

	export interface AssessmentRunFindingCounts {
	}

	export interface DescribeAssessmentRunsRequest {
		assessmentRunArns: Array<string>;
	}

	export interface DescribeAssessmentTargetsResponse {
		assessmentTargets: Array<AssessmentTarget>;
		failedItems: FailedItems;
	}


	/** Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action. */
	export interface AssessmentTarget {
		arn: string;
		name: string;
		resourceGroupArn?: string;
		createdAt: Date;
		updatedAt: Date;
	}

	export interface DescribeAssessmentTargetsRequest {
		assessmentTargetArns: Array<string>;
	}

	export interface DescribeAssessmentTemplatesResponse {
		assessmentTemplates: Array<AssessmentTemplate>;
		failedItems: FailedItems;
	}


	/** Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action. */
	export interface AssessmentTemplate {
		arn: string;
		name: string;
		assessmentTargetArn: string;
		durationInSeconds: number;
		rulesPackageArns: Array<string>;
		userAttributesForFindings: Array<Attribute>;
		lastAssessmentRunArn?: string;
		assessmentRunCount: number;
		createdAt: Date;
	}

	export interface DescribeAssessmentTemplatesRequest {
		assessmentTemplateArns: Array<string>;
	}

	export interface DescribeCrossAccountAccessRoleResponse {
		roleArn: string;
		valid: boolean;
		registeredAt: Date;
	}

	export interface DescribeExclusionsResponse {
		exclusions: ExclusionMap;
		failedItems: FailedItems;
	}

	export interface ExclusionMap {
	}

	export interface DescribeExclusionsRequest {
		exclusionArns: Array<string>;
		locale?: DescribeExclusionsRequestLocale;
	}

	export enum DescribeExclusionsRequestLocale { EN_US = 0 }

	export interface DescribeFindingsResponse {
		findings: Array<Finding>;
		failedItems: FailedItems;
	}


	/** Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action. */
	export interface Finding {
		arn: string;
		schemaVersion?: number;
		service?: string;

		/** This data type is used in the <a>Finding</a> data type. */
		serviceAttributes?: InspectorServiceAttributes;
		assetType?: FindingAssetType;

		/** A collection of attributes of the host from which the finding is generated. */
		assetAttributes?: AssetAttributes;
		id?: string;
		title?: string;
		description?: string;
		recommendation?: string;
		severity?: FindingSeverity;
		numericSeverity?: number;
		confidence?: number;
		indicatorOfCompromise?: boolean;
		attributes: Array<Attribute>;
		userAttributes: Array<Attribute>;
		createdAt: Date;
		updatedAt: Date;
	}


	/** This data type is used in the <a>Finding</a> data type. */
	export interface InspectorServiceAttributes {
		schemaVersion: number;
		assessmentRunArn?: string;
		rulesPackageArn?: string;
	}

	export enum FindingAssetType { ec2_instance = 0 }


	/** A collection of attributes of the host from which the finding is generated. */
	export interface AssetAttributes {
		schemaVersion: number;
		agentId?: string;
		autoScalingGroup?: string;
		amiId?: string;
		hostname?: string;
		ipv4Addresses?: Array<string>;
		tags?: Array<Tag>;
		networkInterfaces?: Array<NetworkInterface>;
	}


	/** A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action. */
	export interface Tag {
		key: string;
		value?: string;
	}


	/** Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type. */
	export interface NetworkInterface {
		networkInterfaceId?: string;
		subnetId?: string;
		vpcId?: string;
		privateDnsName?: string;
		privateIpAddress?: string;
		privateIpAddresses?: Array<PrivateIp>;
		publicDnsName?: string;
		publicIp?: string;
		ipv6Addresses?: Array<string>;
		securityGroups?: Array<SecurityGroup>;
	}


	/** Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action. */
	export interface PrivateIp {
		privateDnsName?: string;
		privateIpAddress?: string;
	}


	/** Contains information about a security group associated with a network interface. This data type is used as one of the elements of the <a>NetworkInterface</a> data type. */
	export interface SecurityGroup {
		groupName?: string;
		groupId?: string;
	}

	export enum FindingSeverity { Low = 0, Medium = 1, High = 2, Informational = 3, Undefined = 4 }

	export interface DescribeFindingsRequest {
		findingArns: Array<string>;
		locale?: DescribeExclusionsRequestLocale;
	}

	export interface DescribeResourceGroupsResponse {
		resourceGroups: Array<ResourceGroup>;
		failedItems: FailedItems;
	}


	/** Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action. */
	export interface ResourceGroup {
		arn: string;
		tags: Array<ResourceGroupTag>;
		createdAt: Date;
	}

	export interface DescribeResourceGroupsRequest {
		resourceGroupArns: Array<string>;
	}

	export interface DescribeRulesPackagesResponse {
		rulesPackages: Array<RulesPackage>;
		failedItems: FailedItems;
	}


	/** Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action. */
	export interface RulesPackage {
		arn: string;
		name: string;
		version: string;
		provider: string;
		description?: string;
	}

	export interface DescribeRulesPackagesRequest {
		rulesPackageArns: Array<string>;
		locale?: DescribeExclusionsRequestLocale;
	}

	export interface GetAssessmentReportResponse {
		status: GetAssessmentReportResponseStatus;
		url?: string;
	}

	export enum GetAssessmentReportResponseStatus { WORK_IN_PROGRESS = 0, FAILED = 1, COMPLETED = 2 }

	export interface GetAssessmentReportRequest {
		assessmentRunArn: string;
		reportFileFormat: GetAssessmentReportRequestReportFileFormat;
		reportType: GetAssessmentReportRequestReportType;
	}

	export enum GetAssessmentReportRequestReportFileFormat { HTML = 0, PDF = 1 }

	export enum GetAssessmentReportRequestReportType { FINDING = 0, FULL = 1 }

	export interface UnsupportedFeatureException {
	}

	export interface GetExclusionsPreviewResponse {
		previewStatus: GetExclusionsPreviewResponsePreviewStatus;
		exclusionPreviews?: Array<ExclusionPreview>;
		nextToken?: string;
	}

	export enum GetExclusionsPreviewResponsePreviewStatus { WORK_IN_PROGRESS = 0, COMPLETED = 1 }


	/** Contains information about what is excluded from an assessment run given the current state of the assessment template. */
	export interface ExclusionPreview {
		title: string;
		description: string;
		recommendation: string;
		scopes: Array<Scope>;
		attributes?: Array<Attribute>;
	}


	/** This data type contains key-value pairs that identify various Amazon resources. */
	export interface Scope {
		key?: ScopeKey;
		value?: string;
	}

	export enum ScopeKey { INSTANCE_ID = 0, RULES_PACKAGE_ARN = 1 }

	export interface GetExclusionsPreviewRequest {
		assessmentTemplateArn: string;
		previewToken: string;
		nextToken?: string;
		maxResults?: number;
		locale?: DescribeExclusionsRequestLocale;
	}

	export interface GetTelemetryMetadataResponse {
		telemetryMetadata: Array<TelemetryMetadata>;
	}


	/** The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action. */
	export interface TelemetryMetadata {
		messageType: string;
		count: number;
		dataSize?: number;
	}

	export interface GetTelemetryMetadataRequest {
		assessmentRunArn: string;
	}

	export interface ListAssessmentRunAgentsResponse {
		assessmentRunAgents: Array<AssessmentRunAgent>;
		nextToken?: string;
	}


	/** Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action. */
	export interface AssessmentRunAgent {
		agentId: string;
		assessmentRunArn: string;
		agentHealth: AssessmentRunAgentAgentHealth;
		agentHealthCode: AssessmentRunAgentAgentHealthCode;
		agentHealthDetails?: string;
		autoScalingGroup?: string;
		telemetryMetadata: Array<TelemetryMetadata>;
	}

	export enum AssessmentRunAgentAgentHealth { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export enum AssessmentRunAgentAgentHealthCode { IDLE = 0, RUNNING = 1, SHUTDOWN = 2, UNHEALTHY = 3, THROTTLED = 4, UNKNOWN = 5 }

	export interface ListAssessmentRunAgentsRequest {
		assessmentRunArn: string;

		/** Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action. */
		filter?: AgentFilter;
		nextToken?: string;
		maxResults?: number;
	}


	/** Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action. */
	export interface AgentFilter {
		agentHealths: Array<AgentHealth>;
		agentHealthCodes: Array<AgentHealthCode>;
	}

	export enum AgentHealth { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export enum AgentHealthCode { IDLE = 0, RUNNING = 1, SHUTDOWN = 2, UNHEALTHY = 3, THROTTLED = 4, UNKNOWN = 5 }

	export interface ListAssessmentRunsResponse {
		assessmentRunArns: Array<string>;
		nextToken?: string;
	}

	export interface ListAssessmentRunsRequest {
		assessmentTemplateArns?: Array<string>;

		/** Used as the request parameter in the <a>ListAssessmentRuns</a> action. */
		filter?: AssessmentRunFilter;
		nextToken?: string;
		maxResults?: number;
	}


	/** Used as the request parameter in the <a>ListAssessmentRuns</a> action. */
	export interface AssessmentRunFilter {
		namePattern?: string;
		states?: Array<AssessmentRunState>;

		/** This data type is used in the <a>AssessmentTemplateFilter</a> data type. */
		durationRange?: DurationRange;
		rulesPackageArns?: Array<string>;

		/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
		startTimeRange?: TimestampRange;

		/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
		completionTimeRange?: TimestampRange;

		/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
		stateChangeTimeRange?: TimestampRange;
	}


	/** This data type is used in the <a>AssessmentTemplateFilter</a> data type. */
	export interface DurationRange {
		minSeconds?: number;
		maxSeconds?: number;
	}


	/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
	export interface TimestampRange {
		beginDate?: Date;
		endDate?: Date;
	}

	export interface ListAssessmentTargetsResponse {
		assessmentTargetArns: Array<string>;
		nextToken?: string;
	}

	export interface ListAssessmentTargetsRequest {

		/** Used as the request parameter in the <a>ListAssessmentTargets</a> action. */
		filter?: AssessmentTargetFilter;
		nextToken?: string;
		maxResults?: number;
	}


	/** Used as the request parameter in the <a>ListAssessmentTargets</a> action. */
	export interface AssessmentTargetFilter {
		assessmentTargetNamePattern?: string;
	}

	export interface ListAssessmentTemplatesResponse {
		assessmentTemplateArns: Array<string>;
		nextToken?: string;
	}

	export interface ListAssessmentTemplatesRequest {
		assessmentTargetArns?: Array<string>;

		/** Used as the request parameter in the <a>ListAssessmentTemplates</a> action. */
		filter?: AssessmentTemplateFilter;
		nextToken?: string;
		maxResults?: number;
	}


	/** Used as the request parameter in the <a>ListAssessmentTemplates</a> action. */
	export interface AssessmentTemplateFilter {
		namePattern?: string;

		/** This data type is used in the <a>AssessmentTemplateFilter</a> data type. */
		durationRange?: DurationRange;
		rulesPackageArns?: Array<string>;
	}

	export interface ListEventSubscriptionsResponse {
		subscriptions: Array<Subscription>;
		nextToken?: string;
	}


	/** This data type is used as a response element in the <a>ListEventSubscriptions</a> action. */
	export interface Subscription {
		resourceArn: string;
		topicArn: string;
		eventSubscriptions: Array<EventSubscription>;
	}


	/** This data type is used in the <a>Subscription</a> data type. */
	export interface EventSubscription {
		event: AssessmentRunNotificationEvent;
		subscribedAt: Date;
	}

	export interface ListEventSubscriptionsRequest {
		resourceArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListExclusionsResponse {
		exclusionArns: Array<string>;
		nextToken?: string;
	}

	export interface ListExclusionsRequest {
		assessmentRunArn: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListFindingsResponse {
		findingArns: Array<string>;
		nextToken?: string;
	}

	export interface ListFindingsRequest {
		assessmentRunArns?: Array<string>;

		/** This data type is used as a request parameter in the <a>ListFindings</a> action. */
		filter?: FindingFilter;
		nextToken?: string;
		maxResults?: number;
	}


	/** This data type is used as a request parameter in the <a>ListFindings</a> action. */
	export interface FindingFilter {
		agentIds?: Array<string>;
		autoScalingGroups?: Array<string>;
		ruleNames?: Array<string>;
		severities?: Array<Severity>;
		rulesPackageArns?: Array<string>;
		attributes?: Array<Attribute>;
		userAttributes?: Array<Attribute>;

		/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
		creationTimeRange?: TimestampRange;
	}

	export enum Severity { Low = 0, Medium = 1, High = 2, Informational = 3, Undefined = 4 }

	export interface ListRulesPackagesResponse {
		rulesPackageArns: Array<string>;
		nextToken?: string;
	}

	export interface ListRulesPackagesRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListTagsForResourceResponse {
		tags: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		resourceArn: string;
	}

	export interface PreviewAgentsResponse {
		agentPreviews: Array<AgentPreview>;
		nextToken?: string;
	}


	/** Used as a response element in the <a>PreviewAgents</a> action. */
	export interface AgentPreview {
		hostname?: string;
		agentId: string;
		autoScalingGroup?: string;
		agentHealth?: AssessmentRunAgentAgentHealth;
		agentVersion?: string;
		operatingSystem?: string;
		kernelVersion?: string;
		ipv4Address?: string;
	}

	export interface PreviewAgentsRequest {
		previewAgentsArn: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface RegisterCrossAccountAccessRoleRequest {
		roleArn: string;
	}

	export interface RemoveAttributesFromFindingsResponse {
		failedItems: FailedItems;
	}

	export interface RemoveAttributesFromFindingsRequest {
		findingArns: Array<string>;
		attributeKeys: Array<string>;
	}

	export interface SetTagsForResourceRequest {
		resourceArn: string;
		tags?: Array<Tag>;
	}

	export interface StartAssessmentRunResponse {
		assessmentRunArn: string;
	}

	export interface StartAssessmentRunRequest {
		assessmentTemplateArn: string;
		assessmentRunName?: string;
	}

	export interface AgentsAlreadyRunningAssessmentException {
	}

	export interface StopAssessmentRunRequest {
		assessmentRunArn: string;
		stopAction?: StopAssessmentRunRequestStopAction;
	}

	export enum StopAssessmentRunRequestStopAction { START_EVALUATION = 0, SKIP_EVALUATION = 1 }

	export interface SubscribeToEventRequest {
		resourceArn: string;
		event: AssessmentRunNotificationEvent;
		topicArn: string;
	}

	export interface UnsubscribeFromEventRequest {
		resourceArn: string;
		event: AssessmentRunNotificationEvent;
		topicArn: string;
	}

	export interface UpdateAssessmentTargetRequest {
		assessmentTargetArn: string;
		assessmentTargetName: string;
		resourceGroupArn?: string;
	}

	export enum InspectorEvent { ASSESSMENT_RUN_STARTED = 0, ASSESSMENT_RUN_COMPLETED = 1, ASSESSMENT_RUN_STATE_CHANGED = 2, FINDING_REPORTED = 3, OTHER = 4 }

	export enum AssessmentRunNotificationSnsStatusCode { SUCCESS = 0, TOPIC_DOES_NOT_EXIST = 1, ACCESS_DENIED = 2, INTERNAL_ERROR = 3 }

	export enum AssetType { ec2_instance = 0 }

	export enum Locale { EN_US = 0 }


	/** Contains information about what was excluded from an assessment run. */
	export interface Exclusion {
		arn: string;
		title: string;
		description: string;
		recommendation: string;
		scopes: Array<Scope>;
		attributes?: Array<Attribute>;
	}

	export enum FailedItemErrorCode { INVALID_ARN = 0, DUPLICATE_ARN = 1, ITEM_DOES_NOT_EXIST = 2, ACCESS_DENIED = 3, LIMIT_EXCEEDED = 4, INTERNAL_ERROR = 5 }


	/** Includes details about the failed items. */
	export interface FailedItemDetails {
		failureCode: FailedItemErrorCode;
		retryable: boolean;
	}

	export enum ReportFileFormat { HTML = 0, PDF = 1 }

	export enum ReportType { FINDING = 0, FULL = 1 }

	export enum ReportStatus { WORK_IN_PROGRESS = 0, FAILED = 1, COMPLETED = 2 }

	export enum PreviewStatus { WORK_IN_PROGRESS = 0, COMPLETED = 1 }

	export enum ScopeType { INSTANCE_ID = 0, RULES_PACKAGE_ARN = 1 }

	export enum StopAction { START_EVALUATION = 0, SKIP_EVALUATION = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.
		 * Post #X-Amz-Target=InspectorService.AddAttributesToFindings
		 * @return {AddAttributesToFindingsResponse} Success
		 */
		AddAttributesToFindings(requestBody: AddAttributesToFindingsRequest): Observable<AddAttributesToFindingsResponse> {
			return this.http.post<AddAttributesToFindingsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.AddAttributesToFindings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new assessment target using the ARN of the resource group that is generated by <a>CreateResourceGroup</a>. If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments. You can create up to 50 assessment targets per AWS account. You can run up to 500 concurrent agents per AWS account. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html"> Amazon Inspector Assessment Targets</a>.
		 * Post #X-Amz-Target=InspectorService.CreateAssessmentTarget
		 * @return {CreateAssessmentTargetResponse} Success
		 */
		CreateAssessmentTarget(requestBody: CreateAssessmentTargetRequest): Observable<CreateAssessmentTargetResponse> {
			return this.http.post<CreateAssessmentTargetResponse>(this.baseUri + '#X-Amz-Target=InspectorService.CreateAssessmentTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an assessment template for the assessment target that is specified by the ARN of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments.
		 * Post #X-Amz-Target=InspectorService.CreateAssessmentTemplate
		 * @return {CreateAssessmentTemplateResponse} Success
		 */
		CreateAssessmentTemplate(requestBody: CreateAssessmentTemplateRequest): Observable<CreateAssessmentTemplateResponse> {
			return this.http.post<CreateAssessmentTemplateResponse>(this.baseUri + '#X-Amz-Target=InspectorService.CreateAssessmentTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the generation of an exclusions preview for the specified assessment template. The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can detect before it runs the assessment.
		 * Post #X-Amz-Target=InspectorService.CreateExclusionsPreview
		 * @return {CreateExclusionsPreviewResponse} Success
		 */
		CreateExclusionsPreview(requestBody: CreateExclusionsPreviewRequest): Observable<CreateExclusionsPreviewResponse> {
			return this.http.post<CreateExclusionsPreviewResponse>(this.baseUri + '#X-Amz-Target=InspectorService.CreateExclusionsPreview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target. The created resource group is then used to create an Amazon Inspector assessment target. For more information, see <a>CreateAssessmentTarget</a>.
		 * Post #X-Amz-Target=InspectorService.CreateResourceGroup
		 * @return {CreateResourceGroupResponse} Success
		 */
		CreateResourceGroup(requestBody: CreateResourceGroupRequest): Observable<CreateResourceGroupResponse> {
			return this.http.post<CreateResourceGroupResponse>(this.baseUri + '#X-Amz-Target=InspectorService.CreateResourceGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the assessment run that is specified by the ARN of the assessment run.
		 * Post #X-Amz-Target=InspectorService.DeleteAssessmentRun
		 * @return {void} Success
		 */
		DeleteAssessmentRun(requestBody: DeleteAssessmentRunRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.DeleteAssessmentRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the assessment target that is specified by the ARN of the assessment target.
		 * Post #X-Amz-Target=InspectorService.DeleteAssessmentTarget
		 * @return {void} Success
		 */
		DeleteAssessmentTarget(requestBody: DeleteAssessmentTargetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.DeleteAssessmentTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the assessment template that is specified by the ARN of the assessment template.
		 * Post #X-Amz-Target=InspectorService.DeleteAssessmentTemplate
		 * @return {void} Success
		 */
		DeleteAssessmentTemplate(requestBody: DeleteAssessmentTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.DeleteAssessmentTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the assessment runs that are specified by the ARNs of the assessment runs.
		 * Post #X-Amz-Target=InspectorService.DescribeAssessmentRuns
		 * @return {DescribeAssessmentRunsResponse} Success
		 */
		DescribeAssessmentRuns(requestBody: DescribeAssessmentRunsRequest): Observable<DescribeAssessmentRunsResponse> {
			return this.http.post<DescribeAssessmentRunsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeAssessmentRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the assessment targets that are specified by the ARNs of the assessment targets.
		 * Post #X-Amz-Target=InspectorService.DescribeAssessmentTargets
		 * @return {DescribeAssessmentTargetsResponse} Success
		 */
		DescribeAssessmentTargets(requestBody: DescribeAssessmentTargetsRequest): Observable<DescribeAssessmentTargetsResponse> {
			return this.http.post<DescribeAssessmentTargetsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeAssessmentTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the assessment templates that are specified by the ARNs of the assessment templates.
		 * Post #X-Amz-Target=InspectorService.DescribeAssessmentTemplates
		 * @return {DescribeAssessmentTemplatesResponse} Success
		 */
		DescribeAssessmentTemplates(requestBody: DescribeAssessmentTemplatesRequest): Observable<DescribeAssessmentTemplatesResponse> {
			return this.http.post<DescribeAssessmentTemplatesResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeAssessmentTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the IAM role that enables Amazon Inspector to access your AWS account.
		 * Post #X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole
		 * @return {DescribeCrossAccountAccessRoleResponse} Success
		 */
		DescribeCrossAccountAccessRole(): Observable<DescribeCrossAccountAccessRoleResponse> {
			return this.http.post<DescribeCrossAccountAccessRoleResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole', null, {});
		}

		/**
		 * Describes the exclusions that are specified by the exclusions' ARNs.
		 * Post #X-Amz-Target=InspectorService.DescribeExclusions
		 * @return {DescribeExclusionsResponse} Success
		 */
		DescribeExclusions(requestBody: DescribeExclusionsRequest): Observable<DescribeExclusionsResponse> {
			return this.http.post<DescribeExclusionsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeExclusions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the findings that are specified by the ARNs of the findings.
		 * Post #X-Amz-Target=InspectorService.DescribeFindings
		 * @return {DescribeFindingsResponse} Success
		 */
		DescribeFindings(requestBody: DescribeFindingsRequest): Observable<DescribeFindingsResponse> {
			return this.http.post<DescribeFindingsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeFindings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the resource groups that are specified by the ARNs of the resource groups.
		 * Post #X-Amz-Target=InspectorService.DescribeResourceGroups
		 * @return {DescribeResourceGroupsResponse} Success
		 */
		DescribeResourceGroups(requestBody: DescribeResourceGroupsRequest): Observable<DescribeResourceGroupsResponse> {
			return this.http.post<DescribeResourceGroupsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeResourceGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the rules packages that are specified by the ARNs of the rules packages.
		 * Post #X-Amz-Target=InspectorService.DescribeRulesPackages
		 * @return {DescribeRulesPackagesResponse} Success
		 */
		DescribeRulesPackages(requestBody: DescribeRulesPackagesRequest): Observable<DescribeRulesPackagesResponse> {
			return this.http.post<DescribeRulesPackagesResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeRulesPackages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Produces an assessment report that includes detailed and comprehensive results of a specified assessment run.
		 * Post #X-Amz-Target=InspectorService.GetAssessmentReport
		 * @return {GetAssessmentReportResponse} Success
		 */
		GetAssessmentReport(requestBody: GetAssessmentReportRequest): Observable<GetAssessmentReportResponse> {
			return this.http.post<GetAssessmentReportResponse>(this.baseUri + '#X-Amz-Target=InspectorService.GetAssessmentReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by the preview token. You can obtain the preview token by running the CreateExclusionsPreview API.
		 * Post #X-Amz-Target=InspectorService.GetExclusionsPreview
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetExclusionsPreviewResponse} Success
		 */
		GetExclusionsPreview(maxResults: string, nextToken: string, requestBody: GetExclusionsPreviewRequest): Observable<GetExclusionsPreviewResponse> {
			return this.http.post<GetExclusionsPreviewResponse>(this.baseUri + '#X-Amz-Target=InspectorService.GetExclusionsPreview?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Information about the data that is collected for the specified assessment run.
		 * Post #X-Amz-Target=InspectorService.GetTelemetryMetadata
		 * @return {GetTelemetryMetadataResponse} Success
		 */
		GetTelemetryMetadata(requestBody: GetTelemetryMetadataRequest): Observable<GetTelemetryMetadataResponse> {
			return this.http.post<GetTelemetryMetadataResponse>(this.baseUri + '#X-Amz-Target=InspectorService.GetTelemetryMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.
		 * Post #X-Amz-Target=InspectorService.ListAssessmentRunAgents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentRunAgentsResponse} Success
		 */
		ListAssessmentRunAgents(maxResults: string, nextToken: string, requestBody: ListAssessmentRunAgentsRequest): Observable<ListAssessmentRunAgentsResponse> {
			return this.http.post<ListAssessmentRunAgentsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListAssessmentRunAgents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.
		 * Post #X-Amz-Target=InspectorService.ListAssessmentRuns
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentRunsResponse} Success
		 */
		ListAssessmentRuns(maxResults: string, nextToken: string, requestBody: ListAssessmentRunsRequest): Observable<ListAssessmentRunsResponse> {
			return this.http.post<ListAssessmentRunsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListAssessmentRuns?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the ARNs of the assessment targets within this AWS account. For more information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment Targets</a>.
		 * Post #X-Amz-Target=InspectorService.ListAssessmentTargets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentTargetsResponse} Success
		 */
		ListAssessmentTargets(maxResults: string, nextToken: string, requestBody: ListAssessmentTargetsRequest): Observable<ListAssessmentTargetsResponse> {
			return this.http.post<ListAssessmentTargetsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListAssessmentTargets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.
		 * Post #X-Amz-Target=InspectorService.ListAssessmentTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentTemplatesResponse} Success
		 */
		ListAssessmentTemplates(maxResults: string, nextToken: string, requestBody: ListAssessmentTemplatesRequest): Observable<ListAssessmentTemplatesResponse> {
			return this.http.post<ListAssessmentTemplatesResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListAssessmentTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.
		 * Post #X-Amz-Target=InspectorService.ListEventSubscriptions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEventSubscriptionsResponse} Success
		 */
		ListEventSubscriptions(maxResults: string, nextToken: string, requestBody: ListEventSubscriptionsRequest): Observable<ListEventSubscriptionsResponse> {
			return this.http.post<ListEventSubscriptionsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListEventSubscriptions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List exclusions that are generated by the assessment run.
		 * Post #X-Amz-Target=InspectorService.ListExclusions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListExclusionsResponse} Success
		 */
		ListExclusions(maxResults: string, nextToken: string, requestBody: ListExclusionsRequest): Observable<ListExclusionsResponse> {
			return this.http.post<ListExclusionsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListExclusions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists findings that are generated by the assessment runs that are specified by the ARNs of the assessment runs.
		 * Post #X-Amz-Target=InspectorService.ListFindings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(maxResults: string, nextToken: string, requestBody: ListFindingsRequest): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListFindings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all available Amazon Inspector rules packages.
		 * Post #X-Amz-Target=InspectorService.ListRulesPackages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRulesPackagesResponse} Success
		 */
		ListRulesPackages(maxResults: string, nextToken: string, requestBody: ListRulesPackagesRequest): Observable<ListRulesPackagesResponse> {
			return this.http.post<ListRulesPackagesResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListRulesPackages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags associated with an assessment template.
		 * Post #X-Amz-Target=InspectorService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Previews the agents installed on the EC2 instances that are part of the specified assessment target.
		 * Post #X-Amz-Target=InspectorService.PreviewAgents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {PreviewAgentsResponse} Success
		 */
		PreviewAgents(maxResults: string, nextToken: string, requestBody: PreviewAgentsRequest): Observable<PreviewAgentsResponse> {
			return this.http.post<PreviewAgentsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.PreviewAgents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers the IAM role that grants Amazon Inspector access to AWS Services needed to perform security assessments.
		 * Post #X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole
		 * @return {void} Success
		 */
		RegisterCrossAccountAccessRole(requestBody: RegisterCrossAccountAccessRoleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.
		 * Post #X-Amz-Target=InspectorService.RemoveAttributesFromFindings
		 * @return {RemoveAttributesFromFindingsResponse} Success
		 */
		RemoveAttributesFromFindings(requestBody: RemoveAttributesFromFindingsRequest): Observable<RemoveAttributesFromFindingsResponse> {
			return this.http.post<RemoveAttributesFromFindingsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.RemoveAttributesFromFindings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.
		 * Post #X-Amz-Target=InspectorService.SetTagsForResource
		 * @return {void} Success
		 */
		SetTagsForResource(requestBody: SetTagsForResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.SetTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts the assessment run specified by the ARN of the assessment template. For this API to function properly, you must not exceed the limit of running up to 500 concurrent agents per AWS account.
		 * Post #X-Amz-Target=InspectorService.StartAssessmentRun
		 * @return {StartAssessmentRunResponse} Success
		 */
		StartAssessmentRun(requestBody: StartAssessmentRunRequest): Observable<StartAssessmentRunResponse> {
			return this.http.post<StartAssessmentRunResponse>(this.baseUri + '#X-Amz-Target=InspectorService.StartAssessmentRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the assessment run that is specified by the ARN of the assessment run.
		 * Post #X-Amz-Target=InspectorService.StopAssessmentRun
		 * @return {void} Success
		 */
		StopAssessmentRun(requestBody: StopAssessmentRunRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.StopAssessmentRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
		 * Post #X-Amz-Target=InspectorService.SubscribeToEvent
		 * @return {void} Success
		 */
		SubscribeToEvent(requestBody: SubscribeToEventRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.SubscribeToEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
		 * Post #X-Amz-Target=InspectorService.UnsubscribeFromEvent
		 * @return {void} Success
		 */
		UnsubscribeFromEvent(requestBody: UnsubscribeFromEventRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.UnsubscribeFromEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the assessment target that is specified by the ARN of the assessment target.</p> <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target.</p>
		 * Post #X-Amz-Target=InspectorService.UpdateAssessmentTarget
		 * @return {void} Success
		 */
		UpdateAssessmentTarget(requestBody: UpdateAssessmentTargetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.UpdateAssessmentTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AddAttributesToFindingsX_Amz_Target { InspectorService_AddAttributesToFindings = 0 }

	export enum CreateAssessmentTargetX_Amz_Target { InspectorService_CreateAssessmentTarget = 0 }

	export enum CreateAssessmentTemplateX_Amz_Target { InspectorService_CreateAssessmentTemplate = 0 }

	export enum CreateExclusionsPreviewX_Amz_Target { InspectorService_CreateExclusionsPreview = 0 }

	export enum CreateResourceGroupX_Amz_Target { InspectorService_CreateResourceGroup = 0 }

	export enum DeleteAssessmentRunX_Amz_Target { InspectorService_DeleteAssessmentRun = 0 }

	export enum DeleteAssessmentTargetX_Amz_Target { InspectorService_DeleteAssessmentTarget = 0 }

	export enum DeleteAssessmentTemplateX_Amz_Target { InspectorService_DeleteAssessmentTemplate = 0 }

	export enum DescribeAssessmentRunsX_Amz_Target { InspectorService_DescribeAssessmentRuns = 0 }

	export enum DescribeAssessmentTargetsX_Amz_Target { InspectorService_DescribeAssessmentTargets = 0 }

	export enum DescribeAssessmentTemplatesX_Amz_Target { InspectorService_DescribeAssessmentTemplates = 0 }

	export enum DescribeCrossAccountAccessRoleX_Amz_Target { InspectorService_DescribeCrossAccountAccessRole = 0 }

	export enum DescribeExclusionsX_Amz_Target { InspectorService_DescribeExclusions = 0 }

	export enum DescribeFindingsX_Amz_Target { InspectorService_DescribeFindings = 0 }

	export enum DescribeResourceGroupsX_Amz_Target { InspectorService_DescribeResourceGroups = 0 }

	export enum DescribeRulesPackagesX_Amz_Target { InspectorService_DescribeRulesPackages = 0 }

	export enum GetAssessmentReportX_Amz_Target { InspectorService_GetAssessmentReport = 0 }

	export enum GetExclusionsPreviewX_Amz_Target { InspectorService_GetExclusionsPreview = 0 }

	export enum GetTelemetryMetadataX_Amz_Target { InspectorService_GetTelemetryMetadata = 0 }

	export enum ListAssessmentRunAgentsX_Amz_Target { InspectorService_ListAssessmentRunAgents = 0 }

	export enum ListAssessmentRunsX_Amz_Target { InspectorService_ListAssessmentRuns = 0 }

	export enum ListAssessmentTargetsX_Amz_Target { InspectorService_ListAssessmentTargets = 0 }

	export enum ListAssessmentTemplatesX_Amz_Target { InspectorService_ListAssessmentTemplates = 0 }

	export enum ListEventSubscriptionsX_Amz_Target { InspectorService_ListEventSubscriptions = 0 }

	export enum ListExclusionsX_Amz_Target { InspectorService_ListExclusions = 0 }

	export enum ListFindingsX_Amz_Target { InspectorService_ListFindings = 0 }

	export enum ListRulesPackagesX_Amz_Target { InspectorService_ListRulesPackages = 0 }

	export enum ListTagsForResourceX_Amz_Target { InspectorService_ListTagsForResource = 0 }

	export enum PreviewAgentsX_Amz_Target { InspectorService_PreviewAgents = 0 }

	export enum RegisterCrossAccountAccessRoleX_Amz_Target { InspectorService_RegisterCrossAccountAccessRole = 0 }

	export enum RemoveAttributesFromFindingsX_Amz_Target { InspectorService_RemoveAttributesFromFindings = 0 }

	export enum SetTagsForResourceX_Amz_Target { InspectorService_SetTagsForResource = 0 }

	export enum StartAssessmentRunX_Amz_Target { InspectorService_StartAssessmentRun = 0 }

	export enum StopAssessmentRunX_Amz_Target { InspectorService_StopAssessmentRun = 0 }

	export enum SubscribeToEventX_Amz_Target { InspectorService_SubscribeToEvent = 0 }

	export enum UnsubscribeFromEventX_Amz_Target { InspectorService_UnsubscribeFromEvent = 0 }

	export enum UpdateAssessmentTargetX_Amz_Target { InspectorService_UpdateAssessmentTarget = 0 }

}

