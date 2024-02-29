import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptEulasResponse {
		eulaAcceptances?: Array<EulaAcceptance>;
	}
	export interface AcceptEulasResponseFormProperties {
	}
	export function CreateAcceptEulasResponseFormGroup() {
		return new FormGroup<AcceptEulasResponseFormProperties>({
		});

	}


	/** The acceptance of a EULA, required to use Amazon-provided streaming images. */
	export interface EulaAcceptance {
		acceptedAt?: Date;
		acceptedBy?: string;
		accepteeId?: string;
		eulaAcceptanceId?: string;
		eulaId?: string;
	}

	/** The acceptance of a EULA, required to use Amazon-provided streaming images. */
	export interface EulaAcceptanceFormProperties {
		acceptedAt: FormControl<Date | null | undefined>,
		acceptedBy: FormControl<string | null | undefined>,
		accepteeId: FormControl<string | null | undefined>,
		eulaAcceptanceId: FormControl<string | null | undefined>,
		eulaId: FormControl<string | null | undefined>,
	}
	export function CreateEulaAcceptanceFormGroup() {
		return new FormGroup<EulaAcceptanceFormProperties>({
			acceptedAt: new FormControl<Date | null | undefined>(undefined),
			acceptedBy: new FormControl<string | null | undefined>(undefined),
			accepteeId: new FormControl<string | null | undefined>(undefined),
			eulaAcceptanceId: new FormControl<string | null | undefined>(undefined),
			eulaId: new FormControl<string | null | undefined>(undefined),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
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

	export interface CreateLaunchProfileResponse {
		launchProfile?: LaunchProfile;
	}
	export interface CreateLaunchProfileResponseFormProperties {
	}
	export function CreateCreateLaunchProfileResponseFormGroup() {
		return new FormGroup<CreateLaunchProfileResponseFormProperties>({
		});

	}


	/** <p>A launch profile controls your artist workforce’s access to studio components, like compute farms, shared file systems, managed file systems, and license server configurations, as well as instance types and Amazon Machine Images (AMIs). </p> <p>Studio administrators create launch profiles in the Nimble Studio console. Artists can use their launch profiles to launch an instance from the Nimble Studio portal. Each user’s launch profile defines how they can launch a streaming session. By default, studio admins can use all launch profiles.</p> */
	export interface LaunchProfile {
		arn?: string;
		createdAt?: Date;
		createdBy?: string;
		description?: string;
		ec2SubnetIds?: Array<string>;
		launchProfileId?: string;
		launchProfileProtocolVersions?: Array<string>;
		name?: string;
		state?: LaunchProfileState;
		statusCode?: LaunchProfileStatusCode;
		statusMessage?: string;
		streamConfiguration?: StreamConfiguration;
		studioComponentIds?: Array<string>;
		tags?: Tags;
		updatedAt?: Date;
		updatedBy?: string;
		validationResults?: Array<ValidationResult>;
	}

	/** <p>A launch profile controls your artist workforce’s access to studio components, like compute farms, shared file systems, managed file systems, and license server configurations, as well as instance types and Amazon Machine Images (AMIs). </p> <p>Studio administrators create launch profiles in the Nimble Studio console. Artists can use their launch profiles to launch an instance from the Nimble Studio portal. Each user’s launch profile defines how they can launch a streaming session. By default, studio admins can use all launch profiles.</p> */
	export interface LaunchProfileFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		launchProfileId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<LaunchProfileState | null | undefined>,
		statusCode: FormControl<LaunchProfileStatusCode | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		updatedBy: FormControl<string | null | undefined>,
	}
	export function CreateLaunchProfileFormGroup() {
		return new FormGroup<LaunchProfileFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			launchProfileId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LaunchProfileState | null | undefined>(undefined),
			statusCode: new FormControl<LaunchProfileStatusCode | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			updatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LaunchProfileState { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', READY = 'READY', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETED = 'DELETED', DELETE_FAILED = 'DELETE_FAILED', CREATE_FAILED = 'CREATE_FAILED', UPDATE_FAILED = 'UPDATE_FAILED' }

	export enum LaunchProfileStatusCode { LAUNCH_PROFILE_CREATED = 'LAUNCH_PROFILE_CREATED', LAUNCH_PROFILE_UPDATED = 'LAUNCH_PROFILE_UPDATED', LAUNCH_PROFILE_DELETED = 'LAUNCH_PROFILE_DELETED', LAUNCH_PROFILE_CREATE_IN_PROGRESS = 'LAUNCH_PROFILE_CREATE_IN_PROGRESS', LAUNCH_PROFILE_UPDATE_IN_PROGRESS = 'LAUNCH_PROFILE_UPDATE_IN_PROGRESS', LAUNCH_PROFILE_DELETE_IN_PROGRESS = 'LAUNCH_PROFILE_DELETE_IN_PROGRESS', INTERNAL_ERROR = 'INTERNAL_ERROR', STREAMING_IMAGE_NOT_FOUND = 'STREAMING_IMAGE_NOT_FOUND', STREAMING_IMAGE_NOT_READY = 'STREAMING_IMAGE_NOT_READY', LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED = 'LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED', ENCRYPTION_KEY_ACCESS_DENIED = 'ENCRYPTION_KEY_ACCESS_DENIED', ENCRYPTION_KEY_NOT_FOUND = 'ENCRYPTION_KEY_NOT_FOUND', INVALID_SUBNETS_PROVIDED = 'INVALID_SUBNETS_PROVIDED', INVALID_INSTANCE_TYPES_PROVIDED = 'INVALID_INSTANCE_TYPES_PROVIDED', INVALID_SUBNETS_COMBINATION = 'INVALID_SUBNETS_COMBINATION' }


	/** A configuration for a streaming session. */
	export interface StreamConfiguration {
		automaticTerminationMode?: AutomaticTerminationMode;

		/** Required */
		clipboardMode: StreamingClipboardMode;

		/** Required */
		ec2InstanceTypes: Array<StreamingInstanceType>;
		maxSessionLengthInMinutes?: number | null;
		maxStoppedSessionLengthInMinutes?: number | null;
		sessionBackup?: StreamConfigurationSessionBackup;
		sessionPersistenceMode?: AutomaticTerminationMode;
		sessionStorage?: StreamConfigurationSessionStorage;

		/** Required */
		streamingImageIds: Array<string>;
		volumeConfiguration?: VolumeConfiguration;
	}

	/** A configuration for a streaming session. */
	export interface StreamConfigurationFormProperties {
		automaticTerminationMode: FormControl<AutomaticTerminationMode | null | undefined>,

		/** Required */
		clipboardMode: FormControl<StreamingClipboardMode | null | undefined>,
		maxSessionLengthInMinutes: FormControl<number | null | undefined>,
		maxStoppedSessionLengthInMinutes: FormControl<number | null | undefined>,
		sessionPersistenceMode: FormControl<AutomaticTerminationMode | null | undefined>,
	}
	export function CreateStreamConfigurationFormGroup() {
		return new FormGroup<StreamConfigurationFormProperties>({
			automaticTerminationMode: new FormControl<AutomaticTerminationMode | null | undefined>(undefined),
			clipboardMode: new FormControl<StreamingClipboardMode | null | undefined>(undefined, [Validators.required]),
			maxSessionLengthInMinutes: new FormControl<number | null | undefined>(undefined),
			maxStoppedSessionLengthInMinutes: new FormControl<number | null | undefined>(undefined),
			sessionPersistenceMode: new FormControl<AutomaticTerminationMode | null | undefined>(undefined),
		});

	}

	export enum AutomaticTerminationMode { DEACTIVATED = 'DEACTIVATED', ACTIVATED = 'ACTIVATED' }

	export enum StreamingClipboardMode { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum StreamingInstanceType { 'g4dn.xlarge' = 'g4dn.xlarge', 'g4dn.2xlarge' = 'g4dn.2xlarge', 'g4dn.4xlarge' = 'g4dn.4xlarge', 'g4dn.8xlarge' = 'g4dn.8xlarge', 'g4dn.12xlarge' = 'g4dn.12xlarge', 'g4dn.16xlarge' = 'g4dn.16xlarge', 'g3.4xlarge' = 'g3.4xlarge', 'g3s.xlarge' = 'g3s.xlarge', 'g5.xlarge' = 'g5.xlarge', 'g5.2xlarge' = 'g5.2xlarge', 'g5.4xlarge' = 'g5.4xlarge', 'g5.8xlarge' = 'g5.8xlarge', 'g5.16xlarge' = 'g5.16xlarge' }


	/** Configures how streaming sessions are backed up when launched from this launch profile. */
	export interface StreamConfigurationSessionBackup {
		maxBackupsToRetain?: number | null;
		mode?: SessionBackupMode;
	}

	/** Configures how streaming sessions are backed up when launched from this launch profile. */
	export interface StreamConfigurationSessionBackupFormProperties {
		maxBackupsToRetain: FormControl<number | null | undefined>,
		mode: FormControl<SessionBackupMode | null | undefined>,
	}
	export function CreateStreamConfigurationSessionBackupFormGroup() {
		return new FormGroup<StreamConfigurationSessionBackupFormProperties>({
			maxBackupsToRetain: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<SessionBackupMode | null | undefined>(undefined),
		});

	}

	export enum SessionBackupMode { AUTOMATIC = 'AUTOMATIC', DEACTIVATED = 'DEACTIVATED' }


	/** The configuration for a streaming session’s upload storage. */
	export interface StreamConfigurationSessionStorage {

		/** Required */
		mode: Array<StreamingSessionStorageMode>;
		root?: StreamingSessionStorageRoot;
	}

	/** The configuration for a streaming session’s upload storage. */
	export interface StreamConfigurationSessionStorageFormProperties {
	}
	export function CreateStreamConfigurationSessionStorageFormGroup() {
		return new FormGroup<StreamConfigurationSessionStorageFormProperties>({
		});

	}

	export enum StreamingSessionStorageMode { UPLOAD = 'UPLOAD' }


	/** The upload storage root location (folder) on streaming workstations where files are uploaded. */
	export interface StreamingSessionStorageRoot {
		linux?: string;
		windows?: string;
	}

	/** The upload storage root location (folder) on streaming workstations where files are uploaded. */
	export interface StreamingSessionStorageRootFormProperties {
		linux: FormControl<string | null | undefined>,
		windows: FormControl<string | null | undefined>,
	}
	export function CreateStreamingSessionStorageRootFormGroup() {
		return new FormGroup<StreamingSessionStorageRootFormProperties>({
			linux: new FormControl<string | null | undefined>(undefined),
			windows: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Custom volume configuration for the root volumes that are attached to streaming sessions.</p> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>.</p> */
	export interface VolumeConfiguration {
		iops?: number | null;
		size?: number | null;
		throughput?: number | null;
	}

	/** <p>Custom volume configuration for the root volumes that are attached to streaming sessions.</p> <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is <code>ACTIVATED</code>.</p> */
	export interface VolumeConfigurationFormProperties {
		iops: FormControl<number | null | undefined>,
		size: FormControl<number | null | undefined>,
		throughput: FormControl<number | null | undefined>,
	}
	export function CreateVolumeConfigurationFormGroup() {
		return new FormGroup<VolumeConfigurationFormProperties>({
			iops: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			throughput: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}


	/** The launch profile validation result. */
	export interface ValidationResult {

		/** Required */
		state: LaunchProfileValidationState;

		/** Required */
		statusCode: LaunchProfileValidationStatusCode;

		/** Required */
		statusMessage: string;

		/** Required */
		type: LaunchProfileValidationType;
	}

	/** The launch profile validation result. */
	export interface ValidationResultFormProperties {

		/** Required */
		state: FormControl<LaunchProfileValidationState | null | undefined>,

		/** Required */
		statusCode: FormControl<LaunchProfileValidationStatusCode | null | undefined>,

		/** Required */
		statusMessage: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<LaunchProfileValidationType | null | undefined>,
	}
	export function CreateValidationResultFormGroup() {
		return new FormGroup<ValidationResultFormProperties>({
			state: new FormControl<LaunchProfileValidationState | null | undefined>(undefined, [Validators.required]),
			statusCode: new FormControl<LaunchProfileValidationStatusCode | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<LaunchProfileValidationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LaunchProfileValidationState { VALIDATION_NOT_STARTED = 'VALIDATION_NOT_STARTED', VALIDATION_IN_PROGRESS = 'VALIDATION_IN_PROGRESS', VALIDATION_SUCCESS = 'VALIDATION_SUCCESS', VALIDATION_FAILED = 'VALIDATION_FAILED', VALIDATION_FAILED_INTERNAL_SERVER_ERROR = 'VALIDATION_FAILED_INTERNAL_SERVER_ERROR' }

	export enum LaunchProfileValidationStatusCode { VALIDATION_NOT_STARTED = 'VALIDATION_NOT_STARTED', VALIDATION_IN_PROGRESS = 'VALIDATION_IN_PROGRESS', VALIDATION_SUCCESS = 'VALIDATION_SUCCESS', VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION = 'VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION', VALIDATION_FAILED_SUBNET_NOT_FOUND = 'VALIDATION_FAILED_SUBNET_NOT_FOUND', VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION = 'VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION', VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY = 'VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY', VALIDATION_FAILED_UNAUTHORIZED = 'VALIDATION_FAILED_UNAUTHORIZED', VALIDATION_FAILED_INTERNAL_SERVER_ERROR = 'VALIDATION_FAILED_INTERNAL_SERVER_ERROR' }

	export enum LaunchProfileValidationType { VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT = 'VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT', VALIDATE_SUBNET_ASSOCIATION = 'VALIDATE_SUBNET_ASSOCIATION', VALIDATE_NETWORK_ACL_ASSOCIATION = 'VALIDATE_NETWORK_ACL_ASSOCIATION', VALIDATE_SECURITY_GROUP_ASSOCIATION = 'VALIDATE_SECURITY_GROUP_ASSOCIATION' }

	export enum SessionPersistenceMode { DEACTIVATED = 'DEACTIVATED', ACTIVATED = 'ACTIVATED' }

	export interface CreateStreamingImageResponse {
		streamingImage?: StreamingImage;
	}
	export interface CreateStreamingImageResponseFormProperties {
	}
	export function CreateCreateStreamingImageResponseFormGroup() {
		return new FormGroup<CreateStreamingImageResponseFormProperties>({
		});

	}


	/** <p>Represents a streaming image resource.</p> <p>Streaming images are used by studio users to select which operating system and software they want to use in a Nimble Studio streaming session.</p> <p>Amazon provides a number of streaming images that include popular 3rd-party software.</p> <p>You can create your own streaming images using an Amazon EC2 machine image that you create for this purpose. You can also include software that your users require.</p> */
	export interface StreamingImage {
		arn?: string;
		description?: string;
		ec2ImageId?: string;
		encryptionConfiguration?: StreamingImageEncryptionConfiguration;
		eulaIds?: Array<string>;
		name?: string;
		owner?: string;
		platform?: string;
		state?: StreamingImageState;
		statusCode?: StreamingImageStatusCode;
		statusMessage?: string;
		streamingImageId?: string;
		tags?: Tags;
	}

	/** <p>Represents a streaming image resource.</p> <p>Streaming images are used by studio users to select which operating system and software they want to use in a Nimble Studio streaming session.</p> <p>Amazon provides a number of streaming images that include popular 3rd-party software.</p> <p>You can create your own streaming images using an Amazon EC2 machine image that you create for this purpose. You can also include software that your users require.</p> */
	export interface StreamingImageFormProperties {
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		ec2ImageId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
		state: FormControl<StreamingImageState | null | undefined>,
		statusCode: FormControl<StreamingImageStatusCode | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		streamingImageId: FormControl<string | null | undefined>,
	}
	export function CreateStreamingImageFormGroup() {
		return new FormGroup<StreamingImageFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ec2ImageId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StreamingImageState | null | undefined>(undefined),
			statusCode: new FormControl<StreamingImageStatusCode | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			streamingImageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how a streaming image is encrypted. */
	export interface StreamingImageEncryptionConfiguration {
		keyArn?: string;

		/** Required */
		keyType: StreamingImageEncryptionConfigurationKeyType;
	}

	/** Specifies how a streaming image is encrypted. */
	export interface StreamingImageEncryptionConfigurationFormProperties {
		keyArn: FormControl<string | null | undefined>,

		/** Required */
		keyType: FormControl<StreamingImageEncryptionConfigurationKeyType | null | undefined>,
	}
	export function CreateStreamingImageEncryptionConfigurationFormGroup() {
		return new FormGroup<StreamingImageEncryptionConfigurationFormProperties>({
			keyArn: new FormControl<string | null | undefined>(undefined),
			keyType: new FormControl<StreamingImageEncryptionConfigurationKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StreamingImageEncryptionConfigurationKeyType { CUSTOMER_MANAGED_KEY = 'CUSTOMER_MANAGED_KEY' }

	export enum StreamingImageState { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', READY = 'READY', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETED = 'DELETED', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', UPDATE_FAILED = 'UPDATE_FAILED', CREATE_FAILED = 'CREATE_FAILED', DELETE_FAILED = 'DELETE_FAILED' }


	/** The status code. */
	export enum StreamingImageStatusCode { STREAMING_IMAGE_CREATE_IN_PROGRESS = 'STREAMING_IMAGE_CREATE_IN_PROGRESS', STREAMING_IMAGE_READY = 'STREAMING_IMAGE_READY', STREAMING_IMAGE_DELETE_IN_PROGRESS = 'STREAMING_IMAGE_DELETE_IN_PROGRESS', STREAMING_IMAGE_DELETED = 'STREAMING_IMAGE_DELETED', STREAMING_IMAGE_UPDATE_IN_PROGRESS = 'STREAMING_IMAGE_UPDATE_IN_PROGRESS', INTERNAL_ERROR = 'INTERNAL_ERROR', ACCESS_DENIED = 'ACCESS_DENIED' }

	export interface CreateStreamingSessionResponse {
		session?: StreamingSession;
	}
	export interface CreateStreamingSessionResponseFormProperties {
	}
	export function CreateCreateStreamingSessionResponseFormGroup() {
		return new FormGroup<CreateStreamingSessionResponseFormProperties>({
		});

	}


	/** A streaming session is a virtual workstation created using a particular launch profile. */
	export interface StreamingSession {
		arn?: string;
		automaticTerminationMode?: AutomaticTerminationMode;
		backupMode?: SessionBackupMode;
		createdAt?: Date;
		createdBy?: string;
		ec2InstanceType?: string;
		launchProfileId?: string;
		maxBackupsToRetain?: number | null;
		ownedBy?: string;
		sessionId?: string;
		sessionPersistenceMode?: AutomaticTerminationMode;
		startedAt?: Date;
		startedBy?: string;
		startedFromBackupId?: string;
		state?: StreamingSessionState;
		statusCode?: StreamingSessionStatusCode;
		statusMessage?: string;
		stopAt?: Date;
		stoppedAt?: Date;
		stoppedBy?: string;
		streamingImageId?: string;
		tags?: Tags;
		terminateAt?: Date;
		updatedAt?: Date;
		updatedBy?: string;
		volumeConfiguration?: VolumeConfiguration;
		volumeRetentionMode?: VolumeRetentionMode;
	}

	/** A streaming session is a virtual workstation created using a particular launch profile. */
	export interface StreamingSessionFormProperties {
		arn: FormControl<string | null | undefined>,
		automaticTerminationMode: FormControl<AutomaticTerminationMode | null | undefined>,
		backupMode: FormControl<SessionBackupMode | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		ec2InstanceType: FormControl<string | null | undefined>,
		launchProfileId: FormControl<string | null | undefined>,
		maxBackupsToRetain: FormControl<number | null | undefined>,
		ownedBy: FormControl<string | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
		sessionPersistenceMode: FormControl<AutomaticTerminationMode | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		startedBy: FormControl<string | null | undefined>,
		startedFromBackupId: FormControl<string | null | undefined>,
		state: FormControl<StreamingSessionState | null | undefined>,
		statusCode: FormControl<StreamingSessionStatusCode | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		stopAt: FormControl<Date | null | undefined>,
		stoppedAt: FormControl<Date | null | undefined>,
		stoppedBy: FormControl<string | null | undefined>,
		streamingImageId: FormControl<string | null | undefined>,
		terminateAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		updatedBy: FormControl<string | null | undefined>,
		volumeRetentionMode: FormControl<VolumeRetentionMode | null | undefined>,
	}
	export function CreateStreamingSessionFormGroup() {
		return new FormGroup<StreamingSessionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			automaticTerminationMode: new FormControl<AutomaticTerminationMode | null | undefined>(undefined),
			backupMode: new FormControl<SessionBackupMode | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			ec2InstanceType: new FormControl<string | null | undefined>(undefined),
			launchProfileId: new FormControl<string | null | undefined>(undefined),
			maxBackupsToRetain: new FormControl<number | null | undefined>(undefined),
			ownedBy: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			sessionPersistenceMode: new FormControl<AutomaticTerminationMode | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			startedFromBackupId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StreamingSessionState | null | undefined>(undefined),
			statusCode: new FormControl<StreamingSessionStatusCode | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			stopAt: new FormControl<Date | null | undefined>(undefined),
			stoppedAt: new FormControl<Date | null | undefined>(undefined),
			stoppedBy: new FormControl<string | null | undefined>(undefined),
			streamingImageId: new FormControl<string | null | undefined>(undefined),
			terminateAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			updatedBy: new FormControl<string | null | undefined>(undefined),
			volumeRetentionMode: new FormControl<VolumeRetentionMode | null | undefined>(undefined),
		});

	}


	/** The streaming session state. */
	export enum StreamingSessionState { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', READY = 'READY', DELETED = 'DELETED', CREATE_FAILED = 'CREATE_FAILED', DELETE_FAILED = 'DELETE_FAILED', STOP_IN_PROGRESS = 'STOP_IN_PROGRESS', START_IN_PROGRESS = 'START_IN_PROGRESS', STOPPED = 'STOPPED', STOP_FAILED = 'STOP_FAILED', START_FAILED = 'START_FAILED' }

	export enum StreamingSessionStatusCode { STREAMING_SESSION_READY = 'STREAMING_SESSION_READY', STREAMING_SESSION_DELETED = 'STREAMING_SESSION_DELETED', STREAMING_SESSION_CREATE_IN_PROGRESS = 'STREAMING_SESSION_CREATE_IN_PROGRESS', STREAMING_SESSION_DELETE_IN_PROGRESS = 'STREAMING_SESSION_DELETE_IN_PROGRESS', INTERNAL_ERROR = 'INTERNAL_ERROR', INSUFFICIENT_CAPACITY = 'INSUFFICIENT_CAPACITY', ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR = 'ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR', NETWORK_CONNECTION_ERROR = 'NETWORK_CONNECTION_ERROR', INITIALIZATION_SCRIPT_ERROR = 'INITIALIZATION_SCRIPT_ERROR', DECRYPT_STREAMING_IMAGE_ERROR = 'DECRYPT_STREAMING_IMAGE_ERROR', NETWORK_INTERFACE_ERROR = 'NETWORK_INTERFACE_ERROR', STREAMING_SESSION_STOPPED = 'STREAMING_SESSION_STOPPED', STREAMING_SESSION_STARTED = 'STREAMING_SESSION_STARTED', STREAMING_SESSION_STOP_IN_PROGRESS = 'STREAMING_SESSION_STOP_IN_PROGRESS', STREAMING_SESSION_START_IN_PROGRESS = 'STREAMING_SESSION_START_IN_PROGRESS', AMI_VALIDATION_ERROR = 'AMI_VALIDATION_ERROR' }

	export enum VolumeRetentionMode { RETAIN = 'RETAIN', DELETE = 'DELETE' }

	export interface CreateStreamingSessionStreamResponse {
		stream?: StreamingSessionStream;
	}
	export interface CreateStreamingSessionStreamResponseFormProperties {
	}
	export function CreateCreateStreamingSessionStreamResponseFormGroup() {
		return new FormGroup<CreateStreamingSessionStreamResponseFormProperties>({
		});

	}


	/** A stream is an active connection to a streaming session, enabling a studio user to control the streaming session using a compatible client. Streaming session streams are compatible with the NICE DCV web client, included in the Nimble Studio portal, or the NICE DCV desktop client. */
	export interface StreamingSessionStream {
		createdAt?: Date;
		createdBy?: string;
		expiresAt?: Date;
		ownedBy?: string;
		state?: StreamingSessionStreamState;
		statusCode?: StreamingSessionStreamStatusCode;
		streamId?: string;
		url?: string;
	}

	/** A stream is an active connection to a streaming session, enabling a studio user to control the streaming session using a compatible client. Streaming session streams are compatible with the NICE DCV web client, included in the Nimble Studio portal, or the NICE DCV desktop client. */
	export interface StreamingSessionStreamFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		expiresAt: FormControl<Date | null | undefined>,
		ownedBy: FormControl<string | null | undefined>,
		state: FormControl<StreamingSessionStreamState | null | undefined>,
		statusCode: FormControl<StreamingSessionStreamStatusCode | null | undefined>,
		streamId: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateStreamingSessionStreamFormGroup() {
		return new FormGroup<StreamingSessionStreamFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<Date | null | undefined>(undefined),
			ownedBy: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StreamingSessionStreamState | null | undefined>(undefined),
			statusCode: new FormControl<StreamingSessionStreamStatusCode | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StreamingSessionStreamState { READY = 'READY', CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETED = 'DELETED', CREATE_FAILED = 'CREATE_FAILED', DELETE_FAILED = 'DELETE_FAILED' }

	export enum StreamingSessionStreamStatusCode { STREAM_CREATE_IN_PROGRESS = 'STREAM_CREATE_IN_PROGRESS', STREAM_READY = 'STREAM_READY', STREAM_DELETE_IN_PROGRESS = 'STREAM_DELETE_IN_PROGRESS', STREAM_DELETED = 'STREAM_DELETED', INTERNAL_ERROR = 'INTERNAL_ERROR', NETWORK_CONNECTION_ERROR = 'NETWORK_CONNECTION_ERROR' }

	export interface CreateStudioResponse {
		studio?: Studio;
	}
	export interface CreateStudioResponseFormProperties {
	}
	export function CreateCreateStudioResponseFormGroup() {
		return new FormGroup<CreateStudioResponseFormProperties>({
		});

	}


	/** <p>Represents a studio resource.</p> <p>A studio is the core resource used with Nimble Studio. You must create a studio first, before any other resource type can be created. All other resources you create and manage in Nimble Studio are contained within a studio.</p> <p>When creating a studio, you must provides two IAM roles for use with the Nimble Studio portal. These roles are assumed by your users when they log in to the Nimble Studio portal via IAM Identity Center and your identity source.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>Your studio roles must trust the <code>identity.nimble.amazonaws.com</code> service principal to function properly.</p> */
	export interface Studio {
		adminRoleArn?: string;
		arn?: string;
		createdAt?: Date;
		displayName?: string;
		homeRegion?: string;
		ssoClientId?: string;
		state?: LaunchProfileState;
		statusCode?: StudioStatusCode;
		statusMessage?: string;
		studioEncryptionConfiguration?: StudioEncryptionConfiguration;
		studioId?: string;
		studioName?: string;
		studioUrl?: string;
		tags?: Tags;
		updatedAt?: Date;
		userRoleArn?: string;
	}

	/** <p>Represents a studio resource.</p> <p>A studio is the core resource used with Nimble Studio. You must create a studio first, before any other resource type can be created. All other resources you create and manage in Nimble Studio are contained within a studio.</p> <p>When creating a studio, you must provides two IAM roles for use with the Nimble Studio portal. These roles are assumed by your users when they log in to the Nimble Studio portal via IAM Identity Center and your identity source.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>Your studio roles must trust the <code>identity.nimble.amazonaws.com</code> service principal to function properly.</p> */
	export interface StudioFormProperties {
		adminRoleArn: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		homeRegion: FormControl<string | null | undefined>,
		ssoClientId: FormControl<string | null | undefined>,
		state: FormControl<LaunchProfileState | null | undefined>,
		statusCode: FormControl<StudioStatusCode | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		studioId: FormControl<string | null | undefined>,
		studioName: FormControl<string | null | undefined>,
		studioUrl: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		userRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateStudioFormGroup() {
		return new FormGroup<StudioFormProperties>({
			adminRoleArn: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			homeRegion: new FormControl<string | null | undefined>(undefined),
			ssoClientId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LaunchProfileState | null | undefined>(undefined),
			statusCode: new FormControl<StudioStatusCode | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			studioId: new FormControl<string | null | undefined>(undefined),
			studioName: new FormControl<string | null | undefined>(undefined),
			studioUrl: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			userRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status code. */
	export enum StudioStatusCode { STUDIO_CREATED = 'STUDIO_CREATED', STUDIO_DELETED = 'STUDIO_DELETED', STUDIO_UPDATED = 'STUDIO_UPDATED', STUDIO_CREATE_IN_PROGRESS = 'STUDIO_CREATE_IN_PROGRESS', STUDIO_UPDATE_IN_PROGRESS = 'STUDIO_UPDATE_IN_PROGRESS', STUDIO_DELETE_IN_PROGRESS = 'STUDIO_DELETE_IN_PROGRESS', STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED = 'STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED', STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED = 'STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED', STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED = 'STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED', AWS_SSO_NOT_ENABLED = 'AWS_SSO_NOT_ENABLED', AWS_SSO_ACCESS_DENIED = 'AWS_SSO_ACCESS_DENIED', ROLE_NOT_OWNED_BY_STUDIO_OWNER = 'ROLE_NOT_OWNED_BY_STUDIO_OWNER', ROLE_COULD_NOT_BE_ASSUMED = 'ROLE_COULD_NOT_BE_ASSUMED', INTERNAL_ERROR = 'INTERNAL_ERROR', ENCRYPTION_KEY_NOT_FOUND = 'ENCRYPTION_KEY_NOT_FOUND', ENCRYPTION_KEY_ACCESS_DENIED = 'ENCRYPTION_KEY_ACCESS_DENIED', AWS_SSO_CONFIGURATION_REPAIRED = 'AWS_SSO_CONFIGURATION_REPAIRED', AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS = 'AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS', AWS_STS_REGION_DISABLED = 'AWS_STS_REGION_DISABLED' }


	/** Configuration of the encryption method that is used for the studio. */
	export interface StudioEncryptionConfiguration {
		keyArn?: string;

		/** Required */
		keyType: StudioEncryptionConfigurationKeyType;
	}

	/** Configuration of the encryption method that is used for the studio. */
	export interface StudioEncryptionConfigurationFormProperties {
		keyArn: FormControl<string | null | undefined>,

		/** Required */
		keyType: FormControl<StudioEncryptionConfigurationKeyType | null | undefined>,
	}
	export function CreateStudioEncryptionConfigurationFormGroup() {
		return new FormGroup<StudioEncryptionConfigurationFormProperties>({
			keyArn: new FormControl<string | null | undefined>(undefined),
			keyType: new FormControl<StudioEncryptionConfigurationKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type of KMS key that is used to encrypt studio data. */
	export enum StudioEncryptionConfigurationKeyType { AWS_OWNED_KEY = 'AWS_OWNED_KEY', CUSTOMER_MANAGED_KEY = 'CUSTOMER_MANAGED_KEY' }

	export interface CreateStudioComponentResponse {
		studioComponent?: StudioComponent;
	}
	export interface CreateStudioComponentResponseFormProperties {
	}
	export function CreateCreateStudioComponentResponseFormGroup() {
		return new FormGroup<CreateStudioComponentResponseFormProperties>({
		});

	}


	/** <p>A studio component represents a network resource to be used by a studio's users and workflows. A typical studio contains studio components for each of the following: render farm, Active Directory, licensing, and file system.</p> <p>Access to a studio component is managed by specifying security groups for the resource, as well as its endpoint.</p> <p>A studio component also has a set of initialization scripts that are returned by <code>GetLaunchProfileInitialization</code>. These initialization scripts run on streaming sessions when they start. They provide users with flexibility in controlling how the studio resources are configured on a streaming session.</p> */
	export interface StudioComponent {
		arn?: string;
		configuration?: StudioComponentConfiguration;
		createdAt?: Date;
		createdBy?: string;
		description?: string;
		ec2SecurityGroupIds?: Array<string>;
		initializationScripts?: Array<StudioComponentInitializationScript>;
		name?: string;
		runtimeRoleArn?: string;
		scriptParameters?: Array<ScriptParameterKeyValue>;
		secureInitializationRoleArn?: string;
		state?: LaunchProfileState;
		statusCode?: StudioComponentStatusCode;
		statusMessage?: string;
		studioComponentId?: string;
		subtype?: StudioComponentSubtype;
		tags?: Tags;
		type?: StudioComponentType;
		updatedAt?: Date;
		updatedBy?: string;
	}

	/** <p>A studio component represents a network resource to be used by a studio's users and workflows. A typical studio contains studio components for each of the following: render farm, Active Directory, licensing, and file system.</p> <p>Access to a studio component is managed by specifying security groups for the resource, as well as its endpoint.</p> <p>A studio component also has a set of initialization scripts that are returned by <code>GetLaunchProfileInitialization</code>. These initialization scripts run on streaming sessions when they start. They provide users with flexibility in controlling how the studio resources are configured on a streaming session.</p> */
	export interface StudioComponentFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		runtimeRoleArn: FormControl<string | null | undefined>,
		secureInitializationRoleArn: FormControl<string | null | undefined>,
		state: FormControl<LaunchProfileState | null | undefined>,
		statusCode: FormControl<StudioComponentStatusCode | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		studioComponentId: FormControl<string | null | undefined>,
		subtype: FormControl<StudioComponentSubtype | null | undefined>,
		type: FormControl<StudioComponentType | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		updatedBy: FormControl<string | null | undefined>,
	}
	export function CreateStudioComponentFormGroup() {
		return new FormGroup<StudioComponentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			runtimeRoleArn: new FormControl<string | null | undefined>(undefined),
			secureInitializationRoleArn: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LaunchProfileState | null | undefined>(undefined),
			statusCode: new FormControl<StudioComponentStatusCode | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			studioComponentId: new FormControl<string | null | undefined>(undefined),
			subtype: new FormControl<StudioComponentSubtype | null | undefined>(undefined),
			type: new FormControl<StudioComponentType | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			updatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of the studio component, based on component type. */
	export interface StudioComponentConfiguration {
		activeDirectoryConfiguration?: ActiveDirectoryConfiguration;
		computeFarmConfiguration?: ComputeFarmConfiguration;
		licenseServiceConfiguration?: LicenseServiceConfiguration;
		sharedFileSystemConfiguration?: SharedFileSystemConfiguration;
	}

	/** The configuration of the studio component, based on component type. */
	export interface StudioComponentConfigurationFormProperties {
	}
	export function CreateStudioComponentConfigurationFormGroup() {
		return new FormGroup<StudioComponentConfigurationFormProperties>({
		});

	}


	/** The configuration for a Directory Service for Microsoft Active Directory studio resource. */
	export interface ActiveDirectoryConfiguration {
		computerAttributes?: Array<ActiveDirectoryComputerAttribute>;
		directoryId?: string;
		organizationalUnitDistinguishedName?: string;
	}

	/** The configuration for a Directory Service for Microsoft Active Directory studio resource. */
	export interface ActiveDirectoryConfigurationFormProperties {
		directoryId: FormControl<string | null | undefined>,
		organizationalUnitDistinguishedName: FormControl<string | null | undefined>,
	}
	export function CreateActiveDirectoryConfigurationFormGroup() {
		return new FormGroup<ActiveDirectoryConfigurationFormProperties>({
			directoryId: new FormControl<string | null | undefined>(undefined),
			organizationalUnitDistinguishedName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An LDAP attribute of an Active Directory computer account, in the form of a name:value pair. */
	export interface ActiveDirectoryComputerAttribute {
		name?: string;
		value?: string;
	}

	/** An LDAP attribute of an Active Directory computer account, in the form of a name:value pair. */
	export interface ActiveDirectoryComputerAttributeFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateActiveDirectoryComputerAttributeFormGroup() {
		return new FormGroup<ActiveDirectoryComputerAttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for a render farm that is associated with a studio resource. */
	export interface ComputeFarmConfiguration {
		activeDirectoryUser?: string;
		endpoint?: string;
	}

	/** The configuration for a render farm that is associated with a studio resource. */
	export interface ComputeFarmConfigurationFormProperties {
		activeDirectoryUser: FormControl<string | null | undefined>,
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateComputeFarmConfigurationFormGroup() {
		return new FormGroup<ComputeFarmConfigurationFormProperties>({
			activeDirectoryUser: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for a license service that is associated with a studio resource. */
	export interface LicenseServiceConfiguration {
		endpoint?: string;
	}

	/** The configuration for a license service that is associated with a studio resource. */
	export interface LicenseServiceConfigurationFormProperties {
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateLicenseServiceConfigurationFormGroup() {
		return new FormGroup<LicenseServiceConfigurationFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for a shared file storage system that is associated with a studio resource. */
	export interface SharedFileSystemConfiguration {
		endpoint?: string;
		fileSystemId?: string;
		linuxMountPoint?: string;
		shareName?: string;
		windowsMountDrive?: string;
	}

	/** The configuration for a shared file storage system that is associated with a studio resource. */
	export interface SharedFileSystemConfigurationFormProperties {
		endpoint: FormControl<string | null | undefined>,
		fileSystemId: FormControl<string | null | undefined>,
		linuxMountPoint: FormControl<string | null | undefined>,
		shareName: FormControl<string | null | undefined>,
		windowsMountDrive: FormControl<string | null | undefined>,
	}
	export function CreateSharedFileSystemConfigurationFormGroup() {
		return new FormGroup<SharedFileSystemConfigurationFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			fileSystemId: new FormControl<string | null | undefined>(undefined),
			linuxMountPoint: new FormControl<string | null | undefined>(undefined),
			shareName: new FormControl<string | null | undefined>(undefined),
			windowsMountDrive: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Initialization scripts for studio components. */
	export interface StudioComponentInitializationScript {
		launchProfileProtocolVersion?: string;
		platform?: LaunchProfilePlatform;
		runContext?: StudioComponentInitializationScriptRunContext;
		script?: string;
	}

	/** Initialization scripts for studio components. */
	export interface StudioComponentInitializationScriptFormProperties {
		launchProfileProtocolVersion: FormControl<string | null | undefined>,
		platform: FormControl<LaunchProfilePlatform | null | undefined>,
		runContext: FormControl<StudioComponentInitializationScriptRunContext | null | undefined>,
		script: FormControl<string | null | undefined>,
	}
	export function CreateStudioComponentInitializationScriptFormGroup() {
		return new FormGroup<StudioComponentInitializationScriptFormProperties>({
			launchProfileProtocolVersion: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<LaunchProfilePlatform | null | undefined>(undefined),
			runContext: new FormControl<StudioComponentInitializationScriptRunContext | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LaunchProfilePlatform { LINUX = 'LINUX', WINDOWS = 'WINDOWS' }

	export enum StudioComponentInitializationScriptRunContext { SYSTEM_INITIALIZATION = 'SYSTEM_INITIALIZATION', USER_INITIALIZATION = 'USER_INITIALIZATION' }


	/** A parameter for a studio component script, in the form of a key-value pair. */
	export interface ScriptParameterKeyValue {
		key?: string;
		value?: string;
	}

	/** A parameter for a studio component script, in the form of a key-value pair. */
	export interface ScriptParameterKeyValueFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateScriptParameterKeyValueFormGroup() {
		return new FormGroup<ScriptParameterKeyValueFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The current status of the studio component resource.</p> <p>When the resource is in the <code>READY</code> state, the status code signals what the last mutation made to the resource was.</p> <p>When the resource is in a <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, or <code>DELETE_FAILED</code> state, the status code signals what went wrong and why the mutation failed.</p> */
	export enum StudioComponentStatusCode { ACTIVE_DIRECTORY_ALREADY_EXISTS = 'ACTIVE_DIRECTORY_ALREADY_EXISTS', STUDIO_COMPONENT_CREATED = 'STUDIO_COMPONENT_CREATED', STUDIO_COMPONENT_UPDATED = 'STUDIO_COMPONENT_UPDATED', STUDIO_COMPONENT_DELETED = 'STUDIO_COMPONENT_DELETED', ENCRYPTION_KEY_ACCESS_DENIED = 'ENCRYPTION_KEY_ACCESS_DENIED', ENCRYPTION_KEY_NOT_FOUND = 'ENCRYPTION_KEY_NOT_FOUND', STUDIO_COMPONENT_CREATE_IN_PROGRESS = 'STUDIO_COMPONENT_CREATE_IN_PROGRESS', STUDIO_COMPONENT_UPDATE_IN_PROGRESS = 'STUDIO_COMPONENT_UPDATE_IN_PROGRESS', STUDIO_COMPONENT_DELETE_IN_PROGRESS = 'STUDIO_COMPONENT_DELETE_IN_PROGRESS', INTERNAL_ERROR = 'INTERNAL_ERROR' }

	export enum StudioComponentSubtype { AWS_MANAGED_MICROSOFT_AD = 'AWS_MANAGED_MICROSOFT_AD', AMAZON_FSX_FOR_WINDOWS = 'AMAZON_FSX_FOR_WINDOWS', AMAZON_FSX_FOR_LUSTRE = 'AMAZON_FSX_FOR_LUSTRE', CUSTOM = 'CUSTOM' }

	export enum StudioComponentType { ACTIVE_DIRECTORY = 'ACTIVE_DIRECTORY', SHARED_FILE_SYSTEM = 'SHARED_FILE_SYSTEM', COMPUTE_FARM = 'COMPUTE_FARM', LICENSE_SERVICE = 'LICENSE_SERVICE', CUSTOM = 'CUSTOM' }

	export interface DeleteLaunchProfileResponse {
		launchProfile?: LaunchProfile;
	}
	export interface DeleteLaunchProfileResponseFormProperties {
	}
	export function CreateDeleteLaunchProfileResponseFormGroup() {
		return new FormGroup<DeleteLaunchProfileResponseFormProperties>({
		});

	}

	export interface DeleteLaunchProfileMemberResponse {
	}
	export interface DeleteLaunchProfileMemberResponseFormProperties {
	}
	export function CreateDeleteLaunchProfileMemberResponseFormGroup() {
		return new FormGroup<DeleteLaunchProfileMemberResponseFormProperties>({
		});

	}

	export interface DeleteStreamingImageResponse {
		streamingImage?: StreamingImage;
	}
	export interface DeleteStreamingImageResponseFormProperties {
	}
	export function CreateDeleteStreamingImageResponseFormGroup() {
		return new FormGroup<DeleteStreamingImageResponseFormProperties>({
		});

	}

	export interface DeleteStreamingSessionResponse {
		session?: StreamingSession;
	}
	export interface DeleteStreamingSessionResponseFormProperties {
	}
	export function CreateDeleteStreamingSessionResponseFormGroup() {
		return new FormGroup<DeleteStreamingSessionResponseFormProperties>({
		});

	}

	export interface DeleteStudioResponse {

		/** Required */
		studio: Studio;
	}
	export interface DeleteStudioResponseFormProperties {
	}
	export function CreateDeleteStudioResponseFormGroup() {
		return new FormGroup<DeleteStudioResponseFormProperties>({
		});

	}

	export interface DeleteStudioComponentResponse {
		studioComponent?: StudioComponent;
	}
	export interface DeleteStudioComponentResponseFormProperties {
	}
	export function CreateDeleteStudioComponentResponseFormGroup() {
		return new FormGroup<DeleteStudioComponentResponseFormProperties>({
		});

	}

	export interface DeleteStudioMemberResponse {
	}
	export interface DeleteStudioMemberResponseFormProperties {
	}
	export function CreateDeleteStudioMemberResponseFormGroup() {
		return new FormGroup<DeleteStudioMemberResponseFormProperties>({
		});

	}

	export interface GetEulaResponse {
		eula?: Eula;
	}
	export interface GetEulaResponseFormProperties {
	}
	export function CreateGetEulaResponseFormGroup() {
		return new FormGroup<GetEulaResponseFormProperties>({
		});

	}


	/** Represents a EULA resource. */
	export interface Eula {
		content?: string;
		createdAt?: Date;
		eulaId?: string;
		name?: string;
		updatedAt?: Date;
	}

	/** Represents a EULA resource. */
	export interface EulaFormProperties {
		content: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		eulaId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEulaFormGroup() {
		return new FormGroup<EulaFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			eulaId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetLaunchProfileResponse {
		launchProfile?: LaunchProfile;
	}
	export interface GetLaunchProfileResponseFormProperties {
	}
	export function CreateGetLaunchProfileResponseFormGroup() {
		return new FormGroup<GetLaunchProfileResponseFormProperties>({
		});

	}

	export interface GetLaunchProfileDetailsResponse {
		launchProfile?: LaunchProfile;
		streamingImages?: Array<StreamingImage>;
		studioComponentSummaries?: Array<StudioComponentSummary>;
	}
	export interface GetLaunchProfileDetailsResponseFormProperties {
	}
	export function CreateGetLaunchProfileDetailsResponseFormGroup() {
		return new FormGroup<GetLaunchProfileDetailsResponseFormProperties>({
		});

	}


	/** The studio component's summary. */
	export interface StudioComponentSummary {
		createdAt?: Date;
		createdBy?: string;
		description?: string;
		name?: string;
		studioComponentId?: string;
		subtype?: StudioComponentSubtype;
		type?: StudioComponentType;
		updatedAt?: Date;
		updatedBy?: string;
	}

	/** The studio component's summary. */
	export interface StudioComponentSummaryFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		studioComponentId: FormControl<string | null | undefined>,
		subtype: FormControl<StudioComponentSubtype | null | undefined>,
		type: FormControl<StudioComponentType | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		updatedBy: FormControl<string | null | undefined>,
	}
	export function CreateStudioComponentSummaryFormGroup() {
		return new FormGroup<StudioComponentSummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			studioComponentId: new FormControl<string | null | undefined>(undefined),
			subtype: new FormControl<StudioComponentSubtype | null | undefined>(undefined),
			type: new FormControl<StudioComponentType | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			updatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLaunchProfileInitializationResponse {
		launchProfileInitialization?: LaunchProfileInitialization;
	}
	export interface GetLaunchProfileInitializationResponseFormProperties {
	}
	export function CreateGetLaunchProfileInitializationResponseFormGroup() {
		return new FormGroup<GetLaunchProfileInitializationResponseFormProperties>({
		});

	}


	/** <p>A launch profile initialization contains information required for a workstation or server to connect to a launch profile.</p> <p>This includes scripts, endpoints, security groups, subnets, and other configuration.</p> */
	export interface LaunchProfileInitialization {
		activeDirectory?: LaunchProfileInitializationActiveDirectory;
		ec2SecurityGroupIds?: Array<string>;
		launchProfileId?: string;
		launchProfileProtocolVersion?: string;
		launchPurpose?: string;
		name?: string;
		platform?: LaunchProfilePlatform;
		systemInitializationScripts?: Array<LaunchProfileInitializationScript>;
		userInitializationScripts?: Array<LaunchProfileInitializationScript>;
	}

	/** <p>A launch profile initialization contains information required for a workstation or server to connect to a launch profile.</p> <p>This includes scripts, endpoints, security groups, subnets, and other configuration.</p> */
	export interface LaunchProfileInitializationFormProperties {
		launchProfileId: FormControl<string | null | undefined>,
		launchProfileProtocolVersion: FormControl<string | null | undefined>,
		launchPurpose: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		platform: FormControl<LaunchProfilePlatform | null | undefined>,
	}
	export function CreateLaunchProfileInitializationFormGroup() {
		return new FormGroup<LaunchProfileInitializationFormProperties>({
			launchProfileId: new FormControl<string | null | undefined>(undefined),
			launchProfileProtocolVersion: new FormControl<string | null | undefined>(undefined),
			launchPurpose: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<LaunchProfilePlatform | null | undefined>(undefined),
		});

	}


	/** The launch profile initialization Active Directory contains information required for the launch profile to connect to the Active Directory. */
	export interface LaunchProfileInitializationActiveDirectory {
		computerAttributes?: Array<ActiveDirectoryComputerAttribute>;
		directoryId?: string;
		directoryName?: string;
		dnsIpAddresses?: Array<string>;
		organizationalUnitDistinguishedName?: string;
		studioComponentId?: string;
		studioComponentName?: string;
	}

	/** The launch profile initialization Active Directory contains information required for the launch profile to connect to the Active Directory. */
	export interface LaunchProfileInitializationActiveDirectoryFormProperties {
		directoryId: FormControl<string | null | undefined>,
		directoryName: FormControl<string | null | undefined>,
		organizationalUnitDistinguishedName: FormControl<string | null | undefined>,
		studioComponentId: FormControl<string | null | undefined>,
		studioComponentName: FormControl<string | null | undefined>,
	}
	export function CreateLaunchProfileInitializationActiveDirectoryFormGroup() {
		return new FormGroup<LaunchProfileInitializationActiveDirectoryFormProperties>({
			directoryId: new FormControl<string | null | undefined>(undefined),
			directoryName: new FormControl<string | null | undefined>(undefined),
			organizationalUnitDistinguishedName: new FormControl<string | null | undefined>(undefined),
			studioComponentId: new FormControl<string | null | undefined>(undefined),
			studioComponentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The launch profile initialization script is used when start streaming session runs. */
	export interface LaunchProfileInitializationScript {
		runtimeRoleArn?: string;
		script?: string;
		secureInitializationRoleArn?: string;
		studioComponentId?: string;
		studioComponentName?: string;
	}

	/** The launch profile initialization script is used when start streaming session runs. */
	export interface LaunchProfileInitializationScriptFormProperties {
		runtimeRoleArn: FormControl<string | null | undefined>,
		script: FormControl<string | null | undefined>,
		secureInitializationRoleArn: FormControl<string | null | undefined>,
		studioComponentId: FormControl<string | null | undefined>,
		studioComponentName: FormControl<string | null | undefined>,
	}
	export function CreateLaunchProfileInitializationScriptFormGroup() {
		return new FormGroup<LaunchProfileInitializationScriptFormProperties>({
			runtimeRoleArn: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			secureInitializationRoleArn: new FormControl<string | null | undefined>(undefined),
			studioComponentId: new FormControl<string | null | undefined>(undefined),
			studioComponentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLaunchProfileMemberResponse {
		member?: LaunchProfileMembership;
	}
	export interface GetLaunchProfileMemberResponseFormProperties {
	}
	export function CreateGetLaunchProfileMemberResponseFormGroup() {
		return new FormGroup<GetLaunchProfileMemberResponseFormProperties>({
		});

	}


	/** <p>Studio admins can use launch profile membership to delegate launch profile access to studio users in the Nimble Studio portal without writing or maintaining complex IAM policies. A launch profile member is a user association from your studio identity source who is granted permissions to a launch profile.</p> <p>A launch profile member (type USER) provides the following permissions to that launch profile:</p> <ul> <li> <p>GetLaunchProfile</p> </li> <li> <p>GetLaunchProfileInitialization</p> </li> <li> <p>GetLaunchProfileMembers</p> </li> <li> <p>GetLaunchProfileMember</p> </li> <li> <p>CreateStreamingSession</p> </li> <li> <p>GetLaunchProfileDetails</p> </li> </ul> */
	export interface LaunchProfileMembership {
		identityStoreId?: string;
		persona?: LaunchProfilePersona;
		principalId?: string;
		sid?: string;
	}

	/** <p>Studio admins can use launch profile membership to delegate launch profile access to studio users in the Nimble Studio portal without writing or maintaining complex IAM policies. A launch profile member is a user association from your studio identity source who is granted permissions to a launch profile.</p> <p>A launch profile member (type USER) provides the following permissions to that launch profile:</p> <ul> <li> <p>GetLaunchProfile</p> </li> <li> <p>GetLaunchProfileInitialization</p> </li> <li> <p>GetLaunchProfileMembers</p> </li> <li> <p>GetLaunchProfileMember</p> </li> <li> <p>CreateStreamingSession</p> </li> <li> <p>GetLaunchProfileDetails</p> </li> </ul> */
	export interface LaunchProfileMembershipFormProperties {
		identityStoreId: FormControl<string | null | undefined>,
		persona: FormControl<LaunchProfilePersona | null | undefined>,
		principalId: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
	}
	export function CreateLaunchProfileMembershipFormGroup() {
		return new FormGroup<LaunchProfileMembershipFormProperties>({
			identityStoreId: new FormControl<string | null | undefined>(undefined),
			persona: new FormControl<LaunchProfilePersona | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LaunchProfilePersona { USER = 'USER' }

	export interface GetStreamingImageResponse {
		streamingImage?: StreamingImage;
	}
	export interface GetStreamingImageResponseFormProperties {
	}
	export function CreateGetStreamingImageResponseFormGroup() {
		return new FormGroup<GetStreamingImageResponseFormProperties>({
		});

	}

	export interface GetStreamingSessionResponse {
		session?: StreamingSession;
	}
	export interface GetStreamingSessionResponseFormProperties {
	}
	export function CreateGetStreamingSessionResponseFormGroup() {
		return new FormGroup<GetStreamingSessionResponseFormProperties>({
		});

	}

	export interface GetStreamingSessionBackupResponse {
		streamingSessionBackup?: StreamingSessionBackup;
	}
	export interface GetStreamingSessionBackupResponseFormProperties {
	}
	export function CreateGetStreamingSessionBackupResponseFormGroup() {
		return new FormGroup<GetStreamingSessionBackupResponseFormProperties>({
		});

	}


	/** Information about the streaming session backup. */
	export interface StreamingSessionBackup {
		arn?: string;
		backupId?: string;
		createdAt?: Date;
		launchProfileId?: string;
		ownedBy?: string;
		sessionId?: string;

		/** The streaming session state. */
		state?: StreamingSessionState | null;
		statusCode?: StreamingSessionStatusCode;
		statusMessage?: string;
		tags?: Tags;
	}

	/** Information about the streaming session backup. */
	export interface StreamingSessionBackupFormProperties {
		arn: FormControl<string | null | undefined>,
		backupId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		launchProfileId: FormControl<string | null | undefined>,
		ownedBy: FormControl<string | null | undefined>,
		sessionId: FormControl<string | null | undefined>,

		/** The streaming session state. */
		state: FormControl<StreamingSessionState | null | undefined>,
		statusCode: FormControl<StreamingSessionStatusCode | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateStreamingSessionBackupFormGroup() {
		return new FormGroup<StreamingSessionBackupFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			backupId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			launchProfileId: new FormControl<string | null | undefined>(undefined),
			ownedBy: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StreamingSessionState | null | undefined>(undefined),
			statusCode: new FormControl<StreamingSessionStatusCode | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStreamingSessionStreamResponse {
		stream?: StreamingSessionStream;
	}
	export interface GetStreamingSessionStreamResponseFormProperties {
	}
	export function CreateGetStreamingSessionStreamResponseFormGroup() {
		return new FormGroup<GetStreamingSessionStreamResponseFormProperties>({
		});

	}

	export interface GetStudioResponse {

		/** Required */
		studio: Studio;
	}
	export interface GetStudioResponseFormProperties {
	}
	export function CreateGetStudioResponseFormGroup() {
		return new FormGroup<GetStudioResponseFormProperties>({
		});

	}

	export interface GetStudioComponentResponse {
		studioComponent?: StudioComponent;
	}
	export interface GetStudioComponentResponseFormProperties {
	}
	export function CreateGetStudioComponentResponseFormGroup() {
		return new FormGroup<GetStudioComponentResponseFormProperties>({
		});

	}

	export interface GetStudioMemberResponse {
		member?: StudioMembership;
	}
	export interface GetStudioMemberResponseFormProperties {
	}
	export function CreateGetStudioMemberResponseFormGroup() {
		return new FormGroup<GetStudioMemberResponseFormProperties>({
		});

	}


	/** <p>A studio member is an association of a user from your studio identity source to elevated permissions that they are granted in the studio.</p> <p>When you add a user to your studio using the Nimble Studio console, they are given access to the studio's IAM Identity Center application and are given access to log in to the Nimble Studio portal. These users have the permissions provided by the studio's user IAM role and do not appear in the studio membership collection. Only studio admins appear in studio membership.</p> <p>When you add a user to studio membership with the ADMIN persona, upon logging in to the Nimble Studio portal, they are granted permissions specified by the Studio's Admin IAM role.</p> */
	export interface StudioMembership {
		identityStoreId?: string;
		persona?: StudioPersona;
		principalId?: string;
		sid?: string;
	}

	/** <p>A studio member is an association of a user from your studio identity source to elevated permissions that they are granted in the studio.</p> <p>When you add a user to your studio using the Nimble Studio console, they are given access to the studio's IAM Identity Center application and are given access to log in to the Nimble Studio portal. These users have the permissions provided by the studio's user IAM role and do not appear in the studio membership collection. Only studio admins appear in studio membership.</p> <p>When you add a user to studio membership with the ADMIN persona, upon logging in to the Nimble Studio portal, they are granted permissions specified by the Studio's Admin IAM role.</p> */
	export interface StudioMembershipFormProperties {
		identityStoreId: FormControl<string | null | undefined>,
		persona: FormControl<StudioPersona | null | undefined>,
		principalId: FormControl<string | null | undefined>,
		sid: FormControl<string | null | undefined>,
	}
	export function CreateStudioMembershipFormGroup() {
		return new FormGroup<StudioMembershipFormProperties>({
			identityStoreId: new FormControl<string | null | undefined>(undefined),
			persona: new FormControl<StudioPersona | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StudioPersona { ADMINISTRATOR = 'ADMINISTRATOR' }

	export interface ListEulaAcceptancesResponse {
		eulaAcceptances?: Array<EulaAcceptance>;
		nextToken?: string;
	}
	export interface ListEulaAcceptancesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEulaAcceptancesResponseFormGroup() {
		return new FormGroup<ListEulaAcceptancesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEulasResponse {
		eulas?: Array<Eula>;
		nextToken?: string;
	}
	export interface ListEulasResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEulasResponseFormGroup() {
		return new FormGroup<ListEulasResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLaunchProfileMembersResponse {
		members?: Array<LaunchProfileMembership>;
		nextToken?: string;
	}
	export interface ListLaunchProfileMembersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLaunchProfileMembersResponseFormGroup() {
		return new FormGroup<ListLaunchProfileMembersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLaunchProfilesResponse {
		launchProfiles?: Array<LaunchProfile>;
		nextToken?: string;
	}
	export interface ListLaunchProfilesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLaunchProfilesResponseFormGroup() {
		return new FormGroup<ListLaunchProfilesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStreamingImagesResponse {
		nextToken?: string;
		streamingImages?: Array<StreamingImage>;
	}
	export interface ListStreamingImagesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamingImagesResponseFormGroup() {
		return new FormGroup<ListStreamingImagesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStreamingSessionBackupsResponse {
		nextToken?: string;
		streamingSessionBackups?: Array<StreamingSessionBackup>;
	}
	export interface ListStreamingSessionBackupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamingSessionBackupsResponseFormGroup() {
		return new FormGroup<ListStreamingSessionBackupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStreamingSessionsResponse {
		nextToken?: string;
		sessions?: Array<StreamingSession>;
	}
	export interface ListStreamingSessionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamingSessionsResponseFormGroup() {
		return new FormGroup<ListStreamingSessionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStudioComponentsResponse {
		nextToken?: string;
		studioComponents?: Array<StudioComponent>;
	}
	export interface ListStudioComponentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStudioComponentsResponseFormGroup() {
		return new FormGroup<ListStudioComponentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The current state of the studio component resource.</p> <p>While a studio component is being created, modified, or deleted, its state will be <code>CREATE_IN_PROGRESS</code>, <code>UPDATE_IN_PROGRESS</code>, or <code>DELETE_IN_PROGRESS</code>.</p> <p>These are called <i>transition states</i>.</p> <p>No modifications may be made to the studio component while it is in a transition state.</p> <p>If creation of the resource fails, the state will change to <code>CREATE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why creation failed. The resource in this state will automatically be deleted from your account after a period of time.</p> <p>If updating the resource fails, the state will change to <code>UPDATE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why the update failed. The resource will be returned to the state it was in when the update request was invoked.</p> <p>If deleting the resource fails, the state will change to <code>DELETE_FAILED</code>. The resource <code>StatusCode</code> and <code>StatusMessage</code> will provide more information of why the update failed. The resource will be returned to the state it was in when the update request was invoked. After the resource is deleted successfully, it will change to the <code>DELETED</code> state. The resource will no longer count against service quotas and cannot be used or acted upon any futher. It will be removed from your account after a period of time.</p> */
	export enum StudioComponentState { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', READY = 'READY', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETED = 'DELETED', DELETE_FAILED = 'DELETE_FAILED', CREATE_FAILED = 'CREATE_FAILED', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface ListStudioMembersResponse {
		members?: Array<StudioMembership>;
		nextToken?: string;
	}
	export interface ListStudioMembersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStudioMembersResponseFormGroup() {
		return new FormGroup<ListStudioMembersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStudiosResponse {
		nextToken?: string;

		/** Required */
		studios: Array<Studio>;
	}
	export interface ListStudiosResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStudiosResponseFormGroup() {
		return new FormGroup<ListStudiosResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PutLaunchProfileMembersResponse {
	}
	export interface PutLaunchProfileMembersResponseFormProperties {
	}
	export function CreatePutLaunchProfileMembersResponseFormGroup() {
		return new FormGroup<PutLaunchProfileMembersResponseFormProperties>({
		});

	}


	/** A new member that is added to a launch profile. */
	export interface NewLaunchProfileMember {

		/** Required */
		persona: LaunchProfilePersona;

		/** Required */
		principalId: string;
	}

	/** A new member that is added to a launch profile. */
	export interface NewLaunchProfileMemberFormProperties {

		/** Required */
		persona: FormControl<LaunchProfilePersona | null | undefined>,

		/** Required */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateNewLaunchProfileMemberFormGroup() {
		return new FormGroup<NewLaunchProfileMemberFormProperties>({
			persona: new FormControl<LaunchProfilePersona | null | undefined>(undefined, [Validators.required]),
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutStudioMembersResponse {
	}
	export interface PutStudioMembersResponseFormProperties {
	}
	export function CreatePutStudioMembersResponseFormGroup() {
		return new FormGroup<PutStudioMembersResponseFormProperties>({
		});

	}


	/** A new studio user's membership. */
	export interface NewStudioMember {

		/** Required */
		persona: StudioPersona;

		/** Required */
		principalId: string;
	}

	/** A new studio user's membership. */
	export interface NewStudioMemberFormProperties {

		/** Required */
		persona: FormControl<StudioPersona | null | undefined>,

		/** Required */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateNewStudioMemberFormGroup() {
		return new FormGroup<NewStudioMemberFormProperties>({
			persona: new FormControl<StudioPersona | null | undefined>(undefined, [Validators.required]),
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartStreamingSessionResponse {

		/** A streaming session is a virtual workstation created using a particular launch profile. */
		session?: StreamingSession;
	}
	export interface StartStreamingSessionResponseFormProperties {
	}
	export function CreateStartStreamingSessionResponseFormGroup() {
		return new FormGroup<StartStreamingSessionResponseFormProperties>({
		});

	}

	export interface StartStudioSSOConfigurationRepairResponse {

		/** Required */
		studio: Studio;
	}
	export interface StartStudioSSOConfigurationRepairResponseFormProperties {
	}
	export function CreateStartStudioSSOConfigurationRepairResponseFormGroup() {
		return new FormGroup<StartStudioSSOConfigurationRepairResponseFormProperties>({
		});

	}

	export interface StopStreamingSessionResponse {

		/** A streaming session is a virtual workstation created using a particular launch profile. */
		session?: StreamingSession;
	}
	export interface StopStreamingSessionResponseFormProperties {
	}
	export function CreateStopStreamingSessionResponseFormGroup() {
		return new FormGroup<StopStreamingSessionResponseFormProperties>({
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

	export interface UpdateLaunchProfileResponse {
		launchProfile?: LaunchProfile;
	}
	export interface UpdateLaunchProfileResponseFormProperties {
	}
	export function CreateUpdateLaunchProfileResponseFormGroup() {
		return new FormGroup<UpdateLaunchProfileResponseFormProperties>({
		});

	}

	export interface UpdateLaunchProfileMemberResponse {
		member?: LaunchProfileMembership;
	}
	export interface UpdateLaunchProfileMemberResponseFormProperties {
	}
	export function CreateUpdateLaunchProfileMemberResponseFormGroup() {
		return new FormGroup<UpdateLaunchProfileMemberResponseFormProperties>({
		});

	}

	export interface UpdateStreamingImageResponse {

		/** <p>Represents a streaming image resource.</p> <p>Streaming images are used by studio users to select which operating system and software they want to use in a Nimble Studio streaming session.</p> <p>Amazon provides a number of streaming images that include popular 3rd-party software.</p> <p>You can create your own streaming images using an Amazon EC2 machine image that you create for this purpose. You can also include software that your users require.</p> */
		streamingImage?: StreamingImage;
	}
	export interface UpdateStreamingImageResponseFormProperties {
	}
	export function CreateUpdateStreamingImageResponseFormGroup() {
		return new FormGroup<UpdateStreamingImageResponseFormProperties>({
		});

	}

	export interface UpdateStudioResponse {

		/** Required */
		studio: Studio;
	}
	export interface UpdateStudioResponseFormProperties {
	}
	export function CreateUpdateStudioResponseFormGroup() {
		return new FormGroup<UpdateStudioResponseFormProperties>({
		});

	}

	export interface UpdateStudioComponentResponse {
		studioComponent?: StudioComponent;
	}
	export interface UpdateStudioComponentResponseFormProperties {
	}
	export function CreateUpdateStudioComponentResponseFormGroup() {
		return new FormGroup<UpdateStudioComponentResponseFormProperties>({
		});

	}

	export interface AcceptEulasRequest {
		eulaIds?: Array<string>;
	}
	export interface AcceptEulasRequestFormProperties {
	}
	export function CreateAcceptEulasRequestFormGroup() {
		return new FormGroup<AcceptEulasRequestFormProperties>({
		});

	}


	/** Configuration for streaming workstations created using this launch profile. */
	export interface StreamConfigurationCreate {
		automaticTerminationMode?: AutomaticTerminationMode;

		/** Required */
		clipboardMode: StreamingClipboardMode;

		/** Required */
		ec2InstanceTypes: Array<StreamingInstanceType>;
		maxSessionLengthInMinutes?: number | null;
		maxStoppedSessionLengthInMinutes?: number | null;
		sessionBackup?: StreamConfigurationSessionBackup;
		sessionPersistenceMode?: AutomaticTerminationMode;
		sessionStorage?: StreamConfigurationSessionStorage;

		/** Required */
		streamingImageIds: Array<string>;
		volumeConfiguration?: VolumeConfiguration;
	}

	/** Configuration for streaming workstations created using this launch profile. */
	export interface StreamConfigurationCreateFormProperties {
		automaticTerminationMode: FormControl<AutomaticTerminationMode | null | undefined>,

		/** Required */
		clipboardMode: FormControl<StreamingClipboardMode | null | undefined>,
		maxSessionLengthInMinutes: FormControl<number | null | undefined>,
		maxStoppedSessionLengthInMinutes: FormControl<number | null | undefined>,
		sessionPersistenceMode: FormControl<AutomaticTerminationMode | null | undefined>,
	}
	export function CreateStreamConfigurationCreateFormGroup() {
		return new FormGroup<StreamConfigurationCreateFormProperties>({
			automaticTerminationMode: new FormControl<AutomaticTerminationMode | null | undefined>(undefined),
			clipboardMode: new FormControl<StreamingClipboardMode | null | undefined>(undefined, [Validators.required]),
			maxSessionLengthInMinutes: new FormControl<number | null | undefined>(undefined),
			maxStoppedSessionLengthInMinutes: new FormControl<number | null | undefined>(undefined),
			sessionPersistenceMode: new FormControl<AutomaticTerminationMode | null | undefined>(undefined),
		});

	}

	export interface CreateLaunchProfileRequest {
		description?: string;

		/** Required */
		ec2SubnetIds: Array<string>;

		/** Required */
		launchProfileProtocolVersions: Array<string>;

		/** Required */
		name: string;

		/** Required */
		streamConfiguration: StreamConfigurationCreate;

		/** Required */
		studioComponentIds: Array<string>;
		tags?: Tags;
	}
	export interface CreateLaunchProfileRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateLaunchProfileRequestFormGroup() {
		return new FormGroup<CreateLaunchProfileRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateStreamingImageRequest {
		description?: string;

		/** Required */
		ec2ImageId: string;

		/** Required */
		name: string;
		tags?: Tags;
	}
	export interface CreateStreamingImageRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		ec2ImageId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamingImageRequestFormGroup() {
		return new FormGroup<CreateStreamingImageRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			ec2ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateStreamingSessionRequest {
		ec2InstanceType?: StreamingInstanceType;

		/** Required */
		launchProfileId: string;
		ownedBy?: string;
		streamingImageId?: string;
		tags?: Tags;
	}
	export interface CreateStreamingSessionRequestFormProperties {
		ec2InstanceType: FormControl<StreamingInstanceType | null | undefined>,

		/** Required */
		launchProfileId: FormControl<string | null | undefined>,
		ownedBy: FormControl<string | null | undefined>,
		streamingImageId: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamingSessionRequestFormGroup() {
		return new FormGroup<CreateStreamingSessionRequestFormProperties>({
			ec2InstanceType: new FormControl<StreamingInstanceType | null | undefined>(undefined),
			launchProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownedBy: new FormControl<string | null | undefined>(undefined),
			streamingImageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStreamingSessionStreamRequest {
		expirationInSeconds?: number | null;
	}
	export interface CreateStreamingSessionStreamRequestFormProperties {
		expirationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateStreamingSessionStreamRequestFormGroup() {
		return new FormGroup<CreateStreamingSessionStreamRequestFormProperties>({
			expirationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateStudioComponentRequest {
		configuration?: StudioComponentConfiguration;
		description?: string;
		ec2SecurityGroupIds?: Array<string>;
		initializationScripts?: Array<StudioComponentInitializationScript>;

		/** Required */
		name: string;
		runtimeRoleArn?: string;
		scriptParameters?: Array<ScriptParameterKeyValue>;
		secureInitializationRoleArn?: string;
		subtype?: StudioComponentSubtype;
		tags?: Tags;

		/** Required */
		type: StudioComponentType;
	}
	export interface CreateStudioComponentRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		runtimeRoleArn: FormControl<string | null | undefined>,
		secureInitializationRoleArn: FormControl<string | null | undefined>,
		subtype: FormControl<StudioComponentSubtype | null | undefined>,

		/** Required */
		type: FormControl<StudioComponentType | null | undefined>,
	}
	export function CreateCreateStudioComponentRequestFormGroup() {
		return new FormGroup<CreateStudioComponentRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runtimeRoleArn: new FormControl<string | null | undefined>(undefined),
			secureInitializationRoleArn: new FormControl<string | null | undefined>(undefined),
			subtype: new FormControl<StudioComponentSubtype | null | undefined>(undefined),
			type: new FormControl<StudioComponentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateStudioRequest {

		/** Required */
		adminRoleArn: string;

		/** Required */
		displayName: string;
		studioEncryptionConfiguration?: StudioEncryptionConfiguration;

		/** Required */
		studioName: string;
		tags?: Tags;

		/** Required */
		userRoleArn: string;
	}
	export interface CreateStudioRequestFormProperties {

		/** Required */
		adminRoleArn: FormControl<string | null | undefined>,

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/** Required */
		studioName: FormControl<string | null | undefined>,

		/** Required */
		userRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStudioRequestFormGroup() {
		return new FormGroup<CreateStudioRequestFormProperties>({
			adminRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			studioName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLaunchProfileMemberRequest {
	}
	export interface DeleteLaunchProfileMemberRequestFormProperties {
	}
	export function CreateDeleteLaunchProfileMemberRequestFormGroup() {
		return new FormGroup<DeleteLaunchProfileMemberRequestFormProperties>({
		});

	}

	export interface DeleteLaunchProfileRequest {
	}
	export interface DeleteLaunchProfileRequestFormProperties {
	}
	export function CreateDeleteLaunchProfileRequestFormGroup() {
		return new FormGroup<DeleteLaunchProfileRequestFormProperties>({
		});

	}

	export interface DeleteStreamingImageRequest {
	}
	export interface DeleteStreamingImageRequestFormProperties {
	}
	export function CreateDeleteStreamingImageRequestFormGroup() {
		return new FormGroup<DeleteStreamingImageRequestFormProperties>({
		});

	}

	export interface DeleteStreamingSessionRequest {
	}
	export interface DeleteStreamingSessionRequestFormProperties {
	}
	export function CreateDeleteStreamingSessionRequestFormGroup() {
		return new FormGroup<DeleteStreamingSessionRequestFormProperties>({
		});

	}

	export interface DeleteStudioComponentRequest {
	}
	export interface DeleteStudioComponentRequestFormProperties {
	}
	export function CreateDeleteStudioComponentRequestFormGroup() {
		return new FormGroup<DeleteStudioComponentRequestFormProperties>({
		});

	}

	export interface DeleteStudioMemberRequest {
	}
	export interface DeleteStudioMemberRequestFormProperties {
	}
	export function CreateDeleteStudioMemberRequestFormGroup() {
		return new FormGroup<DeleteStudioMemberRequestFormProperties>({
		});

	}

	export interface DeleteStudioRequest {
	}
	export interface DeleteStudioRequestFormProperties {
	}
	export function CreateDeleteStudioRequestFormGroup() {
		return new FormGroup<DeleteStudioRequestFormProperties>({
		});

	}

	export interface GetEulaRequest {
	}
	export interface GetEulaRequestFormProperties {
	}
	export function CreateGetEulaRequestFormGroup() {
		return new FormGroup<GetEulaRequestFormProperties>({
		});

	}

	export interface GetLaunchProfileDetailsRequest {
	}
	export interface GetLaunchProfileDetailsRequestFormProperties {
	}
	export function CreateGetLaunchProfileDetailsRequestFormGroup() {
		return new FormGroup<GetLaunchProfileDetailsRequestFormProperties>({
		});

	}

	export interface GetLaunchProfileInitializationRequest {
	}
	export interface GetLaunchProfileInitializationRequestFormProperties {
	}
	export function CreateGetLaunchProfileInitializationRequestFormGroup() {
		return new FormGroup<GetLaunchProfileInitializationRequestFormProperties>({
		});

	}

	export interface GetLaunchProfileMemberRequest {
	}
	export interface GetLaunchProfileMemberRequestFormProperties {
	}
	export function CreateGetLaunchProfileMemberRequestFormGroup() {
		return new FormGroup<GetLaunchProfileMemberRequestFormProperties>({
		});

	}

	export interface GetLaunchProfileRequest {
	}
	export interface GetLaunchProfileRequestFormProperties {
	}
	export function CreateGetLaunchProfileRequestFormGroup() {
		return new FormGroup<GetLaunchProfileRequestFormProperties>({
		});

	}

	export interface GetStreamingImageRequest {
	}
	export interface GetStreamingImageRequestFormProperties {
	}
	export function CreateGetStreamingImageRequestFormGroup() {
		return new FormGroup<GetStreamingImageRequestFormProperties>({
		});

	}

	export interface GetStreamingSessionBackupRequest {
	}
	export interface GetStreamingSessionBackupRequestFormProperties {
	}
	export function CreateGetStreamingSessionBackupRequestFormGroup() {
		return new FormGroup<GetStreamingSessionBackupRequestFormProperties>({
		});

	}

	export interface GetStreamingSessionRequest {
	}
	export interface GetStreamingSessionRequestFormProperties {
	}
	export function CreateGetStreamingSessionRequestFormGroup() {
		return new FormGroup<GetStreamingSessionRequestFormProperties>({
		});

	}

	export interface GetStreamingSessionStreamRequest {
	}
	export interface GetStreamingSessionStreamRequestFormProperties {
	}
	export function CreateGetStreamingSessionStreamRequestFormGroup() {
		return new FormGroup<GetStreamingSessionStreamRequestFormProperties>({
		});

	}

	export interface GetStudioComponentRequest {
	}
	export interface GetStudioComponentRequestFormProperties {
	}
	export function CreateGetStudioComponentRequestFormGroup() {
		return new FormGroup<GetStudioComponentRequestFormProperties>({
		});

	}

	export interface GetStudioMemberRequest {
	}
	export interface GetStudioMemberRequestFormProperties {
	}
	export function CreateGetStudioMemberRequestFormGroup() {
		return new FormGroup<GetStudioMemberRequestFormProperties>({
		});

	}

	export interface GetStudioRequest {
	}
	export interface GetStudioRequestFormProperties {
	}
	export function CreateGetStudioRequestFormGroup() {
		return new FormGroup<GetStudioRequestFormProperties>({
		});

	}

	export interface ListEulaAcceptancesRequest {
	}
	export interface ListEulaAcceptancesRequestFormProperties {
	}
	export function CreateListEulaAcceptancesRequestFormGroup() {
		return new FormGroup<ListEulaAcceptancesRequestFormProperties>({
		});

	}

	export interface ListEulasRequest {
	}
	export interface ListEulasRequestFormProperties {
	}
	export function CreateListEulasRequestFormGroup() {
		return new FormGroup<ListEulasRequestFormProperties>({
		});

	}

	export interface ListLaunchProfileMembersRequest {
	}
	export interface ListLaunchProfileMembersRequestFormProperties {
	}
	export function CreateListLaunchProfileMembersRequestFormGroup() {
		return new FormGroup<ListLaunchProfileMembersRequestFormProperties>({
		});

	}

	export interface ListLaunchProfilesRequest {
	}
	export interface ListLaunchProfilesRequestFormProperties {
	}
	export function CreateListLaunchProfilesRequestFormGroup() {
		return new FormGroup<ListLaunchProfilesRequestFormProperties>({
		});

	}

	export interface ListStreamingImagesRequest {
	}
	export interface ListStreamingImagesRequestFormProperties {
	}
	export function CreateListStreamingImagesRequestFormGroup() {
		return new FormGroup<ListStreamingImagesRequestFormProperties>({
		});

	}

	export interface ListStreamingSessionBackupsRequest {
	}
	export interface ListStreamingSessionBackupsRequestFormProperties {
	}
	export function CreateListStreamingSessionBackupsRequestFormGroup() {
		return new FormGroup<ListStreamingSessionBackupsRequestFormProperties>({
		});

	}

	export interface ListStreamingSessionsRequest {
	}
	export interface ListStreamingSessionsRequestFormProperties {
	}
	export function CreateListStreamingSessionsRequestFormGroup() {
		return new FormGroup<ListStreamingSessionsRequestFormProperties>({
		});

	}

	export interface ListStudioComponentsRequest {
	}
	export interface ListStudioComponentsRequestFormProperties {
	}
	export function CreateListStudioComponentsRequestFormGroup() {
		return new FormGroup<ListStudioComponentsRequestFormProperties>({
		});

	}

	export interface ListStudioMembersRequest {
	}
	export interface ListStudioMembersRequestFormProperties {
	}
	export function CreateListStudioMembersRequestFormGroup() {
		return new FormGroup<ListStudioMembersRequestFormProperties>({
		});

	}

	export interface ListStudiosRequest {
	}
	export interface ListStudiosRequestFormProperties {
	}
	export function CreateListStudiosRequestFormGroup() {
		return new FormGroup<ListStudiosRequestFormProperties>({
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

	export interface PutLaunchProfileMembersRequest {

		/** Required */
		identityStoreId: string;

		/** Required */
		members: Array<NewLaunchProfileMember>;
	}
	export interface PutLaunchProfileMembersRequestFormProperties {

		/** Required */
		identityStoreId: FormControl<string | null | undefined>,
	}
	export function CreatePutLaunchProfileMembersRequestFormGroup() {
		return new FormGroup<PutLaunchProfileMembersRequestFormProperties>({
			identityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutStudioMembersRequest {

		/** Required */
		identityStoreId: string;

		/** Required */
		members: Array<NewStudioMember>;
	}
	export interface PutStudioMembersRequestFormProperties {

		/** Required */
		identityStoreId: FormControl<string | null | undefined>,
	}
	export function CreatePutStudioMembersRequestFormGroup() {
		return new FormGroup<PutStudioMembersRequestFormProperties>({
			identityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartStreamingSessionRequest {
		backupId?: string;
	}
	export interface StartStreamingSessionRequestFormProperties {
		backupId: FormControl<string | null | undefined>,
	}
	export function CreateStartStreamingSessionRequestFormGroup() {
		return new FormGroup<StartStreamingSessionRequestFormProperties>({
			backupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartStudioSSOConfigurationRepairRequest {
	}
	export interface StartStudioSSOConfigurationRepairRequestFormProperties {
	}
	export function CreateStartStudioSSOConfigurationRepairRequestFormGroup() {
		return new FormGroup<StartStudioSSOConfigurationRepairRequestFormProperties>({
		});

	}

	export interface StopStreamingSessionRequest {
		volumeRetentionMode?: VolumeRetentionMode;
	}
	export interface StopStreamingSessionRequestFormProperties {
		volumeRetentionMode: FormControl<VolumeRetentionMode | null | undefined>,
	}
	export function CreateStopStreamingSessionRequestFormGroup() {
		return new FormGroup<StopStreamingSessionRequestFormProperties>({
			volumeRetentionMode: new FormControl<VolumeRetentionMode | null | undefined>(undefined),
		});

	}

	export enum StudioState { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', READY = 'READY', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETED = 'DELETED', DELETE_FAILED = 'DELETE_FAILED', CREATE_FAILED = 'CREATE_FAILED', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface TagResourceRequest {
		tags?: Tags;
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

	export interface UpdateLaunchProfileMemberRequest {

		/** Required */
		persona: LaunchProfilePersona;
	}
	export interface UpdateLaunchProfileMemberRequestFormProperties {

		/** Required */
		persona: FormControl<LaunchProfilePersona | null | undefined>,
	}
	export function CreateUpdateLaunchProfileMemberRequestFormGroup() {
		return new FormGroup<UpdateLaunchProfileMemberRequestFormProperties>({
			persona: new FormControl<LaunchProfilePersona | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLaunchProfileRequest {
		description?: string;
		launchProfileProtocolVersions?: Array<string>;
		name?: string;
		streamConfiguration?: StreamConfigurationCreate;
		studioComponentIds?: Array<string>;
	}
	export interface UpdateLaunchProfileRequestFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLaunchProfileRequestFormGroup() {
		return new FormGroup<UpdateLaunchProfileRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStreamingImageRequest {
		description?: string;
		name?: string;
	}
	export interface UpdateStreamingImageRequestFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStreamingImageRequestFormGroup() {
		return new FormGroup<UpdateStreamingImageRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStudioComponentRequest {
		configuration?: StudioComponentConfiguration;
		description?: string;
		ec2SecurityGroupIds?: Array<string>;
		initializationScripts?: Array<StudioComponentInitializationScript>;
		name?: string;
		runtimeRoleArn?: string;
		scriptParameters?: Array<ScriptParameterKeyValue>;
		secureInitializationRoleArn?: string;
		subtype?: StudioComponentSubtype;
		type?: StudioComponentType;
	}
	export interface UpdateStudioComponentRequestFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		runtimeRoleArn: FormControl<string | null | undefined>,
		secureInitializationRoleArn: FormControl<string | null | undefined>,
		subtype: FormControl<StudioComponentSubtype | null | undefined>,
		type: FormControl<StudioComponentType | null | undefined>,
	}
	export function CreateUpdateStudioComponentRequestFormGroup() {
		return new FormGroup<UpdateStudioComponentRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			runtimeRoleArn: new FormControl<string | null | undefined>(undefined),
			secureInitializationRoleArn: new FormControl<string | null | undefined>(undefined),
			subtype: new FormControl<StudioComponentSubtype | null | undefined>(undefined),
			type: new FormControl<StudioComponentType | null | undefined>(undefined),
		});

	}

	export interface UpdateStudioRequest {
		adminRoleArn?: string;
		displayName?: string;
		userRoleArn?: string;
	}
	export interface UpdateStudioRequestFormProperties {
		adminRoleArn: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		userRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStudioRequestFormGroup() {
		return new FormGroup<UpdateStudioRequestFormProperties>({
			adminRoleArn: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			userRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accept EULAs.
		 * Post 2020-08-01/studios/{studioId}/eula-acceptances
		 * @param {string} studioId The studio ID.
		 * @return {AcceptEulasResponse} Success
		 */
		AcceptEulas(studioId: string, requestBody: AcceptEulasPostBody): Observable<AcceptEulasResponse> {
			return this.http.post<AcceptEulasResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/eula-acceptances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List EULA acceptances.
		 * Get 2020-08-01/studios/{studioId}/eula-acceptances
		 * @param {Array<string>} eulaIds The list of EULA IDs that have been previously accepted.
		 * @param {string} nextToken The token for the next set of results, or null if there are no more results.
		 * @param {string} studioId The studio ID. 
		 * @return {ListEulaAcceptancesResponse} Success
		 */
		ListEulaAcceptances(eulaIds: Array<string> | null | undefined, nextToken: string | null | undefined, studioId: string): Observable<ListEulaAcceptancesResponse> {
			return this.http.get<ListEulaAcceptancesResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/eula-acceptances?' + eulaIds?.map(z => `eulaIds=${encodeURIComponent(z)}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Create a launch profile.
		 * Post 2020-08-01/studios/{studioId}/launch-profiles
		 * @param {string} studioId The studio ID. 
		 * @return {CreateLaunchProfileResponse} Success
		 */
		CreateLaunchProfile(studioId: string, requestBody: CreateLaunchProfilePostBody): Observable<CreateLaunchProfileResponse> {
			return this.http.post<CreateLaunchProfileResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all the launch profiles a studio.
		 * Get 2020-08-01/studios/{studioId}/launch-profiles
		 * @param {number} maxResults The max number of results to return in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next set of results, or null if there are no more results.
		 * @param {string} principalId The principal ID. This currently supports a IAM Identity Center UserId. 
		 * @param {Array<LaunchProfileState>} states Filter this request to launch profiles in any of the given states.
		 * @param {string} studioId The studio ID. 
		 * @return {ListLaunchProfilesResponse} Success
		 */
		ListLaunchProfiles(maxResults: number | null | undefined, nextToken: string | null | undefined, principalId: string | null | undefined, states: Array<LaunchProfileState> | null | undefined, studioId: string): Observable<ListLaunchProfilesResponse> {
			return this.http.get<ListLaunchProfilesResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&principalId=' + (principalId == null ? '' : encodeURIComponent(principalId)) + '&' + states?.map(z => `states=${z}`).join('&'), {});
		}

		/**
		 * Creates a streaming image resource in a studio.
		 * Post 2020-08-01/studios/{studioId}/streaming-images
		 * @param {string} studioId The studio ID. 
		 * @return {CreateStreamingImageResponse} Success
		 */
		CreateStreamingImage(studioId: string, requestBody: CreateStreamingImagePostBody): Observable<CreateStreamingImageResponse> {
			return this.http.post<CreateStreamingImageResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-images', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>
		 * Get 2020-08-01/studios/{studioId}/streaming-images
		 * @param {string} nextToken The token for the next set of results, or null if there are no more results.
		 * @param {string} owner Filter this request to streaming images with the given owner
		 * @param {string} studioId The studio ID. 
		 * @return {ListStreamingImagesResponse} Success
		 */
		ListStreamingImages(nextToken: string | null | undefined, owner: string | null | undefined, studioId: string): Observable<ListStreamingImagesResponse> {
			return this.http.get<ListStreamingImagesResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-images?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&owner=' + (owner == null ? '' : encodeURIComponent(owner)), {});
		}

		/**
		 * <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>
		 * Post 2020-08-01/studios/{studioId}/streaming-sessions
		 * @param {string} studioId The studio ID. 
		 * @return {CreateStreamingSessionResponse} Success
		 */
		CreateStreamingSession(studioId: string, requestBody: CreateStreamingSessionPostBody): Observable<CreateStreamingSessionResponse> {
			return this.http.post<CreateStreamingSessionResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the streaming sessions in a studio.
		 * Get 2020-08-01/studios/{studioId}/streaming-sessions
		 * @param {string} createdBy Filters the request to streaming sessions created by the given user.
		 * @param {string} nextToken The token for the next set of results, or null if there are no more results.
		 * @param {string} ownedBy Filters the request to streaming session owned by the given user
		 * @param {string} sessionIds Filters the request to only the provided session IDs.
		 * @param {string} studioId The studio ID. 
		 * @return {ListStreamingSessionsResponse} Success
		 */
		ListStreamingSessions(createdBy: string | null | undefined, nextToken: string | null | undefined, ownedBy: string | null | undefined, sessionIds: string | null | undefined, studioId: string): Observable<ListStreamingSessionsResponse> {
			return this.http.get<ListStreamingSessionsResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-sessions?createdBy=' + (createdBy == null ? '' : encodeURIComponent(createdBy)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)) + '&sessionIds=' + (sessionIds == null ? '' : encodeURIComponent(sessionIds)), {});
		}

		/**
		 * <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>
		 * Post 2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams
		 * @param {string} sessionId The streaming session ID.
		 * @param {string} studioId The studio ID. 
		 * @return {CreateStreamingSessionStreamResponse} Success
		 */
		CreateStreamingSessionStream(sessionId: string, studioId: string, requestBody: CreateStreamingSessionStreamPostBody): Observable<CreateStreamingSessionStreamResponse> {
			return this.http.post<CreateStreamingSessionStreamResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/streams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
		 * Post 2020-08-01/studios
		 * @return {CreateStudioResponse} Success
		 */
		CreateStudio(requestBody: CreateStudioPostBody): Observable<CreateStudioResponse> {
			return this.http.post<CreateStudioResponse>(this.baseUri + '2020-08-01/studios', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.
		 * Get 2020-08-01/studios
		 * @param {string} nextToken The token for the next set of results, or null if there are no more results.
		 * @return {ListStudiosResponse} Success
		 */
		ListStudios(nextToken: string | null | undefined): Observable<ListStudiosResponse> {
			return this.http.get<ListStudiosResponse>(this.baseUri + '2020-08-01/studios?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a studio component resource.
		 * Post 2020-08-01/studios/{studioId}/studio-components
		 * @param {string} studioId The studio ID. 
		 * @return {CreateStudioComponentResponse} Success
		 */
		CreateStudioComponent(studioId: string, requestBody: CreateStudioComponentPostBody): Observable<CreateStudioComponentResponse> {
			return this.http.post<CreateStudioComponentResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/studio-components', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the <code>StudioComponents</code> in a studio.
		 * Get 2020-08-01/studios/{studioId}/studio-components
		 * @param {number} maxResults The max number of results to return in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next set of results, or null if there are no more results.
		 * @param {Array<StudioComponentState>} states Filters the request to studio components that are in one of the given states. 
		 * @param {string} studioId The studio ID. 
		 * @param {Array<StudioComponentType>} types Filters the request to studio components that are of one of the given types.
		 * @return {ListStudioComponentsResponse} Success
		 */
		ListStudioComponents(maxResults: number | null | undefined, nextToken: string | null | undefined, states: Array<StudioComponentState> | null | undefined, studioId: string, types: Array<StudioComponentType> | null | undefined): Observable<ListStudioComponentsResponse> {
			return this.http.get<ListStudioComponentsResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/studio-components?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&' + states?.map(z => `states=${z}`).join('&') + '&' + types?.map(z => `types=${z}`).join('&'), {});
		}

		/**
		 * Permanently delete a launch profile.
		 * Delete 2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}
		 * @param {string} launchProfileId The ID of the launch profile used to control access from the streaming session.
		 * @param {string} studioId The studio ID. 
		 * @return {DeleteLaunchProfileResponse} Success
		 */
		DeleteLaunchProfile(launchProfileId: string, studioId: string): Observable<DeleteLaunchProfileResponse> {
			return this.http.delete<DeleteLaunchProfileResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles/' + (launchProfileId == null ? '' : encodeURIComponent(launchProfileId)), {});
		}

		/**
		 * Get a launch profile.
		 * Get 2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}
		 * @param {string} launchProfileId The ID of the launch profile used to control access from the streaming session.
		 * @param {string} studioId The studio ID. 
		 * @return {GetLaunchProfileResponse} Success
		 */
		GetLaunchProfile(launchProfileId: string, studioId: string): Observable<GetLaunchProfileResponse> {
			return this.http.get<GetLaunchProfileResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles/' + (launchProfileId == null ? '' : encodeURIComponent(launchProfileId)), {});
		}

		/**
		 * Update a launch profile.
		 * Patch 2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}
		 * @param {string} launchProfileId The ID of the launch profile used to control access from the streaming session.
		 * @param {string} studioId The studio ID. 
		 * @return {UpdateLaunchProfileResponse} Success
		 */
		UpdateLaunchProfile(launchProfileId: string, studioId: string, requestBody: UpdateLaunchProfilePatchBody): Observable<UpdateLaunchProfileResponse> {
			return this.http.patch<UpdateLaunchProfileResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles/' + (launchProfileId == null ? '' : encodeURIComponent(launchProfileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a user from launch profile membership.
		 * Delete 2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}
		 * @param {string} launchProfileId The ID of the launch profile used to control access from the streaming session.
		 * @param {string} principalId The principal ID. This currently supports a IAM Identity Center UserId. 
		 * @param {string} studioId The studio ID. 
		 * @return {DeleteLaunchProfileMemberResponse} Success
		 */
		DeleteLaunchProfileMember(launchProfileId: string, principalId: string, studioId: string): Observable<DeleteLaunchProfileMemberResponse> {
			return this.http.delete<DeleteLaunchProfileMemberResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles/' + (launchProfileId == null ? '' : encodeURIComponent(launchProfileId)) + '/membership/' + (principalId == null ? '' : encodeURIComponent(principalId)), {});
		}

		/**
		 * Get a user persona in launch profile membership.
		 * Get 2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}
		 * @param {string} launchProfileId The ID of the launch profile used to control access from the streaming session.
		 * @param {string} principalId The principal ID. This currently supports a IAM Identity Center UserId. 
		 * @param {string} studioId The studio ID. 
		 * @return {GetLaunchProfileMemberResponse} Success
		 */
		GetLaunchProfileMember(launchProfileId: string, principalId: string, studioId: string): Observable<GetLaunchProfileMemberResponse> {
			return this.http.get<GetLaunchProfileMemberResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles/' + (launchProfileId == null ? '' : encodeURIComponent(launchProfileId)) + '/membership/' + (principalId == null ? '' : encodeURIComponent(principalId)), {});
		}

		/**
		 * Update a user persona in launch profile membership.
		 * Patch 2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}
		 * @param {string} launchProfileId The ID of the launch profile used to control access from the streaming session.
		 * @param {string} principalId The principal ID. This currently supports a IAM Identity Center UserId. 
		 * @param {string} studioId The studio ID. 
		 * @return {UpdateLaunchProfileMemberResponse} Success
		 */
		UpdateLaunchProfileMember(launchProfileId: string, principalId: string, studioId: string, requestBody: UpdateLaunchProfileMemberPatchBody): Observable<UpdateLaunchProfileMemberResponse> {
			return this.http.patch<UpdateLaunchProfileMemberResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles/' + (launchProfileId == null ? '' : encodeURIComponent(launchProfileId)) + '/membership/' + (principalId == null ? '' : encodeURIComponent(principalId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete streaming image.
		 * Delete 2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}
		 * @param {string} streamingImageId The streaming image ID.
		 * @param {string} studioId The studio ID. 
		 * @return {DeleteStreamingImageResponse} Success
		 */
		DeleteStreamingImage(streamingImageId: string, studioId: string): Observable<DeleteStreamingImageResponse> {
			return this.http.delete<DeleteStreamingImageResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-images/' + (streamingImageId == null ? '' : encodeURIComponent(streamingImageId)), {});
		}

		/**
		 * Get streaming image.
		 * Get 2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}
		 * @param {string} streamingImageId The streaming image ID.
		 * @param {string} studioId The studio ID. 
		 * @return {GetStreamingImageResponse} Success
		 */
		GetStreamingImage(streamingImageId: string, studioId: string): Observable<GetStreamingImageResponse> {
			return this.http.get<GetStreamingImageResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-images/' + (streamingImageId == null ? '' : encodeURIComponent(streamingImageId)), {});
		}

		/**
		 * Update streaming image.
		 * Patch 2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}
		 * @param {string} streamingImageId The streaming image ID.
		 * @param {string} studioId The studio ID. 
		 * @return {UpdateStreamingImageResponse} Success
		 */
		UpdateStreamingImage(streamingImageId: string, studioId: string, requestBody: UpdateStreamingImagePatchBody): Observable<UpdateStreamingImageResponse> {
			return this.http.patch<UpdateStreamingImageResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-images/' + (streamingImageId == null ? '' : encodeURIComponent(streamingImageId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>
		 * Delete 2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}
		 * @param {string} sessionId The streaming session ID.
		 * @param {string} studioId The studio ID. 
		 * @return {DeleteStreamingSessionResponse} Success
		 */
		DeleteStreamingSession(sessionId: string, studioId: string): Observable<DeleteStreamingSessionResponse> {
			return this.http.delete<DeleteStreamingSessionResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), {});
		}

		/**
		 * <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
		 * Get 2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}
		 * @param {string} sessionId The streaming session ID.
		 * @param {string} studioId The studio ID. 
		 * @return {GetStreamingSessionResponse} Success
		 */
		GetStreamingSession(sessionId: string, studioId: string): Observable<GetStreamingSessionResponse> {
			return this.http.get<GetStreamingSessionResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), {});
		}

		/**
		 * Delete a studio resource.
		 * Delete 2020-08-01/studios/{studioId}
		 * @param {string} studioId The studio ID. 
		 * @return {DeleteStudioResponse} Success
		 */
		DeleteStudio(studioId: string): Observable<DeleteStudioResponse> {
			return this.http.delete<DeleteStudioResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)), {});
		}

		/**
		 * Get a studio resource.
		 * Get 2020-08-01/studios/{studioId}
		 * @param {string} studioId The studio ID. 
		 * @return {GetStudioResponse} Success
		 */
		GetStudio(studioId: string): Observable<GetStudioResponse> {
			return this.http.get<GetStudioResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)), {});
		}

		/**
		 * <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
		 * Patch 2020-08-01/studios/{studioId}
		 * @param {string} studioId The studio ID. 
		 * @return {UpdateStudioResponse} Success
		 */
		UpdateStudio(studioId: string, requestBody: UpdateStudioPatchBody): Observable<UpdateStudioResponse> {
			return this.http.patch<UpdateStudioResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a studio component resource.
		 * Delete 2020-08-01/studios/{studioId}/studio-components/{studioComponentId}
		 * @param {string} studioComponentId The studio component ID.
		 * @param {string} studioId The studio ID. 
		 * @return {DeleteStudioComponentResponse} Success
		 */
		DeleteStudioComponent(studioComponentId: string, studioId: string): Observable<DeleteStudioComponentResponse> {
			return this.http.delete<DeleteStudioComponentResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/studio-components/' + (studioComponentId == null ? '' : encodeURIComponent(studioComponentId)), {});
		}

		/**
		 * Gets a studio component resource.
		 * Get 2020-08-01/studios/{studioId}/studio-components/{studioComponentId}
		 * @param {string} studioComponentId The studio component ID.
		 * @param {string} studioId The studio ID. 
		 * @return {GetStudioComponentResponse} Success
		 */
		GetStudioComponent(studioComponentId: string, studioId: string): Observable<GetStudioComponentResponse> {
			return this.http.get<GetStudioComponentResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/studio-components/' + (studioComponentId == null ? '' : encodeURIComponent(studioComponentId)), {});
		}

		/**
		 * Updates a studio component resource.
		 * Patch 2020-08-01/studios/{studioId}/studio-components/{studioComponentId}
		 * @param {string} studioComponentId The studio component ID.
		 * @param {string} studioId The studio ID. 
		 * @return {UpdateStudioComponentResponse} Success
		 */
		UpdateStudioComponent(studioComponentId: string, studioId: string, requestBody: UpdateStudioComponentPatchBody): Observable<UpdateStudioComponentResponse> {
			return this.http.patch<UpdateStudioComponentResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/studio-components/' + (studioComponentId == null ? '' : encodeURIComponent(studioComponentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a user from studio membership.
		 * Delete 2020-08-01/studios/{studioId}/membership/{principalId}
		 * @param {string} principalId The principal ID. This currently supports a IAM Identity Center UserId. 
		 * @param {string} studioId The studio ID. 
		 * @return {DeleteStudioMemberResponse} Success
		 */
		DeleteStudioMember(principalId: string, studioId: string): Observable<DeleteStudioMemberResponse> {
			return this.http.delete<DeleteStudioMemberResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/membership/' + (principalId == null ? '' : encodeURIComponent(principalId)), {});
		}

		/**
		 * Get a user's membership in a studio.
		 * Get 2020-08-01/studios/{studioId}/membership/{principalId}
		 * @param {string} principalId The principal ID. This currently supports a IAM Identity Center UserId. 
		 * @param {string} studioId The studio ID. 
		 * @return {GetStudioMemberResponse} Success
		 */
		GetStudioMember(principalId: string, studioId: string): Observable<GetStudioMemberResponse> {
			return this.http.get<GetStudioMemberResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/membership/' + (principalId == null ? '' : encodeURIComponent(principalId)), {});
		}

		/**
		 * Get EULA.
		 * Get 2020-08-01/eulas/{eulaId}
		 * @param {string} eulaId The EULA ID.
		 * @return {GetEulaResponse} Success
		 */
		GetEula(eulaId: string): Observable<GetEulaResponse> {
			return this.http.get<GetEulaResponse>(this.baseUri + '2020-08-01/eulas/' + (eulaId == null ? '' : encodeURIComponent(eulaId)), {});
		}

		/**
		 * Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.
		 * Get 2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/details
		 * @param {string} launchProfileId The ID of the launch profile used to control access from the streaming session.
		 * @param {string} studioId The studio ID. 
		 * @return {GetLaunchProfileDetailsResponse} Success
		 */
		GetLaunchProfileDetails(launchProfileId: string, studioId: string): Observable<GetLaunchProfileDetailsResponse> {
			return this.http.get<GetLaunchProfileDetailsResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles/' + (launchProfileId == null ? '' : encodeURIComponent(launchProfileId)) + '/details', {});
		}

		/**
		 * Get a launch profile initialization.
		 * Get 2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/init#launchProfileProtocolVersions&launchPurpose&platform
		 * @param {string} launchProfileId The ID of the launch profile used to control access from the streaming session.
		 * @param {Array<string>} launchProfileProtocolVersions The launch profile protocol versions supported by the client.
		 * @param {string} launchPurpose The launch purpose.
		 * @param {string} platform The platform where this Launch Profile will be used, either Windows or Linux.
		 * @param {string} studioId The studio ID. 
		 * @return {GetLaunchProfileInitializationResponse} Success
		 */
		GetLaunchProfileInitialization(launchProfileId: string, launchProfileProtocolVersions: Array<string>, launchPurpose: string, platform: string, studioId: string): Observable<GetLaunchProfileInitializationResponse> {
			return this.http.get<GetLaunchProfileInitializationResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles/' + (launchProfileId == null ? '' : encodeURIComponent(launchProfileId)) + '/init#launchProfileProtocolVersions&launchPurpose&platform&' + launchProfileProtocolVersions.map(z => `launchProfileProtocolVersions=${encodeURIComponent(z)}`).join('&') + '&launchPurpose=' + (launchPurpose == null ? '' : encodeURIComponent(launchPurpose)) + '&platform=' + (platform == null ? '' : encodeURIComponent(platform)), {});
		}

		/**
		 * <p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>
		 * Get 2020-08-01/studios/{studioId}/streaming-session-backups/{backupId}
		 * @param {string} backupId The ID of the backup.
		 * @param {string} studioId The studio ID. 
		 * @return {GetStreamingSessionBackupResponse} Success
		 */
		GetStreamingSessionBackup(backupId: string, studioId: string): Observable<GetStreamingSessionBackupResponse> {
			return this.http.get<GetStreamingSessionBackupResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-session-backups/' + (backupId == null ? '' : encodeURIComponent(backupId)), {});
		}

		/**
		 * <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>
		 * Get 2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams/{streamId}
		 * @param {string} sessionId The streaming session ID.
		 * @param {string} streamId The streaming session stream ID.
		 * @param {string} studioId The studio ID. 
		 * @return {GetStreamingSessionStreamResponse} Success
		 */
		GetStreamingSessionStream(sessionId: string, streamId: string, studioId: string): Observable<GetStreamingSessionStreamResponse> {
			return this.http.get<GetStreamingSessionStreamResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), {});
		}

		/**
		 * List EULAs.
		 * Get 2020-08-01/eulas
		 * @param {Array<string>} eulaIds The list of EULA IDs that should be returned
		 * @param {string} nextToken The token for the next set of results, or null if there are no more results.
		 * @return {ListEulasResponse} Success
		 */
		ListEulas(eulaIds: Array<string> | null | undefined, nextToken: string | null | undefined): Observable<ListEulasResponse> {
			return this.http.get<ListEulasResponse>(this.baseUri + '2020-08-01/eulas?' + eulaIds?.map(z => `eulaIds=${encodeURIComponent(z)}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Get all users in a given launch profile membership.
		 * Get 2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership
		 * @param {string} launchProfileId The ID of the launch profile used to control access from the streaming session.
		 * @param {number} maxResults The max number of results to return in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next set of results, or null if there are no more results.
		 * @param {string} studioId The studio ID. 
		 * @return {ListLaunchProfileMembersResponse} Success
		 */
		ListLaunchProfileMembers(launchProfileId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, studioId: string): Observable<ListLaunchProfileMembersResponse> {
			return this.http.get<ListLaunchProfileMembersResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles/' + (launchProfileId == null ? '' : encodeURIComponent(launchProfileId)) + '/membership&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Add/update users with given persona to launch profile membership.
		 * Post 2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership
		 * @param {string} launchProfileId The ID of the launch profile used to control access from the streaming session.
		 * @param {string} studioId The studio ID. 
		 * @return {PutLaunchProfileMembersResponse} Success
		 */
		PutLaunchProfileMembers(launchProfileId: string, studioId: string, requestBody: PutLaunchProfileMembersPostBody): Observable<PutLaunchProfileMembersResponse> {
			return this.http.post<PutLaunchProfileMembersResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/launch-profiles/' + (launchProfileId == null ? '' : encodeURIComponent(launchProfileId)) + '/membership', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the backups of a streaming session in a studio.
		 * Get 2020-08-01/studios/{studioId}/streaming-session-backups
		 * @param {string} nextToken The token for the next set of results, or null if there are no more results.
		 * @param {string} ownedBy The user ID of the user that owns the streaming session.
		 * @param {string} studioId The studio ID. 
		 * @return {ListStreamingSessionBackupsResponse} Success
		 */
		ListStreamingSessionBackups(nextToken: string | null | undefined, ownedBy: string | null | undefined, studioId: string): Observable<ListStreamingSessionBackupsResponse> {
			return this.http.get<ListStreamingSessionBackupsResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-session-backups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)), {});
		}

		/**
		 * <p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>
		 * Get 2020-08-01/studios/{studioId}/membership
		 * @param {number} maxResults The max number of results to return in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next set of results, or null if there are no more results.
		 * @param {string} studioId The studio ID. 
		 * @return {ListStudioMembersResponse} Success
		 */
		ListStudioMembers(maxResults: number | null | undefined, nextToken: string | null | undefined, studioId: string): Observable<ListStudioMembersResponse> {
			return this.http.get<ListStudioMembersResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/membership?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Add/update users with given persona to studio membership.
		 * Post 2020-08-01/studios/{studioId}/membership
		 * @param {string} studioId The studio ID. 
		 * @return {PutStudioMembersResponse} Success
		 */
		PutStudioMembers(studioId: string, requestBody: PutStudioMembersPostBody): Observable<PutStudioMembersResponse> {
			return this.http.post<PutStudioMembersResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/membership', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
		 * Get 2020-08-01/tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource for which you want to list tags.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + '2020-08-01/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Creates tags for a resource, given its ARN.
		 * Post 2020-08-01/tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource you want to add tags to. 
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2020-08-01/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.
		 * Post 2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/start
		 * @param {string} sessionId The streaming session ID for the <code>StartStreamingSessionRequest</code>.
		 * @param {string} studioId The studio ID for the StartStreamingSessionRequest.
		 * @return {StartStreamingSessionResponse} Success
		 */
		StartStreamingSession(sessionId: string, studioId: string, requestBody: StartStreamingSessionPostBody): Observable<StartStreamingSessionResponse> {
			return this.http.post<StartStreamingSessionResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
		 * Put 2020-08-01/studios/{studioId}/sso-configuration
		 * @param {string} studioId The studio ID. 
		 * @return {StartStudioSSOConfigurationRepairResponse} Success
		 */
		StartStudioSSOConfigurationRepair(studioId: string): Observable<StartStudioSSOConfigurationRepairResponse> {
			return this.http.put<StartStudioSSOConfigurationRepairResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/sso-configuration', null, {});
		}

		/**
		 * Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.
		 * Post 2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/stop
		 * @param {string} sessionId The streaming session ID for the <code>StopStreamingSessionRequest</code>.
		 * @param {string} studioId The studioId for the StopStreamingSessionRequest.
		 * @return {StopStreamingSessionResponse} Success
		 */
		StopStreamingSession(sessionId: string, studioId: string, requestBody: StopStreamingSessionPostBody): Observable<StopStreamingSessionResponse> {
			return this.http.post<StopStreamingSessionResponse>(this.baseUri + '2020-08-01/studios/' + (studioId == null ? '' : encodeURIComponent(studioId)) + '/streaming-sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the tags for a resource.
		 * Delete 2020-08-01/tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn Identifies the Amazon Resource Name(ARN) key from which you are removing tags. 
		 * @param {Array<string>} tagKeys One or more tag keys. Specify only the tag keys, not the tag values.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-08-01/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface AcceptEulasPostBody {

		/** The EULA ID. */
		eulaIds?: Array<string>;
	}
	export interface AcceptEulasPostBodyFormProperties {
	}
	export function CreateAcceptEulasPostBodyFormGroup() {
		return new FormGroup<AcceptEulasPostBodyFormProperties>({
		});

	}

	export interface CreateLaunchProfilePostBody {

		/**
		 * A human-readable description of the launch profile.
		 * Min length: 0
		 * Max length: 256
		 */
		description?: string | null;

		/**
		 * Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from. These subnets must support the specified instance types.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 6
		 */
		ec2SubnetIds: Array<string>;

		/**
		 * The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".
		 * Required
		 */
		launchProfileProtocolVersions: Array<string>;

		/**
		 * The name for the launch profile.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		name: string;

		/**
		 * Configuration for streaming workstations created using this launch profile.
		 * Required
		 */
		streamConfiguration: CreateLaunchProfilePostBodyStreamConfiguration;

		/**
		 * Unique identifiers for a collection of studio components that can be used with this launch profile.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		studioComponentIds: Array<string>;

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateLaunchProfilePostBodyFormProperties {

		/**
		 * A human-readable description of the launch profile.
		 * Min length: 0
		 * Max length: 256
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name for the launch profile.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateLaunchProfilePostBodyFormGroup() {
		return new FormGroup<CreateLaunchProfilePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLaunchProfilePostBodyStreamConfiguration {
		automaticTerminationMode?: AutomaticTerminationMode;
		clipboardMode?: StreamingClipboardMode;
		ec2InstanceTypes?: Array<StreamingInstanceType>;
		maxSessionLengthInMinutes?: number | null;
		maxStoppedSessionLengthInMinutes?: number | null;
		sessionBackup?: StreamConfigurationSessionBackup;
		sessionPersistenceMode?: AutomaticTerminationMode;
		sessionStorage?: StreamConfigurationSessionStorage;
		streamingImageIds?: Array<string>;
		volumeConfiguration?: VolumeConfiguration;
	}
	export interface CreateLaunchProfilePostBodyStreamConfigurationFormProperties {
		automaticTerminationMode: FormControl<AutomaticTerminationMode | null | undefined>,
		clipboardMode: FormControl<StreamingClipboardMode | null | undefined>,
		maxSessionLengthInMinutes: FormControl<number | null | undefined>,
		maxStoppedSessionLengthInMinutes: FormControl<number | null | undefined>,
		sessionPersistenceMode: FormControl<AutomaticTerminationMode | null | undefined>,
	}
	export function CreateCreateLaunchProfilePostBodyStreamConfigurationFormGroup() {
		return new FormGroup<CreateLaunchProfilePostBodyStreamConfigurationFormProperties>({
			automaticTerminationMode: new FormControl<AutomaticTerminationMode | null | undefined>(undefined),
			clipboardMode: new FormControl<StreamingClipboardMode | null | undefined>(undefined),
			maxSessionLengthInMinutes: new FormControl<number | null | undefined>(undefined),
			maxStoppedSessionLengthInMinutes: new FormControl<number | null | undefined>(undefined),
			sessionPersistenceMode: new FormControl<AutomaticTerminationMode | null | undefined>(undefined),
		});

	}

	export interface CreateStreamingImagePostBody {

		/**
		 * The description.
		 * Min length: 0
		 * Max length: 256
		 */
		description?: string | null;

		/**
		 * The ID of an EC2 machine image with which to create this streaming image.
		 * Required
		 */
		ec2ImageId: string;

		/**
		 * A friendly name for a streaming image resource.
		 * Required
		 * Min length: 0
		 * Max length: 64
		 */
		name: string;

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateStreamingImagePostBodyFormProperties {

		/**
		 * The description.
		 * Min length: 0
		 * Max length: 256
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The ID of an EC2 machine image with which to create this streaming image.
		 * Required
		 */
		ec2ImageId: FormControl<string | null | undefined>,

		/**
		 * A friendly name for a streaming image resource.
		 * Required
		 * Min length: 0
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateStreamingImagePostBodyFormGroup() {
		return new FormGroup<CreateStreamingImagePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			ec2ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ami-[0-9A-z]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateStreamingSessionPostBody {

		/** The EC2 Instance type used for the streaming session. */
		ec2InstanceType?: StreamingInstanceType | null;

		/**
		 * The ID of the launch profile used to control access from the streaming session.
		 * Required
		 */
		launchProfileId: string;

		/** The user ID of the user that owns the streaming session. The user that owns the session will be logging into the session and interacting with the virtual workstation. */
		ownedBy?: string | null;

		/**
		 * The ID of the streaming image.
		 * Min length: 0
		 * Max length: 22
		 */
		streamingImageId?: string | null;

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateStreamingSessionPostBodyFormProperties {

		/** The EC2 Instance type used for the streaming session. */
		ec2InstanceType: FormControl<StreamingInstanceType | null | undefined>,

		/**
		 * The ID of the launch profile used to control access from the streaming session.
		 * Required
		 */
		launchProfileId: FormControl<string | null | undefined>,

		/** The user ID of the user that owns the streaming session. The user that owns the session will be logging into the session and interacting with the virtual workstation. */
		ownedBy: FormControl<string | null | undefined>,

		/**
		 * The ID of the streaming image.
		 * Min length: 0
		 * Max length: 22
		 */
		streamingImageId: FormControl<string | null | undefined>,

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateStreamingSessionPostBodyFormGroup() {
		return new FormGroup<CreateStreamingSessionPostBodyFormProperties>({
			ec2InstanceType: new FormControl<StreamingInstanceType | null | undefined>(undefined),
			launchProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownedBy: new FormControl<string | null | undefined>(undefined),
			streamingImageId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(22), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateStreamingSessionStreamPostBody {

		/**
		 * The expiration time in seconds.
		 * Minimum: 60
		 * Maximum: 3600
		 */
		expirationInSeconds?: number | null;
	}
	export interface CreateStreamingSessionStreamPostBodyFormProperties {

		/**
		 * The expiration time in seconds.
		 * Minimum: 60
		 * Maximum: 3600
		 */
		expirationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateStreamingSessionStreamPostBodyFormGroup() {
		return new FormGroup<CreateStreamingSessionStreamPostBodyFormProperties>({
			expirationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(3600)]),
		});

	}

	export interface CreateStudioPostBody {

		/**
		 * The IAM role that studio admins will assume when logging in to the Nimble Studio portal.
		 * Required
		 * Min length: 0
		 * Max length: 2048
		 */
		adminRoleArn: string;

		/**
		 * A friendly name for the studio.
		 * Required
		 * Min length: 0
		 * Max length: 64
		 */
		displayName: string;

		/** Configuration of the encryption method that is used for the studio. */
		studioEncryptionConfiguration?: CreateStudioPostBodyStudioEncryptionConfiguration;

		/**
		 * The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.
		 * Required
		 * Min length: 3
		 * Max length: 64
		 */
		studioName: string;

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags?: {[id: string]: string };

		/**
		 * The IAM role that studio users will assume when logging in to the Nimble Studio portal.
		 * Required
		 * Min length: 0
		 * Max length: 2048
		 */
		userRoleArn: string;
	}
	export interface CreateStudioPostBodyFormProperties {

		/**
		 * The IAM role that studio admins will assume when logging in to the Nimble Studio portal.
		 * Required
		 * Min length: 0
		 * Max length: 2048
		 */
		adminRoleArn: FormControl<string | null | undefined>,

		/**
		 * A friendly name for the studio.
		 * Required
		 * Min length: 0
		 * Max length: 64
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.
		 * Required
		 * Min length: 3
		 * Max length: 64
		 */
		studioName: FormControl<string | null | undefined>,

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The IAM role that studio users will assume when logging in to the Nimble Studio portal.
		 * Required
		 * Min length: 0
		 * Max length: 2048
		 */
		userRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStudioPostBodyFormGroup() {
		return new FormGroup<CreateStudioPostBodyFormProperties>({
			adminRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(2048)]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			studioName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(64), Validators.pattern('^[a-z0-9]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			userRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface CreateStudioPostBodyStudioEncryptionConfiguration {
		keyArn?: string;
		keyType?: StudioEncryptionConfigurationKeyType;
	}
	export interface CreateStudioPostBodyStudioEncryptionConfigurationFormProperties {
		keyArn: FormControl<string | null | undefined>,
		keyType: FormControl<StudioEncryptionConfigurationKeyType | null | undefined>,
	}
	export function CreateCreateStudioPostBodyStudioEncryptionConfigurationFormGroup() {
		return new FormGroup<CreateStudioPostBodyStudioEncryptionConfigurationFormProperties>({
			keyArn: new FormControl<string | null | undefined>(undefined),
			keyType: new FormControl<StudioEncryptionConfigurationKeyType | null | undefined>(undefined),
		});

	}

	export interface CreateStudioComponentPostBody {

		/** The configuration of the studio component, based on component type. */
		configuration?: CreateStudioComponentPostBodyConfiguration;

		/**
		 * The description.
		 * Min length: 0
		 * Max length: 256
		 */
		description?: string | null;

		/**
		 * The EC2 security groups that control access to the studio component.
		 * Minimum items: 0
		 * Maximum items: 30
		 */
		ec2SecurityGroupIds?: Array<string>;

		/** Initialization scripts for studio components. */
		initializationScripts?: Array<StudioComponentInitializationScript>;

		/**
		 * The name for the studio component.
		 * Required
		 * Min length: 0
		 * Max length: 64
		 */
		name: string;

		/**
		 * An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running.
		 * Min length: 0
		 * Max length: 2048
		 */
		runtimeRoleArn?: string | null;

		/**
		 * Parameters for the studio component scripts.
		 * Minimum items: 0
		 * Maximum items: 30
		 */
		scriptParameters?: Array<ScriptParameterKeyValue>;

		/**
		 * An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.
		 * Min length: 0
		 * Max length: 2048
		 */
		secureInitializationRoleArn?: string | null;

		/** The specific subtype of a studio component. */
		subtype?: StudioComponentSubtype | null;

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags?: {[id: string]: string };

		/**
		 * The type of the studio component.
		 * Required
		 */
		type: StudioComponentType;
	}
	export interface CreateStudioComponentPostBodyFormProperties {

		/**
		 * The description.
		 * Min length: 0
		 * Max length: 256
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name for the studio component.
		 * Required
		 * Min length: 0
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running.
		 * Min length: 0
		 * Max length: 2048
		 */
		runtimeRoleArn: FormControl<string | null | undefined>,

		/**
		 * An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.
		 * Min length: 0
		 * Max length: 2048
		 */
		secureInitializationRoleArn: FormControl<string | null | undefined>,

		/** The specific subtype of a studio component. */
		subtype: FormControl<StudioComponentSubtype | null | undefined>,

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The type of the studio component.
		 * Required
		 */
		type: FormControl<StudioComponentType | null | undefined>,
	}
	export function CreateCreateStudioComponentPostBodyFormGroup() {
		return new FormGroup<CreateStudioComponentPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			runtimeRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			secureInitializationRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			subtype: new FormControl<StudioComponentSubtype | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<StudioComponentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateStudioComponentPostBodyConfiguration {
		activeDirectoryConfiguration?: ActiveDirectoryConfiguration;
		computeFarmConfiguration?: ComputeFarmConfiguration;
		licenseServiceConfiguration?: LicenseServiceConfiguration;
		sharedFileSystemConfiguration?: SharedFileSystemConfiguration;
	}
	export interface CreateStudioComponentPostBodyConfigurationFormProperties {
	}
	export function CreateCreateStudioComponentPostBodyConfigurationFormGroup() {
		return new FormGroup<CreateStudioComponentPostBodyConfigurationFormProperties>({
		});

	}

	export interface UpdateLaunchProfilePatchBody {

		/**
		 * A human-readable description of the launch profile.
		 * Min length: 0
		 * Max length: 256
		 */
		description?: string | null;

		/** The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31". */
		launchProfileProtocolVersions?: Array<string>;

		/**
		 * The name for the launch profile.
		 * Min length: 1
		 * Max length: 64
		 */
		name?: string | null;

		/** Configuration for streaming workstations created using this launch profile. */
		streamConfiguration?: UpdateLaunchProfilePatchBodyStreamConfiguration;

		/**
		 * Unique identifiers for a collection of studio components that can be used with this launch profile.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		studioComponentIds?: Array<string>;
	}
	export interface UpdateLaunchProfilePatchBodyFormProperties {

		/**
		 * A human-readable description of the launch profile.
		 * Min length: 0
		 * Max length: 256
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name for the launch profile.
		 * Min length: 1
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLaunchProfilePatchBodyFormGroup() {
		return new FormGroup<UpdateLaunchProfilePatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface UpdateLaunchProfilePatchBodyStreamConfiguration {
		automaticTerminationMode?: AutomaticTerminationMode;
		clipboardMode?: StreamingClipboardMode;
		ec2InstanceTypes?: Array<StreamingInstanceType>;
		maxSessionLengthInMinutes?: number | null;
		maxStoppedSessionLengthInMinutes?: number | null;
		sessionBackup?: StreamConfigurationSessionBackup;
		sessionPersistenceMode?: AutomaticTerminationMode;
		sessionStorage?: StreamConfigurationSessionStorage;
		streamingImageIds?: Array<string>;
		volumeConfiguration?: VolumeConfiguration;
	}
	export interface UpdateLaunchProfilePatchBodyStreamConfigurationFormProperties {
		automaticTerminationMode: FormControl<AutomaticTerminationMode | null | undefined>,
		clipboardMode: FormControl<StreamingClipboardMode | null | undefined>,
		maxSessionLengthInMinutes: FormControl<number | null | undefined>,
		maxStoppedSessionLengthInMinutes: FormControl<number | null | undefined>,
		sessionPersistenceMode: FormControl<AutomaticTerminationMode | null | undefined>,
	}
	export function CreateUpdateLaunchProfilePatchBodyStreamConfigurationFormGroup() {
		return new FormGroup<UpdateLaunchProfilePatchBodyStreamConfigurationFormProperties>({
			automaticTerminationMode: new FormControl<AutomaticTerminationMode | null | undefined>(undefined),
			clipboardMode: new FormControl<StreamingClipboardMode | null | undefined>(undefined),
			maxSessionLengthInMinutes: new FormControl<number | null | undefined>(undefined),
			maxStoppedSessionLengthInMinutes: new FormControl<number | null | undefined>(undefined),
			sessionPersistenceMode: new FormControl<AutomaticTerminationMode | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchProfileMemberPatchBody {

		/**
		 * The persona.
		 * Required
		 */
		persona: LaunchProfilePersona;
	}
	export interface UpdateLaunchProfileMemberPatchBodyFormProperties {

		/**
		 * The persona.
		 * Required
		 */
		persona: FormControl<LaunchProfilePersona | null | undefined>,
	}
	export function CreateUpdateLaunchProfileMemberPatchBodyFormGroup() {
		return new FormGroup<UpdateLaunchProfileMemberPatchBodyFormProperties>({
			persona: new FormControl<LaunchProfilePersona | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStreamingImagePatchBody {

		/**
		 * The description.
		 * Min length: 0
		 * Max length: 256
		 */
		description?: string | null;

		/**
		 * A friendly name for a streaming image resource.
		 * Min length: 0
		 * Max length: 64
		 */
		name?: string | null;
	}
	export interface UpdateStreamingImagePatchBodyFormProperties {

		/**
		 * The description.
		 * Min length: 0
		 * Max length: 256
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A friendly name for a streaming image resource.
		 * Min length: 0
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStreamingImagePatchBodyFormGroup() {
		return new FormGroup<UpdateStreamingImagePatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
		});

	}

	export interface UpdateStudioPatchBody {

		/**
		 * The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.
		 * Min length: 0
		 * Max length: 2048
		 */
		adminRoleArn?: string | null;

		/**
		 * A friendly name for the studio.
		 * Min length: 0
		 * Max length: 64
		 */
		displayName?: string | null;

		/**
		 * The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.
		 * Min length: 0
		 * Max length: 2048
		 */
		userRoleArn?: string | null;
	}
	export interface UpdateStudioPatchBodyFormProperties {

		/**
		 * The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.
		 * Min length: 0
		 * Max length: 2048
		 */
		adminRoleArn: FormControl<string | null | undefined>,

		/**
		 * A friendly name for the studio.
		 * Min length: 0
		 * Max length: 64
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.
		 * Min length: 0
		 * Max length: 2048
		 */
		userRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStudioPatchBodyFormGroup() {
		return new FormGroup<UpdateStudioPatchBodyFormProperties>({
			adminRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			userRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateStudioComponentPatchBody {

		/** The configuration of the studio component, based on component type. */
		configuration?: UpdateStudioComponentPatchBodyConfiguration;

		/**
		 * The description.
		 * Min length: 0
		 * Max length: 256
		 */
		description?: string | null;

		/**
		 * The EC2 security groups that control access to the studio component.
		 * Minimum items: 0
		 * Maximum items: 30
		 */
		ec2SecurityGroupIds?: Array<string>;

		/** Initialization scripts for studio components. */
		initializationScripts?: Array<StudioComponentInitializationScript>;

		/**
		 * The name for the studio component.
		 * Min length: 0
		 * Max length: 64
		 */
		name?: string | null;

		/**
		 * An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running.
		 * Min length: 0
		 * Max length: 2048
		 */
		runtimeRoleArn?: string | null;

		/**
		 * Parameters for the studio component scripts.
		 * Minimum items: 0
		 * Maximum items: 30
		 */
		scriptParameters?: Array<ScriptParameterKeyValue>;

		/**
		 * An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.
		 * Min length: 0
		 * Max length: 2048
		 */
		secureInitializationRoleArn?: string | null;

		/** The specific subtype of a studio component. */
		subtype?: StudioComponentSubtype | null;

		/** The type of the studio component. */
		type?: StudioComponentType | null;
	}
	export interface UpdateStudioComponentPatchBodyFormProperties {

		/**
		 * The description.
		 * Min length: 0
		 * Max length: 256
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name for the studio component.
		 * Min length: 0
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * An IAM role attached to a Studio Component that gives the studio component access to Amazon Web Services resources at anytime while the instance is running.
		 * Min length: 0
		 * Max length: 2048
		 */
		runtimeRoleArn: FormControl<string | null | undefined>,

		/**
		 * An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to Amazon Web Services resources when the system initialization script runs.
		 * Min length: 0
		 * Max length: 2048
		 */
		secureInitializationRoleArn: FormControl<string | null | undefined>,

		/** The specific subtype of a studio component. */
		subtype: FormControl<StudioComponentSubtype | null | undefined>,

		/** The type of the studio component. */
		type: FormControl<StudioComponentType | null | undefined>,
	}
	export function CreateUpdateStudioComponentPatchBodyFormGroup() {
		return new FormGroup<UpdateStudioComponentPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			runtimeRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			secureInitializationRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			subtype: new FormControl<StudioComponentSubtype | null | undefined>(undefined),
			type: new FormControl<StudioComponentType | null | undefined>(undefined),
		});

	}

	export interface UpdateStudioComponentPatchBodyConfiguration {
		activeDirectoryConfiguration?: ActiveDirectoryConfiguration;
		computeFarmConfiguration?: ComputeFarmConfiguration;
		licenseServiceConfiguration?: LicenseServiceConfiguration;
		sharedFileSystemConfiguration?: SharedFileSystemConfiguration;
	}
	export interface UpdateStudioComponentPatchBodyConfigurationFormProperties {
	}
	export function CreateUpdateStudioComponentPatchBodyConfigurationFormGroup() {
		return new FormGroup<UpdateStudioComponentPatchBodyConfigurationFormProperties>({
		});

	}

	export interface PutLaunchProfileMembersPostBody {

		/**
		 * The ID of the identity store.
		 * Required
		 */
		identityStoreId: string;

		/**
		 * A list of members.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		members: Array<NewLaunchProfileMember>;
	}
	export interface PutLaunchProfileMembersPostBodyFormProperties {

		/**
		 * The ID of the identity store.
		 * Required
		 */
		identityStoreId: FormControl<string | null | undefined>,
	}
	export function CreatePutLaunchProfileMembersPostBodyFormGroup() {
		return new FormGroup<PutLaunchProfileMembersPostBodyFormProperties>({
			identityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutStudioMembersPostBody {

		/**
		 * The ID of the identity store.
		 * Required
		 */
		identityStoreId: string;

		/**
		 * A list of members.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		members: Array<NewStudioMember>;
	}
	export interface PutStudioMembersPostBodyFormProperties {

		/**
		 * The ID of the identity store.
		 * Required
		 */
		identityStoreId: FormControl<string | null | undefined>,
	}
	export function CreatePutStudioMembersPostBodyFormGroup() {
		return new FormGroup<PutStudioMembersPostBodyFormProperties>({
			identityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourcePostBody {

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags?: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/** A collection of labels, in the form of key-value pairs, that apply to this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartStreamingSessionPostBody {

		/** The ID of the backup. */
		backupId?: string | null;
	}
	export interface StartStreamingSessionPostBodyFormProperties {

		/** The ID of the backup. */
		backupId: FormControl<string | null | undefined>,
	}
	export function CreateStartStreamingSessionPostBodyFormGroup() {
		return new FormGroup<StartStreamingSessionPostBodyFormProperties>({
			backupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopStreamingSessionPostBody {

		/** Adds additional instructions to a streaming session stop action to either retain the EBS volumes or delete the EBS volumes. */
		volumeRetentionMode?: VolumeRetentionMode | null;
	}
	export interface StopStreamingSessionPostBodyFormProperties {

		/** Adds additional instructions to a streaming session stop action to either retain the EBS volumes or delete the EBS volumes. */
		volumeRetentionMode: FormControl<VolumeRetentionMode | null | undefined>,
	}
	export function CreateStopStreamingSessionPostBodyFormGroup() {
		return new FormGroup<StopStreamingSessionPostBodyFormProperties>({
			volumeRetentionMode: new FormControl<VolumeRetentionMode | null | undefined>(undefined),
		});

	}

}

