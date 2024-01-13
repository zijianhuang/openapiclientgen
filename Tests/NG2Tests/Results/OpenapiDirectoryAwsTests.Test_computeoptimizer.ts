import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetAutoScalingGroupRecommendationsResponse {
		nextToken?: string | null;
		autoScalingGroupRecommendations?: Array<AutoScalingGroupRecommendation>;
		errors?: Array<GetRecommendationError>;
	}
	export interface GetAutoScalingGroupRecommendationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAutoScalingGroupRecommendationsResponseFormGroup() {
		return new FormGroup<GetAutoScalingGroupRecommendationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Auto Scaling group recommendation. */
	export interface AutoScalingGroupRecommendation {
		accountId?: string | null;
		autoScalingGroupArn?: string | null;
		autoScalingGroupName?: string | null;
		finding?: AutoScalingGroupRecommendationFinding | null;
		utilizationMetrics?: Array<UtilizationMetric>;
		lookBackPeriodInDays?: number | null;

		/** Describes the configuration of an Auto Scaling group. */
		currentConfiguration?: AutoScalingGroupConfiguration;
		recommendationOptions?: Array<AutoScalingGroupRecommendationOption>;
		lastRefreshTimestamp?: Date | null;
	}

	/** Describes an Auto Scaling group recommendation. */
	export interface AutoScalingGroupRecommendationFormProperties {
		accountId: FormControl<string | null | undefined>,
		autoScalingGroupArn: FormControl<string | null | undefined>,
		autoScalingGroupName: FormControl<string | null | undefined>,
		finding: FormControl<AutoScalingGroupRecommendationFinding | null | undefined>,
		lookBackPeriodInDays: FormControl<number | null | undefined>,
		lastRefreshTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAutoScalingGroupRecommendationFormGroup() {
		return new FormGroup<AutoScalingGroupRecommendationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			autoScalingGroupArn: new FormControl<string | null | undefined>(undefined),
			autoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			finding: new FormControl<AutoScalingGroupRecommendationFinding | null | undefined>(undefined),
			lookBackPeriodInDays: new FormControl<number | null | undefined>(undefined),
			lastRefreshTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AutoScalingGroupRecommendationFinding { Underprovisioned = 0, Overprovisioned = 1, Optimized = 2, NotOptimized = 3 }


	/** Describes a utilization metric of a resource, such as an Amazon EC2 instance. */
	export interface UtilizationMetric {
		name?: UtilizationMetricName | null;
		statistic?: UtilizationMetricStatistic | null;
		value?: number | null;
	}

	/** Describes a utilization metric of a resource, such as an Amazon EC2 instance. */
	export interface UtilizationMetricFormProperties {
		name: FormControl<UtilizationMetricName | null | undefined>,
		statistic: FormControl<UtilizationMetricStatistic | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateUtilizationMetricFormGroup() {
		return new FormGroup<UtilizationMetricFormProperties>({
			name: new FormControl<UtilizationMetricName | null | undefined>(undefined),
			statistic: new FormControl<UtilizationMetricStatistic | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UtilizationMetricName { Cpu = 0, Memory = 1 }

	export enum UtilizationMetricStatistic { Maximum = 0, Average = 1 }


	/** Describes the configuration of an Auto Scaling group. */
	export interface AutoScalingGroupConfiguration {
		desiredCapacity?: number | null;
		minSize?: number | null;
		maxSize?: number | null;
		instanceType?: string | null;
	}

	/** Describes the configuration of an Auto Scaling group. */
	export interface AutoScalingGroupConfigurationFormProperties {
		desiredCapacity: FormControl<number | null | undefined>,
		minSize: FormControl<number | null | undefined>,
		maxSize: FormControl<number | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingGroupConfigurationFormGroup() {
		return new FormGroup<AutoScalingGroupConfigurationFormProperties>({
			desiredCapacity: new FormControl<number | null | undefined>(undefined),
			minSize: new FormControl<number | null | undefined>(undefined),
			maxSize: new FormControl<number | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a recommendation option for an Auto Scaling group. */
	export interface AutoScalingGroupRecommendationOption {

		/** Describes the configuration of an Auto Scaling group. */
		configuration?: AutoScalingGroupConfiguration;
		projectedUtilizationMetrics?: Array<UtilizationMetric>;

		/**
		 * Minimum: 0
		 * Maximum: 5
		 */
		performanceRisk?: number | null;
		rank?: number | null;
	}

	/** Describes a recommendation option for an Auto Scaling group. */
	export interface AutoScalingGroupRecommendationOptionFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 5
		 */
		performanceRisk: FormControl<number | null | undefined>,
		rank: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingGroupRecommendationOptionFormGroup() {
		return new FormGroup<AutoScalingGroupRecommendationOptionFormProperties>({
			performanceRisk: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(5)]),
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p> */
	export interface GetRecommendationError {
		identifier?: string | null;
		code?: string | null;
		message?: string | null;
	}

	/** <p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p> */
	export interface GetRecommendationErrorFormProperties {
		identifier: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetRecommendationErrorFormGroup() {
		return new FormGroup<GetRecommendationErrorFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAutoScalingGroupRecommendationsRequest {
		accountIds?: Array<string>;
		autoScalingGroupArns?: Array<string>;
		nextToken?: string | null;
		maxResults?: number | null;
		filters?: Array<Filter>;
	}
	export interface GetAutoScalingGroupRecommendationsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetAutoScalingGroupRecommendationsRequestFormGroup() {
		return new FormGroup<GetAutoScalingGroupRecommendationsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a filter that returns a more specific list of recommendations. */
	export interface Filter {
		name?: FilterName | null;
		values?: Array<string>;
	}

	/** Describes a filter that returns a more specific list of recommendations. */
	export interface FilterFormProperties {
		name: FormControl<FilterName | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<FilterName | null | undefined>(undefined),
		});

	}

	export enum FilterName { Finding = 0, RecommendationSourceType = 1 }

	export interface OptInRequiredException {
	}
	export interface OptInRequiredExceptionFormProperties {
	}
	export function CreateOptInRequiredExceptionFormGroup() {
		return new FormGroup<OptInRequiredExceptionFormProperties>({
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

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
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

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
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

	export interface MissingAuthenticationToken {
	}
	export interface MissingAuthenticationTokenFormProperties {
	}
	export function CreateMissingAuthenticationTokenFormGroup() {
		return new FormGroup<MissingAuthenticationTokenFormProperties>({
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

	export interface GetEC2InstanceRecommendationsResponse {
		nextToken?: string | null;
		instanceRecommendations?: Array<InstanceRecommendation>;
		errors?: Array<GetRecommendationError>;
	}
	export interface GetEC2InstanceRecommendationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEC2InstanceRecommendationsResponseFormGroup() {
		return new FormGroup<GetEC2InstanceRecommendationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon EC2 instance recommendation. */
	export interface InstanceRecommendation {
		instanceArn?: string | null;
		accountId?: string | null;
		instanceName?: string | null;
		currentInstanceType?: string | null;
		finding?: AutoScalingGroupRecommendationFinding | null;
		utilizationMetrics?: Array<UtilizationMetric>;
		lookBackPeriodInDays?: number | null;
		recommendationOptions?: Array<InstanceRecommendationOption>;
		recommendationSources?: Array<RecommendationSource>;
		lastRefreshTimestamp?: Date | null;
	}

	/** Describes an Amazon EC2 instance recommendation. */
	export interface InstanceRecommendationFormProperties {
		instanceArn: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		instanceName: FormControl<string | null | undefined>,
		currentInstanceType: FormControl<string | null | undefined>,
		finding: FormControl<AutoScalingGroupRecommendationFinding | null | undefined>,
		lookBackPeriodInDays: FormControl<number | null | undefined>,
		lastRefreshTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceRecommendationFormGroup() {
		return new FormGroup<InstanceRecommendationFormProperties>({
			instanceArn: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			instanceName: new FormControl<string | null | undefined>(undefined),
			currentInstanceType: new FormControl<string | null | undefined>(undefined),
			finding: new FormControl<AutoScalingGroupRecommendationFinding | null | undefined>(undefined),
			lookBackPeriodInDays: new FormControl<number | null | undefined>(undefined),
			lastRefreshTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes a recommendation option for an Amazon EC2 instance. */
	export interface InstanceRecommendationOption {
		instanceType?: string | null;
		projectedUtilizationMetrics?: Array<UtilizationMetric>;

		/**
		 * Minimum: 0
		 * Maximum: 5
		 */
		performanceRisk?: number | null;
		rank?: number | null;
	}

	/** Describes a recommendation option for an Amazon EC2 instance. */
	export interface InstanceRecommendationOptionFormProperties {
		instanceType: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 5
		 */
		performanceRisk: FormControl<number | null | undefined>,
		rank: FormControl<number | null | undefined>,
	}
	export function CreateInstanceRecommendationOptionFormGroup() {
		return new FormGroup<InstanceRecommendationOptionFormProperties>({
			instanceType: new FormControl<string | null | undefined>(undefined),
			performanceRisk: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(5)]),
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group. */
	export interface RecommendationSource {
		recommendationSourceArn?: string | null;
		recommendationSourceType?: RecommendationSourceRecommendationSourceType | null;
	}

	/** Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group. */
	export interface RecommendationSourceFormProperties {
		recommendationSourceArn: FormControl<string | null | undefined>,
		recommendationSourceType: FormControl<RecommendationSourceRecommendationSourceType | null | undefined>,
	}
	export function CreateRecommendationSourceFormGroup() {
		return new FormGroup<RecommendationSourceFormProperties>({
			recommendationSourceArn: new FormControl<string | null | undefined>(undefined),
			recommendationSourceType: new FormControl<RecommendationSourceRecommendationSourceType | null | undefined>(undefined),
		});

	}

	export enum RecommendationSourceRecommendationSourceType { Ec2Instance = 0, AutoScalingGroup = 1 }

	export interface GetEC2InstanceRecommendationsRequest {
		instanceArns?: Array<string>;
		nextToken?: string | null;
		maxResults?: number | null;
		filters?: Array<Filter>;
		accountIds?: Array<string>;
	}
	export interface GetEC2InstanceRecommendationsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEC2InstanceRecommendationsRequestFormGroup() {
		return new FormGroup<GetEC2InstanceRecommendationsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetEC2RecommendationProjectedMetricsResponse {
		recommendedOptionProjectedMetrics?: Array<RecommendedOptionProjectedMetric>;
	}
	export interface GetEC2RecommendationProjectedMetricsResponseFormProperties {
	}
	export function CreateGetEC2RecommendationProjectedMetricsResponseFormGroup() {
		return new FormGroup<GetEC2RecommendationProjectedMetricsResponseFormProperties>({
		});

	}


	/** Describes a projected utilization metric of a recommendation option. */
	export interface RecommendedOptionProjectedMetric {
		recommendedInstanceType?: string | null;
		rank?: number | null;
		projectedMetrics?: Array<ProjectedMetric>;
	}

	/** Describes a projected utilization metric of a recommendation option. */
	export interface RecommendedOptionProjectedMetricFormProperties {
		recommendedInstanceType: FormControl<string | null | undefined>,
		rank: FormControl<number | null | undefined>,
	}
	export function CreateRecommendedOptionProjectedMetricFormGroup() {
		return new FormGroup<RecommendedOptionProjectedMetricFormProperties>({
			recommendedInstanceType: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a projected utilization metric of a recommendation option, such as an Amazon EC2 instance. */
	export interface ProjectedMetric {
		name?: UtilizationMetricName | null;
		timestamps?: Array<string>;
		values?: Array<number>;
	}

	/** Describes a projected utilization metric of a recommendation option, such as an Amazon EC2 instance. */
	export interface ProjectedMetricFormProperties {
		name: FormControl<UtilizationMetricName | null | undefined>,
	}
	export function CreateProjectedMetricFormGroup() {
		return new FormGroup<ProjectedMetricFormProperties>({
			name: new FormControl<UtilizationMetricName | null | undefined>(undefined),
		});

	}

	export interface GetEC2RecommendationProjectedMetricsRequest {

		/** Required */
		instanceArn: string;

		/** Required */
		stat: UtilizationMetricStatistic;

		/** Required */
		period: number;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;
	}
	export interface GetEC2RecommendationProjectedMetricsRequestFormProperties {

		/** Required */
		instanceArn: FormControl<string | null | undefined>,

		/** Required */
		stat: FormControl<UtilizationMetricStatistic | null | undefined>,

		/** Required */
		period: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetEC2RecommendationProjectedMetricsRequestFormGroup() {
		return new FormGroup<GetEC2RecommendationProjectedMetricsRequestFormProperties>({
			instanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stat: new FormControl<UtilizationMetricStatistic | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEnrollmentStatusResponse {
		status?: GetEnrollmentStatusResponseStatus | null;
		statusReason?: string | null;
		memberAccountsEnrolled?: boolean | null;
	}
	export interface GetEnrollmentStatusResponseFormProperties {
		status: FormControl<GetEnrollmentStatusResponseStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		memberAccountsEnrolled: FormControl<boolean | null | undefined>,
	}
	export function CreateGetEnrollmentStatusResponseFormGroup() {
		return new FormGroup<GetEnrollmentStatusResponseFormProperties>({
			status: new FormControl<GetEnrollmentStatusResponseStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			memberAccountsEnrolled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GetEnrollmentStatusResponseStatus { Active = 0, Inactive = 1, Pending = 2, Failed = 3 }

	export interface GetEnrollmentStatusRequest {
	}
	export interface GetEnrollmentStatusRequestFormProperties {
	}
	export function CreateGetEnrollmentStatusRequestFormGroup() {
		return new FormGroup<GetEnrollmentStatusRequestFormProperties>({
		});

	}

	export interface GetRecommendationSummariesResponse {
		nextToken?: string | null;
		recommendationSummaries?: Array<RecommendationSummary>;
	}
	export interface GetRecommendationSummariesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRecommendationSummariesResponseFormGroup() {
		return new FormGroup<GetRecommendationSummariesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of a recommendation. */
	export interface RecommendationSummary {
		summaries?: Array<Summary>;
		recommendationResourceType?: RecommendationSourceRecommendationSourceType | null;
		accountId?: string | null;
	}

	/** A summary of a recommendation. */
	export interface RecommendationSummaryFormProperties {
		recommendationResourceType: FormControl<RecommendationSourceRecommendationSourceType | null | undefined>,
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationSummaryFormGroup() {
		return new FormGroup<RecommendationSummaryFormProperties>({
			recommendationResourceType: new FormControl<RecommendationSourceRecommendationSourceType | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a recommendation. */
	export interface Summary {
		name?: AutoScalingGroupRecommendationFinding | null;
		value?: number | null;
	}

	/** The summary of a recommendation. */
	export interface SummaryFormProperties {
		name: FormControl<AutoScalingGroupRecommendationFinding | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
			name: new FormControl<AutoScalingGroupRecommendationFinding | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetRecommendationSummariesRequest {
		accountIds?: Array<string>;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface GetRecommendationSummariesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetRecommendationSummariesRequestFormGroup() {
		return new FormGroup<GetRecommendationSummariesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateEnrollmentStatusResponse {
		status?: GetEnrollmentStatusResponseStatus | null;
		statusReason?: string | null;
	}
	export interface UpdateEnrollmentStatusResponseFormProperties {
		status: FormControl<GetEnrollmentStatusResponseStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnrollmentStatusResponseFormGroup() {
		return new FormGroup<UpdateEnrollmentStatusResponseFormProperties>({
			status: new FormControl<GetEnrollmentStatusResponseStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEnrollmentStatusRequest {

		/** Required */
		status: GetEnrollmentStatusResponseStatus;
		includeMemberAccounts?: boolean | null;
	}
	export interface UpdateEnrollmentStatusRequestFormProperties {

		/** Required */
		status: FormControl<GetEnrollmentStatusResponseStatus | null | undefined>,
		includeMemberAccounts: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateEnrollmentStatusRequestFormGroup() {
		return new FormGroup<UpdateEnrollmentStatusRequestFormProperties>({
			status: new FormControl<GetEnrollmentStatusResponseStatus | null | undefined>(undefined, [Validators.required]),
			includeMemberAccounts: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Finding { Underprovisioned = 0, Overprovisioned = 1, Optimized = 2, NotOptimized = 3 }

	export enum MetricStatistic { Maximum = 0, Average = 1 }

	export enum Status { Active = 0, Inactive = 1, Pending = 2, Failed = 3 }

	export enum MetricName { Cpu = 0, Memory = 1 }

	export enum RecommendationSourceType { Ec2Instance = 0, AutoScalingGroup = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Returns Auto Scaling group recommendations.</p> <p>AWS Compute Optimizer currently generates recommendations for Auto Scaling groups that are configured to run instances of the M, C, R, T, and X instance families. The service does not generate recommendations for Auto Scaling groups that have a scaling policy attached to them, or that do not have the same values for desired, minimum, and maximum capacity. In order for Compute Optimizer to analyze your Auto Scaling groups, they must be of a fixed size. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is.html">AWS Compute Optimizer User Guide</a>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations
		 * @return {GetAutoScalingGroupRecommendationsResponse} Success
		 */
		GetAutoScalingGroupRecommendations(requestBody: GetAutoScalingGroupRecommendationsRequest): Observable<GetAutoScalingGroupRecommendationsResponse> {
			return this.http.post<GetAutoScalingGroupRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns Amazon EC2 instance recommendations.</p> <p>AWS Compute Optimizer currently generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) and Amazon EC2 Auto Scaling. It generates recommendations for M, C, R, T, and X instance families. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is.html">AWS Compute Optimizer User Guide</a>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations
		 * @return {GetEC2InstanceRecommendationsResponse} Success
		 */
		GetEC2InstanceRecommendations(requestBody: GetEC2InstanceRecommendationsRequest): Observable<GetEC2InstanceRecommendationsResponse> {
			return this.http.post<GetEC2InstanceRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the projected utilization metrics of Amazon EC2 instance recommendations.
		 * Post #X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics
		 * @return {GetEC2RecommendationProjectedMetricsResponse} Success
		 */
		GetEC2RecommendationProjectedMetrics(requestBody: GetEC2RecommendationProjectedMetricsRequest): Observable<GetEC2RecommendationProjectedMetricsResponse> {
			return this.http.post<GetEC2RecommendationProjectedMetricsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the enrollment (opt in) status of an account to the AWS Compute Optimizer service.</p> <p>If the account is a master account of an organization, this operation also confirms the enrollment status of member accounts within the organization.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus
		 * @return {GetEnrollmentStatusResponse} Success
		 */
		GetEnrollmentStatus(requestBody: GetEnrollmentStatusRequest): Observable<GetEnrollmentStatusResponse> {
			return this.http.post<GetEnrollmentStatusResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the optimization findings for an account.</p> <p>For example, it returns the number of Amazon EC2 instances in an account that are under-provisioned, over-provisioned, or optimized. It also returns the number of Auto Scaling groups in an account that are not optimized, or optimized.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries
		 * @return {GetRecommendationSummariesResponse} Success
		 */
		GetRecommendationSummaries(requestBody: GetRecommendationSummariesRequest): Observable<GetRecommendationSummariesResponse> {
			return this.http.post<GetRecommendationSummariesResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the enrollment (opt in) status of an account to the AWS Compute Optimizer service.</p> <p>If the account is a master account of an organization, this operation can also enroll member accounts within the organization.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus
		 * @return {UpdateEnrollmentStatusResponse} Success
		 */
		UpdateEnrollmentStatus(requestBody: UpdateEnrollmentStatusRequest): Observable<UpdateEnrollmentStatusResponse> {
			return this.http.post<UpdateEnrollmentStatusResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GetAutoScalingGroupRecommendationsX_Amz_Target { 'ComputeOptimizerService.GetAutoScalingGroupRecommendations' = 0 }

	export enum GetEC2InstanceRecommendationsX_Amz_Target { 'ComputeOptimizerService.GetEC2InstanceRecommendations' = 0 }

	export enum GetEC2RecommendationProjectedMetricsX_Amz_Target { 'ComputeOptimizerService.GetEC2RecommendationProjectedMetrics' = 0 }

	export enum GetEnrollmentStatusX_Amz_Target { 'ComputeOptimizerService.GetEnrollmentStatus' = 0 }

	export enum GetRecommendationSummariesX_Amz_Target { 'ComputeOptimizerService.GetRecommendationSummaries' = 0 }

	export enum UpdateEnrollmentStatusX_Amz_Target { 'ComputeOptimizerService.UpdateEnrollmentStatus' = 0 }

}

