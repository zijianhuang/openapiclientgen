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

		/** The request must originate from one of the provided VPC networks in Google Cloud. Cannot specify this field together with `ip_subnetworks`. */
		vpcNetworkSources?: Array<VpcNetworkSource>;
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


	/** The originating network source in Google Cloud. */
	export interface VpcNetworkSource {

		/** Sub-segment ranges inside of a VPC Network. */
		vpcSubnetwork?: VpcSubNetwork;
	}

	/** The originating network source in Google Cloud. */
	export interface VpcNetworkSourceFormProperties {
	}
	export function CreateVpcNetworkSourceFormGroup() {
		return new FormGroup<VpcNetworkSourceFormProperties>({
		});

	}


	/** Sub-segment ranges inside of a VPC Network. */
	export interface VpcSubNetwork {

		/** Required. Network name. If the network is not part of the organization, the `compute.network.get` permission must be granted to the caller. Format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}` Example: `//compute.googleapis.com/projects/my-project/global/networks/network-1` */
		network?: string | null;

		/** CIDR block IP subnetwork specification. The IP address must be an IPv4 address and can be a public or private IP address. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. If empty, all IP addresses are allowed. */
		vpcIpSubnetworks?: Array<string>;
	}

	/** Sub-segment ranges inside of a VPC Network. */
	export interface VpcSubNetworkFormProperties {

		/** Required. Network name. If the network is not part of the organization, the `compute.network.get` permission must be granted to the caller. Format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}` Example: `//compute.googleapis.com/projects/my-project/global/networks/network-1` */
		network: FormControl<string | null | undefined>,
	}
	export function CreateVpcSubNetworkFormGroup() {
		return new FormGroup<VpcSubNetworkFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
		});

	}


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
	export interface AccessPolicyFormProperties {

		/** Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}` */
		name: FormControl<string | null | undefined>,

		/** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
		parent: FormControl<string | null | undefined>,

		/** Required. Human readable title. Does not affect behavior. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAccessPolicyFormGroup() {
		return new FormGroup<AccessPolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identification for an API Operation. */
	export interface ApiOperation {

		/** API methods or permissions to allow. Method or permission must belong to the service specified by `service_name` field. A single MethodSelector entry with `*` specified for the `method` field will allow all methods AND permissions for the service specified in `service_name`. */
		methodSelectors?: Array<MethodSelector>;

		/** The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services. */
		serviceName?: string | null;
	}

	/** Identification for an API Operation. */
	export interface ApiOperationFormProperties {

		/** The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateApiOperationFormGroup() {
		return new FormGroup<ApiOperationFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An allowed method or permission of a service specified in ApiOperation. */
	export interface MethodSelector {

		/** A valid method name for the corresponding `service_name` in ApiOperation. If `*` is used as the value for the `method`, then ALL methods and permissions are allowed. */
		method?: string | null;

		/** A valid Cloud IAM permission for the corresponding `service_name` in ApiOperation. */
		permission?: string | null;
	}

	/** An allowed method or permission of a service specified in ApiOperation. */
	export interface MethodSelectorFormProperties {

		/** A valid method name for the corresponding `service_name` in ApiOperation. If `*` is used as the value for the `method`, then ALL methods and permissions are allowed. */
		method: FormControl<string | null | undefined>,

		/** A valid Cloud IAM permission for the corresponding `service_name` in ApiOperation. */
		permission: FormControl<string | null | undefined>,
	}
	export function CreateMethodSelectorFormGroup() {
		return new FormGroup<MethodSelectorFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
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


	/** `AuthorizedOrgsDesc` contains data for an organization's authorization policy. */
	export interface AuthorizedOrgsDesc {

		/** The asset type of this authorized orgs desc. Valid values are `ASSET_TYPE_DEVICE`, and `ASSET_TYPE_CREDENTIAL_STRENGTH`. */
		assetType?: AuthorizedOrgsDescAssetType | null;

		/** The direction of the authorization relationship between this organization and the organizations listed in the `orgs` field. The valid values for this field include the following: `AUTHORIZATION_DIRECTION_FROM`: Allows this organization to evaluate traffic in the organizations listed in the `orgs` field. `AUTHORIZATION_DIRECTION_TO`: Allows the organizations listed in the `orgs` field to evaluate the traffic in this organization. For the authorization relationship to take effect, all of the organizations must authorize and specify the appropriate relationship direction. For example, if organization A authorized organization B and C to evaluate its traffic, by specifying `AUTHORIZATION_DIRECTION_TO` as the authorization direction, organizations B and C must specify `AUTHORIZATION_DIRECTION_FROM` as the authorization direction in their `AuthorizedOrgsDesc` resource. */
		authorizationDirection?: AuthorizedOrgsDescAuthorizationDirection | null;

		/** A granular control type for authorization levels. Valid value is `AUTHORIZATION_TYPE_TRUST`. */
		authorizationType?: AuthorizedOrgsDescAuthorizationType | null;

		/** Resource name for the `AuthorizedOrgsDesc`. Format: `accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}`. The `authorized_orgs_desc` component must begin with a letter, followed by alphanumeric characters or `_`. After you create an `AuthorizedOrgsDesc`, you cannot change its `name`. */
		name?: string | null;

		/** The list of organization ids in this AuthorizedOrgsDesc. Format: `organizations/` Example: `organizations/123456` */
		orgs?: Array<string>;
	}

	/** `AuthorizedOrgsDesc` contains data for an organization's authorization policy. */
	export interface AuthorizedOrgsDescFormProperties {

		/** The asset type of this authorized orgs desc. Valid values are `ASSET_TYPE_DEVICE`, and `ASSET_TYPE_CREDENTIAL_STRENGTH`. */
		assetType: FormControl<AuthorizedOrgsDescAssetType | null | undefined>,

		/** The direction of the authorization relationship between this organization and the organizations listed in the `orgs` field. The valid values for this field include the following: `AUTHORIZATION_DIRECTION_FROM`: Allows this organization to evaluate traffic in the organizations listed in the `orgs` field. `AUTHORIZATION_DIRECTION_TO`: Allows the organizations listed in the `orgs` field to evaluate the traffic in this organization. For the authorization relationship to take effect, all of the organizations must authorize and specify the appropriate relationship direction. For example, if organization A authorized organization B and C to evaluate its traffic, by specifying `AUTHORIZATION_DIRECTION_TO` as the authorization direction, organizations B and C must specify `AUTHORIZATION_DIRECTION_FROM` as the authorization direction in their `AuthorizedOrgsDesc` resource. */
		authorizationDirection: FormControl<AuthorizedOrgsDescAuthorizationDirection | null | undefined>,

		/** A granular control type for authorization levels. Valid value is `AUTHORIZATION_TYPE_TRUST`. */
		authorizationType: FormControl<AuthorizedOrgsDescAuthorizationType | null | undefined>,

		/** Resource name for the `AuthorizedOrgsDesc`. Format: `accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}`. The `authorized_orgs_desc` component must begin with a letter, followed by alphanumeric characters or `_`. After you create an `AuthorizedOrgsDesc`, you cannot change its `name`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizedOrgsDescFormGroup() {
		return new FormGroup<AuthorizedOrgsDescFormProperties>({
			assetType: new FormControl<AuthorizedOrgsDescAssetType | null | undefined>(undefined),
			authorizationDirection: new FormControl<AuthorizedOrgsDescAuthorizationDirection | null | undefined>(undefined),
			authorizationType: new FormControl<AuthorizedOrgsDescAuthorizationType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthorizedOrgsDescAssetType { ASSET_TYPE_UNSPECIFIED = 0, ASSET_TYPE_DEVICE = 1, ASSET_TYPE_CREDENTIAL_STRENGTH = 2 }

	export enum AuthorizedOrgsDescAuthorizationDirection { AUTHORIZATION_DIRECTION_UNSPECIFIED = 0, AUTHORIZATION_DIRECTION_TO = 1, AUTHORIZATION_DIRECTION_FROM = 2 }

	export enum AuthorizedOrgsDescAuthorizationType { AUTHORIZATION_TYPE_UNSPECIFIED = 0, AUTHORIZATION_TYPE_TRUST = 1 }


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


	/** A request to commit dry-run specs in all Service Perimeters belonging to an Access Policy. */
	export interface CommitServicePerimetersRequest {

		/** Optional. The etag for the version of the Access Policy that this commit operation is to be performed on. If, at the time of commit, the etag for the Access Policy stored in Access Context Manager is different from the specified etag, then the commit operation will not be performed and the call will fail. This field is not required. If etag is not provided, the operation will be performed as if a valid etag is provided. */
		etag?: string | null;
	}

	/** A request to commit dry-run specs in all Service Perimeters belonging to an Access Policy. */
	export interface CommitServicePerimetersRequestFormProperties {

		/** Optional. The etag for the version of the Access Policy that this commit operation is to be performed on. If, at the time of commit, the etag for the Access Policy stored in Access Context Manager is different from the specified etag, then the commit operation will not be performed and the call will fail. This field is not required. If etag is not provided, the operation will be performed as if a valid etag is provided. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateCommitServicePerimetersRequestFormGroup() {
		return new FormGroup<CommitServicePerimetersRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response to CommitServicePerimetersRequest. This will be put inside of Operation.response field. */
	export interface CommitServicePerimetersResponse {

		/** List of all the Service Perimeter instances in the Access Policy. */
		servicePerimeters?: Array<ServicePerimeter>;
	}

	/** A response to CommitServicePerimetersRequest. This will be put inside of Operation.response field. */
	export interface CommitServicePerimetersResponseFormProperties {
	}
	export function CreateCommitServicePerimetersResponseFormGroup() {
		return new FormGroup<CommitServicePerimetersResponseFormProperties>({
		});

	}


	/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project or VPC network can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
	export interface ServicePerimeter {

		/** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
		description?: string | null;

		/** Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. */
		name?: string | null;

		/** Perimeter type indicator. A single project or VPC network is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty. */
		perimeterType?: ServicePerimeterPerimeterType | null;

		/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
		spec?: ServicePerimeterConfig;

		/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
		status?: ServicePerimeterConfig;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;

		/** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values. */
		useExplicitDryRunSpec?: boolean | null;
	}

	/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project or VPC network can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
	export interface ServicePerimeterFormProperties {

		/** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
		description: FormControl<string | null | undefined>,

		/** Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. */
		name: FormControl<string | null | undefined>,

		/** Perimeter type indicator. A single project or VPC network is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty. */
		perimeterType: FormControl<ServicePerimeterPerimeterType | null | undefined>,

		/** Human readable title. Must be unique within the Policy. */
		title: FormControl<string | null | undefined>,

		/** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values. */
		useExplicitDryRunSpec: FormControl<boolean | null | undefined>,
	}
	export function CreateServicePerimeterFormGroup() {
		return new FormGroup<ServicePerimeterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			perimeterType: new FormControl<ServicePerimeterPerimeterType | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			useExplicitDryRunSpec: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ServicePerimeterPerimeterType { PERIMETER_TYPE_REGULAR = 0, PERIMETER_TYPE_BRIDGE = 1 }


	/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
	export interface ServicePerimeterConfig {

		/** A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty. */
		accessLevels?: Array<string>;

		/** List of EgressPolicies to apply to the perimeter. A perimeter may have multiple EgressPolicies, each of which is evaluated separately. Access is granted if any EgressPolicy grants it. Must be empty for a perimeter bridge. */
		egressPolicies?: Array<EgressPolicy>;

		/** List of IngressPolicies to apply to the perimeter. A perimeter may have multiple IngressPolicies, each of which is evaluated separately. Access is granted if any Ingress Policy grants it. Must be empty for a perimeter bridge. */
		ingressPolicies?: Array<IngressPolicy>;

		/** A list of Google Cloud resources that are inside of the service perimeter. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. */
		resources?: Array<string>;

		/** Google Cloud services that are subject to the Service Perimeter restrictions. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions. */
		restrictedServices?: Array<string>;

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


	/** Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo. */
	export interface EgressPolicy {

		/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
		egressFrom?: EgressFrom;

		/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
		egressTo?: EgressTo;
	}

	/** Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo. */
	export interface EgressPolicyFormProperties {
	}
	export function CreateEgressPolicyFormGroup() {
		return new FormGroup<EgressPolicyFormProperties>({
		});

	}


	/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
	export interface EgressFrom {

		/** A list of identities that are allowed access through this [EgressPolicy]. Should be in the format of email address. The email address should represent individual user or service account only. */
		identities?: Array<string>;

		/** Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType?: EgressFromIdentityType | null;

		/** Whether to enforce traffic restrictions based on `sources` field. If the `sources` fields is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`. */
		sourceRestriction?: EgressFromSourceRestriction | null;

		/** Sources that this EgressPolicy authorizes access from. If this field is not empty, then `source_restriction` must be set to `SOURCE_RESTRICTION_ENABLED`. */
		sources?: Array<EgressSource>;
	}

	/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
	export interface EgressFromFormProperties {

		/** Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType: FormControl<EgressFromIdentityType | null | undefined>,

		/** Whether to enforce traffic restrictions based on `sources` field. If the `sources` fields is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`. */
		sourceRestriction: FormControl<EgressFromSourceRestriction | null | undefined>,
	}
	export function CreateEgressFromFormGroup() {
		return new FormGroup<EgressFromFormProperties>({
			identityType: new FormControl<EgressFromIdentityType | null | undefined>(undefined),
			sourceRestriction: new FormControl<EgressFromSourceRestriction | null | undefined>(undefined),
		});

	}

	export enum EgressFromIdentityType { IDENTITY_TYPE_UNSPECIFIED = 0, ANY_IDENTITY = 1, ANY_USER_ACCOUNT = 2, ANY_SERVICE_ACCOUNT = 3 }

	export enum EgressFromSourceRestriction { SOURCE_RESTRICTION_UNSPECIFIED = 0, SOURCE_RESTRICTION_ENABLED = 1, SOURCE_RESTRICTION_DISABLED = 2 }


	/** The source that EgressPolicy authorizes access from inside the ServicePerimeter to somewhere outside the ServicePerimeter boundaries. */
	export interface EgressSource {

		/** An AccessLevel resource name that allows protected resources inside the ServicePerimeters to access outside the ServicePerimeter boundaries. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If an AccessLevel name is not specified, only resources within the perimeter can be accessed through Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all EgressSources will be allowed. */
		accessLevel?: string | null;
	}

	/** The source that EgressPolicy authorizes access from inside the ServicePerimeter to somewhere outside the ServicePerimeter boundaries. */
	export interface EgressSourceFormProperties {

		/** An AccessLevel resource name that allows protected resources inside the ServicePerimeters to access outside the ServicePerimeter boundaries. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If an AccessLevel name is not specified, only resources within the perimeter can be accessed through Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all EgressSources will be allowed. */
		accessLevel: FormControl<string | null | undefined>,
	}
	export function CreateEgressSourceFormGroup() {
		return new FormGroup<EgressSourceFormProperties>({
			accessLevel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
	export interface EgressTo {

		/** A list of external resources that are allowed to be accessed. Only AWS and Azure resources are supported. For Amazon S3, the supported format is s3://BUCKET_NAME. For Azure Storage, the supported format is azure://myaccount.blob.core.windows.net/CONTAINER_NAME. A request matches if it contains an external resource in this list (Example: s3://bucket/path). Currently '*' is not allowed. */
		externalResources?: Array<string>;

		/** A list of ApiOperations allowed to be performed by the sources specified in the corresponding EgressFrom. A request matches if it uses an operation/service in this list. */
		operations?: Array<ApiOperation>;

		/** A list of resources, currently only projects in the form `projects/`, that are allowed to be accessed by sources defined in the corresponding EgressFrom. A request matches if it contains a resource in this list. If `*` is specified for `resources`, then this EgressTo rule will authorize access to all resources outside the perimeter. */
		resources?: Array<string>;
	}

	/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
	export interface EgressToFormProperties {
	}
	export function CreateEgressToFormGroup() {
		return new FormGroup<EgressToFormProperties>({
		});

	}


	/** Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field. */
	export interface IngressPolicy {

		/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
		ingressFrom?: IngressFrom;

		/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
		ingressTo?: IngressTo;
	}

	/** Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field. */
	export interface IngressPolicyFormProperties {
	}
	export function CreateIngressPolicyFormGroup() {
		return new FormGroup<IngressPolicyFormProperties>({
		});

	}


	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
	export interface IngressFrom {

		/** A list of identities that are allowed access through this ingress policy. Should be in the format of email address. The email address should represent individual user or service account only. */
		identities?: Array<string>;

		/** Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType?: EgressFromIdentityType | null;

		/** Sources that this IngressPolicy authorizes access from. */
		sources?: Array<IngressSource>;
	}

	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
	export interface IngressFromFormProperties {

		/** Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType: FormControl<EgressFromIdentityType | null | undefined>,
	}
	export function CreateIngressFromFormGroup() {
		return new FormGroup<IngressFromFormProperties>({
			identityType: new FormControl<EgressFromIdentityType | null | undefined>(undefined),
		});

	}


	/** The source that IngressPolicy authorizes access from. */
	export interface IngressSource {

		/** An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed. */
		accessLevel?: string | null;

		/** A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported. */
		resource?: string | null;
	}

	/** The source that IngressPolicy authorizes access from. */
	export interface IngressSourceFormProperties {

		/** An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed. */
		accessLevel: FormControl<string | null | undefined>,

		/** A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateIngressSourceFormGroup() {
		return new FormGroup<IngressSourceFormProperties>({
			accessLevel: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
	export interface IngressTo {

		/** A list of ApiOperations allowed to be performed by the sources specified in corresponding IngressFrom in this ServicePerimeter. */
		operations?: Array<ApiOperation>;

		/** A list of resources, currently only projects in the form `projects/`, protected by this ServicePerimeter that are allowed to be accessed by sources defined in the corresponding IngressFrom. If a single `*` is specified, then access to all resources inside the perimeter are allowed. */
		resources?: Array<string>;
	}

	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
	export interface IngressToFormProperties {
	}
	export function CreateIngressToFormGroup() {
		return new FormGroup<IngressToFormProperties>({
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


	/** Restricts access to Cloud Console and Google Cloud APIs for a set of users using Context-Aware Access. */
	export interface GcpUserAccessBinding {

		/** Optional. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted" */
		accessLevels?: Array<string>;

		/** Optional. Dry run access level that will be evaluated but will not be enforced. The access denial based on dry run policy will be logged. Only one access level is supported, not multiple. This list must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted" */
		dryRunAccessLevels?: Array<string>;

		/** Required. Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the [G Suite Directory API's Groups resource] (https://developers.google.com/admin-sdk/directory/v1/reference/groups#resource). If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht" */
		groupKey?: string | null;

		/** Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved characters (as defined by [RFC 3986 Section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)). Should not be specified by the client during creation. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N" */
		name?: string | null;
	}

	/** Restricts access to Cloud Console and Google Cloud APIs for a set of users using Context-Aware Access. */
	export interface GcpUserAccessBindingFormProperties {

		/** Required. Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the [G Suite Directory API's Groups resource] (https://developers.google.com/admin-sdk/directory/v1/reference/groups#resource). If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht" */
		groupKey: FormControl<string | null | undefined>,

		/** Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved characters (as defined by [RFC 3986 Section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)). Should not be specified by the client during creation. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGcpUserAccessBindingFormGroup() {
		return new FormGroup<GcpUserAccessBindingFormProperties>({
			groupKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of GCP Access Binding Long Running Operations. */
	export interface GcpUserAccessBindingOperationMetadata {
	}

	/** Metadata of GCP Access Binding Long Running Operations. */
	export interface GcpUserAccessBindingOperationMetadataFormProperties {
	}
	export function CreateGcpUserAccessBindingOperationMetadataFormGroup() {
		return new FormGroup<GcpUserAccessBindingOperationMetadataFormProperties>({
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


	/** A response to `ListAuthorizedOrgsDescsRequest`. */
	export interface ListAuthorizedOrgsDescsResponse {

		/** List of all the Authorized Orgs Desc instances. */
		authorizedOrgsDescs?: Array<AuthorizedOrgsDesc>;

		/** The pagination token to retrieve the next page of results. If the value is empty, no further results remain. */
		nextPageToken?: string | null;
	}

	/** A response to `ListAuthorizedOrgsDescsRequest`. */
	export interface ListAuthorizedOrgsDescsResponseFormProperties {

		/** The pagination token to retrieve the next page of results. If the value is empty, no further results remain. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAuthorizedOrgsDescsResponseFormGroup() {
		return new FormGroup<ListAuthorizedOrgsDescsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of ListGcpUserAccessBindings. */
	export interface ListGcpUserAccessBindingsResponse {

		/** GcpUserAccessBinding */
		gcpUserAccessBindings?: Array<GcpUserAccessBinding>;

		/** Token to get the next page of items. If blank, there are no more items. */
		nextPageToken?: string | null;
	}

	/** Response of ListGcpUserAccessBindings. */
	export interface ListGcpUserAccessBindingsResponseFormProperties {

		/** Token to get the next page of items. If blank, there are no more items. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGcpUserAccessBindingsResponseFormGroup() {
		return new FormGroup<ListGcpUserAccessBindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** A response to `ListSupportedServicesRequest`. */
	export interface ListSupportedServicesResponse {

		/** The pagination token to retrieve the next page of results. If the value is empty, no further results remain. */
		nextPageToken?: string | null;

		/** List of services supported by VPC Service Controls instances. */
		supportedServices?: Array<SupportedService>;
	}

	/** A response to `ListSupportedServicesRequest`. */
	export interface ListSupportedServicesResponseFormProperties {

		/** The pagination token to retrieve the next page of results. If the value is empty, no further results remain. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSupportedServicesResponseFormGroup() {
		return new FormGroup<ListSupportedServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `SupportedService` specifies the VPC Service Controls and its properties. */
	export interface SupportedService {

		/** True if the service is available on the restricted VIP. Services on the restricted VIP typically either support VPC Service Controls or are core infrastructure services required for the functioning of Google Cloud. */
		availableOnRestrictedVip?: boolean | null;

		/** True if the service is supported with some limitations. Check [documentation](https://cloud.google.com/vpc-service-controls/docs/supported-products) for details. */
		knownLimitations?: boolean | null;

		/** The service name or address of the supported service, such as `service.googleapis.com`. */
		name?: string | null;

		/** The support stage of the service. */
		supportStage?: SupportedServiceSupportStage | null;

		/** The list of the supported methods. This field exists only in response to GetSupportedService */
		supportedMethods?: Array<MethodSelector>;

		/** The name of the supported product, such as 'Cloud Product API'. */
		title?: string | null;
	}

	/** `SupportedService` specifies the VPC Service Controls and its properties. */
	export interface SupportedServiceFormProperties {

		/** True if the service is available on the restricted VIP. Services on the restricted VIP typically either support VPC Service Controls or are core infrastructure services required for the functioning of Google Cloud. */
		availableOnRestrictedVip: FormControl<boolean | null | undefined>,

		/** True if the service is supported with some limitations. Check [documentation](https://cloud.google.com/vpc-service-controls/docs/supported-products) for details. */
		knownLimitations: FormControl<boolean | null | undefined>,

		/** The service name or address of the supported service, such as `service.googleapis.com`. */
		name: FormControl<string | null | undefined>,

		/** The support stage of the service. */
		supportStage: FormControl<SupportedServiceSupportStage | null | undefined>,

		/** The name of the supported product, such as 'Cloud Product API'. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSupportedServiceFormGroup() {
		return new FormGroup<SupportedServiceFormProperties>({
			availableOnRestrictedVip: new FormControl<boolean | null | undefined>(undefined),
			knownLimitations: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			supportStage: new FormControl<SupportedServiceSupportStage | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SupportedServiceSupportStage { LAUNCH_STAGE_UNSPECIFIED = 0, UNIMPLEMENTED = 1, PRELAUNCH = 2, EARLY_ACCESS = 3, ALPHA = 4, BETA = 5, GA = 6, DEPRECATED = 7 }


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


	/** A request to replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically. */
	export interface ReplaceAccessLevelsRequest {

		/** Required. The desired Access Levels that should replace all existing Access Levels in the Access Policy. */
		accessLevels?: Array<AccessLevel>;

		/** Optional. The etag for the version of the Access Policy that this replace operation is to be performed on. If, at the time of replace, the etag for the Access Policy stored in Access Context Manager is different from the specified etag, then the replace operation will not be performed and the call will fail. This field is not required. If etag is not provided, the operation will be performed as if a valid etag is provided. */
		etag?: string | null;
	}

	/** A request to replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically. */
	export interface ReplaceAccessLevelsRequestFormProperties {

		/** Optional. The etag for the version of the Access Policy that this replace operation is to be performed on. If, at the time of replace, the etag for the Access Policy stored in Access Context Manager is different from the specified etag, then the replace operation will not be performed and the call will fail. This field is not required. If etag is not provided, the operation will be performed as if a valid etag is provided. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateReplaceAccessLevelsRequestFormGroup() {
		return new FormGroup<ReplaceAccessLevelsRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response to ReplaceAccessLevelsRequest. This will be put inside of Operation.response field. */
	export interface ReplaceAccessLevelsResponse {

		/** List of the Access Level instances. */
		accessLevels?: Array<AccessLevel>;
	}

	/** A response to ReplaceAccessLevelsRequest. This will be put inside of Operation.response field. */
	export interface ReplaceAccessLevelsResponseFormProperties {
	}
	export function CreateReplaceAccessLevelsResponseFormGroup() {
		return new FormGroup<ReplaceAccessLevelsResponseFormProperties>({
		});

	}


	/** A request to replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically. */
	export interface ReplaceServicePerimetersRequest {

		/** Optional. The etag for the version of the Access Policy that this replace operation is to be performed on. If, at the time of replace, the etag for the Access Policy stored in Access Context Manager is different from the specified etag, then the replace operation will not be performed and the call will fail. This field is not required. If etag is not provided, the operation will be performed as if a valid etag is provided. */
		etag?: string | null;

		/** Required. The desired Service Perimeters that should replace all existing Service Perimeters in the Access Policy. */
		servicePerimeters?: Array<ServicePerimeter>;
	}

	/** A request to replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically. */
	export interface ReplaceServicePerimetersRequestFormProperties {

		/** Optional. The etag for the version of the Access Policy that this replace operation is to be performed on. If, at the time of replace, the etag for the Access Policy stored in Access Context Manager is different from the specified etag, then the replace operation will not be performed and the call will fail. This field is not required. If etag is not provided, the operation will be performed as if a valid etag is provided. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateReplaceServicePerimetersRequestFormGroup() {
		return new FormGroup<ReplaceServicePerimetersRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response to ReplaceServicePerimetersRequest. This will be put inside of Operation.response field. */
	export interface ReplaceServicePerimetersResponse {

		/** List of the Service Perimeter instances. */
		servicePerimeters?: Array<ServicePerimeter>;
	}

	/** A response to ReplaceServicePerimetersRequest. This will be put inside of Operation.response field. */
	export interface ReplaceServicePerimetersResponseFormProperties {
	}
	export function CreateReplaceServicePerimetersResponseFormGroup() {
		return new FormGroup<ReplaceServicePerimetersResponseFormProperties>({
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
		 * Lists all access policies in an organization.
		 * Get v1/accessPolicies
		 * @param {number} pageSize Number of AccessPolicy instances to include in the list. Default 100.
		 * @param {string} pageToken Next page token for the next batch of AccessPolicy instances. Defaults to the first page of results.
		 * @param {string} parent Required. Resource name for the container to list AccessPolicy instances from. Format: `organizations/{org_id}`
		 * @return {ListAccessPoliciesResponse} Successful response
		 */
		Accesscontextmanager_accessPolicies_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListAccessPoliciesResponse> {
			return this.http.get<ListAccessPoliciesResponse>(this.baseUri + 'v1/accessPolicies?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
		 * Post v1/accessPolicies
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_create(requestBody: AccessPolicy): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/accessPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all VPC-SC supported services.
		 * Get v1/services
		 * @param {number} pageSize This flag specifies the maximum number of services to return per page. Default is 100.
		 * @param {string} pageToken Token to start on a later page. Default is the first page.
		 * @return {ListSupportedServicesResponse} Successful response
		 */
		Accesscontextmanager_services_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSupportedServicesResponse> {
			return this.http.get<ListSupportedServicesResponse>(this.baseUri + 'v1/services?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns a VPC-SC supported service based on the service name.
		 * Get v1/services/{name}
		 * @param {string} name The name of the service to get information about. The names must be in the same format as used in defining a service perimeter, for example, `storage.googleapis.com`.
		 * @return {SupportedService} Successful response
		 */
		Accesscontextmanager_services_get(name: string): Observable<SupportedService> {
			return this.http.get<SupportedService>(this.baseUri + 'v1/services/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
		 * Delete v1/{name}
		 * @param {string} name Required. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_organizations_gcpUserAccessBindings_delete(name: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the GcpUserAccessBinding with the given name.
		 * Get v1/{name}
		 * @param {string} name Required. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"
		 * @param {Accesscontextmanager_organizations_gcpUserAccessBindings_getFilter} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GcpUserAccessBinding} Successful response
		 */
		Accesscontextmanager_organizations_gcpUserAccessBindings_get(name: string, filter: Accesscontextmanager_organizations_gcpUserAccessBindings_getFilter | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GcpUserAccessBinding> {
			return this.http.get<GcpUserAccessBinding>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + filter + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.
		 * Patch v1/{name}
		 * @param {string} name Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved characters (as defined by [RFC 3986 Section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)). Should not be specified by the client during creation. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"
		 * @param {string} updateMask Required. Only the fields specified in this mask are updated. Because name and group_key cannot be changed, update_mask is required and may only contain the following fields: `access_levels`, `dry_run_access_levels`. update_mask { paths: "access_levels" }
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_organizations_gcpUserAccessBindings_patch(name: string, updateMask: string | null | undefined, requestBody: GcpUserAccessBinding): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Accesscontextmanager_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all access levels for an access policy.
		 * Get v1/{parent}/accessLevels
		 * @param {string} parent Required. Resource name for the access policy to list Access Levels from. Format: `accessPolicies/{policy_id}`
		 * @param {Accesscontextmanager_organizations_gcpUserAccessBindings_getFilter} accessLevelFormat Whether to return `BasicLevels` in the Cloud Common Expression language, as `CustomLevels`, rather than as `BasicLevels`. Defaults to returning `AccessLevels` in the format they were defined.
		 * @param {number} pageSize Number of Access Levels to include in the list. Default 100.
		 * @param {string} pageToken Next page token for the next batch of Access Level instances. Defaults to the first page of results.
		 * @return {ListAccessLevelsResponse} Successful response
		 */
		Accesscontextmanager_accessPolicies_accessLevels_list(parent: string, accessLevelFormat: Accesscontextmanager_organizations_gcpUserAccessBindings_getFilter | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAccessLevelsResponse> {
			return this.http.get<ListAccessLevelsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessLevels&accessLevelFormat=' + accessLevelFormat + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
		 * Post v1/{parent}/accessLevels
		 * @param {string} parent Required. Resource name for the access policy which owns this Access Level. Format: `accessPolicies/{policy_id}`
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_accessLevels_create(parent: string, requestBody: AccessLevel): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessLevels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
		 * Post v1/{parent}/accessLevels:replaceAll
		 * @param {string} parent Required. Resource name for the access policy which owns these Access Levels. Format: `accessPolicies/{policy_id}`
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_accessLevels_replaceAll(parent: string, requestBody: ReplaceAccessLevelsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessLevels:replaceAll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all authorized orgs descs for an access policy.
		 * Get v1/{parent}/authorizedOrgsDescs
		 * @param {string} parent Required. Resource name for the access policy to list Authorized Orgs Desc from. Format: `accessPolicies/{policy_id}`
		 * @param {number} pageSize Number of Authorized Orgs Descs to include in the list. Default 100.
		 * @param {string} pageToken Next page token for the next batch of Authorized Orgs Desc instances. Defaults to the first page of results.
		 * @return {ListAuthorizedOrgsDescsResponse} Successful response
		 */
		Accesscontextmanager_accessPolicies_authorizedOrgsDescs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAuthorizedOrgsDescsResponse> {
			return this.http.get<ListAuthorizedOrgsDescsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/authorizedOrgsDescs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.
		 * Post v1/{parent}/authorizedOrgsDescs
		 * @param {string} parent Required. Resource name for the access policy which owns this Authorized Orgs Desc. Format: `accessPolicies/{policy_id}`
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_authorizedOrgsDescs_create(parent: string, requestBody: AuthorizedOrgsDesc): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/authorizedOrgsDescs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GcpUserAccessBindings for a Google Cloud organization.
		 * Get v1/{parent}/gcpUserAccessBindings
		 * @param {string} parent Required. Example: "organizations/256"
		 * @param {number} pageSize Optional. Maximum number of items to return. The server may return fewer items. If left blank, the server may return any number of items.
		 * @param {string} pageToken Optional. If left blank, returns the first page. To enumerate all items, use the next_page_token from your previous list operation.
		 * @return {ListGcpUserAccessBindingsResponse} Successful response
		 */
		Accesscontextmanager_organizations_gcpUserAccessBindings_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGcpUserAccessBindingsResponse> {
			return this.http.get<ListGcpUserAccessBindingsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gcpUserAccessBindings&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
		 * Post v1/{parent}/gcpUserAccessBindings
		 * @param {string} parent Required. Example: "organizations/256"
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_organizations_gcpUserAccessBindings_create(parent: string, requestBody: GcpUserAccessBinding): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gcpUserAccessBindings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all service perimeters for an access policy.
		 * Get v1/{parent}/servicePerimeters
		 * @param {string} parent Required. Resource name for the access policy to list Service Perimeters from. Format: `accessPolicies/{policy_id}`
		 * @param {number} pageSize Number of Service Perimeters to include in the list. Default 100.
		 * @param {string} pageToken Next page token for the next batch of Service Perimeter instances. Defaults to the first page of results.
		 * @return {ListServicePerimetersResponse} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServicePerimetersResponse> {
			return this.http.get<ListServicePerimetersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servicePerimeters&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
		 * Post v1/{parent}/servicePerimeters
		 * @param {string} parent Required. Resource name for the access policy which owns this Service Perimeter. Format: `accessPolicies/{policy_id}`
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_create(parent: string, requestBody: ServicePerimeter): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servicePerimeters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
		 * Post v1/{parent}/servicePerimeters:commit
		 * @param {string} parent Required. Resource name for the parent Access Policy which owns all Service Perimeters in scope for the commit operation. Format: `accessPolicies/{policy_id}`
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_commit(parent: string, requestBody: CommitServicePerimetersRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servicePerimeters:commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
		 * Post v1/{parent}/servicePerimeters:replaceAll
		 * @param {string} parent Required. Resource name for the access policy which owns these Service Perimeters. Format: `accessPolicies/{policy_id}`
		 * @return {Operation} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_replaceAll(parent: string, requestBody: ReplaceServicePerimetersRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servicePerimeters:replaceAll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the IAM policy for the specified Access Context Manager access policy.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Accesscontextmanager_accessPolicies_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Accesscontextmanager_accessPolicies_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Accesscontextmanager_organizations_gcpUserAccessBindings_getFilter { LEVEL_FORMAT_UNSPECIFIED = 0, AS_DEFINED = 1, CEL = 2 }

}

