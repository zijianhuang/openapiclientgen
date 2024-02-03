import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Looker instance Admin settings fields. */
	export interface AdminSettings {

		/** Email domain allowlist for the instance. */
		allowedEmailDomains?: Array<string>;
	}

	/** Looker instance Admin settings fields. */
	export interface AdminSettingsFormProperties {
	}
	export function CreateAdminSettingsFormGroup() {
		return new FormGroup<AdminSettingsFormProperties>({
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

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
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


	/** Custom domain information. */
	export interface CustomDomain {

		/** Domain name. */
		domain?: string | null;

		/** Domain state. */
		state?: CustomDomainState | null;
	}

	/** Custom domain information. */
	export interface CustomDomainFormProperties {

		/** Domain name. */
		domain: FormControl<string | null | undefined>,

		/** Domain state. */
		state: FormControl<CustomDomainState | null | undefined>,
	}
	export function CreateCustomDomainFormGroup() {
		return new FormGroup<CustomDomainFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CustomDomainState | null | undefined>(undefined),
		});

	}

	export enum CustomDomainState { CUSTOM_DOMAIN_STATE_UNSPECIFIED = 'CUSTOM_DOMAIN_STATE_UNSPECIFIED', UNVERIFIED = 'UNVERIFIED', VERIFIED = 'VERIFIED', MODIFYING = 'MODIFYING', AVAILABLE = 'AVAILABLE', UNAVAILABLE = 'UNAVAILABLE', UNKNOWN = 'UNKNOWN' }


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


	/** Specifies the maintenance denial period. */
	export interface DenyMaintenancePeriod {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		time?: TimeOfDay;
	}

	/** Specifies the maintenance denial period. */
	export interface DenyMaintenancePeriodFormProperties {
	}
	export function CreateDenyMaintenancePeriodFormGroup() {
		return new FormGroup<DenyMaintenancePeriodFormProperties>({
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


	/** Encryption configuration (i.e. CMEK). */
	export interface EncryptionConfig {

		/** Name of the CMEK key in KMS (input parameter). */
		kmsKeyName?: string | null;

		/** Output only. Full name and version of the CMEK key currently in use to encrypt Looker data. Format: `projects/{project}/locations/{location}/keyRings/{ring}/cryptoKeys/{key}/cryptoKeyVersions/{version}`. Empty if CMEK is not configured in this instance. */
		kmsKeyNameVersion?: string | null;

		/** Output only. Status of the CMEK key. */
		kmsKeyState?: EncryptionConfigKmsKeyState | null;
	}

	/** Encryption configuration (i.e. CMEK). */
	export interface EncryptionConfigFormProperties {

		/** Name of the CMEK key in KMS (input parameter). */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Output only. Full name and version of the CMEK key currently in use to encrypt Looker data. Format: `projects/{project}/locations/{location}/keyRings/{ring}/cryptoKeys/{key}/cryptoKeyVersions/{version}`. Empty if CMEK is not configured in this instance. */
		kmsKeyNameVersion: FormControl<string | null | undefined>,

		/** Output only. Status of the CMEK key. */
		kmsKeyState: FormControl<EncryptionConfigKmsKeyState | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			kmsKeyNameVersion: new FormControl<string | null | undefined>(undefined),
			kmsKeyState: new FormControl<EncryptionConfigKmsKeyState | null | undefined>(undefined),
		});

	}

	export enum EncryptionConfigKmsKeyState { KMS_KEY_STATE_UNSPECIFIED = 'KMS_KEY_STATE_UNSPECIFIED', VALID = 'VALID', REVOKED = 'REVOKED' }


	/** Configuration for Encryption - e.g. CMEK. */
	export interface ExportEncryptionConfig {

		/** Required. Name of the CMEK key in KMS. */
		kmsKeyName?: string | null;
	}

	/** Configuration for Encryption - e.g. CMEK. */
	export interface ExportEncryptionConfigFormProperties {

		/** Required. Name of the CMEK key in KMS. */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateExportEncryptionConfigFormGroup() {
		return new FormGroup<ExportEncryptionConfigFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request options for exporting data of an Instance. */
	export interface ExportInstanceRequest {

		/** Configuration for Encryption - e.g. CMEK. */
		encryptionConfig?: ExportEncryptionConfig;

		/** The path to the folder in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/folderName`. */
		gcsUri?: string | null;
	}

	/** Request options for exporting data of an Instance. */
	export interface ExportInstanceRequestFormProperties {

		/** The path to the folder in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/folderName`. */
		gcsUri: FormControl<string | null | undefined>,
	}
	export function CreateExportInstanceRequestFormGroup() {
		return new FormGroup<ExportInstanceRequestFormProperties>({
			gcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExportMetadata represents the metadata of the exported artifacts. The metadata.json file in export artifact can be parsed as this message */
	export interface ExportMetadata {

		/** Encryption key details for the exported artifact. */
		exportEncryptionKey?: ExportMetadataEncryptionKey;

		/** List of files created as part of export artifact (excluding the metadata). The paths are relative to the folder containing the metadata. */
		filePaths?: Array<string>;

		/** Looker encryption key, encrypted with the provided export encryption key. This value will only be populated if the looker instance uses Looker managed encryption instead of CMEK. */
		lookerEncryptionKey?: string | null;

		/** Name of the exported instance. Format: projects/{project}/locations/{location}/instances/{instance} */
		lookerInstance?: string | null;

		/** Platform edition of the exported instance. */
		lookerPlatformEdition?: string | null;

		/** Version of instance when the export was created. */
		lookerVersion?: string | null;

		/** The source type of the migration. */
		source?: ExportMetadataSource | null;
	}

	/** ExportMetadata represents the metadata of the exported artifacts. The metadata.json file in export artifact can be parsed as this message */
	export interface ExportMetadataFormProperties {

		/** Looker encryption key, encrypted with the provided export encryption key. This value will only be populated if the looker instance uses Looker managed encryption instead of CMEK. */
		lookerEncryptionKey: FormControl<string | null | undefined>,

		/** Name of the exported instance. Format: projects/{project}/locations/{location}/instances/{instance} */
		lookerInstance: FormControl<string | null | undefined>,

		/** Platform edition of the exported instance. */
		lookerPlatformEdition: FormControl<string | null | undefined>,

		/** Version of instance when the export was created. */
		lookerVersion: FormControl<string | null | undefined>,

		/** The source type of the migration. */
		source: FormControl<ExportMetadataSource | null | undefined>,
	}
	export function CreateExportMetadataFormGroup() {
		return new FormGroup<ExportMetadataFormProperties>({
			lookerEncryptionKey: new FormControl<string | null | undefined>(undefined),
			lookerInstance: new FormControl<string | null | undefined>(undefined),
			lookerPlatformEdition: new FormControl<string | null | undefined>(undefined),
			lookerVersion: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<ExportMetadataSource | null | undefined>(undefined),
		});

	}


	/** Encryption key details for the exported artifact. */
	export interface ExportMetadataEncryptionKey {

		/** Name of the CMEK. */
		cmek?: string | null;

		/** Version of the CMEK. */
		version?: string | null;
	}

	/** Encryption key details for the exported artifact. */
	export interface ExportMetadataEncryptionKeyFormProperties {

		/** Name of the CMEK. */
		cmek: FormControl<string | null | undefined>,

		/** Version of the CMEK. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateExportMetadataEncryptionKeyFormGroup() {
		return new FormGroup<ExportMetadataEncryptionKeyFormProperties>({
			cmek: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExportMetadataSource { SOURCE_UNSPECIFIED = 'SOURCE_UNSPECIFIED', LOOKER_CORE = 'LOOKER_CORE', LOOKER_ORIGINAL = 'LOOKER_ORIGINAL' }


	/** Requestion options for importing looker data to an Instance */
	export interface ImportInstanceRequest {

		/** Path to the import folder in Google Cloud Storage, in the form `gs://bucketName/folderName`. */
		gcsUri?: string | null;
	}

	/** Requestion options for importing looker data to an Instance */
	export interface ImportInstanceRequestFormProperties {

		/** Path to the import folder in Google Cloud Storage, in the form `gs://bucketName/folderName`. */
		gcsUri: FormControl<string | null | undefined>,
	}
	export function CreateImportInstanceRequestFormGroup() {
		return new FormGroup<ImportInstanceRequestFormProperties>({
			gcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Looker instance. */
	export interface Instance {

		/** Looker instance Admin settings fields. */
		adminSettings?: AdminSettings;

		/** Network name in the consumer project. Format: `projects/{project}/global/networks/{network}`. Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. */
		consumerNetwork?: string | null;

		/** Output only. The time when the Looker instance provisioning was first requested. */
		createTime?: string | null;

		/** Custom domain information. */
		customDomain?: CustomDomain;

		/** Specifies the maintenance denial period. */
		denyMaintenancePeriod?: DenyMaintenancePeriod;

		/** Output only. Public Egress IP (IPv4). */
		egressPublicIp?: string | null;

		/** Encryption configuration (i.e. CMEK). */
		encryptionConfig?: EncryptionConfig;

		/** Output only. Private Ingress IP (IPv4). */
		ingressPrivateIp?: string | null;

		/** Output only. Public Ingress IP (IPv4). */
		ingressPublicIp?: string | null;

		/** Specifies the maintenance denial period. */
		lastDenyMaintenancePeriod?: DenyMaintenancePeriod;

		/** Output only. Looker instance URI which can be used to access the Looker Instance UI. */
		lookerUri?: string | null;

		/** Output only. The Looker version that the instance is using. */
		lookerVersion?: string | null;

		/** Published upcoming future maintenance schedule. */
		maintenanceSchedule?: MaintenanceSchedule;

		/** Specifies the recurring maintenance window. */
		maintenanceWindow?: MaintenanceWindow;

		/** Output only. Format: `projects/{project}/locations/{location}/instances/{instance}`. */
		name?: string | null;

		/** Looker instance OAuth login settings. */
		oauthConfig?: OAuthConfig;

		/** Platform edition. */
		platformEdition?: InstancePlatformEdition | null;

		/** Whether private IP is enabled on the Looker instance. */
		privateIpEnabled?: boolean | null;

		/** Whether public IP is enabled on the Looker instance. */
		publicIpEnabled?: boolean | null;

		/** Name of a reserved IP address range within the Instance.consumer_network, to be used for private services access connection. May or may not be specified in a create request. */
		reservedRange?: string | null;

		/** Output only. The state of the instance. */
		state?: InstanceState | null;

		/** Output only. The time when the Looker instance was last updated. */
		updateTime?: string | null;

		/** Metadata about users for a Looker instance. */
		userMetadata?: UserMetadata;
	}

	/** A Looker instance. */
	export interface InstanceFormProperties {

		/** Network name in the consumer project. Format: `projects/{project}/global/networks/{network}`. Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. */
		consumerNetwork: FormControl<string | null | undefined>,

		/** Output only. The time when the Looker instance provisioning was first requested. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Public Egress IP (IPv4). */
		egressPublicIp: FormControl<string | null | undefined>,

		/** Output only. Private Ingress IP (IPv4). */
		ingressPrivateIp: FormControl<string | null | undefined>,

		/** Output only. Public Ingress IP (IPv4). */
		ingressPublicIp: FormControl<string | null | undefined>,

		/** Output only. Looker instance URI which can be used to access the Looker Instance UI. */
		lookerUri: FormControl<string | null | undefined>,

		/** Output only. The Looker version that the instance is using. */
		lookerVersion: FormControl<string | null | undefined>,

		/** Output only. Format: `projects/{project}/locations/{location}/instances/{instance}`. */
		name: FormControl<string | null | undefined>,

		/** Platform edition. */
		platformEdition: FormControl<InstancePlatformEdition | null | undefined>,

		/** Whether private IP is enabled on the Looker instance. */
		privateIpEnabled: FormControl<boolean | null | undefined>,

		/** Whether public IP is enabled on the Looker instance. */
		publicIpEnabled: FormControl<boolean | null | undefined>,

		/** Name of a reserved IP address range within the Instance.consumer_network, to be used for private services access connection. May or may not be specified in a create request. */
		reservedRange: FormControl<string | null | undefined>,

		/** Output only. The state of the instance. */
		state: FormControl<InstanceState | null | undefined>,

		/** Output only. The time when the Looker instance was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			consumerNetwork: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			egressPublicIp: new FormControl<string | null | undefined>(undefined),
			ingressPrivateIp: new FormControl<string | null | undefined>(undefined),
			ingressPublicIp: new FormControl<string | null | undefined>(undefined),
			lookerUri: new FormControl<string | null | undefined>(undefined),
			lookerVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platformEdition: new FormControl<InstancePlatformEdition | null | undefined>(undefined),
			privateIpEnabled: new FormControl<boolean | null | undefined>(undefined),
			publicIpEnabled: new FormControl<boolean | null | undefined>(undefined),
			reservedRange: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Published upcoming future maintenance schedule. */
	export interface MaintenanceSchedule {

		/** The scheduled end time for the maintenance. */
		endTime?: string | null;

		/** The scheduled start time for the maintenance. */
		startTime?: string | null;
	}

	/** Published upcoming future maintenance schedule. */
	export interface MaintenanceScheduleFormProperties {

		/** The scheduled end time for the maintenance. */
		endTime: FormControl<string | null | undefined>,

		/** The scheduled start time for the maintenance. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceScheduleFormGroup() {
		return new FormGroup<MaintenanceScheduleFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the recurring maintenance window. */
	export interface MaintenanceWindow {

		/** Required. Day of the week for this MaintenanceWindow (in UTC). */
		dayOfWeek?: MaintenanceWindowDayOfWeek | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Specifies the recurring maintenance window. */
	export interface MaintenanceWindowFormProperties {

		/** Required. Day of the week for this MaintenanceWindow (in UTC). */
		dayOfWeek: FormControl<MaintenanceWindowDayOfWeek | null | undefined>,
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
			dayOfWeek: new FormControl<MaintenanceWindowDayOfWeek | null | undefined>(undefined),
		});

	}

	export enum MaintenanceWindowDayOfWeek { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


	/** Looker instance OAuth login settings. */
	export interface OAuthConfig {

		/** Input only. Client ID from an external OAuth application. This is an input-only field, and thus will not be set in any responses. */
		clientId?: string | null;

		/** Input only. Client secret from an external OAuth application. This is an input-only field, and thus will not be set in any responses. */
		clientSecret?: string | null;
	}

	/** Looker instance OAuth login settings. */
	export interface OAuthConfigFormProperties {

		/** Input only. Client ID from an external OAuth application. This is an input-only field, and thus will not be set in any responses. */
		clientId: FormControl<string | null | undefined>,

		/** Input only. Client secret from an external OAuth application. This is an input-only field, and thus will not be set in any responses. */
		clientSecret: FormControl<string | null | undefined>,
	}
	export function CreateOAuthConfigFormGroup() {
		return new FormGroup<OAuthConfigFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstancePlatformEdition { PLATFORM_EDITION_UNSPECIFIED = 'PLATFORM_EDITION_UNSPECIFIED', LOOKER_CORE_TRIAL = 'LOOKER_CORE_TRIAL', LOOKER_CORE_STANDARD = 'LOOKER_CORE_STANDARD', LOOKER_CORE_STANDARD_ANNUAL = 'LOOKER_CORE_STANDARD_ANNUAL', LOOKER_CORE_ENTERPRISE_ANNUAL = 'LOOKER_CORE_ENTERPRISE_ANNUAL', LOOKER_CORE_EMBED_ANNUAL = 'LOOKER_CORE_EMBED_ANNUAL' }

	export enum InstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', CREATING = 'CREATING', FAILED = 'FAILED', SUSPENDED = 'SUSPENDED', UPDATING = 'UPDATING', DELETING = 'DELETING', EXPORTING = 'EXPORTING', IMPORTING = 'IMPORTING' }


	/** Metadata about users for a Looker instance. */
	export interface UserMetadata {

		/** Optional. The number of additional developer users the instance owner has purchased. */
		additionalDeveloperUserCount?: number | null;

		/** Optional. The number of additional standard users the instance owner has purchased. */
		additionalStandardUserCount?: number | null;

		/** Optional. The number of additional viewer users the instance owner has purchased. */
		additionalViewerUserCount?: number | null;
	}

	/** Metadata about users for a Looker instance. */
	export interface UserMetadataFormProperties {

		/** Optional. The number of additional developer users the instance owner has purchased. */
		additionalDeveloperUserCount: FormControl<number | null | undefined>,

		/** Optional. The number of additional standard users the instance owner has purchased. */
		additionalStandardUserCount: FormControl<number | null | undefined>,

		/** Optional. The number of additional viewer users the instance owner has purchased. */
		additionalViewerUserCount: FormControl<number | null | undefined>,
	}
	export function CreateUserMetadataFormGroup() {
		return new FormGroup<UserMetadataFormProperties>({
			additionalDeveloperUserCount: new FormControl<number | null | undefined>(undefined),
			additionalStandardUserCount: new FormControl<number | null | undefined>(undefined),
			additionalViewerUserCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response from ListInstances. */
	export interface ListInstancesResponse {

		/** The list of instances matching the request filters, up to the requested ListInstancesRequest.pageSize. */
		instances?: Array<Instance>;

		/** If provided, a page token that can look up the next ListInstancesRequest.pageSize results. If empty, the results list is exhausted. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response from ListInstances. */
	export interface ListInstancesResponseFormProperties {

		/** If provided, a page token that can look up the next ListInstancesRequest.pageSize results. If empty, the results list is exhausted. */
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


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** API version used to start the operation. */
		apiVersion?: string | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Name of the verb executed by the operation. */
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


	/** Request options for restarting an instance. */
	export interface RestartInstanceRequest {
	}

	/** Request options for restarting an instance. */
	export interface RestartInstanceRequestFormProperties {
	}
	export function CreateRestartInstanceRequestFormGroup() {
		return new FormGroup<RestartInstanceRequestFormProperties>({
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {boolean} force Whether to force cascading delete.
		 * @return {Empty} Successful response
		 */
		Looker_projects_locations_operations_delete(name: string, force: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Looker_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update Instance.
		 * Patch v1/{name}
		 * @param {string} name Output only. Format: `projects/{project}/locations/{location}/instances/{instance}`.
		 * @param {string} updateMask Required. Field mask used to specify the fields to be overwritten in the Instance resource by the update. The fields specified in the mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.
		 * @return {Operation} Successful response
		 */
		Looker_projects_locations_instances_patch(name: string, updateMask: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		Looker_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
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
		Looker_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Looker_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Export instance.
		 * Post v1/{name}:export
		 * @param {string} name Required. Format: `projects/{project}/locations/{location}/instances/{instance}`.
		 * @return {Operation} Successful response
		 */
		Looker_projects_locations_instances_export(name: string, requestBody: ExportInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Import instance.
		 * Post v1/{name}:import
		 * @param {string} name Required. Format: `projects/{project}/locations/{location}/instances/{instance}`.
		 * @return {Operation} Successful response
		 */
		Looker_projects_locations_instances_import(name: string, requestBody: ImportInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restart instance.
		 * Post v1/{name}:restart
		 * @param {string} name Required. Format: `projects/{project}/locations/{location}/instances/{instance}`.
		 * @return {Operation} Successful response
		 */
		Looker_projects_locations_instances_restart(name: string, requestBody: RestartInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':restart', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Instances in a given project and location.
		 * Get v1/{parent}/instances
		 * @param {string} parent Required. Format: `projects/{project}/locations/{location}`.
		 * @param {number} pageSize The maximum number of instances to return. If unspecified at most 256 will be returned. The maximum possible value is 2048.
		 * @param {string} pageToken A page token received from a previous ListInstancesRequest.
		 * @return {ListInstancesResponse} Successful response
		 */
		Looker_projects_locations_instances_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Instance in a given project and location.
		 * Post v1/{parent}/instances
		 * @param {string} parent Required. Format: `projects/{project}/locations/{location}`.
		 * @param {string} instanceId Required. The unique instance identifier. Must contain only lowercase letters, numbers, or hyphens, with the first character a letter and the last a letter or a number. 63 characters maximum.
		 * @return {Operation} Successful response
		 */
		Looker_projects_locations_instances_create(parent: string, instanceId: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Looker_projects_locations_instances_backups_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Looker_projects_locations_instances_backups_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Looker_projects_locations_instances_backups_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

