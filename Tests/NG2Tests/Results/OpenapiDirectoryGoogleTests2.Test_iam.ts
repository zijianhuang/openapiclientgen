import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Audit log information specific to Cloud IAM admin APIs. This message is
	 * serialized as an `Any` type in the `ServiceData` message of an
	 * `AuditLog` message.
	 */
	export interface AdminAuditData {

		/**
		 * A PermissionDelta message to record the added_permissions and
		 * removed_permissions inside a role.
		 */
		permissionDelta?: PermissionDelta | null;
	}


	/**
	 * A PermissionDelta message to record the added_permissions and
	 * removed_permissions inside a role.
	 */
	export interface PermissionDelta {

		/** Added permissions. */
		addedPermissions?: Array<string> | null;

		/** Removed permissions. */
		removedPermissions?: Array<string> | null;
	}


	/**
	 * Specifies the audit configuration for a service.
	 * The configuration determines which permission types are logged, and what
	 * identities, if any, are exempted from logging.
	 * An AuditConfig must have one or more AuditLogConfigs.
	 * If there are AuditConfigs for both `allServices` and a specific service,
	 * the union of the two AuditConfigs is used for that service: the log_types
	 * specified in each AuditConfig are enabled, and the exempted_members in each
	 * AuditLogConfig are exempted.
	 * Example Policy with multiple AuditConfigs:
	 *     {
	 *       "audit_configs": [
	 *         {
	 *           "service": "allServices"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *               "exempted_members": [
	 *                 "user:jose@example.com"
	 *               ]
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *             },
	 *             {
	 *               "log_type": "ADMIN_READ",
	 *             }
	 *           ]
	 *         },
	 *         {
	 *           "service": "sampleservice.googleapis.com"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *               "exempted_members": [
	 *                 "user:aliya@example.com"
	 *               ]
	 *             }
	 *           ]
	 *         }
	 *       ]
	 *     }
	 * For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
	 * logging. It also exempts jose@example.com from DATA_READ logging, and
	 * aliya@example.com from DATA_WRITE logging.
	 */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig> | null;

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service?: string | null;
	}


	/**
	 * Provides the configuration for logging a type of permissions.
	 * Example:
	 *     {
	 *       "audit_log_configs": [
	 *         {
	 *           "log_type": "DATA_READ",
	 *           "exempted_members": [
	 *             "user:jose@example.com"
	 *           ]
	 *         },
	 *         {
	 *           "log_type": "DATA_WRITE",
	 *         }
	 *       ]
	 *     }
	 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
	 * jose@example.com from DATA_READ logging.
	 */
	export interface AuditLogConfig {

		/**
		 * Specifies the identities that do not cause logging for this type of
		 * permission.
		 * Follows the same format of Binding.members.
		 */
		exemptedMembers?: Array<string> | null;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/**
	 * Audit log information specific to Cloud IAM. This message is serialized
	 * as an `Any` type in the `ServiceData` message of an
	 * `AuditLog` message.
	 */
	export interface AuditData {

		/** The difference delta between two policies. */
		policyDelta?: PolicyDelta | null;
	}


	/** The difference delta between two policies. */
	export interface PolicyDelta {

		/** The delta for Bindings between two policies. */
		bindingDeltas?: Array<BindingDelta> | null;
	}


	/**
	 * One delta entry for Binding. Each individual change (only one member in each
	 * entry) to a binding will be a separate entry.
	 */
	export interface BindingDelta {

		/**
		 * The action that was performed on a Binding.
		 * Required
		 */
		action?: BindingDeltaAction | null;

		/**
		 * Represents a textual expression in the Common Expression Language (CEL)
		 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
		 * are documented at https://github.com/google/cel-spec.
		 * Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression
		 * are determined by the service that evaluates it. See the service
		 * documentation for additional information.
		 */
		condition?: Expr | null;

		/**
		 * A single identity requesting access for a Cloud Platform resource.
		 * Follows the same format of Binding.members.
		 * Required
		 */
		member?: string | null;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 * Required
		 */
		role?: string | null;
	}

	export enum BindingDeltaAction { ACTION_UNSPECIFIED = 0, ADD = 1, REMOVE = 2 }


	/**
	 * Represents a textual expression in the Common Expression Language (CEL)
	 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
	 * are documented at https://github.com/google/cel-spec.
	 * Example (Comparison):
	 *     title: "Summary size limit"
	 *     description: "Determines if a summary is less than 100 chars"
	 *     expression: "document.summary.size() < 100"
	 * Example (Equality):
	 *     title: "Requestor is owner"
	 *     description: "Determines if requestor is the document owner"
	 *     expression: "document.owner == request.auth.claims.email"
	 * Example (Logic):
	 *     title: "Public documents"
	 *     description: "Determine whether the document should be publicly visible"
	 *     expression: "document.type != 'private' && document.type != 'internal'"
	 * Example (Data Manipulation):
	 *     title: "Notification string"
	 *     description: "Create a notification string with a timestamp."
	 *     expression: "'New message received at ' + string(document.create_time)"
	 * The exact variables and functions that may be referenced within an expression
	 * are determined by the service that evaluates it. See the service
	 * documentation for additional information.
	 */
	export interface Expr {

		/**
		 * Optional. Description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description?: string | null;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string | null;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string | null;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string | null;
	}


	/** Contains information about an auditable service. */
	export interface AuditableService {

		/**
		 * Public name of the service.
		 * For example, the service name for Cloud IAM is 'iam.googleapis.com'.
		 */
		name?: string | null;
	}


	/** Associates `members` with a `role`. */
	export interface Binding {

		/**
		 * Represents a textual expression in the Common Expression Language (CEL)
		 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
		 * are documented at https://github.com/google/cel-spec.
		 * Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression
		 * are determined by the service that evaluates it. See the service
		 * documentation for additional information.
		 */
		condition?: Expr | null;

		/**
		 * Specifies the identities requesting access for a Cloud Platform resource.
		 * `members` can have the following values:
		 * * `allUsers`: A special identifier that represents anyone who is
		 * on the internet; with or without a Google account.
		 * * `allAuthenticatedUsers`: A special identifier that represents anyone
		 * who is authenticated with a Google account or a service account.
		 * * `user:{emailid}`: An email address that represents a specific Google
		 * account. For example, `alice@example.com` .
		 * * `serviceAccount:{emailid}`: An email address that represents a service
		 * account. For example, `my-other-app@appspot.gserviceaccount.com`.
		 * * `group:{emailid}`: An email address that represents a Google group.
		 * For example, `admins@example.com`.
		 * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a user that has been recently deleted. For
		 * example, `alice@example.com?uid=123456789012345678901`. If the user is
		 * recovered, this value reverts to `user:{emailid}` and the recovered user
		 * retains the role in the binding.
		 * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
		 * unique identifier) representing a service account that has been recently
		 * deleted. For example,
		 * `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
		 * If the service account is undeleted, this value reverts to
		 * `serviceAccount:{emailid}` and the undeleted service account retains the
		 * role in the binding.
		 * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a Google group that has been recently
		 * deleted. For example, `admins@example.com?uid=123456789012345678901`. If
		 * the group is recovered, this value reverts to `group:{emailid}` and the
		 * recovered group retains the role in the binding.
		 * * `domain:{domain}`: The G Suite domain (primary) that represents all the
		 * users of that domain. For example, `google.com` or `example.com`.
		 */
		members?: Array<string> | null;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string | null;
	}


	/** The request to create a new role. */
	export interface CreateRoleRequest {

		/** A role in the Identity and Access Management API. */
		role?: Role | null;

		/** The role ID to use for this role. */
		roleId?: string | null;
	}


	/** A role in the Identity and Access Management API. */
	export interface Role {

		/**
		 * The current deleted state of the role. This field is read only.
		 * It will be ignored in calls to CreateRole and UpdateRole.
		 */
		deleted?: boolean | null;

		/** Optional. A human-readable description for the role. */
		description?: string | null;

		/** Used to perform a consistent read-modify-write. */
		etag?: string | null;

		/** The names of the permissions this role grants when bound in an IAM policy. */
		includedPermissions?: Array<string> | null;

		/**
		 * The name of the role.
		 * When Role is used in CreateRole, the role name must not be set.
		 * When Role is used in output and other input such as UpdateRole, the role
		 * name is the complete path, e.g., roles/logging.viewer for predefined roles
		 * and organizations/{ORGANIZATION_ID}/roles/logging.viewer for custom roles.
		 */
		name?: string | null;

		/**
		 * The current launch stage of the role. If the `ALPHA` launch stage has been
		 * selected for a role, the `stage` field will not be included in the
		 * returned definition for the role.
		 */
		stage?: RoleStage | null;

		/**
		 * Optional. A human-readable title for the role.  Typically this
		 * is limited to 100 UTF-8 bytes.
		 */
		title?: string | null;
	}

	export enum RoleStage { ALPHA = 0, BETA = 1, GA = 2, DEPRECATED = 3, DISABLED = 4, EAP = 5 }


	/** The service account key create request. */
	export interface CreateServiceAccountKeyRequest {

		/**
		 * Which type of key and algorithm to use for the key.
		 * The default is currently a 2K RSA key.  However this may change in the
		 * future.
		 */
		keyAlgorithm?: CreateServiceAccountKeyRequestKeyAlgorithm | null;

		/**
		 * The output format of the private key. The default value is
		 * `TYPE_GOOGLE_CREDENTIALS_FILE`, which is the Google Credentials File
		 * format.
		 */
		privateKeyType?: CreateServiceAccountKeyRequestPrivateKeyType | null;
	}

	export enum CreateServiceAccountKeyRequestKeyAlgorithm { KEY_ALG_UNSPECIFIED = 0, KEY_ALG_RSA_1024 = 1, KEY_ALG_RSA_2048 = 2 }

	export enum CreateServiceAccountKeyRequestPrivateKeyType { TYPE_UNSPECIFIED = 0, TYPE_PKCS12_FILE = 1, TYPE_GOOGLE_CREDENTIALS_FILE = 2 }


	/** The service account create request. */
	export interface CreateServiceAccountRequest {

		/**
		 * Required. The account id that is used to generate the service account
		 * email address and a stable unique id. It is unique within a project,
		 * must be 6-30 characters long, and match the regular expression
		 * `[a-z]([-a-z0-9]*[a-z0-9])` to comply with RFC1035.
		 */
		accountId?: string | null;

		/**
		 * A service account in the Identity and Access Management API.
		 * To create a service account, specify the `project_id` and the `account_id`
		 * for the account.  The `account_id` is unique within the project, and is used
		 * to generate the service account email address and a stable
		 * `unique_id`.
		 * If the account already exists, the account's resource name is returned
		 * in the format of projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}. The caller
		 * can use the name in other methods to access the account.
		 * All other methods can identify the service account using the format
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
		 * the account. The `ACCOUNT` value can be the `email` address or the
		 * `unique_id` of the service account.
		 */
		serviceAccount?: ServiceAccount | null;
	}


	/**
	 * A service account in the Identity and Access Management API.
	 * To create a service account, specify the `project_id` and the `account_id`
	 * for the account.  The `account_id` is unique within the project, and is used
	 * to generate the service account email address and a stable
	 * `unique_id`.
	 * If the account already exists, the account's resource name is returned
	 * in the format of projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}. The caller
	 * can use the name in other methods to access the account.
	 * All other methods can identify the service account using the format
	 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
	 * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
	 * the account. The `ACCOUNT` value can be the `email` address or the
	 * `unique_id` of the service account.
	 */
	export interface ServiceAccount {

		/**
		 * Optional. A user-specified opaque description of the service account.
		 * Must be less than or equal to 256 UTF-8 bytes.
		 */
		description?: string | null;

		/**
		 * @OutputOnly A bool indicate if the service account is disabled.
		 * The field is currently in alpha phase.
		 */
		disabled?: boolean | null;

		/**
		 * Optional. A user-specified name for the service account.
		 * Must be less than or equal to 100 UTF-8 bytes.
		 */
		displayName?: string | null;

		/** @OutputOnly The email address of the service account. */
		email?: string | null;

		/**
		 * Optional. Note: `etag` is an inoperable legacy field that is only returned
		 * for backwards compatibility.
		 */
		etag?: string | null;

		/**
		 * The resource name of the service account in the following format:
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Requests using `-` as a wildcard for the `PROJECT_ID` will infer the
		 * project from the `account` and the `ACCOUNT` value can be the `email`
		 * address or the `unique_id` of the service account.
		 * In responses the resource name will always be in the format
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 */
		name?: string | null;

		/**
		 * @OutputOnly The OAuth2 client id for the service account.
		 * This is used in conjunction with the OAuth2 clientconfig API to make
		 * three legged OAuth2 (3LO) flows to access the data of Google users.
		 */
		oauth2ClientId?: string | null;

		/** @OutputOnly The id of the project that owns the service account. */
		projectId?: string | null;

		/** @OutputOnly The unique and stable id of the service account. */
		uniqueId?: string | null;
	}


	/** The service account disable request. */
	export interface DisableServiceAccountRequest {
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** The service account enable request. */
	export interface EnableServiceAccountRequest {
	}


	/** The request to lint a Cloud IAM policy object. */
	export interface LintPolicyRequest {

		/**
		 * Represents a textual expression in the Common Expression Language (CEL)
		 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
		 * are documented at https://github.com/google/cel-spec.
		 * Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression
		 * are determined by the service that evaluates it. See the service
		 * documentation for additional information.
		 */
		condition?: Expr | null;

		/**
		 * The full resource name of the policy this lint request is about.
		 * The name follows the Google Cloud Platform (GCP) resource format.
		 * For example, a GCP project with ID `my-project` will be named
		 * `//cloudresourcemanager.googleapis.com/projects/my-project`.
		 * The resource name is not used to read the policy instance from the Cloud
		 * IAM database. The candidate policy for lint has to be provided in the same
		 * request object.
		 */
		fullResourceName?: string | null;
	}


	/**
	 * The response of a lint operation. An empty response indicates
	 * the operation was able to fully execute and no lint issue was found.
	 */
	export interface LintPolicyResponse {

		/** List of lint results sorted by `severity` in descending order. */
		lintResults?: Array<LintResult> | null;
	}


	/** Structured response of a single validation unit. */
	export interface LintResult {

		/** Human readable debug message associated with the issue. */
		debugMessage?: string | null;

		/**
		 * The name of the field for which this lint result is about.
		 * For nested messages `field_name` consists of names of the embedded fields
		 * separated by period character. The top-level qualifier is the input object
		 * to lint in the request. For example, the `field_name` value
		 * `condition.expression` identifies a lint result for the `expression` field
		 * of the provided condition.
		 */
		fieldName?: string | null;

		/** The validation unit level. */
		level?: LintResultLevel | null;

		/**
		 * 0-based character position of problematic construct within the object
		 * identified by `field_name`. Currently, this is populated only for condition
		 * expression.
		 */
		locationOffset?: number | null;

		/** The validation unit severity. */
		severity?: LintResultSeverity | null;

		/**
		 * The validation unit name, for instance
		 * "lintValidationUnits/ConditionComplexityCheck".
		 */
		validationUnitName?: string | null;
	}

	export enum LintResultLevel { LEVEL_UNSPECIFIED = 0, CONDITION = 1 }

	export enum LintResultSeverity { SEVERITY_UNSPECIFIED = 0, ERROR = 1, WARNING = 2, NOTICE = 3, INFO = 4, DEPRECATED = 5 }


	/** The response containing the roles defined under a resource. */
	export interface ListRolesResponse {

		/**
		 * To retrieve the next page of results, set
		 * `ListRolesRequest.page_token` to this value.
		 */
		nextPageToken?: string | null;

		/** The Roles defined on this resource. */
		roles?: Array<Role> | null;
	}


	/** The service account keys list response. */
	export interface ListServiceAccountKeysResponse {

		/** The public keys for the service account. */
		keys?: Array<ServiceAccountKey> | null;
	}


	/**
	 * Represents a service account key.
	 * A service account has two sets of key-pairs: user-managed, and
	 * system-managed.
	 * User-managed key-pairs can be created and deleted by users.  Users are
	 * responsible for rotating these keys periodically to ensure security of
	 * their service accounts.  Users retain the private key of these key-pairs,
	 * and Google retains ONLY the public key.
	 * System-managed keys are automatically rotated by Google, and are used for
	 * signing for a maximum of two weeks. The rotation process is probabilistic,
	 * and usage of the new key will gradually ramp up and down over the key's
	 * lifetime. We recommend caching the public key set for a service account for
	 * no more than 24 hours to ensure you have access to the latest keys.
	 * Public keys for all service accounts are also published at the OAuth2
	 * Service Account API.
	 */
	export interface ServiceAccountKey {

		/** Specifies the algorithm (and possibly key size) for the key. */
		keyAlgorithm?: CreateServiceAccountKeyRequestKeyAlgorithm | null;

		/** The key origin. */
		keyOrigin?: ServiceAccountKeyKeyOrigin | null;

		/** The key type. */
		keyType?: ServiceAccountKeyKeyType | null;

		/**
		 * The resource name of the service account key in the following format
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}`.
		 */
		name?: string | null;

		/**
		 * The private key data. Only provided in `CreateServiceAccountKey`
		 * responses. Make sure to keep the private key data secure because it
		 * allows for the assertion of the service account identity.
		 * When base64 decoded, the private key data can be used to authenticate with
		 * Google API client libraries and with
		 * <a href="/sdk/gcloud/reference/auth/activate-service-account">gcloud
		 * auth activate-service-account</a>.
		 */
		privateKeyData?: string | null;

		/**
		 * The output format for the private key.
		 * Only provided in `CreateServiceAccountKey` responses, not
		 * in `GetServiceAccountKey` or `ListServiceAccountKey` responses.
		 * Google never exposes system-managed private keys, and never retains
		 * user-managed private keys.
		 */
		privateKeyType?: CreateServiceAccountKeyRequestPrivateKeyType | null;

		/** The public key data. Only provided in `GetServiceAccountKey` responses. */
		publicKeyData?: string | null;

		/** The key can be used after this timestamp. */
		validAfterTime?: string | null;

		/**
		 * The key can be used before this timestamp.
		 * For system-managed key pairs, this timestamp is the end time for the
		 * private key signing operation. The public key could still be used
		 * for verification for a few hours after this time.
		 */
		validBeforeTime?: string | null;
	}

	export enum ServiceAccountKeyKeyOrigin { ORIGIN_UNSPECIFIED = 0, USER_PROVIDED = 1, GOOGLE_PROVIDED = 2 }

	export enum ServiceAccountKeyKeyType { KEY_TYPE_UNSPECIFIED = 0, USER_MANAGED = 1, SYSTEM_MANAGED = 2 }


	/** The service account list response. */
	export interface ListServiceAccountsResponse {

		/** The list of matching service accounts. */
		accounts?: Array<ServiceAccount> | null;

		/**
		 * To retrieve the next page of results, set
		 * ListServiceAccountsRequest.page_token
		 * to this value.
		 */
		nextPageToken?: string | null;
	}


	/** The patch service account request. */
	export interface PatchServiceAccountRequest {

		/**
		 * A service account in the Identity and Access Management API.
		 * To create a service account, specify the `project_id` and the `account_id`
		 * for the account.  The `account_id` is unique within the project, and is used
		 * to generate the service account email address and a stable
		 * `unique_id`.
		 * If the account already exists, the account's resource name is returned
		 * in the format of projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}. The caller
		 * can use the name in other methods to access the account.
		 * All other methods can identify the service account using the format
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
		 * the account. The `ACCOUNT` value can be the `email` address or the
		 * `unique_id` of the service account.
		 */
		serviceAccount?: ServiceAccount | null;
		updateMask?: string | null;
	}


	/** A permission which can be included by a role. */
	export interface Permission {

		/** The service API associated with the permission is not enabled. */
		apiDisabled?: boolean | null;

		/** The current custom role support level. */
		customRolesSupportLevel?: PermissionCustomRolesSupportLevel | null;

		/**
		 * A brief description of what this Permission is used for.
		 * This permission can ONLY be used in predefined roles.
		 */
		description?: string | null;

		/** The name of this Permission. */
		name?: string | null;
		onlyInPredefinedRoles?: boolean | null;

		/**
		 * The preferred name for this permission. If present, then this permission is
		 * an alias of, and equivalent to, the listed primary_permission.
		 */
		primaryPermission?: string | null;

		/** The current launch stage of the permission. */
		stage?: PermissionStage | null;

		/** The title of this Permission. */
		title?: string | null;
	}

	export enum PermissionCustomRolesSupportLevel { SUPPORTED = 0, TESTING = 1, NOT_SUPPORTED = 2 }

	export enum PermissionStage { ALPHA = 0, BETA = 1, GA = 2, DEPRECATED = 3 }


	/**
	 * An Identity and Access Management (IAM) policy, which specifies access
	 * controls for Google Cloud resources.
	 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
	 * `members` to a single `role`. Members can be user accounts, service accounts,
	 * Google groups, and domains (such as G Suite). A `role` is a named list of
	 * permissions; each `role` can be an IAM predefined role or a user-created
	 * custom role.
	 * Optionally, a `binding` can specify a `condition`, which is a logical
	 * expression that allows access to a resource only if the expression evaluates
	 * to `true`. A condition can add constraints based on attributes of the
	 * request, the resource, or both.
	 * **JSON example:**
	 *     {
	 *       "bindings": [
	 *         {
	 *           "role": "roles/resourcemanager.organizationAdmin",
	 *           "members": [
	 *             "user:mike@example.com",
	 *             "group:admins@example.com",
	 *             "domain:google.com",
	 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
	 *           ]
	 *         },
	 *         {
	 *           "role": "roles/resourcemanager.organizationViewer",
	 *           "members": ["user:eve@example.com"],
	 *           "condition": {
	 *             "title": "expirable access",
	 *             "description": "Does not grant access after Sep 2020",
	 *             "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
	 *           }
	 *         }
	 *       ],
	 *       "etag": "BwWWja0YfJA=",
	 *       "version": 3
	 *     }
	 * **YAML example:**
	 *     bindings:
	 *     - members:
	 *       - user:mike@example.com
	 *       - group:admins@example.com
	 *       - domain:google.com
	 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
	 *       role: roles/resourcemanager.organizationAdmin
	 *     - members:
	 *       - user:eve@example.com
	 *       role: roles/resourcemanager.organizationViewer
	 *       condition:
	 *         title: expirable access
	 *         description: Does not grant access after Sep 2020
	 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
	 *     - etag: BwWWja0YfJA=
	 *     - version: 3
	 * For a description of IAM and its features, see the
	 * [IAM documentation](https://cloud.google.com/iam/docs/).
	 */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig> | null;

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding> | null;

		/**
		 * `etag` is used for optimistic concurrency control as a way to help
		 * prevent simultaneous updates of a policy from overwriting each other.
		 * It is strongly suggested that systems make use of the `etag` in the
		 * read-modify-write cycle to perform policy updates in order to avoid race
		 * conditions: An `etag` is returned in the response to `getIamPolicy`, and
		 * systems are expected to put that etag in the request to `setIamPolicy` to
		 * ensure that their change will be applied to the same version of the policy.
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 */
		etag?: string | null;

		/**
		 * Specifies the format of the policy.
		 * Valid values are `0`, `1`, and `3`. Requests that specify an invalid value
		 * are rejected.
		 * Any operation that affects conditional role bindings must specify version
		 * `3`. This requirement applies to the following operations:
		 * * Getting a policy that includes a conditional role binding
		 * * Adding a conditional role binding to a policy
		 * * Changing a conditional role binding in a policy
		 * * Removing any role binding, with or without a condition, from a policy
		 * that includes conditions
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 * If a policy does not include any conditions, operations on that policy may
		 * specify any valid version or leave the field unset.
		 */
		version?: number | null;
	}


	/** A request to get the list of auditable services for a resource. */
	export interface QueryAuditableServicesRequest {

		/**
		 * Required. The full resource name to query from the list of auditable
		 * services.
		 * The name follows the Google Cloud Platform resource format.
		 * For example, a Cloud Platform project with id `my-project` will be named
		 * `//cloudresourcemanager.googleapis.com/projects/my-project`.
		 */
		fullResourceName?: string | null;
	}


	/** A response containing a list of auditable services for a resource. */
	export interface QueryAuditableServicesResponse {

		/** The auditable services for a resource. */
		services?: Array<AuditableService> | null;
	}


	/** The grantable role query request. */
	export interface QueryGrantableRolesRequest {

		/**
		 * Required. The full resource name to query from the list of grantable roles.
		 * The name follows the Google Cloud Platform resource format.
		 * For example, a Cloud Platform project with id `my-project` will be named
		 * `//cloudresourcemanager.googleapis.com/projects/my-project`.
		 */
		fullResourceName?: string | null;

		/** Optional limit on the number of roles to include in the response. */
		pageSize?: number | null;

		/**
		 * Optional pagination token returned in an earlier
		 * QueryGrantableRolesResponse.
		 */
		pageToken?: string | null;
		view?: QueryGrantableRolesRequestView | null;
	}

	export enum QueryGrantableRolesRequestView { BASIC = 0, FULL = 1 }


	/** The grantable role query response. */
	export interface QueryGrantableRolesResponse {

		/**
		 * To retrieve the next page of results, set
		 * `QueryGrantableRolesRequest.page_token` to this value.
		 */
		nextPageToken?: string | null;

		/** The list of matching roles. */
		roles?: Array<Role> | null;
	}


	/** A request to get permissions which can be tested on a resource. */
	export interface QueryTestablePermissionsRequest {

		/**
		 * Required. The full resource name to query from the list of testable
		 * permissions.
		 * The name follows the Google Cloud Platform resource format.
		 * For example, a Cloud Platform project with id `my-project` will be named
		 * `//cloudresourcemanager.googleapis.com/projects/my-project`.
		 */
		fullResourceName?: string | null;

		/** Optional limit on the number of permissions to include in the response. */
		pageSize?: number | null;

		/**
		 * Optional pagination token returned in an earlier
		 * QueryTestablePermissionsRequest.
		 */
		pageToken?: string | null;
	}


	/** The response containing permissions which can be tested on a resource. */
	export interface QueryTestablePermissionsResponse {

		/**
		 * To retrieve the next page of results, set
		 * `QueryTestableRolesRequest.page_token` to this value.
		 */
		nextPageToken?: string | null;

		/** The Permissions testable on the requested resource. */
		permissions?: Array<Permission> | null;
	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/**
		 * An Identity and Access Management (IAM) policy, which specifies access
		 * controls for Google Cloud resources.
		 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
		 * `members` to a single `role`. Members can be user accounts, service accounts,
		 * Google groups, and domains (such as G Suite). A `role` is a named list of
		 * permissions; each `role` can be an IAM predefined role or a user-created
		 * custom role.
		 * Optionally, a `binding` can specify a `condition`, which is a logical
		 * expression that allows access to a resource only if the expression evaluates
		 * to `true`. A condition can add constraints based on attributes of the
		 * request, the resource, or both.
		 * **JSON example:**
		 * {
		 * "bindings": [
		 * {
		 * "role": "roles/resourcemanager.organizationAdmin",
		 * "members": [
		 * "user:mike@example.com",
		 * "group:admins@example.com",
		 * "domain:google.com",
		 * "serviceAccount:my-project-id@appspot.gserviceaccount.com"
		 * ]
		 * },
		 * {
		 * "role": "roles/resourcemanager.organizationViewer",
		 * "members": ["user:eve@example.com"],
		 * "condition": {
		 * "title": "expirable access",
		 * "description": "Does not grant access after Sep 2020",
		 * "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
		 * }
		 * }
		 * ],
		 * "etag": "BwWWja0YfJA=",
		 * "version": 3
		 * }
		 * **YAML example:**
		 * bindings:
		 * - members:
		 * - user:mike@example.com
		 * - group:admins@example.com
		 * - domain:google.com
		 * - serviceAccount:my-project-id@appspot.gserviceaccount.com
		 * role: roles/resourcemanager.organizationAdmin
		 * - members:
		 * - user:eve@example.com
		 * role: roles/resourcemanager.organizationViewer
		 * condition:
		 * title: expirable access
		 * description: Does not grant access after Sep 2020
		 * expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
		 * - etag: BwWWja0YfJA=
		 * - version: 3
		 * For a description of IAM and its features, see the
		 * [IAM documentation](https://cloud.google.com/iam/docs/).
		 */
		policy?: Policy | null;

		/**
		 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
		 * the fields in the mask will be modified. If no mask is provided, the
		 * following default mask is used:
		 * paths: "bindings, etag"
		 * This field is only used by Cloud IAM.
		 */
		updateMask?: string | null;
	}


	/** The service account sign blob request. */
	export interface SignBlobRequest {

		/** Required. The bytes to sign. */
		bytesToSign?: string | null;
	}


	/** The service account sign blob response. */
	export interface SignBlobResponse {

		/** The id of the key used to sign the blob. */
		keyId?: string | null;

		/** The signed blob. */
		signature?: string | null;
	}


	/** The service account sign JWT request. */
	export interface SignJwtRequest {

		/** Required. The JWT payload to sign, a JSON JWT Claim set. */
		payload?: string | null;
	}


	/** The service account sign JWT response. */
	export interface SignJwtResponse {

		/** The id of the key used to sign the JWT. */
		keyId?: string | null;

		/** The signed JWT. */
		signedJwt?: string | null;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string> | null;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string> | null;
	}


	/** The request to undelete an existing role. */
	export interface UndeleteRoleRequest {

		/** Used to perform a consistent read-modify-write. */
		etag?: string | null;
	}


	/** The service account undelete request. */
	export interface UndeleteServiceAccountRequest {
	}

	export interface UndeleteServiceAccountResponse {

		/**
		 * A service account in the Identity and Access Management API.
		 * To create a service account, specify the `project_id` and the `account_id`
		 * for the account.  The `account_id` is unique within the project, and is used
		 * to generate the service account email address and a stable
		 * `unique_id`.
		 * If the account already exists, the account's resource name is returned
		 * in the format of projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}. The caller
		 * can use the name in other methods to access the account.
		 * All other methods can identify the service account using the format
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
		 * the account. The `ACCOUNT` value can be the `email` address or the
		 * `unique_id` of the service account.
		 */
		restoredAccount?: ServiceAccount | null;
	}


	/** The service account key upload request. */
	export interface UploadServiceAccountKeyRequest {

		/**
		 * A field that allows clients to upload their own public key. If set,
		 * use this public key data to create a service account key for given
		 * service account.
		 * Please note, the expected format for this field is X509_PEM.
		 */
		publicKeyData?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lints a Cloud IAM policy object or its sub fields. Currently supports
		 * google.iam.v1.Binding.condition.
		 * Each lint operation consists of multiple lint validation units.
		 * Each unit inspects the input object in regard to a particular linting
		 * aspect and issues a google.iam.admin.v1.LintResult disclosing the
		 * result.
		 * The set of applicable validation units is determined by the Cloud IAM
		 * server and is not configurable.
		 * Regardless of any lint issues or their severities, successful calls to
		 * `lintPolicy` return an HTTP 200 OK status code.
		 * Post v1/iamPolicies:lintPolicy
		 * @return {void} Successful response
		 */
		Iam_iamPolicies_lintPolicy(requestBody: LintPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/iamPolicies:lintPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of services that support service level audit logging
		 * configuration for the given resource.
		 * Post v1/iamPolicies:queryAuditableServices
		 * @return {void} Successful response
		 */
		Iam_iamPolicies_queryAuditableServices(requestBody: QueryAuditableServicesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/iamPolicies:queryAuditableServices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the permissions testable on a resource.
		 * A permission is testable if it can be tested for an identity on a resource.
		 * Post v1/permissions:queryTestablePermissions
		 * @return {void} Successful response
		 */
		Iam_permissions_queryTestablePermissions(requestBody: QueryTestablePermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/permissions:queryTestablePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Roles defined on a resource.
		 * Get v1/roles
		 * @param {number} pageSize Optional limit on the number of roles to include in the response.
		 * @param {string} pageToken Optional pagination token returned in an earlier ListRolesResponse.
		 * @param {string} parent The `parent` parameter's value depends on the target resource for the
		 * request, namely
		 * [`roles`](/iam/reference/rest/v1/roles),
		 * [`projects`](/iam/reference/rest/v1/projects.roles), or
		 * [`organizations`](/iam/reference/rest/v1/organizations.roles). Each
		 * resource type's `parent` value format is described below:
		 * * [`roles.list()`](/iam/reference/rest/v1/roles/list): An empty string.
		 *   This method doesn't require a resource; it simply returns all
		 *   [predefined roles](/iam/docs/understanding-roles#predefined_roles) in
		 *   Cloud IAM. Example request URL:
		 *   `https://iam.googleapis.com/v1/roles`
		 * * [`projects.roles.list()`](/iam/reference/rest/v1/projects.roles/list):
		 *   `projects/{PROJECT_ID}`. This method lists all project-level
		 *   [custom roles](/iam/docs/understanding-custom-roles).
		 *   Example request URL:
		 *   `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles`
		 * * [`organizations.roles.list()`](/iam/reference/rest/v1/organizations.roles/list):
		 *   `organizations/{ORGANIZATION_ID}`. This method lists all
		 *   organization-level [custom roles](/iam/docs/understanding-custom-roles).
		 *   Example request URL:
		 *   `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles`
		 * Note: Wildcard (*) values are invalid; you must specify a complete project
		 * ID or organization ID.
		 * @param {boolean} showDeleted Include Roles that have been deleted.
		 * @param {QueryGrantableRolesRequestView} view Optional view for the returned Role objects. When `FULL` is specified,
		 * the `includedPermissions` field is returned, which includes a list of all
		 * permissions in the role. The default value is `BASIC`, which does not
		 * return the `includedPermissions` field.
		 * @return {void} Successful response
		 */
		Iam_roles_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined, showDeleted: boolean | null | undefined, view: QueryGrantableRolesRequestView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/roles?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&showDeleted=' + showDeleted + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Queries roles that can be granted on a particular resource.
		 * A role is grantable if it can be used as the role in a binding for a policy
		 * for that resource.
		 * Post v1/roles:queryGrantableRoles
		 * @return {void} Successful response
		 */
		Iam_roles_queryGrantableRoles(requestBody: QueryGrantableRolesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/roles:queryGrantableRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Soft deletes a role. The role is suspended and cannot be used to create new
		 * IAM Policy Bindings.
		 * The Role will not be included in `ListRoles()` unless `show_deleted` is set
		 * in the `ListRolesRequest`. The Role contains the deleted boolean set.
		 * Existing Bindings remains, but are inactive. The Role can be undeleted
		 * within 7 days. After 7 days the Role is deleted and all Bindings associated
		 * with the role are removed.
		 * Delete v1/{name}
		 * @param {string} name The `name` parameter's value depends on the target resource for the
		 * request, namely
		 * [`projects`](/iam/reference/rest/v1/projects.roles) or
		 * [`organizations`](/iam/reference/rest/v1/organizations.roles). Each
		 * resource type's `name` value format is described below:
		 * * [`projects.roles.delete()`](/iam/reference/rest/v1/projects.roles/delete):
		 *   `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only
		 *   [custom roles](/iam/docs/understanding-custom-roles) that have been
		 *   created at the project level. Example request URL:
		 *   `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`
		 * * [`organizations.roles.delete()`](/iam/reference/rest/v1/organizations.roles/delete):
		 *   `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method
		 *   deletes only [custom roles](/iam/docs/understanding-custom-roles) that
		 *   have been created at the organization level. Example request URL:
		 *   `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`
		 * Note: Wildcard (*) values are invalid; you must specify a complete project
		 * ID or organization ID.
		 * @param {string} etag Used to perform a consistent read-modify-write.
		 * @return {void} Successful response
		 */
		Iam_organizations_roles_delete(name: string, etag: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Role definition.
		 * Get v1/{name}
		 * @param {string} name The `name` parameter's value depends on the target resource for the
		 * request, namely
		 * [`roles`](/iam/reference/rest/v1/roles),
		 * [`projects`](/iam/reference/rest/v1/projects.roles), or
		 * [`organizations`](/iam/reference/rest/v1/organizations.roles). Each
		 * resource type's `name` value format is described below:
		 * * [`roles.get()`](/iam/reference/rest/v1/roles/get): `roles/{ROLE_NAME}`.
		 *   This method returns results from all
		 *   [predefined roles](/iam/docs/understanding-roles#predefined_roles) in
		 *   Cloud IAM. Example request URL:
		 *   `https://iam.googleapis.com/v1/roles/{ROLE_NAME}`
		 * * [`projects.roles.get()`](/iam/reference/rest/v1/projects.roles/get):
		 *   `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method returns only
		 *   [custom roles](/iam/docs/understanding-custom-roles) that have been
		 *   created at the project level. Example request URL:
		 *   `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`
		 * * [`organizations.roles.get()`](/iam/reference/rest/v1/organizations.roles/get):
		 *   `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method
		 *   returns only [custom roles](/iam/docs/understanding-custom-roles) that
		 *   have been created at the organization level. Example request URL:
		 *   `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`
		 * Note: Wildcard (*) values are invalid; you must specify a complete project
		 * ID or organization ID.
		 * @param {Iam_organizations_roles_getPublicKeyType} publicKeyType The output format of the public key requested.
		 * X509_PEM is the default output format.
		 * @return {void} Successful response
		 */
		Iam_organizations_roles_get(name: string, publicKeyType: Iam_organizations_roles_getPublicKeyType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&publicKeyType=' + publicKeyType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Role definition.
		 * Patch v1/{name}
		 * @param {string} name The `name` parameter's value depends on the target resource for the
		 * request, namely
		 * [`projects`](/iam/reference/rest/v1/projects.roles) or
		 * [`organizations`](/iam/reference/rest/v1/organizations.roles). Each
		 * resource type's `name` value format is described below:
		 * * [`projects.roles.patch()`](/iam/reference/rest/v1/projects.roles/patch):
		 *   `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method updates only
		 *   [custom roles](/iam/docs/understanding-custom-roles) that have been
		 *   created at the project level. Example request URL:
		 *   `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`
		 * * [`organizations.roles.patch()`](/iam/reference/rest/v1/organizations.roles/patch):
		 *   `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method
		 *   updates only [custom roles](/iam/docs/understanding-custom-roles) that
		 *   have been created at the organization level. Example request URL:
		 *   `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`
		 * Note: Wildcard (*) values are invalid; you must specify a complete project
		 * ID or organization ID.
		 * @param {string} updateMask A mask describing which fields in the Role have changed.
		 * @return {void} Successful response
		 */
		Iam_organizations_roles_patch(name: string, updateMask: string | null | undefined, requestBody: Role): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Note: This method is in the process of being deprecated. Use
		 * PatchServiceAccount instead.
		 * Updates a ServiceAccount.
		 * Currently, only the following fields are updatable:
		 * `display_name` and `description`.
		 * Put v1/{name}
		 * @param {string} name The resource name of the service account in the following format:
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Requests using `-` as a wildcard for the `PROJECT_ID` will infer the
		 * project from the `account` and the `ACCOUNT` value can be the `email`
		 * address or the `unique_id` of the service account.
		 * In responses the resource name will always be in the format
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_update(name: string, requestBody: ServiceAccount): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists ServiceAccountKeys.
		 * Get v1/{name}/keys
		 * @param {string} name Required. The resource name of the service account in the following format:
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Using `-` as a wildcard for the `PROJECT_ID`, will infer the project from
		 * the account. The `ACCOUNT` value can be the `email` address or the
		 * `unique_id` of the service account.
		 * @param {Array<ServiceAccountKeyKeyType>} keyTypes Filters the types of keys the user wants to include in the list
		 * response. Duplicate key types are not allowed. If no key type
		 * is provided, all keys are returned.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_keys_list(name: string, keyTypes: Array<ServiceAccountKeyKeyType> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/keys&' + keyTypes.map(z => `keyTypes=${z}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a ServiceAccountKey
		 * and returns it.
		 * Post v1/{name}/keys
		 * @param {string} name Required. The resource name of the service account in the following format:
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
		 * the account. The `ACCOUNT` value can be the `email` address or the
		 * `unique_id` of the service account.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_keys_create(name: string, requestBody: CreateServiceAccountKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upload public key for a given service account.
		 * This rpc will create a
		 * ServiceAccountKey that has the
		 * provided public key and returns it.
		 * Post v1/{name}/keys:upload
		 * @param {string} name The resource name of the service account in the following format:
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
		 * the account. The `ACCOUNT` value can be the `email` address or the
		 * `unique_id` of the service account.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_keys_upload(name: string, requestBody: UploadServiceAccountKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/keys:upload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists ServiceAccounts for a project.
		 * Get v1/{name}/serviceAccounts
		 * @param {string} name Required. The resource name of the project associated with the service
		 * accounts, such as `projects/my-project-123`.
		 * @param {number} pageSize Optional limit on the number of service accounts to include in the
		 * response. Further accounts can subsequently be obtained by including the
		 * ListServiceAccountsResponse.next_page_token
		 * in a subsequent request.
		 * @param {string} pageToken Optional pagination token returned in an earlier
		 * ListServiceAccountsResponse.next_page_token.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_list(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/serviceAccounts&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a ServiceAccount
		 * and returns it.
		 * Post v1/{name}/serviceAccounts
		 * @param {string} name Required. The resource name of the project associated with the service
		 * accounts, such as `projects/my-project-123`.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_create(name: string, requestBody: CreateServiceAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/serviceAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * DisableServiceAccount is currently in the alpha launch stage.
		 * Disables a ServiceAccount,
		 * which immediately prevents the service account from authenticating and
		 * gaining access to APIs.
		 * Disabled service accounts can be safely restored by using
		 * EnableServiceAccount at any point. Deleted service accounts cannot be
		 * restored using this method.
		 * Disabling a service account that is bound to VMs, Apps, Functions, or
		 * other jobs will cause those jobs to lose access to resources if they are
		 * using the disabled service account.
		 * To improve reliability of your services and avoid unexpected outages, it
		 * is recommended to first disable a service account rather than delete it.
		 * After disabling the service account, wait at least 24 hours to verify there
		 * are no unintended consequences, and then delete the service account.
		 * Post v1/{name}:disable
		 * @param {string} name The resource name of the service account in the following format:
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
		 * the account. The `ACCOUNT` value can be the `email` address or the
		 * `unique_id` of the service account.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_disable(name: string, requestBody: DisableServiceAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * EnableServiceAccount is currently in the alpha launch stage.
		 * Restores a disabled ServiceAccount
		 * that has been manually disabled by using DisableServiceAccount. Service
		 * accounts that have been disabled by other means or for other reasons,
		 * such as abuse, cannot be restored using this method.
		 * EnableServiceAccount will have no effect on a service account that is
		 * not disabled.  Enabling an already enabled service account will have no
		 * effect.
		 * Post v1/{name}:enable
		 * @param {string} name The resource name of the service account in the following format:
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
		 * the account. The `ACCOUNT` value can be the `email` address or the
		 * `unique_id` of the service account.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_enable(name: string, requestBody: EnableServiceAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * **Note**: This method is in the process of being deprecated. Call the
		 * [`signBlob()`](/iam/credentials/reference/rest/v1/projects.serviceAccounts/signBlob)
		 * method of the Cloud IAM Service Account Credentials API instead.
		 * Signs a blob using a service account's system-managed private key.
		 * Post v1/{name}:signBlob
		 * @param {string} name Required. The resource name of the service account in the following format:
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
		 * the account. The `ACCOUNT` value can be the `email` address or the
		 * `unique_id` of the service account.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_signBlob(name: string, requestBody: SignBlobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':signBlob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * **Note**: This method is in the process of being deprecated. Call the
		 * [`signJwt()`](/iam/credentials/reference/rest/v1/projects.serviceAccounts/signJwt)
		 * method of the Cloud IAM Service Account Credentials API instead.
		 * Signs a JWT using a service account's system-managed private key.
		 * If no expiry time (`exp`) is provided in the `SignJwtRequest`, IAM sets an
		 * an expiry time of one hour by default. If you request an expiry time of
		 * more than one hour, the request will fail.
		 * Post v1/{name}:signJwt
		 * @param {string} name Required. The resource name of the service account in the following format:
		 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
		 * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
		 * the account. The `ACCOUNT` value can be the `email` address or the
		 * `unique_id` of the service account.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_signJwt(name: string, requestBody: SignJwtRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':signJwt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Undelete a Role, bringing it back in its previous state.
		 * Post v1/{name}:undelete
		 * @param {string} name The `name` parameter's value depends on the target resource for the
		 * request, namely
		 * [`projects`](/iam/reference/rest/v1/projects.roles) or
		 * [`organizations`](/iam/reference/rest/v1/organizations.roles). Each
		 * resource type's `name` value format is described below:
		 * * [`projects.roles.undelete()`](/iam/reference/rest/v1/projects.roles/undelete):
		 *   `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method undeletes
		 *   only [custom roles](/iam/docs/understanding-custom-roles) that have been
		 *   created at the project level. Example request URL:
		 *   `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`
		 * * [`organizations.roles.undelete()`](/iam/reference/rest/v1/organizations.roles/undelete):
		 *   `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method
		 *   undeletes only [custom roles](/iam/docs/understanding-custom-roles) that
		 *   have been created at the organization level. Example request URL:
		 *   `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`
		 * Note: Wildcard (*) values are invalid; you must specify a complete project
		 * ID or organization ID.
		 * @return {void} Successful response
		 */
		Iam_organizations_roles_undelete(name: string, requestBody: UndeleteRoleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Roles defined on a resource.
		 * Get v1/{parent}/roles
		 * @param {string} parent The `parent` parameter's value depends on the target resource for the
		 * request, namely
		 * [`roles`](/iam/reference/rest/v1/roles),
		 * [`projects`](/iam/reference/rest/v1/projects.roles), or
		 * [`organizations`](/iam/reference/rest/v1/organizations.roles). Each
		 * resource type's `parent` value format is described below:
		 * * [`roles.list()`](/iam/reference/rest/v1/roles/list): An empty string.
		 *   This method doesn't require a resource; it simply returns all
		 *   [predefined roles](/iam/docs/understanding-roles#predefined_roles) in
		 *   Cloud IAM. Example request URL:
		 *   `https://iam.googleapis.com/v1/roles`
		 * * [`projects.roles.list()`](/iam/reference/rest/v1/projects.roles/list):
		 *   `projects/{PROJECT_ID}`. This method lists all project-level
		 *   [custom roles](/iam/docs/understanding-custom-roles).
		 *   Example request URL:
		 *   `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles`
		 * * [`organizations.roles.list()`](/iam/reference/rest/v1/organizations.roles/list):
		 *   `organizations/{ORGANIZATION_ID}`. This method lists all
		 *   organization-level [custom roles](/iam/docs/understanding-custom-roles).
		 *   Example request URL:
		 *   `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles`
		 * Note: Wildcard (*) values are invalid; you must specify a complete project
		 * ID or organization ID.
		 * @param {number} pageSize Optional limit on the number of roles to include in the response.
		 * @param {string} pageToken Optional pagination token returned in an earlier ListRolesResponse.
		 * @param {boolean} showDeleted Include Roles that have been deleted.
		 * @param {QueryGrantableRolesRequestView} view Optional view for the returned Role objects. When `FULL` is specified,
		 * the `includedPermissions` field is returned, which includes a list of all
		 * permissions in the role. The default value is `BASIC`, which does not
		 * return the `includedPermissions` field.
		 * @return {void} Successful response
		 */
		Iam_organizations_roles_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, view: QueryGrantableRolesRequestView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/roles&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Role.
		 * Post v1/{parent}/roles
		 * @param {string} parent The `parent` parameter's value depends on the target resource for the
		 * request, namely
		 * [`projects`](/iam/reference/rest/v1/projects.roles) or
		 * [`organizations`](/iam/reference/rest/v1/organizations.roles). Each
		 * resource type's `parent` value format is described below:
		 * * [`projects.roles.create()`](/iam/reference/rest/v1/projects.roles/create):
		 *   `projects/{PROJECT_ID}`. This method creates project-level
		 *   [custom roles](/iam/docs/understanding-custom-roles).
		 *   Example request URL:
		 *   `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles`
		 * * [`organizations.roles.create()`](/iam/reference/rest/v1/organizations.roles/create):
		 *   `organizations/{ORGANIZATION_ID}`. This method creates organization-level
		 *   [custom roles](/iam/docs/understanding-custom-roles). Example request
		 *   URL:
		 *   `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles`
		 * Note: Wildcard (*) values are invalid; you must specify a complete project
		 * ID or organization ID.
		 * @return {void} Successful response
		 */
		Iam_organizations_roles_create(parent: string, requestBody: CreateRoleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/roles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the Cloud IAM access control policy for a
		 * ServiceAccount.
		 * Note: Service accounts are both
		 * [resources and
		 * identities](/iam/docs/service-accounts#service_account_permissions). This
		 * method treats the service account as a resource. It returns the Cloud IAM
		 * policy that reflects what members have access to the service account.
		 * This method does not return what resources the service account has access
		 * to. To see if a service account has access to a resource, call the
		 * `getIamPolicy` method on the target resource. For example, to view grants
		 * for a project, call the
		 * [projects.getIamPolicy](/resource-manager/reference/rest/v1/projects/getIamPolicy)
		 * method.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The policy format version to be returned.
		 * Valid values are 0, 1, and 3. Requests specifying an invalid value will be
		 * rejected.
		 * Requests for policies with any conditional bindings must specify version 3.
		 * Policies without any conditional bindings may specify any valid value or
		 * leave the field unset.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the Cloud IAM access control policy for a
		 * ServiceAccount.
		 * Note: Service accounts are both
		 * [resources and
		 * identities](/iam/docs/service-accounts#service_account_permissions). This
		 * method treats the service account as a resource. Use it to grant members
		 * access to the service account, such as when they need to impersonate it.
		 * This method does not grant the service account access to other resources,
		 * such as projects. To grant a service account access to resources, include
		 * the service account in the Cloud IAM policy for the desired resource, then
		 * call the appropriate `setIamPolicy` method on the target resource. For
		 * example, to grant a service account access to a project, call the
		 * [projects.setIamPolicy](/resource-manager/reference/rest/v1/projects/setIamPolicy)
		 * method.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tests the specified permissions against the IAM access control policy
		 * for a ServiceAccount.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Iam_projects_serviceAccounts_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Iam_organizations_roles_getPublicKeyType { TYPE_NONE = 0, TYPE_X509_PEM_FILE = 1, TYPE_RAW_PUBLIC_KEY = 2 }

}

