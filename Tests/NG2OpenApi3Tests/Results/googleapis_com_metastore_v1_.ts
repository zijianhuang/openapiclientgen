import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request message for DataprocMetastore.AlterMetadataResourceLocation. */
	export interface AlterMetadataResourceLocationRequest {

		/** Required. The new location URI for the metadata resource. */
		locationUri?: string | null;

		/** Required. The relative metadata resource name in the following format.databases/{database_id} or databases/{database_id}/tables/{table_id} or databases/{database_id}/tables/{table_id}/partitions/{partition_id} */
		resourceName?: string | null;
	}

	/** Request message for DataprocMetastore.AlterMetadataResourceLocation. */
	export interface AlterMetadataResourceLocationRequestFormProperties {

		/** Required. The new location URI for the metadata resource. */
		locationUri: FormControl<string | null | undefined>,

		/** Required. The relative metadata resource name in the following format.databases/{database_id} or databases/{database_id}/tables/{table_id} or databases/{database_id}/tables/{table_id}/partitions/{partition_id} */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateAlterMetadataResourceLocationRequestFormGroup() {
		return new FormGroup<AlterMetadataResourceLocationRequestFormProperties>({
			locationUri: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for DataprocMetastore.AlterMetadataResourceLocation. */
	export interface AlterMetadataResourceLocationResponse {
	}

	/** Response message for DataprocMetastore.AlterMetadataResourceLocation. */
	export interface AlterMetadataResourceLocationResponseFormProperties {
	}
	export function CreateAlterMetadataResourceLocationResponseFormGroup() {
		return new FormGroup<AlterMetadataResourceLocationResponseFormProperties>({
		});

	}


	/** Request message for DataprocMetastore.AlterTableProperties. */
	export interface AlterTablePropertiesRequest {

		/** A map that describes the desired values to mutate. If update_mask is empty, the properties will not update. Otherwise, the properties only alters the value whose associated paths exist in the update mask */
		properties?: {[id: string]: string };

		/** Required. The name of the table containing the properties you're altering in the following format.databases/{database_id}/tables/{table_id} */
		tableName?: string | null;

		/** A field mask that specifies the metadata table properties that are overwritten by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.For example, given the target properties: properties { a: 1 b: 2 } And an update properties: properties { a: 2 b: 3 c: 4 } then if the field mask is:paths: "properties.b", "properties.c"then the result will be: properties { a: 1 b: 3 c: 4 } */
		updateMask?: string | null;
	}

	/** Request message for DataprocMetastore.AlterTableProperties. */
	export interface AlterTablePropertiesRequestFormProperties {

		/** A map that describes the desired values to mutate. If update_mask is empty, the properties will not update. Otherwise, the properties only alters the value whose associated paths exist in the update mask */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The name of the table containing the properties you're altering in the following format.databases/{database_id}/tables/{table_id} */
		tableName: FormControl<string | null | undefined>,

		/** A field mask that specifies the metadata table properties that are overwritten by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.For example, given the target properties: properties { a: 1 b: 2 } And an update properties: properties { a: 2 b: 3 c: 4 } then if the field mask is:paths: "properties.b", "properties.c"then the result will be: properties { a: 1 b: 3 c: 4 } */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateAlterTablePropertiesRequestFormGroup() {
		return new FormGroup<AlterTablePropertiesRequestFormProperties>({
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.If there are AuditConfigs for both allServices and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging. */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.If there are AuditConfigs for both allServices and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging. */
	export interface AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<AuditLogConfigLogType | null | undefined>,
	}
	export function CreateAuditLogConfigFormGroup() {
		return new FormGroup<AuditLogConfigFormProperties>({
			logType: new FormControl<AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Configuration information for the auxiliary service versions. */
	export interface AuxiliaryVersionConfig {

		/** A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence. */
		configOverrides?: {[id: string]: string };

		/** Network configuration for the Dataproc Metastore service. */
		networkConfig?: NetworkConfig;

		/** The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version. */
		version?: string | null;
	}

	/** Configuration information for the auxiliary service versions. */
	export interface AuxiliaryVersionConfigFormProperties {

		/** A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence. */
		configOverrides: FormControl<{[id: string]: string } | null | undefined>,

		/** The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAuxiliaryVersionConfigFormGroup() {
		return new FormGroup<AuxiliaryVersionConfigFormProperties>({
			configOverrides: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network configuration for the Dataproc Metastore service. */
	export interface NetworkConfig {

		/** Immutable. The consumer-side network configuration for the Dataproc Metastore instance. */
		consumers?: Array<Consumer>;
	}

	/** Network configuration for the Dataproc Metastore service. */
	export interface NetworkConfigFormProperties {
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
		});

	}


	/** Contains information of the customer's network configurations. */
	export interface Consumer {

		/** Output only. The location of the endpoint URI. Format: projects/{project}/locations/{location}. */
		endpointLocation?: string | null;

		/** Output only. The URI of the endpoint used to access the metastore service. */
		endpointUri?: string | null;

		/** Immutable. The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network. There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:projects/{project_number}/regions/{region_id}/subnetworks/{subnetwork_id} */
		subnetwork?: string | null;
	}

	/** Contains information of the customer's network configurations. */
	export interface ConsumerFormProperties {

		/** Output only. The location of the endpoint URI. Format: projects/{project}/locations/{location}. */
		endpointLocation: FormControl<string | null | undefined>,

		/** Output only. The URI of the endpoint used to access the metastore service. */
		endpointUri: FormControl<string | null | undefined>,

		/** Immutable. The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network. There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:projects/{project_number}/regions/{region_id}/subnetworks/{subnetwork_id} */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateConsumerFormGroup() {
		return new FormGroup<ConsumerFormProperties>({
			endpointLocation: new FormControl<string | null | undefined>(undefined),
			endpointUri: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a backend metastore for the federation. */
	export interface BackendMetastore {

		/** The type of the backend metastore. */
		metastoreType?: BackendMetastoreMetastoreType | null;

		/** The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: BigQuery projects/{project_id} Dataproc Metastore projects/{project_id}/locations/{location}/services/{service_id} */
		name?: string | null;
	}

	/** Represents a backend metastore for the federation. */
	export interface BackendMetastoreFormProperties {

		/** The type of the backend metastore. */
		metastoreType: FormControl<BackendMetastoreMetastoreType | null | undefined>,

		/** The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: BigQuery projects/{project_id} Dataproc Metastore projects/{project_id}/locations/{location}/services/{service_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBackendMetastoreFormGroup() {
		return new FormGroup<BackendMetastoreFormProperties>({
			metastoreType: new FormControl<BackendMetastoreMetastoreType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackendMetastoreMetastoreType { METASTORE_TYPE_UNSPECIFIED = 'METASTORE_TYPE_UNSPECIFIED', BIGQUERY = 'BIGQUERY', DATAPROC_METASTORE = 'DATAPROC_METASTORE' }


	/** The details of a backup resource. */
	export interface Backup {

		/** Output only. The time when the backup was started. */
		createTime?: string | null;

		/** The description of the backup. */
		description?: string | null;

		/** Output only. The time when the backup finished creating. */
		endTime?: string | null;

		/** Immutable. The relative resource name of the backup, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id} */
		name?: string | null;

		/** Output only. Services that are restoring from the backup. */
		restoringServices?: Array<string>;

		/** A managed metastore service that serves metadata queries. */
		serviceRevision?: Service;

		/** Output only. The current state of the backup. */
		state?: BackupState | null;
	}

	/** The details of a backup resource. */
	export interface BackupFormProperties {

		/** Output only. The time when the backup was started. */
		createTime: FormControl<string | null | undefined>,

		/** The description of the backup. */
		description: FormControl<string | null | undefined>,

		/** Output only. The time when the backup finished creating. */
		endTime: FormControl<string | null | undefined>,

		/** Immutable. The relative resource name of the backup, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id} */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of the backup. */
		state: FormControl<BackupState | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BackupState | null | undefined>(undefined),
		});

	}


	/** A managed metastore service that serves metadata queries. */
	export interface Service {

		/** Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored. */
		artifactGcsUri?: string | null;

		/** Output only. The time when the metastore service was created. */
		createTime?: string | null;

		/** Immutable. The database type that the Metastore service stores its data. */
		databaseType?: ServiceDatabaseType | null;

		/** Encryption settings for the service. */
		encryptionConfig?: EncryptionConfig;

		/** Output only. The URI of the endpoint used to access the metastore service. */
		endpointUri?: string | null;

		/** Specifies configuration information specific to running Hive metastore software as the metastore service. */
		hiveMetastoreConfig?: HiveMetastoreConfig;

		/** User-defined labels for the metastore service. */
		labels?: {[id: string]: string };

		/** Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service. */
		maintenanceWindow?: MaintenanceWindow;

		/** Specifies how metastore metadata should be integrated with external services. */
		metadataIntegration?: MetadataIntegration;

		/** The metadata management activities of the metastore service. */
		metadataManagementActivity?: MetadataManagementActivity;

		/** Immutable. The relative resource name of the metastore service, in the following format:projects/{project_number}/locations/{location_id}/services/{service_id}. */
		name?: string | null;

		/** Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/{project_number}/global/networks/{network_id}. */
		network?: string | null;

		/** Network configuration for the Dataproc Metastore service. */
		networkConfig?: NetworkConfig;

		/** The TCP port at which the metastore service is reached. Default: 9083. */
		port?: number | null;

		/** Immutable. The release channel of the service. If unspecified, defaults to STABLE. */
		releaseChannel?: ServiceReleaseChannel | null;

		/** Represents the scaling configuration of a metastore service. */
		scalingConfig?: ScalingConfig;

		/** Output only. The current state of the metastore service. */
		state?: ServiceState | null;

		/** Output only. Additional information about the current state of the metastore service, if available. */
		stateMessage?: string | null;

		/** Telemetry Configuration for the Dataproc Metastore service. */
		telemetryConfig?: TelemetryConfig;

		/** The tier of the service. */
		tier?: ServiceTier | null;

		/** Output only. The globally unique resource identifier of the metastore service. */
		uid?: string | null;

		/** Output only. The time when the metastore service was last updated. */
		updateTime?: string | null;
	}

	/** A managed metastore service that serves metadata queries. */
	export interface ServiceFormProperties {

		/** Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored. */
		artifactGcsUri: FormControl<string | null | undefined>,

		/** Output only. The time when the metastore service was created. */
		createTime: FormControl<string | null | undefined>,

		/** Immutable. The database type that the Metastore service stores its data. */
		databaseType: FormControl<ServiceDatabaseType | null | undefined>,

		/** Output only. The URI of the endpoint used to access the metastore service. */
		endpointUri: FormControl<string | null | undefined>,

		/** User-defined labels for the metastore service. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The relative resource name of the metastore service, in the following format:projects/{project_number}/locations/{location_id}/services/{service_id}. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/{project_number}/global/networks/{network_id}. */
		network: FormControl<string | null | undefined>,

		/** The TCP port at which the metastore service is reached. Default: 9083. */
		port: FormControl<number | null | undefined>,

		/** Immutable. The release channel of the service. If unspecified, defaults to STABLE. */
		releaseChannel: FormControl<ServiceReleaseChannel | null | undefined>,

		/** Output only. The current state of the metastore service. */
		state: FormControl<ServiceState | null | undefined>,

		/** Output only. Additional information about the current state of the metastore service, if available. */
		stateMessage: FormControl<string | null | undefined>,

		/** The tier of the service. */
		tier: FormControl<ServiceTier | null | undefined>,

		/** Output only. The globally unique resource identifier of the metastore service. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the metastore service was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			artifactGcsUri: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			databaseType: new FormControl<ServiceDatabaseType | null | undefined>(undefined),
			endpointUri: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			releaseChannel: new FormControl<ServiceReleaseChannel | null | undefined>(undefined),
			state: new FormControl<ServiceState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<ServiceTier | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceDatabaseType { DATABASE_TYPE_UNSPECIFIED = 'DATABASE_TYPE_UNSPECIFIED', MYSQL = 'MYSQL', SPANNER = 'SPANNER' }


	/** Encryption settings for the service. */
	export interface EncryptionConfig {

		/** The fully qualified customer provided Cloud KMS key name to use for customer data encryption, in the following form:projects/{project_number}/locations/{location_id}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}. */
		kmsKey?: string | null;
	}

	/** Encryption settings for the service. */
	export interface EncryptionConfigFormProperties {

		/** The fully qualified customer provided Cloud KMS key name to use for customer data encryption, in the following form:projects/{project_number}/locations/{location_id}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}. */
		kmsKey: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			kmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies configuration information specific to running Hive metastore software as the metastore service. */
	export interface HiveMetastoreConfig {

		/** A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary Hive metastore service is created along with the primary service. All auxiliary versions must be less than the service's primary version. The key is the auxiliary service name and it must match the regular expression a-z?. This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen. */
		auxiliaryVersions?: {[id: string]: AuxiliaryVersionConfig };

		/** A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). These overrides are also applied to auxiliary versions and can be further customized in the auxiliary version's AuxiliaryVersionConfig. */
		configOverrides?: {[id: string]: string };

		/** The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT. */
		endpointProtocol?: HiveMetastoreConfigEndpointProtocol | null;

		/** Configuration information for a Kerberos principal. */
		kerberosConfig?: KerberosConfig;

		/** Immutable. The Hive metastore schema version. */
		version?: string | null;
	}

	/** Specifies configuration information specific to running Hive metastore software as the metastore service. */
	export interface HiveMetastoreConfigFormProperties {

		/** A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary Hive metastore service is created along with the primary service. All auxiliary versions must be less than the service's primary version. The key is the auxiliary service name and it must match the regular expression a-z?. This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen. */
		auxiliaryVersions: FormControl<{[id: string]: AuxiliaryVersionConfig } | null | undefined>,

		/** A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). These overrides are also applied to auxiliary versions and can be further customized in the auxiliary version's AuxiliaryVersionConfig. */
		configOverrides: FormControl<{[id: string]: string } | null | undefined>,

		/** The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT. */
		endpointProtocol: FormControl<HiveMetastoreConfigEndpointProtocol | null | undefined>,

		/** Immutable. The Hive metastore schema version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateHiveMetastoreConfigFormGroup() {
		return new FormGroup<HiveMetastoreConfigFormProperties>({
			auxiliaryVersions: new FormControl<{[id: string]: AuxiliaryVersionConfig } | null | undefined>(undefined),
			configOverrides: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			endpointProtocol: new FormControl<HiveMetastoreConfigEndpointProtocol | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HiveMetastoreConfigEndpointProtocol { ENDPOINT_PROTOCOL_UNSPECIFIED = 'ENDPOINT_PROTOCOL_UNSPECIFIED', THRIFT = 'THRIFT', GRPC = 'GRPC' }


	/** Configuration information for a Kerberos principal. */
	export interface KerberosConfig {

		/** A securely stored value. */
		keytab?: Secret;

		/** A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly. */
		krb5ConfigGcsUri?: string | null;

		/** A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form primary/instance@REALM, but there is no exact format. */
		principal?: string | null;
	}

	/** Configuration information for a Kerberos principal. */
	export interface KerberosConfigFormProperties {

		/** A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly. */
		krb5ConfigGcsUri: FormControl<string | null | undefined>,

		/** A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form primary/instance@REALM, but there is no exact format. */
		principal: FormControl<string | null | undefined>,
	}
	export function CreateKerberosConfigFormGroup() {
		return new FormGroup<KerberosConfigFormProperties>({
			krb5ConfigGcsUri: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A securely stored value. */
	export interface Secret {

		/** The relative resource name of a Secret Manager secret version, in the following form:projects/{project_number}/secrets/{secret_id}/versions/{version_id}. */
		cloudSecret?: string | null;
	}

	/** A securely stored value. */
	export interface SecretFormProperties {

		/** The relative resource name of a Secret Manager secret version, in the following form:projects/{project_number}/secrets/{secret_id}/versions/{version_id}. */
		cloudSecret: FormControl<string | null | undefined>,
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
			cloudSecret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service. */
	export interface MaintenanceWindow {

		/** The day of week, when the window starts. */
		dayOfWeek?: MaintenanceWindowDayOfWeek | null;

		/** The hour of day (0-23) when the window starts. */
		hourOfDay?: number | null;
	}

	/** Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service. */
	export interface MaintenanceWindowFormProperties {

		/** The day of week, when the window starts. */
		dayOfWeek: FormControl<MaintenanceWindowDayOfWeek | null | undefined>,

		/** The hour of day (0-23) when the window starts. */
		hourOfDay: FormControl<number | null | undefined>,
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
			dayOfWeek: new FormControl<MaintenanceWindowDayOfWeek | null | undefined>(undefined),
			hourOfDay: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MaintenanceWindowDayOfWeek { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


	/** Specifies how metastore metadata should be integrated with external services. */
	export interface MetadataIntegration {

		/** Specifies how metastore metadata should be integrated with the Data Catalog service. */
		dataCatalogConfig?: DataCatalogConfig;
	}

	/** Specifies how metastore metadata should be integrated with external services. */
	export interface MetadataIntegrationFormProperties {
	}
	export function CreateMetadataIntegrationFormGroup() {
		return new FormGroup<MetadataIntegrationFormProperties>({
		});

	}


	/** Specifies how metastore metadata should be integrated with the Data Catalog service. */
	export interface DataCatalogConfig {

		/** Optional. Defines whether the metastore metadata should be synced to Data Catalog. The default value is to disable syncing metastore metadata to Data Catalog. */
		enabled?: boolean | null;
	}

	/** Specifies how metastore metadata should be integrated with the Data Catalog service. */
	export interface DataCatalogConfigFormProperties {

		/** Optional. Defines whether the metastore metadata should be synced to Data Catalog. The default value is to disable syncing metastore metadata to Data Catalog. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDataCatalogConfigFormGroup() {
		return new FormGroup<DataCatalogConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The metadata management activities of the metastore service. */
	export interface MetadataManagementActivity {

		/** Output only. The latest metadata exports of the metastore service. */
		metadataExports?: Array<MetadataExport>;

		/** Output only. The latest restores of the metastore service. */
		restores?: Array<Restore>;
	}

	/** The metadata management activities of the metastore service. */
	export interface MetadataManagementActivityFormProperties {
	}
	export function CreateMetadataManagementActivityFormGroup() {
		return new FormGroup<MetadataManagementActivityFormProperties>({
		});

	}


	/** The details of a metadata export operation. */
	export interface MetadataExport {

		/** Output only. The type of the database dump. */
		databaseDumpType?: MetadataExportDatabaseDumpType | null;

		/** Output only. A Cloud Storage URI of a folder that metadata are exported to, in the form of gs:////, where is automatically generated. */
		destinationGcsUri?: string | null;

		/** Output only. The time when the export ended. */
		endTime?: string | null;

		/** Output only. The time when the export started. */
		startTime?: string | null;

		/** Output only. The current state of the export. */
		state?: MetadataExportState | null;
	}

	/** The details of a metadata export operation. */
	export interface MetadataExportFormProperties {

		/** Output only. The type of the database dump. */
		databaseDumpType: FormControl<MetadataExportDatabaseDumpType | null | undefined>,

		/** Output only. A Cloud Storage URI of a folder that metadata are exported to, in the form of gs:////, where is automatically generated. */
		destinationGcsUri: FormControl<string | null | undefined>,

		/** Output only. The time when the export ended. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The time when the export started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The current state of the export. */
		state: FormControl<MetadataExportState | null | undefined>,
	}
	export function CreateMetadataExportFormGroup() {
		return new FormGroup<MetadataExportFormProperties>({
			databaseDumpType: new FormControl<MetadataExportDatabaseDumpType | null | undefined>(undefined),
			destinationGcsUri: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MetadataExportState | null | undefined>(undefined),
		});

	}

	export enum MetadataExportDatabaseDumpType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', MYSQL = 'MYSQL', AVRO = 'AVRO' }

	export enum MetadataExportState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLED = 'CANCELLED' }


	/** The details of a metadata restore operation. */
	export interface Restore {

		/** Output only. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}. */
		backup?: string | null;

		/** Output only. The restore details containing the revision of the service to be restored to, in format of JSON. */
		details?: string | null;

		/** Output only. The time when the restore ended. */
		endTime?: string | null;

		/** Output only. The time when the restore started. */
		startTime?: string | null;

		/** Output only. The current state of the restore. */
		state?: MetadataExportState | null;

		/** Output only. The type of restore. */
		type?: RestoreType | null;
	}

	/** The details of a metadata restore operation. */
	export interface RestoreFormProperties {

		/** Output only. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}. */
		backup: FormControl<string | null | undefined>,

		/** Output only. The restore details containing the revision of the service to be restored to, in format of JSON. */
		details: FormControl<string | null | undefined>,

		/** Output only. The time when the restore ended. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The time when the restore started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The current state of the restore. */
		state: FormControl<MetadataExportState | null | undefined>,

		/** Output only. The type of restore. */
		type: FormControl<RestoreType | null | undefined>,
	}
	export function CreateRestoreFormGroup() {
		return new FormGroup<RestoreFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MetadataExportState | null | undefined>(undefined),
			type: new FormControl<RestoreType | null | undefined>(undefined),
		});

	}

	export enum RestoreType { RESTORE_TYPE_UNSPECIFIED = 'RESTORE_TYPE_UNSPECIFIED', FULL = 'FULL', METADATA_ONLY = 'METADATA_ONLY' }

	export enum ServiceReleaseChannel { RELEASE_CHANNEL_UNSPECIFIED = 'RELEASE_CHANNEL_UNSPECIFIED', CANARY = 'CANARY', STABLE = 'STABLE' }


	/** Represents the scaling configuration of a metastore service. */
	export interface ScalingConfig {

		/** An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1)) */
		instanceSize?: ScalingConfigInstanceSize | null;

		/** Scaling factor, increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0. */
		scalingFactor?: number | null;
	}

	/** Represents the scaling configuration of a metastore service. */
	export interface ScalingConfigFormProperties {

		/** An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1)) */
		instanceSize: FormControl<ScalingConfigInstanceSize | null | undefined>,

		/** Scaling factor, increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0. */
		scalingFactor: FormControl<number | null | undefined>,
	}
	export function CreateScalingConfigFormGroup() {
		return new FormGroup<ScalingConfigFormProperties>({
			instanceSize: new FormControl<ScalingConfigInstanceSize | null | undefined>(undefined),
			scalingFactor: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ScalingConfigInstanceSize { INSTANCE_SIZE_UNSPECIFIED = 'INSTANCE_SIZE_UNSPECIFIED', EXTRA_SMALL = 'EXTRA_SMALL', SMALL = 'SMALL', MEDIUM = 'MEDIUM', LARGE = 'LARGE', EXTRA_LARGE = 'EXTRA_LARGE' }

	export enum ServiceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', SUSPENDING = 'SUSPENDING', SUSPENDED = 'SUSPENDED', UPDATING = 'UPDATING', DELETING = 'DELETING', ERROR = 'ERROR' }


	/** Telemetry Configuration for the Dataproc Metastore service. */
	export interface TelemetryConfig {

		/** The output format of the Dataproc Metastore service's logs. */
		logFormat?: TelemetryConfigLogFormat | null;
	}

	/** Telemetry Configuration for the Dataproc Metastore service. */
	export interface TelemetryConfigFormProperties {

		/** The output format of the Dataproc Metastore service's logs. */
		logFormat: FormControl<TelemetryConfigLogFormat | null | undefined>,
	}
	export function CreateTelemetryConfigFormGroup() {
		return new FormGroup<TelemetryConfigFormProperties>({
			logFormat: new FormControl<TelemetryConfigLogFormat | null | undefined>(undefined),
		});

	}

	export enum TelemetryConfigLogFormat { LOG_FORMAT_UNSPECIFIED = 'LOG_FORMAT_UNSPECIFIED', LEGACY = 'LEGACY', JSON = 'JSON' }

	export enum ServiceTier { TIER_UNSPECIFIED = 'TIER_UNSPECIFIED', DEVELOPER = 'DEVELOPER', ENTERPRISE = 'ENTERPRISE' }

	export enum BackupState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', DELETING = 'DELETING', ACTIVE = 'ACTIVE', FAILED = 'FAILED', RESTORING = 'RESTORING' }


	/** Associates members, or principals, with a role. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}: A single identity in a workforce identity pool. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}: All workforce identities in a group. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}: All workforce identities with a specific attribute value. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*: All identities in a workforce identity pool. principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}: A single identity in a workload identity pool. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}: A workload identity pool group. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}: All identities in a workload identity pool with a certain attribute. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*: All identities in a workload identity pool. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding. deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}: Deleted single identity in a workforce identity pool. For example, deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value. */
		members?: Array<string>;

		/** Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner. */
		role?: string | null;
	}

	/** Associates members, or principals, with a role. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** A specification of the location of and metadata about a database dump from a relational database management system. */
	export interface DatabaseDump {

		/** The type of the database. */
		databaseType?: DatabaseDumpDatabaseType | null;

		/** A Cloud Storage object or folder URI that specifies the source from which to import metadata. It must begin with gs://. */
		gcsUri?: string | null;

		/** The name of the source database. */
		sourceDatabase?: string | null;

		/** Optional. The type of the database dump. If unspecified, defaults to MYSQL. */
		type?: MetadataExportDatabaseDumpType | null;
	}

	/** A specification of the location of and metadata about a database dump from a relational database management system. */
	export interface DatabaseDumpFormProperties {

		/** The type of the database. */
		databaseType: FormControl<DatabaseDumpDatabaseType | null | undefined>,

		/** A Cloud Storage object or folder URI that specifies the source from which to import metadata. It must begin with gs://. */
		gcsUri: FormControl<string | null | undefined>,

		/** The name of the source database. */
		sourceDatabase: FormControl<string | null | undefined>,

		/** Optional. The type of the database dump. If unspecified, defaults to MYSQL. */
		type: FormControl<MetadataExportDatabaseDumpType | null | undefined>,
	}
	export function CreateDatabaseDumpFormGroup() {
		return new FormGroup<DatabaseDumpFormProperties>({
			databaseType: new FormControl<DatabaseDumpDatabaseType | null | undefined>(undefined),
			gcsUri: new FormControl<string | null | undefined>(undefined),
			sourceDatabase: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MetadataExportDatabaseDumpType | null | undefined>(undefined),
		});

	}

	export enum DatabaseDumpDatabaseType { DATABASE_TYPE_UNSPECIFIED = 'DATABASE_TYPE_UNSPECIFIED', MYSQL = 'MYSQL' }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Error details in public error message for DataprocMetastore.QueryMetadata. */
	export interface ErrorDetails {

		/** Additional structured details about this error.Keys define the failure items. Value describes the exception or details of the item. */
		details?: {[id: string]: string };
	}

	/** Error details in public error message for DataprocMetastore.QueryMetadata. */
	export interface ErrorDetailsFormProperties {

		/** Additional structured details about this error.Keys define the failure items. Value describes the exception or details of the item. */
		details: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			details: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Request message for DataprocMetastore.ExportMetadata. */
	export interface ExportMetadataRequest {

		/** Optional. The type of the database dump. If unspecified, defaults to MYSQL. */
		databaseDumpType?: MetadataExportDatabaseDumpType | null;

		/** A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing exported files will be created below it. */
		destinationGcsFolder?: string | null;

		/** Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. */
		requestId?: string | null;
	}

	/** Request message for DataprocMetastore.ExportMetadata. */
	export interface ExportMetadataRequestFormProperties {

		/** Optional. The type of the database dump. If unspecified, defaults to MYSQL. */
		databaseDumpType: FormControl<MetadataExportDatabaseDumpType | null | undefined>,

		/** A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing exported files will be created below it. */
		destinationGcsFolder: FormControl<string | null | undefined>,

		/** Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateExportMetadataRequestFormGroup() {
		return new FormGroup<ExportMetadataRequestFormProperties>({
			databaseDumpType: new FormControl<MetadataExportDatabaseDumpType | null | undefined>(undefined),
			destinationGcsFolder: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a federation of multiple backend metastores. */
	export interface Federation {

		/** A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number. */
		backendMetastores?: {[id: string]: BackendMetastore };

		/** Output only. The time when the metastore federation was created. */
		createTime?: string | null;

		/** Output only. The federation endpoint. */
		endpointUri?: string | null;

		/** User-defined labels for the metastore federation. */
		labels?: {[id: string]: string };

		/** Immutable. The relative resource name of the federation, of the form: projects/{project_number}/locations/{location_id}/federations/{federation_id}`. */
		name?: string | null;

		/** Output only. The current state of the federation. */
		state?: FederationState | null;

		/** Output only. Additional information about the current state of the metastore federation, if available. */
		stateMessage?: string | null;

		/** Output only. The globally unique resource identifier of the metastore federation. */
		uid?: string | null;

		/** Output only. The time when the metastore federation was last updated. */
		updateTime?: string | null;

		/** Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version. */
		version?: string | null;
	}

	/** Represents a federation of multiple backend metastores. */
	export interface FederationFormProperties {

		/** A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number. */
		backendMetastores: FormControl<{[id: string]: BackendMetastore } | null | undefined>,

		/** Output only. The time when the metastore federation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The federation endpoint. */
		endpointUri: FormControl<string | null | undefined>,

		/** User-defined labels for the metastore federation. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The relative resource name of the federation, of the form: projects/{project_number}/locations/{location_id}/federations/{federation_id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of the federation. */
		state: FormControl<FederationState | null | undefined>,

		/** Output only. Additional information about the current state of the metastore federation, if available. */
		stateMessage: FormControl<string | null | undefined>,

		/** Output only. The globally unique resource identifier of the metastore federation. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the metastore federation was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateFederationFormGroup() {
		return new FormGroup<FederationFormProperties>({
			backendMetastores: new FormControl<{[id: string]: BackendMetastore } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endpointUri: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<FederationState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FederationState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DELETING = 'DELETING', ERROR = 'ERROR' }


	/** A specification of a supported version of the Hive Metastore software. */
	export interface HiveMetastoreVersion {

		/** Whether version will be chosen by the server if a metastore service is created with a HiveMetastoreConfig that omits the version. */
		isDefault?: boolean | null;

		/** The semantic version of the Hive Metastore software. */
		version?: string | null;
	}

	/** A specification of a supported version of the Hive Metastore software. */
	export interface HiveMetastoreVersionFormProperties {

		/** Whether version will be chosen by the server if a metastore service is created with a HiveMetastoreConfig that omits the version. */
		isDefault: FormControl<boolean | null | undefined>,

		/** The semantic version of the Hive Metastore software. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateHiveMetastoreVersionFormGroup() {
		return new FormGroup<HiveMetastoreVersionFormProperties>({
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for DataprocMetastore.ListBackups. */
	export interface ListBackupsResponse {

		/** The backups of the specified service. */
		backups?: Array<Backup>;

		/** A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for DataprocMetastore.ListBackups. */
	export interface ListBackupsResponseFormProperties {

		/** A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupsResponseFormGroup() {
		return new FormGroup<ListBackupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListFederations */
	export interface ListFederationsResponse {

		/** The services in the specified location. */
		federations?: Array<Federation>;

		/** A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for ListFederations */
	export interface ListFederationsResponseFormProperties {

		/** A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFederationsResponseFormGroup() {
		return new FormGroup<ListFederationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: "us-east1". */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1" */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: "us-east1". */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for DataprocMetastore.ListMetadataImports. */
	export interface ListMetadataImportsResponse {

		/** The imports in the specified service. */
		metadataImports?: Array<MetadataImport>;

		/** A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for DataprocMetastore.ListMetadataImports. */
	export interface ListMetadataImportsResponseFormProperties {

		/** A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMetadataImportsResponseFormGroup() {
		return new FormGroup<ListMetadataImportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A metastore resource that imports metadata. */
	export interface MetadataImport {

		/** Output only. The time when the metadata import was started. */
		createTime?: string | null;

		/** A specification of the location of and metadata about a database dump from a relational database management system. */
		databaseDump?: DatabaseDump;

		/** The description of the metadata import. */
		description?: string | null;

		/** Output only. The time when the metadata import finished. */
		endTime?: string | null;

		/** Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}. */
		name?: string | null;

		/** Output only. The current state of the metadata import. */
		state?: MetadataImportState | null;

		/** Output only. The time when the metadata import was last updated. */
		updateTime?: string | null;
	}

	/** A metastore resource that imports metadata. */
	export interface MetadataImportFormProperties {

		/** Output only. The time when the metadata import was started. */
		createTime: FormControl<string | null | undefined>,

		/** The description of the metadata import. */
		description: FormControl<string | null | undefined>,

		/** Output only. The time when the metadata import finished. */
		endTime: FormControl<string | null | undefined>,

		/** Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of the metadata import. */
		state: FormControl<MetadataImportState | null | undefined>,

		/** Output only. The time when the metadata import was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMetadataImportFormGroup() {
		return new FormGroup<MetadataImportFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MetadataImportState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MetadataImportState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', UPDATING = 'UPDATING', FAILED = 'FAILED' }


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done?: boolean | null;

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for DataprocMetastore.ListServices. */
	export interface ListServicesResponse {

		/** A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The services in the specified location. */
		services?: Array<Service>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for DataprocMetastore.ListServices. */
	export interface ListServicesResponseFormProperties {

		/** A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about the service in a location. */
	export interface LocationMetadata {

		/** The metadata for the multi-region that includes the constituent regions. The metadata is only populated if the region is multi-region. For single region, it will be empty. */
		multiRegionMetadata?: MultiRegionMetadata;

		/** The versions of Hive Metastore that can be used when creating a new metastore service in this location. The server guarantees that exactly one HiveMetastoreVersion in the list will set is_default. */
		supportedHiveMetastoreVersions?: Array<HiveMetastoreVersion>;
	}

	/** Metadata about the service in a location. */
	export interface LocationMetadataFormProperties {
	}
	export function CreateLocationMetadataFormGroup() {
		return new FormGroup<LocationMetadataFormProperties>({
		});

	}


	/** The metadata for the multi-region that includes the constituent regions. The metadata is only populated if the region is multi-region. For single region, it will be empty. */
	export interface MultiRegionMetadata {

		/** The regions constituting the multi-region. */
		constituentRegions?: Array<string>;
	}

	/** The metadata for the multi-region that includes the constituent regions. The metadata is only populated if the region is multi-region. For single region, it will be empty. */
	export interface MultiRegionMetadataFormProperties {
	}
	export function CreateMultiRegionMetadataFormGroup() {
		return new FormGroup<MultiRegionMetadataFormProperties>({
		});

	}


	/** Request message for DataprocMetastore.MoveTableToDatabase. */
	export interface MoveTableToDatabaseRequest {

		/** Required. The name of the database where the table resides. */
		dbName?: string | null;

		/** Required. The name of the database where the table should be moved. */
		destinationDbName?: string | null;

		/** Required. The name of the table to be moved. */
		tableName?: string | null;
	}

	/** Request message for DataprocMetastore.MoveTableToDatabase. */
	export interface MoveTableToDatabaseRequestFormProperties {

		/** Required. The name of the database where the table resides. */
		dbName: FormControl<string | null | undefined>,

		/** Required. The name of the database where the table should be moved. */
		destinationDbName: FormControl<string | null | undefined>,

		/** Required. The name of the table to be moved. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateMoveTableToDatabaseRequestFormGroup() {
		return new FormGroup<MoveTableToDatabaseRequestFormProperties>({
			dbName: new FormControl<string | null | undefined>(undefined),
			destinationDbName: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for DataprocMetastore.MoveTableToDatabase. */
	export interface MoveTableToDatabaseResponse {
	}

	/** Response message for DataprocMetastore.MoveTableToDatabase. */
	export interface MoveTableToDatabaseResponseFormProperties {
	}
	export function CreateMoveTableToDatabaseResponseFormGroup() {
		return new FormGroup<MoveTableToDatabaseResponseFormProperties>({
		});

	}


	/** Represents the metadata of a long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the caller has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of a long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the caller has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

		/** Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy. */
		bindings?: Array<Binding>;

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for DataprocMetastore.QueryMetadata. */
	export interface QueryMetadataRequest {

		/** Required. A read-only SQL query to execute against the metadata database. The query cannot change or mutate the data. */
		query?: string | null;
	}

	/** Request message for DataprocMetastore.QueryMetadata. */
	export interface QueryMetadataRequestFormProperties {

		/** Required. A read-only SQL query to execute against the metadata database. The query cannot change or mutate the data. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateQueryMetadataRequestFormGroup() {
		return new FormGroup<QueryMetadataRequestFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for DataprocMetastore.QueryMetadata. */
	export interface QueryMetadataResponse {

		/** The manifest URI is link to a JSON instance in Cloud Storage. This instance manifests immediately along with QueryMetadataResponse. The content of the URI is not retriable until the long-running operation query against the metadata finishes. */
		resultManifestUri?: string | null;
	}

	/** Response message for DataprocMetastore.QueryMetadata. */
	export interface QueryMetadataResponseFormProperties {

		/** The manifest URI is link to a JSON instance in Cloud Storage. This instance manifests immediately along with QueryMetadataResponse. The content of the URI is not retriable until the long-running operation query against the metadata finishes. */
		resultManifestUri: FormControl<string | null | undefined>,
	}
	export function CreateQueryMetadataResponseFormGroup() {
		return new FormGroup<QueryMetadataResponseFormProperties>({
			resultManifestUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for DataprocMetastore.Restore. */
	export interface RestoreServiceRequest {

		/** Required. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}. */
		backup?: string | null;

		/** Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. */
		requestId?: string | null;

		/** Optional. The type of restore. If unspecified, defaults to METADATA_ONLY. */
		restoreType?: RestoreType | null;
	}

	/** Request message for DataprocMetastore.Restore. */
	export interface RestoreServiceRequestFormProperties {

		/** Required. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}. */
		backup: FormControl<string | null | undefined>,

		/** Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. */
		requestId: FormControl<string | null | undefined>,

		/** Optional. The type of restore. If unspecified, defaults to METADATA_ONLY. */
		restoreType: FormControl<RestoreType | null | undefined>,
	}
	export function CreateRestoreServiceRequestFormGroup() {
		return new FormGroup<RestoreServiceRequestFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			restoreType: new FormControl<RestoreType | null | undefined>(undefined),
		});

	}


	/** Request message for SetIamPolicy method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag" */
		updateMask?: string | null;
	}

	/** Request message for SetIamPolicy method. */
	export interface SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag" */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for TestIamPermissions method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for TestIamPermissions method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for TestIamPermissions method. */
	export interface TestIamPermissionsResponse {

		/** A subset of TestPermissionsRequest.permissions that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for TestIamPermissions method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a single backup.
		 * Delete v1/{name}
		 * @param {string} name Required. The relative resource name of the backup to delete, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}.
		 * @param {string} requestId Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_backups_delete(name: string, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets details of a single import.
		 * Get v1/{name}
		 * @param {string} name Required. The relative resource name of the metadata import to retrieve, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{import_id}.
		 * @return {MetadataImport} Successful response
		 */
		Metastore_projects_locations_services_metadataImports_get(name: string): Observable<MetadataImport> {
			return this.http.get<MetadataImport>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a single import. Only the description field of MetadataImport is supported to be updated.
		 * Patch v1/{name}
		 * @param {string} name Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.
		 * @param {string} requestId Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
		 * @param {string} updateMask Required. A field mask used to specify the fields to be overwritten in the metadata import resource by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_metadataImports_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: MetadataImport): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Metastore_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Metastore_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Metastore_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists backups in a service.
		 * Get v1/{parent}/backups
		 * @param {string} parent Required. The relative resource name of the service whose backups to list, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups.
		 * @param {string} filter Optional. The filter to apply to list results.
		 * @param {string} orderBy Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.
		 * @param {number} pageSize Optional. The maximum number of backups to return. The response may contain less than the maximum number. If unspecified, no more than 500 backups are returned. The maximum value is 1000; values above 1000 are changed to 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous DataprocMetastore.ListBackups call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListBackups must match the call that provided the page token.
		 * @return {ListBackupsResponse} Successful response
		 */
		Metastore_projects_locations_services_backups_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBackupsResponse> {
			return this.http.get<ListBackupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new backup in a given project and location.
		 * Post v1/{parent}/backups
		 * @param {string} parent Required. The relative resource name of the service in which to create a backup of the following form:projects/{project_number}/locations/{location_id}/services/{service_id}.
		 * @param {string} backupId Required. The ID of the backup, which is used as the final component of the backup's name.This value must be between 1 and 64 characters long, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.
		 * @param {string} requestId Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_backups_create(parent: string, backupId: string | null | undefined, requestId: string | null | undefined, requestBody: Backup): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&backupId=' + (backupId == null ? '' : encodeURIComponent(backupId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists federations in a project and location.
		 * Get v1/{parent}/federations
		 * @param {string} parent Required. The relative resource name of the location of metastore federations to list, in the following form: projects/{project_number}/locations/{location_id}.
		 * @param {string} filter Optional. The filter to apply to list results.
		 * @param {string} orderBy Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.
		 * @param {number} pageSize Optional. The maximum number of federations to return. The response may contain less than the maximum number. If unspecified, no more than 500 services are returned. The maximum value is 1000; values above 1000 are changed to 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous ListFederationServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to ListFederationServices must match the call that provided the page token.
		 * @return {ListFederationsResponse} Successful response
		 */
		Metastore_projects_locations_federations_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFederationsResponse> {
			return this.http.get<ListFederationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/federations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a metastore federation in a project and location.
		 * Post v1/{parent}/federations
		 * @param {string} parent Required. The relative resource name of the location in which to create a federation service, in the following form:projects/{project_number}/locations/{location_id}.
		 * @param {string} federationId Required. The ID of the metastore federation, which is used as the final component of the metastore federation's name.This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.
		 * @param {string} requestId Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_federations_create(parent: string, federationId: string | null | undefined, requestId: string | null | undefined, requestBody: Federation): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/federations&federationId=' + (federationId == null ? '' : encodeURIComponent(federationId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists imports in a service.
		 * Get v1/{parent}/metadataImports
		 * @param {string} parent Required. The relative resource name of the service whose metadata imports to list, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports.
		 * @param {string} filter Optional. The filter to apply to list results.
		 * @param {string} orderBy Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.
		 * @param {number} pageSize Optional. The maximum number of imports to return. The response may contain less than the maximum number. If unspecified, no more than 500 imports are returned. The maximum value is 1000; values above 1000 are changed to 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListServices must match the call that provided the page token.
		 * @return {ListMetadataImportsResponse} Successful response
		 */
		Metastore_projects_locations_services_metadataImports_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMetadataImportsResponse> {
			return this.http.get<ListMetadataImportsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/metadataImports&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new MetadataImport in a given project and location.
		 * Post v1/{parent}/metadataImports
		 * @param {string} parent Required. The relative resource name of the service in which to create a metastore import, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}.
		 * @param {string} metadataImportId Required. The ID of the metadata import, which is used as the final component of the metadata import's name.This value must be between 1 and 64 characters long, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.
		 * @param {string} requestId Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_metadataImports_create(parent: string, metadataImportId: string | null | undefined, requestId: string | null | undefined, requestBody: MetadataImport): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/metadataImports&metadataImportId=' + (metadataImportId == null ? '' : encodeURIComponent(metadataImportId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists services in a project and location.
		 * Get v1/{parent}/services
		 * @param {string} parent Required. The relative resource name of the location of metastore services to list, in the following form:projects/{project_number}/locations/{location_id}.
		 * @param {string} filter Optional. The filter to apply to list results.
		 * @param {string} orderBy Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.
		 * @param {number} pageSize Optional. The maximum number of services to return. The response may contain less than the maximum number. If unspecified, no more than 500 services are returned. The maximum value is 1000; values above 1000 are changed to 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListServices must match the call that provided the page token.
		 * @return {ListServicesResponse} Successful response
		 */
		Metastore_projects_locations_services_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServicesResponse> {
			return this.http.get<ListServicesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a metastore service in a project and location.
		 * Post v1/{parent}/services
		 * @param {string} parent Required. The relative resource name of the location in which to create a metastore service, in the following form:projects/{project_number}/locations/{location_id}.
		 * @param {string} requestId Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
		 * @param {string} serviceId Required. The ID of the metastore service, which is used as the final component of the metastore service's name.This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_create(parent: string, requestId: string | null | undefined, serviceId: string | null | undefined, requestBody: Service): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Metastore_projects_locations_services_backups_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Metastore_projects_locations_services_backups_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Metastore_projects_locations_services_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.
		 * Post v1/{service}:alterLocation
		 * @param {string} service Required. The relative resource name of the metastore service to mutate metadata, in the following format:projects/{project_id}/locations/{location_id}/services/{service_id}.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_alterLocation(service: string, requestBody: AlterMetadataResourceLocationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (service == null ? '' : encodeURIComponent(service)) + ':alterLocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Alter metadata table properties.
		 * Post v1/{service}:alterTableProperties
		 * @param {string} service Required. The relative resource name of the Dataproc Metastore service that's being used to mutate metadata table properties, in the following format:projects/{project_id}/locations/{location_id}/services/{service_id}.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_alterTableProperties(service: string, requestBody: AlterTablePropertiesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (service == null ? '' : encodeURIComponent(service)) + ':alterTableProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports metadata from a service.
		 * Post v1/{service}:exportMetadata
		 * @param {string} service Required. The relative resource name of the metastore service to run export, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_exportMetadata(service: string, requestBody: ExportMetadataRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (service == null ? '' : encodeURIComponent(service)) + ':exportMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Move a table to another database.
		 * Post v1/{service}:moveTableToDatabase
		 * @param {string} service Required. The relative resource name of the metastore service to mutate metadata, in the following format:projects/{project_id}/locations/{location_id}/services/{service_id}.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_moveTableToDatabase(service: string, requestBody: MoveTableToDatabaseRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (service == null ? '' : encodeURIComponent(service)) + ':moveTableToDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query DPMS metadata.
		 * Post v1/{service}:queryMetadata
		 * @param {string} service Required. The relative resource name of the metastore service to query metadata, in the following format:projects/{project_id}/locations/{location_id}/services/{service_id}.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_queryMetadata(service: string, requestBody: QueryMetadataRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (service == null ? '' : encodeURIComponent(service)) + ':queryMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a service from a backup.
		 * Post v1/{service}:restore
		 * @param {string} service Required. The relative resource name of the metastore service to run restore, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}.
		 * @return {Operation} Successful response
		 */
		Metastore_projects_locations_services_restore(service: string, requestBody: RestoreServiceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (service == null ? '' : encodeURIComponent(service)) + ':restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

