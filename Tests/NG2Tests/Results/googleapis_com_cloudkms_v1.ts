import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request message for KeyManagementService.AsymmetricDecrypt. */
	export interface AsymmetricDecryptRequest {

		/**
		 * Required. The data encrypted with the named CryptoKeyVersion's public
		 * key using OAEP.
		 */
		ciphertext?: string | null;
	}

	/** Request message for KeyManagementService.AsymmetricDecrypt. */
	export interface AsymmetricDecryptRequestFormProperties {

		/**
		 * Required. The data encrypted with the named CryptoKeyVersion's public
		 * key using OAEP.
		 */
		ciphertext: FormControl<string | null | undefined>,
	}
	export function CreateAsymmetricDecryptRequestFormGroup() {
		return new FormGroup<AsymmetricDecryptRequestFormProperties>({
			ciphertext: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.AsymmetricDecrypt. */
	export interface AsymmetricDecryptResponse {

		/** The decrypted data originally encrypted with the matching public key. */
		plaintext?: string | null;
	}

	/** Response message for KeyManagementService.AsymmetricDecrypt. */
	export interface AsymmetricDecryptResponseFormProperties {

		/** The decrypted data originally encrypted with the matching public key. */
		plaintext: FormControl<string | null | undefined>,
	}
	export function CreateAsymmetricDecryptResponseFormGroup() {
		return new FormGroup<AsymmetricDecryptResponseFormProperties>({
			plaintext: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.AsymmetricSign. */
	export interface AsymmetricSignRequest {

		/** A Digest holds a cryptographic message digest. */
		digest?: Digest;
	}

	/** Request message for KeyManagementService.AsymmetricSign. */
	export interface AsymmetricSignRequestFormProperties {
	}
	export function CreateAsymmetricSignRequestFormGroup() {
		return new FormGroup<AsymmetricSignRequestFormProperties>({
		});

	}


	/** A Digest holds a cryptographic message digest. */
	export interface Digest {

		/** A message digest produced with the SHA-256 algorithm. */
		sha256?: string | null;

		/** A message digest produced with the SHA-384 algorithm. */
		sha384?: string | null;

		/** A message digest produced with the SHA-512 algorithm. */
		sha512?: string | null;
	}

	/** A Digest holds a cryptographic message digest. */
	export interface DigestFormProperties {

		/** A message digest produced with the SHA-256 algorithm. */
		sha256: FormControl<string | null | undefined>,

		/** A message digest produced with the SHA-384 algorithm. */
		sha384: FormControl<string | null | undefined>,

		/** A message digest produced with the SHA-512 algorithm. */
		sha512: FormControl<string | null | undefined>,
	}
	export function CreateDigestFormGroup() {
		return new FormGroup<DigestFormProperties>({
			sha256: new FormControl<string | null | undefined>(undefined),
			sha384: new FormControl<string | null | undefined>(undefined),
			sha512: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.AsymmetricSign. */
	export interface AsymmetricSignResponse {

		/** The created signature. */
		signature?: string | null;
	}

	/** Response message for KeyManagementService.AsymmetricSign. */
	export interface AsymmetricSignResponseFormProperties {

		/** The created signature. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateAsymmetricSignResponseFormGroup() {
		return new FormGroup<AsymmetricSignResponseFormProperties>({
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Specifies the audit configuration for a service.
	 * The configuration determines which permission types are logged, and what
	 * identities, if any, are exempted from logging.
	 * An AuditConfig must have one or more AuditLogConfigs.
	 * If there are AuditConfigs for both `allServices` and a specific service,
	 * the union of the two AuditConfigs is used for that service: the log_types
	 * specified in each AuditConfig are enabled, and the exempted_members in each
	 * AuditLogConfig are exempted.
	 * Example Policy with multiple AuditConfigs:
	 *     {
	 *       "audit_configs": [
	 *         {
	 *           "service": "allServices"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *               "exempted_members": [
	 *                 "user:jose@example.com"
	 *               ]
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *             },
	 *             {
	 *               "log_type": "ADMIN_READ",
	 *             }
	 *           ]
	 *         },
	 *         {
	 *           "service": "sampleservice.googleapis.com"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *               "exempted_members": [
	 *                 "user:aliya@example.com"
	 *               ]
	 *             }
	 *           ]
	 *         }
	 *       ]
	 *     }
	 * For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
	 * logging. It also exempts jose@example.com from DATA_READ logging, and
	 * aliya@example.com from DATA_WRITE logging.
	 */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service?: string | null;
	}

	/**
	 * Specifies the audit configuration for a service.
	 * The configuration determines which permission types are logged, and what
	 * identities, if any, are exempted from logging.
	 * An AuditConfig must have one or more AuditLogConfigs.
	 * If there are AuditConfigs for both `allServices` and a specific service,
	 * the union of the two AuditConfigs is used for that service: the log_types
	 * specified in each AuditConfig are enabled, and the exempted_members in each
	 * AuditLogConfig are exempted.
	 * Example Policy with multiple AuditConfigs:
	 *     {
	 *       "audit_configs": [
	 *         {
	 *           "service": "allServices"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *               "exempted_members": [
	 *                 "user:jose@example.com"
	 *               ]
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *             },
	 *             {
	 *               "log_type": "ADMIN_READ",
	 *             }
	 *           ]
	 *         },
	 *         {
	 *           "service": "sampleservice.googleapis.com"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *               "exempted_members": [
	 *                 "user:aliya@example.com"
	 *               ]
	 *             }
	 *           ]
	 *         }
	 *       ]
	 *     }
	 * For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
	 * logging. It also exempts jose@example.com from DATA_READ logging, and
	 * aliya@example.com from DATA_WRITE logging.
	 */
	export interface AuditConfigFormProperties {

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Provides the configuration for logging a type of permissions.
	 * Example:
	 *     {
	 *       "audit_log_configs": [
	 *         {
	 *           "log_type": "DATA_READ",
	 *           "exempted_members": [
	 *             "user:jose@example.com"
	 *           ]
	 *         },
	 *         {
	 *           "log_type": "DATA_WRITE",
	 *         }
	 *       ]
	 *     }
	 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
	 * jose@example.com from DATA_READ logging.
	 */
	export interface AuditLogConfig {

		/**
		 * Specifies the identities that do not cause logging for this type of
		 * permission.
		 * Follows the same format of Binding.members.
		 */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	/**
	 * Provides the configuration for logging a type of permissions.
	 * Example:
	 *     {
	 *       "audit_log_configs": [
	 *         {
	 *           "log_type": "DATA_READ",
	 *           "exempted_members": [
	 *             "user:jose@example.com"
	 *           ]
	 *         },
	 *         {
	 *           "log_type": "DATA_WRITE",
	 *         }
	 *       ]
	 *     }
	 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
	 * jose@example.com from DATA_READ logging.
	 */
	export interface AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<AuditLogConfigLogType | null | undefined>,
	}
	export function CreateAuditLogConfigFormGroup() {
		return new FormGroup<AuditLogConfigFormProperties>({
			logType: new FormControl<AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


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
		role?: string | null;
	}

	/** Associates `members` with a `role`. */
	export interface BindingFormProperties {

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface ExprFormProperties {

		/**
		 * Optional. Description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression: FormControl<string | null | undefined>,

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
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


	/**
	 * A CryptoKey represents a logical key that can be used for cryptographic
	 * operations.
	 * A CryptoKey is made up of one or more versions, which
	 * represent the actual key material used in cryptographic operations.
	 */
	export interface CryptoKey {

		/** Output only. The time at which this CryptoKey was created. */
		createTime?: string | null;

		/**
		 * Labels with user-defined metadata. For more information, see
		 * [Labeling Keys](/kms/docs/labeling-keys).
		 */
		labels?: {[id: string]: string };

		/**
		 * Output only. The resource name for this CryptoKey in the format
		 * `projects/locations/keyRings/cryptoKeys/*`.
		 */
		name?: string | null;

		/**
		 * At next_rotation_time, the Key Management Service will automatically:
		 * 1. Create a new version of this CryptoKey.
		 * 2. Mark the new version as primary.
		 * Key rotations performed manually via
		 * CreateCryptoKeyVersion and
		 * UpdateCryptoKeyPrimaryVersion
		 * do not affect next_rotation_time.
		 * Keys with purpose
		 * ENCRYPT_DECRYPT support
		 * automatic rotation. For other keys, this field must be omitted.
		 */
		nextRotationTime?: string | null;

		/**
		 * A CryptoKeyVersion represents an individual cryptographic key, and the
		 * associated key material.
		 * An ENABLED version can be
		 * used for cryptographic operations.
		 * For security reasons, the raw cryptographic key material represented by a
		 * CryptoKeyVersion can never be viewed or exported. It can only be used to
		 * encrypt, decrypt, or sign data when an authorized user or application invokes
		 * Cloud KMS.
		 */
		primary?: CryptoKeyVersion;

		/** Immutable. The immutable purpose of this CryptoKey. */
		purpose?: CryptoKeyPurpose | null;

		/**
		 * next_rotation_time will be advanced by this period when the service
		 * automatically rotates a key. Must be at least 24 hours and at most
		 * 876,000 hours.
		 * If rotation_period is set, next_rotation_time must also be set.
		 * Keys with purpose
		 * ENCRYPT_DECRYPT support
		 * automatic rotation. For other keys, this field must be omitted.
		 */
		rotationPeriod?: string | null;

		/**
		 * A CryptoKeyVersionTemplate specifies the properties to use when creating
		 * a new CryptoKeyVersion, either manually with
		 * CreateCryptoKeyVersion or
		 * automatically as a result of auto-rotation.
		 */
		versionTemplate?: CryptoKeyVersionTemplate;
	}

	/**
	 * A CryptoKey represents a logical key that can be used for cryptographic
	 * operations.
	 * A CryptoKey is made up of one or more versions, which
	 * represent the actual key material used in cryptographic operations.
	 */
	export interface CryptoKeyFormProperties {

		/** Output only. The time at which this CryptoKey was created. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Labels with user-defined metadata. For more information, see
		 * [Labeling Keys](/kms/docs/labeling-keys).
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Output only. The resource name for this CryptoKey in the format
		 * `projects/locations/keyRings/cryptoKeys/*`.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * At next_rotation_time, the Key Management Service will automatically:
		 * 1. Create a new version of this CryptoKey.
		 * 2. Mark the new version as primary.
		 * Key rotations performed manually via
		 * CreateCryptoKeyVersion and
		 * UpdateCryptoKeyPrimaryVersion
		 * do not affect next_rotation_time.
		 * Keys with purpose
		 * ENCRYPT_DECRYPT support
		 * automatic rotation. For other keys, this field must be omitted.
		 */
		nextRotationTime: FormControl<string | null | undefined>,

		/** Immutable. The immutable purpose of this CryptoKey. */
		purpose: FormControl<CryptoKeyPurpose | null | undefined>,

		/**
		 * next_rotation_time will be advanced by this period when the service
		 * automatically rotates a key. Must be at least 24 hours and at most
		 * 876,000 hours.
		 * If rotation_period is set, next_rotation_time must also be set.
		 * Keys with purpose
		 * ENCRYPT_DECRYPT support
		 * automatic rotation. For other keys, this field must be omitted.
		 */
		rotationPeriod: FormControl<string | null | undefined>,
	}
	export function CreateCryptoKeyFormGroup() {
		return new FormGroup<CryptoKeyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nextRotationTime: new FormControl<string | null | undefined>(undefined),
			purpose: new FormControl<CryptoKeyPurpose | null | undefined>(undefined),
			rotationPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A CryptoKeyVersion represents an individual cryptographic key, and the
	 * associated key material.
	 * An ENABLED version can be
	 * used for cryptographic operations.
	 * For security reasons, the raw cryptographic key material represented by a
	 * CryptoKeyVersion can never be viewed or exported. It can only be used to
	 * encrypt, decrypt, or sign data when an authorized user or application invokes
	 * Cloud KMS.
	 */
	export interface CryptoKeyVersion {

		/**
		 * Output only. The CryptoKeyVersionAlgorithm that this
		 * CryptoKeyVersion supports.
		 */
		algorithm?: CryptoKeyVersionAlgorithm | null;

		/**
		 * Contains an HSM-generated attestation about a key operation. For more
		 * information, see [Verifying attestations]
		 * (https://cloud.google.com/kms/docs/attest-key).
		 */
		attestation?: KeyOperationAttestation;

		/** Output only. The time at which this CryptoKeyVersion was created. */
		createTime?: string | null;

		/**
		 * Output only. The time this CryptoKeyVersion's key material was
		 * destroyed. Only present if state is
		 * DESTROYED.
		 */
		destroyEventTime?: string | null;

		/**
		 * Output only. The time this CryptoKeyVersion's key material is scheduled
		 * for destruction. Only present if state is
		 * DESTROY_SCHEDULED.
		 */
		destroyTime?: string | null;

		/**
		 * ExternalProtectionLevelOptions stores a group of additional fields for
		 * configuring a CryptoKeyVersion that are specific to the
		 * EXTERNAL protection level.
		 */
		externalProtectionLevelOptions?: ExternalProtectionLevelOptions;

		/**
		 * Output only. The time this CryptoKeyVersion's key material was
		 * generated.
		 */
		generateTime?: string | null;

		/**
		 * Output only. The root cause of an import failure. Only present if
		 * state is
		 * IMPORT_FAILED.
		 */
		importFailureReason?: string | null;

		/**
		 * Output only. The name of the ImportJob used to import this
		 * CryptoKeyVersion. Only present if the underlying key material was
		 * imported.
		 */
		importJob?: string | null;

		/**
		 * Output only. The time at which this CryptoKeyVersion's key material
		 * was imported.
		 */
		importTime?: string | null;

		/**
		 * Output only. The resource name for this CryptoKeyVersion in the format
		 * `projects/locations/keyRings/cryptoKeys/cryptoKeyVersions/*`.
		 */
		name?: string | null;

		/**
		 * Output only. The ProtectionLevel describing how crypto operations are
		 * performed with this CryptoKeyVersion.
		 */
		protectionLevel?: CryptoKeyVersionProtectionLevel | null;

		/** The current state of the CryptoKeyVersion. */
		state?: CryptoKeyVersionState | null;
	}

	/**
	 * A CryptoKeyVersion represents an individual cryptographic key, and the
	 * associated key material.
	 * An ENABLED version can be
	 * used for cryptographic operations.
	 * For security reasons, the raw cryptographic key material represented by a
	 * CryptoKeyVersion can never be viewed or exported. It can only be used to
	 * encrypt, decrypt, or sign data when an authorized user or application invokes
	 * Cloud KMS.
	 */
	export interface CryptoKeyVersionFormProperties {

		/**
		 * Output only. The CryptoKeyVersionAlgorithm that this
		 * CryptoKeyVersion supports.
		 */
		algorithm: FormControl<CryptoKeyVersionAlgorithm | null | undefined>,

		/** Output only. The time at which this CryptoKeyVersion was created. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The time this CryptoKeyVersion's key material was
		 * destroyed. Only present if state is
		 * DESTROYED.
		 */
		destroyEventTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The time this CryptoKeyVersion's key material is scheduled
		 * for destruction. Only present if state is
		 * DESTROY_SCHEDULED.
		 */
		destroyTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The time this CryptoKeyVersion's key material was
		 * generated.
		 */
		generateTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The root cause of an import failure. Only present if
		 * state is
		 * IMPORT_FAILED.
		 */
		importFailureReason: FormControl<string | null | undefined>,

		/**
		 * Output only. The name of the ImportJob used to import this
		 * CryptoKeyVersion. Only present if the underlying key material was
		 * imported.
		 */
		importJob: FormControl<string | null | undefined>,

		/**
		 * Output only. The time at which this CryptoKeyVersion's key material
		 * was imported.
		 */
		importTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The resource name for this CryptoKeyVersion in the format
		 * `projects/locations/keyRings/cryptoKeys/cryptoKeyVersions/*`.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Output only. The ProtectionLevel describing how crypto operations are
		 * performed with this CryptoKeyVersion.
		 */
		protectionLevel: FormControl<CryptoKeyVersionProtectionLevel | null | undefined>,

		/** The current state of the CryptoKeyVersion. */
		state: FormControl<CryptoKeyVersionState | null | undefined>,
	}
	export function CreateCryptoKeyVersionFormGroup() {
		return new FormGroup<CryptoKeyVersionFormProperties>({
			algorithm: new FormControl<CryptoKeyVersionAlgorithm | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			destroyEventTime: new FormControl<string | null | undefined>(undefined),
			destroyTime: new FormControl<string | null | undefined>(undefined),
			generateTime: new FormControl<string | null | undefined>(undefined),
			importFailureReason: new FormControl<string | null | undefined>(undefined),
			importJob: new FormControl<string | null | undefined>(undefined),
			importTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<CryptoKeyVersionProtectionLevel | null | undefined>(undefined),
			state: new FormControl<CryptoKeyVersionState | null | undefined>(undefined),
		});

	}

	export enum CryptoKeyVersionAlgorithm { CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED = 0, GOOGLE_SYMMETRIC_ENCRYPTION = 1, RSA_SIGN_PSS_2048_SHA256 = 2, RSA_SIGN_PSS_3072_SHA256 = 3, RSA_SIGN_PSS_4096_SHA256 = 4, RSA_SIGN_PSS_4096_SHA512 = 5, RSA_SIGN_PKCS1_2048_SHA256 = 6, RSA_SIGN_PKCS1_3072_SHA256 = 7, RSA_SIGN_PKCS1_4096_SHA256 = 8, RSA_SIGN_PKCS1_4096_SHA512 = 9, RSA_DECRYPT_OAEP_2048_SHA256 = 10, RSA_DECRYPT_OAEP_3072_SHA256 = 11, RSA_DECRYPT_OAEP_4096_SHA256 = 12, RSA_DECRYPT_OAEP_4096_SHA512 = 13, EC_SIGN_P256_SHA256 = 14, EC_SIGN_P384_SHA384 = 15, EXTERNAL_SYMMETRIC_ENCRYPTION = 16 }


	/**
	 * Contains an HSM-generated attestation about a key operation. For more
	 * information, see [Verifying attestations]
	 * (https://cloud.google.com/kms/docs/attest-key).
	 */
	export interface KeyOperationAttestation {

		/**
		 * Output only. The attestation data provided by the HSM when the key
		 * operation was performed.
		 */
		content?: string | null;

		/** Output only. The format of the attestation data. */
		format?: KeyOperationAttestationFormat | null;
	}

	/**
	 * Contains an HSM-generated attestation about a key operation. For more
	 * information, see [Verifying attestations]
	 * (https://cloud.google.com/kms/docs/attest-key).
	 */
	export interface KeyOperationAttestationFormProperties {

		/**
		 * Output only. The attestation data provided by the HSM when the key
		 * operation was performed.
		 */
		content: FormControl<string | null | undefined>,

		/** Output only. The format of the attestation data. */
		format: FormControl<KeyOperationAttestationFormat | null | undefined>,
	}
	export function CreateKeyOperationAttestationFormGroup() {
		return new FormGroup<KeyOperationAttestationFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<KeyOperationAttestationFormat | null | undefined>(undefined),
		});

	}

	export enum KeyOperationAttestationFormat { ATTESTATION_FORMAT_UNSPECIFIED = 0, CAVIUM_V1_COMPRESSED = 1, CAVIUM_V2_COMPRESSED = 2 }


	/**
	 * ExternalProtectionLevelOptions stores a group of additional fields for
	 * configuring a CryptoKeyVersion that are specific to the
	 * EXTERNAL protection level.
	 */
	export interface ExternalProtectionLevelOptions {

		/** The URI for an external resource that this CryptoKeyVersion represents. */
		externalKeyUri?: string | null;
	}

	/**
	 * ExternalProtectionLevelOptions stores a group of additional fields for
	 * configuring a CryptoKeyVersion that are specific to the
	 * EXTERNAL protection level.
	 */
	export interface ExternalProtectionLevelOptionsFormProperties {

		/** The URI for an external resource that this CryptoKeyVersion represents. */
		externalKeyUri: FormControl<string | null | undefined>,
	}
	export function CreateExternalProtectionLevelOptionsFormGroup() {
		return new FormGroup<ExternalProtectionLevelOptionsFormProperties>({
			externalKeyUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CryptoKeyVersionProtectionLevel { PROTECTION_LEVEL_UNSPECIFIED = 0, SOFTWARE = 1, HSM = 2, EXTERNAL = 3 }

	export enum CryptoKeyVersionState { CRYPTO_KEY_VERSION_STATE_UNSPECIFIED = 0, PENDING_GENERATION = 1, ENABLED = 2, DISABLED = 3, DESTROYED = 4, DESTROY_SCHEDULED = 5, PENDING_IMPORT = 6, IMPORT_FAILED = 7 }

	export enum CryptoKeyPurpose { CRYPTO_KEY_PURPOSE_UNSPECIFIED = 0, ENCRYPT_DECRYPT = 1, ASYMMETRIC_SIGN = 2, ASYMMETRIC_DECRYPT = 3 }


	/**
	 * A CryptoKeyVersionTemplate specifies the properties to use when creating
	 * a new CryptoKeyVersion, either manually with
	 * CreateCryptoKeyVersion or
	 * automatically as a result of auto-rotation.
	 */
	export interface CryptoKeyVersionTemplate {

		/**
		 * Required. Algorithm to use
		 * when creating a CryptoKeyVersion based on this template.
		 * For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both
		 * this field is omitted and CryptoKey.purpose is
		 * ENCRYPT_DECRYPT.
		 */
		algorithm?: CryptoKeyVersionAlgorithm | null;

		/**
		 * ProtectionLevel to use when creating a CryptoKeyVersion based on
		 * this template. Immutable. Defaults to SOFTWARE.
		 */
		protectionLevel?: CryptoKeyVersionProtectionLevel | null;
	}

	/**
	 * A CryptoKeyVersionTemplate specifies the properties to use when creating
	 * a new CryptoKeyVersion, either manually with
	 * CreateCryptoKeyVersion or
	 * automatically as a result of auto-rotation.
	 */
	export interface CryptoKeyVersionTemplateFormProperties {

		/**
		 * Required. Algorithm to use
		 * when creating a CryptoKeyVersion based on this template.
		 * For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both
		 * this field is omitted and CryptoKey.purpose is
		 * ENCRYPT_DECRYPT.
		 */
		algorithm: FormControl<CryptoKeyVersionAlgorithm | null | undefined>,

		/**
		 * ProtectionLevel to use when creating a CryptoKeyVersion based on
		 * this template. Immutable. Defaults to SOFTWARE.
		 */
		protectionLevel: FormControl<CryptoKeyVersionProtectionLevel | null | undefined>,
	}
	export function CreateCryptoKeyVersionTemplateFormGroup() {
		return new FormGroup<CryptoKeyVersionTemplateFormProperties>({
			algorithm: new FormControl<CryptoKeyVersionAlgorithm | null | undefined>(undefined),
			protectionLevel: new FormControl<CryptoKeyVersionProtectionLevel | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.Decrypt. */
	export interface DecryptRequest {

		/**
		 * Optional. Optional data that must match the data originally supplied in
		 * EncryptRequest.additional_authenticated_data.
		 */
		additionalAuthenticatedData?: string | null;

		/**
		 * Required. The encrypted data originally returned in
		 * EncryptResponse.ciphertext.
		 */
		ciphertext?: string | null;
	}

	/** Request message for KeyManagementService.Decrypt. */
	export interface DecryptRequestFormProperties {

		/**
		 * Optional. Optional data that must match the data originally supplied in
		 * EncryptRequest.additional_authenticated_data.
		 */
		additionalAuthenticatedData: FormControl<string | null | undefined>,

		/**
		 * Required. The encrypted data originally returned in
		 * EncryptResponse.ciphertext.
		 */
		ciphertext: FormControl<string | null | undefined>,
	}
	export function CreateDecryptRequestFormGroup() {
		return new FormGroup<DecryptRequestFormProperties>({
			additionalAuthenticatedData: new FormControl<string | null | undefined>(undefined),
			ciphertext: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.Decrypt. */
	export interface DecryptResponse {

		/** The decrypted data originally supplied in EncryptRequest.plaintext. */
		plaintext?: string | null;
	}

	/** Response message for KeyManagementService.Decrypt. */
	export interface DecryptResponseFormProperties {

		/** The decrypted data originally supplied in EncryptRequest.plaintext. */
		plaintext: FormControl<string | null | undefined>,
	}
	export function CreateDecryptResponseFormGroup() {
		return new FormGroup<DecryptResponseFormProperties>({
			plaintext: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.DestroyCryptoKeyVersion. */
	export interface DestroyCryptoKeyVersionRequest {
	}

	/** Request message for KeyManagementService.DestroyCryptoKeyVersion. */
	export interface DestroyCryptoKeyVersionRequestFormProperties {
	}
	export function CreateDestroyCryptoKeyVersionRequestFormGroup() {
		return new FormGroup<DestroyCryptoKeyVersionRequestFormProperties>({
		});

	}


	/** Request message for KeyManagementService.Encrypt. */
	export interface EncryptRequest {

		/**
		 * Optional. Optional data that, if specified, must also be provided during decryption
		 * through DecryptRequest.additional_authenticated_data.
		 * The maximum size depends on the key version's
		 * protection_level. For
		 * SOFTWARE keys, the AAD must be no larger than
		 * 64KiB. For HSM keys, the combined length of the
		 * plaintext and additional_authenticated_data fields must be no larger than
		 * 8KiB.
		 */
		additionalAuthenticatedData?: string | null;

		/**
		 * Required. The data to encrypt. Must be no larger than 64KiB.
		 * The maximum size depends on the key version's
		 * protection_level. For
		 * SOFTWARE keys, the plaintext must be no larger
		 * than 64KiB. For HSM keys, the combined length of the
		 * plaintext and additional_authenticated_data fields must be no larger than
		 * 8KiB.
		 */
		plaintext?: string | null;
	}

	/** Request message for KeyManagementService.Encrypt. */
	export interface EncryptRequestFormProperties {

		/**
		 * Optional. Optional data that, if specified, must also be provided during decryption
		 * through DecryptRequest.additional_authenticated_data.
		 * The maximum size depends on the key version's
		 * protection_level. For
		 * SOFTWARE keys, the AAD must be no larger than
		 * 64KiB. For HSM keys, the combined length of the
		 * plaintext and additional_authenticated_data fields must be no larger than
		 * 8KiB.
		 */
		additionalAuthenticatedData: FormControl<string | null | undefined>,

		/**
		 * Required. The data to encrypt. Must be no larger than 64KiB.
		 * The maximum size depends on the key version's
		 * protection_level. For
		 * SOFTWARE keys, the plaintext must be no larger
		 * than 64KiB. For HSM keys, the combined length of the
		 * plaintext and additional_authenticated_data fields must be no larger than
		 * 8KiB.
		 */
		plaintext: FormControl<string | null | undefined>,
	}
	export function CreateEncryptRequestFormGroup() {
		return new FormGroup<EncryptRequestFormProperties>({
			additionalAuthenticatedData: new FormControl<string | null | undefined>(undefined),
			plaintext: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.Encrypt. */
	export interface EncryptResponse {

		/** The encrypted data. */
		ciphertext?: string | null;

		/**
		 * The resource name of the CryptoKeyVersion used in encryption. Check
		 * this field to verify that the intended resource was used for encryption.
		 */
		name?: string | null;
	}

	/** Response message for KeyManagementService.Encrypt. */
	export interface EncryptResponseFormProperties {

		/** The encrypted data. */
		ciphertext: FormControl<string | null | undefined>,

		/**
		 * The resource name of the CryptoKeyVersion used in encryption. Check
		 * this field to verify that the intended resource was used for encryption.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEncryptResponseFormGroup() {
		return new FormGroup<EncryptResponseFormProperties>({
			ciphertext: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.ImportCryptoKeyVersion. */
	export interface ImportCryptoKeyVersionRequest {

		/**
		 * Required. The algorithm of
		 * the key being imported. This does not need to match the
		 * version_template of the CryptoKey this
		 * version imports into.
		 */
		algorithm?: CryptoKeyVersionAlgorithm | null;

		/**
		 * Required. The name of the ImportJob that was used to
		 * wrap this key material.
		 */
		importJob?: string | null;

		/**
		 * Wrapped key material produced with
		 * RSA_OAEP_3072_SHA1_AES_256
		 * or
		 * RSA_OAEP_4096_SHA1_AES_256.
		 * This field contains the concatenation of two wrapped keys:
		 * <ol>
		 * <li>An ephemeral AES-256 wrapping key wrapped with the
		 * public_key using RSAES-OAEP with SHA-1,
		 * MGF1 with SHA-1, and an empty label.
		 * </li>
		 * <li>The key to be imported, wrapped with the ephemeral AES-256 key
		 * using AES-KWP (RFC 5649).
		 * </li>
		 * </ol>
		 * If importing symmetric key material, it is expected that the unwrapped
		 * key contains plain bytes. If importing asymmetric key material, it is
		 * expected that the unwrapped key is in PKCS#8-encoded DER format (the
		 * PrivateKeyInfo structure from RFC 5208).
		 * This format is the same as the format produced by PKCS#11 mechanism
		 * CKM_RSA_AES_KEY_WRAP.
		 */
		rsaAesWrappedKey?: string | null;
	}

	/** Request message for KeyManagementService.ImportCryptoKeyVersion. */
	export interface ImportCryptoKeyVersionRequestFormProperties {

		/**
		 * Required. The algorithm of
		 * the key being imported. This does not need to match the
		 * version_template of the CryptoKey this
		 * version imports into.
		 */
		algorithm: FormControl<CryptoKeyVersionAlgorithm | null | undefined>,

		/**
		 * Required. The name of the ImportJob that was used to
		 * wrap this key material.
		 */
		importJob: FormControl<string | null | undefined>,

		/**
		 * Wrapped key material produced with
		 * RSA_OAEP_3072_SHA1_AES_256
		 * or
		 * RSA_OAEP_4096_SHA1_AES_256.
		 * This field contains the concatenation of two wrapped keys:
		 * <ol>
		 * <li>An ephemeral AES-256 wrapping key wrapped with the
		 * public_key using RSAES-OAEP with SHA-1,
		 * MGF1 with SHA-1, and an empty label.
		 * </li>
		 * <li>The key to be imported, wrapped with the ephemeral AES-256 key
		 * using AES-KWP (RFC 5649).
		 * </li>
		 * </ol>
		 * If importing symmetric key material, it is expected that the unwrapped
		 * key contains plain bytes. If importing asymmetric key material, it is
		 * expected that the unwrapped key is in PKCS#8-encoded DER format (the
		 * PrivateKeyInfo structure from RFC 5208).
		 * This format is the same as the format produced by PKCS#11 mechanism
		 * CKM_RSA_AES_KEY_WRAP.
		 */
		rsaAesWrappedKey: FormControl<string | null | undefined>,
	}
	export function CreateImportCryptoKeyVersionRequestFormGroup() {
		return new FormGroup<ImportCryptoKeyVersionRequestFormProperties>({
			algorithm: new FormControl<CryptoKeyVersionAlgorithm | null | undefined>(undefined),
			importJob: new FormControl<string | null | undefined>(undefined),
			rsaAesWrappedKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An ImportJob can be used to create CryptoKeys and
	 * CryptoKeyVersions using pre-existing key material,
	 * generated outside of Cloud KMS.
	 * When an ImportJob is created, Cloud KMS will generate a "wrapping key",
	 * which is a public/private key pair. You use the wrapping key to encrypt (also
	 * known as wrap) the pre-existing key material to protect it during the import
	 * process. The nature of the wrapping key depends on the choice of
	 * import_method. When the wrapping key generation
	 * is complete, the state will be set to
	 * ACTIVE and the public_key
	 * can be fetched. The fetched public key can then be used to wrap your
	 * pre-existing key material.
	 * Once the key material is wrapped, it can be imported into a new
	 * CryptoKeyVersion in an existing CryptoKey by calling
	 * ImportCryptoKeyVersion.
	 * Multiple CryptoKeyVersions can be imported with a single
	 * ImportJob. Cloud KMS uses the private key portion of the wrapping key to
	 * unwrap the key material. Only Cloud KMS has access to the private key.
	 * An ImportJob expires 3 days after it is created. Once expired, Cloud KMS
	 * will no longer be able to import or unwrap any key material that was wrapped
	 * with the ImportJob's public key.
	 * For more information, see
	 * [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
	 */
	export interface ImportJob {

		/**
		 * Contains an HSM-generated attestation about a key operation. For more
		 * information, see [Verifying attestations]
		 * (https://cloud.google.com/kms/docs/attest-key).
		 */
		attestation?: KeyOperationAttestation;

		/** Output only. The time at which this ImportJob was created. */
		createTime?: string | null;

		/**
		 * Output only. The time this ImportJob expired. Only present if
		 * state is EXPIRED.
		 */
		expireEventTime?: string | null;

		/**
		 * Output only. The time at which this ImportJob is scheduled for
		 * expiration and can no longer be used to import key material.
		 */
		expireTime?: string | null;

		/** Output only. The time this ImportJob's key material was generated. */
		generateTime?: string | null;

		/** Required. Immutable. The wrapping method to be used for incoming key material. */
		importMethod?: ImportJobImportMethod | null;

		/**
		 * Output only. The resource name for this ImportJob in the format
		 * `projects/locations/keyRings/importJobs/*`.
		 */
		name?: string | null;

		/**
		 * Required. Immutable. The protection level of the ImportJob. This must match the
		 * protection_level of the
		 * version_template on the CryptoKey you
		 * attempt to import into.
		 */
		protectionLevel?: CryptoKeyVersionProtectionLevel | null;

		/**
		 * The public key component of the wrapping key. For details of the type of
		 * key this public key corresponds to, see the ImportMethod.
		 */
		publicKey?: WrappingPublicKey;

		/**
		 * Output only. The current state of the ImportJob, indicating if it can
		 * be used.
		 */
		state?: ImportJobState | null;
	}

	/**
	 * An ImportJob can be used to create CryptoKeys and
	 * CryptoKeyVersions using pre-existing key material,
	 * generated outside of Cloud KMS.
	 * When an ImportJob is created, Cloud KMS will generate a "wrapping key",
	 * which is a public/private key pair. You use the wrapping key to encrypt (also
	 * known as wrap) the pre-existing key material to protect it during the import
	 * process. The nature of the wrapping key depends on the choice of
	 * import_method. When the wrapping key generation
	 * is complete, the state will be set to
	 * ACTIVE and the public_key
	 * can be fetched. The fetched public key can then be used to wrap your
	 * pre-existing key material.
	 * Once the key material is wrapped, it can be imported into a new
	 * CryptoKeyVersion in an existing CryptoKey by calling
	 * ImportCryptoKeyVersion.
	 * Multiple CryptoKeyVersions can be imported with a single
	 * ImportJob. Cloud KMS uses the private key portion of the wrapping key to
	 * unwrap the key material. Only Cloud KMS has access to the private key.
	 * An ImportJob expires 3 days after it is created. Once expired, Cloud KMS
	 * will no longer be able to import or unwrap any key material that was wrapped
	 * with the ImportJob's public key.
	 * For more information, see
	 * [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
	 */
	export interface ImportJobFormProperties {

		/** Output only. The time at which this ImportJob was created. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The time this ImportJob expired. Only present if
		 * state is EXPIRED.
		 */
		expireEventTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The time at which this ImportJob is scheduled for
		 * expiration and can no longer be used to import key material.
		 */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The time this ImportJob's key material was generated. */
		generateTime: FormControl<string | null | undefined>,

		/** Required. Immutable. The wrapping method to be used for incoming key material. */
		importMethod: FormControl<ImportJobImportMethod | null | undefined>,

		/**
		 * Output only. The resource name for this ImportJob in the format
		 * `projects/locations/keyRings/importJobs/*`.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required. Immutable. The protection level of the ImportJob. This must match the
		 * protection_level of the
		 * version_template on the CryptoKey you
		 * attempt to import into.
		 */
		protectionLevel: FormControl<CryptoKeyVersionProtectionLevel | null | undefined>,

		/**
		 * Output only. The current state of the ImportJob, indicating if it can
		 * be used.
		 */
		state: FormControl<ImportJobState | null | undefined>,
	}
	export function CreateImportJobFormGroup() {
		return new FormGroup<ImportJobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			expireEventTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			generateTime: new FormControl<string | null | undefined>(undefined),
			importMethod: new FormControl<ImportJobImportMethod | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<CryptoKeyVersionProtectionLevel | null | undefined>(undefined),
			state: new FormControl<ImportJobState | null | undefined>(undefined),
		});

	}

	export enum ImportJobImportMethod { IMPORT_METHOD_UNSPECIFIED = 0, RSA_OAEP_3072_SHA1_AES_256 = 1, RSA_OAEP_4096_SHA1_AES_256 = 2 }


	/**
	 * The public key component of the wrapping key. For details of the type of
	 * key this public key corresponds to, see the ImportMethod.
	 */
	export interface WrappingPublicKey {

		/**
		 * The public key, encoded in PEM format. For more information, see the [RFC
		 * 7468](https://tools.ietf.org/html/rfc7468) sections for [General
		 * Considerations](https://tools.ietf.org/html/rfc7468#section-2) and
		 * [Textual Encoding of Subject Public Key Info]
		 * (https://tools.ietf.org/html/rfc7468#section-13).
		 */
		pem?: string | null;
	}

	/**
	 * The public key component of the wrapping key. For details of the type of
	 * key this public key corresponds to, see the ImportMethod.
	 */
	export interface WrappingPublicKeyFormProperties {

		/**
		 * The public key, encoded in PEM format. For more information, see the [RFC
		 * 7468](https://tools.ietf.org/html/rfc7468) sections for [General
		 * Considerations](https://tools.ietf.org/html/rfc7468#section-2) and
		 * [Textual Encoding of Subject Public Key Info]
		 * (https://tools.ietf.org/html/rfc7468#section-13).
		 */
		pem: FormControl<string | null | undefined>,
	}
	export function CreateWrappingPublicKeyFormGroup() {
		return new FormGroup<WrappingPublicKeyFormProperties>({
			pem: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportJobState { IMPORT_JOB_STATE_UNSPECIFIED = 0, PENDING_GENERATION = 1, ACTIVE = 2, EXPIRED = 3 }


	/** A KeyRing is a toplevel logical grouping of CryptoKeys. */
	export interface KeyRing {

		/** Output only. The time at which this KeyRing was created. */
		createTime?: string | null;

		/**
		 * Output only. The resource name for the KeyRing in the format
		 * `projects/locations/keyRings/*`.
		 */
		name?: string | null;
	}

	/** A KeyRing is a toplevel logical grouping of CryptoKeys. */
	export interface KeyRingFormProperties {

		/** Output only. The time at which this KeyRing was created. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The resource name for the KeyRing in the format
		 * `projects/locations/keyRings/*`.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateKeyRingFormGroup() {
		return new FormGroup<KeyRingFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.ListCryptoKeyVersions. */
	export interface ListCryptoKeyVersionsResponse {

		/** The list of CryptoKeyVersions. */
		cryptoKeyVersions?: Array<CryptoKeyVersion>;

		/**
		 * A token to retrieve next page of results. Pass this value in
		 * ListCryptoKeyVersionsRequest.page_token to retrieve the next page of
		 * results.
		 */
		nextPageToken?: string | null;

		/**
		 * The total number of CryptoKeyVersions that matched the
		 * query.
		 */
		totalSize?: number | null;
	}

	/** Response message for KeyManagementService.ListCryptoKeyVersions. */
	export interface ListCryptoKeyVersionsResponseFormProperties {

		/**
		 * A token to retrieve next page of results. Pass this value in
		 * ListCryptoKeyVersionsRequest.page_token to retrieve the next page of
		 * results.
		 */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * The total number of CryptoKeyVersions that matched the
		 * query.
		 */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListCryptoKeyVersionsResponseFormGroup() {
		return new FormGroup<ListCryptoKeyVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.ListCryptoKeys. */
	export interface ListCryptoKeysResponse {

		/** The list of CryptoKeys. */
		cryptoKeys?: Array<CryptoKey>;

		/**
		 * A token to retrieve next page of results. Pass this value in
		 * ListCryptoKeysRequest.page_token to retrieve the next page of results.
		 */
		nextPageToken?: string | null;

		/** The total number of CryptoKeys that matched the query. */
		totalSize?: number | null;
	}

	/** Response message for KeyManagementService.ListCryptoKeys. */
	export interface ListCryptoKeysResponseFormProperties {

		/**
		 * A token to retrieve next page of results. Pass this value in
		 * ListCryptoKeysRequest.page_token to retrieve the next page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of CryptoKeys that matched the query. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListCryptoKeysResponseFormGroup() {
		return new FormGroup<ListCryptoKeysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.ListImportJobs. */
	export interface ListImportJobsResponse {

		/** The list of ImportJobs. */
		importJobs?: Array<ImportJob>;

		/**
		 * A token to retrieve next page of results. Pass this value in
		 * ListImportJobsRequest.page_token to retrieve the next page of results.
		 */
		nextPageToken?: string | null;

		/** The total number of ImportJobs that matched the query. */
		totalSize?: number | null;
	}

	/** Response message for KeyManagementService.ListImportJobs. */
	export interface ListImportJobsResponseFormProperties {

		/**
		 * A token to retrieve next page of results. Pass this value in
		 * ListImportJobsRequest.page_token to retrieve the next page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of ImportJobs that matched the query. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListImportJobsResponseFormGroup() {
		return new FormGroup<ListImportJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.ListKeyRings. */
	export interface ListKeyRingsResponse {

		/** The list of KeyRings. */
		keyRings?: Array<KeyRing>;

		/**
		 * A token to retrieve next page of results. Pass this value in
		 * ListKeyRingsRequest.page_token to retrieve the next page of results.
		 */
		nextPageToken?: string | null;

		/** The total number of KeyRings that matched the query. */
		totalSize?: number | null;
	}

	/** Response message for KeyManagementService.ListKeyRings. */
	export interface ListKeyRingsResponseFormProperties {

		/**
		 * A token to retrieve next page of results. Pass this value in
		 * ListKeyRingsRequest.page_token to retrieve the next page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of KeyRings that matched the query. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListKeyRingsResponseFormGroup() {
		return new FormGroup<ListKeyRingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string | null;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any };

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string | null;
	}

	/** A resource that represents Google Cloud Platform location. */
	export interface LocationFormProperties {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud KMS metadata for the given google.cloud.location.Location. */
	export interface LocationMetadata {

		/**
		 * Indicates whether CryptoKeys with
		 * protection_level
		 * EXTERNAL can be created in this location.
		 */
		ekmAvailable?: boolean | null;

		/**
		 * Indicates whether CryptoKeys with
		 * protection_level
		 * HSM can be created in this location.
		 */
		hsmAvailable?: boolean | null;
	}

	/** Cloud KMS metadata for the given google.cloud.location.Location. */
	export interface LocationMetadataFormProperties {

		/**
		 * Indicates whether CryptoKeys with
		 * protection_level
		 * EXTERNAL can be created in this location.
		 */
		ekmAvailable: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether CryptoKeys with
		 * protection_level
		 * HSM can be created in this location.
		 */
		hsmAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateLocationMetadataFormGroup() {
		return new FormGroup<LocationMetadataFormProperties>({
			ekmAvailable: new FormControl<boolean | null | undefined>(undefined),
			hsmAvailable: new FormControl<boolean | null | undefined>(undefined),
		});

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

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

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
	export interface PolicyFormProperties {

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
		etag: FormControl<string | null | undefined>,

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
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The public key for a given CryptoKeyVersion. Obtained via
	 * GetPublicKey.
	 */
	export interface PublicKey {

		/**
		 * The Algorithm associated
		 * with this key.
		 */
		algorithm?: CryptoKeyVersionAlgorithm | null;

		/**
		 * The public key, encoded in PEM format. For more information, see the
		 * [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for
		 * [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and
		 * [Textual Encoding of Subject Public Key Info]
		 * (https://tools.ietf.org/html/rfc7468#section-13).
		 */
		pem?: string | null;
	}

	/**
	 * The public key for a given CryptoKeyVersion. Obtained via
	 * GetPublicKey.
	 */
	export interface PublicKeyFormProperties {

		/**
		 * The Algorithm associated
		 * with this key.
		 */
		algorithm: FormControl<CryptoKeyVersionAlgorithm | null | undefined>,

		/**
		 * The public key, encoded in PEM format. For more information, see the
		 * [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for
		 * [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and
		 * [Textual Encoding of Subject Public Key Info]
		 * (https://tools.ietf.org/html/rfc7468#section-13).
		 */
		pem: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeyFormGroup() {
		return new FormGroup<PublicKeyFormProperties>({
			algorithm: new FormControl<CryptoKeyVersionAlgorithm | null | undefined>(undefined),
			pem: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.RestoreCryptoKeyVersion. */
	export interface RestoreCryptoKeyVersionRequest {
	}

	/** Request message for KeyManagementService.RestoreCryptoKeyVersion. */
	export interface RestoreCryptoKeyVersionRequestFormProperties {
	}
	export function CreateRestoreCryptoKeyVersionRequestFormGroup() {
		return new FormGroup<RestoreCryptoKeyVersionRequestFormProperties>({
		});

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

		/**
		 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
		 * the fields in the mask will be modified. If no mask is provided, the
		 * following default mask is used:
		 * paths: "bindings, etag"
		 * This field is only used by Cloud IAM.
		 */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {

		/**
		 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
		 * the fields in the mask will be modified. If no mask is provided, the
		 * following default mask is used:
		 * paths: "bindings, etag"
		 * This field is only used by Cloud IAM.
		 */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}


	/** Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion. */
	export interface UpdateCryptoKeyPrimaryVersionRequest {

		/** Required. The id of the child CryptoKeyVersion to use as primary. */
		cryptoKeyVersionId?: string | null;
	}

	/** Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion. */
	export interface UpdateCryptoKeyPrimaryVersionRequestFormProperties {

		/** Required. The id of the child CryptoKeyVersion to use as primary. */
		cryptoKeyVersionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCryptoKeyPrimaryVersionRequestFormGroup() {
		return new FormGroup<UpdateCryptoKeyPrimaryVersionRequestFormProperties>({
			cryptoKeyVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns metadata for a given CryptoKeyVersion.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the CryptoKeyVersion to get.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a CryptoKeyVersion's metadata.
		 * state may be changed between
		 * ENABLED and
		 * DISABLED using this
		 * method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to
		 * move between other states.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name for this CryptoKeyVersion in the format
		 * `projects/locations/keyRings/cryptoKeys/cryptoKeyVersions/*`.
		 * @param {string} updateMask Required. List of fields to be updated in this request.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_patch(name: string, updateMask: string | null | undefined, requestBody: CryptoKeyVersion): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the public key for the given CryptoKeyVersion. The
		 * CryptoKey.purpose must be
		 * ASYMMETRIC_SIGN or
		 * ASYMMETRIC_DECRYPT.
		 * Get v1/{name}/publicKey
		 * @param {string} name Required. The name of the CryptoKeyVersion public key to
		 * get.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_getPublicKey(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/publicKey', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Decrypts data that was encrypted with a public key retrieved from
		 * GetPublicKey corresponding to a CryptoKeyVersion with
		 * CryptoKey.purpose ASYMMETRIC_DECRYPT.
		 * Post v1/{name}:asymmetricDecrypt
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to use for
		 * decryption.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_asymmetricDecrypt(name: string, requestBody: AsymmetricDecryptRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':asymmetricDecrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Signs data using a CryptoKeyVersion with CryptoKey.purpose
		 * ASYMMETRIC_SIGN, producing a signature that can be verified with the public
		 * key retrieved from GetPublicKey.
		 * Post v1/{name}:asymmetricSign
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to use for signing.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_asymmetricSign(name: string, requestBody: AsymmetricSignRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':asymmetricSign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decrypts data that was protected by Encrypt. The CryptoKey.purpose
		 * must be ENCRYPT_DECRYPT.
		 * Post v1/{name}:decrypt
		 * @param {string} name Required. The resource name of the CryptoKey to use for decryption.
		 * The server will choose the appropriate version.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_decrypt(name: string, requestBody: DecryptRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':decrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Schedule a CryptoKeyVersion for destruction.
		 * Upon calling this method, CryptoKeyVersion.state will be set to
		 * DESTROY_SCHEDULED
		 * and destroy_time will be set to a time 24
		 * hours in the future, at which point the state
		 * will be changed to
		 * DESTROYED, and the key
		 * material will be irrevocably destroyed.
		 * Before the destroy_time is reached,
		 * RestoreCryptoKeyVersion may be called to reverse the process.
		 * Post v1/{name}:destroy
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to destroy.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_destroy(name: string, requestBody: DestroyCryptoKeyVersionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':destroy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Encrypts data, so that it can only be recovered by a call to Decrypt.
		 * The CryptoKey.purpose must be
		 * ENCRYPT_DECRYPT.
		 * Post v1/{name}:encrypt
		 * @param {string} name Required. The resource name of the CryptoKey or CryptoKeyVersion
		 * to use for encryption.
		 * If a CryptoKey is specified, the server will use its
		 * primary version.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_encrypt(name: string, requestBody: EncryptRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':encrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restore a CryptoKeyVersion in the
		 * DESTROY_SCHEDULED
		 * state.
		 * Upon restoration of the CryptoKeyVersion, state
		 * will be set to DISABLED,
		 * and destroy_time will be cleared.
		 * Post v1/{name}:restore
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to restore.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_restore(name: string, requestBody: RestoreCryptoKeyVersionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the version of a CryptoKey that will be used in Encrypt.
		 * Returns an error if called on an asymmetric key.
		 * Post v1/{name}:updatePrimaryVersion
		 * @param {string} name Required. The resource name of the CryptoKey to update.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_updatePrimaryVersion(name: string, requestBody: UpdateCryptoKeyPrimaryVersionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':updatePrimaryVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists CryptoKeyVersions.
		 * Get v1/{parent}/cryptoKeyVersions
		 * @param {string} parent Required. The resource name of the CryptoKey to list, in the format
		 * `projects/locations/keyRings/cryptoKeys/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response. For
		 * more information, see
		 * [Sorting and filtering list
		 * results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {string} orderBy Optional. Specify how the results should be sorted. If not specified, the
		 * results will be sorted in the default order. For more information, see
		 * [Sorting and filtering list
		 * results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {number} pageSize Optional. Optional limit on the number of CryptoKeyVersions to
		 * include in the response. Further CryptoKeyVersions can
		 * subsequently be obtained by including the
		 * ListCryptoKeyVersionsResponse.next_page_token in a subsequent request.
		 * If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Optional pagination token, returned earlier via
		 * ListCryptoKeyVersionsResponse.next_page_token.
		 * @param {Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_listView} view The fields to include in the response.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_listView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeyVersions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new CryptoKeyVersion in a CryptoKey.
		 * The server will assign the next sequential id. If unset,
		 * state will be set to
		 * ENABLED.
		 * Post v1/{parent}/cryptoKeyVersions
		 * @param {string} parent Required. The name of the CryptoKey associated with
		 * the CryptoKeyVersions.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_create(parent: string, requestBody: CryptoKeyVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeyVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Imports a new CryptoKeyVersion into an existing CryptoKey using the
		 * wrapped key material provided in the request.
		 * The version ID will be assigned the next sequential id within the
		 * CryptoKey.
		 * Post v1/{parent}/cryptoKeyVersions:import
		 * @param {string} parent Required. The name of the CryptoKey to
		 * be imported into.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_import(parent: string, requestBody: ImportCryptoKeyVersionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeyVersions:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists CryptoKeys.
		 * Get v1/{parent}/cryptoKeys
		 * @param {string} parent Required. The resource name of the KeyRing to list, in the format
		 * `projects/locations/keyRings/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response. For
		 * more information, see
		 * [Sorting and filtering list
		 * results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {string} orderBy Optional. Specify how the results should be sorted. If not specified, the
		 * results will be sorted in the default order. For more information, see
		 * [Sorting and filtering list
		 * results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {number} pageSize Optional. Optional limit on the number of CryptoKeys to include in the
		 * response.  Further CryptoKeys can subsequently be obtained by
		 * including the ListCryptoKeysResponse.next_page_token in a subsequent
		 * request.  If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Optional pagination token, returned earlier via
		 * ListCryptoKeysResponse.next_page_token.
		 * @param {Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_listView} versionView The fields of the primary version to include in the response.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, versionView: Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_listView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeys&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&versionView=' + versionView, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new CryptoKey within a KeyRing.
		 * CryptoKey.purpose and
		 * CryptoKey.version_template.algorithm
		 * are required.
		 * Post v1/{parent}/cryptoKeys
		 * @param {string} parent Required. The name of the KeyRing associated with the
		 * CryptoKeys.
		 * @param {string} cryptoKeyId Required. It must be unique within a KeyRing and match the regular
		 * expression `[a-zA-Z0-9_-]{1,63}`
		 * @param {boolean} skipInitialVersionCreation If set to true, the request will create a CryptoKey without any
		 * CryptoKeyVersions. You must manually call
		 * CreateCryptoKeyVersion or
		 * ImportCryptoKeyVersion
		 * before you can use this CryptoKey.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_create(parent: string, cryptoKeyId: string | null | undefined, skipInitialVersionCreation: boolean | null | undefined, requestBody: CryptoKey): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeys&cryptoKeyId=' + (cryptoKeyId == null ? '' : encodeURIComponent(cryptoKeyId)) + '&skipInitialVersionCreation=' + skipInitialVersionCreation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists ImportJobs.
		 * Get v1/{parent}/importJobs
		 * @param {string} parent Required. The resource name of the KeyRing to list, in the format
		 * `projects/locations/keyRings/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response. For
		 * more information, see
		 * [Sorting and filtering list
		 * results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {string} orderBy Optional. Specify how the results should be sorted. If not specified, the
		 * results will be sorted in the default order. For more information, see
		 * [Sorting and filtering list
		 * results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {number} pageSize Optional. Optional limit on the number of ImportJobs to include in the
		 * response. Further ImportJobs can subsequently be obtained by
		 * including the ListImportJobsResponse.next_page_token in a subsequent
		 * request. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Optional pagination token, returned earlier via
		 * ListImportJobsResponse.next_page_token.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_importJobs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/importJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new ImportJob within a KeyRing.
		 * ImportJob.import_method is required.
		 * Post v1/{parent}/importJobs
		 * @param {string} parent Required. The name of the KeyRing associated with the
		 * ImportJobs.
		 * @param {string} importJobId Required. It must be unique within a KeyRing and match the regular
		 * expression `[a-zA-Z0-9_-]{1,63}`
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_importJobs_create(parent: string, importJobId: string | null | undefined, requestBody: ImportJob): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/importJobs&importJobId=' + (importJobId == null ? '' : encodeURIComponent(importJobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists KeyRings.
		 * Get v1/{parent}/keyRings
		 * @param {string} parent Required. The resource name of the location associated with the
		 * KeyRings, in the format `projects/locations/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response. For
		 * more information, see
		 * [Sorting and filtering list
		 * results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {string} orderBy Optional. Specify how the results should be sorted. If not specified, the
		 * results will be sorted in the default order.  For more information, see
		 * [Sorting and filtering list
		 * results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {number} pageSize Optional. Optional limit on the number of KeyRings to include in the
		 * response.  Further KeyRings can subsequently be obtained by
		 * including the ListKeyRingsResponse.next_page_token in a subsequent
		 * request.  If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Optional pagination token, returned earlier via
		 * ListKeyRingsResponse.next_page_token.
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keyRings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new KeyRing in a given Project and Location.
		 * Post v1/{parent}/keyRings
		 * @param {string} parent Required. The resource name of the location associated with the
		 * KeyRings, in the format `projects/locations/*`.
		 * @param {string} keyRingId Required. It must be unique within a location and match the regular
		 * expression `[a-zA-Z0-9_-]{1,63}`
		 * @return {void} Successful response
		 */
		Cloudkms_projects_locations_keyRings_create(parent: string, keyRingId: string | null | undefined, requestBody: KeyRing): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keyRings&keyRingId=' + (keyRingId == null ? '' : encodeURIComponent(keyRingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		Cloudkms_projects_locations_keyRings_cryptoKeys_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<HttpResponse<string>> {
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
		Cloudkms_projects_locations_keyRings_cryptoKeys_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
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
		Cloudkms_projects_locations_keyRings_cryptoKeys_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_listView { CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED = 0, FULL = 1 }

}

