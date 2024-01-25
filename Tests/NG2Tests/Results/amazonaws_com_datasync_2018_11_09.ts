import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelTaskExecutionResponse {
	}
	export interface CancelTaskExecutionResponseFormProperties {
	}
	export function CreateCancelTaskExecutionResponseFormGroup() {
		return new FormGroup<CancelTaskExecutionResponseFormProperties>({
		});

	}


	/** CancelTaskExecutionRequest */
	export interface CancelTaskExecutionRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskExecutionArn: string;
	}

	/** CancelTaskExecutionRequest */
	export interface CancelTaskExecutionRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskExecutionArn: FormControl<string | null | undefined>,
	}
	export function CreateCancelTaskExecutionRequestFormGroup() {
		return new FormGroup<CancelTaskExecutionRequestFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}/execution/exec-[0-9a-f]{17}$')]),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
		});

	}


	/** CreateAgentResponse */
	export interface CreateAgentResponse {

		/** Max length: 128 */
		AgentArn?: string | null;
	}

	/** CreateAgentResponse */
	export interface CreateAgentResponseFormProperties {

		/** Max length: 128 */
		AgentArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAgentResponseFormGroup() {
		return new FormGroup<CreateAgentResponseFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$')]),
		});

	}


	/** CreateAgentRequest */
	export interface CreateAgentRequest {

		/**
		 * Required
		 * Max length: 29
		 */
		ActivationKey: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AgentName?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 55
		 */
		Tags?: Array<TagListEntry>;
		VpcEndpointId?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		SubnetArns?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		SecurityGroupArns?: Array<string>;
	}

	/** CreateAgentRequest */
	export interface CreateAgentRequestFormProperties {

		/**
		 * Required
		 * Max length: 29
		 */
		ActivationKey: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AgentName: FormControl<string | null | undefined>,
		VpcEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAgentRequestFormGroup() {
		return new FormGroup<CreateAgentRequestFormProperties>({
			ActivationKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(29), Validators.pattern('[A-Z0-9]{5}(-[A-Z0-9]{5}){4}')]),
			AgentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\s+=._:@/-]+$')]),
			VpcEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^vpce-[0-9a-f]{17}$')]),
		});

	}


	/** Represents a single entry in a list of AWS resource tags. <code>TagListEntry</code> returns an array that contains a list of tasks when the <a>ListTagsForResource</a> operation is called. */
	export interface TagListEntry {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value?: string | null;
	}

	/** Represents a single entry in a list of AWS resource tags. <code>TagListEntry</code> returns an array that contains a list of tasks when the <a>ListTagsForResource</a> operation is called. */
	export interface TagListEntryFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagListEntryFormGroup() {
		return new FormGroup<TagListEntryFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\s+=._:/-]+$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\s+=._:@/-]+$')]),
		});

	}


	/** CreateLocationEfs */
	export interface CreateLocationEfsResponse {

		/** Max length: 128 */
		LocationArn?: string | null;
	}

	/** CreateLocationEfs */
	export interface CreateLocationEfsResponseFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationEfsResponseFormGroup() {
		return new FormGroup<CreateLocationEfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}


	/** CreateLocationEfsRequest */
	export interface CreateLocationEfsRequest {

		/** Max length: 4096 */
		Subdirectory?: string | null;

		/**
		 * Required
		 * Max length: 128
		 */
		EfsFilesystemArn: string;

		/**
		 * The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified.
		 * Required
		 */
		Ec2Config: Ec2Config;

		/**
		 * Minimum items: 0
		 * Maximum items: 55
		 */
		Tags?: Array<TagListEntry>;
	}

	/** CreateLocationEfsRequest */
	export interface CreateLocationEfsRequestFormProperties {

		/** Max length: 4096 */
		Subdirectory: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 */
		EfsFilesystemArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationEfsRequestFormGroup() {
		return new FormGroup<CreateLocationEfsRequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096), Validators.pattern('^[a-zA-Z0-9_\-\+\./\(\)\p{Zs}]*$')]),
			EfsFilesystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):elasticfilesystem:[a-z\-0-9]*:[0-9]{12}:file-system/fs-.*$')]),
		});

	}


	/** The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified.  */
	export interface Ec2Config {

		/**
		 * Required
		 * Max length: 128
		 */
		SubnetArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		SecurityGroupArns: Array<string>;
	}

	/** The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified.  */
	export interface Ec2ConfigFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		SubnetArn: FormControl<string | null | undefined>,
	}
	export function CreateEc2ConfigFormGroup() {
		return new FormGroup<Ec2ConfigFormProperties>({
			SubnetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\-0-9]*:[0-9]{12}:subnet/.*$')]),
		});

	}

	export interface CreateLocationFsxWindowsResponse {

		/** Max length: 128 */
		LocationArn?: string | null;
	}
	export interface CreateLocationFsxWindowsResponseFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationFsxWindowsResponseFormGroup() {
		return new FormGroup<CreateLocationFsxWindowsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}

	export interface CreateLocationFsxWindowsRequest {

		/** Max length: 4096 */
		Subdirectory?: string | null;

		/**
		 * Required
		 * Max length: 128
		 */
		FsxFilesystemArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		SecurityGroupArns: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 55
		 */
		Tags?: Array<TagListEntry>;

		/**
		 * Required
		 * Max length: 104
		 */
		User: string;

		/** Max length: 253 */
		Domain?: string | null;

		/**
		 * Required
		 * Max length: 104
		 */
		Password: string;
	}
	export interface CreateLocationFsxWindowsRequestFormProperties {

		/** Max length: 4096 */
		Subdirectory: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 */
		FsxFilesystemArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 104
		 */
		User: FormControl<string | null | undefined>,

		/** Max length: 253 */
		Domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 104
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationFsxWindowsRequestFormGroup() {
		return new FormGroup<CreateLocationFsxWindowsRequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096), Validators.pattern('^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$')]),
			FsxFilesystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\-0-9]*:[0-9]{12}:file-system/fs-.*$')]),
			User: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(104), Validators.pattern('^[^\x5B\x5D\\/:;|=,+*?]{1,104}$')]),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(253), Validators.pattern('^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$')]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(104), Validators.pattern('^.{0,104}$')]),
		});

	}


	/** CreateLocationNfsResponse */
	export interface CreateLocationNfsResponse {

		/** Max length: 128 */
		LocationArn?: string | null;
	}

	/** CreateLocationNfsResponse */
	export interface CreateLocationNfsResponseFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationNfsResponseFormGroup() {
		return new FormGroup<CreateLocationNfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}


	/** CreateLocationNfsRequest */
	export interface CreateLocationNfsRequest {

		/**
		 * Required
		 * Max length: 4096
		 */
		Subdirectory: string;

		/**
		 * Required
		 * Max length: 255
		 */
		ServerHostname: string;

		/**
		 * A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
		 * Required
		 */
		OnPremConfig: OnPremConfig;

		/** Represents the mount options that are available for DataSync to access an NFS location. */
		MountOptions?: NfsMountOptions;

		/**
		 * Minimum items: 0
		 * Maximum items: 55
		 */
		Tags?: Array<TagListEntry>;
	}

	/** CreateLocationNfsRequest */
	export interface CreateLocationNfsRequestFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		Subdirectory: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 */
		ServerHostname: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationNfsRequestFormGroup() {
		return new FormGroup<CreateLocationNfsRequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096), Validators.pattern('^[a-zA-Z0-9_\-\+\./\(\)\p{Zs}]+$')]),
			ServerHostname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.pattern('^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$')]),
		});

	}


	/** A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location. */
	export interface OnPremConfig {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		AgentArns: Array<string>;
	}

	/** A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location. */
	export interface OnPremConfigFormProperties {
	}
	export function CreateOnPremConfigFormGroup() {
		return new FormGroup<OnPremConfigFormProperties>({
		});

	}


	/** Represents the mount options that are available for DataSync to access an NFS location. */
	export interface NfsMountOptions {
		Version?: NfsMountOptionsVersion | null;
	}

	/** Represents the mount options that are available for DataSync to access an NFS location. */
	export interface NfsMountOptionsFormProperties {
		Version: FormControl<NfsMountOptionsVersion | null | undefined>,
	}
	export function CreateNfsMountOptionsFormGroup() {
		return new FormGroup<NfsMountOptionsFormProperties>({
			Version: new FormControl<NfsMountOptionsVersion | null | undefined>(undefined),
		});

	}

	export enum NfsMountOptionsVersion { AUTOMATIC = 0, NFS3 = 1, NFS4_0 = 2, NFS4_1 = 3 }


	/** CreateLocationS3Response */
	export interface CreateLocationS3Response {

		/** Max length: 128 */
		LocationArn?: string | null;
	}

	/** CreateLocationS3Response */
	export interface CreateLocationS3ResponseFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationS3ResponseFormGroup() {
		return new FormGroup<CreateLocationS3ResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}


	/** CreateLocationS3Request */
	export interface CreateLocationS3Request {

		/** Max length: 4096 */
		Subdirectory?: string | null;

		/**
		 * Required
		 * Max length: 76
		 */
		S3BucketArn: string;
		S3StorageClass?: CreateLocationS3RequestS3StorageClass | null;

		/**
		 * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p>
		 * Required
		 */
		S3Config: S3Config;

		/**
		 * Minimum items: 0
		 * Maximum items: 55
		 */
		Tags?: Array<TagListEntry>;
	}

	/** CreateLocationS3Request */
	export interface CreateLocationS3RequestFormProperties {

		/** Max length: 4096 */
		Subdirectory: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 76
		 */
		S3BucketArn: FormControl<string | null | undefined>,
		S3StorageClass: FormControl<CreateLocationS3RequestS3StorageClass | null | undefined>,
	}
	export function CreateCreateLocationS3RequestFormGroup() {
		return new FormGroup<CreateLocationS3RequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096), Validators.pattern('^[a-zA-Z0-9_\-\+\./\(\)\p{Zs}]*$')]),
			S3BucketArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(76), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):s3:::([^/]*)$')]),
			S3StorageClass: new FormControl<CreateLocationS3RequestS3StorageClass | null | undefined>(undefined),
		});

	}

	export enum CreateLocationS3RequestS3StorageClass { STANDARD = 0, STANDARD_IA = 1, ONEZONE_IA = 2, INTELLIGENT_TIERING = 3, GLACIER = 4, DEEP_ARCHIVE = 5 }


	/** <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p> */
	export interface S3Config {

		/**
		 * Required
		 * Max length: 2048
		 */
		BucketAccessRoleArn: string;
	}

	/** <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p> */
	export interface S3ConfigFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 */
		BucketAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigFormGroup() {
		return new FormGroup<S3ConfigFormProperties>({
			BucketAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*$')]),
		});

	}


	/** CreateLocationSmbResponse */
	export interface CreateLocationSmbResponse {

		/** Max length: 128 */
		LocationArn?: string | null;
	}

	/** CreateLocationSmbResponse */
	export interface CreateLocationSmbResponseFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationSmbResponseFormGroup() {
		return new FormGroup<CreateLocationSmbResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}


	/** CreateLocationSmbRequest */
	export interface CreateLocationSmbRequest {

		/**
		 * Required
		 * Max length: 4096
		 */
		Subdirectory: string;

		/**
		 * Required
		 * Max length: 255
		 */
		ServerHostname: string;

		/**
		 * Required
		 * Max length: 104
		 */
		User: string;

		/** Max length: 253 */
		Domain?: string | null;

		/**
		 * Required
		 * Max length: 104
		 */
		Password: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		AgentArns: Array<string>;

		/** Represents the mount options that are available for DataSync to access an SMB location. */
		MountOptions?: SmbMountOptions;

		/**
		 * Minimum items: 0
		 * Maximum items: 55
		 */
		Tags?: Array<TagListEntry>;
	}

	/** CreateLocationSmbRequest */
	export interface CreateLocationSmbRequestFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		Subdirectory: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 */
		ServerHostname: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 104
		 */
		User: FormControl<string | null | undefined>,

		/** Max length: 253 */
		Domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 104
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationSmbRequestFormGroup() {
		return new FormGroup<CreateLocationSmbRequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096), Validators.pattern('^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$')]),
			ServerHostname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.pattern('^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$')]),
			User: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(104), Validators.pattern('^[^\x5B\x5D\\/:;|=,+*?]{1,104}$')]),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(253), Validators.pattern('^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$')]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(104), Validators.pattern('^.{0,104}$')]),
		});

	}


	/** Represents the mount options that are available for DataSync to access an SMB location. */
	export interface SmbMountOptions {
		Version?: SmbMountOptionsVersion | null;
	}

	/** Represents the mount options that are available for DataSync to access an SMB location. */
	export interface SmbMountOptionsFormProperties {
		Version: FormControl<SmbMountOptionsVersion | null | undefined>,
	}
	export function CreateSmbMountOptionsFormGroup() {
		return new FormGroup<SmbMountOptionsFormProperties>({
			Version: new FormControl<SmbMountOptionsVersion | null | undefined>(undefined),
		});

	}

	export enum SmbMountOptionsVersion { AUTOMATIC = 0, SMB2 = 1, SMB3 = 2 }


	/** CreateTaskResponse */
	export interface CreateTaskResponse {

		/** Max length: 128 */
		TaskArn?: string | null;
	}

	/** CreateTaskResponse */
	export interface CreateTaskResponseFormProperties {

		/** Max length: 128 */
		TaskArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskResponseFormGroup() {
		return new FormGroup<CreateTaskResponseFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}$')]),
		});

	}


	/** CreateTaskRequest */
	export interface CreateTaskRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		SourceLocationArn: string;

		/**
		 * Required
		 * Max length: 128
		 */
		DestinationLocationArn: string;

		/** Max length: 562 */
		CloudWatchLogGroupArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;

		/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
		Options?: Options;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Excludes?: Array<FilterRule>;

		/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
		Schedule?: TaskSchedule;

		/**
		 * Minimum items: 0
		 * Maximum items: 55
		 */
		Tags?: Array<TagListEntry>;
	}

	/** CreateTaskRequest */
	export interface CreateTaskRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		SourceLocationArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 */
		DestinationLocationArn: FormControl<string | null | undefined>,

		/** Max length: 562 */
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskRequestFormGroup() {
		return new FormGroup<CreateTaskRequestFormProperties>({
			SourceLocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
			DestinationLocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(562), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):logs:[a-z\-0-9]*:[0-9]{12}:log-group:([^:\*]*)$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\s+=._:@/-]+$')]),
		});

	}


	/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
	export interface Options {
		VerifyMode?: OptionsVerifyMode | null;
		OverwriteMode?: OptionsOverwriteMode | null;
		Atime?: OptionsAtime | null;
		Mtime?: OptionsMtime | null;
		Uid?: OptionsUid | null;
		Gid?: OptionsUid | null;
		PreserveDeletedFiles?: OptionsPreserveDeletedFiles | null;
		PreserveDevices?: OptionsMtime | null;
		PosixPermissions?: OptionsMtime | null;

		/** Minimum: -1 */
		BytesPerSecond?: number | null;
		TaskQueueing?: OptionsTaskQueueing | null;
		LogLevel?: OptionsLogLevel | null;
	}

	/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
	export interface OptionsFormProperties {
		VerifyMode: FormControl<OptionsVerifyMode | null | undefined>,
		OverwriteMode: FormControl<OptionsOverwriteMode | null | undefined>,
		Atime: FormControl<OptionsAtime | null | undefined>,
		Mtime: FormControl<OptionsMtime | null | undefined>,
		Uid: FormControl<OptionsUid | null | undefined>,
		Gid: FormControl<OptionsUid | null | undefined>,
		PreserveDeletedFiles: FormControl<OptionsPreserveDeletedFiles | null | undefined>,
		PreserveDevices: FormControl<OptionsMtime | null | undefined>,
		PosixPermissions: FormControl<OptionsMtime | null | undefined>,

		/** Minimum: -1 */
		BytesPerSecond: FormControl<number | null | undefined>,
		TaskQueueing: FormControl<OptionsTaskQueueing | null | undefined>,
		LogLevel: FormControl<OptionsLogLevel | null | undefined>,
	}
	export function CreateOptionsFormGroup() {
		return new FormGroup<OptionsFormProperties>({
			VerifyMode: new FormControl<OptionsVerifyMode | null | undefined>(undefined),
			OverwriteMode: new FormControl<OptionsOverwriteMode | null | undefined>(undefined),
			Atime: new FormControl<OptionsAtime | null | undefined>(undefined),
			Mtime: new FormControl<OptionsMtime | null | undefined>(undefined),
			Uid: new FormControl<OptionsUid | null | undefined>(undefined),
			Gid: new FormControl<OptionsUid | null | undefined>(undefined),
			PreserveDeletedFiles: new FormControl<OptionsPreserveDeletedFiles | null | undefined>(undefined),
			PreserveDevices: new FormControl<OptionsMtime | null | undefined>(undefined),
			PosixPermissions: new FormControl<OptionsMtime | null | undefined>(undefined),
			BytesPerSecond: new FormControl<number | null | undefined>(undefined, [Validators.min(-1)]),
			TaskQueueing: new FormControl<OptionsTaskQueueing | null | undefined>(undefined),
			LogLevel: new FormControl<OptionsLogLevel | null | undefined>(undefined),
		});

	}

	export enum OptionsVerifyMode { POINT_IN_TIME_CONSISTENT = 0, ONLY_FILES_TRANSFERRED = 1, NONE = 2 }

	export enum OptionsOverwriteMode { ALWAYS = 0, NEVER = 1 }

	export enum OptionsAtime { NONE = 0, BEST_EFFORT = 1 }

	export enum OptionsMtime { NONE = 0, PRESERVE = 1 }

	export enum OptionsUid { NONE = 0, INT_VALUE = 1, NAME = 2, BOTH = 3 }

	export enum OptionsPreserveDeletedFiles { PRESERVE = 0, REMOVE = 1 }

	export enum OptionsTaskQueueing { ENABLED = 0, DISABLED = 1 }

	export enum OptionsLogLevel { OFF = 0, BASIC = 1, TRANSFER = 2 }


	/** Specifies which files, folders and objects to include or exclude when transferring files from source to destination. */
	export interface FilterRule {

		/** Max length: 128 */
		FilterType?: FilterRuleFilterType | null;

		/** Max length: 409600 */
		Value?: string | null;
	}

	/** Specifies which files, folders and objects to include or exclude when transferring files from source to destination. */
	export interface FilterRuleFormProperties {

		/** Max length: 128 */
		FilterType: FormControl<FilterRuleFilterType | null | undefined>,

		/** Max length: 409600 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateFilterRuleFormGroup() {
		return new FormGroup<FilterRuleFormProperties>({
			FilterType: new FormControl<FilterRuleFilterType | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^[A-Z0-9_]+$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(409600), Validators.pattern('^[^\x00]+$')]),
		});

	}

	export enum FilterRuleFilterType { SIMPLE_PATTERN = 0 }


	/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
	export interface TaskSchedule {

		/**
		 * Required
		 * Max length: 256
		 */
		ScheduleExpression: string;
	}

	/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
	export interface TaskScheduleFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		ScheduleExpression: FormControl<string | null | undefined>,
	}
	export function CreateTaskScheduleFormGroup() {
		return new FormGroup<TaskScheduleFormProperties>({
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\ \_\*\?\,\|\^\-\/\#\s\(\)\+]*$')]),
		});

	}

	export interface DeleteAgentResponse {
	}
	export interface DeleteAgentResponseFormProperties {
	}
	export function CreateDeleteAgentResponseFormGroup() {
		return new FormGroup<DeleteAgentResponseFormProperties>({
		});

	}


	/** DeleteAgentRequest */
	export interface DeleteAgentRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		AgentArn: string;
	}

	/** DeleteAgentRequest */
	export interface DeleteAgentRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		AgentArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAgentRequestFormGroup() {
		return new FormGroup<DeleteAgentRequestFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$')]),
		});

	}

	export interface DeleteLocationResponse {
	}
	export interface DeleteLocationResponseFormProperties {
	}
	export function CreateDeleteLocationResponseFormGroup() {
		return new FormGroup<DeleteLocationResponseFormProperties>({
		});

	}


	/** DeleteLocation */
	export interface DeleteLocationRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: string;
	}

	/** DeleteLocation */
	export interface DeleteLocationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLocationRequestFormGroup() {
		return new FormGroup<DeleteLocationRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}

	export interface DeleteTaskResponse {
	}
	export interface DeleteTaskResponseFormProperties {
	}
	export function CreateDeleteTaskResponseFormGroup() {
		return new FormGroup<DeleteTaskResponseFormProperties>({
		});

	}


	/** DeleteTask */
	export interface DeleteTaskRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskArn: string;
	}

	/** DeleteTask */
	export interface DeleteTaskRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTaskRequestFormGroup() {
		return new FormGroup<DeleteTaskRequestFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}$')]),
		});

	}


	/** DescribeAgentResponse */
	export interface DescribeAgentResponse {

		/** Max length: 128 */
		AgentArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;
		Status?: DescribeAgentResponseStatus | null;
		LastConnectionTime?: Date | null;
		CreationTime?: Date | null;
		EndpointType?: DescribeAgentResponseEndpointType | null;

		/** The VPC endpoint, subnet and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud). */
		PrivateLinkConfig?: PrivateLinkConfig;
	}

	/** DescribeAgentResponse */
	export interface DescribeAgentResponseFormProperties {

		/** Max length: 128 */
		AgentArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<DescribeAgentResponseStatus | null | undefined>,
		LastConnectionTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		EndpointType: FormControl<DescribeAgentResponseEndpointType | null | undefined>,
	}
	export function CreateDescribeAgentResponseFormGroup() {
		return new FormGroup<DescribeAgentResponseFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\s+=._:@/-]+$')]),
			Status: new FormControl<DescribeAgentResponseStatus | null | undefined>(undefined),
			LastConnectionTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			EndpointType: new FormControl<DescribeAgentResponseEndpointType | null | undefined>(undefined),
		});

	}

	export enum DescribeAgentResponseStatus { ONLINE = 0, OFFLINE = 1 }

	export enum DescribeAgentResponseEndpointType { PUBLIC = 0, PRIVATE_LINK = 1, FIPS = 2 }


	/** The VPC endpoint, subnet and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud). */
	export interface PrivateLinkConfig {
		VpcEndpointId?: string | null;

		/**
		 * Max length: 15
		 * Min length: 7
		 */
		PrivateLinkEndpoint?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		SubnetArns?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		SecurityGroupArns?: Array<string>;
	}

	/** The VPC endpoint, subnet and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud). */
	export interface PrivateLinkConfigFormProperties {
		VpcEndpointId: FormControl<string | null | undefined>,

		/**
		 * Max length: 15
		 * Min length: 7
		 */
		PrivateLinkEndpoint: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkConfigFormGroup() {
		return new FormGroup<PrivateLinkConfigFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^vpce-[0-9a-f]{17}$')]),
			PrivateLinkEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(15), Validators.pattern('\A(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}\z')]),
		});

	}


	/** DescribeAgent */
	export interface DescribeAgentRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		AgentArn: string;
	}

	/** DescribeAgent */
	export interface DescribeAgentRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		AgentArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAgentRequestFormGroup() {
		return new FormGroup<DescribeAgentRequestFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$')]),
		});

	}


	/** DescribeLocationEfsResponse */
	export interface DescribeLocationEfsResponse {

		/** Max length: 128 */
		LocationArn?: string | null;

		/** Max length: 4356 */
		LocationUri?: string | null;

		/** The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified. */
		Ec2Config?: Ec2Config;
		CreationTime?: Date | null;
	}

	/** DescribeLocationEfsResponse */
	export interface DescribeLocationEfsResponseFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,

		/** Max length: 4356 */
		LocationUri: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationEfsResponseFormGroup() {
		return new FormGroup<DescribeLocationEfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
			LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4356), Validators.pattern('^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9.\-]+$')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DescribeLocationEfsRequest */
	export interface DescribeLocationEfsRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: string;
	}

	/** DescribeLocationEfsRequest */
	export interface DescribeLocationEfsRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationEfsRequestFormGroup() {
		return new FormGroup<DescribeLocationEfsRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}

	export interface DescribeLocationFsxWindowsResponse {

		/** Max length: 128 */
		LocationArn?: string | null;

		/** Max length: 4356 */
		LocationUri?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		SecurityGroupArns?: Array<string>;
		CreationTime?: Date | null;

		/** Max length: 104 */
		User?: string | null;

		/** Max length: 253 */
		Domain?: string | null;
	}
	export interface DescribeLocationFsxWindowsResponseFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,

		/** Max length: 4356 */
		LocationUri: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/** Max length: 104 */
		User: FormControl<string | null | undefined>,

		/** Max length: 253 */
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationFsxWindowsResponseFormGroup() {
		return new FormGroup<DescribeLocationFsxWindowsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
			LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4356), Validators.pattern('^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9.\-]+$')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			User: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(104), Validators.pattern('^[^\x5B\x5D\\/:;|=,+*?]{1,104}$')]),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(253), Validators.pattern('^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$')]),
		});

	}

	export interface DescribeLocationFsxWindowsRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: string;
	}
	export interface DescribeLocationFsxWindowsRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationFsxWindowsRequestFormGroup() {
		return new FormGroup<DescribeLocationFsxWindowsRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}


	/** DescribeLocationNfsResponse */
	export interface DescribeLocationNfsResponse {

		/** Max length: 128 */
		LocationArn?: string | null;

		/** Max length: 4356 */
		LocationUri?: string | null;

		/** A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location. */
		OnPremConfig?: OnPremConfig;

		/** Represents the mount options that are available for DataSync to access an NFS location. */
		MountOptions?: NfsMountOptions;
		CreationTime?: Date | null;
	}

	/** DescribeLocationNfsResponse */
	export interface DescribeLocationNfsResponseFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,

		/** Max length: 4356 */
		LocationUri: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationNfsResponseFormGroup() {
		return new FormGroup<DescribeLocationNfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
			LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4356), Validators.pattern('^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9.\-]+$')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DescribeLocationNfsRequest */
	export interface DescribeLocationNfsRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: string;
	}

	/** DescribeLocationNfsRequest */
	export interface DescribeLocationNfsRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationNfsRequestFormGroup() {
		return new FormGroup<DescribeLocationNfsRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}


	/** DescribeLocationS3Response */
	export interface DescribeLocationS3Response {

		/** Max length: 128 */
		LocationArn?: string | null;

		/** Max length: 4356 */
		LocationUri?: string | null;
		S3StorageClass?: CreateLocationS3RequestS3StorageClass | null;

		/** <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p> */
		S3Config?: S3Config;
		CreationTime?: Date | null;
	}

	/** DescribeLocationS3Response */
	export interface DescribeLocationS3ResponseFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,

		/** Max length: 4356 */
		LocationUri: FormControl<string | null | undefined>,
		S3StorageClass: FormControl<CreateLocationS3RequestS3StorageClass | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationS3ResponseFormGroup() {
		return new FormGroup<DescribeLocationS3ResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
			LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4356), Validators.pattern('^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9.\-]+$')]),
			S3StorageClass: new FormControl<CreateLocationS3RequestS3StorageClass | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DescribeLocationS3Request */
	export interface DescribeLocationS3Request {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: string;
	}

	/** DescribeLocationS3Request */
	export interface DescribeLocationS3RequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationS3RequestFormGroup() {
		return new FormGroup<DescribeLocationS3RequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}


	/** DescribeLocationSmbResponse */
	export interface DescribeLocationSmbResponse {

		/** Max length: 128 */
		LocationArn?: string | null;

		/** Max length: 4356 */
		LocationUri?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		AgentArns?: Array<string>;

		/** Max length: 104 */
		User?: string | null;

		/** Max length: 253 */
		Domain?: string | null;

		/** Represents the mount options that are available for DataSync to access an SMB location. */
		MountOptions?: SmbMountOptions;
		CreationTime?: Date | null;
	}

	/** DescribeLocationSmbResponse */
	export interface DescribeLocationSmbResponseFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,

		/** Max length: 4356 */
		LocationUri: FormControl<string | null | undefined>,

		/** Max length: 104 */
		User: FormControl<string | null | undefined>,

		/** Max length: 253 */
		Domain: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationSmbResponseFormGroup() {
		return new FormGroup<DescribeLocationSmbResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
			LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4356), Validators.pattern('^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9.\-]+$')]),
			User: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(104), Validators.pattern('^[^\x5B\x5D\\/:;|=,+*?]{1,104}$')]),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(253), Validators.pattern('^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DescribeLocationSmbRequest */
	export interface DescribeLocationSmbRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: string;
	}

	/** DescribeLocationSmbRequest */
	export interface DescribeLocationSmbRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationSmbRequestFormGroup() {
		return new FormGroup<DescribeLocationSmbRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
		});

	}


	/** DescribeTaskResponse */
	export interface DescribeTaskResponse {

		/** Max length: 128 */
		TaskArn?: string | null;
		Status?: DescribeTaskResponseStatus | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;

		/** Max length: 128 */
		CurrentTaskExecutionArn?: string | null;

		/** Max length: 128 */
		SourceLocationArn?: string | null;

		/** Max length: 128 */
		DestinationLocationArn?: string | null;

		/** Max length: 562 */
		CloudWatchLogGroupArn?: string | null;
		SourceNetworkInterfaceArns?: Array<string>;
		DestinationNetworkInterfaceArns?: Array<string>;

		/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
		Options?: Options;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Excludes?: Array<FilterRule>;

		/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
		Schedule?: TaskSchedule;
		ErrorCode?: string | null;
		ErrorDetail?: string | null;
		CreationTime?: Date | null;
	}

	/** DescribeTaskResponse */
	export interface DescribeTaskResponseFormProperties {

		/** Max length: 128 */
		TaskArn: FormControl<string | null | undefined>,
		Status: FormControl<DescribeTaskResponseStatus | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 128 */
		CurrentTaskExecutionArn: FormControl<string | null | undefined>,

		/** Max length: 128 */
		SourceLocationArn: FormControl<string | null | undefined>,

		/** Max length: 128 */
		DestinationLocationArn: FormControl<string | null | undefined>,

		/** Max length: 562 */
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorDetail: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeTaskResponseFormGroup() {
		return new FormGroup<DescribeTaskResponseFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}$')]),
			Status: new FormControl<DescribeTaskResponseStatus | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\s+=._:@/-]+$')]),
			CurrentTaskExecutionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}/execution/exec-[0-9a-f]{17}$')]),
			SourceLocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
			DestinationLocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(562), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):logs:[a-z\-0-9]*:[0-9]{12}:log-group:([^:\*]*)$')]),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorDetail: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeTaskResponseStatus { AVAILABLE = 0, CREATING = 1, QUEUED = 2, RUNNING = 3, UNAVAILABLE = 4 }


	/** DescribeTaskRequest */
	export interface DescribeTaskRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskArn: string;
	}

	/** DescribeTaskRequest */
	export interface DescribeTaskRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTaskRequestFormGroup() {
		return new FormGroup<DescribeTaskRequestFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}$')]),
		});

	}


	/** DescribeTaskExecutionResponse */
	export interface DescribeTaskExecutionResponse {

		/** Max length: 128 */
		TaskExecutionArn?: string | null;
		Status?: DescribeTaskExecutionResponseStatus | null;

		/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
		Options?: Options;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Excludes?: Array<FilterRule>;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Includes?: Array<FilterRule>;
		StartTime?: Date | null;
		EstimatedFilesToTransfer?: number | null;
		EstimatedBytesToTransfer?: number | null;
		FilesTransferred?: number | null;
		BytesWritten?: number | null;
		BytesTransferred?: number | null;

		/** Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered. */
		Result?: TaskExecutionResultDetail;
	}

	/** DescribeTaskExecutionResponse */
	export interface DescribeTaskExecutionResponseFormProperties {

		/** Max length: 128 */
		TaskExecutionArn: FormControl<string | null | undefined>,
		Status: FormControl<DescribeTaskExecutionResponseStatus | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EstimatedFilesToTransfer: FormControl<number | null | undefined>,
		EstimatedBytesToTransfer: FormControl<number | null | undefined>,
		FilesTransferred: FormControl<number | null | undefined>,
		BytesWritten: FormControl<number | null | undefined>,
		BytesTransferred: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTaskExecutionResponseFormGroup() {
		return new FormGroup<DescribeTaskExecutionResponseFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}/execution/exec-[0-9a-f]{17}$')]),
			Status: new FormControl<DescribeTaskExecutionResponseStatus | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EstimatedFilesToTransfer: new FormControl<number | null | undefined>(undefined),
			EstimatedBytesToTransfer: new FormControl<number | null | undefined>(undefined),
			FilesTransferred: new FormControl<number | null | undefined>(undefined),
			BytesWritten: new FormControl<number | null | undefined>(undefined),
			BytesTransferred: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DescribeTaskExecutionResponseStatus { QUEUED = 0, LAUNCHING = 1, PREPARING = 2, TRANSFERRING = 3, VERIFYING = 4, SUCCESS = 5, ERROR = 6 }


	/** Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered. */
	export interface TaskExecutionResultDetail {

		/** Minimum: 0 */
		PrepareDuration?: number | null;
		PrepareStatus?: TaskExecutionResultDetailPrepareStatus | null;

		/** Minimum: 0 */
		TotalDuration?: number | null;

		/** Minimum: 0 */
		TransferDuration?: number | null;
		TransferStatus?: TaskExecutionResultDetailPrepareStatus | null;

		/** Minimum: 0 */
		VerifyDuration?: number | null;
		VerifyStatus?: TaskExecutionResultDetailPrepareStatus | null;
		ErrorCode?: string | null;
		ErrorDetail?: string | null;
	}

	/** Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered. */
	export interface TaskExecutionResultDetailFormProperties {

		/** Minimum: 0 */
		PrepareDuration: FormControl<number | null | undefined>,
		PrepareStatus: FormControl<TaskExecutionResultDetailPrepareStatus | null | undefined>,

		/** Minimum: 0 */
		TotalDuration: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		TransferDuration: FormControl<number | null | undefined>,
		TransferStatus: FormControl<TaskExecutionResultDetailPrepareStatus | null | undefined>,

		/** Minimum: 0 */
		VerifyDuration: FormControl<number | null | undefined>,
		VerifyStatus: FormControl<TaskExecutionResultDetailPrepareStatus | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorDetail: FormControl<string | null | undefined>,
	}
	export function CreateTaskExecutionResultDetailFormGroup() {
		return new FormGroup<TaskExecutionResultDetailFormProperties>({
			PrepareDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			PrepareStatus: new FormControl<TaskExecutionResultDetailPrepareStatus | null | undefined>(undefined),
			TotalDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			TransferDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			TransferStatus: new FormControl<TaskExecutionResultDetailPrepareStatus | null | undefined>(undefined),
			VerifyDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			VerifyStatus: new FormControl<TaskExecutionResultDetailPrepareStatus | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorDetail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TaskExecutionResultDetailPrepareStatus { PENDING = 0, SUCCESS = 1, ERROR = 2 }


	/** DescribeTaskExecutionRequest */
	export interface DescribeTaskExecutionRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskExecutionArn: string;
	}

	/** DescribeTaskExecutionRequest */
	export interface DescribeTaskExecutionRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskExecutionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTaskExecutionRequestFormGroup() {
		return new FormGroup<DescribeTaskExecutionRequestFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}/execution/exec-[0-9a-f]{17}$')]),
		});

	}


	/** ListAgentsResponse */
	export interface ListAgentsResponse {
		Agents?: Array<AgentListEntry>;

		/** Max length: 65535 */
		NextToken?: string | null;
	}

	/** ListAgentsResponse */
	export interface ListAgentsResponseFormProperties {

		/** Max length: 65535 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAgentsResponseFormGroup() {
		return new FormGroup<ListAgentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535), Validators.pattern('[a-zA-Z0-9=_-]+')]),
		});

	}


	/** Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a>ListAgents</a> operation is called. */
	export interface AgentListEntry {

		/** Max length: 128 */
		AgentArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;
		Status?: DescribeAgentResponseStatus | null;
	}

	/** Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a>ListAgents</a> operation is called. */
	export interface AgentListEntryFormProperties {

		/** Max length: 128 */
		AgentArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<DescribeAgentResponseStatus | null | undefined>,
	}
	export function CreateAgentListEntryFormGroup() {
		return new FormGroup<AgentListEntryFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\s+=._:@/-]+$')]),
			Status: new FormControl<DescribeAgentResponseStatus | null | undefined>(undefined),
		});

	}


	/** ListAgentsRequest */
	export interface ListAgentsRequest {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 65535 */
		NextToken?: string | null;
	}

	/** ListAgentsRequest */
	export interface ListAgentsRequestFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 65535 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAgentsRequestFormGroup() {
		return new FormGroup<ListAgentsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535), Validators.pattern('[a-zA-Z0-9=_-]+')]),
		});

	}


	/** ListLocationsResponse */
	export interface ListLocationsResponse {
		Locations?: Array<LocationListEntry>;

		/** Max length: 65535 */
		NextToken?: string | null;
	}

	/** ListLocationsResponse */
	export interface ListLocationsResponseFormProperties {

		/** Max length: 65535 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535), Validators.pattern('[a-zA-Z0-9=_-]+')]),
		});

	}


	/** Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a>ListLocations</a> operation is called. */
	export interface LocationListEntry {

		/** Max length: 128 */
		LocationArn?: string | null;

		/** Max length: 4356 */
		LocationUri?: string | null;
	}

	/** Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a>ListLocations</a> operation is called. */
	export interface LocationListEntryFormProperties {

		/** Max length: 128 */
		LocationArn: FormControl<string | null | undefined>,

		/** Max length: 4356 */
		LocationUri: FormControl<string | null | undefined>,
	}
	export function CreateLocationListEntryFormGroup() {
		return new FormGroup<LocationListEntryFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$')]),
			LocationUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4356), Validators.pattern('^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9.\-]+$')]),
		});

	}


	/** ListLocationsRequest */
	export interface ListLocationsRequest {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 65535 */
		NextToken?: string | null;
	}

	/** ListLocationsRequest */
	export interface ListLocationsRequestFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 65535 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsRequestFormGroup() {
		return new FormGroup<ListLocationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535), Validators.pattern('[a-zA-Z0-9=_-]+')]),
		});

	}


	/** ListTagsForResourceResponse */
	export interface ListTagsForResourceResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 55
		 */
		Tags?: Array<TagListEntry>;

		/** Max length: 65535 */
		NextToken?: string | null;
	}

	/** ListTagsForResourceResponse */
	export interface ListTagsForResourceResponseFormProperties {

		/** Max length: 65535 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535), Validators.pattern('[a-zA-Z0-9=_-]+')]),
		});

	}


	/** ListTagsForResourceRequest */
	export interface ListTagsForResourceRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		ResourceArn: string;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 65535 */
		NextToken?: string | null;
	}

	/** ListTagsForResourceRequest */
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 65535 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:(agent|task|location)/(agent|task|loc)-[0-9a-z]{17}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535), Validators.pattern('[a-zA-Z0-9=_-]+')]),
		});

	}


	/** ListTaskExecutionsResponse */
	export interface ListTaskExecutionsResponse {
		TaskExecutions?: Array<TaskExecutionListEntry>;

		/** Max length: 65535 */
		NextToken?: string | null;
	}

	/** ListTaskExecutionsResponse */
	export interface ListTaskExecutionsResponseFormProperties {

		/** Max length: 65535 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTaskExecutionsResponseFormGroup() {
		return new FormGroup<ListTaskExecutionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535), Validators.pattern('[a-zA-Z0-9=_-]+')]),
		});

	}


	/** Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when <a>ListTaskExecutions</a> operation is called. */
	export interface TaskExecutionListEntry {

		/** Max length: 128 */
		TaskExecutionArn?: string | null;
		Status?: DescribeTaskExecutionResponseStatus | null;
	}

	/** Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when <a>ListTaskExecutions</a> operation is called. */
	export interface TaskExecutionListEntryFormProperties {

		/** Max length: 128 */
		TaskExecutionArn: FormControl<string | null | undefined>,
		Status: FormControl<DescribeTaskExecutionResponseStatus | null | undefined>,
	}
	export function CreateTaskExecutionListEntryFormGroup() {
		return new FormGroup<TaskExecutionListEntryFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}/execution/exec-[0-9a-f]{17}$')]),
			Status: new FormControl<DescribeTaskExecutionResponseStatus | null | undefined>(undefined),
		});

	}


	/** ListTaskExecutions */
	export interface ListTaskExecutionsRequest {

		/** Max length: 128 */
		TaskArn?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 65535 */
		NextToken?: string | null;
	}

	/** ListTaskExecutions */
	export interface ListTaskExecutionsRequestFormProperties {

		/** Max length: 128 */
		TaskArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 65535 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTaskExecutionsRequestFormGroup() {
		return new FormGroup<ListTaskExecutionsRequestFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535), Validators.pattern('[a-zA-Z0-9=_-]+')]),
		});

	}


	/** ListTasksResponse */
	export interface ListTasksResponse {
		Tasks?: Array<TaskListEntry>;

		/** Max length: 65535 */
		NextToken?: string | null;
	}

	/** ListTasksResponse */
	export interface ListTasksResponseFormProperties {

		/** Max length: 65535 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTasksResponseFormGroup() {
		return new FormGroup<ListTasksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535), Validators.pattern('[a-zA-Z0-9=_-]+')]),
		});

	}


	/** Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a>ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks. */
	export interface TaskListEntry {

		/** Max length: 128 */
		TaskArn?: string | null;
		Status?: DescribeTaskResponseStatus | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;
	}

	/** Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a>ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks. */
	export interface TaskListEntryFormProperties {

		/** Max length: 128 */
		TaskArn: FormControl<string | null | undefined>,
		Status: FormControl<DescribeTaskResponseStatus | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateTaskListEntryFormGroup() {
		return new FormGroup<TaskListEntryFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}$')]),
			Status: new FormControl<DescribeTaskResponseStatus | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\s+=._:@/-]+$')]),
		});

	}


	/** ListTasksRequest */
	export interface ListTasksRequest {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 65535 */
		NextToken?: string | null;
	}

	/** ListTasksRequest */
	export interface ListTasksRequestFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 65535 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTasksRequestFormGroup() {
		return new FormGroup<ListTasksRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535), Validators.pattern('[a-zA-Z0-9=_-]+')]),
		});

	}


	/** StartTaskExecutionResponse */
	export interface StartTaskExecutionResponse {

		/** Max length: 128 */
		TaskExecutionArn?: string | null;
	}

	/** StartTaskExecutionResponse */
	export interface StartTaskExecutionResponseFormProperties {

		/** Max length: 128 */
		TaskExecutionArn: FormControl<string | null | undefined>,
	}
	export function CreateStartTaskExecutionResponseFormGroup() {
		return new FormGroup<StartTaskExecutionResponseFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}/execution/exec-[0-9a-f]{17}$')]),
		});

	}


	/** StartTaskExecutionRequest */
	export interface StartTaskExecutionRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskArn: string;

		/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
		OverrideOptions?: Options;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Includes?: Array<FilterRule>;
	}

	/** StartTaskExecutionRequest */
	export interface StartTaskExecutionRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskArn: FormControl<string | null | undefined>,
	}
	export function CreateStartTaskExecutionRequestFormGroup() {
		return new FormGroup<StartTaskExecutionRequestFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}$')]),
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


	/** TagResourceRequest */
	export interface TagResourceRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		ResourceArn: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 55
		 */
		Tags: Array<TagListEntry>;
	}

	/** TagResourceRequest */
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:(agent|task|location)/(agent|task|loc)-[0-9a-z]{17}$')]),
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


	/** UntagResourceRequest */
	export interface UntagResourceRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		ResourceArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Keys: Array<string>;
	}

	/** UntagResourceRequest */
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:(agent|task|location)/(agent|task|loc)-[0-9a-z]{17}$')]),
		});

	}

	export interface UpdateAgentResponse {
	}
	export interface UpdateAgentResponseFormProperties {
	}
	export function CreateUpdateAgentResponseFormGroup() {
		return new FormGroup<UpdateAgentResponseFormProperties>({
		});

	}


	/** UpdateAgentRequest */
	export interface UpdateAgentRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		AgentArn: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;
	}

	/** UpdateAgentRequest */
	export interface UpdateAgentRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		AgentArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAgentRequestFormGroup() {
		return new FormGroup<UpdateAgentRequestFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\s+=._:@/-]+$')]),
		});

	}

	export interface UpdateTaskResponse {
	}
	export interface UpdateTaskResponseFormProperties {
	}
	export function CreateUpdateTaskResponseFormGroup() {
		return new FormGroup<UpdateTaskResponseFormProperties>({
		});

	}


	/** UpdateTaskResponse */
	export interface UpdateTaskRequest {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskArn: string;

		/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
		Options?: Options;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Excludes?: Array<FilterRule>;

		/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
		Schedule?: TaskSchedule;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;

		/** Max length: 562 */
		CloudWatchLogGroupArn?: string | null;
	}

	/** UpdateTaskResponse */
	export interface UpdateTaskRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		TaskArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 562 */
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTaskRequestFormGroup() {
		return new FormGroup<UpdateTaskRequestFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\s+=._:@/-]+$')]),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(562), Validators.pattern('^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):logs:[a-z\-0-9]*:[0-9]{12}:log-group:([^:\*]*)$')]),
		});

	}

	export enum AgentStatus { ONLINE = 0, OFFLINE = 1 }

	export enum Atime { NONE = 0, BEST_EFFORT = 1 }

	export enum S3StorageClass { STANDARD = 0, STANDARD_IA = 1, ONEZONE_IA = 2, INTELLIGENT_TIERING = 3, GLACIER = 4, DEEP_ARCHIVE = 5 }

	export enum EndpointType { PUBLIC = 0, PRIVATE_LINK = 1, FIPS = 2 }

	export enum TaskExecutionStatus { QUEUED = 0, LAUNCHING = 1, PREPARING = 2, TRANSFERRING = 3, VERIFYING = 4, SUCCESS = 5, ERROR = 6 }

	export enum TaskStatus { AVAILABLE = 0, CREATING = 1, QUEUED = 2, RUNNING = 3, UNAVAILABLE = 4 }

	export enum FilterType { SIMPLE_PATTERN = 0 }

	export enum Gid { NONE = 0, INT_VALUE = 1, NAME = 2, BOTH = 3 }

	export enum LogLevel { OFF = 0, BASIC = 1, TRANSFER = 2 }

	export enum Mtime { NONE = 0, PRESERVE = 1 }

	export enum NfsVersion { AUTOMATIC = 0, NFS3 = 1, NFS4_0 = 2, NFS4_1 = 3 }

	export enum VerifyMode { POINT_IN_TIME_CONSISTENT = 0, ONLY_FILES_TRANSFERRED = 1, NONE = 2 }

	export enum OverwriteMode { ALWAYS = 0, NEVER = 1 }

	export enum Uid { NONE = 0, INT_VALUE = 1, NAME = 2, BOTH = 3 }

	export enum PreserveDeletedFiles { PRESERVE = 0, REMOVE = 1 }

	export enum PreserveDevices { NONE = 0, PRESERVE = 1 }

	export enum PosixPermissions { NONE = 0, PRESERVE = 1 }

	export enum TaskQueueing { ENABLED = 0, DISABLED = 1 }

	export enum PhaseStatus { PENDING = 0, SUCCESS = 1, ERROR = 2 }

	export enum SmbVersion { AUTOMATIC = 0, SMB2 = 1, SMB3 = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Cancels execution of a task. </p> <p>When you cancel a task execution, the transfer of some files are abruptly interrupted. The contents of files that are transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution on the same task and you allow the task execution to complete, file content on the destination is complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, AWS DataSync successfully complete the transfer when you start the next task execution.</p>
		 * Post #X-Amz-Target=FmrsService.CancelTaskExecution
		 * @return {CancelTaskExecutionResponse} Success
		 */
		CancelTaskExecution(requestBody: CancelTaskExecutionRequest): Observable<CancelTaskExecutionResponse> {
			return this.http.post<CancelTaskExecutionResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CancelTaskExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Activates an AWS DataSync agent that you have deployed on your host. The activation process associates your agent with your account. In the activation process, you specify information such as the AWS Region that you want to activate the agent in. You activate the agent in the AWS Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this AWS Region.</p> <p>You can activate the agent in a VPC (Virtual private Cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public Internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by AWS on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p> <p/>
		 * Post #X-Amz-Target=FmrsService.CreateAgent
		 * @return {CreateAgentResponse} Success
		 */
		CreateAgent(requestBody: CreateAgentRequest): Observable<CreateAgentResponse> {
			return this.http.post<CreateAgentResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an endpoint for an Amazon EFS file system.
		 * Post #X-Amz-Target=FmrsService.CreateLocationEfs
		 * @return {CreateLocationEfsResponse} Success
		 */
		CreateLocationEfs(requestBody: CreateLocationEfsRequest): Observable<CreateLocationEfsResponse> {
			return this.http.post<CreateLocationEfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationEfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an endpoint for an Amazon FSx for Windows file system.
		 * Post #X-Amz-Target=FmrsService.CreateLocationFsxWindows
		 * @return {CreateLocationFsxWindowsResponse} Success
		 */
		CreateLocationFsxWindows(requestBody: CreateLocationFsxWindowsRequest): Observable<CreateLocationFsxWindowsResponse> {
			return this.http.post<CreateLocationFsxWindowsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationFsxWindows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Defines a file system on a Network File System (NFS) server that can be read from or written to
		 * Post #X-Amz-Target=FmrsService.CreateLocationNfs
		 * @return {CreateLocationNfsResponse} Success
		 */
		CreateLocationNfs(requestBody: CreateLocationNfsRequest): Observable<CreateLocationNfsResponse> {
			return this.http.post<CreateLocationNfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationNfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an endpoint for an Amazon S3 bucket.</p> <p>For AWS DataSync to access a destination S3 bucket, it needs an AWS Identity and Access Management (IAM) role that has the required permissions. You can set up the required permissions by creating an IAM policy that grants the required permissions and attaching the policy to the role. An example of such a policy is shown in the examples section.</p> <p>For more information, see https://docs.aws.amazon.com/datasync/latest/userguide/working-with-locations.html#create-s3-location in the <i>AWS DataSync User Guide.</i> </p>
		 * Post #X-Amz-Target=FmrsService.CreateLocationS3
		 * @return {CreateLocationS3Response} Success
		 */
		CreateLocationS3(requestBody: CreateLocationS3Request): Observable<CreateLocationS3Response> {
			return this.http.post<CreateLocationS3Response>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationS3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Defines a file system on an Server Message Block (SMB) server that can be read from or written to.
		 * Post #X-Amz-Target=FmrsService.CreateLocationSmb
		 * @return {CreateLocationSmbResponse} Success
		 */
		CreateLocationSmb(requestBody: CreateLocationSmbRequest): Observable<CreateLocationSmbResponse> {
			return this.http.post<CreateLocationSmbResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationSmb', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a task. A task is a set of two locations (source and destination) and a set of Options that you use to control the behavior of a task. If you don't specify Options when you create a task, AWS DataSync populates them with service defaults.</p> <p>When you create a task, it first enters the CREATING state. During CREATING AWS DataSync attempts to mount the on-premises Network File System (NFS) location. The task transitions to the AVAILABLE state without waiting for the AWS location to become mounted. If required, AWS DataSync mounts the AWS location before each task execution.</p> <p>If an agent that is associated with a source (NFS) location goes offline, the task transitions to the UNAVAILABLE status. If the status of the task remains in the CREATING status for more than a few minutes, it means that your agent might be having trouble mounting the source NFS file system. Check the task's ErrorCode and ErrorDetail. Mount issues are often caused by either a misconfigured firewall or a mistyped NFS server host name.</p>
		 * Post #X-Amz-Target=FmrsService.CreateTask
		 * @return {CreateTaskResponse} Success
		 */
		CreateTask(requestBody: CreateTaskRequest): Observable<CreateTaskResponse> {
			return this.http.post<CreateTaskResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your AWS account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
		 * Post #X-Amz-Target=FmrsService.DeleteAgent
		 * @return {DeleteAgentResponse} Success
		 */
		DeleteAgent(requestBody: DeleteAgentRequest): Observable<DeleteAgentResponse> {
			return this.http.post<DeleteAgentResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DeleteAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the configuration of a location used by AWS DataSync.
		 * Post #X-Amz-Target=FmrsService.DeleteLocation
		 * @return {DeleteLocationResponse} Success
		 */
		DeleteLocation(requestBody: DeleteLocationRequest): Observable<DeleteLocationResponse> {
			return this.http.post<DeleteLocationResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DeleteLocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a task.
		 * Post #X-Amz-Target=FmrsService.DeleteTask
		 * @return {DeleteTaskResponse} Success
		 */
		DeleteTask(requestBody: DeleteTaskRequest): Observable<DeleteTaskResponse> {
			return this.http.post<DeleteTaskResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DeleteTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata such as the name, the network interfaces, and the status (that is, whether the agent is running or not) for an agent. To specify which agent to describe, use the Amazon Resource Name (ARN) of the agent in your request.
		 * Post #X-Amz-Target=FmrsService.DescribeAgent
		 * @return {DescribeAgentResponse} Success
		 */
		DescribeAgent(requestBody: DescribeAgentRequest): Observable<DescribeAgentResponse> {
			return this.http.post<DescribeAgentResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata, such as the path information about an Amazon EFS location.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationEfs
		 * @return {DescribeLocationEfsResponse} Success
		 */
		DescribeLocationEfs(requestBody: DescribeLocationEfsRequest): Observable<DescribeLocationEfsResponse> {
			return this.http.post<DescribeLocationEfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationEfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata, such as the path information about an Amazon FSx for Windows location.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationFsxWindows
		 * @return {DescribeLocationFsxWindowsResponse} Success
		 */
		DescribeLocationFsxWindows(requestBody: DescribeLocationFsxWindowsRequest): Observable<DescribeLocationFsxWindowsResponse> {
			return this.http.post<DescribeLocationFsxWindowsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationFsxWindows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata, such as the path information, about a NFS location.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationNfs
		 * @return {DescribeLocationNfsResponse} Success
		 */
		DescribeLocationNfs(requestBody: DescribeLocationNfsRequest): Observable<DescribeLocationNfsResponse> {
			return this.http.post<DescribeLocationNfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationNfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata, such as bucket name, about an Amazon S3 bucket location.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationS3
		 * @return {DescribeLocationS3Response} Success
		 */
		DescribeLocationS3(requestBody: DescribeLocationS3Request): Observable<DescribeLocationS3Response> {
			return this.http.post<DescribeLocationS3Response>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationS3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata, such as the path and user information about a SMB location.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationSmb
		 * @return {DescribeLocationSmbResponse} Success
		 */
		DescribeLocationSmb(requestBody: DescribeLocationSmbRequest): Observable<DescribeLocationSmbResponse> {
			return this.http.post<DescribeLocationSmbResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationSmb', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata about a task.
		 * Post #X-Amz-Target=FmrsService.DescribeTask
		 * @return {DescribeTaskResponse} Success
		 */
		DescribeTask(requestBody: DescribeTaskRequest): Observable<DescribeTaskResponse> {
			return this.http.post<DescribeTaskResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns detailed metadata about a task that is being executed.
		 * Post #X-Amz-Target=FmrsService.DescribeTaskExecution
		 * @return {DescribeTaskExecutionResponse} Success
		 */
		DescribeTaskExecution(requestBody: DescribeTaskExecutionRequest): Observable<DescribeTaskExecutionResponse> {
			return this.http.post<DescribeTaskExecutionResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeTaskExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of agents owned by an AWS account in the AWS Region specified in the request. The returned list is ordered by agent Amazon Resource Name (ARN).</p> <p>By default, this operation returns a maximum of 100 agents. This operation supports pagination that enables you to optionally reduce the number of agents returned in a response.</p> <p>If you have more agents than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a marker that you can specify in your next request to fetch the next page of agents.</p>
		 * Post #X-Amz-Target=FmrsService.ListAgents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAgentsResponse} Success
		 */
		ListAgents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAgentsRequest): Observable<ListAgentsResponse> {
			return this.http.post<ListAgentsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListAgents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a lists of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>
		 * Post #X-Amz-Target=FmrsService.ListLocations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLocationsResponse} Success
		 */
		ListLocations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLocationsRequest): Observable<ListLocationsResponse> {
			return this.http.post<ListLocationsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListLocations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all the tags associated with a specified resources.
		 * Post #X-Amz-Target=FmrsService.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of executed tasks.
		 * Post #X-Amz-Target=FmrsService.ListTaskExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTaskExecutionsResponse} Success
		 */
		ListTaskExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTaskExecutionsRequest): Observable<ListTaskExecutionsResponse> {
			return this.http.post<ListTaskExecutionsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListTaskExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all the tasks.
		 * Post #X-Amz-Target=FmrsService.ListTasks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTasksResponse} Success
		 */
		ListTasks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTasksRequest): Observable<ListTasksResponse> {
			return this.http.post<ListTasksResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListTasks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a specific invocation of a task. A <code>TaskExecution</code> value represents an individual run of a task. Each task can have at most one <code>TaskExecution</code> at a time.</p> <p> <code>TaskExecution</code> has the following transition phases: INITIALIZING | PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE. </p> <p>For detailed information, see the Task Execution section in the Components and Terminology topic in the <i>AWS DataSync User Guide</i>.</p>
		 * Post #X-Amz-Target=FmrsService.StartTaskExecution
		 * @return {StartTaskExecutionResponse} Success
		 */
		StartTaskExecution(requestBody: StartTaskExecutionRequest): Observable<StartTaskExecutionResponse> {
			return this.http.post<StartTaskExecutionResponse>(this.baseUri + '#X-Amz-Target=FmrsService.StartTaskExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a key-value pair to an AWS resource.
		 * Post #X-Amz-Target=FmrsService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=FmrsService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from an AWS resource.
		 * Post #X-Amz-Target=FmrsService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the name of an agent.
		 * Post #X-Amz-Target=FmrsService.UpdateAgent
		 * @return {UpdateAgentResponse} Success
		 */
		UpdateAgent(requestBody: UpdateAgentRequest): Observable<UpdateAgentResponse> {
			return this.http.post<UpdateAgentResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the metadata associated with a task.
		 * Post #X-Amz-Target=FmrsService.UpdateTask
		 * @return {UpdateTaskResponse} Success
		 */
		UpdateTask(requestBody: UpdateTaskRequest): Observable<UpdateTaskResponse> {
			return this.http.post<UpdateTaskResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CancelTaskExecutionX_Amz_Target { 'FmrsService.CancelTaskExecution' = 0 }

	export enum CreateAgentX_Amz_Target { 'FmrsService.CreateAgent' = 0 }

	export enum CreateLocationEfsX_Amz_Target { 'FmrsService.CreateLocationEfs' = 0 }

	export enum CreateLocationFsxWindowsX_Amz_Target { 'FmrsService.CreateLocationFsxWindows' = 0 }

	export enum CreateLocationNfsX_Amz_Target { 'FmrsService.CreateLocationNfs' = 0 }

	export enum CreateLocationS3X_Amz_Target { 'FmrsService.CreateLocationS3' = 0 }

	export enum CreateLocationSmbX_Amz_Target { 'FmrsService.CreateLocationSmb' = 0 }

	export enum CreateTaskX_Amz_Target { 'FmrsService.CreateTask' = 0 }

	export enum DeleteAgentX_Amz_Target { 'FmrsService.DeleteAgent' = 0 }

	export enum DeleteLocationX_Amz_Target { 'FmrsService.DeleteLocation' = 0 }

	export enum DeleteTaskX_Amz_Target { 'FmrsService.DeleteTask' = 0 }

	export enum DescribeAgentX_Amz_Target { 'FmrsService.DescribeAgent' = 0 }

	export enum DescribeLocationEfsX_Amz_Target { 'FmrsService.DescribeLocationEfs' = 0 }

	export enum DescribeLocationFsxWindowsX_Amz_Target { 'FmrsService.DescribeLocationFsxWindows' = 0 }

	export enum DescribeLocationNfsX_Amz_Target { 'FmrsService.DescribeLocationNfs' = 0 }

	export enum DescribeLocationS3X_Amz_Target { 'FmrsService.DescribeLocationS3' = 0 }

	export enum DescribeLocationSmbX_Amz_Target { 'FmrsService.DescribeLocationSmb' = 0 }

	export enum DescribeTaskX_Amz_Target { 'FmrsService.DescribeTask' = 0 }

	export enum DescribeTaskExecutionX_Amz_Target { 'FmrsService.DescribeTaskExecution' = 0 }

	export enum ListAgentsX_Amz_Target { 'FmrsService.ListAgents' = 0 }

	export enum ListLocationsX_Amz_Target { 'FmrsService.ListLocations' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'FmrsService.ListTagsForResource' = 0 }

	export enum ListTaskExecutionsX_Amz_Target { 'FmrsService.ListTaskExecutions' = 0 }

	export enum ListTasksX_Amz_Target { 'FmrsService.ListTasks' = 0 }

	export enum StartTaskExecutionX_Amz_Target { 'FmrsService.StartTaskExecution' = 0 }

	export enum TagResourceX_Amz_Target { 'FmrsService.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'FmrsService.UntagResource' = 0 }

	export enum UpdateAgentX_Amz_Target { 'FmrsService.UpdateAgent' = 0 }

	export enum UpdateTaskX_Amz_Target { 'FmrsService.UpdateTask' = 0 }

}

