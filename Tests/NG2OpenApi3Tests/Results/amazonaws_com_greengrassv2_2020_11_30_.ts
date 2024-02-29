import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateServiceRoleToAccountResponse {
		associatedAt?: string;
	}
	export interface AssociateServiceRoleToAccountResponseFormProperties {
		associatedAt: FormControl<string | null | undefined>,
	}
	export function CreateAssociateServiceRoleToAccountResponseFormGroup() {
		return new FormGroup<AssociateServiceRoleToAccountResponseFormProperties>({
			associatedAt: new FormControl<string | null | undefined>(undefined),
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

	export interface BatchAssociateClientDeviceWithCoreDeviceResponse {
		errorEntries?: Array<AssociateClientDeviceWithCoreDeviceErrorEntry>;
	}
	export interface BatchAssociateClientDeviceWithCoreDeviceResponseFormProperties {
	}
	export function CreateBatchAssociateClientDeviceWithCoreDeviceResponseFormGroup() {
		return new FormGroup<BatchAssociateClientDeviceWithCoreDeviceResponseFormProperties>({
		});

	}


	/** Contains an error that occurs from a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these errors. */
	export interface AssociateClientDeviceWithCoreDeviceErrorEntry {
		thingName?: string;
		code?: string;
		message?: string;
	}

	/** Contains an error that occurs from a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these errors. */
	export interface AssociateClientDeviceWithCoreDeviceErrorEntryFormProperties {
		thingName: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAssociateClientDeviceWithCoreDeviceErrorEntryFormGroup() {
		return new FormGroup<AssociateClientDeviceWithCoreDeviceErrorEntryFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests. */
	export interface AssociateClientDeviceWithCoreDeviceEntry {

		/** Required */
		thingName: string;
	}

	/** Contains a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests. */
	export interface AssociateClientDeviceWithCoreDeviceEntryFormProperties {

		/** Required */
		thingName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateClientDeviceWithCoreDeviceEntryFormGroup() {
		return new FormGroup<AssociateClientDeviceWithCoreDeviceEntryFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface BatchDisassociateClientDeviceFromCoreDeviceResponse {
		errorEntries?: Array<DisassociateClientDeviceFromCoreDeviceErrorEntry>;
	}
	export interface BatchDisassociateClientDeviceFromCoreDeviceResponseFormProperties {
	}
	export function CreateBatchDisassociateClientDeviceFromCoreDeviceResponseFormGroup() {
		return new FormGroup<BatchDisassociateClientDeviceFromCoreDeviceResponseFormProperties>({
		});

	}


	/** Contains an error that occurs from a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation returns a list of these errors. */
	export interface DisassociateClientDeviceFromCoreDeviceErrorEntry {
		thingName?: string;
		code?: string;
		message?: string;
	}

	/** Contains an error that occurs from a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation returns a list of these errors. */
	export interface DisassociateClientDeviceFromCoreDeviceErrorEntryFormProperties {
		thingName: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateClientDeviceFromCoreDeviceErrorEntryFormGroup() {
		return new FormGroup<DisassociateClientDeviceFromCoreDeviceErrorEntryFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests. */
	export interface DisassociateClientDeviceFromCoreDeviceEntry {

		/** Required */
		thingName: string;
	}

	/** Contains a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests. */
	export interface DisassociateClientDeviceFromCoreDeviceEntryFormProperties {

		/** Required */
		thingName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateClientDeviceFromCoreDeviceEntryFormGroup() {
		return new FormGroup<DisassociateClientDeviceFromCoreDeviceEntryFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelDeploymentResponse {
		message?: string;
	}
	export interface CancelDeploymentResponseFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateCancelDeploymentResponseFormGroup() {
		return new FormGroup<CancelDeploymentResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateComponentVersionResponse {
		arn?: string;

		/** Required */
		componentName: string;

		/** Required */
		componentVersion: string;

		/** Required */
		creationTimestamp: Date;

		/** Required */
		status: CloudComponentStatus;
	}
	export interface CreateComponentVersionResponseFormProperties {
		arn: FormControl<string | null | undefined>,

		/** Required */
		componentName: FormControl<string | null | undefined>,

		/** Required */
		componentVersion: FormControl<string | null | undefined>,

		/** Required */
		creationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateComponentVersionResponseFormGroup() {
		return new FormGroup<CreateComponentVersionResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			componentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the status of a component version in the IoT Greengrass service. */
	export interface CloudComponentStatus {
		componentState?: CloudComponentState;
		message?: string;
		errors?: StringMap;
		vendorGuidance?: VendorGuidance;
		vendorGuidanceMessage?: string;
	}

	/** Contains the status of a component version in the IoT Greengrass service. */
	export interface CloudComponentStatusFormProperties {
		componentState: FormControl<CloudComponentState | null | undefined>,
		message: FormControl<string | null | undefined>,
		vendorGuidance: FormControl<VendorGuidance | null | undefined>,
		vendorGuidanceMessage: FormControl<string | null | undefined>,
	}
	export function CreateCloudComponentStatusFormGroup() {
		return new FormGroup<CloudComponentStatusFormProperties>({
			componentState: new FormControl<CloudComponentState | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			vendorGuidance: new FormControl<VendorGuidance | null | undefined>(undefined),
			vendorGuidanceMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudComponentState { REQUESTED = 'REQUESTED', INITIATED = 'INITIATED', DEPLOYABLE = 'DEPLOYABLE', FAILED = 'FAILED', DEPRECATED = 'DEPRECATED' }

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}

	export enum VendorGuidance { ACTIVE = 'ACTIVE', DISCONTINUED = 'DISCONTINUED', DELETED = 'DELETED' }


	/** Contains information about a platform that a component supports. */
	export interface ComponentPlatform {
		name?: string;
		attributes?: PlatformAttributesMap;
	}

	/** Contains information about a platform that a component supports. */
	export interface ComponentPlatformFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateComponentPlatformFormGroup() {
		return new FormGroup<ComponentPlatformFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlatformAttributesMap {
	}
	export interface PlatformAttributesMapFormProperties {
	}
	export function CreatePlatformAttributesMapFormGroup() {
		return new FormGroup<PlatformAttributesMapFormProperties>({
		});

	}

	export interface ComponentDependencyMap {
	}
	export interface ComponentDependencyMapFormProperties {
	}
	export function CreateComponentDependencyMapFormGroup() {
		return new FormGroup<ComponentDependencyMapFormProperties>({
		});

	}


	/** Contains parameters for a Lambda function that runs on IoT Greengrass. */
	export interface LambdaExecutionParameters {
		eventSources?: Array<LambdaEventSource>;
		maxQueueSize?: number | null;
		maxInstancesCount?: number | null;
		maxIdleTimeInSeconds?: number | null;
		timeoutInSeconds?: number | null;
		statusTimeoutInSeconds?: number | null;
		pinned?: boolean | null;
		inputPayloadEncodingType?: LambdaInputPayloadEncodingType;
		execArgs?: Array<string>;
		environmentVariables?: LambdaEnvironmentVariables;
		linuxProcessParams?: LambdaLinuxProcessParams;
	}

	/** Contains parameters for a Lambda function that runs on IoT Greengrass. */
	export interface LambdaExecutionParametersFormProperties {
		maxQueueSize: FormControl<number | null | undefined>,
		maxInstancesCount: FormControl<number | null | undefined>,
		maxIdleTimeInSeconds: FormControl<number | null | undefined>,
		timeoutInSeconds: FormControl<number | null | undefined>,
		statusTimeoutInSeconds: FormControl<number | null | undefined>,
		pinned: FormControl<boolean | null | undefined>,
		inputPayloadEncodingType: FormControl<LambdaInputPayloadEncodingType | null | undefined>,
	}
	export function CreateLambdaExecutionParametersFormGroup() {
		return new FormGroup<LambdaExecutionParametersFormProperties>({
			maxQueueSize: new FormControl<number | null | undefined>(undefined),
			maxInstancesCount: new FormControl<number | null | undefined>(undefined),
			maxIdleTimeInSeconds: new FormControl<number | null | undefined>(undefined),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			statusTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			pinned: new FormControl<boolean | null | undefined>(undefined),
			inputPayloadEncodingType: new FormControl<LambdaInputPayloadEncodingType | null | undefined>(undefined),
		});

	}


	/** Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function. */
	export interface LambdaEventSource {

		/** Required */
		topic: string;

		/** Required */
		type: LambdaEventSourceType;
	}

	/** Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function. */
	export interface LambdaEventSourceFormProperties {

		/** Required */
		topic: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<LambdaEventSourceType | null | undefined>,
	}
	export function CreateLambdaEventSourceFormGroup() {
		return new FormGroup<LambdaEventSourceFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<LambdaEventSourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LambdaEventSourceType { PUB_SUB = 'PUB_SUB', IOT_CORE = 'IOT_CORE' }

	export enum LambdaInputPayloadEncodingType { json = 'json', binary = 'binary' }

	export interface LambdaEnvironmentVariables {
	}
	export interface LambdaEnvironmentVariablesFormProperties {
	}
	export function CreateLambdaEnvironmentVariablesFormGroup() {
		return new FormGroup<LambdaEnvironmentVariablesFormProperties>({
		});

	}


	/** Contains parameters for a Linux process that contains an Lambda function. */
	export interface LambdaLinuxProcessParams {
		isolationMode?: LambdaIsolationMode;
		containerParams?: LambdaContainerParams;
	}

	/** Contains parameters for a Linux process that contains an Lambda function. */
	export interface LambdaLinuxProcessParamsFormProperties {
		isolationMode: FormControl<LambdaIsolationMode | null | undefined>,
	}
	export function CreateLambdaLinuxProcessParamsFormGroup() {
		return new FormGroup<LambdaLinuxProcessParamsFormProperties>({
			isolationMode: new FormControl<LambdaIsolationMode | null | undefined>(undefined),
		});

	}

	export enum LambdaIsolationMode { GreengrassContainer = 'GreengrassContainer', NoContainer = 'NoContainer' }


	/** Contains information about a container in which Lambda functions run on Greengrass core devices. */
	export interface LambdaContainerParams {
		memorySizeInKB?: number | null;
		mountROSysfs?: boolean | null;
		volumes?: Array<LambdaVolumeMount>;
		devices?: Array<LambdaDeviceMount>;
	}

	/** Contains information about a container in which Lambda functions run on Greengrass core devices. */
	export interface LambdaContainerParamsFormProperties {
		memorySizeInKB: FormControl<number | null | undefined>,
		mountROSysfs: FormControl<boolean | null | undefined>,
	}
	export function CreateLambdaContainerParamsFormGroup() {
		return new FormGroup<LambdaContainerParamsFormProperties>({
			memorySizeInKB: new FormControl<number | null | undefined>(undefined),
			mountROSysfs: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container. */
	export interface LambdaVolumeMount {

		/** Required */
		sourcePath: string;

		/** Required */
		destinationPath: string;
		permission?: LambdaFilesystemPermission;
		addGroupOwner?: boolean | null;
	}

	/** Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container. */
	export interface LambdaVolumeMountFormProperties {

		/** Required */
		sourcePath: FormControl<string | null | undefined>,

		/** Required */
		destinationPath: FormControl<string | null | undefined>,
		permission: FormControl<LambdaFilesystemPermission | null | undefined>,
		addGroupOwner: FormControl<boolean | null | undefined>,
	}
	export function CreateLambdaVolumeMountFormGroup() {
		return new FormGroup<LambdaVolumeMountFormProperties>({
			sourcePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permission: new FormControl<LambdaFilesystemPermission | null | undefined>(undefined),
			addGroupOwner: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LambdaFilesystemPermission { ro = 'ro', rw = 'rw' }


	/** Contains information about a device that Linux processes in a container can access. */
	export interface LambdaDeviceMount {

		/** Required */
		path: string;
		permission?: LambdaFilesystemPermission;
		addGroupOwner?: boolean | null;
	}

	/** Contains information about a device that Linux processes in a container can access. */
	export interface LambdaDeviceMountFormProperties {

		/** Required */
		path: FormControl<string | null | undefined>,
		permission: FormControl<LambdaFilesystemPermission | null | undefined>,
		addGroupOwner: FormControl<boolean | null | undefined>,
	}
	export function CreateLambdaDeviceMountFormGroup() {
		return new FormGroup<LambdaDeviceMountFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permission: new FormControl<LambdaFilesystemPermission | null | undefined>(undefined),
			addGroupOwner: new FormControl<boolean | null | undefined>(undefined),
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

	export interface RequestAlreadyInProgressException {
	}
	export interface RequestAlreadyInProgressExceptionFormProperties {
	}
	export function CreateRequestAlreadyInProgressExceptionFormGroup() {
		return new FormGroup<RequestAlreadyInProgressExceptionFormProperties>({
		});

	}

	export interface CreateDeploymentResponse {
		deploymentId?: string;
		iotJobId?: string;
		iotJobArn?: string;
	}
	export interface CreateDeploymentResponseFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		iotJobId: FormControl<string | null | undefined>,
		iotJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentResponseFormGroup() {
		return new FormGroup<CreateDeploymentResponseFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			iotJobId: new FormControl<string | null | undefined>(undefined),
			iotJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a component to deploy. */
	export interface ComponentDeploymentSpecification {
		componentVersion?: string;
		configurationUpdate?: ComponentConfigurationUpdate;
		runWith?: ComponentRunWith;
	}

	/** Contains information about a component to deploy. */
	export interface ComponentDeploymentSpecificationFormProperties {
		componentVersion: FormControl<string | null | undefined>,
	}
	export function CreateComponentDeploymentSpecificationFormGroup() {
		return new FormGroup<ComponentDeploymentSpecificationFormProperties>({
			componentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a deployment's update to a component's configuration on Greengrass core devices. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>. */
	export interface ComponentConfigurationUpdate {
		merge?: string;
		reset?: Array<string>;
	}

	/** Contains information about a deployment's update to a component's configuration on Greengrass core devices. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>. */
	export interface ComponentConfigurationUpdateFormProperties {
		merge: FormControl<string | null | undefined>,
	}
	export function CreateComponentConfigurationUpdateFormGroup() {
		return new FormGroup<ComponentConfigurationUpdateFormProperties>({
			merge: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information system user and group that the IoT Greengrass Core software uses to run component processes on the core device. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a> in the <i>IoT Greengrass V2 Developer Guide</i>. */
	export interface ComponentRunWith {
		posixUser?: string;
		systemResourceLimits?: SystemResourceLimits;
		windowsUser?: string;
	}

	/** Contains information system user and group that the IoT Greengrass Core software uses to run component processes on the core device. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a> in the <i>IoT Greengrass V2 Developer Guide</i>. */
	export interface ComponentRunWithFormProperties {
		posixUser: FormControl<string | null | undefined>,
		windowsUser: FormControl<string | null | undefined>,
	}
	export function CreateComponentRunWithFormGroup() {
		return new FormGroup<ComponentRunWithFormProperties>({
			posixUser: new FormControl<string | null | undefined>(undefined),
			windowsUser: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about system resource limits that the IoT Greengrass Core software applies to a component's processes. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits">Configure system resource limits for components</a>. */
	export interface SystemResourceLimits {
		memory?: number | null;
		cpus?: number | null;
	}

	/** Contains information about system resource limits that the IoT Greengrass Core software applies to a component's processes. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits">Configure system resource limits for components</a>. */
	export interface SystemResourceLimitsFormProperties {
		memory: FormControl<number | null | undefined>,
		cpus: FormControl<number | null | undefined>,
	}
	export function CreateSystemResourceLimitsFormGroup() {
		return new FormGroup<SystemResourceLimitsFormProperties>({
			memory: new FormControl<number | null | undefined>(undefined),
			cpus: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices. */
	export interface IoTJobExecutionsRolloutConfig {
		exponentialRate?: IoTJobExponentialRolloutRate;
		maximumPerMinute?: number | null;
	}

	/** Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices. */
	export interface IoTJobExecutionsRolloutConfigFormProperties {
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateIoTJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<IoTJobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about an exponential rollout rate for a configuration deployment job. */
	export interface IoTJobExponentialRolloutRate {

		/** Required */
		baseRatePerMinute: number;

		/** Required */
		incrementFactor: number;

		/** Required */
		rateIncreaseCriteria: IoTJobRateIncreaseCriteria;
	}

	/** Contains information about an exponential rollout rate for a configuration deployment job. */
	export interface IoTJobExponentialRolloutRateFormProperties {

		/** Required */
		baseRatePerMinute: FormControl<number | null | undefined>,

		/** Required */
		incrementFactor: FormControl<number | null | undefined>,
	}
	export function CreateIoTJobExponentialRolloutRateFormGroup() {
		return new FormGroup<IoTJobExponentialRolloutRateFormProperties>({
			baseRatePerMinute: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			incrementFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>. */
	export interface IoTJobRateIncreaseCriteria {
		numberOfNotifiedThings?: number | null;
		numberOfSucceededThings?: number | null;
	}

	/** Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>. */
	export interface IoTJobRateIncreaseCriteriaFormProperties {
		numberOfNotifiedThings: FormControl<number | null | undefined>,
		numberOfSucceededThings: FormControl<number | null | undefined>,
	}
	export function CreateIoTJobRateIncreaseCriteriaFormGroup() {
		return new FormGroup<IoTJobRateIncreaseCriteriaFormProperties>({
			numberOfNotifiedThings: new FormControl<number | null | undefined>(undefined),
			numberOfSucceededThings: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains a list of criteria that define when and how to cancel a configuration deployment. */
	export interface IoTJobAbortConfig {

		/** Required */
		criteriaList: Array<IoTJobAbortCriteria>;
	}

	/** Contains a list of criteria that define when and how to cancel a configuration deployment. */
	export interface IoTJobAbortConfigFormProperties {
	}
	export function CreateIoTJobAbortConfigFormGroup() {
		return new FormGroup<IoTJobAbortConfigFormProperties>({
		});

	}


	/** <p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol> */
	export interface IoTJobAbortCriteria {

		/** Required */
		failureType: IoTJobExecutionFailureType;

		/** Required */
		action: IoTJobAbortAction;

		/** Required */
		thresholdPercentage: number;

		/** Required */
		minNumberOfExecutedThings: number;
	}

	/** <p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol> */
	export interface IoTJobAbortCriteriaFormProperties {

		/** Required */
		failureType: FormControl<IoTJobExecutionFailureType | null | undefined>,

		/** Required */
		action: FormControl<IoTJobAbortAction | null | undefined>,

		/** Required */
		thresholdPercentage: FormControl<number | null | undefined>,

		/** Required */
		minNumberOfExecutedThings: FormControl<number | null | undefined>,
	}
	export function CreateIoTJobAbortCriteriaFormGroup() {
		return new FormGroup<IoTJobAbortCriteriaFormProperties>({
			failureType: new FormControl<IoTJobExecutionFailureType | null | undefined>(undefined, [Validators.required]),
			action: new FormControl<IoTJobAbortAction | null | undefined>(undefined, [Validators.required]),
			thresholdPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minNumberOfExecutedThings: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IoTJobExecutionFailureType { FAILED = 'FAILED', REJECTED = 'REJECTED', TIMED_OUT = 'TIMED_OUT', ALL = 'ALL' }

	export enum IoTJobAbortAction { CANCEL = 'CANCEL' }


	/** Contains information about the timeout configuration for a job. */
	export interface IoTJobTimeoutConfig {
		inProgressTimeoutInMinutes?: number | null;
	}

	/** Contains information about the timeout configuration for a job. */
	export interface IoTJobTimeoutConfigFormProperties {
		inProgressTimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateIoTJobTimeoutConfigFormGroup() {
		return new FormGroup<IoTJobTimeoutConfigFormProperties>({
			inProgressTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DeploymentFailureHandlingPolicy { ROLLBACK = 'ROLLBACK', DO_NOTHING = 'DO_NOTHING' }


	/** <p>Contains information about a deployment's policy that defines when components are safe to update.</p> <p>Each component on a device can report whether or not it's ready to update. After a component and its dependencies are ready, they can apply the update in the deployment. You can configure whether or not the deployment notifies components of an update and waits for a response. You specify the amount of time each component has to respond to the update notification.</p> */
	export interface DeploymentComponentUpdatePolicy {
		timeoutInSeconds?: number | null;
		action?: DeploymentComponentUpdatePolicyAction;
	}

	/** <p>Contains information about a deployment's policy that defines when components are safe to update.</p> <p>Each component on a device can report whether or not it's ready to update. After a component and its dependencies are ready, they can apply the update in the deployment. You can configure whether or not the deployment notifies components of an update and waits for a response. You specify the amount of time each component has to respond to the update notification.</p> */
	export interface DeploymentComponentUpdatePolicyFormProperties {
		timeoutInSeconds: FormControl<number | null | undefined>,
		action: FormControl<DeploymentComponentUpdatePolicyAction | null | undefined>,
	}
	export function CreateDeploymentComponentUpdatePolicyFormGroup() {
		return new FormGroup<DeploymentComponentUpdatePolicyFormProperties>({
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			action: new FormControl<DeploymentComponentUpdatePolicyAction | null | undefined>(undefined),
		});

	}

	export enum DeploymentComponentUpdatePolicyAction { NOTIFY_COMPONENTS = 'NOTIFY_COMPONENTS', SKIP_NOTIFY_COMPONENTS = 'SKIP_NOTIFY_COMPONENTS' }


	/** Contains information about how long a component on a core device can validate its configuration updates before it times out. Components can use the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetovalidateconfigurationupdates">SubscribeToValidateConfigurationUpdates</a> IPC operation to receive notifications when a deployment specifies a configuration update. Then, components can respond with the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-sendconfigurationvalidityreport">SendConfigurationValidityReport</a> IPC operation. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>. */
	export interface DeploymentConfigurationValidationPolicy {
		timeoutInSeconds?: number | null;
	}

	/** Contains information about how long a component on a core device can validate its configuration updates before it times out. Components can use the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetovalidateconfigurationupdates">SubscribeToValidateConfigurationUpdates</a> IPC operation to receive notifications when a deployment specifies a configuration update. Then, components can respond with the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-sendconfigurationvalidityreport">SendConfigurationValidityReport</a> IPC operation. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>. */
	export interface DeploymentConfigurationValidationPolicyFormProperties {
		timeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateDeploymentConfigurationValidationPolicyFormGroup() {
		return new FormGroup<DeploymentConfigurationValidationPolicyFormProperties>({
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeComponentResponse {
		arn?: string;
		componentName?: string;
		componentVersion?: string;
		creationTimestamp?: Date;
		publisher?: string;
		description?: string;
		status?: CloudComponentStatus;
		platforms?: Array<ComponentPlatform>;
		tags?: TagMap;
	}
	export interface DescribeComponentResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		componentName: FormControl<string | null | undefined>,
		componentVersion: FormControl<string | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComponentResponseFormGroup() {
		return new FormGroup<DescribeComponentResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined),
			componentVersion: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
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

	export interface DisassociateServiceRoleFromAccountResponse {
		disassociatedAt?: string;
	}
	export interface DisassociateServiceRoleFromAccountResponseFormProperties {
		disassociatedAt: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateServiceRoleFromAccountResponseFormGroup() {
		return new FormGroup<DisassociateServiceRoleFromAccountResponseFormProperties>({
			disassociatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetComponentResponse {

		/** Required */
		recipeOutputFormat: RecipeOutputFormat;

		/** Required */
		recipe: string;
		tags?: TagMap;
	}
	export interface GetComponentResponseFormProperties {

		/** Required */
		recipeOutputFormat: FormControl<RecipeOutputFormat | null | undefined>,

		/** Required */
		recipe: FormControl<string | null | undefined>,
	}
	export function CreateGetComponentResponseFormGroup() {
		return new FormGroup<GetComponentResponseFormProperties>({
			recipeOutputFormat: new FormControl<RecipeOutputFormat | null | undefined>(undefined, [Validators.required]),
			recipe: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecipeOutputFormat { JSON = 'JSON', YAML = 'YAML' }

	export interface GetComponentVersionArtifactResponse {

		/** Required */
		preSignedUrl: string;
	}
	export interface GetComponentVersionArtifactResponseFormProperties {

		/** Required */
		preSignedUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetComponentVersionArtifactResponseFormGroup() {
		return new FormGroup<GetComponentVersionArtifactResponseFormProperties>({
			preSignedUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConnectivityInfoResponse {
		connectivityInfo?: Array<ConnectivityInfo>;
		message?: string;
	}
	export interface GetConnectivityInfoResponseFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectivityInfoResponseFormGroup() {
		return new FormGroup<GetConnectivityInfoResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an endpoint and port where client devices can connect to an MQTT broker on a Greengrass core device. */
	export interface ConnectivityInfo {
		id?: string;
		hostAddress?: string;
		portNumber?: number | null;
		metadata?: string;
	}

	/** Contains information about an endpoint and port where client devices can connect to an MQTT broker on a Greengrass core device. */
	export interface ConnectivityInfoFormProperties {
		id: FormControl<string | null | undefined>,
		hostAddress: FormControl<string | null | undefined>,
		portNumber: FormControl<number | null | undefined>,
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateConnectivityInfoFormGroup() {
		return new FormGroup<ConnectivityInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			hostAddress: new FormControl<string | null | undefined>(undefined),
			portNumber: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCoreDeviceResponse {
		coreDeviceThingName?: string;
		coreVersion?: string;
		platform?: string;
		architecture?: string;
		status?: CoreDeviceStatus;
		lastStatusUpdateTimestamp?: Date;
		tags?: TagMap;
	}
	export interface GetCoreDeviceResponseFormProperties {
		coreDeviceThingName: FormControl<string | null | undefined>,
		coreVersion: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
		architecture: FormControl<string | null | undefined>,
		status: FormControl<CoreDeviceStatus | null | undefined>,
		lastStatusUpdateTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetCoreDeviceResponseFormGroup() {
		return new FormGroup<GetCoreDeviceResponseFormProperties>({
			coreDeviceThingName: new FormControl<string | null | undefined>(undefined),
			coreVersion: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			architecture: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CoreDeviceStatus | null | undefined>(undefined),
			lastStatusUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CoreDeviceStatus { HEALTHY = 'HEALTHY', UNHEALTHY = 'UNHEALTHY' }

	export interface GetDeploymentResponse {
		targetArn?: string;
		revisionId?: string;
		deploymentId?: string;
		deploymentName?: string;
		deploymentStatus?: DeploymentStatus;
		iotJobId?: string;
		iotJobArn?: string;
		components?: ComponentDeploymentSpecifications;
		deploymentPolicies?: DeploymentPolicies;
		iotJobConfiguration?: DeploymentIoTJobConfiguration;
		creationTimestamp?: Date;
		isLatestForTarget?: boolean | null;
		parentTargetArn?: string;
		tags?: TagMap;
	}
	export interface GetDeploymentResponseFormProperties {
		targetArn: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		deploymentId: FormControl<string | null | undefined>,
		deploymentName: FormControl<string | null | undefined>,
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		iotJobId: FormControl<string | null | undefined>,
		iotJobArn: FormControl<string | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
		isLatestForTarget: FormControl<boolean | null | undefined>,
		parentTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentResponseFormGroup() {
		return new FormGroup<GetDeploymentResponseFormProperties>({
			targetArn: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			deploymentId: new FormControl<string | null | undefined>(undefined),
			deploymentName: new FormControl<string | null | undefined>(undefined),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined),
			iotJobId: new FormControl<string | null | undefined>(undefined),
			iotJobArn: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
			isLatestForTarget: new FormControl<boolean | null | undefined>(undefined),
			parentTargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentStatus { ACTIVE = 'ACTIVE', COMPLETED = 'COMPLETED', CANCELED = 'CANCELED', FAILED = 'FAILED', INACTIVE = 'INACTIVE' }

	export interface ComponentDeploymentSpecifications {
	}
	export interface ComponentDeploymentSpecificationsFormProperties {
	}
	export function CreateComponentDeploymentSpecificationsFormGroup() {
		return new FormGroup<ComponentDeploymentSpecificationsFormProperties>({
		});

	}


	/** Contains information about policies that define how a deployment updates components and handles failure. */
	export interface DeploymentPolicies {
		failureHandlingPolicy?: DeploymentFailureHandlingPolicy;
		componentUpdatePolicy?: DeploymentComponentUpdatePolicy;
		configurationValidationPolicy?: DeploymentConfigurationValidationPolicy;
	}

	/** Contains information about policies that define how a deployment updates components and handles failure. */
	export interface DeploymentPoliciesFormProperties {
		failureHandlingPolicy: FormControl<DeploymentFailureHandlingPolicy | null | undefined>,
	}
	export function CreateDeploymentPoliciesFormGroup() {
		return new FormGroup<DeploymentPoliciesFormProperties>({
			failureHandlingPolicy: new FormControl<DeploymentFailureHandlingPolicy | null | undefined>(undefined),
		});

	}


	/** Contains information about an IoT job configuration. */
	export interface DeploymentIoTJobConfiguration {
		jobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig;
		abortConfig?: IoTJobAbortConfig;
		timeoutConfig?: IoTJobTimeoutConfig;
	}

	/** Contains information about an IoT job configuration. */
	export interface DeploymentIoTJobConfigurationFormProperties {
	}
	export function CreateDeploymentIoTJobConfigurationFormGroup() {
		return new FormGroup<DeploymentIoTJobConfigurationFormProperties>({
		});

	}

	export interface GetServiceRoleForAccountResponse {
		associatedAt?: string;
		roleArn?: string;
	}
	export interface GetServiceRoleForAccountResponseFormProperties {
		associatedAt: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceRoleForAccountResponseFormGroup() {
		return new FormGroup<GetServiceRoleForAccountResponseFormProperties>({
			associatedAt: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClientDevicesAssociatedWithCoreDeviceResponse {
		associatedClientDevices?: Array<AssociatedClientDevice>;
		nextToken?: string;
	}
	export interface ListClientDevicesAssociatedWithCoreDeviceResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClientDevicesAssociatedWithCoreDeviceResponseFormGroup() {
		return new FormGroup<ListClientDevicesAssociatedWithCoreDeviceResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a client device that is associated to a core device for cloud discovery. */
	export interface AssociatedClientDevice {
		thingName?: string;
		associationTimestamp?: Date;
	}

	/** Contains information about a client device that is associated to a core device for cloud discovery. */
	export interface AssociatedClientDeviceFormProperties {
		thingName: FormControl<string | null | undefined>,
		associationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAssociatedClientDeviceFormGroup() {
		return new FormGroup<AssociatedClientDeviceFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined),
			associationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListComponentVersionsResponse {
		componentVersions?: Array<ComponentVersionListItem>;
		nextToken?: string;
	}
	export interface ListComponentVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentVersionsResponseFormGroup() {
		return new FormGroup<ListComponentVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a component version in a list. */
	export interface ComponentVersionListItem {
		componentName?: string;
		componentVersion?: string;
		arn?: string;
	}

	/** Contains information about a component version in a list. */
	export interface ComponentVersionListItemFormProperties {
		componentName: FormControl<string | null | undefined>,
		componentVersion: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateComponentVersionListItemFormGroup() {
		return new FormGroup<ComponentVersionListItemFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined),
			componentVersion: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentsResponse {
		components?: Array<Component>;
		nextToken?: string;
	}
	export interface ListComponentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsResponseFormGroup() {
		return new FormGroup<ListComponentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a component. */
	export interface Component {
		arn?: string;
		componentName?: string;
		latestVersion?: ComponentLatestVersion;
	}

	/** Contains information about a component. */
	export interface ComponentFormProperties {
		arn: FormControl<string | null | undefined>,
		componentName: FormControl<string | null | undefined>,
	}
	export function CreateComponentFormGroup() {
		return new FormGroup<ComponentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the latest version of a component. */
	export interface ComponentLatestVersion {
		arn?: string;
		componentVersion?: string;
		creationTimestamp?: Date;
		description?: string;
		publisher?: string;
		platforms?: Array<ComponentPlatform>;
	}

	/** Contains information about the latest version of a component. */
	export interface ComponentLatestVersionFormProperties {
		arn: FormControl<string | null | undefined>,
		componentVersion: FormControl<string | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
	}
	export function CreateComponentLatestVersionFormGroup() {
		return new FormGroup<ComponentLatestVersionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			componentVersion: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCoreDevicesResponse {
		coreDevices?: Array<CoreDevice>;
		nextToken?: string;
	}
	export interface ListCoreDevicesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoreDevicesResponseFormGroup() {
		return new FormGroup<ListCoreDevicesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software. */
	export interface CoreDevice {
		coreDeviceThingName?: string;
		status?: CoreDeviceStatus;
		lastStatusUpdateTimestamp?: Date;
	}

	/** Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software. */
	export interface CoreDeviceFormProperties {
		coreDeviceThingName: FormControl<string | null | undefined>,
		status: FormControl<CoreDeviceStatus | null | undefined>,
		lastStatusUpdateTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCoreDeviceFormGroup() {
		return new FormGroup<CoreDeviceFormProperties>({
			coreDeviceThingName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CoreDeviceStatus | null | undefined>(undefined),
			lastStatusUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDeploymentsResponse {
		deployments?: Array<Deployment>;
		nextToken?: string;
	}
	export interface ListDeploymentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentsResponseFormGroup() {
		return new FormGroup<ListDeploymentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a deployment. */
	export interface Deployment {
		targetArn?: string;
		revisionId?: string;
		deploymentId?: string;
		deploymentName?: string;
		creationTimestamp?: Date;
		deploymentStatus?: DeploymentStatus;
		isLatestForTarget?: boolean | null;
		parentTargetArn?: string;
	}

	/** Contains information about a deployment. */
	export interface DeploymentFormProperties {
		targetArn: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		deploymentId: FormControl<string | null | undefined>,
		deploymentName: FormControl<string | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
		deploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		isLatestForTarget: FormControl<boolean | null | undefined>,
		parentTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			targetArn: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			deploymentId: new FormControl<string | null | undefined>(undefined),
			deploymentName: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
			deploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined),
			isLatestForTarget: new FormControl<boolean | null | undefined>(undefined),
			parentTargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEffectiveDeploymentsResponse {
		effectiveDeployments?: Array<EffectiveDeployment>;
		nextToken?: string;
	}
	export interface ListEffectiveDeploymentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEffectiveDeploymentsResponseFormGroup() {
		return new FormGroup<ListEffectiveDeploymentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a deployment job that IoT Greengrass sends to a Greengrass core device. */
	export interface EffectiveDeployment {

		/** Required */
		deploymentId: string;

		/** Required */
		deploymentName: string;
		iotJobId?: string;
		iotJobArn?: string;
		description?: string;

		/** Required */
		targetArn: string;

		/** Required */
		coreDeviceExecutionStatus: EffectiveDeploymentExecutionStatus;
		reason?: string;

		/** Required */
		creationTimestamp: Date;

		/** Required */
		modifiedTimestamp: Date;
		statusDetails?: EffectiveDeploymentStatusDetails;
	}

	/** Contains information about a deployment job that IoT Greengrass sends to a Greengrass core device. */
	export interface EffectiveDeploymentFormProperties {

		/** Required */
		deploymentId: FormControl<string | null | undefined>,

		/** Required */
		deploymentName: FormControl<string | null | undefined>,
		iotJobId: FormControl<string | null | undefined>,
		iotJobArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		targetArn: FormControl<string | null | undefined>,

		/** Required */
		coreDeviceExecutionStatus: FormControl<EffectiveDeploymentExecutionStatus | null | undefined>,
		reason: FormControl<string | null | undefined>,

		/** Required */
		creationTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		modifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateEffectiveDeploymentFormGroup() {
		return new FormGroup<EffectiveDeploymentFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deploymentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iotJobId: new FormControl<string | null | undefined>(undefined),
			iotJobArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			coreDeviceExecutionStatus: new FormControl<EffectiveDeploymentExecutionStatus | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			modifiedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EffectiveDeploymentExecutionStatus { IN_PROGRESS = 'IN_PROGRESS', QUEUED = 'QUEUED', FAILED = 'FAILED', COMPLETED = 'COMPLETED', TIMED_OUT = 'TIMED_OUT', CANCELED = 'CANCELED', REJECTED = 'REJECTED', SUCCEEDED = 'SUCCEEDED' }


	/** <p>Contains all error-related information for the deployment record. The status details will be null if the deployment is in a success state.</p> <note> <p>Greengrass nucleus v2.8.0 or later is required to get an accurate <code>errorStack</code> and <code>errorTypes</code> response. This field will not be returned for earlier Greengrass nucleus versions.</p> </note> */
	export interface EffectiveDeploymentStatusDetails {
		errorStack?: Array<string>;
		errorTypes?: Array<string>;
	}

	/** <p>Contains all error-related information for the deployment record. The status details will be null if the deployment is in a success state.</p> <note> <p>Greengrass nucleus v2.8.0 or later is required to get an accurate <code>errorStack</code> and <code>errorTypes</code> response. This field will not be returned for earlier Greengrass nucleus versions.</p> </note> */
	export interface EffectiveDeploymentStatusDetailsFormProperties {
	}
	export function CreateEffectiveDeploymentStatusDetailsFormGroup() {
		return new FormGroup<EffectiveDeploymentStatusDetailsFormProperties>({
		});

	}

	export interface ListInstalledComponentsResponse {
		installedComponents?: Array<InstalledComponent>;
		nextToken?: string;
	}
	export interface ListInstalledComponentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstalledComponentsResponseFormGroup() {
		return new FormGroup<ListInstalledComponentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a component on a Greengrass core device. */
	export interface InstalledComponent {
		componentName?: string;
		componentVersion?: string;
		lifecycleState?: InstalledComponentLifecycleState;
		lifecycleStateDetails?: string;
		isRoot?: boolean | null;
		lastStatusChangeTimestamp?: Date;
		lastReportedTimestamp?: Date;
		lastInstallationSource?: string;
		lifecycleStatusCodes?: Array<string>;
	}

	/** Contains information about a component on a Greengrass core device. */
	export interface InstalledComponentFormProperties {
		componentName: FormControl<string | null | undefined>,
		componentVersion: FormControl<string | null | undefined>,
		lifecycleState: FormControl<InstalledComponentLifecycleState | null | undefined>,
		lifecycleStateDetails: FormControl<string | null | undefined>,
		isRoot: FormControl<boolean | null | undefined>,
		lastStatusChangeTimestamp: FormControl<Date | null | undefined>,
		lastReportedTimestamp: FormControl<Date | null | undefined>,
		lastInstallationSource: FormControl<string | null | undefined>,
	}
	export function CreateInstalledComponentFormGroup() {
		return new FormGroup<InstalledComponentFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined),
			componentVersion: new FormControl<string | null | undefined>(undefined),
			lifecycleState: new FormControl<InstalledComponentLifecycleState | null | undefined>(undefined),
			lifecycleStateDetails: new FormControl<string | null | undefined>(undefined),
			isRoot: new FormControl<boolean | null | undefined>(undefined),
			lastStatusChangeTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastReportedTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastInstallationSource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstalledComponentLifecycleState { NEW = 'NEW', INSTALLED = 'INSTALLED', STARTING = 'STARTING', RUNNING = 'RUNNING', STOPPING = 'STOPPING', ERRORED = 'ERRORED', BROKEN = 'BROKEN', FINISHED = 'FINISHED' }

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ResolveComponentCandidatesResponse {
		resolvedComponentVersions?: Array<ResolvedComponentVersion>;
	}
	export interface ResolveComponentCandidatesResponseFormProperties {
	}
	export function CreateResolveComponentCandidatesResponseFormGroup() {
		return new FormGroup<ResolveComponentCandidatesResponseFormProperties>({
		});

	}


	/** Contains information about a component version that is compatible to run on a Greengrass core device. */
	export interface ResolvedComponentVersion {
		arn?: string;
		componentName?: string;
		componentVersion?: string;
		recipe?: string;
		vendorGuidance?: VendorGuidance;
		message?: string;
	}

	/** Contains information about a component version that is compatible to run on a Greengrass core device. */
	export interface ResolvedComponentVersionFormProperties {
		arn: FormControl<string | null | undefined>,
		componentName: FormControl<string | null | undefined>,
		componentVersion: FormControl<string | null | undefined>,
		recipe: FormControl<string | null | undefined>,
		vendorGuidance: FormControl<VendorGuidance | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateResolvedComponentVersionFormGroup() {
		return new FormGroup<ResolvedComponentVersionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined),
			componentVersion: new FormControl<string | null | undefined>(undefined),
			recipe: new FormControl<string | null | undefined>(undefined),
			vendorGuidance: new FormControl<VendorGuidance | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a component that is a candidate to deploy to a Greengrass core device. */
	export interface ComponentCandidate {
		componentName?: string;
		componentVersion?: string;
		versionRequirements?: ComponentVersionRequirementMap;
	}

	/** Contains information about a component that is a candidate to deploy to a Greengrass core device. */
	export interface ComponentCandidateFormProperties {
		componentName: FormControl<string | null | undefined>,
		componentVersion: FormControl<string | null | undefined>,
	}
	export function CreateComponentCandidateFormGroup() {
		return new FormGroup<ComponentCandidateFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined),
			componentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComponentVersionRequirementMap {
	}
	export interface ComponentVersionRequirementMapFormProperties {
	}
	export function CreateComponentVersionRequirementMapFormGroup() {
		return new FormGroup<ComponentVersionRequirementMapFormProperties>({
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

	export interface UpdateConnectivityInfoResponse {
		version?: string;
		message?: string;
	}
	export interface UpdateConnectivityInfoResponseFormProperties {
		version: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectivityInfoResponseFormGroup() {
		return new FormGroup<UpdateConnectivityInfoResponseFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateServiceRoleToAccountRequest {

		/** Required */
		roleArn: string;
	}
	export interface AssociateServiceRoleToAccountRequestFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateServiceRoleToAccountRequestFormGroup() {
		return new FormGroup<AssociateServiceRoleToAccountRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchAssociateClientDeviceWithCoreDeviceRequest {
		entries?: Array<AssociateClientDeviceWithCoreDeviceEntry>;
	}
	export interface BatchAssociateClientDeviceWithCoreDeviceRequestFormProperties {
	}
	export function CreateBatchAssociateClientDeviceWithCoreDeviceRequestFormGroup() {
		return new FormGroup<BatchAssociateClientDeviceWithCoreDeviceRequestFormProperties>({
		});

	}

	export interface BatchDisassociateClientDeviceFromCoreDeviceRequest {
		entries?: Array<DisassociateClientDeviceFromCoreDeviceEntry>;
	}
	export interface BatchDisassociateClientDeviceFromCoreDeviceRequestFormProperties {
	}
	export function CreateBatchDisassociateClientDeviceFromCoreDeviceRequestFormGroup() {
		return new FormGroup<BatchDisassociateClientDeviceFromCoreDeviceRequestFormProperties>({
		});

	}

	export interface CancelDeploymentRequest {
	}
	export interface CancelDeploymentRequestFormProperties {
	}
	export function CreateCancelDeploymentRequestFormGroup() {
		return new FormGroup<CancelDeploymentRequestFormProperties>({
		});

	}


	/** Contains information about a component dependency for a Lambda function component. */
	export interface ComponentDependencyRequirement {
		versionRequirement?: string;
		dependencyType?: ComponentDependencyType;
	}

	/** Contains information about a component dependency for a Lambda function component. */
	export interface ComponentDependencyRequirementFormProperties {
		versionRequirement: FormControl<string | null | undefined>,
		dependencyType: FormControl<ComponentDependencyType | null | undefined>,
	}
	export function CreateComponentDependencyRequirementFormGroup() {
		return new FormGroup<ComponentDependencyRequirementFormProperties>({
			versionRequirement: new FormControl<string | null | undefined>(undefined),
			dependencyType: new FormControl<ComponentDependencyType | null | undefined>(undefined),
		});

	}

	export enum ComponentDependencyType { HARD = 'HARD', SOFT = 'SOFT' }

	export enum ComponentVisibilityScope { PRIVATE = 'PRIVATE', PUBLIC = 'PUBLIC' }


	/** Contains information about an Lambda function to import to create a component. */
	export interface LambdaFunctionRecipeSource {

		/** Required */
		lambdaArn: string;
		componentName?: string;
		componentVersion?: string;
		componentPlatforms?: Array<ComponentPlatform>;
		componentDependencies?: ComponentDependencyMap;
		componentLambdaParameters?: LambdaExecutionParameters;
	}

	/** Contains information about an Lambda function to import to create a component. */
	export interface LambdaFunctionRecipeSourceFormProperties {

		/** Required */
		lambdaArn: FormControl<string | null | undefined>,
		componentName: FormControl<string | null | undefined>,
		componentVersion: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionRecipeSourceFormGroup() {
		return new FormGroup<LambdaFunctionRecipeSourceFormProperties>({
			lambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			componentName: new FormControl<string | null | undefined>(undefined),
			componentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateComponentVersionRequest {
		inlineRecipe?: string;
		lambdaFunction?: LambdaFunctionRecipeSource;
		tags?: TagMap;
		clientToken?: string;
	}
	export interface CreateComponentVersionRequestFormProperties {
		inlineRecipe: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentVersionRequestFormGroup() {
		return new FormGroup<CreateComponentVersionRequestFormProperties>({
			inlineRecipe: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentRequest {

		/** Required */
		targetArn: string;
		deploymentName?: string;
		components?: ComponentDeploymentSpecifications;
		iotJobConfiguration?: DeploymentIoTJobConfiguration;
		deploymentPolicies?: DeploymentPolicies;
		parentTargetArn?: string;
		tags?: TagMap;
		clientToken?: string;
	}
	export interface CreateDeploymentRequestFormProperties {

		/** Required */
		targetArn: FormControl<string | null | undefined>,
		deploymentName: FormControl<string | null | undefined>,
		parentTargetArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentRequestFormGroup() {
		return new FormGroup<CreateDeploymentRequestFormProperties>({
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deploymentName: new FormControl<string | null | undefined>(undefined),
			parentTargetArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteComponentRequest {
	}
	export interface DeleteComponentRequestFormProperties {
	}
	export function CreateDeleteComponentRequestFormGroup() {
		return new FormGroup<DeleteComponentRequestFormProperties>({
		});

	}

	export interface DeleteCoreDeviceRequest {
	}
	export interface DeleteCoreDeviceRequestFormProperties {
	}
	export function CreateDeleteCoreDeviceRequestFormGroup() {
		return new FormGroup<DeleteCoreDeviceRequestFormProperties>({
		});

	}

	export interface DeleteDeploymentRequest {
	}
	export interface DeleteDeploymentRequestFormProperties {
	}
	export function CreateDeleteDeploymentRequestFormGroup() {
		return new FormGroup<DeleteDeploymentRequestFormProperties>({
		});

	}

	export enum DeploymentHistoryFilter { ALL = 'ALL', LATEST_ONLY = 'LATEST_ONLY' }

	export interface DescribeComponentRequest {
	}
	export interface DescribeComponentRequestFormProperties {
	}
	export function CreateDescribeComponentRequestFormGroup() {
		return new FormGroup<DescribeComponentRequestFormProperties>({
		});

	}

	export interface DisassociateServiceRoleFromAccountRequest {
	}
	export interface DisassociateServiceRoleFromAccountRequestFormProperties {
	}
	export function CreateDisassociateServiceRoleFromAccountRequestFormGroup() {
		return new FormGroup<DisassociateServiceRoleFromAccountRequestFormProperties>({
		});

	}

	export interface GetComponentRequest {
	}
	export interface GetComponentRequestFormProperties {
	}
	export function CreateGetComponentRequestFormGroup() {
		return new FormGroup<GetComponentRequestFormProperties>({
		});

	}

	export interface GetComponentVersionArtifactRequest {
	}
	export interface GetComponentVersionArtifactRequestFormProperties {
	}
	export function CreateGetComponentVersionArtifactRequestFormGroup() {
		return new FormGroup<GetComponentVersionArtifactRequestFormProperties>({
		});

	}

	export interface GetConnectivityInfoRequest {
	}
	export interface GetConnectivityInfoRequestFormProperties {
	}
	export function CreateGetConnectivityInfoRequestFormGroup() {
		return new FormGroup<GetConnectivityInfoRequestFormProperties>({
		});

	}

	export interface GetCoreDeviceRequest {
	}
	export interface GetCoreDeviceRequestFormProperties {
	}
	export function CreateGetCoreDeviceRequestFormGroup() {
		return new FormGroup<GetCoreDeviceRequestFormProperties>({
		});

	}

	export interface GetDeploymentRequest {
	}
	export interface GetDeploymentRequestFormProperties {
	}
	export function CreateGetDeploymentRequestFormGroup() {
		return new FormGroup<GetDeploymentRequestFormProperties>({
		});

	}

	export interface GetServiceRoleForAccountRequest {
	}
	export interface GetServiceRoleForAccountRequestFormProperties {
	}
	export function CreateGetServiceRoleForAccountRequestFormGroup() {
		return new FormGroup<GetServiceRoleForAccountRequestFormProperties>({
		});

	}

	export enum InstalledComponentTopologyFilter { ALL = 'ALL', ROOT = 'ROOT' }

	export interface ListClientDevicesAssociatedWithCoreDeviceRequest {
	}
	export interface ListClientDevicesAssociatedWithCoreDeviceRequestFormProperties {
	}
	export function CreateListClientDevicesAssociatedWithCoreDeviceRequestFormGroup() {
		return new FormGroup<ListClientDevicesAssociatedWithCoreDeviceRequestFormProperties>({
		});

	}

	export interface ListComponentVersionsRequest {
	}
	export interface ListComponentVersionsRequestFormProperties {
	}
	export function CreateListComponentVersionsRequestFormGroup() {
		return new FormGroup<ListComponentVersionsRequestFormProperties>({
		});

	}

	export interface ListComponentsRequest {
	}
	export interface ListComponentsRequestFormProperties {
	}
	export function CreateListComponentsRequestFormGroup() {
		return new FormGroup<ListComponentsRequestFormProperties>({
		});

	}

	export interface ListCoreDevicesRequest {
	}
	export interface ListCoreDevicesRequestFormProperties {
	}
	export function CreateListCoreDevicesRequestFormGroup() {
		return new FormGroup<ListCoreDevicesRequestFormProperties>({
		});

	}

	export interface ListDeploymentsRequest {
	}
	export interface ListDeploymentsRequestFormProperties {
	}
	export function CreateListDeploymentsRequestFormGroup() {
		return new FormGroup<ListDeploymentsRequestFormProperties>({
		});

	}

	export interface ListEffectiveDeploymentsRequest {
	}
	export interface ListEffectiveDeploymentsRequestFormProperties {
	}
	export function CreateListEffectiveDeploymentsRequestFormGroup() {
		return new FormGroup<ListEffectiveDeploymentsRequestFormProperties>({
		});

	}

	export interface ListInstalledComponentsRequest {
	}
	export interface ListInstalledComponentsRequestFormProperties {
	}
	export function CreateListInstalledComponentsRequestFormGroup() {
		return new FormGroup<ListInstalledComponentsRequestFormProperties>({
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

	export interface ResolveComponentCandidatesRequest {
		platform?: ComponentPlatform;
		componentCandidates?: Array<ComponentCandidate>;
	}
	export interface ResolveComponentCandidatesRequestFormProperties {
	}
	export function CreateResolveComponentCandidatesRequestFormGroup() {
		return new FormGroup<ResolveComponentCandidatesRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
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

	export interface UpdateConnectivityInfoRequest {

		/** Required */
		connectivityInfo: Array<ConnectivityInfo>;
	}
	export interface UpdateConnectivityInfoRequestFormProperties {
	}
	export function CreateUpdateConnectivityInfoRequestFormGroup() {
		return new FormGroup<UpdateConnectivityInfoRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that defines equivalent permissions for the IoT Greengrass features that you use. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
		 * Put greengrass/servicerole
		 * @return {AssociateServiceRoleToAccountResponse} Success
		 */
		AssociateServiceRoleToAccount(requestBody: AssociateServiceRoleToAccountPutBody): Observable<AssociateServiceRoleToAccountResponse> {
			return this.http.put<AssociateServiceRoleToAccountResponse>(this.baseUri + 'greengrass/servicerole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
		 * Delete greengrass/servicerole
		 * @return {DisassociateServiceRoleFromAccountResponse} Success
		 */
		DisassociateServiceRoleFromAccount(): Observable<DisassociateServiceRoleFromAccountResponse> {
			return this.http.delete<DisassociateServiceRoleFromAccountResponse>(this.baseUri + 'greengrass/servicerole', {});
		}

		/**
		 * Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
		 * Get greengrass/servicerole
		 * @return {GetServiceRoleForAccountResponse} Success
		 */
		GetServiceRoleForAccount(): Observable<GetServiceRoleForAccountResponse> {
			return this.http.get<GetServiceRoleForAccountResponse>(this.baseUri + 'greengrass/servicerole', {});
		}

		/**
		 * <p>Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <note> <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </note>
		 * Post greengrass/v2/coreDevices/{coreDeviceThingName}/associateClientDevices
		 * @param {string} coreDeviceThingName The name of the core device. This is also the name of the IoT thing.
		 *     Min length: 1    Max length: 128
		 * @return {BatchAssociateClientDeviceWithCoreDeviceResponse} Success
		 */
		BatchAssociateClientDeviceWithCoreDevice(coreDeviceThingName: string, requestBody: BatchAssociateClientDeviceWithCoreDevicePostBody): Observable<BatchAssociateClientDeviceWithCoreDeviceResponse> {
			return this.http.post<BatchAssociateClientDeviceWithCoreDeviceResponse>(this.baseUri + 'greengrass/v2/coreDevices/' + (coreDeviceThingName == null ? '' : encodeURIComponent(coreDeviceThingName)) + '/associateClientDevices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a list of client devices from a core device. After you disassociate a client device from a core device, the client device won't be able to use cloud discovery to retrieve the core device's connectivity information and certificates.
		 * Post greengrass/v2/coreDevices/{coreDeviceThingName}/disassociateClientDevices
		 * @param {string} coreDeviceThingName The name of the core device. This is also the name of the IoT thing.
		 *     Min length: 1    Max length: 128
		 * @return {BatchDisassociateClientDeviceFromCoreDeviceResponse} Success
		 */
		BatchDisassociateClientDeviceFromCoreDevice(coreDeviceThingName: string, requestBody: BatchDisassociateClientDeviceFromCoreDevicePostBody): Observable<BatchDisassociateClientDeviceFromCoreDeviceResponse> {
			return this.http.post<BatchDisassociateClientDeviceFromCoreDeviceResponse>(this.baseUri + 'greengrass/v2/coreDevices/' + (coreDeviceThingName == null ? '' : encodeURIComponent(coreDeviceThingName)) + '/disassociateClientDevices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.
		 * Post greengrass/v2/deployments/{deploymentId}/cancel
		 * @param {string} deploymentId The ID of the deployment.
		 *     Min length: 1
		 * @return {CancelDeploymentResponse} Success
		 */
		CancelDeployment(deploymentId: string): Observable<CancelDeploymentResponse> {
			return this.http.post<CancelDeploymentResponse>(this.baseUri + 'greengrass/v2/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)) + '/cancel', null, {});
		}

		/**
		 * <p>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p> <b>Create components from recipes</b> </p> <p>Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call this operation.</p> </li> <li> <p> <b>Create components from Lambda functions</b> </p> <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p> <p>This function only accepts Lambda functions that use the following runtimes:</p> <ul> <li> <p>Python 2.7 – <code>python2.7</code> </p> </li> <li> <p>Python 3.7 – <code>python3.7</code> </p> </li> <li> <p>Python 3.8 – <code>python3.8</code> </p> </li> <li> <p>Python 3.9 – <code>python3.9</code> </p> </li> <li> <p>Java 8 – <code>java8</code> </p> </li> <li> <p>Java 11 – <code>java11</code> </p> </li> <li> <p>Node.js 10 – <code>nodejs10.x</code> </p> </li> <li> <p>Node.js 12 – <code>nodejs12.x</code> </p> </li> <li> <p>Node.js 14 – <code>nodejs14.x</code> </p> </li> </ul> <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when you call this operation.</p> <note> <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p> </note> </li> </ul>
		 * Post greengrass/v2/createComponentVersion
		 * @return {void} 
		 */
		CreateComponentVersion(requestBody: CreateComponentVersionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'greengrass/v2/createComponentVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device.</p> <p>You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices.</p> <p>Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
		 * Post greengrass/v2/deployments
		 * @return {void} 
		 */
		CreateDeployment(requestBody: CreateDeploymentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'greengrass/v2/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of deployments.
		 * Get greengrass/v2/deployments
		 * @param {string} targetArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group.
		 * @param {DeploymentHistoryFilter} historyFilter <p>The filter for the list of deployments. Choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all deployments.</p> </li> <li> <p> <code>LATEST_ONLY</code> – The list includes only the latest revision of each deployment.</p> </li> </ul> <p>Default: <code>LATEST_ONLY</code> </p>
		 * @param {string} parentTargetArn The parent deployment's target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @return {ListDeploymentsResponse} Success
		 */
		ListDeployments(targetArn: string | null | undefined, historyFilter: DeploymentHistoryFilter | null | undefined, parentTargetArn: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListDeploymentsResponse> {
			return this.http.get<ListDeploymentsResponse>(this.baseUri + 'greengrass/v2/deployments?targetArn=' + (targetArn == null ? '' : encodeURIComponent(targetArn)) + '&historyFilter=' + historyFilter + '&parentTargetArn=' + (parentTargetArn == null ? '' : encodeURIComponent(parentTargetArn)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Deletes a version of a component from IoT Greengrass.</p> <note> <p>This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</p> </note>
		 * Delete greengrass/v2/components/{arn}
		 * @param {string} arn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.
		 * @return {void} 
		 */
		DeleteComponent(arn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'greengrass/v2/components/' + (arn == null ? '' : encodeURIComponent(arn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the recipe for a version of a component.
		 * Get greengrass/v2/components/{arn}
		 * @param {RecipeOutputFormat} recipeOutputFormat The format of the recipe.
		 * @param {string} arn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.
		 * @return {GetComponentResponse} Success
		 */
		GetComponent(recipeOutputFormat: RecipeOutputFormat | null | undefined, arn: string): Observable<GetComponentResponse> {
			return this.http.get<GetComponentResponse>(this.baseUri + 'greengrass/v2/components/' + (arn == null ? '' : encodeURIComponent(arn)) + '?recipeOutputFormat=' + recipeOutputFormat, {});
		}

		/**
		 * Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the <i>IoT API Reference</i>.
		 * Delete greengrass/v2/coreDevices/{coreDeviceThingName}
		 * @param {string} coreDeviceThingName The name of the core device. This is also the name of the IoT thing.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteCoreDevice(coreDeviceThingName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'greengrass/v2/coreDevices/' + (coreDeviceThingName == null ? '' : encodeURIComponent(coreDeviceThingName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves metadata for a Greengrass core device.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
		 * Get greengrass/v2/coreDevices/{coreDeviceThingName}
		 * @param {string} coreDeviceThingName The name of the core device. This is also the name of the IoT thing.
		 *     Min length: 1    Max length: 128
		 * @return {GetCoreDeviceResponse} Success
		 */
		GetCoreDevice(coreDeviceThingName: string): Observable<GetCoreDeviceResponse> {
			return this.http.get<GetCoreDeviceResponse>(this.baseUri + 'greengrass/v2/coreDevices/' + (coreDeviceThingName == null ? '' : encodeURIComponent(coreDeviceThingName)), {});
		}

		/**
		 * <p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p> <p>Deleting a deployment doesn't affect core devices that run that deployment, because core devices store the deployment's configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.</p>
		 * Delete greengrass/v2/deployments/{deploymentId}
		 * @param {string} deploymentId The ID of the deployment.
		 *     Min length: 1
		 * @return {void} 
		 */
		DeleteDeployment(deploymentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'greengrass/v2/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a deployment. Deployments define the components that run on Greengrass core devices.
		 * Get greengrass/v2/deployments/{deploymentId}
		 * @param {string} deploymentId The ID of the deployment.
		 *     Min length: 1
		 * @return {GetDeploymentResponse} Success
		 */
		GetDeployment(deploymentId: string): Observable<GetDeploymentResponse> {
			return this.http.get<GetDeploymentResponse>(this.baseUri + 'greengrass/v2/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), {});
		}

		/**
		 * Retrieves metadata for a version of a component.
		 * Get greengrass/v2/components/{arn}/metadata
		 * @param {string} arn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.
		 * @return {DescribeComponentResponse} Success
		 */
		DescribeComponent(arn: string): Observable<DescribeComponentResponse> {
			return this.http.get<DescribeComponentResponse>(this.baseUri + 'greengrass/v2/components/' + (arn == null ? '' : encodeURIComponent(arn)) + '/metadata', {});
		}

		/**
		 * Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.
		 * Get greengrass/v2/components/{arn}/artifacts/{artifactName}
		 * @param {string} arn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version. Specify the ARN of a public or a Lambda component version.
		 * @param {string} artifactName <p>The name of the artifact.</p> <p>You can use the <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponent.html">GetComponent</a> operation to download the component recipe, which includes the URI of the artifact. The artifact name is the section of the URI after the scheme. For example, in the artifact URI <code>greengrass:SomeArtifact.zip</code>, the artifact name is <code>SomeArtifact.zip</code>.</p>
		 *     Min length: 1
		 * @return {GetComponentVersionArtifactResponse} Success
		 */
		GetComponentVersionArtifact(arn: string, artifactName: string): Observable<GetComponentVersionArtifactResponse> {
			return this.http.get<GetComponentVersionArtifactResponse>(this.baseUri + 'greengrass/v2/components/' + (arn == null ? '' : encodeURIComponent(arn)) + '/artifacts/' + (artifactName == null ? '' : encodeURIComponent(artifactName)), {});
		}

		/**
		 * <p>Retrieves connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
		 * Get greengrass/things/{thingName}/connectivityInfo
		 * @param {string} thingName The name of the core device. This is also the name of the IoT thing.
		 *     Min length: 1    Max length: 128
		 * @return {GetConnectivityInfoResponse} Success
		 */
		GetConnectivityInfo(thingName: string): Observable<GetConnectivityInfoResponse> {
			return this.http.get<GetConnectivityInfoResponse>(this.baseUri + 'greengrass/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/connectivityInfo', {});
		}

		/**
		 * <p>Updates connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
		 * Put greengrass/things/{thingName}/connectivityInfo
		 * @param {string} thingName The name of the core device. This is also the name of the IoT thing.
		 *     Min length: 1    Max length: 128
		 * @return {UpdateConnectivityInfoResponse} Success
		 */
		UpdateConnectivityInfo(thingName: string, requestBody: UpdateConnectivityInfoPutBody): Observable<UpdateConnectivityInfoResponse> {
			return this.http.put<UpdateConnectivityInfoResponse>(this.baseUri + 'greengrass/things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/connectivityInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a paginated list of client devices that are associated with a core device.
		 * Get greengrass/v2/coreDevices/{coreDeviceThingName}/associatedClientDevices
		 * @param {string} coreDeviceThingName The name of the core device. This is also the name of the IoT thing.
		 *     Min length: 1    Max length: 128
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @return {ListClientDevicesAssociatedWithCoreDeviceResponse} Success
		 */
		ListClientDevicesAssociatedWithCoreDevice(coreDeviceThingName: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListClientDevicesAssociatedWithCoreDeviceResponse> {
			return this.http.get<ListClientDevicesAssociatedWithCoreDeviceResponse>(this.baseUri + 'greengrass/v2/coreDevices/' + (coreDeviceThingName == null ? '' : encodeURIComponent(coreDeviceThingName)) + '/associatedClientDevices&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves a paginated list of all versions for a component. Greater versions are listed first.
		 * Get greengrass/v2/components/{arn}/versions
		 * @param {string} arn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @return {ListComponentVersionsResponse} Success
		 */
		ListComponentVersions(arn: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListComponentVersionsResponse> {
			return this.http.get<ListComponentVersionsResponse>(this.baseUri + 'greengrass/v2/components/' + (arn == null ? '' : encodeURIComponent(arn)) + '/versions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves a paginated list of component summaries. This list includes components that you have permission to view.
		 * Get greengrass/v2/components
		 * @param {ComponentVisibilityScope} scope <p>The scope of the components to list.</p> <p>Default: <code>PRIVATE</code> </p>
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @return {ListComponentsResponse} Success
		 */
		ListComponents(scope: ComponentVisibilityScope | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListComponentsResponse> {
			return this.http.get<ListComponentsResponse>(this.baseUri + 'greengrass/v2/components?scope=' + scope + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Retrieves a paginated list of Greengrass core devices.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
		 * Get greengrass/v2/coreDevices
		 * @param {string} thingGroupArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IoT thing group by which to filter. If you specify this parameter, the list includes only core devices that have successfully deployed a deployment that targets the thing group. When you remove a core device from a thing group, the list continues to include that core device.
		 * @param {CoreDeviceStatus} status <p>The core device status by which to filter. If you specify this parameter, the list includes only core devices that have this status. Choose one of the following options:</p> <ul> <li> <p> <code>HEALTHY</code> – The IoT Greengrass Core software and all components run on the core device without issue.</p> </li> <li> <p> <code>UNHEALTHY</code> – The IoT Greengrass Core software or a component is in a failed state on the core device.</p> </li> </ul>
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @return {ListCoreDevicesResponse} Success
		 */
		ListCoreDevices(thingGroupArn: string | null | undefined, status: CoreDeviceStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListCoreDevicesResponse> {
			return this.http.get<ListCoreDevicesResponse>(this.baseUri + 'greengrass/v2/coreDevices?thingGroupArn=' + (thingGroupArn == null ? '' : encodeURIComponent(thingGroupArn)) + '&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.
		 * Get greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments
		 * @param {string} coreDeviceThingName The name of the core device. This is also the name of the IoT thing.
		 *     Min length: 1    Max length: 128
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @return {ListEffectiveDeploymentsResponse} Success
		 */
		ListEffectiveDeployments(coreDeviceThingName: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListEffectiveDeploymentsResponse> {
			return this.http.get<ListEffectiveDeploymentsResponse>(this.baseUri + 'greengrass/v2/coreDevices/' + (coreDeviceThingName == null ? '' : encodeURIComponent(coreDeviceThingName)) + '/effectiveDeployments&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the <code>topologyFilter</code> parameter to <code>ALL</code>.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
		 * Get greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents
		 * @param {string} coreDeviceThingName The name of the core device. This is also the name of the IoT thing.
		 *     Min length: 1    Max length: 128
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {InstalledComponentTopologyFilter} topologyFilter <p>The filter for the list of components. Choose from the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all components installed on the core device.</p> </li> <li> <p> <code>ROOT</code> – The list includes only <i>root</i> components, which are components that you specify in a deployment. When you choose this option, the list doesn't include components that the core device installs as dependencies of other components.</p> </li> </ul> <p>Default: <code>ROOT</code> </p>
		 * @return {ListInstalledComponentsResponse} Success
		 */
		ListInstalledComponents(coreDeviceThingName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, topologyFilter: InstalledComponentTopologyFilter | null | undefined): Observable<ListInstalledComponentsResponse> {
			return this.http.get<ListInstalledComponentsResponse>(this.baseUri + 'greengrass/v2/coreDevices/' + (coreDeviceThingName == null ? '' : encodeURIComponent(coreDeviceThingName)) + '/installedComponents&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&topologyFilter=' + topologyFilter, {});
		}

		/**
		 * Retrieves the list of tags for an IoT Greengrass resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation updates the tag's value.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.</p> <p>This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component <code>A</code> requires version <code>&gt;2.0.0</code> and component <code>B</code> requires version <code>&lt;2.0.0</code> of a component dependency.</p> <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p> <important> <p>To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p> </important>
		 * Post greengrass/v2/resolveComponentCandidates
		 * @return {ResolveComponentCandidatesResponse} Success
		 */
		ResolveComponentCandidates(requestBody: ResolveComponentCandidatesPostBody): Observable<ResolveComponentCandidatesResponse> {
			return this.http.post<ResolveComponentCandidatesResponse>(this.baseUri + 'greengrass/v2/resolveComponentCandidates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from an IoT Greengrass resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.
		 * @param {Array<string>} tagKeys A list of keys for tags to remove from the resource.
		 *     Minimum items: 1    Maximum items: 200
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface AssociateServiceRoleToAccountPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the service role to associate with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
		 * Required
		 */
		RoleArn: string;
	}
	export interface AssociateServiceRoleToAccountPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the service role to associate with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
		 * Required
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateServiceRoleToAccountPutBodyFormGroup() {
		return new FormGroup<AssociateServiceRoleToAccountPutBodyFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchAssociateClientDeviceWithCoreDevicePostBody {

		/**
		 * The list of client devices to associate.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		entries?: Array<AssociateClientDeviceWithCoreDeviceEntry>;
	}
	export interface BatchAssociateClientDeviceWithCoreDevicePostBodyFormProperties {
	}
	export function CreateBatchAssociateClientDeviceWithCoreDevicePostBodyFormGroup() {
		return new FormGroup<BatchAssociateClientDeviceWithCoreDevicePostBodyFormProperties>({
		});

	}

	export interface BatchDisassociateClientDeviceFromCoreDevicePostBody {

		/**
		 * The list of client devices to disassociate.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		entries?: Array<DisassociateClientDeviceFromCoreDeviceEntry>;
	}
	export interface BatchDisassociateClientDeviceFromCoreDevicePostBodyFormProperties {
	}
	export function CreateBatchDisassociateClientDeviceFromCoreDevicePostBodyFormGroup() {
		return new FormGroup<BatchDisassociateClientDeviceFromCoreDevicePostBodyFormProperties>({
		});

	}

	export interface CreateComponentVersionPostBody {

		/** <p>The recipe to use to create the component. The recipe defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform compatibility.</p> <p>You must specify either <code>inlineRecipe</code> or <code>lambdaFunction</code>.</p> */
		inlineRecipe?: string | null;

		/** Contains information about an Lambda function to import to create a component. */
		lambdaFunction?: CreateComponentVersionPostBodyLambdaFunction;

		/** A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>. */
		tags?: {[id: string]: string };

		/**
		 * A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken?: string | null;
	}
	export interface CreateComponentVersionPostBodyFormProperties {

		/** <p>The recipe to use to create the component. The recipe defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform compatibility.</p> <p>You must specify either <code>inlineRecipe</code> or <code>lambdaFunction</code>.</p> */
		inlineRecipe: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentVersionPostBodyFormGroup() {
		return new FormGroup<CreateComponentVersionPostBodyFormProperties>({
			inlineRecipe: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-]+$')]),
		});

	}

	export interface CreateComponentVersionPostBodyLambdaFunction {
		lambdaArn?: string;
		componentName?: string;
		componentVersion?: string;
		componentPlatforms?: Array<ComponentPlatform>;
		componentDependencies?: ComponentDependencyMap;
		componentLambdaParameters?: LambdaExecutionParameters;
	}
	export interface CreateComponentVersionPostBodyLambdaFunctionFormProperties {
		lambdaArn: FormControl<string | null | undefined>,
		componentName: FormControl<string | null | undefined>,
		componentVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentVersionPostBodyLambdaFunctionFormGroup() {
		return new FormGroup<CreateComponentVersionPostBodyLambdaFunctionFormProperties>({
			lambdaArn: new FormControl<string | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined),
			componentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.
		 * Required
		 */
		targetArn: string;

		/**
		 * The name of the deployment.
		 * Min length: 1
		 * Max length: 256
		 */
		deploymentName?: string | null;

		/** The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component. */
		components?: {[id: string]: ComponentDeploymentSpecification };

		/** Contains information about an IoT job configuration. */
		iotJobConfiguration?: CreateDeploymentPostBodyIotJobConfiguration;

		/** Contains information about policies that define how a deployment updates components and handles failure. */
		deploymentPolicies?: CreateDeploymentPostBodyDeploymentPolicies;

		/** The parent deployment's target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment. */
		parentTargetArn?: string | null;

		/** A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>. */
		tags?: {[id: string]: string };

		/**
		 * A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken?: string | null;
	}
	export interface CreateDeploymentPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.
		 * Required
		 */
		targetArn: FormControl<string | null | undefined>,

		/**
		 * The name of the deployment.
		 * Min length: 1
		 * Max length: 256
		 */
		deploymentName: FormControl<string | null | undefined>,

		/** The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component. */
		components: FormControl<{[id: string]: ComponentDeploymentSpecification } | null | undefined>,

		/** The parent deployment's target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment. */
		parentTargetArn: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentPostBodyFormProperties>({
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:[^:]*:iot:[^:]*:[0-9]+:(thing|thinggroup)/.+')]),
			deploymentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			components: new FormControl<{[id: string]: ComponentDeploymentSpecification } | null | undefined>(undefined),
			parentTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:[^:]*:iot:[^:]*:[0-9]+:thinggroup/.+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-]+$')]),
		});

	}

	export interface CreateDeploymentPostBodyIotJobConfiguration {
		jobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig;
		abortConfig?: IoTJobAbortConfig;
		timeoutConfig?: IoTJobTimeoutConfig;
	}
	export interface CreateDeploymentPostBodyIotJobConfigurationFormProperties {
	}
	export function CreateCreateDeploymentPostBodyIotJobConfigurationFormGroup() {
		return new FormGroup<CreateDeploymentPostBodyIotJobConfigurationFormProperties>({
		});

	}

	export interface CreateDeploymentPostBodyDeploymentPolicies {
		failureHandlingPolicy?: DeploymentFailureHandlingPolicy;
		componentUpdatePolicy?: DeploymentComponentUpdatePolicy;
		configurationValidationPolicy?: DeploymentConfigurationValidationPolicy;
	}
	export interface CreateDeploymentPostBodyDeploymentPoliciesFormProperties {
		failureHandlingPolicy: FormControl<DeploymentFailureHandlingPolicy | null | undefined>,
	}
	export function CreateCreateDeploymentPostBodyDeploymentPoliciesFormGroup() {
		return new FormGroup<CreateDeploymentPostBodyDeploymentPoliciesFormProperties>({
			failureHandlingPolicy: new FormControl<DeploymentFailureHandlingPolicy | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectivityInfoPutBody {

		/**
		 * The connectivity information for the core device.
		 * Required
		 */
		ConnectivityInfo: Array<ConnectivityInfo>;
	}
	export interface UpdateConnectivityInfoPutBodyFormProperties {
	}
	export function CreateUpdateConnectivityInfoPutBodyFormGroup() {
		return new FormGroup<UpdateConnectivityInfoPutBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResolveComponentCandidatesPostBody {

		/** Contains information about a platform that a component supports. */
		platform?: ResolveComponentCandidatesPostBodyPlatform;

		/** The list of components to resolve. */
		componentCandidates?: Array<ComponentCandidate>;
	}
	export interface ResolveComponentCandidatesPostBodyFormProperties {
	}
	export function CreateResolveComponentCandidatesPostBodyFormGroup() {
		return new FormGroup<ResolveComponentCandidatesPostBodyFormProperties>({
		});

	}

	export interface ResolveComponentCandidatesPostBodyPlatform {
		name?: string;
		attributes?: PlatformAttributesMap;
	}
	export interface ResolveComponentCandidatesPostBodyPlatformFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateResolveComponentCandidatesPostBodyPlatformFormGroup() {
		return new FormGroup<ResolveComponentCandidatesPostBodyPlatformFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

}

