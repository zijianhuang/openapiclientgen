import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteResourcePermissionOutput {
		Policy?: string;
	}
	export interface DeleteResourcePermissionOutputFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePermissionOutputFormGroup() {
		return new FormGroup<DeleteResourcePermissionOutputFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
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

	export interface DeregisterApplicationOutput {
	}
	export interface DeregisterApplicationOutputFormProperties {
	}
	export function CreateDeregisterApplicationOutputFormGroup() {
		return new FormGroup<DeregisterApplicationOutputFormProperties>({
		});

	}

	export interface GetApplicationOutput {
		Application?: Application;
		Tags?: TagMap;
	}
	export interface GetApplicationOutputFormProperties {
	}
	export function CreateGetApplicationOutputFormGroup() {
		return new FormGroup<GetApplicationOutputFormProperties>({
		});

	}


	/** An SAP application registered with AWS Systems Manager for SAP. */
	export interface Application {
		Id?: string;
		Type?: ApplicationType;
		Arn?: string;
		AppRegistryArn?: string;
		Status?: ApplicationStatus;
		DiscoveryStatus?: ApplicationDiscoveryStatus;
		Components?: Array<string>;
		LastUpdated?: Date;
		StatusMessage?: string;
	}

	/** An SAP application registered with AWS Systems Manager for SAP. */
	export interface ApplicationFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<ApplicationType | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		AppRegistryArn: FormControl<string | null | undefined>,
		Status: FormControl<ApplicationStatus | null | undefined>,
		DiscoveryStatus: FormControl<ApplicationDiscoveryStatus | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ApplicationType | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			AppRegistryArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ApplicationStatus | null | undefined>(undefined),
			DiscoveryStatus: new FormControl<ApplicationDiscoveryStatus | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationType { HANA = 0 }

	export enum ApplicationStatus { ACTIVATED = 0, STARTING = 1, STOPPED = 2, STOPPING = 3, FAILED = 4, REGISTERING = 5, DELETING = 6, UNKNOWN = 7 }

	export enum ApplicationDiscoveryStatus { SUCCESS = 0, REGISTRATION_FAILED = 1, REFRESH_FAILED = 2, REGISTERING = 3, DELETING = 4 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface GetComponentOutput {
		Component?: Component;
		Tags?: TagMap;
	}
	export interface GetComponentOutputFormProperties {
	}
	export function CreateGetComponentOutputFormGroup() {
		return new FormGroup<GetComponentOutputFormProperties>({
		});

	}


	/** The SAP component of your application. */
	export interface Component {
		ComponentId?: string;
		ParentComponent?: string;
		ChildComponents?: Array<string>;
		ApplicationId?: string;
		ComponentType?: ComponentType;
		Status?: ComponentStatus;
		SapHostname?: string;
		SapKernelVersion?: string;
		HdbVersion?: string;
		Resilience?: Resilience;
		AssociatedHost?: AssociatedHost;
		Databases?: Array<string>;
		Hosts?: Array<Host>;
		PrimaryHost?: string;
		LastUpdated?: Date;
		Arn?: string;
	}

	/** The SAP component of your application. */
	export interface ComponentFormProperties {
		ComponentId: FormControl<string | null | undefined>,
		ParentComponent: FormControl<string | null | undefined>,
		ApplicationId: FormControl<string | null | undefined>,
		ComponentType: FormControl<ComponentType | null | undefined>,
		Status: FormControl<ComponentStatus | null | undefined>,
		SapHostname: FormControl<string | null | undefined>,
		SapKernelVersion: FormControl<string | null | undefined>,
		HdbVersion: FormControl<string | null | undefined>,
		PrimaryHost: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateComponentFormGroup() {
		return new FormGroup<ComponentFormProperties>({
			ComponentId: new FormControl<string | null | undefined>(undefined),
			ParentComponent: new FormControl<string | null | undefined>(undefined),
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ComponentType: new FormControl<ComponentType | null | undefined>(undefined),
			Status: new FormControl<ComponentStatus | null | undefined>(undefined),
			SapHostname: new FormControl<string | null | undefined>(undefined),
			SapKernelVersion: new FormControl<string | null | undefined>(undefined),
			HdbVersion: new FormControl<string | null | undefined>(undefined),
			PrimaryHost: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComponentType { HANA = 0, HANA_NODE = 1 }

	export enum ComponentStatus { ACTIVATED = 0, STARTING = 1, STOPPED = 2, STOPPING = 3, RUNNING = 4, RUNNING_WITH_ERROR = 5, UNDEFINED = 6 }


	/** Details of the SAP HANA system replication for the instance. */
	export interface Resilience {
		HsrTier?: string;
		HsrReplicationMode?: ReplicationMode;
		HsrOperationMode?: OperationMode;
		ClusterStatus?: ClusterStatus;
	}

	/** Details of the SAP HANA system replication for the instance. */
	export interface ResilienceFormProperties {
		HsrTier: FormControl<string | null | undefined>,
		HsrReplicationMode: FormControl<ReplicationMode | null | undefined>,
		HsrOperationMode: FormControl<OperationMode | null | undefined>,
		ClusterStatus: FormControl<ClusterStatus | null | undefined>,
	}
	export function CreateResilienceFormGroup() {
		return new FormGroup<ResilienceFormProperties>({
			HsrTier: new FormControl<string | null | undefined>(undefined),
			HsrReplicationMode: new FormControl<ReplicationMode | null | undefined>(undefined),
			HsrOperationMode: new FormControl<OperationMode | null | undefined>(undefined),
			ClusterStatus: new FormControl<ClusterStatus | null | undefined>(undefined),
		});

	}

	export enum ReplicationMode { PRIMARY = 0, NONE = 1, SYNC = 2, SYNCMEM = 3, ASYNC = 4 }

	export enum OperationMode { PRIMARY = 0, LOGREPLAY = 1, DELTA_DATASHIPPING = 2, LOGREPLAY_READACCESS = 3, NONE = 4 }

	export enum ClusterStatus { ONLINE = 0, STANDBY = 1, MAINTENANCE = 2, OFFLINE = 3, NONE = 4 }


	/** Describes the properties of the associated host. */
	export interface AssociatedHost {
		Hostname?: string;
		Ec2InstanceId?: string;
		OsVersion?: string;
	}

	/** Describes the properties of the associated host. */
	export interface AssociatedHostFormProperties {
		Hostname: FormControl<string | null | undefined>,
		Ec2InstanceId: FormControl<string | null | undefined>,
		OsVersion: FormControl<string | null | undefined>,
	}
	export function CreateAssociatedHostFormGroup() {
		return new FormGroup<AssociatedHostFormProperties>({
			Hostname: new FormControl<string | null | undefined>(undefined),
			Ec2InstanceId: new FormControl<string | null | undefined>(undefined),
			OsVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of the Dedicated Host.  */
	export interface Host {
		HostName?: string;
		HostIp?: string;
		EC2InstanceId?: string;
		InstanceId?: string;
		HostRole?: HostRole;
		OsVersion?: string;
	}

	/** Describes the properties of the Dedicated Host.  */
	export interface HostFormProperties {
		HostName: FormControl<string | null | undefined>,
		HostIp: FormControl<string | null | undefined>,
		EC2InstanceId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		HostRole: FormControl<HostRole | null | undefined>,
		OsVersion: FormControl<string | null | undefined>,
	}
	export function CreateHostFormGroup() {
		return new FormGroup<HostFormProperties>({
			HostName: new FormControl<string | null | undefined>(undefined),
			HostIp: new FormControl<string | null | undefined>(undefined),
			EC2InstanceId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			HostRole: new FormControl<HostRole | null | undefined>(undefined),
			OsVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HostRole { LEADER = 0, WORKER = 1, STANDBY = 2, UNKNOWN = 3 }

	export interface GetDatabaseOutput {
		Database?: Database;
		Tags?: TagMap;
	}
	export interface GetDatabaseOutputFormProperties {
	}
	export function CreateGetDatabaseOutputFormGroup() {
		return new FormGroup<GetDatabaseOutputFormProperties>({
		});

	}


	/** The SAP HANA database of the application registered with AWS Systems Manager for SAP. */
	export interface Database {
		ApplicationId?: string;
		ComponentId?: string;
		Credentials?: Array<ApplicationCredential>;
		DatabaseId?: string;
		DatabaseName?: string;
		DatabaseType?: DatabaseType;
		Arn?: string;
		Status?: DatabaseStatus;
		PrimaryHost?: string;
		SQLPort?: number | null;
		LastUpdated?: Date;
	}

	/** The SAP HANA database of the application registered with AWS Systems Manager for SAP. */
	export interface DatabaseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ComponentId: FormControl<string | null | undefined>,
		DatabaseId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		DatabaseType: FormControl<DatabaseType | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Status: FormControl<DatabaseStatus | null | undefined>,
		PrimaryHost: FormControl<string | null | undefined>,
		SQLPort: FormControl<number | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ComponentId: new FormControl<string | null | undefined>(undefined),
			DatabaseId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			DatabaseType: new FormControl<DatabaseType | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DatabaseStatus | null | undefined>(undefined),
			PrimaryHost: new FormControl<string | null | undefined>(undefined),
			SQLPort: new FormControl<number | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The credentials of your SAP application. */
	export interface ApplicationCredential {

		/** Required */
		DatabaseName: string;

		/** Required */
		CredentialType: CredentialType;

		/** Required */
		SecretId: string;
	}

	/** The credentials of your SAP application. */
	export interface ApplicationCredentialFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		CredentialType: FormControl<CredentialType | null | undefined>,

		/** Required */
		SecretId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationCredentialFormGroup() {
		return new FormGroup<ApplicationCredentialFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CredentialType: new FormControl<CredentialType | null | undefined>(undefined, [Validators.required]),
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CredentialType { ADMIN = 0 }

	export enum DatabaseType { SYSTEM = 0, TENANT = 1 }

	export enum DatabaseStatus { RUNNING = 0, STARTING = 1, STOPPED = 2, WARNING = 3, UNKNOWN = 4, ERROR = 5 }

	export interface GetOperationOutput {
		Operation?: Operation;
	}
	export interface GetOperationOutputFormProperties {
	}
	export function CreateGetOperationOutputFormGroup() {
		return new FormGroup<GetOperationOutputFormProperties>({
		});

	}


	/** The operations performed by AWS Systems Manager for SAP. */
	export interface Operation {
		Id?: string;
		Type?: string;
		Status?: OperationStatus;
		StatusMessage?: string;
		Properties?: OperationProperties;
		ResourceType?: string;
		ResourceId?: string;
		ResourceArn?: string;
		StartTime?: Date;
		EndTime?: Date;
		LastUpdatedTime?: Date;
	}

	/** The operations performed by AWS Systems Manager for SAP. */
	export interface OperationFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Status: FormControl<OperationStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OperationStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OperationStatus { INPROGRESS = 0, SUCCESS = 1, ERROR = 2 }

	export interface OperationProperties {
	}
	export interface OperationPropertiesFormProperties {
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
		});

	}

	export interface GetResourcePermissionOutput {
		Policy?: string;
	}
	export interface GetResourcePermissionOutputFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePermissionOutputFormGroup() {
		return new FormGroup<GetResourcePermissionOutputFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsOutput {
		Applications?: Array<ApplicationSummary>;
		NextToken?: string;
	}
	export interface ListApplicationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsOutputFormGroup() {
		return new FormGroup<ListApplicationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the SAP application registered with AWS Systems Manager for SAP.  */
	export interface ApplicationSummary {
		Id?: string;
		Type?: ApplicationType;
		Arn?: string;
		Tags?: TagMap;
	}

	/** The summary of the SAP application registered with AWS Systems Manager for SAP.  */
	export interface ApplicationSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<ApplicationType | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ApplicationType | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComponentsOutput {
		Components?: Array<ComponentSummary>;
		NextToken?: string;
	}
	export interface ListComponentsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsOutputFormGroup() {
		return new FormGroup<ListComponentsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the component. */
	export interface ComponentSummary {
		ApplicationId?: string;
		ComponentId?: string;
		ComponentType?: ComponentType;
		Tags?: TagMap;
		Arn?: string;
	}

	/** The summary of the component. */
	export interface ComponentSummaryFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ComponentId: FormControl<string | null | undefined>,
		ComponentType: FormControl<ComponentType | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateComponentSummaryFormGroup() {
		return new FormGroup<ComponentSummaryFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ComponentId: new FormControl<string | null | undefined>(undefined),
			ComponentType: new FormControl<ComponentType | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatabasesOutput {
		Databases?: Array<DatabaseSummary>;
		NextToken?: string;
	}
	export interface ListDatabasesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatabasesOutputFormGroup() {
		return new FormGroup<ListDatabasesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the database. */
	export interface DatabaseSummary {
		ApplicationId?: string;
		ComponentId?: string;
		DatabaseId?: string;
		DatabaseType?: DatabaseType;
		Arn?: string;
		Tags?: TagMap;
	}

	/** The summary of the database. */
	export interface DatabaseSummaryFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ComponentId: FormControl<string | null | undefined>,
		DatabaseId: FormControl<string | null | undefined>,
		DatabaseType: FormControl<DatabaseType | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseSummaryFormGroup() {
		return new FormGroup<DatabaseSummaryFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ComponentId: new FormControl<string | null | undefined>(undefined),
			DatabaseId: new FormControl<string | null | undefined>(undefined),
			DatabaseType: new FormControl<DatabaseType | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOperationsOutput {
		Operations?: Array<Operation>;
		NextToken?: string;
	}
	export interface ListOperationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsOutputFormGroup() {
		return new FormGroup<ListOperationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A specific result obtained by specifying the name, value, and operator.  */
	export interface Filter {

		/** Required */
		Name: string;

		/** Required */
		Value: string;

		/** Required */
		Operator: FilterOperator;
	}

	/** A specific result obtained by specifying the name, value, and operator.  */
	export interface FilterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,

		/** Required */
		Operator: FormControl<FilterOperator | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<FilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterOperator { Equals = 0, GreaterThanOrEquals = 1, LessThanOrEquals = 2 }

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface PutResourcePermissionOutput {
		Policy?: string;
	}
	export interface PutResourcePermissionOutputFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePermissionOutputFormGroup() {
		return new FormGroup<PutResourcePermissionOutputFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterApplicationOutput {
		Application?: Application;
		OperationId?: string;
	}
	export interface RegisterApplicationOutputFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterApplicationOutputFormGroup() {
		return new FormGroup<RegisterApplicationOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartApplicationRefreshOutput {
		OperationId?: string;
	}
	export interface StartApplicationRefreshOutputFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateStartApplicationRefreshOutputFormGroup() {
		return new FormGroup<StartApplicationRefreshOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateApplicationSettingsOutput {
		Message?: string;
		OperationIds?: Array<string>;
	}
	export interface UpdateApplicationSettingsOutputFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationSettingsOutputFormGroup() {
		return new FormGroup<UpdateApplicationSettingsOutputFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackintMode { AWSBackup = 0 }


	/** Configuration parameters for AWS Backint Agent for SAP HANA. You can backup your SAP HANA database with AWS Backup or Amazon S3. */
	export interface BackintConfig {

		/** Required */
		BackintMode: BackintMode;

		/** Required */
		EnsureNoBackupInProcess: boolean;
	}

	/** Configuration parameters for AWS Backint Agent for SAP HANA. You can backup your SAP HANA database with AWS Backup or Amazon S3. */
	export interface BackintConfigFormProperties {

		/** Required */
		BackintMode: FormControl<BackintMode | null | undefined>,

		/** Required */
		EnsureNoBackupInProcess: FormControl<boolean | null | undefined>,
	}
	export function CreateBackintConfigFormGroup() {
		return new FormGroup<BackintConfigFormProperties>({
			BackintMode: new FormControl<BackintMode | null | undefined>(undefined, [Validators.required]),
			EnsureNoBackupInProcess: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PermissionActionType { RESTORE = 0 }

	export interface DeleteResourcePermissionInput {
		ActionType?: PermissionActionType;
		SourceResourceArn?: string;

		/** Required */
		ResourceArn: string;
	}
	export interface DeleteResourcePermissionInputFormProperties {
		ActionType: FormControl<PermissionActionType | null | undefined>,
		SourceResourceArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePermissionInputFormGroup() {
		return new FormGroup<DeleteResourcePermissionInputFormProperties>({
			ActionType: new FormControl<PermissionActionType | null | undefined>(undefined),
			SourceResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterApplicationInput {

		/** Required */
		ApplicationId: string;
	}
	export interface DeregisterApplicationInputFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterApplicationInputFormGroup() {
		return new FormGroup<DeregisterApplicationInputFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetApplicationInput {
		ApplicationId?: string;
		ApplicationArn?: string;
		AppRegistryArn?: string;
	}
	export interface GetApplicationInputFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ApplicationArn: FormControl<string | null | undefined>,
		AppRegistryArn: FormControl<string | null | undefined>,
	}
	export function CreateGetApplicationInputFormGroup() {
		return new FormGroup<GetApplicationInputFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ApplicationArn: new FormControl<string | null | undefined>(undefined),
			AppRegistryArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetComponentInput {

		/** Required */
		ApplicationId: string;

		/** Required */
		ComponentId: string;
	}
	export interface GetComponentInputFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		ComponentId: FormControl<string | null | undefined>,
	}
	export function CreateGetComponentInputFormGroup() {
		return new FormGroup<GetComponentInputFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDatabaseInput {
		ApplicationId?: string;
		ComponentId?: string;
		DatabaseId?: string;
		DatabaseArn?: string;
	}
	export interface GetDatabaseInputFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ComponentId: FormControl<string | null | undefined>,
		DatabaseId: FormControl<string | null | undefined>,
		DatabaseArn: FormControl<string | null | undefined>,
	}
	export function CreateGetDatabaseInputFormGroup() {
		return new FormGroup<GetDatabaseInputFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ComponentId: new FormControl<string | null | undefined>(undefined),
			DatabaseId: new FormControl<string | null | undefined>(undefined),
			DatabaseArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOperationInput {

		/** Required */
		OperationId: string;
	}
	export interface GetOperationInputFormProperties {

		/** Required */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateGetOperationInputFormGroup() {
		return new FormGroup<GetOperationInputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResourcePermissionInput {
		ActionType?: PermissionActionType;

		/** Required */
		ResourceArn: string;
	}
	export interface GetResourcePermissionInputFormProperties {
		ActionType: FormControl<PermissionActionType | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePermissionInputFormGroup() {
		return new FormGroup<GetResourcePermissionInputFormProperties>({
			ActionType: new FormControl<PermissionActionType | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListApplicationsInput {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListApplicationsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListApplicationsInputFormGroup() {
		return new FormGroup<ListApplicationsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListComponentsInput {
		ApplicationId?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListComponentsInputFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListComponentsInputFormGroup() {
		return new FormGroup<ListComponentsInputFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDatabasesInput {
		ApplicationId?: string;
		ComponentId?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDatabasesInputFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ComponentId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatabasesInputFormGroup() {
		return new FormGroup<ListDatabasesInputFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ComponentId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListOperationsInput {

		/** Required */
		ApplicationId: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
	}
	export interface ListOperationsInputFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsInputFormGroup() {
		return new FormGroup<ListOperationsInputFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface PutResourcePermissionInput {

		/** Required */
		ActionType: PermissionActionType;

		/** Required */
		SourceResourceArn: string;

		/** Required */
		ResourceArn: string;
	}
	export interface PutResourcePermissionInputFormProperties {

		/** Required */
		ActionType: FormControl<PermissionActionType | null | undefined>,

		/** Required */
		SourceResourceArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePermissionInputFormGroup() {
		return new FormGroup<PutResourcePermissionInputFormProperties>({
			ActionType: new FormControl<PermissionActionType | null | undefined>(undefined, [Validators.required]),
			SourceResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterApplicationInput {

		/** Required */
		ApplicationId: string;

		/** Required */
		ApplicationType: ApplicationType;

		/** Required */
		Instances: Array<string>;
		SapInstanceNumber?: string;
		Sid?: string;
		Tags?: TagMap;

		/** Required */
		Credentials: Array<ApplicationCredential>;
	}
	export interface RegisterApplicationInputFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		ApplicationType: FormControl<ApplicationType | null | undefined>,
		SapInstanceNumber: FormControl<string | null | undefined>,
		Sid: FormControl<string | null | undefined>,
	}
	export function CreateRegisterApplicationInputFormGroup() {
		return new FormGroup<RegisterApplicationInputFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationType: new FormControl<ApplicationType | null | undefined>(undefined, [Validators.required]),
			SapInstanceNumber: new FormControl<string | null | undefined>(undefined),
			Sid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartApplicationRefreshInput {

		/** Required */
		ApplicationId: string;
	}
	export interface StartApplicationRefreshInputFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateStartApplicationRefreshInputFormGroup() {
		return new FormGroup<StartApplicationRefreshInputFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateApplicationSettingsInput {

		/** Required */
		ApplicationId: string;
		CredentialsToAddOrUpdate?: Array<ApplicationCredential>;
		CredentialsToRemove?: Array<ApplicationCredential>;
		Backint?: BackintConfig;
	}
	export interface UpdateApplicationSettingsInputFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationSettingsInputFormGroup() {
		return new FormGroup<UpdateApplicationSettingsInputFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Removes permissions associated with the target database.
		 * Post delete-resource-permission
		 * @return {DeleteResourcePermissionOutput} Success
		 */
		DeleteResourcePermission(requestBody: DeleteResourcePermissionPostBody): Observable<DeleteResourcePermissionOutput> {
			return this.http.post<DeleteResourcePermissionOutput>(this.baseUri + 'delete-resource-permission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
		 * Post deregister-application
		 * @return {DeregisterApplicationOutput} Success
		 */
		DeregisterApplication(requestBody: DeregisterApplicationPostBody): Observable<DeregisterApplicationOutput> {
			return this.http.post<DeregisterApplicationOutput>(this.baseUri + 'deregister-application', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
		 * Post get-application
		 * @return {GetApplicationOutput} Success
		 */
		GetApplication(requestBody: GetApplicationPostBody): Observable<GetApplicationOutput> {
			return this.http.post<GetApplicationOutput>(this.baseUri + 'get-application', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the component of an application registered with AWS Systems Manager for SAP.
		 * Post get-component
		 * @return {GetComponentOutput} Success
		 */
		GetComponent(requestBody: GetComponentPostBody): Observable<GetComponentOutput> {
			return this.http.post<GetComponentOutput>(this.baseUri + 'get-component', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
		 * Post get-database
		 * @return {GetDatabaseOutput} Success
		 */
		GetDatabase(requestBody: GetDatabasePostBody): Observable<GetDatabaseOutput> {
			return this.http.post<GetDatabaseOutput>(this.baseUri + 'get-database', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the details of an operation by specifying the operation ID.
		 * Post get-operation
		 * @return {GetOperationOutput} Success
		 */
		GetOperation(requestBody: GetOperationPostBody): Observable<GetOperationOutput> {
			return this.http.post<GetOperationOutput>(this.baseUri + 'get-operation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets permissions associated with the target database.
		 * Post get-resource-permission
		 * @return {GetResourcePermissionOutput} Success
		 */
		GetResourcePermission(requestBody: GetResourcePermissionPostBody): Observable<GetResourcePermissionOutput> {
			return this.http.post<GetResourcePermissionOutput>(this.baseUri + 'get-resource-permission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the applications registered with AWS Systems Manager for SAP.
		 * Post list-applications
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationsOutput} Success
		 */
		ListApplications(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListApplicationsPostBody): Observable<ListApplicationsOutput> {
			return this.http.post<ListApplicationsOutput>(this.baseUri + 'list-applications?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the components registered with AWS Systems Manager for SAP.
		 * Post list-components
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListComponentsOutput} Success
		 */
		ListComponents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListComponentsPostBody): Observable<ListComponentsOutput> {
			return this.http.post<ListComponentsOutput>(this.baseUri + 'list-components?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
		 * Post list-databases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatabasesOutput} Success
		 */
		ListDatabases(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatabasesPostBody): Observable<ListDatabasesOutput> {
			return this.http.post<ListDatabasesOutput>(this.baseUri + 'list-databases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the operations performed by AWS Systems Manager for SAP.
		 * Post list-operations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOperationsOutput} Success
		 */
		ListOperations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOperationsPostBody): Observable<ListOperationsOutput> {
			return this.http.post<ListOperationsOutput>(this.baseUri + 'list-operations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Creates tag for a resource by specifying the ARN.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds permissions to the target database.
		 * Post put-resource-permission
		 * @return {PutResourcePermissionOutput} Success
		 */
		PutResourcePermission(requestBody: PutResourcePermissionPostBody): Observable<PutResourcePermissionOutput> {
			return this.http.post<PutResourcePermissionOutput>(this.baseUri + 'put-resource-permission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>
		 * Post register-application
		 * @return {RegisterApplicationOutput} Success
		 */
		RegisterApplication(requestBody: RegisterApplicationPostBody): Observable<RegisterApplicationOutput> {
			return this.http.post<RegisterApplicationOutput>(this.baseUri + 'register-application', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refreshes a registered application.
		 * Post start-application-refresh
		 * @return {StartApplicationRefreshOutput} Success
		 */
		StartApplicationRefresh(requestBody: StartApplicationRefreshPostBody): Observable<StartApplicationRefreshOutput> {
			return this.http.post<StartApplicationRefreshOutput>(this.baseUri + 'start-application-refresh', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the tags for a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys Adds/updates or removes credentials for applications registered with AWS Systems Manager for SAP.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates the settings of an application registered with AWS Systems Manager for SAP.
		 * Post update-application-settings
		 * @return {UpdateApplicationSettingsOutput} Success
		 */
		UpdateApplicationSettings(requestBody: UpdateApplicationSettingsPostBody): Observable<UpdateApplicationSettingsOutput> {
			return this.http.post<UpdateApplicationSettingsOutput>(this.baseUri + 'update-application-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface DeleteResourcePermissionPostBody {

		/** Delete or restore the permissions on the target database. */
		ActionType?: PermissionActionType | null;

		/** The Amazon Resource Name (ARN) of the source resource. */
		SourceResourceArn?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 */
		ResourceArn: string;
	}
	export interface DeleteResourcePermissionPostBodyFormProperties {

		/** Delete or restore the permissions on the target database. */
		ActionType: FormControl<PermissionActionType | null | undefined>,

		/** The Amazon Resource Name (ARN) of the source resource. */
		SourceResourceArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePermissionPostBodyFormGroup() {
		return new FormGroup<DeleteResourcePermissionPostBodyFormProperties>({
			ActionType: new FormControl<PermissionActionType | null | undefined>(undefined),
			SourceResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:(.+:){2,4}.+$|^arn:(.+:){1,3}.+\/.+')]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:(.+:){2,4}.+$|^arn:(.+:){1,3}.+\/.+')]),
		});

	}

	export interface DeregisterApplicationPostBody {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: string;
	}
	export interface DeregisterApplicationPostBodyFormProperties {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterApplicationPostBodyFormGroup() {
		return new FormGroup<DeregisterApplicationPostBodyFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[\w\d]{1,50}')]),
		});

	}

	export interface GetApplicationPostBody {

		/** The ID of the application. */
		ApplicationId?: string | null;

		/** The Amazon Resource Name (ARN) of the application. */
		ApplicationArn?: string | null;

		/** The Amazon Resource Name (ARN) of the application registry. */
		AppRegistryArn?: string | null;
	}
	export interface GetApplicationPostBodyFormProperties {

		/** The ID of the application. */
		ApplicationId: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the application. */
		ApplicationArn: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the application registry. */
		AppRegistryArn: FormControl<string | null | undefined>,
	}
	export function CreateGetApplicationPostBodyFormGroup() {
		return new FormGroup<GetApplicationPostBodyFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[\w\d]{1,50}')]),
			ApplicationArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:(.+:){2,4}.+$|^arn:(.+:){1,3}.+\/.+')]),
			AppRegistryArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:aws:servicecatalog:[a-z0-9:\/-]+')]),
		});

	}

	export interface GetComponentPostBody {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: string;

		/**
		 * The ID of the component.
		 * Required
		 */
		ComponentId: string;
	}
	export interface GetComponentPostBodyFormProperties {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: FormControl<string | null | undefined>,

		/**
		 * The ID of the component.
		 * Required
		 */
		ComponentId: FormControl<string | null | undefined>,
	}
	export function CreateGetComponentPostBodyFormGroup() {
		return new FormGroup<GetComponentPostBodyFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[\w\d]{1,50}')]),
			ComponentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[\w\d-]+')]),
		});

	}

	export interface GetDatabasePostBody {

		/** The ID of the application. */
		ApplicationId?: string | null;

		/** The ID of the component. */
		ComponentId?: string | null;

		/** The ID of the database. */
		DatabaseId?: string | null;

		/** The Amazon Resource Name (ARN) of the database. */
		DatabaseArn?: string | null;
	}
	export interface GetDatabasePostBodyFormProperties {

		/** The ID of the application. */
		ApplicationId: FormControl<string | null | undefined>,

		/** The ID of the component. */
		ComponentId: FormControl<string | null | undefined>,

		/** The ID of the database. */
		DatabaseId: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the database. */
		DatabaseArn: FormControl<string | null | undefined>,
	}
	export function CreateGetDatabasePostBodyFormGroup() {
		return new FormGroup<GetDatabasePostBodyFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[\w\d]{1,50}')]),
			ComponentId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[\w\d-]+')]),
			DatabaseId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*[\w\d]+')]),
			DatabaseArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:(.+:){2,4}.+$|^arn:(.+:){1,3}.+\/.+')]),
		});

	}

	export interface GetOperationPostBody {

		/**
		 * The ID of the operation.
		 * Required
		 */
		OperationId: string;
	}
	export interface GetOperationPostBodyFormProperties {

		/**
		 * The ID of the operation.
		 * Required
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateGetOperationPostBodyFormGroup() {
		return new FormGroup<GetOperationPostBodyFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?')]),
		});

	}

	export interface GetResourcePermissionPostBody {

		/** <p/> */
		ActionType?: PermissionActionType | null;

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 */
		ResourceArn: string;
	}
	export interface GetResourcePermissionPostBodyFormProperties {

		/** <p/> */
		ActionType: FormControl<PermissionActionType | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePermissionPostBodyFormGroup() {
		return new FormGroup<GetResourcePermissionPostBodyFormProperties>({
			ActionType: new FormControl<PermissionActionType | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:(.+:){2,4}.+$|^arn:(.+:){1,3}.+\/.+')]),
		});

	}

	export interface ListApplicationsPostBody {

		/** The token for the next page of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListApplicationsPostBodyFormProperties {

		/** The token for the next page of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListApplicationsPostBodyFormGroup() {
		return new FormGroup<ListApplicationsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.{16,1024}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListComponentsPostBody {

		/** The ID of the application. */
		ApplicationId?: string | null;

		/** The token for the next page of results. */
		NextToken?: string | null;

		/**
		 * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</p> <p>If you do not specify a value for MaxResults, the request returns 50 items per page by default.</p>
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListComponentsPostBodyFormProperties {

		/** The ID of the application. */
		ApplicationId: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</p> <p>If you do not specify a value for MaxResults, the request returns 50 items per page by default.</p>
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListComponentsPostBodyFormGroup() {
		return new FormGroup<ListComponentsPostBodyFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[\w\d]{1,50}')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.{16,1024}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListDatabasesPostBody {

		/** The ID of the application. */
		ApplicationId?: string | null;

		/** The ID of the component. */
		ComponentId?: string | null;

		/** The token for the next page of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If you do not specify a value for MaxResults, the request returns 50 items per page by default.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListDatabasesPostBodyFormProperties {

		/** The ID of the application. */
		ApplicationId: FormControl<string | null | undefined>,

		/** The ID of the component. */
		ComponentId: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If you do not specify a value for MaxResults, the request returns 50 items per page by default.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatabasesPostBodyFormGroup() {
		return new FormGroup<ListDatabasesPostBodyFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[\w\d]{1,50}')]),
			ComponentId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[\w\d-]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.{16,1024}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListOperationsPostBody {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If you do not specify a value for MaxResults, the request returns 50 items per page by default.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/** The token for the next page of results. */
		NextToken?: string | null;

		/**
		 * The filters of an operation.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Filters?: Array<Filter>;
	}
	export interface ListOperationsPostBodyFormProperties {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If you do not specify a value for MaxResults, the request returns 50 items per page by default.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The token for the next page of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsPostBodyFormGroup() {
		return new FormGroup<ListOperationsPostBodyFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[\w\d]{1,50}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.{16,1024}')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags on a resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags on a resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutResourcePermissionPostBody {

		/**
		 * <p/>
		 * Required
		 */
		ActionType: PermissionActionType;

		/**
		 * <p/>
		 * Required
		 */
		SourceResourceArn: string;

		/**
		 * <p/>
		 * Required
		 */
		ResourceArn: string;
	}
	export interface PutResourcePermissionPostBodyFormProperties {

		/**
		 * <p/>
		 * Required
		 */
		ActionType: FormControl<PermissionActionType | null | undefined>,

		/**
		 * <p/>
		 * Required
		 */
		SourceResourceArn: FormControl<string | null | undefined>,

		/**
		 * <p/>
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePermissionPostBodyFormGroup() {
		return new FormGroup<PutResourcePermissionPostBodyFormProperties>({
			ActionType: new FormControl<PermissionActionType | null | undefined>(undefined, [Validators.required]),
			SourceResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:(.+:){2,4}.+$|^arn:(.+:){1,3}.+\/.+')]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:(.+:){2,4}.+$|^arn:(.+:){1,3}.+\/.+')]),
		});

	}

	export interface RegisterApplicationPostBody {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: string;

		/**
		 * The type of the application.
		 * Required
		 */
		ApplicationType: ApplicationType;

		/**
		 * The Amazon EC2 instances on which your SAP application is running.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Instances: Array<string>;

		/** The SAP instance number of the application. */
		SapInstanceNumber?: string | null;

		/** The System ID of the application. */
		Sid?: string | null;

		/** The tags to be attached to the SAP application. */
		Tags?: {[id: string]: string };

		/**
		 * The credentials of the SAP application.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Credentials: Array<ApplicationCredential>;
	}
	export interface RegisterApplicationPostBodyFormProperties {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: FormControl<string | null | undefined>,

		/**
		 * The type of the application.
		 * Required
		 */
		ApplicationType: FormControl<ApplicationType | null | undefined>,

		/** The SAP instance number of the application. */
		SapInstanceNumber: FormControl<string | null | undefined>,

		/** The System ID of the application. */
		Sid: FormControl<string | null | undefined>,

		/** The tags to be attached to the SAP application. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRegisterApplicationPostBodyFormGroup() {
		return new FormGroup<RegisterApplicationPostBodyFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[\w\d]{1,50}')]),
			ApplicationType: new FormControl<ApplicationType | null | undefined>(undefined, [Validators.required]),
			SapInstanceNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]{2}')]),
			Sid: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Z][A-Z0-9]{2}')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartApplicationRefreshPostBody {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: string;
	}
	export interface StartApplicationRefreshPostBodyFormProperties {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateStartApplicationRefreshPostBodyFormGroup() {
		return new FormGroup<StartApplicationRefreshPostBodyFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[\w\d]{1,50}')]),
		});

	}

	export interface UpdateApplicationSettingsPostBody {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: string;

		/**
		 * The credentials to be added or updated.
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		CredentialsToAddOrUpdate?: Array<ApplicationCredential>;

		/**
		 * The credentials to be removed.
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		CredentialsToRemove?: Array<ApplicationCredential>;

		/** Configuration parameters for AWS Backint Agent for SAP HANA. You can backup your SAP HANA database with AWS Backup or Amazon S3. */
		Backint?: UpdateApplicationSettingsPostBodyBackint;
	}
	export interface UpdateApplicationSettingsPostBodyFormProperties {

		/**
		 * The ID of the application.
		 * Required
		 */
		ApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationSettingsPostBodyFormGroup() {
		return new FormGroup<UpdateApplicationSettingsPostBodyFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[\w\d]{1,50}')]),
		});

	}

	export interface UpdateApplicationSettingsPostBodyBackint {
		BackintMode?: BackintMode;
		EnsureNoBackupInProcess?: boolean | null;
	}
	export interface UpdateApplicationSettingsPostBodyBackintFormProperties {
		BackintMode: FormControl<BackintMode | null | undefined>,
		EnsureNoBackupInProcess: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateApplicationSettingsPostBodyBackintFormGroup() {
		return new FormGroup<UpdateApplicationSettingsPostBodyBackintFormProperties>({
			BackintMode: new FormControl<BackintMode | null | undefined>(undefined),
			EnsureNoBackupInProcess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

