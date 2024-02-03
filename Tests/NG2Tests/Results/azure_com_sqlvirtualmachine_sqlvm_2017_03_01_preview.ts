import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Additional SQL Server feature settings. */
	export interface AdditionalFeaturesServerConfigurations {

		/** Enable or disable R services (SQL 2016 onwards). */
		isRServicesEnabled?: boolean | null;
	}

	/** Additional SQL Server feature settings. */
	export interface AdditionalFeaturesServerConfigurationsFormProperties {

		/** Enable or disable R services (SQL 2016 onwards). */
		isRServicesEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdditionalFeaturesServerConfigurationsFormGroup() {
		return new FormGroup<AdditionalFeaturesServerConfigurationsFormProperties>({
			isRServicesEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configure backups for databases in your SQL virtual machine. */
	export interface AutoBackupSettings {

		/** Backup schedule type. */
		backupScheduleType?: AutoBackupSettingsBackupScheduleType | null;

		/** Include or exclude system databases from auto backup. */
		backupSystemDbs?: boolean | null;

		/** Enable or disable autobackup on SQL virtual machine. */
		enable?: boolean | null;

		/** Enable or disable encryption for backup on SQL virtual machine. */
		enableEncryption?: boolean | null;

		/** Frequency of full backups. In both cases, full backups begin during the next scheduled time window. */
		fullBackupFrequency?: AutoBackupSettingsFullBackupFrequency | null;

		/** Start time of a given day during which full backups can take place. 0-23 hours. */
		fullBackupStartTime?: number | null;

		/** Duration of the time window of a given day during which full backups can take place. 1-23 hours. */
		fullBackupWindowHours?: number | null;

		/** Frequency of log backups. 5-60 minutes. */
		logBackupFrequency?: number | null;

		/** Password for encryption on backup. */
		password?: string | null;

		/** Retention period of backup: 1-30 days. */
		retentionPeriod?: number | null;

		/** Storage account key where backup will be taken to. */
		storageAccessKey?: string | null;

		/** Storage account url where backup will be taken to. */
		storageAccountUrl?: string | null;
	}

	/** Configure backups for databases in your SQL virtual machine. */
	export interface AutoBackupSettingsFormProperties {

		/** Backup schedule type. */
		backupScheduleType: FormControl<AutoBackupSettingsBackupScheduleType | null | undefined>,

		/** Include or exclude system databases from auto backup. */
		backupSystemDbs: FormControl<boolean | null | undefined>,

		/** Enable or disable autobackup on SQL virtual machine. */
		enable: FormControl<boolean | null | undefined>,

		/** Enable or disable encryption for backup on SQL virtual machine. */
		enableEncryption: FormControl<boolean | null | undefined>,

		/** Frequency of full backups. In both cases, full backups begin during the next scheduled time window. */
		fullBackupFrequency: FormControl<AutoBackupSettingsFullBackupFrequency | null | undefined>,

		/** Start time of a given day during which full backups can take place. 0-23 hours. */
		fullBackupStartTime: FormControl<number | null | undefined>,

		/** Duration of the time window of a given day during which full backups can take place. 1-23 hours. */
		fullBackupWindowHours: FormControl<number | null | undefined>,

		/** Frequency of log backups. 5-60 minutes. */
		logBackupFrequency: FormControl<number | null | undefined>,

		/** Password for encryption on backup. */
		password: FormControl<string | null | undefined>,

		/** Retention period of backup: 1-30 days. */
		retentionPeriod: FormControl<number | null | undefined>,

		/** Storage account key where backup will be taken to. */
		storageAccessKey: FormControl<string | null | undefined>,

		/** Storage account url where backup will be taken to. */
		storageAccountUrl: FormControl<string | null | undefined>,
	}
	export function CreateAutoBackupSettingsFormGroup() {
		return new FormGroup<AutoBackupSettingsFormProperties>({
			backupScheduleType: new FormControl<AutoBackupSettingsBackupScheduleType | null | undefined>(undefined),
			backupSystemDbs: new FormControl<boolean | null | undefined>(undefined),
			enable: new FormControl<boolean | null | undefined>(undefined),
			enableEncryption: new FormControl<boolean | null | undefined>(undefined),
			fullBackupFrequency: new FormControl<AutoBackupSettingsFullBackupFrequency | null | undefined>(undefined),
			fullBackupStartTime: new FormControl<number | null | undefined>(undefined),
			fullBackupWindowHours: new FormControl<number | null | undefined>(undefined),
			logBackupFrequency: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			retentionPeriod: new FormControl<number | null | undefined>(undefined),
			storageAccessKey: new FormControl<string | null | undefined>(undefined),
			storageAccountUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AutoBackupSettingsBackupScheduleType { Manual = 'Manual', Automated = 'Automated' }

	export enum AutoBackupSettingsFullBackupFrequency { Daily = 'Daily', Weekly = 'Weekly' }


	/** Set a patching window during which Windows and SQL patches will be applied. */
	export interface AutoPatchingSettings {

		/** Day of week to apply the patch on. */
		dayOfWeek?: AutoPatchingSettingsDayOfWeek | null;

		/** Enable or disable autopatching on SQL virtual machine. */
		enable?: boolean | null;

		/** Duration of patching. */
		maintenanceWindowDuration?: number | null;

		/** Hour of the day when patching is initiated. Local VM time. */
		maintenanceWindowStartingHour?: number | null;
	}

	/** Set a patching window during which Windows and SQL patches will be applied. */
	export interface AutoPatchingSettingsFormProperties {

		/** Day of week to apply the patch on. */
		dayOfWeek: FormControl<AutoPatchingSettingsDayOfWeek | null | undefined>,

		/** Enable or disable autopatching on SQL virtual machine. */
		enable: FormControl<boolean | null | undefined>,

		/** Duration of patching. */
		maintenanceWindowDuration: FormControl<number | null | undefined>,

		/** Hour of the day when patching is initiated. Local VM time. */
		maintenanceWindowStartingHour: FormControl<number | null | undefined>,
	}
	export function CreateAutoPatchingSettingsFormGroup() {
		return new FormGroup<AutoPatchingSettingsFormProperties>({
			dayOfWeek: new FormControl<AutoPatchingSettingsDayOfWeek | null | undefined>(undefined),
			enable: new FormControl<boolean | null | undefined>(undefined),
			maintenanceWindowDuration: new FormControl<number | null | undefined>(undefined),
			maintenanceWindowStartingHour: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AutoPatchingSettingsDayOfWeek { Monday = 'Monday', Tuesday = 'Tuesday', Wednesday = 'Wednesday', Thursday = 'Thursday', Friday = 'Friday', Saturday = 'Saturday', Sunday = 'Sunday' }


	/** A SQL Server availability group listener. */
	export interface AvailabilityGroupListener {

		/** The properties of an availability group listener. */
		properties?: AvailabilityGroupListenerProperties;
	}

	/** A SQL Server availability group listener. */
	export interface AvailabilityGroupListenerFormProperties {
	}
	export function CreateAvailabilityGroupListenerFormGroup() {
		return new FormGroup<AvailabilityGroupListenerFormProperties>({
		});

	}


	/** The properties of an availability group listener. */
	export interface AvailabilityGroupListenerProperties {

		/** Name of the availability group. */
		availabilityGroupName?: string | null;

		/** Create a default availability group if it does not exist. */
		createDefaultAvailabilityGroupIfNotExist?: boolean | null;

		/** List of load balancer configurations for an availability group listener. */
		loadBalancerConfigurations?: Array<LoadBalancerConfiguration>;

		/** Listener port. */
		port?: number | null;

		/** Provisioning state to track the async operation status. */
		provisioningState?: string | null;
	}

	/** The properties of an availability group listener. */
	export interface AvailabilityGroupListenerPropertiesFormProperties {

		/** Name of the availability group. */
		availabilityGroupName: FormControl<string | null | undefined>,

		/** Create a default availability group if it does not exist. */
		createDefaultAvailabilityGroupIfNotExist: FormControl<boolean | null | undefined>,

		/** Listener port. */
		port: FormControl<number | null | undefined>,

		/** Provisioning state to track the async operation status. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityGroupListenerPropertiesFormGroup() {
		return new FormGroup<AvailabilityGroupListenerPropertiesFormProperties>({
			availabilityGroupName: new FormControl<string | null | undefined>(undefined),
			createDefaultAvailabilityGroupIfNotExist: new FormControl<boolean | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A load balancer configuration for an availability group listener. */
	export interface LoadBalancerConfiguration {

		/** Resource id of the load balancer. */
		loadBalancerResourceId?: string | null;

		/** A private IP address bound to the availability group listener. */
		privateIpAddress?: PrivateIPAddress;

		/** Probe port. */
		probePort?: number | null;

		/** Resource id of the public IP. */
		publicIpAddressResourceId?: string | null;

		/** List of the SQL virtual machine instance resource id's that are enrolled into the availability group listener. */
		sqlVirtualMachineInstances?: Array<string>;
	}

	/** A load balancer configuration for an availability group listener. */
	export interface LoadBalancerConfigurationFormProperties {

		/** Resource id of the load balancer. */
		loadBalancerResourceId: FormControl<string | null | undefined>,

		/** Probe port. */
		probePort: FormControl<number | null | undefined>,

		/** Resource id of the public IP. */
		publicIpAddressResourceId: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerConfigurationFormGroup() {
		return new FormGroup<LoadBalancerConfigurationFormProperties>({
			loadBalancerResourceId: new FormControl<string | null | undefined>(undefined),
			probePort: new FormControl<number | null | undefined>(undefined),
			publicIpAddressResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A private IP address bound to the availability group listener. */
	export interface PrivateIPAddress {

		/** Private IP address bound to the availability group listener. */
		ipAddress?: string | null;

		/** Subnet used to include private IP. */
		subnetResourceId?: string | null;
	}

	/** A private IP address bound to the availability group listener. */
	export interface PrivateIPAddressFormProperties {

		/** Private IP address bound to the availability group listener. */
		ipAddress: FormControl<string | null | undefined>,

		/** Subnet used to include private IP. */
		subnetResourceId: FormControl<string | null | undefined>,
	}
	export function CreatePrivateIPAddressFormGroup() {
		return new FormGroup<PrivateIPAddressFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			subnetResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of availability group listeners. */
	export interface AvailabilityGroupListenerListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<AvailabilityGroupListener>;
	}

	/** A list of availability group listeners. */
	export interface AvailabilityGroupListenerListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityGroupListenerListResultFormGroup() {
		return new FormGroup<AvailabilityGroupListenerListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configure your SQL virtual machine to be able to connect to the Azure Key Vault service. */
	export interface KeyVaultCredentialSettings {

		/** Azure Key Vault url. */
		azureKeyVaultUrl?: string | null;

		/** Credential name. */
		credentialName?: string | null;

		/** Enable or disable key vault credential setting. */
		enable?: boolean | null;

		/** Service principal name to access key vault. */
		servicePrincipalName?: string | null;

		/** Service principal name secret to access key vault. */
		servicePrincipalSecret?: string | null;
	}

	/** Configure your SQL virtual machine to be able to connect to the Azure Key Vault service. */
	export interface KeyVaultCredentialSettingsFormProperties {

		/** Azure Key Vault url. */
		azureKeyVaultUrl: FormControl<string | null | undefined>,

		/** Credential name. */
		credentialName: FormControl<string | null | undefined>,

		/** Enable or disable key vault credential setting. */
		enable: FormControl<boolean | null | undefined>,

		/** Service principal name to access key vault. */
		servicePrincipalName: FormControl<string | null | undefined>,

		/** Service principal name secret to access key vault. */
		servicePrincipalSecret: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultCredentialSettingsFormGroup() {
		return new FormGroup<KeyVaultCredentialSettingsFormProperties>({
			azureKeyVaultUrl: new FormControl<string | null | undefined>(undefined),
			credentialName: new FormControl<string | null | undefined>(undefined),
			enable: new FormControl<boolean | null | undefined>(undefined),
			servicePrincipalName: new FormControl<string | null | undefined>(undefined),
			servicePrincipalSecret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SQL REST API operation definition. */
	export interface Operation {

		/** Display metadata associated with the operation. */
		display?: OperationDisplay;

		/** The name of the operation being performed on this particular object. */
		name?: string | null;

		/** The intended executor of the operation. */
		origin?: OperationOrigin | null;

		/** Additional descriptions for the operation. */
		properties?: {[id: string]: any };
	}

	/** SQL REST API operation definition. */
	export interface OperationFormProperties {

		/** The name of the operation being performed on this particular object. */
		name: FormControl<string | null | undefined>,

		/** The intended executor of the operation. */
		origin: FormControl<OperationOrigin | null | undefined>,

		/** Additional descriptions for the operation. */
		properties: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<OperationOrigin | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Display metadata associated with the operation. */
	export interface OperationDisplay {

		/** The localized friendly description for the operation. */
		description?: string | null;

		/** The localized friendly name for the operation. */
		operation?: string | null;

		/** The localized friendly form of the resource provider name. */
		provider?: string | null;

		/** The localized friendly form of the resource type related to this action/operation. */
		resource?: string | null;
	}

	/** Display metadata associated with the operation. */
	export interface OperationDisplayFormProperties {

		/** The localized friendly description for the operation. */
		description: FormControl<string | null | undefined>,

		/** The localized friendly name for the operation. */
		operation: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource provider name. */
		provider: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource type related to this action/operation. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationOrigin { user = 'user', system = 'system' }


	/** Result of the request to list SQL operations. */
	export interface OperationListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<Operation>;
	}

	/** Result of the request to list SQL operations. */
	export interface OperationListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM proxy resource. */
	export interface ProxyResource {
	}

	/** ARM proxy resource. */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** ARM resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Active Directory identity configuration for a resource. */
	export interface ResourceIdentity {

		/** The Azure Active Directory principal id. */
		principalId?: string | null;

		/** The Azure Active Directory tenant id. */
		tenantId?: string | null;

		/** The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. */
		type?: ResourceIdentityType | null;
	}

	/** Azure Active Directory identity configuration for a resource. */
	export interface ResourceIdentityFormProperties {

		/** The Azure Active Directory principal id. */
		principalId: FormControl<string | null | undefined>,

		/** The Azure Active Directory tenant id. */
		tenantId: FormControl<string | null | undefined>,

		/** The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. */
		type: FormControl<ResourceIdentityType | null | undefined>,
	}
	export function CreateResourceIdentityFormGroup() {
		return new FormGroup<ResourceIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ResourceIdentityType | null | undefined>(undefined),
		});

	}

	export enum ResourceIdentityType { SystemAssigned = 'SystemAssigned' }


	/** Set disk storage settings for SQL Server. */
	export interface SQLStorageSettings {

		/** SQL Server default file path */
		defaultFilePath?: string | null;

		/** Logical Unit Numbers for the disks. */
		luns?: Array<number>;
	}

	/** Set disk storage settings for SQL Server. */
	export interface SQLStorageSettingsFormProperties {

		/** SQL Server default file path */
		defaultFilePath: FormControl<string | null | undefined>,
	}
	export function CreateSQLStorageSettingsFormGroup() {
		return new FormGroup<SQLStorageSettingsFormProperties>({
			defaultFilePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set the connectivity, storage and workload settings. */
	export interface ServerConfigurationsManagementSettings {

		/** Additional SQL Server feature settings. */
		additionalFeaturesServerConfigurations?: AdditionalFeaturesServerConfigurations;

		/** Set the access level and network port settings for SQL Server. */
		sqlConnectivityUpdateSettings?: SqlConnectivityUpdateSettings;

		/** Set disk storage settings for SQL Server. */
		sqlStorageUpdateSettings?: SqlStorageUpdateSettings;

		/** Set workload type to optimize storage for SQL Server. */
		sqlWorkloadTypeUpdateSettings?: SqlWorkloadTypeUpdateSettings;
	}

	/** Set the connectivity, storage and workload settings. */
	export interface ServerConfigurationsManagementSettingsFormProperties {
	}
	export function CreateServerConfigurationsManagementSettingsFormGroup() {
		return new FormGroup<ServerConfigurationsManagementSettingsFormProperties>({
		});

	}


	/** Set the access level and network port settings for SQL Server. */
	export interface SqlConnectivityUpdateSettings {

		/** SQL Server connectivity option. */
		connectivityType?: SqlConnectivityUpdateSettingsConnectivityType | null;

		/** SQL Server port. */
		port?: number | null;

		/** SQL Server sysadmin login password. */
		sqlAuthUpdatePassword?: string | null;

		/** SQL Server sysadmin login to create. */
		sqlAuthUpdateUserName?: string | null;
	}

	/** Set the access level and network port settings for SQL Server. */
	export interface SqlConnectivityUpdateSettingsFormProperties {

		/** SQL Server connectivity option. */
		connectivityType: FormControl<SqlConnectivityUpdateSettingsConnectivityType | null | undefined>,

		/** SQL Server port. */
		port: FormControl<number | null | undefined>,

		/** SQL Server sysadmin login password. */
		sqlAuthUpdatePassword: FormControl<string | null | undefined>,

		/** SQL Server sysadmin login to create. */
		sqlAuthUpdateUserName: FormControl<string | null | undefined>,
	}
	export function CreateSqlConnectivityUpdateSettingsFormGroup() {
		return new FormGroup<SqlConnectivityUpdateSettingsFormProperties>({
			connectivityType: new FormControl<SqlConnectivityUpdateSettingsConnectivityType | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			sqlAuthUpdatePassword: new FormControl<string | null | undefined>(undefined),
			sqlAuthUpdateUserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SqlConnectivityUpdateSettingsConnectivityType { LOCAL = 'LOCAL', PRIVATE = 'PRIVATE', PUBLIC = 'PUBLIC' }


	/** Set disk storage settings for SQL Server. */
	export interface SqlStorageUpdateSettings {

		/** Disk configuration to apply to SQL Server. */
		diskConfigurationType?: SqlStorageUpdateSettingsDiskConfigurationType | null;

		/** Virtual machine disk count. */
		diskCount?: number | null;

		/** Device id of the first disk to be updated. */
		startingDeviceId?: number | null;
	}

	/** Set disk storage settings for SQL Server. */
	export interface SqlStorageUpdateSettingsFormProperties {

		/** Disk configuration to apply to SQL Server. */
		diskConfigurationType: FormControl<SqlStorageUpdateSettingsDiskConfigurationType | null | undefined>,

		/** Virtual machine disk count. */
		diskCount: FormControl<number | null | undefined>,

		/** Device id of the first disk to be updated. */
		startingDeviceId: FormControl<number | null | undefined>,
	}
	export function CreateSqlStorageUpdateSettingsFormGroup() {
		return new FormGroup<SqlStorageUpdateSettingsFormProperties>({
			diskConfigurationType: new FormControl<SqlStorageUpdateSettingsDiskConfigurationType | null | undefined>(undefined),
			diskCount: new FormControl<number | null | undefined>(undefined),
			startingDeviceId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SqlStorageUpdateSettingsDiskConfigurationType { NEW = 'NEW', EXTEND = 'EXTEND', ADD = 'ADD' }


	/** Set workload type to optimize storage for SQL Server. */
	export interface SqlWorkloadTypeUpdateSettings {

		/** SQL Server workload type. */
		sqlWorkloadType?: SqlWorkloadTypeUpdateSettingsSqlWorkloadType | null;
	}

	/** Set workload type to optimize storage for SQL Server. */
	export interface SqlWorkloadTypeUpdateSettingsFormProperties {

		/** SQL Server workload type. */
		sqlWorkloadType: FormControl<SqlWorkloadTypeUpdateSettingsSqlWorkloadType | null | undefined>,
	}
	export function CreateSqlWorkloadTypeUpdateSettingsFormGroup() {
		return new FormGroup<SqlWorkloadTypeUpdateSettingsFormProperties>({
			sqlWorkloadType: new FormControl<SqlWorkloadTypeUpdateSettingsSqlWorkloadType | null | undefined>(undefined),
		});

	}

	export enum SqlWorkloadTypeUpdateSettingsSqlWorkloadType { GENERAL = 'GENERAL', OLTP = 'OLTP', DW = 'DW' }


	/** A SQL virtual machine. */
	export interface SqlVirtualMachine {

		/** Azure Active Directory identity configuration for a resource. */
		identity?: ResourceIdentity;

		/** The SQL virtual machine properties. */
		properties?: SqlVirtualMachineProperties;
	}

	/** A SQL virtual machine. */
	export interface SqlVirtualMachineFormProperties {
	}
	export function CreateSqlVirtualMachineFormGroup() {
		return new FormGroup<SqlVirtualMachineFormProperties>({
		});

	}


	/** The SQL virtual machine properties. */
	export interface SqlVirtualMachineProperties {

		/** Configure backups for databases in your SQL virtual machine. */
		autoBackupSettings?: AutoBackupSettings;

		/** Set a patching window during which Windows and SQL patches will be applied. */
		autoPatchingSettings?: AutoPatchingSettings;

		/** Configure your SQL virtual machine to be able to connect to the Azure Key Vault service. */
		keyVaultCredentialSettings?: KeyVaultCredentialSettings;

		/** Provisioning state to track the async operation status. */
		provisioningState?: string | null;

		/** Set the connectivity, storage and workload settings. */
		serverConfigurationsManagementSettings?: ServerConfigurationsManagementSettings;

		/** SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016. */
		sqlImageOffer?: string | null;

		/** SQL Server edition type. */
		sqlImageSku?: SqlVirtualMachinePropertiesSqlImageSku | null;

		/** SQL Server Management type. */
		sqlManagement?: SqlVirtualMachinePropertiesSqlManagement | null;

		/** SQL Server license type. */
		sqlServerLicenseType?: SqlVirtualMachinePropertiesSqlServerLicenseType | null;

		/** ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of. */
		sqlVirtualMachineGroupResourceId?: string | null;

		/** Storage Configurations for SQL Data, Log and TempDb. */
		storageConfigurationSettings?: StorageConfigurationSettings;

		/** ARM Resource id of underlying virtual machine created from SQL marketplace image. */
		virtualMachineResourceId?: string | null;

		/** Domain credentials for setting up Windows Server Failover Cluster for SQL availability group. */
		wsfcDomainCredentials?: WsfcDomainCredentials;
	}

	/** The SQL virtual machine properties. */
	export interface SqlVirtualMachinePropertiesFormProperties {

		/** Provisioning state to track the async operation status. */
		provisioningState: FormControl<string | null | undefined>,

		/** SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016. */
		sqlImageOffer: FormControl<string | null | undefined>,

		/** SQL Server edition type. */
		sqlImageSku: FormControl<SqlVirtualMachinePropertiesSqlImageSku | null | undefined>,

		/** SQL Server Management type. */
		sqlManagement: FormControl<SqlVirtualMachinePropertiesSqlManagement | null | undefined>,

		/** SQL Server license type. */
		sqlServerLicenseType: FormControl<SqlVirtualMachinePropertiesSqlServerLicenseType | null | undefined>,

		/** ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of. */
		sqlVirtualMachineGroupResourceId: FormControl<string | null | undefined>,

		/** ARM Resource id of underlying virtual machine created from SQL marketplace image. */
		virtualMachineResourceId: FormControl<string | null | undefined>,
	}
	export function CreateSqlVirtualMachinePropertiesFormGroup() {
		return new FormGroup<SqlVirtualMachinePropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
			sqlImageOffer: new FormControl<string | null | undefined>(undefined),
			sqlImageSku: new FormControl<SqlVirtualMachinePropertiesSqlImageSku | null | undefined>(undefined),
			sqlManagement: new FormControl<SqlVirtualMachinePropertiesSqlManagement | null | undefined>(undefined),
			sqlServerLicenseType: new FormControl<SqlVirtualMachinePropertiesSqlServerLicenseType | null | undefined>(undefined),
			sqlVirtualMachineGroupResourceId: new FormControl<string | null | undefined>(undefined),
			virtualMachineResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SqlVirtualMachinePropertiesSqlImageSku { Developer = 'Developer', Express = 'Express', Standard = 'Standard', Enterprise = 'Enterprise', Web = 'Web' }

	export enum SqlVirtualMachinePropertiesSqlManagement { Full = 'Full', LightWeight = 'LightWeight', NoAgent = 'NoAgent' }

	export enum SqlVirtualMachinePropertiesSqlServerLicenseType { PAYG = 'PAYG', AHUB = 'AHUB', DR = 'DR' }


	/** Storage Configurations for SQL Data, Log and TempDb. */
	export interface StorageConfigurationSettings {

		/** Disk configuration to apply to SQL Server. */
		diskConfigurationType?: SqlStorageUpdateSettingsDiskConfigurationType | null;

		/** Set disk storage settings for SQL Server. */
		sqlDataSettings?: SQLStorageSettings;

		/** Set disk storage settings for SQL Server. */
		sqlLogSettings?: SQLStorageSettings;

		/** Set disk storage settings for SQL Server. */
		sqlTempDbSettings?: SQLStorageSettings;

		/** Storage workload type. */
		storageWorkloadType?: SqlWorkloadTypeUpdateSettingsSqlWorkloadType | null;
	}

	/** Storage Configurations for SQL Data, Log and TempDb. */
	export interface StorageConfigurationSettingsFormProperties {

		/** Disk configuration to apply to SQL Server. */
		diskConfigurationType: FormControl<SqlStorageUpdateSettingsDiskConfigurationType | null | undefined>,

		/** Storage workload type. */
		storageWorkloadType: FormControl<SqlWorkloadTypeUpdateSettingsSqlWorkloadType | null | undefined>,
	}
	export function CreateStorageConfigurationSettingsFormGroup() {
		return new FormGroup<StorageConfigurationSettingsFormProperties>({
			diskConfigurationType: new FormControl<SqlStorageUpdateSettingsDiskConfigurationType | null | undefined>(undefined),
			storageWorkloadType: new FormControl<SqlWorkloadTypeUpdateSettingsSqlWorkloadType | null | undefined>(undefined),
		});

	}


	/** Domain credentials for setting up Windows Server Failover Cluster for SQL availability group. */
	export interface WsfcDomainCredentials {

		/** Cluster bootstrap account password. */
		clusterBootstrapAccountPassword?: string | null;

		/** Cluster operator account password. */
		clusterOperatorAccountPassword?: string | null;

		/** SQL service account password. */
		sqlServiceAccountPassword?: string | null;
	}

	/** Domain credentials for setting up Windows Server Failover Cluster for SQL availability group. */
	export interface WsfcDomainCredentialsFormProperties {

		/** Cluster bootstrap account password. */
		clusterBootstrapAccountPassword: FormControl<string | null | undefined>,

		/** Cluster operator account password. */
		clusterOperatorAccountPassword: FormControl<string | null | undefined>,

		/** SQL service account password. */
		sqlServiceAccountPassword: FormControl<string | null | undefined>,
	}
	export function CreateWsfcDomainCredentialsFormGroup() {
		return new FormGroup<WsfcDomainCredentialsFormProperties>({
			clusterBootstrapAccountPassword: new FormControl<string | null | undefined>(undefined),
			clusterOperatorAccountPassword: new FormControl<string | null | undefined>(undefined),
			sqlServiceAccountPassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A SQL virtual machine group. */
	export interface SqlVirtualMachineGroup {

		/** The properties of a SQL virtual machine group. */
		properties?: SqlVirtualMachineGroupProperties;
	}

	/** A SQL virtual machine group. */
	export interface SqlVirtualMachineGroupFormProperties {
	}
	export function CreateSqlVirtualMachineGroupFormGroup() {
		return new FormGroup<SqlVirtualMachineGroupFormProperties>({
		});

	}


	/** The properties of a SQL virtual machine group. */
	export interface SqlVirtualMachineGroupProperties {

		/** Cluster type. */
		clusterConfiguration?: SqlVirtualMachineGroupPropertiesClusterConfiguration | null;

		/** Type of cluster manager: Windows Server Failover Cluster (WSFC), implied by the scale type of the group and the OS type. */
		clusterManagerType?: SqlVirtualMachineGroupPropertiesClusterManagerType | null;

		/** Provisioning state to track the async operation status. */
		provisioningState?: string | null;

		/** Scale type. */
		scaleType?: SqlVirtualMachineGroupPropertiesScaleType | null;

		/** SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016. */
		sqlImageOffer?: string | null;

		/** SQL image sku. */
		sqlImageSku?: SqlVirtualMachineGroupPropertiesSqlImageSku | null;

		/** Active Directory account details to operate Windows Server Failover Cluster. */
		wsfcDomainProfile?: WsfcDomainProfile;
	}

	/** The properties of a SQL virtual machine group. */
	export interface SqlVirtualMachineGroupPropertiesFormProperties {

		/** Cluster type. */
		clusterConfiguration: FormControl<SqlVirtualMachineGroupPropertiesClusterConfiguration | null | undefined>,

		/** Type of cluster manager: Windows Server Failover Cluster (WSFC), implied by the scale type of the group and the OS type. */
		clusterManagerType: FormControl<SqlVirtualMachineGroupPropertiesClusterManagerType | null | undefined>,

		/** Provisioning state to track the async operation status. */
		provisioningState: FormControl<string | null | undefined>,

		/** Scale type. */
		scaleType: FormControl<SqlVirtualMachineGroupPropertiesScaleType | null | undefined>,

		/** SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016. */
		sqlImageOffer: FormControl<string | null | undefined>,

		/** SQL image sku. */
		sqlImageSku: FormControl<SqlVirtualMachineGroupPropertiesSqlImageSku | null | undefined>,
	}
	export function CreateSqlVirtualMachineGroupPropertiesFormGroup() {
		return new FormGroup<SqlVirtualMachineGroupPropertiesFormProperties>({
			clusterConfiguration: new FormControl<SqlVirtualMachineGroupPropertiesClusterConfiguration | null | undefined>(undefined),
			clusterManagerType: new FormControl<SqlVirtualMachineGroupPropertiesClusterManagerType | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			scaleType: new FormControl<SqlVirtualMachineGroupPropertiesScaleType | null | undefined>(undefined),
			sqlImageOffer: new FormControl<string | null | undefined>(undefined),
			sqlImageSku: new FormControl<SqlVirtualMachineGroupPropertiesSqlImageSku | null | undefined>(undefined),
		});

	}

	export enum SqlVirtualMachineGroupPropertiesClusterConfiguration { Domainful = 'Domainful' }

	export enum SqlVirtualMachineGroupPropertiesClusterManagerType { WSFC = 'WSFC' }

	export enum SqlVirtualMachineGroupPropertiesScaleType { HA = 'HA' }

	export enum SqlVirtualMachineGroupPropertiesSqlImageSku { Developer = 'Developer', Enterprise = 'Enterprise' }


	/** Active Directory account details to operate Windows Server Failover Cluster. */
	export interface WsfcDomainProfile {

		/** Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain). */
		clusterBootstrapAccount?: string | null;

		/** Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster. */
		clusterOperatorAccount?: string | null;

		/** Fully qualified name of the domain. */
		domainFqdn?: string | null;

		/** Optional path for fileshare witness. */
		fileShareWitnessPath?: string | null;

		/** Organizational Unit path in which the nodes and cluster will be present. */
		ouPath?: string | null;

		/** Account name under which SQL service will run on all participating SQL virtual machines in the cluster. */
		sqlServiceAccount?: string | null;

		/** Primary key of the witness storage account. */
		storageAccountPrimaryKey?: string | null;

		/** Fully qualified ARM resource id of the witness storage account. */
		storageAccountUrl?: string | null;
	}

	/** Active Directory account details to operate Windows Server Failover Cluster. */
	export interface WsfcDomainProfileFormProperties {

		/** Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain). */
		clusterBootstrapAccount: FormControl<string | null | undefined>,

		/** Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster. */
		clusterOperatorAccount: FormControl<string | null | undefined>,

		/** Fully qualified name of the domain. */
		domainFqdn: FormControl<string | null | undefined>,

		/** Optional path for fileshare witness. */
		fileShareWitnessPath: FormControl<string | null | undefined>,

		/** Organizational Unit path in which the nodes and cluster will be present. */
		ouPath: FormControl<string | null | undefined>,

		/** Account name under which SQL service will run on all participating SQL virtual machines in the cluster. */
		sqlServiceAccount: FormControl<string | null | undefined>,

		/** Primary key of the witness storage account. */
		storageAccountPrimaryKey: FormControl<string | null | undefined>,

		/** Fully qualified ARM resource id of the witness storage account. */
		storageAccountUrl: FormControl<string | null | undefined>,
	}
	export function CreateWsfcDomainProfileFormGroup() {
		return new FormGroup<WsfcDomainProfileFormProperties>({
			clusterBootstrapAccount: new FormControl<string | null | undefined>(undefined),
			clusterOperatorAccount: new FormControl<string | null | undefined>(undefined),
			domainFqdn: new FormControl<string | null | undefined>(undefined),
			fileShareWitnessPath: new FormControl<string | null | undefined>(undefined),
			ouPath: new FormControl<string | null | undefined>(undefined),
			sqlServiceAccount: new FormControl<string | null | undefined>(undefined),
			storageAccountPrimaryKey: new FormControl<string | null | undefined>(undefined),
			storageAccountUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of SQL virtual machine groups. */
	export interface SqlVirtualMachineGroupListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SqlVirtualMachineGroup>;
	}

	/** A list of SQL virtual machine groups. */
	export interface SqlVirtualMachineGroupListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSqlVirtualMachineGroupListResultFormGroup() {
		return new FormGroup<SqlVirtualMachineGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update to a SQL virtual machine group. */
	export interface SqlVirtualMachineGroupUpdate {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An update to a SQL virtual machine group. */
	export interface SqlVirtualMachineGroupUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSqlVirtualMachineGroupUpdateFormGroup() {
		return new FormGroup<SqlVirtualMachineGroupUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A list of SQL virtual machines. */
	export interface SqlVirtualMachineListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SqlVirtualMachine>;
	}

	/** A list of SQL virtual machines. */
	export interface SqlVirtualMachineListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSqlVirtualMachineListResultFormGroup() {
		return new FormGroup<SqlVirtualMachineListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update to a SQL virtual machine. */
	export interface SqlVirtualMachineUpdate {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An update to a SQL virtual machine. */
	export interface SqlVirtualMachineUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSqlVirtualMachineUpdateFormGroup() {
		return new FormGroup<SqlVirtualMachineUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** ARM tracked top level resource. */
	export interface TrackedResource {

		/**
		 * Resource location.
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** ARM tracked top level resource. */
	export interface TrackedResourceFormProperties {

		/**
		 * Resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available SQL Rest API operations.
		 * Get providers/Microsoft.SqlVirtualMachine/operations
		 * @param {string} api_version API version to use for the request.
		 * @return {OperationListResult} Successfully retrieved operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.SqlVirtualMachine/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all SQL virtual machine groups in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlVirtualMachineGroupListResult} Successfully retrieved all SQL virtual machine groups in the subscription.
		 */
		SqlVirtualMachineGroups_List(subscriptionId: string, api_version: string): Observable<SqlVirtualMachineGroupListResult> {
			return this.http.get<SqlVirtualMachineGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all SQL virtual machines in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlVirtualMachineListResult} Successfully retrieved all SQL virtual machines in the subscription.
		 */
		SqlVirtualMachines_List(subscriptionId: string, api_version: string): Observable<SqlVirtualMachineListResult> {
			return this.http.get<SqlVirtualMachineListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all SQL virtual machine groups in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlVirtualMachineGroupListResult} Successfully retrieved all SQL virtual machine groups in the resource group.
		 */
		SqlVirtualMachineGroups_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<SqlVirtualMachineGroupListResult> {
			return this.http.get<SqlVirtualMachineGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a SQL virtual machine group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineGroupName Name of the SQL virtual machine group.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlVirtualMachineGroup} Successfully retrieved the SQL virtual machine group.
		 */
		SqlVirtualMachineGroups_Get(resourceGroupName: string, sqlVirtualMachineGroupName: string, subscriptionId: string, api_version: string): Observable<SqlVirtualMachineGroup> {
			return this.http.get<SqlVirtualMachineGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/' + (sqlVirtualMachineGroupName == null ? '' : encodeURIComponent(sqlVirtualMachineGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a SQL virtual machine group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineGroupName Name of the SQL virtual machine group.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @param {SqlVirtualMachineGroup} requestBody The SQL virtual machine group.
		 * @return {SqlVirtualMachineGroup} Successfully updated the SQL virtual machine group.
		 */
		SqlVirtualMachineGroups_CreateOrUpdate(resourceGroupName: string, sqlVirtualMachineGroupName: string, subscriptionId: string, api_version: string, requestBody: SqlVirtualMachineGroup): Observable<SqlVirtualMachineGroup> {
			return this.http.put<SqlVirtualMachineGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/' + (sqlVirtualMachineGroupName == null ? '' : encodeURIComponent(sqlVirtualMachineGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a SQL virtual machine group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineGroupName Name of the SQL virtual machine group.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {void} Successfully deleted the SQL virtual machine group.
		 */
		SqlVirtualMachineGroups_Delete(resourceGroupName: string, sqlVirtualMachineGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/' + (sqlVirtualMachineGroupName == null ? '' : encodeURIComponent(sqlVirtualMachineGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates SQL virtual machine group tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineGroupName Name of the SQL virtual machine group.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @param {SqlVirtualMachineGroupUpdate} requestBody The SQL virtual machine group.
		 * @return {SqlVirtualMachineGroup} Successfully updated the SQL virtual machine group.
		 */
		SqlVirtualMachineGroups_Update(resourceGroupName: string, sqlVirtualMachineGroupName: string, subscriptionId: string, api_version: string, requestBody: SqlVirtualMachineGroupUpdate): Observable<SqlVirtualMachineGroup> {
			return this.http.patch<SqlVirtualMachineGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/' + (sqlVirtualMachineGroupName == null ? '' : encodeURIComponent(sqlVirtualMachineGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all availability group listeners in a SQL virtual machine group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineGroupName Name of the SQL virtual machine group.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {AvailabilityGroupListenerListResult} Successfully retrieved all availability group listeners in a SQL virtual machine group.
		 */
		AvailabilityGroupListeners_ListByGroup(resourceGroupName: string, sqlVirtualMachineGroupName: string, subscriptionId: string, api_version: string): Observable<AvailabilityGroupListenerListResult> {
			return this.http.get<AvailabilityGroupListenerListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/' + (sqlVirtualMachineGroupName == null ? '' : encodeURIComponent(sqlVirtualMachineGroupName)) + '/availabilityGroupListeners&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an availability group listener.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineGroupName Name of the SQL virtual machine group.
		 * @param {string} availabilityGroupListenerName Name of the availability group listener.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {AvailabilityGroupListener} Successfully retrieved the availability group listener.
		 */
		AvailabilityGroupListeners_Get(resourceGroupName: string, sqlVirtualMachineGroupName: string, availabilityGroupListenerName: string, subscriptionId: string, api_version: string): Observable<AvailabilityGroupListener> {
			return this.http.get<AvailabilityGroupListener>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/' + (sqlVirtualMachineGroupName == null ? '' : encodeURIComponent(sqlVirtualMachineGroupName)) + '/availabilityGroupListeners/' + (availabilityGroupListenerName == null ? '' : encodeURIComponent(availabilityGroupListenerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an availability group listener.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineGroupName Name of the SQL virtual machine group.
		 * @param {string} availabilityGroupListenerName Name of the availability group listener.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @param {AvailabilityGroupListener} requestBody The availability group listener.
		 * @return {AvailabilityGroupListener} Successfully updated the availability group listener.
		 */
		AvailabilityGroupListeners_CreateOrUpdate(resourceGroupName: string, sqlVirtualMachineGroupName: string, availabilityGroupListenerName: string, subscriptionId: string, api_version: string, requestBody: AvailabilityGroupListener): Observable<AvailabilityGroupListener> {
			return this.http.put<AvailabilityGroupListener>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/' + (sqlVirtualMachineGroupName == null ? '' : encodeURIComponent(sqlVirtualMachineGroupName)) + '/availabilityGroupListeners/' + (availabilityGroupListenerName == null ? '' : encodeURIComponent(availabilityGroupListenerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an availability group listener.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineGroupName Name of the SQL virtual machine group.
		 * @param {string} availabilityGroupListenerName Name of the availability group listener.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {void} Successfully deleted the availability group listener.
		 */
		AvailabilityGroupListeners_Delete(resourceGroupName: string, sqlVirtualMachineGroupName: string, availabilityGroupListenerName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/' + (sqlVirtualMachineGroupName == null ? '' : encodeURIComponent(sqlVirtualMachineGroupName)) + '/availabilityGroupListeners/' + (availabilityGroupListenerName == null ? '' : encodeURIComponent(availabilityGroupListenerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the list of sql virtual machines in a SQL virtual machine group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/sqlVirtualMachines
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineGroupName Name of the SQL virtual machine group.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlVirtualMachineListResult} Successfully retrieved the list of sql virtual machines in a SQL virtual machine group.
		 */
		SqlVirtualMachines_ListBySqlVmGroup(resourceGroupName: string, sqlVirtualMachineGroupName: string, subscriptionId: string, api_version: string): Observable<SqlVirtualMachineListResult> {
			return this.http.get<SqlVirtualMachineListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/' + (sqlVirtualMachineGroupName == null ? '' : encodeURIComponent(sqlVirtualMachineGroupName)) + '/sqlVirtualMachines&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all SQL virtual machines in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlVirtualMachineListResult} Successfully retrieved all SQL virtual machines in the resource group.
		 */
		SqlVirtualMachines_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<SqlVirtualMachineListResult> {
			return this.http.get<SqlVirtualMachineListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a SQL virtual machine.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineName Name of the SQL virtual machine.
		 * @param {string} expand The child resources to include in the response.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlVirtualMachine} Successfully retrieved the SQL virtual machine.
		 */
		SqlVirtualMachines_Get(resourceGroupName: string, sqlVirtualMachineName: string, expand: string | null | undefined, subscriptionId: string, api_version: string): Observable<SqlVirtualMachine> {
			return this.http.get<SqlVirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/' + (sqlVirtualMachineName == null ? '' : encodeURIComponent(sqlVirtualMachineName)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a SQL virtual machine.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineName Name of the SQL virtual machine.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @param {SqlVirtualMachine} requestBody The SQL virtual machine.
		 * @return {SqlVirtualMachine} Successfully updated the SQL virtual machine.
		 */
		SqlVirtualMachines_CreateOrUpdate(resourceGroupName: string, sqlVirtualMachineName: string, subscriptionId: string, api_version: string, requestBody: SqlVirtualMachine): Observable<SqlVirtualMachine> {
			return this.http.put<SqlVirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/' + (sqlVirtualMachineName == null ? '' : encodeURIComponent(sqlVirtualMachineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a SQL virtual machine.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineName Name of the SQL virtual machine.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {void} Successfully deleted the SQL virtual machine.
		 */
		SqlVirtualMachines_Delete(resourceGroupName: string, sqlVirtualMachineName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/' + (sqlVirtualMachineName == null ? '' : encodeURIComponent(sqlVirtualMachineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a SQL virtual machine.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlVirtualMachineName Name of the SQL virtual machine.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @param {SqlVirtualMachineUpdate} requestBody The SQL virtual machine.
		 * @return {SqlVirtualMachine} Successfully updated the SQL virtual machine.
		 */
		SqlVirtualMachines_Update(resourceGroupName: string, sqlVirtualMachineName: string, subscriptionId: string, api_version: string, requestBody: SqlVirtualMachineUpdate): Observable<SqlVirtualMachine> {
			return this.http.patch<SqlVirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/' + (sqlVirtualMachineName == null ? '' : encodeURIComponent(sqlVirtualMachineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

