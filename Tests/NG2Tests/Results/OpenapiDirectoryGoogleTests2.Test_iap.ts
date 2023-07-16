import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Custom content configuration for access denied page.
	 * IAP allows customers to define a custom URI to use as the error page when
	 * access is denied to users. If IAP prevents access to this page, the default
	 * IAP error page will be displayed instead.
	 */
	export interface AccessDeniedPageSettings {

		/** The URI to be redirected to when access is denied. */
		accessDeniedPageUri?: string;
	}


	/** Access related settings for IAP protected apps. */
	export interface AccessSettings {

		/**
		 * Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS
		 * call to bypass authentication and authorization.
		 */
		corsSettings?: CorsSettings;

		/** Allows customers to configure tenant_id for GCIP instance per-app. */
		gcipSettings?: GcipSettings;

		/**
		 * Configuration for OAuth login&consent flow behavior as well as for OAuth
		 * Credentials.
		 */
		oauthSettings?: OAuthSettings;

		/**
		 * PolicyDelegationConfig allows google-internal teams to use IAP for apps
		 * hosted in a tenant project. Using these settings, the app can delegate
		 * permission check to happen against the linked customer project.
		 * This is only ever supposed to be used by google internal teams, hence the
		 * restriction on the proto.
		 */
		policyDelegationSettings?: PolicyDelegationSettings;
	}


	/**
	 * Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS
	 * call to bypass authentication and authorization.
	 */
	export interface CorsSettings {

		/**
		 * Configuration to allow HTTP OPTIONS calls to skip authorization. If
		 * undefined, IAP will not apply any special logic to OPTIONS requests.
		 */
		allowHttpOptions?: boolean;
	}


	/** Allows customers to configure tenant_id for GCIP instance per-app. */
	export interface GcipSettings {

		/**
		 * Login page URI associated with the GCIP tenants.
		 * Typically, all resources within the same project share the same login page,
		 * though it could be overridden at the sub resource level.
		 */
		loginPageUri?: string;

		/**
		 * GCIP tenant ids that are linked to the IAP resource.
		 * tenant_ids could be a string beginning with a number character to indicate
		 * authenticating with GCIP tenant flow, or in the format of _<ProjectNumber>
		 * to indicate authenticating with GCIP agent flow.
		 * If agent flow is used, tenant_ids should only contain one single element,
		 * while for tenant flow, tenant_ids can contain multiple elements.
		 */
		tenantIds?: Array<string>;
	}


	/**
	 * Configuration for OAuth login&consent flow behavior as well as for OAuth
	 * Credentials.
	 */
	export interface OAuthSettings {

		/**
		 * OAuth 2.0 client ID used in the OAuth flow to generate an access token. If
		 * this field is set, you can skip obtaining the OAuth credentials in this
		 * step:
		 * https://developers.google.com/identity/protocols/OAuth2?hl=en_US#1.-obtain-oauth-2.0-credentials-from-the-google-api-console.
		 * However, this could allow for client sharing. The risks of client sharing
		 * are outlined here:
		 * https://cloud.google.com/iap/docs/sharing-oauth-clients#risks.
		 */
		clientId?: string;

		/**
		 * Domain hint to send as hd=? parameter in OAuth request flow. Enables
		 * redirect to primary IDP by skipping Google's login screen.
		 * https://developers.google.com/identity/protocols/OpenIDConnect#hd-param
		 * Note: IAP does not verify that the id token's hd claim matches this value
		 * since access behavior is managed by IAM policies.
		 */
		loginHint?: string;
	}


	/**
	 * PolicyDelegationConfig allows google-internal teams to use IAP for apps
	 * hosted in a tenant project. Using these settings, the app can delegate
	 * permission check to happen against the linked customer project.
	 * This is only ever supposed to be used by google internal teams, hence the
	 * restriction on the proto.
	 */
	export interface PolicyDelegationSettings {

		/** Permission to check in IAM. */
		iamPermission?: string;

		/**
		 * The DNS name of the service (e.g. "resourcemanager.googleapis.com").
		 * This should be the domain name part of the full resource names (see
		 * https://aip.dev/122#full-resource-names), which is usually
		 * the same as IamServiceSpec.service of the service where the resource type
		 * is defined.
		 */
		iamServiceName?: string;
		policyName?: PolicyName;
		resource?: Resource;
	}

	export interface PolicyName {
		id?: string;

		/**
		 * For Cloud IAM:
		 * The location of the Policy.
		 * Must be empty or "global" for Policies owned by global IAM.  Must name a
		 * region from prodspec/cloud-iam-cloudspec for Regional IAM Policies, see
		 * http://go/iam-faq#where-is-iam-currently-deployed.
		 * For Local IAM:
		 * This field should be set to "local".
		 */
		region?: string;

		/** Valid values for type might be 'gce', 'gcs', 'project', 'account' etc. */
		type?: string;
	}

	export interface Resource {

		/**
		 * The service defined labels of the resource on which the conditions will be
		 * evaluated. The semantics - including the key names - are vague to IAM.
		 * If the effective condition has a reference to a `resource.labels[foo]`
		 * construct, IAM consults with this map to retrieve the values associated
		 * with `foo` key for Conditions evaluation. If the provided key is not found
		 * in the labels map, the condition would evaluate to false.
		 * This field is in limited use. If your intended use case is not expected
		 * to express resource.labels attribute in IAM Conditions, leave this field
		 * empty. Before planning on using this attribute please:
		 * * Read go/iam-conditions-labels-comm and ensure your service can meet the
		 * data availability and management requirements.
		 * * Talk to iam-conditions-eng@ about your use case.
		 */
		labels?: {[id: string]: string };

		/**
		 * Name of the resource on which conditions will be evaluated.
		 * Must use the Relative Resource Name of the resource, which is the URI
		 * path of the resource without the leading "/". Examples are
		 * "projects/_/buckets/[BUCKET-ID]" for storage buckets or
		 * "projects/[PROJECT-ID]/global/firewalls/[FIREWALL-ID]" for a firewall.
		 * This field is required for evaluating conditions with rules on resource
		 * names. For a `list` permission check, the resource.name value must be set
		 * to the parent resource. If the parent resource is a project, this field
		 * should be left unset.
		 */
		name?: string;

		/**
		 * The name of the service this resource belongs to. It is configured using
		 * the official_service_name of the Service as defined in service
		 * configurations under //configs/cloud/resourcetypes.
		 * For example, the official_service_name of cloud resource manager service
		 * is set as 'cloudresourcemanager.googleapis.com' according to
		 * //configs/cloud/resourcetypes/google/cloud/resourcemanager/prod.yaml
		 */
		service?: string;

		/**
		 * The public resource type name of the resource on which conditions will be
		 * evaluated. It is configured using the official_name of the ResourceType as
		 * defined in service configurations under //configs/cloud/resourcetypes.
		 * For example, the official_name for GCP projects is set as
		 * 'cloudresourcemanager.googleapis.com/Project' according to
		 * //configs/cloud/resourcetypes/google/cloud/resourcemanager/prod.yaml
		 * For details see go/iam-conditions-integration-guide.
		 */
		type?: string;
	}


	/** Wrapper over application specific settings for IAP. */
	export interface ApplicationSettings {

		/**
		 * Custom content configuration for access denied page.
		 * IAP allows customers to define a custom URI to use as the error page when
		 * access is denied to users. If IAP prevents access to this page, the default
		 * IAP error page will be displayed instead.
		 */
		accessDeniedPageSettings?: AccessDeniedPageSettings;

		/**
		 * Configuration for RCTokens generated for CSM workloads protected by IAP.
		 * RCTokens are IAP generated JWTs that can be verified at the application. The
		 * RCToken is primarily used for ISTIO deployments, and can be scoped to a
		 * single mesh by configuring the audience field accordingly
		 */
		csmSettings?: CsmSettings;
	}


	/**
	 * Configuration for RCTokens generated for CSM workloads protected by IAP.
	 * RCTokens are IAP generated JWTs that can be verified at the application. The
	 * RCToken is primarily used for ISTIO deployments, and can be scoped to a
	 * single mesh by configuring the audience field accordingly
	 */
	export interface CsmSettings {

		/**
		 * Audience claim set in the generated RCToken. This value is not validated by
		 * IAP.
		 */
		rctokenAud?: string;
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
	 * OAuth brand data.
	 * NOTE: Only contains a portion of the data that describes a brand.
	 */
	export interface Brand {

		/** Application name displayed on OAuth consent screen. */
		applicationTitle?: string;

		/**
		 * Output only. Identifier of the brand.
		 * NOTE: GCP project number achieves the same brand identification purpose as
		 * only one brand per project can be created.
		 */
		name?: string;

		/**
		 * Output only. Whether the brand is only intended for usage inside the
		 * GSuite organization only.
		 */
		orgInternalOnly?: boolean;

		/** Support email displayed on the OAuth consent screen. */
		supportEmail?: string;
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


	/** The IAP configurable settings. */
	export interface IapSettings {

		/** Access related settings for IAP protected apps. */
		accessSettings?: AccessSettings;

		/** Wrapper over application specific settings for IAP. */
		applicationSettings?: ApplicationSettings;

		/** Required. The resource name of the IAP protected resource. */
		name?: string;
	}


	/** Contains the data that describes an Identity Aware Proxy owned client. */
	export interface IdentityAwareProxyClient {

		/** Human-friendly name given to the OAuth client. */
		displayName?: string;

		/** Output only. Unique identifier of the OAuth client. */
		name?: string;

		/** Output only. Client secret of the OAuth client. */
		secret?: string;
	}


	/** Response message for ListBrands. */
	export interface ListBrandsResponse {

		/** Brands existing in the project. */
		brands?: Array<Brand>;
	}


	/** Response message for ListIdentityAwareProxyClients. */
	export interface ListIdentityAwareProxyClientsResponse {

		/** Clients existing in the brand. */
		identityAwareProxyClients?: Array<IdentityAwareProxyClient>;

		/**
		 * A token, which can be send as `page_token` to retrieve the next page.
		 * If this field is omitted, there are no subsequent pages.
		 */
		nextPageToken?: string;
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


	/** The request sent to ResetIdentityAwareProxyClientSecret. */
	export interface ResetIdentityAwareProxyClientSecretRequest {
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
		 * Deletes an Identity Aware Proxy (IAP) OAuth client. Useful for removing
		 * obsolete clients, managing the number of clients in a given project, and
		 * cleaning up after tests. Requires that the client is owned by IAP.
		 * Delete v1/{name}
		 * @param {string} name Required. Name of the Identity Aware Proxy client to be deleted.
		 * In the following format:
		 * projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
		 * @return {void} Successful response
		 */
		Iap_projects_brands_identityAwareProxyClients_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an Identity Aware Proxy (IAP) OAuth client.
		 * Requires that the client is owned by IAP.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the Identity Aware Proxy client to be fetched.
		 * In the following format:
		 * projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
		 * @return {void} Successful response
		 */
		Iap_projects_brands_identityAwareProxyClients_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the IAP settings on a particular IAP protected resource.
		 * Get v1/{name}:iapSettings
		 * @param {string} name Required. The resource name for which to retrieve the settings.
		 * Authorization: Requires the `getSettings` permission for the associated
		 * resource.
		 * @return {void} Successful response
		 */
		Iap_getIapSettings(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':iapSettings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the IAP settings on a particular IAP protected resource. It
		 * replaces all fields unless the `update_mask` is set.
		 * Patch v1/{name}:iapSettings
		 * @param {string} name Required. The resource name of the IAP protected resource.
		 * @param {string} updateMask The field mask specifying which IAP settings should be updated.
		 * If omitted, the all of the settings are updated. See
		 * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * @return {void} Successful response
		 */
		Iap_updateIapSettings(name: string, updateMask: string, requestBody: IapSettings): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':iapSettings&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the
		 * secret was compromised. Requires that the client is owned by IAP.
		 * Post v1/{name}:resetSecret
		 * @param {string} name Required. Name of the Identity Aware Proxy client to that will have its
		 * secret reset. In the following format:
		 * projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
		 * @return {void} Successful response
		 */
		Iap_projects_brands_identityAwareProxyClients_resetSecret(name: string, requestBody: ResetIdentityAwareProxyClientSecretRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':resetSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the existing brands for the project.
		 * Get v1/{parent}/brands
		 * @param {string} parent Required. GCP Project number/id.
		 * In the following format: projects/{project_number/id}.
		 * @return {void} Successful response
		 */
		Iap_projects_brands_list(parent: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/brands', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Constructs a new OAuth brand for the project if one does not exist.
		 * The created brand is "internal only", meaning that OAuth clients created
		 * under it only accept requests from users who belong to the same G Suite
		 * organization as the project. The brand is created in an un-reviewed status.
		 * NOTE: The "internal only" status can be manually changed in the Google
		 * Cloud console. Requires that a brand does not already exist for the
		 * project, and that the specified support email is owned by the caller.
		 * Post v1/{parent}/brands
		 * @param {string} parent Required. GCP Project number/id under which the brand is to be created.
		 * In the following format: projects/{project_number/id}.
		 * @return {void} Successful response
		 */
		Iap_projects_brands_create(parent: string, requestBody: Brand): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/brands', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the existing clients for the brand.
		 * Get v1/{parent}/identityAwareProxyClients
		 * @param {string} parent Required. Full brand path.
		 * In the following format: projects/{project_number/id}/brands/{brand}.
		 * @param {number} pageSize The maximum number of clients to return. The service may return fewer than
		 * this value.
		 * If unspecified, at most 100 clients will be returned.
		 * The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListIdentityAwareProxyClients`
		 * call. Provide this to retrieve the subsequent page.
		 * When paginating, all other parameters provided to
		 * `ListIdentityAwareProxyClients` must match the call that provided the page
		 * token.
		 * @return {void} Successful response
		 */
		Iap_projects_brands_identityAwareProxyClients_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/identityAwareProxyClients&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned
		 * by IAP. Requires that the brand for the project exists and that it is
		 * set for internal-only use.
		 * Post v1/{parent}/identityAwareProxyClients
		 * @param {string} parent Required. Path to create the client in.
		 * In the following format:
		 * projects/{project_number/id}/brands/{brand}.
		 * The project must belong to a GSuite account.
		 * @return {void} Successful response
		 */
		Iap_projects_brands_identityAwareProxyClients_create(parent: string, requestBody: IdentityAwareProxyClient): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/identityAwareProxyClients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for an Identity-Aware Proxy protected
		 * resource.
		 * More information about managing access via IAP can be found at:
		 * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Iap_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy for an Identity-Aware Proxy protected
		 * resource. Replaces any existing policy.
		 * More information about managing access via IAP can be found at:
		 * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Iap_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on the Identity-Aware Proxy protected
		 * resource.
		 * More information about managing access via IAP can be found at:
		 * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Iap_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

