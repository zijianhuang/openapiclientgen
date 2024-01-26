import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Metadata of Access Context Manager's Long Running Operations. */
	export interface AccessContextManagerOperationMetadata {
	}

	/** Metadata of Access Context Manager's Long Running Operations. */
	export interface AccessContextManagerOperationMetadataFormProperties {
	}
	export function CreateAccessContextManagerOperationMetadataFormGroup() {
		return new FormGroup<AccessContextManagerOperationMetadataFormProperties>({
		});

	}


	/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
	export interface AccessLevel {

		/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
		basic?: BasicLevel;

		/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
		custom?: CustomLevel;

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description?: string | null;

		/** Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`. */
		name?: string | null;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;
	}

	/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
	export interface AccessLevelFormProperties {

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description: FormControl<string | null | undefined>,

		/** Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`. */
		name: FormControl<string | null | undefined>,

		/** Human readable title. Must be unique within the Policy. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAccessLevelFormGroup() {
		return new FormGroup<AccessLevelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
	export interface BasicLevel {

		/** How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND. */
		combiningFunction?: BasicLevelCombiningFunction | null;

		/** Required. A list of requirements for the `AccessLevel` to be granted. */
		conditions?: Array<Condition>;
	}

	/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
	export interface BasicLevelFormProperties {

		/** How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND. */
		combiningFunction: FormControl<BasicLevelCombiningFunction | null | undefined>,
	}
	export function CreateBasicLevelFormGroup() {
		return new FormGroup<BasicLevelFormProperties>({
			combiningFunction: new FormControl<BasicLevelCombiningFunction | null | undefined>(undefined),
		});

	}

	export enum BasicLevelCombiningFunction { AND = 0, OR = 1 }


	/** A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction. */
	export interface Condition {

		/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
		devicePolicy?: DevicePolicy;

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
	}

	/** A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction. */
	export interface ConditionFormProperties {

		/** Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields. Any non-empty field criteria evaluating to false will result in the Condition to be satisfied. Defaults to false. */
		negate: FormControl<boolean | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			negate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
	export interface DevicePolicy {

		/** Allowed device management levels, an empty list allows all management levels. */
		allowedDeviceManagementLevels?: Array<string>;

		/** Allowed encryptions statuses, an empty list allows all statuses. */
		allowedEncryptionStatuses?: Array<string>;

		/** Allowed OS versions, an empty list allows all types and all versions. */
		osConstraints?: Array<OsConstraint>;

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval?: boolean | null;

		/** Whether the device needs to be corp owned. */
		requireCorpOwned?: boolean | null;

		/** Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`. */
		requireScreenlock?: boolean | null;
	}

	/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
	export interface DevicePolicyFormProperties {

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval: FormControl<boolean | null | undefined>,

		/** Whether the device needs to be corp owned. */
		requireCorpOwned: FormControl<boolean | null | undefined>,

		/** Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`. */
		requireScreenlock: FormControl<boolean | null | undefined>,
	}
	export function CreateDevicePolicyFormGroup() {
		return new FormGroup<DevicePolicyFormProperties>({
			requireAdminApproval: new FormControl<boolean | null | undefined>(undefined),
			requireCorpOwned: new FormControl<boolean | null | undefined>(undefined),
			requireScreenlock: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A restriction on the OS type and version of devices making requests. */
	export interface OsConstraint {

		/** The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`. */
		minimumVersion?: string | null;

		/** Required. The allowed OS type. */
		osType?: OsConstraintOsType | null;

		/** Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request. */
		requireVerifiedChromeOs?: boolean | null;
	}

	/** A restriction on the OS type and version of devices making requests. */
	export interface OsConstraintFormProperties {

		/** The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`. */
		minimumVersion: FormControl<string | null | undefined>,

		/** Required. The allowed OS type. */
		osType: FormControl<OsConstraintOsType | null | undefined>,

		/** Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request. */
		requireVerifiedChromeOs: FormControl<boolean | null | undefined>,
	}
	export function CreateOsConstraintFormGroup() {
		return new FormGroup<OsConstraintFormProperties>({
			minimumVersion: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<OsConstraintOsType | null | undefined>(undefined),
			requireVerifiedChromeOs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OsConstraintOsType { OS_UNSPECIFIED = 0, DESKTOP_MAC = 1, DESKTOP_WINDOWS = 2, DESKTOP_LINUX = 3, DESKTOP_CHROME_OS = 4, ANDROID = 5, IOS = 6 }


	/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
	export interface CustomLevel {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		expr?: Expr;
	}

	/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
	export interface CustomLevelFormProperties {
	}
	export function CreateCustomLevelFormGroup() {
		return new FormGroup<CustomLevelFormProperties>({
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


	/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
	export interface AccessPolicy {

		/** Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{policy_id}` */
		name?: string | null;

		/** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
		parent?: string | null;

		/** Required. Human readable title. Does not affect behavior. */
		title?: string | null;
	}

	/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
	export interface AccessPolicyFormProperties {

		/** Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{policy_id}` */
		name: FormControl<string | null | undefined>,

		/** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
		parent: FormControl<string | null | undefined>,

		/** Required. Human readable title. Does not affect behavior. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAccessPolicyFormGroup() {
		return new FormGroup<AccessPolicyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response to `ListAccessLevelsRequest`. */
	export interface ListAccessLevelsResponse {

		/** List of the Access Level instances. */
		accessLevels?: Array<AccessLevel>;

		/** The pagination token to retrieve the next page of results. If the value is empty, no further results remain. */
		nextPageToken?: string | null;
	}

	/** A response to `ListAccessLevelsRequest`. */
	export interface ListAccessLevelsResponseFormProperties {

		/** The pagination token to retrieve the next page of results. If the value is empty, no further results remain. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessLevelsResponseFormGroup() {
		return new FormGroup<ListAccessLevelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response to `ListAccessPoliciesRequest`. */
	export interface ListAccessPoliciesResponse {

		/** List of the AccessPolicy instances. */
		accessPolicies?: Array<AccessPolicy>;

		/** The pagination token to retrieve the next page of results. If the value is empty, no further results remain. */
		nextPageToken?: string | null;
	}

	/** A response to `ListAccessPoliciesRequest`. */
	export interface ListAccessPoliciesResponseFormProperties {

		/** The pagination token to retrieve the next page of results. If the value is empty, no further results remain. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessPoliciesResponseFormGroup() {
		return new FormGroup<ListAccessPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response to `ListServicePerimetersRequest`. */
	export interface ListServicePerimetersResponse {

		/** The pagination token to retrieve the next page of results. If the value is empty, no further results remain. */
		nextPageToken?: string | null;

		/** List of the Service Perimeter instances. */
		servicePerimeters?: Array<ServicePerimeter>;
	}

	/** A response to `ListServicePerimetersRequest`. */
	export interface ListServicePerimetersResponseFormProperties {

		/** The pagination token to retrieve the next page of results. If the value is empty, no further results remain. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicePerimetersResponseFormGroup() {
		return new FormGroup<ListServicePerimetersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
	export interface ServicePerimeter {

		/** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
		description?: string | null;

		/** Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. */
		name?: string | null;

		/** Perimeter type indicator. A single project is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, restricted/unrestricted service lists as well as access lists must be empty. */
		perimeterType?: ServicePerimeterPerimeterType | null;

		/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
		status?: ServicePerimeterConfig;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;
	}

	/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
	export interface ServicePerimeterFormProperties {

		/** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
		description: FormControl<string | null | undefined>,

		/** Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. */
		name: FormControl<string | null | undefined>,

		/** Perimeter type indicator. A single project is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, restricted/unrestricted service lists as well as access lists must be empty. */
		perimeterType: FormControl<ServicePerimeterPerimeterType | null | undefined>,

		/** Human readable title. Must be unique within the Policy. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateServicePerimeterFormGroup() {
		return new FormGroup<ServicePerimeterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			perimeterType: new FormControl<ServicePerimeterPerimeterType | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServicePerimeterPerimeterType { PERIMETER_TYPE_REGULAR = 0, PERIMETER_TYPE_BRIDGE = 1 }


	/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
	export interface ServicePerimeterConfig {

		/** A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty. */
		accessLevels?: Array<string>;

		/** A list of Google Cloud resources that are inside of the service perimeter. Currently only projects are allowed. Format: `projects/{project_number}` */
		resources?: Array<string>;

		/** Google Cloud services that are subject to the Service Perimeter restrictions. Must contain a list of services. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions. */
		restrictedServices?: Array<string>;

		/** Google Cloud services that are not subject to the Service Perimeter restrictions. Deprecated. Must be set to a single wildcard "*". The wildcard means that unless explicitly specified by "restricted_services" list, any service is treated as unrestricted. */
		unrestrictedServices?: Array<string>;

		/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
		vpcAccessibleServices?: VpcAccessibleServices;
	}

	/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
	export interface ServicePerimeterConfigFormProperties {
	}
	export function CreateServicePerimeterConfigFormGroup() {
		return new FormGroup<ServicePerimeterConfigFormProperties>({
		});

	}


	/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
	export interface VpcAccessibleServices {

		/** The list of APIs usable within the Service Perimeter. Must be empty unless 'enable_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter. */
		allowedServices?: Array<string>;

		/** Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'. */
		enableRestriction?: boolean | null;
	}

	/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
	export interface VpcAccessibleServicesFormProperties {

		/** Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'. */
		enableRestriction: FormControl<boolean | null | undefined>,
	}
	export function CreateVpcAccessibleServicesFormGroup() {
		return new FormGroup<VpcAccessibleServicesFormProperties>({
			enableRestriction: new FormControl<boolean | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all AccessPolicies under a container.
		 * Get v1beta/accessPolicies
		 * @param {number} pageSize Number of AccessPolicy instances to include in the list. Default 100.
		 * @param {string} pageToken Next page token for the next batch of AccessPolicy instances. Defaults to the first page of results.
		 * @param {string} parent Required. Resource name for the container to list AccessPolicy instances from. Format: `organizations/{org_id}`
		 * @return {ListAccessPoliciesResponse} Successful response
		 */
		Accesscontextmanager_accessPolicies_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListAccessPoliciesResponse> {
			return this.http.get<ListAccessPoliciesResponse>(this.baseUri + 'v1beta/accessPolicies?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
		 * Post v1beta/accessPolicies
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_create(requestBody: AccessPolicy): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/accessPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
		 * Delete v1beta/{name}
		 * @param {string} name Required. Resource name for the Service Perimeter. Format: `accessPolicies/{policy_id}/servicePerimeters/{service_perimeter_id}`
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_delete(name: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta/{name}
		 * @param {string} name The name of the operation resource.
		 * @param {Accesscontextmanager_operations_getAccessLevelFormat} accessLevelFormat Whether to return `BasicLevels` in the Cloud Common Expression Language rather than as `BasicLevels`. Defaults to AS_DEFINED, where Access Levels are returned as `BasicLevels` or `CustomLevels` based on how they were created. If set to CEL, all Access Levels are returned as `CustomLevels`. In the CEL case, `BasicLevels` are translated to equivalent `CustomLevels`.
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_operations_get(name: string, accessLevelFormat: Accesscontextmanager_operations_getAccessLevelFormat | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&accessLevelFormat=' + accessLevelFormat, {});
		}

		/**
		 * Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.
		 * Patch v1beta/{name}
		 * @param {string} name Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`.
		 * @param {string} updateMask Required. Mask to control which fields get updated. Must be non-empty.
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_patch(name: string, updateMask: string | null | undefined, requestBody: ServicePerimeter): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all Access Levels for an access policy.
		 * Get v1beta/{parent}/accessLevels
		 * @param {string} parent Required. Resource name for the access policy to list Access Levels from. Format: `accessPolicies/{policy_id}`
		 * @param {Accesscontextmanager_operations_getAccessLevelFormat} accessLevelFormat Whether to return `BasicLevels` in the Cloud Common Expression language, as `CustomLevels`, rather than as `BasicLevels`. Defaults to returning `AccessLevels` in the format they were defined.
		 * @param {number} pageSize Number of Access Levels to include in the list. Default 100.
		 * @param {string} pageToken Next page token for the next batch of Access Level instances. Defaults to the first page of results.
		 * @return {ListAccessLevelsResponse} Successful response
		 */
		Accesscontextmanager_accessPolicies_accessLevels_list(parent: string, accessLevelFormat: Accesscontextmanager_operations_getAccessLevelFormat | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAccessLevelsResponse> {
			return this.http.get<ListAccessLevelsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessLevels&accessLevelFormat=' + accessLevelFormat + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
		 * Post v1beta/{parent}/accessLevels
		 * @param {string} parent Required. Resource name for the access policy which owns this Access Level. Format: `accessPolicies/{policy_id}`
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_accessLevels_create(parent: string, requestBody: AccessLevel): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessLevels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all Service Perimeters for an access policy.
		 * Get v1beta/{parent}/servicePerimeters
		 * @param {string} parent Required. Resource name for the access policy to list Service Perimeters from. Format: `accessPolicies/{policy_id}`
		 * @param {number} pageSize Number of Service Perimeters to include in the list. Default 100.
		 * @param {string} pageToken Next page token for the next batch of Service Perimeter instances. Defaults to the first page of results.
		 * @return {ListServicePerimetersResponse} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServicePerimetersResponse> {
			return this.http.get<ListServicePerimetersResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servicePerimeters&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
		 * Post v1beta/{parent}/servicePerimeters
		 * @param {string} parent Required. Resource name for the access policy which owns this Service Perimeter. Format: `accessPolicies/{policy_id}`
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_create(parent: string, requestBody: ServicePerimeter): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servicePerimeters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Accesscontextmanager_operations_getAccessLevelFormat { LEVEL_FORMAT_UNSPECIFIED = 0, AS_DEFINED = 1, CEL = 2 }

}

