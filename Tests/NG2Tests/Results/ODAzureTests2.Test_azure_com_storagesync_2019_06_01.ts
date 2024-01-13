import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Backup request */
	export interface BackupRequest {

		/** Azure File Share. */
		azureFileShare?: string | null;
	}

	/** Backup request */
	export interface BackupRequestFormProperties {

		/** Azure File Share. */
		azureFileShare: FormControl<string | null | undefined>,
	}
	export function CreateBackupRequestFormGroup() {
		return new FormGroup<BackupRequestFormProperties>({
			azureFileShare: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for a check name availability request. */
	export interface CheckNameAvailabilityParameters {

		/**
		 * The name to check for availability
		 * Required
		 */
		name: string;

		/**
		 * The resource type. Must be set to Microsoft.StorageSync/storageSyncServices
		 * Required
		 */
		type: CheckNameAvailabilityParametersType;
	}

	/** Parameters for a check name availability request. */
	export interface CheckNameAvailabilityParametersFormProperties {

		/**
		 * The name to check for availability
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource type. Must be set to Microsoft.StorageSync/storageSyncServices
		 * Required
		 */
		type: FormControl<CheckNameAvailabilityParametersType | null | undefined>,
	}
	export function CreateCheckNameAvailabilityParametersFormGroup() {
		return new FormGroup<CheckNameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckNameAvailabilityParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameAvailabilityParametersType { 'Microsoft.StorageSync/storageSyncServices' = 0 }


	/** The CheckNameAvailability operation response. */
	export interface CheckNameAvailabilityResult {

		/** Gets an error message explaining the Reason value in more detail. */
		message?: string | null;

		/** Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or invalid and cannot be used. */
		nameAvailable?: boolean | null;

		/** Gets the reason that a Storage Sync Service name could not be used. The Reason element is only returned if NameAvailable is false. */
		reason?: CheckNameAvailabilityResultReason | null;
	}

	/** The CheckNameAvailability operation response. */
	export interface CheckNameAvailabilityResultFormProperties {

		/** Gets an error message explaining the Reason value in more detail. */
		message: FormControl<string | null | undefined>,

		/** Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or invalid and cannot be used. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** Gets the reason that a Storage Sync Service name could not be used. The Reason element is only returned if NameAvailable is false. */
		reason: FormControl<CheckNameAvailabilityResultReason | null | undefined>,
	}
	export function CreateCheckNameAvailabilityResultFormGroup() {
		return new FormGroup<CheckNameAvailabilityResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<CheckNameAvailabilityResultReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameAvailabilityResultReason { Invalid = 0, AlreadyExists = 1 }


	/** Cloud Endpoint object. */
	export interface CloudEndpoint {

		/** CloudEndpoint Properties object. */
		properties?: CloudEndpointProperties;
	}

	/** Cloud Endpoint object. */
	export interface CloudEndpointFormProperties {
	}
	export function CreateCloudEndpointFormGroup() {
		return new FormGroup<CloudEndpointFormProperties>({
		});

	}


	/** CloudEndpoint Properties object. */
	export interface CloudEndpointProperties {

		/** Azure file share name */
		azureFileShareName?: string | null;

		/** Backup Enabled */
		backupEnabled?: string | null;

		/** Friendly Name */
		friendlyName?: string | null;

		/** Resource Last Operation Name */
		lastOperationName?: string | null;

		/** CloudEndpoint lastWorkflowId */
		lastWorkflowId?: string | null;

		/** Partnership Id */
		partnershipId?: string | null;

		/** CloudEndpoint Provisioning State */
		provisioningState?: string | null;

		/** Storage Account Resource Id */
		storageAccountResourceId?: string | null;

		/** Storage Account Tenant Id */
		storageAccountTenantId?: string | null;
	}

	/** CloudEndpoint Properties object. */
	export interface CloudEndpointPropertiesFormProperties {

		/** Azure file share name */
		azureFileShareName: FormControl<string | null | undefined>,

		/** Backup Enabled */
		backupEnabled: FormControl<string | null | undefined>,

		/** Friendly Name */
		friendlyName: FormControl<string | null | undefined>,

		/** Resource Last Operation Name */
		lastOperationName: FormControl<string | null | undefined>,

		/** CloudEndpoint lastWorkflowId */
		lastWorkflowId: FormControl<string | null | undefined>,

		/** Partnership Id */
		partnershipId: FormControl<string | null | undefined>,

		/** CloudEndpoint Provisioning State */
		provisioningState: FormControl<string | null | undefined>,

		/** Storage Account Resource Id */
		storageAccountResourceId: FormControl<string | null | undefined>,

		/** Storage Account Tenant Id */
		storageAccountTenantId: FormControl<string | null | undefined>,
	}
	export function CreateCloudEndpointPropertiesFormGroup() {
		return new FormGroup<CloudEndpointPropertiesFormProperties>({
			azureFileShareName: new FormControl<string | null | undefined>(undefined),
			backupEnabled: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			lastOperationName: new FormControl<string | null | undefined>(undefined),
			lastWorkflowId: new FormControl<string | null | undefined>(undefined),
			partnershipId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			storageAccountResourceId: new FormControl<string | null | undefined>(undefined),
			storageAccountTenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of CloudEndpoint */
	export interface CloudEndpointArray {

		/** Collection of CloudEndpoint. */
		value?: Array<CloudEndpoint>;
	}

	/** Array of CloudEndpoint */
	export interface CloudEndpointArrayFormProperties {
	}
	export function CreateCloudEndpointArrayFormGroup() {
		return new FormGroup<CloudEndpointArrayFormProperties>({
		});

	}


	/** The parameters used when creating a cloud endpoint. */
	export interface CloudEndpointCreateParameters {

		/** CloudEndpoint Properties object. */
		properties?: CloudEndpointCreateParametersProperties;
	}

	/** The parameters used when creating a cloud endpoint. */
	export interface CloudEndpointCreateParametersFormProperties {
	}
	export function CreateCloudEndpointCreateParametersFormGroup() {
		return new FormGroup<CloudEndpointCreateParametersFormProperties>({
		});

	}


	/** CloudEndpoint Properties object. */
	export interface CloudEndpointCreateParametersProperties {

		/** Azure file share name */
		azureFileShareName?: string | null;

		/** Friendly Name */
		friendlyName?: string | null;

		/** Storage Account Resource Id */
		storageAccountResourceId?: string | null;

		/** Storage Account Tenant Id */
		storageAccountTenantId?: string | null;
	}

	/** CloudEndpoint Properties object. */
	export interface CloudEndpointCreateParametersPropertiesFormProperties {

		/** Azure file share name */
		azureFileShareName: FormControl<string | null | undefined>,

		/** Friendly Name */
		friendlyName: FormControl<string | null | undefined>,

		/** Storage Account Resource Id */
		storageAccountResourceId: FormControl<string | null | undefined>,

		/** Storage Account Tenant Id */
		storageAccountTenantId: FormControl<string | null | undefined>,
	}
	export function CreateCloudEndpointCreateParametersPropertiesFormGroup() {
		return new FormGroup<CloudEndpointCreateParametersPropertiesFormProperties>({
			azureFileShareName: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			storageAccountResourceId: new FormControl<string | null | undefined>(undefined),
			storageAccountTenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type of the Feature Status */
	export enum FeatureStatus { on = 0, off = 1 }


	/** Type of the Operation Direction */
	export enum OperationDirection { do = 0, undo = 1, cancel = 2 }


	/** The operation supported by storage sync. */
	export interface OperationDisplayInfo {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** Service provider: Microsoft StorageSync. */
		provider?: string | null;

		/** Resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The operation supported by storage sync. */
	export interface OperationDisplayInfoFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft StorageSync. */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayInfoFormGroup() {
		return new FormGroup<OperationDisplayInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation Display Resource object. */
	export interface OperationDisplayResource {

		/** Operation Display Resource Description. */
		description?: string | null;

		/** Operation Display Resource Operation. */
		operation?: string | null;

		/** Operation Display Resource Provider. */
		provider?: string | null;

		/** Operation Display Resource. */
		resource?: string | null;
	}

	/** Operation Display Resource object. */
	export interface OperationDisplayResourceFormProperties {

		/** Operation Display Resource Description. */
		description: FormControl<string | null | undefined>,

		/** Operation Display Resource Operation. */
		operation: FormControl<string | null | undefined>,

		/** Operation Display Resource Provider. */
		provider: FormControl<string | null | undefined>,

		/** Operation Display Resource. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayResourceFormGroup() {
		return new FormGroup<OperationDisplayResourceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation supported by storage sync. */
	export interface OperationEntity {

		/** The operation supported by storage sync. */
		display?: OperationDisplayInfo;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;

		/** The origin. */
		origin?: string | null;
	}

	/** The operation supported by storage sync. */
	export interface OperationEntityFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,

		/** The origin. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityFormGroup() {
		return new FormGroup<OperationEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of storage sync operations. */
	export interface OperationEntityListResult {

		/** The link used to get the next page of operations. */
		nextLink?: string | null;

		/** The list of operations. */
		value?: Array<OperationEntity>;
	}

	/** The list of storage sync operations. */
	export interface OperationEntityListResultFormProperties {

		/** The link used to get the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityListResultFormGroup() {
		return new FormGroup<OperationEntityListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation status object */
	export interface OperationStatus {

		/** End time of the operation */
		endTime?: Date | null;

		/** Error type */
		error?: StorageSyncApiError;

		/** Operation Id */
		name?: string | null;

		/** Start time of the operation */
		startTime?: Date | null;

		/** Operation status */
		status?: string | null;
	}

	/** Operation status object */
	export interface OperationStatusFormProperties {

		/** End time of the operation */
		endTime: FormControl<Date | null | undefined>,

		/** Operation Id */
		name: FormControl<string | null | undefined>,

		/** Start time of the operation */
		startTime: FormControl<Date | null | undefined>,

		/** Operation status */
		status: FormControl<string | null | undefined>,
	}
	export function CreateOperationStatusFormGroup() {
		return new FormGroup<OperationStatusFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error type */
	export interface StorageSyncApiError {

		/** Error code of the given entry. */
		code?: string | null;

		/** Error Details object. */
		details?: StorageSyncErrorDetails;

		/** Error message of the given entry. */
		message?: string | null;

		/** Target of the given error entry. */
		target?: string | null;
	}

	/** Error type */
	export interface StorageSyncApiErrorFormProperties {

		/** Error code of the given entry. */
		code: FormControl<string | null | undefined>,

		/** Error message of the given entry. */
		message: FormControl<string | null | undefined>,

		/** Target of the given error entry. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateStorageSyncApiErrorFormGroup() {
		return new FormGroup<StorageSyncApiErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error Details object. */
	export interface StorageSyncErrorDetails {

		/** Error code of the given entry. */
		code?: string | null;

		/** Error message of the given entry. */
		message?: string | null;

		/** Target of the given entry. */
		target?: string | null;
	}

	/** Error Details object. */
	export interface StorageSyncErrorDetailsFormProperties {

		/** Error code of the given entry. */
		code: FormControl<string | null | undefined>,

		/** Error message of the given entry. */
		message: FormControl<string | null | undefined>,

		/** Target of the given entry. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateStorageSyncErrorDetailsFormGroup() {
		return new FormGroup<StorageSyncErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Post Backup Response */
	export interface PostBackupResponse {

		/** Post Backup Response Properties object. */
		backupMetadata?: PostBackupResponseProperties;
	}

	/** Post Backup Response */
	export interface PostBackupResponseFormProperties {
	}
	export function CreatePostBackupResponseFormGroup() {
		return new FormGroup<PostBackupResponseFormProperties>({
		});

	}


	/** Post Backup Response Properties object. */
	export interface PostBackupResponseProperties {

		/** cloud endpoint Name. */
		cloudEndpointName?: string | null;
	}

	/** Post Backup Response Properties object. */
	export interface PostBackupResponsePropertiesFormProperties {

		/** cloud endpoint Name. */
		cloudEndpointName: FormControl<string | null | undefined>,
	}
	export function CreatePostBackupResponsePropertiesFormGroup() {
		return new FormGroup<PostBackupResponsePropertiesFormProperties>({
			cloudEndpointName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Post Restore Request */
	export interface PostRestoreRequest {

		/** Post Restore Azure file share uri. */
		azureFileShareUri?: string | null;

		/** Post Restore Azure failed file list. */
		failedFileList?: string | null;

		/** Post Restore partition. */
		partition?: string | null;

		/** Post Restore replica group. */
		replicaGroup?: string | null;

		/** Post Restore request id. */
		requestId?: string | null;

		/** Post Restore restore file spec array. */
		restoreFileSpec?: Array<RestoreFileSpec>;

		/** Post Restore Azure source azure file share uri. */
		sourceAzureFileShareUri?: string | null;

		/** Post Restore Azure status. */
		status?: string | null;
	}

	/** Post Restore Request */
	export interface PostRestoreRequestFormProperties {

		/** Post Restore Azure file share uri. */
		azureFileShareUri: FormControl<string | null | undefined>,

		/** Post Restore Azure failed file list. */
		failedFileList: FormControl<string | null | undefined>,

		/** Post Restore partition. */
		partition: FormControl<string | null | undefined>,

		/** Post Restore replica group. */
		replicaGroup: FormControl<string | null | undefined>,

		/** Post Restore request id. */
		requestId: FormControl<string | null | undefined>,

		/** Post Restore Azure source azure file share uri. */
		sourceAzureFileShareUri: FormControl<string | null | undefined>,

		/** Post Restore Azure status. */
		status: FormControl<string | null | undefined>,
	}
	export function CreatePostRestoreRequestFormGroup() {
		return new FormGroup<PostRestoreRequestFormProperties>({
			azureFileShareUri: new FormControl<string | null | undefined>(undefined),
			failedFileList: new FormControl<string | null | undefined>(undefined),
			partition: new FormControl<string | null | undefined>(undefined),
			replicaGroup: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			sourceAzureFileShareUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Restore file spec. */
	export interface RestoreFileSpec {

		/** Restore file spec isdir */
		isdir?: boolean | null;

		/** Restore file spec path */
		path?: string | null;
	}

	/** Restore file spec. */
	export interface RestoreFileSpecFormProperties {

		/** Restore file spec isdir */
		isdir: FormControl<boolean | null | undefined>,

		/** Restore file spec path */
		path: FormControl<string | null | undefined>,
	}
	export function CreateRestoreFileSpecFormGroup() {
		return new FormGroup<RestoreFileSpecFormProperties>({
			isdir: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pre Restore request object. */
	export interface PreRestoreRequest {

		/** Pre Restore Azure file share uri. */
		azureFileShareUri?: string | null;

		/** Pre Restore backup metadata property bag. */
		backupMetadataPropertyBag?: string | null;

		/** Pre Restore partition. */
		partition?: string | null;

		/** Pre Restore pause wait for sync drain time period in seconds. */
		pauseWaitForSyncDrainTimePeriodInSeconds?: number | null;

		/** Pre Restore replica group. */
		replicaGroup?: string | null;

		/** Pre Restore request id. */
		requestId?: string | null;

		/** Pre Restore restore file spec array. */
		restoreFileSpec?: Array<RestoreFileSpec>;

		/** Pre Restore Azure source azure file share uri. */
		sourceAzureFileShareUri?: string | null;

		/** Pre Restore Azure status. */
		status?: string | null;
	}

	/** Pre Restore request object. */
	export interface PreRestoreRequestFormProperties {

		/** Pre Restore Azure file share uri. */
		azureFileShareUri: FormControl<string | null | undefined>,

		/** Pre Restore backup metadata property bag. */
		backupMetadataPropertyBag: FormControl<string | null | undefined>,

		/** Pre Restore partition. */
		partition: FormControl<string | null | undefined>,

		/** Pre Restore pause wait for sync drain time period in seconds. */
		pauseWaitForSyncDrainTimePeriodInSeconds: FormControl<number | null | undefined>,

		/** Pre Restore replica group. */
		replicaGroup: FormControl<string | null | undefined>,

		/** Pre Restore request id. */
		requestId: FormControl<string | null | undefined>,

		/** Pre Restore Azure source azure file share uri. */
		sourceAzureFileShareUri: FormControl<string | null | undefined>,

		/** Pre Restore Azure status. */
		status: FormControl<string | null | undefined>,
	}
	export function CreatePreRestoreRequestFormGroup() {
		return new FormGroup<PreRestoreRequestFormProperties>({
			azureFileShareUri: new FormControl<string | null | undefined>(undefined),
			backupMetadataPropertyBag: new FormControl<string | null | undefined>(undefined),
			partition: new FormControl<string | null | undefined>(undefined),
			pauseWaitForSyncDrainTimePeriodInSeconds: new FormControl<number | null | undefined>(undefined),
			replicaGroup: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			sourceAzureFileShareUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type of the ProgressType */
	export enum ProgressType { none = 0, initialize = 1, download = 2, upload = 3, recall = 4 }


	/** The parameters used when calling recall action on server endpoint. */
	export interface RecallActionParameters {

		/** Pattern of the files. */
		pattern?: string | null;

		/** Recall path. */
		recallPath?: string | null;
	}

	/** The parameters used when calling recall action on server endpoint. */
	export interface RecallActionParametersFormProperties {

		/** Pattern of the files. */
		pattern: FormControl<string | null | undefined>,

		/** Recall path. */
		recallPath: FormControl<string | null | undefined>,
	}
	export function CreateRecallActionParametersFormGroup() {
		return new FormGroup<RecallActionParametersFormProperties>({
			pattern: new FormControl<string | null | undefined>(undefined),
			recallPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Registered Server resource. */
	export interface RegisteredServer {

		/** RegisteredServer Properties object. */
		properties?: RegisteredServerProperties;
	}

	/** Registered Server resource. */
	export interface RegisteredServerFormProperties {
	}
	export function CreateRegisteredServerFormGroup() {
		return new FormGroup<RegisteredServerFormProperties>({
		});

	}


	/** RegisteredServer Properties object. */
	export interface RegisteredServerProperties {

		/** Registered Server Agent Version */
		agentVersion?: string | null;

		/** Registered Server clusterId */
		clusterId?: string | null;

		/** Registered Server clusterName */
		clusterName?: string | null;

		/** Resource discoveryEndpointUri */
		discoveryEndpointUri?: string | null;

		/** Friendly Name */
		friendlyName?: string | null;

		/** Registered Server last heart beat */
		lastHeartBeat?: string | null;

		/** Resource Last Operation Name */
		lastOperationName?: string | null;

		/** Registered Server lastWorkflowId */
		lastWorkflowId?: string | null;

		/** Management Endpoint Uri */
		managementEndpointUri?: string | null;

		/** Monitoring Configuration */
		monitoringConfiguration?: string | null;

		/** Registered Server Provisioning State */
		provisioningState?: string | null;

		/** Resource Location */
		resourceLocation?: string | null;

		/** Registered Server Certificate */
		serverCertificate?: string | null;

		/** Registered Server serverId */
		serverId?: string | null;

		/** Registered Server Management Error Code */
		serverManagementErrorCode?: number | null;

		/** Registered Server OS Version */
		serverOSVersion?: string | null;

		/** Registered Server serverRole */
		serverRole?: string | null;

		/** Service Location */
		serviceLocation?: string | null;

		/** Registered Server storageSyncServiceUid */
		storageSyncServiceUid?: string | null;
	}

	/** RegisteredServer Properties object. */
	export interface RegisteredServerPropertiesFormProperties {

		/** Registered Server Agent Version */
		agentVersion: FormControl<string | null | undefined>,

		/** Registered Server clusterId */
		clusterId: FormControl<string | null | undefined>,

		/** Registered Server clusterName */
		clusterName: FormControl<string | null | undefined>,

		/** Resource discoveryEndpointUri */
		discoveryEndpointUri: FormControl<string | null | undefined>,

		/** Friendly Name */
		friendlyName: FormControl<string | null | undefined>,

		/** Registered Server last heart beat */
		lastHeartBeat: FormControl<string | null | undefined>,

		/** Resource Last Operation Name */
		lastOperationName: FormControl<string | null | undefined>,

		/** Registered Server lastWorkflowId */
		lastWorkflowId: FormControl<string | null | undefined>,

		/** Management Endpoint Uri */
		managementEndpointUri: FormControl<string | null | undefined>,

		/** Monitoring Configuration */
		monitoringConfiguration: FormControl<string | null | undefined>,

		/** Registered Server Provisioning State */
		provisioningState: FormControl<string | null | undefined>,

		/** Resource Location */
		resourceLocation: FormControl<string | null | undefined>,

		/** Registered Server Certificate */
		serverCertificate: FormControl<string | null | undefined>,

		/** Registered Server serverId */
		serverId: FormControl<string | null | undefined>,

		/** Registered Server Management Error Code */
		serverManagementErrorCode: FormControl<number | null | undefined>,

		/** Registered Server OS Version */
		serverOSVersion: FormControl<string | null | undefined>,

		/** Registered Server serverRole */
		serverRole: FormControl<string | null | undefined>,

		/** Service Location */
		serviceLocation: FormControl<string | null | undefined>,

		/** Registered Server storageSyncServiceUid */
		storageSyncServiceUid: FormControl<string | null | undefined>,
	}
	export function CreateRegisteredServerPropertiesFormGroup() {
		return new FormGroup<RegisteredServerPropertiesFormProperties>({
			agentVersion: new FormControl<string | null | undefined>(undefined),
			clusterId: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			discoveryEndpointUri: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			lastHeartBeat: new FormControl<string | null | undefined>(undefined),
			lastOperationName: new FormControl<string | null | undefined>(undefined),
			lastWorkflowId: new FormControl<string | null | undefined>(undefined),
			managementEndpointUri: new FormControl<string | null | undefined>(undefined),
			monitoringConfiguration: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			resourceLocation: new FormControl<string | null | undefined>(undefined),
			serverCertificate: new FormControl<string | null | undefined>(undefined),
			serverId: new FormControl<string | null | undefined>(undefined),
			serverManagementErrorCode: new FormControl<number | null | undefined>(undefined),
			serverOSVersion: new FormControl<string | null | undefined>(undefined),
			serverRole: new FormControl<string | null | undefined>(undefined),
			serviceLocation: new FormControl<string | null | undefined>(undefined),
			storageSyncServiceUid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of RegisteredServer */
	export interface RegisteredServerArray {

		/** Collection of Registered Server. */
		value?: Array<RegisteredServer>;
	}

	/** Array of RegisteredServer */
	export interface RegisteredServerArrayFormProperties {
	}
	export function CreateRegisteredServerArrayFormGroup() {
		return new FormGroup<RegisteredServerArrayFormProperties>({
		});

	}


	/** The parameters used when creating a registered server. */
	export interface RegisteredServerCreateParameters {
		properties?: RegisteredServerCreateParametersProperties;
	}

	/** The parameters used when creating a registered server. */
	export interface RegisteredServerCreateParametersFormProperties {
	}
	export function CreateRegisteredServerCreateParametersFormGroup() {
		return new FormGroup<RegisteredServerCreateParametersFormProperties>({
		});

	}

	export interface RegisteredServerCreateParametersProperties {

		/** Registered Server Agent Version */
		agentVersion?: string | null;

		/** Registered Server clusterId */
		clusterId?: string | null;

		/** Registered Server clusterName */
		clusterName?: string | null;

		/** Friendly Name */
		friendlyName?: string | null;

		/** Registered Server last heart beat */
		lastHeartBeat?: string | null;

		/** Registered Server Certificate */
		serverCertificate?: string | null;

		/** Registered Server serverId */
		serverId?: string | null;

		/** Registered Server OS Version */
		serverOSVersion?: string | null;

		/** Registered Server serverRole */
		serverRole?: string | null;
	}
	export interface RegisteredServerCreateParametersPropertiesFormProperties {

		/** Registered Server Agent Version */
		agentVersion: FormControl<string | null | undefined>,

		/** Registered Server clusterId */
		clusterId: FormControl<string | null | undefined>,

		/** Registered Server clusterName */
		clusterName: FormControl<string | null | undefined>,

		/** Friendly Name */
		friendlyName: FormControl<string | null | undefined>,

		/** Registered Server last heart beat */
		lastHeartBeat: FormControl<string | null | undefined>,

		/** Registered Server Certificate */
		serverCertificate: FormControl<string | null | undefined>,

		/** Registered Server serverId */
		serverId: FormControl<string | null | undefined>,

		/** Registered Server OS Version */
		serverOSVersion: FormControl<string | null | undefined>,

		/** Registered Server serverRole */
		serverRole: FormControl<string | null | undefined>,
	}
	export function CreateRegisteredServerCreateParametersPropertiesFormGroup() {
		return new FormGroup<RegisteredServerCreateParametersPropertiesFormProperties>({
			agentVersion: new FormControl<string | null | undefined>(undefined),
			clusterId: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			lastHeartBeat: new FormControl<string | null | undefined>(undefined),
			serverCertificate: new FormControl<string | null | undefined>(undefined),
			serverId: new FormControl<string | null | undefined>(undefined),
			serverOSVersion: new FormControl<string | null | undefined>(undefined),
			serverRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource Move Info. */
	export interface ResourcesMoveInfo {

		/** Collection of Resources. */
		resources?: Array<string>;

		/** Target resource group. */
		targetResourceGroup?: string | null;
	}

	/** Resource Move Info. */
	export interface ResourcesMoveInfoFormProperties {

		/** Target resource group. */
		targetResourceGroup: FormControl<string | null | undefined>,
	}
	export function CreateResourcesMoveInfoFormGroup() {
		return new FormGroup<ResourcesMoveInfoFormProperties>({
			targetResourceGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Server Endpoint object. */
	export interface ServerEndpoint {

		/** ServerEndpoint Properties object. */
		properties?: ServerEndpointProperties;
	}

	/** Server Endpoint object. */
	export interface ServerEndpointFormProperties {
	}
	export function CreateServerEndpointFormGroup() {
		return new FormGroup<ServerEndpointFormProperties>({
		});

	}


	/** ServerEndpoint Properties object. */
	export interface ServerEndpointProperties {

		/** Type of the Feature Status */
		cloudTiering?: FeatureStatus | null;

		/** Server endpoint cloud tiering status object. */
		cloudTieringStatus?: ServerEndpointCloudTieringStatus;

		/** Friendly Name */
		friendlyName?: string | null;

		/** Resource Last Operation Name */
		lastOperationName?: string | null;

		/** ServerEndpoint lastWorkflowId */
		lastWorkflowId?: string | null;

		/** Type of the Feature Status */
		offlineDataTransfer?: FeatureStatus | null;

		/** Offline data transfer share name */
		offlineDataTransferShareName?: string | null;

		/** Offline data transfer storage account resource ID */
		offlineDataTransferStorageAccountResourceId?: string | null;

		/** Offline data transfer storage account tenant ID */
		offlineDataTransferStorageAccountTenantId?: string | null;

		/** ServerEndpoint Provisioning State */
		provisioningState?: string | null;

		/** Server endpoint recall status object. */
		recallStatus?: ServerEndpointRecallStatus;

		/** Server folder used for data synchronization */
		serverLocalPath?: string | null;

		/** Arm resource identifier. */
		serverResourceId?: string | null;

		/** Server Endpoint sync status */
		syncStatus?: ServerEndpointSyncStatus;

		/**
		 * Tier files older than days.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		tierFilesOlderThanDays?: number | null;

		/**
		 * Level of free space to be maintained by Cloud Tiering if it is enabled.
		 * Minimum: 0
		 * Maximum: 100
		 */
		volumeFreeSpacePercent?: number | null;
	}

	/** ServerEndpoint Properties object. */
	export interface ServerEndpointPropertiesFormProperties {

		/** Type of the Feature Status */
		cloudTiering: FormControl<FeatureStatus | null | undefined>,

		/** Friendly Name */
		friendlyName: FormControl<string | null | undefined>,

		/** Resource Last Operation Name */
		lastOperationName: FormControl<string | null | undefined>,

		/** ServerEndpoint lastWorkflowId */
		lastWorkflowId: FormControl<string | null | undefined>,

		/** Type of the Feature Status */
		offlineDataTransfer: FormControl<FeatureStatus | null | undefined>,

		/** Offline data transfer share name */
		offlineDataTransferShareName: FormControl<string | null | undefined>,

		/** Offline data transfer storage account resource ID */
		offlineDataTransferStorageAccountResourceId: FormControl<string | null | undefined>,

		/** Offline data transfer storage account tenant ID */
		offlineDataTransferStorageAccountTenantId: FormControl<string | null | undefined>,

		/** ServerEndpoint Provisioning State */
		provisioningState: FormControl<string | null | undefined>,

		/** Server folder used for data synchronization */
		serverLocalPath: FormControl<string | null | undefined>,

		/** Arm resource identifier. */
		serverResourceId: FormControl<string | null | undefined>,

		/**
		 * Tier files older than days.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		tierFilesOlderThanDays: FormControl<number | null | undefined>,

		/**
		 * Level of free space to be maintained by Cloud Tiering if it is enabled.
		 * Minimum: 0
		 * Maximum: 100
		 */
		volumeFreeSpacePercent: FormControl<number | null | undefined>,
	}
	export function CreateServerEndpointPropertiesFormGroup() {
		return new FormGroup<ServerEndpointPropertiesFormProperties>({
			cloudTiering: new FormControl<FeatureStatus | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			lastOperationName: new FormControl<string | null | undefined>(undefined),
			lastWorkflowId: new FormControl<string | null | undefined>(undefined),
			offlineDataTransfer: new FormControl<FeatureStatus | null | undefined>(undefined),
			offlineDataTransferShareName: new FormControl<string | null | undefined>(undefined),
			offlineDataTransferStorageAccountResourceId: new FormControl<string | null | undefined>(undefined),
			offlineDataTransferStorageAccountTenantId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			serverLocalPath: new FormControl<string | null | undefined>(undefined),
			serverResourceId: new FormControl<string | null | undefined>(undefined),
			tierFilesOlderThanDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			volumeFreeSpacePercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Server endpoint cloud tiering status object. */
	export interface ServerEndpointCloudTieringStatus {

		/** Type of the cloud tiering health state */
		health?: ServerEndpointCloudTieringStatusHealth | null;

		/** Last cloud tiering result (HResult) */
		lastCloudTieringResult?: number | null;

		/** Last cloud tiering success timestamp */
		lastSuccessTimestamp?: Date | null;

		/** Last updated timestamp */
		lastUpdatedTimestamp?: Date | null;
	}

	/** Server endpoint cloud tiering status object. */
	export interface ServerEndpointCloudTieringStatusFormProperties {

		/** Type of the cloud tiering health state */
		health: FormControl<ServerEndpointCloudTieringStatusHealth | null | undefined>,

		/** Last cloud tiering result (HResult) */
		lastCloudTieringResult: FormControl<number | null | undefined>,

		/** Last cloud tiering success timestamp */
		lastSuccessTimestamp: FormControl<Date | null | undefined>,

		/** Last updated timestamp */
		lastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateServerEndpointCloudTieringStatusFormGroup() {
		return new FormGroup<ServerEndpointCloudTieringStatusFormProperties>({
			health: new FormControl<ServerEndpointCloudTieringStatusHealth | null | undefined>(undefined),
			lastCloudTieringResult: new FormControl<number | null | undefined>(undefined),
			lastSuccessTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ServerEndpointCloudTieringStatusHealth { Healthy = 0, Error = 1 }


	/** Server endpoint recall status object. */
	export interface ServerEndpointRecallStatus {

		/** Last updated timestamp */
		lastUpdatedTimestamp?: Date | null;

		/** Array of recall errors */
		recallErrors?: Array<ServerEndpointRecallError>;

		/**
		 * Total count of recall errors.
		 * Minimum: 0
		 */
		totalRecallErrorsCount?: number | null;
	}

	/** Server endpoint recall status object. */
	export interface ServerEndpointRecallStatusFormProperties {

		/** Last updated timestamp */
		lastUpdatedTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Total count of recall errors.
		 * Minimum: 0
		 */
		totalRecallErrorsCount: FormControl<number | null | undefined>,
	}
	export function CreateServerEndpointRecallStatusFormGroup() {
		return new FormGroup<ServerEndpointRecallStatusFormProperties>({
			lastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			totalRecallErrorsCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Server endpoint recall error object */
	export interface ServerEndpointRecallError {

		/**
		 * Count of occurences of the error
		 * Minimum: 0
		 */
		count?: number | null;

		/** Error code (HResult) */
		errorCode?: number | null;
	}

	/** Server endpoint recall error object */
	export interface ServerEndpointRecallErrorFormProperties {

		/**
		 * Count of occurences of the error
		 * Minimum: 0
		 */
		count: FormControl<number | null | undefined>,

		/** Error code (HResult) */
		errorCode: FormControl<number | null | undefined>,
	}
	export function CreateServerEndpointRecallErrorFormGroup() {
		return new FormGroup<ServerEndpointRecallErrorFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			errorCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Server Endpoint sync status */
	export interface ServerEndpointSyncStatus {

		/** Type of the sync health state */
		combinedHealth?: ServerEndpointSyncStatusCombinedHealth | null;

		/** Sync Session status object. */
		downloadActivity?: ServerEndpointSyncActivityStatus;

		/** Type of the sync health state */
		downloadHealth?: ServerEndpointSyncStatusCombinedHealth | null;

		/** Sync Session status object. */
		downloadStatus?: ServerEndpointSyncSessionStatus;

		/** Last Updated Timestamp */
		lastUpdatedTimestamp?: Date | null;

		/** Type of the Health state */
		offlineDataTransferStatus?: ServerEndpointSyncStatusOfflineDataTransferStatus | null;

		/** Type of the sync activity state */
		syncActivity?: ServerEndpointSyncStatusSyncActivity | null;

		/**
		 * Total count of persistent files not syncing (combined upload + download).
		 * Minimum: 0
		 */
		totalPersistentFilesNotSyncingCount?: number | null;

		/** Sync Session status object. */
		uploadActivity?: ServerEndpointSyncActivityStatus;

		/** Type of the sync health state */
		uploadHealth?: ServerEndpointSyncStatusCombinedHealth | null;

		/** Sync Session status object. */
		uploadStatus?: ServerEndpointSyncSessionStatus;
	}

	/** Server Endpoint sync status */
	export interface ServerEndpointSyncStatusFormProperties {

		/** Type of the sync health state */
		combinedHealth: FormControl<ServerEndpointSyncStatusCombinedHealth | null | undefined>,

		/** Type of the sync health state */
		downloadHealth: FormControl<ServerEndpointSyncStatusCombinedHealth | null | undefined>,

		/** Last Updated Timestamp */
		lastUpdatedTimestamp: FormControl<Date | null | undefined>,

		/** Type of the Health state */
		offlineDataTransferStatus: FormControl<ServerEndpointSyncStatusOfflineDataTransferStatus | null | undefined>,

		/** Type of the sync activity state */
		syncActivity: FormControl<ServerEndpointSyncStatusSyncActivity | null | undefined>,

		/**
		 * Total count of persistent files not syncing (combined upload + download).
		 * Minimum: 0
		 */
		totalPersistentFilesNotSyncingCount: FormControl<number | null | undefined>,

		/** Type of the sync health state */
		uploadHealth: FormControl<ServerEndpointSyncStatusCombinedHealth | null | undefined>,
	}
	export function CreateServerEndpointSyncStatusFormGroup() {
		return new FormGroup<ServerEndpointSyncStatusFormProperties>({
			combinedHealth: new FormControl<ServerEndpointSyncStatusCombinedHealth | null | undefined>(undefined),
			downloadHealth: new FormControl<ServerEndpointSyncStatusCombinedHealth | null | undefined>(undefined),
			lastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			offlineDataTransferStatus: new FormControl<ServerEndpointSyncStatusOfflineDataTransferStatus | null | undefined>(undefined),
			syncActivity: new FormControl<ServerEndpointSyncStatusSyncActivity | null | undefined>(undefined),
			totalPersistentFilesNotSyncingCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			uploadHealth: new FormControl<ServerEndpointSyncStatusCombinedHealth | null | undefined>(undefined),
		});

	}

	export enum ServerEndpointSyncStatusCombinedHealth { Healthy = 0, Error = 1, SyncBlockedForRestore = 2, SyncBlockedForChangeDetectionPostRestore = 3, NoActivity = 4 }


	/** Sync Session status object. */
	export interface ServerEndpointSyncActivityStatus {

		/**
		 * Applied bytes
		 * Minimum: 0
		 */
		appliedBytes?: number | null;

		/**
		 * Applied item count.
		 * Minimum: 0
		 */
		appliedItemCount?: number | null;

		/**
		 * Per item error count
		 * Minimum: 0
		 */
		perItemErrorCount?: number | null;

		/** Timestamp when properties were updated */
		timestamp?: Date | null;

		/**
		 * Total bytes (if available)
		 * Minimum: 0
		 */
		totalBytes?: number | null;

		/**
		 * Total item count (if available)
		 * Minimum: 0
		 */
		totalItemCount?: number | null;
	}

	/** Sync Session status object. */
	export interface ServerEndpointSyncActivityStatusFormProperties {

		/**
		 * Applied bytes
		 * Minimum: 0
		 */
		appliedBytes: FormControl<number | null | undefined>,

		/**
		 * Applied item count.
		 * Minimum: 0
		 */
		appliedItemCount: FormControl<number | null | undefined>,

		/**
		 * Per item error count
		 * Minimum: 0
		 */
		perItemErrorCount: FormControl<number | null | undefined>,

		/** Timestamp when properties were updated */
		timestamp: FormControl<Date | null | undefined>,

		/**
		 * Total bytes (if available)
		 * Minimum: 0
		 */
		totalBytes: FormControl<number | null | undefined>,

		/**
		 * Total item count (if available)
		 * Minimum: 0
		 */
		totalItemCount: FormControl<number | null | undefined>,
	}
	export function CreateServerEndpointSyncActivityStatusFormGroup() {
		return new FormGroup<ServerEndpointSyncActivityStatusFormProperties>({
			appliedBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			appliedItemCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			perItemErrorCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			totalBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			totalItemCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Sync Session status object. */
	export interface ServerEndpointSyncSessionStatus {

		/** Array of per-item errors coming from the last sync session. */
		filesNotSyncingErrors?: Array<ServerEndpointFilesNotSyncingError>;

		/**
		 * Last sync per item error count.
		 * Minimum: 0
		 */
		lastSyncPerItemErrorCount?: number | null;

		/** Last sync result (HResult) */
		lastSyncResult?: number | null;

		/** Last sync success timestamp */
		lastSyncSuccessTimestamp?: Date | null;

		/** Last sync timestamp */
		lastSyncTimestamp?: Date | null;

		/**
		 * Count of persistent files not syncing.
		 * Minimum: 0
		 */
		persistentFilesNotSyncingCount?: number | null;

		/**
		 * Count of transient files not syncing.
		 * Minimum: 0
		 */
		transientFilesNotSyncingCount?: number | null;
	}

	/** Sync Session status object. */
	export interface ServerEndpointSyncSessionStatusFormProperties {

		/**
		 * Last sync per item error count.
		 * Minimum: 0
		 */
		lastSyncPerItemErrorCount: FormControl<number | null | undefined>,

		/** Last sync result (HResult) */
		lastSyncResult: FormControl<number | null | undefined>,

		/** Last sync success timestamp */
		lastSyncSuccessTimestamp: FormControl<Date | null | undefined>,

		/** Last sync timestamp */
		lastSyncTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Count of persistent files not syncing.
		 * Minimum: 0
		 */
		persistentFilesNotSyncingCount: FormControl<number | null | undefined>,

		/**
		 * Count of transient files not syncing.
		 * Minimum: 0
		 */
		transientFilesNotSyncingCount: FormControl<number | null | undefined>,
	}
	export function CreateServerEndpointSyncSessionStatusFormGroup() {
		return new FormGroup<ServerEndpointSyncSessionStatusFormProperties>({
			lastSyncPerItemErrorCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			lastSyncResult: new FormControl<number | null | undefined>(undefined),
			lastSyncSuccessTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastSyncTimestamp: new FormControl<Date | null | undefined>(undefined),
			persistentFilesNotSyncingCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			transientFilesNotSyncingCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Files not syncing error object */
	export interface ServerEndpointFilesNotSyncingError {

		/** Error code (HResult) */
		errorCode?: number | null;

		/**
		 * Count of persistent files not syncing with the specified error code
		 * Minimum: 0
		 */
		persistentCount?: number | null;

		/**
		 * Count of transient files not syncing with the specified error code
		 * Minimum: 0
		 */
		transientCount?: number | null;
	}

	/** Files not syncing error object */
	export interface ServerEndpointFilesNotSyncingErrorFormProperties {

		/** Error code (HResult) */
		errorCode: FormControl<number | null | undefined>,

		/**
		 * Count of persistent files not syncing with the specified error code
		 * Minimum: 0
		 */
		persistentCount: FormControl<number | null | undefined>,

		/**
		 * Count of transient files not syncing with the specified error code
		 * Minimum: 0
		 */
		transientCount: FormControl<number | null | undefined>,
	}
	export function CreateServerEndpointFilesNotSyncingErrorFormGroup() {
		return new FormGroup<ServerEndpointFilesNotSyncingErrorFormProperties>({
			errorCode: new FormControl<number | null | undefined>(undefined),
			persistentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			transientCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum ServerEndpointSyncStatusOfflineDataTransferStatus { InProgress = 0, Stopping = 1, NotRunning = 2, Complete = 3 }

	export enum ServerEndpointSyncStatusSyncActivity { Upload = 0, Download = 1, UploadAndDownload = 2 }


	/** Array of ServerEndpoint */
	export interface ServerEndpointArray {

		/** Collection of ServerEndpoint. */
		value?: Array<ServerEndpoint>;
	}

	/** Array of ServerEndpoint */
	export interface ServerEndpointArrayFormProperties {
	}
	export function CreateServerEndpointArrayFormGroup() {
		return new FormGroup<ServerEndpointArrayFormProperties>({
		});

	}


	/** Type of the cloud tiering health state */
	export enum ServerEndpointCloudTieringHealthState { Healthy = 0, Error = 1 }


	/** The parameters used when creating a server endpoint. */
	export interface ServerEndpointCreateParameters {

		/** ServerEndpoint Properties object. */
		properties?: ServerEndpointCreateParametersProperties;
	}

	/** The parameters used when creating a server endpoint. */
	export interface ServerEndpointCreateParametersFormProperties {
	}
	export function CreateServerEndpointCreateParametersFormGroup() {
		return new FormGroup<ServerEndpointCreateParametersFormProperties>({
		});

	}


	/** ServerEndpoint Properties object. */
	export interface ServerEndpointCreateParametersProperties {

		/** Type of the Feature Status */
		cloudTiering?: FeatureStatus | null;

		/** Friendly Name */
		friendlyName?: string | null;

		/** Type of the Feature Status */
		offlineDataTransfer?: FeatureStatus | null;

		/** Offline data transfer share name */
		offlineDataTransferShareName?: string | null;

		/** Server folder used for data synchronization */
		serverLocalPath?: string | null;

		/** Arm resource identifier. */
		serverResourceId?: string | null;

		/**
		 * Tier files older than days.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		tierFilesOlderThanDays?: number | null;

		/**
		 * Level of free space to be maintained by Cloud Tiering if it is enabled.
		 * Minimum: 0
		 * Maximum: 100
		 */
		volumeFreeSpacePercent?: number | null;
	}

	/** ServerEndpoint Properties object. */
	export interface ServerEndpointCreateParametersPropertiesFormProperties {

		/** Type of the Feature Status */
		cloudTiering: FormControl<FeatureStatus | null | undefined>,

		/** Friendly Name */
		friendlyName: FormControl<string | null | undefined>,

		/** Type of the Feature Status */
		offlineDataTransfer: FormControl<FeatureStatus | null | undefined>,

		/** Offline data transfer share name */
		offlineDataTransferShareName: FormControl<string | null | undefined>,

		/** Server folder used for data synchronization */
		serverLocalPath: FormControl<string | null | undefined>,

		/** Arm resource identifier. */
		serverResourceId: FormControl<string | null | undefined>,

		/**
		 * Tier files older than days.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		tierFilesOlderThanDays: FormControl<number | null | undefined>,

		/**
		 * Level of free space to be maintained by Cloud Tiering if it is enabled.
		 * Minimum: 0
		 * Maximum: 100
		 */
		volumeFreeSpacePercent: FormControl<number | null | undefined>,
	}
	export function CreateServerEndpointCreateParametersPropertiesFormGroup() {
		return new FormGroup<ServerEndpointCreateParametersPropertiesFormProperties>({
			cloudTiering: new FormControl<FeatureStatus | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			offlineDataTransfer: new FormControl<FeatureStatus | null | undefined>(undefined),
			offlineDataTransferShareName: new FormControl<string | null | undefined>(undefined),
			serverLocalPath: new FormControl<string | null | undefined>(undefined),
			serverResourceId: new FormControl<string | null | undefined>(undefined),
			tierFilesOlderThanDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			volumeFreeSpacePercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Type of the Health state */
	export enum ServerEndpointOfflineDataTransferState { InProgress = 0, Stopping = 1, NotRunning = 2, Complete = 3 }


	/** Type of the sync activity state */
	export enum ServerEndpointSyncActivityState { Upload = 0, Download = 1, UploadAndDownload = 2 }


	/** Type of the sync health state */
	export enum ServerEndpointSyncHealthState { Healthy = 0, Error = 1, SyncBlockedForRestore = 2, SyncBlockedForChangeDetectionPostRestore = 3, NoActivity = 4 }


	/** Parameters for updating an Server Endpoint. */
	export interface ServerEndpointUpdateParameters {

		/** ServerEndpoint Update Properties object. */
		properties?: ServerEndpointUpdateProperties;
	}

	/** Parameters for updating an Server Endpoint. */
	export interface ServerEndpointUpdateParametersFormProperties {
	}
	export function CreateServerEndpointUpdateParametersFormGroup() {
		return new FormGroup<ServerEndpointUpdateParametersFormProperties>({
		});

	}


	/** ServerEndpoint Update Properties object. */
	export interface ServerEndpointUpdateProperties {

		/** Type of the Feature Status */
		cloudTiering?: FeatureStatus | null;

		/** Type of the Feature Status */
		offlineDataTransfer?: FeatureStatus | null;

		/** Offline data transfer share name */
		offlineDataTransferShareName?: string | null;

		/**
		 * Tier files older than days.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		tierFilesOlderThanDays?: number | null;

		/**
		 * Level of free space to be maintained by Cloud Tiering if it is enabled.
		 * Minimum: 0
		 * Maximum: 100
		 */
		volumeFreeSpacePercent?: number | null;
	}

	/** ServerEndpoint Update Properties object. */
	export interface ServerEndpointUpdatePropertiesFormProperties {

		/** Type of the Feature Status */
		cloudTiering: FormControl<FeatureStatus | null | undefined>,

		/** Type of the Feature Status */
		offlineDataTransfer: FormControl<FeatureStatus | null | undefined>,

		/** Offline data transfer share name */
		offlineDataTransferShareName: FormControl<string | null | undefined>,

		/**
		 * Tier files older than days.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		tierFilesOlderThanDays: FormControl<number | null | undefined>,

		/**
		 * Level of free space to be maintained by Cloud Tiering if it is enabled.
		 * Minimum: 0
		 * Maximum: 100
		 */
		volumeFreeSpacePercent: FormControl<number | null | undefined>,
	}
	export function CreateServerEndpointUpdatePropertiesFormGroup() {
		return new FormGroup<ServerEndpointUpdatePropertiesFormProperties>({
			cloudTiering: new FormControl<FeatureStatus | null | undefined>(undefined),
			offlineDataTransfer: new FormControl<FeatureStatus | null | undefined>(undefined),
			offlineDataTransferShareName: new FormControl<string | null | undefined>(undefined),
			tierFilesOlderThanDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			volumeFreeSpacePercent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Error type */
	export interface StorageSyncError {

		/** Error type */
		error?: StorageSyncApiError;

		/** Error type */
		innererror?: StorageSyncApiError;
	}

	/** Error type */
	export interface StorageSyncErrorFormProperties {
	}
	export function CreateStorageSyncErrorFormGroup() {
		return new FormGroup<StorageSyncErrorFormProperties>({
		});

	}


	/** Storage Sync Service object. */
	export interface StorageSyncService {

		/** Storage Sync Service Properties object. */
		properties?: StorageSyncServiceProperties;
	}

	/** Storage Sync Service object. */
	export interface StorageSyncServiceFormProperties {
	}
	export function CreateStorageSyncServiceFormGroup() {
		return new FormGroup<StorageSyncServiceFormProperties>({
		});

	}


	/** Storage Sync Service Properties object. */
	export interface StorageSyncServiceProperties {

		/** Storage Sync service status. */
		storageSyncServiceStatus?: number | null;

		/** Storage Sync service Uid */
		storageSyncServiceUid?: string | null;
	}

	/** Storage Sync Service Properties object. */
	export interface StorageSyncServicePropertiesFormProperties {

		/** Storage Sync service status. */
		storageSyncServiceStatus: FormControl<number | null | undefined>,

		/** Storage Sync service Uid */
		storageSyncServiceUid: FormControl<string | null | undefined>,
	}
	export function CreateStorageSyncServicePropertiesFormGroup() {
		return new FormGroup<StorageSyncServicePropertiesFormProperties>({
			storageSyncServiceStatus: new FormControl<number | null | undefined>(undefined),
			storageSyncServiceUid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of StorageSyncServices */
	export interface StorageSyncServiceArray {

		/** Collection of StorageSyncServices. */
		value?: Array<StorageSyncService>;
	}

	/** Array of StorageSyncServices */
	export interface StorageSyncServiceArrayFormProperties {
	}
	export function CreateStorageSyncServiceArrayFormGroup() {
		return new FormGroup<StorageSyncServiceArrayFormProperties>({
		});

	}


	/** The parameters used when creating a storage sync service. */
	export interface StorageSyncServiceCreateParameters {

		/**
		 * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
		 * Required
		 */
		location: string;
		properties?: any;

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters. */
		tags?: {[id: string]: string };
	}

	/** The parameters used when creating a storage sync service. */
	export interface StorageSyncServiceCreateParametersFormProperties {

		/**
		 * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
		 * Required
		 */
		location: FormControl<string | null | undefined>,
		properties: FormControl<any | null | undefined>,

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStorageSyncServiceCreateParametersFormGroup() {
		return new FormGroup<StorageSyncServiceCreateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Parameters for updating an Storage sync service. */
	export interface StorageSyncServiceUpdateParameters {

		/** Storage Sync Service Update Properties object. */
		properties?: StorageSyncServiceUpdateProperties;

		/** The user-specified tags associated with the storage sync service. */
		tags?: {[id: string]: string };
	}

	/** Parameters for updating an Storage sync service. */
	export interface StorageSyncServiceUpdateParametersFormProperties {

		/** The user-specified tags associated with the storage sync service. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStorageSyncServiceUpdateParametersFormGroup() {
		return new FormGroup<StorageSyncServiceUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Storage Sync Service Update Properties object. */
	export interface StorageSyncServiceUpdateProperties {
	}

	/** Storage Sync Service Update Properties object. */
	export interface StorageSyncServiceUpdatePropertiesFormProperties {
	}
	export function CreateStorageSyncServiceUpdatePropertiesFormGroup() {
		return new FormGroup<StorageSyncServiceUpdatePropertiesFormProperties>({
		});

	}


	/** Subscription State object. */
	export interface SubscriptionState {

		/** Is Transitioning */
		istransitioning?: boolean | null;

		/** Subscription State properties. */
		properties?: SubscriptionStateProperties;

		/** State of Azure Subscription */
		state?: SubscriptionStateState | null;
	}

	/** Subscription State object. */
	export interface SubscriptionStateFormProperties {

		/** Is Transitioning */
		istransitioning: FormControl<boolean | null | undefined>,

		/** State of Azure Subscription */
		state: FormControl<SubscriptionStateState | null | undefined>,
	}
	export function CreateSubscriptionStateFormGroup() {
		return new FormGroup<SubscriptionStateFormProperties>({
			istransitioning: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<SubscriptionStateState | null | undefined>(undefined),
		});

	}


	/** Subscription State properties. */
	export interface SubscriptionStateProperties {
	}

	/** Subscription State properties. */
	export interface SubscriptionStatePropertiesFormProperties {
	}
	export function CreateSubscriptionStatePropertiesFormGroup() {
		return new FormGroup<SubscriptionStatePropertiesFormProperties>({
		});

	}

	export enum SubscriptionStateState { Registered = 0, Unregistered = 1, Warned = 2, Suspended = 3, Deleted = 4 }


	/** Sync Group object. */
	export interface SyncGroup {

		/** SyncGroup Properties object. */
		properties?: SyncGroupProperties;
	}

	/** Sync Group object. */
	export interface SyncGroupFormProperties {
	}
	export function CreateSyncGroupFormGroup() {
		return new FormGroup<SyncGroupFormProperties>({
		});

	}


	/** SyncGroup Properties object. */
	export interface SyncGroupProperties {

		/** Sync group status */
		syncGroupStatus?: string | null;

		/** Unique Id */
		uniqueId?: string | null;
	}

	/** SyncGroup Properties object. */
	export interface SyncGroupPropertiesFormProperties {

		/** Sync group status */
		syncGroupStatus: FormControl<string | null | undefined>,

		/** Unique Id */
		uniqueId: FormControl<string | null | undefined>,
	}
	export function CreateSyncGroupPropertiesFormGroup() {
		return new FormGroup<SyncGroupPropertiesFormProperties>({
			syncGroupStatus: new FormControl<string | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of SyncGroup */
	export interface SyncGroupArray {

		/** Collection of SyncGroup. */
		value?: Array<SyncGroup>;
	}

	/** Array of SyncGroup */
	export interface SyncGroupArrayFormProperties {
	}
	export function CreateSyncGroupArrayFormGroup() {
		return new FormGroup<SyncGroupArrayFormProperties>({
		});

	}


	/** The parameters used when creating a sync group. */
	export interface SyncGroupCreateParameters {

		/** Sync Group Create Properties object. */
		properties?: SyncGroupCreateParametersProperties;
	}

	/** The parameters used when creating a sync group. */
	export interface SyncGroupCreateParametersFormProperties {
	}
	export function CreateSyncGroupCreateParametersFormGroup() {
		return new FormGroup<SyncGroupCreateParametersFormProperties>({
		});

	}


	/** Sync Group Create Properties object. */
	export interface SyncGroupCreateParametersProperties {
	}

	/** Sync Group Create Properties object. */
	export interface SyncGroupCreateParametersPropertiesFormProperties {
	}
	export function CreateSyncGroupCreateParametersPropertiesFormGroup() {
		return new FormGroup<SyncGroupCreateParametersPropertiesFormProperties>({
		});

	}


	/** Tags object. */
	export interface TagsObject {
	}

	/** Tags object. */
	export interface TagsObjectFormProperties {
	}
	export function CreateTagsObjectFormGroup() {
		return new FormGroup<TagsObjectFormProperties>({
		});

	}


	/** The parameters used when calling trigger change detection action on cloud endpoint. */
	export interface TriggerChangeDetectionParameters {

		/** Change Detection Mode. Applies to a directory specified in directoryPath parameter. */
		changeDetectionMode?: TriggerChangeDetectionParametersChangeDetectionMode | null;

		/** Relative path to a directory Azure File share for which change detection is to be performed. */
		directoryPath?: string | null;

		/** Array of relative paths on the Azure File share to be included in the change detection. Can be files and directories. */
		paths?: Array<string>;
	}

	/** The parameters used when calling trigger change detection action on cloud endpoint. */
	export interface TriggerChangeDetectionParametersFormProperties {

		/** Change Detection Mode. Applies to a directory specified in directoryPath parameter. */
		changeDetectionMode: FormControl<TriggerChangeDetectionParametersChangeDetectionMode | null | undefined>,

		/** Relative path to a directory Azure File share for which change detection is to be performed. */
		directoryPath: FormControl<string | null | undefined>,
	}
	export function CreateTriggerChangeDetectionParametersFormGroup() {
		return new FormGroup<TriggerChangeDetectionParametersFormProperties>({
			changeDetectionMode: new FormControl<TriggerChangeDetectionParametersChangeDetectionMode | null | undefined>(undefined),
			directoryPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TriggerChangeDetectionParametersChangeDetectionMode { Default = 0, Recursive = 1 }


	/** Trigger Rollover Request. */
	export interface TriggerRolloverRequest {

		/** Certificate Data */
		serverCertificate?: string | null;
	}

	/** Trigger Rollover Request. */
	export interface TriggerRolloverRequestFormProperties {

		/** Certificate Data */
		serverCertificate: FormControl<string | null | undefined>,
	}
	export function CreateTriggerRolloverRequestFormGroup() {
		return new FormGroup<TriggerRolloverRequestFormProperties>({
			serverCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Workflow resource. */
	export interface Workflow {

		/** Workflow Properties object. */
		properties?: WorkflowProperties;
	}

	/** Workflow resource. */
	export interface WorkflowFormProperties {
	}
	export function CreateWorkflowFormGroup() {
		return new FormGroup<WorkflowFormProperties>({
		});

	}


	/** Workflow Properties object. */
	export interface WorkflowProperties {

		/** workflow last operation identifier. */
		lastOperationId?: string | null;

		/** last step name */
		lastStepName?: string | null;

		/** Type of the Operation Direction */
		operation?: OperationDirection | null;

		/** Type of the Workflow Status */
		status?: WorkflowPropertiesStatus | null;

		/** workflow steps */
		steps?: string | null;
	}

	/** Workflow Properties object. */
	export interface WorkflowPropertiesFormProperties {

		/** workflow last operation identifier. */
		lastOperationId: FormControl<string | null | undefined>,

		/** last step name */
		lastStepName: FormControl<string | null | undefined>,

		/** Type of the Operation Direction */
		operation: FormControl<OperationDirection | null | undefined>,

		/** Type of the Workflow Status */
		status: FormControl<WorkflowPropertiesStatus | null | undefined>,

		/** workflow steps */
		steps: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowPropertiesFormGroup() {
		return new FormGroup<WorkflowPropertiesFormProperties>({
			lastOperationId: new FormControl<string | null | undefined>(undefined),
			lastStepName: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<OperationDirection | null | undefined>(undefined),
			status: new FormControl<WorkflowPropertiesStatus | null | undefined>(undefined),
			steps: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkflowPropertiesStatus { active = 0, expired = 1, succeeded = 2, aborted = 3, failed = 4 }


	/** Array of Workflow */
	export interface WorkflowArray {

		/** Collection of workflow items. */
		value?: Array<Workflow>;
	}

	/** Array of Workflow */
	export interface WorkflowArrayFormProperties {
	}
	export function CreateWorkflowArrayFormGroup() {
		return new FormGroup<WorkflowArrayFormProperties>({
		});

	}


	/** Type of the Workflow Status */
	export enum WorkflowStatus { active = 0, expired = 1, succeeded = 2, aborted = 3, failed = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Storage Sync Rest API operations.
		 * Get providers/Microsoft.StorageSync/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {OperationEntityListResult} Array of operations resources in the Resource Provider
		 */
		Operations_List(api_version: string): Observable<OperationEntityListResult> {
			return this.http.get<OperationEntityListResult>(this.baseUri + 'providers/Microsoft.StorageSync/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check the give namespace name availability.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.StorageSync/locations/{locationName}/checkNameAvailability
		 * @param {string} locationName The desired region for the name check.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {CheckNameAvailabilityParameters} requestBody Parameters to check availability of the given namespace name
		 * @return {CheckNameAvailabilityResult} check availability returned successfully.
		 */
		StorageSyncServices_CheckNameAvailability(locationName: string, api_version: string, subscriptionId: string, requestBody: CheckNameAvailabilityParameters): Observable<CheckNameAvailabilityResult> {
			return this.http.post<CheckNameAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.StorageSync/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a StorageSyncService list by subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.StorageSync/storageSyncServices
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {StorageSyncServiceArray} Array of registered Storage Sync Service resources in the subscription.
		 */
		StorageSyncServices_ListBySubscription(subscriptionId: string, api_version: string): Observable<StorageSyncServiceArray> {
			return this.http.get<StorageSyncServiceArray>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.StorageSync/storageSyncServices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Operation status
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/locations/{locationName}/workflows/{workflowId}/operations/{operationId}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} locationName The desired region to obtain information from.
		 * @param {string} workflowId workflow Id
		 * @param {string} operationId operation Id
		 * @return {OperationStatus} Operation Status
		 */
		OperationStatus_Get(subscriptionId: string, resourceGroupName: string, api_version: string, locationName: string, workflowId: string, operationId: string): Observable<OperationStatus> {
			return this.http.get<OperationStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a StorageSyncService list by Resource group name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {StorageSyncServiceArray} Array of registered Storage Sync Service resources in the Resource Group
		 */
		StorageSyncServices_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<StorageSyncServiceArray> {
			return this.http.get<StorageSyncServiceArray>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a given StorageSyncService.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {StorageSyncService} Storage Sync Service object
		 */
		StorageSyncServices_Get(subscriptionId: string, resourceGroupName: string, storageSyncServiceName: string, api_version: string): Observable<StorageSyncService> {
			return this.http.get<StorageSyncService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a new StorageSyncService.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {StorageSyncServiceCreateParameters} requestBody Storage Sync Service resource name.
		 * @return {StorageSyncService} Storage Sync Service object created/updated
		 */
		StorageSyncServices_Create(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, requestBody: StorageSyncServiceCreateParameters): Observable<StorageSyncService> {
			return this.http.put<StorageSyncService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a given StorageSyncService.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @return {void} Storage Sync Service object was deleted.
		 */
		StorageSyncServices_Delete(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch a given StorageSyncService.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {StorageSyncServiceUpdateParameters} requestBody Storage Sync Service resource.
		 * @return {StorageSyncService} Storage Sync Service object created/updated
		 */
		StorageSyncServices_Update(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, requestBody: StorageSyncServiceUpdateParameters): Observable<StorageSyncService> {
			return this.http.patch<StorageSyncService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a given registered server list.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @return {RegisteredServerArray} Array of Registered Server resources in Storage Sync Service
		 */
		RegisteredServers_ListByStorageSyncService(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string): Observable<RegisteredServerArray> {
			return this.http.get<RegisteredServerArray>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/registeredServers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a given registered server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} serverId GUID identifying the on-premises server.
		 * @return {RegisteredServer} Registered Server resources in Sync Group
		 */
		RegisteredServers_Get(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, serverId: string): Observable<RegisteredServer> {
			return this.http.get<RegisteredServer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/registeredServers/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Add a new registered server.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} serverId GUID identifying the on-premises server.
		 * @param {RegisteredServerCreateParameters} requestBody Body of Registered Server object.
		 * @return {RegisteredServer} Registered Server resources in Sync Group
		 */
		RegisteredServers_Create(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, serverId: string, requestBody: RegisteredServerCreateParameters): Observable<RegisteredServer> {
			return this.http.put<RegisteredServer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/registeredServers/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the given registered server.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} serverId GUID identifying the on-premises server.
		 * @return {void} Ok
		 */
		RegisteredServers_Delete(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, serverId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/registeredServers/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Triggers Server certificate rollover.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}/triggerRollover
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} serverId Server Id
		 * @param {TriggerRolloverRequest} requestBody Body of Trigger Rollover request.
		 * @return {void} Trigger Rollover success status
		 */
		RegisteredServers_triggerRollover(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, serverId: string, requestBody: TriggerRolloverRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/registeredServers/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '/triggerRollover&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a SyncGroup List.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @return {SyncGroupArray} Array of Sync Group resources in Storage Sync Service
		 */
		SyncGroups_ListByStorageSyncService(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string): Observable<SyncGroupArray> {
			return this.http.get<SyncGroupArray>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a given SyncGroup.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @return {SyncGroup} Sync Group object
		 */
		SyncGroups_Get(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string): Observable<SyncGroup> {
			return this.http.get<SyncGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a new SyncGroup.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {SyncGroupCreateParameters} requestBody Sync Group Body
		 * @return {SyncGroup} Sync Group object
		 */
		SyncGroups_Create(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, requestBody: SyncGroupCreateParameters): Observable<SyncGroup> {
			return this.http.put<SyncGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a given SyncGroup.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @return {void} Sync Group object was deleted
		 */
		SyncGroups_Delete(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a CloudEndpoint List.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @return {CloudEndpointArray} Array of Cloud Endpoint resources in Sync Group
		 */
		CloudEndpoints_ListBySyncGroup(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string): Observable<CloudEndpointArray> {
			return this.http.get<CloudEndpointArray>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cloudEndpoints&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a given CloudEndpoint.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} cloudEndpointName Name of Cloud Endpoint object.
		 * @return {CloudEndpoint} Cloud Endpoint object
		 */
		CloudEndpoints_Get(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string): Observable<CloudEndpoint> {
			return this.http.get<CloudEndpoint>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cloudEndpoints/' + (cloudEndpointName == null ? '' : encodeURIComponent(cloudEndpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a new CloudEndpoint.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} cloudEndpointName Name of Cloud Endpoint object.
		 * @param {CloudEndpointCreateParameters} requestBody Body of Cloud Endpoint resource.
		 * @return {CloudEndpoint} Cloud Endpoint object
		 */
		CloudEndpoints_Create(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, requestBody: CloudEndpointCreateParameters): Observable<CloudEndpoint> {
			return this.http.put<CloudEndpoint>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cloudEndpoints/' + (cloudEndpointName == null ? '' : encodeURIComponent(cloudEndpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a given CloudEndpoint.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} cloudEndpointName Name of Cloud Endpoint object.
		 * @return {void} Ok
		 */
		CloudEndpoints_Delete(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cloudEndpoints/' + (cloudEndpointName == null ? '' : encodeURIComponent(cloudEndpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post Backup a given CloudEndpoint.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/postbackup
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} cloudEndpointName Name of Cloud Endpoint object.
		 * @param {BackupRequest} requestBody Body of Backup request.
		 * @return {PostBackupResponse} Ok
		 */
		CloudEndpoints_PostBackup(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, requestBody: BackupRequest): Observable<PostBackupResponse> {
			return this.http.post<PostBackupResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cloudEndpoints/' + (cloudEndpointName == null ? '' : encodeURIComponent(cloudEndpointName)) + '/postbackup&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post Restore a given CloudEndpoint.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/postrestore
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} cloudEndpointName Name of Cloud Endpoint object.
		 * @param {PostRestoreRequest} requestBody Body of Cloud Endpoint object.
		 * @return {void} Ok
		 */
		CloudEndpoints_PostRestore(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, requestBody: PostRestoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cloudEndpoints/' + (cloudEndpointName == null ? '' : encodeURIComponent(cloudEndpointName)) + '/postrestore&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pre Backup a given CloudEndpoint.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/prebackup
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} cloudEndpointName Name of Cloud Endpoint object.
		 * @param {BackupRequest} requestBody Body of Backup request.
		 * @return {void} Ok
		 */
		CloudEndpoints_PreBackup(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, requestBody: BackupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cloudEndpoints/' + (cloudEndpointName == null ? '' : encodeURIComponent(cloudEndpointName)) + '/prebackup&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pre Restore a given CloudEndpoint.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/prerestore
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} cloudEndpointName Name of Cloud Endpoint object.
		 * @param {PreRestoreRequest} requestBody Body of Cloud Endpoint object.
		 * @return {void} Ok
		 */
		CloudEndpoints_PreRestore(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, requestBody: PreRestoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cloudEndpoints/' + (cloudEndpointName == null ? '' : encodeURIComponent(cloudEndpointName)) + '/prerestore&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restore Heartbeat a given CloudEndpoint.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/restoreheartbeat
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} cloudEndpointName Name of Cloud Endpoint object.
		 * @return {void} Restore Heartbeat Operation has ran successfully.
		 */
		CloudEndpoints_restoreheartbeat(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cloudEndpoints/' + (cloudEndpointName == null ? '' : encodeURIComponent(cloudEndpointName)) + '/restoreheartbeat&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Triggers detection of changes performed on Azure File share connected to the specified Azure File Sync Cloud Endpoint.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/triggerChangeDetection
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} cloudEndpointName Name of Cloud Endpoint object.
		 * @param {TriggerChangeDetectionParameters} requestBody Trigger Change Detection Action parameters.
		 * @return {void} Ok
		 */
		CloudEndpoints_TriggerChangeDetection(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, cloudEndpointName: string, requestBody: TriggerChangeDetectionParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cloudEndpoints/' + (cloudEndpointName == null ? '' : encodeURIComponent(cloudEndpointName)) + '/triggerChangeDetection&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a ServerEndpoint list.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @return {ServerEndpointArray} Array of Server Endpoint resources in Sync Group
		 */
		ServerEndpoints_ListBySyncGroup(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string): Observable<ServerEndpointArray> {
			return this.http.get<ServerEndpointArray>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/serverEndpoints&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a ServerEndpoint.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} serverEndpointName Name of Server Endpoint object.
		 * @return {ServerEndpoint} Server Endpoint object
		 */
		ServerEndpoints_Get(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, serverEndpointName: string): Observable<ServerEndpoint> {
			return this.http.get<ServerEndpoint>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/serverEndpoints/' + (serverEndpointName == null ? '' : encodeURIComponent(serverEndpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a new ServerEndpoint.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} serverEndpointName Name of Server Endpoint object.
		 * @param {ServerEndpointCreateParameters} requestBody Body of Server Endpoint object.
		 * @return {ServerEndpoint} Server Endpoint object
		 */
		ServerEndpoints_Create(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, serverEndpointName: string, requestBody: ServerEndpointCreateParameters): Observable<ServerEndpoint> {
			return this.http.put<ServerEndpoint>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/serverEndpoints/' + (serverEndpointName == null ? '' : encodeURIComponent(serverEndpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a given ServerEndpoint.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} serverEndpointName Name of Server Endpoint object.
		 * @return {void} Ok
		 */
		ServerEndpoints_Delete(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, serverEndpointName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/serverEndpoints/' + (serverEndpointName == null ? '' : encodeURIComponent(serverEndpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch a given ServerEndpoint.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} serverEndpointName Name of Server Endpoint object.
		 * @param {ServerEndpointUpdateParameters} requestBody Any of the properties applicable in PUT request.
		 * @return {ServerEndpoint} Server Endpoint object
		 */
		ServerEndpoints_Update(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, serverEndpointName: string, requestBody: ServerEndpointUpdateParameters): Observable<ServerEndpoint> {
			return this.http.patch<ServerEndpoint>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/serverEndpoints/' + (serverEndpointName == null ? '' : encodeURIComponent(serverEndpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Recall a server endpoint.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}/recallAction
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} syncGroupName Name of Sync Group resource.
		 * @param {string} serverEndpointName Name of Server Endpoint object.
		 * @param {RecallActionParameters} requestBody Body of Recall Action object.
		 * @return {void} Server Endpoint object
		 */
		ServerEndpoints_recallAction(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, syncGroupName: string, serverEndpointName: string, requestBody: RecallActionParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/serverEndpoints/' + (serverEndpointName == null ? '' : encodeURIComponent(serverEndpointName)) + '/recallAction&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Workflow List
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/workflows
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @return {WorkflowArray} Array of Workflow resources in Storage Sync Service
		 */
		Workflows_ListByStorageSyncService(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string): Observable<WorkflowArray> {
			return this.http.get<WorkflowArray>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/workflows&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get Workflows resource
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/workflows/{workflowId}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} workflowId workflow Id
		 * @return {Workflow} Workflow object
		 */
		Workflows_Get(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, workflowId: string): Observable<Workflow> {
			return this.http.get<Workflow>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Abort the given workflow.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/workflows/{workflowId}/abort
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} storageSyncServiceName Name of Storage Sync Service resource.
		 * @param {string} workflowId workflow Id
		 * @return {void} success
		 */
		Workflows_Abort(subscriptionId: string, resourceGroupName: string, api_version: string, storageSyncServiceName: string, workflowId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageSync/storageSyncServices/' + (storageSyncServiceName == null ? '' : encodeURIComponent(storageSyncServiceName)) + '/workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '/abort&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

