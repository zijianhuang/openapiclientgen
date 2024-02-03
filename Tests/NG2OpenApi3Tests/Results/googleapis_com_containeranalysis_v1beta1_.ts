import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An alias to a repo revision. */
	export interface AliasContext {

		/** The alias kind. */
		kind?: AliasContextKind | null;

		/** The alias name. */
		name?: string | null;
	}

	/** An alias to a repo revision. */
	export interface AliasContextFormProperties {

		/** The alias kind. */
		kind: FormControl<AliasContextKind | null | undefined>,

		/** The alias name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAliasContextFormGroup() {
		return new FormGroup<AliasContextFormProperties>({
			kind: new FormControl<AliasContextKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AliasContextKind { KIND_UNSPECIFIED = 'KIND_UNSPECIFIED', FIXED = 'FIXED', MOVABLE = 'MOVABLE', OTHER = 'OTHER' }


	/** Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource. */
	export interface AnalysisCompleted {
		analysisType?: Array<string>;
	}

	/** Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource. */
	export interface AnalysisCompletedFormProperties {
	}
	export function CreateAnalysisCompletedFormGroup() {
		return new FormGroup<AnalysisCompletedFormProperties>({
		});

	}


	/** Artifact describes a build product. */
	export interface Artifact {

		/** Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container. */
		checksum?: string | null;

		/** Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`. */
		id?: string | null;

		/** Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image. */
		names?: Array<string>;
	}

	/** Artifact describes a build product. */
	export interface ArtifactFormProperties {

		/** Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container. */
		checksum: FormControl<string | null | undefined>,

		/** Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			checksum: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a hash object for use in Materials and Products. */
	export interface ArtifactHashes {
		sha256?: string | null;
	}

	/** Defines a hash object for use in Materials and Products. */
	export interface ArtifactHashesFormProperties {
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateArtifactHashesFormGroup() {
		return new FormGroup<ArtifactHashesFormProperties>({
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an object to declare an in-toto artifact rule */
	export interface ArtifactRule {
		artifactRule?: Array<string>;
	}

	/** Defines an object to declare an in-toto artifact rule */
	export interface ArtifactRuleFormProperties {
	}
	export function CreateArtifactRuleFormGroup() {
		return new FormGroup<ArtifactRuleFormProperties>({
		});

	}


	/** Assessment provides all information that is related to a single vulnerability for this product. */
	export interface Assessment {

		/** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs. */
		cve?: string | null;

		/** Contains information about the impact of this vulnerability, this will change with time. */
		impacts?: Array<string>;

		/** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
		justification?: Justification;

		/** A detailed description of this Vex. */
		longDescription?: string | null;

		/** Holds a list of references associated with this vulnerability item and assessment. These uris have additional information about the vulnerability and the assessment itself. E.g. Link to a document which details how this assessment concluded the state of this vulnerability. */
		relatedUris?: Array<RelatedUrl>;

		/** Specifies details on how to handle (and presumably, fix) a vulnerability. */
		remediations?: Array<Remediation>;

		/** A one sentence description of this Vex. */
		shortDescription?: string | null;

		/** Provides the state of this Vulnerability assessment. */
		state?: AssessmentState | null;

		/** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
		vulnerabilityId?: string | null;
	}

	/** Assessment provides all information that is related to a single vulnerability for this product. */
	export interface AssessmentFormProperties {

		/** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs. */
		cve: FormControl<string | null | undefined>,

		/** A detailed description of this Vex. */
		longDescription: FormControl<string | null | undefined>,

		/** A one sentence description of this Vex. */
		shortDescription: FormControl<string | null | undefined>,

		/** Provides the state of this Vulnerability assessment. */
		state: FormControl<AssessmentState | null | undefined>,

		/** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
		vulnerabilityId: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentFormGroup() {
		return new FormGroup<AssessmentFormProperties>({
			cve: new FormControl<string | null | undefined>(undefined),
			longDescription: new FormControl<string | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AssessmentState | null | undefined>(undefined),
			vulnerabilityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
	export interface Justification {

		/** Additional details on why this justification was chosen. */
		details?: string | null;

		/** The justification type for this vulnerability. */
		justificationType?: JustificationJustificationType | null;
	}

	/** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
	export interface JustificationFormProperties {

		/** Additional details on why this justification was chosen. */
		details: FormControl<string | null | undefined>,

		/** The justification type for this vulnerability. */
		justificationType: FormControl<JustificationJustificationType | null | undefined>,
	}
	export function CreateJustificationFormGroup() {
		return new FormGroup<JustificationFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			justificationType: new FormControl<JustificationJustificationType | null | undefined>(undefined),
		});

	}

	export enum JustificationJustificationType { JUSTIFICATION_TYPE_UNSPECIFIED = 'JUSTIFICATION_TYPE_UNSPECIFIED', COMPONENT_NOT_PRESENT = 'COMPONENT_NOT_PRESENT', VULNERABLE_CODE_NOT_PRESENT = 'VULNERABLE_CODE_NOT_PRESENT', VULNERABLE_CODE_NOT_IN_EXECUTE_PATH = 'VULNERABLE_CODE_NOT_IN_EXECUTE_PATH', VULNERABLE_CODE_CANNOT_BE_CONTROLLED_BY_ADVERSARY = 'VULNERABLE_CODE_CANNOT_BE_CONTROLLED_BY_ADVERSARY', INLINE_MITIGATIONS_ALREADY_EXIST = 'INLINE_MITIGATIONS_ALREADY_EXIST' }


	/** Metadata for any related URL information. */
	export interface RelatedUrl {

		/** Label to describe usage of the URL. */
		label?: string | null;

		/** Specific URL associated with the resource. */
		url?: string | null;
	}

	/** Metadata for any related URL information. */
	export interface RelatedUrlFormProperties {

		/** Label to describe usage of the URL. */
		label: FormControl<string | null | undefined>,

		/** Specific URL associated with the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateRelatedUrlFormGroup() {
		return new FormGroup<RelatedUrlFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies details on how to handle (and presumably, fix) a vulnerability. */
	export interface Remediation {

		/** Contains a comprehensive human-readable discussion of the remediation. */
		details?: string | null;

		/** The type of remediation that can be applied. */
		remediationType?: RemediationRemediationType | null;

		/** Metadata for any related URL information. */
		remediationUri?: RelatedUrl;
	}

	/** Specifies details on how to handle (and presumably, fix) a vulnerability. */
	export interface RemediationFormProperties {

		/** Contains a comprehensive human-readable discussion of the remediation. */
		details: FormControl<string | null | undefined>,

		/** The type of remediation that can be applied. */
		remediationType: FormControl<RemediationRemediationType | null | undefined>,
	}
	export function CreateRemediationFormGroup() {
		return new FormGroup<RemediationFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			remediationType: new FormControl<RemediationRemediationType | null | undefined>(undefined),
		});

	}

	export enum RemediationRemediationType { REMEDIATION_TYPE_UNSPECIFIED = 'REMEDIATION_TYPE_UNSPECIFIED', MITIGATION = 'MITIGATION', NO_FIX_PLANNED = 'NO_FIX_PLANNED', NONE_AVAILABLE = 'NONE_AVAILABLE', VENDOR_FIX = 'VENDOR_FIX', WORKAROUND = 'WORKAROUND' }

	export enum AssessmentState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', AFFECTED = 'AFFECTED', NOT_AFFECTED = 'NOT_AFFECTED', FIXED = 'FIXED', UNDER_INVESTIGATION = 'UNDER_INVESTIGATION' }


	/** Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for). */
	export interface Attestation {

		/** An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring. */
		genericSignedAttestation?: GenericSignedAttestation;

		/** An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file. */
		pgpSignedAttestation?: PgpSignedAttestation;
	}

	/** Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for). */
	export interface AttestationFormProperties {
	}
	export function CreateAttestationFormGroup() {
		return new FormGroup<AttestationFormProperties>({
		});

	}


	/** An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring. */
	export interface GenericSignedAttestation {

		/** Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema). */
		contentType?: GenericSignedAttestationContentType | null;

		/** The serialized payload that is verified by one or more `signatures`. The encoding and semantic meaning of this payload must match what is set in `content_type`. */
		serializedPayload?: string | null;

		/** One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification. */
		signatures?: Array<Signature>;
	}

	/** An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring. */
	export interface GenericSignedAttestationFormProperties {

		/** Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema). */
		contentType: FormControl<GenericSignedAttestationContentType | null | undefined>,

		/** The serialized payload that is verified by one or more `signatures`. The encoding and semantic meaning of this payload must match what is set in `content_type`. */
		serializedPayload: FormControl<string | null | undefined>,
	}
	export function CreateGenericSignedAttestationFormGroup() {
		return new FormGroup<GenericSignedAttestationFormProperties>({
			contentType: new FormControl<GenericSignedAttestationContentType | null | undefined>(undefined),
			serializedPayload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GenericSignedAttestationContentType { CONTENT_TYPE_UNSPECIFIED = 'CONTENT_TYPE_UNSPECIFIED', SIMPLE_SIGNING_JSON = 'SIMPLE_SIGNING_JSON' }


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


	/** An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file. */
	export interface PgpSignedAttestation {

		/** Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema). */
		contentType?: GenericSignedAttestationContentType | null;

		/** The cryptographic fingerprint of the key used to generate the signature, as output by, e.g. `gpg --list-keys`. This should be the version 4, full 160-bit fingerprint, expressed as a 40 character hexadecimal string. See https://tools.ietf.org/html/rfc4880#section-12.2 for details. Implementations may choose to acknowledge "LONG", "SHORT", or other abbreviated key IDs, but only the full fingerprint is guaranteed to work. In gpg, the full fingerprint can be retrieved from the `fpr` field returned when calling --list-keys with --with-colons. For example: ``` gpg --with-colons --with-fingerprint --force-v4-certs \ --list-keys attester@example.com tru::1:1513631572:0:3:1:5 pub:...... fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB: ``` Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`. */
		pgpKeyId?: string | null;

		/** Required. The raw content of the signature, as output by GNU Privacy Guard (GPG) or equivalent. Since this message only supports attached signatures, the payload that was signed must be attached. While the signature format supported is dependent on the verification implementation, currently only ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor --output=signature.gpg payload.json` will create the signature content expected in this field in `signature.gpg` for the `payload.json` attestation payload. */
		signature?: string | null;
	}

	/** An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file. */
	export interface PgpSignedAttestationFormProperties {

		/** Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema). */
		contentType: FormControl<GenericSignedAttestationContentType | null | undefined>,

		/** The cryptographic fingerprint of the key used to generate the signature, as output by, e.g. `gpg --list-keys`. This should be the version 4, full 160-bit fingerprint, expressed as a 40 character hexadecimal string. See https://tools.ietf.org/html/rfc4880#section-12.2 for details. Implementations may choose to acknowledge "LONG", "SHORT", or other abbreviated key IDs, but only the full fingerprint is guaranteed to work. In gpg, the full fingerprint can be retrieved from the `fpr` field returned when calling --list-keys with --with-colons. For example: ``` gpg --with-colons --with-fingerprint --force-v4-certs \ --list-keys attester@example.com tru::1:1513631572:0:3:1:5 pub:...... fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB: ``` Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`. */
		pgpKeyId: FormControl<string | null | undefined>,

		/** Required. The raw content of the signature, as output by GNU Privacy Guard (GPG) or equivalent. Since this message only supports attached signatures, the payload that was signed must be attached. While the signature format supported is dependent on the verification implementation, currently only ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor --output=signature.gpg payload.json` will create the signature content expected in this field in `signature.gpg` for the `payload.json` attestation payload. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreatePgpSignedAttestationFormGroup() {
		return new FormGroup<PgpSignedAttestationFormProperties>({
			contentType: new FormControl<GenericSignedAttestationContentType | null | undefined>(undefined),
			pgpKeyId: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Note kind that represents a logical attestation "role" or "authority". For example, an organization might have one `Authority` for "QA" and one for "build". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project. */
	export interface Authority {

		/** This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify. */
		hint?: Hint;
	}

	/** Note kind that represents a logical attestation "role" or "authority". For example, an organization might have one `Authority` for "QA" and one for "build". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project. */
	export interface AuthorityFormProperties {
	}
	export function CreateAuthorityFormGroup() {
		return new FormGroup<AuthorityFormProperties>({
		});

	}


	/** This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify. */
	export interface Hint {

		/** Required. The human readable name of this attestation authority, for example "qa". */
		humanReadableName?: string | null;
	}

	/** This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify. */
	export interface HintFormProperties {

		/** Required. The human readable name of this attestation authority, for example "qa". */
		humanReadableName: FormControl<string | null | undefined>,
	}
	export function CreateHintFormGroup() {
		return new FormGroup<HintFormProperties>({
			humanReadableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g. a tag of the resource_url. */
	export interface Basis {

		/** A set of properties that uniquely identify a given Docker image. */
		fingerprint?: Fingerprint;

		/** Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images. */
		resourceUrl?: string | null;
	}

	/** Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g. a tag of the resource_url. */
	export interface BasisFormProperties {

		/** Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images. */
		resourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateBasisFormGroup() {
		return new FormGroup<BasisFormProperties>({
			resourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of properties that uniquely identify a given Docker image. */
	export interface Fingerprint {

		/** Required. The layer ID of the final layer in the Docker image's v1 representation. */
		v1Name?: string | null;

		/** Required. The ordered list of v2 blobs that represent a given image. */
		v2Blob?: Array<string>;

		/** Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept. */
		v2Name?: string | null;
	}

	/** A set of properties that uniquely identify a given Docker image. */
	export interface FingerprintFormProperties {

		/** Required. The layer ID of the final layer in the Docker image's v1 representation. */
		v1Name: FormControl<string | null | undefined>,

		/** Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept. */
		v2Name: FormControl<string | null | undefined>,
	}
	export function CreateFingerprintFormGroup() {
		return new FormGroup<FingerprintFormProperties>({
			v1Name: new FormControl<string | null | undefined>(undefined),
			v2Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to create notes in batch. */
	export interface BatchCreateNotesRequest {

		/** Required. The notes to create, the key is expected to be the note ID. Max allowed length is 1000. */
		notes?: {[id: string]: Note };
	}

	/** Request to create notes in batch. */
	export interface BatchCreateNotesRequestFormProperties {

		/** Required. The notes to create, the key is expected to be the note ID. Max allowed length is 1000. */
		notes: FormControl<{[id: string]: Note } | null | undefined>,
	}
	export function CreateBatchCreateNotesRequestFormGroup() {
		return new FormGroup<BatchCreateNotesRequestFormProperties>({
			notes: new FormControl<{[id: string]: Note } | null | undefined>(undefined),
		});

	}


	/** A type of analysis that can be done for a resource. */
	export interface Note {

		/** Note kind that represents a logical attestation "role" or "authority". For example, an organization might have one `Authority` for "QA" and one for "build". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project. */
		attestationAuthority?: Authority;

		/** Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g. a tag of the resource_url. */
		baseImage?: Basis;

		/** Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence. */
		build?: Build;

		/** Output only. The time this note was created. This field can be used as a filter in list requests. */
		createTime?: string | null;

		/** An artifact that can be deployed in some runtime. */
		deployable?: Deployable;

		/** A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis. */
		discovery?: Discovery;

		/** Time of expiration for this note. Empty if note does not expire. */
		expirationTime?: string | null;

		/** This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note. */
		intoto?: InToto;

		/** Output only. The type of analysis. This field can be used as a filter in list requests. */
		kind?: DiscoveryAnalysisKind | null;

		/** A detailed description of this note. */
		longDescription?: string | null;

		/** Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
		name?: string | null;

		/** Package represents a particular package version. */
		package?: Package;

		/** Other notes related to this note. */
		relatedNoteNames?: Array<string>;

		/** URLs associated with this note. */
		relatedUrl?: Array<RelatedUrl>;

		/** DocumentNote represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/ */
		sbom?: DocumentNote;

		/** The note representing an SBOM reference. */
		sbomReference?: SBOMReferenceNote;

		/** A one sentence description of this note. */
		shortDescription?: string | null;

		/** FileNote represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/ */
		spdxFile?: FileNote;

		/** PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/ */
		spdxPackage?: PackageInfoNote;

		/** RelationshipNote represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/ */
		spdxRelationship?: RelationshipNote;

		/** Output only. The time this note was last updated. This field can be used as a filter in list requests. */
		updateTime?: string | null;

		/** Vulnerability provides metadata about a security vulnerability in a Note. */
		vulnerability?: Vulnerability;

		/** A single VulnerabilityAssessmentNote represents one particular product's vulnerability assessment for one CVE. */
		vulnerabilityAssessment?: VulnerabilityAssessmentNote;
	}

	/** A type of analysis that can be done for a resource. */
	export interface NoteFormProperties {

		/** Output only. The time this note was created. This field can be used as a filter in list requests. */
		createTime: FormControl<string | null | undefined>,

		/** Time of expiration for this note. Empty if note does not expire. */
		expirationTime: FormControl<string | null | undefined>,

		/** Output only. The type of analysis. This field can be used as a filter in list requests. */
		kind: FormControl<DiscoveryAnalysisKind | null | undefined>,

		/** A detailed description of this note. */
		longDescription: FormControl<string | null | undefined>,

		/** Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
		name: FormControl<string | null | undefined>,

		/** A one sentence description of this note. */
		shortDescription: FormControl<string | null | undefined>,

		/** Output only. The time this note was last updated. This field can be used as a filter in list requests. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateNoteFormGroup() {
		return new FormGroup<NoteFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<DiscoveryAnalysisKind | null | undefined>(undefined),
			longDescription: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence. */
	export interface Build {

		/** Required. Immutable. Version of the builder which produced this build. */
		builderVersion?: string | null;

		/** Message encapsulating the signature of the verified build. */
		signature?: BuildSignature;
	}

	/** Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence. */
	export interface BuildFormProperties {

		/** Required. Immutable. Version of the builder which produced this build. */
		builderVersion: FormControl<string | null | undefined>,
	}
	export function CreateBuildFormGroup() {
		return new FormGroup<BuildFormProperties>({
			builderVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message encapsulating the signature of the verified build. */
	export interface BuildSignature {

		/** An ID for the key used to sign. This could be either an ID for the key stored in `public_key` (such as the ID or fingerprint for a PGP key, or the CN for a cert), or a reference to an external key (such as a reference to a key in Cloud Key Management Service). */
		keyId?: string | null;

		/** The type of the key, either stored in `public_key` or referenced in `key_id`. */
		keyType?: BuildSignatureKeyType | null;

		/** Public key of the builder which can be used to verify that the related findings are valid and unchanged. If `key_type` is empty, this defaults to PEM encoded public keys. This field may be empty if `key_id` references an external key. For Cloud Build based signatures, this is a PEM encoded public key. To verify the Cloud Build signature, place the contents of this field into a file (public.pem). The signature field is base64-decoded into its binary representation in signature.bin, and the provenance bytes from `BuildDetails` are base64-decoded into a binary representation in signed.bin. OpenSSL can then verify the signature: `openssl sha256 -verify public.pem -signature signature.bin signed.bin` */
		publicKey?: string | null;

		/** Required. Signature of the related `BuildProvenance`. In JSON, this is base-64 encoded. */
		signature?: string | null;
	}

	/** Message encapsulating the signature of the verified build. */
	export interface BuildSignatureFormProperties {

		/** An ID for the key used to sign. This could be either an ID for the key stored in `public_key` (such as the ID or fingerprint for a PGP key, or the CN for a cert), or a reference to an external key (such as a reference to a key in Cloud Key Management Service). */
		keyId: FormControl<string | null | undefined>,

		/** The type of the key, either stored in `public_key` or referenced in `key_id`. */
		keyType: FormControl<BuildSignatureKeyType | null | undefined>,

		/** Public key of the builder which can be used to verify that the related findings are valid and unchanged. If `key_type` is empty, this defaults to PEM encoded public keys. This field may be empty if `key_id` references an external key. For Cloud Build based signatures, this is a PEM encoded public key. To verify the Cloud Build signature, place the contents of this field into a file (public.pem). The signature field is base64-decoded into its binary representation in signature.bin, and the provenance bytes from `BuildDetails` are base64-decoded into a binary representation in signed.bin. OpenSSL can then verify the signature: `openssl sha256 -verify public.pem -signature signature.bin signed.bin` */
		publicKey: FormControl<string | null | undefined>,

		/** Required. Signature of the related `BuildProvenance`. In JSON, this is base-64 encoded. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateBuildSignatureFormGroup() {
		return new FormGroup<BuildSignatureFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			keyType: new FormControl<BuildSignatureKeyType | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildSignatureKeyType { KEY_TYPE_UNSPECIFIED = 'KEY_TYPE_UNSPECIFIED', PGP_ASCII_ARMORED = 'PGP_ASCII_ARMORED', PKIX_PEM = 'PKIX_PEM' }


	/** An artifact that can be deployed in some runtime. */
	export interface Deployable {

		/** Required. Resource URI for the artifact being deployed. */
		resourceUri?: Array<string>;
	}

	/** An artifact that can be deployed in some runtime. */
	export interface DeployableFormProperties {
	}
	export function CreateDeployableFormGroup() {
		return new FormGroup<DeployableFormProperties>({
		});

	}


	/** A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis. */
	export interface Discovery {

		/** Required. Immutable. The kind of analysis that is handled by this discovery. */
		analysisKind?: DiscoveryAnalysisKind | null;
	}

	/** A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis. */
	export interface DiscoveryFormProperties {

		/** Required. Immutable. The kind of analysis that is handled by this discovery. */
		analysisKind: FormControl<DiscoveryAnalysisKind | null | undefined>,
	}
	export function CreateDiscoveryFormGroup() {
		return new FormGroup<DiscoveryFormProperties>({
			analysisKind: new FormControl<DiscoveryAnalysisKind | null | undefined>(undefined),
		});

	}

	export enum DiscoveryAnalysisKind { NOTE_KIND_UNSPECIFIED = 'NOTE_KIND_UNSPECIFIED', VULNERABILITY = 'VULNERABILITY', BUILD = 'BUILD', IMAGE = 'IMAGE', PACKAGE = 'PACKAGE', DEPLOYMENT = 'DEPLOYMENT', DISCOVERY = 'DISCOVERY', ATTESTATION = 'ATTESTATION', INTOTO = 'INTOTO', SBOM = 'SBOM', SPDX_PACKAGE = 'SPDX_PACKAGE', SPDX_FILE = 'SPDX_FILE', SPDX_RELATIONSHIP = 'SPDX_RELATIONSHIP', VULNERABILITY_ASSESSMENT = 'VULNERABILITY_ASSESSMENT', SBOM_REFERENCE = 'SBOM_REFERENCE' }


	/** This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note. */
	export interface InToto {

		/** This field contains the expected command used to perform the step. */
		expectedCommand?: Array<string>;

		/** The following fields contain in-toto artifact rules identifying the artifacts that enter this supply chain step, and exit the supply chain step, i.e. materials and products of the step. */
		expectedMaterials?: Array<ArtifactRule>;
		expectedProducts?: Array<ArtifactRule>;

		/** This field contains the public keys that can be used to verify the signatures on the step metadata. */
		signingKeys?: Array<SigningKey>;

		/** This field identifies the name of the step in the supply chain. */
		stepName?: string | null;

		/** This field contains a value that indicates the minimum number of keys that need to be used to sign the step's in-toto link. */
		threshold?: string | null;
	}

	/** This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note. */
	export interface InTotoFormProperties {

		/** This field identifies the name of the step in the supply chain. */
		stepName: FormControl<string | null | undefined>,

		/** This field contains a value that indicates the minimum number of keys that need to be used to sign the step's in-toto link. */
		threshold: FormControl<string | null | undefined>,
	}
	export function CreateInTotoFormGroup() {
		return new FormGroup<InTotoFormProperties>({
			stepName: new FormControl<string | null | undefined>(undefined),
			threshold: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This defines the format used to record keys used in the software supply chain. An in-toto link is attested using one or more keys defined in the in-toto layout. An example of this is: { "key_id": "776a00e29f3559e0141b3b096f696abc6cfb0c657ab40f441132b345b0...", "key_type": "rsa", "public_key_value": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0B...", "key_scheme": "rsassa-pss-sha256" } The format for in-toto's key definition can be found in section 4.2 of the in-toto specification. */
	export interface SigningKey {

		/** key_id is an identifier for the signing key. */
		keyId?: string | null;

		/** This field contains the corresponding signature scheme. Eg: "rsassa-pss-sha256". */
		keyScheme?: string | null;

		/** This field identifies the specific signing method. Eg: "rsa", "ed25519", and "ecdsa". */
		keyType?: string | null;

		/** This field contains the actual public key. */
		publicKeyValue?: string | null;
	}

	/** This defines the format used to record keys used in the software supply chain. An in-toto link is attested using one or more keys defined in the in-toto layout. An example of this is: { "key_id": "776a00e29f3559e0141b3b096f696abc6cfb0c657ab40f441132b345b0...", "key_type": "rsa", "public_key_value": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0B...", "key_scheme": "rsassa-pss-sha256" } The format for in-toto's key definition can be found in section 4.2 of the in-toto specification. */
	export interface SigningKeyFormProperties {

		/** key_id is an identifier for the signing key. */
		keyId: FormControl<string | null | undefined>,

		/** This field contains the corresponding signature scheme. Eg: "rsassa-pss-sha256". */
		keyScheme: FormControl<string | null | undefined>,

		/** This field identifies the specific signing method. Eg: "rsa", "ed25519", and "ecdsa". */
		keyType: FormControl<string | null | undefined>,

		/** This field contains the actual public key. */
		publicKeyValue: FormControl<string | null | undefined>,
	}
	export function CreateSigningKeyFormGroup() {
		return new FormGroup<SigningKeyFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			keyScheme: new FormControl<string | null | undefined>(undefined),
			keyType: new FormControl<string | null | undefined>(undefined),
			publicKeyValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Package represents a particular package version. */
	export interface Package {

		/** The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
		architecture?: PackageArchitecture | null;

		/** The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
		cpeUri?: string | null;

		/** The description of this package. */
		description?: string | null;

		/** Hash value, typically a file digest, that allows unique identification a specific package. */
		digest?: Array<Digest>;

		/** The various channels by which a package is distributed. */
		distribution?: Array<Distribution>;

		/** License information. */
		license?: License;

		/** A freeform text denoting the maintainer of this package. */
		maintainer?: string | null;

		/** Required. Immutable. The name of the package. */
		name?: string | null;

		/** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		packageType?: string | null;

		/** The homepage for this package. */
		url?: string | null;

		/** Version contains structured information about the version of a package. */
		version?: Version;
	}

	/** Package represents a particular package version. */
	export interface PackageFormProperties {

		/** The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
		architecture: FormControl<PackageArchitecture | null | undefined>,

		/** The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
		cpeUri: FormControl<string | null | undefined>,

		/** The description of this package. */
		description: FormControl<string | null | undefined>,

		/** A freeform text denoting the maintainer of this package. */
		maintainer: FormControl<string | null | undefined>,

		/** Required. Immutable. The name of the package. */
		name: FormControl<string | null | undefined>,

		/** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		packageType: FormControl<string | null | undefined>,

		/** The homepage for this package. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePackageFormGroup() {
		return new FormGroup<PackageFormProperties>({
			architecture: new FormControl<PackageArchitecture | null | undefined>(undefined),
			cpeUri: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			maintainer: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageArchitecture { ARCHITECTURE_UNSPECIFIED = 'ARCHITECTURE_UNSPECIFIED', X86 = 'X86', X64 = 'X64' }


	/** Digest information. */
	export interface Digest {

		/** `SHA1`, `SHA512` etc. */
		algo?: string | null;

		/** Value of the digest. */
		digestBytes?: string | null;
	}

	/** Digest information. */
	export interface DigestFormProperties {

		/** `SHA1`, `SHA512` etc. */
		algo: FormControl<string | null | undefined>,

		/** Value of the digest. */
		digestBytes: FormControl<string | null | undefined>,
	}
	export function CreateDigestFormGroup() {
		return new FormGroup<DigestFormProperties>({
			algo: new FormControl<string | null | undefined>(undefined),
			digestBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror. */
	export interface Distribution {

		/** The CPU architecture for which packages in this distribution channel were built. */
		architecture?: PackageArchitecture | null;

		/** Required. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. */
		cpeUri?: string | null;

		/** The distribution channel-specific description of this package. */
		description?: string | null;

		/** Version contains structured information about the version of a package. */
		latestVersion?: Version;

		/** A freeform string denoting the maintainer of this package. */
		maintainer?: string | null;

		/** The distribution channel-specific homepage for this package. */
		url?: string | null;
	}

	/** This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror. */
	export interface DistributionFormProperties {

		/** The CPU architecture for which packages in this distribution channel were built. */
		architecture: FormControl<PackageArchitecture | null | undefined>,

		/** Required. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. */
		cpeUri: FormControl<string | null | undefined>,

		/** The distribution channel-specific description of this package. */
		description: FormControl<string | null | undefined>,

		/** A freeform string denoting the maintainer of this package. */
		maintainer: FormControl<string | null | undefined>,

		/** The distribution channel-specific homepage for this package. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDistributionFormGroup() {
		return new FormGroup<DistributionFormProperties>({
			architecture: new FormControl<PackageArchitecture | null | undefined>(undefined),
			cpeUri: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			maintainer: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Version contains structured information about the version of a package. */
	export interface Version {

		/** Used to correct mistakes in the version numbering scheme. */
		epoch?: number | null;

		/** Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range. */
		inclusive?: boolean | null;

		/** Required. Distinguishes between sentinel MIN/MAX versions and normal versions. */
		kind?: VersionKind | null;

		/** Required only when version kind is NORMAL. The main part of the version name. */
		name?: string | null;

		/** The iteration of the package build from the above version. */
		revision?: string | null;
	}

	/** Version contains structured information about the version of a package. */
	export interface VersionFormProperties {

		/** Used to correct mistakes in the version numbering scheme. */
		epoch: FormControl<number | null | undefined>,

		/** Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range. */
		inclusive: FormControl<boolean | null | undefined>,

		/** Required. Distinguishes between sentinel MIN/MAX versions and normal versions. */
		kind: FormControl<VersionKind | null | undefined>,

		/** Required only when version kind is NORMAL. The main part of the version name. */
		name: FormControl<string | null | undefined>,

		/** The iteration of the package build from the above version. */
		revision: FormControl<string | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			epoch: new FormControl<number | null | undefined>(undefined),
			inclusive: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<VersionKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VersionKind { VERSION_KIND_UNSPECIFIED = 'VERSION_KIND_UNSPECIFIED', NORMAL = 'NORMAL', MINIMUM = 'MINIMUM', MAXIMUM = 'MAXIMUM' }


	/** License information. */
	export interface License {

		/** Comments */
		comments?: string | null;

		/** Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2". */
		expression?: string | null;
	}

	/** License information. */
	export interface LicenseFormProperties {

		/** Comments */
		comments: FormControl<string | null | undefined>,

		/** Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2". */
		expression: FormControl<string | null | undefined>,
	}
	export function CreateLicenseFormGroup() {
		return new FormGroup<LicenseFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DocumentNote represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/ */
	export interface DocumentNote {

		/** Compliance with the SPDX specification includes populating the SPDX fields therein with data related to such fields ("SPDX-Metadata") */
		dataLicence?: string | null;

		/** Provide a reference number that can be used to understand how to parse and interpret the rest of the file */
		spdxVersion?: string | null;
	}

	/** DocumentNote represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/ */
	export interface DocumentNoteFormProperties {

		/** Compliance with the SPDX specification includes populating the SPDX fields therein with data related to such fields ("SPDX-Metadata") */
		dataLicence: FormControl<string | null | undefined>,

		/** Provide a reference number that can be used to understand how to parse and interpret the rest of the file */
		spdxVersion: FormControl<string | null | undefined>,
	}
	export function CreateDocumentNoteFormGroup() {
		return new FormGroup<DocumentNoteFormProperties>({
			dataLicence: new FormControl<string | null | undefined>(undefined),
			spdxVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The note representing an SBOM reference. */
	export interface SBOMReferenceNote {

		/** The format that SBOM takes. E.g. may be spdx, cyclonedx, etc... */
		format?: string | null;

		/** The version of the format that the SBOM takes. E.g. if the format is spdx, the version may be 2.3. */
		version?: string | null;
	}

	/** The note representing an SBOM reference. */
	export interface SBOMReferenceNoteFormProperties {

		/** The format that SBOM takes. E.g. may be spdx, cyclonedx, etc... */
		format: FormControl<string | null | undefined>,

		/** The version of the format that the SBOM takes. E.g. if the format is spdx, the version may be 2.3. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSBOMReferenceNoteFormGroup() {
		return new FormGroup<SBOMReferenceNoteFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** FileNote represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/ */
	export interface FileNote {

		/** Provide a unique identifier to match analysis information on each specific file in a package */
		checksum?: Array<string>;

		/** This field provides information about the type of file identified */
		fileType?: FileNoteFileType | null;

		/** Identify the full path and filename that corresponds to the file information in this section */
		title?: string | null;
	}

	/** FileNote represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/ */
	export interface FileNoteFormProperties {

		/** This field provides information about the type of file identified */
		fileType: FormControl<FileNoteFileType | null | undefined>,

		/** Identify the full path and filename that corresponds to the file information in this section */
		title: FormControl<string | null | undefined>,
	}
	export function CreateFileNoteFormGroup() {
		return new FormGroup<FileNoteFormProperties>({
			fileType: new FormControl<FileNoteFileType | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileNoteFileType { FILE_TYPE_UNSPECIFIED = 'FILE_TYPE_UNSPECIFIED', SOURCE = 'SOURCE', BINARY = 'BINARY', ARCHIVE = 'ARCHIVE', APPLICATION = 'APPLICATION', AUDIO = 'AUDIO', IMAGE = 'IMAGE', TEXT = 'TEXT', VIDEO = 'VIDEO', DOCUMENTATION = 'DOCUMENTATION', SPDX = 'SPDX', OTHER = 'OTHER' }


	/** PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/ */
	export interface PackageInfoNote {

		/** Indicates whether the file content of this package has been available for or subjected to analysis when creating the SPDX document */
		analyzed?: boolean | null;

		/** A place for the SPDX data creator to record, at the package level, acknowledgements that may be needed to be communicated in some contexts */
		attribution?: string | null;

		/** Provide an independently reproducible mechanism that permits unique identification of a specific package that correlates to the data in this SPDX file */
		checksum?: string | null;

		/** Identify the copyright holders of the package, as well as any dates present */
		copyright?: string | null;

		/** A more detailed description of the package */
		detailedDescription?: string | null;

		/** This section identifies the download Universal Resource Locator (URL), or a specific location within a version control system (VCS) for the package at the time that the SPDX file was created */
		downloadLocation?: string | null;

		/** ExternalRef */
		externalRefs?: Array<ExternalRef>;

		/** Contain the license the SPDX file creator has concluded as governing the This field is to contain a list of all licenses found in the package. The relationship between licenses (i.e., conjunctive, disjunctive) is not specified in this field – it is simply a listing of all licenses found */
		filesLicenseInfo?: Array<string>;

		/** Provide a place for the SPDX file creator to record a web site that serves as the package's home page */
		homePage?: string | null;

		/** License information. */
		licenseDeclared?: License;

		/** If the package identified in the SPDX file originated from a different person or organization than identified as Package Supplier, this field identifies from where or whom the package originally came */
		originator?: string | null;

		/** The type of package: OS, MAVEN, GO, GO_STDLIB, etc. */
		packageType?: string | null;

		/** A short description of the package */
		summaryDescription?: string | null;

		/** Identify the actual distribution source for the package/directory identified in the SPDX file */
		supplier?: string | null;

		/** Identify the full name of the package as given by the Package Originator */
		title?: string | null;

		/** This field provides an independently reproducible mechanism identifying specific contents of a package based on the actual files (except the SPDX file itself, if it is included in the package) that make up each package and that correlates to the data in this SPDX file */
		verificationCode?: string | null;

		/** Identify the version of the package */
		version?: string | null;
	}

	/** PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/ */
	export interface PackageInfoNoteFormProperties {

		/** Indicates whether the file content of this package has been available for or subjected to analysis when creating the SPDX document */
		analyzed: FormControl<boolean | null | undefined>,

		/** A place for the SPDX data creator to record, at the package level, acknowledgements that may be needed to be communicated in some contexts */
		attribution: FormControl<string | null | undefined>,

		/** Provide an independently reproducible mechanism that permits unique identification of a specific package that correlates to the data in this SPDX file */
		checksum: FormControl<string | null | undefined>,

		/** Identify the copyright holders of the package, as well as any dates present */
		copyright: FormControl<string | null | undefined>,

		/** A more detailed description of the package */
		detailedDescription: FormControl<string | null | undefined>,

		/** This section identifies the download Universal Resource Locator (URL), or a specific location within a version control system (VCS) for the package at the time that the SPDX file was created */
		downloadLocation: FormControl<string | null | undefined>,

		/** Provide a place for the SPDX file creator to record a web site that serves as the package's home page */
		homePage: FormControl<string | null | undefined>,

		/** If the package identified in the SPDX file originated from a different person or organization than identified as Package Supplier, this field identifies from where or whom the package originally came */
		originator: FormControl<string | null | undefined>,

		/** The type of package: OS, MAVEN, GO, GO_STDLIB, etc. */
		packageType: FormControl<string | null | undefined>,

		/** A short description of the package */
		summaryDescription: FormControl<string | null | undefined>,

		/** Identify the actual distribution source for the package/directory identified in the SPDX file */
		supplier: FormControl<string | null | undefined>,

		/** Identify the full name of the package as given by the Package Originator */
		title: FormControl<string | null | undefined>,

		/** This field provides an independently reproducible mechanism identifying specific contents of a package based on the actual files (except the SPDX file itself, if it is included in the package) that make up each package and that correlates to the data in this SPDX file */
		verificationCode: FormControl<string | null | undefined>,

		/** Identify the version of the package */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePackageInfoNoteFormGroup() {
		return new FormGroup<PackageInfoNoteFormProperties>({
			analyzed: new FormControl<boolean | null | undefined>(undefined),
			attribution: new FormControl<string | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			detailedDescription: new FormControl<string | null | undefined>(undefined),
			downloadLocation: new FormControl<string | null | undefined>(undefined),
			homePage: new FormControl<string | null | undefined>(undefined),
			originator: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
			summaryDescription: new FormControl<string | null | undefined>(undefined),
			supplier: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			verificationCode: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package */
	export interface ExternalRef {

		/** An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package */
		category?: ExternalRefCategory | null;

		/** Human-readable information about the purpose and target of the reference */
		comment?: string | null;

		/** The unique string with no spaces necessary to access the package-specific information, metadata, or content within the target location */
		locator?: string | null;

		/** Type of category (e.g. 'npm' for the PACKAGE_MANAGER category) */
		type?: string | null;
	}

	/** An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package */
	export interface ExternalRefFormProperties {

		/** An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package */
		category: FormControl<ExternalRefCategory | null | undefined>,

		/** Human-readable information about the purpose and target of the reference */
		comment: FormControl<string | null | undefined>,

		/** The unique string with no spaces necessary to access the package-specific information, metadata, or content within the target location */
		locator: FormControl<string | null | undefined>,

		/** Type of category (e.g. 'npm' for the PACKAGE_MANAGER category) */
		type: FormControl<string | null | undefined>,
	}
	export function CreateExternalRefFormGroup() {
		return new FormGroup<ExternalRefFormProperties>({
			category: new FormControl<ExternalRefCategory | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			locator: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExternalRefCategory { CATEGORY_UNSPECIFIED = 'CATEGORY_UNSPECIFIED', SECURITY = 'SECURITY', PACKAGE_MANAGER = 'PACKAGE_MANAGER', PERSISTENT_ID = 'PERSISTENT_ID', OTHER = 'OTHER' }


	/** RelationshipNote represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/ */
	export interface RelationshipNote {

		/** The type of relationship between the source and target SPDX elements */
		type?: RelationshipNoteType | null;
	}

	/** RelationshipNote represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/ */
	export interface RelationshipNoteFormProperties {

		/** The type of relationship between the source and target SPDX elements */
		type: FormControl<RelationshipNoteType | null | undefined>,
	}
	export function CreateRelationshipNoteFormGroup() {
		return new FormGroup<RelationshipNoteFormProperties>({
			type: new FormControl<RelationshipNoteType | null | undefined>(undefined),
		});

	}

	export enum RelationshipNoteType { RELATIONSHIP_TYPE_UNSPECIFIED = 'RELATIONSHIP_TYPE_UNSPECIFIED', DESCRIBES = 'DESCRIBES', DESCRIBED_BY = 'DESCRIBED_BY', CONTAINS = 'CONTAINS', CONTAINED_BY = 'CONTAINED_BY', DEPENDS_ON = 'DEPENDS_ON', DEPENDENCY_OF = 'DEPENDENCY_OF', DEPENDENCY_MANIFEST_OF = 'DEPENDENCY_MANIFEST_OF', BUILD_DEPENDENCY_OF = 'BUILD_DEPENDENCY_OF', DEV_DEPENDENCY_OF = 'DEV_DEPENDENCY_OF', OPTIONAL_DEPENDENCY_OF = 'OPTIONAL_DEPENDENCY_OF', PROVIDED_DEPENDENCY_OF = 'PROVIDED_DEPENDENCY_OF', TEST_DEPENDENCY_OF = 'TEST_DEPENDENCY_OF', RUNTIME_DEPENDENCY_OF = 'RUNTIME_DEPENDENCY_OF', EXAMPLE_OF = 'EXAMPLE_OF', GENERATES = 'GENERATES', GENERATED_FROM = 'GENERATED_FROM', ANCESTOR_OF = 'ANCESTOR_OF', DESCENDANT_OF = 'DESCENDANT_OF', VARIANT_OF = 'VARIANT_OF', DISTRIBUTION_ARTIFACT = 'DISTRIBUTION_ARTIFACT', PATCH_FOR = 'PATCH_FOR', PATCH_APPLIED = 'PATCH_APPLIED', COPY_OF = 'COPY_OF', FILE_ADDED = 'FILE_ADDED', FILE_DELETED = 'FILE_DELETED', FILE_MODIFIED = 'FILE_MODIFIED', EXPANDED_FROM_ARCHIVE = 'EXPANDED_FROM_ARCHIVE', DYNAMIC_LINK = 'DYNAMIC_LINK', STATIC_LINK = 'STATIC_LINK', DATA_FILE_OF = 'DATA_FILE_OF', TEST_CASE_OF = 'TEST_CASE_OF', BUILD_TOOL_OF = 'BUILD_TOOL_OF', DEV_TOOL_OF = 'DEV_TOOL_OF', TEST_OF = 'TEST_OF', TEST_TOOL_OF = 'TEST_TOOL_OF', DOCUMENTATION_OF = 'DOCUMENTATION_OF', OPTIONAL_COMPONENT_OF = 'OPTIONAL_COMPONENT_OF', METAFILE_OF = 'METAFILE_OF', PACKAGE_OF = 'PACKAGE_OF', AMENDS = 'AMENDS', PREREQUISITE_FOR = 'PREREQUISITE_FOR', HAS_PREREQUISITE = 'HAS_PREREQUISITE', OTHER = 'OTHER' }


	/** Vulnerability provides metadata about a security vulnerability in a Note. */
	export interface Vulnerability {

		/** The CVSS score for this vulnerability. */
		cvssScore?: number | null;

		/** Common Vulnerability Scoring System. This message is compatible with CVSS v2 and v3. For CVSS v2 details, see https://www.first.org/cvss/v2/guide CVSS v2 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator For CVSS v3 details, see https://www.first.org/cvss/specification-document CVSS v3 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator */
		cvssV2?: CVSS;

		/** Deprecated. Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document */
		cvssV3?: CVSSv3;

		/** CVSS version used to populate cvss_score and severity. */
		cvssVersion?: VulnerabilityCvssVersion | null;

		/** A list of CWE for this vulnerability. For details, see: https://cwe.mitre.org/index.html */
		cwe?: Array<string>;

		/** All information about the package to specifically identify this vulnerability. One entry per (version range and cpe_uri) the package vulnerability has manifested in. */
		details?: Array<Detail>;

		/** Note provider assigned impact of the vulnerability. */
		severity?: VulnerabilitySeverity | null;

		/** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
		sourceUpdateTime?: string | null;

		/** Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version. */
		windowsDetails?: Array<WindowsDetail>;
	}

	/** Vulnerability provides metadata about a security vulnerability in a Note. */
	export interface VulnerabilityFormProperties {

		/** The CVSS score for this vulnerability. */
		cvssScore: FormControl<number | null | undefined>,

		/** CVSS version used to populate cvss_score and severity. */
		cvssVersion: FormControl<VulnerabilityCvssVersion | null | undefined>,

		/** Note provider assigned impact of the vulnerability. */
		severity: FormControl<VulnerabilitySeverity | null | undefined>,

		/** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
		sourceUpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityFormGroup() {
		return new FormGroup<VulnerabilityFormProperties>({
			cvssScore: new FormControl<number | null | undefined>(undefined),
			cvssVersion: new FormControl<VulnerabilityCvssVersion | null | undefined>(undefined),
			severity: new FormControl<VulnerabilitySeverity | null | undefined>(undefined),
			sourceUpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common Vulnerability Scoring System. This message is compatible with CVSS v2 and v3. For CVSS v2 details, see https://www.first.org/cvss/v2/guide CVSS v2 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator For CVSS v3 details, see https://www.first.org/cvss/specification-document CVSS v3 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator */
	export interface CVSS {

		/** Defined in CVSS v3, CVSS v2 */
		attackComplexity?: CVSSAttackComplexity | null;

		/** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. Defined in CVSS v3, CVSS v2 */
		attackVector?: CVSSAttackVector | null;

		/** Defined in CVSS v2 */
		authentication?: CVSSAuthentication | null;

		/** Defined in CVSS v3, CVSS v2 */
		availabilityImpact?: CVSSAvailabilityImpact | null;

		/** The base score is a function of the base metric scores. */
		baseScore?: number | null;

		/** Defined in CVSS v3, CVSS v2 */
		confidentialityImpact?: CVSSAvailabilityImpact | null;
		exploitabilityScore?: number | null;
		impactScore?: number | null;

		/** Defined in CVSS v3, CVSS v2 */
		integrityImpact?: CVSSAvailabilityImpact | null;

		/** Defined in CVSS v3 */
		privilegesRequired?: CVSSPrivilegesRequired | null;

		/** Defined in CVSS v3 */
		scope?: CVSSScope | null;

		/** Defined in CVSS v3 */
		userInteraction?: CVSSUserInteraction | null;
	}

	/** Common Vulnerability Scoring System. This message is compatible with CVSS v2 and v3. For CVSS v2 details, see https://www.first.org/cvss/v2/guide CVSS v2 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator For CVSS v3 details, see https://www.first.org/cvss/specification-document CVSS v3 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator */
	export interface CVSSFormProperties {

		/** Defined in CVSS v3, CVSS v2 */
		attackComplexity: FormControl<CVSSAttackComplexity | null | undefined>,

		/** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. Defined in CVSS v3, CVSS v2 */
		attackVector: FormControl<CVSSAttackVector | null | undefined>,

		/** Defined in CVSS v2 */
		authentication: FormControl<CVSSAuthentication | null | undefined>,

		/** Defined in CVSS v3, CVSS v2 */
		availabilityImpact: FormControl<CVSSAvailabilityImpact | null | undefined>,

		/** The base score is a function of the base metric scores. */
		baseScore: FormControl<number | null | undefined>,

		/** Defined in CVSS v3, CVSS v2 */
		confidentialityImpact: FormControl<CVSSAvailabilityImpact | null | undefined>,
		exploitabilityScore: FormControl<number | null | undefined>,
		impactScore: FormControl<number | null | undefined>,

		/** Defined in CVSS v3, CVSS v2 */
		integrityImpact: FormControl<CVSSAvailabilityImpact | null | undefined>,

		/** Defined in CVSS v3 */
		privilegesRequired: FormControl<CVSSPrivilegesRequired | null | undefined>,

		/** Defined in CVSS v3 */
		scope: FormControl<CVSSScope | null | undefined>,

		/** Defined in CVSS v3 */
		userInteraction: FormControl<CVSSUserInteraction | null | undefined>,
	}
	export function CreateCVSSFormGroup() {
		return new FormGroup<CVSSFormProperties>({
			attackComplexity: new FormControl<CVSSAttackComplexity | null | undefined>(undefined),
			attackVector: new FormControl<CVSSAttackVector | null | undefined>(undefined),
			authentication: new FormControl<CVSSAuthentication | null | undefined>(undefined),
			availabilityImpact: new FormControl<CVSSAvailabilityImpact | null | undefined>(undefined),
			baseScore: new FormControl<number | null | undefined>(undefined),
			confidentialityImpact: new FormControl<CVSSAvailabilityImpact | null | undefined>(undefined),
			exploitabilityScore: new FormControl<number | null | undefined>(undefined),
			impactScore: new FormControl<number | null | undefined>(undefined),
			integrityImpact: new FormControl<CVSSAvailabilityImpact | null | undefined>(undefined),
			privilegesRequired: new FormControl<CVSSPrivilegesRequired | null | undefined>(undefined),
			scope: new FormControl<CVSSScope | null | undefined>(undefined),
			userInteraction: new FormControl<CVSSUserInteraction | null | undefined>(undefined),
		});

	}

	export enum CVSSAttackComplexity { ATTACK_COMPLEXITY_UNSPECIFIED = 'ATTACK_COMPLEXITY_UNSPECIFIED', ATTACK_COMPLEXITY_LOW = 'ATTACK_COMPLEXITY_LOW', ATTACK_COMPLEXITY_HIGH = 'ATTACK_COMPLEXITY_HIGH', ATTACK_COMPLEXITY_MEDIUM = 'ATTACK_COMPLEXITY_MEDIUM' }

	export enum CVSSAttackVector { ATTACK_VECTOR_UNSPECIFIED = 'ATTACK_VECTOR_UNSPECIFIED', ATTACK_VECTOR_NETWORK = 'ATTACK_VECTOR_NETWORK', ATTACK_VECTOR_ADJACENT = 'ATTACK_VECTOR_ADJACENT', ATTACK_VECTOR_LOCAL = 'ATTACK_VECTOR_LOCAL', ATTACK_VECTOR_PHYSICAL = 'ATTACK_VECTOR_PHYSICAL' }

	export enum CVSSAuthentication { AUTHENTICATION_UNSPECIFIED = 'AUTHENTICATION_UNSPECIFIED', AUTHENTICATION_MULTIPLE = 'AUTHENTICATION_MULTIPLE', AUTHENTICATION_SINGLE = 'AUTHENTICATION_SINGLE', AUTHENTICATION_NONE = 'AUTHENTICATION_NONE' }

	export enum CVSSAvailabilityImpact { IMPACT_UNSPECIFIED = 'IMPACT_UNSPECIFIED', IMPACT_HIGH = 'IMPACT_HIGH', IMPACT_LOW = 'IMPACT_LOW', IMPACT_NONE = 'IMPACT_NONE', IMPACT_PARTIAL = 'IMPACT_PARTIAL', IMPACT_COMPLETE = 'IMPACT_COMPLETE' }

	export enum CVSSPrivilegesRequired { PRIVILEGES_REQUIRED_UNSPECIFIED = 'PRIVILEGES_REQUIRED_UNSPECIFIED', PRIVILEGES_REQUIRED_NONE = 'PRIVILEGES_REQUIRED_NONE', PRIVILEGES_REQUIRED_LOW = 'PRIVILEGES_REQUIRED_LOW', PRIVILEGES_REQUIRED_HIGH = 'PRIVILEGES_REQUIRED_HIGH' }

	export enum CVSSScope { SCOPE_UNSPECIFIED = 'SCOPE_UNSPECIFIED', SCOPE_UNCHANGED = 'SCOPE_UNCHANGED', SCOPE_CHANGED = 'SCOPE_CHANGED' }

	export enum CVSSUserInteraction { USER_INTERACTION_UNSPECIFIED = 'USER_INTERACTION_UNSPECIFIED', USER_INTERACTION_NONE = 'USER_INTERACTION_NONE', USER_INTERACTION_REQUIRED = 'USER_INTERACTION_REQUIRED' }


	/** Deprecated. Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document */
	export interface CVSSv3 {
		attackComplexity?: CVSSv3AttackComplexity | null;

		/** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. */
		attackVector?: CVSSAttackVector | null;
		availabilityImpact?: CVSSv3AvailabilityImpact | null;

		/** The base score is a function of the base metric scores. */
		baseScore?: number | null;
		confidentialityImpact?: CVSSv3AvailabilityImpact | null;
		exploitabilityScore?: number | null;
		impactScore?: number | null;
		integrityImpact?: CVSSv3AvailabilityImpact | null;
		privilegesRequired?: CVSSPrivilegesRequired | null;
		scope?: CVSSScope | null;
		userInteraction?: CVSSUserInteraction | null;
	}

	/** Deprecated. Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document */
	export interface CVSSv3FormProperties {
		attackComplexity: FormControl<CVSSv3AttackComplexity | null | undefined>,

		/** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. */
		attackVector: FormControl<CVSSAttackVector | null | undefined>,
		availabilityImpact: FormControl<CVSSv3AvailabilityImpact | null | undefined>,

		/** The base score is a function of the base metric scores. */
		baseScore: FormControl<number | null | undefined>,
		confidentialityImpact: FormControl<CVSSv3AvailabilityImpact | null | undefined>,
		exploitabilityScore: FormControl<number | null | undefined>,
		impactScore: FormControl<number | null | undefined>,
		integrityImpact: FormControl<CVSSv3AvailabilityImpact | null | undefined>,
		privilegesRequired: FormControl<CVSSPrivilegesRequired | null | undefined>,
		scope: FormControl<CVSSScope | null | undefined>,
		userInteraction: FormControl<CVSSUserInteraction | null | undefined>,
	}
	export function CreateCVSSv3FormGroup() {
		return new FormGroup<CVSSv3FormProperties>({
			attackComplexity: new FormControl<CVSSv3AttackComplexity | null | undefined>(undefined),
			attackVector: new FormControl<CVSSAttackVector | null | undefined>(undefined),
			availabilityImpact: new FormControl<CVSSv3AvailabilityImpact | null | undefined>(undefined),
			baseScore: new FormControl<number | null | undefined>(undefined),
			confidentialityImpact: new FormControl<CVSSv3AvailabilityImpact | null | undefined>(undefined),
			exploitabilityScore: new FormControl<number | null | undefined>(undefined),
			impactScore: new FormControl<number | null | undefined>(undefined),
			integrityImpact: new FormControl<CVSSv3AvailabilityImpact | null | undefined>(undefined),
			privilegesRequired: new FormControl<CVSSPrivilegesRequired | null | undefined>(undefined),
			scope: new FormControl<CVSSScope | null | undefined>(undefined),
			userInteraction: new FormControl<CVSSUserInteraction | null | undefined>(undefined),
		});

	}

	export enum CVSSv3AttackComplexity { ATTACK_COMPLEXITY_UNSPECIFIED = 'ATTACK_COMPLEXITY_UNSPECIFIED', ATTACK_COMPLEXITY_LOW = 'ATTACK_COMPLEXITY_LOW', ATTACK_COMPLEXITY_HIGH = 'ATTACK_COMPLEXITY_HIGH' }

	export enum CVSSv3AvailabilityImpact { IMPACT_UNSPECIFIED = 'IMPACT_UNSPECIFIED', IMPACT_HIGH = 'IMPACT_HIGH', IMPACT_LOW = 'IMPACT_LOW', IMPACT_NONE = 'IMPACT_NONE' }

	export enum VulnerabilityCvssVersion { CVSS_VERSION_UNSPECIFIED = 'CVSS_VERSION_UNSPECIFIED', CVSS_VERSION_2 = 'CVSS_VERSION_2', CVSS_VERSION_3 = 'CVSS_VERSION_3' }


	/** Identifies all appearances of this vulnerability in the package for a specific distro/location. For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2 */
	export interface Detail {

		/** Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar. */
		cpeUri?: string | null;

		/** A vendor-specific description of this note. */
		description?: string | null;

		/** The location of the vulnerability. */
		fixedLocation?: VulnerabilityLocation;

		/** Whether this detail is obsolete. Occurrences are expected not to point to obsolete details. */
		isObsolete?: boolean | null;

		/** Version contains structured information about the version of a package. */
		maxAffectedVersion?: Version;

		/** Version contains structured information about the version of a package. */
		minAffectedVersion?: Version;

		/** Required. The name of the package where the vulnerability was found. */
		package?: string | null;

		/** The type of package; whether native or non native(ruby gems, node.js packages etc). */
		packageType?: string | null;

		/** The severity (eg: distro assigned severity) for this vulnerability. */
		severityName?: string | null;

		/** The source from which the information in this Detail was obtained. */
		source?: string | null;

		/** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
		sourceUpdateTime?: string | null;

		/** The name of the vendor of the product. */
		vendor?: string | null;
	}

	/** Identifies all appearances of this vulnerability in the package for a specific distro/location. For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2 */
	export interface DetailFormProperties {

		/** Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar. */
		cpeUri: FormControl<string | null | undefined>,

		/** A vendor-specific description of this note. */
		description: FormControl<string | null | undefined>,

		/** Whether this detail is obsolete. Occurrences are expected not to point to obsolete details. */
		isObsolete: FormControl<boolean | null | undefined>,

		/** Required. The name of the package where the vulnerability was found. */
		package: FormControl<string | null | undefined>,

		/** The type of package; whether native or non native(ruby gems, node.js packages etc). */
		packageType: FormControl<string | null | undefined>,

		/** The severity (eg: distro assigned severity) for this vulnerability. */
		severityName: FormControl<string | null | undefined>,

		/** The source from which the information in this Detail was obtained. */
		source: FormControl<string | null | undefined>,

		/** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
		sourceUpdateTime: FormControl<string | null | undefined>,

		/** The name of the vendor of the product. */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateDetailFormGroup() {
		return new FormGroup<DetailFormProperties>({
			cpeUri: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isObsolete: new FormControl<boolean | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
			severityName: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			sourceUpdateTime: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of the vulnerability. */
	export interface VulnerabilityLocation {

		/** Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) format. Examples include distro or storage location for vulnerable jar. */
		cpeUri?: string | null;

		/** Required. The package being described. */
		package?: string | null;

		/** Version contains structured information about the version of a package. */
		version?: Version;
	}

	/** The location of the vulnerability. */
	export interface VulnerabilityLocationFormProperties {

		/** Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) format. Examples include distro or storage location for vulnerable jar. */
		cpeUri: FormControl<string | null | undefined>,

		/** Required. The package being described. */
		package: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityLocationFormGroup() {
		return new FormGroup<VulnerabilityLocationFormProperties>({
			cpeUri: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VulnerabilitySeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', MINIMAL = 'MINIMAL', LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH', CRITICAL = 'CRITICAL' }

	export interface WindowsDetail {

		/** Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar. */
		cpeUri?: string | null;

		/** The description of the vulnerability. */
		description?: string | null;

		/** Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed kb's presence is considered a fix. */
		fixingKbs?: Array<KnowledgeBase>;

		/** Required. The name of the vulnerability. */
		name?: string | null;
	}
	export interface WindowsDetailFormProperties {

		/** Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar. */
		cpeUri: FormControl<string | null | undefined>,

		/** The description of the vulnerability. */
		description: FormControl<string | null | undefined>,

		/** Required. The name of the vulnerability. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWindowsDetailFormGroup() {
		return new FormGroup<WindowsDetailFormProperties>({
			cpeUri: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KnowledgeBase {

		/** The KB name (generally of the form KB[0-9]+ i.e. KB123456). */
		name?: string | null;

		/** A link to the KB in the Windows update catalog - https://www.catalog.update.microsoft.com/ */
		url?: string | null;
	}
	export interface KnowledgeBaseFormProperties {

		/** The KB name (generally of the form KB[0-9]+ i.e. KB123456). */
		name: FormControl<string | null | undefined>,

		/** A link to the KB in the Windows update catalog - https://www.catalog.update.microsoft.com/ */
		url: FormControl<string | null | undefined>,
	}
	export function CreateKnowledgeBaseFormGroup() {
		return new FormGroup<KnowledgeBaseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single VulnerabilityAssessmentNote represents one particular product's vulnerability assessment for one CVE. */
	export interface VulnerabilityAssessmentNote {

		/** Assessment provides all information that is related to a single vulnerability for this product. */
		assessment?: Assessment;

		/** Identifies the language used by this document, corresponding to IETF BCP 47 / RFC 5646. */
		languageCode?: string | null;

		/** A detailed description of this Vex. */
		longDescription?: string | null;

		/** Product contains information about a product and how to uniquely identify it. */
		product?: Product;

		/** Publisher contains information about the publisher of this Note. */
		publisher?: Publisher;

		/** A one sentence description of this Vex. */
		shortDescription?: string | null;

		/** The title of the note. E.g. `Vex-Debian-11.4` */
		title?: string | null;
	}

	/** A single VulnerabilityAssessmentNote represents one particular product's vulnerability assessment for one CVE. */
	export interface VulnerabilityAssessmentNoteFormProperties {

		/** Identifies the language used by this document, corresponding to IETF BCP 47 / RFC 5646. */
		languageCode: FormControl<string | null | undefined>,

		/** A detailed description of this Vex. */
		longDescription: FormControl<string | null | undefined>,

		/** A one sentence description of this Vex. */
		shortDescription: FormControl<string | null | undefined>,

		/** The title of the note. E.g. `Vex-Debian-11.4` */
		title: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityAssessmentNoteFormGroup() {
		return new FormGroup<VulnerabilityAssessmentNoteFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			longDescription: new FormControl<string | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Product contains information about a product and how to uniquely identify it. */
	export interface Product {

		/** Contains a URI which is vendor-specific. Example: The artifact repository URL of an image. */
		genericUri?: string | null;

		/** Token that identifies a product so that it can be referred to from other parts in the document. There is no predefined format as long as it uniquely identifies a group in the context of the current document. */
		id?: string | null;

		/** Name of the product. */
		name?: string | null;
	}

	/** Product contains information about a product and how to uniquely identify it. */
	export interface ProductFormProperties {

		/** Contains a URI which is vendor-specific. Example: The artifact repository URL of an image. */
		genericUri: FormControl<string | null | undefined>,

		/** Token that identifies a product so that it can be referred to from other parts in the document. There is no predefined format as long as it uniquely identifies a group in the context of the current document. */
		id: FormControl<string | null | undefined>,

		/** Name of the product. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			genericUri: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Publisher contains information about the publisher of this Note. */
	export interface Publisher {

		/** Provides information about the authority of the issuing party to release the document, in particular, the party's constituency and responsibilities or other obligations. */
		issuingAuthority?: string | null;

		/** Name of the publisher. Examples: 'Google', 'Google Cloud Platform'. */
		name?: string | null;

		/** The context or namespace. Contains a URL which is under control of the issuing party and can be used as a globally unique identifier for that issuing party. Example: https://csaf.io */
		publisherNamespace?: string | null;
	}

	/** Publisher contains information about the publisher of this Note. */
	export interface PublisherFormProperties {

		/** Provides information about the authority of the issuing party to release the document, in particular, the party's constituency and responsibilities or other obligations. */
		issuingAuthority: FormControl<string | null | undefined>,

		/** Name of the publisher. Examples: 'Google', 'Google Cloud Platform'. */
		name: FormControl<string | null | undefined>,

		/** The context or namespace. Contains a URL which is under control of the issuing party and can be used as a globally unique identifier for that issuing party. Example: https://csaf.io */
		publisherNamespace: FormControl<string | null | undefined>,
	}
	export function CreatePublisherFormGroup() {
		return new FormGroup<PublisherFormProperties>({
			issuingAuthority: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publisherNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for creating notes in batch. */
	export interface BatchCreateNotesResponse {

		/** The notes that were created. */
		notes?: Array<Note>;
	}

	/** Response for creating notes in batch. */
	export interface BatchCreateNotesResponseFormProperties {
	}
	export function CreateBatchCreateNotesResponseFormGroup() {
		return new FormGroup<BatchCreateNotesResponseFormProperties>({
		});

	}


	/** Request to create occurrences in batch. */
	export interface BatchCreateOccurrencesRequest {

		/** Required. The occurrences to create. Max allowed length is 1000. */
		occurrences?: Array<Occurrence>;
	}

	/** Request to create occurrences in batch. */
	export interface BatchCreateOccurrencesRequestFormProperties {
	}
	export function CreateBatchCreateOccurrencesRequestFormGroup() {
		return new FormGroup<BatchCreateOccurrencesRequestFormProperties>({
		});

	}


	/** An instance of an analysis type that has been found on a resource. */
	export interface Occurrence {

		/** Details of an attestation occurrence. */
		attestation?: Details;

		/** Details of a build occurrence. */
		build?: GrafeasV1beta1BuildDetails;

		/** Output only. The time this occurrence was created. */
		createTime?: string | null;

		/** Details of a deployment occurrence. */
		deployment?: GrafeasV1beta1DeploymentDetails;

		/** Details of an image occurrence. */
		derivedImage?: GrafeasV1beta1ImageDetails;

		/** Details of a discovery occurrence. */
		discovered?: GrafeasV1beta1DiscoveryDetails;

		/** MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type. */
		envelope?: Envelope;

		/** Details of a package occurrence. */
		installation?: GrafeasV1beta1PackageDetails;

		/** This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note. */
		intoto?: GrafeasV1beta1IntotoDetails;

		/** Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. */
		kind?: DiscoveryAnalysisKind | null;

		/** Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
		name?: string | null;

		/** Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests. */
		noteName?: string | null;

		/** A description of actions that can be taken to remedy the note. */
		remediation?: string | null;

		/** An entity that can have metadata. For example, a Docker image. */
		resource?: Resource;

		/** DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/ */
		sbom?: DocumentOccurrence;

		/** The occurrence representing an SBOM reference as applied to a specific resource. The occurrence follows the DSSE specification. See https://github.com/secure-systems-lab/dsse/blob/master/envelope.md for more details. */
		sbomReference?: SBOMReferenceOccurrence;

		/** FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/ */
		spdxFile?: FileOccurrence;

		/** PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/ */
		spdxPackage?: PackageInfoOccurrence;

		/** RelationshipOccurrence represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/ */
		spdxRelationship?: RelationshipOccurrence;

		/** Output only. The time this occurrence was last updated. */
		updateTime?: string | null;

		/** Details of a vulnerability Occurrence. */
		vulnerability?: GrafeasV1beta1VulnerabilityDetails;
	}

	/** An instance of an analysis type that has been found on a resource. */
	export interface OccurrenceFormProperties {

		/** Output only. The time this occurrence was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. */
		kind: FormControl<DiscoveryAnalysisKind | null | undefined>,

		/** Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests. */
		noteName: FormControl<string | null | undefined>,

		/** A description of actions that can be taken to remedy the note. */
		remediation: FormControl<string | null | undefined>,

		/** Output only. The time this occurrence was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateOccurrenceFormGroup() {
		return new FormGroup<OccurrenceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<DiscoveryAnalysisKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			noteName: new FormControl<string | null | undefined>(undefined),
			remediation: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of an attestation occurrence. */
	export interface Details {

		/** Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for). */
		attestation?: Attestation;
	}

	/** Details of an attestation occurrence. */
	export interface DetailsFormProperties {
	}
	export function CreateDetailsFormGroup() {
		return new FormGroup<DetailsFormProperties>({
		});

	}


	/** Details of a build occurrence. */
	export interface GrafeasV1beta1BuildDetails {
		inTotoSlsaProvenanceV1?: InTotoSlsaProvenanceV1;

		/** Provenance of a build. Contains all information needed to verify the full details about the build from source to completion. */
		provenance?: BuildProvenance;

		/** Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes. */
		provenanceBytes?: string | null;
	}

	/** Details of a build occurrence. */
	export interface GrafeasV1beta1BuildDetailsFormProperties {

		/** Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes. */
		provenanceBytes: FormControl<string | null | undefined>,
	}
	export function CreateGrafeasV1beta1BuildDetailsFormGroup() {
		return new FormGroup<GrafeasV1beta1BuildDetailsFormProperties>({
			provenanceBytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InTotoSlsaProvenanceV1 {

		/** InToto spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement */
		_type?: string | null;

		/** Keep in sync with schema at https://github.com/slsa-framework/slsa/blob/main/docs/provenance/schema/v1/provenance.proto Builder renamed to ProvenanceBuilder because of Java conflicts. */
		predicate?: SlsaProvenanceV1;
		predicateType?: string | null;
		subject?: Array<Subject>;
	}
	export interface InTotoSlsaProvenanceV1FormProperties {

		/** InToto spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement */
		_type: FormControl<string | null | undefined>,
		predicateType: FormControl<string | null | undefined>,
	}
	export function CreateInTotoSlsaProvenanceV1FormGroup() {
		return new FormGroup<InTotoSlsaProvenanceV1FormProperties>({
			_type: new FormControl<string | null | undefined>(undefined),
			predicateType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Keep in sync with schema at https://github.com/slsa-framework/slsa/blob/main/docs/provenance/schema/v1/provenance.proto Builder renamed to ProvenanceBuilder because of Java conflicts. */
	export interface SlsaProvenanceV1 {
		buildDefinition?: BuildDefinition;
		runDetails?: RunDetails;
	}

	/** Keep in sync with schema at https://github.com/slsa-framework/slsa/blob/main/docs/provenance/schema/v1/provenance.proto Builder renamed to ProvenanceBuilder because of Java conflicts. */
	export interface SlsaProvenanceV1FormProperties {
	}
	export function CreateSlsaProvenanceV1FormGroup() {
		return new FormGroup<SlsaProvenanceV1FormProperties>({
		});

	}

	export interface BuildDefinition {
		buildType?: string | null;
		externalParameters?: {[id: string]: any };
		internalParameters?: {[id: string]: any };
		resolvedDependencies?: Array<ResourceDescriptor>;
	}
	export interface BuildDefinitionFormProperties {
		buildType: FormControl<string | null | undefined>,
		externalParameters: FormControl<{[id: string]: any } | null | undefined>,
		internalParameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateBuildDefinitionFormGroup() {
		return new FormGroup<BuildDefinitionFormProperties>({
			buildType: new FormControl<string | null | undefined>(undefined),
			externalParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			internalParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface ResourceDescriptor {
		annotations?: {[id: string]: any };
		content?: string | null;
		digest?: {[id: string]: string };
		downloadLocation?: string | null;
		mediaType?: string | null;
		name?: string | null;
		uri?: string | null;
	}
	export interface ResourceDescriptorFormProperties {
		annotations: FormControl<{[id: string]: any } | null | undefined>,
		content: FormControl<string | null | undefined>,
		digest: FormControl<{[id: string]: string } | null | undefined>,
		downloadLocation: FormControl<string | null | undefined>,
		mediaType: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateResourceDescriptorFormGroup() {
		return new FormGroup<ResourceDescriptorFormProperties>({
			annotations: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			digest: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			downloadLocation: new FormControl<string | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunDetails {
		builder?: ProvenanceBuilder;
		byproducts?: Array<ResourceDescriptor>;
		metadata?: BuildMetadata;
	}
	export interface RunDetailsFormProperties {
	}
	export function CreateRunDetailsFormGroup() {
		return new FormGroup<RunDetailsFormProperties>({
		});

	}

	export interface ProvenanceBuilder {
		builderDependencies?: Array<ResourceDescriptor>;
		id?: string | null;
		version?: {[id: string]: string };
	}
	export interface ProvenanceBuilderFormProperties {
		id: FormControl<string | null | undefined>,
		version: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateProvenanceBuilderFormGroup() {
		return new FormGroup<ProvenanceBuilderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface BuildMetadata {
		finishedOn?: string | null;
		invocationId?: string | null;
		startedOn?: string | null;
	}
	export interface BuildMetadataFormProperties {
		finishedOn: FormControl<string | null | undefined>,
		invocationId: FormControl<string | null | undefined>,
		startedOn: FormControl<string | null | undefined>,
	}
	export function CreateBuildMetadataFormGroup() {
		return new FormGroup<BuildMetadataFormProperties>({
			finishedOn: new FormControl<string | null | undefined>(undefined),
			invocationId: new FormControl<string | null | undefined>(undefined),
			startedOn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of software artifacts that the attestation applies to. Each element represents a single software artifact. */
	export interface Subject {

		/** `"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet */
		digest?: {[id: string]: string };

		/** Identifier to distinguish this artifact from others within the subject. */
		name?: string | null;
	}

	/** Set of software artifacts that the attestation applies to. Each element represents a single software artifact. */
	export interface SubjectFormProperties {

		/** `"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet */
		digest: FormControl<{[id: string]: string } | null | undefined>,

		/** Identifier to distinguish this artifact from others within the subject. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSubjectFormGroup() {
		return new FormGroup<SubjectFormProperties>({
			digest: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provenance of a build. Contains all information needed to verify the full details about the build from source to completion. */
	export interface BuildProvenance {

		/** Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details. */
		buildOptions?: {[id: string]: string };

		/** Version string of the builder at the time this build was executed. */
		builderVersion?: string | null;

		/** Output of the build. */
		builtArtifacts?: Array<Artifact>;

		/** Commands requested by the build. */
		commands?: Array<Command>;

		/** Time at which the build was created. */
		createTime?: string | null;

		/** E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time. */
		creator?: string | null;

		/** Time at which execution of the build was finished. */
		endTime?: string | null;

		/** Required. Unique identifier of the build. */
		id?: string | null;

		/** URI where any logs for this provenance were written. */
		logsUri?: string | null;

		/** ID of the project. */
		projectId?: string | null;

		/** Source describes the location of the source used for the build. */
		sourceProvenance?: Source;

		/** Time at which execution of the build was started. */
		startTime?: string | null;

		/** Trigger identifier if the build was triggered automatically; empty if not. */
		triggerId?: string | null;
	}

	/** Provenance of a build. Contains all information needed to verify the full details about the build from source to completion. */
	export interface BuildProvenanceFormProperties {

		/** Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details. */
		buildOptions: FormControl<{[id: string]: string } | null | undefined>,

		/** Version string of the builder at the time this build was executed. */
		builderVersion: FormControl<string | null | undefined>,

		/** Time at which the build was created. */
		createTime: FormControl<string | null | undefined>,

		/** E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time. */
		creator: FormControl<string | null | undefined>,

		/** Time at which execution of the build was finished. */
		endTime: FormControl<string | null | undefined>,

		/** Required. Unique identifier of the build. */
		id: FormControl<string | null | undefined>,

		/** URI where any logs for this provenance were written. */
		logsUri: FormControl<string | null | undefined>,

		/** ID of the project. */
		projectId: FormControl<string | null | undefined>,

		/** Time at which execution of the build was started. */
		startTime: FormControl<string | null | undefined>,

		/** Trigger identifier if the build was triggered automatically; empty if not. */
		triggerId: FormControl<string | null | undefined>,
	}
	export function CreateBuildProvenanceFormGroup() {
		return new FormGroup<BuildProvenanceFormProperties>({
			buildOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			builderVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			logsUri: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Command describes a step performed as part of the build pipeline. */
	export interface Command {

		/** Command-line arguments used when executing this command. */
		args?: Array<string>;

		/** Working directory (relative to project source root) used when running this command. */
		dir?: string | null;

		/** Environment variables set before running this command. */
		env?: Array<string>;

		/** Optional unique identifier for this command, used in wait_for to reference this command as a dependency. */
		id?: string | null;

		/** Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`. */
		name?: string | null;

		/** The ID(s) of the command(s) that this command depends on. */
		waitFor?: Array<string>;
	}

	/** Command describes a step performed as part of the build pipeline. */
	export interface CommandFormProperties {

		/** Working directory (relative to project source root) used when running this command. */
		dir: FormControl<string | null | undefined>,

		/** Optional unique identifier for this command, used in wait_for to reference this command as a dependency. */
		id: FormControl<string | null | undefined>,

		/** Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
			dir: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source describes the location of the source used for the build. */
	export interface Source {

		/** If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field. */
		additionalContexts?: Array<SourceContext>;

		/** If provided, the input binary artifacts for the build came from this location. */
		artifactStorageSourceUri?: string | null;

		/** A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory. */
		context?: SourceContext;

		/** Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file. */
		fileHashes?: {[id: string]: FileHashes };
	}

	/** Source describes the location of the source used for the build. */
	export interface SourceFormProperties {

		/** If provided, the input binary artifacts for the build came from this location. */
		artifactStorageSourceUri: FormControl<string | null | undefined>,

		/** Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file. */
		fileHashes: FormControl<{[id: string]: FileHashes } | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			artifactStorageSourceUri: new FormControl<string | null | undefined>(undefined),
			fileHashes: new FormControl<{[id: string]: FileHashes } | null | undefined>(undefined),
		});

	}


	/** A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory. */
	export interface SourceContext {

		/** A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo. */
		cloudRepo?: CloudRepoSourceContext;

		/** A SourceContext referring to a Gerrit project. */
		gerrit?: GerritSourceContext;

		/** A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub). */
		git?: GitSourceContext;

		/** Labels with user defined metadata. */
		labels?: {[id: string]: string };
	}

	/** A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory. */
	export interface SourceContextFormProperties {

		/** Labels with user defined metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSourceContextFormGroup() {
		return new FormGroup<SourceContextFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo. */
	export interface CloudRepoSourceContext {

		/** An alias to a repo revision. */
		aliasContext?: AliasContext;

		/** A unique identifier for a Cloud Repo. */
		repoId?: RepoId;

		/** A revision ID. */
		revisionId?: string | null;
	}

	/** A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo. */
	export interface CloudRepoSourceContextFormProperties {

		/** A revision ID. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCloudRepoSourceContextFormGroup() {
		return new FormGroup<CloudRepoSourceContextFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A unique identifier for a Cloud Repo. */
	export interface RepoId {

		/** Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project. */
		projectRepoId?: ProjectRepoId;

		/** A server-assigned, globally unique identifier. */
		uid?: string | null;
	}

	/** A unique identifier for a Cloud Repo. */
	export interface RepoIdFormProperties {

		/** A server-assigned, globally unique identifier. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateRepoIdFormGroup() {
		return new FormGroup<RepoIdFormProperties>({
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project. */
	export interface ProjectRepoId {

		/** The ID of the project. */
		projectId?: string | null;

		/** The name of the repo. Leave empty for the default repo. */
		repoName?: string | null;
	}

	/** Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project. */
	export interface ProjectRepoIdFormProperties {

		/** The ID of the project. */
		projectId: FormControl<string | null | undefined>,

		/** The name of the repo. Leave empty for the default repo. */
		repoName: FormControl<string | null | undefined>,
	}
	export function CreateProjectRepoIdFormGroup() {
		return new FormGroup<ProjectRepoIdFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			repoName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A SourceContext referring to a Gerrit project. */
	export interface GerritSourceContext {

		/** An alias to a repo revision. */
		aliasContext?: AliasContext;

		/** The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project. */
		gerritProject?: string | null;

		/** The URI of a running Gerrit instance. */
		hostUri?: string | null;

		/** A revision (commit) ID. */
		revisionId?: string | null;
	}

	/** A SourceContext referring to a Gerrit project. */
	export interface GerritSourceContextFormProperties {

		/** The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project. */
		gerritProject: FormControl<string | null | undefined>,

		/** The URI of a running Gerrit instance. */
		hostUri: FormControl<string | null | undefined>,

		/** A revision (commit) ID. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGerritSourceContextFormGroup() {
		return new FormGroup<GerritSourceContextFormProperties>({
			gerritProject: new FormControl<string | null | undefined>(undefined),
			hostUri: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub). */
	export interface GitSourceContext {

		/** Git commit hash. */
		revisionId?: string | null;

		/** Git repository URL. */
		url?: string | null;
	}

	/** A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub). */
	export interface GitSourceContextFormProperties {

		/** Git commit hash. */
		revisionId: FormControl<string | null | undefined>,

		/** Git repository URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGitSourceContextFormGroup() {
		return new FormGroup<GitSourceContextFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build. */
	export interface FileHashes {

		/** Required. Collection of file hashes. */
		fileHash?: Array<Hash>;
	}

	/** Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build. */
	export interface FileHashesFormProperties {
	}
	export function CreateFileHashesFormGroup() {
		return new FormGroup<FileHashesFormProperties>({
		});

	}


	/** Container message for hash values. */
	export interface Hash {

		/** Required. The type of hash that was performed. */
		type?: HashType | null;

		/** Required. The hash value. */
		value?: string | null;
	}

	/** Container message for hash values. */
	export interface HashFormProperties {

		/** Required. The type of hash that was performed. */
		type: FormControl<HashType | null | undefined>,

		/** Required. The hash value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHashFormGroup() {
		return new FormGroup<HashFormProperties>({
			type: new FormControl<HashType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HashType { HASH_TYPE_UNSPECIFIED = 'HASH_TYPE_UNSPECIFIED', SHA256 = 'SHA256', GO_MODULE_H1 = 'GO_MODULE_H1', SHA512 = 'SHA512' }


	/** Details of a deployment occurrence. */
	export interface GrafeasV1beta1DeploymentDetails {

		/** The period during which some deployable was active in a runtime. */
		deployment?: Deployment;
	}

	/** Details of a deployment occurrence. */
	export interface GrafeasV1beta1DeploymentDetailsFormProperties {
	}
	export function CreateGrafeasV1beta1DeploymentDetailsFormGroup() {
		return new FormGroup<GrafeasV1beta1DeploymentDetailsFormProperties>({
		});

	}


	/** The period during which some deployable was active in a runtime. */
	export interface Deployment {

		/** Address of the runtime element hosting this deployment. */
		address?: string | null;

		/** Configuration used to create this deployment. */
		config?: string | null;

		/** Required. Beginning of the lifetime of this deployment. */
		deployTime?: string | null;

		/** Platform hosting this deployment. */
		platform?: DeploymentPlatform | null;

		/** Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name. */
		resourceUri?: Array<string>;

		/** End of the lifetime of this deployment. */
		undeployTime?: string | null;

		/** Identity of the user that triggered this deployment. */
		userEmail?: string | null;
	}

	/** The period during which some deployable was active in a runtime. */
	export interface DeploymentFormProperties {

		/** Address of the runtime element hosting this deployment. */
		address: FormControl<string | null | undefined>,

		/** Configuration used to create this deployment. */
		config: FormControl<string | null | undefined>,

		/** Required. Beginning of the lifetime of this deployment. */
		deployTime: FormControl<string | null | undefined>,

		/** Platform hosting this deployment. */
		platform: FormControl<DeploymentPlatform | null | undefined>,

		/** End of the lifetime of this deployment. */
		undeployTime: FormControl<string | null | undefined>,

		/** Identity of the user that triggered this deployment. */
		userEmail: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			config: new FormControl<string | null | undefined>(undefined),
			deployTime: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<DeploymentPlatform | null | undefined>(undefined),
			undeployTime: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentPlatform { PLATFORM_UNSPECIFIED = 'PLATFORM_UNSPECIFIED', GKE = 'GKE', FLEX = 'FLEX', CUSTOM = 'CUSTOM' }


	/** Details of an image occurrence. */
	export interface GrafeasV1beta1ImageDetails {

		/** Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM . */
		derivedImage?: Derived;
	}

	/** Details of an image occurrence. */
	export interface GrafeasV1beta1ImageDetailsFormProperties {
	}
	export function CreateGrafeasV1beta1ImageDetailsFormGroup() {
		return new FormGroup<GrafeasV1beta1ImageDetailsFormProperties>({
		});

	}


	/** Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM . */
	export interface Derived {

		/** Output only. This contains the base image URL for the derived image occurrence. */
		baseResourceUrl?: string | null;

		/** Output only. The number of layers by which this image differs from the associated image basis. */
		distance?: number | null;

		/** A set of properties that uniquely identify a given Docker image. */
		fingerprint?: Fingerprint;

		/** This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer. */
		layerInfo?: Array<Layer>;
	}

	/** Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM . */
	export interface DerivedFormProperties {

		/** Output only. This contains the base image URL for the derived image occurrence. */
		baseResourceUrl: FormControl<string | null | undefined>,

		/** Output only. The number of layers by which this image differs from the associated image basis. */
		distance: FormControl<number | null | undefined>,
	}
	export function CreateDerivedFormGroup() {
		return new FormGroup<DerivedFormProperties>({
			baseResourceUrl: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Layer holds metadata specific to a layer of a Docker image. */
	export interface Layer {

		/** The recovered arguments to the Dockerfile directive. */
		arguments?: string | null;

		/** Required. The recovered Dockerfile directive used to construct this layer. */
		directive?: LayerDirective | null;
	}

	/** Layer holds metadata specific to a layer of a Docker image. */
	export interface LayerFormProperties {

		/** The recovered arguments to the Dockerfile directive. */
		arguments: FormControl<string | null | undefined>,

		/** Required. The recovered Dockerfile directive used to construct this layer. */
		directive: FormControl<LayerDirective | null | undefined>,
	}
	export function CreateLayerFormGroup() {
		return new FormGroup<LayerFormProperties>({
			arguments: new FormControl<string | null | undefined>(undefined),
			directive: new FormControl<LayerDirective | null | undefined>(undefined),
		});

	}

	export enum LayerDirective { DIRECTIVE_UNSPECIFIED = 'DIRECTIVE_UNSPECIFIED', MAINTAINER = 'MAINTAINER', RUN = 'RUN', CMD = 'CMD', LABEL = 'LABEL', EXPOSE = 'EXPOSE', ENV = 'ENV', ADD = 'ADD', COPY = 'COPY', ENTRYPOINT = 'ENTRYPOINT', VOLUME = 'VOLUME', USER = 'USER', WORKDIR = 'WORKDIR', ARG = 'ARG', ONBUILD = 'ONBUILD', STOPSIGNAL = 'STOPSIGNAL', HEALTHCHECK = 'HEALTHCHECK', SHELL = 'SHELL' }


	/** Details of a discovery occurrence. */
	export interface GrafeasV1beta1DiscoveryDetails {

		/** Provides information about the analysis status of a discovered resource. */
		discovered?: Discovered;
	}

	/** Details of a discovery occurrence. */
	export interface GrafeasV1beta1DiscoveryDetailsFormProperties {
	}
	export function CreateGrafeasV1beta1DiscoveryDetailsFormGroup() {
		return new FormGroup<GrafeasV1beta1DiscoveryDetailsFormProperties>({
		});

	}


	/** Provides information about the analysis status of a discovered resource. */
	export interface Discovered {

		/** Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource. */
		analysisCompleted?: AnalysisCompleted;

		/** Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors. */
		analysisError?: Array<Status>;

		/** The status of discovery for the resource. */
		analysisStatus?: DiscoveredAnalysisStatus | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		analysisStatusError?: Status;

		/** Whether the resource is continuously analyzed. */
		continuousAnalysis?: DiscoveredContinuousAnalysis | null;

		/** The last time continuous analysis was done for this resource. Deprecated, do not use. */
		lastAnalysisTime?: string | null;

		/** The last time this resource was scanned. */
		lastScanTime?: string | null;

		/** The status of an SBOM generation. */
		sbomStatus?: SBOMStatus;
	}

	/** Provides information about the analysis status of a discovered resource. */
	export interface DiscoveredFormProperties {

		/** The status of discovery for the resource. */
		analysisStatus: FormControl<DiscoveredAnalysisStatus | null | undefined>,

		/** Whether the resource is continuously analyzed. */
		continuousAnalysis: FormControl<DiscoveredContinuousAnalysis | null | undefined>,

		/** The last time continuous analysis was done for this resource. Deprecated, do not use. */
		lastAnalysisTime: FormControl<string | null | undefined>,

		/** The last time this resource was scanned. */
		lastScanTime: FormControl<string | null | undefined>,
	}
	export function CreateDiscoveredFormGroup() {
		return new FormGroup<DiscoveredFormProperties>({
			analysisStatus: new FormControl<DiscoveredAnalysisStatus | null | undefined>(undefined),
			continuousAnalysis: new FormControl<DiscoveredContinuousAnalysis | null | undefined>(undefined),
			lastAnalysisTime: new FormControl<string | null | undefined>(undefined),
			lastScanTime: new FormControl<string | null | undefined>(undefined),
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

	export enum DiscoveredAnalysisStatus { ANALYSIS_STATUS_UNSPECIFIED = 'ANALYSIS_STATUS_UNSPECIFIED', PENDING = 'PENDING', SCANNING = 'SCANNING', FINISHED_SUCCESS = 'FINISHED_SUCCESS', COMPLETE = 'COMPLETE', FINISHED_FAILED = 'FINISHED_FAILED', FINISHED_UNSUPPORTED = 'FINISHED_UNSUPPORTED' }

	export enum DiscoveredContinuousAnalysis { CONTINUOUS_ANALYSIS_UNSPECIFIED = 'CONTINUOUS_ANALYSIS_UNSPECIFIED', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }


	/** The status of an SBOM generation. */
	export interface SBOMStatus {

		/** If there was an error generating an SBOM, this will indicate what that error was. */
		error?: string | null;

		/** The progress of the SBOM generation. */
		sbomState?: SBOMStatusSbomState | null;
	}

	/** The status of an SBOM generation. */
	export interface SBOMStatusFormProperties {

		/** If there was an error generating an SBOM, this will indicate what that error was. */
		error: FormControl<string | null | undefined>,

		/** The progress of the SBOM generation. */
		sbomState: FormControl<SBOMStatusSbomState | null | undefined>,
	}
	export function CreateSBOMStatusFormGroup() {
		return new FormGroup<SBOMStatusFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			sbomState: new FormControl<SBOMStatusSbomState | null | undefined>(undefined),
		});

	}

	export enum SBOMStatusSbomState { SBOM_STATE_UNSPECIFIED = 'SBOM_STATE_UNSPECIFIED', PENDING = 'PENDING', COMPLETE = 'COMPLETE' }


	/** MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type. */
	export interface Envelope {
		payload?: string | null;
		payloadType?: string | null;
		signatures?: Array<EnvelopeSignature>;
	}

	/** MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type. */
	export interface EnvelopeFormProperties {
		payload: FormControl<string | null | undefined>,
		payloadType: FormControl<string | null | undefined>,
	}
	export function CreateEnvelopeFormGroup() {
		return new FormGroup<EnvelopeFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
			payloadType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnvelopeSignature {
		keyid?: string | null;
		sig?: string | null;
	}
	export interface EnvelopeSignatureFormProperties {
		keyid: FormControl<string | null | undefined>,
		sig: FormControl<string | null | undefined>,
	}
	export function CreateEnvelopeSignatureFormGroup() {
		return new FormGroup<EnvelopeSignatureFormProperties>({
			keyid: new FormControl<string | null | undefined>(undefined),
			sig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a package occurrence. */
	export interface GrafeasV1beta1PackageDetails {

		/** This represents how a particular software package may be installed on a system. */
		installation?: Installation;
	}

	/** Details of a package occurrence. */
	export interface GrafeasV1beta1PackageDetailsFormProperties {
	}
	export function CreateGrafeasV1beta1PackageDetailsFormGroup() {
		return new FormGroup<GrafeasV1beta1PackageDetailsFormProperties>({
		});

	}


	/** This represents how a particular software package may be installed on a system. */
	export interface Installation {

		/** Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
		architecture?: PackageArchitecture | null;

		/** Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
		cpeUri?: string | null;

		/** License information. */
		license?: License;

		/** All of the places within the filesystem versions of this package have been found. */
		location?: Array<Location>;

		/** Required. Output only. The name of the installed package. */
		name?: string | null;

		/** Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		packageType?: string | null;

		/** Version contains structured information about the version of a package. */
		version?: Version;
	}

	/** This represents how a particular software package may be installed on a system. */
	export interface InstallationFormProperties {

		/** Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
		architecture: FormControl<PackageArchitecture | null | undefined>,

		/** Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
		cpeUri: FormControl<string | null | undefined>,

		/** Required. Output only. The name of the installed package. */
		name: FormControl<string | null | undefined>,

		/** Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		packageType: FormControl<string | null | undefined>,
	}
	export function CreateInstallationFormGroup() {
		return new FormGroup<InstallationFormProperties>({
			architecture: new FormControl<PackageArchitecture | null | undefined>(undefined),
			cpeUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`. */
	export interface Location {

		/** Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. */
		cpeUri?: string | null;

		/** The path from which we gathered that this package/version is installed. */
		path?: string | null;

		/** Version contains structured information about the version of a package. */
		version?: Version;
	}

	/** An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`. */
	export interface LocationFormProperties {

		/** Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. */
		cpeUri: FormControl<string | null | undefined>,

		/** The path from which we gathered that this package/version is installed. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			cpeUri: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note. */
	export interface GrafeasV1beta1IntotoDetails {
		signatures?: Array<GrafeasV1beta1IntotoSignature>;

		/** This corresponds to an in-toto link. */
		signed?: Link;
	}

	/** This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note. */
	export interface GrafeasV1beta1IntotoDetailsFormProperties {
	}
	export function CreateGrafeasV1beta1IntotoDetailsFormGroup() {
		return new FormGroup<GrafeasV1beta1IntotoDetailsFormProperties>({
		});

	}


	/** A signature object consists of the KeyID used and the signature itself. */
	export interface GrafeasV1beta1IntotoSignature {
		keyid?: string | null;
		sig?: string | null;
	}

	/** A signature object consists of the KeyID used and the signature itself. */
	export interface GrafeasV1beta1IntotoSignatureFormProperties {
		keyid: FormControl<string | null | undefined>,
		sig: FormControl<string | null | undefined>,
	}
	export function CreateGrafeasV1beta1IntotoSignatureFormGroup() {
		return new FormGroup<GrafeasV1beta1IntotoSignatureFormProperties>({
			keyid: new FormControl<string | null | undefined>(undefined),
			sig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This corresponds to an in-toto link. */
	export interface Link {

		/** Defines an object for the byproducts field in in-toto links. The suggested fields are "stderr", "stdout", and "return-value". */
		byproducts?: ByProducts;

		/** This field contains the full command executed for the step. This can also be empty if links are generated for operations that aren't directly mapped to a specific command. Each term in the command is an independent string in the list. An example of a command in the in-toto metadata field is: "command": ["git", "clone", "https://github.com/in-toto/demo-project.git"] */
		command?: Array<string>;

		/** Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir". */
		environment?: Environment;

		/** Materials are the supply chain artifacts that go into the step and are used for the operation performed. The key of the map is the path of the artifact and the structure contains the recorded hash information. An example is: "materials": [ { "resource_uri": "foo/bar", "hashes": { "sha256": "ebebf...", : } } ] */
		materials?: Array<GrafeasV1beta1IntotoArtifact>;

		/** Products are the supply chain artifacts generated as a result of the step. The structure is identical to that of materials. */
		products?: Array<GrafeasV1beta1IntotoArtifact>;
	}

	/** This corresponds to an in-toto link. */
	export interface LinkFormProperties {
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
		});

	}


	/** Defines an object for the byproducts field in in-toto links. The suggested fields are "stderr", "stdout", and "return-value". */
	export interface ByProducts {
		customValues?: {[id: string]: string };
	}

	/** Defines an object for the byproducts field in in-toto links. The suggested fields are "stderr", "stdout", and "return-value". */
	export interface ByProductsFormProperties {
		customValues: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateByProductsFormGroup() {
		return new FormGroup<ByProductsFormProperties>({
			customValues: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir". */
	export interface Environment {
		customValues?: {[id: string]: string };
	}

	/** Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir". */
	export interface EnvironmentFormProperties {
		customValues: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			customValues: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface GrafeasV1beta1IntotoArtifact {

		/** Defines a hash object for use in Materials and Products. */
		hashes?: ArtifactHashes;
		resourceUri?: string | null;
	}
	export interface GrafeasV1beta1IntotoArtifactFormProperties {
		resourceUri: FormControl<string | null | undefined>,
	}
	export function CreateGrafeasV1beta1IntotoArtifactFormGroup() {
		return new FormGroup<GrafeasV1beta1IntotoArtifactFormProperties>({
			resourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entity that can have metadata. For example, a Docker image. */
	export interface Resource {

		/** Container message for hash values. */
		contentHash?: Hash;

		/** Deprecated, do not use. Use uri instead. The name of the resource. For example, the name of a Docker image - "Debian". */
		name?: string | null;

		/** Required. The unique URI of the resource. For example, `https://gcr.io/project/image@sha256:foo` for a Docker image. */
		uri?: string | null;
	}

	/** An entity that can have metadata. For example, a Docker image. */
	export interface ResourceFormProperties {

		/** Deprecated, do not use. Use uri instead. The name of the resource. For example, the name of a Docker image - "Debian". */
		name: FormControl<string | null | undefined>,

		/** Required. The unique URI of the resource. For example, `https://gcr.io/project/image@sha256:foo` for a Docker image. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/ */
	export interface DocumentOccurrence {

		/** Identify when the SPDX file was originally created. The date is to be specified according to combined date and time in UTC format as specified in ISO 8601 standard */
		createTime?: string | null;

		/** A field for creators of the SPDX file to provide general comments about the creation of the SPDX file or any other relevant comment not included in the other fields */
		creatorComment?: string | null;

		/** Identify who (or what, in the case of a tool) created the SPDX file. If the SPDX file was created by an individual, indicate the person's name */
		creators?: Array<string>;

		/** A field for creators of the SPDX file content to provide comments to the consumers of the SPDX document */
		documentComment?: string | null;

		/** Identify any external SPDX documents referenced within this SPDX document */
		externalDocumentRefs?: Array<string>;

		/** Identify the current SPDX document which may be referenced in relationships by other files, packages internally and documents externally */
		id?: string | null;

		/** A field for creators of the SPDX file to provide the version of the SPDX License List used when the SPDX file was created */
		licenseListVersion?: string | null;

		/** Provide an SPDX document specific namespace as a unique absolute Uniform Resource Identifier (URI) as specified in RFC-3986, with the exception of the ‘#’ delimiter */
		namespace?: string | null;

		/** Identify name of this document as designated by creator */
		title?: string | null;
	}

	/** DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/ */
	export interface DocumentOccurrenceFormProperties {

		/** Identify when the SPDX file was originally created. The date is to be specified according to combined date and time in UTC format as specified in ISO 8601 standard */
		createTime: FormControl<string | null | undefined>,

		/** A field for creators of the SPDX file to provide general comments about the creation of the SPDX file or any other relevant comment not included in the other fields */
		creatorComment: FormControl<string | null | undefined>,

		/** A field for creators of the SPDX file content to provide comments to the consumers of the SPDX document */
		documentComment: FormControl<string | null | undefined>,

		/** Identify the current SPDX document which may be referenced in relationships by other files, packages internally and documents externally */
		id: FormControl<string | null | undefined>,

		/** A field for creators of the SPDX file to provide the version of the SPDX License List used when the SPDX file was created */
		licenseListVersion: FormControl<string | null | undefined>,

		/** Provide an SPDX document specific namespace as a unique absolute Uniform Resource Identifier (URI) as specified in RFC-3986, with the exception of the ‘#’ delimiter */
		namespace: FormControl<string | null | undefined>,

		/** Identify name of this document as designated by creator */
		title: FormControl<string | null | undefined>,
	}
	export function CreateDocumentOccurrenceFormGroup() {
		return new FormGroup<DocumentOccurrenceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			creatorComment: new FormControl<string | null | undefined>(undefined),
			documentComment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			licenseListVersion: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The occurrence representing an SBOM reference as applied to a specific resource. The occurrence follows the DSSE specification. See https://github.com/secure-systems-lab/dsse/blob/master/envelope.md for more details. */
	export interface SBOMReferenceOccurrence {

		/** The actual payload that contains the SBOM Reference data. The payload follows the intoto statement specification. See https://github.com/in-toto/attestation/blob/main/spec/v1.0/statement.md for more details. */
		payload?: SbomReferenceIntotoPayload;

		/** The kind of payload that SbomReferenceIntotoPayload takes. Since it's in the intoto format, this value is expected to be 'application/vnd.in-toto+json'. */
		payloadType?: string | null;

		/** The signatures over the payload. */
		signatures?: Array<EnvelopeSignature>;
	}

	/** The occurrence representing an SBOM reference as applied to a specific resource. The occurrence follows the DSSE specification. See https://github.com/secure-systems-lab/dsse/blob/master/envelope.md for more details. */
	export interface SBOMReferenceOccurrenceFormProperties {

		/** The kind of payload that SbomReferenceIntotoPayload takes. Since it's in the intoto format, this value is expected to be 'application/vnd.in-toto+json'. */
		payloadType: FormControl<string | null | undefined>,
	}
	export function CreateSBOMReferenceOccurrenceFormGroup() {
		return new FormGroup<SBOMReferenceOccurrenceFormProperties>({
			payloadType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The actual payload that contains the SBOM Reference data. The payload follows the intoto statement specification. See https://github.com/in-toto/attestation/blob/main/spec/v1.0/statement.md for more details. */
	export interface SbomReferenceIntotoPayload {

		/** Identifier for the schema of the Statement. */
		_type?: string | null;

		/** A predicate which describes the SBOM being referenced. */
		predicate?: SbomReferenceIntotoPredicate;

		/** URI identifying the type of the Predicate. */
		predicateType?: string | null;

		/** Set of software artifacts that the attestation applies to. Each element represents a single software artifact. */
		subject?: Array<Subject>;
	}

	/** The actual payload that contains the SBOM Reference data. The payload follows the intoto statement specification. See https://github.com/in-toto/attestation/blob/main/spec/v1.0/statement.md for more details. */
	export interface SbomReferenceIntotoPayloadFormProperties {

		/** Identifier for the schema of the Statement. */
		_type: FormControl<string | null | undefined>,

		/** URI identifying the type of the Predicate. */
		predicateType: FormControl<string | null | undefined>,
	}
	export function CreateSbomReferenceIntotoPayloadFormGroup() {
		return new FormGroup<SbomReferenceIntotoPayloadFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined),
			predicateType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A predicate which describes the SBOM being referenced. */
	export interface SbomReferenceIntotoPredicate {

		/** A map of algorithm to digest of the contents of the SBOM. */
		digest?: {[id: string]: string };

		/** The location of the SBOM. */
		location?: string | null;

		/** The mime type of the SBOM. */
		mimeType?: string | null;

		/** The person or system referring this predicate to the consumer. */
		referrerId?: string | null;
	}

	/** A predicate which describes the SBOM being referenced. */
	export interface SbomReferenceIntotoPredicateFormProperties {

		/** A map of algorithm to digest of the contents of the SBOM. */
		digest: FormControl<{[id: string]: string } | null | undefined>,

		/** The location of the SBOM. */
		location: FormControl<string | null | undefined>,

		/** The mime type of the SBOM. */
		mimeType: FormControl<string | null | undefined>,

		/** The person or system referring this predicate to the consumer. */
		referrerId: FormControl<string | null | undefined>,
	}
	export function CreateSbomReferenceIntotoPredicateFormGroup() {
		return new FormGroup<SbomReferenceIntotoPredicateFormProperties>({
			digest: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			referrerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/ */
	export interface FileOccurrence {

		/** This field provides a place for the SPDX data creator to record, at the file level, acknowledgements that may be needed to be communicated in some contexts */
		attributions?: Array<string>;

		/** This field provides a place for the SPDX file creator to record any general comments about the file */
		comment?: string | null;

		/** This field provides a place for the SPDX file creator to record file contributors */
		contributors?: Array<string>;

		/** Identify the copyright holder of the file, as well as any dates present */
		copyright?: string | null;

		/** This field contains the license information actually found in the file, if any */
		filesLicenseInfo?: Array<string>;

		/** Uniquely identify any element in an SPDX document which may be referenced by other elements */
		id?: string | null;

		/** License information. */
		licenseConcluded?: License;

		/** This field provides a place for the SPDX file creator to record license notices or other such related notices found in the file */
		notice?: string | null;
	}

	/** FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/ */
	export interface FileOccurrenceFormProperties {

		/** This field provides a place for the SPDX file creator to record any general comments about the file */
		comment: FormControl<string | null | undefined>,

		/** Identify the copyright holder of the file, as well as any dates present */
		copyright: FormControl<string | null | undefined>,

		/** Uniquely identify any element in an SPDX document which may be referenced by other elements */
		id: FormControl<string | null | undefined>,

		/** This field provides a place for the SPDX file creator to record license notices or other such related notices found in the file */
		notice: FormControl<string | null | undefined>,
	}
	export function CreateFileOccurrenceFormGroup() {
		return new FormGroup<FileOccurrenceFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			notice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/ */
	export interface PackageInfoOccurrence {

		/** A place for the SPDX file creator to record any general comments about the package being described */
		comment?: string | null;

		/** Provide the actual file name of the package, or path of the directory being treated as a package */
		filename?: string | null;

		/** Output only. Provide a place for the SPDX file creator to record a web site that serves as the package's home page */
		homePage?: string | null;

		/** Uniquely identify any element in an SPDX document which may be referenced by other elements */
		id?: string | null;

		/** License information. */
		licenseConcluded?: License;

		/** Output only. The type of package: OS, MAVEN, GO, GO_STDLIB, etc. */
		packageType?: string | null;

		/** Provide a place for the SPDX file creator to record any relevant background information or additional comments about the origin of the package */
		sourceInfo?: string | null;

		/** Output only. A short description of the package */
		summaryDescription?: string | null;

		/** Output only. Identify the full name of the package as given by the Package Originator */
		title?: string | null;

		/** Output only. Identify the version of the package */
		version?: string | null;
	}

	/** PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/ */
	export interface PackageInfoOccurrenceFormProperties {

		/** A place for the SPDX file creator to record any general comments about the package being described */
		comment: FormControl<string | null | undefined>,

		/** Provide the actual file name of the package, or path of the directory being treated as a package */
		filename: FormControl<string | null | undefined>,

		/** Output only. Provide a place for the SPDX file creator to record a web site that serves as the package's home page */
		homePage: FormControl<string | null | undefined>,

		/** Uniquely identify any element in an SPDX document which may be referenced by other elements */
		id: FormControl<string | null | undefined>,

		/** Output only. The type of package: OS, MAVEN, GO, GO_STDLIB, etc. */
		packageType: FormControl<string | null | undefined>,

		/** Provide a place for the SPDX file creator to record any relevant background information or additional comments about the origin of the package */
		sourceInfo: FormControl<string | null | undefined>,

		/** Output only. A short description of the package */
		summaryDescription: FormControl<string | null | undefined>,

		/** Output only. Identify the full name of the package as given by the Package Originator */
		title: FormControl<string | null | undefined>,

		/** Output only. Identify the version of the package */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePackageInfoOccurrenceFormGroup() {
		return new FormGroup<PackageInfoOccurrenceFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			homePage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
			sourceInfo: new FormControl<string | null | undefined>(undefined),
			summaryDescription: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RelationshipOccurrence represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/ */
	export interface RelationshipOccurrence {

		/** A place for the SPDX file creator to record any general comments about the relationship */
		comment?: string | null;

		/** Also referred to as SPDXRef-A The source SPDX element (file, package, etc) */
		source?: string | null;

		/** Also referred to as SPDXRef-B The target SPDC element (file, package, etc) In cases where there are "known unknowns", the use of the keyword NOASSERTION can be used The keywords NONE can be used to indicate that an SPDX element (package/file/snippet) has no other elements connected by some relationship to it */
		target?: string | null;

		/** Output only. The type of relationship between the source and target SPDX elements */
		type?: RelationshipNoteType | null;
	}

	/** RelationshipOccurrence represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/ */
	export interface RelationshipOccurrenceFormProperties {

		/** A place for the SPDX file creator to record any general comments about the relationship */
		comment: FormControl<string | null | undefined>,

		/** Also referred to as SPDXRef-A The source SPDX element (file, package, etc) */
		source: FormControl<string | null | undefined>,

		/** Also referred to as SPDXRef-B The target SPDC element (file, package, etc) In cases where there are "known unknowns", the use of the keyword NOASSERTION can be used The keywords NONE can be used to indicate that an SPDX element (package/file/snippet) has no other elements connected by some relationship to it */
		target: FormControl<string | null | undefined>,

		/** Output only. The type of relationship between the source and target SPDX elements */
		type: FormControl<RelationshipNoteType | null | undefined>,
	}
	export function CreateRelationshipOccurrenceFormGroup() {
		return new FormGroup<RelationshipOccurrenceFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<RelationshipNoteType | null | undefined>(undefined),
		});

	}


	/** Details of a vulnerability Occurrence. */
	export interface GrafeasV1beta1VulnerabilityDetails {

		/** Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0-10 where 0 indicates low severity and 10 indicates high severity. */
		cvssScore?: number | null;

		/** Common Vulnerability Scoring System. This message is compatible with CVSS v2 and v3. For CVSS v2 details, see https://www.first.org/cvss/v2/guide CVSS v2 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator For CVSS v3 details, see https://www.first.org/cvss/specification-document CVSS v3 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator */
		cvssV2?: CVSS;

		/** Common Vulnerability Scoring System. This message is compatible with CVSS v2 and v3. For CVSS v2 details, see https://www.first.org/cvss/v2/guide CVSS v2 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator For CVSS v3 details, see https://www.first.org/cvss/specification-document CVSS v3 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator */
		cvssV3?: CVSS;

		/** Output only. CVSS version used to populate cvss_score and severity. */
		cvssVersion?: VulnerabilityCvssVersion | null;

		/** The distro assigned severity for this vulnerability when it is available, and note provider assigned severity when distro has not yet assigned a severity for this vulnerability. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues. */
		effectiveSeverity?: VulnerabilitySeverity | null;

		/** Occurrence-specific extra details about the vulnerability. */
		extraDetails?: string | null;

		/** Output only. A detailed description of this vulnerability. */
		longDescription?: string | null;

		/** Required. The set of affected locations and their fixes (if available) within the associated resource. */
		packageIssue?: Array<PackageIssue>;

		/** Output only. URLs related to this vulnerability. */
		relatedUrls?: Array<RelatedUrl>;

		/** Output only. The note provider assigned Severity of the vulnerability. */
		severity?: VulnerabilitySeverity | null;

		/** Output only. A one sentence description of this vulnerability. */
		shortDescription?: string | null;

		/** The type of package; whether native or non native(ruby gems, node.js packages etc) */
		type?: string | null;

		/** VexAssessment provides all publisher provided Vex information that is related to this vulnerability. */
		vexAssessment?: VexAssessment;
	}

	/** Details of a vulnerability Occurrence. */
	export interface GrafeasV1beta1VulnerabilityDetailsFormProperties {

		/** Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0-10 where 0 indicates low severity and 10 indicates high severity. */
		cvssScore: FormControl<number | null | undefined>,

		/** Output only. CVSS version used to populate cvss_score and severity. */
		cvssVersion: FormControl<VulnerabilityCvssVersion | null | undefined>,

		/** The distro assigned severity for this vulnerability when it is available, and note provider assigned severity when distro has not yet assigned a severity for this vulnerability. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues. */
		effectiveSeverity: FormControl<VulnerabilitySeverity | null | undefined>,

		/** Occurrence-specific extra details about the vulnerability. */
		extraDetails: FormControl<string | null | undefined>,

		/** Output only. A detailed description of this vulnerability. */
		longDescription: FormControl<string | null | undefined>,

		/** Output only. The note provider assigned Severity of the vulnerability. */
		severity: FormControl<VulnerabilitySeverity | null | undefined>,

		/** Output only. A one sentence description of this vulnerability. */
		shortDescription: FormControl<string | null | undefined>,

		/** The type of package; whether native or non native(ruby gems, node.js packages etc) */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGrafeasV1beta1VulnerabilityDetailsFormGroup() {
		return new FormGroup<GrafeasV1beta1VulnerabilityDetailsFormProperties>({
			cvssScore: new FormControl<number | null | undefined>(undefined),
			cvssVersion: new FormControl<VulnerabilityCvssVersion | null | undefined>(undefined),
			effectiveSeverity: new FormControl<VulnerabilitySeverity | null | undefined>(undefined),
			extraDetails: new FormControl<string | null | undefined>(undefined),
			longDescription: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<VulnerabilitySeverity | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message wraps a location affected by a vulnerability and its associated fix (if one is available). */
	export interface PackageIssue {

		/** The location of the vulnerability. */
		affectedLocation?: VulnerabilityLocation;

		/** Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available. */
		effectiveSeverity?: VulnerabilitySeverity | null;

		/** The location of the vulnerability. */
		fixedLocation?: VulnerabilityLocation;

		/** The type of package (e.g. OS, MAVEN, GO). */
		packageType?: string | null;

		/** Deprecated, use Details.effective_severity instead The severity (e.g., distro assigned severity) for this vulnerability. */
		severityName?: string | null;
	}

	/** This message wraps a location affected by a vulnerability and its associated fix (if one is available). */
	export interface PackageIssueFormProperties {

		/** Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available. */
		effectiveSeverity: FormControl<VulnerabilitySeverity | null | undefined>,

		/** The type of package (e.g. OS, MAVEN, GO). */
		packageType: FormControl<string | null | undefined>,

		/** Deprecated, use Details.effective_severity instead The severity (e.g., distro assigned severity) for this vulnerability. */
		severityName: FormControl<string | null | undefined>,
	}
	export function CreatePackageIssueFormGroup() {
		return new FormGroup<PackageIssueFormProperties>({
			effectiveSeverity: new FormControl<VulnerabilitySeverity | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
			severityName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VexAssessment provides all publisher provided Vex information that is related to this vulnerability. */
	export interface VexAssessment {

		/** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs. */
		cve?: string | null;

		/** Contains information about the impact of this vulnerability, this will change with time. */
		impacts?: Array<string>;

		/** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
		justification?: Justification;

		/** The VulnerabilityAssessment note from which this VexAssessment was generated. This will be of the form: `projects/[PROJECT_ID]/notes/[NOTE_ID]`. */
		noteName?: string | null;

		/** Holds a list of references associated with this vulnerability item and assessment. */
		relatedUris?: Array<RelatedUrl>;

		/** Specifies details on how to handle (and presumably, fix) a vulnerability. */
		remediations?: Array<Remediation>;

		/** Provides the state of this Vulnerability assessment. */
		state?: AssessmentState | null;

		/** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
		vulnerabilityId?: string | null;
	}

	/** VexAssessment provides all publisher provided Vex information that is related to this vulnerability. */
	export interface VexAssessmentFormProperties {

		/** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs. */
		cve: FormControl<string | null | undefined>,

		/** The VulnerabilityAssessment note from which this VexAssessment was generated. This will be of the form: `projects/[PROJECT_ID]/notes/[NOTE_ID]`. */
		noteName: FormControl<string | null | undefined>,

		/** Provides the state of this Vulnerability assessment. */
		state: FormControl<AssessmentState | null | undefined>,

		/** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
		vulnerabilityId: FormControl<string | null | undefined>,
	}
	export function CreateVexAssessmentFormGroup() {
		return new FormGroup<VexAssessmentFormProperties>({
			cve: new FormControl<string | null | undefined>(undefined),
			noteName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AssessmentState | null | undefined>(undefined),
			vulnerabilityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for creating occurrences in batch. */
	export interface BatchCreateOccurrencesResponse {

		/** The occurrences that were created. */
		occurrences?: Array<Occurrence>;
	}

	/** Response for creating occurrences in batch. */
	export interface BatchCreateOccurrencesResponseFormProperties {
	}
	export function CreateBatchCreateOccurrencesResponseFormGroup() {
		return new FormGroup<BatchCreateOccurrencesResponseFormProperties>({
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


	/** A step in the build pipeline. Next ID: 21 */
	export interface BuildStep {

		/** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
		allowExitCodes?: Array<number>;

		/** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
		allowFailure?: boolean | null;

		/** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
		args?: Array<string>;

		/** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
		automapSubstitutions?: boolean | null;

		/** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
		dir?: string | null;

		/** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
		entrypoint?: string | null;

		/** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
		env?: Array<string>;

		/** Output only. Return code from running the step. */
		exitCode?: number | null;

		/** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
		id?: string | null;

		/** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
		name?: string | null;

		/** Start and end times for a build execution phase. Next ID: 3 */
		pullTiming?: TimeSpan;

		/** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
		script?: string | null;

		/** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
		secretEnv?: Array<string>;

		/** Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses. */
		status?: BuildStepStatus | null;

		/** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
		timeout?: string | null;

		/** Start and end times for a build execution phase. Next ID: 3 */
		timing?: TimeSpan;

		/** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
		volumes?: Array<Volume>;

		/** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
		waitFor?: Array<string>;
	}

	/** A step in the build pipeline. Next ID: 21 */
	export interface BuildStepFormProperties {

		/** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
		allowFailure: FormControl<boolean | null | undefined>,

		/** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
		automapSubstitutions: FormControl<boolean | null | undefined>,

		/** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
		dir: FormControl<string | null | undefined>,

		/** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
		entrypoint: FormControl<string | null | undefined>,

		/** Output only. Return code from running the step. */
		exitCode: FormControl<number | null | undefined>,

		/** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
		id: FormControl<string | null | undefined>,

		/** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
		name: FormControl<string | null | undefined>,

		/** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
		script: FormControl<string | null | undefined>,

		/** Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses. */
		status: FormControl<BuildStepStatus | null | undefined>,

		/** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateBuildStepFormGroup() {
		return new FormGroup<BuildStepFormProperties>({
			allowFailure: new FormControl<boolean | null | undefined>(undefined),
			automapSubstitutions: new FormControl<boolean | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			entrypoint: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BuildStepStatus | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Start and end times for a build execution phase. Next ID: 3 */
	export interface TimeSpan {

		/** End of time span. */
		endTime?: string | null;

		/** Start of time span. */
		startTime?: string | null;
	}

	/** Start and end times for a build execution phase. Next ID: 3 */
	export interface TimeSpanFormProperties {

		/** End of time span. */
		endTime: FormControl<string | null | undefined>,

		/** Start of time span. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeSpanFormGroup() {
		return new FormGroup<TimeSpanFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildStepStatus { STATUS_UNKNOWN = 'STATUS_UNKNOWN', PENDING = 'PENDING', QUEUING = 'QUEUING', QUEUED = 'QUEUED', WORKING = 'WORKING', SUCCESS = 'SUCCESS', FAILURE = 'FAILURE', INTERNAL_ERROR = 'INTERNAL_ERROR', TIMEOUT = 'TIMEOUT', CANCELLED = 'CANCELLED', EXPIRED = 'EXPIRED' }


	/** Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution. Next ID: 3 */
	export interface Volume {

		/** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
		name?: string | null;

		/** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
		path?: string | null;
	}

	/** Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution. Next ID: 3 */
	export interface VolumeFormProperties {

		/** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
		name: FormControl<string | null | undefined>,

		/** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ApprovalConfig describes configuration for manual approval of a build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig {

		/** Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start. */
		approvalRequired?: boolean | null;
	}

	/** ApprovalConfig describes configuration for manual approval of a build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfigFormProperties {

		/** Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start. */
		approvalRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfigFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfigFormProperties>({
			approvalRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** ApprovalResult describes the decision and associated metadata of a manual approval of a build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult {

		/** Output only. The time when the approval decision was made. */
		approvalTime?: string | null;

		/** Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called. */
		approverAccount?: string | null;

		/** Optional. An optional comment for this manual approval result. */
		comment?: string | null;

		/** Required. The decision of this manual approval. */
		decision?: ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResultDecision | null;

		/** Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build. */
		url?: string | null;
	}

	/** ApprovalResult describes the decision and associated metadata of a manual approval of a build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResultFormProperties {

		/** Output only. The time when the approval decision was made. */
		approvalTime: FormControl<string | null | undefined>,

		/** Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called. */
		approverAccount: FormControl<string | null | undefined>,

		/** Optional. An optional comment for this manual approval result. */
		comment: FormControl<string | null | undefined>,

		/** Required. The decision of this manual approval. */
		decision: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResultDecision | null | undefined>,

		/** Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResultFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResultFormProperties>({
			approvalTime: new FormControl<string | null | undefined>(undefined),
			approverAccount: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			decision: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResultDecision | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResultDecision { DECISION_UNSPECIFIED = 'DECISION_UNSPECIFIED', APPROVED = 'APPROVED', REJECTED = 'REJECTED' }


	/** Artifacts produced by a build that should be uploaded upon successful completion of all build steps. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts {

		/** A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE. */
		images?: Array<string>;

		/** A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE. */
		mavenArtifacts?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact>;

		/** A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE. */
		npmPackages?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage>;

		/** Files in the workspace to upload to Cloud Storage upon successful completion of all build steps. */
		objects?: ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects;

		/** A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE. */
		pythonPackages?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage>;
	}

	/** Artifacts produced by a build that should be uploaded upon successful completion of all build steps. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsFormProperties {
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsFormProperties>({
		});

	}


	/** A Maven artifact to upload to Artifact Registry upon successful completion of all build steps. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact {

		/** Maven `artifactId` value used when uploading the artifact to Artifact Registry. */
		artifactId?: string | null;

		/** Maven `groupId` value used when uploading the artifact to Artifact Registry. */
		groupId?: string | null;

		/** Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. */
		path?: string | null;

		/** Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. */
		repository?: string | null;

		/** Maven `version` value used when uploading the artifact to Artifact Registry. */
		version?: string | null;
	}

	/** A Maven artifact to upload to Artifact Registry upon successful completion of all build steps. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifactFormProperties {

		/** Maven `artifactId` value used when uploading the artifact to Artifact Registry. */
		artifactId: FormControl<string | null | undefined>,

		/** Maven `groupId` value used when uploading the artifact to Artifact Registry. */
		groupId: FormControl<string | null | undefined>,

		/** Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. */
		path: FormControl<string | null | undefined>,

		/** Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. */
		repository: FormControl<string | null | undefined>,

		/** Maven `version` value used when uploading the artifact to Artifact Registry. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifactFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifactFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Npm package to upload to Artifact Registry upon successful completion of all build steps. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage {

		/** Path to the package.json. e.g. workspace/path/to/package */
		packagePath?: string | null;

		/** Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. */
		repository?: string | null;
	}

	/** Npm package to upload to Artifact Registry upon successful completion of all build steps. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackageFormProperties {

		/** Path to the package.json. e.g. workspace/path/to/package */
		packagePath: FormControl<string | null | undefined>,

		/** Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. */
		repository: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackageFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackageFormProperties>({
			packagePath: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Files in the workspace to upload to Cloud Storage upon successful completion of all build steps. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects {

		/** Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. */
		location?: string | null;

		/** Path globs used to match files in the build's workspace. */
		paths?: Array<string>;

		/** Start and end times for a build execution phase. */
		timing?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
	}

	/** Files in the workspace to upload to Cloud Storage upon successful completion of all build steps. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjectsFormProperties {

		/** Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjectsFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjectsFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Start and end times for a build execution phase. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan {

		/** End of time span. */
		endTime?: string | null;

		/** Start of time span. */
		startTime?: string | null;
	}

	/** Start and end times for a build execution phase. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanFormProperties {

		/** End of time span. */
		endTime: FormControl<string | null | undefined>,

		/** Start of time span. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpanFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage {

		/** Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/*`, and sometimes additionally an `.asc` file. */
		paths?: Array<string>;

		/** Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix. */
		repository?: string | null;
	}

	/** Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackageFormProperties {

		/** Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix. */
		repository: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackageFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackageFormProperties>({
			repository: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Build {

		/** BuildApproval describes a build's approval configuration, state, and result. */
		approval?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval;

		/** Artifacts produced by a build that should be uploaded upon successful completion of all build steps. */
		artifacts?: ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts;

		/** Secrets and secret environment variables. */
		availableSecrets?: ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets;

		/** Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically. */
		buildTriggerId?: string | null;

		/** Output only. Time at which the request to create the build was received. */
		createTime?: string | null;

		/** A fatal problem encountered during the execution of the build. */
		failureInfo?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo;

		/** Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution. */
		finishTime?: string | null;

		/** Output only. Unique identifier of the build. */
		id?: string | null;

		/** A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`. */
		images?: Array<string>;

		/** Output only. URL to logs for this build in Google Cloud Console. */
		logUrl?: string | null;

		/** Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
		logsBucket?: string | null;

		/** Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service. */
		name?: string | null;

		/** Optional arguments to enable specific features of builds. */
		options?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions;

		/** Output only. ID of the project. */
		projectId?: string | null;

		/** TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time. */
		queueTtl?: string | null;

		/** Artifacts created by the build pipeline. */
		results?: ContaineranalysisGoogleDevtoolsCloudbuildV1Results;

		/** Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets */
		secrets?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1Secret>;

		/** IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. */
		serviceAccount?: string | null;

		/** Location of the source in a supported storage service. */
		source?: ContaineranalysisGoogleDevtoolsCloudbuildV1Source;

		/** Provenance of the source. Ways to find the original source, or verify that some source was used for this build. */
		sourceProvenance?: ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance;

		/** Output only. Time at which execution of the build was started. */
		startTime?: string | null;

		/** Output only. Status of the build. */
		status?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStatus | null;

		/** Output only. Customer-readable message about the current status. */
		statusDetail?: string | null;

		/** Required. The operations to be performed on the workspace. */
		steps?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep>;

		/** Substitutions data for `Build` resource. */
		substitutions?: {[id: string]: string };

		/** Tags for annotation of a `Build`. These are not docker tags. */
		tags?: Array<string>;

		/** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes. */
		timeout?: string | null;

		/** Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included. */
		timing?: {[id: string]: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan };

		/** Output only. Non-fatal problems encountered during the execution of the build. */
		warnings?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning>;
	}

	/** A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFormProperties {

		/** Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically. */
		buildTriggerId: FormControl<string | null | undefined>,

		/** Output only. Time at which the request to create the build was received. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution. */
		finishTime: FormControl<string | null | undefined>,

		/** Output only. Unique identifier of the build. */
		id: FormControl<string | null | undefined>,

		/** Output only. URL to logs for this build in Google Cloud Console. */
		logUrl: FormControl<string | null | undefined>,

		/** Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
		logsBucket: FormControl<string | null | undefined>,

		/** Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service. */
		name: FormControl<string | null | undefined>,

		/** Output only. ID of the project. */
		projectId: FormControl<string | null | undefined>,

		/** TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time. */
		queueTtl: FormControl<string | null | undefined>,

		/** IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. Time at which execution of the build was started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. Status of the build. */
		status: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStatus | null | undefined>,

		/** Output only. Customer-readable message about the current status. */
		statusDetail: FormControl<string | null | undefined>,

		/** Substitutions data for `Build` resource. */
		substitutions: FormControl<{[id: string]: string } | null | undefined>,

		/** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes. */
		timeout: FormControl<string | null | undefined>,

		/** Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included. */
		timing: FormControl<{[id: string]: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan } | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1BuildFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFormProperties>({
			buildTriggerId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			finishTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			logUrl: new FormControl<string | null | undefined>(undefined),
			logsBucket: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			queueTtl: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStatus | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			substitutions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
			timing: new FormControl<{[id: string]: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan } | null | undefined>(undefined),
		});

	}


	/** BuildApproval describes a build's approval configuration, state, and result. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval {

		/** ApprovalConfig describes configuration for manual approval of a build. */
		config?: ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig;

		/** ApprovalResult describes the decision and associated metadata of a manual approval of a build. */
		result?: ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult;

		/** Output only. The state of this build's approval. */
		state?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApprovalState | null;
	}

	/** BuildApproval describes a build's approval configuration, state, and result. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApprovalFormProperties {

		/** Output only. The state of this build's approval. */
		state: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApprovalState | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1BuildApprovalFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApprovalFormProperties>({
			state: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApprovalState | null | undefined>(undefined),
		});

	}

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApprovalState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', APPROVED = 'APPROVED', REJECTED = 'REJECTED', CANCELLED = 'CANCELLED' }


	/** Secrets and secret environment variables. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets {

		/** Secrets encrypted with KMS key and the associated secret environment variable. */
		inline?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret>;

		/** Secrets in Secret Manager and associated secret environment variable. */
		secretManager?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret>;
	}

	/** Secrets and secret environment variables. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SecretsFormProperties {
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1SecretsFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1SecretsFormProperties>({
		});

	}


	/** Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret {

		/** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
		envMap?: {[id: string]: string };

		/** Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/locations/keyRings/cryptoKeys/* */
		kmsKeyName?: string | null;
	}

	/** Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecretFormProperties {

		/** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
		envMap: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/locations/keyRings/cryptoKeys/* */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecretFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecretFormProperties>({
			envMap: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pairs a secret environment variable with a SecretVersion in Secret Manager. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret {

		/** Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. */
		env?: string | null;

		/** Resource name of the SecretVersion. In format: projects/secrets/versions/* */
		versionName?: string | null;
	}

	/** Pairs a secret environment variable with a SecretVersion in Secret Manager. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecretFormProperties {

		/** Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. */
		env: FormControl<string | null | undefined>,

		/** Resource name of the SecretVersion. In format: projects/secrets/versions/* */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecretFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecretFormProperties>({
			env: new FormControl<string | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A fatal problem encountered during the execution of the build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo {

		/** Explains the failure issue in more detail using hard-coded text. */
		detail?: string | null;

		/** The name of the failure. */
		type?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfoType | null;
	}

	/** A fatal problem encountered during the execution of the build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfoFormProperties {

		/** Explains the failure issue in more detail using hard-coded text. */
		detail: FormControl<string | null | undefined>,

		/** The name of the failure. */
		type: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfoType | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfoFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfoFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfoType | null | undefined>(undefined),
		});

	}

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfoType { FAILURE_TYPE_UNSPECIFIED = 'FAILURE_TYPE_UNSPECIFIED', PUSH_FAILED = 'PUSH_FAILED', PUSH_IMAGE_NOT_FOUND = 'PUSH_IMAGE_NOT_FOUND', PUSH_NOT_AUTHORIZED = 'PUSH_NOT_AUTHORIZED', LOGGING_FAILURE = 'LOGGING_FAILURE', USER_BUILD_STEP = 'USER_BUILD_STEP', FETCH_SOURCE_FAILED = 'FETCH_SOURCE_FAILED' }


	/** Optional arguments to enable specific features of builds. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions {

		/** Option to include built-in and custom substitutions as env variables for all build steps. */
		automapSubstitutions?: boolean | null;

		/** Optional. Option to specify how default logs buckets are setup. */
		defaultLogsBucketBehavior?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsDefaultLogsBucketBehavior | null;

		/** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error. */
		diskSizeGb?: string | null;

		/** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
		dynamicSubstitutions?: boolean | null;

		/** A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
		env?: Array<string>;

		/** Option to define build log streaming behavior to Cloud Storage. */
		logStreamingOption?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsLogStreamingOption | null;

		/** Option to specify the logging mode, which determines if and where build logs are stored. */
		logging?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsLogging | null;

		/** Compute Engine machine type on which to run the build. */
		machineType?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsMachineType | null;

		/** Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
		pool?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption;

		/** Requested verifiability options. */
		requestedVerifyOption?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsRequestedVerifyOption | null;

		/** A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build. */
		secretEnv?: Array<string>;

		/** Requested hash for SourceProvenance. */
		sourceProvenanceHash?: Array<string>;

		/** Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file. */
		substitutionOption?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsSubstitutionOption | null;

		/** Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration. */
		volumes?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1Volume>;

		/** This field deprecated; please use `pool.name` instead. */
		workerPool?: string | null;
	}

	/** Optional arguments to enable specific features of builds. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsFormProperties {

		/** Option to include built-in and custom substitutions as env variables for all build steps. */
		automapSubstitutions: FormControl<boolean | null | undefined>,

		/** Optional. Option to specify how default logs buckets are setup. */
		defaultLogsBucketBehavior: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsDefaultLogsBucketBehavior | null | undefined>,

		/** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
		dynamicSubstitutions: FormControl<boolean | null | undefined>,

		/** Option to define build log streaming behavior to Cloud Storage. */
		logStreamingOption: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsLogStreamingOption | null | undefined>,

		/** Option to specify the logging mode, which determines if and where build logs are stored. */
		logging: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsLogging | null | undefined>,

		/** Compute Engine machine type on which to run the build. */
		machineType: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsMachineType | null | undefined>,

		/** Requested verifiability options. */
		requestedVerifyOption: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsRequestedVerifyOption | null | undefined>,

		/** Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file. */
		substitutionOption: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsSubstitutionOption | null | undefined>,

		/** This field deprecated; please use `pool.name` instead. */
		workerPool: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsFormProperties>({
			automapSubstitutions: new FormControl<boolean | null | undefined>(undefined),
			defaultLogsBucketBehavior: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsDefaultLogsBucketBehavior | null | undefined>(undefined),
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			dynamicSubstitutions: new FormControl<boolean | null | undefined>(undefined),
			logStreamingOption: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsLogStreamingOption | null | undefined>(undefined),
			logging: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsLogging | null | undefined>(undefined),
			machineType: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsMachineType | null | undefined>(undefined),
			requestedVerifyOption: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsRequestedVerifyOption | null | undefined>(undefined),
			substitutionOption: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsSubstitutionOption | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsDefaultLogsBucketBehavior { DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED = 'DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED', REGIONAL_USER_OWNED_BUCKET = 'REGIONAL_USER_OWNED_BUCKET' }

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsLogStreamingOption { STREAM_DEFAULT = 'STREAM_DEFAULT', STREAM_ON = 'STREAM_ON', STREAM_OFF = 'STREAM_OFF' }

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsLogging { LOGGING_UNSPECIFIED = 'LOGGING_UNSPECIFIED', LEGACY = 'LEGACY', GCS_ONLY = 'GCS_ONLY', STACKDRIVER_ONLY = 'STACKDRIVER_ONLY', CLOUD_LOGGING_ONLY = 'CLOUD_LOGGING_ONLY', NONE = 'NONE' }

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsMachineType { UNSPECIFIED = 'UNSPECIFIED', N1_HIGHCPU_8 = 'N1_HIGHCPU_8', N1_HIGHCPU_32 = 'N1_HIGHCPU_32', E2_HIGHCPU_8 = 'E2_HIGHCPU_8', E2_HIGHCPU_32 = 'E2_HIGHCPU_32', E2_MEDIUM = 'E2_MEDIUM' }


	/** Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption {

		/** The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} */
		name?: string | null;
	}

	/** Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOptionFormProperties {

		/** The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOptionFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsRequestedVerifyOption { NOT_VERIFIED = 'NOT_VERIFIED', VERIFIED = 'VERIFIED' }

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsSubstitutionOption { MUST_MATCH = 'MUST_MATCH', ALLOW_LOOSE = 'ALLOW_LOOSE' }


	/** Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Volume {

		/** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
		name?: string | null;

		/** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
		path?: string | null;
	}

	/** Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1VolumeFormProperties {

		/** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
		name: FormControl<string | null | undefined>,

		/** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1VolumeFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1VolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Artifacts created by the build pipeline. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Results {

		/** Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
		artifactManifest?: string | null;

		/** Start and end times for a build execution phase. */
		artifactTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;

		/** List of build step digests, in the order corresponding to build step indices. */
		buildStepImages?: Array<string>;

		/** List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 50KB of data is stored. */
		buildStepOutputs?: Array<string>;

		/** Container images that were built as a part of the build. */
		images?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage>;

		/** Maven artifacts uploaded to Artifact Registry at the end of the build. */
		mavenArtifacts?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact>;

		/** Npm packages uploaded to Artifact Registry at the end of the build. */
		npmPackages?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage>;

		/** Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
		numArtifacts?: string | null;

		/** Python artifacts uploaded to Artifact Registry at the end of the build. */
		pythonPackages?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage>;
	}

	/** Artifacts created by the build pipeline. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ResultsFormProperties {

		/** Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
		artifactManifest: FormControl<string | null | undefined>,

		/** Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
		numArtifacts: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1ResultsFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1ResultsFormProperties>({
			artifactManifest: new FormControl<string | null | undefined>(undefined),
			numArtifacts: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An image built by the pipeline. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage {

		/** Docker Registry 2.0 digest. */
		digest?: string | null;

		/** Name used to push the container image to Google Container Registry, as presented to `docker push`. */
		name?: string | null;

		/** Start and end times for a build execution phase. */
		pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
	}

	/** An image built by the pipeline. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImageFormProperties {

		/** Docker Registry 2.0 digest. */
		digest: FormControl<string | null | undefined>,

		/** Name used to push the container image to Google Container Registry, as presented to `docker push`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImageFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImageFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Maven artifact uploaded using the MavenArtifact directive. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact {

		/** Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build. */
		fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;

		/** Start and end times for a build execution phase. */
		pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;

		/** URI of the uploaded artifact. */
		uri?: string | null;
	}

	/** A Maven artifact uploaded using the MavenArtifact directive. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifactFormProperties {

		/** URI of the uploaded artifact. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifactFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifactFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes {

		/** Collection of file hashes. */
		fileHash?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1Hash>;
	}

	/** Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashesFormProperties {
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1FileHashesFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashesFormProperties>({
		});

	}


	/** Container message for hash values. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Hash {

		/** The type of hash that was performed. */
		type?: ContaineranalysisGoogleDevtoolsCloudbuildV1HashType | null;

		/** The hash value. */
		value?: string | null;
	}

	/** Container message for hash values. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1HashFormProperties {

		/** The type of hash that was performed. */
		type: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1HashType | null | undefined>,

		/** The hash value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1HashFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1HashFormProperties>({
			type: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1HashType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1HashType { NONE = 'NONE', SHA256 = 'SHA256', MD5 = 'MD5', SHA512 = 'SHA512' }


	/** An npm package uploaded to Artifact Registry using the NpmPackage directive. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage {

		/** Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build. */
		fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;

		/** Start and end times for a build execution phase. */
		pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;

		/** URI of the uploaded npm package. */
		uri?: string | null;
	}

	/** An npm package uploaded to Artifact Registry using the NpmPackage directive. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackageFormProperties {

		/** URI of the uploaded npm package. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackageFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackageFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Artifact uploaded using the PythonPackage directive. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage {

		/** Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build. */
		fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;

		/** Start and end times for a build execution phase. */
		pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;

		/** URI of the uploaded artifact. */
		uri?: string | null;
	}

	/** Artifact uploaded using the PythonPackage directive. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackageFormProperties {

		/** URI of the uploaded artifact. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackageFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackageFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Secret {

		/** Cloud KMS key name to use to decrypt these envs. */
		kmsKeyName?: string | null;

		/** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
		secretEnv?: {[id: string]: string };
	}

	/** Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SecretFormProperties {

		/** Cloud KMS key name to use to decrypt these envs. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
		secretEnv: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1SecretFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1SecretFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			secretEnv: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Location of the source in a supported storage service. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Source {

		/** Location of the source in a 2nd-gen Google Cloud Build repository resource. */
		connectedRepository?: ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository;

		/** Location of the source in any accessible Git repository. */
		gitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource;

		/** Location of the source in a Google Cloud Source Repository. */
		repoSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource;

		/** Location of the source in an archive file in Cloud Storage. */
		storageSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource;

		/** Location of the source manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
		storageSourceManifest?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest;
	}

	/** Location of the source in a supported storage service. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SourceFormProperties {
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1SourceFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1SourceFormProperties>({
		});

	}


	/** Location of the source in a 2nd-gen Google Cloud Build repository resource. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository {

		/** Directory, relative to the source root, in which to run the build. */
		dir?: string | null;

		/** Required. Name of the Google Cloud Build repository, formatted as `projects/locations/connections/repositories/*`. */
		repository?: string | null;

		/** The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
		revision?: string | null;
	}

	/** Location of the source in a 2nd-gen Google Cloud Build repository resource. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepositoryFormProperties {

		/** Directory, relative to the source root, in which to run the build. */
		dir: FormControl<string | null | undefined>,

		/** Required. Name of the Google Cloud Build repository, formatted as `projects/locations/connections/repositories/*`. */
		repository: FormControl<string | null | undefined>,

		/** The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
		revision: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepositoryFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepositoryFormProperties>({
			dir: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of the source in any accessible Git repository. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource {

		/** Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
		dir?: string | null;

		/** The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch. */
		revision?: string | null;

		/** Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote. */
		url?: string | null;
	}

	/** Location of the source in any accessible Git repository. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1GitSourceFormProperties {

		/** Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
		dir: FormControl<string | null | undefined>,

		/** The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch. */
		revision: FormControl<string | null | undefined>,

		/** Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1GitSourceFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1GitSourceFormProperties>({
			dir: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of the source in a Google Cloud Source Repository. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource {

		/** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		branchName?: string | null;

		/** Explicit commit SHA to build. */
		commitSha?: string | null;

		/** Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
		dir?: string | null;

		/** Only trigger a build if the revision regex does NOT match the revision regex. */
		invertRegex?: boolean | null;

		/** ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
		projectId?: string | null;

		/** Name of the Cloud Source Repository. */
		repoName?: string | null;

		/** Substitutions to use in a triggered build. Should only be used with RunBuildTrigger */
		substitutions?: {[id: string]: string };

		/** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		tagName?: string | null;
	}

	/** Location of the source in a Google Cloud Source Repository. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSourceFormProperties {

		/** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		branchName: FormControl<string | null | undefined>,

		/** Explicit commit SHA to build. */
		commitSha: FormControl<string | null | undefined>,

		/** Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
		dir: FormControl<string | null | undefined>,

		/** Only trigger a build if the revision regex does NOT match the revision regex. */
		invertRegex: FormControl<boolean | null | undefined>,

		/** ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
		projectId: FormControl<string | null | undefined>,

		/** Name of the Cloud Source Repository. */
		repoName: FormControl<string | null | undefined>,

		/** Substitutions to use in a triggered build. Should only be used with RunBuildTrigger */
		substitutions: FormControl<{[id: string]: string } | null | undefined>,

		/** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		tagName: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1RepoSourceFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSourceFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			commitSha: new FormControl<string | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			invertRegex: new FormControl<boolean | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			repoName: new FormControl<string | null | undefined>(undefined),
			substitutions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tagName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of the source in an archive file in Cloud Storage. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource {

		/** Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket?: string | null;

		/** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation?: string | null;

		/** Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build. */
		object?: string | null;

		/** Optional. Option to specify the tool to fetch the source file for the build. */
		sourceFetcher?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceSourceFetcher | null;
	}

	/** Location of the source in an archive file in Cloud Storage. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceFormProperties {

		/** Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket: FormControl<string | null | undefined>,

		/** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation: FormControl<string | null | undefined>,

		/** Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build. */
		object: FormControl<string | null | undefined>,

		/** Optional. Option to specify the tool to fetch the source file for the build. */
		sourceFetcher: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceSourceFetcher | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			sourceFetcher: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceSourceFetcher | null | undefined>(undefined),
		});

	}

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceSourceFetcher { SOURCE_FETCHER_UNSPECIFIED = 'SOURCE_FETCHER_UNSPECIFIED', GSUTIL = 'GSUTIL', GCS_FETCHER = 'GCS_FETCHER' }


	/** Location of the source manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest {

		/** Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket?: string | null;

		/** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation?: string | null;

		/** Cloud Storage object containing the source manifest. This object must be a JSON file. */
		object?: string | null;
	}

	/** Location of the source manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifestFormProperties {

		/** Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket: FormControl<string | null | undefined>,

		/** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation: FormControl<string | null | undefined>,

		/** Cloud Storage object containing the source manifest. This object must be a JSON file. */
		object: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifestFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifestFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provenance of the source. Ways to find the original source, or verify that some source was used for this build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance {

		/** Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file. */
		fileHashes?: {[id: string]: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes };

		/** Location of the source in a 2nd-gen Google Cloud Build repository resource. */
		resolvedConnectedRepository?: ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository;

		/** Location of the source in any accessible Git repository. */
		resolvedGitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource;

		/** Location of the source in a Google Cloud Source Repository. */
		resolvedRepoSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource;

		/** Location of the source in an archive file in Cloud Storage. */
		resolvedStorageSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource;

		/** Location of the source manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
		resolvedStorageSourceManifest?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest;
	}

	/** Provenance of the source. Ways to find the original source, or verify that some source was used for this build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenanceFormProperties {

		/** Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file. */
		fileHashes: FormControl<{[id: string]: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes } | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenanceFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenanceFormProperties>({
			fileHashes: new FormControl<{[id: string]: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes } | null | undefined>(undefined),
		});

	}

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStatus { STATUS_UNKNOWN = 'STATUS_UNKNOWN', PENDING = 'PENDING', QUEUED = 'QUEUED', WORKING = 'WORKING', SUCCESS = 'SUCCESS', FAILURE = 'FAILURE', INTERNAL_ERROR = 'INTERNAL_ERROR', TIMEOUT = 'TIMEOUT', CANCELLED = 'CANCELLED', EXPIRED = 'EXPIRED' }


	/** A step in the build pipeline. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep {

		/** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
		allowExitCodes?: Array<number>;

		/** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
		allowFailure?: boolean | null;

		/** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
		args?: Array<string>;

		/** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
		automapSubstitutions?: boolean | null;

		/** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
		dir?: string | null;

		/** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
		entrypoint?: string | null;

		/** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
		env?: Array<string>;

		/** Output only. Return code from running the step. */
		exitCode?: number | null;

		/** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
		id?: string | null;

		/** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
		name?: string | null;

		/** Start and end times for a build execution phase. */
		pullTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;

		/** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
		script?: string | null;

		/** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
		secretEnv?: Array<string>;

		/** Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses. */
		status?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStatus | null;

		/** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
		timeout?: string | null;

		/** Start and end times for a build execution phase. */
		timing?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;

		/** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
		volumes?: Array<ContaineranalysisGoogleDevtoolsCloudbuildV1Volume>;

		/** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
		waitFor?: Array<string>;
	}

	/** A step in the build pipeline. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepFormProperties {

		/** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
		allowFailure: FormControl<boolean | null | undefined>,

		/** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
		automapSubstitutions: FormControl<boolean | null | undefined>,

		/** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
		dir: FormControl<string | null | undefined>,

		/** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
		entrypoint: FormControl<string | null | undefined>,

		/** Output only. Return code from running the step. */
		exitCode: FormControl<number | null | undefined>,

		/** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
		id: FormControl<string | null | undefined>,

		/** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
		name: FormControl<string | null | undefined>,

		/** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
		script: FormControl<string | null | undefined>,

		/** Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses. */
		status: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStatus | null | undefined>,

		/** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepFormProperties>({
			allowFailure: new FormControl<boolean | null | undefined>(undefined),
			automapSubstitutions: new FormControl<boolean | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			entrypoint: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStatus | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A non-fatal problem encountered during the execution of the build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning {

		/** The priority for this warning. */
		priority?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarningPriority | null;

		/** Explanation of the warning generated. */
		text?: string | null;
	}

	/** A non-fatal problem encountered during the execution of the build. */
	export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarningFormProperties {

		/** The priority for this warning. */
		priority: FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarningPriority | null | undefined>,

		/** Explanation of the warning generated. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarningFormGroup() {
		return new FormGroup<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarningFormProperties>({
			priority: new FormControl<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarningPriority | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarningPriority { PRIORITY_UNSPECIFIED = 'PRIORITY_UNSPECIFIED', INFO = 'INFO', WARNING = 'WARNING', ALERT = 'ALERT' }


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


	/** The request to a call of ExportSBOM */
	export interface ExportSBOMRequest {
	}

	/** The request to a call of ExportSBOM */
	export interface ExportSBOMRequestFormProperties {
	}
	export function CreateExportSBOMRequestFormGroup() {
		return new FormGroup<ExportSBOMRequestFormProperties>({
		});

	}


	/** The response from a call to ExportSBOM */
	export interface ExportSBOMResponse {

		/** The name of the discovery occurrence in the form "projects/{project_id}/occurrences/{OCCURRENCE_ID} It can be used to track the progression of the SBOM export. */
		discoveryOccurrenceId?: string | null;
	}

	/** The response from a call to ExportSBOM */
	export interface ExportSBOMResponseFormProperties {

		/** The name of the discovery occurrence in the form "projects/{project_id}/occurrences/{OCCURRENCE_ID} It can be used to track the progression of the SBOM export. */
		discoveryOccurrenceId: FormControl<string | null | undefined>,
	}
	export function CreateExportSBOMResponseFormGroup() {
		return new FormGroup<ExportSBOMResponseFormProperties>({
			discoveryOccurrenceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Per resource and severity counts of fixable and total vulnerabilities. */
	export interface FixableTotalByDigest {

		/** The number of fixable vulnerabilities associated with this resource. */
		fixableCount?: string | null;

		/** An entity that can have metadata. For example, a Docker image. */
		resource?: Resource;

		/** The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities. */
		severity?: VulnerabilitySeverity | null;

		/** The total number of vulnerabilities associated with this resource. */
		totalCount?: string | null;
	}

	/** Per resource and severity counts of fixable and total vulnerabilities. */
	export interface FixableTotalByDigestFormProperties {

		/** The number of fixable vulnerabilities associated with this resource. */
		fixableCount: FormControl<string | null | undefined>,

		/** The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities. */
		severity: FormControl<VulnerabilitySeverity | null | undefined>,

		/** The total number of vulnerabilities associated with this resource. */
		totalCount: FormControl<string | null | undefined>,
	}
	export function CreateFixableTotalByDigestFormGroup() {
		return new FormGroup<FixableTotalByDigestFormProperties>({
			fixableCount: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<VulnerabilitySeverity | null | undefined>(undefined),
			totalCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GeneratePackagesSummaryRequest is the request body for the GeneratePackagesSummary API method. It just takes a single name argument, referring to the resource. */
	export interface GeneratePackagesSummaryRequest {
	}

	/** GeneratePackagesSummaryRequest is the request body for the GeneratePackagesSummary API method. It just takes a single name argument, referring to the resource. */
	export interface GeneratePackagesSummaryRequestFormProperties {
	}
	export function CreateGeneratePackagesSummaryRequestFormGroup() {
		return new FormGroup<GeneratePackagesSummaryRequestFormProperties>({
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


	/** Metadata for all operations used and required for all operations that created by Container Analysis Providers */
	export interface GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata {

		/** Output only. The time this operation was created. */
		createTime?: string | null;

		/** Output only. The time that this operation was marked completed or failed. */
		endTime?: string | null;
	}

	/** Metadata for all operations used and required for all operations that created by Container Analysis Providers */
	export interface GoogleDevtoolsContaineranalysisV1alpha1OperationMetadataFormProperties {

		/** Output only. The time this operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time that this operation was marked completed or failed. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsContaineranalysisV1alpha1OperationMetadataFormGroup() {
		return new FormGroup<GoogleDevtoolsContaineranalysisV1alpha1OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Per license count */
	export interface LicensesSummary {

		/** The number of fixable vulnerabilities associated with this resource. */
		count?: string | null;

		/** The license of the package. Note that the format of this value is not guaranteed. It may be nil, an empty string, a boolean value (A | B), a differently formed boolean value (A OR B), etc... */
		license?: string | null;
	}

	/** Per license count */
	export interface LicensesSummaryFormProperties {

		/** The number of fixable vulnerabilities associated with this resource. */
		count: FormControl<string | null | undefined>,

		/** The license of the package. Note that the format of this value is not guaranteed. It may be nil, an empty string, a boolean value (A | B), a differently formed boolean value (A OR B), etc... */
		license: FormControl<string | null | undefined>,
	}
	export function CreateLicensesSummaryFormGroup() {
		return new FormGroup<LicensesSummaryFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			license: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing occurrences for a note. */
	export interface ListNoteOccurrencesResponse {

		/** Token to provide to skip to a particular spot in the list. */
		nextPageToken?: string | null;

		/** The occurrences attached to the specified note. */
		occurrences?: Array<Occurrence>;
	}

	/** Response for listing occurrences for a note. */
	export interface ListNoteOccurrencesResponseFormProperties {

		/** Token to provide to skip to a particular spot in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNoteOccurrencesResponseFormGroup() {
		return new FormGroup<ListNoteOccurrencesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing notes. */
	export interface ListNotesResponse {

		/** The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results. */
		nextPageToken?: string | null;

		/** The notes requested. */
		notes?: Array<Note>;
	}

	/** Response for listing notes. */
	export interface ListNotesResponseFormProperties {

		/** The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotesResponseFormGroup() {
		return new FormGroup<ListNotesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing occurrences. */
	export interface ListOccurrencesResponse {

		/** The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results. */
		nextPageToken?: string | null;

		/** The occurrences requested. */
		occurrences?: Array<Occurrence>;
	}

	/** Response for listing occurrences. */
	export interface ListOccurrencesResponseFormProperties {

		/** The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOccurrencesResponseFormGroup() {
		return new FormGroup<ListOccurrencesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the packages found within the given resource. */
	export interface PackagesSummaryResponse {

		/** A listing by license name of each of the licenses and their counts. */
		licensesSummary?: Array<LicensesSummary>;

		/** The unique URL of the image or the container for which this summary applies. */
		resourceUrl?: string | null;
	}

	/** A summary of the packages found within the given resource. */
	export interface PackagesSummaryResponseFormProperties {

		/** The unique URL of the image or the container for which this summary applies. */
		resourceUrl: FormControl<string | null | undefined>,
	}
	export function CreatePackagesSummaryResponseFormGroup() {
		return new FormGroup<PackagesSummaryResponseFormProperties>({
			resourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

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


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
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


	/** A summary of how many vulnerability occurrences there are per resource and severity type. */
	export interface VulnerabilityOccurrencesSummary {

		/** A listing by resource of the number of fixable and total vulnerabilities. */
		counts?: Array<FixableTotalByDigest>;
	}

	/** A summary of how many vulnerability occurrences there are per resource and severity type. */
	export interface VulnerabilityOccurrencesSummaryFormProperties {
	}
	export function CreateVulnerabilityOccurrencesSummaryFormGroup() {
		return new FormGroup<VulnerabilityOccurrencesSummaryFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
		 * @return {Empty} Successful response
		 */
		Containeranalysis_projects_occurrences_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the specified occurrence.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
		 * @return {Occurrence} Successful response
		 */
		Containeranalysis_projects_occurrences_get(name: string): Observable<Occurrence> {
			return this.http.get<Occurrence>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the specified occurrence.
		 * Patch v1beta1/{name}
		 * @param {string} name Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
		 * @param {string} updateMask The fields to update.
		 * @return {Occurrence} Successful response
		 */
		Containeranalysis_projects_occurrences_patch(name: string, updateMask: string | null | undefined, requestBody: Occurrence): Observable<Occurrence> {
			return this.http.patch<Occurrence>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
		 * Get v1beta1/{name}/notes
		 * @param {string} name Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
		 * @return {Note} Successful response
		 */
		Containeranalysis_projects_occurrences_getNotes(name: string): Observable<Note> {
			return this.http.get<Note>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/notes', {});
		}

		/**
		 * Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
		 * Get v1beta1/{name}/occurrences
		 * @param {string} name Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
		 * @param {string} filter The filter expression.
		 * @param {number} pageSize Number of occurrences to return in the list.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {ListNoteOccurrencesResponse} Successful response
		 */
		Containeranalysis_projects_notes_occurrences_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNoteOccurrencesResponse> {
			return this.http.get<ListNoteOccurrencesResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/occurrences&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Generates an SBOM and other dependency information for the given resource.
		 * Post v1beta1/{name}:exportSBOM
		 * @param {string} name Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
		 * @return {ExportSBOMResponse} Successful response
		 */
		Containeranalysis_projects_resources_exportSBOM(name: string, requestBody: ExportSBOMRequest): Observable<ExportSBOMResponse> {
			return this.http.post<ExportSBOMResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':exportSBOM', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a summary of the packages within a given resource.
		 * Post v1beta1/{name}:generatePackagesSummary
		 * @param {string} name Required. The name of the resource to get a packages summary for in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
		 * @return {PackagesSummaryResponse} Successful response
		 */
		Containeranalysis_projects_resources_generatePackagesSummary(name: string, requestBody: GeneratePackagesSummaryRequest): Observable<PackagesSummaryResponse> {
			return this.http.post<PackagesSummaryResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':generatePackagesSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists notes for the specified project.
		 * Get v1beta1/{parent}/notes
		 * @param {string} parent Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
		 * @param {string} filter The filter expression.
		 * @param {number} pageSize Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {ListNotesResponse} Successful response
		 */
		Containeranalysis_projects_notes_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNotesResponse> {
			return this.http.get<ListNotesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new note.
		 * Post v1beta1/{parent}/notes
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
		 * @param {string} noteId Required. The ID to use for this note.
		 * @return {Note} Successful response
		 */
		Containeranalysis_projects_notes_create(parent: string, noteId: string | null | undefined, requestBody: Note): Observable<Note> {
			return this.http.post<Note>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notes&noteId=' + (noteId == null ? '' : encodeURIComponent(noteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates new notes in batch.
		 * Post v1beta1/{parent}/notes:batchCreate
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
		 * @return {BatchCreateNotesResponse} Successful response
		 */
		Containeranalysis_projects_notes_batchCreate(parent: string, requestBody: BatchCreateNotesRequest): Observable<BatchCreateNotesResponse> {
			return this.http.post<BatchCreateNotesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notes:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists occurrences for the specified project.
		 * Get v1beta1/{parent}/occurrences
		 * @param {string} parent Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
		 * @param {string} filter The filter expression.
		 * @param {number} pageSize Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {ListOccurrencesResponse} Successful response
		 */
		Containeranalysis_projects_occurrences_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOccurrencesResponse> {
			return this.http.get<ListOccurrencesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new occurrence.
		 * Post v1beta1/{parent}/occurrences
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
		 * @return {Occurrence} Successful response
		 */
		Containeranalysis_projects_occurrences_create(parent: string, requestBody: Occurrence): Observable<Occurrence> {
			return this.http.post<Occurrence>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates new occurrences in batch.
		 * Post v1beta1/{parent}/occurrences:batchCreate
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
		 * @return {BatchCreateOccurrencesResponse} Successful response
		 */
		Containeranalysis_projects_occurrences_batchCreate(parent: string, requestBody: BatchCreateOccurrencesRequest): Observable<BatchCreateOccurrencesResponse> {
			return this.http.post<BatchCreateOccurrencesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a summary of the number and severity of occurrences.
		 * Get v1beta1/{parent}/occurrences:vulnerabilitySummary
		 * @param {string} parent Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
		 * @param {string} filter The filter expression.
		 * @return {VulnerabilityOccurrencesSummary} Successful response
		 */
		Containeranalysis_projects_occurrences_getVulnerabilitySummary(parent: string, filter: string | null | undefined): Observable<VulnerabilityOccurrencesSummary> {
			return this.http.get<VulnerabilityOccurrencesSummary>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences:vulnerabilitySummary&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
		 * Post v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Containeranalysis_projects_occurrences_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Containeranalysis_projects_occurrences_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Containeranalysis_projects_occurrences_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

