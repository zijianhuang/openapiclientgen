import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster. */
	export interface AlloyDbConnectionProfile {

		/** Required. The AlloyDB cluster ID that this connection profile is associated with. */
		clusterId?: string | null;

		/** Settings for creating an AlloyDB cluster. */
		settings?: AlloyDbSettings;
	}

	/** Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster. */
	export interface AlloyDbConnectionProfileFormProperties {

		/** Required. The AlloyDB cluster ID that this connection profile is associated with. */
		clusterId: FormControl<string | null | undefined>,
	}
	export function CreateAlloyDbConnectionProfileFormGroup() {
		return new FormGroup<AlloyDbConnectionProfileFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for creating an AlloyDB cluster. */
	export interface AlloyDbSettings {

		/** Optional. The database engine major version. This is an optional field. If a database version is not supplied at cluster creation time, then a default database version will be used. */
		databaseVersion?: AlloyDbSettingsDatabaseVersion | null;

		/** EncryptionConfig describes the encryption config of a cluster that is encrypted with a CMEK (customer-managed encryption key). */
		encryptionConfig?: EncryptionConfig;

		/** The username/password for a database user. Used for specifying initial users at cluster creation time. */
		initialUser?: UserPassword;

		/** Labels for the AlloyDB cluster created by DMS. An object containing a list of 'key', 'value' pairs. */
		labels?: {[id: string]: string };

		/** Settings for the cluster's primary instance */
		primaryInstanceSettings?: PrimaryInstanceSettings;

		/** Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: "projects/{project_number}/global/networks/{network_id}". This is required to create a cluster. */
		vpcNetwork?: string | null;
	}

	/** Settings for creating an AlloyDB cluster. */
	export interface AlloyDbSettingsFormProperties {

		/** Optional. The database engine major version. This is an optional field. If a database version is not supplied at cluster creation time, then a default database version will be used. */
		databaseVersion: FormControl<AlloyDbSettingsDatabaseVersion | null | undefined>,

		/** Labels for the AlloyDB cluster created by DMS. An object containing a list of 'key', 'value' pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: "projects/{project_number}/global/networks/{network_id}". This is required to create a cluster. */
		vpcNetwork: FormControl<string | null | undefined>,
	}
	export function CreateAlloyDbSettingsFormGroup() {
		return new FormGroup<AlloyDbSettingsFormProperties>({
			databaseVersion: new FormControl<AlloyDbSettingsDatabaseVersion | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			vpcNetwork: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlloyDbSettingsDatabaseVersion { DATABASE_VERSION_UNSPECIFIED = 0, POSTGRES_14 = 1, POSTGRES_15 = 2 }


	/** EncryptionConfig describes the encryption config of a cluster that is encrypted with a CMEK (customer-managed encryption key). */
	export interface EncryptionConfig {

		/** The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
		kmsKeyName?: string | null;
	}

	/** EncryptionConfig describes the encryption config of a cluster that is encrypted with a CMEK (customer-managed encryption key). */
	export interface EncryptionConfigFormProperties {

		/** The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The username/password for a database user. Used for specifying initial users at cluster creation time. */
	export interface UserPassword {

		/** The initial password for the user. */
		password?: string | null;

		/** Output only. Indicates if the initial_user.password field has been set. */
		passwordSet?: boolean | null;

		/** The database username. */
		user?: string | null;
	}

	/** The username/password for a database user. Used for specifying initial users at cluster creation time. */
	export interface UserPasswordFormProperties {

		/** The initial password for the user. */
		password: FormControl<string | null | undefined>,

		/** Output only. Indicates if the initial_user.password field has been set. */
		passwordSet: FormControl<boolean | null | undefined>,

		/** The database username. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateUserPasswordFormGroup() {
		return new FormGroup<UserPasswordFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			passwordSet: new FormControl<boolean | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for the cluster's primary instance */
	export interface PrimaryInstanceSettings {

		/** Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used. */
		databaseFlags?: {[id: string]: string };

		/** Required. The ID of the AlloyDB primary instance. The ID must satisfy the regex expression "[a-z0-9-]+". */
		id?: string | null;

		/** Labels for the AlloyDB primary instance created by DMS. An object containing a list of 'key', 'value' pairs. */
		labels?: {[id: string]: string };

		/** MachineConfig describes the configuration of a machine. */
		machineConfig?: MachineConfig;

		/** Output only. The private IP address for the Instance. This is the connection endpoint for an end-user application. */
		privateIp?: string | null;
	}

	/** Settings for the cluster's primary instance */
	export interface PrimaryInstanceSettingsFormProperties {

		/** Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used. */
		databaseFlags: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The ID of the AlloyDB primary instance. The ID must satisfy the regex expression "[a-z0-9-]+". */
		id: FormControl<string | null | undefined>,

		/** Labels for the AlloyDB primary instance created by DMS. An object containing a list of 'key', 'value' pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The private IP address for the Instance. This is the connection endpoint for an end-user application. */
		privateIp: FormControl<string | null | undefined>,
	}
	export function CreatePrimaryInstanceSettingsFormGroup() {
		return new FormGroup<PrimaryInstanceSettingsFormProperties>({
			databaseFlags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			privateIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MachineConfig describes the configuration of a machine. */
	export interface MachineConfig {

		/** The number of CPU's in the VM instance. */
		cpuCount?: number | null;
	}

	/** MachineConfig describes the configuration of a machine. */
	export interface MachineConfigFormProperties {

		/** The number of CPU's in the VM instance. */
		cpuCount: FormControl<number | null | undefined>,
	}
	export function CreateMachineConfigFormGroup() {
		return new FormGroup<MachineConfigFormProperties>({
			cpuCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for 'ApplyConversionWorkspace' request. */
	export interface ApplyConversionWorkspaceRequest {

		/** Optional. Specifies whether the conversion workspace is to be committed automatically after the apply. */
		autoCommit?: boolean | null;

		/** Optional. Fully qualified (Uri) name of the destination connection profile. */
		connectionProfile?: string | null;

		/** Optional. Only validates the apply process, but doesn't change the destination database. Only works for PostgreSQL destination connection profile. */
		dryRun?: boolean | null;

		/** Filter which entities to apply. Leaving this field empty will apply all of the entities. Supports Google AIP 160 based filtering. */
		filter?: string | null;
	}

	/** Request message for 'ApplyConversionWorkspace' request. */
	export interface ApplyConversionWorkspaceRequestFormProperties {

		/** Optional. Specifies whether the conversion workspace is to be committed automatically after the apply. */
		autoCommit: FormControl<boolean | null | undefined>,

		/** Optional. Fully qualified (Uri) name of the destination connection profile. */
		connectionProfile: FormControl<string | null | undefined>,

		/** Optional. Only validates the apply process, but doesn't change the destination database. Only works for PostgreSQL destination connection profile. */
		dryRun: FormControl<boolean | null | undefined>,

		/** Filter which entities to apply. Leaving this field empty will apply all of the entities. Supports Google AIP 160 based filtering. */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateApplyConversionWorkspaceRequestFormGroup() {
		return new FormGroup<ApplyConversionWorkspaceRequestFormProperties>({
			autoCommit: new FormControl<boolean | null | undefined>(undefined),
			connectionProfile: new FormControl<string | null | undefined>(undefined),
			dryRun: new FormControl<boolean | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Apply a hash function on the value. */
	export interface ApplyHash {

		/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
		uuidFromBytes?: Empty;
	}

	/** Apply a hash function on the value. */
	export interface ApplyHashFormProperties {
	}
	export function CreateApplyHashFormGroup() {
		return new FormGroup<ApplyHashFormProperties>({
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


	/** Details regarding an Apply background job. */
	export interface ApplyJobDetails {

		/** Output only. The connection profile which was used for the apply job. */
		connectionProfile?: string | null;

		/** Output only. AIP-160 based filter used to specify the entities to apply */
		filter?: string | null;
	}

	/** Details regarding an Apply background job. */
	export interface ApplyJobDetailsFormProperties {

		/** Output only. The connection profile which was used for the apply job. */
		connectionProfile: FormControl<string | null | undefined>,

		/** Output only. AIP-160 based filter used to specify the entities to apply */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateApplyJobDetailsFormGroup() {
		return new FormGroup<ApplyJobDetailsFormProperties>({
			connectionProfile: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set to a specific value (value is converted to fit the target data type) */
	export interface AssignSpecificValue {

		/** Required. Specific value to be assigned */
		value?: string | null;
	}

	/** Set to a specific value (value is converted to fit the target data type) */
	export interface AssignSpecificValueFormProperties {

		/** Required. Specific value to be assigned */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAssignSpecificValueFormGroup() {
		return new FormGroup<AssignSpecificValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/** Execution log of a background job. */
	export interface BackgroundJobLogEntry {

		/** Details regarding an Apply background job. */
		applyJobDetails?: ApplyJobDetails;

		/** Output only. Job completion comment, such as how many entities were seeded, how many warnings were found during conversion, and similar information. */
		completionComment?: string | null;

		/** Output only. Job completion state, i.e. the final state after the job completed. */
		completionState?: BackgroundJobLogEntryCompletionState | null;

		/** Details regarding a Convert background job. */
		convertJobDetails?: ConvertJobDetails;

		/** The timestamp when the background job was finished. */
		finishTime?: string | null;

		/** The background job log entry ID. */
		id?: string | null;

		/** Details regarding an Import Rules background job. */
		importRulesJobDetails?: ImportRulesJobDetails;

		/** The type of job that was executed. */
		jobType?: BackgroundJobLogEntryJobType | null;

		/** Output only. Whether the client requested the conversion workspace to be committed after a successful completion of the job. */
		requestAutocommit?: boolean | null;

		/** Details regarding a Seed background job. */
		seedJobDetails?: SeedJobDetails;

		/** The timestamp when the background job was started. */
		startTime?: string | null;
	}

	/** Execution log of a background job. */
	export interface BackgroundJobLogEntryFormProperties {

		/** Output only. Job completion comment, such as how many entities were seeded, how many warnings were found during conversion, and similar information. */
		completionComment: FormControl<string | null | undefined>,

		/** Output only. Job completion state, i.e. the final state after the job completed. */
		completionState: FormControl<BackgroundJobLogEntryCompletionState | null | undefined>,

		/** The timestamp when the background job was finished. */
		finishTime: FormControl<string | null | undefined>,

		/** The background job log entry ID. */
		id: FormControl<string | null | undefined>,

		/** The type of job that was executed. */
		jobType: FormControl<BackgroundJobLogEntryJobType | null | undefined>,

		/** Output only. Whether the client requested the conversion workspace to be committed after a successful completion of the job. */
		requestAutocommit: FormControl<boolean | null | undefined>,

		/** The timestamp when the background job was started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateBackgroundJobLogEntryFormGroup() {
		return new FormGroup<BackgroundJobLogEntryFormProperties>({
			completionComment: new FormControl<string | null | undefined>(undefined),
			completionState: new FormControl<BackgroundJobLogEntryCompletionState | null | undefined>(undefined),
			finishTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<BackgroundJobLogEntryJobType | null | undefined>(undefined),
			requestAutocommit: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackgroundJobLogEntryCompletionState { JOB_COMPLETION_STATE_UNSPECIFIED = 0, SUCCEEDED = 1, FAILED = 2 }


	/** Details regarding a Convert background job. */
	export interface ConvertJobDetails {

		/** Output only. AIP-160 based filter used to specify the entities to convert */
		filter?: string | null;
	}

	/** Details regarding a Convert background job. */
	export interface ConvertJobDetailsFormProperties {

		/** Output only. AIP-160 based filter used to specify the entities to convert */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateConvertJobDetailsFormGroup() {
		return new FormGroup<ConvertJobDetailsFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details regarding an Import Rules background job. */
	export interface ImportRulesJobDetails {

		/** Output only. The requested file format. */
		fileFormat?: ImportRulesJobDetailsFileFormat | null;

		/** Output only. File names used for the import rules job. */
		files?: Array<string>;
	}

	/** Details regarding an Import Rules background job. */
	export interface ImportRulesJobDetailsFormProperties {

		/** Output only. The requested file format. */
		fileFormat: FormControl<ImportRulesJobDetailsFileFormat | null | undefined>,
	}
	export function CreateImportRulesJobDetailsFormGroup() {
		return new FormGroup<ImportRulesJobDetailsFormProperties>({
			fileFormat: new FormControl<ImportRulesJobDetailsFileFormat | null | undefined>(undefined),
		});

	}

	export enum ImportRulesJobDetailsFileFormat { IMPORT_RULES_FILE_FORMAT_UNSPECIFIED = 0, IMPORT_RULES_FILE_FORMAT_HARBOUR_BRIDGE_SESSION_FILE = 1, IMPORT_RULES_FILE_FORMAT_ORATOPG_CONFIG_FILE = 2 }

	export enum BackgroundJobLogEntryJobType { BACKGROUND_JOB_TYPE_UNSPECIFIED = 0, BACKGROUND_JOB_TYPE_SOURCE_SEED = 1, BACKGROUND_JOB_TYPE_CONVERT = 2, BACKGROUND_JOB_TYPE_APPLY_DESTINATION = 3, BACKGROUND_JOB_TYPE_IMPORT_RULES_FILE = 4 }


	/** Details regarding a Seed background job. */
	export interface SeedJobDetails {

		/** Output only. The connection profile which was used for the seed job. */
		connectionProfile?: string | null;
	}

	/** Details regarding a Seed background job. */
	export interface SeedJobDetailsFormProperties {

		/** Output only. The connection profile which was used for the seed job. */
		connectionProfile: FormControl<string | null | undefined>,
	}
	export function CreateSeedJobDetailsFormGroup() {
		return new FormGroup<SeedJobDetailsFormProperties>({
			connectionProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


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

		/** Output only. The Cloud SQL database instance's additional (outgoing) public IP. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available). */
		additionalPublicIp?: string | null;

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

		/** Output only. The Cloud SQL database instance's additional (outgoing) public IP. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available). */
		additionalPublicIp: FormControl<string | null | undefined>,

		/** Output only. The Cloud SQL instance ID that this connection profile is associated with. */
		cloudSqlId: FormControl<string | null | undefined>,

		/** Output only. The Cloud SQL database instance's private IP. */
		privateIp: FormControl<string | null | undefined>,

		/** Output only. The Cloud SQL database instance's public IP. */
		publicIp: FormControl<string | null | undefined>,
	}
	export function CreateCloudSqlConnectionProfileFormGroup() {
		return new FormGroup<CloudSqlConnectionProfileFormProperties>({
			additionalPublicIp: new FormControl<string | null | undefined>(undefined),
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

		/** Optional. Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data availability. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available). */
		availabilityType?: CloudSqlSettingsAvailabilityType | null;

		/** The KMS key name used for the csql instance. */
		cmekKeyName?: string | null;

		/** The Cloud SQL default instance level collation. */
		collation?: string | null;

		/** Data cache is an optional feature available for Cloud SQL for MySQL Enterprise Plus edition only. For more information on data cache, see [Data cache overview](https://cloud.google.com/sql/help/mysql-data-cache) in Cloud SQL documentation. */
		dataCacheConfig?: DataCacheConfig;

		/** The storage capacity available to the database, in GB. The minimum (and default) size is 10GB. */
		dataDiskSizeGb?: string | null;

		/** The type of storage: `PD_SSD` (default) or `PD_HDD`. */
		dataDiskType?: CloudSqlSettingsDataDiskType | null;

		/** The database flags passed to the Cloud SQL instance at startup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
		databaseFlags?: {[id: string]: string };

		/** The database engine type and version. */
		databaseVersion?: CloudSqlSettingsDatabaseVersion | null;

		/** Optional. The edition of the given Cloud SQL instance. */
		edition?: CloudSqlSettingsEdition | null;

		/** IP Management configuration. */
		ipConfig?: SqlIpConfig;

		/** Input only. Initial root password. */
		rootPassword?: string | null;

		/** Output only. Indicates If this connection profile root password is stored. */
		rootPasswordSet?: boolean | null;

		/** Optional. The Google Cloud Platform zone where the failover Cloud SQL database instance is located. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available). */
		secondaryZone?: string | null;

		/** The Database Migration Service source connection profile ID, in the format: `projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID` */
		sourceId?: string | null;

		/** The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. */
		storageAutoResizeLimit?: string | null;

		/** The tier (or machine type) for this instance, for example: `db-n1-standard-1` (MySQL instances) or `db-custom-1-3840` (PostgreSQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings). */
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

		/** Optional. Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data availability. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available). */
		availabilityType: FormControl<CloudSqlSettingsAvailabilityType | null | undefined>,

		/** The KMS key name used for the csql instance. */
		cmekKeyName: FormControl<string | null | undefined>,

		/** The Cloud SQL default instance level collation. */
		collation: FormControl<string | null | undefined>,

		/** The storage capacity available to the database, in GB. The minimum (and default) size is 10GB. */
		dataDiskSizeGb: FormControl<string | null | undefined>,

		/** The type of storage: `PD_SSD` (default) or `PD_HDD`. */
		dataDiskType: FormControl<CloudSqlSettingsDataDiskType | null | undefined>,

		/** The database flags passed to the Cloud SQL instance at startup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
		databaseFlags: FormControl<{[id: string]: string } | null | undefined>,

		/** The database engine type and version. */
		databaseVersion: FormControl<CloudSqlSettingsDatabaseVersion | null | undefined>,

		/** Optional. The edition of the given Cloud SQL instance. */
		edition: FormControl<CloudSqlSettingsEdition | null | undefined>,

		/** Input only. Initial root password. */
		rootPassword: FormControl<string | null | undefined>,

		/** Output only. Indicates If this connection profile root password is stored. */
		rootPasswordSet: FormControl<boolean | null | undefined>,

		/** Optional. The Google Cloud Platform zone where the failover Cloud SQL database instance is located. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available). */
		secondaryZone: FormControl<string | null | undefined>,

		/** The Database Migration Service source connection profile ID, in the format: `projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID` */
		sourceId: FormControl<string | null | undefined>,

		/** The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. */
		storageAutoResizeLimit: FormControl<string | null | undefined>,

		/** The tier (or machine type) for this instance, for example: `db-n1-standard-1` (MySQL instances) or `db-custom-1-3840` (PostgreSQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings). */
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
			availabilityType: new FormControl<CloudSqlSettingsAvailabilityType | null | undefined>(undefined),
			cmekKeyName: new FormControl<string | null | undefined>(undefined),
			collation: new FormControl<string | null | undefined>(undefined),
			dataDiskSizeGb: new FormControl<string | null | undefined>(undefined),
			dataDiskType: new FormControl<CloudSqlSettingsDataDiskType | null | undefined>(undefined),
			databaseFlags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			databaseVersion: new FormControl<CloudSqlSettingsDatabaseVersion | null | undefined>(undefined),
			edition: new FormControl<CloudSqlSettingsEdition | null | undefined>(undefined),
			rootPassword: new FormControl<string | null | undefined>(undefined),
			rootPasswordSet: new FormControl<boolean | null | undefined>(undefined),
			secondaryZone: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			storageAutoResizeLimit: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudSqlSettingsActivationPolicy { SQL_ACTIVATION_POLICY_UNSPECIFIED = 0, ALWAYS = 1, NEVER = 2 }

	export enum CloudSqlSettingsAvailabilityType { SQL_AVAILABILITY_TYPE_UNSPECIFIED = 0, ZONAL = 1, REGIONAL = 2 }


	/** Data cache is an optional feature available for Cloud SQL for MySQL Enterprise Plus edition only. For more information on data cache, see [Data cache overview](https://cloud.google.com/sql/help/mysql-data-cache) in Cloud SQL documentation. */
	export interface DataCacheConfig {

		/** Optional. Whether data cache is enabled for the instance. */
		dataCacheEnabled?: boolean | null;
	}

	/** Data cache is an optional feature available for Cloud SQL for MySQL Enterprise Plus edition only. For more information on data cache, see [Data cache overview](https://cloud.google.com/sql/help/mysql-data-cache) in Cloud SQL documentation. */
	export interface DataCacheConfigFormProperties {

		/** Optional. Whether data cache is enabled for the instance. */
		dataCacheEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDataCacheConfigFormGroup() {
		return new FormGroup<DataCacheConfigFormProperties>({
			dataCacheEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CloudSqlSettingsDataDiskType { SQL_DATA_DISK_TYPE_UNSPECIFIED = 0, PD_SSD = 1, PD_HDD = 2 }

	export enum CloudSqlSettingsDatabaseVersion { SQL_DATABASE_VERSION_UNSPECIFIED = 0, MYSQL_5_6 = 1, MYSQL_5_7 = 2, MYSQL_8_0 = 3, MYSQL_8_0_18 = 4, MYSQL_8_0_26 = 5, MYSQL_8_0_27 = 6, MYSQL_8_0_28 = 7, MYSQL_8_0_30 = 8, MYSQL_8_0_31 = 9, MYSQL_8_0_32 = 10, MYSQL_8_0_33 = 11, MYSQL_8_0_34 = 12, MYSQL_8_0_35 = 13, POSTGRES_9_6 = 14, POSTGRES_11 = 15, POSTGRES_10 = 16, POSTGRES_12 = 17, POSTGRES_13 = 18, POSTGRES_14 = 19, POSTGRES_15 = 20 }

	export enum CloudSqlSettingsEdition { EDITION_UNSPECIFIED = 0, ENTERPRISE = 1, ENTERPRISE_PLUS = 2 }


	/** IP Management configuration. */
	export interface SqlIpConfig {

		/** Optional. The name of the allocated IP address range for the private IP Cloud SQL instance. This name refers to an already allocated IP range address. If set, the instance IP address will be created in the allocated range. Note that this IP address range can't be modified after the instance is created. If you change the VPC when configuring connectivity settings for the migration job, this field is not relevant. */
		allocatedIpRange?: string | null;

		/** The list of external networks that are allowed to connect to the instance using the IP. See https://en.wikipedia.org/wiki/CIDR_notation#CIDR_notation, also known as 'slash' notation (e.g. `192.168.100.0/24`). */
		authorizedNetworks?: Array<SqlAclEntry>;

		/** Whether the instance should be assigned an IPv4 address or not. */
		enableIpv4?: boolean | null;

		/** The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set. */
		privateNetwork?: string | null;

		/** Whether SSL connections over IP should be enforced or not. */
		requireSsl?: boolean | null;
	}

	/** IP Management configuration. */
	export interface SqlIpConfigFormProperties {

		/** Optional. The name of the allocated IP address range for the private IP Cloud SQL instance. This name refers to an already allocated IP range address. If set, the instance IP address will be created in the allocated range. Note that this IP address range can't be modified after the instance is created. If you change the VPC when configuring connectivity settings for the migration job, this field is not relevant. */
		allocatedIpRange: FormControl<string | null | undefined>,

		/** Whether the instance should be assigned an IPv4 address or not. */
		enableIpv4: FormControl<boolean | null | undefined>,

		/** The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set. */
		privateNetwork: FormControl<string | null | undefined>,

		/** Whether SSL connections over IP should be enforced or not. */
		requireSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateSqlIpConfigFormGroup() {
		return new FormGroup<SqlIpConfigFormProperties>({
			allocatedIpRange: new FormControl<string | null | undefined>(undefined),
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


	/** Column is not used as an independent entity, it is retrieved as part of a Table entity. */
	export interface ColumnEntity {

		/** Is the column of array type. */
		array?: boolean | null;

		/** If the column is array, of which length. */
		arrayLength?: number | null;

		/** Is the column auto-generated/identity. */
		autoGenerated?: boolean | null;

		/** Charset override - instead of table level charset. */
		charset?: string | null;

		/** Collation override - instead of table level collation. */
		collation?: string | null;

		/** Comment associated with the column. */
		comment?: string | null;

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** Column data type. */
		dataType?: string | null;

		/** Default value of the column. */
		defaultValue?: string | null;

		/** Column fractional second precision - used for timestamp based datatypes. */
		fractionalSecondsPrecision?: number | null;

		/** Column length - e.g. varchar (50). */
		length?: string | null;

		/** Column name. */
		name?: string | null;

		/** Is the column nullable. */
		nullable?: boolean | null;

		/** Column order in the table. */
		ordinalPosition?: number | null;

		/** Column precision - when relevant. */
		precision?: number | null;

		/** Column scale - when relevant. */
		scale?: number | null;

		/** Specifies the list of values allowed in the column. Only used for set data type. */
		setValues?: Array<string>;

		/** Is the column a UDT. */
		udt?: boolean | null;
	}

	/** Column is not used as an independent entity, it is retrieved as part of a Table entity. */
	export interface ColumnEntityFormProperties {

		/** Is the column of array type. */
		array: FormControl<boolean | null | undefined>,

		/** If the column is array, of which length. */
		arrayLength: FormControl<number | null | undefined>,

		/** Is the column auto-generated/identity. */
		autoGenerated: FormControl<boolean | null | undefined>,

		/** Charset override - instead of table level charset. */
		charset: FormControl<string | null | undefined>,

		/** Collation override - instead of table level collation. */
		collation: FormControl<string | null | undefined>,

		/** Comment associated with the column. */
		comment: FormControl<string | null | undefined>,

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** Column data type. */
		dataType: FormControl<string | null | undefined>,

		/** Default value of the column. */
		defaultValue: FormControl<string | null | undefined>,

		/** Column fractional second precision - used for timestamp based datatypes. */
		fractionalSecondsPrecision: FormControl<number | null | undefined>,

		/** Column length - e.g. varchar (50). */
		length: FormControl<string | null | undefined>,

		/** Column name. */
		name: FormControl<string | null | undefined>,

		/** Is the column nullable. */
		nullable: FormControl<boolean | null | undefined>,

		/** Column order in the table. */
		ordinalPosition: FormControl<number | null | undefined>,

		/** Column precision - when relevant. */
		precision: FormControl<number | null | undefined>,

		/** Column scale - when relevant. */
		scale: FormControl<number | null | undefined>,

		/** Is the column a UDT. */
		udt: FormControl<boolean | null | undefined>,
	}
	export function CreateColumnEntityFormGroup() {
		return new FormGroup<ColumnEntityFormProperties>({
			array: new FormControl<boolean | null | undefined>(undefined),
			arrayLength: new FormControl<number | null | undefined>(undefined),
			autoGenerated: new FormControl<boolean | null | undefined>(undefined),
			charset: new FormControl<string | null | undefined>(undefined),
			collation: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			fractionalSecondsPrecision: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nullable: new FormControl<boolean | null | undefined>(undefined),
			ordinalPosition: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			udt: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for 'CommitConversionWorkspace' request. */
	export interface CommitConversionWorkspaceRequest {

		/** Optional. Optional name of the commit. */
		commitName?: string | null;
	}

	/** Request message for 'CommitConversionWorkspace' request. */
	export interface CommitConversionWorkspaceRequestFormProperties {

		/** Optional. Optional name of the commit. */
		commitName: FormControl<string | null | undefined>,
	}
	export function CreateCommitConversionWorkspaceRequestFormGroup() {
		return new FormGroup<CommitConversionWorkspaceRequestFormProperties>({
			commitName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options to configure rule type ConditionalColumnSetValue. The rule is used to transform the data which is being replicated/migrated. The rule filter field can refer to one or more entities. The rule scope can be one of: Column. */
	export interface ConditionalColumnSetValue {

		/** Optional. Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** Filter for fixed point number data types such as NUMERIC/NUMBER */
		sourceNumericFilter?: SourceNumericFilter;

		/** Filter for text-based data types like varchar. */
		sourceTextFilter?: SourceTextFilter;

		/** Description of data transformation during migration as part of the ConditionalColumnSetValue. */
		valueTransformation?: ValueTransformation;
	}

	/** Options to configure rule type ConditionalColumnSetValue. The rule is used to transform the data which is being replicated/migrated. The rule filter field can refer to one or more entities. The rule scope can be one of: Column. */
	export interface ConditionalColumnSetValueFormProperties {

		/** Optional. Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateConditionalColumnSetValueFormGroup() {
		return new FormGroup<ConditionalColumnSetValueFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Filter for fixed point number data types such as NUMERIC/NUMBER */
	export interface SourceNumericFilter {

		/** Required. Enum to set the option defining the datatypes numeric filter has to be applied to */
		numericFilterOption?: SourceNumericFilterNumericFilterOption | null;

		/** Optional. The filter will match columns with precision smaller than or equal to this number. */
		sourceMaxPrecisionFilter?: number | null;

		/** Optional. The filter will match columns with scale smaller than or equal to this number. */
		sourceMaxScaleFilter?: number | null;

		/** Optional. The filter will match columns with precision greater than or equal to this number. */
		sourceMinPrecisionFilter?: number | null;

		/** Optional. The filter will match columns with scale greater than or equal to this number. */
		sourceMinScaleFilter?: number | null;
	}

	/** Filter for fixed point number data types such as NUMERIC/NUMBER */
	export interface SourceNumericFilterFormProperties {

		/** Required. Enum to set the option defining the datatypes numeric filter has to be applied to */
		numericFilterOption: FormControl<SourceNumericFilterNumericFilterOption | null | undefined>,

		/** Optional. The filter will match columns with precision smaller than or equal to this number. */
		sourceMaxPrecisionFilter: FormControl<number | null | undefined>,

		/** Optional. The filter will match columns with scale smaller than or equal to this number. */
		sourceMaxScaleFilter: FormControl<number | null | undefined>,

		/** Optional. The filter will match columns with precision greater than or equal to this number. */
		sourceMinPrecisionFilter: FormControl<number | null | undefined>,

		/** Optional. The filter will match columns with scale greater than or equal to this number. */
		sourceMinScaleFilter: FormControl<number | null | undefined>,
	}
	export function CreateSourceNumericFilterFormGroup() {
		return new FormGroup<SourceNumericFilterFormProperties>({
			numericFilterOption: new FormControl<SourceNumericFilterNumericFilterOption | null | undefined>(undefined),
			sourceMaxPrecisionFilter: new FormControl<number | null | undefined>(undefined),
			sourceMaxScaleFilter: new FormControl<number | null | undefined>(undefined),
			sourceMinPrecisionFilter: new FormControl<number | null | undefined>(undefined),
			sourceMinScaleFilter: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SourceNumericFilterNumericFilterOption { NUMERIC_FILTER_OPTION_UNSPECIFIED = 0, NUMERIC_FILTER_OPTION_ALL = 1, NUMERIC_FILTER_OPTION_LIMIT = 2, NUMERIC_FILTER_OPTION_LIMITLESS = 3 }


	/** Filter for text-based data types like varchar. */
	export interface SourceTextFilter {

		/** Optional. The filter will match columns with length smaller than or equal to this number. */
		sourceMaxLengthFilter?: string | null;

		/** Optional. The filter will match columns with length greater than or equal to this number. */
		sourceMinLengthFilter?: string | null;
	}

	/** Filter for text-based data types like varchar. */
	export interface SourceTextFilterFormProperties {

		/** Optional. The filter will match columns with length smaller than or equal to this number. */
		sourceMaxLengthFilter: FormControl<string | null | undefined>,

		/** Optional. The filter will match columns with length greater than or equal to this number. */
		sourceMinLengthFilter: FormControl<string | null | undefined>,
	}
	export function CreateSourceTextFilterFormGroup() {
		return new FormGroup<SourceTextFilterFormProperties>({
			sourceMaxLengthFilter: new FormControl<string | null | undefined>(undefined),
			sourceMinLengthFilter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of data transformation during migration as part of the ConditionalColumnSetValue. */
	export interface ValueTransformation {

		/** Apply a hash function on the value. */
		applyHash?: ApplyHash;

		/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
		assignMaxValue?: Empty;

		/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
		assignMinValue?: Empty;

		/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
		assignNull?: Empty;

		/** Set to a specific value (value is converted to fit the target data type) */
		assignSpecificValue?: AssignSpecificValue;

		/** Filter based on relation between source value and compare value of type double in ConditionalColumnSetValue */
		doubleComparison?: DoubleComparisonFilter;

		/** Filter based on relation between source value and compare value of type integer in ConditionalColumnSetValue */
		intComparison?: IntComparisonFilter;

		/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
		isNull?: Empty;

		/** This allows the data to change scale, for example if the source is 2 digits after the decimal point, specify round to scale value = 2. If for example the value needs to be converted to an integer, use round to scale value = 0. */
		roundScale?: RoundToScale;

		/** A list of values to filter by in ConditionalColumnSetValue */
		valueList?: ValueListFilter;
	}

	/** Description of data transformation during migration as part of the ConditionalColumnSetValue. */
	export interface ValueTransformationFormProperties {
	}
	export function CreateValueTransformationFormGroup() {
		return new FormGroup<ValueTransformationFormProperties>({
		});

	}


	/** Filter based on relation between source value and compare value of type double in ConditionalColumnSetValue */
	export interface DoubleComparisonFilter {

		/** Required. Double compare value to be used */
		value?: number | null;

		/** Required. Relation between source value and compare value */
		valueComparison?: DoubleComparisonFilterValueComparison | null;
	}

	/** Filter based on relation between source value and compare value of type double in ConditionalColumnSetValue */
	export interface DoubleComparisonFilterFormProperties {

		/** Required. Double compare value to be used */
		value: FormControl<number | null | undefined>,

		/** Required. Relation between source value and compare value */
		valueComparison: FormControl<DoubleComparisonFilterValueComparison | null | undefined>,
	}
	export function CreateDoubleComparisonFilterFormGroup() {
		return new FormGroup<DoubleComparisonFilterFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
			valueComparison: new FormControl<DoubleComparisonFilterValueComparison | null | undefined>(undefined),
		});

	}

	export enum DoubleComparisonFilterValueComparison { VALUE_COMPARISON_UNSPECIFIED = 0, VALUE_COMPARISON_IF_VALUE_SMALLER_THAN = 1, VALUE_COMPARISON_IF_VALUE_SMALLER_EQUAL_THAN = 2, VALUE_COMPARISON_IF_VALUE_LARGER_THAN = 3, VALUE_COMPARISON_IF_VALUE_LARGER_EQUAL_THAN = 4 }


	/** Filter based on relation between source value and compare value of type integer in ConditionalColumnSetValue */
	export interface IntComparisonFilter {

		/** Required. Integer compare value to be used */
		value?: string | null;

		/** Required. Relation between source value and compare value */
		valueComparison?: DoubleComparisonFilterValueComparison | null;
	}

	/** Filter based on relation between source value and compare value of type integer in ConditionalColumnSetValue */
	export interface IntComparisonFilterFormProperties {

		/** Required. Integer compare value to be used */
		value: FormControl<string | null | undefined>,

		/** Required. Relation between source value and compare value */
		valueComparison: FormControl<DoubleComparisonFilterValueComparison | null | undefined>,
	}
	export function CreateIntComparisonFilterFormGroup() {
		return new FormGroup<IntComparisonFilterFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
			valueComparison: new FormControl<DoubleComparisonFilterValueComparison | null | undefined>(undefined),
		});

	}


	/** This allows the data to change scale, for example if the source is 2 digits after the decimal point, specify round to scale value = 2. If for example the value needs to be converted to an integer, use round to scale value = 0. */
	export interface RoundToScale {

		/** Required. Scale value to be used */
		scale?: number | null;
	}

	/** This allows the data to change scale, for example if the source is 2 digits after the decimal point, specify round to scale value = 2. If for example the value needs to be converted to an integer, use round to scale value = 0. */
	export interface RoundToScaleFormProperties {

		/** Required. Scale value to be used */
		scale: FormControl<number | null | undefined>,
	}
	export function CreateRoundToScaleFormGroup() {
		return new FormGroup<RoundToScaleFormProperties>({
			scale: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of values to filter by in ConditionalColumnSetValue */
	export interface ValueListFilter {

		/** Required. Whether to ignore case when filtering by values. Defaults to false */
		ignoreCase?: boolean | null;

		/** Required. Indicates whether the filter matches rows with values that are present in the list or those with values not present in it. */
		valuePresentList?: ValueListFilterValuePresentList | null;

		/** Required. The list to be used to filter by */
		values?: Array<string>;
	}

	/** A list of values to filter by in ConditionalColumnSetValue */
	export interface ValueListFilterFormProperties {

		/** Required. Whether to ignore case when filtering by values. Defaults to false */
		ignoreCase: FormControl<boolean | null | undefined>,

		/** Required. Indicates whether the filter matches rows with values that are present in the list or those with values not present in it. */
		valuePresentList: FormControl<ValueListFilterValuePresentList | null | undefined>,
	}
	export function CreateValueListFilterFormGroup() {
		return new FormGroup<ValueListFilterFormProperties>({
			ignoreCase: new FormControl<boolean | null | undefined>(undefined),
			valuePresentList: new FormControl<ValueListFilterValuePresentList | null | undefined>(undefined),
		});

	}

	export enum ValueListFilterValuePresentList { VALUE_PRESENT_IN_LIST_UNSPECIFIED = 0, VALUE_PRESENT_IN_LIST_IF_VALUE_LIST = 1, VALUE_PRESENT_IN_LIST_IF_VALUE_NOT_LIST = 2 }


	/** A connection profile definition. */
	export interface ConnectionProfile {

		/** Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster. */
		alloydb?: AlloyDbConnectionProfile;

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

		/** Specifies connection parameters required specifically for Oracle databases. */
		oracle?: OracleConnectionProfile;

		/** Specifies connection parameters required specifically for PostgreSQL databases. */
		postgresql?: PostgreSqlConnectionProfile;

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


	/** Specifies connection parameters required specifically for Oracle databases. */
	export interface OracleConnectionProfile {

		/** Required. Database service for the Oracle connection. */
		databaseService?: string | null;

		/** Forward SSH Tunnel connectivity. */
		forwardSshConnectivity?: ForwardSshTunnelConnectivity;

		/** Required. The IP or hostname of the source Oracle database. */
		host?: string | null;

		/** Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. */
		password?: string | null;

		/** Output only. Indicates whether a new password is included in the request. */
		passwordSet?: boolean | null;

		/** Required. The network port of the source Oracle database. */
		port?: number | null;

		/** Private Connectivity. */
		privateConnectivity?: PrivateConnectivity;

		/** SSL configuration information. */
		ssl?: SslConfig;

		/** Static IP address connectivity configured on service project. */
		staticServiceIpConnectivity?: StaticServiceIpConnectivity;

		/** Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. */
		username?: string | null;
	}

	/** Specifies connection parameters required specifically for Oracle databases. */
	export interface OracleConnectionProfileFormProperties {

		/** Required. Database service for the Oracle connection. */
		databaseService: FormControl<string | null | undefined>,

		/** Required. The IP or hostname of the source Oracle database. */
		host: FormControl<string | null | undefined>,

		/** Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. */
		password: FormControl<string | null | undefined>,

		/** Output only. Indicates whether a new password is included in the request. */
		passwordSet: FormControl<boolean | null | undefined>,

		/** Required. The network port of the source Oracle database. */
		port: FormControl<number | null | undefined>,

		/** Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateOracleConnectionProfileFormGroup() {
		return new FormGroup<OracleConnectionProfileFormProperties>({
			databaseService: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			passwordSet: new FormControl<boolean | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Forward SSH Tunnel connectivity. */
	export interface ForwardSshTunnelConnectivity {

		/** Required. Hostname for the SSH tunnel. */
		hostname?: string | null;

		/** Input only. SSH password. */
		password?: string | null;

		/** Port for the SSH tunnel, default value is 22. */
		port?: number | null;

		/** Input only. SSH private key. */
		privateKey?: string | null;

		/** Required. Username for the SSH tunnel. */
		username?: string | null;
	}

	/** Forward SSH Tunnel connectivity. */
	export interface ForwardSshTunnelConnectivityFormProperties {

		/** Required. Hostname for the SSH tunnel. */
		hostname: FormControl<string | null | undefined>,

		/** Input only. SSH password. */
		password: FormControl<string | null | undefined>,

		/** Port for the SSH tunnel, default value is 22. */
		port: FormControl<number | null | undefined>,

		/** Input only. SSH private key. */
		privateKey: FormControl<string | null | undefined>,

		/** Required. Username for the SSH tunnel. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateForwardSshTunnelConnectivityFormGroup() {
		return new FormGroup<ForwardSshTunnelConnectivityFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Private Connectivity. */
	export interface PrivateConnectivity {

		/** Required. The resource name (URI) of the private connection. */
		privateConnection?: string | null;
	}

	/** Private Connectivity. */
	export interface PrivateConnectivityFormProperties {

		/** Required. The resource name (URI) of the private connection. */
		privateConnection: FormControl<string | null | undefined>,
	}
	export function CreatePrivateConnectivityFormGroup() {
		return new FormGroup<PrivateConnectivityFormProperties>({
			privateConnection: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Static IP address connectivity configured on service project. */
	export interface StaticServiceIpConnectivity {
	}

	/** Static IP address connectivity configured on service project. */
	export interface StaticServiceIpConnectivityFormProperties {
	}
	export function CreateStaticServiceIpConnectivityFormGroup() {
		return new FormGroup<StaticServiceIpConnectivityFormProperties>({
		});

	}


	/** Specifies connection parameters required specifically for PostgreSQL databases. */
	export interface PostgreSqlConnectionProfile {

		/** Optional. If the destination is an AlloyDB database, use this field to provide the AlloyDB cluster ID. */
		alloydbClusterId?: string | null;

		/** If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. */
		cloudSqlId?: string | null;

		/** Required. The IP or hostname of the source PostgreSQL database. */
		host?: string | null;

		/** Output only. If the source is a Cloud SQL database, this field indicates the network architecture it's associated with. */
		networkArchitecture?: PostgreSqlConnectionProfileNetworkArchitecture | null;

		/** Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. */
		password?: string | null;

		/** Output only. Indicates If this connection profile password is stored. */
		passwordSet?: boolean | null;

		/** Required. The network port of the source PostgreSQL database. */
		port?: number | null;

		/** [Private Service Connect connectivity](https://cloud.google.com/vpc/docs/private-service-connect#service-attachments) */
		privateServiceConnectConnectivity?: PrivateServiceConnectConnectivity;

		/** SSL configuration information. */
		ssl?: SslConfig;

		/** The source database will allow incoming connections from the public IP of the destination database. You can retrieve the public IP of the Cloud SQL instance from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required. */
		staticIpConnectivity?: StaticIpConnectivity;

		/** Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. */
		username?: string | null;
	}

	/** Specifies connection parameters required specifically for PostgreSQL databases. */
	export interface PostgreSqlConnectionProfileFormProperties {

		/** Optional. If the destination is an AlloyDB database, use this field to provide the AlloyDB cluster ID. */
		alloydbClusterId: FormControl<string | null | undefined>,

		/** If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. */
		cloudSqlId: FormControl<string | null | undefined>,

		/** Required. The IP or hostname of the source PostgreSQL database. */
		host: FormControl<string | null | undefined>,

		/** Output only. If the source is a Cloud SQL database, this field indicates the network architecture it's associated with. */
		networkArchitecture: FormControl<PostgreSqlConnectionProfileNetworkArchitecture | null | undefined>,

		/** Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. */
		password: FormControl<string | null | undefined>,

		/** Output only. Indicates If this connection profile password is stored. */
		passwordSet: FormControl<boolean | null | undefined>,

		/** Required. The network port of the source PostgreSQL database. */
		port: FormControl<number | null | undefined>,

		/** Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. */
		username: FormControl<string | null | undefined>,
	}
	export function CreatePostgreSqlConnectionProfileFormGroup() {
		return new FormGroup<PostgreSqlConnectionProfileFormProperties>({
			alloydbClusterId: new FormControl<string | null | undefined>(undefined),
			cloudSqlId: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			networkArchitecture: new FormControl<PostgreSqlConnectionProfileNetworkArchitecture | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			passwordSet: new FormControl<boolean | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PostgreSqlConnectionProfileNetworkArchitecture { NETWORK_ARCHITECTURE_UNSPECIFIED = 0, NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER = 1, NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER = 2 }


	/** [Private Service Connect connectivity](https://cloud.google.com/vpc/docs/private-service-connect#service-attachments) */
	export interface PrivateServiceConnectConnectivity {

		/** Required. A service attachment that exposes a database, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name} */
		serviceAttachment?: string | null;
	}

	/** [Private Service Connect connectivity](https://cloud.google.com/vpc/docs/private-service-connect#service-attachments) */
	export interface PrivateServiceConnectConnectivityFormProperties {

		/** Required. A service attachment that exposes a database, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name} */
		serviceAttachment: FormControl<string | null | undefined>,
	}
	export function CreatePrivateServiceConnectConnectivityFormGroup() {
		return new FormGroup<PrivateServiceConnectConnectivityFormProperties>({
			serviceAttachment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The source database will allow incoming connections from the public IP of the destination database. You can retrieve the public IP of the Cloud SQL instance from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required. */
	export interface StaticIpConnectivity {
	}

	/** The source database will allow incoming connections from the public IP of the destination database. You can retrieve the public IP of the Cloud SQL instance from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required. */
	export interface StaticIpConnectivityFormProperties {
	}
	export function CreateStaticIpConnectivityFormGroup() {
		return new FormGroup<StaticIpConnectivityFormProperties>({
		});

	}

	export enum ConnectionProfileProvider { DATABASE_PROVIDER_UNSPECIFIED = 0, CLOUDSQL = 1, RDS = 2, AURORA = 3, ALLOYDB = 4 }

	export enum ConnectionProfileState { STATE_UNSPECIFIED = 0, DRAFT = 1, CREATING = 2, READY = 3, UPDATING = 4, DELETING = 5, DELETED = 6, FAILED = 7 }


	/** Constraint is not used as an independent entity, it is retrieved as part of another entity such as Table or View. */
	export interface ConstraintEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** The name of the table constraint. */
		name?: string | null;

		/** Reference columns which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full names of referenced columns by the foreign key. */
		referenceColumns?: Array<string>;

		/** Reference table which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full name of the referenced table by the foreign key. */
		referenceTable?: string | null;

		/** Table columns used as part of the Constraint, for example primary key constraint should list the columns which constitutes the key. */
		tableColumns?: Array<string>;

		/** Table which is associated with the constraint. In case the constraint is defined on a table, this field is left empty as this information is stored in parent_name. However, if constraint is defined on a view, this field stores the table name on which the view is defined. */
		tableName?: string | null;

		/** Type of constraint, for example unique, primary key, foreign key (currently only primary key is supported). */
		type?: string | null;
	}

	/** Constraint is not used as an independent entity, it is retrieved as part of another entity such as Table or View. */
	export interface ConstraintEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** The name of the table constraint. */
		name: FormControl<string | null | undefined>,

		/** Reference table which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full name of the referenced table by the foreign key. */
		referenceTable: FormControl<string | null | undefined>,

		/** Table which is associated with the constraint. In case the constraint is defined on a table, this field is left empty as this information is stored in parent_name. However, if constraint is defined on a view, this field stores the table name on which the view is defined. */
		tableName: FormControl<string | null | undefined>,

		/** Type of constraint, for example unique, primary key, foreign key (currently only primary key is supported). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateConstraintEntityFormGroup() {
		return new FormGroup<ConstraintEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			referenceTable: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The main conversion workspace resource entity. */
	export interface ConversionWorkspace {

		/** Output only. The timestamp when the workspace resource was created. */
		createTime?: string | null;

		/** The type and version of a source or destination database. */
		destination?: DatabaseEngineInfo;

		/** Optional. The display name for the workspace. */
		displayName?: string | null;

		/** Optional. A generic list of settings for the workspace. The settings are database pair dependant and can indicate default behavior for the mapping rules engine or turn on or off specific features. Such examples can be: convert_foreign_key_to_interleave=true, skip_triggers=false, ignore_non_table_synonyms=true */
		globalSettings?: {[id: string]: string };

		/** Output only. Whether the workspace has uncommitted changes (changes which were made after the workspace was committed). */
		hasUncommittedChanges?: boolean | null;

		/** Output only. The latest commit ID. */
		latestCommitId?: string | null;

		/** Output only. The timestamp when the workspace was committed. */
		latestCommitTime?: string | null;

		/** Full name of the workspace resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
		name?: string | null;

		/** The type and version of a source or destination database. */
		source?: DatabaseEngineInfo;

		/** Output only. The timestamp when the workspace resource was last updated. */
		updateTime?: string | null;
	}

	/** The main conversion workspace resource entity. */
	export interface ConversionWorkspaceFormProperties {

		/** Output only. The timestamp when the workspace resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The display name for the workspace. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. A generic list of settings for the workspace. The settings are database pair dependant and can indicate default behavior for the mapping rules engine or turn on or off specific features. Such examples can be: convert_foreign_key_to_interleave=true, skip_triggers=false, ignore_non_table_synonyms=true */
		globalSettings: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Whether the workspace has uncommitted changes (changes which were made after the workspace was committed). */
		hasUncommittedChanges: FormControl<boolean | null | undefined>,

		/** Output only. The latest commit ID. */
		latestCommitId: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the workspace was committed. */
		latestCommitTime: FormControl<string | null | undefined>,

		/** Full name of the workspace resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the workspace resource was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateConversionWorkspaceFormGroup() {
		return new FormGroup<ConversionWorkspaceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			globalSettings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			hasUncommittedChanges: new FormControl<boolean | null | undefined>(undefined),
			latestCommitId: new FormControl<string | null | undefined>(undefined),
			latestCommitTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type and version of a source or destination database. */
	export interface DatabaseEngineInfo {

		/** Required. Engine type. */
		engine?: DatabaseEngineInfoEngine | null;

		/** Required. Engine version, for example "12.c.1". */
		version?: string | null;
	}

	/** The type and version of a source or destination database. */
	export interface DatabaseEngineInfoFormProperties {

		/** Required. Engine type. */
		engine: FormControl<DatabaseEngineInfoEngine | null | undefined>,

		/** Required. Engine version, for example "12.c.1". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseEngineInfoFormGroup() {
		return new FormGroup<DatabaseEngineInfoFormProperties>({
			engine: new FormControl<DatabaseEngineInfoEngine | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseEngineInfoEngine { DATABASE_ENGINE_UNSPECIFIED = 0, MYSQL = 1, POSTGRESQL = 2, ORACLE = 3 }


	/** A conversion workspace's version. */
	export interface ConversionWorkspaceInfo {

		/** The commit ID of the conversion workspace. */
		commitId?: string | null;

		/** The resource name (URI) of the conversion workspace. */
		name?: string | null;
	}

	/** A conversion workspace's version. */
	export interface ConversionWorkspaceInfoFormProperties {

		/** The commit ID of the conversion workspace. */
		commitId: FormControl<string | null | undefined>,

		/** The resource name (URI) of the conversion workspace. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConversionWorkspaceInfoFormGroup() {
		return new FormGroup<ConversionWorkspaceInfoFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for 'ConvertConversionWorkspace' request. */
	export interface ConvertConversionWorkspaceRequest {

		/** Optional. Specifies whether the conversion workspace is to be committed automatically after the conversion. */
		autoCommit?: boolean | null;

		/** Optional. Automatically convert the full entity path for each entity specified by the filter. For example, if the filter specifies a table, that table schema (and database if there is one) will also be converted. */
		convertFullPath?: boolean | null;

		/** Optional. Filter the entities to convert. Leaving this field empty will convert all of the entities. Supports Google AIP-160 style filtering. */
		filter?: string | null;
	}

	/** Request message for 'ConvertConversionWorkspace' request. */
	export interface ConvertConversionWorkspaceRequestFormProperties {

		/** Optional. Specifies whether the conversion workspace is to be committed automatically after the conversion. */
		autoCommit: FormControl<boolean | null | undefined>,

		/** Optional. Automatically convert the full entity path for each entity specified by the filter. For example, if the filter specifies a table, that table schema (and database if there is one) will also be converted. */
		convertFullPath: FormControl<boolean | null | undefined>,

		/** Optional. Filter the entities to convert. Leaving this field empty will convert all of the entities. Supports Google AIP-160 style filtering. */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateConvertConversionWorkspaceRequestFormGroup() {
		return new FormGroup<ConvertConversionWorkspaceRequestFormProperties>({
			autoCommit: new FormControl<boolean | null | undefined>(undefined),
			convertFullPath: new FormControl<boolean | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options to configure rule type ConvertROWIDToColumn. The rule is used to add column rowid to destination tables based on an Oracle rowid function/property. The rule filter field can refer to one or more entities. The rule scope can be one of: Table. This rule requires additional filter to be specified beyond the basic rule filter field, which is whether or not to work on tables which already have a primary key defined. */
	export interface ConvertRowIdToColumn {

		/** Required. Only work on tables without primary key defined */
		onlyIfNoPrimaryKey?: boolean | null;
	}

	/** Options to configure rule type ConvertROWIDToColumn. The rule is used to add column rowid to destination tables based on an Oracle rowid function/property. The rule filter field can refer to one or more entities. The rule scope can be one of: Table. This rule requires additional filter to be specified beyond the basic rule filter field, which is whether or not to work on tables which already have a primary key defined. */
	export interface ConvertRowIdToColumnFormProperties {

		/** Required. Only work on tables without primary key defined */
		onlyIfNoPrimaryKey: FormControl<boolean | null | undefined>,
	}
	export function CreateConvertRowIdToColumnFormGroup() {
		return new FormGroup<ConvertRowIdToColumnFormProperties>({
			onlyIfNoPrimaryKey: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The base entity type for all the database related entities. The message contains the entity name, the name of its parent, the entity type, and the specific details per entity type. */
	export interface DatabaseEntity {

		/** DatabaseInstance acts as a parent entity to other database entities. */
		database?: DatabaseInstanceEntity;

		/** Function's parent is a schema. */
		databaseFunction?: FunctionEntity;

		/** Package's parent is a schema. */
		databasePackage?: PackageEntity;

		/** Details about the entity DDL script. Multiple DDL scripts are provided for child entities such as a table entity will have one DDL for the table with additional DDLs for each index, constraint and such. */
		entityDdl?: Array<EntityDdl>;

		/** The type of the database entity (table, view, index, ...). */
		entityType?: EntityDdlEntityType | null;

		/** Details about the various issues found for the entity. */
		issues?: Array<EntityIssue>;

		/** Details about entity mappings. For source tree entities, this holds the draft entities which were generated by the mapping rules. For draft tree entities, this holds the source entities which were converted to form the draft entity. Destination entities will have no mapping details. */
		mappings?: Array<EntityMapping>;

		/** MaterializedView's parent is a schema. */
		materializedView?: MaterializedViewEntity;

		/** The full name of the parent entity (e.g. schema name). */
		parentEntity?: string | null;

		/** Schema typically has no parent entity, but can have a parent entity DatabaseInstance (for database engines which support it). For some database engines, the terms schema and user can be used interchangeably when they refer to a namespace or a collection of other database entities. Can store additional information which is schema specific. */
		schema?: SchemaEntity;

		/** Sequence's parent is a schema. */
		sequence?: SequenceEntity;

		/** The short name (e.g. table name) of the entity. */
		shortName?: string | null;

		/** Stored procedure's parent is a schema. */
		storedProcedure?: StoredProcedureEntity;

		/** Synonym's parent is a schema. */
		synonym?: SynonymEntity;

		/** Table's parent is a schema. */
		table?: TableEntity;

		/** The type of tree the entity belongs to. */
		tree?: DatabaseEntityTree | null;

		/** UDT's parent is a schema. */
		udt?: UDTEntity;

		/** View's parent is a schema. */
		view?: ViewEntity;
	}

	/** The base entity type for all the database related entities. The message contains the entity name, the name of its parent, the entity type, and the specific details per entity type. */
	export interface DatabaseEntityFormProperties {

		/** The type of the database entity (table, view, index, ...). */
		entityType: FormControl<EntityDdlEntityType | null | undefined>,

		/** The full name of the parent entity (e.g. schema name). */
		parentEntity: FormControl<string | null | undefined>,

		/** The short name (e.g. table name) of the entity. */
		shortName: FormControl<string | null | undefined>,

		/** The type of tree the entity belongs to. */
		tree: FormControl<DatabaseEntityTree | null | undefined>,
	}
	export function CreateDatabaseEntityFormGroup() {
		return new FormGroup<DatabaseEntityFormProperties>({
			entityType: new FormControl<EntityDdlEntityType | null | undefined>(undefined),
			parentEntity: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
			tree: new FormControl<DatabaseEntityTree | null | undefined>(undefined),
		});

	}


	/** DatabaseInstance acts as a parent entity to other database entities. */
	export interface DatabaseInstanceEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };
	}

	/** DatabaseInstance acts as a parent entity to other database entities. */
	export interface DatabaseInstanceEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateDatabaseInstanceEntityFormGroup() {
		return new FormGroup<DatabaseInstanceEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Function's parent is a schema. */
	export interface FunctionEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** The SQL code which creates the function. */
		sqlCode?: string | null;
	}

	/** Function's parent is a schema. */
	export interface FunctionEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** The SQL code which creates the function. */
		sqlCode: FormControl<string | null | undefined>,
	}
	export function CreateFunctionEntityFormGroup() {
		return new FormGroup<FunctionEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sqlCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Package's parent is a schema. */
	export interface PackageEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** The SQL code which creates the package body. If the package specification has cursors or subprograms, then the package body is mandatory. */
		packageBody?: string | null;

		/** The SQL code which creates the package. */
		packageSqlCode?: string | null;
	}

	/** Package's parent is a schema. */
	export interface PackageEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** The SQL code which creates the package body. If the package specification has cursors or subprograms, then the package body is mandatory. */
		packageBody: FormControl<string | null | undefined>,

		/** The SQL code which creates the package. */
		packageSqlCode: FormControl<string | null | undefined>,
	}
	export function CreatePackageEntityFormGroup() {
		return new FormGroup<PackageEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			packageBody: new FormControl<string | null | undefined>(undefined),
			packageSqlCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single DDL statement for a specific entity */
	export interface EntityDdl {

		/** The actual ddl code. */
		ddl?: string | null;

		/** Type of DDL (Create, Alter). */
		ddlType?: string | null;

		/** The name of the database entity the ddl refers to. */
		entity?: string | null;

		/** The entity type (if the DDL is for a sub entity). */
		entityType?: EntityDdlEntityType | null;

		/** EntityIssues found for this ddl. */
		issueId?: Array<string>;
	}

	/** A single DDL statement for a specific entity */
	export interface EntityDdlFormProperties {

		/** The actual ddl code. */
		ddl: FormControl<string | null | undefined>,

		/** Type of DDL (Create, Alter). */
		ddlType: FormControl<string | null | undefined>,

		/** The name of the database entity the ddl refers to. */
		entity: FormControl<string | null | undefined>,

		/** The entity type (if the DDL is for a sub entity). */
		entityType: FormControl<EntityDdlEntityType | null | undefined>,
	}
	export function CreateEntityDdlFormGroup() {
		return new FormGroup<EntityDdlFormProperties>({
			ddl: new FormControl<string | null | undefined>(undefined),
			ddlType: new FormControl<string | null | undefined>(undefined),
			entity: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<EntityDdlEntityType | null | undefined>(undefined),
		});

	}

	export enum EntityDdlEntityType { DATABASE_ENTITY_TYPE_UNSPECIFIED = 0, DATABASE_ENTITY_TYPE_SCHEMA = 1, DATABASE_ENTITY_TYPE_TABLE = 2, DATABASE_ENTITY_TYPE_COLUMN = 3, DATABASE_ENTITY_TYPE_CONSTRAINT = 4, DATABASE_ENTITY_TYPE_INDEX = 5, DATABASE_ENTITY_TYPE_TRIGGER = 6, DATABASE_ENTITY_TYPE_VIEW = 7, DATABASE_ENTITY_TYPE_SEQUENCE = 8, DATABASE_ENTITY_TYPE_STORED_PROCEDURE = 9, DATABASE_ENTITY_TYPE_FUNCTION = 10, DATABASE_ENTITY_TYPE_SYNONYM = 11, DATABASE_ENTITY_TYPE_DATABASE_PACKAGE = 12, DATABASE_ENTITY_TYPE_UDT = 13, DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW = 14, DATABASE_ENTITY_TYPE_DATABASE = 15 }


	/** Issue related to the entity. */
	export interface EntityIssue {

		/** Error/Warning code */
		code?: string | null;

		/** The ddl which caused the issue, if relevant. */
		ddl?: string | null;

		/** The entity type (if the DDL is for a sub entity). */
		entityType?: EntityDdlEntityType | null;

		/** Unique Issue ID. */
		id?: string | null;

		/** Issue detailed message */
		message?: string | null;

		/** Issue position. */
		position?: Position;

		/** Severity of the issue */
		severity?: EntityIssueSeverity | null;

		/** The type of the issue. */
		type?: EntityIssueType | null;
	}

	/** Issue related to the entity. */
	export interface EntityIssueFormProperties {

		/** Error/Warning code */
		code: FormControl<string | null | undefined>,

		/** The ddl which caused the issue, if relevant. */
		ddl: FormControl<string | null | undefined>,

		/** The entity type (if the DDL is for a sub entity). */
		entityType: FormControl<EntityDdlEntityType | null | undefined>,

		/** Unique Issue ID. */
		id: FormControl<string | null | undefined>,

		/** Issue detailed message */
		message: FormControl<string | null | undefined>,

		/** Severity of the issue */
		severity: FormControl<EntityIssueSeverity | null | undefined>,

		/** The type of the issue. */
		type: FormControl<EntityIssueType | null | undefined>,
	}
	export function CreateEntityIssueFormGroup() {
		return new FormGroup<EntityIssueFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			ddl: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<EntityDdlEntityType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<EntityIssueSeverity | null | undefined>(undefined),
			type: new FormControl<EntityIssueType | null | undefined>(undefined),
		});

	}


	/** Issue position. */
	export interface Position {

		/** Issue column number */
		column?: number | null;

		/** Issue length */
		length?: number | null;

		/** Issue line number */
		line?: number | null;

		/** Issue offset */
		offset?: number | null;
	}

	/** Issue position. */
	export interface PositionFormProperties {

		/** Issue column number */
		column: FormControl<number | null | undefined>,

		/** Issue length */
		length: FormControl<number | null | undefined>,

		/** Issue line number */
		line: FormControl<number | null | undefined>,

		/** Issue offset */
		offset: FormControl<number | null | undefined>,
	}
	export function CreatePositionFormGroup() {
		return new FormGroup<PositionFormProperties>({
			column: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			line: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EntityIssueSeverity { ISSUE_SEVERITY_UNSPECIFIED = 0, ISSUE_SEVERITY_INFO = 1, ISSUE_SEVERITY_WARNING = 2, ISSUE_SEVERITY_ERROR = 3 }

	export enum EntityIssueType { ISSUE_TYPE_UNSPECIFIED = 0, ISSUE_TYPE_DDL = 1, ISSUE_TYPE_APPLY = 2, ISSUE_TYPE_CONVERT = 3 }


	/** Details of the mappings of a database entity. */
	export interface EntityMapping {

		/** Target entity full name. The draft entity can also include a column, index or constraint using the same naming notation schema.table.column. */
		draftEntity?: string | null;

		/** Type of draft entity. */
		draftType?: EntityDdlEntityType | null;

		/** Entity mapping log entries. Multiple rules can be effective and contribute changes to a converted entity, such as a rule can handle the entity name, another rule can handle an entity type. In addition, rules which did not change the entity are also logged along with the reason preventing them to do so. */
		mappingLog?: Array<EntityMappingLogEntry>;

		/** Source entity full name. The source entity can also be a column, index or constraint using the same naming notation schema.table.column. */
		sourceEntity?: string | null;

		/** Type of source entity. */
		sourceType?: EntityDdlEntityType | null;
	}

	/** Details of the mappings of a database entity. */
	export interface EntityMappingFormProperties {

		/** Target entity full name. The draft entity can also include a column, index or constraint using the same naming notation schema.table.column. */
		draftEntity: FormControl<string | null | undefined>,

		/** Type of draft entity. */
		draftType: FormControl<EntityDdlEntityType | null | undefined>,

		/** Source entity full name. The source entity can also be a column, index or constraint using the same naming notation schema.table.column. */
		sourceEntity: FormControl<string | null | undefined>,

		/** Type of source entity. */
		sourceType: FormControl<EntityDdlEntityType | null | undefined>,
	}
	export function CreateEntityMappingFormGroup() {
		return new FormGroup<EntityMappingFormProperties>({
			draftEntity: new FormControl<string | null | undefined>(undefined),
			draftType: new FormControl<EntityDdlEntityType | null | undefined>(undefined),
			sourceEntity: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<EntityDdlEntityType | null | undefined>(undefined),
		});

	}


	/** A single record of a rule which was used for a mapping. */
	export interface EntityMappingLogEntry {

		/** Comment. */
		mappingComment?: string | null;

		/** Which rule caused this log entry. */
		ruleId?: string | null;

		/** Rule revision ID. */
		ruleRevisionId?: string | null;
	}

	/** A single record of a rule which was used for a mapping. */
	export interface EntityMappingLogEntryFormProperties {

		/** Comment. */
		mappingComment: FormControl<string | null | undefined>,

		/** Which rule caused this log entry. */
		ruleId: FormControl<string | null | undefined>,

		/** Rule revision ID. */
		ruleRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateEntityMappingLogEntryFormGroup() {
		return new FormGroup<EntityMappingLogEntryFormProperties>({
			mappingComment: new FormControl<string | null | undefined>(undefined),
			ruleId: new FormControl<string | null | undefined>(undefined),
			ruleRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MaterializedView's parent is a schema. */
	export interface MaterializedViewEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** The SQL code which creates the view. */
		sqlCode?: string | null;
	}

	/** MaterializedView's parent is a schema. */
	export interface MaterializedViewEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** The SQL code which creates the view. */
		sqlCode: FormControl<string | null | undefined>,
	}
	export function CreateMaterializedViewEntityFormGroup() {
		return new FormGroup<MaterializedViewEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sqlCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema typically has no parent entity, but can have a parent entity DatabaseInstance (for database engines which support it). For some database engines, the terms schema and user can be used interchangeably when they refer to a namespace or a collection of other database entities. Can store additional information which is schema specific. */
	export interface SchemaEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };
	}

	/** Schema typically has no parent entity, but can have a parent entity DatabaseInstance (for database engines which support it). For some database engines, the terms schema and user can be used interchangeably when they refer to a namespace or a collection of other database entities. Can store additional information which is schema specific. */
	export interface SchemaEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateSchemaEntityFormGroup() {
		return new FormGroup<SchemaEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Sequence's parent is a schema. */
	export interface SequenceEntity {

		/** Indicates number of entries to cache / precreate. */
		cache?: string | null;

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** Indicates whether the sequence value should cycle through. */
		cycle?: boolean | null;

		/** Increment value for the sequence. */
		increment?: string | null;

		/** Maximum number for the sequence represented as bytes to accommodate large. numbers */
		maxValue?: string | null;

		/** Minimum number for the sequence represented as bytes to accommodate large. numbers */
		minValue?: string | null;

		/** Start number for the sequence represented as bytes to accommodate large. numbers */
		startValue?: string | null;
	}

	/** Sequence's parent is a schema. */
	export interface SequenceEntityFormProperties {

		/** Indicates number of entries to cache / precreate. */
		cache: FormControl<string | null | undefined>,

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** Indicates whether the sequence value should cycle through. */
		cycle: FormControl<boolean | null | undefined>,

		/** Increment value for the sequence. */
		increment: FormControl<string | null | undefined>,

		/** Maximum number for the sequence represented as bytes to accommodate large. numbers */
		maxValue: FormControl<string | null | undefined>,

		/** Minimum number for the sequence represented as bytes to accommodate large. numbers */
		minValue: FormControl<string | null | undefined>,

		/** Start number for the sequence represented as bytes to accommodate large. numbers */
		startValue: FormControl<string | null | undefined>,
	}
	export function CreateSequenceEntityFormGroup() {
		return new FormGroup<SequenceEntityFormProperties>({
			cache: new FormControl<string | null | undefined>(undefined),
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			cycle: new FormControl<boolean | null | undefined>(undefined),
			increment: new FormControl<string | null | undefined>(undefined),
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
			startValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stored procedure's parent is a schema. */
	export interface StoredProcedureEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** The SQL code which creates the stored procedure. */
		sqlCode?: string | null;
	}

	/** Stored procedure's parent is a schema. */
	export interface StoredProcedureEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** The SQL code which creates the stored procedure. */
		sqlCode: FormControl<string | null | undefined>,
	}
	export function CreateStoredProcedureEntityFormGroup() {
		return new FormGroup<StoredProcedureEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sqlCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Synonym's parent is a schema. */
	export interface SynonymEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** The name of the entity for which the synonym is being created (the source). */
		sourceEntity?: string | null;

		/** The type of the entity for which the synonym is being created (usually a table or a sequence). */
		sourceType?: EntityDdlEntityType | null;
	}

	/** Synonym's parent is a schema. */
	export interface SynonymEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** The name of the entity for which the synonym is being created (the source). */
		sourceEntity: FormControl<string | null | undefined>,

		/** The type of the entity for which the synonym is being created (usually a table or a sequence). */
		sourceType: FormControl<EntityDdlEntityType | null | undefined>,
	}
	export function CreateSynonymEntityFormGroup() {
		return new FormGroup<SynonymEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sourceEntity: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<EntityDdlEntityType | null | undefined>(undefined),
		});

	}


	/** Table's parent is a schema. */
	export interface TableEntity {

		/** Table columns. */
		columns?: Array<ColumnEntity>;

		/** Comment associated with the table. */
		comment?: string | null;

		/** Table constraints. */
		constraints?: Array<ConstraintEntity>;

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** Table indices. */
		indices?: Array<IndexEntity>;

		/** Table triggers. */
		triggers?: Array<TriggerEntity>;
	}

	/** Table's parent is a schema. */
	export interface TableEntityFormProperties {

		/** Comment associated with the table. */
		comment: FormControl<string | null | undefined>,

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateTableEntityFormGroup() {
		return new FormGroup<TableEntityFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Index is not used as an independent entity, it is retrieved as part of a Table entity. */
	export interface IndexEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** The name of the index. */
		name?: string | null;

		/** Table columns used as part of the Index, for example B-TREE index should list the columns which constitutes the index. */
		tableColumns?: Array<string>;

		/** Type of index, for example B-TREE. */
		type?: string | null;

		/** Boolean value indicating whether the index is unique. */
		unique?: boolean | null;
	}

	/** Index is not used as an independent entity, it is retrieved as part of a Table entity. */
	export interface IndexEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** The name of the index. */
		name: FormControl<string | null | undefined>,

		/** Type of index, for example B-TREE. */
		type: FormControl<string | null | undefined>,

		/** Boolean value indicating whether the index is unique. */
		unique: FormControl<boolean | null | undefined>,
	}
	export function CreateIndexEntityFormGroup() {
		return new FormGroup<IndexEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unique: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Trigger is not used as an independent entity, it is retrieved as part of a Table entity. */
	export interface TriggerEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** The name of the trigger. */
		name?: string | null;

		/** The SQL code which creates the trigger. */
		sqlCode?: string | null;

		/** Indicates when the trigger fires, for example BEFORE STATEMENT, AFTER EACH ROW. */
		triggerType?: string | null;

		/** The DML, DDL, or database events that fire the trigger, for example INSERT, UPDATE. */
		triggeringEvents?: Array<string>;
	}

	/** Trigger is not used as an independent entity, it is retrieved as part of a Table entity. */
	export interface TriggerEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** The name of the trigger. */
		name: FormControl<string | null | undefined>,

		/** The SQL code which creates the trigger. */
		sqlCode: FormControl<string | null | undefined>,

		/** Indicates when the trigger fires, for example BEFORE STATEMENT, AFTER EACH ROW. */
		triggerType: FormControl<string | null | undefined>,
	}
	export function CreateTriggerEntityFormGroup() {
		return new FormGroup<TriggerEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sqlCode: new FormControl<string | null | undefined>(undefined),
			triggerType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseEntityTree { TREE_TYPE_UNSPECIFIED = 0, SOURCE = 1, DRAFT = 2, DESTINATION = 3 }


	/** UDT's parent is a schema. */
	export interface UDTEntity {

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** The SQL code which creates the udt body. */
		udtBody?: string | null;

		/** The SQL code which creates the udt. */
		udtSqlCode?: string | null;
	}

	/** UDT's parent is a schema. */
	export interface UDTEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** The SQL code which creates the udt body. */
		udtBody: FormControl<string | null | undefined>,

		/** The SQL code which creates the udt. */
		udtSqlCode: FormControl<string | null | undefined>,
	}
	export function CreateUDTEntityFormGroup() {
		return new FormGroup<UDTEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			udtBody: new FormControl<string | null | undefined>(undefined),
			udtSqlCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** View's parent is a schema. */
	export interface ViewEntity {

		/** View constraints. */
		constraints?: Array<ConstraintEntity>;

		/** Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** The SQL code which creates the view. */
		sqlCode?: string | null;
	}

	/** View's parent is a schema. */
	export interface ViewEntityFormProperties {

		/** Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** The SQL code which creates the view. */
		sqlCode: FormControl<string | null | undefined>,
	}
	export function CreateViewEntityFormGroup() {
		return new FormGroup<ViewEntityFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sqlCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message defining the database engine and provider. */
	export interface DatabaseType {

		/** The database engine. */
		engine?: DatabaseEngineInfoEngine | null;

		/** The database provider. */
		provider?: ConnectionProfileProvider | null;
	}

	/** A message defining the database engine and provider. */
	export interface DatabaseTypeFormProperties {

		/** The database engine. */
		engine: FormControl<DatabaseEngineInfoEngine | null | undefined>,

		/** The database provider. */
		provider: FormControl<ConnectionProfileProvider | null | undefined>,
	}
	export function CreateDatabaseTypeFormGroup() {
		return new FormGroup<DatabaseTypeFormProperties>({
			engine: new FormControl<DatabaseEngineInfoEngine | null | undefined>(undefined),
			provider: new FormControl<ConnectionProfileProvider | null | undefined>(undefined),
		});

	}


	/** Request message for 'DemoteDestination' request. */
	export interface DemoteDestinationRequest {
	}

	/** Request message for 'DemoteDestination' request. */
	export interface DemoteDestinationRequestFormProperties {
	}
	export function CreateDemoteDestinationRequestFormGroup() {
		return new FormGroup<DemoteDestinationRequestFormProperties>({
		});

	}


	/** Response message for 'DescribeConversionWorkspaceRevisions' request. */
	export interface DescribeConversionWorkspaceRevisionsResponse {

		/** The list of conversion workspace revisions. */
		revisions?: Array<ConversionWorkspace>;
	}

	/** Response message for 'DescribeConversionWorkspaceRevisions' request. */
	export interface DescribeConversionWorkspaceRevisionsResponseFormProperties {
	}
	export function CreateDescribeConversionWorkspaceRevisionsResponseFormGroup() {
		return new FormGroup<DescribeConversionWorkspaceRevisionsResponseFormProperties>({
		});

	}


	/** Response message for 'DescribeDatabaseEntities' request. */
	export interface DescribeDatabaseEntitiesResponse {

		/** The list of database entities for the conversion workspace. */
		databaseEntities?: Array<DatabaseEntity>;

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for 'DescribeDatabaseEntities' request. */
	export interface DescribeDatabaseEntitiesResponseFormProperties {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatabaseEntitiesResponseFormGroup() {
		return new FormGroup<DescribeDatabaseEntitiesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dump flag definition. */
	export interface DumpFlag {

		/** The name of the flag */
		name?: string | null;

		/** The value of the flag. */
		value?: string | null;
	}

	/** Dump flag definition. */
	export interface DumpFlagFormProperties {

		/** The name of the flag */
		name: FormControl<string | null | undefined>,

		/** The value of the flag. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDumpFlagFormGroup() {
		return new FormGroup<DumpFlagFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dump flags definition. */
	export interface DumpFlags {

		/** The flags for the initial dump. */
		dumpFlags?: Array<DumpFlag>;
	}

	/** Dump flags definition. */
	export interface DumpFlagsFormProperties {
	}
	export function CreateDumpFlagsFormGroup() {
		return new FormGroup<DumpFlagsFormProperties>({
		});

	}


	/** Options to configure rule type EntityMove. The rule is used to move an entity to a new schema. The rule filter field can refer to one or more entities. The rule scope can be one of: Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT */
	export interface EntityMove {

		/** Required. The new schema */
		newSchema?: string | null;
	}

	/** Options to configure rule type EntityMove. The rule is used to move an entity to a new schema. The rule filter field can refer to one or more entities. The rule scope can be one of: Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT */
	export interface EntityMoveFormProperties {

		/** Required. The new schema */
		newSchema: FormControl<string | null | undefined>,
	}
	export function CreateEntityMoveFormGroup() {
		return new FormGroup<EntityMoveFormProperties>({
			newSchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for a 'FetchStaticIps' request. */
	export interface FetchStaticIpsResponse {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of static IPs. */
		staticIps?: Array<string>;
	}

	/** Response message for a 'FetchStaticIps' request. */
	export interface FetchStaticIpsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFetchStaticIpsResponseFormGroup() {
		return new FormGroup<FetchStaticIpsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options to configure rule type FilterTableColumns. The rule is used to filter the list of columns to include or exclude from a table. The rule filter field can refer to one entity. The rule scope can be: Table Only one of the two lists can be specified for the rule. */
	export interface FilterTableColumns {

		/** Optional. List of columns to be excluded for a particular table. */
		excludeColumns?: Array<string>;

		/** Optional. List of columns to be included for a particular table. */
		includeColumns?: Array<string>;
	}

	/** Options to configure rule type FilterTableColumns. The rule is used to filter the list of columns to include or exclude from a table. The rule filter field can refer to one entity. The rule scope can be: Table Only one of the two lists can be specified for the rule. */
	export interface FilterTableColumnsFormProperties {
	}
	export function CreateFilterTableColumnsFormGroup() {
		return new FormGroup<FilterTableColumnsFormProperties>({
		});

	}


	/** Request message for 'GenerateSshScript' request. */
	export interface GenerateSshScriptRequest {

		/** Required. Bastion VM Instance name to use or to create. */
		vm?: string | null;

		/** VM creation configuration message */
		vmCreationConfig?: VmCreationConfig;

		/** The port that will be open on the bastion host. */
		vmPort?: number | null;

		/** VM selection configuration message */
		vmSelectionConfig?: VmSelectionConfig;
	}

	/** Request message for 'GenerateSshScript' request. */
	export interface GenerateSshScriptRequestFormProperties {

		/** Required. Bastion VM Instance name to use or to create. */
		vm: FormControl<string | null | undefined>,

		/** The port that will be open on the bastion host. */
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


	/** Request message for 'GenerateTcpProxyScript' request. */
	export interface GenerateTcpProxyScriptRequest {

		/** Required. The type of the Compute instance that will host the proxy. */
		vmMachineType?: string | null;

		/** Required. The name of the Compute instance that will host the proxy. */
		vmName?: string | null;

		/** Required. The name of the subnet the Compute instance will use for private connectivity. Must be supplied in the form of projects/{project}/regions/{region}/subnetworks/{subnetwork}. Note: the region for the subnet must match the Compute instance region. */
		vmSubnet?: string | null;

		/** Optional. The Google Cloud Platform zone to create the VM in. The fully qualified name of the zone must be specified, including the region name, for example "us-central1-b". If not specified, uses the "-b" zone of the destination Connection Profile's region. */
		vmZone?: string | null;
	}

	/** Request message for 'GenerateTcpProxyScript' request. */
	export interface GenerateTcpProxyScriptRequestFormProperties {

		/** Required. The type of the Compute instance that will host the proxy. */
		vmMachineType: FormControl<string | null | undefined>,

		/** Required. The name of the Compute instance that will host the proxy. */
		vmName: FormControl<string | null | undefined>,

		/** Required. The name of the subnet the Compute instance will use for private connectivity. Must be supplied in the form of projects/{project}/regions/{region}/subnetworks/{subnetwork}. Note: the region for the subnet must match the Compute instance region. */
		vmSubnet: FormControl<string | null | undefined>,

		/** Optional. The Google Cloud Platform zone to create the VM in. The fully qualified name of the zone must be specified, including the region name, for example "us-central1-b". If not specified, uses the "-b" zone of the destination Connection Profile's region. */
		vmZone: FormControl<string | null | undefined>,
	}
	export function CreateGenerateTcpProxyScriptRequestFormGroup() {
		return new FormGroup<GenerateTcpProxyScriptRequestFormProperties>({
			vmMachineType: new FormControl<string | null | undefined>(undefined),
			vmName: new FormControl<string | null | undefined>(undefined),
			vmSubnet: new FormControl<string | null | undefined>(undefined),
			vmZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudClouddmsV1OperationMetadata {

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
	export interface GoogleCloudClouddmsV1OperationMetadataFormProperties {

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
	export function CreateGoogleCloudClouddmsV1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudClouddmsV1OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for 'ImportMappingRules' request. */
	export interface ImportMappingRulesRequest {

		/** Required. Should the conversion workspace be committed automatically after the import operation. */
		autoCommit?: boolean | null;

		/** Required. One or more rules files. */
		rulesFiles?: Array<RulesFile>;

		/** Required. The format of the rules content file. */
		rulesFormat?: ImportRulesJobDetailsFileFormat | null;
	}

	/** Request message for 'ImportMappingRules' request. */
	export interface ImportMappingRulesRequestFormProperties {

		/** Required. Should the conversion workspace be committed automatically after the import operation. */
		autoCommit: FormControl<boolean | null | undefined>,

		/** Required. The format of the rules content file. */
		rulesFormat: FormControl<ImportRulesJobDetailsFileFormat | null | undefined>,
	}
	export function CreateImportMappingRulesRequestFormGroup() {
		return new FormGroup<ImportMappingRulesRequestFormProperties>({
			autoCommit: new FormControl<boolean | null | undefined>(undefined),
			rulesFormat: new FormControl<ImportRulesJobDetailsFileFormat | null | undefined>(undefined),
		});

	}


	/** Details of a single rules file. */
	export interface RulesFile {

		/** Required. The text content of the rules that needs to be converted. */
		rulesContent?: string | null;

		/** Required. The filename of the rules that needs to be converted. The filename is used mainly so that future logs of the import rules job contain it, and can therefore be searched by it. */
		rulesSourceFilename?: string | null;
	}

	/** Details of a single rules file. */
	export interface RulesFileFormProperties {

		/** Required. The text content of the rules that needs to be converted. */
		rulesContent: FormControl<string | null | undefined>,

		/** Required. The filename of the rules that needs to be converted. The filename is used mainly so that future logs of the import rules job contain it, and can therefore be searched by it. */
		rulesSourceFilename: FormControl<string | null | undefined>,
	}
	export function CreateRulesFileFormGroup() {
		return new FormGroup<RulesFileFormProperties>({
			rulesContent: new FormControl<string | null | undefined>(undefined),
			rulesSourceFilename: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListConnectionProfiles' request. */
	export interface ListConnectionProfilesResponse {

		/** The response list of connection profiles. */
		connectionProfiles?: Array<ConnectionProfile>;

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListConnectionProfiles' request. */
	export interface ListConnectionProfilesResponseFormProperties {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionProfilesResponseFormGroup() {
		return new FormGroup<ListConnectionProfilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for 'ListConversionWorkspaces' request. */
	export interface ListConversionWorkspacesResponse {

		/** The list of conversion workspace objects. */
		conversionWorkspaces?: Array<ConversionWorkspace>;

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListConversionWorkspaces' request. */
	export interface ListConversionWorkspacesResponseFormProperties {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConversionWorkspacesResponseFormGroup() {
		return new FormGroup<ListConversionWorkspacesResponseFormProperties>({
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


	/** Response message for 'ListMappingRulesRequest' request. */
	export interface ListMappingRulesResponse {

		/** The list of conversion workspace mapping rules. */
		mappingRules?: Array<MappingRule>;

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for 'ListMappingRulesRequest' request. */
	export interface ListMappingRulesResponseFormProperties {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMappingRulesResponseFormGroup() {
		return new FormGroup<ListMappingRulesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a transformation that is to be applied to a group of entities in the source schema. Several such transformations can be applied to an entity sequentially to define the corresponding entity in the target schema. */
	export interface MappingRule {

		/** Options to configure rule type ConditionalColumnSetValue. The rule is used to transform the data which is being replicated/migrated. The rule filter field can refer to one or more entities. The rule scope can be one of: Column. */
		conditionalColumnSetValue?: ConditionalColumnSetValue;

		/** Options to configure rule type ConvertROWIDToColumn. The rule is used to add column rowid to destination tables based on an Oracle rowid function/property. The rule filter field can refer to one or more entities. The rule scope can be one of: Table. This rule requires additional filter to be specified beyond the basic rule filter field, which is whether or not to work on tables which already have a primary key defined. */
		convertRowidColumn?: ConvertRowIdToColumn;

		/** Optional. A human readable name */
		displayName?: string | null;

		/** Options to configure rule type EntityMove. The rule is used to move an entity to a new schema. The rule filter field can refer to one or more entities. The rule scope can be one of: Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT */
		entityMove?: EntityMove;

		/** A filter defining the entities that a mapping rule should be applied to. When more than one field is specified, the rule is applied only to entities which match all the fields. */
		filter?: MappingRuleFilter;

		/** Options to configure rule type FilterTableColumns. The rule is used to filter the list of columns to include or exclude from a table. The rule filter field can refer to one entity. The rule scope can be: Table Only one of the two lists can be specified for the rule. */
		filterTableColumns?: FilterTableColumns;

		/** Options to configure rule type MultiColumnDatatypeChange. The rule is used to change the data type and associated properties of multiple columns at once. The rule filter field can refer to one or more entities. The rule scope can be one of:Column. This rule requires additional filters to be specified beyond the basic rule filter field, which is the source data type, but the rule supports additional filtering capabilities such as the minimum and maximum field length. All additional filters which are specified are required to be met in order for the rule to be applied (logical AND between the fields). */
		multiColumnDataTypeChange?: MultiColumnDatatypeChange;

		/** Options to configure rule type MultiEntityRename. The rule is used to rename multiple entities. The rule filter field can refer to one or more entities. The rule scope can be one of: Database, Schema, Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT */
		multiEntityRename?: MultiEntityRename;

		/** Full name of the mapping rule resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{set}/mappingRule/{rule}. */
		name?: string | null;

		/** Output only. The timestamp that the revision was created. */
		revisionCreateTime?: string | null;

		/** Output only. The revision ID of the mapping rule. A new revision is committed whenever the mapping rule is changed in any way. The format is an 8-character hexadecimal string. */
		revisionId?: string | null;

		/** Required. The order in which the rule is applied. Lower order rules are applied before higher value rules so they may end up being overridden. */
		ruleOrder?: string | null;

		/** Required. The rule scope */
		ruleScope?: EntityDdlEntityType | null;

		/** Options to configure rule type SetTablePrimaryKey. The rule is used to specify the columns and name to configure/alter the primary key of a table. The rule filter field can refer to one entity. The rule scope can be one of: Table. */
		setTablePrimaryKey?: SetTablePrimaryKey;

		/** Options to configure rule type SingleColumnChange. The rule is used to change the properties of a column. The rule filter field can refer to one entity. The rule scope can be one of: Column. When using this rule, if a field is not specified than the destination column's configuration will be the same as the one in the source column.. */
		singleColumnChange?: SingleColumnChange;

		/** Options to configure rule type SingleEntityRename. The rule is used to rename an entity. The rule filter field can refer to only one entity. The rule scope can be one of: Database, Schema, Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT, Synonym */
		singleEntityRename?: SingleEntityRename;

		/** Options to configure rule type SinglePackageChange. The rule is used to alter the sql code for a package entities. The rule filter field can refer to one entity. The rule scope can be: Package */
		singlePackageChange?: SinglePackageChange;

		/** Options to configure rule type SourceSqlChange. The rule is used to alter the sql code for database entities. The rule filter field can refer to one entity. The rule scope can be: StoredProcedure, Function, Trigger, View */
		sourceSqlChange?: SourceSqlChange;

		/** Optional. The mapping rule state */
		state?: MappingRuleState | null;
	}

	/** Definition of a transformation that is to be applied to a group of entities in the source schema. Several such transformations can be applied to an entity sequentially to define the corresponding entity in the target schema. */
	export interface MappingRuleFormProperties {

		/** Optional. A human readable name */
		displayName: FormControl<string | null | undefined>,

		/** Full name of the mapping rule resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{set}/mappingRule/{rule}. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp that the revision was created. */
		revisionCreateTime: FormControl<string | null | undefined>,

		/** Output only. The revision ID of the mapping rule. A new revision is committed whenever the mapping rule is changed in any way. The format is an 8-character hexadecimal string. */
		revisionId: FormControl<string | null | undefined>,

		/** Required. The order in which the rule is applied. Lower order rules are applied before higher value rules so they may end up being overridden. */
		ruleOrder: FormControl<string | null | undefined>,

		/** Required. The rule scope */
		ruleScope: FormControl<EntityDdlEntityType | null | undefined>,

		/** Optional. The mapping rule state */
		state: FormControl<MappingRuleState | null | undefined>,
	}
	export function CreateMappingRuleFormGroup() {
		return new FormGroup<MappingRuleFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			ruleOrder: new FormControl<string | null | undefined>(undefined),
			ruleScope: new FormControl<EntityDdlEntityType | null | undefined>(undefined),
			state: new FormControl<MappingRuleState | null | undefined>(undefined),
		});

	}


	/** A filter defining the entities that a mapping rule should be applied to. When more than one field is specified, the rule is applied only to entities which match all the fields. */
	export interface MappingRuleFilter {

		/** Optional. The rule should be applied to specific entities defined by their fully qualified names. */
		entities?: Array<string>;

		/** Optional. The rule should be applied to entities whose non-qualified name contains the given string. */
		entityNameContains?: string | null;

		/** Optional. The rule should be applied to entities whose non-qualified name starts with the given prefix. */
		entityNamePrefix?: string | null;

		/** Optional. The rule should be applied to entities whose non-qualified name ends with the given suffix. */
		entityNameSuffix?: string | null;

		/** Optional. The rule should be applied to entities whose parent entity (fully qualified name) matches the given value. For example, if the rule applies to a table entity, the expected value should be a schema (schema). If the rule applies to a column or index entity, the expected value can be either a schema (schema) or a table (schema.table) */
		parentEntity?: string | null;
	}

	/** A filter defining the entities that a mapping rule should be applied to. When more than one field is specified, the rule is applied only to entities which match all the fields. */
	export interface MappingRuleFilterFormProperties {

		/** Optional. The rule should be applied to entities whose non-qualified name contains the given string. */
		entityNameContains: FormControl<string | null | undefined>,

		/** Optional. The rule should be applied to entities whose non-qualified name starts with the given prefix. */
		entityNamePrefix: FormControl<string | null | undefined>,

		/** Optional. The rule should be applied to entities whose non-qualified name ends with the given suffix. */
		entityNameSuffix: FormControl<string | null | undefined>,

		/** Optional. The rule should be applied to entities whose parent entity (fully qualified name) matches the given value. For example, if the rule applies to a table entity, the expected value should be a schema (schema). If the rule applies to a column or index entity, the expected value can be either a schema (schema) or a table (schema.table) */
		parentEntity: FormControl<string | null | undefined>,
	}
	export function CreateMappingRuleFilterFormGroup() {
		return new FormGroup<MappingRuleFilterFormProperties>({
			entityNameContains: new FormControl<string | null | undefined>(undefined),
			entityNamePrefix: new FormControl<string | null | undefined>(undefined),
			entityNameSuffix: new FormControl<string | null | undefined>(undefined),
			parentEntity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options to configure rule type MultiColumnDatatypeChange. The rule is used to change the data type and associated properties of multiple columns at once. The rule filter field can refer to one or more entities. The rule scope can be one of:Column. This rule requires additional filters to be specified beyond the basic rule filter field, which is the source data type, but the rule supports additional filtering capabilities such as the minimum and maximum field length. All additional filters which are specified are required to be met in order for the rule to be applied (logical AND between the fields). */
	export interface MultiColumnDatatypeChange {

		/** Optional. Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** Required. New data type. */
		newDataType?: string | null;

		/** Optional. Column fractional seconds precision - used only for timestamp based datatypes - if not specified and relevant uses the source column fractional seconds precision. */
		overrideFractionalSecondsPrecision?: number | null;

		/** Optional. Column length - e.g. varchar (50) - if not specified and relevant uses the source column length. */
		overrideLength?: string | null;

		/** Optional. Column precision - when relevant - if not specified and relevant uses the source column precision. */
		overridePrecision?: number | null;

		/** Optional. Column scale - when relevant - if not specified and relevant uses the source column scale. */
		overrideScale?: number | null;

		/** Required. Filter on source data type. */
		sourceDataTypeFilter?: string | null;

		/** Filter for fixed point number data types such as NUMERIC/NUMBER */
		sourceNumericFilter?: SourceNumericFilter;

		/** Filter for text-based data types like varchar. */
		sourceTextFilter?: SourceTextFilter;
	}

	/** Options to configure rule type MultiColumnDatatypeChange. The rule is used to change the data type and associated properties of multiple columns at once. The rule filter field can refer to one or more entities. The rule scope can be one of:Column. This rule requires additional filters to be specified beyond the basic rule filter field, which is the source data type, but the rule supports additional filtering capabilities such as the minimum and maximum field length. All additional filters which are specified are required to be met in order for the rule to be applied (logical AND between the fields). */
	export interface MultiColumnDatatypeChangeFormProperties {

		/** Optional. Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** Required. New data type. */
		newDataType: FormControl<string | null | undefined>,

		/** Optional. Column fractional seconds precision - used only for timestamp based datatypes - if not specified and relevant uses the source column fractional seconds precision. */
		overrideFractionalSecondsPrecision: FormControl<number | null | undefined>,

		/** Optional. Column length - e.g. varchar (50) - if not specified and relevant uses the source column length. */
		overrideLength: FormControl<string | null | undefined>,

		/** Optional. Column precision - when relevant - if not specified and relevant uses the source column precision. */
		overridePrecision: FormControl<number | null | undefined>,

		/** Optional. Column scale - when relevant - if not specified and relevant uses the source column scale. */
		overrideScale: FormControl<number | null | undefined>,

		/** Required. Filter on source data type. */
		sourceDataTypeFilter: FormControl<string | null | undefined>,
	}
	export function CreateMultiColumnDatatypeChangeFormGroup() {
		return new FormGroup<MultiColumnDatatypeChangeFormProperties>({
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			newDataType: new FormControl<string | null | undefined>(undefined),
			overrideFractionalSecondsPrecision: new FormControl<number | null | undefined>(undefined),
			overrideLength: new FormControl<string | null | undefined>(undefined),
			overridePrecision: new FormControl<number | null | undefined>(undefined),
			overrideScale: new FormControl<number | null | undefined>(undefined),
			sourceDataTypeFilter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options to configure rule type MultiEntityRename. The rule is used to rename multiple entities. The rule filter field can refer to one or more entities. The rule scope can be one of: Database, Schema, Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT */
	export interface MultiEntityRename {

		/** Optional. The pattern used to generate the new entity's name. This pattern must include the characters '{name}', which will be replaced with the name of the original entity. For example, the pattern 't_{name}' for an entity name jobs would be converted to 't_jobs'. If unspecified, the default value for this field is '{name}' */
		newNamePattern?: string | null;

		/** Optional. Additional transformation that can be done on the source entity name before it is being used by the new_name_pattern, for example lower case. If no transformation is desired, use NO_TRANSFORMATION */
		sourceNameTransformation?: MultiEntityRenameSourceNameTransformation | null;
	}

	/** Options to configure rule type MultiEntityRename. The rule is used to rename multiple entities. The rule filter field can refer to one or more entities. The rule scope can be one of: Database, Schema, Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT */
	export interface MultiEntityRenameFormProperties {

		/** Optional. The pattern used to generate the new entity's name. This pattern must include the characters '{name}', which will be replaced with the name of the original entity. For example, the pattern 't_{name}' for an entity name jobs would be converted to 't_jobs'. If unspecified, the default value for this field is '{name}' */
		newNamePattern: FormControl<string | null | undefined>,

		/** Optional. Additional transformation that can be done on the source entity name before it is being used by the new_name_pattern, for example lower case. If no transformation is desired, use NO_TRANSFORMATION */
		sourceNameTransformation: FormControl<MultiEntityRenameSourceNameTransformation | null | undefined>,
	}
	export function CreateMultiEntityRenameFormGroup() {
		return new FormGroup<MultiEntityRenameFormProperties>({
			newNamePattern: new FormControl<string | null | undefined>(undefined),
			sourceNameTransformation: new FormControl<MultiEntityRenameSourceNameTransformation | null | undefined>(undefined),
		});

	}

	export enum MultiEntityRenameSourceNameTransformation { ENTITY_NAME_TRANSFORMATION_UNSPECIFIED = 0, ENTITY_NAME_TRANSFORMATION_NO_TRANSFORMATION = 1, ENTITY_NAME_TRANSFORMATION_LOWER_CASE = 2, ENTITY_NAME_TRANSFORMATION_UPPER_CASE = 3, ENTITY_NAME_TRANSFORMATION_CAPITALIZED_CASE = 4 }


	/** Options to configure rule type SetTablePrimaryKey. The rule is used to specify the columns and name to configure/alter the primary key of a table. The rule filter field can refer to one entity. The rule scope can be one of: Table. */
	export interface SetTablePrimaryKey {

		/** Optional. Name for the primary key */
		primaryKey?: string | null;

		/** Required. List of column names for the primary key */
		primaryKeyColumns?: Array<string>;
	}

	/** Options to configure rule type SetTablePrimaryKey. The rule is used to specify the columns and name to configure/alter the primary key of a table. The rule filter field can refer to one entity. The rule scope can be one of: Table. */
	export interface SetTablePrimaryKeyFormProperties {

		/** Optional. Name for the primary key */
		primaryKey: FormControl<string | null | undefined>,
	}
	export function CreateSetTablePrimaryKeyFormGroup() {
		return new FormGroup<SetTablePrimaryKeyFormProperties>({
			primaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options to configure rule type SingleColumnChange. The rule is used to change the properties of a column. The rule filter field can refer to one entity. The rule scope can be one of: Column. When using this rule, if a field is not specified than the destination column's configuration will be the same as the one in the source column.. */
	export interface SingleColumnChange {

		/** Optional. Is the column of array type. */
		array?: boolean | null;

		/** Optional. The length of the array, only relevant if the column type is an array. */
		arrayLength?: number | null;

		/** Optional. Is the column auto-generated/identity. */
		autoGenerated?: boolean | null;

		/** Optional. Charset override - instead of table level charset. */
		charset?: string | null;

		/** Optional. Collation override - instead of table level collation. */
		collation?: string | null;

		/** Optional. Comment associated with the column. */
		comment?: string | null;

		/** Optional. Custom engine specific features. */
		customFeatures?: {[id: string]: any };

		/** Optional. Column data type name. */
		dataType?: string | null;

		/** Optional. Column fractional seconds precision - e.g. 2 as in timestamp (2) - when relevant. */
		fractionalSecondsPrecision?: number | null;

		/** Optional. Column length - e.g. 50 as in varchar (50) - when relevant. */
		length?: string | null;

		/** Optional. Is the column nullable. */
		nullable?: boolean | null;

		/** Optional. Column precision - e.g. 8 as in double (8,2) - when relevant. */
		precision?: number | null;

		/** Optional. Column scale - e.g. 2 as in double (8,2) - when relevant. */
		scale?: number | null;

		/** Optional. Specifies the list of values allowed in the column. */
		setValues?: Array<string>;

		/** Optional. Is the column a UDT (User-defined Type). */
		udt?: boolean | null;
	}

	/** Options to configure rule type SingleColumnChange. The rule is used to change the properties of a column. The rule filter field can refer to one entity. The rule scope can be one of: Column. When using this rule, if a field is not specified than the destination column's configuration will be the same as the one in the source column.. */
	export interface SingleColumnChangeFormProperties {

		/** Optional. Is the column of array type. */
		array: FormControl<boolean | null | undefined>,

		/** Optional. The length of the array, only relevant if the column type is an array. */
		arrayLength: FormControl<number | null | undefined>,

		/** Optional. Is the column auto-generated/identity. */
		autoGenerated: FormControl<boolean | null | undefined>,

		/** Optional. Charset override - instead of table level charset. */
		charset: FormControl<string | null | undefined>,

		/** Optional. Collation override - instead of table level collation. */
		collation: FormControl<string | null | undefined>,

		/** Optional. Comment associated with the column. */
		comment: FormControl<string | null | undefined>,

		/** Optional. Custom engine specific features. */
		customFeatures: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. Column data type name. */
		dataType: FormControl<string | null | undefined>,

		/** Optional. Column fractional seconds precision - e.g. 2 as in timestamp (2) - when relevant. */
		fractionalSecondsPrecision: FormControl<number | null | undefined>,

		/** Optional. Column length - e.g. 50 as in varchar (50) - when relevant. */
		length: FormControl<string | null | undefined>,

		/** Optional. Is the column nullable. */
		nullable: FormControl<boolean | null | undefined>,

		/** Optional. Column precision - e.g. 8 as in double (8,2) - when relevant. */
		precision: FormControl<number | null | undefined>,

		/** Optional. Column scale - e.g. 2 as in double (8,2) - when relevant. */
		scale: FormControl<number | null | undefined>,

		/** Optional. Is the column a UDT (User-defined Type). */
		udt: FormControl<boolean | null | undefined>,
	}
	export function CreateSingleColumnChangeFormGroup() {
		return new FormGroup<SingleColumnChangeFormProperties>({
			array: new FormControl<boolean | null | undefined>(undefined),
			arrayLength: new FormControl<number | null | undefined>(undefined),
			autoGenerated: new FormControl<boolean | null | undefined>(undefined),
			charset: new FormControl<string | null | undefined>(undefined),
			collation: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			customFeatures: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			fractionalSecondsPrecision: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			nullable: new FormControl<boolean | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			udt: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options to configure rule type SingleEntityRename. The rule is used to rename an entity. The rule filter field can refer to only one entity. The rule scope can be one of: Database, Schema, Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT, Synonym */
	export interface SingleEntityRename {

		/** Required. The new name of the destination entity */
		newName?: string | null;
	}

	/** Options to configure rule type SingleEntityRename. The rule is used to rename an entity. The rule filter field can refer to only one entity. The rule scope can be one of: Database, Schema, Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT, Synonym */
	export interface SingleEntityRenameFormProperties {

		/** Required. The new name of the destination entity */
		newName: FormControl<string | null | undefined>,
	}
	export function CreateSingleEntityRenameFormGroup() {
		return new FormGroup<SingleEntityRenameFormProperties>({
			newName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options to configure rule type SinglePackageChange. The rule is used to alter the sql code for a package entities. The rule filter field can refer to one entity. The rule scope can be: Package */
	export interface SinglePackageChange {

		/** Optional. Sql code for package body */
		packageBody?: string | null;

		/** Optional. Sql code for package description */
		packageDescription?: string | null;
	}

	/** Options to configure rule type SinglePackageChange. The rule is used to alter the sql code for a package entities. The rule filter field can refer to one entity. The rule scope can be: Package */
	export interface SinglePackageChangeFormProperties {

		/** Optional. Sql code for package body */
		packageBody: FormControl<string | null | undefined>,

		/** Optional. Sql code for package description */
		packageDescription: FormControl<string | null | undefined>,
	}
	export function CreateSinglePackageChangeFormGroup() {
		return new FormGroup<SinglePackageChangeFormProperties>({
			packageBody: new FormControl<string | null | undefined>(undefined),
			packageDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options to configure rule type SourceSqlChange. The rule is used to alter the sql code for database entities. The rule filter field can refer to one entity. The rule scope can be: StoredProcedure, Function, Trigger, View */
	export interface SourceSqlChange {

		/** Required. Sql code for source (stored procedure, function, trigger or view) */
		sqlCode?: string | null;
	}

	/** Options to configure rule type SourceSqlChange. The rule is used to alter the sql code for database entities. The rule filter field can refer to one entity. The rule scope can be: StoredProcedure, Function, Trigger, View */
	export interface SourceSqlChangeFormProperties {

		/** Required. Sql code for source (stored procedure, function, trigger or view) */
		sqlCode: FormControl<string | null | undefined>,
	}
	export function CreateSourceSqlChangeFormGroup() {
		return new FormGroup<SourceSqlChangeFormProperties>({
			sqlCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MappingRuleState { STATE_UNSPECIFIED = 0, ENABLED = 1, DISABLED = 2, DELETED = 3 }


	/** Response message for 'ListMigrationJobs' request. */
	export interface ListMigrationJobsResponse {

		/** The list of migration jobs objects. */
		migrationJobs?: Array<MigrationJob>;

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListMigrationJobs' request. */
	export interface ListMigrationJobsResponseFormProperties {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMigrationJobsResponseFormGroup() {
		return new FormGroup<ListMigrationJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Database Migration Service migration job object. */
	export interface MigrationJob {

		/** The CMEK (customer-managed encryption key) fully qualified key name used for the migration job. This field supports all migration jobs types except for: * Mysql to Mysql (use the cmek field in the cloudsql connection profile instead). * PostrgeSQL to PostgreSQL (use the cmek field in the cloudsql connection profile instead). * PostgreSQL to AlloyDB (use the kms_key_name field in the alloydb connection profile instead). Each Cloud CMEK key has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
		cmekKeyName?: string | null;

		/** A conversion workspace's version. */
		conversionWorkspace?: ConversionWorkspaceInfo;

		/** Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
		createTime?: string | null;

		/** Required. The resource name (URI) of the destination connection profile. */
		destination?: string | null;

		/** A message defining the database engine and provider. */
		destinationDatabase?: DatabaseType;

		/** The migration job display name. */
		displayName?: string | null;

		/** Dump flags definition. */
		dumpFlags?: DumpFlags;

		/** The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). This field and the "dump_flags" field are mutually exclusive. */
		dumpPath?: string | null;

		/** Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
		duration?: string | null;

		/** Output only. If the migration job is completed, the time when it was completed. */
		endTime?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** This field can be used to select the entities to migrate as part of the migration job. It uses AIP-160 notation to select a subset of the entities configured on the associated conversion-workspace. This field should not be set on migration-jobs that are not associated with a conversion workspace. */
		filter?: string | null;

		/** The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`. */
		labels?: {[id: string]: string };

		/** The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. */
		name?: string | null;

		/** Performance configuration definition. */
		performanceConfig?: PerformanceConfig;

		/** Output only. The current migration job phase. */
		phase?: MigrationJobPhase | null;

		/** The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC. */
		reverseSshConnectivity?: ReverseSshConnectivity;

		/** Required. The resource name (URI) of the source connection profile. */
		source?: string | null;

		/** A message defining the database engine and provider. */
		sourceDatabase?: DatabaseType;

		/** The current migration job state. */
		state?: MigrationJobState | null;

		/** The source database will allow incoming connections from the public IP of the destination database. You can retrieve the public IP of the Cloud SQL instance from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required. */
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

		/** The CMEK (customer-managed encryption key) fully qualified key name used for the migration job. This field supports all migration jobs types except for: * Mysql to Mysql (use the cmek field in the cloudsql connection profile instead). * PostrgeSQL to PostgreSQL (use the cmek field in the cloudsql connection profile instead). * PostgreSQL to AlloyDB (use the kms_key_name field in the alloydb connection profile instead). Each Cloud CMEK key has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
		cmekKeyName: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
		createTime: FormControl<string | null | undefined>,

		/** Required. The resource name (URI) of the destination connection profile. */
		destination: FormControl<string | null | undefined>,

		/** The migration job display name. */
		displayName: FormControl<string | null | undefined>,

		/** The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). This field and the "dump_flags" field are mutually exclusive. */
		dumpPath: FormControl<string | null | undefined>,

		/** Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
		duration: FormControl<string | null | undefined>,

		/** Output only. If the migration job is completed, the time when it was completed. */
		endTime: FormControl<string | null | undefined>,

		/** This field can be used to select the entities to migrate as part of the migration job. It uses AIP-160 notation to select a subset of the entities configured on the associated conversion-workspace. This field should not be set on migration-jobs that are not associated with a conversion workspace. */
		filter: FormControl<string | null | undefined>,

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
			cmekKeyName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			dumpPath: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phase: new FormControl<MigrationJobPhase | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MigrationJobState | null | undefined>(undefined),
			type: new FormControl<MigrationJobType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Performance configuration definition. */
	export interface PerformanceConfig {

		/** Initial dump parallelism level. */
		dumpParallelLevel?: PerformanceConfigDumpParallelLevel | null;
	}

	/** Performance configuration definition. */
	export interface PerformanceConfigFormProperties {

		/** Initial dump parallelism level. */
		dumpParallelLevel: FormControl<PerformanceConfigDumpParallelLevel | null | undefined>,
	}
	export function CreatePerformanceConfigFormGroup() {
		return new FormGroup<PerformanceConfigFormProperties>({
			dumpParallelLevel: new FormControl<PerformanceConfigDumpParallelLevel | null | undefined>(undefined),
		});

	}

	export enum PerformanceConfigDumpParallelLevel { DUMP_PARALLEL_LEVEL_UNSPECIFIED = 0, MIN = 1, OPTIMAL = 2, MAX = 3 }

	export enum MigrationJobPhase { PHASE_UNSPECIFIED = 0, FULL_DUMP = 1, CDC = 2, PROMOTE_IN_PROGRESS = 3, WAITING_FOR_SOURCE_WRITES_TO_STOP = 4, PREPARING_THE_DUMP = 5 }


	/** The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC. */
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

	/** The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC. */
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


	/** Response message for 'ListPrivateConnections' request. */
	export interface ListPrivateConnectionsResponse {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of private connections. */
		privateConnections?: Array<PrivateConnection>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for 'ListPrivateConnections' request. */
	export interface ListPrivateConnectionsResponseFormProperties {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrivateConnectionsResponseFormGroup() {
		return new FormGroup<ListPrivateConnectionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The PrivateConnection resource is used to establish private connectivity with the customer's network. */
	export interface PrivateConnection {

		/** Output only. The create time of the resource. */
		createTime?: string | null;

		/** The private connection display name. */
		displayName?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The resource labels for private connections to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`. */
		labels?: {[id: string]: string };

		/** The name of the resource. */
		name?: string | null;

		/** Output only. The state of the private connection. */
		state?: PrivateConnectionState | null;

		/** Output only. The last update time of the resource. */
		updateTime?: string | null;

		/** The VPC peering configuration is used to create VPC peering with the consumer's VPC. */
		vpcPeeringConfig?: VpcPeeringConfig;
	}

	/** The PrivateConnection resource is used to establish private connectivity with the customer's network. */
	export interface PrivateConnectionFormProperties {

		/** Output only. The create time of the resource. */
		createTime: FormControl<string | null | undefined>,

		/** The private connection display name. */
		displayName: FormControl<string | null | undefined>,

		/** The resource labels for private connections to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the private connection. */
		state: FormControl<PrivateConnectionState | null | undefined>,

		/** Output only. The last update time of the resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePrivateConnectionFormGroup() {
		return new FormGroup<PrivateConnectionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PrivateConnectionState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PrivateConnectionState { STATE_UNSPECIFIED = 0, CREATING = 1, CREATED = 2, FAILED = 3, DELETING = 4, FAILED_TO_DELETE = 5, DELETED = 6 }


	/** The VPC peering configuration is used to create VPC peering with the consumer's VPC. */
	export interface VpcPeeringConfig {

		/** Required. A free subnet for peering. (CIDR of /29) */
		subnet?: string | null;

		/** Required. Fully qualified name of the VPC that Database Migration Service will peer to. */
		vpcName?: string | null;
	}

	/** The VPC peering configuration is used to create VPC peering with the consumer's VPC. */
	export interface VpcPeeringConfigFormProperties {

		/** Required. A free subnet for peering. (CIDR of /29) */
		subnet: FormControl<string | null | undefined>,

		/** Required. Fully qualified name of the VPC that Database Migration Service will peer to. */
		vpcName: FormControl<string | null | undefined>,
	}
	export function CreateVpcPeeringConfigFormGroup() {
		return new FormGroup<VpcPeeringConfigFormProperties>({
			subnet: new FormControl<string | null | undefined>(undefined),
			vpcName: new FormControl<string | null | undefined>(undefined),
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

	export enum MigrationJobVerificationErrorErrorCode { ERROR_CODE_UNSPECIFIED = 0, CONNECTION_FAILURE = 1, AUTHENTICATION_FAILURE = 2, INVALID_CONNECTION_PROFILE_CONFIG = 3, VERSION_INCOMPATIBILITY = 4, CONNECTION_PROFILE_TYPES_INCOMPATIBILITY = 5, NO_PGLOGICAL_INSTALLED = 6, PGLOGICAL_NODE_ALREADY_EXISTS = 7, INVALID_WAL_LEVEL = 8, INVALID_SHARED_PRELOAD_LIBRARY = 9, INSUFFICIENT_MAX_REPLICATION_SLOTS = 10, INSUFFICIENT_MAX_WAL_SENDERS = 11, INSUFFICIENT_MAX_WORKER_PROCESSES = 12, UNSUPPORTED_EXTENSIONS = 13, UNSUPPORTED_MIGRATION_TYPE = 14, INVALID_RDS_LOGICAL_REPLICATION = 15, UNSUPPORTED_GTID_MODE = 16, UNSUPPORTED_TABLE_DEFINITION = 17, UNSUPPORTED_DEFINER = 18, CANT_RESTART_RUNNING_MIGRATION = 19, SOURCE_ALREADY_SETUP = 20, TABLES_WITH_LIMITED_SUPPORT = 21, UNSUPPORTED_DATABASE_LOCALE = 22, UNSUPPORTED_DATABASE_FDW_CONFIG = 23, ERROR_RDBMS = 24, SOURCE_SIZE_EXCEEDS_THRESHOLD = 25, EXISTING_CONFLICTING_DATABASES = 26, PARALLEL_IMPORT_INSUFFICIENT_PRIVILEGE = 27, EXISTING_DATA = 28 }


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

		/** Optional. Restart the migration job without running prior configuration verification. Defaults to `false`. */
		skipValidation?: boolean | null;
	}

	/** Request message for 'RestartMigrationJob' request. */
	export interface RestartMigrationJobRequestFormProperties {

		/** Optional. Restart the migration job without running prior configuration verification. Defaults to `false`. */
		skipValidation: FormControl<boolean | null | undefined>,
	}
	export function CreateRestartMigrationJobRequestFormGroup() {
		return new FormGroup<RestartMigrationJobRequestFormProperties>({
			skipValidation: new FormControl<boolean | null | undefined>(undefined),
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


	/** Request message for 'RollbackConversionWorkspace' request. */
	export interface RollbackConversionWorkspaceRequest {
	}

	/** Request message for 'RollbackConversionWorkspace' request. */
	export interface RollbackConversionWorkspaceRequestFormProperties {
	}
	export function CreateRollbackConversionWorkspaceRequestFormGroup() {
		return new FormGroup<RollbackConversionWorkspaceRequestFormProperties>({
		});

	}


	/** Response message for 'SearchBackgroundJobs' request. */
	export interface SearchBackgroundJobsResponse {

		/** The list of conversion workspace mapping rules. */
		jobs?: Array<BackgroundJobLogEntry>;
	}

	/** Response message for 'SearchBackgroundJobs' request. */
	export interface SearchBackgroundJobsResponseFormProperties {
	}
	export function CreateSearchBackgroundJobsResponseFormGroup() {
		return new FormGroup<SearchBackgroundJobsResponseFormProperties>({
		});

	}


	/** Request message for 'SeedConversionWorkspace' request. */
	export interface SeedConversionWorkspaceRequest {

		/** Should the conversion workspace be committed automatically after the seed operation. */
		autoCommit?: boolean | null;

		/** Optional. Fully qualified (Uri) name of the destination connection profile. */
		destinationConnectionProfile?: string | null;

		/** Optional. Fully qualified (Uri) name of the source connection profile. */
		sourceConnectionProfile?: string | null;
	}

	/** Request message for 'SeedConversionWorkspace' request. */
	export interface SeedConversionWorkspaceRequestFormProperties {

		/** Should the conversion workspace be committed automatically after the seed operation. */
		autoCommit: FormControl<boolean | null | undefined>,

		/** Optional. Fully qualified (Uri) name of the destination connection profile. */
		destinationConnectionProfile: FormControl<string | null | undefined>,

		/** Optional. Fully qualified (Uri) name of the source connection profile. */
		sourceConnectionProfile: FormControl<string | null | undefined>,
	}
	export function CreateSeedConversionWorkspaceRequestFormGroup() {
		return new FormGroup<SeedConversionWorkspaceRequestFormProperties>({
			autoCommit: new FormControl<boolean | null | undefined>(undefined),
			destinationConnectionProfile: new FormControl<string | null | undefined>(undefined),
			sourceConnectionProfile: new FormControl<string | null | undefined>(undefined),
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

		/** Optional. Start the migration job without running prior configuration verification. Defaults to `false`. */
		skipValidation?: boolean | null;
	}

	/** Request message for 'StartMigrationJob' request. */
	export interface StartMigrationJobRequestFormProperties {

		/** Optional. Start the migration job without running prior configuration verification. Defaults to `false`. */
		skipValidation: FormControl<boolean | null | undefined>,
	}
	export function CreateStartMigrationJobRequestFormGroup() {
		return new FormGroup<StartMigrationJobRequestFormProperties>({
			skipValidation: new FormControl<boolean | null | undefined>(undefined),
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


	/** Response message for 'GenerateTcpProxyScript' request. */
	export interface TcpProxyScript {

		/** The TCP Proxy configuration script. */
		script?: string | null;
	}

	/** Response message for 'GenerateTcpProxyScript' request. */
	export interface TcpProxyScriptFormProperties {

		/** The TCP Proxy configuration script. */
		script: FormControl<string | null | undefined>,
	}
	export function CreateTcpProxyScriptFormGroup() {
		return new FormGroup<TcpProxyScriptFormProperties>({
			script: new FormControl<string | null | undefined>(undefined),
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

		/** Represents a Database Migration Service migration job object. */
		migrationJob?: MigrationJob;

		/** Optional. Field mask is used to specify the changed fields to be verified. It will not update the migration job. */
		updateMask?: string | null;
	}

	/** Request message for 'VerifyMigrationJob' request. */
	export interface VerifyMigrationJobRequestFormProperties {

		/** Optional. Field mask is used to specify the changed fields to be verified. It will not update the migration job. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateVerifyMigrationJobRequestFormGroup() {
		return new FormGroup<VerifyMigrationJobRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a list of committed revisions of a specific conversion workspace.
		 * Get v1/{conversionWorkspace}:describeConversionWorkspaceRevisions
		 * @param {string} conversionWorkspace Required. Name of the conversion workspace resource whose revisions are listed. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
		 * @param {string} commitId Optional. Optional filter to request a specific commit ID.
		 * @return {DescribeConversionWorkspaceRevisionsResponse} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_describeConversionWorkspaceRevisions(conversionWorkspace: string, commitId: string | null | undefined): Observable<DescribeConversionWorkspaceRevisionsResponse> {
			return this.http.get<DescribeConversionWorkspaceRevisionsResponse>(this.baseUri + 'v1/' + (conversionWorkspace == null ? '' : encodeURIComponent(conversionWorkspace)) + ':describeConversionWorkspaceRevisions&commitId=' + (commitId == null ? '' : encodeURIComponent(commitId)), {});
		}

		/**
		 * Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
		 * Get v1/{conversionWorkspace}:describeDatabaseEntities
		 * @param {string} conversionWorkspace Required. Name of the conversion workspace resource whose database entities are described. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
		 * @param {string} commitId Optional. Request a specific commit ID. If not specified, the entities from the latest commit are returned.
		 * @param {string} filter Optional. Filter the returned entities based on AIP-160 standard.
		 * @param {number} pageSize Optional. The maximum number of entities to return. The service may return fewer entities than the value specifies.
		 * @param {string} pageToken Optional. The nextPageToken value received in the previous call to conversionWorkspace.describeDatabaseEntities, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspace.describeDatabaseEntities must match the call that provided the page token.
		 * @param {Datamigration_projects_locations_conversionWorkspaces_describeDatabaseEntitiesTree} tree Required. The tree to fetch.
		 * @param {boolean} uncommitted Optional. Whether to retrieve the latest committed version of the entities or the latest version. This field is ignored if a specific commit_id is specified.
		 * @param {Datamigration_projects_locations_conversionWorkspaces_describeDatabaseEntitiesView} view Optional. Results view based on AIP-157
		 * @return {DescribeDatabaseEntitiesResponse} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_describeDatabaseEntities(conversionWorkspace: string, commitId: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, tree: Datamigration_projects_locations_conversionWorkspaces_describeDatabaseEntitiesTree | null | undefined, uncommitted: boolean | null | undefined, view: Datamigration_projects_locations_conversionWorkspaces_describeDatabaseEntitiesView | null | undefined): Observable<DescribeDatabaseEntitiesResponse> {
			return this.http.get<DescribeDatabaseEntitiesResponse>(this.baseUri + 'v1/' + (conversionWorkspace == null ? '' : encodeURIComponent(conversionWorkspace)) + ':describeDatabaseEntities&commitId=' + (commitId == null ? '' : encodeURIComponent(commitId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&tree=' + tree + '&uncommitted=' + uncommitted + '&view=' + view, {});
		}

		/**
		 * Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
		 * Get v1/{conversionWorkspace}:searchBackgroundJobs
		 * @param {string} conversionWorkspace Required. Name of the conversion workspace resource whose jobs are listed, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
		 * @param {string} completedUntilTime Optional. If provided, only returns jobs that completed until (not including) the given timestamp.
		 * @param {number} maxSize Optional. The maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 100 jobs are returned. The maximum value is 100; values above 100 are coerced to 100.
		 * @param {boolean} returnMostRecentPerJobType Optional. Whether or not to return just the most recent job per job type,
		 * @return {SearchBackgroundJobsResponse} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_searchBackgroundJobs(conversionWorkspace: string, completedUntilTime: string | null | undefined, maxSize: number | null | undefined, returnMostRecentPerJobType: boolean | null | undefined): Observable<SearchBackgroundJobsResponse> {
			return this.http.get<SearchBackgroundJobsResponse>(this.baseUri + 'v1/' + (conversionWorkspace == null ? '' : encodeURIComponent(conversionWorkspace)) + ':searchBackgroundJobs&completedUntilTime=' + (completedUntilTime == null ? '' : encodeURIComponent(completedUntilTime)) + '&maxSize=' + maxSize + '&returnMostRecentPerJobType=' + returnMostRecentPerJobType, {});
		}

		/**
		 * Generate a SSH configuration script to configure the reverse SSH connectivity.
		 * Post v1/{migrationJob}:generateSshScript
		 * @param {string} migrationJob Name of the migration job resource to generate the SSH script.
		 * @return {SshScript} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_generateSshScript(migrationJob: string, requestBody: GenerateSshScriptRequest): Observable<SshScript> {
			return this.http.post<SshScript>(this.baseUri + 'v1/' + (migrationJob == null ? '' : encodeURIComponent(migrationJob)) + ':generateSshScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generate a TCP Proxy configuration script to configure a cloud-hosted VM running a TCP Proxy.
		 * Post v1/{migrationJob}:generateTcpProxyScript
		 * @param {string} migrationJob Name of the migration job resource to generate the TCP Proxy script.
		 * @return {TcpProxyScript} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_generateTcpProxyScript(migrationJob: string, requestBody: GenerateTcpProxyScriptRequest): Observable<TcpProxyScript> {
			return this.http.post<TcpProxyScript>(this.baseUri + 'v1/' + (migrationJob == null ? '' : encodeURIComponent(migrationJob)) + ':generateTcpProxyScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a single Database Migration Service private connection.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the private connection to delete.
		 * @param {string} requestId Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_privateConnections_delete(name: string, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets details of a single private connection.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the private connection to get.
		 * @return {PrivateConnection} Successful response
		 */
		Datamigration_projects_locations_privateConnections_get(name: string): Observable<PrivateConnection> {
			return this.http.get<PrivateConnection>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the parameters of a single migration job.
		 * Patch v1/{name}
		 * @param {string} name The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}.
		 * @param {string} requestId A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @param {string} updateMask Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource.
		 * @param {boolean} validateOnly Optional. Only validate the connection profile, but don't update any resources. The default is false. Only supported for Oracle connection profiles.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: MigrationJob): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Datamigration_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Datamigration_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Applies draft tree onto a specific destination database.
		 * Post v1/{name}:apply
		 * @param {string} name Required. The name of the conversion workspace resource for which to apply the draft tree. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_apply(name: string, requestBody: ApplyConversionWorkspaceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':apply', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Datamigration_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Marks all the data in the conversion workspace as committed.
		 * Post v1/{name}:commit
		 * @param {string} name Required. Name of the conversion workspace resource to commit.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_commit(name: string, requestBody: CommitConversionWorkspaceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a draft tree schema for the destination database.
		 * Post v1/{name}:convert
		 * @param {string} name Name of the conversion workspace resource to convert in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_convert(name: string, requestBody: ConvertConversionWorkspaceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':convert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Demotes the destination database to become a read replica of the source. This is applicable for the following migrations: 1. MySQL to Cloud SQL (for MySQL) 2. PostgreSQL to Cloud SQL (for PostgreSQL) 3. PostgreSQL to AlloyDB.
		 * Post v1/{name}:demoteDestination
		 * @param {string} name Name of the migration job resource to demote its destination.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_demoteDestination(name: string, requestBody: DemoteDestinationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':demoteDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
		 * Get v1/{name}:fetchStaticIps
		 * @param {string} name Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/locations/*`.
		 * @param {number} pageSize Maximum number of IPs to return.
		 * @param {string} pageToken A page token, received from a previous `FetchStaticIps` call.
		 * @return {FetchStaticIpsResponse} Successful response
		 */
		Datamigration_projects_locations_fetchStaticIps(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<FetchStaticIpsResponse> {
			return this.http.get<FetchStaticIpsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':fetchStaticIps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
		 * Post v1/{name}:promote
		 * @param {string} name Name of the migration job resource to promote.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_promote(name: string, requestBody: PromoteMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':promote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
		 * Post v1/{name}:restart
		 * @param {string} name Name of the migration job resource to restart.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_restart(name: string, requestBody: RestartMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':restart', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
		 * Post v1/{name}:resume
		 * @param {string} name Name of the migration job resource to resume.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_resume(name: string, requestBody: ResumeMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rolls back a conversion workspace to the last committed snapshot.
		 * Post v1/{name}:rollback
		 * @param {string} name Required. Name of the conversion workspace resource to roll back to.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_rollback(name: string, requestBody: RollbackConversionWorkspaceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports a snapshot of the source database into the conversion workspace.
		 * Post v1/{name}:seed
		 * @param {string} name Name of the conversion workspace resource to seed with new database structure, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_seed(name: string, requestBody: SeedConversionWorkspaceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':seed', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start an already created migration job.
		 * Post v1/{name}:start
		 * @param {string} name Name of the migration job resource to start.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_start(name: string, requestBody: StartMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a running migration job.
		 * Post v1/{name}:stop
		 * @param {string} name Name of the migration job resource to stop.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_stop(name: string, requestBody: StopMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
		 * Post v1/{name}:verify
		 * @param {string} name Name of the migration job resource to verify.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_verify(name: string, requestBody: VerifyMigrationJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all connection profiles in a given project and location.
		 * Get v1/{parent}/connectionProfiles
		 * @param {string} parent Required. The parent which owns this collection of connection profiles.
		 * @param {string} filter A filter expression that filters connection profiles listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list connection profiles created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z**. You can also filter nested fields. For example, you could specify **mySql.username = %lt;my_username%gt;** to list all connection profiles configured to connect with a specific username.
		 * @param {string} orderBy A comma-separated list of fields to order results according to.
		 * @param {number} pageSize The maximum number of connection profiles to return. The service may return fewer than this value. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 are coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.
		 * @return {ListConnectionProfilesResponse} Successful response
		 */
		Datamigration_projects_locations_connectionProfiles_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConnectionProfilesResponse> {
			return this.http.get<ListConnectionProfilesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectionProfiles&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new connection profile in a given project and location.
		 * Post v1/{parent}/connectionProfiles
		 * @param {string} parent Required. The parent which owns this collection of connection profiles.
		 * @param {string} connectionProfileId Required. The connection profile identifier.
		 * @param {string} requestId Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @param {boolean} skipValidation Optional. Create the connection profile without validating it. The default is false. Only supported for Oracle connection profiles.
		 * @param {boolean} validateOnly Optional. Only validate the connection profile, but don't create any resources. The default is false. Only supported for Oracle connection profiles.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_connectionProfiles_create(parent: string, connectionProfileId: string | null | undefined, requestId: string | null | undefined, skipValidation: boolean | null | undefined, validateOnly: boolean | null | undefined, requestBody: ConnectionProfile): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectionProfiles&connectionProfileId=' + (connectionProfileId == null ? '' : encodeURIComponent(connectionProfileId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&skipValidation=' + skipValidation + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists conversion workspaces in a given project and location.
		 * Get v1/{parent}/conversionWorkspaces
		 * @param {string} parent Required. The parent which owns this collection of conversion workspaces.
		 * @param {string} filter A filter expression that filters conversion workspaces listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list conversion workspaces created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **source.version = "12.c.1"** to select all conversion workspaces with source database version equal to 12.c.1.
		 * @param {number} pageSize The maximum number of conversion workspaces to return. The service may return fewer than this value. If unspecified, at most 50 sets are returned.
		 * @param {string} pageToken The nextPageToken value received in the previous call to conversionWorkspaces.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspaces.list must match the call that provided the page token.
		 * @return {ListConversionWorkspacesResponse} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConversionWorkspacesResponse> {
			return this.http.get<ListConversionWorkspacesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversionWorkspaces&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new conversion workspace in a given project and location.
		 * Post v1/{parent}/conversionWorkspaces
		 * @param {string} parent Required. The parent which owns this collection of conversion workspaces.
		 * @param {string} conversionWorkspaceId Required. The ID of the conversion workspace to create.
		 * @param {string} requestId A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_create(parent: string, conversionWorkspaceId: string | null | undefined, requestId: string | null | undefined, requestBody: ConversionWorkspace): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversionWorkspaces&conversionWorkspaceId=' + (conversionWorkspaceId == null ? '' : encodeURIComponent(conversionWorkspaceId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the mapping rules for a specific conversion workspace.
		 * Get v1/{parent}/mappingRules
		 * @param {string} parent Required. Name of the conversion workspace resource whose mapping rules are listed in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
		 * @param {number} pageSize The maximum number of rules to return. The service may return fewer than this value.
		 * @param {string} pageToken The nextPageToken value received in the previous call to mappingRules.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to mappingRules.list must match the call that provided the page token.
		 * @return {ListMappingRulesResponse} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_mappingRules_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMappingRulesResponse> {
			return this.http.get<ListMappingRulesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/mappingRules&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new mapping rule for a given conversion workspace.
		 * Post v1/{parent}/mappingRules
		 * @param {string} parent Required. The parent which owns this collection of mapping rules.
		 * @param {string} mappingRuleId Required. The ID of the rule to create.
		 * @param {string} requestId A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {MappingRule} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_mappingRules_create(parent: string, mappingRuleId: string | null | undefined, requestId: string | null | undefined, requestBody: MappingRule): Observable<MappingRule> {
			return this.http.post<MappingRule>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/mappingRules&mappingRuleId=' + (mappingRuleId == null ? '' : encodeURIComponent(mappingRuleId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
		 * Post v1/{parent}/mappingRules:import
		 * @param {string} parent Required. Name of the conversion workspace resource to import the rules to in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_conversionWorkspaces_mappingRules_import(parent: string, requestBody: ImportMappingRulesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/mappingRules:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists migration jobs in a given project and location.
		 * Get v1/{parent}/migrationJobs
		 * @param {string} parent Required. The parent which owns this collection of migrationJobs.
		 * @param {string} filter A filter expression that filters migration jobs listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list migration jobs created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **reverseSshConnectivity.vmIp = "1.2.3.4"** to select all migration jobs connecting through the specific SSH tunnel bastion.
		 * @param {string} orderBy Sort the results based on the migration job name. Valid values are: "name", "name asc", and "name desc".
		 * @param {number} pageSize The maximum number of migration jobs to return. The service may return fewer than this value. If unspecified, at most 50 migration jobs will be returned. The maximum value is 1000; values above 1000 are coerced to 1000.
		 * @param {string} pageToken The nextPageToken value received in the previous call to migrationJobs.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to migrationJobs.list must match the call that provided the page token.
		 * @return {ListMigrationJobsResponse} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMigrationJobsResponse> {
			return this.http.get<ListMigrationJobsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/migrationJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new migration job in a given project and location.
		 * Post v1/{parent}/migrationJobs
		 * @param {string} parent Required. The parent which owns this collection of migration jobs.
		 * @param {string} migrationJobId Required. The ID of the instance to create.
		 * @param {string} requestId Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_migrationJobs_create(parent: string, migrationJobId: string | null | undefined, requestId: string | null | undefined, requestBody: MigrationJob): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/migrationJobs&migrationJobId=' + (migrationJobId == null ? '' : encodeURIComponent(migrationJobId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of private connections in a given project and location.
		 * Get v1/{parent}/privateConnections
		 * @param {string} parent Required. The parent that owns the collection of private connections.
		 * @param {string} filter A filter expression that filters private connections listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list private connections created this year by specifying **createTime %gt; 2021-01-01T00:00:00.000000000Z**.
		 * @param {string} orderBy Order by fields for the result.
		 * @param {number} pageSize Maximum number of private connections to return. If unspecified, at most 50 private connections that are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
		 * @param {string} pageToken Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.
		 * @return {ListPrivateConnectionsResponse} Successful response
		 */
		Datamigration_projects_locations_privateConnections_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPrivateConnectionsResponse> {
			return this.http.get<ListPrivateConnectionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/privateConnections&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new private connection in a given project and location.
		 * Post v1/{parent}/privateConnections
		 * @param {string} parent Required. The parent that owns the collection of PrivateConnections.
		 * @param {string} privateConnectionId Required. The private connection identifier.
		 * @param {string} requestId Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
		 * @param {boolean} skipValidation Optional. If set to true, will skip validations.
		 * @return {Operation} Successful response
		 */
		Datamigration_projects_locations_privateConnections_create(parent: string, privateConnectionId: string | null | undefined, requestId: string | null | undefined, skipValidation: boolean | null | undefined, requestBody: PrivateConnection): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/privateConnections&privateConnectionId=' + (privateConnectionId == null ? '' : encodeURIComponent(privateConnectionId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&skipValidation=' + skipValidation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Datamigration_projects_locations_privateConnections_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Datamigration_projects_locations_privateConnections_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Datamigration_projects_locations_privateConnections_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Datamigration_projects_locations_conversionWorkspaces_describeDatabaseEntitiesTree { DB_TREE_TYPE_UNSPECIFIED = 0, SOURCE_TREE = 1, DRAFT_TREE = 2, DESTINATION_TREE = 3 }

	export enum Datamigration_projects_locations_conversionWorkspaces_describeDatabaseEntitiesView { DATABASE_ENTITY_VIEW_UNSPECIFIED = 0, DATABASE_ENTITY_VIEW_BASIC = 1, DATABASE_ENTITY_VIEW_FULL = 2, DATABASE_ENTITY_VIEW_ROOT_SUMMARY = 3 }

}

