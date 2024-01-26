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


	/** AnalyzePackagesMetadata contains metadata for an active scan of a container image. */
	export interface AnalyzePackagesMetadata {

		/** When the scan was created. */
		createTime?: string | null;

		/** The resource URI of the container image being scanned. */
		resourceUri?: string | null;
	}

	/** AnalyzePackagesMetadata contains metadata for an active scan of a container image. */
	export interface AnalyzePackagesMetadataFormProperties {

		/** When the scan was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource URI of the container image being scanned. */
		resourceUri: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzePackagesMetadataFormGroup() {
		return new FormGroup<AnalyzePackagesMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AnalyzePackagesMetadata contains metadata for an active scan of a container image. */
	export interface AnalyzePackagesMetadataV1 {

		/** When the scan was created. */
		createTime?: string | null;

		/** The resource URI of the container image being scanned. */
		resourceUri?: string | null;
	}

	/** AnalyzePackagesMetadata contains metadata for an active scan of a container image. */
	export interface AnalyzePackagesMetadataV1FormProperties {

		/** When the scan was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource URI of the container image being scanned. */
		resourceUri: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzePackagesMetadataV1FormGroup() {
		return new FormGroup<AnalyzePackagesMetadataV1FormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it. */
	export interface AnalyzePackagesRequestV1 {

		/** [DEPRECATED] Whether to include OSV data in the scan. For backwards compatibility reasons, this field can be neither removed nor renamed. */
		includeOsvData?: boolean | null;

		/** The packages to analyze. */
		packages?: Array<PackageData>;

		/** Required. The resource URI of the container image being scanned. */
		resourceUri?: string | null;
	}

	/** AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it. */
	export interface AnalyzePackagesRequestV1FormProperties {

		/** [DEPRECATED] Whether to include OSV data in the scan. For backwards compatibility reasons, this field can be neither removed nor renamed. */
		includeOsvData: FormControl<boolean | null | undefined>,

		/** Required. The resource URI of the container image being scanned. */
		resourceUri: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzePackagesRequestV1FormGroup() {
		return new FormGroup<AnalyzePackagesRequestV1FormProperties>({
			includeOsvData: new FormControl<boolean | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PackageData {

		/** The architecture of the package. */
		architecture?: string | null;

		/** A bundle containing the binary and source information. */
		binarySourceInfo?: Array<BinarySourceInfo>;
		binaryVersion?: PackageVersion;

		/** The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) in which the vulnerability may manifest. Examples include distro or storage location for vulnerable jar. */
		cpeUri?: string | null;

		/** The dependency chain between this package and the user's artifact. List in order from the customer's package under review first, to the current package last. Inclusive of the original package and the current package. */
		dependencyChain?: Array<LanguagePackageDependency>;

		/** The path to the jar file / go binary file. */
		fileLocation?: Array<FileLocation>;

		/** HashDigest stores the SHA512 hash digest of the jar file if the package is of type Maven. This field will be unset for non Maven packages. */
		hashDigest?: string | null;

		/** The list of licenses found that are related to a given package. Note that licenses may also be stored on the BinarySourceInfo. If there is no BinarySourceInfo (because there's no concept of source vs binary), then it will be stored here, while if there are BinarySourceInfos, it will be stored there, as one source can have multiple binaries with different licenses. */
		licenses?: Array<string>;
		maintainer?: Maintainer;

		/** The OS affected by a vulnerability Used to generate the cpe_uri for OS packages */
		os?: string | null;

		/** The version of the OS Used to generate the cpe_uri for OS packages */
		osVersion?: string | null;

		/** The package being analysed for vulnerabilities */
		package?: string | null;

		/** The type of package: os, maven, go, etc. */
		packageType?: PackageDataPackageType | null;

		/** CVEs that this package is no longer vulnerable to go/drydock-dd-custom-binary-scanning */
		patchedCve?: Array<string>;
		sourceVersion?: PackageVersion;
		unused?: string | null;

		/** The version of the package being analysed */
		version?: string | null;
	}
	export interface PackageDataFormProperties {

		/** The architecture of the package. */
		architecture: FormControl<string | null | undefined>,

		/** The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) in which the vulnerability may manifest. Examples include distro or storage location for vulnerable jar. */
		cpeUri: FormControl<string | null | undefined>,

		/** HashDigest stores the SHA512 hash digest of the jar file if the package is of type Maven. This field will be unset for non Maven packages. */
		hashDigest: FormControl<string | null | undefined>,

		/** The OS affected by a vulnerability Used to generate the cpe_uri for OS packages */
		os: FormControl<string | null | undefined>,

		/** The version of the OS Used to generate the cpe_uri for OS packages */
		osVersion: FormControl<string | null | undefined>,

		/** The package being analysed for vulnerabilities */
		package: FormControl<string | null | undefined>,

		/** The type of package: os, maven, go, etc. */
		packageType: FormControl<PackageDataPackageType | null | undefined>,
		unused: FormControl<string | null | undefined>,

		/** The version of the package being analysed */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePackageDataFormGroup() {
		return new FormGroup<PackageDataFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			cpeUri: new FormControl<string | null | undefined>(undefined),
			hashDigest: new FormControl<string | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<PackageDataPackageType | null | undefined>(undefined),
			unused: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BinarySourceInfo {
		binaryVersion?: PackageVersion;
		sourceVersion?: PackageVersion;
	}
	export interface BinarySourceInfoFormProperties {
	}
	export function CreateBinarySourceInfoFormGroup() {
		return new FormGroup<BinarySourceInfoFormProperties>({
		});

	}

	export interface PackageVersion {

		/** The licenses associated with this package. Note that this has to go on the PackageVersion level, because we can have cases with images with the same source having different licences. E.g. in Alpine, musl and musl-utils both have the same origin musl, but have different sets of licenses. */
		licenses?: Array<string>;
		name?: string | null;
		version?: string | null;
	}
	export interface PackageVersionFormProperties {
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreatePackageVersionFormGroup() {
		return new FormGroup<PackageVersionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates a language package available between this package and the customer's resource artifact. */
	export interface LanguagePackageDependency {
		package?: string | null;
		version?: string | null;
	}

	/** Indicates a language package available between this package and the customer's resource artifact. */
	export interface LanguagePackageDependencyFormProperties {
		package: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateLanguagePackageDependencyFormGroup() {
		return new FormGroup<LanguagePackageDependencyFormProperties>({
			package: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates the location at which a package was found. */
	export interface FileLocation {

		/** For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file. */
		filePath?: string | null;
	}

	/** Indicates the location at which a package was found. */
	export interface FileLocationFormProperties {

		/** For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file. */
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateFileLocationFormGroup() {
		return new FormGroup<FileLocationFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Maintainer {
		email?: string | null;
		kind?: string | null;
		name?: string | null;
		url?: string | null;
	}
	export interface MaintainerFormProperties {
		email: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateMaintainerFormGroup() {
		return new FormGroup<MaintainerFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageDataPackageType { PACKAGE_TYPE_UNSPECIFIED = 0, OS = 1, MAVEN = 2, GO = 3, GO_STDLIB = 4, PYPI = 5, NPM = 6, NUGET = 7, RUBYGEMS = 8, RUST = 9, COMPOSER = 10 }


	/** AnalyzePackagesResponse contains the information necessary to find results for the given scan. */
	export interface AnalyzePackagesResponse {

		/** The name of the scan resource created by this successful scan. */
		scan?: string | null;
	}

	/** AnalyzePackagesResponse contains the information necessary to find results for the given scan. */
	export interface AnalyzePackagesResponseFormProperties {

		/** The name of the scan resource created by this successful scan. */
		scan: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzePackagesResponseFormGroup() {
		return new FormGroup<AnalyzePackagesResponseFormProperties>({
			scan: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AnalyzePackagesResponse contains the information necessary to find results for the given scan. */
	export interface AnalyzePackagesResponseV1 {

		/** The name of the scan resource created by this successful scan. */
		scan?: string | null;
	}

	/** AnalyzePackagesResponse contains the information necessary to find results for the given scan. */
	export interface AnalyzePackagesResponseV1FormProperties {

		/** The name of the scan resource created by this successful scan. */
		scan: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzePackagesResponseV1FormGroup() {
		return new FormGroup<AnalyzePackagesResponseV1FormProperties>({
			scan: new FormControl<string | null | undefined>(undefined),
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


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan. */
	export interface ListVulnerabilitiesResponseV1 {

		/** A page token that can be used in a subsequent call to ListVulnerabilities to continue retrieving results. */
		nextPageToken?: string | null;

		/** The list of Vulnerability Occurrences resulting from a scan. */
		occurrences?: Array<Occurrence>;
	}

	/** ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan. */
	export interface ListVulnerabilitiesResponseV1FormProperties {

		/** A page token that can be used in a subsequent call to ListVulnerabilities to continue retrieving results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVulnerabilitiesResponseV1FormGroup() {
		return new FormGroup<ListVulnerabilitiesResponseV1FormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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
		kind?: OccurrenceKind | null;

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
		kind: FormControl<OccurrenceKind | null | undefined>,

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
			kind: new FormControl<OccurrenceKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			noteName: new FormControl<string | null | undefined>(undefined),
			remediation: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OccurrenceKind { NOTE_KIND_UNSPECIFIED = 0, VULNERABILITY = 1, BUILD = 2, IMAGE = 3, PACKAGE = 4, DEPLOYMENT = 5, DISCOVERY = 6, ATTESTATION = 7, UPGRADE = 8, COMPLIANCE = 9, DSSE_ATTESTATION = 10, VULNERABILITY_ASSESSMENT = 11, SBOM_REFERENCE = 12 }


	/** Details on how a particular software package was installed on a system. */
	export interface PackageOccurrence {

		/** Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
		architecture?: PackageOccurrenceArchitecture | null;

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
		architecture: FormControl<PackageOccurrenceArchitecture | null | undefined>,

		/** Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
		cpeUri: FormControl<string | null | undefined>,

		/** Required. Output only. The name of the installed package. */
		name: FormControl<string | null | undefined>,

		/** Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		packageType: FormControl<string | null | undefined>,
	}
	export function CreatePackageOccurrenceFormGroup() {
		return new FormGroup<PackageOccurrenceFormProperties>({
			architecture: new FormControl<PackageOccurrenceArchitecture | null | undefined>(undefined),
			cpeUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageOccurrenceArchitecture { ARCHITECTURE_UNSPECIFIED = 0, X86 = 1, X64 = 2 }


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


	/** An occurrence of a severity vulnerability on a resource. */
	export interface VulnerabilityOccurrence {

		/** Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity. */
		cvssScore?: number | null;

		/** Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version. */
		cvssV2?: CVSS;

		/** Output only. CVSS version used to populate cvss_score and severity. */
		cvssVersion?: VulnerabilityOccurrenceCvssVersion | null;

		/** Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version. */
		cvssv3?: CVSS;

		/** The distro assigned severity for this vulnerability when it is available, otherwise this is the note provider assigned severity. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues. */
		effectiveSeverity?: VulnerabilityOccurrenceEffectiveSeverity | null;

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
		severity?: VulnerabilityOccurrenceEffectiveSeverity | null;

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
		cvssVersion: FormControl<VulnerabilityOccurrenceCvssVersion | null | undefined>,

		/** The distro assigned severity for this vulnerability when it is available, otherwise this is the note provider assigned severity. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues. */
		effectiveSeverity: FormControl<VulnerabilityOccurrenceEffectiveSeverity | null | undefined>,

		/** Occurrence-specific extra details about the vulnerability. */
		extraDetails: FormControl<string | null | undefined>,

		/** Output only. Whether at least one of the affected packages has a fix available. */
		fixAvailable: FormControl<boolean | null | undefined>,

		/** Output only. A detailed description of this vulnerability. */
		longDescription: FormControl<string | null | undefined>,

		/** Output only. The note provider assigned severity of this vulnerability. */
		severity: FormControl<VulnerabilityOccurrenceEffectiveSeverity | null | undefined>,

		/** Output only. A one sentence description of this vulnerability. */
		shortDescription: FormControl<string | null | undefined>,

		/** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityOccurrenceFormGroup() {
		return new FormGroup<VulnerabilityOccurrenceFormProperties>({
			cvssScore: new FormControl<number | null | undefined>(undefined),
			cvssVersion: new FormControl<VulnerabilityOccurrenceCvssVersion | null | undefined>(undefined),
			effectiveSeverity: new FormControl<VulnerabilityOccurrenceEffectiveSeverity | null | undefined>(undefined),
			extraDetails: new FormControl<string | null | undefined>(undefined),
			fixAvailable: new FormControl<boolean | null | undefined>(undefined),
			longDescription: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<VulnerabilityOccurrenceEffectiveSeverity | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VulnerabilityOccurrenceCvssVersion { CVSS_VERSION_UNSPECIFIED = 0, CVSS_VERSION_2 = 1, CVSS_VERSION_3 = 2 }

	export enum VulnerabilityOccurrenceEffectiveSeverity { SEVERITY_UNSPECIFIED = 0, MINIMAL = 1, LOW = 2, MEDIUM = 3, HIGH = 4, CRITICAL = 5 }


	/** A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available). */
	export interface PackageIssue {

		/** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in. */
		affectedCpeUri?: string | null;

		/** Required. The package this vulnerability was found in. */
		affectedPackage?: string | null;

		/** Version contains structured information about the version of a package. */
		affectedVersion?: Version;

		/** Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available. */
		effectiveSeverity?: VulnerabilityOccurrenceEffectiveSeverity | null;

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
		effectiveSeverity: FormControl<VulnerabilityOccurrenceEffectiveSeverity | null | undefined>,

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
			effectiveSeverity: new FormControl<VulnerabilityOccurrenceEffectiveSeverity | null | undefined>(undefined),
			fixAvailable: new FormControl<boolean | null | undefined>(undefined),
			fixedCpeUri: new FormControl<string | null | undefined>(undefined),
			fixedPackage: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
		});

	}


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
		state?: VexAssessmentState | null;

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
		state: FormControl<VexAssessmentState | null | undefined>,

		/** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
		vulnerabilityId: FormControl<string | null | undefined>,
	}
	export function CreateVexAssessmentFormGroup() {
		return new FormGroup<VexAssessmentFormProperties>({
			cve: new FormControl<string | null | undefined>(undefined),
			noteName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<VexAssessmentState | null | undefined>(undefined),
			vulnerabilityId: new FormControl<string | null | undefined>(undefined),
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

	export enum VexAssessmentState { STATE_UNSPECIFIED = 0, AFFECTED = 1, NOT_AFFECTED = 2, FIXED = 3, UNDER_INVESTIGATION = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Ondemandscanning_projects_locations_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Ondemandscanning_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Ondemandscanning_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Ondemandscanning_projects_locations_operations_cancel(name: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
		 * Post v1/{name}:wait
		 * @param {string} name The name of the operation resource to wait on.
		 * @param {string} timeout The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
		 * @return {Operation} Successful response
		 */
		Ondemandscanning_projects_locations_operations_wait(name: string, timeout: string | null | undefined): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':wait&timeout=' + (timeout == null ? '' : encodeURIComponent(timeout)), null, {});
		}

		/**
		 * Initiates an analysis of the provided packages.
		 * Post v1/{parent}/scans:analyzePackages
		 * @param {string} parent Required. The parent of the resource for which analysis is requested. Format: projects/[project_name]/locations/[location]
		 * @return {Operation} Successful response
		 */
		Ondemandscanning_projects_locations_scans_analyzePackages(parent: string, requestBody: AnalyzePackagesRequestV1): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scans:analyzePackages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists vulnerabilities resulting from a successfully completed scan.
		 * Get v1/{parent}/vulnerabilities
		 * @param {string} parent Required. The parent of the collection of Vulnerabilities being requested. Format: projects/[project_name]/locations/[location]/scans/[scan_id]
		 * @param {number} pageSize The number of vulnerabilities to retrieve.
		 * @param {string} pageToken The page token, resulting from a previous call to ListVulnerabilities.
		 * @return {ListVulnerabilitiesResponseV1} Successful response
		 */
		Ondemandscanning_projects_locations_scans_vulnerabilities_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVulnerabilitiesResponseV1> {
			return this.http.get<ListVulnerabilitiesResponseV1>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vulnerabilities&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

