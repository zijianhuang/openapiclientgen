import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateBrokerResponse {
		BrokerArn?: string | null;
		BrokerId?: string | null;
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

	export enum DayOfWeek { MONDAY = 0, TUESDAY = 1, WEDNESDAY = 2, THURSDAY = 3, FRIDAY = 4, SATURDAY = 5, SUNDAY = 6 }


	/** An ActiveMQ user associated with the broker. */
	export interface User {
		ConsoleAccess?: boolean | null;
		Groups?: Array<string>;
		Password?: string | null;
		Username?: string | null;
	}

	/** An ActiveMQ user associated with the broker. */
	export interface UserFormProperties {
		ConsoleAccess: FormControl<boolean | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			ConsoleAccess: new FormControl<boolean | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
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
		Arn?: string | null;
		Created?: Date | null;
		Id?: string | null;

		/** Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string | null;
	}
	export interface CreateConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationResponseFormGroup() {
		return new FormGroup<CreateConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about the specified configuration revision. */
	export interface ConfigurationRevision {
		Created?: Date | null;
		Description?: string | null;
		Revision?: number | null;
	}

	/** Returns information about the specified configuration revision. */
	export interface ConfigurationRevisionFormProperties {
		Created: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateConfigurationRevisionFormGroup() {
		return new FormGroup<ConfigurationRevisionFormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
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
		BrokerId?: string | null;
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
		AutoMinorVersionUpgrade?: boolean | null;
		BrokerArn?: string | null;
		BrokerId?: string | null;
		BrokerInstances?: Array<BrokerInstance>;
		BrokerName?: string | null;

		/** The status of the broker. */
		BrokerState?: DescribeBrokerResponseBrokerState | null;

		/** Broker configuration information */
		Configurations?: Configurations;
		Created?: Date | null;

		/** The deployment mode of the broker. */
		DeploymentMode?: DescribeBrokerResponseDeploymentMode | null;

		/** Encryption options for the broker. */
		EncryptionOptions?: EncryptionOptions;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType | null;
		EngineVersion?: string | null;
		HostInstanceType?: string | null;

		/** The list of information about logs currently enabled and pending to be deployed for the specified broker. */
		Logs?: LogsSummary;

		/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		MaintenanceWindowStartTime?: WeeklyStartTime;
		PendingEngineVersion?: string | null;
		PendingHostInstanceType?: string | null;
		PendingSecurityGroups?: Array<string>;
		PubliclyAccessible?: boolean | null;
		SecurityGroups?: Array<string>;

		/** The storage type of the broker. */
		StorageType?: DescribeBrokerResponseStorageType | null;
		SubnetIds?: Array<string>;
		Tags?: __mapOf__string;
		Users?: Array<UserSummary>;
	}
	export interface DescribeBrokerResponseFormProperties {
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		BrokerArn: FormControl<string | null | undefined>,
		BrokerId: FormControl<string | null | undefined>,
		BrokerName: FormControl<string | null | undefined>,

		/** The status of the broker. */
		BrokerState: FormControl<DescribeBrokerResponseBrokerState | null | undefined>,
		Created: FormControl<Date | null | undefined>,

		/** The deployment mode of the broker. */
		DeploymentMode: FormControl<DescribeBrokerResponseDeploymentMode | null | undefined>,

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType: FormControl<DescribeBrokerResponseEngineType | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
		PendingEngineVersion: FormControl<string | null | undefined>,
		PendingHostInstanceType: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,

		/** The storage type of the broker. */
		StorageType: FormControl<DescribeBrokerResponseStorageType | null | undefined>,
	}
	export function CreateDescribeBrokerResponseFormGroup() {
		return new FormGroup<DescribeBrokerResponseFormProperties>({
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			BrokerArn: new FormControl<string | null | undefined>(undefined),
			BrokerId: new FormControl<string | null | undefined>(undefined),
			BrokerName: new FormControl<string | null | undefined>(undefined),
			BrokerState: new FormControl<DescribeBrokerResponseBrokerState | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			DeploymentMode: new FormControl<DescribeBrokerResponseDeploymentMode | null | undefined>(undefined),
			EngineType: new FormControl<DescribeBrokerResponseEngineType | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
			PendingEngineVersion: new FormControl<string | null | undefined>(undefined),
			PendingHostInstanceType: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			StorageType: new FormControl<DescribeBrokerResponseStorageType | null | undefined>(undefined),
		});

	}


	/** Returns information about all brokers. */
	export interface BrokerInstance {
		ConsoleURL?: string | null;
		Endpoints?: Array<string>;
		IpAddress?: string | null;
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

	export enum DescribeBrokerResponseBrokerState { CREATION_IN_PROGRESS = 0, CREATION_FAILED = 1, DELETION_IN_PROGRESS = 2, RUNNING = 3, REBOOT_IN_PROGRESS = 4 }


	/** Broker configuration information */
	export interface Configurations {

		/** A list of information about the configuration. */
		Current?: ConfigurationId;
		History?: Array<ConfigurationId>;

		/** A list of information about the configuration. */
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
		Id?: string | null;
		Revision?: number | null;
	}

	/** A list of information about the configuration. */
	export interface ConfigurationIdFormProperties {
		Id: FormControl<string | null | undefined>,
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateConfigurationIdFormGroup() {
		return new FormGroup<ConfigurationIdFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DescribeBrokerResponseDeploymentMode { SINGLE_INSTANCE = 0, ACTIVE_STANDBY_MULTI_AZ = 1 }


	/** Encryption options for the broker. */
	export interface EncryptionOptions {
		KmsKeyId?: string | null;

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

	export enum DescribeBrokerResponseEngineType { ACTIVEMQ = 0 }


	/** The list of information about logs currently enabled and pending to be deployed for the specified broker. */
	export interface LogsSummary {
		Audit?: boolean | null;
		AuditLogGroup?: string | null;
		General?: boolean | null;
		GeneralLogGroup?: string | null;

		/** The list of information about logs to be enabled for the specified broker. */
		Pending?: PendingLogs;
	}

	/** The list of information about logs currently enabled and pending to be deployed for the specified broker. */
	export interface LogsSummaryFormProperties {
		Audit: FormControl<boolean | null | undefined>,
		AuditLogGroup: FormControl<string | null | undefined>,
		General: FormControl<boolean | null | undefined>,
		GeneralLogGroup: FormControl<string | null | undefined>,
	}
	export function CreateLogsSummaryFormGroup() {
		return new FormGroup<LogsSummaryFormProperties>({
			Audit: new FormControl<boolean | null | undefined>(undefined),
			AuditLogGroup: new FormControl<string | null | undefined>(undefined),
			General: new FormControl<boolean | null | undefined>(undefined),
			GeneralLogGroup: new FormControl<string | null | undefined>(undefined),
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
		DayOfWeek?: DayOfWeek | null;
		TimeOfDay?: string | null;
		TimeZone?: string | null;
	}

	/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
	export interface WeeklyStartTimeFormProperties {
		DayOfWeek: FormControl<DayOfWeek | null | undefined>,
		TimeOfDay: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
	}
	export function CreateWeeklyStartTimeFormGroup() {
		return new FormGroup<WeeklyStartTimeFormProperties>({
			DayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
			TimeOfDay: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeBrokerResponseStorageType { EBS = 0, EFS = 1 }

	export interface __mapOf__string {
	}
	export interface __mapOf__stringFormProperties {
	}
	export function Create__mapOf__stringFormGroup() {
		return new FormGroup<__mapOf__stringFormProperties>({
		});

	}


	/** Returns a list of all ActiveMQ users. */
	export interface UserSummary {

		/** The type of change pending for the ActiveMQ user. */
		PendingChange?: UserSummaryPendingChange | null;
		Username?: string | null;
	}

	/** Returns a list of all ActiveMQ users. */
	export interface UserSummaryFormProperties {

		/** The type of change pending for the ActiveMQ user. */
		PendingChange: FormControl<UserSummaryPendingChange | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateUserSummaryFormGroup() {
		return new FormGroup<UserSummaryFormProperties>({
			PendingChange: new FormControl<UserSummaryPendingChange | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserSummaryPendingChange { CREATE = 0, UPDATE = 1, DELETE = 2 }

	export interface DescribeBrokerEngineTypesResponse {
		BrokerEngineTypes?: Array<BrokerEngineType>;

		/**
		 * Minimum: 5
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeBrokerEngineTypesResponseFormProperties {

		/**
		 * Minimum: 5
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBrokerEngineTypesResponseFormGroup() {
		return new FormGroup<DescribeBrokerEngineTypesResponseFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Types of broker engines. */
	export interface BrokerEngineType {

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType | null;
		EngineVersions?: Array<EngineVersion>;
	}

	/** Types of broker engines. */
	export interface BrokerEngineTypeFormProperties {

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType: FormControl<DescribeBrokerResponseEngineType | null | undefined>,
	}
	export function CreateBrokerEngineTypeFormGroup() {
		return new FormGroup<BrokerEngineTypeFormProperties>({
			EngineType: new FormControl<DescribeBrokerResponseEngineType | null | undefined>(undefined),
		});

	}


	/** Id of the engine version. */
	export interface EngineVersion {
		Name?: string | null;
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

		/**
		 * Minimum: 5
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeBrokerInstanceOptionsResponseFormProperties {

		/**
		 * Minimum: 5
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBrokerInstanceOptionsResponseFormGroup() {
		return new FormGroup<DescribeBrokerInstanceOptionsResponseFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Option for host instance type. */
	export interface BrokerInstanceOption {
		AvailabilityZones?: Array<AvailabilityZone>;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType | null;
		HostInstanceType?: string | null;

		/** The storage type of the broker. */
		StorageType?: DescribeBrokerResponseStorageType | null;
		SupportedDeploymentModes?: Array<DeploymentMode>;
		SupportedEngineVersions?: Array<string>;
	}

	/** Option for host instance type. */
	export interface BrokerInstanceOptionFormProperties {

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType: FormControl<DescribeBrokerResponseEngineType | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,

		/** The storage type of the broker. */
		StorageType: FormControl<DescribeBrokerResponseStorageType | null | undefined>,
	}
	export function CreateBrokerInstanceOptionFormGroup() {
		return new FormGroup<BrokerInstanceOptionFormProperties>({
			EngineType: new FormControl<DescribeBrokerResponseEngineType | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<DescribeBrokerResponseStorageType | null | undefined>(undefined),
		});

	}


	/** Name of the availability zone. */
	export interface AvailabilityZone {
		Name?: string | null;
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


	/** The deployment mode of the broker. */
	export enum DeploymentMode { SINGLE_INSTANCE = 0, ACTIVE_STANDBY_MULTI_AZ = 1 }

	export interface DescribeConfigurationResponse {
		Arn?: string | null;
		Created?: Date | null;
		Description?: string | null;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType | null;
		EngineVersion?: string | null;
		Id?: string | null;

		/** Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string | null;
		Tags?: __mapOf__string;
	}
	export interface DescribeConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType: FormControl<DescribeBrokerResponseEngineType | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationResponseFormGroup() {
		return new FormGroup<DescribeConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EngineType: new FormControl<DescribeBrokerResponseEngineType | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationRevisionResponse {
		ConfigurationId?: string | null;
		Created?: Date | null;
		Data?: string | null;
		Description?: string | null;
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
		BrokerId?: string | null;
		ConsoleAccess?: boolean | null;
		Groups?: Array<string>;

		/** Returns information about the status of the changes pending for the ActiveMQ user. */
		Pending?: UserPendingChanges;
		Username?: string | null;
	}
	export interface DescribeUserResponseFormProperties {
		BrokerId: FormControl<string | null | undefined>,
		ConsoleAccess: FormControl<boolean | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserResponseFormGroup() {
		return new FormGroup<DescribeUserResponseFormProperties>({
			BrokerId: new FormControl<string | null | undefined>(undefined),
			ConsoleAccess: new FormControl<boolean | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about the status of the changes pending for the ActiveMQ user. */
	export interface UserPendingChanges {
		ConsoleAccess?: boolean | null;
		Groups?: Array<string>;

		/** The type of change pending for the ActiveMQ user. */
		PendingChange?: UserSummaryPendingChange | null;
	}

	/** Returns information about the status of the changes pending for the ActiveMQ user. */
	export interface UserPendingChangesFormProperties {
		ConsoleAccess: FormControl<boolean | null | undefined>,

		/** The type of change pending for the ActiveMQ user. */
		PendingChange: FormControl<UserSummaryPendingChange | null | undefined>,
	}
	export function CreateUserPendingChangesFormGroup() {
		return new FormGroup<UserPendingChangesFormProperties>({
			ConsoleAccess: new FormControl<boolean | null | undefined>(undefined),
			PendingChange: new FormControl<UserSummaryPendingChange | null | undefined>(undefined),
		});

	}

	export interface ListBrokersResponse {
		BrokerSummaries?: Array<BrokerSummary>;
		NextToken?: string | null;
	}
	export interface ListBrokersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBrokersResponseFormGroup() {
		return new FormGroup<ListBrokersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon Resource Name (ARN) of the broker. */
	export interface BrokerSummary {
		BrokerArn?: string | null;
		BrokerId?: string | null;
		BrokerName?: string | null;

		/** The status of the broker. */
		BrokerState?: DescribeBrokerResponseBrokerState | null;
		Created?: Date | null;

		/** The deployment mode of the broker. */
		DeploymentMode?: DescribeBrokerResponseDeploymentMode | null;
		HostInstanceType?: string | null;
	}

	/** The Amazon Resource Name (ARN) of the broker. */
	export interface BrokerSummaryFormProperties {
		BrokerArn: FormControl<string | null | undefined>,
		BrokerId: FormControl<string | null | undefined>,
		BrokerName: FormControl<string | null | undefined>,

		/** The status of the broker. */
		BrokerState: FormControl<DescribeBrokerResponseBrokerState | null | undefined>,
		Created: FormControl<Date | null | undefined>,

		/** The deployment mode of the broker. */
		DeploymentMode: FormControl<DescribeBrokerResponseDeploymentMode | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateBrokerSummaryFormGroup() {
		return new FormGroup<BrokerSummaryFormProperties>({
			BrokerArn: new FormControl<string | null | undefined>(undefined),
			BrokerId: new FormControl<string | null | undefined>(undefined),
			BrokerName: new FormControl<string | null | undefined>(undefined),
			BrokerState: new FormControl<DescribeBrokerResponseBrokerState | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			DeploymentMode: new FormControl<DescribeBrokerResponseDeploymentMode | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConfigurationRevisionsResponse {
		ConfigurationId?: string | null;
		MaxResults?: number | null;
		NextToken?: string | null;
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
		NextToken?: string | null;
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
		Arn?: string | null;
		Created?: Date | null;
		Description?: string | null;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType | null;
		EngineVersion?: string | null;
		Id?: string | null;

		/** Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string | null;
		Tags?: __mapOf__string;
	}

	/** Returns information about all configurations. */
	export interface ConfigurationFormProperties {
		Arn: FormControl<string | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType: FormControl<DescribeBrokerResponseEngineType | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EngineType: new FormControl<DescribeBrokerResponseEngineType | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
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
		BrokerId?: string | null;

		/**
		 * Minimum: 5
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
		Users?: Array<UserSummary>;
	}
	export interface ListUsersResponseFormProperties {
		BrokerId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			BrokerId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
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
		AutoMinorVersionUpgrade?: boolean | null;
		BrokerId?: string | null;

		/** A list of information about the configuration. */
		Configuration?: ConfigurationId;
		EngineVersion?: string | null;
		HostInstanceType?: string | null;

		/** The list of information about logs to be enabled for the specified broker. */
		Logs?: Logs;
		SecurityGroups?: Array<string>;
	}
	export interface UpdateBrokerResponseFormProperties {
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		BrokerId: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerResponseFormGroup() {
		return new FormGroup<UpdateBrokerResponseFormProperties>({
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			BrokerId: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
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
		Arn?: string | null;
		Created?: Date | null;
		Id?: string | null;

		/** Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string | null;
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


	/** Returns information about the XML element or attribute that was sanitized in the configuration. */
	export interface SanitizationWarning {
		AttributeName?: string | null;
		ElementName?: string | null;

		/** The reason for which the XML elements or attributes were sanitized. */
		Reason?: SanitizationWarningReason | null;
	}

	/** Returns information about the XML element or attribute that was sanitized in the configuration. */
	export interface SanitizationWarningFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		ElementName: FormControl<string | null | undefined>,

		/** The reason for which the XML elements or attributes were sanitized. */
		Reason: FormControl<SanitizationWarningReason | null | undefined>,
	}
	export function CreateSanitizationWarningFormGroup() {
		return new FormGroup<SanitizationWarningFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			ElementName: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<SanitizationWarningReason | null | undefined>(undefined),
		});

	}

	export enum SanitizationWarningReason { DISALLOWED_ELEMENT_REMOVED = 0, DISALLOWED_ATTRIBUTE_REMOVED = 1, INVALID_ATTRIBUTE_VALUE_REMOVED = 2 }

	export interface UpdateUserResponse {
	}
	export interface UpdateUserResponseFormProperties {
	}
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
		});

	}


	/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
	export enum EngineType { ACTIVEMQ = 0 }


	/** The storage type of the broker. */
	export enum BrokerStorageType { EBS = 0, EFS = 1 }


	/** The status of the broker. */
	export enum BrokerState { CREATION_IN_PROGRESS = 0, CREATION_FAILED = 1, DELETION_IN_PROGRESS = 2, RUNNING = 3, REBOOT_IN_PROGRESS = 4 }


	/** The type of change pending for the ActiveMQ user. */
	export enum ChangeType { CREATE = 0, UPDATE = 1, DELETE = 2 }


	/** Creates a broker using the specified properties. */
	export interface CreateBrokerRequest {
		AutoMinorVersionUpgrade?: boolean | null;
		BrokerName?: string | null;

		/** A list of information about the configuration. */
		Configuration?: ConfigurationId;
		CreatorRequestId?: string | null;

		/** The deployment mode of the broker. */
		DeploymentMode?: DescribeBrokerResponseDeploymentMode | null;

		/** Encryption options for the broker. */
		EncryptionOptions?: EncryptionOptions;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType | null;
		EngineVersion?: string | null;
		HostInstanceType?: string | null;

		/** The list of information about logs to be enabled for the specified broker. */
		Logs?: Logs;

		/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		MaintenanceWindowStartTime?: WeeklyStartTime;
		PubliclyAccessible?: boolean | null;
		SecurityGroups?: Array<string>;

		/** The storage type of the broker. */
		StorageType?: DescribeBrokerResponseStorageType | null;
		SubnetIds?: Array<string>;
		Tags?: __mapOf__string;
		Users?: Array<User>;
	}

	/** Creates a broker using the specified properties. */
	export interface CreateBrokerRequestFormProperties {
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		BrokerName: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,

		/** The deployment mode of the broker. */
		DeploymentMode: FormControl<DescribeBrokerResponseDeploymentMode | null | undefined>,

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType: FormControl<DescribeBrokerResponseEngineType | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,

		/** The storage type of the broker. */
		StorageType: FormControl<DescribeBrokerResponseStorageType | null | undefined>,
	}
	export function CreateCreateBrokerRequestFormGroup() {
		return new FormGroup<CreateBrokerRequestFormProperties>({
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			BrokerName: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			DeploymentMode: new FormControl<DescribeBrokerResponseDeploymentMode | null | undefined>(undefined),
			EngineType: new FormControl<DescribeBrokerResponseEngineType | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			StorageType: new FormControl<DescribeBrokerResponseStorageType | null | undefined>(undefined),
		});

	}


	/** Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version). */
	export interface CreateConfigurationRequest {

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType | null;
		EngineVersion?: string | null;
		Name?: string | null;
		Tags?: __mapOf__string;
	}

	/** Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version). */
	export interface CreateConfigurationRequestFormProperties {

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType: FormControl<DescribeBrokerResponseEngineType | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationRequestFormGroup() {
		return new FormGroup<CreateConfigurationRequestFormProperties>({
			EngineType: new FormControl<DescribeBrokerResponseEngineType | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
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
		Password?: string | null;
	}

	/** Creates a new ActiveMQ user. */
	export interface CreateUserRequestFormProperties {
		ConsoleAccess: FormControl<boolean | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			ConsoleAccess: new FormControl<boolean | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
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
		AutoMinorVersionUpgrade?: boolean | null;

		/** A list of information about the configuration. */
		Configuration?: ConfigurationId;
		EngineVersion?: string | null;
		HostInstanceType?: string | null;

		/** The list of information about logs to be enabled for the specified broker. */
		Logs?: Logs;
		SecurityGroups?: Array<string>;
	}

	/** Updates the broker using the specified properties. */
	export interface UpdateBrokerRequestFormProperties {
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		HostInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerRequestFormGroup() {
		return new FormGroup<UpdateBrokerRequestFormProperties>({
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			HostInstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates the specified configuration. */
	export interface UpdateConfigurationRequest {
		Data?: string | null;
		Description?: string | null;
	}

	/** Updates the specified configuration. */
	export interface UpdateConfigurationRequestFormProperties {
		Data: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationRequestFormGroup() {
		return new FormGroup<UpdateConfigurationRequestFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates the information for an ActiveMQ user. */
	export interface UpdateUserRequest {
		ConsoleAccess?: boolean | null;
		Groups?: Array<string>;
		Password?: string | null;
	}

	/** Updates the information for an ActiveMQ user. */
	export interface UpdateUserRequestFormProperties {
		ConsoleAccess: FormControl<boolean | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			ConsoleAccess: new FormControl<boolean | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a broker. Note: This API is asynchronous.
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
		 * @return {ListBrokersResponse} Success
		 */
		ListBrokers(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListBrokersResponse> {
			return this.http.get<ListBrokersResponse>(this.baseUri + 'v1/brokers?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
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
		 * @param {number} maxResults The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
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
			return this.http.post(this.baseUri + 'v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists tags for a resource.
		 * Get v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @return {ListTagsResponse} Success
		 */
		ListTags(resource_arn: string): Observable<ListTagsResponse> {
			return this.http.get<ListTagsResponse>(this.baseUri + 'v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * Creates an ActiveMQ user.
		 * Post v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(broker_id: string, username: string, requestBody: CreateUserPostBody): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an ActiveMQ user.
		 * Delete v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(broker_id: string, username: string): Observable<DeleteUserResponse> {
			return this.http.delete<DeleteUserResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), {});
		}

		/**
		 * Returns information about an ActiveMQ user.
		 * Get v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(broker_id: string, username: string): Observable<DescribeUserResponse> {
			return this.http.get<DescribeUserResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), {});
		}

		/**
		 * Updates the information for an ActiveMQ user.
		 * Put v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(broker_id: string, username: string, requestBody: UpdateUserPutBody): Observable<UpdateUserResponse> {
			return this.http.put<UpdateUserResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a broker. Note: This API is asynchronous.
		 * Delete v1/brokers/{broker_id}
		 * @param {string} broker_id The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
		 * @return {DeleteBrokerResponse} Success
		 */
		DeleteBroker(broker_id: string): Observable<DeleteBrokerResponse> {
			return this.http.delete<DeleteBrokerResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)), {});
		}

		/**
		 * Returns information about the specified broker.
		 * Get v1/brokers/{broker_id}
		 * @param {string} broker_id The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
		 * @return {DescribeBrokerResponse} Success
		 */
		DescribeBroker(broker_id: string): Observable<DescribeBrokerResponse> {
			return this.http.get<DescribeBrokerResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)), {});
		}

		/**
		 * Adds a pending configuration change to a broker.
		 * Put v1/brokers/{broker_id}
		 * @param {string} broker_id The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
		 * @return {UpdateBrokerResponse} Success
		 */
		UpdateBroker(broker_id: string, requestBody: UpdateBrokerPutBody): Observable<UpdateBrokerResponse> {
			return this.http.put<UpdateBrokerResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a resource.
		 * Delete v1/tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @param {Array<string>} tagKeys An array of tag keys to delete
		 * @return {void} 
		 */
		DeleteTags(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe available engine types and versions.
		 * Get v1/broker-engine-types
		 * @param {string} engineType Filter response by engine type.
		 * @param {number} maxResults The maximum number of engine types that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
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
		 * @param {number} maxResults The maximum number of instance options that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
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
			return this.http.get<DescribeConfigurationResponse>(this.baseUri + 'v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)), {});
		}

		/**
		 * Updates the specified configuration.
		 * Put v1/configurations/{configuration_id}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @return {UpdateConfigurationResponse} Success
		 */
		UpdateConfiguration(configuration_id: string, requestBody: UpdateConfigurationPutBody): Observable<UpdateConfigurationResponse> {
			return this.http.put<UpdateConfigurationResponse>(this.baseUri + 'v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the specified configuration revision for the specified configuration.
		 * Get v1/configurations/{configuration_id}/revisions/{configuration_revision}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @param {string} configuration_revision The revision of the configuration.
		 * @return {DescribeConfigurationRevisionResponse} Success
		 */
		DescribeConfigurationRevision(configuration_id: string, configuration_revision: string): Observable<DescribeConfigurationRevisionResponse> {
			return this.http.get<DescribeConfigurationRevisionResponse>(this.baseUri + 'v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)) + '/revisions/' + (configuration_revision == null ? '' : encodeURIComponent(configuration_revision)), {});
		}

		/**
		 * Returns a list of all revisions for the specified configuration.
		 * Get v1/configurations/{configuration_id}/revisions
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @param {number} maxResults The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListConfigurationRevisionsResponse} Success
		 */
		ListConfigurationRevisions(configuration_id: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListConfigurationRevisionsResponse> {
			return this.http.get<ListConfigurationRevisionsResponse>(this.baseUri + 'v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)) + '/revisions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Returns a list of all ActiveMQ users.
		 * Get v1/brokers/{broker_id}/users
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {number} maxResults The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(broker_id: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Reboots a broker. Note: This API is asynchronous.
		 * Post v1/brokers/{broker_id}/reboot
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @return {RebootBrokerResponse} Success
		 */
		RebootBroker(broker_id: string): Observable<RebootBrokerResponse> {
			return this.http.post<RebootBrokerResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/reboot', null, {});
		}
	}

	export interface CreateBrokerPostBody {

		/** Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot. */
		autoMinorVersionUpgrade?: boolean | null;

		/** Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters. */
		brokerName?: string | null;

		/** A list of information about the configuration. */
		configuration?: CreateBrokerPostBodyConfiguration;

		/** The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency. */
		creatorRequestId?: string | null;

		/** The deployment mode of the broker. */
		deploymentMode?: DescribeBrokerResponseDeploymentMode | null;

		/** Encryption options for the broker. */
		encryptionOptions?: CreateBrokerPostBodyEncryptionOptions;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		engineType?: DescribeBrokerResponseEngineType | null;

		/** Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion?: string | null;

		/** Required. The broker's instance type. */
		hostInstanceType?: string | null;

		/** The list of information about logs to be enabled for the specified broker. */
		logs?: CreateBrokerPostBodyLogs;

		/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		maintenanceWindowStartTime?: CreateBrokerPostBodyMaintenanceWindowStartTime;

		/** Required. Enables connections from applications outside of the VPC that hosts the broker's subnets. */
		publiclyAccessible?: boolean | null;

		/** The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers. */
		securityGroups?: Array<string>;

		/** The storage type of the broker. */
		storageType?: DescribeBrokerResponseStorageType | null;

		/** The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets. */
		subnetIds?: Array<string>;

		/** Create tags when creating the broker. */
		tags?: {[id: string]: string };

		/** Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		users?: Array<User>;
	}
	export interface CreateBrokerPostBodyFormProperties {

		/** Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot. */
		autoMinorVersionUpgrade: FormControl<boolean | null | undefined>,

		/** Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters. */
		brokerName: FormControl<string | null | undefined>,

		/** The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency. */
		creatorRequestId: FormControl<string | null | undefined>,

		/** The deployment mode of the broker. */
		deploymentMode: FormControl<DescribeBrokerResponseDeploymentMode | null | undefined>,

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		engineType: FormControl<DescribeBrokerResponseEngineType | null | undefined>,

		/** Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion: FormControl<string | null | undefined>,

		/** Required. The broker's instance type. */
		hostInstanceType: FormControl<string | null | undefined>,

		/** Required. Enables connections from applications outside of the VPC that hosts the broker's subnets. */
		publiclyAccessible: FormControl<boolean | null | undefined>,

		/** The storage type of the broker. */
		storageType: FormControl<DescribeBrokerResponseStorageType | null | undefined>,

		/** Create tags when creating the broker. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateBrokerPostBodyFormGroup() {
		return new FormGroup<CreateBrokerPostBodyFormProperties>({
			autoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			brokerName: new FormControl<string | null | undefined>(undefined),
			creatorRequestId: new FormControl<string | null | undefined>(undefined),
			deploymentMode: new FormControl<DescribeBrokerResponseDeploymentMode | null | undefined>(undefined),
			engineType: new FormControl<DescribeBrokerResponseEngineType | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			hostInstanceType: new FormControl<string | null | undefined>(undefined),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			storageType: new FormControl<DescribeBrokerResponseStorageType | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateBrokerPostBodyConfiguration {
		Id?: string | null;
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
		KmsKeyId?: string | null;
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
		DayOfWeek?: DayOfWeek | null;
		TimeOfDay?: string | null;
		TimeZone?: string | null;
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

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		engineType?: DescribeBrokerResponseEngineType | null;

		/** Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion?: string | null;

		/** Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long. */
		name?: string | null;

		/** Create tags when creating the configuration. */
		tags?: {[id: string]: string };
	}
	export interface CreateConfigurationPostBodyFormProperties {

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		engineType: FormControl<DescribeBrokerResponseEngineType | null | undefined>,

		/** Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion: FormControl<string | null | undefined>,

		/** Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long. */
		name: FormControl<string | null | undefined>,

		/** Create tags when creating the configuration. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateConfigurationPostBodyFormProperties>({
			engineType: new FormControl<DescribeBrokerResponseEngineType | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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

		/** Enables access to the the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess?: boolean | null;

		/** The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		groups?: Array<string>;

		/** Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas. */
		password?: string | null;
	}
	export interface CreateUserPostBodyFormProperties {

		/** Enables access to the the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess: FormControl<boolean | null | undefined>,

		/** Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas. */
		password: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPostBodyFormGroup() {
		return new FormGroup<CreateUserPostBodyFormProperties>({
			consoleAccess: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserPutBody {

		/** Enables access to the the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess?: boolean | null;

		/** The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		groups?: Array<string>;

		/** The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas. */
		password?: string | null;
	}
	export interface UpdateUserPutBodyFormProperties {

		/** Enables access to the the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess: FormControl<boolean | null | undefined>,

		/** The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas. */
		password: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserPutBodyFormGroup() {
		return new FormGroup<UpdateUserPutBodyFormProperties>({
			consoleAccess: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBrokerPutBody {

		/** Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot. */
		autoMinorVersionUpgrade?: boolean | null;

		/** A list of information about the configuration. */
		configuration?: UpdateBrokerPutBodyConfiguration;

		/** The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion?: string | null;

		/** The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types */
		hostInstanceType?: string | null;

		/** The list of information about logs to be enabled for the specified broker. */
		logs?: UpdateBrokerPutBodyLogs;

		/** The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers. */
		securityGroups?: Array<string>;
	}
	export interface UpdateBrokerPutBodyFormProperties {

		/** Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot. */
		autoMinorVersionUpgrade: FormControl<boolean | null | undefined>,

		/** The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion: FormControl<string | null | undefined>,

		/** The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types */
		hostInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerPutBodyFormGroup() {
		return new FormGroup<UpdateBrokerPutBodyFormProperties>({
			autoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			hostInstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBrokerPutBodyConfiguration {
		Id?: string | null;
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

	export interface UpdateConfigurationPutBody {

		/** Required. The base64-encoded XML configuration. */
		data?: string | null;

		/** The description of the configuration. */
		description?: string | null;
	}
	export interface UpdateConfigurationPutBodyFormProperties {

		/** Required. The base64-encoded XML configuration. */
		data: FormControl<string | null | undefined>,

		/** The description of the configuration. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateConfigurationPutBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

}

