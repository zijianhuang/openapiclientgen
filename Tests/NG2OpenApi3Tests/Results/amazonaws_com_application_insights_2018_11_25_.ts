import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddWorkloadResponse {
		WorkloadId?: string;
		WorkloadConfiguration?: WorkloadConfiguration;
	}
	export interface AddWorkloadResponseFormProperties {
		WorkloadId: FormControl<string | null | undefined>,
	}
	export function CreateAddWorkloadResponseFormGroup() {
		return new FormGroup<AddWorkloadResponseFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of the workload. */
	export interface WorkloadConfiguration {
		WorkloadName?: string;
		Tier?: Tier;
		Configuration?: string;
	}

	/** The configuration of the workload. */
	export interface WorkloadConfigurationFormProperties {
		WorkloadName: FormControl<string | null | undefined>,
		Tier: FormControl<Tier | null | undefined>,
		Configuration: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadConfigurationFormGroup() {
		return new FormGroup<WorkloadConfigurationFormProperties>({
			WorkloadName: new FormControl<string | null | undefined>(undefined),
			Tier: new FormControl<Tier | null | undefined>(undefined),
			Configuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Tier { CUSTOM = 'CUSTOM', DEFAULT = 'DEFAULT', DOT_NET_CORE = 'DOT_NET_CORE', DOT_NET_WORKER = 'DOT_NET_WORKER', DOT_NET_WEB_TIER = 'DOT_NET_WEB_TIER', DOT_NET_WEB = 'DOT_NET_WEB', SQL_SERVER = 'SQL_SERVER', SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP = 'SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP', MYSQL = 'MYSQL', POSTGRESQL = 'POSTGRESQL', JAVA_JMX = 'JAVA_JMX', ORACLE = 'ORACLE', SAP_HANA_MULTI_NODE = 'SAP_HANA_MULTI_NODE', SAP_HANA_SINGLE_NODE = 'SAP_HANA_SINGLE_NODE', SAP_HANA_HIGH_AVAILABILITY = 'SAP_HANA_HIGH_AVAILABILITY', SQL_SERVER_FAILOVER_CLUSTER_INSTANCE = 'SQL_SERVER_FAILOVER_CLUSTER_INSTANCE', SHAREPOINT = 'SHAREPOINT', ACTIVE_DIRECTORY = 'ACTIVE_DIRECTORY', SAP_NETWEAVER_STANDARD = 'SAP_NETWEAVER_STANDARD', SAP_NETWEAVER_DISTRIBUTED = 'SAP_NETWEAVER_DISTRIBUTED', SAP_NETWEAVER_HIGH_AVAILABILITY = 'SAP_NETWEAVER_HIGH_AVAILABILITY' }

	export interface AddWorkloadRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;

		/** Required */
		WorkloadConfiguration: WorkloadConfiguration;
	}
	export interface AddWorkloadRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
	}
	export function CreateAddWorkloadRequestFormGroup() {
		return new FormGroup<AddWorkloadRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface CreateApplicationResponse {
		ApplicationInfo?: ApplicationInfo;
	}
	export interface CreateApplicationResponseFormProperties {
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
		});

	}


	/** Describes the status of the application. */
	export interface ApplicationInfo {
		AccountId?: string;
		ResourceGroupName?: string;
		LifeCycle?: string;
		OpsItemSNSTopicArn?: string;
		OpsCenterEnabled?: boolean | null;
		CWEMonitorEnabled?: boolean | null;
		Remarks?: string;
		AutoConfigEnabled?: boolean | null;
		DiscoveryType?: DiscoveryType;
	}

	/** Describes the status of the application. */
	export interface ApplicationInfoFormProperties {
		AccountId: FormControl<string | null | undefined>,
		ResourceGroupName: FormControl<string | null | undefined>,
		LifeCycle: FormControl<string | null | undefined>,
		OpsItemSNSTopicArn: FormControl<string | null | undefined>,
		OpsCenterEnabled: FormControl<boolean | null | undefined>,
		CWEMonitorEnabled: FormControl<boolean | null | undefined>,
		Remarks: FormControl<string | null | undefined>,
		AutoConfigEnabled: FormControl<boolean | null | undefined>,
		DiscoveryType: FormControl<DiscoveryType | null | undefined>,
	}
	export function CreateApplicationInfoFormGroup() {
		return new FormGroup<ApplicationInfoFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
			LifeCycle: new FormControl<string | null | undefined>(undefined),
			OpsItemSNSTopicArn: new FormControl<string | null | undefined>(undefined),
			OpsCenterEnabled: new FormControl<boolean | null | undefined>(undefined),
			CWEMonitorEnabled: new FormControl<boolean | null | undefined>(undefined),
			Remarks: new FormControl<string | null | undefined>(undefined),
			AutoConfigEnabled: new FormControl<boolean | null | undefined>(undefined),
			DiscoveryType: new FormControl<DiscoveryType | null | undefined>(undefined),
		});

	}

	export enum DiscoveryType { RESOURCE_GROUP_BASED = 'RESOURCE_GROUP_BASED', ACCOUNT_BASED = 'ACCOUNT_BASED' }

	export interface CreateApplicationRequest {
		ResourceGroupName?: string;
		OpsCenterEnabled?: boolean | null;
		CWEMonitorEnabled?: boolean | null;
		OpsItemSNSTopicArn?: string;
		Tags?: Array<Tag>;
		AutoConfigEnabled?: boolean | null;
		AutoCreate?: boolean | null;
		GroupingType?: GroupingType;
	}
	export interface CreateApplicationRequestFormProperties {
		ResourceGroupName: FormControl<string | null | undefined>,
		OpsCenterEnabled: FormControl<boolean | null | undefined>,
		CWEMonitorEnabled: FormControl<boolean | null | undefined>,
		OpsItemSNSTopicArn: FormControl<string | null | undefined>,
		AutoConfigEnabled: FormControl<boolean | null | undefined>,
		AutoCreate: FormControl<boolean | null | undefined>,
		GroupingType: FormControl<GroupingType | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
			OpsCenterEnabled: new FormControl<boolean | null | undefined>(undefined),
			CWEMonitorEnabled: new FormControl<boolean | null | undefined>(undefined),
			OpsItemSNSTopicArn: new FormControl<string | null | undefined>(undefined),
			AutoConfigEnabled: new FormControl<boolean | null | undefined>(undefined),
			AutoCreate: new FormControl<boolean | null | undefined>(undefined),
			GroupingType: new FormControl<GroupingType | null | undefined>(undefined),
		});

	}


	/** <p>An object that defines the tags associated with an application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. </p> </li> </ul> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>An object that defines the tags associated with an application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. </p> </li> </ul> */
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

	export enum GroupingType { ACCOUNT_BASED = 'ACCOUNT_BASED' }

	export interface TagsAlreadyExistException {
	}
	export interface TagsAlreadyExistExceptionFormProperties {
	}
	export function CreateTagsAlreadyExistExceptionFormGroup() {
		return new FormGroup<TagsAlreadyExistExceptionFormProperties>({
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

	export interface CreateComponentResponse {
	}
	export interface CreateComponentResponseFormProperties {
	}
	export function CreateCreateComponentResponseFormGroup() {
		return new FormGroup<CreateComponentResponseFormProperties>({
		});

	}

	export interface CreateComponentRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;

		/** Required */
		ResourceList: Array<string>;
	}
	export interface CreateComponentRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentRequestFormGroup() {
		return new FormGroup<CreateComponentRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLogPatternResponse {
		LogPattern?: LogPattern;
		ResourceGroupName?: string;
	}
	export interface CreateLogPatternResponseFormProperties {
		ResourceGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLogPatternResponseFormGroup() {
		return new FormGroup<CreateLogPatternResponseFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
	export interface LogPattern {
		PatternSetName?: string;
		PatternName?: string;
		Pattern?: string;
		Rank?: number | null;
	}

	/** An object that defines the log patterns that belongs to a <code>LogPatternSet</code>. */
	export interface LogPatternFormProperties {
		PatternSetName: FormControl<string | null | undefined>,
		PatternName: FormControl<string | null | undefined>,
		Pattern: FormControl<string | null | undefined>,
		Rank: FormControl<number | null | undefined>,
	}
	export function CreateLogPatternFormGroup() {
		return new FormGroup<LogPatternFormProperties>({
			PatternSetName: new FormControl<string | null | undefined>(undefined),
			PatternName: new FormControl<string | null | undefined>(undefined),
			Pattern: new FormControl<string | null | undefined>(undefined),
			Rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateLogPatternRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		PatternSetName: string;

		/** Required */
		PatternName: string;

		/** Required */
		Pattern: string;

		/** Required */
		Rank: number;
	}
	export interface CreateLogPatternRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		PatternSetName: FormControl<string | null | undefined>,

		/** Required */
		PatternName: FormControl<string | null | undefined>,

		/** Required */
		Pattern: FormControl<string | null | undefined>,

		/** Required */
		Rank: FormControl<number | null | undefined>,
	}
	export function CreateCreateLogPatternRequestFormGroup() {
		return new FormGroup<CreateLogPatternRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatternSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatternName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Rank: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationResponse {
	}
	export interface DeleteApplicationResponseFormProperties {
	}
	export function CreateDeleteApplicationResponseFormGroup() {
		return new FormGroup<DeleteApplicationResponseFormProperties>({
		});

	}

	export interface DeleteApplicationRequest {

		/** Required */
		ResourceGroupName: string;
	}
	export interface DeleteApplicationRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface DeleteComponentResponse {
	}
	export interface DeleteComponentResponseFormProperties {
	}
	export function CreateDeleteComponentResponseFormGroup() {
		return new FormGroup<DeleteComponentResponseFormProperties>({
		});

	}

	export interface DeleteComponentRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
	}
	export interface DeleteComponentRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteComponentRequestFormGroup() {
		return new FormGroup<DeleteComponentRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLogPatternResponse {
	}
	export interface DeleteLogPatternResponseFormProperties {
	}
	export function CreateDeleteLogPatternResponseFormGroup() {
		return new FormGroup<DeleteLogPatternResponseFormProperties>({
		});

	}

	export interface DeleteLogPatternRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		PatternSetName: string;

		/** Required */
		PatternName: string;
	}
	export interface DeleteLogPatternRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		PatternSetName: FormControl<string | null | undefined>,

		/** Required */
		PatternName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLogPatternRequestFormGroup() {
		return new FormGroup<DeleteLogPatternRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatternSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatternName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeApplicationResponse {
		ApplicationInfo?: ApplicationInfo;
	}
	export interface DescribeApplicationResponseFormProperties {
	}
	export function CreateDescribeApplicationResponseFormGroup() {
		return new FormGroup<DescribeApplicationResponseFormProperties>({
		});

	}

	export interface DescribeApplicationRequest {

		/** Required */
		ResourceGroupName: string;
		AccountId?: string;
	}
	export interface DescribeApplicationRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationRequestFormGroup() {
		return new FormGroup<DescribeApplicationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeComponentResponse {

		/** Describes a standalone resource or similarly grouped resources that the application is made up of. */
		ApplicationComponent?: ApplicationComponent;
		ResourceList?: Array<string>;
	}
	export interface DescribeComponentResponseFormProperties {
	}
	export function CreateDescribeComponentResponseFormGroup() {
		return new FormGroup<DescribeComponentResponseFormProperties>({
		});

	}


	/** Describes a standalone resource or similarly grouped resources that the application is made up of. */
	export interface ApplicationComponent {
		ComponentName?: string;
		ComponentRemarks?: string;
		ResourceType?: string;
		OsType?: OsType;
		Tier?: Tier;
		Monitor?: boolean | null;
		DetectedWorkload?: DetectedWorkload;
	}

	/** Describes a standalone resource or similarly grouped resources that the application is made up of. */
	export interface ApplicationComponentFormProperties {
		ComponentName: FormControl<string | null | undefined>,
		ComponentRemarks: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		OsType: FormControl<OsType | null | undefined>,
		Tier: FormControl<Tier | null | undefined>,
		Monitor: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationComponentFormGroup() {
		return new FormGroup<ApplicationComponentFormProperties>({
			ComponentName: new FormControl<string | null | undefined>(undefined),
			ComponentRemarks: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			OsType: new FormControl<OsType | null | undefined>(undefined),
			Tier: new FormControl<Tier | null | undefined>(undefined),
			Monitor: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OsType { WINDOWS = 'WINDOWS', LINUX = 'LINUX' }

	export interface DetectedWorkload {
	}
	export interface DetectedWorkloadFormProperties {
	}
	export function CreateDetectedWorkloadFormGroup() {
		return new FormGroup<DetectedWorkloadFormProperties>({
		});

	}

	export interface DescribeComponentRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
		AccountId?: string;
	}
	export interface DescribeComponentRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComponentRequestFormGroup() {
		return new FormGroup<DescribeComponentRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeComponentConfigurationResponse {
		Monitor?: boolean | null;
		Tier?: Tier;
		ComponentConfiguration?: string;
	}
	export interface DescribeComponentConfigurationResponseFormProperties {
		Monitor: FormControl<boolean | null | undefined>,
		Tier: FormControl<Tier | null | undefined>,
		ComponentConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComponentConfigurationResponseFormGroup() {
		return new FormGroup<DescribeComponentConfigurationResponseFormProperties>({
			Monitor: new FormControl<boolean | null | undefined>(undefined),
			Tier: new FormControl<Tier | null | undefined>(undefined),
			ComponentConfiguration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeComponentConfigurationRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
		AccountId?: string;
	}
	export interface DescribeComponentConfigurationRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComponentConfigurationRequestFormGroup() {
		return new FormGroup<DescribeComponentConfigurationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeComponentConfigurationRecommendationResponse {
		ComponentConfiguration?: string;
	}
	export interface DescribeComponentConfigurationRecommendationResponseFormProperties {
		ComponentConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComponentConfigurationRecommendationResponseFormGroup() {
		return new FormGroup<DescribeComponentConfigurationRecommendationResponseFormProperties>({
			ComponentConfiguration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeComponentConfigurationRecommendationRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;

		/** Required */
		Tier: Tier;
		RecommendationType?: RecommendationType;
	}
	export interface DescribeComponentConfigurationRecommendationRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,

		/** Required */
		Tier: FormControl<Tier | null | undefined>,
		RecommendationType: FormControl<RecommendationType | null | undefined>,
	}
	export function CreateDescribeComponentConfigurationRecommendationRequestFormGroup() {
		return new FormGroup<DescribeComponentConfigurationRecommendationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Tier: new FormControl<Tier | null | undefined>(undefined, [Validators.required]),
			RecommendationType: new FormControl<RecommendationType | null | undefined>(undefined),
		});

	}

	export enum RecommendationType { INFRA_ONLY = 'INFRA_ONLY', WORKLOAD_ONLY = 'WORKLOAD_ONLY', ALL = 'ALL' }

	export interface DescribeLogPatternResponse {
		ResourceGroupName?: string;
		AccountId?: string;
		LogPattern?: LogPattern;
	}
	export interface DescribeLogPatternResponseFormProperties {
		ResourceGroupName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLogPatternResponseFormGroup() {
		return new FormGroup<DescribeLogPatternResponseFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLogPatternRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		PatternSetName: string;

		/** Required */
		PatternName: string;
		AccountId?: string;
	}
	export interface DescribeLogPatternRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		PatternSetName: FormControl<string | null | undefined>,

		/** Required */
		PatternName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLogPatternRequestFormGroup() {
		return new FormGroup<DescribeLogPatternRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatternSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatternName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeObservationResponse {
		Observation?: Observation;
	}
	export interface DescribeObservationResponseFormProperties {
	}
	export function CreateDescribeObservationResponseFormGroup() {
		return new FormGroup<DescribeObservationResponseFormProperties>({
		});

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
		LogFilter?: LogFilter;
		MetricNamespace?: string;
		MetricName?: string;
		Unit?: string;
		Value?: number | null;
		CloudWatchEventId?: string;
		CloudWatchEventSource?: CloudWatchEventSource;
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
		RdsEventCategories?: string;
		RdsEventMessage?: string;
		S3EventName?: string;
		StatesExecutionArn?: string;
		StatesArn?: string;
		StatesStatus?: string;
		StatesInput?: string;
		EbsEvent?: string;
		EbsResult?: string;
		EbsCause?: string;
		EbsRequestId?: string;
		XRayFaultPercent?: number | null;
		XRayThrottlePercent?: number | null;
		XRayErrorPercent?: number | null;
		XRayRequestCount?: number | null;
		XRayRequestAverageLatency?: number | null;
		XRayNodeName?: string;
		XRayNodeType?: string;
	}

	/** Describes an anomaly or error with the application. */
	export interface ObservationFormProperties {
		Id: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		SourceARN: FormControl<string | null | undefined>,
		LogGroup: FormControl<string | null | undefined>,
		LineTime: FormControl<Date | null | undefined>,
		LogText: FormControl<string | null | undefined>,
		LogFilter: FormControl<LogFilter | null | undefined>,
		MetricNamespace: FormControl<string | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
		Unit: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
		CloudWatchEventId: FormControl<string | null | undefined>,
		CloudWatchEventSource: FormControl<CloudWatchEventSource | null | undefined>,
		CloudWatchEventDetailType: FormControl<string | null | undefined>,
		HealthEventArn: FormControl<string | null | undefined>,
		HealthService: FormControl<string | null | undefined>,
		HealthEventTypeCode: FormControl<string | null | undefined>,
		HealthEventTypeCategory: FormControl<string | null | undefined>,
		HealthEventDescription: FormControl<string | null | undefined>,
		CodeDeployDeploymentId: FormControl<string | null | undefined>,
		CodeDeployDeploymentGroup: FormControl<string | null | undefined>,
		CodeDeployState: FormControl<string | null | undefined>,
		CodeDeployApplication: FormControl<string | null | undefined>,
		CodeDeployInstanceGroupId: FormControl<string | null | undefined>,
		Ec2State: FormControl<string | null | undefined>,
		RdsEventCategories: FormControl<string | null | undefined>,
		RdsEventMessage: FormControl<string | null | undefined>,
		S3EventName: FormControl<string | null | undefined>,
		StatesExecutionArn: FormControl<string | null | undefined>,
		StatesArn: FormControl<string | null | undefined>,
		StatesStatus: FormControl<string | null | undefined>,
		StatesInput: FormControl<string | null | undefined>,
		EbsEvent: FormControl<string | null | undefined>,
		EbsResult: FormControl<string | null | undefined>,
		EbsCause: FormControl<string | null | undefined>,
		EbsRequestId: FormControl<string | null | undefined>,
		XRayFaultPercent: FormControl<number | null | undefined>,
		XRayThrottlePercent: FormControl<number | null | undefined>,
		XRayErrorPercent: FormControl<number | null | undefined>,
		XRayRequestCount: FormControl<number | null | undefined>,
		XRayRequestAverageLatency: FormControl<number | null | undefined>,
		XRayNodeName: FormControl<string | null | undefined>,
		XRayNodeType: FormControl<string | null | undefined>,
	}
	export function CreateObservationFormGroup() {
		return new FormGroup<ObservationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			SourceARN: new FormControl<string | null | undefined>(undefined),
			LogGroup: new FormControl<string | null | undefined>(undefined),
			LineTime: new FormControl<Date | null | undefined>(undefined),
			LogText: new FormControl<string | null | undefined>(undefined),
			LogFilter: new FormControl<LogFilter | null | undefined>(undefined),
			MetricNamespace: new FormControl<string | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
			CloudWatchEventId: new FormControl<string | null | undefined>(undefined),
			CloudWatchEventSource: new FormControl<CloudWatchEventSource | null | undefined>(undefined),
			CloudWatchEventDetailType: new FormControl<string | null | undefined>(undefined),
			HealthEventArn: new FormControl<string | null | undefined>(undefined),
			HealthService: new FormControl<string | null | undefined>(undefined),
			HealthEventTypeCode: new FormControl<string | null | undefined>(undefined),
			HealthEventTypeCategory: new FormControl<string | null | undefined>(undefined),
			HealthEventDescription: new FormControl<string | null | undefined>(undefined),
			CodeDeployDeploymentId: new FormControl<string | null | undefined>(undefined),
			CodeDeployDeploymentGroup: new FormControl<string | null | undefined>(undefined),
			CodeDeployState: new FormControl<string | null | undefined>(undefined),
			CodeDeployApplication: new FormControl<string | null | undefined>(undefined),
			CodeDeployInstanceGroupId: new FormControl<string | null | undefined>(undefined),
			Ec2State: new FormControl<string | null | undefined>(undefined),
			RdsEventCategories: new FormControl<string | null | undefined>(undefined),
			RdsEventMessage: new FormControl<string | null | undefined>(undefined),
			S3EventName: new FormControl<string | null | undefined>(undefined),
			StatesExecutionArn: new FormControl<string | null | undefined>(undefined),
			StatesArn: new FormControl<string | null | undefined>(undefined),
			StatesStatus: new FormControl<string | null | undefined>(undefined),
			StatesInput: new FormControl<string | null | undefined>(undefined),
			EbsEvent: new FormControl<string | null | undefined>(undefined),
			EbsResult: new FormControl<string | null | undefined>(undefined),
			EbsCause: new FormControl<string | null | undefined>(undefined),
			EbsRequestId: new FormControl<string | null | undefined>(undefined),
			XRayFaultPercent: new FormControl<number | null | undefined>(undefined),
			XRayThrottlePercent: new FormControl<number | null | undefined>(undefined),
			XRayErrorPercent: new FormControl<number | null | undefined>(undefined),
			XRayRequestCount: new FormControl<number | null | undefined>(undefined),
			XRayRequestAverageLatency: new FormControl<number | null | undefined>(undefined),
			XRayNodeName: new FormControl<string | null | undefined>(undefined),
			XRayNodeType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogFilter { ERROR = 'ERROR', WARN = 'WARN', INFO = 'INFO' }

	export enum CloudWatchEventSource { EC2 = 'EC2', CODE_DEPLOY = 'CODE_DEPLOY', HEALTH = 'HEALTH', RDS = 'RDS' }

	export interface DescribeObservationRequest {

		/** Required */
		ObservationId: string;
		AccountId?: string;
	}
	export interface DescribeObservationRequestFormProperties {

		/** Required */
		ObservationId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeObservationRequestFormGroup() {
		return new FormGroup<DescribeObservationRequestFormProperties>({
			ObservationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProblemResponse {
		Problem?: Problem;
	}
	export interface DescribeProblemResponseFormProperties {
	}
	export function CreateDescribeProblemResponseFormGroup() {
		return new FormGroup<DescribeProblemResponseFormProperties>({
		});

	}


	/** Describes a problem that is detected by correlating observations. */
	export interface Problem {
		Id?: string;
		Title?: string;
		Insights?: string;
		Status?: Status;
		AffectedResource?: string;
		StartTime?: Date;
		EndTime?: Date;
		SeverityLevel?: SeverityLevel;
		AccountId?: string;
		ResourceGroupName?: string;
		Feedback?: Feedback;
		RecurringCount?: number | null;
		LastRecurrenceTime?: Date;
		Visibility?: Visibility;
		ResolutionMethod?: ResolutionMethod;
	}

	/** Describes a problem that is detected by correlating observations. */
	export interface ProblemFormProperties {
		Id: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Insights: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
		AffectedResource: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		SeverityLevel: FormControl<SeverityLevel | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		ResourceGroupName: FormControl<string | null | undefined>,
		RecurringCount: FormControl<number | null | undefined>,
		LastRecurrenceTime: FormControl<Date | null | undefined>,
		Visibility: FormControl<Visibility | null | undefined>,
		ResolutionMethod: FormControl<ResolutionMethod | null | undefined>,
	}
	export function CreateProblemFormGroup() {
		return new FormGroup<ProblemFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Insights: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
			AffectedResource: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			SeverityLevel: new FormControl<SeverityLevel | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
			RecurringCount: new FormControl<number | null | undefined>(undefined),
			LastRecurrenceTime: new FormControl<Date | null | undefined>(undefined),
			Visibility: new FormControl<Visibility | null | undefined>(undefined),
			ResolutionMethod: new FormControl<ResolutionMethod | null | undefined>(undefined),
		});

	}

	export enum Status { IGNORE = 'IGNORE', RESOLVED = 'RESOLVED', PENDING = 'PENDING', RECURRING = 'RECURRING', RECOVERING = 'RECOVERING' }

	export enum SeverityLevel { Informative = 'Informative', Low = 'Low', Medium = 'Medium', High = 'High' }

	export interface Feedback {
	}
	export interface FeedbackFormProperties {
	}
	export function CreateFeedbackFormGroup() {
		return new FormGroup<FeedbackFormProperties>({
		});

	}

	export enum Visibility { IGNORED = 'IGNORED', VISIBLE = 'VISIBLE' }

	export enum ResolutionMethod { MANUAL = 'MANUAL', AUTOMATIC = 'AUTOMATIC', UNRESOLVED = 'UNRESOLVED' }

	export interface DescribeProblemRequest {

		/** Required */
		ProblemId: string;
		AccountId?: string;
	}
	export interface DescribeProblemRequestFormProperties {

		/** Required */
		ProblemId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProblemRequestFormGroup() {
		return new FormGroup<DescribeProblemRequestFormProperties>({
			ProblemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProblemObservationsResponse {
		RelatedObservations?: RelatedObservations;
	}
	export interface DescribeProblemObservationsResponseFormProperties {
	}
	export function CreateDescribeProblemObservationsResponseFormGroup() {
		return new FormGroup<DescribeProblemObservationsResponseFormProperties>({
		});

	}


	/** Describes observations related to the problem. */
	export interface RelatedObservations {
		ObservationList?: Array<Observation>;
	}

	/** Describes observations related to the problem. */
	export interface RelatedObservationsFormProperties {
	}
	export function CreateRelatedObservationsFormGroup() {
		return new FormGroup<RelatedObservationsFormProperties>({
		});

	}

	export interface DescribeProblemObservationsRequest {

		/** Required */
		ProblemId: string;
		AccountId?: string;
	}
	export interface DescribeProblemObservationsRequestFormProperties {

		/** Required */
		ProblemId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProblemObservationsRequestFormGroup() {
		return new FormGroup<DescribeProblemObservationsRequestFormProperties>({
			ProblemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkloadResponse {
		WorkloadId?: string;
		WorkloadRemarks?: string;
		WorkloadConfiguration?: WorkloadConfiguration;
	}
	export interface DescribeWorkloadResponseFormProperties {
		WorkloadId: FormControl<string | null | undefined>,
		WorkloadRemarks: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkloadResponseFormGroup() {
		return new FormGroup<DescribeWorkloadResponseFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined),
			WorkloadRemarks: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkloadRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;

		/** Required */
		WorkloadId: string;
		AccountId?: string;
	}
	export interface DescribeWorkloadRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,

		/** Required */
		WorkloadId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkloadRequestFormGroup() {
		return new FormGroup<DescribeWorkloadRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsResponse {
		ApplicationInfoList?: Array<ApplicationInfo>;
		NextToken?: string;
	}
	export interface ListApplicationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsRequest {
		MaxResults?: number | null;
		NextToken?: string;
		AccountId?: string;
	}
	export interface ListApplicationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentsResponse {
		ApplicationComponentList?: Array<ApplicationComponent>;
		NextToken?: string;
	}
	export interface ListComponentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsResponseFormGroup() {
		return new FormGroup<ListComponentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentsRequest {

		/** Required */
		ResourceGroupName: string;
		MaxResults?: number | null;
		NextToken?: string;
		AccountId?: string;
	}
	export interface ListComponentsRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsRequestFormGroup() {
		return new FormGroup<ListComponentsRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConfigurationHistoryResponse {
		EventList?: Array<ConfigurationEvent>;
		NextToken?: string;
	}
	export interface ListConfigurationHistoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationHistoryResponseFormGroup() {
		return new FormGroup<ListConfigurationHistoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The event information.  */
	export interface ConfigurationEvent {
		ResourceGroupName?: string;
		AccountId?: string;
		MonitoredResourceARN?: string;
		EventStatus?: ConfigurationEventStatus;
		EventResourceType?: ConfigurationEventResourceType;
		EventTime?: Date;
		EventDetail?: string;
		EventResourceName?: string;
	}

	/**  The event information.  */
	export interface ConfigurationEventFormProperties {
		ResourceGroupName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		MonitoredResourceARN: FormControl<string | null | undefined>,
		EventStatus: FormControl<ConfigurationEventStatus | null | undefined>,
		EventResourceType: FormControl<ConfigurationEventResourceType | null | undefined>,
		EventTime: FormControl<Date | null | undefined>,
		EventDetail: FormControl<string | null | undefined>,
		EventResourceName: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationEventFormGroup() {
		return new FormGroup<ConfigurationEventFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			MonitoredResourceARN: new FormControl<string | null | undefined>(undefined),
			EventStatus: new FormControl<ConfigurationEventStatus | null | undefined>(undefined),
			EventResourceType: new FormControl<ConfigurationEventResourceType | null | undefined>(undefined),
			EventTime: new FormControl<Date | null | undefined>(undefined),
			EventDetail: new FormControl<string | null | undefined>(undefined),
			EventResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfigurationEventStatus { INFO = 'INFO', WARN = 'WARN', ERROR = 'ERROR' }

	export enum ConfigurationEventResourceType { CLOUDWATCH_ALARM = 'CLOUDWATCH_ALARM', CLOUDWATCH_LOG = 'CLOUDWATCH_LOG', CLOUDFORMATION = 'CLOUDFORMATION', SSM_ASSOCIATION = 'SSM_ASSOCIATION' }

	export interface ListConfigurationHistoryRequest {
		ResourceGroupName?: string;
		StartTime?: Date;
		EndTime?: Date;
		EventStatus?: ConfigurationEventStatus;
		MaxResults?: number | null;
		NextToken?: string;
		AccountId?: string;
	}
	export interface ListConfigurationHistoryRequestFormProperties {
		ResourceGroupName: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		EventStatus: FormControl<ConfigurationEventStatus | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationHistoryRequestFormGroup() {
		return new FormGroup<ListConfigurationHistoryRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			EventStatus: new FormControl<ConfigurationEventStatus | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLogPatternSetsResponse {
		ResourceGroupName?: string;
		AccountId?: string;
		LogPatternSets?: Array<string>;
		NextToken?: string;
	}
	export interface ListLogPatternSetsResponseFormProperties {
		ResourceGroupName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogPatternSetsResponseFormGroup() {
		return new FormGroup<ListLogPatternSetsResponseFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLogPatternSetsRequest {

		/** Required */
		ResourceGroupName: string;
		MaxResults?: number | null;
		NextToken?: string;
		AccountId?: string;
	}
	export interface ListLogPatternSetsRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListLogPatternSetsRequestFormGroup() {
		return new FormGroup<ListLogPatternSetsRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLogPatternsResponse {
		ResourceGroupName?: string;
		AccountId?: string;
		LogPatterns?: Array<LogPattern>;
		NextToken?: string;
	}
	export interface ListLogPatternsResponseFormProperties {
		ResourceGroupName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogPatternsResponseFormGroup() {
		return new FormGroup<ListLogPatternsResponseFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLogPatternsRequest {

		/** Required */
		ResourceGroupName: string;
		PatternSetName?: string;
		MaxResults?: number | null;
		NextToken?: string;
		AccountId?: string;
	}
	export interface ListLogPatternsRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,
		PatternSetName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListLogPatternsRequestFormGroup() {
		return new FormGroup<ListLogPatternsRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatternSetName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProblemsResponse {
		ProblemList?: Array<Problem>;
		NextToken?: string;
		ResourceGroupName?: string;
		AccountId?: string;
	}
	export interface ListProblemsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ResourceGroupName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListProblemsResponseFormGroup() {
		return new FormGroup<ListProblemsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProblemsRequest {
		AccountId?: string;
		ResourceGroupName?: string;
		StartTime?: Date;
		EndTime?: Date;
		MaxResults?: number | null;
		NextToken?: string;
		ComponentName?: string;
		Visibility?: Visibility;
	}
	export interface ListProblemsRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,
		ResourceGroupName: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ComponentName: FormControl<string | null | undefined>,
		Visibility: FormControl<Visibility | null | undefined>,
	}
	export function CreateListProblemsRequestFormGroup() {
		return new FormGroup<ListProblemsRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ComponentName: new FormControl<string | null | undefined>(undefined),
			Visibility: new FormControl<Visibility | null | undefined>(undefined),
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

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWorkloadsResponse {
		WorkloadList?: Array<Workload>;
		NextToken?: string;
	}
	export interface ListWorkloadsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkloadsResponseFormGroup() {
		return new FormGroup<ListWorkloadsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the workloads on a component. */
	export interface Workload {
		WorkloadId?: string;
		ComponentName?: string;
		WorkloadName?: string;
		Tier?: Tier;
		WorkloadRemarks?: string;
	}

	/** Describes the workloads on a component. */
	export interface WorkloadFormProperties {
		WorkloadId: FormControl<string | null | undefined>,
		ComponentName: FormControl<string | null | undefined>,
		WorkloadName: FormControl<string | null | undefined>,
		Tier: FormControl<Tier | null | undefined>,
		WorkloadRemarks: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadFormGroup() {
		return new FormGroup<WorkloadFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined),
			ComponentName: new FormControl<string | null | undefined>(undefined),
			WorkloadName: new FormControl<string | null | undefined>(undefined),
			Tier: new FormControl<Tier | null | undefined>(undefined),
			WorkloadRemarks: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkloadsRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
		MaxResults?: number | null;
		NextToken?: string;
		AccountId?: string;
	}
	export interface ListWorkloadsRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListWorkloadsRequestFormGroup() {
		return new FormGroup<ListWorkloadsRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveWorkloadResponse {
	}
	export interface RemoveWorkloadResponseFormProperties {
	}
	export function CreateRemoveWorkloadResponseFormGroup() {
		return new FormGroup<RemoveWorkloadResponseFormProperties>({
		});

	}

	export interface RemoveWorkloadRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;

		/** Required */
		WorkloadId: string;
	}
	export interface RemoveWorkloadRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,

		/** Required */
		WorkloadId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveWorkloadRequestFormGroup() {
		return new FormGroup<RemoveWorkloadRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
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

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateApplicationResponse {
		ApplicationInfo?: ApplicationInfo;
	}
	export interface UpdateApplicationResponseFormProperties {
	}
	export function CreateUpdateApplicationResponseFormGroup() {
		return new FormGroup<UpdateApplicationResponseFormProperties>({
		});

	}

	export interface UpdateApplicationRequest {

		/** Required */
		ResourceGroupName: string;
		OpsCenterEnabled?: boolean | null;
		CWEMonitorEnabled?: boolean | null;
		OpsItemSNSTopicArn?: string;
		RemoveSNSTopic?: boolean | null;
		AutoConfigEnabled?: boolean | null;
	}
	export interface UpdateApplicationRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,
		OpsCenterEnabled: FormControl<boolean | null | undefined>,
		CWEMonitorEnabled: FormControl<boolean | null | undefined>,
		OpsItemSNSTopicArn: FormControl<string | null | undefined>,
		RemoveSNSTopic: FormControl<boolean | null | undefined>,
		AutoConfigEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OpsCenterEnabled: new FormControl<boolean | null | undefined>(undefined),
			CWEMonitorEnabled: new FormControl<boolean | null | undefined>(undefined),
			OpsItemSNSTopicArn: new FormControl<string | null | undefined>(undefined),
			RemoveSNSTopic: new FormControl<boolean | null | undefined>(undefined),
			AutoConfigEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateComponentResponse {
	}
	export interface UpdateComponentResponseFormProperties {
	}
	export function CreateUpdateComponentResponseFormGroup() {
		return new FormGroup<UpdateComponentResponseFormProperties>({
		});

	}

	export interface UpdateComponentRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
		NewComponentName?: string;
		ResourceList?: Array<string>;
	}
	export interface UpdateComponentRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
		NewComponentName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComponentRequestFormGroup() {
		return new FormGroup<UpdateComponentRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NewComponentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateComponentConfigurationResponse {
	}
	export interface UpdateComponentConfigurationResponseFormProperties {
	}
	export function CreateUpdateComponentConfigurationResponseFormGroup() {
		return new FormGroup<UpdateComponentConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateComponentConfigurationRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
		Monitor?: boolean | null;
		Tier?: Tier;
		ComponentConfiguration?: string;
		AutoConfigEnabled?: boolean | null;
	}
	export interface UpdateComponentConfigurationRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
		Monitor: FormControl<boolean | null | undefined>,
		Tier: FormControl<Tier | null | undefined>,
		ComponentConfiguration: FormControl<string | null | undefined>,
		AutoConfigEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateComponentConfigurationRequestFormGroup() {
		return new FormGroup<UpdateComponentConfigurationRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Monitor: new FormControl<boolean | null | undefined>(undefined),
			Tier: new FormControl<Tier | null | undefined>(undefined),
			ComponentConfiguration: new FormControl<string | null | undefined>(undefined),
			AutoConfigEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateLogPatternResponse {
		ResourceGroupName?: string;
		LogPattern?: LogPattern;
	}
	export interface UpdateLogPatternResponseFormProperties {
		ResourceGroupName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLogPatternResponseFormGroup() {
		return new FormGroup<UpdateLogPatternResponseFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLogPatternRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		PatternSetName: string;

		/** Required */
		PatternName: string;
		Pattern?: string;
		Rank?: number | null;
	}
	export interface UpdateLogPatternRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		PatternSetName: FormControl<string | null | undefined>,

		/** Required */
		PatternName: FormControl<string | null | undefined>,
		Pattern: FormControl<string | null | undefined>,
		Rank: FormControl<number | null | undefined>,
	}
	export function CreateUpdateLogPatternRequestFormGroup() {
		return new FormGroup<UpdateLogPatternRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatternSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatternName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Pattern: new FormControl<string | null | undefined>(undefined),
			Rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateProblemResponse {
	}
	export interface UpdateProblemResponseFormProperties {
	}
	export function CreateUpdateProblemResponseFormGroup() {
		return new FormGroup<UpdateProblemResponseFormProperties>({
		});

	}

	export interface UpdateProblemRequest {

		/** Required */
		ProblemId: string;
		UpdateStatus?: UpdateStatus;
		Visibility?: Visibility;
	}
	export interface UpdateProblemRequestFormProperties {

		/** Required */
		ProblemId: FormControl<string | null | undefined>,
		UpdateStatus: FormControl<UpdateStatus | null | undefined>,
		Visibility: FormControl<Visibility | null | undefined>,
	}
	export function CreateUpdateProblemRequestFormGroup() {
		return new FormGroup<UpdateProblemRequestFormProperties>({
			ProblemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateStatus: new FormControl<UpdateStatus | null | undefined>(undefined),
			Visibility: new FormControl<Visibility | null | undefined>(undefined),
		});

	}

	export enum UpdateStatus { RESOLVED = 'RESOLVED' }

	export interface UpdateWorkloadResponse {
		WorkloadId?: string;
		WorkloadConfiguration?: WorkloadConfiguration;
	}
	export interface UpdateWorkloadResponseFormProperties {
		WorkloadId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkloadResponseFormGroup() {
		return new FormGroup<UpdateWorkloadResponseFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkloadRequest {

		/** Required */
		ResourceGroupName: string;

		/** Required */
		ComponentName: string;
		WorkloadId?: string;

		/** Required */
		WorkloadConfiguration: WorkloadConfiguration;
	}
	export interface UpdateWorkloadRequestFormProperties {

		/** Required */
		ResourceGroupName: FormControl<string | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
		WorkloadId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkloadRequestFormGroup() {
		return new FormGroup<UpdateWorkloadRequestFormProperties>({
			ResourceGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkloadId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkloadMetaData {
	}
	export interface WorkloadMetaDataFormProperties {
	}
	export function CreateWorkloadMetaDataFormGroup() {
		return new FormGroup<WorkloadMetaDataFormProperties>({
		});

	}

	export enum FeedbackValue { NOT_SPECIFIED = 'NOT_SPECIFIED', USEFUL = 'USEFUL', NOT_USEFUL = 'NOT_USEFUL' }

	export enum FeedbackKey { INSIGHTS_FEEDBACK = 'INSIGHTS_FEEDBACK' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds a workload to a component. Each component can have at most five workloads.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.AddWorkload
		 * @return {AddWorkloadResponse} Success
		 */
		AddWorkload(requestBody: AddWorkloadRequest): Observable<AddWorkloadResponse> {
			return this.http.post<AddWorkloadResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.AddWorkload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Describes a workload and its configuration.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.DescribeWorkload
		 * @return {DescribeWorkloadResponse} Success
		 */
		DescribeWorkload(requestBody: DescribeWorkloadRequest): Observable<DescribeWorkloadResponse> {
			return this.http.post<DescribeWorkloadResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.DescribeWorkload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the IDs of the applications that you are monitoring.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListApplications
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListApplicationsRequest): Observable<ListApplicationsResponse> {
			return this.http.post<ListApplicationsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListApplications?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the auto-grouped, standalone, and custom components of the application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListComponents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListComponentsResponse} Success
		 */
		ListComponents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListComponentsRequest): Observable<ListComponentsResponse> {
			return this.http.post<ListComponentsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListComponents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConfigurationHistoryResponse} Success
		 */
		ListConfigurationHistory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListConfigurationHistoryRequest): Observable<ListConfigurationHistoryResponse> {
			return this.http.post<ListConfigurationHistoryResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the log pattern sets in the specific application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLogPatternSetsResponse} Success
		 */
		ListLogPatternSets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLogPatternSetsRequest): Observable<ListLogPatternSetsResponse> {
			return this.http.post<ListLogPatternSetsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the log patterns in the specific log <code>LogPatternSet</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLogPatternsResponse} Success
		 */
		ListLogPatterns(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLogPatternsRequest): Observable<ListLogPatternsResponse> {
			return this.http.post<ListLogPatternsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the problems with your application.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListProblems
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProblemsResponse} Success
		 */
		ListProblems(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProblemsRequest): Observable<ListProblemsResponse> {
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
		 * Lists the workloads that are configured on a given component.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.ListWorkloads
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkloadsResponse} Success
		 */
		ListWorkloads(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWorkloadsRequest): Observable<ListWorkloadsResponse> {
			return this.http.post<ListWorkloadsResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.ListWorkloads?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove workload from a component.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.RemoveWorkload
		 * @return {RemoveWorkloadResponse} Success
		 */
		RemoveWorkload(requestBody: RemoveWorkloadRequest): Observable<RemoveWorkloadResponse> {
			return this.http.post<RemoveWorkloadResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.RemoveWorkload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

		/**
		 * Updates the visibility of the problem or specifies the problem as <code>RESOLVED</code>.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UpdateProblem
		 * @return {UpdateProblemResponse} Success
		 */
		UpdateProblem(requestBody: UpdateProblemRequest): Observable<UpdateProblemResponse> {
			return this.http.post<UpdateProblemResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UpdateProblem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a workload to a component. Each component can have at most five workloads.
		 * Post #X-Amz-Target=EC2WindowsBarleyService.UpdateWorkload
		 * @return {UpdateWorkloadResponse} Success
		 */
		UpdateWorkload(requestBody: UpdateWorkloadRequest): Observable<UpdateWorkloadResponse> {
			return this.http.post<UpdateWorkloadResponse>(this.baseUri + '#X-Amz-Target=EC2WindowsBarleyService.UpdateWorkload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddWorkloadX_Amz_Target { 'EC2WindowsBarleyService.AddWorkload' = 'EC2WindowsBarleyService.AddWorkload' }

	export enum CreateApplicationX_Amz_Target { 'EC2WindowsBarleyService.CreateApplication' = 'EC2WindowsBarleyService.CreateApplication' }

	export enum CreateComponentX_Amz_Target { 'EC2WindowsBarleyService.CreateComponent' = 'EC2WindowsBarleyService.CreateComponent' }

	export enum CreateLogPatternX_Amz_Target { 'EC2WindowsBarleyService.CreateLogPattern' = 'EC2WindowsBarleyService.CreateLogPattern' }

	export enum DeleteApplicationX_Amz_Target { 'EC2WindowsBarleyService.DeleteApplication' = 'EC2WindowsBarleyService.DeleteApplication' }

	export enum DeleteComponentX_Amz_Target { 'EC2WindowsBarleyService.DeleteComponent' = 'EC2WindowsBarleyService.DeleteComponent' }

	export enum DeleteLogPatternX_Amz_Target { 'EC2WindowsBarleyService.DeleteLogPattern' = 'EC2WindowsBarleyService.DeleteLogPattern' }

	export enum DescribeApplicationX_Amz_Target { 'EC2WindowsBarleyService.DescribeApplication' = 'EC2WindowsBarleyService.DescribeApplication' }

	export enum DescribeComponentX_Amz_Target { 'EC2WindowsBarleyService.DescribeComponent' = 'EC2WindowsBarleyService.DescribeComponent' }

	export enum DescribeComponentConfigurationX_Amz_Target { 'EC2WindowsBarleyService.DescribeComponentConfiguration' = 'EC2WindowsBarleyService.DescribeComponentConfiguration' }

	export enum DescribeComponentConfigurationRecommendationX_Amz_Target { 'EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation' = 'EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation' }

	export enum DescribeLogPatternX_Amz_Target { 'EC2WindowsBarleyService.DescribeLogPattern' = 'EC2WindowsBarleyService.DescribeLogPattern' }

	export enum DescribeObservationX_Amz_Target { 'EC2WindowsBarleyService.DescribeObservation' = 'EC2WindowsBarleyService.DescribeObservation' }

	export enum DescribeProblemX_Amz_Target { 'EC2WindowsBarleyService.DescribeProblem' = 'EC2WindowsBarleyService.DescribeProblem' }

	export enum DescribeProblemObservationsX_Amz_Target { 'EC2WindowsBarleyService.DescribeProblemObservations' = 'EC2WindowsBarleyService.DescribeProblemObservations' }

	export enum DescribeWorkloadX_Amz_Target { 'EC2WindowsBarleyService.DescribeWorkload' = 'EC2WindowsBarleyService.DescribeWorkload' }

	export enum ListApplicationsX_Amz_Target { 'EC2WindowsBarleyService.ListApplications' = 'EC2WindowsBarleyService.ListApplications' }

	export enum ListComponentsX_Amz_Target { 'EC2WindowsBarleyService.ListComponents' = 'EC2WindowsBarleyService.ListComponents' }

	export enum ListConfigurationHistoryX_Amz_Target { 'EC2WindowsBarleyService.ListConfigurationHistory' = 'EC2WindowsBarleyService.ListConfigurationHistory' }

	export enum ListLogPatternSetsX_Amz_Target { 'EC2WindowsBarleyService.ListLogPatternSets' = 'EC2WindowsBarleyService.ListLogPatternSets' }

	export enum ListLogPatternsX_Amz_Target { 'EC2WindowsBarleyService.ListLogPatterns' = 'EC2WindowsBarleyService.ListLogPatterns' }

	export enum ListProblemsX_Amz_Target { 'EC2WindowsBarleyService.ListProblems' = 'EC2WindowsBarleyService.ListProblems' }

	export enum ListTagsForResourceX_Amz_Target { 'EC2WindowsBarleyService.ListTagsForResource' = 'EC2WindowsBarleyService.ListTagsForResource' }

	export enum ListWorkloadsX_Amz_Target { 'EC2WindowsBarleyService.ListWorkloads' = 'EC2WindowsBarleyService.ListWorkloads' }

	export enum RemoveWorkloadX_Amz_Target { 'EC2WindowsBarleyService.RemoveWorkload' = 'EC2WindowsBarleyService.RemoveWorkload' }

	export enum TagResourceX_Amz_Target { 'EC2WindowsBarleyService.TagResource' = 'EC2WindowsBarleyService.TagResource' }

	export enum UntagResourceX_Amz_Target { 'EC2WindowsBarleyService.UntagResource' = 'EC2WindowsBarleyService.UntagResource' }

	export enum UpdateApplicationX_Amz_Target { 'EC2WindowsBarleyService.UpdateApplication' = 'EC2WindowsBarleyService.UpdateApplication' }

	export enum UpdateComponentX_Amz_Target { 'EC2WindowsBarleyService.UpdateComponent' = 'EC2WindowsBarleyService.UpdateComponent' }

	export enum UpdateComponentConfigurationX_Amz_Target { 'EC2WindowsBarleyService.UpdateComponentConfiguration' = 'EC2WindowsBarleyService.UpdateComponentConfiguration' }

	export enum UpdateLogPatternX_Amz_Target { 'EC2WindowsBarleyService.UpdateLogPattern' = 'EC2WindowsBarleyService.UpdateLogPattern' }

	export enum UpdateProblemX_Amz_Target { 'EC2WindowsBarleyService.UpdateProblem' = 'EC2WindowsBarleyService.UpdateProblem' }

	export enum UpdateWorkloadX_Amz_Target { 'EC2WindowsBarleyService.UpdateWorkload' = 'EC2WindowsBarleyService.UpdateWorkload' }

}

