import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Description of site key vault references. */
	export interface ApiKVReference {
		details?: string | null;
		identityType?: ApiKVReferenceIdentityType | null;
		location?: ApiKVReferenceLocation | null;
		reference?: string | null;
		secretName?: string | null;
		secretVersion?: string | null;
		source?: ApiKVReferenceSource | null;
		status?: ApiKVReferenceStatus | null;
		vaultName?: string | null;
	}

	/** Description of site key vault references. */
	export interface ApiKVReferenceFormProperties {
		details: FormControl<string | null | undefined>,
		identityType: FormControl<ApiKVReferenceIdentityType | null | undefined>,
		location: FormControl<ApiKVReferenceLocation | null | undefined>,
		reference: FormControl<string | null | undefined>,
		secretName: FormControl<string | null | undefined>,
		secretVersion: FormControl<string | null | undefined>,
		source: FormControl<ApiKVReferenceSource | null | undefined>,
		status: FormControl<ApiKVReferenceStatus | null | undefined>,
		vaultName: FormControl<string | null | undefined>,
	}
	export function CreateApiKVReferenceFormGroup() {
		return new FormGroup<ApiKVReferenceFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			identityType: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			location: new FormControl<ApiKVReferenceLocation | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			secretName: new FormControl<string | null | undefined>(undefined),
			secretVersion: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<ApiKVReferenceSource | null | undefined>(undefined),
			status: new FormControl<ApiKVReferenceStatus | null | undefined>(undefined),
			vaultName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiKVReferenceIdentityType { None = 0, SystemAssigned = 1, UserAssigned = 2 }

	export enum ApiKVReferenceLocation { ApplicationSetting = 0 }

	export enum ApiKVReferenceSource { KeyVault = 0 }

	export enum ApiKVReferenceStatus { Initialized = 0, Resolved = 1, InvalidSyntax = 2, MSINotEnabled = 3, VaultNotFound = 4, SecretNotFound = 5, SecretVersionNotFound = 6, AccessToKeyVaultDenied = 7, OtherReasons = 8 }


	/** Application logs configuration. */
	export interface ApplicationLogsConfig {

		/** Application logs azure blob storage configuration. */
		azureBlobStorage?: AzureBlobStorageApplicationLogsConfig;

		/** Application logs to Azure table storage configuration. */
		azureTableStorage?: AzureTableStorageApplicationLogsConfig;

		/** Application logs to file system configuration. */
		fileSystem?: FileSystemApplicationLogsConfig;
	}

	/** Application logs configuration. */
	export interface ApplicationLogsConfigFormProperties {
	}
	export function CreateApplicationLogsConfigFormGroup() {
		return new FormGroup<ApplicationLogsConfigFormProperties>({
		});

	}


	/** Application logs azure blob storage configuration. */
	export interface AzureBlobStorageApplicationLogsConfig {

		/** Log level. */
		level?: AzureBlobStorageApplicationLogsConfigLevel | null;

		/**
		 * Retention in days.
		 * Remove blobs older than X days.
		 * 0 or lower means no retention.
		 */
		retentionInDays?: number | null;

		/** SAS url to a azure blob container with read/write/list/delete permissions. */
		sasUrl?: string | null;
	}

	/** Application logs azure blob storage configuration. */
	export interface AzureBlobStorageApplicationLogsConfigFormProperties {

		/** Log level. */
		level: FormControl<AzureBlobStorageApplicationLogsConfigLevel | null | undefined>,

		/**
		 * Retention in days.
		 * Remove blobs older than X days.
		 * 0 or lower means no retention.
		 */
		retentionInDays: FormControl<number | null | undefined>,

		/** SAS url to a azure blob container with read/write/list/delete permissions. */
		sasUrl: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobStorageApplicationLogsConfigFormGroup() {
		return new FormGroup<AzureBlobStorageApplicationLogsConfigFormProperties>({
			level: new FormControl<AzureBlobStorageApplicationLogsConfigLevel | null | undefined>(undefined),
			retentionInDays: new FormControl<number | null | undefined>(undefined),
			sasUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AzureBlobStorageApplicationLogsConfigLevel { Off = 0, Verbose = 1, Information = 2, Warning = 3, Error = 4 }


	/** Application logs to Azure table storage configuration. */
	export interface AzureTableStorageApplicationLogsConfig {

		/** Log level. */
		level?: AzureBlobStorageApplicationLogsConfigLevel | null;

		/**
		 * SAS URL to an Azure table with add/query/delete permissions.
		 * Required
		 */
		sasUrl: string;
	}

	/** Application logs to Azure table storage configuration. */
	export interface AzureTableStorageApplicationLogsConfigFormProperties {

		/** Log level. */
		level: FormControl<AzureBlobStorageApplicationLogsConfigLevel | null | undefined>,

		/**
		 * SAS URL to an Azure table with add/query/delete permissions.
		 * Required
		 */
		sasUrl: FormControl<string | null | undefined>,
	}
	export function CreateAzureTableStorageApplicationLogsConfigFormGroup() {
		return new FormGroup<AzureTableStorageApplicationLogsConfigFormProperties>({
			level: new FormControl<AzureBlobStorageApplicationLogsConfigLevel | null | undefined>(undefined),
			sasUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Application logs to file system configuration. */
	export interface FileSystemApplicationLogsConfig {

		/** Log level. */
		level?: AzureBlobStorageApplicationLogsConfigLevel | null;
	}

	/** Application logs to file system configuration. */
	export interface FileSystemApplicationLogsConfigFormProperties {

		/** Log level. */
		level: FormControl<AzureBlobStorageApplicationLogsConfigLevel | null | undefined>,
	}
	export function CreateFileSystemApplicationLogsConfigFormGroup() {
		return new FormGroup<FileSystemApplicationLogsConfigFormProperties>({
			level: new FormControl<AzureBlobStorageApplicationLogsConfigLevel | null | undefined>(undefined),
		});

	}


	/** Http logs to azure blob storage configuration. */
	export interface AzureBlobStorageHttpLogsConfig {

		/** True if configuration is enabled, false if it is disabled and null if configuration is not set. */
		enabled?: boolean | null;

		/**
		 * Retention in days.
		 * Remove blobs older than X days.
		 * 0 or lower means no retention.
		 */
		retentionInDays?: number | null;

		/** SAS url to a azure blob container with read/write/list/delete permissions. */
		sasUrl?: string | null;
	}

	/** Http logs to azure blob storage configuration. */
	export interface AzureBlobStorageHttpLogsConfigFormProperties {

		/** True if configuration is enabled, false if it is disabled and null if configuration is not set. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Retention in days.
		 * Remove blobs older than X days.
		 * 0 or lower means no retention.
		 */
		retentionInDays: FormControl<number | null | undefined>,

		/** SAS url to a azure blob container with read/write/list/delete permissions. */
		sasUrl: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobStorageHttpLogsConfigFormGroup() {
		return new FormGroup<AzureBlobStorageHttpLogsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			retentionInDays: new FormControl<number | null | undefined>(undefined),
			sasUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Files or Blob Storage access information value for dictionary storage. */
	export interface AzureStorageInfoValue {

		/** Access key for the storage account. */
		accessKey?: string | null;

		/** Name of the storage account. */
		accountName?: string | null;

		/** Path to mount the storage within the site's runtime environment. */
		mountPath?: string | null;

		/** Name of the file share (container name, for Blob storage). */
		shareName?: string | null;

		/** State of the storage account. */
		state?: AzureStorageInfoValueState | null;

		/** Type of storage. */
		type?: AzureStorageInfoValueType | null;
	}

	/** Azure Files or Blob Storage access information value for dictionary storage. */
	export interface AzureStorageInfoValueFormProperties {

		/** Access key for the storage account. */
		accessKey: FormControl<string | null | undefined>,

		/** Name of the storage account. */
		accountName: FormControl<string | null | undefined>,

		/** Path to mount the storage within the site's runtime environment. */
		mountPath: FormControl<string | null | undefined>,

		/** Name of the file share (container name, for Blob storage). */
		shareName: FormControl<string | null | undefined>,

		/** State of the storage account. */
		state: FormControl<AzureStorageInfoValueState | null | undefined>,

		/** Type of storage. */
		type: FormControl<AzureStorageInfoValueType | null | undefined>,
	}
	export function CreateAzureStorageInfoValueFormGroup() {
		return new FormGroup<AzureStorageInfoValueFormProperties>({
			accessKey: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			mountPath: new FormControl<string | null | undefined>(undefined),
			shareName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AzureStorageInfoValueState | null | undefined>(undefined),
			type: new FormControl<AzureStorageInfoValueType | null | undefined>(undefined),
		});

	}

	export enum AzureStorageInfoValueState { Ok = 0, InvalidCredentials = 1, InvalidShare = 2 }

	export enum AzureStorageInfoValueType { AzureFiles = 0, AzureBlob = 1 }


	/** AzureStorageInfo dictionary resource. */
	export interface AzureStoragePropertyDictionaryResource {

		/** Azure storage accounts. */
		properties?: {[id: string]: AzureStorageInfoValue };
	}

	/** AzureStorageInfo dictionary resource. */
	export interface AzureStoragePropertyDictionaryResourceFormProperties {

		/** Azure storage accounts. */
		properties: FormControl<{[id: string]: AzureStorageInfoValue } | null | undefined>,
	}
	export function CreateAzureStoragePropertyDictionaryResourceFormGroup() {
		return new FormGroup<AzureStoragePropertyDictionaryResourceFormProperties>({
			properties: new FormControl<{[id: string]: AzureStorageInfoValue } | null | undefined>(undefined),
		});

	}


	/** Backup description. */
	export interface BackupItem {

		/** BackupItem resource specific properties */
		properties?: any;
	}

	/** Backup description. */
	export interface BackupItemFormProperties {

		/** BackupItem resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateBackupItemFormGroup() {
		return new FormGroup<BackupItemFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of backup items. */
	export interface BackupItemCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<BackupItem>;
	}

	/** Collection of backup items. */
	export interface BackupItemCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBackupItemCollectionFormGroup() {
		return new FormGroup<BackupItemCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of a backup which will be performed. */
	export interface BackupRequest {

		/** BackupRequest resource specific properties */
		properties?: any;
	}

	/** Description of a backup which will be performed. */
	export interface BackupRequestFormProperties {

		/** BackupRequest resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateBackupRequestFormGroup() {
		return new FormGroup<BackupRequestFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy. */
	export interface BackupSchedule {

		/**
		 * How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
		 * Required
		 */
		frequencyInterval: number;

		/**
		 * The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
		 * Required
		 */
		frequencyUnit: BackupScheduleFrequencyUnit;

		/**
		 * True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
		 * Required
		 */
		keepAtLeastOneBackup: boolean;

		/** Last time when this schedule was triggered. */
		lastExecutionTime?: Date | null;

		/**
		 * After how many days backups should be deleted.
		 * Required
		 */
		retentionPeriodInDays: number;

		/** When the schedule should start working. */
		startTime?: Date | null;
	}

	/** Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy. */
	export interface BackupScheduleFormProperties {

		/**
		 * How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
		 * Required
		 */
		frequencyInterval: FormControl<number | null | undefined>,

		/**
		 * The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7)
		 * Required
		 */
		frequencyUnit: FormControl<BackupScheduleFrequencyUnit | null | undefined>,

		/**
		 * True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
		 * Required
		 */
		keepAtLeastOneBackup: FormControl<boolean | null | undefined>,

		/** Last time when this schedule was triggered. */
		lastExecutionTime: FormControl<Date | null | undefined>,

		/**
		 * After how many days backups should be deleted.
		 * Required
		 */
		retentionPeriodInDays: FormControl<number | null | undefined>,

		/** When the schedule should start working. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateBackupScheduleFormGroup() {
		return new FormGroup<BackupScheduleFormProperties>({
			frequencyInterval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			frequencyUnit: new FormControl<BackupScheduleFrequencyUnit | null | undefined>(undefined, [Validators.required]),
			keepAtLeastOneBackup: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastExecutionTime: new FormControl<Date | null | undefined>(undefined),
			retentionPeriodInDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BackupScheduleFrequencyUnit { Day = 0, Hour = 1 }


	/** Database connection string value to type pair. */
	export interface ConnStringValueTypePair {

		/**
		 * Type of database.
		 * Required
		 */
		type: ConnStringValueTypePairType;

		/**
		 * Value of pair.
		 * Required
		 */
		value: string;
	}

	/** Database connection string value to type pair. */
	export interface ConnStringValueTypePairFormProperties {

		/**
		 * Type of database.
		 * Required
		 */
		type: FormControl<ConnStringValueTypePairType | null | undefined>,

		/**
		 * Value of pair.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateConnStringValueTypePairFormGroup() {
		return new FormGroup<ConnStringValueTypePairFormProperties>({
			type: new FormControl<ConnStringValueTypePairType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnStringValueTypePairType { MySql = 0, SQLServer = 1, SQLAzure = 2, Custom = 3, NotificationHub = 4, ServiceBus = 5, EventHub = 6, ApiHub = 7, DocDb = 8, RedisCache = 9, PostgreSQL = 10 }


	/** String dictionary resource. */
	export interface ConnectionStringDictionary {

		/** Connection strings. */
		properties?: {[id: string]: ConnStringValueTypePair };
	}

	/** String dictionary resource. */
	export interface ConnectionStringDictionaryFormProperties {

		/** Connection strings. */
		properties: FormControl<{[id: string]: ConnStringValueTypePair } | null | undefined>,
	}
	export function CreateConnectionStringDictionaryFormGroup() {
		return new FormGroup<ConnectionStringDictionaryFormProperties>({
			properties: new FormControl<{[id: string]: ConnStringValueTypePair } | null | undefined>(undefined),
		});

	}

	export interface ContainerCpuStatistics {
		cpuUsage?: ContainerCpuUsage;
		onlineCpuCount?: number | null;
		systemCpuUsage?: number | null;
		throttlingData?: ContainerThrottlingData;
	}
	export interface ContainerCpuStatisticsFormProperties {
		onlineCpuCount: FormControl<number | null | undefined>,
		systemCpuUsage: FormControl<number | null | undefined>,
	}
	export function CreateContainerCpuStatisticsFormGroup() {
		return new FormGroup<ContainerCpuStatisticsFormProperties>({
			onlineCpuCount: new FormControl<number | null | undefined>(undefined),
			systemCpuUsage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainerCpuUsage {
		kernelModeUsage?: number | null;
		perCpuUsage?: Array<number>;
		totalUsage?: number | null;
		userModeUsage?: number | null;
	}
	export interface ContainerCpuUsageFormProperties {
		kernelModeUsage: FormControl<number | null | undefined>,
		totalUsage: FormControl<number | null | undefined>,
		userModeUsage: FormControl<number | null | undefined>,
	}
	export function CreateContainerCpuUsageFormGroup() {
		return new FormGroup<ContainerCpuUsageFormProperties>({
			kernelModeUsage: new FormControl<number | null | undefined>(undefined),
			totalUsage: new FormControl<number | null | undefined>(undefined),
			userModeUsage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainerThrottlingData {
		periods?: number | null;
		throttledPeriods?: number | null;
		throttledTime?: number | null;
	}
	export interface ContainerThrottlingDataFormProperties {
		periods: FormControl<number | null | undefined>,
		throttledPeriods: FormControl<number | null | undefined>,
		throttledTime: FormControl<number | null | undefined>,
	}
	export function CreateContainerThrottlingDataFormGroup() {
		return new FormGroup<ContainerThrottlingDataFormProperties>({
			periods: new FormControl<number | null | undefined>(undefined),
			throttledPeriods: new FormControl<number | null | undefined>(undefined),
			throttledTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainerInfo {
		currentCpuStats?: ContainerCpuStatistics;
		currentTimeStamp?: Date | null;
		eth0?: ContainerNetworkInterfaceStatistics;
		id?: string | null;
		memoryStats?: ContainerMemoryStatistics;
		name?: string | null;
		previousCpuStats?: ContainerCpuStatistics;
		previousTimeStamp?: Date | null;
	}
	export interface ContainerInfoFormProperties {
		currentTimeStamp: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		previousTimeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateContainerInfoFormGroup() {
		return new FormGroup<ContainerInfoFormProperties>({
			currentTimeStamp: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			previousTimeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ContainerNetworkInterfaceStatistics {
		rxBytes?: number | null;
		rxDropped?: number | null;
		rxErrors?: number | null;
		rxPackets?: number | null;
		txBytes?: number | null;
		txDropped?: number | null;
		txErrors?: number | null;
		txPackets?: number | null;
	}
	export interface ContainerNetworkInterfaceStatisticsFormProperties {
		rxBytes: FormControl<number | null | undefined>,
		rxDropped: FormControl<number | null | undefined>,
		rxErrors: FormControl<number | null | undefined>,
		rxPackets: FormControl<number | null | undefined>,
		txBytes: FormControl<number | null | undefined>,
		txDropped: FormControl<number | null | undefined>,
		txErrors: FormControl<number | null | undefined>,
		txPackets: FormControl<number | null | undefined>,
	}
	export function CreateContainerNetworkInterfaceStatisticsFormGroup() {
		return new FormGroup<ContainerNetworkInterfaceStatisticsFormProperties>({
			rxBytes: new FormControl<number | null | undefined>(undefined),
			rxDropped: new FormControl<number | null | undefined>(undefined),
			rxErrors: new FormControl<number | null | undefined>(undefined),
			rxPackets: new FormControl<number | null | undefined>(undefined),
			txBytes: new FormControl<number | null | undefined>(undefined),
			txDropped: new FormControl<number | null | undefined>(undefined),
			txErrors: new FormControl<number | null | undefined>(undefined),
			txPackets: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainerMemoryStatistics {
		limit?: number | null;
		maxUsage?: number | null;
		usage?: number | null;
	}
	export interface ContainerMemoryStatisticsFormProperties {
		limit: FormControl<number | null | undefined>,
		maxUsage: FormControl<number | null | undefined>,
		usage: FormControl<number | null | undefined>,
	}
	export function CreateContainerMemoryStatisticsFormGroup() {
		return new FormGroup<ContainerMemoryStatisticsFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			maxUsage: new FormControl<number | null | undefined>(undefined),
			usage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Continuous Web Job Information. */
	export interface ContinuousWebJob {

		/** ContinuousWebJob resource specific properties */
		properties?: any;
	}

	/** Continuous Web Job Information. */
	export interface ContinuousWebJobFormProperties {

		/** ContinuousWebJob resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateContinuousWebJobFormGroup() {
		return new FormGroup<ContinuousWebJobFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Kudu continuous web job information elements. */
	export interface ContinuousWebJobCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<ContinuousWebJob>;
	}

	/** Collection of Kudu continuous web job information elements. */
	export interface ContinuousWebJobCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateContinuousWebJobCollectionFormGroup() {
		return new FormGroup<ContinuousWebJobCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Copy deployment slot parameters. */
	export interface CsmCopySlotEntity {

		/**
		 * Configuration of an App Service app.
		 * Required
		 */
		siteConfig: CsmCopySlotEntitySiteConfig;

		/**
		 * Destination deployment slot during copy operation.
		 * Required
		 */
		targetSlot: string;
	}

	/** Copy deployment slot parameters. */
	export interface CsmCopySlotEntityFormProperties {

		/**
		 * Destination deployment slot during copy operation.
		 * Required
		 */
		targetSlot: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntityFormGroup() {
		return new FormGroup<CsmCopySlotEntityFormProperties>({
			targetSlot: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CsmCopySlotEntitySiteConfig {

		/** <code>true</code> if Always On is enabled; otherwise, <code>false</code>. */
		alwaysOn?: boolean | null;

		/** Information about the formal API definition for the app. */
		apiDefinition?: CsmCopySlotEntitySiteConfigApiDefinition;

		/** Azure API management (APIM) configuration linked to the app. */
		apiManagementConfig?: CsmCopySlotEntitySiteConfigApiManagementConfig;

		/** App command line to launch. */
		appCommandLine?: string | null;

		/** Application settings. */
		CsmCopySlotEntitySiteConfigAppSettings?: Array<CsmCopySlotEntitySiteConfigAppSettings>;

		/** <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>. */
		autoHealEnabled?: boolean | null;

		/** Rules that can be defined for auto-heal. */
		autoHealRules?: CsmCopySlotEntitySiteConfigAutoHealRules;

		/** Auto-swap slot name. */
		autoSwapSlotName?: string | null;

		/** Connection strings. */
		CsmCopySlotEntitySiteConfigConnectionStrings?: Array<CsmCopySlotEntitySiteConfigConnectionStrings>;

		/** Cross-Origin Resource Sharing (CORS) settings for the app. */
		cors?: CsmCopySlotEntitySiteConfigCors;

		/** Default documents. */
		defaultDocuments?: Array<string>;

		/** <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>. */
		detailedErrorLoggingEnabled?: boolean | null;

		/** Document root. */
		documentRoot?: string | null;

		/** Routing rules in production experiments. */
		experiments?: CsmCopySlotEntitySiteConfigExperiments;

		/** State of FTP / FTPS service */
		ftpsState?: CsmCopySlotEntitySiteConfigFtpsState | null;

		/** Handler mappings. */
		CsmCopySlotEntitySiteConfigHandlerMappings?: Array<CsmCopySlotEntitySiteConfigHandlerMappings>;

		/** Health check path */
		healthCheckPath?: string | null;

		/** Http20Enabled: configures a web site to allow clients to connect over http2.0 */
		http20Enabled?: boolean | null;

		/** <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>. */
		httpLoggingEnabled?: boolean | null;

		/** IP security restrictions for main. */
		CsmCopySlotEntitySiteConfigIpSecurityRestrictions?: Array<CsmCopySlotEntitySiteConfigIpSecurityRestrictions>;

		/** Java container. */
		javaContainer?: string | null;

		/** Java container version. */
		javaContainerVersion?: string | null;

		/** Java version. */
		javaVersion?: string | null;

		/** Metric limits set on an app. */
		limits?: CsmCopySlotEntitySiteConfigLimits;

		/** Linux App Framework and version */
		linuxFxVersion?: string | null;

		/** Site load balancing. */
		loadBalancing?: CsmCopySlotEntitySiteConfigLoadBalancing | null;

		/** <code>true</code> to enable local MySQL; otherwise, <code>false</code>. */
		localMySqlEnabled?: boolean | null;

		/** HTTP logs directory size limit. */
		logsDirectorySizeLimit?: number | null;

		/** MachineKey of an app. */
		machineKey?: CsmCopySlotEntitySiteConfigMachineKey;

		/** Managed pipeline mode. */
		managedPipelineMode?: CsmCopySlotEntitySiteConfigManagedPipelineMode | null;

		/** Managed Service Identity Id */
		managedServiceIdentityId?: number | null;

		/** MinTlsVersion: configures the minimum version of TLS required for SSL requests */
		minTlsVersion?: CsmCopySlotEntitySiteConfigMinTlsVersion | null;

		/** .NET Framework version. */
		netFrameworkVersion?: string | null;

		/** Version of Node.js. */
		nodeVersion?: string | null;

		/** Number of workers. */
		numberOfWorkers?: number | null;

		/** Version of PHP. */
		phpVersion?: string | null;

		/**
		 * Number of preWarmed instances.
		 * This setting only applies to the Consumption and Elastic Plans
		 * Minimum: 0
		 * Maximum: 10
		 */
		preWarmedInstanceCount?: number | null;

		/** Publishing user name. */
		publishingUsername?: string | null;

		/** Push settings for the App. */
		push?: CsmCopySlotEntitySiteConfigPush;

		/** Version of Python. */
		pythonVersion?: string | null;

		/** <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>. */
		remoteDebuggingEnabled?: boolean | null;

		/** Remote debugging version. */
		remoteDebuggingVersion?: string | null;

		/** <code>true</code> if request tracing is enabled; otherwise, <code>false</code>. */
		requestTracingEnabled?: boolean | null;

		/** Request tracing expiration time. */
		requestTracingExpirationTime?: Date | null;

		/** IP security restrictions for scm. */
		CsmCopySlotEntitySiteConfigScmIpSecurityRestrictions?: Array<CsmCopySlotEntitySiteConfigScmIpSecurityRestrictions>;

		/** IP security restrictions for scm to use main. */
		scmIpSecurityRestrictionsUseMain?: boolean | null;

		/** SCM type. */
		scmType?: CsmCopySlotEntitySiteConfigScmType | null;

		/** Tracing options. */
		tracingOptions?: string | null;

		/** <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>. */
		use32BitWorkerProcess?: boolean | null;

		/** Virtual applications. */
		CsmCopySlotEntitySiteConfigVirtualApplications?: Array<CsmCopySlotEntitySiteConfigVirtualApplications>;

		/** Virtual Network name. */
		vnetName?: string | null;

		/** <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>. */
		webSocketsEnabled?: boolean | null;

		/** Xenon App Framework and version */
		windowsFxVersion?: string | null;

		/** Explicit Managed Service Identity Id */
		xManagedServiceIdentityId?: number | null;
	}
	export interface CsmCopySlotEntitySiteConfigFormProperties {

		/** <code>true</code> if Always On is enabled; otherwise, <code>false</code>. */
		alwaysOn: FormControl<boolean | null | undefined>,

		/** App command line to launch. */
		appCommandLine: FormControl<string | null | undefined>,

		/** <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>. */
		autoHealEnabled: FormControl<boolean | null | undefined>,

		/** Auto-swap slot name. */
		autoSwapSlotName: FormControl<string | null | undefined>,

		/** <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>. */
		detailedErrorLoggingEnabled: FormControl<boolean | null | undefined>,

		/** Document root. */
		documentRoot: FormControl<string | null | undefined>,

		/** State of FTP / FTPS service */
		ftpsState: FormControl<CsmCopySlotEntitySiteConfigFtpsState | null | undefined>,

		/** Health check path */
		healthCheckPath: FormControl<string | null | undefined>,

		/** Http20Enabled: configures a web site to allow clients to connect over http2.0 */
		http20Enabled: FormControl<boolean | null | undefined>,

		/** <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>. */
		httpLoggingEnabled: FormControl<boolean | null | undefined>,

		/** Java container. */
		javaContainer: FormControl<string | null | undefined>,

		/** Java container version. */
		javaContainerVersion: FormControl<string | null | undefined>,

		/** Java version. */
		javaVersion: FormControl<string | null | undefined>,

		/** Linux App Framework and version */
		linuxFxVersion: FormControl<string | null | undefined>,

		/** Site load balancing. */
		loadBalancing: FormControl<CsmCopySlotEntitySiteConfigLoadBalancing | null | undefined>,

		/** <code>true</code> to enable local MySQL; otherwise, <code>false</code>. */
		localMySqlEnabled: FormControl<boolean | null | undefined>,

		/** HTTP logs directory size limit. */
		logsDirectorySizeLimit: FormControl<number | null | undefined>,

		/** Managed pipeline mode. */
		managedPipelineMode: FormControl<CsmCopySlotEntitySiteConfigManagedPipelineMode | null | undefined>,

		/** Managed Service Identity Id */
		managedServiceIdentityId: FormControl<number | null | undefined>,

		/** MinTlsVersion: configures the minimum version of TLS required for SSL requests */
		minTlsVersion: FormControl<CsmCopySlotEntitySiteConfigMinTlsVersion | null | undefined>,

		/** .NET Framework version. */
		netFrameworkVersion: FormControl<string | null | undefined>,

		/** Version of Node.js. */
		nodeVersion: FormControl<string | null | undefined>,

		/** Number of workers. */
		numberOfWorkers: FormControl<number | null | undefined>,

		/** Version of PHP. */
		phpVersion: FormControl<string | null | undefined>,

		/**
		 * Number of preWarmed instances.
		 * This setting only applies to the Consumption and Elastic Plans
		 * Minimum: 0
		 * Maximum: 10
		 */
		preWarmedInstanceCount: FormControl<number | null | undefined>,

		/** Publishing user name. */
		publishingUsername: FormControl<string | null | undefined>,

		/** Version of Python. */
		pythonVersion: FormControl<string | null | undefined>,

		/** <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>. */
		remoteDebuggingEnabled: FormControl<boolean | null | undefined>,

		/** Remote debugging version. */
		remoteDebuggingVersion: FormControl<string | null | undefined>,

		/** <code>true</code> if request tracing is enabled; otherwise, <code>false</code>. */
		requestTracingEnabled: FormControl<boolean | null | undefined>,

		/** Request tracing expiration time. */
		requestTracingExpirationTime: FormControl<Date | null | undefined>,

		/** IP security restrictions for scm to use main. */
		scmIpSecurityRestrictionsUseMain: FormControl<boolean | null | undefined>,

		/** SCM type. */
		scmType: FormControl<CsmCopySlotEntitySiteConfigScmType | null | undefined>,

		/** Tracing options. */
		tracingOptions: FormControl<string | null | undefined>,

		/** <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>. */
		use32BitWorkerProcess: FormControl<boolean | null | undefined>,

		/** Virtual Network name. */
		vnetName: FormControl<string | null | undefined>,

		/** <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>. */
		webSocketsEnabled: FormControl<boolean | null | undefined>,

		/** Xenon App Framework and version */
		windowsFxVersion: FormControl<string | null | undefined>,

		/** Explicit Managed Service Identity Id */
		xManagedServiceIdentityId: FormControl<number | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigFormProperties>({
			alwaysOn: new FormControl<boolean | null | undefined>(undefined),
			appCommandLine: new FormControl<string | null | undefined>(undefined),
			autoHealEnabled: new FormControl<boolean | null | undefined>(undefined),
			autoSwapSlotName: new FormControl<string | null | undefined>(undefined),
			detailedErrorLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			documentRoot: new FormControl<string | null | undefined>(undefined),
			ftpsState: new FormControl<CsmCopySlotEntitySiteConfigFtpsState | null | undefined>(undefined),
			healthCheckPath: new FormControl<string | null | undefined>(undefined),
			http20Enabled: new FormControl<boolean | null | undefined>(undefined),
			httpLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			javaContainer: new FormControl<string | null | undefined>(undefined),
			javaContainerVersion: new FormControl<string | null | undefined>(undefined),
			javaVersion: new FormControl<string | null | undefined>(undefined),
			linuxFxVersion: new FormControl<string | null | undefined>(undefined),
			loadBalancing: new FormControl<CsmCopySlotEntitySiteConfigLoadBalancing | null | undefined>(undefined),
			localMySqlEnabled: new FormControl<boolean | null | undefined>(undefined),
			logsDirectorySizeLimit: new FormControl<number | null | undefined>(undefined),
			managedPipelineMode: new FormControl<CsmCopySlotEntitySiteConfigManagedPipelineMode | null | undefined>(undefined),
			managedServiceIdentityId: new FormControl<number | null | undefined>(undefined),
			minTlsVersion: new FormControl<CsmCopySlotEntitySiteConfigMinTlsVersion | null | undefined>(undefined),
			netFrameworkVersion: new FormControl<string | null | undefined>(undefined),
			nodeVersion: new FormControl<string | null | undefined>(undefined),
			numberOfWorkers: new FormControl<number | null | undefined>(undefined),
			phpVersion: new FormControl<string | null | undefined>(undefined),
			preWarmedInstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10)]),
			publishingUsername: new FormControl<string | null | undefined>(undefined),
			pythonVersion: new FormControl<string | null | undefined>(undefined),
			remoteDebuggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteDebuggingVersion: new FormControl<string | null | undefined>(undefined),
			requestTracingEnabled: new FormControl<boolean | null | undefined>(undefined),
			requestTracingExpirationTime: new FormControl<Date | null | undefined>(undefined),
			scmIpSecurityRestrictionsUseMain: new FormControl<boolean | null | undefined>(undefined),
			scmType: new FormControl<CsmCopySlotEntitySiteConfigScmType | null | undefined>(undefined),
			tracingOptions: new FormControl<string | null | undefined>(undefined),
			use32BitWorkerProcess: new FormControl<boolean | null | undefined>(undefined),
			vnetName: new FormControl<string | null | undefined>(undefined),
			webSocketsEnabled: new FormControl<boolean | null | undefined>(undefined),
			windowsFxVersion: new FormControl<string | null | undefined>(undefined),
			xManagedServiceIdentityId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigApiDefinition {

		/** The URL of the API definition. */
		url?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigApiDefinitionFormProperties {

		/** The URL of the API definition. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigApiDefinitionFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigApiDefinitionFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigApiManagementConfig {

		/** APIM-Api Identifier. */
		id?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigApiManagementConfigFormProperties {

		/** APIM-Api Identifier. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigApiManagementConfigFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigApiManagementConfigFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigAppSettings {

		/** Pair name. */
		name?: string | null;

		/** Pair value. */
		value?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigAppSettingsFormProperties {

		/** Pair name. */
		name: FormControl<string | null | undefined>,

		/** Pair value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigAppSettingsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigAppSettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigAutoHealRules {

		/** Actions which to take by the auto-heal module when a rule is triggered. */
		actions?: CsmCopySlotEntitySiteConfigAutoHealRulesActions;

		/** Triggers for auto-heal. */
		triggers?: CsmCopySlotEntitySiteConfigAutoHealRulesTriggers;
	}
	export interface CsmCopySlotEntitySiteConfigAutoHealRulesFormProperties {
	}
	export function CreateCsmCopySlotEntitySiteConfigAutoHealRulesFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigAutoHealRulesFormProperties>({
		});

	}

	export interface CsmCopySlotEntitySiteConfigAutoHealRulesActions {

		/** Predefined action to be taken. */
		actionType?: CsmCopySlotEntitySiteConfigAutoHealRulesActionsActionType | null;

		/**
		 * Custom action to be executed
		 * when an auto heal rule is triggered.
		 */
		customAction?: CsmCopySlotEntitySiteConfigAutoHealRulesActionsCustomAction;

		/**
		 * Minimum time the process must execute
		 * before taking the action
		 */
		minProcessExecutionTime?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigAutoHealRulesActionsFormProperties {

		/** Predefined action to be taken. */
		actionType: FormControl<CsmCopySlotEntitySiteConfigAutoHealRulesActionsActionType | null | undefined>,

		/**
		 * Minimum time the process must execute
		 * before taking the action
		 */
		minProcessExecutionTime: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigAutoHealRulesActionsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigAutoHealRulesActionsFormProperties>({
			actionType: new FormControl<CsmCopySlotEntitySiteConfigAutoHealRulesActionsActionType | null | undefined>(undefined),
			minProcessExecutionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CsmCopySlotEntitySiteConfigAutoHealRulesActionsActionType { Recycle = 0, LogEvent = 1, CustomAction = 2 }

	export interface CsmCopySlotEntitySiteConfigAutoHealRulesActionsCustomAction {

		/** Executable to be run. */
		exe?: string | null;

		/** Parameters for the executable. */
		parameters?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigAutoHealRulesActionsCustomActionFormProperties {

		/** Executable to be run. */
		exe: FormControl<string | null | undefined>,

		/** Parameters for the executable. */
		parameters: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigAutoHealRulesActionsCustomActionFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigAutoHealRulesActionsCustomActionFormProperties>({
			exe: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigAutoHealRulesTriggers {

		/** A rule based on private bytes. */
		privateBytesInKB?: number | null;

		/** Trigger based on total requests. */
		requests?: CsmCopySlotEntitySiteConfigAutoHealRulesTriggersRequests;

		/** Trigger based on request execution time. */
		slowRequests?: CsmCopySlotEntitySiteConfigAutoHealRulesTriggersSlowRequests;

		/** A rule based on status codes. */
		CsmCopySlotEntitySiteConfigAutoHealRulesTriggersStatusCodes?: Array<CsmCopySlotEntitySiteConfigAutoHealRulesTriggersStatusCodes>;
	}
	export interface CsmCopySlotEntitySiteConfigAutoHealRulesTriggersFormProperties {

		/** A rule based on private bytes. */
		privateBytesInKB: FormControl<number | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigAutoHealRulesTriggersFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigAutoHealRulesTriggersFormProperties>({
			privateBytesInKB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigAutoHealRulesTriggersRequests {

		/** Request Count. */
		count?: number | null;

		/** Time interval. */
		timeInterval?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigAutoHealRulesTriggersRequestsFormProperties {

		/** Request Count. */
		count: FormControl<number | null | undefined>,

		/** Time interval. */
		timeInterval: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigAutoHealRulesTriggersRequestsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigAutoHealRulesTriggersRequestsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			timeInterval: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigAutoHealRulesTriggersSlowRequests {

		/** Request Count. */
		count?: number | null;

		/** Time interval. */
		timeInterval?: string | null;

		/** Time taken. */
		timeTaken?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigAutoHealRulesTriggersSlowRequestsFormProperties {

		/** Request Count. */
		count: FormControl<number | null | undefined>,

		/** Time interval. */
		timeInterval: FormControl<string | null | undefined>,

		/** Time taken. */
		timeTaken: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigAutoHealRulesTriggersSlowRequestsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigAutoHealRulesTriggersSlowRequestsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			timeInterval: new FormControl<string | null | undefined>(undefined),
			timeTaken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigAutoHealRulesTriggersStatusCodes {

		/** Request Count. */
		count?: number | null;

		/** HTTP status code. */
		status?: number | null;

		/** Request Sub Status. */
		subStatus?: number | null;

		/** Time interval. */
		timeInterval?: string | null;

		/** Win32 error code. */
		win32Status?: number | null;
	}
	export interface CsmCopySlotEntitySiteConfigAutoHealRulesTriggersStatusCodesFormProperties {

		/** Request Count. */
		count: FormControl<number | null | undefined>,

		/** HTTP status code. */
		status: FormControl<number | null | undefined>,

		/** Request Sub Status. */
		subStatus: FormControl<number | null | undefined>,

		/** Time interval. */
		timeInterval: FormControl<string | null | undefined>,

		/** Win32 error code. */
		win32Status: FormControl<number | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigAutoHealRulesTriggersStatusCodesFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigAutoHealRulesTriggersStatusCodesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			subStatus: new FormControl<number | null | undefined>(undefined),
			timeInterval: new FormControl<string | null | undefined>(undefined),
			win32Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigConnectionStrings {

		/** Connection string value. */
		connectionString?: string | null;

		/** Name of connection string. */
		name?: string | null;

		/** Type of database. */
		type?: ConnStringValueTypePairType | null;
	}
	export interface CsmCopySlotEntitySiteConfigConnectionStringsFormProperties {

		/** Connection string value. */
		connectionString: FormControl<string | null | undefined>,

		/** Name of connection string. */
		name: FormControl<string | null | undefined>,

		/** Type of database. */
		type: FormControl<ConnStringValueTypePairType | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigConnectionStringsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigConnectionStringsFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ConnStringValueTypePairType | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigCors {

		/**
		 * Gets or sets the list of origins that should be allowed to make cross-origin
		 * calls (for example: http://example.com:12345). Use "*" to allow all.
		 */
		allowedOrigins?: Array<string>;

		/**
		 * Gets or sets whether CORS requests with credentials are allowed. See
		 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
		 * for more details.
		 */
		supportCredentials?: boolean | null;
	}
	export interface CsmCopySlotEntitySiteConfigCorsFormProperties {

		/**
		 * Gets or sets whether CORS requests with credentials are allowed. See
		 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
		 * for more details.
		 */
		supportCredentials: FormControl<boolean | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigCorsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigCorsFormProperties>({
			supportCredentials: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigExperiments {

		/** List of ramp-up rules. */
		CsmCopySlotEntitySiteConfigExperimentsRampUpRules?: Array<CsmCopySlotEntitySiteConfigExperimentsRampUpRules>;
	}
	export interface CsmCopySlotEntitySiteConfigExperimentsFormProperties {
	}
	export function CreateCsmCopySlotEntitySiteConfigExperimentsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigExperimentsFormProperties>({
		});

	}

	export interface CsmCopySlotEntitySiteConfigExperimentsRampUpRules {

		/** Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. */
		actionHostName?: string | null;

		/**
		 * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
		 * https://www.siteextensions.net/packages/TiPCallback/
		 */
		changeDecisionCallbackUrl?: string | null;

		/** Specifies interval in minutes to reevaluate ReroutePercentage. */
		changeIntervalInMinutes?: number | null;

		/**
		 * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or
		 * <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm
		 * can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
		 */
		changeStep?: number | null;

		/** Specifies upper boundary below which ReroutePercentage will stay. */
		maxReroutePercentage?: number | null;

		/** Specifies lower boundary above which ReroutePercentage will stay. */
		minReroutePercentage?: number | null;

		/** Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. */
		name?: string | null;

		/** Percentage of the traffic which will be redirected to <code>ActionHostName</code>. */
		reroutePercentage?: number | null;
	}
	export interface CsmCopySlotEntitySiteConfigExperimentsRampUpRulesFormProperties {

		/** Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. */
		actionHostName: FormControl<string | null | undefined>,

		/**
		 * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
		 * https://www.siteextensions.net/packages/TiPCallback/
		 */
		changeDecisionCallbackUrl: FormControl<string | null | undefined>,

		/** Specifies interval in minutes to reevaluate ReroutePercentage. */
		changeIntervalInMinutes: FormControl<number | null | undefined>,

		/**
		 * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or
		 * <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm
		 * can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
		 */
		changeStep: FormControl<number | null | undefined>,

		/** Specifies upper boundary below which ReroutePercentage will stay. */
		maxReroutePercentage: FormControl<number | null | undefined>,

		/** Specifies lower boundary above which ReroutePercentage will stay. */
		minReroutePercentage: FormControl<number | null | undefined>,

		/** Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. */
		name: FormControl<string | null | undefined>,

		/** Percentage of the traffic which will be redirected to <code>ActionHostName</code>. */
		reroutePercentage: FormControl<number | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigExperimentsRampUpRulesFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigExperimentsRampUpRulesFormProperties>({
			actionHostName: new FormControl<string | null | undefined>(undefined),
			changeDecisionCallbackUrl: new FormControl<string | null | undefined>(undefined),
			changeIntervalInMinutes: new FormControl<number | null | undefined>(undefined),
			changeStep: new FormControl<number | null | undefined>(undefined),
			maxReroutePercentage: new FormControl<number | null | undefined>(undefined),
			minReroutePercentage: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reroutePercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CsmCopySlotEntitySiteConfigFtpsState { AllAllowed = 0, FtpsOnly = 1, Disabled = 2 }

	export interface CsmCopySlotEntitySiteConfigHandlerMappings {

		/** Command-line arguments to be passed to the script processor. */
		arguments?: string | null;

		/** Requests with this extension will be handled using the specified FastCGI application. */
		extension?: string | null;

		/** The absolute path to the FastCGI application. */
		scriptProcessor?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigHandlerMappingsFormProperties {

		/** Command-line arguments to be passed to the script processor. */
		arguments: FormControl<string | null | undefined>,

		/** Requests with this extension will be handled using the specified FastCGI application. */
		extension: FormControl<string | null | undefined>,

		/** The absolute path to the FastCGI application. */
		scriptProcessor: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigHandlerMappingsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigHandlerMappingsFormProperties>({
			arguments: new FormControl<string | null | undefined>(undefined),
			extension: new FormControl<string | null | undefined>(undefined),
			scriptProcessor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigIpSecurityRestrictions {

		/** Allow or Deny access for this IP range. */
		action?: string | null;

		/** IP restriction rule description. */
		description?: string | null;

		/**
		 * IP address the security restriction is valid for.
		 * It can be in form of pure ipv4 address (required SubnetMask property) or
		 * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
		 * SubnetMask property must not be specified.
		 */
		ipAddress?: string | null;

		/** IP restriction rule name. */
		name?: string | null;

		/** Priority of IP restriction rule. */
		priority?: number | null;

		/** Subnet mask for the range of IP addresses the restriction is valid for. */
		subnetMask?: string | null;

		/** (internal) Subnet traffic tag */
		subnetTrafficTag?: number | null;

		/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
		tag?: CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null;

		/** Virtual network resource id */
		vnetSubnetResourceId?: string | null;

		/** (internal) Vnet traffic tag */
		vnetTrafficTag?: number | null;
	}
	export interface CsmCopySlotEntitySiteConfigIpSecurityRestrictionsFormProperties {

		/** Allow or Deny access for this IP range. */
		action: FormControl<string | null | undefined>,

		/** IP restriction rule description. */
		description: FormControl<string | null | undefined>,

		/**
		 * IP address the security restriction is valid for.
		 * It can be in form of pure ipv4 address (required SubnetMask property) or
		 * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
		 * SubnetMask property must not be specified.
		 */
		ipAddress: FormControl<string | null | undefined>,

		/** IP restriction rule name. */
		name: FormControl<string | null | undefined>,

		/** Priority of IP restriction rule. */
		priority: FormControl<number | null | undefined>,

		/** Subnet mask for the range of IP addresses the restriction is valid for. */
		subnetMask: FormControl<string | null | undefined>,

		/** (internal) Subnet traffic tag */
		subnetTrafficTag: FormControl<number | null | undefined>,

		/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
		tag: FormControl<CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null | undefined>,

		/** Virtual network resource id */
		vnetSubnetResourceId: FormControl<string | null | undefined>,

		/** (internal) Vnet traffic tag */
		vnetTrafficTag: FormControl<number | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigIpSecurityRestrictionsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigIpSecurityRestrictionsFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			subnetMask: new FormControl<string | null | undefined>(undefined),
			subnetTrafficTag: new FormControl<number | null | undefined>(undefined),
			tag: new FormControl<CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null | undefined>(undefined),
			vnetSubnetResourceId: new FormControl<string | null | undefined>(undefined),
			vnetTrafficTag: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag { Default = 0, XffProxy = 1 }

	export interface CsmCopySlotEntitySiteConfigLimits {

		/** Maximum allowed disk size usage in MB. */
		maxDiskSizeInMb?: number | null;

		/** Maximum allowed memory usage in MB. */
		maxMemoryInMb?: number | null;

		/** Maximum allowed CPU usage percentage. */
		maxPercentageCpu?: number | null;
	}
	export interface CsmCopySlotEntitySiteConfigLimitsFormProperties {

		/** Maximum allowed disk size usage in MB. */
		maxDiskSizeInMb: FormControl<number | null | undefined>,

		/** Maximum allowed memory usage in MB. */
		maxMemoryInMb: FormControl<number | null | undefined>,

		/** Maximum allowed CPU usage percentage. */
		maxPercentageCpu: FormControl<number | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigLimitsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigLimitsFormProperties>({
			maxDiskSizeInMb: new FormControl<number | null | undefined>(undefined),
			maxMemoryInMb: new FormControl<number | null | undefined>(undefined),
			maxPercentageCpu: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CsmCopySlotEntitySiteConfigLoadBalancing { WeightedRoundRobin = 0, LeastRequests = 1, LeastResponseTime = 2, WeightedTotalTraffic = 3, RequestHash = 4 }

	export interface CsmCopySlotEntitySiteConfigMachineKey {

		/** Algorithm used for decryption. */
		decryption?: string | null;

		/** Decryption key. */
		decryptionKey?: string | null;

		/** MachineKey validation. */
		validation?: string | null;

		/** Validation key. */
		validationKey?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigMachineKeyFormProperties {

		/** Algorithm used for decryption. */
		decryption: FormControl<string | null | undefined>,

		/** Decryption key. */
		decryptionKey: FormControl<string | null | undefined>,

		/** MachineKey validation. */
		validation: FormControl<string | null | undefined>,

		/** Validation key. */
		validationKey: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigMachineKeyFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigMachineKeyFormProperties>({
			decryption: new FormControl<string | null | undefined>(undefined),
			decryptionKey: new FormControl<string | null | undefined>(undefined),
			validation: new FormControl<string | null | undefined>(undefined),
			validationKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CsmCopySlotEntitySiteConfigManagedPipelineMode { Integrated = 0, Classic = 1 }

	export enum CsmCopySlotEntitySiteConfigMinTlsVersion { _1_0 = 0, _1_1 = 1, _1_2 = 2 }

	export interface CsmCopySlotEntitySiteConfigPush {

		/** PushSettings resource specific properties */
		properties?: any;
	}
	export interface CsmCopySlotEntitySiteConfigPushFormProperties {

		/** PushSettings resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigPushFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigPushFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigScmIpSecurityRestrictions {

		/** Allow or Deny access for this IP range. */
		action?: string | null;

		/** IP restriction rule description. */
		description?: string | null;

		/**
		 * IP address the security restriction is valid for.
		 * It can be in form of pure ipv4 address (required SubnetMask property) or
		 * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
		 * SubnetMask property must not be specified.
		 */
		ipAddress?: string | null;

		/** IP restriction rule name. */
		name?: string | null;

		/** Priority of IP restriction rule. */
		priority?: number | null;

		/** Subnet mask for the range of IP addresses the restriction is valid for. */
		subnetMask?: string | null;

		/** (internal) Subnet traffic tag */
		subnetTrafficTag?: number | null;

		/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
		tag?: CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null;

		/** Virtual network resource id */
		vnetSubnetResourceId?: string | null;

		/** (internal) Vnet traffic tag */
		vnetTrafficTag?: number | null;
	}
	export interface CsmCopySlotEntitySiteConfigScmIpSecurityRestrictionsFormProperties {

		/** Allow or Deny access for this IP range. */
		action: FormControl<string | null | undefined>,

		/** IP restriction rule description. */
		description: FormControl<string | null | undefined>,

		/**
		 * IP address the security restriction is valid for.
		 * It can be in form of pure ipv4 address (required SubnetMask property) or
		 * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
		 * SubnetMask property must not be specified.
		 */
		ipAddress: FormControl<string | null | undefined>,

		/** IP restriction rule name. */
		name: FormControl<string | null | undefined>,

		/** Priority of IP restriction rule. */
		priority: FormControl<number | null | undefined>,

		/** Subnet mask for the range of IP addresses the restriction is valid for. */
		subnetMask: FormControl<string | null | undefined>,

		/** (internal) Subnet traffic tag */
		subnetTrafficTag: FormControl<number | null | undefined>,

		/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
		tag: FormControl<CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null | undefined>,

		/** Virtual network resource id */
		vnetSubnetResourceId: FormControl<string | null | undefined>,

		/** (internal) Vnet traffic tag */
		vnetTrafficTag: FormControl<number | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigScmIpSecurityRestrictionsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigScmIpSecurityRestrictionsFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			subnetMask: new FormControl<string | null | undefined>(undefined),
			subnetTrafficTag: new FormControl<number | null | undefined>(undefined),
			tag: new FormControl<CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null | undefined>(undefined),
			vnetSubnetResourceId: new FormControl<string | null | undefined>(undefined),
			vnetTrafficTag: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CsmCopySlotEntitySiteConfigScmType { None = 0, Dropbox = 1, Tfs = 2, LocalGit = 3, GitHub = 4, CodePlexGit = 5, CodePlexHg = 6, BitbucketGit = 7, BitbucketHg = 8, ExternalGit = 9, ExternalHg = 10, OneDrive = 11, VSO = 12, VSTSRM = 13 }

	export interface CsmCopySlotEntitySiteConfigVirtualApplications {

		/** Physical path. */
		physicalPath?: string | null;

		/** <code>true</code> if preloading is enabled; otherwise, <code>false</code>. */
		preloadEnabled?: boolean | null;

		/** Virtual directories for virtual application. */
		CsmCopySlotEntitySiteConfigVirtualApplicationsVirtualDirectories?: Array<CsmCopySlotEntitySiteConfigVirtualApplicationsVirtualDirectories>;

		/** Virtual path. */
		virtualPath?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigVirtualApplicationsFormProperties {

		/** Physical path. */
		physicalPath: FormControl<string | null | undefined>,

		/** <code>true</code> if preloading is enabled; otherwise, <code>false</code>. */
		preloadEnabled: FormControl<boolean | null | undefined>,

		/** Virtual path. */
		virtualPath: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigVirtualApplicationsFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigVirtualApplicationsFormProperties>({
			physicalPath: new FormControl<string | null | undefined>(undefined),
			preloadEnabled: new FormControl<boolean | null | undefined>(undefined),
			virtualPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CsmCopySlotEntitySiteConfigVirtualApplicationsVirtualDirectories {

		/** Physical path. */
		physicalPath?: string | null;

		/** Path to virtual application. */
		virtualPath?: string | null;
	}
	export interface CsmCopySlotEntitySiteConfigVirtualApplicationsVirtualDirectoriesFormProperties {

		/** Physical path. */
		physicalPath: FormControl<string | null | undefined>,

		/** Path to virtual application. */
		virtualPath: FormControl<string | null | undefined>,
	}
	export function CreateCsmCopySlotEntitySiteConfigVirtualApplicationsVirtualDirectoriesFormGroup() {
		return new FormGroup<CsmCopySlotEntitySiteConfigVirtualApplicationsVirtualDirectoriesFormProperties>({
			physicalPath: new FormControl<string | null | undefined>(undefined),
			virtualPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Publishing options for requested profile. */
	export interface CsmPublishingProfileOptions {

		/**
		 * Name of the format. Valid values are:
		 * FileZilla3
		 * WebDeploy -- default
		 * Ftp
		 */
		format?: CsmPublishingProfileOptionsFormat | null;

		/** Include the DisasterRecover endpoint if true */
		includeDisasterRecoveryEndpoints?: boolean | null;
	}

	/** Publishing options for requested profile. */
	export interface CsmPublishingProfileOptionsFormProperties {

		/**
		 * Name of the format. Valid values are:
		 * FileZilla3
		 * WebDeploy -- default
		 * Ftp
		 */
		format: FormControl<CsmPublishingProfileOptionsFormat | null | undefined>,

		/** Include the DisasterRecover endpoint if true */
		includeDisasterRecoveryEndpoints: FormControl<boolean | null | undefined>,
	}
	export function CreateCsmPublishingProfileOptionsFormGroup() {
		return new FormGroup<CsmPublishingProfileOptionsFormProperties>({
			format: new FormControl<CsmPublishingProfileOptionsFormat | null | undefined>(undefined),
			includeDisasterRecoveryEndpoints: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CsmPublishingProfileOptionsFormat { FileZilla3 = 0, WebDeploy = 1, Ftp = 2 }


	/** Deployment slot parameters. */
	export interface CsmSlotEntity {

		/**
		 * <code>true</code> to preserve Virtual Network to the slot during swap; otherwise, <code>false</code>.
		 * Required
		 */
		preserveVnet: boolean;

		/**
		 * Destination deployment slot during swap operation.
		 * Required
		 */
		targetSlot: string;
	}

	/** Deployment slot parameters. */
	export interface CsmSlotEntityFormProperties {

		/**
		 * <code>true</code> to preserve Virtual Network to the slot during swap; otherwise, <code>false</code>.
		 * Required
		 */
		preserveVnet: FormControl<boolean | null | undefined>,

		/**
		 * Destination deployment slot during swap operation.
		 * Required
		 */
		targetSlot: FormControl<string | null | undefined>,
	}
	export function CreateCsmSlotEntityFormGroup() {
		return new FormGroup<CsmSlotEntityFormProperties>({
			preserveVnet: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			targetSlot: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Custom domain analysis. */
	export interface CustomHostnameAnalysisResult {

		/** CustomHostnameAnalysisResult resource specific properties */
		properties?: any;
	}

	/** Custom domain analysis. */
	export interface CustomHostnameAnalysisResultFormProperties {

		/** CustomHostnameAnalysisResult resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateCustomHostnameAnalysisResultFormGroup() {
		return new FormGroup<CustomHostnameAnalysisResultFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Database backup settings. */
	export interface DatabaseBackupSetting {

		/** Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one. */
		connectionString?: string | null;

		/**
		 * Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
		 * This is used during restore with overwrite connection strings options.
		 */
		connectionStringName?: string | null;

		/**
		 * Database type (e.g. SqlAzure / MySql).
		 * Required
		 */
		databaseType: DatabaseBackupSettingDatabaseType;
		name?: string | null;
	}

	/** Database backup settings. */
	export interface DatabaseBackupSettingFormProperties {

		/** Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one. */
		connectionString: FormControl<string | null | undefined>,

		/**
		 * Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
		 * This is used during restore with overwrite connection strings options.
		 */
		connectionStringName: FormControl<string | null | undefined>,

		/**
		 * Database type (e.g. SqlAzure / MySql).
		 * Required
		 */
		databaseType: FormControl<DatabaseBackupSettingDatabaseType | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseBackupSettingFormGroup() {
		return new FormGroup<DatabaseBackupSettingFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			connectionStringName: new FormControl<string | null | undefined>(undefined),
			databaseType: new FormControl<DatabaseBackupSettingDatabaseType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseBackupSettingDatabaseType { SqlAzure = 0, MySql = 1, LocalMySql = 2, PostgreSql = 3 }


	/** Details about restoring a deleted app. */
	export interface DeletedAppRestoreRequest {

		/** DeletedAppRestoreRequest resource specific properties */
		properties?: any;
	}

	/** Details about restoring a deleted app. */
	export interface DeletedAppRestoreRequestFormProperties {

		/** DeletedAppRestoreRequest resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDeletedAppRestoreRequestFormGroup() {
		return new FormGroup<DeletedAppRestoreRequestFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** User credentials used for publishing activity. */
	export interface Deployment {

		/** Deployment resource specific properties */
		properties?: any;
	}

	/** User credentials used for publishing activity. */
	export interface DeploymentFormProperties {

		/** Deployment resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of app deployments. */
	export interface DeploymentCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<Deployment>;
	}

	/** Collection of app deployments. */
	export interface DeploymentCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentCollectionFormGroup() {
		return new FormGroup<DeploymentCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enabled configuration. */
	export interface EnabledConfig {

		/** True if configuration is enabled, false if it is disabled and null if configuration is not set. */
		enabled?: boolean | null;
	}

	/** Enabled configuration. */
	export interface EnabledConfigFormProperties {

		/** True if configuration is enabled, false if it is disabled and null if configuration is not set. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEnabledConfigFormGroup() {
		return new FormGroup<EnabledConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ErrorEntity {
	}
	export interface ErrorEntityFormProperties {
	}
	export function CreateErrorEntityFormGroup() {
		return new FormGroup<ErrorEntityFormProperties>({
		});

	}


	/** Http logs to file system configuration. */
	export interface FileSystemHttpLogsConfig {

		/** True if configuration is enabled, false if it is disabled and null if configuration is not set. */
		enabled?: boolean | null;

		/**
		 * Retention in days.
		 * Remove files older than X days.
		 * 0 or lower means no retention.
		 */
		retentionInDays?: number | null;

		/**
		 * Maximum size in megabytes that http log files can use.
		 * When reached old log files will be removed to make space for new ones.
		 * Value can range between 25 and 100.
		 * Minimum: 25
		 * Maximum: 100
		 */
		retentionInMb?: number | null;
	}

	/** Http logs to file system configuration. */
	export interface FileSystemHttpLogsConfigFormProperties {

		/** True if configuration is enabled, false if it is disabled and null if configuration is not set. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Retention in days.
		 * Remove files older than X days.
		 * 0 or lower means no retention.
		 */
		retentionInDays: FormControl<number | null | undefined>,

		/**
		 * Maximum size in megabytes that http log files can use.
		 * When reached old log files will be removed to make space for new ones.
		 * Value can range between 25 and 100.
		 * Minimum: 25
		 * Maximum: 100
		 */
		retentionInMb: FormControl<number | null | undefined>,
	}
	export function CreateFileSystemHttpLogsConfigFormGroup() {
		return new FormGroup<FileSystemHttpLogsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			retentionInDays: new FormControl<number | null | undefined>(undefined),
			retentionInMb: new FormControl<number | null | undefined>(undefined, [Validators.min(25), Validators.max(100)]),
		});

	}


	/** Function information. */
	export interface FunctionEnvelope {

		/** FunctionEnvelope resource specific properties */
		properties?: any;
	}

	/** Function information. */
	export interface FunctionEnvelopeFormProperties {

		/** FunctionEnvelope resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateFunctionEnvelopeFormGroup() {
		return new FormGroup<FunctionEnvelopeFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Kudu function information elements. */
	export interface FunctionEnvelopeCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<FunctionEnvelope>;
	}

	/** Collection of Kudu function information elements. */
	export interface FunctionEnvelopeCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFunctionEnvelopeCollectionFormGroup() {
		return new FormGroup<FunctionEnvelopeCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Function secrets. */
	export interface FunctionSecrets {

		/** FunctionSecrets resource specific properties */
		properties?: any;
	}

	/** Function secrets. */
	export interface FunctionSecretsFormProperties {

		/** FunctionSecrets resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateFunctionSecretsFormGroup() {
		return new FormGroup<FunctionSecretsFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Functions host level keys. */
	export interface HostKeys {

		/** Host level function keys. */
		functionKeys?: {[id: string]: string };

		/** Secret key. */
		masterKey?: string | null;

		/** System keys. */
		systemKeys?: {[id: string]: string };
	}

	/** Functions host level keys. */
	export interface HostKeysFormProperties {

		/** Host level function keys. */
		functionKeys: FormControl<{[id: string]: string } | null | undefined>,

		/** Secret key. */
		masterKey: FormControl<string | null | undefined>,

		/** System keys. */
		systemKeys: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateHostKeysFormGroup() {
		return new FormGroup<HostKeysFormProperties>({
			functionKeys: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			masterKey: new FormControl<string | null | undefined>(undefined),
			systemKeys: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A hostname binding object. */
	export interface HostNameBinding {

		/** HostNameBinding resource specific properties */
		properties?: any;
	}

	/** A hostname binding object. */
	export interface HostNameBindingFormProperties {

		/** HostNameBinding resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateHostNameBindingFormGroup() {
		return new FormGroup<HostNameBindingFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of hostname bindings. */
	export interface HostNameBindingCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<HostNameBinding>;
	}

	/** Collection of hostname bindings. */
	export interface HostNameBindingCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateHostNameBindingCollectionFormGroup() {
		return new FormGroup<HostNameBindingCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Http logs configuration. */
	export interface HttpLogsConfig {

		/** Http logs to azure blob storage configuration. */
		azureBlobStorage?: AzureBlobStorageHttpLogsConfig;

		/** Http logs to file system configuration. */
		fileSystem?: FileSystemHttpLogsConfig;
	}

	/** Http logs configuration. */
	export interface HttpLogsConfigFormProperties {
	}
	export function CreateHttpLogsConfigFormGroup() {
		return new FormGroup<HttpLogsConfigFormProperties>({
		});

	}


	/** Function key info. */
	export interface KeyInfo {

		/** Key name */
		name?: string | null;

		/** Key value */
		value?: string | null;
	}

	/** Function key info. */
	export interface KeyInfoFormProperties {

		/** Key name */
		name: FormControl<string | null | undefined>,

		/** Key value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyInfoFormGroup() {
		return new FormGroup<KeyInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Web app key vault reference and status ARM resource. */
	export interface KeyVaultReferenceCollection {

		/** KeyVaultReferenceCollection resource specific properties */
		properties?: any;
	}

	/** Web app key vault reference and status ARM resource. */
	export interface KeyVaultReferenceCollectionFormProperties {

		/** KeyVaultReferenceCollection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateKeyVaultReferenceCollectionFormGroup() {
		return new FormGroup<KeyVaultReferenceCollectionFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Web app key vault reference and status ARM resource. */
	export interface KeyVaultReferenceResource {

		/** Description of site key vault references. */
		properties?: ApiKVReference;
	}

	/** Web app key vault reference and status ARM resource. */
	export interface KeyVaultReferenceResourceFormProperties {
	}
	export function CreateKeyVaultReferenceResourceFormGroup() {
		return new FormGroup<KeyVaultReferenceResourceFormProperties>({
		});

	}


	/** MSDeploy ARM PUT information */
	export interface MSDeploy {

		/** MSDeploy ARM PUT core information */
		properties?: MSDeployCore;
	}

	/** MSDeploy ARM PUT information */
	export interface MSDeployFormProperties {
	}
	export function CreateMSDeployFormGroup() {
		return new FormGroup<MSDeployFormProperties>({
		});

	}


	/** MSDeploy ARM PUT core information */
	export interface MSDeployCore {

		/**
		 * Sets the AppOffline rule while the MSDeploy operation executes.
		 * Setting is <code>false</code> by default.
		 */
		appOffline?: boolean | null;

		/** SQL Connection String */
		connectionString?: string | null;

		/** Database Type */
		dbType?: string | null;

		/** Package URI */
		packageUri?: string | null;

		/** MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used. */
		setParameters?: {[id: string]: string };

		/** URI of MSDeploy Parameters file. Must not be set if SetParameters is used. */
		setParametersXmlFileUri?: string | null;

		/**
		 * Controls whether the MSDeploy operation skips the App_Data directory.
		 * If set to <code>true</code>, the existing App_Data directory on the destination
		 * will not be deleted, and any App_Data directory in the source will be ignored.
		 * Setting is <code>false</code> by default.
		 */
		skipAppData?: boolean | null;
	}

	/** MSDeploy ARM PUT core information */
	export interface MSDeployCoreFormProperties {

		/**
		 * Sets the AppOffline rule while the MSDeploy operation executes.
		 * Setting is <code>false</code> by default.
		 */
		appOffline: FormControl<boolean | null | undefined>,

		/** SQL Connection String */
		connectionString: FormControl<string | null | undefined>,

		/** Database Type */
		dbType: FormControl<string | null | undefined>,

		/** Package URI */
		packageUri: FormControl<string | null | undefined>,

		/** MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used. */
		setParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** URI of MSDeploy Parameters file. Must not be set if SetParameters is used. */
		setParametersXmlFileUri: FormControl<string | null | undefined>,

		/**
		 * Controls whether the MSDeploy operation skips the App_Data directory.
		 * If set to <code>true</code>, the existing App_Data directory on the destination
		 * will not be deleted, and any App_Data directory in the source will be ignored.
		 * Setting is <code>false</code> by default.
		 */
		skipAppData: FormControl<boolean | null | undefined>,
	}
	export function CreateMSDeployCoreFormGroup() {
		return new FormGroup<MSDeployCoreFormProperties>({
			appOffline: new FormControl<boolean | null | undefined>(undefined),
			connectionString: new FormControl<string | null | undefined>(undefined),
			dbType: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			setParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			setParametersXmlFileUri: new FormControl<string | null | undefined>(undefined),
			skipAppData: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** MSDeploy log */
	export interface MSDeployLog {

		/** MSDeployLog resource specific properties */
		properties?: any;
	}

	/** MSDeploy log */
	export interface MSDeployLogFormProperties {

		/** MSDeployLog resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateMSDeployLogFormGroup() {
		return new FormGroup<MSDeployLogFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** MSDeploy log entry */
	export interface MSDeployLogEntry {

		/** Log entry message */
		message?: string | null;

		/** Timestamp of log entry */
		time?: Date | null;

		/** Log entry type */
		type?: MSDeployLogEntryType | null;
	}

	/** MSDeploy log entry */
	export interface MSDeployLogEntryFormProperties {

		/** Log entry message */
		message: FormControl<string | null | undefined>,

		/** Timestamp of log entry */
		time: FormControl<Date | null | undefined>,

		/** Log entry type */
		type: FormControl<MSDeployLogEntryType | null | undefined>,
	}
	export function CreateMSDeployLogEntryFormGroup() {
		return new FormGroup<MSDeployLogEntryFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<MSDeployLogEntryType | null | undefined>(undefined),
		});

	}

	export enum MSDeployLogEntryType { Message = 0, Warning = 1, Error = 2 }


	/** MSDeploy ARM response */
	export interface MSDeployStatus {

		/** MSDeployStatus resource specific properties */
		properties?: any;
	}

	/** MSDeploy ARM response */
	export interface MSDeployStatusFormProperties {

		/** MSDeployStatus resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateMSDeployStatusFormGroup() {
		return new FormGroup<MSDeployStatusFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** MySQL migration request. */
	export interface MigrateMySqlRequest {

		/** MigrateMySqlRequest resource specific properties */
		properties?: any;
	}

	/** MySQL migration request. */
	export interface MigrateMySqlRequestFormProperties {

		/** MigrateMySqlRequest resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateMigrateMySqlRequestFormGroup() {
		return new FormGroup<MigrateMySqlRequestFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** MySQL migration status. */
	export interface MigrateMySqlStatus {

		/** MigrateMySqlStatus resource specific properties */
		properties?: any;
	}

	/** MySQL migration status. */
	export interface MigrateMySqlStatusFormProperties {

		/** MigrateMySqlStatus resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateMigrateMySqlStatusFormGroup() {
		return new FormGroup<MigrateMySqlStatusFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Full view of network features for an app (presently VNET integration and Hybrid Connections). */
	export interface NetworkFeatures {

		/** NetworkFeatures resource specific properties */
		properties?: any;
	}

	/** Full view of network features for an app (presently VNET integration and Hybrid Connections). */
	export interface NetworkFeaturesFormProperties {

		/** NetworkFeatures resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateNetworkFeaturesFormGroup() {
		return new FormGroup<NetworkFeaturesFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Network trace */
	export interface NetworkTrace {

		/** Detailed message of a network trace operation, e.g. error message in case of failure. */
		message?: string | null;

		/** Local file path for the captured network trace file. */
		path?: string | null;

		/** Current status of the network trace operation, same as Operation.Status (InProgress/Succeeded/Failed). */
		status?: string | null;
	}

	/** Network trace */
	export interface NetworkTraceFormProperties {

		/** Detailed message of a network trace operation, e.g. error message in case of failure. */
		message: FormControl<string | null | undefined>,

		/** Local file path for the captured network trace file. */
		path: FormControl<string | null | undefined>,

		/** Current status of the network trace operation, same as Operation.Status (InProgress/Succeeded/Failed). */
		status: FormControl<string | null | undefined>,
	}
	export function CreateNetworkTraceFormGroup() {
		return new FormGroup<NetworkTraceFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of performance monitor counters. */
	export interface PerfMonCounterCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<PerfMonResponse>;
	}

	/** Collection of performance monitor counters. */
	export interface PerfMonCounterCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePerfMonCounterCollectionFormGroup() {
		return new FormGroup<PerfMonCounterCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Performance monitor API response. */
	export interface PerfMonResponse {

		/** The response code. */
		code?: string | null;

		/** Metric information. */
		data?: PerfMonSet;

		/** The message. */
		message?: string | null;
	}

	/** Performance monitor API response. */
	export interface PerfMonResponseFormProperties {

		/** The response code. */
		code: FormControl<string | null | undefined>,

		/** The message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreatePerfMonResponseFormGroup() {
		return new FormGroup<PerfMonResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metric information. */
	export interface PerfMonSet {

		/** End time of the period. */
		endTime?: Date | null;

		/** Unique key name of the counter. */
		name?: string | null;

		/** Start time of the period. */
		startTime?: Date | null;

		/** Presented time grain. */
		timeGrain?: string | null;

		/** Collection of workers that are active during this time. */
		values?: Array<PerfMonSample>;
	}

	/** Metric information. */
	export interface PerfMonSetFormProperties {

		/** End time of the period. */
		endTime: FormControl<Date | null | undefined>,

		/** Unique key name of the counter. */
		name: FormControl<string | null | undefined>,

		/** Start time of the period. */
		startTime: FormControl<Date | null | undefined>,

		/** Presented time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreatePerfMonSetFormGroup() {
		return new FormGroup<PerfMonSetFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Performance monitor sample in a set. */
	export interface PerfMonSample {

		/** Name of the server on which the measurement is made. */
		instanceName?: string | null;

		/** Point in time for which counter was measured. */
		time?: Date | null;

		/** Value of counter at a certain time. */
		value?: number | null;
	}

	/** Performance monitor sample in a set. */
	export interface PerfMonSampleFormProperties {

		/** Name of the server on which the measurement is made. */
		instanceName: FormControl<string | null | undefined>,

		/** Point in time for which counter was measured. */
		time: FormControl<Date | null | undefined>,

		/** Value of counter at a certain time. */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePerfMonSampleFormGroup() {
		return new FormGroup<PerfMonSampleFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Premier add-on. */
	export interface PremierAddOn {

		/** PremierAddOn resource specific properties */
		properties?: any;
	}

	/** Premier add-on. */
	export interface PremierAddOnFormProperties {

		/** PremierAddOn resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreatePremierAddOnFormGroup() {
		return new FormGroup<PremierAddOnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** ARM resource for a PremierAddOn. */
	export interface PremierAddOnPatchResource {

		/** PremierAddOnPatchResource resource specific properties */
		properties?: any;
	}

	/** ARM resource for a PremierAddOn. */
	export interface PremierAddOnPatchResourceFormProperties {

		/** PremierAddOnPatchResource resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreatePremierAddOnPatchResourceFormGroup() {
		return new FormGroup<PremierAddOnPatchResourceFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Description of the parameters of Private Access for a Web Site. */
	export interface PrivateAccess {

		/** PrivateAccess resource specific properties */
		properties?: any;
	}

	/** Description of the parameters of Private Access for a Web Site. */
	export interface PrivateAccessFormProperties {

		/** PrivateAccess resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreatePrivateAccessFormGroup() {
		return new FormGroup<PrivateAccessFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Description of a Virtual Network subnet that is useable for private site access. */
	export interface PrivateAccessSubnet {

		/** The key (ID) of the subnet. */
		key?: number | null;

		/** The name of the subnet. */
		name?: string | null;
	}

	/** Description of a Virtual Network subnet that is useable for private site access. */
	export interface PrivateAccessSubnetFormProperties {

		/** The key (ID) of the subnet. */
		key: FormControl<number | null | undefined>,

		/** The name of the subnet. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePrivateAccessSubnetFormGroup() {
		return new FormGroup<PrivateAccessSubnetFormProperties>({
			key: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of a Virtual Network that is useable for private site access. */
	export interface PrivateAccessVirtualNetwork {

		/** The key (ID) of the Virtual Network. */
		key?: number | null;

		/** The name of the Virtual Network. */
		name?: string | null;

		/** The ARM uri of the Virtual Network */
		resourceId?: string | null;

		/** A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network. */
		subnets?: Array<PrivateAccessSubnet>;
	}

	/** Description of a Virtual Network that is useable for private site access. */
	export interface PrivateAccessVirtualNetworkFormProperties {

		/** The key (ID) of the Virtual Network. */
		key: FormControl<number | null | undefined>,

		/** The name of the Virtual Network. */
		name: FormControl<string | null | undefined>,

		/** The ARM uri of the Virtual Network */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreatePrivateAccessVirtualNetworkFormGroup() {
		return new FormGroup<PrivateAccessVirtualNetworkFormProperties>({
			key: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Process Information. */
	export interface ProcessInfo {

		/** ProcessInfo resource specific properties */
		properties?: any;
	}

	/** Process Information. */
	export interface ProcessInfoFormProperties {

		/** ProcessInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateProcessInfoFormGroup() {
		return new FormGroup<ProcessInfoFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Kudu process information elements. */
	export interface ProcessInfoCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<ProcessInfo>;
	}

	/** Collection of Kudu process information elements. */
	export interface ProcessInfoCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProcessInfoCollectionFormGroup() {
		return new FormGroup<ProcessInfoCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Process Module Information. */
	export interface ProcessModuleInfo {

		/** ProcessModuleInfo resource specific properties */
		properties?: any;
	}

	/** Process Module Information. */
	export interface ProcessModuleInfoFormProperties {

		/** ProcessModuleInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateProcessModuleInfoFormGroup() {
		return new FormGroup<ProcessModuleInfoFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Kudu thread information elements. */
	export interface ProcessModuleInfoCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<ProcessModuleInfo>;
	}

	/** Collection of Kudu thread information elements. */
	export interface ProcessModuleInfoCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProcessModuleInfoCollectionFormGroup() {
		return new FormGroup<ProcessModuleInfoCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Process Thread Information. */
	export interface ProcessThreadInfo {

		/** ProcessThreadInfo resource specific properties */
		properties?: any;
	}

	/** Process Thread Information. */
	export interface ProcessThreadInfoFormProperties {

		/** ProcessThreadInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateProcessThreadInfoFormGroup() {
		return new FormGroup<ProcessThreadInfoFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Kudu thread information elements. */
	export interface ProcessThreadInfoCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<ProcessThreadInfo>;
	}

	/** Collection of Kudu thread information elements. */
	export interface ProcessThreadInfoCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProcessThreadInfoCollectionFormGroup() {
		return new FormGroup<ProcessThreadInfoCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Public certificate object */
	export interface PublicCertificate {

		/** PublicCertificate resource specific properties */
		properties?: any;
	}

	/** Public certificate object */
	export interface PublicCertificateFormProperties {

		/** PublicCertificate resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreatePublicCertificateFormGroup() {
		return new FormGroup<PublicCertificateFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of public certificates */
	export interface PublicCertificateCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<PublicCertificate>;
	}

	/** Collection of public certificates */
	export interface PublicCertificateCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePublicCertificateCollectionFormGroup() {
		return new FormGroup<PublicCertificateCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hybrid Connection for an App Service app. */
	export interface RelayServiceConnectionEntity {

		/** RelayServiceConnectionEntity resource specific properties */
		properties?: any;
	}

	/** Hybrid Connection for an App Service app. */
	export interface RelayServiceConnectionEntityFormProperties {

		/** RelayServiceConnectionEntity resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateRelayServiceConnectionEntityFormGroup() {
		return new FormGroup<RelayServiceConnectionEntityFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Description of a restore request. */
	export interface RestoreRequest {

		/** RestoreRequest resource specific properties */
		properties?: any;
	}

	/** Description of a restore request. */
	export interface RestoreRequestFormProperties {

		/** RestoreRequest resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateRestoreRequestFormGroup() {
		return new FormGroup<RestoreRequestFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Configuration settings for the Azure App Service Authentication / Authorization feature. */
	export interface SiteAuthSettings {

		/** SiteAuthSettings resource specific properties */
		properties?: any;
	}

	/** Configuration settings for the Azure App Service Authentication / Authorization feature. */
	export interface SiteAuthSettingsFormProperties {

		/** SiteAuthSettings resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSiteAuthSettingsFormGroup() {
		return new FormGroup<SiteAuthSettingsFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Represents whether or not an app is cloneable. */
	export interface SiteCloneability {

		/** List of blocking application characteristics. */
		blockingCharacteristics?: Array<SiteCloneabilityCriterion>;

		/** List of features enabled on app that prevent cloning. */
		blockingFeatures?: Array<SiteCloneabilityCriterion>;

		/** Name of app. */
		result?: SiteCloneabilityResult | null;

		/**
		 * List of features enabled on app that are non-blocking but cannot be cloned. The app can still be cloned
		 * but the features in this list will not be set up on cloned app.
		 */
		unsupportedFeatures?: Array<SiteCloneabilityCriterion>;
	}

	/** Represents whether or not an app is cloneable. */
	export interface SiteCloneabilityFormProperties {

		/** Name of app. */
		result: FormControl<SiteCloneabilityResult | null | undefined>,
	}
	export function CreateSiteCloneabilityFormGroup() {
		return new FormGroup<SiteCloneabilityFormProperties>({
			result: new FormControl<SiteCloneabilityResult | null | undefined>(undefined),
		});

	}


	/** An app cloneability criterion. */
	export interface SiteCloneabilityCriterion {

		/** Description of criterion. */
		description?: string | null;

		/** Name of criterion. */
		name?: string | null;
	}

	/** An app cloneability criterion. */
	export interface SiteCloneabilityCriterionFormProperties {

		/** Description of criterion. */
		description: FormControl<string | null | undefined>,

		/** Name of criterion. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSiteCloneabilityCriterionFormGroup() {
		return new FormGroup<SiteCloneabilityCriterionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SiteCloneabilityResult { Cloneable = 0, PartiallyCloneable = 1, NotCloneable = 2 }


	/** Web app configuration ARM resource. */
	export interface SiteConfigResource {

		/** Configuration of an App Service app. */
		properties?: SiteConfigResourceProperties;
	}

	/** Web app configuration ARM resource. */
	export interface SiteConfigResourceFormProperties {
	}
	export function CreateSiteConfigResourceFormGroup() {
		return new FormGroup<SiteConfigResourceFormProperties>({
		});

	}

	export interface SiteConfigResourceProperties {

		/** <code>true</code> if Always On is enabled; otherwise, <code>false</code>. */
		alwaysOn?: boolean | null;

		/** Information about the formal API definition for the app. */
		apiDefinition?: SiteConfigResourcePropertiesApiDefinition;

		/** Azure API management (APIM) configuration linked to the app. */
		apiManagementConfig?: SiteConfigResourcePropertiesApiManagementConfig;

		/** App command line to launch. */
		appCommandLine?: string | null;

		/** Application settings. */
		SiteConfigResourcePropertiesAppSettings?: Array<SiteConfigResourcePropertiesAppSettings>;

		/** <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>. */
		autoHealEnabled?: boolean | null;

		/** Rules that can be defined for auto-heal. */
		autoHealRules?: SiteConfigResourcePropertiesAutoHealRules;

		/** Auto-swap slot name. */
		autoSwapSlotName?: string | null;

		/** Connection strings. */
		SiteConfigResourcePropertiesConnectionStrings?: Array<SiteConfigResourcePropertiesConnectionStrings>;

		/** Cross-Origin Resource Sharing (CORS) settings for the app. */
		cors?: SiteConfigResourcePropertiesCors;

		/** Default documents. */
		defaultDocuments?: Array<string>;

		/** <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>. */
		detailedErrorLoggingEnabled?: boolean | null;

		/** Document root. */
		documentRoot?: string | null;

		/** Routing rules in production experiments. */
		experiments?: SiteConfigResourcePropertiesExperiments;

		/** State of FTP / FTPS service */
		ftpsState?: CsmCopySlotEntitySiteConfigFtpsState | null;

		/** Handler mappings. */
		SiteConfigResourcePropertiesHandlerMappings?: Array<SiteConfigResourcePropertiesHandlerMappings>;

		/** Health check path */
		healthCheckPath?: string | null;

		/** Http20Enabled: configures a web site to allow clients to connect over http2.0 */
		http20Enabled?: boolean | null;

		/** <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>. */
		httpLoggingEnabled?: boolean | null;

		/** IP security restrictions for main. */
		SiteConfigResourcePropertiesIpSecurityRestrictions?: Array<SiteConfigResourcePropertiesIpSecurityRestrictions>;

		/** Java container. */
		javaContainer?: string | null;

		/** Java container version. */
		javaContainerVersion?: string | null;

		/** Java version. */
		javaVersion?: string | null;

		/** Metric limits set on an app. */
		limits?: SiteConfigResourcePropertiesLimits;

		/** Linux App Framework and version */
		linuxFxVersion?: string | null;

		/** Site load balancing. */
		loadBalancing?: CsmCopySlotEntitySiteConfigLoadBalancing | null;

		/** <code>true</code> to enable local MySQL; otherwise, <code>false</code>. */
		localMySqlEnabled?: boolean | null;

		/** HTTP logs directory size limit. */
		logsDirectorySizeLimit?: number | null;

		/** MachineKey of an app. */
		machineKey?: SiteConfigResourcePropertiesMachineKey;

		/** Managed pipeline mode. */
		managedPipelineMode?: CsmCopySlotEntitySiteConfigManagedPipelineMode | null;

		/** Managed Service Identity Id */
		managedServiceIdentityId?: number | null;

		/** MinTlsVersion: configures the minimum version of TLS required for SSL requests */
		minTlsVersion?: CsmCopySlotEntitySiteConfigMinTlsVersion | null;

		/** .NET Framework version. */
		netFrameworkVersion?: string | null;

		/** Version of Node.js. */
		nodeVersion?: string | null;

		/** Number of workers. */
		numberOfWorkers?: number | null;

		/** Version of PHP. */
		phpVersion?: string | null;

		/**
		 * Number of preWarmed instances.
		 * This setting only applies to the Consumption and Elastic Plans
		 * Minimum: 0
		 * Maximum: 10
		 */
		preWarmedInstanceCount?: number | null;

		/** Publishing user name. */
		publishingUsername?: string | null;

		/** Push settings for the App. */
		push?: SiteConfigResourcePropertiesPush;

		/** Version of Python. */
		pythonVersion?: string | null;

		/** <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>. */
		remoteDebuggingEnabled?: boolean | null;

		/** Remote debugging version. */
		remoteDebuggingVersion?: string | null;

		/** <code>true</code> if request tracing is enabled; otherwise, <code>false</code>. */
		requestTracingEnabled?: boolean | null;

		/** Request tracing expiration time. */
		requestTracingExpirationTime?: Date | null;

		/** IP security restrictions for scm. */
		SiteConfigResourcePropertiesScmIpSecurityRestrictions?: Array<SiteConfigResourcePropertiesScmIpSecurityRestrictions>;

		/** IP security restrictions for scm to use main. */
		scmIpSecurityRestrictionsUseMain?: boolean | null;

		/** SCM type. */
		scmType?: CsmCopySlotEntitySiteConfigScmType | null;

		/** Tracing options. */
		tracingOptions?: string | null;

		/** <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>. */
		use32BitWorkerProcess?: boolean | null;

		/** Virtual applications. */
		SiteConfigResourcePropertiesVirtualApplications?: Array<SiteConfigResourcePropertiesVirtualApplications>;

		/** Virtual Network name. */
		vnetName?: string | null;

		/** <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>. */
		webSocketsEnabled?: boolean | null;

		/** Xenon App Framework and version */
		windowsFxVersion?: string | null;

		/** Explicit Managed Service Identity Id */
		xManagedServiceIdentityId?: number | null;
	}
	export interface SiteConfigResourcePropertiesFormProperties {

		/** <code>true</code> if Always On is enabled; otherwise, <code>false</code>. */
		alwaysOn: FormControl<boolean | null | undefined>,

		/** App command line to launch. */
		appCommandLine: FormControl<string | null | undefined>,

		/** <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>. */
		autoHealEnabled: FormControl<boolean | null | undefined>,

		/** Auto-swap slot name. */
		autoSwapSlotName: FormControl<string | null | undefined>,

		/** <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>. */
		detailedErrorLoggingEnabled: FormControl<boolean | null | undefined>,

		/** Document root. */
		documentRoot: FormControl<string | null | undefined>,

		/** State of FTP / FTPS service */
		ftpsState: FormControl<CsmCopySlotEntitySiteConfigFtpsState | null | undefined>,

		/** Health check path */
		healthCheckPath: FormControl<string | null | undefined>,

		/** Http20Enabled: configures a web site to allow clients to connect over http2.0 */
		http20Enabled: FormControl<boolean | null | undefined>,

		/** <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>. */
		httpLoggingEnabled: FormControl<boolean | null | undefined>,

		/** Java container. */
		javaContainer: FormControl<string | null | undefined>,

		/** Java container version. */
		javaContainerVersion: FormControl<string | null | undefined>,

		/** Java version. */
		javaVersion: FormControl<string | null | undefined>,

		/** Linux App Framework and version */
		linuxFxVersion: FormControl<string | null | undefined>,

		/** Site load balancing. */
		loadBalancing: FormControl<CsmCopySlotEntitySiteConfigLoadBalancing | null | undefined>,

		/** <code>true</code> to enable local MySQL; otherwise, <code>false</code>. */
		localMySqlEnabled: FormControl<boolean | null | undefined>,

		/** HTTP logs directory size limit. */
		logsDirectorySizeLimit: FormControl<number | null | undefined>,

		/** Managed pipeline mode. */
		managedPipelineMode: FormControl<CsmCopySlotEntitySiteConfigManagedPipelineMode | null | undefined>,

		/** Managed Service Identity Id */
		managedServiceIdentityId: FormControl<number | null | undefined>,

		/** MinTlsVersion: configures the minimum version of TLS required for SSL requests */
		minTlsVersion: FormControl<CsmCopySlotEntitySiteConfigMinTlsVersion | null | undefined>,

		/** .NET Framework version. */
		netFrameworkVersion: FormControl<string | null | undefined>,

		/** Version of Node.js. */
		nodeVersion: FormControl<string | null | undefined>,

		/** Number of workers. */
		numberOfWorkers: FormControl<number | null | undefined>,

		/** Version of PHP. */
		phpVersion: FormControl<string | null | undefined>,

		/**
		 * Number of preWarmed instances.
		 * This setting only applies to the Consumption and Elastic Plans
		 * Minimum: 0
		 * Maximum: 10
		 */
		preWarmedInstanceCount: FormControl<number | null | undefined>,

		/** Publishing user name. */
		publishingUsername: FormControl<string | null | undefined>,

		/** Version of Python. */
		pythonVersion: FormControl<string | null | undefined>,

		/** <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>. */
		remoteDebuggingEnabled: FormControl<boolean | null | undefined>,

		/** Remote debugging version. */
		remoteDebuggingVersion: FormControl<string | null | undefined>,

		/** <code>true</code> if request tracing is enabled; otherwise, <code>false</code>. */
		requestTracingEnabled: FormControl<boolean | null | undefined>,

		/** Request tracing expiration time. */
		requestTracingExpirationTime: FormControl<Date | null | undefined>,

		/** IP security restrictions for scm to use main. */
		scmIpSecurityRestrictionsUseMain: FormControl<boolean | null | undefined>,

		/** SCM type. */
		scmType: FormControl<CsmCopySlotEntitySiteConfigScmType | null | undefined>,

		/** Tracing options. */
		tracingOptions: FormControl<string | null | undefined>,

		/** <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>. */
		use32BitWorkerProcess: FormControl<boolean | null | undefined>,

		/** Virtual Network name. */
		vnetName: FormControl<string | null | undefined>,

		/** <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>. */
		webSocketsEnabled: FormControl<boolean | null | undefined>,

		/** Xenon App Framework and version */
		windowsFxVersion: FormControl<string | null | undefined>,

		/** Explicit Managed Service Identity Id */
		xManagedServiceIdentityId: FormControl<number | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesFormProperties>({
			alwaysOn: new FormControl<boolean | null | undefined>(undefined),
			appCommandLine: new FormControl<string | null | undefined>(undefined),
			autoHealEnabled: new FormControl<boolean | null | undefined>(undefined),
			autoSwapSlotName: new FormControl<string | null | undefined>(undefined),
			detailedErrorLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			documentRoot: new FormControl<string | null | undefined>(undefined),
			ftpsState: new FormControl<CsmCopySlotEntitySiteConfigFtpsState | null | undefined>(undefined),
			healthCheckPath: new FormControl<string | null | undefined>(undefined),
			http20Enabled: new FormControl<boolean | null | undefined>(undefined),
			httpLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			javaContainer: new FormControl<string | null | undefined>(undefined),
			javaContainerVersion: new FormControl<string | null | undefined>(undefined),
			javaVersion: new FormControl<string | null | undefined>(undefined),
			linuxFxVersion: new FormControl<string | null | undefined>(undefined),
			loadBalancing: new FormControl<CsmCopySlotEntitySiteConfigLoadBalancing | null | undefined>(undefined),
			localMySqlEnabled: new FormControl<boolean | null | undefined>(undefined),
			logsDirectorySizeLimit: new FormControl<number | null | undefined>(undefined),
			managedPipelineMode: new FormControl<CsmCopySlotEntitySiteConfigManagedPipelineMode | null | undefined>(undefined),
			managedServiceIdentityId: new FormControl<number | null | undefined>(undefined),
			minTlsVersion: new FormControl<CsmCopySlotEntitySiteConfigMinTlsVersion | null | undefined>(undefined),
			netFrameworkVersion: new FormControl<string | null | undefined>(undefined),
			nodeVersion: new FormControl<string | null | undefined>(undefined),
			numberOfWorkers: new FormControl<number | null | undefined>(undefined),
			phpVersion: new FormControl<string | null | undefined>(undefined),
			preWarmedInstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10)]),
			publishingUsername: new FormControl<string | null | undefined>(undefined),
			pythonVersion: new FormControl<string | null | undefined>(undefined),
			remoteDebuggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteDebuggingVersion: new FormControl<string | null | undefined>(undefined),
			requestTracingEnabled: new FormControl<boolean | null | undefined>(undefined),
			requestTracingExpirationTime: new FormControl<Date | null | undefined>(undefined),
			scmIpSecurityRestrictionsUseMain: new FormControl<boolean | null | undefined>(undefined),
			scmType: new FormControl<CsmCopySlotEntitySiteConfigScmType | null | undefined>(undefined),
			tracingOptions: new FormControl<string | null | undefined>(undefined),
			use32BitWorkerProcess: new FormControl<boolean | null | undefined>(undefined),
			vnetName: new FormControl<string | null | undefined>(undefined),
			webSocketsEnabled: new FormControl<boolean | null | undefined>(undefined),
			windowsFxVersion: new FormControl<string | null | undefined>(undefined),
			xManagedServiceIdentityId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesApiDefinition {

		/** The URL of the API definition. */
		url?: string | null;
	}
	export interface SiteConfigResourcePropertiesApiDefinitionFormProperties {

		/** The URL of the API definition. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesApiDefinitionFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesApiDefinitionFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesApiManagementConfig {

		/** APIM-Api Identifier. */
		id?: string | null;
	}
	export interface SiteConfigResourcePropertiesApiManagementConfigFormProperties {

		/** APIM-Api Identifier. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesApiManagementConfigFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesApiManagementConfigFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesAppSettings {

		/** Pair name. */
		name?: string | null;

		/** Pair value. */
		value?: string | null;
	}
	export interface SiteConfigResourcePropertiesAppSettingsFormProperties {

		/** Pair name. */
		name: FormControl<string | null | undefined>,

		/** Pair value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesAppSettingsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesAppSettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesAutoHealRules {

		/** Actions which to take by the auto-heal module when a rule is triggered. */
		actions?: SiteConfigResourcePropertiesAutoHealRulesActions;

		/** Triggers for auto-heal. */
		triggers?: SiteConfigResourcePropertiesAutoHealRulesTriggers;
	}
	export interface SiteConfigResourcePropertiesAutoHealRulesFormProperties {
	}
	export function CreateSiteConfigResourcePropertiesAutoHealRulesFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesAutoHealRulesFormProperties>({
		});

	}

	export interface SiteConfigResourcePropertiesAutoHealRulesActions {

		/** Predefined action to be taken. */
		actionType?: CsmCopySlotEntitySiteConfigAutoHealRulesActionsActionType | null;

		/**
		 * Custom action to be executed
		 * when an auto heal rule is triggered.
		 */
		customAction?: SiteConfigResourcePropertiesAutoHealRulesActionsCustomAction;

		/**
		 * Minimum time the process must execute
		 * before taking the action
		 */
		minProcessExecutionTime?: string | null;
	}
	export interface SiteConfigResourcePropertiesAutoHealRulesActionsFormProperties {

		/** Predefined action to be taken. */
		actionType: FormControl<CsmCopySlotEntitySiteConfigAutoHealRulesActionsActionType | null | undefined>,

		/**
		 * Minimum time the process must execute
		 * before taking the action
		 */
		minProcessExecutionTime: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesAutoHealRulesActionsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesAutoHealRulesActionsFormProperties>({
			actionType: new FormControl<CsmCopySlotEntitySiteConfigAutoHealRulesActionsActionType | null | undefined>(undefined),
			minProcessExecutionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesAutoHealRulesActionsCustomAction {

		/** Executable to be run. */
		exe?: string | null;

		/** Parameters for the executable. */
		parameters?: string | null;
	}
	export interface SiteConfigResourcePropertiesAutoHealRulesActionsCustomActionFormProperties {

		/** Executable to be run. */
		exe: FormControl<string | null | undefined>,

		/** Parameters for the executable. */
		parameters: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesAutoHealRulesActionsCustomActionFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesAutoHealRulesActionsCustomActionFormProperties>({
			exe: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesAutoHealRulesTriggers {

		/** A rule based on private bytes. */
		privateBytesInKB?: number | null;

		/** Trigger based on total requests. */
		requests?: SiteConfigResourcePropertiesAutoHealRulesTriggersRequests;

		/** Trigger based on request execution time. */
		slowRequests?: SiteConfigResourcePropertiesAutoHealRulesTriggersSlowRequests;

		/** A rule based on status codes. */
		SiteConfigResourcePropertiesAutoHealRulesTriggersStatusCodes?: Array<SiteConfigResourcePropertiesAutoHealRulesTriggersStatusCodes>;
	}
	export interface SiteConfigResourcePropertiesAutoHealRulesTriggersFormProperties {

		/** A rule based on private bytes. */
		privateBytesInKB: FormControl<number | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesAutoHealRulesTriggersFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesAutoHealRulesTriggersFormProperties>({
			privateBytesInKB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesAutoHealRulesTriggersRequests {

		/** Request Count. */
		count?: number | null;

		/** Time interval. */
		timeInterval?: string | null;
	}
	export interface SiteConfigResourcePropertiesAutoHealRulesTriggersRequestsFormProperties {

		/** Request Count. */
		count: FormControl<number | null | undefined>,

		/** Time interval. */
		timeInterval: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesAutoHealRulesTriggersRequestsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesAutoHealRulesTriggersRequestsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			timeInterval: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesAutoHealRulesTriggersSlowRequests {

		/** Request Count. */
		count?: number | null;

		/** Time interval. */
		timeInterval?: string | null;

		/** Time taken. */
		timeTaken?: string | null;
	}
	export interface SiteConfigResourcePropertiesAutoHealRulesTriggersSlowRequestsFormProperties {

		/** Request Count. */
		count: FormControl<number | null | undefined>,

		/** Time interval. */
		timeInterval: FormControl<string | null | undefined>,

		/** Time taken. */
		timeTaken: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesAutoHealRulesTriggersSlowRequestsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesAutoHealRulesTriggersSlowRequestsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			timeInterval: new FormControl<string | null | undefined>(undefined),
			timeTaken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesAutoHealRulesTriggersStatusCodes {

		/** Request Count. */
		count?: number | null;

		/** HTTP status code. */
		status?: number | null;

		/** Request Sub Status. */
		subStatus?: number | null;

		/** Time interval. */
		timeInterval?: string | null;

		/** Win32 error code. */
		win32Status?: number | null;
	}
	export interface SiteConfigResourcePropertiesAutoHealRulesTriggersStatusCodesFormProperties {

		/** Request Count. */
		count: FormControl<number | null | undefined>,

		/** HTTP status code. */
		status: FormControl<number | null | undefined>,

		/** Request Sub Status. */
		subStatus: FormControl<number | null | undefined>,

		/** Time interval. */
		timeInterval: FormControl<string | null | undefined>,

		/** Win32 error code. */
		win32Status: FormControl<number | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesAutoHealRulesTriggersStatusCodesFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesAutoHealRulesTriggersStatusCodesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			subStatus: new FormControl<number | null | undefined>(undefined),
			timeInterval: new FormControl<string | null | undefined>(undefined),
			win32Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesConnectionStrings {

		/** Connection string value. */
		connectionString?: string | null;

		/** Name of connection string. */
		name?: string | null;

		/** Type of database. */
		type?: ConnStringValueTypePairType | null;
	}
	export interface SiteConfigResourcePropertiesConnectionStringsFormProperties {

		/** Connection string value. */
		connectionString: FormControl<string | null | undefined>,

		/** Name of connection string. */
		name: FormControl<string | null | undefined>,

		/** Type of database. */
		type: FormControl<ConnStringValueTypePairType | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesConnectionStringsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesConnectionStringsFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ConnStringValueTypePairType | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesCors {

		/**
		 * Gets or sets the list of origins that should be allowed to make cross-origin
		 * calls (for example: http://example.com:12345). Use "*" to allow all.
		 */
		allowedOrigins?: Array<string>;

		/**
		 * Gets or sets whether CORS requests with credentials are allowed. See
		 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
		 * for more details.
		 */
		supportCredentials?: boolean | null;
	}
	export interface SiteConfigResourcePropertiesCorsFormProperties {

		/**
		 * Gets or sets whether CORS requests with credentials are allowed. See
		 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
		 * for more details.
		 */
		supportCredentials: FormControl<boolean | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesCorsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesCorsFormProperties>({
			supportCredentials: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesExperiments {

		/** List of ramp-up rules. */
		SiteConfigResourcePropertiesExperimentsRampUpRules?: Array<SiteConfigResourcePropertiesExperimentsRampUpRules>;
	}
	export interface SiteConfigResourcePropertiesExperimentsFormProperties {
	}
	export function CreateSiteConfigResourcePropertiesExperimentsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesExperimentsFormProperties>({
		});

	}

	export interface SiteConfigResourcePropertiesExperimentsRampUpRules {

		/** Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. */
		actionHostName?: string | null;

		/**
		 * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
		 * https://www.siteextensions.net/packages/TiPCallback/
		 */
		changeDecisionCallbackUrl?: string | null;

		/** Specifies interval in minutes to reevaluate ReroutePercentage. */
		changeIntervalInMinutes?: number | null;

		/**
		 * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or
		 * <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm
		 * can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
		 */
		changeStep?: number | null;

		/** Specifies upper boundary below which ReroutePercentage will stay. */
		maxReroutePercentage?: number | null;

		/** Specifies lower boundary above which ReroutePercentage will stay. */
		minReroutePercentage?: number | null;

		/** Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. */
		name?: string | null;

		/** Percentage of the traffic which will be redirected to <code>ActionHostName</code>. */
		reroutePercentage?: number | null;
	}
	export interface SiteConfigResourcePropertiesExperimentsRampUpRulesFormProperties {

		/** Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. */
		actionHostName: FormControl<string | null | undefined>,

		/**
		 * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
		 * https://www.siteextensions.net/packages/TiPCallback/
		 */
		changeDecisionCallbackUrl: FormControl<string | null | undefined>,

		/** Specifies interval in minutes to reevaluate ReroutePercentage. */
		changeIntervalInMinutes: FormControl<number | null | undefined>,

		/**
		 * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or
		 * <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm
		 * can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
		 */
		changeStep: FormControl<number | null | undefined>,

		/** Specifies upper boundary below which ReroutePercentage will stay. */
		maxReroutePercentage: FormControl<number | null | undefined>,

		/** Specifies lower boundary above which ReroutePercentage will stay. */
		minReroutePercentage: FormControl<number | null | undefined>,

		/** Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. */
		name: FormControl<string | null | undefined>,

		/** Percentage of the traffic which will be redirected to <code>ActionHostName</code>. */
		reroutePercentage: FormControl<number | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesExperimentsRampUpRulesFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesExperimentsRampUpRulesFormProperties>({
			actionHostName: new FormControl<string | null | undefined>(undefined),
			changeDecisionCallbackUrl: new FormControl<string | null | undefined>(undefined),
			changeIntervalInMinutes: new FormControl<number | null | undefined>(undefined),
			changeStep: new FormControl<number | null | undefined>(undefined),
			maxReroutePercentage: new FormControl<number | null | undefined>(undefined),
			minReroutePercentage: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reroutePercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesHandlerMappings {

		/** Command-line arguments to be passed to the script processor. */
		arguments?: string | null;

		/** Requests with this extension will be handled using the specified FastCGI application. */
		extension?: string | null;

		/** The absolute path to the FastCGI application. */
		scriptProcessor?: string | null;
	}
	export interface SiteConfigResourcePropertiesHandlerMappingsFormProperties {

		/** Command-line arguments to be passed to the script processor. */
		arguments: FormControl<string | null | undefined>,

		/** Requests with this extension will be handled using the specified FastCGI application. */
		extension: FormControl<string | null | undefined>,

		/** The absolute path to the FastCGI application. */
		scriptProcessor: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesHandlerMappingsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesHandlerMappingsFormProperties>({
			arguments: new FormControl<string | null | undefined>(undefined),
			extension: new FormControl<string | null | undefined>(undefined),
			scriptProcessor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesIpSecurityRestrictions {

		/** Allow or Deny access for this IP range. */
		action?: string | null;

		/** IP restriction rule description. */
		description?: string | null;

		/**
		 * IP address the security restriction is valid for.
		 * It can be in form of pure ipv4 address (required SubnetMask property) or
		 * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
		 * SubnetMask property must not be specified.
		 */
		ipAddress?: string | null;

		/** IP restriction rule name. */
		name?: string | null;

		/** Priority of IP restriction rule. */
		priority?: number | null;

		/** Subnet mask for the range of IP addresses the restriction is valid for. */
		subnetMask?: string | null;

		/** (internal) Subnet traffic tag */
		subnetTrafficTag?: number | null;

		/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
		tag?: CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null;

		/** Virtual network resource id */
		vnetSubnetResourceId?: string | null;

		/** (internal) Vnet traffic tag */
		vnetTrafficTag?: number | null;
	}
	export interface SiteConfigResourcePropertiesIpSecurityRestrictionsFormProperties {

		/** Allow or Deny access for this IP range. */
		action: FormControl<string | null | undefined>,

		/** IP restriction rule description. */
		description: FormControl<string | null | undefined>,

		/**
		 * IP address the security restriction is valid for.
		 * It can be in form of pure ipv4 address (required SubnetMask property) or
		 * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
		 * SubnetMask property must not be specified.
		 */
		ipAddress: FormControl<string | null | undefined>,

		/** IP restriction rule name. */
		name: FormControl<string | null | undefined>,

		/** Priority of IP restriction rule. */
		priority: FormControl<number | null | undefined>,

		/** Subnet mask for the range of IP addresses the restriction is valid for. */
		subnetMask: FormControl<string | null | undefined>,

		/** (internal) Subnet traffic tag */
		subnetTrafficTag: FormControl<number | null | undefined>,

		/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
		tag: FormControl<CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null | undefined>,

		/** Virtual network resource id */
		vnetSubnetResourceId: FormControl<string | null | undefined>,

		/** (internal) Vnet traffic tag */
		vnetTrafficTag: FormControl<number | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesIpSecurityRestrictionsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesIpSecurityRestrictionsFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			subnetMask: new FormControl<string | null | undefined>(undefined),
			subnetTrafficTag: new FormControl<number | null | undefined>(undefined),
			tag: new FormControl<CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null | undefined>(undefined),
			vnetSubnetResourceId: new FormControl<string | null | undefined>(undefined),
			vnetTrafficTag: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesLimits {

		/** Maximum allowed disk size usage in MB. */
		maxDiskSizeInMb?: number | null;

		/** Maximum allowed memory usage in MB. */
		maxMemoryInMb?: number | null;

		/** Maximum allowed CPU usage percentage. */
		maxPercentageCpu?: number | null;
	}
	export interface SiteConfigResourcePropertiesLimitsFormProperties {

		/** Maximum allowed disk size usage in MB. */
		maxDiskSizeInMb: FormControl<number | null | undefined>,

		/** Maximum allowed memory usage in MB. */
		maxMemoryInMb: FormControl<number | null | undefined>,

		/** Maximum allowed CPU usage percentage. */
		maxPercentageCpu: FormControl<number | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesLimitsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesLimitsFormProperties>({
			maxDiskSizeInMb: new FormControl<number | null | undefined>(undefined),
			maxMemoryInMb: new FormControl<number | null | undefined>(undefined),
			maxPercentageCpu: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesMachineKey {

		/** Algorithm used for decryption. */
		decryption?: string | null;

		/** Decryption key. */
		decryptionKey?: string | null;

		/** MachineKey validation. */
		validation?: string | null;

		/** Validation key. */
		validationKey?: string | null;
	}
	export interface SiteConfigResourcePropertiesMachineKeyFormProperties {

		/** Algorithm used for decryption. */
		decryption: FormControl<string | null | undefined>,

		/** Decryption key. */
		decryptionKey: FormControl<string | null | undefined>,

		/** MachineKey validation. */
		validation: FormControl<string | null | undefined>,

		/** Validation key. */
		validationKey: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesMachineKeyFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesMachineKeyFormProperties>({
			decryption: new FormControl<string | null | undefined>(undefined),
			decryptionKey: new FormControl<string | null | undefined>(undefined),
			validation: new FormControl<string | null | undefined>(undefined),
			validationKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesPush {

		/** PushSettings resource specific properties */
		properties?: any;
	}
	export interface SiteConfigResourcePropertiesPushFormProperties {

		/** PushSettings resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesPushFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesPushFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesScmIpSecurityRestrictions {

		/** Allow or Deny access for this IP range. */
		action?: string | null;

		/** IP restriction rule description. */
		description?: string | null;

		/**
		 * IP address the security restriction is valid for.
		 * It can be in form of pure ipv4 address (required SubnetMask property) or
		 * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
		 * SubnetMask property must not be specified.
		 */
		ipAddress?: string | null;

		/** IP restriction rule name. */
		name?: string | null;

		/** Priority of IP restriction rule. */
		priority?: number | null;

		/** Subnet mask for the range of IP addresses the restriction is valid for. */
		subnetMask?: string | null;

		/** (internal) Subnet traffic tag */
		subnetTrafficTag?: number | null;

		/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
		tag?: CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null;

		/** Virtual network resource id */
		vnetSubnetResourceId?: string | null;

		/** (internal) Vnet traffic tag */
		vnetTrafficTag?: number | null;
	}
	export interface SiteConfigResourcePropertiesScmIpSecurityRestrictionsFormProperties {

		/** Allow or Deny access for this IP range. */
		action: FormControl<string | null | undefined>,

		/** IP restriction rule description. */
		description: FormControl<string | null | undefined>,

		/**
		 * IP address the security restriction is valid for.
		 * It can be in form of pure ipv4 address (required SubnetMask property) or
		 * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
		 * SubnetMask property must not be specified.
		 */
		ipAddress: FormControl<string | null | undefined>,

		/** IP restriction rule name. */
		name: FormControl<string | null | undefined>,

		/** Priority of IP restriction rule. */
		priority: FormControl<number | null | undefined>,

		/** Subnet mask for the range of IP addresses the restriction is valid for. */
		subnetMask: FormControl<string | null | undefined>,

		/** (internal) Subnet traffic tag */
		subnetTrafficTag: FormControl<number | null | undefined>,

		/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
		tag: FormControl<CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null | undefined>,

		/** Virtual network resource id */
		vnetSubnetResourceId: FormControl<string | null | undefined>,

		/** (internal) Vnet traffic tag */
		vnetTrafficTag: FormControl<number | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesScmIpSecurityRestrictionsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesScmIpSecurityRestrictionsFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			subnetMask: new FormControl<string | null | undefined>(undefined),
			subnetTrafficTag: new FormControl<number | null | undefined>(undefined),
			tag: new FormControl<CsmCopySlotEntitySiteConfigIpSecurityRestrictionsTag | null | undefined>(undefined),
			vnetSubnetResourceId: new FormControl<string | null | undefined>(undefined),
			vnetTrafficTag: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesVirtualApplications {

		/** Physical path. */
		physicalPath?: string | null;

		/** <code>true</code> if preloading is enabled; otherwise, <code>false</code>. */
		preloadEnabled?: boolean | null;

		/** Virtual directories for virtual application. */
		SiteConfigResourcePropertiesVirtualApplicationsVirtualDirectories?: Array<SiteConfigResourcePropertiesVirtualApplicationsVirtualDirectories>;

		/** Virtual path. */
		virtualPath?: string | null;
	}
	export interface SiteConfigResourcePropertiesVirtualApplicationsFormProperties {

		/** Physical path. */
		physicalPath: FormControl<string | null | undefined>,

		/** <code>true</code> if preloading is enabled; otherwise, <code>false</code>. */
		preloadEnabled: FormControl<boolean | null | undefined>,

		/** Virtual path. */
		virtualPath: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesVirtualApplicationsFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesVirtualApplicationsFormProperties>({
			physicalPath: new FormControl<string | null | undefined>(undefined),
			preloadEnabled: new FormControl<boolean | null | undefined>(undefined),
			virtualPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteConfigResourcePropertiesVirtualApplicationsVirtualDirectories {

		/** Physical path. */
		physicalPath?: string | null;

		/** Path to virtual application. */
		virtualPath?: string | null;
	}
	export interface SiteConfigResourcePropertiesVirtualApplicationsVirtualDirectoriesFormProperties {

		/** Physical path. */
		physicalPath: FormControl<string | null | undefined>,

		/** Path to virtual application. */
		virtualPath: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourcePropertiesVirtualApplicationsVirtualDirectoriesFormGroup() {
		return new FormGroup<SiteConfigResourcePropertiesVirtualApplicationsVirtualDirectoriesFormProperties>({
			physicalPath: new FormControl<string | null | undefined>(undefined),
			virtualPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of site configurations. */
	export interface SiteConfigResourceCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<SiteConfigResource>;
	}

	/** Collection of site configurations. */
	export interface SiteConfigResourceCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigResourceCollectionFormGroup() {
		return new FormGroup<SiteConfigResourceCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A snapshot of a web app configuration. */
	export interface SiteConfigurationSnapshotInfo {

		/** SiteConfigurationSnapshotInfo resource specific properties */
		properties?: any;
	}

	/** A snapshot of a web app configuration. */
	export interface SiteConfigurationSnapshotInfoFormProperties {

		/** SiteConfigurationSnapshotInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSiteConfigurationSnapshotInfoFormGroup() {
		return new FormGroup<SiteConfigurationSnapshotInfoFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of metadata for the app configuration snapshots that can be restored. */
	export interface SiteConfigurationSnapshotInfoCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<SiteConfigurationSnapshotInfo>;
	}

	/** Collection of metadata for the app configuration snapshots that can be restored. */
	export interface SiteConfigurationSnapshotInfoCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigurationSnapshotInfoCollectionFormGroup() {
		return new FormGroup<SiteConfigurationSnapshotInfoCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Site Extension Information. */
	export interface SiteExtensionInfo {

		/** SiteExtensionInfo resource specific properties */
		properties?: any;
	}

	/** Site Extension Information. */
	export interface SiteExtensionInfoFormProperties {

		/** SiteExtensionInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSiteExtensionInfoFormGroup() {
		return new FormGroup<SiteExtensionInfoFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Kudu site extension information elements. */
	export interface SiteExtensionInfoCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<SiteExtensionInfo>;
	}

	/** Collection of Kudu site extension information elements. */
	export interface SiteExtensionInfoCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSiteExtensionInfoCollectionFormGroup() {
		return new FormGroup<SiteExtensionInfoCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instance of an app. */
	export interface SiteInstance {

		/** SiteInstance resource specific properties */
		properties?: any;
	}

	/** Instance of an app. */
	export interface SiteInstanceFormProperties {

		/** SiteInstance resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSiteInstanceFormGroup() {
		return new FormGroup<SiteInstanceFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Configuration of App Service site logs. */
	export interface SiteLogsConfig {

		/** SiteLogsConfig resource specific properties */
		properties?: any;
	}

	/** Configuration of App Service site logs. */
	export interface SiteLogsConfigFormProperties {

		/** SiteLogsConfig resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSiteLogsConfigFormGroup() {
		return new FormGroup<SiteLogsConfigFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** ARM resource for a site. */
	export interface SitePatchResource {

		/** Managed service identity. */
		identity?: SitePatchResourceIdentity;

		/** SitePatchResource resource specific properties */
		properties?: any;
	}

	/** ARM resource for a site. */
	export interface SitePatchResourceFormProperties {

		/** SitePatchResource resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSitePatchResourceFormGroup() {
		return new FormGroup<SitePatchResourceFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface SitePatchResourceIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: SitePatchResourceIdentityUserAssignedIdentities };
	}
	export interface SitePatchResourceIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: SitePatchResourceIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateSitePatchResourceIdentityFormGroup() {
		return new FormGroup<SitePatchResourceIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: SitePatchResourceIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface SitePatchResourceIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface SitePatchResourceIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateSitePatchResourceIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<SitePatchResourceIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used for getting PHP error logging flag. */
	export interface SitePhpErrorLogFlag {

		/** SitePhpErrorLogFlag resource specific properties */
		properties?: any;
	}

	/** Used for getting PHP error logging flag. */
	export interface SitePhpErrorLogFlagFormProperties {

		/** SitePhpErrorLogFlag resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSitePhpErrorLogFlagFormGroup() {
		return new FormGroup<SitePhpErrorLogFlagFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Source control configuration for an app. */
	export interface SiteSourceControl {

		/** SiteSourceControl resource specific properties */
		properties?: any;
	}

	/** Source control configuration for an app. */
	export interface SiteSourceControlFormProperties {

		/** SiteSourceControl resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSiteSourceControlFormGroup() {
		return new FormGroup<SiteSourceControlFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/**
	 * Names for connection strings, application settings, and external Azure storage account configuration
	 * identifiers to be marked as sticky to the deployment slot and not moved during a swap operation.
	 * This is valid for all deployment slots in an app.
	 */
	export interface SlotConfigNames {

		/** List of application settings names. */
		appSettingNames?: Array<string>;

		/** List of external Azure storage account identifiers. */
		azureStorageConfigNames?: Array<string>;

		/** List of connection string names. */
		connectionStringNames?: Array<string>;
	}

	/**
	 * Names for connection strings, application settings, and external Azure storage account configuration
	 * identifiers to be marked as sticky to the deployment slot and not moved during a swap operation.
	 * This is valid for all deployment slots in an app.
	 */
	export interface SlotConfigNamesFormProperties {
	}
	export function CreateSlotConfigNamesFormGroup() {
		return new FormGroup<SlotConfigNamesFormProperties>({
		});

	}


	/** Slot Config names azure resource. */
	export interface SlotConfigNamesResource {

		/**
		 * Names for connection strings, application settings, and external Azure storage account configuration
		 * identifiers to be marked as sticky to the deployment slot and not moved during a swap operation.
		 * This is valid for all deployment slots in an app.
		 */
		properties?: SlotConfigNames;
	}

	/** Slot Config names azure resource. */
	export interface SlotConfigNamesResourceFormProperties {
	}
	export function CreateSlotConfigNamesResourceFormGroup() {
		return new FormGroup<SlotConfigNamesResourceFormProperties>({
		});

	}


	/** A setting difference between two deployment slots of an app. */
	export interface SlotDifference {

		/** SlotDifference resource specific properties */
		properties?: any;
	}

	/** A setting difference between two deployment slots of an app. */
	export interface SlotDifferenceFormProperties {

		/** SlotDifference resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSlotDifferenceFormGroup() {
		return new FormGroup<SlotDifferenceFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of slot differences. */
	export interface SlotDifferenceCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<SlotDifference>;
	}

	/** Collection of slot differences. */
	export interface SlotDifferenceCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSlotDifferenceCollectionFormGroup() {
		return new FormGroup<SlotDifferenceCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of snapshots which can be used to revert an app to a previous time. */
	export interface SnapshotCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		SnapshotCollectionValue: Array<SnapshotCollectionValue>;
	}

	/** Collection of snapshots which can be used to revert an app to a previous time. */
	export interface SnapshotCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotCollectionFormGroup() {
		return new FormGroup<SnapshotCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SnapshotCollectionValue {

		/** Snapshot resource specific properties */
		properties?: any;
	}
	export interface SnapshotCollectionValueFormProperties {

		/** Snapshot resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSnapshotCollectionValueFormGroup() {
		return new FormGroup<SnapshotCollectionValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Specifies the web app that snapshot contents will be retrieved from. */
	export interface SnapshotRecoverySource {

		/**
		 * ARM resource ID of the source app.
		 * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and
		 * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
		 */
		id?: string | null;

		/** Geographical location of the source web app, e.g. SouthEastAsia, SouthCentralUS */
		location?: string | null;
	}

	/** Specifies the web app that snapshot contents will be retrieved from. */
	export interface SnapshotRecoverySourceFormProperties {

		/**
		 * ARM resource ID of the source app.
		 * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and
		 * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
		 */
		id: FormControl<string | null | undefined>,

		/** Geographical location of the source web app, e.g. SouthEastAsia, SouthCentralUS */
		location: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotRecoverySourceFormGroup() {
		return new FormGroup<SnapshotRecoverySourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about app recovery operation. */
	export interface SnapshotRestoreRequest {

		/** SnapshotRestoreRequest resource specific properties */
		properties?: any;
	}

	/** Details about app recovery operation. */
	export interface SnapshotRestoreRequestFormProperties {

		/** SnapshotRestoreRequest resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSnapshotRestoreRequestFormGroup() {
		return new FormGroup<SnapshotRestoreRequestFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Options for app content migration. */
	export interface StorageMigrationOptions {

		/** StorageMigrationOptions resource specific properties */
		properties?: any;
	}

	/** Options for app content migration. */
	export interface StorageMigrationOptionsFormProperties {

		/** StorageMigrationOptions resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateStorageMigrationOptionsFormGroup() {
		return new FormGroup<StorageMigrationOptionsFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Response for a migration of app content request. */
	export interface StorageMigrationResponse {

		/** StorageMigrationResponse resource specific properties */
		properties?: any;
	}

	/** Response for a migration of app content request. */
	export interface StorageMigrationResponseFormProperties {

		/** StorageMigrationResponse resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateStorageMigrationResponseFormGroup() {
		return new FormGroup<StorageMigrationResponseFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** String dictionary resource. */
	export interface StringDictionary {

		/** Settings. */
		properties?: {[id: string]: string };
	}

	/** String dictionary resource. */
	export interface StringDictionaryFormProperties {

		/** Settings. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStringDictionaryFormGroup() {
		return new FormGroup<StringDictionaryFormProperties>({
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration. */
	export interface SwiftVirtualNetwork {

		/** SwiftVirtualNetwork resource specific properties */
		properties?: any;
	}

	/** Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration. */
	export interface SwiftVirtualNetworkFormProperties {

		/** SwiftVirtualNetwork resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSwiftVirtualNetworkFormGroup() {
		return new FormGroup<SwiftVirtualNetworkFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Triggered Web Job History. List of Triggered Web Job Run Information elements. */
	export interface TriggeredJobHistory {

		/** TriggeredJobHistory resource specific properties */
		properties?: any;
	}

	/** Triggered Web Job History. List of Triggered Web Job Run Information elements. */
	export interface TriggeredJobHistoryFormProperties {

		/** TriggeredJobHistory resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateTriggeredJobHistoryFormGroup() {
		return new FormGroup<TriggeredJobHistoryFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Kudu continuous web job information elements. */
	export interface TriggeredJobHistoryCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<TriggeredJobHistory>;
	}

	/** Collection of Kudu continuous web job information elements. */
	export interface TriggeredJobHistoryCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTriggeredJobHistoryCollectionFormGroup() {
		return new FormGroup<TriggeredJobHistoryCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Triggered Web Job Run Information. */
	export interface TriggeredJobRun {

		/** TriggeredJobRun resource specific properties */
		properties?: any;
	}

	/** Triggered Web Job Run Information. */
	export interface TriggeredJobRunFormProperties {

		/** TriggeredJobRun resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateTriggeredJobRunFormGroup() {
		return new FormGroup<TriggeredJobRunFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Triggered Web Job Information. */
	export interface TriggeredWebJob {

		/** TriggeredWebJob resource specific properties */
		properties?: any;
	}

	/** Triggered Web Job Information. */
	export interface TriggeredWebJobFormProperties {

		/** TriggeredWebJob resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateTriggeredWebJobFormGroup() {
		return new FormGroup<TriggeredWebJobFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Kudu continuous web job information elements. */
	export interface TriggeredWebJobCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<TriggeredWebJob>;
	}

	/** Collection of Kudu continuous web job information elements. */
	export interface TriggeredWebJobCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTriggeredWebJobCollectionFormGroup() {
		return new FormGroup<TriggeredWebJobCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of app instances. */
	export interface WebAppInstanceCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<SiteInstance>;
	}

	/** Collection of app instances. */
	export interface WebAppInstanceCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebAppInstanceCollectionFormGroup() {
		return new FormGroup<WebAppInstanceCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Web Job Information. */
	export interface WebJob {

		/** WebJob resource specific properties */
		properties?: any;
	}

	/** Web Job Information. */
	export interface WebJobFormProperties {

		/** WebJob resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebJobFormGroup() {
		return new FormGroup<WebJobFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Kudu web job information elements. */
	export interface WebJobCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<WebJob>;
	}

	/** Collection of Kudu web job information elements. */
	export interface WebJobCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebJobCollectionFormGroup() {
		return new FormGroup<WebJobCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebSiteInstanceStatus {

		/** WebSiteInstanceStatus resource specific properties */
		properties?: any;
	}
	export interface WebSiteInstanceStatusFormProperties {

		/** WebSiteInstanceStatus resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebSiteInstanceStatusFormGroup() {
		return new FormGroup<WebSiteInstanceStatusFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all apps for a subscription.
		 * Description for Get all apps for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/sites
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListReturn} OK
		 */
		WebApps_List(subscriptionId: string, api_version: string): Observable<WebApps_ListReturn> {
			return this.http.get<WebApps_ListReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/sites&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all web, mobile, and API apps in the specified resource group.
		 * Description for Gets all web, mobile, and API apps in the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {boolean} includeSlots Specify <strong>true</strong> to include deployment slots in results. The default is false, which only gives you the production slot of all apps.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListByResourceGroupReturn} OK
		 */
		WebApps_ListByResourceGroup(resourceGroupName: string, includeSlots: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<WebApps_ListByResourceGroupReturn> {
			return this.http.get<WebApps_ListByResourceGroupReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites&includeSlots=' + includeSlots + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the details of a web, mobile, or API app.
		 * Description for Gets the details of a web, mobile, or API app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_GetReturn} OK.
		 */
		WebApps_Get(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WebApps_GetReturn> {
			return this.http.get<WebApps_GetReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
		 * Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_CreateOrUpdatePutBody} requestBody A JSON representation of the app properties. See example.
		 * @return {WebApps_CreateOrUpdateReturn} OK.
		 */
		WebApps_CreateOrUpdate(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: WebApps_CreateOrUpdatePutBody): Observable<WebApps_CreateOrUpdateReturn> {
			return this.http.put<WebApps_CreateOrUpdateReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a web, mobile, or API app, or one of the deployment slots.
		 * Description for Deletes a web, mobile, or API app, or one of the deployment slots.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app to delete.
		 * @param {boolean} deleteMetrics If true, web app metrics are also deleted.
		 * @param {boolean} deleteEmptyServerFarm Specify false if you want to keep empty App Service plan. By default, empty App Service plan is deleted.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted web app.
		 */
		WebApps_Delete(resourceGroupName: string, name: string, deleteMetrics: boolean | null | undefined, deleteEmptyServerFarm: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '&deleteMetrics=' + deleteMetrics + '&deleteEmptyServerFarm=' + deleteEmptyServerFarm + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
		 * Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SitePatchResource} requestBody A JSON representation of the app properties. See example.
		 * @return {WebApps_UpdateReturn} OK.
		 */
		WebApps_Update(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SitePatchResource): Observable<WebApps_UpdateReturn> {
			return this.http.patch<WebApps_UpdateReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyze a custom hostname.
		 * Description for Analyze a custom hostname.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/analyzeCustomHostname
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} hostName Custom hostname.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {CustomHostnameAnalysisResult} OK
		 */
		WebApps_AnalyzeCustomHostname(resourceGroupName: string, name: string, hostName: string | null | undefined, subscriptionId: string, api_version: string): Observable<CustomHostnameAnalysisResult> {
			return this.http.get<CustomHostnameAnalysisResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/analyzeCustomHostname&hostName=' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Applies the configuration settings from the target slot onto the current slot.
		 * Description for Applies the configuration settings from the target slot onto the current slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/applySlotConfig
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmSlotEntity} requestBody JSON object that contains the target slot name. See example.
		 * @return {void} OK.
		 */
		WebApps_ApplySlotConfigToProduction(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: CsmSlotEntity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/applySlotConfig&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a backup of an app.
		 * Description for Creates a backup of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backup
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {BackupRequest} requestBody Backup configuration. You can use the JSON response from the POST action as input here.
		 * @return {BackupItem} OK
		 */
		WebApps_Backup(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: BackupRequest): Observable<BackupItem> {
			return this.http.post<BackupItem>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/backup&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets existing backups of an app.
		 * Description for Gets existing backups of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {BackupItemCollection} OK
		 */
		WebApps_ListBackups(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<BackupItemCollection> {
			return this.http.get<BackupItemCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/backups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a backup of an app by its ID.
		 * Description for Gets a backup of an app by its ID.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups/{backupId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} backupId ID of the backup.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {BackupItem} OK
		 */
		WebApps_GetBackupStatus(resourceGroupName: string, name: string, backupId: string, subscriptionId: string, api_version: string): Observable<BackupItem> {
			return this.http.get<BackupItem>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/backups/' + (backupId == null ? '' : encodeURIComponent(backupId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a backup of an app by its ID.
		 * Description for Deletes a backup of an app by its ID.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups/{backupId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} backupId ID of the backup.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted web app backup item.
		 */
		WebApps_DeleteBackup(resourceGroupName: string, name: string, backupId: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/backups/' + (backupId == null ? '' : encodeURIComponent(backupId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.
		 * Description for Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups/{backupId}/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} backupId ID of backup.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {BackupRequest} requestBody Information on backup request.
		 * @return {BackupItem} OK
		 */
		WebApps_ListBackupStatusSecrets(resourceGroupName: string, name: string, backupId: string, subscriptionId: string, api_version: string, requestBody: BackupRequest): Observable<BackupItem> {
			return this.http.post<BackupItem>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/backups/' + (backupId == null ? '' : encodeURIComponent(backupId)) + '/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a specific backup to another app (or deployment slot, if specified).
		 * Description for Restores a specific backup to another app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups/{backupId}/restore
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} backupId ID of the backup.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RestoreRequest} requestBody Information on restore request .
		 * @return {void} Restore operation started.
		 */
		WebApps_Restore(resourceGroupName: string, name: string, backupId: string, subscriptionId: string, api_version: string, requestBody: RestoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/backups/' + (backupId == null ? '' : encodeURIComponent(backupId)) + '/restore&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the configurations of an app
		 * Description for List the configurations of an app
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteConfigResourceCollection} OK
		 */
		WebApps_ListConfigurations(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SiteConfigResourceCollection> {
			return this.http.get<SiteConfigResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Replaces the application settings of an app.
		 * Description for Replaces the application settings of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/appsettings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {StringDictionary} requestBody Application settings of the app.
		 * @return {StringDictionary} OK
		 */
		WebApps_UpdateApplicationSettings(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: StringDictionary): Observable<StringDictionary> {
			return this.http.put<StringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/appsettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the application settings of an app.
		 * Description for Gets the application settings of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/appsettings/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {StringDictionary} OK
		 */
		WebApps_ListApplicationSettings(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<StringDictionary> {
			return this.http.post<StringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/appsettings/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Updates the Authentication / Authorization settings associated with web app.
		 * Description for Updates the Authentication / Authorization settings associated with web app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/authsettings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteAuthSettings} requestBody Auth settings associated with web app.
		 * @return {SiteAuthSettings} OK
		 */
		WebApps_UpdateAuthSettings(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SiteAuthSettings): Observable<SiteAuthSettings> {
			return this.http.put<SiteAuthSettings>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/authsettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the Authentication/Authorization settings of an app.
		 * Description for Gets the Authentication/Authorization settings of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/authsettings/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteAuthSettings} OK
		 */
		WebApps_GetAuthSettings(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SiteAuthSettings> {
			return this.http.post<SiteAuthSettings>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/authsettings/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Updates the Azure storage account configurations of an app.
		 * Description for Updates the Azure storage account configurations of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/azurestorageaccounts
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AzureStoragePropertyDictionaryResource} requestBody Azure storage accounts of the app.
		 * @return {AzureStoragePropertyDictionaryResource} OK
		 */
		WebApps_UpdateAzureStorageAccounts(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: AzureStoragePropertyDictionaryResource): Observable<AzureStoragePropertyDictionaryResource> {
			return this.http.put<AzureStoragePropertyDictionaryResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/azurestorageaccounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the Azure storage account configurations of an app.
		 * Description for Gets the Azure storage account configurations of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/azurestorageaccounts/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AzureStoragePropertyDictionaryResource} OK
		 */
		WebApps_ListAzureStorageAccounts(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<AzureStoragePropertyDictionaryResource> {
			return this.http.post<AzureStoragePropertyDictionaryResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/azurestorageaccounts/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Updates the backup configuration of an app.
		 * Description for Updates the backup configuration of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/backup
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {BackupRequest} requestBody Edited backup configuration.
		 * @return {BackupRequest} OK
		 */
		WebApps_UpdateBackupConfiguration(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: BackupRequest): Observable<BackupRequest> {
			return this.http.put<BackupRequest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/backup&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the backup configuration of an app.
		 * Description for Deletes the backup configuration of an app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/backup
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted backup configuration.
		 */
		WebApps_DeleteBackupConfiguration(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/backup&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the backup configuration of an app.
		 * Description for Gets the backup configuration of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/backup/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {BackupRequest} OK
		 */
		WebApps_GetBackupConfiguration(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<BackupRequest> {
			return this.http.post<BackupRequest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/backup/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the config reference app settings and status of an app
		 * Description for Gets the config reference app settings and status of an app
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/configreferences/appsettings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {KeyVaultReferenceCollection} OK
		 */
		WebApps_GetAppSettingsKeyVaultReferences(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<KeyVaultReferenceCollection> {
			return this.http.get<KeyVaultReferenceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/configreferences/appsettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the config reference and status of an app
		 * Description for Gets the config reference and status of an app
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/configreferences/appsettings/{appSettingKey}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} appSettingKey App Setting key name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {KeyVaultReferenceResource} OK
		 */
		WebApps_GetAppSettingKeyVaultReference(resourceGroupName: string, name: string, appSettingKey: string, subscriptionId: string, api_version: string): Observable<KeyVaultReferenceResource> {
			return this.http.get<KeyVaultReferenceResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/configreferences/appsettings/' + (appSettingKey == null ? '' : encodeURIComponent(appSettingKey)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Replaces the connection strings of an app.
		 * Description for Replaces the connection strings of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/connectionstrings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {ConnectionStringDictionary} requestBody Connection strings of the app or deployment slot. See example.
		 * @return {ConnectionStringDictionary} OK
		 */
		WebApps_UpdateConnectionStrings(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: ConnectionStringDictionary): Observable<ConnectionStringDictionary> {
			return this.http.put<ConnectionStringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/connectionstrings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the connection strings of an app.
		 * Description for Gets the connection strings of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/connectionstrings/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ConnectionStringDictionary} OK
		 */
		WebApps_ListConnectionStrings(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<ConnectionStringDictionary> {
			return this.http.post<ConnectionStringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/connectionstrings/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the logging configuration of an app.
		 * Description for Gets the logging configuration of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/logs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteLogsConfig} OK
		 */
		WebApps_GetDiagnosticLogsConfiguration(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SiteLogsConfig> {
			return this.http.get<SiteLogsConfig>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/logs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates the logging configuration of an app.
		 * Description for Updates the logging configuration of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/logs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteLogsConfig} requestBody A SiteLogsConfig JSON object that contains the logging configuration to change in the "properties" property.
		 * @return {SiteLogsConfig} OK
		 */
		WebApps_UpdateDiagnosticLogsConfig(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SiteLogsConfig): Observable<SiteLogsConfig> {
			return this.http.put<SiteLogsConfig>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/logs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces the metadata of an app.
		 * Description for Replaces the metadata of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/metadata
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {StringDictionary} requestBody Edited metadata of the app or deployment slot. See example.
		 * @return {StringDictionary} OK
		 */
		WebApps_UpdateMetadata(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: StringDictionary): Observable<StringDictionary> {
			return this.http.put<StringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/metadata&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the metadata of an app.
		 * Description for Gets the metadata of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/metadata/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {StringDictionary} OK
		 */
		WebApps_ListMetadata(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<StringDictionary> {
			return this.http.post<StringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/metadata/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the Git/FTP publishing credentials of an app.
		 * Description for Gets the Git/FTP publishing credentials of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/publishingcredentials/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListPublishingCredentialsReturn} OK
		 */
		WebApps_ListPublishingCredentials(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WebApps_ListPublishingCredentialsReturn> {
			return this.http.post<WebApps_ListPublishingCredentialsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/publishingcredentials/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Updates the Push settings associated with web app.
		 * Description for Updates the Push settings associated with web app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/pushsettings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_UpdateSitePushSettingsPutBody} requestBody Push settings associated with web app.
		 * @return {WebApps_UpdateSitePushSettingsReturn} OK
		 */
		WebApps_UpdateSitePushSettings(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: WebApps_UpdateSitePushSettingsPutBody): Observable<WebApps_UpdateSitePushSettingsReturn> {
			return this.http.put<WebApps_UpdateSitePushSettingsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/pushsettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the Push settings associated with web app.
		 * Description for Gets the Push settings associated with web app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/pushsettings/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListSitePushSettingsReturn} OK
		 */
		WebApps_ListSitePushSettings(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WebApps_ListSitePushSettingsReturn> {
			return this.http.post<WebApps_ListSitePushSettingsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/pushsettings/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the names of app settings and connection strings that stick to the slot (not swapped).
		 * Description for Gets the names of app settings and connection strings that stick to the slot (not swapped).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/slotConfigNames
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SlotConfigNamesResource} OK
		 */
		WebApps_ListSlotConfigurationNames(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SlotConfigNamesResource> {
			return this.http.get<SlotConfigNamesResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/slotConfigNames&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates the names of application settings and connection string that remain with the slot during swap operation.
		 * Description for Updates the names of application settings and connection string that remain with the slot during swap operation.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/slotConfigNames
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SlotConfigNamesResource} requestBody Names of application settings and connection strings. See example.
		 * @return {SlotConfigNamesResource} OK
		 */
		WebApps_UpdateSlotConfigurationNames(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SlotConfigNamesResource): Observable<SlotConfigNamesResource> {
			return this.http.put<SlotConfigNamesResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/slotConfigNames&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the configuration of an app, such as platform version and bitness, default documents, virtual applications, Always On, etc.
		 * Description for Gets the configuration of an app, such as platform version and bitness, default documents, virtual applications, Always On, etc.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteConfigResource} OK
		 */
		WebApps_GetConfiguration(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SiteConfigResource> {
			return this.http.get<SiteConfigResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates the configuration of an app.
		 * Description for Updates the configuration of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteConfigResource} requestBody JSON representation of a SiteConfig object. See example.
		 * @return {SiteConfigResource} OK
		 */
		WebApps_CreateOrUpdateConfiguration(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SiteConfigResource): Observable<SiteConfigResource> {
			return this.http.put<SiteConfigResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of an app.
		 * Description for Updates the configuration of an app.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteConfigResource} requestBody JSON representation of a SiteConfig object. See example.
		 * @return {SiteConfigResource} OK
		 */
		WebApps_UpdateConfiguration(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SiteConfigResource): Observable<SiteConfigResource> {
			return this.http.patch<SiteConfigResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of web app configuration snapshots identifiers. Each element of the list contains a timestamp and the ID of the snapshot.
		 * Description for Gets a list of web app configuration snapshots identifiers. Each element of the list contains a timestamp and the ID of the snapshot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/web/snapshots
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteConfigurationSnapshotInfoCollection} OK
		 */
		WebApps_ListConfigurationSnapshotInfo(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SiteConfigurationSnapshotInfoCollection> {
			return this.http.get<SiteConfigurationSnapshotInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/web/snapshots&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a snapshot of the configuration of an app at a previous point in time.
		 * Description for Gets a snapshot of the configuration of an app at a previous point in time.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/web/snapshots/{snapshotId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} snapshotId The ID of the snapshot to read.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteConfigResource} OK
		 */
		WebApps_GetConfigurationSnapshot(resourceGroupName: string, name: string, snapshotId: string, subscriptionId: string, api_version: string): Observable<SiteConfigResource> {
			return this.http.get<SiteConfigResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/web/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Reverts the configuration of an app to a previous snapshot.
		 * Description for Reverts the configuration of an app to a previous snapshot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/web/snapshots/{snapshotId}/recover
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} snapshotId The ID of the snapshot to read.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_RecoverSiteConfigurationSnapshot(resourceGroupName: string, name: string, snapshotId: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/config/web/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '/recover&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the last lines of docker logs for the given site
		 * Description for Gets the last lines of docker logs for the given site
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/containerlogs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} OK
		 */
		WebApps_GetWebSiteContainerLogs(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/containerlogs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the ZIP archived docker log files for the given site
		 * Description for Gets the ZIP archived docker log files for the given site
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/containerlogs/zip/download
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} OK
		 */
		WebApps_GetContainerLogsZip(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/containerlogs/zip/download&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List continuous web jobs for an app, or a deployment slot.
		 * Description for List continuous web jobs for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/continuouswebjobs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ContinuousWebJobCollection} OK
		 */
		WebApps_ListContinuousWebJobs(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<ContinuousWebJobCollection> {
			return this.http.get<ContinuousWebJobCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/continuouswebjobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a continuous web job by its ID for an app, or a deployment slot.
		 * Description for Gets a continuous web job by its ID for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/continuouswebjobs/{webJobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ContinuousWebJob} Found continuous web job.
		 */
		WebApps_GetContinuousWebJob(resourceGroupName: string, name: string, webJobName: string, subscriptionId: string, api_version: string): Observable<ContinuousWebJob> {
			return this.http.get<ContinuousWebJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/continuouswebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Delete a continuous web job by its ID for an app, or a deployment slot.
		 * Description for Delete a continuous web job by its ID for an app, or a deployment slot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/continuouswebjobs/{webJobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted continuous web job.
		 */
		WebApps_DeleteContinuousWebJob(resourceGroupName: string, name: string, webJobName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/continuouswebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start a continuous web job for an app, or a deployment slot.
		 * Description for Start a continuous web job for an app, or a deployment slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/continuouswebjobs/{webJobName}/start
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Found continuous web job.
		 */
		WebApps_StartContinuousWebJob(resourceGroupName: string, name: string, webJobName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/continuouswebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop a continuous web job for an app, or a deployment slot.
		 * Description for Stop a continuous web job for an app, or a deployment slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/continuouswebjobs/{webJobName}/stop
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Found continuous web job.
		 */
		WebApps_StopContinuousWebJob(resourceGroupName: string, name: string, webJobName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/continuouswebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List deployments for an app, or a deployment slot.
		 * Description for List deployments for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/deployments
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DeploymentCollection} OK
		 */
		WebApps_ListDeployments(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<DeploymentCollection> {
			return this.http.get<DeploymentCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/deployments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a deployment by its ID for an app, or a deployment slot.
		 * Description for Get a deployment by its ID for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/deployments/{id}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} id Deployment ID.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Deployment} OK
		 */
		WebApps_GetDeployment(resourceGroupName: string, name: string, id: string, subscriptionId: string, api_version: string): Observable<Deployment> {
			return this.http.get<Deployment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/deployments/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a deployment for an app, or a deployment slot.
		 * Description for Create a deployment for an app, or a deployment slot.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/deployments/{id}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} id ID of an existing deployment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {Deployment} requestBody Deployment details.
		 * @return {Deployment} OK
		 */
		WebApps_CreateDeployment(resourceGroupName: string, name: string, id: string, subscriptionId: string, api_version: string, requestBody: Deployment): Observable<Deployment> {
			return this.http.put<Deployment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/deployments/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a deployment by its ID for an app, or a deployment slot.
		 * Description for Delete a deployment by its ID for an app, or a deployment slot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/deployments/{id}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} id Deployment ID.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted deployment.
		 */
		WebApps_DeleteDeployment(resourceGroupName: string, name: string, id: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/deployments/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List deployment log for specific deployment for an app, or a deployment slot.
		 * Description for List deployment log for specific deployment for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/deployments/{id}/log
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} id The ID of a specific deployment. This is the value of the name property in the JSON response from "GET /api/sites/{siteName}/deployments".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Deployment} OK
		 */
		WebApps_ListDeploymentLog(resourceGroupName: string, name: string, id: string, subscriptionId: string, api_version: string): Observable<Deployment> {
			return this.http.get<Deployment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/deployments/' + (id == null ? '' : encodeURIComponent(id)) + '/log&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Discovers an existing app backup that can be restored from a blob in Azure storage. Use this to get information about the databases stored in a backup.
		 * Description for Discovers an existing app backup that can be restored from a blob in Azure storage. Use this to get information about the databases stored in a backup.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/discoverbackup
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RestoreRequest} requestBody A RestoreRequest object that includes Azure storage URL and blog name for discovery of backup.
		 * @return {RestoreRequest} OK
		 */
		WebApps_DiscoverBackup(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: RestoreRequest): Observable<RestoreRequest> {
			return this.http.post<RestoreRequest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/discoverbackup&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ownership identifiers for domain associated with web app.
		 * Description for Lists ownership identifiers for domain associated with web app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/domainOwnershipIdentifiers
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListDomainOwnershipIdentifiersReturn} OK
		 */
		WebApps_ListDomainOwnershipIdentifiers(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WebApps_ListDomainOwnershipIdentifiersReturn> {
			return this.http.get<WebApps_ListDomainOwnershipIdentifiersReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/domainOwnershipIdentifiers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get domain ownership identifier for web app.
		 * Description for Get domain ownership identifier for web app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/domainOwnershipIdentifiers/{domainOwnershipIdentifierName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} domainOwnershipIdentifierName Name of domain ownership identifier.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_GetDomainOwnershipIdentifierReturn} OK
		 */
		WebApps_GetDomainOwnershipIdentifier(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, subscriptionId: string, api_version: string): Observable<WebApps_GetDomainOwnershipIdentifierReturn> {
			return this.http.get<WebApps_GetDomainOwnershipIdentifierReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/domainOwnershipIdentifiers/' + (domainOwnershipIdentifierName == null ? '' : encodeURIComponent(domainOwnershipIdentifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a domain ownership identifier for web app, or updates an existing ownership identifier.
		 * Description for Creates a domain ownership identifier for web app, or updates an existing ownership identifier.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/domainOwnershipIdentifiers/{domainOwnershipIdentifierName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} domainOwnershipIdentifierName Name of domain ownership identifier.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_CreateOrUpdateDomainOwnershipIdentifierPutBody} requestBody A JSON representation of the domain ownership properties.
		 * @return {WebApps_CreateOrUpdateDomainOwnershipIdentifierReturn} OK
		 */
		WebApps_CreateOrUpdateDomainOwnershipIdentifier(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, subscriptionId: string, api_version: string, requestBody: WebApps_CreateOrUpdateDomainOwnershipIdentifierPutBody): Observable<WebApps_CreateOrUpdateDomainOwnershipIdentifierReturn> {
			return this.http.put<WebApps_CreateOrUpdateDomainOwnershipIdentifierReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/domainOwnershipIdentifiers/' + (domainOwnershipIdentifierName == null ? '' : encodeURIComponent(domainOwnershipIdentifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a domain ownership identifier for a web app.
		 * Description for Deletes a domain ownership identifier for a web app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/domainOwnershipIdentifiers/{domainOwnershipIdentifierName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} domainOwnershipIdentifierName Name of domain ownership identifier.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted domain ownership identifier.
		 */
		WebApps_DeleteDomainOwnershipIdentifier(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/domainOwnershipIdentifiers/' + (domainOwnershipIdentifierName == null ? '' : encodeURIComponent(domainOwnershipIdentifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a domain ownership identifier for web app, or updates an existing ownership identifier.
		 * Description for Creates a domain ownership identifier for web app, or updates an existing ownership identifier.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/domainOwnershipIdentifiers/{domainOwnershipIdentifierName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} domainOwnershipIdentifierName Name of domain ownership identifier.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_UpdateDomainOwnershipIdentifierPatchBody} requestBody A JSON representation of the domain ownership properties.
		 * @return {WebApps_UpdateDomainOwnershipIdentifierReturn} OK
		 */
		WebApps_UpdateDomainOwnershipIdentifier(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, subscriptionId: string, api_version: string, requestBody: WebApps_UpdateDomainOwnershipIdentifierPatchBody): Observable<WebApps_UpdateDomainOwnershipIdentifierReturn> {
			return this.http.patch<WebApps_UpdateDomainOwnershipIdentifierReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/domainOwnershipIdentifiers/' + (domainOwnershipIdentifierName == null ? '' : encodeURIComponent(domainOwnershipIdentifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the status of the last MSDeploy operation.
		 * Description for Get the status of the last MSDeploy operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/extensions/MSDeploy
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {MSDeployStatus} OK
		 */
		WebApps_GetMSDeployStatus(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<MSDeployStatus> {
			return this.http.get<MSDeployStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/extensions/MSDeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Invoke the MSDeploy web app extension.
		 * Description for Invoke the MSDeploy web app extension.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/extensions/MSDeploy
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {MSDeploy} requestBody Details of MSDeploy operation
		 * @return {void} 
		 */
		WebApps_CreateMSDeployOperation(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: MSDeploy): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/extensions/MSDeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the MSDeploy Log for the last MSDeploy operation.
		 * Description for Get the MSDeploy Log for the last MSDeploy operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/extensions/MSDeploy/log
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {MSDeployLog} MSDeploy log returned.
		 */
		WebApps_GetMSDeployLog(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<MSDeployLog> {
			return this.http.get<MSDeployLog>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/extensions/MSDeploy/log&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List the functions for a web site, or a deployment slot.
		 * Description for List the functions for a web site, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/functions
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {FunctionEnvelopeCollection} Function information returned.
		 */
		WebApps_ListFunctions(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<FunctionEnvelopeCollection> {
			return this.http.get<FunctionEnvelopeCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/functions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Fetch a short lived token that can be exchanged for a master key.
		 * Description for Fetch a short lived token that can be exchanged for a master key.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/functions/admin/token
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {string} OK
		 */
		WebApps_GetFunctionsAdminToken(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/functions/admin/token&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Get function information by its ID for web site, or a deployment slot.
		 * Description for Get function information by its ID for web site, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/functions/{functionName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName Function name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {FunctionEnvelope} Function information returned.
		 */
		WebApps_GetFunction(resourceGroupName: string, name: string, functionName: string, subscriptionId: string, api_version: string): Observable<FunctionEnvelope> {
			return this.http.get<FunctionEnvelope>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create function for web site, or a deployment slot.
		 * Description for Create function for web site, or a deployment slot.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/functions/{functionName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName Function name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {FunctionEnvelope} requestBody Function details.
		 * @return {void} 
		 */
		WebApps_CreateFunction(resourceGroupName: string, name: string, functionName: string, subscriptionId: string, api_version: string, requestBody: FunctionEnvelope): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a function for web site, or a deployment slot.
		 * Description for Delete a function for web site, or a deployment slot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/functions/{functionName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName Function name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteFunction(resourceGroupName: string, name: string, functionName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or update a function secret.
		 * Description for Add or update a function secret.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/functions/{functionName}/keys/{keyName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName The name of the function.
		 * @param {string} keyName The name of the key.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {KeyInfo} requestBody The key to create or update
		 * @return {KeyInfo} Key was updated.
		 */
		WebApps_CreateOrUpdateFunctionSecret(resourceGroupName: string, name: string, functionName: string, keyName: string, subscriptionId: string, api_version: string, requestBody: KeyInfo): Observable<KeyInfo> {
			return this.http.put<KeyInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a function secret.
		 * Description for Delete a function secret.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/functions/{functionName}/keys/{keyName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName The name of the function.
		 * @param {string} keyName The name of the key.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteFunctionSecret(resourceGroupName: string, name: string, functionName: string, keyName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get function keys for a function in a web site, or a deployment slot.
		 * Description for Get function keys for a function in a web site, or a deployment slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/functions/{functionName}/listkeys
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName Function name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {StringDictionary} Function keys returned.
		 */
		WebApps_ListFunctionKeys(resourceGroupName: string, name: string, functionName: string, subscriptionId: string, api_version: string): Observable<StringDictionary> {
			return this.http.post<StringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '/listkeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get function secrets for a function in a web site, or a deployment slot.
		 * Description for Get function secrets for a function in a web site, or a deployment slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/functions/{functionName}/listsecrets
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName Function name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {FunctionSecrets} Function secrets returned.
		 */
		WebApps_ListFunctionSecrets(resourceGroupName: string, name: string, functionName: string, subscriptionId: string, api_version: string): Observable<FunctionSecrets> {
			return this.http.post<FunctionSecrets>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '/listsecrets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get host secrets for a function app.
		 * Description for Get host secrets for a function app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/host/default/listkeys
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {HostKeys} Host secrets returned.
		 */
		WebApps_ListHostKeys(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HostKeys> {
			return this.http.post<HostKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/host/default/listkeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * This is to allow calling via powershell and ARM template.
		 * Description for This is to allow calling via powershell and ARM template.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/host/default/listsyncstatus
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_ListSyncStatus(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/host/default/listsyncstatus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Syncs function trigger metadata to the management database
		 * Description for Syncs function trigger metadata to the management database
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/host/default/sync
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_SyncFunctions(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/host/default/sync&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or update a host level secret.
		 * Description for Add or update a host level secret.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/host/default/{keyType}/{keyName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} keyType The type of host key.
		 * @param {string} keyName The name of the key.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {KeyInfo} requestBody The key to create or update
		 * @return {KeyInfo} Key was updated.
		 */
		WebApps_CreateOrUpdateHostSecret(resourceGroupName: string, name: string, keyType: string, keyName: string, subscriptionId: string, api_version: string, requestBody: KeyInfo): Observable<KeyInfo> {
			return this.http.put<KeyInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/host/default/' + (keyType == null ? '' : encodeURIComponent(keyType)) + '/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a host level secret.
		 * Description for Delete a host level secret.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/host/default/{keyType}/{keyName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} keyType The type of host key.
		 * @param {string} keyName The name of the key.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteHostSecret(resourceGroupName: string, name: string, keyType: string, keyName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/host/default/' + (keyType == null ? '' : encodeURIComponent(keyType)) + '/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get hostname bindings for an app or a deployment slot.
		 * Description for Get hostname bindings for an app or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostNameBindings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {HostNameBindingCollection} OK
		 */
		WebApps_ListHostNameBindings(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HostNameBindingCollection> {
			return this.http.get<HostNameBindingCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hostNameBindings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the named hostname binding for an app (or deployment slot, if specified).
		 * Description for Get the named hostname binding for an app (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostNameBindings/{hostName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} hostName Hostname in the hostname binding.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {HostNameBinding} OK
		 */
		WebApps_GetHostNameBinding(resourceGroupName: string, name: string, hostName: string, subscriptionId: string, api_version: string): Observable<HostNameBinding> {
			return this.http.get<HostNameBinding>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hostNameBindings/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a hostname binding for an app.
		 * Description for Creates a hostname binding for an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostNameBindings/{hostName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} hostName Hostname in the hostname binding.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {HostNameBinding} requestBody Binding details. This is the JSON representation of a HostNameBinding object.
		 * @return {HostNameBinding} OK
		 */
		WebApps_CreateOrUpdateHostNameBinding(resourceGroupName: string, name: string, hostName: string, subscriptionId: string, api_version: string, requestBody: HostNameBinding): Observable<HostNameBinding> {
			return this.http.put<HostNameBinding>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hostNameBindings/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a hostname binding for an app.
		 * Description for Deletes a hostname binding for an app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostNameBindings/{hostName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} hostName Hostname in the hostname binding.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted hostname binding.
		 */
		WebApps_DeleteHostNameBinding(resourceGroupName: string, name: string, hostName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hostNameBindings/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a specific Service Bus Hybrid Connection used by this Web App.
		 * Description for Retrieves a specific Service Bus Hybrid Connection used by this Web App.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} namespaceName The namespace for this hybrid connection.
		 * @param {string} relayName The relay name for this hybrid connection.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_GetHybridConnectionReturn} OK
		 */
		WebApps_GetHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, subscriptionId: string, api_version: string): Observable<WebApps_GetHybridConnectionReturn> {
			return this.http.get<WebApps_GetHybridConnectionReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new Hybrid Connection using a Service Bus relay.
		 * Description for Creates a new Hybrid Connection using a Service Bus relay.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} namespaceName The namespace for this hybrid connection.
		 * @param {string} relayName The relay name for this hybrid connection.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_CreateOrUpdateHybridConnectionPutBody} requestBody The details of the hybrid connection.
		 * @return {WebApps_CreateOrUpdateHybridConnectionReturn} OK
		 */
		WebApps_CreateOrUpdateHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, subscriptionId: string, api_version: string, requestBody: WebApps_CreateOrUpdateHybridConnectionPutBody): Observable<WebApps_CreateOrUpdateHybridConnectionReturn> {
			return this.http.put<WebApps_CreateOrUpdateHybridConnectionReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a Hybrid Connection from this site.
		 * Description for Removes a Hybrid Connection from this site.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} namespaceName The namespace for this hybrid connection.
		 * @param {string} relayName The relay name for this hybrid connection.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted hybrid connection.
		 */
		WebApps_DeleteHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Hybrid Connection using a Service Bus relay.
		 * Description for Creates a new Hybrid Connection using a Service Bus relay.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} namespaceName The namespace for this hybrid connection.
		 * @param {string} relayName The relay name for this hybrid connection.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_UpdateHybridConnectionPatchBody} requestBody The details of the hybrid connection.
		 * @return {WebApps_UpdateHybridConnectionReturn} OK
		 */
		WebApps_UpdateHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, subscriptionId: string, api_version: string, requestBody: WebApps_UpdateHybridConnectionPatchBody): Observable<WebApps_UpdateHybridConnectionReturn> {
			return this.http.patch<WebApps_UpdateHybridConnectionReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all Service Bus Hybrid Connections used by this Web App.
		 * Description for Retrieves all Service Bus Hybrid Connections used by this Web App.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridConnectionRelays
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListHybridConnectionsReturn} OK
		 */
		WebApps_ListHybridConnections(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WebApps_ListHybridConnectionsReturn> {
			return this.http.get<WebApps_ListHybridConnectionsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionRelays&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets hybrid connections configured for an app (or deployment slot, if specified).
		 * Description for Gets hybrid connections configured for an app (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridconnection
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {RelayServiceConnectionEntity} OK
		 */
		WebApps_ListRelayServiceConnections(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<RelayServiceConnectionEntity> {
			return this.http.get<RelayServiceConnectionEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridconnection&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a hybrid connection configuration by its name.
		 * Description for Gets a hybrid connection configuration by its name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridconnection/{entityName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} entityName Name of the hybrid connection.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {RelayServiceConnectionEntity} OK
		 */
		WebApps_GetRelayServiceConnection(resourceGroupName: string, name: string, entityName: string, subscriptionId: string, api_version: string): Observable<RelayServiceConnectionEntity> {
			return this.http.get<RelayServiceConnectionEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridconnection/' + (entityName == null ? '' : encodeURIComponent(entityName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).
		 * Description for Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridconnection/{entityName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} entityName Name of the hybrid connection configuration.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RelayServiceConnectionEntity} requestBody Details of the hybrid connection configuration.
		 * @return {RelayServiceConnectionEntity} OK
		 */
		WebApps_CreateOrUpdateRelayServiceConnection(resourceGroupName: string, name: string, entityName: string, subscriptionId: string, api_version: string, requestBody: RelayServiceConnectionEntity): Observable<RelayServiceConnectionEntity> {
			return this.http.put<RelayServiceConnectionEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridconnection/' + (entityName == null ? '' : encodeURIComponent(entityName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a relay service connection by its name.
		 * Description for Deletes a relay service connection by its name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridconnection/{entityName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} entityName Name of the hybrid connection configuration.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted relay service connection.
		 */
		WebApps_DeleteRelayServiceConnection(resourceGroupName: string, name: string, entityName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridconnection/' + (entityName == null ? '' : encodeURIComponent(entityName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).
		 * Description for Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridconnection/{entityName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} entityName Name of the hybrid connection configuration.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RelayServiceConnectionEntity} requestBody Details of the hybrid connection configuration.
		 * @return {RelayServiceConnectionEntity} OK
		 */
		WebApps_UpdateRelayServiceConnection(resourceGroupName: string, name: string, entityName: string, subscriptionId: string, api_version: string, requestBody: RelayServiceConnectionEntity): Observable<RelayServiceConnectionEntity> {
			return this.http.patch<RelayServiceConnectionEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridconnection/' + (entityName == null ? '' : encodeURIComponent(entityName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all scale-out instances of an app.
		 * Description for Gets all scale-out instances of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebAppInstanceCollection} OK
		 */
		WebApps_ListInstanceIdentifiers(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WebAppInstanceCollection> {
			return this.http.get<WebAppInstanceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all scale-out instances of an app.
		 * Description for Gets all scale-out instances of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebSiteInstanceStatus} OK
		 */
		WebApps_GetInstanceInfo(resourceGroupName: string, name: string, instanceId: string, subscriptionId: string, api_version: string): Observable<WebSiteInstanceStatus> {
			return this.http.get<WebSiteInstanceStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the status of the last MSDeploy operation.
		 * Description for Get the status of the last MSDeploy operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/extensions/MSDeploy
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} instanceId ID of web app instance.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {MSDeployStatus} OK
		 */
		WebApps_GetInstanceMsDeployStatus(resourceGroupName: string, name: string, instanceId: string, subscriptionId: string, api_version: string): Observable<MSDeployStatus> {
			return this.http.get<MSDeployStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions/MSDeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Invoke the MSDeploy web app extension.
		 * Description for Invoke the MSDeploy web app extension.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/extensions/MSDeploy
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} instanceId ID of web app instance.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {MSDeploy} requestBody Details of MSDeploy operation
		 * @return {void} 
		 */
		WebApps_CreateInstanceMSDeployOperation(resourceGroupName: string, name: string, instanceId: string, subscriptionId: string, api_version: string, requestBody: MSDeploy): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions/MSDeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the MSDeploy Log for the last MSDeploy operation.
		 * Description for Get the MSDeploy Log for the last MSDeploy operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/extensions/MSDeploy/log
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} instanceId ID of web app instance.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {MSDeployLog} MSDeploy log returned.
		 */
		WebApps_GetInstanceMSDeployLog(resourceGroupName: string, name: string, instanceId: string, subscriptionId: string, api_version: string): Observable<MSDeployLog> {
			return this.http.get<MSDeployLog>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions/MSDeploy/log&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.
		 * Description for Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/processes
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessInfoCollection} Process terminated.
		 */
		WebApps_ListInstanceProcesses(resourceGroupName: string, name: string, instanceId: string, subscriptionId: string, api_version: string): Observable<ProcessInfoCollection> {
			return this.http.get<ProcessInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get process information by its ID for a specific scaled-out instance in a web site.
		 * Description for Get process information by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/processes/{processId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessInfo} Process information returned.
		 */
		WebApps_GetInstanceProcess(resourceGroupName: string, name: string, processId: string, instanceId: string, subscriptionId: string, api_version: string): Observable<ProcessInfo> {
			return this.http.get<ProcessInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.
		 * Description for Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/processes/{processId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteInstanceProcess(resourceGroupName: string, name: string, processId: string, instanceId: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.
		 * Description for Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/processes/{processId}/dump
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {string} OK
		 */
		WebApps_GetInstanceProcessDump(resourceGroupName: string, name: string, processId: string, instanceId: string, subscriptionId: string, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/dump&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * List module information for a process by its ID for a specific scaled-out instance in a web site.
		 * Description for List module information for a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/processes/{processId}/modules
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessModuleInfoCollection} Module information returned.
		 */
		WebApps_ListInstanceProcessModules(resourceGroupName: string, name: string, processId: string, instanceId: string, subscriptionId: string, api_version: string): Observable<ProcessModuleInfoCollection> {
			return this.http.get<ProcessModuleInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/modules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get process information by its ID for a specific scaled-out instance in a web site.
		 * Description for Get process information by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/processes/{processId}/modules/{baseAddress}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} baseAddress Module base address.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessModuleInfo} Module information returned.
		 */
		WebApps_GetInstanceProcessModule(resourceGroupName: string, name: string, processId: string, baseAddress: string, instanceId: string, subscriptionId: string, api_version: string): Observable<ProcessModuleInfo> {
			return this.http.get<ProcessModuleInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/modules/' + (baseAddress == null ? '' : encodeURIComponent(baseAddress)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List the threads in a process by its ID for a specific scaled-out instance in a web site.
		 * Description for List the threads in a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/processes/{processId}/threads
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessThreadInfoCollection} Thread information returned.
		 */
		WebApps_ListInstanceProcessThreads(resourceGroupName: string, name: string, processId: string, instanceId: string, subscriptionId: string, api_version: string): Observable<ProcessThreadInfoCollection> {
			return this.http.get<ProcessThreadInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/threads&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Shows whether an app can be cloned to another resource group or subscription.
		 * Description for Shows whether an app can be cloned to another resource group or subscription.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/iscloneable
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteCloneability} OK.
		 */
		WebApps_IsCloneable(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SiteCloneability> {
			return this.http.post<SiteCloneability>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/iscloneable&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets existing backups of an app.
		 * Description for Gets existing backups of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/listbackups
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {BackupItemCollection} OK
		 */
		WebApps_ListSiteBackups(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<BackupItemCollection> {
			return this.http.post<BackupItemCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/listbackups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * This is to allow calling via powershell and ARM template.
		 * Description for This is to allow calling via powershell and ARM template.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/listsyncfunctiontriggerstatus
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {FunctionSecrets} OK
		 */
		WebApps_ListSyncFunctionTriggers(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<FunctionSecrets> {
			return this.http.post<FunctionSecrets>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/listsyncfunctiontriggerstatus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Restores a web app.
		 * Description for Restores a web app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/migrate
		 * @param {string} subscriptionName Azure subscription.
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {StorageMigrationOptions} requestBody Migration migrationOptions.
		 * @return {StorageMigrationResponse} OK
		 */
		WebApps_MigrateStorage(subscriptionName: string, resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: StorageMigrationOptions): Observable<StorageMigrationResponse> {
			return this.http.put<StorageMigrationResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/migrate?subscriptionName=' + (subscriptionName == null ? '' : encodeURIComponent(subscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Migrates a local (in-app) MySql database to a remote MySql database.
		 * Description for Migrates a local (in-app) MySql database to a remote MySql database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/migratemysql
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {MigrateMySqlRequest} requestBody MySql migration options.
		 * @return {WebApps_MigrateMySqlReturn} OK
		 */
		WebApps_MigrateMySql(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: MigrateMySqlRequest): Observable<WebApps_MigrateMySqlReturn> {
			return this.http.post<WebApps_MigrateMySqlReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/migratemysql&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the status of MySql in app migration, if one is active, and whether or not MySql in app is enabled
		 * Description for Returns the status of MySql in app migration, if one is active, and whether or not MySql in app is enabled
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/migratemysql/status
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {MigrateMySqlStatus} OK
		 */
		WebApps_GetMigrateMySqlStatus(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<MigrateMySqlStatus> {
			return this.http.get<MigrateMySqlStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/migratemysql/status&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a Swift Virtual Network connection.
		 * Description for Gets a Swift Virtual Network connection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkConfig/virtualNetwork
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SwiftVirtualNetwork} OK.
		 */
		WebApps_GetSwiftVirtualNetworkConnection(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SwiftVirtualNetwork> {
			return this.http.get<SwiftVirtualNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkConfig/virtualNetwork&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
		 * in use by another App Service Plan other than the one this App is in.
		 * Description for Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
		 * in use by another App Service Plan other than the one this App is in.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkConfig/virtualNetwork
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SwiftVirtualNetwork} requestBody Properties of the Virtual Network connection. See example.
		 * @return {SwiftVirtualNetwork} OK
		 */
		WebApps_CreateOrUpdateSwiftVirtualNetworkConnection(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SwiftVirtualNetwork): Observable<SwiftVirtualNetwork> {
			return this.http.put<SwiftVirtualNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkConfig/virtualNetwork&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Swift Virtual Network connection from an app (or deployment slot).
		 * Description for Deletes a Swift Virtual Network connection from an app (or deployment slot).
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkConfig/virtualNetwork
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted virtual network.
		 */
		WebApps_DeleteSwiftVirtualNetwork(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkConfig/virtualNetwork&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
		 * in use by another App Service Plan other than the one this App is in.
		 * Description for Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
		 * in use by another App Service Plan other than the one this App is in.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkConfig/virtualNetwork
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SwiftVirtualNetwork} requestBody Properties of the Virtual Network connection. See example.
		 * @return {SwiftVirtualNetwork} OK
		 */
		WebApps_UpdateSwiftVirtualNetworkConnection(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SwiftVirtualNetwork): Observable<SwiftVirtualNetwork> {
			return this.http.patch<SwiftVirtualNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkConfig/virtualNetwork&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all network features used by the app (or deployment slot, if specified).
		 * Description for Gets all network features used by the app (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkFeatures/{view}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} view The type of view. This can either be "summary" or "detailed".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {NetworkFeatures} OK.
		 */
		WebApps_ListNetworkFeatures(resourceGroupName: string, name: string, view: string, subscriptionId: string, api_version: string): Observable<NetworkFeatures> {
			return this.http.get<NetworkFeatures>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkFeatures/' + (view == null ? '' : encodeURIComponent(view)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkTrace/operationresults/{operationId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} operationId GUID of the operation.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_GetNetworkTraceOperation(resourceGroupName: string, name: string, operationId: string, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.get<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkTrace/operationresults/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Start capturing network packets for the site (To be deprecated).
		 * Description for Start capturing network packets for the site (To be deprecated).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkTrace/start
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {number} durationInSeconds The duration to keep capturing in seconds.
		 * @param {number} maxFrameLength The maximum frame length in bytes (Optional).
		 * @param {string} sasUrl The Blob URL to store capture file.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {string} OK
		 */
		WebApps_StartWebSiteNetworkTrace(resourceGroupName: string, name: string, durationInSeconds: number | null | undefined, maxFrameLength: number | null | undefined, sasUrl: string | null | undefined, subscriptionId: string, api_version: string): Observable<string> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkTrace/start&durationInSeconds=' + durationInSeconds + '&maxFrameLength=' + maxFrameLength + '&sasUrl=' + (sasUrl == null ? '' : encodeURIComponent(sasUrl)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { responseType: 'text' });
		}

		/**
		 * Start capturing network packets for the site.
		 * Description for Start capturing network packets for the site.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkTrace/startOperation
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {number} durationInSeconds The duration to keep capturing in seconds.
		 * @param {number} maxFrameLength The maximum frame length in bytes (Optional).
		 * @param {string} sasUrl The Blob URL to store capture file.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_StartWebSiteNetworkTraceOperation(resourceGroupName: string, name: string, durationInSeconds: number | null | undefined, maxFrameLength: number | null | undefined, sasUrl: string | null | undefined, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.post<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkTrace/startOperation&durationInSeconds=' + durationInSeconds + '&maxFrameLength=' + maxFrameLength + '&sasUrl=' + (sasUrl == null ? '' : encodeURIComponent(sasUrl)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Stop ongoing capturing network packets for the site.
		 * Description for Stop ongoing capturing network packets for the site.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkTrace/stop
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Stopped.
		 */
		WebApps_StopWebSiteNetworkTrace(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkTrace/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkTrace/{operationId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} operationId GUID of the operation.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_GetNetworkTraces(resourceGroupName: string, name: string, operationId: string, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.get<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkTrace/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkTraces/current/operationresults/{operationId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} operationId GUID of the operation.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_GetNetworkTraceOperationV2(resourceGroupName: string, name: string, operationId: string, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.get<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkTraces/current/operationresults/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkTraces/{operationId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} operationId GUID of the operation.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_GetNetworkTracesV2(resourceGroupName: string, name: string, operationId: string, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.get<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/networkTraces/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Generates a new publishing password for an app (or deployment slot, if specified).
		 * Description for Generates a new publishing password for an app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/newpassword
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully generate new password.
		 */
		WebApps_GenerateNewSitePublishingPassword(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/newpassword&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets perfmon counters for web app.
		 * Description for Gets perfmon counters for web app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/perfcounters
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} filter Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PerfMonCounterCollection} OK
		 */
		WebApps_ListPerfMonCounters(resourceGroupName: string, name: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<PerfMonCounterCollection> {
			return this.http.get<PerfMonCounterCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/perfcounters&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets web app's event logs.
		 * Description for Gets web app's event logs.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/phplogging
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SitePhpErrorLogFlag} OK
		 */
		WebApps_GetSitePhpErrorLogFlag(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SitePhpErrorLogFlag> {
			return this.http.get<SitePhpErrorLogFlag>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/phplogging&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the premier add-ons of an app.
		 * Description for Gets the premier add-ons of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/premieraddons
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PremierAddOn} OK
		 */
		WebApps_ListPremierAddOns(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<PremierAddOn> {
			return this.http.get<PremierAddOn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/premieraddons&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a named add-on of an app.
		 * Description for Gets a named add-on of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/premieraddons/{premierAddOnName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} premierAddOnName Add-on name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PremierAddOn} OK
		 */
		WebApps_GetPremierAddOn(resourceGroupName: string, name: string, premierAddOnName: string, subscriptionId: string, api_version: string): Observable<PremierAddOn> {
			return this.http.get<PremierAddOn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/premieraddons/' + (premierAddOnName == null ? '' : encodeURIComponent(premierAddOnName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a named add-on of an app.
		 * Description for Updates a named add-on of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/premieraddons/{premierAddOnName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} premierAddOnName Add-on name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {PremierAddOn} requestBody A JSON representation of the edited premier add-on.
		 * @return {PremierAddOn} OK
		 */
		WebApps_AddPremierAddOn(resourceGroupName: string, name: string, premierAddOnName: string, subscriptionId: string, api_version: string, requestBody: PremierAddOn): Observable<PremierAddOn> {
			return this.http.put<PremierAddOn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/premieraddons/' + (premierAddOnName == null ? '' : encodeURIComponent(premierAddOnName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a premier add-on from an app.
		 * Description for Delete a premier add-on from an app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/premieraddons/{premierAddOnName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} premierAddOnName Add-on name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted premier add-on.
		 */
		WebApps_DeletePremierAddOn(resourceGroupName: string, name: string, premierAddOnName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/premieraddons/' + (premierAddOnName == null ? '' : encodeURIComponent(premierAddOnName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a named add-on of an app.
		 * Description for Updates a named add-on of an app.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/premieraddons/{premierAddOnName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} premierAddOnName Add-on name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {PremierAddOnPatchResource} requestBody A JSON representation of the edited premier add-on.
		 * @return {PremierAddOn} OK
		 */
		WebApps_UpdatePremierAddOn(resourceGroupName: string, name: string, premierAddOnName: string, subscriptionId: string, api_version: string, requestBody: PremierAddOnPatchResource): Observable<PremierAddOn> {
			return this.http.patch<PremierAddOn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/premieraddons/' + (premierAddOnName == null ? '' : encodeURIComponent(premierAddOnName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets data around private site access enablement and authorized Virtual Networks that can access the site.
		 * Description for Gets data around private site access enablement and authorized Virtual Networks that can access the site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/privateAccess/virtualNetworks
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PrivateAccess} OK
		 */
		WebApps_GetPrivateAccess(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<PrivateAccess> {
			return this.http.get<PrivateAccess>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/privateAccess/virtualNetworks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Sets data around private site access enablement and authorized Virtual Networks that can access the site.
		 * Description for Sets data around private site access enablement and authorized Virtual Networks that can access the site.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/privateAccess/virtualNetworks
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {PrivateAccess} requestBody The information for the private access
		 * @return {PrivateAccess} OK
		 */
		WebApps_PutPrivateAccessVnet(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: PrivateAccess): Observable<PrivateAccess> {
			return this.http.put<PrivateAccess>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/privateAccess/virtualNetworks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.
		 * Description for Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/processes
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessInfoCollection} Process terminated.
		 */
		WebApps_ListProcesses(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<ProcessInfoCollection> {
			return this.http.get<ProcessInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/processes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get process information by its ID for a specific scaled-out instance in a web site.
		 * Description for Get process information by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/processes/{processId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessInfo} Process information returned.
		 */
		WebApps_GetProcess(resourceGroupName: string, name: string, processId: string, subscriptionId: string, api_version: string): Observable<ProcessInfo> {
			return this.http.get<ProcessInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.
		 * Description for Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/processes/{processId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteProcess(resourceGroupName: string, name: string, processId: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.
		 * Description for Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/processes/{processId}/dump
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {string} OK
		 */
		WebApps_GetProcessDump(resourceGroupName: string, name: string, processId: string, subscriptionId: string, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/dump&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * List module information for a process by its ID for a specific scaled-out instance in a web site.
		 * Description for List module information for a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/processes/{processId}/modules
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessModuleInfoCollection} Module information returned.
		 */
		WebApps_ListProcessModules(resourceGroupName: string, name: string, processId: string, subscriptionId: string, api_version: string): Observable<ProcessModuleInfoCollection> {
			return this.http.get<ProcessModuleInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/modules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get process information by its ID for a specific scaled-out instance in a web site.
		 * Description for Get process information by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/processes/{processId}/modules/{baseAddress}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} baseAddress Module base address.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessModuleInfo} Module information returned.
		 */
		WebApps_GetProcessModule(resourceGroupName: string, name: string, processId: string, baseAddress: string, subscriptionId: string, api_version: string): Observable<ProcessModuleInfo> {
			return this.http.get<ProcessModuleInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/modules/' + (baseAddress == null ? '' : encodeURIComponent(baseAddress)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List the threads in a process by its ID for a specific scaled-out instance in a web site.
		 * Description for List the threads in a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/processes/{processId}/threads
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessThreadInfoCollection} Thread information returned.
		 */
		WebApps_ListProcessThreads(resourceGroupName: string, name: string, processId: string, subscriptionId: string, api_version: string): Observable<ProcessThreadInfoCollection> {
			return this.http.get<ProcessThreadInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/threads&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get public certificates for an app or a deployment slot.
		 * Description for Get public certificates for an app or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/publicCertificates
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PublicCertificateCollection} OK
		 */
		WebApps_ListPublicCertificates(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<PublicCertificateCollection> {
			return this.http.get<PublicCertificateCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/publicCertificates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the named public certificate for an app (or deployment slot, if specified).
		 * Description for Get the named public certificate for an app (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/publicCertificates/{publicCertificateName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} publicCertificateName Public certificate name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PublicCertificate} OK
		 */
		WebApps_GetPublicCertificate(resourceGroupName: string, name: string, publicCertificateName: string, subscriptionId: string, api_version: string): Observable<PublicCertificate> {
			return this.http.get<PublicCertificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/publicCertificates/' + (publicCertificateName == null ? '' : encodeURIComponent(publicCertificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a hostname binding for an app.
		 * Description for Creates a hostname binding for an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/publicCertificates/{publicCertificateName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} publicCertificateName Public certificate name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {PublicCertificate} requestBody Public certificate details. This is the JSON representation of a PublicCertificate object.
		 * @return {PublicCertificate} OK
		 */
		WebApps_CreateOrUpdatePublicCertificate(resourceGroupName: string, name: string, publicCertificateName: string, subscriptionId: string, api_version: string, requestBody: PublicCertificate): Observable<PublicCertificate> {
			return this.http.put<PublicCertificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/publicCertificates/' + (publicCertificateName == null ? '' : encodeURIComponent(publicCertificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a hostname binding for an app.
		 * Description for Deletes a hostname binding for an app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/publicCertificates/{publicCertificateName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} publicCertificateName Public certificate name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted hostname binding.
		 */
		WebApps_DeletePublicCertificate(resourceGroupName: string, name: string, publicCertificateName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/publicCertificates/' + (publicCertificateName == null ? '' : encodeURIComponent(publicCertificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the publishing profile for an app (or deployment slot, if specified).
		 * Description for Gets the publishing profile for an app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/publishxml
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmPublishingProfileOptions} requestBody Specifies publishingProfileOptions for publishing profile. For example, use {"format": "FileZilla3"} to get a FileZilla publishing profile.
		 * @return {void} OK
		 */
		WebApps_ListPublishingProfileXmlWithSecrets(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: CsmPublishingProfileOptions): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/publishxml&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets the configuration settings of the current slot if they were previously modified by calling the API with POST.
		 * Description for Resets the configuration settings of the current slot if they were previously modified by calling the API with POST.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resetSlotConfig
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} OK.
		 */
		WebApps_ResetProductionSlotConfig(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/resetSlotConfig&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restarts an app (or deployment slot, if specified).
		 * Description for Restarts an app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/restart
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {boolean} softRestart Specify true to apply the configuration settings and restarts the app only if necessary. By default, the API always restarts and reprovisions the app.
		 * @param {boolean} synchronous Specify true to block until the app is restarted. By default, it is set to false, and the API responds immediately (asynchronous).
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully restarted app.
		 */
		WebApps_Restart(resourceGroupName: string, name: string, softRestart: boolean | null | undefined, synchronous: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/restart&softRestart=' + softRestart + '&synchronous=' + synchronous + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores an app from a backup blob in Azure Storage.
		 * Description for Restores an app from a backup blob in Azure Storage.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/restoreFromBackupBlob
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RestoreRequest} requestBody Information on restore request .
		 * @return {void} Restore operation started.
		 */
		WebApps_RestoreFromBackupBlob(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: RestoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/restoreFromBackupBlob&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a deleted web app to this web app.
		 * Description for Restores a deleted web app to this web app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/restoreFromDeletedApp
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {DeletedAppRestoreRequest} requestBody Deleted web app restore information.
		 * @return {void} Restore operation started.
		 */
		WebApps_RestoreFromDeletedApp(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: DeletedAppRestoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/restoreFromDeletedApp&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a web app from a snapshot.
		 * Description for Restores a web app from a snapshot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/restoreSnapshot
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SnapshotRestoreRequest} requestBody Snapshot restore settings. Snapshot information can be obtained by calling GetDeletedSites or GetSiteSnapshots API.
		 * @return {void} Restore operation started.
		 */
		WebApps_RestoreSnapshot(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SnapshotRestoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/restoreSnapshot&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get list of siteextensions for a web site, or a deployment slot.
		 * Description for Get list of siteextensions for a web site, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/siteextensions
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteExtensionInfoCollection} SiteExtension information returned.
		 */
		WebApps_ListSiteExtensions(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SiteExtensionInfoCollection> {
			return this.http.get<SiteExtensionInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/siteextensions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get site extension information by its ID for a web site, or a deployment slot.
		 * Description for Get site extension information by its ID for a web site, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/siteextensions/{siteExtensionId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} siteExtensionId Site extension name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteExtensionInfo} SiteExtension information returned.
		 */
		WebApps_GetSiteExtension(resourceGroupName: string, name: string, siteExtensionId: string, subscriptionId: string, api_version: string): Observable<SiteExtensionInfo> {
			return this.http.get<SiteExtensionInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/siteextensions/' + (siteExtensionId == null ? '' : encodeURIComponent(siteExtensionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Install site extension on a web site, or a deployment slot.
		 * Description for Install site extension on a web site, or a deployment slot.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/siteextensions/{siteExtensionId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} siteExtensionId Site extension name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteExtensionInfo} Site Extension created.
		 */
		WebApps_InstallSiteExtension(resourceGroupName: string, name: string, siteExtensionId: string, subscriptionId: string, api_version: string): Observable<SiteExtensionInfo> {
			return this.http.put<SiteExtensionInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/siteextensions/' + (siteExtensionId == null ? '' : encodeURIComponent(siteExtensionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Remove a site extension from a web site, or a deployment slot.
		 * Description for Remove a site extension from a web site, or a deployment slot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/siteextensions/{siteExtensionId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} siteExtensionId Site extension name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteSiteExtension(resourceGroupName: string, name: string, siteExtensionId: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/siteextensions/' + (siteExtensionId == null ? '' : encodeURIComponent(siteExtensionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies a deployment slot to another deployment slot of an app.
		 * Description for Copies a deployment slot to another deployment slot of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slotcopy
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmCopySlotEntity} requestBody JSON object that contains the target slot name and site config properties to override the source slot config. See example.
		 * @return {void} OK.
		 */
		WebApps_CopyProductionSlot(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: CsmCopySlotEntity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slotcopy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an app's deployment slots.
		 * Description for Gets an app's deployment slots.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListSlotsReturn} OK
		 */
		WebApps_ListSlots(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WebApps_ListSlotsReturn> {
			return this.http.get<WebApps_ListSlotsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the details of a web, mobile, or API app.
		 * Description for Gets the details of a web, mobile, or API app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. By default, this API returns the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_GetSlotReturn} OK.
		 */
		WebApps_GetSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<WebApps_GetSlotReturn> {
			return this.http.get<WebApps_GetSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
		 * Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
		 * @param {string} slot Name of the deployment slot to create or update. By default, this API attempts to create or modify the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_CreateOrUpdateSlotPutBody} requestBody A JSON representation of the app properties. See example.
		 * @return {WebApps_CreateOrUpdateSlotReturn} OK.
		 */
		WebApps_CreateOrUpdateSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: WebApps_CreateOrUpdateSlotPutBody): Observable<WebApps_CreateOrUpdateSlotReturn> {
			return this.http.put<WebApps_CreateOrUpdateSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a web, mobile, or API app, or one of the deployment slots.
		 * Description for Deletes a web, mobile, or API app, or one of the deployment slots.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app to delete.
		 * @param {string} slot Name of the deployment slot to delete. By default, the API deletes the production slot.
		 * @param {boolean} deleteMetrics If true, web app metrics are also deleted.
		 * @param {boolean} deleteEmptyServerFarm Specify true if the App Service plan will be empty after app deletion and you want to delete the empty App Service plan. By default, the empty App Service plan is not deleted.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted web app.
		 */
		WebApps_DeleteSlot(resourceGroupName: string, name: string, slot: string, deleteMetrics: boolean | null | undefined, deleteEmptyServerFarm: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '&deleteMetrics=' + deleteMetrics + '&deleteEmptyServerFarm=' + deleteEmptyServerFarm + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
		 * Description for Creates a new web, mobile, or API app in an existing resource group, or updates an existing app.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
		 * @param {string} slot Name of the deployment slot to create or update. By default, this API attempts to create or modify the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SitePatchResource} requestBody A JSON representation of the app properties. See example.
		 * @return {WebApps_UpdateSlotReturn} OK.
		 */
		WebApps_UpdateSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: SitePatchResource): Observable<WebApps_UpdateSlotReturn> {
			return this.http.patch<WebApps_UpdateSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyze a custom hostname.
		 * Description for Analyze a custom hostname.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/analyzeCustomHostname
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} hostName Custom hostname.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {CustomHostnameAnalysisResult} OK
		 */
		WebApps_AnalyzeCustomHostnameSlot(resourceGroupName: string, name: string, slot: string, hostName: string | null | undefined, subscriptionId: string, api_version: string): Observable<CustomHostnameAnalysisResult> {
			return this.http.get<CustomHostnameAnalysisResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/analyzeCustomHostname&hostName=' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Applies the configuration settings from the target slot onto the current slot.
		 * Description for Applies the configuration settings from the target slot onto the current slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/applySlotConfig
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the source slot. If a slot is not specified, the production slot is used as the source slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmSlotEntity} requestBody JSON object that contains the target slot name. See example.
		 * @return {void} OK.
		 */
		WebApps_ApplySlotConfigurationSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: CsmSlotEntity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/applySlotConfig&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a backup of an app.
		 * Description for Creates a backup of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backup
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will create a backup for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {BackupRequest} requestBody Backup configuration. You can use the JSON response from the POST action as input here.
		 * @return {BackupItem} OK
		 */
		WebApps_BackupSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: BackupRequest): Observable<BackupItem> {
			return this.http.post<BackupItem>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/backup&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets existing backups of an app.
		 * Description for Gets existing backups of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get backups of the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {BackupItemCollection} OK
		 */
		WebApps_ListBackupsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<BackupItemCollection> {
			return this.http.get<BackupItemCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/backups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a backup of an app by its ID.
		 * Description for Gets a backup of an app by its ID.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups/{backupId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} backupId ID of the backup.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get a backup of the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {BackupItem} OK
		 */
		WebApps_GetBackupStatusSlot(resourceGroupName: string, name: string, backupId: string, slot: string, subscriptionId: string, api_version: string): Observable<BackupItem> {
			return this.http.get<BackupItem>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/backups/' + (backupId == null ? '' : encodeURIComponent(backupId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a backup of an app by its ID.
		 * Description for Deletes a backup of an app by its ID.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups/{backupId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} backupId ID of the backup.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete a backup of the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted web app backup item.
		 */
		WebApps_DeleteBackupSlot(resourceGroupName: string, name: string, backupId: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/backups/' + (backupId == null ? '' : encodeURIComponent(backupId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.
		 * Description for Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups/{backupId}/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} backupId ID of backup.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {BackupRequest} requestBody Information on backup request.
		 * @return {BackupItem} OK
		 */
		WebApps_ListBackupStatusSecretsSlot(resourceGroupName: string, name: string, backupId: string, slot: string, subscriptionId: string, api_version: string, requestBody: BackupRequest): Observable<BackupItem> {
			return this.http.post<BackupItem>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/backups/' + (backupId == null ? '' : encodeURIComponent(backupId)) + '/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a specific backup to another app (or deployment slot, if specified).
		 * Description for Restores a specific backup to another app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups/{backupId}/restore
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} backupId ID of the backup.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will restore a backup of the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RestoreRequest} requestBody Information on restore request .
		 * @return {void} Restore operation started.
		 */
		WebApps_RestoreSlot(resourceGroupName: string, name: string, backupId: string, slot: string, subscriptionId: string, api_version: string, requestBody: RestoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/backups/' + (backupId == null ? '' : encodeURIComponent(backupId)) + '/restore&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the configurations of an app
		 * Description for List the configurations of an app
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will return configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteConfigResourceCollection} OK
		 */
		WebApps_ListConfigurationsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteConfigResourceCollection> {
			return this.http.get<SiteConfigResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Replaces the application settings of an app.
		 * Description for Replaces the application settings of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/appsettings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the application settings for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {StringDictionary} requestBody Application settings of the app.
		 * @return {StringDictionary} OK
		 */
		WebApps_UpdateApplicationSettingsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: StringDictionary): Observable<StringDictionary> {
			return this.http.put<StringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/appsettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the application settings of an app.
		 * Description for Gets the application settings of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/appsettings/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the application settings for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {StringDictionary} OK
		 */
		WebApps_ListApplicationSettingsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<StringDictionary> {
			return this.http.post<StringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/appsettings/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Updates the Authentication / Authorization settings associated with web app.
		 * Description for Updates the Authentication / Authorization settings associated with web app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/authsettings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteAuthSettings} requestBody Auth settings associated with web app.
		 * @return {SiteAuthSettings} OK
		 */
		WebApps_UpdateAuthSettingsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: SiteAuthSettings): Observable<SiteAuthSettings> {
			return this.http.put<SiteAuthSettings>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/authsettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the Authentication/Authorization settings of an app.
		 * Description for Gets the Authentication/Authorization settings of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/authsettings/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the settings for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteAuthSettings} OK
		 */
		WebApps_GetAuthSettingsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteAuthSettings> {
			return this.http.post<SiteAuthSettings>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/authsettings/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Updates the Azure storage account configurations of an app.
		 * Description for Updates the Azure storage account configurations of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/azurestorageaccounts
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the Azure storage account configurations for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AzureStoragePropertyDictionaryResource} requestBody Azure storage accounts of the app.
		 * @return {AzureStoragePropertyDictionaryResource} OK
		 */
		WebApps_UpdateAzureStorageAccountsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: AzureStoragePropertyDictionaryResource): Observable<AzureStoragePropertyDictionaryResource> {
			return this.http.put<AzureStoragePropertyDictionaryResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/azurestorageaccounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the Azure storage account configurations of an app.
		 * Description for Gets the Azure storage account configurations of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/azurestorageaccounts/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the Azure storage account configurations for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AzureStoragePropertyDictionaryResource} OK
		 */
		WebApps_ListAzureStorageAccountsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<AzureStoragePropertyDictionaryResource> {
			return this.http.post<AzureStoragePropertyDictionaryResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/azurestorageaccounts/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Updates the backup configuration of an app.
		 * Description for Updates the backup configuration of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/backup
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the backup configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {BackupRequest} requestBody Edited backup configuration.
		 * @return {BackupRequest} OK
		 */
		WebApps_UpdateBackupConfigurationSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: BackupRequest): Observable<BackupRequest> {
			return this.http.put<BackupRequest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/backup&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the backup configuration of an app.
		 * Description for Deletes the backup configuration of an app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/backup
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the backup configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted backup configuration.
		 */
		WebApps_DeleteBackupConfigurationSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/backup&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the backup configuration of an app.
		 * Description for Gets the backup configuration of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/backup/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the backup configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {BackupRequest} OK
		 */
		WebApps_GetBackupConfigurationSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<BackupRequest> {
			return this.http.post<BackupRequest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/backup/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Replaces the connection strings of an app.
		 * Description for Replaces the connection strings of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/connectionstrings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the connection settings for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {ConnectionStringDictionary} requestBody Connection strings of the app or deployment slot. See example.
		 * @return {ConnectionStringDictionary} OK
		 */
		WebApps_UpdateConnectionStringsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: ConnectionStringDictionary): Observable<ConnectionStringDictionary> {
			return this.http.put<ConnectionStringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/connectionstrings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the connection strings of an app.
		 * Description for Gets the connection strings of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/connectionstrings/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the connection settings for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ConnectionStringDictionary} OK
		 */
		WebApps_ListConnectionStringsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<ConnectionStringDictionary> {
			return this.http.post<ConnectionStringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/connectionstrings/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the logging configuration of an app.
		 * Description for Gets the logging configuration of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/logs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the logging configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteLogsConfig} OK
		 */
		WebApps_GetDiagnosticLogsConfigurationSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteLogsConfig> {
			return this.http.get<SiteLogsConfig>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/logs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates the logging configuration of an app.
		 * Description for Updates the logging configuration of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/logs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the logging configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteLogsConfig} requestBody A SiteLogsConfig JSON object that contains the logging configuration to change in the "properties" property.
		 * @return {SiteLogsConfig} OK
		 */
		WebApps_UpdateDiagnosticLogsConfigSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: SiteLogsConfig): Observable<SiteLogsConfig> {
			return this.http.put<SiteLogsConfig>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/logs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces the metadata of an app.
		 * Description for Replaces the metadata of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/metadata
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the metadata for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {StringDictionary} requestBody Edited metadata of the app or deployment slot. See example.
		 * @return {StringDictionary} OK
		 */
		WebApps_UpdateMetadataSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: StringDictionary): Observable<StringDictionary> {
			return this.http.put<StringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/metadata&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the metadata of an app.
		 * Description for Gets the metadata of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/metadata/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the metadata for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {StringDictionary} OK
		 */
		WebApps_ListMetadataSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<StringDictionary> {
			return this.http.post<StringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/metadata/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the Git/FTP publishing credentials of an app.
		 * Description for Gets the Git/FTP publishing credentials of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/publishingcredentials/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the publishing credentials for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListPublishingCredentialsSlotReturn} OK
		 */
		WebApps_ListPublishingCredentialsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<WebApps_ListPublishingCredentialsSlotReturn> {
			return this.http.post<WebApps_ListPublishingCredentialsSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/publishingcredentials/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Updates the Push settings associated with web app.
		 * Description for Updates the Push settings associated with web app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/pushsettings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_UpdateSitePushSettingsSlotPutBody} requestBody Push settings associated with web app.
		 * @return {WebApps_UpdateSitePushSettingsSlotReturn} OK
		 */
		WebApps_UpdateSitePushSettingsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: WebApps_UpdateSitePushSettingsSlotPutBody): Observable<WebApps_UpdateSitePushSettingsSlotReturn> {
			return this.http.put<WebApps_UpdateSitePushSettingsSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/pushsettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the Push settings associated with web app.
		 * Description for Gets the Push settings associated with web app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/pushsettings/list
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListSitePushSettingsSlotReturn} OK
		 */
		WebApps_ListSitePushSettingsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<WebApps_ListSitePushSettingsSlotReturn> {
			return this.http.post<WebApps_ListSitePushSettingsSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/pushsettings/list&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the configuration of an app, such as platform version and bitness, default documents, virtual applications, Always On, etc.
		 * Description for Gets the configuration of an app, such as platform version and bitness, default documents, virtual applications, Always On, etc.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will return configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteConfigResource} OK
		 */
		WebApps_GetConfigurationSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteConfigResource> {
			return this.http.get<SiteConfigResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates the configuration of an app.
		 * Description for Updates the configuration of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteConfigResource} requestBody JSON representation of a SiteConfig object. See example.
		 * @return {SiteConfigResource} OK
		 */
		WebApps_CreateOrUpdateConfigurationSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: SiteConfigResource): Observable<SiteConfigResource> {
			return this.http.put<SiteConfigResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of an app.
		 * Description for Updates the configuration of an app.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteConfigResource} requestBody JSON representation of a SiteConfig object. See example.
		 * @return {SiteConfigResource} OK
		 */
		WebApps_UpdateConfigurationSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: SiteConfigResource): Observable<SiteConfigResource> {
			return this.http.patch<SiteConfigResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of web app configuration snapshots identifiers. Each element of the list contains a timestamp and the ID of the snapshot.
		 * Description for Gets a list of web app configuration snapshots identifiers. Each element of the list contains a timestamp and the ID of the snapshot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web/snapshots
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will return configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteConfigurationSnapshotInfoCollection} OK
		 */
		WebApps_ListConfigurationSnapshotInfoSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteConfigurationSnapshotInfoCollection> {
			return this.http.get<SiteConfigurationSnapshotInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/web/snapshots&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a snapshot of the configuration of an app at a previous point in time.
		 * Description for Gets a snapshot of the configuration of an app at a previous point in time.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web/snapshots/{snapshotId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} snapshotId The ID of the snapshot to read.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will return configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteConfigResource} OK
		 */
		WebApps_GetConfigurationSnapshotSlot(resourceGroupName: string, name: string, snapshotId: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteConfigResource> {
			return this.http.get<SiteConfigResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/web/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Reverts the configuration of an app to a previous snapshot.
		 * Description for Reverts the configuration of an app to a previous snapshot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web/snapshots/{snapshotId}/recover
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} snapshotId The ID of the snapshot to read.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will return configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_RecoverSiteConfigurationSnapshotSlot(resourceGroupName: string, name: string, snapshotId: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/config/web/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '/recover&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the last lines of docker logs for the given site
		 * Description for Gets the last lines of docker logs for the given site
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/containerlogs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} OK
		 */
		WebApps_GetWebSiteContainerLogsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/containerlogs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the ZIP archived docker log files for the given site
		 * Description for Gets the ZIP archived docker log files for the given site
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/containerlogs/zip/download
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} OK
		 */
		WebApps_GetContainerLogsZipSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/containerlogs/zip/download&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List continuous web jobs for an app, or a deployment slot.
		 * Description for List continuous web jobs for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/continuouswebjobs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ContinuousWebJobCollection} OK
		 */
		WebApps_ListContinuousWebJobsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<ContinuousWebJobCollection> {
			return this.http.get<ContinuousWebJobCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/continuouswebjobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a continuous web job by its ID for an app, or a deployment slot.
		 * Description for Gets a continuous web job by its ID for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/continuouswebjobs/{webJobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ContinuousWebJob} Found continuous web job.
		 */
		WebApps_GetContinuousWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, subscriptionId: string, api_version: string): Observable<ContinuousWebJob> {
			return this.http.get<ContinuousWebJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/continuouswebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Delete a continuous web job by its ID for an app, or a deployment slot.
		 * Description for Delete a continuous web job by its ID for an app, or a deployment slot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/continuouswebjobs/{webJobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted continuous web job.
		 */
		WebApps_DeleteContinuousWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/continuouswebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start a continuous web job for an app, or a deployment slot.
		 * Description for Start a continuous web job for an app, or a deployment slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/continuouswebjobs/{webJobName}/start
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Found continuous web job.
		 */
		WebApps_StartContinuousWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/continuouswebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop a continuous web job for an app, or a deployment slot.
		 * Description for Stop a continuous web job for an app, or a deployment slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/continuouswebjobs/{webJobName}/stop
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Found continuous web job.
		 */
		WebApps_StopContinuousWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/continuouswebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List deployments for an app, or a deployment slot.
		 * Description for List deployments for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/deployments
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DeploymentCollection} OK
		 */
		WebApps_ListDeploymentsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<DeploymentCollection> {
			return this.http.get<DeploymentCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/deployments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a deployment by its ID for an app, or a deployment slot.
		 * Description for Get a deployment by its ID for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/deployments/{id}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} id Deployment ID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API gets a deployment for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Deployment} OK
		 */
		WebApps_GetDeploymentSlot(resourceGroupName: string, name: string, id: string, slot: string, subscriptionId: string, api_version: string): Observable<Deployment> {
			return this.http.get<Deployment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/deployments/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a deployment for an app, or a deployment slot.
		 * Description for Create a deployment for an app, or a deployment slot.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/deployments/{id}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} id ID of an existing deployment.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API creates a deployment for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {Deployment} requestBody Deployment details.
		 * @return {Deployment} OK
		 */
		WebApps_CreateDeploymentSlot(resourceGroupName: string, name: string, id: string, slot: string, subscriptionId: string, api_version: string, requestBody: Deployment): Observable<Deployment> {
			return this.http.put<Deployment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/deployments/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a deployment by its ID for an app, or a deployment slot.
		 * Description for Delete a deployment by its ID for an app, or a deployment slot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/deployments/{id}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} id Deployment ID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted deployment.
		 */
		WebApps_DeleteDeploymentSlot(resourceGroupName: string, name: string, id: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/deployments/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List deployment log for specific deployment for an app, or a deployment slot.
		 * Description for List deployment log for specific deployment for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/deployments/{id}/log
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} id The ID of a specific deployment. This is the value of the name property in the JSON response from "GET /api/sites/{siteName}/deployments".
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Deployment} OK
		 */
		WebApps_ListDeploymentLogSlot(resourceGroupName: string, name: string, id: string, slot: string, subscriptionId: string, api_version: string): Observable<Deployment> {
			return this.http.get<Deployment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/deployments/' + (id == null ? '' : encodeURIComponent(id)) + '/log&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Discovers an existing app backup that can be restored from a blob in Azure storage. Use this to get information about the databases stored in a backup.
		 * Description for Discovers an existing app backup that can be restored from a blob in Azure storage. Use this to get information about the databases stored in a backup.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/discoverbackup
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will perform discovery for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RestoreRequest} requestBody A RestoreRequest object that includes Azure storage URL and blog name for discovery of backup.
		 * @return {RestoreRequest} OK
		 */
		WebApps_DiscoverBackupSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: RestoreRequest): Observable<RestoreRequest> {
			return this.http.post<RestoreRequest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/discoverbackup&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ownership identifiers for domain associated with web app.
		 * Description for Lists ownership identifiers for domain associated with web app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/domainOwnershipIdentifiers
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListDomainOwnershipIdentifiersSlotReturn} OK
		 */
		WebApps_ListDomainOwnershipIdentifiersSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<WebApps_ListDomainOwnershipIdentifiersSlotReturn> {
			return this.http.get<WebApps_ListDomainOwnershipIdentifiersSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/domainOwnershipIdentifiers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get domain ownership identifier for web app.
		 * Description for Get domain ownership identifier for web app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/domainOwnershipIdentifiers/{domainOwnershipIdentifierName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} domainOwnershipIdentifierName Name of domain ownership identifier.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_GetDomainOwnershipIdentifierSlotReturn} OK
		 */
		WebApps_GetDomainOwnershipIdentifierSlot(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, slot: string, subscriptionId: string, api_version: string): Observable<WebApps_GetDomainOwnershipIdentifierSlotReturn> {
			return this.http.get<WebApps_GetDomainOwnershipIdentifierSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/domainOwnershipIdentifiers/' + (domainOwnershipIdentifierName == null ? '' : encodeURIComponent(domainOwnershipIdentifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a domain ownership identifier for web app, or updates an existing ownership identifier.
		 * Description for Creates a domain ownership identifier for web app, or updates an existing ownership identifier.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/domainOwnershipIdentifiers/{domainOwnershipIdentifierName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} domainOwnershipIdentifierName Name of domain ownership identifier.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotPutBody} requestBody A JSON representation of the domain ownership properties.
		 * @return {WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotReturn} OK
		 */
		WebApps_CreateOrUpdateDomainOwnershipIdentifierSlot(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, slot: string, subscriptionId: string, api_version: string, requestBody: WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotPutBody): Observable<WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotReturn> {
			return this.http.put<WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/domainOwnershipIdentifiers/' + (domainOwnershipIdentifierName == null ? '' : encodeURIComponent(domainOwnershipIdentifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a domain ownership identifier for a web app.
		 * Description for Deletes a domain ownership identifier for a web app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/domainOwnershipIdentifiers/{domainOwnershipIdentifierName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} domainOwnershipIdentifierName Name of domain ownership identifier.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted domain ownership identifier.
		 */
		WebApps_DeleteDomainOwnershipIdentifierSlot(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/domainOwnershipIdentifiers/' + (domainOwnershipIdentifierName == null ? '' : encodeURIComponent(domainOwnershipIdentifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a domain ownership identifier for web app, or updates an existing ownership identifier.
		 * Description for Creates a domain ownership identifier for web app, or updates an existing ownership identifier.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/domainOwnershipIdentifiers/{domainOwnershipIdentifierName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} domainOwnershipIdentifierName Name of domain ownership identifier.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_UpdateDomainOwnershipIdentifierSlotPatchBody} requestBody A JSON representation of the domain ownership properties.
		 * @return {WebApps_UpdateDomainOwnershipIdentifierSlotReturn} OK
		 */
		WebApps_UpdateDomainOwnershipIdentifierSlot(resourceGroupName: string, name: string, domainOwnershipIdentifierName: string, slot: string, subscriptionId: string, api_version: string, requestBody: WebApps_UpdateDomainOwnershipIdentifierSlotPatchBody): Observable<WebApps_UpdateDomainOwnershipIdentifierSlotReturn> {
			return this.http.patch<WebApps_UpdateDomainOwnershipIdentifierSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/domainOwnershipIdentifiers/' + (domainOwnershipIdentifierName == null ? '' : encodeURIComponent(domainOwnershipIdentifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the status of the last MSDeploy operation.
		 * Description for Get the status of the last MSDeploy operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/extensions/MSDeploy
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {MSDeployStatus} OK
		 */
		WebApps_GetMSDeployStatusSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<MSDeployStatus> {
			return this.http.get<MSDeployStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/extensions/MSDeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Invoke the MSDeploy web app extension.
		 * Description for Invoke the MSDeploy web app extension.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/extensions/MSDeploy
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {MSDeploy} requestBody Details of MSDeploy operation
		 * @return {void} 
		 */
		WebApps_CreateMSDeployOperationSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: MSDeploy): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/extensions/MSDeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the MSDeploy Log for the last MSDeploy operation.
		 * Description for Get the MSDeploy Log for the last MSDeploy operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/extensions/MSDeploy/log
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {MSDeployLog} MSDeploy log returned.
		 */
		WebApps_GetMSDeployLogSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<MSDeployLog> {
			return this.http.get<MSDeployLog>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/extensions/MSDeploy/log&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List the functions for a web site, or a deployment slot.
		 * Description for List the functions for a web site, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/functions
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {FunctionEnvelopeCollection} Function information returned.
		 */
		WebApps_ListInstanceFunctionsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<FunctionEnvelopeCollection> {
			return this.http.get<FunctionEnvelopeCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/functions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Fetch a short lived token that can be exchanged for a master key.
		 * Description for Fetch a short lived token that can be exchanged for a master key.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/functions/admin/token
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {string} OK
		 */
		WebApps_GetFunctionsAdminTokenSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/functions/admin/token&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Get function information by its ID for web site, or a deployment slot.
		 * Description for Get function information by its ID for web site, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/functions/{functionName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName Function name.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {FunctionEnvelope} Function information returned.
		 */
		WebApps_GetInstanceFunctionSlot(resourceGroupName: string, name: string, functionName: string, slot: string, subscriptionId: string, api_version: string): Observable<FunctionEnvelope> {
			return this.http.get<FunctionEnvelope>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create function for web site, or a deployment slot.
		 * Description for Create function for web site, or a deployment slot.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/functions/{functionName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName Function name.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {FunctionEnvelope} requestBody Function details.
		 * @return {void} 
		 */
		WebApps_CreateInstanceFunctionSlot(resourceGroupName: string, name: string, functionName: string, slot: string, subscriptionId: string, api_version: string, requestBody: FunctionEnvelope): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a function for web site, or a deployment slot.
		 * Description for Delete a function for web site, or a deployment slot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/functions/{functionName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName Function name.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteInstanceFunctionSlot(resourceGroupName: string, name: string, functionName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or update a function secret.
		 * Description for Add or update a function secret.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/functions/{functionName}/keys/{keyName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName The name of the function.
		 * @param {string} keyName The name of the key.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {KeyInfo} requestBody The key to create or update
		 * @return {KeyInfo} Key was updated.
		 */
		WebApps_CreateOrUpdateFunctionSecretSlot(resourceGroupName: string, name: string, functionName: string, keyName: string, slot: string, subscriptionId: string, api_version: string, requestBody: KeyInfo): Observable<KeyInfo> {
			return this.http.put<KeyInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a function secret.
		 * Description for Delete a function secret.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/functions/{functionName}/keys/{keyName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName The name of the function.
		 * @param {string} keyName The name of the key.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteFunctionSecretSlot(resourceGroupName: string, name: string, functionName: string, keyName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get function keys for a function in a web site, or a deployment slot.
		 * Description for Get function keys for a function in a web site, or a deployment slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/functions/{functionName}/listkeys
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName Function name.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {StringDictionary} Function keys returned.
		 */
		WebApps_ListFunctionKeysSlot(resourceGroupName: string, name: string, functionName: string, slot: string, subscriptionId: string, api_version: string): Observable<StringDictionary> {
			return this.http.post<StringDictionary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '/listkeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get function secrets for a function in a web site, or a deployment slot.
		 * Description for Get function secrets for a function in a web site, or a deployment slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/functions/{functionName}/listsecrets
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} functionName Function name.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {FunctionSecrets} Function secrets returned.
		 */
		WebApps_ListFunctionSecretsSlot(resourceGroupName: string, name: string, functionName: string, slot: string, subscriptionId: string, api_version: string): Observable<FunctionSecrets> {
			return this.http.post<FunctionSecrets>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/functions/' + (functionName == null ? '' : encodeURIComponent(functionName)) + '/listsecrets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get host secrets for a function app.
		 * Description for Get host secrets for a function app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/host/default/listkeys
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {HostKeys} Host secrets returned.
		 */
		WebApps_ListHostKeysSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HostKeys> {
			return this.http.post<HostKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/host/default/listkeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * This is to allow calling via powershell and ARM template.
		 * Description for This is to allow calling via powershell and ARM template.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/host/default/listsyncstatus
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_ListSyncStatusSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/host/default/listsyncstatus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Syncs function trigger metadata to the management database
		 * Description for Syncs function trigger metadata to the management database
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/host/default/sync
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_SyncFunctionsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/host/default/sync&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or update a host level secret.
		 * Description for Add or update a host level secret.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/host/default/{keyType}/{keyName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} keyType The type of host key.
		 * @param {string} keyName The name of the key.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {KeyInfo} requestBody The key to create or update
		 * @return {KeyInfo} Key was updated.
		 */
		WebApps_CreateOrUpdateHostSecretSlot(resourceGroupName: string, name: string, keyType: string, keyName: string, slot: string, subscriptionId: string, api_version: string, requestBody: KeyInfo): Observable<KeyInfo> {
			return this.http.put<KeyInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/host/default/' + (keyType == null ? '' : encodeURIComponent(keyType)) + '/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a host level secret.
		 * Description for Delete a host level secret.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/host/default/{keyType}/{keyName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} keyType The type of host key.
		 * @param {string} keyName The name of the key.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteHostSecretSlot(resourceGroupName: string, name: string, keyType: string, keyName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/host/default/' + (keyType == null ? '' : encodeURIComponent(keyType)) + '/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get hostname bindings for an app or a deployment slot.
		 * Description for Get hostname bindings for an app or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hostNameBindings
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API gets hostname bindings for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {HostNameBindingCollection} OK
		 */
		WebApps_ListHostNameBindingsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HostNameBindingCollection> {
			return this.http.get<HostNameBindingCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hostNameBindings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the named hostname binding for an app (or deployment slot, if specified).
		 * Description for Get the named hostname binding for an app (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hostNameBindings/{hostName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
		 * @param {string} hostName Hostname in the hostname binding.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {HostNameBinding} OK
		 */
		WebApps_GetHostNameBindingSlot(resourceGroupName: string, name: string, slot: string, hostName: string, subscriptionId: string, api_version: string): Observable<HostNameBinding> {
			return this.http.get<HostNameBinding>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hostNameBindings/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a hostname binding for an app.
		 * Description for Creates a hostname binding for an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hostNameBindings/{hostName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} hostName Hostname in the hostname binding.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will create a binding for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {HostNameBinding} requestBody Binding details. This is the JSON representation of a HostNameBinding object.
		 * @return {HostNameBinding} OK
		 */
		WebApps_CreateOrUpdateHostNameBindingSlot(resourceGroupName: string, name: string, hostName: string, slot: string, subscriptionId: string, api_version: string, requestBody: HostNameBinding): Observable<HostNameBinding> {
			return this.http.put<HostNameBinding>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hostNameBindings/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a hostname binding for an app.
		 * Description for Deletes a hostname binding for an app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hostNameBindings/{hostName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
		 * @param {string} hostName Hostname in the hostname binding.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted hostname binding.
		 */
		WebApps_DeleteHostNameBindingSlot(resourceGroupName: string, name: string, slot: string, hostName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hostNameBindings/' + (hostName == null ? '' : encodeURIComponent(hostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a specific Service Bus Hybrid Connection used by this Web App.
		 * Description for Retrieves a specific Service Bus Hybrid Connection used by this Web App.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} namespaceName The namespace for this hybrid connection.
		 * @param {string} relayName The relay name for this hybrid connection.
		 * @param {string} slot The name of the slot for the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_GetHybridConnectionSlotReturn} OK
		 */
		WebApps_GetHybridConnectionSlot(resourceGroupName: string, name: string, namespaceName: string, relayName: string, slot: string, subscriptionId: string, api_version: string): Observable<WebApps_GetHybridConnectionSlotReturn> {
			return this.http.get<WebApps_GetHybridConnectionSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new Hybrid Connection using a Service Bus relay.
		 * Description for Creates a new Hybrid Connection using a Service Bus relay.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} namespaceName The namespace for this hybrid connection.
		 * @param {string} relayName The relay name for this hybrid connection.
		 * @param {string} slot The name of the slot for the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_CreateOrUpdateHybridConnectionSlotPutBody} requestBody The details of the hybrid connection.
		 * @return {WebApps_CreateOrUpdateHybridConnectionSlotReturn} OK
		 */
		WebApps_CreateOrUpdateHybridConnectionSlot(resourceGroupName: string, name: string, namespaceName: string, relayName: string, slot: string, subscriptionId: string, api_version: string, requestBody: WebApps_CreateOrUpdateHybridConnectionSlotPutBody): Observable<WebApps_CreateOrUpdateHybridConnectionSlotReturn> {
			return this.http.put<WebApps_CreateOrUpdateHybridConnectionSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a Hybrid Connection from this site.
		 * Description for Removes a Hybrid Connection from this site.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} namespaceName The namespace for this hybrid connection.
		 * @param {string} relayName The relay name for this hybrid connection.
		 * @param {string} slot The name of the slot for the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted hybrid connection.
		 */
		WebApps_DeleteHybridConnectionSlot(resourceGroupName: string, name: string, namespaceName: string, relayName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Hybrid Connection using a Service Bus relay.
		 * Description for Creates a new Hybrid Connection using a Service Bus relay.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} namespaceName The namespace for this hybrid connection.
		 * @param {string} relayName The relay name for this hybrid connection.
		 * @param {string} slot The name of the slot for the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_UpdateHybridConnectionSlotPatchBody} requestBody The details of the hybrid connection.
		 * @return {WebApps_UpdateHybridConnectionSlotReturn} OK
		 */
		WebApps_UpdateHybridConnectionSlot(resourceGroupName: string, name: string, namespaceName: string, relayName: string, slot: string, subscriptionId: string, api_version: string, requestBody: WebApps_UpdateHybridConnectionSlotPatchBody): Observable<WebApps_UpdateHybridConnectionSlotReturn> {
			return this.http.patch<WebApps_UpdateHybridConnectionSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all Service Bus Hybrid Connections used by this Web App.
		 * Description for Retrieves all Service Bus Hybrid Connections used by this Web App.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridConnectionRelays
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} slot The name of the slot for the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListHybridConnectionsSlotReturn} OK
		 */
		WebApps_ListHybridConnectionsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<WebApps_ListHybridConnectionsSlotReturn> {
			return this.http.get<WebApps_ListHybridConnectionsSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hybridConnectionRelays&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets hybrid connections configured for an app (or deployment slot, if specified).
		 * Description for Gets hybrid connections configured for an app (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridconnection
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get hybrid connections for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {RelayServiceConnectionEntity} OK
		 */
		WebApps_ListRelayServiceConnectionsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<RelayServiceConnectionEntity> {
			return this.http.get<RelayServiceConnectionEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hybridconnection&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a hybrid connection configuration by its name.
		 * Description for Gets a hybrid connection configuration by its name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridconnection/{entityName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} entityName Name of the hybrid connection.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get a hybrid connection for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {RelayServiceConnectionEntity} OK
		 */
		WebApps_GetRelayServiceConnectionSlot(resourceGroupName: string, name: string, entityName: string, slot: string, subscriptionId: string, api_version: string): Observable<RelayServiceConnectionEntity> {
			return this.http.get<RelayServiceConnectionEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hybridconnection/' + (entityName == null ? '' : encodeURIComponent(entityName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).
		 * Description for Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridconnection/{entityName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} entityName Name of the hybrid connection configuration.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will create or update a hybrid connection for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RelayServiceConnectionEntity} requestBody Details of the hybrid connection configuration.
		 * @return {RelayServiceConnectionEntity} OK
		 */
		WebApps_CreateOrUpdateRelayServiceConnectionSlot(resourceGroupName: string, name: string, entityName: string, slot: string, subscriptionId: string, api_version: string, requestBody: RelayServiceConnectionEntity): Observable<RelayServiceConnectionEntity> {
			return this.http.put<RelayServiceConnectionEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hybridconnection/' + (entityName == null ? '' : encodeURIComponent(entityName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a relay service connection by its name.
		 * Description for Deletes a relay service connection by its name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridconnection/{entityName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} entityName Name of the hybrid connection configuration.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete a hybrid connection for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted relay service connection.
		 */
		WebApps_DeleteRelayServiceConnectionSlot(resourceGroupName: string, name: string, entityName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hybridconnection/' + (entityName == null ? '' : encodeURIComponent(entityName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).
		 * Description for Creates a new hybrid connection configuration (PUT), or updates an existing one (PATCH).
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridconnection/{entityName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} entityName Name of the hybrid connection configuration.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will create or update a hybrid connection for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RelayServiceConnectionEntity} requestBody Details of the hybrid connection configuration.
		 * @return {RelayServiceConnectionEntity} OK
		 */
		WebApps_UpdateRelayServiceConnectionSlot(resourceGroupName: string, name: string, entityName: string, slot: string, subscriptionId: string, api_version: string, requestBody: RelayServiceConnectionEntity): Observable<RelayServiceConnectionEntity> {
			return this.http.patch<RelayServiceConnectionEntity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/hybridconnection/' + (entityName == null ? '' : encodeURIComponent(entityName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all scale-out instances of an app.
		 * Description for Gets all scale-out instances of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API gets the production slot instances.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebAppInstanceCollection} OK
		 */
		WebApps_ListInstanceIdentifiersSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<WebAppInstanceCollection> {
			return this.http.get<WebAppInstanceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all scale-out instances of an app.
		 * Description for Gets all scale-out instances of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API gets the production slot instances.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebSiteInstanceStatus} OK
		 */
		WebApps_GetInstanceInfoSlot(resourceGroupName: string, name: string, instanceId: string, slot: string, subscriptionId: string, api_version: string): Observable<WebSiteInstanceStatus> {
			return this.http.get<WebSiteInstanceStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the status of the last MSDeploy operation.
		 * Description for Get the status of the last MSDeploy operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/extensions/MSDeploy
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} instanceId ID of web app instance.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {MSDeployStatus} OK
		 */
		WebApps_GetInstanceMsDeployStatusSlot(resourceGroupName: string, name: string, slot: string, instanceId: string, subscriptionId: string, api_version: string): Observable<MSDeployStatus> {
			return this.http.get<MSDeployStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions/MSDeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Invoke the MSDeploy web app extension.
		 * Description for Invoke the MSDeploy web app extension.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/extensions/MSDeploy
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} instanceId ID of web app instance.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {MSDeploy} requestBody Details of MSDeploy operation
		 * @return {void} 
		 */
		WebApps_CreateInstanceMSDeployOperationSlot(resourceGroupName: string, name: string, slot: string, instanceId: string, subscriptionId: string, api_version: string, requestBody: MSDeploy): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions/MSDeploy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the MSDeploy Log for the last MSDeploy operation.
		 * Description for Get the MSDeploy Log for the last MSDeploy operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/extensions/MSDeploy/log
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} instanceId ID of web app instance.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {MSDeployLog} MSDeploy log returned.
		 */
		WebApps_GetInstanceMSDeployLogSlot(resourceGroupName: string, name: string, slot: string, instanceId: string, subscriptionId: string, api_version: string): Observable<MSDeployLog> {
			return this.http.get<MSDeployLog>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/extensions/MSDeploy/log&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.
		 * Description for Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/processes
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessInfoCollection} Process terminated.
		 */
		WebApps_ListInstanceProcessesSlot(resourceGroupName: string, name: string, slot: string, instanceId: string, subscriptionId: string, api_version: string): Observable<ProcessInfoCollection> {
			return this.http.get<ProcessInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get process information by its ID for a specific scaled-out instance in a web site.
		 * Description for Get process information by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/processes/{processId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessInfo} Process information returned.
		 */
		WebApps_GetInstanceProcessSlot(resourceGroupName: string, name: string, processId: string, slot: string, instanceId: string, subscriptionId: string, api_version: string): Observable<ProcessInfo> {
			return this.http.get<ProcessInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.
		 * Description for Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/processes/{processId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteInstanceProcessSlot(resourceGroupName: string, name: string, processId: string, slot: string, instanceId: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.
		 * Description for Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/processes/{processId}/dump
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {string} OK
		 */
		WebApps_GetInstanceProcessDumpSlot(resourceGroupName: string, name: string, processId: string, slot: string, instanceId: string, subscriptionId: string, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/dump&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * List module information for a process by its ID for a specific scaled-out instance in a web site.
		 * Description for List module information for a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/processes/{processId}/modules
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessModuleInfoCollection} Module information returned.
		 */
		WebApps_ListInstanceProcessModulesSlot(resourceGroupName: string, name: string, processId: string, slot: string, instanceId: string, subscriptionId: string, api_version: string): Observable<ProcessModuleInfoCollection> {
			return this.http.get<ProcessModuleInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/modules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get process information by its ID for a specific scaled-out instance in a web site.
		 * Description for Get process information by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/processes/{processId}/modules/{baseAddress}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} baseAddress Module base address.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessModuleInfo} Module information returned.
		 */
		WebApps_GetInstanceProcessModuleSlot(resourceGroupName: string, name: string, processId: string, baseAddress: string, slot: string, instanceId: string, subscriptionId: string, api_version: string): Observable<ProcessModuleInfo> {
			return this.http.get<ProcessModuleInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/modules/' + (baseAddress == null ? '' : encodeURIComponent(baseAddress)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List the threads in a process by its ID for a specific scaled-out instance in a web site.
		 * Description for List the threads in a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/processes/{processId}/threads
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} instanceId ID of a specific scaled-out instance. This is the value of the name property in the JSON response from "GET api/sites/{siteName}/instances".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessThreadInfoCollection} Thread information returned.
		 */
		WebApps_ListInstanceProcessThreadsSlot(resourceGroupName: string, name: string, processId: string, slot: string, instanceId: string, subscriptionId: string, api_version: string): Observable<ProcessThreadInfoCollection> {
			return this.http.get<ProcessThreadInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/threads&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Shows whether an app can be cloned to another resource group or subscription.
		 * Description for Shows whether an app can be cloned to another resource group or subscription.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/iscloneable
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. By default, this API returns information on the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteCloneability} OK.
		 */
		WebApps_IsCloneableSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteCloneability> {
			return this.http.post<SiteCloneability>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/iscloneable&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets existing backups of an app.
		 * Description for Gets existing backups of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/listbackups
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get backups of the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {BackupItemCollection} OK
		 */
		WebApps_ListSiteBackupsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<BackupItemCollection> {
			return this.http.post<BackupItemCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/listbackups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * This is to allow calling via powershell and ARM template.
		 * Description for This is to allow calling via powershell and ARM template.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/listsyncfunctiontriggerstatus
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {FunctionSecrets} OK
		 */
		WebApps_ListSyncFunctionTriggersSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<FunctionSecrets> {
			return this.http.post<FunctionSecrets>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/listsyncfunctiontriggerstatus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Returns the status of MySql in app migration, if one is active, and whether or not MySql in app is enabled
		 * Description for Returns the status of MySql in app migration, if one is active, and whether or not MySql in app is enabled
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/migratemysql/status
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {MigrateMySqlStatus} OK
		 */
		WebApps_GetMigrateMySqlStatusSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<MigrateMySqlStatus> {
			return this.http.get<MigrateMySqlStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/migratemysql/status&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a Swift Virtual Network connection.
		 * Description for Gets a Swift Virtual Network connection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkConfig/virtualNetwork
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get a gateway for the production slot's Virtual Network.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SwiftVirtualNetwork} OK.
		 */
		WebApps_GetSwiftVirtualNetworkConnectionSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SwiftVirtualNetwork> {
			return this.http.get<SwiftVirtualNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkConfig/virtualNetwork&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
		 * in use by another App Service Plan other than the one this App is in.
		 * Description for Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
		 * in use by another App Service Plan other than the one this App is in.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkConfig/virtualNetwork
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SwiftVirtualNetwork} requestBody Properties of the Virtual Network connection. See example.
		 * @return {SwiftVirtualNetwork} OK
		 */
		WebApps_CreateOrUpdateSwiftVirtualNetworkConnectionSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: SwiftVirtualNetwork): Observable<SwiftVirtualNetwork> {
			return this.http.put<SwiftVirtualNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkConfig/virtualNetwork&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Swift Virtual Network connection from an app (or deployment slot).
		 * Description for Deletes a Swift Virtual Network connection from an app (or deployment slot).
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkConfig/virtualNetwork
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the connection for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted virtual network.
		 */
		WebApps_DeleteSwiftVirtualNetworkSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkConfig/virtualNetwork&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
		 * in use by another App Service Plan other than the one this App is in.
		 * Description for Integrates this Web App with a Virtual Network. This requires that 1) "swiftSupported" is true when doing a GET against this resource, and 2) that the target Subnet has already been delegated, and is not
		 * in use by another App Service Plan other than the one this App is in.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkConfig/virtualNetwork
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SwiftVirtualNetwork} requestBody Properties of the Virtual Network connection. See example.
		 * @return {SwiftVirtualNetwork} OK
		 */
		WebApps_UpdateSwiftVirtualNetworkConnectionSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: SwiftVirtualNetwork): Observable<SwiftVirtualNetwork> {
			return this.http.patch<SwiftVirtualNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkConfig/virtualNetwork&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all network features used by the app (or deployment slot, if specified).
		 * Description for Gets all network features used by the app (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkFeatures/{view}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} view The type of view. This can either be "summary" or "detailed".
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get network features for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {NetworkFeatures} OK.
		 */
		WebApps_ListNetworkFeaturesSlot(resourceGroupName: string, name: string, view: string, slot: string, subscriptionId: string, api_version: string): Observable<NetworkFeatures> {
			return this.http.get<NetworkFeatures>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkFeatures/' + (view == null ? '' : encodeURIComponent(view)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkTrace/operationresults/{operationId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} operationId GUID of the operation.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get an operation for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_GetNetworkTraceOperationSlot(resourceGroupName: string, name: string, operationId: string, slot: string, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.get<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkTrace/operationresults/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Start capturing network packets for the site (To be deprecated).
		 * Description for Start capturing network packets for the site (To be deprecated).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkTrace/start
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {number} durationInSeconds The duration to keep capturing in seconds.
		 * @param {string} slot The name of the slot for this web app.
		 * @param {number} maxFrameLength The maximum frame length in bytes (Optional).
		 * @param {string} sasUrl The Blob URL to store capture file.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {string} OK
		 */
		WebApps_StartWebSiteNetworkTraceSlot(resourceGroupName: string, name: string, durationInSeconds: number | null | undefined, slot: string, maxFrameLength: number | null | undefined, sasUrl: string | null | undefined, subscriptionId: string, api_version: string): Observable<string> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkTrace/start&durationInSeconds=' + durationInSeconds + '&maxFrameLength=' + maxFrameLength + '&sasUrl=' + (sasUrl == null ? '' : encodeURIComponent(sasUrl)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { responseType: 'text' });
		}

		/**
		 * Start capturing network packets for the site.
		 * Description for Start capturing network packets for the site.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkTrace/startOperation
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {number} durationInSeconds The duration to keep capturing in seconds.
		 * @param {string} slot The name of the slot for this web app.
		 * @param {number} maxFrameLength The maximum frame length in bytes (Optional).
		 * @param {string} sasUrl The Blob URL to store capture file.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_StartWebSiteNetworkTraceOperationSlot(resourceGroupName: string, name: string, durationInSeconds: number | null | undefined, slot: string, maxFrameLength: number | null | undefined, sasUrl: string | null | undefined, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.post<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkTrace/startOperation&durationInSeconds=' + durationInSeconds + '&maxFrameLength=' + maxFrameLength + '&sasUrl=' + (sasUrl == null ? '' : encodeURIComponent(sasUrl)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Stop ongoing capturing network packets for the site.
		 * Description for Stop ongoing capturing network packets for the site.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkTrace/stop
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} slot The name of the slot for this web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Stopped.
		 */
		WebApps_StopWebSiteNetworkTraceSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkTrace/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkTrace/{operationId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} operationId GUID of the operation.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get an operation for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_GetNetworkTracesSlot(resourceGroupName: string, name: string, operationId: string, slot: string, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.get<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkTrace/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkTraces/current/operationresults/{operationId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} operationId GUID of the operation.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get an operation for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_GetNetworkTraceOperationSlotV2(resourceGroupName: string, name: string, operationId: string, slot: string, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.get<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkTraces/current/operationresults/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkTraces/{operationId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} operationId GUID of the operation.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get an operation for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_GetNetworkTracesSlotV2(resourceGroupName: string, name: string, operationId: string, slot: string, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.get<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/networkTraces/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Generates a new publishing password for an app (or deployment slot, if specified).
		 * Description for Generates a new publishing password for an app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/newpassword
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API generate a new publishing password for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully generate new password.
		 */
		WebApps_GenerateNewSitePublishingPasswordSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/newpassword&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets perfmon counters for web app.
		 * Description for Gets perfmon counters for web app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/perfcounters
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} filter Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PerfMonCounterCollection} OK
		 */
		WebApps_ListPerfMonCountersSlot(resourceGroupName: string, name: string, slot: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<PerfMonCounterCollection> {
			return this.http.get<PerfMonCounterCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/perfcounters&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets web app's event logs.
		 * Description for Gets web app's event logs.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/phplogging
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SitePhpErrorLogFlag} OK
		 */
		WebApps_GetSitePhpErrorLogFlagSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SitePhpErrorLogFlag> {
			return this.http.get<SitePhpErrorLogFlag>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/phplogging&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the premier add-ons of an app.
		 * Description for Gets the premier add-ons of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/premieraddons
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the premier add-ons for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PremierAddOn} OK
		 */
		WebApps_ListPremierAddOnsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<PremierAddOn> {
			return this.http.get<PremierAddOn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/premieraddons&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a named add-on of an app.
		 * Description for Gets a named add-on of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/premieraddons/{premierAddOnName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} premierAddOnName Add-on name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the named add-on for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PremierAddOn} OK
		 */
		WebApps_GetPremierAddOnSlot(resourceGroupName: string, name: string, premierAddOnName: string, slot: string, subscriptionId: string, api_version: string): Observable<PremierAddOn> {
			return this.http.get<PremierAddOn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/premieraddons/' + (premierAddOnName == null ? '' : encodeURIComponent(premierAddOnName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a named add-on of an app.
		 * Description for Updates a named add-on of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/premieraddons/{premierAddOnName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} premierAddOnName Add-on name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the named add-on for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {PremierAddOn} requestBody A JSON representation of the edited premier add-on.
		 * @return {PremierAddOn} OK
		 */
		WebApps_AddPremierAddOnSlot(resourceGroupName: string, name: string, premierAddOnName: string, slot: string, subscriptionId: string, api_version: string, requestBody: PremierAddOn): Observable<PremierAddOn> {
			return this.http.put<PremierAddOn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/premieraddons/' + (premierAddOnName == null ? '' : encodeURIComponent(premierAddOnName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a premier add-on from an app.
		 * Description for Delete a premier add-on from an app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/premieraddons/{premierAddOnName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} premierAddOnName Add-on name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the named add-on for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted premier add-on.
		 */
		WebApps_DeletePremierAddOnSlot(resourceGroupName: string, name: string, premierAddOnName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/premieraddons/' + (premierAddOnName == null ? '' : encodeURIComponent(premierAddOnName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a named add-on of an app.
		 * Description for Updates a named add-on of an app.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/premieraddons/{premierAddOnName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} premierAddOnName Add-on name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the named add-on for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {PremierAddOnPatchResource} requestBody A JSON representation of the edited premier add-on.
		 * @return {PremierAddOn} OK
		 */
		WebApps_UpdatePremierAddOnSlot(resourceGroupName: string, name: string, premierAddOnName: string, slot: string, subscriptionId: string, api_version: string, requestBody: PremierAddOnPatchResource): Observable<PremierAddOn> {
			return this.http.patch<PremierAddOn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/premieraddons/' + (premierAddOnName == null ? '' : encodeURIComponent(premierAddOnName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets data around private site access enablement and authorized Virtual Networks that can access the site.
		 * Description for Gets data around private site access enablement and authorized Virtual Networks that can access the site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/privateAccess/virtualNetworks
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} slot The name of the slot for the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PrivateAccess} OK
		 */
		WebApps_GetPrivateAccessSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<PrivateAccess> {
			return this.http.get<PrivateAccess>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/privateAccess/virtualNetworks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Sets data around private site access enablement and authorized Virtual Networks that can access the site.
		 * Description for Sets data around private site access enablement and authorized Virtual Networks that can access the site.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/privateAccess/virtualNetworks
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} slot The name of the slot for the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {PrivateAccess} requestBody The information for the private access
		 * @return {PrivateAccess} OK
		 */
		WebApps_PutPrivateAccessVnetSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: PrivateAccess): Observable<PrivateAccess> {
			return this.http.put<PrivateAccess>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/privateAccess/virtualNetworks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.
		 * Description for Get list of processes for a web site, or a deployment slot, or for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/processes
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessInfoCollection} Process terminated.
		 */
		WebApps_ListProcessesSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<ProcessInfoCollection> {
			return this.http.get<ProcessInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/processes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get process information by its ID for a specific scaled-out instance in a web site.
		 * Description for Get process information by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/processes/{processId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessInfo} Process information returned.
		 */
		WebApps_GetProcessSlot(resourceGroupName: string, name: string, processId: string, slot: string, subscriptionId: string, api_version: string): Observable<ProcessInfo> {
			return this.http.get<ProcessInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.
		 * Description for Terminate a process by its ID for a web site, or a deployment slot, or specific scaled-out instance in a web site.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/processes/{processId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteProcessSlot(resourceGroupName: string, name: string, processId: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.
		 * Description for Get a memory dump of a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/processes/{processId}/dump
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {string} OK
		 */
		WebApps_GetProcessDumpSlot(resourceGroupName: string, name: string, processId: string, slot: string, subscriptionId: string, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/dump&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * List module information for a process by its ID for a specific scaled-out instance in a web site.
		 * Description for List module information for a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/processes/{processId}/modules
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessModuleInfoCollection} Module information returned.
		 */
		WebApps_ListProcessModulesSlot(resourceGroupName: string, name: string, processId: string, slot: string, subscriptionId: string, api_version: string): Observable<ProcessModuleInfoCollection> {
			return this.http.get<ProcessModuleInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/modules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get process information by its ID for a specific scaled-out instance in a web site.
		 * Description for Get process information by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/processes/{processId}/modules/{baseAddress}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} baseAddress Module base address.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessModuleInfo} Module information returned.
		 */
		WebApps_GetProcessModuleSlot(resourceGroupName: string, name: string, processId: string, baseAddress: string, slot: string, subscriptionId: string, api_version: string): Observable<ProcessModuleInfo> {
			return this.http.get<ProcessModuleInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/modules/' + (baseAddress == null ? '' : encodeURIComponent(baseAddress)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List the threads in a process by its ID for a specific scaled-out instance in a web site.
		 * Description for List the threads in a process by its ID for a specific scaled-out instance in a web site.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/processes/{processId}/threads
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} processId PID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ProcessThreadInfoCollection} Thread information returned.
		 */
		WebApps_ListProcessThreadsSlot(resourceGroupName: string, name: string, processId: string, slot: string, subscriptionId: string, api_version: string): Observable<ProcessThreadInfoCollection> {
			return this.http.get<ProcessThreadInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/processes/' + (processId == null ? '' : encodeURIComponent(processId)) + '/threads&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get public certificates for an app or a deployment slot.
		 * Description for Get public certificates for an app or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/publicCertificates
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API gets hostname bindings for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PublicCertificateCollection} OK
		 */
		WebApps_ListPublicCertificatesSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<PublicCertificateCollection> {
			return this.http.get<PublicCertificateCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/publicCertificates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the named public certificate for an app (or deployment slot, if specified).
		 * Description for Get the named public certificate for an app (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/publicCertificates/{publicCertificateName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
		 * @param {string} publicCertificateName Public certificate name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PublicCertificate} OK
		 */
		WebApps_GetPublicCertificateSlot(resourceGroupName: string, name: string, slot: string, publicCertificateName: string, subscriptionId: string, api_version: string): Observable<PublicCertificate> {
			return this.http.get<PublicCertificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/publicCertificates/' + (publicCertificateName == null ? '' : encodeURIComponent(publicCertificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a hostname binding for an app.
		 * Description for Creates a hostname binding for an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/publicCertificates/{publicCertificateName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} publicCertificateName Public certificate name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will create a binding for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {PublicCertificate} requestBody Public certificate details. This is the JSON representation of a PublicCertificate object.
		 * @return {PublicCertificate} OK
		 */
		WebApps_CreateOrUpdatePublicCertificateSlot(resourceGroupName: string, name: string, publicCertificateName: string, slot: string, subscriptionId: string, api_version: string, requestBody: PublicCertificate): Observable<PublicCertificate> {
			return this.http.put<PublicCertificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/publicCertificates/' + (publicCertificateName == null ? '' : encodeURIComponent(publicCertificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a hostname binding for an app.
		 * Description for Deletes a hostname binding for an app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/publicCertificates/{publicCertificateName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
		 * @param {string} publicCertificateName Public certificate name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted hostname binding.
		 */
		WebApps_DeletePublicCertificateSlot(resourceGroupName: string, name: string, slot: string, publicCertificateName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/publicCertificates/' + (publicCertificateName == null ? '' : encodeURIComponent(publicCertificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the publishing profile for an app (or deployment slot, if specified).
		 * Description for Gets the publishing profile for an app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/publishxml
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the publishing profile for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmPublishingProfileOptions} requestBody Specifies publishingProfileOptions for publishing profile. For example, use {"format": "FileZilla3"} to get a FileZilla publishing profile.
		 * @return {void} OK
		 */
		WebApps_ListPublishingProfileXmlWithSecretsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: CsmPublishingProfileOptions): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/publishxml&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets the configuration settings of the current slot if they were previously modified by calling the API with POST.
		 * Description for Resets the configuration settings of the current slot if they were previously modified by calling the API with POST.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resetSlotConfig
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API resets configuration settings for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} OK.
		 */
		WebApps_ResetSlotConfigurationSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/resetSlotConfig&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restarts an app (or deployment slot, if specified).
		 * Description for Restarts an app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/restart
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will restart the production slot.
		 * @param {boolean} softRestart Specify true to apply the configuration settings and restarts the app only if necessary. By default, the API always restarts and reprovisions the app.
		 * @param {boolean} synchronous Specify true to block until the app is restarted. By default, it is set to false, and the API responds immediately (asynchronous).
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully restarted app.
		 */
		WebApps_RestartSlot(resourceGroupName: string, name: string, slot: string, softRestart: boolean | null | undefined, synchronous: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/restart&softRestart=' + softRestart + '&synchronous=' + synchronous + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores an app from a backup blob in Azure Storage.
		 * Description for Restores an app from a backup blob in Azure Storage.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/restoreFromBackupBlob
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will restore a backup of the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RestoreRequest} requestBody Information on restore request .
		 * @return {void} Restore operation started.
		 */
		WebApps_RestoreFromBackupBlobSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: RestoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/restoreFromBackupBlob&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a deleted web app to this web app.
		 * Description for Restores a deleted web app to this web app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/restoreFromDeletedApp
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {DeletedAppRestoreRequest} requestBody Deleted web app restore information.
		 * @return {void} Restore operation started.
		 */
		WebApps_RestoreFromDeletedAppSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: DeletedAppRestoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/restoreFromDeletedApp&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a web app from a snapshot.
		 * Description for Restores a web app from a snapshot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/restoreSnapshot
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SnapshotRestoreRequest} requestBody Snapshot restore settings. Snapshot information can be obtained by calling GetDeletedSites or GetSiteSnapshots API.
		 * @return {void} Restore operation started.
		 */
		WebApps_RestoreSnapshotSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: SnapshotRestoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/restoreSnapshot&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get list of siteextensions for a web site, or a deployment slot.
		 * Description for Get list of siteextensions for a web site, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/siteextensions
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API uses the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteExtensionInfoCollection} SiteExtension information returned.
		 */
		WebApps_ListSiteExtensionsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteExtensionInfoCollection> {
			return this.http.get<SiteExtensionInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/siteextensions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get site extension information by its ID for a web site, or a deployment slot.
		 * Description for Get site extension information by its ID for a web site, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/siteextensions/{siteExtensionId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} siteExtensionId Site extension name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API uses the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteExtensionInfo} SiteExtension information returned.
		 */
		WebApps_GetSiteExtensionSlot(resourceGroupName: string, name: string, siteExtensionId: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteExtensionInfo> {
			return this.http.get<SiteExtensionInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/siteextensions/' + (siteExtensionId == null ? '' : encodeURIComponent(siteExtensionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Install site extension on a web site, or a deployment slot.
		 * Description for Install site extension on a web site, or a deployment slot.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/siteextensions/{siteExtensionId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} siteExtensionId Site extension name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API uses the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteExtensionInfo} Site Extension created.
		 */
		WebApps_InstallSiteExtensionSlot(resourceGroupName: string, name: string, siteExtensionId: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteExtensionInfo> {
			return this.http.put<SiteExtensionInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/siteextensions/' + (siteExtensionId == null ? '' : encodeURIComponent(siteExtensionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Remove a site extension from a web site, or a deployment slot.
		 * Description for Remove a site extension from a web site, or a deployment slot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/siteextensions/{siteExtensionId}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} siteExtensionId Site extension name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_DeleteSiteExtensionSlot(resourceGroupName: string, name: string, siteExtensionId: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/siteextensions/' + (siteExtensionId == null ? '' : encodeURIComponent(siteExtensionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies a deployment slot to another deployment slot of an app.
		 * Description for Copies a deployment slot to another deployment slot of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/slotcopy
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the source slot. If a slot is not specified, the production slot is used as the source slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmCopySlotEntity} requestBody JSON object that contains the target slot name and site config properties to override the source slot config. See example.
		 * @return {void} OK.
		 */
		WebApps_CopySlotSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: CsmCopySlotEntity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/slotcopy&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the difference in configuration settings between two web app slots.
		 * Description for Get the difference in configuration settings between two web app slots.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/slotsdiffs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the source slot. If a slot is not specified, the production slot is used as the source slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmSlotEntity} requestBody JSON object that contains the target slot name. See example.
		 * @return {SlotDifferenceCollection} OK
		 */
		WebApps_ListSlotDifferencesSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: CsmSlotEntity): Observable<SlotDifferenceCollection> {
			return this.http.post<SlotDifferenceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/slotsdiffs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Swaps two deployment slots of an app.
		 * Description for Swaps two deployment slots of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/slotsswap
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the source slot. If a slot is not specified, the production slot is used as the source slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmSlotEntity} requestBody JSON object that contains the target slot name. See example.
		 * @return {void} OK.
		 */
		WebApps_SwapSlotSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: CsmSlotEntity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/slotsswap&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all Snapshots to the user.
		 * Description for Returns all Snapshots to the user.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/snapshots
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Website Name.
		 * @param {string} slot Website Slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SnapshotCollection} OK
		 */
		WebApps_ListSnapshotsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SnapshotCollection> {
			return this.http.get<SnapshotCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/snapshots&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns all Snapshots to the user from DRSecondary endpoint.
		 * Description for Returns all Snapshots to the user from DRSecondary endpoint.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/snapshotsdr
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Website Name.
		 * @param {string} slot Website Slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SnapshotCollection} OK
		 */
		WebApps_ListSnapshotsFromDRSecondarySlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SnapshotCollection> {
			return this.http.get<SnapshotCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/snapshotsdr&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the source control configuration of an app.
		 * Description for Gets the source control configuration of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/sourcecontrols/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the source control configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteSourceControl} Successfully retrieved source control for web app.
		 */
		WebApps_GetSourceControlSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<SiteSourceControl> {
			return this.http.get<SiteSourceControl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/sourcecontrols/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates the source control configuration of an app.
		 * Description for Updates the source control configuration of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/sourcecontrols/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the source control configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteSourceControl} requestBody JSON representation of a SiteSourceControl object. See example.
		 * @return {SiteSourceControl} Successfully created or updated source control for web app.
		 */
		WebApps_CreateOrUpdateSourceControlSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: SiteSourceControl): Observable<SiteSourceControl> {
			return this.http.put<SiteSourceControl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/sourcecontrols/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the source control configuration of an app.
		 * Description for Deletes the source control configuration of an app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/sourcecontrols/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the source control configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted source control for web app.
		 */
		WebApps_DeleteSourceControlSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/sourcecontrols/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the source control configuration of an app.
		 * Description for Updates the source control configuration of an app.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/sourcecontrols/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will update the source control configuration for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteSourceControl} requestBody JSON representation of a SiteSourceControl object. See example.
		 * @return {SiteSourceControl} Successfully created or updated source control for web app.
		 */
		WebApps_UpdateSourceControlSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string, requestBody: SiteSourceControl): Observable<SiteSourceControl> {
			return this.http.patch<SiteSourceControl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/sourcecontrols/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an app (or deployment slot, if specified).
		 * Description for Starts an app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/start
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will start the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully started app.
		 */
		WebApps_StartSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start capturing network packets for the site.
		 * Description for Start capturing network packets for the site.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/startNetworkTrace
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {number} durationInSeconds The duration to keep capturing in seconds.
		 * @param {string} slot The name of the slot for this web app.
		 * @param {number} maxFrameLength The maximum frame length in bytes (Optional).
		 * @param {string} sasUrl The Blob URL to store capture file.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_StartNetworkTraceSlot(resourceGroupName: string, name: string, durationInSeconds: number | null | undefined, slot: string, maxFrameLength: number | null | undefined, sasUrl: string | null | undefined, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.post<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/startNetworkTrace&durationInSeconds=' + durationInSeconds + '&maxFrameLength=' + maxFrameLength + '&sasUrl=' + (sasUrl == null ? '' : encodeURIComponent(sasUrl)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Stops an app (or deployment slot, if specified).
		 * Description for Stops an app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/stop
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will stop the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully stopped app.
		 */
		WebApps_StopSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop ongoing capturing network packets for the site.
		 * Description for Stop ongoing capturing network packets for the site.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/stopNetworkTrace
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} slot The name of the slot for this web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Stopped.
		 */
		WebApps_StopNetworkTraceSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/stopNetworkTrace&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sync web app repository.
		 * Description for Sync web app repository.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/sync
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully sync source control.
		 */
		WebApps_SyncRepositorySlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/sync&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Syncs function trigger metadata to the management database
		 * Description for Syncs function trigger metadata to the management database
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/syncfunctiontriggers
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_SyncFunctionTriggersSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/syncfunctiontriggers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List triggered web jobs for an app, or a deployment slot.
		 * Description for List triggered web jobs for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/triggeredwebjobs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {TriggeredWebJobCollection} OK
		 */
		WebApps_ListTriggeredWebJobsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<TriggeredWebJobCollection> {
			return this.http.get<TriggeredWebJobCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/triggeredwebjobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a triggered web job by its ID for an app, or a deployment slot.
		 * Description for Gets a triggered web job by its ID for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/triggeredwebjobs/{webJobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API uses the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {TriggeredWebJob} Found continuous web job.
		 */
		WebApps_GetTriggeredWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, subscriptionId: string, api_version: string): Observable<TriggeredWebJob> {
			return this.http.get<TriggeredWebJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/triggeredwebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Delete a triggered web job by its ID for an app, or a deployment slot.
		 * Description for Delete a triggered web job by its ID for an app, or a deployment slot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/triggeredwebjobs/{webJobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API deletes web job for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted continuous web job.
		 */
		WebApps_DeleteTriggeredWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/triggeredwebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List a triggered web job's history for an app, or a deployment slot.
		 * Description for List a triggered web job's history for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/triggeredwebjobs/{webJobName}/history
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API uses the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {TriggeredJobHistoryCollection} Found continuous web job.
		 */
		WebApps_ListTriggeredWebJobHistorySlot(resourceGroupName: string, name: string, webJobName: string, slot: string, subscriptionId: string, api_version: string): Observable<TriggeredJobHistoryCollection> {
			return this.http.get<TriggeredJobHistoryCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/triggeredwebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '/history&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a triggered web job's history by its ID for an app, , or a deployment slot.
		 * Description for Gets a triggered web job's history by its ID for an app, , or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/triggeredwebjobs/{webJobName}/history/{id}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} id History ID.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API uses the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {TriggeredJobHistory} Found continuous web job.
		 */
		WebApps_GetTriggeredWebJobHistorySlot(resourceGroupName: string, name: string, webJobName: string, id: string, slot: string, subscriptionId: string, api_version: string): Observable<TriggeredJobHistory> {
			return this.http.get<TriggeredJobHistory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/triggeredwebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '/history/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Run a triggered web job for an app, or a deployment slot.
		 * Description for Run a triggered web job for an app, or a deployment slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/triggeredwebjobs/{webJobName}/run
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API uses the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Run a triggered web job.
		 */
		WebApps_RunTriggeredWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/triggeredwebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '/run&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the quota usage information of an app (or deployment slot, if specified).
		 * Description for Gets the quota usage information of an app (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/usages
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get quota information of the production slot.
		 * @param {string} filter Return only information specified in the filter (using OData syntax). For example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListUsagesSlotReturn} OK
		 */
		WebApps_ListUsagesSlot(resourceGroupName: string, name: string, slot: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<WebApps_ListUsagesSlotReturn> {
			return this.http.get<WebApps_ListUsagesSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/usages&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the virtual networks the app (or deployment slot) is connected to.
		 * Description for Gets the virtual networks the app (or deployment slot) is connected to.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get virtual network connections for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<WebApps_ListVnetConnectionsSlotReturn>} OK
		 */
		WebApps_ListVnetConnectionsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<Array<WebApps_ListVnetConnectionsSlotReturn>> {
			return this.http.get<Array<WebApps_ListVnetConnectionsSlotReturn>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/virtualNetworkConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a virtual network the app (or deployment slot) is connected to by name.
		 * Description for Gets a virtual network the app (or deployment slot) is connected to by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of the virtual network.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get the named virtual network for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_GetVnetConnectionSlotReturn} OK
		 */
		WebApps_GetVnetConnectionSlot(resourceGroupName: string, name: string, vnetName: string, slot: string, subscriptionId: string, api_version: string): Observable<WebApps_GetVnetConnectionSlotReturn> {
			return this.http.get<WebApps_GetVnetConnectionSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).
		 * Description for Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of an existing Virtual Network.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_CreateOrUpdateVnetConnectionSlotPutBody} requestBody Properties of the Virtual Network connection. See example.
		 * @return {WebApps_CreateOrUpdateVnetConnectionSlotReturn} OK
		 */
		WebApps_CreateOrUpdateVnetConnectionSlot(resourceGroupName: string, name: string, vnetName: string, slot: string, subscriptionId: string, api_version: string, requestBody: WebApps_CreateOrUpdateVnetConnectionSlotPutBody): Observable<WebApps_CreateOrUpdateVnetConnectionSlotReturn> {
			return this.http.put<WebApps_CreateOrUpdateVnetConnectionSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a connection from an app (or deployment slot to a named virtual network.
		 * Description for Deletes a connection from an app (or deployment slot to a named virtual network.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of the virtual network.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will delete the connection for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted virtual network.
		 */
		WebApps_DeleteVnetConnectionSlot(resourceGroupName: string, name: string, vnetName: string, slot: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).
		 * Description for Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of an existing Virtual Network.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_UpdateVnetConnectionSlotPatchBody} requestBody Properties of the Virtual Network connection. See example.
		 * @return {WebApps_UpdateVnetConnectionSlotReturn} OK
		 */
		WebApps_UpdateVnetConnectionSlot(resourceGroupName: string, name: string, vnetName: string, slot: string, subscriptionId: string, api_version: string, requestBody: WebApps_UpdateVnetConnectionSlotPatchBody): Observable<WebApps_UpdateVnetConnectionSlotReturn> {
			return this.http.patch<WebApps_UpdateVnetConnectionSlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an app's Virtual Network gateway.
		 * Description for Gets an app's Virtual Network gateway.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} gatewayName Name of the gateway. Currently, the only supported string is "primary".
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will get a gateway for the production slot's Virtual Network.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_GetVnetConnectionGatewaySlotReturn} OK.
		 */
		WebApps_GetVnetConnectionGatewaySlot(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, slot: string, subscriptionId: string, api_version: string): Observable<WebApps_GetVnetConnectionGatewaySlotReturn> {
			return this.http.get<WebApps_GetVnetConnectionGatewaySlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
		 * Description for Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} gatewayName Name of the gateway. Currently, the only supported string is "primary".
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will add or update a gateway for the production slot's Virtual Network.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_CreateOrUpdateVnetConnectionGatewaySlotPutBody} requestBody The properties to update this gateway with.
		 * @return {WebApps_CreateOrUpdateVnetConnectionGatewaySlotReturn} OK
		 */
		WebApps_CreateOrUpdateVnetConnectionGatewaySlot(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, slot: string, subscriptionId: string, api_version: string, requestBody: WebApps_CreateOrUpdateVnetConnectionGatewaySlotPutBody): Observable<WebApps_CreateOrUpdateVnetConnectionGatewaySlotReturn> {
			return this.http.put<WebApps_CreateOrUpdateVnetConnectionGatewaySlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
		 * Description for Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} gatewayName Name of the gateway. Currently, the only supported string is "primary".
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API will add or update a gateway for the production slot's Virtual Network.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_UpdateVnetConnectionGatewaySlotPatchBody} requestBody The properties to update this gateway with.
		 * @return {WebApps_UpdateVnetConnectionGatewaySlotReturn} OK
		 */
		WebApps_UpdateVnetConnectionGatewaySlot(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, slot: string, subscriptionId: string, api_version: string, requestBody: WebApps_UpdateVnetConnectionGatewaySlotPatchBody): Observable<WebApps_UpdateVnetConnectionGatewaySlotReturn> {
			return this.http.patch<WebApps_UpdateVnetConnectionGatewaySlotReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List webjobs for an app, or a deployment slot.
		 * Description for List webjobs for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/webjobs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebJobCollection} OK
		 */
		WebApps_ListWebJobsSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<WebJobCollection> {
			return this.http.get<WebJobCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/webjobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get webjob information for an app, or a deployment slot.
		 * Description for Get webjob information for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/webjobs/{webJobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of the web job.
		 * @param {string} slot Name of the deployment slot. If a slot is not specified, the API returns deployments for the production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebJob} OK
		 */
		WebApps_GetWebJobSlot(resourceGroupName: string, name: string, webJobName: string, slot: string, subscriptionId: string, api_version: string): Observable<WebJob> {
			return this.http.get<WebJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/webjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the difference in configuration settings between two web app slots.
		 * Description for Get the difference in configuration settings between two web app slots.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slotsdiffs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmSlotEntity} requestBody JSON object that contains the target slot name. See example.
		 * @return {SlotDifferenceCollection} OK
		 */
		WebApps_ListSlotDifferencesFromProduction(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: CsmSlotEntity): Observable<SlotDifferenceCollection> {
			return this.http.post<SlotDifferenceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slotsdiffs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Swaps two deployment slots of an app.
		 * Description for Swaps two deployment slots of an app.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slotsswap
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmSlotEntity} requestBody JSON object that contains the target slot name. See example.
		 * @return {void} OK.
		 */
		WebApps_SwapSlotWithProduction(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: CsmSlotEntity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slotsswap&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all Snapshots to the user.
		 * Description for Returns all Snapshots to the user.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/snapshots
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Website Name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SnapshotCollection} OK
		 */
		WebApps_ListSnapshots(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SnapshotCollection> {
			return this.http.get<SnapshotCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/snapshots&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns all Snapshots to the user from DRSecondary endpoint.
		 * Description for Returns all Snapshots to the user from DRSecondary endpoint.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/snapshotsdr
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Website Name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SnapshotCollection} OK
		 */
		WebApps_ListSnapshotsFromDRSecondary(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SnapshotCollection> {
			return this.http.get<SnapshotCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/snapshotsdr&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the source control configuration of an app.
		 * Description for Gets the source control configuration of an app.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/sourcecontrols/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SiteSourceControl} Successfully retrieved source control for web app.
		 */
		WebApps_GetSourceControl(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SiteSourceControl> {
			return this.http.get<SiteSourceControl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/sourcecontrols/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates the source control configuration of an app.
		 * Description for Updates the source control configuration of an app.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/sourcecontrols/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteSourceControl} requestBody JSON representation of a SiteSourceControl object. See example.
		 * @return {SiteSourceControl} Successfully created or updated source control for web app.
		 */
		WebApps_CreateOrUpdateSourceControl(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SiteSourceControl): Observable<SiteSourceControl> {
			return this.http.put<SiteSourceControl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/sourcecontrols/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the source control configuration of an app.
		 * Description for Deletes the source control configuration of an app.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/sourcecontrols/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted source control for web app.
		 */
		WebApps_DeleteSourceControl(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/sourcecontrols/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the source control configuration of an app.
		 * Description for Updates the source control configuration of an app.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/sourcecontrols/web
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteSourceControl} requestBody JSON representation of a SiteSourceControl object. See example.
		 * @return {SiteSourceControl} Successfully created or updated source control for web app.
		 */
		WebApps_UpdateSourceControl(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: SiteSourceControl): Observable<SiteSourceControl> {
			return this.http.patch<SiteSourceControl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/sourcecontrols/web&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an app (or deployment slot, if specified).
		 * Description for Starts an app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/start
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully started app.
		 */
		WebApps_Start(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start capturing network packets for the site.
		 * Description for Start capturing network packets for the site.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/startNetworkTrace
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {number} durationInSeconds The duration to keep capturing in seconds.
		 * @param {number} maxFrameLength The maximum frame length in bytes (Optional).
		 * @param {string} sasUrl The Blob URL to store capture file.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<NetworkTrace>} OK
		 */
		WebApps_StartNetworkTrace(resourceGroupName: string, name: string, durationInSeconds: number | null | undefined, maxFrameLength: number | null | undefined, sasUrl: string | null | undefined, subscriptionId: string, api_version: string): Observable<Array<NetworkTrace>> {
			return this.http.post<Array<NetworkTrace>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/startNetworkTrace&durationInSeconds=' + durationInSeconds + '&maxFrameLength=' + maxFrameLength + '&sasUrl=' + (sasUrl == null ? '' : encodeURIComponent(sasUrl)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Stops an app (or deployment slot, if specified).
		 * Description for Stops an app (or deployment slot, if specified).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/stop
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully stopped app.
		 */
		WebApps_Stop(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop ongoing capturing network packets for the site.
		 * Description for Stop ongoing capturing network packets for the site.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/stopNetworkTrace
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name The name of the web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Stopped.
		 */
		WebApps_StopNetworkTrace(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/stopNetworkTrace&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sync web app repository.
		 * Description for Sync web app repository.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/sync
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully sync source control.
		 */
		WebApps_SyncRepository(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/sync&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Syncs function trigger metadata to the management database
		 * Description for Syncs function trigger metadata to the management database
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/syncfunctiontriggers
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		WebApps_SyncFunctionTriggers(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/syncfunctiontriggers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List triggered web jobs for an app, or a deployment slot.
		 * Description for List triggered web jobs for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/triggeredwebjobs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {TriggeredWebJobCollection} OK
		 */
		WebApps_ListTriggeredWebJobs(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<TriggeredWebJobCollection> {
			return this.http.get<TriggeredWebJobCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/triggeredwebjobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a triggered web job by its ID for an app, or a deployment slot.
		 * Description for Gets a triggered web job by its ID for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/triggeredwebjobs/{webJobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {TriggeredWebJob} Found continuous web job.
		 */
		WebApps_GetTriggeredWebJob(resourceGroupName: string, name: string, webJobName: string, subscriptionId: string, api_version: string): Observable<TriggeredWebJob> {
			return this.http.get<TriggeredWebJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/triggeredwebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Delete a triggered web job by its ID for an app, or a deployment slot.
		 * Description for Delete a triggered web job by its ID for an app, or a deployment slot.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/triggeredwebjobs/{webJobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted continuous web job.
		 */
		WebApps_DeleteTriggeredWebJob(resourceGroupName: string, name: string, webJobName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/triggeredwebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List a triggered web job's history for an app, or a deployment slot.
		 * Description for List a triggered web job's history for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/triggeredwebjobs/{webJobName}/history
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {TriggeredJobHistoryCollection} Found continuous web job.
		 */
		WebApps_ListTriggeredWebJobHistory(resourceGroupName: string, name: string, webJobName: string, subscriptionId: string, api_version: string): Observable<TriggeredJobHistoryCollection> {
			return this.http.get<TriggeredJobHistoryCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/triggeredwebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '/history&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a triggered web job's history by its ID for an app, , or a deployment slot.
		 * Description for Gets a triggered web job's history by its ID for an app, , or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/triggeredwebjobs/{webJobName}/history/{id}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} id History ID.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {TriggeredJobHistory} Found continuous web job.
		 */
		WebApps_GetTriggeredWebJobHistory(resourceGroupName: string, name: string, webJobName: string, id: string, subscriptionId: string, api_version: string): Observable<TriggeredJobHistory> {
			return this.http.get<TriggeredJobHistory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/triggeredwebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '/history/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Run a triggered web job for an app, or a deployment slot.
		 * Description for Run a triggered web job for an app, or a deployment slot.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/triggeredwebjobs/{webJobName}/run
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of Web Job.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Run a triggered web job.
		 */
		WebApps_RunTriggeredWebJob(resourceGroupName: string, name: string, webJobName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/triggeredwebjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '/run&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the quota usage information of an app (or deployment slot, if specified).
		 * Description for Gets the quota usage information of an app (or deployment slot, if specified).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/usages
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} filter Return only information specified in the filter (using OData syntax). For example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_ListUsagesReturn} OK
		 */
		WebApps_ListUsages(resourceGroupName: string, name: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<WebApps_ListUsagesReturn> {
			return this.http.get<WebApps_ListUsagesReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/usages&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the virtual networks the app (or deployment slot) is connected to.
		 * Description for Gets the virtual networks the app (or deployment slot) is connected to.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<WebApps_ListVnetConnectionsReturn>} OK
		 */
		WebApps_ListVnetConnections(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<Array<WebApps_ListVnetConnectionsReturn>> {
			return this.http.get<Array<WebApps_ListVnetConnectionsReturn>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a virtual network the app (or deployment slot) is connected to by name.
		 * Description for Gets a virtual network the app (or deployment slot) is connected to by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of the virtual network.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_GetVnetConnectionReturn} OK
		 */
		WebApps_GetVnetConnection(resourceGroupName: string, name: string, vnetName: string, subscriptionId: string, api_version: string): Observable<WebApps_GetVnetConnectionReturn> {
			return this.http.get<WebApps_GetVnetConnectionReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).
		 * Description for Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of an existing Virtual Network.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_CreateOrUpdateVnetConnectionPutBody} requestBody Properties of the Virtual Network connection. See example.
		 * @return {WebApps_CreateOrUpdateVnetConnectionReturn} OK
		 */
		WebApps_CreateOrUpdateVnetConnection(resourceGroupName: string, name: string, vnetName: string, subscriptionId: string, api_version: string, requestBody: WebApps_CreateOrUpdateVnetConnectionPutBody): Observable<WebApps_CreateOrUpdateVnetConnectionReturn> {
			return this.http.put<WebApps_CreateOrUpdateVnetConnectionReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a connection from an app (or deployment slot to a named virtual network.
		 * Description for Deletes a connection from an app (or deployment slot to a named virtual network.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of the virtual network.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted virtual network.
		 */
		WebApps_DeleteVnetConnection(resourceGroupName: string, name: string, vnetName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).
		 * Description for Adds a Virtual Network connection to an app or slot (PUT) or updates the connection properties (PATCH).
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of an existing Virtual Network.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_UpdateVnetConnectionPatchBody} requestBody Properties of the Virtual Network connection. See example.
		 * @return {WebApps_UpdateVnetConnectionReturn} OK
		 */
		WebApps_UpdateVnetConnection(resourceGroupName: string, name: string, vnetName: string, subscriptionId: string, api_version: string, requestBody: WebApps_UpdateVnetConnectionPatchBody): Observable<WebApps_UpdateVnetConnectionReturn> {
			return this.http.patch<WebApps_UpdateVnetConnectionReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an app's Virtual Network gateway.
		 * Description for Gets an app's Virtual Network gateway.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} gatewayName Name of the gateway. Currently, the only supported string is "primary".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebApps_GetVnetConnectionGatewayReturn} OK.
		 */
		WebApps_GetVnetConnectionGateway(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, subscriptionId: string, api_version: string): Observable<WebApps_GetVnetConnectionGatewayReturn> {
			return this.http.get<WebApps_GetVnetConnectionGatewayReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
		 * Description for Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} gatewayName Name of the gateway. Currently, the only supported string is "primary".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_CreateOrUpdateVnetConnectionGatewayPutBody} requestBody The properties to update this gateway with.
		 * @return {WebApps_CreateOrUpdateVnetConnectionGatewayReturn} OK
		 */
		WebApps_CreateOrUpdateVnetConnectionGateway(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, subscriptionId: string, api_version: string, requestBody: WebApps_CreateOrUpdateVnetConnectionGatewayPutBody): Observable<WebApps_CreateOrUpdateVnetConnectionGatewayReturn> {
			return this.http.put<WebApps_CreateOrUpdateVnetConnectionGatewayReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
		 * Description for Adds a gateway to a connected Virtual Network (PUT) or updates it (PATCH).
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the app.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} gatewayName Name of the gateway. Currently, the only supported string is "primary".
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WebApps_UpdateVnetConnectionGatewayPatchBody} requestBody The properties to update this gateway with.
		 * @return {WebApps_UpdateVnetConnectionGatewayReturn} OK
		 */
		WebApps_UpdateVnetConnectionGateway(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, subscriptionId: string, api_version: string, requestBody: WebApps_UpdateVnetConnectionGatewayPatchBody): Observable<WebApps_UpdateVnetConnectionGatewayReturn> {
			return this.http.patch<WebApps_UpdateVnetConnectionGatewayReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List webjobs for an app, or a deployment slot.
		 * Description for List webjobs for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/webjobs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebJobCollection} OK
		 */
		WebApps_ListWebJobs(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WebJobCollection> {
			return this.http.get<WebJobCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/webjobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get webjob information for an app, or a deployment slot.
		 * Description for Get webjob information for an app, or a deployment slot.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/webjobs/{webJobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Site name.
		 * @param {string} webJobName Name of the web job.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WebJob} OK
		 */
		WebApps_GetWebJob(resourceGroupName: string, name: string, webJobName: string, subscriptionId: string, api_version: string): Observable<WebJob> {
			return this.http.get<WebJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/webjobs/' + (webJobName == null ? '' : encodeURIComponent(webJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export interface WebApps_ListReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		WebApps_ListReturnValue: Array<WebApps_ListReturnValue>;
	}
	export interface WebApps_ListReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListReturnFormGroup() {
		return new FormGroup<WebApps_ListReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListReturnValue {

		/** Managed service identity. */
		identity?: WebApps_ListReturnValueIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListReturnValueFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListReturnValueFormGroup() {
		return new FormGroup<WebApps_ListReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListReturnValueIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_ListReturnValueIdentityUserAssignedIdentities };
	}
	export interface WebApps_ListReturnValueIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_ListReturnValueIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_ListReturnValueIdentityFormGroup() {
		return new FormGroup<WebApps_ListReturnValueIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_ListReturnValueIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListReturnValueIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_ListReturnValueIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListReturnValueIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_ListReturnValueIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListByResourceGroupReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		WebApps_ListByResourceGroupReturnValue: Array<WebApps_ListByResourceGroupReturnValue>;
	}
	export interface WebApps_ListByResourceGroupReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListByResourceGroupReturnFormGroup() {
		return new FormGroup<WebApps_ListByResourceGroupReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListByResourceGroupReturnValue {

		/** Managed service identity. */
		identity?: WebApps_ListByResourceGroupReturnValueIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListByResourceGroupReturnValueFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListByResourceGroupReturnValueFormGroup() {
		return new FormGroup<WebApps_ListByResourceGroupReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListByResourceGroupReturnValueIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_ListByResourceGroupReturnValueIdentityUserAssignedIdentities };
	}
	export interface WebApps_ListByResourceGroupReturnValueIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_ListByResourceGroupReturnValueIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_ListByResourceGroupReturnValueIdentityFormGroup() {
		return new FormGroup<WebApps_ListByResourceGroupReturnValueIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_ListByResourceGroupReturnValueIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListByResourceGroupReturnValueIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_ListByResourceGroupReturnValueIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListByResourceGroupReturnValueIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_ListByResourceGroupReturnValueIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetReturn {

		/** Managed service identity. */
		identity?: WebApps_GetReturnIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_GetReturnFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_GetReturnFormGroup() {
		return new FormGroup<WebApps_GetReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetReturnIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_GetReturnIdentityUserAssignedIdentities };
	}
	export interface WebApps_GetReturnIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_GetReturnIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_GetReturnIdentityFormGroup() {
		return new FormGroup<WebApps_GetReturnIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_GetReturnIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetReturnIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_GetReturnIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_GetReturnIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_GetReturnIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdatePutBody {

		/** Managed service identity. */
		identity?: WebApps_CreateOrUpdatePutBodyIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdatePutBodyFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdatePutBodyFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdatePutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdatePutBodyIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_CreateOrUpdatePutBodyIdentityUserAssignedIdentities };
	}
	export interface WebApps_CreateOrUpdatePutBodyIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_CreateOrUpdatePutBodyIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdatePutBodyIdentityFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdatePutBodyIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_CreateOrUpdatePutBodyIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdatePutBodyIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_CreateOrUpdatePutBodyIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdatePutBodyIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdatePutBodyIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateReturn {

		/** Managed service identity. */
		identity?: WebApps_CreateOrUpdateReturnIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateReturnFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateReturnFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateReturnIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_CreateOrUpdateReturnIdentityUserAssignedIdentities };
	}
	export interface WebApps_CreateOrUpdateReturnIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_CreateOrUpdateReturnIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateReturnIdentityFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateReturnIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_CreateOrUpdateReturnIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateReturnIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_CreateOrUpdateReturnIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateReturnIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateReturnIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateReturn {

		/** Managed service identity. */
		identity?: WebApps_UpdateReturnIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateReturnFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateReturnFormGroup() {
		return new FormGroup<WebApps_UpdateReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateReturnIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_UpdateReturnIdentityUserAssignedIdentities };
	}
	export interface WebApps_UpdateReturnIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_UpdateReturnIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_UpdateReturnIdentityFormGroup() {
		return new FormGroup<WebApps_UpdateReturnIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_UpdateReturnIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateReturnIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_UpdateReturnIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_UpdateReturnIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_UpdateReturnIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListPublishingCredentialsReturn {

		/** User resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListPublishingCredentialsReturnFormProperties {

		/** User resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListPublishingCredentialsReturnFormGroup() {
		return new FormGroup<WebApps_ListPublishingCredentialsReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateSitePushSettingsPutBody {

		/** PushSettings resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateSitePushSettingsPutBodyFormProperties {

		/** PushSettings resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateSitePushSettingsPutBodyFormGroup() {
		return new FormGroup<WebApps_UpdateSitePushSettingsPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateSitePushSettingsReturn {

		/** PushSettings resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateSitePushSettingsReturnFormProperties {

		/** PushSettings resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateSitePushSettingsReturnFormGroup() {
		return new FormGroup<WebApps_UpdateSitePushSettingsReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListSitePushSettingsReturn {

		/** PushSettings resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListSitePushSettingsReturnFormProperties {

		/** PushSettings resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListSitePushSettingsReturnFormGroup() {
		return new FormGroup<WebApps_ListSitePushSettingsReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListDomainOwnershipIdentifiersReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		WebApps_ListDomainOwnershipIdentifiersReturnValue: Array<WebApps_ListDomainOwnershipIdentifiersReturnValue>;
	}
	export interface WebApps_ListDomainOwnershipIdentifiersReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListDomainOwnershipIdentifiersReturnFormGroup() {
		return new FormGroup<WebApps_ListDomainOwnershipIdentifiersReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListDomainOwnershipIdentifiersReturnValue {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListDomainOwnershipIdentifiersReturnValueFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListDomainOwnershipIdentifiersReturnValueFormGroup() {
		return new FormGroup<WebApps_ListDomainOwnershipIdentifiersReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetDomainOwnershipIdentifierReturn {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_GetDomainOwnershipIdentifierReturnFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_GetDomainOwnershipIdentifierReturnFormGroup() {
		return new FormGroup<WebApps_GetDomainOwnershipIdentifierReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateDomainOwnershipIdentifierPutBody {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateDomainOwnershipIdentifierPutBodyFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateDomainOwnershipIdentifierPutBodyFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateDomainOwnershipIdentifierPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateDomainOwnershipIdentifierReturn {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateDomainOwnershipIdentifierReturnFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateDomainOwnershipIdentifierReturnFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateDomainOwnershipIdentifierReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateDomainOwnershipIdentifierPatchBody {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateDomainOwnershipIdentifierPatchBodyFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateDomainOwnershipIdentifierPatchBodyFormGroup() {
		return new FormGroup<WebApps_UpdateDomainOwnershipIdentifierPatchBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateDomainOwnershipIdentifierReturn {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateDomainOwnershipIdentifierReturnFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateDomainOwnershipIdentifierReturnFormGroup() {
		return new FormGroup<WebApps_UpdateDomainOwnershipIdentifierReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetHybridConnectionReturn {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_GetHybridConnectionReturnFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_GetHybridConnectionReturnFormGroup() {
		return new FormGroup<WebApps_GetHybridConnectionReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateHybridConnectionPutBody {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateHybridConnectionPutBodyFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateHybridConnectionPutBodyFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateHybridConnectionPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateHybridConnectionReturn {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateHybridConnectionReturnFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateHybridConnectionReturnFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateHybridConnectionReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateHybridConnectionPatchBody {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateHybridConnectionPatchBodyFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateHybridConnectionPatchBodyFormGroup() {
		return new FormGroup<WebApps_UpdateHybridConnectionPatchBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateHybridConnectionReturn {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateHybridConnectionReturnFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateHybridConnectionReturnFormGroup() {
		return new FormGroup<WebApps_UpdateHybridConnectionReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListHybridConnectionsReturn {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListHybridConnectionsReturnFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListHybridConnectionsReturnFormGroup() {
		return new FormGroup<WebApps_ListHybridConnectionsReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_MigrateMySqlReturn {

		/** Time when operation has started. */
		createdTime?: Date | null;

		/** Any errors associate with the operation. */
		WebApps_MigrateMySqlReturnErrors?: Array<WebApps_MigrateMySqlReturnErrors>;

		/** Time when operation will expire. */
		expirationTime?: Date | null;

		/** Applicable only for stamp operation ids. */
		geoMasterOperationId?: string | null;

		/** Operation ID. */
		id?: string | null;

		/** Time when operation has been updated. */
		modifiedTime?: Date | null;

		/** Operation name. */
		name?: string | null;

		/** The current status of the operation. */
		status?: WebApps_MigrateMySqlReturnStatus | null;
	}
	export interface WebApps_MigrateMySqlReturnFormProperties {

		/** Time when operation has started. */
		createdTime: FormControl<Date | null | undefined>,

		/** Time when operation will expire. */
		expirationTime: FormControl<Date | null | undefined>,

		/** Applicable only for stamp operation ids. */
		geoMasterOperationId: FormControl<string | null | undefined>,

		/** Operation ID. */
		id: FormControl<string | null | undefined>,

		/** Time when operation has been updated. */
		modifiedTime: FormControl<Date | null | undefined>,

		/** Operation name. */
		name: FormControl<string | null | undefined>,

		/** The current status of the operation. */
		status: FormControl<WebApps_MigrateMySqlReturnStatus | null | undefined>,
	}
	export function CreateWebApps_MigrateMySqlReturnFormGroup() {
		return new FormGroup<WebApps_MigrateMySqlReturnFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			geoMasterOperationId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modifiedTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WebApps_MigrateMySqlReturnStatus | null | undefined>(undefined),
		});

	}

	export interface WebApps_MigrateMySqlReturnErrors {

		/** Basic error code. */
		code?: string | null;

		/** Type of error. */
		extendedCode?: string | null;

		/** Inner errors. */
		innerErrors?: Array<ErrorEntity>;

		/** Any details of the error. */
		message?: string | null;

		/** Message template. */
		messageTemplate?: string | null;

		/** Parameters for the template. */
		parameters?: Array<string>;
	}
	export interface WebApps_MigrateMySqlReturnErrorsFormProperties {

		/** Basic error code. */
		code: FormControl<string | null | undefined>,

		/** Type of error. */
		extendedCode: FormControl<string | null | undefined>,

		/** Any details of the error. */
		message: FormControl<string | null | undefined>,

		/** Message template. */
		messageTemplate: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_MigrateMySqlReturnErrorsFormGroup() {
		return new FormGroup<WebApps_MigrateMySqlReturnErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			extendedCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WebApps_MigrateMySqlReturnStatus { InProgress = 0, Failed = 1, Succeeded = 2, TimedOut = 3, Created = 4 }

	export interface WebApps_ListSlotsReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		WebApps_ListSlotsReturnValue: Array<WebApps_ListSlotsReturnValue>;
	}
	export interface WebApps_ListSlotsReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListSlotsReturnFormGroup() {
		return new FormGroup<WebApps_ListSlotsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListSlotsReturnValue {

		/** Managed service identity. */
		identity?: WebApps_ListSlotsReturnValueIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListSlotsReturnValueFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListSlotsReturnValueFormGroup() {
		return new FormGroup<WebApps_ListSlotsReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListSlotsReturnValueIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_ListSlotsReturnValueIdentityUserAssignedIdentities };
	}
	export interface WebApps_ListSlotsReturnValueIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_ListSlotsReturnValueIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_ListSlotsReturnValueIdentityFormGroup() {
		return new FormGroup<WebApps_ListSlotsReturnValueIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_ListSlotsReturnValueIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListSlotsReturnValueIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_ListSlotsReturnValueIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListSlotsReturnValueIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_ListSlotsReturnValueIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetSlotReturn {

		/** Managed service identity. */
		identity?: WebApps_GetSlotReturnIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_GetSlotReturnFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_GetSlotReturnFormGroup() {
		return new FormGroup<WebApps_GetSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetSlotReturnIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_GetSlotReturnIdentityUserAssignedIdentities };
	}
	export interface WebApps_GetSlotReturnIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_GetSlotReturnIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_GetSlotReturnIdentityFormGroup() {
		return new FormGroup<WebApps_GetSlotReturnIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_GetSlotReturnIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetSlotReturnIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_GetSlotReturnIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_GetSlotReturnIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_GetSlotReturnIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateSlotPutBody {

		/** Managed service identity. */
		identity?: WebApps_CreateOrUpdateSlotPutBodyIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateSlotPutBodyFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateSlotPutBodyFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateSlotPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateSlotPutBodyIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_CreateOrUpdateSlotPutBodyIdentityUserAssignedIdentities };
	}
	export interface WebApps_CreateOrUpdateSlotPutBodyIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_CreateOrUpdateSlotPutBodyIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateSlotPutBodyIdentityFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateSlotPutBodyIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_CreateOrUpdateSlotPutBodyIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateSlotPutBodyIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_CreateOrUpdateSlotPutBodyIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateSlotPutBodyIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateSlotPutBodyIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateSlotReturn {

		/** Managed service identity. */
		identity?: WebApps_CreateOrUpdateSlotReturnIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateSlotReturnFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateSlotReturnFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateSlotReturnIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_CreateOrUpdateSlotReturnIdentityUserAssignedIdentities };
	}
	export interface WebApps_CreateOrUpdateSlotReturnIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_CreateOrUpdateSlotReturnIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateSlotReturnIdentityFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateSlotReturnIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_CreateOrUpdateSlotReturnIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateSlotReturnIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_CreateOrUpdateSlotReturnIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateSlotReturnIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateSlotReturnIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateSlotReturn {

		/** Managed service identity. */
		identity?: WebApps_UpdateSlotReturnIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateSlotReturnFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateSlotReturnFormGroup() {
		return new FormGroup<WebApps_UpdateSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateSlotReturnIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ApiKVReferenceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: WebApps_UpdateSlotReturnIdentityUserAssignedIdentities };
	}
	export interface WebApps_UpdateSlotReturnIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ApiKVReferenceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: WebApps_UpdateSlotReturnIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateWebApps_UpdateSlotReturnIdentityFormGroup() {
		return new FormGroup<WebApps_UpdateSlotReturnIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiKVReferenceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: WebApps_UpdateSlotReturnIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateSlotReturnIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface WebApps_UpdateSlotReturnIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_UpdateSlotReturnIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<WebApps_UpdateSlotReturnIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListPublishingCredentialsSlotReturn {

		/** User resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListPublishingCredentialsSlotReturnFormProperties {

		/** User resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListPublishingCredentialsSlotReturnFormGroup() {
		return new FormGroup<WebApps_ListPublishingCredentialsSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateSitePushSettingsSlotPutBody {

		/** PushSettings resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateSitePushSettingsSlotPutBodyFormProperties {

		/** PushSettings resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateSitePushSettingsSlotPutBodyFormGroup() {
		return new FormGroup<WebApps_UpdateSitePushSettingsSlotPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateSitePushSettingsSlotReturn {

		/** PushSettings resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateSitePushSettingsSlotReturnFormProperties {

		/** PushSettings resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateSitePushSettingsSlotReturnFormGroup() {
		return new FormGroup<WebApps_UpdateSitePushSettingsSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListSitePushSettingsSlotReturn {

		/** PushSettings resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListSitePushSettingsSlotReturnFormProperties {

		/** PushSettings resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListSitePushSettingsSlotReturnFormGroup() {
		return new FormGroup<WebApps_ListSitePushSettingsSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListDomainOwnershipIdentifiersSlotReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		WebApps_ListDomainOwnershipIdentifiersSlotReturnValue: Array<WebApps_ListDomainOwnershipIdentifiersSlotReturnValue>;
	}
	export interface WebApps_ListDomainOwnershipIdentifiersSlotReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListDomainOwnershipIdentifiersSlotReturnFormGroup() {
		return new FormGroup<WebApps_ListDomainOwnershipIdentifiersSlotReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListDomainOwnershipIdentifiersSlotReturnValue {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListDomainOwnershipIdentifiersSlotReturnValueFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListDomainOwnershipIdentifiersSlotReturnValueFormGroup() {
		return new FormGroup<WebApps_ListDomainOwnershipIdentifiersSlotReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetDomainOwnershipIdentifierSlotReturn {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_GetDomainOwnershipIdentifierSlotReturnFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_GetDomainOwnershipIdentifierSlotReturnFormGroup() {
		return new FormGroup<WebApps_GetDomainOwnershipIdentifierSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotPutBody {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotPutBodyFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateDomainOwnershipIdentifierSlotPutBodyFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotReturn {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotReturnFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateDomainOwnershipIdentifierSlotReturnFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateDomainOwnershipIdentifierSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateDomainOwnershipIdentifierSlotPatchBody {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateDomainOwnershipIdentifierSlotPatchBodyFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateDomainOwnershipIdentifierSlotPatchBodyFormGroup() {
		return new FormGroup<WebApps_UpdateDomainOwnershipIdentifierSlotPatchBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateDomainOwnershipIdentifierSlotReturn {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateDomainOwnershipIdentifierSlotReturnFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateDomainOwnershipIdentifierSlotReturnFormGroup() {
		return new FormGroup<WebApps_UpdateDomainOwnershipIdentifierSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetHybridConnectionSlotReturn {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_GetHybridConnectionSlotReturnFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_GetHybridConnectionSlotReturnFormGroup() {
		return new FormGroup<WebApps_GetHybridConnectionSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateHybridConnectionSlotPutBody {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateHybridConnectionSlotPutBodyFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateHybridConnectionSlotPutBodyFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateHybridConnectionSlotPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateHybridConnectionSlotReturn {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateHybridConnectionSlotReturnFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateHybridConnectionSlotReturnFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateHybridConnectionSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateHybridConnectionSlotPatchBody {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateHybridConnectionSlotPatchBodyFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateHybridConnectionSlotPatchBodyFormGroup() {
		return new FormGroup<WebApps_UpdateHybridConnectionSlotPatchBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateHybridConnectionSlotReturn {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateHybridConnectionSlotReturnFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateHybridConnectionSlotReturnFormGroup() {
		return new FormGroup<WebApps_UpdateHybridConnectionSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListHybridConnectionsSlotReturn {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListHybridConnectionsSlotReturnFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListHybridConnectionsSlotReturnFormGroup() {
		return new FormGroup<WebApps_ListHybridConnectionsSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListUsagesSlotReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		WebApps_ListUsagesSlotReturnValue: Array<WebApps_ListUsagesSlotReturnValue>;
	}
	export interface WebApps_ListUsagesSlotReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListUsagesSlotReturnFormGroup() {
		return new FormGroup<WebApps_ListUsagesSlotReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListUsagesSlotReturnValue {

		/** The current value of the resource counter. */
		currentValue?: number | null;

		/** The resource limit. */
		limit?: number | null;

		/** Localizable string object containing the name and a localized value. */
		name?: WebApps_ListUsagesSlotReturnValueName;

		/** Next reset time for the resource counter. */
		nextResetTime?: Date | null;

		/** Units of measurement for the quota resource. */
		unit?: string | null;
	}
	export interface WebApps_ListUsagesSlotReturnValueFormProperties {

		/** The current value of the resource counter. */
		currentValue: FormControl<number | null | undefined>,

		/** The resource limit. */
		limit: FormControl<number | null | undefined>,

		/** Next reset time for the resource counter. */
		nextResetTime: FormControl<Date | null | undefined>,

		/** Units of measurement for the quota resource. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListUsagesSlotReturnValueFormGroup() {
		return new FormGroup<WebApps_ListUsagesSlotReturnValueFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			nextResetTime: new FormControl<Date | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListUsagesSlotReturnValueName {

		/** Localized name. */
		localizedValue?: string | null;

		/** Non-localized name. */
		value?: string | null;
	}
	export interface WebApps_ListUsagesSlotReturnValueNameFormProperties {

		/** Localized name. */
		localizedValue: FormControl<string | null | undefined>,

		/** Non-localized name. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListUsagesSlotReturnValueNameFormGroup() {
		return new FormGroup<WebApps_ListUsagesSlotReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListVnetConnectionsSlotReturn {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListVnetConnectionsSlotReturnFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListVnetConnectionsSlotReturnFormGroup() {
		return new FormGroup<WebApps_ListVnetConnectionsSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetVnetConnectionSlotReturn {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_GetVnetConnectionSlotReturnFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_GetVnetConnectionSlotReturnFormGroup() {
		return new FormGroup<WebApps_GetVnetConnectionSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateVnetConnectionSlotPutBody {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateVnetConnectionSlotPutBodyFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateVnetConnectionSlotPutBodyFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateVnetConnectionSlotPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateVnetConnectionSlotReturn {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateVnetConnectionSlotReturnFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateVnetConnectionSlotReturnFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateVnetConnectionSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateVnetConnectionSlotPatchBody {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateVnetConnectionSlotPatchBodyFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateVnetConnectionSlotPatchBodyFormGroup() {
		return new FormGroup<WebApps_UpdateVnetConnectionSlotPatchBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateVnetConnectionSlotReturn {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateVnetConnectionSlotReturnFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateVnetConnectionSlotReturnFormGroup() {
		return new FormGroup<WebApps_UpdateVnetConnectionSlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetVnetConnectionGatewaySlotReturn {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface WebApps_GetVnetConnectionGatewaySlotReturnFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_GetVnetConnectionGatewaySlotReturnFormGroup() {
		return new FormGroup<WebApps_GetVnetConnectionGatewaySlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateVnetConnectionGatewaySlotPutBody {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateVnetConnectionGatewaySlotPutBodyFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateVnetConnectionGatewaySlotPutBodyFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateVnetConnectionGatewaySlotPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateVnetConnectionGatewaySlotReturn {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateVnetConnectionGatewaySlotReturnFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateVnetConnectionGatewaySlotReturnFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateVnetConnectionGatewaySlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateVnetConnectionGatewaySlotPatchBody {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateVnetConnectionGatewaySlotPatchBodyFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateVnetConnectionGatewaySlotPatchBodyFormGroup() {
		return new FormGroup<WebApps_UpdateVnetConnectionGatewaySlotPatchBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateVnetConnectionGatewaySlotReturn {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateVnetConnectionGatewaySlotReturnFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateVnetConnectionGatewaySlotReturnFormGroup() {
		return new FormGroup<WebApps_UpdateVnetConnectionGatewaySlotReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListUsagesReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		WebApps_ListUsagesReturnValue: Array<WebApps_ListUsagesReturnValue>;
	}
	export interface WebApps_ListUsagesReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListUsagesReturnFormGroup() {
		return new FormGroup<WebApps_ListUsagesReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListUsagesReturnValue {

		/** The current value of the resource counter. */
		currentValue?: number | null;

		/** The resource limit. */
		limit?: number | null;

		/** Localizable string object containing the name and a localized value. */
		name?: WebApps_ListUsagesReturnValueName;

		/** Next reset time for the resource counter. */
		nextResetTime?: Date | null;

		/** Units of measurement for the quota resource. */
		unit?: string | null;
	}
	export interface WebApps_ListUsagesReturnValueFormProperties {

		/** The current value of the resource counter. */
		currentValue: FormControl<number | null | undefined>,

		/** The resource limit. */
		limit: FormControl<number | null | undefined>,

		/** Next reset time for the resource counter. */
		nextResetTime: FormControl<Date | null | undefined>,

		/** Units of measurement for the quota resource. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListUsagesReturnValueFormGroup() {
		return new FormGroup<WebApps_ListUsagesReturnValueFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			nextResetTime: new FormControl<Date | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListUsagesReturnValueName {

		/** Localized name. */
		localizedValue?: string | null;

		/** Non-localized name. */
		value?: string | null;
	}
	export interface WebApps_ListUsagesReturnValueNameFormProperties {

		/** Localized name. */
		localizedValue: FormControl<string | null | undefined>,

		/** Non-localized name. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWebApps_ListUsagesReturnValueNameFormGroup() {
		return new FormGroup<WebApps_ListUsagesReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebApps_ListVnetConnectionsReturn {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_ListVnetConnectionsReturnFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_ListVnetConnectionsReturnFormGroup() {
		return new FormGroup<WebApps_ListVnetConnectionsReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetVnetConnectionReturn {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_GetVnetConnectionReturnFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_GetVnetConnectionReturnFormGroup() {
		return new FormGroup<WebApps_GetVnetConnectionReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateVnetConnectionPutBody {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateVnetConnectionPutBodyFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateVnetConnectionPutBodyFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateVnetConnectionPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateVnetConnectionReturn {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateVnetConnectionReturnFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateVnetConnectionReturnFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateVnetConnectionReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateVnetConnectionPatchBody {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateVnetConnectionPatchBodyFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateVnetConnectionPatchBodyFormGroup() {
		return new FormGroup<WebApps_UpdateVnetConnectionPatchBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateVnetConnectionReturn {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateVnetConnectionReturnFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateVnetConnectionReturnFormGroup() {
		return new FormGroup<WebApps_UpdateVnetConnectionReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_GetVnetConnectionGatewayReturn {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface WebApps_GetVnetConnectionGatewayReturnFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_GetVnetConnectionGatewayReturnFormGroup() {
		return new FormGroup<WebApps_GetVnetConnectionGatewayReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateVnetConnectionGatewayPutBody {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateVnetConnectionGatewayPutBodyFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateVnetConnectionGatewayPutBodyFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateVnetConnectionGatewayPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_CreateOrUpdateVnetConnectionGatewayReturn {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface WebApps_CreateOrUpdateVnetConnectionGatewayReturnFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_CreateOrUpdateVnetConnectionGatewayReturnFormGroup() {
		return new FormGroup<WebApps_CreateOrUpdateVnetConnectionGatewayReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateVnetConnectionGatewayPatchBody {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateVnetConnectionGatewayPatchBodyFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateVnetConnectionGatewayPatchBodyFormGroup() {
		return new FormGroup<WebApps_UpdateVnetConnectionGatewayPatchBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface WebApps_UpdateVnetConnectionGatewayReturn {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface WebApps_UpdateVnetConnectionGatewayReturnFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWebApps_UpdateVnetConnectionGatewayReturnFormGroup() {
		return new FormGroup<WebApps_UpdateVnetConnectionGatewayReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

}

