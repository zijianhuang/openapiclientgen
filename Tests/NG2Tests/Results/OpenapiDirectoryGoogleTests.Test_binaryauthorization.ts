import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * An admission rule specifies either that all container images
	 * used in a pod creation request must be attested to by one or more
	 * attestors, that all pod creations will be allowed, or that all
	 * pod creations will be denied.
	 * Images matching an admission whitelist pattern
	 * are exempted from admission rules and will never block a pod creation.
	 */
	export interface AdmissionRule {

		/** Required. The action when a pod creation is denied by the admission rule. */
		enforcementMode?: AdmissionRuleEnforcementMode;

		/** Required. How this admission rule will be evaluated. */
		evaluationMode?: AdmissionRuleEvaluationMode;

		/**
		 * Optional. The resource names of the attestors that must attest to
		 * a container image, in the format `projects/attestors/*`. Each
		 * attestor must exist before a policy can reference it.  To add an attestor
		 * to a policy the principal issuing the policy change request must be able
		 * to read the attestor resource.
		 * Note: this field must be non-empty when the evaluation_mode field specifies
		 * REQUIRE_ATTESTATION, otherwise it must be empty.
		 */
		requireAttestationsBy?: Array<string>;
	}

	export enum AdmissionRuleEnforcementMode { ENFORCEMENT_MODE_UNSPECIFIED = 0, ENFORCED_BLOCK_AND_AUDIT_LOG = 1, DRYRUN_AUDIT_LOG_ONLY = 2 }

	export enum AdmissionRuleEvaluationMode { EVALUATION_MODE_UNSPECIFIED = 0, ALWAYS_ALLOW = 1, REQUIRE_ATTESTATION = 2, ALWAYS_DENY = 3 }


	/**
	 * An admission whitelist pattern exempts images
	 * from checks by admission rules.
	 */
	export interface AdmissionWhitelistPattern {

		/**
		 * An image name pattern to whitelist, in the form `registry/path/to/image`.
		 * This supports a trailing `*` as a wildcard, but this is allowed only in
		 * text after the `registry/` part.
		 */
		namePattern?: string;
	}


	/**
	 * An attestor that attests to container image
	 * artifacts. An existing attestor cannot be modified except where
	 * indicated.
	 */
	export interface Attestor {

		/**
		 * Optional. A descriptive comment.  This field may be updated.
		 * The field may be displayed in chooser dialogs.
		 */
		description?: string;

		/**
		 * Required. The resource name, in the format:
		 * `projects/attestors/*`. This field may not be updated.
		 */
		name?: string;

		/** Output only. Time when the attestor was last updated. */
		updateTime?: string;

		/**
		 * An user owned Grafeas note references a Grafeas
		 * Attestation.Authority Note created by the user.
		 */
		userOwnedGrafeasNote?: UserOwnedGrafeasNote;
	}


	/**
	 * An user owned Grafeas note references a Grafeas
	 * Attestation.Authority Note created by the user.
	 */
	export interface UserOwnedGrafeasNote {

		/**
		 * Output only. This field will contain the service account email address
		 * that this Attestor will use as the principal when querying Container
		 * Analysis. Attestor administrators must grant this service account the
		 * IAM role needed to read attestations from the note_reference in
		 * Container Analysis (`containeranalysis.notes.occurrences.viewer`).
		 * This email address is fixed for the lifetime of the Attestor, but callers
		 * should not make any other assumptions about the service account email;
		 * future versions may use an email based on a different naming pattern.
		 */
		delegationServiceAccountEmail?: string;

		/**
		 * Required. The Grafeas resource name of a Attestation.Authority Note,
		 * created by the user, in the format: `projects/notes/*`. This field may
		 * not be updated.
		 * An attestation by this attestor is stored as a Grafeas
		 * Attestation.Authority Occurrence that names a container image and that
		 * links to this Note. Grafeas is an external dependency.
		 */
		noteReference?: string;

		/**
		 * Optional. Public keys that verify attestations signed by this
		 * attestor.  This field may be updated.
		 * If this field is non-empty, one of the specified public keys must
		 * verify that an attestation was signed by this attestor for the
		 * image specified in the admission request.
		 * If this field is empty, this attestor always returns that no
		 * valid attestations exist.
		 */
		publicKeys?: Array<AttestorPublicKey>;
	}


	/**
	 * An attestor public key that will be used to verify
	 * attestations signed by this attestor.
	 */
	export interface AttestorPublicKey {

		/**
		 * ASCII-armored representation of a PGP public key, as the entire output by
		 * the command `gpg --export --armor foo@example.com` (either LF or CRLF
		 * line endings).
		 * When using this field, `id` should be left blank.  The BinAuthz API
		 * handlers will calculate the ID and fill it in automatically.  BinAuthz
		 * computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as
		 * upper-case hex.  If `id` is provided by the caller, it will be
		 * overwritten by the API-calculated ID.
		 */
		asciiArmoredPgpPublicKey?: string;

		/** Optional. A descriptive comment. This field may be updated. */
		comment?: string;

		/**
		 * The ID of this public key.
		 * Signatures verified by BinAuthz must include the ID of the public key that
		 * can be used to verify them, and that ID must match the contents of this
		 * field exactly.
		 * Additional restrictions on this field can be imposed based on which public
		 * key type is encapsulated. See the documentation on `public_key` cases below
		 * for details.
		 */
		id?: string;

		/**
		 * A public key in the PkixPublicKey format (see
		 * https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details).
		 * Public keys of this type are typically textually encoded using the PEM
		 * format.
		 */
		pkixPublicKey?: PkixPublicKey;
	}


	/**
	 * A public key in the PkixPublicKey format (see
	 * https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details).
	 * Public keys of this type are typically textually encoded using the PEM
	 * format.
	 */
	export interface PkixPublicKey {

		/**
		 * A PEM-encoded public key, as described in
		 * https://tools.ietf.org/html/rfc7468#section-13
		 */
		publicKeyPem?: string;

		/**
		 * The signature algorithm used to verify a message against a signature using
		 * this key.
		 * These signature algorithm must match the structure and any object
		 * identifiers encoded in `public_key_pem` (i.e. this algorithm must match
		 * that of the public key).
		 */
		signatureAlgorithm?: PkixPublicKeySignatureAlgorithm;
	}

	export enum PkixPublicKeySignatureAlgorithm { SIGNATURE_ALGORITHM_UNSPECIFIED = 0, RSA_PSS_2048_SHA256 = 1, RSA_PSS_3072_SHA256 = 2, RSA_PSS_4096_SHA256 = 3, RSA_PSS_4096_SHA512 = 4, RSA_SIGN_PKCS1_2048_SHA256 = 5, RSA_SIGN_PKCS1_3072_SHA256 = 6, RSA_SIGN_PKCS1_4096_SHA256 = 7, RSA_SIGN_PKCS1_4096_SHA512 = 8, ECDSA_P256_SHA256 = 9, ECDSA_P384_SHA384 = 10, ECDSA_P521_SHA512 = 11 }


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
	export interface IamPolicy {

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


	/** Response message for BinauthzManagementService.ListAttestors. */
	export interface ListAttestorsResponse {

		/** The list of attestors. */
		attestors?: Array<Attestor>;

		/**
		 * A token to retrieve the next page of results. Pass this value in the
		 * ListAttestorsRequest.page_token field in the subsequent call to the
		 * `ListAttestors` method to retrieve the next page of results.
		 */
		nextPageToken?: string;
	}


	/** A policy for container image binary authorization. */
	export interface Policy {

		/**
		 * Optional. Admission policy whitelisting. A matching admission request will
		 * always be permitted. This feature is typically used to exclude Google or
		 * third-party infrastructure images from Binary Authorization policies.
		 */
		admissionWhitelistPatterns?: Array<AdmissionWhitelistPattern>;

		/**
		 * Optional. Per-cluster admission rules. Cluster spec format:
		 * `location.clusterId`. There can be at most one admission rule per cluster
		 * spec.
		 * A `location` is either a compute zone (e.g. us-central1-a) or a region
		 * (e.g. us-central1).
		 * For `clusterId` syntax restrictions see
		 * https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters.
		 */
		clusterAdmissionRules?: {[id: string]: AdmissionRule };

		/**
		 * An admission rule specifies either that all container images
		 * used in a pod creation request must be attested to by one or more
		 * attestors, that all pod creations will be allowed, or that all
		 * pod creations will be denied.
		 * Images matching an admission whitelist pattern
		 * are exempted from admission rules and will never block a pod creation.
		 */
		defaultAdmissionRule?: AdmissionRule;

		/** Optional. A descriptive comment. */
		description?: string;

		/**
		 * Optional. Controls the evaluation of a Google-maintained global admission
		 * policy for common system-level images. Images not covered by the global
		 * policy will be subject to the project admission policy. This setting
		 * has no effect when specified inside a global admission policy.
		 */
		globalPolicyEvaluationMode?: PolicyGlobalPolicyEvaluationMode;

		/**
		 * Output only. The resource name, in the format `projects/policy`. There is
		 * at most one policy per project.
		 */
		name?: string;

		/** Output only. Time when the policy was last updated. */
		updateTime?: string;
	}

	export enum PolicyGlobalPolicyEvaluationMode { GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED = 0, ENABLE = 1, DISABLE = 2 }


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
		policy?: IamPolicy;
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
		 * Deletes an attestor. Returns NOT_FOUND if the
		 * attestor does not exist.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the attestors to delete, in the format
		 * `projects/attestors/*`.
		 * @return {void} Successful response
		 */
		Binaryauthorization_projects_attestors_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an attestor.
		 * Returns NOT_FOUND if the attestor does not exist.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the attestor to retrieve, in the format
		 * `projects/attestors/*`.
		 * @return {void} Successful response
		 */
		Binaryauthorization_projects_attestors_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an attestor.
		 * Returns NOT_FOUND if the attestor does not exist.
		 * Put v1/{name}
		 * @param {string} name Required. The resource name, in the format:
		 * `projects/attestors/*`. This field may not be updated.
		 * @return {void} Successful response
		 */
		Binaryauthorization_projects_attestors_update(name: string, requestBody: Attestor): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists attestors.
		 * Returns INVALID_ARGUMENT if the project does not exist.
		 * Get v1/{parent}/attestors
		 * @param {string} parent Required. The resource name of the project associated with the
		 * attestors, in the format `projects/*`.
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If
		 * unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically,
		 * this is the value of ListAttestorsResponse.next_page_token returned
		 * from the previous call to the `ListAttestors` method.
		 * @return {void} Successful response
		 */
		Binaryauthorization_projects_attestors_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attestors&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an attestor, and returns a copy of the new
		 * attestor. Returns NOT_FOUND if the project does not exist,
		 * INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the
		 * attestor already exists.
		 * Post v1/{parent}/attestors
		 * @param {string} parent Required. The parent of this attestor.
		 * @param {string} attestorId Required. The attestors ID.
		 * @return {void} Successful response
		 */
		Binaryauthorization_projects_attestors_create(parent: string, attestorId: string, requestBody: Attestor): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attestors&attestorId=' + (attestorId == null ? '' : encodeURIComponent(attestorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a resource.
		 * Returns an empty policy if the resource exists and does not have a policy
		 * set.
		 * Get v1/{resource}:getIamPolicy
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
		Binaryauthorization_projects_attestors_getIamPolicy(resource: string, options_requestedPolicyVersion: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any
		 * existing policy.
		 * Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Binaryauthorization_projects_attestors_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on the specified resource.
		 * If the resource does not exist, this will return an empty set of
		 * permissions, not a NOT_FOUND error.
		 * Note: This operation is designed to be used for building permission-aware
		 * UIs and command-line tools, not for authorization checking. This operation
		 * may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Binaryauthorization_projects_attestors_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

