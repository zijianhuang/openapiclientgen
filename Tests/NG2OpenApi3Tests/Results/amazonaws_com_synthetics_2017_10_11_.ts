import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateResourceResponse {
	}
	export interface AssociateResourceResponseFormProperties {
	}
	export function CreateAssociateResourceResponseFormGroup() {
		return new FormGroup<AssociateResourceResponseFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateCanaryResponse {
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
		Id?: string;
		Name?: string;

		/** This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics. */
		Code?: CanaryCodeOutput;
		ExecutionRoleArn?: string;
		Schedule?: CanaryScheduleOutput;

		/** A structure that contains information about a canary run. */
		RunConfig?: CanaryRunConfigOutput;
		SuccessRetentionPeriodInDays?: number | null;
		FailureRetentionPeriodInDays?: number | null;
		Status?: CanaryStatus;
		Timeline?: CanaryTimeline;
		ArtifactS3Location?: string;
		EngineArn?: string;
		RuntimeVersion?: string;

		/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
		VpcConfig?: VpcConfigOutput;
		VisualReference?: VisualReferenceOutput;
		Tags?: TagMap;
		ArtifactConfig?: ArtifactConfigOutput;
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
		SourceLocationArn?: string;
		Handler?: string;
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
		Expression?: string;
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


	/** A structure that contains information about a canary run. */
	export interface CanaryRunConfigOutput {
		TimeoutInSeconds?: number | null;
		MemoryInMB?: number | null;
		ActiveTracing?: boolean | null;
	}

	/** A structure that contains information about a canary run. */
	export interface CanaryRunConfigOutputFormProperties {
		TimeoutInSeconds: FormControl<number | null | undefined>,
		MemoryInMB: FormControl<number | null | undefined>,
		ActiveTracing: FormControl<boolean | null | undefined>,
	}
	export function CreateCanaryRunConfigOutputFormGroup() {
		return new FormGroup<CanaryRunConfigOutputFormProperties>({
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			MemoryInMB: new FormControl<number | null | undefined>(undefined),
			ActiveTracing: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A structure that contains the current state of the canary. */
	export interface CanaryStatus {
		State?: CanaryState;
		StateReason?: string;
		StateReasonCode?: CanaryStateReasonCode;
	}

	/** A structure that contains the current state of the canary. */
	export interface CanaryStatusFormProperties {
		State: FormControl<CanaryState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		StateReasonCode: FormControl<CanaryStateReasonCode | null | undefined>,
	}
	export function CreateCanaryStatusFormGroup() {
		return new FormGroup<CanaryStatusFormProperties>({
			State: new FormControl<CanaryState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			StateReasonCode: new FormControl<CanaryStateReasonCode | null | undefined>(undefined),
		});

	}

	export enum CanaryState { CREATING = 'CREATING', READY = 'READY', STARTING = 'STARTING', RUNNING = 'RUNNING', UPDATING = 'UPDATING', STOPPING = 'STOPPING', STOPPED = 'STOPPED', ERROR = 'ERROR', DELETING = 'DELETING' }

	export enum CanaryStateReasonCode { INVALID_PERMISSIONS = 'INVALID_PERMISSIONS', CREATE_PENDING = 'CREATE_PENDING', CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_FAILED = 'CREATE_FAILED', UPDATE_PENDING = 'UPDATE_PENDING', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', UPDATE_COMPLETE = 'UPDATE_COMPLETE', ROLLBACK_COMPLETE = 'ROLLBACK_COMPLETE', ROLLBACK_FAILED = 'ROLLBACK_FAILED', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETE_FAILED = 'DELETE_FAILED', SYNC_DELETE_IN_PROGRESS = 'SYNC_DELETE_IN_PROGRESS' }


	/** This structure contains information about when the canary was created and modified. */
	export interface CanaryTimeline {
		Created?: Date;
		LastModified?: Date;
		LastStarted?: Date;
		LastStopped?: Date;
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
		VpcId?: string;
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


	/** <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates of any parts of those screenshots that are ignored during visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p> */
	export interface VisualReferenceOutput {
		BaseScreenshots?: Array<BaseScreenshot>;
		BaseCanaryRunId?: string;
	}

	/** <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates of any parts of those screenshots that are ignored during visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p> */
	export interface VisualReferenceOutputFormProperties {
		BaseCanaryRunId: FormControl<string | null | undefined>,
	}
	export function CreateVisualReferenceOutputFormGroup() {
		return new FormGroup<VisualReferenceOutputFormProperties>({
			BaseCanaryRunId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary. */
	export interface BaseScreenshot {

		/** Required */
		ScreenshotName: string;
		IgnoreCoordinates?: Array<string>;
	}

	/** A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary. */
	export interface BaseScreenshotFormProperties {

		/** Required */
		ScreenshotName: FormControl<string | null | undefined>,
	}
	export function CreateBaseScreenshotFormGroup() {
		return new FormGroup<BaseScreenshotFormProperties>({
			ScreenshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. */
	export interface ArtifactConfigOutput {
		S3Encryption?: S3EncryptionConfig;
	}

	/** A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. */
	export interface ArtifactConfigOutputFormProperties {
	}
	export function CreateArtifactConfigOutputFormGroup() {
		return new FormGroup<ArtifactConfigOutputFormProperties>({
		});

	}


	/** <p>A structure that contains the configuration of encryption-at-rest settings for canary artifacts that the canary uploads to Amazon S3. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a> </p> */
	export interface S3EncryptionConfig {
		EncryptionMode?: EncryptionMode;
		KmsKeyArn?: string;
	}

	/** <p>A structure that contains the configuration of encryption-at-rest settings for canary artifacts that the canary uploads to Amazon S3. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html">Encrypting canary artifacts</a> </p> */
	export interface S3EncryptionConfigFormProperties {
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3EncryptionConfigFormGroup() {
		return new FormGroup<S3EncryptionConfigFormProperties>({
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionMode { SSE_S3 = 'SSE_S3', SSE_KMS = 'SSE_KMS' }

	export interface EnvironmentVariablesMap {
	}
	export interface EnvironmentVariablesMapFormProperties {
	}
	export function CreateEnvironmentVariablesMapFormGroup() {
		return new FormGroup<EnvironmentVariablesMapFormProperties>({
		});

	}

	export interface RequestEntityTooLargeException {
	}
	export interface RequestEntityTooLargeExceptionFormProperties {
	}
	export function CreateRequestEntityTooLargeExceptionFormGroup() {
		return new FormGroup<RequestEntityTooLargeExceptionFormProperties>({
		});

	}

	export interface CreateGroupResponse {
		Group?: Group;
	}
	export interface CreateGroupResponseFormProperties {
	}
	export function CreateCreateGroupResponseFormGroup() {
		return new FormGroup<CreateGroupResponseFormProperties>({
		});

	}


	/** This structure contains information about one group. */
	export interface Group {
		Id?: string;
		Name?: string;
		Arn?: string;
		Tags?: TagMap;
		CreatedTime?: Date;
		LastModifiedTime?: Date;
	}

	/** This structure contains information about one group. */
	export interface GroupFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
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

	export interface DeleteGroupResponse {
	}
	export interface DeleteGroupResponseFormProperties {
	}
	export function CreateDeleteGroupResponseFormGroup() {
		return new FormGroup<DeleteGroupResponseFormProperties>({
		});

	}

	export interface DescribeCanariesResponse {
		Canaries?: Array<Canary>;
		NextToken?: string;
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
		NextToken?: string;
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
		CanaryName?: string;
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
		Id?: string;
		Name?: string;
		Status?: CanaryRunStatus;
		Timeline?: CanaryRunTimeline;
		ArtifactS3Location?: string;
	}

	/** This structure contains the details about one run of one canary. */
	export interface CanaryRunFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ArtifactS3Location: FormControl<string | null | undefined>,
	}
	export function CreateCanaryRunFormGroup() {
		return new FormGroup<CanaryRunFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ArtifactS3Location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure contains the status information about a canary run. */
	export interface CanaryRunStatus {
		State?: CanaryRunState;
		StateReason?: string;
		StateReasonCode?: CanaryRunStateReasonCode;
	}

	/** This structure contains the status information about a canary run. */
	export interface CanaryRunStatusFormProperties {
		State: FormControl<CanaryRunState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		StateReasonCode: FormControl<CanaryRunStateReasonCode | null | undefined>,
	}
	export function CreateCanaryRunStatusFormGroup() {
		return new FormGroup<CanaryRunStatusFormProperties>({
			State: new FormControl<CanaryRunState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			StateReasonCode: new FormControl<CanaryRunStateReasonCode | null | undefined>(undefined),
		});

	}

	export enum CanaryRunState { RUNNING = 'RUNNING', PASSED = 'PASSED', FAILED = 'FAILED' }

	export enum CanaryRunStateReasonCode { CANARY_FAILURE = 'CANARY_FAILURE', EXECUTION_FAILURE = 'EXECUTION_FAILURE' }


	/** This structure contains the start and end times of a single canary run. */
	export interface CanaryRunTimeline {
		Started?: Date;
		Completed?: Date;
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
		NextToken?: string;
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
		VersionName?: string;
		Description?: string;
		ReleaseDate?: Date;
		DeprecationDate?: Date;
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

	export interface DisassociateResourceResponse {
	}
	export interface DisassociateResourceResponseFormProperties {
	}
	export function CreateDisassociateResourceResponseFormGroup() {
		return new FormGroup<DisassociateResourceResponseFormProperties>({
		});

	}

	export interface GetCanaryResponse {
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
		NextToken?: string;
	}
	export interface GetCanaryRunsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCanaryRunsResponseFormGroup() {
		return new FormGroup<GetCanaryRunsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupResponse {
		Group?: Group;
	}
	export interface GetGroupResponseFormProperties {
	}
	export function CreateGetGroupResponseFormGroup() {
		return new FormGroup<GetGroupResponseFormProperties>({
		});

	}

	export interface ListAssociatedGroupsResponse {
		Groups?: Array<GroupSummary>;
		NextToken?: string;
	}
	export interface ListAssociatedGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedGroupsResponseFormGroup() {
		return new FormGroup<ListAssociatedGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing some information about a group. */
	export interface GroupSummary {
		Id?: string;
		Name?: string;
		Arn?: string;
	}

	/** A structure containing some information about a group. */
	export interface GroupSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateGroupSummaryFormGroup() {
		return new FormGroup<GroupSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupResourcesResponse {
		Resources?: Array<string>;
		NextToken?: string;
	}
	export interface ListGroupResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupResourcesResponseFormGroup() {
		return new FormGroup<ListGroupResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupsResponse {
		Groups?: Array<GroupSummary>;
		NextToken?: string;
	}
	export interface ListGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
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

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
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


	/** A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. */
	export interface ArtifactConfigInput {
		S3Encryption?: S3EncryptionConfig;
	}

	/** A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. */
	export interface ArtifactConfigInputFormProperties {
	}
	export function CreateArtifactConfigInputFormGroup() {
		return new FormGroup<ArtifactConfigInputFormProperties>({
		});

	}

	export interface AssociateResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface AssociateResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResourceRequestFormGroup() {
		return new FormGroup<AssociateResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.  */
	export interface CanaryCodeInput {
		S3Bucket?: string;
		S3Key?: string;
		S3Version?: string;
		ZipFile?: string;

		/** Required */
		Handler: string;
	}

	/** Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.  */
	export interface CanaryCodeInputFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3Version: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,

		/** Required */
		Handler: FormControl<string | null | undefined>,
	}
	export function CreateCanaryCodeInputFormGroup() {
		return new FormGroup<CanaryCodeInputFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			S3Version: new FormControl<string | null | undefined>(undefined),
			ZipFile: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure that contains input information for a canary run. */
	export interface CanaryRunConfigInput {
		TimeoutInSeconds?: number | null;
		MemoryInMB?: number | null;
		ActiveTracing?: boolean | null;
		EnvironmentVariables?: EnvironmentVariablesMap;
	}

	/** A structure that contains input information for a canary run. */
	export interface CanaryRunConfigInputFormProperties {
		TimeoutInSeconds: FormControl<number | null | undefined>,
		MemoryInMB: FormControl<number | null | undefined>,
		ActiveTracing: FormControl<boolean | null | undefined>,
	}
	export function CreateCanaryRunConfigInputFormGroup() {
		return new FormGroup<CanaryRunConfigInputFormProperties>({
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			MemoryInMB: new FormControl<number | null | undefined>(undefined),
			ActiveTracing: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This structure specifies how often a canary is to make runs and the date and time when it should stop making runs. */
	export interface CanaryScheduleInput {

		/** Required */
		Expression: string;
		DurationInSeconds?: number | null;
	}

	/** This structure specifies how often a canary is to make runs and the date and time when it should stop making runs. */
	export interface CanaryScheduleInputFormProperties {

		/** Required */
		Expression: FormControl<string | null | undefined>,
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCanaryScheduleInputFormGroup() {
		return new FormGroup<CanaryScheduleInputFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


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

		/** Required */
		Name: string;

		/** Required */
		Code: CanaryCodeInput;

		/** Required */
		ArtifactS3Location: string;

		/** Required */
		ExecutionRoleArn: string;

		/** Required */
		Schedule: CanaryScheduleInput;
		RunConfig?: CanaryRunConfigInput;
		SuccessRetentionPeriodInDays?: number | null;
		FailureRetentionPeriodInDays?: number | null;

		/** Required */
		RuntimeVersion: string;
		VpcConfig?: VpcConfigInput;
		Tags?: TagMap;
		ArtifactConfig?: ArtifactConfigInput;
	}
	export interface CreateCanaryRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ArtifactS3Location: FormControl<string | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		SuccessRetentionPeriodInDays: FormControl<number | null | undefined>,
		FailureRetentionPeriodInDays: FormControl<number | null | undefined>,

		/** Required */
		RuntimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateCanaryRequestFormGroup() {
		return new FormGroup<CreateCanaryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ArtifactS3Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SuccessRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			FailureRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			RuntimeVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGroupRequest {

		/** Required */
		Name: string;
		Tags?: TagMap;
	}
	export interface CreateGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteGroupRequest {
	}
	export interface DeleteGroupRequestFormProperties {
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
		});

	}

	export interface DescribeCanariesLastRunRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Names?: Array<string>;
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
		NextToken?: string;
		MaxResults?: number | null;
		Names?: Array<string>;
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
		NextToken?: string;
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

	export interface DisassociateResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DisassociateResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResourceRequestFormGroup() {
		return new FormGroup<DisassociateResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		NextToken?: string;
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

	export interface GetGroupRequest {
	}
	export interface GetGroupRequestFormProperties {
	}
	export function CreateGetGroupRequestFormGroup() {
		return new FormGroup<GetGroupRequestFormProperties>({
		});

	}

	export interface ListAssociatedGroupsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListAssociatedGroupsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAssociatedGroupsRequestFormGroup() {
		return new FormGroup<ListAssociatedGroupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupResourcesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListGroupResourcesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGroupResourcesRequestFormGroup() {
		return new FormGroup<ListGroupResourcesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListGroupsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGroupsRequestFormGroup() {
		return new FormGroup<ListGroupsRequestFormProperties>({
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

		/** Required */
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


	/** <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p> */
	export interface VisualReferenceInput {
		BaseScreenshots?: Array<BaseScreenshot>;

		/** Required */
		BaseCanaryRunId: string;
	}

	/** <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p> */
	export interface VisualReferenceInputFormProperties {

		/** Required */
		BaseCanaryRunId: FormControl<string | null | undefined>,
	}
	export function CreateVisualReferenceInputFormGroup() {
		return new FormGroup<VisualReferenceInputFormProperties>({
			BaseCanaryRunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCanaryRequest {
		Code?: CanaryCodeInput;
		ExecutionRoleArn?: string;
		RuntimeVersion?: string;
		Schedule?: CanaryScheduleInput;
		RunConfig?: CanaryRunConfigInput;
		SuccessRetentionPeriodInDays?: number | null;
		FailureRetentionPeriodInDays?: number | null;
		VpcConfig?: VpcConfigInput;
		VisualReference?: VisualReferenceInput;
		ArtifactS3Location?: string;
		ArtifactConfig?: ArtifactConfigInput;
	}
	export interface UpdateCanaryRequestFormProperties {
		ExecutionRoleArn: FormControl<string | null | undefined>,
		RuntimeVersion: FormControl<string | null | undefined>,
		SuccessRetentionPeriodInDays: FormControl<number | null | undefined>,
		FailureRetentionPeriodInDays: FormControl<number | null | undefined>,
		ArtifactS3Location: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCanaryRequestFormGroup() {
		return new FormGroup<UpdateCanaryRequestFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			RuntimeVersion: new FormControl<string | null | undefined>(undefined),
			SuccessRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			FailureRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
			ArtifactS3Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates a canary with a group. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>You must run this operation in the Region where the canary exists.</p>
		 * Patch group/{groupIdentifier}/associate
		 * @param {string} groupIdentifier Specifies the group. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.
		 * @return {AssociateResourceResponse} Success
		 */
		AssociateResource(groupIdentifier: string, requestBody: AssociateResourcePatchBody): Observable<AssociateResourceResponse> {
			return this.http.patch<AssociateResourceResponse>(this.baseUri + 'group/' + (groupIdentifier == null ? '' : encodeURIComponent(groupIdentifier)) + '/associate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. </p> <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p> <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy. If you are creating a new IAM role for the canary, you also need the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary Roles and Permissions</a>.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
		 * Post canary
		 * @return {CreateCanaryResponse} Success
		 */
		CreateCanary(requestBody: CreateCanaryPostBody): Observable<CreateCanaryResponse> {
			return this.http.post<CreateCanaryResponse>(this.baseUri + 'canary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a group which you can use to associate canaries with each other, including cross-Region canaries. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. </p> <p>Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and you can view it and add canaries to it from any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view.</p> <p>Groups are supported in all Regions except the Regions that are disabled by default. For more information about these Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Enabling a Region</a>.</p> <p>Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups.</p>
		 * Post group
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(requestBody: CreateGroupPostBody): Observable<CreateGroupResponse> {
			return this.http.post<CreateGroupResponse>(this.baseUri + 'group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Permanently deletes the specified canary.</p> <p>If you specify <code>DeleteLambda</code> to <code>true</code>, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary.</p> <p>Other resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to use again, you should also delete the following:</p> <ul> <li> <p>The CloudWatch alarms created for this canary. These alarms have a name of <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p> </li> <li> <p>IAM roles created for the canary. If they were created in the console, these roles have the name <code> role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>CloudWatch Logs log groups created for the canary. These logs groups have the name <code>/aws/lambda/cwsyn-<i>MyCanaryName</i> </code>. </p> </li> </ul> <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.</p>
		 * Delete canary/{name}
		 * @param {string} name The name of the canary that you want to delete. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.
		 * @param {boolean} deleteLambda <p>Specifies whether to also delete the Lambda functions and layers used by this canary. The default is false.</p> <p>Type: Boolean</p>
		 * @return {DeleteCanaryResponse} Success
		 */
		DeleteCanary(name: string, deleteLambda: boolean | null | undefined): Observable<DeleteCanaryResponse> {
			return this.http.delete<DeleteCanaryResponse>(this.baseUri + 'canary/' + (name == null ? '' : encodeURIComponent(name)) + '&deleteLambda=' + deleteLambda, {});
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
		 * <p>Updates the configuration of a canary that has already been created.</p> <p>You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
		 * Patch canary/{name}
		 * @param {string} name <p>The name of the canary that you want to update. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p> <p>You cannot change the name of a canary that has already been created.</p>
		 * @return {UpdateCanaryResponse} Success
		 */
		UpdateCanary(name: string, requestBody: UpdateCanaryPatchBody): Observable<UpdateCanaryResponse> {
			return this.http.patch<UpdateCanaryResponse>(this.baseUri + 'canary/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a group. The group doesn't need to be empty to be deleted. If there are canaries in the group, they are not deleted when you delete the group. </p> <p>Groups are a global resource that appear in all Regions, but the request to delete a group must be made from its home Region. You can find the home Region of a group within its ARN.</p>
		 * Delete group/{groupIdentifier}
		 * @param {string} groupIdentifier Specifies which group to delete. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.
		 * @return {DeleteGroupResponse} Success
		 */
		DeleteGroup(groupIdentifier: string): Observable<DeleteGroupResponse> {
			return this.http.delete<DeleteGroupResponse>(this.baseUri + 'group/' + (groupIdentifier == null ? '' : encodeURIComponent(groupIdentifier)), {});
		}

		/**
		 * Returns information about one group. Groups are a global resource, so you can use this operation from any Region.
		 * Get group/{groupIdentifier}
		 * @param {string} groupIdentifier Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.
		 * @return {GetGroupResponse} Success
		 */
		GetGroup(groupIdentifier: string): Observable<GetGroupResponse> {
			return this.http.get<GetGroupResponse>(this.baseUri + 'group/' + (groupIdentifier == null ? '' : encodeURIComponent(groupIdentifier)), {});
		}

		/**
		 * <p>This operation returns a list of the canaries in your account, along with full details about each canary.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>
		 * Post canaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeCanariesResponse} Success
		 */
		DescribeCanaries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeCanariesPostBody): Observable<DescribeCanariesResponse> {
			return this.http.post<DescribeCanariesResponse>(this.baseUri + 'canaries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Use this operation to see information from the most recent run of each canary that you have created.</p> <p>This operation supports resource-level authorization using an IAM policy and the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>
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
		 * Removes a canary from a group. You must run this operation in the Region where the canary exists.
		 * Patch group/{groupIdentifier}/disassociate
		 * @param {string} groupIdentifier Specifies the group. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.
		 * @return {DisassociateResourceResponse} Success
		 */
		DisassociateResource(groupIdentifier: string, requestBody: DisassociateResourcePatchBody): Observable<DisassociateResourceResponse> {
			return this.http.patch<DisassociateResourceResponse>(this.baseUri + 'group/' + (groupIdentifier == null ? '' : encodeURIComponent(groupIdentifier)) + '/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Returns a list of the groups that the specified canary is associated with. The canary that you specify must be in the current Region.
		 * Post resource/{resourceArn}/groups
		 * @param {string} resourceArn The ARN of the canary that you want to view groups for.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAssociatedGroupsResponse} Success
		 */
		ListAssociatedGroups(resourceArn: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAssociatedGroupsPostBody): Observable<ListAssociatedGroupsResponse> {
			return this.http.post<ListAssociatedGroupsResponse>(this.baseUri + 'resource/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/groups&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation returns a list of the ARNs of the canaries that are associated with the specified group.
		 * Post group/{groupIdentifier}/resources
		 * @param {string} groupIdentifier Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupResourcesResponse} Success
		 */
		ListGroupResources(groupIdentifier: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupResourcesPostBody): Observable<ListGroupResourcesResponse> {
			return this.http.post<ListGroupResourcesResponse>(this.baseUri + 'group/' + (groupIdentifier == null ? '' : encodeURIComponent(groupIdentifier)) + '/resources&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups from all Regions are returned.
		 * Post groups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupsPostBody): Observable<ListGroupsResponse> {
			return this.http.post<ListGroupsResponse>(this.baseUri + 'groups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the tags associated with a canary or group.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn <p>The ARN of the canary or group that you want to view tags for.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p> <p>The ARN format of a group is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i> </code> </p>
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified canary or group. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a canary or group.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn <p>The ARN of the canary or group that you're adding tags to.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p> <p>The ARN format of a group is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i> </code> </p>
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
		 * <p>Stops the canary to prevent all future runs. If the canary is currently running,the run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run.</p> <p>You can use <code>StartCanary</code> to start it running again with the canary’s current schedule at any point in the future. </p>
		 * Post canary/{name}/stop
		 * @param {string} name The name of the canary that you want to stop. To find the names of your canaries, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">ListCanaries</a>.
		 * @return {StopCanaryResponse} Success
		 */
		StopCanary(name: string): Observable<StopCanaryResponse> {
			return this.http.post<StopCanaryResponse>(this.baseUri + 'canary/' + (name == null ? '' : encodeURIComponent(name)) + '/stop', null, {});
		}

		/**
		 * Removes one or more tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn <p>The ARN of the canary or group that you're removing tags from.</p> <p>The ARN format of a canary is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:canary:<i>canary-name</i> </code>.</p> <p>The ARN format of a group is <code>arn:aws:synthetics:<i>Region</i>:<i>account-id</i>:group:<i>group-name</i> </code> </p>
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface AssociateResourcePatchBody {

		/**
		 * The ARN of the canary that you want to associate with the specified group.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ResourceArn: string;
	}
	export interface AssociateResourcePatchBodyFormProperties {

		/**
		 * The ARN of the canary that you want to associate with the specified group.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResourcePatchBodyFormGroup() {
		return new FormGroup<AssociateResourcePatchBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:canary:[0-9a-z_\-]{1,21}')]),
		});

	}

	export interface CreateCanaryPostBody {

		/**
		 * <p>The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
		 * Required
		 * Max length: 21
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
		 * Required
		 */
		Code: CreateCanaryPostBodyCode;

		/**
		 * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ArtifactS3Location: string;

		/**
		 * <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:PutLogEvents</code> </p> </li> </ul>
		 * Required
		 * Max length: 2048
		 * Min length: 1
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
		 * Specifies the runtime version to use for the canary. For a list of valid runtime versions and more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		RuntimeVersion: string;

		/** If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>. */
		VpcConfig?: CreateCanaryPostBodyVpcConfig;

		/** <p>A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p> */
		Tags?: {[id: string]: string };

		/** A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. */
		ArtifactConfig?: CreateCanaryPostBodyArtifactConfig;
	}
	export interface CreateCanaryPostBodyFormProperties {

		/**
		 * <p>The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
		 * Required
		 * Max length: 21
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ArtifactS3Location: FormControl<string | null | undefined>,

		/**
		 * <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:PutLogEvents</code> </p> </li> </ul>
		 * Required
		 * Max length: 2048
		 * Min length: 1
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
		 * Specifies the runtime version to use for the canary. For a list of valid runtime versions and more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
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
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(21), Validators.pattern('^[0-9a-z_\-]+$')]),
			ArtifactS3Location: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+')]),
			SuccessRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			FailureRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			RuntimeVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateCanaryPostBodyCode {
		S3Bucket?: string;
		S3Key?: string;
		S3Version?: string;
		ZipFile?: string;
		Handler?: string;
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
		Expression?: string;
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
		ActiveTracing?: boolean | null;
		EnvironmentVariables?: EnvironmentVariablesMap;
	}
	export interface CreateCanaryPostBodyRunConfigFormProperties {
		TimeoutInSeconds: FormControl<number | null | undefined>,
		MemoryInMB: FormControl<number | null | undefined>,
		ActiveTracing: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateCanaryPostBodyRunConfigFormGroup() {
		return new FormGroup<CreateCanaryPostBodyRunConfigFormProperties>({
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			MemoryInMB: new FormControl<number | null | undefined>(undefined),
			ActiveTracing: new FormControl<boolean | null | undefined>(undefined),
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

	export interface CreateCanaryPostBodyArtifactConfig {
		S3Encryption?: S3EncryptionConfig;
	}
	export interface CreateCanaryPostBodyArtifactConfigFormProperties {
	}
	export function CreateCreateCanaryPostBodyArtifactConfigFormGroup() {
		return new FormGroup<CreateCanaryPostBodyArtifactConfigFormProperties>({
		});

	}

	export interface CreateGroupPostBody {

		/**
		 * <p>The name for the group. It can include any Unicode characters.</p> <p>The names for all groups in your account, across all Regions, must be unique.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/** <p>A list of key-value pairs to associate with the group. You can associate as many as 50 tags with a group.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p> */
		Tags?: {[id: string]: string };
	}
	export interface CreateGroupPostBodyFormProperties {

		/**
		 * <p>The name for the group. It can include any Unicode characters.</p> <p>The names for all groups in your account, across all Regions, must be unique.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** <p>A list of key-value pairs to associate with the group. You can associate as many as 50 tags with a group.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateGroupPostBodyFormGroup() {
		return new FormGroup<CreateGroupPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateCanaryPatchBody {

		/** Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. */
		Code?: UpdateCanaryPatchBodyCode;

		/**
		 * <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>
		 * Max length: 2048
		 * Min length: 1
		 */
		ExecutionRoleArn?: string | null;

		/**
		 * Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
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

		/** <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary. It can optionally also specify parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p> */
		VisualReference?: UpdateCanaryPatchBodyVisualReference;

		/**
		 * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).
		 * Max length: 1024
		 * Min length: 1
		 */
		ArtifactS3Location?: string | null;

		/** A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. */
		ArtifactConfig?: UpdateCanaryPatchBodyArtifactConfig;
	}
	export interface UpdateCanaryPatchBodyFormProperties {

		/**
		 * <p>The ARN of the IAM role to be used to run the canary. This role must already exist, and must include <code>lambda.amazonaws.com</code> as a principal in the trust policy. The role must also have the following permissions:</p> <ul> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>s3:ListAllMyBuckets</code> </p> </li> <li> <p> <code>cloudwatch:PutMetricData</code> </p> </li> <li> <p> <code>logs:CreateLogGroup</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> <li> <p> <code>logs:CreateLogStream</code> </p> </li> </ul>
		 * Max length: 2048
		 * Min length: 1
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
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

		/**
		 * The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files. The name of the S3 bucket can't include a period (.).
		 * Max length: 1024
		 * Min length: 1
		 */
		ArtifactS3Location: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCanaryPatchBodyFormGroup() {
		return new FormGroup<UpdateCanaryPatchBodyFormProperties>({
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+')]),
			RuntimeVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			SuccessRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			FailureRetentionPeriodInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			ArtifactS3Location: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface UpdateCanaryPatchBodyCode {
		S3Bucket?: string;
		S3Key?: string;
		S3Version?: string;
		ZipFile?: string;
		Handler?: string;
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
		Expression?: string;
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
		ActiveTracing?: boolean | null;
		EnvironmentVariables?: EnvironmentVariablesMap;
	}
	export interface UpdateCanaryPatchBodyRunConfigFormProperties {
		TimeoutInSeconds: FormControl<number | null | undefined>,
		MemoryInMB: FormControl<number | null | undefined>,
		ActiveTracing: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateCanaryPatchBodyRunConfigFormGroup() {
		return new FormGroup<UpdateCanaryPatchBodyRunConfigFormProperties>({
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			MemoryInMB: new FormControl<number | null | undefined>(undefined),
			ActiveTracing: new FormControl<boolean | null | undefined>(undefined),
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

	export interface UpdateCanaryPatchBodyVisualReference {
		BaseScreenshots?: Array<BaseScreenshot>;
		BaseCanaryRunId?: string;
	}
	export interface UpdateCanaryPatchBodyVisualReferenceFormProperties {
		BaseCanaryRunId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCanaryPatchBodyVisualReferenceFormGroup() {
		return new FormGroup<UpdateCanaryPatchBodyVisualReferenceFormProperties>({
			BaseCanaryRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCanaryPatchBodyArtifactConfig {
		S3Encryption?: S3EncryptionConfig;
	}
	export interface UpdateCanaryPatchBodyArtifactConfigFormProperties {
	}
	export function CreateUpdateCanaryPatchBodyArtifactConfigFormGroup() {
		return new FormGroup<UpdateCanaryPatchBodyArtifactConfigFormProperties>({
		});

	}

	export interface DescribeCanariesPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
		 * Max length: 252
		 * Min length: 4
		 */
		NextToken?: string | null;

		/**
		 * Specify this parameter to limit how many canaries are returned each time you use the <code>DescribeCanaries</code> operation. If you omit this parameter, the default of 100 is used.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;

		/**
		 * <p>Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names.</p> <p>If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use this parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Names?: Array<string>;
	}
	export interface DescribeCanariesPostBodyFormProperties {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
		 * Max length: 252
		 * Min length: 4
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
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(252)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface DescribeCanariesLastRunPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next set of results.
		 * Max length: 252
		 * Min length: 4
		 */
		NextToken?: string | null;

		/**
		 * Specify this parameter to limit how many runs are returned each time you use the <code>DescribeLastRun</code> operation. If you omit this parameter, the default of 100 is used.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * <p>Use this parameter to return only canaries that match the names that you specify here. You can specify as many as five canary names.</p> <p>If you specify this parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.</p> <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html"> Limiting a user to viewing specific canaries</a>.</p>
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Names?: Array<string>;
	}
	export interface DescribeCanariesLastRunPostBodyFormProperties {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeCanariesLastRun</code> operation to retrieve the next set of results.
		 * Max length: 252
		 * Min length: 4
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
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(252)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface DescribeRuntimeVersionsPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent <code>DescribeRuntimeVersions</code> operation to retrieve the next set of results.
		 * Max length: 252
		 * Min length: 4
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
		 * Max length: 252
		 * Min length: 4
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
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(252)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface DisassociateResourcePatchBody {

		/**
		 * The ARN of the canary that you want to remove from the specified group.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ResourceArn: string;
	}
	export interface DisassociateResourcePatchBodyFormProperties {

		/**
		 * The ARN of the canary that you want to remove from the specified group.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResourcePatchBodyFormGroup() {
		return new FormGroup<DisassociateResourcePatchBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:(aws[a-zA-Z-]*)?:synthetics:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:canary:[0-9a-z_\-]{1,21}')]),
		});

	}

	export interface GetCanaryRunsPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent <code>GetCanaryRuns</code> operation to retrieve the next set of results.
		 * Max length: 252
		 * Min length: 4
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
		 * Max length: 252
		 * Min length: 4
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
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(252)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListAssociatedGroupsPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
		 * Max length: 512
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Specify this parameter to limit how many groups are returned each time you use the <code>ListAssociatedGroups</code> operation. If you omit this parameter, the default of 20 is used.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListAssociatedGroupsPostBodyFormProperties {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
		 * Max length: 512
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Specify this parameter to limit how many groups are returned each time you use the <code>ListAssociatedGroups</code> operation. If you omit this parameter, the default of 20 is used.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAssociatedGroupsPostBodyFormGroup() {
		return new FormGroup<ListAssociatedGroupsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^.+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListGroupResourcesPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
		 * Max length: 512
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Specify this parameter to limit how many canary ARNs are returned each time you use the <code>ListGroupResources</code> operation. If you omit this parameter, the default of 20 is used.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListGroupResourcesPostBodyFormProperties {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
		 * Max length: 512
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Specify this parameter to limit how many canary ARNs are returned each time you use the <code>ListGroupResources</code> operation. If you omit this parameter, the default of 20 is used.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGroupResourcesPostBodyFormGroup() {
		return new FormGroup<ListGroupResourcesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^.+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListGroupsPostBody {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
		 * Max length: 512
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Specify this parameter to limit how many groups are returned each time you use the <code>ListGroups</code> operation. If you omit this parameter, the default of 20 is used.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListGroupsPostBodyFormProperties {

		/**
		 * A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.
		 * Max length: 512
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Specify this parameter to limit how many groups are returned each time you use the <code>ListGroups</code> operation. If you omit this parameter, the default of 20 is used.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGroupsPostBodyFormGroup() {
		return new FormGroup<ListGroupsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^.+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The list of key-value pairs to associate with the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The list of key-value pairs to associate with the resource.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

