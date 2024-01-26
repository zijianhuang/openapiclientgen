import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource. */
	export interface AccessConfig {

		/** Name of this access configuration. */
		name?: string | null;

		/** An external IP address associated with this instance. */
		natIp?: string | null;

		/** Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported. */
		type?: string | null;
	}

	/** A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource. */
	export interface AccessConfigFormProperties {

		/** Name of this access configuration. */
		name: FormControl<string | null | undefined>,

		/** An external IP address associated with this instance. */
		natIp: FormControl<string | null | undefined>,

		/** Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAccessConfigFormGroup() {
		return new FormGroup<AccessConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			natIp: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An action that gets executed during initialization of the replicas. */
	export interface Action {

		/** A list of commands to run, one per line. If any command fails, the whole action is considered a failure and no further actions are run. This also marks the virtual machine or replica as a failure. */
		commands?: Array<string>;

		/** A list of environment variables to use for the commands in this action. */
		envVariables?: Array<EnvVariable>;

		/** If an action's commands on a particular replica do not finish in the specified timeoutMilliSeconds, the replica is considered to be in a FAILING state. No efforts are made to stop any processes that were spawned or created as the result of running the action's commands. The default is the max allowed value, 1 hour (i.e. 3600000 milliseconds). */
		timeoutMilliSeconds?: number | null;
	}

	/** An action that gets executed during initialization of the replicas. */
	export interface ActionFormProperties {

		/** If an action's commands on a particular replica do not finish in the specified timeoutMilliSeconds, the replica is considered to be in a FAILING state. No efforts are made to stop any processes that were spawned or created as the result of running the action's commands. The default is the max allowed value, 1 hour (i.e. 3600000 milliseconds). */
		timeoutMilliSeconds: FormControl<number | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			timeoutMilliSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An environment variable to set for an action. */
	export interface EnvVariable {

		/** Deprecated, do not use. */
		hidden?: boolean | null;

		/** The name of the environment variable. */
		name?: string | null;

		/** The value of the variable. */
		value?: string | null;
	}

	/** An environment variable to set for an action. */
	export interface EnvVariableFormProperties {

		/** Deprecated, do not use. */
		hidden: FormControl<boolean | null | undefined>,

		/** The name of the environment variable. */
		name: FormControl<string | null | undefined>,

		/** The value of the variable. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvVariableFormGroup() {
		return new FormGroup<EnvVariableFormProperties>({
			hidden: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how to attach a disk to a Replica. */
	export interface DiskAttachment {

		/** The device name of this disk. */
		deviceName?: string | null;

		/** A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server. */
		index?: number | null;
	}

	/** Specifies how to attach a disk to a Replica. */
	export interface DiskAttachmentFormProperties {

		/** The device name of this disk. */
		deviceName: FormControl<string | null | undefined>,

		/** A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server. */
		index: FormControl<number | null | undefined>,
	}
	export function CreateDiskAttachmentFormGroup() {
		return new FormGroup<DiskAttachmentFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode. */
	export interface ExistingDisk {

		/** Specifies how to attach a disk to a Replica. */
		attachment?: DiskAttachment;

		/** The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool. */
		source?: string | null;
	}

	/** A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode. */
	export interface ExistingDiskFormProperties {

		/** The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateExistingDiskFormGroup() {
		return new FormGroup<ExistingDiskFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthCheck {

		/** How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds. */
		checkIntervalSec?: number | null;

		/** The description for this health check. */
		description?: string | null;

		/** The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2. */
		healthyThreshold?: number | null;

		/** The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used. */
		host?: string | null;

		/** The name of this health check. */
		name?: string | null;

		/** The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck. */
		path?: string | null;

		/** The TCP port for the health check requests. */
		port?: number | null;

		/** How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds. */
		timeoutSec?: number | null;

		/** The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2. */
		unhealthyThreshold?: number | null;
	}
	export interface HealthCheckFormProperties {

		/** How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds. */
		checkIntervalSec: FormControl<number | null | undefined>,

		/** The description for this health check. */
		description: FormControl<string | null | undefined>,

		/** The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2. */
		healthyThreshold: FormControl<number | null | undefined>,

		/** The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used. */
		host: FormControl<string | null | undefined>,

		/** The name of this health check. */
		name: FormControl<string | null | undefined>,

		/** The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck. */
		path: FormControl<string | null | undefined>,

		/** The TCP port for the health check requests. */
		port: FormControl<number | null | undefined>,

		/** How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds. */
		timeoutSec: FormControl<number | null | undefined>,

		/** The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2. */
		unhealthyThreshold: FormControl<number | null | undefined>,
	}
	export function CreateHealthCheckFormGroup() {
		return new FormGroup<HealthCheckFormProperties>({
			checkIntervalSec: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			healthyThreshold: new FormControl<number | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			timeoutSec: new FormControl<number | null | undefined>(undefined),
			unhealthyThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A label to apply to this replica pool. */
	export interface Label {

		/** The key for this label. */
		key?: string | null;

		/** The value of this label. */
		value?: string | null;
	}

	/** A label to apply to this replica pool. */
	export interface LabelFormProperties {

		/** The key for this label. */
		key: FormControl<string | null | undefined>,

		/** The value of this label. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource. */
	export interface Metadata {

		/** The fingerprint of the metadata. Required for updating the metadata entries for this instance. */
		fingerPrint?: string | null;

		/** A list of metadata items. */
		items?: Array<MetadataItem>;
	}

	/** A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource. */
	export interface MetadataFormProperties {

		/** The fingerprint of the metadata. Required for updating the metadata entries for this instance. */
		fingerPrint: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			fingerPrint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource. */
	export interface MetadataItem {

		/** A metadata key. */
		key?: string | null;

		/** A metadata value. */
		value?: string | null;
	}

	/** A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource. */
	export interface MetadataItemFormProperties {

		/** A metadata key. */
		key: FormControl<string | null | undefined>,

		/** A metadata value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetadataItemFormGroup() {
		return new FormGroup<MetadataItemFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource. */
	export interface NetworkInterface {

		/** An array of configurations for this interface. This specifies how this interface is configured to interact with other network services. */
		accessConfigs?: Array<AccessConfig>;

		/** Name the Network resource to which this interface applies. */
		network?: string | null;

		/** An optional IPV4 internal network address to assign to the instance for this network interface. */
		networkIp?: string | null;
	}

	/** A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource. */
	export interface NetworkInterfaceFormProperties {

		/** Name the Network resource to which this interface applies. */
		network: FormControl<string | null | undefined>,

		/** An optional IPV4 internal network address to assign to the instance for this network interface. */
		networkIp: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			networkIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode. */
	export interface NewDisk {

		/** Specifies how to attach a disk to a Replica. */
		attachment?: DiskAttachment;

		/** If true, then this disk will be deleted when the instance is deleted. The default value is true. */
		autoDelete?: boolean | null;

		/** If true, indicates that this is the root persistent disk. */
		boot?: boolean | null;

		/** Initialization parameters for creating a new disk. */
		initializeParams?: NewDiskInitializeParams;
	}

	/** A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode. */
	export interface NewDiskFormProperties {

		/** If true, then this disk will be deleted when the instance is deleted. The default value is true. */
		autoDelete: FormControl<boolean | null | undefined>,

		/** If true, indicates that this is the root persistent disk. */
		boot: FormControl<boolean | null | undefined>,
	}
	export function CreateNewDiskFormGroup() {
		return new FormGroup<NewDiskFormProperties>({
			autoDelete: new FormControl<boolean | null | undefined>(undefined),
			boot: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Initialization parameters for creating a new disk. */
	export interface NewDiskInitializeParams {

		/** The size of the created disk in gigabytes. */
		diskSizeGb?: string | null;

		/** Name of the disk type resource describing which disk type to use to create the disk. For example 'pd-ssd' or 'pd-standard'. Default is 'pd-standard' */
		diskType?: string | null;

		/**
		 * The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as:
		 * http://www.googleapis.com/compute/v1/projects/debian-cloud/ global/images/debian-wheezy-7-vYYYYMMDD
		 */
		sourceImage?: string | null;
	}

	/** Initialization parameters for creating a new disk. */
	export interface NewDiskInitializeParamsFormProperties {

		/** The size of the created disk in gigabytes. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Name of the disk type resource describing which disk type to use to create the disk. For example 'pd-ssd' or 'pd-standard'. Default is 'pd-standard' */
		diskType: FormControl<string | null | undefined>,

		/**
		 * The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as:
		 * http://www.googleapis.com/compute/v1/projects/debian-cloud/ global/images/debian-wheezy-7-vYYYYMMDD
		 */
		sourceImage: FormControl<string | null | undefined>,
	}
	export function CreateNewDiskInitializeParamsFormGroup() {
		return new FormGroup<NewDiskInitializeParamsFormProperties>({
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			diskType: new FormControl<string | null | undefined>(undefined),
			sourceImage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pool {

		/** Whether replicas in this pool should be restarted if they experience a failure. The default value is true. */
		autoRestart?: boolean | null;

		/**
		 * The base instance name to use for the replicas in this pool. This must match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in this replica pool will be named in the format <base-instance-name>-<ID>. The <ID> postfix will be a four character alphanumeric identifier generated by the service.
		 * If this is not specified by the user, a random base instance name is generated by the service.
		 */
		baseInstanceName?: string | null;

		/** [Output Only] The current number of replicas in the pool. */
		currentNumReplicas?: number | null;

		/** An optional description of the replica pool. */
		description?: string | null;

		/** Deprecated. Please use template[].healthChecks instead. */
		healthChecks?: Array<HealthCheck>;

		/** The initial number of replicas this pool should have. You must provide a value greater than or equal to 0. */
		initialNumReplicas?: number | null;

		/** A list of labels to attach to this replica pool and all created virtual machines in this replica pool. */
		labels?: Array<Label>;

		/** The name of the replica pool. Must follow the regex [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long. */
		name?: string | null;

		/** Deprecated! Use initial_num_replicas instead. */
		numReplicas?: number | null;

		/** The list of resource views that should be updated with all the replicas that are managed by this pool. */
		resourceViews?: Array<string>;

		/** [Output Only] A self-link to the replica pool. */
		selfLink?: string | null;

		/** Deprecated, please use target_pools instead. */
		targetPool?: string | null;

		/** A list of target pools to update with the replicas that are managed by this pool. If specified, the replicas in this replica pool will be added to the specified target pools for load balancing purposes. The replica pool must live in the same region as the specified target pools. These values must be the target pool resource names, and not fully qualified URLs. */
		targetPools?: Array<string>;

		/** The template used for creating replicas in the pool. */
		template?: Template;

		/** Deprecated! Do not set. */
		type?: string | null;
	}
	export interface PoolFormProperties {

		/** Whether replicas in this pool should be restarted if they experience a failure. The default value is true. */
		autoRestart: FormControl<boolean | null | undefined>,

		/**
		 * The base instance name to use for the replicas in this pool. This must match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in this replica pool will be named in the format <base-instance-name>-<ID>. The <ID> postfix will be a four character alphanumeric identifier generated by the service.
		 * If this is not specified by the user, a random base instance name is generated by the service.
		 */
		baseInstanceName: FormControl<string | null | undefined>,

		/** [Output Only] The current number of replicas in the pool. */
		currentNumReplicas: FormControl<number | null | undefined>,

		/** An optional description of the replica pool. */
		description: FormControl<string | null | undefined>,

		/** The initial number of replicas this pool should have. You must provide a value greater than or equal to 0. */
		initialNumReplicas: FormControl<number | null | undefined>,

		/** The name of the replica pool. Must follow the regex [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long. */
		name: FormControl<string | null | undefined>,

		/** Deprecated! Use initial_num_replicas instead. */
		numReplicas: FormControl<number | null | undefined>,

		/** [Output Only] A self-link to the replica pool. */
		selfLink: FormControl<string | null | undefined>,

		/** Deprecated, please use target_pools instead. */
		targetPool: FormControl<string | null | undefined>,

		/** Deprecated! Do not set. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePoolFormGroup() {
		return new FormGroup<PoolFormProperties>({
			autoRestart: new FormControl<boolean | null | undefined>(undefined),
			baseInstanceName: new FormControl<string | null | undefined>(undefined),
			currentNumReplicas: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			initialNumReplicas: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numReplicas: new FormControl<number | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			targetPool: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The template used for creating replicas in the pool. */
	export interface Template {

		/** An action that gets executed during initialization of the replicas. */
		action?: Action;

		/** A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool. */
		healthChecks?: Array<HealthCheck>;

		/** A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1. */
		version?: string | null;

		/** Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource. */
		vmParams?: VmParams;
	}

	/** The template used for creating replicas in the pool. */
	export interface TemplateFormProperties {

		/** A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource. */
	export interface VmParams {

		/** Deprecated. Please use baseInstanceName instead. */
		baseInstanceName?: string | null;

		/** Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information. */
		canIpForward?: boolean | null;

		/** An optional textual description of the instance. */
		description?: string | null;

		/** A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica. */
		disksToAttach?: Array<ExistingDisk>;

		/** A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica. */
		disksToCreate?: Array<NewDisk>;

		/** The machine type for this instance. The resource name (e.g. n1-standard-1). */
		machineType?: string | null;

		/** A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource. */
		metadata?: Metadata;

		/** A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine, ONE_TO_ONE_NAT. */
		networkInterfaces?: Array<NetworkInterface>;
		onHostMaintenance?: string | null;

		/** A list of Service Accounts to enable for this instance. */
		serviceAccounts?: Array<ServiceAccount>;

		/** A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource. */
		tags?: Tag;
	}

	/** Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource. */
	export interface VmParamsFormProperties {

		/** Deprecated. Please use baseInstanceName instead. */
		baseInstanceName: FormControl<string | null | undefined>,

		/** Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information. */
		canIpForward: FormControl<boolean | null | undefined>,

		/** An optional textual description of the instance. */
		description: FormControl<string | null | undefined>,

		/** The machine type for this instance. The resource name (e.g. n1-standard-1). */
		machineType: FormControl<string | null | undefined>,
		onHostMaintenance: FormControl<string | null | undefined>,
	}
	export function CreateVmParamsFormGroup() {
		return new FormGroup<VmParamsFormProperties>({
			baseInstanceName: new FormControl<string | null | undefined>(undefined),
			canIpForward: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			onHostMaintenance: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Compute Engine service account, identical to the Compute Engine resource. */
	export interface ServiceAccount {

		/** The service account email address, for example: 123845678986@project.gserviceaccount.com */
		email?: string | null;

		/** The list of OAuth2 scopes to obtain for the service account, for example: https://www.googleapis.com/auth/devstorage.full_control */
		scopes?: Array<string>;
	}

	/** A Compute Engine service account, identical to the Compute Engine resource. */
	export interface ServiceAccountFormProperties {

		/** The service account email address, for example: 123845678986@project.gserviceaccount.com */
		email: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountFormGroup() {
		return new FormGroup<ServiceAccountFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource. */
	export interface Tag {

		/** The fingerprint of the tag. Required for updating the list of tags. */
		fingerPrint?: string | null;

		/** Items contained in this tag. */
		items?: Array<string>;
	}

	/** A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource. */
	export interface TagFormProperties {

		/** The fingerprint of the tag. Required for updating the list of tags. */
		fingerPrint: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			fingerPrint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoolsDeleteRequest {

		/** If there are instances you would like to keep, you can specify them here. These instances won't be deleted, but the associated replica objects will be removed. */
		abandonInstances?: Array<string>;
	}
	export interface PoolsDeleteRequestFormProperties {
	}
	export function CreatePoolsDeleteRequestFormGroup() {
		return new FormGroup<PoolsDeleteRequestFormProperties>({
		});

	}

	export interface PoolsListResponse {
		nextPageToken?: string | null;
		resources?: Array<Pool>;
	}
	export interface PoolsListResponseFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePoolsListResponseFormGroup() {
		return new FormGroup<PoolsListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas. */
	export interface Replica {

		/** [Output Only] The name of the Replica object. */
		name?: string | null;

		/** [Output Only] The self-link of the Replica. */
		selfLink?: string | null;

		/** The current status of a Replica. */
		status?: ReplicaStatus;
	}

	/** An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas. */
	export interface ReplicaFormProperties {

		/** [Output Only] The name of the Replica object. */
		name: FormControl<string | null | undefined>,

		/** [Output Only] The self-link of the Replica. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateReplicaFormGroup() {
		return new FormGroup<ReplicaFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The current status of a Replica. */
	export interface ReplicaStatus {

		/** [Output Only] Human-readable details about the current state of the replica */
		details?: string | null;

		/** [Output Only] The state of the Replica. */
		state?: string | null;

		/** [Output Only] The template used to build the replica. */
		templateVersion?: string | null;

		/** [Output Only] Link to the virtual machine that this Replica represents. */
		vmLink?: string | null;

		/** [Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned. */
		vmStartTime?: string | null;
	}

	/** The current status of a Replica. */
	export interface ReplicaStatusFormProperties {

		/** [Output Only] Human-readable details about the current state of the replica */
		details: FormControl<string | null | undefined>,

		/** [Output Only] The state of the Replica. */
		state: FormControl<string | null | undefined>,

		/** [Output Only] The template used to build the replica. */
		templateVersion: FormControl<string | null | undefined>,

		/** [Output Only] Link to the virtual machine that this Replica represents. */
		vmLink: FormControl<string | null | undefined>,

		/** [Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned. */
		vmStartTime: FormControl<string | null | undefined>,
	}
	export function CreateReplicaStatusFormGroup() {
		return new FormGroup<ReplicaStatusFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			templateVersion: new FormControl<string | null | undefined>(undefined),
			vmLink: new FormControl<string | null | undefined>(undefined),
			vmStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplicasDeleteRequest {

		/** Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica. */
		abandonInstance?: boolean | null;
	}
	export interface ReplicasDeleteRequestFormProperties {

		/** Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica. */
		abandonInstance: FormControl<boolean | null | undefined>,
	}
	export function CreateReplicasDeleteRequestFormGroup() {
		return new FormGroup<ReplicasDeleteRequestFormProperties>({
			abandonInstance: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReplicasListResponse {
		nextPageToken?: string | null;
		resources?: Array<Replica>;
	}
	export interface ReplicasListResponseFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateReplicasListResponseFormGroup() {
		return new FormGroup<ReplicasListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all replica pools.
		 * Get {projectName}/zones/{zone}/pools
		 * @param {string} projectName The project ID for this request.
		 * @param {string} zone The zone for this replica pool.
		 * @param {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
		 * @param {string} pageToken Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
		 * @return {void} Successful response
		 */
		Replicapool_pools_list(projectName: string, zone: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (projectName == null ? '' : encodeURIComponent(projectName)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/pools&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new replica pool.
		 * Post {projectName}/zones/{zone}/pools
		 * @param {string} projectName The project ID for this replica pool.
		 * @param {string} zone The zone for this replica pool.
		 * @return {void} Successful response
		 */
		Replicapool_pools_insert(projectName: string, zone: string, requestBody: Pool): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (projectName == null ? '' : encodeURIComponent(projectName)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/pools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a single replica pool.
		 * Get {projectName}/zones/{zone}/pools/{poolName}
		 * @param {string} projectName The project ID for this replica pool.
		 * @param {string} zone The zone for this replica pool.
		 * @param {string} poolName The name of the replica pool for this request.
		 * @return {void} Successful response
		 */
		Replicapool_pools_get(projectName: string, zone: string, poolName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (projectName == null ? '' : encodeURIComponent(projectName)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a replica pool.
		 * Post {projectName}/zones/{zone}/pools/{poolName}
		 * @param {string} projectName The project ID for this replica pool.
		 * @param {string} zone The zone for this replica pool.
		 * @param {string} poolName The name of the replica pool for this request.
		 * @return {void} Successful response
		 */
		Replicapool_pools_delete(projectName: string, zone: string, poolName: string, requestBody: PoolsDeleteRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (projectName == null ? '' : encodeURIComponent(projectName)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all replicas in a pool.
		 * Get {projectName}/zones/{zone}/pools/{poolName}/replicas
		 * @param {string} projectName The project ID for this request.
		 * @param {string} zone The zone where the replica pool lives.
		 * @param {string} poolName The replica pool name for this request.
		 * @param {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
		 * @param {string} pageToken Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
		 * @return {void} Successful response
		 */
		Replicapool_replicas_list(projectName: string, zone: string, poolName: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (projectName == null ? '' : encodeURIComponent(projectName)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/replicas&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specific replica.
		 * Get {projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}
		 * @param {string} projectName The project ID for this request.
		 * @param {string} zone The zone where the replica lives.
		 * @param {string} poolName The replica pool name for this request.
		 * @param {string} replicaName The name of the replica for this request.
		 * @return {void} Successful response
		 */
		Replicapool_replicas_get(projectName: string, zone: string, poolName: string, replicaName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (projectName == null ? '' : encodeURIComponent(projectName)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/replicas/' + (replicaName == null ? '' : encodeURIComponent(replicaName)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a replica from the pool.
		 * Post {projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}
		 * @param {string} projectName The project ID for this request.
		 * @param {string} zone The zone where the replica lives.
		 * @param {string} poolName The replica pool name for this request.
		 * @param {string} replicaName The name of the replica for this request.
		 * @return {void} Successful response
		 */
		Replicapool_replicas_delete(projectName: string, zone: string, poolName: string, replicaName: string, requestBody: ReplicasDeleteRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (projectName == null ? '' : encodeURIComponent(projectName)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/replicas/' + (replicaName == null ? '' : encodeURIComponent(replicaName)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restarts a replica in a pool.
		 * Post {projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}/restart
		 * @param {string} projectName The project ID for this request.
		 * @param {string} zone The zone where the replica lives.
		 * @param {string} poolName The replica pool name for this request.
		 * @param {string} replicaName The name of the replica for this request.
		 * @return {void} Successful response
		 */
		Replicapool_replicas_restart(projectName: string, zone: string, poolName: string, replicaName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (projectName == null ? '' : encodeURIComponent(projectName)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/replicas/' + (replicaName == null ? '' : encodeURIComponent(replicaName)) + '/restart', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
		 * Post {projectName}/zones/{zone}/pools/{poolName}/resize
		 * @param {string} projectName The project ID for this replica pool.
		 * @param {string} zone The zone for this replica pool.
		 * @param {string} poolName The name of the replica pool for this request.
		 * @param {number} numReplicas The desired number of replicas to resize to. If this number is larger than the existing number of replicas, new replicas will be added. If the number is smaller, then existing replicas will be deleted.
		 * @return {void} Successful response
		 */
		Replicapool_pools_resize(projectName: string, zone: string, poolName: string, numReplicas: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (projectName == null ? '' : encodeURIComponent(projectName)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/resize&numReplicas=' + numReplicas + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the template used by the pool.
		 * Post {projectName}/zones/{zone}/pools/{poolName}/updateTemplate
		 * @param {string} projectName The project ID for this replica pool.
		 * @param {string} zone The zone for this replica pool.
		 * @param {string} poolName The name of the replica pool for this request.
		 * @return {void} Successful response
		 */
		Replicapool_pools_updatetemplate(projectName: string, zone: string, poolName: string, requestBody: Template): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (projectName == null ? '' : encodeURIComponent(projectName)) + '/zones/' + (zone == null ? '' : encodeURIComponent(zone)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/updateTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

