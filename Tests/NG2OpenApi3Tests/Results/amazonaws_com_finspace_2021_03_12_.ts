import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateEnvironmentResponse {
		environmentId?: string;
		environmentArn?: string;
		environmentUrl?: string;
	}
	export interface CreateEnvironmentResponseFormProperties {
		environmentId: FormControl<string | null | undefined>,
		environmentArn: FormControl<string | null | undefined>,
		environmentUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentResponseFormGroup() {
		return new FormGroup<CreateEnvironmentResponseFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined),
			environmentArn: new FormControl<string | null | undefined>(undefined),
			environmentUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttributeMap {
	}
	export interface AttributeMapFormProperties {
	}
	export function CreateAttributeMapFormGroup() {
		return new FormGroup<AttributeMapFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateKxChangesetResponse {
		changesetId?: string;
		databaseName?: string;
		environmentId?: string;
		changeRequests?: Array<ChangeRequest>;
		createdTimestamp?: Date;
		lastModifiedTimestamp?: Date;
		status?: ChangesetStatus;
		errorInfo?: ErrorInfo;
	}
	export interface CreateKxChangesetResponseFormProperties {
		changesetId: FormControl<string | null | undefined>,
		databaseName: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
		status: FormControl<ChangesetStatus | null | undefined>,
	}
	export function CreateCreateKxChangesetResponseFormGroup() {
		return new FormGroup<CreateKxChangesetResponseFormProperties>({
			changesetId: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ChangesetStatus | null | undefined>(undefined),
		});

	}


	/** A list of change request objects. */
	export interface ChangeRequest {

		/** Required */
		changeType: ChangeType;
		s3Path?: string;

		/** Required */
		dbPath: string;
	}

	/** A list of change request objects. */
	export interface ChangeRequestFormProperties {

		/** Required */
		changeType: FormControl<ChangeType | null | undefined>,
		s3Path: FormControl<string | null | undefined>,

		/** Required */
		dbPath: FormControl<string | null | undefined>,
	}
	export function CreateChangeRequestFormGroup() {
		return new FormGroup<ChangeRequestFormProperties>({
			changeType: new FormControl<ChangeType | null | undefined>(undefined, [Validators.required]),
			s3Path: new FormControl<string | null | undefined>(undefined),
			dbPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ChangeType { PUT = 'PUT', DELETE = 'DELETE' }

	export enum ChangesetStatus { PENDING = 'PENDING', PROCESSING = 'PROCESSING', FAILED = 'FAILED', COMPLETED = 'COMPLETED' }


	/** Provides details in the event of a failed flow, including the error type and the related error message. */
	export interface ErrorInfo {
		errorMessage?: string;
		errorType?: ErrorDetails;
	}

	/** Provides details in the event of a failed flow, including the error type and the related error message. */
	export interface ErrorInfoFormProperties {
		errorMessage: FormControl<string | null | undefined>,
		errorType: FormControl<ErrorDetails | null | undefined>,
	}
	export function CreateErrorInfoFormGroup() {
		return new FormGroup<ErrorInfoFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			errorType: new FormControl<ErrorDetails | null | undefined>(undefined),
		});

	}

	export enum ErrorDetails { 'The inputs to this request are invalid.' = 'The inputs to this request are invalid.', 'Service limits have been exceeded.' = 'Service limits have been exceeded.', 'Missing required permission to perform this request.' = 'Missing required permission to perform this request.', 'One or more inputs to this request were not found.' = 'One or more inputs to this request were not found.', 'The system temporarily lacks sufficient resources to process the request.' = 'The system temporarily lacks sufficient resources to process the request.', 'An internal error has occurred.' = 'An internal error has occurred.', Cancelled = 'Cancelled', 'A user recoverable error has occurred' = 'A user recoverable error has occurred' }

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

	export interface CreateKxClusterResponse {
		environmentId?: string;
		status?: KxClusterStatus;
		statusReason?: string;
		clusterName?: string;
		clusterType?: KxClusterType;
		databases?: Array<KxDatabaseConfiguration>;
		cacheStorageConfigurations?: Array<KxCacheStorageConfiguration>;
		autoScalingConfiguration?: AutoScalingConfiguration;
		clusterDescription?: string;
		capacityConfiguration?: CapacityConfiguration;
		releaseLabel?: string;
		vpcConfiguration?: VpcConfiguration;
		initializationScript?: string;
		commandLineArguments?: Array<KxCommandLineArgument>;
		code?: CodeConfiguration;
		executionRole?: string;
		lastModifiedTimestamp?: Date;
		savedownStorageConfiguration?: KxSavedownStorageConfiguration;
		azMode?: KxAzMode;
		availabilityZoneId?: string;
		createdTimestamp?: Date;
	}
	export interface CreateKxClusterResponseFormProperties {
		environmentId: FormControl<string | null | undefined>,
		status: FormControl<KxClusterStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		clusterName: FormControl<string | null | undefined>,
		clusterType: FormControl<KxClusterType | null | undefined>,
		clusterDescription: FormControl<string | null | undefined>,
		releaseLabel: FormControl<string | null | undefined>,
		initializationScript: FormControl<string | null | undefined>,
		executionRole: FormControl<string | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
		azMode: FormControl<KxAzMode | null | undefined>,
		availabilityZoneId: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateKxClusterResponseFormGroup() {
		return new FormGroup<CreateKxClusterResponseFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<KxClusterStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			clusterType: new FormControl<KxClusterType | null | undefined>(undefined),
			clusterDescription: new FormControl<string | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined),
			initializationScript: new FormControl<string | null | undefined>(undefined),
			executionRole: new FormControl<string | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			azMode: new FormControl<KxAzMode | null | undefined>(undefined),
			availabilityZoneId: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum KxClusterStatus { PENDING = 'PENDING', CREATING = 'CREATING', CREATE_FAILED = 'CREATE_FAILED', RUNNING = 'RUNNING', UPDATING = 'UPDATING', DELETING = 'DELETING', DELETED = 'DELETED', DELETE_FAILED = 'DELETE_FAILED' }

	export enum KxClusterType { HDB = 'HDB', RDB = 'RDB', GATEWAY = 'GATEWAY' }


	/** The configuration of data that is available for querying from this database. */
	export interface KxDatabaseConfiguration {

		/** Required */
		databaseName: string;
		cacheConfigurations?: Array<KxDatabaseCacheConfiguration>;
		changesetId?: string;
	}

	/** The configuration of data that is available for querying from this database. */
	export interface KxDatabaseConfigurationFormProperties {

		/** Required */
		databaseName: FormControl<string | null | undefined>,
		changesetId: FormControl<string | null | undefined>,
	}
	export function CreateKxDatabaseConfigurationFormGroup() {
		return new FormGroup<KxDatabaseConfigurationFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			changesetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure of database cache configuration that is used for mapping database paths to cache types in clusters. */
	export interface KxDatabaseCacheConfiguration {

		/** Required */
		cacheType: string;

		/** Required */
		dbPaths: Array<string>;
	}

	/** The structure of database cache configuration that is used for mapping database paths to cache types in clusters. */
	export interface KxDatabaseCacheConfigurationFormProperties {

		/** Required */
		cacheType: FormControl<string | null | undefined>,
	}
	export function CreateKxDatabaseCacheConfigurationFormGroup() {
		return new FormGroup<KxDatabaseCacheConfigurationFormProperties>({
			cacheType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for read only disk cache associated with a cluster. */
	export interface KxCacheStorageConfiguration {

		/** Required */
		type: string;

		/** Required */
		size: number;
	}

	/** The configuration for read only disk cache associated with a cluster. */
	export interface KxCacheStorageConfigurationFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		size: FormControl<number | null | undefined>,
	}
	export function CreateKxCacheStorageConfigurationFormGroup() {
		return new FormGroup<KxCacheStorageConfigurationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration based on which FinSpace will scale in or scale out nodes in your cluster.  */
	export interface AutoScalingConfiguration {
		minNodeCount?: number | null;
		maxNodeCount?: number | null;
		autoScalingMetric?: AutoScalingMetric;
		metricTarget?: number | null;
		scaleInCooldownSeconds?: number | null;
		scaleOutCooldownSeconds?: number | null;
	}

	/** The configuration based on which FinSpace will scale in or scale out nodes in your cluster.  */
	export interface AutoScalingConfigurationFormProperties {
		minNodeCount: FormControl<number | null | undefined>,
		maxNodeCount: FormControl<number | null | undefined>,
		autoScalingMetric: FormControl<AutoScalingMetric | null | undefined>,
		metricTarget: FormControl<number | null | undefined>,
		scaleInCooldownSeconds: FormControl<number | null | undefined>,
		scaleOutCooldownSeconds: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingConfigurationFormGroup() {
		return new FormGroup<AutoScalingConfigurationFormProperties>({
			minNodeCount: new FormControl<number | null | undefined>(undefined),
			maxNodeCount: new FormControl<number | null | undefined>(undefined),
			autoScalingMetric: new FormControl<AutoScalingMetric | null | undefined>(undefined),
			metricTarget: new FormControl<number | null | undefined>(undefined),
			scaleInCooldownSeconds: new FormControl<number | null | undefined>(undefined),
			scaleOutCooldownSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AutoScalingMetric { CPU_UTILIZATION_PERCENTAGE = 'CPU_UTILIZATION_PERCENTAGE' }


	/** A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, number of instances, and the port used while establishing a connection. */
	export interface CapacityConfiguration {
		nodeType?: string;
		nodeCount?: number | null;
	}

	/** A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, number of instances, and the port used while establishing a connection. */
	export interface CapacityConfigurationFormProperties {
		nodeType: FormControl<string | null | undefined>,
		nodeCount: FormControl<number | null | undefined>,
	}
	export function CreateCapacityConfigurationFormGroup() {
		return new FormGroup<CapacityConfigurationFormProperties>({
			nodeType: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration details about the network where the Privatelink endpoint of the cluster resides. */
	export interface VpcConfiguration {
		vpcId?: string;
		securityGroupIds?: Array<string>;
		subnetIds?: Array<string>;
		ipAddressType?: IPAddressType;
	}

	/** Configuration details about the network where the Privatelink endpoint of the cluster resides. */
	export interface VpcConfigurationFormProperties {
		vpcId: FormControl<string | null | undefined>,
		ipAddressType: FormControl<IPAddressType | null | undefined>,
	}
	export function CreateVpcConfigurationFormGroup() {
		return new FormGroup<VpcConfigurationFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined),
			ipAddressType: new FormControl<IPAddressType | null | undefined>(undefined),
		});

	}

	export enum IPAddressType { IP_V4 = 'IP_V4' }


	/** Defines the key-value pairs to make them available inside the cluster. */
	export interface KxCommandLineArgument {
		key?: string;
		value?: string;
	}

	/** Defines the key-value pairs to make them available inside the cluster. */
	export interface KxCommandLineArgumentFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateKxCommandLineArgumentFormGroup() {
		return new FormGroup<KxCommandLineArgumentFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure of the customer code available within the running cluster. */
	export interface CodeConfiguration {
		s3Bucket?: string;
		s3Key?: string;
		s3ObjectVersion?: string;
	}

	/** The structure of the customer code available within the running cluster. */
	export interface CodeConfigurationFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3Key: FormControl<string | null | undefined>,
		s3ObjectVersion: FormControl<string | null | undefined>,
	}
	export function CreateCodeConfigurationFormGroup() {
		return new FormGroup<CodeConfigurationFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3Key: new FormControl<string | null | undefined>(undefined),
			s3ObjectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The size and type of temporary storage that is used to hold data during the savedown process. All the data written to this storage space is lost when the cluster node is restarted. */
	export interface KxSavedownStorageConfiguration {

		/** Required */
		type: KxSavedownStorageType;

		/** Required */
		size: number;
	}

	/** The size and type of temporary storage that is used to hold data during the savedown process. All the data written to this storage space is lost when the cluster node is restarted. */
	export interface KxSavedownStorageConfigurationFormProperties {

		/** Required */
		type: FormControl<KxSavedownStorageType | null | undefined>,

		/** Required */
		size: FormControl<number | null | undefined>,
	}
	export function CreateKxSavedownStorageConfigurationFormGroup() {
		return new FormGroup<KxSavedownStorageConfigurationFormProperties>({
			type: new FormControl<KxSavedownStorageType | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KxSavedownStorageType { SDS01 = 'SDS01' }

	export enum KxAzMode { SINGLE = 'SINGLE', MULTI = 'MULTI' }

	export interface CreateKxDatabaseResponse {
		databaseName?: string;
		databaseArn?: string;
		environmentId?: string;
		description?: string;
		createdTimestamp?: Date;
		lastModifiedTimestamp?: Date;
	}
	export interface CreateKxDatabaseResponseFormProperties {
		databaseName: FormControl<string | null | undefined>,
		databaseArn: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateKxDatabaseResponseFormGroup() {
		return new FormGroup<CreateKxDatabaseResponseFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined),
			databaseArn: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateKxEnvironmentResponse {
		name?: string;
		status?: EnvironmentStatus;
		environmentId?: string;
		description?: string;
		environmentArn?: string;
		kmsKeyId?: string;
		creationTimestamp?: Date;
	}
	export interface CreateKxEnvironmentResponseFormProperties {
		name: FormControl<string | null | undefined>,
		status: FormControl<EnvironmentStatus | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentArn: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateKxEnvironmentResponseFormGroup() {
		return new FormGroup<CreateKxEnvironmentResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EnvironmentStatus | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EnvironmentStatus { CREATE_REQUESTED = 'CREATE_REQUESTED', CREATING = 'CREATING', CREATED = 'CREATED', DELETE_REQUESTED = 'DELETE_REQUESTED', DELETING = 'DELETING', DELETED = 'DELETED', FAILED_CREATION = 'FAILED_CREATION', RETRY_DELETION = 'RETRY_DELETION', FAILED_DELETION = 'FAILED_DELETION', UPDATE_NETWORK_REQUESTED = 'UPDATE_NETWORK_REQUESTED', UPDATING_NETWORK = 'UPDATING_NETWORK', FAILED_UPDATING_NETWORK = 'FAILED_UPDATING_NETWORK', SUSPENDED = 'SUSPENDED' }

	export interface CreateKxUserResponse {
		userName?: string;
		userArn?: string;
		environmentId?: string;
		iamRole?: string;
	}
	export interface CreateKxUserResponseFormProperties {
		userName: FormControl<string | null | undefined>,
		userArn: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxUserResponseFormGroup() {
		return new FormGroup<CreateKxUserResponseFormProperties>({
			userName: new FormControl<string | null | undefined>(undefined),
			userArn: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteEnvironmentResponse {
	}
	export interface DeleteEnvironmentResponseFormProperties {
	}
	export function CreateDeleteEnvironmentResponseFormGroup() {
		return new FormGroup<DeleteEnvironmentResponseFormProperties>({
		});

	}

	export interface DeleteKxClusterResponse {
	}
	export interface DeleteKxClusterResponseFormProperties {
	}
	export function CreateDeleteKxClusterResponseFormGroup() {
		return new FormGroup<DeleteKxClusterResponseFormProperties>({
		});

	}

	export interface DeleteKxDatabaseResponse {
	}
	export interface DeleteKxDatabaseResponseFormProperties {
	}
	export function CreateDeleteKxDatabaseResponseFormGroup() {
		return new FormGroup<DeleteKxDatabaseResponseFormProperties>({
		});

	}

	export interface DeleteKxEnvironmentResponse {
	}
	export interface DeleteKxEnvironmentResponseFormProperties {
	}
	export function CreateDeleteKxEnvironmentResponseFormGroup() {
		return new FormGroup<DeleteKxEnvironmentResponseFormProperties>({
		});

	}

	export interface DeleteKxUserResponse {
	}
	export interface DeleteKxUserResponseFormProperties {
	}
	export function CreateDeleteKxUserResponseFormGroup() {
		return new FormGroup<DeleteKxUserResponseFormProperties>({
		});

	}

	export interface GetEnvironmentResponse {
		environment?: Environment;
	}
	export interface GetEnvironmentResponseFormProperties {
	}
	export function CreateGetEnvironmentResponseFormGroup() {
		return new FormGroup<GetEnvironmentResponseFormProperties>({
		});

	}


	/** Represents an FinSpace environment. */
	export interface Environment {
		name?: string;
		environmentId?: string;
		awsAccountId?: string;
		status?: EnvironmentStatus;
		environmentUrl?: string;
		description?: string;
		environmentArn?: string;
		sageMakerStudioDomainUrl?: string;
		kmsKeyId?: string;
		dedicatedServiceAccountId?: string;
		federationMode?: FederationMode;
		federationParameters?: FederationParameters;
	}

	/** Represents an FinSpace environment. */
	export interface EnvironmentFormProperties {
		name: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		status: FormControl<EnvironmentStatus | null | undefined>,
		environmentUrl: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentArn: FormControl<string | null | undefined>,
		sageMakerStudioDomainUrl: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		dedicatedServiceAccountId: FormControl<string | null | undefined>,
		federationMode: FormControl<FederationMode | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EnvironmentStatus | null | undefined>(undefined),
			environmentUrl: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentArn: new FormControl<string | null | undefined>(undefined),
			sageMakerStudioDomainUrl: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			dedicatedServiceAccountId: new FormControl<string | null | undefined>(undefined),
			federationMode: new FormControl<FederationMode | null | undefined>(undefined),
		});

	}

	export enum FederationMode { FEDERATED = 'FEDERATED', LOCAL = 'LOCAL' }


	/** Configuration information when authentication mode is FEDERATED. */
	export interface FederationParameters {
		samlMetadataDocument?: string;
		samlMetadataURL?: string;
		applicationCallBackURL?: string;
		federationURN?: string;
		federationProviderName?: string;
		attributeMap?: AttributeMap;
	}

	/** Configuration information when authentication mode is FEDERATED. */
	export interface FederationParametersFormProperties {
		samlMetadataDocument: FormControl<string | null | undefined>,
		samlMetadataURL: FormControl<string | null | undefined>,
		applicationCallBackURL: FormControl<string | null | undefined>,
		federationURN: FormControl<string | null | undefined>,
		federationProviderName: FormControl<string | null | undefined>,
	}
	export function CreateFederationParametersFormGroup() {
		return new FormGroup<FederationParametersFormProperties>({
			samlMetadataDocument: new FormControl<string | null | undefined>(undefined),
			samlMetadataURL: new FormControl<string | null | undefined>(undefined),
			applicationCallBackURL: new FormControl<string | null | undefined>(undefined),
			federationURN: new FormControl<string | null | undefined>(undefined),
			federationProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetKxChangesetResponse {
		changesetId?: string;
		databaseName?: string;
		environmentId?: string;
		changeRequests?: Array<ChangeRequest>;
		createdTimestamp?: Date;
		activeFromTimestamp?: Date;
		lastModifiedTimestamp?: Date;
		status?: ChangesetStatus;
		errorInfo?: ErrorInfo;
	}
	export interface GetKxChangesetResponseFormProperties {
		changesetId: FormControl<string | null | undefined>,
		databaseName: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
		activeFromTimestamp: FormControl<Date | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
		status: FormControl<ChangesetStatus | null | undefined>,
	}
	export function CreateGetKxChangesetResponseFormGroup() {
		return new FormGroup<GetKxChangesetResponseFormProperties>({
			changesetId: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			activeFromTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ChangesetStatus | null | undefined>(undefined),
		});

	}

	export interface GetKxClusterResponse {
		status?: KxClusterStatus;
		statusReason?: string;
		clusterName?: string;
		clusterType?: KxClusterType;
		databases?: Array<KxDatabaseConfiguration>;
		cacheStorageConfigurations?: Array<KxCacheStorageConfiguration>;
		autoScalingConfiguration?: AutoScalingConfiguration;
		clusterDescription?: string;
		capacityConfiguration?: CapacityConfiguration;
		releaseLabel?: string;
		vpcConfiguration?: VpcConfiguration;
		initializationScript?: string;
		commandLineArguments?: Array<KxCommandLineArgument>;
		code?: CodeConfiguration;
		executionRole?: string;
		lastModifiedTimestamp?: Date;
		savedownStorageConfiguration?: KxSavedownStorageConfiguration;
		azMode?: KxAzMode;
		availabilityZoneId?: string;
		createdTimestamp?: Date;
	}
	export interface GetKxClusterResponseFormProperties {
		status: FormControl<KxClusterStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		clusterName: FormControl<string | null | undefined>,
		clusterType: FormControl<KxClusterType | null | undefined>,
		clusterDescription: FormControl<string | null | undefined>,
		releaseLabel: FormControl<string | null | undefined>,
		initializationScript: FormControl<string | null | undefined>,
		executionRole: FormControl<string | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
		azMode: FormControl<KxAzMode | null | undefined>,
		availabilityZoneId: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetKxClusterResponseFormGroup() {
		return new FormGroup<GetKxClusterResponseFormProperties>({
			status: new FormControl<KxClusterStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			clusterType: new FormControl<KxClusterType | null | undefined>(undefined),
			clusterDescription: new FormControl<string | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined),
			initializationScript: new FormControl<string | null | undefined>(undefined),
			executionRole: new FormControl<string | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			azMode: new FormControl<KxAzMode | null | undefined>(undefined),
			availabilityZoneId: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetKxConnectionStringResponse {
		signedConnectionString?: string;
	}
	export interface GetKxConnectionStringResponseFormProperties {
		signedConnectionString: FormControl<string | null | undefined>,
	}
	export function CreateGetKxConnectionStringResponseFormGroup() {
		return new FormGroup<GetKxConnectionStringResponseFormProperties>({
			signedConnectionString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetKxDatabaseResponse {
		databaseName?: string;
		databaseArn?: string;
		environmentId?: string;
		description?: string;
		createdTimestamp?: Date;
		lastModifiedTimestamp?: Date;
		lastCompletedChangesetId?: string;
		numBytes?: number | null;
		numChangesets?: number | null;
		numFiles?: number | null;
	}
	export interface GetKxDatabaseResponseFormProperties {
		databaseName: FormControl<string | null | undefined>,
		databaseArn: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
		lastCompletedChangesetId: FormControl<string | null | undefined>,
		numBytes: FormControl<number | null | undefined>,
		numChangesets: FormControl<number | null | undefined>,
		numFiles: FormControl<number | null | undefined>,
	}
	export function CreateGetKxDatabaseResponseFormGroup() {
		return new FormGroup<GetKxDatabaseResponseFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined),
			databaseArn: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastCompletedChangesetId: new FormControl<string | null | undefined>(undefined),
			numBytes: new FormControl<number | null | undefined>(undefined),
			numChangesets: new FormControl<number | null | undefined>(undefined),
			numFiles: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetKxEnvironmentResponse {
		name?: string;
		environmentId?: string;
		awsAccountId?: string;
		status?: EnvironmentStatus;
		tgwStatus?: TgwStatus;
		dnsStatus?: TgwStatus;
		errorMessage?: string;
		description?: string;
		environmentArn?: string;
		kmsKeyId?: string;
		dedicatedServiceAccountId?: string;

		/** The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network. */
		transitGatewayConfiguration?: TransitGatewayConfiguration;
		customDNSConfiguration?: Array<CustomDNSServer>;
		creationTimestamp?: Date;
		updateTimestamp?: Date;
		availabilityZoneIds?: Array<string>;
		certificateAuthorityArn?: string;
	}
	export interface GetKxEnvironmentResponseFormProperties {
		name: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		status: FormControl<EnvironmentStatus | null | undefined>,
		tgwStatus: FormControl<TgwStatus | null | undefined>,
		dnsStatus: FormControl<TgwStatus | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentArn: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		dedicatedServiceAccountId: FormControl<string | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
		updateTimestamp: FormControl<Date | null | undefined>,
		certificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateGetKxEnvironmentResponseFormGroup() {
		return new FormGroup<GetKxEnvironmentResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EnvironmentStatus | null | undefined>(undefined),
			tgwStatus: new FormControl<TgwStatus | null | undefined>(undefined),
			dnsStatus: new FormControl<TgwStatus | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			dedicatedServiceAccountId: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
			updateTimestamp: new FormControl<Date | null | undefined>(undefined),
			certificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TgwStatus { NONE = 'NONE', UPDATE_REQUESTED = 'UPDATE_REQUESTED', UPDATING = 'UPDATING', FAILED_UPDATE = 'FAILED_UPDATE', SUCCESSFULLY_UPDATED = 'SUCCESSFULLY_UPDATED' }


	/** The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network. */
	export interface TransitGatewayConfiguration {

		/** Required */
		transitGatewayID: string;

		/** Required */
		routableCIDRSpace: string;
	}

	/** The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network. */
	export interface TransitGatewayConfigurationFormProperties {

		/** Required */
		transitGatewayID: FormControl<string | null | undefined>,

		/** Required */
		routableCIDRSpace: FormControl<string | null | undefined>,
	}
	export function CreateTransitGatewayConfigurationFormGroup() {
		return new FormGroup<TransitGatewayConfigurationFormProperties>({
			transitGatewayID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			routableCIDRSpace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers. */
	export interface CustomDNSServer {

		/** Required */
		customDNSServerName: string;

		/** Required */
		customDNSServerIP: string;
	}

	/** A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers. */
	export interface CustomDNSServerFormProperties {

		/** Required */
		customDNSServerName: FormControl<string | null | undefined>,

		/** Required */
		customDNSServerIP: FormControl<string | null | undefined>,
	}
	export function CreateCustomDNSServerFormGroup() {
		return new FormGroup<CustomDNSServerFormProperties>({
			customDNSServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customDNSServerIP: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetKxUserResponse {
		userName?: string;
		userArn?: string;
		environmentId?: string;
		iamRole?: string;
	}
	export interface GetKxUserResponseFormProperties {
		userName: FormControl<string | null | undefined>,
		userArn: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateGetKxUserResponseFormGroup() {
		return new FormGroup<GetKxUserResponseFormProperties>({
			userName: new FormControl<string | null | undefined>(undefined),
			userArn: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentsResponse {
		environments?: Array<Environment>;
		nextToken?: string;
	}
	export interface ListEnvironmentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsResponseFormGroup() {
		return new FormGroup<ListEnvironmentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListKxChangesetsResponse {
		kxChangesets?: Array<KxChangesetListEntry>;
		nextToken?: string;
	}
	export interface ListKxChangesetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKxChangesetsResponseFormGroup() {
		return new FormGroup<ListKxChangesetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of changeset. */
	export interface KxChangesetListEntry {
		changesetId?: string;
		createdTimestamp?: Date;
		activeFromTimestamp?: Date;
		lastModifiedTimestamp?: Date;
		status?: ChangesetStatus;
	}

	/** Details of changeset. */
	export interface KxChangesetListEntryFormProperties {
		changesetId: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
		activeFromTimestamp: FormControl<Date | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
		status: FormControl<ChangesetStatus | null | undefined>,
	}
	export function CreateKxChangesetListEntryFormGroup() {
		return new FormGroup<KxChangesetListEntryFormProperties>({
			changesetId: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			activeFromTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ChangesetStatus | null | undefined>(undefined),
		});

	}

	export interface ListKxClusterNodesResponse {
		nodes?: Array<KxNode>;
		nextToken?: string;
	}
	export interface ListKxClusterNodesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKxClusterNodesResponseFormGroup() {
		return new FormGroup<ListKxClusterNodesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that stores metadata for a kdb node. */
	export interface KxNode {
		nodeId?: string;
		availabilityZoneId?: string;
		launchTime?: Date;
	}

	/** A structure that stores metadata for a kdb node. */
	export interface KxNodeFormProperties {
		nodeId: FormControl<string | null | undefined>,
		availabilityZoneId: FormControl<string | null | undefined>,
		launchTime: FormControl<Date | null | undefined>,
	}
	export function CreateKxNodeFormGroup() {
		return new FormGroup<KxNodeFormProperties>({
			nodeId: new FormControl<string | null | undefined>(undefined),
			availabilityZoneId: new FormControl<string | null | undefined>(undefined),
			launchTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListKxClustersResponse {
		kxClusterSummaries?: Array<KxCluster>;
		nextToken?: string;
	}
	export interface ListKxClustersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKxClustersResponseFormGroup() {
		return new FormGroup<ListKxClustersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a kdb cluster. */
	export interface KxCluster {
		status?: KxClusterStatus;
		statusReason?: string;
		clusterName?: string;
		clusterType?: KxClusterType;
		clusterDescription?: string;
		releaseLabel?: string;
		initializationScript?: string;
		executionRole?: string;
		azMode?: KxAzMode;
		availabilityZoneId?: string;
		lastModifiedTimestamp?: Date;
		createdTimestamp?: Date;
	}

	/** The details of a kdb cluster. */
	export interface KxClusterFormProperties {
		status: FormControl<KxClusterStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		clusterName: FormControl<string | null | undefined>,
		clusterType: FormControl<KxClusterType | null | undefined>,
		clusterDescription: FormControl<string | null | undefined>,
		releaseLabel: FormControl<string | null | undefined>,
		initializationScript: FormControl<string | null | undefined>,
		executionRole: FormControl<string | null | undefined>,
		azMode: FormControl<KxAzMode | null | undefined>,
		availabilityZoneId: FormControl<string | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateKxClusterFormGroup() {
		return new FormGroup<KxClusterFormProperties>({
			status: new FormControl<KxClusterStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			clusterType: new FormControl<KxClusterType | null | undefined>(undefined),
			clusterDescription: new FormControl<string | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined),
			initializationScript: new FormControl<string | null | undefined>(undefined),
			executionRole: new FormControl<string | null | undefined>(undefined),
			azMode: new FormControl<KxAzMode | null | undefined>(undefined),
			availabilityZoneId: new FormControl<string | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListKxDatabasesResponse {
		kxDatabases?: Array<KxDatabaseListEntry>;
		nextToken?: string;
	}
	export interface ListKxDatabasesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKxDatabasesResponseFormGroup() {
		return new FormGroup<ListKxDatabasesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a FinSpace managed kdb database */
	export interface KxDatabaseListEntry {
		databaseName?: string;
		createdTimestamp?: Date;
		lastModifiedTimestamp?: Date;
	}

	/** Details about a FinSpace managed kdb database */
	export interface KxDatabaseListEntryFormProperties {
		databaseName: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateKxDatabaseListEntryFormGroup() {
		return new FormGroup<KxDatabaseListEntryFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListKxEnvironmentsResponse {
		environments?: Array<KxEnvironment>;
		nextToken?: string;
	}
	export interface ListKxEnvironmentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKxEnvironmentsResponseFormGroup() {
		return new FormGroup<ListKxEnvironmentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a kdb environment. */
	export interface KxEnvironment {
		name?: string;
		environmentId?: string;
		awsAccountId?: string;
		status?: EnvironmentStatus;
		tgwStatus?: TgwStatus;
		dnsStatus?: TgwStatus;
		errorMessage?: string;
		description?: string;
		environmentArn?: string;
		kmsKeyId?: string;
		dedicatedServiceAccountId?: string;
		transitGatewayConfiguration?: TransitGatewayConfiguration;
		customDNSConfiguration?: Array<CustomDNSServer>;
		creationTimestamp?: Date;
		updateTimestamp?: Date;
		availabilityZoneIds?: Array<string>;
		certificateAuthorityArn?: string;
	}

	/** The details of a kdb environment. */
	export interface KxEnvironmentFormProperties {
		name: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		status: FormControl<EnvironmentStatus | null | undefined>,
		tgwStatus: FormControl<TgwStatus | null | undefined>,
		dnsStatus: FormControl<TgwStatus | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentArn: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		dedicatedServiceAccountId: FormControl<string | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
		updateTimestamp: FormControl<Date | null | undefined>,
		certificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateKxEnvironmentFormGroup() {
		return new FormGroup<KxEnvironmentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EnvironmentStatus | null | undefined>(undefined),
			tgwStatus: new FormControl<TgwStatus | null | undefined>(undefined),
			dnsStatus: new FormControl<TgwStatus | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			dedicatedServiceAccountId: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
			updateTimestamp: new FormControl<Date | null | undefined>(undefined),
			certificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListKxUsersResponse {
		users?: Array<KxUser>;
		nextToken?: string;
	}
	export interface ListKxUsersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKxUsersResponseFormGroup() {
		return new FormGroup<ListKxUsersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that stores metadata for a kdb user. */
	export interface KxUser {
		userArn?: string;
		userName?: string;
		iamRole?: string;
		createTimestamp?: Date;
		updateTimestamp?: Date;
	}

	/** A structure that stores metadata for a kdb user. */
	export interface KxUserFormProperties {
		userArn: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
		iamRole: FormControl<string | null | undefined>,
		createTimestamp: FormControl<Date | null | undefined>,
		updateTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateKxUserFormGroup() {
		return new FormGroup<KxUserFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined),
			createTimestamp: new FormControl<Date | null | undefined>(undefined),
			updateTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
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

	export interface UpdateEnvironmentResponse {
		environment?: Environment;
	}
	export interface UpdateEnvironmentResponseFormProperties {
	}
	export function CreateUpdateEnvironmentResponseFormGroup() {
		return new FormGroup<UpdateEnvironmentResponseFormProperties>({
		});

	}

	export interface UpdateKxClusterDatabasesResponse {
	}
	export interface UpdateKxClusterDatabasesResponseFormProperties {
	}
	export function CreateUpdateKxClusterDatabasesResponseFormGroup() {
		return new FormGroup<UpdateKxClusterDatabasesResponseFormProperties>({
		});

	}

	export interface UpdateKxDatabaseResponse {
		databaseName?: string;
		environmentId?: string;
		description?: string;
		lastModifiedTimestamp?: Date;
	}
	export interface UpdateKxDatabaseResponseFormProperties {
		databaseName: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateKxDatabaseResponseFormGroup() {
		return new FormGroup<UpdateKxDatabaseResponseFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateKxEnvironmentResponse {
		name?: string;
		environmentId?: string;
		awsAccountId?: string;
		status?: EnvironmentStatus;
		tgwStatus?: TgwStatus;
		dnsStatus?: TgwStatus;
		errorMessage?: string;
		description?: string;
		environmentArn?: string;
		kmsKeyId?: string;
		dedicatedServiceAccountId?: string;

		/** The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network. */
		transitGatewayConfiguration?: TransitGatewayConfiguration;
		customDNSConfiguration?: Array<CustomDNSServer>;
		creationTimestamp?: Date;
		updateTimestamp?: Date;
		availabilityZoneIds?: Array<string>;
	}
	export interface UpdateKxEnvironmentResponseFormProperties {
		name: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		status: FormControl<EnvironmentStatus | null | undefined>,
		tgwStatus: FormControl<TgwStatus | null | undefined>,
		dnsStatus: FormControl<TgwStatus | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentArn: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		dedicatedServiceAccountId: FormControl<string | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
		updateTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateKxEnvironmentResponseFormGroup() {
		return new FormGroup<UpdateKxEnvironmentResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EnvironmentStatus | null | undefined>(undefined),
			tgwStatus: new FormControl<TgwStatus | null | undefined>(undefined),
			dnsStatus: new FormControl<TgwStatus | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			dedicatedServiceAccountId: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
			updateTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateKxEnvironmentNetworkResponse {
		name?: string;
		environmentId?: string;
		awsAccountId?: string;
		status?: EnvironmentStatus;
		tgwStatus?: TgwStatus;
		dnsStatus?: TgwStatus;
		errorMessage?: string;
		description?: string;
		environmentArn?: string;
		kmsKeyId?: string;
		dedicatedServiceAccountId?: string;

		/** The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network. */
		transitGatewayConfiguration?: TransitGatewayConfiguration;
		customDNSConfiguration?: Array<CustomDNSServer>;
		creationTimestamp?: Date;
		updateTimestamp?: Date;
		availabilityZoneIds?: Array<string>;
	}
	export interface UpdateKxEnvironmentNetworkResponseFormProperties {
		name: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		awsAccountId: FormControl<string | null | undefined>,
		status: FormControl<EnvironmentStatus | null | undefined>,
		tgwStatus: FormControl<TgwStatus | null | undefined>,
		dnsStatus: FormControl<TgwStatus | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentArn: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		dedicatedServiceAccountId: FormControl<string | null | undefined>,
		creationTimestamp: FormControl<Date | null | undefined>,
		updateTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateKxEnvironmentNetworkResponseFormGroup() {
		return new FormGroup<UpdateKxEnvironmentNetworkResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			awsAccountId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EnvironmentStatus | null | undefined>(undefined),
			tgwStatus: new FormControl<TgwStatus | null | undefined>(undefined),
			dnsStatus: new FormControl<TgwStatus | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			dedicatedServiceAccountId: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<Date | null | undefined>(undefined),
			updateTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateKxUserResponse {
		userName?: string;
		userArn?: string;
		environmentId?: string;
		iamRole?: string;
	}
	export interface UpdateKxUserResponseFormProperties {
		userName: FormControl<string | null | undefined>,
		userArn: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxUserResponseFormGroup() {
		return new FormGroup<UpdateKxUserResponseFormProperties>({
			userName: new FormControl<string | null | undefined>(undefined),
			userArn: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information for the superuser. */
	export interface SuperuserParameters {

		/** Required */
		emailAddress: string;

		/** Required */
		firstName: string;

		/** Required */
		lastName: string;
	}

	/** Configuration information for the superuser. */
	export interface SuperuserParametersFormProperties {

		/** Required */
		emailAddress: FormControl<string | null | undefined>,

		/** Required */
		firstName: FormControl<string | null | undefined>,

		/** Required */
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateSuperuserParametersFormGroup() {
		return new FormGroup<SuperuserParametersFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEnvironmentRequest {

		/** Required */
		name: string;
		description?: string;
		kmsKeyId?: string;
		tags?: TagMap;
		federationMode?: FederationMode;
		federationParameters?: FederationParameters;
		superuserParameters?: SuperuserParameters;
		dataBundles?: Array<string>;
	}
	export interface CreateEnvironmentRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		federationMode: FormControl<FederationMode | null | undefined>,
	}
	export function CreateCreateEnvironmentRequestFormGroup() {
		return new FormGroup<CreateEnvironmentRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			federationMode: new FormControl<FederationMode | null | undefined>(undefined),
		});

	}

	export interface CreateKxChangesetRequest {

		/** Required */
		changeRequests: Array<ChangeRequest>;

		/** Required */
		clientToken: string;
	}
	export interface CreateKxChangesetRequestFormProperties {

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxChangesetRequestFormGroup() {
		return new FormGroup<CreateKxChangesetRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateKxClusterRequest {
		clientToken?: string;

		/** Required */
		clusterName: string;

		/** Required */
		clusterType: KxClusterType;
		databases?: Array<KxDatabaseConfiguration>;
		cacheStorageConfigurations?: Array<KxCacheStorageConfiguration>;
		autoScalingConfiguration?: AutoScalingConfiguration;
		clusterDescription?: string;

		/** Required */
		capacityConfiguration: CapacityConfiguration;

		/** Required */
		releaseLabel: string;
		vpcConfiguration?: VpcConfiguration;
		initializationScript?: string;
		commandLineArguments?: Array<KxCommandLineArgument>;
		code?: CodeConfiguration;
		executionRole?: string;
		savedownStorageConfiguration?: KxSavedownStorageConfiguration;

		/** Required */
		azMode: KxAzMode;
		availabilityZoneId?: string;
		tags?: TagMap;
	}
	export interface CreateKxClusterRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		clusterName: FormControl<string | null | undefined>,

		/** Required */
		clusterType: FormControl<KxClusterType | null | undefined>,
		clusterDescription: FormControl<string | null | undefined>,

		/** Required */
		releaseLabel: FormControl<string | null | undefined>,
		initializationScript: FormControl<string | null | undefined>,
		executionRole: FormControl<string | null | undefined>,

		/** Required */
		azMode: FormControl<KxAzMode | null | undefined>,
		availabilityZoneId: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxClusterRequestFormGroup() {
		return new FormGroup<CreateKxClusterRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterType: new FormControl<KxClusterType | null | undefined>(undefined, [Validators.required]),
			clusterDescription: new FormControl<string | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			initializationScript: new FormControl<string | null | undefined>(undefined),
			executionRole: new FormControl<string | null | undefined>(undefined),
			azMode: new FormControl<KxAzMode | null | undefined>(undefined, [Validators.required]),
			availabilityZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateKxDatabaseRequest {

		/** Required */
		databaseName: string;
		description?: string;
		tags?: TagMap;

		/** Required */
		clientToken: string;
	}
	export interface CreateKxDatabaseRequestFormProperties {

		/** Required */
		databaseName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxDatabaseRequestFormGroup() {
		return new FormGroup<CreateKxDatabaseRequestFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateKxEnvironmentRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		kmsKeyId: string;
		tags?: TagMap;
		clientToken?: string;
	}
	export interface CreateKxEnvironmentRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		kmsKeyId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxEnvironmentRequestFormGroup() {
		return new FormGroup<CreateKxEnvironmentRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateKxUserRequest {

		/** Required */
		userName: string;

		/** Required */
		iamRole: string;
		tags?: TagMap;
		clientToken?: string;
	}
	export interface CreateKxUserRequestFormProperties {

		/** Required */
		userName: FormControl<string | null | undefined>,

		/** Required */
		iamRole: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxUserRequestFormGroup() {
		return new FormGroup<CreateKxUserRequestFormProperties>({
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteEnvironmentRequest {
	}
	export interface DeleteEnvironmentRequestFormProperties {
	}
	export function CreateDeleteEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteEnvironmentRequestFormProperties>({
		});

	}

	export interface DeleteKxClusterRequest {
	}
	export interface DeleteKxClusterRequestFormProperties {
	}
	export function CreateDeleteKxClusterRequestFormGroup() {
		return new FormGroup<DeleteKxClusterRequestFormProperties>({
		});

	}

	export interface DeleteKxDatabaseRequest {
	}
	export interface DeleteKxDatabaseRequestFormProperties {
	}
	export function CreateDeleteKxDatabaseRequestFormGroup() {
		return new FormGroup<DeleteKxDatabaseRequestFormProperties>({
		});

	}

	export interface DeleteKxEnvironmentRequest {
	}
	export interface DeleteKxEnvironmentRequestFormProperties {
	}
	export function CreateDeleteKxEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteKxEnvironmentRequestFormProperties>({
		});

	}

	export interface DeleteKxUserRequest {
	}
	export interface DeleteKxUserRequestFormProperties {
	}
	export function CreateDeleteKxUserRequestFormGroup() {
		return new FormGroup<DeleteKxUserRequestFormProperties>({
		});

	}

	export interface GetEnvironmentRequest {
	}
	export interface GetEnvironmentRequestFormProperties {
	}
	export function CreateGetEnvironmentRequestFormGroup() {
		return new FormGroup<GetEnvironmentRequestFormProperties>({
		});

	}

	export interface GetKxChangesetRequest {
	}
	export interface GetKxChangesetRequestFormProperties {
	}
	export function CreateGetKxChangesetRequestFormGroup() {
		return new FormGroup<GetKxChangesetRequestFormProperties>({
		});

	}

	export interface GetKxClusterRequest {
	}
	export interface GetKxClusterRequestFormProperties {
	}
	export function CreateGetKxClusterRequestFormGroup() {
		return new FormGroup<GetKxClusterRequestFormProperties>({
		});

	}

	export interface GetKxConnectionStringRequest {
	}
	export interface GetKxConnectionStringRequestFormProperties {
	}
	export function CreateGetKxConnectionStringRequestFormGroup() {
		return new FormGroup<GetKxConnectionStringRequestFormProperties>({
		});

	}

	export interface GetKxDatabaseRequest {
	}
	export interface GetKxDatabaseRequestFormProperties {
	}
	export function CreateGetKxDatabaseRequestFormGroup() {
		return new FormGroup<GetKxDatabaseRequestFormProperties>({
		});

	}

	export interface GetKxEnvironmentRequest {
	}
	export interface GetKxEnvironmentRequestFormProperties {
	}
	export function CreateGetKxEnvironmentRequestFormGroup() {
		return new FormGroup<GetKxEnvironmentRequestFormProperties>({
		});

	}

	export enum DnsStatus { NONE = 'NONE', UPDATE_REQUESTED = 'UPDATE_REQUESTED', UPDATING = 'UPDATING', FAILED_UPDATE = 'FAILED_UPDATE', SUCCESSFULLY_UPDATED = 'SUCCESSFULLY_UPDATED' }

	export interface GetKxUserRequest {
	}
	export interface GetKxUserRequestFormProperties {
	}
	export function CreateGetKxUserRequestFormGroup() {
		return new FormGroup<GetKxUserRequestFormProperties>({
		});

	}

	export interface ListEnvironmentsRequest {
	}
	export interface ListEnvironmentsRequestFormProperties {
	}
	export function CreateListEnvironmentsRequestFormGroup() {
		return new FormGroup<ListEnvironmentsRequestFormProperties>({
		});

	}

	export interface ListKxChangesetsRequest {
	}
	export interface ListKxChangesetsRequestFormProperties {
	}
	export function CreateListKxChangesetsRequestFormGroup() {
		return new FormGroup<ListKxChangesetsRequestFormProperties>({
		});

	}

	export interface ListKxClusterNodesRequest {
	}
	export interface ListKxClusterNodesRequestFormProperties {
	}
	export function CreateListKxClusterNodesRequestFormGroup() {
		return new FormGroup<ListKxClusterNodesRequestFormProperties>({
		});

	}

	export interface ListKxClustersRequest {
	}
	export interface ListKxClustersRequestFormProperties {
	}
	export function CreateListKxClustersRequestFormGroup() {
		return new FormGroup<ListKxClustersRequestFormProperties>({
		});

	}

	export interface ListKxDatabasesRequest {
	}
	export interface ListKxDatabasesRequestFormProperties {
	}
	export function CreateListKxDatabasesRequestFormGroup() {
		return new FormGroup<ListKxDatabasesRequestFormProperties>({
		});

	}

	export interface ListKxEnvironmentsRequest {
	}
	export interface ListKxEnvironmentsRequestFormProperties {
	}
	export function CreateListKxEnvironmentsRequestFormGroup() {
		return new FormGroup<ListKxEnvironmentsRequestFormProperties>({
		});

	}

	export interface ListKxUsersRequest {
	}
	export interface ListKxUsersRequestFormProperties {
	}
	export function CreateListKxUsersRequestFormGroup() {
		return new FormGroup<ListKxUsersRequestFormProperties>({
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

	export interface UpdateEnvironmentRequest {
		name?: string;
		description?: string;
		federationMode?: FederationMode;

		/** Configuration information when authentication mode is FEDERATED. */
		federationParameters?: FederationParameters;
	}
	export interface UpdateEnvironmentRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		federationMode: FormControl<FederationMode | null | undefined>,
	}
	export function CreateUpdateEnvironmentRequestFormGroup() {
		return new FormGroup<UpdateEnvironmentRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			federationMode: new FormControl<FederationMode | null | undefined>(undefined),
		});

	}

	export interface UpdateKxClusterDatabasesRequest {
		clientToken?: string;

		/** Required */
		databases: Array<KxDatabaseConfiguration>;
	}
	export interface UpdateKxClusterDatabasesRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxClusterDatabasesRequestFormGroup() {
		return new FormGroup<UpdateKxClusterDatabasesRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateKxDatabaseRequest {
		description?: string;

		/** Required */
		clientToken: string;
	}
	export interface UpdateKxDatabaseRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxDatabaseRequestFormGroup() {
		return new FormGroup<UpdateKxDatabaseRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateKxEnvironmentNetworkRequest {
		transitGatewayConfiguration?: TransitGatewayConfiguration;
		customDNSConfiguration?: Array<CustomDNSServer>;
		clientToken?: string;
	}
	export interface UpdateKxEnvironmentNetworkRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxEnvironmentNetworkRequestFormGroup() {
		return new FormGroup<UpdateKxEnvironmentNetworkRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateKxEnvironmentRequest {
		name?: string;
		description?: string;
		clientToken?: string;
	}
	export interface UpdateKxEnvironmentRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxEnvironmentRequestFormGroup() {
		return new FormGroup<UpdateKxEnvironmentRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateKxUserRequest {

		/** Required */
		iamRole: string;
		clientToken?: string;
	}
	export interface UpdateKxUserRequestFormProperties {

		/** Required */
		iamRole: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxUserRequestFormGroup() {
		return new FormGroup<UpdateKxUserRequestFormProperties>({
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a new FinSpace environment.
		 * Post environment
		 * @return {CreateEnvironmentResponse} Success
		 */
		CreateEnvironment(requestBody: CreateEnvironmentPostBody): Observable<CreateEnvironmentResponse> {
			return this.http.post<CreateEnvironmentResponse>(this.baseUri + 'environment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of all of your FinSpace environments.
		 * Get environment
		 * @param {string} nextToken A token generated by FinSpace that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the <code>nextToken</code>nextToken value from the response object of the previous page call.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @return {ListEnvironmentsResponse} Success
		 */
		ListEnvironments(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListEnvironmentsResponse> {
			return this.http.get<ListEnvironmentsResponse>(this.baseUri + 'environment?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a changeset for a kdb database. A changeset allows you to add and delete existing files by using an ordered list of change requests.
		 * Post kx/environments/{environmentId}/databases/{databaseName}/changesets
		 * @param {string} environmentId A unique identifier of the kdb environment.
		 * @param {string} databaseName The name of the kdb database.
		 * @return {CreateKxChangesetResponse} Success
		 */
		CreateKxChangeset(environmentId: string, databaseName: string, requestBody: CreateKxChangesetPostBody): Observable<CreateKxChangesetResponse> {
			return this.http.post<CreateKxChangesetResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/changesets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all the changesets for a database.
		 * Get kx/environments/{environmentId}/databases/{databaseName}/changesets
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} databaseName The name of the kdb database.
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @return {ListKxChangesetsResponse} Success
		 */
		ListKxChangesets(environmentId: string, databaseName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListKxChangesetsResponse> {
			return this.http.get<ListKxChangesetsResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/changesets&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new kdb cluster.
		 * Post kx/environments/{environmentId}/clusters
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @return {CreateKxClusterResponse} Success
		 */
		CreateKxCluster(environmentId: string, requestBody: CreateKxClusterPostBody): Observable<CreateKxClusterResponse> {
			return this.http.post<CreateKxClusterResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of clusters.
		 * Get kx/environments/{environmentId}/clusters
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {KxClusterType} clusterType <p>Specifies the type of KDB database that is being created. The following types are available: </p> <ul> <li> <p>HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.</p> </li> <li> <p>RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the <code>savedownStorageConfiguration</code> parameter.</p> </li> <li> <p>GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage.</p> </li> </ul>
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @return {ListKxClustersResponse} Success
		 */
		ListKxClusters(environmentId: string, clusterType: KxClusterType | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListKxClustersResponse> {
			return this.http.get<ListKxClustersResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/clusters&clusterType=' + clusterType + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a new kdb database in the environment.
		 * Post kx/environments/{environmentId}/databases
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @return {CreateKxDatabaseResponse} Success
		 */
		CreateKxDatabase(environmentId: string, requestBody: CreateKxDatabasePostBody): Observable<CreateKxDatabaseResponse> {
			return this.http.post<CreateKxDatabaseResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/databases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all the databases in the kdb environment.
		 * Get kx/environments/{environmentId}/databases
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @return {ListKxDatabasesResponse} Success
		 */
		ListKxDatabases(environmentId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListKxDatabasesResponse> {
			return this.http.get<ListKxDatabasesResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/databases&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a managed kdb environment for the account.
		 * Post kx/environments
		 * @return {CreateKxEnvironmentResponse} Success
		 */
		CreateKxEnvironment(requestBody: CreateKxEnvironmentPostBody): Observable<CreateKxEnvironmentResponse> {
			return this.http.post<CreateKxEnvironmentResponse>(this.baseUri + 'kx/environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of kdb environments created in an account.
		 * Get kx/environments
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @return {ListKxEnvironmentsResponse} Success
		 */
		ListKxEnvironments(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListKxEnvironmentsResponse> {
			return this.http.get<ListKxEnvironmentsResponse>(this.baseUri + 'kx/environments?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a user in FinSpace kdb environment with an associated IAM role.
		 * Post kx/environments/{environmentId}/users
		 * @param {string} environmentId A unique identifier for the kdb environment where you want to create a user.
		 * @return {CreateKxUserResponse} Success
		 */
		CreateKxUser(environmentId: string, requestBody: CreateKxUserPostBody): Observable<CreateKxUserResponse> {
			return this.http.post<CreateKxUserResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the users in a kdb environment.
		 * Get kx/environments/{environmentId}/users
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @return {ListKxUsersResponse} Success
		 */
		ListKxUsers(environmentId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListKxUsersResponse> {
			return this.http.get<ListKxUsersResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/users&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Delete an FinSpace environment.
		 * Delete environment/{environmentId}
		 * @param {string} environmentId The identifier for the FinSpace environment.
		 * @return {DeleteEnvironmentResponse} Success
		 */
		DeleteEnvironment(environmentId: string): Observable<DeleteEnvironmentResponse> {
			return this.http.delete<DeleteEnvironmentResponse>(this.baseUri + 'environment/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), {});
		}

		/**
		 * Returns the FinSpace environment object.
		 * Get environment/{environmentId}
		 * @param {string} environmentId The identifier of the FinSpace environment.
		 * @return {GetEnvironmentResponse} Success
		 */
		GetEnvironment(environmentId: string): Observable<GetEnvironmentResponse> {
			return this.http.get<GetEnvironmentResponse>(this.baseUri + 'environment/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), {});
		}

		/**
		 * Update your FinSpace environment.
		 * Put environment/{environmentId}
		 * @param {string} environmentId The identifier of the FinSpace environment.
		 * @return {UpdateEnvironmentResponse} Success
		 */
		UpdateEnvironment(environmentId: string, requestBody: UpdateEnvironmentPutBody): Observable<UpdateEnvironmentResponse> {
			return this.http.put<UpdateEnvironmentResponse>(this.baseUri + 'environment/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a kdb cluster.
		 * Delete kx/environments/{environmentId}/clusters/{clusterName}
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} clusterName The name of the cluster that you want to delete.
		 * @param {string} clientToken A token that ensures idempotency. This token expires in 10 minutes.
		 * @return {DeleteKxClusterResponse} Success
		 */
		DeleteKxCluster(environmentId: string, clusterName: string, clientToken: string | null | undefined): Observable<DeleteKxClusterResponse> {
			return this.http.delete<DeleteKxClusterResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * Retrieves information about a kdb cluster.
		 * Get kx/environments/{environmentId}/clusters/{clusterName}
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} clusterName The name of the cluster that you want to retrieve.
		 * @return {GetKxClusterResponse} Success
		 */
		GetKxCluster(environmentId: string, clusterName: string): Observable<GetKxClusterResponse> {
			return this.http.get<GetKxClusterResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)), {});
		}

		/**
		 * Deletes the specified database and all of its associated data. This action is irreversible. You must copy any data out of the database before deleting it if the data is to be retained.
		 * Delete kx/environments/{environmentId}/databases/{databaseName}#clientToken
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} databaseName The name of the kdb database that you want to delete.
		 * @param {string} clientToken A token that ensures idempotency. This token expires in 10 minutes.
		 * @return {DeleteKxDatabaseResponse} Success
		 */
		DeleteKxDatabase(environmentId: string, databaseName: string, clientToken: string): Observable<DeleteKxDatabaseResponse> {
			return this.http.delete<DeleteKxDatabaseResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '#clientToken&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * Deletes the kdb environment. This action is irreversible. Deleting a kdb environment will remove all the associated data and any services running in it.
		 * Delete kx/environments/{environmentId}
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @return {DeleteKxEnvironmentResponse} Success
		 */
		DeleteKxEnvironment(environmentId: string): Observable<DeleteKxEnvironmentResponse> {
			return this.http.delete<DeleteKxEnvironmentResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), {});
		}

		/**
		 * Retrieves all the information for the specified kdb environment.
		 * Get kx/environments/{environmentId}
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @return {GetKxEnvironmentResponse} Success
		 */
		GetKxEnvironment(environmentId: string): Observable<GetKxEnvironmentResponse> {
			return this.http.get<GetKxEnvironmentResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), {});
		}

		/**
		 * Updates information for the given kdb environment.
		 * Put kx/environments/{environmentId}
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @return {UpdateKxEnvironmentResponse} Success
		 */
		UpdateKxEnvironment(environmentId: string, requestBody: UpdateKxEnvironmentPutBody): Observable<UpdateKxEnvironmentResponse> {
			return this.http.put<UpdateKxEnvironmentResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user in the specified kdb environment.
		 * Delete kx/environments/{environmentId}/users/{userName}
		 * @param {string} userName A unique identifier for the user that you want to delete.
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @return {DeleteKxUserResponse} Success
		 */
		DeleteKxUser(userName: string, environmentId: string): Observable<DeleteKxUserResponse> {
			return this.http.delete<DeleteKxUserResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)), {});
		}

		/**
		 * Retrieves information about the specified kdb user.
		 * Get kx/environments/{environmentId}/users/{userName}
		 * @param {string} userName A unique identifier for the user.
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @return {GetKxUserResponse} Success
		 */
		GetKxUser(userName: string, environmentId: string): Observable<GetKxUserResponse> {
			return this.http.get<GetKxUserResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)), {});
		}

		/**
		 * Updates the user details. You can only update the IAM role associated with a user.
		 * Put kx/environments/{environmentId}/users/{userName}
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} userName A unique identifier for the user.
		 * @return {UpdateKxUserResponse} Success
		 */
		UpdateKxUser(environmentId: string, userName: string, requestBody: UpdateKxUserPutBody): Observable<UpdateKxUserResponse> {
			return this.http.put<UpdateKxUserResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a kdb changeset.
		 * Get kx/environments/{environmentId}/databases/{databaseName}/changesets/{changesetId}
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} databaseName The name of the kdb database.
		 * @param {string} changesetId A unique identifier of the changeset for which you want to retrieve data.
		 * @return {GetKxChangesetResponse} Success
		 */
		GetKxChangeset(environmentId: string, databaseName: string, changesetId: string): Observable<GetKxChangesetResponse> {
			return this.http.get<GetKxChangesetResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/changesets/' + (changesetId == null ? '' : encodeURIComponent(changesetId)), {});
		}

		/**
		 * Retrieves a connection string for a user to connect to a kdb cluster. You must call this API using the same role that you have defined while creating a user.
		 * Get kx/environments/{environmentId}/connectionString#userArn&clusterName
		 * @param {string} userArn  The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see <a href="IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>. 
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} clusterName A name of the kdb cluster.
		 * @return {GetKxConnectionStringResponse} Success
		 */
		GetKxConnectionString(userArn: string, environmentId: string, clusterName: string): Observable<GetKxConnectionStringResponse> {
			return this.http.get<GetKxConnectionStringResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/connectionString#userArn&clusterName?userArn=' + (userArn == null ? '' : encodeURIComponent(userArn)) + '&clusterName=' + (clusterName == null ? '' : encodeURIComponent(clusterName)), {});
		}

		/**
		 * Returns database information for the specified environment ID.
		 * Get kx/environments/{environmentId}/databases/{databaseName}
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} databaseName The name of the kdb database.
		 * @return {GetKxDatabaseResponse} Success
		 */
		GetKxDatabase(environmentId: string, databaseName: string): Observable<GetKxDatabaseResponse> {
			return this.http.get<GetKxDatabaseResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)), {});
		}

		/**
		 * Updates information for the given kdb database.
		 * Put kx/environments/{environmentId}/databases/{databaseName}
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} databaseName The name of the kdb database.
		 * @return {UpdateKxDatabaseResponse} Success
		 */
		UpdateKxDatabase(environmentId: string, databaseName: string, requestBody: UpdateKxDatabasePutBody): Observable<UpdateKxDatabaseResponse> {
			return this.http.put<UpdateKxDatabaseResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the nodes in a kdb cluster.
		 * Get kx/environments/{environmentId}/clusters/{clusterName}/nodes
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @param {string} clusterName A unique name for the cluster.
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @return {ListKxClusterNodesResponse} Success
		 */
		ListKxClusterNodes(environmentId: string, clusterName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListKxClusterNodesResponse> {
			return this.http.get<ListKxClusterNodesResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/nodes&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * A list of all tags for a resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds metadata tags to a FinSpace resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes metadata tags from a FinSpace resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn A FinSpace resource from which you want to remove a tag or tags. The value for this parameter is an Amazon Resource Name (ARN).
		 * @param {Array<string>} tagKeys The tag keys (names) of one or more tags to be removed.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Updates the databases mounted on a kdb cluster, which includes the <code>changesetId</code> and all the dbPaths to be cached. This API does not allow you to change a database name or add a database if you created a cluster without one. </p> <p>Using this API you can point a cluster to a different changeset and modify a list of partitions being cached.</p>
		 * Put kx/environments/{environmentId}/clusters/{clusterName}/configuration/databases
		 * @param {string} environmentId The unique identifier of a kdb environment.
		 * @param {string} clusterName A unique name for the cluster that you want to modify.
		 * @return {UpdateKxClusterDatabasesResponse} Success
		 */
		UpdateKxClusterDatabases(environmentId: string, clusterName: string, requestBody: UpdateKxClusterDatabasesPutBody): Observable<UpdateKxClusterDatabasesResponse> {
			return this.http.put<UpdateKxClusterDatabasesResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/configuration/databases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates environment network to connect to your internal network by using a transit gateway. This API supports request to create a transit gateway attachment from FinSpace VPC to your transit gateway ID and create a custom Route-53 outbound resolvers.</p> <p>Once you send a request to update a network, you cannot change it again. Network update might require termination of any clusters that are running in the existing network.</p>
		 * Put kx/environments/{environmentId}/network
		 * @param {string} environmentId A unique identifier for the kdb environment.
		 * @return {UpdateKxEnvironmentNetworkResponse} Success
		 */
		UpdateKxEnvironmentNetwork(environmentId: string, requestBody: UpdateKxEnvironmentNetworkPutBody): Observable<UpdateKxEnvironmentNetworkResponse> {
			return this.http.put<UpdateKxEnvironmentNetworkResponse>(this.baseUri + 'kx/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/network', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateEnvironmentPostBody {

		/**
		 * The name of the FinSpace environment to be created.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * The description of the FinSpace environment to be created.
		 * Max length: 1000
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The KMS key id to encrypt your data in the FinSpace environment.
		 * Max length: 1000
		 * Min length: 1
		 */
		kmsKeyId?: string | null;

		/** Add tags to your FinSpace environment. */
		tags?: {[id: string]: string };

		/** <p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul> */
		federationMode?: FederationMode | null;

		/** Configuration information when authentication mode is FEDERATED. */
		federationParameters?: CreateEnvironmentPostBodyFederationParameters;

		/** Configuration information for the superuser. */
		superuserParameters?: CreateEnvironmentPostBodySuperuserParameters;

		/** <p>The list of Amazon Resource Names (ARN) of the data bundles to install. Currently supported data bundle ARNs:</p> <ul> <li> <p> <code>arn:aws:finspace:${Region}::data-bundle/capital-markets-sample</code> - Contains sample Capital Markets datasets, categories and controlled vocabularies.</p> </li> <li> <p> <code>arn:aws:finspace:${Region}::data-bundle/taq</code> (default) - Contains trades and quotes data in addition to sample Capital Markets data.</p> </li> </ul> */
		dataBundles?: Array<string>;
	}
	export interface CreateEnvironmentPostBodyFormProperties {

		/**
		 * The name of the FinSpace environment to be created.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the FinSpace environment to be created.
		 * Max length: 1000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The KMS key id to encrypt your data in the FinSpace environment.
		 * Max length: 1000
		 * Min length: 1
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/** Add tags to your FinSpace environment. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** <p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul> */
		federationMode: FormControl<FederationMode | null | undefined>,
	}
	export function CreateCreateEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[a-zA-Z0-9. ]{1,1000}$')]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[a-zA-Z-0-9-:\/]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			federationMode: new FormControl<FederationMode | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentPostBodyFederationParameters {
		samlMetadataDocument?: string;
		samlMetadataURL?: string;
		applicationCallBackURL?: string;
		federationURN?: string;
		federationProviderName?: string;
		attributeMap?: AttributeMap;
	}
	export interface CreateEnvironmentPostBodyFederationParametersFormProperties {
		samlMetadataDocument: FormControl<string | null | undefined>,
		samlMetadataURL: FormControl<string | null | undefined>,
		applicationCallBackURL: FormControl<string | null | undefined>,
		federationURN: FormControl<string | null | undefined>,
		federationProviderName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentPostBodyFederationParametersFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodyFederationParametersFormProperties>({
			samlMetadataDocument: new FormControl<string | null | undefined>(undefined),
			samlMetadataURL: new FormControl<string | null | undefined>(undefined),
			applicationCallBackURL: new FormControl<string | null | undefined>(undefined),
			federationURN: new FormControl<string | null | undefined>(undefined),
			federationProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentPostBodySuperuserParameters {
		emailAddress?: string;
		firstName?: string;
		lastName?: string;
	}
	export interface CreateEnvironmentPostBodySuperuserParametersFormProperties {
		emailAddress: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentPostBodySuperuserParametersFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodySuperuserParametersFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateKxChangesetPostBody {

		/**
		 * <p>A list of change request objects that are run in order. A change request object consists of changeType , s3Path, and a dbPath. A changeType can has the following values: </p> <ul> <li> <p>PUT – Adds or updates files in a database.</p> </li> <li> <p>DELETE – Deletes files in a database.</p> </li> </ul> <p>All the change requests require a mandatory <i>dbPath</i> attribute that defines the path within the database directory. The <i>s3Path</i> attribute defines the s3 source file path and is required for a PUT change type.</p> <p>Here is an example of how you can use the change request object:</p> <p> <code>[ { "changeType": "PUT", "s3Path":"s3://bucket/db/2020.01.02/", "dbPath":"/2020.01.02/"}, { "changeType": "PUT", "s3Path":"s3://bucket/db/sym", "dbPath":"/"}, { "changeType": "DELETE", "dbPath": "/2020.01.01/"} ]</code> </p> <p>In this example, the first request with <i>PUT</i> change type allows you to add files in the given s3Path under the <i>2020.01.02</i> partition of the database. The second request with <i>PUT</i> change type allows you to add a single sym file at database root location. The last request with <i>DELETE</i> change type allows you to delete the files under the <i>2020.01.01</i> partition of the database. </p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 32
		 */
		changeRequests: Array<ChangeRequest>;

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateKxChangesetPostBodyFormProperties {

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxChangesetPostBodyFormGroup() {
		return new FormGroup<CreateKxChangesetPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-]+$')]),
		});

	}

	export interface CreateKxClusterPostBody {

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * A unique name for the cluster that you want to create.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		clusterName: string;

		/**
		 * <p>Specifies the type of KDB database that is being created. The following types are available: </p> <ul> <li> <p>HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.</p> </li> <li> <p>RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the <code>savedownStorageConfiguration</code> parameter.</p> </li> <li> <p>GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage.</p> </li> </ul>
		 * Required
		 */
		clusterType: KxClusterType;

		/** A list of databases that will be available for querying. */
		databases?: Array<KxDatabaseConfiguration>;

		/** The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. */
		cacheStorageConfigurations?: Array<KxCacheStorageConfiguration>;

		/** The configuration based on which FinSpace will scale in or scale out nodes in your cluster. */
		autoScalingConfiguration?: CreateKxClusterPostBodyAutoScalingConfiguration;

		/**
		 * A description of the cluster.
		 * Max length: 1000
		 * Min length: 1
		 */
		clusterDescription?: string | null;

		/**
		 * A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, number of instances, and the port used while establishing a connection.
		 * Required
		 */
		capacityConfiguration: CreateKxClusterPostBodyCapacityConfiguration;

		/**
		 * The version of FinSpace managed kdb to run.
		 * Required
		 * Max length: 16
		 * Min length: 1
		 */
		releaseLabel: string;

		/** Configuration details about the network where the Privatelink endpoint of the cluster resides. */
		vpcConfiguration?: CreateKxClusterPostBodyVpcConfiguration;

		/**
		 * Specifies a Q program that will be run at launch of a cluster. It is a relative path within <i>.zip</i> file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, <code>somedir/init.q</code>.
		 * Max length: 255
		 * Min length: 1
		 */
		initializationScript?: string | null;

		/** Defines the key-value pairs to make them available inside the cluster. */
		commandLineArguments?: Array<KxCommandLineArgument>;

		/** The structure of the customer code available within the running cluster. */
		code?: CreateKxClusterPostBodyCode;

		/**
		 * An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
		 * Max length: 1024
		 * Min length: 1
		 */
		executionRole?: string | null;

		/** The size and type of temporary storage that is used to hold data during the savedown process. All the data written to this storage space is lost when the cluster node is restarted. */
		savedownStorageConfiguration?: CreateKxClusterPostBodySavedownStorageConfiguration;

		/**
		 * <p>The number of availability zones you want to assign per cluster. This can be one of the following </p> <ul> <li> <p> <code>SINGLE</code> – Assigns one availability zone per cluster.</p> </li> <li> <p> <code>MULTI</code> – Assigns all the availability zones per cluster.</p> </li> </ul>
		 * Required
		 */
		azMode: KxAzMode;

		/** The availability zone identifiers for the requested regions. */
		availabilityZoneId?: string | null;

		/** A list of key-value pairs to label the cluster. You can add up to 50 tags to a cluster. */
		tags?: {[id: string]: string };
	}
	export interface CreateKxClusterPostBodyFormProperties {

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * A unique name for the cluster that you want to create.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		clusterName: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies the type of KDB database that is being created. The following types are available: </p> <ul> <li> <p>HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.</p> </li> <li> <p>RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the <code>savedownStorageConfiguration</code> parameter.</p> </li> <li> <p>GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a writable local storage.</p> </li> </ul>
		 * Required
		 */
		clusterType: FormControl<KxClusterType | null | undefined>,

		/**
		 * A description of the cluster.
		 * Max length: 1000
		 * Min length: 1
		 */
		clusterDescription: FormControl<string | null | undefined>,

		/**
		 * The version of FinSpace managed kdb to run.
		 * Required
		 * Max length: 16
		 * Min length: 1
		 */
		releaseLabel: FormControl<string | null | undefined>,

		/**
		 * Specifies a Q program that will be run at launch of a cluster. It is a relative path within <i>.zip</i> file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, <code>somedir/init.q</code>.
		 * Max length: 255
		 * Min length: 1
		 */
		initializationScript: FormControl<string | null | undefined>,

		/**
		 * An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
		 * Max length: 1024
		 * Min length: 1
		 */
		executionRole: FormControl<string | null | undefined>,

		/**
		 * <p>The number of availability zones you want to assign per cluster. This can be one of the following </p> <ul> <li> <p> <code>SINGLE</code> – Assigns one availability zone per cluster.</p> </li> <li> <p> <code>MULTI</code> – Assigns all the availability zones per cluster.</p> </li> </ul>
		 * Required
		 */
		azMode: FormControl<KxAzMode | null | undefined>,

		/** The availability zone identifiers for the requested regions. */
		availabilityZoneId: FormControl<string | null | undefined>,

		/** A list of key-value pairs to label the cluster. You can add up to 50 tags to a cluster. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateKxClusterPostBodyFormGroup() {
		return new FormGroup<CreateKxClusterPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('.*\S.*')]),
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]$')]),
			clusterType: new FormControl<KxClusterType | null | undefined>(undefined, [Validators.required]),
			clusterDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[a-zA-Z0-9\_\-\.\s]+$')]),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(16), Validators.pattern('^[a-zA-Z0-9._-]+')]),
			initializationScript: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\_\-\.\/\\]+$')]),
			executionRole: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn:aws[a-z0-9-]*:iam::\d{12}:role\/[\w-\/.@+=,]{1,1017}$')]),
			azMode: new FormControl<KxAzMode | null | undefined>(undefined, [Validators.required]),
			availabilityZoneId: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateKxClusterPostBodyAutoScalingConfiguration {
		minNodeCount?: number | null;
		maxNodeCount?: number | null;
		autoScalingMetric?: AutoScalingMetric;
		metricTarget?: number | null;
		scaleInCooldownSeconds?: number | null;
		scaleOutCooldownSeconds?: number | null;
	}
	export interface CreateKxClusterPostBodyAutoScalingConfigurationFormProperties {
		minNodeCount: FormControl<number | null | undefined>,
		maxNodeCount: FormControl<number | null | undefined>,
		autoScalingMetric: FormControl<AutoScalingMetric | null | undefined>,
		metricTarget: FormControl<number | null | undefined>,
		scaleInCooldownSeconds: FormControl<number | null | undefined>,
		scaleOutCooldownSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateKxClusterPostBodyAutoScalingConfigurationFormGroup() {
		return new FormGroup<CreateKxClusterPostBodyAutoScalingConfigurationFormProperties>({
			minNodeCount: new FormControl<number | null | undefined>(undefined),
			maxNodeCount: new FormControl<number | null | undefined>(undefined),
			autoScalingMetric: new FormControl<AutoScalingMetric | null | undefined>(undefined),
			metricTarget: new FormControl<number | null | undefined>(undefined),
			scaleInCooldownSeconds: new FormControl<number | null | undefined>(undefined),
			scaleOutCooldownSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateKxClusterPostBodyCapacityConfiguration {
		nodeType?: string;
		nodeCount?: number | null;
	}
	export interface CreateKxClusterPostBodyCapacityConfigurationFormProperties {
		nodeType: FormControl<string | null | undefined>,
		nodeCount: FormControl<number | null | undefined>,
	}
	export function CreateCreateKxClusterPostBodyCapacityConfigurationFormGroup() {
		return new FormGroup<CreateKxClusterPostBodyCapacityConfigurationFormProperties>({
			nodeType: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateKxClusterPostBodyVpcConfiguration {
		vpcId?: string;
		securityGroupIds?: Array<string>;
		subnetIds?: Array<string>;
		ipAddressType?: IPAddressType;
	}
	export interface CreateKxClusterPostBodyVpcConfigurationFormProperties {
		vpcId: FormControl<string | null | undefined>,
		ipAddressType: FormControl<IPAddressType | null | undefined>,
	}
	export function CreateCreateKxClusterPostBodyVpcConfigurationFormGroup() {
		return new FormGroup<CreateKxClusterPostBodyVpcConfigurationFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined),
			ipAddressType: new FormControl<IPAddressType | null | undefined>(undefined),
		});

	}

	export interface CreateKxClusterPostBodyCode {
		s3Bucket?: string;
		s3Key?: string;
		s3ObjectVersion?: string;
	}
	export interface CreateKxClusterPostBodyCodeFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3Key: FormControl<string | null | undefined>,
		s3ObjectVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxClusterPostBodyCodeFormGroup() {
		return new FormGroup<CreateKxClusterPostBodyCodeFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3Key: new FormControl<string | null | undefined>(undefined),
			s3ObjectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateKxClusterPostBodySavedownStorageConfiguration {
		type?: KxSavedownStorageType;
		size?: number | null;
	}
	export interface CreateKxClusterPostBodySavedownStorageConfigurationFormProperties {
		type: FormControl<KxSavedownStorageType | null | undefined>,
		size: FormControl<number | null | undefined>,
	}
	export function CreateCreateKxClusterPostBodySavedownStorageConfigurationFormGroup() {
		return new FormGroup<CreateKxClusterPostBodySavedownStorageConfigurationFormProperties>({
			type: new FormControl<KxSavedownStorageType | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateKxDatabasePostBody {

		/**
		 * The name of the kdb database.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		databaseName: string;

		/**
		 * A description of the database.
		 * Max length: 1000
		 * Min length: 1
		 */
		description?: string | null;

		/** A list of key-value pairs to label the kdb database. You can add up to 50 tags to your kdb database */
		tags?: {[id: string]: string };

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface CreateKxDatabasePostBodyFormProperties {

		/**
		 * The name of the kdb database.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		databaseName: FormControl<string | null | undefined>,

		/**
		 * A description of the database.
		 * Max length: 1000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** A list of key-value pairs to label the kdb database. You can add up to 50 tags to your kdb database */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxDatabasePostBodyFormGroup() {
		return new FormGroup<CreateKxDatabasePostBodyFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[a-zA-Z0-9. ]{1,1000}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-]+$')]),
		});

	}

	export interface CreateKxEnvironmentPostBody {

		/**
		 * The name of the kdb environment that you want to create.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		name: string;

		/**
		 * A description for the kdb environment.
		 * Max length: 1000
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The KMS key ID to encrypt your data in the FinSpace environment.
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		kmsKeyId: string;

		/** A list of key-value pairs to label the kdb environment. You can add up to 50 tags to your kdb environment. */
		tags?: {[id: string]: string };

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface CreateKxEnvironmentPostBodyFormProperties {

		/**
		 * The name of the kdb environment that you want to create.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A description for the kdb environment.
		 * Max length: 1000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The KMS key ID to encrypt your data in the FinSpace environment.
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		kmsKeyId: FormControl<string | null | undefined>,

		/** A list of key-value pairs to label the kdb environment. You can add up to 50 tags to your kdb environment. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateKxEnvironmentPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[a-zA-Z0-9. ]{1,1000}$')]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^arn:aws:kms:.*:\d+:.*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateKxUserPostBody {

		/**
		 * A unique identifier for the user.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		userName: string;

		/**
		 * The IAM role ARN that will be associated with the user.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		iamRole: string;

		/** A list of key-value pairs to label the user. You can add up to 50 tags to a user. */
		tags?: {[id: string]: string };

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface CreateKxUserPostBodyFormProperties {

		/**
		 * A unique identifier for the user.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		userName: FormControl<string | null | undefined>,

		/**
		 * The IAM role ARN that will be associated with the user.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		iamRole: FormControl<string | null | undefined>,

		/** A list of key-value pairs to label the user. You can add up to 50 tags to a user. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateKxUserPostBodyFormGroup() {
		return new FormGroup<CreateKxUserPostBodyFormProperties>({
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[0-9A-Za-z_-]{1,50}$')]),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateEnvironmentPutBody {

		/**
		 * The name of the environment.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The description of the environment.
		 * Max length: 1000
		 * Min length: 1
		 */
		description?: string | null;

		/** <p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul> */
		federationMode?: FederationMode | null;

		/** Configuration information when authentication mode is FEDERATED. */
		federationParameters?: UpdateEnvironmentPutBodyFederationParameters;
	}
	export interface UpdateEnvironmentPutBodyFormProperties {

		/**
		 * The name of the environment.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the environment.
		 * Max length: 1000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** <p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul> */
		federationMode: FormControl<FederationMode | null | undefined>,
	}
	export function CreateUpdateEnvironmentPutBodyFormGroup() {
		return new FormGroup<UpdateEnvironmentPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[a-zA-Z0-9. ]{1,1000}$')]),
			federationMode: new FormControl<FederationMode | null | undefined>(undefined),
		});

	}

	export interface UpdateEnvironmentPutBodyFederationParameters {
		samlMetadataDocument?: string;
		samlMetadataURL?: string;
		applicationCallBackURL?: string;
		federationURN?: string;
		federationProviderName?: string;
		attributeMap?: AttributeMap;
	}
	export interface UpdateEnvironmentPutBodyFederationParametersFormProperties {
		samlMetadataDocument: FormControl<string | null | undefined>,
		samlMetadataURL: FormControl<string | null | undefined>,
		applicationCallBackURL: FormControl<string | null | undefined>,
		federationURN: FormControl<string | null | undefined>,
		federationProviderName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentPutBodyFederationParametersFormGroup() {
		return new FormGroup<UpdateEnvironmentPutBodyFederationParametersFormProperties>({
			samlMetadataDocument: new FormControl<string | null | undefined>(undefined),
			samlMetadataURL: new FormControl<string | null | undefined>(undefined),
			applicationCallBackURL: new FormControl<string | null | undefined>(undefined),
			federationURN: new FormControl<string | null | undefined>(undefined),
			federationProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateKxEnvironmentPutBody {

		/**
		 * The name of the kdb environment.
		 * Max length: 63
		 * Min length: 3
		 */
		name?: string | null;

		/**
		 * A description of the kdb environment.
		 * Max length: 1000
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateKxEnvironmentPutBodyFormProperties {

		/**
		 * The name of the kdb environment.
		 * Max length: 63
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A description of the kdb environment.
		 * Max length: 1000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxEnvironmentPutBodyFormGroup() {
		return new FormGroup<UpdateKxEnvironmentPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[a-zA-Z0-9. ]{1,1000}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateKxUserPutBody {

		/**
		 * The IAM role ARN that is associated with the user.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		iamRole: string;

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateKxUserPutBodyFormProperties {

		/**
		 * The IAM role ARN that is associated with the user.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		iamRole: FormControl<string | null | undefined>,

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxUserPutBodyFormGroup() {
		return new FormGroup<UpdateKxUserPutBodyFormProperties>({
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateKxDatabasePutBody {

		/**
		 * A description of the database.
		 * Max length: 1000
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;
	}
	export interface UpdateKxDatabasePutBodyFormProperties {

		/**
		 * A description of the database.
		 * Max length: 1000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxDatabasePutBodyFormGroup() {
		return new FormGroup<UpdateKxDatabasePutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[a-zA-Z0-9. ]{1,1000}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-]+$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * One or more tags to be assigned to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * One or more tags to be assigned to the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateKxClusterDatabasesPutBody {

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The structure of databases mounted on the cluster.
		 * Required
		 */
		databases: Array<KxDatabaseConfiguration>;
	}
	export interface UpdateKxClusterDatabasesPutBodyFormProperties {

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxClusterDatabasesPutBodyFormGroup() {
		return new FormGroup<UpdateKxClusterDatabasesPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-]+$')]),
		});

	}

	export interface UpdateKxEnvironmentNetworkPutBody {

		/** The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network. */
		transitGatewayConfiguration?: UpdateKxEnvironmentNetworkPutBodyTransitGatewayConfiguration;

		/** A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers. */
		customDNSConfiguration?: Array<CustomDNSServer>;

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateKxEnvironmentNetworkPutBodyFormProperties {

		/**
		 * A token that ensures idempotency. This token expires in 10 minutes.
		 * Max length: 36
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxEnvironmentNetworkPutBodyFormGroup() {
		return new FormGroup<UpdateKxEnvironmentNetworkPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateKxEnvironmentNetworkPutBodyTransitGatewayConfiguration {
		transitGatewayID?: string;
		routableCIDRSpace?: string;
	}
	export interface UpdateKxEnvironmentNetworkPutBodyTransitGatewayConfigurationFormProperties {
		transitGatewayID: FormControl<string | null | undefined>,
		routableCIDRSpace: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKxEnvironmentNetworkPutBodyTransitGatewayConfigurationFormGroup() {
		return new FormGroup<UpdateKxEnvironmentNetworkPutBodyTransitGatewayConfigurationFormProperties>({
			transitGatewayID: new FormControl<string | null | undefined>(undefined),
			routableCIDRSpace: new FormControl<string | null | undefined>(undefined),
		});

	}

}

