import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response message for KeyDashboardService.ListCryptoKeys. */
	export interface GoogleCloudKmsInventoryV1ListCryptoKeysResponse {

		/** The list of CryptoKeys. */
		cryptoKeys?: Array<GoogleCloudKmsV1CryptoKey>;

		/** The page token returned from the previous response if the next page is desired. */
		nextPageToken?: string | null;
	}

	/** Response message for KeyDashboardService.ListCryptoKeys. */
	export interface GoogleCloudKmsInventoryV1ListCryptoKeysResponseFormProperties {

		/** The page token returned from the previous response if the next page is desired. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudKmsInventoryV1ListCryptoKeysResponseFormGroup() {
		return new FormGroup<GoogleCloudKmsInventoryV1ListCryptoKeysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations. */
	export interface GoogleCloudKmsV1CryptoKey {

		/** Output only. The time at which this CryptoKey was created. */
		createTime?: string | null;

		/** Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/locations/ekmConnections/*`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future. */
		cryptoKeyBackend?: string | null;

		/** Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 24 hours. */
		destroyScheduledDuration?: string | null;

		/** Immutable. Whether this key may contain imported versions only. */
		importOnly?: boolean | null;

		/** Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys). */
		labels?: {[id: string]: string };

		/** Output only. The resource name for this CryptoKey in the format `projects/locations/keyRings/cryptoKeys/*`. */
		name?: string | null;

		/** At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted. */
		nextRotationTime?: string | null;

		/** A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS. */
		primary?: GoogleCloudKmsV1CryptoKeyVersion;

		/** Immutable. The immutable purpose of this CryptoKey. */
		purpose?: GoogleCloudKmsV1CryptoKeyPurpose | null;

		/** next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted. */
		rotationPeriod?: string | null;

		/** A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation. */
		versionTemplate?: GoogleCloudKmsV1CryptoKeyVersionTemplate;
	}

	/** A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations. */
	export interface GoogleCloudKmsV1CryptoKeyFormProperties {

		/** Output only. The time at which this CryptoKey was created. */
		createTime: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/locations/ekmConnections/*`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future. */
		cryptoKeyBackend: FormControl<string | null | undefined>,

		/** Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 24 hours. */
		destroyScheduledDuration: FormControl<string | null | undefined>,

		/** Immutable. Whether this key may contain imported versions only. */
		importOnly: FormControl<boolean | null | undefined>,

		/** Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource name for this CryptoKey in the format `projects/locations/keyRings/cryptoKeys/*`. */
		name: FormControl<string | null | undefined>,

		/** At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted. */
		nextRotationTime: FormControl<string | null | undefined>,

		/** Immutable. The immutable purpose of this CryptoKey. */
		purpose: FormControl<GoogleCloudKmsV1CryptoKeyPurpose | null | undefined>,

		/** next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted. */
		rotationPeriod: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudKmsV1CryptoKeyFormGroup() {
		return new FormGroup<GoogleCloudKmsV1CryptoKeyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			cryptoKeyBackend: new FormControl<string | null | undefined>(undefined),
			destroyScheduledDuration: new FormControl<string | null | undefined>(undefined),
			importOnly: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nextRotationTime: new FormControl<string | null | undefined>(undefined),
			purpose: new FormControl<GoogleCloudKmsV1CryptoKeyPurpose | null | undefined>(undefined),
			rotationPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS. */
	export interface GoogleCloudKmsV1CryptoKeyVersion {

		/** Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports. */
		algorithm?: GoogleCloudKmsV1CryptoKeyVersionAlgorithm | null;

		/** Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key). */
		attestation?: GoogleCloudKmsV1KeyOperationAttestation;

		/** Output only. The time at which this CryptoKeyVersion was created. */
		createTime?: string | null;

		/** Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED. */
		destroyEventTime?: string | null;

		/** Output only. The time this CryptoKeyVersion's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED. */
		destroyTime?: string | null;

		/** Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED. */
		externalDestructionFailureReason?: string | null;

		/** ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels. */
		externalProtectionLevelOptions?: GoogleCloudKmsV1ExternalProtectionLevelOptions;

		/** Output only. The time this CryptoKeyVersion's key material was generated. */
		generateTime?: string | null;

		/** Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED. */
		generationFailureReason?: string | null;

		/** Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED. */
		importFailureReason?: string | null;

		/** Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion. Only present if the underlying key material was imported. */
		importJob?: string | null;

		/** Output only. The time at which this CryptoKeyVersion's key material was most recently imported. */
		importTime?: string | null;

		/** Output only. The resource name for this CryptoKeyVersion in the format `projects/locations/keyRings/cryptoKeys/cryptoKeyVersions/*`. */
		name?: string | null;

		/** Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion. */
		protectionLevel?: GoogleCloudKmsV1CryptoKeyVersionProtectionLevel | null;

		/** Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version. */
		reimportEligible?: boolean | null;

		/** The current state of the CryptoKeyVersion. */
		state?: GoogleCloudKmsV1CryptoKeyVersionState | null;
	}

	/** A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS. */
	export interface GoogleCloudKmsV1CryptoKeyVersionFormProperties {

		/** Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports. */
		algorithm: FormControl<GoogleCloudKmsV1CryptoKeyVersionAlgorithm | null | undefined>,

		/** Output only. The time at which this CryptoKeyVersion was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED. */
		destroyEventTime: FormControl<string | null | undefined>,

		/** Output only. The time this CryptoKeyVersion's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED. */
		destroyTime: FormControl<string | null | undefined>,

		/** Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED. */
		externalDestructionFailureReason: FormControl<string | null | undefined>,

		/** Output only. The time this CryptoKeyVersion's key material was generated. */
		generateTime: FormControl<string | null | undefined>,

		/** Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED. */
		generationFailureReason: FormControl<string | null | undefined>,

		/** Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED. */
		importFailureReason: FormControl<string | null | undefined>,

		/** Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion. Only present if the underlying key material was imported. */
		importJob: FormControl<string | null | undefined>,

		/** Output only. The time at which this CryptoKeyVersion's key material was most recently imported. */
		importTime: FormControl<string | null | undefined>,

		/** Output only. The resource name for this CryptoKeyVersion in the format `projects/locations/keyRings/cryptoKeys/cryptoKeyVersions/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion. */
		protectionLevel: FormControl<GoogleCloudKmsV1CryptoKeyVersionProtectionLevel | null | undefined>,

		/** Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version. */
		reimportEligible: FormControl<boolean | null | undefined>,

		/** The current state of the CryptoKeyVersion. */
		state: FormControl<GoogleCloudKmsV1CryptoKeyVersionState | null | undefined>,
	}
	export function CreateGoogleCloudKmsV1CryptoKeyVersionFormGroup() {
		return new FormGroup<GoogleCloudKmsV1CryptoKeyVersionFormProperties>({
			algorithm: new FormControl<GoogleCloudKmsV1CryptoKeyVersionAlgorithm | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			destroyEventTime: new FormControl<string | null | undefined>(undefined),
			destroyTime: new FormControl<string | null | undefined>(undefined),
			externalDestructionFailureReason: new FormControl<string | null | undefined>(undefined),
			generateTime: new FormControl<string | null | undefined>(undefined),
			generationFailureReason: new FormControl<string | null | undefined>(undefined),
			importFailureReason: new FormControl<string | null | undefined>(undefined),
			importJob: new FormControl<string | null | undefined>(undefined),
			importTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<GoogleCloudKmsV1CryptoKeyVersionProtectionLevel | null | undefined>(undefined),
			reimportEligible: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<GoogleCloudKmsV1CryptoKeyVersionState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudKmsV1CryptoKeyVersionAlgorithm { CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED = 'CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED', GOOGLE_SYMMETRIC_ENCRYPTION = 'GOOGLE_SYMMETRIC_ENCRYPTION', AES_128_GCM = 'AES_128_GCM', AES_256_GCM = 'AES_256_GCM', AES_128_CBC = 'AES_128_CBC', AES_256_CBC = 'AES_256_CBC', AES_128_CTR = 'AES_128_CTR', AES_256_CTR = 'AES_256_CTR', RSA_SIGN_PSS_2048_SHA256 = 'RSA_SIGN_PSS_2048_SHA256', RSA_SIGN_PSS_3072_SHA256 = 'RSA_SIGN_PSS_3072_SHA256', RSA_SIGN_PSS_4096_SHA256 = 'RSA_SIGN_PSS_4096_SHA256', RSA_SIGN_PSS_4096_SHA512 = 'RSA_SIGN_PSS_4096_SHA512', RSA_SIGN_PKCS1_2048_SHA256 = 'RSA_SIGN_PKCS1_2048_SHA256', RSA_SIGN_PKCS1_3072_SHA256 = 'RSA_SIGN_PKCS1_3072_SHA256', RSA_SIGN_PKCS1_4096_SHA256 = 'RSA_SIGN_PKCS1_4096_SHA256', RSA_SIGN_PKCS1_4096_SHA512 = 'RSA_SIGN_PKCS1_4096_SHA512', RSA_SIGN_RAW_PKCS1_2048 = 'RSA_SIGN_RAW_PKCS1_2048', RSA_SIGN_RAW_PKCS1_3072 = 'RSA_SIGN_RAW_PKCS1_3072', RSA_SIGN_RAW_PKCS1_4096 = 'RSA_SIGN_RAW_PKCS1_4096', RSA_DECRYPT_OAEP_2048_SHA256 = 'RSA_DECRYPT_OAEP_2048_SHA256', RSA_DECRYPT_OAEP_3072_SHA256 = 'RSA_DECRYPT_OAEP_3072_SHA256', RSA_DECRYPT_OAEP_4096_SHA256 = 'RSA_DECRYPT_OAEP_4096_SHA256', RSA_DECRYPT_OAEP_4096_SHA512 = 'RSA_DECRYPT_OAEP_4096_SHA512', RSA_DECRYPT_OAEP_2048_SHA1 = 'RSA_DECRYPT_OAEP_2048_SHA1', RSA_DECRYPT_OAEP_3072_SHA1 = 'RSA_DECRYPT_OAEP_3072_SHA1', RSA_DECRYPT_OAEP_4096_SHA1 = 'RSA_DECRYPT_OAEP_4096_SHA1', EC_SIGN_P256_SHA256 = 'EC_SIGN_P256_SHA256', EC_SIGN_P384_SHA384 = 'EC_SIGN_P384_SHA384', EC_SIGN_SECP256K1_SHA256 = 'EC_SIGN_SECP256K1_SHA256', HMAC_SHA256 = 'HMAC_SHA256', HMAC_SHA1 = 'HMAC_SHA1', HMAC_SHA384 = 'HMAC_SHA384', HMAC_SHA512 = 'HMAC_SHA512', HMAC_SHA224 = 'HMAC_SHA224', EXTERNAL_SYMMETRIC_ENCRYPTION = 'EXTERNAL_SYMMETRIC_ENCRYPTION' }


	/** Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key). */
	export interface GoogleCloudKmsV1KeyOperationAttestation {

		/** Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2. */
		certChains?: GoogleCloudKmsV1KeyOperationAttestationCertificateChains;

		/** Output only. The attestation data provided by the HSM when the key operation was performed. */
		content?: string | null;

		/** Output only. The format of the attestation data. */
		format?: GoogleCloudKmsV1KeyOperationAttestationFormat | null;
	}

	/** Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key). */
	export interface GoogleCloudKmsV1KeyOperationAttestationFormProperties {

		/** Output only. The attestation data provided by the HSM when the key operation was performed. */
		content: FormControl<string | null | undefined>,

		/** Output only. The format of the attestation data. */
		format: FormControl<GoogleCloudKmsV1KeyOperationAttestationFormat | null | undefined>,
	}
	export function CreateGoogleCloudKmsV1KeyOperationAttestationFormGroup() {
		return new FormGroup<GoogleCloudKmsV1KeyOperationAttestationFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<GoogleCloudKmsV1KeyOperationAttestationFormat | null | undefined>(undefined),
		});

	}


	/** Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2. */
	export interface GoogleCloudKmsV1KeyOperationAttestationCertificateChains {

		/** Cavium certificate chain corresponding to the attestation. */
		caviumCerts?: Array<string>;

		/** Google card certificate chain corresponding to the attestation. */
		googleCardCerts?: Array<string>;

		/** Google partition certificate chain corresponding to the attestation. */
		googlePartitionCerts?: Array<string>;
	}

	/** Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2. */
	export interface GoogleCloudKmsV1KeyOperationAttestationCertificateChainsFormProperties {
	}
	export function CreateGoogleCloudKmsV1KeyOperationAttestationCertificateChainsFormGroup() {
		return new FormGroup<GoogleCloudKmsV1KeyOperationAttestationCertificateChainsFormProperties>({
		});

	}

	export enum GoogleCloudKmsV1KeyOperationAttestationFormat { ATTESTATION_FORMAT_UNSPECIFIED = 'ATTESTATION_FORMAT_UNSPECIFIED', CAVIUM_V1_COMPRESSED = 'CAVIUM_V1_COMPRESSED', CAVIUM_V2_COMPRESSED = 'CAVIUM_V2_COMPRESSED' }


	/** ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels. */
	export interface GoogleCloudKmsV1ExternalProtectionLevelOptions {

		/** The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of external_key_uri when using an EkmConnection. */
		ekmConnectionKeyPath?: string | null;

		/** The URI for an external resource that this CryptoKeyVersion represents. */
		externalKeyUri?: string | null;
	}

	/** ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels. */
	export interface GoogleCloudKmsV1ExternalProtectionLevelOptionsFormProperties {

		/** The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of external_key_uri when using an EkmConnection. */
		ekmConnectionKeyPath: FormControl<string | null | undefined>,

		/** The URI for an external resource that this CryptoKeyVersion represents. */
		externalKeyUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudKmsV1ExternalProtectionLevelOptionsFormGroup() {
		return new FormGroup<GoogleCloudKmsV1ExternalProtectionLevelOptionsFormProperties>({
			ekmConnectionKeyPath: new FormControl<string | null | undefined>(undefined),
			externalKeyUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudKmsV1CryptoKeyVersionProtectionLevel { PROTECTION_LEVEL_UNSPECIFIED = 'PROTECTION_LEVEL_UNSPECIFIED', SOFTWARE = 'SOFTWARE', HSM = 'HSM', EXTERNAL = 'EXTERNAL', EXTERNAL_VPC = 'EXTERNAL_VPC' }

	export enum GoogleCloudKmsV1CryptoKeyVersionState { CRYPTO_KEY_VERSION_STATE_UNSPECIFIED = 'CRYPTO_KEY_VERSION_STATE_UNSPECIFIED', PENDING_GENERATION = 'PENDING_GENERATION', ENABLED = 'ENABLED', DISABLED = 'DISABLED', DESTROYED = 'DESTROYED', DESTROY_SCHEDULED = 'DESTROY_SCHEDULED', PENDING_IMPORT = 'PENDING_IMPORT', IMPORT_FAILED = 'IMPORT_FAILED', GENERATION_FAILED = 'GENERATION_FAILED', PENDING_EXTERNAL_DESTRUCTION = 'PENDING_EXTERNAL_DESTRUCTION', EXTERNAL_DESTRUCTION_FAILED = 'EXTERNAL_DESTRUCTION_FAILED' }

	export enum GoogleCloudKmsV1CryptoKeyPurpose { CRYPTO_KEY_PURPOSE_UNSPECIFIED = 'CRYPTO_KEY_PURPOSE_UNSPECIFIED', ENCRYPT_DECRYPT = 'ENCRYPT_DECRYPT', ASYMMETRIC_SIGN = 'ASYMMETRIC_SIGN', ASYMMETRIC_DECRYPT = 'ASYMMETRIC_DECRYPT', RAW_ENCRYPT_DECRYPT = 'RAW_ENCRYPT_DECRYPT', MAC = 'MAC' }


	/** A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation. */
	export interface GoogleCloudKmsV1CryptoKeyVersionTemplate {

		/** Required. Algorithm to use when creating a CryptoKeyVersion based on this template. For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT. */
		algorithm?: GoogleCloudKmsV1CryptoKeyVersionAlgorithm | null;

		/** ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE. */
		protectionLevel?: GoogleCloudKmsV1CryptoKeyVersionProtectionLevel | null;
	}

	/** A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation. */
	export interface GoogleCloudKmsV1CryptoKeyVersionTemplateFormProperties {

		/** Required. Algorithm to use when creating a CryptoKeyVersion based on this template. For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT. */
		algorithm: FormControl<GoogleCloudKmsV1CryptoKeyVersionAlgorithm | null | undefined>,

		/** ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE. */
		protectionLevel: FormControl<GoogleCloudKmsV1CryptoKeyVersionProtectionLevel | null | undefined>,
	}
	export function CreateGoogleCloudKmsV1CryptoKeyVersionTemplateFormGroup() {
		return new FormGroup<GoogleCloudKmsV1CryptoKeyVersionTemplateFormProperties>({
			algorithm: new FormControl<GoogleCloudKmsV1CryptoKeyVersionAlgorithm | null | undefined>(undefined),
			protectionLevel: new FormControl<GoogleCloudKmsV1CryptoKeyVersionProtectionLevel | null | undefined>(undefined),
		});

	}


	/** Metadata about a resource protected by a Cloud KMS key. */
	export interface GoogleCloudKmsInventoryV1ProtectedResource {

		/** The Cloud product that owns the resource. Example: `compute` */
		cloudProduct?: string | null;

		/** Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0. */
		createTime?: string | null;

		/** The name of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of crypto_key_versions. */
		cryptoKeyVersion?: string | null;

		/** The names of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key versions data to Asset Inventory. The first element of this field is stored in crypto_key_version. */
		cryptoKeyVersions?: Array<string>;

		/** A key-value pair of the resource's labels (v1) to their values. */
		labels?: {[id: string]: string };

		/** Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`. */
		location?: string | null;

		/** The full resource name of the resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. */
		name?: string | null;

		/** Format: `projects/{PROJECT_NUMBER}`. */
		project?: string | null;

		/** The ID of the project that owns the resource. */
		projectId?: string | null;

		/** Example: `compute.googleapis.com/Disk` */
		resourceType?: string | null;
	}

	/** Metadata about a resource protected by a Cloud KMS key. */
	export interface GoogleCloudKmsInventoryV1ProtectedResourceFormProperties {

		/** The Cloud product that owns the resource. Example: `compute` */
		cloudProduct: FormControl<string | null | undefined>,

		/** Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of crypto_key_versions. */
		cryptoKeyVersion: FormControl<string | null | undefined>,

		/** A key-value pair of the resource's labels (v1) to their values. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`. */
		location: FormControl<string | null | undefined>,

		/** The full resource name of the resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. */
		name: FormControl<string | null | undefined>,

		/** Format: `projects/{PROJECT_NUMBER}`. */
		project: FormControl<string | null | undefined>,

		/** The ID of the project that owns the resource. */
		projectId: FormControl<string | null | undefined>,

		/** Example: `compute.googleapis.com/Disk` */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudKmsInventoryV1ProtectedResourceFormGroup() {
		return new FormGroup<GoogleCloudKmsInventoryV1ProtectedResourceFormProperties>({
			cloudProduct: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			cryptoKeyVersion: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key. */
	export interface GoogleCloudKmsInventoryV1ProtectedResourcesSummary {

		/** The number of resources protected by the key grouped by Cloud product. */
		cloudProducts?: {[id: string]: string };

		/** The number of resources protected by the key grouped by region. */
		locations?: {[id: string]: string };

		/** The full name of the ProtectedResourcesSummary resource. Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary */
		name?: string | null;

		/**
		 * The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		projectCount?: number | null;

		/** The total number of protected resources in the same Cloud organization as the key. */
		resourceCount?: string | null;

		/** The number of resources protected by the key grouped by resource type. */
		resourceTypes?: {[id: string]: string };
	}

	/** Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key. */
	export interface GoogleCloudKmsInventoryV1ProtectedResourcesSummaryFormProperties {

		/** The number of resources protected by the key grouped by Cloud product. */
		cloudProducts: FormControl<{[id: string]: string } | null | undefined>,

		/** The number of resources protected by the key grouped by region. */
		locations: FormControl<{[id: string]: string } | null | undefined>,

		/** The full name of the ProtectedResourcesSummary resource. Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary */
		name: FormControl<string | null | undefined>,

		/**
		 * The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		projectCount: FormControl<number | null | undefined>,

		/** The total number of protected resources in the same Cloud organization as the key. */
		resourceCount: FormControl<string | null | undefined>,

		/** The number of resources protected by the key grouped by resource type. */
		resourceTypes: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudKmsInventoryV1ProtectedResourcesSummaryFormGroup() {
		return new FormGroup<GoogleCloudKmsInventoryV1ProtectedResourcesSummaryFormProperties>({
			cloudProducts: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectCount: new FormControl<number | null | undefined>(undefined),
			resourceCount: new FormControl<string | null | undefined>(undefined),
			resourceTypes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Response message for KeyTrackingService.SearchProtectedResources. */
	export interface GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Protected resources for this page. */
		protectedResources?: Array<GoogleCloudKmsInventoryV1ProtectedResource>;
	}

	/** Response message for KeyTrackingService.SearchProtectedResources. */
	export interface GoogleCloudKmsInventoryV1SearchProtectedResourcesResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudKmsInventoryV1SearchProtectedResourcesResponseFormGroup() {
		return new FormGroup<GoogleCloudKmsInventoryV1SearchProtectedResourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.
		 * Get v1/{name}/protectedResourcesSummary
		 * @param {string} name Required. The resource name of the CryptoKey.
		 * @return {GoogleCloudKmsInventoryV1ProtectedResourcesSummary} Successful response
		 */
		Kmsinventory_projects_locations_keyRings_cryptoKeys_getProtectedResourcesSummary(name: string): Observable<GoogleCloudKmsInventoryV1ProtectedResourcesSummary> {
			return this.http.get<GoogleCloudKmsInventoryV1ProtectedResourcesSummary>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/protectedResourcesSummary', {});
		}

		/**
		 * Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.
		 * Get v1/{parent}/cryptoKeys
		 * @param {string} parent Required. The Google Cloud project for which to retrieve key metadata, in the format `projects/*`
		 * @param {number} pageSize Optional. The maximum number of keys to return. The service may return fewer than this value. If unspecified, at most 1000 keys will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Pass this into a subsequent request in order to receive the next page of results.
		 * @return {GoogleCloudKmsInventoryV1ListCryptoKeysResponse} Successful response
		 */
		Kmsinventory_projects_cryptoKeys_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudKmsInventoryV1ListCryptoKeysResponse> {
			return this.http.get<GoogleCloudKmsInventoryV1ListCryptoKeysResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeys&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.
		 * Get v1/{scope}/protectedResources:search
		 * @param {string} scope Required. Resource name of the organization. Example: organizations/123
		 * @param {string} cryptoKey Required. The resource name of the CryptoKey.
		 * @param {number} pageSize The maximum number of resources to return. The service may return fewer than this value. If unspecified, at most 500 resources will be returned. The maximum value is 500; values above 500 will be coerced to 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous KeyTrackingService.SearchProtectedResources call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to KeyTrackingService.SearchProtectedResources must match the call that provided the page token.
		 * @param {Array<string>} resourceTypes Optional. A list of resource types that this request searches for. If empty, it will search all the [trackable resource types](https://cloud.google.com/kms/docs/view-key-usage#tracked-resource-types). Regular expressions are also supported. For example: * `compute.googleapis.com.*` snapshots resources whose type starts with `compute.googleapis.com`. * `.*Image` snapshots resources whose type ends with `Image`. * `.*Image.*` snapshots resources whose type contains `Image`. See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported resource type, an INVALID_ARGUMENT error will be returned.
		 * @return {GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse} Successful response
		 */
		Kmsinventory_organizations_protectedResources_search(scope: string, cryptoKey: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, resourceTypes: Array<string> | null | undefined): Observable<GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse> {
			return this.http.get<GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse>(this.baseUri + 'v1/' + (scope == null ? '' : encodeURIComponent(scope)) + '/protectedResources:search&cryptoKey=' + (cryptoKey == null ? '' : encodeURIComponent(cryptoKey)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + resourceTypes?.map(z => `resourceTypes=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

}

