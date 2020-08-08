import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Security Command Center representation of a Google Cloud
	 * resource.
	 * The Asset is a Security Command Center resource that captures information
	 * about a single Google Cloud resource. All modifications to an Asset are only
	 * within the context of Security Command Center and don't affect the referenced
	 * Google Cloud resource.
	 */
	export interface Asset {

		/** The time at which the asset was created in Security Command Center. */
		createTime?: string;

		/**
		 * Cloud IAM Policy information associated with the Google Cloud resource
		 * described by the Security Command Center asset. This information is managed
		 * and defined by the Google Cloud resource and cannot be modified by the
		 * user.
		 */
		iamPolicy?: IamPolicy;

		/**
		 * The relative resource name of this asset. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Example:
		 * "organizations/{organization_id}/assets/{asset_id}".
		 */
		name?: string;

		/**
		 * Resource managed properties. These properties are managed and defined by
		 * the Google Cloud resource and cannot be modified by the user.
		 */
		resourceProperties?: {[id: string]: any };

		/**
		 * Security Command Center managed properties. These properties are managed by
		 * Security Command Center and cannot be modified by the user.
		 */
		securityCenterProperties?: SecurityCenterProperties;

		/**
		 * User specified security marks that are attached to the parent Security
		 * Command Center resource. Security marks are scoped within a Security Command
		 * Center organization -- they can be modified and viewed by all users who have
		 * proper permissions on the organization.
		 */
		securityMarks?: SecurityMarks;

		/**
		 * The time at which the asset was last updated, added, or deleted in Security
		 * Command Center.
		 */
		updateTime?: string;
	}


	/**
	 * Cloud IAM Policy information associated with the Google Cloud resource
	 * described by the Security Command Center asset. This information is managed
	 * and defined by the Google Cloud resource and cannot be modified by the
	 * user.
	 */
	export interface IamPolicy {

		/**
		 * The JSON representation of the Policy associated with the asset.
		 * See https://cloud.google.com/iam/reference/rest/v1/Policy for format
		 * details.
		 */
		policyBlob?: string;
	}


	/**
	 * Security Command Center managed properties. These properties are managed by
	 * Security Command Center and cannot be modified by the user.
	 */
	export interface SecurityCenterProperties {

		/** The user defined display name for this resource. */
		resourceDisplayName?: string;

		/**
		 * The full resource name of the Google Cloud resource this asset
		 * represents. This field is immutable after create time. See:
		 * https://cloud.google.com/apis/design/resource_names#full_resource_name
		 */
		resourceName?: string;

		/** Owners of the Google Cloud resource. */
		resourceOwners?: Array<string>;

		/**
		 * The full resource name of the immediate parent of the resource. See:
		 * https://cloud.google.com/apis/design/resource_names#full_resource_name
		 */
		resourceParent?: string;

		/** The user defined display name for the parent of this resource. */
		resourceParentDisplayName?: string;

		/**
		 * The full resource name of the project the resource belongs to. See:
		 * https://cloud.google.com/apis/design/resource_names#full_resource_name
		 */
		resourceProject?: string;

		/** The user defined display name for the project of this resource. */
		resourceProjectDisplayName?: string;

		/**
		 * The type of the Google Cloud resource. Examples include: APPLICATION,
		 * PROJECT, and ORGANIZATION. This is a case insensitive field defined by
		 * Security Command Center and/or the producer of the resource and is
		 * immutable after create time.
		 */
		resourceType?: string;
	}


	/**
	 * User specified security marks that are attached to the parent Security
	 * Command Center resource. Security marks are scoped within a Security Command
	 * Center organization -- they can be modified and viewed by all users who have
	 * proper permissions on the organization.
	 */
	export interface SecurityMarks {

		/**
		 * Mutable user specified security marks belonging to the parent resource.
		 * Constraints are as follows:
		 * * Keys and values are treated as case insensitive
		 * * Keys must be between 1 - 256 characters (inclusive)
		 * * Keys must be letters, numbers, underscores, or dashes
		 * * Values have leading and trailing whitespace trimmed, remaining
		 * characters must be between 1 - 4096 characters (inclusive)
		 */
		marks?: {[id: string]: any };

		/**
		 * The relative resource name of the SecurityMarks. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Examples:
		 * "organizations/{organization_id}/assets/{asset_id}/securityMarks"
		 * "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
		 */
		name?: string;
	}


	/** The configuration used for Asset Discovery runs. */
	export interface AssetDiscoveryConfig {

		/** The mode to use for filtering asset discovery. */
		inclusionMode?: AssetDiscoveryConfigInclusionMode;

		/** The project ids to use for filtering asset discovery. */
		projectIds?: Array<string>;
	}

	export enum AssetDiscoveryConfigInclusionMode { INCLUSION_MODE_UNSPECIFIED = 0, INCLUDE_ONLY = 1, EXCLUDE = 2 }


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
		auditLogConfigs?: Array<AuditLogConfig>;

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service?: string;
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
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType;
	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


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
		condition?: Expr;

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
		members?: Array<string>;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string;
	}


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
		description?: string;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string;
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


	/**
	 * Security Command Center finding.
	 * A finding is a record of assessment data like security, risk, health, or
	 * privacy, that is ingested into Security Command Center for presentation,
	 * notification, analysis, policy testing, and enforcement. For example, a
	 * cross-site scripting (XSS) vulnerability in an App Engine application is a
	 * finding.
	 */
	export interface Finding {

		/**
		 * The additional taxonomy group within findings from a given source.
		 * This field is immutable after creation time.
		 * Example: "XSS_FLASH_INJECTION"
		 */
		category?: string;

		/** The time at which the finding was created in Security Command Center. */
		createTime?: string;

		/**
		 * The time at which the event took place. For example, if the finding
		 * represents an open firewall it would capture the time the detector believes
		 * the firewall became open. The accuracy is determined by the detector.
		 */
		eventTime?: string;

		/**
		 * The URI that, if available, points to a web page outside of Security
		 * Command Center where additional information about the finding can be found.
		 * This field is guaranteed to be either empty or a well formed URL.
		 */
		externalUri?: string;

		/**
		 * The relative resource name of this finding. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Example:
		 * "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}"
		 */
		name?: string;

		/**
		 * The relative resource name of the source the finding belongs to. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * This field is immutable after creation time.
		 * For example:
		 * "organizations/{organization_id}/sources/{source_id}"
		 */
		parent?: string;

		/**
		 * For findings on Google Cloud resources, the full resource
		 * name of the Google Cloud resource this finding is for. See:
		 * https://cloud.google.com/apis/design/resource_names#full_resource_name
		 * When the finding is for a non-Google Cloud resource, the resourceName can
		 * be a customer or partner defined string. This field is immutable after
		 * creation time.
		 */
		resourceName?: string;

		/**
		 * User specified security marks that are attached to the parent Security
		 * Command Center resource. Security marks are scoped within a Security Command
		 * Center organization -- they can be modified and viewed by all users who have
		 * proper permissions on the organization.
		 */
		securityMarks?: SecurityMarks;

		/**
		 * Source specific properties. These properties are managed by the source
		 * that writes the finding. The key names in the source_properties map must be
		 * between 1 and 255 characters, and must start with a letter and contain
		 * alphanumeric characters or underscores only.
		 */
		sourceProperties?: {[id: string]: any };

		/** The state of the finding. */
		state?: FindingState;
	}

	export enum FindingState { STATE_UNSPECIFIED = 0, ACTIVE = 1, INACTIVE = 2 }


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/**
		 * Optional. The policy format version to be returned.
		 * Valid values are 0, 1, and 3. Requests specifying an invalid value will be
		 * rejected.
		 * Requests for policies with any conditional bindings must specify version 3.
		 * Policies without any conditional bindings may specify any valid value or
		 * leave the field unset.
		 */
		requestedPolicyVersion?: number;
	}


	/** Cloud SCC's Notification */
	export interface GoogleCloudSecuritycenterV1NotificationMessage {

		/**
		 * Security Command Center finding.
		 * A finding is a record of assessment data like security, risk, health, or
		 * privacy, that is ingested into Security Command Center for presentation,
		 * notification, analysis, policy testing, and enforcement. For example, a
		 * cross-site scripting (XSS) vulnerability in an App Engine application is a
		 * finding.
		 */
		finding?: Finding;

		/** Name of the notification config that generated current notification. */
		notificationConfigName?: string;
	}


	/** Response of asset discovery run */
	export interface GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {

		/** The duration between asset discovery run start and end */
		duration?: string;

		/** The state of an asset discovery run. */
		state?: GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState;
	}

	export enum GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState { STATE_UNSPECIFIED = 0, COMPLETED = 1, SUPERSEDED = 2, TERMINATED = 3 }


	/** Response of asset discovery run */
	export interface GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {

		/** The duration between asset discovery run start and end */
		duration?: string;

		/** The state of an asset discovery run. */
		state?: GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState;
	}


	/**
	 * Security Command Center representation of a Google Cloud
	 * resource.
	 * The Asset is a Security Command Center resource that captures information
	 * about a single Google Cloud resource. All modifications to an Asset are only
	 * within the context of Security Command Center and don't affect the referenced
	 * Google Cloud resource.
	 */
	export interface GoogleCloudSecuritycenterV1p1beta1Asset {

		/** The time at which the asset was created in Security Command Center. */
		createTime?: string;

		/**
		 * Cloud IAM Policy information associated with the Google Cloud resource
		 * described by the Security Command Center asset. This information is managed
		 * and defined by the Google Cloud resource and cannot be modified by the
		 * user.
		 */
		iamPolicy?: GoogleCloudSecuritycenterV1p1beta1IamPolicy;

		/**
		 * The relative resource name of this asset. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Example:
		 * "organizations/{organization_id}/assets/{asset_id}".
		 */
		name?: string;

		/**
		 * Resource managed properties. These properties are managed and defined by
		 * the Google Cloud resource and cannot be modified by the user.
		 */
		resourceProperties?: {[id: string]: any };

		/**
		 * Security Command Center managed properties. These properties are managed by
		 * Security Command Center and cannot be modified by the user.
		 */
		securityCenterProperties?: GoogleCloudSecuritycenterV1p1beta1SecurityCenterProperties;

		/**
		 * User specified security marks that are attached to the parent Security
		 * Command Center resource. Security marks are scoped within a Security Command
		 * Center organization -- they can be modified and viewed by all users who have
		 * proper permissions on the organization.
		 */
		securityMarks?: GoogleCloudSecuritycenterV1p1beta1SecurityMarks;

		/**
		 * The time at which the asset was last updated, added, or deleted in Cloud
		 * SCC.
		 */
		updateTime?: string;
	}


	/**
	 * Cloud IAM Policy information associated with the Google Cloud resource
	 * described by the Security Command Center asset. This information is managed
	 * and defined by the Google Cloud resource and cannot be modified by the
	 * user.
	 */
	export interface GoogleCloudSecuritycenterV1p1beta1IamPolicy {

		/**
		 * The JSON representation of the Policy associated with the asset.
		 * See https://cloud.google.com/iam/docs/reference/rest/v1/Policy for
		 * format details.
		 */
		policyBlob?: string;
	}


	/**
	 * Security Command Center managed properties. These properties are managed by
	 * Security Command Center and cannot be modified by the user.
	 */
	export interface GoogleCloudSecuritycenterV1p1beta1SecurityCenterProperties {

		/** The user defined display name for this resource. */
		resourceDisplayName?: string;

		/**
		 * The full resource name of the Google Cloud resource this asset
		 * represents. This field is immutable after create time. See:
		 * https://cloud.google.com/apis/design/resource_names#full_resource_name
		 */
		resourceName?: string;

		/** Owners of the Google Cloud resource. */
		resourceOwners?: Array<string>;

		/**
		 * The full resource name of the immediate parent of the resource. See:
		 * https://cloud.google.com/apis/design/resource_names#full_resource_name
		 */
		resourceParent?: string;

		/** The user defined display name for the parent of this resource. */
		resourceParentDisplayName?: string;

		/**
		 * The full resource name of the project the resource belongs to. See:
		 * https://cloud.google.com/apis/design/resource_names#full_resource_name
		 */
		resourceProject?: string;

		/** The user defined display name for the project of this resource. */
		resourceProjectDisplayName?: string;

		/**
		 * The type of the Google Cloud resource. Examples include: APPLICATION,
		 * PROJECT, and ORGANIZATION. This is a case insensitive field defined by
		 * Security Command Center and/or the producer of the resource and is
		 * immutable after create time.
		 */
		resourceType?: string;
	}


	/**
	 * User specified security marks that are attached to the parent Security
	 * Command Center resource. Security marks are scoped within a Security Command
	 * Center organization -- they can be modified and viewed by all users who have
	 * proper permissions on the organization.
	 */
	export interface GoogleCloudSecuritycenterV1p1beta1SecurityMarks {

		/**
		 * Mutable user specified security marks belonging to the parent resource.
		 * Constraints are as follows:
		 * * Keys and values are treated as case insensitive
		 * * Keys must be between 1 - 256 characters (inclusive)
		 * * Keys must be letters, numbers, underscores, or dashes
		 * * Values have leading and trailing whitespace trimmed, remaining
		 * characters must be between 1 - 4096 characters (inclusive)
		 */
		marks?: {[id: string]: any };

		/**
		 * The relative resource name of the SecurityMarks. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Examples:
		 * "organizations/{organization_id}/assets/{asset_id}/securityMarks"
		 * "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
		 */
		name?: string;
	}


	/**
	 * Security Command Center finding.
	 * A finding is a record of assessment data (security, risk, health or privacy)
	 * ingested into Security Command Center for presentation, notification,
	 * analysis, policy testing, and enforcement. For example, an XSS vulnerability
	 * in an App Engine application is a finding.
	 */
	export interface GoogleCloudSecuritycenterV1p1beta1Finding {

		/**
		 * The additional taxonomy group within findings from a given source.
		 * This field is immutable after creation time.
		 * Example: "XSS_FLASH_INJECTION"
		 */
		category?: string;

		/** The time at which the finding was created in Security Command Center. */
		createTime?: string;

		/**
		 * The time at which the event took place. For example, if the finding
		 * represents an open firewall it would capture the time the detector believes
		 * the firewall became open. The accuracy is determined by the detector.
		 */
		eventTime?: string;

		/**
		 * The URI that, if available, points to a web page outside of Security
		 * Command Center where additional information about the finding can be found.
		 * This field is guaranteed to be either empty or a well formed URL.
		 */
		externalUri?: string;

		/**
		 * The relative resource name of this finding. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Example:
		 * "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}"
		 */
		name?: string;

		/**
		 * The relative resource name of the source the finding belongs to. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * This field is immutable after creation time.
		 * For example:
		 * "organizations/{organization_id}/sources/{source_id}"
		 */
		parent?: string;

		/**
		 * For findings on Google Cloud resources, the full resource
		 * name of the Google Cloud resource this finding is for. See:
		 * https://cloud.google.com/apis/design/resource_names#full_resource_name
		 * When the finding is for a non-Google Cloud resource, the resourceName can
		 * be a customer or partner defined string. This field is immutable after
		 * creation time.
		 */
		resourceName?: string;

		/**
		 * User specified security marks that are attached to the parent Security
		 * Command Center resource. Security marks are scoped within a Security Command
		 * Center organization -- they can be modified and viewed by all users who have
		 * proper permissions on the organization.
		 */
		securityMarks?: GoogleCloudSecuritycenterV1p1beta1SecurityMarks;

		/**
		 * Source specific properties. These properties are managed by the source
		 * that writes the finding. The key names in the source_properties map must be
		 * between 1 and 255 characters, and must start with a letter and contain
		 * alphanumeric characters or underscores only.
		 */
		sourceProperties?: {[id: string]: any };

		/** The state of the finding. */
		state?: FindingState;
	}


	/** Security Command Center's Notification */
	export interface GoogleCloudSecuritycenterV1p1beta1NotificationMessage {

		/**
		 * Security Command Center finding.
		 * A finding is a record of assessment data (security, risk, health or privacy)
		 * ingested into Security Command Center for presentation, notification,
		 * analysis, policy testing, and enforcement. For example, an XSS vulnerability
		 * in an App Engine application is a finding.
		 */
		finding?: GoogleCloudSecuritycenterV1p1beta1Finding;

		/** Name of the notification config that generated current notification. */
		notificationConfigName?: string;

		/**
		 * Wrapper over asset object that also captures the state change for the asset
		 * e.g. if it was a newly created asset vs updated or deleted asset.
		 */
		temporalAsset?: GoogleCloudSecuritycenterV1p1beta1TemporalAsset;
	}


	/**
	 * Wrapper over asset object that also captures the state change for the asset
	 * e.g. if it was a newly created asset vs updated or deleted asset.
	 */
	export interface GoogleCloudSecuritycenterV1p1beta1TemporalAsset {

		/**
		 * Security Command Center representation of a Google Cloud
		 * resource.
		 * The Asset is a Security Command Center resource that captures information
		 * about a single Google Cloud resource. All modifications to an Asset are only
		 * within the context of Security Command Center and don't affect the referenced
		 * Google Cloud resource.
		 */
		asset?: GoogleCloudSecuritycenterV1p1beta1Asset;

		/** Represents if the asset was created/updated/deleted. */
		changeType?: GoogleCloudSecuritycenterV1p1beta1TemporalAssetChangeType;
	}

	export enum GoogleCloudSecuritycenterV1p1beta1TemporalAssetChangeType { CHANGE_TYPE_UNSPECIFIED = 0, CREATED = 1, UPDATED = 2, DELETED = 3 }


	/** Response of asset discovery run */
	export interface GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse {

		/** The duration between asset discovery run start and end */
		duration?: string;

		/** The state of an asset discovery run. */
		state?: GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState;
	}


	/** Request message for grouping by assets. */
	export interface GroupAssetsRequest {

		/**
		 * When compare_duration is set, the GroupResult's "state_change" property is
		 * updated to indicate whether the asset was added, removed, or remained
		 * present during the compare_duration period of time that precedes the
		 * read_time. This is the time between (read_time - compare_duration) and
		 * read_time.
		 * The state change value is derived based on the presence of the asset at the
		 * two points in time. Intermediate state changes between the two times don't
		 * affect the result. For example, the results aren't affected if the asset is
		 * removed and re-created again.
		 * Possible "state_change" values when compare_duration is specified:
		 * * "ADDED":   indicates that the asset was not present at the start of
		 * compare_duration, but present at reference_time.
		 * * "REMOVED": indicates that the asset was present at the start of
		 * compare_duration, but not present at reference_time.
		 * * "ACTIVE":  indicates that the asset was present at both the
		 * start and the end of the time period defined by
		 * compare_duration and reference_time.
		 * If compare_duration is not specified, then the only possible state_change
		 * is "UNUSED", which will be the state_change set for all assets present at
		 * read_time.
		 * If this field is set then `state_change` must be a specified field in
		 * `group_by`.
		 */
		compareDuration?: string;

		/**
		 * Expression that defines the filter to apply across assets.
		 * The expression is a list of zero or more restrictions combined via logical
		 * operators `AND` and `OR`.
		 * Parentheses are supported, and `OR` has higher precedence than `AND`.
		 * Restrictions have the form `<field> <operator> <value>` and may have a `-`
		 * character in front of them to indicate negation. The fields map to those
		 * defined in the Asset resource. Examples include:
		 * * name
		 * * security_center_properties.resource_name
		 * * resource_properties.a_property
		 * * security_marks.marks.marka
		 * The supported operators are:
		 * * `=` for all value types.
		 * * `>`, `<`, `>=`, `<=` for integer values.
		 * * `:`, meaning substring matching, for strings.
		 * The supported value types are:
		 * * string literals in quotes.
		 * * integer literals without quotes.
		 * * boolean literals `true` and `false` without quotes.
		 * The following field and operator combinations are supported:
		 * * name: `=`
		 * * update_time: `=`, `>`, `<`, `>=`, `<=`
		 * Usage: This should be milliseconds since epoch or an RFC3339 string.
		 * Examples:
		 * "update_time = \"2019-06-10T16:07:18-07:00\""
		 * "update_time = 1560208038000"
		 * * create_time: `=`, `>`, `<`, `>=`, `<=`
		 * Usage: This should be milliseconds since epoch or an RFC3339 string.
		 * Examples:
		 * "create_time = \"2019-06-10T16:07:18-07:00\""
		 * "create_time = 1560208038000"
		 * * iam_policy.policy_blob: `=`, `:`
		 * * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=`
		 * * security_marks.marks: `=`, `:`
		 * * security_center_properties.resource_name: `=`, `:`
		 * * security_center_properties.resource_display_name: `=`, `:`
		 * * security_center_properties.resource_type: `=`, `:`
		 * * security_center_properties.resource_parent: `=`, `:`
		 * * security_center_properties.resource_parent_display_name: `=`, `:`
		 * * security_center_properties.resource_project: `=`, `:`
		 * * security_center_properties.resource_project_display_name: `=`, `:`
		 * * security_center_properties.resource_owners: `=`, `:`
		 * For example, `resource_properties.size = 100` is a valid filter string.
		 * Use a partial match on the empty string to filter based on a property
		 * existing: "resource_properties.my_property : \"\""
		 * Use a negated partial match on the empty string to filter based on a
		 * property not existing: "-resource_properties.my_property : \"\""
		 */
		filter?: string;

		/**
		 * Required. Expression that defines what assets fields to use for grouping. The string
		 * value should follow SQL syntax: comma separated list of fields. For
		 * example:
		 * "security_center_properties.resource_project,security_center_properties.project".
		 * The following fields are supported when compare_duration is not set:
		 * * security_center_properties.resource_project
		 * * security_center_properties.resource_project_display_name
		 * * security_center_properties.resource_type
		 * * security_center_properties.resource_parent
		 * * security_center_properties.resource_parent_display_name
		 * The following fields are supported when compare_duration is set:
		 * * security_center_properties.resource_type
		 * * security_center_properties.resource_project_display_name
		 * * security_center_properties.resource_parent_display_name
		 */
		groupBy?: string;

		/**
		 * The maximum number of results to return in a single response. Default is
		 * 10, minimum is 1, maximum is 1000.
		 */
		pageSize?: number;

		/**
		 * The value returned by the last `GroupAssetsResponse`; indicates
		 * that this is a continuation of a prior `GroupAssets` call, and that the
		 * system should return the next page of data.
		 */
		pageToken?: string;

		/**
		 * Time used as a reference point when filtering assets. The filter is limited
		 * to assets existing at the supplied time and their values are those at that
		 * specific time. Absence of this field will default to the API's version of
		 * NOW.
		 */
		readTime?: string;
	}


	/** Response message for grouping by assets. */
	export interface GroupAssetsResponse {

		/**
		 * Group results. There exists an element for each existing unique
		 * combination of property/values. The element contains a count for the number
		 * of times those specific property/values appear.
		 */
		groupByResults?: Array<GroupResult>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results.
		 */
		nextPageToken?: string;

		/** Time used for executing the groupBy request. */
		readTime?: string;

		/** The total number of results matching the query. */
		totalSize?: number;
	}


	/** Result containing the properties and count of a groupBy request. */
	export interface GroupResult {

		/** Total count of resources for the given properties. */
		count?: string;

		/** Properties matching the groupBy fields in the request. */
		properties?: {[id: string]: any };
	}


	/** Request message for grouping by findings. */
	export interface GroupFindingsRequest {

		/**
		 * When compare_duration is set, the GroupResult's "state_change" attribute is
		 * updated to indicate whether the finding had its state changed, the
		 * finding's state remained unchanged, or if the finding was added during the
		 * compare_duration period of time that precedes the read_time. This is the
		 * time between (read_time - compare_duration) and read_time.
		 * The state_change value is derived based on the presence and state of the
		 * finding at the two points in time. Intermediate state changes between the
		 * two times don't affect the result. For example, the results aren't affected
		 * if the finding is made inactive and then active again.
		 * Possible "state_change" values when compare_duration is specified:
		 * * "CHANGED":   indicates that the finding was present and matched the given
		 * filter at the start of compare_duration, but changed its
		 * state at read_time.
		 * * "UNCHANGED": indicates that the finding was present and matched the given
		 * filter at the start of compare_duration and did not change
		 * state at read_time.
		 * * "ADDED":     indicates that the finding did not match the given filter or
		 * was not present at the start of compare_duration, but was
		 * present at read_time.
		 * * "REMOVED":   indicates that the finding was present and matched the
		 * filter at the start of compare_duration, but did not match
		 * the filter at read_time.
		 * If compare_duration is not specified, then the only possible state_change
		 * is "UNUSED",  which will be the state_change set for all findings present
		 * at read_time.
		 * If this field is set then `state_change` must be a specified field in
		 * `group_by`.
		 */
		compareDuration?: string;

		/**
		 * Expression that defines the filter to apply across findings.
		 * The expression is a list of one or more restrictions combined via logical
		 * operators `AND` and `OR`.
		 * Parentheses are supported, and `OR` has higher precedence than `AND`.
		 * Restrictions have the form `<field> <operator> <value>` and may have a `-`
		 * character in front of them to indicate negation. Examples include:
		 * * name
		 * * source_properties.a_property
		 * * security_marks.marks.marka
		 * The supported operators are:
		 * * `=` for all value types.
		 * * `>`, `<`, `>=`, `<=` for integer values.
		 * * `:`, meaning substring matching, for strings.
		 * The supported value types are:
		 * * string literals in quotes.
		 * * integer literals without quotes.
		 * * boolean literals `true` and `false` without quotes.
		 * The following field and operator combinations are supported:
		 * * name: `=`
		 * * parent: `=`, `:`
		 * * resource_name: `=`, `:`
		 * * state: `=`, `:`
		 * * category: `=`, `:`
		 * * external_uri: `=`, `:`
		 * * event_time: `=`, `>`, `<`, `>=`, `<=`
		 * Usage: This should be milliseconds since epoch or an RFC3339 string.
		 * Examples:
		 * "event_time = \"2019-06-10T16:07:18-07:00\""
		 * "event_time = 1560208038000"
		 * * security_marks.marks: `=`, `:`
		 * * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=`
		 * For example, `source_properties.size = 100` is a valid filter string.
		 * Use a partial match on the empty string to filter based on a property
		 * existing: "source_properties.my_property : \"\""
		 * Use a negated partial match on the empty string to filter based on a
		 * property not existing: "-source_properties.my_property : \"\""
		 */
		filter?: string;

		/**
		 * Required. Expression that defines what assets fields to use for grouping (including
		 * `state_change`). The string value should follow SQL syntax: comma separated
		 * list of fields. For example: "parent,resource_name".
		 * The following fields are supported:
		 * * resource_name
		 * * category
		 * * state
		 * * parent
		 * The following fields are supported when compare_duration is set:
		 * * state_change
		 */
		groupBy?: string;

		/**
		 * The maximum number of results to return in a single response. Default is
		 * 10, minimum is 1, maximum is 1000.
		 */
		pageSize?: number;

		/**
		 * The value returned by the last `GroupFindingsResponse`; indicates
		 * that this is a continuation of a prior `GroupFindings` call, and
		 * that the system should return the next page of data.
		 */
		pageToken?: string;

		/**
		 * Time used as a reference point when filtering findings. The filter is
		 * limited to findings existing at the supplied time and their values are
		 * those at that specific time. Absence of this field will default to the
		 * API's version of NOW.
		 */
		readTime?: string;
	}


	/** Response message for group by findings. */
	export interface GroupFindingsResponse {

		/**
		 * Group results. There exists an element for each existing unique
		 * combination of property/values. The element contains a count for the number
		 * of times those specific property/values appear.
		 */
		groupByResults?: Array<GroupResult>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results.
		 */
		nextPageToken?: string;

		/** Time used for executing the groupBy request. */
		readTime?: string;

		/** The total number of results matching the query. */
		totalSize?: number;
	}


	/** Response message for listing assets. */
	export interface ListAssetsResponse {

		/** Assets matching the list request. */
		listAssetsResults?: Array<ListAssetsResult>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results.
		 */
		nextPageToken?: string;

		/** Time used for executing the list request. */
		readTime?: string;

		/** The total number of assets matching the query. */
		totalSize?: number;
	}


	/** Result containing the Asset and its State. */
	export interface ListAssetsResult {

		/**
		 * Security Command Center representation of a Google Cloud
		 * resource.
		 * The Asset is a Security Command Center resource that captures information
		 * about a single Google Cloud resource. All modifications to an Asset are only
		 * within the context of Security Command Center and don't affect the referenced
		 * Google Cloud resource.
		 */
		asset?: Asset;

		/** State change of the asset between the points in time. */
		stateChange?: ListAssetsResultStateChange;
	}

	export enum ListAssetsResultStateChange { UNUSED = 0, ADDED = 1, REMOVED = 2, ACTIVE = 3 }


	/** Response message for listing findings. */
	export interface ListFindingsResponse {

		/** Findings matching the list request. */
		listFindingsResults?: Array<ListFindingsResult>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results.
		 */
		nextPageToken?: string;

		/** Time used for executing the list request. */
		readTime?: string;

		/** The total number of findings matching the query. */
		totalSize?: number;
	}


	/** Result containing the Finding and its StateChange. */
	export interface ListFindingsResult {

		/**
		 * Security Command Center finding.
		 * A finding is a record of assessment data like security, risk, health, or
		 * privacy, that is ingested into Security Command Center for presentation,
		 * notification, analysis, policy testing, and enforcement. For example, a
		 * cross-site scripting (XSS) vulnerability in an App Engine application is a
		 * finding.
		 */
		finding?: Finding;

		/**
		 * Information related to the Google Cloud resource that is
		 * associated with this finding.
		 */
		resource?: Resource;

		/** State change of the finding between the points in time. */
		stateChange?: ListFindingsResultStateChange;
	}


	/**
	 * Information related to the Google Cloud resource that is
	 * associated with this finding.
	 */
	export interface Resource {

		/**
		 * The full resource name of the resource. See:
		 * https://cloud.google.com/apis/design/resource_names#full_resource_name
		 */
		name?: string;

		/** The human readable name of resource's parent. */
		parentDisplayName?: string;

		/** The full resource name of resource's parent. */
		parentName?: string;

		/** The human readable name of project that the resource belongs to. */
		projectDisplayName?: string;

		/** The full resource name of project that the resource belongs to. */
		projectName?: string;
	}

	export enum ListFindingsResultStateChange { UNUSED = 0, CHANGED = 1, UNCHANGED = 2, ADDED = 3, REMOVED = 4 }


	/** Response message for listing notification configs. */
	export interface ListNotificationConfigsResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results.
		 */
		nextPageToken?: string;

		/** Notification configs belonging to the requested parent. */
		notificationConfigs?: Array<NotificationConfig>;
	}


	/**
	 * Cloud Security Command Center (Cloud SCC) notification configs.
	 * A notification config is a Cloud SCC resource that contains the configuration
	 * to send notifications for create/update events of findings, assets and etc.
	 */
	export interface NotificationConfig {

		/** The description of the notification config (max of 1024 characters). */
		description?: string;

		/**
		 * The relative resource name of this notification config. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Example:
		 * "organizations/{organization_id}/notificationConfigs/notify_public_bucket".
		 */
		name?: string;

		/**
		 * The PubSub topic to send notifications to. Its format is
		 * "projects/[project_id]/topics/[topic]".
		 */
		pubsubTopic?: string;

		/**
		 * Output only. The service account that needs "pubsub.topics.publish"
		 * permission to publish to the PubSub topic.
		 */
		serviceAccount?: string;

		/**
		 * The config for streaming-based notifications, which send each event as soon
		 * as it is detected.
		 */
		streamingConfig?: StreamingConfig;
	}


	/**
	 * The config for streaming-based notifications, which send each event as soon
	 * as it is detected.
	 */
	export interface StreamingConfig {

		/**
		 * Expression that defines the filter to apply across create/update events
		 * of assets or findings as specified by the event type. The expression is a
		 * list of zero or more restrictions combined via logical operators `AND`
		 * and `OR`. Parentheses are supported, and `OR` has higher precedence than
		 * `AND`.
		 * Restrictions have the form `<field> <operator> <value>` and may have a
		 * `-` character in front of them to indicate negation. The fields map to
		 * those defined in the corresponding resource.
		 * The supported operators are:
		 * * `=` for all value types.
		 * * `>`, `<`, `>=`, `<=` for integer values.
		 * * `:`, meaning substring matching, for strings.
		 * The supported value types are:
		 * * string literals in quotes.
		 * * integer literals without quotes.
		 * * boolean literals `true` and `false` without quotes.
		 */
		filter?: string;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}


	/** Response message for listing sources. */
	export interface ListSourcesResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results.
		 */
		nextPageToken?: string;

		/** Sources belonging to the requested parent. */
		sources?: Array<Source>;
	}


	/**
	 * Security Command Center finding source. A finding source
	 * is an entity or a mechanism that can produce a finding. A source is like a
	 * container of findings that come from the same scanner, logger, monitor, and
	 * other tools.
	 */
	export interface Source {

		/**
		 * The description of the source (max of 1024 characters).
		 * Example:
		 * "Web Security Scanner is a web security scanner for common
		 * vulnerabilities in App Engine applications. It can automatically
		 * scan and detect four common vulnerabilities, including cross-site-scripting
		 * (XSS), Flash injection, mixed content (HTTP in HTTPS), and
		 * outdated or insecure libraries."
		 */
		description?: string;

		/**
		 * The source's display name.
		 * A source's display name must be unique amongst its siblings, for example,
		 * two sources with the same parent can't share the same display name.
		 * The display name must have a length between 1 and 64 characters
		 * (inclusive).
		 */
		displayName?: string;

		/**
		 * The relative resource name of this source. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Example:
		 * "organizations/{organization_id}/sources/{source_id}"
		 */
		name?: string;
	}


	/**
	 * User specified settings that are attached to the Security Command
	 * Center organization.
	 */
	export interface OrganizationSettings {

		/** The configuration used for Asset Discovery runs. */
		assetDiscoveryConfig?: AssetDiscoveryConfig;

		/**
		 * A flag that indicates if Asset Discovery should be enabled. If the flag is
		 * set to `true`, then discovery of assets will occur. If it is set to `false,
		 * all historical assets will remain, but discovery of future assets will not
		 * occur.
		 */
		enableAssetDiscovery?: boolean;

		/**
		 * The relative resource name of the settings. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Example:
		 * "organizations/{organization_id}/organizationSettings".
		 */
		name?: string;
	}


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
		auditConfigs?: Array<AuditConfig>;

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding>;

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
		etag?: string;

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
		version?: number;
	}


	/** Request message for running asset discovery for an organization. */
	export interface RunAssetDiscoveryRequest {
	}


	/** Request message for updating a finding's state. */
	export interface SetFindingStateRequest {

		/** Required. The time at which the updated state takes effect. */
		startTime?: string;

		/** Required. The desired State of the finding. */
		state?: FindingState;
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
		policy?: Policy;

		/**
		 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
		 * the fields in the mask will be modified. If no mask is provided, the
		 * following default mask is used:
		 * paths: "bindings, etag"
		 * This field is only used by Cloud IAM.
		 */
		updateMask?: string;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string>;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is
		 * no longer interested in the operation result. It does not cancel the
		 * operation. If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_operations_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates security marks.
		 * Patch v1/{name}
		 * @param {string} name The relative resource name of the SecurityMarks. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Examples:
		 * "organizations/{organization_id}/assets/{asset_id}/securityMarks"
		 * "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
		 * @param {string} startTime The time at which the updated SecurityMarks take effect.
		 * If not set uses current server time.  Updates will be applied to the
		 * SecurityMarks that are active immediately preceding this time.
		 * @param {string} updateMask The FieldMask to use when updating the security marks resource.
		 * The field mask must not contain duplicate fields.
		 * If empty or set to "marks", all marks will be replaced.  Individual
		 * marks can be updated using "marks.<mark_key>".
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_sources_findings_updateSecurityMarks(name: string, startTime: string, updateMask: string, requestBody: SecurityMarks): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation.  The server
		 * makes a best effort to cancel the operation, but success is not
		 * guaranteed.  If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
		 * Operations.GetOperation or
		 * other methods to check whether the cancellation succeeded or whether the
		 * operation completed despite cancellation. On successful cancellation,
		 * the operation is not deleted; instead, it becomes an operation with
		 * an Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_operations_cancel(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the state of a finding.
		 * Post v1/{name}:setState
		 * @param {string} name Required. The relative resource name of the finding. See:
		 * https://cloud.google.com/apis/design/resource_names#relative_resource_name
		 * Example:
		 * "organizations/{organization_id}/sources/{source_id}/finding/{finding_id}".
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_sources_findings_setState(name: string, requestBody: SetFindingStateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists an organization's assets.
		 * Get v1/{parent}/assets
		 * @param {string} parent Required. Name of the organization assets should belong to. Its format is
		 * "organizations/[organization_id]".
		 * @param {string} compareDuration When compare_duration is set, the ListAssetsResult's "state_change"
		 * attribute is updated to indicate whether the asset was added, removed, or
		 * remained present during the compare_duration period of time that precedes
		 * the read_time. This is the time between (read_time - compare_duration) and
		 * read_time.
		 * The state_change value is derived based on the presence of the asset at the
		 * two points in time. Intermediate state changes between the two times don't
		 * affect the result. For example, the results aren't affected if the asset is
		 * removed and re-created again.
		 * Possible "state_change" values when compare_duration is specified:
		 * * "ADDED":   indicates that the asset was not present at the start of
		 *                compare_duration, but present at read_time.
		 * * "REMOVED": indicates that the asset was present at the start of
		 *                compare_duration, but not present at read_time.
		 * * "ACTIVE":  indicates that the asset was present at both the
		 *                start and the end of the time period defined by
		 *                compare_duration and read_time.
		 * If compare_duration is not specified, then the only possible state_change
		 * is "UNUSED",  which will be the state_change set for all assets present at
		 * read_time.
		 * @param {string} fieldMask Optional. A field mask to specify the ListAssetsResult fields to be listed in the
		 * response.
		 * An empty field mask will list all fields.
		 * @param {string} filter Expression that defines the filter to apply across assets.
		 * The expression is a list of zero or more restrictions combined via logical
		 * operators `AND` and `OR`.
		 * Parentheses are supported, and `OR` has higher precedence than `AND`.
		 * Restrictions have the form `<field> <operator> <value>` and may have a `-`
		 * character in front of them to indicate negation. The fields map to those
		 * defined in the Asset resource. Examples include:
		 * * name
		 * * security_center_properties.resource_name
		 * * resource_properties.a_property
		 * * security_marks.marks.marka
		 * The supported operators are:
		 * * `=` for all value types.
		 * * `>`, `<`, `>=`, `<=` for integer values.
		 * * `:`, meaning substring matching, for strings.
		 * The supported value types are:
		 * * string literals in quotes.
		 * * integer literals without quotes.
		 * * boolean literals `true` and `false` without quotes.
		 * The following are the allowed field and operator combinations:
		 * * name: `=`
		 * * update_time: `=`, `>`, `<`, `>=`, `<=`
		 *   Usage: This should be milliseconds since epoch or an RFC3339 string.
		 *   Examples:
		 *     "update_time = \"2019-06-10T16:07:18-07:00\""
		 *     "update_time = 1560208038000"
		 * * create_time: `=`, `>`, `<`, `>=`, `<=`
		 *   Usage: This should be milliseconds since epoch or an RFC3339 string.
		 *   Examples:
		 *     "create_time = \"2019-06-10T16:07:18-07:00\""
		 *     "create_time = 1560208038000"
		 * * iam_policy.policy_blob: `=`, `:`
		 * * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=`
		 * * security_marks.marks: `=`, `:`
		 * * security_center_properties.resource_name: `=`, `:`
		 * * security_center_properties.resource_display_name: `=`, `:`
		 * * security_center_properties.resource_type: `=`, `:`
		 * * security_center_properties.resource_parent: `=`, `:`
		 * * security_center_properties.resource_parent_display_name: `=`, `:`
		 * * security_center_properties.resource_project: `=`, `:`
		 * * security_center_properties.resource_project_display_name: `=`, `:`
		 * * security_center_properties.resource_owners: `=`, `:`
		 * For example, `resource_properties.size = 100` is a valid filter string.
		 * Use a partial match on the empty string to filter based on a property
		 * existing: "resource_properties.my_property : \"\""
		 * Use a negated partial match on the empty string to filter based on a
		 * property not existing: "-resource_properties.my_property : \"\""
		 * @param {string} orderBy Expression that defines what fields and order to use for sorting. The
		 * string value should follow SQL syntax: comma separated list of fields. For
		 * example: "name,resource_properties.a_property". The default sorting order
		 * is ascending. To specify descending order for a field, a suffix " desc"
		 * should be appended to the field name. For example: "name
		 * desc,resource_properties.a_property". Redundant space characters in the
		 * syntax are insignificant. "name desc,resource_properties.a_property" and "
		 * name     desc  ,   resource_properties.a_property  " are equivalent.
		 * The following fields are supported:
		 * name
		 * update_time
		 * resource_properties
		 * security_marks.marks
		 * security_center_properties.resource_name
		 * security_center_properties.resource_display_name
		 * security_center_properties.resource_parent
		 * security_center_properties.resource_parent_display_name
		 * security_center_properties.resource_project
		 * security_center_properties.resource_project_display_name
		 * security_center_properties.resource_type
		 * @param {number} pageSize The maximum number of results to return in a single response. Default is
		 * 10, minimum is 1, maximum is 1000.
		 * @param {string} pageToken The value returned by the last `ListAssetsResponse`; indicates
		 * that this is a continuation of a prior `ListAssets` call, and
		 * that the system should return the next page of data.
		 * @param {string} readTime Time used as a reference point when filtering assets. The filter is limited
		 * to assets existing at the supplied time and their values are those at that
		 * specific time. Absence of this field will default to the API's version of
		 * NOW.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_assets_list(parent: string, compareDuration: string, fieldMask: string, filter: string, orderBy: string, pageSize: number, pageToken: string, readTime: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets&compareDuration=' + (compareDuration == null ? '' : encodeURIComponent(compareDuration)) + '&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readTime=' + (readTime == null ? '' : encodeURIComponent(readTime)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Filters an organization's assets and  groups them by their specified
		 * properties.
		 * Post v1/{parent}/assets:group
		 * @param {string} parent Required. Name of the organization to groupBy. Its format is
		 * "organizations/[organization_id]".
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_assets_group(parent: string, requestBody: GroupAssetsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets:group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Runs asset discovery. The discovery is tracked with a long-running
		 * operation.
		 * This API can only be called with limited frequency for an organization. If
		 * it is called too frequently the caller will receive a TOO_MANY_REQUESTS
		 * error.
		 * Post v1/{parent}/assets:runDiscovery
		 * @param {string} parent Required. Name of the organization to run asset discovery for. Its format is
		 * "organizations/[organization_id]".
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_assets_runDiscovery(parent: string, requestBody: RunAssetDiscoveryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets:runDiscovery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists an organization or source's findings.
		 * To list across all sources provide a `-` as the source id.
		 * Example: /v1/organizations/{organization_id}/sources/-/findings
		 * Get v1/{parent}/findings
		 * @param {string} parent Required. Name of the source the findings belong to. Its format is
		 * "organizations/[organization_id]/sources/[source_id]". To list across all
		 * sources provide a source_id of `-`. For example:
		 * organizations/{organization_id}/sources/-
		 * @param {string} compareDuration When compare_duration is set, the ListFindingsResult's "state_change"
		 * attribute is updated to indicate whether the finding had its state changed,
		 * the finding's state remained unchanged, or if the finding was added in any
		 * state during the compare_duration period of time that precedes the
		 * read_time. This is the time between (read_time - compare_duration) and
		 * read_time.
		 * The state_change value is derived based on the presence and state of the
		 * finding at the two points in time. Intermediate state changes between the
		 * two times don't affect the result. For example, the results aren't affected
		 * if the finding is made inactive and then active again.
		 * Possible "state_change" values when compare_duration is specified:
		 * * "CHANGED":   indicates that the finding was present and matched the given
		 *                  filter at the start of compare_duration, but changed its
		 *                  state at read_time.
		 * * "UNCHANGED": indicates that the finding was present and matched the given
		 *                  filter at the start of compare_duration and did not change
		 *                  state at read_time.
		 * * "ADDED":     indicates that the finding did not match the given filter or
		 *                  was not present at the start of compare_duration, but was
		 *                  present at read_time.
		 * * "REMOVED":   indicates that the finding was present and matched the
		 *                  filter at the start of compare_duration, but did not match
		 *                  the filter at read_time.
		 * If compare_duration is not specified, then the only possible state_change
		 * is "UNUSED", which will be the state_change set for all findings present at
		 * read_time.
		 * @param {string} fieldMask Optional. A field mask to specify the Finding fields to be listed in the response.
		 * An empty field mask will list all fields.
		 * @param {string} filter Expression that defines the filter to apply across findings.
		 * The expression is a list of one or more restrictions combined via logical
		 * operators `AND` and `OR`.
		 * Parentheses are supported, and `OR` has higher precedence than `AND`.
		 * Restrictions have the form `<field> <operator> <value>` and may have a `-`
		 * character in front of them to indicate negation. Examples include:
		 *  * name
		 *  * source_properties.a_property
		 *  * security_marks.marks.marka
		 * The supported operators are:
		 * * `=` for all value types.
		 * * `>`, `<`, `>=`, `<=` for integer values.
		 * * `:`, meaning substring matching, for strings.
		 * The supported value types are:
		 * * string literals in quotes.
		 * * integer literals without quotes.
		 * * boolean literals `true` and `false` without quotes.
		 * The following field and operator combinations are supported:
		 * name: `=`
		 * parent: `=`, `:`
		 * resource_name: `=`, `:`
		 * state: `=`, `:`
		 * category: `=`, `:`
		 * external_uri: `=`, `:`
		 * event_time: `=`, `>`, `<`, `>=`, `<=`
		 *   Usage: This should be milliseconds since epoch or an RFC3339 string.
		 *   Examples:
		 *     "event_time = \"2019-06-10T16:07:18-07:00\""
		 *     "event_time = 1560208038000"
		 * security_marks.marks: `=`, `:`
		 * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=`
		 * For example, `source_properties.size = 100` is a valid filter string.
		 * Use a partial match on the empty string to filter based on a property
		 * existing: "source_properties.my_property : \"\""
		 * Use a negated partial match on the empty string to filter based on a
		 * property not existing: "-source_properties.my_property : \"\""
		 * @param {string} orderBy Expression that defines what fields and order to use for sorting. The
		 * string value should follow SQL syntax: comma separated list of fields. For
		 * example: "name,resource_properties.a_property". The default sorting order
		 * is ascending. To specify descending order for a field, a suffix " desc"
		 * should be appended to the field name. For example: "name
		 * desc,source_properties.a_property". Redundant space characters in the
		 * syntax are insignificant. "name desc,source_properties.a_property" and "
		 * name     desc  ,   source_properties.a_property  " are equivalent.
		 * The following fields are supported:
		 * name
		 * parent
		 * state
		 * category
		 * resource_name
		 * event_time
		 * source_properties
		 * security_marks.marks
		 * @param {number} pageSize The maximum number of results to return in a single response. Default is
		 * 10, minimum is 1, maximum is 1000.
		 * @param {string} pageToken The value returned by the last `ListFindingsResponse`; indicates
		 * that this is a continuation of a prior `ListFindings` call, and
		 * that the system should return the next page of data.
		 * @param {string} readTime Time used as a reference point when filtering findings. The filter is
		 * limited to findings existing at the supplied time and their values are
		 * those at that specific time. Absence of this field will default to the
		 * API's version of NOW.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_sources_findings_list(parent: string, compareDuration: string, fieldMask: string, filter: string, orderBy: string, pageSize: number, pageToken: string, readTime: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/findings&compareDuration=' + (compareDuration == null ? '' : encodeURIComponent(compareDuration)) + '&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readTime=' + (readTime == null ? '' : encodeURIComponent(readTime)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a finding. The corresponding source must exist for finding creation
		 * to succeed.
		 * Post v1/{parent}/findings
		 * @param {string} parent Required. Resource name of the new finding's parent. Its format should be
		 * "organizations/[organization_id]/sources/[source_id]".
		 * @param {string} findingId Required. Unique identifier provided by the client within the parent scope.
		 * It must be alphanumeric and less than or equal to 32 characters and
		 * greater than 0 characters in length.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_sources_findings_create(parent: string, findingId: string, requestBody: Finding): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/findings&findingId=' + (findingId == null ? '' : encodeURIComponent(findingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Filters an organization or source's findings and  groups them by their
		 * specified properties.
		 * To group across all sources provide a `-` as the source id.
		 * Example: /v1/organizations/{organization_id}/sources/-/findings
		 * Post v1/{parent}/findings:group
		 * @param {string} parent Required. Name of the source to groupBy. Its format is
		 * "organizations/[organization_id]/sources/[source_id]". To groupBy across
		 * all sources provide a source_id of `-`. For example:
		 * organizations/{organization_id}/sources/-
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_sources_findings_group(parent: string, requestBody: GroupFindingsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/findings:group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists notification configs.
		 * Get v1/{parent}/notificationConfigs
		 * @param {string} parent Required. Name of the organization to list notification configs.
		 * Its format is "organizations/[organization_id]".
		 * @param {number} pageSize The maximum number of results to return in a single response. Default is
		 * 10, minimum is 1, maximum is 1000.
		 * @param {string} pageToken The value returned by the last `ListNotificationConfigsResponse`; indicates
		 * that this is a continuation of a prior `ListNotificationConfigs` call, and
		 * that the system should return the next page of data.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_notificationConfigs_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notificationConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a notification config.
		 * Post v1/{parent}/notificationConfigs
		 * @param {string} parent Required. Resource name of the new notification config's parent. Its format is
		 * "organizations/[organization_id]".
		 * @param {string} configId Required.
		 * Unique identifier provided by the client within the parent scope.
		 * It must be between 1 and 128 characters, and contains alphanumeric
		 * characters, underscores or hyphens only.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_notificationConfigs_create(parent: string, configId: string, requestBody: NotificationConfig): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notificationConfigs&configId=' + (configId == null ? '' : encodeURIComponent(configId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all sources belonging to an organization.
		 * Get v1/{parent}/sources
		 * @param {string} parent Required. Resource name of the parent of sources to list. Its format should be
		 * "organizations/[organization_id]".
		 * @param {number} pageSize The maximum number of results to return in a single response. Default is
		 * 10, minimum is 1, maximum is 1000.
		 * @param {string} pageToken The value returned by the last `ListSourcesResponse`; indicates
		 * that this is a continuation of a prior `ListSources` call, and
		 * that the system should return the next page of data.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_sources_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sources&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a source.
		 * Post v1/{parent}/sources
		 * @param {string} parent Required. Resource name of the new source's parent. Its format should be
		 * "organizations/[organization_id]".
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_sources_create(parent: string, requestBody: Source): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy on the specified Source.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_sources_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on the specified Source.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_sources_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the permissions that a caller has on the specified source.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Securitycenter_organizations_sources_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

