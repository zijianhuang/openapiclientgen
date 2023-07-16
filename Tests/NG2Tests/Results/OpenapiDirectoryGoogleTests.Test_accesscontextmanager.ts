import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * An `AccessLevel` is a label that can be applied to requests to Google Cloud
	 * services, along with a list of requirements necessary for the label to be
	 * applied.
	 */
	export interface AccessLevel {

		/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
		basic?: BasicLevel;

		/**
		 * `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language
		 * to represent the necessary conditions for the level to apply to a request.
		 * See CEL spec at: https://github.com/google/cel-spec
		 */
		custom?: CustomLevel;

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description?: string;

		/**
		 * Required. Resource name for the Access Level. The `short_name` component
		 * must begin with a letter and only include alphanumeric and '_'. Format:
		 * `accessPolicies/{policy_id}/accessLevels/{short_name}`. The maximum length
		 * of the `short_name` component is 50 characters.
		 */
		name?: string;

		/** Human readable title. Must be unique within the Policy. */
		title?: string;
	}


	/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
	export interface BasicLevel {

		/**
		 * How the `conditions` list should be combined to determine if a request is
		 * granted this `AccessLevel`. If AND is used, each `Condition` in
		 * `conditions` must be satisfied for the `AccessLevel` to be applied. If OR
		 * is used, at least one `Condition` in `conditions` must be satisfied for the
		 * `AccessLevel` to be applied. Default behavior is AND.
		 */
		combiningFunction?: BasicLevelCombiningFunction;

		/** Required. A list of requirements for the `AccessLevel` to be granted. */
		conditions?: Array<Condition>;
	}

	export enum BasicLevelCombiningFunction { AND = 0, OR = 1 }


	/**
	 * A condition necessary for an `AccessLevel` to be granted. The Condition is an
	 * AND over its fields. So a Condition is true if: 1) the request IP is from one
	 * of the listed subnetworks AND 2) the originating device complies with the
	 * listed device policy AND 3) all listed access levels are granted AND 4) the
	 * request was sent at a time allowed by the DateTimeRestriction.
	 */
	export interface Condition {

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
		devicePolicy?: DevicePolicy;

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
		negate?: boolean;

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
	export interface DevicePolicy {

		/**
		 * Allowed device management levels, an empty list allows all management
		 * levels.
		 */
		allowedDeviceManagementLevels?: Array<string>;

		/** Allowed encryptions statuses, an empty list allows all statuses. */
		allowedEncryptionStatuses?: Array<string>;

		/** Allowed OS versions, an empty list allows all types and all versions. */
		osConstraints?: Array<OsConstraint>;

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval?: boolean;

		/** Whether the device needs to be corp owned. */
		requireCorpOwned?: boolean;

		/**
		 * Whether or not screenlock is required for the DevicePolicy to be true.
		 * Defaults to `false`.
		 */
		requireScreenlock?: boolean;
	}


	/** A restriction on the OS type and version of devices making requests. */
	export interface OsConstraint {

		/**
		 * The minimum allowed OS version. If not set, any version of this OS
		 * satisfies the constraint. Format: `"major.minor.patch"`.
		 * Examples: `"10.5.301"`, `"9.2.1"`.
		 */
		minimumVersion?: string;

		/** Required. The allowed OS type. */
		osType?: OsConstraintOsType;

		/**
		 * Only allows requests from devices with a verified Chrome OS.
		 * Verifications includes requirements that the device is enterprise-managed,
		 * conformant to domain policies, and the caller has permission to call
		 * the API targeted by the request.
		 */
		requireVerifiedChromeOs?: boolean;
	}

	export enum OsConstraintOsType { OS_UNSPECIFIED = 0, DESKTOP_MAC = 1, DESKTOP_WINDOWS = 2, DESKTOP_LINUX = 3, DESKTOP_CHROME_OS = 4, ANDROID = 5, IOS = 6 }


	/**
	 * `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language
	 * to represent the necessary conditions for the level to apply to a request.
	 * See CEL spec at: https://github.com/google/cel-spec
	 */
	export interface CustomLevel {

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
	 * `AccessPolicy` is a container for `AccessLevels` (which define the necessary
	 * attributes to use Google Cloud services) and `ServicePerimeters` (which
	 * define regions of services able to freely pass data within a perimeter). An
	 * access policy is globally visible within an organization, and the
	 * restrictions it specifies apply to all projects within an organization.
	 */
	export interface AccessPolicy {

		/**
		 * Output only. An opaque identifier for the current version of the
		 * `AccessPolicy`. This will always be a strongly validated etag, meaning that
		 * two Access Polices will be identical if and only if their etags are
		 * identical. Clients should not expect this to be in any specific format.
		 */
		etag?: string;

		/**
		 * Output only. Resource name of the `AccessPolicy`. Format:
		 * `accessPolicies/{policy_id}`
		 */
		name?: string;

		/**
		 * Required. The parent of this `AccessPolicy` in the Cloud Resource
		 * Hierarchy. Currently immutable once created. Format:
		 * `organizations/{organization_id}`
		 */
		parent?: string;

		/** Required. Human readable title. Does not affect behavior. */
		title?: string;
	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}


	/**
	 * A request to commit dry-run specs in all Service Perimeters belonging to
	 * an Access Policy.
	 */
	export interface CommitServicePerimetersRequest {

		/**
		 * Optional. The etag for the version of the Access Policy that this
		 * commit operation is to be performed on. If, at the time of commit, the
		 * etag for the Access Policy stored in Access Context Manager is different
		 * from the specified etag, then the commit operation will not be performed
		 * and the call will fail. This field is not required. If etag is not
		 * provided, the operation will be performed as if a valid etag is provided.
		 */
		etag?: string;
	}


	/**
	 * A response to CommitServicePerimetersRequest. This will be put inside of
	 * Operation.response field.
	 */
	export interface CommitServicePerimetersResponse {

		/**
		 * List of all the Service Perimeter instances in
		 * the Access Policy.
		 */
		servicePerimeters?: Array<ServicePerimeter>;
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
	export interface ServicePerimeter {

		/**
		 * Description of the `ServicePerimeter` and its use. Does not affect
		 * behavior.
		 */
		description?: string;

		/**
		 * Required. Resource name for the ServicePerimeter.  The `short_name`
		 * component must begin with a letter and only include alphanumeric and '_'.
		 * Format: `accessPolicies/{policy_id}/servicePerimeters/{short_name}`
		 */
		name?: string;

		/**
		 * Perimeter type indicator. A single project is
		 * allowed to be a member of single regular perimeter, but multiple service
		 * perimeter bridges. A project cannot be a included in a perimeter bridge
		 * without being included in regular perimeter. For perimeter bridges,
		 * the restricted service list as well as access level lists must be
		 * empty.
		 */
		perimeterType?: ServicePerimeterPerimeterType;

		/**
		 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that
		 * describe specific Service Perimeter configuration.
		 */
		spec?: ServicePerimeterConfig;

		/**
		 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that
		 * describe specific Service Perimeter configuration.
		 */
		status?: ServicePerimeterConfig;

		/** Human readable title. Must be unique within the Policy. */
		title?: string;

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
		useExplicitDryRunSpec?: boolean;
	}

	export enum ServicePerimeterPerimeterType { PERIMETER_TYPE_REGULAR = 0, PERIMETER_TYPE_BRIDGE = 1 }


	/**
	 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that
	 * describe specific Service Perimeter configuration.
	 */
	export interface ServicePerimeterConfig {

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
		vpcAccessibleServices?: VpcAccessibleServices;
	}


	/**
	 * Specifies how APIs are allowed to communicate within the Service
	 * Perimeter.
	 */
	export interface VpcAccessibleServices {

		/**
		 * The list of APIs usable within the Service Perimeter. Must be empty
		 * unless 'enable_restriction' is True.
		 */
		allowedServices?: Array<string>;

		/**
		 * Whether to restrict API calls within the Service Perimeter to the list of
		 * APIs specified in 'allowed_services'.
		 */
		enableRestriction?: boolean;
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


	/** A response to `ListAccessLevelsRequest`. */
	export interface ListAccessLevelsResponse {

		/** List of the Access Level instances. */
		accessLevels?: Array<AccessLevel>;

		/**
		 * The pagination token to retrieve the next page of results. If the value is
		 * empty, no further results remain.
		 */
		nextPageToken?: string;
	}


	/** A response to `ListAccessPoliciesRequest`. */
	export interface ListAccessPoliciesResponse {

		/** List of the AccessPolicy instances. */
		accessPolicies?: Array<AccessPolicy>;

		/**
		 * The pagination token to retrieve the next page of results. If the value is
		 * empty, no further results remain.
		 */
		nextPageToken?: string;
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


	/** A response to `ListServicePerimetersRequest`. */
	export interface ListServicePerimetersResponse {

		/**
		 * The pagination token to retrieve the next page of results. If the value is
		 * empty, no further results remain.
		 */
		nextPageToken?: string;

		/** List of the Service Perimeter instances. */
		servicePerimeters?: Array<ServicePerimeter>;
	}


	/**
	 * A request to replace all existing Access Levels in an Access Policy with
	 * the Access Levels provided. This is done atomically.
	 */
	export interface ReplaceAccessLevelsRequest {

		/**
		 * Required. The desired Access Levels that should
		 * replace all existing Access Levels in the
		 * Access Policy.
		 */
		accessLevels?: Array<AccessLevel>;

		/**
		 * Optional. The etag for the version of the Access Policy that this
		 * replace operation is to be performed on. If, at the time of replace, the
		 * etag for the Access Policy stored in Access Context Manager is different
		 * from the specified etag, then the replace operation will not be performed
		 * and the call will fail. This field is not required. If etag is not
		 * provided, the operation will be performed as if a valid etag is provided.
		 */
		etag?: string;
	}


	/**
	 * A response to ReplaceAccessLevelsRequest. This will be put inside of
	 * Operation.response field.
	 */
	export interface ReplaceAccessLevelsResponse {

		/** List of the Access Level instances. */
		accessLevels?: Array<AccessLevel>;
	}


	/**
	 * A request to replace all existing Service Perimeters in an Access Policy
	 * with the Service Perimeters provided. This is done atomically.
	 */
	export interface ReplaceServicePerimetersRequest {

		/**
		 * Optional. The etag for the version of the Access Policy that this
		 * replace operation is to be performed on. If, at the time of replace, the
		 * etag for the Access Policy stored in Access Context Manager is different
		 * from the specified etag, then the replace operation will not be performed
		 * and the call will fail. This field is not required. If etag is not
		 * provided, the operation will be performed as if a valid etag is provided.
		 */
		etag?: string;

		/**
		 * Required. The desired Service Perimeters that should
		 * replace all existing Service Perimeters in the
		 * Access Policy.
		 */
		servicePerimeters?: Array<ServicePerimeter>;
	}


	/**
	 * A response to ReplaceServicePerimetersRequest. This will be put inside of
	 * Operation.response field.
	 */
	export interface ReplaceServicePerimetersResponse {

		/** List of the Service Perimeter instances. */
		servicePerimeters?: Array<ServicePerimeter>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all AccessPolicies under a
		 * container.
		 * Get v1/accessPolicies
		 * @param {number} pageSize Number of AccessPolicy instances to include in the list. Default 100.
		 * @param {string} pageToken Next page token for the next batch of AccessPolicy instances. Defaults to
		 * the first page of results.
		 * @param {string} parent Required. Resource name for the container to list AccessPolicy instances
		 * from.
		 * Format:
		 * `organizations/{org_id}`
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_list(pageSize: number, pageToken: string, parent: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/accessPolicies?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an `AccessPolicy`. Fails if this organization already has a
		 * `AccessPolicy`. The longrunning Operation will have a successful status
		 * once the `AccessPolicy` has propagated to long-lasting storage.
		 * Syntactic and basic semantic errors will be returned in `metadata` as a
		 * BadRequest proto.
		 * Post v1/accessPolicies
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_create(requestBody: AccessPolicy): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/accessPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Service Perimeter by resource
		 * name. The longrunning operation from this RPC will have a successful status
		 * once the Service Perimeter has been
		 * removed from long-lasting storage.
		 * Delete v1/{name}
		 * @param {string} name Required. Resource name for the Service Perimeter.
		 * Format:
		 * `accessPolicies/{policy_id}/servicePerimeters/{service_perimeter_id}`
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Service Perimeter by resource
		 * name.
		 * Get v1/{name}
		 * @param {string} name Required. Resource name for the Service Perimeter.
		 * Format:
		 * `accessPolicies/{policy_id}/servicePerimeters/{service_perimeters_id}`
		 * @param {Accesscontextmanager_accessPolicies_servicePerimeters_getAccessLevelFormat} accessLevelFormat Whether to return `BasicLevels` in the Cloud Common Expression
		 * Language rather than as `BasicLevels`. Defaults to AS_DEFINED, where
		 * Access Levels
		 * are returned as `BasicLevels` or `CustomLevels` based on how they were
		 * created. If set to CEL, all Access Levels are returned as
		 * `CustomLevels`. In the CEL case, `BasicLevels` are translated to equivalent
		 * `CustomLevels`.
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_get(name: string, accessLevelFormat: Accesscontextmanager_accessPolicies_servicePerimeters_getAccessLevelFormat): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&accessLevelFormat=' + accessLevelFormat, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a Service Perimeter. The
		 * longrunning operation from this RPC will have a successful status once the
		 * changes to the Service Perimeter have
		 * propagated to long-lasting storage. Service Perimeter containing
		 * errors will result in an error response for the first error encountered.
		 * Patch v1/{name}
		 * @param {string} name Required. Resource name for the ServicePerimeter.  The `short_name`
		 * component must begin with a letter and only include alphanumeric and '_'.
		 * Format: `accessPolicies/{policy_id}/servicePerimeters/{short_name}`
		 * @param {string} updateMask Required. Mask to control which fields get updated. Must be non-empty.
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_patch(name: string, updateMask: string, requestBody: ServicePerimeter): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		Accesscontextmanager_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all Access Levels for an access
		 * policy.
		 * Get v1/{parent}/accessLevels
		 * @param {string} parent Required. Resource name for the access policy to list Access Levels from.
		 * Format:
		 * `accessPolicies/{policy_id}`
		 * @param {Accesscontextmanager_accessPolicies_servicePerimeters_getAccessLevelFormat} accessLevelFormat Whether to return `BasicLevels` in the Cloud Common Expression language, as
		 * `CustomLevels`, rather than as `BasicLevels`. Defaults to returning
		 * `AccessLevels` in the format they were defined.
		 * @param {number} pageSize Number of Access Levels to include in
		 * the list. Default 100.
		 * @param {string} pageToken Next page token for the next batch of Access Level instances.
		 * Defaults to the first page of results.
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_accessLevels_list(parent: string, accessLevelFormat: Accesscontextmanager_accessPolicies_servicePerimeters_getAccessLevelFormat, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessLevels&accessLevelFormat=' + accessLevelFormat + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an Access Level. The longrunning
		 * operation from this RPC will have a successful status once the Access
		 * Level has
		 * propagated to long-lasting storage. Access Levels containing
		 * errors will result in an error response for the first error encountered.
		 * Post v1/{parent}/accessLevels
		 * @param {string} parent Required. Resource name for the access policy which owns this Access
		 * Level.
		 * Format: `accessPolicies/{policy_id}`
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_accessLevels_create(parent: string, requestBody: AccessLevel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessLevels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace all existing Access Levels in an Access
		 * Policy with
		 * the Access Levels provided. This
		 * is done atomically. The longrunning operation from this RPC will have a
		 * successful status once all replacements have propagated to long-lasting
		 * storage. Replacements containing errors will result in an error response
		 * for the first error encountered.  Replacement will be cancelled on error,
		 * existing Access Levels will not be
		 * affected. Operation.response field will contain
		 * ReplaceAccessLevelsResponse. Removing Access Levels contained in existing
		 * Service Perimeters will result in
		 * error.
		 * Post v1/{parent}/accessLevels:replaceAll
		 * @param {string} parent Required. Resource name for the access policy which owns these
		 * Access Levels.
		 * Format: `accessPolicies/{policy_id}`
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_accessLevels_replaceAll(parent: string, requestBody: ReplaceAccessLevelsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessLevels:replaceAll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all Service Perimeters for an
		 * access policy.
		 * Get v1/{parent}/servicePerimeters
		 * @param {string} parent Required. Resource name for the access policy to list Service Perimeters from.
		 * Format:
		 * `accessPolicies/{policy_id}`
		 * @param {number} pageSize Number of Service Perimeters to include
		 * in the list. Default 100.
		 * @param {string} pageToken Next page token for the next batch of Service Perimeter instances.
		 * Defaults to the first page of results.
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servicePerimeters&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a Service Perimeter. The
		 * longrunning operation from this RPC will have a successful status once the
		 * Service Perimeter has
		 * propagated to long-lasting storage. Service Perimeters containing
		 * errors will result in an error response for the first error encountered.
		 * Post v1/{parent}/servicePerimeters
		 * @param {string} parent Required. Resource name for the access policy which owns this Service
		 * Perimeter.
		 * Format: `accessPolicies/{policy_id}`
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_create(parent: string, requestBody: ServicePerimeter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servicePerimeters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Commit the dry-run spec for all the Service Perimeters in an
		 * Access Policy.
		 * A commit operation on a Service Perimeter involves copying its `spec` field
		 * to that Service Perimeter's `status` field. Only Service Perimeters with
		 * `use_explicit_dry_run_spec` field set to true are affected by a commit
		 * operation. The longrunning operation from this RPC will have a successful
		 * status once the dry-run specs for all the Service Perimeters have been
		 * committed. If a commit fails, it will cause the longrunning operation to
		 * return an error response and the entire commit operation will be cancelled.
		 * When successful, Operation.response field will contain
		 * CommitServicePerimetersResponse. The `dry_run` and the `spec` fields will
		 * be cleared after a successful commit operation.
		 * Post v1/{parent}/servicePerimeters:commit
		 * @param {string} parent Required. Resource name for the parent Access Policy which owns all
		 * Service Perimeters in scope for
		 * the commit operation.
		 * Format: `accessPolicies/{policy_id}`
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_commit(parent: string, requestBody: CommitServicePerimetersRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servicePerimeters:commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace all existing Service Perimeters in an
		 * Access Policy
		 * with the Service Perimeters provided.
		 * This is done atomically. The longrunning operation from this
		 * RPC will have a successful status once all replacements have propagated to
		 * long-lasting storage. Replacements containing errors will result in an
		 * error response for the first error encountered. Replacement will be
		 * cancelled on error, existing Service Perimeters will not be
		 * affected. Operation.response field will contain
		 * ReplaceServicePerimetersResponse.
		 * Post v1/{parent}/servicePerimeters:replaceAll
		 * @param {string} parent Required. Resource name for the access policy which owns these
		 * Service Perimeters.
		 * Format: `accessPolicies/{policy_id}`
		 * @return {void} Successful response
		 */
		Accesscontextmanager_accessPolicies_servicePerimeters_replaceAll(parent: string, requestBody: ReplaceServicePerimetersRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servicePerimeters:replaceAll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Accesscontextmanager_accessPolicies_servicePerimeters_getAccessLevelFormat { LEVEL_FORMAT_UNSPECIFIED = 0, AS_DEFINED = 1, CEL = 2 }

}

