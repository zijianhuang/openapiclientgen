import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateBrokerResponse {
		BrokerArn?: string;
		BrokerId?: string;
	}
	export interface CreateBrokerResponseFormProperties {
		BrokerArn: FormControl<string | null | undefined>,
		BrokerId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBrokerResponseFormGroup() {
		return new FormGroup<CreateBrokerResponseFormProperties>({
			BrokerArn: new FormControl<string | null | undefined>(undefined),
			BrokerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DayOfWeek { MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


	/** A user associated with the broker. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console. */
	export interface User {
		ConsoleAccess?: boolean | null;
		Groups?: Array<string>;

		/** Required */
		Password: string;

		/** Required */
		Username: string;
		ReplicationUser?: boolean | null;
	}

	/** A user associated with the broker. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console. */
	export interface UserFormProperties {
		ConsoleAccess: FormControl<boolean | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
		ReplicationUser: FormControl<boolean | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			ConsoleAccess: new FormControl<boolean | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationUser: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface CreateConfigurationResponse {
		Arn?: string;
		AuthenticationStrategy?: AuthenticationStrategy;
		Created?: Date;
		Id?: string;
		LatestRevision?: ConfigurationRevision;
		Name?: string;
	}
	export interface CreateConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		AuthenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationResponseFormGroup() {
		return new FormGroup<CreateConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AuthenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Optional. The authentication strategy used to secure the broker. The default is SIMPLE. */
	export enum AuthenticationStrategy { SIMPLE = 'SIMPLE', LDAP = 'LDAP' }


	/** Returns information about the specified configuration revision. */
	export interface ConfigurationRevision {

		/** Required */
		Created: Date;
		Description?: string;

		/** Required */
		Revision: number;
	}

	/** Returns information about the specified configuration revision. */
	export interface ConfigurationRevisionFormProperties {

		/** Required */
		Created: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateConfigurationRevisionFormGroup() {
		return new FormGroup<ConfigurationRevisionFormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface CreateUserResponse {
	}
	export interface CreateUserResponseFormProperties {
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
		});

	}

	export interface DeleteBrokerResponse {
		BrokerId?: string;
	}
	export interface DeleteBrokerResponseFormProperties {
		BrokerId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBrokerResponseFormGroup() {
		return new FormGroup<DeleteBrokerResponseFormProperties>({
			BrokerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteUserResponse {
	}
	export interface DeleteUserResponseFormProperties {
	}
	export function CreateDeleteUserResponseFormGroup() {
		return new FormGroup<DeleteUserResponseFormProperties>({
		});

	}

	export interface DescribeBrokerResponse {
		ActionsRequired?: Array<ActionRequired>;
		AuthenticationStrategy?: AuthenticationStrategy;
		AutoMinorVersionUpgrade?: boolean | null;
		BrokerArn?: string;
		BrokerId?: string;
		BrokerInstances?: Array<BrokerInstance>;
		BrokerName?: string;
		BrokerState?: BrokerState;
		Configurations?: Configurations;
		Created?: Date;
		DeploymentMode?: DeploymentMode;
		EncryptionOptions?: EncryptionOptions;
		EngineType?: EngineType;
		EngineVersion?: string;
		HostInstanceType?: string;
		LdapServerMetadata?: LdapServerMetadataOutput;
		Logs?: LogsSummary;
		MaintenanceWindowStartTime?: WeeklyStartTime;
		PendingAuthenticationStrategy?: AuthenticationStrategy;
		PendingEngineVersion?: string;
		PendingHostInstanceType?: string;
		PendingLdapServerMetadata?: LdapServerMetadataOutput;
		PendingSecurityGroups?: Array<string>;
		PubliclyAccessible?: boolean | null;
		SecurityGroups?: Array<string>;
		StorageType?: BrokerStorageType;
		SubnetIds?: Array<string>;
		Tags?: __mapOf__string;
		Users?: Array<UserSummary>;
		DataReplicationMetadata?: DataReplicationMetadataOutput;
		DataReplicationMode?: DataReplicationMode;
		PendingDataReplicationMetadata?: DataReplicationMetadataOutput;
		PendingDataReplicationMode?: DataReplicationMode;
	}
	export interface DescribeBrokerResponseFormProperties {
		AuthenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		BrokerArn: FormControl<string | null | undefined>,
		BrokerId: FormControl<string | null | undefined>,
		BrokerName: FormControl<string | null | undefined>,
		BrokerState: FormControl<BrokerState | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		DeploymentMode: FormControl<DeploymentMode | null | undefined>,
		EngineType: FormControl<EngineType | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
		PendingAuthenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,
		PendingEngineVersion: FormControl<string | null | undefined>,
		PendingHostInstanceType: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		StorageType: FormControl<BrokerStorageType | null | undefined>,
		DataReplicationMode: FormControl<DataReplicationMode | null | undefined>,
		PendingDataReplicationMode: FormControl<DataReplicationMode | null | undefined>,
	}
	export function CreateDescribeBrokerResponseFormGroup() {
		return new FormGroup<DescribeBrokerResponseFormProperties>({
			AuthenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			BrokerArn: new FormControl<string | null | undefined>(undefined),
			BrokerId: new FormControl<string | null | undefined>(undefined),
			BrokerName: new FormControl<string | null | undefined>(undefined),
			BrokerState: new FormControl<BrokerState | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			DeploymentMode: new FormControl<DeploymentMode | null | undefined>(undefined),
			EngineType: new FormControl<EngineType | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
			PendingAuthenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			PendingEngineVersion: new FormControl<string | null | undefined>(undefined),
			PendingHostInstanceType: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			StorageType: new FormControl<BrokerStorageType | null | undefined>(undefined),
			DataReplicationMode: new FormControl<DataReplicationMode | null | undefined>(undefined),
			PendingDataReplicationMode: new FormControl<DataReplicationMode | null | undefined>(undefined),
		});

	}


	/** Action required for a broker. */
	export interface ActionRequired {
		ActionRequiredCode?: string;
		ActionRequiredInfo?: string;
	}

	/** Action required for a broker. */
	export interface ActionRequiredFormProperties {
		ActionRequiredCode: FormControl<string | null | undefined>,
		ActionRequiredInfo: FormControl<string | null | undefined>,
	}
	export function CreateActionRequiredFormGroup() {
		return new FormGroup<ActionRequiredFormProperties>({
			ActionRequiredCode: new FormControl<string | null | undefined>(undefined),
			ActionRequiredInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about all brokers. */
	export interface BrokerInstance {
		ConsoleURL?: string;
		Endpoints?: Array<string>;
		IpAddress?: string;
	}

	/** Returns information about all brokers. */
	export interface BrokerInstanceFormProperties {
		ConsoleURL: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateBrokerInstanceFormGroup() {
		return new FormGroup<BrokerInstanceFormProperties>({
			ConsoleURL: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The broker's status. */
	export enum BrokerState { CREATION_IN_PROGRESS = 'CREATION_IN_PROGRESS', CREATION_FAILED = 'CREATION_FAILED', DELETION_IN_PROGRESS = 'DELETION_IN_PROGRESS', RUNNING = 'RUNNING', REBOOT_IN_PROGRESS = 'REBOOT_IN_PROGRESS', CRITICAL_ACTION_REQUIRED = 'CRITICAL_ACTION_REQUIRED', REPLICA = 'REPLICA' }


	/** Broker configuration information */
	export interface Configurations {
		Current?: ConfigurationId;
		History?: Array<ConfigurationId>;
		Pending?: ConfigurationId;
	}

	/** Broker configuration information */
	export interface ConfigurationsFormProperties {
	}
	export function CreateConfigurationsFormGroup() {
		return new FormGroup<ConfigurationsFormProperties>({
		});

	}


	/** A list of information about the configuration. */
	export interface ConfigurationId {

		/** Required */
		Id: string;
		Revision?: number | null;
	}

	/** A list of information about the configuration. */
	export interface ConfigurationIdFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateConfigurationIdFormGroup() {
		return new FormGroup<ConfigurationIdFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Revision: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The broker's deployment mode. */
	export enum DeploymentMode { SINGLE_INSTANCE = 'SINGLE_INSTANCE', ACTIVE_STANDBY_MULTI_AZ = 'ACTIVE_STANDBY_MULTI_AZ', CLUSTER_MULTI_AZ = 'CLUSTER_MULTI_AZ' }


	/** Encryption options for the broker. */
	export interface EncryptionOptions {
		KmsKeyId?: string;

		/** Required */
		UseAwsOwnedKey: boolean;
	}

	/** Encryption options for the broker. */
	export interface EncryptionOptionsFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		UseAwsOwnedKey: FormControl<boolean | null | undefined>,
	}
	export function CreateEncryptionOptionsFormGroup() {
		return new FormGroup<EncryptionOptionsFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			UseAwsOwnedKey: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ. */
	export enum EngineType { ACTIVEMQ = 'ACTIVEMQ', RABBITMQ = 'RABBITMQ' }


	/** Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. */
	export interface LdapServerMetadataOutput {

		/** Required */
		Hosts: Array<string>;

		/** Required */
		RoleBase: string;
		RoleName?: string;

		/** Required */
		RoleSearchMatching: string;
		RoleSearchSubtree?: boolean | null;

		/** Required */
		ServiceAccountUsername: string;

		/** Required */
		UserBase: string;
		UserRoleName?: string;

		/** Required */
		UserSearchMatching: string;
		UserSearchSubtree?: boolean | null;
	}

	/** Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. */
	export interface LdapServerMetadataOutputFormProperties {

		/** Required */
		RoleBase: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,

		/** Required */
		RoleSearchMatching: FormControl<string | null | undefined>,
		RoleSearchSubtree: FormControl<boolean | null | undefined>,

		/** Required */
		ServiceAccountUsername: FormControl<string | null | undefined>,

		/** Required */
		UserBase: FormControl<string | null | undefined>,
		UserRoleName: FormControl<string | null | undefined>,

		/** Required */
		UserSearchMatching: FormControl<string | null | undefined>,
		UserSearchSubtree: FormControl<boolean | null | undefined>,
	}
	export function CreateLdapServerMetadataOutputFormGroup() {
		return new FormGroup<LdapServerMetadataOutputFormProperties>({
			RoleBase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleName: new FormControl<string | null | undefined>(undefined),
			RoleSearchMatching: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleSearchSubtree: new FormControl<boolean | null | undefined>(undefined),
			ServiceAccountUsername: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserBase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserRoleName: new FormControl<string | null | undefined>(undefined),
			UserSearchMatching: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserSearchSubtree: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The list of information about logs currently enabled and pending to be deployed for the specified broker. */
	export interface LogsSummary {
		Audit?: boolean | null;
		AuditLogGroup?: string;

		/** Required */
		General: boolean;

		/** Required */
		GeneralLogGroup: string;
		Pending?: PendingLogs;
	}

	/** The list of information about logs currently enabled and pending to be deployed for the specified broker. */
	export interface LogsSummaryFormProperties {
		Audit: FormControl<boolean | null | undefined>,
		AuditLogGroup: FormControl<string | null | undefined>,

		/** Required */
		General: FormControl<boolean | null | undefined>,

		/** Required */
		GeneralLogGroup: FormControl<string | null | undefined>,
	}
	export function CreateLogsSummaryFormGroup() {
		return new FormGroup<LogsSummaryFormProperties>({
			Audit: new FormControl<boolean | null | undefined>(undefined),
			AuditLogGroup: new FormControl<string | null | undefined>(undefined),
			General: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			GeneralLogGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of information about logs to be enabled for the specified broker. */
	export interface PendingLogs {
		Audit?: boolean | null;
		General?: boolean | null;
	}

	/** The list of information about logs to be enabled for the specified broker. */
	export interface PendingLogsFormProperties {
		Audit: FormControl<boolean | null | undefined>,
		General: FormControl<boolean | null | undefined>,
	}
	export function CreatePendingLogsFormGroup() {
		return new FormGroup<PendingLogsFormProperties>({
			Audit: new FormControl<boolean | null | undefined>(undefined),
			General: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
	export interface WeeklyStartTime {

		/** Required */
		DayOfWeek: DayOfWeek;

		/** Required */
		TimeOfDay: string;
		TimeZone?: string;
	}

	/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
	export interface WeeklyStartTimeFormProperties {

		/** Required */
		DayOfWeek: FormControl<DayOfWeek | null | undefined>,

		/** Required */
		TimeOfDay: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateWeeklyStartTimeFormGroup() {
		return new FormGroup<WeeklyStartTimeFormProperties>({
			DayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined, [Validators.required]),
			TimeOfDay: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The broker's storage type.</p> <important><p>EFS is not supported for RabbitMQ engine type.</p></important> */
	export enum BrokerStorageType { EBS = 'EBS', EFS = 'EFS' }

	export interface __mapOf__string {
	}
	export interface __mapOf__stringFormProperties {
	}
	export function Create__mapOf__stringFormGroup() {
		return new FormGroup<__mapOf__stringFormProperties>({
		});

	}


	/** Returns a list of all broker users. Does not apply to RabbitMQ brokers. */
	export interface UserSummary {
		PendingChange?: ChangeType;

		/** Required */
		Username: string;
	}

	/** Returns a list of all broker users. Does not apply to RabbitMQ brokers. */
	export interface UserSummaryFormProperties {
		PendingChange: FormControl<ChangeType | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateUserSummaryFormGroup() {
		return new FormGroup<UserSummaryFormProperties>({
			PendingChange: new FormControl<ChangeType | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type of change pending for the ActiveMQ user. */
	export enum ChangeType { CREATE = 'CREATE', UPDATE = 'UPDATE', DELETE = 'DELETE' }


	/** The replication details of the data replication-enabled broker. Only returned if dataReplicationMode or pendingDataReplicationMode is set to CRDR. */
	export interface DataReplicationMetadataOutput {
		DataReplicationCounterpart?: DataReplicationCounterpart;

		/** Required */
		DataReplicationRole: string;
	}

	/** The replication details of the data replication-enabled broker. Only returned if dataReplicationMode or pendingDataReplicationMode is set to CRDR. */
	export interface DataReplicationMetadataOutputFormProperties {

		/** Required */
		DataReplicationRole: FormControl<string | null | undefined>,
	}
	export function CreateDataReplicationMetadataOutputFormGroup() {
		return new FormGroup<DataReplicationMetadataOutputFormProperties>({
			DataReplicationRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a broker in a data replication pair. */
	export interface DataReplicationCounterpart {

		/** Required */
		BrokerId: string;

		/** Required */
		Region: string;
	}

	/** Specifies a broker in a data replication pair. */
	export interface DataReplicationCounterpartFormProperties {

		/** Required */
		BrokerId: FormControl<string | null | undefined>,

		/** Required */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateDataReplicationCounterpartFormGroup() {
		return new FormGroup<DataReplicationCounterpartFormProperties>({
			BrokerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies whether a broker is a part of a data replication pair. */
	export enum DataReplicationMode { NONE = 'NONE', CRDR = 'CRDR' }

	export interface DescribeBrokerEngineTypesResponse {
		BrokerEngineTypes?: Array<BrokerEngineType>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeBrokerEngineTypesResponseFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBrokerEngineTypesResponseFormGroup() {
		return new FormGroup<DescribeBrokerEngineTypesResponseFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Types of broker engines. */
	export interface BrokerEngineType {
		EngineType?: EngineType;
		EngineVersions?: Array<EngineVersion>;
	}

	/** Types of broker engines. */
	export interface BrokerEngineTypeFormProperties {
		EngineType: FormControl<EngineType | null | undefined>,
	}
	export function CreateBrokerEngineTypeFormGroup() {
		return new FormGroup<BrokerEngineTypeFormProperties>({
			EngineType: new FormControl<EngineType | null | undefined>(undefined),
		});

	}


	/** Id of the engine version. */
	export interface EngineVersion {
		Name?: string;
	}

	/** Id of the engine version. */
	export interface EngineVersionFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateEngineVersionFormGroup() {
		return new FormGroup<EngineVersionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeBrokerInstanceOptionsResponse {
		BrokerInstanceOptions?: Array<BrokerInstanceOption>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeBrokerInstanceOptionsResponseFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBrokerInstanceOptionsResponseFormGroup() {
		return new FormGroup<DescribeBrokerInstanceOptionsResponseFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Option for host instance type. */
	export interface BrokerInstanceOption {
		AvailabilityZones?: Array<AvailabilityZone>;
		EngineType?: EngineType;
		HostInstanceType?: string;
		StorageType?: BrokerStorageType;
		SupportedDeploymentModes?: Array<DeploymentMode>;
		SupportedEngineVersions?: Array<string>;
	}

	/** Option for host instance type. */
	export interface BrokerInstanceOptionFormProperties {
		EngineType: FormControl<EngineType | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
		StorageType: FormControl<BrokerStorageType | null | undefined>,
	}
	export function CreateBrokerInstanceOptionFormGroup() {
		return new FormGroup<BrokerInstanceOptionFormProperties>({
			EngineType: new FormControl<EngineType | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<BrokerStorageType | null | undefined>(undefined),
		});

	}


	/** Name of the availability zone. */
	export interface AvailabilityZone {
		Name?: string;
	}

	/** Name of the availability zone. */
	export interface AvailabilityZoneFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationResponse {
		Arn?: string;
		AuthenticationStrategy?: AuthenticationStrategy;
		Created?: Date;
		Description?: string;
		EngineType?: EngineType;
		EngineVersion?: string;
		Id?: string;
		LatestRevision?: ConfigurationRevision;
		Name?: string;
		Tags?: __mapOf__string;
	}
	export interface DescribeConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		AuthenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EngineType: FormControl<EngineType | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationResponseFormGroup() {
		return new FormGroup<DescribeConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AuthenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EngineType: new FormControl<EngineType | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationRevisionResponse {
		ConfigurationId?: string;
		Created?: Date;
		Data?: string;
		Description?: string;
	}
	export interface DescribeConfigurationRevisionResponseFormProperties {
		ConfigurationId: FormControl<string | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		Data: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationRevisionResponseFormGroup() {
		return new FormGroup<DescribeConfigurationRevisionResponseFormProperties>({
			ConfigurationId: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			Data: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUserResponse {
		BrokerId?: string;
		ConsoleAccess?: boolean | null;
		Groups?: Array<string>;
		Pending?: UserPendingChanges;
		Username?: string;
		ReplicationUser?: boolean | null;
	}
	export interface DescribeUserResponseFormProperties {
		BrokerId: FormControl<string | null | undefined>,
		ConsoleAccess: FormControl<boolean | null | undefined>,
		Username: FormControl<string | null | undefined>,
		ReplicationUser: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeUserResponseFormGroup() {
		return new FormGroup<DescribeUserResponseFormProperties>({
			BrokerId: new FormControl<string | null | undefined>(undefined),
			ConsoleAccess: new FormControl<boolean | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			ReplicationUser: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Returns information about the status of the changes pending for the ActiveMQ user. */
	export interface UserPendingChanges {
		ConsoleAccess?: boolean | null;
		Groups?: Array<string>;

		/** Required */
		PendingChange: ChangeType;
	}

	/** Returns information about the status of the changes pending for the ActiveMQ user. */
	export interface UserPendingChangesFormProperties {
		ConsoleAccess: FormControl<boolean | null | undefined>,

		/** Required */
		PendingChange: FormControl<ChangeType | null | undefined>,
	}
	export function CreateUserPendingChangesFormGroup() {
		return new FormGroup<UserPendingChangesFormProperties>({
			ConsoleAccess: new FormControl<boolean | null | undefined>(undefined),
			PendingChange: new FormControl<ChangeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListBrokersResponse {
		BrokerSummaries?: Array<BrokerSummary>;
		NextToken?: string;
	}
	export interface ListBrokersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBrokersResponseFormGroup() {
		return new FormGroup<ListBrokersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about all brokers. */
	export interface BrokerSummary {
		BrokerArn?: string;
		BrokerId?: string;
		BrokerName?: string;
		BrokerState?: BrokerState;
		Created?: Date;

		/** Required */
		DeploymentMode: DeploymentMode;

		/** Required */
		EngineType: EngineType;
		HostInstanceType?: string;
	}

	/** Returns information about all brokers. */
	export interface BrokerSummaryFormProperties {
		BrokerArn: FormControl<string | null | undefined>,
		BrokerId: FormControl<string | null | undefined>,
		BrokerName: FormControl<string | null | undefined>,
		BrokerState: FormControl<BrokerState | null | undefined>,
		Created: FormControl<Date | null | undefined>,

		/** Required */
		DeploymentMode: FormControl<DeploymentMode | null | undefined>,

		/** Required */
		EngineType: FormControl<EngineType | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateBrokerSummaryFormGroup() {
		return new FormGroup<BrokerSummaryFormProperties>({
			BrokerArn: new FormControl<string | null | undefined>(undefined),
			BrokerId: new FormControl<string | null | undefined>(undefined),
			BrokerName: new FormControl<string | null | undefined>(undefined),
			BrokerState: new FormControl<BrokerState | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			DeploymentMode: new FormControl<DeploymentMode | null | undefined>(undefined, [Validators.required]),
			EngineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConfigurationRevisionsResponse {
		ConfigurationId?: string;
		MaxResults?: number | null;
		NextToken?: string;
		Revisions?: Array<ConfigurationRevision>;
	}
	export interface ListConfigurationRevisionsResponseFormProperties {
		ConfigurationId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationRevisionsResponseFormGroup() {
		return new FormGroup<ListConfigurationRevisionsResponseFormProperties>({
			ConfigurationId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConfigurationsResponse {
		Configurations?: Array<Configuration>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListConfigurationsResponseFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationsResponseFormGroup() {
		return new FormGroup<ListConfigurationsResponseFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about all configurations. */
	export interface Configuration {

		/** Required */
		Arn: string;

		/** Required */
		AuthenticationStrategy: AuthenticationStrategy;

		/** Required */
		Created: Date;

		/** Required */
		Description: string;

		/** Required */
		EngineType: EngineType;

		/** Required */
		EngineVersion: string;

		/** Required */
		Id: string;

		/** Required */
		LatestRevision: ConfigurationRevision;

		/** Required */
		Name: string;
		Tags?: __mapOf__string;
	}

	/** Returns information about all configurations. */
	export interface ConfigurationFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		AuthenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,

		/** Required */
		Created: FormControl<Date | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		EngineType: FormControl<EngineType | null | undefined>,

		/** Required */
		EngineVersion: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined, [Validators.required]),
			Created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsResponse {
		Tags?: __mapOf__string;
	}
	export interface ListTagsResponseFormProperties {
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
		});

	}

	export interface ListUsersResponse {
		BrokerId?: string;
		MaxResults?: number | null;
		NextToken?: string;
		Users?: Array<UserSummary>;
	}
	export interface ListUsersResponseFormProperties {
		BrokerId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			BrokerId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PromoteResponse {
		BrokerId?: string;
	}
	export interface PromoteResponseFormProperties {
		BrokerId: FormControl<string | null | undefined>,
	}
	export function CreatePromoteResponseFormGroup() {
		return new FormGroup<PromoteResponseFormProperties>({
			BrokerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RebootBrokerResponse {
	}
	export interface RebootBrokerResponseFormProperties {
	}
	export function CreateRebootBrokerResponseFormGroup() {
		return new FormGroup<RebootBrokerResponseFormProperties>({
		});

	}

	export interface UpdateBrokerResponse {
		AuthenticationStrategy?: AuthenticationStrategy;
		AutoMinorVersionUpgrade?: boolean | null;
		BrokerId?: string;
		Configuration?: ConfigurationId;
		EngineVersion?: string;
		HostInstanceType?: string;
		LdapServerMetadata?: LdapServerMetadataOutput;
		Logs?: Logs;
		MaintenanceWindowStartTime?: WeeklyStartTime;
		SecurityGroups?: Array<string>;
		DataReplicationMetadata?: DataReplicationMetadataOutput;
		DataReplicationMode?: DataReplicationMode;
		PendingDataReplicationMetadata?: DataReplicationMetadataOutput;
		PendingDataReplicationMode?: DataReplicationMode;
	}
	export interface UpdateBrokerResponseFormProperties {
		AuthenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		BrokerId: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
		DataReplicationMode: FormControl<DataReplicationMode | null | undefined>,
		PendingDataReplicationMode: FormControl<DataReplicationMode | null | undefined>,
	}
	export function CreateUpdateBrokerResponseFormGroup() {
		return new FormGroup<UpdateBrokerResponseFormProperties>({
			AuthenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			BrokerId: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
			DataReplicationMode: new FormControl<DataReplicationMode | null | undefined>(undefined),
			PendingDataReplicationMode: new FormControl<DataReplicationMode | null | undefined>(undefined),
		});

	}


	/** The list of information about logs to be enabled for the specified broker. */
	export interface Logs {
		Audit?: boolean | null;
		General?: boolean | null;
	}

	/** The list of information about logs to be enabled for the specified broker. */
	export interface LogsFormProperties {
		Audit: FormControl<boolean | null | undefined>,
		General: FormControl<boolean | null | undefined>,
	}
	export function CreateLogsFormGroup() {
		return new FormGroup<LogsFormProperties>({
			Audit: new FormControl<boolean | null | undefined>(undefined),
			General: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateConfigurationResponse {
		Arn?: string;
		Created?: Date;
		Id?: string;
		LatestRevision?: ConfigurationRevision;
		Name?: string;
		Warnings?: Array<SanitizationWarning>;
	}
	export interface UpdateConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationResponseFormGroup() {
		return new FormGroup<UpdateConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about the configuration element or attribute that was sanitized in the configuration. */
	export interface SanitizationWarning {
		AttributeName?: string;
		ElementName?: string;

		/** Required */
		Reason: SanitizationWarningReason;
	}

	/** Returns information about the configuration element or attribute that was sanitized in the configuration. */
	export interface SanitizationWarningFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		ElementName: FormControl<string | null | undefined>,

		/** Required */
		Reason: FormControl<SanitizationWarningReason | null | undefined>,
	}
	export function CreateSanitizationWarningFormGroup() {
		return new FormGroup<SanitizationWarningFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			ElementName: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<SanitizationWarningReason | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The reason for which the configuration elements or attributes were sanitized. */
	export enum SanitizationWarningReason { DISALLOWED_ELEMENT_REMOVED = 'DISALLOWED_ELEMENT_REMOVED', DISALLOWED_ATTRIBUTE_REMOVED = 'DISALLOWED_ATTRIBUTE_REMOVED', INVALID_ATTRIBUTE_VALUE_REMOVED = 'INVALID_ATTRIBUTE_VALUE_REMOVED' }

	export interface UpdateUserResponse {
	}
	export interface UpdateUserResponseFormProperties {
	}
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
		});

	}


	/** <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important> */
	export interface LdapServerMetadataInput {

		/** Required */
		Hosts: Array<string>;

		/** Required */
		RoleBase: string;
		RoleName?: string;

		/** Required */
		RoleSearchMatching: string;
		RoleSearchSubtree?: boolean | null;

		/** Required */
		ServiceAccountPassword: string;

		/** Required */
		ServiceAccountUsername: string;

		/** Required */
		UserBase: string;
		UserRoleName?: string;

		/** Required */
		UserSearchMatching: string;
		UserSearchSubtree?: boolean | null;
	}

	/** <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important> */
	export interface LdapServerMetadataInputFormProperties {

		/** Required */
		RoleBase: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,

		/** Required */
		RoleSearchMatching: FormControl<string | null | undefined>,
		RoleSearchSubtree: FormControl<boolean | null | undefined>,

		/** Required */
		ServiceAccountPassword: FormControl<string | null | undefined>,

		/** Required */
		ServiceAccountUsername: FormControl<string | null | undefined>,

		/** Required */
		UserBase: FormControl<string | null | undefined>,
		UserRoleName: FormControl<string | null | undefined>,

		/** Required */
		UserSearchMatching: FormControl<string | null | undefined>,
		UserSearchSubtree: FormControl<boolean | null | undefined>,
	}
	export function CreateLdapServerMetadataInputFormGroup() {
		return new FormGroup<LdapServerMetadataInputFormProperties>({
			RoleBase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleName: new FormControl<string | null | undefined>(undefined),
			RoleSearchMatching: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleSearchSubtree: new FormControl<boolean | null | undefined>(undefined),
			ServiceAccountPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceAccountUsername: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserBase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserRoleName: new FormControl<string | null | undefined>(undefined),
			UserSearchMatching: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserSearchSubtree: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Creates a broker using the specified properties. */
	export interface CreateBrokerRequest {
		AuthenticationStrategy?: AuthenticationStrategy;

		/** Required */
		AutoMinorVersionUpgrade: boolean;

		/** Required */
		BrokerName: string;
		Configuration?: ConfigurationId;
		CreatorRequestId?: string;

		/** Required */
		DeploymentMode: DeploymentMode;
		EncryptionOptions?: EncryptionOptions;

		/** Required */
		EngineType: EngineType;

		/** Required */
		EngineVersion: string;

		/** Required */
		HostInstanceType: string;
		LdapServerMetadata?: LdapServerMetadataInput;
		Logs?: Logs;
		MaintenanceWindowStartTime?: WeeklyStartTime;

		/** Required */
		PubliclyAccessible: boolean;
		SecurityGroups?: Array<string>;
		StorageType?: BrokerStorageType;
		SubnetIds?: Array<string>;
		Tags?: __mapOf__string;

		/** Required */
		Users: Array<User>;
		DataReplicationMode?: DataReplicationMode;
		DataReplicationPrimaryBrokerArn?: string;
	}

	/** Creates a broker using the specified properties. */
	export interface CreateBrokerRequestFormProperties {
		AuthenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,

		/** Required */
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,

		/** Required */
		BrokerName: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,

		/** Required */
		DeploymentMode: FormControl<DeploymentMode | null | undefined>,

		/** Required */
		EngineType: FormControl<EngineType | null | undefined>,

		/** Required */
		EngineVersion: FormControl<string | null | undefined>,

		/** Required */
		HostInstanceType: FormControl<string | null | undefined>,

		/** Required */
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		StorageType: FormControl<BrokerStorageType | null | undefined>,
		DataReplicationMode: FormControl<DataReplicationMode | null | undefined>,
		DataReplicationPrimaryBrokerArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBrokerRequestFormGroup() {
		return new FormGroup<CreateBrokerRequestFormProperties>({
			AuthenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			BrokerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			DeploymentMode: new FormControl<DeploymentMode | null | undefined>(undefined, [Validators.required]),
			EngineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StorageType: new FormControl<BrokerStorageType | null | undefined>(undefined),
			DataReplicationMode: new FormControl<DataReplicationMode | null | undefined>(undefined),
			DataReplicationPrimaryBrokerArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version). */
	export interface CreateConfigurationRequest {
		AuthenticationStrategy?: AuthenticationStrategy;

		/** Required */
		EngineType: EngineType;

		/** Required */
		EngineVersion: string;

		/** Required */
		Name: string;
		Tags?: __mapOf__string;
	}

	/** Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version). */
	export interface CreateConfigurationRequestFormProperties {
		AuthenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,

		/** Required */
		EngineType: FormControl<EngineType | null | undefined>,

		/** Required */
		EngineVersion: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationRequestFormGroup() {
		return new FormGroup<CreateConfigurationRequestFormProperties>({
			AuthenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			EngineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A map of the key-value pairs for the resource tag. */
	export interface CreateTagsRequest {
		Tags?: __mapOf__string;
	}

	/** A map of the key-value pairs for the resource tag. */
	export interface CreateTagsRequestFormProperties {
	}
	export function CreateCreateTagsRequestFormGroup() {
		return new FormGroup<CreateTagsRequestFormProperties>({
		});

	}


	/** Creates a new ActiveMQ user. */
	export interface CreateUserRequest {
		ConsoleAccess?: boolean | null;
		Groups?: Array<string>;

		/** Required */
		Password: string;
		ReplicationUser?: boolean | null;
	}

	/** Creates a new ActiveMQ user. */
	export interface CreateUserRequestFormProperties {
		ConsoleAccess: FormControl<boolean | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
		ReplicationUser: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			ConsoleAccess: new FormControl<boolean | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationUser: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteBrokerRequest {
	}
	export interface DeleteBrokerRequestFormProperties {
	}
	export function CreateDeleteBrokerRequestFormGroup() {
		return new FormGroup<DeleteBrokerRequestFormProperties>({
		});

	}

	export interface DeleteTagsRequest {
	}
	export interface DeleteTagsRequestFormProperties {
	}
	export function CreateDeleteTagsRequestFormGroup() {
		return new FormGroup<DeleteTagsRequestFormProperties>({
		});

	}

	export interface DeleteUserRequest {
	}
	export interface DeleteUserRequestFormProperties {
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
		});

	}

	export interface DescribeBrokerEngineTypesRequest {
	}
	export interface DescribeBrokerEngineTypesRequestFormProperties {
	}
	export function CreateDescribeBrokerEngineTypesRequestFormGroup() {
		return new FormGroup<DescribeBrokerEngineTypesRequestFormProperties>({
		});

	}

	export interface DescribeBrokerInstanceOptionsRequest {
	}
	export interface DescribeBrokerInstanceOptionsRequestFormProperties {
	}
	export function CreateDescribeBrokerInstanceOptionsRequestFormGroup() {
		return new FormGroup<DescribeBrokerInstanceOptionsRequestFormProperties>({
		});

	}

	export interface DescribeBrokerRequest {
	}
	export interface DescribeBrokerRequestFormProperties {
	}
	export function CreateDescribeBrokerRequestFormGroup() {
		return new FormGroup<DescribeBrokerRequestFormProperties>({
		});

	}

	export interface DescribeConfigurationRequest {
	}
	export interface DescribeConfigurationRequestFormProperties {
	}
	export function CreateDescribeConfigurationRequestFormGroup() {
		return new FormGroup<DescribeConfigurationRequestFormProperties>({
		});

	}

	export interface DescribeConfigurationRevisionRequest {
	}
	export interface DescribeConfigurationRevisionRequestFormProperties {
	}
	export function CreateDescribeConfigurationRevisionRequestFormGroup() {
		return new FormGroup<DescribeConfigurationRevisionRequestFormProperties>({
		});

	}

	export interface DescribeUserRequest {
	}
	export interface DescribeUserRequestFormProperties {
	}
	export function CreateDescribeUserRequestFormGroup() {
		return new FormGroup<DescribeUserRequestFormProperties>({
		});

	}

	export interface ListBrokersRequest {
	}
	export interface ListBrokersRequestFormProperties {
	}
	export function CreateListBrokersRequestFormGroup() {
		return new FormGroup<ListBrokersRequestFormProperties>({
		});

	}

	export interface ListConfigurationRevisionsRequest {
	}
	export interface ListConfigurationRevisionsRequestFormProperties {
	}
	export function CreateListConfigurationRevisionsRequestFormGroup() {
		return new FormGroup<ListConfigurationRevisionsRequestFormProperties>({
		});

	}

	export interface ListConfigurationsRequest {
	}
	export interface ListConfigurationsRequestFormProperties {
	}
	export function CreateListConfigurationsRequestFormGroup() {
		return new FormGroup<ListConfigurationsRequestFormProperties>({
		});

	}

	export interface ListTagsRequest {
	}
	export interface ListTagsRequestFormProperties {
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
		});

	}

	export interface ListUsersRequest {
	}
	export interface ListUsersRequestFormProperties {
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
		});

	}


	/** The Promote mode requested. */
	export enum PromoteMode { SWITCHOVER = 'SWITCHOVER', FAILOVER = 'FAILOVER' }


	/** Promotes a data replication replica broker to the primary broker role. */
	export interface PromoteRequest {

		/** Required */
		Mode: PromoteMode;
	}

	/** Promotes a data replication replica broker to the primary broker role. */
	export interface PromoteRequestFormProperties {

		/** Required */
		Mode: FormControl<PromoteMode | null | undefined>,
	}
	export function CreatePromoteRequestFormGroup() {
		return new FormGroup<PromoteRequestFormProperties>({
			Mode: new FormControl<PromoteMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RebootBrokerRequest {
	}
	export interface RebootBrokerRequestFormProperties {
	}
	export function CreateRebootBrokerRequestFormGroup() {
		return new FormGroup<RebootBrokerRequestFormProperties>({
		});

	}


	/** Updates the broker using the specified properties. */
	export interface UpdateBrokerRequest {
		AuthenticationStrategy?: AuthenticationStrategy;
		AutoMinorVersionUpgrade?: boolean | null;
		Configuration?: ConfigurationId;
		EngineVersion?: string;
		HostInstanceType?: string;
		LdapServerMetadata?: LdapServerMetadataInput;
		Logs?: Logs;
		MaintenanceWindowStartTime?: WeeklyStartTime;
		SecurityGroups?: Array<string>;
		DataReplicationMode?: DataReplicationMode;
	}

	/** Updates the broker using the specified properties. */
	export interface UpdateBrokerRequestFormProperties {
		AuthenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
		DataReplicationMode: FormControl<DataReplicationMode | null | undefined>,
	}
	export function CreateUpdateBrokerRequestFormGroup() {
		return new FormGroup<UpdateBrokerRequestFormProperties>({
			AuthenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
			DataReplicationMode: new FormControl<DataReplicationMode | null | undefined>(undefined),
		});

	}


	/** Updates the specified configuration. */
	export interface UpdateConfigurationRequest {

		/** Required */
		Data: string;
		Description?: string;
	}

	/** Updates the specified configuration. */
	export interface UpdateConfigurationRequestFormProperties {

		/** Required */
		Data: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationRequestFormGroup() {
		return new FormGroup<UpdateConfigurationRequestFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates the information for an ActiveMQ user. */
	export interface UpdateUserRequest {
		ConsoleAccess?: boolean | null;
		Groups?: Array<string>;
		Password?: string;
		ReplicationUser?: boolean | null;
	}

	/** Updates the information for an ActiveMQ user. */
	export interface UpdateUserRequestFormProperties {
		ConsoleAccess: FormControl<boolean | null | undefined>,
		Password: FormControl<string | null | undefined>,
		ReplicationUser: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			ConsoleAccess: new FormControl<boolean | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			ReplicationUser: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a broker. Note: This API is asynchronous.</p> <p>To create a broker, you must either use the AmazonMQFullAccess IAM policy or include the following EC2 permissions in your IAM policy.</p> <ul><li><p>ec2:CreateNetworkInterface</p> <p>This permission is required to allow Amazon MQ to create an elastic network interface (ENI) on behalf of your account.</p></li> <li><p>ec2:CreateNetworkInterfacePermission</p> <p>This permission is required to attach the ENI to the broker instance.</p></li> <li><p>ec2:DeleteNetworkInterface</p></li> <li><p>ec2:DeleteNetworkInterfacePermission</p></li> <li><p>ec2:DetachNetworkInterface</p></li> <li><p>ec2:DescribeInternetGateways</p></li> <li><p>ec2:DescribeNetworkInterfaces</p></li> <li><p>ec2:DescribeNetworkInterfacePermissions</p></li> <li><p>ec2:DescribeRouteTables</p></li> <li><p>ec2:DescribeSecurityGroups</p></li> <li><p>ec2:DescribeSubnets</p></li> <li><p>ec2:DescribeVpcs</p></li></ul> <p>For more information, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/amazon-mq-setting-up.html#create-iam-user">Create an IAM User and Get Your Amazon Web Services Credentials</a> and <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/connecting-to-amazon-mq.html#never-modify-delete-elastic-network-interface">Never Modify or Delete the Amazon MQ Elastic Network Interface</a> in the <i>Amazon MQ Developer Guide</i>.</p>
		 * Post v1/brokers
		 * @return {CreateBrokerResponse} Success
		 */
		CreateBroker(requestBody: CreateBrokerPostBody): Observable<CreateBrokerResponse> {
			return this.http.post<CreateBrokerResponse>(this.baseUri + 'v1/brokers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all brokers.
		 * Get v1/brokers
		 * @param {number} maxResults The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBrokersResponse} Success
		 */
		ListBrokers(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBrokersResponse> {
			return this.http.get<ListBrokersResponse>(this.baseUri + 'v1/brokers?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
		 * Post v1/configurations
		 * @return {CreateConfigurationResponse} Success
		 */
		CreateConfiguration(requestBody: CreateConfigurationPostBody): Observable<CreateConfigurationResponse> {
			return this.http.post<CreateConfigurationResponse>(this.baseUri + 'v1/configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all configurations.
		 * Get v1/configurations
		 * @param {number} maxResults The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListConfigurationsResponse} Success
		 */
		ListConfigurations(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListConfigurationsResponse> {
			return this.http.get<ListConfigurationsResponse>(this.baseUri + 'v1/configurations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Add a tag to a resource.
		 * Post v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @return {void} 
		 */
		CreateTags(resource_arn: string, requestBody: CreateTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/tags/{resource_arn}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists tags for a resource.
		 * Get v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @return {ListTagsResponse} Success
		 */
		ListTags(resource_arn: string): Observable<ListTagsResponse> {
			return this.http.get<ListTagsResponse>(this.baseUri + 'v1/tags/{resource_arn}', {});
		}

		/**
		 * <p>Creates an ActiveMQ user.</p> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.</p></important>
		 * Post v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(broker_id: string, username: string, requestBody: CreateUserPostBody): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + 'v1/brokers/{broker_id}/users/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an ActiveMQ user.
		 * Delete v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(broker_id: string, username: string): Observable<DeleteUserResponse> {
			return this.http.delete<DeleteUserResponse>(this.baseUri + 'v1/brokers/{broker_id}/users/' + (username == null ? '' : encodeURIComponent(username)), {});
		}

		/**
		 * Returns information about an ActiveMQ user.
		 * Get v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(broker_id: string, username: string): Observable<DescribeUserResponse> {
			return this.http.get<DescribeUserResponse>(this.baseUri + 'v1/brokers/{broker_id}/users/' + (username == null ? '' : encodeURIComponent(username)), {});
		}

		/**
		 * Updates the information for an ActiveMQ user.
		 * Put v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(broker_id: string, username: string, requestBody: UpdateUserPutBody): Observable<UpdateUserResponse> {
			return this.http.put<UpdateUserResponse>(this.baseUri + 'v1/brokers/{broker_id}/users/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a broker. Note: This API is asynchronous.
		 * Delete v1/brokers/{broker_id}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @return {DeleteBrokerResponse} Success
		 */
		DeleteBroker(broker_id: string): Observable<DeleteBrokerResponse> {
			return this.http.delete<DeleteBrokerResponse>(this.baseUri + 'v1/brokers/{broker_id}', {});
		}

		/**
		 * Returns information about the specified broker.
		 * Get v1/brokers/{broker_id}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @return {DescribeBrokerResponse} Success
		 */
		DescribeBroker(broker_id: string): Observable<DescribeBrokerResponse> {
			return this.http.get<DescribeBrokerResponse>(this.baseUri + 'v1/brokers/{broker_id}', {});
		}

		/**
		 * Adds a pending configuration change to a broker.
		 * Put v1/brokers/{broker_id}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @return {UpdateBrokerResponse} Success
		 */
		UpdateBroker(broker_id: string, requestBody: UpdateBrokerPutBody): Observable<UpdateBrokerResponse> {
			return this.http.put<UpdateBrokerResponse>(this.baseUri + 'v1/brokers/{broker_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a resource.
		 * Delete v1/tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @param {Array<string>} tagKeys An array of tag keys to delete
		 * @return {void} 
		 */
		DeleteTags(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/tags/{resource_arn}#tagKeys?' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe available engine types and versions.
		 * Get v1/broker-engine-types
		 * @param {string} engineType Filter response by engine type.
		 * @param {number} maxResults The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {DescribeBrokerEngineTypesResponse} Success
		 */
		DescribeBrokerEngineTypes(engineType: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<DescribeBrokerEngineTypesResponse> {
			return this.http.get<DescribeBrokerEngineTypesResponse>(this.baseUri + 'v1/broker-engine-types?engineType=' + (engineType == null ? '' : encodeURIComponent(engineType)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Describe available broker instance options.
		 * Get v1/broker-instance-options
		 * @param {string} engineType Filter response by engine type.
		 * @param {string} hostInstanceType Filter response by host instance type.
		 * @param {number} maxResults The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @param {string} storageType Filter response by storage type.
		 * @return {DescribeBrokerInstanceOptionsResponse} Success
		 */
		DescribeBrokerInstanceOptions(engineType: string | null | undefined, hostInstanceType: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, storageType: string | null | undefined): Observable<DescribeBrokerInstanceOptionsResponse> {
			return this.http.get<DescribeBrokerInstanceOptionsResponse>(this.baseUri + 'v1/broker-instance-options?engineType=' + (engineType == null ? '' : encodeURIComponent(engineType)) + '&hostInstanceType=' + (hostInstanceType == null ? '' : encodeURIComponent(hostInstanceType)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&storageType=' + (storageType == null ? '' : encodeURIComponent(storageType)), {});
		}

		/**
		 * Returns information about the specified configuration.
		 * Get v1/configurations/{configuration_id}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @return {DescribeConfigurationResponse} Success
		 */
		DescribeConfiguration(configuration_id: string): Observable<DescribeConfigurationResponse> {
			return this.http.get<DescribeConfigurationResponse>(this.baseUri + 'v1/configurations/{configuration_id}', {});
		}

		/**
		 * Updates the specified configuration.
		 * Put v1/configurations/{configuration_id}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @return {UpdateConfigurationResponse} Success
		 */
		UpdateConfiguration(configuration_id: string, requestBody: UpdateConfigurationPutBody): Observable<UpdateConfigurationResponse> {
			return this.http.put<UpdateConfigurationResponse>(this.baseUri + 'v1/configurations/{configuration_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the specified configuration revision for the specified configuration.
		 * Get v1/configurations/{configuration_id}/revisions/{configuration_revision}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @param {string} configuration_revision The revision of the configuration.
		 * @return {DescribeConfigurationRevisionResponse} Success
		 */
		DescribeConfigurationRevision(configuration_id: string, configuration_revision: string): Observable<DescribeConfigurationRevisionResponse> {
			return this.http.get<DescribeConfigurationRevisionResponse>(this.baseUri + 'v1/configurations/{configuration_id}/revisions/{configuration_revision}', {});
		}

		/**
		 * Returns a list of all revisions for the specified configuration.
		 * Get v1/configurations/{configuration_id}/revisions
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @param {number} maxResults The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListConfigurationRevisionsResponse} Success
		 */
		ListConfigurationRevisions(configuration_id: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListConfigurationRevisionsResponse> {
			return this.http.get<ListConfigurationRevisionsResponse>(this.baseUri + 'v1/configurations/{configuration_id}/revisions?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Returns a list of all ActiveMQ users.
		 * Get v1/brokers/{broker_id}/users
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {number} maxResults The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(broker_id: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'v1/brokers/{broker_id}/users?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Promotes a data replication replica broker to the primary broker role.
		 * Post v1/brokers/{broker_id}/promote
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @return {PromoteResponse} Success
		 */
		Promote(broker_id: string, requestBody: PromotePostBody): Observable<PromoteResponse> {
			return this.http.post<PromoteResponse>(this.baseUri + 'v1/brokers/{broker_id}/promote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reboots a broker. Note: This API is asynchronous.
		 * Post v1/brokers/{broker_id}/reboot
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @return {RebootBrokerResponse} Success
		 */
		RebootBroker(broker_id: string): Observable<RebootBrokerResponse> {
			return this.http.post<RebootBrokerResponse>(this.baseUri + 'v1/brokers/{broker_id}/reboot', null, {});
		}
	}

	export interface CreateBrokerPostBody {

		/** Optional. The authentication strategy used to secure the broker. The default is SIMPLE. */
		authenticationStrategy?: AuthenticationStrategy | null;

		/**
		 * Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot. Set to true by default, if no value is specified.
		 * Required
		 */
		autoMinorVersionUpgrade: boolean;

		/**
		 * <p>Required. The broker's name. This value must be unique in your Amazon Web Services account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker names are not intended to be used for private or sensitive data.</p></important>
		 * Required
		 */
		brokerName: string;

		/** A list of information about the configuration. */
		configuration?: CreateBrokerPostBodyConfiguration;

		/** <p>The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action.</p> <note><p>We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.</p></note> */
		creatorRequestId?: string | null;

		/**
		 * The broker's deployment mode.
		 * Required
		 */
		deploymentMode: DeploymentMode;

		/** Encryption options for the broker. */
		encryptionOptions?: CreateBrokerPostBodyEncryptionOptions;

		/**
		 * The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.
		 * Required
		 */
		engineType: EngineType;

		/**
		 * Required. The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.
		 * Required
		 */
		engineVersion: string;

		/**
		 * Required. The broker's instance type.
		 * Required
		 */
		hostInstanceType: string;

		/** <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important> */
		ldapServerMetadata?: CreateBrokerPostBodyLdapServerMetadata;

		/** The list of information about logs to be enabled for the specified broker. */
		logs?: CreateBrokerPostBodyLogs;

		/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		maintenanceWindowStartTime?: CreateBrokerPostBodyMaintenanceWindowStartTime;

		/**
		 * Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided.
		 * Required
		 */
		publiclyAccessible: boolean;

		/** The list of rules (1 minimum, 125 maximum) that authorize connections to brokers. */
		securityGroups?: Array<string>;

		/** <p>The broker's storage type.</p> <important><p>EFS is not supported for RabbitMQ engine type.</p></important> */
		storageType?: BrokerStorageType | null;

		/** <p>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ Amazon MQ for ActiveMQ deployment requires two subnets. A CLUSTER_MULTI_AZ Amazon MQ for RabbitMQ deployment has no subnet requirements when deployed with public accessibility. Deployment without public accessibility requires at least one subnet.</p> <important><p>If you specify subnets in a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html">shared VPC</a> for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your Amazon Web Services account. Amazon MQ will not be able to create VPC endpoints in VPCs that are not owned by your Amazon Web Services account.</p></important> */
		subnetIds?: Array<string>;

		/** Create tags when creating the broker. */
		tags?: {[id: string]: string };

		/**
		 * The list of broker users (persons or applications) who can access queues and topics. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.
		 * Required
		 */
		users: Array<User>;

		/** Specifies whether a broker is a part of a data replication pair. */
		dataReplicationMode?: DataReplicationMode | null;

		/** The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when dataReplicationMode is set to CRDR. */
		dataReplicationPrimaryBrokerArn?: string | null;
	}
	export interface CreateBrokerPostBodyFormProperties {

		/** Optional. The authentication strategy used to secure the broker. The default is SIMPLE. */
		authenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,

		/**
		 * Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot. Set to true by default, if no value is specified.
		 * Required
		 */
		autoMinorVersionUpgrade: FormControl<boolean | null | undefined>,

		/**
		 * <p>Required. The broker's name. This value must be unique in your Amazon Web Services account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker names are not intended to be used for private or sensitive data.</p></important>
		 * Required
		 */
		brokerName: FormControl<string | null | undefined>,

		/** <p>The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action.</p> <note><p>We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.</p></note> */
		creatorRequestId: FormControl<string | null | undefined>,

		/**
		 * The broker's deployment mode.
		 * Required
		 */
		deploymentMode: FormControl<DeploymentMode | null | undefined>,

		/**
		 * The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.
		 * Required
		 */
		engineType: FormControl<EngineType | null | undefined>,

		/**
		 * Required. The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.
		 * Required
		 */
		engineVersion: FormControl<string | null | undefined>,

		/**
		 * Required. The broker's instance type.
		 * Required
		 */
		hostInstanceType: FormControl<string | null | undefined>,

		/**
		 * Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided.
		 * Required
		 */
		publiclyAccessible: FormControl<boolean | null | undefined>,

		/** <p>The broker's storage type.</p> <important><p>EFS is not supported for RabbitMQ engine type.</p></important> */
		storageType: FormControl<BrokerStorageType | null | undefined>,

		/** Create tags when creating the broker. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies whether a broker is a part of a data replication pair. */
		dataReplicationMode: FormControl<DataReplicationMode | null | undefined>,

		/** The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when dataReplicationMode is set to CRDR. */
		dataReplicationPrimaryBrokerArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBrokerPostBodyFormGroup() {
		return new FormGroup<CreateBrokerPostBodyFormProperties>({
			authenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			autoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			brokerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creatorRequestId: new FormControl<string | null | undefined>(undefined),
			deploymentMode: new FormControl<DeploymentMode | null | undefined>(undefined, [Validators.required]),
			engineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			engineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hostInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			storageType: new FormControl<BrokerStorageType | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			dataReplicationMode: new FormControl<DataReplicationMode | null | undefined>(undefined),
			dataReplicationPrimaryBrokerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBrokerPostBodyConfiguration {
		Id?: string;
		Revision?: number | null;
	}
	export interface CreateBrokerPostBodyConfigurationFormProperties {
		Id: FormControl<string | null | undefined>,
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateCreateBrokerPostBodyConfigurationFormGroup() {
		return new FormGroup<CreateBrokerPostBodyConfigurationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateBrokerPostBodyEncryptionOptions {
		KmsKeyId?: string;
		UseAwsOwnedKey?: boolean | null;
	}
	export interface CreateBrokerPostBodyEncryptionOptionsFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,
		UseAwsOwnedKey: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateBrokerPostBodyEncryptionOptionsFormGroup() {
		return new FormGroup<CreateBrokerPostBodyEncryptionOptionsFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			UseAwsOwnedKey: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateBrokerPostBodyLdapServerMetadata {
		Hosts?: Array<string>;
		RoleBase?: string;
		RoleName?: string;
		RoleSearchMatching?: string;
		RoleSearchSubtree?: boolean | null;
		ServiceAccountPassword?: string;
		ServiceAccountUsername?: string;
		UserBase?: string;
		UserRoleName?: string;
		UserSearchMatching?: string;
		UserSearchSubtree?: boolean | null;
	}
	export interface CreateBrokerPostBodyLdapServerMetadataFormProperties {
		RoleBase: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
		RoleSearchMatching: FormControl<string | null | undefined>,
		RoleSearchSubtree: FormControl<boolean | null | undefined>,
		ServiceAccountPassword: FormControl<string | null | undefined>,
		ServiceAccountUsername: FormControl<string | null | undefined>,
		UserBase: FormControl<string | null | undefined>,
		UserRoleName: FormControl<string | null | undefined>,
		UserSearchMatching: FormControl<string | null | undefined>,
		UserSearchSubtree: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateBrokerPostBodyLdapServerMetadataFormGroup() {
		return new FormGroup<CreateBrokerPostBodyLdapServerMetadataFormProperties>({
			RoleBase: new FormControl<string | null | undefined>(undefined),
			RoleName: new FormControl<string | null | undefined>(undefined),
			RoleSearchMatching: new FormControl<string | null | undefined>(undefined),
			RoleSearchSubtree: new FormControl<boolean | null | undefined>(undefined),
			ServiceAccountPassword: new FormControl<string | null | undefined>(undefined),
			ServiceAccountUsername: new FormControl<string | null | undefined>(undefined),
			UserBase: new FormControl<string | null | undefined>(undefined),
			UserRoleName: new FormControl<string | null | undefined>(undefined),
			UserSearchMatching: new FormControl<string | null | undefined>(undefined),
			UserSearchSubtree: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateBrokerPostBodyLogs {
		Audit?: boolean | null;
		General?: boolean | null;
	}
	export interface CreateBrokerPostBodyLogsFormProperties {
		Audit: FormControl<boolean | null | undefined>,
		General: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateBrokerPostBodyLogsFormGroup() {
		return new FormGroup<CreateBrokerPostBodyLogsFormProperties>({
			Audit: new FormControl<boolean | null | undefined>(undefined),
			General: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateBrokerPostBodyMaintenanceWindowStartTime {
		DayOfWeek?: DayOfWeek;
		TimeOfDay?: string;
		TimeZone?: string;
	}
	export interface CreateBrokerPostBodyMaintenanceWindowStartTimeFormProperties {
		DayOfWeek: FormControl<DayOfWeek | null | undefined>,
		TimeOfDay: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateCreateBrokerPostBodyMaintenanceWindowStartTimeFormGroup() {
		return new FormGroup<CreateBrokerPostBodyMaintenanceWindowStartTimeFormProperties>({
			DayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
			TimeOfDay: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationPostBody {

		/** Optional. The authentication strategy used to secure the broker. The default is SIMPLE. */
		authenticationStrategy?: AuthenticationStrategy | null;

		/**
		 * The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.
		 * Required
		 */
		engineType: EngineType;

		/**
		 * Required. The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.
		 * Required
		 */
		engineVersion: string;

		/**
		 * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
		 * Required
		 */
		name: string;

		/** Create tags when creating the configuration. */
		tags?: {[id: string]: string };
	}
	export interface CreateConfigurationPostBodyFormProperties {

		/** Optional. The authentication strategy used to secure the broker. The default is SIMPLE. */
		authenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,

		/**
		 * The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.
		 * Required
		 */
		engineType: FormControl<EngineType | null | undefined>,

		/**
		 * Required. The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.
		 * Required
		 */
		engineVersion: FormControl<string | null | undefined>,

		/**
		 * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Create tags when creating the configuration. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateConfigurationPostBodyFormProperties>({
			authenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			engineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			engineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateTagsPostBody {

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}
	export interface CreateTagsPostBodyFormProperties {

		/** The key-value pair for the resource tag. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateTagsPostBodyFormGroup() {
		return new FormGroup<CreateTagsPostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateUserPostBody {

		/** Enables access to the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess?: boolean | null;

		/** The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		groups?: Array<string>;

		/**
		 * Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).
		 * Required
		 */
		password: string;

		/** Defines if this user is intended for CRDR replication purposes. */
		replicationUser?: boolean | null;
	}
	export interface CreateUserPostBodyFormProperties {

		/** Enables access to the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess: FormControl<boolean | null | undefined>,

		/**
		 * Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/** Defines if this user is intended for CRDR replication purposes. */
		replicationUser: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateUserPostBodyFormGroup() {
		return new FormGroup<CreateUserPostBodyFormProperties>({
			consoleAccess: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replicationUser: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateUserPutBody {

		/** Enables access to the the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess?: boolean | null;

		/** The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		groups?: Array<string>;

		/** The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=). */
		password?: string | null;

		/** Defines whether the user is intended for data replication. */
		replicationUser?: boolean | null;
	}
	export interface UpdateUserPutBodyFormProperties {

		/** Enables access to the the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess: FormControl<boolean | null | undefined>,

		/** The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=). */
		password: FormControl<string | null | undefined>,

		/** Defines whether the user is intended for data replication. */
		replicationUser: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateUserPutBodyFormGroup() {
		return new FormGroup<UpdateUserPutBodyFormProperties>({
			consoleAccess: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			replicationUser: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateBrokerPutBody {

		/** Optional. The authentication strategy used to secure the broker. The default is SIMPLE. */
		authenticationStrategy?: AuthenticationStrategy | null;

		/** Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot. */
		autoMinorVersionUpgrade?: boolean | null;

		/** A list of information about the configuration. */
		configuration?: UpdateBrokerPutBodyConfiguration;

		/** The broker engine version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>. */
		engineVersion?: string | null;

		/** The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>. */
		hostInstanceType?: string | null;

		/** <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important> */
		ldapServerMetadata?: UpdateBrokerPutBodyLdapServerMetadata;

		/** The list of information about logs to be enabled for the specified broker. */
		logs?: UpdateBrokerPutBodyLogs;

		/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		maintenanceWindowStartTime?: UpdateBrokerPutBodyMaintenanceWindowStartTime;

		/** The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers. */
		securityGroups?: Array<string>;

		/** Specifies whether a broker is a part of a data replication pair. */
		dataReplicationMode?: DataReplicationMode | null;
	}
	export interface UpdateBrokerPutBodyFormProperties {

		/** Optional. The authentication strategy used to secure the broker. The default is SIMPLE. */
		authenticationStrategy: FormControl<AuthenticationStrategy | null | undefined>,

		/** Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot. */
		autoMinorVersionUpgrade: FormControl<boolean | null | undefined>,

		/** The broker engine version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>. */
		engineVersion: FormControl<string | null | undefined>,

		/** The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>. */
		hostInstanceType: FormControl<string | null | undefined>,

		/** Specifies whether a broker is a part of a data replication pair. */
		dataReplicationMode: FormControl<DataReplicationMode | null | undefined>,
	}
	export function CreateUpdateBrokerPutBodyFormGroup() {
		return new FormGroup<UpdateBrokerPutBodyFormProperties>({
			authenticationStrategy: new FormControl<AuthenticationStrategy | null | undefined>(undefined),
			autoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			hostInstanceType: new FormControl<string | null | undefined>(undefined),
			dataReplicationMode: new FormControl<DataReplicationMode | null | undefined>(undefined),
		});

	}

	export interface UpdateBrokerPutBodyConfiguration {
		Id?: string;
		Revision?: number | null;
	}
	export interface UpdateBrokerPutBodyConfigurationFormProperties {
		Id: FormControl<string | null | undefined>,
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBrokerPutBodyConfigurationFormGroup() {
		return new FormGroup<UpdateBrokerPutBodyConfigurationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateBrokerPutBodyLdapServerMetadata {
		Hosts?: Array<string>;
		RoleBase?: string;
		RoleName?: string;
		RoleSearchMatching?: string;
		RoleSearchSubtree?: boolean | null;
		ServiceAccountPassword?: string;
		ServiceAccountUsername?: string;
		UserBase?: string;
		UserRoleName?: string;
		UserSearchMatching?: string;
		UserSearchSubtree?: boolean | null;
	}
	export interface UpdateBrokerPutBodyLdapServerMetadataFormProperties {
		RoleBase: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
		RoleSearchMatching: FormControl<string | null | undefined>,
		RoleSearchSubtree: FormControl<boolean | null | undefined>,
		ServiceAccountPassword: FormControl<string | null | undefined>,
		ServiceAccountUsername: FormControl<string | null | undefined>,
		UserBase: FormControl<string | null | undefined>,
		UserRoleName: FormControl<string | null | undefined>,
		UserSearchMatching: FormControl<string | null | undefined>,
		UserSearchSubtree: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateBrokerPutBodyLdapServerMetadataFormGroup() {
		return new FormGroup<UpdateBrokerPutBodyLdapServerMetadataFormProperties>({
			RoleBase: new FormControl<string | null | undefined>(undefined),
			RoleName: new FormControl<string | null | undefined>(undefined),
			RoleSearchMatching: new FormControl<string | null | undefined>(undefined),
			RoleSearchSubtree: new FormControl<boolean | null | undefined>(undefined),
			ServiceAccountPassword: new FormControl<string | null | undefined>(undefined),
			ServiceAccountUsername: new FormControl<string | null | undefined>(undefined),
			UserBase: new FormControl<string | null | undefined>(undefined),
			UserRoleName: new FormControl<string | null | undefined>(undefined),
			UserSearchMatching: new FormControl<string | null | undefined>(undefined),
			UserSearchSubtree: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateBrokerPutBodyLogs {
		Audit?: boolean | null;
		General?: boolean | null;
	}
	export interface UpdateBrokerPutBodyLogsFormProperties {
		Audit: FormControl<boolean | null | undefined>,
		General: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateBrokerPutBodyLogsFormGroup() {
		return new FormGroup<UpdateBrokerPutBodyLogsFormProperties>({
			Audit: new FormControl<boolean | null | undefined>(undefined),
			General: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateBrokerPutBodyMaintenanceWindowStartTime {
		DayOfWeek?: DayOfWeek;
		TimeOfDay?: string;
		TimeZone?: string;
	}
	export interface UpdateBrokerPutBodyMaintenanceWindowStartTimeFormProperties {
		DayOfWeek: FormControl<DayOfWeek | null | undefined>,
		TimeOfDay: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerPutBodyMaintenanceWindowStartTimeFormGroup() {
		return new FormGroup<UpdateBrokerPutBodyMaintenanceWindowStartTimeFormProperties>({
			DayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
			TimeOfDay: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConfigurationPutBody {

		/**
		 * Amazon MQ for Active MQ: The base64-encoded XML configuration. Amazon MQ for RabbitMQ: the base64-encoded Cuttlefish configuration.
		 * Required
		 */
		data: string;

		/** The description of the configuration. */
		description?: string | null;
	}
	export interface UpdateConfigurationPutBodyFormProperties {

		/**
		 * Amazon MQ for Active MQ: The base64-encoded XML configuration. Amazon MQ for RabbitMQ: the base64-encoded Cuttlefish configuration.
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/** The description of the configuration. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateConfigurationPutBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PromotePostBody {

		/**
		 * The Promote mode requested.
		 * Required
		 */
		mode: PromoteMode;
	}
	export interface PromotePostBodyFormProperties {

		/**
		 * The Promote mode requested.
		 * Required
		 */
		mode: FormControl<PromoteMode | null | undefined>,
	}
	export function CreatePromotePostBodyFormGroup() {
		return new FormGroup<PromotePostBodyFormProperties>({
			mode: new FormControl<PromoteMode | null | undefined>(undefined, [Validators.required]),
		});

	}

}

