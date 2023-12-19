import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateCanaryResponse {

		/** This structure contains all information about one canary in your account. */
		Canary?: Canary;
	}
	export interface CreateCanaryResponseFormProperties {
	}
	export function CreateCreateCanaryResponseFormGroup() {
		return new FormGroup<CreateCanaryResponseFormProperties>({
		});

	}


	/** This structure contains all information about one canary in your account. */
	export interface Canary {
		Id?: string | null;
		Name?: string | null;

		/** This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics. */
		Code?: CanaryCodeOutput;
		ExecutionRoleArn?: string | null;

		/** How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value. */
		Schedule?: CanaryScheduleOutput;

		/** A structure that contains information for a canary run. */
		RunConfig?: CanaryRunConfigOutput;
		SuccessRetentionPeriodInDays?: number | null;
		FailureRetentionPeriodInDays?: number | null;

		/** A structure that contains the current state of the canary. */
		Status?: CanaryStatus;

		/** This structure contains information about when the canary was created and modified. */
		Timeline?: CanaryTimeline;
		ArtifactS3Location?: string | null;
		EngineArn?: string | null;
		RuntimeVersion?: string | null;

		/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
		VpcConfig?: VpcConfigOutput;
		Tags?: TagMap;
	}

	/** This structure contains all information about one canary in your account. */
	export interface CanaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		SuccessRetentionPeriodInDays: FormControl<number | null | undefined>,
		FailureRetentionPeriodInDays: FormControl<number | null | undefined>,
		ArtifactS3Location: FormControl<string | null | undefined>,
		EngineArn: FormControl<string | null | undefined>,
		RuntimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateCanaryFormGroup() {
		return new FormGroup<CanaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			SuccessRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			FailureRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			ArtifactS3Location: new FormControl<string | null | undefined>(undefined),
			EngineArn: new FormControl<string | null | undefined>(undefined),
			RuntimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics. */
	export interface CanaryCodeOutput {
		SourceLocationArn?: string | null;
		Handler?: string | null;
	}

	/** This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics. */
	export interface CanaryCodeOutputFormProperties {
		SourceLocationArn: FormControl<string | null | undefined>,
		Handler: FormControl<string | null | undefined>,
	}
	export function CreateCanaryCodeOutputFormGroup() {
		return new FormGroup<CanaryCodeOutputFormProperties>({
			SourceLocationArn: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value. */
	export interface CanaryScheduleOutput {
		Expression?: string | null;
		DurationInSeconds?: number | null;
	}

	/** How long, in seconds, for the canary to continue making regular runs according to the schedule in the <code>Expression</code> value. */
	export interface CanaryScheduleOutputFormProperties {
		Expression: FormControl<string | null | undefined>,
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCanaryScheduleOutputFormGroup() {
		return new FormGroup<CanaryScheduleOutputFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A structure that contains information for a canary run. */
	export interface CanaryRunConfigOutput {
		TimeoutInSeconds?: number | null;
		MemoryInMB?: number | null;
	}

	/** A structure that contains information for a canary run. */
	export interface CanaryRunConfigOutputFormProperties {
		TimeoutInSeconds: FormControl<number | null | undefined>,
		MemoryInMB: FormControl<number | null | undefined>,
	}
	export function CreateCanaryRunConfigOutputFormGroup() {
		return new FormGroup<CanaryRunConfigOutputFormProperties>({
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			MemoryInMB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A structure that contains the current state of the canary. */
	export interface CanaryStatus {
		State?: CanaryStatusState | null;
		StateReason?: string | null;
		StateReasonCode?: CanaryStatusStateReasonCode | null;
	}

	/** A structure that contains the current state of the canary. */
	export interface CanaryStatusFormProperties {
		State: FormControl<CanaryStatusState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		StateReasonCode: FormControl<CanaryStatusStateReasonCode | null | undefined>,
	}
	export function CreateCanaryStatusFormGroup() {
		return new FormGroup<CanaryStatusFormProperties>({
			State: new FormControl<CanaryStatusState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			StateReasonCode: new FormControl<CanaryStatusStateReasonCode | null | undefined>(undefined),
		});

	}

	export enum CanaryStatusState { CREATING = 0, READY = 1, STARTING = 2, RUNNING = 3, UPDATING = 4, STOPPING = 5, STOPPED = 6, ERROR = 7, DELETING = 8 }

	export enum CanaryStatusStateReasonCode { INVALID_PERMISSIONS = 0 }


	/** This structure contains information about when the canary was created and modified. */
	export interface CanaryTimeline {
		Created?: Date | null;
		LastModified?: Date | null;
		LastStarted?: Date | null;
		LastStopped?: Date | null;
	}

	/** This structure contains information about when the canary was created and modified. */
	export interface CanaryTimelineFormProperties {
		Created: FormControl<Date | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		LastStarted: FormControl<Date | null | undefined>,
		LastStopped: FormControl<Date | null | undefined>,
	}
	export function CreateCanaryTimelineFormGroup() {
		return new FormGroup<CanaryTimelineFormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			LastStarted: new FormControl<Date | null | undefined>(undefined),
			LastStopped: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
	export interface VpcConfigOutput {
		VpcId?: string | null;
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
	export interface VpcConfigOutputFormProperties {
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigOutputFormGroup() {
		return new FormGroup<VpcConfigOutputFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface DeleteCanaryResponse {
	}
	export interface DeleteCanaryResponseFormProperties {
	}
	export function CreateDeleteCanaryResponseFormGroup() {
		return new FormGroup<DeleteCanaryResponseFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface DescribeCanariesResponse {
		Canaries?: Array<Canary>;
		NextToken?: string | null;
	}
	export interface DescribeCanariesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCanariesResponseFormGroup() {
		return new FormGroup<DescribeCanariesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCanariesLastRunResponse {
		CanariesLastRun?: Array<CanaryLastRun>;
		NextToken?: string | null;
	}
	export interface DescribeCanariesLastRunResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCanariesLastRunResponseFormGroup() {
		return new FormGroup<DescribeCanariesLastRunResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure contains information about the most recent run of a single canary. */
	export interface CanaryLastRun {
		CanaryName?: string | null;

		/** This structure contains the details about one run of one canary. */
		LastRun?: CanaryRun;
	}

	/** This structure contains information about the most recent run of a single canary. */
	export interface CanaryLastRunFormProperties {
		CanaryName: FormControl<string | null | undefined>,
	}
	export function CreateCanaryLastRunFormGroup() {
		return new FormGroup<CanaryLastRunFormProperties>({
			CanaryName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure contains the details about one run of one canary. */
	export interface CanaryRun {
		Name?: string | null;

		/** This structure contains the status information about a canary run. */
		Status?: CanaryRunStatus;

		/** This structure contains the start and end times of a single canary run. */
		Timeline?: CanaryRunTimeline;
		ArtifactS3Location?: string | null;
	}

	/** This structure contains the details about one run of one canary. */
	export interface CanaryRunFormProperties {
		Name: FormControl<string | null | undefined>,
		ArtifactS3Location: FormControl<string | null | undefined>,
	}
	export function CreateCanaryRunFormGroup() {
		return new FormGroup<CanaryRunFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ArtifactS3Location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure contains the status information about a canary run. */
	export interface CanaryRunStatus {
		State?: CanaryRunStatusState | null;
		StateReason?: string | null;
		StateReasonCode?: CanaryRunStatusStateReasonCode | null;
	}

	/** This structure contains the status information about a canary run. */
	export interface CanaryRunStatusFormProperties {
		State: FormControl<CanaryRunStatusState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		StateReasonCode: FormControl<CanaryRunStatusStateReasonCode | null | undefined>,
	}
	export function CreateCanaryRunStatusFormGroup() {
		return new FormGroup<CanaryRunStatusFormProperties>({
			State: new FormControl<CanaryRunStatusState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			StateReasonCode: new FormControl<CanaryRunStatusStateReasonCode | null | undefined>(undefined),
		});

	}

	export enum CanaryRunStatusState { RUNNING = 0, PASSED = 1, FAILED = 2 }

	export enum CanaryRunStatusStateReasonCode { CANARY_FAILURE = 0, EXECUTION_FAILURE = 1 }


	/** This structure contains the start and end times of a single canary run. */
	export interface CanaryRunTimeline {
		Started?: Date | null;
		Completed?: Date | null;
	}

	/** This structure contains the start and end times of a single canary run. */
	export interface CanaryRunTimelineFormProperties {
		Started: FormControl<Date | null | undefined>,
		Completed: FormControl<Date | null | undefined>,
	}
	export function CreateCanaryRunTimelineFormGroup() {
		return new FormGroup<CanaryRunTimelineFormProperties>({
			Started: new FormControl<Date | null | undefined>(undefined),
			Completed: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeRuntimeVersionsResponse {
		RuntimeVersions?: Array<RuntimeVersion>;
		NextToken?: string | null;
	}
	export interface DescribeRuntimeVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRuntimeVersionsResponseFormGroup() {
		return new FormGroup<DescribeRuntimeVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure contains information about one canary runtime version. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>. */
	export interface RuntimeVersion {
		VersionName?: string | null;
		Description?: string | null;
		ReleaseDate?: Date | null;
		DeprecationDate?: Date | null;
	}

	/** This structure contains information about one canary runtime version. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>. */
	export interface RuntimeVersionFormProperties {
		VersionName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ReleaseDate: FormControl<Date | null | undefined>,
		DeprecationDate: FormControl<Date | null | undefined>,
	}
	export function CreateRuntimeVersionFormGroup() {
		return new FormGroup<RuntimeVersionFormProperties>({
			VersionName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ReleaseDate: new FormControl<Date | null | undefined>(undefined),
			DeprecationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetCanaryResponse {

		/** This structure contains all information about one canary in your account. */
		Canary?: Canary;
	}
	export interface GetCanaryResponseFormProperties {
	}
	export function CreateGetCanaryResponseFormGroup() {
		return new FormGroup<GetCanaryResponseFormProperties>({
		});

	}

	export interface GetCanaryRunsResponse {
		CanaryRuns?: Array<CanaryRun>;
		NextToken?: string | null;
	}
	export interface GetCanaryRunsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCanaryRunsResponseFormGroup() {
		return new FormGroup<GetCanaryRunsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface StartCanaryResponse {
	}
	export interface StartCanaryResponseFormProperties {
	}
	export function CreateStartCanaryResponseFormGroup() {
		return new FormGroup<StartCanaryResponseFormProperties>({
		});

	}

	export interface StopCanaryResponse {
	}
	export interface StopCanaryResponseFormProperties {
	}
	export function CreateStopCanaryResponseFormGroup() {
		return new FormGroup<StopCanaryResponseFormProperties>({
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

	export interface UpdateCanaryResponse {
	}
	export interface UpdateCanaryResponseFormProperties {
	}
	export function CreateUpdateCanaryResponseFormGroup() {
		return new FormGroup<UpdateCanaryResponseFormProperties>({
		});

	}


	/** Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.  */
	export interface CanaryCodeInput {
		S3Bucket?: string | null;
		S3Key?: string | null;
		S3Version?: string | null;
		ZipFile?: string | null;
		Handler: string;
	}

	/** Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.  */
	export interface CanaryCodeInputFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3Version: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
		Handler: FormControl<string | null | undefined>,
	}
	export function CreateCanaryCodeInputFormGroup() {
		return new FormGroup<CanaryCodeInputFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			S3Version: new FormControl<string | null | undefined>(undefined),
			ZipFile: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains input information for a canary run. */
	export interface CanaryRunConfigInput {
		TimeoutInSeconds: number;
		MemoryInMB?: number | null;
	}

	/** A structure that contains input information for a canary run. */
	export interface CanaryRunConfigInputFormProperties {
		TimeoutInSeconds: FormControl<number | null | undefined>,
		MemoryInMB: FormControl<number | null | undefined>,
	}
	export function CreateCanaryRunConfigInputFormGroup() {
		return new FormGroup<CanaryRunConfigInputFormProperties>({
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			MemoryInMB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CanaryRunState { RUNNING = 0, PASSED = 1, FAILED = 2 }

	export enum CanaryRunStateReasonCode { CANARY_FAILURE = 0, EXECUTION_FAILURE = 1 }


	/** This structure specifies how often a canary is to make runs and the date and time when it should stop making runs. */
	export interface CanaryScheduleInput {
		Expression: string;
		DurationInSeconds?: number | null;
	}

	/** This structure specifies how often a canary is to make runs and the date and time when it should stop making runs. */
	export interface CanaryScheduleInputFormProperties {
		Expression: FormControl<string | null | undefined>,
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCanaryScheduleInputFormGroup() {
		return new FormGroup<CanaryScheduleInputFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CanaryState { CREATING = 0, READY = 1, STARTING = 2, RUNNING = 3, UPDATING = 4, STOPPING = 5, STOPPED = 6, ERROR = 7, DELETING = 8 }

	export enum CanaryStateReasonCode { INVALID_PERMISSIONS = 0 }


	/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
	export interface VpcConfigInput {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
	export interface VpcConfigInputFormProperties {
	}
	export function CreateVpcConfigInputFormGroup() {
		return new FormGroup<VpcConfigInputFormProperties>({
		});

	}

	export interface CreateCanaryRequest {
		Name: string;

		/**
		 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
		 * Required
		 */
		Code: CanaryCodeInput;
		ArtifactS3Location: string;
		ExecutionRoleArn: string;

		/**
		 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
		 * Required
		 */
		Schedule: CanaryScheduleInput;

		/** A structure that contains input information for a canary run. */
		RunConfig?: CanaryRunConfigInput;
		SuccessRetentionPeriodInDays?: number | null;
		FailureRetentionPeriodInDays?: number | null;
		RuntimeVersion: string;

		/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
		VpcConfig?: VpcConfigInput;
		Tags?: TagMap;
	}
	export interface CreateCanaryRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ArtifactS3Location: FormControl<string | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		SuccessRetentionPeriodInDays: FormControl<number | null | undefined>,
		FailureRetentionPeriodInDays: FormControl<number | null | undefined>,
		RuntimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateCanaryRequestFormGroup() {
		return new FormGroup<CreateCanaryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ArtifactS3Location: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			SuccessRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			FailureRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			RuntimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCanaryRequest {
	}
	export interface DeleteCanaryRequestFormProperties {
	}
	export function CreateDeleteCanaryRequestFormGroup() {
		return new FormGroup<DeleteCanaryRequestFormProperties>({
		});

	}

	export interface DescribeCanariesLastRunRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface DescribeCanariesLastRunRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeCanariesLastRunRequestFormGroup() {
		return new FormGroup<DescribeCanariesLastRunRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeCanariesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface DescribeCanariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeCanariesRequestFormGroup() {
		return new FormGroup<DescribeCanariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeRuntimeVersionsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface DescribeRuntimeVersionsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeRuntimeVersionsRequestFormGroup() {
		return new FormGroup<DescribeRuntimeVersionsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetCanaryRequest {
	}
	export interface GetCanaryRequestFormProperties {
	}
	export function CreateGetCanaryRequestFormGroup() {
		return new FormGroup<GetCanaryRequestFormProperties>({
		});

	}

	export interface GetCanaryRunsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface GetCanaryRunsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetCanaryRunsRequestFormGroup() {
		return new FormGroup<GetCanaryRunsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
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

	export interface StartCanaryRequest {
	}
	export interface StartCanaryRequestFormProperties {
	}
	export function CreateStartCanaryRequestFormGroup() {
		return new FormGroup<StartCanaryRequestFormProperties>({
		});

	}

	export interface StopCanaryRequest {
	}
	export interface StopCanaryRequestFormProperties {
	}
	export function CreateStopCanaryRequestFormGroup() {
		return new FormGroup<StopCanaryRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {
		Tags: TagMap;
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

	export interface UpdateCanaryRequest {

		/** Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. */
		Code?: CanaryCodeInput;
		ExecutionRoleArn?: string | null;
		RuntimeVersion?: string | null;

		/** This structure specifies how often a canary is to make runs and the date and time when it should stop making runs. */
		Schedule?: CanaryScheduleInput;

		/** A structure that contains input information for a canary run. */
		RunConfig?: CanaryRunConfigInput;
		SuccessRetentionPeriodInDays?: number | null;
		FailureRetentionPeriodInDays?: number | null;

		/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
		VpcConfig?: VpcConfigInput;
	}
	export interface UpdateCanaryRequestFormProperties {
		ExecutionRoleArn: FormControl<string | null | undefined>,
		RuntimeVersion: FormControl<string | null | undefined>,
		SuccessRetentionPeriodInDays: FormControl<number | null | undefined>,
		FailureRetentionPeriodInDays: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCanaryRequestFormGroup() {
		return new FormGroup<UpdateCanaryRequestFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			RuntimeVersion: new FormControl<string | null | undefined>(undefined),
			SuccessRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			FailureRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. </p> <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p> <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy. If you are creating a new IAM role for the canary, you also need the the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary Roles and Permissions</a>.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
		 * Post canary
		 * @return {CreateCanaryResponse} Success
		 */
		CreateCanary(requestBody: CreateCanaryPostBody): Observable<CreateCanaryResponse> {
			return this.http.post<CreateCanaryResponse>(this.baseUri + 'canary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Permanently deletes the specified canary.</p> <p>When you delete a canary, resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to use again, you should also delete the following:</p> <ul> <li> <p>The Lambda functions and layers used by this canary. These have the prefix <code>cwsyn-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>The CloudWatch alarms created for this canary. These alarms have a name of <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p> </li> <li> <p>IAM roles created for the canary. If they were created in the console, these roles have the name <code> role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>CloudWatch Logs log groups created for the canary. These logs groups have the name <code>/aws/lambda/cwsyn-<i>MyCanaryName</i> </code>. </p> </li> </ul> <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.</p>
		 * Delete canary/{name}
		 * @param {string} name The name of the canary that you want to delete. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.
		 * @return {DeleteCanaryResponse} Success
		 */
		DeleteCanary(name: string): Observable<DeleteCanaryResponse> {
			return this.http.delete<DeleteCanaryResponse>(this.baseUri + 'canary/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.
		 * Get canary/{name}
		 * @param {string} name The name of the canary that you want details for.
		 * @return {GetCanaryResponse} Success
		 */
		GetCanary(name: string): Observable<GetCanaryResponse> {
			return this.http.get<GetCanaryResponse>(this.baseUri + 'canary/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Use this operation to change the settings of a canary that has already been created.</p> <p>You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
		 * Patch canary/{name}
		 * @param {string} name <p>The name of the canary that you want to update. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p> <p>You cannot change the name of a canary that has already been created.</p>
		 * @return {UpdateCanaryResponse} Success
		 */
		UpdateCanary(name: string, requestBody: UpdateCanaryPatchBody): Observable<UpdateCanaryResponse> {
			return this.http.patch<UpdateCanaryResponse>(this.baseUri + 'canary/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation returns a list of the canaries in your account, along with full details about each canary.</p> <p>This operation does not have resource-level authorization, so if a user is able to use <code>DescribeCanaries</code>, the user can see all of the canaries in the account. A deny policy can only be used to restrict access to all canaries. It cannot be used on specific resources. </p>
		 * Post canaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeCanariesResponse} Success
		 */
		DescribeCanaries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeCanariesPostBody): Observable<DescribeCanariesResponse> {
			return this.http.post<DescribeCanariesResponse>(this.baseUri + 'canaries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation to see information from the most recent run of each canary that you have created.
		 * Post canaries/last-run
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeCanariesLastRunResponse} Success
		 */
		DescribeCanariesLastRun(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeCanariesLastRunPostBody): Observable<DescribeCanariesLastRunResponse> {
			return this.http.post<DescribeCanariesLastRunResponse>(this.baseUri + 'canaries/last-run?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of Synthetics canary runtime versions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
		 * Post runtime-versions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeRuntimeVersionsResponse} Success
		 */
		DescribeRuntimeVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeRuntimeVersionsPostBody): Observable<DescribeRuntimeVersionsResponse> {
			return this.http.post<DescribeRuntimeVersionsResponse>(this.baseUri + 'runtime-versions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of runs for a specified canary.
		 * Post canary/{name}/runs
		 * @param {string} name The name of the canary that you want to see runs for.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCanaryRunsResponse} Success
		 */
		GetCanaryRuns(name: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetCanaryRunsPostBody): Observable<GetCanaryRunsResponse> {
			return this.http.post<GetCanaryRunsResponse>(this.baseUri + 'canary/' + (name == null ? '' : encodeURIComponent(name)) + '/runs&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the tags associated with a canary.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn <p>The ARN of the canary that you want to view tags for.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p>
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified canary. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a canary that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a canary.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn <p>The ARN of the canary that you're adding tags to.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p>
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation to run a canary that has already been created. The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.
		 * Post canary/{name}/start
		 * @param {string} name The name of the canary that you want to run. To find canary names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.
		 * @return {StartCanaryResponse} Success
		 */
		StartCanary(name: string): Observable<StartCanaryResponse> {
			return this.http.post<StartCanaryResponse>(this.baseUri + 'canary/' + (name == null ? '' : encodeURIComponent(name)) + '/start', null, {});
		}

		/**
		 * <p>Stops the canary to prevent all future runs. If the canary is currently running, Synthetics stops waiting for the current run of the specified canary to complete. The run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run.</p> <p>You can use <code>StartCanary</code> to start it running again with the canary’s current schedule at any point in the future. </p>
		 * Post canary/{name}/stop
		 * @param {string} name The name of the canary that you want to stop. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.
		 * @return {StopCanaryResponse} Success
		 */
		StopCanary(name: string): Observable<StopCanaryResponse> {
			return this.http.post<StopCanaryResponse>(this.baseUri + 'canary/' + (name == null ? '' : encodeURIComponent(name)) + '/stop', null, {});
		}

		/**
		 * Removes one or more tags from the specified canary.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn <p>The ARN of the canary that you're removing tags from.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p>
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateCanaryPostBody {

		/**
		 * <p>The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
		 * Required
		 * Max length: 21
		 * Min length: 1
		 * Pattern: ^[0-9a-z_\-]+$
		 */
		Name: string;

		/**
		 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
		 * Required
		 */
		Code: CreateCanaryPostBodyCode;

		/**
		 * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ArtifactS3Location: string;

		/**
		 * <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>
		 * Required
		 * Pattern: ^arn:(aws|aws-cn|aws-us-gov|aws-iso-{0,1}[a-z]{0,1}):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$
		 */
		ExecutionRoleArn: string;

		/**
		 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
		 * Required
		 */
		Schedule: CreateCanaryPostBodySchedule;

		/** A structure that contains input information for a canary run. */
		RunConfig?: CreateCanaryPostBodyRunConfig;

		/**
		 * The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
		 * Minimum: 1
		 * Maximum: 1024
		 */
		SuccessRetentionPeriodInDays?: number | null;

		/**
		 * The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
		 * Minimum: 1
		 * Maximum: 1024
		 */
		FailureRetentionPeriodInDays?: number | null;

		/**
		 * Specifies the runtime version to use for the canary. Currently, the only valid value is <code>syn-1.0</code>. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		RuntimeVersion: string;

		/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
		VpcConfig?: CreateCanaryPostBodyVpcConfig;

		/** <p>A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p> */
		Tags?: {[id: string]: string };
	}
	export interface CreateCanaryPostBodyFormProperties {

		/**
		 * <p>The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
		 * Required
		 * Max length: 21
		 * Min length: 1
		 * Pattern: ^[0-9a-z_\-]+$
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ArtifactS3Location: FormControl<string | null | undefined>,

		/**
		 * <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>
		 * Required
		 * Pattern: ^arn:(aws|aws-cn|aws-us-gov|aws-iso-{0,1}[a-z]{0,1}):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
		 * Minimum: 1
		 * Maximum: 1024
		 */
		SuccessRetentionPeriodInDays: FormControl<number | null | undefined>,

		/**
		 * The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
		 * Minimum: 1
		 * Maximum: 1024
		 */
		FailureRetentionPeriodInDays: FormControl<number | null | undefined>,

		/**
		 * Specifies the runtime version to use for the canary. Currently, the only valid value is <code>syn-1.0</code>. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		RuntimeVersion: FormControl<string | null | undefined>,

		/** <p>A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateCanaryPostBodyFormGroup() {
		return new FormGroup<CreateCanaryPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ArtifactS3Location: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			SuccessRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			FailureRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			RuntimeVersion: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateCanaryPostBodyCode {
		S3Bucket?: string | null;
		S3Key?: string | null;
		S3Version?: string | null;
		ZipFile?: string | null;
		Handler?: string | null;
	}
	export interface CreateCanaryPostBodyCodeFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3Version: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
		Handler: FormControl<string | null | undefined>,
	}
	export function CreateCreateCanaryPostBodyCodeFormGroup() {
		return new FormGroup<CreateCanaryPostBodyCodeFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			S3Version: new FormControl<string | null | undefined>(undefined),
			ZipFile: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCanaryPostBodySchedule {
		Expression?: string | null;
		DurationInSeconds?: number | null;
	}
	export interface CreateCanaryPostBodyScheduleFormProperties {
		Expression: FormControl<string | null | undefined>,
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateCanaryPostBodyScheduleFormGroup() {
		return new FormGroup<CreateCanaryPostBodyScheduleFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateCanaryPostBodyRunConfig {
		TimeoutInSeconds?: number | null;
		MemoryInMB?: number | null;
	}
	export interface CreateCanaryPostBodyRunConfigFormProperties {
		TimeoutInSeconds: FormControl<number | null | undefined>,
		MemoryInMB: FormControl<number | null | undefined>,
	}
	export function CreateCreateCanaryPostBodyRunConfigFormGroup() {
		return new FormGroup<CreateCanaryPostBodyRunConfigFormProperties>({
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			MemoryInMB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateCanaryPostBodyVpcConfig {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface CreateCanaryPostBodyVpcConfigFormProperties {
	}
	export function CreateCreateCanaryPostBodyVpcConfigFormGroup() {
		return new FormGroup<CreateCanaryPostBodyVpcConfigFormProperties>({
		});

	}

	export interface UpdateCanaryPatchBody {

		/** Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. */
		Code?: UpdateCanaryPatchBodyCode;

		/**
		 * <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>
		 * Pattern: ^arn:(aws|aws-cn|aws-us-gov|aws-iso-{0,1}[a-z]{0,1}):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$
		 */
		ExecutionRoleArn?: string | null;

		/**
		 * Specifies the runtime version to use for the canary. Currently, the only valid value is <code>syn-1.0</code>. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
		 * Max length: 1024
		 * Min length: 1
		 */
		RuntimeVersion?: string | null;

		/** This structure specifies how often a canary is to make runs and the date and time when it should stop making runs. */
		Schedule?: UpdateCanaryPatchBodySchedule;

		/** A structure that contains input information for a canary run. */
		RunConfig?: UpdateCanaryPatchBodyRunConfig;

		/**
		 * The number of days to retain data about successful runs of this canary.
		 * Minimum: 1
		 * Maximum: 1024
		 */
		SuccessRetentionPeriodInDays?: number | null;

		/**
		 * The number of days to retain data about failed runs of this canary.
		 * Minimum: 1
		 * Maximum: 1024
		 */
		FailureRetentionPeriodInDays?: number | null;

		/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
		VpcConfig?: UpdateCanaryPatchBodyVpcConfig;
	}
	export interface UpdateCanaryPatchBodyFormProperties {

		/**
		 * <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>
		 * Pattern: ^arn:(aws|aws-cn|aws-us-gov|aws-iso-{0,1}[a-z]{0,1}):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * Specifies the runtime version to use for the canary. Currently, the only valid value is <code>syn-1.0</code>. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
		 * Max length: 1024
		 * Min length: 1
		 */
		RuntimeVersion: FormControl<string | null | undefined>,

		/**
		 * The number of days to retain data about successful runs of this canary.
		 * Minimum: 1
		 * Maximum: 1024
		 */
		SuccessRetentionPeriodInDays: FormControl<number | null | undefined>,

		/**
		 * The number of days to retain data about failed runs of this canary.
		 * Minimum: 1
		 * Maximum: 1024
		 */
		FailureRetentionPeriodInDays: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCanaryPatchBodyFormGroup() {
		return new FormGroup<UpdateCanaryPatchBodyFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			RuntimeVersion: new FormControl<string | null | undefined>(undefined),
			SuccessRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			FailureRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateCanaryPatchBodyCode {
		S3Bucket?: string | null;
		S3Key?: string | null;
		S3Version?: string | null;
		ZipFile?: string | null;
		Handler?: string | null;
	}
	export interface UpdateCanaryPatchBodyCodeFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3Version: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
		Handler: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCanaryPatchBodyCodeFormGroup() {
		return new FormGroup<UpdateCanaryPatchBodyCodeFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			S3Version: new FormControl<string | null | undefined>(undefined),
			ZipFile: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCanaryPatchBodySchedule {
		Expression?: string | null;
		DurationInSeconds?: number | null;
	}
	export interface UpdateCanaryPatchBodyScheduleFormProperties {
		Expression: FormControl<string | null | undefined>,
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCanaryPatchBodyScheduleFormGroup() {
		return new FormGroup<UpdateCanaryPatchBodyScheduleFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateCanaryPatchBodyRunConfig {
		TimeoutInSeconds?: number | null;
		MemoryInMB?: number | null;
	}
	export interface UpdateCanaryPatchBodyRunConfigFormProperties {
		TimeoutInSeconds: FormControl<number | null | undefined>,
		MemoryInMB: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCanaryPatchBodyRunConfigFormGroup() {
		return new FormGroup<UpdateCanaryPatchBodyRunConfigFormProperties>({
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			MemoryInMB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateCanaryPatchBodyVpcConfig {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface UpdateCanaryPatchBodyVpcConfigFormProperties {
	}
	export function CreateUpdateCanaryPatchBodyVpcConfigFormGroup() {
		return new FormGroup<UpdateCanaryPatchBodyVpcConfigFormProperties>({
		});

	}

	export interface DescribeCanariesPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
		 * Pattern: ^[a-zA-Z0-9=/+_.-]{4,252}$
		 */
		NextToken?: string | null;

		/**
		 * Specify this parameter to limit how many canaries are returned each time you use the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 100 is used.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface DescribeCanariesPostBodyFormProperties {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
		 * Pattern: ^[a-zA-Z0-9=/+_.-]{4,252}$
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Specify this parameter to limit how many canaries are returned each time you use the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 100 is used.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeCanariesPostBodyFormGroup() {
		return new FormGroup<DescribeCanariesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeCanariesLastRunPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeCanaries</code> operation to retrieve the next set of results.
		 * Pattern: ^[a-zA-Z0-9=/+_.-]{4,252}$
		 */
		NextToken?: string | null;

		/**
		 * Specify this parameter to limit how many runs are returned each time you use the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeCanariesLastRunPostBodyFormProperties {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeCanaries</code> operation to retrieve the next set of results.
		 * Pattern: ^[a-zA-Z0-9=/+_.-]{4,252}$
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Specify this parameter to limit how many runs are returned each time you use the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeCanariesLastRunPostBodyFormGroup() {
		return new FormGroup<DescribeCanariesLastRunPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeRuntimeVersionsPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next set of results.
		 * Pattern: ^[a-zA-Z0-9=/+_.-]{4,252}$
		 */
		NextToken?: string | null;

		/**
		 * Specify this parameter to limit how many runs are returned each time you use the <code>DescribeRuntimeVersions</code> operation. If you omit this parameter, the default of 100 is used.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeRuntimeVersionsPostBodyFormProperties {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next set of results.
		 * Pattern: ^[a-zA-Z0-9=/+_.-]{4,252}$
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Specify this parameter to limit how many runs are returned each time you use the <code>DescribeRuntimeVersions</code> operation. If you omit this parameter, the default of 100 is used.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeRuntimeVersionsPostBodyFormGroup() {
		return new FormGroup<DescribeRuntimeVersionsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetCanaryRunsPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next set of results.
		 * Pattern: ^[a-zA-Z0-9=/+_.-]{4,252}$
		 */
		NextToken?: string | null;

		/**
		 * Specify this parameter to limit how many runs are returned each time you use the <code>GetCanaryRuns</code> operation. If you omit this parameter, the default of 100 is used.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface GetCanaryRunsPostBodyFormProperties {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next set of results.
		 * Pattern: ^[a-zA-Z0-9=/+_.-]{4,252}$
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Specify this parameter to limit how many runs are returned each time you use the <code>GetCanaryRuns</code> operation. If you omit this parameter, the default of 100 is used.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetCanaryRunsPostBodyFormGroup() {
		return new FormGroup<GetCanaryRunsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The list of key-value pairs to associate with the canary.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The list of key-value pairs to associate with the canary.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

}

