import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: GoogleTypeExpr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1BindingFormGroup() {
		return new FormGroup<GoogleIamV1BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleTypeExpr {

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
	export interface GoogleTypeExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeExprFormGroup() {
		return new FormGroup<GoogleTypeExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources. */
	export interface GoogleIdentityStsV1AccessBoundary {

		/** A list of access boundary rules which defines the upper bound of the permission a principal may carry. If multiple rules are specified, the effective access boundary is the union of all the access boundary rules attached. One access boundary can contain at most 10 rules. */
		accessBoundaryRules?: Array<GoogleIdentityStsV1AccessBoundaryRule>;
	}

	/** An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources. */
	export interface GoogleIdentityStsV1AccessBoundaryFormProperties {
	}
	export function CreateGoogleIdentityStsV1AccessBoundaryFormGroup() {
		return new FormGroup<GoogleIdentityStsV1AccessBoundaryFormProperties>({
		});

	}


	/** An access boundary rule defines an upper bound of IAM permissions on a single resource. */
	export interface GoogleIdentityStsV1AccessBoundaryRule {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		availabilityCondition?: GoogleTypeExpr;

		/** A list of permissions that may be allowed for use on the specified resource. The only supported values in the list are IAM roles, following the format of google.iam.v1.Binding.role. Example value: `inRole:roles/logging.viewer` for predefined roles and `inRole:organizations/{ORGANIZATION_ID}/roles/logging.viewer` for custom roles. */
		availablePermissions?: Array<string>;

		/** The full resource name of a Google Cloud resource entity. The format definition is at https://cloud.google.com/apis/design/resource_names. Example value: `//cloudresourcemanager.googleapis.com/projects/my-project`. */
		availableResource?: string | null;
	}

	/** An access boundary rule defines an upper bound of IAM permissions on a single resource. */
	export interface GoogleIdentityStsV1AccessBoundaryRuleFormProperties {

		/** The full resource name of a Google Cloud resource entity. The format definition is at https://cloud.google.com/apis/design/resource_names. Example value: `//cloudresourcemanager.googleapis.com/projects/my-project`. */
		availableResource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityStsV1AccessBoundaryRuleFormGroup() {
		return new FormGroup<GoogleIdentityStsV1AccessBoundaryRuleFormProperties>({
			availableResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ExchangeOauthToken */
	export interface GoogleIdentityStsV1ExchangeOauthTokenRequest {

		/** Optional. The client identifier for the OAuth 2.0 client that requested the provided token. It is REQUIRED when the [client] (https://www.rfc-editor.org/rfc/rfc6749#section-1.1) is not authenticating with the authorization server, i.e. when authentication method is [client authentication] (https://www.rfc-editor.org/rfc/rfc6749#section-3.2.1). */
		clientId?: string | null;

		/** Optional. The authorization code that was previously from workforce identity federation's `authorize` endpoint. Required if the flow is authorization code flow, i.e. if grant_type is 'authorization_code' */
		code?: string | null;

		/** Optional. The code verifier for the PKCE request, Google Cloud CLI originally generates it before the authorization request. PKCE is used to protect authorization code from interception attacks. See https://www.rfc-editor.org/rfc/rfc7636#section-1.1 and https://www.rfc-editor.org/rfc/rfc7636#section-3. It is required when the flow is authorization code flow, i.e. if grant_type is 'authorization_code' */
		codeVerifier?: string | null;

		/** Required. The grant types are as follows: - 'authorization_code' : an authorization code flow, i.e. exchange of authorization code for the Oauth access token - 'refresh_token' : a refresh token flow, i.e. obtain a new access token by providing the refresh token. See https://www.rfc-editor.org/rfc/rfc6749#section-6 */
		grantType?: string | null;

		/** Optional. redirect_url is required when the flow is authorization code flow i.e. if grant_type is `authorization_code` See https://www.rfc-editor.org/rfc/rfc6749#section-4.1.3 */
		redirectUri?: string | null;

		/** Optional. The Refresh token is the credential that is used to obtain a new access token when the current access token becomes invalid or expires. Required when using refresh token flow, i.e. if `grant_type` is 'refresh_token' See https://www.rfc-editor.org/rfc/rfc6749#section-1.5 and https://www.rfc-editor.org/rfc/rfc6749#section-6 */
		refreshToken?: string | null;

		/** Optional. An optional list of scopes that are requested for the token to be returned. See https://www.rfc-editor.org/rfc/rfc6749#section-3.3 Must be a list of space-delimited, case-sensitive strings. Note: Currently, the scopes in the request are not supported */
		scope?: string | null;
	}

	/** Request message for ExchangeOauthToken */
	export interface GoogleIdentityStsV1ExchangeOauthTokenRequestFormProperties {

		/** Optional. The client identifier for the OAuth 2.0 client that requested the provided token. It is REQUIRED when the [client] (https://www.rfc-editor.org/rfc/rfc6749#section-1.1) is not authenticating with the authorization server, i.e. when authentication method is [client authentication] (https://www.rfc-editor.org/rfc/rfc6749#section-3.2.1). */
		clientId: FormControl<string | null | undefined>,

		/** Optional. The authorization code that was previously from workforce identity federation's `authorize` endpoint. Required if the flow is authorization code flow, i.e. if grant_type is 'authorization_code' */
		code: FormControl<string | null | undefined>,

		/** Optional. The code verifier for the PKCE request, Google Cloud CLI originally generates it before the authorization request. PKCE is used to protect authorization code from interception attacks. See https://www.rfc-editor.org/rfc/rfc7636#section-1.1 and https://www.rfc-editor.org/rfc/rfc7636#section-3. It is required when the flow is authorization code flow, i.e. if grant_type is 'authorization_code' */
		codeVerifier: FormControl<string | null | undefined>,

		/** Required. The grant types are as follows: - 'authorization_code' : an authorization code flow, i.e. exchange of authorization code for the Oauth access token - 'refresh_token' : a refresh token flow, i.e. obtain a new access token by providing the refresh token. See https://www.rfc-editor.org/rfc/rfc6749#section-6 */
		grantType: FormControl<string | null | undefined>,

		/** Optional. redirect_url is required when the flow is authorization code flow i.e. if grant_type is `authorization_code` See https://www.rfc-editor.org/rfc/rfc6749#section-4.1.3 */
		redirectUri: FormControl<string | null | undefined>,

		/** Optional. The Refresh token is the credential that is used to obtain a new access token when the current access token becomes invalid or expires. Required when using refresh token flow, i.e. if `grant_type` is 'refresh_token' See https://www.rfc-editor.org/rfc/rfc6749#section-1.5 and https://www.rfc-editor.org/rfc/rfc6749#section-6 */
		refreshToken: FormControl<string | null | undefined>,

		/** Optional. An optional list of scopes that are requested for the token to be returned. See https://www.rfc-editor.org/rfc/rfc6749#section-3.3 Must be a list of space-delimited, case-sensitive strings. Note: Currently, the scopes in the request are not supported */
		scope: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityStsV1ExchangeOauthTokenRequestFormGroup() {
		return new FormGroup<GoogleIdentityStsV1ExchangeOauthTokenRequestFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			codeVerifier: new FormControl<string | null | undefined>(undefined),
			grantType: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ExchangeOauthToken. see https://www.rfc-editor.org/rfc/rfc6749#section-5.1 */
	export interface GoogleIdentityStsV1ExchangeOauthTokenResponse {

		/** An OAuth 2.0 security token, issued by Google, in response to the Oauth token exchange request for the authorization code and refresh token flows. The returned [access token](https://www.rfc-editor.org/rfc/rfc6749#section-4.1.4). Tokens can vary in size, depending, in part, on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time. */
		access_token?: string | null;

		/** The amount of time, in seconds, between the time when the access token was issued and the time when the access token will expires. */
		expires_in?: number | null;

		/** Google issued ID token in response to the OAuth token exchange request for ID token flow. */
		id_token?: string | null;

		/** A refresh token, issued by Google, in response to the OAuth token exchange request for refresh token flow */
		refresh_token?: string | null;

		/** A list of scopes associated with the returned token. */
		scope?: string | null;

		/** The type of token. Field reserved for RFC compliance. See https://www.rfc-editor.org/rfc/rfc6749#section-5.1 */
		token_type?: string | null;
	}

	/** Response message for ExchangeOauthToken. see https://www.rfc-editor.org/rfc/rfc6749#section-5.1 */
	export interface GoogleIdentityStsV1ExchangeOauthTokenResponseFormProperties {

		/** An OAuth 2.0 security token, issued by Google, in response to the Oauth token exchange request for the authorization code and refresh token flows. The returned [access token](https://www.rfc-editor.org/rfc/rfc6749#section-4.1.4). Tokens can vary in size, depending, in part, on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time. */
		access_token: FormControl<string | null | undefined>,

		/** The amount of time, in seconds, between the time when the access token was issued and the time when the access token will expires. */
		expires_in: FormControl<number | null | undefined>,

		/** Google issued ID token in response to the OAuth token exchange request for ID token flow. */
		id_token: FormControl<string | null | undefined>,

		/** A refresh token, issued by Google, in response to the OAuth token exchange request for refresh token flow */
		refresh_token: FormControl<string | null | undefined>,

		/** A list of scopes associated with the returned token. */
		scope: FormControl<string | null | undefined>,

		/** The type of token. Field reserved for RFC compliance. See https://www.rfc-editor.org/rfc/rfc6749#section-5.1 */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityStsV1ExchangeOauthTokenResponseFormGroup() {
		return new FormGroup<GoogleIdentityStsV1ExchangeOauthTokenResponseFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			id_token: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ExchangeToken. */
	export interface GoogleIdentityStsV1ExchangeTokenRequest {

		/** The full resource name of the identity provider; for example: `//iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/` for workload identity pool providers, or `//iam.googleapis.com/locations/global/workforcePools//providers/` for workforce pool providers. Required when exchanging an external credential for a Google access token. */
		audience?: string | null;

		/** Required. The grant type. Must be `urn:ietf:params:oauth:grant-type:token-exchange`, which indicates a token exchange. */
		grantType?: string | null;

		/** A set of features that Security Token Service supports, in addition to the standard OAuth 2.0 token exchange, formatted as a serialized JSON object of Options. The size of the parameter value must not exceed 4096 characters. */
		options?: string | null;

		/** Required. An identifier for the type of requested security token. Must be `urn:ietf:params:oauth:token-type:access_token`. */
		requestedTokenType?: string | null;

		/** The OAuth 2.0 scopes to include on the resulting access token, formatted as a list of space-delimited, case-sensitive strings. Required when exchanging an external credential for a Google access token. */
		scope?: string | null;

		/** Required. The input token. This token is either an external credential issued by a workload identity pool provider, or a short-lived access token issued by Google. If the token is an OIDC JWT, it must use the JWT format defined in [RFC 7523](https://tools.ietf.org/html/rfc7523), and the `subject_token_type` must be either `urn:ietf:params:oauth:token-type:jwt` or `urn:ietf:params:oauth:token-type:id_token`. The following headers are required: - `kid`: The identifier of the signing key securing the JWT. - `alg`: The cryptographic algorithm securing the JWT. Must be `RS256` or `ES256`. The following payload fields are required. For more information, see [RFC 7523, Section 3](https://tools.ietf.org/html/rfc7523#section-3): - `iss`: The issuer of the token. The issuer must provide a discovery document at the URL `/.well-known/openid-configuration`, where `` is the value of this field. The document must be formatted according to section 4.2 of the [OIDC 1.0 Discovery specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse). - `iat`: The issue time, in seconds, since the Unix epoch. Must be in the past. - `exp`: The expiration time, in seconds, since the Unix epoch. Must be less than 48 hours after `iat`. Shorter expiration times are more secure. If possible, we recommend setting an expiration time less than 6 hours. - `sub`: The identity asserted in the JWT. - `aud`: For workload identity pools, this must be a value specified in the allowed audiences for the workload identity pool provider, or one of the audiences allowed by default if no audiences were specified. See https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools.providers#oidc. For workforce pools, this must match the client ID specified in the provider configuration. See https://cloud.google.com/iam/docs/reference/rest/v1/locations.workforcePools.providers#oidc. Example header: ``` { "alg": "RS256", "kid": "us-east-11" } ``` Example payload: ``` { "iss": "https://accounts.google.com", "iat": 1517963104, "exp": 1517966704, "aud": "//iam.googleapis.com/projects/1234567890123/locations/global/workloadIdentityPools/my-pool/providers/my-provider", "sub": "113475438248934895348", "my_claims": { "additional_claim": "value" } } ``` If `subject_token` is for AWS, it must be a serialized `GetCallerIdentity` token. This token contains the same information as a request to the AWS [`GetCallerIdentity()`](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity) method, as well as the AWS [signature](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) for the request information. Use Signature Version 4. Format the request as URL-encoded JSON, and set the `subject_token_type` parameter to `urn:ietf:params:aws:token-type:aws4_request`. The following parameters are required: - `url`: The URL of the AWS STS endpoint for `GetCallerIdentity()`, such as `https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15`. Regional endpoints are also supported. - `method`: The HTTP request method: `POST`. - `headers`: The HTTP request headers, which must include: - `Authorization`: The request signature. - `x-amz-date`: The time you will send the request, formatted as an [ISO8601 Basic](https://docs.aws.amazon.com/general/latest/gr/sigv4_elements.html#sigv4_elements_date) string. This value is typically set to the current time and is used to help prevent replay attacks. - `host`: The hostname of the `url` field; for example, `sts.amazonaws.com`. - `x-goog-cloud-target-resource`: The full, canonical resource name of the workload identity pool provider, with or without an `https:` prefix. To help ensure data integrity, we recommend including this header in the `SignedHeaders` field of the signed request. For example: //iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/ https://iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/ If you are using temporary security credentials provided by AWS, you must also include the header `x-amz-security-token`, with the value set to the session token. The following example shows a `GetCallerIdentity` token: ``` { "headers": [ {"key": "x-amz-date", "value": "20200815T015049Z"}, {"key": "Authorization", "value": "AWS4-HMAC-SHA256+Credential=$credential,+SignedHeaders=host;x-amz-date;x-goog-cloud-target-resource,+Signature=$signature"}, {"key": "x-goog-cloud-target-resource", "value": "//iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/"}, {"key": "host", "value": "sts.amazonaws.com"} . ], "method": "POST", "url": "https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15" } ``` If the token is a SAML 2.0 assertion, it must use the format defined in [the SAML 2.0 spec](https://www.oasis-open.org/committees/download.php/56776/sstc-saml-core-errata-2.0-wd-07.pdf), and the `subject_token_type` must be `urn:ietf:params:oauth:token-type:saml2`. See [Verification of external credentials](https://cloud.google.com/iam/docs/using-workload-identity-federation#verification_of_external_credentials) for details on how SAML 2.0 assertions are validated during token exchanges. You can also use a Google-issued OAuth 2.0 access token with this field to obtain an access token with new security attributes applied, such as a Credential Access Boundary. In this case, set `subject_token_type` to `urn:ietf:params:oauth:token-type:access_token`. If an access token already contains security attributes, you cannot apply additional security attributes. */
		subjectToken?: string | null;

		/** Required. An identifier that indicates the type of the security token in the `subject_token` parameter. Supported values are `urn:ietf:params:oauth:token-type:jwt`, `urn:ietf:params:oauth:token-type:id_token`, `urn:ietf:params:aws:token-type:aws4_request`, `urn:ietf:params:oauth:token-type:access_token`, and `urn:ietf:params:oauth:token-type:saml2`. */
		subjectTokenType?: string | null;
	}

	/** Request message for ExchangeToken. */
	export interface GoogleIdentityStsV1ExchangeTokenRequestFormProperties {

		/** The full resource name of the identity provider; for example: `//iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/` for workload identity pool providers, or `//iam.googleapis.com/locations/global/workforcePools//providers/` for workforce pool providers. Required when exchanging an external credential for a Google access token. */
		audience: FormControl<string | null | undefined>,

		/** Required. The grant type. Must be `urn:ietf:params:oauth:grant-type:token-exchange`, which indicates a token exchange. */
		grantType: FormControl<string | null | undefined>,

		/** A set of features that Security Token Service supports, in addition to the standard OAuth 2.0 token exchange, formatted as a serialized JSON object of Options. The size of the parameter value must not exceed 4096 characters. */
		options: FormControl<string | null | undefined>,

		/** Required. An identifier for the type of requested security token. Must be `urn:ietf:params:oauth:token-type:access_token`. */
		requestedTokenType: FormControl<string | null | undefined>,

		/** The OAuth 2.0 scopes to include on the resulting access token, formatted as a list of space-delimited, case-sensitive strings. Required when exchanging an external credential for a Google access token. */
		scope: FormControl<string | null | undefined>,

		/** Required. The input token. This token is either an external credential issued by a workload identity pool provider, or a short-lived access token issued by Google. If the token is an OIDC JWT, it must use the JWT format defined in [RFC 7523](https://tools.ietf.org/html/rfc7523), and the `subject_token_type` must be either `urn:ietf:params:oauth:token-type:jwt` or `urn:ietf:params:oauth:token-type:id_token`. The following headers are required: - `kid`: The identifier of the signing key securing the JWT. - `alg`: The cryptographic algorithm securing the JWT. Must be `RS256` or `ES256`. The following payload fields are required. For more information, see [RFC 7523, Section 3](https://tools.ietf.org/html/rfc7523#section-3): - `iss`: The issuer of the token. The issuer must provide a discovery document at the URL `/.well-known/openid-configuration`, where `` is the value of this field. The document must be formatted according to section 4.2 of the [OIDC 1.0 Discovery specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse). - `iat`: The issue time, in seconds, since the Unix epoch. Must be in the past. - `exp`: The expiration time, in seconds, since the Unix epoch. Must be less than 48 hours after `iat`. Shorter expiration times are more secure. If possible, we recommend setting an expiration time less than 6 hours. - `sub`: The identity asserted in the JWT. - `aud`: For workload identity pools, this must be a value specified in the allowed audiences for the workload identity pool provider, or one of the audiences allowed by default if no audiences were specified. See https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools.providers#oidc. For workforce pools, this must match the client ID specified in the provider configuration. See https://cloud.google.com/iam/docs/reference/rest/v1/locations.workforcePools.providers#oidc. Example header: ``` { "alg": "RS256", "kid": "us-east-11" } ``` Example payload: ``` { "iss": "https://accounts.google.com", "iat": 1517963104, "exp": 1517966704, "aud": "//iam.googleapis.com/projects/1234567890123/locations/global/workloadIdentityPools/my-pool/providers/my-provider", "sub": "113475438248934895348", "my_claims": { "additional_claim": "value" } } ``` If `subject_token` is for AWS, it must be a serialized `GetCallerIdentity` token. This token contains the same information as a request to the AWS [`GetCallerIdentity()`](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity) method, as well as the AWS [signature](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) for the request information. Use Signature Version 4. Format the request as URL-encoded JSON, and set the `subject_token_type` parameter to `urn:ietf:params:aws:token-type:aws4_request`. The following parameters are required: - `url`: The URL of the AWS STS endpoint for `GetCallerIdentity()`, such as `https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15`. Regional endpoints are also supported. - `method`: The HTTP request method: `POST`. - `headers`: The HTTP request headers, which must include: - `Authorization`: The request signature. - `x-amz-date`: The time you will send the request, formatted as an [ISO8601 Basic](https://docs.aws.amazon.com/general/latest/gr/sigv4_elements.html#sigv4_elements_date) string. This value is typically set to the current time and is used to help prevent replay attacks. - `host`: The hostname of the `url` field; for example, `sts.amazonaws.com`. - `x-goog-cloud-target-resource`: The full, canonical resource name of the workload identity pool provider, with or without an `https:` prefix. To help ensure data integrity, we recommend including this header in the `SignedHeaders` field of the signed request. For example: //iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/ https://iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/ If you are using temporary security credentials provided by AWS, you must also include the header `x-amz-security-token`, with the value set to the session token. The following example shows a `GetCallerIdentity` token: ``` { "headers": [ {"key": "x-amz-date", "value": "20200815T015049Z"}, {"key": "Authorization", "value": "AWS4-HMAC-SHA256+Credential=$credential,+SignedHeaders=host;x-amz-date;x-goog-cloud-target-resource,+Signature=$signature"}, {"key": "x-goog-cloud-target-resource", "value": "//iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/"}, {"key": "host", "value": "sts.amazonaws.com"} . ], "method": "POST", "url": "https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15" } ``` If the token is a SAML 2.0 assertion, it must use the format defined in [the SAML 2.0 spec](https://www.oasis-open.org/committees/download.php/56776/sstc-saml-core-errata-2.0-wd-07.pdf), and the `subject_token_type` must be `urn:ietf:params:oauth:token-type:saml2`. See [Verification of external credentials](https://cloud.google.com/iam/docs/using-workload-identity-federation#verification_of_external_credentials) for details on how SAML 2.0 assertions are validated during token exchanges. You can also use a Google-issued OAuth 2.0 access token with this field to obtain an access token with new security attributes applied, such as a Credential Access Boundary. In this case, set `subject_token_type` to `urn:ietf:params:oauth:token-type:access_token`. If an access token already contains security attributes, you cannot apply additional security attributes. */
		subjectToken: FormControl<string | null | undefined>,

		/** Required. An identifier that indicates the type of the security token in the `subject_token` parameter. Supported values are `urn:ietf:params:oauth:token-type:jwt`, `urn:ietf:params:oauth:token-type:id_token`, `urn:ietf:params:aws:token-type:aws4_request`, `urn:ietf:params:oauth:token-type:access_token`, and `urn:ietf:params:oauth:token-type:saml2`. */
		subjectTokenType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityStsV1ExchangeTokenRequestFormGroup() {
		return new FormGroup<GoogleIdentityStsV1ExchangeTokenRequestFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			grantType: new FormControl<string | null | undefined>(undefined),
			options: new FormControl<string | null | undefined>(undefined),
			requestedTokenType: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			subjectToken: new FormControl<string | null | undefined>(undefined),
			subjectTokenType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ExchangeToken. */
	export interface GoogleIdentityStsV1ExchangeTokenResponse {

		/** An OAuth 2.0 security token, issued by Google, in response to the token exchange request. Tokens can vary in size, depending in part on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time. */
		access_token?: string | null;

		/** The amount of time, in seconds, between the time when the access token was issued and the time when the access token will expire. This field is absent when the `subject_token` in the request is a Google-issued, short-lived access token. In this case, the access token has the same expiration time as the `subject_token`. */
		expires_in?: number | null;

		/** The token type. Always matches the value of `requested_token_type` from the request. */
		issued_token_type?: string | null;

		/** The type of access token. Always has the value `Bearer`. */
		token_type?: string | null;
	}

	/** Response message for ExchangeToken. */
	export interface GoogleIdentityStsV1ExchangeTokenResponseFormProperties {

		/** An OAuth 2.0 security token, issued by Google, in response to the token exchange request. Tokens can vary in size, depending in part on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time. */
		access_token: FormControl<string | null | undefined>,

		/** The amount of time, in seconds, between the time when the access token was issued and the time when the access token will expire. This field is absent when the `subject_token` in the request is a Google-issued, short-lived access token. In this case, the access token has the same expiration time as the `subject_token`. */
		expires_in: FormControl<number | null | undefined>,

		/** The token type. Always matches the value of `requested_token_type` from the request. */
		issued_token_type: FormControl<string | null | undefined>,

		/** The type of access token. Always has the value `Bearer`. */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityStsV1ExchangeTokenResponseFormGroup() {
		return new FormGroup<GoogleIdentityStsV1ExchangeTokenResponseFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			issued_token_type: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for IntrospectToken. */
	export interface GoogleIdentityStsV1IntrospectTokenRequest {

		/** Required. The OAuth 2.0 security token issued by the Security Token Service API. */
		token?: string | null;

		/** Optional. The type of the given token. Supported values are `urn:ietf:params:oauth:token-type:access_token` and `access_token`. */
		tokenTypeHint?: string | null;
	}

	/** Request message for IntrospectToken. */
	export interface GoogleIdentityStsV1IntrospectTokenRequestFormProperties {

		/** Required. The OAuth 2.0 security token issued by the Security Token Service API. */
		token: FormControl<string | null | undefined>,

		/** Optional. The type of the given token. Supported values are `urn:ietf:params:oauth:token-type:access_token` and `access_token`. */
		tokenTypeHint: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityStsV1IntrospectTokenRequestFormGroup() {
		return new FormGroup<GoogleIdentityStsV1IntrospectTokenRequestFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			tokenTypeHint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for IntrospectToken. */
	export interface GoogleIdentityStsV1IntrospectTokenResponse {

		/** A boolean value that indicates whether the provided access token is currently active. */
		active?: boolean | null;

		/** The client identifier for the OAuth 2.0 client that requested the provided token. */
		client_id?: string | null;

		/** The expiration timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token will expire. */
		exp?: string | null;

		/** The issued timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token was originally issued. */
		iat?: string | null;

		/** The issuer of the provided token. */
		iss?: string | null;

		/** A list of scopes associated with the provided token. */
		scope?: string | null;

		/** The unique user ID associated with the provided token. For Google Accounts, this value is based on the Google Account's user ID. For federated identities, this value is based on the identity pool ID and the value of the mapped `google.subject` attribute. */
		sub?: string | null;

		/** The human-readable identifier for the token principal subject. For example, if the provided token is associated with a workload identity pool, this field contains a value in the following format: `principal://iam.googleapis.com/projects//locations/global/workloadIdentityPools//subject/`. If the provided token is associated with a workforce pool, this field contains a value in the following format: `principal://iam.googleapis.com/locations/global/workforcePools//subject/`. */
		username?: string | null;
	}

	/** Response message for IntrospectToken. */
	export interface GoogleIdentityStsV1IntrospectTokenResponseFormProperties {

		/** A boolean value that indicates whether the provided access token is currently active. */
		active: FormControl<boolean | null | undefined>,

		/** The client identifier for the OAuth 2.0 client that requested the provided token. */
		client_id: FormControl<string | null | undefined>,

		/** The expiration timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token will expire. */
		exp: FormControl<string | null | undefined>,

		/** The issued timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token was originally issued. */
		iat: FormControl<string | null | undefined>,

		/** The issuer of the provided token. */
		iss: FormControl<string | null | undefined>,

		/** A list of scopes associated with the provided token. */
		scope: FormControl<string | null | undefined>,

		/** The unique user ID associated with the provided token. For Google Accounts, this value is based on the Google Account's user ID. For federated identities, this value is based on the identity pool ID and the value of the mapped `google.subject` attribute. */
		sub: FormControl<string | null | undefined>,

		/** The human-readable identifier for the token principal subject. For example, if the provided token is associated with a workload identity pool, this field contains a value in the following format: `principal://iam.googleapis.com/projects//locations/global/workloadIdentityPools//subject/`. If the provided token is associated with a workforce pool, this field contains a value in the following format: `principal://iam.googleapis.com/locations/global/workforcePools//subject/`. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityStsV1IntrospectTokenResponseFormGroup() {
		return new FormGroup<GoogleIdentityStsV1IntrospectTokenResponseFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			exp: new FormControl<string | null | undefined>(undefined),
			iat: new FormControl<string | null | undefined>(undefined),
			iss: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An `Options` object configures features that the Security Token Service supports, but that are not supported by standard OAuth 2.0 token exchange endpoints, as defined in https://tools.ietf.org/html/rfc8693. */
	export interface GoogleIdentityStsV1Options {

		/** An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources. */
		accessBoundary?: GoogleIdentityStsV1AccessBoundary;

		/** The intended audience(s) of the credential. The audience value(s) should be the name(s) of services intended to receive the credential. Example: `["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]`. A maximum of 5 audiences can be included. For each provided audience, the maximum length is 262 characters. */
		audiences?: Array<string>;

		/** A Google project used for quota and billing purposes when the credential is used to access Google APIs. The provided project overrides the project bound to the credential. The value must be a project number or a project ID. Example: `my-sample-project-191923`. The maximum length is 32 characters. */
		userProject?: string | null;
	}

	/** An `Options` object configures features that the Security Token Service supports, but that are not supported by standard OAuth 2.0 token exchange endpoints, as defined in https://tools.ietf.org/html/rfc8693. */
	export interface GoogleIdentityStsV1OptionsFormProperties {

		/** A Google project used for quota and billing purposes when the credential is used to access Google APIs. The provided project overrides the project bound to the credential. The value must be a project number or a project ID. Example: `my-sample-project-191923`. The maximum length is 32 characters. */
		userProject: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityStsV1OptionsFormGroup() {
		return new FormGroup<GoogleIdentityStsV1OptionsFormProperties>({
			userProject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources. */
	export interface GoogleIdentityStsV1betaAccessBoundary {

		/** A list of access boundary rules which defines the upper bound of the permission a principal may carry. If multiple rules are specified, the effective access boundary is the union of all the access boundary rules attached. One access boundary can contain at most 10 rules. */
		accessBoundaryRules?: Array<GoogleIdentityStsV1betaAccessBoundaryRule>;
	}

	/** An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources. */
	export interface GoogleIdentityStsV1betaAccessBoundaryFormProperties {
	}
	export function CreateGoogleIdentityStsV1betaAccessBoundaryFormGroup() {
		return new FormGroup<GoogleIdentityStsV1betaAccessBoundaryFormProperties>({
		});

	}


	/** An access boundary rule defines an upper bound of IAM permissions on a single resource. */
	export interface GoogleIdentityStsV1betaAccessBoundaryRule {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		availabilityCondition?: GoogleTypeExpr;

		/** A list of permissions that may be allowed for use on the specified resource. The only supported values in the list are IAM roles, following the format of google.iam.v1.Binding.role. Example value: `inRole:roles/logging.viewer` for predefined roles and `inRole:organizations/{ORGANIZATION_ID}/roles/logging.viewer` for custom roles. */
		availablePermissions?: Array<string>;

		/** The full resource name of a Google Cloud resource entity. The format definition is at https://cloud.google.com/apis/design/resource_names. Example value: `//cloudresourcemanager.googleapis.com/projects/my-project`. */
		availableResource?: string | null;
	}

	/** An access boundary rule defines an upper bound of IAM permissions on a single resource. */
	export interface GoogleIdentityStsV1betaAccessBoundaryRuleFormProperties {

		/** The full resource name of a Google Cloud resource entity. The format definition is at https://cloud.google.com/apis/design/resource_names. Example value: `//cloudresourcemanager.googleapis.com/projects/my-project`. */
		availableResource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityStsV1betaAccessBoundaryRuleFormGroup() {
		return new FormGroup<GoogleIdentityStsV1betaAccessBoundaryRuleFormProperties>({
			availableResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An `Options` object configures features that the Security Token Service supports, but that are not supported by standard OAuth 2.0 token exchange endpoints, as defined in https://tools.ietf.org/html/rfc8693. */
	export interface GoogleIdentityStsV1betaOptions {

		/** An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources. */
		accessBoundary?: GoogleIdentityStsV1betaAccessBoundary;

		/** The intended audience(s) of the credential. The audience value(s) should be the name(s) of services intended to receive the credential. Example: `["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]`. A maximum of 5 audiences can be included. For each provided audience, the maximum length is 262 characters. */
		audiences?: Array<string>;

		/** A Google project used for quota and billing purposes when the credential is used to access Google APIs. The provided project overrides the project bound to the credential. The value must be a project number or a project ID. Example: `my-sample-project-191923`. The maximum length is 32 characters. */
		userProject?: string | null;
	}

	/** An `Options` object configures features that the Security Token Service supports, but that are not supported by standard OAuth 2.0 token exchange endpoints, as defined in https://tools.ietf.org/html/rfc8693. */
	export interface GoogleIdentityStsV1betaOptionsFormProperties {

		/** A Google project used for quota and billing purposes when the credential is used to access Google APIs. The provided project overrides the project bound to the credential. The value must be a project number or a project ID. Example: `my-sample-project-191923`. The maximum length is 32 characters. */
		userProject: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityStsV1betaOptionsFormGroup() {
		return new FormGroup<GoogleIdentityStsV1betaOptionsFormProperties>({
			userProject: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets information about a Google OAuth 2.0 access token issued by the Google Cloud [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).
		 * Post v1/introspect
		 * @return {GoogleIdentityStsV1IntrospectTokenResponse} Successful response
		 */
		Sts_introspect(requestBody: GoogleIdentityStsV1IntrospectTokenRequest): Observable<GoogleIdentityStsV1IntrospectTokenResponse> {
			return this.http.post<GoogleIdentityStsV1IntrospectTokenResponse>(this.baseUri + 'v1/introspect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exchanges a credential that represents the resource owner's authorization for a Google-generated [OAuth 2.0 access token] (https://www.rfc-editor.org/rfc/rfc6749#section-5) or [refreshes an accesstoken] (https://www.rfc-editor.org/rfc/rfc6749#section-6) following [the OAuth 2.0 authorization framework] (https://tools.ietf.org/html/rfc8693) The credential can be one of the following: - An authorization code issued by the workforce identity federation authorization endpoint - A [refresh token](https://www.rfc-editor.org/rfc/rfc6749#section-10.4) issued by this endpoint This endpoint is only meant to be called by the Google Cloud CLI. Also note that this API only accepts the authorization code issued for workforce pools.
		 * Post v1/oauthtoken
		 * @return {GoogleIdentityStsV1ExchangeOauthTokenResponse} Successful response
		 */
		Sts_oauthtoken(requestBody: GoogleIdentityStsV1ExchangeOauthTokenRequest): Observable<GoogleIdentityStsV1ExchangeOauthTokenResponse> {
			return this.http.post<GoogleIdentityStsV1ExchangeOauthTokenResponse>(this.baseUri + 'v1/oauthtoken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within an identity pool, or it applies a Credential Access Boundary to a Google access token. Note that workforce pools do not support Credential Access Boundaries. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.
		 * Post v1/token
		 * @return {GoogleIdentityStsV1ExchangeTokenResponse} Successful response
		 */
		Sts_token(requestBody: GoogleIdentityStsV1ExchangeTokenRequest): Observable<GoogleIdentityStsV1ExchangeTokenResponse> {
			return this.http.post<GoogleIdentityStsV1ExchangeTokenResponse>(this.baseUri + 'v1/token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

