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

	export enum AliasContextKind { KIND_UNSPECIFIED = 0, FIXED = 1, MOVABLE = 2, OTHER = 3 }


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

	export enum JustificationJustificationType { JUSTIFICATION_TYPE_UNSPECIFIED = 0, COMPONENT_NOT_PRESENT = 1, VULNERABLE_CODE_NOT_PRESENT = 2, VULNERABLE_CODE_NOT_IN_EXECUTE_PATH = 3, VULNERABLE_CODE_CANNOT_BE_CONTROLLED_BY_ADVERSARY = 4, INLINE_MITIGATIONS_ALREADY_EXIST = 5 }


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

	export enum RemediationRemediationType { REMEDIATION_TYPE_UNSPECIFIED = 0, MITIGATION = 1, NO_FIX_PLANNED = 2, NONE_AVAILABLE = 3, VENDOR_FIX = 4, WORKAROUND = 5 }

	export enum AssessmentState { STATE_UNSPECIFIED = 0, AFFECTED = 1, NOT_AFFECTED = 2, FIXED = 3, UNDER_INVESTIGATION = 4 }


	/** Note kind that represents a logical attestation "role" or "authority". For example, an organization might have one `Authority` for "QA" and one for "build". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project. */
	export interface AttestationNote {

		/** This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify. */
		hint?: Hint;
	}

	/** Note kind that represents a logical attestation "role" or "authority". For example, an organization might have one `Authority` for "QA" and one for "build". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project. */
	export interface AttestationNoteFormProperties {
	}
	export function CreateAttestationNoteFormGroup() {
		return new FormGroup<AttestationNoteFormProperties>({
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


	/** Request to create notes in batch. */
	export interface BatchCreateNotesRequest {

		/** Required. The notes to create. Max allowed length is 1000. */
		notes?: {[id: string]: Note };
	}

	/** Request to create notes in batch. */
	export interface BatchCreateNotesRequestFormProperties {

		/** Required. The notes to create. Max allowed length is 1000. */
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
		attestation?: AttestationNote;

		/** Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence. */
		build?: BuildNote;
		compliance?: ComplianceNote;

		/** Output only. The time this note was created. This field can be used as a filter in list requests. */
		createTime?: string | null;

		/** An artifact that can be deployed in some runtime. */
		deployment?: DeploymentNote;

		/** A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis. */
		discovery?: DiscoveryNote;
		dsseAttestation?: DSSEAttestationNote;

		/** Time of expiration for this note. Empty if note does not expire. */
		expirationTime?: string | null;

		/** Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g., a tag of the resource_url. */
		image?: ImageNote;

		/** Output only. The type of analysis. This field can be used as a filter in list requests. */
		kind?: DiscoveryNoteAnalysisKind | null;

		/** A detailed description of this note. */
		longDescription?: string | null;

		/** Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
		name?: string | null;

		/** PackageNote represents a particular package version. */
		package?: PackageNote;

		/** Other notes related to this note. */
		relatedNoteNames?: Array<string>;

		/** URLs associated with this note. */
		relatedUrl?: Array<RelatedUrl>;

		/** The note representing an SBOM reference. */
		sbomReference?: SBOMReferenceNote;

		/** A one sentence description of this note. */
		shortDescription?: string | null;

		/** Output only. The time this note was last updated. This field can be used as a filter in list requests. */
		updateTime?: string | null;

		/** An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be an Upgrade Note. For Windows, windows_update field represents the information related to the update. */
		upgrade?: UpgradeNote;

		/** A security vulnerability that can be found in resources. */
		vulnerability?: VulnerabilityNote;

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
		kind: FormControl<DiscoveryNoteAnalysisKind | null | undefined>,

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
			kind: new FormControl<DiscoveryNoteAnalysisKind | null | undefined>(undefined),
			longDescription: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence. */
	export interface BuildNote {

		/** Required. Immutable. Version of the builder which produced this build. */
		builderVersion?: string | null;
	}

	/** Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence. */
	export interface BuildNoteFormProperties {

		/** Required. Immutable. Version of the builder which produced this build. */
		builderVersion: FormControl<string | null | undefined>,
	}
	export function CreateBuildNoteFormGroup() {
		return new FormGroup<BuildNoteFormProperties>({
			builderVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComplianceNote {

		/** A compliance check that is a CIS benchmark. */
		cisBenchmark?: CisBenchmark;

		/** A description about this compliance check. */
		description?: string | null;

		/** A rationale for the existence of this compliance check. */
		rationale?: string | null;

		/** A description of remediation steps if the compliance check fails. */
		remediation?: string | null;

		/** Serialized scan instructions with a predefined format. */
		scanInstructions?: string | null;

		/** The title that identifies this compliance check. */
		title?: string | null;

		/** The OS and config versions the benchmark applies to. */
		version?: Array<ComplianceVersion>;
	}
	export interface ComplianceNoteFormProperties {

		/** A description about this compliance check. */
		description: FormControl<string | null | undefined>,

		/** A rationale for the existence of this compliance check. */
		rationale: FormControl<string | null | undefined>,

		/** A description of remediation steps if the compliance check fails. */
		remediation: FormControl<string | null | undefined>,

		/** Serialized scan instructions with a predefined format. */
		scanInstructions: FormControl<string | null | undefined>,

		/** The title that identifies this compliance check. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateComplianceNoteFormGroup() {
		return new FormGroup<ComplianceNoteFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			rationale: new FormControl<string | null | undefined>(undefined),
			remediation: new FormControl<string | null | undefined>(undefined),
			scanInstructions: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A compliance check that is a CIS benchmark. */
	export interface CisBenchmark {
		profileLevel?: number | null;
		severity?: CisBenchmarkSeverity | null;
	}

	/** A compliance check that is a CIS benchmark. */
	export interface CisBenchmarkFormProperties {
		profileLevel: FormControl<number | null | undefined>,
		severity: FormControl<CisBenchmarkSeverity | null | undefined>,
	}
	export function CreateCisBenchmarkFormGroup() {
		return new FormGroup<CisBenchmarkFormProperties>({
			profileLevel: new FormControl<number | null | undefined>(undefined),
			severity: new FormControl<CisBenchmarkSeverity | null | undefined>(undefined),
		});

	}

	export enum CisBenchmarkSeverity { SEVERITY_UNSPECIFIED = 0, MINIMAL = 1, LOW = 2, MEDIUM = 3, HIGH = 4, CRITICAL = 5 }


	/** Describes the CIS benchmark version that is applicable to a given OS and os version. */
	export interface ComplianceVersion {

		/** The name of the document that defines this benchmark, e.g. "CIS Container-Optimized OS". */
		benchmarkDocument?: string | null;

		/** The CPE URI (https://cpe.mitre.org/specification/) this benchmark is applicable to. */
		cpeUri?: string | null;

		/** The version of the benchmark. This is set to the version of the OS-specific CIS document the benchmark is defined in. */
		version?: string | null;
	}

	/** Describes the CIS benchmark version that is applicable to a given OS and os version. */
	export interface ComplianceVersionFormProperties {

		/** The name of the document that defines this benchmark, e.g. "CIS Container-Optimized OS". */
		benchmarkDocument: FormControl<string | null | undefined>,

		/** The CPE URI (https://cpe.mitre.org/specification/) this benchmark is applicable to. */
		cpeUri: FormControl<string | null | undefined>,

		/** The version of the benchmark. This is set to the version of the OS-specific CIS document the benchmark is defined in. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateComplianceVersionFormGroup() {
		return new FormGroup<ComplianceVersionFormProperties>({
			benchmarkDocument: new FormControl<string | null | undefined>(undefined),
			cpeUri: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An artifact that can be deployed in some runtime. */
	export interface DeploymentNote {

		/** Required. Resource URI for the artifact being deployed. */
		resourceUri?: Array<string>;
	}

	/** An artifact that can be deployed in some runtime. */
	export interface DeploymentNoteFormProperties {
	}
	export function CreateDeploymentNoteFormGroup() {
		return new FormGroup<DeploymentNoteFormProperties>({
		});

	}


	/** A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis. */
	export interface DiscoveryNote {

		/** Required. Immutable. The kind of analysis that is handled by this discovery. */
		analysisKind?: DiscoveryNoteAnalysisKind | null;
	}

	/** A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis. */
	export interface DiscoveryNoteFormProperties {

		/** Required. Immutable. The kind of analysis that is handled by this discovery. */
		analysisKind: FormControl<DiscoveryNoteAnalysisKind | null | undefined>,
	}
	export function CreateDiscoveryNoteFormGroup() {
		return new FormGroup<DiscoveryNoteFormProperties>({
			analysisKind: new FormControl<DiscoveryNoteAnalysisKind | null | undefined>(undefined),
		});

	}

	export enum DiscoveryNoteAnalysisKind { NOTE_KIND_UNSPECIFIED = 0, VULNERABILITY = 1, BUILD = 2, IMAGE = 3, PACKAGE = 4, DEPLOYMENT = 5, DISCOVERY = 6, ATTESTATION = 7, UPGRADE = 8, COMPLIANCE = 9, DSSE_ATTESTATION = 10, VULNERABILITY_ASSESSMENT = 11, SBOM_REFERENCE = 12 }

	export interface DSSEAttestationNote {

		/** This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify. */
		hint?: DSSEHint;
	}
	export interface DSSEAttestationNoteFormProperties {
	}
	export function CreateDSSEAttestationNoteFormGroup() {
		return new FormGroup<DSSEAttestationNoteFormProperties>({
		});

	}


	/** This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify. */
	export interface DSSEHint {

		/** Required. The human readable name of this attestation authority, for example "cloudbuild-prod". */
		humanReadableName?: string | null;
	}

	/** This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify. */
	export interface DSSEHintFormProperties {

		/** Required. The human readable name of this attestation authority, for example "cloudbuild-prod". */
		humanReadableName: FormControl<string | null | undefined>,
	}
	export function CreateDSSEHintFormGroup() {
		return new FormGroup<DSSEHintFormProperties>({
			humanReadableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g., a tag of the resource_url. */
	export interface ImageNote {

		/** A set of properties that uniquely identify a given Docker image. */
		fingerprint?: Fingerprint;

		/** Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images. */
		resourceUrl?: string | null;
	}

	/** Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g., a tag of the resource_url. */
	export interface ImageNoteFormProperties {

		/** Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images. */
		resourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateImageNoteFormGroup() {
		return new FormGroup<ImageNoteFormProperties>({
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


	/** PackageNote represents a particular package version. */
	export interface PackageNote {

		/** The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
		architecture?: PackageNoteArchitecture | null;

		/** The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
		cpeUri?: string | null;

		/** The description of this package. */
		description?: string | null;

		/** Hash value, typically a file digest, that allows unique identification a specific package. */
		digest?: Array<Digest>;

		/** Deprecated. The various channels by which a package is distributed. */
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

	/** PackageNote represents a particular package version. */
	export interface PackageNoteFormProperties {

		/** The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
		architecture: FormControl<PackageNoteArchitecture | null | undefined>,

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
	export function CreatePackageNoteFormGroup() {
		return new FormGroup<PackageNoteFormProperties>({
			architecture: new FormControl<PackageNoteArchitecture | null | undefined>(undefined),
			cpeUri: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			maintainer: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageNoteArchitecture { ARCHITECTURE_UNSPECIFIED = 0, X86 = 1, X64 = 2 }


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
		architecture?: PackageNoteArchitecture | null;

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
		architecture: FormControl<PackageNoteArchitecture | null | undefined>,

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
			architecture: new FormControl<PackageNoteArchitecture | null | undefined>(undefined),
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

		/** Human readable version string. This string is of the form :- and is only set when kind is NORMAL. */
		fullName?: string | null;

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

		/** Human readable version string. This string is of the form :- and is only set when kind is NORMAL. */
		fullName: FormControl<string | null | undefined>,

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
			fullName: new FormControl<string | null | undefined>(undefined),
			inclusive: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<VersionKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VersionKind { VERSION_KIND_UNSPECIFIED = 0, NORMAL = 1, MINIMUM = 2, MAXIMUM = 3 }


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


	/** An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be an Upgrade Note. For Windows, windows_update field represents the information related to the update. */
	export interface UpgradeNote {

		/** Metadata about the upgrade for each specific operating system. */
		distributions?: Array<UpgradeDistribution>;

		/** Required for non-Windows OS. The package this Upgrade is for. */
		package?: string | null;

		/** Version contains structured information about the version of a package. */
		version?: Version;

		/** Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate. */
		windowsUpdate?: WindowsUpdate;
	}

	/** An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be an Upgrade Note. For Windows, windows_update field represents the information related to the update. */
	export interface UpgradeNoteFormProperties {

		/** Required for non-Windows OS. The package this Upgrade is for. */
		package: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeNoteFormGroup() {
		return new FormGroup<UpgradeNoteFormProperties>({
			package: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities. */
	export interface UpgradeDistribution {

		/** The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. For Windows the classification is one of the category_ids listed at https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v=vs.85) */
		classification?: string | null;

		/** Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/. */
		cpeUri?: string | null;

		/** The cve tied to this Upgrade. */
		cve?: Array<string>;

		/** The severity as specified by the upstream operating system. */
		severity?: string | null;
	}

	/** The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities. */
	export interface UpgradeDistributionFormProperties {

		/** The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. For Windows the classification is one of the category_ids listed at https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v=vs.85) */
		classification: FormControl<string | null | undefined>,

		/** Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/. */
		cpeUri: FormControl<string | null | undefined>,

		/** The severity as specified by the upstream operating system. */
		severity: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeDistributionFormGroup() {
		return new FormGroup<UpgradeDistributionFormProperties>({
			classification: new FormControl<string | null | undefined>(undefined),
			cpeUri: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate. */
	export interface WindowsUpdate {

		/** The list of categories to which the update belongs. */
		categories?: Array<Category>;

		/** The localized description of the update. */
		description?: string | null;

		/** The unique identifier of the update. */
		identity?: Identity;

		/** The Microsoft Knowledge Base article IDs that are associated with the update. */
		kbArticleIds?: Array<string>;

		/** The last published timestamp of the update. */
		lastPublishedTimestamp?: string | null;

		/** The hyperlink to the support information for the update. */
		supportUrl?: string | null;

		/** The localized title of the update. */
		title?: string | null;
	}

	/** Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate. */
	export interface WindowsUpdateFormProperties {

		/** The localized description of the update. */
		description: FormControl<string | null | undefined>,

		/** The last published timestamp of the update. */
		lastPublishedTimestamp: FormControl<string | null | undefined>,

		/** The hyperlink to the support information for the update. */
		supportUrl: FormControl<string | null | undefined>,

		/** The localized title of the update. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateWindowsUpdateFormGroup() {
		return new FormGroup<WindowsUpdateFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			lastPublishedTimestamp: new FormControl<string | null | undefined>(undefined),
			supportUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The category to which the update belongs. */
	export interface Category {

		/** The identifier of the category. */
		categoryId?: string | null;

		/** The localized name of the category. */
		name?: string | null;
	}

	/** The category to which the update belongs. */
	export interface CategoryFormProperties {

		/** The identifier of the category. */
		categoryId: FormControl<string | null | undefined>,

		/** The localized name of the category. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The unique identifier of the update. */
	export interface Identity {

		/** The revision number of the update. */
		revision?: number | null;

		/** The revision independent identifier of the update. */
		updateId?: string | null;
	}

	/** The unique identifier of the update. */
	export interface IdentityFormProperties {

		/** The revision number of the update. */
		revision: FormControl<number | null | undefined>,

		/** The revision independent identifier of the update. */
		updateId: FormControl<string | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			revision: new FormControl<number | null | undefined>(undefined),
			updateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A security vulnerability that can be found in resources. */
	export interface VulnerabilityNote {

		/** The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity. */
		cvssScore?: number | null;

		/** Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version. */
		cvssV2?: CVSS;

		/** Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document */
		cvssV3?: CVSSv3;

		/** CVSS version used to populate cvss_score and severity. */
		cvssVersion?: VulnerabilityNoteCvssVersion | null;

		/** Details of all known distros and packages affected by this vulnerability. */
		details?: Array<Detail>;

		/** The note provider assigned severity of this vulnerability. */
		severity?: CisBenchmarkSeverity | null;

		/** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
		sourceUpdateTime?: string | null;

		/** Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version. */
		windowsDetails?: Array<WindowsDetail>;
	}

	/** A security vulnerability that can be found in resources. */
	export interface VulnerabilityNoteFormProperties {

		/** The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity. */
		cvssScore: FormControl<number | null | undefined>,

		/** CVSS version used to populate cvss_score and severity. */
		cvssVersion: FormControl<VulnerabilityNoteCvssVersion | null | undefined>,

		/** The note provider assigned severity of this vulnerability. */
		severity: FormControl<CisBenchmarkSeverity | null | undefined>,

		/** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
		sourceUpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityNoteFormGroup() {
		return new FormGroup<VulnerabilityNoteFormProperties>({
			cvssScore: new FormControl<number | null | undefined>(undefined),
			cvssVersion: new FormControl<VulnerabilityNoteCvssVersion | null | undefined>(undefined),
			severity: new FormControl<CisBenchmarkSeverity | null | undefined>(undefined),
			sourceUpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version. */
	export interface CVSS {
		attackComplexity?: CVSSAttackComplexity | null;

		/** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. */
		attackVector?: CVSSAttackVector | null;
		authentication?: CVSSAuthentication | null;
		availabilityImpact?: CVSSAvailabilityImpact | null;

		/** The base score is a function of the base metric scores. */
		baseScore?: number | null;
		confidentialityImpact?: CVSSAvailabilityImpact | null;
		exploitabilityScore?: number | null;
		impactScore?: number | null;
		integrityImpact?: CVSSAvailabilityImpact | null;
		privilegesRequired?: CVSSPrivilegesRequired | null;
		scope?: CVSSScope | null;
		userInteraction?: CVSSUserInteraction | null;
	}

	/** Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version. */
	export interface CVSSFormProperties {
		attackComplexity: FormControl<CVSSAttackComplexity | null | undefined>,

		/** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. */
		attackVector: FormControl<CVSSAttackVector | null | undefined>,
		authentication: FormControl<CVSSAuthentication | null | undefined>,
		availabilityImpact: FormControl<CVSSAvailabilityImpact | null | undefined>,

		/** The base score is a function of the base metric scores. */
		baseScore: FormControl<number | null | undefined>,
		confidentialityImpact: FormControl<CVSSAvailabilityImpact | null | undefined>,
		exploitabilityScore: FormControl<number | null | undefined>,
		impactScore: FormControl<number | null | undefined>,
		integrityImpact: FormControl<CVSSAvailabilityImpact | null | undefined>,
		privilegesRequired: FormControl<CVSSPrivilegesRequired | null | undefined>,
		scope: FormControl<CVSSScope | null | undefined>,
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

	export enum CVSSAttackComplexity { ATTACK_COMPLEXITY_UNSPECIFIED = 0, ATTACK_COMPLEXITY_LOW = 1, ATTACK_COMPLEXITY_HIGH = 2, ATTACK_COMPLEXITY_MEDIUM = 3 }

	export enum CVSSAttackVector { ATTACK_VECTOR_UNSPECIFIED = 0, ATTACK_VECTOR_NETWORK = 1, ATTACK_VECTOR_ADJACENT = 2, ATTACK_VECTOR_LOCAL = 3, ATTACK_VECTOR_PHYSICAL = 4 }

	export enum CVSSAuthentication { AUTHENTICATION_UNSPECIFIED = 0, AUTHENTICATION_MULTIPLE = 1, AUTHENTICATION_SINGLE = 2, AUTHENTICATION_NONE = 3 }

	export enum CVSSAvailabilityImpact { IMPACT_UNSPECIFIED = 0, IMPACT_HIGH = 1, IMPACT_LOW = 2, IMPACT_NONE = 3, IMPACT_PARTIAL = 4, IMPACT_COMPLETE = 5 }

	export enum CVSSPrivilegesRequired { PRIVILEGES_REQUIRED_UNSPECIFIED = 0, PRIVILEGES_REQUIRED_NONE = 1, PRIVILEGES_REQUIRED_LOW = 2, PRIVILEGES_REQUIRED_HIGH = 3 }

	export enum CVSSScope { SCOPE_UNSPECIFIED = 0, SCOPE_UNCHANGED = 1, SCOPE_CHANGED = 2 }

	export enum CVSSUserInteraction { USER_INTERACTION_UNSPECIFIED = 0, USER_INTERACTION_NONE = 1, USER_INTERACTION_REQUIRED = 2 }


	/** Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document */
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

	/** Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document */
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

	export enum CVSSv3AttackComplexity { ATTACK_COMPLEXITY_UNSPECIFIED = 0, ATTACK_COMPLEXITY_LOW = 1, ATTACK_COMPLEXITY_HIGH = 2 }

	export enum CVSSv3AvailabilityImpact { IMPACT_UNSPECIFIED = 0, IMPACT_HIGH = 1, IMPACT_LOW = 2, IMPACT_NONE = 3 }

	export enum VulnerabilityNoteCvssVersion { CVSS_VERSION_UNSPECIFIED = 0, CVSS_VERSION_2 = 1, CVSS_VERSION_3 = 2 }


	/** A detail for a distro and package affected by this vulnerability and its associated fix (if one is available). */
	export interface Detail {

		/** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects. */
		affectedCpeUri?: string | null;

		/** Required. The package this vulnerability affects. */
		affectedPackage?: string | null;

		/** Version contains structured information about the version of a package. */
		affectedVersionEnd?: Version;

		/** Version contains structured information about the version of a package. */
		affectedVersionStart?: Version;

		/** A vendor-specific description of this vulnerability. */
		description?: string | null;

		/** The distro recommended [CPE URI](https://cpe.mitre.org/specification/) to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_cpe_uri. */
		fixedCpeUri?: string | null;

		/** The distro recommended package to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_package. */
		fixedPackage?: string | null;

		/** Version contains structured information about the version of a package. */
		fixedVersion?: Version;

		/** Whether this detail is obsolete. Occurrences are expected not to point to obsolete details. */
		isObsolete?: boolean | null;

		/** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		packageType?: string | null;

		/** The distro assigned severity of this vulnerability. */
		severityName?: string | null;

		/** The source from which the information in this Detail was obtained. */
		source?: string | null;

		/** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
		sourceUpdateTime?: string | null;

		/** The name of the vendor of the product. */
		vendor?: string | null;
	}

	/** A detail for a distro and package affected by this vulnerability and its associated fix (if one is available). */
	export interface DetailFormProperties {

		/** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects. */
		affectedCpeUri: FormControl<string | null | undefined>,

		/** Required. The package this vulnerability affects. */
		affectedPackage: FormControl<string | null | undefined>,

		/** A vendor-specific description of this vulnerability. */
		description: FormControl<string | null | undefined>,

		/** The distro recommended [CPE URI](https://cpe.mitre.org/specification/) to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_cpe_uri. */
		fixedCpeUri: FormControl<string | null | undefined>,

		/** The distro recommended package to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_package. */
		fixedPackage: FormControl<string | null | undefined>,

		/** Whether this detail is obsolete. Occurrences are expected not to point to obsolete details. */
		isObsolete: FormControl<boolean | null | undefined>,

		/** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		packageType: FormControl<string | null | undefined>,

		/** The distro assigned severity of this vulnerability. */
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
			affectedCpeUri: new FormControl<string | null | undefined>(undefined),
			affectedPackage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fixedCpeUri: new FormControl<string | null | undefined>(undefined),
			fixedPackage: new FormControl<string | null | undefined>(undefined),
			isObsolete: new FormControl<boolean | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
			severityName: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			sourceUpdateTime: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WindowsDetail {

		/** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects. */
		cpeUri?: string | null;

		/** The description of this vulnerability. */
		description?: string | null;

		/** Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed KBs presence is considered a fix. */
		fixingKbs?: Array<KnowledgeBase>;

		/** Required. The name of this vulnerability. */
		name?: string | null;
	}
	export interface WindowsDetailFormProperties {

		/** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects. */
		cpeUri: FormControl<string | null | undefined>,

		/** The description of this vulnerability. */
		description: FormControl<string | null | undefined>,

		/** Required. The name of this vulnerability. */
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

		/** The KB name (generally of the form KB[0-9]+ (e.g., KB123456)). */
		name?: string | null;

		/** A link to the KB in the [Windows update catalog] (https://www.catalog.update.microsoft.com/). */
		url?: string | null;
	}
	export interface KnowledgeBaseFormProperties {

		/** The KB name (generally of the form KB[0-9]+ (e.g., KB123456)). */
		name: FormControl<string | null | undefined>,

		/** A link to the KB in the [Windows update catalog] (https://www.catalog.update.microsoft.com/). */
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

		/** Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign. */
		attestation?: AttestationOccurrence;

		/** Details of a build occurrence. */
		build?: BuildOccurrence;

		/** An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason. */
		compliance?: ComplianceOccurrence;

		/** Output only. The time this occurrence was created. */
		createTime?: string | null;

		/** The period during which some deployable was active in a runtime. */
		deployment?: DeploymentOccurrence;

		/** Provides information about the analysis status of a discovered resource. */
		discovery?: DiscoveryOccurrence;

		/** Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence. */
		dsseAttestation?: DSSEAttestationOccurrence;

		/** MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type. */
		envelope?: Envelope;

		/** Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM . */
		image?: ImageOccurrence;

		/** Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. */
		kind?: DiscoveryNoteAnalysisKind | null;

		/** Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
		name?: string | null;

		/** Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests. */
		noteName?: string | null;

		/** Details on how a particular software package was installed on a system. */
		package?: PackageOccurrence;

		/** A description of actions that can be taken to remedy the note. */
		remediation?: string | null;

		/** Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image. */
		resourceUri?: string | null;

		/** The occurrence representing an SBOM reference as applied to a specific resource. The occurrence follows the DSSE specification. See https://github.com/secure-systems-lab/dsse/blob/master/envelope.md for more details. */
		sbomReference?: SBOMReferenceOccurrence;

		/** Output only. The time this occurrence was last updated. */
		updateTime?: string | null;

		/** An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update. */
		upgrade?: UpgradeOccurrence;

		/** An occurrence of a severity vulnerability on a resource. */
		vulnerability?: VulnerabilityOccurrence;
	}

	/** An instance of an analysis type that has been found on a resource. */
	export interface OccurrenceFormProperties {

		/** Output only. The time this occurrence was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. */
		kind: FormControl<DiscoveryNoteAnalysisKind | null | undefined>,

		/** Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests. */
		noteName: FormControl<string | null | undefined>,

		/** A description of actions that can be taken to remedy the note. */
		remediation: FormControl<string | null | undefined>,

		/** Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image. */
		resourceUri: FormControl<string | null | undefined>,

		/** Output only. The time this occurrence was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateOccurrenceFormGroup() {
		return new FormGroup<OccurrenceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<DiscoveryNoteAnalysisKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			noteName: new FormControl<string | null | undefined>(undefined),
			remediation: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a build occurrence. */
	export interface BuildOccurrence {
		inTotoSlsaProvenanceV1?: InTotoSlsaProvenanceV1;
		intotoProvenance?: InTotoProvenance;

		/** Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json". */
		intotoStatement?: InTotoStatement;

		/** Provenance of a build. Contains all information needed to verify the full details about the build from source to completion. */
		provenance?: BuildProvenance;

		/** Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes. */
		provenanceBytes?: string | null;
	}

	/** Details of a build occurrence. */
	export interface BuildOccurrenceFormProperties {

		/** Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes. */
		provenanceBytes: FormControl<string | null | undefined>,
	}
	export function CreateBuildOccurrenceFormGroup() {
		return new FormGroup<BuildOccurrenceFormProperties>({
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

	export interface Subject {

		/** `"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet */
		digest?: {[id: string]: string };
		name?: string | null;
	}
	export interface SubjectFormProperties {

		/** `"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet */
		digest: FormControl<{[id: string]: string } | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSubjectFormGroup() {
		return new FormGroup<SubjectFormProperties>({
			digest: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InTotoProvenance {
		builderConfig?: BuilderConfig;

		/** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty. */
		materials?: Array<string>;

		/** Other properties of the build. */
		metadata?: Metadata;

		/** Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe. */
		recipe?: Recipe;
	}
	export interface InTotoProvenanceFormProperties {
	}
	export function CreateInTotoProvenanceFormGroup() {
		return new FormGroup<InTotoProvenanceFormProperties>({
		});

	}

	export interface BuilderConfig {
		id?: string | null;
	}
	export interface BuilderConfigFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateBuilderConfigFormGroup() {
		return new FormGroup<BuilderConfigFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Other properties of the build. */
	export interface Metadata {

		/** The timestamp of when the build completed. */
		buildFinishedOn?: string | null;

		/** Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. */
		buildInvocationId?: string | null;

		/** The timestamp of when the build started. */
		buildStartedOn?: string | null;

		/** Indicates that the builder claims certain fields in this message to be complete. */
		completeness?: Completeness;

		/** If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. */
		reproducible?: boolean | null;
	}

	/** Other properties of the build. */
	export interface MetadataFormProperties {

		/** The timestamp of when the build completed. */
		buildFinishedOn: FormControl<string | null | undefined>,

		/** Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. */
		buildInvocationId: FormControl<string | null | undefined>,

		/** The timestamp of when the build started. */
		buildStartedOn: FormControl<string | null | undefined>,

		/** If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. */
		reproducible: FormControl<boolean | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			buildFinishedOn: new FormControl<string | null | undefined>(undefined),
			buildInvocationId: new FormControl<string | null | undefined>(undefined),
			buildStartedOn: new FormControl<string | null | undefined>(undefined),
			reproducible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Indicates that the builder claims certain fields in this message to be complete. */
	export interface Completeness {

		/** If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. */
		arguments?: boolean | null;

		/** If true, the builder claims that recipe.environment is claimed to be complete. */
		environment?: boolean | null;

		/** If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic". */
		materials?: boolean | null;
	}

	/** Indicates that the builder claims certain fields in this message to be complete. */
	export interface CompletenessFormProperties {

		/** If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. */
		arguments: FormControl<boolean | null | undefined>,

		/** If true, the builder claims that recipe.environment is claimed to be complete. */
		environment: FormControl<boolean | null | undefined>,

		/** If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic". */
		materials: FormControl<boolean | null | undefined>,
	}
	export function CreateCompletenessFormGroup() {
		return new FormGroup<CompletenessFormProperties>({
			arguments: new FormControl<boolean | null | undefined>(undefined),
			environment: new FormControl<boolean | null | undefined>(undefined),
			materials: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe. */
	export interface Recipe {

		/** Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Since the arguments field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any". */
		arguments?: Array<string>;

		/** Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64. */
		definedInMaterial?: string | null;

		/** String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use. */
		entryPoint?: string | null;

		/** Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Since the environment field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any". */
		environment?: Array<string>;

		/** URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials. */
		type?: string | null;
	}

	/** Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe. */
	export interface RecipeFormProperties {

		/** Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64. */
		definedInMaterial: FormControl<string | null | undefined>,

		/** String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use. */
		entryPoint: FormControl<string | null | undefined>,

		/** URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRecipeFormGroup() {
		return new FormGroup<RecipeFormProperties>({
			definedInMaterial: new FormControl<string | null | undefined>(undefined),
			entryPoint: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json". */
	export interface InTotoStatement {

		/** Always `https://in-toto.io/Statement/v0.1`. */
		_type?: string | null;

		/** `https://slsa.dev/provenance/v0.1` for SlsaProvenance. */
		predicateType?: string | null;
		provenance?: InTotoProvenance;
		slsaProvenance?: SlsaProvenance;

		/** See full explanation of fields at slsa.dev/provenance/v0.2. */
		slsaProvenanceZeroTwo?: SlsaProvenanceZeroTwo;
		subject?: Array<Subject>;
	}

	/** Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json". */
	export interface InTotoStatementFormProperties {

		/** Always `https://in-toto.io/Statement/v0.1`. */
		_type: FormControl<string | null | undefined>,

		/** `https://slsa.dev/provenance/v0.1` for SlsaProvenance. */
		predicateType: FormControl<string | null | undefined>,
	}
	export function CreateInTotoStatementFormGroup() {
		return new FormGroup<InTotoStatementFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined),
			predicateType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlsaProvenance {
		builder?: SlsaBuilder;

		/** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty. */
		materials?: Array<Material>;

		/** Other properties of the build. */
		metadata?: SlsaMetadata;

		/** Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe. */
		recipe?: SlsaRecipe;
	}
	export interface SlsaProvenanceFormProperties {
	}
	export function CreateSlsaProvenanceFormGroup() {
		return new FormGroup<SlsaProvenanceFormProperties>({
		});

	}

	export interface SlsaBuilder {
		id?: string | null;
	}
	export interface SlsaBuilderFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateSlsaBuilderFormGroup() {
		return new FormGroup<SlsaBuilderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Material {
		digest?: {[id: string]: string };
		uri?: string | null;
	}
	export interface MaterialFormProperties {
		digest: FormControl<{[id: string]: string } | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateMaterialFormGroup() {
		return new FormGroup<MaterialFormProperties>({
			digest: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Other properties of the build. */
	export interface SlsaMetadata {

		/** The timestamp of when the build completed. */
		buildFinishedOn?: string | null;

		/** Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. */
		buildInvocationId?: string | null;

		/** The timestamp of when the build started. */
		buildStartedOn?: string | null;

		/** Indicates that the builder claims certain fields in this message to be complete. */
		completeness?: SlsaCompleteness;

		/** If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. */
		reproducible?: boolean | null;
	}

	/** Other properties of the build. */
	export interface SlsaMetadataFormProperties {

		/** The timestamp of when the build completed. */
		buildFinishedOn: FormControl<string | null | undefined>,

		/** Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. */
		buildInvocationId: FormControl<string | null | undefined>,

		/** The timestamp of when the build started. */
		buildStartedOn: FormControl<string | null | undefined>,

		/** If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. */
		reproducible: FormControl<boolean | null | undefined>,
	}
	export function CreateSlsaMetadataFormGroup() {
		return new FormGroup<SlsaMetadataFormProperties>({
			buildFinishedOn: new FormControl<string | null | undefined>(undefined),
			buildInvocationId: new FormControl<string | null | undefined>(undefined),
			buildStartedOn: new FormControl<string | null | undefined>(undefined),
			reproducible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Indicates that the builder claims certain fields in this message to be complete. */
	export interface SlsaCompleteness {

		/** If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. */
		arguments?: boolean | null;

		/** If true, the builder claims that recipe.environment is claimed to be complete. */
		environment?: boolean | null;

		/** If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic". */
		materials?: boolean | null;
	}

	/** Indicates that the builder claims certain fields in this message to be complete. */
	export interface SlsaCompletenessFormProperties {

		/** If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. */
		arguments: FormControl<boolean | null | undefined>,

		/** If true, the builder claims that recipe.environment is claimed to be complete. */
		environment: FormControl<boolean | null | undefined>,

		/** If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic". */
		materials: FormControl<boolean | null | undefined>,
	}
	export function CreateSlsaCompletenessFormGroup() {
		return new FormGroup<SlsaCompletenessFormProperties>({
			arguments: new FormControl<boolean | null | undefined>(undefined),
			environment: new FormControl<boolean | null | undefined>(undefined),
			materials: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe. */
	export interface SlsaRecipe {

		/** Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Depending on the recipe Type, the structure may be different. */
		arguments?: {[id: string]: any };

		/** Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64. */
		definedInMaterial?: string | null;

		/** String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use. */
		entryPoint?: string | null;

		/** Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Depending on the recipe Type, the structure may be different. */
		environment?: {[id: string]: any };

		/** URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials. */
		type?: string | null;
	}

	/** Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe. */
	export interface SlsaRecipeFormProperties {

		/** Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Depending on the recipe Type, the structure may be different. */
		arguments: FormControl<{[id: string]: any } | null | undefined>,

		/** Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64. */
		definedInMaterial: FormControl<string | null | undefined>,

		/** String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use. */
		entryPoint: FormControl<string | null | undefined>,

		/** Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Depending on the recipe Type, the structure may be different. */
		environment: FormControl<{[id: string]: any } | null | undefined>,

		/** URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSlsaRecipeFormGroup() {
		return new FormGroup<SlsaRecipeFormProperties>({
			arguments: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			definedInMaterial: new FormControl<string | null | undefined>(undefined),
			entryPoint: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** See full explanation of fields at slsa.dev/provenance/v0.2. */
	export interface SlsaProvenanceZeroTwo {
		buildConfig?: {[id: string]: any };
		buildType?: string | null;

		/** Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance. */
		builder?: GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder;

		/** Identifies the event that kicked off the build. */
		invocation?: GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation;
		materials?: Array<GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial>;

		/** Other properties of the build. */
		metadata?: GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata;
	}

	/** See full explanation of fields at slsa.dev/provenance/v0.2. */
	export interface SlsaProvenanceZeroTwoFormProperties {
		buildConfig: FormControl<{[id: string]: any } | null | undefined>,
		buildType: FormControl<string | null | undefined>,
	}
	export function CreateSlsaProvenanceZeroTwoFormGroup() {
		return new FormGroup<SlsaProvenanceZeroTwoFormProperties>({
			buildConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			buildType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder {
		id?: string | null;
	}

	/** Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaBuilderFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateGrafeasV1SlsaProvenanceZeroTwoSlsaBuilderFormGroup() {
		return new FormGroup<GrafeasV1SlsaProvenanceZeroTwoSlsaBuilderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the event that kicked off the build. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation {

		/** Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from. */
		configSource?: GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource;
		environment?: {[id: string]: any };
		parameters?: {[id: string]: any };
	}

	/** Identifies the event that kicked off the build. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaInvocationFormProperties {
		environment: FormControl<{[id: string]: any } | null | undefined>,
		parameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGrafeasV1SlsaProvenanceZeroTwoSlsaInvocationFormGroup() {
		return new FormGroup<GrafeasV1SlsaProvenanceZeroTwoSlsaInvocationFormProperties>({
			environment: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource {
		digest?: {[id: string]: string };
		entryPoint?: string | null;
		uri?: string | null;
	}

	/** Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSourceFormProperties {
		digest: FormControl<{[id: string]: string } | null | undefined>,
		entryPoint: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGrafeasV1SlsaProvenanceZeroTwoSlsaConfigSourceFormGroup() {
		return new FormGroup<GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSourceFormProperties>({
			digest: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			entryPoint: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial {
		digest?: {[id: string]: string };
		uri?: string | null;
	}

	/** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaMaterialFormProperties {
		digest: FormControl<{[id: string]: string } | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGrafeasV1SlsaProvenanceZeroTwoSlsaMaterialFormGroup() {
		return new FormGroup<GrafeasV1SlsaProvenanceZeroTwoSlsaMaterialFormProperties>({
			digest: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Other properties of the build. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata {
		buildFinishedOn?: string | null;
		buildInvocationId?: string | null;
		buildStartedOn?: string | null;

		/** Indicates that the builder claims certain fields in this message to be complete. */
		completeness?: GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness;
		reproducible?: boolean | null;
	}

	/** Other properties of the build. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaMetadataFormProperties {
		buildFinishedOn: FormControl<string | null | undefined>,
		buildInvocationId: FormControl<string | null | undefined>,
		buildStartedOn: FormControl<string | null | undefined>,
		reproducible: FormControl<boolean | null | undefined>,
	}
	export function CreateGrafeasV1SlsaProvenanceZeroTwoSlsaMetadataFormGroup() {
		return new FormGroup<GrafeasV1SlsaProvenanceZeroTwoSlsaMetadataFormProperties>({
			buildFinishedOn: new FormControl<string | null | undefined>(undefined),
			buildInvocationId: new FormControl<string | null | undefined>(undefined),
			buildStartedOn: new FormControl<string | null | undefined>(undefined),
			reproducible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Indicates that the builder claims certain fields in this message to be complete. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness {
		environment?: boolean | null;
		materials?: boolean | null;
		parameters?: boolean | null;
	}

	/** Indicates that the builder claims certain fields in this message to be complete. */
	export interface GrafeasV1SlsaProvenanceZeroTwoSlsaCompletenessFormProperties {
		environment: FormControl<boolean | null | undefined>,
		materials: FormControl<boolean | null | undefined>,
		parameters: FormControl<boolean | null | undefined>,
	}
	export function CreateGrafeasV1SlsaProvenanceZeroTwoSlsaCompletenessFormGroup() {
		return new FormGroup<GrafeasV1SlsaProvenanceZeroTwoSlsaCompletenessFormProperties>({
			environment: new FormControl<boolean | null | undefined>(undefined),
			materials: new FormControl<boolean | null | undefined>(undefined),
			parameters: new FormControl<boolean | null | undefined>(undefined),
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

		/** Required. The type of hash that was performed, e.g. "SHA-256". */
		type?: string | null;

		/** Required. The hash value. */
		value?: string | null;
	}

	/** Container message for hash values. */
	export interface HashFormProperties {

		/** Required. The type of hash that was performed, e.g. "SHA-256". */
		type: FormControl<string | null | undefined>,

		/** Required. The hash value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHashFormGroup() {
		return new FormGroup<HashFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason. */
	export interface ComplianceOccurrence {
		nonComplianceReason?: string | null;
		nonCompliantFiles?: Array<NonCompliantFile>;
	}

	/** An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason. */
	export interface ComplianceOccurrenceFormProperties {
		nonComplianceReason: FormControl<string | null | undefined>,
	}
	export function CreateComplianceOccurrenceFormGroup() {
		return new FormGroup<ComplianceOccurrenceFormProperties>({
			nonComplianceReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about files that caused a compliance check to fail. display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'. */
	export interface NonCompliantFile {

		/** Command to display the non-compliant files. */
		displayCommand?: string | null;

		/** Empty if `display_command` is set. */
		path?: string | null;

		/** Explains why a file is non compliant for a CIS check. */
		reason?: string | null;
	}

	/** Details about files that caused a compliance check to fail. display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'. */
	export interface NonCompliantFileFormProperties {

		/** Command to display the non-compliant files. */
		displayCommand: FormControl<string | null | undefined>,

		/** Empty if `display_command` is set. */
		path: FormControl<string | null | undefined>,

		/** Explains why a file is non compliant for a CIS check. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateNonCompliantFileFormGroup() {
		return new FormGroup<NonCompliantFileFormProperties>({
			displayCommand: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The period during which some deployable was active in a runtime. */
	export interface DeploymentOccurrence {

		/** Address of the runtime element hosting this deployment. */
		address?: string | null;

		/** Configuration used to create this deployment. */
		config?: string | null;

		/** Required. Beginning of the lifetime of this deployment. */
		deployTime?: string | null;

		/** Platform hosting this deployment. */
		platform?: DeploymentOccurrencePlatform | null;

		/** Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name. */
		resourceUri?: Array<string>;

		/** End of the lifetime of this deployment. */
		undeployTime?: string | null;

		/** Identity of the user that triggered this deployment. */
		userEmail?: string | null;
	}

	/** The period during which some deployable was active in a runtime. */
	export interface DeploymentOccurrenceFormProperties {

		/** Address of the runtime element hosting this deployment. */
		address: FormControl<string | null | undefined>,

		/** Configuration used to create this deployment. */
		config: FormControl<string | null | undefined>,

		/** Required. Beginning of the lifetime of this deployment. */
		deployTime: FormControl<string | null | undefined>,

		/** Platform hosting this deployment. */
		platform: FormControl<DeploymentOccurrencePlatform | null | undefined>,

		/** End of the lifetime of this deployment. */
		undeployTime: FormControl<string | null | undefined>,

		/** Identity of the user that triggered this deployment. */
		userEmail: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentOccurrenceFormGroup() {
		return new FormGroup<DeploymentOccurrenceFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			config: new FormControl<string | null | undefined>(undefined),
			deployTime: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<DeploymentOccurrencePlatform | null | undefined>(undefined),
			undeployTime: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentOccurrencePlatform { PLATFORM_UNSPECIFIED = 0, GKE = 1, FLEX = 2, CUSTOM = 3 }


	/** Provides information about the analysis status of a discovered resource. */
	export interface DiscoveryOccurrence {

		/** Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource. */
		analysisCompleted?: AnalysisCompleted;

		/** Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors. */
		analysisError?: Array<Status>;

		/** The status of discovery for the resource. */
		analysisStatus?: DiscoveryOccurrenceAnalysisStatus | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		analysisStatusError?: Status;

		/** Output only. The time occurrences related to this discovery occurrence were archived. */
		archiveTime?: string | null;

		/** Whether the resource is continuously analyzed. */
		continuousAnalysis?: DiscoveryOccurrenceContinuousAnalysis | null;

		/** The CPE of the resource being scanned. */
		cpe?: string | null;

		/** The last time this resource was scanned. */
		lastScanTime?: string | null;

		/** The status of an SBOM generation. */
		sbomStatus?: SBOMStatus;
	}

	/** Provides information about the analysis status of a discovered resource. */
	export interface DiscoveryOccurrenceFormProperties {

		/** The status of discovery for the resource. */
		analysisStatus: FormControl<DiscoveryOccurrenceAnalysisStatus | null | undefined>,

		/** Output only. The time occurrences related to this discovery occurrence were archived. */
		archiveTime: FormControl<string | null | undefined>,

		/** Whether the resource is continuously analyzed. */
		continuousAnalysis: FormControl<DiscoveryOccurrenceContinuousAnalysis | null | undefined>,

		/** The CPE of the resource being scanned. */
		cpe: FormControl<string | null | undefined>,

		/** The last time this resource was scanned. */
		lastScanTime: FormControl<string | null | undefined>,
	}
	export function CreateDiscoveryOccurrenceFormGroup() {
		return new FormGroup<DiscoveryOccurrenceFormProperties>({
			analysisStatus: new FormControl<DiscoveryOccurrenceAnalysisStatus | null | undefined>(undefined),
			archiveTime: new FormControl<string | null | undefined>(undefined),
			continuousAnalysis: new FormControl<DiscoveryOccurrenceContinuousAnalysis | null | undefined>(undefined),
			cpe: new FormControl<string | null | undefined>(undefined),
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

	export enum DiscoveryOccurrenceAnalysisStatus { ANALYSIS_STATUS_UNSPECIFIED = 0, PENDING = 1, SCANNING = 2, FINISHED_SUCCESS = 3, COMPLETE = 4, FINISHED_FAILED = 5, FINISHED_UNSUPPORTED = 6 }

	export enum DiscoveryOccurrenceContinuousAnalysis { CONTINUOUS_ANALYSIS_UNSPECIFIED = 0, ACTIVE = 1, INACTIVE = 2 }


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

	export enum SBOMStatusSbomState { SBOM_STATE_UNSPECIFIED = 0, PENDING = 1, COMPLETE = 2 }


	/** Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence. */
	export interface DSSEAttestationOccurrence {

		/** MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type. */
		envelope?: Envelope;

		/** Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json". */
		statement?: InTotoStatement;
	}

	/** Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence. */
	export interface DSSEAttestationOccurrenceFormProperties {
	}
	export function CreateDSSEAttestationOccurrenceFormGroup() {
		return new FormGroup<DSSEAttestationOccurrenceFormProperties>({
		});

	}


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


	/** Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM . */
	export interface ImageOccurrence {

		/** Output only. This contains the base image URL for the derived image occurrence. */
		baseResourceUrl?: string | null;

		/** Output only. The number of layers by which this image differs from the associated image basis. */
		distance?: number | null;

		/** A set of properties that uniquely identify a given Docker image. */
		fingerprint?: Fingerprint;

		/** This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer. */
		layerInfo?: Array<Layer>;
	}

	/** Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM . */
	export interface ImageOccurrenceFormProperties {

		/** Output only. This contains the base image URL for the derived image occurrence. */
		baseResourceUrl: FormControl<string | null | undefined>,

		/** Output only. The number of layers by which this image differs from the associated image basis. */
		distance: FormControl<number | null | undefined>,
	}
	export function CreateImageOccurrenceFormGroup() {
		return new FormGroup<ImageOccurrenceFormProperties>({
			baseResourceUrl: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Layer holds metadata specific to a layer of a Docker image. */
	export interface Layer {

		/** The recovered arguments to the Dockerfile directive. */
		arguments?: string | null;

		/** Required. The recovered Dockerfile directive used to construct this layer. See https://docs.docker.com/engine/reference/builder/ for more information. */
		directive?: string | null;
	}

	/** Layer holds metadata specific to a layer of a Docker image. */
	export interface LayerFormProperties {

		/** The recovered arguments to the Dockerfile directive. */
		arguments: FormControl<string | null | undefined>,

		/** Required. The recovered Dockerfile directive used to construct this layer. See https://docs.docker.com/engine/reference/builder/ for more information. */
		directive: FormControl<string | null | undefined>,
	}
	export function CreateLayerFormGroup() {
		return new FormGroup<LayerFormProperties>({
			arguments: new FormControl<string | null | undefined>(undefined),
			directive: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details on how a particular software package was installed on a system. */
	export interface PackageOccurrence {

		/** Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
		architecture?: PackageNoteArchitecture | null;

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

	/** Details on how a particular software package was installed on a system. */
	export interface PackageOccurrenceFormProperties {

		/** Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
		architecture: FormControl<PackageNoteArchitecture | null | undefined>,

		/** Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
		cpeUri: FormControl<string | null | undefined>,

		/** Required. Output only. The name of the installed package. */
		name: FormControl<string | null | undefined>,

		/** Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		packageType: FormControl<string | null | undefined>,
	}
	export function CreatePackageOccurrenceFormGroup() {
		return new FormGroup<PackageOccurrenceFormProperties>({
			architecture: new FormControl<PackageNoteArchitecture | null | undefined>(undefined),
			cpeUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`. */
	export interface Location {

		/** Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) */
		cpeUri?: string | null;

		/** The path from which we gathered that this package/version is installed. */
		path?: string | null;

		/** Version contains structured information about the version of a package. */
		version?: Version;
	}

	/** An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`. */
	export interface LocationFormProperties {

		/** Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) */
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


	/** An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update. */
	export interface UpgradeOccurrence {

		/** The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities. */
		distribution?: UpgradeDistribution;

		/** Required for non-Windows OS. The package this Upgrade is for. */
		package?: string | null;

		/** Version contains structured information about the version of a package. */
		parsedVersion?: Version;

		/** Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate. */
		windowsUpdate?: WindowsUpdate;
	}

	/** An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update. */
	export interface UpgradeOccurrenceFormProperties {

		/** Required for non-Windows OS. The package this Upgrade is for. */
		package: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeOccurrenceFormGroup() {
		return new FormGroup<UpgradeOccurrenceFormProperties>({
			package: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An occurrence of a severity vulnerability on a resource. */
	export interface VulnerabilityOccurrence {

		/** Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity. */
		cvssScore?: number | null;

		/** Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version. */
		cvssV2?: CVSS;

		/** Output only. CVSS version used to populate cvss_score and severity. */
		cvssVersion?: VulnerabilityNoteCvssVersion | null;

		/** Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version. */
		cvssv3?: CVSS;

		/** The distro assigned severity for this vulnerability when it is available, otherwise this is the note provider assigned severity. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues. */
		effectiveSeverity?: CisBenchmarkSeverity | null;

		/** Occurrence-specific extra details about the vulnerability. */
		extraDetails?: string | null;

		/** Output only. Whether at least one of the affected packages has a fix available. */
		fixAvailable?: boolean | null;

		/** Output only. A detailed description of this vulnerability. */
		longDescription?: string | null;

		/** Required. The set of affected locations and their fixes (if available) within the associated resource. */
		packageIssue?: Array<PackageIssue>;

		/** Output only. URLs related to this vulnerability. */
		relatedUrls?: Array<RelatedUrl>;

		/** Output only. The note provider assigned severity of this vulnerability. */
		severity?: CisBenchmarkSeverity | null;

		/** Output only. A one sentence description of this vulnerability. */
		shortDescription?: string | null;

		/** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		type?: string | null;

		/** VexAssessment provides all publisher provided Vex information that is related to this vulnerability. */
		vexAssessment?: VexAssessment;
	}

	/** An occurrence of a severity vulnerability on a resource. */
	export interface VulnerabilityOccurrenceFormProperties {

		/** Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity. */
		cvssScore: FormControl<number | null | undefined>,

		/** Output only. CVSS version used to populate cvss_score and severity. */
		cvssVersion: FormControl<VulnerabilityNoteCvssVersion | null | undefined>,

		/** The distro assigned severity for this vulnerability when it is available, otherwise this is the note provider assigned severity. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues. */
		effectiveSeverity: FormControl<CisBenchmarkSeverity | null | undefined>,

		/** Occurrence-specific extra details about the vulnerability. */
		extraDetails: FormControl<string | null | undefined>,

		/** Output only. Whether at least one of the affected packages has a fix available. */
		fixAvailable: FormControl<boolean | null | undefined>,

		/** Output only. A detailed description of this vulnerability. */
		longDescription: FormControl<string | null | undefined>,

		/** Output only. The note provider assigned severity of this vulnerability. */
		severity: FormControl<CisBenchmarkSeverity | null | undefined>,

		/** Output only. A one sentence description of this vulnerability. */
		shortDescription: FormControl<string | null | undefined>,

		/** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityOccurrenceFormGroup() {
		return new FormGroup<VulnerabilityOccurrenceFormProperties>({
			cvssScore: new FormControl<number | null | undefined>(undefined),
			cvssVersion: new FormControl<VulnerabilityNoteCvssVersion | null | undefined>(undefined),
			effectiveSeverity: new FormControl<CisBenchmarkSeverity | null | undefined>(undefined),
			extraDetails: new FormControl<string | null | undefined>(undefined),
			fixAvailable: new FormControl<boolean | null | undefined>(undefined),
			longDescription: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<CisBenchmarkSeverity | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available). */
	export interface PackageIssue {

		/** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in. */
		affectedCpeUri?: string | null;

		/** Required. The package this vulnerability was found in. */
		affectedPackage?: string | null;

		/** Version contains structured information about the version of a package. */
		affectedVersion?: Version;

		/** Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available. */
		effectiveSeverity?: CisBenchmarkSeverity | null;

		/** The location at which this package was found. */
		fileLocation?: Array<GrafeasV1FileLocation>;

		/** Output only. Whether a fix is available for this package. */
		fixAvailable?: boolean | null;

		/** The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri. */
		fixedCpeUri?: string | null;

		/** The package this vulnerability was fixed in. It is possible for this to be different from the affected_package. */
		fixedPackage?: string | null;

		/** Version contains structured information about the version of a package. */
		fixedVersion?: Version;

		/** The type of package (e.g. OS, MAVEN, GO). */
		packageType?: string | null;
	}

	/** A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available). */
	export interface PackageIssueFormProperties {

		/** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in. */
		affectedCpeUri: FormControl<string | null | undefined>,

		/** Required. The package this vulnerability was found in. */
		affectedPackage: FormControl<string | null | undefined>,

		/** Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available. */
		effectiveSeverity: FormControl<CisBenchmarkSeverity | null | undefined>,

		/** Output only. Whether a fix is available for this package. */
		fixAvailable: FormControl<boolean | null | undefined>,

		/** The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri. */
		fixedCpeUri: FormControl<string | null | undefined>,

		/** The package this vulnerability was fixed in. It is possible for this to be different from the affected_package. */
		fixedPackage: FormControl<string | null | undefined>,

		/** The type of package (e.g. OS, MAVEN, GO). */
		packageType: FormControl<string | null | undefined>,
	}
	export function CreatePackageIssueFormGroup() {
		return new FormGroup<PackageIssueFormProperties>({
			affectedCpeUri: new FormControl<string | null | undefined>(undefined),
			affectedPackage: new FormControl<string | null | undefined>(undefined),
			effectiveSeverity: new FormControl<CisBenchmarkSeverity | null | undefined>(undefined),
			fixAvailable: new FormControl<boolean | null | undefined>(undefined),
			fixedCpeUri: new FormControl<string | null | undefined>(undefined),
			fixedPackage: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates the location at which a package was found. */
	export interface GrafeasV1FileLocation {

		/** For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file. */
		filePath?: string | null;
	}

	/** Indicates the location at which a package was found. */
	export interface GrafeasV1FileLocationFormProperties {

		/** For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file. */
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateGrafeasV1FileLocationFormGroup() {
		return new FormGroup<GrafeasV1FileLocationFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
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

	export enum BuildStepStatus { STATUS_UNKNOWN = 0, PENDING = 1, QUEUING = 2, QUEUED = 3, WORKING = 4, SUCCESS = 5, FAILURE = 6, INTERNAL_ERROR = 7, TIMEOUT = 8, CANCELLED = 9, EXPIRED = 10 }


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

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResultDecision { DECISION_UNSPECIFIED = 0, APPROVED = 1, REJECTED = 2 }


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

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApprovalState { STATE_UNSPECIFIED = 0, PENDING = 1, APPROVED = 2, REJECTED = 3, CANCELLED = 4 }


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

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfoType { FAILURE_TYPE_UNSPECIFIED = 0, PUSH_FAILED = 1, PUSH_IMAGE_NOT_FOUND = 2, PUSH_NOT_AUTHORIZED = 3, LOGGING_FAILURE = 4, USER_BUILD_STEP = 5, FETCH_SOURCE_FAILED = 6 }


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

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsDefaultLogsBucketBehavior { DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED = 0, REGIONAL_USER_OWNED_BUCKET = 1 }

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsLogStreamingOption { STREAM_DEFAULT = 0, STREAM_ON = 1, STREAM_OFF = 2 }

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsLogging { LOGGING_UNSPECIFIED = 0, LEGACY = 1, GCS_ONLY = 2, STACKDRIVER_ONLY = 3, CLOUD_LOGGING_ONLY = 4, NONE = 5 }

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsMachineType { UNSPECIFIED = 0, N1_HIGHCPU_8 = 1, N1_HIGHCPU_32 = 2, E2_HIGHCPU_8 = 3, E2_HIGHCPU_32 = 4, E2_MEDIUM = 5 }


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

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsRequestedVerifyOption { NOT_VERIFIED = 0, VERIFIED = 1 }

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsSubstitutionOption { MUST_MATCH = 0, ALLOW_LOOSE = 1 }


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

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1HashType { NONE = 0, SHA256 = 1, MD5 = 2, SHA512 = 3 }


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

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceSourceFetcher { SOURCE_FETCHER_UNSPECIFIED = 0, GSUTIL = 1, GCS_FETCHER = 2 }


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

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStatus { STATUS_UNKNOWN = 0, PENDING = 1, QUEUED = 2, WORKING = 3, SUCCESS = 4, FAILURE = 5, INTERNAL_ERROR = 6, TIMEOUT = 7, CANCELLED = 8, EXPIRED = 9 }


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

	export enum ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarningPriority { PRIORITY_UNSPECIFIED = 0, INFO = 1, WARNING = 2, ALERT = 3 }


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


	/** Per resource and severity counts of fixable and total vulnerabilities. */
	export interface FixableTotalByDigest {

		/** The number of fixable vulnerabilities associated with this resource. */
		fixableCount?: string | null;

		/** The affected resource. */
		resourceUri?: string | null;

		/** The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities. */
		severity?: CisBenchmarkSeverity | null;

		/** The total number of vulnerabilities associated with this resource. */
		totalCount?: string | null;
	}

	/** Per resource and severity counts of fixable and total vulnerabilities. */
	export interface FixableTotalByDigestFormProperties {

		/** The number of fixable vulnerabilities associated with this resource. */
		fixableCount: FormControl<string | null | undefined>,

		/** The affected resource. */
		resourceUri: FormControl<string | null | undefined>,

		/** The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities. */
		severity: FormControl<CisBenchmarkSeverity | null | undefined>,

		/** The total number of vulnerabilities associated with this resource. */
		totalCount: FormControl<string | null | undefined>,
	}
	export function CreateFixableTotalByDigestFormGroup() {
		return new FormGroup<FixableTotalByDigestFormProperties>({
			fixableCount: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<CisBenchmarkSeverity | null | undefined>(undefined),
			totalCount: new FormControl<string | null | undefined>(undefined),
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
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
		 * @return {Empty} Successful response
		 */
		Containeranalysis_projects_occurrences_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the specified occurrence.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
		 * @return {Occurrence} Successful response
		 */
		Containeranalysis_projects_occurrences_get(name: string): Observable<Occurrence> {
			return this.http.get<Occurrence>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the specified occurrence.
		 * Patch v1/{name}
		 * @param {string} name Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
		 * @param {string} updateMask The fields to update.
		 * @return {Occurrence} Successful response
		 */
		Containeranalysis_projects_occurrences_patch(name: string, updateMask: string | null | undefined, requestBody: Occurrence): Observable<Occurrence> {
			return this.http.patch<Occurrence>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
		 * Get v1/{name}/notes
		 * @param {string} name Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
		 * @return {Note} Successful response
		 */
		Containeranalysis_projects_occurrences_getNotes(name: string): Observable<Note> {
			return this.http.get<Note>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/notes', {});
		}

		/**
		 * Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
		 * Get v1/{name}/occurrences
		 * @param {string} name Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
		 * @param {string} filter The filter expression.
		 * @param {number} pageSize Number of occurrences to return in the list.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {ListNoteOccurrencesResponse} Successful response
		 */
		Containeranalysis_projects_notes_occurrences_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNoteOccurrencesResponse> {
			return this.http.get<ListNoteOccurrencesResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/occurrences&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists notes for the specified project.
		 * Get v1/{parent}/notes
		 * @param {string} parent Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
		 * @param {string} filter The filter expression.
		 * @param {number} pageSize Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {ListNotesResponse} Successful response
		 */
		Containeranalysis_projects_notes_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNotesResponse> {
			return this.http.get<ListNotesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new note.
		 * Post v1/{parent}/notes
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
		 * @param {string} noteId Required. The ID to use for this note.
		 * @return {Note} Successful response
		 */
		Containeranalysis_projects_notes_create(parent: string, noteId: string | null | undefined, requestBody: Note): Observable<Note> {
			return this.http.post<Note>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notes&noteId=' + (noteId == null ? '' : encodeURIComponent(noteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates new notes in batch.
		 * Post v1/{parent}/notes:batchCreate
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
		 * @return {BatchCreateNotesResponse} Successful response
		 */
		Containeranalysis_projects_notes_batchCreate(parent: string, requestBody: BatchCreateNotesRequest): Observable<BatchCreateNotesResponse> {
			return this.http.post<BatchCreateNotesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notes:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists occurrences for the specified project.
		 * Get v1/{parent}/occurrences
		 * @param {string} parent Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
		 * @param {string} filter The filter expression.
		 * @param {number} pageSize Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {ListOccurrencesResponse} Successful response
		 */
		Containeranalysis_projects_occurrences_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOccurrencesResponse> {
			return this.http.get<ListOccurrencesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new occurrence.
		 * Post v1/{parent}/occurrences
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
		 * @return {Occurrence} Successful response
		 */
		Containeranalysis_projects_occurrences_create(parent: string, requestBody: Occurrence): Observable<Occurrence> {
			return this.http.post<Occurrence>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates new occurrences in batch.
		 * Post v1/{parent}/occurrences:batchCreate
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
		 * @return {BatchCreateOccurrencesResponse} Successful response
		 */
		Containeranalysis_projects_occurrences_batchCreate(parent: string, requestBody: BatchCreateOccurrencesRequest): Observable<BatchCreateOccurrencesResponse> {
			return this.http.post<BatchCreateOccurrencesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a summary of the number and severity of occurrences.
		 * Get v1/{parent}/occurrences:vulnerabilitySummary
		 * @param {string} parent Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
		 * @param {string} filter The filter expression.
		 * @return {VulnerabilityOccurrencesSummary} Successful response
		 */
		Containeranalysis_projects_occurrences_getVulnerabilitySummary(parent: string, filter: string | null | undefined): Observable<VulnerabilityOccurrencesSummary> {
			return this.http.get<VulnerabilityOccurrencesSummary>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences:vulnerabilitySummary&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Containeranalysis_projects_occurrences_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Containeranalysis_projects_occurrences_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Containeranalysis_projects_occurrences_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

