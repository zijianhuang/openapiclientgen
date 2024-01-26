import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request for ApplyParameters. */
	export interface ApplyParametersRequest {

		/** Whether to apply instance-level parameter group to all nodes. If set to true, users are restricted from specifying individual nodes, and `ApplyParameters` updates all nodes within the instance. */
		applyAll?: boolean | null;

		/** Nodes to which the instance-level parameter group is applied. */
		nodeIds?: Array<string>;
	}

	/** Request for ApplyParameters. */
	export interface ApplyParametersRequestFormProperties {

		/** Whether to apply instance-level parameter group to all nodes. If set to true, users are restricted from specifying individual nodes, and `ApplyParameters` updates all nodes within the instance. */
		applyAll: FormControl<boolean | null | undefined>,
	}
	export function CreateApplyParametersRequestFormGroup() {
		return new FormGroup<ApplyParametersRequestFormProperties>({
			applyAll: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request for ApplySoftwareUpdate. */
	export interface ApplySoftwareUpdateRequest {

		/** Whether to apply the update to all nodes. If set to true, will explicitly restrict users from specifying any nodes, and apply software update to all nodes (where applicable) within the instance. */
		applyAll?: boolean | null;

		/** Nodes to which we should apply the update to. Note all the selected nodes are updated in parallel. */
		nodeIds?: Array<string>;
	}

	/** Request for ApplySoftwareUpdate. */
	export interface ApplySoftwareUpdateRequestFormProperties {

		/** Whether to apply the update to all nodes. If set to true, will explicitly restrict users from specifying any nodes, and apply software update to all nodes (where applicable) within the instance. */
		applyAll: FormControl<boolean | null | undefined>,
	}
	export function CreateApplySoftwareUpdateRequestFormGroup() {
		return new FormGroup<ApplySoftwareUpdateRequestFormProperties>({
			applyAll: new FormControl<boolean | null | undefined>(undefined),
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

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes: FormControl<number | null | undefined>,

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos: FormControl<number | null | undefined>,

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
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


	/** Metadata for the given google.cloud.location.Location. */
	export interface GoogleCloudMemcacheV1beta2LocationMetadata {

		/** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the `zones` field when creating a Memcached instance. */
		availableZones?: {[id: string]: GoogleCloudMemcacheV1beta2ZoneMetadata };
	}

	/** Metadata for the given google.cloud.location.Location. */
	export interface GoogleCloudMemcacheV1beta2LocationMetadataFormProperties {

		/** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the `zones` field when creating a Memcached instance. */
		availableZones: FormControl<{[id: string]: GoogleCloudMemcacheV1beta2ZoneMetadata } | null | undefined>,
	}
	export function CreateGoogleCloudMemcacheV1beta2LocationMetadataFormGroup() {
		return new FormGroup<GoogleCloudMemcacheV1beta2LocationMetadataFormProperties>({
			availableZones: new FormControl<{[id: string]: GoogleCloudMemcacheV1beta2ZoneMetadata } | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudMemcacheV1beta2ZoneMetadata {
	}
	export interface GoogleCloudMemcacheV1beta2ZoneMetadataFormProperties {
	}
	export function CreateGoogleCloudMemcacheV1beta2ZoneMetadataFormGroup() {
		return new FormGroup<GoogleCloudMemcacheV1beta2ZoneMetadataFormProperties>({
		});

	}


	/** Maintenance policy per instance. */
	export interface GoogleCloudMemcacheV1beta2MaintenancePolicy {

		/** Output only. The time when the policy was created. */
		createTime?: string | null;

		/** Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description?: string | null;

		/** Output only. The time when the policy was updated. */
		updateTime?: string | null;

		/** Required. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_maintenance_windows is expected to be one. */
		weeklyMaintenanceWindow?: Array<WeeklyMaintenanceWindow>;
	}

	/** Maintenance policy per instance. */
	export interface GoogleCloudMemcacheV1beta2MaintenancePolicyFormProperties {

		/** Output only. The time when the policy was created. */
		createTime: FormControl<string | null | undefined>,

		/** Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description: FormControl<string | null | undefined>,

		/** Output only. The time when the policy was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMemcacheV1beta2MaintenancePolicyFormGroup() {
		return new FormGroup<GoogleCloudMemcacheV1beta2MaintenancePolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Time window specified for weekly operations. */
	export interface WeeklyMaintenanceWindow {

		/** Required. Allows to define schedule that runs specified day of the week. */
		day?: WeeklyMaintenanceWindowDay | null;

		/** Required. Duration of the time window. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Time window specified for weekly operations. */
	export interface WeeklyMaintenanceWindowFormProperties {

		/** Required. Allows to define schedule that runs specified day of the week. */
		day: FormControl<WeeklyMaintenanceWindowDay | null | undefined>,

		/** Required. Duration of the time window. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateWeeklyMaintenanceWindowFormGroup() {
		return new FormGroup<WeeklyMaintenanceWindowFormProperties>({
			day: new FormControl<WeeklyMaintenanceWindowDay | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WeeklyMaintenanceWindowDay { DAY_OF_WEEK_UNSPECIFIED = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6, SUNDAY = 7 }


	/** Represents the metadata of a long-running operation. */
	export interface GoogleCloudMemcacheV1beta2OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested?: boolean | null;

		/** Output only. Time when the operation was created. */
		createTime?: string | null;

		/** Output only. Time when the operation finished running. */
		endTime?: string | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of a long-running operation. */
	export interface GoogleCloudMemcacheV1beta2OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** Output only. Time when the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time when the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMemcacheV1beta2OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudMemcacheV1beta2OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for UpgradeInstance. */
	export interface GoogleCloudMemcacheV1beta2UpgradeInstanceRequest {

		/** Required. Specifies the target version of memcached engine to upgrade to. */
		memcacheVersion?: GoogleCloudMemcacheV1beta2UpgradeInstanceRequestMemcacheVersion | null;
	}

	/** Request for UpgradeInstance. */
	export interface GoogleCloudMemcacheV1beta2UpgradeInstanceRequestFormProperties {

		/** Required. Specifies the target version of memcached engine to upgrade to. */
		memcacheVersion: FormControl<GoogleCloudMemcacheV1beta2UpgradeInstanceRequestMemcacheVersion | null | undefined>,
	}
	export function CreateGoogleCloudMemcacheV1beta2UpgradeInstanceRequestFormGroup() {
		return new FormGroup<GoogleCloudMemcacheV1beta2UpgradeInstanceRequestFormProperties>({
			memcacheVersion: new FormControl<GoogleCloudMemcacheV1beta2UpgradeInstanceRequestMemcacheVersion | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMemcacheV1beta2UpgradeInstanceRequestMemcacheVersion { MEMCACHE_VERSION_UNSPECIFIED = 0, MEMCACHE_1_5 = 1, MEMCACHE_1_6_15 = 2 }


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

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_settings.maintenance_policies is set. */
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

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_settings.maintenance_policies is set. */
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

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
		maintenancePolicies?: {[id: string]: MaintenancePolicy };
	}

	/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettingsFormProperties {

		/** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
		exclude: FormControl<boolean | null | undefined>,

		/** Optional. If the update call is triggered from rollback, set the value as true. */
		isRollback: FormControl<boolean | null | undefined>,

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
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

	export enum MaintenancePolicyState { STATE_UNSPECIFIED = 0, READY = 1, DELETING = 2 }


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

	export enum UpdatePolicyChannel { UPDATE_CHANNEL_UNSPECIFIED = 0, EARLIER = 1, LATER = 2, WEEK1 = 3, WEEK2 = 4, WEEK5 = 5 }


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
		day?: WeeklyMaintenanceWindowDay | null;

		/** Output only. Duration of the time window, set by service producer. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Configure the schedule. */
	export interface ScheduleFormProperties {

		/** Allows to define schedule that runs specified day of the week. */
		day: FormControl<WeeklyMaintenanceWindowDay | null | undefined>,

		/** Output only. Duration of the time window, set by service producer. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			day: new FormControl<WeeklyMaintenanceWindowDay | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}


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

	export enum GoogleCloudSaasacceleratorManagementProvidersV1InstanceState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, UPDATING = 3, REPAIRING = 4, DELETING = 5, ERROR = 6 }


	/** A Memorystore for Memcached instance */
	export interface Instance {

		/** The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used. */
		authorizedNetwork?: string | null;

		/** Output only. The time the instance was created. */
		createTime?: string | null;

		/** Output only. Endpoint for the Discovery API. */
		discoveryEndpoint?: string | null;

		/** User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters. */
		displayName?: string | null;

		/** List of messages that describe the current state of the Memcached instance. */
		instanceMessages?: Array<InstanceMessage>;

		/** Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Maintenance policy per instance. */
		maintenancePolicy?: GoogleCloudMemcacheV1beta2MaintenancePolicy;

		/** Upcoming maintenance schedule. */
		maintenanceSchedule?: MaintenanceSchedule;

		/** Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be "memcached-1.5.16". */
		memcacheFullVersion?: string | null;

		/** Output only. List of Memcached nodes. Refer to Node message for more details. */
		memcacheNodes?: Array<Node>;

		/** The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version. */
		memcacheVersion?: GoogleCloudMemcacheV1beta2UpgradeInstanceRequestMemcacheVersion | null;

		/** Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details. */
		name?: string | null;

		/** Configuration for a Memcached Node. */
		nodeConfig?: NodeConfig;

		/** Required. Number of nodes in the Memcached instance. */
		nodeCount?: number | null;
		parameters?: MemcacheParameters;

		/** Optional. Contains the id of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29. */
		reservedIpRangeId?: Array<string>;

		/** Output only. The state of this Memcached instance. */
		state?: InstanceState | null;

		/** Output only. Returns true if there is an update waiting to be applied */
		updateAvailable?: boolean | null;

		/** Output only. The time the instance was updated. */
		updateTime?: string | null;

		/** Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance. */
		zones?: Array<string>;
	}

	/** A Memorystore for Memcached instance */
	export interface InstanceFormProperties {

		/** The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used. */
		authorizedNetwork: FormControl<string | null | undefined>,

		/** Output only. The time the instance was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Endpoint for the Discovery API. */
		discoveryEndpoint: FormControl<string | null | undefined>,

		/** User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be "memcached-1.5.16". */
		memcacheFullVersion: FormControl<string | null | undefined>,

		/** The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is `MEMCACHE_1_5`. The minor version will be automatically determined by our system based on the latest supported minor version. */
		memcacheVersion: FormControl<GoogleCloudMemcacheV1beta2UpgradeInstanceRequestMemcacheVersion | null | undefined>,

		/** Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details. */
		name: FormControl<string | null | undefined>,

		/** Required. Number of nodes in the Memcached instance. */
		nodeCount: FormControl<number | null | undefined>,

		/** Output only. The state of this Memcached instance. */
		state: FormControl<InstanceState | null | undefined>,

		/** Output only. Returns true if there is an update waiting to be applied */
		updateAvailable: FormControl<boolean | null | undefined>,

		/** Output only. The time the instance was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			authorizedNetwork: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			discoveryEndpoint: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			memcacheFullVersion: new FormControl<string | null | undefined>(undefined),
			memcacheVersion: new FormControl<GoogleCloudMemcacheV1beta2UpgradeInstanceRequestMemcacheVersion | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			updateAvailable: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstanceMessage {

		/** A code that correspond to one type of user-facing message. */
		code?: InstanceMessageCode | null;

		/** Message on memcached instance which will be exposed to users. */
		message?: string | null;
	}
	export interface InstanceMessageFormProperties {

		/** A code that correspond to one type of user-facing message. */
		code: FormControl<InstanceMessageCode | null | undefined>,

		/** Message on memcached instance which will be exposed to users. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInstanceMessageFormGroup() {
		return new FormGroup<InstanceMessageFormProperties>({
			code: new FormControl<InstanceMessageCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceMessageCode { CODE_UNSPECIFIED = 0, ZONE_DISTRIBUTION_UNBALANCED = 1 }


	/** Upcoming maintenance schedule. */
	export interface MaintenanceSchedule {

		/** Output only. The end time of any upcoming scheduled maintenance for this instance. */
		endTime?: string | null;

		/** Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule. */
		scheduleDeadlineTime?: string | null;

		/** Output only. The start time of any upcoming scheduled maintenance for this instance. */
		startTime?: string | null;
	}

	/** Upcoming maintenance schedule. */
	export interface MaintenanceScheduleFormProperties {

		/** Output only. The end time of any upcoming scheduled maintenance for this instance. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule. */
		scheduleDeadlineTime: FormControl<string | null | undefined>,

		/** Output only. The start time of any upcoming scheduled maintenance for this instance. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceScheduleFormGroup() {
		return new FormGroup<MaintenanceScheduleFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			scheduleDeadlineTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Node {

		/** Output only. Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node. */
		host?: string | null;

		/** Output only. The full version of memcached server running on this node. e.g. - memcached-1.5.16 */
		memcacheFullVersion?: string | null;

		/** Output only. Major version of memcached server running on this node, e.g. MEMCACHE_1_5 */
		memcacheVersion?: GoogleCloudMemcacheV1beta2UpgradeInstanceRequestMemcacheVersion | null;

		/** Output only. Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name. */
		nodeId?: string | null;
		parameters?: MemcacheParameters;

		/** Output only. The port number of the Memcached server on this node. */
		port?: number | null;

		/** Output only. Current state of the Memcached node. */
		state?: NodeState | null;

		/** Output only. Returns true if there is an update waiting to be applied */
		updateAvailable?: boolean | null;

		/** Output only. Location (GCP Zone) for the Memcached node. */
		zone?: string | null;
	}
	export interface NodeFormProperties {

		/** Output only. Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node. */
		host: FormControl<string | null | undefined>,

		/** Output only. The full version of memcached server running on this node. e.g. - memcached-1.5.16 */
		memcacheFullVersion: FormControl<string | null | undefined>,

		/** Output only. Major version of memcached server running on this node, e.g. MEMCACHE_1_5 */
		memcacheVersion: FormControl<GoogleCloudMemcacheV1beta2UpgradeInstanceRequestMemcacheVersion | null | undefined>,

		/** Output only. Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name. */
		nodeId: FormControl<string | null | undefined>,

		/** Output only. The port number of the Memcached server on this node. */
		port: FormControl<number | null | undefined>,

		/** Output only. Current state of the Memcached node. */
		state: FormControl<NodeState | null | undefined>,

		/** Output only. Returns true if there is an update waiting to be applied */
		updateAvailable: FormControl<boolean | null | undefined>,

		/** Output only. Location (GCP Zone) for the Memcached node. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			memcacheFullVersion: new FormControl<string | null | undefined>(undefined),
			memcacheVersion: new FormControl<GoogleCloudMemcacheV1beta2UpgradeInstanceRequestMemcacheVersion | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<NodeState | null | undefined>(undefined),
			updateAvailable: new FormControl<boolean | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemcacheParameters {

		/** Output only. The unique ID associated with this set of parameters. Users can use this id to determine if the parameters associated with the instance differ from the parameters associated with the nodes. A discrepancy between parameter ids can inform users that they may need to take action to apply parameters on nodes. */
		id?: string | null;

		/** User defined set of parameters to use in the memcached process. */
		params?: {[id: string]: string };
	}
	export interface MemcacheParametersFormProperties {

		/** Output only. The unique ID associated with this set of parameters. Users can use this id to determine if the parameters associated with the instance differ from the parameters associated with the nodes. A discrepancy between parameter ids can inform users that they may need to take action to apply parameters on nodes. */
		id: FormControl<string | null | undefined>,

		/** User defined set of parameters to use in the memcached process. */
		params: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMemcacheParametersFormGroup() {
		return new FormGroup<MemcacheParametersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum NodeState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, DELETING = 3, UPDATING = 4 }


	/** Configuration for a Memcached Node. */
	export interface NodeConfig {

		/** Required. Number of cpus per Memcached node. */
		cpuCount?: number | null;

		/** Required. Memory size in MiB for each Memcached node. */
		memorySizeMb?: number | null;
	}

	/** Configuration for a Memcached Node. */
	export interface NodeConfigFormProperties {

		/** Required. Number of cpus per Memcached node. */
		cpuCount: FormControl<number | null | undefined>,

		/** Required. Memory size in MiB for each Memcached node. */
		memorySizeMb: FormControl<number | null | undefined>,
	}
	export function CreateNodeConfigFormGroup() {
		return new FormGroup<NodeConfigFormProperties>({
			cpuCount: new FormControl<number | null | undefined>(undefined),
			memorySizeMb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InstanceState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, UPDATING = 3, DELETING = 4, PERFORMING_MAINTENANCE = 5, MEMCACHE_VERSION_UPGRADING = 6 }


	/** Response for ListInstances. */
	export interface ListInstancesResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** A list of Memcached instances in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated. */
		resources?: Array<Instance>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListInstances. */
	export interface ListInstancesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
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


	/** Metadata for the given google.cloud.location.Location. */
	export interface LocationMetadata {

		/** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the `zones` field when creating a Memcached instance. */
		availableZones?: {[id: string]: ZoneMetadata };
	}

	/** Metadata for the given google.cloud.location.Location. */
	export interface LocationMetadataFormProperties {

		/** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the `zones` field when creating a Memcached instance. */
		availableZones: FormControl<{[id: string]: ZoneMetadata } | null | undefined>,
	}
	export function CreateLocationMetadataFormGroup() {
		return new FormGroup<LocationMetadataFormProperties>({
			availableZones: new FormControl<{[id: string]: ZoneMetadata } | null | undefined>(undefined),
		});

	}

	export interface ZoneMetadata {
	}
	export interface ZoneMetadataFormProperties {
	}
	export function CreateZoneMetadataFormGroup() {
		return new FormGroup<ZoneMetadataFormProperties>({
		});

	}


	/** Represents the metadata of a long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested?: boolean | null;

		/** Output only. Time when the operation was created. */
		createTime?: string | null;

		/** Output only. Time when the operation finished running. */
		endTime?: string | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of a long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** Output only. Time when the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time when the operation finished running. */
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


	/** Request for RescheduleMaintenance. */
	export interface RescheduleMaintenanceRequest {

		/** Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well. */
		rescheduleType?: RescheduleMaintenanceRequestRescheduleType | null;

		/** Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`. */
		scheduleTime?: string | null;
	}

	/** Request for RescheduleMaintenance. */
	export interface RescheduleMaintenanceRequestFormProperties {

		/** Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well. */
		rescheduleType: FormControl<RescheduleMaintenanceRequestRescheduleType | null | undefined>,

		/** Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`. */
		scheduleTime: FormControl<string | null | undefined>,
	}
	export function CreateRescheduleMaintenanceRequestFormGroup() {
		return new FormGroup<RescheduleMaintenanceRequestFormProperties>({
			rescheduleType: new FormControl<RescheduleMaintenanceRequestRescheduleType | null | undefined>(undefined),
			scheduleTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RescheduleMaintenanceRequestRescheduleType { RESCHEDULE_TYPE_UNSPECIFIED = 0, IMMEDIATE = 1, NEXT_AVAILABLE_WINDOW = 2, SPECIFIC_TIME = 3 }


	/** Request for UpdateParameters. */
	export interface UpdateParametersRequest {
		parameters?: MemcacheParameters;

		/** Required. Mask of fields to update. */
		updateMask?: string | null;
	}

	/** Request for UpdateParameters. */
	export interface UpdateParametersRequestFormProperties {

		/** Required. Mask of fields to update. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateParametersRequestFormGroup() {
		return new FormGroup<UpdateParametersRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Updates software on the selected nodes of the Instance.
		 * Post v1beta2/{instance}:applySoftwareUpdate
		 * @param {string} instance Required. Resource name of the Memcached instance for which software update should be applied.
		 * @return {Operation} Successful response
		 */
		Memcache_projects_locations_instances_applySoftwareUpdate(instance: string, requestBody: ApplySoftwareUpdateRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta2/' + (instance == null ? '' : encodeURIComponent(instance)) + ':applySoftwareUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs the apply phase of the RescheduleMaintenance verb.
		 * Post v1beta2/{instance}:rescheduleMaintenance
		 * @param {string} instance Required. Memcache instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
		 * @return {Operation} Successful response
		 */
		Memcache_projects_locations_instances_rescheduleMaintenance(instance: string, requestBody: RescheduleMaintenanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta2/' + (instance == null ? '' : encodeURIComponent(instance)) + ':rescheduleMaintenance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1beta2/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Memcache_projects_locations_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta2/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Memcache_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an existing Instance in a given project and location.
		 * Patch v1beta2/{name}
		 * @param {string} name Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Memcached instances are managed and addressed at the regional level so `location_id` here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details.
		 * @param {string} updateMask Required. Mask of fields to update. * `displayName`
		 * @return {Operation} Successful response
		 */
		Memcache_projects_locations_instances_patch(name: string, updateMask: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta2/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Memcache_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta2/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Memcache_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
		 * Post v1beta2/{name}:applyParameters
		 * @param {string} name Required. Resource name of the Memcached instance for which parameter group updates should be applied.
		 * @return {Operation} Successful response
		 */
		Memcache_projects_locations_instances_applyParameters(name: string, requestBody: ApplyParametersRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + ':applyParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1beta2/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Memcache_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.
		 * Patch v1beta2/{name}:updateParameters
		 * @param {string} name Required. Resource name of the Memcached instance for which the parameters should be updated.
		 * @return {Operation} Successful response
		 */
		Memcache_projects_locations_instances_updateParameters(name: string, requestBody: UpdateParametersRequest): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + ':updateParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upgrades the Memcache instance to a newer memcached engine version specified in the request.
		 * Post v1beta2/{name}:upgrade
		 * @param {string} name Required. Memcache instance resource name using the form: `projects/{project}/locations/{location}/instances/{instance}` where `location_id` refers to a GCP region.
		 * @return {Operation} Successful response
		 */
		Memcache_projects_locations_instances_upgrade(name: string, requestBody: GoogleCloudMemcacheV1beta2UpgradeInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + ':upgrade', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Instances in a given location.
		 * Get v1beta2/{parent}/instances
		 * @param {string} parent Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region
		 * @param {string} filter List filter. For example, exclude all Memcached instances with name as my-instance by specifying `"name != my-instance"`.
		 * @param {string} orderBy Sort results. Supported values are "name", "name desc" or "" (unsorted).
		 * @param {number} pageSize The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the `page_size` value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried.
		 * @param {string} pageToken The `next_page_token` value returned from a previous List request, if any.
		 * @return {ListInstancesResponse} Successful response
		 */
		Memcache_projects_locations_instances_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v1beta2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Instance in a given location.
		 * Post v1beta2/{parent}/instances
		 * @param {string} parent Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region
		 * @param {string} instanceId Required. The logical name of the Memcached instance in the user project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the user project / location. If any of the above are not met, the API raises an invalid argument error.
		 * @return {Operation} Successful response
		 */
		Memcache_projects_locations_instances_create(parent: string, instanceId: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

