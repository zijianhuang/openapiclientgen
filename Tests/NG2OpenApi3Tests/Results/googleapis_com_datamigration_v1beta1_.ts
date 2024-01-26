import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
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

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
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

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
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


	/** Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance. */
	export interface CloudSqlConnectionProfile {

		/** Output only. The Cloud SQL instance ID that this connection profile is associated with. */
		cloudSqlId?: string | null;

		/** Output only. The Cloud SQL database instance's private IP. */
		privateIp?: string | null;

		/** Output only. The Cloud SQL database instance's public IP. */
		publicIp?: string | null;

		/** Settings for creating a Cloud SQL database instance. */
		settings?: CloudSqlSettings;
	}

	/** Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance. */
	export interface CloudSqlConnectionProfileFormProperties {

		/** Output only. The Cloud SQL instance ID that this connection profile is associated with. */
		cloudSqlId: FormControl<string | null | undefined>,

		/** Output only. The Cloud SQL database instance's private IP. */
		privateIp: FormControl<string | null | undefined>,

		/** Output only. The Cloud SQL database instance's public IP. */
		publicIp: FormControl<string | null | undefined>,
	}
	export function CreateCloudSqlConnectionProfileFormGroup() {
		return new FormGroup<CloudSqlConnectionProfileFormProperties>({
			cloudSqlId: new FormControl<string | null | undefined>(undefined),
			privateIp: new FormControl<string | null | undefined>(undefined),
			publicIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for creating a Cloud SQL database instance. */
	export interface CloudSqlSettings {

		/** The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'. Valid values: 'ALWAYS': The instance is on, and remains so even in the absence of connection requests. `NEVER`: The instance is off; it is not activated, even if a connection request arrives. */
		activationPolicy?: CloudSqlSettingsActivationPolicy | null;

		/** [default: ON] If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity. If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB. */
		autoStorageIncrease?: boolean | null;

		/** The storage capacity available to the database, in GB. The minimum (and default) size is 10GB. */
		dataDiskSizeGb?: string | null;

		/** The type of storage: `PD_SSD` (default) or `PD_HDD`. */
		dataDiskType?: CloudSqlSettingsDataDiskType | null;

		/** The database flags passed to the Cloud SQL instance at startup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
		databaseFlags?: {[id: string]: string };

		/** The database engine type and version. */
		databaseVersion?: CloudSqlSettingsDatabaseVersion | null;

		/** IP Management configuration. */
		ipConfig?: SqlIpConfig;

		/** Input only. Initial root password. */
		rootPassword?: string | null;

		/** Output only. Indicates If this connection profile root password is stored. */
		rootPasswordSet?: boolean | null;

		/** The Database Migration Service source connection profile ID, in the format: `projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID` */
		sourceId?: string | null;

		/** The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. */
		storageAutoResizeLimit?: string | null;

		/** The tier (or machine type) for this instance, for example: `db-n1-standard-1` (MySQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings). */
		tier?: string | null;

		/** The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "18kg", "count": "3" }`. */
		userLabels?: {[id: string]: string };

		/** The Google Cloud Platform zone where your Cloud SQL database instance is located. */
		zone?: string | null;
	}

	/** Settings for creating a Cloud SQL database instance. */
	export interface CloudSqlSettingsFormProperties {

		/** The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'. Valid values: 'ALWAYS': The instance is on, and remains so even in the absence of connection requests. `NEVER`: The instance is off; it is not activated, even if a connection request arrives. */
		activationPolicy: FormControl<CloudSqlSettingsActivationPolicy | null | undefined>,

		/** [default: ON] If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity. If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB. */
		autoStorageIncrease: FormControl<boolean | null | undefined>,

		/** The storage capacity available to the database, in GB. The minimum (and default) size is 10GB. */
		dataDiskSizeGb: FormControl<string | null | undefined>,

		/** The type of storage: `PD_SSD` (default) or `PD_HDD`. */
		dataDiskType: FormControl<CloudSqlSettingsDataDiskType | null | undefined>,

		/** The database flags passed to the Cloud SQL instance at startup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
		databaseFlags: FormControl<{[id: string]: string } | null | undefined>,

		/** The database engine type and version. */
		databaseVersion: FormControl<CloudSqlSettingsDatabaseVersion | null | undefined>,

		/** Input only. Initial root password. */
		rootPassword: FormControl<string | null | undefined>,

		/** Output only. Indicates If this connection profile root password is stored. */
		rootPasswordSet: FormControl<boolean | null | undefined>,

		/** The Database Migration Service source connection profile ID, in the format: `projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID` */
		sourceId: FormControl<string | null | undefined>,

		/** The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. */
		storageAutoResizeLimit: FormControl<string | null | undefined>,

		/** The tier (or machine type) for this instance, for example: `db-n1-standard-1` (MySQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings). */
		tier: FormControl<string | null | undefined>,

		/** The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "18kg", "count": "3" }`. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** The Google Cloud Platform zone where your Cloud SQL database instance is located. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateCloudSqlSettingsFormGroup() {
		return new FormGroup<CloudSqlSettingsFormProperties>({
			activationPolicy: new FormControl<CloudSqlSettingsActivationPolicy | null | undefined>(undefined),
			autoStorageIncrease: new FormControl<boolean | null | undefined>(undefined),
			dataDiskSizeGb: new FormControl<string | null | undefined>(undefined),
			dataDiskType: new FormControl<CloudSqlSettingsDataDiskType | null | undefined>(undefined),
			databaseFlags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			databaseVersion: new FormControl<CloudSqlSettingsDatabaseVersion | null | undefined>(undefined),
			rootPassword: new FormControl<string | null | undefined>(undefined),
			rootPasswordSet: new FormControl<boolean | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			storageAutoResizeLimit: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudSqlSettingsActivationPolicy { SQL_ACTIVATION_POLICY_UNSPECIFIED = 0, ALWAYS = 1, NEVER = 2 }

	export enum CloudSqlSettingsDataDiskType { SQL_DATA_DISK_TYPE_UNSPECIFIED = 0, PD_SSD = 1, PD_HDD = 2 }

	export enum CloudSqlSettingsDatabaseVersion { SQL_DATABASE_VERSION_UNSPECIFIED = 0, MYSQL_5_6 = 1, MYSQL_5_7 = 2, MYSQL_8_0 = 3 }


	/** IP Management configuration. */
	export interface SqlIpConfig {

		/** The list of external networks that are allowed to connect to the instance using the IP. See https://en.wikipedia.org/wiki/CIDR_notation#CIDR_notation, also known as 'slash' notation (e.g. `192.168.100.0/24`). */
		authorizedNetworks?: Array<SqlAclEntry>;

		/** Whether the instance is assigned a public IP address or not. */
		enableIpv4?: boolean | null;

		/** The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set. */
		privateNetwork?: string | null;

		/** Whether SSL connections over IP should be enforced or not. */
		requireSsl?: boolean | null;
	}

	/** IP Management configuration. */
	export interface SqlIpConfigFormProperties {

		/** Whether the instance is assigned a public IP address or not. */
		enableIpv4: FormControl<boolean | null | undefined>,

		/** The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set. */
		privateNetwork: FormControl<string | null | undefined>,

		/** Whether SSL connections over IP should be enforced or not. */
		requireSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateSqlIpConfigFormGroup() {
		return new FormGroup<SqlIpConfigFormProperties>({
			enableIpv4: new FormControl<boolean | null | undefined>(undefined),
			privateNetwork: new FormControl<string | null | undefined>(undefined),
			requireSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An entry for an Access Control list. */
	export interface SqlAclEntry {

		/** The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example: `2012-11-15T16:19:00.094Z`. */
		expireTime?: string | null;

		/** A label to identify this entry. */
		label?: string | null;

		/** Input only. The time-to-leave of this access control entry. */
		ttl?: string | null;

		/** The allowlisted value for the access control list. */
		value?: string | null;
	}

	/** An entry for an Access Control list. */
	export interface SqlAclEntryFormProperties {

		/** The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example: `2012-11-15T16:19:00.094Z`. */
		expireTime: FormControl<string | null | undefined>,

		/** A label to identify this entry. */
		label: FormControl<string | null | undefined>,

		/** Input only. The time-to-leave of this access control entry. */
		ttl: FormControl<string | null | undefined>,

		/** The allowlisted value for the access control list. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSqlAclEntryFormGroup() {
		return new FormGroup<SqlAclEntryFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A connection profile definition. */
	export interface ConnectionProfile {

		/** Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance. */
		cloudsql?: CloudSqlConnectionProfile;

		/** Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
		createTime?: string | null;

		/** The connection profile display name. */
		displayName?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`. */
		labels?: {[id: string]: string };

		/** Specifies connection parameters required specifically for MySQL databases. */
		mysql?: MySqlConnectionProfile;

		/** The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}. */
		name?: string | null;

		/** The database provider. */
		provider?: ConnectionProfileProvider | null;

		/** The current connection profile state (e.g. DRAFT, READY, or FAILED). */
		state?: ConnectionProfileState | null;

		/** Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
		updateTime?: string | null;
	}

	/** A connection profile definition. */
	export interface ConnectionProfileFormProperties {

		/** Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
		createTime: FormControl<string | null | undefined>,

		/** The connection profile display name. */
		displayName: FormControl<string | null | undefined>,

		/** The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}. */
		name: FormControl<string | null | undefined>,

		/** The database provider. */
		provider: FormControl<ConnectionProfileProvider | null | undefined>,

		/** The current connection profile state (e.g. DRAFT, READY, or FAILED). */
		state: FormControl<ConnectionProfileState | null | undefined>,

		/** Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateConnectionProfileFormGroup() {
		return new FormGroup<ConnectionProfileFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<ConnectionProfileProvider | null | undefined>(undefined),
			state: new FormControl<ConnectionProfileState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
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


	/** Specifies connection parameters required specifically for MySQL databases. */
	export interface MySqlConnectionProfile {

		/** If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. */
		cloudSqlId?: string | null;

		/** Required. The IP or hostname of the source MySQL database. */
		host?: string | null;

		/** Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. */
		password?: string | null;

		/** Output only. Indicates If this connection profile password is stored. */
		passwordSet?: boolean | null;

		/** Required. The network port of the source MySQL database. */
		port?: number | null;

		/** SSL configuration information. */
		ssl?: SslConfig;

		/** Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. */
		username?: string | null;
	}

	/** Specifies connection parameters required specifically for MySQL databases. */
	export interface MySqlConnectionProfileFormProperties {

		/** If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. */
		cloudSqlId: FormControl<string | null | undefined>,

		/** Required. The IP or hostname of the source MySQL database. */
		host: FormControl<string | null | undefined>,

		/** Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. */
		password: FormControl<string | null | undefined>,

		/** Output only. Indicates If this connection profile password is stored. */
		passwordSet: FormControl<boolean | null | undefined>,

		/** Required. The network port of the source MySQL database. */
		port: FormControl<number | null | undefined>,

		/** Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateMySqlConnectionProfileFormGroup() {
		return new FormGroup<MySqlConnectionProfileFormProperties>({
			cloudSqlId: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			passwordSet: new FormControl<boolean | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SSL configuration information. */
	export interface SslConfig {

		/** Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host. */
		caCertificate?: string | null;

		/** Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.If this field is used then the 'client_key' field is mandatory. */
		clientCertificate?: string | null;

		/** Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' field is mandatory. */
		clientKey?: string | null;

		/** Output only. The ssl config type according to 'client_key', 'client_certificate' and 'ca_certificate'. */
		type?: SslConfigType | null;
	}

	/** SSL configuration information. */
	export interface SslConfigFormProperties {

		/** Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host. */
		caCertificate: FormControl<string | null | undefined>,

		/** Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.If this field is used then the 'client_key' field is mandatory. */
		clientCertificate: FormControl<string | null | undefined>,

		/** Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' field is mandatory. */
		clientKey: FormControl<string | null | undefined>,

		/** Output only. The ssl config type according to 'client_key', 'client_certificate' and 'ca_certificate'. */
		type: FormControl<SslConfigType | null | undefined>,
	}
	export function CreateSslConfigFormGroup() {
		return new FormGroup<SslConfigFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined),
			clientCertificate: new FormControl<string | null | undefined>(undefined),
			clientKey: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SslConfigType | null | undefined>(undefined),
		});

	}

	export enum SslConfigType { SSL_TYPE_UNSPECIFIED = 0, SERVER_ONLY = 1, SERVER_CLIENT = 2 }

	export enum ConnectionProfileProvider { DATABASE_PROVIDER_UNSPECIFIED = 0, CLOUDSQL = 1, RDS = 2 }

	export enum ConnectionProfileState { STATE_UNSPECIFIED = 0, DRAFT = 1, CREATING = 2, READY = 3, UPDATING = 4, DELETING = 5, DELETED = 6, FAILED = 7 }


	/** A message defining the database engine and provider. */
	export interface DatabaseType {

		/** The database engine. */
		engine?: DatabaseTypeEngine | null;

		/** The database provider. */
		provider?: ConnectionProfileProvider | null;
	}

	/** A message defining the database engine and provider. */
	export interface DatabaseTypeFormProperties {

		/** The database engine. */
		engine: FormControl<DatabaseTypeEngine | null | undefined>,

		/** The database provider. */
		provider: FormControl<ConnectionProfileProvider | null | undefined>,
	}
	export function CreateDatabaseTypeFormGroup() {
		return new FormGroup<DatabaseTypeFormProperties>({
			engine: new FormControl<DatabaseTypeEngine | null | undefined>(undefined),
			provider: new FormControl<ConnectionProfileProvider | null | undefined>(undefined),
		});

	}

	export enum DatabaseTypeEngine { DATABASE_ENGINE_UNSPECIFIED = 0, MYSQL = 1 }


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


	/** Request message for 'GenerateSshScript' request. */
	export interface GenerateSshScriptRequest {

		/** Required. Bastion VM Instance name to use or to create. */
		vm?: string | null;

		/** VM creation configuration message */
		vmCreationConfig?: VmCreationConfig;

		/** The port that will be open on the bastion host */
		vmPort?: number | null;

		/** VM selection configuration message */
		vmSelectionConfig?: VmSelectionConfig;
	}

	/** Request message for 'GenerateSshScript' request. */
	export interface GenerateSshScriptRequestFormProperties {

		/** Required. Bastion VM Instance name to use or to create. */
		vm: FormControl<string | null | undefined>,

		/** The port that will be open on the bastion host */
		vmPort: FormControl<number | null | undefined>,
	}
	export function CreateGenerateSshScriptRequestFormGroup() {
		return new FormGroup<GenerateSshScriptRequestFormProperties>({
			vm: new FormControl<string | null | undefined>(undefined),
			vmPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** VM creation configuration message */
	export interface VmCreationConfig {

		/** The subnet name the vm needs to be created in. */
		subnet?: string | null;

		/** Required. VM instance machine type to create. */
		vmMachineType?: string | null;

		/** The Google Cloud Platform zone to create the VM in. */
		vmZone?: string | null;
	}

	/** VM creation configuration message */
	export interface VmCreationConfigFormProperties {

		/** The subnet name the vm needs to be created in. */
		subnet: FormControl<string | null | undefined>,

		/** Required. VM instance machine type to create. */
		vmMachineType: FormControl<string | null | undefined>,

		/** The Google Cloud Platform zone to create the VM in. */
		vmZone: FormControl<string | null | undefined>,
	}
	export function CreateVmCreationConfigFormGroup() {
		return new FormGroup<VmCreationConfigFormProperties>({
			subnet: new FormControl<string | null | undefined>(undefined),
			vmMachineType: new FormControl<string | null | undefined>(undefined),
			vmZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VM selection configuration message */
	export interface VmSelectionConfig {

		/** Required. The Google Cloud Platform zone the VM is located. */
		vmZone?: string | null;
	}

	/** VM selection configuration message */
	export interface VmSelectionConfigFormProperties {

		/** Required. The Google Cloud Platform zone the VM is located. */
		vmZone: FormControl<string | null | undefined>,
	}
	export function CreateVmSelectionConfigFormGroup() {
		return new FormGroup<VmSelectionConfigFormProperties>({
			vmZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudClouddmsV1beta1OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudClouddmsV1beta1OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudClouddmsV1beta1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudClouddmsV1beta1OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListConnectionProfiles' request. */
	export interface ListConnectionProfilesResponse {

		/** The response list of connection profiles. */
		connectionProfiles?: Array<ConnectionProfile>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListConnectionProfiles' request. */
	export interface ListConnectionProfilesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionProfilesResponseFormGroup() {
		return new FormGroup<ListConnectionProfilesResponseFormProperties>({
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


	/** Response message for 'ListMigrationJobs' request. */
	export interface ListMigrationJobsResponse {

		/** The list of migration jobs objects. */
		migrationJobs?: Array<MigrationJob>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListMigrationJobs' request. */
	export interface ListMigrationJobsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMigrationJobsResponseFormGroup() {
		return new FormGroup<ListMigrationJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Database Migration Service migration job object. */
	export interface MigrationJob {

		/** Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
		createTime?: string | null;

		/** Required. The resource name (URI) of the destination connection profile. */
		destination?: string | null;

		/** A message defining the database engine and provider. */
		destinationDatabase?: DatabaseType;

		/** The migration job display name. */
		displayName?: string | null;

		/** The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). */
		dumpPath?: string | null;

		/** Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
		duration?: string | null;

		/** Output only. If the migration job is completed, the time when it was completed. */
		endTime?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`. */
		labels?: {[id: string]: string };

		/** The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. */
		name?: string | null;

		/** Output only. The current migration job phase. */
		phase?: MigrationJobPhase | null;

		/** The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1beta1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC. */
		reverseSshConnectivity?: ReverseSshConnectivity;

		/** Required. The resource name (URI) of the source connection profile. */
		source?: string | null;

		/** A message defining the database engine and provider. */
		sourceDatabase?: DatabaseType;

		/** The current migration job state. */
		state?: MigrationJobState | null;

		/** The source database will allow incoming connections from the destination database's public IP. You can retrieve the Cloud SQL instance's public IP from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required. */
		staticIpConnectivity?: StaticIpConnectivity;

		/** Required. The migration job type. */
		type?: MigrationJobType | null;

		/** Output only. The timestamp when the migration job resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
		updateTime?: string | null;

		/** The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC. */
		vpcPeeringConnectivity?: VpcPeeringConnectivity;
	}

	/** Represents a Database Migration Service migration job object. */
	export interface MigrationJobFormProperties {

		/** Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
		createTime: FormControl<string | null | undefined>,

		/** Required. The resource name (URI) of the destination connection profile. */
		destination: FormControl<string | null | undefined>,

		/** The migration job display name. */
		displayName: FormControl<string | null | undefined>,

		/** The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). */
		dumpPath: FormControl<string | null | undefined>,

		/** Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
		duration: FormControl<string | null | undefined>,

		/** Output only. If the migration job is completed, the time when it was completed. */
		endTime: FormControl<string | null | undefined>,

		/** The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. */
		name: FormControl<string | null | undefined>,

		/** Output only. The current migration job phase. */
		phase: FormControl<MigrationJobPhase | null | undefined>,

		/** Required. The resource name (URI) of the source connection profile. */
		source: FormControl<string | null | undefined>,

		/** The current migration job state. */
		state: FormControl<MigrationJobState | null | undefined>,

		/** Required. The migration job type. */
		type: FormControl<MigrationJobType | null | undefined>,

		/** Output only. The timestamp when the migration job resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMigrationJobFormGroup() {
		return new FormGroup<MigrationJobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			dumpPath: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phase: new FormControl<MigrationJobPhase | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MigrationJobState | null | undefined>(undefined),
			type: new FormControl<MigrationJobType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MigrationJobPhase { PHASE_UNSPECIFIED = 0, FULL_DUMP = 1, CDC = 2, PROMOTE_IN_PROGRESS = 3, WAITING_FOR_SOURCE_WRITES_TO_STOP = 4, PREPARING_THE_DUMP = 5 }


	/** The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1beta1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC. */
	export interface ReverseSshConnectivity {

		/** The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. */
		vm?: string | null;

		/** Required. The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. */
		vmIp?: string | null;

		/** Required. The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. */
		vmPort?: number | null;

		/** The name of the VPC to peer with the Cloud SQL private network. */
		vpc?: string | null;
	}

	/** The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1beta1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC. */
	export interface ReverseSshConnectivityFormProperties {

		/** The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. */
		vm: FormControl<string | null | undefined>,

		/** Required. The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. */
		vmIp: FormControl<string | null | undefined>,

		/** Required. The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. */
		vmPort: FormControl<number | null | undefined>,

		/** The name of the VPC to peer with the Cloud SQL private network. */
		vpc: FormControl<string | null | undefined>,
	}
	export function CreateReverseSshConnectivityFormGroup() {
		return new FormGroup<ReverseSshConnectivityFormProperties>({
			vm: new FormControl<string | null | undefined>(undefined),
			vmIp: new FormControl<string | null | undefined>(undefined),
			vmPort: new FormControl<number | null | undefined>(undefined),
			vpc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MigrationJobState { STATE_UNSPECIFIED = 0, MAINTENANCE = 1, DRAFT = 2, CREATING = 3, NOT_STARTED = 4, RUNNING = 5, FAILED = 6, COMPLETED = 7, DELETING = 8, STOPPING = 9, STOPPED = 10, DELETED = 11, UPDATING = 12, STARTING = 13, RESTARTING = 14, RESUMING = 15 }


	/** The source database will allow incoming connections from the destination database's public IP. You can retrieve the Cloud SQL instance's public IP from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required. */
	export interface StaticIpConnectivity {
	}

	/** The source database will allow incoming connections from the destination database's public IP. You can retrieve the Cloud SQL instance's public IP from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required. */
	export interface StaticIpConnectivityFormProperties {
	}
	export function CreateStaticIpConnectivityFormGroup() {
		return new FormGroup<StaticIpConnectivityFormProperties>({
		});

	}

	export enum MigrationJobType { TYPE_UNSPECIFIED = 0, ONE_TIME = 1, CONTINUOUS = 2 }


	/** The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC. */
	export interface VpcPeeringConnectivity {

		/** The name of the VPC network to peer with the Cloud SQL private network. */
		vpc?: string | null;
	}

	/** The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC. */
	export interface VpcPeeringConnectivityFormProperties {

		/** The name of the VPC network to peer with the Cloud SQL private network. */
		vpc: FormControl<string | null | undefined>,
	}
	export function CreateVpcPeeringConnectivityFormGroup() {
		return new FormGroup<VpcPeeringConnectivityFormProperties>({
			vpc: new FormControl<string | null | undefined>(undefined),
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


	/** Error message of a verification Migration job. */
	export interface MigrationJobVerificationError {

		/** Output only. An instance of ErrorCode specifying the error that occurred. */
		errorCode?: MigrationJobVerificationErrorErrorCode | null;

		/** Output only. A specific detailed error message, if supplied by the engine. */
		errorDetailMessage?: string | null;

		/** Output only. A formatted message with further details about the error and a CTA. */
		errorMessage?: string | null;
	}

	/** Error message of a verification Migration job. */
	export interface MigrationJobVerificationErrorFormProperties {

		/** Output only. An instance of ErrorCode specifying the error that occurred. */
		errorCode: FormControl<MigrationJobVerificationErrorErrorCode | null | undefined>,

		/** Output only. A specific detailed error message, if supplied by the engine. */
		errorDetailMessage: FormControl<string | null | undefined>,

		/** Output only. A formatted message with further details about the error and a CTA. */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateMigrationJobVerificationErrorFormGroup() {
		return new FormGroup<MigrationJobVerificationErrorFormProperties>({
			errorCode: new FormControl<MigrationJobVerificationErrorErrorCode | null | undefined>(undefined),
			errorDetailMessage: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MigrationJobVerificationErrorErrorCode { ERROR_CODE_UNSPECIFIED = 0, CONNECTION_FAILURE = 1, AUTHENTICATION_FAILURE = 2, INVALID_CONNECTION_PROFILE_CONFIG = 3, VERSION_INCOMPATIBILITY = 4, CONNECTION_PROFILE_TYPES_INCOMPATIBILITY = 5, UNSUPPORTED_GTID_MODE = 6, UNSUPPORTED_DEFINER = 7, CANT_RESTART_RUNNING_MIGRATION = 8, TABLES_WITH_LIMITED_SUPPORT = 9, UNSUPPORTED_DATABASE_LOCALE = 10, UNSUPPORTED_DATABASE_FDW_CONFIG = 11, ERROR_RDBMS = 12, SOURCE_SIZE_EXCEEDS_THRESHOLD = 13, EXISTING_CONFLICTING_DATABASES = 14, PARALLEL_IMPORT_INSUFFICIENT_PRIVILEGE = 15, EXISTING_DATA = 16 }


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for 'PromoteMigrationJob' request. */
	export interface PromoteMigrationJobRequest {
	}

	/** Request message for 'PromoteMigrationJob' request. */
	export interface PromoteMigrationJobRequestFormProperties {
	}
	export function CreatePromoteMigrationJobRequestFormGroup() {
		return new FormGroup<PromoteMigrationJobRequestFormProperties>({
		});

	}


	/** Request message for 'RestartMigrationJob' request. */
	export interface RestartMigrationJobRequest {
	}

	/** Request message for 'RestartMigrationJob' request. */
	export interface RestartMigrationJobRequestFormProperties {
	}
	export function CreateRestartMigrationJobRequestFormGroup() {
		return new FormGroup<RestartMigrationJobRequestFormProperties>({
		});

	}


	/** Request message for 'ResumeMigrationJob' request. */
	export interface ResumeMigrationJobRequest {
	}

	/** Request message for 'ResumeMigrationJob' request. */
	export interface ResumeMigrationJobRequestFormProperties {
	}
	export function CreateResumeMigrationJobRequestFormGroup() {
		return new FormGroup<ResumeMigrationJobRequestFormProperties>({
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'GenerateSshScript' request. */
	export interface SshScript {

		/** The ssh configuration script. */
		script?: string | null;
	}

	/** Response message for 'GenerateSshScript' request. */
	export interface SshScriptFormProperties {

		/** The ssh configuration script. */
		script: FormControl<string | null | undefined>,
	}
	export function CreateSshScriptFormGroup() {
		return new FormGroup<SshScriptFormProperties>({
			script: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for 'StartMigrationJob' request. */
	export interface StartMigrationJobRequest {
	}

	/** Request message for 'StartMigrationJob' request. */
	export interface StartMigrationJobRequestFormProperties {
	}
	export function CreateStartMigrationJobRequestFormGroup() {
		return new FormGroup<StartMigrationJobRequestFormProperties>({
		});

	}


	/** Request message for 'StopMigrationJob' request. */
	export interface StopMigrationJobRequest {
	}

	/** Request message for 'StopMigrationJob' request. */
	export interface StopMigrationJobRequestFormProperties {
	}
	export function CreateStopMigrationJobRequestFormGroup() {
		return new FormGroup<StopMigrationJobRequestFormProperties>({
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}


	/** Request message for 'VerifyMigrationJob' request. */
	export interface VerifyMigrationJobRequest {
	}

	/** Request message for 'VerifyMigrationJob' request. */
	export interface VerifyMigrationJobRequestFormProperties {
	}
	export function CreateVerifyMigrationJobRequestFormGroup() {
		return new FormGroup<VerifyMigrationJobRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Generate a SSH configuration script to configure the reverse SSH connectivity.
		 * Post v1beta1/{migrationJob}:generateSshScript
		 * @param {string} migrationJob Name of the migration job resource to generate the SSH script.
		 * @return {SshScript} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_generateSshScript(migrationJob: string, requestBody: GenerateSshScriptRequest): Observable<SshScript> {
			return this.http.post<SshScript>(this.baseUri + 'v1beta1/' + (migrationJob == null ? '' : encodeURIComponent(migrationJob)) + ':generateSshScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1beta1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {boolean} force The destination CloudSQL connection profile is always deleted with the migration job. In case of force delete, the destination CloudSQL replica database is also deleted.
		 * @param {string} requestId A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Empty} Successful response
		 */
		Datamigration_projects_locations_operations_delete(name: string, force: boolean | null | undefined, requestId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the parameters of a single migration job.
		 * Patch v1beta1/{name}
		 * @param {string} name The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.
		 * @param {string} requestId A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @param {string} updateMask Required. Field mask is used to specify the fields to be overwritten in the migration job resource by the update.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: MigrationJob): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Datamigration_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
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
		Datamigration_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1beta1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Datamigration_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
		 * Post v1beta1/{name}:promote
		 * @param {string} name Name of the migration job resource to promote.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_promote(name: string, requestBody: PromoteMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':promote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
		 * Post v1beta1/{name}:restart
		 * @param {string} name Name of the migration job resource to restart.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_restart(name: string, requestBody: RestartMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':restart', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
		 * Post v1beta1/{name}:resume
		 * @param {string} name Name of the migration job resource to resume.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_resume(name: string, requestBody: ResumeMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start an already created migration job.
		 * Post v1beta1/{name}:start
		 * @param {string} name Name of the migration job resource to start.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_start(name: string, requestBody: StartMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a running migration job.
		 * Post v1beta1/{name}:stop
		 * @param {string} name Name of the migration job resource to stop.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_stop(name: string, requestBody: StopMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
		 * Post v1beta1/{name}:verify
		 * @param {string} name Name of the migration job resource to verify.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_verify(name: string, requestBody: VerifyMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a list of all connection profiles in a given project and location.
		 * Get v1beta1/{parent}/connectionProfiles
		 * @param {string} parent Required. The parent, which owns this collection of connection profiles.
		 * @param {string} filter A filter expression that filters connection profiles listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list connection profiles created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z**. You can also filter nested fields. For example, you could specify **mySql.username = %lt;my_username%gt;** to list all connection profiles configured to connect with a specific username.
		 * @param {string} orderBy the order by fields for the result.
		 * @param {number} pageSize The maximum number of connection profiles to return. The service may return fewer than this value. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.
		 * @return {ListConnectionProfilesResponse} Successful response
		 */
		Datamigration_projects_locations_connectionProfiles_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConnectionProfilesResponse> {
			return this.http.get<ListConnectionProfilesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectionProfiles&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new connection profile in a given project and location.
		 * Post v1beta1/{parent}/connectionProfiles
		 * @param {string} parent Required. The parent, which owns this collection of connection profiles.
		 * @param {string} connectionProfileId Required. The connection profile identifier.
		 * @param {string} requestId A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_connectionProfiles_create(parent: string, connectionProfileId: string | null | undefined, requestId: string | null | undefined, requestBody: ConnectionProfile): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectionProfiles&connectionProfileId=' + (connectionProfileId == null ? '' : encodeURIComponent(connectionProfileId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists migration jobs in a given project and location.
		 * Get v1beta1/{parent}/migrationJobs
		 * @param {string} parent Required. The parent, which owns this collection of migrationJobs.
		 * @param {string} filter A filter expression that filters migration jobs listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list migration jobs created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **reverseSshConnectivity.vmIp = "1.2.3.4"** to select all migration jobs connecting through the specific SSH tunnel bastion.
		 * @param {string} orderBy Sort the results based on the migration job name. Valid values are: "name", "name asc", and "name desc".
		 * @param {number} pageSize The maximum number of migration jobs to return. The service may return fewer than this value. If unspecified, at most 50 migration jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken The nextPageToken value received in the previous call to migrationJobs.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to migrationJobs.list must match the call that provided the page token.
		 * @return {ListMigrationJobsResponse} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMigrationJobsResponse> {
			return this.http.get<ListMigrationJobsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/migrationJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new migration job in a given project and location.
		 * Post v1beta1/{parent}/migrationJobs
		 * @param {string} parent Required. The parent, which owns this collection of migration jobs.
		 * @param {string} migrationJobId Required. The ID of the instance to create.
		 * @param {string} requestId A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_create(parent: string, migrationJobId: string | null | undefined, requestId: string | null | undefined, requestBody: MigrationJob): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/migrationJobs&migrationJobId=' + (migrationJobId == null ? '' : encodeURIComponent(migrationJobId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

