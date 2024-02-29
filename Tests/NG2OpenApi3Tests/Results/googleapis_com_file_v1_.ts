import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A Filestore backup. */
	export interface Backup {

		/** Output only. Capacity of the source file share when the backup was created. */
		capacityGb?: string | null;

		/** Output only. The time when the backup was created. */
		createTime?: string | null;

		/** A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected. */
		description?: string | null;

		/** Output only. Amount of bytes that will be downloaded if the backup is restored. This may be different than storage bytes, since sequential backups of the same disk will share storage. */
		downloadBytes?: string | null;

		/** Immutable. KMS key name used for data encryption. */
		kmsKey?: string | null;

		/** Resource labels to represent user provided metadata. */
		labels?: {[id: string]: string };

		/** Output only. The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`. */
		name?: string | null;

		/** Output only. Reserved for future use. */
		satisfiesPzi?: boolean | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Name of the file share in the source Filestore instance that the backup is created from. */
		sourceFileShare?: string | null;

		/** The resource name of the source Filestore instance, in the format `projects/{project_number}/locations/{location_id}/instances/{instance_id}`, used to create this backup. */
		sourceInstance?: string | null;

		/** Output only. The service tier of the source Filestore instance that this backup is created from. */
		sourceInstanceTier?: BackupSourceInstanceTier | null;

		/** Output only. The backup state. */
		state?: BackupState | null;

		/** Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion. */
		storageBytes?: string | null;
	}

	/** A Filestore backup. */
	export interface BackupFormProperties {

		/** Output only. Capacity of the source file share when the backup was created. */
		capacityGb: FormControl<string | null | undefined>,

		/** Output only. The time when the backup was created. */
		createTime: FormControl<string | null | undefined>,

		/** A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected. */
		description: FormControl<string | null | undefined>,

		/** Output only. Amount of bytes that will be downloaded if the backup is restored. This may be different than storage bytes, since sequential backups of the same disk will share storage. */
		downloadBytes: FormControl<string | null | undefined>,

		/** Immutable. KMS key name used for data encryption. */
		kmsKey: FormControl<string | null | undefined>,

		/** Resource labels to represent user provided metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzi: FormControl<boolean | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Name of the file share in the source Filestore instance that the backup is created from. */
		sourceFileShare: FormControl<string | null | undefined>,

		/** The resource name of the source Filestore instance, in the format `projects/{project_number}/locations/{location_id}/instances/{instance_id}`, used to create this backup. */
		sourceInstance: FormControl<string | null | undefined>,

		/** Output only. The service tier of the source Filestore instance that this backup is created from. */
		sourceInstanceTier: FormControl<BackupSourceInstanceTier | null | undefined>,

		/** Output only. The backup state. */
		state: FormControl<BackupState | null | undefined>,

		/** Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion. */
		storageBytes: FormControl<string | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			capacityGb: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			downloadBytes: new FormControl<string | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			satisfiesPzi: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			sourceFileShare: new FormControl<string | null | undefined>(undefined),
			sourceInstance: new FormControl<string | null | undefined>(undefined),
			sourceInstanceTier: new FormControl<BackupSourceInstanceTier | null | undefined>(undefined),
			state: new FormControl<BackupState | null | undefined>(undefined),
			storageBytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupSourceInstanceTier { TIER_UNSPECIFIED = 'TIER_UNSPECIFIED', STANDARD = 'STANDARD', PREMIUM = 'PREMIUM', BASIC_HDD = 'BASIC_HDD', BASIC_SSD = 'BASIC_SSD', HIGH_SCALE_SSD = 'HIGH_SCALE_SSD', ENTERPRISE = 'ENTERPRISE', ZONAL = 'ZONAL', REGIONAL = 'REGIONAL' }

	export enum BackupState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', FINALIZING = 'FINALIZING', READY = 'READY', DELETING = 'DELETING', INVALID = 'INVALID' }


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


	/** Time window specified for daily operations. */
	export interface DailyCycle {

		/** Output only. Duration of the time window, set by service producer. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Time window specified for daily operations. */
	export interface DailyCycleFormProperties {

		/** Output only. Duration of the time window, set by service producer. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateDailyCycleFormGroup() {
		return new FormGroup<DailyCycleFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours?: number | null;

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes?: number | null;

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours: FormControl<number | null | undefined>,

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes: FormControl<number | null | undefined>,

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date. */
	export interface DenyMaintenancePeriod {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		time?: TimeOfDay;
	}

	/** DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date. */
	export interface DenyMaintenancePeriodFormProperties {
	}
	export function CreateDenyMaintenancePeriodFormGroup() {
		return new FormGroup<DenyMaintenancePeriodFormProperties>({
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


	/** File share configuration for the instance. */
	export interface FileShareConfig {

		/** File share capacity in gigabytes (GB). Filestore defines 1 GB as 1024^3 bytes. */
		capacityGb?: string | null;

		/** Required. The name of the file share. Must use 1-16 characters for the basic service tier and 1-63 characters for all other service tiers. Must use lowercase letters, numbers, or underscores `[a-z0-9_]`. Must start with a letter. Immutable. */
		name?: string | null;

		/** Nfs Export Options. There is a limit of 10 export options per file share. */
		nfsExportOptions?: Array<NfsExportOptions>;

		/** The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`, that this file share has been restored from. */
		sourceBackup?: string | null;
	}

	/** File share configuration for the instance. */
	export interface FileShareConfigFormProperties {

		/** File share capacity in gigabytes (GB). Filestore defines 1 GB as 1024^3 bytes. */
		capacityGb: FormControl<string | null | undefined>,

		/** Required. The name of the file share. Must use 1-16 characters for the basic service tier and 1-63 characters for all other service tiers. Must use lowercase letters, numbers, or underscores `[a-z0-9_]`. Must start with a letter. Immutable. */
		name: FormControl<string | null | undefined>,

		/** The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`, that this file share has been restored from. */
		sourceBackup: FormControl<string | null | undefined>,
	}
	export function CreateFileShareConfigFormGroup() {
		return new FormGroup<FileShareConfigFormProperties>({
			capacityGb: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceBackup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NFS export options specifications. */
	export interface NfsExportOptions {

		/** Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE. */
		accessMode?: NfsExportOptionsAccessMode | null;

		/** An integer representing the anonymous group id with a default value of 65534. Anon_gid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings. */
		anonGid?: string | null;

		/** An integer representing the anonymous user id with a default value of 65534. Anon_uid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings. */
		anonUid?: string | null;

		/** List of either an IPv4 addresses in the format `{octet1}.{octet2}.{octet3}.{octet4}` or CIDR ranges in the format `{octet1}.{octet2}.{octet3}.{octet4}/{mask size}` which may mount the file share. Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned. The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions. */
		ipRanges?: Array<string>;

		/** Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. The default is NO_ROOT_SQUASH. */
		squashMode?: NfsExportOptionsSquashMode | null;
	}

	/** NFS export options specifications. */
	export interface NfsExportOptionsFormProperties {

		/** Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE. */
		accessMode: FormControl<NfsExportOptionsAccessMode | null | undefined>,

		/** An integer representing the anonymous group id with a default value of 65534. Anon_gid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings. */
		anonGid: FormControl<string | null | undefined>,

		/** An integer representing the anonymous user id with a default value of 65534. Anon_uid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings. */
		anonUid: FormControl<string | null | undefined>,

		/** Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. The default is NO_ROOT_SQUASH. */
		squashMode: FormControl<NfsExportOptionsSquashMode | null | undefined>,
	}
	export function CreateNfsExportOptionsFormGroup() {
		return new FormGroup<NfsExportOptionsFormProperties>({
			accessMode: new FormControl<NfsExportOptionsAccessMode | null | undefined>(undefined),
			anonGid: new FormControl<string | null | undefined>(undefined),
			anonUid: new FormControl<string | null | undefined>(undefined),
			squashMode: new FormControl<NfsExportOptionsSquashMode | null | undefined>(undefined),
		});

	}

	export enum NfsExportOptionsAccessMode { ACCESS_MODE_UNSPECIFIED = 'ACCESS_MODE_UNSPECIFIED', READ_ONLY = 'READ_ONLY', READ_WRITE = 'READ_WRITE' }

	export enum NfsExportOptionsSquashMode { SQUASH_MODE_UNSPECIFIED = 'SQUASH_MODE_UNSPECIFIED', NO_ROOT_SQUASH = 'NO_ROOT_SQUASH', ROOT_SQUASH = 'ROOT_SQUASH' }


	/** Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1Instance {

		/** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
		consumerDefinedName?: string | null;

		/** Output only. Timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
		instanceType?: string | null;

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels?: {[id: string]: string };

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set. */
		maintenancePolicyNames?: {[id: string]: string };

		/** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
		maintenanceSchedules?: {[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule };

		/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
		maintenanceSettings?: GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings;

		/** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
		name?: string | null;

		/** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
		notificationParameters?: {[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter };

		/** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
		producerMetadata?: {[id: string]: string };

		/** Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata. */
		provisionedResources?: Array<GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource>;

		/** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
		slmInstanceTemplate?: string | null;

		/** SloMetadata contains resources required for proper SLO classification of the instance. */
		sloMetadata?: GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata;

		/** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
		softwareVersions?: {[id: string]: string };

		/** Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). */
		state?: GoogleCloudSaasacceleratorManagementProvidersV1InstanceState | null;

		/** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
		tenantProjectId?: string | null;

		/** Output only. Timestamp when the resource was last modified. */
		updateTime?: string | null;
	}

	/** Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1InstanceFormProperties {

		/** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
		consumerDefinedName: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
		instanceType: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set. */
		maintenancePolicyNames: FormControl<{[id: string]: string } | null | undefined>,

		/** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
		maintenanceSchedules: FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule } | null | undefined>,

		/** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
		name: FormControl<string | null | undefined>,

		/** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
		notificationParameters: FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter } | null | undefined>,

		/** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
		producerMetadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
		slmInstanceTemplate: FormControl<string | null | undefined>,

		/** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
		softwareVersions: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). */
		state: FormControl<GoogleCloudSaasacceleratorManagementProvidersV1InstanceState | null | undefined>,

		/** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
		tenantProjectId: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the resource was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1InstanceFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1InstanceFormProperties>({
			consumerDefinedName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maintenancePolicyNames: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maintenanceSchedules: new FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationParameters: new FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter } | null | undefined>(undefined),
			producerMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			slmInstanceTemplate: new FormControl<string | null | undefined>(undefined),
			softwareVersions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			state: new FormControl<GoogleCloudSaasacceleratorManagementProvidersV1InstanceState | null | undefined>(undefined),
			tenantProjectId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule {

		/** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
		canReschedule?: boolean | null;

		/** The scheduled end time for the maintenance. */
		endTime?: string | null;

		/** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
		rolloutManagementPolicy?: string | null;

		/** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
		scheduleDeadlineTime?: string | null;

		/** The scheduled start time for the maintenance. */
		startTime?: string | null;
	}

	/** Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceScheduleFormProperties {

		/** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
		canReschedule: FormControl<boolean | null | undefined>,

		/** The scheduled end time for the maintenance. */
		endTime: FormControl<string | null | undefined>,

		/** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
		rolloutManagementPolicy: FormControl<string | null | undefined>,

		/** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
		scheduleDeadlineTime: FormControl<string | null | undefined>,

		/** The scheduled start time for the maintenance. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1MaintenanceScheduleFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceScheduleFormProperties>({
			canReschedule: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			rolloutManagementPolicy: new FormControl<string | null | undefined>(undefined),
			scheduleDeadlineTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings {

		/** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
		exclude?: boolean | null;

		/** Optional. If the update call is triggered from rollback, set the value as true. */
		isRollback?: boolean | null;

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
		maintenancePolicies?: {[id: string]: MaintenancePolicy };
	}

	/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettingsFormProperties {

		/** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
		exclude: FormControl<boolean | null | undefined>,

		/** Optional. If the update call is triggered from rollback, set the value as true. */
		isRollback: FormControl<boolean | null | undefined>,

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
		maintenancePolicies: FormControl<{[id: string]: MaintenancePolicy } | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettingsFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettingsFormProperties>({
			exclude: new FormControl<boolean | null | undefined>(undefined),
			isRollback: new FormControl<boolean | null | undefined>(undefined),
			maintenancePolicies: new FormControl<{[id: string]: MaintenancePolicy } | null | undefined>(undefined),
		});

	}


	/** LINT.IfChange Defines policies to service maintenance events. */
	export interface MaintenancePolicy {

		/** Output only. The time when the resource was created. */
		createTime?: string | null;

		/** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description?: string | null;

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels?: {[id: string]: string };

		/** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
		name?: string | null;

		/** Optional. The state of the policy. */
		state?: MaintenancePolicyState | null;

		/** Maintenance policy applicable to instance updates. */
		updatePolicy?: UpdatePolicy;

		/** Output only. The time when the resource was updated. */
		updateTime?: string | null;
	}

	/** LINT.IfChange Defines policies to service maintenance events. */
	export interface MaintenancePolicyFormProperties {

		/** Output only. The time when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
		name: FormControl<string | null | undefined>,

		/** Optional. The state of the policy. */
		state: FormControl<MaintenancePolicyState | null | undefined>,

		/** Output only. The time when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenancePolicyFormGroup() {
		return new FormGroup<MaintenancePolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MaintenancePolicyState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenancePolicyState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', READY = 'READY', DELETING = 'DELETING' }


	/** Maintenance policy applicable to instance updates. */
	export interface UpdatePolicy {

		/** Optional. Relative scheduling channel applied to resource. */
		channel?: UpdatePolicyChannel | null;

		/** Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. The protocol supports zero-to-many such periods, but the current SLM Rollout implementation only supports zero-to-one. */
		denyMaintenancePeriods?: Array<DenyMaintenancePeriod>;

		/** MaintenanceWindow definition. */
		window?: MaintenanceWindow;
	}

	/** Maintenance policy applicable to instance updates. */
	export interface UpdatePolicyFormProperties {

		/** Optional. Relative scheduling channel applied to resource. */
		channel: FormControl<UpdatePolicyChannel | null | undefined>,
	}
	export function CreateUpdatePolicyFormGroup() {
		return new FormGroup<UpdatePolicyFormProperties>({
			channel: new FormControl<UpdatePolicyChannel | null | undefined>(undefined),
		});

	}

	export enum UpdatePolicyChannel { UPDATE_CHANNEL_UNSPECIFIED = 'UPDATE_CHANNEL_UNSPECIFIED', EARLIER = 'EARLIER', LATER = 'LATER', WEEK1 = 'WEEK1', WEEK2 = 'WEEK2', WEEK5 = 'WEEK5' }


	/** MaintenanceWindow definition. */
	export interface MaintenanceWindow {

		/** Time window specified for daily operations. */
		dailyCycle?: DailyCycle;

		/** Time window specified for weekly operations. */
		weeklyCycle?: WeeklyCycle;
	}

	/** MaintenanceWindow definition. */
	export interface MaintenanceWindowFormProperties {
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
		});

	}


	/** Time window specified for weekly operations. */
	export interface WeeklyCycle {

		/** User can specify multiple windows in a week. Minimum of 1 window. */
		schedule?: Array<Schedule>;
	}

	/** Time window specified for weekly operations. */
	export interface WeeklyCycleFormProperties {
	}
	export function CreateWeeklyCycleFormGroup() {
		return new FormGroup<WeeklyCycleFormProperties>({
		});

	}


	/** Configure the schedule. */
	export interface Schedule {

		/** Allows to define schedule that runs specified day of the week. */
		day?: ScheduleDay | null;

		/** Output only. Duration of the time window, set by service producer. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Configure the schedule. */
	export interface ScheduleFormProperties {

		/** Allows to define schedule that runs specified day of the week. */
		day: FormControl<ScheduleDay | null | undefined>,

		/** Output only. Duration of the time window, set by service producer. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			day: new FormControl<ScheduleDay | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduleDay { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


	/** Contains notification related data. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter {

		/** Optional. Array of string values. e.g. instance's replica information. */
		values?: Array<string>;
	}

	/** Contains notification related data. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameterFormProperties {
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1NotificationParameterFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameterFormProperties>({
		});

	}


	/** Describes provisioned dataplane resources. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource {

		/** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
		resourceType?: string | null;

		/** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
		resourceUrl?: string | null;
	}

	/** Describes provisioned dataplane resources. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResourceFormProperties {

		/** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
		resourceType: FormControl<string | null | undefined>,

		/** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
		resourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResourceFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResourceFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SloMetadata contains resources required for proper SLO classification of the instance. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata {

		/** Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch. */
		nodes?: Array<GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata>;

		/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
		perSliEligibility?: GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility;

		/** Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. */
		tier?: string | null;
	}

	/** SloMetadata contains resources required for proper SLO classification of the instance. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloMetadataFormProperties {

		/** Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1SloMetadataFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1SloMetadataFormProperties>({
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata {

		/** The location of the node, if different from instance location. */
		location?: string | null;

		/** The id of the node. This should be equal to SaasInstanceNode.node_id. */
		nodeId?: string | null;

		/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
		perSliEligibility?: GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility;
	}

	/** Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadataFormProperties {

		/** The location of the node, if different from instance location. */
		location: FormControl<string | null | undefined>,

		/** The id of the node. This should be equal to SaasInstanceNode.node_id. */
		nodeId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadataFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadataFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility {

		/** An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. */
		eligibilities?: {[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility };
	}

	/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibilityFormProperties {

		/** An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. */
		eligibilities: FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility } | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibilityFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibilityFormProperties>({
			eligibilities: new FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility } | null | undefined>(undefined),
		});

	}


	/** SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility {

		/** Whether an instance is eligible or ineligible. */
		eligible?: boolean | null;

		/** User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. */
		reason?: string | null;
	}

	/** SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloEligibilityFormProperties {

		/** Whether an instance is eligible or ineligible. */
		eligible: FormControl<boolean | null | undefined>,

		/** User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1SloEligibilityFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1SloEligibilityFormProperties>({
			eligible: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudSaasacceleratorManagementProvidersV1InstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', UPDATING = 'UPDATING', REPAIRING = 'REPAIRING', DELETING = 'DELETING', ERROR = 'ERROR' }


	/** A Filestore instance. */
	export interface Instance {

		/** Output only. The time when the instance was created. */
		createTime?: string | null;

		/** The description of the instance (2048 characters or less). */
		description?: string | null;

		/** Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other. */
		etag?: string | null;

		/** File system shares on the instance. For this version, only a single file share is supported. */
		fileShares?: Array<FileShareConfig>;

		/** KMS key name used for data encryption. */
		kmsKeyName?: string | null;

		/** Resource labels to represent user provided metadata. */
		labels?: {[id: string]: string };

		/** Output only. The resource name of the instance, in the format `projects/{project}/locations/{location}/instances/{instance}`. */
		name?: string | null;

		/** VPC networks to which the instance is connected. For this version, only a single network is supported. */
		networks?: Array<NetworkConfig>;

		/** Output only. Reserved for future use. */
		satisfiesPzi?: boolean | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Output only. The instance state. */
		state?: InstanceState | null;

		/** Output only. Additional information about the instance state, if available. */
		statusMessage?: string | null;

		/** Output only. Field indicates all the reasons the instance is in "SUSPENDED" state. */
		suspensionReasons?: Array<string>;

		/** The service tier of the instance. */
		tier?: BackupSourceInstanceTier | null;
	}

	/** A Filestore instance. */
	export interface InstanceFormProperties {

		/** Output only. The time when the instance was created. */
		createTime: FormControl<string | null | undefined>,

		/** The description of the instance (2048 characters or less). */
		description: FormControl<string | null | undefined>,

		/** Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other. */
		etag: FormControl<string | null | undefined>,

		/** KMS key name used for data encryption. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Resource labels to represent user provided metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource name of the instance, in the format `projects/{project}/locations/{location}/instances/{instance}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzi: FormControl<boolean | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. The instance state. */
		state: FormControl<InstanceState | null | undefined>,

		/** Output only. Additional information about the instance state, if available. */
		statusMessage: FormControl<string | null | undefined>,

		/** The service tier of the instance. */
		tier: FormControl<BackupSourceInstanceTier | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			satisfiesPzi: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<BackupSourceInstanceTier | null | undefined>(undefined),
		});

	}


	/** Network configuration for the instance. */
	export interface NetworkConfig {

		/** The network connect mode of the Filestore instance. If not provided, the connect mode defaults to DIRECT_PEERING. */
		connectMode?: NetworkConfigConnectMode | null;

		/** Output only. IPv4 addresses in the format `{octet1}.{octet2}.{octet3}.{octet4}` or IPv6 addresses in the format `{block1}:{block2}:{block3}:{block4}:{block5}:{block6}:{block7}:{block8}`. */
		ipAddresses?: Array<string>;

		/** Internet protocol versions for which the instance has IP addresses assigned. For this version, only MODE_IPV4 is supported. */
		modes?: Array<string>;

		/** The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. */
		network?: string | null;

		/** Optional, reserved_ip_range can have one of the following two types of values. * CIDR range value when using DIRECT_PEERING connect mode. * [Allocated IP address range](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address) when using PRIVATE_SERVICE_ACCESS connect mode. When the name of an allocated IP address range is specified, it must be one of the ranges associated with the private service access connection. When specified as a direct CIDR value, it must be a /29 CIDR block for Basic tier, a /24 CIDR block for High Scale tier, or a /26 CIDR block for Enterprise tier in one of the [internal IP address ranges](https://www.arin.net/reference/research/statistics/address_filters/) that identifies the range of IP addresses reserved for this instance. For example, 10.0.0.0/29, 192.168.0.0/24 or 192.168.0.0/26, respectively. The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Filestore instances in the selected VPC network. */
		reservedIpRange?: string | null;
	}

	/** Network configuration for the instance. */
	export interface NetworkConfigFormProperties {

		/** The network connect mode of the Filestore instance. If not provided, the connect mode defaults to DIRECT_PEERING. */
		connectMode: FormControl<NetworkConfigConnectMode | null | undefined>,

		/** The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. */
		network: FormControl<string | null | undefined>,

		/** Optional, reserved_ip_range can have one of the following two types of values. * CIDR range value when using DIRECT_PEERING connect mode. * [Allocated IP address range](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address) when using PRIVATE_SERVICE_ACCESS connect mode. When the name of an allocated IP address range is specified, it must be one of the ranges associated with the private service access connection. When specified as a direct CIDR value, it must be a /29 CIDR block for Basic tier, a /24 CIDR block for High Scale tier, or a /26 CIDR block for Enterprise tier in one of the [internal IP address ranges](https://www.arin.net/reference/research/statistics/address_filters/) that identifies the range of IP addresses reserved for this instance. For example, 10.0.0.0/29, 192.168.0.0/24 or 192.168.0.0/26, respectively. The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Filestore instances in the selected VPC network. */
		reservedIpRange: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			connectMode: new FormControl<NetworkConfigConnectMode | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			reservedIpRange: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkConfigConnectMode { CONNECT_MODE_UNSPECIFIED = 'CONNECT_MODE_UNSPECIFIED', DIRECT_PEERING = 'DIRECT_PEERING', PRIVATE_SERVICE_ACCESS = 'PRIVATE_SERVICE_ACCESS' }

	export enum InstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', REPAIRING = 'REPAIRING', DELETING = 'DELETING', ERROR = 'ERROR', RESTORING = 'RESTORING', SUSPENDED = 'SUSPENDED', SUSPENDING = 'SUSPENDING', RESUMING = 'RESUMING', REVERTING = 'REVERTING' }


	/** ListBackupsResponse is the result of ListBackupsRequest. */
	export interface ListBackupsResponse {

		/** A list of backups in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of backups from all locations. If any location is unreachable, the response will only return backups in reachable locations and the "unreachable" field will be populated with a list of unreachable locations. */
		backups?: Array<Backup>;

		/** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListBackupsResponse is the result of ListBackupsRequest. */
	export interface ListBackupsResponseFormProperties {

		/** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupsResponseFormGroup() {
		return new FormGroup<ListBackupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListInstancesResponse is the result of ListInstancesRequest. */
	export interface ListInstancesResponse {

		/** A list of instances in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of instances from all locations. If any location is unreachable, the response will only return instances in reachable locations and the "unreachable" field will be populated with a list of unreachable locations. */
		instances?: Array<Instance>;

		/** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListInstancesResponse is the result of ListInstancesRequest. */
	export interface ListInstancesResponseFormProperties {

		/** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
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

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
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

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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


	/** ListSnapshotsResponse is the result of ListSnapshotsRequest. */
	export interface ListSnapshotsResponse {

		/** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
		nextPageToken?: string | null;

		/** A list of snapshots in the project for the specified instance. */
		snapshots?: Array<Snapshot>;
	}

	/** ListSnapshotsResponse is the result of ListSnapshotsRequest. */
	export interface ListSnapshotsResponseFormProperties {

		/** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSnapshotsResponseFormGroup() {
		return new FormGroup<ListSnapshotsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Filestore snapshot. */
	export interface Snapshot {

		/** Output only. The time when the snapshot was created. */
		createTime?: string | null;

		/** A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected. */
		description?: string | null;

		/** Output only. The amount of bytes needed to allocate a full copy of the snapshot content */
		filesystemUsedBytes?: string | null;

		/** Resource labels to represent user provided metadata. */
		labels?: {[id: string]: string };

		/** Output only. The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}`. */
		name?: string | null;

		/** Output only. The snapshot state. */
		state?: SnapshotState | null;
	}

	/** A Filestore snapshot. */
	export interface SnapshotFormProperties {

		/** Output only. The time when the snapshot was created. */
		createTime: FormControl<string | null | undefined>,

		/** A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected. */
		description: FormControl<string | null | undefined>,

		/** Output only. The amount of bytes needed to allocate a full copy of the snapshot content */
		filesystemUsedBytes: FormControl<string | null | undefined>,

		/** Resource labels to represent user provided metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The snapshot state. */
		state: FormControl<SnapshotState | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			filesystemUsedBytes: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SnapshotState | null | undefined>(undefined),
		});

	}

	export enum SnapshotState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', DELETING = 'DELETING' }


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested?: boolean | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RestoreInstanceRequest restores an existing instance's file share from a backup. */
	export interface RestoreInstanceRequest {

		/** Required. Name of the file share in the Filestore instance that the backup is being restored to. */
		fileShare?: string | null;

		/** The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`. */
		sourceBackup?: string | null;
	}

	/** RestoreInstanceRequest restores an existing instance's file share from a backup. */
	export interface RestoreInstanceRequestFormProperties {

		/** Required. Name of the file share in the Filestore instance that the backup is being restored to. */
		fileShare: FormControl<string | null | undefined>,

		/** The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`. */
		sourceBackup: FormControl<string | null | undefined>,
	}
	export function CreateRestoreInstanceRequestFormGroup() {
		return new FormGroup<RestoreInstanceRequestFormProperties>({
			fileShare: new FormControl<string | null | undefined>(undefined),
			sourceBackup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RevertInstanceRequest reverts the given instance's file share to the specified snapshot. */
	export interface RevertInstanceRequest {

		/** Required. The snapshot resource ID, in the format 'my-snapshot', where the specified ID is the {snapshot_id} of the fully qualified name like `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}` */
		targetSnapshotId?: string | null;
	}

	/** RevertInstanceRequest reverts the given instance's file share to the specified snapshot. */
	export interface RevertInstanceRequestFormProperties {

		/** Required. The snapshot resource ID, in the format 'my-snapshot', where the specified ID is the {snapshot_id} of the fully qualified name like `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}` */
		targetSnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateRevertInstanceRequestFormGroup() {
		return new FormGroup<RevertInstanceRequestFormProperties>({
			targetSnapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {boolean} force If set to true, all snapshots of the instance will also be deleted. (Otherwise, the request will only work if the instance has no snapshots.)
		 * @return {Empty} Successful response
		 */
		File_projects_locations_operations_delete(name: string, force: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		File_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the settings of a specific snapshot.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}`.
		 * @param {string} updateMask Required. Mask of fields to update. At least one path must be supplied in this field.
		 * @return {Operation} Successful response
		 */
		File_projects_locations_instances_snapshots_patch(name: string, updateMask: string | null | undefined, requestBody: Snapshot): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {boolean} includeUnrevealedLocations If true, the returned list will include locations which are not yet revealed.
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		File_projects_locations_list(name: string, filter: string | null | undefined, includeUnrevealedLocations: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&includeUnrevealedLocations=' + includeUnrevealedLocations + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		File_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		File_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
		 * Post v1/{name}:restore
		 * @param {string} name Required. The resource name of the instance, in the format `projects/{project_number}/locations/{location_id}/instances/{instance_id}`.
		 * @return {Operation} Successful response
		 */
		File_projects_locations_instances_restore(name: string, requestBody: RestoreInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revert an existing instance's file system to a specified snapshot.
		 * Post v1/{name}:revert
		 * @param {string} name Required. `projects/{project_id}/locations/{location_id}/instances/{instance_id}`. The resource name of the instance, in the format
		 * @return {Operation} Successful response
		 */
		File_projects_locations_instances_revert(name: string, requestBody: RevertInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':revert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all backups in a project for either a specified location or for all locations.
		 * Get v1/{parent}/backups
		 * @param {string} parent Required. The project and location for which to retrieve backup information, in the format `projects/{project_number}/locations/{location}`. In Filestore, backup locations map to Google Cloud regions, for example **us-west1**. To retrieve backup information for all locations, use "-" for the `{location}` value.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results. Supported values are "name", "name desc" or "" (unsorted).
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value to use if there are additional results to retrieve for this list request.
		 * @return {ListBackupsResponse} Successful response
		 */
		File_projects_locations_backups_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBackupsResponse> {
			return this.http.get<ListBackupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a backup.
		 * Post v1/{parent}/backups
		 * @param {string} parent Required. The backup's project and location, in the format `projects/{project_number}/locations/{location}`. In Filestore, backup locations map to Google Cloud regions, for example **us-west1**.
		 * @param {string} backupId Required. The ID to use for the backup. The ID must be unique within the specified project and location. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. Values that do not match this pattern will trigger an INVALID_ARGUMENT error.
		 * @return {Operation} Successful response
		 */
		File_projects_locations_backups_create(parent: string, backupId: string | null | undefined, requestBody: Backup): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&backupId=' + (backupId == null ? '' : encodeURIComponent(backupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all instances in a project for either a specified location or for all locations.
		 * Get v1/{parent}/instances
		 * @param {string} parent Required. The project and location for which to retrieve instance information, in the format `projects/{project_id}/locations/{location}`. In Cloud Filestore, locations map to Google Cloud zones, for example **us-west1-b**. To retrieve instance information for all locations, use "-" for the `{location}` value.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results. Supported values are "name", "name desc" or "" (unsorted).
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value to use if there are additional results to retrieve for this list request.
		 * @return {ListInstancesResponse} Successful response
		 */
		File_projects_locations_instances_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
		 * Post v1/{parent}/instances
		 * @param {string} parent Required. The instance's project and location, in the format `projects/{project_id}/locations/{location}`. In Filestore, locations map to Google Cloud zones, for example **us-west1-b**.
		 * @param {string} instanceId Required. The name of the instance to create. The name must be unique for the specified project and location.
		 * @return {Operation} Successful response
		 */
		File_projects_locations_instances_create(parent: string, instanceId: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all snapshots in a project for either a specified location or for all locations.
		 * Get v1/{parent}/snapshots
		 * @param {string} parent Required. The instance for which to retrieve snapshot information, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results. Supported values are "name", "name desc" or "" (unsorted).
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value to use if there are additional results to retrieve for this list request.
		 * @return {ListSnapshotsResponse} Successful response
		 */
		File_projects_locations_instances_snapshots_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSnapshotsResponse> {
			return this.http.get<ListSnapshotsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/snapshots&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a snapshot.
		 * Post v1/{parent}/snapshots
		 * @param {string} parent Required. The Filestore Instance to create the snapshots of, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @param {string} snapshotId Required. The ID to use for the snapshot. The ID must be unique within the specified instance. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
		 * @return {Operation} Successful response
		 */
		File_projects_locations_instances_snapshots_create(parent: string, snapshotId: string | null | undefined, requestBody: Snapshot): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/snapshots&snapshotId=' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

