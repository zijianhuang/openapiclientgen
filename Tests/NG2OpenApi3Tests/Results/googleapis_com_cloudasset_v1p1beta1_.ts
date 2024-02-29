import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the metadata of the longrunning operation for the AnalyzeIamPolicyLongrunning RPC. */
	export interface AnalyzeIamPolicyLongrunningMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;
	}

	/** Represents the metadata of the longrunning operation for the AnalyzeIamPolicyLongrunning RPC. */
	export interface AnalyzeIamPolicyLongrunningMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeIamPolicyLongrunningMetadataFormGroup() {
		return new FormGroup<AnalyzeIamPolicyLongrunningMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for AssetService.AnalyzeIamPolicyLongrunning. */
	export interface AnalyzeIamPolicyLongrunningResponse {
	}

	/** A response message for AssetService.AnalyzeIamPolicyLongrunning. */
	export interface AnalyzeIamPolicyLongrunningResponseFormProperties {
	}
	export function CreateAnalyzeIamPolicyLongrunningResponseFormGroup() {
		return new FormGroup<AnalyzeIamPolicyLongrunningResponseFormProperties>({
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


	/** Explanation about the IAM policy search result. */
	export interface Explanation {

		/** The map from roles to their included permission matching the permission query (e.g. containing `policy.role.permissions:`). Example role string: "roles/compute.instanceAdmin". The roles can also be found in the returned `policy` bindings. Note that the map is populated only if requesting with a permission query. */
		matchedPermissions?: {[id: string]: Permissions };
	}

	/** Explanation about the IAM policy search result. */
	export interface ExplanationFormProperties {

		/** The map from roles to their included permission matching the permission query (e.g. containing `policy.role.permissions:`). Example role string: "roles/compute.instanceAdmin". The roles can also be found in the returned `policy` bindings. Note that the map is populated only if requesting with a permission query. */
		matchedPermissions: FormControl<{[id: string]: Permissions } | null | undefined>,
	}
	export function CreateExplanationFormGroup() {
		return new FormGroup<ExplanationFormProperties>({
			matchedPermissions: new FormControl<{[id: string]: Permissions } | null | undefined>(undefined),
		});

	}


	/** IAM permissions. */
	export interface Permissions {

		/** A list of permissions. Example permission string: "compute.disk.get". */
		permissions?: Array<string>;
	}

	/** IAM permissions. */
	export interface PermissionsFormProperties {
	}
	export function CreatePermissionsFormGroup() {
		return new FormGroup<PermissionsFormProperties>({
		});

	}


	/** An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1Asset {

		/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
		accessLevel?: GoogleIdentityAccesscontextmanagerV1AccessLevel;

		/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
		accessPolicy?: GoogleIdentityAccesscontextmanagerV1AccessPolicy;

		/** The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
		ancestors?: Array<string>;

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType?: string | null;

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		iamPolicy?: Policy;

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		name?: string | null;

		/** A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource. */
		orgPolicy?: Array<GoogleCloudOrgpolicyV1Policy>;

		/** The detailed related assets with the `relationship_type`. */
		relatedAssets?: GoogleCloudAssetV1p7beta1RelatedAssets;

		/** A representation of a Google Cloud resource. */
		resource?: GoogleCloudAssetV1p7beta1Resource;

		/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project or VPC network can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
		servicePerimeter?: GoogleIdentityAccesscontextmanagerV1ServicePerimeter;

		/** The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. */
		updateTime?: string | null;
	}

	/** An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1AssetFormProperties {

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType: FormControl<string | null | undefined>,

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		name: FormControl<string | null | undefined>,

		/** The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1AssetFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1AssetFormProperties>({
			assetType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessLevel {

		/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
		basic?: GoogleIdentityAccesscontextmanagerV1BasicLevel;

		/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
		custom?: GoogleIdentityAccesscontextmanagerV1CustomLevel;

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description?: string | null;

		/** Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`. */
		name?: string | null;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;
	}

	/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessLevelFormProperties {

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description: FormControl<string | null | undefined>,

		/** Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`. */
		name: FormControl<string | null | undefined>,

		/** Human readable title. Must be unique within the Policy. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1AccessLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1AccessLevelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
	export interface GoogleIdentityAccesscontextmanagerV1BasicLevel {

		/** How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND. */
		combiningFunction?: GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null;

		/** Required. A list of requirements for the `AccessLevel` to be granted. */
		conditions?: Array<GoogleIdentityAccesscontextmanagerV1Condition>;
	}

	/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
	export interface GoogleIdentityAccesscontextmanagerV1BasicLevelFormProperties {

		/** How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND. */
		combiningFunction: FormControl<GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1BasicLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1BasicLevelFormProperties>({
			combiningFunction: new FormControl<GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction { AND = 'AND', OR = 'OR' }


	/** A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction. */
	export interface GoogleIdentityAccesscontextmanagerV1Condition {

		/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
		devicePolicy?: GoogleIdentityAccesscontextmanagerV1DevicePolicy;

		/** CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly, for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32" is not. The originating IP of a request must be in one of the listed subnets in order for this Condition to be true. If empty, all IP addresses are allowed. */
		ipSubnetworks?: Array<string>;

		/** The request must be made by one of the provided user or service accounts. Groups are not supported. Syntax: `user:{emailid}` `serviceAccount:{emailid}` If not specified, a request may come from any user. */
		members?: Array<string>;

		/** Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields. Any non-empty field criteria evaluating to false will result in the Condition to be satisfied. Defaults to false. */
		negate?: boolean | null;

		/** The request must originate from one of the provided countries/regions. Must be valid ISO 3166-1 alpha-2 codes. */
		regions?: Array<string>;

		/** A list of other access levels defined in the same `Policy`, referenced by resource name. Referencing an `AccessLevel` which does not exist is an error. All access levels listed must be granted for the Condition to be true. Example: "`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME"` */
		requiredAccessLevels?: Array<string>;

		/** The request must originate from one of the provided VPC networks in Google Cloud. Cannot specify this field together with `ip_subnetworks`. */
		vpcNetworkSources?: Array<GoogleIdentityAccesscontextmanagerV1VpcNetworkSource>;
	}

	/** A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction. */
	export interface GoogleIdentityAccesscontextmanagerV1ConditionFormProperties {

		/** Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields. Any non-empty field criteria evaluating to false will result in the Condition to be satisfied. Defaults to false. */
		negate: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ConditionFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ConditionFormProperties>({
			negate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
	export interface GoogleIdentityAccesscontextmanagerV1DevicePolicy {

		/** Allowed device management levels, an empty list allows all management levels. */
		allowedDeviceManagementLevels?: Array<string>;

		/** Allowed encryptions statuses, an empty list allows all statuses. */
		allowedEncryptionStatuses?: Array<string>;

		/** Allowed OS versions, an empty list allows all types and all versions. */
		osConstraints?: Array<GoogleIdentityAccesscontextmanagerV1OsConstraint>;

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval?: boolean | null;

		/** Whether the device needs to be corp owned. */
		requireCorpOwned?: boolean | null;

		/** Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`. */
		requireScreenlock?: boolean | null;
	}

	/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
	export interface GoogleIdentityAccesscontextmanagerV1DevicePolicyFormProperties {

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval: FormControl<boolean | null | undefined>,

		/** Whether the device needs to be corp owned. */
		requireCorpOwned: FormControl<boolean | null | undefined>,

		/** Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`. */
		requireScreenlock: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1DevicePolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1DevicePolicyFormProperties>({
			requireAdminApproval: new FormControl<boolean | null | undefined>(undefined),
			requireCorpOwned: new FormControl<boolean | null | undefined>(undefined),
			requireScreenlock: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A restriction on the OS type and version of devices making requests. */
	export interface GoogleIdentityAccesscontextmanagerV1OsConstraint {

		/** The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`. */
		minimumVersion?: string | null;

		/** Required. The allowed OS type. */
		osType?: GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null;

		/** Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request. */
		requireVerifiedChromeOs?: boolean | null;
	}

	/** A restriction on the OS type and version of devices making requests. */
	export interface GoogleIdentityAccesscontextmanagerV1OsConstraintFormProperties {

		/** The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`. */
		minimumVersion: FormControl<string | null | undefined>,

		/** Required. The allowed OS type. */
		osType: FormControl<GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null | undefined>,

		/** Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request. */
		requireVerifiedChromeOs: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1OsConstraintFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1OsConstraintFormProperties>({
			minimumVersion: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null | undefined>(undefined),
			requireVerifiedChromeOs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1OsConstraintOsType { OS_UNSPECIFIED = 'OS_UNSPECIFIED', DESKTOP_MAC = 'DESKTOP_MAC', DESKTOP_WINDOWS = 'DESKTOP_WINDOWS', DESKTOP_LINUX = 'DESKTOP_LINUX', DESKTOP_CHROME_OS = 'DESKTOP_CHROME_OS', ANDROID = 'ANDROID', IOS = 'IOS' }


	/** The originating network source in Google Cloud. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcNetworkSource {

		/** Sub-segment ranges inside of a VPC Network. */
		vpcSubnetwork?: GoogleIdentityAccesscontextmanagerV1VpcSubNetwork;
	}

	/** The originating network source in Google Cloud. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcNetworkSourceFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1VpcNetworkSourceFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1VpcNetworkSourceFormProperties>({
		});

	}


	/** Sub-segment ranges inside of a VPC Network. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcSubNetwork {

		/** Required. Network name. If the network is not part of the organization, the `compute.network.get` permission must be granted to the caller. Format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}` Example: `//compute.googleapis.com/projects/my-project/global/networks/network-1` */
		network?: string | null;

		/** CIDR block IP subnetwork specification. The IP address must be an IPv4 address and can be a public or private IP address. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. If empty, all IP addresses are allowed. */
		vpcIpSubnetworks?: Array<string>;
	}

	/** Sub-segment ranges inside of a VPC Network. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcSubNetworkFormProperties {

		/** Required. Network name. If the network is not part of the organization, the `compute.network.get` permission must be granted to the caller. Format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}` Example: `//compute.googleapis.com/projects/my-project/global/networks/network-1` */
		network: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1VpcSubNetworkFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1VpcSubNetworkFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
	export interface GoogleIdentityAccesscontextmanagerV1CustomLevel {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		expr?: Expr;
	}

	/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
	export interface GoogleIdentityAccesscontextmanagerV1CustomLevelFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1CustomLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1CustomLevelFormProperties>({
		});

	}


	/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessPolicy {

		/** Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. */
		etag?: string | null;

		/** Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}` */
		name?: string | null;

		/** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
		parent?: string | null;

		/** The scopes of the AccessPolicy. Scopes define which resources a policy can restrict and where its resources can be referenced. For example, policy A with `scopes=["folders/123"]` has the following behavior: - ServicePerimeter can only restrict projects within `folders/123`. - ServicePerimeter within policy A can only reference access levels defined within policy A. - Only one policy can include a given scope; thus, attempting to create a second policy which includes `folders/123` will result in an error. If no scopes are provided, then any resource within the organization can be restricted. Scopes cannot be modified after a policy is created. Policies can only have a single scope. Format: list of `folders/{folder_number}` or `projects/{project_number}` */
		scopes?: Array<string>;

		/** Required. Human readable title. Does not affect behavior. */
		title?: string | null;
	}

	/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessPolicyFormProperties {

		/** Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}` */
		name: FormControl<string | null | undefined>,

		/** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
		parent: FormControl<string | null | undefined>,

		/** Required. Human readable title. Does not affect behavior. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1AccessPolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1AccessPolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
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


	/** Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources. */
	export interface GoogleCloudOrgpolicyV1Policy {

		/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
		booleanPolicy?: GoogleCloudOrgpolicyV1BooleanPolicy;

		/** The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation. */
		constraint?: string | null;

		/** An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`. */
		etag?: string | null;

		/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
		listPolicy?: GoogleCloudOrgpolicyV1ListPolicy;

		/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
		restoreDefault?: GoogleCloudOrgpolicyV1RestoreDefault;

		/** The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored. */
		updateTime?: string | null;

		/**
		 * Version of the `Policy`. Default version is 0;
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources. */
	export interface GoogleCloudOrgpolicyV1PolicyFormProperties {

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
	export function CreateGoogleCloudOrgpolicyV1PolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1PolicyFormProperties>({
			constraint: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
	export interface GoogleCloudOrgpolicyV1BooleanPolicy {

		/** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`. */
		enforced?: boolean | null;
	}

	/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
	export interface GoogleCloudOrgpolicyV1BooleanPolicyFormProperties {

		/** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`. */
		enforced: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV1BooleanPolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1BooleanPolicyFormProperties>({
			enforced: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
	export interface GoogleCloudOrgpolicyV1ListPolicy {

		/** The policy all_values state. */
		allValues?: GoogleCloudOrgpolicyV1ListPolicyAllValues | null;

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
	export interface GoogleCloudOrgpolicyV1ListPolicyFormProperties {

		/** The policy all_values state. */
		allValues: FormControl<GoogleCloudOrgpolicyV1ListPolicyAllValues | null | undefined>,

		/** Determines the inheritance behavior for this `Policy`. By default, a `ListPolicy` set at a resource supersedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy. Setting `Policy` hierarchies that inherit both allowed values and denied values isn't recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`. For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied. The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`: Example 1 (no inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has `inherit_from_parent` `false` and values: {allowed_values: "E3" allowed_values: "E4"} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`. Example 2 (inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {value: "E3" value: "E4" inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`. Example 3 (inheriting both allowed and denied values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {denied_values: "E1"} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`. Example 4 (RestoreDefault): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 5 (no policy inherits parent policy): `organizations/foo` has no `Policy` set. `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 6 (ListConstraint allowing all): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`. Example 7 (ListConstraint allowing none): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`. Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, `organizations/foo` has a `Policy` with values: {allowed_values: "under:organizations/O1"} `projects/bar` has a `Policy` with: {allowed_values: "under:projects/P3"} {denied_values: "under:folders/F2"} The accepted values at `organizations/foo` are `organizations/O1`, `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`, `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`, `folders/F1`, `projects/P1`. */
		inheritFromParent: FormControl<boolean | null | undefined>,

		/** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`. */
		suggestedValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV1ListPolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1ListPolicyFormProperties>({
			allValues: new FormControl<GoogleCloudOrgpolicyV1ListPolicyAllValues | null | undefined>(undefined),
			inheritFromParent: new FormControl<boolean | null | undefined>(undefined),
			suggestedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudOrgpolicyV1ListPolicyAllValues { ALL_VALUES_UNSPECIFIED = 'ALL_VALUES_UNSPECIFIED', ALLOW = 'ALLOW', DENY = 'DENY' }


	/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
	export interface GoogleCloudOrgpolicyV1RestoreDefault {
	}

	/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
	export interface GoogleCloudOrgpolicyV1RestoreDefaultFormProperties {
	}
	export function CreateGoogleCloudOrgpolicyV1RestoreDefaultFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1RestoreDefaultFormProperties>({
		});

	}


	/** The detailed related assets with the `relationship_type`. */
	export interface GoogleCloudAssetV1p7beta1RelatedAssets {

		/** The peer resources of the relationship. */
		assets?: Array<GoogleCloudAssetV1p7beta1RelatedAsset>;

		/** The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
		relationshipAttributes?: GoogleCloudAssetV1p7beta1RelationshipAttributes;
	}

	/** The detailed related assets with the `relationship_type`. */
	export interface GoogleCloudAssetV1p7beta1RelatedAssetsFormProperties {
	}
	export function CreateGoogleCloudAssetV1p7beta1RelatedAssetsFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1RelatedAssetsFormProperties>({
		});

	}


	/** An asset identify in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1RelatedAsset {

		/** The ancestors of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
		ancestors?: Array<string>;

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		asset?: string | null;

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType?: string | null;
	}

	/** An asset identify in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1RelatedAssetFormProperties {

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		asset: FormControl<string | null | undefined>,

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1RelatedAssetFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1RelatedAssetFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			assetType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
	export interface GoogleCloudAssetV1p7beta1RelationshipAttributes {

		/** The detail of the relationship, e.g. `contains`, `attaches` */
		action?: string | null;

		/** The source asset type. Example: `compute.googleapis.com/Instance` */
		sourceResourceType?: string | null;

		/** The target asset type. Example: `compute.googleapis.com/Disk` */
		targetResourceType?: string | null;

		/** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
		type?: string | null;
	}

	/** The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
	export interface GoogleCloudAssetV1p7beta1RelationshipAttributesFormProperties {

		/** The detail of the relationship, e.g. `contains`, `attaches` */
		action: FormControl<string | null | undefined>,

		/** The source asset type. Example: `compute.googleapis.com/Instance` */
		sourceResourceType: FormControl<string | null | undefined>,

		/** The target asset type. Example: `compute.googleapis.com/Disk` */
		targetResourceType: FormControl<string | null | undefined>,

		/** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1RelationshipAttributesFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1RelationshipAttributesFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			sourceResourceType: new FormControl<string | null | undefined>(undefined),
			targetResourceType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a Google Cloud resource. */
	export interface GoogleCloudAssetV1p7beta1Resource {

		/** The content of the resource, in which some sensitive fields are removed and may not be present. */
		data?: {[id: string]: any };

		/** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryDocumentUri?: string | null;

		/** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryName?: string | null;

		/** The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. */
		location?: string | null;

		/** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently. */
		parent?: string | null;

		/** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
		resourceUrl?: string | null;

		/** The API version. Example: `v1` */
		version?: string | null;
	}

	/** A representation of a Google Cloud resource. */
	export interface GoogleCloudAssetV1p7beta1ResourceFormProperties {

		/** The content of the resource, in which some sensitive fields are removed and may not be present. */
		data: FormControl<{[id: string]: any } | null | undefined>,

		/** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryDocumentUri: FormControl<string | null | undefined>,

		/** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryName: FormControl<string | null | undefined>,

		/** The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. */
		location: FormControl<string | null | undefined>,

		/** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently. */
		parent: FormControl<string | null | undefined>,

		/** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
		resourceUrl: FormControl<string | null | undefined>,

		/** The API version. Example: `v1` */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1ResourceFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1ResourceFormProperties>({
			data: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			discoveryDocumentUri: new FormControl<string | null | undefined>(undefined),
			discoveryName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project or VPC network can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeter {

		/** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
		description?: string | null;

		/** Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. */
		name?: string | null;

		/** Perimeter type indicator. A single project or VPC network is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty. */
		perimeterType?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null;

		/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
		spec?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;

		/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
		status?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;

		/** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values. */
		useExplicitDryRunSpec?: boolean | null;
	}

	/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project or VPC network can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterFormProperties {

		/** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
		description: FormControl<string | null | undefined>,

		/** Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. */
		name: FormControl<string | null | undefined>,

		/** Perimeter type indicator. A single project or VPC network is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty. */
		perimeterType: FormControl<GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null | undefined>,

		/** Human readable title. Must be unique within the Policy. */
		title: FormControl<string | null | undefined>,

		/** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values. */
		useExplicitDryRunSpec: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ServicePerimeterFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ServicePerimeterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			perimeterType: new FormControl<GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			useExplicitDryRunSpec: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType { PERIMETER_TYPE_REGULAR = 'PERIMETER_TYPE_REGULAR', PERIMETER_TYPE_BRIDGE = 'PERIMETER_TYPE_BRIDGE' }


	/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig {

		/** A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty. */
		accessLevels?: Array<string>;

		/** List of EgressPolicies to apply to the perimeter. A perimeter may have multiple EgressPolicies, each of which is evaluated separately. Access is granted if any EgressPolicy grants it. Must be empty for a perimeter bridge. */
		egressPolicies?: Array<GoogleIdentityAccesscontextmanagerV1EgressPolicy>;

		/** List of IngressPolicies to apply to the perimeter. A perimeter may have multiple IngressPolicies, each of which is evaluated separately. Access is granted if any Ingress Policy grants it. Must be empty for a perimeter bridge. */
		ingressPolicies?: Array<GoogleIdentityAccesscontextmanagerV1IngressPolicy>;

		/** A list of Google Cloud resources that are inside of the service perimeter. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. */
		resources?: Array<string>;

		/** Google Cloud services that are subject to the Service Perimeter restrictions. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions. */
		restrictedServices?: Array<string>;

		/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
		vpcAccessibleServices?: GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
	}

	/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormProperties>({
		});

	}


	/** Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressPolicy {

		/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
		egressFrom?: GoogleIdentityAccesscontextmanagerV1EgressFrom;

		/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
		egressTo?: GoogleIdentityAccesscontextmanagerV1EgressTo;
	}

	/** Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressPolicyFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressPolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressPolicyFormProperties>({
		});

	}


	/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressFrom {

		/** A list of identities that are allowed access through this [EgressPolicy]. Should be in the format of email address. The email address should represent individual user or service account only. */
		identities?: Array<string>;

		/** Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType?: GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null;

		/** Whether to enforce traffic restrictions based on `sources` field. If the `sources` fields is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`. */
		sourceRestriction?: GoogleIdentityAccesscontextmanagerV1EgressFromSourceRestriction | null;

		/** Sources that this EgressPolicy authorizes access from. If this field is not empty, then `source_restriction` must be set to `SOURCE_RESTRICTION_ENABLED`. */
		sources?: Array<GoogleIdentityAccesscontextmanagerV1EgressSource>;
	}

	/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressFromFormProperties {

		/** Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType: FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>,

		/** Whether to enforce traffic restrictions based on `sources` field. If the `sources` fields is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`. */
		sourceRestriction: FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromSourceRestriction | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressFromFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressFromFormProperties>({
			identityType: new FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>(undefined),
			sourceRestriction: new FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromSourceRestriction | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType { IDENTITY_TYPE_UNSPECIFIED = 'IDENTITY_TYPE_UNSPECIFIED', ANY_IDENTITY = 'ANY_IDENTITY', ANY_USER_ACCOUNT = 'ANY_USER_ACCOUNT', ANY_SERVICE_ACCOUNT = 'ANY_SERVICE_ACCOUNT' }

	export enum GoogleIdentityAccesscontextmanagerV1EgressFromSourceRestriction { SOURCE_RESTRICTION_UNSPECIFIED = 'SOURCE_RESTRICTION_UNSPECIFIED', SOURCE_RESTRICTION_ENABLED = 'SOURCE_RESTRICTION_ENABLED', SOURCE_RESTRICTION_DISABLED = 'SOURCE_RESTRICTION_DISABLED' }


	/** The source that EgressPolicy authorizes access from inside the ServicePerimeter to somewhere outside the ServicePerimeter boundaries. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressSource {

		/** An AccessLevel resource name that allows protected resources inside the ServicePerimeters to access outside the ServicePerimeter boundaries. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If an AccessLevel name is not specified, only resources within the perimeter can be accessed through Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all EgressSources will be allowed. */
		accessLevel?: string | null;
	}

	/** The source that EgressPolicy authorizes access from inside the ServicePerimeter to somewhere outside the ServicePerimeter boundaries. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressSourceFormProperties {

		/** An AccessLevel resource name that allows protected resources inside the ServicePerimeters to access outside the ServicePerimeter boundaries. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If an AccessLevel name is not specified, only resources within the perimeter can be accessed through Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all EgressSources will be allowed. */
		accessLevel: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressSourceFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressSourceFormProperties>({
			accessLevel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressTo {

		/** A list of external resources that are allowed to be accessed. Only AWS and Azure resources are supported. For Amazon S3, the supported format is s3://BUCKET_NAME. For Azure Storage, the supported format is azure://myaccount.blob.core.windows.net/CONTAINER_NAME. A request matches if it contains an external resource in this list (Example: s3://bucket/path). Currently '*' is not allowed. */
		externalResources?: Array<string>;

		/** A list of ApiOperations allowed to be performed by the sources specified in the corresponding EgressFrom. A request matches if it uses an operation/service in this list. */
		operations?: Array<GoogleIdentityAccesscontextmanagerV1ApiOperation>;

		/** A list of resources, currently only projects in the form `projects/`, that are allowed to be accessed by sources defined in the corresponding EgressFrom. A request matches if it contains a resource in this list. If `*` is specified for `resources`, then this EgressTo rule will authorize access to all resources outside the perimeter. */
		resources?: Array<string>;
	}

	/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressToFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressToFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressToFormProperties>({
		});

	}


	/** Identification for an API Operation. */
	export interface GoogleIdentityAccesscontextmanagerV1ApiOperation {

		/** API methods or permissions to allow. Method or permission must belong to the service specified by `service_name` field. A single MethodSelector entry with `*` specified for the `method` field will allow all methods AND permissions for the service specified in `service_name`. */
		methodSelectors?: Array<GoogleIdentityAccesscontextmanagerV1MethodSelector>;

		/** The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services. */
		serviceName?: string | null;
	}

	/** Identification for an API Operation. */
	export interface GoogleIdentityAccesscontextmanagerV1ApiOperationFormProperties {

		/** The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ApiOperationFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ApiOperationFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An allowed method or permission of a service specified in ApiOperation. */
	export interface GoogleIdentityAccesscontextmanagerV1MethodSelector {

		/** A valid method name for the corresponding `service_name` in ApiOperation. If `*` is used as the value for the `method`, then ALL methods and permissions are allowed. */
		method?: string | null;

		/** A valid Cloud IAM permission for the corresponding `service_name` in ApiOperation. */
		permission?: string | null;
	}

	/** An allowed method or permission of a service specified in ApiOperation. */
	export interface GoogleIdentityAccesscontextmanagerV1MethodSelectorFormProperties {

		/** A valid method name for the corresponding `service_name` in ApiOperation. If `*` is used as the value for the `method`, then ALL methods and permissions are allowed. */
		method: FormControl<string | null | undefined>,

		/** A valid Cloud IAM permission for the corresponding `service_name` in ApiOperation. */
		permission: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1MethodSelectorFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1MethodSelectorFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressPolicy {

		/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
		ingressFrom?: GoogleIdentityAccesscontextmanagerV1IngressFrom;

		/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
		ingressTo?: GoogleIdentityAccesscontextmanagerV1IngressTo;
	}

	/** Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressPolicyFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressPolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressPolicyFormProperties>({
		});

	}


	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressFrom {

		/** A list of identities that are allowed access through this ingress policy. Should be in the format of email address. The email address should represent individual user or service account only. */
		identities?: Array<string>;

		/** Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType?: GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null;

		/** Sources that this IngressPolicy authorizes access from. */
		sources?: Array<GoogleIdentityAccesscontextmanagerV1IngressSource>;
	}

	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressFromFormProperties {

		/** Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType: FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressFromFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressFromFormProperties>({
			identityType: new FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>(undefined),
		});

	}


	/** The source that IngressPolicy authorizes access from. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressSource {

		/** An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed. */
		accessLevel?: string | null;

		/** A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported. */
		resource?: string | null;
	}

	/** The source that IngressPolicy authorizes access from. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressSourceFormProperties {

		/** An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed. */
		accessLevel: FormControl<string | null | undefined>,

		/** A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressSourceFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressSourceFormProperties>({
			accessLevel: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressTo {

		/** A list of ApiOperations allowed to be performed by the sources specified in corresponding IngressFrom in this ServicePerimeter. */
		operations?: Array<GoogleIdentityAccesscontextmanagerV1ApiOperation>;

		/** A list of resources, currently only projects in the form `projects/`, protected by this ServicePerimeter that are allowed to be accessed by sources defined in the corresponding IngressFrom. If a single `*` is specified, then access to all resources inside the perimeter are allowed. */
		resources?: Array<string>;
	}

	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressToFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressToFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressToFormProperties>({
		});

	}


	/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices {

		/** The list of APIs usable within the Service Perimeter. Must be empty unless 'enable_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter. */
		allowedServices?: Array<string>;

		/** Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'. */
		enableRestriction?: boolean | null;
	}

	/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormProperties {

		/** Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'. */
		enableRestriction: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormProperties>({
			enableRestriction: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The result for an IAM policy search. */
	export interface IamPolicySearchResult {

		/** Explanation about the IAM policy search result. */
		explanation?: Explanation;

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** The project that the associated Google Cloud resource belongs to, in the form of `projects/{project_number}`. If an IAM policy is set on a resource -- such as a Compute Engine instance or a Cloud Storage bucket -- the project field will indicate the project that contains the resource. If an IAM policy is set on a folder or orgnization, the project field will be empty. */
		project?: string | null;

		/** The [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name) of the resource associated with this IAM policy. */
		resource?: string | null;
	}

	/** The result for an IAM policy search. */
	export interface IamPolicySearchResultFormProperties {

		/** The project that the associated Google Cloud resource belongs to, in the form of `projects/{project_number}`. If an IAM policy is set on a resource -- such as a Compute Engine instance or a Cloud Storage bucket -- the project field will indicate the project that contains the resource. If an IAM policy is set on a folder or orgnization, the project field will be empty. */
		project: FormControl<string | null | undefined>,

		/** The [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name) of the resource associated with this IAM policy. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateIamPolicySearchResultFormGroup() {
		return new FormGroup<IamPolicySearchResultFormProperties>({
			project: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Search all IAM policies response. */
	export interface SearchAllIamPoliciesResponse {

		/** Set if there are more results than those appearing in this response; to get the next set of results, call this method again, using this value as the `page_token`. */
		nextPageToken?: string | null;

		/** A list of IAM policies that match the search query. Related information such as the associated resource is returned along with the policy. */
		results?: Array<IamPolicySearchResult>;
	}

	/** Search all IAM policies response. */
	export interface SearchAllIamPoliciesResponseFormProperties {

		/** Set if there are more results than those appearing in this response; to get the next set of results, call this method again, using this value as the `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchAllIamPoliciesResponseFormGroup() {
		return new FormGroup<SearchAllIamPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Search all resources response. */
	export interface SearchAllResourcesResponse {

		/** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** A list of resource that match the search query. */
		results?: Array<StandardResourceMetadata>;
	}

	/** Search all resources response. */
	export interface SearchAllResourcesResponseFormProperties {

		/** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchAllResourcesResponseFormGroup() {
		return new FormGroup<SearchAllResourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The standard metadata of a cloud resource. */
	export interface StandardResourceMetadata {

		/** Additional searchable attributes of this resource. Informational only. The exact set of attributes is subject to change. For example: project id, DNS name etc. */
		additionalAttributes?: Array<string>;

		/** The type of this resource. For example: "compute.googleapis.com/Disk". */
		assetType?: string | null;

		/** One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes. */
		description?: string | null;

		/** The display name of this resource. */
		displayName?: string | null;

		/** Labels associated with this resource. See [Labelling and grouping Google Cloud resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. */
		labels?: {[id: string]: string };

		/** Location can be "global", regional like "us-east1", or zonal like "us-west1-b". */
		location?: string | null;

		/** The full resource name. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		name?: string | null;

		/** Network tags associated with this resource. Like labels, network tags are a type of annotations used to group Google Cloud resources. See [Labelling Google Cloud resources](lhttps://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. */
		networkTags?: Array<string>;

		/** The project that this resource belongs to, in the form of `projects/{project_number}`. */
		project?: string | null;
	}

	/** The standard metadata of a cloud resource. */
	export interface StandardResourceMetadataFormProperties {

		/** The type of this resource. For example: "compute.googleapis.com/Disk". */
		assetType: FormControl<string | null | undefined>,

		/** One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes. */
		description: FormControl<string | null | undefined>,

		/** The display name of this resource. */
		displayName: FormControl<string | null | undefined>,

		/** Labels associated with this resource. See [Labelling and grouping Google Cloud resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Location can be "global", regional like "us-east1", or zonal like "us-west1-b". */
		location: FormControl<string | null | undefined>,

		/** The full resource name. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		name: FormControl<string | null | undefined>,

		/** The project that this resource belongs to, in the form of `projects/{project_number}`. */
		project: FormControl<string | null | undefined>,
	}
	export function CreateStandardResourceMetadataFormGroup() {
		return new FormGroup<StandardResourceMetadataFormProperties>({
			assetType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Searches all the IAM policies within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the IAM policies within a scope, even if they don't have `.getIamPolicy` permission of all the IAM policies. Callers should have `cloud.assets.SearchAllIamPolicies` permission on the requested scope, otherwise the request will be rejected.
		 * Get v1p1beta1/{scope}/iamPolicies:searchAll
		 * @param {string} scope Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be: * Organization number (such as "organizations/123") * Folder number (such as "folders/1234") * Project number (such as "projects/12345") * Project ID (such as "projects/abc")
		 * @param {number} pageSize Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters must be identical to those in the previous call.
		 * @param {string} query Optional. The query statement. Examples: * "policy:myuser@mydomain.com" * "policy:(myuser@mydomain.com viewer)"
		 * @return {SearchAllIamPoliciesResponse} Successful response
		 */
		Cloudasset_iamPolicies_searchAll(scope: string, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchAllIamPoliciesResponse> {
			return this.http.get<SearchAllIamPoliciesResponse>(this.baseUri + 'v1p1beta1/' + (scope == null ? '' : encodeURIComponent(scope)) + '/iamPolicies:searchAll&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.
		 * Get v1p1beta1/{scope}/resources:searchAll
		 * @param {string} scope Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be: * Organization number (such as "organizations/123") * Folder number (such as "folders/1234") * Project number (such as "projects/12345") * Project ID (such as "projects/abc")
		 * @param {Array<string>} assetTypes Optional. A list of asset types that this request searches for. If empty, it will search all the supported asset types.
		 * @param {string} orderBy Optional. A comma separated list of fields specifying the sorting order of the results. The default order is ascending. Add ` DESC` after the field name to indicate descending order. Redundant space characters are ignored. For example, ` location DESC , name `.
		 * @param {number} pageSize Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call.
		 * @param {string} query Optional. The query statement.
		 * @return {SearchAllResourcesResponse} Successful response
		 */
		Cloudasset_resources_searchAll(scope: string, assetTypes: Array<string> | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchAllResourcesResponse> {
			return this.http.get<SearchAllResourcesResponse>(this.baseUri + 'v1p1beta1/' + (scope == null ? '' : encodeURIComponent(scope)) + '/resources:searchAll&' + assetTypes?.map(z => `assetTypes=${encodeURIComponent(z)}`).join('&') + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}
	}

}

