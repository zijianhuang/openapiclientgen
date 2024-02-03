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

		/** Optional. The resource names of the attestors that must attest to a container image, in the format `projects/attestors/*`. Each attestor must exist before a policy can reference it. To add an attestor to a policy the principal issuing the policy change request must be able to read the attestor resource. Note: this field must be non-empty when the `evaluation_mode` field specifies `REQUIRE_ATTESTATION`, otherwise it must be empty. */
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

	export enum AdmissionRuleEnforcementMode { ENFORCEMENT_MODE_UNSPECIFIED = 'ENFORCEMENT_MODE_UNSPECIFIED', ENFORCED_BLOCK_AND_AUDIT_LOG = 'ENFORCED_BLOCK_AND_AUDIT_LOG', DRYRUN_AUDIT_LOG_ONLY = 'DRYRUN_AUDIT_LOG_ONLY' }

	export enum AdmissionRuleEvaluationMode { EVALUATION_MODE_UNSPECIFIED = 'EVALUATION_MODE_UNSPECIFIED', ALWAYS_ALLOW = 'ALWAYS_ALLOW', REQUIRE_ATTESTATION = 'REQUIRE_ATTESTATION', ALWAYS_DENY = 'ALWAYS_DENY' }


	/** An admission allowlist pattern exempts images from checks by admission rules. */
	export interface AdmissionWhitelistPattern {

		/** An image name pattern to allowlist, in the form `registry/path/to/image`. This supports a trailing `*` wildcard, but this is allowed only in text after the `registry/` part. This also supports a trailing `**` wildcard which matches subdirectories of a given entry. */
		namePattern?: string | null;
	}

	/** An admission allowlist pattern exempts images from checks by admission rules. */
	export interface AdmissionWhitelistPatternFormProperties {

		/** An image name pattern to allowlist, in the form `registry/path/to/image`. This supports a trailing `*` wildcard, but this is allowed only in text after the `registry/` part. This also supports a trailing `**` wildcard which matches subdirectories of a given entry. */
		namePattern: FormControl<string | null | undefined>,
	}
	export function CreateAdmissionWhitelistPatternFormGroup() {
		return new FormGroup<AdmissionWhitelistPatternFormProperties>({
			namePattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An attestation authenticator that will be used to verify attestations. Typically this is just a set of public keys. Conceptually, an authenticator can be treated as always returning either "authenticated" or "not authenticated" when presented with a signed attestation (almost always assumed to be a [DSSE](https://github.com/secure-systems-lab/dsse) attestation). The details of how an authenticator makes this decision are specific to the type of 'authenticator' that this message wraps. */
	export interface AttestationAuthenticator {

		/** Optional. A user-provided name for this `AttestationAuthenticator`. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results. */
		displayName?: string | null;

		/** A bundle of PKIX public keys, used to authenticate attestation signatures. Generally, a signature is considered to be authenticated by a `PkixPublicKeySet` if any of the public keys verify it (i.e. it is an "OR" of the keys). */
		pkixPublicKeySet?: PkixPublicKeySet;
	}

	/** An attestation authenticator that will be used to verify attestations. Typically this is just a set of public keys. Conceptually, an authenticator can be treated as always returning either "authenticated" or "not authenticated" when presented with a signed attestation (almost always assumed to be a [DSSE](https://github.com/secure-systems-lab/dsse) attestation). The details of how an authenticator makes this decision are specific to the type of 'authenticator' that this message wraps. */
	export interface AttestationAuthenticatorFormProperties {

		/** Optional. A user-provided name for this `AttestationAuthenticator`. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateAttestationAuthenticatorFormGroup() {
		return new FormGroup<AttestationAuthenticatorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A bundle of PKIX public keys, used to authenticate attestation signatures. Generally, a signature is considered to be authenticated by a `PkixPublicKeySet` if any of the public keys verify it (i.e. it is an "OR" of the keys). */
	export interface PkixPublicKeySet {

		/** Required. `pkix_public_keys` must have at least one entry. */
		pkixPublicKeys?: Array<PkixPublicKey>;
	}

	/** A bundle of PKIX public keys, used to authenticate attestation signatures. Generally, a signature is considered to be authenticated by a `PkixPublicKeySet` if any of the public keys verify it (i.e. it is an "OR" of the keys). */
	export interface PkixPublicKeySetFormProperties {
	}
	export function CreatePkixPublicKeySetFormGroup() {
		return new FormGroup<PkixPublicKeySetFormProperties>({
		});

	}


	/** A public key in the PkixPublicKey [format](https://tools.ietf.org/html/rfc5280#section-4.1.2.7). Public keys of this type are typically textually encoded using the PEM format. */
	export interface PkixPublicKey {

		/** Optional. The ID of this public key. Signatures verified by Binary Authorization must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. This may be explicitly provided by the caller, but it MUST be a valid RFC3986 URI. If `key_id` is left blank and this `PkixPublicKey` is not used in the context of a wrapper (see next paragraph), a default key ID will be computed based on the digest of the DER encoding of the public key. If this `PkixPublicKey` is used in the context of a wrapper that has its own notion of key ID (e.g. `AttestorPublicKey`), then this field can either: * Match that value exactly. * Or be left blank, in which case it behaves exactly as though it is equal to that wrapper value. */
		keyId?: string | null;

		/** A PEM-encoded public key, as described in https://tools.ietf.org/html/rfc7468#section-13 */
		publicKeyPem?: string | null;

		/** The signature algorithm used to verify a message against a signature using this key. These signature algorithm must match the structure and any object identifiers encoded in `public_key_pem` (i.e. this algorithm must match that of the public key). */
		signatureAlgorithm?: PkixPublicKeySignatureAlgorithm | null;
	}

	/** A public key in the PkixPublicKey [format](https://tools.ietf.org/html/rfc5280#section-4.1.2.7). Public keys of this type are typically textually encoded using the PEM format. */
	export interface PkixPublicKeyFormProperties {

		/** Optional. The ID of this public key. Signatures verified by Binary Authorization must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. This may be explicitly provided by the caller, but it MUST be a valid RFC3986 URI. If `key_id` is left blank and this `PkixPublicKey` is not used in the context of a wrapper (see next paragraph), a default key ID will be computed based on the digest of the DER encoding of the public key. If this `PkixPublicKey` is used in the context of a wrapper that has its own notion of key ID (e.g. `AttestorPublicKey`), then this field can either: * Match that value exactly. * Or be left blank, in which case it behaves exactly as though it is equal to that wrapper value. */
		keyId: FormControl<string | null | undefined>,

		/** A PEM-encoded public key, as described in https://tools.ietf.org/html/rfc7468#section-13 */
		publicKeyPem: FormControl<string | null | undefined>,

		/** The signature algorithm used to verify a message against a signature using this key. These signature algorithm must match the structure and any object identifiers encoded in `public_key_pem` (i.e. this algorithm must match that of the public key). */
		signatureAlgorithm: FormControl<PkixPublicKeySignatureAlgorithm | null | undefined>,
	}
	export function CreatePkixPublicKeyFormGroup() {
		return new FormGroup<PkixPublicKeyFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			publicKeyPem: new FormControl<string | null | undefined>(undefined),
			signatureAlgorithm: new FormControl<PkixPublicKeySignatureAlgorithm | null | undefined>(undefined),
		});

	}

	export enum PkixPublicKeySignatureAlgorithm { SIGNATURE_ALGORITHM_UNSPECIFIED = 'SIGNATURE_ALGORITHM_UNSPECIFIED', RSA_PSS_2048_SHA256 = 'RSA_PSS_2048_SHA256', RSA_SIGN_PSS_2048_SHA256 = 'RSA_SIGN_PSS_2048_SHA256', RSA_PSS_3072_SHA256 = 'RSA_PSS_3072_SHA256', RSA_SIGN_PSS_3072_SHA256 = 'RSA_SIGN_PSS_3072_SHA256', RSA_PSS_4096_SHA256 = 'RSA_PSS_4096_SHA256', RSA_SIGN_PSS_4096_SHA256 = 'RSA_SIGN_PSS_4096_SHA256', RSA_PSS_4096_SHA512 = 'RSA_PSS_4096_SHA512', RSA_SIGN_PSS_4096_SHA512 = 'RSA_SIGN_PSS_4096_SHA512', RSA_SIGN_PKCS1_2048_SHA256 = 'RSA_SIGN_PKCS1_2048_SHA256', RSA_SIGN_PKCS1_3072_SHA256 = 'RSA_SIGN_PKCS1_3072_SHA256', RSA_SIGN_PKCS1_4096_SHA256 = 'RSA_SIGN_PKCS1_4096_SHA256', RSA_SIGN_PKCS1_4096_SHA512 = 'RSA_SIGN_PKCS1_4096_SHA512', ECDSA_P256_SHA256 = 'ECDSA_P256_SHA256', EC_SIGN_P256_SHA256 = 'EC_SIGN_P256_SHA256', ECDSA_P384_SHA384 = 'ECDSA_P384_SHA384', EC_SIGN_P384_SHA384 = 'EC_SIGN_P384_SHA384', ECDSA_P521_SHA512 = 'ECDSA_P521_SHA512', EC_SIGN_P521_SHA512 = 'EC_SIGN_P521_SHA512' }


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


	/** Specifies the locations for fetching the provenance attestations. */
	export interface AttestationSource {

		/** The IDs of the GCP projects storing the SLSA attestations as Container Analysis Occurrences, in the format `projects/[PROJECT_ID]`. Maximum number of `container_analysis_attestation_projects` allowed in each `AttestationSource` is 10. */
		containerAnalysisAttestationProjects?: Array<string>;
	}

	/** Specifies the locations for fetching the provenance attestations. */
	export interface AttestationSourceFormProperties {
	}
	export function CreateAttestationSourceFormGroup() {
		return new FormGroup<AttestationSourceFormProperties>({
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

		/** An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user. */
		userOwnedGrafeasNote?: UserOwnedGrafeasNote;
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


	/** An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user. */
	export interface UserOwnedGrafeasNote {

		/** Output only. This field will contain the service account email address that this attestor will use as the principal when querying Container Analysis. Attestor administrators must grant this service account the IAM role needed to read attestations from the note_reference in Container Analysis (`containeranalysis.notes.occurrences.viewer`). This email address is fixed for the lifetime of the attestor, but callers should not make any other assumptions about the service account email; future versions may use an email based on a different naming pattern. */
		delegationServiceAccountEmail?: string | null;

		/** Required. The Grafeas resource name of a Attestation.Authority Note, created by the user, in the format: `projects/notes/*`. This field may not be updated. An attestation by this attestor is stored as a Grafeas Attestation.Authority Occurrence that names a container image and that links to this Note. Grafeas is an external dependency. */
		noteReference?: string | null;

		/** Optional. Public keys that verify attestations signed by this attestor. This field may be updated. If this field is non-empty, one of the specified public keys must verify that an attestation was signed by this attestor for the image specified in the admission request. If this field is empty, this attestor always returns that no valid attestations exist. */
		publicKeys?: Array<AttestorPublicKey>;
	}

	/** An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user. */
	export interface UserOwnedGrafeasNoteFormProperties {

		/** Output only. This field will contain the service account email address that this attestor will use as the principal when querying Container Analysis. Attestor administrators must grant this service account the IAM role needed to read attestations from the note_reference in Container Analysis (`containeranalysis.notes.occurrences.viewer`). This email address is fixed for the lifetime of the attestor, but callers should not make any other assumptions about the service account email; future versions may use an email based on a different naming pattern. */
		delegationServiceAccountEmail: FormControl<string | null | undefined>,

		/** Required. The Grafeas resource name of a Attestation.Authority Note, created by the user, in the format: `projects/notes/*`. This field may not be updated. An attestation by this attestor is stored as a Grafeas Attestation.Authority Occurrence that names a container image and that links to this Note. Grafeas is an external dependency. */
		noteReference: FormControl<string | null | undefined>,
	}
	export function CreateUserOwnedGrafeasNoteFormGroup() {
		return new FormGroup<UserOwnedGrafeasNoteFormProperties>({
			delegationServiceAccountEmail: new FormControl<string | null | undefined>(undefined),
			noteReference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An attestor public key that will be used to verify attestations signed by this attestor. */
	export interface AttestorPublicKey {

		/** ASCII-armored representation of a PGP public key, as the entire output by the command `gpg --export --armor foo@example.com` (either LF or CRLF line endings). When using this field, `id` should be left blank. The Binary Authorization API handlers will calculate the ID and fill it in automatically. Binary Authorization computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If `id` is provided by the caller, it will be overwritten by the API-calculated ID. */
		asciiArmoredPgpPublicKey?: string | null;

		/** Optional. A descriptive comment. This field may be updated. */
		comment?: string | null;

		/** The ID of this public key. Signatures verified by Binary Authorization must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on `public_key` cases below for details. */
		id?: string | null;

		/** A public key in the PkixPublicKey [format](https://tools.ietf.org/html/rfc5280#section-4.1.2.7). Public keys of this type are typically textually encoded using the PEM format. */
		pkixPublicKey?: PkixPublicKey;
	}

	/** An attestor public key that will be used to verify attestations signed by this attestor. */
	export interface AttestorPublicKeyFormProperties {

		/** ASCII-armored representation of a PGP public key, as the entire output by the command `gpg --export --armor foo@example.com` (either LF or CRLF line endings). When using this field, `id` should be left blank. The Binary Authorization API handlers will calculate the ID and fill it in automatically. Binary Authorization computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If `id` is provided by the caller, it will be overwritten by the API-calculated ID. */
		asciiArmoredPgpPublicKey: FormControl<string | null | undefined>,

		/** Optional. A descriptive comment. This field may be updated. */
		comment: FormControl<string | null | undefined>,

		/** The ID of this public key. Signatures verified by Binary Authorization must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on `public_key` cases below for details. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAttestorPublicKeyFormGroup() {
		return new FormGroup<AttestorPublicKeyFormProperties>({
			asciiArmoredPgpPublicKey: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/** A single check to perform against a Pod. Checks are grouped into `CheckSet` objects, which are defined by the top-level policy. */
	export interface Check {

		/** Optional. A special-case check that always denies. Note that this still only applies when the scope of the `CheckSet` applies and the image isn't exempted by an image allowlist. This check is primarily useful for testing, or to set the default behavior for all unmatched scopes to "deny". */
		alwaysDeny?: boolean | null;

		/** Optional. A user-provided name for this check. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results. */
		displayName?: string | null;

		/** Images that are exempted from normal checks based on name pattern only. */
		imageAllowlist?: ImageAllowlist;

		/** An image freshness check, which rejects images that were uploaded before the set number of days ago to the supported repositories. */
		imageFreshnessCheck?: ImageFreshnessCheck;

		/** Require a signed [DSSE](https://github.com/secure-systems-lab/dsse) attestation with type SimpleSigning. */
		simpleSigningAttestationCheck?: SimpleSigningAttestationCheck;

		/** A SLSA provenance attestation check, which ensures that images are built by a trusted builder using source code from its trusted repositories only. */
		slsaCheck?: SlsaCheck;

		/** A trusted directory check, which rejects images that do not come from the set of user-configured trusted directories. */
		trustedDirectoryCheck?: TrustedDirectoryCheck;

		/** An image vulnerability check, which rejects images that violate the configured vulnerability rules. */
		vulnerabilityCheck?: VulnerabilityCheck;
	}

	/** A single check to perform against a Pod. Checks are grouped into `CheckSet` objects, which are defined by the top-level policy. */
	export interface CheckFormProperties {

		/** Optional. A special-case check that always denies. Note that this still only applies when the scope of the `CheckSet` applies and the image isn't exempted by an image allowlist. This check is primarily useful for testing, or to set the default behavior for all unmatched scopes to "deny". */
		alwaysDeny: FormControl<boolean | null | undefined>,

		/** Optional. A user-provided name for this check. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateCheckFormGroup() {
		return new FormGroup<CheckFormProperties>({
			alwaysDeny: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Images that are exempted from normal checks based on name pattern only. */
	export interface ImageAllowlist {

		/** Required. A disjunction of image patterns to allow. If any of these patterns match, then the image is considered exempted by this allowlist. */
		allowPattern?: Array<string>;
	}

	/** Images that are exempted from normal checks based on name pattern only. */
	export interface ImageAllowlistFormProperties {
	}
	export function CreateImageAllowlistFormGroup() {
		return new FormGroup<ImageAllowlistFormProperties>({
		});

	}


	/** An image freshness check, which rejects images that were uploaded before the set number of days ago to the supported repositories. */
	export interface ImageFreshnessCheck {

		/** Required. The max number of days that is allowed since the image was uploaded. Must be greater than zero. */
		maxUploadAgeDays?: number | null;
	}

	/** An image freshness check, which rejects images that were uploaded before the set number of days ago to the supported repositories. */
	export interface ImageFreshnessCheckFormProperties {

		/** Required. The max number of days that is allowed since the image was uploaded. Must be greater than zero. */
		maxUploadAgeDays: FormControl<number | null | undefined>,
	}
	export function CreateImageFreshnessCheckFormGroup() {
		return new FormGroup<ImageFreshnessCheckFormProperties>({
			maxUploadAgeDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Require a signed [DSSE](https://github.com/secure-systems-lab/dsse) attestation with type SimpleSigning. */
	export interface SimpleSigningAttestationCheck {

		/** Required. The authenticators required by this check to verify an attestation. Typically this is one or more PKIX public keys for signature verification. Only one authenticator needs to consider an attestation verified in order for an attestation to be considered fully authenticated. In otherwords, this list of authenticators is an "OR" of the authenticator results. At least one authenticator is required. */
		attestationAuthenticators?: Array<AttestationAuthenticator>;

		/** Optional. The projects where attestations are stored as Container Analysis Occurrences, in the format `projects/[PROJECT_ID]`. Only one attestation needs to successfully verify an image for this check to pass, so a single verified attestation found in any of `container_analysis_attestation_projects` is sufficient for the check to pass. When fetching Occurrences from Container Analysis, only `AttestationOccurrence` kinds are considered. In the future, additional Occurrence kinds may be added to the query. Maximum number of `container_analysis_attestation_projects` allowed in each `SimpleSigningAttestationCheck` is 10. */
		containerAnalysisAttestationProjects?: Array<string>;
	}

	/** Require a signed [DSSE](https://github.com/secure-systems-lab/dsse) attestation with type SimpleSigning. */
	export interface SimpleSigningAttestationCheckFormProperties {
	}
	export function CreateSimpleSigningAttestationCheckFormGroup() {
		return new FormGroup<SimpleSigningAttestationCheckFormProperties>({
		});

	}


	/** A SLSA provenance attestation check, which ensures that images are built by a trusted builder using source code from its trusted repositories only. */
	export interface SlsaCheck {

		/** Specifies a list of verification rules for the SLSA attestations. An image is considered compliant with the SlsaCheck if any of the rules are satisfied. */
		rules?: Array<VerificationRule>;
	}

	/** A SLSA provenance attestation check, which ensures that images are built by a trusted builder using source code from its trusted repositories only. */
	export interface SlsaCheckFormProperties {
	}
	export function CreateSlsaCheckFormGroup() {
		return new FormGroup<SlsaCheckFormProperties>({
		});

	}


	/** Specifies verification rules for evaluating the SLSA attestations including: which builders to trust, where to fetch the SLSA attestations generated by those builders, and other builder-specific evaluation rules such as which source repositories are trusted. An image is considered verified by the rule if any of the fetched SLSA attestations is verified. */
	export interface VerificationRule {

		/** Specifies the locations for fetching the provenance attestations. */
		attestationSource?: AttestationSource;

		/** If true, require the image to be built from a top-level configuration. `trusted_source_repo_patterns` specifies the repositories containing this configuration. */
		configBasedBuildRequired?: boolean | null;

		/** Each verification rule is used for evaluation against provenances generated by a specific builder (group). For some of the builders, such as the Google Cloud Build, users don't need to explicitly specify their roots of trust in the policy since the evaluation service can automatically fetch them based on the builder (group). */
		trustedBuilder?: VerificationRuleTrustedBuilder | null;

		/** List of trusted source code repository URL patterns. These patterns match the full repository URL without its scheme (e.g. `https://`). The patterns must not include schemes. For example, the pattern `source.cloud.google.com/my-project/my-repo-name` matches the following URLs: - `source.cloud.google.com/my-project/my-repo-name` - `git+ssh://source.cloud.google.com/my-project/my-repo-name` - `https://source.cloud.google.com/my-project/my-repo-name` A pattern matches a URL either exactly or with `*` wildcards. `*` can be used in only two ways: 1. trailing `*` after hosturi/ to match varying endings; 2. trailing `**` after hosturi/ to match `/` as well. `*` and `**` can only be used as wildcards and can only occur at the end of the pattern after a `/`. (So it's not possible to match a URL that contains literal `*`.) For example: - `github.com/my-project/my-repo` is valid to match a single repo - `github.com/my-project/*` will match all direct repos in `my-project` - `github.com/**` matches all repos in GitHub */
		trustedSourceRepoPatterns?: Array<string>;
	}

	/** Specifies verification rules for evaluating the SLSA attestations including: which builders to trust, where to fetch the SLSA attestations generated by those builders, and other builder-specific evaluation rules such as which source repositories are trusted. An image is considered verified by the rule if any of the fetched SLSA attestations is verified. */
	export interface VerificationRuleFormProperties {

		/** If true, require the image to be built from a top-level configuration. `trusted_source_repo_patterns` specifies the repositories containing this configuration. */
		configBasedBuildRequired: FormControl<boolean | null | undefined>,

		/** Each verification rule is used for evaluation against provenances generated by a specific builder (group). For some of the builders, such as the Google Cloud Build, users don't need to explicitly specify their roots of trust in the policy since the evaluation service can automatically fetch them based on the builder (group). */
		trustedBuilder: FormControl<VerificationRuleTrustedBuilder | null | undefined>,
	}
	export function CreateVerificationRuleFormGroup() {
		return new FormGroup<VerificationRuleFormProperties>({
			configBasedBuildRequired: new FormControl<boolean | null | undefined>(undefined),
			trustedBuilder: new FormControl<VerificationRuleTrustedBuilder | null | undefined>(undefined),
		});

	}

	export enum VerificationRuleTrustedBuilder { BUILDER_UNSPECIFIED = 'BUILDER_UNSPECIFIED', GOOGLE_CLOUD_BUILD = 'GOOGLE_CLOUD_BUILD' }


	/** A trusted directory check, which rejects images that do not come from the set of user-configured trusted directories. */
	export interface TrustedDirectoryCheck {

		/** Required. List of trusted directory patterns. A pattern is in the form "registry/path/to/directory". The registry domain part is defined as two or more dot-separated words, e.g., `us.pkg.dev`, or `gcr.io`. Additionally, `*` can be used in three ways as wildcards: 1. leading `*` to match varying prefixes in registry subdomain (useful for location prefixes); 2. trailing `*` after registry/ to match varying endings; 3. trailing `**` after registry/ to match "/" as well. For example: -- `gcr.io/my-project/my-repo` is valid to match a single directory -- `*-docker.pkg.dev/my-project/my-repo` or `*.gcr.io/my-project` are valid to match varying prefixes -- `gcr.io/my-project/*` will match all direct directories in `my-project` -- `gcr.io/my-project/**` would match all directories in `my-project` -- `gcr.i*` is not allowed since the registry is not completely specified -- `sub*domain.gcr.io/nginx` is not valid because only leading `*` or trailing `*` are allowed. -- `*pkg.dev/my-project/my-repo` is not valid because leading `*` can only match subdomain -- `**-docker.pkg.dev` is not valid because one leading `*` is allowed, and that it cannot match `/` */
		trustedDirPatterns?: Array<string>;
	}

	/** A trusted directory check, which rejects images that do not come from the set of user-configured trusted directories. */
	export interface TrustedDirectoryCheckFormProperties {
	}
	export function CreateTrustedDirectoryCheckFormGroup() {
		return new FormGroup<TrustedDirectoryCheckFormProperties>({
		});

	}


	/** An image vulnerability check, which rejects images that violate the configured vulnerability rules. */
	export interface VulnerabilityCheck {

		/** Optional. A list of specific CVEs to ignore even if the vulnerability level violates `maximumUnfixableSeverity` or `maximumFixableSeverity`. CVEs are listed in the format of Container Analysis note id. For example: - CVE-2021-20305 - CVE-2020-10543 The CVEs are applicable regardless of note provider project, e.g., an entry of `CVE-2021-20305` will allow vulnerabilities with a note name of either `projects/goog-vulnz/notes/CVE-2021-20305` or `projects/CUSTOM-PROJECT/notes/CVE-2021-20305`. */
		allowedCves?: Array<string>;

		/** Optional. A list of specific CVEs to always raise warnings about even if the vulnerability level meets `maximumUnfixableSeverity` or `maximumFixableSeverity`. CVEs are listed in the format of Container Analysis note id. For example: - CVE-2021-20305 - CVE-2020-10543 The CVEs are applicable regardless of note provider project, e.g., an entry of `CVE-2021-20305` will block vulnerabilities with a note name of either `projects/goog-vulnz/notes/CVE-2021-20305` or `projects/CUSTOM-PROJECT/notes/CVE-2021-20305`. */
		blockedCves?: Array<string>;

		/** Optional. The projects where vulnerabilities are stored as Container Analysis Occurrences. Each project is expressed in the resource format of `projects/[PROJECT_ID]`, e.g., `projects/my-gcp-project`. An attempt will be made for each project to fetch vulnerabilities, and all valid vulnerabilities will be used to check against the vulnerability policy. If no valid scan is found in all projects configured here, an error will be returned for the check. Maximum number of `container_analysis_vulnerability_projects` allowed in each `VulnerabilityCheck` is 10. */
		containerAnalysisVulnerabilityProjects?: Array<string>;

		/** Required. The threshold for severity for which a fix is currently available. This field is required and must be set. */
		maximumFixableSeverity?: VulnerabilityCheckMaximumFixableSeverity | null;

		/** Required. The threshold for severity for which a fix isn't currently available. This field is required and must be set. */
		maximumUnfixableSeverity?: VulnerabilityCheckMaximumFixableSeverity | null;
	}

	/** An image vulnerability check, which rejects images that violate the configured vulnerability rules. */
	export interface VulnerabilityCheckFormProperties {

		/** Required. The threshold for severity for which a fix is currently available. This field is required and must be set. */
		maximumFixableSeverity: FormControl<VulnerabilityCheckMaximumFixableSeverity | null | undefined>,

		/** Required. The threshold for severity for which a fix isn't currently available. This field is required and must be set. */
		maximumUnfixableSeverity: FormControl<VulnerabilityCheckMaximumFixableSeverity | null | undefined>,
	}
	export function CreateVulnerabilityCheckFormGroup() {
		return new FormGroup<VulnerabilityCheckFormProperties>({
			maximumFixableSeverity: new FormControl<VulnerabilityCheckMaximumFixableSeverity | null | undefined>(undefined),
			maximumUnfixableSeverity: new FormControl<VulnerabilityCheckMaximumFixableSeverity | null | undefined>(undefined),
		});

	}

	export enum VulnerabilityCheckMaximumFixableSeverity { MAXIMUM_ALLOWED_SEVERITY_UNSPECIFIED = 'MAXIMUM_ALLOWED_SEVERITY_UNSPECIFIED', BLOCK_ALL = 'BLOCK_ALL', MINIMAL = 'MINIMAL', LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH', CRITICAL = 'CRITICAL', ALLOW_ALL = 'ALLOW_ALL' }


	/** A conjunction of policy checks, scoped to a particular namespace or Kubernetes service account. In order for evaluation of a `CheckSet` to return "allowed" for a given image in a given Pod, one of the following conditions must be satisfied: * The image is explicitly exempted by an entry in `image_allowlist`, OR * ALL of the `checks` evaluate to "allowed". */
	export interface CheckSet {

		/** Optional. The checks to apply. The ultimate result of evaluating the check set will be "allow" if and only if every check in `checks` evaluates to "allow". If `checks` is empty, the default behavior is "always allow". */
		checks?: Array<Check>;

		/** Optional. A user-provided name for this `CheckSet`. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results. */
		displayName?: string | null;

		/** Images that are exempted from normal checks based on name pattern only. */
		imageAllowlist?: ImageAllowlist;

		/** A scope specifier for `CheckSet` objects. */
		scope?: Scope;
	}

	/** A conjunction of policy checks, scoped to a particular namespace or Kubernetes service account. In order for evaluation of a `CheckSet` to return "allowed" for a given image in a given Pod, one of the following conditions must be satisfied: * The image is explicitly exempted by an entry in `image_allowlist`, OR * ALL of the `checks` evaluate to "allowed". */
	export interface CheckSetFormProperties {

		/** Optional. A user-provided name for this `CheckSet`. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateCheckSetFormGroup() {
		return new FormGroup<CheckSetFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A scope specifier for `CheckSet` objects. */
	export interface Scope {

		/** Optional. Matches all Kubernetes service accounts in the provided namespace, unless a more specific `kubernetes_service_account` scope already matched. */
		kubernetesNamespace?: string | null;

		/** Optional. Matches a single Kubernetes service account, e.g. `my-namespace:my-service-account`. `kubernetes_service_account` scope is always more specific than `kubernetes_namespace` scope for the same namespace. */
		kubernetesServiceAccount?: string | null;
	}

	/** A scope specifier for `CheckSet` objects. */
	export interface ScopeFormProperties {

		/** Optional. Matches all Kubernetes service accounts in the provided namespace, unless a more specific `kubernetes_service_account` scope already matched. */
		kubernetesNamespace: FormControl<string | null | undefined>,

		/** Optional. Matches a single Kubernetes service account, e.g. `my-namespace:my-service-account`. `kubernetes_service_account` scope is always more specific than `kubernetes_namespace` scope for the same namespace. */
		kubernetesServiceAccount: FormControl<string | null | undefined>,
	}
	export function CreateScopeFormGroup() {
		return new FormGroup<ScopeFormProperties>({
			kubernetesNamespace: new FormControl<string | null | undefined>(undefined),
			kubernetesServiceAccount: new FormControl<string | null | undefined>(undefined),
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


	/** A Binary Authorization policy for a GKE cluster. This is one type of policy that can occur as a `PlatformPolicy`. */
	export interface GkePolicy {

		/** Optional. The `CheckSet` objects to apply, scoped by namespace or namespace and service account. Exactly one `CheckSet` will be evaluated for a given Pod (unless the list is empty, in which case the behavior is "always allow"). If multiple `CheckSet` objects have scopes that match the namespace and service account of the Pod being evaluated, only the `CheckSet` with the MOST SPECIFIC scope will match. `CheckSet` objects must be listed in order of decreasing specificity, i.e. if a scope matches a given service account (which must include the namespace), it must come before a `CheckSet` with a scope matching just that namespace. This property is enforced by server-side validation. The purpose of this restriction is to ensure that if more than one `CheckSet` matches a given Pod, the `CheckSet` that will be evaluated will always be the first in the list to match (because if any other matches, it must be less specific). If `check_sets` is empty, the default behavior is to allow all images. If `check_sets` is non-empty, the last `check_sets` entry must always be a `CheckSet` with no scope set, i.e. a catchall to handle any situation not caught by the preceding `CheckSet` objects. */
		checkSets?: Array<CheckSet>;

		/** Images that are exempted from normal checks based on name pattern only. */
		imageAllowlist?: ImageAllowlist;
	}

	/** A Binary Authorization policy for a GKE cluster. This is one type of policy that can occur as a `PlatformPolicy`. */
	export interface GkePolicyFormProperties {
	}
	export function CreateGkePolicyFormGroup() {
		return new FormGroup<GkePolicyFormProperties>({
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


	/** Response message for BinauthzManagementServiceV1.ListAttestors. */
	export interface ListAttestorsResponse {

		/** The list of attestors. */
		attestors?: Array<Attestor>;

		/** A token to retrieve the next page of results. Pass this value in the ListAttestorsRequest.page_token field in the subsequent call to the `ListAttestors` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for BinauthzManagementServiceV1.ListAttestors. */
	export interface ListAttestorsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListAttestorsRequest.page_token field in the subsequent call to the `ListAttestors` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttestorsResponseFormGroup() {
		return new FormGroup<ListAttestorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for PlatformPolicyManagementService.ListPlatformPolicies. */
	export interface ListPlatformPoliciesResponse {

		/** A token to retrieve the next page of results. Pass this value in the ListPlatformPoliciesRequest.page_token field in the subsequent call to the `ListPlatformPolicies` method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of platform policies. */
		platformPolicies?: Array<PlatformPolicy>;
	}

	/** Response message for PlatformPolicyManagementService.ListPlatformPolicies. */
	export interface ListPlatformPoliciesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListPlatformPoliciesRequest.page_token field in the subsequent call to the `ListPlatformPolicies` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlatformPoliciesResponseFormGroup() {
		return new FormGroup<ListPlatformPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Binary Authorization platform policy for deployments on various platforms. */
	export interface PlatformPolicy {

		/** Optional. A description comment about the policy. */
		description?: string | null;

		/** A Binary Authorization policy for a GKE cluster. This is one type of policy that can occur as a `PlatformPolicy`. */
		gkePolicy?: GkePolicy;

		/** Output only. The relative resource name of the Binary Authorization platform policy, in the form of `projects/platforms/policies/*`. */
		name?: string | null;

		/** Output only. Time when the policy was last updated. */
		updateTime?: string | null;
	}

	/** A Binary Authorization platform policy for deployments on various platforms. */
	export interface PlatformPolicyFormProperties {

		/** Optional. A description comment about the policy. */
		description: FormControl<string | null | undefined>,

		/** Output only. The relative resource name of the Binary Authorization platform policy, in the form of `projects/platforms/policies/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Time when the policy was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePlatformPolicyFormGroup() {
		return new FormGroup<PlatformPolicyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A policy for container image binary authorization. */
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

	/** A policy for container image binary authorization. */
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

	export enum PolicyGlobalPolicyEvaluationMode { GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED = 'GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED', ENABLE = 'ENABLE', DISABLE = 'DISABLE' }


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

	export enum ValidateAttestationOccurrenceResponseResult { RESULT_UNSPECIFIED = 'RESULT_UNSPECIFIED', VERIFIED = 'VERIFIED', ATTESTATION_NOT_VERIFIABLE = 'ATTESTATION_NOT_VERIFIABLE' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns whether the given `Attestation` for the given image URI was signed by the given `Attestor`
		 * Post v1/{attestor}:validateAttestationOccurrence
		 * @param {string} attestor Required. The resource name of the Attestor of the occurrence, in the format `projects/attestors/*`.
		 * @return {ValidateAttestationOccurrenceResponse} Successful response
		 */
		Binaryauthorization_projects_attestors_validateAttestationOccurrence(attestor: string, requestBody: ValidateAttestationOccurrenceRequest): Observable<ValidateAttestationOccurrenceResponse> {
			return this.http.post<ValidateAttestationOccurrenceResponse>(this.baseUri + 'v1/' + (attestor == null ? '' : encodeURIComponent(attestor)) + ':validateAttestationOccurrence', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the platform policy to delete, in the format `projects/platforms/policies/*`.
		 * @return {Empty} Successful response
		 */
		Binaryauthorization_projects_platforms_policies_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the current system policy in the specified location.
		 * Get v1/{name}
		 * @param {string} name Required. The resource name, in the format `locations/policy`. Note that the system policy is not associated with a project.
		 * @return {Policy} Successful response
		 */
		Binaryauthorization_systempolicy_getPolicy(name: string): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Replaces a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
		 * Put v1/{name}
		 * @param {string} name Output only. The relative resource name of the Binary Authorization platform policy, in the form of `projects/platforms/policies/*`.
		 * @return {PlatformPolicy} Successful response
		 */
		Binaryauthorization_projects_platforms_policies_replacePlatformPolicy(name: string, requestBody: PlatformPolicy): Observable<PlatformPolicy> {
			return this.http.put<PlatformPolicy>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists attestors. Returns `INVALID_ARGUMENT` if the project does not exist.
		 * Get v1/{parent}/attestors
		 * @param {string} parent Required. The resource name of the project associated with the attestors, in the format `projects/*`.
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListAttestorsResponse.next_page_token returned from the previous call to the `ListAttestors` method.
		 * @return {ListAttestorsResponse} Successful response
		 */
		Binaryauthorization_projects_attestors_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAttestorsResponse> {
			return this.http.get<ListAttestorsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attestors&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an attestor, and returns a copy of the new attestor. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the attestor already exists.
		 * Post v1/{parent}/attestors
		 * @param {string} parent Required. The parent of this attestor.
		 * @param {string} attestorId Required. The attestors ID.
		 * @return {Attestor} Successful response
		 */
		Binaryauthorization_projects_attestors_create(parent: string, attestorId: string | null | undefined, requestBody: Attestor): Observable<Attestor> {
			return this.http.post<Attestor>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attestors&attestorId=' + (attestorId == null ? '' : encodeURIComponent(attestorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists platform policies owned by a project in the specified platform. Returns `INVALID_ARGUMENT` if the project or the platform doesn't exist.
		 * Get v1/{parent}/policies
		 * @param {string} parent Required. The resource name of the platform associated with the platform policies using the format `projects/platforms/*`.
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListPlatformPoliciesResponse.next_page_token returned from the previous call to the `ListPlatformPolicies` method.
		 * @return {ListPlatformPoliciesResponse} Successful response
		 */
		Binaryauthorization_projects_platforms_policies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPlatformPoliciesResponse> {
			return this.http.get<ListPlatformPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a platform policy, and returns a copy of it. Returns `NOT_FOUND` if the project or platform doesn't exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the policy already exists, and `INVALID_ARGUMENT` if the policy contains a platform-specific policy that does not match the platform value specified in the URL.
		 * Post v1/{parent}/policies
		 * @param {string} parent Required. The parent of this platform policy.
		 * @param {string} policyId Required. The platform policy ID.
		 * @return {PlatformPolicy} Successful response
		 */
		Binaryauthorization_projects_platforms_policies_create(parent: string, policyId: string | null | undefined, requestBody: PlatformPolicy): Observable<PlatformPolicy> {
			return this.http.post<PlatformPolicy>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policies&policyId=' + (policyId == null ? '' : encodeURIComponent(policyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {IamPolicy} Successful response
		 */
		Binaryauthorization_projects_policy_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<IamPolicy> {
			return this.http.get<IamPolicy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {IamPolicy} Successful response
		 */
		Binaryauthorization_projects_policy_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<IamPolicy> {
			return this.http.post<IamPolicy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Binaryauthorization_projects_policy_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

