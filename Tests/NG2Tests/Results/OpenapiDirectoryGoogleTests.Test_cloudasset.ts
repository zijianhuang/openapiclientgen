import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * An asset in Google Cloud. An asset can be any resource in the Google Cloud
	 * [resource
	 * hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy),
	 * a resource outside the Google Cloud resource hierarchy (such as Google
	 * Kubernetes Engine clusters and objects), or a Cloud IAM policy.
	 */
	export interface Asset {

		/**
		 * An `AccessLevel` is a label that can be applied to requests to Google Cloud
		 * services, along with a list of requirements necessary for the label to be
		 * applied.
		 */
		accessLevel?: GoogleIdentityAccesscontextmanagerV1AccessLevel;

		/**
		 * `AccessPolicy` is a container for `AccessLevels` (which define the necessary
		 * attributes to use Google Cloud services) and `ServicePerimeters` (which
		 * define regions of services able to freely pass data within a perimeter). An
		 * access policy is globally visible within an organization, and the
		 * restrictions it specifies apply to all projects within an organization.
		 */
		accessPolicy?: GoogleIdentityAccesscontextmanagerV1AccessPolicy;

		/**
		 * The ancestry path of an asset in Google Cloud [resource
		 * hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy),
		 * represented as a list of relative resource names. An ancestry path starts
		 * with the closest ancestor in the hierarchy and ends at root. If the asset
		 * is a project, folder, or organization, the ancestry path starts from the
		 * asset itself.
		 * For example: `["projects/123456789", "folders/5432", "organizations/1234"]`
		 */
		ancestors?: Array<string>;

		/**
		 * The type of the asset. For example: "compute.googleapis.com/Disk"
		 * See [Supported asset
		 * types](https://cloud.google.com/asset-inventory/docs/supported-asset-types)
		 * for more information.
		 */
		assetType?: string | null;

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
		iamPolicy?: Policy;

		/**
		 * The full name of the asset. For example:
		 * "//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1"
		 * See [Resource
		 * names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
		 * for more information.
		 */
		name?: string | null;

		/**
		 * A representation of an [organization
		 * policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy).
		 * There can be more than one organization policy with different constraints
		 * set on a given resource.
		 */
		orgPolicy?: Array<GoogleCloudOrgpolicyV1Policy>;

		/** A representation of a Google Cloud resource. */
		resource?: Resource;

		/**
		 * `ServicePerimeter` describes a set of Google Cloud resources which can freely
		 * import and export data amongst themselves, but not export outside of the
		 * `ServicePerimeter`. If a request with a source within this `ServicePerimeter`
		 * has a target outside of the `ServicePerimeter`, the request will be blocked.
		 * Otherwise the request is allowed. There are two types of Service Perimeter -
		 * Regular and Bridge. Regular Service Perimeters cannot overlap, a single
		 * Google Cloud project can only belong to a single regular Service Perimeter.
		 * Service Perimeter Bridges can contain only Google Cloud projects as members,
		 * a single Google Cloud project may belong to multiple Service Perimeter
		 * Bridges.
		 */
		servicePerimeter?: GoogleIdentityAccesscontextmanagerV1ServicePerimeter;
	}

	/**
	 * An asset in Google Cloud. An asset can be any resource in the Google Cloud
	 * [resource
	 * hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy),
	 * a resource outside the Google Cloud resource hierarchy (such as Google
	 * Kubernetes Engine clusters and objects), or a Cloud IAM policy.
	 */
	export interface AssetFormProperties {

		/**
		 * The type of the asset. For example: "compute.googleapis.com/Disk"
		 * See [Supported asset
		 * types](https://cloud.google.com/asset-inventory/docs/supported-asset-types)
		 * for more information.
		 */
		assetType: FormControl<string | null | undefined>,

		/**
		 * The full name of the asset. For example:
		 * "//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1"
		 * See [Resource
		 * names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
		 * for more information.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			assetType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An `AccessLevel` is a label that can be applied to requests to Google Cloud
	 * services, along with a list of requirements necessary for the label to be
	 * applied.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1AccessLevel {

		/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
		basic?: GoogleIdentityAccesscontextmanagerV1BasicLevel;

		/**
		 * `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language
		 * to represent the necessary conditions for the level to apply to a request.
		 * See CEL spec at: https://github.com/google/cel-spec
		 */
		custom?: GoogleIdentityAccesscontextmanagerV1CustomLevel;

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description?: string | null;

		/**
		 * Required. Resource name for the Access Level. The `short_name` component
		 * must begin with a letter and only include alphanumeric and '_'. Format:
		 * `accessPolicies/{policy_id}/accessLevels/{short_name}`. The maximum length
		 * of the `short_name` component is 50 characters.
		 */
		name?: string | null;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;
	}

	/**
	 * An `AccessLevel` is a label that can be applied to requests to Google Cloud
	 * services, along with a list of requirements necessary for the label to be
	 * applied.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1AccessLevelFormProperties {

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description: FormControl<string | null | undefined>,

		/**
		 * Required. Resource name for the Access Level. The `short_name` component
		 * must begin with a letter and only include alphanumeric and '_'. Format:
		 * `accessPolicies/{policy_id}/accessLevels/{short_name}`. The maximum length
		 * of the `short_name` component is 50 characters.
		 */
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

		/**
		 * How the `conditions` list should be combined to determine if a request is
		 * granted this `AccessLevel`. If AND is used, each `Condition` in
		 * `conditions` must be satisfied for the `AccessLevel` to be applied. If OR
		 * is used, at least one `Condition` in `conditions` must be satisfied for the
		 * `AccessLevel` to be applied. Default behavior is AND.
		 */
		combiningFunction?: GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null;

		/** Required. A list of requirements for the `AccessLevel` to be granted. */
		conditions?: Array<GoogleIdentityAccesscontextmanagerV1Condition>;
	}

	/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
	export interface GoogleIdentityAccesscontextmanagerV1BasicLevelFormProperties {

		/**
		 * How the `conditions` list should be combined to determine if a request is
		 * granted this `AccessLevel`. If AND is used, each `Condition` in
		 * `conditions` must be satisfied for the `AccessLevel` to be applied. If OR
		 * is used, at least one `Condition` in `conditions` must be satisfied for the
		 * `AccessLevel` to be applied. Default behavior is AND.
		 */
		combiningFunction: FormControl<GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1BasicLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1BasicLevelFormProperties>({
			combiningFunction: new FormControl<GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction { AND = 0, OR = 1 }


	/**
	 * A condition necessary for an `AccessLevel` to be granted. The Condition is an
	 * AND over its fields. So a Condition is true if: 1) the request IP is from one
	 * of the listed subnetworks AND 2) the originating device complies with the
	 * listed device policy AND 3) all listed access levels are granted AND 4) the
	 * request was sent at a time allowed by the DateTimeRestriction.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1Condition {

		/**
		 * `DevicePolicy` specifies device specific restrictions necessary to acquire a
		 * given access level. A `DevicePolicy` specifies requirements for requests from
		 * devices to be granted access levels, it does not do any enforcement on the
		 * device. `DevicePolicy` acts as an AND over all specified fields, and each
		 * repeated field is an OR over its elements. Any unset fields are ignored. For
		 * example, if the proto is { os_type : DESKTOP_WINDOWS, os_type :
		 * DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be
		 * true for requests originating from encrypted Linux desktops and encrypted
		 * Windows desktops.
		 */
		devicePolicy?: GoogleIdentityAccesscontextmanagerV1DevicePolicy;

		/**
		 * CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for
		 * a CIDR IP address block, the specified IP address portion must be properly
		 * truncated (i.e. all the host bits must be zero) or the input is considered
		 * malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is
		 * not. Similarly, for IPv6, "2001:db8::/32" is accepted whereas
		 * "2001:db8::1/32" is not. The originating IP of a request must be in one of
		 * the listed subnets in order for this Condition to be true. If empty, all IP
		 * addresses are allowed.
		 */
		ipSubnetworks?: Array<string>;

		/**
		 * The request must be made by one of the provided user or service
		 * accounts. Groups are not supported.
		 * Syntax:
		 * `user:{emailid}`
		 * `serviceAccount:{emailid}`
		 * If not specified, a request may come from any user.
		 */
		members?: Array<string>;

		/**
		 * Whether to negate the Condition. If true, the Condition becomes a NAND over
		 * its non-empty fields, each field must be false for the Condition overall to
		 * be satisfied. Defaults to false.
		 */
		negate?: boolean | null;

		/**
		 * The request must originate from one of the provided countries/regions.
		 * Must be valid ISO 3166-1 alpha-2 codes.
		 */
		regions?: Array<string>;

		/**
		 * A list of other access levels defined in the same `Policy`, referenced by
		 * resource name. Referencing an `AccessLevel` which does not exist is an
		 * error. All access levels listed must be granted for the Condition
		 * to be true. Example:
		 * "`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME"`
		 */
		requiredAccessLevels?: Array<string>;
	}

	/**
	 * A condition necessary for an `AccessLevel` to be granted. The Condition is an
	 * AND over its fields. So a Condition is true if: 1) the request IP is from one
	 * of the listed subnetworks AND 2) the originating device complies with the
	 * listed device policy AND 3) all listed access levels are granted AND 4) the
	 * request was sent at a time allowed by the DateTimeRestriction.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1ConditionFormProperties {

		/**
		 * Whether to negate the Condition. If true, the Condition becomes a NAND over
		 * its non-empty fields, each field must be false for the Condition overall to
		 * be satisfied. Defaults to false.
		 */
		negate: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ConditionFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ConditionFormProperties>({
			negate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * `DevicePolicy` specifies device specific restrictions necessary to acquire a
	 * given access level. A `DevicePolicy` specifies requirements for requests from
	 * devices to be granted access levels, it does not do any enforcement on the
	 * device. `DevicePolicy` acts as an AND over all specified fields, and each
	 * repeated field is an OR over its elements. Any unset fields are ignored. For
	 * example, if the proto is { os_type : DESKTOP_WINDOWS, os_type :
	 * DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be
	 * true for requests originating from encrypted Linux desktops and encrypted
	 * Windows desktops.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1DevicePolicy {

		/**
		 * Allowed device management levels, an empty list allows all management
		 * levels.
		 */
		allowedDeviceManagementLevels?: Array<string>;

		/** Allowed encryptions statuses, an empty list allows all statuses. */
		allowedEncryptionStatuses?: Array<string>;

		/** Allowed OS versions, an empty list allows all types and all versions. */
		osConstraints?: Array<GoogleIdentityAccesscontextmanagerV1OsConstraint>;

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval?: boolean | null;

		/** Whether the device needs to be corp owned. */
		requireCorpOwned?: boolean | null;

		/**
		 * Whether or not screenlock is required for the DevicePolicy to be true.
		 * Defaults to `false`.
		 */
		requireScreenlock?: boolean | null;
	}

	/**
	 * `DevicePolicy` specifies device specific restrictions necessary to acquire a
	 * given access level. A `DevicePolicy` specifies requirements for requests from
	 * devices to be granted access levels, it does not do any enforcement on the
	 * device. `DevicePolicy` acts as an AND over all specified fields, and each
	 * repeated field is an OR over its elements. Any unset fields are ignored. For
	 * example, if the proto is { os_type : DESKTOP_WINDOWS, os_type :
	 * DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be
	 * true for requests originating from encrypted Linux desktops and encrypted
	 * Windows desktops.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1DevicePolicyFormProperties {

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval: FormControl<boolean | null | undefined>,

		/** Whether the device needs to be corp owned. */
		requireCorpOwned: FormControl<boolean | null | undefined>,

		/**
		 * Whether or not screenlock is required for the DevicePolicy to be true.
		 * Defaults to `false`.
		 */
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

		/**
		 * The minimum allowed OS version. If not set, any version of this OS
		 * satisfies the constraint. Format: `"major.minor.patch"`.
		 * Examples: `"10.5.301"`, `"9.2.1"`.
		 */
		minimumVersion?: string | null;

		/** Required. The allowed OS type. */
		osType?: GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null;

		/**
		 * Only allows requests from devices with a verified Chrome OS.
		 * Verifications includes requirements that the device is enterprise-managed,
		 * conformant to domain policies, and the caller has permission to call
		 * the API targeted by the request.
		 */
		requireVerifiedChromeOs?: boolean | null;
	}

	/** A restriction on the OS type and version of devices making requests. */
	export interface GoogleIdentityAccesscontextmanagerV1OsConstraintFormProperties {

		/**
		 * The minimum allowed OS version. If not set, any version of this OS
		 * satisfies the constraint. Format: `"major.minor.patch"`.
		 * Examples: `"10.5.301"`, `"9.2.1"`.
		 */
		minimumVersion: FormControl<string | null | undefined>,

		/** Required. The allowed OS type. */
		osType: FormControl<GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null | undefined>,

		/**
		 * Only allows requests from devices with a verified Chrome OS.
		 * Verifications includes requirements that the device is enterprise-managed,
		 * conformant to domain policies, and the caller has permission to call
		 * the API targeted by the request.
		 */
		requireVerifiedChromeOs: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1OsConstraintFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1OsConstraintFormProperties>({
			minimumVersion: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null | undefined>(undefined),
			requireVerifiedChromeOs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1OsConstraintOsType { OS_UNSPECIFIED = 0, DESKTOP_MAC = 1, DESKTOP_WINDOWS = 2, DESKTOP_LINUX = 3, DESKTOP_CHROME_OS = 4, ANDROID = 5, IOS = 6 }


	/**
	 * `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language
	 * to represent the necessary conditions for the level to apply to a request.
	 * See CEL spec at: https://github.com/google/cel-spec
	 */
	export interface GoogleIdentityAccesscontextmanagerV1CustomLevel {

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
		expr?: Expr;
	}

	/**
	 * `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language
	 * to represent the necessary conditions for the level to apply to a request.
	 * See CEL spec at: https://github.com/google/cel-spec
	 */
	export interface GoogleIdentityAccesscontextmanagerV1CustomLevelFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1CustomLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1CustomLevelFormProperties>({
		});

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
	export interface ExprFormProperties {

		/**
		 * Optional. Description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression: FormControl<string | null | undefined>,

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
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


	/**
	 * `AccessPolicy` is a container for `AccessLevels` (which define the necessary
	 * attributes to use Google Cloud services) and `ServicePerimeters` (which
	 * define regions of services able to freely pass data within a perimeter). An
	 * access policy is globally visible within an organization, and the
	 * restrictions it specifies apply to all projects within an organization.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1AccessPolicy {

		/**
		 * Output only. An opaque identifier for the current version of the
		 * `AccessPolicy`. This will always be a strongly validated etag, meaning that
		 * two Access Polices will be identical if and only if their etags are
		 * identical. Clients should not expect this to be in any specific format.
		 */
		etag?: string | null;

		/**
		 * Output only. Resource name of the `AccessPolicy`. Format:
		 * `accessPolicies/{policy_id}`
		 */
		name?: string | null;

		/**
		 * Required. The parent of this `AccessPolicy` in the Cloud Resource
		 * Hierarchy. Currently immutable once created. Format:
		 * `organizations/{organization_id}`
		 */
		parent?: string | null;

		/** Required. Human readable title. Does not affect behavior. */
		title?: string | null;
	}

	/**
	 * `AccessPolicy` is a container for `AccessLevels` (which define the necessary
	 * attributes to use Google Cloud services) and `ServicePerimeters` (which
	 * define regions of services able to freely pass data within a perimeter). An
	 * access policy is globally visible within an organization, and the
	 * restrictions it specifies apply to all projects within an organization.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1AccessPolicyFormProperties {

		/**
		 * Output only. An opaque identifier for the current version of the
		 * `AccessPolicy`. This will always be a strongly validated etag, meaning that
		 * two Access Polices will be identical if and only if their etags are
		 * identical. Clients should not expect this to be in any specific format.
		 */
		etag: FormControl<string | null | undefined>,

		/**
		 * Output only. Resource name of the `AccessPolicy`. Format:
		 * `accessPolicies/{policy_id}`
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required. The parent of this `AccessPolicy` in the Cloud Resource
		 * Hierarchy. Currently immutable once created. Format:
		 * `organizations/{organization_id}`
		 */
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
	export interface PolicyFormProperties {

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
		etag: FormControl<string | null | undefined>,

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
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

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
		auditLogConfigs?: Array<AuditLogConfig>;

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service?: string | null;
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
	export interface AuditConfigFormProperties {

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

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
		logType?: AuditLogConfigLogType | null;
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
		role?: string | null;
	}

	/** Associates `members` with a `role`. */
	export interface BindingFormProperties {

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines a Cloud Organization `Policy` which is used to specify `Constraints`
	 * for configurations of Cloud Platform resources.
	 */
	export interface GoogleCloudOrgpolicyV1Policy {

		/**
		 * Used in `policy_type` to specify how `boolean_policy` will behave at this
		 * resource.
		 */
		booleanPolicy?: GoogleCloudOrgpolicyV1BooleanPolicy;

		/**
		 * The name of the `Constraint` the `Policy` is configuring, for example,
		 * `constraints/serviceuser.services`.
		 * Immutable after creation.
		 */
		constraint?: string | null;

		/**
		 * An opaque tag indicating the current version of the `Policy`, used for
		 * concurrency control.
		 * When the `Policy` is returned from either a `GetPolicy` or a
		 * `ListOrgPolicy` request, this `etag` indicates the version of the current
		 * `Policy` to use when executing a read-modify-write loop.
		 * When the `Policy` is returned from a `GetEffectivePolicy` request, the
		 * `etag` will be unset.
		 * When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value
		 * that was returned from a `GetOrgPolicy` request as part of a
		 * read-modify-write loop for concurrency control. Not setting the `etag`in a
		 * `SetOrgPolicy` request will result in an unconditional write of the
		 * `Policy`.
		 */
		etag?: string | null;

		/**
		 * Used in `policy_type` to specify how `list_policy` behaves at this
		 * resource.
		 * `ListPolicy` can define specific values and subtrees of Cloud Resource
		 * Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that
		 * are allowed or denied by setting the `allowed_values` and `denied_values`
		 * fields. This is achieved by using the `under:` and optional `is:` prefixes.
		 * The `under:` prefix is used to denote resource subtree values.
		 * The `is:` prefix is used to denote specific values, and is required only
		 * if the value contains a ":". Values prefixed with "is:" are treated the
		 * same as values with no prefix.
		 * Ancestry subtrees must be in one of the following formats:
		 * - "projects/<project-id>", e.g. "projects/tokyo-rain-123"
		 * - "folders/<folder-id>", e.g. "folders/1234"
		 * - "organizations/<organization-id>", e.g. "organizations/1234"
		 * The `supports_under` field of the associated `Constraint`  defines whether
		 * ancestry prefixes can be used. You can set `allowed_values` and
		 * `denied_values` in the same `Policy` if `all_values` is
		 * `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all
		 * values. If `all_values` is set to either `ALLOW` or `DENY`,
		 * `allowed_values` and `denied_values` must be unset.
		 */
		listPolicy?: GoogleCloudOrgpolicyV1ListPolicy;

		/**
		 * Ignores policies set above this resource and restores the
		 * `constraint_default` enforcement behavior of the specific `Constraint` at
		 * this resource.
		 * Suppose that `constraint_default` is set to `ALLOW` for the
		 * `Constraint` `constraints/serviceuser.services`. Suppose that organization
		 * foo.com sets a `Policy` at their Organization resource node that restricts
		 * the allowed service activations to deny all service activations. They
		 * could then set a `Policy` with the `policy_type` `restore_default` on
		 * several experimental projects, restoring the `constraint_default`
		 * enforcement of the `Constraint` for only those projects, allowing those
		 * projects to have all services activated.
		 */
		restoreDefault?: GoogleCloudOrgpolicyV1RestoreDefault;

		/**
		 * The time stamp the `Policy` was previously updated. This is set by the
		 * server, not specified by the caller, and represents the last time a call to
		 * `SetOrgPolicy` was made for that `Policy`. Any value set by the client will
		 * be ignored.
		 */
		updateTime?: string | null;

		/** Version of the `Policy`. Default version is 0; */
		version?: number | null;
	}

	/**
	 * Defines a Cloud Organization `Policy` which is used to specify `Constraints`
	 * for configurations of Cloud Platform resources.
	 */
	export interface GoogleCloudOrgpolicyV1PolicyFormProperties {

		/**
		 * The name of the `Constraint` the `Policy` is configuring, for example,
		 * `constraints/serviceuser.services`.
		 * Immutable after creation.
		 */
		constraint: FormControl<string | null | undefined>,

		/**
		 * An opaque tag indicating the current version of the `Policy`, used for
		 * concurrency control.
		 * When the `Policy` is returned from either a `GetPolicy` or a
		 * `ListOrgPolicy` request, this `etag` indicates the version of the current
		 * `Policy` to use when executing a read-modify-write loop.
		 * When the `Policy` is returned from a `GetEffectivePolicy` request, the
		 * `etag` will be unset.
		 * When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value
		 * that was returned from a `GetOrgPolicy` request as part of a
		 * read-modify-write loop for concurrency control. Not setting the `etag`in a
		 * `SetOrgPolicy` request will result in an unconditional write of the
		 * `Policy`.
		 */
		etag: FormControl<string | null | undefined>,

		/**
		 * The time stamp the `Policy` was previously updated. This is set by the
		 * server, not specified by the caller, and represents the last time a call to
		 * `SetOrgPolicy` was made for that `Policy`. Any value set by the client will
		 * be ignored.
		 */
		updateTime: FormControl<string | null | undefined>,

		/** Version of the `Policy`. Default version is 0; */
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


	/**
	 * Used in `policy_type` to specify how `boolean_policy` will behave at this
	 * resource.
	 */
	export interface GoogleCloudOrgpolicyV1BooleanPolicy {

		/**
		 * If `true`, then the `Policy` is enforced. If `false`, then any
		 * configuration is acceptable.
		 * Suppose you have a `Constraint`
		 * `constraints/compute.disableSerialPortAccess` with `constraint_default`
		 * set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following
		 * behavior:
		 * - If the `Policy` at this resource has enforced set to `false`, serial
		 * port connection attempts will be allowed.
		 * - If the `Policy` at this resource has enforced set to `true`, serial
		 * port connection attempts will be refused.
		 * - If the `Policy` at this resource is `RestoreDefault`, serial port
		 * connection attempts will be allowed.
		 * - If no `Policy` is set at this resource or anywhere higher in the
		 * resource hierarchy, serial port connection attempts will be allowed.
		 * - If no `Policy` is set at this resource, but one exists higher in the
		 * resource hierarchy, the behavior is as if the`Policy` were set at
		 * this resource.
		 * The following examples demonstrate the different possible layerings:
		 * Example 1 (nearest `Constraint` wins):
		 * `organizations/foo` has a `Policy` with:
		 * {enforced: false}
		 * `projects/bar` has no `Policy` set.
		 * The constraint at `projects/bar` and `organizations/foo` will not be
		 * enforced.
		 * Example 2 (enforcement gets replaced):
		 * `organizations/foo` has a `Policy` with:
		 * {enforced: false}
		 * `projects/bar` has a `Policy` with:
		 * {enforced: true}
		 * The constraint at `organizations/foo` is not enforced.
		 * The constraint at `projects/bar` is enforced.
		 * Example 3 (RestoreDefault):
		 * `organizations/foo` has a `Policy` with:
		 * {enforced: true}
		 * `projects/bar` has a `Policy` with:
		 * {RestoreDefault: {}}
		 * The constraint at `organizations/foo` is enforced.
		 * The constraint at `projects/bar` is not enforced, because
		 * `constraint_default` for the `Constraint` is `ALLOW`.
		 */
		enforced?: boolean | null;
	}

	/**
	 * Used in `policy_type` to specify how `boolean_policy` will behave at this
	 * resource.
	 */
	export interface GoogleCloudOrgpolicyV1BooleanPolicyFormProperties {

		/**
		 * If `true`, then the `Policy` is enforced. If `false`, then any
		 * configuration is acceptable.
		 * Suppose you have a `Constraint`
		 * `constraints/compute.disableSerialPortAccess` with `constraint_default`
		 * set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following
		 * behavior:
		 * - If the `Policy` at this resource has enforced set to `false`, serial
		 * port connection attempts will be allowed.
		 * - If the `Policy` at this resource has enforced set to `true`, serial
		 * port connection attempts will be refused.
		 * - If the `Policy` at this resource is `RestoreDefault`, serial port
		 * connection attempts will be allowed.
		 * - If no `Policy` is set at this resource or anywhere higher in the
		 * resource hierarchy, serial port connection attempts will be allowed.
		 * - If no `Policy` is set at this resource, but one exists higher in the
		 * resource hierarchy, the behavior is as if the`Policy` were set at
		 * this resource.
		 * The following examples demonstrate the different possible layerings:
		 * Example 1 (nearest `Constraint` wins):
		 * `organizations/foo` has a `Policy` with:
		 * {enforced: false}
		 * `projects/bar` has no `Policy` set.
		 * The constraint at `projects/bar` and `organizations/foo` will not be
		 * enforced.
		 * Example 2 (enforcement gets replaced):
		 * `organizations/foo` has a `Policy` with:
		 * {enforced: false}
		 * `projects/bar` has a `Policy` with:
		 * {enforced: true}
		 * The constraint at `organizations/foo` is not enforced.
		 * The constraint at `projects/bar` is enforced.
		 * Example 3 (RestoreDefault):
		 * `organizations/foo` has a `Policy` with:
		 * {enforced: true}
		 * `projects/bar` has a `Policy` with:
		 * {RestoreDefault: {}}
		 * The constraint at `organizations/foo` is enforced.
		 * The constraint at `projects/bar` is not enforced, because
		 * `constraint_default` for the `Constraint` is `ALLOW`.
		 */
		enforced: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV1BooleanPolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1BooleanPolicyFormProperties>({
			enforced: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * Used in `policy_type` to specify how `list_policy` behaves at this
	 * resource.
	 * `ListPolicy` can define specific values and subtrees of Cloud Resource
	 * Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that
	 * are allowed or denied by setting the `allowed_values` and `denied_values`
	 * fields. This is achieved by using the `under:` and optional `is:` prefixes.
	 * The `under:` prefix is used to denote resource subtree values.
	 * The `is:` prefix is used to denote specific values, and is required only
	 * if the value contains a ":". Values prefixed with "is:" are treated the
	 * same as values with no prefix.
	 * Ancestry subtrees must be in one of the following formats:
	 *     - "projects/<project-id>", e.g. "projects/tokyo-rain-123"
	 *     - "folders/<folder-id>", e.g. "folders/1234"
	 *     - "organizations/<organization-id>", e.g. "organizations/1234"
	 * The `supports_under` field of the associated `Constraint`  defines whether
	 * ancestry prefixes can be used. You can set `allowed_values` and
	 * `denied_values` in the same `Policy` if `all_values` is
	 * `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all
	 * values. If `all_values` is set to either `ALLOW` or `DENY`,
	 * `allowed_values` and `denied_values` must be unset.
	 */
	export interface GoogleCloudOrgpolicyV1ListPolicy {

		/** The policy all_values state. */
		allValues?: GoogleCloudOrgpolicyV1ListPolicyAllValues | null;

		/**
		 * List of values allowed  at this resource. Can only be set if `all_values`
		 * is set to `ALL_VALUES_UNSPECIFIED`.
		 */
		allowedValues?: Array<string>;

		/**
		 * List of values denied at this resource. Can only be set if `all_values`
		 * is set to `ALL_VALUES_UNSPECIFIED`.
		 */
		deniedValues?: Array<string>;

		/**
		 * Determines the inheritance behavior for this `Policy`.
		 * By default, a `ListPolicy` set at a resource supercedes any `Policy` set
		 * anywhere up the resource hierarchy. However, if `inherit_from_parent` is
		 * set to `true`, then the values from the effective `Policy` of the parent
		 * resource are inherited, meaning the values set in this `Policy` are
		 * added to the values inherited up the hierarchy.
		 * Setting `Policy` hierarchies that inherit both allowed values and denied
		 * values isn't recommended in most circumstances to keep the configuration
		 * simple and understandable. However, it is possible to set a `Policy` with
		 * `allowed_values` set that inherits a `Policy` with `denied_values` set.
		 * In this case, the values that are allowed must be in `allowed_values` and
		 * not present in `denied_values`.
		 * For example, suppose you have a `Constraint`
		 * `constraints/serviceuser.services`, which has a `constraint_type` of
		 * `list_constraint`, and with `constraint_default` set to `ALLOW`.
		 * Suppose that at the Organization level, a `Policy` is applied that
		 * restricts the allowed API activations to {`E1`, `E2`}. Then, if a
		 * `Policy` is applied to a project below the Organization that has
		 * `inherit_from_parent` set to `false` and field all_values set to DENY,
		 * then an attempt to activate any API will be denied.
		 * The following examples demonstrate different possible layerings for
		 * `projects/bar` parented by `organizations/foo`:
		 * Example 1 (no inherited values):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values:"E2"}
		 * `projects/bar` has `inherit_from_parent` `false` and values:
		 * {allowed_values: "E3" allowed_values: "E4"}
		 * The accepted values at `organizations/foo` are `E1`, `E2`.
		 * The accepted values at `projects/bar` are `E3`, and `E4`.
		 * Example 2 (inherited values):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values:"E2"}
		 * `projects/bar` has a `Policy` with values:
		 * {value: "E3" value: "E4" inherit_from_parent: true}
		 * The accepted values at `organizations/foo` are `E1`, `E2`.
		 * The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`.
		 * Example 3 (inheriting both allowed and denied values):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values: "E2"}
		 * `projects/bar` has a `Policy` with:
		 * {denied_values: "E1"}
		 * The accepted values at `organizations/foo` are `E1`, `E2`.
		 * The value accepted at `projects/bar` is `E2`.
		 * Example 4 (RestoreDefault):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values:"E2"}
		 * `projects/bar` has a `Policy` with values:
		 * {RestoreDefault: {}}
		 * The accepted values at `organizations/foo` are `E1`, `E2`.
		 * The accepted values at `projects/bar` are either all or none depending on
		 * the value of `constraint_default` (if `ALLOW`, all; if
		 * `DENY`, none).
		 * Example 5 (no policy inherits parent policy):
		 * `organizations/foo` has no `Policy` set.
		 * `projects/bar` has no `Policy` set.
		 * The accepted values at both levels are either all or none depending on
		 * the value of `constraint_default` (if `ALLOW`, all; if
		 * `DENY`, none).
		 * Example 6 (ListConstraint allowing all):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values: "E2"}
		 * `projects/bar` has a `Policy` with:
		 * {all: ALLOW}
		 * The accepted values at `organizations/foo` are `E1`, E2`.
		 * Any value is accepted at `projects/bar`.
		 * Example 7 (ListConstraint allowing none):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values: "E2"}
		 * `projects/bar` has a `Policy` with:
		 * {all: DENY}
		 * The accepted values at `organizations/foo` are `E1`, E2`.
		 * No value is accepted at `projects/bar`.
		 * Example 10 (allowed and denied subtrees of Resource Manager hierarchy):
		 * Given the following resource hierarchy
		 * O1->{F1, F2}; F1->{P1}; F2->{P2, P3},
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "under:organizations/O1"}
		 * `projects/bar` has a `Policy` with:
		 * {allowed_values: "under:projects/P3"}
		 * {denied_values: "under:folders/F2"}
		 * The accepted values at `organizations/foo` are `organizations/O1`,
		 * `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`,
		 * `projects/P3`.
		 * The accepted values at `projects/bar` are `organizations/O1`,
		 * `folders/F1`, `projects/P1`.
		 */
		inheritFromParent?: boolean | null;

		/**
		 * Optional. The Google Cloud Console will try to default to a configuration
		 * that matches the value specified in this `Policy`. If `suggested_value`
		 * is not set, it will inherit the value specified higher in the hierarchy,
		 * unless `inherit_from_parent` is `false`.
		 */
		suggestedValue?: string | null;
	}

	/**
	 * Used in `policy_type` to specify how `list_policy` behaves at this
	 * resource.
	 * `ListPolicy` can define specific values and subtrees of Cloud Resource
	 * Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that
	 * are allowed or denied by setting the `allowed_values` and `denied_values`
	 * fields. This is achieved by using the `under:` and optional `is:` prefixes.
	 * The `under:` prefix is used to denote resource subtree values.
	 * The `is:` prefix is used to denote specific values, and is required only
	 * if the value contains a ":". Values prefixed with "is:" are treated the
	 * same as values with no prefix.
	 * Ancestry subtrees must be in one of the following formats:
	 *     - "projects/<project-id>", e.g. "projects/tokyo-rain-123"
	 *     - "folders/<folder-id>", e.g. "folders/1234"
	 *     - "organizations/<organization-id>", e.g. "organizations/1234"
	 * The `supports_under` field of the associated `Constraint`  defines whether
	 * ancestry prefixes can be used. You can set `allowed_values` and
	 * `denied_values` in the same `Policy` if `all_values` is
	 * `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all
	 * values. If `all_values` is set to either `ALLOW` or `DENY`,
	 * `allowed_values` and `denied_values` must be unset.
	 */
	export interface GoogleCloudOrgpolicyV1ListPolicyFormProperties {

		/** The policy all_values state. */
		allValues: FormControl<GoogleCloudOrgpolicyV1ListPolicyAllValues | null | undefined>,

		/**
		 * Determines the inheritance behavior for this `Policy`.
		 * By default, a `ListPolicy` set at a resource supercedes any `Policy` set
		 * anywhere up the resource hierarchy. However, if `inherit_from_parent` is
		 * set to `true`, then the values from the effective `Policy` of the parent
		 * resource are inherited, meaning the values set in this `Policy` are
		 * added to the values inherited up the hierarchy.
		 * Setting `Policy` hierarchies that inherit both allowed values and denied
		 * values isn't recommended in most circumstances to keep the configuration
		 * simple and understandable. However, it is possible to set a `Policy` with
		 * `allowed_values` set that inherits a `Policy` with `denied_values` set.
		 * In this case, the values that are allowed must be in `allowed_values` and
		 * not present in `denied_values`.
		 * For example, suppose you have a `Constraint`
		 * `constraints/serviceuser.services`, which has a `constraint_type` of
		 * `list_constraint`, and with `constraint_default` set to `ALLOW`.
		 * Suppose that at the Organization level, a `Policy` is applied that
		 * restricts the allowed API activations to {`E1`, `E2`}. Then, if a
		 * `Policy` is applied to a project below the Organization that has
		 * `inherit_from_parent` set to `false` and field all_values set to DENY,
		 * then an attempt to activate any API will be denied.
		 * The following examples demonstrate different possible layerings for
		 * `projects/bar` parented by `organizations/foo`:
		 * Example 1 (no inherited values):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values:"E2"}
		 * `projects/bar` has `inherit_from_parent` `false` and values:
		 * {allowed_values: "E3" allowed_values: "E4"}
		 * The accepted values at `organizations/foo` are `E1`, `E2`.
		 * The accepted values at `projects/bar` are `E3`, and `E4`.
		 * Example 2 (inherited values):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values:"E2"}
		 * `projects/bar` has a `Policy` with values:
		 * {value: "E3" value: "E4" inherit_from_parent: true}
		 * The accepted values at `organizations/foo` are `E1`, `E2`.
		 * The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`.
		 * Example 3 (inheriting both allowed and denied values):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values: "E2"}
		 * `projects/bar` has a `Policy` with:
		 * {denied_values: "E1"}
		 * The accepted values at `organizations/foo` are `E1`, `E2`.
		 * The value accepted at `projects/bar` is `E2`.
		 * Example 4 (RestoreDefault):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values:"E2"}
		 * `projects/bar` has a `Policy` with values:
		 * {RestoreDefault: {}}
		 * The accepted values at `organizations/foo` are `E1`, `E2`.
		 * The accepted values at `projects/bar` are either all or none depending on
		 * the value of `constraint_default` (if `ALLOW`, all; if
		 * `DENY`, none).
		 * Example 5 (no policy inherits parent policy):
		 * `organizations/foo` has no `Policy` set.
		 * `projects/bar` has no `Policy` set.
		 * The accepted values at both levels are either all or none depending on
		 * the value of `constraint_default` (if `ALLOW`, all; if
		 * `DENY`, none).
		 * Example 6 (ListConstraint allowing all):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values: "E2"}
		 * `projects/bar` has a `Policy` with:
		 * {all: ALLOW}
		 * The accepted values at `organizations/foo` are `E1`, E2`.
		 * Any value is accepted at `projects/bar`.
		 * Example 7 (ListConstraint allowing none):
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "E1" allowed_values: "E2"}
		 * `projects/bar` has a `Policy` with:
		 * {all: DENY}
		 * The accepted values at `organizations/foo` are `E1`, E2`.
		 * No value is accepted at `projects/bar`.
		 * Example 10 (allowed and denied subtrees of Resource Manager hierarchy):
		 * Given the following resource hierarchy
		 * O1->{F1, F2}; F1->{P1}; F2->{P2, P3},
		 * `organizations/foo` has a `Policy` with values:
		 * {allowed_values: "under:organizations/O1"}
		 * `projects/bar` has a `Policy` with:
		 * {allowed_values: "under:projects/P3"}
		 * {denied_values: "under:folders/F2"}
		 * The accepted values at `organizations/foo` are `organizations/O1`,
		 * `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`,
		 * `projects/P3`.
		 * The accepted values at `projects/bar` are `organizations/O1`,
		 * `folders/F1`, `projects/P1`.
		 */
		inheritFromParent: FormControl<boolean | null | undefined>,

		/**
		 * Optional. The Google Cloud Console will try to default to a configuration
		 * that matches the value specified in this `Policy`. If `suggested_value`
		 * is not set, it will inherit the value specified higher in the hierarchy,
		 * unless `inherit_from_parent` is `false`.
		 */
		suggestedValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV1ListPolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1ListPolicyFormProperties>({
			allValues: new FormControl<GoogleCloudOrgpolicyV1ListPolicyAllValues | null | undefined>(undefined),
			inheritFromParent: new FormControl<boolean | null | undefined>(undefined),
			suggestedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudOrgpolicyV1ListPolicyAllValues { ALL_VALUES_UNSPECIFIED = 0, ALLOW = 1, DENY = 2 }


	/**
	 * Ignores policies set above this resource and restores the
	 * `constraint_default` enforcement behavior of the specific `Constraint` at
	 * this resource.
	 * Suppose that `constraint_default` is set to `ALLOW` for the
	 * `Constraint` `constraints/serviceuser.services`. Suppose that organization
	 * foo.com sets a `Policy` at their Organization resource node that restricts
	 * the allowed service activations to deny all service activations. They
	 * could then set a `Policy` with the `policy_type` `restore_default` on
	 * several experimental projects, restoring the `constraint_default`
	 * enforcement of the `Constraint` for only those projects, allowing those
	 * projects to have all services activated.
	 */
	export interface GoogleCloudOrgpolicyV1RestoreDefault {
	}

	/**
	 * Ignores policies set above this resource and restores the
	 * `constraint_default` enforcement behavior of the specific `Constraint` at
	 * this resource.
	 * Suppose that `constraint_default` is set to `ALLOW` for the
	 * `Constraint` `constraints/serviceuser.services`. Suppose that organization
	 * foo.com sets a `Policy` at their Organization resource node that restricts
	 * the allowed service activations to deny all service activations. They
	 * could then set a `Policy` with the `policy_type` `restore_default` on
	 * several experimental projects, restoring the `constraint_default`
	 * enforcement of the `Constraint` for only those projects, allowing those
	 * projects to have all services activated.
	 */
	export interface GoogleCloudOrgpolicyV1RestoreDefaultFormProperties {
	}
	export function CreateGoogleCloudOrgpolicyV1RestoreDefaultFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1RestoreDefaultFormProperties>({
		});

	}


	/** A representation of a Google Cloud resource. */
	export interface Resource {

		/**
		 * The content of the resource, in which some sensitive fields are removed
		 * and may not be present.
		 */
		data?: {[id: string]: any };

		/**
		 * The URL of the discovery document containing the resource's JSON schema.
		 * For example:
		 * "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest"
		 * This value is unspecified for resources that do not have an API based on a
		 * discovery document, such as Cloud Bigtable.
		 */
		discoveryDocumentUri?: string | null;

		/**
		 * The JSON schema name listed in the discovery document. For example:
		 * "Project"
		 * This value is unspecified for resources that do not have an API based on a
		 * discovery document, such as Cloud Bigtable.
		 */
		discoveryName?: string | null;

		/**
		 * The full name of the immediate parent of this resource. See
		 * [Resource
		 * Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
		 * for more information.
		 * For Google Cloud assets, this value is the parent resource defined in the
		 * [Cloud IAM policy
		 * hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy).
		 * For example:
		 * "//cloudresourcemanager.googleapis.com/projects/my_project_123"
		 * For third-party assets, this field may be set differently.
		 */
		parent?: string | null;

		/**
		 * The REST URL for accessing the resource. An HTTP `GET` request using this
		 * URL returns the resource itself. For example:
		 * "https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123"
		 * This value is unspecified for resources without a REST API.
		 */
		resourceUrl?: string | null;

		/** The API version. For example: "v1" */
		version?: string | null;
	}

	/** A representation of a Google Cloud resource. */
	export interface ResourceFormProperties {

		/**
		 * The content of the resource, in which some sensitive fields are removed
		 * and may not be present.
		 */
		data: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The URL of the discovery document containing the resource's JSON schema.
		 * For example:
		 * "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest"
		 * This value is unspecified for resources that do not have an API based on a
		 * discovery document, such as Cloud Bigtable.
		 */
		discoveryDocumentUri: FormControl<string | null | undefined>,

		/**
		 * The JSON schema name listed in the discovery document. For example:
		 * "Project"
		 * This value is unspecified for resources that do not have an API based on a
		 * discovery document, such as Cloud Bigtable.
		 */
		discoveryName: FormControl<string | null | undefined>,

		/**
		 * The full name of the immediate parent of this resource. See
		 * [Resource
		 * Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
		 * for more information.
		 * For Google Cloud assets, this value is the parent resource defined in the
		 * [Cloud IAM policy
		 * hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy).
		 * For example:
		 * "//cloudresourcemanager.googleapis.com/projects/my_project_123"
		 * For third-party assets, this field may be set differently.
		 */
		parent: FormControl<string | null | undefined>,

		/**
		 * The REST URL for accessing the resource. An HTTP `GET` request using this
		 * URL returns the resource itself. For example:
		 * "https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123"
		 * This value is unspecified for resources without a REST API.
		 */
		resourceUrl: FormControl<string | null | undefined>,

		/** The API version. For example: "v1" */
		version: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			data: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			discoveryDocumentUri: new FormControl<string | null | undefined>(undefined),
			discoveryName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `ServicePerimeter` describes a set of Google Cloud resources which can freely
	 * import and export data amongst themselves, but not export outside of the
	 * `ServicePerimeter`. If a request with a source within this `ServicePerimeter`
	 * has a target outside of the `ServicePerimeter`, the request will be blocked.
	 * Otherwise the request is allowed. There are two types of Service Perimeter -
	 * Regular and Bridge. Regular Service Perimeters cannot overlap, a single
	 * Google Cloud project can only belong to a single regular Service Perimeter.
	 * Service Perimeter Bridges can contain only Google Cloud projects as members,
	 * a single Google Cloud project may belong to multiple Service Perimeter
	 * Bridges.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeter {

		/**
		 * Description of the `ServicePerimeter` and its use. Does not affect
		 * behavior.
		 */
		description?: string | null;

		/**
		 * Required. Resource name for the ServicePerimeter.  The `short_name`
		 * component must begin with a letter and only include alphanumeric and '_'.
		 * Format: `accessPolicies/{policy_id}/servicePerimeters/{short_name}`
		 */
		name?: string | null;

		/**
		 * Perimeter type indicator. A single project is
		 * allowed to be a member of single regular perimeter, but multiple service
		 * perimeter bridges. A project cannot be a included in a perimeter bridge
		 * without being included in regular perimeter. For perimeter bridges,
		 * the restricted service list as well as access level lists must be
		 * empty.
		 */
		perimeterType?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null;

		/**
		 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that
		 * describe specific Service Perimeter configuration.
		 */
		spec?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;

		/**
		 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that
		 * describe specific Service Perimeter configuration.
		 */
		status?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;

		/**
		 * Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly
		 * exists  for all Service Perimeters, and that spec is identical to the
		 * status for those Service Perimeters. When this flag is set, it inhibits the
		 * generation of the implicit spec, thereby allowing the user to explicitly
		 * provide a configuration ("spec") to use in a dry-run version of the Service
		 * Perimeter. This allows the user to test changes to the enforced config
		 * ("status") without actually enforcing them. This testing is done through
		 * analyzing the differences between currently enforced and suggested
		 * restrictions. use_explicit_dry_run_spec must bet set to True if any of the
		 * fields in the spec are set to non-default values.
		 */
		useExplicitDryRunSpec?: boolean | null;
	}

	/**
	 * `ServicePerimeter` describes a set of Google Cloud resources which can freely
	 * import and export data amongst themselves, but not export outside of the
	 * `ServicePerimeter`. If a request with a source within this `ServicePerimeter`
	 * has a target outside of the `ServicePerimeter`, the request will be blocked.
	 * Otherwise the request is allowed. There are two types of Service Perimeter -
	 * Regular and Bridge. Regular Service Perimeters cannot overlap, a single
	 * Google Cloud project can only belong to a single regular Service Perimeter.
	 * Service Perimeter Bridges can contain only Google Cloud projects as members,
	 * a single Google Cloud project may belong to multiple Service Perimeter
	 * Bridges.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterFormProperties {

		/**
		 * Description of the `ServicePerimeter` and its use. Does not affect
		 * behavior.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required. Resource name for the ServicePerimeter.  The `short_name`
		 * component must begin with a letter and only include alphanumeric and '_'.
		 * Format: `accessPolicies/{policy_id}/servicePerimeters/{short_name}`
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Perimeter type indicator. A single project is
		 * allowed to be a member of single regular perimeter, but multiple service
		 * perimeter bridges. A project cannot be a included in a perimeter bridge
		 * without being included in regular perimeter. For perimeter bridges,
		 * the restricted service list as well as access level lists must be
		 * empty.
		 */
		perimeterType: FormControl<GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null | undefined>,

		/** Human readable title. Must be unique within the Policy. */
		title: FormControl<string | null | undefined>,

		/**
		 * Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly
		 * exists  for all Service Perimeters, and that spec is identical to the
		 * status for those Service Perimeters. When this flag is set, it inhibits the
		 * generation of the implicit spec, thereby allowing the user to explicitly
		 * provide a configuration ("spec") to use in a dry-run version of the Service
		 * Perimeter. This allows the user to test changes to the enforced config
		 * ("status") without actually enforcing them. This testing is done through
		 * analyzing the differences between currently enforced and suggested
		 * restrictions. use_explicit_dry_run_spec must bet set to True if any of the
		 * fields in the spec are set to non-default values.
		 */
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

	export enum GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType { PERIMETER_TYPE_REGULAR = 0, PERIMETER_TYPE_BRIDGE = 1 }


	/**
	 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that
	 * describe specific Service Perimeter configuration.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig {

		/**
		 * A list of `AccessLevel` resource names that allow resources within the
		 * `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed
		 * must be in the same policy as this `ServicePerimeter`. Referencing a
		 * nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are
		 * listed, resources within the perimeter can only be accessed via Google
		 * Cloud calls with request origins within the perimeter. Example:
		 * `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`.
		 * For Service Perimeter Bridge, must be empty.
		 */
		accessLevels?: Array<string>;

		/**
		 * A list of Google Cloud resources that are inside of the service perimeter.
		 * Currently only projects are allowed. Format: `projects/{project_number}`
		 */
		resources?: Array<string>;

		/**
		 * Google Cloud services that are subject to the Service Perimeter
		 * restrictions. For example, if `storage.googleapis.com` is specified, access
		 * to the storage buckets inside the perimeter must meet the perimeter's
		 * access restrictions.
		 */
		restrictedServices?: Array<string>;

		/**
		 * Specifies how APIs are allowed to communicate within the Service
		 * Perimeter.
		 */
		vpcAccessibleServices?: GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
	}

	/**
	 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that
	 * describe specific Service Perimeter configuration.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormProperties>({
		});

	}


	/**
	 * Specifies how APIs are allowed to communicate within the Service
	 * Perimeter.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices {

		/**
		 * The list of APIs usable within the Service Perimeter. Must be empty
		 * unless 'enable_restriction' is True.
		 */
		allowedServices?: Array<string>;

		/**
		 * Whether to restrict API calls within the Service Perimeter to the list of
		 * APIs specified in 'allowed_services'.
		 */
		enableRestriction?: boolean | null;
	}

	/**
	 * Specifies how APIs are allowed to communicate within the Service
	 * Perimeter.
	 */
	export interface GoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormProperties {

		/**
		 * Whether to restrict API calls within the Service Perimeter to the list of
		 * APIs specified in 'allowed_services'.
		 */
		enableRestriction: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormProperties>({
			enableRestriction: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Batch get assets history response. */
	export interface BatchGetAssetsHistoryResponse {

		/** A list of assets with valid time windows. */
		assets?: Array<TemporalAsset>;
	}

	/** Batch get assets history response. */
	export interface BatchGetAssetsHistoryResponseFormProperties {
	}
	export function CreateBatchGetAssetsHistoryResponseFormGroup() {
		return new FormGroup<BatchGetAssetsHistoryResponseFormProperties>({
		});

	}


	/**
	 * An asset in Google Cloud and its temporal metadata, including the time window
	 * when it was observed and its status during that window.
	 */
	export interface TemporalAsset {

		/**
		 * An asset in Google Cloud. An asset can be any resource in the Google Cloud
		 * [resource
		 * hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy),
		 * a resource outside the Google Cloud resource hierarchy (such as Google
		 * Kubernetes Engine clusters and objects), or a Cloud IAM policy.
		 */
		asset?: Asset;

		/** Whether the asset has been deleted or not. */
		deleted?: boolean | null;

		/** A time window specified by its "start_time" and "end_time". */
		window?: TimeWindow;
	}

	/**
	 * An asset in Google Cloud and its temporal metadata, including the time window
	 * when it was observed and its status during that window.
	 */
	export interface TemporalAssetFormProperties {

		/** Whether the asset has been deleted or not. */
		deleted: FormControl<boolean | null | undefined>,
	}
	export function CreateTemporalAssetFormGroup() {
		return new FormGroup<TemporalAssetFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A time window specified by its "start_time" and "end_time". */
	export interface TimeWindow {

		/**
		 * End time of the time window (inclusive). If not specified, the current
		 * timestamp is used instead.
		 */
		endTime?: string | null;

		/** Start time of the time window (exclusive). */
		startTime?: string | null;
	}

	/** A time window specified by its "start_time" and "end_time". */
	export interface TimeWindowFormProperties {

		/**
		 * End time of the time window (inclusive). If not specified, the current
		 * timestamp is used instead.
		 */
		endTime: FormControl<string | null | undefined>,

		/** Start time of the time window (exclusive). */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeWindowFormGroup() {
		return new FormGroup<TimeWindowFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A BigQuery destination. */
	export interface BigQueryDestination {

		/**
		 * Required. The BigQuery dataset in format
		 * "projects/projectId/datasets/datasetId", to which the snapshot result
		 * should be exported. If this dataset does not exist, the export call returns
		 * an INVALID_ARGUMENT error.
		 */
		dataset?: string | null;

		/**
		 * If the destination table already exists and this flag is `TRUE`, the
		 * table will be overwritten by the contents of assets snapshot. If the flag
		 * is `FALSE` or unset and the destination table already exists, the export
		 * call returns an INVALID_ARGUMEMT error.
		 */
		force?: boolean | null;

		/**
		 * Required. The BigQuery table to which the snapshot result should be
		 * written. If this table does not exist, a new table with the given name
		 * will be created.
		 */
		table?: string | null;
	}

	/** A BigQuery destination. */
	export interface BigQueryDestinationFormProperties {

		/**
		 * Required. The BigQuery dataset in format
		 * "projects/projectId/datasets/datasetId", to which the snapshot result
		 * should be exported. If this dataset does not exist, the export call returns
		 * an INVALID_ARGUMENT error.
		 */
		dataset: FormControl<string | null | undefined>,

		/**
		 * If the destination table already exists and this flag is `TRUE`, the
		 * table will be overwritten by the contents of assets snapshot. If the flag
		 * is `FALSE` or unset and the destination table already exists, the export
		 * call returns an INVALID_ARGUMEMT error.
		 */
		force: FormControl<boolean | null | undefined>,

		/**
		 * Required. The BigQuery table to which the snapshot result should be
		 * written. If this table does not exist, a new table with the given name
		 * will be created.
		 */
		table: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryDestinationFormGroup() {
		return new FormGroup<BigQueryDestinationFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Create asset feed request. */
	export interface CreateFeedRequest {

		/**
		 * An asset feed used to export asset updates to a destinations.
		 * An asset feed filter controls what updates are exported.
		 * The asset feed must be created within a project, organization, or
		 * folder. Supported destinations are:
		 * Pub/Sub topics.
		 */
		feed?: Feed;

		/**
		 * Required. This is the client-assigned asset feed identifier and it needs to
		 * be unique under a specific parent project/folder/organization.
		 */
		feedId?: string | null;
	}

	/** Create asset feed request. */
	export interface CreateFeedRequestFormProperties {

		/**
		 * Required. This is the client-assigned asset feed identifier and it needs to
		 * be unique under a specific parent project/folder/organization.
		 */
		feedId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFeedRequestFormGroup() {
		return new FormGroup<CreateFeedRequestFormProperties>({
			feedId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An asset feed used to export asset updates to a destinations.
	 * An asset feed filter controls what updates are exported.
	 * The asset feed must be created within a project, organization, or
	 * folder. Supported destinations are:
	 * Pub/Sub topics.
	 */
	export interface Feed {

		/**
		 * A list of the full names of the assets to receive updates. You must specify
		 * either or both of asset_names and asset_types. Only asset updates matching
		 * specified asset_names and asset_types are exported to the feed. For
		 * example:
		 * `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
		 * See [Resource
		 * Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
		 * for more info.
		 */
		assetNames?: Array<string>;

		/**
		 * A list of types of the assets to receive updates. You must specify either
		 * or both of asset_names and asset_types. Only asset updates matching
		 * specified asset_names and asset_types are exported to the feed.
		 * For example: `"compute.googleapis.com/Disk"`
		 * See [this
		 * topic](https://cloud.google.com/asset-inventory/docs/supported-asset-types)
		 * for a list of all supported asset types.
		 */
		assetTypes?: Array<string>;

		/**
		 * Asset content type. If not specified, no content but the asset name and
		 * type will be returned.
		 */
		contentType?: FeedContentType | null;

		/** Output configuration for asset feed destination. */
		feedOutputConfig?: FeedOutputConfig;

		/**
		 * Required. The format will be
		 * projects/{project_number}/feeds/{client-assigned_feed_identifier} or
		 * folders/{folder_number}/feeds/{client-assigned_feed_identifier} or
		 * organizations/{organization_number}/feeds/{client-assigned_feed_identifier}
		 * The client-assigned feed identifier must be unique within the parent
		 * project/folder/organization.
		 */
		name?: string | null;
	}

	/**
	 * An asset feed used to export asset updates to a destinations.
	 * An asset feed filter controls what updates are exported.
	 * The asset feed must be created within a project, organization, or
	 * folder. Supported destinations are:
	 * Pub/Sub topics.
	 */
	export interface FeedFormProperties {

		/**
		 * Asset content type. If not specified, no content but the asset name and
		 * type will be returned.
		 */
		contentType: FormControl<FeedContentType | null | undefined>,

		/**
		 * Required. The format will be
		 * projects/{project_number}/feeds/{client-assigned_feed_identifier} or
		 * folders/{folder_number}/feeds/{client-assigned_feed_identifier} or
		 * organizations/{organization_number}/feeds/{client-assigned_feed_identifier}
		 * The client-assigned feed identifier must be unique within the parent
		 * project/folder/organization.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFeedFormGroup() {
		return new FormGroup<FeedFormProperties>({
			contentType: new FormControl<FeedContentType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FeedContentType { CONTENT_TYPE_UNSPECIFIED = 0, RESOURCE = 1, IAM_POLICY = 2, ORG_POLICY = 3, ACCESS_POLICY = 4 }


	/** Output configuration for asset feed destination. */
	export interface FeedOutputConfig {

		/** A Pub/Sub destination. */
		pubsubDestination?: PubsubDestination;
	}

	/** Output configuration for asset feed destination. */
	export interface FeedOutputConfigFormProperties {
	}
	export function CreateFeedOutputConfigFormGroup() {
		return new FormGroup<FeedOutputConfigFormProperties>({
		});

	}


	/** A Pub/Sub destination. */
	export interface PubsubDestination {

		/**
		 * The name of the Pub/Sub topic to publish to.
		 * For example: `projects/PROJECT_ID/topics/TOPIC_ID`.
		 */
		topic?: string | null;
	}

	/** A Pub/Sub destination. */
	export interface PubsubDestinationFormProperties {

		/**
		 * The name of the Pub/Sub topic to publish to.
		 * For example: `projects/PROJECT_ID/topics/TOPIC_ID`.
		 */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePubsubDestinationFormGroup() {
		return new FormGroup<PubsubDestinationFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

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
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Export asset request. */
	export interface ExportAssetsRequest {

		/**
		 * A list of asset types of which to take a snapshot for. For example:
		 * "compute.googleapis.com/Disk". If specified, only matching assets will be
		 * returned. See [Introduction to Cloud Asset
		 * Inventory](https://cloud.google.com/asset-inventory/docs/overview)
		 * for all supported asset types.
		 */
		assetTypes?: Array<string>;

		/**
		 * Asset content type. If not specified, no content but the asset name will be
		 * returned.
		 */
		contentType?: FeedContentType | null;

		/** Output configuration for export assets destination. */
		outputConfig?: OutputConfig;

		/**
		 * Timestamp to take an asset snapshot. This can only be set to a timestamp
		 * between the current time and the current time minus 35 days (inclusive).
		 * If not specified, the current time will be used. Due to delays in resource
		 * data collection and indexing, there is a volatile window during which
		 * running the same query may get different results.
		 */
		readTime?: string | null;
	}

	/** Export asset request. */
	export interface ExportAssetsRequestFormProperties {

		/**
		 * Asset content type. If not specified, no content but the asset name will be
		 * returned.
		 */
		contentType: FormControl<FeedContentType | null | undefined>,

		/**
		 * Timestamp to take an asset snapshot. This can only be set to a timestamp
		 * between the current time and the current time minus 35 days (inclusive).
		 * If not specified, the current time will be used. Due to delays in resource
		 * data collection and indexing, there is a volatile window during which
		 * running the same query may get different results.
		 */
		readTime: FormControl<string | null | undefined>,
	}
	export function CreateExportAssetsRequestFormGroup() {
		return new FormGroup<ExportAssetsRequestFormProperties>({
			contentType: new FormControl<FeedContentType | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output configuration for export assets destination. */
	export interface OutputConfig {

		/** A BigQuery destination. */
		bigqueryDestination?: BigQueryDestination;

		/** A Cloud Storage location. */
		gcsDestination?: GcsDestination;
	}

	/** Output configuration for export assets destination. */
	export interface OutputConfigFormProperties {
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
		});

	}


	/** A Cloud Storage location. */
	export interface GcsDestination {

		/**
		 * The uri of the Cloud Storage object. It's the same uri that is used by
		 * gsutil. For example: "gs://bucket_name/object_name". See [Viewing and
		 * Editing Object
		 * Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata)
		 * for more information.
		 */
		uri?: string | null;

		/**
		 * The uri prefix of all generated Cloud Storage objects. For example:
		 * "gs://bucket_name/object_name_prefix". Each object uri is in format:
		 * "gs://bucket_name/object_name_prefix/<asset type>/<shard number> and only
		 * contains assets for that type. <shard number> starts from 0. For example:
		 * "gs://bucket_name/object_name_prefix/compute.googleapis.com/Disk/0" is
		 * the first shard of output objects containing all
		 * compute.googleapis.com/Disk assets. An INVALID_ARGUMENT error will be
		 * returned if file with the same name "gs://bucket_name/object_name_prefix"
		 * already exists.
		 */
		uriPrefix?: string | null;
	}

	/** A Cloud Storage location. */
	export interface GcsDestinationFormProperties {

		/**
		 * The uri of the Cloud Storage object. It's the same uri that is used by
		 * gsutil. For example: "gs://bucket_name/object_name". See [Viewing and
		 * Editing Object
		 * Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata)
		 * for more information.
		 */
		uri: FormControl<string | null | undefined>,

		/**
		 * The uri prefix of all generated Cloud Storage objects. For example:
		 * "gs://bucket_name/object_name_prefix". Each object uri is in format:
		 * "gs://bucket_name/object_name_prefix/<asset type>/<shard number> and only
		 * contains assets for that type. <shard number> starts from 0. For example:
		 * "gs://bucket_name/object_name_prefix/compute.googleapis.com/Disk/0" is
		 * the first shard of output objects containing all
		 * compute.googleapis.com/Disk assets. An INVALID_ARGUMENT error will be
		 * returned if file with the same name "gs://bucket_name/object_name_prefix"
		 * already exists.
		 */
		uriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGcsDestinationFormGroup() {
		return new FormGroup<GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
			uriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFeedsResponse {

		/** A list of feeds. */
		feeds?: Array<Feed>;
	}
	export interface ListFeedsResponseFormProperties {
	}
	export function CreateListFeedsResponseFormGroup() {
		return new FormGroup<ListFeedsResponseFormProperties>({
		});

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
		done?: boolean | null;

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
		name?: string | null;

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
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface OperationFormProperties {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done: FormControl<boolean | null | undefined>,

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name: FormControl<string | null | undefined>,

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
		code?: number | null;

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
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update asset feed request. */
	export interface UpdateFeedRequest {

		/**
		 * An asset feed used to export asset updates to a destinations.
		 * An asset feed filter controls what updates are exported.
		 * The asset feed must be created within a project, organization, or
		 * folder. Supported destinations are:
		 * Pub/Sub topics.
		 */
		feed?: Feed;

		/**
		 * Required. Only updates the `feed` fields indicated by this mask.
		 * The field mask must not be empty, and it must not contain fields that
		 * are immutable or only set by the server.
		 */
		updateMask?: string | null;
	}

	/** Update asset feed request. */
	export interface UpdateFeedRequestFormProperties {

		/**
		 * Required. Only updates the `feed` fields indicated by this mask.
		 * The field mask must not be empty, and it must not contain fields that
		 * are immutable or only set by the server.
		 */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFeedRequestFormGroup() {
		return new FormGroup<UpdateFeedRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes an asset feed.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the feed and it must be in the format of:
		 * projects/project_number/feeds/feed_id
		 * folders/folder_number/feeds/feed_id
		 * organizations/organization_number/feeds/feed_id
		 * @return {void} Successful response
		 */
		Cloudasset_feeds_delete(name: string): Observable<HttpResponse<string>> {
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
		Cloudasset_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an asset feed configuration.
		 * Patch v1/{name}
		 * @param {string} name Required. The format will be
		 * projects/{project_number}/feeds/{client-assigned_feed_identifier} or
		 * folders/{folder_number}/feeds/{client-assigned_feed_identifier} or
		 * organizations/{organization_number}/feeds/{client-assigned_feed_identifier}
		 * The client-assigned feed identifier must be unique within the parent
		 * project/folder/organization.
		 * @return {void} Successful response
		 */
		Cloudasset_feeds_patch(name: string, requestBody: UpdateFeedRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all asset feeds in a parent project/folder/organization.
		 * Get v1/{parent}/feeds
		 * @param {string} parent Required. The parent project/folder/organization whose feeds are to be
		 * listed. It can only be using project/folder/organization number (such as
		 * "folders/12345")", or a project ID (such as "projects/my-project-id").
		 * @return {void} Successful response
		 */
		Cloudasset_feeds_list(parent: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/feeds', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a feed in a parent project/folder/organization to listen to its
		 * asset updates.
		 * Post v1/{parent}/feeds
		 * @param {string} parent Required. The name of the project/folder/organization where this feed
		 * should be created in. It can only be an organization number (such as
		 * "organizations/123"), a folder number (such as "folders/123"), a project ID
		 * (such as "projects/my-project-id")", or a project number (such as
		 * "projects/12345").
		 * @return {void} Successful response
		 */
		Cloudasset_feeds_create(parent: string, requestBody: CreateFeedRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/feeds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Batch gets the update history of assets that overlap a time window.
		 * For RESOURCE content, this API outputs history with asset in both
		 * non-delete or deleted status.
		 * For IAM_POLICY content, this API outputs history when the asset and its
		 * attached IAM POLICY both exist. This can create gaps in the output history.
		 * If a specified asset does not exist, this API returns an INVALID_ARGUMENT
		 * error.
		 * Get v1/{parent}:batchGetAssetsHistory
		 * @param {string} parent Required. The relative name of the root asset. It can only be an
		 * organization number (such as "organizations/123"), a project ID (such as
		 * "projects/my-project-id")", or a project number (such as "projects/12345").
		 * @param {Array<string>} assetNames A list of the full names of the assets. For example:
		 * `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
		 * See [Resource
		 * Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
		 * and [Resource Name
		 * Format](https://cloud.google.com/asset-inventory/docs/resource-name-format)
		 * for more info.
		 * The request becomes a no-op if the asset name list is empty, and the max
		 * size of the asset name list is 100 in one request.
		 * @param {FeedContentType} contentType Optional. The content type.
		 * @param {string} readTimeWindow_endTime End time of the time window (inclusive). If not specified, the current
		 * timestamp is used instead.
		 * @param {string} readTimeWindow_startTime Start time of the time window (exclusive).
		 * @return {void} Successful response
		 */
		Cloudasset_batchGetAssetsHistory(parent: string, assetNames: Array<string> | null | undefined, contentType: FeedContentType | null | undefined, readTimeWindow_endTime: string | null | undefined, readTimeWindow_startTime: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':batchGetAssetsHistory&' + assetNames?.map(z => `assetNames=${encodeURIComponent(z)}`).join('&') + '&contentType=' + contentType + '&readTimeWindow_endTime=' + (readTimeWindow_endTime == null ? '' : encodeURIComponent(readTimeWindow_endTime)) + '&readTimeWindow_startTime=' + (readTimeWindow_startTime == null ? '' : encodeURIComponent(readTimeWindow_startTime)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports assets with time and resource types to a given Cloud Storage
		 * location. The output format is newline-delimited JSON.
		 * This API implements the google.longrunning.Operation API allowing you
		 * to keep track of the export.
		 * Post v1/{parent}:exportAssets
		 * @param {string} parent Required. The relative name of the root asset. This can only be an
		 * organization number (such as "organizations/123"), a project ID (such as
		 * "projects/my-project-id"), or a project number (such as "projects/12345"),
		 * or a folder number (such as "folders/123").
		 * @return {void} Successful response
		 */
		Cloudasset_exportAssets(parent: string, requestBody: ExportAssetsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':exportAssets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

