import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource. */
	export interface AccessConfig {

		/** Name of this access configuration. */
		name?: string;

		/** An external IP address associated with this instance. */
		natIp?: string;

		/** Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported. */
		type?: string;
	}


	/** An action that gets executed during initialization of the replicas. */
	export interface Action {

		/** A list of commands to run, one per line. If any command fails, the whole action is considered a failure and no further actions are run. This also marks the virtual machine or replica as a failure. */
		commands?: Array<string>;

		/** A list of environment variables to use for the commands in this action. */
		envVariables?: Array<EnvVariable>;

		/** If an action's commands on a particular replica do not finish in the specified timeoutMilliSeconds, the replica is considered to be in a FAILING state. No efforts are made to stop any processes that were spawned or created as the result of running the action's commands. The default is the max allowed value, 1 hour (i.e. 3600000 milliseconds). */
		timeoutMilliSeconds?: number;
	}


	/** An environment variable to set for an action. */
	export interface EnvVariable {

		/** Deprecated, do not use. */
		hidden?: boolean;

		/** The name of the environment variable. */
		name?: string;

		/** The value of the variable. */
		value?: string;
	}


	/** Specifies how to attach a disk to a Replica. */
	export interface DiskAttachment {

		/** The device name of this disk. */
		deviceName?: string;

		/** A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server. */
		index?: string;
	}


	/** A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode. */
	export interface ExistingDisk {

		/** Specifies how to attach a disk to a Replica. */
		attachment?: DiskAttachment;

		/** The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool. */
		source?: string;
	}

	export interface HealthCheck {

		/** How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds. */
		checkIntervalSec?: number;

		/** The description for this health check. */
		description?: string;

		/** The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2. */
		healthyThreshold?: number;

		/** The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used. */
		host?: string;

		/** The name of this health check. */
		name?: string;

		/** The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck. */
		path?: string;

		/** The TCP port for the health check requests. */
		port?: number;

		/** How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds. */
		timeoutSec?: number;

		/** The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2. */
		unhealthyThreshold?: number;
	}


	/** A label to apply to this replica pool. */
	export interface Label {

		/** The key for this label. */
		key?: string;

		/** The value of this label. */
		value?: string;
	}


	/** A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource. */
	export interface Metadata {

		/** The fingerprint of the metadata. Required for updating the metadata entries for this instance. */
		fingerPrint?: string;

		/** A list of metadata items. */
		items?: Array<MetadataItem>;
	}


	/** A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource. */
	export interface MetadataItem {

		/** A metadata key. */
		key?: string;

		/** A metadata value. */
		value?: string;
	}


	/** A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource. */
	export interface NetworkInterface {

		/** An array of configurations for this interface. This specifies how this interface is configured to interact with other network services. */
		accessConfigs?: Array<AccessConfig>;

		/** Name the Network resource to which this interface applies. */
		network?: string;

		/** An optional IPV4 internal network address to assign to the instance for this network interface. */
		networkIp?: string;
	}


	/** A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode. */
	export interface NewDisk {

		/** Specifies how to attach a disk to a Replica. */
		attachment?: DiskAttachment;

		/** If true, then this disk will be deleted when the instance is deleted. The default value is true. */
		autoDelete?: boolean;

		/** If true, indicates that this is the root persistent disk. */
		boot?: boolean;

		/** Initialization parameters for creating a new disk. */
		initializeParams?: NewDiskInitializeParams;
	}


	/** Initialization parameters for creating a new disk. */
	export interface NewDiskInitializeParams {

		/** The size of the created disk in gigabytes. */
		diskSizeGb?: string;

		/** Name of the disk type resource describing which disk type to use to create the disk. For example 'pd-ssd' or 'pd-standard'. Default is 'pd-standard' */
		diskType?: string;

		/**
		 * The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as:
		 * http://www.googleapis.com/compute/v1/projects/debian-cloud/ global/images/debian-wheezy-7-vYYYYMMDD
		 */
		sourceImage?: string;
	}

	export interface Pool {

		/** Whether replicas in this pool should be restarted if they experience a failure. The default value is true. */
		autoRestart?: boolean;

		/**
		 * The base instance name to use for the replicas in this pool. This must match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in this replica pool will be named in the format <base-instance-name>-<ID>. The <ID> postfix will be a four character alphanumeric identifier generated by the service.
		 * If this is not specified by the user, a random base instance name is generated by the service.
		 */
		baseInstanceName?: string;

		/** [Output Only] The current number of replicas in the pool. */
		currentNumReplicas?: number;

		/** An optional description of the replica pool. */
		description?: string;

		/** Deprecated. Please use template[].healthChecks instead. */
		healthChecks?: Array<HealthCheck>;

		/** The initial number of replicas this pool should have. You must provide a value greater than or equal to 0. */
		initialNumReplicas?: number;

		/** A list of labels to attach to this replica pool and all created virtual machines in this replica pool. */
		labels?: Array<Label>;

		/** The name of the replica pool. Must follow the regex [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long. */
		name?: string;

		/** Deprecated! Use initial_num_replicas instead. */
		numReplicas?: number;

		/** The list of resource views that should be updated with all the replicas that are managed by this pool. */
		resourceViews?: Array<string>;

		/** [Output Only] A self-link to the replica pool. */
		selfLink?: string;

		/** Deprecated, please use target_pools instead. */
		targetPool?: string;

		/** A list of target pools to update with the replicas that are managed by this pool. If specified, the replicas in this replica pool will be added to the specified target pools for load balancing purposes. The replica pool must live in the same region as the specified target pools. These values must be the target pool resource names, and not fully qualified URLs. */
		targetPools?: Array<string>;

		/** The template used for creating replicas in the pool. */
		template?: Template;

		/** Deprecated! Do not set. */
		type?: string;
	}


	/** The template used for creating replicas in the pool. */
	export interface Template {

		/** An action that gets executed during initialization of the replicas. */
		action?: Action;

		/** A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool. */
		healthChecks?: Array<HealthCheck>;

		/** A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1. */
		version?: string;

		/** Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource. */
		vmParams?: VmParams;
	}


	/** Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource. */
	export interface VmParams {

		/** Deprecated. Please use baseInstanceName instead. */
		baseInstanceName?: string;

		/** Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information. */
		canIpForward?: boolean;

		/** An optional textual description of the instance. */
		description?: string;

		/** A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica. */
		disksToAttach?: Array<ExistingDisk>;

		/** A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica. */
		disksToCreate?: Array<NewDisk>;

		/** The machine type for this instance. The resource name (e.g. n1-standard-1). */
		machineType?: string;

		/** A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource. */
		metadata?: Metadata;

		/** A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine, ONE_TO_ONE_NAT. */
		networkInterfaces?: Array<NetworkInterface>;
		onHostMaintenance?: string;

		/** A list of Service Accounts to enable for this instance. */
		serviceAccounts?: Array<ServiceAccount>;

		/** A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource. */
		tags?: Tag;
	}


	/** A Compute Engine service account, identical to the Compute Engine resource. */
	export interface ServiceAccount {

		/** The service account email address, for example: 123845678986@project.gserviceaccount.com */
		email?: string;

		/** The list of OAuth2 scopes to obtain for the service account, for example: https://www.googleapis.com/auth/devstorage.full_control */
		scopes?: Array<string>;
	}


	/** A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource. */
	export interface Tag {

		/** The fingerprint of the tag. Required for updating the list of tags. */
		fingerPrint?: string;

		/** Items contained in this tag. */
		items?: Array<string>;
	}

	export interface PoolsDeleteRequest {

		/** If there are instances you would like to keep, you can specify them here. These instances won't be deleted, but the associated replica objects will be removed. */
		abandonInstances?: Array<string>;
	}

	export interface PoolsListResponse {
		nextPageToken?: string;
		resources?: Array<Pool>;
	}


	/** An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas. */
	export interface Replica {

		/** [Output Only] The name of the Replica object. */
		name?: string;

		/** [Output Only] The self-link of the Replica. */
		selfLink?: string;

		/** The current status of a Replica. */
		status?: ReplicaStatus;
	}


	/** The current status of a Replica. */
	export interface ReplicaStatus {

		/** [Output Only] Human-readable details about the current state of the replica */
		details?: string;

		/** [Output Only] The state of the Replica. */
		state?: string;

		/** [Output Only] The template used to build the replica. */
		templateVersion?: string;

		/** [Output Only] Link to the virtual machine that this Replica represents. */
		vmLink?: string;

		/** [Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned. */
		vmStartTime?: string;
	}

	export interface ReplicasDeleteRequest {

		/** Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica. */
		abandonInstance?: boolean;
	}

	export interface ReplicasListResponse {
		nextPageToken?: string;
		resources?: Array<Replica>;
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
		Replicapool_pools_list(projectName: string, zone: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
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
		Replicapool_replicas_list(projectName: string, zone: string, poolName: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
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
		Replicapool_pools_resize(projectName: string, zone: string, poolName: string, numReplicas: number): Observable<HttpResponse<string>> {
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

