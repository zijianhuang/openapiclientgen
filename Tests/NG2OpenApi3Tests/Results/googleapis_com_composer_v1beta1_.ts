import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Allowed IP range with user-provided description. */
	export interface AllowedIpRange {

		/** Optional. User-provided description. It must contain at most 300 characters. */
		description?: string | null;

		/** IP address or range, defined using CIDR notation, of requests that this rule applies to. Examples: `192.168.1.1` or `192.168.0.0/16` or `2001:db8::/32` or `2001:0db8:0000:0042:0000:8a2e:0370:7334`. IP range prefixes should be properly truncated. For example, `1.2.3.4/24` should be truncated to `1.2.3.0/24`. Similarly, for IPv6, `2001:db8::1/32` should be truncated to `2001:db8::/32`. */
		value?: string | null;
	}

	/** Allowed IP range with user-provided description. */
	export interface AllowedIpRangeFormProperties {

		/** Optional. User-provided description. It must contain at most 300 characters. */
		description: FormControl<string | null | undefined>,

		/** IP address or range, defined using CIDR notation, of requests that this rule applies to. Examples: `192.168.1.1` or `192.168.0.0/16` or `2001:db8::/32` or `2001:0db8:0000:0042:0000:8a2e:0370:7334`. IP range prefixes should be properly truncated. For example, `1.2.3.4/24` should be truncated to `1.2.3.0/24`. Similarly, for IPv6, `2001:db8::1/32` should be truncated to `2001:db8::/32`. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAllowedIpRangeFormGroup() {
		return new FormGroup<AllowedIpRangeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to check whether image upgrade will succeed. */
	export interface CheckUpgradeRequest {

		/** The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression `composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?)`. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or `latest`. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview). */
		imageVersion?: string | null;
	}

	/** Request to check whether image upgrade will succeed. */
	export interface CheckUpgradeRequestFormProperties {

		/** The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression `composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?)`. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or `latest`. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview). */
		imageVersion: FormControl<string | null | undefined>,
	}
	export function CreateCheckUpgradeRequestFormGroup() {
		return new FormGroup<CheckUpgradeRequestFormProperties>({
			imageVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing information about the result of an upgrade check operation. */
	export interface CheckUpgradeResponse {

		/** Output only. Url for a docker build log of an upgraded image. */
		buildLogUri?: string | null;

		/** Output only. Whether build has succeeded or failed on modules conflicts. */
		containsPypiModulesConflict?: CheckUpgradeResponseContainsPypiModulesConflict | null;

		/** Composer image for which the build was happening. */
		imageVersion?: string | null;

		/** Output only. Extract from a docker image build log containing information about pypi modules conflicts. */
		pypiConflictBuildLogExtract?: string | null;

		/** Pypi dependencies specified in the environment configuration, at the time when the build was triggered. */
		pypiDependencies?: {[id: string]: string };
	}

	/** Message containing information about the result of an upgrade check operation. */
	export interface CheckUpgradeResponseFormProperties {

		/** Output only. Url for a docker build log of an upgraded image. */
		buildLogUri: FormControl<string | null | undefined>,

		/** Output only. Whether build has succeeded or failed on modules conflicts. */
		containsPypiModulesConflict: FormControl<CheckUpgradeResponseContainsPypiModulesConflict | null | undefined>,

		/** Composer image for which the build was happening. */
		imageVersion: FormControl<string | null | undefined>,

		/** Output only. Extract from a docker image build log containing information about pypi modules conflicts. */
		pypiConflictBuildLogExtract: FormControl<string | null | undefined>,

		/** Pypi dependencies specified in the environment configuration, at the time when the build was triggered. */
		pypiDependencies: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCheckUpgradeResponseFormGroup() {
		return new FormGroup<CheckUpgradeResponseFormProperties>({
			buildLogUri: new FormControl<string | null | undefined>(undefined),
			containsPypiModulesConflict: new FormControl<CheckUpgradeResponseContainsPypiModulesConflict | null | undefined>(undefined),
			imageVersion: new FormControl<string | null | undefined>(undefined),
			pypiConflictBuildLogExtract: new FormControl<string | null | undefined>(undefined),
			pypiDependencies: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum CheckUpgradeResponseContainsPypiModulesConflict { CONFLICT_RESULT_UNSPECIFIED = 0, CONFLICT = 1, NO_CONFLICT = 2 }


	/** CIDR block with an optional name. */
	export interface CidrBlock {

		/** CIDR block that must be specified in CIDR notation. */
		cidrBlock?: string | null;

		/** User-defined name that identifies the CIDR block. */
		displayName?: string | null;
	}

	/** CIDR block with an optional name. */
	export interface CidrBlockFormProperties {

		/** CIDR block that must be specified in CIDR notation. */
		cidrBlock: FormControl<string | null | undefined>,

		/** User-defined name that identifies the CIDR block. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateCidrBlockFormGroup() {
		return new FormGroup<CidrBlockFormProperties>({
			cidrBlock: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for Cloud Data Lineage integration. */
	export interface CloudDataLineageIntegration {

		/** Optional. Whether or not Cloud Data Lineage integration is enabled. */
		enabled?: boolean | null;
	}

	/** Configuration for Cloud Data Lineage integration. */
	export interface CloudDataLineageIntegrationFormProperties {

		/** Optional. Whether or not Cloud Data Lineage integration is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCloudDataLineageIntegrationFormGroup() {
		return new FormGroup<CloudDataLineageIntegrationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for resources used by Airflow DAG processors. */
	export interface DagProcessorResource {

		/** Optional. The number of DAG processors. If not provided or set to 0, a single DAG processor instance will be created. */
		count?: number | null;

		/** Optional. CPU request and limit for a single Airflow DAG processor replica. */
		cpu?: number | null;

		/** Optional. Memory (GB) request and limit for a single Airflow DAG processor replica. */
		memoryGb?: number | null;

		/** Optional. Storage (GB) request and limit for a single Airflow DAG processor replica. */
		storageGb?: number | null;
	}

	/** Configuration for resources used by Airflow DAG processors. */
	export interface DagProcessorResourceFormProperties {

		/** Optional. The number of DAG processors. If not provided or set to 0, a single DAG processor instance will be created. */
		count: FormControl<number | null | undefined>,

		/** Optional. CPU request and limit for a single Airflow DAG processor replica. */
		cpu: FormControl<number | null | undefined>,

		/** Optional. Memory (GB) request and limit for a single Airflow DAG processor replica. */
		memoryGb: FormControl<number | null | undefined>,

		/** Optional. Storage (GB) request and limit for a single Airflow DAG processor replica. */
		storageGb: FormControl<number | null | undefined>,
	}
	export function CreateDagProcessorResourceFormGroup() {
		return new FormGroup<DagProcessorResourceFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			cpu: new FormControl<number | null | undefined>(undefined),
			memoryGb: new FormControl<number | null | undefined>(undefined),
			storageGb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration setting for Airflow database data retention mechanism. */
	export interface DataRetentionConfig {

		/** The configuration setting for Task Logs. */
		taskLogsRetentionConfig?: TaskLogsRetentionConfig;
	}

	/** The configuration setting for Airflow database data retention mechanism. */
	export interface DataRetentionConfigFormProperties {
	}
	export function CreateDataRetentionConfigFormGroup() {
		return new FormGroup<DataRetentionConfigFormProperties>({
		});

	}


	/** The configuration setting for Task Logs. */
	export interface TaskLogsRetentionConfig {

		/** Optional. The mode of storage for Airflow workers task logs. For details, see go/composer-store-task-logs-in-cloud-logging-only-design-doc */
		storageMode?: TaskLogsRetentionConfigStorageMode | null;
	}

	/** The configuration setting for Task Logs. */
	export interface TaskLogsRetentionConfigFormProperties {

		/** Optional. The mode of storage for Airflow workers task logs. For details, see go/composer-store-task-logs-in-cloud-logging-only-design-doc */
		storageMode: FormControl<TaskLogsRetentionConfigStorageMode | null | undefined>,
	}
	export function CreateTaskLogsRetentionConfigFormGroup() {
		return new FormGroup<TaskLogsRetentionConfigFormProperties>({
			storageMode: new FormControl<TaskLogsRetentionConfigStorageMode | null | undefined>(undefined),
		});

	}

	export enum TaskLogsRetentionConfigStorageMode { TASK_LOGS_STORAGE_MODE_UNSPECIFIED = 0, CLOUD_LOGGING_AND_CLOUD_STORAGE = 1, CLOUD_LOGGING_ONLY = 2 }


	/** The configuration of Cloud SQL instance that is used by the Apache Airflow software. */
	export interface DatabaseConfig {

		/** Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		machineType?: string | null;

		/** Optional. The Compute Engine zone where the Airflow database is created. If zone is provided, it must be in the region selected for the environment. If zone is not provided, a zone is automatically selected. The zone can only be set during environment creation. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.*. */
		zone?: string | null;
	}

	/** The configuration of Cloud SQL instance that is used by the Apache Airflow software. */
	export interface DatabaseConfigFormProperties {

		/** Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		machineType: FormControl<string | null | undefined>,

		/** Optional. The Compute Engine zone where the Airflow database is created. If zone is provided, it must be in the region selected for the environment. If zone is not provided, a zone is automatically selected. The zone can only be set during environment creation. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.*. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseConfigFormGroup() {
		return new FormGroup<DatabaseConfigFormProperties>({
			machineType: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to trigger database failover (only for highly resilient environments). */
	export interface DatabaseFailoverRequest {
	}

	/** Request to trigger database failover (only for highly resilient environments). */
	export interface DatabaseFailoverRequestFormProperties {
	}
	export function CreateDatabaseFailoverRequestFormGroup() {
		return new FormGroup<DatabaseFailoverRequestFormProperties>({
		});

	}


	/** Response for DatabaseFailoverRequest. */
	export interface DatabaseFailoverResponse {
	}

	/** Response for DatabaseFailoverRequest. */
	export interface DatabaseFailoverResponseFormProperties {
	}
	export function CreateDatabaseFailoverResponseFormGroup() {
		return new FormGroup<DatabaseFailoverResponseFormProperties>({
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** The encryption options for the Cloud Composer environment and its dependencies. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
	export interface EncryptionConfig {

		/** Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. If not specified, Google-managed key will be used. */
		kmsKeyName?: string | null;
	}

	/** The encryption options for the Cloud Composer environment and its dependencies. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
	export interface EncryptionConfigFormProperties {

		/** Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. If not specified, Google-managed key will be used. */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An environment for running orchestration tasks. */
	export interface Environment {

		/** Configuration information for an environment. */
		config?: EnvironmentConfig;

		/** Output only. The time at which this environment was created. */
		createTime?: string | null;

		/** Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size. */
		labels?: {[id: string]: string };

		/** The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. */
		name?: string | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** The current state of the environment. */
		state?: EnvironmentState | null;

		/** The configuration for data storage in the environment. */
		storageConfig?: StorageConfig;

		/** Output only. The time at which this environment was last modified. */
		updateTime?: string | null;

		/** Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created. */
		uuid?: string | null;
	}

	/** An environment for running orchestration tasks. */
	export interface EnvironmentFormProperties {

		/** Output only. The time at which this environment was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. */
		name: FormControl<string | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** The current state of the environment. */
		state: FormControl<EnvironmentState | null | undefined>,

		/** Output only. The time at which this environment was last modified. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created. */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<EnvironmentState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information for an environment. */
	export interface EnvironmentConfig {

		/** Output only. The 'bring your own identity' variant of the URI of the Apache Airflow Web UI hosted within this environment, to be accessed with external identities using workforce identity federation (see [Access environments with workforce identity federation](/composer/docs/composer-2/access-environments-with-workforce-identity-federation)). */
		airflowByoidUri?: string | null;

		/** Output only. The URI of the Apache Airflow Web UI hosted within this environment (see [Airflow web interface](/composer/docs/how-to/accessing/airflow-web-interface)). */
		airflowUri?: string | null;

		/** Output only. The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using "/"-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with the given prefix. */
		dagGcsPrefix?: string | null;

		/** The configuration setting for Airflow database data retention mechanism. */
		dataRetentionConfig?: DataRetentionConfig;

		/** The configuration of Cloud SQL instance that is used by the Apache Airflow software. */
		databaseConfig?: DatabaseConfig;

		/** The encryption options for the Cloud Composer environment and its dependencies. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		encryptionConfig?: EncryptionConfig;

		/** Optional. The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. */
		environmentSize?: EnvironmentConfigEnvironmentSize | null;

		/** Output only. The Kubernetes Engine cluster used to run this environment. */
		gkeCluster?: string | null;

		/** The configuration settings for Cloud Composer maintenance window. The following example: ``` { "startTime":"2019-08-01T01:00:00Z" "endTime":"2019-08-01T07:00:00Z" "recurrence":"FREQ=WEEKLY;BYDAY=TU,WE" } ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday. */
		maintenanceWindow?: MaintenanceWindow;

		/** Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs. */
		masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

		/** The configuration information for the Kubernetes Engine nodes running the Apache Airflow software. */
		nodeConfig?: NodeConfig;

		/** The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		nodeCount?: number | null;

		/** The configuration information for configuring a Private IP Cloud Composer environment. */
		privateEnvironmentConfig?: PrivateEnvironmentConfig;

		/** The Recovery settings of an environment. */
		recoveryConfig?: RecoveryConfig;

		/** Optional. Resilience mode of the Cloud Composer Environment. This field is supported for Cloud Composer environments in versions composer-2.2.0-airflow-*.*.* and newer. */
		resilienceMode?: EnvironmentConfigResilienceMode | null;

		/** Specifies the selection and configuration of software inside the environment. */
		softwareConfig?: SoftwareConfig;

		/** The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		webServerConfig?: WebServerConfig;

		/** Network-level access control policy for the Airflow web server. */
		webServerNetworkAccessControl?: WebServerNetworkAccessControl;

		/** The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. */
		workloadsConfig?: WorkloadsConfig;
	}

	/** Configuration information for an environment. */
	export interface EnvironmentConfigFormProperties {

		/** Output only. The 'bring your own identity' variant of the URI of the Apache Airflow Web UI hosted within this environment, to be accessed with external identities using workforce identity federation (see [Access environments with workforce identity federation](/composer/docs/composer-2/access-environments-with-workforce-identity-federation)). */
		airflowByoidUri: FormControl<string | null | undefined>,

		/** Output only. The URI of the Apache Airflow Web UI hosted within this environment (see [Airflow web interface](/composer/docs/how-to/accessing/airflow-web-interface)). */
		airflowUri: FormControl<string | null | undefined>,

		/** Output only. The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using "/"-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with the given prefix. */
		dagGcsPrefix: FormControl<string | null | undefined>,

		/** Optional. The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. */
		environmentSize: FormControl<EnvironmentConfigEnvironmentSize | null | undefined>,

		/** Output only. The Kubernetes Engine cluster used to run this environment. */
		gkeCluster: FormControl<string | null | undefined>,

		/** The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		nodeCount: FormControl<number | null | undefined>,

		/** Optional. Resilience mode of the Cloud Composer Environment. This field is supported for Cloud Composer environments in versions composer-2.2.0-airflow-*.*.* and newer. */
		resilienceMode: FormControl<EnvironmentConfigResilienceMode | null | undefined>,
	}
	export function CreateEnvironmentConfigFormGroup() {
		return new FormGroup<EnvironmentConfigFormProperties>({
			airflowByoidUri: new FormControl<string | null | undefined>(undefined),
			airflowUri: new FormControl<string | null | undefined>(undefined),
			dagGcsPrefix: new FormControl<string | null | undefined>(undefined),
			environmentSize: new FormControl<EnvironmentConfigEnvironmentSize | null | undefined>(undefined),
			gkeCluster: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
			resilienceMode: new FormControl<EnvironmentConfigResilienceMode | null | undefined>(undefined),
		});

	}

	export enum EnvironmentConfigEnvironmentSize { ENVIRONMENT_SIZE_UNSPECIFIED = 0, ENVIRONMENT_SIZE_SMALL = 1, ENVIRONMENT_SIZE_MEDIUM = 2, ENVIRONMENT_SIZE_LARGE = 3 }


	/** The configuration settings for Cloud Composer maintenance window. The following example: ``` { "startTime":"2019-08-01T01:00:00Z" "endTime":"2019-08-01T07:00:00Z" "recurrence":"FREQ=WEEKLY;BYDAY=TU,WE" } ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday. */
	export interface MaintenanceWindow {

		/** Required. Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end_time must be in the future, relative to `start_time`. */
		endTime?: string | null;

		/** Required. Maintenance window recurrence. Format is a subset of [RFC-5545](https://tools.ietf.org/html/rfc5545) `RRULE`. The only allowed values for `FREQ` field are `FREQ=DAILY` and `FREQ=WEEKLY;BYDAY=...` Example values: `FREQ=WEEKLY;BYDAY=TU,WE`, `FREQ=DAILY`. */
		recurrence?: string | null;

		/** Required. Start time of the first recurrence of the maintenance window. */
		startTime?: string | null;
	}

	/** The configuration settings for Cloud Composer maintenance window. The following example: ``` { "startTime":"2019-08-01T01:00:00Z" "endTime":"2019-08-01T07:00:00Z" "recurrence":"FREQ=WEEKLY;BYDAY=TU,WE" } ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday. */
	export interface MaintenanceWindowFormProperties {

		/** Required. Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end_time must be in the future, relative to `start_time`. */
		endTime: FormControl<string | null | undefined>,

		/** Required. Maintenance window recurrence. Format is a subset of [RFC-5545](https://tools.ietf.org/html/rfc5545) `RRULE`. The only allowed values for `FREQ` field are `FREQ=DAILY` and `FREQ=WEEKLY;BYDAY=...` Example values: `FREQ=WEEKLY;BYDAY=TU,WE`, `FREQ=DAILY`. */
		recurrence: FormControl<string | null | undefined>,

		/** Required. Start time of the first recurrence of the maintenance window. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			recurrence: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs. */
	export interface MasterAuthorizedNetworksConfig {

		/** Up to 50 external networks that could access Kubernetes master through HTTPS. */
		cidrBlocks?: Array<CidrBlock>;

		/** Whether or not master authorized networks feature is enabled. */
		enabled?: boolean | null;
	}

	/** Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs. */
	export interface MasterAuthorizedNetworksConfigFormProperties {

		/** Whether or not master authorized networks feature is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateMasterAuthorizedNetworksConfigFormGroup() {
		return new FormGroup<MasterAuthorizedNetworksConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The configuration information for the Kubernetes Engine nodes running the Apache Airflow software. */
	export interface NodeConfig {

		/** Optional. The IP range in CIDR notation to use internally by Cloud Composer. IP addresses are not reserved - and the same range can be used by multiple Cloud Composer environments. In case of overlap, IPs from this range will not be accessible in the user's VPC network. Cannot be updated. If not specified, the default value of '100.64.128.0/20' is used. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. */
		composerInternalIpv4CidrBlock?: string | null;

		/** Optional. Network Attachment that Cloud Composer environment is connected to, which provides connectivity with a user's VPC network. Takes precedence over network and subnetwork settings. If not provided, but network and subnetwork are defined during environment, it will be provisioned. If not provided and network and subnetwork are also empty, then connectivity to user's VPC network is disabled. Network attachment must be provided in format projects/{project}/regions/{region}/networkAttachments/{networkAttachment}. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. */
		composerNetworkAttachment?: string | null;

		/** Optional. The disk size in GB used for node VMs. Minimum size is 30GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		diskSizeGb?: number | null;

		/** Optional. Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent */
		enableIpMasqAgent?: boolean | null;

		/** Configuration for controlling how IPs are allocated in the GKE cluster. */
		ipAllocationPolicy?: IPAllocationPolicy;

		/** Optional. The Compute Engine [zone](/compute/docs/regions-zones) in which to deploy the VMs used to run the Apache Airflow software, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/zones/{zoneId}". This `location` must belong to the enclosing environment's project and location. If both this field and `nodeConfig.machineType` are specified, `nodeConfig.machineType` must belong to this `location`; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If only one field (`location` or `nodeConfig.machineType`) is specified, the location information from the specified field will be propagated to the unspecified field. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		location?: string | null;

		/** Optional. The Compute Engine [machine type](/compute/docs/machine-types) used for cluster instances, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/zones/{zoneId}/machineTypes/{machineTypeId}". The `machineType` must belong to the enclosing environment's project and location. If both this field and `nodeConfig.location` are specified, this `machineType` must belong to the `nodeConfig.location`; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If exactly one of this field and `nodeConfig.location` is specified, the location information from the specified field will be propagated to the unspecified field. The `machineTypeId` must not be a [shared-core machine type](/compute/docs/machine-types#sharedcore). If this field is unspecified, the `machineTypeId` defaults to "n1-standard-1". This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		machineType?: string | null;

		/** Optional. The maximum number of pods per node in the Cloud Composer GKE cluster. The value must be between 8 and 110 and it can be set only if the environment is VPC-native. The default value is 32. Values of this field will be propagated both to the `default-pool` node pool of the newly created GKE cluster, and to the default "Maximum Pods per Node" value which is used for newly created node pools if their value is not explicitly set during node pool creation. For more information, see [Optimizing IP address allocation] (https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr). Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		maxPodsPerNode?: number | null;

		/** Optional. The Compute Engine network to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/global/networks/{networkId}". If unspecified, the default network in the environment's project is used. If a [Custom Subnet Network](/vpc/docs/vpc#vpc_networks_and_subnets) is provided, `nodeConfig.subnetwork` must also be provided. For [Shared VPC](/vpc/docs/shared-vpc) subnetwork requirements, see `nodeConfig.subnetwork`. */
		network?: string | null;

		/** Optional. The set of Google API scopes to be made available on all node VMs. If `oauth_scopes` is empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		oauthScopes?: Array<string>;

		/** Optional. The Google Cloud Platform Service Account to be used by the workloads. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. */
		serviceAccount?: string | null;

		/** Optional. The Compute Engine subnetwork to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}" If a subnetwork is provided, `nodeConfig.network` must also be provided, and the subnetwork must belong to the enclosing environment's project and location. */
		subnetwork?: string | null;

		/** Optional. The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Cannot be updated. */
		tags?: Array<string>;
	}

	/** The configuration information for the Kubernetes Engine nodes running the Apache Airflow software. */
	export interface NodeConfigFormProperties {

		/** Optional. The IP range in CIDR notation to use internally by Cloud Composer. IP addresses are not reserved - and the same range can be used by multiple Cloud Composer environments. In case of overlap, IPs from this range will not be accessible in the user's VPC network. Cannot be updated. If not specified, the default value of '100.64.128.0/20' is used. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. */
		composerInternalIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Optional. Network Attachment that Cloud Composer environment is connected to, which provides connectivity with a user's VPC network. Takes precedence over network and subnetwork settings. If not provided, but network and subnetwork are defined during environment, it will be provisioned. If not provided and network and subnetwork are also empty, then connectivity to user's VPC network is disabled. Network attachment must be provided in format projects/{project}/regions/{region}/networkAttachments/{networkAttachment}. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. */
		composerNetworkAttachment: FormControl<string | null | undefined>,

		/** Optional. The disk size in GB used for node VMs. Minimum size is 30GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		diskSizeGb: FormControl<number | null | undefined>,

		/** Optional. Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent */
		enableIpMasqAgent: FormControl<boolean | null | undefined>,

		/** Optional. The Compute Engine [zone](/compute/docs/regions-zones) in which to deploy the VMs used to run the Apache Airflow software, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/zones/{zoneId}". This `location` must belong to the enclosing environment's project and location. If both this field and `nodeConfig.machineType` are specified, `nodeConfig.machineType` must belong to this `location`; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If only one field (`location` or `nodeConfig.machineType`) is specified, the location information from the specified field will be propagated to the unspecified field. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		location: FormControl<string | null | undefined>,

		/** Optional. The Compute Engine [machine type](/compute/docs/machine-types) used for cluster instances, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/zones/{zoneId}/machineTypes/{machineTypeId}". The `machineType` must belong to the enclosing environment's project and location. If both this field and `nodeConfig.location` are specified, this `machineType` must belong to the `nodeConfig.location`; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If exactly one of this field and `nodeConfig.location` is specified, the location information from the specified field will be propagated to the unspecified field. The `machineTypeId` must not be a [shared-core machine type](/compute/docs/machine-types#sharedcore). If this field is unspecified, the `machineTypeId` defaults to "n1-standard-1". This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		machineType: FormControl<string | null | undefined>,

		/** Optional. The maximum number of pods per node in the Cloud Composer GKE cluster. The value must be between 8 and 110 and it can be set only if the environment is VPC-native. The default value is 32. Values of this field will be propagated both to the `default-pool` node pool of the newly created GKE cluster, and to the default "Maximum Pods per Node" value which is used for newly created node pools if their value is not explicitly set during node pool creation. For more information, see [Optimizing IP address allocation] (https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr). Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		maxPodsPerNode: FormControl<number | null | undefined>,

		/** Optional. The Compute Engine network to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/global/networks/{networkId}". If unspecified, the default network in the environment's project is used. If a [Custom Subnet Network](/vpc/docs/vpc#vpc_networks_and_subnets) is provided, `nodeConfig.subnetwork` must also be provided. For [Shared VPC](/vpc/docs/shared-vpc) subnetwork requirements, see `nodeConfig.subnetwork`. */
		network: FormControl<string | null | undefined>,

		/** Optional. The Google Cloud Platform Service Account to be used by the workloads. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Optional. The Compute Engine subnetwork to be used for machine communications, specified as a [relative resource name](/apis/design/resource_names#relative_resource_name). For example: "projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}" If a subnetwork is provided, `nodeConfig.network` must also be provided, and the subnetwork must belong to the enclosing environment's project and location. */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateNodeConfigFormGroup() {
		return new FormGroup<NodeConfigFormProperties>({
			composerInternalIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			composerNetworkAttachment: new FormControl<string | null | undefined>(undefined),
			diskSizeGb: new FormControl<number | null | undefined>(undefined),
			enableIpMasqAgent: new FormControl<boolean | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			maxPodsPerNode: new FormControl<number | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for controlling how IPs are allocated in the GKE cluster. */
	export interface IPAllocationPolicy {

		/** Optional. The IP address range used to allocate IP addresses to pods in the cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. Specify `cluster_secondary_range_name` or `cluster_ipv4_cidr_block` but not both. */
		clusterIpv4CidrBlock?: string | null;

		/** Optional. The name of the cluster's secondary range used to allocate IP addresses to pods. Specify either `cluster_secondary_range_name` or `cluster_ipv4_cidr_block` but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. */
		clusterSecondaryRangeName?: string | null;

		/** Optional. The IP address range of the services IP addresses in this cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. Specify `services_secondary_range_name` or `services_ipv4_cidr_block` but not both. */
		servicesIpv4CidrBlock?: string | null;

		/** Optional. The name of the services' secondary range used to allocate IP addresses to the cluster. Specify either `services_secondary_range_name` or `services_ipv4_cidr_block` but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. */
		servicesSecondaryRangeName?: string | null;

		/** Optional. Whether or not to enable Alias IPs in the GKE cluster. If `true`, a VPC-native cluster is created. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters. */
		useIpAliases?: boolean | null;
	}

	/** Configuration for controlling how IPs are allocated in the GKE cluster. */
	export interface IPAllocationPolicyFormProperties {

		/** Optional. The IP address range used to allocate IP addresses to pods in the cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. Specify `cluster_secondary_range_name` or `cluster_ipv4_cidr_block` but not both. */
		clusterIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Optional. The name of the cluster's secondary range used to allocate IP addresses to pods. Specify either `cluster_secondary_range_name` or `cluster_ipv4_cidr_block` but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. */
		clusterSecondaryRangeName: FormControl<string | null | undefined>,

		/** Optional. The IP address range of the services IP addresses in this cluster. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. Specify `services_secondary_range_name` or `services_ipv4_cidr_block` but not both. */
		servicesIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Optional. The name of the services' secondary range used to allocate IP addresses to the cluster. Specify either `services_secondary_range_name` or `services_ipv4_cidr_block` but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when `use_ip_aliases` is true. */
		servicesSecondaryRangeName: FormControl<string | null | undefined>,

		/** Optional. Whether or not to enable Alias IPs in the GKE cluster. If `true`, a VPC-native cluster is created. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters. */
		useIpAliases: FormControl<boolean | null | undefined>,
	}
	export function CreateIPAllocationPolicyFormGroup() {
		return new FormGroup<IPAllocationPolicyFormProperties>({
			clusterIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			clusterSecondaryRangeName: new FormControl<string | null | undefined>(undefined),
			servicesIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			servicesSecondaryRangeName: new FormControl<string | null | undefined>(undefined),
			useIpAliases: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The configuration information for configuring a Private IP Cloud Composer environment. */
	export interface PrivateEnvironmentConfig {

		/** Optional. When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. */
		cloudComposerConnectionSubnetwork?: string | null;

		/** Optional. The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. */
		cloudComposerNetworkIpv4CidrBlock?: string | null;

		/** Output only. The IP range reserved for the tenant project's Cloud Composer network. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. */
		cloudComposerNetworkIpv4ReservedRange?: string | null;

		/** Optional. The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block */
		cloudSqlIpv4CidrBlock?: string | null;

		/** Optional. If `true`, builds performed during operations that install Python packages have only private connectivity to Google services (including Artifact Registry) and VPC network (if either `NodeConfig.network` and `NodeConfig.subnetwork` fields or `NodeConfig.composer_network_attachment` field are specified). If `false`, the builds also have access to the internet. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. */
		enablePrivateBuildsOnly?: boolean | null;

		/** Optional. If `true`, a Private IP Cloud Composer environment is created. If this field is set to true, `IPAllocationPolicy.use_ip_aliases` must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		enablePrivateEnvironment?: boolean | null;

		/** Optional. When enabled, IPs from public (non-RFC1918) ranges can be used for `IPAllocationPolicy.cluster_ipv4_cidr_block` and `IPAllocationPolicy.service_ipv4_cidr_block`. */
		enablePrivatelyUsedPublicIps?: boolean | null;

		/** Configuration options for networking connections in the Composer 2 environment. */
		networkingConfig?: NetworkingConfig;

		/** Configuration options for the private GKE cluster in a Cloud Composer environment. */
		privateClusterConfig?: PrivateClusterConfig;

		/** Optional. The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		webServerIpv4CidrBlock?: string | null;

		/** Output only. The IP range reserved for the tenant project's App Engine VMs. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		webServerIpv4ReservedRange?: string | null;
	}

	/** The configuration information for configuring a Private IP Cloud Composer environment. */
	export interface PrivateEnvironmentConfigFormProperties {

		/** Optional. When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. */
		cloudComposerConnectionSubnetwork: FormControl<string | null | undefined>,

		/** Optional. The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. */
		cloudComposerNetworkIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Output only. The IP range reserved for the tenant project's Cloud Composer network. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. */
		cloudComposerNetworkIpv4ReservedRange: FormControl<string | null | undefined>,

		/** Optional. The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block */
		cloudSqlIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Optional. If `true`, builds performed during operations that install Python packages have only private connectivity to Google services (including Artifact Registry) and VPC network (if either `NodeConfig.network` and `NodeConfig.subnetwork` fields or `NodeConfig.composer_network_attachment` field are specified). If `false`, the builds also have access to the internet. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. */
		enablePrivateBuildsOnly: FormControl<boolean | null | undefined>,

		/** Optional. If `true`, a Private IP Cloud Composer environment is created. If this field is set to true, `IPAllocationPolicy.use_ip_aliases` must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		enablePrivateEnvironment: FormControl<boolean | null | undefined>,

		/** Optional. When enabled, IPs from public (non-RFC1918) ranges can be used for `IPAllocationPolicy.cluster_ipv4_cidr_block` and `IPAllocationPolicy.service_ipv4_cidr_block`. */
		enablePrivatelyUsedPublicIps: FormControl<boolean | null | undefined>,

		/** Optional. The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		webServerIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Output only. The IP range reserved for the tenant project's App Engine VMs. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
		webServerIpv4ReservedRange: FormControl<string | null | undefined>,
	}
	export function CreatePrivateEnvironmentConfigFormGroup() {
		return new FormGroup<PrivateEnvironmentConfigFormProperties>({
			cloudComposerConnectionSubnetwork: new FormControl<string | null | undefined>(undefined),
			cloudComposerNetworkIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			cloudComposerNetworkIpv4ReservedRange: new FormControl<string | null | undefined>(undefined),
			cloudSqlIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			enablePrivateBuildsOnly: new FormControl<boolean | null | undefined>(undefined),
			enablePrivateEnvironment: new FormControl<boolean | null | undefined>(undefined),
			enablePrivatelyUsedPublicIps: new FormControl<boolean | null | undefined>(undefined),
			webServerIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			webServerIpv4ReservedRange: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration options for networking connections in the Composer 2 environment. */
	export interface NetworkingConfig {

		/** Optional. Indicates the user requested specifc connection type between Tenant and Customer projects. You cannot set networking connection type in public IP environment. */
		connectionType?: NetworkingConfigConnectionType | null;
	}

	/** Configuration options for networking connections in the Composer 2 environment. */
	export interface NetworkingConfigFormProperties {

		/** Optional. Indicates the user requested specifc connection type between Tenant and Customer projects. You cannot set networking connection type in public IP environment. */
		connectionType: FormControl<NetworkingConfigConnectionType | null | undefined>,
	}
	export function CreateNetworkingConfigFormGroup() {
		return new FormGroup<NetworkingConfigFormProperties>({
			connectionType: new FormControl<NetworkingConfigConnectionType | null | undefined>(undefined),
		});

	}

	export enum NetworkingConfigConnectionType { CONNECTION_TYPE_UNSPECIFIED = 0, VPC_PEERING = 1, PRIVATE_SERVICE_CONNECT = 2 }


	/** Configuration options for the private GKE cluster in a Cloud Composer environment. */
	export interface PrivateClusterConfig {

		/** Optional. If `true`, access to the public endpoint of the GKE cluster is denied. */
		enablePrivateEndpoint?: boolean | null;

		/** Optional. The CIDR block from which IPv4 range for GKE master will be reserved. If left blank, the default value of '172.16.0.0/23' is used. */
		masterIpv4CidrBlock?: string | null;

		/** Output only. The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. */
		masterIpv4ReservedRange?: string | null;
	}

	/** Configuration options for the private GKE cluster in a Cloud Composer environment. */
	export interface PrivateClusterConfigFormProperties {

		/** Optional. If `true`, access to the public endpoint of the GKE cluster is denied. */
		enablePrivateEndpoint: FormControl<boolean | null | undefined>,

		/** Optional. The CIDR block from which IPv4 range for GKE master will be reserved. If left blank, the default value of '172.16.0.0/23' is used. */
		masterIpv4CidrBlock: FormControl<string | null | undefined>,

		/** Output only. The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. */
		masterIpv4ReservedRange: FormControl<string | null | undefined>,
	}
	export function CreatePrivateClusterConfigFormGroup() {
		return new FormGroup<PrivateClusterConfigFormProperties>({
			enablePrivateEndpoint: new FormControl<boolean | null | undefined>(undefined),
			masterIpv4CidrBlock: new FormControl<string | null | undefined>(undefined),
			masterIpv4ReservedRange: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Recovery settings of an environment. */
	export interface RecoveryConfig {

		/** The configuration for scheduled snapshot creation mechanism. */
		scheduledSnapshotsConfig?: ScheduledSnapshotsConfig;
	}

	/** The Recovery settings of an environment. */
	export interface RecoveryConfigFormProperties {
	}
	export function CreateRecoveryConfigFormGroup() {
		return new FormGroup<RecoveryConfigFormProperties>({
		});

	}


	/** The configuration for scheduled snapshot creation mechanism. */
	export interface ScheduledSnapshotsConfig {

		/** Optional. Whether scheduled snapshots creation is enabled. */
		enabled?: boolean | null;

		/** Optional. The cron expression representing the time when snapshots creation mechanism runs. This field is subject to additional validation around frequency of execution. */
		snapshotCreationSchedule?: string | null;

		/** Optional. The Cloud Storage location for storing automatically created snapshots. */
		snapshotLocation?: string | null;

		/** Optional. Time zone that sets the context to interpret snapshot_creation_schedule. */
		timeZone?: string | null;
	}

	/** The configuration for scheduled snapshot creation mechanism. */
	export interface ScheduledSnapshotsConfigFormProperties {

		/** Optional. Whether scheduled snapshots creation is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Optional. The cron expression representing the time when snapshots creation mechanism runs. This field is subject to additional validation around frequency of execution. */
		snapshotCreationSchedule: FormControl<string | null | undefined>,

		/** Optional. The Cloud Storage location for storing automatically created snapshots. */
		snapshotLocation: FormControl<string | null | undefined>,

		/** Optional. Time zone that sets the context to interpret snapshot_creation_schedule. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateScheduledSnapshotsConfigFormGroup() {
		return new FormGroup<ScheduledSnapshotsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			snapshotCreationSchedule: new FormControl<string | null | undefined>(undefined),
			snapshotLocation: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnvironmentConfigResilienceMode { RESILIENCE_MODE_UNSPECIFIED = 0, HIGH_RESILIENCE = 1 }


	/** Specifies the selection and configuration of software inside the environment. */
	export interface SoftwareConfig {

		/** Optional. Apache Airflow configuration properties to override. Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and must not contain an equals sign ("=") or semicolon (";"). Section and property names must not contain a period ("."). Apache Airflow configuration property names must be written in [snake_case](https://en.wikipedia.org/wiki/Snake_case). Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are [blocked](/composer/docs/concepts/airflow-configurations), and cannot be overridden. */
		airflowConfigOverrides?: {[id: string]: string };

		/** Configuration for Cloud Data Lineage integration. */
		cloudDataLineageIntegration?: CloudDataLineageIntegration;

		/** Optional. Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. Environment variable names must match the regular expression `a-zA-Z_*`. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression `AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+`), and they cannot match any of the following reserved names: * `AIRFLOW_HOME` * `C_FORCE_ROOT` * `CONTAINER_NAME` * `DAGS_FOLDER` * `GCP_PROJECT` * `GCS_BUCKET` * `GKE_CLUSTER_NAME` * `SQL_DATABASE` * `SQL_INSTANCE` * `SQL_PASSWORD` * `SQL_PROJECT` * `SQL_REGION` * `SQL_USER` */
		envVariables?: {[id: string]: string };

		/** The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression `composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?)`. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or `latest`. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview). */
		imageVersion?: string | null;

		/** Optional. Custom Python Package Index (PyPI) packages to be installed in the environment. Keys refer to the lowercase package name such as "numpy" and values are the lowercase extras and version specifier such as "==1.12.0", "[devel,gcp_api]", or "[devel]>=1.8.2, <1.9.2". To specify a package without pinning it to a version specifier, use the empty string as the value. */
		pypiPackages?: {[id: string]: string };

		/** Optional. The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. Can be set to '2' or '3'. If not specified, the default is '3'. Cannot be updated. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3. */
		pythonVersion?: string | null;

		/** Optional. The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. */
		schedulerCount?: number | null;

		/** Optional. Whether or not the web server uses custom plugins. If unspecified, the field defaults to `PLUGINS_ENABLED`. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. */
		webServerPluginsMode?: SoftwareConfigWebServerPluginsMode | null;
	}

	/** Specifies the selection and configuration of software inside the environment. */
	export interface SoftwareConfigFormProperties {

		/** Optional. Apache Airflow configuration properties to override. Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and must not contain an equals sign ("=") or semicolon (";"). Section and property names must not contain a period ("."). Apache Airflow configuration property names must be written in [snake_case](https://en.wikipedia.org/wiki/Snake_case). Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are [blocked](/composer/docs/concepts/airflow-configurations), and cannot be overridden. */
		airflowConfigOverrides: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. Environment variable names must match the regular expression `a-zA-Z_*`. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression `AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+`), and they cannot match any of the following reserved names: * `AIRFLOW_HOME` * `C_FORCE_ROOT` * `CONTAINER_NAME` * `DAGS_FOLDER` * `GCP_PROJECT` * `GCS_BUCKET` * `GKE_CLUSTER_NAME` * `SQL_DATABASE` * `SQL_INSTANCE` * `SQL_PASSWORD` * `SQL_PROJECT` * `SQL_REGION` * `SQL_USER` */
		envVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression `composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?)`. When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version. The Cloud Composer portion of the image version is a full [semantic version](https://semver.org), or an alias in the form of major version number or `latest`. When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version. In all cases, the resolved image version is stored in the same field. See also [version list](/composer/docs/concepts/versioning/composer-versions) and [versioning overview](/composer/docs/concepts/versioning/composer-versioning-overview). */
		imageVersion: FormControl<string | null | undefined>,

		/** Optional. Custom Python Package Index (PyPI) packages to be installed in the environment. Keys refer to the lowercase package name such as "numpy" and values are the lowercase extras and version specifier such as "==1.12.0", "[devel,gcp_api]", or "[devel]>=1.8.2, <1.9.2". To specify a package without pinning it to a version specifier, use the empty string as the value. */
		pypiPackages: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. Can be set to '2' or '3'. If not specified, the default is '3'. Cannot be updated. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3. */
		pythonVersion: FormControl<string | null | undefined>,

		/** Optional. The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. */
		schedulerCount: FormControl<number | null | undefined>,

		/** Optional. Whether or not the web server uses custom plugins. If unspecified, the field defaults to `PLUGINS_ENABLED`. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. */
		webServerPluginsMode: FormControl<SoftwareConfigWebServerPluginsMode | null | undefined>,
	}
	export function CreateSoftwareConfigFormGroup() {
		return new FormGroup<SoftwareConfigFormProperties>({
			airflowConfigOverrides: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			envVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			imageVersion: new FormControl<string | null | undefined>(undefined),
			pypiPackages: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			pythonVersion: new FormControl<string | null | undefined>(undefined),
			schedulerCount: new FormControl<number | null | undefined>(undefined),
			webServerPluginsMode: new FormControl<SoftwareConfigWebServerPluginsMode | null | undefined>(undefined),
		});

	}

	export enum SoftwareConfigWebServerPluginsMode { WEB_SERVER_PLUGINS_MODE_UNSPECIFIED = 0, PLUGINS_DISABLED = 1, PLUGINS_ENABLED = 2 }


	/** The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
	export interface WebServerConfig {

		/** Optional. Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values. */
		machineType?: string | null;
	}

	/** The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. */
	export interface WebServerConfigFormProperties {

		/** Optional. Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values. */
		machineType: FormControl<string | null | undefined>,
	}
	export function CreateWebServerConfigFormGroup() {
		return new FormGroup<WebServerConfigFormProperties>({
			machineType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network-level access control policy for the Airflow web server. */
	export interface WebServerNetworkAccessControl {

		/** A collection of allowed IP ranges with descriptions. */
		allowedIpRanges?: Array<AllowedIpRange>;
	}

	/** Network-level access control policy for the Airflow web server. */
	export interface WebServerNetworkAccessControlFormProperties {
	}
	export function CreateWebServerNetworkAccessControlFormGroup() {
		return new FormGroup<WebServerNetworkAccessControlFormProperties>({
		});

	}


	/** The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. */
	export interface WorkloadsConfig {

		/** Configuration for resources used by Airflow DAG processors. */
		dagProcessor?: DagProcessorResource;

		/** Configuration for resources used by Airflow schedulers. */
		scheduler?: SchedulerResource;

		/** Configuration for resources used by Airflow triggerers. */
		triggerer?: TriggererResource;

		/** Configuration for resources used by Airflow web server. */
		webServer?: WebServerResource;

		/** Configuration for resources used by Airflow workers. */
		worker?: WorkerResource;
	}

	/** The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. */
	export interface WorkloadsConfigFormProperties {
	}
	export function CreateWorkloadsConfigFormGroup() {
		return new FormGroup<WorkloadsConfigFormProperties>({
		});

	}


	/** Configuration for resources used by Airflow schedulers. */
	export interface SchedulerResource {

		/** Optional. The number of schedulers. */
		count?: number | null;

		/** Optional. CPU request and limit for a single Airflow scheduler replica. */
		cpu?: number | null;

		/** Optional. Memory (GB) request and limit for a single Airflow scheduler replica. */
		memoryGb?: number | null;

		/** Optional. Storage (GB) request and limit for a single Airflow scheduler replica. */
		storageGb?: number | null;
	}

	/** Configuration for resources used by Airflow schedulers. */
	export interface SchedulerResourceFormProperties {

		/** Optional. The number of schedulers. */
		count: FormControl<number | null | undefined>,

		/** Optional. CPU request and limit for a single Airflow scheduler replica. */
		cpu: FormControl<number | null | undefined>,

		/** Optional. Memory (GB) request and limit for a single Airflow scheduler replica. */
		memoryGb: FormControl<number | null | undefined>,

		/** Optional. Storage (GB) request and limit for a single Airflow scheduler replica. */
		storageGb: FormControl<number | null | undefined>,
	}
	export function CreateSchedulerResourceFormGroup() {
		return new FormGroup<SchedulerResourceFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			cpu: new FormControl<number | null | undefined>(undefined),
			memoryGb: new FormControl<number | null | undefined>(undefined),
			storageGb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for resources used by Airflow triggerers. */
	export interface TriggererResource {

		/** Optional. The number of triggerers. */
		count?: number | null;

		/** Optional. CPU request and limit for a single Airflow triggerer replica. */
		cpu?: number | null;

		/** Optional. Memory (GB) request and limit for a single Airflow triggerer replica. */
		memoryGb?: number | null;
	}

	/** Configuration for resources used by Airflow triggerers. */
	export interface TriggererResourceFormProperties {

		/** Optional. The number of triggerers. */
		count: FormControl<number | null | undefined>,

		/** Optional. CPU request and limit for a single Airflow triggerer replica. */
		cpu: FormControl<number | null | undefined>,

		/** Optional. Memory (GB) request and limit for a single Airflow triggerer replica. */
		memoryGb: FormControl<number | null | undefined>,
	}
	export function CreateTriggererResourceFormGroup() {
		return new FormGroup<TriggererResourceFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			cpu: new FormControl<number | null | undefined>(undefined),
			memoryGb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for resources used by Airflow web server. */
	export interface WebServerResource {

		/** Optional. CPU request and limit for Airflow web server. */
		cpu?: number | null;

		/** Optional. Memory (GB) request and limit for Airflow web server. */
		memoryGb?: number | null;

		/** Optional. Storage (GB) request and limit for Airflow web server. */
		storageGb?: number | null;
	}

	/** Configuration for resources used by Airflow web server. */
	export interface WebServerResourceFormProperties {

		/** Optional. CPU request and limit for Airflow web server. */
		cpu: FormControl<number | null | undefined>,

		/** Optional. Memory (GB) request and limit for Airflow web server. */
		memoryGb: FormControl<number | null | undefined>,

		/** Optional. Storage (GB) request and limit for Airflow web server. */
		storageGb: FormControl<number | null | undefined>,
	}
	export function CreateWebServerResourceFormGroup() {
		return new FormGroup<WebServerResourceFormProperties>({
			cpu: new FormControl<number | null | undefined>(undefined),
			memoryGb: new FormControl<number | null | undefined>(undefined),
			storageGb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for resources used by Airflow workers. */
	export interface WorkerResource {

		/** Optional. CPU request and limit for a single Airflow worker replica. */
		cpu?: number | null;

		/** Optional. Maximum number of workers for autoscaling. */
		maxCount?: number | null;

		/** Optional. Memory (GB) request and limit for a single Airflow worker replica. */
		memoryGb?: number | null;

		/** Optional. Minimum number of workers for autoscaling. */
		minCount?: number | null;

		/** Optional. Storage (GB) request and limit for a single Airflow worker replica. */
		storageGb?: number | null;
	}

	/** Configuration for resources used by Airflow workers. */
	export interface WorkerResourceFormProperties {

		/** Optional. CPU request and limit for a single Airflow worker replica. */
		cpu: FormControl<number | null | undefined>,

		/** Optional. Maximum number of workers for autoscaling. */
		maxCount: FormControl<number | null | undefined>,

		/** Optional. Memory (GB) request and limit for a single Airflow worker replica. */
		memoryGb: FormControl<number | null | undefined>,

		/** Optional. Minimum number of workers for autoscaling. */
		minCount: FormControl<number | null | undefined>,

		/** Optional. Storage (GB) request and limit for a single Airflow worker replica. */
		storageGb: FormControl<number | null | undefined>,
	}
	export function CreateWorkerResourceFormGroup() {
		return new FormGroup<WorkerResourceFormProperties>({
			cpu: new FormControl<number | null | undefined>(undefined),
			maxCount: new FormControl<number | null | undefined>(undefined),
			memoryGb: new FormControl<number | null | undefined>(undefined),
			minCount: new FormControl<number | null | undefined>(undefined),
			storageGb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EnvironmentState { STATE_UNSPECIFIED = 0, CREATING = 1, RUNNING = 2, UPDATING = 3, DELETING = 4, ERROR = 5 }


	/** The configuration for data storage in the environment. */
	export interface StorageConfig {

		/** Optional. The name of the Cloud Storage bucket used by the environment. No `gs://` prefix. */
		bucket?: string | null;
	}

	/** The configuration for data storage in the environment. */
	export interface StorageConfigFormProperties {

		/** Optional. The name of the Cloud Storage bucket used by the environment. No `gs://` prefix. */
		bucket: FormControl<string | null | undefined>,
	}
	export function CreateStorageConfigFormGroup() {
		return new FormGroup<StorageConfigFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Execute Airflow Command request. */
	export interface ExecuteAirflowCommandRequest {

		/** Airflow command. */
		command?: string | null;

		/** Parameters for the Airflow command/subcommand as an array of arguments. It may contain positional arguments like `["my-dag-id"]`, key-value parameters like `["--foo=bar"]` or `["--foo","bar"]`, or other flags like `["-f"]`. */
		parameters?: Array<string>;

		/** Airflow subcommand. */
		subcommand?: string | null;
	}

	/** Execute Airflow Command request. */
	export interface ExecuteAirflowCommandRequestFormProperties {

		/** Airflow command. */
		command: FormControl<string | null | undefined>,

		/** Airflow subcommand. */
		subcommand: FormControl<string | null | undefined>,
	}
	export function CreateExecuteAirflowCommandRequestFormGroup() {
		return new FormGroup<ExecuteAirflowCommandRequestFormProperties>({
			command: new FormControl<string | null | undefined>(undefined),
			subcommand: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to ExecuteAirflowCommandRequest. */
	export interface ExecuteAirflowCommandResponse {

		/** Error message. Empty if there was no error. */
		error?: string | null;

		/** The unique ID of the command execution for polling. */
		executionId?: string | null;

		/** The name of the pod where the command is executed. */
		pod?: string | null;

		/** The namespace of the pod where the command is executed. */
		podNamespace?: string | null;
	}

	/** Response to ExecuteAirflowCommandRequest. */
	export interface ExecuteAirflowCommandResponseFormProperties {

		/** Error message. Empty if there was no error. */
		error: FormControl<string | null | undefined>,

		/** The unique ID of the command execution for polling. */
		executionId: FormControl<string | null | undefined>,

		/** The name of the pod where the command is executed. */
		pod: FormControl<string | null | undefined>,

		/** The namespace of the pod where the command is executed. */
		podNamespace: FormControl<string | null | undefined>,
	}
	export function CreateExecuteAirflowCommandResponseFormGroup() {
		return new FormGroup<ExecuteAirflowCommandResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			executionId: new FormControl<string | null | undefined>(undefined),
			pod: new FormControl<string | null | undefined>(undefined),
			podNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about how a command ended. */
	export interface ExitInfo {

		/** Error message. Empty if there was no error. */
		error?: string | null;

		/** The exit code from the command execution. */
		exitCode?: number | null;
	}

	/** Information about how a command ended. */
	export interface ExitInfoFormProperties {

		/** Error message. Empty if there was no error. */
		error: FormControl<string | null | undefined>,

		/** The exit code from the command execution. */
		exitCode: FormControl<number | null | undefined>,
	}
	export function CreateExitInfoFormGroup() {
		return new FormGroup<ExitInfoFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for FetchDatabasePropertiesRequest. */
	export interface FetchDatabasePropertiesResponse {

		/** The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only fail over to the failover replica when the status is true. */
		isFailoverReplicaAvailable?: boolean | null;

		/** The Compute Engine zone that the instance is currently serving from. */
		primaryGceZone?: string | null;

		/** The Compute Engine zone that the failover instance is currently serving from for a regional Cloud SQL instance. */
		secondaryGceZone?: string | null;
	}

	/** Response for FetchDatabasePropertiesRequest. */
	export interface FetchDatabasePropertiesResponseFormProperties {

		/** The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only fail over to the failover replica when the status is true. */
		isFailoverReplicaAvailable: FormControl<boolean | null | undefined>,

		/** The Compute Engine zone that the instance is currently serving from. */
		primaryGceZone: FormControl<string | null | undefined>,

		/** The Compute Engine zone that the failover instance is currently serving from for a regional Cloud SQL instance. */
		secondaryGceZone: FormControl<string | null | undefined>,
	}
	export function CreateFetchDatabasePropertiesResponseFormGroup() {
		return new FormGroup<FetchDatabasePropertiesResponseFormProperties>({
			isFailoverReplicaAvailable: new FormControl<boolean | null | undefined>(undefined),
			primaryGceZone: new FormControl<string | null | undefined>(undefined),
			secondaryGceZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Image Version information */
	export interface ImageVersion {

		/** Whether it is impossible to create an environment with the image version. */
		creationDisabled?: boolean | null;

		/** The string identifier of the ImageVersion, in the form: "composer-x.y.z-airflow-a.b.c" */
		imageVersionId?: string | null;

		/** Whether this is the default ImageVersion used by Composer during environment creation if no input ImageVersion is specified. */
		isDefault?: boolean | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		releaseDate?: Date;

		/** supported python versions */
		supportedPythonVersions?: Array<string>;

		/** Whether it is impossible to upgrade an environment running with the image version. */
		upgradeDisabled?: boolean | null;
	}

	/** Image Version information */
	export interface ImageVersionFormProperties {

		/** Whether it is impossible to create an environment with the image version. */
		creationDisabled: FormControl<boolean | null | undefined>,

		/** The string identifier of the ImageVersion, in the form: "composer-x.y.z-airflow-a.b.c" */
		imageVersionId: FormControl<string | null | undefined>,

		/** Whether this is the default ImageVersion used by Composer during environment creation if no input ImageVersion is specified. */
		isDefault: FormControl<boolean | null | undefined>,

		/** Whether it is impossible to upgrade an environment running with the image version. */
		upgradeDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateImageVersionFormGroup() {
		return new FormGroup<ImageVersionFormProperties>({
			creationDisabled: new FormControl<boolean | null | undefined>(undefined),
			imageVersionId: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			upgradeDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about a single line from logs. */
	export interface Line {

		/** Text content of the log line. */
		content?: string | null;

		/** Number of the line. */
		lineNumber?: number | null;
	}

	/** Contains information about a single line from logs. */
	export interface LineFormProperties {

		/** Text content of the log line. */
		content: FormControl<string | null | undefined>,

		/** Number of the line. */
		lineNumber: FormControl<number | null | undefined>,
	}
	export function CreateLineFormGroup() {
		return new FormGroup<LineFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			lineNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The environments in a project and location. */
	export interface ListEnvironmentsResponse {

		/** The list of environments returned by a ListEnvironmentsRequest. */
		environments?: Array<Environment>;

		/** The page token used to query for the next page if one exists. */
		nextPageToken?: string | null;
	}

	/** The environments in a project and location. */
	export interface ListEnvironmentsResponseFormProperties {

		/** The page token used to query for the next page if one exists. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsResponseFormGroup() {
		return new FormGroup<ListEnvironmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ImageVersions in a project and location. */
	export interface ListImageVersionsResponse {

		/** The list of supported ImageVersions in a location. */
		imageVersions?: Array<ImageVersion>;

		/** The page token used to query for the next page if one exists. */
		nextPageToken?: string | null;
	}

	/** The ImageVersions in a project and location. */
	export interface ListImageVersionsResponseFormProperties {

		/** The page token used to query for the next page if one exists. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageVersionsResponseFormGroup() {
		return new FormGroup<ListImageVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


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

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
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


	/** Request to load a snapshot into a Cloud Composer environment. */
	export interface LoadSnapshotRequest {

		/** Whether or not to skip setting Airflow overrides when loading the environment's state. */
		skipAirflowOverridesSetting?: boolean | null;

		/** Whether or not to skip setting environment variables when loading the environment's state. */
		skipEnvironmentVariablesSetting?: boolean | null;

		/** Whether or not to skip copying Cloud Storage data when loading the environment's state. */
		skipGcsDataCopying?: boolean | null;

		/** Whether or not to skip installing Pypi packages when loading the environment's state. */
		skipPypiPackagesInstallation?: boolean | null;

		/** A Cloud Storage path to a snapshot to load, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp". */
		snapshotPath?: string | null;
	}

	/** Request to load a snapshot into a Cloud Composer environment. */
	export interface LoadSnapshotRequestFormProperties {

		/** Whether or not to skip setting Airflow overrides when loading the environment's state. */
		skipAirflowOverridesSetting: FormControl<boolean | null | undefined>,

		/** Whether or not to skip setting environment variables when loading the environment's state. */
		skipEnvironmentVariablesSetting: FormControl<boolean | null | undefined>,

		/** Whether or not to skip copying Cloud Storage data when loading the environment's state. */
		skipGcsDataCopying: FormControl<boolean | null | undefined>,

		/** Whether or not to skip installing Pypi packages when loading the environment's state. */
		skipPypiPackagesInstallation: FormControl<boolean | null | undefined>,

		/** A Cloud Storage path to a snapshot to load, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp". */
		snapshotPath: FormControl<string | null | undefined>,
	}
	export function CreateLoadSnapshotRequestFormGroup() {
		return new FormGroup<LoadSnapshotRequestFormProperties>({
			skipAirflowOverridesSetting: new FormControl<boolean | null | undefined>(undefined),
			skipEnvironmentVariablesSetting: new FormControl<boolean | null | undefined>(undefined),
			skipGcsDataCopying: new FormControl<boolean | null | undefined>(undefined),
			skipPypiPackagesInstallation: new FormControl<boolean | null | undefined>(undefined),
			snapshotPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to LoadSnapshotRequest. */
	export interface LoadSnapshotResponse {
	}

	/** Response to LoadSnapshotRequest. */
	export interface LoadSnapshotResponseFormProperties {
	}
	export function CreateLoadSnapshotResponseFormGroup() {
		return new FormGroup<LoadSnapshotResponseFormProperties>({
		});

	}


	/** Metadata describing an operation. */
	export interface OperationMetadata {

		/** Output only. The time the operation was submitted to the server. */
		createTime?: string | null;

		/** Output only. The time when the operation terminated, regardless of its success. This field is unset if the operation is still ongoing. */
		endTime?: string | null;

		/** Output only. The type of operation being performed. */
		operationType?: OperationMetadataOperationType | null;

		/** Output only. The resource being operated on, as a [relative resource name]( /apis/design/resource_names#relative_resource_name). */
		resource?: string | null;

		/** Output only. The UUID of the resource being operated on. */
		resourceUuid?: string | null;

		/** Output only. The current operation state. */
		state?: OperationMetadataState | null;
	}

	/** Metadata describing an operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. The time the operation was submitted to the server. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time when the operation terminated, regardless of its success. This field is unset if the operation is still ongoing. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The type of operation being performed. */
		operationType: FormControl<OperationMetadataOperationType | null | undefined>,

		/** Output only. The resource being operated on, as a [relative resource name]( /apis/design/resource_names#relative_resource_name). */
		resource: FormControl<string | null | undefined>,

		/** Output only. The UUID of the resource being operated on. */
		resourceUuid: FormControl<string | null | undefined>,

		/** Output only. The current operation state. */
		state: FormControl<OperationMetadataState | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<OperationMetadataOperationType | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			resourceUuid: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<OperationMetadataState | null | undefined>(undefined),
		});

	}

	export enum OperationMetadataOperationType { TYPE_UNSPECIFIED = 0, CREATE = 1, DELETE = 2, UPDATE = 3, CHECK = 4, SAVE_SNAPSHOT = 5, LOAD_SNAPSHOT = 6, DATABASE_FAILOVER = 7 }

	export enum OperationMetadataState { STATE_UNSPECIFIED = 0, PENDING = 1, RUNNING = 2, SUCCESSFUL = 3, FAILED = 4 }


	/** Poll Airflow Command request. */
	export interface PollAirflowCommandRequest {

		/** The unique ID of the command execution. */
		executionId?: string | null;

		/** Line number from which new logs should be fetched. */
		nextLineNumber?: number | null;

		/** The name of the pod where the command is executed. */
		pod?: string | null;

		/** The namespace of the pod where the command is executed. */
		podNamespace?: string | null;
	}

	/** Poll Airflow Command request. */
	export interface PollAirflowCommandRequestFormProperties {

		/** The unique ID of the command execution. */
		executionId: FormControl<string | null | undefined>,

		/** Line number from which new logs should be fetched. */
		nextLineNumber: FormControl<number | null | undefined>,

		/** The name of the pod where the command is executed. */
		pod: FormControl<string | null | undefined>,

		/** The namespace of the pod where the command is executed. */
		podNamespace: FormControl<string | null | undefined>,
	}
	export function CreatePollAirflowCommandRequestFormGroup() {
		return new FormGroup<PollAirflowCommandRequestFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			nextLineNumber: new FormControl<number | null | undefined>(undefined),
			pod: new FormControl<string | null | undefined>(undefined),
			podNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to PollAirflowCommandRequest. */
	export interface PollAirflowCommandResponse {

		/** Information about how a command ended. */
		exitInfo?: ExitInfo;

		/** Output from the command execution. It may not contain the full output and the caller may need to poll for more lines. */
		output?: Array<Line>;

		/** Whether the command execution has finished and there is no more output. */
		outputEnd?: boolean | null;
	}

	/** Response to PollAirflowCommandRequest. */
	export interface PollAirflowCommandResponseFormProperties {

		/** Whether the command execution has finished and there is no more output. */
		outputEnd: FormControl<boolean | null | undefined>,
	}
	export function CreatePollAirflowCommandResponseFormGroup() {
		return new FormGroup<PollAirflowCommandResponseFormProperties>({
			outputEnd: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Restart Airflow web server. */
	export interface RestartWebServerRequest {
	}

	/** Restart Airflow web server. */
	export interface RestartWebServerRequestFormProperties {
	}
	export function CreateRestartWebServerRequestFormGroup() {
		return new FormGroup<RestartWebServerRequestFormProperties>({
		});

	}


	/** Request to create a snapshot of a Cloud Composer environment. */
	export interface SaveSnapshotRequest {

		/** Location in a Cloud Storage where the snapshot is going to be stored, e.g.: "gs://my-bucket/snapshots". */
		snapshotLocation?: string | null;
	}

	/** Request to create a snapshot of a Cloud Composer environment. */
	export interface SaveSnapshotRequestFormProperties {

		/** Location in a Cloud Storage where the snapshot is going to be stored, e.g.: "gs://my-bucket/snapshots". */
		snapshotLocation: FormControl<string | null | undefined>,
	}
	export function CreateSaveSnapshotRequestFormGroup() {
		return new FormGroup<SaveSnapshotRequestFormProperties>({
			snapshotLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to SaveSnapshotRequest. */
	export interface SaveSnapshotResponse {

		/** The fully-resolved Cloud Storage path of the created snapshot, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp". This field is populated only if the snapshot creation was successful. */
		snapshotPath?: string | null;
	}

	/** Response to SaveSnapshotRequest. */
	export interface SaveSnapshotResponseFormProperties {

		/** The fully-resolved Cloud Storage path of the created snapshot, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp". This field is populated only if the snapshot creation was successful. */
		snapshotPath: FormControl<string | null | undefined>,
	}
	export function CreateSaveSnapshotResponseFormGroup() {
		return new FormGroup<SaveSnapshotResponseFormProperties>({
			snapshotPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stop Airflow Command request. */
	export interface StopAirflowCommandRequest {

		/** The unique ID of the command execution. */
		executionId?: string | null;

		/** If true, the execution is terminated forcefully (SIGKILL). If false, the execution is stopped gracefully, giving it time for cleanup. */
		force?: boolean | null;

		/** The name of the pod where the command is executed. */
		pod?: string | null;

		/** The namespace of the pod where the command is executed. */
		podNamespace?: string | null;
	}

	/** Stop Airflow Command request. */
	export interface StopAirflowCommandRequestFormProperties {

		/** The unique ID of the command execution. */
		executionId: FormControl<string | null | undefined>,

		/** If true, the execution is terminated forcefully (SIGKILL). If false, the execution is stopped gracefully, giving it time for cleanup. */
		force: FormControl<boolean | null | undefined>,

		/** The name of the pod where the command is executed. */
		pod: FormControl<string | null | undefined>,

		/** The namespace of the pod where the command is executed. */
		podNamespace: FormControl<string | null | undefined>,
	}
	export function CreateStopAirflowCommandRequestFormGroup() {
		return new FormGroup<StopAirflowCommandRequestFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			pod: new FormControl<string | null | undefined>(undefined),
			podNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to StopAirflowCommandRequest. */
	export interface StopAirflowCommandResponse {

		/** Whether the execution is still running. */
		isDone?: boolean | null;

		/** Output message from stopping execution request. */
		output?: Array<string>;
	}

	/** Response to StopAirflowCommandRequest. */
	export interface StopAirflowCommandResponseFormProperties {

		/** Whether the execution is still running. */
		isDone: FormControl<boolean | null | undefined>,
	}
	export function CreateStopAirflowCommandResponseFormGroup() {
		return new FormGroup<StopAirflowCommandResponseFormProperties>({
			isDone: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.
		 * Post v1beta1/{environment}:checkUpgrade
		 * @param {string} environment The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @return {Operation} Successful response
		 */
		Composer_projects_locations_environments_checkUpgrade(environment: string, requestBody: CheckUpgradeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':checkUpgrade', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Triggers database failover (only for highly resilient environments).
		 * Post v1beta1/{environment}:databaseFailover
		 * @param {string} environment Target environment: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @return {Operation} Successful response
		 */
		Composer_projects_locations_environments_databaseFailover(environment: string, requestBody: DatabaseFailoverRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':databaseFailover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Executes Airflow CLI command.
		 * Post v1beta1/{environment}:executeAirflowCommand
		 * @param {string} environment The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}".
		 * @return {ExecuteAirflowCommandResponse} Successful response
		 */
		Composer_projects_locations_environments_executeAirflowCommand(environment: string, requestBody: ExecuteAirflowCommandRequest): Observable<ExecuteAirflowCommandResponse> {
			return this.http.post<ExecuteAirflowCommandResponse>(this.baseUri + 'v1beta1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':executeAirflowCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches database properties.
		 * Get v1beta1/{environment}:fetchDatabaseProperties
		 * @param {string} environment Required. The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @return {FetchDatabasePropertiesResponse} Successful response
		 */
		Composer_projects_locations_environments_fetchDatabaseProperties(environment: string): Observable<FetchDatabasePropertiesResponse> {
			return this.http.get<FetchDatabasePropertiesResponse>(this.baseUri + 'v1beta1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':fetchDatabaseProperties', {});
		}

		/**
		 * Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
		 * Post v1beta1/{environment}:loadSnapshot
		 * @param {string} environment The resource name of the target environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @return {Operation} Successful response
		 */
		Composer_projects_locations_environments_loadSnapshot(environment: string, requestBody: LoadSnapshotRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':loadSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Polls Airflow CLI command execution and fetches logs.
		 * Post v1beta1/{environment}:pollAirflowCommand
		 * @param {string} environment The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @return {PollAirflowCommandResponse} Successful response
		 */
		Composer_projects_locations_environments_pollAirflowCommand(environment: string, requestBody: PollAirflowCommandRequest): Observable<PollAirflowCommandResponse> {
			return this.http.post<PollAirflowCommandResponse>(this.baseUri + 'v1beta1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':pollAirflowCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
		 * Post v1beta1/{environment}:saveSnapshot
		 * @param {string} environment The resource name of the source environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @return {Operation} Successful response
		 */
		Composer_projects_locations_environments_saveSnapshot(environment: string, requestBody: SaveSnapshotRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':saveSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops Airflow CLI command execution.
		 * Post v1beta1/{environment}:stopAirflowCommand
		 * @param {string} environment The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}".
		 * @return {StopAirflowCommandResponse} Successful response
		 */
		Composer_projects_locations_environments_stopAirflowCommand(environment: string, requestBody: StopAirflowCommandRequest): Observable<StopAirflowCommandResponse> {
			return this.http.post<StopAirflowCommandResponse>(this.baseUri + 'v1beta1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':stopAirflowCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1beta1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Composer_projects_locations_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Composer_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update an environment.
		 * Patch v1beta1/{name}
		 * @param {string} name The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @param {string} updateMask Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of argparse, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.argparse". The included patch environment would specify the scikit-learn version as follows: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } } Note that in the above example, any existing PyPI packages other than scikit-learn and argparse will be unaffected. Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows: { "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } } Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected. It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } **Note:** Only the following fields can be updated: * `config.softwareConfig.pypiPackages` * Replace all custom custom PyPI packages. If a replacement package map is not included in `environment`, all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package. * `config.softwareConfig.pypiPackages.`packagename * Update the custom PyPI package *packagename*, preserving other packages. To delete the package, include it in `updateMask`, and omit the mapping for it in `environment.config.softwareConfig.pypiPackages`. It is an error to provide both a mask of this form and the `config.softwareConfig.pypiPackages` mask. * `labels` * Replace all environment labels. If a replacement labels map is not included in `environment`, all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels. * `labels.`labelName * Set the label named *labelName*, while preserving other labels. To delete the label, include it in `updateMask` and omit its mapping in `environment.labels`. It is an error to provide both a mask of this form and the `labels` mask. * `config.nodeCount` * Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the `config.nodeCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerNetworkAccessControl` * Replace the environment's current WebServerNetworkAccessControl. * `config.softwareConfig.airflowConfigOverrides` * Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in `environment`, all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides. * `config.softwareConfig.airflowConfigOverrides.`section-name * Override the Apache Airflow config property *name* in the section named *section*, preserving other properties. To delete the property override, include it in `updateMask` and omit its mapping in `environment.config.softwareConfig.airflowConfigOverrides`. It is an error to provide both a mask of this form and the `config.softwareConfig.airflowConfigOverrides` mask. * `config.softwareConfig.envVariables` * Replace all environment variables. If a replacement environment variable map is not included in `environment`, all custom environment variables are cleared. * `config.softwareConfig.imageVersion` * Upgrade the version of the environment in-place. Refer to `SoftwareConfig.image_version` for information on how to format the new image version. Additionally, the new image version cannot effect a version downgrade, and must match the current image version's Composer and Airflow major versions. Consult the [Cloud Composer version list](/composer/docs/concepts/versioning/composer-versions) for valid values. * `config.softwareConfig.schedulerCount` * Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the `config.softwareConfig.schedulerCount` field. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. * `config.softwareConfig.cloudDataLineageIntegration` * Configuration for Cloud Data Lineage integration. * `config.databaseConfig.machineType` * Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.webServerConfig.machineType` * Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. * `config.maintenanceWindow` * Maintenance window during which Cloud Composer components may be under maintenance. * `config.workloadsConfig` * The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. * `config.environmentSize` * The size of the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
		 * @return {Operation} Successful response
		 */
		Composer_projects_locations_environments_patch(name: string, updateMask: string | null | undefined, requestBody: Environment): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Composer_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Restart Airflow web server.
		 * Post v1beta1/{name}:restartWebServer
		 * @param {string} name The resource name of the environment to restart the web server for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
		 * @return {Operation} Successful response
		 */
		Composer_projects_locations_environments_restartWebServer(name: string, requestBody: RestartWebServerRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':restartWebServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List environments.
		 * Get v1beta1/{parent}/environments
		 * @param {string} parent List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"
		 * @param {number} pageSize The maximum number of environments to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListEnvironmentsResponse} Successful response
		 */
		Composer_projects_locations_environments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEnvironmentsResponse> {
			return this.http.get<ListEnvironmentsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new environment.
		 * Post v1beta1/{parent}/environments
		 * @param {string} parent The parent must be of the form "projects/{projectId}/locations/{locationId}".
		 * @return {Operation} Successful response
		 */
		Composer_projects_locations_environments_create(parent: string, requestBody: Environment): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List ImageVersions for provided location.
		 * Get v1beta1/{parent}/imageVersions
		 * @param {string} parent List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"
		 * @param {boolean} includePastReleases Whether or not image versions from old releases should be included.
		 * @param {number} pageSize The maximum number of image_versions to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListImageVersionsResponse} Successful response
		 */
		Composer_projects_locations_imageVersions_list(parent: string, includePastReleases: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListImageVersionsResponse> {
			return this.http.get<ListImageVersionsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/imageVersions&includePastReleases=' + includePastReleases + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

