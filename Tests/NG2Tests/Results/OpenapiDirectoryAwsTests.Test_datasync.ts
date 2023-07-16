import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CancelTaskExecutionResponse {
	}


	/** CancelTaskExecutionRequest */
	export interface CancelTaskExecutionRequest {
		TaskExecutionArn: string;
	}

	export interface InvalidRequestException {
	}

	export interface InternalException {
	}


	/** CreateAgentResponse */
	export interface CreateAgentResponse {
		AgentArn?: string;
	}


	/** CreateAgentRequest */
	export interface CreateAgentRequest {
		ActivationKey: string;
		AgentName?: string;
		Tags?: Array<TagListEntry>;
		VpcEndpointId?: string;
		SubnetArns?: Array<string>;
		SecurityGroupArns?: Array<string>;
	}


	/** Represents a single entry in a list of AWS resource tags. <code>TagListEntry</code> returns an array that contains a list of tasks when the <a>ListTagsForResource</a> operation is called. */
	export interface TagListEntry {
		Key: string;
		Value?: string;
	}


	/** CreateLocationEfs */
	export interface CreateLocationEfsResponse {
		LocationArn?: string;
	}


	/** CreateLocationEfsRequest */
	export interface CreateLocationEfsRequest {
		Subdirectory?: string;
		EfsFilesystemArn: string;

		/**
		 * The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified.
		 * Required
		 */
		Ec2Config: Ec2Config;
		Tags?: Array<TagListEntry>;
	}


	/** The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified.  */
	export interface Ec2Config {
		SubnetArn: string;
		SecurityGroupArns: Array<string>;
	}

	export interface CreateLocationFsxWindowsResponse {
		LocationArn?: string;
	}

	export interface CreateLocationFsxWindowsRequest {
		Subdirectory?: string;
		FsxFilesystemArn: string;
		SecurityGroupArns: Array<string>;
		Tags?: Array<TagListEntry>;
		User: string;
		Domain?: string;
		Password: string;
	}


	/** CreateLocationNfsResponse */
	export interface CreateLocationNfsResponse {
		LocationArn?: string;
	}


	/** CreateLocationNfsRequest */
	export interface CreateLocationNfsRequest {
		Subdirectory: string;
		ServerHostname: string;

		/**
		 * A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
		 * Required
		 */
		OnPremConfig: OnPremConfig;

		/** Represents the mount options that are available for DataSync to access an NFS location. */
		MountOptions?: NfsMountOptions;
		Tags?: Array<TagListEntry>;
	}


	/** A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location. */
	export interface OnPremConfig {
		AgentArns: Array<string>;
	}


	/** Represents the mount options that are available for DataSync to access an NFS location. */
	export interface NfsMountOptions {
		Version?: NfsMountOptionsVersion;
	}

	export enum NfsMountOptionsVersion { AUTOMATIC = 0, NFS3 = 1, NFS4_0 = 2, NFS4_1 = 3 }


	/** CreateLocationS3Response */
	export interface CreateLocationS3Response {
		LocationArn?: string;
	}


	/** CreateLocationS3Request */
	export interface CreateLocationS3Request {
		Subdirectory?: string;
		S3BucketArn: string;
		S3StorageClass?: CreateLocationS3RequestS3StorageClass;

		/**
		 * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p>
		 * Required
		 */
		S3Config: S3Config;
		Tags?: Array<TagListEntry>;
	}

	export enum CreateLocationS3RequestS3StorageClass { STANDARD = 0, STANDARD_IA = 1, ONEZONE_IA = 2, INTELLIGENT_TIERING = 3, GLACIER = 4, DEEP_ARCHIVE = 5 }


	/** <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p> */
	export interface S3Config {
		BucketAccessRoleArn: string;
	}


	/** CreateLocationSmbResponse */
	export interface CreateLocationSmbResponse {
		LocationArn?: string;
	}


	/** CreateLocationSmbRequest */
	export interface CreateLocationSmbRequest {
		Subdirectory: string;
		ServerHostname: string;
		User: string;
		Domain?: string;
		Password: string;
		AgentArns: Array<string>;

		/** Represents the mount options that are available for DataSync to access an SMB location. */
		MountOptions?: SmbMountOptions;
		Tags?: Array<TagListEntry>;
	}


	/** Represents the mount options that are available for DataSync to access an SMB location. */
	export interface SmbMountOptions {
		Version?: SmbMountOptionsVersion;
	}

	export enum SmbMountOptionsVersion { AUTOMATIC = 0, SMB2 = 1, SMB3 = 2 }


	/** CreateTaskResponse */
	export interface CreateTaskResponse {
		TaskArn?: string;
	}


	/** CreateTaskRequest */
	export interface CreateTaskRequest {
		SourceLocationArn: string;
		DestinationLocationArn: string;
		CloudWatchLogGroupArn?: string;
		Name?: string;

		/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
		Options?: Options;
		Excludes?: Array<FilterRule>;

		/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
		Schedule?: TaskSchedule;
		Tags?: Array<TagListEntry>;
	}


	/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
	export interface Options {
		VerifyMode?: OptionsVerifyMode;
		OverwriteMode?: OptionsOverwriteMode;
		Atime?: OptionsAtime;
		Mtime?: OptionsMtime;
		Uid?: OptionsUid;
		Gid?: OptionsUid;
		PreserveDeletedFiles?: OptionsPreserveDeletedFiles;
		PreserveDevices?: OptionsMtime;
		PosixPermissions?: OptionsMtime;
		BytesPerSecond?: number;
		TaskQueueing?: OptionsTaskQueueing;
		LogLevel?: OptionsLogLevel;
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
		FilterType?: FilterRuleFilterType;
		Value?: string;
	}

	export enum FilterRuleFilterType { SIMPLE_PATTERN = 0 }


	/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
	export interface TaskSchedule {
		ScheduleExpression: string;
	}

	export interface DeleteAgentResponse {
	}


	/** DeleteAgentRequest */
	export interface DeleteAgentRequest {
		AgentArn: string;
	}

	export interface DeleteLocationResponse {
	}


	/** DeleteLocation */
	export interface DeleteLocationRequest {
		LocationArn: string;
	}

	export interface DeleteTaskResponse {
	}


	/** DeleteTask */
	export interface DeleteTaskRequest {
		TaskArn: string;
	}


	/** DescribeAgentResponse */
	export interface DescribeAgentResponse {
		AgentArn?: string;
		Name?: string;
		Status?: DescribeAgentResponseStatus;
		LastConnectionTime?: Date;
		CreationTime?: Date;
		EndpointType?: DescribeAgentResponseEndpointType;

		/** The VPC endpoint, subnet and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud). */
		PrivateLinkConfig?: PrivateLinkConfig;
	}

	export enum DescribeAgentResponseStatus { ONLINE = 0, OFFLINE = 1 }

	export enum DescribeAgentResponseEndpointType { PUBLIC = 0, PRIVATE_LINK = 1, FIPS = 2 }


	/** The VPC endpoint, subnet and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud). */
	export interface PrivateLinkConfig {
		VpcEndpointId?: string;
		PrivateLinkEndpoint?: string;
		SubnetArns?: Array<string>;
		SecurityGroupArns?: Array<string>;
	}


	/** DescribeAgent */
	export interface DescribeAgentRequest {
		AgentArn: string;
	}


	/** DescribeLocationEfsResponse */
	export interface DescribeLocationEfsResponse {
		LocationArn?: string;
		LocationUri?: string;

		/** The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified. */
		Ec2Config?: Ec2Config;
		CreationTime?: Date;
	}


	/** DescribeLocationEfsRequest */
	export interface DescribeLocationEfsRequest {
		LocationArn: string;
	}

	export interface DescribeLocationFsxWindowsResponse {
		LocationArn?: string;
		LocationUri?: string;
		SecurityGroupArns?: Array<string>;
		CreationTime?: Date;
		User?: string;
		Domain?: string;
	}

	export interface DescribeLocationFsxWindowsRequest {
		LocationArn: string;
	}


	/** DescribeLocationNfsResponse */
	export interface DescribeLocationNfsResponse {
		LocationArn?: string;
		LocationUri?: string;

		/** A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location. */
		OnPremConfig?: OnPremConfig;

		/** Represents the mount options that are available for DataSync to access an NFS location. */
		MountOptions?: NfsMountOptions;
		CreationTime?: Date;
	}


	/** DescribeLocationNfsRequest */
	export interface DescribeLocationNfsRequest {
		LocationArn: string;
	}


	/** DescribeLocationS3Response */
	export interface DescribeLocationS3Response {
		LocationArn?: string;
		LocationUri?: string;
		S3StorageClass?: CreateLocationS3RequestS3StorageClass;

		/** <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p> */
		S3Config?: S3Config;
		CreationTime?: Date;
	}


	/** DescribeLocationS3Request */
	export interface DescribeLocationS3Request {
		LocationArn: string;
	}


	/** DescribeLocationSmbResponse */
	export interface DescribeLocationSmbResponse {
		LocationArn?: string;
		LocationUri?: string;
		AgentArns?: Array<string>;
		User?: string;
		Domain?: string;

		/** Represents the mount options that are available for DataSync to access an SMB location. */
		MountOptions?: SmbMountOptions;
		CreationTime?: Date;
	}


	/** DescribeLocationSmbRequest */
	export interface DescribeLocationSmbRequest {
		LocationArn: string;
	}


	/** DescribeTaskResponse */
	export interface DescribeTaskResponse {
		TaskArn?: string;
		Status?: DescribeTaskResponseStatus;
		Name?: string;
		CurrentTaskExecutionArn?: string;
		SourceLocationArn?: string;
		DestinationLocationArn?: string;
		CloudWatchLogGroupArn?: string;
		SourceNetworkInterfaceArns?: Array<string>;
		DestinationNetworkInterfaceArns?: Array<string>;

		/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
		Options?: Options;
		Excludes?: Array<FilterRule>;

		/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
		Schedule?: TaskSchedule;
		ErrorCode?: string;
		ErrorDetail?: string;
		CreationTime?: Date;
	}

	export enum DescribeTaskResponseStatus { AVAILABLE = 0, CREATING = 1, QUEUED = 2, RUNNING = 3, UNAVAILABLE = 4 }


	/** DescribeTaskRequest */
	export interface DescribeTaskRequest {
		TaskArn: string;
	}


	/** DescribeTaskExecutionResponse */
	export interface DescribeTaskExecutionResponse {
		TaskExecutionArn?: string;
		Status?: DescribeTaskExecutionResponseStatus;

		/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
		Options?: Options;
		Excludes?: Array<FilterRule>;
		Includes?: Array<FilterRule>;
		StartTime?: Date;
		EstimatedFilesToTransfer?: number;
		EstimatedBytesToTransfer?: number;
		FilesTransferred?: number;
		BytesWritten?: number;
		BytesTransferred?: number;

		/** Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered. */
		Result?: TaskExecutionResultDetail;
	}

	export enum DescribeTaskExecutionResponseStatus { QUEUED = 0, LAUNCHING = 1, PREPARING = 2, TRANSFERRING = 3, VERIFYING = 4, SUCCESS = 5, ERROR = 6 }


	/** Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered. */
	export interface TaskExecutionResultDetail {
		PrepareDuration?: number;
		PrepareStatus?: TaskExecutionResultDetailPrepareStatus;
		TotalDuration?: number;
		TransferDuration?: number;
		TransferStatus?: TaskExecutionResultDetailPrepareStatus;
		VerifyDuration?: number;
		VerifyStatus?: TaskExecutionResultDetailPrepareStatus;
		ErrorCode?: string;
		ErrorDetail?: string;
	}

	export enum TaskExecutionResultDetailPrepareStatus { PENDING = 0, SUCCESS = 1, ERROR = 2 }


	/** DescribeTaskExecutionRequest */
	export interface DescribeTaskExecutionRequest {
		TaskExecutionArn: string;
	}


	/** ListAgentsResponse */
	export interface ListAgentsResponse {
		Agents?: Array<AgentListEntry>;
		NextToken?: string;
	}


	/** Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a>ListAgents</a> operation is called. */
	export interface AgentListEntry {
		AgentArn?: string;
		Name?: string;
		Status?: DescribeAgentResponseStatus;
	}


	/** ListAgentsRequest */
	export interface ListAgentsRequest {
		MaxResults?: number;
		NextToken?: string;
	}


	/** ListLocationsResponse */
	export interface ListLocationsResponse {
		Locations?: Array<LocationListEntry>;
		NextToken?: string;
	}


	/** Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a>ListLocations</a> operation is called. */
	export interface LocationListEntry {
		LocationArn?: string;
		LocationUri?: string;
	}


	/** ListLocationsRequest */
	export interface ListLocationsRequest {
		MaxResults?: number;
		NextToken?: string;
	}


	/** ListTagsForResourceResponse */
	export interface ListTagsForResourceResponse {
		Tags?: Array<TagListEntry>;
		NextToken?: string;
	}


	/** ListTagsForResourceRequest */
	export interface ListTagsForResourceRequest {
		ResourceArn: string;
		MaxResults?: number;
		NextToken?: string;
	}


	/** ListTaskExecutionsResponse */
	export interface ListTaskExecutionsResponse {
		TaskExecutions?: Array<TaskExecutionListEntry>;
		NextToken?: string;
	}


	/** Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when <a>ListTaskExecutions</a> operation is called. */
	export interface TaskExecutionListEntry {
		TaskExecutionArn?: string;
		Status?: DescribeTaskExecutionResponseStatus;
	}


	/** ListTaskExecutions */
	export interface ListTaskExecutionsRequest {
		TaskArn?: string;
		MaxResults?: number;
		NextToken?: string;
	}


	/** ListTasksResponse */
	export interface ListTasksResponse {
		Tasks?: Array<TaskListEntry>;
		NextToken?: string;
	}


	/** Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a>ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks. */
	export interface TaskListEntry {
		TaskArn?: string;
		Status?: DescribeTaskResponseStatus;
		Name?: string;
	}


	/** ListTasksRequest */
	export interface ListTasksRequest {
		MaxResults?: number;
		NextToken?: string;
	}


	/** StartTaskExecutionResponse */
	export interface StartTaskExecutionResponse {
		TaskExecutionArn?: string;
	}


	/** StartTaskExecutionRequest */
	export interface StartTaskExecutionRequest {
		TaskArn: string;

		/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
		OverrideOptions?: Options;
		Includes?: Array<FilterRule>;
	}

	export interface TagResourceResponse {
	}


	/** TagResourceRequest */
	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<TagListEntry>;
	}

	export interface UntagResourceResponse {
	}


	/** UntagResourceRequest */
	export interface UntagResourceRequest {
		ResourceArn: string;
		Keys: Array<string>;
	}

	export interface UpdateAgentResponse {
	}


	/** UpdateAgentRequest */
	export interface UpdateAgentRequest {
		AgentArn: string;
		Name?: string;
	}

	export interface UpdateTaskResponse {
	}


	/** UpdateTaskResponse */
	export interface UpdateTaskRequest {
		TaskArn: string;

		/** <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p> */
		Options?: Options;
		Excludes?: Array<FilterRule>;

		/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
		Schedule?: TaskSchedule;
		Name?: string;
		CloudWatchLogGroupArn?: string;
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
		ListAgents(MaxResults: string, NextToken: string, requestBody: ListAgentsRequest): Observable<ListAgentsResponse> {
			return this.http.post<ListAgentsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListAgents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a lists of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>
		 * Post #X-Amz-Target=FmrsService.ListLocations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLocationsResponse} Success
		 */
		ListLocations(MaxResults: string, NextToken: string, requestBody: ListLocationsRequest): Observable<ListLocationsResponse> {
			return this.http.post<ListLocationsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListLocations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all the tags associated with a specified resources.
		 * Post #X-Amz-Target=FmrsService.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string, NextToken: string, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of executed tasks.
		 * Post #X-Amz-Target=FmrsService.ListTaskExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTaskExecutionsResponse} Success
		 */
		ListTaskExecutions(MaxResults: string, NextToken: string, requestBody: ListTaskExecutionsRequest): Observable<ListTaskExecutionsResponse> {
			return this.http.post<ListTaskExecutionsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListTaskExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all the tasks.
		 * Post #X-Amz-Target=FmrsService.ListTasks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTasksResponse} Success
		 */
		ListTasks(MaxResults: string, NextToken: string, requestBody: ListTasksRequest): Observable<ListTasksResponse> {
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

	export enum CancelTaskExecutionX_Amz_Target { FmrsService_CancelTaskExecution = 0 }

	export enum CreateAgentX_Amz_Target { FmrsService_CreateAgent = 0 }

	export enum CreateLocationEfsX_Amz_Target { FmrsService_CreateLocationEfs = 0 }

	export enum CreateLocationFsxWindowsX_Amz_Target { FmrsService_CreateLocationFsxWindows = 0 }

	export enum CreateLocationNfsX_Amz_Target { FmrsService_CreateLocationNfs = 0 }

	export enum CreateLocationS3X_Amz_Target { FmrsService_CreateLocationS3 = 0 }

	export enum CreateLocationSmbX_Amz_Target { FmrsService_CreateLocationSmb = 0 }

	export enum CreateTaskX_Amz_Target { FmrsService_CreateTask = 0 }

	export enum DeleteAgentX_Amz_Target { FmrsService_DeleteAgent = 0 }

	export enum DeleteLocationX_Amz_Target { FmrsService_DeleteLocation = 0 }

	export enum DeleteTaskX_Amz_Target { FmrsService_DeleteTask = 0 }

	export enum DescribeAgentX_Amz_Target { FmrsService_DescribeAgent = 0 }

	export enum DescribeLocationEfsX_Amz_Target { FmrsService_DescribeLocationEfs = 0 }

	export enum DescribeLocationFsxWindowsX_Amz_Target { FmrsService_DescribeLocationFsxWindows = 0 }

	export enum DescribeLocationNfsX_Amz_Target { FmrsService_DescribeLocationNfs = 0 }

	export enum DescribeLocationS3X_Amz_Target { FmrsService_DescribeLocationS3 = 0 }

	export enum DescribeLocationSmbX_Amz_Target { FmrsService_DescribeLocationSmb = 0 }

	export enum DescribeTaskX_Amz_Target { FmrsService_DescribeTask = 0 }

	export enum DescribeTaskExecutionX_Amz_Target { FmrsService_DescribeTaskExecution = 0 }

	export enum ListAgentsX_Amz_Target { FmrsService_ListAgents = 0 }

	export enum ListLocationsX_Amz_Target { FmrsService_ListLocations = 0 }

	export enum ListTagsForResourceX_Amz_Target { FmrsService_ListTagsForResource = 0 }

	export enum ListTaskExecutionsX_Amz_Target { FmrsService_ListTaskExecutions = 0 }

	export enum ListTasksX_Amz_Target { FmrsService_ListTasks = 0 }

	export enum StartTaskExecutionX_Amz_Target { FmrsService_StartTaskExecution = 0 }

	export enum TagResourceX_Amz_Target { FmrsService_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { FmrsService_UntagResource = 0 }

	export enum UpdateAgentX_Amz_Target { FmrsService_UpdateAgent = 0 }

	export enum UpdateTaskX_Amz_Target { FmrsService_UpdateTask = 0 }

}

