import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The autoscale request parameters */
	export interface Autoscale {

		/** The load-based autoscale request parameters */
		capacity?: AutoscaleCapacity;

		/** Schedule-based autoscale request parameters */
		recurrence?: AutoscaleRecurrence;
	}

	/** The autoscale request parameters */
	export interface AutoscaleFormProperties {
	}
	export function CreateAutoscaleFormGroup() {
		return new FormGroup<AutoscaleFormProperties>({
		});

	}


	/** The load-based autoscale request parameters */
	export interface AutoscaleCapacity {

		/**
		 * The maximum instance count of the cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxInstanceCount?: number | null;

		/**
		 * The minimum instance count of the cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minInstanceCount?: number | null;
	}

	/** The load-based autoscale request parameters */
	export interface AutoscaleCapacityFormProperties {

		/**
		 * The maximum instance count of the cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxInstanceCount: FormControl<number | null | undefined>,

		/**
		 * The minimum instance count of the cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateAutoscaleCapacityFormGroup() {
		return new FormGroup<AutoscaleCapacityFormProperties>({
			maxInstanceCount: new FormControl<number | null | undefined>(undefined),
			minInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Schedule-based autoscale request parameters */
	export interface AutoscaleRecurrence {

		/** Array of schedule-based autoscale rules */
		schedule?: Array<AutoscaleSchedule>;

		/** The time zone for the autoscale schedule times */
		timeZone?: string | null;
	}

	/** Schedule-based autoscale request parameters */
	export interface AutoscaleRecurrenceFormProperties {

		/** The time zone for the autoscale schedule times */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateAutoscaleRecurrenceFormGroup() {
		return new FormGroup<AutoscaleRecurrenceFormProperties>({
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for a schedule-based autoscale rule, consisting of an array of days + a time and capacity */
	export interface AutoscaleSchedule {

		/** Days of the week for a schedule-based autoscale rule */
		days?: Array<string>;

		/** Time and capacity request parameters */
		timeAndCapacity?: AutoscaleTimeAndCapacity;
	}

	/** Parameters for a schedule-based autoscale rule, consisting of an array of days + a time and capacity */
	export interface AutoscaleScheduleFormProperties {
	}
	export function CreateAutoscaleScheduleFormGroup() {
		return new FormGroup<AutoscaleScheduleFormProperties>({
		});

	}


	/** Time and capacity request parameters */
	export interface AutoscaleTimeAndCapacity {

		/**
		 * The maximum instance count of the cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxInstanceCount?: number | null;

		/**
		 * The minimum instance count of the cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minInstanceCount?: number | null;

		/** 24-hour time in the form xx:xx */
		time?: string | null;
	}

	/** Time and capacity request parameters */
	export interface AutoscaleTimeAndCapacityFormProperties {

		/**
		 * The maximum instance count of the cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxInstanceCount: FormControl<number | null | undefined>,

		/**
		 * The minimum instance count of the cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minInstanceCount: FormControl<number | null | undefined>,

		/** 24-hour time in the form xx:xx */
		time: FormControl<string | null | undefined>,
	}
	export function CreateAutoscaleTimeAndCapacityFormGroup() {
		return new FormGroup<AutoscaleTimeAndCapacityFormProperties>({
			maxInstanceCount: new FormControl<number | null | undefined>(undefined),
			minInstanceCount: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information of AAD security group. */
	export interface ClientGroupInfo {

		/** The AAD security group id. */
		groupId?: string | null;

		/** The AAD security group name. */
		groupName?: string | null;
	}

	/** The information of AAD security group. */
	export interface ClientGroupInfoFormProperties {

		/** The AAD security group id. */
		groupId: FormControl<string | null | undefined>,

		/** The AAD security group name. */
		groupName: FormControl<string | null | undefined>,
	}
	export function CreateClientGroupInfoFormGroup() {
		return new FormGroup<ClientGroupInfoFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The HDInsight cluster. */
	export interface Cluster extends TrackedResource {

		/** The ETag for the resource */
		etag?: string | null;

		/** Identity for the cluster. */
		identity?: ClusterIdentity;

		/** The properties of cluster. */
		properties?: ClusterGetProperties;
	}

	/** The HDInsight cluster. */
	export interface ClusterFormProperties extends TrackedResourceFormProperties {

		/** The ETag for the resource */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The CreateCluster request parameters. */
	export interface ClusterCreateParametersExtended {

		/** Identity for the cluster. */
		identity?: ClusterIdentity;

		/** The location of the cluster. */
		location?: string | null;

		/** The cluster create parameters. */
		properties?: ClusterCreateProperties;

		/** The resource tags. */
		tags?: {[id: string]: string };
	}

	/** The CreateCluster request parameters. */
	export interface ClusterCreateParametersExtendedFormProperties {

		/** The location of the cluster. */
		location: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateClusterCreateParametersExtendedFormGroup() {
		return new FormGroup<ClusterCreateParametersExtendedFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The cluster create parameters. */
	export interface ClusterCreateProperties {

		/** The cluster definition. */
		clusterDefinition?: ClusterDefinition;

		/** The version of the cluster. */
		clusterVersion?: string | null;

		/** Describes the compute profile. */
		computeProfile?: ComputeProfile;

		/** The disk encryption properties */
		diskEncryptionProperties?: DiskEncryptionProperties;

		/** The kafka rest proxy configuration which contains AAD security group information. */
		kafkaRestProperties?: KafkaRestProperties;

		/** The type of operating system. */
		osType?: ClusterCreatePropertiesOsType | null;

		/** The security profile which contains Ssh public key for the HDInsight cluster. */
		securityProfile?: SecurityProfile;

		/** The storage profile. */
		storageProfile?: StorageProfile;

		/** The cluster tier. */
		tier?: ClusterCreatePropertiesTier | null;
	}

	/** The cluster create parameters. */
	export interface ClusterCreatePropertiesFormProperties {

		/** The version of the cluster. */
		clusterVersion: FormControl<string | null | undefined>,

		/** The type of operating system. */
		osType: FormControl<ClusterCreatePropertiesOsType | null | undefined>,

		/** The cluster tier. */
		tier: FormControl<ClusterCreatePropertiesTier | null | undefined>,
	}
	export function CreateClusterCreatePropertiesFormGroup() {
		return new FormGroup<ClusterCreatePropertiesFormProperties>({
			clusterVersion: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<ClusterCreatePropertiesOsType | null | undefined>(undefined),
			tier: new FormControl<ClusterCreatePropertiesTier | null | undefined>(undefined),
		});

	}

	export enum ClusterCreatePropertiesOsType { Windows = 'Windows', Linux = 'Linux' }

	export enum ClusterCreatePropertiesTier { Standard = 'Standard', Premium = 'Premium' }


	/** The cluster definition. */
	export interface ClusterDefinition {

		/** The link to the blueprint. */
		blueprint?: string | null;

		/** The versions of different services in the cluster. */
		componentVersion?: {[id: string]: string };

		/** The cluster configurations. */
		configurations?: string | null;

		/** The type of cluster. */
		kind?: string | null;
	}

	/** The cluster definition. */
	export interface ClusterDefinitionFormProperties {

		/** The link to the blueprint. */
		blueprint: FormControl<string | null | undefined>,

		/** The versions of different services in the cluster. */
		componentVersion: FormControl<{[id: string]: string } | null | undefined>,

		/** The cluster configurations. */
		configurations: FormControl<string | null | undefined>,

		/** The type of cluster. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateClusterDefinitionFormGroup() {
		return new FormGroup<ClusterDefinitionFormProperties>({
			blueprint: new FormControl<string | null | undefined>(undefined),
			componentVersion: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			configurations: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Disk Encryption Cluster request parameters. */
	export interface ClusterDiskEncryptionParameters {

		/** Key name that is used for enabling disk encryption. */
		keyName?: string | null;

		/** Specific key version that is used for enabling disk encryption. */
		keyVersion?: string | null;

		/** Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net */
		vaultUri?: string | null;
	}

	/** The Disk Encryption Cluster request parameters. */
	export interface ClusterDiskEncryptionParametersFormProperties {

		/** Key name that is used for enabling disk encryption. */
		keyName: FormControl<string | null | undefined>,

		/** Specific key version that is used for enabling disk encryption. */
		keyVersion: FormControl<string | null | undefined>,

		/** Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net */
		vaultUri: FormControl<string | null | undefined>,
	}
	export function CreateClusterDiskEncryptionParametersFormGroup() {
		return new FormGroup<ClusterDiskEncryptionParametersFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined),
			keyVersion: new FormControl<string | null | undefined>(undefined),
			vaultUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of cluster. */
	export interface ClusterGetProperties {

		/**
		 * The cluster definition.
		 * Required
		 */
		clusterDefinition: ClusterDefinition;

		/** The state of the cluster. */
		clusterState?: string | null;

		/** The version of the cluster. */
		clusterVersion?: string | null;

		/** Describes the compute profile. */
		computeProfile?: ComputeProfile;

		/** The list of connectivity endpoints. */
		connectivityEndpoints?: Array<ConnectivityEndpoint>;

		/** The date on which the cluster was created. */
		createdDate?: string | null;

		/** The disk encryption properties */
		diskEncryptionProperties?: DiskEncryptionProperties;

		/** The list of errors. */
		errors?: Array<Errors>;

		/** The kafka rest proxy configuration which contains AAD security group information. */
		kafkaRestProperties?: KafkaRestProperties;

		/** The type of operating system. */
		osType?: ClusterCreatePropertiesOsType | null;

		/** The provisioning state, which only appears in the response. */
		provisioningState?: ClusterGetPropertiesProvisioningState | null;

		/** The quota properties for the cluster. */
		quotaInfo?: QuotaInfo;

		/** The security profile which contains Ssh public key for the HDInsight cluster. */
		securityProfile?: SecurityProfile;

		/** The cluster tier. */
		tier?: ClusterCreatePropertiesTier | null;
	}

	/** The properties of cluster. */
	export interface ClusterGetPropertiesFormProperties {

		/** The state of the cluster. */
		clusterState: FormControl<string | null | undefined>,

		/** The version of the cluster. */
		clusterVersion: FormControl<string | null | undefined>,

		/** The date on which the cluster was created. */
		createdDate: FormControl<string | null | undefined>,

		/** The type of operating system. */
		osType: FormControl<ClusterCreatePropertiesOsType | null | undefined>,

		/** The provisioning state, which only appears in the response. */
		provisioningState: FormControl<ClusterGetPropertiesProvisioningState | null | undefined>,

		/** The cluster tier. */
		tier: FormControl<ClusterCreatePropertiesTier | null | undefined>,
	}
	export function CreateClusterGetPropertiesFormGroup() {
		return new FormGroup<ClusterGetPropertiesFormProperties>({
			clusterState: new FormControl<string | null | undefined>(undefined),
			clusterVersion: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<ClusterCreatePropertiesOsType | null | undefined>(undefined),
			provisioningState: new FormControl<ClusterGetPropertiesProvisioningState | null | undefined>(undefined),
			tier: new FormControl<ClusterCreatePropertiesTier | null | undefined>(undefined),
		});

	}


	/** The connectivity properties */
	export interface ConnectivityEndpoint {

		/** The location of the endpoint. */
		location?: string | null;

		/** The name of the endpoint. */
		name?: string | null;

		/**
		 * The port to connect to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** The protocol of the endpoint. */
		protocol?: string | null;
	}

	/** The connectivity properties */
	export interface ConnectivityEndpointFormProperties {

		/** The location of the endpoint. */
		location: FormControl<string | null | undefined>,

		/** The name of the endpoint. */
		name: FormControl<string | null | undefined>,

		/**
		 * The port to connect to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** The protocol of the endpoint. */
		protocol: FormControl<string | null | undefined>,
	}
	export function CreateConnectivityEndpointFormGroup() {
		return new FormGroup<ConnectivityEndpointFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error message associated with the cluster creation. */
	export interface Errors {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;
	}

	/** The error message associated with the cluster creation. */
	export interface ErrorsFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorsFormGroup() {
		return new FormGroup<ErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterGetPropertiesProvisioningState { InProgress = 'InProgress', Failed = 'Failed', Succeeded = 'Succeeded', Canceled = 'Canceled', Deleting = 'Deleting' }


	/** Identity for the cluster. */
	export interface ClusterIdentity {

		/** The principal id of cluster identity. This property will only be provided for a system assigned identity. */
		principalId?: string | null;

		/** The tenant id associated with the cluster. This property will only be provided for a system assigned identity. */
		tenantId?: string | null;

		/** The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. */
		type?: ClusterIdentityType | null;

		/** The list of user identities associated with the cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities?: {[id: string]: ClusterIdentityUserAssignedIdentities };
	}

	/** Identity for the cluster. */
	export interface ClusterIdentityFormProperties {

		/** The principal id of cluster identity. This property will only be provided for a system assigned identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant id associated with the cluster. This property will only be provided for a system assigned identity. */
		tenantId: FormControl<string | null | undefined>,

		/** The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. */
		type: FormControl<ClusterIdentityType | null | undefined>,

		/** The list of user identities associated with the cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities: FormControl<{[id: string]: ClusterIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateClusterIdentityFormGroup() {
		return new FormGroup<ClusterIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ClusterIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: ClusterIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export enum ClusterIdentityType { SystemAssigned = 'SystemAssigned', UserAssigned = 'UserAssigned', 'SystemAssigned, UserAssigned' = 'SystemAssigned, UserAssigned', None = 'None' }

	export interface ClusterIdentityUserAssignedIdentities {

		/** The client id of user assigned identity. */
		clientId?: string | null;

		/** The principal id of user assigned identity. */
		principalId?: string | null;
	}
	export interface ClusterIdentityUserAssignedIdentitiesFormProperties {

		/** The client id of user assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal id of user assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateClusterIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<ClusterIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListPersistedScriptActions operation response. */
	export interface ClusterListPersistedScriptActionsResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The list of Persisted Script Actions. */
		value?: Array<RuntimeScriptAction>;
	}

	/** The ListPersistedScriptActions operation response. */
	export interface ClusterListPersistedScriptActionsResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateClusterListPersistedScriptActionsResultFormGroup() {
		return new FormGroup<ClusterListPersistedScriptActionsResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a script action on a running cluster. */
	export interface RuntimeScriptAction {

		/** The application name of the script action, if any. */
		applicationName?: string | null;

		/**
		 * The name of the script action.
		 * Required
		 */
		name: string;

		/** The parameters for the script */
		parameters?: string | null;

		/**
		 * The list of roles where script will be executed.
		 * Required
		 */
		roles: Array<string>;

		/**
		 * The URI to the script.
		 * Required
		 */
		uri: string;
	}

	/** Describes a script action on a running cluster. */
	export interface RuntimeScriptActionFormProperties {

		/** The application name of the script action, if any. */
		applicationName: FormControl<string | null | undefined>,

		/**
		 * The name of the script action.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The parameters for the script */
		parameters: FormControl<string | null | undefined>,

		/**
		 * The URI to the script.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeScriptActionFormGroup() {
		return new FormGroup<RuntimeScriptActionFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The List Cluster operation response. */
	export interface ClusterListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The list of Clusters. */
		value?: Array<Cluster>;
	}

	/** The List Cluster operation response. */
	export interface ClusterListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateClusterListResultFormGroup() {
		return new FormGroup<ClusterListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list runtime script action detail response. */
	export interface ClusterListRuntimeScriptActionDetailResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;
		value?: Array<RuntimeScriptActionDetail>;
	}

	/** The list runtime script action detail response. */
	export interface ClusterListRuntimeScriptActionDetailResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateClusterListRuntimeScriptActionDetailResultFormGroup() {
		return new FormGroup<ClusterListRuntimeScriptActionDetailResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The execution details of a script action. */
	export interface RuntimeScriptActionDetail extends RuntimeScriptAction {

		/** The script action execution debug information. */
		debugInformation?: string | null;

		/** The end time of script action execution. */
		endTime?: string | null;

		/** The summary of script action execution result. */
		executionSummary?: Array<ScriptActionExecutionSummary>;

		/** The reason why the script action was executed. */
		operation?: string | null;

		/**
		 * The execution id of the script action.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		scriptExecutionId?: string | null;

		/** The start time of script action execution. */
		startTime?: string | null;

		/** The current execution status of the script action. */
		status?: string | null;
	}

	/** The execution details of a script action. */
	export interface RuntimeScriptActionDetailFormProperties extends RuntimeScriptActionFormProperties {

		/** The script action execution debug information. */
		debugInformation: FormControl<string | null | undefined>,

		/** The end time of script action execution. */
		endTime: FormControl<string | null | undefined>,

		/** The reason why the script action was executed. */
		operation: FormControl<string | null | undefined>,

		/**
		 * The execution id of the script action.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		scriptExecutionId: FormControl<string | null | undefined>,

		/** The start time of script action execution. */
		startTime: FormControl<string | null | undefined>,

		/** The current execution status of the script action. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeScriptActionDetailFormGroup() {
		return new FormGroup<RuntimeScriptActionDetailFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			debugInformation: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			scriptExecutionId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The execution summary of a script action. */
	export interface ScriptActionExecutionSummary {

		/**
		 * The instance count for a given script action execution status.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		instanceCount?: number | null;

		/** The status of script action execution. */
		status?: string | null;
	}

	/** The execution summary of a script action. */
	export interface ScriptActionExecutionSummaryFormProperties {

		/**
		 * The instance count for a given script action execution status.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		instanceCount: FormControl<number | null | undefined>,

		/** The status of script action execution. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateScriptActionExecutionSummaryFormGroup() {
		return new FormGroup<ScriptActionExecutionSummaryFormProperties>({
			instanceCount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The PatchCluster request parameters */
	export interface ClusterPatchParameters {

		/** The resource tags. */
		tags?: {[id: string]: string };
	}

	/** The PatchCluster request parameters */
	export interface ClusterPatchParametersFormProperties {

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateClusterPatchParametersFormGroup() {
		return new FormGroup<ClusterPatchParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The Resize Cluster request parameters. */
	export interface ClusterResizeParameters {

		/**
		 * The target instance count for the operation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetInstanceCount?: number | null;
	}

	/** The Resize Cluster request parameters. */
	export interface ClusterResizeParametersFormProperties {

		/**
		 * The target instance count for the operation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateClusterResizeParametersFormGroup() {
		return new FormGroup<ClusterResizeParametersFormProperties>({
			targetInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the compute profile. */
	export interface ComputeProfile {

		/** The list of roles in the cluster. */
		roles?: Array<Role>;
	}

	/** Describes the compute profile. */
	export interface ComputeProfileFormProperties {
	}
	export function CreateComputeProfileFormGroup() {
		return new FormGroup<ComputeProfileFormProperties>({
		});

	}


	/** Describes a role on the cluster. */
	export interface Role {

		/** The autoscale request parameters */
		autoscale?: Autoscale;

		/** The data disks groups for the role. */
		dataDisksGroups?: Array<DataDisksGroups>;

		/** The hardware profile. */
		hardwareProfile?: HardwareProfile;

		/**
		 * The minimum instance count of the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minInstanceCount?: number | null;

		/** The name of the role. */
		name?: string | null;

		/** The Linux operation systems profile. */
		osProfile?: OsProfile;

		/** The list of script actions on the role. */
		RoleScriptActions?: Array<RoleScriptActions>;

		/**
		 * The instance count of the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetInstanceCount?: number | null;

		/** The virtual network properties. */
		virtualNetworkProfile?: VirtualNetworkProfile;
	}

	/** Describes a role on the cluster. */
	export interface RoleFormProperties {

		/**
		 * The minimum instance count of the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minInstanceCount: FormControl<number | null | undefined>,

		/** The name of the role. */
		name: FormControl<string | null | undefined>,

		/**
		 * The instance count of the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			minInstanceCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data disks groups for the role. */
	export interface DataDisksGroups {

		/**
		 * ReadOnly. The DiskSize in GB. Do not set this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB?: number | null;

		/**
		 * The number of disks per node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		disksPerNode?: number | null;

		/** ReadOnly. The storage account type. Do not set this value. */
		storageAccountType?: string | null;
	}

	/** The data disks groups for the role. */
	export interface DataDisksGroupsFormProperties {

		/**
		 * ReadOnly. The DiskSize in GB. Do not set this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB: FormControl<number | null | undefined>,

		/**
		 * The number of disks per node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		disksPerNode: FormControl<number | null | undefined>,

		/** ReadOnly. The storage account type. Do not set this value. */
		storageAccountType: FormControl<string | null | undefined>,
	}
	export function CreateDataDisksGroupsFormGroup() {
		return new FormGroup<DataDisksGroupsFormProperties>({
			diskSizeGB: new FormControl<number | null | undefined>(undefined),
			disksPerNode: new FormControl<number | null | undefined>(undefined),
			storageAccountType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RoleScriptActions {

		/**
		 * The name of the script action.
		 * Required
		 */
		name: string;

		/**
		 * The parameters for the script provided.
		 * Required
		 */
		parameters: string;

		/**
		 * The URI to the script.
		 * Required
		 */
		uri: string;
	}
	export interface RoleScriptActionsFormProperties {

		/**
		 * The name of the script action.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The parameters for the script provided.
		 * Required
		 */
		parameters: FormControl<string | null | undefined>,

		/**
		 * The URI to the script.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRoleScriptActionsFormGroup() {
		return new FormGroup<RoleScriptActionsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The disk encryption properties */
	export interface DiskEncryptionProperties {

		/** Algorithm identifier for encryption, default RSA-OAEP. */
		encryptionAlgorithm?: DiskEncryptionPropertiesEncryptionAlgorithm | null;

		/** Key name that is used for enabling disk encryption. */
		keyName?: string | null;

		/** Specific key version that is used for enabling disk encryption. */
		keyVersion?: string | null;

		/** Resource ID of Managed Identity that is used to access the key vault. */
		msiResourceId?: string | null;

		/** Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net */
		vaultUri?: string | null;
	}

	/** The disk encryption properties */
	export interface DiskEncryptionPropertiesFormProperties {

		/** Algorithm identifier for encryption, default RSA-OAEP. */
		encryptionAlgorithm: FormControl<DiskEncryptionPropertiesEncryptionAlgorithm | null | undefined>,

		/** Key name that is used for enabling disk encryption. */
		keyName: FormControl<string | null | undefined>,

		/** Specific key version that is used for enabling disk encryption. */
		keyVersion: FormControl<string | null | undefined>,

		/** Resource ID of Managed Identity that is used to access the key vault. */
		msiResourceId: FormControl<string | null | undefined>,

		/** Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net */
		vaultUri: FormControl<string | null | undefined>,
	}
	export function CreateDiskEncryptionPropertiesFormGroup() {
		return new FormGroup<DiskEncryptionPropertiesFormProperties>({
			encryptionAlgorithm: new FormControl<DiskEncryptionPropertiesEncryptionAlgorithm | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined),
			keyVersion: new FormControl<string | null | undefined>(undefined),
			msiResourceId: new FormControl<string | null | undefined>(undefined),
			vaultUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiskEncryptionPropertiesEncryptionAlgorithm { 'RSA-OAEP' = 'RSA-OAEP', 'RSA-OAEP-256' = 'RSA-OAEP-256', RSA1_5 = 'RSA1_5' }


	/** The parameters for the script actions to execute on a running cluster. */
	export interface ExecuteScriptActionParameters {

		/**
		 * Gets or sets if the scripts needs to be persisted.
		 * Required
		 */
		persistOnSuccess: boolean;

		/** The list of run time script actions. */
		scriptActions?: Array<RuntimeScriptAction>;
	}

	/** The parameters for the script actions to execute on a running cluster. */
	export interface ExecuteScriptActionParametersFormProperties {

		/**
		 * Gets or sets if the scripts needs to be persisted.
		 * Required
		 */
		persistOnSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateExecuteScriptActionParametersFormGroup() {
		return new FormGroup<ExecuteScriptActionParametersFormProperties>({
			persistOnSuccess: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Gateway settings. */
	export interface GatewaySettings {

		/** Indicates whether or not the gateway settings based authorization is enabled. */
		'restAuthCredential.isEnabled'?: string | null;

		/** The gateway settings user password. */
		'restAuthCredential.password'?: string | null;

		/** The gateway settings user name. */
		'restAuthCredential.username'?: string | null;
	}

	/** Gateway settings. */
	export interface GatewaySettingsFormProperties {

		/** Indicates whether or not the gateway settings based authorization is enabled. */
		'restAuthCredential.isEnabled': FormControl<string | null | undefined>,

		/** The gateway settings user password. */
		'restAuthCredential.password': FormControl<string | null | undefined>,

		/** The gateway settings user name. */
		'restAuthCredential.username': FormControl<string | null | undefined>,
	}
	export function CreateGatewaySettingsFormGroup() {
		return new FormGroup<GatewaySettingsFormProperties>({
			'restAuthCredential.isEnabled': new FormControl<string | null | undefined>(undefined),
			'restAuthCredential.password': new FormControl<string | null | undefined>(undefined),
			'restAuthCredential.username': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The hardware profile. */
	export interface HardwareProfile {

		/** The size of the VM */
		vmSize?: string | null;
	}

	/** The hardware profile. */
	export interface HardwareProfileFormProperties {

		/** The size of the VM */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateHardwareProfileFormGroup() {
		return new FormGroup<HardwareProfileFormProperties>({
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The kafka rest proxy configuration which contains AAD security group information. */
	export interface KafkaRestProperties {

		/** The information of AAD security group. */
		clientGroupInfo?: ClientGroupInfo;
	}

	/** The kafka rest proxy configuration which contains AAD security group information. */
	export interface KafkaRestPropertiesFormProperties {
	}
	export function CreateKafkaRestPropertiesFormGroup() {
		return new FormGroup<KafkaRestPropertiesFormProperties>({
		});

	}


	/** The ssh username, password, and ssh public key. */
	export interface LinuxOperatingSystemProfile {

		/** The password. */
		password?: string | null;

		/** The list of SSH public keys. */
		sshProfile?: SshProfile;

		/** The username. */
		username?: string | null;
	}

	/** The ssh username, password, and ssh public key. */
	export interface LinuxOperatingSystemProfileFormProperties {

		/** The password. */
		password: FormControl<string | null | undefined>,

		/** The username. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateLinuxOperatingSystemProfileFormGroup() {
		return new FormGroup<LinuxOperatingSystemProfileFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The azure async operation response. */
	export interface OperationResource {

		/** The error message associated with the cluster creation. */
		error?: Errors;

		/** The async operation state. */
		status?: OperationResourceStatus | null;
	}

	/** The azure async operation response. */
	export interface OperationResourceFormProperties {

		/** The async operation state. */
		status: FormControl<OperationResourceStatus | null | undefined>,
	}
	export function CreateOperationResourceFormGroup() {
		return new FormGroup<OperationResourceFormProperties>({
			status: new FormControl<OperationResourceStatus | null | undefined>(undefined),
		});

	}

	export enum OperationResourceStatus { InProgress = 'InProgress', Succeeded = 'Succeeded', Failed = 'Failed' }


	/** The Linux operation systems profile. */
	export interface OsProfile {

		/** The ssh username, password, and ssh public key. */
		linuxOperatingSystemProfile?: LinuxOperatingSystemProfile;
	}

	/** The Linux operation systems profile. */
	export interface OsProfileFormProperties {
	}
	export function CreateOsProfileFormGroup() {
		return new FormGroup<OsProfileFormProperties>({
		});

	}


	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResource {
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** The quota properties for the cluster. */
	export interface QuotaInfo {

		/**
		 * The cores used by the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		coresUsed?: number | null;
	}

	/** The quota properties for the cluster. */
	export interface QuotaInfoFormProperties {

		/**
		 * The cores used by the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		coresUsed: FormControl<number | null | undefined>,
	}
	export function CreateQuotaInfoFormGroup() {
		return new FormGroup<QuotaInfoFormProperties>({
			coresUsed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The core properties of ARM resources */
	export interface Resource {

		/** Fully qualified resource Id for the resource. */
		id?: string | null;

		/** The name of the resource */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** The core properties of ARM resources */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The security profile which contains Ssh public key for the HDInsight cluster. */
	export interface SecurityProfile {

		/** The resource ID of the user's Azure Active Directory Domain Service. */
		aaddsResourceId?: string | null;

		/** Optional. The Distinguished Names for cluster user groups */
		clusterUsersGroupDNs?: Array<string>;

		/** The directory type. */
		directoryType?: SecurityProfileDirectoryType | null;

		/** The organization's active directory domain. */
		domain?: string | null;

		/** The domain admin password. */
		domainUserPassword?: string | null;

		/** The domain user account that will have admin privileges on the cluster. */
		domainUsername?: string | null;

		/** The LDAPS protocol URLs to communicate with the Active Directory. */
		ldapsUrls?: Array<string>;

		/** User assigned identity that has permissions to read and create cluster-related artifacts in the user's AADDS. */
		msiResourceId?: string | null;

		/** The organizational unit within the Active Directory to place the cluster and service accounts. */
		organizationalUnitDN?: string | null;
	}

	/** The security profile which contains Ssh public key for the HDInsight cluster. */
	export interface SecurityProfileFormProperties {

		/** The resource ID of the user's Azure Active Directory Domain Service. */
		aaddsResourceId: FormControl<string | null | undefined>,

		/** The directory type. */
		directoryType: FormControl<SecurityProfileDirectoryType | null | undefined>,

		/** The organization's active directory domain. */
		domain: FormControl<string | null | undefined>,

		/** The domain admin password. */
		domainUserPassword: FormControl<string | null | undefined>,

		/** The domain user account that will have admin privileges on the cluster. */
		domainUsername: FormControl<string | null | undefined>,

		/** User assigned identity that has permissions to read and create cluster-related artifacts in the user's AADDS. */
		msiResourceId: FormControl<string | null | undefined>,

		/** The organizational unit within the Active Directory to place the cluster and service accounts. */
		organizationalUnitDN: FormControl<string | null | undefined>,
	}
	export function CreateSecurityProfileFormGroup() {
		return new FormGroup<SecurityProfileFormProperties>({
			aaddsResourceId: new FormControl<string | null | undefined>(undefined),
			directoryType: new FormControl<SecurityProfileDirectoryType | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			domainUserPassword: new FormControl<string | null | undefined>(undefined),
			domainUsername: new FormControl<string | null | undefined>(undefined),
			msiResourceId: new FormControl<string | null | undefined>(undefined),
			organizationalUnitDN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SecurityProfileDirectoryType { ActiveDirectory = 'ActiveDirectory' }


	/** The list of SSH public keys. */
	export interface SshProfile {

		/** The list of SSH public keys. */
		publicKeys?: Array<SshPublicKey>;
	}

	/** The list of SSH public keys. */
	export interface SshProfileFormProperties {
	}
	export function CreateSshProfileFormGroup() {
		return new FormGroup<SshProfileFormProperties>({
		});

	}


	/** The SSH public key for the cluster nodes. */
	export interface SshPublicKey {

		/** The certificate for SSH. */
		certificateData?: string | null;
	}

	/** The SSH public key for the cluster nodes. */
	export interface SshPublicKeyFormProperties {

		/** The certificate for SSH. */
		certificateData: FormControl<string | null | undefined>,
	}
	export function CreateSshPublicKeyFormGroup() {
		return new FormGroup<SshPublicKeyFormProperties>({
			certificateData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The storage Account. */
	export interface StorageAccount {

		/** The container in the storage account, only to be specified for WASB storage accounts. */
		container?: string | null;

		/** The filesystem, only to be specified for Azure Data Lake Storage Gen 2. */
		fileSystem?: string | null;

		/** Whether or not the storage account is the default storage account. */
		isDefault?: boolean | null;

		/** The storage account access key. */
		key?: string | null;

		/** The managed identity (MSI) that is allowed to access the storage account, only to be specified for Azure Data Lake Storage Gen 2. */
		msiResourceId?: string | null;

		/** The name of the storage account. */
		name?: string | null;

		/** The resource ID of storage account, only to be specified for Azure Data Lake Storage Gen 2. */
		resourceId?: string | null;
	}

	/** The storage Account. */
	export interface StorageAccountFormProperties {

		/** The container in the storage account, only to be specified for WASB storage accounts. */
		container: FormControl<string | null | undefined>,

		/** The filesystem, only to be specified for Azure Data Lake Storage Gen 2. */
		fileSystem: FormControl<string | null | undefined>,

		/** Whether or not the storage account is the default storage account. */
		isDefault: FormControl<boolean | null | undefined>,

		/** The storage account access key. */
		key: FormControl<string | null | undefined>,

		/** The managed identity (MSI) that is allowed to access the storage account, only to be specified for Azure Data Lake Storage Gen 2. */
		msiResourceId: FormControl<string | null | undefined>,

		/** The name of the storage account. */
		name: FormControl<string | null | undefined>,

		/** The resource ID of storage account, only to be specified for Azure Data Lake Storage Gen 2. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountFormGroup() {
		return new FormGroup<StorageAccountFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
			fileSystem: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			msiResourceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The storage profile. */
	export interface StorageProfile {

		/** The list of storage accounts in the cluster. */
		storageaccounts?: Array<StorageAccount>;
	}

	/** The storage profile. */
	export interface StorageProfileFormProperties {
	}
	export function CreateStorageProfileFormGroup() {
		return new FormGroup<StorageProfileFormProperties>({
		});

	}


	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResource extends Resource {

		/** The Azure Region where the resource lives */
		location?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/** The Azure Region where the resource lives */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The update gateway settings request parameters. */
	export interface UpdateGatewaySettingsParameters {

		/** Indicates whether or not the gateway settings based authorization is enabled. */
		'restAuthCredential.isEnabled'?: boolean | null;

		/** The gateway settings user password. */
		'restAuthCredential.password'?: string | null;

		/** The gateway settings user name. */
		'restAuthCredential.username'?: string | null;
	}

	/** The update gateway settings request parameters. */
	export interface UpdateGatewaySettingsParametersFormProperties {

		/** Indicates whether or not the gateway settings based authorization is enabled. */
		'restAuthCredential.isEnabled': FormControl<boolean | null | undefined>,

		/** The gateway settings user password. */
		'restAuthCredential.password': FormControl<string | null | undefined>,

		/** The gateway settings user name. */
		'restAuthCredential.username': FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewaySettingsParametersFormGroup() {
		return new FormGroup<UpdateGatewaySettingsParametersFormProperties>({
			'restAuthCredential.isEnabled': new FormControl<boolean | null | undefined>(undefined),
			'restAuthCredential.password': new FormControl<string | null | undefined>(undefined),
			'restAuthCredential.username': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The virtual network properties. */
	export interface VirtualNetworkProfile {

		/** The ID of the virtual network. */
		id?: string | null;

		/** The name of the subnet. */
		subnet?: string | null;
	}

	/** The virtual network properties. */
	export interface VirtualNetworkProfileFormProperties {

		/** The ID of the virtual network. */
		id: FormControl<string | null | undefined>,

		/** The name of the subnet. */
		subnet: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkProfileFormGroup() {
		return new FormGroup<VirtualNetworkProfileFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the HDInsight clusters under the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/clusters
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {ClusterListResult} OK response definition.
		 */
		Clusters_List(subscriptionId: string, api_version: string): Observable<ClusterListResult> {
			return this.http.get<ClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HDInsight/clusters&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the HDInsight clusters in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {ClusterListResult} OK response definition.
		 */
		Clusters_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<ClusterListResult> {
			return this.http.get<ClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {Cluster} OK response definition.
		 */
		Clusters_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<Cluster> {
			return this.http.get<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new HDInsight cluster with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {ClusterCreateParametersExtended} requestBody The cluster create request.
		 * @return {Cluster} OK response definition.
		 */
		Clusters_Create(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string, requestBody: ClusterCreateParametersExtended): Observable<Cluster> {
			return this.http.put<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified HDInsight cluster.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {void} Ok response definition.
		 */
		Clusters_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch HDInsight cluster with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {ClusterPatchParameters} requestBody The cluster patch request.
		 * @return {Cluster} OK response definition.
		 */
		Clusters_Update(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string, requestBody: ClusterPatchParameters): Observable<Cluster> {
			return this.http.patch<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the gateway settings for the specified cluster.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/getGatewaySettings
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {GatewaySettings} OK response definition.
		 */
		Clusters_GetGatewaySettings(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<GatewaySettings> {
			return this.http.post<GatewaySettings>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/getGatewaySettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Resizes the specified HDInsight cluster to the specified size.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/roles/{roleName}/resize
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {Clusters_ResizeRoleName} roleName The constant value for the roleName
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {ClusterResizeParameters} requestBody The parameters for the resize operation.
		 * @return {void} OK response definition.
		 */
		Clusters_Resize(subscriptionId: string, resourceGroupName: string, clusterName: string, roleName: Clusters_ResizeRoleName, api_version: string, requestBody: ClusterResizeParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/roles/' + roleName + '/resize&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rotate disk encryption key of the specified HDInsight cluster.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/rotatediskencryptionkey
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {ClusterDiskEncryptionParameters} requestBody The parameters for the disk encryption operation.
		 * @return {void} OK response definition.
		 */
		Clusters_RotateDiskEncryptionKey(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string, requestBody: ClusterDiskEncryptionParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/rotatediskencryptionkey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Configures the gateway settings on the specified cluster.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/updateGatewaySettings
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {UpdateGatewaySettingsParameters} requestBody The cluster configurations.
		 * @return {void} OK response definition.
		 */
		Clusters_UpdateGatewaySettings(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string, requestBody: UpdateGatewaySettingsParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/updateGatewaySettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Clusters_ResizeRoleName { workernode = 'workernode' }

}

