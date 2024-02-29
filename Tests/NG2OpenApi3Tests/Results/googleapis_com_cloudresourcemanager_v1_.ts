import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Identifying information for a single ancestor of a project. */
	export interface Ancestor {

		/** A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on. */
		resourceId?: ResourceId;
	}

	/** Identifying information for a single ancestor of a project. */
	export interface AncestorFormProperties {
	}
	export function CreateAncestorFormGroup() {
		return new FormGroup<AncestorFormProperties>({
		});

	}


	/** A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on. */
	export interface ResourceId {

		/** The type-specific id. This should correspond to the id used in the type-specific API's. */
		id?: string | null;

		/** The resource type this id is for. At present, the valid types are: "organization", "folder", and "project". */
		type?: string | null;
	}

	/** A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on. */
	export interface ResourceIdFormProperties {

		/** The type-specific id. This should correspond to the id used in the type-specific API's. */
		id: FormControl<string | null | undefined>,

		/** The resource type this id is for. At present, the valid types are: "organization", "folder", and "project". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdFormGroup() {
		return new FormGroup<ResourceIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
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


	/** A `Constraint` that is either enforced or not. For example a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance. */
	export interface BooleanConstraint {
	}

	/** A `Constraint` that is either enforced or not. For example a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance. */
	export interface BooleanConstraintFormProperties {
	}
	export function CreateBooleanConstraintFormGroup() {
		return new FormGroup<BooleanConstraintFormProperties>({
		});

	}


	/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
	export interface BooleanPolicy {

		/** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`. */
		enforced?: boolean | null;
	}

	/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
	export interface BooleanPolicyFormProperties {

		/** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`. */
		enforced: FormControl<boolean | null | undefined>,
	}
	export function CreateBooleanPolicyFormGroup() {
		return new FormGroup<BooleanPolicyFormProperties>({
			enforced: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The request sent to the ClearOrgPolicy method. */
	export interface ClearOrgPolicyRequest {

		/** Name of the `Constraint` of the `Policy` to clear. */
		constraint?: string | null;

		/** The current version, for concurrency control. Not sending an `etag` will cause the `Policy` to be cleared blindly. */
		etag?: string | null;
	}

	/** The request sent to the ClearOrgPolicy method. */
	export interface ClearOrgPolicyRequestFormProperties {

		/** Name of the `Constraint` of the `Policy` to clear. */
		constraint: FormControl<string | null | undefined>,

		/** The current version, for concurrency control. Not sending an `etag` will cause the `Policy` to be cleared blindly. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateClearOrgPolicyRequestFormGroup() {
		return new FormGroup<ClearOrgPolicyRequestFormProperties>({
			constraint: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing a long running folder operation */
	export interface CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent?: string | null;

		/** The display name of the folder. */
		displayName?: string | null;

		/** The type of this operation. */
		operationType?: CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null;

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent?: string | null;
	}

	/** Metadata describing a long running folder operation */
	export interface CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationFormProperties {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent: FormControl<string | null | undefined>,

		/** The display name of the folder. */
		displayName: FormControl<string | null | undefined>,

		/** The type of this operation. */
		operationType: FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>,

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent: FormControl<string | null | undefined>,
	}
	export function CreateCloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationFormGroup() {
		return new FormGroup<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>(undefined),
			sourceParent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType { OPERATION_TYPE_UNSPECIFIED = 'OPERATION_TYPE_UNSPECIFIED', CREATE = 'CREATE', MOVE = 'MOVE' }


	/** Metadata describing a long running folder operation */
	export interface CloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperation {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent?: string | null;

		/** The display name of the folder. */
		displayName?: string | null;

		/** The type of this operation. */
		operationType?: CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null;

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent?: string | null;
	}

	/** Metadata describing a long running folder operation */
	export interface CloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperationFormProperties {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent: FormControl<string | null | undefined>,

		/** The display name of the folder. */
		displayName: FormControl<string | null | undefined>,

		/** The type of this operation. */
		operationType: FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>,

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent: FormControl<string | null | undefined>,
	}
	export function CreateCloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperationFormGroup() {
		return new FormGroup<CloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperationFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>(undefined),
			sourceParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `Constraint` describes a way in which a resource's configuration can be restricted. For example, it controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for `Constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about [Policies](/resource-manager/reference/rest/v1/Policy). `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `Policy` being defined or inherited for the resource in question. */
	export interface Constraint {

		/** A `Constraint` that is either enforced or not. For example a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance. */
		booleanConstraint?: BooleanConstraint;

		/** The evaluation behavior of this constraint in the absence of 'Policy'. */
		constraintDefault?: ConstraintConstraintDefault | null;

		/** Detailed description of what this `Constraint` controls as well as how and where it is enforced. Mutable. */
		description?: string | null;

		/** The human readable name. Mutable. */
		displayName?: string | null;

		/** A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`. */
		listConstraint?: ListConstraint;

		/** Immutable value, required to globally be unique. For example, `constraints/serviceuser.services` */
		name?: string | null;

		/**
		 * Version of the `Constraint`. Default version is 0;
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** A `Constraint` describes a way in which a resource's configuration can be restricted. For example, it controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for `Constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about [Policies](/resource-manager/reference/rest/v1/Policy). `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `Policy` being defined or inherited for the resource in question. */
	export interface ConstraintFormProperties {

		/** The evaluation behavior of this constraint in the absence of 'Policy'. */
		constraintDefault: FormControl<ConstraintConstraintDefault | null | undefined>,

		/** Detailed description of what this `Constraint` controls as well as how and where it is enforced. Mutable. */
		description: FormControl<string | null | undefined>,

		/** The human readable name. Mutable. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable value, required to globally be unique. For example, `constraints/serviceuser.services` */
		name: FormControl<string | null | undefined>,

		/**
		 * Version of the `Constraint`. Default version is 0;
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateConstraintFormGroup() {
		return new FormGroup<ConstraintFormProperties>({
			constraintDefault: new FormControl<ConstraintConstraintDefault | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ConstraintConstraintDefault { CONSTRAINT_DEFAULT_UNSPECIFIED = 'CONSTRAINT_DEFAULT_UNSPECIFIED', ALLOW = 'ALLOW', DENY = 'DENY' }


	/** A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`. */
	export interface ListConstraint {

		/** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Constraint`. */
		suggestedValue?: string | null;

		/** Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the 'folders/123' folder. */
		supportsUnder?: boolean | null;
	}

	/** A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`. */
	export interface ListConstraintFormProperties {

		/** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Constraint`. */
		suggestedValue: FormControl<string | null | undefined>,

		/** Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the 'folders/123' folder. */
		supportsUnder: FormControl<boolean | null | undefined>,
	}
	export function CreateListConstraintFormGroup() {
		return new FormGroup<ListConstraintFormProperties>({
			suggestedValue: new FormControl<string | null | undefined>(undefined),
			supportsUnder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata pertaining to the Folder creation process. */
	export interface CreateFolderMetadata {

		/** The display name of the folder. */
		displayName?: string | null;

		/** The resource name of the folder or organization we are creating the folder under. */
		parent?: string | null;
	}

	/** Metadata pertaining to the Folder creation process. */
	export interface CreateFolderMetadataFormProperties {

		/** The display name of the folder. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the folder or organization we are creating the folder under. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreateFolderMetadataFormGroup() {
		return new FormGroup<CreateFolderMetadataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed. */
	export interface CreateProjectMetadata {

		/** Creation time of the project creation workflow. */
		createTime?: string | null;

		/** True if the project can be retrieved using `GetProject`. No other operations on the project are guaranteed to work until the project creation is complete. */
		gettable?: boolean | null;

		/** True if the project creation process is complete. */
		ready?: boolean | null;
	}

	/** A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed. */
	export interface CreateProjectMetadataFormProperties {

		/** Creation time of the project creation workflow. */
		createTime: FormControl<string | null | undefined>,

		/** True if the project can be retrieved using `GetProject`. No other operations on the project are guaranteed to work until the project creation is complete. */
		gettable: FormControl<boolean | null | undefined>,

		/** True if the project creation process is complete. */
		ready: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateProjectMetadataFormGroup() {
		return new FormGroup<CreateProjectMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			gettable: new FormControl<boolean | null | undefined>(undefined),
			ready: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Runtime operation information for creating a TagValue. */
	export interface CreateTagBindingMetadata {
	}

	/** Runtime operation information for creating a TagValue. */
	export interface CreateTagBindingMetadataFormProperties {
	}
	export function CreateCreateTagBindingMetadataFormGroup() {
		return new FormGroup<CreateTagBindingMetadataFormProperties>({
		});

	}


	/** Runtime operation information for creating a TagKey. */
	export interface CreateTagKeyMetadata {
	}

	/** Runtime operation information for creating a TagKey. */
	export interface CreateTagKeyMetadataFormProperties {
	}
	export function CreateCreateTagKeyMetadataFormGroup() {
		return new FormGroup<CreateTagKeyMetadataFormProperties>({
		});

	}


	/** Runtime operation information for creating a TagValue. */
	export interface CreateTagValueMetadata {
	}

	/** Runtime operation information for creating a TagValue. */
	export interface CreateTagValueMetadataFormProperties {
	}
	export function CreateCreateTagValueMetadataFormGroup() {
		return new FormGroup<CreateTagValueMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the `Operation` returned by `DeleteFolder`. */
	export interface DeleteFolderMetadata {
	}

	/** A status object which is used as the `metadata` field for the `Operation` returned by `DeleteFolder`. */
	export interface DeleteFolderMetadataFormProperties {
	}
	export function CreateDeleteFolderMetadataFormGroup() {
		return new FormGroup<DeleteFolderMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the operation returned by DeleteOrganization. */
	export interface DeleteOrganizationMetadata {
	}

	/** A status object which is used as the `metadata` field for the operation returned by DeleteOrganization. */
	export interface DeleteOrganizationMetadataFormProperties {
	}
	export function CreateDeleteOrganizationMetadataFormGroup() {
		return new FormGroup<DeleteOrganizationMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by `DeleteProject`. */
	export interface DeleteProjectMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by `DeleteProject`. */
	export interface DeleteProjectMetadataFormProperties {
	}
	export function CreateDeleteProjectMetadataFormGroup() {
		return new FormGroup<DeleteProjectMetadataFormProperties>({
		});

	}


	/** Runtime operation information for deleting a TagBinding. */
	export interface DeleteTagBindingMetadata {
	}

	/** Runtime operation information for deleting a TagBinding. */
	export interface DeleteTagBindingMetadataFormProperties {
	}
	export function CreateDeleteTagBindingMetadataFormGroup() {
		return new FormGroup<DeleteTagBindingMetadataFormProperties>({
		});

	}


	/** Runtime operation information for deleting a TagKey. */
	export interface DeleteTagKeyMetadata {
	}

	/** Runtime operation information for deleting a TagKey. */
	export interface DeleteTagKeyMetadataFormProperties {
	}
	export function CreateDeleteTagKeyMetadataFormGroup() {
		return new FormGroup<DeleteTagKeyMetadataFormProperties>({
		});

	}


	/** Runtime operation information for deleting a TagValue. */
	export interface DeleteTagValueMetadata {
	}

	/** Runtime operation information for deleting a TagValue. */
	export interface DeleteTagValueMetadataFormProperties {
	}
	export function CreateDeleteTagValueMetadataFormGroup() {
		return new FormGroup<DeleteTagValueMetadataFormProperties>({
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


	/** Metadata describing a long running folder operation */
	export interface FolderOperation {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent?: string | null;

		/** The display name of the folder. */
		displayName?: string | null;

		/** The type of this operation. */
		operationType?: CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null;

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent?: string | null;
	}

	/** Metadata describing a long running folder operation */
	export interface FolderOperationFormProperties {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent: FormControl<string | null | undefined>,

		/** The display name of the folder. */
		displayName: FormControl<string | null | undefined>,

		/** The type of this operation. */
		operationType: FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>,

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent: FormControl<string | null | undefined>,
	}
	export function CreateFolderOperationFormGroup() {
		return new FormGroup<FolderOperationFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>(undefined),
			sourceParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A classification of the Folder Operation error. */
	export interface FolderOperationError {

		/** The type of operation error experienced. */
		errorMessageId?: FolderOperationErrorErrorMessageId | null;
	}

	/** A classification of the Folder Operation error. */
	export interface FolderOperationErrorFormProperties {

		/** The type of operation error experienced. */
		errorMessageId: FormControl<FolderOperationErrorErrorMessageId | null | undefined>,
	}
	export function CreateFolderOperationErrorFormGroup() {
		return new FormGroup<FolderOperationErrorFormProperties>({
			errorMessageId: new FormControl<FolderOperationErrorErrorMessageId | null | undefined>(undefined),
		});

	}

	export enum FolderOperationErrorErrorMessageId { ERROR_TYPE_UNSPECIFIED = 'ERROR_TYPE_UNSPECIFIED', ACTIVE_FOLDER_HEIGHT_VIOLATION = 'ACTIVE_FOLDER_HEIGHT_VIOLATION', MAX_CHILD_FOLDERS_VIOLATION = 'MAX_CHILD_FOLDERS_VIOLATION', FOLDER_NAME_UNIQUENESS_VIOLATION = 'FOLDER_NAME_UNIQUENESS_VIOLATION', RESOURCE_DELETED_VIOLATION = 'RESOURCE_DELETED_VIOLATION', PARENT_DELETED_VIOLATION = 'PARENT_DELETED_VIOLATION', CYCLE_INTRODUCED_VIOLATION = 'CYCLE_INTRODUCED_VIOLATION', FOLDER_BEING_MOVED_VIOLATION = 'FOLDER_BEING_MOVED_VIOLATION', FOLDER_TO_DELETE_NON_EMPTY_VIOLATION = 'FOLDER_TO_DELETE_NON_EMPTY_VIOLATION', DELETED_FOLDER_HEIGHT_VIOLATION = 'DELETED_FOLDER_HEIGHT_VIOLATION' }


	/** The request sent to the GetAncestry method. */
	export interface GetAncestryRequest {
	}

	/** The request sent to the GetAncestry method. */
	export interface GetAncestryRequestFormProperties {
	}
	export function CreateGetAncestryRequestFormGroup() {
		return new FormGroup<GetAncestryRequestFormProperties>({
		});

	}


	/** Response from the projects.getAncestry method. */
	export interface GetAncestryResponse {

		/** Ancestors are ordered from bottom to top of the resource hierarchy. The first ancestor is the project itself, followed by the project's parent, etc.. */
		ancestor?: Array<Ancestor>;
	}

	/** Response from the projects.getAncestry method. */
	export interface GetAncestryResponseFormProperties {
	}
	export function CreateGetAncestryResponseFormGroup() {
		return new FormGroup<GetAncestryResponseFormProperties>({
		});

	}


	/** The request sent to the GetEffectiveOrgPolicy method. */
	export interface GetEffectiveOrgPolicyRequest {

		/** The name of the `Constraint` to compute the effective `Policy`. */
		constraint?: string | null;
	}

	/** The request sent to the GetEffectiveOrgPolicy method. */
	export interface GetEffectiveOrgPolicyRequestFormProperties {

		/** The name of the `Constraint` to compute the effective `Policy`. */
		constraint: FormControl<string | null | undefined>,
	}
	export function CreateGetEffectiveOrgPolicyRequestFormGroup() {
		return new FormGroup<GetEffectiveOrgPolicyRequestFormProperties>({
			constraint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}

	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequestFormProperties {
	}
	export function CreateGetIamPolicyRequestFormGroup() {
		return new FormGroup<GetIamPolicyRequestFormProperties>({
		});

	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/**
		 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/**
		 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request sent to the GetOrgPolicy method. */
	export interface GetOrgPolicyRequest {

		/** Name of the `Constraint` to get the `Policy`. */
		constraint?: string | null;
	}

	/** The request sent to the GetOrgPolicy method. */
	export interface GetOrgPolicyRequestFormProperties {

		/** Name of the `Constraint` to get the `Policy`. */
		constraint: FormControl<string | null | undefined>,
	}
	export function CreateGetOrgPolicyRequestFormGroup() {
		return new FormGroup<GetOrgPolicyRequestFormProperties>({
			constraint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Lien represents an encumbrance on the actions that can be performed on a resource. */
	export interface Lien {

		/** The creation time of this Lien. */
		createTime?: string | null;

		/** A system-generated unique identifier for this Lien. Example: `liens/1234abcd` */
		name?: string | null;

		/** A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. Example: 'compute.googleapis.com' */
		origin?: string | null;

		/** A reference to the resource this Lien is attached to. The server will validate the parent against those for which Liens are supported. Example: `projects/1234` */
		parent?: string | null;

		/** Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. Example: 'Holds production API key' */
		reason?: string | null;

		/** The types of operations which should be blocked as a result of this Lien. Each value should correspond to an IAM permission. The server will validate the permissions against those for which Liens are supported. An empty list is meaningless and will be rejected. Example: ['resourcemanager.projects.delete'] */
		restrictions?: Array<string>;
	}

	/** A Lien represents an encumbrance on the actions that can be performed on a resource. */
	export interface LienFormProperties {

		/** The creation time of this Lien. */
		createTime: FormControl<string | null | undefined>,

		/** A system-generated unique identifier for this Lien. Example: `liens/1234abcd` */
		name: FormControl<string | null | undefined>,

		/** A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. Example: 'compute.googleapis.com' */
		origin: FormControl<string | null | undefined>,

		/** A reference to the resource this Lien is attached to. The server will validate the parent against those for which Liens are supported. Example: `projects/1234` */
		parent: FormControl<string | null | undefined>,

		/** Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. Example: 'Holds production API key' */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateLienFormGroup() {
		return new FormGroup<LienFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request sent to the `ListAvailableOrgPolicyConstraints` method on the project, folder, or organization. */
	export interface ListAvailableOrgPolicyConstraintsRequest {

		/**
		 * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. */
		pageToken?: string | null;
	}

	/** The request sent to the `ListAvailableOrgPolicyConstraints` method on the project, folder, or organization. */
	export interface ListAvailableOrgPolicyConstraintsRequestFormProperties {

		/**
		 * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableOrgPolicyConstraintsRequestFormGroup() {
		return new FormGroup<ListAvailableOrgPolicyConstraintsRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response returned from the `ListAvailableOrgPolicyConstraints` method. Returns all `Constraints` that could be set at this level of the hierarchy (contrast with the response from `ListPolicies`, which returns all policies which are set). */
	export interface ListAvailableOrgPolicyConstraintsResponse {

		/** The collection of constraints that are settable on the request resource. */
		constraints?: Array<Constraint>;

		/** Page token used to retrieve the next page. This is currently not used. */
		nextPageToken?: string | null;
	}

	/** The response returned from the `ListAvailableOrgPolicyConstraints` method. Returns all `Constraints` that could be set at this level of the hierarchy (contrast with the response from `ListPolicies`, which returns all policies which are set). */
	export interface ListAvailableOrgPolicyConstraintsResponseFormProperties {

		/** Page token used to retrieve the next page. This is currently not used. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableOrgPolicyConstraintsResponseFormGroup() {
		return new FormGroup<ListAvailableOrgPolicyConstraintsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Liens.ListLiens. */
	export interface ListLiensResponse {

		/** A list of Liens. */
		liens?: Array<Lien>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Liens.ListLiens. */
	export interface ListLiensResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLiensResponseFormGroup() {
		return new FormGroup<ListLiensResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request sent to the ListOrgPolicies method. */
	export interface ListOrgPoliciesRequest {

		/**
		 * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. */
		pageToken?: string | null;
	}

	/** The request sent to the ListOrgPolicies method. */
	export interface ListOrgPoliciesRequestFormProperties {

		/**
		 * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrgPoliciesRequestFormGroup() {
		return new FormGroup<ListOrgPoliciesRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource. */
	export interface ListOrgPoliciesResponse {

		/** Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token. */
		nextPageToken?: string | null;

		/** The `Policies` that are set on the resource. It will be empty if no `Policies` are set. */
		policies?: Array<OrgPolicy>;
	}

	/** The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource. */
	export interface ListOrgPoliciesResponseFormProperties {

		/** Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrgPoliciesResponseFormGroup() {
		return new FormGroup<ListOrgPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources. */
	export interface OrgPolicy {

		/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
		booleanPolicy?: BooleanPolicy;

		/** The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation. */
		constraint?: string | null;

		/** An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`. */
		etag?: string | null;

		/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
		listPolicy?: ListPolicy;

		/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
		restoreDefault?: RestoreDefault;

		/** The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored. */
		updateTime?: string | null;

		/**
		 * Version of the `Policy`. Default version is 0;
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources. */
	export interface OrgPolicyFormProperties {

		/** The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation. */
		constraint: FormControl<string | null | undefined>,

		/** An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`. */
		etag: FormControl<string | null | undefined>,

		/** The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored. */
		updateTime: FormControl<string | null | undefined>,

		/**
		 * Version of the `Policy`. Default version is 0;
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateOrgPolicyFormGroup() {
		return new FormGroup<OrgPolicyFormProperties>({
			constraint: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
	export interface ListPolicy {

		/** The policy all_values state. */
		allValues?: ListPolicyAllValues | null;

		/** List of values allowed at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`. */
		allowedValues?: Array<string>;

		/** List of values denied at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`. */
		deniedValues?: Array<string>;

		/** Determines the inheritance behavior for this `Policy`. By default, a `ListPolicy` set at a resource supersedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy. Setting `Policy` hierarchies that inherit both allowed values and denied values isn't recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`. For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied. The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`: Example 1 (no inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has `inherit_from_parent` `false` and values: {allowed_values: "E3" allowed_values: "E4"} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`. Example 2 (inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {value: "E3" value: "E4" inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`. Example 3 (inheriting both allowed and denied values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {denied_values: "E1"} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`. Example 4 (RestoreDefault): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 5 (no policy inherits parent policy): `organizations/foo` has no `Policy` set. `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 6 (ListConstraint allowing all): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`. Example 7 (ListConstraint allowing none): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`. Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, `organizations/foo` has a `Policy` with values: {allowed_values: "under:organizations/O1"} `projects/bar` has a `Policy` with: {allowed_values: "under:projects/P3"} {denied_values: "under:folders/F2"} The accepted values at `organizations/foo` are `organizations/O1`, `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`, `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`, `folders/F1`, `projects/P1`. */
		inheritFromParent?: boolean | null;

		/** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`. */
		suggestedValue?: string | null;
	}

	/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
	export interface ListPolicyFormProperties {

		/** The policy all_values state. */
		allValues: FormControl<ListPolicyAllValues | null | undefined>,

		/** Determines the inheritance behavior for this `Policy`. By default, a `ListPolicy` set at a resource supersedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy. Setting `Policy` hierarchies that inherit both allowed values and denied values isn't recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`. For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied. The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`: Example 1 (no inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has `inherit_from_parent` `false` and values: {allowed_values: "E3" allowed_values: "E4"} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`. Example 2 (inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {value: "E3" value: "E4" inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`. Example 3 (inheriting both allowed and denied values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {denied_values: "E1"} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`. Example 4 (RestoreDefault): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 5 (no policy inherits parent policy): `organizations/foo` has no `Policy` set. `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 6 (ListConstraint allowing all): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`. Example 7 (ListConstraint allowing none): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`. Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, `organizations/foo` has a `Policy` with values: {allowed_values: "under:organizations/O1"} `projects/bar` has a `Policy` with: {allowed_values: "under:projects/P3"} {denied_values: "under:folders/F2"} The accepted values at `organizations/foo` are `organizations/O1`, `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`, `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`, `folders/F1`, `projects/P1`. */
		inheritFromParent: FormControl<boolean | null | undefined>,

		/** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`. */
		suggestedValue: FormControl<string | null | undefined>,
	}
	export function CreateListPolicyFormGroup() {
		return new FormGroup<ListPolicyFormProperties>({
			allValues: new FormControl<ListPolicyAllValues | null | undefined>(undefined),
			inheritFromParent: new FormControl<boolean | null | undefined>(undefined),
			suggestedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListPolicyAllValues { ALL_VALUES_UNSPECIFIED = 'ALL_VALUES_UNSPECIFIED', ALLOW = 'ALLOW', DENY = 'DENY' }


	/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
	export interface RestoreDefault {
	}

	/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
	export interface RestoreDefaultFormProperties {
	}
	export function CreateRestoreDefaultFormGroup() {
		return new FormGroup<RestoreDefaultFormProperties>({
		});

	}


	/** A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. */
	export interface ListProjectsResponse {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken?: string | null;

		/** The list of Projects that matched the list filter. This list can be paginated. */
		projects?: Array<Project>;
	}

	/** A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. */
	export interface ListProjectsResponseFormProperties {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResponseFormGroup() {
		return new FormGroup<ListProjectsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Project is a high-level Google Cloud Platform entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources. */
	export interface Project {

		/** Creation time. Read-only. */
		createTime?: string | null;

		/** The labels associated with this Project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: a-z{0,62}. Label values must be between 0 and 63 characters long and must conform to the regular expression [a-z0-9_-]{0,63}. A label value can be empty. No more than 256 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: "environment" : "dev" Read-write. */
		labels?: {[id: string]: string };

		/** The Project lifecycle state. Read-only. */
		lifecycleState?: ProjectLifecycleState | null;

		/** The optional user-assigned display name of the Project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `My Project` Read-write. */
		name?: string | null;

		/** A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on. */
		parent?: ResourceId;

		/** The unique, user-assigned ID of the Project. It must be 6 to 30 lowercase letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: `tokyo-rain-123` Read-only after creation. */
		projectId?: string | null;

		/** The number uniquely identifying the project. Example: `415104041262` Read-only. */
		projectNumber?: string | null;
	}

	/** A Project is a high-level Google Cloud Platform entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources. */
	export interface ProjectFormProperties {

		/** Creation time. Read-only. */
		createTime: FormControl<string | null | undefined>,

		/** The labels associated with this Project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: a-z{0,62}. Label values must be between 0 and 63 characters long and must conform to the regular expression [a-z0-9_-]{0,63}. A label value can be empty. No more than 256 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: "environment" : "dev" Read-write. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The Project lifecycle state. Read-only. */
		lifecycleState: FormControl<ProjectLifecycleState | null | undefined>,

		/** The optional user-assigned display name of the Project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `My Project` Read-write. */
		name: FormControl<string | null | undefined>,

		/** The unique, user-assigned ID of the Project. It must be 6 to 30 lowercase letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: `tokyo-rain-123` Read-only after creation. */
		projectId: FormControl<string | null | undefined>,

		/** The number uniquely identifying the project. Example: `415104041262` Read-only. */
		projectNumber: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lifecycleState: new FormControl<ProjectLifecycleState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			projectNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectLifecycleState { LIFECYCLE_STATE_UNSPECIFIED = 'LIFECYCLE_STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETE_REQUESTED = 'DELETE_REQUESTED', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS' }


	/** Metadata pertaining to the folder move process. */
	export interface MoveFolderMetadata {

		/** The resource name of the folder or organization to move the folder to. */
		destinationParent?: string | null;

		/** The display name of the folder. */
		displayName?: string | null;

		/** The resource name of the folder's parent. */
		sourceParent?: string | null;
	}

	/** Metadata pertaining to the folder move process. */
	export interface MoveFolderMetadataFormProperties {

		/** The resource name of the folder or organization to move the folder to. */
		destinationParent: FormControl<string | null | undefined>,

		/** The display name of the folder. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the folder's parent. */
		sourceParent: FormControl<string | null | undefined>,
	}
	export function CreateMoveFolderMetadataFormGroup() {
		return new FormGroup<MoveFolderMetadataFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			sourceParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by MoveProject. */
	export interface MoveProjectMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by MoveProject. */
	export interface MoveProjectMetadataFormProperties {
	}
	export function CreateMoveProjectMetadataFormGroup() {
		return new FormGroup<MoveProjectMetadataFormProperties>({
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


	/** The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong. */
	export interface Organization {

		/** Timestamp when the Organization was created. Assigned by the server. */
		creationTime?: string | null;

		/** A human-readable string that refers to the Organization in the Google Cloud console. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, "google.com") of the G Suite customer that owns the organization. */
		displayName?: string | null;

		/** The organization's current lifecycle state. Assigned by the server. */
		lifecycleState?: OrganizationLifecycleState | null;

		/** Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234". */
		name?: string | null;

		/** The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted. */
		owner?: OrganizationOwner;
	}

	/** The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong. */
	export interface OrganizationFormProperties {

		/** Timestamp when the Organization was created. Assigned by the server. */
		creationTime: FormControl<string | null | undefined>,

		/** A human-readable string that refers to the Organization in the Google Cloud console. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, "google.com") of the G Suite customer that owns the organization. */
		displayName: FormControl<string | null | undefined>,

		/** The organization's current lifecycle state. Assigned by the server. */
		lifecycleState: FormControl<OrganizationLifecycleState | null | undefined>,

		/** Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lifecycleState: new FormControl<OrganizationLifecycleState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrganizationLifecycleState { LIFECYCLE_STATE_UNSPECIFIED = 'LIFECYCLE_STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETE_REQUESTED = 'DELETE_REQUESTED' }


	/** The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted. */
	export interface OrganizationOwner {

		/** The G Suite customer id used in the Directory API. */
		directoryCustomerId?: string | null;
	}

	/** The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted. */
	export interface OrganizationOwnerFormProperties {

		/** The G Suite customer id used in the Directory API. */
		directoryCustomerId: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationOwnerFormGroup() {
		return new FormGroup<OrganizationOwnerFormProperties>({
			directoryCustomerId: new FormControl<string | null | undefined>(undefined),
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


	/** A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed. */
	export interface ProjectCreationStatus {

		/** Creation time of the project creation workflow. */
		createTime?: string | null;

		/** True if the project can be retrieved using GetProject. No other operations on the project are guaranteed to work until the project creation is complete. */
		gettable?: boolean | null;

		/** True if the project creation process is complete. */
		ready?: boolean | null;
	}

	/** A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed. */
	export interface ProjectCreationStatusFormProperties {

		/** Creation time of the project creation workflow. */
		createTime: FormControl<string | null | undefined>,

		/** True if the project can be retrieved using GetProject. No other operations on the project are guaranteed to work until the project creation is complete. */
		gettable: FormControl<boolean | null | undefined>,

		/** True if the project creation process is complete. */
		ready: FormControl<boolean | null | undefined>,
	}
	export function CreateProjectCreationStatusFormGroup() {
		return new FormGroup<ProjectCreationStatusFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			gettable: new FormControl<boolean | null | undefined>(undefined),
			ready: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The request sent to the `SearchOrganizations` method. */
	export interface SearchOrganizationsRequest {

		/** An optional query string used to filter the Organizations to return in the response. Filter rules are case-insensitive. Organizations may be filtered by `owner.directoryCustomerId` or by `domain`, where the domain is a G Suite domain, for example: * Filter `owner.directorycustomerid:123456789` returns Organization resources with `owner.directory_customer_id` equal to `123456789`. * Filter `domain:google.com` returns Organization resources corresponding to the domain `google.com`. This field is optional. */
		filter?: string | null;

		/**
		 * The maximum number of Organizations to return in the response. The server can return fewer organizations than requested. If unspecified, server picks an appropriate default.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** A pagination token returned from a previous call to `SearchOrganizations` that indicates from where listing should continue. This field is optional. */
		pageToken?: string | null;
	}

	/** The request sent to the `SearchOrganizations` method. */
	export interface SearchOrganizationsRequestFormProperties {

		/** An optional query string used to filter the Organizations to return in the response. Filter rules are case-insensitive. Organizations may be filtered by `owner.directoryCustomerId` or by `domain`, where the domain is a G Suite domain, for example: * Filter `owner.directorycustomerid:123456789` returns Organization resources with `owner.directory_customer_id` equal to `123456789`. * Filter `domain:google.com` returns Organization resources corresponding to the domain `google.com`. This field is optional. */
		filter: FormControl<string | null | undefined>,

		/**
		 * The maximum number of Organizations to return in the response. The server can return fewer organizations than requested. If unspecified, server picks an appropriate default.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** A pagination token returned from a previous call to `SearchOrganizations` that indicates from where listing should continue. This field is optional. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchOrganizationsRequestFormGroup() {
		return new FormGroup<SearchOrganizationsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response returned from the `SearchOrganizations` method. */
	export interface SearchOrganizationsResponse {

		/** A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results. */
		nextPageToken?: string | null;

		/** The list of Organizations that matched the search query, possibly paginated. */
		organizations?: Array<Organization>;
	}

	/** The response returned from the `SearchOrganizations` method. */
	export interface SearchOrganizationsResponseFormProperties {

		/** A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchOrganizationsResponseFormGroup() {
		return new FormGroup<SearchOrganizationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** The request sent to the SetOrgPolicyRequest method. */
	export interface SetOrgPolicyRequest {

		/** Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources. */
		policy?: OrgPolicy;
	}

	/** The request sent to the SetOrgPolicyRequest method. */
	export interface SetOrgPolicyRequestFormProperties {
	}
	export function CreateSetOrgPolicyRequestFormGroup() {
		return new FormGroup<SetOrgPolicyRequestFormProperties>({
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


	/** A status object which is used as the `metadata` field for the `Operation` returned by `UndeleteFolder`. */
	export interface UndeleteFolderMetadata {
	}

	/** A status object which is used as the `metadata` field for the `Operation` returned by `UndeleteFolder`. */
	export interface UndeleteFolderMetadataFormProperties {
	}
	export function CreateUndeleteFolderMetadataFormGroup() {
		return new FormGroup<UndeleteFolderMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by UndeleteOrganization. */
	export interface UndeleteOrganizationMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by UndeleteOrganization. */
	export interface UndeleteOrganizationMetadataFormProperties {
	}
	export function CreateUndeleteOrganizationMetadataFormGroup() {
		return new FormGroup<UndeleteOrganizationMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by `UndeleteProject`. */
	export interface UndeleteProjectMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by `UndeleteProject`. */
	export interface UndeleteProjectMetadataFormProperties {
	}
	export function CreateUndeleteProjectMetadataFormGroup() {
		return new FormGroup<UndeleteProjectMetadataFormProperties>({
		});

	}


	/** The request sent to the UndeleteProject method. */
	export interface UndeleteProjectRequest {
	}

	/** The request sent to the UndeleteProject method. */
	export interface UndeleteProjectRequestFormProperties {
	}
	export function CreateUndeleteProjectRequestFormGroup() {
		return new FormGroup<UndeleteProjectRequestFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by UpdateFolder. */
	export interface UpdateFolderMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by UpdateFolder. */
	export interface UpdateFolderMetadataFormProperties {
	}
	export function CreateUpdateFolderMetadataFormGroup() {
		return new FormGroup<UpdateFolderMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by UpdateProject. */
	export interface UpdateProjectMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by UpdateProject. */
	export interface UpdateProjectMetadataFormProperties {
	}
	export function CreateUpdateProjectMetadataFormGroup() {
		return new FormGroup<UpdateProjectMetadataFormProperties>({
		});

	}


	/** Runtime operation information for updating a TagKey. */
	export interface UpdateTagKeyMetadata {
	}

	/** Runtime operation information for updating a TagKey. */
	export interface UpdateTagKeyMetadataFormProperties {
	}
	export function CreateUpdateTagKeyMetadataFormGroup() {
		return new FormGroup<UpdateTagKeyMetadataFormProperties>({
		});

	}


	/** Runtime operation information for updating a TagValue. */
	export interface UpdateTagValueMetadata {
	}

	/** Runtime operation information for updating a TagValue. */
	export interface UpdateTagValueMetadataFormProperties {
	}
	export function CreateUpdateTagValueMetadataFormGroup() {
		return new FormGroup<UpdateTagValueMetadataFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.
		 * Get v1/liens
		 * @param {number} pageSize The maximum number of items to return. This is a suggestion for the server. The server can return fewer liens than requested. If unspecified, server picks an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The `next_page_token` value returned from a previous List request, if any.
		 * @param {string} parent Required. The name of the resource to list all attached Liens. For example, `projects/1234`. (google.api.field_policy).resource_type annotation is not set since the parent depends on the meta api implementation. This field could be a project or other sub project resources.
		 * @return {ListLiensResponse} Successful response
		 */
		Cloudresourcemanager_liens_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListLiensResponse> {
			return this.http.get<ListLiensResponse>(this.baseUri + 'v1/liens?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.
		 * Post v1/liens
		 * @return {Lien} Successful response
		 */
		Cloudresourcemanager_liens_create(requestBody: Lien): Observable<Lien> {
			return this.http.post<Lien>(this.baseUri + 'v1/liens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the results. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get` or has super admin privileges.
		 * Post v1/organizations:search
		 * @return {SearchOrganizationsResponse} Successful response
		 */
		Cloudresourcemanager_organizations_search(requestBody: SearchOrganizationsRequest): Observable<SearchOrganizationsResponse> {
			return this.http.post<SearchOrganizationsResponse>(this.baseUri + 'v1/organizations:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.
		 * Get v1/projects
		 * @param {string} filter Optional. An expression for filtering the results of the request. Filter rules are case insensitive. If multiple fields are included in a filter query, the query will return results that match any of the fields. Some eligible fields for filtering are: + `name` + `id` + `labels.` (where *key* is the name of a label) + `parent.type` + `parent.id` + `lifecycleState` Some examples of filter queries: | Query | Description | |------------------|-----------------------------------------------------| | name:how* | The project's name starts with "how". | | name:Howl | The project's name is `Howl` or `howl`. | | name:HOWL | Equivalent to above. | | NAME:howl | Equivalent to above. | | labels.color:* | The project has the label `color`. | | labels.color:red | The project's label `color` has the value `red`. | | labels.color:red labels.size:big | The project's label `color` has the value `red` or its label `size` has the value `big`. | | lifecycleState:DELETE_REQUESTED | Only show projects that are pending deletion.| If no filter is specified, the call will return projects for which the user has the `resourcemanager.projects.get` permission. NOTE: To perform a by-parent query (eg., what projects are directly in a Folder), the caller must have the `resourcemanager.projects.list` permission on the parent and the filter must contain both a `parent.type` and a `parent.id` restriction (example: "parent.type:folder parent.id:123"). In this case an alternate search index is used which provides more consistent results.
		 * @param {number} pageSize Optional. The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.
		 * @return {ListProjectsResponse} Successful response
		 */
		Cloudresourcemanager_projects_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProjectsResponse> {
			return this.http.get<ListProjectsResponse>(this.baseUri + 'v1/projects?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Request that a new Project be created. The result is an Operation which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking Operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.
		 * Post v1/projects
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_projects_create(requestBody: Project): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.
		 * Delete v1/projects/{projectId}
		 * @param {string} projectId The Project ID (for example, `foo-bar-123`). Required.
		 * @return {Empty} Successful response
		 */
		Cloudresourcemanager_projects_delete(projectId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
		 * Get v1/projects/{projectId}
		 * @param {string} projectId Required. The Project ID (for example, `my-project-123`).
		 * @return {Project} Successful response
		 */
		Cloudresourcemanager_projects_get(projectId: string): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.
		 * Put v1/projects/{projectId}
		 * @param {string} projectId The project ID (for example, `my-project-123`). Required.
		 * @return {Project} Successful response
		 */
		Cloudresourcemanager_projects_update(projectId: string, requestBody: Project): Observable<Project> {
			return this.http.put<Project>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
		 * Post v1/projects/{projectId}:getAncestry
		 * @param {string} projectId Required. The Project ID (for example, `my-project-123`).
		 * @return {GetAncestryResponse} Successful response
		 */
		Cloudresourcemanager_projects_getAncestry(projectId: string, requestBody: GetAncestryRequest): Observable<GetAncestryResponse> {
			return this.http.post<GetAncestryResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':getAncestry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.
		 * Post v1/projects/{projectId}:undelete
		 * @param {string} projectId Required. The project ID (for example, `foo-bar-123`).
		 * @return {Empty} Successful response
		 */
		Cloudresourcemanager_projects_undelete(projectId: string, requestBody: UndeleteProjectRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names).
		 * Post v1/projects/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_projects_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/projects/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + You can only grant ownership of a project to a member by using the Google Cloud console. Inviting a member will deliver an invitation email that they must accept. An invitation email is not generated if you are granting a role other than owner, or if both the member you are inviting and the project are part of your organization. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
		 * Post v1/projects/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_projects_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/projects/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified Project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). There are no permissions required for making this API call.
		 * Post v1/projects/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Cloudresourcemanager_projects_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/projects/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`.
		 * Delete v1/{name}
		 * @param {string} name Required. The name/identifier of the Lien to delete.
		 * @return {Empty} Successful response
		 */
		Cloudresourcemanager_liens_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Fetches an Organization resource identified by the specified resource name.
		 * Get v1/{name}
		 * @param {string} name The resource name of the Organization to fetch. This is the organization's relative path in the API, formatted as "organizations/[organizationId]". For example, "organizations/1234".
		 * @return {Organization} Successful response
		 */
		Cloudresourcemanager_organizations_get(name: string): Observable<Organization> {
			return this.http.get<Organization>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Clears a `Policy` from a resource.
		 * Post v1/{resource}:clearOrgPolicy
		 * @param {string} resource Name of the resource for the `Policy` to clear.
		 * @return {Empty} Successful response
		 */
		Cloudresourcemanager_projects_clearOrgPolicy(resource: string, requestBody: ClearOrgPolicyRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':clearOrgPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
		 * Post v1/{resource}:getEffectiveOrgPolicy
		 * @param {string} resource The name of the resource to start computing the effective `Policy`.
		 * @return {OrgPolicy} Successful response
		 */
		Cloudresourcemanager_projects_getEffectiveOrgPolicy(resource: string, requestBody: GetEffectiveOrgPolicyRequest): Observable<OrgPolicy> {
			return this.http.post<OrgPolicy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getEffectiveOrgPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_organizations_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
		 * Post v1/{resource}:getOrgPolicy
		 * @param {string} resource Name of the resource the `Policy` is set on.
		 * @return {OrgPolicy} Successful response
		 */
		Cloudresourcemanager_projects_getOrgPolicy(resource: string, requestBody: GetOrgPolicyRequest): Observable<OrgPolicy> {
			return this.http.post<OrgPolicy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getOrgPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists `Constraints` that could be applied on the specified resource.
		 * Post v1/{resource}:listAvailableOrgPolicyConstraints
		 * @param {string} resource Name of the resource to list `Constraints` for.
		 * @return {ListAvailableOrgPolicyConstraintsResponse} Successful response
		 */
		Cloudresourcemanager_projects_listAvailableOrgPolicyConstraints(resource: string, requestBody: ListAvailableOrgPolicyConstraintsRequest): Observable<ListAvailableOrgPolicyConstraintsResponse> {
			return this.http.post<ListAvailableOrgPolicyConstraintsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':listAvailableOrgPolicyConstraints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the `Policies` set for a particular resource.
		 * Post v1/{resource}:listOrgPolicies
		 * @param {string} resource Name of the resource to list Policies for.
		 * @return {ListOrgPoliciesResponse} Successful response
		 */
		Cloudresourcemanager_projects_listOrgPolicies(resource: string, requestBody: ListOrgPoliciesRequest): Observable<ListOrgPoliciesResponse> {
			return this.http.post<ListOrgPoliciesResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':listOrgPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_organizations_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
		 * Post v1/{resource}:setOrgPolicy
		 * @param {string} resource Resource name of the resource to attach the `Policy`.
		 * @return {OrgPolicy} Successful response
		 */
		Cloudresourcemanager_projects_setOrgPolicy(resource: string, requestBody: SetOrgPolicyRequest): Observable<OrgPolicy> {
			return this.http.post<OrgPolicy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setOrgPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123". There are no permissions required for making this API call.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Cloudresourcemanager_organizations_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

