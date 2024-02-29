import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Async options that determine when a resource should finish. */
	export interface AsyncOptions {

		/** Method regex where this policy will apply. */
		methodMatch?: string | null;
		pollingOptions?: PollingOptions;
	}

	/** Async options that determine when a resource should finish. */
	export interface AsyncOptionsFormProperties {

		/** Method regex where this policy will apply. */
		methodMatch: FormControl<string | null | undefined>,
	}
	export function CreateAsyncOptionsFormGroup() {
		return new FormGroup<AsyncOptionsFormProperties>({
			methodMatch: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PollingOptions {

		/** An array of diagnostics to be collected by Deployment Manager, these diagnostics will be displayed to the user. */
		diagnostics?: Array<Diagnostic>;

		/** JsonPath expression that determines if the request failed. */
		failCondition?: string | null;

		/** JsonPath expression that determines if the request is completed. */
		finishCondition?: string | null;

		/** JsonPath expression that evaluates to string, it indicates where to poll. */
		pollingLink?: string | null;

		/** JsonPath expression, after polling is completed, indicates where to fetch the resource. */
		targetLink?: string | null;
	}
	export interface PollingOptionsFormProperties {

		/** JsonPath expression that determines if the request failed. */
		failCondition: FormControl<string | null | undefined>,

		/** JsonPath expression that determines if the request is completed. */
		finishCondition: FormControl<string | null | undefined>,

		/** JsonPath expression that evaluates to string, it indicates where to poll. */
		pollingLink: FormControl<string | null | undefined>,

		/** JsonPath expression, after polling is completed, indicates where to fetch the resource. */
		targetLink: FormControl<string | null | undefined>,
	}
	export function CreatePollingOptionsFormGroup() {
		return new FormGroup<PollingOptionsFormProperties>({
			failCondition: new FormControl<string | null | undefined>(undefined),
			finishCondition: new FormControl<string | null | undefined>(undefined),
			pollingLink: new FormControl<string | null | undefined>(undefined),
			targetLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Diagnostic {

		/** JsonPath expression on the resource that if non empty, indicates that this field needs to be extracted as a diagnostic. */
		field?: string | null;

		/** Level to record this diagnostic. */
		level?: DiagnosticLevel | null;
	}
	export interface DiagnosticFormProperties {

		/** JsonPath expression on the resource that if non empty, indicates that this field needs to be extracted as a diagnostic. */
		field: FormControl<string | null | undefined>,

		/** Level to record this diagnostic. */
		level: FormControl<DiagnosticLevel | null | undefined>,
	}
	export function CreateDiagnosticFormGroup() {
		return new FormGroup<DiagnosticFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<DiagnosticLevel | null | undefined>(undefined),
		});

	}

	export enum DiagnosticLevel { UNKNOWN = 'UNKNOWN', INFORMATION = 'INFORMATION', WARNING = 'WARNING', ERROR = 'ERROR' }


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


	/** BaseType that describes a service-backed Type. */
	export interface BaseType {

		/** Allows resource handling overrides for specific collections */
		collectionOverrides?: Array<CollectionOverride>;

		/** The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted. */
		credential?: Credential;

		/** Descriptor Url for the this type. */
		descriptorUrl?: string | null;

		/** Options allows customized resource handling by Deployment Manager. */
		options?: Options;
	}

	/** BaseType that describes a service-backed Type. */
	export interface BaseTypeFormProperties {

		/** Descriptor Url for the this type. */
		descriptorUrl: FormControl<string | null | undefined>,
	}
	export function CreateBaseTypeFormGroup() {
		return new FormGroup<BaseTypeFormProperties>({
			descriptorUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CollectionOverride allows resource handling overrides for specific resources within a BaseType */
	export interface CollectionOverride {

		/** The collection that identifies this resource within its service. */
		collection?: string | null;

		/** Options allows customized resource handling by Deployment Manager. */
		options?: Options;
	}

	/** CollectionOverride allows resource handling overrides for specific resources within a BaseType */
	export interface CollectionOverrideFormProperties {

		/** The collection that identifies this resource within its service. */
		collection: FormControl<string | null | undefined>,
	}
	export function CreateCollectionOverrideFormGroup() {
		return new FormGroup<CollectionOverrideFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options allows customized resource handling by Deployment Manager. */
	export interface Options {

		/** Options regarding how to thread async requests. */
		asyncOptions?: Array<AsyncOptions>;

		/** The mappings that apply for requests. */
		inputMappings?: Array<InputMapping>;

		/** Options for how to validate and process properties on a resource. */
		validationOptions?: ValidationOptions;

		/** Additional properties block described as a jsonSchema, these properties will never be part of the json payload, but they can be consumed by InputMappings, this must be a valid json schema draft-04. The properties specified here will be decouple in a different section. This schema will be merged to the schema validation, and properties here will be extracted From the payload and consumed explicitly by InputMappings. ex: field1: type: string field2: type: number */
		virtualProperties?: string | null;
	}

	/** Options allows customized resource handling by Deployment Manager. */
	export interface OptionsFormProperties {

		/** Additional properties block described as a jsonSchema, these properties will never be part of the json payload, but they can be consumed by InputMappings, this must be a valid json schema draft-04. The properties specified here will be decouple in a different section. This schema will be merged to the schema validation, and properties here will be extracted From the payload and consumed explicitly by InputMappings. ex: field1: type: string field2: type: number */
		virtualProperties: FormControl<string | null | undefined>,
	}
	export function CreateOptionsFormGroup() {
		return new FormGroup<OptionsFormProperties>({
			virtualProperties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API. */
	export interface InputMapping {

		/** The name of the field that is going to be injected. */
		fieldName?: string | null;

		/** The location where this mapping applies. */
		location?: InputMappingLocation | null;

		/** Regex to evaluate on method to decide if input applies. */
		methodMatch?: string | null;

		/** A jsonPath expression to select an element. */
		value?: string | null;
	}

	/** InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API. */
	export interface InputMappingFormProperties {

		/** The name of the field that is going to be injected. */
		fieldName: FormControl<string | null | undefined>,

		/** The location where this mapping applies. */
		location: FormControl<InputMappingLocation | null | undefined>,

		/** Regex to evaluate on method to decide if input applies. */
		methodMatch: FormControl<string | null | undefined>,

		/** A jsonPath expression to select an element. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateInputMappingFormGroup() {
		return new FormGroup<InputMappingFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<InputMappingLocation | null | undefined>(undefined),
			methodMatch: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InputMappingLocation { UNKNOWN = 'UNKNOWN', PATH = 'PATH', QUERY = 'QUERY', BODY = 'BODY', HEADER = 'HEADER' }


	/** Options for how to validate and process properties on a resource. */
	export interface ValidationOptions {

		/** Customize how deployment manager will validate the resource against schema errors. */
		schemaValidation?: ValidationOptionsSchemaValidation | null;

		/** Specify what to do with extra properties when executing a request. */
		undeclaredProperties?: ValidationOptionsUndeclaredProperties | null;
	}

	/** Options for how to validate and process properties on a resource. */
	export interface ValidationOptionsFormProperties {

		/** Customize how deployment manager will validate the resource against schema errors. */
		schemaValidation: FormControl<ValidationOptionsSchemaValidation | null | undefined>,

		/** Specify what to do with extra properties when executing a request. */
		undeclaredProperties: FormControl<ValidationOptionsUndeclaredProperties | null | undefined>,
	}
	export function CreateValidationOptionsFormGroup() {
		return new FormGroup<ValidationOptionsFormProperties>({
			schemaValidation: new FormControl<ValidationOptionsSchemaValidation | null | undefined>(undefined),
			undeclaredProperties: new FormControl<ValidationOptionsUndeclaredProperties | null | undefined>(undefined),
		});

	}

	export enum ValidationOptionsSchemaValidation { UNKNOWN = 'UNKNOWN', IGNORE = 'IGNORE', IGNORE_WITH_WARNINGS = 'IGNORE_WITH_WARNINGS', FAIL = 'FAIL' }

	export enum ValidationOptionsUndeclaredProperties { UNKNOWN = 'UNKNOWN', INCLUDE = 'INCLUDE', IGNORE = 'IGNORE', INCLUDE_WITH_WARNINGS = 'INCLUDE_WITH_WARNINGS', IGNORE_WITH_WARNINGS = 'IGNORE_WITH_WARNINGS', FAIL = 'FAIL' }


	/** The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted. */
	export interface Credential {

		/** Basic Auth used as a credential. */
		basicAuth?: BasicAuth;

		/** Service Account used as a credential. */
		serviceAccount?: ServiceAccount;

		/** Specify to use the project default credential, only supported by Deployment. */
		useProjectDefault?: boolean | null;
	}

	/** The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted. */
	export interface CredentialFormProperties {

		/** Specify to use the project default credential, only supported by Deployment. */
		useProjectDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateCredentialFormGroup() {
		return new FormGroup<CredentialFormProperties>({
			useProjectDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Basic Auth used as a credential. */
	export interface BasicAuth {
		password?: string | null;
		user?: string | null;
	}

	/** Basic Auth used as a credential. */
	export interface BasicAuthFormProperties {
		password: FormControl<string | null | undefined>,
		user: FormControl<string | null | undefined>,
	}
	export function CreateBasicAuthFormGroup() {
		return new FormGroup<BasicAuthFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service Account used as a credential. */
	export interface ServiceAccount {

		/** The IAM service account email address like test@myproject.iam.gserviceaccount.com */
		email?: string | null;
	}

	/** Service Account used as a credential. */
	export interface ServiceAccountFormProperties {

		/** The IAM service account email address like test@myproject.iam.gserviceaccount.com */
		email: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountFormGroup() {
		return new FormGroup<ServiceAccountFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
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

	export interface BulkInsertOperationStatus {

		/**
		 * [Output Only] Count of VMs successfully created so far.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		createdVmCount?: number | null;

		/**
		 * [Output Only] Count of VMs that got deleted during rollback.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		deletedVmCount?: number | null;

		/**
		 * [Output Only] Count of VMs that started creating but encountered an error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failedToCreateVmCount?: number | null;

		/** [Output Only] Creation status of BulkInsert operation - information if the flow is rolling forward or rolling back. */
		status?: BulkInsertOperationStatusStatus | null;

		/**
		 * [Output Only] Count of VMs originally planned to be created.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetVmCount?: number | null;
	}
	export interface BulkInsertOperationStatusFormProperties {

		/**
		 * [Output Only] Count of VMs successfully created so far.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		createdVmCount: FormControl<number | null | undefined>,

		/**
		 * [Output Only] Count of VMs that got deleted during rollback.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		deletedVmCount: FormControl<number | null | undefined>,

		/**
		 * [Output Only] Count of VMs that started creating but encountered an error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failedToCreateVmCount: FormControl<number | null | undefined>,

		/** [Output Only] Creation status of BulkInsert operation - information if the flow is rolling forward or rolling back. */
		status: FormControl<BulkInsertOperationStatusStatus | null | undefined>,

		/**
		 * [Output Only] Count of VMs originally planned to be created.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetVmCount: FormControl<number | null | undefined>,
	}
	export function CreateBulkInsertOperationStatusFormGroup() {
		return new FormGroup<BulkInsertOperationStatusFormProperties>({
			createdVmCount: new FormControl<number | null | undefined>(undefined),
			deletedVmCount: new FormControl<number | null | undefined>(undefined),
			failedToCreateVmCount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<BulkInsertOperationStatusStatus | null | undefined>(undefined),
			targetVmCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BulkInsertOperationStatusStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', CREATING = 'CREATING', ROLLING_BACK = 'ROLLING_BACK', DONE = 'DONE' }


	/** Holds the composite type. */
	export interface CompositeType {

		/** An optional textual description of the resource; provided by the client when the resource is created. */
		description?: string | null;
		id?: string | null;

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime?: string | null;

		/** Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. */
		labels?: Array<CompositeTypeLabelEntry>;

		/** Name of the composite type, must follow the expression: `[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?`. */
		name?: string | null;

		/** Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zoneOperations` resource. For more information, read Global, Regional, and Zonal Resources. Note that completed Operation resources have a limited retention period. */
		operation?: Operation;

		/** Output only. Server defined URL for the resource. */
		selfLink?: string | null;
		status?: CompositeTypeStatus | null;

		/** Files that make up the template contents of a template type. */
		templateContents?: TemplateContents;
	}

	/** Holds the composite type. */
	export interface CompositeTypeFormProperties {

		/** An optional textual description of the resource; provided by the client when the resource is created. */
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime: FormControl<string | null | undefined>,

		/** Name of the composite type, must follow the expression: `[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Server defined URL for the resource. */
		selfLink: FormControl<string | null | undefined>,
		status: FormControl<CompositeTypeStatus | null | undefined>,
	}
	export function CreateCompositeTypeFormGroup() {
		return new FormGroup<CompositeTypeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CompositeTypeStatus | null | undefined>(undefined),
		});

	}


	/** Label object for CompositeTypes */
	export interface CompositeTypeLabelEntry {

		/** Key of the label */
		key?: string | null;

		/** Value of the label */
		value?: string | null;
	}

	/** Label object for CompositeTypes */
	export interface CompositeTypeLabelEntryFormProperties {

		/** Key of the label */
		key: FormControl<string | null | undefined>,

		/** Value of the label */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCompositeTypeLabelEntryFormGroup() {
		return new FormGroup<CompositeTypeLabelEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zoneOperations` resource. For more information, read Global, Regional, and Zonal Resources. Note that completed Operation resources have a limited retention period. */
	export interface Operation {

		/** [Output Only] The value of `requestId` if you provided it in the request. Not present otherwise. */
		clientOperationId?: string | null;

		/** [Deprecated] This field is deprecated. */
		creationTimestamp?: string | null;

		/** [Output Only] A textual description of the operation, which is set when the operation is created. */
		description?: string | null;

		/** [Output Only] The time that this operation was completed. This value is in RFC3339 text format. */
		endTime?: string | null;

		/** [Output Only] If errors are generated during processing of the operation, this field will be populated. */
		error?: OperationError;

		/** [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`. */
		httpErrorMessage?: string | null;

		/**
		 * [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpErrorStatusCode?: number | null;

		/** [Output Only] The unique identifier for the operation. This identifier is defined by the server. */
		id?: string | null;

		/** [Output Only] The time that this operation was requested. This value is in RFC3339 text format. */
		insertTime?: string | null;
		instancesBulkInsertOperationMetadata?: InstancesBulkInsertOperationMetadata;

		/** [Output Only] Type of the resource. Always `compute#operation` for Operation resources. */
		kind?: string | null;

		/** [Output Only] Name of the operation. */
		name?: string | null;

		/** [Output Only] An ID that represents a group of operations, such as when a group of operations results from a `bulkInsert` API request. */
		operationGroupId?: string | null;

		/** [Output Only] The type of operation, such as `insert`, `update`, or `delete`, and so on. */
		operationType?: string | null;

		/**
		 * [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progress?: number | null;

		/** [Output Only] The URL of the region where the operation resides. Only applicable when performing regional operations. */
		region?: string | null;

		/** [Output Only] Server-defined URL for the resource. */
		selfLink?: string | null;
		setCommonInstanceMetadataOperationMetadata?: SetCommonInstanceMetadataOperationMetadata;

		/** [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format. */
		startTime?: string | null;

		/** [Output Only] The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`. */
		status?: OperationStatus | null;

		/** [Output Only] An optional textual description of the current status of the operation. */
		statusMessage?: string | null;

		/** [Output Only] The unique target ID, which identifies a specific incarnation of the target resource. */
		targetId?: string | null;

		/** [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from. */
		targetLink?: string | null;

		/** [Output Only] User who requested the operation, for example: `user@example.com` or `alice_smith_identifier (global/workforcePools/example-com-us-employees)`. */
		user?: string | null;

		/** [Output Only] If warning messages are generated during processing of the operation, this field will be populated. */
		OperationWarnings?: Array<OperationWarnings>;

		/** [Output Only] The URL of the zone where the operation resides. Only applicable when performing per-zone operations. */
		zone?: string | null;
	}

	/** Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zoneOperations` resource. For more information, read Global, Regional, and Zonal Resources. Note that completed Operation resources have a limited retention period. */
	export interface OperationFormProperties {

		/** [Output Only] The value of `requestId` if you provided it in the request. Not present otherwise. */
		clientOperationId: FormControl<string | null | undefined>,

		/** [Deprecated] This field is deprecated. */
		creationTimestamp: FormControl<string | null | undefined>,

		/** [Output Only] A textual description of the operation, which is set when the operation is created. */
		description: FormControl<string | null | undefined>,

		/** [Output Only] The time that this operation was completed. This value is in RFC3339 text format. */
		endTime: FormControl<string | null | undefined>,

		/** [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`. */
		httpErrorMessage: FormControl<string | null | undefined>,

		/**
		 * [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpErrorStatusCode: FormControl<number | null | undefined>,

		/** [Output Only] The unique identifier for the operation. This identifier is defined by the server. */
		id: FormControl<string | null | undefined>,

		/** [Output Only] The time that this operation was requested. This value is in RFC3339 text format. */
		insertTime: FormControl<string | null | undefined>,

		/** [Output Only] Type of the resource. Always `compute#operation` for Operation resources. */
		kind: FormControl<string | null | undefined>,

		/** [Output Only] Name of the operation. */
		name: FormControl<string | null | undefined>,

		/** [Output Only] An ID that represents a group of operations, such as when a group of operations results from a `bulkInsert` API request. */
		operationGroupId: FormControl<string | null | undefined>,

		/** [Output Only] The type of operation, such as `insert`, `update`, or `delete`, and so on. */
		operationType: FormControl<string | null | undefined>,

		/**
		 * [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progress: FormControl<number | null | undefined>,

		/** [Output Only] The URL of the region where the operation resides. Only applicable when performing regional operations. */
		region: FormControl<string | null | undefined>,

		/** [Output Only] Server-defined URL for the resource. */
		selfLink: FormControl<string | null | undefined>,

		/** [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format. */
		startTime: FormControl<string | null | undefined>,

		/** [Output Only] The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`. */
		status: FormControl<OperationStatus | null | undefined>,

		/** [Output Only] An optional textual description of the current status of the operation. */
		statusMessage: FormControl<string | null | undefined>,

		/** [Output Only] The unique target ID, which identifies a specific incarnation of the target resource. */
		targetId: FormControl<string | null | undefined>,

		/** [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from. */
		targetLink: FormControl<string | null | undefined>,

		/** [Output Only] User who requested the operation, for example: `user@example.com` or `alice_smith_identifier (global/workforcePools/example-com-us-employees)`. */
		user: FormControl<string | null | undefined>,

		/** [Output Only] The URL of the zone where the operation resides. Only applicable when performing per-zone operations. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			clientOperationId: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			httpErrorMessage: new FormControl<string | null | undefined>(undefined),
			httpErrorStatusCode: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operationGroupId: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OperationStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			targetLink: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationError {

		/** [Output Only] The array of errors encountered while processing this operation. */
		OperationErrorErrors?: Array<OperationErrorErrors>;
	}
	export interface OperationErrorFormProperties {
	}
	export function CreateOperationErrorFormGroup() {
		return new FormGroup<OperationErrorFormProperties>({
		});

	}

	export interface OperationErrorErrors {

		/** [Output Only] The error type identifier for this error. */
		code?: string | null;

		/** [Output Only] Indicates the field in the request that caused the error. This property is optional. */
		location?: string | null;

		/** [Output Only] An optional, human-readable error message. */
		message?: string | null;
	}
	export interface OperationErrorErrorsFormProperties {

		/** [Output Only] The error type identifier for this error. */
		code: FormControl<string | null | undefined>,

		/** [Output Only] Indicates the field in the request that caused the error. This property is optional. */
		location: FormControl<string | null | undefined>,

		/** [Output Only] An optional, human-readable error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateOperationErrorErrorsFormGroup() {
		return new FormGroup<OperationErrorErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstancesBulkInsertOperationMetadata {

		/** Status information per location (location name is key). Example key: zones/us-central1-a */
		perLocationStatus?: {[id: string]: BulkInsertOperationStatus };
	}
	export interface InstancesBulkInsertOperationMetadataFormProperties {

		/** Status information per location (location name is key). Example key: zones/us-central1-a */
		perLocationStatus: FormControl<{[id: string]: BulkInsertOperationStatus } | null | undefined>,
	}
	export function CreateInstancesBulkInsertOperationMetadataFormGroup() {
		return new FormGroup<InstancesBulkInsertOperationMetadataFormProperties>({
			perLocationStatus: new FormControl<{[id: string]: BulkInsertOperationStatus } | null | undefined>(undefined),
		});

	}

	export interface SetCommonInstanceMetadataOperationMetadata {

		/** [Output Only] The client operation id. */
		clientOperationId?: string | null;

		/** [Output Only] Status information per location (location name is key). Example key: zones/us-central1-a */
		perLocationOperations?: {[id: string]: SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo };
	}
	export interface SetCommonInstanceMetadataOperationMetadataFormProperties {

		/** [Output Only] The client operation id. */
		clientOperationId: FormControl<string | null | undefined>,

		/** [Output Only] Status information per location (location name is key). Example key: zones/us-central1-a */
		perLocationOperations: FormControl<{[id: string]: SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo } | null | undefined>,
	}
	export function CreateSetCommonInstanceMetadataOperationMetadataFormGroup() {
		return new FormGroup<SetCommonInstanceMetadataOperationMetadataFormProperties>({
			clientOperationId: new FormControl<string | null | undefined>(undefined),
			perLocationOperations: new FormControl<{[id: string]: SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo } | null | undefined>(undefined),
		});

	}

	export interface SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** [Output Only] Status of the action, which can be one of the following: `PROPAGATING`, `PROPAGATED`, `ABANDONED`, `FAILED`, or `DONE`. */
		state?: SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfoState | null;
	}
	export interface SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfoFormProperties {

		/** [Output Only] Status of the action, which can be one of the following: `PROPAGATING`, `PROPAGATED`, `ABANDONED`, `FAILED`, or `DONE`. */
		state: FormControl<SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfoState | null | undefined>,
	}
	export function CreateSetCommonInstanceMetadataOperationMetadataPerLocationOperationInfoFormGroup() {
		return new FormGroup<SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfoFormProperties>({
			state: new FormControl<SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfoState | null | undefined>(undefined),
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

	export enum SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfoState { UNSPECIFIED = 'UNSPECIFIED', PROPAGATING = 'PROPAGATING', PROPAGATED = 'PROPAGATED', ABANDONED = 'ABANDONED', FAILED = 'FAILED', DONE = 'DONE' }

	export enum OperationStatus { PENDING = 'PENDING', RUNNING = 'RUNNING', DONE = 'DONE' }

	export interface OperationWarnings {

		/** [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. */
		code?: OperationWarningsCode | null;

		/** [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" } */
		OperationWarningsData?: Array<OperationWarningsData>;

		/** [Output Only] A human-readable description of the warning code. */
		message?: string | null;
	}
	export interface OperationWarningsFormProperties {

		/** [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. */
		code: FormControl<OperationWarningsCode | null | undefined>,

		/** [Output Only] A human-readable description of the warning code. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateOperationWarningsFormGroup() {
		return new FormGroup<OperationWarningsFormProperties>({
			code: new FormControl<OperationWarningsCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationWarningsCode { DEPRECATED_RESOURCE_USED = 'DEPRECATED_RESOURCE_USED', NO_RESULTS_ON_PAGE = 'NO_RESULTS_ON_PAGE', UNREACHABLE = 'UNREACHABLE', NEXT_HOP_ADDRESS_NOT_ASSIGNED = 'NEXT_HOP_ADDRESS_NOT_ASSIGNED', NEXT_HOP_INSTANCE_NOT_FOUND = 'NEXT_HOP_INSTANCE_NOT_FOUND', NEXT_HOP_INSTANCE_NOT_ON_NETWORK = 'NEXT_HOP_INSTANCE_NOT_ON_NETWORK', NEXT_HOP_CANNOT_IP_FORWARD = 'NEXT_HOP_CANNOT_IP_FORWARD', NEXT_HOP_NOT_RUNNING = 'NEXT_HOP_NOT_RUNNING', INJECTED_KERNELS_DEPRECATED = 'INJECTED_KERNELS_DEPRECATED', REQUIRED_TOS_AGREEMENT = 'REQUIRED_TOS_AGREEMENT', DISK_SIZE_LARGER_THAN_IMAGE_SIZE = 'DISK_SIZE_LARGER_THAN_IMAGE_SIZE', RESOURCE_NOT_DELETED = 'RESOURCE_NOT_DELETED', SINGLE_INSTANCE_PROPERTY_TEMPLATE = 'SINGLE_INSTANCE_PROPERTY_TEMPLATE', NOT_CRITICAL_ERROR = 'NOT_CRITICAL_ERROR', CLEANUP_FAILED = 'CLEANUP_FAILED', FIELD_VALUE_OVERRIDEN = 'FIELD_VALUE_OVERRIDEN', RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING = 'RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING', MISSING_TYPE_DEPENDENCY = 'MISSING_TYPE_DEPENDENCY', EXTERNAL_API_WARNING = 'EXTERNAL_API_WARNING', SCHEMA_VALIDATION_IGNORED = 'SCHEMA_VALIDATION_IGNORED', UNDECLARED_PROPERTIES = 'UNDECLARED_PROPERTIES', EXPERIMENTAL_TYPE_USED = 'EXPERIMENTAL_TYPE_USED', DEPRECATED_TYPE_USED = 'DEPRECATED_TYPE_USED', PARTIAL_SUCCESS = 'PARTIAL_SUCCESS', LARGE_DEPLOYMENT_WARNING = 'LARGE_DEPLOYMENT_WARNING', NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE = 'NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE', INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB = 'INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB', LIST_OVERHEAD_QUOTA_EXCEED = 'LIST_OVERHEAD_QUOTA_EXCEED' }

	export interface OperationWarningsData {

		/** [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding). */
		key?: string | null;

		/** [Output Only] A warning data value corresponding to the key. */
		value?: string | null;
	}
	export interface OperationWarningsDataFormProperties {

		/** [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding). */
		key: FormControl<string | null | undefined>,

		/** [Output Only] A warning data value corresponding to the key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateOperationWarningsDataFormGroup() {
		return new FormGroup<OperationWarningsDataFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CompositeTypeStatus { UNKNOWN_STATUS = 'UNKNOWN_STATUS', DEPRECATED = 'DEPRECATED', EXPERIMENTAL = 'EXPERIMENTAL', SUPPORTED = 'SUPPORTED' }


	/** Files that make up the template contents of a template type. */
	export interface TemplateContents {

		/** Import files referenced by the main template. */
		imports?: Array<ImportFile>;

		/** Which interpreter (python or jinja) should be used during expansion. */
		interpreter?: TemplateContentsInterpreter | null;

		/** The filename of the mainTemplate */
		mainTemplate?: string | null;

		/** The contents of the template schema. */
		schema?: string | null;

		/** The contents of the main template file. */
		template?: string | null;
	}

	/** Files that make up the template contents of a template type. */
	export interface TemplateContentsFormProperties {

		/** Which interpreter (python or jinja) should be used during expansion. */
		interpreter: FormControl<TemplateContentsInterpreter | null | undefined>,

		/** The filename of the mainTemplate */
		mainTemplate: FormControl<string | null | undefined>,

		/** The contents of the template schema. */
		schema: FormControl<string | null | undefined>,

		/** The contents of the main template file. */
		template: FormControl<string | null | undefined>,
	}
	export function CreateTemplateContentsFormGroup() {
		return new FormGroup<TemplateContentsFormProperties>({
			interpreter: new FormControl<TemplateContentsInterpreter | null | undefined>(undefined),
			mainTemplate: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportFile {

		/** The contents of the file. */
		content?: string | null;

		/** The name of the file. */
		name?: string | null;
	}
	export interface ImportFileFormProperties {

		/** The contents of the file. */
		content: FormControl<string | null | undefined>,

		/** The name of the file. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateImportFileFormGroup() {
		return new FormGroup<ImportFileFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TemplateContentsInterpreter { UNKNOWN_INTERPRETER = 'UNKNOWN_INTERPRETER', PYTHON = 'PYTHON', JINJA = 'JINJA' }


	/** A response that returns all Composite Types supported by Deployment Manager */
	export interface CompositeTypesListResponse {

		/** Output only. A list of resource composite types supported by Deployment Manager. */
		compositeTypes?: Array<CompositeType>;

		/** A token used to continue a truncated list request. */
		nextPageToken?: string | null;
	}

	/** A response that returns all Composite Types supported by Deployment Manager */
	export interface CompositeTypesListResponseFormProperties {

		/** A token used to continue a truncated list request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCompositeTypesListResponseFormGroup() {
		return new FormGroup<CompositeTypesListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigFile {

		/** The contents of the file. */
		content?: string | null;
	}
	export interface ConfigFileFormProperties {

		/** The contents of the file. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateConfigFileFormGroup() {
		return new FormGroup<ConfigFileFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Deployment {

		/** An optional user-provided description of the deployment. */
		description?: string | null;

		/** Provides a fingerprint to use in requests to modify a deployment, such as `update()`, `stop()`, and `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided with `update()`, `stop()`, and `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time. The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a `get()` request to a deployment. */
		fingerprint?: string | null;
		id?: string | null;

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime?: string | null;

		/** Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. */
		labels?: Array<DeploymentLabelEntry>;

		/** Output only. URL of the manifest representing the last manifest that was successfully deployed. If no manifest has been successfully deployed, this field will be absent. */
		manifest?: string | null;

		/** Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. */
		name?: string | null;

		/** Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zoneOperations` resource. For more information, read Global, Regional, and Zonal Resources. Note that completed Operation resources have a limited retention period. */
		operation?: Operation;

		/** Output only. Server defined URL for the resource. */
		selfLink?: string | null;
		target?: TargetConfiguration;
		update?: DeploymentUpdate;

		/** Output only. Update timestamp in RFC3339 text format. */
		updateTime?: string | null;
	}
	export interface DeploymentFormProperties {

		/** An optional user-provided description of the deployment. */
		description: FormControl<string | null | undefined>,

		/** Provides a fingerprint to use in requests to modify a deployment, such as `update()`, `stop()`, and `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided with `update()`, `stop()`, and `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time. The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a `get()` request to a deployment. */
		fingerprint: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime: FormControl<string | null | undefined>,

		/** Output only. URL of the manifest representing the last manifest that was successfully deployed. If no manifest has been successfully deployed, this field will be absent. */
		manifest: FormControl<string | null | undefined>,

		/** Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. */
		name: FormControl<string | null | undefined>,

		/** Output only. Server defined URL for the resource. */
		selfLink: FormControl<string | null | undefined>,

		/** Output only. Update timestamp in RFC3339 text format. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertTime: new FormControl<string | null | undefined>(undefined),
			manifest: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Label object for Deployments */
	export interface DeploymentLabelEntry {

		/** Key of the label */
		key?: string | null;

		/** Value of the label */
		value?: string | null;
	}

	/** Label object for Deployments */
	export interface DeploymentLabelEntryFormProperties {

		/** Key of the label */
		key: FormControl<string | null | undefined>,

		/** Value of the label */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentLabelEntryFormGroup() {
		return new FormGroup<DeploymentLabelEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetConfiguration {
		config?: ConfigFile;

		/** Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template. */
		imports?: Array<ImportFile>;
	}
	export interface TargetConfigurationFormProperties {
	}
	export function CreateTargetConfigurationFormGroup() {
		return new FormGroup<TargetConfigurationFormProperties>({
		});

	}

	export interface DeploymentUpdate {

		/** Output only. An optional user-provided description of the deployment after the current update has been applied. */
		description?: string | null;

		/** Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. */
		labels?: Array<DeploymentUpdateLabelEntry>;

		/** Output only. URL of the manifest representing the update configuration of this deployment. */
		manifest?: string | null;
	}
	export interface DeploymentUpdateFormProperties {

		/** Output only. An optional user-provided description of the deployment after the current update has been applied. */
		description: FormControl<string | null | undefined>,

		/** Output only. URL of the manifest representing the update configuration of this deployment. */
		manifest: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentUpdateFormGroup() {
		return new FormGroup<DeploymentUpdateFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			manifest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Label object for DeploymentUpdate */
	export interface DeploymentUpdateLabelEntry {

		/** Key of the label */
		key?: string | null;

		/** Value of the label */
		value?: string | null;
	}

	/** Label object for DeploymentUpdate */
	export interface DeploymentUpdateLabelEntryFormProperties {

		/** Key of the label */
		key: FormControl<string | null | undefined>,

		/** Value of the label */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentUpdateLabelEntryFormGroup() {
		return new FormGroup<DeploymentUpdateLabelEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentsCancelPreviewRequest {

		/** Specifies a fingerprint for `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided in `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment. */
		fingerprint?: string | null;
	}
	export interface DeploymentsCancelPreviewRequestFormProperties {

		/** Specifies a fingerprint for `cancelPreview()` requests. A fingerprint is a randomly generated value that must be provided in `cancelPreview()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment. */
		fingerprint: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentsCancelPreviewRequestFormGroup() {
		return new FormGroup<DeploymentsCancelPreviewRequestFormProperties>({
			fingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated. */
	export interface DeploymentsListResponse {

		/** Output only. The deployments contained in this response. */
		deployments?: Array<Deployment>;

		/** Output only. A token used to continue a truncated list request. */
		nextPageToken?: string | null;
	}

	/** A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated. */
	export interface DeploymentsListResponseFormProperties {

		/** Output only. A token used to continue a truncated list request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentsListResponseFormGroup() {
		return new FormGroup<DeploymentsListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentsStopRequest {

		/** Specifies a fingerprint for `stop()` requests. A fingerprint is a randomly generated value that must be provided in `stop()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment. */
		fingerprint?: string | null;
	}
	export interface DeploymentsStopRequestFormProperties {

		/** Specifies a fingerprint for `stop()` requests. A fingerprint is a randomly generated value that must be provided in `stop()` requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision). The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a `get()` request on the deployment. */
		fingerprint: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentsStopRequestFormGroup() {
		return new FormGroup<DeploymentsStopRequestFormProperties>({
			fingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlobalSetPolicyRequest {

		/** Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify bindings. */
		bindings?: Array<Binding>;

		/** Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify the etag. */
		etag?: string | null;

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}
	export interface GlobalSetPolicyRequestFormProperties {

		/** Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify the etag. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSetPolicyRequestFormGroup() {
		return new FormGroup<GlobalSetPolicyRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Manifest {
		config?: ConfigFile;

		/** Output only. The fully-expanded configuration file, including any templates and references. */
		expandedConfig?: string | null;
		id?: string | null;

		/** Output only. The imported files for this manifest. */
		imports?: Array<ImportFile>;

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime?: string | null;

		/** Output only. The YAML layout for this manifest. */
		layout?: string | null;

		/** Output only. The computed size of the fully expanded manifest. */
		manifestSizeBytes?: string | null;

		/** Output only. The size limit for expanded manifests in the project. */
		manifestSizeLimitBytes?: string | null;

		/** Output only. The name of the manifest. */
		name?: string | null;

		/** Output only. Self link for the manifest. */
		selfLink?: string | null;
	}
	export interface ManifestFormProperties {

		/** Output only. The fully-expanded configuration file, including any templates and references. */
		expandedConfig: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime: FormControl<string | null | undefined>,

		/** Output only. The YAML layout for this manifest. */
		layout: FormControl<string | null | undefined>,

		/** Output only. The computed size of the fully expanded manifest. */
		manifestSizeBytes: FormControl<string | null | undefined>,

		/** Output only. The size limit for expanded manifests in the project. */
		manifestSizeLimitBytes: FormControl<string | null | undefined>,

		/** Output only. The name of the manifest. */
		name: FormControl<string | null | undefined>,

		/** Output only. Self link for the manifest. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateManifestFormGroup() {
		return new FormGroup<ManifestFormProperties>({
			expandedConfig: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertTime: new FormControl<string | null | undefined>(undefined),
			layout: new FormControl<string | null | undefined>(undefined),
			manifestSizeBytes: new FormControl<string | null | undefined>(undefined),
			manifestSizeLimitBytes: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated. */
	export interface ManifestsListResponse {

		/** Output only. Manifests contained in this list response. */
		manifests?: Array<Manifest>;

		/** Output only. A token used to continue a truncated list request. */
		nextPageToken?: string | null;
	}

	/** A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated. */
	export interface ManifestsListResponseFormProperties {

		/** Output only. A token used to continue a truncated list request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateManifestsListResponseFormGroup() {
		return new FormGroup<ManifestsListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a partial list of operations and a page token used to build the next request if the request has been truncated. */
	export interface OperationsListResponse {

		/** Output only. A token used to continue a truncated list request. */
		nextPageToken?: string | null;

		/** Output only. Operations contained in this list response. */
		operations?: Array<Operation>;
	}

	/** A response containing a partial list of operations and a page token used to build the next request if the request has been truncated. */
	export interface OperationsListResponseFormProperties {

		/** Output only. A token used to continue a truncated list request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateOperationsListResponseFormGroup() {
		return new FormGroup<OperationsListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Resource {

		/** The access controls set on the resource. */
		accessControl?: ResourceAccessControl;

		/** Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML. */
		finalProperties?: string | null;
		id?: string | null;

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime?: string | null;

		/** Output only. URL of the manifest representing the current configuration of this resource. */
		manifest?: string | null;

		/** Output only. The name of the resource as it appears in the YAML config. */
		name?: string | null;

		/** Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML. */
		properties?: string | null;

		/** Output only. The type of the resource, for example `compute.v1.instance`, or `cloudfunctions.v1beta1.function`. */
		type?: string | null;
		update?: ResourceUpdate;

		/** Output only. Update timestamp in RFC3339 text format. */
		updateTime?: string | null;

		/** Output only. The URL of the actual resource. */
		url?: string | null;

		/** Output only. If warning messages are generated during processing of this resource, this field will be populated. */
		ResourceWarnings?: Array<ResourceWarnings>;
	}
	export interface ResourceFormProperties {

		/** Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML. */
		finalProperties: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime: FormControl<string | null | undefined>,

		/** Output only. URL of the manifest representing the current configuration of this resource. */
		manifest: FormControl<string | null | undefined>,

		/** Output only. The name of the resource as it appears in the YAML config. */
		name: FormControl<string | null | undefined>,

		/** Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML. */
		properties: FormControl<string | null | undefined>,

		/** Output only. The type of the resource, for example `compute.v1.instance`, or `cloudfunctions.v1beta1.function`. */
		type: FormControl<string | null | undefined>,

		/** Output only. Update timestamp in RFC3339 text format. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The URL of the actual resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			finalProperties: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertTime: new FormControl<string | null | undefined>(undefined),
			manifest: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The access controls set on the resource. */
	export interface ResourceAccessControl {

		/** The GCP IAM Policy to set on the resource. */
		gcpIamPolicy?: string | null;
	}

	/** The access controls set on the resource. */
	export interface ResourceAccessControlFormProperties {

		/** The GCP IAM Policy to set on the resource. */
		gcpIamPolicy: FormControl<string | null | undefined>,
	}
	export function CreateResourceAccessControlFormGroup() {
		return new FormGroup<ResourceAccessControlFormProperties>({
			gcpIamPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceUpdate {

		/** The access controls set on the resource. */
		accessControl?: ResourceAccessControl;

		/** Output only. If errors are generated during update of the resource, this field will be populated. */
		error?: ResourceUpdateError;

		/** Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML. */
		finalProperties?: string | null;

		/** Output only. The intent of the resource: `PREVIEW`, `UPDATE`, or `CANCEL`. */
		intent?: ResourceUpdateIntent | null;

		/** Output only. URL of the manifest representing the update configuration of this resource. */
		manifest?: string | null;

		/** Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML. */
		properties?: string | null;

		/** Output only. The state of the resource. */
		state?: ResourceUpdateState | null;

		/** Output only. If warning messages are generated during processing of this resource, this field will be populated. */
		ResourceUpdateWarnings?: Array<ResourceUpdateWarnings>;
	}
	export interface ResourceUpdateFormProperties {

		/** Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML. */
		finalProperties: FormControl<string | null | undefined>,

		/** Output only. The intent of the resource: `PREVIEW`, `UPDATE`, or `CANCEL`. */
		intent: FormControl<ResourceUpdateIntent | null | undefined>,

		/** Output only. URL of the manifest representing the update configuration of this resource. */
		manifest: FormControl<string | null | undefined>,

		/** Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML. */
		properties: FormControl<string | null | undefined>,

		/** Output only. The state of the resource. */
		state: FormControl<ResourceUpdateState | null | undefined>,
	}
	export function CreateResourceUpdateFormGroup() {
		return new FormGroup<ResourceUpdateFormProperties>({
			finalProperties: new FormControl<string | null | undefined>(undefined),
			intent: new FormControl<ResourceUpdateIntent | null | undefined>(undefined),
			manifest: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ResourceUpdateState | null | undefined>(undefined),
		});

	}

	export interface ResourceUpdateError {

		/** [Output Only] The array of errors encountered while processing this operation. */
		ResourceUpdateErrorErrors?: Array<ResourceUpdateErrorErrors>;
	}
	export interface ResourceUpdateErrorFormProperties {
	}
	export function CreateResourceUpdateErrorFormGroup() {
		return new FormGroup<ResourceUpdateErrorFormProperties>({
		});

	}

	export interface ResourceUpdateErrorErrors {

		/** [Output Only] The error type identifier for this error. */
		code?: string | null;

		/** [Output Only] Indicates the field in the request that caused the error. This property is optional. */
		location?: string | null;

		/** [Output Only] An optional, human-readable error message. */
		message?: string | null;
	}
	export interface ResourceUpdateErrorErrorsFormProperties {

		/** [Output Only] The error type identifier for this error. */
		code: FormControl<string | null | undefined>,

		/** [Output Only] Indicates the field in the request that caused the error. This property is optional. */
		location: FormControl<string | null | undefined>,

		/** [Output Only] An optional, human-readable error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateResourceUpdateErrorErrorsFormGroup() {
		return new FormGroup<ResourceUpdateErrorErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceUpdateIntent { CREATE_OR_ACQUIRE = 'CREATE_OR_ACQUIRE', DELETE = 'DELETE', ACQUIRE = 'ACQUIRE', UPDATE = 'UPDATE', ABANDON = 'ABANDON', CREATE = 'CREATE' }

	export enum ResourceUpdateState { PENDING = 'PENDING', IN_PROGRESS = 'IN_PROGRESS', IN_PREVIEW = 'IN_PREVIEW', FAILED = 'FAILED', ABORTED = 'ABORTED' }

	export interface ResourceUpdateWarnings {

		/** [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. */
		code?: OperationWarningsCode | null;

		/** [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" } */
		ResourceUpdateWarningsData?: Array<ResourceUpdateWarningsData>;

		/** [Output Only] A human-readable description of the warning code. */
		message?: string | null;
	}
	export interface ResourceUpdateWarningsFormProperties {

		/** [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. */
		code: FormControl<OperationWarningsCode | null | undefined>,

		/** [Output Only] A human-readable description of the warning code. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateResourceUpdateWarningsFormGroup() {
		return new FormGroup<ResourceUpdateWarningsFormProperties>({
			code: new FormControl<OperationWarningsCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceUpdateWarningsData {

		/** [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding). */
		key?: string | null;

		/** [Output Only] A warning data value corresponding to the key. */
		value?: string | null;
	}
	export interface ResourceUpdateWarningsDataFormProperties {

		/** [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding). */
		key: FormControl<string | null | undefined>,

		/** [Output Only] A warning data value corresponding to the key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceUpdateWarningsDataFormGroup() {
		return new FormGroup<ResourceUpdateWarningsDataFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceWarnings {

		/** [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. */
		code?: OperationWarningsCode | null;

		/** [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" } */
		ResourceWarningsData?: Array<ResourceWarningsData>;

		/** [Output Only] A human-readable description of the warning code. */
		message?: string | null;
	}
	export interface ResourceWarningsFormProperties {

		/** [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. */
		code: FormControl<OperationWarningsCode | null | undefined>,

		/** [Output Only] A human-readable description of the warning code. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateResourceWarningsFormGroup() {
		return new FormGroup<ResourceWarningsFormProperties>({
			code: new FormControl<OperationWarningsCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceWarningsData {

		/** [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding). */
		key?: string | null;

		/** [Output Only] A warning data value corresponding to the key. */
		value?: string | null;
	}
	export interface ResourceWarningsDataFormProperties {

		/** [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding). */
		key: FormControl<string | null | undefined>,

		/** [Output Only] A warning data value corresponding to the key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceWarningsDataFormGroup() {
		return new FormGroup<ResourceWarningsDataFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a partial list of resources and a page token used to build the next request if the request has been truncated. */
	export interface ResourcesListResponse {

		/** A token used to continue a truncated list request. */
		nextPageToken?: string | null;

		/** Resources contained in this list response. */
		resources?: Array<Resource>;
	}

	/** A response containing a partial list of resources and a page token used to build the next request if the request has been truncated. */
	export interface ResourcesListResponseFormProperties {

		/** A token used to continue a truncated list request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateResourcesListResponseFormGroup() {
		return new FormGroup<ResourcesListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestPermissionsRequest {

		/** The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. */
		permissions?: Array<string>;
	}
	export interface TestPermissionsRequestFormProperties {
	}
	export function CreateTestPermissionsRequestFormGroup() {
		return new FormGroup<TestPermissionsRequestFormProperties>({
		});

	}

	export interface TestPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}
	export interface TestPermissionsResponseFormProperties {
	}
	export function CreateTestPermissionsResponseFormGroup() {
		return new FormGroup<TestPermissionsResponseFormProperties>({
		});

	}


	/** A resource type supported by Deployment Manager. */
	export interface Type {

		/** BaseType that describes a service-backed Type. */
		base?: BaseType;

		/** An optional textual description of the resource; provided by the client when the resource is created. */
		description?: string | null;
		id?: string | null;

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime?: string | null;

		/** Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. */
		labels?: Array<TypeLabelEntry>;

		/** Name of the type. */
		name?: string | null;

		/** Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zoneOperations` resource. For more information, read Global, Regional, and Zonal Resources. Note that completed Operation resources have a limited retention period. */
		operation?: Operation;

		/** Output only. Server defined URL for the resource. */
		selfLink?: string | null;
	}

	/** A resource type supported by Deployment Manager. */
	export interface TypeFormProperties {

		/** An optional textual description of the resource; provided by the client when the resource is created. */
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime: FormControl<string | null | undefined>,

		/** Name of the type. */
		name: FormControl<string | null | undefined>,

		/** Output only. Server defined URL for the resource. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Label object for Types */
	export interface TypeLabelEntry {

		/** Key of the label */
		key?: string | null;

		/** Value of the label */
		value?: string | null;
	}

	/** Label object for Types */
	export interface TypeLabelEntryFormProperties {

		/** Key of the label */
		key: FormControl<string | null | undefined>,

		/** Value of the label */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTypeLabelEntryFormGroup() {
		return new FormGroup<TypeLabelEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type Information. Contains detailed information about a composite type, base type, or base type with specific collection. */
	export interface TypeInfo {

		/** The description of the type. */
		description?: string | null;

		/** For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field will be empty. */
		documentationLink?: string | null;

		/** Output only. Type of the output. Always `deploymentManager#TypeInfo` for TypeInfo. */
		kind?: string | null;

		/** The base type or composite type name. */
		name?: string | null;
		schema?: TypeInfoSchemaInfo;

		/** Output only. Self link for the type provider. */
		selfLink?: string | null;

		/** The title on the API descriptor URL provided. */
		title?: string | null;
	}

	/** Type Information. Contains detailed information about a composite type, base type, or base type with specific collection. */
	export interface TypeInfoFormProperties {

		/** The description of the type. */
		description: FormControl<string | null | undefined>,

		/** For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field will be empty. */
		documentationLink: FormControl<string | null | undefined>,

		/** Output only. Type of the output. Always `deploymentManager#TypeInfo` for TypeInfo. */
		kind: FormControl<string | null | undefined>,

		/** The base type or composite type name. */
		name: FormControl<string | null | undefined>,

		/** Output only. Self link for the type provider. */
		selfLink: FormControl<string | null | undefined>,

		/** The title on the API descriptor URL provided. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateTypeInfoFormGroup() {
		return new FormGroup<TypeInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			documentationLink: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TypeInfoSchemaInfo {

		/** The properties that this composite type or base type collection accept as input, represented as a json blob, format is: JSON Schema Draft V4 */
		input?: string | null;

		/** The properties that this composite type or base type collection exposes as output, these properties can be used for references, represented as json blob, format is: JSON Schema Draft V4 */
		output?: string | null;
	}
	export interface TypeInfoSchemaInfoFormProperties {

		/** The properties that this composite type or base type collection accept as input, represented as a json blob, format is: JSON Schema Draft V4 */
		input: FormControl<string | null | undefined>,

		/** The properties that this composite type or base type collection exposes as output, these properties can be used for references, represented as json blob, format is: JSON Schema Draft V4 */
		output: FormControl<string | null | undefined>,
	}
	export function CreateTypeInfoSchemaInfoFormGroup() {
		return new FormGroup<TypeInfoSchemaInfoFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type provider that describes a service-backed Type. */
	export interface TypeProvider {

		/** Allows resource handling overrides for specific collections */
		collectionOverrides?: Array<CollectionOverride>;

		/** The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted. */
		credential?: Credential;

		/** List of up to 2 custom certificate authority roots to use for TLS authentication when making calls on behalf of this type provider. If set, TLS authentication will exclusively use these roots instead of relying on publicly trusted certificate authorities when validating TLS certificate authenticity. The certificates must be in base64-encoded PEM format. The maximum size of each certificate must not exceed 10KB. */
		customCertificateAuthorityRoots?: Array<string>;

		/** An optional textual description of the resource; provided by the client when the resource is created. */
		description?: string | null;

		/** Descriptor Url for the this type provider. */
		descriptorUrl?: string | null;

		/** Output only. Unique identifier for the resource defined by the server. */
		id?: string | null;

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime?: string | null;

		/** Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?` */
		labels?: Array<TypeProviderLabelEntry>;

		/** Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. */
		name?: string | null;

		/** Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zoneOperations` resource. For more information, read Global, Regional, and Zonal Resources. Note that completed Operation resources have a limited retention period. */
		operation?: Operation;

		/** Options allows customized resource handling by Deployment Manager. */
		options?: Options;

		/** Output only. Self link for the type provider. */
		selfLink?: string | null;
	}

	/** A type provider that describes a service-backed Type. */
	export interface TypeProviderFormProperties {

		/** An optional textual description of the resource; provided by the client when the resource is created. */
		description: FormControl<string | null | undefined>,

		/** Descriptor Url for the this type provider. */
		descriptorUrl: FormControl<string | null | undefined>,

		/** Output only. Unique identifier for the resource defined by the server. */
		id: FormControl<string | null | undefined>,

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime: FormControl<string | null | undefined>,

		/** Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. */
		name: FormControl<string | null | undefined>,

		/** Output only. Self link for the type provider. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateTypeProviderFormGroup() {
		return new FormGroup<TypeProviderFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			descriptorUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Label object for TypeProviders */
	export interface TypeProviderLabelEntry {

		/** Key of the label */
		key?: string | null;

		/** Value of the label */
		value?: string | null;
	}

	/** Label object for TypeProviders */
	export interface TypeProviderLabelEntryFormProperties {

		/** Key of the label */
		key: FormControl<string | null | undefined>,

		/** Value of the label */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTypeProviderLabelEntryFormGroup() {
		return new FormGroup<TypeProviderLabelEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response that returns all Type Providers supported by Deployment Manager */
	export interface TypeProvidersListResponse {

		/** A token used to continue a truncated list request. */
		nextPageToken?: string | null;

		/** Output only. A list of resource type providers supported by Deployment Manager. */
		typeProviders?: Array<TypeProvider>;
	}

	/** A response that returns all Type Providers supported by Deployment Manager */
	export interface TypeProvidersListResponseFormProperties {

		/** A token used to continue a truncated list request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTypeProvidersListResponseFormGroup() {
		return new FormGroup<TypeProvidersListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TypeProvidersListTypesResponse {

		/** A token used to continue a truncated list request. */
		nextPageToken?: string | null;

		/** Output only. A list of resource type info. */
		types?: Array<TypeInfo>;
	}
	export interface TypeProvidersListTypesResponseFormProperties {

		/** A token used to continue a truncated list request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTypeProvidersListTypesResponseFormGroup() {
		return new FormGroup<TypeProvidersListTypesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response that returns all Types supported by Deployment Manager */
	export interface TypesListResponse {

		/** A token used to continue a truncated list request. */
		nextPageToken?: string | null;

		/** Output only. A list of resource types supported by Deployment Manager. */
		types?: Array<Type>;
	}

	/** A response that returns all Types supported by Deployment Manager */
	export interface TypesListResponseFormProperties {

		/** A token used to continue a truncated list request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTypesListResponseFormGroup() {
		return new FormGroup<TypesListResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all composite types for Deployment Manager.
		 * Get deploymentmanager/v2beta/projects/{project}/global/compositeTypes
		 * @param {string} project The project ID for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
		 *     Minimum: 0
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
		 * @return {CompositeTypesListResponse} Successful response
		 */
		Deploymentmanager_compositeTypes_list(project: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<CompositeTypesListResponse> {
			return this.http.get<CompositeTypesListResponse>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/compositeTypes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a composite type.
		 * Post deploymentmanager/v2beta/projects/{project}/global/compositeTypes
		 * @param {string} project The project ID for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_compositeTypes_insert(project: string, requestBody: CompositeType): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/compositeTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a composite type.
		 * Delete deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}
		 * @param {string} project The project ID for this request.
		 * @param {string} compositeType The name of the type for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_compositeTypes_delete(project: string, compositeType: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/compositeTypes/' + (compositeType == null ? '' : encodeURIComponent(compositeType)), {});
		}

		/**
		 * Gets information about a specific composite type.
		 * Get deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}
		 * @param {string} project The project ID for this request.
		 * @param {string} compositeType The name of the composite type for this request.
		 * @return {CompositeType} Successful response
		 */
		Deploymentmanager_compositeTypes_get(project: string, compositeType: string): Observable<CompositeType> {
			return this.http.get<CompositeType>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/compositeTypes/' + (compositeType == null ? '' : encodeURIComponent(compositeType)), {});
		}

		/**
		 * Patches a composite type.
		 * Patch deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}
		 * @param {string} project The project ID for this request.
		 * @param {string} compositeType The name of the composite type for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_compositeTypes_patch(project: string, compositeType: string, requestBody: CompositeType): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/compositeTypes/' + (compositeType == null ? '' : encodeURIComponent(compositeType)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a composite type.
		 * Put deploymentmanager/v2beta/projects/{project}/global/compositeTypes/{compositeType}
		 * @param {string} project The project ID for this request.
		 * @param {string} compositeType The name of the composite type for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_compositeTypes_update(project: string, compositeType: string, requestBody: CompositeType): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/compositeTypes/' + (compositeType == null ? '' : encodeURIComponent(compositeType)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all deployments for a given project.
		 * Get deploymentmanager/v2beta/projects/{project}/global/deployments
		 * @param {string} project The project ID for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
		 *     Minimum: 0
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
		 * @return {DeploymentsListResponse} Successful response
		 */
		Deploymentmanager_deployments_list(project: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<DeploymentsListResponse> {
			return this.http.get<DeploymentsListResponse>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a deployment and all of the resources described by the deployment manifest.
		 * Post deploymentmanager/v2beta/projects/{project}/global/deployments
		 * @param {string} project The project ID for this request.
		 * @param {Deploymentmanager_deployments_insertCreatePolicy} createPolicy Sets the policy to use for creating new resources.
		 * @param {boolean} preview If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the `update()` method or you can use the `cancelPreview()` method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_deployments_insert(project: string, createPolicy: Deploymentmanager_deployments_insertCreatePolicy | null | undefined, preview: boolean | null | undefined, requestBody: Deployment): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments&createPolicy=' + createPolicy + '&preview=' + preview, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a deployment and all of the resources in the deployment.
		 * Delete deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {Deploymentmanager_deployments_deleteDeletePolicy} deletePolicy Sets the policy to use for deleting resources.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_deployments_delete(project: string, deployment: string, deletePolicy: Deploymentmanager_deployments_deleteDeletePolicy | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '&deletePolicy=' + deletePolicy, {});
		}

		/**
		 * Gets information about a specific deployment.
		 * Get deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @return {Deployment} Successful response
		 */
		Deploymentmanager_deployments_get(project: string, deployment: string): Observable<Deployment> {
			return this.http.get<Deployment>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)), {});
		}

		/**
		 * Patches a deployment and all of the resources described by the deployment manifest.
		 * Patch deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {Deploymentmanager_deployments_insertCreatePolicy} createPolicy Sets the policy to use for creating new resources.
		 * @param {Deploymentmanager_deployments_deleteDeletePolicy} deletePolicy Sets the policy to use for deleting resources.
		 * @param {boolean} preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_deployments_patch(project: string, deployment: string, createPolicy: Deploymentmanager_deployments_insertCreatePolicy | null | undefined, deletePolicy: Deploymentmanager_deployments_deleteDeletePolicy | null | undefined, preview: boolean | null | undefined, requestBody: Deployment): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '&createPolicy=' + createPolicy + '&deletePolicy=' + deletePolicy + '&preview=' + preview, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a deployment and all of the resources described by the deployment manifest.
		 * Put deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {Deploymentmanager_deployments_insertCreatePolicy} createPolicy Sets the policy to use for creating new resources.
		 * @param {Deploymentmanager_deployments_deleteDeletePolicy} deletePolicy Sets the policy to use for deleting resources.
		 * @param {boolean} preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_deployments_update(project: string, deployment: string, createPolicy: Deploymentmanager_deployments_insertCreatePolicy | null | undefined, deletePolicy: Deploymentmanager_deployments_deleteDeletePolicy | null | undefined, preview: boolean | null | undefined, requestBody: Deployment): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '&createPolicy=' + createPolicy + '&deletePolicy=' + deletePolicy + '&preview=' + preview, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels and removes the preview currently associated with the deployment.
		 * Post deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/cancelPreview
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_deployments_cancelPreview(project: string, deployment: string, requestBody: DeploymentsCancelPreviewRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/cancelPreview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all manifests for a given deployment.
		 * Get deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/manifests
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
		 *     Minimum: 0
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
		 * @return {ManifestsListResponse} Successful response
		 */
		Deploymentmanager_manifests_list(project: string, deployment: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<ManifestsListResponse> {
			return this.http.get<ManifestsListResponse>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/manifests&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets information about a specific manifest.
		 * Get deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/manifests/{manifest}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {string} manifest The name of the manifest for this request.
		 * @return {Manifest} Successful response
		 */
		Deploymentmanager_manifests_get(project: string, deployment: string, manifest: string): Observable<Manifest> {
			return this.http.get<Manifest>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/manifests/' + (manifest == null ? '' : encodeURIComponent(manifest)), {});
		}

		/**
		 * Lists all resources in a given deployment.
		 * Get deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/resources
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
		 *     Minimum: 0
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
		 * @return {ResourcesListResponse} Successful response
		 */
		Deploymentmanager_resources_list(project: string, deployment: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<ResourcesListResponse> {
			return this.http.get<ResourcesListResponse>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/resources&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets information about a single resource.
		 * Get deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/resources/{resource}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {string} resource The name of the resource for this request.
		 * @return {Resource} Successful response
		 */
		Deploymentmanager_resources_get(project: string, deployment: string, resource: string): Observable<Resource> {
			return this.http.get<Resource>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/resources/' + (resource == null ? '' : encodeURIComponent(resource)), {});
		}

		/**
		 * Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
		 * Post deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/stop
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_deployments_stop(project: string, deployment: string, requestBody: DeploymentsStopRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
		 * Get deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/getIamPolicy
		 * @param {string} project Project ID for this request.
		 * @param {string} resource Name or id of the resource for this request.
		 * @param {number} optionsRequestedPolicyVersion Requested IAM Policy version.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Deploymentmanager_deployments_getIamPolicy(project: string, resource: string, optionsRequestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (resource == null ? '' : encodeURIComponent(resource)) + '/getIamPolicy&optionsRequestedPolicyVersion=' + optionsRequestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy.
		 * Post deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/setIamPolicy
		 * @param {string} project Project ID for this request.
		 * @param {string} resource Name or id of the resource for this request.
		 * @return {Policy} Successful response
		 */
		Deploymentmanager_deployments_setIamPolicy(project: string, resource: string, requestBody: GlobalSetPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (resource == null ? '' : encodeURIComponent(resource)) + '/setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource.
		 * Post deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/testIamPermissions
		 * @param {string} project Project ID for this request.
		 * @param {string} resource Name or id of the resource for this request.
		 * @return {TestPermissionsResponse} Successful response
		 */
		Deploymentmanager_deployments_testIamPermissions(project: string, resource: string, requestBody: TestPermissionsRequest): Observable<TestPermissionsResponse> {
			return this.http.post<TestPermissionsResponse>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (resource == null ? '' : encodeURIComponent(resource)) + '/testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all operations for a project.
		 * Get deploymentmanager/v2beta/projects/{project}/global/operations
		 * @param {string} project The project ID for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
		 *     Minimum: 0
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
		 * @return {OperationsListResponse} Successful response
		 */
		Deploymentmanager_operations_list(project: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<OperationsListResponse> {
			return this.http.get<OperationsListResponse>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets information about a specific operation.
		 * Get deploymentmanager/v2beta/projects/{project}/global/operations/{operation}
		 * @param {string} project The project ID for this request.
		 * @param {string} operation The name of the operation for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_operations_get(project: string, operation: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/operations/' + (operation == null ? '' : encodeURIComponent(operation)), {});
		}

		/**
		 * Lists all resource type providers for Deployment Manager.
		 * Get deploymentmanager/v2beta/projects/{project}/global/typeProviders
		 * @param {string} project The project ID for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
		 *     Minimum: 0
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
		 * @return {TypeProvidersListResponse} Successful response
		 */
		Deploymentmanager_typeProviders_list(project: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<TypeProvidersListResponse> {
			return this.http.get<TypeProvidersListResponse>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/typeProviders&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a type provider.
		 * Post deploymentmanager/v2beta/projects/{project}/global/typeProviders
		 * @param {string} project The project ID for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_typeProviders_insert(project: string, requestBody: TypeProvider): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/typeProviders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a type provider.
		 * Delete deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}
		 * @param {string} project The project ID for this request.
		 * @param {string} typeProvider The name of the type provider for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_typeProviders_delete(project: string, typeProvider: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/typeProviders/' + (typeProvider == null ? '' : encodeURIComponent(typeProvider)), {});
		}

		/**
		 * Gets information about a specific type provider.
		 * Get deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}
		 * @param {string} project The project ID for this request.
		 * @param {string} typeProvider The name of the type provider for this request.
		 * @return {TypeProvider} Successful response
		 */
		Deploymentmanager_typeProviders_get(project: string, typeProvider: string): Observable<TypeProvider> {
			return this.http.get<TypeProvider>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/typeProviders/' + (typeProvider == null ? '' : encodeURIComponent(typeProvider)), {});
		}

		/**
		 * Patches a type provider.
		 * Patch deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}
		 * @param {string} project The project ID for this request.
		 * @param {string} typeProvider The name of the type provider for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_typeProviders_patch(project: string, typeProvider: string, requestBody: TypeProvider): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/typeProviders/' + (typeProvider == null ? '' : encodeURIComponent(typeProvider)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a type provider.
		 * Put deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}
		 * @param {string} project The project ID for this request.
		 * @param {string} typeProvider The name of the type provider for this request.
		 * @return {Operation} Successful response
		 */
		Deploymentmanager_typeProviders_update(project: string, typeProvider: string, requestBody: TypeProvider): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/typeProviders/' + (typeProvider == null ? '' : encodeURIComponent(typeProvider)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the type info for a TypeProvider.
		 * Get deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}/types
		 * @param {string} project The project ID for this request.
		 * @param {string} typeProvider The name of the type provider for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
		 *     Minimum: 0
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
		 * @return {TypeProvidersListTypesResponse} Successful response
		 */
		Deploymentmanager_typeProviders_listTypes(project: string, typeProvider: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<TypeProvidersListTypesResponse> {
			return this.http.get<TypeProvidersListTypesResponse>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/typeProviders/' + (typeProvider == null ? '' : encodeURIComponent(typeProvider)) + '/types&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets a type info for a type provided by a TypeProvider.
		 * Get deploymentmanager/v2beta/projects/{project}/global/typeProviders/{typeProvider}/types/{type}
		 * @param {string} project The project ID for this request.
		 * @param {string} typeProvider The name of the type provider for this request.
		 * @param {string} type The name of the type provider type for this request.
		 * @return {TypeInfo} Successful response
		 */
		Deploymentmanager_typeProviders_getType(project: string, typeProvider: string, type: string): Observable<TypeInfo> {
			return this.http.get<TypeInfo>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/typeProviders/' + (typeProvider == null ? '' : encodeURIComponent(typeProvider)) + '/types/' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * Lists all resource types for Deployment Manager.
		 * Get deploymentmanager/v2beta/projects/{project}/global/types
		 * @param {string} project The project ID for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions.
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
		 *     Minimum: 0
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
		 * @param {string} pageToken Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
		 * @return {TypesListResponse} Successful response
		 */
		Deploymentmanager_types_list(project: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<TypesListResponse> {
			return this.http.get<TypesListResponse>(this.baseUri + 'deploymentmanager/v2beta/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/global/types&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

	export enum Deploymentmanager_deployments_insertCreatePolicy { CREATE_OR_ACQUIRE = 'CREATE_OR_ACQUIRE', ACQUIRE = 'ACQUIRE', CREATE = 'CREATE' }

	export enum Deploymentmanager_deployments_deleteDeletePolicy { DELETE = 'DELETE', ABANDON = 'ABANDON' }

}

