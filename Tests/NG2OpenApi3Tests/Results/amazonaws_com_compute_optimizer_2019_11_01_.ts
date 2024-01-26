import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteRecommendationPreferencesResponse {
	}
	export interface DeleteRecommendationPreferencesResponseFormProperties {
	}
	export function CreateDeleteRecommendationPreferencesResponseFormGroup() {
		return new FormGroup<DeleteRecommendationPreferencesResponseFormProperties>({
		});

	}

	export interface DeleteRecommendationPreferencesRequest {

		/** Required */
		resourceType: ResourceType;
		scope?: Scope;

		/** Required */
		recommendationPreferenceNames: Array<RecommendationPreferenceName>;
	}
	export interface DeleteRecommendationPreferencesRequestFormProperties {

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateDeleteRecommendationPreferencesRequestFormGroup() {
		return new FormGroup<DeleteRecommendationPreferencesRequestFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceType { Ec2Instance = 0, AutoScalingGroup = 1, EbsVolume = 2, LambdaFunction = 3, NotApplicable = 4, EcsService = 5 }


	/** <p>Describes the scope of a recommendation preference.</p> <p>Recommendation preferences can be created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p> <note> <p>You cannot create recommendation preferences for Auto Scaling groups at the organization and account levels. You can create recommendation preferences for Auto Scaling groups only at the resource level by specifying a scope name of <code>ResourceArn</code> and a scope value of the Auto Scaling group Amazon Resource Name (ARN). This will configure the preference for all instances that are part of the specified Auto Scaling group. You also cannot create recommendation preferences at the resource level for instances that are part of an Auto Scaling group. You can create recommendation preferences at the resource level only for standalone instances.</p> </note> */
	export interface Scope {
		name?: ScopeName;
		value?: string;
	}

	/** <p>Describes the scope of a recommendation preference.</p> <p>Recommendation preferences can be created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p> <note> <p>You cannot create recommendation preferences for Auto Scaling groups at the organization and account levels. You can create recommendation preferences for Auto Scaling groups only at the resource level by specifying a scope name of <code>ResourceArn</code> and a scope value of the Auto Scaling group Amazon Resource Name (ARN). This will configure the preference for all instances that are part of the specified Auto Scaling group. You also cannot create recommendation preferences at the resource level for instances that are part of an Auto Scaling group. You can create recommendation preferences at the resource level only for standalone instances.</p> </note> */
	export interface ScopeFormProperties {
		name: FormControl<ScopeName | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateScopeFormGroup() {
		return new FormGroup<ScopeFormProperties>({
			name: new FormControl<ScopeName | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScopeName { Organization = 0, AccountId = 1, ResourceArn = 2 }

	export enum RecommendationPreferenceName { EnhancedInfrastructureMetrics = 0, InferredWorkloadTypes = 1, ExternalMetricsPreference = 2 }

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

	export interface DescribeRecommendationExportJobsResponse {
		recommendationExportJobs?: Array<RecommendationExportJob>;
		nextToken?: string;
	}
	export interface DescribeRecommendationExportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecommendationExportJobsResponseFormGroup() {
		return new FormGroup<DescribeRecommendationExportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a recommendation export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your recommendation export jobs.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations.</p> */
	export interface RecommendationExportJob {
		jobId?: string;
		destination?: ExportDestination;
		resourceType?: ResourceType;
		status?: JobStatus;
		creationTimestamp?: Date;
		lastUpdatedTimestamp?: Date;
		failureReason?: string;
	}

	/** <p>Describes a recommendation export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your recommendation export jobs.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations.</p> */
	export interface RecommendationExportJobFormProperties {
		jobId: FormControl<string | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		status: FormControl<JobStatus | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
		lastUpdatedTimestamp: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationExportJobFormGroup() {
		return new FormGroup<RecommendationExportJobFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			status: new FormControl<JobStatus | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the destination of the recommendations export and metadata files. */
	export interface ExportDestination {
		s3?: S3Destination;
	}

	/** Describes the destination of the recommendations export and metadata files. */
	export interface ExportDestinationFormProperties {
	}
	export function CreateExportDestinationFormGroup() {
		return new FormGroup<ExportDestinationFormProperties>({
		});

	}


	/** Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file. */
	export interface S3Destination {
		bucket?: string;
		key?: string;
		metadataKey?: string;
	}

	/** Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file. */
	export interface S3DestinationFormProperties {
		bucket: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		metadataKey: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationFormGroup() {
		return new FormGroup<S3DestinationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			metadataKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobStatus { Queued = 0, InProgress = 1, Complete = 2, Failed = 3 }

	export interface DescribeRecommendationExportJobsRequest {
		jobIds?: Array<string>;
		filters?: Array<JobFilter>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeRecommendationExportJobsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeRecommendationExportJobsRequestFormGroup() {
		return new FormGroup<DescribeRecommendationExportJobsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Describes a filter that returns a more specific list of recommendation export jobs. Use this filter with the <a>DescribeRecommendationExportJobs</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> */
	export interface JobFilter {
		name?: JobFilterName;
		values?: Array<string>;
	}

	/** <p>Describes a filter that returns a more specific list of recommendation export jobs. Use this filter with the <a>DescribeRecommendationExportJobs</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> */
	export interface JobFilterFormProperties {
		name: FormControl<JobFilterName | null | undefined>,
	}
	export function CreateJobFilterFormGroup() {
		return new FormGroup<JobFilterFormProperties>({
			name: new FormControl<JobFilterName | null | undefined>(undefined),
		});

	}

	export enum JobFilterName { ResourceType = 0, JobStatus = 1 }

	export interface ExportAutoScalingGroupRecommendationsResponse {
		jobId?: string;
		s3Destination?: S3Destination;
	}
	export interface ExportAutoScalingGroupRecommendationsResponseFormProperties {
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateExportAutoScalingGroupRecommendationsResponseFormGroup() {
		return new FormGroup<ExportAutoScalingGroupRecommendationsResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportAutoScalingGroupRecommendationsRequest {
		accountIds?: Array<string>;
		filters?: Array<Filter>;
		fieldsToExport?: Array<ExportableAutoScalingGroupField>;

		/** Required */
		s3DestinationConfig: S3DestinationConfig;
		fileFormat?: FileFormat;
		includeMemberAccounts?: boolean | null;
		recommendationPreferences?: RecommendationPreferences;
	}
	export interface ExportAutoScalingGroupRecommendationsRequestFormProperties {
		fileFormat: FormControl<FileFormat | null | undefined>,
		includeMemberAccounts: FormControl<boolean | null | undefined>,
	}
	export function CreateExportAutoScalingGroupRecommendationsRequestFormGroup() {
		return new FormGroup<ExportAutoScalingGroupRecommendationsRequestFormProperties>({
			fileFormat: new FormControl<FileFormat | null | undefined>(undefined),
			includeMemberAccounts: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes a filter that returns a more specific list of recommendations. Use this filter with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action.</p> */
	export interface Filter {
		name?: FilterName;
		values?: Array<string>;
	}

	/** <p>Describes a filter that returns a more specific list of recommendations. Use this filter with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action.</p> */
	export interface FilterFormProperties {
		name: FormControl<FilterName | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<FilterName | null | undefined>(undefined),
		});

	}

	export enum FilterName { Finding = 0, FindingReasonCodes = 1, RecommendationSourceType = 2, InferredWorkloadTypes = 3 }

	export enum ExportableAutoScalingGroupField { AccountId = 0, AutoScalingGroupArn = 1, AutoScalingGroupName = 2, Finding = 3, UtilizationMetricsCpuMaximum = 4, UtilizationMetricsMemoryMaximum = 5, UtilizationMetricsEbsReadOpsPerSecondMaximum = 6, UtilizationMetricsEbsWriteOpsPerSecondMaximum = 7, UtilizationMetricsEbsReadBytesPerSecondMaximum = 8, UtilizationMetricsEbsWriteBytesPerSecondMaximum = 9, UtilizationMetricsDiskReadOpsPerSecondMaximum = 10, UtilizationMetricsDiskWriteOpsPerSecondMaximum = 11, UtilizationMetricsDiskReadBytesPerSecondMaximum = 12, UtilizationMetricsDiskWriteBytesPerSecondMaximum = 13, UtilizationMetricsNetworkInBytesPerSecondMaximum = 14, UtilizationMetricsNetworkOutBytesPerSecondMaximum = 15, UtilizationMetricsNetworkPacketsInPerSecondMaximum = 16, UtilizationMetricsNetworkPacketsOutPerSecondMaximum = 17, LookbackPeriodInDays = 18, CurrentConfigurationInstanceType = 19, CurrentConfigurationDesiredCapacity = 20, CurrentConfigurationMinSize = 21, CurrentConfigurationMaxSize = 22, CurrentOnDemandPrice = 23, CurrentStandardOneYearNoUpfrontReservedPrice = 24, CurrentStandardThreeYearNoUpfrontReservedPrice = 25, CurrentVCpus = 26, CurrentMemory = 27, CurrentStorage = 28, CurrentNetwork = 29, RecommendationOptionsConfigurationInstanceType = 30, RecommendationOptionsConfigurationDesiredCapacity = 31, RecommendationOptionsConfigurationMinSize = 32, RecommendationOptionsConfigurationMaxSize = 33, RecommendationOptionsProjectedUtilizationMetricsCpuMaximum = 34, RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum = 35, RecommendationOptionsPerformanceRisk = 36, RecommendationOptionsOnDemandPrice = 37, RecommendationOptionsStandardOneYearNoUpfrontReservedPrice = 38, RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice = 39, RecommendationOptionsVcpus = 40, RecommendationOptionsMemory = 41, RecommendationOptionsStorage = 42, RecommendationOptionsNetwork = 43, LastRefreshTimestamp = 44, CurrentPerformanceRisk = 45, RecommendationOptionsSavingsOpportunityPercentage = 46, RecommendationOptionsEstimatedMonthlySavingsCurrency = 47, RecommendationOptionsEstimatedMonthlySavingsValue = 48, EffectiveRecommendationPreferencesCpuVendorArchitectures = 49, EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics = 50, EffectiveRecommendationPreferencesInferredWorkloadTypes = 51, InferredWorkloadTypes = 52, RecommendationOptionsMigrationEffort = 53 }


	/** <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p> */
	export interface S3DestinationConfig {
		bucket?: string;
		keyPrefix?: string;
	}

	/** <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p> */
	export interface S3DestinationConfigFormProperties {
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationConfigFormGroup() {
		return new FormGroup<S3DestinationConfigFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileFormat { Csv = 0 }


	/** Describes the recommendation preferences to return in the response of a <a>GetAutoScalingGroupRecommendations</a>, <a>GetEC2InstanceRecommendations</a>, and <a>GetEC2RecommendationProjectedMetrics</a> request. */
	export interface RecommendationPreferences {
		cpuVendorArchitectures?: Array<CpuVendorArchitecture>;
	}

	/** Describes the recommendation preferences to return in the response of a <a>GetAutoScalingGroupRecommendations</a>, <a>GetEC2InstanceRecommendations</a>, and <a>GetEC2RecommendationProjectedMetrics</a> request. */
	export interface RecommendationPreferencesFormProperties {
	}
	export function CreateRecommendationPreferencesFormGroup() {
		return new FormGroup<RecommendationPreferencesFormProperties>({
		});

	}

	export enum CpuVendorArchitecture { AWS_ARM64 = 0, CURRENT = 1 }

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ExportEBSVolumeRecommendationsResponse {
		jobId?: string;

		/** Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file. */
		s3Destination?: S3Destination;
	}
	export interface ExportEBSVolumeRecommendationsResponseFormProperties {
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateExportEBSVolumeRecommendationsResponseFormGroup() {
		return new FormGroup<ExportEBSVolumeRecommendationsResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportEBSVolumeRecommendationsRequest {
		accountIds?: Array<string>;
		filters?: Array<EBSFilter>;
		fieldsToExport?: Array<ExportableVolumeField>;

		/**
		 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Required
		 */
		s3DestinationConfig: S3DestinationConfig;
		fileFormat?: FileFormat;
		includeMemberAccounts?: boolean | null;
	}
	export interface ExportEBSVolumeRecommendationsRequestFormProperties {
		fileFormat: FormControl<FileFormat | null | undefined>,
		includeMemberAccounts: FormControl<boolean | null | undefined>,
	}
	export function CreateExportEBSVolumeRecommendationsRequestFormGroup() {
		return new FormGroup<ExportEBSVolumeRecommendationsRequestFormProperties>({
			fileFormat: new FormControl<FileFormat | null | undefined>(undefined),
			includeMemberAccounts: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes a filter that returns a more specific list of Amazon Elastic Block Store (Amazon EBS) volume recommendations. Use this filter with the <a>GetEBSVolumeRecommendations</a> action.</p> <p>You can use <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> */
	export interface EBSFilter {
		name?: EBSFilterName;
		values?: Array<string>;
	}

	/** <p>Describes a filter that returns a more specific list of Amazon Elastic Block Store (Amazon EBS) volume recommendations. Use this filter with the <a>GetEBSVolumeRecommendations</a> action.</p> <p>You can use <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> */
	export interface EBSFilterFormProperties {
		name: FormControl<EBSFilterName | null | undefined>,
	}
	export function CreateEBSFilterFormGroup() {
		return new FormGroup<EBSFilterFormProperties>({
			name: new FormControl<EBSFilterName | null | undefined>(undefined),
		});

	}

	export enum EBSFilterName { Finding = 0 }

	export enum ExportableVolumeField { AccountId = 0, VolumeArn = 1, Finding = 2, UtilizationMetricsVolumeReadOpsPerSecondMaximum = 3, UtilizationMetricsVolumeWriteOpsPerSecondMaximum = 4, UtilizationMetricsVolumeReadBytesPerSecondMaximum = 5, UtilizationMetricsVolumeWriteBytesPerSecondMaximum = 6, LookbackPeriodInDays = 7, CurrentConfigurationVolumeType = 8, CurrentConfigurationVolumeBaselineIOPS = 9, CurrentConfigurationVolumeBaselineThroughput = 10, CurrentConfigurationVolumeBurstIOPS = 11, CurrentConfigurationVolumeBurstThroughput = 12, CurrentConfigurationVolumeSize = 13, CurrentMonthlyPrice = 14, RecommendationOptionsConfigurationVolumeType = 15, RecommendationOptionsConfigurationVolumeBaselineIOPS = 16, RecommendationOptionsConfigurationVolumeBaselineThroughput = 17, RecommendationOptionsConfigurationVolumeBurstIOPS = 18, RecommendationOptionsConfigurationVolumeBurstThroughput = 19, RecommendationOptionsConfigurationVolumeSize = 20, RecommendationOptionsMonthlyPrice = 21, RecommendationOptionsPerformanceRisk = 22, LastRefreshTimestamp = 23, CurrentPerformanceRisk = 24, RecommendationOptionsSavingsOpportunityPercentage = 25, RecommendationOptionsEstimatedMonthlySavingsCurrency = 26, RecommendationOptionsEstimatedMonthlySavingsValue = 27, RootVolume = 28, Tags = 29 }

	export interface ExportEC2InstanceRecommendationsResponse {
		jobId?: string;
		s3Destination?: S3Destination;
	}
	export interface ExportEC2InstanceRecommendationsResponseFormProperties {
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateExportEC2InstanceRecommendationsResponseFormGroup() {
		return new FormGroup<ExportEC2InstanceRecommendationsResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportEC2InstanceRecommendationsRequest {
		accountIds?: Array<string>;
		filters?: Array<Filter>;
		fieldsToExport?: Array<ExportableInstanceField>;

		/** Required */
		s3DestinationConfig: S3DestinationConfig;
		fileFormat?: FileFormat;
		includeMemberAccounts?: boolean | null;
		recommendationPreferences?: RecommendationPreferences;
	}
	export interface ExportEC2InstanceRecommendationsRequestFormProperties {
		fileFormat: FormControl<FileFormat | null | undefined>,
		includeMemberAccounts: FormControl<boolean | null | undefined>,
	}
	export function CreateExportEC2InstanceRecommendationsRequestFormGroup() {
		return new FormGroup<ExportEC2InstanceRecommendationsRequestFormProperties>({
			fileFormat: new FormControl<FileFormat | null | undefined>(undefined),
			includeMemberAccounts: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ExportableInstanceField { AccountId = 0, InstanceArn = 1, InstanceName = 2, Finding = 3, FindingReasonCodes = 4, LookbackPeriodInDays = 5, CurrentInstanceType = 6, UtilizationMetricsCpuMaximum = 7, UtilizationMetricsMemoryMaximum = 8, UtilizationMetricsEbsReadOpsPerSecondMaximum = 9, UtilizationMetricsEbsWriteOpsPerSecondMaximum = 10, UtilizationMetricsEbsReadBytesPerSecondMaximum = 11, UtilizationMetricsEbsWriteBytesPerSecondMaximum = 12, UtilizationMetricsDiskReadOpsPerSecondMaximum = 13, UtilizationMetricsDiskWriteOpsPerSecondMaximum = 14, UtilizationMetricsDiskReadBytesPerSecondMaximum = 15, UtilizationMetricsDiskWriteBytesPerSecondMaximum = 16, UtilizationMetricsNetworkInBytesPerSecondMaximum = 17, UtilizationMetricsNetworkOutBytesPerSecondMaximum = 18, UtilizationMetricsNetworkPacketsInPerSecondMaximum = 19, UtilizationMetricsNetworkPacketsOutPerSecondMaximum = 20, CurrentOnDemandPrice = 21, CurrentStandardOneYearNoUpfrontReservedPrice = 22, CurrentStandardThreeYearNoUpfrontReservedPrice = 23, CurrentVCpus = 24, CurrentMemory = 25, CurrentStorage = 26, CurrentNetwork = 27, RecommendationOptionsInstanceType = 28, RecommendationOptionsProjectedUtilizationMetricsCpuMaximum = 29, RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum = 30, RecommendationOptionsPlatformDifferences = 31, RecommendationOptionsPerformanceRisk = 32, RecommendationOptionsVcpus = 33, RecommendationOptionsMemory = 34, RecommendationOptionsStorage = 35, RecommendationOptionsNetwork = 36, RecommendationOptionsOnDemandPrice = 37, RecommendationOptionsStandardOneYearNoUpfrontReservedPrice = 38, RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice = 39, RecommendationsSourcesRecommendationSourceArn = 40, RecommendationsSourcesRecommendationSourceType = 41, LastRefreshTimestamp = 42, CurrentPerformanceRisk = 43, RecommendationOptionsSavingsOpportunityPercentage = 44, RecommendationOptionsEstimatedMonthlySavingsCurrency = 45, RecommendationOptionsEstimatedMonthlySavingsValue = 46, EffectiveRecommendationPreferencesCpuVendorArchitectures = 47, EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics = 48, EffectiveRecommendationPreferencesInferredWorkloadTypes = 49, InferredWorkloadTypes = 50, RecommendationOptionsMigrationEffort = 51, EffectiveRecommendationPreferencesExternalMetricsSource = 52, InstanceState = 53, Tags = 54, ExternalMetricStatusCode = 55, ExternalMetricStatusReason = 56 }

	export interface ExportECSServiceRecommendationsResponse {
		jobId?: string;

		/** Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file. */
		s3Destination?: S3Destination;
	}
	export interface ExportECSServiceRecommendationsResponseFormProperties {
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateExportECSServiceRecommendationsResponseFormGroup() {
		return new FormGroup<ExportECSServiceRecommendationsResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportECSServiceRecommendationsRequest {
		accountIds?: Array<string>;
		filters?: Array<ECSServiceRecommendationFilter>;
		fieldsToExport?: Array<ExportableECSServiceField>;

		/**
		 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Required
		 */
		s3DestinationConfig: S3DestinationConfig;
		fileFormat?: FileFormat;
		includeMemberAccounts?: boolean | null;
	}
	export interface ExportECSServiceRecommendationsRequestFormProperties {
		fileFormat: FormControl<FileFormat | null | undefined>,
		includeMemberAccounts: FormControl<boolean | null | undefined>,
	}
	export function CreateExportECSServiceRecommendationsRequestFormGroup() {
		return new FormGroup<ExportECSServiceRecommendationsRequestFormProperties>({
			fileFormat: new FormControl<FileFormat | null | undefined>(undefined),
			includeMemberAccounts: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Describes a filter that returns a more specific list of Amazon ECS service recommendations. Use this filter with the <a>GetECSServiceRecommendations</a> action.  */
	export interface ECSServiceRecommendationFilter {
		name?: ECSServiceRecommendationFilterName;
		values?: Array<string>;
	}

	/**  Describes a filter that returns a more specific list of Amazon ECS service recommendations. Use this filter with the <a>GetECSServiceRecommendations</a> action.  */
	export interface ECSServiceRecommendationFilterFormProperties {
		name: FormControl<ECSServiceRecommendationFilterName | null | undefined>,
	}
	export function CreateECSServiceRecommendationFilterFormGroup() {
		return new FormGroup<ECSServiceRecommendationFilterFormProperties>({
			name: new FormControl<ECSServiceRecommendationFilterName | null | undefined>(undefined),
		});

	}

	export enum ECSServiceRecommendationFilterName { Finding = 0, FindingReasonCode = 1 }

	export enum ExportableECSServiceField { AccountId = 0, ServiceArn = 1, LookbackPeriodInDays = 2, LastRefreshTimestamp = 3, LaunchType = 4, CurrentPerformanceRisk = 5, CurrentServiceConfigurationMemory = 6, CurrentServiceConfigurationCpu = 7, CurrentServiceConfigurationTaskDefinitionArn = 8, CurrentServiceConfigurationAutoScalingConfiguration = 9, CurrentServiceContainerConfigurations = 10, UtilizationMetricsCpuMaximum = 11, UtilizationMetricsMemoryMaximum = 12, Finding = 13, FindingReasonCodes = 14, RecommendationOptionsMemory = 15, RecommendationOptionsCpu = 16, RecommendationOptionsSavingsOpportunityPercentage = 17, RecommendationOptionsEstimatedMonthlySavingsCurrency = 18, RecommendationOptionsEstimatedMonthlySavingsValue = 19, RecommendationOptionsContainerRecommendations = 20, RecommendationOptionsProjectedUtilizationMetricsCpuMaximum = 21, RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum = 22, Tags = 23 }

	export interface ExportLambdaFunctionRecommendationsResponse {
		jobId?: string;

		/** Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file. */
		s3Destination?: S3Destination;
	}
	export interface ExportLambdaFunctionRecommendationsResponseFormProperties {
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateExportLambdaFunctionRecommendationsResponseFormGroup() {
		return new FormGroup<ExportLambdaFunctionRecommendationsResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportLambdaFunctionRecommendationsRequest {
		accountIds?: Array<string>;
		filters?: Array<LambdaFunctionRecommendationFilter>;
		fieldsToExport?: Array<ExportableLambdaFunctionField>;

		/**
		 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Required
		 */
		s3DestinationConfig: S3DestinationConfig;
		fileFormat?: FileFormat;
		includeMemberAccounts?: boolean | null;
	}
	export interface ExportLambdaFunctionRecommendationsRequestFormProperties {
		fileFormat: FormControl<FileFormat | null | undefined>,
		includeMemberAccounts: FormControl<boolean | null | undefined>,
	}
	export function CreateExportLambdaFunctionRecommendationsRequestFormGroup() {
		return new FormGroup<ExportLambdaFunctionRecommendationsRequestFormProperties>({
			fileFormat: new FormControl<FileFormat | null | undefined>(undefined),
			includeMemberAccounts: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes a filter that returns a more specific list of Lambda function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> */
	export interface LambdaFunctionRecommendationFilter {
		name?: ECSServiceRecommendationFilterName;
		values?: Array<string>;
	}

	/** <p>Describes a filter that returns a more specific list of Lambda function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> */
	export interface LambdaFunctionRecommendationFilterFormProperties {
		name: FormControl<ECSServiceRecommendationFilterName | null | undefined>,
	}
	export function CreateLambdaFunctionRecommendationFilterFormGroup() {
		return new FormGroup<LambdaFunctionRecommendationFilterFormProperties>({
			name: new FormControl<ECSServiceRecommendationFilterName | null | undefined>(undefined),
		});

	}

	export enum ExportableLambdaFunctionField { AccountId = 0, FunctionArn = 1, FunctionVersion = 2, Finding = 3, FindingReasonCodes = 4, NumberOfInvocations = 5, UtilizationMetricsDurationMaximum = 6, UtilizationMetricsDurationAverage = 7, UtilizationMetricsMemoryMaximum = 8, UtilizationMetricsMemoryAverage = 9, LookbackPeriodInDays = 10, CurrentConfigurationMemorySize = 11, CurrentConfigurationTimeout = 12, CurrentCostTotal = 13, CurrentCostAverage = 14, RecommendationOptionsConfigurationMemorySize = 15, RecommendationOptionsCostLow = 16, RecommendationOptionsCostHigh = 17, RecommendationOptionsProjectedUtilizationMetricsDurationLowerBound = 18, RecommendationOptionsProjectedUtilizationMetricsDurationUpperBound = 19, RecommendationOptionsProjectedUtilizationMetricsDurationExpected = 20, LastRefreshTimestamp = 21, CurrentPerformanceRisk = 22, RecommendationOptionsSavingsOpportunityPercentage = 23, RecommendationOptionsEstimatedMonthlySavingsCurrency = 24, RecommendationOptionsEstimatedMonthlySavingsValue = 25, Tags = 26 }

	export interface GetAutoScalingGroupRecommendationsResponse {
		nextToken?: string;
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
		accountId?: string;
		autoScalingGroupArn?: string;
		autoScalingGroupName?: string;
		finding?: Finding;
		utilizationMetrics?: Array<UtilizationMetric>;
		lookBackPeriodInDays?: number | null;
		currentConfiguration?: AutoScalingGroupConfiguration;
		recommendationOptions?: Array<AutoScalingGroupRecommendationOption>;
		lastRefreshTimestamp?: Date;
		currentPerformanceRisk?: MigrationEffort;
		effectiveRecommendationPreferences?: EffectiveRecommendationPreferences;
		inferredWorkloadTypes?: Array<InferredWorkloadType>;
	}

	/** Describes an Auto Scaling group recommendation. */
	export interface AutoScalingGroupRecommendationFormProperties {
		accountId: FormControl<string | null | undefined>,
		autoScalingGroupArn: FormControl<string | null | undefined>,
		autoScalingGroupName: FormControl<string | null | undefined>,
		finding: FormControl<Finding | null | undefined>,
		lookBackPeriodInDays: FormControl<number | null | undefined>,
		lastRefreshTimestamp: FormControl<Date | null | undefined>,
		currentPerformanceRisk: FormControl<MigrationEffort | null | undefined>,
	}
	export function CreateAutoScalingGroupRecommendationFormGroup() {
		return new FormGroup<AutoScalingGroupRecommendationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			autoScalingGroupArn: new FormControl<string | null | undefined>(undefined),
			autoScalingGroupName: new FormControl<string | null | undefined>(undefined),
			finding: new FormControl<Finding | null | undefined>(undefined),
			lookBackPeriodInDays: new FormControl<number | null | undefined>(undefined),
			lastRefreshTimestamp: new FormControl<Date | null | undefined>(undefined),
			currentPerformanceRisk: new FormControl<MigrationEffort | null | undefined>(undefined),
		});

	}

	export enum Finding { Underprovisioned = 0, Overprovisioned = 1, Optimized = 2, NotOptimized = 3 }


	/** <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p> */
	export interface UtilizationMetric {
		name?: MetricName;
		statistic?: MetricStatistic;
		value?: number | null;
	}

	/** <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p> */
	export interface UtilizationMetricFormProperties {
		name: FormControl<MetricName | null | undefined>,
		statistic: FormControl<MetricStatistic | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateUtilizationMetricFormGroup() {
		return new FormGroup<UtilizationMetricFormProperties>({
			name: new FormControl<MetricName | null | undefined>(undefined),
			statistic: new FormControl<MetricStatistic | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MetricName { Cpu = 0, Memory = 1, EBS_READ_OPS_PER_SECOND = 2, EBS_WRITE_OPS_PER_SECOND = 3, EBS_READ_BYTES_PER_SECOND = 4, EBS_WRITE_BYTES_PER_SECOND = 5, DISK_READ_OPS_PER_SECOND = 6, DISK_WRITE_OPS_PER_SECOND = 7, DISK_READ_BYTES_PER_SECOND = 8, DISK_WRITE_BYTES_PER_SECOND = 9, NETWORK_IN_BYTES_PER_SECOND = 10, NETWORK_OUT_BYTES_PER_SECOND = 11, NETWORK_PACKETS_IN_PER_SECOND = 12, NETWORK_PACKETS_OUT_PER_SECOND = 13 }

	export enum MetricStatistic { Maximum = 0, Average = 1 }


	/** Describes the configuration of an Auto Scaling group. */
	export interface AutoScalingGroupConfiguration {
		desiredCapacity?: number | null;
		minSize?: number | null;
		maxSize?: number | null;
		instanceType?: string;
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
		configuration?: AutoScalingGroupConfiguration;
		projectedUtilizationMetrics?: Array<UtilizationMetric>;
		performanceRisk?: number | null;
		rank?: number | null;
		savingsOpportunity?: SavingsOpportunity;
		migrationEffort?: MigrationEffort;
	}

	/** Describes a recommendation option for an Auto Scaling group. */
	export interface AutoScalingGroupRecommendationOptionFormProperties {
		performanceRisk: FormControl<number | null | undefined>,
		rank: FormControl<number | null | undefined>,
		migrationEffort: FormControl<MigrationEffort | null | undefined>,
	}
	export function CreateAutoScalingGroupRecommendationOptionFormGroup() {
		return new FormGroup<AutoScalingGroupRecommendationOptionFormProperties>({
			performanceRisk: new FormControl<number | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			migrationEffort: new FormControl<MigrationEffort | null | undefined>(undefined),
		});

	}


	/** <p>Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.</p> <p>Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.</p> <important> <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as activate <b>Receive Amazon EC2 resource recommendations</b> in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost with Rightsizing Recommendations</a> in the <i>Cost Management User Guide</i>.</p> </important> */
	export interface SavingsOpportunity {
		savingsOpportunityPercentage?: number | null;
		estimatedMonthlySavings?: EstimatedMonthlySavings;
	}

	/** <p>Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.</p> <p>Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.</p> <important> <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as activate <b>Receive Amazon EC2 resource recommendations</b> in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost with Rightsizing Recommendations</a> in the <i>Cost Management User Guide</i>.</p> </important> */
	export interface SavingsOpportunityFormProperties {
		savingsOpportunityPercentage: FormControl<number | null | undefined>,
	}
	export function CreateSavingsOpportunityFormGroup() {
		return new FormGroup<SavingsOpportunityFormProperties>({
			savingsOpportunityPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Describes the estimated monthly savings amount possible, based on On-Demand instance pricing, by adopting Compute Optimizer recommendations for a given resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-ec2-recommendations.html#ec2-savings-calculation">Estimated monthly savings and savings opportunities</a> in the <i>Compute Optimizer User Guide</i>.</p> */
	export interface EstimatedMonthlySavings {
		currency?: Currency;
		value?: number | null;
	}

	/** <p>Describes the estimated monthly savings amount possible, based on On-Demand instance pricing, by adopting Compute Optimizer recommendations for a given resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-ec2-recommendations.html#ec2-savings-calculation">Estimated monthly savings and savings opportunities</a> in the <i>Compute Optimizer User Guide</i>.</p> */
	export interface EstimatedMonthlySavingsFormProperties {
		currency: FormControl<Currency | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateEstimatedMonthlySavingsFormGroup() {
		return new FormGroup<EstimatedMonthlySavingsFormProperties>({
			currency: new FormControl<Currency | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Currency { USD = 0, CNY = 1 }

	export enum MigrationEffort { VeryLow = 0, Low = 1, Medium = 2, High = 3 }


	/** Describes the effective recommendation preferences for a resource. */
	export interface EffectiveRecommendationPreferences {
		cpuVendorArchitectures?: Array<CpuVendorArchitecture>;
		enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics;
		inferredWorkloadTypes?: EnhancedInfrastructureMetrics;
		externalMetricsPreference?: ExternalMetricsPreference;
	}

	/** Describes the effective recommendation preferences for a resource. */
	export interface EffectiveRecommendationPreferencesFormProperties {
		enhancedInfrastructureMetrics: FormControl<EnhancedInfrastructureMetrics | null | undefined>,
		inferredWorkloadTypes: FormControl<EnhancedInfrastructureMetrics | null | undefined>,
	}
	export function CreateEffectiveRecommendationPreferencesFormGroup() {
		return new FormGroup<EffectiveRecommendationPreferencesFormProperties>({
			enhancedInfrastructureMetrics: new FormControl<EnhancedInfrastructureMetrics | null | undefined>(undefined),
			inferredWorkloadTypes: new FormControl<EnhancedInfrastructureMetrics | null | undefined>(undefined),
		});

	}

	export enum EnhancedInfrastructureMetrics { Active = 0, Inactive = 1 }


	/**  Describes the external metrics preferences for EC2 rightsizing recommendations.  */
	export interface ExternalMetricsPreference {
		source?: ExternalMetricsSource;
	}

	/**  Describes the external metrics preferences for EC2 rightsizing recommendations.  */
	export interface ExternalMetricsPreferenceFormProperties {
		source: FormControl<ExternalMetricsSource | null | undefined>,
	}
	export function CreateExternalMetricsPreferenceFormGroup() {
		return new FormGroup<ExternalMetricsPreferenceFormProperties>({
			source: new FormControl<ExternalMetricsSource | null | undefined>(undefined),
		});

	}

	export enum ExternalMetricsSource { Datadog = 0, Dynatrace = 1, NewRelic = 2, Instana = 3 }

	export enum InferredWorkloadType { AmazonEmr = 0, ApacheCassandra = 1, ApacheHadoop = 2, Memcached = 3, Nginx = 4, PostgreSql = 5, Redis = 6, Kafka = 7, SQLServer = 8 }


	/** <p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p> */
	export interface GetRecommendationError {
		identifier?: string;
		code?: string;
		message?: string;
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
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
		recommendationPreferences?: RecommendationPreferences;
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

	export interface GetEBSVolumeRecommendationsResponse {
		nextToken?: string;
		volumeRecommendations?: Array<VolumeRecommendation>;
		errors?: Array<GetRecommendationError>;
	}
	export interface GetEBSVolumeRecommendationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEBSVolumeRecommendationsResponseFormGroup() {
		return new FormGroup<GetEBSVolumeRecommendationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation. */
	export interface VolumeRecommendation {
		volumeArn?: string;
		accountId?: string;
		currentConfiguration?: VolumeConfiguration;
		finding?: EBSFinding;
		utilizationMetrics?: Array<EBSUtilizationMetric>;
		lookBackPeriodInDays?: number | null;
		volumeRecommendationOptions?: Array<VolumeRecommendationOption>;
		lastRefreshTimestamp?: Date;
		currentPerformanceRisk?: MigrationEffort;
		tags?: Array<Tag>;
	}

	/** Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation. */
	export interface VolumeRecommendationFormProperties {
		volumeArn: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		finding: FormControl<EBSFinding | null | undefined>,
		lookBackPeriodInDays: FormControl<number | null | undefined>,
		lastRefreshTimestamp: FormControl<Date | null | undefined>,
		currentPerformanceRisk: FormControl<MigrationEffort | null | undefined>,
	}
	export function CreateVolumeRecommendationFormGroup() {
		return new FormGroup<VolumeRecommendationFormProperties>({
			volumeArn: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			finding: new FormControl<EBSFinding | null | undefined>(undefined),
			lookBackPeriodInDays: new FormControl<number | null | undefined>(undefined),
			lastRefreshTimestamp: new FormControl<Date | null | undefined>(undefined),
			currentPerformanceRisk: new FormControl<MigrationEffort | null | undefined>(undefined),
		});

	}


	/** Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume. */
	export interface VolumeConfiguration {
		volumeType?: string;
		volumeSize?: number | null;
		volumeBaselineIOPS?: number | null;
		volumeBurstIOPS?: number | null;
		volumeBaselineThroughput?: number | null;
		volumeBurstThroughput?: number | null;
		rootVolume?: boolean | null;
	}

	/** Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume. */
	export interface VolumeConfigurationFormProperties {
		volumeType: FormControl<string | null | undefined>,
		volumeSize: FormControl<number | null | undefined>,
		volumeBaselineIOPS: FormControl<number | null | undefined>,
		volumeBurstIOPS: FormControl<number | null | undefined>,
		volumeBaselineThroughput: FormControl<number | null | undefined>,
		volumeBurstThroughput: FormControl<number | null | undefined>,
		rootVolume: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeConfigurationFormGroup() {
		return new FormGroup<VolumeConfigurationFormProperties>({
			volumeType: new FormControl<string | null | undefined>(undefined),
			volumeSize: new FormControl<number | null | undefined>(undefined),
			volumeBaselineIOPS: new FormControl<number | null | undefined>(undefined),
			volumeBurstIOPS: new FormControl<number | null | undefined>(undefined),
			volumeBaselineThroughput: new FormControl<number | null | undefined>(undefined),
			volumeBurstThroughput: new FormControl<number | null | undefined>(undefined),
			rootVolume: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EBSFinding { Optimized = 0, NotOptimized = 1 }


	/** <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p> */
	export interface EBSUtilizationMetric {
		name?: EBSMetricName;
		statistic?: MetricStatistic;
		value?: number | null;
	}

	/** <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p> */
	export interface EBSUtilizationMetricFormProperties {
		name: FormControl<EBSMetricName | null | undefined>,
		statistic: FormControl<MetricStatistic | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateEBSUtilizationMetricFormGroup() {
		return new FormGroup<EBSUtilizationMetricFormProperties>({
			name: new FormControl<EBSMetricName | null | undefined>(undefined),
			statistic: new FormControl<MetricStatistic | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EBSMetricName { VolumeReadOpsPerSecond = 0, VolumeWriteOpsPerSecond = 1, VolumeReadBytesPerSecond = 2, VolumeWriteBytesPerSecond = 3 }


	/** Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance. */
	export interface VolumeRecommendationOption {
		configuration?: VolumeConfiguration;
		performanceRisk?: number | null;
		rank?: number | null;
		savingsOpportunity?: SavingsOpportunity;
	}

	/** Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance. */
	export interface VolumeRecommendationOptionFormProperties {
		performanceRisk: FormControl<number | null | undefined>,
		rank: FormControl<number | null | undefined>,
	}
	export function CreateVolumeRecommendationOptionFormGroup() {
		return new FormGroup<VolumeRecommendationOptionFormProperties>({
			performanceRisk: new FormControl<number | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  A list of tag key and value pairs that you define.  */
	export interface Tag {
		key?: string;
		value?: string;
	}

	/**  A list of tag key and value pairs that you define.  */
	export interface TagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEBSVolumeRecommendationsRequest {
		volumeArns?: Array<string>;
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<EBSFilter>;
		accountIds?: Array<string>;
	}
	export interface GetEBSVolumeRecommendationsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEBSVolumeRecommendationsRequestFormGroup() {
		return new FormGroup<GetEBSVolumeRecommendationsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetEC2InstanceRecommendationsResponse {
		nextToken?: string;
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
		instanceArn?: string;
		accountId?: string;
		instanceName?: string;
		currentInstanceType?: string;
		finding?: Finding;
		findingReasonCodes?: Array<InstanceRecommendationFindingReasonCode>;
		utilizationMetrics?: Array<UtilizationMetric>;
		lookBackPeriodInDays?: number | null;
		recommendationOptions?: Array<InstanceRecommendationOption>;
		recommendationSources?: Array<RecommendationSource>;
		lastRefreshTimestamp?: Date;
		currentPerformanceRisk?: MigrationEffort;
		effectiveRecommendationPreferences?: EffectiveRecommendationPreferences;
		inferredWorkloadTypes?: Array<InferredWorkloadType>;
		instanceState?: InstanceState;
		tags?: Array<Tag>;
		externalMetricStatus?: ExternalMetricStatus;
	}

	/** Describes an Amazon EC2 instance recommendation. */
	export interface InstanceRecommendationFormProperties {
		instanceArn: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		instanceName: FormControl<string | null | undefined>,
		currentInstanceType: FormControl<string | null | undefined>,
		finding: FormControl<Finding | null | undefined>,
		lookBackPeriodInDays: FormControl<number | null | undefined>,
		lastRefreshTimestamp: FormControl<Date | null | undefined>,
		currentPerformanceRisk: FormControl<MigrationEffort | null | undefined>,
		instanceState: FormControl<InstanceState | null | undefined>,
	}
	export function CreateInstanceRecommendationFormGroup() {
		return new FormGroup<InstanceRecommendationFormProperties>({
			instanceArn: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			instanceName: new FormControl<string | null | undefined>(undefined),
			currentInstanceType: new FormControl<string | null | undefined>(undefined),
			finding: new FormControl<Finding | null | undefined>(undefined),
			lookBackPeriodInDays: new FormControl<number | null | undefined>(undefined),
			lastRefreshTimestamp: new FormControl<Date | null | undefined>(undefined),
			currentPerformanceRisk: new FormControl<MigrationEffort | null | undefined>(undefined),
			instanceState: new FormControl<InstanceState | null | undefined>(undefined),
		});

	}

	export enum InstanceRecommendationFindingReasonCode { CPUOverprovisioned = 0, CPUUnderprovisioned = 1, MemoryOverprovisioned = 2, MemoryUnderprovisioned = 3, EBSThroughputOverprovisioned = 4, EBSThroughputUnderprovisioned = 5, EBSIOPSOverprovisioned = 6, EBSIOPSUnderprovisioned = 7, NetworkBandwidthOverprovisioned = 8, NetworkBandwidthUnderprovisioned = 9, NetworkPPSOverprovisioned = 10, NetworkPPSUnderprovisioned = 11, DiskIOPSOverprovisioned = 12, DiskIOPSUnderprovisioned = 13, DiskThroughputOverprovisioned = 14, DiskThroughputUnderprovisioned = 15 }


	/** Describes a recommendation option for an Amazon EC2 instance. */
	export interface InstanceRecommendationOption {
		instanceType?: string;
		projectedUtilizationMetrics?: Array<UtilizationMetric>;
		platformDifferences?: Array<PlatformDifference>;
		performanceRisk?: number | null;
		rank?: number | null;
		savingsOpportunity?: SavingsOpportunity;
		migrationEffort?: MigrationEffort;
	}

	/** Describes a recommendation option for an Amazon EC2 instance. */
	export interface InstanceRecommendationOptionFormProperties {
		instanceType: FormControl<string | null | undefined>,
		performanceRisk: FormControl<number | null | undefined>,
		rank: FormControl<number | null | undefined>,
		migrationEffort: FormControl<MigrationEffort | null | undefined>,
	}
	export function CreateInstanceRecommendationOptionFormGroup() {
		return new FormGroup<InstanceRecommendationOptionFormProperties>({
			instanceType: new FormControl<string | null | undefined>(undefined),
			performanceRisk: new FormControl<number | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			migrationEffort: new FormControl<MigrationEffort | null | undefined>(undefined),
		});

	}

	export enum PlatformDifference { Hypervisor = 0, NetworkInterface = 1, StorageInterface = 2, InstanceStoreAvailability = 3, VirtualizationType = 4, Architecture = 5 }


	/** Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group. */
	export interface RecommendationSource {
		recommendationSourceArn?: string;
		recommendationSourceType?: RecommendationSourceType;
	}

	/** Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group. */
	export interface RecommendationSourceFormProperties {
		recommendationSourceArn: FormControl<string | null | undefined>,
		recommendationSourceType: FormControl<RecommendationSourceType | null | undefined>,
	}
	export function CreateRecommendationSourceFormGroup() {
		return new FormGroup<RecommendationSourceFormProperties>({
			recommendationSourceArn: new FormControl<string | null | undefined>(undefined),
			recommendationSourceType: new FormControl<RecommendationSourceType | null | undefined>(undefined),
		});

	}

	export enum RecommendationSourceType { Ec2Instance = 0, AutoScalingGroup = 1, EbsVolume = 2, LambdaFunction = 3, EcsService = 4 }

	export enum InstanceState { pending = 0, running = 1, 'shutting-down' = 2, terminated = 3, stopping = 4, stopped = 5 }


	/**  Describes Compute Optimizer's integration status with your chosen external metric provider. For example, Datadog.  */
	export interface ExternalMetricStatus {
		statusCode?: ExternalMetricStatusCode;
		statusReason?: string;
	}

	/**  Describes Compute Optimizer's integration status with your chosen external metric provider. For example, Datadog.  */
	export interface ExternalMetricStatusFormProperties {
		statusCode: FormControl<ExternalMetricStatusCode | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateExternalMetricStatusFormGroup() {
		return new FormGroup<ExternalMetricStatusFormProperties>({
			statusCode: new FormControl<ExternalMetricStatusCode | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExternalMetricStatusCode { NO_EXTERNAL_METRIC_SET = 0, INTEGRATION_SUCCESS = 1, DATADOG_INTEGRATION_ERROR = 2, DYNATRACE_INTEGRATION_ERROR = 3, NEWRELIC_INTEGRATION_ERROR = 4, INSTANA_INTEGRATION_ERROR = 5, INSUFFICIENT_DATADOG_METRICS = 6, INSUFFICIENT_DYNATRACE_METRICS = 7, INSUFFICIENT_NEWRELIC_METRICS = 8, INSUFFICIENT_INSTANA_METRICS = 9 }

	export interface GetEC2InstanceRecommendationsRequest {
		instanceArns?: Array<string>;
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
		accountIds?: Array<string>;
		recommendationPreferences?: RecommendationPreferences;
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


	/** <p>Describes a projected utilization metric of a recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note> */
	export interface RecommendedOptionProjectedMetric {
		recommendedInstanceType?: string;
		rank?: number | null;
		projectedMetrics?: Array<ProjectedMetric>;
	}

	/** <p>Describes a projected utilization metric of a recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note> */
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


	/** <p>Describes a projected utilization metric of a recommendation option, such as an Amazon EC2 instance. This represents the projected utilization of a recommendation option had you used that resource during the analyzed period.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note> */
	export interface ProjectedMetric {
		name?: MetricName;
		timestamps?: Array<string>;
		values?: Array<number> | null;
	}

	/** <p>Describes a projected utilization metric of a recommendation option, such as an Amazon EC2 instance. This represents the projected utilization of a recommendation option had you used that resource during the analyzed period.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note> */
	export interface ProjectedMetricFormProperties {
		name: FormControl<MetricName | null | undefined>,
	}
	export function CreateProjectedMetricFormGroup() {
		return new FormGroup<ProjectedMetricFormProperties>({
			name: new FormControl<MetricName | null | undefined>(undefined),
		});

	}

	export interface GetEC2RecommendationProjectedMetricsRequest {

		/** Required */
		instanceArn: string;

		/** Required */
		stat: MetricStatistic;

		/** Required */
		period: number;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;
		recommendationPreferences?: RecommendationPreferences;
	}
	export interface GetEC2RecommendationProjectedMetricsRequestFormProperties {

		/** Required */
		instanceArn: FormControl<string | null | undefined>,

		/** Required */
		stat: FormControl<MetricStatistic | null | undefined>,

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
			stat: new FormControl<MetricStatistic | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetECSServiceRecommendationProjectedMetricsResponse {
		recommendedOptionProjectedMetrics?: Array<ECSServiceRecommendedOptionProjectedMetric>;
	}
	export interface GetECSServiceRecommendationProjectedMetricsResponseFormProperties {
	}
	export function CreateGetECSServiceRecommendationProjectedMetricsResponseFormGroup() {
		return new FormGroup<GetECSServiceRecommendationProjectedMetricsResponseFormProperties>({
		});

	}


	/** <p> Describes the projected metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.</p> */
	export interface ECSServiceRecommendedOptionProjectedMetric {
		recommendedCpuUnits?: number | null;
		recommendedMemorySize?: number | null;
		projectedMetrics?: Array<ECSServiceProjectedMetric>;
	}

	/** <p> Describes the projected metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.</p> */
	export interface ECSServiceRecommendedOptionProjectedMetricFormProperties {
		recommendedCpuUnits: FormControl<number | null | undefined>,
		recommendedMemorySize: FormControl<number | null | undefined>,
	}
	export function CreateECSServiceRecommendedOptionProjectedMetricFormGroup() {
		return new FormGroup<ECSServiceRecommendedOptionProjectedMetricFormProperties>({
			recommendedCpuUnits: new FormControl<number | null | undefined>(undefined),
			recommendedMemorySize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p> Describes the projected metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.</p> */
	export interface ECSServiceProjectedMetric {
		name?: ECSServiceMetricName;
		timestamps?: Array<string>;
		upperBoundValues?: Array<number> | null;
		lowerBoundValues?: Array<number> | null;
	}

	/** <p> Describes the projected metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.</p> */
	export interface ECSServiceProjectedMetricFormProperties {
		name: FormControl<ECSServiceMetricName | null | undefined>,
	}
	export function CreateECSServiceProjectedMetricFormGroup() {
		return new FormGroup<ECSServiceProjectedMetricFormProperties>({
			name: new FormControl<ECSServiceMetricName | null | undefined>(undefined),
		});

	}

	export enum ECSServiceMetricName { Cpu = 0, Memory = 1 }

	export interface GetECSServiceRecommendationProjectedMetricsRequest {

		/** Required */
		serviceArn: string;

		/** Required */
		stat: MetricStatistic;

		/** Required */
		period: number;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;
	}
	export interface GetECSServiceRecommendationProjectedMetricsRequestFormProperties {

		/** Required */
		serviceArn: FormControl<string | null | undefined>,

		/** Required */
		stat: FormControl<MetricStatistic | null | undefined>,

		/** Required */
		period: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetECSServiceRecommendationProjectedMetricsRequestFormGroup() {
		return new FormGroup<GetECSServiceRecommendationProjectedMetricsRequestFormProperties>({
			serviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stat: new FormControl<MetricStatistic | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetECSServiceRecommendationsResponse {
		nextToken?: string;
		ecsServiceRecommendations?: Array<ECSServiceRecommendation>;
		errors?: Array<GetRecommendationError>;
	}
	export interface GetECSServiceRecommendationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetECSServiceRecommendationsResponseFormGroup() {
		return new FormGroup<GetECSServiceRecommendationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes an Amazon ECS service recommendation.  */
	export interface ECSServiceRecommendation {
		serviceArn?: string;
		accountId?: string;
		currentServiceConfiguration?: ServiceConfiguration;
		utilizationMetrics?: Array<ECSServiceUtilizationMetric>;
		lookbackPeriodInDays?: number | null;
		launchType?: ECSServiceLaunchType;
		lastRefreshTimestamp?: Date;
		finding?: ECSServiceRecommendationFinding;
		findingReasonCodes?: Array<ECSServiceRecommendationFindingReasonCode>;
		serviceRecommendationOptions?: Array<ECSServiceRecommendationOption>;
		currentPerformanceRisk?: MigrationEffort;
		tags?: Array<Tag>;
	}

	/**  Describes an Amazon ECS service recommendation.  */
	export interface ECSServiceRecommendationFormProperties {
		serviceArn: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		lookbackPeriodInDays: FormControl<number | null | undefined>,
		launchType: FormControl<ECSServiceLaunchType | null | undefined>,
		lastRefreshTimestamp: FormControl<Date | null | undefined>,
		finding: FormControl<ECSServiceRecommendationFinding | null | undefined>,
		currentPerformanceRisk: FormControl<MigrationEffort | null | undefined>,
	}
	export function CreateECSServiceRecommendationFormGroup() {
		return new FormGroup<ECSServiceRecommendationFormProperties>({
			serviceArn: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			lookbackPeriodInDays: new FormControl<number | null | undefined>(undefined),
			launchType: new FormControl<ECSServiceLaunchType | null | undefined>(undefined),
			lastRefreshTimestamp: new FormControl<Date | null | undefined>(undefined),
			finding: new FormControl<ECSServiceRecommendationFinding | null | undefined>(undefined),
			currentPerformanceRisk: new FormControl<MigrationEffort | null | undefined>(undefined),
		});

	}


	/**  The Amazon ECS service configurations used for recommendations.  */
	export interface ServiceConfiguration {
		memory?: number | null;
		cpu?: number | null;
		containerConfigurations?: Array<ContainerConfiguration>;
		autoScalingConfiguration?: AutoScalingConfiguration;
		taskDefinitionArn?: string;
	}

	/**  The Amazon ECS service configurations used for recommendations.  */
	export interface ServiceConfigurationFormProperties {
		memory: FormControl<number | null | undefined>,
		cpu: FormControl<number | null | undefined>,
		autoScalingConfiguration: FormControl<AutoScalingConfiguration | null | undefined>,
		taskDefinitionArn: FormControl<string | null | undefined>,
	}
	export function CreateServiceConfigurationFormGroup() {
		return new FormGroup<ServiceConfigurationFormProperties>({
			memory: new FormControl<number | null | undefined>(undefined),
			cpu: new FormControl<number | null | undefined>(undefined),
			autoScalingConfiguration: new FormControl<AutoScalingConfiguration | null | undefined>(undefined),
			taskDefinitionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the container configurations within the tasks of your Amazon ECS service.  */
	export interface ContainerConfiguration {
		containerName?: string;
		memorySizeConfiguration?: MemorySizeConfiguration;
		cpu?: number | null;
	}

	/**  Describes the container configurations within the tasks of your Amazon ECS service.  */
	export interface ContainerConfigurationFormProperties {
		containerName: FormControl<string | null | undefined>,
		cpu: FormControl<number | null | undefined>,
	}
	export function CreateContainerConfigurationFormGroup() {
		return new FormGroup<ContainerConfigurationFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined),
			cpu: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The memory size configurations of a container.  */
	export interface MemorySizeConfiguration {
		memory?: number | null;
		memoryReservation?: number | null;
	}

	/**  The memory size configurations of a container.  */
	export interface MemorySizeConfigurationFormProperties {
		memory: FormControl<number | null | undefined>,
		memoryReservation: FormControl<number | null | undefined>,
	}
	export function CreateMemorySizeConfigurationFormGroup() {
		return new FormGroup<MemorySizeConfigurationFormProperties>({
			memory: new FormControl<number | null | undefined>(undefined),
			memoryReservation: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AutoScalingConfiguration { TargetTrackingScalingCpu = 0, TargetTrackingScalingMemory = 1 }


	/** <p> Describes the utilization metric of an Amazon ECS service. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.</p> */
	export interface ECSServiceUtilizationMetric {
		name?: ECSServiceMetricName;
		statistic?: MetricStatistic;
		value?: number | null;
	}

	/** <p> Describes the utilization metric of an Amazon ECS service. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.</p> */
	export interface ECSServiceUtilizationMetricFormProperties {
		name: FormControl<ECSServiceMetricName | null | undefined>,
		statistic: FormControl<MetricStatistic | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateECSServiceUtilizationMetricFormGroup() {
		return new FormGroup<ECSServiceUtilizationMetricFormProperties>({
			name: new FormControl<ECSServiceMetricName | null | undefined>(undefined),
			statistic: new FormControl<MetricStatistic | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ECSServiceLaunchType { EC2 = 0, Fargate = 1 }

	export enum ECSServiceRecommendationFinding { Optimized = 0, Underprovisioned = 1, Overprovisioned = 2 }

	export enum ECSServiceRecommendationFindingReasonCode { MemoryOverprovisioned = 0, MemoryUnderprovisioned = 1, CPUOverprovisioned = 2, CPUUnderprovisioned = 3 }


	/**  Describes the recommendation options for an Amazon ECS service.  */
	export interface ECSServiceRecommendationOption {
		memory?: number | null;
		cpu?: number | null;

		/** <p>Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.</p> <p>Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.</p> <important> <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as activate <b>Receive Amazon EC2 resource recommendations</b> in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost with Rightsizing Recommendations</a> in the <i>Cost Management User Guide</i>.</p> </important> */
		savingsOpportunity?: SavingsOpportunity;
		projectedUtilizationMetrics?: Array<ECSServiceProjectedUtilizationMetric>;
		containerRecommendations?: Array<ContainerRecommendation>;
	}

	/**  Describes the recommendation options for an Amazon ECS service.  */
	export interface ECSServiceRecommendationOptionFormProperties {
		memory: FormControl<number | null | undefined>,
		cpu: FormControl<number | null | undefined>,
	}
	export function CreateECSServiceRecommendationOptionFormGroup() {
		return new FormGroup<ECSServiceRecommendationOptionFormProperties>({
			memory: new FormControl<number | null | undefined>(undefined),
			cpu: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p> Describes the projected utilization metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.</p> */
	export interface ECSServiceProjectedUtilizationMetric {
		name?: ECSServiceMetricName;
		statistic?: MetricStatistic;
		lowerBoundValue?: number | null;
		upperBoundValue?: number | null;
	}

	/** <p> Describes the projected utilization metrics of an Amazon ECS service recommendation option. </p> <p>To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.</p> */
	export interface ECSServiceProjectedUtilizationMetricFormProperties {
		name: FormControl<ECSServiceMetricName | null | undefined>,
		statistic: FormControl<MetricStatistic | null | undefined>,
		lowerBoundValue: FormControl<number | null | undefined>,
		upperBoundValue: FormControl<number | null | undefined>,
	}
	export function CreateECSServiceProjectedUtilizationMetricFormGroup() {
		return new FormGroup<ECSServiceProjectedUtilizationMetricFormProperties>({
			name: new FormControl<ECSServiceMetricName | null | undefined>(undefined),
			statistic: new FormControl<MetricStatistic | null | undefined>(undefined),
			lowerBoundValue: new FormControl<number | null | undefined>(undefined),
			upperBoundValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The CPU and memory recommendations for a container within the tasks of your Amazon ECS service.  */
	export interface ContainerRecommendation {
		containerName?: string;
		memorySizeConfiguration?: MemorySizeConfiguration;
		cpu?: number | null;
	}

	/**  The CPU and memory recommendations for a container within the tasks of your Amazon ECS service.  */
	export interface ContainerRecommendationFormProperties {
		containerName: FormControl<string | null | undefined>,
		cpu: FormControl<number | null | undefined>,
	}
	export function CreateContainerRecommendationFormGroup() {
		return new FormGroup<ContainerRecommendationFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined),
			cpu: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetECSServiceRecommendationsRequest {
		serviceArns?: Array<string>;
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<ECSServiceRecommendationFilter>;
		accountIds?: Array<string>;
	}
	export interface GetECSServiceRecommendationsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetECSServiceRecommendationsRequestFormGroup() {
		return new FormGroup<GetECSServiceRecommendationsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetEffectiveRecommendationPreferencesResponse {
		enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics;
		externalMetricsPreference?: ExternalMetricsPreference;
	}
	export interface GetEffectiveRecommendationPreferencesResponseFormProperties {
		enhancedInfrastructureMetrics: FormControl<EnhancedInfrastructureMetrics | null | undefined>,
	}
	export function CreateGetEffectiveRecommendationPreferencesResponseFormGroup() {
		return new FormGroup<GetEffectiveRecommendationPreferencesResponseFormProperties>({
			enhancedInfrastructureMetrics: new FormControl<EnhancedInfrastructureMetrics | null | undefined>(undefined),
		});

	}

	export interface GetEffectiveRecommendationPreferencesRequest {

		/** Required */
		resourceArn: string;
	}
	export interface GetEffectiveRecommendationPreferencesRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetEffectiveRecommendationPreferencesRequestFormGroup() {
		return new FormGroup<GetEffectiveRecommendationPreferencesRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEnrollmentStatusResponse {
		status?: Status;
		statusReason?: string;
		memberAccountsEnrolled?: boolean | null;
		lastUpdatedTimestamp?: Date;
		numberOfMemberAccountsOptedIn?: number | null;
	}
	export interface GetEnrollmentStatusResponseFormProperties {
		status: FormControl<Status | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		memberAccountsEnrolled: FormControl<boolean | null | undefined>,
		lastUpdatedTimestamp: FormControl<Date | null | undefined>,
		numberOfMemberAccountsOptedIn: FormControl<number | null | undefined>,
	}
	export function CreateGetEnrollmentStatusResponseFormGroup() {
		return new FormGroup<GetEnrollmentStatusResponseFormProperties>({
			status: new FormControl<Status | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			memberAccountsEnrolled: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			numberOfMemberAccountsOptedIn: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Status { Active = 0, Inactive = 1, Pending = 2, Failed = 3 }

	export interface GetEnrollmentStatusRequest {
	}
	export interface GetEnrollmentStatusRequestFormProperties {
	}
	export function CreateGetEnrollmentStatusRequestFormGroup() {
		return new FormGroup<GetEnrollmentStatusRequestFormProperties>({
		});

	}

	export interface GetEnrollmentStatusesForOrganizationResponse {
		accountEnrollmentStatuses?: Array<AccountEnrollmentStatus>;
		nextToken?: string;
	}
	export interface GetEnrollmentStatusesForOrganizationResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEnrollmentStatusesForOrganizationResponseFormGroup() {
		return new FormGroup<GetEnrollmentStatusesForOrganizationResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the enrollment status of an organization's member accounts in Compute Optimizer. */
	export interface AccountEnrollmentStatus {
		accountId?: string;
		status?: Status;
		statusReason?: string;
		lastUpdatedTimestamp?: Date;
	}

	/** Describes the enrollment status of an organization's member accounts in Compute Optimizer. */
	export interface AccountEnrollmentStatusFormProperties {
		accountId: FormControl<string | null | undefined>,
		status: FormControl<Status | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		lastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAccountEnrollmentStatusFormGroup() {
		return new FormGroup<AccountEnrollmentStatusFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Status | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetEnrollmentStatusesForOrganizationRequest {
		filters?: Array<EnrollmentFilter>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetEnrollmentStatusesForOrganizationRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEnrollmentStatusesForOrganizationRequestFormGroup() {
		return new FormGroup<GetEnrollmentStatusesForOrganizationRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the <a>GetEnrollmentStatusesForOrganization</a> action. */
	export interface EnrollmentFilter {
		name?: EnrollmentFilterName;
		values?: Array<string>;
	}

	/** Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the <a>GetEnrollmentStatusesForOrganization</a> action. */
	export interface EnrollmentFilterFormProperties {
		name: FormControl<EnrollmentFilterName | null | undefined>,
	}
	export function CreateEnrollmentFilterFormGroup() {
		return new FormGroup<EnrollmentFilterFormProperties>({
			name: new FormControl<EnrollmentFilterName | null | undefined>(undefined),
		});

	}

	export enum EnrollmentFilterName { Status = 0 }

	export interface GetLambdaFunctionRecommendationsResponse {
		nextToken?: string;
		lambdaFunctionRecommendations?: Array<LambdaFunctionRecommendation>;
	}
	export interface GetLambdaFunctionRecommendationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLambdaFunctionRecommendationsResponseFormGroup() {
		return new FormGroup<GetLambdaFunctionRecommendationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Lambda function recommendation. */
	export interface LambdaFunctionRecommendation {
		functionArn?: string;
		functionVersion?: string;
		accountId?: string;
		currentMemorySize?: number | null;
		numberOfInvocations?: number | null;
		utilizationMetrics?: Array<LambdaFunctionUtilizationMetric>;
		lookbackPeriodInDays?: number | null;
		lastRefreshTimestamp?: Date;
		finding?: LambdaFunctionRecommendationFinding;
		findingReasonCodes?: Array<LambdaFunctionRecommendationFindingReasonCode>;
		memorySizeRecommendationOptions?: Array<LambdaFunctionMemoryRecommendationOption>;
		currentPerformanceRisk?: MigrationEffort;
		tags?: Array<Tag>;
	}

	/** Describes an Lambda function recommendation. */
	export interface LambdaFunctionRecommendationFormProperties {
		functionArn: FormControl<string | null | undefined>,
		functionVersion: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		currentMemorySize: FormControl<number | null | undefined>,
		numberOfInvocations: FormControl<number | null | undefined>,
		lookbackPeriodInDays: FormControl<number | null | undefined>,
		lastRefreshTimestamp: FormControl<Date | null | undefined>,
		finding: FormControl<LambdaFunctionRecommendationFinding | null | undefined>,
		currentPerformanceRisk: FormControl<MigrationEffort | null | undefined>,
	}
	export function CreateLambdaFunctionRecommendationFormGroup() {
		return new FormGroup<LambdaFunctionRecommendationFormProperties>({
			functionArn: new FormControl<string | null | undefined>(undefined),
			functionVersion: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			currentMemorySize: new FormControl<number | null | undefined>(undefined),
			numberOfInvocations: new FormControl<number | null | undefined>(undefined),
			lookbackPeriodInDays: new FormControl<number | null | undefined>(undefined),
			lastRefreshTimestamp: new FormControl<Date | null | undefined>(undefined),
			finding: new FormControl<LambdaFunctionRecommendationFinding | null | undefined>(undefined),
			currentPerformanceRisk: new FormControl<MigrationEffort | null | undefined>(undefined),
		});

	}


	/** Describes a utilization metric of an Lambda function. */
	export interface LambdaFunctionUtilizationMetric {
		name?: LambdaFunctionMetricName;
		statistic?: MetricStatistic;
		value?: number | null;
	}

	/** Describes a utilization metric of an Lambda function. */
	export interface LambdaFunctionUtilizationMetricFormProperties {
		name: FormControl<LambdaFunctionMetricName | null | undefined>,
		statistic: FormControl<MetricStatistic | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionUtilizationMetricFormGroup() {
		return new FormGroup<LambdaFunctionUtilizationMetricFormProperties>({
			name: new FormControl<LambdaFunctionMetricName | null | undefined>(undefined),
			statistic: new FormControl<MetricStatistic | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LambdaFunctionMetricName { Duration = 0, Memory = 1 }

	export enum LambdaFunctionRecommendationFinding { Optimized = 0, NotOptimized = 1, Unavailable = 2 }

	export enum LambdaFunctionRecommendationFindingReasonCode { MemoryOverprovisioned = 0, MemoryUnderprovisioned = 1, InsufficientData = 2, Inconclusive = 3 }


	/** Describes a recommendation option for an Lambda function. */
	export interface LambdaFunctionMemoryRecommendationOption {
		rank?: number | null;
		memorySize?: number | null;
		projectedUtilizationMetrics?: Array<LambdaFunctionMemoryProjectedMetric>;
		savingsOpportunity?: SavingsOpportunity;
	}

	/** Describes a recommendation option for an Lambda function. */
	export interface LambdaFunctionMemoryRecommendationOptionFormProperties {
		rank: FormControl<number | null | undefined>,
		memorySize: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionMemoryRecommendationOptionFormGroup() {
		return new FormGroup<LambdaFunctionMemoryRecommendationOptionFormProperties>({
			rank: new FormControl<number | null | undefined>(undefined),
			memorySize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a projected utilization metric of an Lambda function recommendation option. */
	export interface LambdaFunctionMemoryProjectedMetric {
		name?: LambdaFunctionMemoryMetricName;
		statistic?: LambdaFunctionMemoryMetricStatistic;
		value?: number | null;
	}

	/** Describes a projected utilization metric of an Lambda function recommendation option. */
	export interface LambdaFunctionMemoryProjectedMetricFormProperties {
		name: FormControl<LambdaFunctionMemoryMetricName | null | undefined>,
		statistic: FormControl<LambdaFunctionMemoryMetricStatistic | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionMemoryProjectedMetricFormGroup() {
		return new FormGroup<LambdaFunctionMemoryProjectedMetricFormProperties>({
			name: new FormControl<LambdaFunctionMemoryMetricName | null | undefined>(undefined),
			statistic: new FormControl<LambdaFunctionMemoryMetricStatistic | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LambdaFunctionMemoryMetricName { Duration = 0 }

	export enum LambdaFunctionMemoryMetricStatistic { LowerBound = 0, UpperBound = 1, Expected = 2 }

	export interface GetLambdaFunctionRecommendationsRequest {
		functionArns?: Array<string>;
		accountIds?: Array<string>;
		filters?: Array<LambdaFunctionRecommendationFilter>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetLambdaFunctionRecommendationsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetLambdaFunctionRecommendationsRequestFormGroup() {
		return new FormGroup<GetLambdaFunctionRecommendationsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetRecommendationPreferencesResponse {
		nextToken?: string;
		recommendationPreferencesDetails?: Array<RecommendationPreferencesDetail>;
	}
	export interface GetRecommendationPreferencesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRecommendationPreferencesResponseFormGroup() {
		return new FormGroup<GetRecommendationPreferencesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a recommendation preference. */
	export interface RecommendationPreferencesDetail {
		scope?: Scope;
		resourceType?: ResourceType;
		enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics;
		inferredWorkloadTypes?: EnhancedInfrastructureMetrics;
		externalMetricsPreference?: ExternalMetricsPreference;
	}

	/** Describes a recommendation preference. */
	export interface RecommendationPreferencesDetailFormProperties {
		resourceType: FormControl<ResourceType | null | undefined>,
		enhancedInfrastructureMetrics: FormControl<EnhancedInfrastructureMetrics | null | undefined>,
		inferredWorkloadTypes: FormControl<EnhancedInfrastructureMetrics | null | undefined>,
	}
	export function CreateRecommendationPreferencesDetailFormGroup() {
		return new FormGroup<RecommendationPreferencesDetailFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			enhancedInfrastructureMetrics: new FormControl<EnhancedInfrastructureMetrics | null | undefined>(undefined),
			inferredWorkloadTypes: new FormControl<EnhancedInfrastructureMetrics | null | undefined>(undefined),
		});

	}

	export interface GetRecommendationPreferencesRequest {

		/** Required */
		resourceType: ResourceType;
		scope?: Scope;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetRecommendationPreferencesRequestFormProperties {

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetRecommendationPreferencesRequestFormGroup() {
		return new FormGroup<GetRecommendationPreferencesRequestFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetRecommendationSummariesResponse {
		nextToken?: string;
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
		recommendationResourceType?: RecommendationSourceType;
		accountId?: string;
		savingsOpportunity?: SavingsOpportunity;
		currentPerformanceRiskRatings?: CurrentPerformanceRiskRatings;
		inferredWorkloadSavings?: Array<InferredWorkloadSaving>;
	}

	/** A summary of a recommendation. */
	export interface RecommendationSummaryFormProperties {
		recommendationResourceType: FormControl<RecommendationSourceType | null | undefined>,
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationSummaryFormGroup() {
		return new FormGroup<RecommendationSummaryFormProperties>({
			recommendationResourceType: new FormControl<RecommendationSourceType | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a recommendation. */
	export interface Summary {
		name?: Finding;
		value?: number | null;
		reasonCodeSummaries?: Array<ReasonCodeSummary>;
	}

	/** The summary of a recommendation. */
	export interface SummaryFormProperties {
		name: FormControl<Finding | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
			name: new FormControl<Finding | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A summary of a finding reason code. */
	export interface ReasonCodeSummary {
		name?: FindingReasonCode;
		value?: number | null;
	}

	/** A summary of a finding reason code. */
	export interface ReasonCodeSummaryFormProperties {
		name: FormControl<FindingReasonCode | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateReasonCodeSummaryFormGroup() {
		return new FormGroup<ReasonCodeSummaryFormProperties>({
			name: new FormControl<FindingReasonCode | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FindingReasonCode { MemoryOverprovisioned = 0, MemoryUnderprovisioned = 1 }


	/** <p>Describes the performance risk ratings for a given resource type.</p> <p>Resources with a <code>high</code> or <code>medium</code> rating are at risk of not meeting the performance needs of their workloads, while resources with a <code>low</code> rating are performing well in their workloads.</p> */
	export interface CurrentPerformanceRiskRatings {
		high?: number | null;
		medium?: number | null;
		low?: number | null;
		veryLow?: number | null;
	}

	/** <p>Describes the performance risk ratings for a given resource type.</p> <p>Resources with a <code>high</code> or <code>medium</code> rating are at risk of not meeting the performance needs of their workloads, while resources with a <code>low</code> rating are performing well in their workloads.</p> */
	export interface CurrentPerformanceRiskRatingsFormProperties {
		high: FormControl<number | null | undefined>,
		medium: FormControl<number | null | undefined>,
		low: FormControl<number | null | undefined>,
		veryLow: FormControl<number | null | undefined>,
	}
	export function CreateCurrentPerformanceRiskRatingsFormGroup() {
		return new FormGroup<CurrentPerformanceRiskRatingsFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			medium: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			veryLow: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The estimated monthly savings after you adjust the configurations of your instances running on the inferred workload types to the recommended configurations. If the <code>inferredWorkloadTypes</code> list contains multiple entries, then the savings are the sum of the monthly savings from instances that run the exact combination of the inferred workload types.  */
	export interface InferredWorkloadSaving {
		inferredWorkloadTypes?: Array<InferredWorkloadType>;
		estimatedMonthlySavings?: EstimatedMonthlySavings;
	}

	/**  The estimated monthly savings after you adjust the configurations of your instances running on the inferred workload types to the recommended configurations. If the <code>inferredWorkloadTypes</code> list contains multiple entries, then the savings are the sum of the monthly savings from instances that run the exact combination of the inferred workload types.  */
	export interface InferredWorkloadSavingFormProperties {
	}
	export function CreateInferredWorkloadSavingFormGroup() {
		return new FormGroup<InferredWorkloadSavingFormProperties>({
		});

	}

	export interface GetRecommendationSummariesRequest {
		accountIds?: Array<string>;
		nextToken?: string;
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

	export interface PutRecommendationPreferencesResponse {
	}
	export interface PutRecommendationPreferencesResponseFormProperties {
	}
	export function CreatePutRecommendationPreferencesResponseFormGroup() {
		return new FormGroup<PutRecommendationPreferencesResponseFormProperties>({
		});

	}

	export interface PutRecommendationPreferencesRequest {

		/** Required */
		resourceType: ResourceType;
		scope?: Scope;
		enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics;
		inferredWorkloadTypes?: EnhancedInfrastructureMetrics;
		externalMetricsPreference?: ExternalMetricsPreference;
	}
	export interface PutRecommendationPreferencesRequestFormProperties {

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,
		enhancedInfrastructureMetrics: FormControl<EnhancedInfrastructureMetrics | null | undefined>,
		inferredWorkloadTypes: FormControl<EnhancedInfrastructureMetrics | null | undefined>,
	}
	export function CreatePutRecommendationPreferencesRequestFormGroup() {
		return new FormGroup<PutRecommendationPreferencesRequestFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			enhancedInfrastructureMetrics: new FormControl<EnhancedInfrastructureMetrics | null | undefined>(undefined),
			inferredWorkloadTypes: new FormControl<EnhancedInfrastructureMetrics | null | undefined>(undefined),
		});

	}

	export interface UpdateEnrollmentStatusResponse {
		status?: Status;
		statusReason?: string;
	}
	export interface UpdateEnrollmentStatusResponseFormProperties {
		status: FormControl<Status | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnrollmentStatusResponseFormGroup() {
		return new FormGroup<UpdateEnrollmentStatusResponseFormProperties>({
			status: new FormControl<Status | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEnrollmentStatusRequest {

		/** Required */
		status: Status;
		includeMemberAccounts?: boolean | null;
	}
	export interface UpdateEnrollmentStatusRequestFormProperties {

		/** Required */
		status: FormControl<Status | null | undefined>,
		includeMemberAccounts: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateEnrollmentStatusRequestFormGroup() {
		return new FormGroup<UpdateEnrollmentStatusRequestFormProperties>({
			status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
			includeMemberAccounts: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CurrentPerformanceRisk { VeryLow = 0, Low = 1, Medium = 2, High = 3 }

	export enum ECSServiceMetricStatistic { Maximum = 0, Average = 1 }

	export enum InferredWorkloadTypesPreference { Active = 0, Inactive = 1 }

	export enum LambdaFunctionMetricStatistic { Maximum = 0, Average = 1 }

	export enum LambdaFunctionRecommendationFilterName { Finding = 0, FindingReasonCode = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Deletes a recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences
		 * @return {DeleteRecommendationPreferencesResponse} Success
		 */
		DeleteRecommendationPreferences(requestBody: DeleteRecommendationPreferencesRequest): Observable<DeleteRecommendationPreferencesResponse> {
			return this.http.post<DeleteRecommendationPreferencesResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes recommendation export jobs created in the last seven days.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action to view your export jobs.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeRecommendationExportJobsResponse} Success
		 */
		DescribeRecommendationExportJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeRecommendationExportJobsRequest): Observable<DescribeRecommendationExportJobsResponse> {
			return this.http.post<DescribeRecommendationExportJobsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports optimization recommendations for Auto Scaling groups.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations
		 * @return {ExportAutoScalingGroupRecommendationsResponse} Success
		 */
		ExportAutoScalingGroupRecommendations(requestBody: ExportAutoScalingGroupRecommendationsRequest): Observable<ExportAutoScalingGroupRecommendationsResponse> {
			return this.http.post<ExportAutoScalingGroupRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports optimization recommendations for Amazon EBS volumes.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations
		 * @return {ExportEBSVolumeRecommendationsResponse} Success
		 */
		ExportEBSVolumeRecommendations(requestBody: ExportEBSVolumeRecommendationsRequest): Observable<ExportEBSVolumeRecommendationsResponse> {
			return this.http.post<ExportEBSVolumeRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports optimization recommendations for Amazon EC2 instances.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations
		 * @return {ExportEC2InstanceRecommendationsResponse} Success
		 */
		ExportEC2InstanceRecommendations(requestBody: ExportEC2InstanceRecommendationsRequest): Observable<ExportEC2InstanceRecommendationsResponse> {
			return this.http.post<ExportEC2InstanceRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Exports optimization recommendations for Amazon ECS services on Fargate. </p> <p>Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations
		 * @return {ExportECSServiceRecommendationsResponse} Success
		 */
		ExportECSServiceRecommendations(requestBody: ExportECSServiceRecommendationsRequest): Observable<ExportECSServiceRecommendationsResponse> {
			return this.http.post<ExportECSServiceRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports optimization recommendations for Lambda functions.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations
		 * @return {ExportLambdaFunctionRecommendationsResponse} Success
		 */
		ExportLambdaFunctionRecommendations(requestBody: ExportLambdaFunctionRecommendationsRequest): Observable<ExportLambdaFunctionRecommendationsResponse> {
			return this.http.post<ExportLambdaFunctionRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns Auto Scaling group recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations
		 * @return {GetAutoScalingGroupRecommendationsResponse} Success
		 */
		GetAutoScalingGroupRecommendations(requestBody: GetAutoScalingGroupRecommendationsRequest): Observable<GetAutoScalingGroupRecommendationsResponse> {
			return this.http.post<GetAutoScalingGroupRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations
		 * @return {GetEBSVolumeRecommendationsResponse} Success
		 */
		GetEBSVolumeRecommendations(requestBody: GetEBSVolumeRecommendationsRequest): Observable<GetEBSVolumeRecommendationsResponse> {
			return this.http.post<GetEBSVolumeRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns Amazon EC2 instance recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations
		 * @return {GetEC2InstanceRecommendationsResponse} Success
		 */
		GetEC2InstanceRecommendations(requestBody: GetEC2InstanceRecommendationsRequest): Observable<GetEC2InstanceRecommendationsResponse> {
			return this.http.post<GetEC2InstanceRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run this action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics
		 * @return {GetEC2RecommendationProjectedMetricsResponse} Success
		 */
		GetEC2RecommendationProjectedMetrics(requestBody: GetEC2RecommendationProjectedMetricsRequest): Observable<GetEC2RecommendationProjectedMetricsResponse> {
			return this.http.post<GetEC2RecommendationProjectedMetricsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the projected metrics of Amazon ECS service recommendations.
		 * Post #X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics
		 * @return {GetECSServiceRecommendationProjectedMetricsResponse} Success
		 */
		GetECSServiceRecommendationProjectedMetrics(requestBody: GetECSServiceRecommendationProjectedMetricsRequest): Observable<GetECSServiceRecommendationProjectedMetricsResponse> {
			return this.http.post<GetECSServiceRecommendationProjectedMetricsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Returns Amazon ECS service recommendations. </p> <p> Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. </p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations
		 * @return {GetECSServiceRecommendationsResponse} Success
		 */
		GetECSServiceRecommendations(requestBody: GetECSServiceRecommendationsRequest): Observable<GetECSServiceRecommendationsResponse> {
			return this.http.post<GetECSServiceRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>When you create a recommendation preference, you can set its status to <code>Active</code> or <code>Inactive</code>. Use this action to view the recommendation preferences that are in effect, or <code>Active</code>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences
		 * @return {GetEffectiveRecommendationPreferencesResponse} Success
		 */
		GetEffectiveRecommendationPreferences(requestBody: GetEffectiveRecommendationPreferencesRequest): Observable<GetEffectiveRecommendationPreferencesResponse> {
			return this.http.post<GetEffectiveRecommendationPreferencesResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the enrollment (opt in) status of an account to the Compute Optimizer service.</p> <p>If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information about the enrollment status of member accounts of an organization.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus
		 * @return {GetEnrollmentStatusResponse} Success
		 */
		GetEnrollmentStatus(requestBody: GetEnrollmentStatusRequest): Observable<GetEnrollmentStatusResponse> {
			return this.http.post<GetEnrollmentStatusResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.</p> <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetEnrollmentStatusesForOrganizationResponse} Success
		 */
		GetEnrollmentStatusesForOrganization(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetEnrollmentStatusesForOrganizationRequest): Observable<GetEnrollmentStatusesForOrganizationResponse> {
			return this.http.post<GetEnrollmentStatusesForOrganizationResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns Lambda function recommendations.</p> <p>Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetLambdaFunctionRecommendationsResponse} Success
		 */
		GetLambdaFunctionRecommendations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetLambdaFunctionRecommendationsRequest): Observable<GetLambdaFunctionRecommendationsResponse> {
			return this.http.post<GetLambdaFunctionRecommendationsResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns existing recommendation preferences, such as enhanced infrastructure metrics.</p> <p>Use the <code>scope</code> parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetRecommendationPreferencesResponse} Success
		 */
		GetRecommendationPreferences(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetRecommendationPreferencesRequest): Observable<GetRecommendationPreferencesResponse> {
			return this.http.post<GetRecommendationPreferencesResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the optimization findings for an account.</p> <p>It returns the number of:</p> <ul> <li> <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> <li> <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Lambda functions in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon ECS services in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> </ul>
		 * Post #X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetRecommendationSummariesResponse} Success
		 */
		GetRecommendationSummaries(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetRecommendationSummariesRequest): Observable<GetRecommendationSummariesResponse> {
			return this.http.post<GetRecommendationSummariesResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences
		 * @return {PutRecommendationPreferencesResponse} Success
		 */
		PutRecommendationPreferences(requestBody: PutRecommendationPreferencesRequest): Observable<PutRecommendationPreferencesResponse> {
			return this.http.post<PutRecommendationPreferencesResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p> <p>If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization.</p> <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
		 * Post #X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus
		 * @return {UpdateEnrollmentStatusResponse} Success
		 */
		UpdateEnrollmentStatus(requestBody: UpdateEnrollmentStatusRequest): Observable<UpdateEnrollmentStatusResponse> {
			return this.http.post<UpdateEnrollmentStatusResponse>(this.baseUri + '#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DeleteRecommendationPreferencesX_Amz_Target { 'ComputeOptimizerService.DeleteRecommendationPreferences' = 0 }

	export enum DescribeRecommendationExportJobsX_Amz_Target { 'ComputeOptimizerService.DescribeRecommendationExportJobs' = 0 }

	export enum ExportAutoScalingGroupRecommendationsX_Amz_Target { 'ComputeOptimizerService.ExportAutoScalingGroupRecommendations' = 0 }

	export enum ExportEBSVolumeRecommendationsX_Amz_Target { 'ComputeOptimizerService.ExportEBSVolumeRecommendations' = 0 }

	export enum ExportEC2InstanceRecommendationsX_Amz_Target { 'ComputeOptimizerService.ExportEC2InstanceRecommendations' = 0 }

	export enum ExportECSServiceRecommendationsX_Amz_Target { 'ComputeOptimizerService.ExportECSServiceRecommendations' = 0 }

	export enum ExportLambdaFunctionRecommendationsX_Amz_Target { 'ComputeOptimizerService.ExportLambdaFunctionRecommendations' = 0 }

	export enum GetAutoScalingGroupRecommendationsX_Amz_Target { 'ComputeOptimizerService.GetAutoScalingGroupRecommendations' = 0 }

	export enum GetEBSVolumeRecommendationsX_Amz_Target { 'ComputeOptimizerService.GetEBSVolumeRecommendations' = 0 }

	export enum GetEC2InstanceRecommendationsX_Amz_Target { 'ComputeOptimizerService.GetEC2InstanceRecommendations' = 0 }

	export enum GetEC2RecommendationProjectedMetricsX_Amz_Target { 'ComputeOptimizerService.GetEC2RecommendationProjectedMetrics' = 0 }

	export enum GetECSServiceRecommendationProjectedMetricsX_Amz_Target { 'ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics' = 0 }

	export enum GetECSServiceRecommendationsX_Amz_Target { 'ComputeOptimizerService.GetECSServiceRecommendations' = 0 }

	export enum GetEffectiveRecommendationPreferencesX_Amz_Target { 'ComputeOptimizerService.GetEffectiveRecommendationPreferences' = 0 }

	export enum GetEnrollmentStatusX_Amz_Target { 'ComputeOptimizerService.GetEnrollmentStatus' = 0 }

	export enum GetEnrollmentStatusesForOrganizationX_Amz_Target { 'ComputeOptimizerService.GetEnrollmentStatusesForOrganization' = 0 }

	export enum GetLambdaFunctionRecommendationsX_Amz_Target { 'ComputeOptimizerService.GetLambdaFunctionRecommendations' = 0 }

	export enum GetRecommendationPreferencesX_Amz_Target { 'ComputeOptimizerService.GetRecommendationPreferences' = 0 }

	export enum GetRecommendationSummariesX_Amz_Target { 'ComputeOptimizerService.GetRecommendationSummaries' = 0 }

	export enum PutRecommendationPreferencesX_Amz_Target { 'ComputeOptimizerService.PutRecommendationPreferences' = 0 }

	export enum UpdateEnrollmentStatusX_Amz_Target { 'ComputeOptimizerService.UpdateEnrollmentStatus' = 0 }

}

