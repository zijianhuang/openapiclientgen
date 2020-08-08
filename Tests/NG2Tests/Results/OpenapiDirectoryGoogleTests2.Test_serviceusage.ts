import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Api is a light-weight descriptor for an API Interface.
	 * Interfaces are also described as "protocol buffer services" in some contexts,
	 * such as by the "service" keyword in a .proto file, but they are different
	 * from API Services, which represent a concrete implementation of an interface
	 * as opposed to simply a description of methods and bindings. They are also
	 * sometimes simply referred to as "APIs" in other contexts, such as the name of
	 * this message itself. See https://cloud.google.com/apis/design/glossary for
	 * detailed terminology.
	 */
	export interface Api {

		/** The methods of this interface, in unspecified order. */
		methods?: Array<Method>;

		/** Included interfaces. See Mixin. */
		mixins?: Array<Mixin>;

		/**
		 * The fully qualified name of this interface, including package name
		 * followed by the interface's simple name.
		 */
		name?: string;

		/** Any metadata attached to the interface. */
		options?: Array<Option>;

		/**
		 * `SourceContext` represents information about the source of a
		 * protobuf element, like the file in which it is defined.
		 */
		sourceContext?: SourceContext;

		/** The source syntax of the service. */
		syntax?: MethodSyntax;

		/**
		 * A version string for this interface. If specified, must have the form
		 * `major-version.minor-version`, as in `1.10`. If the minor version is
		 * omitted, it defaults to zero. If the entire version field is empty, the
		 * major version is derived from the package name, as outlined below. If the
		 * field is not empty, the version in the package name will be verified to be
		 * consistent with what is provided here.
		 * The versioning schema uses [semantic
		 * versioning](http://semver.org) where the major version number
		 * indicates a breaking change and the minor version an additive,
		 * non-breaking change. Both version numbers are signals to users
		 * what to expect from different versions, and should be carefully
		 * chosen based on the product plan.
		 * The major version is also reflected in the package name of the
		 * interface, which must end in `v<major-version>`, as in
		 * `google.feature.v1`. For major versions 0 and 1, the suffix can
		 * be omitted. Zero major versions must only be used for
		 * experimental, non-GA interfaces.
		 */
		version?: string;
	}


	/** Method represents a method of an API interface. */
	export interface Method {

		/** The simple name of this method. */
		name?: string;

		/** Any metadata attached to the method. */
		options?: Array<Option>;

		/** If true, the request is streamed. */
		requestStreaming?: boolean;

		/** A URL of the input message type. */
		requestTypeUrl?: string;

		/** If true, the response is streamed. */
		responseStreaming?: boolean;

		/** The URL of the output message type. */
		responseTypeUrl?: string;

		/** The source syntax of this method. */
		syntax?: MethodSyntax;
	}


	/**
	 * A protocol buffer option, which can be attached to a message, field,
	 * enumeration, etc.
	 */
	export interface Option {

		/**
		 * The option's name. For protobuf built-in options (options defined in
		 * descriptor.proto), this is the short name. For example, `"map_entry"`.
		 * For custom options, it should be the fully-qualified name. For example,
		 * `"google.api.http"`.
		 */
		name?: string;

		/**
		 * The option's value packed in an Any message. If the value is a primitive,
		 * the corresponding wrapper type defined in google/protobuf/wrappers.proto
		 * should be used. If the value is an enum, it should be stored as an int32
		 * value using the google.protobuf.Int32Value type.
		 */
		value?: {[id: string]: any };
	}

	export enum MethodSyntax { SYNTAX_PROTO2 = 0, SYNTAX_PROTO3 = 1 }


	/**
	 * Declares an API Interface to be included in this interface. The including
	 * interface must redeclare all the methods from the included interface, but
	 * documentation and options are inherited as follows:
	 * - If after comment and whitespace stripping, the documentation
	 *   string of the redeclared method is empty, it will be inherited
	 *   from the original method.
	 * - Each annotation belonging to the service config (http,
	 *   visibility) which is not set in the redeclared method will be
	 *   inherited.
	 * - If an http annotation is inherited, the path pattern will be
	 *   modified as follows. Any version prefix will be replaced by the
	 *   version of the including interface plus the root path if
	 *   specified.
	 * Example of a simple mixin:
	 *     package google.acl.v1;
	 *     service AccessControl {
	 *       // Get the underlying ACL object.
	 *       rpc GetAcl(GetAclRequest) returns (Acl) {
	 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
	 *       }
	 *     }
	 *     package google.storage.v2;
	 *     service Storage {
	 *       //       rpc GetAcl(GetAclRequest) returns (Acl);
	 *       // Get a data record.
	 *       rpc GetData(GetDataRequest) returns (Data) {
	 *         option (google.api.http).get = "/v2/{resource=**}";
	 *       }
	 *     }
	 * Example of a mixin configuration:
	 *     apis:
	 *     - name: google.storage.v2.Storage
	 *       mixins:
	 *       - name: google.acl.v1.AccessControl
	 * The mixin construct implies that all methods in `AccessControl` are
	 * also declared with same name and request/response types in
	 * `Storage`. A documentation generator or annotation processor will
	 * see the effective `Storage.GetAcl` method after inherting
	 * documentation and annotations as follows:
	 *     service Storage {
	 *       // Get the underlying ACL object.
	 *       rpc GetAcl(GetAclRequest) returns (Acl) {
	 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
	 *       }
	 *       ...
	 *     }
	 * Note how the version in the path pattern changed from `v1` to `v2`.
	 * If the `root` field in the mixin is specified, it should be a
	 * relative path under which inherited HTTP paths are placed. Example:
	 *     apis:
	 *     - name: google.storage.v2.Storage
	 *       mixins:
	 *       - name: google.acl.v1.AccessControl
	 *         root: acls
	 * This implies the following inherited HTTP annotation:
	 *     service Storage {
	 *       // Get the underlying ACL object.
	 *       rpc GetAcl(GetAclRequest) returns (Acl) {
	 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
	 *       }
	 *       ...
	 *     }
	 */
	export interface Mixin {

		/** The fully qualified name of the interface which is included. */
		name?: string;

		/**
		 * If non-empty specifies a path under which inherited HTTP paths
		 * are rooted.
		 */
		root?: string;
	}


	/**
	 * `SourceContext` represents information about the source of a
	 * protobuf element, like the file in which it is defined.
	 */
	export interface SourceContext {

		/**
		 * The path-qualified name of the .proto file that contained the associated
		 * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
		 */
		fileName?: string;
	}


	/**
	 * Configuration for an authentication provider, including support for
	 * [JSON Web Token
	 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
	 */
	export interface AuthProvider {

		/**
		 * The list of JWT
		 * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
		 * that are allowed to access. A JWT containing any of these audiences will
		 * be accepted. When this setting is absent, JWTs with audiences:
		 * - "https://[service.name]/[google.protobuf.Api.name]"
		 * - "https://[service.name]/"
		 * will be accepted.
		 * For example, if no audiences are in the setting, LibraryService API will
		 * accept JWTs with the following audiences:
		 * -
		 * https://library-example.googleapis.com/google.example.library.v1.LibraryService
		 * - https://library-example.googleapis.com/
		 * Example:
		 * audiences: bookstore_android.apps.googleusercontent.com,
		 * bookstore_web.apps.googleusercontent.com
		 */
		audiences?: string;

		/**
		 * Redirect URL if JWT token is required but not present or is expired.
		 * Implement authorizationUrl of securityDefinitions in OpenAPI spec.
		 */
		authorizationUrl?: string;

		/**
		 * The unique identifier of the auth provider. It will be referred to by
		 * `AuthRequirement.provider_id`.
		 * Example: "bookstore_auth".
		 */
		id?: string;

		/**
		 * Identifies the principal that issued the JWT. See
		 * https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
		 * Usually a URL or an email address.
		 * Example: https://securetoken.google.com
		 * Example: 1234567-compute@developer.gserviceaccount.com
		 */
		issuer?: string;

		/**
		 * URL of the provider's public key set to validate signature of the JWT. See
		 * [OpenID
		 * Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
		 * Optional if the key set document:
		 * - can be retrieved from
		 * [OpenID
		 * Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html of
		 * the issuer.
		 * - can be inferred from the email domain of the issuer (e.g. a Google
		 * service account).
		 * Example: https://www.googleapis.com/oauth2/v1/certs
		 */
		jwksUri?: string;

		/**
		 * Defines the locations to extract the JWT.
		 * JWT locations can be either from HTTP headers or URL query parameters.
		 * The rule is that the first match wins. The checking order is: checking
		 * all headers first, then URL query parameters.
		 * If not specified,  default to use following 3 locations:
		 * 1) Authorization: Bearer
		 * 2) x-goog-iap-jwt-assertion
		 * 3) access_token query parameter
		 * Default locations can be specified as followings:
		 * jwt_locations:
		 * - header: Authorization
		 * value_prefix: "Bearer "
		 * - header: x-goog-iap-jwt-assertion
		 * - query: access_token
		 */
		jwtLocations?: Array<JwtLocation>;
	}


	/** Specifies a location to extract JWT from an API request. */
	export interface JwtLocation {

		/** Specifies HTTP header name to extract JWT token. */
		header?: string;

		/** Specifies URL query parameter name to extract JWT token. */
		query?: string;

		/**
		 * The value prefix. The value format is "value_prefix{token}"
		 * Only applies to "in" header type. Must be empty for "in" query type.
		 * If not empty, the header value has to match (case sensitive) this prefix.
		 * If not matched, JWT will not be extracted. If matched, JWT will be
		 * extracted after the prefix is removed.
		 * For example, for "Authorization: Bearer {JWT}",
		 * value_prefix="Bearer " with a space at the end.
		 */
		valuePrefix?: string;
	}


	/**
	 * User-defined authentication requirements, including support for
	 * [JSON Web Token
	 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
	 */
	export interface AuthRequirement {

		/**
		 * NOTE: This will be deprecated soon, once AuthProvider.audiences is
		 * implemented and accepted in all the runtime components.
		 * The list of JWT
		 * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
		 * that are allowed to access. A JWT containing any of these audiences will
		 * be accepted. When this setting is absent, only JWTs with audience
		 * "https://Service_name/API_name"
		 * will be accepted. For example, if no audiences are in the setting,
		 * LibraryService API will only accept JWTs with the following audience
		 * "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
		 * Example:
		 * audiences: bookstore_android.apps.googleusercontent.com,
		 * bookstore_web.apps.googleusercontent.com
		 */
		audiences?: string;

		/**
		 * id from authentication provider.
		 * Example:
		 * provider_id: bookstore_auth
		 */
		providerId?: string;
	}


	/**
	 * `Authentication` defines the authentication configuration for an API.
	 * Example for an API targeted for external use:
	 *     name: calendar.googleapis.com
	 *     authentication:
	 *       providers:
	 *       - id: google_calendar_auth
	 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
	 *         issuer: https://securetoken.google.com
	 *       rules:
	 *       - selector: "*"
	 *         requirements:
	 *           provider_id: google_calendar_auth
	 */
	export interface Authentication {

		/** Defines a set of authentication providers that a service supports. */
		providers?: Array<AuthProvider>;

		/**
		 * A list of authentication rules that apply to individual API methods.
		 * **NOTE:** All service configuration rules follow "last one wins" order.
		 */
		rules?: Array<AuthenticationRule>;
	}


	/**
	 * Authentication rules for the service.
	 * By default, if a method has any authentication requirements, every request
	 * must include a valid credential matching one of the requirements.
	 * It's an error to include more than one kind of credential in a single
	 * request.
	 * If a method doesn't have any auth requirements, request credentials will be
	 * ignored.
	 */
	export interface AuthenticationRule {

		/** If true, the service accepts API keys without any other credential. */
		allowWithoutCredential?: boolean;

		/**
		 * OAuth scopes are a way to define data and permissions on data. For example,
		 * there are scopes defined for "Read-only access to Google Calendar" and
		 * "Access to Cloud Platform". Users can consent to a scope for an application,
		 * giving it permission to access that data on their behalf.
		 * OAuth scope specifications should be fairly coarse grained; a user will need
		 * to see and understand the text description of what your scope means.
		 * In most cases: use one or at most two OAuth scopes for an entire family of
		 * products. If your product has multiple APIs, you should probably be sharing
		 * the OAuth scope across all of those APIs.
		 * When you need finer grained OAuth consent screens: talk with your product
		 * management about how developers will use them in practice.
		 * Please note that even though each of the canonical scopes is enough for a
		 * request to be accepted and passed to the backend, a request can still fail
		 * due to the backend requiring additional scopes or permissions.
		 */
		oauth?: OAuthRequirements;

		/** Requirements for additional authentication providers. */
		requirements?: Array<AuthRequirement>;

		/**
		 * Selects the methods to which this rule applies.
		 * Refer to selector for syntax details.
		 */
		selector?: string;
	}


	/**
	 * OAuth scopes are a way to define data and permissions on data. For example,
	 * there are scopes defined for "Read-only access to Google Calendar" and
	 * "Access to Cloud Platform". Users can consent to a scope for an application,
	 * giving it permission to access that data on their behalf.
	 * OAuth scope specifications should be fairly coarse grained; a user will need
	 * to see and understand the text description of what your scope means.
	 * In most cases: use one or at most two OAuth scopes for an entire family of
	 * products. If your product has multiple APIs, you should probably be sharing
	 * the OAuth scope across all of those APIs.
	 * When you need finer grained OAuth consent screens: talk with your product
	 * management about how developers will use them in practice.
	 * Please note that even though each of the canonical scopes is enough for a
	 * request to be accepted and passed to the backend, a request can still fail
	 * due to the backend requiring additional scopes or permissions.
	 */
	export interface OAuthRequirements {

		/**
		 * The list of publicly documented OAuth scopes that are allowed access. An
		 * OAuth token containing any of these scopes will be accepted.
		 * Example:
		 * canonical_scopes: https://www.googleapis.com/auth/calendar,
		 * https://www.googleapis.com/auth/calendar.read
		 */
		canonicalScopes?: string;
	}


	/** `Backend` defines the backend configuration for a service. */
	export interface Backend {

		/**
		 * A list of API backend rules that apply to individual API methods.
		 * **NOTE:** All service configuration rules follow "last one wins" order.
		 */
		rules?: Array<BackendRule>;
	}


	/** A backend rule provides configuration for an individual API element. */
	export interface BackendRule {

		/**
		 * The address of the API backend.
		 * The scheme is used to determine the backend protocol and security.
		 * The following schemes are accepted:
		 * SCHEME        PROTOCOL    SECURITY
		 * http://       HTTP        None
		 * https://      HTTP        TLS
		 * grpc://       gRPC        None
		 * grpcs://      gRPC        TLS
		 * It is recommended to explicitly include a scheme. Leaving out the scheme
		 * may cause constrasting behaviors across platforms.
		 * If the port is unspecified, the default is:
		 * - 80 for schemes without TLS
		 * - 443 for schemes with TLS
		 * For HTTP backends, use protocol
		 * to specify the protocol version.
		 */
		address?: string;

		/**
		 * The number of seconds to wait for a response from a request. The default
		 * varies based on the request protocol and deployment environment.
		 */
		deadline?: number;

		/**
		 * When disable_auth is true, a JWT ID token won't be generated and the
		 * original "Authorization" HTTP header will be preserved. If the header is
		 * used to carry the original token and is expected by the backend, this
		 * field must be set to true to preserve the header.
		 */
		disableAuth?: boolean;

		/**
		 * The JWT audience is used when generating a JWT ID token for the backend.
		 * This ID token will be added in the HTTP "authorization" header, and sent
		 * to the backend.
		 */
		jwtAudience?: string;

		/**
		 * Minimum deadline in seconds needed for this method. Calls having deadline
		 * value lower than this will be rejected.
		 */
		minDeadline?: number;

		/**
		 * The number of seconds to wait for the completion of a long running
		 * operation. The default is no deadline.
		 */
		operationDeadline?: number;
		pathTranslation?: BackendRulePathTranslation;

		/**
		 * The protocol used for sending a request to the backend.
		 * The supported values are "http/1.1" and "h2".
		 * The default value is inferred from the scheme in the
		 * address field:
		 * SCHEME        PROTOCOL
		 * http://       http/1.1
		 * https://      http/1.1
		 * grpc://       h2
		 * grpcs://      h2
		 * For secure HTTP backends (https://) that support HTTP/2, set this field
		 * to "h2" for improved performance.
		 * Configuring this field to non-default values is only supported for secure
		 * HTTP backends. This field will be ignored for all other backends.
		 * See
		 * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
		 * for more details on the supported values.
		 */
		protocol?: string;

		/**
		 * Unimplemented. Do not use.
		 * The new name the selected proto elements should be renamed to.
		 * The package, the service and the method can all be renamed.
		 * The backend server should implement the renamed proto. However, clients
		 * should call the original method, and ESF routes the traffic to the renamed
		 * method.
		 * HTTP clients should call the URL mapped to the original method.
		 * gRPC and Stubby clients should call the original method with package name.
		 * For legacy reasons, ESF allows Stubby clients to call with the
		 * short name (without the package name). However, for API Versioning(or
		 * multiple methods mapped to the same short name), all Stubby clients must
		 * call the method's full name with the package name, otherwise the first one
		 * (selector) wins.
		 * If this `rename_to` is specified with a trailing `*`, the `selector` must
		 * be specified with a trailing `*` as well. The all element short names
		 * matched by the `*` in the selector will be kept in the `rename_to`.
		 * For example,
		 * rename_rules:
		 * - selector: |-
		 * google.example.library.v1.*
		 * rename_to: google.example.library.*
		 * The selector matches `google.example.library.v1.Library.CreateShelf` and
		 * `google.example.library.v1.Library.CreateBook`, they will be renamed to
		 * `google.example.library.Library.CreateShelf` and
		 * `google.example.library.Library.CreateBook`. It essentially renames the
		 * proto package name section of the matched proto service and methods.
		 */
		renameTo?: string;

		/**
		 * Selects the methods to which this rule applies.
		 * Refer to selector for syntax details.
		 */
		selector?: string;
	}

	export enum BackendRulePathTranslation { PATH_TRANSLATION_UNSPECIFIED = 0, CONSTANT_ADDRESS = 1, APPEND_PATH_TO_ADDRESS = 2 }


	/** Response message for BatchCreateAdminOverrides */
	export interface BatchCreateAdminOverridesResponse {

		/** The overrides that were created. */
		overrides?: Array<QuotaOverride>;
	}


	/** A quota override */
	export interface QuotaOverride {

		/**
		 * If this map is nonempty, then this override applies only to specific values
		 * for dimensions defined in the limit unit.
		 * For example, an override on a limit with the unit 1/{project}/{region}
		 * could contain an entry with the key "region" and the value "us-east-1";
		 * the override is only applied to quota consumed in that region.
		 * This map has the following restrictions:
		 * *   Keys that are not defined in the limit's unit are not valid keys.
		 * Any string appearing in {brackets} in the unit (besides {project} or
		 * {user}) is a defined key.
		 * *   "project" is not a valid key; the project is already specified in
		 * the parent resource name.
		 * *   "user" is not a valid key; the API does not support quota overrides
		 * that apply only to a specific user.
		 * *   If "region" appears as a key, its value must be a valid Cloud region.
		 * *   If "zone" appears as a key, its value must be a valid Cloud zone.
		 * *   If any valid key other than "region" or "zone" appears in the map, then
		 * all valid keys other than "region" or "zone" must also appear in the
		 * map.
		 */
		dimensions?: {[id: string]: any };

		/**
		 * The name of the metric to which this override applies.
		 * An example name would be:
		 * `compute.googleapis.com/cpus`
		 */
		metric?: string;

		/**
		 * The resource name of the override.
		 * This name is generated by the server when the override is created.
		 * Example names would be:
		 * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
		 * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
		 * The resource name is intended to be opaque and should not be parsed for
		 * its component strings, since its representation could change in the future.
		 */
		name?: string;

		/**
		 * The overriding quota limit value.
		 * Can be any nonnegative integer, or -1 (unlimited quota).
		 */
		overrideValue?: string;

		/**
		 * The limit unit of the limit to which this override applies.
		 * An example unit would be:
		 * `1/{project}/{region}`
		 * Note that `{project}` and `{region}` are not placeholders in this example;
		 * the literal characters `{` and `}` occur in the string.
		 */
		unit?: string;
	}


	/** Response message for BatchCreateConsumerOverrides */
	export interface BatchCreateConsumerOverridesResponse {

		/** The overrides that were created. */
		overrides?: Array<QuotaOverride>;
	}


	/** Request message for the `BatchEnableServices` method. */
	export interface BatchEnableServicesRequest {

		/**
		 * The identifiers of the services to enable on the project.
		 * A valid identifier would be:
		 * serviceusage.googleapis.com
		 * Enabling services requires that each service is public or is shared with
		 * the user enabling the service.
		 * A single request can enable a maximum of 20 services at a time. If more
		 * than 20 services are specified, the request will fail, and no state changes
		 * will occur.
		 */
		serviceIds?: Array<string>;
	}


	/**
	 * Response message for the `BatchEnableServices` method.
	 * This response message is assigned to the `response` field of the returned
	 * Operation when that operation is done.
	 */
	export interface BatchEnableServicesResponse {

		/**
		 * If allow_partial_success is true, and one or more services could not be
		 * enabled, this field contains the details about each failure.
		 */
		failures?: Array<EnableFailure>;

		/** The new state of the services after enabling. */
		services?: Array<GoogleApiServiceusageV1Service>;
	}


	/** Provides error messages for the failing services. */
	export interface EnableFailure {

		/** An error message describing why the service could not be enabled. */
		errorMessage?: string;

		/** The service id of a service that could not be enabled. */
		serviceId?: string;
	}


	/** A service that is available for use by the consumer. */
	export interface GoogleApiServiceusageV1Service {

		/** The configuration of the service. */
		config?: GoogleApiServiceusageV1ServiceConfig;

		/**
		 * The resource name of the consumer and service.
		 * A valid name would be:
		 * - projects/123/services/serviceusage.googleapis.com
		 */
		name?: string;

		/**
		 * The resource name of the consumer.
		 * A valid name would be:
		 * - projects/123
		 */
		parent?: string;

		/** Whether or not the service has been enabled for use by the consumer. */
		state?: GoogleApiServiceusageV1ServiceState;
	}


	/** The configuration of the service. */
	export interface GoogleApiServiceusageV1ServiceConfig {

		/**
		 * A list of API interfaces exported by this service. Contains only the names,
		 * versions, and method names of the interfaces.
		 */
		apis?: Array<Api>;

		/**
		 * `Authentication` defines the authentication configuration for an API.
		 * Example for an API targeted for external use:
		 * name: calendar.googleapis.com
		 * authentication:
		 * providers:
		 * - id: google_calendar_auth
		 * jwks_uri: https://www.googleapis.com/oauth2/v1/certs
		 * issuer: https://securetoken.google.com
		 * rules:
		 * - selector: "*"
		 * requirements:
		 * provider_id: google_calendar_auth
		 */
		authentication?: Authentication;

		/**
		 * `Documentation` provides the information for describing a service.
		 * Example:
		 * <pre><code>documentation:
		 * summary: >
		 * The Google Calendar API gives access
		 * to most calendar features.
		 * pages:
		 * - name: Overview
		 * content: &#40;== include google/foo/overview.md ==&#41;
		 * - name: Tutorial
		 * content: &#40;== include google/foo/tutorial.md ==&#41;
		 * subpages;
		 * - name: Java
		 * content: &#40;== include google/foo/tutorial_java.md ==&#41;
		 * rules:
		 * - selector: google.calendar.Calendar.Get
		 * description: >
		 * ...
		 * - selector: google.calendar.Calendar.Put
		 * description: >
		 * ...
		 * </code></pre>
		 * Documentation is provided in markdown syntax. In addition to
		 * standard markdown features, definition lists, tables and fenced
		 * code blocks are supported. Section headers can be provided and are
		 * interpreted relative to the section nesting of the context where
		 * a documentation fragment is embedded.
		 * Documentation from the IDL is merged with documentation defined
		 * via the config at normalization time, where documentation provided
		 * by config rules overrides IDL provided.
		 * A number of constructs specific to the API platform are supported
		 * in documentation text.
		 * In order to reference a proto element, the following
		 * notation can be used:
		 * <pre><code>&#91;fully.qualified.proto.name]&#91;]</code></pre>
		 * To override the display text used for the link, this can be used:
		 * <pre><code>&#91;display text]&#91;fully.qualified.proto.name]</code></pre>
		 * Text can be excluded from doc using the following notation:
		 * <pre><code>&#40;-- internal comment --&#41;</code></pre>
		 * A few directives are available in documentation. Note that
		 * directives must appear on a single line to be properly
		 * identified. The `include` directive includes a markdown file from
		 * an external source:
		 * <pre><code>&#40;== include path/to/file ==&#41;</code></pre>
		 * The `resource_for` directive marks a message to be the resource of
		 * a collection in REST view. If it is not specified, tools attempt
		 * to infer the resource from the operations in a collection:
		 * <pre><code>&#40;== resource_for v1.shelves.books ==&#41;</code></pre>
		 * The directive `suppress_warning` does not directly affect documentation
		 * and is documented together with service config validation.
		 */
		documentation?: Documentation;

		/**
		 * Configuration for network endpoints. Contains only the names and aliases
		 * of the endpoints.
		 */
		endpoints?: Array<Endpoint>;

		/**
		 * The DNS address at which this service is available.
		 * An example DNS address would be:
		 * `calendar.googleapis.com`.
		 */
		name?: string;

		/**
		 * Quota configuration helps to achieve fairness and budgeting in service
		 * usage.
		 * The metric based quota configuration works this way:
		 * - The service configuration defines a set of metrics.
		 * - For API calls, the quota.metric_rules maps methods to metrics with
		 * corresponding costs.
		 * - The quota.limits defines limits on the metrics, which will be used for
		 * quota checks at runtime.
		 * An example quota configuration in yaml format:
		 * quota:
		 * limits:
		 * - name: apiWriteQpsPerProject
		 * metric: library.googleapis.com/write_calls
		 * unit: "1/min/{project}"  # rate limit for consumer projects
		 * values:
		 * STANDARD: 10000
		 * # The metric rules bind all methods to the read_calls metric,
		 * # except for the UpdateBook and DeleteBook methods. These two methods
		 * # are mapped to the write_calls metric, with the UpdateBook method
		 * # consuming at twice rate as the DeleteBook method.
		 * metric_rules:
		 * - selector: "*"
		 * metric_costs:
		 * library.googleapis.com/read_calls: 1
		 * - selector: google.example.library.v1.LibraryService.UpdateBook
		 * metric_costs:
		 * library.googleapis.com/write_calls: 2
		 * - selector: google.example.library.v1.LibraryService.DeleteBook
		 * metric_costs:
		 * library.googleapis.com/write_calls: 1
		 * Corresponding Metric definition:
		 * metrics:
		 * - name: library.googleapis.com/read_calls
		 * display_name: Read requests
		 * metric_kind: DELTA
		 * value_type: INT64
		 * - name: library.googleapis.com/write_calls
		 * display_name: Write requests
		 * metric_kind: DELTA
		 * value_type: INT64
		 */
		quota?: Quota;

		/** The product title for this service. */
		title?: string;

		/** Configuration controlling usage of a service. */
		usage?: Usage;
	}


	/**
	 * `Documentation` provides the information for describing a service.
	 * Example:
	 * <pre><code>documentation:
	 *   summary: >
	 *     The Google Calendar API gives access
	 *     to most calendar features.
	 *   pages:
	 *   - name: Overview
	 *     content: &#40;== include google/foo/overview.md ==&#41;
	 *   - name: Tutorial
	 *     content: &#40;== include google/foo/tutorial.md ==&#41;
	 *     subpages;
	 *     - name: Java
	 *       content: &#40;== include google/foo/tutorial_java.md ==&#41;
	 *   rules:
	 *   - selector: google.calendar.Calendar.Get
	 *     description: >
	 *       ...
	 *   - selector: google.calendar.Calendar.Put
	 *     description: >
	 *       ...
	 * </code></pre>
	 * Documentation is provided in markdown syntax. In addition to
	 * standard markdown features, definition lists, tables and fenced
	 * code blocks are supported. Section headers can be provided and are
	 * interpreted relative to the section nesting of the context where
	 * a documentation fragment is embedded.
	 * Documentation from the IDL is merged with documentation defined
	 * via the config at normalization time, where documentation provided
	 * by config rules overrides IDL provided.
	 * A number of constructs specific to the API platform are supported
	 * in documentation text.
	 * In order to reference a proto element, the following
	 * notation can be used:
	 * <pre><code>&#91;fully.qualified.proto.name]&#91;]</code></pre>
	 * To override the display text used for the link, this can be used:
	 * <pre><code>&#91;display text]&#91;fully.qualified.proto.name]</code></pre>
	 * Text can be excluded from doc using the following notation:
	 * <pre><code>&#40;-- internal comment --&#41;</code></pre>
	 * A few directives are available in documentation. Note that
	 * directives must appear on a single line to be properly
	 * identified. The `include` directive includes a markdown file from
	 * an external source:
	 * <pre><code>&#40;== include path/to/file ==&#41;</code></pre>
	 * The `resource_for` directive marks a message to be the resource of
	 * a collection in REST view. If it is not specified, tools attempt
	 * to infer the resource from the operations in a collection:
	 * <pre><code>&#40;== resource_for v1.shelves.books ==&#41;</code></pre>
	 * The directive `suppress_warning` does not directly affect documentation
	 * and is documented together with service config validation.
	 */
	export interface Documentation {

		/** The URL to the root of documentation. */
		documentationRootUrl?: string;

		/**
		 * Declares a single overview page. For example:
		 * <pre><code>documentation:
		 * summary: ...
		 * overview: &#40;== include overview.md ==&#41;
		 * </code></pre>
		 * This is a shortcut for the following declaration (using pages style):
		 * <pre><code>documentation:
		 * summary: ...
		 * pages:
		 * - name: Overview
		 * content: &#40;== include overview.md ==&#41;
		 * </code></pre>
		 * Note: you cannot specify both `overview` field and `pages` field.
		 */
		overview?: string;

		/** The top level pages for the documentation set. */
		pages?: Array<Page>;

		/**
		 * A list of documentation rules that apply to individual API elements.
		 * **NOTE:** All service configuration rules follow "last one wins" order.
		 */
		rules?: Array<DocumentationRule>;

		/**
		 * Specifies the service root url if the default one (the service name
		 * from the yaml file) is not suitable. This can be seen in any fully
		 * specified service urls as well as sections that show a base that other
		 * urls are relative to.
		 */
		serviceRootUrl?: string;

		/**
		 * A short summary of what the service does. Can only be provided by
		 * plain text.
		 */
		summary?: string;
	}


	/**
	 * Represents a documentation page. A page can contain subpages to represent
	 * nested documentation set structure.
	 */
	export interface Page {

		/**
		 * The Markdown content of the page. You can use <code>&#40;== include {path}
		 * ==&#41;</code> to include content from a Markdown file.
		 */
		content?: string;

		/**
		 * The name of the page. It will be used as an identity of the page to
		 * generate URI of the page, text of the link to this page in navigation,
		 * etc. The full page name (start from the root page name to this page
		 * concatenated with `.`) can be used as reference to the page in your
		 * documentation. For example:
		 * <pre><code>pages:
		 * - name: Tutorial
		 * content: &#40;== include tutorial.md ==&#41;
		 * subpages:
		 * - name: Java
		 * content: &#40;== include tutorial_java.md ==&#41;
		 * </code></pre>
		 * You can reference `Java` page using Markdown reference link syntax:
		 * `Java`.
		 */
		name?: string;

		/**
		 * Subpages of this page. The order of subpages specified here will be
		 * honored in the generated docset.
		 */
		subpages?: Array<Page>;
	}


	/** A documentation rule provides information about individual API elements. */
	export interface DocumentationRule {

		/**
		 * Deprecation description of the selected element(s). It can be provided if
		 * an element is marked as `deprecated`.
		 */
		deprecationDescription?: string;

		/** Description of the selected API(s). */
		description?: string;

		/**
		 * The selector is a comma-separated list of patterns. Each pattern is a
		 * qualified name of the element which may end in "*", indicating a wildcard.
		 * Wildcards are only allowed at the end and for a whole component of the
		 * qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A
		 * wildcard will match one or more components. To specify a default for all
		 * applicable elements, the whole pattern "*" is used.
		 */
		selector?: string;
	}


	/**
	 * `Endpoint` describes a network endpoint that serves a set of APIs.
	 * A service may expose any number of endpoints, and all endpoints share the
	 * same service configuration, such as quota configuration and monitoring
	 * configuration.
	 * Example service configuration:
	 *     name: library-example.googleapis.com
	 *     endpoints:
	 *       # Below entry makes 'google.example.library.v1.Library'
	 *       # API be served from endpoint address library-example.googleapis.com.
	 *       # It also allows HTTP OPTIONS calls to be passed to the backend, for
	 *       # it to decide whether the subsequent cross-origin request is
	 *       # allowed to proceed.
	 *     - name: library-example.googleapis.com
	 *       allow_cors: true
	 */
	export interface Endpoint {

		/**
		 * DEPRECATED: This field is no longer supported. Instead of using aliases,
		 * please specify multiple google.api.Endpoint for each of the intended
		 * aliases.
		 * Additional names that this endpoint will be hosted on.
		 */
		aliases?: Array<string>;

		/**
		 * Allowing
		 * [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
		 * cross-domain traffic, would allow the backends served from this endpoint to
		 * receive and respond to HTTP OPTIONS requests. The response will be used by
		 * the browser to determine whether the subsequent cross-origin request is
		 * allowed to proceed.
		 */
		allowCors?: boolean;

		/** The list of features enabled on this endpoint. */
		features?: Array<string>;

		/** The canonical name of this endpoint. */
		name?: string;

		/**
		 * The specification of an Internet routable address of API frontend that will
		 * handle requests to this [API
		 * Endpoint](https://cloud.google.com/apis/design/glossary). It should be
		 * either a valid IPv4 address or a fully-qualified domain name. For example,
		 * "8.8.8.8" or "myservice.appspot.com".
		 */
		target?: string;
	}


	/**
	 * Quota configuration helps to achieve fairness and budgeting in service
	 * usage.
	 * The metric based quota configuration works this way:
	 * - The service configuration defines a set of metrics.
	 * - For API calls, the quota.metric_rules maps methods to metrics with
	 *   corresponding costs.
	 * - The quota.limits defines limits on the metrics, which will be used for
	 *   quota checks at runtime.
	 * An example quota configuration in yaml format:
	 *    quota:
	 *      limits:
	 *      - name: apiWriteQpsPerProject
	 *        metric: library.googleapis.com/write_calls
	 *        unit: "1/min/{project}"  # rate limit for consumer projects
	 *        values:
	 *          STANDARD: 10000
	 *      # The metric rules bind all methods to the read_calls metric,
	 *      # except for the UpdateBook and DeleteBook methods. These two methods
	 *      # are mapped to the write_calls metric, with the UpdateBook method
	 *      # consuming at twice rate as the DeleteBook method.
	 *      metric_rules:
	 *      - selector: "*"
	 *        metric_costs:
	 *          library.googleapis.com/read_calls: 1
	 *      - selector: google.example.library.v1.LibraryService.UpdateBook
	 *        metric_costs:
	 *          library.googleapis.com/write_calls: 2
	 *      - selector: google.example.library.v1.LibraryService.DeleteBook
	 *        metric_costs:
	 *          library.googleapis.com/write_calls: 1
	 *  Corresponding Metric definition:
	 *      metrics:
	 *      - name: library.googleapis.com/read_calls
	 *        display_name: Read requests
	 *        metric_kind: DELTA
	 *        value_type: INT64
	 *      - name: library.googleapis.com/write_calls
	 *        display_name: Write requests
	 *        metric_kind: DELTA
	 *        value_type: INT64
	 */
	export interface Quota {

		/** List of `QuotaLimit` definitions for the service. */
		limits?: Array<QuotaLimit>;

		/**
		 * List of `MetricRule` definitions, each one mapping a selected method to one
		 * or more metrics.
		 */
		metricRules?: Array<MetricRule>;
	}


	/**
	 * `QuotaLimit` defines a specific limit that applies over a specified duration
	 * for a limit type. There can be at most one limit for a duration and limit
	 * type combination defined within a `QuotaGroup`.
	 */
	export interface QuotaLimit {

		/**
		 * Default number of tokens that can be consumed during the specified
		 * duration. This is the number of tokens assigned when a client
		 * application developer activates the service for his/her project.
		 * Specifying a value of 0 will block all requests. This can be used if you
		 * are provisioning quota to selected consumers and blocking others.
		 * Similarly, a value of -1 will indicate an unlimited quota. No other
		 * negative values are allowed.
		 * Used by group-based quotas only.
		 */
		defaultLimit?: string;

		/**
		 * Optional. User-visible, extended description for this quota limit.
		 * Should be used only when more context is needed to understand this limit
		 * than provided by the limit's display name (see: `display_name`).
		 */
		description?: string;

		/**
		 * User-visible display name for this limit.
		 * Optional. If not set, the UI will provide a default display name based on
		 * the quota configuration. This field can be used to override the default
		 * display name generated from the configuration.
		 */
		displayName?: string;

		/**
		 * Duration of this limit in textual notation. Must be "100s" or "1d".
		 * Used by group-based quotas only.
		 */
		duration?: string;

		/**
		 * Free tier value displayed in the Developers Console for this limit.
		 * The free tier is the number of tokens that will be subtracted from the
		 * billed amount when billing is enabled.
		 * This field can only be set on a limit with duration "1d", in a billable
		 * group; it is invalid on any other limit. If this field is not set, it
		 * defaults to 0, indicating that there is no free tier for this service.
		 * Used by group-based quotas only.
		 */
		freeTier?: string;

		/**
		 * Maximum number of tokens that can be consumed during the specified
		 * duration. Client application developers can override the default limit up
		 * to this maximum. If specified, this value cannot be set to a value less
		 * than the default limit. If not specified, it is set to the default limit.
		 * To allow clients to apply overrides with no upper bound, set this to -1,
		 * indicating unlimited maximum quota.
		 * Used by group-based quotas only.
		 */
		maxLimit?: string;

		/**
		 * The name of the metric this quota limit applies to. The quota limits with
		 * the same metric will be checked together during runtime. The metric must be
		 * defined within the service config.
		 */
		metric?: string;

		/**
		 * Name of the quota limit.
		 * The name must be provided, and it must be unique within the service. The
		 * name can only include alphanumeric characters as well as '-'.
		 * The maximum length of the limit name is 64 characters.
		 */
		name?: string;

		/**
		 * Specify the unit of the quota limit. It uses the same syntax as
		 * Metric.unit. The supported unit kinds are determined by the quota
		 * backend system.
		 * Here are some examples:
		 * * "1/min/{project}" for quota per minute per project.
		 * Note: the order of unit components is insignificant.
		 * The "1" at the beginning is required to follow the metric unit syntax.
		 */
		unit?: string;

		/**
		 * Tiered limit values. You must specify this as a key:value pair, with an
		 * integer value that is the maximum number of requests allowed for the
		 * specified unit. Currently only STANDARD is supported.
		 */
		values?: {[id: string]: any };
	}


	/**
	 * Bind API methods to metrics. Binding a method to a metric causes that
	 * metric's configured quota behaviors to apply to the method call.
	 */
	export interface MetricRule {

		/**
		 * Metrics to update when the selected methods are called, and the associated
		 * cost applied to each metric.
		 * The key of the map is the metric name, and the values are the amount
		 * increased for the metric against which the quota limits are defined.
		 * The value must not be negative.
		 */
		metricCosts?: {[id: string]: any };

		/**
		 * Selects the methods to which this rule applies.
		 * Refer to selector for syntax details.
		 */
		selector?: string;
	}


	/** Configuration controlling usage of a service. */
	export interface Usage {

		/**
		 * The full resource name of a channel used for sending notifications to the
		 * service producer.
		 * Google Service Management currently only supports
		 * [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
		 * channel. To use Google Cloud Pub/Sub as the channel, this must be the name
		 * of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
		 * documented in https://cloud.google.com/pubsub/docs/overview.
		 */
		producerNotificationChannel?: string;

		/**
		 * Requirements that must be satisfied before a consumer project can use the
		 * service. Each requirement is of the form <service.name>/<requirement-id>;
		 * for example 'serviceusage.googleapis.com/billing-enabled'.
		 */
		requirements?: Array<string>;

		/**
		 * A list of usage rules that apply to individual API methods.
		 * **NOTE:** All service configuration rules follow "last one wins" order.
		 */
		rules?: Array<UsageRule>;

		/**
		 * The per-product per-project service identity for a service.
		 * Use this field to configure per-product per-project service identity.
		 * Example of a service identity configuration.
		 * usage:
		 * service_identity:
		 * - service_account_parent: "projects/123456789"
		 * display_name: "Cloud XXX Service Agent"
		 * description: "Used as the identity of Cloud XXX to access resources"
		 */
		serviceIdentity?: GoogleApiServiceIdentity;
	}


	/**
	 * Usage configuration rules for the service.
	 * NOTE: Under development.
	 * Use this rule to configure unregistered calls for the service. Unregistered
	 * calls are calls that do not contain consumer project identity.
	 * (Example: calls that do not contain an API key).
	 * By default, API methods do not allow unregistered calls, and each method call
	 * must be identified by a consumer project identity. Use this rule to
	 * allow/disallow unregistered calls.
	 * Example of an API that wants to allow unregistered calls for entire service.
	 *     usage:
	 *       rules:
	 *       - selector: "*"
	 *         allow_unregistered_calls: true
	 * Example of a method that wants to allow unregistered calls.
	 *     usage:
	 *       rules:
	 *       - selector: "google.example.library.v1.LibraryService.CreateBook"
	 *         allow_unregistered_calls: true
	 */
	export interface UsageRule {

		/**
		 * If true, the selected method allows unregistered calls, e.g. calls
		 * that don't identify any user or application.
		 */
		allowUnregisteredCalls?: boolean;

		/**
		 * Selects the methods to which this rule applies. Use '*' to indicate all
		 * methods in all APIs.
		 * Refer to selector for syntax details.
		 */
		selector?: string;

		/**
		 * If true, the selected method should skip service control and the control
		 * plane features, such as quota and billing, will not be available.
		 * This flag is used by Google Cloud Endpoints to bypass checks for internal
		 * methods, such as service health check methods.
		 */
		skipServiceControl?: boolean;
	}


	/**
	 * The per-product per-project service identity for a service.
	 * Use this field to configure per-product per-project service identity.
	 * Example of a service identity configuration.
	 *     usage:
	 *       service_identity:
	 *       - service_account_parent: "projects/123456789"
	 *         display_name: "Cloud XXX Service Agent"
	 *         description: "Used as the identity of Cloud XXX to access resources"
	 */
	export interface GoogleApiServiceIdentity {

		/**
		 * Optional. A user-specified opaque description of the service account.
		 * Must be less than or equal to 256 UTF-8 bytes.
		 */
		description?: string;

		/**
		 * Optional. A user-specified name for the service account.
		 * Must be less than or equal to 100 UTF-8 bytes.
		 */
		displayName?: string;

		/**
		 * A service account project that hosts the service accounts.
		 * An example name would be:
		 * `projects/123456789`
		 */
		serviceAccountParent?: string;
	}

	export enum GoogleApiServiceusageV1ServiceState { STATE_UNSPECIFIED = 0, DISABLED = 1, ENABLED = 2 }


	/** Response message for the `BatchGetServices` method. */
	export interface BatchGetServicesResponse {

		/** The requested Service states. */
		services?: Array<GoogleApiServiceusageV1Service>;
	}


	/**
	 * Billing related configuration of the service.
	 * The following example shows how to configure monitored resources and metrics
	 * for billing:
	 *     monitored_resources:
	 *     - type: library.googleapis.com/branch
	 *       labels:
	 *       - key: /city
	 *         description: The city where the library branch is located in.
	 *       - key: /name
	 *         description: The name of the branch.
	 *     metrics:
	 *     - name: library.googleapis.com/book/borrowed_count
	 *       metric_kind: DELTA
	 *       value_type: INT64
	 *     billing:
	 *       consumer_destinations:
	 *       - monitored_resource: library.googleapis.com/branch
	 *         metrics:
	 *         - library.googleapis.com/book/borrowed_count
	 */
	export interface Billing {

		/**
		 * Billing configurations for sending metrics to the consumer project.
		 * There can be multiple consumer destinations per service, each one must have
		 * a different monitored resource type. A metric can be used in at most
		 * one consumer destination.
		 */
		consumerDestinations?: Array<BillingDestination>;
	}


	/**
	 * Configuration of a specific billing destination (Currently only support
	 * bill against consumer project).
	 */
	export interface BillingDestination {

		/**
		 * Names of the metrics to report to this billing destination.
		 * Each name must be defined in Service.metrics section.
		 */
		metrics?: Array<string>;

		/**
		 * The monitored resource type. The type must be defined in
		 * Service.monitored_resources section.
		 */
		monitoredResource?: string;
	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}


	/**
	 * `Context` defines which contexts an API requests.
	 * Example:
	 *     context:
	 *       rules:
	 *       - selector: "*"
	 *         requested:
	 *         - google.rpc.context.ProjectContext
	 *         - google.rpc.context.OriginContext
	 * The above specifies that all methods in the API request
	 * `google.rpc.context.ProjectContext` and
	 * `google.rpc.context.OriginContext`.
	 * Available context types are defined in package
	 * `google.rpc.context`.
	 * This also provides mechanism to whitelist any protobuf message extension that
	 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
	 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
	 * specific protobuf types that can appear in grpc metadata as follows in your
	 * yaml file:
	 * Example:
	 *     context:
	 *       rules:
	 *        - selector: "google.example.library.v1.LibraryService.CreateBook"
	 *          allowed_request_extensions:
	 *          - google.foo.v1.NewExtension
	 *          allowed_response_extensions:
	 *          - google.foo.v1.NewExtension
	 * You can also specify extension ID instead of fully qualified extension name
	 * here.
	 */
	export interface Context {

		/**
		 * A list of RPC context rules that apply to individual API methods.
		 * **NOTE:** All service configuration rules follow "last one wins" order.
		 */
		rules?: Array<ContextRule>;
	}


	/**
	 * A context rule provides information about the context for an individual API
	 * element.
	 */
	export interface ContextRule {

		/**
		 * A list of full type names or extension IDs of extensions allowed in grpc
		 * side channel from client to backend.
		 */
		allowedRequestExtensions?: Array<string>;

		/**
		 * A list of full type names or extension IDs of extensions allowed in grpc
		 * side channel from backend to client.
		 */
		allowedResponseExtensions?: Array<string>;

		/** A list of full type names of provided contexts. */
		provided?: Array<string>;

		/** A list of full type names of requested contexts. */
		requested?: Array<string>;

		/**
		 * Selects the methods to which this rule applies.
		 * Refer to selector for syntax details.
		 */
		selector?: string;
	}


	/**
	 * Selects and configures the service controller used by the service.  The
	 * service controller handles features like abuse, quota, billing, logging,
	 * monitoring, etc.
	 */
	export interface Control {

		/**
		 * The service control environment to use. If empty, no control plane
		 * feature (like quota and billing) will be enabled.
		 */
		environment?: string;
	}


	/**
	 * Customize service error responses.  For example, list any service
	 * specific protobuf types that can appear in error detail lists of
	 * error responses.
	 * Example:
	 *     custom_error:
	 *       types:
	 *       - google.foo.v1.CustomError
	 *       - google.foo.v1.AnotherError
	 */
	export interface CustomError {

		/**
		 * The list of custom error rules that apply to individual API messages.
		 * **NOTE:** All service configuration rules follow "last one wins" order.
		 */
		rules?: Array<CustomErrorRule>;

		/** The list of custom error detail types, e.g. 'google.foo.v1.CustomError'. */
		types?: Array<string>;
	}


	/** A custom error rule. */
	export interface CustomErrorRule {

		/**
		 * Mark this message as possible payload in error response.  Otherwise,
		 * objects of this type will be filtered when they appear in error payload.
		 */
		isErrorType?: boolean;

		/**
		 * Selects messages to which this rule applies.
		 * Refer to selector for syntax details.
		 */
		selector?: string;
	}


	/** A custom pattern is used for defining custom HTTP verb. */
	export interface CustomHttpPattern {

		/** The name of this custom HTTP verb. */
		kind?: string;

		/** The path matched by this custom verb. */
		path?: string;
	}


	/** Request message for the `DisableService` method. */
	export interface DisableServiceRequest {

		/**
		 * Indicates if services that are enabled and which depend on this service
		 * should also be disabled. If not set, an error will be generated if any
		 * enabled services depend on the service to be disabled. When set, the
		 * service, and any enabled services that depend on it, will be disabled
		 * together.
		 */
		disableDependentServices?: boolean;
	}


	/**
	 * Response message for the `DisableService` method.
	 * This response message is assigned to the `response` field of the returned
	 * Operation when that operation is done.
	 */
	export interface DisableServiceResponse {

		/** A service that is available for use by the consumer. */
		service?: GoogleApiServiceusageV1Service;
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


	/** Request message for the `EnableService` method. */
	export interface EnableServiceRequest {
	}


	/**
	 * Response message for the `EnableService` method.
	 * This response message is assigned to the `response` field of the returned
	 * Operation when that operation is done.
	 */
	export interface EnableServiceResponse {

		/** A service that is available for use by the consumer. */
		service?: GoogleApiServiceusageV1Service;
	}


	/** Enum type definition. */
	export interface Enum {

		/** Enum value definitions. */
		enumvalue?: Array<EnumValue>;

		/** Enum type name. */
		name?: string;

		/** Protocol buffer options. */
		options?: Array<Option>;

		/**
		 * `SourceContext` represents information about the source of a
		 * protobuf element, like the file in which it is defined.
		 */
		sourceContext?: SourceContext;

		/** The source syntax. */
		syntax?: MethodSyntax;
	}


	/** Enum value definition. */
	export interface EnumValue {

		/** Enum value name. */
		name?: string;

		/** Enum value number. */
		number?: number;

		/** Protocol buffer options. */
		options?: Array<Option>;
	}


	/** A single field of a message type. */
	export interface Field {

		/** The field cardinality. */
		cardinality?: FieldCardinality;

		/** The string value of the default value of this field. Proto2 syntax only. */
		defaultValue?: string;

		/** The field JSON name. */
		jsonName?: string;

		/** The field type. */
		kind?: FieldKind;

		/** The field name. */
		name?: string;

		/** The field number. */
		number?: number;

		/**
		 * The index of the field type in `Type.oneofs`, for message or enumeration
		 * types. The first type has index 1; zero means the type is not in the list.
		 */
		oneofIndex?: number;

		/** The protocol buffer options. */
		options?: Array<Option>;

		/** Whether to use alternative packed wire representation. */
		packed?: boolean;

		/**
		 * The field type URL, without the scheme, for message or enumeration
		 * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
		 */
		typeUrl?: string;
	}

	export enum FieldCardinality { CARDINALITY_UNKNOWN = 0, CARDINALITY_OPTIONAL = 1, CARDINALITY_REQUIRED = 2, CARDINALITY_REPEATED = 3 }

	export enum FieldKind { TYPE_UNKNOWN = 0, TYPE_DOUBLE = 1, TYPE_FLOAT = 2, TYPE_INT64 = 3, TYPE_UINT64 = 4, TYPE_INT32 = 5, TYPE_FIXED64 = 6, TYPE_FIXED32 = 7, TYPE_BOOL = 8, TYPE_STRING = 9, TYPE_GROUP = 10, TYPE_MESSAGE = 11, TYPE_BYTES = 12, TYPE_UINT32 = 13, TYPE_ENUM = 14, TYPE_SFIXED32 = 15, TYPE_SFIXED64 = 16, TYPE_SINT32 = 17, TYPE_SINT64 = 18 }


	/** Response message for getting service identity. */
	export interface GetServiceIdentityResponse {

		/**
		 * Service identity for a service. This is the identity that service producer
		 * should use to access consumer resources.
		 */
		identity?: ServiceIdentity;

		/** Service identity state. */
		state?: GetServiceIdentityResponseState;
	}


	/**
	 * Service identity for a service. This is the identity that service producer
	 * should use to access consumer resources.
	 */
	export interface ServiceIdentity {

		/**
		 * The email address of the service account that a service producer would use
		 * to access consumer resources.
		 */
		email?: string;

		/**
		 * The unique and stable id of the service account.
		 * https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts#ServiceAccount
		 */
		uniqueId?: string;
	}

	export enum GetServiceIdentityResponseState { IDENTITY_STATE_UNSPECIFIED = 0, ACTIVE = 1 }


	/**
	 * `Service` is the root object of Google service configuration schema. It
	 * describes basic information about a service, such as the name and the
	 * title, and delegates other aspects to sub-sections. Each sub-section is
	 * either a proto message or a repeated proto message that configures a
	 * specific aspect, such as auth. See each proto message definition for details.
	 * Example:
	 *     type: google.api.Service
	 *     config_version: 3
	 *     name: calendar.googleapis.com
	 *     title: Google Calendar API
	 *     apis:
	 *     - name: google.calendar.v3.Calendar
	 *     authentication:
	 *       providers:
	 *       - id: google_calendar_auth
	 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
	 *         issuer: https://securetoken.google.com
	 *       rules:
	 *       - selector: "*"
	 *         requirements:
	 *           provider_id: google_calendar_auth
	 */
	export interface GoogleApiService {

		/**
		 * A list of API interfaces exported by this service. Only the `name` field
		 * of the google.protobuf.Api needs to be provided by the configuration
		 * author, as the remaining fields will be derived from the IDL during the
		 * normalization process. It is an error to specify an API interface here
		 * which cannot be resolved against the associated IDL files.
		 */
		apis?: Array<Api>;

		/**
		 * `Authentication` defines the authentication configuration for an API.
		 * Example for an API targeted for external use:
		 * name: calendar.googleapis.com
		 * authentication:
		 * providers:
		 * - id: google_calendar_auth
		 * jwks_uri: https://www.googleapis.com/oauth2/v1/certs
		 * issuer: https://securetoken.google.com
		 * rules:
		 * - selector: "*"
		 * requirements:
		 * provider_id: google_calendar_auth
		 */
		authentication?: Authentication;

		/** `Backend` defines the backend configuration for a service. */
		backend?: Backend;

		/**
		 * Billing related configuration of the service.
		 * The following example shows how to configure monitored resources and metrics
		 * for billing:
		 * monitored_resources:
		 * - type: library.googleapis.com/branch
		 * labels:
		 * - key: /city
		 * description: The city where the library branch is located in.
		 * - key: /name
		 * description: The name of the branch.
		 * metrics:
		 * - name: library.googleapis.com/book/borrowed_count
		 * metric_kind: DELTA
		 * value_type: INT64
		 * billing:
		 * consumer_destinations:
		 * - monitored_resource: library.googleapis.com/branch
		 * metrics:
		 * - library.googleapis.com/book/borrowed_count
		 */
		billing?: Billing;

		/**
		 * The semantic version of the service configuration. The config version
		 * affects the interpretation of the service configuration. For example,
		 * certain features are enabled by default for certain config versions.
		 * The latest config version is `3`.
		 */
		configVersion?: string;

		/**
		 * `Context` defines which contexts an API requests.
		 * Example:
		 * context:
		 * rules:
		 * - selector: "*"
		 * requested:
		 * - google.rpc.context.ProjectContext
		 * - google.rpc.context.OriginContext
		 * The above specifies that all methods in the API request
		 * `google.rpc.context.ProjectContext` and
		 * `google.rpc.context.OriginContext`.
		 * Available context types are defined in package
		 * `google.rpc.context`.
		 * This also provides mechanism to whitelist any protobuf message extension that
		 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
		 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
		 * specific protobuf types that can appear in grpc metadata as follows in your
		 * yaml file:
		 * Example:
		 * context:
		 * rules:
		 * - selector: "google.example.library.v1.LibraryService.CreateBook"
		 * allowed_request_extensions:
		 * - google.foo.v1.NewExtension
		 * allowed_response_extensions:
		 * - google.foo.v1.NewExtension
		 * You can also specify extension ID instead of fully qualified extension name
		 * here.
		 */
		context?: Context;

		/**
		 * Selects and configures the service controller used by the service.  The
		 * service controller handles features like abuse, quota, billing, logging,
		 * monitoring, etc.
		 */
		control?: Control;

		/**
		 * Customize service error responses.  For example, list any service
		 * specific protobuf types that can appear in error detail lists of
		 * error responses.
		 * Example:
		 * custom_error:
		 * types:
		 * - google.foo.v1.CustomError
		 * - google.foo.v1.AnotherError
		 */
		customError?: CustomError;

		/**
		 * `Documentation` provides the information for describing a service.
		 * Example:
		 * <pre><code>documentation:
		 * summary: >
		 * The Google Calendar API gives access
		 * to most calendar features.
		 * pages:
		 * - name: Overview
		 * content: &#40;== include google/foo/overview.md ==&#41;
		 * - name: Tutorial
		 * content: &#40;== include google/foo/tutorial.md ==&#41;
		 * subpages;
		 * - name: Java
		 * content: &#40;== include google/foo/tutorial_java.md ==&#41;
		 * rules:
		 * - selector: google.calendar.Calendar.Get
		 * description: >
		 * ...
		 * - selector: google.calendar.Calendar.Put
		 * description: >
		 * ...
		 * </code></pre>
		 * Documentation is provided in markdown syntax. In addition to
		 * standard markdown features, definition lists, tables and fenced
		 * code blocks are supported. Section headers can be provided and are
		 * interpreted relative to the section nesting of the context where
		 * a documentation fragment is embedded.
		 * Documentation from the IDL is merged with documentation defined
		 * via the config at normalization time, where documentation provided
		 * by config rules overrides IDL provided.
		 * A number of constructs specific to the API platform are supported
		 * in documentation text.
		 * In order to reference a proto element, the following
		 * notation can be used:
		 * <pre><code>&#91;fully.qualified.proto.name]&#91;]</code></pre>
		 * To override the display text used for the link, this can be used:
		 * <pre><code>&#91;display text]&#91;fully.qualified.proto.name]</code></pre>
		 * Text can be excluded from doc using the following notation:
		 * <pre><code>&#40;-- internal comment --&#41;</code></pre>
		 * A few directives are available in documentation. Note that
		 * directives must appear on a single line to be properly
		 * identified. The `include` directive includes a markdown file from
		 * an external source:
		 * <pre><code>&#40;== include path/to/file ==&#41;</code></pre>
		 * The `resource_for` directive marks a message to be the resource of
		 * a collection in REST view. If it is not specified, tools attempt
		 * to infer the resource from the operations in a collection:
		 * <pre><code>&#40;== resource_for v1.shelves.books ==&#41;</code></pre>
		 * The directive `suppress_warning` does not directly affect documentation
		 * and is documented together with service config validation.
		 */
		documentation?: Documentation;

		/**
		 * Configuration for network endpoints.  If this is empty, then an endpoint
		 * with the same name as the service is automatically generated to service all
		 * defined APIs.
		 */
		endpoints?: Array<Endpoint>;

		/**
		 * A list of all enum types included in this API service.  Enums
		 * referenced directly or indirectly by the `apis` are automatically
		 * included.  Enums which are not referenced but shall be included
		 * should be listed here by name. Example:
		 * enums:
		 * - name: google.someapi.v1.SomeEnum
		 */
		enums?: Array<Enum>;

		/**
		 * Defines the HTTP configuration for an API service. It contains a list of
		 * HttpRule, each specifying the mapping of an RPC method
		 * to one or more HTTP REST API methods.
		 */
		http?: Http;

		/**
		 * A unique ID for a specific instance of this message, typically assigned
		 * by the client for tracking purpose. Must be no longer than 63 characters
		 * and only lower case letters, digits, '.', '_' and '-' are allowed. If
		 * empty, the server may choose to generate one instead.
		 */
		id?: string;

		/**
		 * Logging configuration of the service.
		 * The following example shows how to configure logs to be sent to the
		 * producer and consumer projects. In the example, the `activity_history`
		 * log is sent to both the producer and consumer projects, whereas the
		 * `purchase_history` log is only sent to the producer project.
		 * monitored_resources:
		 * - type: library.googleapis.com/branch
		 * labels:
		 * - key: /city
		 * description: The city where the library branch is located in.
		 * - key: /name
		 * description: The name of the branch.
		 * logs:
		 * - name: activity_history
		 * labels:
		 * - key: /customer_id
		 * - name: purchase_history
		 * logging:
		 * producer_destinations:
		 * - monitored_resource: library.googleapis.com/branch
		 * logs:
		 * - activity_history
		 * - purchase_history
		 * consumer_destinations:
		 * - monitored_resource: library.googleapis.com/branch
		 * logs:
		 * - activity_history
		 */
		logging?: Logging;

		/** Defines the logs used by this service. */
		logs?: Array<LogDescriptor>;

		/** Defines the metrics used by this service. */
		metrics?: Array<MetricDescriptor>;

		/**
		 * Defines the monitored resources used by this service. This is required
		 * by the Service.monitoring and Service.logging configurations.
		 */
		monitoredResources?: Array<MonitoredResourceDescriptor>;

		/**
		 * Monitoring configuration of the service.
		 * The example below shows how to configure monitored resources and metrics
		 * for monitoring. In the example, a monitored resource and two metrics are
		 * defined. The `library.googleapis.com/book/returned_count` metric is sent
		 * to both producer and consumer projects, whereas the
		 * `library.googleapis.com/book/overdue_count` metric is only sent to the
		 * consumer project.
		 * monitored_resources:
		 * - type: library.googleapis.com/branch
		 * labels:
		 * - key: /city
		 * description: The city where the library branch is located in.
		 * - key: /name
		 * description: The name of the branch.
		 * metrics:
		 * - name: library.googleapis.com/book/returned_count
		 * metric_kind: DELTA
		 * value_type: INT64
		 * labels:
		 * - key: /customer_id
		 * - name: library.googleapis.com/book/overdue_count
		 * metric_kind: GAUGE
		 * value_type: INT64
		 * labels:
		 * - key: /customer_id
		 * monitoring:
		 * producer_destinations:
		 * - monitored_resource: library.googleapis.com/branch
		 * metrics:
		 * - library.googleapis.com/book/returned_count
		 * consumer_destinations:
		 * - monitored_resource: library.googleapis.com/branch
		 * metrics:
		 * - library.googleapis.com/book/returned_count
		 * - library.googleapis.com/book/overdue_count
		 */
		monitoring?: Monitoring;

		/**
		 * The service name, which is a DNS-like logical identifier for the
		 * service, such as `calendar.googleapis.com`. The service name
		 * typically goes through DNS verification to make sure the owner
		 * of the service also owns the DNS name.
		 */
		name?: string;

		/** The Google project that owns this service. */
		producerProjectId?: string;

		/**
		 * Quota configuration helps to achieve fairness and budgeting in service
		 * usage.
		 * The metric based quota configuration works this way:
		 * - The service configuration defines a set of metrics.
		 * - For API calls, the quota.metric_rules maps methods to metrics with
		 * corresponding costs.
		 * - The quota.limits defines limits on the metrics, which will be used for
		 * quota checks at runtime.
		 * An example quota configuration in yaml format:
		 * quota:
		 * limits:
		 * - name: apiWriteQpsPerProject
		 * metric: library.googleapis.com/write_calls
		 * unit: "1/min/{project}"  # rate limit for consumer projects
		 * values:
		 * STANDARD: 10000
		 * # The metric rules bind all methods to the read_calls metric,
		 * # except for the UpdateBook and DeleteBook methods. These two methods
		 * # are mapped to the write_calls metric, with the UpdateBook method
		 * # consuming at twice rate as the DeleteBook method.
		 * metric_rules:
		 * - selector: "*"
		 * metric_costs:
		 * library.googleapis.com/read_calls: 1
		 * - selector: google.example.library.v1.LibraryService.UpdateBook
		 * metric_costs:
		 * library.googleapis.com/write_calls: 2
		 * - selector: google.example.library.v1.LibraryService.DeleteBook
		 * metric_costs:
		 * library.googleapis.com/write_calls: 1
		 * Corresponding Metric definition:
		 * metrics:
		 * - name: library.googleapis.com/read_calls
		 * display_name: Read requests
		 * metric_kind: DELTA
		 * value_type: INT64
		 * - name: library.googleapis.com/write_calls
		 * display_name: Write requests
		 * metric_kind: DELTA
		 * value_type: INT64
		 */
		quota?: Quota;

		/** Source information used to create a Service Config */
		sourceInfo?: SourceInfo;

		/**
		 * ### System parameter configuration
		 * A system parameter is a special kind of parameter defined by the API
		 * system, not by an individual API. It is typically mapped to an HTTP header
		 * and/or a URL query parameter. This configuration specifies which methods
		 * change the names of the system parameters.
		 */
		systemParameters?: SystemParameters;

		/**
		 * A list of all proto message types included in this API service.
		 * It serves similar purpose as [google.api.Service.types], except that
		 * these types are not needed by user-defined APIs. Therefore, they will not
		 * show up in the generated discovery doc. This field should only be used
		 * to define system APIs in ESF.
		 */
		systemTypes?: Array<Type>;

		/** The product title for this service. */
		title?: string;

		/**
		 * A list of all proto message types included in this API service.
		 * Types referenced directly or indirectly by the `apis` are
		 * automatically included.  Messages which are not referenced but
		 * shall be included, such as types used by the `google.protobuf.Any` type,
		 * should be listed here by name. Example:
		 * types:
		 * - name: google.protobuf.Int32
		 */
		types?: Array<Type>;

		/** Configuration controlling usage of a service. */
		usage?: Usage;
	}


	/**
	 * Defines the HTTP configuration for an API service. It contains a list of
	 * HttpRule, each specifying the mapping of an RPC method
	 * to one or more HTTP REST API methods.
	 */
	export interface Http {

		/**
		 * When set to true, URL path parameters will be fully URI-decoded except in
		 * cases of single segment matches in reserved expansion, where "%2F" will be
		 * left encoded.
		 * The default behavior is to not decode RFC 6570 reserved characters in multi
		 * segment matches.
		 */
		fullyDecodeReservedExpansion?: boolean;

		/**
		 * A list of HTTP configuration rules that apply to individual API methods.
		 * **NOTE:** All service configuration rules follow "last one wins" order.
		 */
		rules?: Array<HttpRule>;
	}


	/**
	 * # gRPC Transcoding
	 * gRPC Transcoding is a feature for mapping between a gRPC method and one or
	 * more HTTP REST endpoints. It allows developers to build a single API service
	 * that supports both gRPC APIs and REST APIs. Many systems, including [Google
	 * APIs](https://github.com/googleapis/googleapis),
	 * [Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC
	 * Gateway](https://github.com/grpc-ecosystem/grpc-gateway),
	 * and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature
	 * and use it for large scale production services.
	 * `HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies
	 * how different portions of the gRPC request message are mapped to the URL
	 * path, URL query parameters, and HTTP request body. It also controls how the
	 * gRPC response message is mapped to the HTTP response body. `HttpRule` is
	 * typically specified as an `google.api.http` annotation on the gRPC method.
	 * Each mapping specifies a URL path template and an HTTP method. The path
	 * template may refer to one or more fields in the gRPC request message, as long
	 * as each field is a non-repeated field with a primitive (non-message) type.
	 * The path template controls how fields of the request message are mapped to
	 * the URL path.
	 * Example:
	 *     service Messaging {
	 *       rpc GetMessage(GetMessageRequest) returns (Message) {
	 *         option (google.api.http) = {
	 *             get: "/v1/{name=messages/*}"
	 *         };
	 *       }
	 *     }
	 *     message GetMessageRequest {
	 *       string name = 1; // Mapped to URL path.
	 *     }
	 *     message Message {
	 *       string text = 1; // The resource content.
	 *     }
	 * This enables an HTTP REST to gRPC mapping as below:
	 * HTTP | gRPC
	 * -----|-----
	 * `GET /v1/messages/123456`  | `GetMessage(name: "messages/123456")`
	 * Any fields in the request message which are not bound by the path template
	 * automatically become HTTP query parameters if there is no HTTP request body.
	 * For example:
	 *     service Messaging {
	 *       rpc GetMessage(GetMessageRequest) returns (Message) {
	 *         option (google.api.http) = {
	 *             get:"/v1/messages/{message_id}"
	 *         };
	 *       }
	 *     }
	 *     message GetMessageRequest {
	 *       message SubMessage {
	 *         string subfield = 1;
	 *       }
	 *       string message_id = 1; // Mapped to URL path.
	 *       int64 revision = 2;    // Mapped to URL query parameter `revision`.
	 *       SubMessage sub = 3;    // Mapped to URL query parameter `sub.subfield`.
	 *     }
	 * This enables a HTTP JSON to RPC mapping as below:
	 * HTTP | gRPC
	 * -----|-----
	 * `GET /v1/messages/123456?revision=2&sub.subfield=foo` |
	 * `GetMessage(message_id: "123456" revision: 2 sub: SubMessage(subfield:
	 * "foo"))`
	 * Note that fields which are mapped to URL query parameters must have a
	 * primitive type or a repeated primitive type or a non-repeated message type.
	 * In the case of a repeated type, the parameter can be repeated in the URL
	 * as `...?param=A&param=B`. In the case of a message type, each field of the
	 * message is mapped to a separate parameter, such as
	 * `...?foo.a=A&foo.b=B&foo.c=C`.
	 * For HTTP methods that allow a request body, the `body` field
	 * specifies the mapping. Consider a REST update method on the
	 * message resource collection:
	 *     service Messaging {
	 *       rpc UpdateMessage(UpdateMessageRequest) returns (Message) {
	 *         option (google.api.http) = {
	 *           patch: "/v1/messages/{message_id}"
	 *           body: "message"
	 *         };
	 *       }
	 *     }
	 *     message UpdateMessageRequest {
	 *       string message_id = 1; // mapped to the URL
	 *       Message message = 2;   // mapped to the body
	 *     }
	 * The following HTTP JSON to RPC mapping is enabled, where the
	 * representation of the JSON in the request body is determined by
	 * protos JSON encoding:
	 * HTTP | gRPC
	 * -----|-----
	 * `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id:
	 * "123456" message { text: "Hi!" })`
	 * The special name `*` can be used in the body mapping to define that
	 * every field not bound by the path template should be mapped to the
	 * request body.  This enables the following alternative definition of
	 * the update method:
	 *     service Messaging {
	 *       rpc UpdateMessage(Message) returns (Message) {
	 *         option (google.api.http) = {
	 *           patch: "/v1/messages/{message_id}"
	 *           body: "*"
	 *         };
	 *       }
	 *     }
	 *     message Message {
	 *       string message_id = 1;
	 *       string text = 2;
	 *     }
	 * The following HTTP JSON to RPC mapping is enabled:
	 * HTTP | gRPC
	 * -----|-----
	 * `PATCH /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id:
	 * "123456" text: "Hi!")`
	 * Note that when using `*` in the body mapping, it is not possible to
	 * have HTTP parameters, as all fields not bound by the path end in
	 * the body. This makes this option more rarely used in practice when
	 * defining REST APIs. The common usage of `*` is in custom methods
	 * which don't use the URL at all for transferring data.
	 * It is possible to define multiple HTTP methods for one RPC by using
	 * the `additional_bindings` option. Example:
	 *     service Messaging {
	 *       rpc GetMessage(GetMessageRequest) returns (Message) {
	 *         option (google.api.http) = {
	 *           get: "/v1/messages/{message_id}"
	 *           additional_bindings {
	 *             get: "/v1/users/{user_id}/messages/{message_id}"
	 *           }
	 *         };
	 *       }
	 *     }
	 *     message GetMessageRequest {
	 *       string message_id = 1;
	 *       string user_id = 2;
	 *     }
	 * This enables the following two alternative HTTP JSON to RPC mappings:
	 * HTTP | gRPC
	 * -----|-----
	 * `GET /v1/messages/123456` | `GetMessage(message_id: "123456")`
	 * `GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id:
	 * "123456")`
	 * ## Rules for HTTP mapping
	 * 1. Leaf request fields (recursive expansion nested messages in the request
	 *    message) are classified into three categories:
	 *    - Fields referred by the path template. They are passed via the URL path.
	 *    - Fields referred by the HttpRule.body. They are passed via the HTTP
	 *      request body.
	 *    - All other fields are passed via the URL query parameters, and the
	 *      parameter name is the field path in the request message. A repeated
	 *      field can be represented as multiple query parameters under the same
	 *      name.
	 *  2. If HttpRule.body is "*", there is no URL query parameter, all fields
	 *     are passed via URL path and HTTP request body.
	 *  3. If HttpRule.body is omitted, there is no HTTP request body, all
	 *     fields are passed via URL path and URL query parameters.
	 * ### Path template syntax
	 *     Template = "/" Segments [ Verb ] ;
	 *     Segments = Segment { "/" Segment } ;
	 *     Segment  = "*" | "**" | LITERAL | Variable ;
	 *     Variable = "{" FieldPath [ "=" Segments ] "}" ;
	 *     FieldPath = IDENT { "." IDENT } ;
	 *     Verb     = ":" LITERAL ;
	 * The syntax `*` matches a single URL path segment. The syntax `**` matches
	 * zero or more URL path segments, which must be the last part of the URL path
	 * except the `Verb`.
	 * The syntax `Variable` matches part of the URL path as specified by its
	 * template. A variable template must not contain other variables. If a variable
	 * matches a single path segment, its template may be omitted, e.g. `{var}`
	 * is equivalent to `{var=*}`.
	 * The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL`
	 * contains any reserved character, such characters should be percent-encoded
	 * before the matching.
	 * If a variable contains exactly one path segment, such as `"{var}"` or
	 * `"{var=*}"`, when such a variable is expanded into a URL path on the client
	 * side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The
	 * server side does the reverse decoding. Such variables show up in the
	 * [Discovery
	 * Document](https://developers.google.com/discovery/v1/reference/apis) as
	 * `{var}`.
	 * If a variable contains multiple path segments, such as `"{var=foo/*}"`
	 * or `"{var=**}"`, when such a variable is expanded into a URL path on the
	 * client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded.
	 * The server side does the reverse decoding, except "%2F" and "%2f" are left
	 * unchanged. Such variables show up in the
	 * [Discovery
	 * Document](https://developers.google.com/discovery/v1/reference/apis) as
	 * `{+var}`.
	 * ## Using gRPC API Service Configuration
	 * gRPC API Service Configuration (service config) is a configuration language
	 * for configuring a gRPC service to become a user-facing product. The
	 * service config is simply the YAML representation of the `google.api.Service`
	 * proto message.
	 * As an alternative to annotating your proto file, you can configure gRPC
	 * transcoding in your service config YAML files. You do this by specifying a
	 * `HttpRule` that maps the gRPC method to a REST endpoint, achieving the same
	 * effect as the proto annotation. This can be particularly useful if you
	 * have a proto that is reused in multiple services. Note that any transcoding
	 * specified in the service config will override any matching transcoding
	 * configuration in the proto.
	 * Example:
	 *     http:
	 *       rules:
	 *         # Selects a gRPC method and applies HttpRule to it.
	 *         - selector: example.v1.Messaging.GetMessage
	 *           get: /v1/messages/{message_id}/{sub.subfield}
	 * ## Special notes
	 * When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the
	 * proto to JSON conversion must follow the [proto3
	 * specification](https://developers.google.com/protocol-buffers/docs/proto3#json).
	 * While the single segment variable follows the semantics of
	 * [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String
	 * Expansion, the multi segment variable **does not** follow RFC 6570 Section
	 * 3.2.3 Reserved Expansion. The reason is that the Reserved Expansion
	 * does not expand special characters like `?` and `#`, which would lead
	 * to invalid URLs. As the result, gRPC Transcoding uses a custom encoding
	 * for multi segment variables.
	 * The path variables **must not** refer to any repeated or mapped field,
	 * because client libraries are not capable of handling such variable expansion.
	 * The path variables **must not** capture the leading "/" character. The reason
	 * is that the most common use case "{var}" does not capture the leading "/"
	 * character. For consistency, all path variables must share the same behavior.
	 * Repeated message fields must not be mapped to URL query parameters, because
	 * no client library can support such complicated mapping.
	 * If an API needs to use a JSON array for request or response body, it can map
	 * the request or response body to a repeated field. However, some gRPC
	 * Transcoding implementations may not support this feature.
	 */
	export interface HttpRule {

		/**
		 * Additional HTTP bindings for the selector. Nested bindings must
		 * not contain an `additional_bindings` field themselves (that is,
		 * the nesting may only be one level deep).
		 */
		additionalBindings?: Array<HttpRule>;

		/**
		 * When this flag is set to true, HTTP requests will be allowed to invoke a
		 * half-duplex streaming method.
		 */
		allowHalfDuplex?: boolean;

		/**
		 * The name of the request field whose value is mapped to the HTTP request
		 * body, or `*` for mapping all request fields not captured by the path
		 * pattern to the HTTP body, or omitted for not having any HTTP request body.
		 * NOTE: the referred field must be present at the top-level of the request
		 * message type.
		 */
		body?: string;

		/** A custom pattern is used for defining custom HTTP verb. */
		custom?: CustomHttpPattern;

		/** Maps to HTTP DELETE. Used for deleting a resource. */
		delete?: string;

		/**
		 * Maps to HTTP GET. Used for listing and getting information about
		 * resources.
		 */
		get?: string;

		/** Maps to HTTP PATCH. Used for updating a resource. */
		patch?: string;

		/** Maps to HTTP POST. Used for creating a resource or performing an action. */
		post?: string;

		/** Maps to HTTP PUT. Used for replacing a resource. */
		put?: string;

		/**
		 * Optional. The name of the response field whose value is mapped to the HTTP
		 * response body. When omitted, the entire response message will be used
		 * as the HTTP response body.
		 * NOTE: The referred field must be present at the top-level of the response
		 * message type.
		 */
		responseBody?: string;

		/**
		 * Selects a method to which this rule applies.
		 * Refer to selector for syntax details.
		 */
		selector?: string;
	}


	/**
	 * Logging configuration of the service.
	 * The following example shows how to configure logs to be sent to the
	 * producer and consumer projects. In the example, the `activity_history`
	 * log is sent to both the producer and consumer projects, whereas the
	 * `purchase_history` log is only sent to the producer project.
	 *     monitored_resources:
	 *     - type: library.googleapis.com/branch
	 *       labels:
	 *       - key: /city
	 *         description: The city where the library branch is located in.
	 *       - key: /name
	 *         description: The name of the branch.
	 *     logs:
	 *     - name: activity_history
	 *       labels:
	 *       - key: /customer_id
	 *     - name: purchase_history
	 *     logging:
	 *       producer_destinations:
	 *       - monitored_resource: library.googleapis.com/branch
	 *         logs:
	 *         - activity_history
	 *         - purchase_history
	 *       consumer_destinations:
	 *       - monitored_resource: library.googleapis.com/branch
	 *         logs:
	 *         - activity_history
	 */
	export interface Logging {

		/**
		 * Logging configurations for sending logs to the consumer project.
		 * There can be multiple consumer destinations, each one must have a
		 * different monitored resource type. A log can be used in at most
		 * one consumer destination.
		 */
		consumerDestinations?: Array<LoggingDestination>;

		/**
		 * Logging configurations for sending logs to the producer project.
		 * There can be multiple producer destinations, each one must have a
		 * different monitored resource type. A log can be used in at most
		 * one producer destination.
		 */
		producerDestinations?: Array<LoggingDestination>;
	}


	/**
	 * Configuration of a specific logging destination (the producer project
	 * or the consumer project).
	 */
	export interface LoggingDestination {

		/**
		 * Names of the logs to be sent to this destination. Each name must
		 * be defined in the Service.logs section. If the log name is
		 * not a domain scoped name, it will be automatically prefixed with
		 * the service name followed by "/".
		 */
		logs?: Array<string>;

		/**
		 * The monitored resource type. The type must be defined in the
		 * Service.monitored_resources section.
		 */
		monitoredResource?: string;
	}


	/**
	 * A description of a log type. Example in YAML format:
	 *     - name: library.googleapis.com/activity_history
	 *       description: The history of borrowing and returning library items.
	 *       display_name: Activity
	 *       labels:
	 *       - key: /customer_id
	 *         description: Identifier of a library customer
	 */
	export interface LogDescriptor {

		/**
		 * A human-readable description of this log. This information appears in
		 * the documentation and can contain details.
		 */
		description?: string;

		/**
		 * The human-readable name for this log. This information appears on
		 * the user interface and should be concise.
		 */
		displayName?: string;

		/**
		 * The set of labels that are available to describe a specific log entry.
		 * Runtime requests that contain labels not specified here are
		 * considered invalid.
		 */
		labels?: Array<LabelDescriptor>;

		/**
		 * The name of the log. It must be less than 512 characters long and can
		 * include the following characters: upper- and lower-case alphanumeric
		 * characters [A-Za-z0-9], and punctuation characters including
		 * slash, underscore, hyphen, period [/_-.].
		 */
		name?: string;
	}


	/** A description of a label. */
	export interface LabelDescriptor {

		/** A human-readable description for the label. */
		description?: string;

		/** The label key. */
		key?: string;

		/** The type of data that can be assigned to the label. */
		valueType?: LabelDescriptorValueType;
	}

	export enum LabelDescriptorValueType { STRING = 0, BOOL = 1, INT64 = 2 }


	/**
	 * Defines a metric type and its schema. Once a metric descriptor is created,
	 * deleting or altering it stops data collection and makes the metric type's
	 * existing data unusable.
	 */
	export interface MetricDescriptor {

		/** A detailed description of the metric, which can be used in documentation. */
		description?: string;

		/**
		 * A concise name for the metric, which can be displayed in user interfaces.
		 * Use sentence case without an ending period, for example "Request count".
		 * This field is optional but it is recommended to be set for any metrics
		 * associated with user-visible concepts, such as Quota.
		 */
		displayName?: string;

		/**
		 * The set of labels that can be used to describe a specific
		 * instance of this metric type. For example, the
		 * `appengine.googleapis.com/http/server/response_latencies` metric
		 * type has a label for the HTTP response code, `response_code`, so
		 * you can look at latencies for successful responses or just
		 * for responses that failed.
		 */
		labels?: Array<LabelDescriptor>;

		/** Optional. The launch stage of the metric definition. */
		launchStage?: MetricDescriptorLaunchStage;

		/** Additional annotations that can be used to guide the usage of a metric. */
		metadata?: MetricDescriptorMetadata;

		/**
		 * Whether the metric records instantaneous values, changes to a value, etc.
		 * Some combinations of `metric_kind` and `value_type` might not be supported.
		 */
		metricKind?: MetricDescriptorMetricKind;

		/**
		 * Read-only. If present, then a time
		 * series, which is identified partially by
		 * a metric type and a MonitoredResourceDescriptor, that is associated
		 * with this metric type can only be associated with one of the monitored
		 * resource types listed here.
		 */
		monitoredResourceTypes?: Array<string>;

		/** The resource name of the metric descriptor. */
		name?: string;

		/**
		 * The metric type, including its DNS name prefix. The type is not
		 * URL-encoded.  All user-defined metric types have the DNS name
		 * `custom.googleapis.com` or `external.googleapis.com`.  Metric types should
		 * use a natural hierarchical grouping. For example:
		 * "custom.googleapis.com/invoice/paid/amount"
		 * "external.googleapis.com/prometheus/up"
		 * "appengine.googleapis.com/http/server/response_latencies"
		 */
		type?: string;

		/**
		 * The units in which the metric value is reported. It is only applicable
		 * if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The `unit`
		 * defines the representation of the stored metric values.
		 * Different systems may scale the values to be more easily displayed (so a
		 * value of `0.02KBy` _might_ be displayed as `20By`, and a value of
		 * `3523KBy` _might_ be displayed as `3.5MBy`). However, if the `unit` is
		 * `KBy`, then the value of the metric is always in thousands of bytes, no
		 * matter how it may be displayed..
		 * If you want a custom metric to record the exact number of CPU-seconds used
		 * by a job, you can create an `INT64 CUMULATIVE` metric whose `unit` is
		 * `s{CPU}` (or equivalently `1s{CPU}` or just `s`). If the job uses 12,005
		 * CPU-seconds, then the value is written as `12005`.
		 * Alternatively, if you want a custom metric to record data in a more
		 * granular way, you can create a `DOUBLE CUMULATIVE` metric whose `unit` is
		 * `ks{CPU}`, and then write the value `12.005` (which is `12005/1000`),
		 * or use `Kis{CPU}` and write `11.723` (which is `12005/1024`).
		 * The supported units are a subset of [The Unified Code for Units of
		 * Measure](http://unitsofmeasure.org/ucum.html) standard:
		 * **Basic units (UNIT)**
		 * * `bit`   bit
		 * * `By`    byte
		 * * `s`     second
		 * * `min`   minute
		 * * `h`     hour
		 * * `d`     day
		 * **Prefixes (PREFIX)**
		 * * `k`     kilo    (10^3)
		 * * `M`     mega    (10^6)
		 * * `G`     giga    (10^9)
		 * * `T`     tera    (10^12)
		 * * `P`     peta    (10^15)
		 * * `E`     exa     (10^18)
		 * * `Z`     zetta   (10^21)
		 * * `Y`     yotta   (10^24)
		 * * `m`     milli   (10^-3)
		 * * `u`     micro   (10^-6)
		 * * `n`     nano    (10^-9)
		 * * `p`     pico    (10^-12)
		 * * `f`     femto   (10^-15)
		 * * `a`     atto    (10^-18)
		 * * `z`     zepto   (10^-21)
		 * * `y`     yocto   (10^-24)
		 * * `Ki`    kibi    (2^10)
		 * * `Mi`    mebi    (2^20)
		 * * `Gi`    gibi    (2^30)
		 * * `Ti`    tebi    (2^40)
		 * * `Pi`    pebi    (2^50)
		 * **Grammar**
		 * The grammar also includes these connectors:
		 * * `/`    division or ratio (as an infix operator). For examples,
		 * `kBy/{email}` or `MiBy/10ms` (although you should almost never
		 * have `/s` in a metric `unit`; rates should always be computed at
		 * query time from the underlying cumulative or delta value).
		 * * `.`    multiplication or composition (as an infix operator). For
		 * examples, `GBy.d` or `k{watt}.h`.
		 * The grammar for a unit is as follows:
		 * Expression = Component { "." Component } { "/" Component } ;
		 * Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ]
		 * | Annotation
		 * | "1"
		 * ;
		 * Annotation = "{" NAME "}" ;
		 * Notes:
		 * * `Annotation` is just a comment if it follows a `UNIT`. If the annotation
		 * is used alone, then the unit is equivalent to `1`. For examples,
		 * `{request}/s == 1/s`, `By{transmitted}/s == By/s`.
		 * * `NAME` is a sequence of non-blank printable ASCII characters not
		 * containing `{` or `}`.
		 * * `1` represents a unitary [dimensionless
		 * unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such
		 * as in `1/s`. It is typically used when none of the basic units are
		 * appropriate. For example, "new users per day" can be represented as
		 * `1/d` or `{new-users}/d` (and a metric value `5` would mean "5 new
		 * users). Alternatively, "thousands of page views per day" would be
		 * represented as `1000/d` or `k1/d` or `k{page_views}/d` (and a metric
		 * value of `5.3` would mean "5300 page views per day").
		 * * `%` represents dimensionless value of 1/100, and annotates values giving
		 * a percentage (so the metric values are typically in the range of 0..100,
		 * and a metric value `3` means "3 percent").
		 * * `10^2.%` indicates a metric contains a ratio, typically in the range
		 * 0..1, that will be multiplied by 100 and displayed as a percentage
		 * (so a metric value `0.03` means "3 percent").
		 */
		unit?: string;

		/**
		 * Whether the measurement is an integer, a floating-point number, etc.
		 * Some combinations of `metric_kind` and `value_type` might not be supported.
		 */
		valueType?: MetricDescriptorValueType;
	}

	export enum MetricDescriptorLaunchStage { LAUNCH_STAGE_UNSPECIFIED = 0, UNIMPLEMENTED = 1, PRELAUNCH = 2, EARLY_ACCESS = 3, ALPHA = 4, BETA = 5, GA = 6, DEPRECATED = 7 }


	/** Additional annotations that can be used to guide the usage of a metric. */
	export interface MetricDescriptorMetadata {

		/**
		 * The delay of data points caused by ingestion. Data points older than this
		 * age are guaranteed to be ingested and available to be read, excluding
		 * data loss due to errors.
		 */
		ingestDelay?: string;

		/** Deprecated. Must use the MetricDescriptor.launch_stage instead. */
		launchStage?: MetricDescriptorLaunchStage;

		/**
		 * The sampling period of metric data points. For metrics which are written
		 * periodically, consecutive data points are stored at this time interval,
		 * excluding data loss due to errors. Metrics with a higher granularity have
		 * a smaller sampling period.
		 */
		samplePeriod?: string;
	}

	export enum MetricDescriptorMetricKind { METRIC_KIND_UNSPECIFIED = 0, GAUGE = 1, DELTA = 2, CUMULATIVE = 3 }

	export enum MetricDescriptorValueType { VALUE_TYPE_UNSPECIFIED = 0, BOOL = 1, INT64 = 2, DOUBLE = 3, STRING = 4, DISTRIBUTION = 5, MONEY = 6 }


	/**
	 * An object that describes the schema of a MonitoredResource object using a
	 * type name and a set of labels.  For example, the monitored resource
	 * descriptor for Google Compute Engine VM instances has a type of
	 * `"gce_instance"` and specifies the use of the labels `"instance_id"` and
	 * `"zone"` to identify particular VM instances.
	 * Different APIs can support different monitored resource types. APIs generally
	 * provide a `list` method that returns the monitored resource descriptors used
	 * by the API.
	 */
	export interface MonitoredResourceDescriptor {

		/**
		 * Optional. A detailed description of the monitored resource type that might
		 * be used in documentation.
		 */
		description?: string;

		/**
		 * Optional. A concise name for the monitored resource type that might be
		 * displayed in user interfaces. It should be a Title Cased Noun Phrase,
		 * without any article or other determiners. For example,
		 * `"Google Cloud SQL Database"`.
		 */
		displayName?: string;

		/**
		 * Required. A set of labels used to describe instances of this monitored
		 * resource type. For example, an individual Google Cloud SQL database is
		 * identified by values for the labels `"database_id"` and `"zone"`.
		 */
		labels?: Array<LabelDescriptor>;

		/** Optional. The launch stage of the monitored resource definition. */
		launchStage?: MetricDescriptorLaunchStage;

		/**
		 * Optional. The resource name of the monitored resource descriptor:
		 * `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where
		 * {type} is the value of the `type` field in this object and
		 * {project_id} is a project ID that provides API-specific context for
		 * accessing the type.  APIs that do not use project information can use the
		 * resource name format `"monitoredResourceDescriptors/{type}"`.
		 */
		name?: string;

		/**
		 * Required. The monitored resource type. For example, the type
		 * `"cloudsql_database"` represents databases in Google Cloud SQL.
		 * The maximum length of this value is 256 characters.
		 */
		type?: string;
	}


	/**
	 * Monitoring configuration of the service.
	 * The example below shows how to configure monitored resources and metrics
	 * for monitoring. In the example, a monitored resource and two metrics are
	 * defined. The `library.googleapis.com/book/returned_count` metric is sent
	 * to both producer and consumer projects, whereas the
	 * `library.googleapis.com/book/overdue_count` metric is only sent to the
	 * consumer project.
	 *     monitored_resources:
	 *     - type: library.googleapis.com/branch
	 *       labels:
	 *       - key: /city
	 *         description: The city where the library branch is located in.
	 *       - key: /name
	 *         description: The name of the branch.
	 *     metrics:
	 *     - name: library.googleapis.com/book/returned_count
	 *       metric_kind: DELTA
	 *       value_type: INT64
	 *       labels:
	 *       - key: /customer_id
	 *     - name: library.googleapis.com/book/overdue_count
	 *       metric_kind: GAUGE
	 *       value_type: INT64
	 *       labels:
	 *       - key: /customer_id
	 *     monitoring:
	 *       producer_destinations:
	 *       - monitored_resource: library.googleapis.com/branch
	 *         metrics:
	 *         - library.googleapis.com/book/returned_count
	 *       consumer_destinations:
	 *       - monitored_resource: library.googleapis.com/branch
	 *         metrics:
	 *         - library.googleapis.com/book/returned_count
	 *         - library.googleapis.com/book/overdue_count
	 */
	export interface Monitoring {

		/**
		 * Monitoring configurations for sending metrics to the consumer project.
		 * There can be multiple consumer destinations. A monitored resouce type may
		 * appear in multiple monitoring destinations if different aggregations are
		 * needed for different sets of metrics associated with that monitored
		 * resource type. A monitored resource and metric pair may only be used once
		 * in the Monitoring configuration.
		 */
		consumerDestinations?: Array<MonitoringDestination>;

		/**
		 * Monitoring configurations for sending metrics to the producer project.
		 * There can be multiple producer destinations. A monitored resouce type may
		 * appear in multiple monitoring destinations if different aggregations are
		 * needed for different sets of metrics associated with that monitored
		 * resource type. A monitored resource and metric pair may only be used once
		 * in the Monitoring configuration.
		 */
		producerDestinations?: Array<MonitoringDestination>;
	}


	/**
	 * Configuration of a specific monitoring destination (the producer project
	 * or the consumer project).
	 */
	export interface MonitoringDestination {

		/**
		 * Types of the metrics to report to this monitoring destination.
		 * Each type must be defined in Service.metrics section.
		 */
		metrics?: Array<string>;

		/**
		 * The monitored resource type. The type must be defined in
		 * Service.monitored_resources section.
		 */
		monitoredResource?: string;
	}


	/** Source information used to create a Service Config */
	export interface SourceInfo {

		/** All files used during config generation. */
		sourceFiles?: Array<string>;
	}


	/**
	 * ### System parameter configuration
	 * A system parameter is a special kind of parameter defined by the API
	 * system, not by an individual API. It is typically mapped to an HTTP header
	 * and/or a URL query parameter. This configuration specifies which methods
	 * change the names of the system parameters.
	 */
	export interface SystemParameters {

		/**
		 * Define system parameters.
		 * The parameters defined here will override the default parameters
		 * implemented by the system. If this field is missing from the service
		 * config, default system parameters will be used. Default system parameters
		 * and names is implementation-dependent.
		 * Example: define api key for all methods
		 * system_parameters
		 * rules:
		 * - selector: "*"
		 * parameters:
		 * - name: api_key
		 * url_query_parameter: api_key
		 * Example: define 2 api key names for a specific method.
		 * system_parameters
		 * rules:
		 * - selector: "/ListShelves"
		 * parameters:
		 * - name: api_key
		 * http_header: Api-Key1
		 * - name: api_key
		 * http_header: Api-Key2
		 * **NOTE:** All service configuration rules follow "last one wins" order.
		 */
		rules?: Array<SystemParameterRule>;
	}


	/**
	 * Define a system parameter rule mapping system parameter definitions to
	 * methods.
	 */
	export interface SystemParameterRule {

		/**
		 * Define parameters. Multiple names may be defined for a parameter.
		 * For a given method call, only one of them should be used. If multiple
		 * names are used the behavior is implementation-dependent.
		 * If none of the specified names are present the behavior is
		 * parameter-dependent.
		 */
		parameters?: Array<SystemParameter>;

		/**
		 * Selects the methods to which this rule applies. Use '*' to indicate all
		 * methods in all APIs.
		 * Refer to selector for syntax details.
		 */
		selector?: string;
	}


	/**
	 * Define a parameter's name and location. The parameter may be passed as either
	 * an HTTP header or a URL query parameter, and if both are passed the behavior
	 * is implementation-dependent.
	 */
	export interface SystemParameter {

		/**
		 * Define the HTTP header name to use for the parameter. It is case
		 * insensitive.
		 */
		httpHeader?: string;

		/** Define the name of the parameter, such as "api_key" . It is case sensitive. */
		name?: string;

		/**
		 * Define the URL query parameter name to use for the parameter. It is case
		 * sensitive.
		 */
		urlQueryParameter?: string;
	}


	/** A protocol buffer message type. */
	export interface Type {

		/** The list of fields. */
		fields?: Array<Field>;

		/** The fully qualified message name. */
		name?: string;

		/** The list of types appearing in `oneof` definitions in this type. */
		oneofs?: Array<string>;

		/** The protocol buffer options. */
		options?: Array<Option>;

		/**
		 * `SourceContext` represents information about the source of a
		 * protobuf element, like the file in which it is defined.
		 */
		sourceContext?: SourceContext;

		/** The source syntax. */
		syntax?: MethodSyntax;
	}


	/** The operation metadata returned for the batchend services operation. */
	export interface GoogleApiServiceusageV1OperationMetadata {

		/**
		 * The full name of the resources that this operation is directly
		 * associated with.
		 */
		resourceNames?: Array<string>;
	}


	/** Response message for getting service identity. */
	export interface GoogleApiServiceusageV1beta1GetServiceIdentityResponse {

		/**
		 * Service identity for a service. This is the identity that service producer
		 * should use to access consumer resources.
		 */
		identity?: GoogleApiServiceusageV1beta1ServiceIdentity;

		/** Service identity state. */
		state?: GetServiceIdentityResponseState;
	}


	/**
	 * Service identity for a service. This is the identity that service producer
	 * should use to access consumer resources.
	 */
	export interface GoogleApiServiceusageV1beta1ServiceIdentity {

		/**
		 * The email address of the service account that a service producer would use
		 * to access consumer resources.
		 */
		email?: string;

		/**
		 * The unique and stable id of the service account.
		 * https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts#ServiceAccount
		 */
		uniqueId?: string;
	}


	/** Response message for ImportAdminOverrides */
	export interface ImportAdminOverridesResponse {

		/** The overrides that were created from the imported data. */
		overrides?: Array<QuotaOverride>;
	}


	/** Response message for ImportConsumerOverrides */
	export interface ImportConsumerOverridesResponse {

		/** The overrides that were created from the imported data. */
		overrides?: Array<QuotaOverride>;
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


	/** Response message for the `ListServices` method. */
	export interface ListServicesResponse {

		/**
		 * Token that can be passed to `ListServices` to resume a paginated
		 * query.
		 */
		nextPageToken?: string;

		/** The available services for the requested project. */
		services?: Array<GoogleApiServiceusageV1Service>;
	}


	/** The operation metadata returned for the batchend services operation. */
	export interface OperationMetadata {

		/**
		 * The full name of the resources that this operation is directly
		 * associated with.
		 */
		resourceNames?: Array<string>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists operations that match the specified filter in the request. If the
		 * server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * NOTE: the `name` binding allows API services to override the binding
		 * to use different resource name schemes, such as `users/operations`. To
		 * override the binding, API services can add a binding such as
		 * `"/v1/{name=users/*}/operations"` to their service configuration.
		 * For backwards compatibility, the default name includes the operations
		 * collection id, however overriding users must ensure the name binding
		 * is the parent resource, without the operations collection id.
		 * Get v1/operations
		 * @param {string} filter The standard list filter.
		 * @param {string} name The name of the operation's parent resource.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Serviceusage_operations_list(filter: string, name: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/operations?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
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
		Serviceusage_operations_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the service configuration and enabled state for a given service.
		 * Get v1/{name}
		 * @param {string} name Name of the consumer and service to get the `ConsumerState` for.
		 * An example name would be:
		 * `projects/123/services/serviceusage.googleapis.com` where `123` is the
		 * project number.
		 * @return {void} Successful response
		 */
		Serviceusage_services_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
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
		Serviceusage_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable a service so that it can no longer be used with a project.
		 * This prevents unintended usage that may cause unexpected billing
		 * charges or security leaks.
		 * It is not valid to call the disable method on a service that is not
		 * currently enabled. Callers will receive a `FAILED_PRECONDITION` status if
		 * the target service is not currently enabled.
		 * Post v1/{name}:disable
		 * @param {string} name Name of the consumer and service to disable the service on.
		 * The enable and disable methods currently only support projects.
		 * An example name would be:
		 * `projects/123/services/serviceusage.googleapis.com` where `123` is the
		 * project number.
		 * @return {void} Successful response
		 */
		Serviceusage_services_disable(name: string, requestBody: DisableServiceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a service so that it can be used with a project.
		 * Post v1/{name}:enable
		 * @param {string} name Name of the consumer and service to enable the service on.
		 * The `EnableService` and `DisableService` methods currently only support
		 * projects.
		 * Enabling a service requires that the service is public or is shared with
		 * the user enabling the service.
		 * An example name would be:
		 * `projects/123/services/serviceusage.googleapis.com` where `123` is the
		 * project number.
		 * @return {void} Successful response
		 */
		Serviceusage_services_enable(name: string, requestBody: EnableServiceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all services available to the specified project, and the current
		 * state of those services with respect to the project. The list includes
		 * all public services, all services for which the calling user has the
		 * `servicemanagement.services.bind` permission, and all services that have
		 * already been enabled on the project. The list can be filtered to
		 * only include services in a specific state, for example to only include
		 * services enabled on the project.
		 * Get v1/{parent}/services
		 * @param {string} parent Parent to search for services on.
		 * An example name would be:
		 * `projects/123` where `123` is the project number.
		 * @param {string} filter Only list services that conform to the given filter.
		 * The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
		 * @param {number} pageSize Requested size of the next page of data.
		 * Requested page size cannot exceed 200.
		 *  If not set, the default page size is 50.
		 * @param {string} pageToken Token identifying which result to start with, which is returned by a
		 * previous list call.
		 * @return {void} Successful response
		 */
		Serviceusage_services_list(parent: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable multiple services on a project. The operation is atomic: if enabling
		 * any service fails, then the entire batch fails, and no state changes occur.
		 * To enable a single service, use the `EnableService` method instead.
		 * Post v1/{parent}/services:batchEnable
		 * @param {string} parent Parent to enable services on.
		 * An example name would be:
		 * `projects/123` where `123` is the project number.
		 * The `BatchEnableServices` method currently only supports projects.
		 * @return {void} Successful response
		 */
		Serviceusage_services_batchEnable(parent: string, requestBody: BatchEnableServicesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services:batchEnable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the service configurations and enabled states for a given list of
		 * services.
		 * Get v1/{parent}/services:batchGet
		 * @param {string} parent Parent to retrieve services from.
		 * If this is set, the parent of all of the services specified in `names` must
		 * match this field. An example name would be: `projects/123` where `123` is
		 * the project number. The `BatchGetServices` method currently only supports
		 * projects.
		 * @param {Array<string>} names Names of the services to retrieve.
		 * An example name would be:
		 * `projects/123/services/serviceusage.googleapis.com` where `123` is the
		 * project number.
		 * A single request can get a maximum of 20 services at a time.
		 * @return {void} Successful response
		 */
		Serviceusage_services_batchGet(parent: string, names: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services:batchGet&' + names.map(z => `names=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

}

