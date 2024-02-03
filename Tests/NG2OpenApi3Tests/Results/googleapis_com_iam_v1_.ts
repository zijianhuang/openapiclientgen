import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Access related restrictions on the workforce pool. */
	export interface AccessRestrictions {

		/** Optional. Immutable. Services allowed for web sign-in with the workforce pool. If not set by default there are no restrictions. */
		allowedServices?: Array<ServiceConfig>;

		/** Optional. Disable programmatic sign-in by disabling token issue via the Security Token API endpoint. See [Security Token Service API] (https://cloud.google.com/iam/docs/reference/sts/rest). */
		disableProgrammaticSignin?: boolean | null;
	}

	/** Access related restrictions on the workforce pool. */
	export interface AccessRestrictionsFormProperties {

		/** Optional. Disable programmatic sign-in by disabling token issue via the Security Token API endpoint. See [Security Token Service API] (https://cloud.google.com/iam/docs/reference/sts/rest). */
		disableProgrammaticSignin: FormControl<boolean | null | undefined>,
	}
	export function CreateAccessRestrictionsFormGroup() {
		return new FormGroup<AccessRestrictionsFormProperties>({
			disableProgrammaticSignin: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for a service. */
	export interface ServiceConfig {

		/** Optional. Domain name of the service. Example: console.cloud.google */
		domain?: string | null;
	}

	/** Configuration for a service. */
	export interface ServiceConfigFormProperties {

		/** Optional. Domain name of the service. Example: console.cloud.google */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateServiceConfigFormGroup() {
		return new FormGroup<ServiceConfigFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Audit log information specific to Cloud IAM admin APIs. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message. */
	export interface AdminAuditData {

		/** A PermissionDelta message to record the added_permissions and removed_permissions inside a role. */
		permissionDelta?: PermissionDelta;
	}

	/** Audit log information specific to Cloud IAM admin APIs. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message. */
	export interface AdminAuditDataFormProperties {
	}
	export function CreateAdminAuditDataFormGroup() {
		return new FormGroup<AdminAuditDataFormProperties>({
		});

	}


	/** A PermissionDelta message to record the added_permissions and removed_permissions inside a role. */
	export interface PermissionDelta {

		/** Added permissions. */
		addedPermissions?: Array<string>;

		/** Removed permissions. */
		removedPermissions?: Array<string>;
	}

	/** A PermissionDelta message to record the added_permissions and removed_permissions inside a role. */
	export interface PermissionDeltaFormProperties {
	}
	export function CreatePermissionDeltaFormGroup() {
		return new FormGroup<PermissionDeltaFormProperties>({
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


	/** Audit log information specific to Cloud IAM. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message. */
	export interface AuditData {

		/** The difference delta between two policies. */
		policyDelta?: PolicyDelta;
	}

	/** Audit log information specific to Cloud IAM. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message. */
	export interface AuditDataFormProperties {
	}
	export function CreateAuditDataFormGroup() {
		return new FormGroup<AuditDataFormProperties>({
		});

	}


	/** The difference delta between two policies. */
	export interface PolicyDelta {

		/** The delta for Bindings between two policies. */
		bindingDeltas?: Array<BindingDelta>;
	}

	/** The difference delta between two policies. */
	export interface PolicyDeltaFormProperties {
	}
	export function CreatePolicyDeltaFormGroup() {
		return new FormGroup<PolicyDeltaFormProperties>({
		});

	}


	/** One delta entry for Binding. Each individual change (only one member in each entry) to a binding will be a separate entry. */
	export interface BindingDelta {

		/** The action that was performed on a Binding. Required */
		action?: BindingDeltaAction | null;

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** A single identity requesting access for a Google Cloud resource. Follows the same format of Binding.members. Required */
		member?: string | null;

		/** Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required */
		role?: string | null;
	}

	/** One delta entry for Binding. Each individual change (only one member in each entry) to a binding will be a separate entry. */
	export interface BindingDeltaFormProperties {

		/** The action that was performed on a Binding. Required */
		action: FormControl<BindingDeltaAction | null | undefined>,

		/** A single identity requesting access for a Google Cloud resource. Follows the same format of Binding.members. Required */
		member: FormControl<string | null | undefined>,

		/** Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingDeltaFormGroup() {
		return new FormGroup<BindingDeltaFormProperties>({
			action: new FormControl<BindingDeltaAction | null | undefined>(undefined),
			member: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BindingDeltaAction { ACTION_UNSPECIFIED = 'ACTION_UNSPECIFIED', ADD = 'ADD', REMOVE = 'REMOVE' }


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


	/** Contains information about an auditable service. */
	export interface AuditableService {

		/** Public name of the service. For example, the service name for Cloud IAM is 'iam.googleapis.com'. */
		name?: string | null;
	}

	/** Contains information about an auditable service. */
	export interface AuditableServiceFormProperties {

		/** Public name of the service. For example, the service name for Cloud IAM is 'iam.googleapis.com'. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAuditableServiceFormGroup() {
		return new FormGroup<AuditableServiceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an Amazon Web Services identity provider. */
	export interface Aws {

		/** Required. The AWS account ID. */
		accountId?: string | null;
	}

	/** Represents an Amazon Web Services identity provider. */
	export interface AwsFormProperties {

		/** Required. The AWS account ID. */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateAwsFormGroup() {
		return new FormGroup<AwsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
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


	/** The request to create a new role. */
	export interface CreateRoleRequest {

		/** A role in the Identity and Access Management API. */
		role?: Role;

		/** The role ID to use for this role. A role ID may contain alphanumeric characters, underscores (`_`), and periods (`.`). It must contain a minimum of 3 characters and a maximum of 64 characters. */
		roleId?: string | null;
	}

	/** The request to create a new role. */
	export interface CreateRoleRequestFormProperties {

		/** The role ID to use for this role. A role ID may contain alphanumeric characters, underscores (`_`), and periods (`.`). It must contain a minimum of 3 characters and a maximum of 64 characters. */
		roleId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoleRequestFormGroup() {
		return new FormGroup<CreateRoleRequestFormProperties>({
			roleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A role in the Identity and Access Management API. */
	export interface Role {

		/** The current deleted state of the role. This field is read only. It will be ignored in calls to CreateRole and UpdateRole. */
		deleted?: boolean | null;

		/** Optional. A human-readable description for the role. */
		description?: string | null;

		/** Used to perform a consistent read-modify-write. */
		etag?: string | null;

		/** The names of the permissions this role grants when bound in an IAM policy. */
		includedPermissions?: Array<string>;

		/** The name of the role. When `Role` is used in `CreateRole`, the role name must not be set. When `Role` is used in output and other input such as `UpdateRole`, the role name is the complete path. For example, `roles/logging.viewer` for predefined roles, `organizations/{ORGANIZATION_ID}/roles/my-role` for organization-level custom roles, and `projects/{PROJECT_ID}/roles/my-role` for project-level custom roles. */
		name?: string | null;

		/** The current launch stage of the role. If the `ALPHA` launch stage has been selected for a role, the `stage` field will not be included in the returned definition for the role. */
		stage?: RoleStage | null;

		/** Optional. A human-readable title for the role. Typically this is limited to 100 UTF-8 bytes. */
		title?: string | null;
	}

	/** A role in the Identity and Access Management API. */
	export interface RoleFormProperties {

		/** The current deleted state of the role. This field is read only. It will be ignored in calls to CreateRole and UpdateRole. */
		deleted: FormControl<boolean | null | undefined>,

		/** Optional. A human-readable description for the role. */
		description: FormControl<string | null | undefined>,

		/** Used to perform a consistent read-modify-write. */
		etag: FormControl<string | null | undefined>,

		/** The name of the role. When `Role` is used in `CreateRole`, the role name must not be set. When `Role` is used in output and other input such as `UpdateRole`, the role name is the complete path. For example, `roles/logging.viewer` for predefined roles, `organizations/{ORGANIZATION_ID}/roles/my-role` for organization-level custom roles, and `projects/{PROJECT_ID}/roles/my-role` for project-level custom roles. */
		name: FormControl<string | null | undefined>,

		/** The current launch stage of the role. If the `ALPHA` launch stage has been selected for a role, the `stage` field will not be included in the returned definition for the role. */
		stage: FormControl<RoleStage | null | undefined>,

		/** Optional. A human-readable title for the role. Typically this is limited to 100 UTF-8 bytes. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<RoleStage | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RoleStage { ALPHA = 'ALPHA', BETA = 'BETA', GA = 'GA', DEPRECATED = 'DEPRECATED', DISABLED = 'DISABLED', EAP = 'EAP' }


	/** The service account key create request. */
	export interface CreateServiceAccountKeyRequest {

		/** Which type of key and algorithm to use for the key. The default is currently a 2K RSA key. However this may change in the future. */
		keyAlgorithm?: CreateServiceAccountKeyRequestKeyAlgorithm | null;

		/** The output format of the private key. The default value is `TYPE_GOOGLE_CREDENTIALS_FILE`, which is the Google Credentials File format. */
		privateKeyType?: CreateServiceAccountKeyRequestPrivateKeyType | null;
	}

	/** The service account key create request. */
	export interface CreateServiceAccountKeyRequestFormProperties {

		/** Which type of key and algorithm to use for the key. The default is currently a 2K RSA key. However this may change in the future. */
		keyAlgorithm: FormControl<CreateServiceAccountKeyRequestKeyAlgorithm | null | undefined>,

		/** The output format of the private key. The default value is `TYPE_GOOGLE_CREDENTIALS_FILE`, which is the Google Credentials File format. */
		privateKeyType: FormControl<CreateServiceAccountKeyRequestPrivateKeyType | null | undefined>,
	}
	export function CreateCreateServiceAccountKeyRequestFormGroup() {
		return new FormGroup<CreateServiceAccountKeyRequestFormProperties>({
			keyAlgorithm: new FormControl<CreateServiceAccountKeyRequestKeyAlgorithm | null | undefined>(undefined),
			privateKeyType: new FormControl<CreateServiceAccountKeyRequestPrivateKeyType | null | undefined>(undefined),
		});

	}

	export enum CreateServiceAccountKeyRequestKeyAlgorithm { KEY_ALG_UNSPECIFIED = 'KEY_ALG_UNSPECIFIED', KEY_ALG_RSA_1024 = 'KEY_ALG_RSA_1024', KEY_ALG_RSA_2048 = 'KEY_ALG_RSA_2048' }

	export enum CreateServiceAccountKeyRequestPrivateKeyType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', TYPE_PKCS12_FILE = 'TYPE_PKCS12_FILE', TYPE_GOOGLE_CREDENTIALS_FILE = 'TYPE_GOOGLE_CREDENTIALS_FILE' }


	/** The service account create request. */
	export interface CreateServiceAccountRequest {

		/** Required. The account id that is used to generate the service account email address and a stable unique id. It is unique within a project, must be 6-30 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])` to comply with RFC1035. */
		accountId?: string | null;

		/** An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service account. // */
		serviceAccount?: ServiceAccount;
	}

	/** The service account create request. */
	export interface CreateServiceAccountRequestFormProperties {

		/** Required. The account id that is used to generate the service account email address and a stable unique id. It is unique within a project, must be 6-30 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])` to comply with RFC1035. */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceAccountRequestFormGroup() {
		return new FormGroup<CreateServiceAccountRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service account. // */
	export interface ServiceAccount {

		/** Optional. A user-specified, human-readable description of the service account. The maximum length is 256 UTF-8 bytes. */
		description?: string | null;

		/** Output only. Whether the service account is disabled. */
		disabled?: boolean | null;

		/** Optional. A user-specified, human-readable name for the service account. The maximum length is 100 UTF-8 bytes. */
		displayName?: string | null;

		/** Output only. The email address of the service account. */
		email?: string | null;

		/** Deprecated. Do not use. */
		etag?: string | null;

		/** The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. */
		name?: string | null;

		/** Output only. The OAuth 2.0 client ID for the service account. */
		oauth2ClientId?: string | null;

		/** Output only. The ID of the project that owns the service account. */
		projectId?: string | null;

		/** Output only. The unique, stable numeric ID for the service account. Each service account retains its unique ID even if you delete the service account. For example, if you delete a service account, then create a new service account with the same name, the new service account has a different unique ID than the deleted service account. */
		uniqueId?: string | null;
	}

	/** An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service account. // */
	export interface ServiceAccountFormProperties {

		/** Optional. A user-specified, human-readable description of the service account. The maximum length is 256 UTF-8 bytes. */
		description: FormControl<string | null | undefined>,

		/** Output only. Whether the service account is disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** Optional. A user-specified, human-readable name for the service account. The maximum length is 100 UTF-8 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The email address of the service account. */
		email: FormControl<string | null | undefined>,

		/** Deprecated. Do not use. */
		etag: FormControl<string | null | undefined>,

		/** The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error. */
		name: FormControl<string | null | undefined>,

		/** Output only. The OAuth 2.0 client ID for the service account. */
		oauth2ClientId: FormControl<string | null | undefined>,

		/** Output only. The ID of the project that owns the service account. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. The unique, stable numeric ID for the service account. Each service account retains its unique ID even if you delete the service account. For example, if you delete a service account, then create a new service account with the same name, the new service account has a different unique ID than the deleted service account. */
		uniqueId: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountFormGroup() {
		return new FormGroup<ServiceAccountFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			oauth2ClientId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The service account key disable request. */
	export interface DisableServiceAccountKeyRequest {
	}

	/** The service account key disable request. */
	export interface DisableServiceAccountKeyRequestFormProperties {
	}
	export function CreateDisableServiceAccountKeyRequestFormGroup() {
		return new FormGroup<DisableServiceAccountKeyRequestFormProperties>({
		});

	}


	/** The service account disable request. */
	export interface DisableServiceAccountRequest {
	}

	/** The service account disable request. */
	export interface DisableServiceAccountRequestFormProperties {
	}
	export function CreateDisableServiceAccountRequestFormGroup() {
		return new FormGroup<DisableServiceAccountRequestFormProperties>({
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


	/** The service account key enable request. */
	export interface EnableServiceAccountKeyRequest {
	}

	/** The service account key enable request. */
	export interface EnableServiceAccountKeyRequestFormProperties {
	}
	export function CreateEnableServiceAccountKeyRequestFormGroup() {
		return new FormGroup<EnableServiceAccountKeyRequestFormProperties>({
		});

	}


	/** The service account enable request. */
	export interface EnableServiceAccountRequest {
	}

	/** The service account enable request. */
	export interface EnableServiceAccountRequestFormProperties {
	}
	export function CreateEnableServiceAccountRequestFormGroup() {
		return new FormGroup<EnableServiceAccountRequestFormProperties>({
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

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an OpenId Connect 1.0 identity provider. */
	export interface GoogleIamAdminV1WorkforcePoolProviderOidc {

		/** Required. The client ID. Must match the audience claim of the JWT issued by the identity provider. */
		clientId?: string | null;

		/** Representation of a client secret configured for the OIDC provider. */
		clientSecret?: GoogleIamAdminV1WorkforcePoolProviderOidcClientSecret;

		/** Required. The OIDC issuer URI. Must be a valid URI using the 'https' scheme. */
		issuerUri?: string | null;

		/** OIDC JWKs in JSON String format. For details on the definition of a JWK, see https://tools.ietf.org/html/rfc7517. If not set, the `jwks_uri` from the discovery document(fetched from the .well-known path of the `issuer_uri`) will be used. Currently, RSA and EC asymmetric keys are supported. The JWK must use following format and include only the following fields: { "keys": [ { "kty": "RSA/EC", "alg": "", "use": "sig", "kid": "", "n": "", "e": "", "x": "", "y": "", "crv": "" } ] } */
		jwksJson?: string | null;

		/** Configuration for web single sign-on for the OIDC provider. */
		webSsoConfig?: GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig;
	}

	/** Represents an OpenId Connect 1.0 identity provider. */
	export interface GoogleIamAdminV1WorkforcePoolProviderOidcFormProperties {

		/** Required. The client ID. Must match the audience claim of the JWT issued by the identity provider. */
		clientId: FormControl<string | null | undefined>,

		/** Required. The OIDC issuer URI. Must be a valid URI using the 'https' scheme. */
		issuerUri: FormControl<string | null | undefined>,

		/** OIDC JWKs in JSON String format. For details on the definition of a JWK, see https://tools.ietf.org/html/rfc7517. If not set, the `jwks_uri` from the discovery document(fetched from the .well-known path of the `issuer_uri`) will be used. Currently, RSA and EC asymmetric keys are supported. The JWK must use following format and include only the following fields: { "keys": [ { "kty": "RSA/EC", "alg": "", "use": "sig", "kid": "", "n": "", "e": "", "x": "", "y": "", "crv": "" } ] } */
		jwksJson: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamAdminV1WorkforcePoolProviderOidcFormGroup() {
		return new FormGroup<GoogleIamAdminV1WorkforcePoolProviderOidcFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			issuerUri: new FormControl<string | null | undefined>(undefined),
			jwksJson: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a client secret configured for the OIDC provider. */
	export interface GoogleIamAdminV1WorkforcePoolProviderOidcClientSecret {

		/** Representation of the value of the client secret. */
		value?: GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValue;
	}

	/** Representation of a client secret configured for the OIDC provider. */
	export interface GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretFormProperties {
	}
	export function CreateGoogleIamAdminV1WorkforcePoolProviderOidcClientSecretFormGroup() {
		return new FormGroup<GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretFormProperties>({
		});

	}


	/** Representation of the value of the client secret. */
	export interface GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValue {

		/** Input only. The plain text of the client secret value. For security reasons, this field is only used for input and will never be populated in any response. */
		plainText?: string | null;

		/** Output only. A thumbprint to represent the current client secret value. */
		thumbprint?: string | null;
	}

	/** Representation of the value of the client secret. */
	export interface GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValueFormProperties {

		/** Input only. The plain text of the client secret value. For security reasons, this field is only used for input and will never be populated in any response. */
		plainText: FormControl<string | null | undefined>,

		/** Output only. A thumbprint to represent the current client secret value. */
		thumbprint: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValueFormGroup() {
		return new FormGroup<GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValueFormProperties>({
			plainText: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for web single sign-on for the OIDC provider. */
	export interface GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfig {

		/** Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. By default, the `openid`, `profile` and `email` scopes that are supported by the identity provider are requested. Each additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured. */
		additionalScopes?: Array<string>;

		/** Required. The behavior for how OIDC Claims are included in the `assertion` object used for attribute mapping and attribute condition. */
		assertionClaimsBehavior?: GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigAssertionClaimsBehavior | null;

		/** Required. The Response Type to request for in the OIDC Authorization Request for web sign-in. The `CODE` Response Type is recommended to avoid the Implicit Flow, for security reasons. */
		responseType?: GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigResponseType | null;
	}

	/** Configuration for web single sign-on for the OIDC provider. */
	export interface GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigFormProperties {

		/** Required. The behavior for how OIDC Claims are included in the `assertion` object used for attribute mapping and attribute condition. */
		assertionClaimsBehavior: FormControl<GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigAssertionClaimsBehavior | null | undefined>,

		/** Required. The Response Type to request for in the OIDC Authorization Request for web sign-in. The `CODE` Response Type is recommended to avoid the Implicit Flow, for security reasons. */
		responseType: FormControl<GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigResponseType | null | undefined>,
	}
	export function CreateGoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigFormGroup() {
		return new FormGroup<GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigFormProperties>({
			assertionClaimsBehavior: new FormControl<GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigAssertionClaimsBehavior | null | undefined>(undefined),
			responseType: new FormControl<GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigResponseType | null | undefined>(undefined),
		});

	}

	export enum GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigAssertionClaimsBehavior { ASSERTION_CLAIMS_BEHAVIOR_UNSPECIFIED = 'ASSERTION_CLAIMS_BEHAVIOR_UNSPECIFIED', MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS = 'MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS', ONLY_ID_TOKEN_CLAIMS = 'ONLY_ID_TOKEN_CLAIMS' }

	export enum GoogleIamAdminV1WorkforcePoolProviderOidcWebSsoConfigResponseType { RESPONSE_TYPE_UNSPECIFIED = 'RESPONSE_TYPE_UNSPECIFIED', CODE = 'CODE', ID_TOKEN = 'ID_TOKEN' }


	/** Represents a SAML identity provider. */
	export interface GoogleIamAdminV1WorkforcePoolProviderSaml {

		/** Required. SAML Identity provider configuration metadata xml doc. The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf). The max size of the acceptable xml document will be bounded to 128k characters. The metadata xml document should satisfy the following constraints: 1) Must contain an Identity Provider Entity ID. 2) Must contain at least one non-expired signing key certificate. 3) For each signing key: a) Valid from should be no more than 7 days from now. b) Valid to should be no more than 15 years in the future. 4) Up to 3 IdP signing keys are allowed in the metadata xml. When updating the provider's metadata xml, at least one non-expired signing key must overlap with the existing metadata. This requirement is skipped if there are no non-expired signing keys present in the existing metadata. */
		idpMetadataXml?: string | null;
	}

	/** Represents a SAML identity provider. */
	export interface GoogleIamAdminV1WorkforcePoolProviderSamlFormProperties {

		/** Required. SAML Identity provider configuration metadata xml doc. The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf). The max size of the acceptable xml document will be bounded to 128k characters. The metadata xml document should satisfy the following constraints: 1) Must contain an Identity Provider Entity ID. 2) Must contain at least one non-expired signing key certificate. 3) For each signing key: a) Valid from should be no more than 7 days from now. b) Valid to should be no more than 15 years in the future. 4) Up to 3 IdP signing keys are allowed in the metadata xml. When updating the provider's metadata xml, at least one non-expired signing key must overlap with the existing metadata. This requirement is skipped if there are no non-expired signing keys present in the existing metadata. */
		idpMetadataXml: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamAdminV1WorkforcePoolProviderSamlFormGroup() {
		return new FormGroup<GoogleIamAdminV1WorkforcePoolProviderSamlFormProperties>({
			idpMetadataXml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a public key data along with its format. */
	export interface KeyData {

		/** Output only. The format of the key. */
		format?: KeyDataFormat | null;

		/** Output only. The key data. The format of the key is represented by the format field. */
		key?: string | null;

		/** Required. The specifications for the key. */
		keySpec?: KeyDataKeySpec | null;

		/** Output only. Latest timestamp when this key is valid. Attempts to use this key after this time will fail. Only present if the key data represents a X.509 certificate. */
		notAfterTime?: string | null;

		/** Output only. Earliest timestamp when this key is valid. Attempts to use this key before this time will fail. Only present if the key data represents a X.509 certificate. */
		notBeforeTime?: string | null;
	}

	/** Represents a public key data along with its format. */
	export interface KeyDataFormProperties {

		/** Output only. The format of the key. */
		format: FormControl<KeyDataFormat | null | undefined>,

		/** Output only. The key data. The format of the key is represented by the format field. */
		key: FormControl<string | null | undefined>,

		/** Required. The specifications for the key. */
		keySpec: FormControl<KeyDataKeySpec | null | undefined>,

		/** Output only. Latest timestamp when this key is valid. Attempts to use this key after this time will fail. Only present if the key data represents a X.509 certificate. */
		notAfterTime: FormControl<string | null | undefined>,

		/** Output only. Earliest timestamp when this key is valid. Attempts to use this key before this time will fail. Only present if the key data represents a X.509 certificate. */
		notBeforeTime: FormControl<string | null | undefined>,
	}
	export function CreateKeyDataFormGroup() {
		return new FormGroup<KeyDataFormProperties>({
			format: new FormControl<KeyDataFormat | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			keySpec: new FormControl<KeyDataKeySpec | null | undefined>(undefined),
			notAfterTime: new FormControl<string | null | undefined>(undefined),
			notBeforeTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum KeyDataFormat { KEY_FORMAT_UNSPECIFIED = 'KEY_FORMAT_UNSPECIFIED', RSA_X509_PEM = 'RSA_X509_PEM' }

	export enum KeyDataKeySpec { KEY_SPEC_UNSPECIFIED = 'KEY_SPEC_UNSPECIFIED', RSA_2048 = 'RSA_2048', RSA_3072 = 'RSA_3072', RSA_4096 = 'RSA_4096' }


	/** The request to lint a Cloud IAM policy object. */
	export interface LintPolicyRequest {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** The full resource name of the policy this lint request is about. The name follows the Google Cloud format for full resource names. For example, a Cloud project with ID `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`. The resource name is not used to read a policy from IAM. Only the data in the request object is linted. */
		fullResourceName?: string | null;
	}

	/** The request to lint a Cloud IAM policy object. */
	export interface LintPolicyRequestFormProperties {

		/** The full resource name of the policy this lint request is about. The name follows the Google Cloud format for full resource names. For example, a Cloud project with ID `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`. The resource name is not used to read a policy from IAM. Only the data in the request object is linted. */
		fullResourceName: FormControl<string | null | undefined>,
	}
	export function CreateLintPolicyRequestFormGroup() {
		return new FormGroup<LintPolicyRequestFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found. */
	export interface LintPolicyResponse {

		/** List of lint results sorted by `severity` in descending order. */
		lintResults?: Array<LintResult>;
	}

	/** The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found. */
	export interface LintPolicyResponseFormProperties {
	}
	export function CreateLintPolicyResponseFormGroup() {
		return new FormGroup<LintPolicyResponseFormProperties>({
		});

	}


	/** Structured response of a single validation unit. */
	export interface LintResult {

		/** Human readable debug message associated with the issue. */
		debugMessage?: string | null;

		/** The name of the field for which this lint result is about. For nested messages `field_name` consists of names of the embedded fields separated by period character. The top-level qualifier is the input object to lint in the request. For example, the `field_name` value `condition.expression` identifies a lint result for the `expression` field of the provided condition. */
		fieldName?: string | null;

		/** The validation unit level. */
		level?: LintResultLevel | null;

		/** 0-based character position of problematic construct within the object identified by `field_name`. Currently, this is populated only for condition expression. */
		locationOffset?: number | null;

		/** The validation unit severity. */
		severity?: LintResultSeverity | null;

		/** The validation unit name, for instance "lintValidationUnits/ConditionComplexityCheck". */
		validationUnitName?: string | null;
	}

	/** Structured response of a single validation unit. */
	export interface LintResultFormProperties {

		/** Human readable debug message associated with the issue. */
		debugMessage: FormControl<string | null | undefined>,

		/** The name of the field for which this lint result is about. For nested messages `field_name` consists of names of the embedded fields separated by period character. The top-level qualifier is the input object to lint in the request. For example, the `field_name` value `condition.expression` identifies a lint result for the `expression` field of the provided condition. */
		fieldName: FormControl<string | null | undefined>,

		/** The validation unit level. */
		level: FormControl<LintResultLevel | null | undefined>,

		/** 0-based character position of problematic construct within the object identified by `field_name`. Currently, this is populated only for condition expression. */
		locationOffset: FormControl<number | null | undefined>,

		/** The validation unit severity. */
		severity: FormControl<LintResultSeverity | null | undefined>,

		/** The validation unit name, for instance "lintValidationUnits/ConditionComplexityCheck". */
		validationUnitName: FormControl<string | null | undefined>,
	}
	export function CreateLintResultFormGroup() {
		return new FormGroup<LintResultFormProperties>({
			debugMessage: new FormControl<string | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<LintResultLevel | null | undefined>(undefined),
			locationOffset: new FormControl<number | null | undefined>(undefined),
			severity: new FormControl<LintResultSeverity | null | undefined>(undefined),
			validationUnitName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LintResultLevel { LEVEL_UNSPECIFIED = 'LEVEL_UNSPECIFIED', CONDITION = 'CONDITION' }

	export enum LintResultSeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', ERROR = 'ERROR', WARNING = 'WARNING', NOTICE = 'NOTICE', INFO = 'INFO', DEPRECATED = 'DEPRECATED' }


	/** The response containing the roles defined under a resource. */
	export interface ListRolesResponse {

		/** To retrieve the next page of results, set `ListRolesRequest.page_token` to this value. */
		nextPageToken?: string | null;

		/** The Roles defined on this resource. */
		roles?: Array<Role>;
	}

	/** The response containing the roles defined under a resource. */
	export interface ListRolesResponseFormProperties {

		/** To retrieve the next page of results, set `ListRolesRequest.page_token` to this value. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRolesResponseFormGroup() {
		return new FormGroup<ListRolesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The service account keys list response. */
	export interface ListServiceAccountKeysResponse {

		/** The public keys for the service account. */
		keys?: Array<ServiceAccountKey>;
	}

	/** The service account keys list response. */
	export interface ListServiceAccountKeysResponseFormProperties {
	}
	export function CreateListServiceAccountKeysResponseFormGroup() {
		return new FormGroup<ListServiceAccountKeysResponseFormProperties>({
		});

	}


	/** Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API. */
	export interface ServiceAccountKey {

		/** The key status. */
		disabled?: boolean | null;

		/** Specifies the algorithm (and possibly key size) for the key. */
		keyAlgorithm?: CreateServiceAccountKeyRequestKeyAlgorithm | null;

		/** The key origin. */
		keyOrigin?: ServiceAccountKeyKeyOrigin | null;

		/** The key type. */
		keyType?: ServiceAccountKeyKeyType | null;

		/** The resource name of the service account key in the following format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}`. */
		name?: string | null;

		/** The private key data. Only provided in `CreateServiceAccountKey` responses. Make sure to keep the private key data secure because it allows for the assertion of the service account identity. When base64 decoded, the private key data can be used to authenticate with Google API client libraries and with gcloud auth activate-service-account. */
		privateKeyData?: string | null;

		/** The output format for the private key. Only provided in `CreateServiceAccountKey` responses, not in `GetServiceAccountKey` or `ListServiceAccountKey` responses. Google never exposes system-managed private keys, and never retains user-managed private keys. */
		privateKeyType?: CreateServiceAccountKeyRequestPrivateKeyType | null;

		/** The public key data. Only provided in `GetServiceAccountKey` responses. */
		publicKeyData?: string | null;

		/** The key can be used after this timestamp. */
		validAfterTime?: string | null;

		/** The key can be used before this timestamp. For system-managed key pairs, this timestamp is the end time for the private key signing operation. The public key could still be used for verification for a few hours after this time. */
		validBeforeTime?: string | null;
	}

	/** Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API. */
	export interface ServiceAccountKeyFormProperties {

		/** The key status. */
		disabled: FormControl<boolean | null | undefined>,

		/** Specifies the algorithm (and possibly key size) for the key. */
		keyAlgorithm: FormControl<CreateServiceAccountKeyRequestKeyAlgorithm | null | undefined>,

		/** The key origin. */
		keyOrigin: FormControl<ServiceAccountKeyKeyOrigin | null | undefined>,

		/** The key type. */
		keyType: FormControl<ServiceAccountKeyKeyType | null | undefined>,

		/** The resource name of the service account key in the following format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}`. */
		name: FormControl<string | null | undefined>,

		/** The private key data. Only provided in `CreateServiceAccountKey` responses. Make sure to keep the private key data secure because it allows for the assertion of the service account identity. When base64 decoded, the private key data can be used to authenticate with Google API client libraries and with gcloud auth activate-service-account. */
		privateKeyData: FormControl<string | null | undefined>,

		/** The output format for the private key. Only provided in `CreateServiceAccountKey` responses, not in `GetServiceAccountKey` or `ListServiceAccountKey` responses. Google never exposes system-managed private keys, and never retains user-managed private keys. */
		privateKeyType: FormControl<CreateServiceAccountKeyRequestPrivateKeyType | null | undefined>,

		/** The public key data. Only provided in `GetServiceAccountKey` responses. */
		publicKeyData: FormControl<string | null | undefined>,

		/** The key can be used after this timestamp. */
		validAfterTime: FormControl<string | null | undefined>,

		/** The key can be used before this timestamp. For system-managed key pairs, this timestamp is the end time for the private key signing operation. The public key could still be used for verification for a few hours after this time. */
		validBeforeTime: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountKeyFormGroup() {
		return new FormGroup<ServiceAccountKeyFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			keyAlgorithm: new FormControl<CreateServiceAccountKeyRequestKeyAlgorithm | null | undefined>(undefined),
			keyOrigin: new FormControl<ServiceAccountKeyKeyOrigin | null | undefined>(undefined),
			keyType: new FormControl<ServiceAccountKeyKeyType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privateKeyData: new FormControl<string | null | undefined>(undefined),
			privateKeyType: new FormControl<CreateServiceAccountKeyRequestPrivateKeyType | null | undefined>(undefined),
			publicKeyData: new FormControl<string | null | undefined>(undefined),
			validAfterTime: new FormControl<string | null | undefined>(undefined),
			validBeforeTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceAccountKeyKeyOrigin { ORIGIN_UNSPECIFIED = 'ORIGIN_UNSPECIFIED', USER_PROVIDED = 'USER_PROVIDED', GOOGLE_PROVIDED = 'GOOGLE_PROVIDED' }

	export enum ServiceAccountKeyKeyType { KEY_TYPE_UNSPECIFIED = 'KEY_TYPE_UNSPECIFIED', USER_MANAGED = 'USER_MANAGED', SYSTEM_MANAGED = 'SYSTEM_MANAGED' }


	/** The service account list response. */
	export interface ListServiceAccountsResponse {

		/** The list of matching service accounts. */
		accounts?: Array<ServiceAccount>;

		/** To retrieve the next page of results, set ListServiceAccountsRequest.page_token to this value. */
		nextPageToken?: string | null;
	}

	/** The service account list response. */
	export interface ListServiceAccountsResponseFormProperties {

		/** To retrieve the next page of results, set ListServiceAccountsRequest.page_token to this value. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceAccountsResponseFormGroup() {
		return new FormGroup<ListServiceAccountsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListWorkforcePoolProviderKeys. */
	export interface ListWorkforcePoolProviderKeysResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of WorkforcePoolProviderKeys. */
		workforcePoolProviderKeys?: Array<WorkforcePoolProviderKey>;
	}

	/** Response message for ListWorkforcePoolProviderKeys. */
	export interface ListWorkforcePoolProviderKeysResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkforcePoolProviderKeysResponseFormGroup() {
		return new FormGroup<ListWorkforcePoolProviderKeysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a public key configuration for a Workforce Pool Provider. The key can be configured in your identity provider to encrypt SAML assertions. Google holds the corresponding private key, which it uses to decrypt encrypted tokens. */
	export interface WorkforcePoolProviderKey {

		/** Output only. The time after which the key will be permanently deleted and cannot be recovered. Note that the key may get purged before this time if the total limit of keys per provider is exceeded. */
		expireTime?: string | null;

		/** Represents a public key data along with its format. */
		keyData?: KeyData;

		/** Output only. The resource name of the key. */
		name?: string | null;

		/** Output only. The state of the key. */
		state?: WorkforcePoolProviderKeyState | null;

		/** Required. The purpose of the key. */
		use?: WorkforcePoolProviderKeyUse | null;
	}

	/** Represents a public key configuration for a Workforce Pool Provider. The key can be configured in your identity provider to encrypt SAML assertions. Google holds the corresponding private key, which it uses to decrypt encrypted tokens. */
	export interface WorkforcePoolProviderKeyFormProperties {

		/** Output only. The time after which the key will be permanently deleted and cannot be recovered. Note that the key may get purged before this time if the total limit of keys per provider is exceeded. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the key. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the key. */
		state: FormControl<WorkforcePoolProviderKeyState | null | undefined>,

		/** Required. The purpose of the key. */
		use: FormControl<WorkforcePoolProviderKeyUse | null | undefined>,
	}
	export function CreateWorkforcePoolProviderKeyFormGroup() {
		return new FormGroup<WorkforcePoolProviderKeyFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkforcePoolProviderKeyState | null | undefined>(undefined),
			use: new FormControl<WorkforcePoolProviderKeyUse | null | undefined>(undefined),
		});

	}

	export enum WorkforcePoolProviderKeyState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETED = 'DELETED' }

	export enum WorkforcePoolProviderKeyUse { KEY_USE_UNSPECIFIED = 'KEY_USE_UNSPECIFIED', ENCRYPTION = 'ENCRYPTION' }


	/** Response message for ListWorkforcePoolProviders. */
	export interface ListWorkforcePoolProvidersResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of providers. */
		workforcePoolProviders?: Array<WorkforcePoolProvider>;
	}

	/** Response message for ListWorkforcePoolProviders. */
	export interface ListWorkforcePoolProvidersResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkforcePoolProvidersResponseFormGroup() {
		return new FormGroup<ListWorkforcePoolProvidersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configuration for an external identity provider. */
	export interface WorkforcePoolProvider {

		/** A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * `assertion`: JSON representing the authentication credential issued by the provider. * `google`: The Google attributes mapped from the assertion in the `attribute_mappings`. `google.profile_photo`, `google.display_name` and `google.posix_username` are not supported. * `attribute`: The custom attributes mapped from the assertion in the `attribute_mappings`. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credentials will be accepted. The following example shows how to only allow credentials with a mapped `google.groups` value of `admins`: ``` "'admins' in google.groups" ``` */
		attributeCondition?: string | null;

		/** Required. Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. This is a required field and the mapped subject cannot exceed 127 bytes. * `google.groups`: Groups the authenticating user belongs to. You can grant groups access to resources using an IAM `principalSet` binding; access applies to all members of the group. * `google.display_name`: The name of the authenticated user. This is an optional field and the mapped display name cannot exceed 100 bytes. If not set, `google.subject` will be displayed instead. This attribute cannot be referenced in IAM bindings. * `google.profile_photo`: The URL that specifies the authenticated user's thumbnail photo. This is an optional field. When set, the image will be visible as the user's profile picture. If not set, a generic user icon will be displayed instead. This attribute cannot be referenced in IAM bindings. * `google.posix_username`: The linux username used by OS login. This is an optional field and the mapped posix username cannot exceed 32 characters, The key must match the regex "^a-zA-Z0-9._{0,31}$". This attribute cannot be referenced in IAM bindings. You can also provide custom attributes by specifying `attribute.{custom_attribute}`, where {custom_attribute} is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workforce pool to Google Cloud resources. For example: * `google.subject`: `principal://iam.googleapis.com/locations/global/workforcePools/{pool}/subject/{value}` * `google.groups`: `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool}/group/{value}` * `attribute.{custom_attribute}`: `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool}/attribute.{custom_attribute}/{value}` Each value must be a [Common Expression Language] (https://opensource.google/projects/cel) function that maps an identity provider credential to the normalized attribute specified by the corresponding map key. You can use the `assertion` keyword in the expression to access a JSON representation of the authentication credential issued by the provider. The maximum length of an attribute mapping expression is 2048 characters. When evaluated, the total size of all mapped attributes must not exceed 4KB. For OIDC providers, you must supply a custom mapping that includes the `google.subject` attribute. For example, the following maps the `sub` claim of the incoming credential to the `subject` attribute on a Google token: ``` {"google.subject": "assertion.sub"} ``` */
		attributeMapping?: {[id: string]: string };

		/** A user-specified description of the provider. Cannot exceed 256 characters. */
		description?: string | null;

		/** Disables the workforce pool provider. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. */
		disabled?: boolean | null;

		/** A user-specified display name for the provider. Cannot exceed 32 characters. */
		displayName?: string | null;

		/** Output only. Time after which the workload pool provider will be permanently purged and cannot be recovered. */
		expireTime?: string | null;

		/** Output only. The resource name of the provider. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}` */
		name?: string | null;

		/** Represents an OpenId Connect 1.0 identity provider. */
		oidc?: GoogleIamAdminV1WorkforcePoolProviderOidc;

		/** Represents a SAML identity provider. */
		saml?: GoogleIamAdminV1WorkforcePoolProviderSaml;

		/** Output only. The state of the provider. */
		state?: WorkforcePoolProviderKeyState | null;
	}

	/** A configuration for an external identity provider. */
	export interface WorkforcePoolProviderFormProperties {

		/** A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * `assertion`: JSON representing the authentication credential issued by the provider. * `google`: The Google attributes mapped from the assertion in the `attribute_mappings`. `google.profile_photo`, `google.display_name` and `google.posix_username` are not supported. * `attribute`: The custom attributes mapped from the assertion in the `attribute_mappings`. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credentials will be accepted. The following example shows how to only allow credentials with a mapped `google.groups` value of `admins`: ``` "'admins' in google.groups" ``` */
		attributeCondition: FormControl<string | null | undefined>,

		/** Required. Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. This is a required field and the mapped subject cannot exceed 127 bytes. * `google.groups`: Groups the authenticating user belongs to. You can grant groups access to resources using an IAM `principalSet` binding; access applies to all members of the group. * `google.display_name`: The name of the authenticated user. This is an optional field and the mapped display name cannot exceed 100 bytes. If not set, `google.subject` will be displayed instead. This attribute cannot be referenced in IAM bindings. * `google.profile_photo`: The URL that specifies the authenticated user's thumbnail photo. This is an optional field. When set, the image will be visible as the user's profile picture. If not set, a generic user icon will be displayed instead. This attribute cannot be referenced in IAM bindings. * `google.posix_username`: The linux username used by OS login. This is an optional field and the mapped posix username cannot exceed 32 characters, The key must match the regex "^a-zA-Z0-9._{0,31}$". This attribute cannot be referenced in IAM bindings. You can also provide custom attributes by specifying `attribute.{custom_attribute}`, where {custom_attribute} is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workforce pool to Google Cloud resources. For example: * `google.subject`: `principal://iam.googleapis.com/locations/global/workforcePools/{pool}/subject/{value}` * `google.groups`: `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool}/group/{value}` * `attribute.{custom_attribute}`: `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool}/attribute.{custom_attribute}/{value}` Each value must be a [Common Expression Language] (https://opensource.google/projects/cel) function that maps an identity provider credential to the normalized attribute specified by the corresponding map key. You can use the `assertion` keyword in the expression to access a JSON representation of the authentication credential issued by the provider. The maximum length of an attribute mapping expression is 2048 characters. When evaluated, the total size of all mapped attributes must not exceed 4KB. For OIDC providers, you must supply a custom mapping that includes the `google.subject` attribute. For example, the following maps the `sub` claim of the incoming credential to the `subject` attribute on a Google token: ``` {"google.subject": "assertion.sub"} ``` */
		attributeMapping: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-specified description of the provider. Cannot exceed 256 characters. */
		description: FormControl<string | null | undefined>,

		/** Disables the workforce pool provider. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. */
		disabled: FormControl<boolean | null | undefined>,

		/** A user-specified display name for the provider. Cannot exceed 32 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Time after which the workload pool provider will be permanently purged and cannot be recovered. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the provider. Format: `locations/{location}/workforcePools/{workforce_pool_id}/providers/{provider_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the provider. */
		state: FormControl<WorkforcePoolProviderKeyState | null | undefined>,
	}
	export function CreateWorkforcePoolProviderFormGroup() {
		return new FormGroup<WorkforcePoolProviderFormProperties>({
			attributeCondition: new FormControl<string | null | undefined>(undefined),
			attributeMapping: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkforcePoolProviderKeyState | null | undefined>(undefined),
		});

	}


	/** Response message for ListWorkforcePools. */
	export interface ListWorkforcePoolsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of pools. */
		workforcePools?: Array<WorkforcePool>;
	}

	/** Response message for ListWorkforcePools. */
	export interface ListWorkforcePoolsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkforcePoolsResponseFormGroup() {
		return new FormGroup<ListWorkforcePoolsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of external workforces. Provides namespaces for federated users that can be referenced in IAM policies. */
	export interface WorkforcePool {

		/** Access related restrictions on the workforce pool. */
		accessRestrictions?: AccessRestrictions;

		/** A user-specified description of the pool. Cannot exceed 256 characters. */
		description?: string | null;

		/** Disables the workforce pool. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again. */
		disabled?: boolean | null;

		/** A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters. */
		displayName?: string | null;

		/** Output only. Time after which the workforce pool will be permanently purged and cannot be recovered. */
		expireTime?: string | null;

		/** Output only. The resource name of the pool. Format: `locations/{location}/workforcePools/{workforce_pool_id}` */
		name?: string | null;

		/** Immutable. The resource name of the parent. Format: `organizations/{org-id}`. */
		parent?: string | null;

		/** Duration that the Google Cloud access tokens, console sign-in sessions, and `gcloud` sign-in sessions from this pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If `session_duration` is not configured, minted credentials have a default duration of one hour (3600s). For SAML providers, the lifetime of the token is the minimum of the `session_duration` and the `SessionNotOnOrAfter` claim in the SAML assertion. */
		sessionDuration?: string | null;

		/** Output only. The state of the pool. */
		state?: WorkforcePoolProviderKeyState | null;
	}

	/** Represents a collection of external workforces. Provides namespaces for federated users that can be referenced in IAM policies. */
	export interface WorkforcePoolFormProperties {

		/** A user-specified description of the pool. Cannot exceed 256 characters. */
		description: FormControl<string | null | undefined>,

		/** Disables the workforce pool. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again. */
		disabled: FormControl<boolean | null | undefined>,

		/** A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Time after which the workforce pool will be permanently purged and cannot be recovered. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the pool. Format: `locations/{location}/workforcePools/{workforce_pool_id}` */
		name: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the parent. Format: `organizations/{org-id}`. */
		parent: FormControl<string | null | undefined>,

		/** Duration that the Google Cloud access tokens, console sign-in sessions, and `gcloud` sign-in sessions from this pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If `session_duration` is not configured, minted credentials have a default duration of one hour (3600s). For SAML providers, the lifetime of the token is the minimum of the `session_duration` and the `SessionNotOnOrAfter` claim in the SAML assertion. */
		sessionDuration: FormControl<string | null | undefined>,

		/** Output only. The state of the pool. */
		state: FormControl<WorkforcePoolProviderKeyState | null | undefined>,
	}
	export function CreateWorkforcePoolFormGroup() {
		return new FormGroup<WorkforcePoolFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			sessionDuration: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkforcePoolProviderKeyState | null | undefined>(undefined),
		});

	}


	/** Response message for ListWorkloadIdentityPoolProviderKeys. */
	export interface ListWorkloadIdentityPoolProviderKeysResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of WorkloadIdentityPoolProviderKey */
		workloadIdentityPoolProviderKeys?: Array<WorkloadIdentityPoolProviderKey>;
	}

	/** Response message for ListWorkloadIdentityPoolProviderKeys. */
	export interface ListWorkloadIdentityPoolProviderKeysResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkloadIdentityPoolProviderKeysResponseFormGroup() {
		return new FormGroup<ListWorkloadIdentityPoolProviderKeysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a public key configuration for your workload identity pool provider. The key can be configured in your identity provider to encrypt the SAML assertions. Google holds the corresponding private key which it uses to decrypt encrypted tokens. */
	export interface WorkloadIdentityPoolProviderKey {

		/** Output only. Time after which the key will be permanently purged and cannot be recovered. Note that the key may get purged before this timestamp if the total limit of keys per provider is crossed. */
		expireTime?: string | null;

		/** Represents a public key data along with its format. */
		keyData?: KeyData;

		/** Output only. The resource name of the key. */
		name?: string | null;

		/** Output only. The state of the key. */
		state?: WorkforcePoolProviderKeyState | null;

		/** Required. The purpose of the key. */
		use?: WorkforcePoolProviderKeyUse | null;
	}

	/** Represents a public key configuration for your workload identity pool provider. The key can be configured in your identity provider to encrypt the SAML assertions. Google holds the corresponding private key which it uses to decrypt encrypted tokens. */
	export interface WorkloadIdentityPoolProviderKeyFormProperties {

		/** Output only. Time after which the key will be permanently purged and cannot be recovered. Note that the key may get purged before this timestamp if the total limit of keys per provider is crossed. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the key. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the key. */
		state: FormControl<WorkforcePoolProviderKeyState | null | undefined>,

		/** Required. The purpose of the key. */
		use: FormControl<WorkforcePoolProviderKeyUse | null | undefined>,
	}
	export function CreateWorkloadIdentityPoolProviderKeyFormGroup() {
		return new FormGroup<WorkloadIdentityPoolProviderKeyFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkforcePoolProviderKeyState | null | undefined>(undefined),
			use: new FormControl<WorkforcePoolProviderKeyUse | null | undefined>(undefined),
		});

	}


	/** Response message for ListWorkloadIdentityPoolProviders. */
	export interface ListWorkloadIdentityPoolProvidersResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of providers. */
		workloadIdentityPoolProviders?: Array<WorkloadIdentityPoolProvider>;
	}

	/** Response message for ListWorkloadIdentityPoolProviders. */
	export interface ListWorkloadIdentityPoolProvidersResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkloadIdentityPoolProvidersResponseFormGroup() {
		return new FormGroup<ListWorkloadIdentityPoolProvidersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configuration for an external identity provider. */
	export interface WorkloadIdentityPoolProvider {

		/** [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * `assertion`: JSON representing the authentication credential issued by the provider. * `google`: The Google attributes mapped from the assertion in the `attribute_mappings`. * `attribute`: The custom attributes mapped from the assertion in the `attribute_mappings`. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credential are accepted. The following example shows how to only allow credentials with a mapped `google.groups` value of `admins`: ``` "'admins' in google.groups" ``` */
		attributeCondition?: string | null;

		/** Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. Cannot exceed 127 bytes. * `google.groups`: Groups the external identity belongs to. You can grant groups access to resources using an IAM `principalSet` binding; access applies to all members of the group. You can also provide custom attributes by specifying `attribute.{custom_attribute}`, where `{custom_attribute}` is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workload to Google Cloud resources. For example: * `google.subject`: `principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}` * `google.groups`: `principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}` * `attribute.{custom_attribute}`: `principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}` Each value must be a [Common Expression Language] (https://opensource.google/projects/cel) function that maps an identity provider credential to the normalized attribute specified by the corresponding map key. You can use the `assertion` keyword in the expression to access a JSON representation of the authentication credential issued by the provider. The maximum length of an attribute mapping expression is 2048 characters. When evaluated, the total size of all mapped attributes must not exceed 8KB. For AWS providers, if no attribute mapping is defined, the following default mapping applies: ``` { "google.subject":"assertion.arn", "attribute.aws_role": "assertion.arn.contains('assumed-role')" " ? assertion.arn.extract('{account_arn}assumed-role/')" " + 'assumed-role/'" " + assertion.arn.extract('assumed-role/{role_name}/')" " : assertion.arn", } ``` If any custom attribute mappings are defined, they must include a mapping to the `google.subject` attribute. For OIDC providers, you must supply a custom mapping, which must include the `google.subject` attribute. For example, the following maps the `sub` claim of the incoming credential to the `subject` attribute on a Google token: ``` {"google.subject": "assertion.sub"} ``` */
		attributeMapping?: {[id: string]: string };

		/** Represents an Amazon Web Services identity provider. */
		aws?: Aws;

		/** A description for the provider. Cannot exceed 256 characters. */
		description?: string | null;

		/** Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. */
		disabled?: boolean | null;

		/** A display name for the provider. Cannot exceed 32 characters. */
		displayName?: string | null;

		/** Output only. Time after which the workload identity pool provider will be permanently purged and cannot be recovered. */
		expireTime?: string | null;

		/** Output only. The resource name of the provider. */
		name?: string | null;

		/** Represents an OpenId Connect 1.0 identity provider. */
		oidc?: Oidc;

		/** Represents an SAML 2.0 identity provider. */
		saml?: Saml;

		/** Output only. The state of the provider. */
		state?: WorkforcePoolProviderKeyState | null;
	}

	/** A configuration for an external identity provider. */
	export interface WorkloadIdentityPoolProviderFormProperties {

		/** [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. The expression must output a boolean representing whether to allow the federation. The following keywords may be referenced in the expressions: * `assertion`: JSON representing the authentication credential issued by the provider. * `google`: The Google attributes mapped from the assertion in the `attribute_mappings`. * `attribute`: The custom attributes mapped from the assertion in the `attribute_mappings`. The maximum length of the attribute condition expression is 4096 characters. If unspecified, all valid authentication credential are accepted. The following example shows how to only allow credentials with a mapped `google.groups` value of `admins`: ``` "'admins' in google.groups" ``` */
		attributeCondition: FormControl<string | null | undefined>,

		/** Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`. Each key must be a string specifying the Google Cloud IAM attribute to map to. The following keys are supported: * `google.subject`: The principal IAM is authenticating. You can reference this value in IAM bindings. This is also the subject that appears in Cloud Logging logs. Cannot exceed 127 bytes. * `google.groups`: Groups the external identity belongs to. You can grant groups access to resources using an IAM `principalSet` binding; access applies to all members of the group. You can also provide custom attributes by specifying `attribute.{custom_attribute}`, where `{custom_attribute}` is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes. The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_]. You can reference these attributes in IAM policies to define fine-grained access for a workload to Google Cloud resources. For example: * `google.subject`: `principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}` * `google.groups`: `principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}` * `attribute.{custom_attribute}`: `principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}` Each value must be a [Common Expression Language] (https://opensource.google/projects/cel) function that maps an identity provider credential to the normalized attribute specified by the corresponding map key. You can use the `assertion` keyword in the expression to access a JSON representation of the authentication credential issued by the provider. The maximum length of an attribute mapping expression is 2048 characters. When evaluated, the total size of all mapped attributes must not exceed 8KB. For AWS providers, if no attribute mapping is defined, the following default mapping applies: ``` { "google.subject":"assertion.arn", "attribute.aws_role": "assertion.arn.contains('assumed-role')" " ? assertion.arn.extract('{account_arn}assumed-role/')" " + 'assumed-role/'" " + assertion.arn.extract('assumed-role/{role_name}/')" " : assertion.arn", } ``` If any custom attribute mappings are defined, they must include a mapping to the `google.subject` attribute. For OIDC providers, you must supply a custom mapping, which must include the `google.subject` attribute. For example, the following maps the `sub` claim of the incoming credential to the `subject` attribute on a Google token: ``` {"google.subject": "assertion.sub"} ``` */
		attributeMapping: FormControl<{[id: string]: string } | null | undefined>,

		/** A description for the provider. Cannot exceed 256 characters. */
		description: FormControl<string | null | undefined>,

		/** Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. */
		disabled: FormControl<boolean | null | undefined>,

		/** A display name for the provider. Cannot exceed 32 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Time after which the workload identity pool provider will be permanently purged and cannot be recovered. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the provider. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the provider. */
		state: FormControl<WorkforcePoolProviderKeyState | null | undefined>,
	}
	export function CreateWorkloadIdentityPoolProviderFormGroup() {
		return new FormGroup<WorkloadIdentityPoolProviderFormProperties>({
			attributeCondition: new FormControl<string | null | undefined>(undefined),
			attributeMapping: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkforcePoolProviderKeyState | null | undefined>(undefined),
		});

	}


	/** Represents an OpenId Connect 1.0 identity provider. */
	export interface Oidc {

		/** Acceptable values for the `aud` field (audience) in the OIDC token. Token exchange requests are rejected if the token audience does not match one of the configured values. Each audience may be at most 256 characters. A maximum of 10 audiences may be configured. If this list is empty, the OIDC token audience must be equal to the full canonical resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix. For example: ``` //iam.googleapis.com/projects//locations//workloadIdentityPools//providers/ https://iam.googleapis.com/projects//locations//workloadIdentityPools//providers/ ``` */
		allowedAudiences?: Array<string>;

		/** Required. The OIDC issuer URL. Must be an HTTPS endpoint. */
		issuerUri?: string | null;

		/** Optional. OIDC JWKs in JSON String format. For details on the definition of a JWK, see https://tools.ietf.org/html/rfc7517. If not set, the `jwks_uri` from the discovery document(fetched from the .well-known path of the `issuer_uri`) will be used. Currently, RSA and EC asymmetric keys are supported. The JWK must use following format and include only the following fields: { "keys": [ { "kty": "RSA/EC", "alg": "", "use": "sig", "kid": "", "n": "", "e": "", "x": "", "y": "", "crv": "" } ] } */
		jwksJson?: string | null;
	}

	/** Represents an OpenId Connect 1.0 identity provider. */
	export interface OidcFormProperties {

		/** Required. The OIDC issuer URL. Must be an HTTPS endpoint. */
		issuerUri: FormControl<string | null | undefined>,

		/** Optional. OIDC JWKs in JSON String format. For details on the definition of a JWK, see https://tools.ietf.org/html/rfc7517. If not set, the `jwks_uri` from the discovery document(fetched from the .well-known path of the `issuer_uri`) will be used. Currently, RSA and EC asymmetric keys are supported. The JWK must use following format and include only the following fields: { "keys": [ { "kty": "RSA/EC", "alg": "", "use": "sig", "kid": "", "n": "", "e": "", "x": "", "y": "", "crv": "" } ] } */
		jwksJson: FormControl<string | null | undefined>,
	}
	export function CreateOidcFormGroup() {
		return new FormGroup<OidcFormProperties>({
			issuerUri: new FormControl<string | null | undefined>(undefined),
			jwksJson: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an SAML 2.0 identity provider. */
	export interface Saml {

		/** Required. SAML Identity provider configuration metadata xml doc. The xml document should comply with [SAML 2.0 specification](https://www.oasis-open.org/committees/download.php/56785/sstc-saml-metadata-errata-2.0-wd-05.pdf). The max size of the acceptable xml document will be bounded to 128k characters. The metadata xml document should satisfy the following constraints: 1) Must contain an Identity Provider Entity ID. 2) Must contain at least one non-expired signing key certificate. 3) For each signing key: a) Valid from should be no more than 7 days from now. b) Valid to should be no more than 15 years in the future. 4) Upto 3 IdP signing keys are allowed in the metadata xml. When updating the provider's metadata xml, at lease one non-expired signing key must overlap with the existing metadata. This requirement is skipped if there are no non-expired signing keys present in the existing metadata */
		idpMetadataXml?: string | null;
	}

	/** Represents an SAML 2.0 identity provider. */
	export interface SamlFormProperties {

		/** Required. SAML Identity provider configuration metadata xml doc. The xml document should comply with [SAML 2.0 specification](https://www.oasis-open.org/committees/download.php/56785/sstc-saml-metadata-errata-2.0-wd-05.pdf). The max size of the acceptable xml document will be bounded to 128k characters. The metadata xml document should satisfy the following constraints: 1) Must contain an Identity Provider Entity ID. 2) Must contain at least one non-expired signing key certificate. 3) For each signing key: a) Valid from should be no more than 7 days from now. b) Valid to should be no more than 15 years in the future. 4) Upto 3 IdP signing keys are allowed in the metadata xml. When updating the provider's metadata xml, at lease one non-expired signing key must overlap with the existing metadata. This requirement is skipped if there are no non-expired signing keys present in the existing metadata */
		idpMetadataXml: FormControl<string | null | undefined>,
	}
	export function CreateSamlFormGroup() {
		return new FormGroup<SamlFormProperties>({
			idpMetadataXml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListWorkloadIdentityPools. */
	export interface ListWorkloadIdentityPoolsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of pools. */
		workloadIdentityPools?: Array<WorkloadIdentityPool>;
	}

	/** Response message for ListWorkloadIdentityPools. */
	export interface ListWorkloadIdentityPoolsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkloadIdentityPoolsResponseFormGroup() {
		return new FormGroup<ListWorkloadIdentityPoolsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of workload identities. You can define IAM policies to grant these identities access to Google Cloud resources. */
	export interface WorkloadIdentityPool {

		/** A description of the pool. Cannot exceed 256 characters. */
		description?: string | null;

		/** Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again. */
		disabled?: boolean | null;

		/** A display name for the pool. Cannot exceed 32 characters. */
		displayName?: string | null;

		/** Output only. Time after which the workload identity pool will be permanently purged and cannot be recovered. */
		expireTime?: string | null;

		/** Output only. The resource name of the pool. */
		name?: string | null;

		/** Output only. The state of the pool. */
		state?: WorkforcePoolProviderKeyState | null;
	}

	/** Represents a collection of workload identities. You can define IAM policies to grant these identities access to Google Cloud resources. */
	export interface WorkloadIdentityPoolFormProperties {

		/** A description of the pool. Cannot exceed 256 characters. */
		description: FormControl<string | null | undefined>,

		/** Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again. */
		disabled: FormControl<boolean | null | undefined>,

		/** A display name for the pool. Cannot exceed 32 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Time after which the workload identity pool will be permanently purged and cannot be recovered. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the pool. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the pool. */
		state: FormControl<WorkforcePoolProviderKeyState | null | undefined>,
	}
	export function CreateWorkloadIdentityPoolFormGroup() {
		return new FormGroup<WorkloadIdentityPoolFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkforcePoolProviderKeyState | null | undefined>(undefined),
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


	/** The service account patch request. You can patch only the `display_name` and `description` fields. You must use the `update_mask` field to specify which of these fields you want to patch. Only the fields specified in the request are guaranteed to be returned in the response. Other fields may be empty in the response. */
	export interface PatchServiceAccountRequest {

		/** An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service account. // */
		serviceAccount?: ServiceAccount;
		updateMask?: string | null;
	}

	/** The service account patch request. You can patch only the `display_name` and `description` fields. You must use the `update_mask` field to specify which of these fields you want to patch. Only the fields specified in the request are guaranteed to be returned in the response. Other fields may be empty in the response. */
	export interface PatchServiceAccountRequestFormProperties {
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreatePatchServiceAccountRequestFormGroup() {
		return new FormGroup<PatchServiceAccountRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A permission which can be included by a role. */
	export interface Permission {

		/** The service API associated with the permission is not enabled. */
		apiDisabled?: boolean | null;

		/** The current custom role support level. */
		customRolesSupportLevel?: PermissionCustomRolesSupportLevel | null;

		/** A brief description of what this Permission is used for. This permission can ONLY be used in predefined roles. */
		description?: string | null;

		/** The name of this Permission. */
		name?: string | null;
		onlyInPredefinedRoles?: boolean | null;

		/** The preferred name for this permission. If present, then this permission is an alias of, and equivalent to, the listed primary_permission. */
		primaryPermission?: string | null;

		/** The current launch stage of the permission. */
		stage?: PermissionStage | null;

		/** The title of this Permission. */
		title?: string | null;
	}

	/** A permission which can be included by a role. */
	export interface PermissionFormProperties {

		/** The service API associated with the permission is not enabled. */
		apiDisabled: FormControl<boolean | null | undefined>,

		/** The current custom role support level. */
		customRolesSupportLevel: FormControl<PermissionCustomRolesSupportLevel | null | undefined>,

		/** A brief description of what this Permission is used for. This permission can ONLY be used in predefined roles. */
		description: FormControl<string | null | undefined>,

		/** The name of this Permission. */
		name: FormControl<string | null | undefined>,
		onlyInPredefinedRoles: FormControl<boolean | null | undefined>,

		/** The preferred name for this permission. If present, then this permission is an alias of, and equivalent to, the listed primary_permission. */
		primaryPermission: FormControl<string | null | undefined>,

		/** The current launch stage of the permission. */
		stage: FormControl<PermissionStage | null | undefined>,

		/** The title of this Permission. */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			apiDisabled: new FormControl<boolean | null | undefined>(undefined),
			customRolesSupportLevel: new FormControl<PermissionCustomRolesSupportLevel | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			onlyInPredefinedRoles: new FormControl<boolean | null | undefined>(undefined),
			primaryPermission: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<PermissionStage | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PermissionCustomRolesSupportLevel { SUPPORTED = 'SUPPORTED', TESTING = 'TESTING', NOT_SUPPORTED = 'NOT_SUPPORTED' }

	export enum PermissionStage { ALPHA = 'ALPHA', BETA = 'BETA', GA = 'GA', DEPRECATED = 'DEPRECATED' }


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


	/** A request to get the list of auditable services for a resource. */
	export interface QueryAuditableServicesRequest {

		/** Required. The full resource name to query from the list of auditable services. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`. */
		fullResourceName?: string | null;
	}

	/** A request to get the list of auditable services for a resource. */
	export interface QueryAuditableServicesRequestFormProperties {

		/** Required. The full resource name to query from the list of auditable services. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`. */
		fullResourceName: FormControl<string | null | undefined>,
	}
	export function CreateQueryAuditableServicesRequestFormGroup() {
		return new FormGroup<QueryAuditableServicesRequestFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing a list of auditable services for a resource. */
	export interface QueryAuditableServicesResponse {

		/** The auditable services for a resource. */
		services?: Array<AuditableService>;
	}

	/** A response containing a list of auditable services for a resource. */
	export interface QueryAuditableServicesResponseFormProperties {
	}
	export function CreateQueryAuditableServicesResponseFormGroup() {
		return new FormGroup<QueryAuditableServicesResponseFormProperties>({
		});

	}


	/** The grantable role query request. */
	export interface QueryGrantableRolesRequest {

		/** Required. The full resource name to query from the list of grantable roles. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`. */
		fullResourceName?: string | null;

		/** Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000. */
		pageSize?: number | null;

		/** Optional pagination token returned in an earlier QueryGrantableRolesResponse. */
		pageToken?: string | null;
		view?: QueryGrantableRolesRequestView | null;
	}

	/** The grantable role query request. */
	export interface QueryGrantableRolesRequestFormProperties {

		/** Required. The full resource name to query from the list of grantable roles. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`. */
		fullResourceName: FormControl<string | null | undefined>,

		/** Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000. */
		pageSize: FormControl<number | null | undefined>,

		/** Optional pagination token returned in an earlier QueryGrantableRolesResponse. */
		pageToken: FormControl<string | null | undefined>,
		view: FormControl<QueryGrantableRolesRequestView | null | undefined>,
	}
	export function CreateQueryGrantableRolesRequestFormGroup() {
		return new FormGroup<QueryGrantableRolesRequestFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			view: new FormControl<QueryGrantableRolesRequestView | null | undefined>(undefined),
		});

	}

	export enum QueryGrantableRolesRequestView { BASIC = 'BASIC', FULL = 'FULL' }


	/** The grantable role query response. */
	export interface QueryGrantableRolesResponse {

		/** To retrieve the next page of results, set `QueryGrantableRolesRequest.page_token` to this value. */
		nextPageToken?: string | null;

		/** The list of matching roles. */
		roles?: Array<Role>;
	}

	/** The grantable role query response. */
	export interface QueryGrantableRolesResponseFormProperties {

		/** To retrieve the next page of results, set `QueryGrantableRolesRequest.page_token` to this value. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryGrantableRolesResponseFormGroup() {
		return new FormGroup<QueryGrantableRolesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to get permissions which can be tested on a resource. */
	export interface QueryTestablePermissionsRequest {

		/** Required. The full resource name to query from the list of testable permissions. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`. */
		fullResourceName?: string | null;

		/** Optional limit on the number of permissions to include in the response. The default is 100, and the maximum is 1,000. */
		pageSize?: number | null;

		/** Optional pagination token returned in an earlier QueryTestablePermissionsRequest. */
		pageToken?: string | null;
	}

	/** A request to get permissions which can be tested on a resource. */
	export interface QueryTestablePermissionsRequestFormProperties {

		/** Required. The full resource name to query from the list of testable permissions. The name follows the Google Cloud Platform resource format. For example, a Cloud Platform project with id `my-project` will be named `//cloudresourcemanager.googleapis.com/projects/my-project`. */
		fullResourceName: FormControl<string | null | undefined>,

		/** Optional limit on the number of permissions to include in the response. The default is 100, and the maximum is 1,000. */
		pageSize: FormControl<number | null | undefined>,

		/** Optional pagination token returned in an earlier QueryTestablePermissionsRequest. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryTestablePermissionsRequestFormGroup() {
		return new FormGroup<QueryTestablePermissionsRequestFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response containing permissions which can be tested on a resource. */
	export interface QueryTestablePermissionsResponse {

		/** To retrieve the next page of results, set `QueryTestableRolesRequest.page_token` to this value. */
		nextPageToken?: string | null;

		/** The Permissions testable on the requested resource. */
		permissions?: Array<Permission>;
	}

	/** The response containing permissions which can be tested on a resource. */
	export interface QueryTestablePermissionsResponseFormProperties {

		/** To retrieve the next page of results, set `QueryTestableRolesRequest.page_token` to this value. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryTestablePermissionsResponseFormGroup() {
		return new FormGroup<QueryTestablePermissionsResponseFormProperties>({
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


	/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob request. */
	export interface SignBlobRequest {

		/** Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The bytes to sign. */
		bytesToSign?: string | null;
	}

	/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob request. */
	export interface SignBlobRequestFormProperties {

		/** Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The bytes to sign. */
		bytesToSign: FormControl<string | null | undefined>,
	}
	export function CreateSignBlobRequestFormGroup() {
		return new FormGroup<SignBlobRequestFormProperties>({
			bytesToSign: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob response. */
	export interface SignBlobResponse {

		/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The id of the key used to sign the blob. */
		keyId?: string | null;

		/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The signed blob. */
		signature?: string | null;
	}

	/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob response. */
	export interface SignBlobResponseFormProperties {

		/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The id of the key used to sign the blob. */
		keyId: FormControl<string | null | undefined>,

		/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The signed blob. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateSignBlobResponseFormGroup() {
		return new FormGroup<SignBlobResponseFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT request. */
	export interface SignJwtRequest {

		/** Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The JWT payload to sign. Must be a serialized JSON object that contains a JWT Claims Set. For example: `{"sub": "user@example.com", "iat": 313435}` If the JWT Claims Set contains an expiration time (`exp`) claim, it must be an integer timestamp that is not in the past and no more than 12 hours in the future. If the JWT Claims Set does not contain an expiration time (`exp`) claim, this claim is added automatically, with a timestamp that is 1 hour in the future. */
		payload?: string | null;
	}

	/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT request. */
	export interface SignJwtRequestFormProperties {

		/** Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The JWT payload to sign. Must be a serialized JSON object that contains a JWT Claims Set. For example: `{"sub": "user@example.com", "iat": 313435}` If the JWT Claims Set contains an expiration time (`exp`) claim, it must be an integer timestamp that is not in the past and no more than 12 hours in the future. If the JWT Claims Set does not contain an expiration time (`exp`) claim, this claim is added automatically, with a timestamp that is 1 hour in the future. */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateSignJwtRequestFormGroup() {
		return new FormGroup<SignJwtRequestFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT response. */
	export interface SignJwtResponse {

		/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The id of the key used to sign the JWT. */
		keyId?: string | null;

		/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The signed JWT. */
		signedJwt?: string | null;
	}

	/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT response. */
	export interface SignJwtResponseFormProperties {

		/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The id of the key used to sign the JWT. */
		keyId: FormControl<string | null | undefined>,

		/** Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The signed JWT. */
		signedJwt: FormControl<string | null | undefined>,
	}
	export function CreateSignJwtResponseFormGroup() {
		return new FormGroup<SignJwtResponseFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			signedJwt: new FormControl<string | null | undefined>(undefined),
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


	/** The request to undelete an existing role. */
	export interface UndeleteRoleRequest {

		/** Used to perform a consistent read-modify-write. */
		etag?: string | null;
	}

	/** The request to undelete an existing role. */
	export interface UndeleteRoleRequestFormProperties {

		/** Used to perform a consistent read-modify-write. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateUndeleteRoleRequestFormGroup() {
		return new FormGroup<UndeleteRoleRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The service account undelete request. */
	export interface UndeleteServiceAccountRequest {
	}

	/** The service account undelete request. */
	export interface UndeleteServiceAccountRequestFormProperties {
	}
	export function CreateUndeleteServiceAccountRequestFormGroup() {
		return new FormGroup<UndeleteServiceAccountRequestFormProperties>({
		});

	}

	export interface UndeleteServiceAccountResponse {

		/** An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service account. // */
		restoredAccount?: ServiceAccount;
	}
	export interface UndeleteServiceAccountResponseFormProperties {
	}
	export function CreateUndeleteServiceAccountResponseFormGroup() {
		return new FormGroup<UndeleteServiceAccountResponseFormProperties>({
		});

	}


	/** Request message for UndeleteWorkforcePoolProviderKey. */
	export interface UndeleteWorkforcePoolProviderKeyRequest {
	}

	/** Request message for UndeleteWorkforcePoolProviderKey. */
	export interface UndeleteWorkforcePoolProviderKeyRequestFormProperties {
	}
	export function CreateUndeleteWorkforcePoolProviderKeyRequestFormGroup() {
		return new FormGroup<UndeleteWorkforcePoolProviderKeyRequestFormProperties>({
		});

	}


	/** Request message for UndeleteWorkforcePoolProvider. */
	export interface UndeleteWorkforcePoolProviderRequest {
	}

	/** Request message for UndeleteWorkforcePoolProvider. */
	export interface UndeleteWorkforcePoolProviderRequestFormProperties {
	}
	export function CreateUndeleteWorkforcePoolProviderRequestFormGroup() {
		return new FormGroup<UndeleteWorkforcePoolProviderRequestFormProperties>({
		});

	}


	/** Request message for UndeleteWorkforcePool. */
	export interface UndeleteWorkforcePoolRequest {
	}

	/** Request message for UndeleteWorkforcePool. */
	export interface UndeleteWorkforcePoolRequestFormProperties {
	}
	export function CreateUndeleteWorkforcePoolRequestFormGroup() {
		return new FormGroup<UndeleteWorkforcePoolRequestFormProperties>({
		});

	}


	/** Request message for UndeleteWorkforcePoolSubject. */
	export interface UndeleteWorkforcePoolSubjectRequest {
	}

	/** Request message for UndeleteWorkforcePoolSubject. */
	export interface UndeleteWorkforcePoolSubjectRequestFormProperties {
	}
	export function CreateUndeleteWorkforcePoolSubjectRequestFormGroup() {
		return new FormGroup<UndeleteWorkforcePoolSubjectRequestFormProperties>({
		});

	}


	/** Request message for UndeleteWorkloadIdentityPoolProviderKey. */
	export interface UndeleteWorkloadIdentityPoolProviderKeyRequest {
	}

	/** Request message for UndeleteWorkloadIdentityPoolProviderKey. */
	export interface UndeleteWorkloadIdentityPoolProviderKeyRequestFormProperties {
	}
	export function CreateUndeleteWorkloadIdentityPoolProviderKeyRequestFormGroup() {
		return new FormGroup<UndeleteWorkloadIdentityPoolProviderKeyRequestFormProperties>({
		});

	}


	/** Request message for UndeleteWorkloadIdentityPoolProvider. */
	export interface UndeleteWorkloadIdentityPoolProviderRequest {
	}

	/** Request message for UndeleteWorkloadIdentityPoolProvider. */
	export interface UndeleteWorkloadIdentityPoolProviderRequestFormProperties {
	}
	export function CreateUndeleteWorkloadIdentityPoolProviderRequestFormGroup() {
		return new FormGroup<UndeleteWorkloadIdentityPoolProviderRequestFormProperties>({
		});

	}


	/** Request message for UndeleteWorkloadIdentityPool. */
	export interface UndeleteWorkloadIdentityPoolRequest {
	}

	/** Request message for UndeleteWorkloadIdentityPool. */
	export interface UndeleteWorkloadIdentityPoolRequestFormProperties {
	}
	export function CreateUndeleteWorkloadIdentityPoolRequestFormGroup() {
		return new FormGroup<UndeleteWorkloadIdentityPoolRequestFormProperties>({
		});

	}


	/** The service account key upload request. */
	export interface UploadServiceAccountKeyRequest {

		/** The public key to associate with the service account. Must be an RSA public key that is wrapped in an X.509 v3 certificate. Include the first line, `-----BEGIN CERTIFICATE-----`, and the last line, `-----END CERTIFICATE-----`. */
		publicKeyData?: string | null;
	}

	/** The service account key upload request. */
	export interface UploadServiceAccountKeyRequestFormProperties {

		/** The public key to associate with the service account. Must be an RSA public key that is wrapped in an X.509 v3 certificate. Include the first line, `-----BEGIN CERTIFICATE-----`, and the last line, `-----END CERTIFICATE-----`. */
		publicKeyData: FormControl<string | null | undefined>,
	}
	export function CreateUploadServiceAccountKeyRequestFormGroup() {
		return new FormGroup<UploadServiceAccountKeyRequestFormProperties>({
			publicKeyData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for long-running WorkloadIdentityPool operations. */
	export interface WorkloadIdentityPoolOperationMetadata {
	}

	/** Metadata for long-running WorkloadIdentityPool operations. */
	export interface WorkloadIdentityPoolOperationMetadataFormProperties {
	}
	export function CreateWorkloadIdentityPoolOperationMetadataFormGroup() {
		return new FormGroup<WorkloadIdentityPoolOperationMetadataFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lints, or validates, an IAM policy. Currently checks the google.iam.v1.Binding.condition field, which contains a condition expression for a role binding. Successful calls to this method always return an HTTP `200 OK` status code, even if the linter detects an issue in the IAM policy.
		 * Post v1/iamPolicies:lintPolicy
		 * @return {LintPolicyResponse} Successful response
		 */
		Iam_iamPolicies_lintPolicy(requestBody: LintPolicyRequest): Observable<LintPolicyResponse> {
			return this.http.post<LintPolicyResponse>(this.baseUri + 'v1/iamPolicies:lintPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of services that allow you to opt into audit logs that are not generated by default. To learn more about audit logs, see the [Logging documentation](https://cloud.google.com/logging/docs/audit).
		 * Post v1/iamPolicies:queryAuditableServices
		 * @return {QueryAuditableServicesResponse} Successful response
		 */
		Iam_iamPolicies_queryAuditableServices(requestBody: QueryAuditableServicesRequest): Observable<QueryAuditableServicesResponse> {
			return this.http.post<QueryAuditableServicesResponse>(this.baseUri + 'v1/iamPolicies:queryAuditableServices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists every permission that you can test on a resource. A permission is testable if you can check whether a principal has that permission on the resource.
		 * Post v1/permissions:queryTestablePermissions
		 * @return {QueryTestablePermissionsResponse} Successful response
		 */
		Iam_permissions_queryTestablePermissions(requestBody: QueryTestablePermissionsRequest): Observable<QueryTestablePermissionsResponse> {
			return this.http.post<QueryTestablePermissionsResponse>(this.baseUri + 'v1/permissions:queryTestablePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
		 * Get v1/roles
		 * @param {number} pageSize Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
		 * @param {string} pageToken Optional pagination token returned in an earlier ListRolesResponse.
		 * @param {string} parent The `parent` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`roles.list()`](https://cloud.google.com/iam/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [`projects.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [`organizations.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
		 * @param {boolean} showDeleted Include Roles that have been deleted.
		 * @param {QueryGrantableRolesRequestView} view Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
		 * @return {ListRolesResponse} Successful response
		 */
		Iam_roles_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined, showDeleted: boolean | null | undefined, view: QueryGrantableRolesRequestView | null | undefined): Observable<ListRolesResponse> {
			return this.http.get<ListRolesResponse>(this.baseUri + 'v1/roles?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&showDeleted=' + showDeleted + '&view=' + view, {});
		}

		/**
		 * Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role.
		 * Post v1/roles:queryGrantableRoles
		 * @return {QueryGrantableRolesResponse} Successful response
		 */
		Iam_roles_queryGrantableRoles(requestBody: QueryGrantableRolesRequest): Observable<QueryGrantableRolesResponse> {
			return this.http.post<QueryGrantableRolesResponse>(this.baseUri + 'v1/roles:queryGrantableRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all non-deleted WorkforcePools under the specified parent. If `show_deleted` is set to `true`, then deleted pools are also listed.
		 * Get v1/{location}/workforcePools
		 * @param {string} location The location of the pool. Format: `locations/{location}`.
		 * @param {number} pageSize The maximum number of pools to return. If unspecified, at most 50 pools will be returned. The maximum value is 1000; values above 1000 are truncated to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListWorkforcePools` call. Provide this to retrieve the subsequent page.
		 * @param {string} parent Required. The parent resource to list pools for. Format: `organizations/{org-id}`.
		 * @param {boolean} showDeleted Whether to return soft-deleted pools.
		 * @return {ListWorkforcePoolsResponse} Successful response
		 */
		Iam_locations_workforcePools_list(location: string, pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListWorkforcePoolsResponse> {
			return this.http.get<ListWorkforcePoolsResponse>(this.baseUri + 'v1/' + (location == null ? '' : encodeURIComponent(location)) + '/workforcePools&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates a new WorkforcePool. You cannot reuse the name of a deleted pool until 30 days after deletion.
		 * Post v1/{location}/workforcePools
		 * @param {string} location The location of the pool to create. Format: `locations/{location}`.
		 * @param {string} workforcePoolId The ID to use for the pool, which becomes the final component of the resource name. The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen. The prefix `gcp-` is reserved for use by Google, and may not be specified.
		 * @return {Operation} Successful response
		 */
		Iam_locations_workforcePools_create(location: string, workforcePoolId: string | null | undefined, requestBody: WorkforcePool): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (location == null ? '' : encodeURIComponent(location)) + '/workforcePools&workforcePoolId=' + (workforcePoolId == null ? '' : encodeURIComponent(workforcePoolId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a ServiceAccountKey. Deleting a service account key does not revoke short-lived credentials that have been issued based on the service account key.
		 * Delete v1/{name}
		 * @param {string} name Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @param {string} etag Used to perform a consistent read-modify-write.
		 * @return {Empty} Successful response
		 */
		Iam_projects_serviceAccounts_keys_delete(name: string, etag: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)), {});
		}

		/**
		 * Gets the definition of a Role.
		 * Get v1/{name}
		 * @param {string} name The `name` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below: * [`roles.get()`](https://cloud.google.com/iam/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`. This method returns results from all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles/{ROLE_NAME}` * [`projects.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/get): `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the project level. Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}` * [`organizations.roles.get()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/get): `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles) that have been created at the organization level. Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
		 * @param {Iam_roles_getPublicKeyType} publicKeyType Optional. The output format of the public key. The default is `TYPE_NONE`, which means that the public key is not returned.
		 * @return {Role} Successful response
		 */
		Iam_roles_get(name: string, publicKeyType: Iam_roles_getPublicKeyType | null | undefined): Observable<Role> {
			return this.http.get<Role>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&publicKeyType=' + publicKeyType, {});
		}

		/**
		 * Patches a ServiceAccount.
		 * Patch v1/{name}
		 * @param {string} name The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @param {string} updateMask A mask describing which fields in the Role have changed.
		 * @return {ServiceAccount} Successful response
		 */
		Iam_projects_serviceAccounts_patch(name: string, updateMask: string | null | undefined, requestBody: PatchServiceAccountRequest): Observable<ServiceAccount> {
			return this.http.patch<ServiceAccount>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * **Note:** We are in the process of deprecating this method. Use PatchServiceAccount instead. Updates a ServiceAccount. You can update only the `display_name` field.
		 * Put v1/{name}
		 * @param {string} name The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @return {ServiceAccount} Successful response
		 */
		Iam_projects_serviceAccounts_update(name: string, requestBody: ServiceAccount): Observable<ServiceAccount> {
			return this.http.put<ServiceAccount>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists every ServiceAccountKey for a service account.
		 * Get v1/{name}/keys
		 * @param {string} name Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @param {Array<ServiceAccountKeyKeyType>} keyTypes Filters the types of keys the user wants to include in the list response. Duplicate key types are not allowed. If no key type is provided, all keys are returned.
		 * @return {ListServiceAccountKeysResponse} Successful response
		 */
		Iam_projects_serviceAccounts_keys_list(name: string, keyTypes: Array<ServiceAccountKeyKeyType> | null | undefined): Observable<ListServiceAccountKeysResponse> {
			return this.http.get<ListServiceAccountKeysResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/keys&' + keyTypes?.map(z => `keyTypes=${z}`).join('&'), {});
		}

		/**
		 * Creates a ServiceAccountKey.
		 * Post v1/{name}/keys
		 * @param {string} name Required. The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @return {ServiceAccountKey} Successful response
		 */
		Iam_projects_serviceAccounts_keys_create(name: string, requestBody: CreateServiceAccountKeyRequest): Observable<ServiceAccountKey> {
			return this.http.post<ServiceAccountKey>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Uploads the public key portion of a key pair that you manage, and associates the public key with a ServiceAccount. After you upload the public key, you can use the private key from the key pair as a service account key.
		 * Post v1/{name}/keys:upload
		 * @param {string} name The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @return {ServiceAccountKey} Successful response
		 */
		Iam_projects_serviceAccounts_keys_upload(name: string, requestBody: UploadServiceAccountKeyRequest): Observable<ServiceAccountKey> {
			return this.http.post<ServiceAccountKey>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/keys:upload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists every ServiceAccount that belongs to a specific project.
		 * Get v1/{name}/serviceAccounts
		 * @param {string} name Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
		 * @param {number} pageSize Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the ListServiceAccountsResponse.next_page_token in a subsequent request. The default is 20, and the maximum is 100.
		 * @param {string} pageToken Optional pagination token returned in an earlier ListServiceAccountsResponse.next_page_token.
		 * @return {ListServiceAccountsResponse} Successful response
		 */
		Iam_projects_serviceAccounts_list(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServiceAccountsResponse> {
			return this.http.get<ListServiceAccountsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/serviceAccounts&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a ServiceAccount.
		 * Post v1/{name}/serviceAccounts
		 * @param {string} name Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
		 * @return {ServiceAccount} Successful response
		 */
		Iam_projects_serviceAccounts_create(name: string, requestBody: CreateServiceAccountRequest): Observable<ServiceAccount> {
			return this.http.post<ServiceAccount>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/serviceAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a ServiceAccountKey. A disabled service account key can be re-enabled with EnableServiceAccountKey.
		 * Post v1/{name}:disable
		 * @param {string} name Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @return {Empty} Successful response
		 */
		Iam_projects_serviceAccounts_keys_disable(name: string, requestBody: DisableServiceAccountKeyRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable a ServiceAccountKey.
		 * Post v1/{name}:enable
		 * @param {string} name Required. The resource name of the service account key. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}/keys/{KEY_ID}` * `projects/-/serviceAccounts/{UNIQUE_ID}/keys/{KEY_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account key `projects/-/serviceAccounts/fake@example.com/keys/fake-key`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @return {Empty} Successful response
		 */
		Iam_projects_serviceAccounts_keys_enable(name: string, requestBody: EnableServiceAccountKeyRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * **Note:** This method is deprecated. Use the [`signBlob`](https://cloud.google.com/iam/help/rest-credentials/v1/projects.serviceAccounts/signBlob) method in the IAM Service Account Credentials API instead. If you currently use this method, see the [migration guide](https://cloud.google.com/iam/help/credentials/migrate-api) for instructions. Signs a blob using the system-managed private key for a ServiceAccount.
		 * Post v1/{name}:signBlob
		 * @param {string} name Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @return {SignBlobResponse} Successful response
		 */
		Iam_projects_serviceAccounts_signBlob(name: string, requestBody: SignBlobRequest): Observable<SignBlobResponse> {
			return this.http.post<SignBlobResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':signBlob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * **Note:** This method is deprecated. Use the [`signJwt`](https://cloud.google.com/iam/help/rest-credentials/v1/projects.serviceAccounts/signJwt) method in the IAM Service Account Credentials API instead. If you currently use this method, see the [migration guide](https://cloud.google.com/iam/help/credentials/migrate-api) for instructions. Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount.
		 * Post v1/{name}:signJwt
		 * @param {string} name Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @return {SignJwtResponse} Successful response
		 */
		Iam_projects_serviceAccounts_signJwt(name: string, requestBody: SignJwtRequest): Observable<SignJwtResponse> {
			return this.http.post<SignJwtResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':signJwt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a deleted ServiceAccount. **Important:** It is not always possible to restore a deleted service account. Use this method only as a last resort. After you delete a service account, IAM permanently removes the service account 30 days later. There is no way to restore a deleted service account that has been permanently removed.
		 * Post v1/{name}:undelete
		 * @param {string} name The resource name of the service account. Use one of the following formats: * `projects/{PROJECT_ID}/serviceAccounts/{EMAIL_ADDRESS}` * `projects/{PROJECT_ID}/serviceAccounts/{UNIQUE_ID}` As an alternative, you can use the `-` wildcard character instead of the project ID: * `projects/-/serviceAccounts/{EMAIL_ADDRESS}` * `projects/-/serviceAccounts/{UNIQUE_ID}` When possible, avoid using the `-` wildcard character, because it can cause response messages to contain misleading error codes. For example, if you try to access the service account `projects/-/serviceAccounts/fake@example.com`, which does not exist, the response contains an HTTP `403 Forbidden` error instead of a `404 Not Found` error.
		 * @return {UndeleteServiceAccountResponse} Successful response
		 */
		Iam_projects_serviceAccounts_undelete(name: string, requestBody: UndeleteServiceAccountRequest): Observable<UndeleteServiceAccountResponse> {
			return this.http.post<UndeleteServiceAccountResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all non-deleted WorkloadIdentityPoolProviderKeys in a project. If show_deleted is set to `true`, then deleted pools are also listed.
		 * Get v1/{parent}/keys
		 * @param {string} parent Required. The parent provider resource to list encryption keys for.
		 * @param {number} pageSize The maximum number of keys to return. If unspecified, all keys are returned. The maximum value is 10; values above 10 are truncated to 10.
		 * @param {string} pageToken A page token, received from a previous `ListWorkloadIdentityPoolProviderKeys` call. Provide this to retrieve the subsequent page.
		 * @param {boolean} showDeleted Whether to return soft deleted resources as well.
		 * @return {ListWorkloadIdentityPoolProviderKeysResponse} Successful response
		 */
		Iam_projects_locations_workloadIdentityPools_providers_keys_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListWorkloadIdentityPoolProviderKeysResponse> {
			return this.http.get<ListWorkloadIdentityPoolProviderKeysResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keys&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Create a new WorkloadIdentityPoolProviderKey in a WorkloadIdentityPoolProvider.
		 * Post v1/{parent}/keys
		 * @param {string} parent Required. The parent provider resource to create the key in.
		 * @param {string} workloadIdentityPoolProviderKeyId Required. The ID to use for the key, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-].
		 * @return {Operation} Successful response
		 */
		Iam_projects_locations_workloadIdentityPools_providers_keys_create(parent: string, workloadIdentityPoolProviderKeyId: string | null | undefined, requestBody: WorkloadIdentityPoolProviderKey): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keys&workloadIdentityPoolProviderKeyId=' + (workloadIdentityPoolProviderKeyId == null ? '' : encodeURIComponent(workloadIdentityPoolProviderKeyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all non-deleted WorkloadIdentityPoolProviders in a WorkloadIdentityPool. If `show_deleted` is set to `true`, then deleted providers are also listed.
		 * Get v1/{parent}/providers
		 * @param {string} parent Required. The pool to list providers for.
		 * @param {number} pageSize The maximum number of providers to return. If unspecified, at most 50 providers are returned. The maximum value is 100; values above 100 are truncated to 100.
		 * @param {string} pageToken A page token, received from a previous `ListWorkloadIdentityPoolProviders` call. Provide this to retrieve the subsequent page.
		 * @param {boolean} showDeleted Whether to return soft-deleted providers.
		 * @return {ListWorkloadIdentityPoolProvidersResponse} Successful response
		 */
		Iam_projects_locations_workloadIdentityPools_providers_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListWorkloadIdentityPoolProvidersResponse> {
			return this.http.get<ListWorkloadIdentityPoolProvidersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/providers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool. You cannot reuse the name of a deleted provider until 30 days after deletion.
		 * Post v1/{parent}/providers
		 * @param {string} parent Required. The pool to create this provider in.
		 * @param {string} workloadIdentityPoolProviderId Required. The ID for the provider, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
		 * @return {Operation} Successful response
		 */
		Iam_projects_locations_workloadIdentityPools_providers_create(parent: string, workloadIdentityPoolProviderId: string | null | undefined, requestBody: WorkloadIdentityPoolProvider): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/providers&workloadIdentityPoolProviderId=' + (workloadIdentityPoolProviderId == null ? '' : encodeURIComponent(workloadIdentityPoolProviderId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
		 * Get v1/{parent}/roles
		 * @param {string} parent The `parent` parameter's value depends on the target resource for the request, namely [`roles`](https://cloud.google.com/iam/reference/rest/v1/roles), [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles), or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`roles.list()`](https://cloud.google.com/iam/reference/rest/v1/roles/list): An empty string. This method doesn't require a resource; it simply returns all [predefined roles](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) in Cloud IAM. Example request URL: `https://iam.googleapis.com/v1/roles` * [`projects.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/list): `projects/{PROJECT_ID}`. This method lists all project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [`organizations.roles.list()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/list): `organizations/{ORGANIZATION_ID}`. This method lists all organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
		 * @param {number} pageSize Optional limit on the number of roles to include in the response. The default is 300, and the maximum is 1,000.
		 * @param {string} pageToken Optional pagination token returned in an earlier ListRolesResponse.
		 * @param {boolean} showDeleted Include Roles that have been deleted.
		 * @param {QueryGrantableRolesRequestView} view Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
		 * @return {ListRolesResponse} Successful response
		 */
		Iam_projects_roles_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, view: QueryGrantableRolesRequestView | null | undefined): Observable<ListRolesResponse> {
			return this.http.get<ListRolesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/roles&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&view=' + view, {});
		}

		/**
		 * Creates a new custom Role.
		 * Post v1/{parent}/roles
		 * @param {string} parent The `parent` parameter's value depends on the target resource for the request, namely [`projects`](https://cloud.google.com/iam/reference/rest/v1/projects.roles) or [`organizations`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below: * [`projects.roles.create()`](https://cloud.google.com/iam/reference/rest/v1/projects.roles/create): `projects/{PROJECT_ID}`. This method creates project-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles` * [`organizations.roles.create()`](https://cloud.google.com/iam/reference/rest/v1/organizations.roles/create): `organizations/{ORGANIZATION_ID}`. This method creates organization-level [custom roles](https://cloud.google.com/iam/docs/understanding-custom-roles). Example request URL: `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles` Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
		 * @return {Role} Successful response
		 */
		Iam_projects_roles_create(parent: string, requestBody: CreateRoleRequest): Observable<Role> {
			return this.http.post<Role>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/roles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all non-deleted WorkloadIdentityPools in a project. If `show_deleted` is set to `true`, then deleted pools are also listed.
		 * Get v1/{parent}/workloadIdentityPools
		 * @param {string} parent Required. The parent resource to list pools for.
		 * @param {number} pageSize The maximum number of pools to return. If unspecified, at most 50 pools are returned. The maximum value is 1000; values above are 1000 truncated to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListWorkloadIdentityPools` call. Provide this to retrieve the subsequent page.
		 * @param {boolean} showDeleted Whether to return soft-deleted pools.
		 * @return {ListWorkloadIdentityPoolsResponse} Successful response
		 */
		Iam_projects_locations_workloadIdentityPools_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListWorkloadIdentityPoolsResponse> {
			return this.http.get<ListWorkloadIdentityPoolsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workloadIdentityPools&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates a new WorkloadIdentityPool. You cannot reuse the name of a deleted pool until 30 days after deletion.
		 * Post v1/{parent}/workloadIdentityPools
		 * @param {string} parent Required. The parent resource to create the pool in. The only supported location is `global`.
		 * @param {string} workloadIdentityPoolId Required. The ID to use for the pool, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified.
		 * @return {Operation} Successful response
		 */
		Iam_projects_locations_workloadIdentityPools_create(parent: string, workloadIdentityPoolId: string | null | undefined, requestBody: WorkloadIdentityPool): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workloadIdentityPools&workloadIdentityPoolId=' + (workloadIdentityPoolId == null ? '' : encodeURIComponent(workloadIdentityPoolId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the IAM policy that is attached to a ServiceAccount. This IAM policy specifies which principals have access to the service account. This method does not tell you whether the service account has been granted any roles on other resources. To check whether a service account has role grants on a resource, use the `getIamPolicy` method for that resource. For example, to view the role grants for a project, call the Resource Manager API's [`projects.getIamPolicy`](https://cloud.google.com/resource-manager/reference/rest/v1/projects/getIamPolicy) method.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Iam_projects_serviceAccounts_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the IAM policy that is attached to a ServiceAccount. Use this method to grant or revoke access to the service account. For example, you could grant a principal the ability to impersonate the service account. This method does not enable the service account to access other resources. To grant roles to a service account on a resource, follow these steps: 1. Call the resource's `getIamPolicy` method to get its current IAM policy. 2. Edit the policy so that it binds the service account to an IAM role for the resource. 3. Call the resource's `setIamPolicy` method to update its IAM policy. For detailed instructions, see [Manage access to project, folders, and organizations](https://cloud.google.com/iam/help/service-accounts/granting-access-to-service-accounts) or [Manage access to other resources](https://cloud.google.com/iam/help/access/manage-other-resources).
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Iam_projects_serviceAccounts_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests whether the caller has the specified permissions on a ServiceAccount.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Iam_projects_serviceAccounts_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Iam_roles_getPublicKeyType { TYPE_NONE = 'TYPE_NONE', TYPE_X509_PEM_FILE = 'TYPE_X509_PEM_FILE', TYPE_RAW_PUBLIC_KEY = 'TYPE_RAW_PUBLIC_KEY' }

}

