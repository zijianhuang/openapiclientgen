import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors, that all pod creations will be allowed, or that all pod creations will be denied. Images matching an admission allowlist pattern are exempted from admission rules and will never block a pod creation. */
	export interface AdmissionRule {

		/** Required. The action when a pod creation is denied by the admission rule. */
		enforcementMode?: AdmissionRuleEnforcementMode | null;

		/** Required. How this admission rule will be evaluated. */
		evaluationMode?: AdmissionRuleEvaluationMode | null;

		/** Optional. The resource names of the attestors that must attest to a container image, in the format `projects/attestors/*`. Each attestor must exist before a policy can reference it. To add an attestor to a policy the principal issuing the policy change request must be able to read the attestor resource. Note: this field must be non-empty when the evaluation_mode field specifies REQUIRE_ATTESTATION, otherwise it must be empty. */
		requireAttestationsBy?: Array<string>;
	}

	/** An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors, that all pod creations will be allowed, or that all pod creations will be denied. Images matching an admission allowlist pattern are exempted from admission rules and will never block a pod creation. */
	export interface AdmissionRuleFormProperties {

		/** Required. The action when a pod creation is denied by the admission rule. */
		enforcementMode: FormControl<AdmissionRuleEnforcementMode | null | undefined>,

		/** Required. How this admission rule will be evaluated. */
		evaluationMode: FormControl<AdmissionRuleEvaluationMode | null | undefined>,
	}
	export function CreateAdmissionRuleFormGroup() {
		return new FormGroup<AdmissionRuleFormProperties>({
			enforcementMode: new FormControl<AdmissionRuleEnforcementMode | null | undefined>(undefined),
			evaluationMode: new FormControl<AdmissionRuleEvaluationMode | null | undefined>(undefined),
		});

	}

	export enum AdmissionRuleEnforcementMode { ENFORCEMENT_MODE_UNSPECIFIED = 0, ENFORCED_BLOCK_AND_AUDIT_LOG = 1, DRYRUN_AUDIT_LOG_ONLY = 2 }

	export enum AdmissionRuleEvaluationMode { EVALUATION_MODE_UNSPECIFIED = 0, ALWAYS_ALLOW = 1, REQUIRE_ATTESTATION = 2, ALWAYS_DENY = 3 }


	/** An admission allowlist pattern exempts images from checks by admission rules. */
	export interface AdmissionWhitelistPattern {

		/** An image name pattern to allowlist, in the form `registry/path/to/image`. This supports a trailing `*` as a wildcard, but this is allowed only in text after the `registry/` part. `*` wildcard does not match `/`, i.e., `gcr.io/nginx*` matches `gcr.io/nginx@latest`, but it does not match `gcr.io/nginx/image`. This also supports a trailing `**` wildcard which matches subdirectories, i.e., `gcr.io/nginx**` matches `gcr.io/nginx/image`. */
		namePattern?: string | null;
	}

	/** An admission allowlist pattern exempts images from checks by admission rules. */
	export interface AdmissionWhitelistPatternFormProperties {

		/** An image name pattern to allowlist, in the form `registry/path/to/image`. This supports a trailing `*` as a wildcard, but this is allowed only in text after the `registry/` part. `*` wildcard does not match `/`, i.e., `gcr.io/nginx*` matches `gcr.io/nginx@latest`, but it does not match `gcr.io/nginx/image`. This also supports a trailing `**` wildcard which matches subdirectories, i.e., `gcr.io/nginx**` matches `gcr.io/nginx/image`. */
		namePattern: FormControl<string | null | undefined>,
	}
	export function CreateAdmissionWhitelistPatternFormGroup() {
		return new FormGroup<AdmissionWhitelistPatternFormProperties>({
			namePattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign. */
	export interface AttestationOccurrence {

		/** One or more JWTs encoding a self-contained attestation. Each JWT encodes the payload that it verifies within the JWT itself. Verifier implementation SHOULD ignore the `serialized_payload` field when verifying these JWTs. If only JWTs are present on this AttestationOccurrence, then the `serialized_payload` SHOULD be left empty. Each JWT SHOULD encode a claim specific to the `resource_uri` of this Occurrence, but this is not validated by Grafeas metadata API implementations. The JWT itself is opaque to Grafeas. */
		jwts?: Array<Jwt>;

		/** Required. The serialized payload that is verified by one or more `signatures`. */
		serializedPayload?: string | null;

		/** One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification. */
		signatures?: Array<Signature>;
	}

	/** Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign. */
	export interface AttestationOccurrenceFormProperties {

		/** Required. The serialized payload that is verified by one or more `signatures`. */
		serializedPayload: FormControl<string | null | undefined>,
	}
	export function CreateAttestationOccurrenceFormGroup() {
		return new FormGroup<AttestationOccurrenceFormProperties>({
			serializedPayload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Jwt {

		/** The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1 */
		compactJwt?: string | null;
	}
	export interface JwtFormProperties {

		/** The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1 */
		compactJwt: FormControl<string | null | undefined>,
	}
	export function CreateJwtFormGroup() {
		return new FormGroup<JwtFormProperties>({
			compactJwt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature). */
	export interface Signature {

		/** The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5" */
		publicKeyId?: string | null;

		/** The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload. */
		signature?: string | null;
	}

	/** Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature). */
	export interface SignatureFormProperties {

		/** The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5" */
		publicKeyId: FormControl<string | null | undefined>,

		/** The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateSignatureFormGroup() {
		return new FormGroup<SignatureFormProperties>({
			publicKeyId: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated. */
	export interface Attestor {

		/** Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs. */
		description?: string | null;

		/** Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154. */
		etag?: string | null;

		/** Required. The resource name, in the format: `projects/attestors/*`. This field may not be updated. */
		name?: string | null;

		/** Output only. Time when the attestor was last updated. */
		updateTime?: string | null;

		/** An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user. */
		userOwnedDrydockNote?: UserOwnedDrydockNote;
	}

	/** An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated. */
	export interface AttestorFormProperties {

		/** Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs. */
		description: FormControl<string | null | undefined>,

		/** Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154. */
		etag: FormControl<string | null | undefined>,

		/** Required. The resource name, in the format: `projects/attestors/*`. This field may not be updated. */
		name: FormControl<string | null | undefined>,

		/** Output only. Time when the attestor was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAttestorFormGroup() {
		return new FormGroup<AttestorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user. */
	export interface UserOwnedDrydockNote {

		/** Output only. This field will contain the service account email address that this Attestor will use as the principal when querying Container Analysis. Attestor administrators must grant this service account the IAM role needed to read attestations from the note_reference in Container Analysis (`containeranalysis.notes.occurrences.viewer`). This email address is fixed for the lifetime of the Attestor, but callers should not make any other assumptions about the service account email; future versions may use an email based on a different naming pattern. */
		delegationServiceAccountEmail?: string | null;

		/** Required. The Drydock resource name of a ATTESTATION_AUTHORITY Note, created by the user, in the format: `projects/notes/*` (or the legacy `providers/notes/*`). This field may not be updated. An attestation by this attestor is stored as a Drydock ATTESTATION_AUTHORITY Occurrence that names a container image and that links to this Note. Drydock is an external dependency. */
		noteReference?: string | null;

		/** Optional. Public keys that verify attestations signed by this attestor. This field may be updated. If this field is non-empty, one of the specified public keys must verify that an attestation was signed by this attestor for the image specified in the admission request. If this field is empty, this attestor always returns that no valid attestations exist. */
		publicKeys?: Array<AttestorPublicKey>;
	}

	/** An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user. */
	export interface UserOwnedDrydockNoteFormProperties {

		/** Output only. This field will contain the service account email address that this Attestor will use as the principal when querying Container Analysis. Attestor administrators must grant this service account the IAM role needed to read attestations from the note_reference in Container Analysis (`containeranalysis.notes.occurrences.viewer`). This email address is fixed for the lifetime of the Attestor, but callers should not make any other assumptions about the service account email; future versions may use an email based on a different naming pattern. */
		delegationServiceAccountEmail: FormControl<string | null | undefined>,

		/** Required. The Drydock resource name of a ATTESTATION_AUTHORITY Note, created by the user, in the format: `projects/notes/*` (or the legacy `providers/notes/*`). This field may not be updated. An attestation by this attestor is stored as a Drydock ATTESTATION_AUTHORITY Occurrence that names a container image and that links to this Note. Drydock is an external dependency. */
		noteReference: FormControl<string | null | undefined>,
	}
	export function CreateUserOwnedDrydockNoteFormGroup() {
		return new FormGroup<UserOwnedDrydockNoteFormProperties>({
			delegationServiceAccountEmail: new FormControl<string | null | undefined>(undefined),
			noteReference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An attestor public key that will be used to verify attestations signed by this attestor. */
	export interface AttestorPublicKey {

		/** ASCII-armored representation of a PGP public key, as the entire output by the command `gpg --export --armor foo@example.com` (either LF or CRLF line endings). When using this field, `id` should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If `id` is provided by the caller, it will be overwritten by the API-calculated ID. */
		asciiArmoredPgpPublicKey?: string | null;

		/** Optional. A descriptive comment. This field may be updated. */
		comment?: string | null;

		/** The ID of this public key. Signatures verified by BinAuthz must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on `public_key` cases below for details. */
		id?: string | null;

		/** A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format. */
		pkixPublicKey?: PkixPublicKey;
	}

	/** An attestor public key that will be used to verify attestations signed by this attestor. */
	export interface AttestorPublicKeyFormProperties {

		/** ASCII-armored representation of a PGP public key, as the entire output by the command `gpg --export --armor foo@example.com` (either LF or CRLF line endings). When using this field, `id` should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If `id` is provided by the caller, it will be overwritten by the API-calculated ID. */
		asciiArmoredPgpPublicKey: FormControl<string | null | undefined>,

		/** Optional. A descriptive comment. This field may be updated. */
		comment: FormControl<string | null | undefined>,

		/** The ID of this public key. Signatures verified by BinAuthz must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on `public_key` cases below for details. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAttestorPublicKeyFormGroup() {
		return new FormGroup<AttestorPublicKeyFormProperties>({
			asciiArmoredPgpPublicKey: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format. */
	export interface PkixPublicKey {

		/** A PEM-encoded public key, as described in https://tools.ietf.org/html/rfc7468#section-13 */
		publicKeyPem?: string | null;

		/** The signature algorithm used to verify a message against a signature using this key. These signature algorithm must match the structure and any object identifiers encoded in `public_key_pem` (i.e. this algorithm must match that of the public key). */
		signatureAlgorithm?: PkixPublicKeySignatureAlgorithm | null;
	}

	/** A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format. */
	export interface PkixPublicKeyFormProperties {

		/** A PEM-encoded public key, as described in https://tools.ietf.org/html/rfc7468#section-13 */
		publicKeyPem: FormControl<string | null | undefined>,

		/** The signature algorithm used to verify a message against a signature using this key. These signature algorithm must match the structure and any object identifiers encoded in `public_key_pem` (i.e. this algorithm must match that of the public key). */
		signatureAlgorithm: FormControl<PkixPublicKeySignatureAlgorithm | null | undefined>,
	}
	export function CreatePkixPublicKeyFormGroup() {
		return new FormGroup<PkixPublicKeyFormProperties>({
			publicKeyPem: new FormControl<string | null | undefined>(undefined),
			signatureAlgorithm: new FormControl<PkixPublicKeySignatureAlgorithm | null | undefined>(undefined),
		});

	}

	export enum PkixPublicKeySignatureAlgorithm { SIGNATURE_ALGORITHM_UNSPECIFIED = 0, RSA_PSS_2048_SHA256 = 1, RSA_SIGN_PSS_2048_SHA256 = 2, RSA_PSS_3072_SHA256 = 3, RSA_SIGN_PSS_3072_SHA256 = 4, RSA_PSS_4096_SHA256 = 5, RSA_SIGN_PSS_4096_SHA256 = 6, RSA_PSS_4096_SHA512 = 7, RSA_SIGN_PSS_4096_SHA512 = 8, RSA_SIGN_PKCS1_2048_SHA256 = 9, RSA_SIGN_PKCS1_3072_SHA256 = 10, RSA_SIGN_PKCS1_4096_SHA256 = 11, RSA_SIGN_PKCS1_4096_SHA512 = 12, ECDSA_P256_SHA256 = 13, EC_SIGN_P256_SHA256 = 14, ECDSA_P384_SHA384 = 15, EC_SIGN_P384_SHA384 = 16, ECDSA_P521_SHA512 = 17, EC_SIGN_P521_SHA512 = 18 }


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


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface IamPolicy {

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface IamPolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreateIamPolicyFormGroup() {
		return new FormGroup<IamPolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for BinauthzManagementService.ListAttestors. */
	export interface ListAttestorsResponse {

		/** The list of attestors. */
		attestors?: Array<Attestor>;

		/** A token to retrieve the next page of results. Pass this value in the ListAttestorsRequest.page_token field in the subsequent call to the `ListAttestors` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for BinauthzManagementService.ListAttestors. */
	export interface ListAttestorsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListAttestorsRequest.page_token field in the subsequent call to the `ListAttestors` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttestorsResponseFormGroup() {
		return new FormGroup<ListAttestorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A policy for Binary Authorization. */
	export interface Policy {

		/** Optional. Admission policy allowlisting. A matching admission request will always be permitted. This feature is typically used to exclude Google or third-party infrastructure images from Binary Authorization policies. */
		admissionWhitelistPatterns?: Array<AdmissionWhitelistPattern>;

		/** Optional. Per-cluster admission rules. Cluster spec format: `location.clusterId`. There can be at most one admission rule per cluster spec. A `location` is either a compute zone (e.g. us-central1-a) or a region (e.g. us-central1). For `clusterId` syntax restrictions see https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters. */
		clusterAdmissionRules?: {[id: string]: AdmissionRule };

		/** An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors, that all pod creations will be allowed, or that all pod creations will be denied. Images matching an admission allowlist pattern are exempted from admission rules and will never block a pod creation. */
		defaultAdmissionRule?: AdmissionRule;

		/** Optional. A descriptive comment. */
		description?: string | null;

		/** Optional. A checksum, returned by the server, that can be sent on update requests to ensure the policy has an up-to-date value before attempting to update it. See https://google.aip.dev/154. */
		etag?: string | null;

		/** Optional. Controls the evaluation of a Google-maintained global admission policy for common system-level images. Images not covered by the global policy will be subject to the project admission policy. This setting has no effect when specified inside a global admission policy. */
		globalPolicyEvaluationMode?: PolicyGlobalPolicyEvaluationMode | null;

		/** Optional. Per-istio-service-identity admission rules. Istio service identity spec format: `spiffe:///ns//sa/` or `/ns//sa/` e.g. `spiffe://example.com/ns/test-ns/sa/default` */
		istioServiceIdentityAdmissionRules?: {[id: string]: AdmissionRule };

		/** Optional. Per-kubernetes-namespace admission rules. K8s namespace spec format: `[a-z.-]+`, e.g. `some-namespace` */
		kubernetesNamespaceAdmissionRules?: {[id: string]: AdmissionRule };

		/** Optional. Per-kubernetes-service-account admission rules. Service account spec format: `namespace:serviceaccount`. e.g. `test-ns:default` */
		kubernetesServiceAccountAdmissionRules?: {[id: string]: AdmissionRule };

		/** Output only. The resource name, in the format `projects/policy`. There is at most one policy per project. */
		name?: string | null;

		/** Output only. Time when the policy was last updated. */
		updateTime?: string | null;
	}

	/** A policy for Binary Authorization. */
	export interface PolicyFormProperties {

		/** Optional. Per-cluster admission rules. Cluster spec format: `location.clusterId`. There can be at most one admission rule per cluster spec. A `location` is either a compute zone (e.g. us-central1-a) or a region (e.g. us-central1). For `clusterId` syntax restrictions see https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters. */
		clusterAdmissionRules: FormControl<{[id: string]: AdmissionRule } | null | undefined>,

		/** Optional. A descriptive comment. */
		description: FormControl<string | null | undefined>,

		/** Optional. A checksum, returned by the server, that can be sent on update requests to ensure the policy has an up-to-date value before attempting to update it. See https://google.aip.dev/154. */
		etag: FormControl<string | null | undefined>,

		/** Optional. Controls the evaluation of a Google-maintained global admission policy for common system-level images. Images not covered by the global policy will be subject to the project admission policy. This setting has no effect when specified inside a global admission policy. */
		globalPolicyEvaluationMode: FormControl<PolicyGlobalPolicyEvaluationMode | null | undefined>,

		/** Optional. Per-istio-service-identity admission rules. Istio service identity spec format: `spiffe:///ns//sa/` or `/ns//sa/` e.g. `spiffe://example.com/ns/test-ns/sa/default` */
		istioServiceIdentityAdmissionRules: FormControl<{[id: string]: AdmissionRule } | null | undefined>,

		/** Optional. Per-kubernetes-namespace admission rules. K8s namespace spec format: `[a-z.-]+`, e.g. `some-namespace` */
		kubernetesNamespaceAdmissionRules: FormControl<{[id: string]: AdmissionRule } | null | undefined>,

		/** Optional. Per-kubernetes-service-account admission rules. Service account spec format: `namespace:serviceaccount`. e.g. `test-ns:default` */
		kubernetesServiceAccountAdmissionRules: FormControl<{[id: string]: AdmissionRule } | null | undefined>,

		/** Output only. The resource name, in the format `projects/policy`. There is at most one policy per project. */
		name: FormControl<string | null | undefined>,

		/** Output only. Time when the policy was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			clusterAdmissionRules: new FormControl<{[id: string]: AdmissionRule } | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			globalPolicyEvaluationMode: new FormControl<PolicyGlobalPolicyEvaluationMode | null | undefined>(undefined),
			istioServiceIdentityAdmissionRules: new FormControl<{[id: string]: AdmissionRule } | null | undefined>(undefined),
			kubernetesNamespaceAdmissionRules: new FormControl<{[id: string]: AdmissionRule } | null | undefined>(undefined),
			kubernetesServiceAccountAdmissionRules: new FormControl<{[id: string]: AdmissionRule } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyGlobalPolicyEvaluationMode { GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED = 0, ENABLE = 1, DISABLE = 2 }


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: IamPolicy;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
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


	/** Request message for ValidationHelperV1.ValidateAttestationOccurrence. */
	export interface ValidateAttestationOccurrenceRequest {

		/** Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign. */
		attestation?: AttestationOccurrence;

		/** Required. The resource name of the Note to which the containing Occurrence is associated. */
		occurrenceNote?: string | null;

		/** Required. The URI of the artifact (e.g. container image) that is the subject of the containing Occurrence. */
		occurrenceResourceUri?: string | null;
	}

	/** Request message for ValidationHelperV1.ValidateAttestationOccurrence. */
	export interface ValidateAttestationOccurrenceRequestFormProperties {

		/** Required. The resource name of the Note to which the containing Occurrence is associated. */
		occurrenceNote: FormControl<string | null | undefined>,

		/** Required. The URI of the artifact (e.g. container image) that is the subject of the containing Occurrence. */
		occurrenceResourceUri: FormControl<string | null | undefined>,
	}
	export function CreateValidateAttestationOccurrenceRequestFormGroup() {
		return new FormGroup<ValidateAttestationOccurrenceRequestFormProperties>({
			occurrenceNote: new FormControl<string | null | undefined>(undefined),
			occurrenceResourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ValidationHelperV1.ValidateAttestationOccurrence. */
	export interface ValidateAttestationOccurrenceResponse {

		/** The reason for denial if the Attestation couldn't be validated. */
		denialReason?: string | null;

		/** The result of the Attestation validation. */
		result?: ValidateAttestationOccurrenceResponseResult | null;
	}

	/** Response message for ValidationHelperV1.ValidateAttestationOccurrence. */
	export interface ValidateAttestationOccurrenceResponseFormProperties {

		/** The reason for denial if the Attestation couldn't be validated. */
		denialReason: FormControl<string | null | undefined>,

		/** The result of the Attestation validation. */
		result: FormControl<ValidateAttestationOccurrenceResponseResult | null | undefined>,
	}
	export function CreateValidateAttestationOccurrenceResponseFormGroup() {
		return new FormGroup<ValidateAttestationOccurrenceResponseFormProperties>({
			denialReason: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<ValidateAttestationOccurrenceResponseResult | null | undefined>(undefined),
		});

	}

	export enum ValidateAttestationOccurrenceResponseResult { RESULT_UNSPECIFIED = 0, VERIFIED = 1, ATTESTATION_NOT_VERIFIABLE = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns whether the given `Attestation` for the given image URI was signed by the given `Attestor`
		 * Post v1beta1/{attestor}:validateAttestationOccurrence
		 * @param {string} attestor Required. The resource name of the Attestor of the occurrence, in the format `projects/attestors/*`.
		 * @return {ValidateAttestationOccurrenceResponse} Successful response
		 */
		Binaryauthorization_projects_attestors_validateAttestationOccurrence(attestor: string, requestBody: ValidateAttestationOccurrenceRequest): Observable<ValidateAttestationOccurrenceResponse> {
			return this.http.post<ValidateAttestationOccurrenceResponse>(this.baseUri + 'v1beta1/' + (attestor == null ? '' : encodeURIComponent(attestor)) + ':validateAttestationOccurrence', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The name of the attestors to delete, in the format `projects/attestors/*`.
		 * @return {Empty} Successful response
		 */
		Binaryauthorization_projects_attestors_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the current system policy in the specified location.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The resource name, in the format `locations/policy`. Note that the system policy is not associated with a project.
		 * @return {Policy} Successful response
		 */
		Binaryauthorization_systempolicy_getPolicy(name: string): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
		 * Put v1beta1/{name}
		 * @param {string} name Required. The resource name, in the format: `projects/attestors/*`. This field may not be updated.
		 * @return {Attestor} Successful response
		 */
		Binaryauthorization_projects_attestors_update(name: string, requestBody: Attestor): Observable<Attestor> {
			return this.http.put<Attestor>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
		 * Get v1beta1/{parent}/attestors
		 * @param {string} parent Required. The resource name of the project associated with the attestors, in the format `projects/*`.
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListAttestorsResponse.next_page_token returned from the previous call to the `ListAttestors` method.
		 * @return {ListAttestorsResponse} Successful response
		 */
		Binaryauthorization_projects_attestors_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAttestorsResponse> {
			return this.http.get<ListAttestorsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attestors&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
		 * Post v1beta1/{parent}/attestors
		 * @param {string} parent Required. The parent of this attestor.
		 * @param {string} attestorId Required. The attestors ID.
		 * @return {Attestor} Successful response
		 */
		Binaryauthorization_projects_attestors_create(parent: string, attestorId: string | null | undefined, requestBody: Attestor): Observable<Attestor> {
			return this.http.post<Attestor>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attestors&attestorId=' + (attestorId == null ? '' : encodeURIComponent(attestorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {IamPolicy} Successful response
		 */
		Binaryauthorization_projects_policy_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<IamPolicy> {
			return this.http.get<IamPolicy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {IamPolicy} Successful response
		 */
		Binaryauthorization_projects_policy_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<IamPolicy> {
			return this.http.post<IamPolicy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Binaryauthorization_projects_policy_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

