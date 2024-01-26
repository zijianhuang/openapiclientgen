import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Accelerator describes Compute Engine accelerators to be attached to the VM. */
	export interface Accelerator {

		/** The number of accelerators of this type. */
		count?: string | null;

		/** Optional. The NVIDIA GPU driver version that should be installed for this type. You can define the specific driver version such as "470.103.01", following the driver version requirements in https://cloud.google.com/compute/docs/gpus/install-drivers-gpu#minimum-driver. Batch will install the specific accelerator driver if qualified. */
		driverVersion?: string | null;

		/** Deprecated: please use instances[0].install_gpu_drivers instead. */
		installGpuDrivers?: boolean | null;

		/** The accelerator type. For example, "nvidia-tesla-t4". See `gcloud compute accelerator-types list`. */
		type?: string | null;
	}

	/** Accelerator describes Compute Engine accelerators to be attached to the VM. */
	export interface AcceleratorFormProperties {

		/** The number of accelerators of this type. */
		count: FormControl<string | null | undefined>,

		/** Optional. The NVIDIA GPU driver version that should be installed for this type. You can define the specific driver version such as "470.103.01", following the driver version requirements in https://cloud.google.com/compute/docs/gpus/install-drivers-gpu#minimum-driver. Batch will install the specific accelerator driver if qualified. */
		driverVersion: FormControl<string | null | undefined>,

		/** Deprecated: please use instances[0].install_gpu_drivers instead. */
		installGpuDrivers: FormControl<boolean | null | undefined>,

		/** The accelerator type. For example, "nvidia-tesla-t4". See `gcloud compute accelerator-types list`. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorFormGroup() {
		return new FormGroup<AcceleratorFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			driverVersion: new FormControl<string | null | undefined>(undefined),
			installGpuDrivers: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Conditions for actions to deal with task failures. */
	export interface ActionCondition {

		/** Exit codes of a task execution. If there are more than 1 exit codes, when task executes with any of the exit code in the list, the condition is met and the action will be executed. */
		exitCodes?: Array<number>;
	}

	/** Conditions for actions to deal with task failures. */
	export interface ActionConditionFormProperties {
	}
	export function CreateActionConditionFormGroup() {
		return new FormGroup<ActionConditionFormProperties>({
		});

	}


	/** Container runnable representation on the agent side. */
	export interface AgentContainer {

		/** Overrides the `CMD` specified in the container. If there is an ENTRYPOINT (either in the container image or with the entrypoint field below) then commands are appended as arguments to the ENTRYPOINT. */
		commands?: Array<string>;

		/** Overrides the `ENTRYPOINT` specified in the container. */
		entrypoint?: string | null;

		/** The URI to pull the container image from. */
		imageUri?: string | null;

		/** Arbitrary additional options to include in the "docker run" command when running this container, e.g. "--network host". */
		options?: string | null;

		/** Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match docker run's --volume option, e.g. /foo:/bar, or /foo:/bar:ro */
		volumes?: Array<string>;
	}

	/** Container runnable representation on the agent side. */
	export interface AgentContainerFormProperties {

		/** Overrides the `ENTRYPOINT` specified in the container. */
		entrypoint: FormControl<string | null | undefined>,

		/** The URI to pull the container image from. */
		imageUri: FormControl<string | null | undefined>,

		/** Arbitrary additional options to include in the "docker run" command when running this container, e.g. "--network host". */
		options: FormControl<string | null | undefined>,
	}
	export function CreateAgentContainerFormGroup() {
		return new FormGroup<AgentContainerFormProperties>({
			entrypoint: new FormControl<string | null | undefined>(undefined),
			imageUri: new FormControl<string | null | undefined>(undefined),
			options: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AgentEnvironment is the Environment representation between Agent and CLH communication. The environment is used in both task level and agent level. */
	export interface AgentEnvironment {

		/** AgentKMSEnvMap contains the encrypted key/value pair to be used in the environment on the Agent side. */
		encryptedVariables?: AgentKMSEnvMap;

		/** A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable. */
		secretVariables?: {[id: string]: string };

		/** A map of environment variable names to values. */
		variables?: {[id: string]: string };
	}

	/** AgentEnvironment is the Environment representation between Agent and CLH communication. The environment is used in both task level and agent level. */
	export interface AgentEnvironmentFormProperties {

		/** A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable. */
		secretVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** A map of environment variable names to values. */
		variables: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAgentEnvironmentFormGroup() {
		return new FormGroup<AgentEnvironmentFormProperties>({
			secretVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			variables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** AgentKMSEnvMap contains the encrypted key/value pair to be used in the environment on the Agent side. */
	export interface AgentKMSEnvMap {

		/** The value of the cipherText response from the `encrypt` method. */
		cipherText?: string | null;

		/** The name of the KMS key that will be used to decrypt the cipher text. */
		keyName?: string | null;
	}

	/** AgentKMSEnvMap contains the encrypted key/value pair to be used in the environment on the Agent side. */
	export interface AgentKMSEnvMapFormProperties {

		/** The value of the cipherText response from the `encrypt` method. */
		cipherText: FormControl<string | null | undefined>,

		/** The name of the KMS key that will be used to decrypt the cipher text. */
		keyName: FormControl<string | null | undefined>,
	}
	export function CreateAgentKMSEnvMapFormGroup() {
		return new FormGroup<AgentKMSEnvMapFormProperties>({
			cipherText: new FormControl<string | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VM Agent Info. */
	export interface AgentInfo {

		/** Optional. The assigned Job ID */
		jobId?: string | null;

		/** When the AgentInfo is generated. */
		reportTime?: string | null;

		/** Agent state. */
		state?: AgentInfoState | null;

		/** The assigned task group ID. */
		taskGroupId?: string | null;

		/** Task Info. */
		tasks?: Array<AgentTaskInfo>;
	}

	/** VM Agent Info. */
	export interface AgentInfoFormProperties {

		/** Optional. The assigned Job ID */
		jobId: FormControl<string | null | undefined>,

		/** When the AgentInfo is generated. */
		reportTime: FormControl<string | null | undefined>,

		/** Agent state. */
		state: FormControl<AgentInfoState | null | undefined>,

		/** The assigned task group ID. */
		taskGroupId: FormControl<string | null | undefined>,
	}
	export function CreateAgentInfoFormGroup() {
		return new FormGroup<AgentInfoFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AgentInfoState | null | undefined>(undefined),
			taskGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AgentInfoState { AGENT_STATE_UNSPECIFIED = 0, AGENT_STARTING = 1, AGENT_RUNNING = 2, AGENT_STOPPED = 3 }


	/** Task Info */
	export interface AgentTaskInfo {

		/** The highest index of a runnable started by the agent for this task. The runnables are indexed from 1. Value 0 is undefined. */
		runnable?: string | null;

		/** ID of the Task */
		taskId?: string | null;

		/** Status of a task */
		taskStatus?: TaskStatus;
	}

	/** Task Info */
	export interface AgentTaskInfoFormProperties {

		/** The highest index of a runnable started by the agent for this task. The runnables are indexed from 1. Value 0 is undefined. */
		runnable: FormControl<string | null | undefined>,

		/** ID of the Task */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateAgentTaskInfoFormGroup() {
		return new FormGroup<AgentTaskInfoFormProperties>({
			runnable: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of a task */
	export interface TaskStatus {

		/** Task state */
		state?: TaskStatusState | null;

		/** Detailed info about why the state is reached. */
		statusEvents?: Array<StatusEvent>;
	}

	/** Status of a task */
	export interface TaskStatusFormProperties {

		/** Task state */
		state: FormControl<TaskStatusState | null | undefined>,
	}
	export function CreateTaskStatusFormGroup() {
		return new FormGroup<TaskStatusFormProperties>({
			state: new FormControl<TaskStatusState | null | undefined>(undefined),
		});

	}

	export enum TaskStatusState { STATE_UNSPECIFIED = 0, PENDING = 1, ASSIGNED = 2, RUNNING = 3, FAILED = 4, SUCCEEDED = 5, UNEXECUTED = 6 }


	/** Status event */
	export interface StatusEvent {

		/** Description of the event. */
		description?: string | null;

		/** The time this event occurred. */
		eventTime?: string | null;

		/** This Task Execution field includes detail information for task execution procedures, based on StatusEvent types. */
		taskExecution?: TaskExecution;

		/** Task State */
		taskState?: TaskStatusState | null;

		/** Type of the event. */
		type?: string | null;
	}

	/** Status event */
	export interface StatusEventFormProperties {

		/** Description of the event. */
		description: FormControl<string | null | undefined>,

		/** The time this event occurred. */
		eventTime: FormControl<string | null | undefined>,

		/** Task State */
		taskState: FormControl<TaskStatusState | null | undefined>,

		/** Type of the event. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateStatusEventFormGroup() {
		return new FormGroup<StatusEventFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
			taskState: new FormControl<TaskStatusState | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This Task Execution field includes detail information for task execution procedures, based on StatusEvent types. */
	export interface TaskExecution {

		/** When task is completed as the status of FAILED or SUCCEEDED, exit code is for one task execution result, default is 0 as success. */
		exitCode?: number | null;
	}

	/** This Task Execution field includes detail information for task execution procedures, based on StatusEvent types. */
	export interface TaskExecutionFormProperties {

		/** When task is completed as the status of FAILED or SUCCEEDED, exit code is for one task execution result, default is 0 as success. */
		exitCode: FormControl<number | null | undefined>,
	}
	export function CreateTaskExecutionFormGroup() {
		return new FormGroup<TaskExecutionFormProperties>({
			exitCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** VM Agent Metadata. */
	export interface AgentMetadata {

		/** When the VM agent started. Use agent_startup_time instead. */
		creationTime?: string | null;

		/** Full name of the entity that created this vm. For MIG, this path is: projects/{project}/regions/{region}/InstanceGroupManagers/{igm} The value is retrieved from the vm metadata key of "created-by". */
		creator?: string | null;

		/** image version for the VM that this agent is installed on. */
		imageVersion?: string | null;

		/** GCP instance name (go/instance-name). */
		instance?: string | null;

		/** GCP instance ID (go/instance-id). */
		instanceId?: string | null;

		/** If the GCP instance has received preemption notice. */
		instancePreemptionNoticeReceived?: boolean | null;

		/** parsed contents of /etc/os-release */
		osRelease?: {[id: string]: string };

		/** agent binary version running on VM */
		version?: string | null;

		/** Agent zone. */
		zone?: string | null;
	}

	/** VM Agent Metadata. */
	export interface AgentMetadataFormProperties {

		/** When the VM agent started. Use agent_startup_time instead. */
		creationTime: FormControl<string | null | undefined>,

		/** Full name of the entity that created this vm. For MIG, this path is: projects/{project}/regions/{region}/InstanceGroupManagers/{igm} The value is retrieved from the vm metadata key of "created-by". */
		creator: FormControl<string | null | undefined>,

		/** image version for the VM that this agent is installed on. */
		imageVersion: FormControl<string | null | undefined>,

		/** GCP instance name (go/instance-name). */
		instance: FormControl<string | null | undefined>,

		/** GCP instance ID (go/instance-id). */
		instanceId: FormControl<string | null | undefined>,

		/** If the GCP instance has received preemption notice. */
		instancePreemptionNoticeReceived: FormControl<boolean | null | undefined>,

		/** parsed contents of /etc/os-release */
		osRelease: FormControl<{[id: string]: string } | null | undefined>,

		/** agent binary version running on VM */
		version: FormControl<string | null | undefined>,

		/** Agent zone. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateAgentMetadataFormGroup() {
		return new FormGroup<AgentMetadataFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			imageVersion: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			instancePreemptionNoticeReceived: new FormControl<boolean | null | undefined>(undefined),
			osRelease: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Script runnable representation on the agent side. */
	export interface AgentScript {

		/** Script file path on the host VM. To specify an interpreter, please add a `#!`(also known as [shebang line](https://en.wikipedia.org/wiki/Shebang_(Unix))) as the first line of the file.(For example, to execute the script using bash, `#!/bin/bash` should be the first line of the file. To execute the script using`Python3`, `#!/usr/bin/env python3` should be the first line of the file.) Otherwise, the file will by default be excuted by `/bin/sh`. */
		path?: string | null;

		/** Shell script text. To specify an interpreter, please add a `#!\n` at the beginning of the text.(For example, to execute the script using bash, `#!/bin/bash\n` should be added. To execute the script using`Python3`, `#!/usr/bin/env python3\n` should be added.) Otherwise, the script will by default be excuted by `/bin/sh`. */
		text?: string | null;
	}

	/** Script runnable representation on the agent side. */
	export interface AgentScriptFormProperties {

		/** Script file path on the host VM. To specify an interpreter, please add a `#!`(also known as [shebang line](https://en.wikipedia.org/wiki/Shebang_(Unix))) as the first line of the file.(For example, to execute the script using bash, `#!/bin/bash` should be the first line of the file. To execute the script using`Python3`, `#!/usr/bin/env python3` should be the first line of the file.) Otherwise, the file will by default be excuted by `/bin/sh`. */
		path: FormControl<string | null | undefined>,

		/** Shell script text. To specify an interpreter, please add a `#!\n` at the beginning of the text.(For example, to execute the script using bash, `#!/bin/bash\n` should be added. To execute the script using`Python3`, `#!/usr/bin/env python3\n` should be added.) Otherwise, the script will by default be excuted by `/bin/sh`. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateAgentScriptFormGroup() {
		return new FormGroup<AgentScriptFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design. */
	export interface AgentTask {

		/** AgentTaskSpec is the user's TaskSpec representation between Agent and CLH communication. */
		agentTaskSpec?: AgentTaskSpec;

		/** The intended state of the task. */
		intendedState?: AgentTaskIntendedState | null;

		/** The highest barrier reached by all tasks in the task's TaskGroup. */
		reachedBarrier?: string | null;

		/** Spec of a task */
		spec?: TaskSpec;

		/** Status of a task */
		status?: TaskStatus;

		/** Task name. */
		task?: string | null;

		/** TaskSource represents the source of the task. */
		taskSource?: AgentTaskTaskSource | null;
	}

	/** TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design. */
	export interface AgentTaskFormProperties {

		/** The intended state of the task. */
		intendedState: FormControl<AgentTaskIntendedState | null | undefined>,

		/** The highest barrier reached by all tasks in the task's TaskGroup. */
		reachedBarrier: FormControl<string | null | undefined>,

		/** Task name. */
		task: FormControl<string | null | undefined>,

		/** TaskSource represents the source of the task. */
		taskSource: FormControl<AgentTaskTaskSource | null | undefined>,
	}
	export function CreateAgentTaskFormGroup() {
		return new FormGroup<AgentTaskFormProperties>({
			intendedState: new FormControl<AgentTaskIntendedState | null | undefined>(undefined),
			reachedBarrier: new FormControl<string | null | undefined>(undefined),
			task: new FormControl<string | null | undefined>(undefined),
			taskSource: new FormControl<AgentTaskTaskSource | null | undefined>(undefined),
		});

	}


	/** AgentTaskSpec is the user's TaskSpec representation between Agent and CLH communication. */
	export interface AgentTaskSpec {

		/** AgentEnvironment is the Environment representation between Agent and CLH communication. The environment is used in both task level and agent level. */
		environment?: AgentEnvironment;

		/** Maximum duration the task should run. The task will be killed and marked as FAILED if over this limit. */
		maxRunDuration?: string | null;

		/** AgentTaskRunnable is runanbles that will be executed on the agent. */
		runnables?: Array<AgentTaskRunnable>;

		/** AgentTaskUserAccount contains the information of a POSIX account on the guest os which is used to execute the runnables. */
		userAccount?: AgentTaskUserAccount;
	}

	/** AgentTaskSpec is the user's TaskSpec representation between Agent and CLH communication. */
	export interface AgentTaskSpecFormProperties {

		/** Maximum duration the task should run. The task will be killed and marked as FAILED if over this limit. */
		maxRunDuration: FormControl<string | null | undefined>,
	}
	export function CreateAgentTaskSpecFormGroup() {
		return new FormGroup<AgentTaskSpecFormProperties>({
			maxRunDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AgentTaskRunnable is the Runnable representation between Agent and CLH communication. */
	export interface AgentTaskRunnable {

		/** By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task's overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables. */
		alwaysRun?: boolean | null;

		/** This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers). */
		background?: boolean | null;

		/** Container runnable representation on the agent side. */
		container?: AgentContainer;

		/** AgentEnvironment is the Environment representation between Agent and CLH communication. The environment is used in both task level and agent level. */
		environment?: AgentEnvironment;

		/** Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead. */
		ignoreExitStatus?: boolean | null;

		/** Script runnable representation on the agent side. */
		script?: AgentScript;

		/** Timeout for this Runnable. */
		timeout?: string | null;
	}

	/** AgentTaskRunnable is the Runnable representation between Agent and CLH communication. */
	export interface AgentTaskRunnableFormProperties {

		/** By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task's overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables. */
		alwaysRun: FormControl<boolean | null | undefined>,

		/** This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers). */
		background: FormControl<boolean | null | undefined>,

		/** Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead. */
		ignoreExitStatus: FormControl<boolean | null | undefined>,

		/** Timeout for this Runnable. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateAgentTaskRunnableFormGroup() {
		return new FormGroup<AgentTaskRunnableFormProperties>({
			alwaysRun: new FormControl<boolean | null | undefined>(undefined),
			background: new FormControl<boolean | null | undefined>(undefined),
			ignoreExitStatus: new FormControl<boolean | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AgentTaskUserAccount contains the information of a POSIX account on the guest os which is used to execute the runnables. */
	export interface AgentTaskUserAccount {

		/** gid id an unique identifier of the POSIX account group corresponding to the user account. */
		gid?: string | null;

		/** uid is an unique identifier of the POSIX account corresponding to the user account. */
		uid?: string | null;
	}

	/** AgentTaskUserAccount contains the information of a POSIX account on the guest os which is used to execute the runnables. */
	export interface AgentTaskUserAccountFormProperties {

		/** gid id an unique identifier of the POSIX account group corresponding to the user account. */
		gid: FormControl<string | null | undefined>,

		/** uid is an unique identifier of the POSIX account corresponding to the user account. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateAgentTaskUserAccountFormGroup() {
		return new FormGroup<AgentTaskUserAccountFormProperties>({
			gid: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AgentTaskIntendedState { INTENDED_STATE_UNSPECIFIED = 0, ASSIGNED = 1, CANCELLED = 2, DELETED = 3 }


	/** Spec of a task */
	export interface TaskSpec {

		/** Compute resource requirements. ComputeResource defines the amount of resources required for each task. Make sure your tasks have enough resources to successfully run. If you also define the types of resources for a job to use with the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure both fields are compatible with each other. */
		computeResource?: ComputeResource;

		/** An Environment describes a collection of environment variables to set when executing Tasks. */
		environment?: Environment;

		/** Deprecated: please use environment(non-plural) instead. */
		environments?: {[id: string]: string };

		/** Lifecycle management schema when any task in a task group is failed. Currently we only support one lifecycle policy. When the lifecycle policy condition is met, the action in the policy will execute. If task execution result does not meet with the defined lifecycle policy, we consider it as the default policy. Default policy means if the exit code is 0, exit task. If task ends with non-zero exit code, retry the task with max_retry_count. */
		lifecyclePolicies?: Array<LifecyclePolicy>;

		/** Maximum number of retries on failures. The default, 0, which means never retry. The valid value range is [0, 10]. */
		maxRetryCount?: number | null;

		/** Maximum duration the task should run. The task will be killed and marked as FAILED if over this limit. */
		maxRunDuration?: string | null;

		/** The sequence of scripts or containers to run for this Task. Each Task using this TaskSpec executes its list of runnables in order. The Task succeeds if all of its runnables either exit with a zero status or any that exit with a non-zero status have the ignore_exit_status flag. Background runnables are killed automatically (if they have not already exited) a short time after all foreground runnables have completed. Even though this is likely to result in a non-zero exit status for the background runnable, these automatic kills are not treated as Task failures. */
		runnables?: Array<Runnable>;

		/** Volumes to mount before running Tasks using this TaskSpec. */
		volumes?: Array<Volume>;
	}

	/** Spec of a task */
	export interface TaskSpecFormProperties {

		/** Deprecated: please use environment(non-plural) instead. */
		environments: FormControl<{[id: string]: string } | null | undefined>,

		/** Maximum number of retries on failures. The default, 0, which means never retry. The valid value range is [0, 10]. */
		maxRetryCount: FormControl<number | null | undefined>,

		/** Maximum duration the task should run. The task will be killed and marked as FAILED if over this limit. */
		maxRunDuration: FormControl<string | null | undefined>,
	}
	export function CreateTaskSpecFormGroup() {
		return new FormGroup<TaskSpecFormProperties>({
			environments: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maxRetryCount: new FormControl<number | null | undefined>(undefined),
			maxRunDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compute resource requirements. ComputeResource defines the amount of resources required for each task. Make sure your tasks have enough resources to successfully run. If you also define the types of resources for a job to use with the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure both fields are compatible with each other. */
	export interface ComputeResource {

		/** Extra boot disk size in MiB for each task. */
		bootDiskMib?: string | null;

		/** The milliCPU count. `cpuMilli` defines the amount of CPU resources per task in milliCPU units. For example, `1000` corresponds to 1 vCPU per task. If undefined, the default value is `2000`. If you also define the VM's machine type using the `machineType` in [InstancePolicy](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicy) field or inside the `instanceTemplate` in the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure the CPU resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time. For example, if you specify the `n2-standard-2` machine type, which has 2 vCPUs each, you are recommended to set `cpuMilli` no more than `2000`, or you are recommended to run two tasks on the same VM if you set `cpuMilli` to `1000` or less. */
		cpuMilli?: string | null;

		/** Memory in MiB. `memoryMib` defines the amount of memory per task in MiB units. If undefined, the default value is `2000`. If you also define the VM's machine type using the `machineType` in [InstancePolicy](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicy) field or inside the `instanceTemplate` in the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure the memory resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time. For example, if you specify the `n2-standard-2` machine type, which has 8 GiB each, you are recommended to set `memoryMib` to no more than `8192`, or you are recommended to run two tasks on the same VM if you set `memoryMib` to `4096` or less. */
		memoryMib?: string | null;
	}

	/** Compute resource requirements. ComputeResource defines the amount of resources required for each task. Make sure your tasks have enough resources to successfully run. If you also define the types of resources for a job to use with the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure both fields are compatible with each other. */
	export interface ComputeResourceFormProperties {

		/** Extra boot disk size in MiB for each task. */
		bootDiskMib: FormControl<string | null | undefined>,

		/** The milliCPU count. `cpuMilli` defines the amount of CPU resources per task in milliCPU units. For example, `1000` corresponds to 1 vCPU per task. If undefined, the default value is `2000`. If you also define the VM's machine type using the `machineType` in [InstancePolicy](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicy) field or inside the `instanceTemplate` in the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure the CPU resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time. For example, if you specify the `n2-standard-2` machine type, which has 2 vCPUs each, you are recommended to set `cpuMilli` no more than `2000`, or you are recommended to run two tasks on the same VM if you set `cpuMilli` to `1000` or less. */
		cpuMilli: FormControl<string | null | undefined>,

		/** Memory in MiB. `memoryMib` defines the amount of memory per task in MiB units. If undefined, the default value is `2000`. If you also define the VM's machine type using the `machineType` in [InstancePolicy](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicy) field or inside the `instanceTemplate` in the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure the memory resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time. For example, if you specify the `n2-standard-2` machine type, which has 8 GiB each, you are recommended to set `memoryMib` to no more than `8192`, or you are recommended to run two tasks on the same VM if you set `memoryMib` to `4096` or less. */
		memoryMib: FormControl<string | null | undefined>,
	}
	export function CreateComputeResourceFormGroup() {
		return new FormGroup<ComputeResourceFormProperties>({
			bootDiskMib: new FormControl<string | null | undefined>(undefined),
			cpuMilli: new FormControl<string | null | undefined>(undefined),
			memoryMib: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Environment describes a collection of environment variables to set when executing Tasks. */
	export interface Environment {
		encryptedVariables?: KMSEnvMap;

		/** A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable. */
		secretVariables?: {[id: string]: string };

		/** A map of environment variable names to values. */
		variables?: {[id: string]: string };
	}

	/** An Environment describes a collection of environment variables to set when executing Tasks. */
	export interface EnvironmentFormProperties {

		/** A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable. */
		secretVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** A map of environment variable names to values. */
		variables: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			secretVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			variables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface KMSEnvMap {

		/** The value of the cipherText response from the `encrypt` method. */
		cipherText?: string | null;

		/** The name of the KMS key that will be used to decrypt the cipher text. */
		keyName?: string | null;
	}
	export interface KMSEnvMapFormProperties {

		/** The value of the cipherText response from the `encrypt` method. */
		cipherText: FormControl<string | null | undefined>,

		/** The name of the KMS key that will be used to decrypt the cipher text. */
		keyName: FormControl<string | null | undefined>,
	}
	export function CreateKMSEnvMapFormGroup() {
		return new FormGroup<KMSEnvMapFormProperties>({
			cipherText: new FormControl<string | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LifecyclePolicy describes how to deal with task failures based on different conditions. */
	export interface LifecyclePolicy {

		/** Action to execute when ActionCondition is true. When RETRY_TASK is specified, we will retry failed tasks if we notice any exit code match and fail tasks if no match is found. Likewise, when FAIL_TASK is specified, we will fail tasks if we notice any exit code match and retry tasks if no match is found. */
		action?: LifecyclePolicyAction | null;

		/** Conditions for actions to deal with task failures. */
		actionCondition?: ActionCondition;
	}

	/** LifecyclePolicy describes how to deal with task failures based on different conditions. */
	export interface LifecyclePolicyFormProperties {

		/** Action to execute when ActionCondition is true. When RETRY_TASK is specified, we will retry failed tasks if we notice any exit code match and fail tasks if no match is found. Likewise, when FAIL_TASK is specified, we will fail tasks if we notice any exit code match and retry tasks if no match is found. */
		action: FormControl<LifecyclePolicyAction | null | undefined>,
	}
	export function CreateLifecyclePolicyFormGroup() {
		return new FormGroup<LifecyclePolicyFormProperties>({
			action: new FormControl<LifecyclePolicyAction | null | undefined>(undefined),
		});

	}

	export enum LifecyclePolicyAction { ACTION_UNSPECIFIED = 0, RETRY_TASK = 1, FAIL_TASK = 2 }


	/** Runnable describes instructions for executing a specific script or container as part of a Task. */
	export interface Runnable {

		/** By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task's overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables. */
		alwaysRun?: boolean | null;

		/** This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers). */
		background?: boolean | null;

		/** Barrier runnable blocks until all tasks in a taskgroup reach it. */
		barrier?: Barrier;

		/** Container runnable. */
		container?: Container;

		/** Optional. DisplayName is an optional field that can be provided by the caller. If provided, it will be used in logs and other outputs to identify the script, making it easier for users to understand the logs. If not provided the index of the runnable will be used for outputs. */
		displayName?: string | null;

		/** An Environment describes a collection of environment variables to set when executing Tasks. */
		environment?: Environment;

		/** Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead. */
		ignoreExitStatus?: boolean | null;

		/** Labels for this Runnable. */
		labels?: {[id: string]: string };

		/** Script runnable. */
		script?: Script;

		/** Timeout for this Runnable. */
		timeout?: string | null;
	}

	/** Runnable describes instructions for executing a specific script or container as part of a Task. */
	export interface RunnableFormProperties {

		/** By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task's overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables. */
		alwaysRun: FormControl<boolean | null | undefined>,

		/** This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers). */
		background: FormControl<boolean | null | undefined>,

		/** Optional. DisplayName is an optional field that can be provided by the caller. If provided, it will be used in logs and other outputs to identify the script, making it easier for users to understand the logs. If not provided the index of the runnable will be used for outputs. */
		displayName: FormControl<string | null | undefined>,

		/** Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead. */
		ignoreExitStatus: FormControl<boolean | null | undefined>,

		/** Labels for this Runnable. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Timeout for this Runnable. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateRunnableFormGroup() {
		return new FormGroup<RunnableFormProperties>({
			alwaysRun: new FormControl<boolean | null | undefined>(undefined),
			background: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			ignoreExitStatus: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Barrier runnable blocks until all tasks in a taskgroup reach it. */
	export interface Barrier {

		/** Barriers are identified by their index in runnable list. Names are not required, but if present should be an identifier. */
		name?: string | null;
	}

	/** Barrier runnable blocks until all tasks in a taskgroup reach it. */
	export interface BarrierFormProperties {

		/** Barriers are identified by their index in runnable list. Names are not required, but if present should be an identifier. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBarrierFormGroup() {
		return new FormGroup<BarrierFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container runnable. */
	export interface Container {

		/** If set to true, external network access to and from container will be blocked, containers that are with block_external_network as true can still communicate with each other, network cannot be specified in the `container.options` field. */
		blockExternalNetwork?: boolean | null;

		/** Overrides the `CMD` specified in the container. If there is an ENTRYPOINT (either in the container image or with the entrypoint field below) then commands are appended as arguments to the ENTRYPOINT. */
		commands?: Array<string>;

		/** Optional. If set to true, container will run with Image streaming. The container runtime will be changed to containerd instead of docker. Currently, only imageUri, commands, entrypoint and volumes are supported and any other fields will be ignored. Please refer [here](https://github.com/GoogleCloudPlatform/batch-samples/tree/main/api-samples/image-streaming) for the feature requirements and limitations. */
		enableImageStreaming?: boolean | null;

		/** Overrides the `ENTRYPOINT` specified in the container. */
		entrypoint?: string | null;

		/** The URI to pull the container image from. */
		imageUri?: string | null;

		/** Arbitrary additional options to include in the "docker run" command when running this container, e.g. "--network host". */
		options?: string | null;

		/** Optional password for logging in to a docker registry. If password matches `projects/secrets/versions/*` then Batch will read the password from the Secret Manager; */
		password?: string | null;

		/** Optional username for logging in to a docker registry. If username matches `projects/secrets/versions/*` then Batch will read the username from the Secret Manager. */
		username?: string | null;

		/** Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match docker run's --volume option, e.g. /foo:/bar, or /foo:/bar:ro If the `TaskSpec.Volumes` field is specified but this field is not, Batch will mount each volume from the host machine to the container with the same mount path by default. In this case, the default mount option for containers will be read-only (ro) for existing persistent disks and read-write (rw) for other volume types, regardless of the original mount options specified in `TaskSpec.Volumes`. If you need different mount settings, you can explicitly configure them in this field. */
		volumes?: Array<string>;
	}

	/** Container runnable. */
	export interface ContainerFormProperties {

		/** If set to true, external network access to and from container will be blocked, containers that are with block_external_network as true can still communicate with each other, network cannot be specified in the `container.options` field. */
		blockExternalNetwork: FormControl<boolean | null | undefined>,

		/** Optional. If set to true, container will run with Image streaming. The container runtime will be changed to containerd instead of docker. Currently, only imageUri, commands, entrypoint and volumes are supported and any other fields will be ignored. Please refer [here](https://github.com/GoogleCloudPlatform/batch-samples/tree/main/api-samples/image-streaming) for the feature requirements and limitations. */
		enableImageStreaming: FormControl<boolean | null | undefined>,

		/** Overrides the `ENTRYPOINT` specified in the container. */
		entrypoint: FormControl<string | null | undefined>,

		/** The URI to pull the container image from. */
		imageUri: FormControl<string | null | undefined>,

		/** Arbitrary additional options to include in the "docker run" command when running this container, e.g. "--network host". */
		options: FormControl<string | null | undefined>,

		/** Optional password for logging in to a docker registry. If password matches `projects/secrets/versions/*` then Batch will read the password from the Secret Manager; */
		password: FormControl<string | null | undefined>,

		/** Optional username for logging in to a docker registry. If username matches `projects/secrets/versions/*` then Batch will read the username from the Secret Manager. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			blockExternalNetwork: new FormControl<boolean | null | undefined>(undefined),
			enableImageStreaming: new FormControl<boolean | null | undefined>(undefined),
			entrypoint: new FormControl<string | null | undefined>(undefined),
			imageUri: new FormControl<string | null | undefined>(undefined),
			options: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Script runnable. */
	export interface Script {

		/** Script file path on the host VM. To specify an interpreter, please add a `#!`(also known as [shebang line](https://en.wikipedia.org/wiki/Shebang_(Unix))) as the first line of the file.(For example, to execute the script using bash, `#!/bin/bash` should be the first line of the file. To execute the script using`Python3`, `#!/usr/bin/env python3` should be the first line of the file.) Otherwise, the file will by default be excuted by `/bin/sh`. */
		path?: string | null;

		/** Shell script text. To specify an interpreter, please add a `#!\n` at the beginning of the text.(For example, to execute the script using bash, `#!/bin/bash\n` should be added. To execute the script using`Python3`, `#!/usr/bin/env python3\n` should be added.) Otherwise, the script will by default be excuted by `/bin/sh`. */
		text?: string | null;
	}

	/** Script runnable. */
	export interface ScriptFormProperties {

		/** Script file path on the host VM. To specify an interpreter, please add a `#!`(also known as [shebang line](https://en.wikipedia.org/wiki/Shebang_(Unix))) as the first line of the file.(For example, to execute the script using bash, `#!/bin/bash` should be the first line of the file. To execute the script using`Python3`, `#!/usr/bin/env python3` should be the first line of the file.) Otherwise, the file will by default be excuted by `/bin/sh`. */
		path: FormControl<string | null | undefined>,

		/** Shell script text. To specify an interpreter, please add a `#!\n` at the beginning of the text.(For example, to execute the script using bash, `#!/bin/bash\n` should be added. To execute the script using`Python3`, `#!/usr/bin/env python3\n` should be added.) Otherwise, the script will by default be excuted by `/bin/sh`. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateScriptFormGroup() {
		return new FormGroup<ScriptFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Volume describes a volume and parameters for it to be mounted to a VM. */
	export interface Volume {

		/** Device name of an attached disk volume, which should align with a device_name specified by job.allocation_policy.instances[0].policy.disks[i].device_name or defined by the given instance template in job.allocation_policy.instances[0].instance_template. */
		deviceName?: string | null;

		/** Represents a Google Cloud Storage volume. */
		gcs?: GCS;

		/** For Google Cloud Storage (GCS), mount options are the options supported by the gcsfuse tool (https://github.com/GoogleCloudPlatform/gcsfuse). For existing persistent disks, mount options provided by the mount command (https://man7.org/linux/man-pages/man8/mount.8.html) except writing are supported. This is due to restrictions of multi-writer mode (https://cloud.google.com/compute/docs/disks/sharing-disks-between-vms). For other attached disks and Network File System (NFS), mount options are these supported by the mount command (https://man7.org/linux/man-pages/man8/mount.8.html). */
		mountOptions?: Array<string>;

		/** The mount path for the volume, e.g. /mnt/disks/share. */
		mountPath?: string | null;

		/** Represents an NFS volume. */
		nfs?: NFS;
	}

	/** Volume describes a volume and parameters for it to be mounted to a VM. */
	export interface VolumeFormProperties {

		/** Device name of an attached disk volume, which should align with a device_name specified by job.allocation_policy.instances[0].policy.disks[i].device_name or defined by the given instance template in job.allocation_policy.instances[0].instance_template. */
		deviceName: FormControl<string | null | undefined>,

		/** The mount path for the volume, e.g. /mnt/disks/share. */
		mountPath: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
			mountPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Cloud Storage volume. */
	export interface GCS {

		/** Remote path, either a bucket name or a subdirectory of a bucket, e.g.: bucket_name, bucket_name/subdirectory/ */
		remotePath?: string | null;
	}

	/** Represents a Google Cloud Storage volume. */
	export interface GCSFormProperties {

		/** Remote path, either a bucket name or a subdirectory of a bucket, e.g.: bucket_name, bucket_name/subdirectory/ */
		remotePath: FormControl<string | null | undefined>,
	}
	export function CreateGCSFormGroup() {
		return new FormGroup<GCSFormProperties>({
			remotePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an NFS volume. */
	export interface NFS {

		/** Remote source path exported from the NFS, e.g., "/share". */
		remotePath?: string | null;

		/** The IP address of the NFS. */
		server?: string | null;
	}

	/** Represents an NFS volume. */
	export interface NFSFormProperties {

		/** Remote source path exported from the NFS, e.g., "/share". */
		remotePath: FormControl<string | null | undefined>,

		/** The IP address of the NFS. */
		server: FormControl<string | null | undefined>,
	}
	export function CreateNFSFormGroup() {
		return new FormGroup<NFSFormProperties>({
			remotePath: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AgentTaskTaskSource { TASK_SOURCE_UNSPECIFIED = 0, BATCH_INTERNAL = 1, USER = 2 }


	/** VM timing information */
	export interface AgentTimingInfo {

		/** Agent startup time */
		agentStartupTime?: string | null;

		/** Boot timestamp of the VM OS */
		bootTime?: string | null;

		/** Startup time of the Batch VM script. */
		scriptStartupTime?: string | null;
	}

	/** VM timing information */
	export interface AgentTimingInfoFormProperties {

		/** Agent startup time */
		agentStartupTime: FormControl<string | null | undefined>,

		/** Boot timestamp of the VM OS */
		bootTime: FormControl<string | null | undefined>,

		/** Startup time of the Batch VM script. */
		scriptStartupTime: FormControl<string | null | undefined>,
	}
	export function CreateAgentTimingInfoFormGroup() {
		return new FormGroup<AgentTimingInfoFormProperties>({
			agentStartupTime: new FormControl<string | null | undefined>(undefined),
			bootTime: new FormControl<string | null | undefined>(undefined),
			scriptStartupTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job. */
	export interface AllocationPolicy {

		/** Describe instances that can be created by this AllocationPolicy. Only instances[0] is supported now. */
		instances?: Array<InstancePolicyOrTemplate>;

		/** Labels applied to all VM instances and other resources created by AllocationPolicy. Labels could be user provided or system generated. You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved. */
		labels?: {[id: string]: string };
		location?: LocationPolicy;

		/** NetworkPolicy describes VM instance network configurations. */
		network?: NetworkPolicy;

		/** PlacementPolicy describes a group placement policy for the VMs controlled by this AllocationPolicy. */
		placement?: PlacementPolicy;

		/** Carries information about a Google Cloud service account. */
		serviceAccount?: ServiceAccount;

		/** Optional. Tags applied to the VM instances. The tags identify valid sources or targets for network firewalls. Each tag must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). */
		tags?: Array<string>;
	}

	/** A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job. */
	export interface AllocationPolicyFormProperties {

		/** Labels applied to all VM instances and other resources created by AllocationPolicy. Labels could be user provided or system generated. You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAllocationPolicyFormGroup() {
		return new FormGroup<AllocationPolicyFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** InstancePolicyOrTemplate lets you define the type of resources to use for this job either with an InstancePolicy or an instance template. If undefined, Batch picks the type of VM to use and doesn't include optional VM resources such as GPUs and extra disks. */
	export interface InstancePolicyOrTemplate {

		/** Set this field true if users want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instance_template on their behalf. Default is false. For Container-Optimized Image cases, Batch will install the accelerator driver following milestones of https://cloud.google.com/container-optimized-os/docs/release-notes. For non Container-Optimized Image cases, following https://github.com/GoogleCloudPlatform/compute-gpu-installation/blob/main/linux/install_gpu_driver.py. */
		installGpuDrivers?: boolean | null;

		/** Name of an instance template used to create VMs. Named the field as 'instance_template' instead of 'template' to avoid c++ keyword conflict. */
		instanceTemplate?: string | null;

		/** InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy. */
		policy?: InstancePolicy;
	}

	/** InstancePolicyOrTemplate lets you define the type of resources to use for this job either with an InstancePolicy or an instance template. If undefined, Batch picks the type of VM to use and doesn't include optional VM resources such as GPUs and extra disks. */
	export interface InstancePolicyOrTemplateFormProperties {

		/** Set this field true if users want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instance_template on their behalf. Default is false. For Container-Optimized Image cases, Batch will install the accelerator driver following milestones of https://cloud.google.com/container-optimized-os/docs/release-notes. For non Container-Optimized Image cases, following https://github.com/GoogleCloudPlatform/compute-gpu-installation/blob/main/linux/install_gpu_driver.py. */
		installGpuDrivers: FormControl<boolean | null | undefined>,

		/** Name of an instance template used to create VMs. Named the field as 'instance_template' instead of 'template' to avoid c++ keyword conflict. */
		instanceTemplate: FormControl<string | null | undefined>,
	}
	export function CreateInstancePolicyOrTemplateFormGroup() {
		return new FormGroup<InstancePolicyOrTemplateFormProperties>({
			installGpuDrivers: new FormControl<boolean | null | undefined>(undefined),
			instanceTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy. */
	export interface InstancePolicy {

		/** The accelerators attached to each VM instance. */
		accelerators?: Array<Accelerator>;

		/** A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds. */
		bootDisk?: Disk;

		/** Non-boot disks to be attached for each VM created by this InstancePolicy. New disks will be deleted when the VM is deleted. A non-boot disk is a disk that can be of a device with a file system or a raw storage drive that is not ready for data storage and accessing. */
		disks?: Array<AttachedDisk>;

		/** The Compute Engine machine type. */
		machineType?: string | null;

		/** The minimum CPU platform. See https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. */
		minCpuPlatform?: string | null;

		/** The provisioning model. */
		provisioningModel?: InstancePolicyProvisioningModel | null;

		/** Optional. If specified, VMs will consume only the specified reservation. If not specified (default), VMs will consume any applicable reservation. */
		reservation?: string | null;
	}

	/** InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy. */
	export interface InstancePolicyFormProperties {

		/** The Compute Engine machine type. */
		machineType: FormControl<string | null | undefined>,

		/** The minimum CPU platform. See https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. */
		minCpuPlatform: FormControl<string | null | undefined>,

		/** The provisioning model. */
		provisioningModel: FormControl<InstancePolicyProvisioningModel | null | undefined>,

		/** Optional. If specified, VMs will consume only the specified reservation. If not specified (default), VMs will consume any applicable reservation. */
		reservation: FormControl<string | null | undefined>,
	}
	export function CreateInstancePolicyFormGroup() {
		return new FormGroup<InstancePolicyFormProperties>({
			machineType: new FormControl<string | null | undefined>(undefined),
			minCpuPlatform: new FormControl<string | null | undefined>(undefined),
			provisioningModel: new FormControl<InstancePolicyProvisioningModel | null | undefined>(undefined),
			reservation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds. */
	export interface Disk {

		/** Local SSDs are available through both "SCSI" and "NVMe" interfaces. If not indicated, "NVMe" will be the default one for local ssds. This field is ignored for persistent disks as the interface is chosen automatically. See https://cloud.google.com/compute/docs/disks/persistent-disks#choose_an_interface. */
		diskInterface?: string | null;

		/** URL for a VM image to use as the data source for this disk. For example, the following are all valid URLs: * Specify the image by its family name: projects/{project}/global/images/family/{image_family} * Specify the image version: projects/{project}/global/images/{image_version} You can also use Batch customized image in short names. The following image values are supported for a boot disk: * `batch-debian`: use Batch Debian images. * `batch-centos`: use Batch CentOS images. * `batch-cos`: use Batch Container-Optimized images. * `batch-hpc-centos`: use Batch HPC CentOS images. * `batch-hpc-rocky`: use Batch HPC Rocky Linux images. */
		image?: string | null;

		/** Disk size in GB. **Non-Boot Disk**: If the `type` specifies a persistent disk, this field is ignored if `data_source` is set as `image` or `snapshot`. If the `type` specifies a local SSD, this field should be a multiple of 375 GB, otherwise, the final size will be the next greater multiple of 375 GB. **Boot Disk**: Batch will calculate the boot disk size based on source image and task requirements if you do not speicify the size. If both this field and the `boot_disk_mib` field in task spec's `compute_resource` are defined, Batch will only honor this field. Also, this field should be no smaller than the source disk's size when the `data_source` is set as `snapshot` or `image`. For example, if you set an image as the `data_source` field and the image's default disk size 30 GB, you can only use this field to make the disk larger or equal to 30 GB. */
		sizeGb?: string | null;

		/** Name of a snapshot used as the data source. Snapshot is not supported as boot disk now. */
		snapshot?: string | null;

		/** Disk type as shown in `gcloud compute disk-types list`. For example, local SSD uses type "local-ssd". Persistent disks and boot disks use "pd-balanced", "pd-extreme", "pd-ssd" or "pd-standard". */
		type?: string | null;
	}

	/** A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds. */
	export interface DiskFormProperties {

		/** Local SSDs are available through both "SCSI" and "NVMe" interfaces. If not indicated, "NVMe" will be the default one for local ssds. This field is ignored for persistent disks as the interface is chosen automatically. See https://cloud.google.com/compute/docs/disks/persistent-disks#choose_an_interface. */
		diskInterface: FormControl<string | null | undefined>,

		/** URL for a VM image to use as the data source for this disk. For example, the following are all valid URLs: * Specify the image by its family name: projects/{project}/global/images/family/{image_family} * Specify the image version: projects/{project}/global/images/{image_version} You can also use Batch customized image in short names. The following image values are supported for a boot disk: * `batch-debian`: use Batch Debian images. * `batch-centos`: use Batch CentOS images. * `batch-cos`: use Batch Container-Optimized images. * `batch-hpc-centos`: use Batch HPC CentOS images. * `batch-hpc-rocky`: use Batch HPC Rocky Linux images. */
		image: FormControl<string | null | undefined>,

		/** Disk size in GB. **Non-Boot Disk**: If the `type` specifies a persistent disk, this field is ignored if `data_source` is set as `image` or `snapshot`. If the `type` specifies a local SSD, this field should be a multiple of 375 GB, otherwise, the final size will be the next greater multiple of 375 GB. **Boot Disk**: Batch will calculate the boot disk size based on source image and task requirements if you do not speicify the size. If both this field and the `boot_disk_mib` field in task spec's `compute_resource` are defined, Batch will only honor this field. Also, this field should be no smaller than the source disk's size when the `data_source` is set as `snapshot` or `image`. For example, if you set an image as the `data_source` field and the image's default disk size 30 GB, you can only use this field to make the disk larger or equal to 30 GB. */
		sizeGb: FormControl<string | null | undefined>,

		/** Name of a snapshot used as the data source. Snapshot is not supported as boot disk now. */
		snapshot: FormControl<string | null | undefined>,

		/** Disk type as shown in `gcloud compute disk-types list`. For example, local SSD uses type "local-ssd". Persistent disks and boot disks use "pd-balanced", "pd-extreme", "pd-ssd" or "pd-standard". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			diskInterface: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			sizeGb: new FormControl<string | null | undefined>(undefined),
			snapshot: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A new or an existing persistent disk (PD) or a local ssd attached to a VM instance. */
	export interface AttachedDisk {

		/** Device name that the guest operating system will see. It is used by Runnable.volumes field to mount disks. So please specify the device_name if you want Batch to help mount the disk, and it should match the device_name field in volumes. */
		deviceName?: string | null;

		/** Name of an existing PD. */
		existingDisk?: string | null;

		/** A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds. */
		newDisk?: Disk;
	}

	/** A new or an existing persistent disk (PD) or a local ssd attached to a VM instance. */
	export interface AttachedDiskFormProperties {

		/** Device name that the guest operating system will see. It is used by Runnable.volumes field to mount disks. So please specify the device_name if you want Batch to help mount the disk, and it should match the device_name field in volumes. */
		deviceName: FormControl<string | null | undefined>,

		/** Name of an existing PD. */
		existingDisk: FormControl<string | null | undefined>,
	}
	export function CreateAttachedDiskFormGroup() {
		return new FormGroup<AttachedDiskFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
			existingDisk: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstancePolicyProvisioningModel { PROVISIONING_MODEL_UNSPECIFIED = 0, STANDARD = 1, SPOT = 2, PREEMPTIBLE = 3 }

	export interface LocationPolicy {

		/** A list of allowed location names represented by internal URLs. Each location can be a region or a zone. Only one region or multiple zones in one region is supported now. For example, ["regions/us-central1"] allow VMs in any zones in region us-central1. ["zones/us-central1-a", "zones/us-central1-c"] only allow VMs in zones us-central1-a and us-central1-c. All locations end up in different regions would cause errors. For example, ["regions/us-central1", "zones/us-central1-a", "zones/us-central1-b", "zones/us-west1-a"] contains 2 regions "us-central1" and "us-west1". An error is expected in this case. */
		allowedLocations?: Array<string>;
	}
	export interface LocationPolicyFormProperties {
	}
	export function CreateLocationPolicyFormGroup() {
		return new FormGroup<LocationPolicyFormProperties>({
		});

	}


	/** NetworkPolicy describes VM instance network configurations. */
	export interface NetworkPolicy {

		/** Network configurations. */
		networkInterfaces?: Array<NetworkInterface>;
	}

	/** NetworkPolicy describes VM instance network configurations. */
	export interface NetworkPolicyFormProperties {
	}
	export function CreateNetworkPolicyFormGroup() {
		return new FormGroup<NetworkPolicyFormProperties>({
		});

	}


	/** A network interface. */
	export interface NetworkInterface {

		/** The URL of an existing network resource. You can specify the network as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} * projects/{project}/global/networks/{network} * global/networks/{network} */
		network?: string | null;

		/** Default is false (with an external IP address). Required if no external public IP address is attached to the VM. If no external public IP address, additional configuration is required to allow the VM to access Google Services. See https://cloud.google.com/vpc/docs/configure-private-google-access and https://cloud.google.com/nat/docs/gce-example#create-nat for more information. */
		noExternalIpAddress?: boolean | null;

		/** The URL of an existing subnetwork resource in the network. You can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork} * projects/{project}/regions/{region}/subnetworks/{subnetwork} * regions/{region}/subnetworks/{subnetwork} */
		subnetwork?: string | null;
	}

	/** A network interface. */
	export interface NetworkInterfaceFormProperties {

		/** The URL of an existing network resource. You can specify the network as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} * projects/{project}/global/networks/{network} * global/networks/{network} */
		network: FormControl<string | null | undefined>,

		/** Default is false (with an external IP address). Required if no external public IP address is attached to the VM. If no external public IP address, additional configuration is required to allow the VM to access Google Services. See https://cloud.google.com/vpc/docs/configure-private-google-access and https://cloud.google.com/nat/docs/gce-example#create-nat for more information. */
		noExternalIpAddress: FormControl<boolean | null | undefined>,

		/** The URL of an existing subnetwork resource in the network. You can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork} * projects/{project}/regions/{region}/subnetworks/{subnetwork} * regions/{region}/subnetworks/{subnetwork} */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			noExternalIpAddress: new FormControl<boolean | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PlacementPolicy describes a group placement policy for the VMs controlled by this AllocationPolicy. */
	export interface PlacementPolicy {

		/** UNSPECIFIED vs. COLLOCATED (default UNSPECIFIED). Use COLLOCATED when you want VMs to be located close to each other for low network latency between the VMs. No placement policy will be generated when collocation is UNSPECIFIED. */
		collocation?: string | null;

		/** When specified, causes the job to fail if more than max_distance logical switches are required between VMs. Batch uses the most compact possible placement of VMs even when max_distance is not specified. An explicit max_distance makes that level of compactness a strict requirement. Not yet implemented */
		maxDistance?: string | null;
	}

	/** PlacementPolicy describes a group placement policy for the VMs controlled by this AllocationPolicy. */
	export interface PlacementPolicyFormProperties {

		/** UNSPECIFIED vs. COLLOCATED (default UNSPECIFIED). Use COLLOCATED when you want VMs to be located close to each other for low network latency between the VMs. No placement policy will be generated when collocation is UNSPECIFIED. */
		collocation: FormControl<string | null | undefined>,

		/** When specified, causes the job to fail if more than max_distance logical switches are required between VMs. Batch uses the most compact possible placement of VMs even when max_distance is not specified. An explicit max_distance makes that level of compactness a strict requirement. Not yet implemented */
		maxDistance: FormControl<string | null | undefined>,
	}
	export function CreatePlacementPolicyFormGroup() {
		return new FormGroup<PlacementPolicyFormProperties>({
			collocation: new FormControl<string | null | undefined>(undefined),
			maxDistance: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Carries information about a Google Cloud service account. */
	export interface ServiceAccount {

		/** Email address of the service account. If not specified, the default Compute Engine service account for the project will be used. If instance template is being used, the service account has to be specified in the instance template and it has to match the email field here. */
		email?: string | null;

		/** List of scopes to be enabled for this service account on the VM, in addition to the cloud-platform API scope that will be added by default. */
		scopes?: Array<string>;
	}

	/** Carries information about a Google Cloud service account. */
	export interface ServiceAccountFormProperties {

		/** Email address of the service account. If not specified, the default Compute Engine service account for the project will be used. If instance template is being used, the service account has to be specified in the instance template and it has to match the email field here. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountFormGroup() {
		return new FormGroup<ServiceAccountFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** VM instance status. */
	export interface InstanceStatus {

		/** A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds. */
		bootDisk?: Disk;

		/** The Compute Engine machine type. */
		machineType?: string | null;

		/** The VM instance provisioning model. */
		provisioningModel?: InstancePolicyProvisioningModel | null;

		/** The max number of tasks can be assigned to this instance type. */
		taskPack?: string | null;
	}

	/** VM instance status. */
	export interface InstanceStatusFormProperties {

		/** The Compute Engine machine type. */
		machineType: FormControl<string | null | undefined>,

		/** The VM instance provisioning model. */
		provisioningModel: FormControl<InstancePolicyProvisioningModel | null | undefined>,

		/** The max number of tasks can be assigned to this instance type. */
		taskPack: FormControl<string | null | undefined>,
	}
	export function CreateInstanceStatusFormGroup() {
		return new FormGroup<InstanceStatusFormProperties>({
			machineType: new FormControl<string | null | undefined>(undefined),
			provisioningModel: new FormControl<InstancePolicyProvisioningModel | null | undefined>(undefined),
			taskPack: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Cloud Batch Job description. */
	export interface Job {

		/** A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job. */
		allocationPolicy?: AllocationPolicy;

		/** Output only. When the Job was created. */
		createTime?: string | null;

		/** Labels for the Job. Labels could be user provided or system generated. For example, "labels": { "department": "finance", "environment": "test" } You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved. */
		labels?: {[id: string]: string };

		/** LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved. */
		logsPolicy?: LogsPolicy;

		/** Output only. Job name. For example: "projects/123456/locations/us-central1/jobs/job01". */
		name?: string | null;

		/** Notification configurations. */
		notifications?: Array<JobNotification>;

		/** Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied. */
		priority?: string | null;

		/** Job status. */
		status?: JobStatus;

		/** Required. TaskGroups in the Job. Only one TaskGroup is supported now. */
		taskGroups?: Array<TaskGroup>;

		/** Output only. A system generated unique ID (in UUID4 format) for the Job. */
		uid?: string | null;

		/** Output only. The last time the Job was updated. */
		updateTime?: string | null;
	}

	/** The Cloud Batch Job description. */
	export interface JobFormProperties {

		/** Output only. When the Job was created. */
		createTime: FormControl<string | null | undefined>,

		/** Labels for the Job. Labels could be user provided or system generated. For example, "labels": { "department": "finance", "environment": "test" } You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Job name. For example: "projects/123456/locations/us-central1/jobs/job01". */
		name: FormControl<string | null | undefined>,

		/** Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied. */
		priority: FormControl<string | null | undefined>,

		/** Output only. A system generated unique ID (in UUID4 format) for the Job. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The last time the Job was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved. */
	export interface LogsPolicy {

		/** Where logs should be saved. */
		destination?: LogsPolicyDestination | null;

		/** The path to which logs are saved when the destination = PATH. This can be a local file path on the VM, or under the mount point of a Persistent Disk or Filestore, or a Cloud Storage path. */
		logsPath?: string | null;
	}

	/** LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved. */
	export interface LogsPolicyFormProperties {

		/** Where logs should be saved. */
		destination: FormControl<LogsPolicyDestination | null | undefined>,

		/** The path to which logs are saved when the destination = PATH. This can be a local file path on the VM, or under the mount point of a Persistent Disk or Filestore, or a Cloud Storage path. */
		logsPath: FormControl<string | null | undefined>,
	}
	export function CreateLogsPolicyFormGroup() {
		return new FormGroup<LogsPolicyFormProperties>({
			destination: new FormControl<LogsPolicyDestination | null | undefined>(undefined),
			logsPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogsPolicyDestination { DESTINATION_UNSPECIFIED = 0, CLOUD_LOGGING = 1, PATH = 2 }


	/** Notification configurations. */
	export interface JobNotification {

		/** Message details. Describe the conditions under which messages will be sent. If no attribute is defined, no message will be sent by default. One message should specify either the job or the task level attributes, but not both. For example, job level: JOB_STATE_CHANGED and/or a specified new_job_state; task level: TASK_STATE_CHANGED and/or a specified new_task_state. */
		message?: Message;

		/** The Pub/Sub topic where notifications like the job state changes will be published. The topic must exist in the same project as the job and billings will be charged to this project. If not specified, no Pub/Sub messages will be sent. Topic format: `projects/{project}/topics/{topic}`. */
		pubsubTopic?: string | null;
	}

	/** Notification configurations. */
	export interface JobNotificationFormProperties {

		/** The Pub/Sub topic where notifications like the job state changes will be published. The topic must exist in the same project as the job and billings will be charged to this project. If not specified, no Pub/Sub messages will be sent. Topic format: `projects/{project}/topics/{topic}`. */
		pubsubTopic: FormControl<string | null | undefined>,
	}
	export function CreateJobNotificationFormGroup() {
		return new FormGroup<JobNotificationFormProperties>({
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message details. Describe the conditions under which messages will be sent. If no attribute is defined, no message will be sent by default. One message should specify either the job or the task level attributes, but not both. For example, job level: JOB_STATE_CHANGED and/or a specified new_job_state; task level: TASK_STATE_CHANGED and/or a specified new_task_state. */
	export interface Message {

		/** The new job state. */
		newJobState?: MessageNewJobState | null;

		/** The new task state. */
		newTaskState?: TaskStatusState | null;

		/** The message type. */
		type?: MessageType | null;
	}

	/** Message details. Describe the conditions under which messages will be sent. If no attribute is defined, no message will be sent by default. One message should specify either the job or the task level attributes, but not both. For example, job level: JOB_STATE_CHANGED and/or a specified new_job_state; task level: TASK_STATE_CHANGED and/or a specified new_task_state. */
	export interface MessageFormProperties {

		/** The new job state. */
		newJobState: FormControl<MessageNewJobState | null | undefined>,

		/** The new task state. */
		newTaskState: FormControl<TaskStatusState | null | undefined>,

		/** The message type. */
		type: FormControl<MessageType | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			newJobState: new FormControl<MessageNewJobState | null | undefined>(undefined),
			newTaskState: new FormControl<TaskStatusState | null | undefined>(undefined),
			type: new FormControl<MessageType | null | undefined>(undefined),
		});

	}

	export enum MessageNewJobState { STATE_UNSPECIFIED = 0, QUEUED = 1, SCHEDULED = 2, RUNNING = 3, SUCCEEDED = 4, FAILED = 5, DELETION_IN_PROGRESS = 6 }

	export enum MessageType { TYPE_UNSPECIFIED = 0, JOB_STATE_CHANGED = 1, TASK_STATE_CHANGED = 2 }


	/** Job status. */
	export interface JobStatus {

		/** The duration of time that the Job spent in status RUNNING. */
		runDuration?: string | null;

		/** Job state */
		state?: MessageNewJobState | null;

		/** Job status events */
		statusEvents?: Array<StatusEvent>;

		/** Aggregated task status for each TaskGroup in the Job. The map key is TaskGroup ID. */
		taskGroups?: {[id: string]: TaskGroupStatus };
	}

	/** Job status. */
	export interface JobStatusFormProperties {

		/** The duration of time that the Job spent in status RUNNING. */
		runDuration: FormControl<string | null | undefined>,

		/** Job state */
		state: FormControl<MessageNewJobState | null | undefined>,

		/** Aggregated task status for each TaskGroup in the Job. The map key is TaskGroup ID. */
		taskGroups: FormControl<{[id: string]: TaskGroupStatus } | null | undefined>,
	}
	export function CreateJobStatusFormGroup() {
		return new FormGroup<JobStatusFormProperties>({
			runDuration: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MessageNewJobState | null | undefined>(undefined),
			taskGroups: new FormControl<{[id: string]: TaskGroupStatus } | null | undefined>(undefined),
		});

	}


	/** Aggregated task status for a TaskGroup. */
	export interface TaskGroupStatus {

		/** Count of task in each state in the TaskGroup. The map key is task state name. */
		counts?: {[id: string]: string };

		/** Status of instances allocated for the TaskGroup. */
		instances?: Array<InstanceStatus>;
	}

	/** Aggregated task status for a TaskGroup. */
	export interface TaskGroupStatusFormProperties {

		/** Count of task in each state in the TaskGroup. The map key is task state name. */
		counts: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTaskGroupStatusFormGroup() {
		return new FormGroup<TaskGroupStatusFormProperties>({
			counts: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A TaskGroup defines one or more Tasks that all share the same TaskSpec. */
	export interface TaskGroup {

		/** Output only. TaskGroup name. The system generates this field based on parent Job name. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01". */
		name?: string | null;

		/** Max number of tasks that can run in parallel. Default to min(task_count, parallel tasks per job limit). See: [Job Limits](https://cloud.google.com/batch/quotas#job_limits). Field parallelism must be 1 if the scheduling_policy is IN_ORDER. */
		parallelism?: string | null;

		/** When true, Batch will configure SSH to allow passwordless login between VMs running the Batch tasks in the same TaskGroup. */
		permissiveSsh?: boolean | null;

		/** When true, Batch will populate a file with a list of all VMs assigned to the TaskGroup and set the BATCH_HOSTS_FILE environment variable to the path of that file. Defaults to false. */
		requireHostsFile?: boolean | null;

		/** Scheduling policy for Tasks in the TaskGroup. The default value is AS_SOON_AS_POSSIBLE. */
		schedulingPolicy?: TaskGroupSchedulingPolicy | null;

		/** Number of Tasks in the TaskGroup. Default is 1. */
		taskCount?: string | null;

		/** Max number of tasks that can be run on a VM at the same time. If not specified, the system will decide a value based on available compute resources on a VM and task requirements. */
		taskCountPerNode?: string | null;

		/** An array of environment variable mappings, which are passed to Tasks with matching indices. If task_environments is used then task_count should not be specified in the request (and will be ignored). Task count will be the length of task_environments. Tasks get a BATCH_TASK_INDEX and BATCH_TASK_COUNT environment variable, in addition to any environment variables set in task_environments, specifying the number of Tasks in the Task's parent TaskGroup, and the specific Task's index in the TaskGroup (0 through BATCH_TASK_COUNT - 1). */
		taskEnvironments?: Array<Environment>;

		/** Spec of a task */
		taskSpec?: TaskSpec;
	}

	/** A TaskGroup defines one or more Tasks that all share the same TaskSpec. */
	export interface TaskGroupFormProperties {

		/** Output only. TaskGroup name. The system generates this field based on parent Job name. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01". */
		name: FormControl<string | null | undefined>,

		/** Max number of tasks that can run in parallel. Default to min(task_count, parallel tasks per job limit). See: [Job Limits](https://cloud.google.com/batch/quotas#job_limits). Field parallelism must be 1 if the scheduling_policy is IN_ORDER. */
		parallelism: FormControl<string | null | undefined>,

		/** When true, Batch will configure SSH to allow passwordless login between VMs running the Batch tasks in the same TaskGroup. */
		permissiveSsh: FormControl<boolean | null | undefined>,

		/** When true, Batch will populate a file with a list of all VMs assigned to the TaskGroup and set the BATCH_HOSTS_FILE environment variable to the path of that file. Defaults to false. */
		requireHostsFile: FormControl<boolean | null | undefined>,

		/** Scheduling policy for Tasks in the TaskGroup. The default value is AS_SOON_AS_POSSIBLE. */
		schedulingPolicy: FormControl<TaskGroupSchedulingPolicy | null | undefined>,

		/** Number of Tasks in the TaskGroup. Default is 1. */
		taskCount: FormControl<string | null | undefined>,

		/** Max number of tasks that can be run on a VM at the same time. If not specified, the system will decide a value based on available compute resources on a VM and task requirements. */
		taskCountPerNode: FormControl<string | null | undefined>,
	}
	export function CreateTaskGroupFormGroup() {
		return new FormGroup<TaskGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parallelism: new FormControl<string | null | undefined>(undefined),
			permissiveSsh: new FormControl<boolean | null | undefined>(undefined),
			requireHostsFile: new FormControl<boolean | null | undefined>(undefined),
			schedulingPolicy: new FormControl<TaskGroupSchedulingPolicy | null | undefined>(undefined),
			taskCount: new FormControl<string | null | undefined>(undefined),
			taskCountPerNode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TaskGroupSchedulingPolicy { SCHEDULING_POLICY_UNSPECIFIED = 0, AS_SOON_AS_POSSIBLE = 1, IN_ORDER = 2 }


	/** ListJob Response. */
	export interface ListJobsResponse {

		/** Jobs. */
		jobs?: Array<Job>;

		/** Next page token. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListJob Response. */
	export interface ListJobsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListTasks Response. */
	export interface ListTasksResponse {

		/** Next page token. */
		nextPageToken?: string | null;

		/** Tasks. */
		tasks?: Array<Task_>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListTasks Response. */
	export interface ListTasksResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTasksResponseFormGroup() {
		return new FormGroup<ListTasksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Cloud Batch task. */
	export interface Task_ {

		/** Task name. The name is generated from the parent TaskGroup name and 'id' field. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01/tasks/task01". */
		name?: string | null;

		/** Status of a task */
		status?: TaskStatus;
	}

	/** A Cloud Batch task. */
	export interface Task_FormProperties {

		/** Task name. The name is generated from the parent TaskGroup name and 'id' field. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01/tasks/task01". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTask_FormGroup() {
		return new FormGroup<Task_FormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to report agent's state. The Request itself implies the agent is healthy. */
	export interface ReportAgentStateRequest {

		/** VM Agent Info. */
		agentInfo?: AgentInfo;

		/** VM timing information */
		agentTimingInfo?: AgentTimingInfo;

		/** VM Agent Metadata. */
		metadata?: AgentMetadata;
	}

	/** Request to report agent's state. The Request itself implies the agent is healthy. */
	export interface ReportAgentStateRequestFormProperties {
	}
	export function CreateReportAgentStateRequestFormGroup() {
		return new FormGroup<ReportAgentStateRequestFormProperties>({
		});

	}


	/** Response to ReportAgentStateRequest. */
	export interface ReportAgentStateResponse {

		/** Default report interval override */
		defaultReportInterval?: string | null;

		/** Minimum report interval override */
		minReportInterval?: string | null;

		/** Tasks assigned to the agent */
		tasks?: Array<AgentTask>;

		/** If true, the cloud logging for batch agent will use batch.googleapis.com/Job as monitored resource for Batch job related logging. */
		useBatchMonitoredResource?: boolean | null;
	}

	/** Response to ReportAgentStateRequest. */
	export interface ReportAgentStateResponseFormProperties {

		/** Default report interval override */
		defaultReportInterval: FormControl<string | null | undefined>,

		/** Minimum report interval override */
		minReportInterval: FormControl<string | null | undefined>,

		/** If true, the cloud logging for batch agent will use batch.googleapis.com/Job as monitored resource for Batch job related logging. */
		useBatchMonitoredResource: FormControl<boolean | null | undefined>,
	}
	export function CreateReportAgentStateResponseFormGroup() {
		return new FormGroup<ReportAgentStateResponseFormProperties>({
			defaultReportInterval: new FormControl<string | null | undefined>(undefined),
			minReportInterval: new FormControl<string | null | undefined>(undefined),
			useBatchMonitoredResource: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {string} reason Optional. Reason for this deletion.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Empty} Successful response
		 */
		Batch_projects_locations_operations_delete(name: string, reason: string | null | undefined, requestId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&reason=' + (reason == null ? '' : encodeURIComponent(reason)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Batch_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Batch_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Batch_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Batch_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all Jobs for a project within a region.
		 * Get v1/{parent}/jobs
		 * @param {string} parent Parent path.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Optional. Sort results. Supported are "name", "name desc", "create_time", and "create_time desc".
		 * @param {number} pageSize Page size.
		 * @param {string} pageToken Page token.
		 * @return {ListJobsResponse} Successful response
		 */
		Batch_projects_locations_jobs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a Job.
		 * Post v1/{parent}/jobs
		 * @param {string} parent Required. The parent resource name where the Job will be created. Pattern: "projects/{project}/locations/{location}"
		 * @param {string} jobId ID used to uniquely identify the Job within its parent scope. This field should contain at most 63 characters and must start with lowercase characters. Only lowercase characters, numbers and '-' are accepted. The '-' character cannot be the first or the last one. A system generated ID will be used if the field is not set. The job.name field in the request will be ignored and the created resource name of the Job will be "{parent}/jobs/{job_id}".
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Job} Successful response
		 */
		Batch_projects_locations_jobs_create(parent: string, jobId: string | null | undefined, requestId: string | null | undefined, requestBody: Job): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&jobId=' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Report agent's state, e.g. agent status and tasks information
		 * Post v1/{parent}/state:report
		 * @param {string} parent Required. Format: projects/{project}/locations/{location} {project} should be a project number.
		 * @return {ReportAgentStateResponse} Successful response
		 */
		Batch_projects_locations_state_report(parent: string, requestBody: ReportAgentStateRequest): Observable<ReportAgentStateResponse> {
			return this.http.post<ReportAgentStateResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/state:report', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Tasks associated with a job.
		 * Get v1/{parent}/tasks
		 * @param {string} parent Required. Name of a TaskGroup from which Tasks are being requested. Pattern: "projects/{project}/locations/{location}/jobs/{job}/taskGroups/{task_group}"
		 * @param {string} filter Task filter, null filter matches all Tasks. Filter string should be of the format State=TaskStatus.State e.g. State=RUNNING
		 * @param {number} pageSize Page size.
		 * @param {string} pageToken Page token.
		 * @return {ListTasksResponse} Successful response
		 */
		Batch_projects_locations_jobs_taskGroups_tasks_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTasksResponse> {
			return this.http.get<ListTasksResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tasks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

