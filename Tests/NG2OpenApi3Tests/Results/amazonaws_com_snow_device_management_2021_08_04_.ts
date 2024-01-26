import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelTaskOutput {
		taskId?: string;
	}
	export interface CancelTaskOutputFormProperties {
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateCancelTaskOutputFormGroup() {
		return new FormGroup<CancelTaskOutputFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface CreateTaskOutput {
		taskArn?: string;
		taskId?: string;
	}
	export interface CreateTaskOutputFormProperties {
		taskArn: FormControl<string | null | undefined>,
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskOutputFormGroup() {
		return new FormGroup<CreateTaskOutputFormProperties>({
			taskArn: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure used to reboot the device. */
	export interface Reboot {
	}

	/** A structure used to reboot the device. */
	export interface RebootFormProperties {
	}
	export function CreateRebootFormGroup() {
		return new FormGroup<RebootFormProperties>({
		});

	}


	/** A structure used to unlock a device. */
	export interface Unlock {
	}

	/** A structure used to unlock a device. */
	export interface UnlockFormProperties {
	}
	export function CreateUnlockFormGroup() {
		return new FormGroup<UnlockFormProperties>({
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

	export interface DescribeDeviceOutput {
		associatedWithJob?: string;
		deviceCapacities?: Array<Capacity>;
		deviceState?: UnlockState;
		deviceType?: string;
		lastReachedOutAt?: Date;
		lastUpdatedAt?: Date;
		managedDeviceArn?: string;
		managedDeviceId?: string;
		physicalNetworkInterfaces?: Array<PhysicalNetworkInterface>;
		software?: SoftwareInformation;
		tags?: TagMap;
	}
	export interface DescribeDeviceOutputFormProperties {
		associatedWithJob: FormControl<string | null | undefined>,
		deviceState: FormControl<UnlockState | null | undefined>,
		deviceType: FormControl<string | null | undefined>,
		lastReachedOutAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		managedDeviceArn: FormControl<string | null | undefined>,
		managedDeviceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDeviceOutputFormGroup() {
		return new FormGroup<DescribeDeviceOutputFormProperties>({
			associatedWithJob: new FormControl<string | null | undefined>(undefined),
			deviceState: new FormControl<UnlockState | null | undefined>(undefined),
			deviceType: new FormControl<string | null | undefined>(undefined),
			lastReachedOutAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			managedDeviceArn: new FormControl<string | null | undefined>(undefined),
			managedDeviceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The physical capacity of the Amazon Web Services Snow Family device.  */
	export interface Capacity {
		available?: number | null;
		name?: string;
		total?: number | null;
		unit?: string;
		used?: number | null;
	}

	/** The physical capacity of the Amazon Web Services Snow Family device.  */
	export interface CapacityFormProperties {
		available: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		unit: FormControl<string | null | undefined>,
		used: FormControl<number | null | undefined>,
	}
	export function CreateCapacityFormGroup() {
		return new FormGroup<CapacityFormProperties>({
			available: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UnlockState { UNLOCKED = 0, LOCKED = 1, UNLOCKING = 2 }


	/** The details about the physical network interface for the device. */
	export interface PhysicalNetworkInterface {
		defaultGateway?: string;
		ipAddress?: string;
		ipAddressAssignment?: IpAddressAssignment;
		macAddress?: string;
		netmask?: string;
		physicalConnectorType?: PhysicalConnectorType;
		physicalNetworkInterfaceId?: string;
	}

	/** The details about the physical network interface for the device. */
	export interface PhysicalNetworkInterfaceFormProperties {
		defaultGateway: FormControl<string | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		ipAddressAssignment: FormControl<IpAddressAssignment | null | undefined>,
		macAddress: FormControl<string | null | undefined>,
		netmask: FormControl<string | null | undefined>,
		physicalConnectorType: FormControl<PhysicalConnectorType | null | undefined>,
		physicalNetworkInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreatePhysicalNetworkInterfaceFormGroup() {
		return new FormGroup<PhysicalNetworkInterfaceFormProperties>({
			defaultGateway: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			ipAddressAssignment: new FormControl<IpAddressAssignment | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
			netmask: new FormControl<string | null | undefined>(undefined),
			physicalConnectorType: new FormControl<PhysicalConnectorType | null | undefined>(undefined),
			physicalNetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IpAddressAssignment { DHCP = 0, STATIC = 1 }

	export enum PhysicalConnectorType { RJ45 = 0, SFP_PLUS = 1, QSFP = 2, RJ45_2 = 3, WIFI = 4 }


	/** Information about the software on the device. */
	export interface SoftwareInformation {
		installState?: string;
		installedVersion?: string;
		installingVersion?: string;
	}

	/** Information about the software on the device. */
	export interface SoftwareInformationFormProperties {
		installState: FormControl<string | null | undefined>,
		installedVersion: FormControl<string | null | undefined>,
		installingVersion: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareInformationFormGroup() {
		return new FormGroup<SoftwareInformationFormProperties>({
			installState: new FormControl<string | null | undefined>(undefined),
			installedVersion: new FormControl<string | null | undefined>(undefined),
			installingVersion: new FormControl<string | null | undefined>(undefined),
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

	export interface DescribeDeviceEc2Output {
		instances?: Array<InstanceSummary>;
	}
	export interface DescribeDeviceEc2OutputFormProperties {
	}
	export function CreateDescribeDeviceEc2OutputFormGroup() {
		return new FormGroup<DescribeDeviceEc2OutputFormProperties>({
		});

	}


	/** The details about the instance. */
	export interface InstanceSummary {
		instance?: Instance;
		lastUpdatedAt?: Date;
	}

	/** The details about the instance. */
	export interface InstanceSummaryFormProperties {
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceSummaryFormGroup() {
		return new FormGroup<InstanceSummaryFormProperties>({
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The description of an instance. Currently, Amazon EC2 instances are the only supported instance type. */
	export interface Instance {
		amiLaunchIndex?: number | null;
		blockDeviceMappings?: Array<InstanceBlockDeviceMapping>;
		cpuOptions?: CpuOptions;
		createdAt?: Date;
		imageId?: string;
		instanceId?: string;
		instanceType?: string;
		privateIpAddress?: string;
		publicIpAddress?: string;
		rootDeviceName?: string;
		securityGroups?: Array<SecurityGroupIdentifier>;

		/** The description of the current state of an instance. */
		state?: InstanceState;
		updatedAt?: Date;
	}

	/** The description of an instance. Currently, Amazon EC2 instances are the only supported instance type. */
	export interface InstanceFormProperties {
		amiLaunchIndex: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		imageId: FormControl<string | null | undefined>,
		instanceId: FormControl<string | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
		privateIpAddress: FormControl<string | null | undefined>,
		publicIpAddress: FormControl<string | null | undefined>,
		rootDeviceName: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			amiLaunchIndex: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
			publicIpAddress: new FormControl<string | null | undefined>(undefined),
			rootDeviceName: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The description of a block device mapping. */
	export interface InstanceBlockDeviceMapping {
		deviceName?: string;
		ebs?: EbsInstanceBlockDevice;
	}

	/** The description of a block device mapping. */
	export interface InstanceBlockDeviceMappingFormProperties {
		deviceName: FormControl<string | null | undefined>,
	}
	export function CreateInstanceBlockDeviceMappingFormGroup() {
		return new FormGroup<InstanceBlockDeviceMappingFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume in a block device mapping. */
	export interface EbsInstanceBlockDevice {
		attachTime?: Date;
		deleteOnTermination?: boolean | null;
		status?: AttachmentStatus;
		volumeId?: string;
	}

	/** Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume in a block device mapping. */
	export interface EbsInstanceBlockDeviceFormProperties {
		attachTime: FormControl<Date | null | undefined>,
		deleteOnTermination: FormControl<boolean | null | undefined>,
		status: FormControl<AttachmentStatus | null | undefined>,
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateEbsInstanceBlockDeviceFormGroup() {
		return new FormGroup<EbsInstanceBlockDeviceFormProperties>({
			attachTime: new FormControl<Date | null | undefined>(undefined),
			deleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<AttachmentStatus | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttachmentStatus { ATTACHING = 0, ATTACHED = 1, DETACHING = 2, DETACHED = 3 }


	/** The options for how a device's CPU is configured. */
	export interface CpuOptions {
		coreCount?: number | null;
		threadsPerCore?: number | null;
	}

	/** The options for how a device's CPU is configured. */
	export interface CpuOptionsFormProperties {
		coreCount: FormControl<number | null | undefined>,
		threadsPerCore: FormControl<number | null | undefined>,
	}
	export function CreateCpuOptionsFormGroup() {
		return new FormGroup<CpuOptionsFormProperties>({
			coreCount: new FormControl<number | null | undefined>(undefined),
			threadsPerCore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the device's security group. */
	export interface SecurityGroupIdentifier {
		groupId?: string;
		groupName?: string;
	}

	/** Information about the device's security group. */
	export interface SecurityGroupIdentifierFormProperties {
		groupId: FormControl<string | null | undefined>,
		groupName: FormControl<string | null | undefined>,
	}
	export function CreateSecurityGroupIdentifierFormGroup() {
		return new FormGroup<SecurityGroupIdentifierFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the current state of an instance. */
	export interface InstanceState {
		code?: number | null;
		name?: InstanceStateName;
	}

	/** The description of the current state of an instance. */
	export interface InstanceStateFormProperties {
		code: FormControl<number | null | undefined>,
		name: FormControl<InstanceStateName | null | undefined>,
	}
	export function CreateInstanceStateFormGroup() {
		return new FormGroup<InstanceStateFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<InstanceStateName | null | undefined>(undefined),
		});

	}

	export enum InstanceStateName { PENDING = 0, RUNNING = 1, SHUTTING_DOWN = 2, TERMINATED = 3, STOPPING = 4, STOPPED = 5 }

	export interface DescribeExecutionOutput {
		executionId?: string;
		lastUpdatedAt?: Date;
		managedDeviceId?: string;
		startedAt?: Date;
		state?: ExecutionState;
		taskId?: string;
	}
	export interface DescribeExecutionOutputFormProperties {
		executionId: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		managedDeviceId: FormControl<string | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		state: FormControl<ExecutionState | null | undefined>,
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExecutionOutputFormGroup() {
		return new FormGroup<DescribeExecutionOutputFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			managedDeviceId: new FormControl<string | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<ExecutionState | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecutionState { QUEUED = 0, IN_PROGRESS = 1, CANCELED = 2, FAILED = 3, SUCCEEDED = 4, REJECTED = 5, TIMED_OUT = 6 }

	export interface DescribeTaskOutput {
		completedAt?: Date;
		createdAt?: Date;
		description?: string;
		lastUpdatedAt?: Date;
		state?: TaskState;
		tags?: TagMap;
		targets?: Array<string>;
		taskArn?: string;
		taskId?: string;
	}
	export interface DescribeTaskOutputFormProperties {
		completedAt: FormControl<Date | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		state: FormControl<TaskState | null | undefined>,
		taskArn: FormControl<string | null | undefined>,
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTaskOutputFormGroup() {
		return new FormGroup<DescribeTaskOutputFormProperties>({
			completedAt: new FormControl<Date | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<TaskState | null | undefined>(undefined),
			taskArn: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TaskState { IN_PROGRESS = 0, CANCELED = 1, COMPLETED = 2 }

	export interface ListDeviceResourcesOutput {
		nextToken?: string;
		resources?: Array<ResourceSummary>;
	}
	export interface ListDeviceResourcesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceResourcesOutputFormGroup() {
		return new FormGroup<ListDeviceResourcesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of a resource available on the device. */
	export interface ResourceSummary {
		arn?: string;
		id?: string;

		/** Required */
		resourceType: string;
	}

	/** A summary of a resource available on the device. */
	export interface ResourceSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceSummaryFormGroup() {
		return new FormGroup<ResourceSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDevicesOutput {
		devices?: Array<DeviceSummary>;
		nextToken?: string;
	}
	export interface ListDevicesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesOutputFormGroup() {
		return new FormGroup<ListDevicesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifying information about the device. */
	export interface DeviceSummary {
		associatedWithJob?: string;
		managedDeviceArn?: string;
		managedDeviceId?: string;
		tags?: TagMap;
	}

	/** Identifying information about the device. */
	export interface DeviceSummaryFormProperties {
		associatedWithJob: FormControl<string | null | undefined>,
		managedDeviceArn: FormControl<string | null | undefined>,
		managedDeviceId: FormControl<string | null | undefined>,
	}
	export function CreateDeviceSummaryFormGroup() {
		return new FormGroup<DeviceSummaryFormProperties>({
			associatedWithJob: new FormControl<string | null | undefined>(undefined),
			managedDeviceArn: new FormControl<string | null | undefined>(undefined),
			managedDeviceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExecutionsOutput {
		executions?: Array<ExecutionSummary>;
		nextToken?: string;
	}
	export interface ListExecutionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsOutputFormGroup() {
		return new FormGroup<ListExecutionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a task execution on a specified device. */
	export interface ExecutionSummary {
		executionId?: string;
		managedDeviceId?: string;
		state?: ExecutionState;
		taskId?: string;
	}

	/** The summary of a task execution on a specified device. */
	export interface ExecutionSummaryFormProperties {
		executionId: FormControl<string | null | undefined>,
		managedDeviceId: FormControl<string | null | undefined>,
		state: FormControl<ExecutionState | null | undefined>,
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateExecutionSummaryFormGroup() {
		return new FormGroup<ExecutionSummaryFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			managedDeviceId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ExecutionState | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		tags?: TagMap;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}

	export interface ListTasksOutput {
		nextToken?: string;
		tasks?: Array<TaskSummary>;
	}
	export interface ListTasksOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTasksOutputFormGroup() {
		return new FormGroup<ListTasksOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the task assigned to one or many devices. */
	export interface TaskSummary {
		state?: TaskState;
		tags?: TagMap;
		taskArn?: string;

		/** Required */
		taskId: string;
	}

	/** Information about the task assigned to one or many devices. */
	export interface TaskSummaryFormProperties {
		state: FormControl<TaskState | null | undefined>,
		taskArn: FormControl<string | null | undefined>,

		/** Required */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateTaskSummaryFormGroup() {
		return new FormGroup<TaskSummaryFormProperties>({
			state: new FormControl<TaskState | null | undefined>(undefined),
			taskArn: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelTaskInput {
	}
	export interface CancelTaskInputFormProperties {
	}
	export function CreateCancelTaskInputFormGroup() {
		return new FormGroup<CancelTaskInputFormProperties>({
		});

	}


	/** The command given to the device to execute. */
	export interface Command {
		reboot?: Reboot;
		unlock?: Unlock;
	}

	/** The command given to the device to execute. */
	export interface CommandFormProperties {
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
		});

	}

	export interface CreateTaskInput {
		clientToken?: string;

		/** Required */
		command: Command;
		description?: string;
		tags?: TagMap;

		/** Required */
		targets: Array<string>;
	}
	export interface CreateTaskInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskInputFormGroup() {
		return new FormGroup<CreateTaskInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDeviceEc2Input {

		/** Required */
		instanceIds: Array<string>;
	}
	export interface DescribeDeviceEc2InputFormProperties {
	}
	export function CreateDescribeDeviceEc2InputFormGroup() {
		return new FormGroup<DescribeDeviceEc2InputFormProperties>({
		});

	}

	export interface DescribeDeviceInput {
	}
	export interface DescribeDeviceInputFormProperties {
	}
	export function CreateDescribeDeviceInputFormGroup() {
		return new FormGroup<DescribeDeviceInputFormProperties>({
		});

	}

	export interface DescribeExecutionInput {
	}
	export interface DescribeExecutionInputFormProperties {
	}
	export function CreateDescribeExecutionInputFormGroup() {
		return new FormGroup<DescribeExecutionInputFormProperties>({
		});

	}

	export interface DescribeTaskInput {
	}
	export interface DescribeTaskInputFormProperties {
	}
	export function CreateDescribeTaskInputFormGroup() {
		return new FormGroup<DescribeTaskInputFormProperties>({
		});

	}

	export interface ListDeviceResourcesInput {
	}
	export interface ListDeviceResourcesInputFormProperties {
	}
	export function CreateListDeviceResourcesInputFormGroup() {
		return new FormGroup<ListDeviceResourcesInputFormProperties>({
		});

	}

	export interface ListDevicesInput {
	}
	export interface ListDevicesInputFormProperties {
	}
	export function CreateListDevicesInputFormGroup() {
		return new FormGroup<ListDevicesInputFormProperties>({
		});

	}

	export interface ListExecutionsInput {
	}
	export interface ListExecutionsInputFormProperties {
	}
	export function CreateListExecutionsInputFormGroup() {
		return new FormGroup<ListExecutionsInputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export interface ListTasksInput {
	}
	export interface ListTasksInputFormProperties {
	}
	export function CreateListTasksInputFormGroup() {
		return new FormGroup<ListTasksInputFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>
		 * Post task/{taskId}/cancel
		 * @param {string} taskId The ID of the task that you are attempting to cancel. You can retrieve a task ID by using the <code>ListTasks</code> operation.
		 * @return {CancelTaskOutput} Success
		 */
		CancelTask(taskId: string): Observable<CancelTaskOutput> {
			return this.http.post<CancelTaskOutput>(this.baseUri + 'task/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * Instructs one or more devices to start a task, such as unlocking or rebooting.
		 * Post task
		 * @return {CreateTaskOutput} Success
		 */
		CreateTask(requestBody: CreateTaskPostBody): Observable<CreateTaskOutput> {
			return this.http.post<CreateTaskOutput>(this.baseUri + 'task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks device-specific information, such as the device type, software version, IP addresses, and lock status.
		 * Post managed-device/{managedDeviceId}/describe
		 * @param {string} managedDeviceId The ID of the device that you are checking the information of.
		 * @return {DescribeDeviceOutput} Success
		 */
		DescribeDevice(managedDeviceId: string): Observable<DescribeDeviceOutput> {
			return this.http.post<DescribeDeviceOutput>(this.baseUri + 'managed-device/' + (managedDeviceId == null ? '' : encodeURIComponent(managedDeviceId)) + '/describe', null, {});
		}

		/**
		 * Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields.
		 * Post managed-device/{managedDeviceId}/resources/ec2/describe
		 * @param {string} managedDeviceId The ID of the managed device.
		 * @return {DescribeDeviceEc2Output} Success
		 */
		DescribeDeviceEc2Instances(managedDeviceId: string, requestBody: DescribeDeviceEc2InstancesPostBody): Observable<DescribeDeviceEc2Output> {
			return this.http.post<DescribeDeviceEc2Output>(this.baseUri + 'managed-device/' + (managedDeviceId == null ? '' : encodeURIComponent(managedDeviceId)) + '/resources/ec2/describe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks the status of a remote task running on one or more target devices.
		 * Post task/{taskId}/execution/{managedDeviceId}
		 * @param {string} managedDeviceId The ID of the managed device.
		 * @param {string} taskId The ID of the task that the action is describing.
		 * @return {DescribeExecutionOutput} Success
		 */
		DescribeExecution(managedDeviceId: string, taskId: string): Observable<DescribeExecutionOutput> {
			return this.http.post<DescribeExecutionOutput>(this.baseUri + 'task/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/execution/' + (managedDeviceId == null ? '' : encodeURIComponent(managedDeviceId)), null, {});
		}

		/**
		 * Checks the metadata for a given task on a device.
		 * Post task/{taskId}
		 * @param {string} taskId The ID of the task to be described.
		 * @return {DescribeTaskOutput} Success
		 */
		DescribeTask(taskId: string): Observable<DescribeTaskOutput> {
			return this.http.post<DescribeTaskOutput>(this.baseUri + 'task/' + (taskId == null ? '' : encodeURIComponent(taskId)), null, {});
		}

		/**
		 * Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.
		 * Get managed-device/{managedDeviceId}/resources
		 * @param {string} managedDeviceId The ID of the managed device that you are listing the resources of.
		 * @param {number} maxResults The maximum number of resources per page.
		 * @param {string} nextToken A pagination token to continue to the next page of results.
		 * @param {string} type A structure used to filter the results by type of resource.
		 * @return {ListDeviceResourcesOutput} Success
		 */
		ListDeviceResources(managedDeviceId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, type: string | null | undefined): Observable<ListDeviceResourcesOutput> {
			return this.http.get<ListDeviceResourcesOutput>(this.baseUri + 'managed-device/' + (managedDeviceId == null ? '' : encodeURIComponent(managedDeviceId)) + '/resources&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&type=' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.
		 * Get managed-devices
		 * @param {string} jobId The ID of the job used to order the device.
		 * @param {number} maxResults The maximum number of devices to list per page.
		 * @param {string} nextToken A pagination token to continue to the next page of results.
		 * @return {ListDevicesOutput} Success
		 */
		ListDevices(jobId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListDevicesOutput> {
			return this.http.get<ListDevicesOutput>(this.baseUri + 'managed-devices?jobId=' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Returns the status of tasks for one or more target devices.
		 * Get executions#taskId
		 * @param {number} maxResults The maximum number of tasks to list per page.
		 * @param {string} nextToken A pagination token to continue to the next page of tasks.
		 * @param {ExecutionState} state A structure used to filter the tasks by their current state.
		 * @param {string} taskId The ID of the task.
		 * @return {ListExecutionsOutput} Success
		 */
		ListExecutions(maxResults: number | null | undefined, nextToken: string | null | undefined, state: ExecutionState | null | undefined, taskId: string): Observable<ListExecutionsOutput> {
			return this.http.get<ListExecutionsOutput>(this.baseUri + 'executions#taskId?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&state=' + state + '&taskId=' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * Returns a list of tags for a managed device or task.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the device or task.
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds or replaces tags on a device or task.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the device or task.
		 * @return {void} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of tasks that can be filtered by state.
		 * Get tasks
		 * @param {number} maxResults The maximum number of tasks per page.
		 * @param {string} nextToken A pagination token to continue to the next page of tasks.
		 * @param {TaskState} state A structure used to filter the list of tasks.
		 * @return {ListTasksOutput} Success
		 */
		ListTasks(maxResults: number | null | undefined, nextToken: string | null | undefined, state: TaskState | null | undefined): Observable<ListTasksOutput> {
			return this.http.get<ListTasksOutput>(this.baseUri + 'tasks?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&state=' + state, {});
		}

		/**
		 * Removes a tag from a device or task.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the device or task.
		 * @param {Array<string>} tagKeys Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
		 * @return {void} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateTaskPostBody {

		/**
		 * A token ensuring that the action is called only once with the specified details.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The command given to the device to execute.
		 * Required
		 */
		command: CreateTaskPostBodyCommand;

		/**
		 * A description of the task and its targets.
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;

		/** Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment. */
		tags?: {[id: string]: string };

		/**
		 * A list of managed device IDs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		targets: Array<string>;
	}
	export interface CreateTaskPostBodyFormProperties {

		/**
		 * A token ensuring that the action is called only once with the specified details.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * A description of the task and its targets.
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateTaskPostBodyFormGroup() {
		return new FormGroup<CreateTaskPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[A-Za-z0-9 _.,!#]*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateTaskPostBodyCommand {
		reboot?: Reboot;
		unlock?: Unlock;
	}
	export interface CreateTaskPostBodyCommandFormProperties {
	}
	export function CreateCreateTaskPostBodyCommandFormGroup() {
		return new FormGroup<CreateTaskPostBodyCommandFormProperties>({
		});

	}

	export interface DescribeDeviceEc2InstancesPostBody {

		/**
		 * A list of instance IDs associated with the managed device.
		 * Required
		 */
		instanceIds: Array<string>;
	}
	export interface DescribeDeviceEc2InstancesPostBodyFormProperties {
	}
	export function CreateDescribeDeviceEc2InstancesPostBodyFormGroup() {
		return new FormGroup<DescribeDeviceEc2InstancesPostBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

