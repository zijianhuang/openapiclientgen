import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAppResponse {
		appSummary?: AppSummary;
		serverGroups?: Array<ServerGroup>;
		tags?: Array<Tag>;
	}
	export interface CreateAppResponseFormProperties {
	}
	export function CreateCreateAppResponseFormGroup() {
		return new FormGroup<CreateAppResponseFormProperties>({
		});

	}


	/** Information about the application. */
	export interface AppSummary {
		appId?: string;
		importedAppId?: string;
		name?: string;
		description?: string;
		status?: AppStatus;
		statusMessage?: string;
		replicationConfigurationStatus?: AppReplicationConfigurationStatus;
		replicationStatus?: AppReplicationStatus;
		replicationStatusMessage?: string;
		latestReplicationTime?: Date;
		launchConfigurationStatus?: AppReplicationConfigurationStatus;
		launchStatus?: AppLaunchStatus;
		launchStatusMessage?: string;
		launchDetails?: LaunchDetails;
		creationTime?: Date;
		lastModified?: Date;
		roleName?: string;
		totalServerGroups?: number | null;
		totalServers?: number | null;
	}

	/** Information about the application. */
	export interface AppSummaryFormProperties {
		appId: FormControl<string | null | undefined>,
		importedAppId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<AppStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		replicationConfigurationStatus: FormControl<AppReplicationConfigurationStatus | null | undefined>,
		replicationStatus: FormControl<AppReplicationStatus | null | undefined>,
		replicationStatusMessage: FormControl<string | null | undefined>,
		latestReplicationTime: FormControl<Date | null | undefined>,
		launchConfigurationStatus: FormControl<AppReplicationConfigurationStatus | null | undefined>,
		launchStatus: FormControl<AppLaunchStatus | null | undefined>,
		launchStatusMessage: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		roleName: FormControl<string | null | undefined>,
		totalServerGroups: FormControl<number | null | undefined>,
		totalServers: FormControl<number | null | undefined>,
	}
	export function CreateAppSummaryFormGroup() {
		return new FormGroup<AppSummaryFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			importedAppId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AppStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			replicationConfigurationStatus: new FormControl<AppReplicationConfigurationStatus | null | undefined>(undefined),
			replicationStatus: new FormControl<AppReplicationStatus | null | undefined>(undefined),
			replicationStatusMessage: new FormControl<string | null | undefined>(undefined),
			latestReplicationTime: new FormControl<Date | null | undefined>(undefined),
			launchConfigurationStatus: new FormControl<AppReplicationConfigurationStatus | null | undefined>(undefined),
			launchStatus: new FormControl<AppLaunchStatus | null | undefined>(undefined),
			launchStatusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
			totalServerGroups: new FormControl<number | null | undefined>(undefined),
			totalServers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AppStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, DELETED = 4, DELETE_FAILED = 5 }

	export enum AppReplicationConfigurationStatus { NOT_CONFIGURED = 0, CONFIGURED = 1 }

	export enum AppReplicationStatus { READY_FOR_CONFIGURATION = 0, CONFIGURATION_IN_PROGRESS = 1, CONFIGURATION_INVALID = 2, READY_FOR_REPLICATION = 3, VALIDATION_IN_PROGRESS = 4, REPLICATION_PENDING = 5, REPLICATION_IN_PROGRESS = 6, REPLICATED = 7, PARTIALLY_REPLICATED = 8, DELTA_REPLICATION_IN_PROGRESS = 9, DELTA_REPLICATED = 10, DELTA_REPLICATION_FAILED = 11, REPLICATION_FAILED = 12, REPLICATION_STOPPING = 13, REPLICATION_STOP_FAILED = 14, REPLICATION_STOPPED = 15 }

	export enum AppLaunchStatus { READY_FOR_CONFIGURATION = 0, CONFIGURATION_IN_PROGRESS = 1, CONFIGURATION_INVALID = 2, READY_FOR_LAUNCH = 3, VALIDATION_IN_PROGRESS = 4, LAUNCH_PENDING = 5, LAUNCH_IN_PROGRESS = 6, LAUNCHED = 7, PARTIALLY_LAUNCHED = 8, DELTA_LAUNCH_IN_PROGRESS = 9, DELTA_LAUNCH_FAILED = 10, LAUNCH_FAILED = 11, TERMINATE_IN_PROGRESS = 12, TERMINATE_FAILED = 13, TERMINATED = 14 }


	/** Details about the latest launch of an application. */
	export interface LaunchDetails {
		latestLaunchTime?: Date;
		stackName?: string;
		stackId?: string;
	}

	/** Details about the latest launch of an application. */
	export interface LaunchDetailsFormProperties {
		latestLaunchTime: FormControl<Date | null | undefined>,
		stackName: FormControl<string | null | undefined>,
		stackId: FormControl<string | null | undefined>,
	}
	export function CreateLaunchDetailsFormGroup() {
		return new FormGroup<LaunchDetailsFormProperties>({
			latestLaunchTime: new FormControl<Date | null | undefined>(undefined),
			stackName: new FormControl<string | null | undefined>(undefined),
			stackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Logical grouping of servers. */
	export interface ServerGroup {
		serverGroupId?: string;
		name?: string;
		serverList?: Array<Server>;
	}

	/** Logical grouping of servers. */
	export interface ServerGroupFormProperties {
		serverGroupId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateServerGroupFormGroup() {
		return new FormGroup<ServerGroupFormProperties>({
			serverGroupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a server. */
	export interface Server {
		serverId?: string;
		serverType?: ServerType;
		vmServer?: VmServer;
		replicationJobId?: string;
		replicationJobTerminated?: boolean | null;
	}

	/** Represents a server. */
	export interface ServerFormProperties {
		serverId: FormControl<string | null | undefined>,
		serverType: FormControl<ServerType | null | undefined>,
		replicationJobId: FormControl<string | null | undefined>,
		replicationJobTerminated: FormControl<boolean | null | undefined>,
	}
	export function CreateServerFormGroup() {
		return new FormGroup<ServerFormProperties>({
			serverId: new FormControl<string | null | undefined>(undefined),
			serverType: new FormControl<ServerType | null | undefined>(undefined),
			replicationJobId: new FormControl<string | null | undefined>(undefined),
			replicationJobTerminated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ServerType { VIRTUAL_MACHINE = 0 }


	/** Represents a VM server. */
	export interface VmServer {
		vmServerAddress?: VmServerAddress;
		vmName?: string;
		vmManagerName?: string;
		vmManagerType?: VmManagerType;
		vmPath?: string;
	}

	/** Represents a VM server. */
	export interface VmServerFormProperties {
		vmName: FormControl<string | null | undefined>,
		vmManagerName: FormControl<string | null | undefined>,
		vmManagerType: FormControl<VmManagerType | null | undefined>,
		vmPath: FormControl<string | null | undefined>,
	}
	export function CreateVmServerFormGroup() {
		return new FormGroup<VmServerFormProperties>({
			vmName: new FormControl<string | null | undefined>(undefined),
			vmManagerName: new FormControl<string | null | undefined>(undefined),
			vmManagerType: new FormControl<VmManagerType | null | undefined>(undefined),
			vmPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a VM server location. */
	export interface VmServerAddress {
		vmManagerId?: string;
		vmId?: string;
	}

	/** Represents a VM server location. */
	export interface VmServerAddressFormProperties {
		vmManagerId: FormControl<string | null | undefined>,
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateVmServerAddressFormGroup() {
		return new FormGroup<VmServerAddressFormProperties>({
			vmManagerId: new FormControl<string | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VmManagerType { VSPHERE = 0, SCVMM = 1, 'HYPERV-MANAGER' = 2 }


	/** Key/value pair that can be assigned to an application. */
	export interface Tag {
		key?: string;
		value?: string;
	}

	/** Key/value pair that can be assigned to an application. */
	export interface TagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppRequest {
		name?: string;
		description?: string;
		roleName?: string;
		clientToken?: string;
		serverGroups?: Array<ServerGroup>;
		tags?: Array<Tag>;
	}
	export interface CreateAppRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		roleName: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppRequestFormGroup() {
		return new FormGroup<CreateAppRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnauthorizedOperationException {
	}
	export interface UnauthorizedOperationExceptionFormProperties {
	}
	export function CreateUnauthorizedOperationExceptionFormGroup() {
		return new FormGroup<UnauthorizedOperationExceptionFormProperties>({
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface MissingRequiredParameterException {
	}
	export interface MissingRequiredParameterExceptionFormProperties {
	}
	export function CreateMissingRequiredParameterExceptionFormGroup() {
		return new FormGroup<MissingRequiredParameterExceptionFormProperties>({
		});

	}

	export interface InternalError {
	}
	export interface InternalErrorFormProperties {
	}
	export function CreateInternalErrorFormGroup() {
		return new FormGroup<InternalErrorFormProperties>({
		});

	}

	export interface OperationNotPermittedException {
	}
	export interface OperationNotPermittedExceptionFormProperties {
	}
	export function CreateOperationNotPermittedExceptionFormGroup() {
		return new FormGroup<OperationNotPermittedExceptionFormProperties>({
		});

	}

	export interface CreateReplicationJobResponse {
		replicationJobId?: string;
	}
	export interface CreateReplicationJobResponseFormProperties {
		replicationJobId: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationJobResponseFormGroup() {
		return new FormGroup<CreateReplicationJobResponseFormProperties>({
			replicationJobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateReplicationJobRequest {

		/** Required */
		serverId: string;

		/** Required */
		seedReplicationTime: Date;
		frequency?: number | null;
		runOnce?: boolean | null;
		licenseType?: LicenseType;
		roleName?: string;
		description?: string;
		numberOfRecentAmisToKeep?: number | null;
		encrypted?: boolean | null;
		kmsKeyId?: string;
	}
	export interface CreateReplicationJobRequestFormProperties {

		/** Required */
		serverId: FormControl<string | null | undefined>,

		/** Required */
		seedReplicationTime: FormControl<Date | null | undefined>,
		frequency: FormControl<number | null | undefined>,
		runOnce: FormControl<boolean | null | undefined>,
		licenseType: FormControl<LicenseType | null | undefined>,
		roleName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		numberOfRecentAmisToKeep: FormControl<number | null | undefined>,
		encrypted: FormControl<boolean | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationJobRequestFormGroup() {
		return new FormGroup<CreateReplicationJobRequestFormProperties>({
			serverId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			seedReplicationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			frequency: new FormControl<number | null | undefined>(undefined),
			runOnce: new FormControl<boolean | null | undefined>(undefined),
			licenseType: new FormControl<LicenseType | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			numberOfRecentAmisToKeep: new FormControl<number | null | undefined>(undefined),
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LicenseType { AWS = 0, BYOL = 1 }

	export interface ServerCannotBeReplicatedException {
	}
	export interface ServerCannotBeReplicatedExceptionFormProperties {
	}
	export function CreateServerCannotBeReplicatedExceptionFormGroup() {
		return new FormGroup<ServerCannotBeReplicatedExceptionFormProperties>({
		});

	}

	export interface ReplicationJobAlreadyExistsException {
	}
	export interface ReplicationJobAlreadyExistsExceptionFormProperties {
	}
	export function CreateReplicationJobAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ReplicationJobAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface NoConnectorsAvailableException {
	}
	export interface NoConnectorsAvailableExceptionFormProperties {
	}
	export function CreateNoConnectorsAvailableExceptionFormGroup() {
		return new FormGroup<NoConnectorsAvailableExceptionFormProperties>({
		});

	}

	export interface TemporarilyUnavailableException {
	}
	export interface TemporarilyUnavailableExceptionFormProperties {
	}
	export function CreateTemporarilyUnavailableExceptionFormGroup() {
		return new FormGroup<TemporarilyUnavailableExceptionFormProperties>({
		});

	}

	export interface DeleteAppResponse {
	}
	export interface DeleteAppResponseFormProperties {
	}
	export function CreateDeleteAppResponseFormGroup() {
		return new FormGroup<DeleteAppResponseFormProperties>({
		});

	}

	export interface DeleteAppRequest {
		appId?: string;
		forceStopAppReplication?: boolean | null;
		forceTerminateApp?: boolean | null;
	}
	export interface DeleteAppRequestFormProperties {
		appId: FormControl<string | null | undefined>,
		forceStopAppReplication: FormControl<boolean | null | undefined>,
		forceTerminateApp: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteAppRequestFormGroup() {
		return new FormGroup<DeleteAppRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			forceStopAppReplication: new FormControl<boolean | null | undefined>(undefined),
			forceTerminateApp: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteAppLaunchConfigurationResponse {
	}
	export interface DeleteAppLaunchConfigurationResponseFormProperties {
	}
	export function CreateDeleteAppLaunchConfigurationResponseFormGroup() {
		return new FormGroup<DeleteAppLaunchConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteAppLaunchConfigurationRequest {
		appId?: string;
	}
	export interface DeleteAppLaunchConfigurationRequestFormProperties {
		appId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppLaunchConfigurationRequestFormGroup() {
		return new FormGroup<DeleteAppLaunchConfigurationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAppReplicationConfigurationResponse {
	}
	export interface DeleteAppReplicationConfigurationResponseFormProperties {
	}
	export function CreateDeleteAppReplicationConfigurationResponseFormGroup() {
		return new FormGroup<DeleteAppReplicationConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteAppReplicationConfigurationRequest {
		appId?: string;
	}
	export interface DeleteAppReplicationConfigurationRequestFormProperties {
		appId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppReplicationConfigurationRequestFormGroup() {
		return new FormGroup<DeleteAppReplicationConfigurationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAppValidationConfigurationResponse {
	}
	export interface DeleteAppValidationConfigurationResponseFormProperties {
	}
	export function CreateDeleteAppValidationConfigurationResponseFormGroup() {
		return new FormGroup<DeleteAppValidationConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteAppValidationConfigurationRequest {

		/** Required */
		appId: string;
	}
	export interface DeleteAppValidationConfigurationRequestFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppValidationConfigurationRequestFormGroup() {
		return new FormGroup<DeleteAppValidationConfigurationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteReplicationJobResponse {
	}
	export interface DeleteReplicationJobResponseFormProperties {
	}
	export function CreateDeleteReplicationJobResponseFormGroup() {
		return new FormGroup<DeleteReplicationJobResponseFormProperties>({
		});

	}

	export interface DeleteReplicationJobRequest {

		/** Required */
		replicationJobId: string;
	}
	export interface DeleteReplicationJobRequestFormProperties {

		/** Required */
		replicationJobId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationJobRequestFormGroup() {
		return new FormGroup<DeleteReplicationJobRequestFormProperties>({
			replicationJobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReplicationJobNotFoundException {
	}
	export interface ReplicationJobNotFoundExceptionFormProperties {
	}
	export function CreateReplicationJobNotFoundExceptionFormGroup() {
		return new FormGroup<ReplicationJobNotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteServerCatalogResponse {
	}
	export interface DeleteServerCatalogResponseFormProperties {
	}
	export function CreateDeleteServerCatalogResponseFormGroup() {
		return new FormGroup<DeleteServerCatalogResponseFormProperties>({
		});

	}

	export interface DeleteServerCatalogRequest {
	}
	export interface DeleteServerCatalogRequestFormProperties {
	}
	export function CreateDeleteServerCatalogRequestFormGroup() {
		return new FormGroup<DeleteServerCatalogRequestFormProperties>({
		});

	}

	export interface DisassociateConnectorResponse {
	}
	export interface DisassociateConnectorResponseFormProperties {
	}
	export function CreateDisassociateConnectorResponseFormGroup() {
		return new FormGroup<DisassociateConnectorResponseFormProperties>({
		});

	}

	export interface DisassociateConnectorRequest {

		/** Required */
		connectorId: string;
	}
	export interface DisassociateConnectorRequestFormProperties {

		/** Required */
		connectorId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateConnectorRequestFormGroup() {
		return new FormGroup<DisassociateConnectorRequestFormProperties>({
			connectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateChangeSetResponse {
		s3Location?: S3Location;
	}
	export interface GenerateChangeSetResponseFormProperties {
	}
	export function CreateGenerateChangeSetResponseFormGroup() {
		return new FormGroup<GenerateChangeSetResponseFormProperties>({
		});

	}


	/** Location of an Amazon S3 object. */
	export interface S3Location {
		bucket?: string;
		key?: string;
	}

	/** Location of an Amazon S3 object. */
	export interface S3LocationFormProperties {
		bucket: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateChangeSetRequest {
		appId?: string;
		changesetFormat?: OutputFormat;
	}
	export interface GenerateChangeSetRequestFormProperties {
		appId: FormControl<string | null | undefined>,
		changesetFormat: FormControl<OutputFormat | null | undefined>,
	}
	export function CreateGenerateChangeSetRequestFormGroup() {
		return new FormGroup<GenerateChangeSetRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			changesetFormat: new FormControl<OutputFormat | null | undefined>(undefined),
		});

	}

	export enum OutputFormat { JSON = 0, YAML = 1 }

	export interface GenerateTemplateResponse {
		s3Location?: S3Location;
	}
	export interface GenerateTemplateResponseFormProperties {
	}
	export function CreateGenerateTemplateResponseFormGroup() {
		return new FormGroup<GenerateTemplateResponseFormProperties>({
		});

	}

	export interface GenerateTemplateRequest {
		appId?: string;
		templateFormat?: OutputFormat;
	}
	export interface GenerateTemplateRequestFormProperties {
		appId: FormControl<string | null | undefined>,
		templateFormat: FormControl<OutputFormat | null | undefined>,
	}
	export function CreateGenerateTemplateRequestFormGroup() {
		return new FormGroup<GenerateTemplateRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			templateFormat: new FormControl<OutputFormat | null | undefined>(undefined),
		});

	}

	export interface GetAppResponse {
		appSummary?: AppSummary;
		serverGroups?: Array<ServerGroup>;
		tags?: Array<Tag>;
	}
	export interface GetAppResponseFormProperties {
	}
	export function CreateGetAppResponseFormGroup() {
		return new FormGroup<GetAppResponseFormProperties>({
		});

	}

	export interface GetAppRequest {
		appId?: string;
	}
	export interface GetAppRequestFormProperties {
		appId: FormControl<string | null | undefined>,
	}
	export function CreateGetAppRequestFormGroup() {
		return new FormGroup<GetAppRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAppLaunchConfigurationResponse {
		appId?: string;
		roleName?: string;
		autoLaunch?: boolean | null;
		serverGroupLaunchConfigurations?: Array<ServerGroupLaunchConfiguration>;
	}
	export interface GetAppLaunchConfigurationResponseFormProperties {
		appId: FormControl<string | null | undefined>,
		roleName: FormControl<string | null | undefined>,
		autoLaunch: FormControl<boolean | null | undefined>,
	}
	export function CreateGetAppLaunchConfigurationResponseFormGroup() {
		return new FormGroup<GetAppLaunchConfigurationResponseFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
			autoLaunch: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Launch configuration for a server group. */
	export interface ServerGroupLaunchConfiguration {
		serverGroupId?: string;
		launchOrder?: number | null;
		serverLaunchConfigurations?: Array<ServerLaunchConfiguration>;
	}

	/** Launch configuration for a server group. */
	export interface ServerGroupLaunchConfigurationFormProperties {
		serverGroupId: FormControl<string | null | undefined>,
		launchOrder: FormControl<number | null | undefined>,
	}
	export function CreateServerGroupLaunchConfigurationFormGroup() {
		return new FormGroup<ServerGroupLaunchConfigurationFormProperties>({
			serverGroupId: new FormControl<string | null | undefined>(undefined),
			launchOrder: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Launch configuration for a server. */
	export interface ServerLaunchConfiguration {
		server?: Server;
		logicalId?: string;
		vpc?: string;
		subnet?: string;
		securityGroup?: string;
		ec2KeyName?: string;
		userData?: UserData;
		instanceType?: string;
		associatePublicIpAddress?: boolean | null;
		iamInstanceProfileName?: string;

		/** Location of an Amazon S3 object. */
		configureScript?: S3Location;
		configureScriptType?: ScriptType;
	}

	/** Launch configuration for a server. */
	export interface ServerLaunchConfigurationFormProperties {
		logicalId: FormControl<string | null | undefined>,
		vpc: FormControl<string | null | undefined>,
		subnet: FormControl<string | null | undefined>,
		securityGroup: FormControl<string | null | undefined>,
		ec2KeyName: FormControl<string | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
		associatePublicIpAddress: FormControl<boolean | null | undefined>,
		iamInstanceProfileName: FormControl<string | null | undefined>,
		configureScriptType: FormControl<ScriptType | null | undefined>,
	}
	export function CreateServerLaunchConfigurationFormGroup() {
		return new FormGroup<ServerLaunchConfigurationFormProperties>({
			logicalId: new FormControl<string | null | undefined>(undefined),
			vpc: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
			securityGroup: new FormControl<string | null | undefined>(undefined),
			ec2KeyName: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			associatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			iamInstanceProfileName: new FormControl<string | null | undefined>(undefined),
			configureScriptType: new FormControl<ScriptType | null | undefined>(undefined),
		});

	}


	/** A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch. */
	export interface UserData {
		s3Location?: S3Location;
	}

	/** A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch. */
	export interface UserDataFormProperties {
	}
	export function CreateUserDataFormGroup() {
		return new FormGroup<UserDataFormProperties>({
		});

	}

	export enum ScriptType { SHELL_SCRIPT = 0, POWERSHELL_SCRIPT = 1 }

	export interface GetAppLaunchConfigurationRequest {
		appId?: string;
	}
	export interface GetAppLaunchConfigurationRequestFormProperties {
		appId: FormControl<string | null | undefined>,
	}
	export function CreateGetAppLaunchConfigurationRequestFormGroup() {
		return new FormGroup<GetAppLaunchConfigurationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAppReplicationConfigurationResponse {
		serverGroupReplicationConfigurations?: Array<ServerGroupReplicationConfiguration>;
	}
	export interface GetAppReplicationConfigurationResponseFormProperties {
	}
	export function CreateGetAppReplicationConfigurationResponseFormGroup() {
		return new FormGroup<GetAppReplicationConfigurationResponseFormProperties>({
		});

	}


	/** Replication configuration for a server group. */
	export interface ServerGroupReplicationConfiguration {
		serverGroupId?: string;
		serverReplicationConfigurations?: Array<ServerReplicationConfiguration>;
	}

	/** Replication configuration for a server group. */
	export interface ServerGroupReplicationConfigurationFormProperties {
		serverGroupId: FormControl<string | null | undefined>,
	}
	export function CreateServerGroupReplicationConfigurationFormGroup() {
		return new FormGroup<ServerGroupReplicationConfigurationFormProperties>({
			serverGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Replication configuration of a server. */
	export interface ServerReplicationConfiguration {
		server?: Server;
		serverReplicationParameters?: ServerReplicationParameters;
	}

	/** Replication configuration of a server. */
	export interface ServerReplicationConfigurationFormProperties {
	}
	export function CreateServerReplicationConfigurationFormGroup() {
		return new FormGroup<ServerReplicationConfigurationFormProperties>({
		});

	}


	/** The replication parameters for replicating a server. */
	export interface ServerReplicationParameters {
		seedTime?: Date;
		frequency?: number | null;
		runOnce?: boolean | null;
		licenseType?: LicenseType;
		numberOfRecentAmisToKeep?: number | null;
		encrypted?: boolean | null;
		kmsKeyId?: string;
	}

	/** The replication parameters for replicating a server. */
	export interface ServerReplicationParametersFormProperties {
		seedTime: FormControl<Date | null | undefined>,
		frequency: FormControl<number | null | undefined>,
		runOnce: FormControl<boolean | null | undefined>,
		licenseType: FormControl<LicenseType | null | undefined>,
		numberOfRecentAmisToKeep: FormControl<number | null | undefined>,
		encrypted: FormControl<boolean | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateServerReplicationParametersFormGroup() {
		return new FormGroup<ServerReplicationParametersFormProperties>({
			seedTime: new FormControl<Date | null | undefined>(undefined),
			frequency: new FormControl<number | null | undefined>(undefined),
			runOnce: new FormControl<boolean | null | undefined>(undefined),
			licenseType: new FormControl<LicenseType | null | undefined>(undefined),
			numberOfRecentAmisToKeep: new FormControl<number | null | undefined>(undefined),
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAppReplicationConfigurationRequest {
		appId?: string;
	}
	export interface GetAppReplicationConfigurationRequestFormProperties {
		appId: FormControl<string | null | undefined>,
	}
	export function CreateGetAppReplicationConfigurationRequestFormGroup() {
		return new FormGroup<GetAppReplicationConfigurationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAppValidationConfigurationResponse {
		appValidationConfigurations?: Array<AppValidationConfiguration>;
		serverGroupValidationConfigurations?: Array<ServerGroupValidationConfiguration>;
	}
	export interface GetAppValidationConfigurationResponseFormProperties {
	}
	export function CreateGetAppValidationConfigurationResponseFormGroup() {
		return new FormGroup<GetAppValidationConfigurationResponseFormProperties>({
		});

	}


	/** Configuration for validating an application. */
	export interface AppValidationConfiguration {
		validationId?: string;
		name?: string;
		appValidationStrategy?: AppValidationStrategy;
		ssmValidationParameters?: SSMValidationParameters;
	}

	/** Configuration for validating an application. */
	export interface AppValidationConfigurationFormProperties {
		validationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		appValidationStrategy: FormControl<AppValidationStrategy | null | undefined>,
	}
	export function CreateAppValidationConfigurationFormGroup() {
		return new FormGroup<AppValidationConfigurationFormProperties>({
			validationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			appValidationStrategy: new FormControl<AppValidationStrategy | null | undefined>(undefined),
		});

	}

	export enum AppValidationStrategy { SSM = 0 }


	/** Contains validation parameters. */
	export interface SSMValidationParameters {
		source?: Source;
		instanceId?: string;
		scriptType?: ScriptType;
		command?: string;
		executionTimeoutSeconds?: number | null;
		outputS3BucketName?: string;
	}

	/** Contains validation parameters. */
	export interface SSMValidationParametersFormProperties {
		instanceId: FormControl<string | null | undefined>,
		scriptType: FormControl<ScriptType | null | undefined>,
		command: FormControl<string | null | undefined>,
		executionTimeoutSeconds: FormControl<number | null | undefined>,
		outputS3BucketName: FormControl<string | null | undefined>,
	}
	export function CreateSSMValidationParametersFormGroup() {
		return new FormGroup<SSMValidationParametersFormProperties>({
			instanceId: new FormControl<string | null | undefined>(undefined),
			scriptType: new FormControl<ScriptType | null | undefined>(undefined),
			command: new FormControl<string | null | undefined>(undefined),
			executionTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			outputS3BucketName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the location of a validation script. */
	export interface Source {

		/** Location of an Amazon S3 object. */
		s3Location?: S3Location;
	}

	/** Contains the location of a validation script. */
	export interface SourceFormProperties {
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
		});

	}


	/** Configuration for validating an instance. */
	export interface ServerGroupValidationConfiguration {
		serverGroupId?: string;
		serverValidationConfigurations?: Array<ServerValidationConfiguration>;
	}

	/** Configuration for validating an instance. */
	export interface ServerGroupValidationConfigurationFormProperties {
		serverGroupId: FormControl<string | null | undefined>,
	}
	export function CreateServerGroupValidationConfigurationFormGroup() {
		return new FormGroup<ServerGroupValidationConfigurationFormProperties>({
			serverGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for validating an instance. */
	export interface ServerValidationConfiguration {

		/** Represents a server. */
		server?: Server;
		validationId?: string;
		name?: string;
		serverValidationStrategy?: ServerValidationStrategy;
		userDataValidationParameters?: UserDataValidationParameters;
	}

	/** Configuration for validating an instance. */
	export interface ServerValidationConfigurationFormProperties {
		validationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		serverValidationStrategy: FormControl<ServerValidationStrategy | null | undefined>,
	}
	export function CreateServerValidationConfigurationFormGroup() {
		return new FormGroup<ServerValidationConfigurationFormProperties>({
			validationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serverValidationStrategy: new FormControl<ServerValidationStrategy | null | undefined>(undefined),
		});

	}

	export enum ServerValidationStrategy { USERDATA = 0 }


	/** Contains validation parameters. */
	export interface UserDataValidationParameters {
		source?: Source;
		scriptType?: ScriptType;
	}

	/** Contains validation parameters. */
	export interface UserDataValidationParametersFormProperties {
		scriptType: FormControl<ScriptType | null | undefined>,
	}
	export function CreateUserDataValidationParametersFormGroup() {
		return new FormGroup<UserDataValidationParametersFormProperties>({
			scriptType: new FormControl<ScriptType | null | undefined>(undefined),
		});

	}

	export interface GetAppValidationConfigurationRequest {

		/** Required */
		appId: string;
	}
	export interface GetAppValidationConfigurationRequestFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,
	}
	export function CreateGetAppValidationConfigurationRequestFormGroup() {
		return new FormGroup<GetAppValidationConfigurationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAppValidationOutputResponse {
		validationOutputList?: Array<ValidationOutput>;
	}
	export interface GetAppValidationOutputResponseFormProperties {
	}
	export function CreateGetAppValidationOutputResponseFormGroup() {
		return new FormGroup<GetAppValidationOutputResponseFormProperties>({
		});

	}


	/** Contains validation output. */
	export interface ValidationOutput {
		validationId?: string;
		name?: string;
		status?: ValidationStatus;
		statusMessage?: string;
		latestValidationTime?: Date;
		appValidationOutput?: AppValidationOutput;
		serverValidationOutput?: ServerValidationOutput;
	}

	/** Contains validation output. */
	export interface ValidationOutputFormProperties {
		validationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ValidationStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		latestValidationTime: FormControl<Date | null | undefined>,
	}
	export function CreateValidationOutputFormGroup() {
		return new FormGroup<ValidationOutputFormProperties>({
			validationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ValidationStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			latestValidationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ValidationStatus { READY_FOR_VALIDATION = 0, PENDING = 1, IN_PROGRESS = 2, SUCCEEDED = 3, FAILED = 4 }


	/** Output from validating an application. */
	export interface AppValidationOutput {
		ssmOutput?: SSMOutput;
	}

	/** Output from validating an application. */
	export interface AppValidationOutputFormProperties {
	}
	export function CreateAppValidationOutputFormGroup() {
		return new FormGroup<AppValidationOutputFormProperties>({
		});

	}


	/** Contains the location of validation output. */
	export interface SSMOutput {

		/** Location of an Amazon S3 object. */
		s3Location?: S3Location;
	}

	/** Contains the location of validation output. */
	export interface SSMOutputFormProperties {
	}
	export function CreateSSMOutputFormGroup() {
		return new FormGroup<SSMOutputFormProperties>({
		});

	}


	/** Contains output from validating an instance. */
	export interface ServerValidationOutput {

		/** Represents a server. */
		server?: Server;
	}

	/** Contains output from validating an instance. */
	export interface ServerValidationOutputFormProperties {
	}
	export function CreateServerValidationOutputFormGroup() {
		return new FormGroup<ServerValidationOutputFormProperties>({
		});

	}

	export interface GetAppValidationOutputRequest {

		/** Required */
		appId: string;
	}
	export interface GetAppValidationOutputRequestFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,
	}
	export function CreateGetAppValidationOutputRequestFormGroup() {
		return new FormGroup<GetAppValidationOutputRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConnectorsResponse {
		connectorList?: Array<Connector>;
		nextToken?: string;
	}
	export interface GetConnectorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectorsResponseFormGroup() {
		return new FormGroup<GetConnectorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a connector. */
	export interface Connector {
		connectorId?: string;
		version?: string;
		status?: ConnectorStatus;
		capabilityList?: Array<ConnectorCapability>;
		vmManagerName?: string;
		vmManagerType?: VmManagerType;
		vmManagerId?: string;
		ipAddress?: string;
		macAddress?: string;
		associatedOn?: Date;
	}

	/** Represents a connector. */
	export interface ConnectorFormProperties {
		connectorId: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		status: FormControl<ConnectorStatus | null | undefined>,
		vmManagerName: FormControl<string | null | undefined>,
		vmManagerType: FormControl<VmManagerType | null | undefined>,
		vmManagerId: FormControl<string | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		macAddress: FormControl<string | null | undefined>,
		associatedOn: FormControl<Date | null | undefined>,
	}
	export function CreateConnectorFormGroup() {
		return new FormGroup<ConnectorFormProperties>({
			connectorId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ConnectorStatus | null | undefined>(undefined),
			vmManagerName: new FormControl<string | null | undefined>(undefined),
			vmManagerType: new FormControl<VmManagerType | null | undefined>(undefined),
			vmManagerId: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
			associatedOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConnectorStatus { HEALTHY = 0, UNHEALTHY = 1 }

	export enum ConnectorCapability { VSPHERE = 0, SCVMM = 1, 'HYPERV-MANAGER' = 2, SNAPSHOT_BATCHING = 3, SMS_OPTIMIZED = 4 }

	export interface GetConnectorsRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetConnectorsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetConnectorsRequestFormGroup() {
		return new FormGroup<GetConnectorsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetReplicationJobsResponse {
		replicationJobList?: Array<ReplicationJob>;
		nextToken?: string;
	}
	export interface GetReplicationJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetReplicationJobsResponseFormGroup() {
		return new FormGroup<GetReplicationJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a replication job. */
	export interface ReplicationJob {
		replicationJobId?: string;
		serverId?: string;
		serverType?: ServerType;
		vmServer?: VmServer;
		seedReplicationTime?: Date;
		frequency?: number | null;
		runOnce?: boolean | null;
		nextReplicationRunStartTime?: Date;
		licenseType?: LicenseType;
		roleName?: string;
		latestAmiId?: string;
		state?: ReplicationJobState;
		statusMessage?: string;
		description?: string;
		numberOfRecentAmisToKeep?: number | null;
		encrypted?: boolean | null;
		kmsKeyId?: string;
		replicationRunList?: Array<ReplicationRun>;
	}

	/** Represents a replication job. */
	export interface ReplicationJobFormProperties {
		replicationJobId: FormControl<string | null | undefined>,
		serverId: FormControl<string | null | undefined>,
		serverType: FormControl<ServerType | null | undefined>,
		seedReplicationTime: FormControl<Date | null | undefined>,
		frequency: FormControl<number | null | undefined>,
		runOnce: FormControl<boolean | null | undefined>,
		nextReplicationRunStartTime: FormControl<Date | null | undefined>,
		licenseType: FormControl<LicenseType | null | undefined>,
		roleName: FormControl<string | null | undefined>,
		latestAmiId: FormControl<string | null | undefined>,
		state: FormControl<ReplicationJobState | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		numberOfRecentAmisToKeep: FormControl<number | null | undefined>,
		encrypted: FormControl<boolean | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateReplicationJobFormGroup() {
		return new FormGroup<ReplicationJobFormProperties>({
			replicationJobId: new FormControl<string | null | undefined>(undefined),
			serverId: new FormControl<string | null | undefined>(undefined),
			serverType: new FormControl<ServerType | null | undefined>(undefined),
			seedReplicationTime: new FormControl<Date | null | undefined>(undefined),
			frequency: new FormControl<number | null | undefined>(undefined),
			runOnce: new FormControl<boolean | null | undefined>(undefined),
			nextReplicationRunStartTime: new FormControl<Date | null | undefined>(undefined),
			licenseType: new FormControl<LicenseType | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
			latestAmiId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ReplicationJobState | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			numberOfRecentAmisToKeep: new FormControl<number | null | undefined>(undefined),
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplicationJobState { PENDING = 0, ACTIVE = 1, FAILED = 2, DELETING = 3, DELETED = 4, COMPLETED = 5, PAUSED_ON_FAILURE = 6, FAILING = 7 }


	/** Represents a replication run. */
	export interface ReplicationRun {
		replicationRunId?: string;
		state?: ReplicationRunState;
		type?: ReplicationRunType;
		stageDetails?: ReplicationRunStageDetails;
		statusMessage?: string;
		amiId?: string;
		scheduledStartTime?: Date;
		completedTime?: Date;
		description?: string;
		encrypted?: boolean | null;
		kmsKeyId?: string;
	}

	/** Represents a replication run. */
	export interface ReplicationRunFormProperties {
		replicationRunId: FormControl<string | null | undefined>,
		state: FormControl<ReplicationRunState | null | undefined>,
		type: FormControl<ReplicationRunType | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		amiId: FormControl<string | null | undefined>,
		scheduledStartTime: FormControl<Date | null | undefined>,
		completedTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		encrypted: FormControl<boolean | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateReplicationRunFormGroup() {
		return new FormGroup<ReplicationRunFormProperties>({
			replicationRunId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ReplicationRunState | null | undefined>(undefined),
			type: new FormControl<ReplicationRunType | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			amiId: new FormControl<string | null | undefined>(undefined),
			scheduledStartTime: new FormControl<Date | null | undefined>(undefined),
			completedTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplicationRunState { PENDING = 0, MISSED = 1, ACTIVE = 2, FAILED = 3, COMPLETED = 4, DELETING = 5, DELETED = 6 }

	export enum ReplicationRunType { ON_DEMAND = 0, AUTOMATIC = 1 }


	/** Details of the current stage of a replication run. */
	export interface ReplicationRunStageDetails {
		stage?: string;
		stageProgress?: string;
	}

	/** Details of the current stage of a replication run. */
	export interface ReplicationRunStageDetailsFormProperties {
		stage: FormControl<string | null | undefined>,
		stageProgress: FormControl<string | null | undefined>,
	}
	export function CreateReplicationRunStageDetailsFormGroup() {
		return new FormGroup<ReplicationRunStageDetailsFormProperties>({
			stage: new FormControl<string | null | undefined>(undefined),
			stageProgress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReplicationJobsRequest {
		replicationJobId?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetReplicationJobsRequestFormProperties {
		replicationJobId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetReplicationJobsRequestFormGroup() {
		return new FormGroup<GetReplicationJobsRequestFormProperties>({
			replicationJobId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetReplicationRunsResponse {
		replicationJob?: ReplicationJob;
		replicationRunList?: Array<ReplicationRun>;
		nextToken?: string;
	}
	export interface GetReplicationRunsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetReplicationRunsResponseFormGroup() {
		return new FormGroup<GetReplicationRunsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReplicationRunsRequest {

		/** Required */
		replicationJobId: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetReplicationRunsRequestFormProperties {

		/** Required */
		replicationJobId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetReplicationRunsRequestFormGroup() {
		return new FormGroup<GetReplicationRunsRequestFormProperties>({
			replicationJobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetServersResponse {
		lastModifiedOn?: Date;
		serverCatalogStatus?: ServerCatalogStatus;
		serverList?: Array<Server>;
		nextToken?: string;
	}
	export interface GetServersResponseFormProperties {
		lastModifiedOn: FormControl<Date | null | undefined>,
		serverCatalogStatus: FormControl<ServerCatalogStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetServersResponseFormGroup() {
		return new FormGroup<GetServersResponseFormProperties>({
			lastModifiedOn: new FormControl<Date | null | undefined>(undefined),
			serverCatalogStatus: new FormControl<ServerCatalogStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServerCatalogStatus { NOT_IMPORTED = 0, IMPORTING = 1, AVAILABLE = 2, DELETED = 3, EXPIRED = 4 }

	export interface GetServersRequest {
		nextToken?: string;
		maxResults?: number | null;
		vmServerAddressList?: Array<VmServerAddress>;
	}
	export interface GetServersRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetServersRequestFormGroup() {
		return new FormGroup<GetServersRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImportAppCatalogResponse {
	}
	export interface ImportAppCatalogResponseFormProperties {
	}
	export function CreateImportAppCatalogResponseFormGroup() {
		return new FormGroup<ImportAppCatalogResponseFormProperties>({
		});

	}

	export interface ImportAppCatalogRequest {
		roleName?: string;
	}
	export interface ImportAppCatalogRequestFormProperties {
		roleName: FormControl<string | null | undefined>,
	}
	export function CreateImportAppCatalogRequestFormGroup() {
		return new FormGroup<ImportAppCatalogRequestFormProperties>({
			roleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportServerCatalogResponse {
	}
	export interface ImportServerCatalogResponseFormProperties {
	}
	export function CreateImportServerCatalogResponseFormGroup() {
		return new FormGroup<ImportServerCatalogResponseFormProperties>({
		});

	}

	export interface ImportServerCatalogRequest {
	}
	export interface ImportServerCatalogRequestFormProperties {
	}
	export function CreateImportServerCatalogRequestFormGroup() {
		return new FormGroup<ImportServerCatalogRequestFormProperties>({
		});

	}

	export interface LaunchAppResponse {
	}
	export interface LaunchAppResponseFormProperties {
	}
	export function CreateLaunchAppResponseFormGroup() {
		return new FormGroup<LaunchAppResponseFormProperties>({
		});

	}

	export interface LaunchAppRequest {
		appId?: string;
	}
	export interface LaunchAppRequestFormProperties {
		appId: FormControl<string | null | undefined>,
	}
	export function CreateLaunchAppRequestFormGroup() {
		return new FormGroup<LaunchAppRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppsResponse {
		apps?: Array<AppSummary>;
		nextToken?: string;
	}
	export interface ListAppsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppsResponseFormGroup() {
		return new FormGroup<ListAppsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppsRequest {
		appIds?: Array<string>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListAppsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAppsRequestFormGroup() {
		return new FormGroup<ListAppsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NotifyAppValidationOutputResponse {
	}
	export interface NotifyAppValidationOutputResponseFormProperties {
	}
	export function CreateNotifyAppValidationOutputResponseFormGroup() {
		return new FormGroup<NotifyAppValidationOutputResponseFormProperties>({
		});

	}

	export interface NotifyAppValidationOutputRequest {

		/** Required */
		appId: string;
		notificationContext?: NotificationContext;
	}
	export interface NotifyAppValidationOutputRequestFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,
	}
	export function CreateNotifyAppValidationOutputRequestFormGroup() {
		return new FormGroup<NotifyAppValidationOutputRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the status of validating an application. */
	export interface NotificationContext {
		validationId?: string;
		status?: ValidationStatus;
		statusMessage?: string;
	}

	/** Contains the status of validating an application. */
	export interface NotificationContextFormProperties {
		validationId: FormControl<string | null | undefined>,
		status: FormControl<ValidationStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateNotificationContextFormGroup() {
		return new FormGroup<NotificationContextFormProperties>({
			validationId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ValidationStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAppLaunchConfigurationResponse {
	}
	export interface PutAppLaunchConfigurationResponseFormProperties {
	}
	export function CreatePutAppLaunchConfigurationResponseFormGroup() {
		return new FormGroup<PutAppLaunchConfigurationResponseFormProperties>({
		});

	}

	export interface PutAppLaunchConfigurationRequest {
		appId?: string;
		roleName?: string;
		autoLaunch?: boolean | null;
		serverGroupLaunchConfigurations?: Array<ServerGroupLaunchConfiguration>;
	}
	export interface PutAppLaunchConfigurationRequestFormProperties {
		appId: FormControl<string | null | undefined>,
		roleName: FormControl<string | null | undefined>,
		autoLaunch: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAppLaunchConfigurationRequestFormGroup() {
		return new FormGroup<PutAppLaunchConfigurationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
			autoLaunch: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutAppReplicationConfigurationResponse {
	}
	export interface PutAppReplicationConfigurationResponseFormProperties {
	}
	export function CreatePutAppReplicationConfigurationResponseFormGroup() {
		return new FormGroup<PutAppReplicationConfigurationResponseFormProperties>({
		});

	}

	export interface PutAppReplicationConfigurationRequest {
		appId?: string;
		serverGroupReplicationConfigurations?: Array<ServerGroupReplicationConfiguration>;
	}
	export interface PutAppReplicationConfigurationRequestFormProperties {
		appId: FormControl<string | null | undefined>,
	}
	export function CreatePutAppReplicationConfigurationRequestFormGroup() {
		return new FormGroup<PutAppReplicationConfigurationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAppValidationConfigurationResponse {
	}
	export interface PutAppValidationConfigurationResponseFormProperties {
	}
	export function CreatePutAppValidationConfigurationResponseFormGroup() {
		return new FormGroup<PutAppValidationConfigurationResponseFormProperties>({
		});

	}

	export interface PutAppValidationConfigurationRequest {

		/** Required */
		appId: string;
		appValidationConfigurations?: Array<AppValidationConfiguration>;
		serverGroupValidationConfigurations?: Array<ServerGroupValidationConfiguration>;
	}
	export interface PutAppValidationConfigurationRequestFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,
	}
	export function CreatePutAppValidationConfigurationRequestFormGroup() {
		return new FormGroup<PutAppValidationConfigurationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartAppReplicationResponse {
	}
	export interface StartAppReplicationResponseFormProperties {
	}
	export function CreateStartAppReplicationResponseFormGroup() {
		return new FormGroup<StartAppReplicationResponseFormProperties>({
		});

	}

	export interface StartAppReplicationRequest {
		appId?: string;
	}
	export interface StartAppReplicationRequestFormProperties {
		appId: FormControl<string | null | undefined>,
	}
	export function CreateStartAppReplicationRequestFormGroup() {
		return new FormGroup<StartAppReplicationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartOnDemandAppReplicationResponse {
	}
	export interface StartOnDemandAppReplicationResponseFormProperties {
	}
	export function CreateStartOnDemandAppReplicationResponseFormGroup() {
		return new FormGroup<StartOnDemandAppReplicationResponseFormProperties>({
		});

	}

	export interface StartOnDemandAppReplicationRequest {

		/** Required */
		appId: string;
		description?: string;
	}
	export interface StartOnDemandAppReplicationRequestFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateStartOnDemandAppReplicationRequestFormGroup() {
		return new FormGroup<StartOnDemandAppReplicationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartOnDemandReplicationRunResponse {
		replicationRunId?: string;
	}
	export interface StartOnDemandReplicationRunResponseFormProperties {
		replicationRunId: FormControl<string | null | undefined>,
	}
	export function CreateStartOnDemandReplicationRunResponseFormGroup() {
		return new FormGroup<StartOnDemandReplicationRunResponseFormProperties>({
			replicationRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartOnDemandReplicationRunRequest {

		/** Required */
		replicationJobId: string;
		description?: string;
	}
	export interface StartOnDemandReplicationRunRequestFormProperties {

		/** Required */
		replicationJobId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateStartOnDemandReplicationRunRequestFormGroup() {
		return new FormGroup<StartOnDemandReplicationRunRequestFormProperties>({
			replicationJobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplicationRunLimitExceededException {
	}
	export interface ReplicationRunLimitExceededExceptionFormProperties {
	}
	export function CreateReplicationRunLimitExceededExceptionFormGroup() {
		return new FormGroup<ReplicationRunLimitExceededExceptionFormProperties>({
		});

	}

	export interface DryRunOperationException {
	}
	export interface DryRunOperationExceptionFormProperties {
	}
	export function CreateDryRunOperationExceptionFormGroup() {
		return new FormGroup<DryRunOperationExceptionFormProperties>({
		});

	}

	export interface StopAppReplicationResponse {
	}
	export interface StopAppReplicationResponseFormProperties {
	}
	export function CreateStopAppReplicationResponseFormGroup() {
		return new FormGroup<StopAppReplicationResponseFormProperties>({
		});

	}

	export interface StopAppReplicationRequest {
		appId?: string;
	}
	export interface StopAppReplicationRequestFormProperties {
		appId: FormControl<string | null | undefined>,
	}
	export function CreateStopAppReplicationRequestFormGroup() {
		return new FormGroup<StopAppReplicationRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TerminateAppResponse {
	}
	export interface TerminateAppResponseFormProperties {
	}
	export function CreateTerminateAppResponseFormGroup() {
		return new FormGroup<TerminateAppResponseFormProperties>({
		});

	}

	export interface TerminateAppRequest {
		appId?: string;
	}
	export interface TerminateAppRequestFormProperties {
		appId: FormControl<string | null | undefined>,
	}
	export function CreateTerminateAppRequestFormGroup() {
		return new FormGroup<TerminateAppRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppResponse {
		appSummary?: AppSummary;
		serverGroups?: Array<ServerGroup>;
		tags?: Array<Tag>;
	}
	export interface UpdateAppResponseFormProperties {
	}
	export function CreateUpdateAppResponseFormGroup() {
		return new FormGroup<UpdateAppResponseFormProperties>({
		});

	}

	export interface UpdateAppRequest {
		appId?: string;
		name?: string;
		description?: string;
		roleName?: string;
		serverGroups?: Array<ServerGroup>;
		tags?: Array<Tag>;
	}
	export interface UpdateAppRequestFormProperties {
		appId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		roleName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppRequestFormGroup() {
		return new FormGroup<UpdateAppRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateReplicationJobResponse {
	}
	export interface UpdateReplicationJobResponseFormProperties {
	}
	export function CreateUpdateReplicationJobResponseFormGroup() {
		return new FormGroup<UpdateReplicationJobResponseFormProperties>({
		});

	}

	export interface UpdateReplicationJobRequest {

		/** Required */
		replicationJobId: string;
		frequency?: number | null;
		nextReplicationRunStartTime?: Date;
		licenseType?: LicenseType;
		roleName?: string;
		description?: string;
		numberOfRecentAmisToKeep?: number | null;
		encrypted?: boolean | null;
		kmsKeyId?: string;
	}
	export interface UpdateReplicationJobRequestFormProperties {

		/** Required */
		replicationJobId: FormControl<string | null | undefined>,
		frequency: FormControl<number | null | undefined>,
		nextReplicationRunStartTime: FormControl<Date | null | undefined>,
		licenseType: FormControl<LicenseType | null | undefined>,
		roleName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		numberOfRecentAmisToKeep: FormControl<number | null | undefined>,
		encrypted: FormControl<boolean | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReplicationJobRequestFormGroup() {
		return new FormGroup<UpdateReplicationJobRequestFormProperties>({
			replicationJobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			frequency: new FormControl<number | null | undefined>(undefined),
			nextReplicationRunStartTime: new FormControl<Date | null | undefined>(undefined),
			licenseType: new FormControl<LicenseType | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			numberOfRecentAmisToKeep: new FormControl<number | null | undefined>(undefined),
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppLaunchConfigurationStatus { NOT_CONFIGURED = 0, CONFIGURED = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp
		 * @return {CreateAppResponse} Success
		 */
		CreateApp(requestBody: CreateAppRequest): Observable<CreateAppResponse> {
			return this.http.post<CreateAppResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob
		 * @return {CreateReplicationJobResponse} Success
		 */
		CreateReplicationJob(requestBody: CreateReplicationJobRequest): Observable<CreateReplicationJobResponse> {
			return this.http.post<CreateReplicationJobResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp
		 * @return {DeleteAppResponse} Success
		 */
		DeleteApp(requestBody: DeleteAppRequest): Observable<DeleteAppResponse> {
			return this.http.post<DeleteAppResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the launch configuration for the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration
		 * @return {DeleteAppLaunchConfigurationResponse} Success
		 */
		DeleteAppLaunchConfiguration(requestBody: DeleteAppLaunchConfigurationRequest): Observable<DeleteAppLaunchConfigurationResponse> {
			return this.http.post<DeleteAppLaunchConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the replication configuration for the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration
		 * @return {DeleteAppReplicationConfigurationResponse} Success
		 */
		DeleteAppReplicationConfiguration(requestBody: DeleteAppReplicationConfigurationRequest): Observable<DeleteAppReplicationConfigurationResponse> {
			return this.http.post<DeleteAppReplicationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the validation configuration for the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration
		 * @return {DeleteAppValidationConfigurationResponse} Success
		 */
		DeleteAppValidationConfiguration(requestBody: DeleteAppValidationConfigurationRequest): Observable<DeleteAppValidationConfigurationResponse> {
			return this.http.post<DeleteAppValidationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob
		 * @return {DeleteReplicationJobResponse} Success
		 */
		DeleteReplicationJob(requestBody: DeleteReplicationJobRequest): Observable<DeleteReplicationJobResponse> {
			return this.http.post<DeleteReplicationJobResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes all servers from your server catalog.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog
		 * @return {DeleteServerCatalogResponse} Success
		 */
		DeleteServerCatalog(requestBody: DeleteServerCatalogRequest): Observable<DeleteServerCatalogResponse> {
			return this.http.post<DeleteServerCatalogResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector
		 * @return {DisassociateConnectorResponse} Success
		 */
		DisassociateConnector(requestBody: DisassociateConnectorRequest): Observable<DisassociateConnectorResponse> {
			return this.http.post<DisassociateConnectorResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet
		 * @return {GenerateChangeSetResponse} Success
		 */
		GenerateChangeSet(requestBody: GenerateChangeSetRequest): Observable<GenerateChangeSetResponse> {
			return this.http.post<GenerateChangeSetResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate
		 * @return {GenerateTemplateResponse} Success
		 */
		GenerateTemplate(requestBody: GenerateTemplateRequest): Observable<GenerateTemplateResponse> {
			return this.http.post<GenerateTemplateResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve information about the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp
		 * @return {GetAppResponse} Success
		 */
		GetApp(requestBody: GetAppRequest): Observable<GetAppResponse> {
			return this.http.post<GetAppResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the application launch configuration associated with the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration
		 * @return {GetAppLaunchConfigurationResponse} Success
		 */
		GetAppLaunchConfiguration(requestBody: GetAppLaunchConfigurationRequest): Observable<GetAppLaunchConfigurationResponse> {
			return this.http.post<GetAppLaunchConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the application replication configuration associated with the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration
		 * @return {GetAppReplicationConfigurationResponse} Success
		 */
		GetAppReplicationConfiguration(requestBody: GetAppReplicationConfigurationRequest): Observable<GetAppReplicationConfigurationResponse> {
			return this.http.post<GetAppReplicationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a configuration for validating an application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration
		 * @return {GetAppValidationConfigurationResponse} Success
		 */
		GetAppValidationConfiguration(requestBody: GetAppValidationConfigurationRequest): Observable<GetAppValidationConfigurationResponse> {
			return this.http.post<GetAppValidationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves output from validating an application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput
		 * @return {GetAppValidationOutputResponse} Success
		 */
		GetAppValidationOutput(requestBody: GetAppValidationOutputRequest): Observable<GetAppValidationOutputResponse> {
			return this.http.post<GetAppValidationOutputResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the connectors registered with the Server Migration Service.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetConnectorsResponse} Success
		 */
		GetConnectors(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetConnectorsRequest): Observable<GetConnectorsResponse> {
			return this.http.post<GetConnectorsResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified replication job or all of your replication jobs.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetReplicationJobsResponse} Success
		 */
		GetReplicationJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetReplicationJobsRequest): Observable<GetReplicationJobsResponse> {
			return this.http.post<GetReplicationJobsResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the replication runs for the specified replication job.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetReplicationRunsResponse} Success
		 */
		GetReplicationRuns(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetReplicationRunsRequest): Observable<GetReplicationRunsResponse> {
			return this.http.post<GetReplicationRunsResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetServersResponse} Success
		 */
		GetServers(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetServersRequest): Observable<GetServersResponse> {
			return this.http.post<GetServersResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows application import from Migration Hub.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog
		 * @return {ImportAppCatalogResponse} Success
		 */
		ImportAppCatalog(requestBody: ImportAppCatalogRequest): Observable<ImportAppCatalogResponse> {
			return this.http.post<ImportAppCatalogResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog
		 * @return {ImportServerCatalogResponse} Success
		 */
		ImportServerCatalog(requestBody: ImportServerCatalogRequest): Observable<ImportServerCatalogResponse> {
			return this.http.post<ImportServerCatalogResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Launches the specified application as a stack in CloudFormation.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp
		 * @return {LaunchAppResponse} Success
		 */
		LaunchApp(requestBody: LaunchAppRequest): Observable<LaunchAppResponse> {
			return this.http.post<LaunchAppResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves summaries for all applications.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps
		 * @return {ListAppsResponse} Success
		 */
		ListApps(requestBody: ListAppsRequest): Observable<ListAppsResponse> {
			return this.http.post<ListAppsResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information to Server Migration Service about whether application validation is successful.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput
		 * @return {NotifyAppValidationOutputResponse} Success
		 */
		NotifyAppValidationOutput(requestBody: NotifyAppValidationOutputRequest): Observable<NotifyAppValidationOutputResponse> {
			return this.http.post<NotifyAppValidationOutputResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates the launch configuration for the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration
		 * @return {PutAppLaunchConfigurationResponse} Success
		 */
		PutAppLaunchConfiguration(requestBody: PutAppLaunchConfigurationRequest): Observable<PutAppLaunchConfigurationResponse> {
			return this.http.post<PutAppLaunchConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates the replication configuration for the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration
		 * @return {PutAppReplicationConfigurationResponse} Success
		 */
		PutAppReplicationConfiguration(requestBody: PutAppReplicationConfigurationRequest): Observable<PutAppReplicationConfigurationResponse> {
			return this.http.post<PutAppReplicationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates a validation configuration for the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration
		 * @return {PutAppValidationConfigurationResponse} Success
		 */
		PutAppValidationConfiguration(requestBody: PutAppValidationConfigurationRequest): Observable<PutAppValidationConfigurationResponse> {
			return this.http.post<PutAppValidationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts replicating the specified application by creating replication jobs for each server in the application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication
		 * @return {StartAppReplicationResponse} Success
		 */
		StartAppReplication(requestBody: StartAppReplicationRequest): Observable<StartAppReplicationResponse> {
			return this.http.post<StartAppReplicationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an on-demand replication run for the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication
		 * @return {StartOnDemandAppReplicationResponse} Success
		 */
		StartOnDemandAppReplication(requestBody: StartOnDemandAppReplicationRequest): Observable<StartOnDemandAppReplicationResponse> {
			return this.http.post<StartOnDemandAppReplicationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun
		 * @return {StartOnDemandReplicationRunResponse} Success
		 */
		StartOnDemandReplicationRun(requestBody: StartOnDemandReplicationRunRequest): Observable<StartOnDemandReplicationRunResponse> {
			return this.http.post<StartOnDemandReplicationRunResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops replicating the specified application by deleting the replication job for each server in the application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication
		 * @return {StopAppReplicationResponse} Success
		 */
		StopAppReplication(requestBody: StopAppReplicationRequest): Observable<StopAppReplicationResponse> {
			return this.http.post<StopAppReplicationResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Terminates the stack for the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp
		 * @return {TerminateAppResponse} Success
		 */
		TerminateApp(requestBody: TerminateAppRequest): Observable<TerminateAppResponse> {
			return this.http.post<TerminateAppResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified application.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp
		 * @return {UpdateAppResponse} Success
		 */
		UpdateApp(requestBody: UpdateAppRequest): Observable<UpdateAppResponse> {
			return this.http.post<UpdateAppResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified settings for the specified replication job.
		 * Post #X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob
		 * @return {UpdateReplicationJobResponse} Success
		 */
		UpdateReplicationJob(requestBody: UpdateReplicationJobRequest): Observable<UpdateReplicationJobResponse> {
			return this.http.post<UpdateReplicationJobResponse>(this.baseUri + '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateAppX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.CreateApp' = 0 }

	export enum CreateReplicationJobX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.CreateReplicationJob' = 0 }

	export enum DeleteAppX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.DeleteApp' = 0 }

	export enum DeleteAppLaunchConfigurationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration' = 0 }

	export enum DeleteAppReplicationConfigurationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration' = 0 }

	export enum DeleteAppValidationConfigurationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration' = 0 }

	export enum DeleteReplicationJobX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.DeleteReplicationJob' = 0 }

	export enum DeleteServerCatalogX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.DeleteServerCatalog' = 0 }

	export enum DisassociateConnectorX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.DisassociateConnector' = 0 }

	export enum GenerateChangeSetX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GenerateChangeSet' = 0 }

	export enum GenerateTemplateX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GenerateTemplate' = 0 }

	export enum GetAppX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GetApp' = 0 }

	export enum GetAppLaunchConfigurationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration' = 0 }

	export enum GetAppReplicationConfigurationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration' = 0 }

	export enum GetAppValidationConfigurationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration' = 0 }

	export enum GetAppValidationOutputX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GetAppValidationOutput' = 0 }

	export enum GetConnectorsX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GetConnectors' = 0 }

	export enum GetReplicationJobsX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GetReplicationJobs' = 0 }

	export enum GetReplicationRunsX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GetReplicationRuns' = 0 }

	export enum GetServersX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.GetServers' = 0 }

	export enum ImportAppCatalogX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.ImportAppCatalog' = 0 }

	export enum ImportServerCatalogX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.ImportServerCatalog' = 0 }

	export enum LaunchAppX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.LaunchApp' = 0 }

	export enum ListAppsX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.ListApps' = 0 }

	export enum NotifyAppValidationOutputX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput' = 0 }

	export enum PutAppLaunchConfigurationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration' = 0 }

	export enum PutAppReplicationConfigurationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration' = 0 }

	export enum PutAppValidationConfigurationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration' = 0 }

	export enum StartAppReplicationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.StartAppReplication' = 0 }

	export enum StartOnDemandAppReplicationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication' = 0 }

	export enum StartOnDemandReplicationRunX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun' = 0 }

	export enum StopAppReplicationX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.StopAppReplication' = 0 }

	export enum TerminateAppX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.TerminateApp' = 0 }

	export enum UpdateAppX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.UpdateApp' = 0 }

	export enum UpdateReplicationJobX_Amz_Target { 'AWSServerMigrationService_V2016_10_24.UpdateReplicationJob' = 0 }

}

