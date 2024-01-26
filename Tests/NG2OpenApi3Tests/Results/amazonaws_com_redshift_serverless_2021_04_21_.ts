import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ConvertRecoveryPointToSnapshotResponse {
		snapshot?: Snapshot;
	}
	export interface ConvertRecoveryPointToSnapshotResponseFormProperties {
	}
	export function CreateConvertRecoveryPointToSnapshotResponseFormGroup() {
		return new FormGroup<ConvertRecoveryPointToSnapshotResponseFormProperties>({
		});

	}


	/** A snapshot object that contains databases. */
	export interface Snapshot {
		accountsWithProvisionedRestoreAccess?: Array<string>;
		accountsWithRestoreAccess?: Array<string>;
		actualIncrementalBackupSizeInMegaBytes?: number | null;
		adminUsername?: string;
		backupProgressInMegaBytes?: number | null;
		currentBackupRateInMegaBytesPerSecond?: number | null;
		elapsedTimeInSeconds?: number | null;
		estimatedSecondsToCompletion?: number | null;
		kmsKeyId?: string;
		namespaceArn?: string;
		namespaceName?: string;
		ownerAccount?: string;
		snapshotArn?: string;
		snapshotCreateTime?: Date;
		snapshotName?: string;
		snapshotRemainingDays?: number | null;
		snapshotRetentionPeriod?: number | null;
		snapshotRetentionStartTime?: Date;
		status?: SnapshotStatus;
		totalBackupSizeInMegaBytes?: number | null;
	}

	/** A snapshot object that contains databases. */
	export interface SnapshotFormProperties {
		actualIncrementalBackupSizeInMegaBytes: FormControl<number | null | undefined>,
		adminUsername: FormControl<string | null | undefined>,
		backupProgressInMegaBytes: FormControl<number | null | undefined>,
		currentBackupRateInMegaBytesPerSecond: FormControl<number | null | undefined>,
		elapsedTimeInSeconds: FormControl<number | null | undefined>,
		estimatedSecondsToCompletion: FormControl<number | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		namespaceArn: FormControl<string | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		ownerAccount: FormControl<string | null | undefined>,
		snapshotArn: FormControl<string | null | undefined>,
		snapshotCreateTime: FormControl<Date | null | undefined>,
		snapshotName: FormControl<string | null | undefined>,
		snapshotRemainingDays: FormControl<number | null | undefined>,
		snapshotRetentionPeriod: FormControl<number | null | undefined>,
		snapshotRetentionStartTime: FormControl<Date | null | undefined>,
		status: FormControl<SnapshotStatus | null | undefined>,
		totalBackupSizeInMegaBytes: FormControl<number | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			actualIncrementalBackupSizeInMegaBytes: new FormControl<number | null | undefined>(undefined),
			adminUsername: new FormControl<string | null | undefined>(undefined),
			backupProgressInMegaBytes: new FormControl<number | null | undefined>(undefined),
			currentBackupRateInMegaBytesPerSecond: new FormControl<number | null | undefined>(undefined),
			elapsedTimeInSeconds: new FormControl<number | null | undefined>(undefined),
			estimatedSecondsToCompletion: new FormControl<number | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			namespaceArn: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			snapshotArn: new FormControl<string | null | undefined>(undefined),
			snapshotCreateTime: new FormControl<Date | null | undefined>(undefined),
			snapshotName: new FormControl<string | null | undefined>(undefined),
			snapshotRemainingDays: new FormControl<number | null | undefined>(undefined),
			snapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			snapshotRetentionStartTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<SnapshotStatus | null | undefined>(undefined),
			totalBackupSizeInMegaBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SnapshotStatus { AVAILABLE = 0, CREATING = 1, DELETED = 2, CANCELLED = 3, FAILED = 4, COPYING = 5 }

	export interface ConvertRecoveryPointToSnapshotRequest {

		/** Required */
		recoveryPointId: string;
		retentionPeriod?: number | null;

		/** Required */
		snapshotName: string;
		tags?: Array<Tag>;
	}
	export interface ConvertRecoveryPointToSnapshotRequestFormProperties {

		/** Required */
		recoveryPointId: FormControl<string | null | undefined>,
		retentionPeriod: FormControl<number | null | undefined>,

		/** Required */
		snapshotName: FormControl<string | null | undefined>,
	}
	export function CreateConvertRecoveryPointToSnapshotRequestFormGroup() {
		return new FormGroup<ConvertRecoveryPointToSnapshotRequestFormProperties>({
			recoveryPointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			retentionPeriod: new FormControl<number | null | undefined>(undefined),
			snapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A map of key-value pairs. */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** A map of key-value pairs. */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
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

	export interface CreateEndpointAccessResponse {
		endpoint?: EndpointAccess;
	}
	export interface CreateEndpointAccessResponseFormProperties {
	}
	export function CreateCreateEndpointAccessResponseFormGroup() {
		return new FormGroup<CreateEndpointAccessResponseFormProperties>({
		});

	}


	/** Information about an Amazon Redshift Serverless VPC endpoint. */
	export interface EndpointAccess {
		address?: string;
		endpointArn?: string;
		endpointCreateTime?: Date;
		endpointName?: string;
		endpointStatus?: string;
		port?: number | null;
		subnetIds?: Array<string>;
		vpcEndpoint?: VpcEndpoint;
		vpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
		workgroupName?: string;
	}

	/** Information about an Amazon Redshift Serverless VPC endpoint. */
	export interface EndpointAccessFormProperties {
		address: FormControl<string | null | undefined>,
		endpointArn: FormControl<string | null | undefined>,
		endpointCreateTime: FormControl<Date | null | undefined>,
		endpointName: FormControl<string | null | undefined>,
		endpointStatus: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateEndpointAccessFormGroup() {
		return new FormGroup<EndpointAccessFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			endpointArn: new FormControl<string | null | undefined>(undefined),
			endpointCreateTime: new FormControl<Date | null | undefined>(undefined),
			endpointName: new FormControl<string | null | undefined>(undefined),
			endpointStatus: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The connection endpoint for connecting to Amazon Redshift Serverless through the proxy. */
	export interface VpcEndpoint {
		networkInterfaces?: Array<NetworkInterface>;
		vpcEndpointId?: string;
		vpcId?: string;
	}

	/** The connection endpoint for connecting to Amazon Redshift Serverless through the proxy. */
	export interface VpcEndpointFormProperties {
		vpcEndpointId: FormControl<string | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcEndpointFormGroup() {
		return new FormGroup<VpcEndpointFormProperties>({
			vpcEndpointId: new FormControl<string | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a network interface in an Amazon Redshift Serverless managed VPC endpoint.  */
	export interface NetworkInterface {
		availabilityZone?: string;
		networkInterfaceId?: string;
		privateIpAddress?: string;
		subnetId?: string;
	}

	/** Contains information about a network interface in an Amazon Redshift Serverless managed VPC endpoint.  */
	export interface NetworkInterfaceFormProperties {
		availabilityZone: FormControl<string | null | undefined>,
		networkInterfaceId: FormControl<string | null | undefined>,
		privateIpAddress: FormControl<string | null | undefined>,
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			networkInterfaceId: new FormControl<string | null | undefined>(undefined),
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
			subnetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the members of a VPC security group. */
	export interface VpcSecurityGroupMembership {
		status?: string;
		vpcSecurityGroupId?: string;
	}

	/** Describes the members of a VPC security group. */
	export interface VpcSecurityGroupMembershipFormProperties {
		status: FormControl<string | null | undefined>,
		vpcSecurityGroupId: FormControl<string | null | undefined>,
	}
	export function CreateVpcSecurityGroupMembershipFormGroup() {
		return new FormGroup<VpcSecurityGroupMembershipFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			vpcSecurityGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEndpointAccessRequest {

		/** Required */
		endpointName: string;

		/** Required */
		subnetIds: Array<string>;
		vpcSecurityGroupIds?: Array<string>;

		/** Required */
		workgroupName: string;
	}
	export interface CreateEndpointAccessRequestFormProperties {

		/** Required */
		endpointName: FormControl<string | null | undefined>,

		/** Required */
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointAccessRequestFormGroup() {
		return new FormGroup<CreateEndpointAccessRequestFormProperties>({
			endpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workgroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateNamespaceResponse {
		namespace?: Namespace;
	}
	export interface CreateNamespaceResponseFormProperties {
	}
	export function CreateCreateNamespaceResponseFormGroup() {
		return new FormGroup<CreateNamespaceResponseFormProperties>({
		});

	}


	/** A collection of database objects and users. */
	export interface Namespace {
		adminUsername?: string;
		creationDate?: Date;
		dbName?: string;
		defaultIamRoleArn?: string;
		iamRoles?: Array<string>;
		kmsKeyId?: string;
		logExports?: Array<LogExport>;
		namespaceArn?: string;
		namespaceId?: string;
		namespaceName?: string;
		status?: NamespaceStatus;
	}

	/** A collection of database objects and users. */
	export interface NamespaceFormProperties {
		adminUsername: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		dbName: FormControl<string | null | undefined>,
		defaultIamRoleArn: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		namespaceArn: FormControl<string | null | undefined>,
		namespaceId: FormControl<string | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		status: FormControl<NamespaceStatus | null | undefined>,
	}
	export function CreateNamespaceFormGroup() {
		return new FormGroup<NamespaceFormProperties>({
			adminUsername: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			dbName: new FormControl<string | null | undefined>(undefined),
			defaultIamRoleArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			namespaceArn: new FormControl<string | null | undefined>(undefined),
			namespaceId: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<NamespaceStatus | null | undefined>(undefined),
		});

	}

	export enum LogExport { useractivitylog = 0, userlog = 1, connectionlog = 2 }

	export enum NamespaceStatus { AVAILABLE = 0, MODIFYING = 1, DELETING = 2 }

	export interface CreateNamespaceRequest {
		adminUserPassword?: string;
		adminUsername?: string;
		dbName?: string;
		defaultIamRoleArn?: string;
		iamRoles?: Array<string>;
		kmsKeyId?: string;
		logExports?: Array<LogExport>;

		/** Required */
		namespaceName: string;
		tags?: Array<Tag>;
	}
	export interface CreateNamespaceRequestFormProperties {
		adminUserPassword: FormControl<string | null | undefined>,
		adminUsername: FormControl<string | null | undefined>,
		dbName: FormControl<string | null | undefined>,
		defaultIamRoleArn: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		namespaceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateNamespaceRequestFormGroup() {
		return new FormGroup<CreateNamespaceRequestFormProperties>({
			adminUserPassword: new FormControl<string | null | undefined>(undefined),
			adminUsername: new FormControl<string | null | undefined>(undefined),
			dbName: new FormControl<string | null | undefined>(undefined),
			defaultIamRoleArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSnapshotResponse {
		snapshot?: Snapshot;
	}
	export interface CreateSnapshotResponseFormProperties {
	}
	export function CreateCreateSnapshotResponseFormGroup() {
		return new FormGroup<CreateSnapshotResponseFormProperties>({
		});

	}

	export interface CreateSnapshotRequest {

		/** Required */
		namespaceName: string;
		retentionPeriod?: number | null;

		/** Required */
		snapshotName: string;
		tags?: Array<Tag>;
	}
	export interface CreateSnapshotRequestFormProperties {

		/** Required */
		namespaceName: FormControl<string | null | undefined>,
		retentionPeriod: FormControl<number | null | undefined>,

		/** Required */
		snapshotName: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotRequestFormGroup() {
		return new FormGroup<CreateSnapshotRequestFormProperties>({
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			retentionPeriod: new FormControl<number | null | undefined>(undefined),
			snapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUsageLimitResponse {
		usageLimit?: UsageLimit;
	}
	export interface CreateUsageLimitResponseFormProperties {
	}
	export function CreateCreateUsageLimitResponseFormGroup() {
		return new FormGroup<CreateUsageLimitResponseFormProperties>({
		});

	}


	/** The usage limit object. */
	export interface UsageLimit {
		amount?: number | null;
		breachAction?: UsageLimitBreachAction;
		period?: UsageLimitPeriod;
		resourceArn?: string;
		usageLimitArn?: string;
		usageLimitId?: string;
		usageType?: UsageLimitUsageType;
	}

	/** The usage limit object. */
	export interface UsageLimitFormProperties {
		amount: FormControl<number | null | undefined>,
		breachAction: FormControl<UsageLimitBreachAction | null | undefined>,
		period: FormControl<UsageLimitPeriod | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
		usageLimitArn: FormControl<string | null | undefined>,
		usageLimitId: FormControl<string | null | undefined>,
		usageType: FormControl<UsageLimitUsageType | null | undefined>,
	}
	export function CreateUsageLimitFormGroup() {
		return new FormGroup<UsageLimitFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			breachAction: new FormControl<UsageLimitBreachAction | null | undefined>(undefined),
			period: new FormControl<UsageLimitPeriod | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			usageLimitArn: new FormControl<string | null | undefined>(undefined),
			usageLimitId: new FormControl<string | null | undefined>(undefined),
			usageType: new FormControl<UsageLimitUsageType | null | undefined>(undefined),
		});

	}

	export enum UsageLimitBreachAction { log = 0, 'emit-metric' = 1, deactivate = 2 }

	export enum UsageLimitPeriod { daily = 0, weekly = 1, monthly = 2 }

	export enum UsageLimitUsageType { 'serverless-compute' = 0, 'cross-region-datasharing' = 1 }

	export interface CreateUsageLimitRequest {

		/** Required */
		amount: number;
		breachAction?: UsageLimitBreachAction;
		period?: UsageLimitPeriod;

		/** Required */
		resourceArn: string;

		/** Required */
		usageType: UsageLimitUsageType;
	}
	export interface CreateUsageLimitRequestFormProperties {

		/** Required */
		amount: FormControl<number | null | undefined>,
		breachAction: FormControl<UsageLimitBreachAction | null | undefined>,
		period: FormControl<UsageLimitPeriod | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		usageType: FormControl<UsageLimitUsageType | null | undefined>,
	}
	export function CreateCreateUsageLimitRequestFormGroup() {
		return new FormGroup<CreateUsageLimitRequestFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			breachAction: new FormControl<UsageLimitBreachAction | null | undefined>(undefined),
			period: new FormControl<UsageLimitPeriod | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			usageType: new FormControl<UsageLimitUsageType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkgroupResponse {
		workgroup?: Workgroup;
	}
	export interface CreateWorkgroupResponseFormProperties {
	}
	export function CreateCreateWorkgroupResponseFormGroup() {
		return new FormGroup<CreateWorkgroupResponseFormProperties>({
		});

	}


	/** The collection of computing resources from which an endpoint is created. */
	export interface Workgroup {
		baseCapacity?: number | null;
		configParameters?: Array<ConfigParameter>;
		creationDate?: Date;
		endpoint?: Endpoint;
		enhancedVpcRouting?: boolean | null;
		namespaceName?: string;
		port?: number | null;
		publiclyAccessible?: boolean | null;
		securityGroupIds?: Array<string>;
		status?: WorkgroupStatus;
		subnetIds?: Array<string>;
		workgroupArn?: string;
		workgroupId?: string;
		workgroupName?: string;
	}

	/** The collection of computing resources from which an endpoint is created. */
	export interface WorkgroupFormProperties {
		baseCapacity: FormControl<number | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		enhancedVpcRouting: FormControl<boolean | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		publiclyAccessible: FormControl<boolean | null | undefined>,
		status: FormControl<WorkgroupStatus | null | undefined>,
		workgroupArn: FormControl<string | null | undefined>,
		workgroupId: FormControl<string | null | undefined>,
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateWorkgroupFormGroup() {
		return new FormGroup<WorkgroupFormProperties>({
			baseCapacity: new FormControl<number | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			enhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<WorkgroupStatus | null | undefined>(undefined),
			workgroupArn: new FormControl<string | null | undefined>(undefined),
			workgroupId: new FormControl<string | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of key-value pairs to set for advanced control over Amazon Redshift Serverless. */
	export interface ConfigParameter {
		parameterKey?: string;
		parameterValue?: string;
	}

	/** An array of key-value pairs to set for advanced control over Amazon Redshift Serverless. */
	export interface ConfigParameterFormProperties {
		parameterKey: FormControl<string | null | undefined>,
		parameterValue: FormControl<string | null | undefined>,
	}
	export function CreateConfigParameterFormGroup() {
		return new FormGroup<ConfigParameterFormProperties>({
			parameterKey: new FormControl<string | null | undefined>(undefined),
			parameterValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The VPC endpoint object. */
	export interface Endpoint {
		address?: string;
		port?: number | null;
		vpcEndpoints?: Array<VpcEndpoint>;
	}

	/** The VPC endpoint object. */
	export interface EndpointFormProperties {
		address: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum WorkgroupStatus { CREATING = 0, AVAILABLE = 1, MODIFYING = 2, DELETING = 3 }

	export interface CreateWorkgroupRequest {
		baseCapacity?: number | null;
		configParameters?: Array<ConfigParameter>;
		enhancedVpcRouting?: boolean | null;

		/** Required */
		namespaceName: string;
		port?: number | null;
		publiclyAccessible?: boolean | null;
		securityGroupIds?: Array<string>;
		subnetIds?: Array<string>;
		tags?: Array<Tag>;

		/** Required */
		workgroupName: string;
	}
	export interface CreateWorkgroupRequestFormProperties {
		baseCapacity: FormControl<number | null | undefined>,
		enhancedVpcRouting: FormControl<boolean | null | undefined>,

		/** Required */
		namespaceName: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		publiclyAccessible: FormControl<boolean | null | undefined>,

		/** Required */
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkgroupRequestFormGroup() {
		return new FormGroup<CreateWorkgroupRequestFormProperties>({
			baseCapacity: new FormControl<number | null | undefined>(undefined),
			enhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InsufficientCapacityException {
	}
	export interface InsufficientCapacityExceptionFormProperties {
	}
	export function CreateInsufficientCapacityExceptionFormGroup() {
		return new FormGroup<InsufficientCapacityExceptionFormProperties>({
		});

	}

	export interface DeleteEndpointAccessResponse {
		endpoint?: EndpointAccess;
	}
	export interface DeleteEndpointAccessResponseFormProperties {
	}
	export function CreateDeleteEndpointAccessResponseFormGroup() {
		return new FormGroup<DeleteEndpointAccessResponseFormProperties>({
		});

	}

	export interface DeleteEndpointAccessRequest {

		/** Required */
		endpointName: string;
	}
	export interface DeleteEndpointAccessRequestFormProperties {

		/** Required */
		endpointName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEndpointAccessRequestFormGroup() {
		return new FormGroup<DeleteEndpointAccessRequestFormProperties>({
			endpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteNamespaceResponse {

		/** Required */
		namespace: Namespace;
	}
	export interface DeleteNamespaceResponseFormProperties {
	}
	export function CreateDeleteNamespaceResponseFormGroup() {
		return new FormGroup<DeleteNamespaceResponseFormProperties>({
		});

	}

	export interface DeleteNamespaceRequest {
		finalSnapshotName?: string;
		finalSnapshotRetentionPeriod?: number | null;

		/** Required */
		namespaceName: string;
	}
	export interface DeleteNamespaceRequestFormProperties {
		finalSnapshotName: FormControl<string | null | undefined>,
		finalSnapshotRetentionPeriod: FormControl<number | null | undefined>,

		/** Required */
		namespaceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNamespaceRequestFormGroup() {
		return new FormGroup<DeleteNamespaceRequestFormProperties>({
			finalSnapshotName: new FormControl<string | null | undefined>(undefined),
			finalSnapshotRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResourcePolicyResponse {
	}
	export interface DeleteResourcePolicyResponseFormProperties {
	}
	export function CreateDeleteResourcePolicyResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyResponseFormProperties>({
		});

	}

	export interface DeleteResourcePolicyRequest {

		/** Required */
		resourceArn: string;
	}
	export interface DeleteResourcePolicyRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSnapshotResponse {
		snapshot?: Snapshot;
	}
	export interface DeleteSnapshotResponseFormProperties {
	}
	export function CreateDeleteSnapshotResponseFormGroup() {
		return new FormGroup<DeleteSnapshotResponseFormProperties>({
		});

	}

	export interface DeleteSnapshotRequest {

		/** Required */
		snapshotName: string;
	}
	export interface DeleteSnapshotRequestFormProperties {

		/** Required */
		snapshotName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSnapshotRequestFormGroup() {
		return new FormGroup<DeleteSnapshotRequestFormProperties>({
			snapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteUsageLimitResponse {
		usageLimit?: UsageLimit;
	}
	export interface DeleteUsageLimitResponseFormProperties {
	}
	export function CreateDeleteUsageLimitResponseFormGroup() {
		return new FormGroup<DeleteUsageLimitResponseFormProperties>({
		});

	}

	export interface DeleteUsageLimitRequest {

		/** Required */
		usageLimitId: string;
	}
	export interface DeleteUsageLimitRequestFormProperties {

		/** Required */
		usageLimitId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUsageLimitRequestFormGroup() {
		return new FormGroup<DeleteUsageLimitRequestFormProperties>({
			usageLimitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWorkgroupResponse {

		/** Required */
		workgroup: Workgroup;
	}
	export interface DeleteWorkgroupResponseFormProperties {
	}
	export function CreateDeleteWorkgroupResponseFormGroup() {
		return new FormGroup<DeleteWorkgroupResponseFormProperties>({
		});

	}

	export interface DeleteWorkgroupRequest {

		/** Required */
		workgroupName: string;
	}
	export interface DeleteWorkgroupRequestFormProperties {

		/** Required */
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkgroupRequestFormGroup() {
		return new FormGroup<DeleteWorkgroupRequestFormProperties>({
			workgroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCredentialsResponse {
		dbPassword?: string;
		dbUser?: string;
		expiration?: Date;
		nextRefreshTime?: Date;
	}
	export interface GetCredentialsResponseFormProperties {
		dbPassword: FormControl<string | null | undefined>,
		dbUser: FormControl<string | null | undefined>,
		expiration: FormControl<Date | null | undefined>,
		nextRefreshTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetCredentialsResponseFormGroup() {
		return new FormGroup<GetCredentialsResponseFormProperties>({
			dbPassword: new FormControl<string | null | undefined>(undefined),
			dbUser: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<Date | null | undefined>(undefined),
			nextRefreshTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetCredentialsRequest {
		dbName?: string;
		durationSeconds?: number | null;

		/** Required */
		workgroupName: string;
	}
	export interface GetCredentialsRequestFormProperties {
		dbName: FormControl<string | null | undefined>,
		durationSeconds: FormControl<number | null | undefined>,

		/** Required */
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateGetCredentialsRequestFormGroup() {
		return new FormGroup<GetCredentialsRequestFormProperties>({
			dbName: new FormControl<string | null | undefined>(undefined),
			durationSeconds: new FormControl<number | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEndpointAccessResponse {
		endpoint?: EndpointAccess;
	}
	export interface GetEndpointAccessResponseFormProperties {
	}
	export function CreateGetEndpointAccessResponseFormGroup() {
		return new FormGroup<GetEndpointAccessResponseFormProperties>({
		});

	}

	export interface GetEndpointAccessRequest {

		/** Required */
		endpointName: string;
	}
	export interface GetEndpointAccessRequestFormProperties {

		/** Required */
		endpointName: FormControl<string | null | undefined>,
	}
	export function CreateGetEndpointAccessRequestFormGroup() {
		return new FormGroup<GetEndpointAccessRequestFormProperties>({
			endpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetNamespaceResponse {

		/** Required */
		namespace: Namespace;
	}
	export interface GetNamespaceResponseFormProperties {
	}
	export function CreateGetNamespaceResponseFormGroup() {
		return new FormGroup<GetNamespaceResponseFormProperties>({
		});

	}

	export interface GetNamespaceRequest {

		/** Required */
		namespaceName: string;
	}
	export interface GetNamespaceRequestFormProperties {

		/** Required */
		namespaceName: FormControl<string | null | undefined>,
	}
	export function CreateGetNamespaceRequestFormGroup() {
		return new FormGroup<GetNamespaceRequestFormProperties>({
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRecoveryPointResponse {
		recoveryPoint?: RecoveryPoint;
	}
	export interface GetRecoveryPointResponseFormProperties {
	}
	export function CreateGetRecoveryPointResponseFormGroup() {
		return new FormGroup<GetRecoveryPointResponseFormProperties>({
		});

	}


	/** The automatically created recovery point of a namespace. Recovery points are created every 30 minutes and kept for 24 hours. */
	export interface RecoveryPoint {
		namespaceArn?: string;
		namespaceName?: string;
		recoveryPointCreateTime?: Date;
		recoveryPointId?: string;
		totalSizeInMegaBytes?: number | null;
		workgroupName?: string;
	}

	/** The automatically created recovery point of a namespace. Recovery points are created every 30 minutes and kept for 24 hours. */
	export interface RecoveryPointFormProperties {
		namespaceArn: FormControl<string | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		recoveryPointCreateTime: FormControl<Date | null | undefined>,
		recoveryPointId: FormControl<string | null | undefined>,
		totalSizeInMegaBytes: FormControl<number | null | undefined>,
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryPointFormGroup() {
		return new FormGroup<RecoveryPointFormProperties>({
			namespaceArn: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			recoveryPointCreateTime: new FormControl<Date | null | undefined>(undefined),
			recoveryPointId: new FormControl<string | null | undefined>(undefined),
			totalSizeInMegaBytes: new FormControl<number | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRecoveryPointRequest {

		/** Required */
		recoveryPointId: string;
	}
	export interface GetRecoveryPointRequestFormProperties {

		/** Required */
		recoveryPointId: FormControl<string | null | undefined>,
	}
	export function CreateGetRecoveryPointRequestFormGroup() {
		return new FormGroup<GetRecoveryPointRequestFormProperties>({
			recoveryPointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResourcePolicyResponse {
		resourcePolicy?: ResourcePolicy;
	}
	export interface GetResourcePolicyResponseFormProperties {
	}
	export function CreateGetResourcePolicyResponseFormGroup() {
		return new FormGroup<GetResourcePolicyResponseFormProperties>({
		});

	}


	/** The resource policy object. Currently, you can use policies to share snapshots across Amazon Web Services accounts. */
	export interface ResourcePolicy {
		policy?: string;
		resourceArn?: string;
	}

	/** The resource policy object. Currently, you can use policies to share snapshots across Amazon Web Services accounts. */
	export interface ResourcePolicyFormProperties {
		policy: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateResourcePolicyFormGroup() {
		return new FormGroup<ResourcePolicyFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyRequest {

		/** Required */
		resourceArn: string;
	}
	export interface GetResourcePolicyRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyRequestFormGroup() {
		return new FormGroup<GetResourcePolicyRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSnapshotResponse {
		snapshot?: Snapshot;
	}
	export interface GetSnapshotResponseFormProperties {
	}
	export function CreateGetSnapshotResponseFormGroup() {
		return new FormGroup<GetSnapshotResponseFormProperties>({
		});

	}

	export interface GetSnapshotRequest {
		ownerAccount?: string;
		snapshotArn?: string;
		snapshotName?: string;
	}
	export interface GetSnapshotRequestFormProperties {
		ownerAccount: FormControl<string | null | undefined>,
		snapshotArn: FormControl<string | null | undefined>,
		snapshotName: FormControl<string | null | undefined>,
	}
	export function CreateGetSnapshotRequestFormGroup() {
		return new FormGroup<GetSnapshotRequestFormProperties>({
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			snapshotArn: new FormControl<string | null | undefined>(undefined),
			snapshotName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTableRestoreStatusResponse {
		tableRestoreStatus?: TableRestoreStatus;
	}
	export interface GetTableRestoreStatusResponseFormProperties {
	}
	export function CreateGetTableRestoreStatusResponseFormGroup() {
		return new FormGroup<GetTableRestoreStatusResponseFormProperties>({
		});

	}


	/** Contains information about a table restore request. */
	export interface TableRestoreStatus {
		message?: string;
		namespaceName?: string;
		newTableName?: string;
		progressInMegaBytes?: number | null;
		requestTime?: Date;
		snapshotName?: string;
		sourceDatabaseName?: string;
		sourceSchemaName?: string;
		sourceTableName?: string;
		status?: string;
		tableRestoreRequestId?: string;
		targetDatabaseName?: string;
		targetSchemaName?: string;
		totalDataInMegaBytes?: number | null;
		workgroupName?: string;
	}

	/** Contains information about a table restore request. */
	export interface TableRestoreStatusFormProperties {
		message: FormControl<string | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		newTableName: FormControl<string | null | undefined>,
		progressInMegaBytes: FormControl<number | null | undefined>,
		requestTime: FormControl<Date | null | undefined>,
		snapshotName: FormControl<string | null | undefined>,
		sourceDatabaseName: FormControl<string | null | undefined>,
		sourceSchemaName: FormControl<string | null | undefined>,
		sourceTableName: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		tableRestoreRequestId: FormControl<string | null | undefined>,
		targetDatabaseName: FormControl<string | null | undefined>,
		targetSchemaName: FormControl<string | null | undefined>,
		totalDataInMegaBytes: FormControl<number | null | undefined>,
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateTableRestoreStatusFormGroup() {
		return new FormGroup<TableRestoreStatusFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			newTableName: new FormControl<string | null | undefined>(undefined),
			progressInMegaBytes: new FormControl<number | null | undefined>(undefined),
			requestTime: new FormControl<Date | null | undefined>(undefined),
			snapshotName: new FormControl<string | null | undefined>(undefined),
			sourceDatabaseName: new FormControl<string | null | undefined>(undefined),
			sourceSchemaName: new FormControl<string | null | undefined>(undefined),
			sourceTableName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			tableRestoreRequestId: new FormControl<string | null | undefined>(undefined),
			targetDatabaseName: new FormControl<string | null | undefined>(undefined),
			targetSchemaName: new FormControl<string | null | undefined>(undefined),
			totalDataInMegaBytes: new FormControl<number | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTableRestoreStatusRequest {

		/** Required */
		tableRestoreRequestId: string;
	}
	export interface GetTableRestoreStatusRequestFormProperties {

		/** Required */
		tableRestoreRequestId: FormControl<string | null | undefined>,
	}
	export function CreateGetTableRestoreStatusRequestFormGroup() {
		return new FormGroup<GetTableRestoreStatusRequestFormProperties>({
			tableRestoreRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUsageLimitResponse {
		usageLimit?: UsageLimit;
	}
	export interface GetUsageLimitResponseFormProperties {
	}
	export function CreateGetUsageLimitResponseFormGroup() {
		return new FormGroup<GetUsageLimitResponseFormProperties>({
		});

	}

	export interface GetUsageLimitRequest {

		/** Required */
		usageLimitId: string;
	}
	export interface GetUsageLimitRequestFormProperties {

		/** Required */
		usageLimitId: FormControl<string | null | undefined>,
	}
	export function CreateGetUsageLimitRequestFormGroup() {
		return new FormGroup<GetUsageLimitRequestFormProperties>({
			usageLimitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWorkgroupResponse {

		/** Required */
		workgroup: Workgroup;
	}
	export interface GetWorkgroupResponseFormProperties {
	}
	export function CreateGetWorkgroupResponseFormGroup() {
		return new FormGroup<GetWorkgroupResponseFormProperties>({
		});

	}

	export interface GetWorkgroupRequest {

		/** Required */
		workgroupName: string;
	}
	export interface GetWorkgroupRequestFormProperties {

		/** Required */
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkgroupRequestFormGroup() {
		return new FormGroup<GetWorkgroupRequestFormProperties>({
			workgroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEndpointAccessResponse {

		/** Required */
		endpoints: Array<EndpointAccess>;
		nextToken?: string;
	}
	export interface ListEndpointAccessResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointAccessResponseFormGroup() {
		return new FormGroup<ListEndpointAccessResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEndpointAccessRequest {
		maxResults?: number | null;
		nextToken?: string;
		vpcId?: string;
		workgroupName?: string;
	}
	export interface ListEndpointAccessRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointAccessRequestFormGroup() {
		return new FormGroup<ListEndpointAccessRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNamespacesResponse {

		/** Required */
		namespaces: Array<Namespace>;
		nextToken?: string;
	}
	export interface ListNamespacesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNamespacesResponseFormGroup() {
		return new FormGroup<ListNamespacesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNamespacesRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListNamespacesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNamespacesRequestFormGroup() {
		return new FormGroup<ListNamespacesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecoveryPointsResponse {
		nextToken?: string;
		recoveryPoints?: Array<RecoveryPoint>;
	}
	export interface ListRecoveryPointsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecoveryPointsResponseFormGroup() {
		return new FormGroup<ListRecoveryPointsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecoveryPointsRequest {
		endTime?: Date;
		maxResults?: number | null;
		namespaceArn?: string;
		namespaceName?: string;
		nextToken?: string;
		startTime?: Date;
	}
	export interface ListRecoveryPointsRequestFormProperties {
		endTime: FormControl<Date | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		namespaceArn: FormControl<string | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateListRecoveryPointsRequestFormGroup() {
		return new FormGroup<ListRecoveryPointsRequestFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			namespaceArn: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSnapshotsResponse {
		nextToken?: string;
		snapshots?: Array<Snapshot>;
	}
	export interface ListSnapshotsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSnapshotsResponseFormGroup() {
		return new FormGroup<ListSnapshotsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSnapshotsRequest {
		endTime?: Date;
		maxResults?: number | null;
		namespaceArn?: string;
		namespaceName?: string;
		nextToken?: string;
		ownerAccount?: string;
		startTime?: Date;
	}
	export interface ListSnapshotsRequestFormProperties {
		endTime: FormControl<Date | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		namespaceArn: FormControl<string | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		ownerAccount: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateListSnapshotsRequestFormGroup() {
		return new FormGroup<ListSnapshotsRequestFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			namespaceArn: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTableRestoreStatusResponse {
		nextToken?: string;
		tableRestoreStatuses?: Array<TableRestoreStatus>;
	}
	export interface ListTableRestoreStatusResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTableRestoreStatusResponseFormGroup() {
		return new FormGroup<ListTableRestoreStatusResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTableRestoreStatusRequest {
		maxResults?: number | null;
		namespaceName?: string;
		nextToken?: string;
		workgroupName?: string;
	}
	export interface ListTableRestoreStatusRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		namespaceName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateListTableRestoreStatusRequestFormGroup() {
		return new FormGroup<ListTableRestoreStatusRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidPaginationException {
	}
	export interface InvalidPaginationExceptionFormProperties {
	}
	export function CreateInvalidPaginationExceptionFormGroup() {
		return new FormGroup<InvalidPaginationExceptionFormProperties>({
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ListUsageLimitsResponse {
		nextToken?: string;
		usageLimits?: Array<UsageLimit>;
	}
	export interface ListUsageLimitsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsageLimitsResponseFormGroup() {
		return new FormGroup<ListUsageLimitsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUsageLimitsRequest {
		maxResults?: number | null;
		nextToken?: string;
		resourceArn?: string;
		usageType?: UsageLimitUsageType;
	}
	export interface ListUsageLimitsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
		usageType: FormControl<UsageLimitUsageType | null | undefined>,
	}
	export function CreateListUsageLimitsRequestFormGroup() {
		return new FormGroup<ListUsageLimitsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			usageType: new FormControl<UsageLimitUsageType | null | undefined>(undefined),
		});

	}

	export interface ListWorkgroupsResponse {
		nextToken?: string;

		/** Required */
		workgroups: Array<Workgroup>;
	}
	export interface ListWorkgroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkgroupsResponseFormGroup() {
		return new FormGroup<ListWorkgroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkgroupsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListWorkgroupsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkgroupsRequestFormGroup() {
		return new FormGroup<ListWorkgroupsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyResponse {
		resourcePolicy?: ResourcePolicy;
	}
	export interface PutResourcePolicyResponseFormProperties {
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		policy: string;

		/** Required */
		resourceArn: string;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestoreFromRecoveryPointResponse {
		namespace?: Namespace;
		recoveryPointId?: string;
	}
	export interface RestoreFromRecoveryPointResponseFormProperties {
		recoveryPointId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreFromRecoveryPointResponseFormGroup() {
		return new FormGroup<RestoreFromRecoveryPointResponseFormProperties>({
			recoveryPointId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestoreFromRecoveryPointRequest {

		/** Required */
		namespaceName: string;

		/** Required */
		recoveryPointId: string;

		/** Required */
		workgroupName: string;
	}
	export interface RestoreFromRecoveryPointRequestFormProperties {

		/** Required */
		namespaceName: FormControl<string | null | undefined>,

		/** Required */
		recoveryPointId: FormControl<string | null | undefined>,

		/** Required */
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreFromRecoveryPointRequestFormGroup() {
		return new FormGroup<RestoreFromRecoveryPointRequestFormProperties>({
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recoveryPointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workgroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestoreFromSnapshotResponse {

		/** A collection of database objects and users. */
		namespace?: Namespace;
		ownerAccount?: string;
		snapshotName?: string;
	}
	export interface RestoreFromSnapshotResponseFormProperties {
		ownerAccount: FormControl<string | null | undefined>,
		snapshotName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreFromSnapshotResponseFormGroup() {
		return new FormGroup<RestoreFromSnapshotResponseFormProperties>({
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			snapshotName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestoreFromSnapshotRequest {

		/** Required */
		namespaceName: string;
		ownerAccount?: string;
		snapshotArn?: string;
		snapshotName?: string;

		/** Required */
		workgroupName: string;
	}
	export interface RestoreFromSnapshotRequestFormProperties {

		/** Required */
		namespaceName: FormControl<string | null | undefined>,
		ownerAccount: FormControl<string | null | undefined>,
		snapshotArn: FormControl<string | null | undefined>,
		snapshotName: FormControl<string | null | undefined>,

		/** Required */
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreFromSnapshotRequestFormGroup() {
		return new FormGroup<RestoreFromSnapshotRequestFormProperties>({
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			snapshotArn: new FormControl<string | null | undefined>(undefined),
			snapshotName: new FormControl<string | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestoreTableFromSnapshotResponse {
		tableRestoreStatus?: TableRestoreStatus;
	}
	export interface RestoreTableFromSnapshotResponseFormProperties {
	}
	export function CreateRestoreTableFromSnapshotResponseFormGroup() {
		return new FormGroup<RestoreTableFromSnapshotResponseFormProperties>({
		});

	}

	export interface RestoreTableFromSnapshotRequest {
		activateCaseSensitiveIdentifier?: boolean | null;

		/** Required */
		namespaceName: string;

		/** Required */
		newTableName: string;

		/** Required */
		snapshotName: string;

		/** Required */
		sourceDatabaseName: string;
		sourceSchemaName?: string;

		/** Required */
		sourceTableName: string;
		targetDatabaseName?: string;
		targetSchemaName?: string;

		/** Required */
		workgroupName: string;
	}
	export interface RestoreTableFromSnapshotRequestFormProperties {
		activateCaseSensitiveIdentifier: FormControl<boolean | null | undefined>,

		/** Required */
		namespaceName: FormControl<string | null | undefined>,

		/** Required */
		newTableName: FormControl<string | null | undefined>,

		/** Required */
		snapshotName: FormControl<string | null | undefined>,

		/** Required */
		sourceDatabaseName: FormControl<string | null | undefined>,
		sourceSchemaName: FormControl<string | null | undefined>,

		/** Required */
		sourceTableName: FormControl<string | null | undefined>,
		targetDatabaseName: FormControl<string | null | undefined>,
		targetSchemaName: FormControl<string | null | undefined>,

		/** Required */
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreTableFromSnapshotRequestFormGroup() {
		return new FormGroup<RestoreTableFromSnapshotRequestFormProperties>({
			activateCaseSensitiveIdentifier: new FormControl<boolean | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			newTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceSchemaName: new FormControl<string | null | undefined>(undefined),
			sourceTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetDatabaseName: new FormControl<string | null | undefined>(undefined),
			targetSchemaName: new FormControl<string | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEndpointAccessResponse {
		endpoint?: EndpointAccess;
	}
	export interface UpdateEndpointAccessResponseFormProperties {
	}
	export function CreateUpdateEndpointAccessResponseFormGroup() {
		return new FormGroup<UpdateEndpointAccessResponseFormProperties>({
		});

	}

	export interface UpdateEndpointAccessRequest {

		/** Required */
		endpointName: string;
		vpcSecurityGroupIds?: Array<string>;
	}
	export interface UpdateEndpointAccessRequestFormProperties {

		/** Required */
		endpointName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEndpointAccessRequestFormGroup() {
		return new FormGroup<UpdateEndpointAccessRequestFormProperties>({
			endpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNamespaceResponse {

		/** Required */
		namespace: Namespace;
	}
	export interface UpdateNamespaceResponseFormProperties {
	}
	export function CreateUpdateNamespaceResponseFormGroup() {
		return new FormGroup<UpdateNamespaceResponseFormProperties>({
		});

	}

	export interface UpdateNamespaceRequest {
		adminUserPassword?: string;
		adminUsername?: string;
		defaultIamRoleArn?: string;
		iamRoles?: Array<string>;
		kmsKeyId?: string;
		logExports?: Array<LogExport>;

		/** Required */
		namespaceName: string;
	}
	export interface UpdateNamespaceRequestFormProperties {
		adminUserPassword: FormControl<string | null | undefined>,
		adminUsername: FormControl<string | null | undefined>,
		defaultIamRoleArn: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		namespaceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNamespaceRequestFormGroup() {
		return new FormGroup<UpdateNamespaceRequestFormProperties>({
			adminUserPassword: new FormControl<string | null | undefined>(undefined),
			adminUsername: new FormControl<string | null | undefined>(undefined),
			defaultIamRoleArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSnapshotResponse {
		snapshot?: Snapshot;
	}
	export interface UpdateSnapshotResponseFormProperties {
	}
	export function CreateUpdateSnapshotResponseFormGroup() {
		return new FormGroup<UpdateSnapshotResponseFormProperties>({
		});

	}

	export interface UpdateSnapshotRequest {
		retentionPeriod?: number | null;

		/** Required */
		snapshotName: string;
	}
	export interface UpdateSnapshotRequestFormProperties {
		retentionPeriod: FormControl<number | null | undefined>,

		/** Required */
		snapshotName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSnapshotRequestFormGroup() {
		return new FormGroup<UpdateSnapshotRequestFormProperties>({
			retentionPeriod: new FormControl<number | null | undefined>(undefined),
			snapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUsageLimitResponse {
		usageLimit?: UsageLimit;
	}
	export interface UpdateUsageLimitResponseFormProperties {
	}
	export function CreateUpdateUsageLimitResponseFormGroup() {
		return new FormGroup<UpdateUsageLimitResponseFormProperties>({
		});

	}

	export interface UpdateUsageLimitRequest {
		amount?: number | null;
		breachAction?: UsageLimitBreachAction;

		/** Required */
		usageLimitId: string;
	}
	export interface UpdateUsageLimitRequestFormProperties {
		amount: FormControl<number | null | undefined>,
		breachAction: FormControl<UsageLimitBreachAction | null | undefined>,

		/** Required */
		usageLimitId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUsageLimitRequestFormGroup() {
		return new FormGroup<UpdateUsageLimitRequestFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			breachAction: new FormControl<UsageLimitBreachAction | null | undefined>(undefined),
			usageLimitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWorkgroupResponse {

		/** Required */
		workgroup: Workgroup;
	}
	export interface UpdateWorkgroupResponseFormProperties {
	}
	export function CreateUpdateWorkgroupResponseFormGroup() {
		return new FormGroup<UpdateWorkgroupResponseFormProperties>({
		});

	}

	export interface UpdateWorkgroupRequest {
		baseCapacity?: number | null;
		configParameters?: Array<ConfigParameter>;
		enhancedVpcRouting?: boolean | null;
		port?: number | null;
		publiclyAccessible?: boolean | null;
		securityGroupIds?: Array<string>;
		subnetIds?: Array<string>;

		/** Required */
		workgroupName: string;
	}
	export interface UpdateWorkgroupRequestFormProperties {
		baseCapacity: FormControl<number | null | undefined>,
		enhancedVpcRouting: FormControl<boolean | null | undefined>,
		port: FormControl<number | null | undefined>,
		publiclyAccessible: FormControl<boolean | null | undefined>,

		/** Required */
		workgroupName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkgroupRequestFormGroup() {
		return new FormGroup<UpdateWorkgroupRequestFormProperties>({
			baseCapacity: new FormControl<number | null | undefined>(undefined),
			enhancedVpcRouting: new FormControl<boolean | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			workgroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.
		 * Post #X-Amz-Target=RedshiftServerless.ConvertRecoveryPointToSnapshot
		 * @return {ConvertRecoveryPointToSnapshotResponse} Success
		 */
		ConvertRecoveryPointToSnapshot(requestBody: ConvertRecoveryPointToSnapshotRequest): Observable<ConvertRecoveryPointToSnapshotResponse> {
			return this.http.post<ConvertRecoveryPointToSnapshotResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.ConvertRecoveryPointToSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Amazon Redshift Serverless managed VPC endpoint.
		 * Post #X-Amz-Target=RedshiftServerless.CreateEndpointAccess
		 * @return {CreateEndpointAccessResponse} Success
		 */
		CreateEndpointAccess(requestBody: CreateEndpointAccessRequest): Observable<CreateEndpointAccessResponse> {
			return this.http.post<CreateEndpointAccessResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.CreateEndpointAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a namespace in Amazon Redshift Serverless.
		 * Post #X-Amz-Target=RedshiftServerless.CreateNamespace
		 * @return {CreateNamespaceResponse} Success
		 */
		CreateNamespace(requestBody: CreateNamespaceRequest): Observable<CreateNamespaceResponse> {
			return this.http.post<CreateNamespaceResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.CreateNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.
		 * Post #X-Amz-Target=RedshiftServerless.CreateSnapshot
		 * @return {CreateSnapshotResponse} Success
		 */
		CreateSnapshot(requestBody: CreateSnapshotRequest): Observable<CreateSnapshotResponse> {
			return this.http.post<CreateSnapshotResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.CreateSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier.
		 * Post #X-Amz-Target=RedshiftServerless.CreateUsageLimit
		 * @return {CreateUsageLimitResponse} Success
		 */
		CreateUsageLimit(requestBody: CreateUsageLimitRequest): Observable<CreateUsageLimitResponse> {
			return this.http.post<CreateUsageLimitResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.CreateUsageLimit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an workgroup in Amazon Redshift Serverless.
		 * Post #X-Amz-Target=RedshiftServerless.CreateWorkgroup
		 * @return {CreateWorkgroupResponse} Success
		 */
		CreateWorkgroup(requestBody: CreateWorkgroupRequest): Observable<CreateWorkgroupResponse> {
			return this.http.post<CreateWorkgroupResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.CreateWorkgroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon Redshift Serverless managed VPC endpoint.
		 * Post #X-Amz-Target=RedshiftServerless.DeleteEndpointAccess
		 * @return {DeleteEndpointAccessResponse} Success
		 */
		DeleteEndpointAccess(requestBody: DeleteEndpointAccessRequest): Observable<DeleteEndpointAccessResponse> {
			return this.http.post<DeleteEndpointAccessResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.DeleteEndpointAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.
		 * Post #X-Amz-Target=RedshiftServerless.DeleteNamespace
		 * @return {DeleteNamespaceResponse} Success
		 */
		DeleteNamespace(requestBody: DeleteNamespaceRequest): Observable<DeleteNamespaceResponse> {
			return this.http.post<DeleteNamespaceResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.DeleteNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified resource policy.
		 * Post #X-Amz-Target=RedshiftServerless.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest): Observable<DeleteResourcePolicyResponse> {
			return this.http.post<DeleteResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a snapshot from Amazon Redshift Serverless.
		 * Post #X-Amz-Target=RedshiftServerless.DeleteSnapshot
		 * @return {DeleteSnapshotResponse} Success
		 */
		DeleteSnapshot(requestBody: DeleteSnapshotRequest): Observable<DeleteSnapshotResponse> {
			return this.http.post<DeleteSnapshotResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.DeleteSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a usage limit from Amazon Redshift Serverless.
		 * Post #X-Amz-Target=RedshiftServerless.DeleteUsageLimit
		 * @return {DeleteUsageLimitResponse} Success
		 */
		DeleteUsageLimit(requestBody: DeleteUsageLimitRequest): Observable<DeleteUsageLimitResponse> {
			return this.http.post<DeleteUsageLimitResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.DeleteUsageLimit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a workgroup.
		 * Post #X-Amz-Target=RedshiftServerless.DeleteWorkgroup
		 * @return {DeleteWorkgroupResponse} Success
		 */
		DeleteWorkgroup(requestBody: DeleteWorkgroupRequest): Observable<DeleteWorkgroupResponse> {
			return this.http.post<DeleteWorkgroupResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.DeleteWorkgroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>
		 * Post #X-Amz-Target=RedshiftServerless.GetCredentials
		 * @return {GetCredentialsResponse} Success
		 */
		GetCredentials(requestBody: GetCredentialsRequest): Observable<GetCredentialsResponse> {
			return this.http.post<GetCredentialsResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.GetCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information, such as the name, about a VPC endpoint.
		 * Post #X-Amz-Target=RedshiftServerless.GetEndpointAccess
		 * @return {GetEndpointAccessResponse} Success
		 */
		GetEndpointAccess(requestBody: GetEndpointAccessRequest): Observable<GetEndpointAccessResponse> {
			return this.http.post<GetEndpointAccessResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.GetEndpointAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a namespace in Amazon Redshift Serverless.
		 * Post #X-Amz-Target=RedshiftServerless.GetNamespace
		 * @return {GetNamespaceResponse} Success
		 */
		GetNamespace(requestBody: GetNamespaceRequest): Observable<GetNamespaceResponse> {
			return this.http.post<GetNamespaceResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.GetNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a recovery point.
		 * Post #X-Amz-Target=RedshiftServerless.GetRecoveryPoint
		 * @return {GetRecoveryPointResponse} Success
		 */
		GetRecoveryPoint(requestBody: GetRecoveryPointRequest): Observable<GetRecoveryPointResponse> {
			return this.http.post<GetRecoveryPointResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.GetRecoveryPoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a resource policy.
		 * Post #X-Amz-Target=RedshiftServerless.GetResourcePolicy
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(requestBody: GetResourcePolicyRequest): Observable<GetResourcePolicyResponse> {
			return this.http.post<GetResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.GetResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific snapshot.
		 * Post #X-Amz-Target=RedshiftServerless.GetSnapshot
		 * @return {GetSnapshotResponse} Success
		 */
		GetSnapshot(requestBody: GetSnapshotRequest): Observable<GetSnapshotResponse> {
			return this.http.post<GetSnapshotResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.GetSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a <code>TableRestoreStatus</code> object.
		 * Post #X-Amz-Target=RedshiftServerless.GetTableRestoreStatus
		 * @return {GetTableRestoreStatusResponse} Success
		 */
		GetTableRestoreStatus(requestBody: GetTableRestoreStatusRequest): Observable<GetTableRestoreStatusResponse> {
			return this.http.post<GetTableRestoreStatusResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.GetTableRestoreStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a usage limit.
		 * Post #X-Amz-Target=RedshiftServerless.GetUsageLimit
		 * @return {GetUsageLimitResponse} Success
		 */
		GetUsageLimit(requestBody: GetUsageLimitRequest): Observable<GetUsageLimitResponse> {
			return this.http.post<GetUsageLimitResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.GetUsageLimit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific workgroup.
		 * Post #X-Amz-Target=RedshiftServerless.GetWorkgroup
		 * @return {GetWorkgroupResponse} Success
		 */
		GetWorkgroup(requestBody: GetWorkgroupRequest): Observable<GetWorkgroupResponse> {
			return this.http.post<GetWorkgroupResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.GetWorkgroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>EndpointAccess</code> objects and relevant information.
		 * Post #X-Amz-Target=RedshiftServerless.ListEndpointAccess
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEndpointAccessResponse} Success
		 */
		ListEndpointAccess(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEndpointAccessRequest): Observable<ListEndpointAccessResponse> {
			return this.http.post<ListEndpointAccessResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.ListEndpointAccess?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a list of specified namespaces.
		 * Post #X-Amz-Target=RedshiftServerless.ListNamespaces
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListNamespacesResponse} Success
		 */
		ListNamespaces(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListNamespacesRequest): Observable<ListNamespacesResponse> {
			return this.http.post<ListNamespacesResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.ListNamespaces?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of recovery points.
		 * Post #X-Amz-Target=RedshiftServerless.ListRecoveryPoints
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRecoveryPointsResponse} Success
		 */
		ListRecoveryPoints(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRecoveryPointsRequest): Observable<ListRecoveryPointsResponse> {
			return this.http.post<ListRecoveryPointsResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.ListRecoveryPoints?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of snapshots.
		 * Post #X-Amz-Target=RedshiftServerless.ListSnapshots
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSnapshotsResponse} Success
		 */
		ListSnapshots(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSnapshotsRequest): Observable<ListSnapshotsResponse> {
			return this.http.post<ListSnapshotsResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.ListSnapshots?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about an array of <code>TableRestoreStatus</code> objects.
		 * Post #X-Amz-Target=RedshiftServerless.ListTableRestoreStatus
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTableRestoreStatusResponse} Success
		 */
		ListTableRestoreStatus(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTableRestoreStatusRequest): Observable<ListTableRestoreStatusResponse> {
			return this.http.post<ListTableRestoreStatusResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.ListTableRestoreStatus?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags assigned to a resource.
		 * Post #X-Amz-Target=RedshiftServerless.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all usage limits within Amazon Redshift Serverless.
		 * Post #X-Amz-Target=RedshiftServerless.ListUsageLimits
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListUsageLimitsResponse} Success
		 */
		ListUsageLimits(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListUsageLimitsRequest): Observable<ListUsageLimitsResponse> {
			return this.http.post<ListUsageLimitsResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.ListUsageLimits?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a list of specified workgroups.
		 * Post #X-Amz-Target=RedshiftServerless.ListWorkgroups
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListWorkgroupsResponse} Success
		 */
		ListWorkgroups(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListWorkgroupsRequest): Observable<ListWorkgroupsResponse> {
			return this.http.post<ListWorkgroupsResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.ListWorkgroups?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
		 * Post #X-Amz-Target=RedshiftServerless.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restore the data from a recovery point.
		 * Post #X-Amz-Target=RedshiftServerless.RestoreFromRecoveryPoint
		 * @return {RestoreFromRecoveryPointResponse} Success
		 */
		RestoreFromRecoveryPoint(requestBody: RestoreFromRecoveryPointRequest): Observable<RestoreFromRecoveryPointResponse> {
			return this.http.post<RestoreFromRecoveryPointResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.RestoreFromRecoveryPoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a namespace from a snapshot.
		 * Post #X-Amz-Target=RedshiftServerless.RestoreFromSnapshot
		 * @return {RestoreFromSnapshotResponse} Success
		 */
		RestoreFromSnapshot(requestBody: RestoreFromSnapshotRequest): Observable<RestoreFromSnapshotResponse> {
			return this.http.post<RestoreFromSnapshotResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.RestoreFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.
		 * Post #X-Amz-Target=RedshiftServerless.RestoreTableFromSnapshot
		 * @return {RestoreTableFromSnapshotResponse} Success
		 */
		RestoreTableFromSnapshot(requestBody: RestoreTableFromSnapshotRequest): Observable<RestoreTableFromSnapshotResponse> {
			return this.http.post<RestoreTableFromSnapshotResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.RestoreTableFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Assigns one or more tags to a resource.
		 * Post #X-Amz-Target=RedshiftServerless.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag or set of tags from a resource.
		 * Post #X-Amz-Target=RedshiftServerless.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an Amazon Redshift Serverless managed endpoint.
		 * Post #X-Amz-Target=RedshiftServerless.UpdateEndpointAccess
		 * @return {UpdateEndpointAccessResponse} Success
		 */
		UpdateEndpointAccess(requestBody: UpdateEndpointAccessRequest): Observable<UpdateEndpointAccessResponse> {
			return this.http.post<UpdateEndpointAccessResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.UpdateEndpointAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.
		 * Post #X-Amz-Target=RedshiftServerless.UpdateNamespace
		 * @return {UpdateNamespaceResponse} Success
		 */
		UpdateNamespace(requestBody: UpdateNamespaceRequest): Observable<UpdateNamespaceResponse> {
			return this.http.post<UpdateNamespaceResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.UpdateNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a snapshot.
		 * Post #X-Amz-Target=RedshiftServerless.UpdateSnapshot
		 * @return {UpdateSnapshotResponse} Success
		 */
		UpdateSnapshot(requestBody: UpdateSnapshotRequest): Observable<UpdateSnapshotResponse> {
			return this.http.post<UpdateSnapshotResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.UpdateSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.
		 * Post #X-Amz-Target=RedshiftServerless.UpdateUsageLimit
		 * @return {UpdateUsageLimitResponse} Success
		 */
		UpdateUsageLimit(requestBody: UpdateUsageLimitRequest): Observable<UpdateUsageLimitResponse> {
			return this.http.post<UpdateUsageLimitResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.UpdateUsageLimit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.
		 * Post #X-Amz-Target=RedshiftServerless.UpdateWorkgroup
		 * @return {UpdateWorkgroupResponse} Success
		 */
		UpdateWorkgroup(requestBody: UpdateWorkgroupRequest): Observable<UpdateWorkgroupResponse> {
			return this.http.post<UpdateWorkgroupResponse>(this.baseUri + '#X-Amz-Target=RedshiftServerless.UpdateWorkgroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ConvertRecoveryPointToSnapshotX_Amz_Target { 'RedshiftServerless.ConvertRecoveryPointToSnapshot' = 0 }

	export enum CreateEndpointAccessX_Amz_Target { 'RedshiftServerless.CreateEndpointAccess' = 0 }

	export enum CreateNamespaceX_Amz_Target { 'RedshiftServerless.CreateNamespace' = 0 }

	export enum CreateSnapshotX_Amz_Target { 'RedshiftServerless.CreateSnapshot' = 0 }

	export enum CreateUsageLimitX_Amz_Target { 'RedshiftServerless.CreateUsageLimit' = 0 }

	export enum CreateWorkgroupX_Amz_Target { 'RedshiftServerless.CreateWorkgroup' = 0 }

	export enum DeleteEndpointAccessX_Amz_Target { 'RedshiftServerless.DeleteEndpointAccess' = 0 }

	export enum DeleteNamespaceX_Amz_Target { 'RedshiftServerless.DeleteNamespace' = 0 }

	export enum DeleteResourcePolicyX_Amz_Target { 'RedshiftServerless.DeleteResourcePolicy' = 0 }

	export enum DeleteSnapshotX_Amz_Target { 'RedshiftServerless.DeleteSnapshot' = 0 }

	export enum DeleteUsageLimitX_Amz_Target { 'RedshiftServerless.DeleteUsageLimit' = 0 }

	export enum DeleteWorkgroupX_Amz_Target { 'RedshiftServerless.DeleteWorkgroup' = 0 }

	export enum GetCredentialsX_Amz_Target { 'RedshiftServerless.GetCredentials' = 0 }

	export enum GetEndpointAccessX_Amz_Target { 'RedshiftServerless.GetEndpointAccess' = 0 }

	export enum GetNamespaceX_Amz_Target { 'RedshiftServerless.GetNamespace' = 0 }

	export enum GetRecoveryPointX_Amz_Target { 'RedshiftServerless.GetRecoveryPoint' = 0 }

	export enum GetResourcePolicyX_Amz_Target { 'RedshiftServerless.GetResourcePolicy' = 0 }

	export enum GetSnapshotX_Amz_Target { 'RedshiftServerless.GetSnapshot' = 0 }

	export enum GetTableRestoreStatusX_Amz_Target { 'RedshiftServerless.GetTableRestoreStatus' = 0 }

	export enum GetUsageLimitX_Amz_Target { 'RedshiftServerless.GetUsageLimit' = 0 }

	export enum GetWorkgroupX_Amz_Target { 'RedshiftServerless.GetWorkgroup' = 0 }

	export enum ListEndpointAccessX_Amz_Target { 'RedshiftServerless.ListEndpointAccess' = 0 }

	export enum ListNamespacesX_Amz_Target { 'RedshiftServerless.ListNamespaces' = 0 }

	export enum ListRecoveryPointsX_Amz_Target { 'RedshiftServerless.ListRecoveryPoints' = 0 }

	export enum ListSnapshotsX_Amz_Target { 'RedshiftServerless.ListSnapshots' = 0 }

	export enum ListTableRestoreStatusX_Amz_Target { 'RedshiftServerless.ListTableRestoreStatus' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'RedshiftServerless.ListTagsForResource' = 0 }

	export enum ListUsageLimitsX_Amz_Target { 'RedshiftServerless.ListUsageLimits' = 0 }

	export enum ListWorkgroupsX_Amz_Target { 'RedshiftServerless.ListWorkgroups' = 0 }

	export enum PutResourcePolicyX_Amz_Target { 'RedshiftServerless.PutResourcePolicy' = 0 }

	export enum RestoreFromRecoveryPointX_Amz_Target { 'RedshiftServerless.RestoreFromRecoveryPoint' = 0 }

	export enum RestoreFromSnapshotX_Amz_Target { 'RedshiftServerless.RestoreFromSnapshot' = 0 }

	export enum RestoreTableFromSnapshotX_Amz_Target { 'RedshiftServerless.RestoreTableFromSnapshot' = 0 }

	export enum TagResourceX_Amz_Target { 'RedshiftServerless.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'RedshiftServerless.UntagResource' = 0 }

	export enum UpdateEndpointAccessX_Amz_Target { 'RedshiftServerless.UpdateEndpointAccess' = 0 }

	export enum UpdateNamespaceX_Amz_Target { 'RedshiftServerless.UpdateNamespace' = 0 }

	export enum UpdateSnapshotX_Amz_Target { 'RedshiftServerless.UpdateSnapshot' = 0 }

	export enum UpdateUsageLimitX_Amz_Target { 'RedshiftServerless.UpdateUsageLimit' = 0 }

	export enum UpdateWorkgroupX_Amz_Target { 'RedshiftServerless.UpdateWorkgroup' = 0 }

}

