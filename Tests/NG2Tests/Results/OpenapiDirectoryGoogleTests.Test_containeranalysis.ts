import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** An alias to a repo revision. */
	export interface AliasContext {

		/** The alias kind. */
		kind?: AliasContextKind | null;

		/** The alias name. */
		name?: string | null;
	}

	export enum AliasContextKind { KIND_UNSPECIFIED = 0, FIXED = 1, MOVABLE = 2, OTHER = 3 }


	/** Artifact describes a build product. */
	export interface Artifact {

		/**
		 * Hash or checksum value of a binary, or Docker Registry 2.0 digest of a
		 * container.
		 */
		checksum?: string | null;

		/**
		 * Artifact ID, if any; for container images, this will be a URL by digest
		 * like `gcr.io/projectID/imagename@sha256:123456`.
		 */
		id?: string | null;

		/**
		 * Related artifact names. This may be the path to a binary or jar file, or in
		 * the case of a container build, the name used to push the container image to
		 * Google Container Registry, as presented to `docker push`. Note that a
		 * single Artifact ID can have multiple names, for example if two tags are
		 * applied to one image.
		 */
		names?: Array<string> | null;
	}


	/**
	 * Occurrence that represents a single "attestation". The authenticity of an
	 * attestation can be verified using the attached signature. If the verifier
	 * trusts the public key of the signer, then verifying the signature is
	 * sufficient to establish trust. In this circumstance, the authority to which
	 * this attestation is attached is primarily useful for look-up (how to find
	 * this attestation if you already know the authority and artifact to be
	 * verified) and intent (which authority was this attestation intended to sign
	 * for).
	 */
	export interface Attestation {

		/**
		 * An attestation wrapper that uses the Grafeas `Signature` message.
		 * This attestation must define the `serialized_payload` that the `signatures`
		 * verify and any metadata necessary to interpret that plaintext.  The
		 * signatures should always be over the `serialized_payload` bytestring.
		 */
		genericSignedAttestation?: GenericSignedAttestation | null;

		/**
		 * An attestation wrapper with a PGP-compatible signature. This message only
		 * supports `ATTACHED` signatures, where the payload that is signed is included
		 * alongside the signature itself in the same file.
		 */
		pgpSignedAttestation?: PgpSignedAttestation | null;
	}


	/**
	 * An attestation wrapper that uses the Grafeas `Signature` message.
	 * This attestation must define the `serialized_payload` that the `signatures`
	 * verify and any metadata necessary to interpret that plaintext.  The
	 * signatures should always be over the `serialized_payload` bytestring.
	 */
	export interface GenericSignedAttestation {

		/**
		 * Type (for example schema) of the attestation payload that was signed.
		 * The verifier must ensure that the provided type is one that the verifier
		 * supports, and that the attestation payload is a valid instantiation of that
		 * type (for example by validating a JSON schema).
		 */
		contentType?: GenericSignedAttestationContentType | null;

		/**
		 * The serialized payload that is verified by one or more `signatures`.
		 * The encoding and semantic meaning of this payload must match what is set in
		 * `content_type`.
		 */
		serializedPayload?: string | null;

		/**
		 * One or more signatures over `serialized_payload`.  Verifier implementations
		 * should consider this attestation message verified if at least one
		 * `signature` verifies `serialized_payload`.  See `Signature` in common.proto
		 * for more details on signature structure and verification.
		 */
		signatures?: Array<Signature> | null;
	}

	export enum GenericSignedAttestationContentType { CONTENT_TYPE_UNSPECIFIED = 0, SIMPLE_SIGNING_JSON = 1 }


	/**
	 * Verifiers (e.g. Kritis implementations) MUST verify signatures
	 * with respect to the trust anchors defined in policy (e.g. a Kritis policy).
	 * Typically this means that the verifier has been configured with a map from
	 * `public_key_id` to public key material (and any required parameters, e.g.
	 * signing algorithm).
	 * In particular, verification implementations MUST NOT treat the signature
	 * `public_key_id` as anything more than a key lookup hint. The `public_key_id`
	 * DOES NOT validate or authenticate a public key; it only provides a mechanism
	 * for quickly selecting a public key ALREADY CONFIGURED on the verifier through
	 * a trusted channel. Verification implementations MUST reject signatures in any
	 * of the following circumstances:
	 *   * The `public_key_id` is not recognized by the verifier.
	 *   * The public key that `public_key_id` refers to does not verify the
	 *     signature with respect to the payload.
	 * The `signature` contents SHOULD NOT be "attached" (where the payload is
	 * included with the serialized `signature` bytes). Verifiers MUST ignore any
	 * "attached" payload and only verify signatures with respect to explicitly
	 * provided payload (e.g. a `payload` field on the proto message that holds
	 * this Signature, or the canonical serialization of the proto message that
	 * holds this signature).
	 */
	export interface Signature {

		/**
		 * The identifier for the public key that verifies this signature.
		 * * The `public_key_id` is required.
		 * * The `public_key_id` MUST be an RFC3986 conformant URI.
		 * * When possible, the `public_key_id` SHOULD be an immutable reference,
		 * such as a cryptographic digest.
		 * Examples of valid `public_key_id`s:
		 * OpenPGP V4 public key fingerprint:
		 * * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA"
		 * See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more
		 * details on this scheme.
		 * RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER
		 * serialization):
		 * * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"
		 * * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"
		 */
		publicKeyId?: string | null;

		/**
		 * The content of the signature, an opaque bytestring.
		 * The payload that this signature verifies MUST be unambiguously provided
		 * with the Signature during verification. A wrapper message might provide
		 * the payload explicitly. Alternatively, a message might have a canonical
		 * serialization that can always be unambiguously computed to derive the
		 * payload.
		 */
		signature?: string | null;
	}


	/**
	 * An attestation wrapper with a PGP-compatible signature. This message only
	 * supports `ATTACHED` signatures, where the payload that is signed is included
	 * alongside the signature itself in the same file.
	 */
	export interface PgpSignedAttestation {

		/**
		 * Type (for example schema) of the attestation payload that was signed.
		 * The verifier must ensure that the provided type is one that the verifier
		 * supports, and that the attestation payload is a valid instantiation of that
		 * type (for example by validating a JSON schema).
		 */
		contentType?: GenericSignedAttestationContentType | null;

		/**
		 * The cryptographic fingerprint of the key used to generate the signature,
		 * as output by, e.g. `gpg --list-keys`. This should be the version 4, full
		 * 160-bit fingerprint, expressed as a 40 character hexidecimal string. See
		 * https://tools.ietf.org/html/rfc4880#section-12.2 for details.
		 * Implementations may choose to acknowledge "LONG", "SHORT", or other
		 * abbreviated key IDs, but only the full fingerprint is guaranteed to work.
		 * In gpg, the full fingerprint can be retrieved from the `fpr` field
		 * returned when calling --list-keys with --with-colons.  For example:
		 * ```
		 * gpg --with-colons --with-fingerprint --force-v4-certs \
		 * --list-keys attester@example.com
		 * tru::1:1513631572:0:3:1:5
		 * pub:...<SNIP>...
		 * fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB:
		 * ```
		 * Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`.
		 */
		pgpKeyId?: string | null;

		/**
		 * Required. The raw content of the signature, as output by GNU Privacy Guard
		 * (GPG) or equivalent. Since this message only supports attached signatures,
		 * the payload that was signed must be attached. While the signature format
		 * supported is dependent on the verification implementation, currently only
		 * ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than
		 * `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor
		 * --output=signature.gpg payload.json` will create the signature content
		 * expected in this field in `signature.gpg` for the `payload.json`
		 * attestation payload.
		 */
		signature?: string | null;
	}


	/**
	 * Note kind that represents a logical attestation "role" or "authority". For
	 * example, an organization might have one `Authority` for "QA" and one for
	 * "build". This note is intended to act strictly as a grouping mechanism for
	 * the attached occurrences (Attestations). This grouping mechanism also
	 * provides a security boundary, since IAM ACLs gate the ability for a principle
	 * to attach an occurrence to a given note. It also provides a single point of
	 * lookup to find all attached attestation occurrences, even if they don't all
	 * live in the same project.
	 */
	export interface Authority {

		/**
		 * This submessage provides human-readable hints about the purpose of the
		 * authority. Because the name of a note acts as its resource reference, it is
		 * important to disambiguate the canonical name of the Note (which might be a
		 * UUID for security purposes) from "readable" names more suitable for debug
		 * output. Note that these hints should not be used to look up authorities in
		 * security sensitive contexts, such as when looking up attestations to
		 * verify.
		 */
		hint?: Hint | null;
	}


	/**
	 * This submessage provides human-readable hints about the purpose of the
	 * authority. Because the name of a note acts as its resource reference, it is
	 * important to disambiguate the canonical name of the Note (which might be a
	 * UUID for security purposes) from "readable" names more suitable for debug
	 * output. Note that these hints should not be used to look up authorities in
	 * security sensitive contexts, such as when looking up attestations to
	 * verify.
	 */
	export interface Hint {

		/**
		 * Required. The human readable name of this attestation authority, for
		 * example "qa".
		 */
		humanReadableName?: string | null;
	}


	/**
	 * Basis describes the base image portion (Note) of the DockerImage
	 * relationship. Linked occurrences are derived from this or an
	 * equivalent image via:
	 *   FROM <Basis.resource_url>
	 * Or an equivalent reference, e.g. a tag of the resource_url.
	 */
	export interface Basis {

		/** A set of properties that uniquely identify a given Docker image. */
		fingerprint?: Fingerprint | null;

		/**
		 * Required. Immutable. The resource_url for the resource representing the
		 * basis of associated occurrence images.
		 */
		resourceUrl?: string | null;
	}


	/** A set of properties that uniquely identify a given Docker image. */
	export interface Fingerprint {

		/**
		 * Required. The layer ID of the final layer in the Docker image's v1
		 * representation.
		 */
		v1Name?: string | null;

		/** Required. The ordered list of v2 blobs that represent a given image. */
		v2Blob?: Array<string> | null;

		/**
		 * Output only. The name of the image's v2 blobs computed via:
		 * [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1])
		 * Only the name of the final blob is kept.
		 */
		v2Name?: string | null;
	}


	/** Request to create notes in batch. */
	export interface BatchCreateNotesRequest {

		/** Required. The notes to create. Max allowed length is 1000. */
		notes?: {[id: string]: Note } | null;
	}


	/** A type of analysis that can be done for a resource. */
	export interface Note {

		/**
		 * Note kind that represents a logical attestation "role" or "authority". For
		 * example, an organization might have one `Authority` for "QA" and one for
		 * "build". This note is intended to act strictly as a grouping mechanism for
		 * the attached occurrences (Attestations). This grouping mechanism also
		 * provides a security boundary, since IAM ACLs gate the ability for a principle
		 * to attach an occurrence to a given note. It also provides a single point of
		 * lookup to find all attached attestation occurrences, even if they don't all
		 * live in the same project.
		 */
		attestationAuthority?: Authority | null;

		/**
		 * Basis describes the base image portion (Note) of the DockerImage
		 * relationship. Linked occurrences are derived from this or an
		 * equivalent image via:
		 * FROM <Basis.resource_url>
		 * Or an equivalent reference, e.g. a tag of the resource_url.
		 */
		baseImage?: Basis | null;

		/**
		 * Note holding the version of the provider's builder and the signature of the
		 * provenance message in the build details occurrence.
		 */
		build?: Build | null;

		/**
		 * Output only. The time this note was created. This field can be used as a
		 * filter in list requests.
		 */
		createTime?: string | null;

		/** An artifact that can be deployed in some runtime. */
		deployable?: Deployable | null;

		/**
		 * A note that indicates a type of analysis a provider would perform. This note
		 * exists in a provider's project. A `Discovery` occurrence is created in a
		 * consumer's project at the start of analysis.
		 */
		discovery?: Discovery | null;

		/** Time of expiration for this note. Empty if note does not expire. */
		expirationTime?: string | null;

		/**
		 * Output only. The type of analysis. This field can be used as a filter in
		 * list requests.
		 */
		kind?: DiscoveryAnalysisKind | null;

		/** A detailed description of this note. */
		longDescription?: string | null;

		/**
		 * Output only. The name of the note in the form of
		 * `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
		 */
		name?: string | null;

		/**
		 * This represents a particular package that is distributed over various
		 * channels. E.g., glibc (aka libc6) is distributed by many, at various
		 * versions.
		 */
		package?: Package | null;

		/** Other notes related to this note. */
		relatedNoteNames?: Array<string> | null;

		/** URLs associated with this note. */
		relatedUrl?: Array<RelatedUrl> | null;

		/** A one sentence description of this note. */
		shortDescription?: string | null;

		/**
		 * Output only. The time this note was last updated. This field can be used as
		 * a filter in list requests.
		 */
		updateTime?: string | null;

		/** Vulnerability provides metadata about a security vulnerability in a Note. */
		vulnerability?: Vulnerability | null;
	}


	/**
	 * Note holding the version of the provider's builder and the signature of the
	 * provenance message in the build details occurrence.
	 */
	export interface Build {

		/** Required. Immutable. Version of the builder which produced this build. */
		builderVersion?: string | null;

		/** Message encapsulating the signature of the verified build. */
		signature?: BuildSignature | null;
	}


	/** Message encapsulating the signature of the verified build. */
	export interface BuildSignature {

		/**
		 * An ID for the key used to sign. This could be either an ID for the key
		 * stored in `public_key` (such as the ID or fingerprint for a PGP key, or the
		 * CN for a cert), or a reference to an external key (such as a reference to a
		 * key in Cloud Key Management Service).
		 */
		keyId?: string | null;

		/**
		 * The type of the key, either stored in `public_key` or referenced in
		 * `key_id`.
		 */
		keyType?: BuildSignatureKeyType | null;

		/**
		 * Public key of the builder which can be used to verify that the related
		 * findings are valid and unchanged. If `key_type` is empty, this defaults
		 * to PEM encoded public keys.
		 * This field may be empty if `key_id` references an external key.
		 * For Cloud Build based signatures, this is a PEM encoded public
		 * key. To verify the Cloud Build signature, place the contents of
		 * this field into a file (public.pem). The signature field is base64-decoded
		 * into its binary representation in signature.bin, and the provenance bytes
		 * from `BuildDetails` are base64-decoded into a binary representation in
		 * signed.bin. OpenSSL can then verify the signature:
		 * `openssl sha256 -verify public.pem -signature signature.bin signed.bin`
		 */
		publicKey?: string | null;

		/**
		 * Required. Signature of the related `BuildProvenance`. In JSON, this is
		 * base-64 encoded.
		 */
		signature?: string | null;
	}

	export enum BuildSignatureKeyType { KEY_TYPE_UNSPECIFIED = 0, PGP_ASCII_ARMORED = 1, PKIX_PEM = 2 }


	/** An artifact that can be deployed in some runtime. */
	export interface Deployable {

		/** Required. Resource URI for the artifact being deployed. */
		resourceUri?: Array<string> | null;
	}


	/**
	 * A note that indicates a type of analysis a provider would perform. This note
	 * exists in a provider's project. A `Discovery` occurrence is created in a
	 * consumer's project at the start of analysis.
	 */
	export interface Discovery {

		/**
		 * Required. Immutable. The kind of analysis that is handled by this
		 * discovery.
		 */
		analysisKind?: DiscoveryAnalysisKind | null;
	}

	export enum DiscoveryAnalysisKind { NOTE_KIND_UNSPECIFIED = 0, VULNERABILITY = 1, BUILD = 2, IMAGE = 3, PACKAGE = 4, DEPLOYMENT = 5, DISCOVERY = 6, ATTESTATION = 7 }


	/**
	 * This represents a particular package that is distributed over various
	 * channels. E.g., glibc (aka libc6) is distributed by many, at various
	 * versions.
	 */
	export interface Package {

		/** The various channels by which a package is distributed. */
		distribution?: Array<Distribution> | null;

		/** Required. Immutable. The name of the package. */
		name?: string | null;
	}


	/**
	 * This represents a particular channel of distribution for a given package.
	 * E.g., Debian's jessie-backports dpkg mirror.
	 */
	export interface Distribution {

		/**
		 * The CPU architecture for which packages in this distribution channel were
		 * built.
		 */
		architecture?: DistributionArchitecture | null;

		/**
		 * Required. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/)
		 * denoting the package manager version distributing a package.
		 */
		cpeUri?: string | null;

		/** The distribution channel-specific description of this package. */
		description?: string | null;

		/** Version contains structured information about the version of a package. */
		latestVersion?: Version | null;

		/** A freeform string denoting the maintainer of this package. */
		maintainer?: string | null;

		/** The distribution channel-specific homepage for this package. */
		url?: string | null;
	}

	export enum DistributionArchitecture { ARCHITECTURE_UNSPECIFIED = 0, X86 = 1, X64 = 2 }


	/** Version contains structured information about the version of a package. */
	export interface Version {

		/** Used to correct mistakes in the version numbering scheme. */
		epoch?: number | null;

		/**
		 * Required. Distinguishes between sentinel MIN/MAX versions and normal
		 * versions.
		 */
		kind?: VersionKind | null;

		/**
		 * Required only when version kind is NORMAL. The main part of the version
		 * name.
		 */
		name?: string | null;

		/** The iteration of the package build from the above version. */
		revision?: string | null;
	}

	export enum VersionKind { VERSION_KIND_UNSPECIFIED = 0, NORMAL = 1, MINIMUM = 2, MAXIMUM = 3 }


	/** Metadata for any related URL information. */
	export interface RelatedUrl {

		/** Label to describe usage of the URL. */
		label?: string | null;

		/** Specific URL associated with the resource. */
		url?: string | null;
	}


	/** Vulnerability provides metadata about a security vulnerability in a Note. */
	export interface Vulnerability {

		/** The CVSS score for this vulnerability. */
		cvssScore?: number | null;

		/**
		 * Common Vulnerability Scoring System version 3.
		 * For details, see https://www.first.org/cvss/specification-document
		 */
		cvssV3?: CVSSv3 | null;

		/**
		 * All information about the package to specifically identify this
		 * vulnerability. One entry per (version range and cpe_uri) the package
		 * vulnerability has manifested in.
		 */
		details?: Array<Detail> | null;

		/** Note provider assigned impact of the vulnerability. */
		severity?: VulnerabilitySeverity | null;

		/**
		 * The time this information was last changed at the source. This is an
		 * upstream timestamp from the underlying information source - e.g. Ubuntu
		 * security tracker.
		 */
		sourceUpdateTime?: string | null;

		/**
		 * Windows details get their own format because the information format and
		 * model don't match a normal detail. Specifically Windows updates are done as
		 * patches, thus Windows vulnerabilities really are a missing package, rather
		 * than a package being at an incorrect version.
		 */
		windowsDetails?: Array<WindowsDetail> | null;
	}


	/**
	 * Common Vulnerability Scoring System version 3.
	 * For details, see https://www.first.org/cvss/specification-document
	 */
	export interface CVSSv3 {
		attackComplexity?: CVSSv3AttackComplexity | null;

		/**
		 * Base Metrics
		 * Represents the intrinsic characteristics of a vulnerability that are
		 * constant over time and across user environments.
		 */
		attackVector?: CVSSv3AttackVector | null;
		availabilityImpact?: CVSSv3AvailabilityImpact | null;

		/** The base score is a function of the base metric scores. */
		baseScore?: number | null;
		confidentialityImpact?: CVSSv3AvailabilityImpact | null;
		exploitabilityScore?: number | null;
		impactScore?: number | null;
		integrityImpact?: CVSSv3AvailabilityImpact | null;
		privilegesRequired?: CVSSv3PrivilegesRequired | null;
		scope?: CVSSv3Scope | null;
		userInteraction?: CVSSv3UserInteraction | null;
	}

	export enum CVSSv3AttackComplexity { ATTACK_COMPLEXITY_UNSPECIFIED = 0, ATTACK_COMPLEXITY_LOW = 1, ATTACK_COMPLEXITY_HIGH = 2 }

	export enum CVSSv3AttackVector { ATTACK_VECTOR_UNSPECIFIED = 0, ATTACK_VECTOR_NETWORK = 1, ATTACK_VECTOR_ADJACENT = 2, ATTACK_VECTOR_LOCAL = 3, ATTACK_VECTOR_PHYSICAL = 4 }

	export enum CVSSv3AvailabilityImpact { IMPACT_UNSPECIFIED = 0, IMPACT_HIGH = 1, IMPACT_LOW = 2, IMPACT_NONE = 3 }

	export enum CVSSv3PrivilegesRequired { PRIVILEGES_REQUIRED_UNSPECIFIED = 0, PRIVILEGES_REQUIRED_NONE = 1, PRIVILEGES_REQUIRED_LOW = 2, PRIVILEGES_REQUIRED_HIGH = 3 }

	export enum CVSSv3Scope { SCOPE_UNSPECIFIED = 0, SCOPE_UNCHANGED = 1, SCOPE_CHANGED = 2 }

	export enum CVSSv3UserInteraction { USER_INTERACTION_UNSPECIFIED = 0, USER_INTERACTION_NONE = 1, USER_INTERACTION_REQUIRED = 2 }


	/**
	 * Identifies all appearances of this vulnerability in the package for a
	 * specific distro/location. For example: glibc in
	 * cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2
	 */
	export interface Detail {

		/**
		 * Required. The CPE URI in
		 * [cpe format](https://cpe.mitre.org/specification/) in which the
		 * vulnerability manifests. Examples include distro or storage location for
		 * vulnerable jar.
		 */
		cpeUri?: string | null;

		/** A vendor-specific description of this note. */
		description?: string | null;

		/** The location of the vulnerability. */
		fixedLocation?: VulnerabilityLocation | null;

		/**
		 * Whether this detail is obsolete. Occurrences are expected not to point to
		 * obsolete details.
		 */
		isObsolete?: boolean | null;

		/** Version contains structured information about the version of a package. */
		maxAffectedVersion?: Version | null;

		/** Version contains structured information about the version of a package. */
		minAffectedVersion?: Version | null;

		/** Required. The name of the package where the vulnerability was found. */
		package?: string | null;

		/**
		 * The type of package; whether native or non native(ruby gems, node.js
		 * packages etc).
		 */
		packageType?: string | null;

		/** The severity (eg: distro assigned severity) for this vulnerability. */
		severityName?: string | null;

		/**
		 * The time this information was last changed at the source. This is an
		 * upstream timestamp from the underlying information source - e.g. Ubuntu
		 * security tracker.
		 */
		sourceUpdateTime?: string | null;
	}


	/** The location of the vulnerability. */
	export interface VulnerabilityLocation {

		/**
		 * Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/)
		 * format. Examples include distro or storage location for vulnerable jar.
		 */
		cpeUri?: string | null;

		/** Required. The package being described. */
		package?: string | null;

		/** Version contains structured information about the version of a package. */
		version?: Version | null;
	}

	export enum VulnerabilitySeverity { SEVERITY_UNSPECIFIED = 0, MINIMAL = 1, LOW = 2, MEDIUM = 3, HIGH = 4, CRITICAL = 5 }

	export interface WindowsDetail {

		/**
		 * Required. The CPE URI in
		 * [cpe format](https://cpe.mitre.org/specification/) in which the
		 * vulnerability manifests. Examples include distro or storage location for
		 * vulnerable jar.
		 */
		cpeUri?: string | null;

		/** The description of the vulnerability. */
		description?: string | null;

		/**
		 * Required. The names of the KBs which have hotfixes to mitigate this
		 * vulnerability. Note that there may be multiple hotfixes (and thus
		 * multiple KBs) that mitigate a given vulnerability. Currently any listed
		 * kb's presence is considered a fix.
		 */
		fixingKbs?: Array<KnowledgeBase> | null;

		/** Required. The name of the vulnerability. */
		name?: string | null;
	}

	export interface KnowledgeBase {

		/** The KB name (generally of the form KB[0-9]+ i.e. KB123456). */
		name?: string | null;

		/**
		 * A link to the KB in the Windows update catalog -
		 * https://www.catalog.update.microsoft.com/
		 */
		url?: string | null;
	}


	/** Response for creating notes in batch. */
	export interface BatchCreateNotesResponse {

		/** The notes that were created. */
		notes?: Array<Note> | null;
	}


	/** Request to create occurrences in batch. */
	export interface BatchCreateOccurrencesRequest {

		/** Required. The occurrences to create. Max allowed length is 1000. */
		occurrences?: Array<Occurrence> | null;
	}


	/** An instance of an analysis type that has been found on a resource. */
	export interface Occurrence {

		/** Details of an attestation occurrence. */
		attestation?: Details | null;

		/** Details of a build occurrence. */
		build?: GrafeasV1beta1BuildDetails | null;

		/** Output only. The time this occurrence was created. */
		createTime?: string | null;

		/** Details of a deployment occurrence. */
		deployment?: GrafeasV1beta1DeploymentDetails | null;

		/** Details of an image occurrence. */
		derivedImage?: GrafeasV1beta1ImageDetails | null;

		/** Details of a discovery occurrence. */
		discovered?: GrafeasV1beta1DiscoveryDetails | null;

		/** Details of a package occurrence. */
		installation?: GrafeasV1beta1PackageDetails | null;

		/**
		 * Output only. This explicitly denotes which of the occurrence details are
		 * specified. This field can be used as a filter in list requests.
		 */
		kind?: DiscoveryAnalysisKind | null;

		/**
		 * Output only. The name of the occurrence in the form of
		 * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
		 */
		name?: string | null;

		/**
		 * Required. Immutable. The analysis note associated with this occurrence, in
		 * the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be
		 * used as a filter in list requests.
		 */
		noteName?: string | null;

		/** A description of actions that can be taken to remedy the note. */
		remediation?: string | null;

		/** An entity that can have metadata. For example, a Docker image. */
		resource?: Resource | null;

		/** Output only. The time this occurrence was last updated. */
		updateTime?: string | null;

		/** Details of a vulnerability Occurrence. */
		vulnerability?: GrafeasV1beta1VulnerabilityDetails | null;
	}


	/** Details of an attestation occurrence. */
	export interface Details {

		/**
		 * Occurrence that represents a single "attestation". The authenticity of an
		 * attestation can be verified using the attached signature. If the verifier
		 * trusts the public key of the signer, then verifying the signature is
		 * sufficient to establish trust. In this circumstance, the authority to which
		 * this attestation is attached is primarily useful for look-up (how to find
		 * this attestation if you already know the authority and artifact to be
		 * verified) and intent (which authority was this attestation intended to sign
		 * for).
		 */
		attestation?: Attestation | null;
	}


	/** Details of a build occurrence. */
	export interface GrafeasV1beta1BuildDetails {

		/**
		 * Provenance of a build. Contains all information needed to verify the full
		 * details about the build from source to completion.
		 */
		provenance?: BuildProvenance | null;

		/**
		 * Serialized JSON representation of the provenance, used in generating the
		 * build signature in the corresponding build note. After verifying the
		 * signature, `provenance_bytes` can be unmarshalled and compared to the
		 * provenance to confirm that it is unchanged. A base64-encoded string
		 * representation of the provenance bytes is used for the signature in order
		 * to interoperate with openssl which expects this format for signature
		 * verification.
		 * The serialized form is captured both to avoid ambiguity in how the
		 * provenance is marshalled to json as well to prevent incompatibilities with
		 * future changes.
		 */
		provenanceBytes?: string | null;
	}


	/**
	 * Provenance of a build. Contains all information needed to verify the full
	 * details about the build from source to completion.
	 */
	export interface BuildProvenance {

		/**
		 * Special options applied to this build. This is a catch-all field where
		 * build providers can enter any desired additional details.
		 */
		buildOptions?: {[id: string]: string } | null;

		/** Version string of the builder at the time this build was executed. */
		builderVersion?: string | null;

		/** Output of the build. */
		builtArtifacts?: Array<Artifact> | null;

		/** Commands requested by the build. */
		commands?: Array<Command> | null;

		/** Time at which the build was created. */
		createTime?: string | null;

		/**
		 * E-mail address of the user who initiated this build. Note that this was the
		 * user's e-mail address at the time the build was initiated; this address may
		 * not represent the same end-user for all time.
		 */
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
		sourceProvenance?: Source | null;

		/** Time at which execution of the build was started. */
		startTime?: string | null;

		/** Trigger identifier if the build was triggered automatically; empty if not. */
		triggerId?: string | null;
	}


	/** Command describes a step performed as part of the build pipeline. */
	export interface Command {

		/** Command-line arguments used when executing this command. */
		args?: Array<string> | null;

		/**
		 * Working directory (relative to project source root) used when running this
		 * command.
		 */
		dir?: string | null;

		/** Environment variables set before running this command. */
		env?: Array<string> | null;

		/**
		 * Optional unique identifier for this command, used in wait_for to reference
		 * this command as a dependency.
		 */
		id?: string | null;

		/**
		 * Required. Name of the command, as presented on the command line, or if the
		 * command is packaged as a Docker container, as presented to `docker pull`.
		 */
		name?: string | null;

		/** The ID(s) of the command(s) that this command depends on. */
		waitFor?: Array<string> | null;
	}


	/** Source describes the location of the source used for the build. */
	export interface Source {

		/**
		 * If provided, some of the source code used for the build may be found in
		 * these locations, in the case where the source repository had multiple
		 * remotes or submodules. This list will not include the context specified in
		 * the context field.
		 */
		additionalContexts?: Array<SourceContext> | null;

		/**
		 * If provided, the input binary artifacts for the build came from this
		 * location.
		 */
		artifactStorageSourceUri?: string | null;

		/**
		 * A SourceContext is a reference to a tree of files. A SourceContext together
		 * with a path point to a unique revision of a single file or directory.
		 */
		context?: SourceContext | null;

		/**
		 * Hash(es) of the build source, which can be used to verify that the original
		 * source integrity was maintained in the build.
		 * The keys to this map are file paths used as build source and the values
		 * contain the hash values for those files.
		 * If the build source came in a single package such as a gzipped tarfile
		 * (.tar.gz), the FileHash will be for the single path to that file.
		 */
		fileHashes?: {[id: string]: FileHashes } | null;
	}


	/**
	 * A SourceContext is a reference to a tree of files. A SourceContext together
	 * with a path point to a unique revision of a single file or directory.
	 */
	export interface SourceContext {

		/**
		 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud
		 * Source Repo.
		 */
		cloudRepo?: CloudRepoSourceContext | null;

		/** A SourceContext referring to a Gerrit project. */
		gerrit?: GerritSourceContext | null;

		/**
		 * A GitSourceContext denotes a particular revision in a third party Git
		 * repository (e.g., GitHub).
		 */
		git?: GitSourceContext | null;

		/** Labels with user defined metadata. */
		labels?: {[id: string]: string } | null;
	}


	/**
	 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud
	 * Source Repo.
	 */
	export interface CloudRepoSourceContext {

		/** An alias to a repo revision. */
		aliasContext?: AliasContext | null;

		/** A unique identifier for a Cloud Repo. */
		repoId?: RepoId | null;

		/** A revision ID. */
		revisionId?: string | null;
	}


	/** A unique identifier for a Cloud Repo. */
	export interface RepoId {

		/**
		 * Selects a repo using a Google Cloud Platform project ID (e.g.,
		 * winged-cargo-31) and a repo name within that project.
		 */
		projectRepoId?: ProjectRepoId | null;

		/** A server-assigned, globally unique identifier. */
		uid?: string | null;
	}


	/**
	 * Selects a repo using a Google Cloud Platform project ID (e.g.,
	 * winged-cargo-31) and a repo name within that project.
	 */
	export interface ProjectRepoId {

		/** The ID of the project. */
		projectId?: string | null;

		/** The name of the repo. Leave empty for the default repo. */
		repoName?: string | null;
	}


	/** A SourceContext referring to a Gerrit project. */
	export interface GerritSourceContext {

		/** An alias to a repo revision. */
		aliasContext?: AliasContext | null;

		/**
		 * The full project name within the host. Projects may be nested, so
		 * "project/subproject" is a valid project name. The "repo name" is the
		 * hostURI/project.
		 */
		gerritProject?: string | null;

		/** The URI of a running Gerrit instance. */
		hostUri?: string | null;

		/** A revision (commit) ID. */
		revisionId?: string | null;
	}


	/**
	 * A GitSourceContext denotes a particular revision in a third party Git
	 * repository (e.g., GitHub).
	 */
	export interface GitSourceContext {

		/** Git commit hash. */
		revisionId?: string | null;

		/** Git repository URL. */
		url?: string | null;
	}


	/**
	 * Container message for hashes of byte content of files, used in source
	 * messages to verify integrity of source input to the build.
	 */
	export interface FileHashes {

		/** Required. Collection of file hashes. */
		fileHash?: Array<Hash> | null;
	}


	/** Container message for hash values. */
	export interface Hash {

		/** Required. The type of hash that was performed. */
		type?: HashType | null;

		/** Required. The hash value. */
		value?: string | null;
	}

	export enum HashType { HASH_TYPE_UNSPECIFIED = 0, SHA256 = 1 }


	/** Details of a deployment occurrence. */
	export interface GrafeasV1beta1DeploymentDetails {

		/** The period during which some deployable was active in a runtime. */
		deployment?: Deployment | null;
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

		/**
		 * Output only. Resource URI for the artifact being deployed taken from
		 * the deployable field with the same name.
		 */
		resourceUri?: Array<string> | null;

		/** End of the lifetime of this deployment. */
		undeployTime?: string | null;

		/** Identity of the user that triggered this deployment. */
		userEmail?: string | null;
	}

	export enum DeploymentPlatform { PLATFORM_UNSPECIFIED = 0, GKE = 1, FLEX = 2, CUSTOM = 3 }


	/** Details of an image occurrence. */
	export interface GrafeasV1beta1ImageDetails {

		/**
		 * Derived describes the derived image portion (Occurrence) of the DockerImage
		 * relationship. This image would be produced from a Dockerfile with FROM
		 * <DockerImage.Basis in attached Note>.
		 */
		derivedImage?: Derived | null;
	}


	/**
	 * Derived describes the derived image portion (Occurrence) of the DockerImage
	 * relationship. This image would be produced from a Dockerfile with FROM
	 * <DockerImage.Basis in attached Note>.
	 */
	export interface Derived {

		/**
		 * Output only. This contains the base image URL for the derived image
		 * occurrence.
		 */
		baseResourceUrl?: string | null;

		/**
		 * Output only. The number of layers by which this image differs from the
		 * associated image basis.
		 */
		distance?: number | null;

		/** A set of properties that uniquely identify a given Docker image. */
		fingerprint?: Fingerprint | null;

		/**
		 * This contains layer-specific metadata, if populated it has length
		 * "distance" and is ordered with [distance] being the layer immediately
		 * following the base image and [1] being the final layer.
		 */
		layerInfo?: Array<Layer> | null;
	}


	/** Layer holds metadata specific to a layer of a Docker image. */
	export interface Layer {

		/** The recovered arguments to the Dockerfile directive. */
		arguments?: string | null;

		/** Required. The recovered Dockerfile directive used to construct this layer. */
		directive?: LayerDirective | null;
	}

	export enum LayerDirective { DIRECTIVE_UNSPECIFIED = 0, MAINTAINER = 1, RUN = 2, CMD = 3, LABEL = 4, EXPOSE = 5, ENV = 6, ADD = 7, COPY = 8, ENTRYPOINT = 9, VOLUME = 10, USER = 11, WORKDIR = 12, ARG = 13, ONBUILD = 14, STOPSIGNAL = 15, HEALTHCHECK = 16, SHELL = 17 }


	/** Details of a discovery occurrence. */
	export interface GrafeasV1beta1DiscoveryDetails {

		/** Provides information about the analysis status of a discovered resource. */
		discovered?: Discovered | null;
	}


	/** Provides information about the analysis status of a discovered resource. */
	export interface Discovered {

		/** The status of discovery for the resource. */
		analysisStatus?: DiscoveredAnalysisStatus | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		analysisStatusError?: Status | null;

		/** Whether the resource is continuously analyzed. */
		continuousAnalysis?: DiscoveredContinuousAnalysis | null;

		/**
		 * The last time continuous analysis was done for this resource.
		 * Deprecated, do not use.
		 */
		lastAnalysisTime?: string | null;
	}

	export enum DiscoveredAnalysisStatus { ANALYSIS_STATUS_UNSPECIFIED = 0, PENDING = 1, SCANNING = 2, FINISHED_SUCCESS = 3, FINISHED_FAILED = 4, FINISHED_UNSUPPORTED = 5 }


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
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string> | null;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	export enum DiscoveredContinuousAnalysis { CONTINUOUS_ANALYSIS_UNSPECIFIED = 0, ACTIVE = 1, INACTIVE = 2 }


	/** Details of a package occurrence. */
	export interface GrafeasV1beta1PackageDetails {

		/**
		 * This represents how a particular software package may be installed on a
		 * system.
		 */
		installation?: Installation | null;
	}


	/**
	 * This represents how a particular software package may be installed on a
	 * system.
	 */
	export interface Installation {

		/**
		 * Required. All of the places within the filesystem versions of this package
		 * have been found.
		 */
		location?: Array<Location> | null;

		/** Output only. The name of the installed package. */
		name?: string | null;
	}


	/**
	 * An occurrence of a particular package installation found within a system's
	 * filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.
	 */
	export interface Location {

		/**
		 * Required. The CPE URI in [CPE format](https://cpe.mitre.org/specification/)
		 * denoting the package manager version distributing a package.
		 */
		cpeUri?: string | null;

		/** The path from which we gathered that this package/version is installed. */
		path?: string | null;

		/** Version contains structured information about the version of a package. */
		version?: Version | null;
	}


	/** An entity that can have metadata. For example, a Docker image. */
	export interface Resource {

		/** Container message for hash values. */
		contentHash?: Hash | null;

		/**
		 * Deprecated, do not use. Use uri instead.
		 * The name of the resource. For example, the name of a Docker image -
		 * "Debian".
		 */
		name?: string | null;

		/**
		 * Required. The unique URI of the resource. For example,
		 * `https://gcr.io/project/image@sha256:foo` for a Docker image.
		 */
		uri?: string | null;
	}


	/** Details of a vulnerability Occurrence. */
	export interface GrafeasV1beta1VulnerabilityDetails {

		/**
		 * Output only. The CVSS score of this vulnerability. CVSS score is on a
		 * scale of 0-10 where 0 indicates low severity and 10 indicates high
		 * severity.
		 */
		cvssScore?: number | null;

		/**
		 * The distro assigned severity for this vulnerability when it is
		 * available, and note provider assigned severity when distro has not yet
		 * assigned a severity for this vulnerability.
		 */
		effectiveSeverity?: VulnerabilitySeverity | null;

		/** Output only. A detailed description of this vulnerability. */
		longDescription?: string | null;

		/**
		 * Required. The set of affected locations and their fixes (if available)
		 * within the associated resource.
		 */
		packageIssue?: Array<PackageIssue> | null;

		/** Output only. URLs related to this vulnerability. */
		relatedUrls?: Array<RelatedUrl> | null;

		/** Output only. The note provider assigned Severity of the vulnerability. */
		severity?: VulnerabilitySeverity | null;

		/** Output only. A one sentence description of this vulnerability. */
		shortDescription?: string | null;

		/**
		 * The type of package; whether native or non native(ruby gems, node.js
		 * packages etc)
		 */
		type?: string | null;
	}


	/**
	 * This message wraps a location affected by a vulnerability and its
	 * associated fix (if one is available).
	 */
	export interface PackageIssue {

		/** The location of the vulnerability. */
		affectedLocation?: VulnerabilityLocation | null;

		/** The location of the vulnerability. */
		fixedLocation?: VulnerabilityLocation | null;

		/**
		 * Deprecated, use Details.effective_severity instead
		 * The severity (e.g., distro assigned severity) for this vulnerability.
		 */
		severityName?: string | null;
	}


	/** Response for creating occurrences in batch. */
	export interface BatchCreateOccurrencesResponse {

		/** The occurrences that were created. */
		occurrences?: Array<Occurrence> | null;
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
		condition?: Expr | null;

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
		members?: Array<string> | null;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string | null;
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
		description?: string | null;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string | null;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string | null;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string | null;
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


	/** Per resource and severity counts of fixable and total vulnerabilities. */
	export interface FixableTotalByDigest {

		/** The number of fixable vulnerabilities associated with this resource. */
		fixableCount?: string | null;

		/** An entity that can have metadata. For example, a Docker image. */
		resource?: Resource | null;

		/**
		 * The severity for this count. SEVERITY_UNSPECIFIED indicates total across
		 * all severities.
		 */
		severity?: VulnerabilitySeverity | null;

		/** The total number of vulnerabilities associated with this resource. */
		totalCount?: string | null;
	}


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions | null;
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
		requestedPolicyVersion?: number | null;
	}


	/**
	 * Metadata for all operations used and required for all operations
	 * that created by Container Analysis Providers
	 */
	export interface GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata {

		/** Output only. The time this operation was created. */
		createTime?: string | null;

		/** Output only. The time that this operation was marked completed or failed. */
		endTime?: string | null;
	}


	/** Response for listing occurrences for a note. */
	export interface ListNoteOccurrencesResponse {

		/** Token to provide to skip to a particular spot in the list. */
		nextPageToken?: string | null;

		/** The occurrences attached to the specified note. */
		occurrences?: Array<Occurrence> | null;
	}


	/** Response for listing notes. */
	export interface ListNotesResponse {

		/**
		 * The next pagination token in the list response. It should be used as
		 * `page_token` for the following request. An empty value means no more
		 * results.
		 */
		nextPageToken?: string | null;

		/** The notes requested. */
		notes?: Array<Note> | null;
	}


	/** Response for listing occurrences. */
	export interface ListOccurrencesResponse {

		/**
		 * The next pagination token in the list response. It should be used as
		 * `page_token` for the following request. An empty value means no more
		 * results.
		 */
		nextPageToken?: string | null;

		/** The occurrences requested. */
		occurrences?: Array<Occurrence> | null;
	}


	/** Response for listing scan configurations. */
	export interface ListScanConfigsResponse {

		/**
		 * The next pagination token in the list response. It should be used as
		 * `page_token` for the following request. An empty value means no more
		 * results.
		 */
		nextPageToken?: string | null;

		/** The scan configurations requested. */
		scanConfigs?: Array<ScanConfig> | null;
	}


	/**
	 * A scan configuration specifies whether Cloud components in a project have a
	 * particular type of analysis being run. For example, it can configure whether
	 * vulnerability scanning is being done on Docker images or not.
	 */
	export interface ScanConfig {

		/** Output only. The time this scan config was created. */
		createTime?: string | null;

		/**
		 * Output only. A human-readable description of what the scan configuration
		 * does.
		 */
		description?: string | null;

		/** Whether the scan is enabled. */
		enabled?: boolean | null;

		/**
		 * Output only. The name of the scan configuration in the form of
		 * `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
		 */
		name?: string | null;

		/** Output only. The time this scan config was last updated. */
		updateTime?: string | null;
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
		bindings?: Array<Binding> | null;

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
		etag?: string | null;

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
		version?: number | null;
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
		policy?: Policy | null;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string> | null;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string> | null;
	}


	/**
	 * A summary of how many vulnerability occurrences there are per resource and
	 * severity type.
	 */
	export interface VulnerabilityOccurrencesSummary {

		/** A listing by resource of the number of fixable and total vulnerabilities. */
		counts?: Array<FixableTotalByDigest> | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified note.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The name of the note in the form of
		 * `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_notes_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified scan configuration.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The name of the scan configuration in the form of
		 * `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_scanConfigs_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified note.
		 * Patch v1beta1/{name}
		 * @param {string} name Required. The name of the note in the form of
		 * `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
		 * @param {string} updateMask The fields to update.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_notes_patch(name: string, updateMask: string | null | undefined, requestBody: Note): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified scan configuration.
		 * Put v1beta1/{name}
		 * @param {string} name Required. The name of the scan configuration in the form of
		 * `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_scanConfigs_update(name: string, requestBody: ScanConfig): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the note attached to the specified occurrence. Consumer projects can
		 * use this method to get a note that belongs to a provider project.
		 * Get v1beta1/{name}/notes
		 * @param {string} name Required. The name of the occurrence in the form of
		 * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_occurrences_getNotes(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/notes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists occurrences referencing the specified note. Provider projects can use
		 * this method to get all occurrences across consumer projects referencing the
		 * specified note.
		 * Get v1beta1/{name}/occurrences
		 * @param {string} name Required. The name of the note to list occurrences for in the form of
		 * `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
		 * @param {string} filter The filter expression.
		 * @param {number} pageSize Number of occurrences to return in the list.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_notes_occurrences_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/occurrences&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists notes for the specified project.
		 * Get v1beta1/{parent}/notes
		 * @param {string} parent Required. The name of the project to list notes for in the form of
		 * `projects/[PROJECT_ID]`.
		 * @param {string} filter The filter expression.
		 * @param {number} pageSize Number of notes to return in the list. Must be positive. Max allowed page
		 * size is 1000. If not specified, page size defaults to 20.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_notes_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new note.
		 * Post v1beta1/{parent}/notes
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which
		 * the note is to be created.
		 * @param {string} noteId Required. The ID to use for this note.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_notes_create(parent: string, noteId: string | null | undefined, requestBody: Note): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notes&noteId=' + (noteId == null ? '' : encodeURIComponent(noteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates new notes in batch.
		 * Post v1beta1/{parent}/notes:batchCreate
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which
		 * the notes are to be created.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_notes_batchCreate(parent: string, requestBody: BatchCreateNotesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notes:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists occurrences for the specified project.
		 * Get v1beta1/{parent}/occurrences
		 * @param {string} parent Required. The name of the project to list occurrences for in the form of
		 * `projects/[PROJECT_ID]`.
		 * @param {string} filter The filter expression.
		 * @param {number} pageSize Number of occurrences to return in the list. Must be positive. Max allowed
		 * page size is 1000. If not specified, page size defaults to 20.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_occurrences_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new occurrence.
		 * Post v1beta1/{parent}/occurrences
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which
		 * the occurrence is to be created.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_occurrences_create(parent: string, requestBody: Occurrence): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates new occurrences in batch.
		 * Post v1beta1/{parent}/occurrences:batchCreate
		 * @param {string} parent Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which
		 * the occurrences are to be created.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_occurrences_batchCreate(parent: string, requestBody: BatchCreateOccurrencesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a summary of the number and severity of occurrences.
		 * Get v1beta1/{parent}/occurrences:vulnerabilitySummary
		 * @param {string} parent Required. The name of the project to get a vulnerability summary for in the form of
		 * `projects/[PROJECT_ID]`.
		 * @param {string} filter The filter expression.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_occurrences_getVulnerabilitySummary(parent: string, filter: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/occurrences:vulnerabilitySummary&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists scan configurations for the specified project.
		 * Get v1beta1/{parent}/scanConfigs
		 * @param {string} parent Required. The name of the project to list scan configurations for in the form of
		 * `projects/[PROJECT_ID]`.
		 * @param {string} filter Required. The filter expression.
		 * @param {number} pageSize The number of scan configs to return in the list.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_scanConfigs_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scanConfigs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a note or an occurrence resource.
		 * Requires `containeranalysis.notes.setIamPolicy` or
		 * `containeranalysis.occurrences.setIamPolicy` permission if the resource is
		 * a note or occurrence, respectively.
		 * The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
		 * notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
		 * occurrences.
		 * Post v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_notes_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on the specified note or occurrence.
		 * Requires `containeranalysis.notes.setIamPolicy` or
		 * `containeranalysis.occurrences.setIamPolicy` permission if the resource is
		 * a note or an occurrence, respectively.
		 * The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
		 * notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
		 * occurrences.
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_notes_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the permissions that a caller has on the specified note or
		 * occurrence. Requires list permission on the project (for example,
		 * `containeranalysis.notes.list`).
		 * The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
		 * notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
		 * occurrences.
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Containeranalysis_projects_notes_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

