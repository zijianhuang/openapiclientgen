import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request message for KeyManagementService.AsymmetricDecrypt. */
	export interface AsymmetricDecryptRequest {

		/** Required. The data encrypted with the named CryptoKeyVersion's public key using OAEP. */
		ciphertext?: string | null;

		/** Optional. An optional CRC32C checksum of the AsymmetricDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received AsymmetricDecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricDecryptRequest.ciphertext) is equal to AsymmetricDecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		ciphertextCrc32c?: string | null;
	}

	/** Request message for KeyManagementService.AsymmetricDecrypt. */
	export interface AsymmetricDecryptRequestFormProperties {

		/** Required. The data encrypted with the named CryptoKeyVersion's public key using OAEP. */
		ciphertext: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the AsymmetricDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received AsymmetricDecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricDecryptRequest.ciphertext) is equal to AsymmetricDecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		ciphertextCrc32c: FormControl<string | null | undefined>,
	}
	export function CreateAsymmetricDecryptRequestFormGroup() {
		return new FormGroup<AsymmetricDecryptRequestFormProperties>({
			ciphertext: new FormControl<string | null | undefined>(undefined),
			ciphertextCrc32c: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.AsymmetricDecrypt. */
	export interface AsymmetricDecryptResponse {

		/** The decrypted data originally encrypted with the matching public key. */
		plaintext?: string | null;

		/** Integrity verification field. A CRC32C checksum of the returned AsymmetricDecryptResponse.plaintext. An integrity check of AsymmetricDecryptResponse.plaintext can be performed by computing the CRC32C checksum of AsymmetricDecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		plaintextCrc32c?: string | null;

		/** The ProtectionLevel of the CryptoKeyVersion used in decryption. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;

		/** Integrity verification field. A flag indicating whether AsymmetricDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that AsymmetricDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedCiphertextCrc32c?: boolean | null;
	}

	/** Response message for KeyManagementService.AsymmetricDecrypt. */
	export interface AsymmetricDecryptResponseFormProperties {

		/** The decrypted data originally encrypted with the matching public key. */
		plaintext: FormControl<string | null | undefined>,

		/** Integrity verification field. A CRC32C checksum of the returned AsymmetricDecryptResponse.plaintext. An integrity check of AsymmetricDecryptResponse.plaintext can be performed by computing the CRC32C checksum of AsymmetricDecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		plaintextCrc32c: FormControl<string | null | undefined>,

		/** The ProtectionLevel of the CryptoKeyVersion used in decryption. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,

		/** Integrity verification field. A flag indicating whether AsymmetricDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that AsymmetricDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedCiphertextCrc32c: FormControl<boolean | null | undefined>,
	}
	export function CreateAsymmetricDecryptResponseFormGroup() {
		return new FormGroup<AsymmetricDecryptResponseFormProperties>({
			plaintext: new FormControl<string | null | undefined>(undefined),
			plaintextCrc32c: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
			verifiedCiphertextCrc32c: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AsymmetricDecryptResponseProtectionLevel { PROTECTION_LEVEL_UNSPECIFIED = 'PROTECTION_LEVEL_UNSPECIFIED', SOFTWARE = 'SOFTWARE', HSM = 'HSM', EXTERNAL = 'EXTERNAL', EXTERNAL_VPC = 'EXTERNAL_VPC' }


	/** Request message for KeyManagementService.AsymmetricSign. */
	export interface AsymmetricSignRequest {

		/** Optional. The data to sign. It can't be supplied if AsymmetricSignRequest.digest is supplied. */
		data?: string | null;

		/** Optional. An optional CRC32C checksum of the AsymmetricSignRequest.data. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.data) is equal to AsymmetricSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		dataCrc32c?: string | null;

		/** A Digest holds a cryptographic message digest. */
		digest?: Digest;

		/** Optional. An optional CRC32C checksum of the AsymmetricSignRequest.digest. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.digest using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.digest) is equal to AsymmetricSignRequest.digest_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		digestCrc32c?: string | null;
	}

	/** Request message for KeyManagementService.AsymmetricSign. */
	export interface AsymmetricSignRequestFormProperties {

		/** Optional. The data to sign. It can't be supplied if AsymmetricSignRequest.digest is supplied. */
		data: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the AsymmetricSignRequest.data. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.data) is equal to AsymmetricSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		dataCrc32c: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the AsymmetricSignRequest.digest. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.digest using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.digest) is equal to AsymmetricSignRequest.digest_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		digestCrc32c: FormControl<string | null | undefined>,
	}
	export function CreateAsymmetricSignRequestFormGroup() {
		return new FormGroup<AsymmetricSignRequestFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			dataCrc32c: new FormControl<string | null | undefined>(undefined),
			digestCrc32c: new FormControl<string | null | undefined>(undefined),
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

		/** The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing. */
		name?: string | null;

		/** The ProtectionLevel of the CryptoKeyVersion used for signing. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;

		/** The created signature. */
		signature?: string | null;

		/** Integrity verification field. A CRC32C checksum of the returned AsymmetricSignResponse.signature. An integrity check of AsymmetricSignResponse.signature can be performed by computing the CRC32C checksum of AsymmetricSignResponse.signature and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		signatureCrc32c?: string | null;

		/** Integrity verification field. A flag indicating whether AsymmetricSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that AsymmetricSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedDataCrc32c?: boolean | null;

		/** Integrity verification field. A flag indicating whether AsymmetricSignRequest.digest_crc32c was received by KeyManagementService and used for the integrity verification of the digest. A false value of this field indicates either that AsymmetricSignRequest.digest_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricSignRequest.digest_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedDigestCrc32c?: boolean | null;
	}

	/** Response message for KeyManagementService.AsymmetricSign. */
	export interface AsymmetricSignResponseFormProperties {

		/** The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing. */
		name: FormControl<string | null | undefined>,

		/** The ProtectionLevel of the CryptoKeyVersion used for signing. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,

		/** The created signature. */
		signature: FormControl<string | null | undefined>,

		/** Integrity verification field. A CRC32C checksum of the returned AsymmetricSignResponse.signature. An integrity check of AsymmetricSignResponse.signature can be performed by computing the CRC32C checksum of AsymmetricSignResponse.signature and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		signatureCrc32c: FormControl<string | null | undefined>,

		/** Integrity verification field. A flag indicating whether AsymmetricSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that AsymmetricSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedDataCrc32c: FormControl<boolean | null | undefined>,

		/** Integrity verification field. A flag indicating whether AsymmetricSignRequest.digest_crc32c was received by KeyManagementService and used for the integrity verification of the digest. A false value of this field indicates either that AsymmetricSignRequest.digest_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricSignRequest.digest_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedDigestCrc32c: FormControl<boolean | null | undefined>,
	}
	export function CreateAsymmetricSignResponseFormGroup() {
		return new FormGroup<AsymmetricSignResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
			signatureCrc32c: new FormControl<string | null | undefined>(undefined),
			verifiedDataCrc32c: new FormControl<boolean | null | undefined>(undefined),
			verifiedDigestCrc32c: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<AuditLogConfigLogType | null | undefined>,
	}
	export function CreateAuditLogConfigFormGroup() {
		return new FormGroup<AuditLogConfigFormProperties>({
			logType: new FormControl<AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


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


	/** A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas. */
	export interface Certificate {

		/** Output only. The issuer distinguished name in RFC 2253 format. Only present if parsed is true. */
		issuer?: string | null;

		/** Output only. The certificate is not valid after this time. Only present if parsed is true. */
		notAfterTime?: string | null;

		/** Output only. The certificate is not valid before this time. Only present if parsed is true. */
		notBeforeTime?: string | null;

		/** Output only. True if the certificate was parsed successfully. */
		parsed?: boolean | null;

		/** Required. The raw certificate bytes in DER format. */
		rawDer?: string | null;

		/** Output only. The certificate serial number as a hex string. Only present if parsed is true. */
		serialNumber?: string | null;

		/** Output only. The SHA-256 certificate fingerprint as a hex string. Only present if parsed is true. */
		sha256Fingerprint?: string | null;

		/** Output only. The subject distinguished name in RFC 2253 format. Only present if parsed is true. */
		subject?: string | null;

		/** Output only. The subject Alternative DNS names. Only present if parsed is true. */
		subjectAlternativeDnsNames?: Array<string>;
	}

	/** A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas. */
	export interface CertificateFormProperties {

		/** Output only. The issuer distinguished name in RFC 2253 format. Only present if parsed is true. */
		issuer: FormControl<string | null | undefined>,

		/** Output only. The certificate is not valid after this time. Only present if parsed is true. */
		notAfterTime: FormControl<string | null | undefined>,

		/** Output only. The certificate is not valid before this time. Only present if parsed is true. */
		notBeforeTime: FormControl<string | null | undefined>,

		/** Output only. True if the certificate was parsed successfully. */
		parsed: FormControl<boolean | null | undefined>,

		/** Required. The raw certificate bytes in DER format. */
		rawDer: FormControl<string | null | undefined>,

		/** Output only. The certificate serial number as a hex string. Only present if parsed is true. */
		serialNumber: FormControl<string | null | undefined>,

		/** Output only. The SHA-256 certificate fingerprint as a hex string. Only present if parsed is true. */
		sha256Fingerprint: FormControl<string | null | undefined>,

		/** Output only. The subject distinguished name in RFC 2253 format. Only present if parsed is true. */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			issuer: new FormControl<string | null | undefined>(undefined),
			notAfterTime: new FormControl<string | null | undefined>(undefined),
			notBeforeTime: new FormControl<string | null | undefined>(undefined),
			parsed: new FormControl<boolean | null | undefined>(undefined),
			rawDer: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			sha256Fingerprint: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2. */
	export interface CertificateChains {

		/** Cavium certificate chain corresponding to the attestation. */
		caviumCerts?: Array<string>;

		/** Google card certificate chain corresponding to the attestation. */
		googleCardCerts?: Array<string>;

		/** Google partition certificate chain corresponding to the attestation. */
		googlePartitionCerts?: Array<string>;
	}

	/** Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2. */
	export interface CertificateChainsFormProperties {
	}
	export function CreateCertificateChainsFormGroup() {
		return new FormGroup<CertificateChainsFormProperties>({
		});

	}


	/** A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations. */
	export interface CryptoKey {

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
		primary?: CryptoKeyVersion;

		/** Immutable. The immutable purpose of this CryptoKey. */
		purpose?: CryptoKeyPurpose | null;

		/** next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted. */
		rotationPeriod?: string | null;

		/** A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation. */
		versionTemplate?: CryptoKeyVersionTemplate;
	}

	/** A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations. */
	export interface CryptoKeyFormProperties {

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
		purpose: FormControl<CryptoKeyPurpose | null | undefined>,

		/** next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted. */
		rotationPeriod: FormControl<string | null | undefined>,
	}
	export function CreateCryptoKeyFormGroup() {
		return new FormGroup<CryptoKeyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			cryptoKeyBackend: new FormControl<string | null | undefined>(undefined),
			destroyScheduledDuration: new FormControl<string | null | undefined>(undefined),
			importOnly: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nextRotationTime: new FormControl<string | null | undefined>(undefined),
			purpose: new FormControl<CryptoKeyPurpose | null | undefined>(undefined),
			rotationPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS. */
	export interface CryptoKeyVersion {

		/** Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports. */
		algorithm?: CryptoKeyVersionAlgorithm | null;

		/** Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key). */
		attestation?: KeyOperationAttestation;

		/** Output only. The time at which this CryptoKeyVersion was created. */
		createTime?: string | null;

		/** Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED. */
		destroyEventTime?: string | null;

		/** Output only. The time this CryptoKeyVersion's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED. */
		destroyTime?: string | null;

		/** Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED. */
		externalDestructionFailureReason?: string | null;

		/** ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels. */
		externalProtectionLevelOptions?: ExternalProtectionLevelOptions;

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
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;

		/** Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version. */
		reimportEligible?: boolean | null;

		/** The current state of the CryptoKeyVersion. */
		state?: CryptoKeyVersionState | null;
	}

	/** A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS. */
	export interface CryptoKeyVersionFormProperties {

		/** Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports. */
		algorithm: FormControl<CryptoKeyVersionAlgorithm | null | undefined>,

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
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,

		/** Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version. */
		reimportEligible: FormControl<boolean | null | undefined>,

		/** The current state of the CryptoKeyVersion. */
		state: FormControl<CryptoKeyVersionState | null | undefined>,
	}
	export function CreateCryptoKeyVersionFormGroup() {
		return new FormGroup<CryptoKeyVersionFormProperties>({
			algorithm: new FormControl<CryptoKeyVersionAlgorithm | null | undefined>(undefined),
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
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
			reimportEligible: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<CryptoKeyVersionState | null | undefined>(undefined),
		});

	}

	export enum CryptoKeyVersionAlgorithm { CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED = 'CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED', GOOGLE_SYMMETRIC_ENCRYPTION = 'GOOGLE_SYMMETRIC_ENCRYPTION', AES_128_GCM = 'AES_128_GCM', AES_256_GCM = 'AES_256_GCM', AES_128_CBC = 'AES_128_CBC', AES_256_CBC = 'AES_256_CBC', AES_128_CTR = 'AES_128_CTR', AES_256_CTR = 'AES_256_CTR', RSA_SIGN_PSS_2048_SHA256 = 'RSA_SIGN_PSS_2048_SHA256', RSA_SIGN_PSS_3072_SHA256 = 'RSA_SIGN_PSS_3072_SHA256', RSA_SIGN_PSS_4096_SHA256 = 'RSA_SIGN_PSS_4096_SHA256', RSA_SIGN_PSS_4096_SHA512 = 'RSA_SIGN_PSS_4096_SHA512', RSA_SIGN_PKCS1_2048_SHA256 = 'RSA_SIGN_PKCS1_2048_SHA256', RSA_SIGN_PKCS1_3072_SHA256 = 'RSA_SIGN_PKCS1_3072_SHA256', RSA_SIGN_PKCS1_4096_SHA256 = 'RSA_SIGN_PKCS1_4096_SHA256', RSA_SIGN_PKCS1_4096_SHA512 = 'RSA_SIGN_PKCS1_4096_SHA512', RSA_SIGN_RAW_PKCS1_2048 = 'RSA_SIGN_RAW_PKCS1_2048', RSA_SIGN_RAW_PKCS1_3072 = 'RSA_SIGN_RAW_PKCS1_3072', RSA_SIGN_RAW_PKCS1_4096 = 'RSA_SIGN_RAW_PKCS1_4096', RSA_DECRYPT_OAEP_2048_SHA256 = 'RSA_DECRYPT_OAEP_2048_SHA256', RSA_DECRYPT_OAEP_3072_SHA256 = 'RSA_DECRYPT_OAEP_3072_SHA256', RSA_DECRYPT_OAEP_4096_SHA256 = 'RSA_DECRYPT_OAEP_4096_SHA256', RSA_DECRYPT_OAEP_4096_SHA512 = 'RSA_DECRYPT_OAEP_4096_SHA512', RSA_DECRYPT_OAEP_2048_SHA1 = 'RSA_DECRYPT_OAEP_2048_SHA1', RSA_DECRYPT_OAEP_3072_SHA1 = 'RSA_DECRYPT_OAEP_3072_SHA1', RSA_DECRYPT_OAEP_4096_SHA1 = 'RSA_DECRYPT_OAEP_4096_SHA1', EC_SIGN_P256_SHA256 = 'EC_SIGN_P256_SHA256', EC_SIGN_P384_SHA384 = 'EC_SIGN_P384_SHA384', EC_SIGN_SECP256K1_SHA256 = 'EC_SIGN_SECP256K1_SHA256', HMAC_SHA256 = 'HMAC_SHA256', HMAC_SHA1 = 'HMAC_SHA1', HMAC_SHA384 = 'HMAC_SHA384', HMAC_SHA512 = 'HMAC_SHA512', HMAC_SHA224 = 'HMAC_SHA224', EXTERNAL_SYMMETRIC_ENCRYPTION = 'EXTERNAL_SYMMETRIC_ENCRYPTION' }


	/** Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key). */
	export interface KeyOperationAttestation {

		/** Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2. */
		certChains?: CertificateChains;

		/** Output only. The attestation data provided by the HSM when the key operation was performed. */
		content?: string | null;

		/** Output only. The format of the attestation data. */
		format?: KeyOperationAttestationFormat | null;
	}

	/** Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key). */
	export interface KeyOperationAttestationFormProperties {

		/** Output only. The attestation data provided by the HSM when the key operation was performed. */
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

	export enum KeyOperationAttestationFormat { ATTESTATION_FORMAT_UNSPECIFIED = 'ATTESTATION_FORMAT_UNSPECIFIED', CAVIUM_V1_COMPRESSED = 'CAVIUM_V1_COMPRESSED', CAVIUM_V2_COMPRESSED = 'CAVIUM_V2_COMPRESSED' }


	/** ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels. */
	export interface ExternalProtectionLevelOptions {

		/** The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of external_key_uri when using an EkmConnection. */
		ekmConnectionKeyPath?: string | null;

		/** The URI for an external resource that this CryptoKeyVersion represents. */
		externalKeyUri?: string | null;
	}

	/** ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels. */
	export interface ExternalProtectionLevelOptionsFormProperties {

		/** The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of external_key_uri when using an EkmConnection. */
		ekmConnectionKeyPath: FormControl<string | null | undefined>,

		/** The URI for an external resource that this CryptoKeyVersion represents. */
		externalKeyUri: FormControl<string | null | undefined>,
	}
	export function CreateExternalProtectionLevelOptionsFormGroup() {
		return new FormGroup<ExternalProtectionLevelOptionsFormProperties>({
			ekmConnectionKeyPath: new FormControl<string | null | undefined>(undefined),
			externalKeyUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CryptoKeyVersionState { CRYPTO_KEY_VERSION_STATE_UNSPECIFIED = 'CRYPTO_KEY_VERSION_STATE_UNSPECIFIED', PENDING_GENERATION = 'PENDING_GENERATION', ENABLED = 'ENABLED', DISABLED = 'DISABLED', DESTROYED = 'DESTROYED', DESTROY_SCHEDULED = 'DESTROY_SCHEDULED', PENDING_IMPORT = 'PENDING_IMPORT', IMPORT_FAILED = 'IMPORT_FAILED', GENERATION_FAILED = 'GENERATION_FAILED', PENDING_EXTERNAL_DESTRUCTION = 'PENDING_EXTERNAL_DESTRUCTION', EXTERNAL_DESTRUCTION_FAILED = 'EXTERNAL_DESTRUCTION_FAILED' }

	export enum CryptoKeyPurpose { CRYPTO_KEY_PURPOSE_UNSPECIFIED = 'CRYPTO_KEY_PURPOSE_UNSPECIFIED', ENCRYPT_DECRYPT = 'ENCRYPT_DECRYPT', ASYMMETRIC_SIGN = 'ASYMMETRIC_SIGN', ASYMMETRIC_DECRYPT = 'ASYMMETRIC_DECRYPT', RAW_ENCRYPT_DECRYPT = 'RAW_ENCRYPT_DECRYPT', MAC = 'MAC' }


	/** A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation. */
	export interface CryptoKeyVersionTemplate {

		/** Required. Algorithm to use when creating a CryptoKeyVersion based on this template. For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT. */
		algorithm?: CryptoKeyVersionAlgorithm | null;

		/** ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;
	}

	/** A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation. */
	export interface CryptoKeyVersionTemplateFormProperties {

		/** Required. Algorithm to use when creating a CryptoKeyVersion based on this template. For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT. */
		algorithm: FormControl<CryptoKeyVersionAlgorithm | null | undefined>,

		/** ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,
	}
	export function CreateCryptoKeyVersionTemplateFormGroup() {
		return new FormGroup<CryptoKeyVersionTemplateFormProperties>({
			algorithm: new FormControl<CryptoKeyVersionAlgorithm | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.Decrypt. */
	export interface DecryptRequest {

		/** Optional. Optional data that must match the data originally supplied in EncryptRequest.additional_authenticated_data. */
		additionalAuthenticatedData?: string | null;

		/** Optional. An optional CRC32C checksum of the DecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.additional_authenticated_data) is equal to DecryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		additionalAuthenticatedDataCrc32c?: string | null;

		/** Required. The encrypted data originally returned in EncryptResponse.ciphertext. */
		ciphertext?: string | null;

		/** Optional. An optional CRC32C checksum of the DecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.ciphertext) is equal to DecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		ciphertextCrc32c?: string | null;
	}

	/** Request message for KeyManagementService.Decrypt. */
	export interface DecryptRequestFormProperties {

		/** Optional. Optional data that must match the data originally supplied in EncryptRequest.additional_authenticated_data. */
		additionalAuthenticatedData: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the DecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.additional_authenticated_data) is equal to DecryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		additionalAuthenticatedDataCrc32c: FormControl<string | null | undefined>,

		/** Required. The encrypted data originally returned in EncryptResponse.ciphertext. */
		ciphertext: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the DecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.ciphertext) is equal to DecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		ciphertextCrc32c: FormControl<string | null | undefined>,
	}
	export function CreateDecryptRequestFormGroup() {
		return new FormGroup<DecryptRequestFormProperties>({
			additionalAuthenticatedData: new FormControl<string | null | undefined>(undefined),
			additionalAuthenticatedDataCrc32c: new FormControl<string | null | undefined>(undefined),
			ciphertext: new FormControl<string | null | undefined>(undefined),
			ciphertextCrc32c: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.Decrypt. */
	export interface DecryptResponse {

		/** The decrypted data originally supplied in EncryptRequest.plaintext. */
		plaintext?: string | null;

		/** Integrity verification field. A CRC32C checksum of the returned DecryptResponse.plaintext. An integrity check of DecryptResponse.plaintext can be performed by computing the CRC32C checksum of DecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		plaintextCrc32c?: string | null;

		/** The ProtectionLevel of the CryptoKeyVersion used in decryption. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;

		/** Whether the Decryption was performed using the primary key version. */
		usedPrimary?: boolean | null;
	}

	/** Response message for KeyManagementService.Decrypt. */
	export interface DecryptResponseFormProperties {

		/** The decrypted data originally supplied in EncryptRequest.plaintext. */
		plaintext: FormControl<string | null | undefined>,

		/** Integrity verification field. A CRC32C checksum of the returned DecryptResponse.plaintext. An integrity check of DecryptResponse.plaintext can be performed by computing the CRC32C checksum of DecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		plaintextCrc32c: FormControl<string | null | undefined>,

		/** The ProtectionLevel of the CryptoKeyVersion used in decryption. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,

		/** Whether the Decryption was performed using the primary key version. */
		usedPrimary: FormControl<boolean | null | undefined>,
	}
	export function CreateDecryptResponseFormGroup() {
		return new FormGroup<DecryptResponseFormProperties>({
			plaintext: new FormControl<string | null | undefined>(undefined),
			plaintextCrc32c: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
			usedPrimary: new FormControl<boolean | null | undefined>(undefined),
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


	/** An EkmConfig is a singleton resource that represents configuration parameters that apply to all CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC in a given project and location. */
	export interface EkmConfig {

		/** Optional. Resource name of the default EkmConnection. Setting this field to the empty string removes the default. */
		defaultEkmConnection?: string | null;

		/** Output only. The resource name for the EkmConfig in the format `projects/locations/ekmConfig`. */
		name?: string | null;
	}

	/** An EkmConfig is a singleton resource that represents configuration parameters that apply to all CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC in a given project and location. */
	export interface EkmConfigFormProperties {

		/** Optional. Resource name of the default EkmConnection. Setting this field to the empty string removes the default. */
		defaultEkmConnection: FormControl<string | null | undefined>,

		/** Output only. The resource name for the EkmConfig in the format `projects/locations/ekmConfig`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEkmConfigFormGroup() {
		return new FormGroup<EkmConfigFormProperties>({
			defaultEkmConnection: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection. */
	export interface EkmConnection {

		/** Output only. The time at which the EkmConnection was created. */
		createTime?: string | null;

		/** Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS. */
		cryptoSpacePath?: string | null;

		/** Optional. Etag of the currently stored EkmConnection. */
		etag?: string | null;

		/** Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL. */
		keyManagementMode?: EkmConnectionKeyManagementMode | null;

		/** Output only. The resource name for the EkmConnection in the format `projects/locations/ekmConnections/*`. */
		name?: string | null;

		/** A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported. */
		serviceResolvers?: Array<ServiceResolver>;
	}

	/** An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection. */
	export interface EkmConnectionFormProperties {

		/** Output only. The time at which the EkmConnection was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS. */
		cryptoSpacePath: FormControl<string | null | undefined>,

		/** Optional. Etag of the currently stored EkmConnection. */
		etag: FormControl<string | null | undefined>,

		/** Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL. */
		keyManagementMode: FormControl<EkmConnectionKeyManagementMode | null | undefined>,

		/** Output only. The resource name for the EkmConnection in the format `projects/locations/ekmConnections/*`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEkmConnectionFormGroup() {
		return new FormGroup<EkmConnectionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			cryptoSpacePath: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			keyManagementMode: new FormControl<EkmConnectionKeyManagementMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EkmConnectionKeyManagementMode { KEY_MANAGEMENT_MODE_UNSPECIFIED = 'KEY_MANAGEMENT_MODE_UNSPECIFIED', MANUAL = 'MANUAL', CLOUD_KMS = 'CLOUD_KMS' }


	/** A ServiceResolver represents an EKM replica that can be reached within an EkmConnection. */
	export interface ServiceResolver {

		/** Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest. */
		endpointFilter?: string | null;

		/** Required. The hostname of the EKM replica used at TLS and HTTP layers. */
		hostname?: string | null;

		/** Required. A list of leaf server certificates used to authenticate HTTPS connections to the EKM replica. Currently, a maximum of 10 Certificate is supported. */
		serverCertificates?: Array<Certificate>;

		/** Required. The resource name of the Service Directory service pointing to an EKM replica, in the format `projects/locations/namespaces/services/*`. */
		serviceDirectoryService?: string | null;
	}

	/** A ServiceResolver represents an EKM replica that can be reached within an EkmConnection. */
	export interface ServiceResolverFormProperties {

		/** Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest. */
		endpointFilter: FormControl<string | null | undefined>,

		/** Required. The hostname of the EKM replica used at TLS and HTTP layers. */
		hostname: FormControl<string | null | undefined>,

		/** Required. The resource name of the Service Directory service pointing to an EKM replica, in the format `projects/locations/namespaces/services/*`. */
		serviceDirectoryService: FormControl<string | null | undefined>,
	}
	export function CreateServiceResolverFormGroup() {
		return new FormGroup<ServiceResolverFormProperties>({
			endpointFilter: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			serviceDirectoryService: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.Encrypt. */
	export interface EncryptRequest {

		/** Optional. Optional data that, if specified, must also be provided during decryption through DecryptRequest.additional_authenticated_data. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys the AAD must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB. */
		additionalAuthenticatedData?: string | null;

		/** Optional. An optional CRC32C checksum of the EncryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.additional_authenticated_data) is equal to EncryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		additionalAuthenticatedDataCrc32c?: string | null;

		/** Required. The data to encrypt. Must be no larger than 64KiB. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB. */
		plaintext?: string | null;

		/** Optional. An optional CRC32C checksum of the EncryptRequest.plaintext. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.plaintext) is equal to EncryptRequest.plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		plaintextCrc32c?: string | null;
	}

	/** Request message for KeyManagementService.Encrypt. */
	export interface EncryptRequestFormProperties {

		/** Optional. Optional data that, if specified, must also be provided during decryption through DecryptRequest.additional_authenticated_data. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys the AAD must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB. */
		additionalAuthenticatedData: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the EncryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.additional_authenticated_data) is equal to EncryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		additionalAuthenticatedDataCrc32c: FormControl<string | null | undefined>,

		/** Required. The data to encrypt. Must be no larger than 64KiB. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB. */
		plaintext: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the EncryptRequest.plaintext. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.plaintext) is equal to EncryptRequest.plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		plaintextCrc32c: FormControl<string | null | undefined>,
	}
	export function CreateEncryptRequestFormGroup() {
		return new FormGroup<EncryptRequestFormProperties>({
			additionalAuthenticatedData: new FormControl<string | null | undefined>(undefined),
			additionalAuthenticatedDataCrc32c: new FormControl<string | null | undefined>(undefined),
			plaintext: new FormControl<string | null | undefined>(undefined),
			plaintextCrc32c: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.Encrypt. */
	export interface EncryptResponse {

		/** The encrypted data. */
		ciphertext?: string | null;

		/** Integrity verification field. A CRC32C checksum of the returned EncryptResponse.ciphertext. An integrity check of EncryptResponse.ciphertext can be performed by computing the CRC32C checksum of EncryptResponse.ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		ciphertextCrc32c?: string | null;

		/** The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption. */
		name?: string | null;

		/** The ProtectionLevel of the CryptoKeyVersion used in encryption. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;

		/** Integrity verification field. A flag indicating whether EncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of the AAD. A false value of this field indicates either that EncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedAdditionalAuthenticatedDataCrc32c?: boolean | null;

		/** Integrity verification field. A flag indicating whether EncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that EncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedPlaintextCrc32c?: boolean | null;
	}

	/** Response message for KeyManagementService.Encrypt. */
	export interface EncryptResponseFormProperties {

		/** The encrypted data. */
		ciphertext: FormControl<string | null | undefined>,

		/** Integrity verification field. A CRC32C checksum of the returned EncryptResponse.ciphertext. An integrity check of EncryptResponse.ciphertext can be performed by computing the CRC32C checksum of EncryptResponse.ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		ciphertextCrc32c: FormControl<string | null | undefined>,

		/** The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption. */
		name: FormControl<string | null | undefined>,

		/** The ProtectionLevel of the CryptoKeyVersion used in encryption. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,

		/** Integrity verification field. A flag indicating whether EncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of the AAD. A false value of this field indicates either that EncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedAdditionalAuthenticatedDataCrc32c: FormControl<boolean | null | undefined>,

		/** Integrity verification field. A flag indicating whether EncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that EncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedPlaintextCrc32c: FormControl<boolean | null | undefined>,
	}
	export function CreateEncryptResponseFormGroup() {
		return new FormGroup<EncryptResponseFormProperties>({
			ciphertext: new FormControl<string | null | undefined>(undefined),
			ciphertextCrc32c: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
			verifiedAdditionalAuthenticatedDataCrc32c: new FormControl<boolean | null | undefined>(undefined),
			verifiedPlaintextCrc32c: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.GenerateRandomBytes. */
	export interface GenerateRandomBytesRequest {

		/** The length in bytes of the amount of randomness to retrieve. Minimum 8 bytes, maximum 1024 bytes. */
		lengthBytes?: number | null;

		/** The ProtectionLevel to use when generating the random data. Currently, only HSM protection level is supported. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;
	}

	/** Request message for KeyManagementService.GenerateRandomBytes. */
	export interface GenerateRandomBytesRequestFormProperties {

		/** The length in bytes of the amount of randomness to retrieve. Minimum 8 bytes, maximum 1024 bytes. */
		lengthBytes: FormControl<number | null | undefined>,

		/** The ProtectionLevel to use when generating the random data. Currently, only HSM protection level is supported. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,
	}
	export function CreateGenerateRandomBytesRequestFormGroup() {
		return new FormGroup<GenerateRandomBytesRequestFormProperties>({
			lengthBytes: new FormControl<number | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.GenerateRandomBytes. */
	export interface GenerateRandomBytesResponse {

		/** The generated data. */
		data?: string | null;

		/** Integrity verification field. A CRC32C checksum of the returned GenerateRandomBytesResponse.data. An integrity check of GenerateRandomBytesResponse.data can be performed by computing the CRC32C checksum of GenerateRandomBytesResponse.data and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		dataCrc32c?: string | null;
	}

	/** Response message for KeyManagementService.GenerateRandomBytes. */
	export interface GenerateRandomBytesResponseFormProperties {

		/** The generated data. */
		data: FormControl<string | null | undefined>,

		/** Integrity verification field. A CRC32C checksum of the returned GenerateRandomBytesResponse.data. An integrity check of GenerateRandomBytesResponse.data can be performed by computing the CRC32C checksum of GenerateRandomBytesResponse.data and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		dataCrc32c: FormControl<string | null | undefined>,
	}
	export function CreateGenerateRandomBytesResponseFormGroup() {
		return new FormGroup<GenerateRandomBytesResponseFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			dataCrc32c: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.ImportCryptoKeyVersion. */
	export interface ImportCryptoKeyVersionRequest {

		/** Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into. */
		algorithm?: CryptoKeyVersionAlgorithm | null;

		/** Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created. If this field is present, the supplied key material is imported into the existing CryptoKeyVersion. To import into an existing CryptoKeyVersion, the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent, have been previously created via ImportCryptoKeyVersion, and be in DESTROYED or IMPORT_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material. */
		cryptoKeyVersion?: string | null;

		/** Required. The name of the ImportJob that was used to wrap this key material. */
		importJob?: string | null;

		/** Optional. This field has the same meaning as wrapped_key. Prefer to use that field in new work. Either that field or this field (but not both) must be specified. */
		rsaAesWrappedKey?: string | null;

		/** Optional. The wrapped key material to import. Before wrapping, key material must be formatted. If importing symmetric key material, the expected key material format is plain bytes. If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208). When wrapping with import methods (RSA_OAEP_3072_SHA1_AES_256 or RSA_OAEP_4096_SHA1_AES_256 or RSA_OAEP_3072_SHA256_AES_256 or RSA_OAEP_4096_SHA256_AES_256), this field must contain the concatenation of: 1. An ephemeral AES-256 wrapping key wrapped with the public_key using RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty label. 2. The formatted key to be imported, wrapped with the ephemeral AES-256 key using AES-KWP (RFC 5649). This format is the same as the format produced by PKCS#11 mechanism CKM_RSA_AES_KEY_WRAP. When wrapping with import methods (RSA_OAEP_3072_SHA256 or RSA_OAEP_4096_SHA256), this field must contain the formatted key to be imported, wrapped with the public_key using RSAES-OAEP with SHA-256, MGF1 with SHA-256, and an empty label. */
		wrappedKey?: string | null;
	}

	/** Request message for KeyManagementService.ImportCryptoKeyVersion. */
	export interface ImportCryptoKeyVersionRequestFormProperties {

		/** Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into. */
		algorithm: FormControl<CryptoKeyVersionAlgorithm | null | undefined>,

		/** Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created. If this field is present, the supplied key material is imported into the existing CryptoKeyVersion. To import into an existing CryptoKeyVersion, the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent, have been previously created via ImportCryptoKeyVersion, and be in DESTROYED or IMPORT_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material. */
		cryptoKeyVersion: FormControl<string | null | undefined>,

		/** Required. The name of the ImportJob that was used to wrap this key material. */
		importJob: FormControl<string | null | undefined>,

		/** Optional. This field has the same meaning as wrapped_key. Prefer to use that field in new work. Either that field or this field (but not both) must be specified. */
		rsaAesWrappedKey: FormControl<string | null | undefined>,

		/** Optional. The wrapped key material to import. Before wrapping, key material must be formatted. If importing symmetric key material, the expected key material format is plain bytes. If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208). When wrapping with import methods (RSA_OAEP_3072_SHA1_AES_256 or RSA_OAEP_4096_SHA1_AES_256 or RSA_OAEP_3072_SHA256_AES_256 or RSA_OAEP_4096_SHA256_AES_256), this field must contain the concatenation of: 1. An ephemeral AES-256 wrapping key wrapped with the public_key using RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty label. 2. The formatted key to be imported, wrapped with the ephemeral AES-256 key using AES-KWP (RFC 5649). This format is the same as the format produced by PKCS#11 mechanism CKM_RSA_AES_KEY_WRAP. When wrapping with import methods (RSA_OAEP_3072_SHA256 or RSA_OAEP_4096_SHA256), this field must contain the formatted key to be imported, wrapped with the public_key using RSAES-OAEP with SHA-256, MGF1 with SHA-256, and an empty label. */
		wrappedKey: FormControl<string | null | undefined>,
	}
	export function CreateImportCryptoKeyVersionRequestFormGroup() {
		return new FormGroup<ImportCryptoKeyVersionRequestFormProperties>({
			algorithm: new FormControl<CryptoKeyVersionAlgorithm | null | undefined>(undefined),
			cryptoKeyVersion: new FormControl<string | null | undefined>(undefined),
			importJob: new FormControl<string | null | undefined>(undefined),
			rsaAesWrappedKey: new FormControl<string | null | undefined>(undefined),
			wrappedKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key). */
	export interface ImportJob {

		/** Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key). */
		attestation?: KeyOperationAttestation;

		/** Output only. The time at which this ImportJob was created. */
		createTime?: string | null;

		/** Output only. The time this ImportJob expired. Only present if state is EXPIRED. */
		expireEventTime?: string | null;

		/** Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material. */
		expireTime?: string | null;

		/** Output only. The time this ImportJob's key material was generated. */
		generateTime?: string | null;

		/** Required. Immutable. The wrapping method to be used for incoming key material. */
		importMethod?: ImportJobImportMethod | null;

		/** Output only. The resource name for this ImportJob in the format `projects/locations/keyRings/importJobs/*`. */
		name?: string | null;

		/** Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;

		/** The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod. */
		publicKey?: WrappingPublicKey;

		/** Output only. The current state of the ImportJob, indicating if it can be used. */
		state?: ImportJobState | null;
	}

	/** An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key). */
	export interface ImportJobFormProperties {

		/** Output only. The time at which this ImportJob was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time this ImportJob expired. Only present if state is EXPIRED. */
		expireEventTime: FormControl<string | null | undefined>,

		/** Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The time this ImportJob's key material was generated. */
		generateTime: FormControl<string | null | undefined>,

		/** Required. Immutable. The wrapping method to be used for incoming key material. */
		importMethod: FormControl<ImportJobImportMethod | null | undefined>,

		/** Output only. The resource name for this ImportJob in the format `projects/locations/keyRings/importJobs/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,

		/** Output only. The current state of the ImportJob, indicating if it can be used. */
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
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
			state: new FormControl<ImportJobState | null | undefined>(undefined),
		});

	}

	export enum ImportJobImportMethod { IMPORT_METHOD_UNSPECIFIED = 'IMPORT_METHOD_UNSPECIFIED', RSA_OAEP_3072_SHA1_AES_256 = 'RSA_OAEP_3072_SHA1_AES_256', RSA_OAEP_4096_SHA1_AES_256 = 'RSA_OAEP_4096_SHA1_AES_256', RSA_OAEP_3072_SHA256_AES_256 = 'RSA_OAEP_3072_SHA256_AES_256', RSA_OAEP_4096_SHA256_AES_256 = 'RSA_OAEP_4096_SHA256_AES_256', RSA_OAEP_3072_SHA256 = 'RSA_OAEP_3072_SHA256', RSA_OAEP_4096_SHA256 = 'RSA_OAEP_4096_SHA256' }


	/** The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod. */
	export interface WrappingPublicKey {

		/** The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13). */
		pem?: string | null;
	}

	/** The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod. */
	export interface WrappingPublicKeyFormProperties {

		/** The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13). */
		pem: FormControl<string | null | undefined>,
	}
	export function CreateWrappingPublicKeyFormGroup() {
		return new FormGroup<WrappingPublicKeyFormProperties>({
			pem: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportJobState { IMPORT_JOB_STATE_UNSPECIFIED = 'IMPORT_JOB_STATE_UNSPECIFIED', PENDING_GENERATION = 'PENDING_GENERATION', ACTIVE = 'ACTIVE', EXPIRED = 'EXPIRED' }


	/** A KeyRing is a toplevel logical grouping of CryptoKeys. */
	export interface KeyRing {

		/** Output only. The time at which this KeyRing was created. */
		createTime?: string | null;

		/** Output only. The resource name for the KeyRing in the format `projects/locations/keyRings/*`. */
		name?: string | null;
	}

	/** A KeyRing is a toplevel logical grouping of CryptoKeys. */
	export interface KeyRingFormProperties {

		/** Output only. The time at which this KeyRing was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The resource name for the KeyRing in the format `projects/locations/keyRings/*`. */
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

		/** A token to retrieve next page of results. Pass this value in ListCryptoKeyVersionsRequest.page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The total number of CryptoKeyVersions that matched the query. */
		totalSize?: number | null;
	}

	/** Response message for KeyManagementService.ListCryptoKeyVersions. */
	export interface ListCryptoKeyVersionsResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in ListCryptoKeyVersionsRequest.page_token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of CryptoKeyVersions that matched the query. */
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

		/** A token to retrieve next page of results. Pass this value in ListCryptoKeysRequest.page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The total number of CryptoKeys that matched the query. */
		totalSize?: number | null;
	}

	/** Response message for KeyManagementService.ListCryptoKeys. */
	export interface ListCryptoKeysResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in ListCryptoKeysRequest.page_token to retrieve the next page of results. */
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


	/** Response message for EkmService.ListEkmConnections. */
	export interface ListEkmConnectionsResponse {

		/** The list of EkmConnections. */
		ekmConnections?: Array<EkmConnection>;

		/** A token to retrieve next page of results. Pass this value in ListEkmConnectionsRequest.page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The total number of EkmConnections that matched the query. */
		totalSize?: number | null;
	}

	/** Response message for EkmService.ListEkmConnections. */
	export interface ListEkmConnectionsResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in ListEkmConnectionsRequest.page_token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of EkmConnections that matched the query. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListEkmConnectionsResponseFormGroup() {
		return new FormGroup<ListEkmConnectionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.ListImportJobs. */
	export interface ListImportJobsResponse {

		/** The list of ImportJobs. */
		importJobs?: Array<ImportJob>;

		/** A token to retrieve next page of results. Pass this value in ListImportJobsRequest.page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The total number of ImportJobs that matched the query. */
		totalSize?: number | null;
	}

	/** Response message for KeyManagementService.ListImportJobs. */
	export interface ListImportJobsResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in ListImportJobsRequest.page_token to retrieve the next page of results. */
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

		/** A token to retrieve next page of results. Pass this value in ListKeyRingsRequest.page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The total number of KeyRings that matched the query. */
		totalSize?: number | null;
	}

	/** Response message for KeyManagementService.ListKeyRings. */
	export interface ListKeyRingsResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in ListKeyRingsRequest.page_token to retrieve the next page of results. */
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


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
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

		/** Indicates whether CryptoKeys with protection_level EXTERNAL can be created in this location. */
		ekmAvailable?: boolean | null;

		/** Indicates whether CryptoKeys with protection_level HSM can be created in this location. */
		hsmAvailable?: boolean | null;
	}

	/** Cloud KMS metadata for the given google.cloud.location.Location. */
	export interface LocationMetadataFormProperties {

		/** Indicates whether CryptoKeys with protection_level EXTERNAL can be created in this location. */
		ekmAvailable: FormControl<boolean | null | undefined>,

		/** Indicates whether CryptoKeys with protection_level HSM can be created in this location. */
		hsmAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateLocationMetadataFormGroup() {
		return new FormGroup<LocationMetadataFormProperties>({
			ekmAvailable: new FormControl<boolean | null | undefined>(undefined),
			hsmAvailable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.MacSign. */
	export interface MacSignRequest {

		/** Required. The data to sign. The MAC tag is computed over this data field based on the specific algorithm. */
		data?: string | null;

		/** Optional. An optional CRC32C checksum of the MacSignRequest.data. If specified, KeyManagementService will verify the integrity of the received MacSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacSignRequest.data) is equal to MacSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		dataCrc32c?: string | null;
	}

	/** Request message for KeyManagementService.MacSign. */
	export interface MacSignRequestFormProperties {

		/** Required. The data to sign. The MAC tag is computed over this data field based on the specific algorithm. */
		data: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the MacSignRequest.data. If specified, KeyManagementService will verify the integrity of the received MacSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacSignRequest.data) is equal to MacSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		dataCrc32c: FormControl<string | null | undefined>,
	}
	export function CreateMacSignRequestFormGroup() {
		return new FormGroup<MacSignRequestFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			dataCrc32c: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.MacSign. */
	export interface MacSignResponse {

		/** The created signature. */
		mac?: string | null;

		/** Integrity verification field. A CRC32C checksum of the returned MacSignResponse.mac. An integrity check of MacSignResponse.mac can be performed by computing the CRC32C checksum of MacSignResponse.mac and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		macCrc32c?: string | null;

		/** The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing. */
		name?: string | null;

		/** The ProtectionLevel of the CryptoKeyVersion used for signing. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;

		/** Integrity verification field. A flag indicating whether MacSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedDataCrc32c?: boolean | null;
	}

	/** Response message for KeyManagementService.MacSign. */
	export interface MacSignResponseFormProperties {

		/** The created signature. */
		mac: FormControl<string | null | undefined>,

		/** Integrity verification field. A CRC32C checksum of the returned MacSignResponse.mac. An integrity check of MacSignResponse.mac can be performed by computing the CRC32C checksum of MacSignResponse.mac and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		macCrc32c: FormControl<string | null | undefined>,

		/** The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing. */
		name: FormControl<string | null | undefined>,

		/** The ProtectionLevel of the CryptoKeyVersion used for signing. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,

		/** Integrity verification field. A flag indicating whether MacSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedDataCrc32c: FormControl<boolean | null | undefined>,
	}
	export function CreateMacSignResponseFormGroup() {
		return new FormGroup<MacSignResponseFormProperties>({
			mac: new FormControl<string | null | undefined>(undefined),
			macCrc32c: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
			verifiedDataCrc32c: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.MacVerify. */
	export interface MacVerifyRequest {

		/** Required. The data used previously as a MacSignRequest.data to generate the MAC tag. */
		data?: string | null;

		/** Optional. An optional CRC32C checksum of the MacVerifyRequest.data. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.data) is equal to MacVerifyRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		dataCrc32c?: string | null;

		/** Required. The signature to verify. */
		mac?: string | null;

		/** Optional. An optional CRC32C checksum of the MacVerifyRequest.mac. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.mac using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.tag) is equal to MacVerifyRequest.mac_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		macCrc32c?: string | null;
	}

	/** Request message for KeyManagementService.MacVerify. */
	export interface MacVerifyRequestFormProperties {

		/** Required. The data used previously as a MacSignRequest.data to generate the MAC tag. */
		data: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the MacVerifyRequest.data. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.data) is equal to MacVerifyRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		dataCrc32c: FormControl<string | null | undefined>,

		/** Required. The signature to verify. */
		mac: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the MacVerifyRequest.mac. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.mac using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.tag) is equal to MacVerifyRequest.mac_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		macCrc32c: FormControl<string | null | undefined>,
	}
	export function CreateMacVerifyRequestFormGroup() {
		return new FormGroup<MacVerifyRequestFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			dataCrc32c: new FormControl<string | null | undefined>(undefined),
			mac: new FormControl<string | null | undefined>(undefined),
			macCrc32c: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.MacVerify. */
	export interface MacVerifyResponse {

		/** The resource name of the CryptoKeyVersion used for verification. Check this field to verify that the intended resource was used for verification. */
		name?: string | null;

		/** The ProtectionLevel of the CryptoKeyVersion used for verification. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;

		/** This field indicates whether or not the verification operation for MacVerifyRequest.mac over MacVerifyRequest.data was successful. */
		success?: boolean | null;

		/** Integrity verification field. A flag indicating whether MacVerifyRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacVerifyRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedDataCrc32c?: boolean | null;

		/** Integrity verification field. A flag indicating whether MacVerifyRequest.mac_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.mac_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacVerifyRequest.mac_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedMacCrc32c?: boolean | null;

		/** Integrity verification field. This value is used for the integrity verification of [MacVerifyResponse.success]. If the value of this field contradicts the value of [MacVerifyResponse.success], discard the response and perform a limited number of retries. */
		verifiedSuccessIntegrity?: boolean | null;
	}

	/** Response message for KeyManagementService.MacVerify. */
	export interface MacVerifyResponseFormProperties {

		/** The resource name of the CryptoKeyVersion used for verification. Check this field to verify that the intended resource was used for verification. */
		name: FormControl<string | null | undefined>,

		/** The ProtectionLevel of the CryptoKeyVersion used for verification. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,

		/** This field indicates whether or not the verification operation for MacVerifyRequest.mac over MacVerifyRequest.data was successful. */
		success: FormControl<boolean | null | undefined>,

		/** Integrity verification field. A flag indicating whether MacVerifyRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacVerifyRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedDataCrc32c: FormControl<boolean | null | undefined>,

		/** Integrity verification field. A flag indicating whether MacVerifyRequest.mac_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.mac_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacVerifyRequest.mac_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedMacCrc32c: FormControl<boolean | null | undefined>,

		/** Integrity verification field. This value is used for the integrity verification of [MacVerifyResponse.success]. If the value of this field contradicts the value of [MacVerifyResponse.success], discard the response and perform a limited number of retries. */
		verifiedSuccessIntegrity: FormControl<boolean | null | undefined>,
	}
	export function CreateMacVerifyResponseFormGroup() {
		return new FormGroup<MacVerifyResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			verifiedDataCrc32c: new FormControl<boolean | null | undefined>(undefined),
			verifiedMacCrc32c: new FormControl<boolean | null | undefined>(undefined),
			verifiedSuccessIntegrity: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

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


	/** The public keys for a given CryptoKeyVersion. Obtained via GetPublicKey. */
	export interface PublicKey {

		/** The Algorithm associated with this key. */
		algorithm?: CryptoKeyVersionAlgorithm | null;

		/** The name of the CryptoKeyVersion public key. Provided here for verification. NOTE: This field is in Beta. */
		name?: string | null;

		/** A public key encoded in PEM format, populated only when GetPublicKey returns one key. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13). */
		pem?: string | null;

		/** Integrity verification field: A CRC32C checksum of the returned PublicKey.pem. It is only populated when GetPublicKey returns one key. An integrity check of PublicKey.pem can be performed by computing the CRC32C checksum of PublicKey.pem and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. NOTE: This field is in Beta. */
		pemCrc32c?: string | null;

		/** The ProtectionLevel of the CryptoKeyVersion public key. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;
	}

	/** The public keys for a given CryptoKeyVersion. Obtained via GetPublicKey. */
	export interface PublicKeyFormProperties {

		/** The Algorithm associated with this key. */
		algorithm: FormControl<CryptoKeyVersionAlgorithm | null | undefined>,

		/** The name of the CryptoKeyVersion public key. Provided here for verification. NOTE: This field is in Beta. */
		name: FormControl<string | null | undefined>,

		/** A public key encoded in PEM format, populated only when GetPublicKey returns one key. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13). */
		pem: FormControl<string | null | undefined>,

		/** Integrity verification field: A CRC32C checksum of the returned PublicKey.pem. It is only populated when GetPublicKey returns one key. An integrity check of PublicKey.pem can be performed by computing the CRC32C checksum of PublicKey.pem and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. NOTE: This field is in Beta. */
		pemCrc32c: FormControl<string | null | undefined>,

		/** The ProtectionLevel of the CryptoKeyVersion public key. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,
	}
	export function CreatePublicKeyFormGroup() {
		return new FormGroup<PublicKeyFormProperties>({
			algorithm: new FormControl<CryptoKeyVersionAlgorithm | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pem: new FormControl<string | null | undefined>(undefined),
			pemCrc32c: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.RawDecrypt. */
	export interface RawDecryptRequest {

		/** Optional. Optional data that must match the data originally supplied in RawEncryptRequest.additional_authenticated_data. */
		additionalAuthenticatedData?: string | null;

		/** Optional. An optional CRC32C checksum of the RawDecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(additional_authenticated_data) is equal to additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		additionalAuthenticatedDataCrc32c?: string | null;

		/** Required. The encrypted data originally returned in RawEncryptResponse.ciphertext. */
		ciphertext?: string | null;

		/** Optional. An optional CRC32C checksum of the RawDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(ciphertext) is equal to ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		ciphertextCrc32c?: string | null;

		/** Required. The initialization vector (IV) used during encryption, which must match the data originally provided in RawEncryptResponse.initialization_vector. */
		initializationVector?: string | null;

		/** Optional. An optional CRC32C checksum of the RawDecryptRequest.initialization_vector. If specified, KeyManagementService will verify the integrity of the received initialization_vector using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(initialization_vector) is equal to initialization_vector_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		initializationVectorCrc32c?: string | null;

		/** The length of the authentication tag that is appended to the end of the ciphertext. If unspecified (0), the default value for the key's algorithm will be used (for AES-GCM, the default value is 16). */
		tagLength?: number | null;
	}

	/** Request message for KeyManagementService.RawDecrypt. */
	export interface RawDecryptRequestFormProperties {

		/** Optional. Optional data that must match the data originally supplied in RawEncryptRequest.additional_authenticated_data. */
		additionalAuthenticatedData: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the RawDecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(additional_authenticated_data) is equal to additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		additionalAuthenticatedDataCrc32c: FormControl<string | null | undefined>,

		/** Required. The encrypted data originally returned in RawEncryptResponse.ciphertext. */
		ciphertext: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the RawDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(ciphertext) is equal to ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		ciphertextCrc32c: FormControl<string | null | undefined>,

		/** Required. The initialization vector (IV) used during encryption, which must match the data originally provided in RawEncryptResponse.initialization_vector. */
		initializationVector: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the RawDecryptRequest.initialization_vector. If specified, KeyManagementService will verify the integrity of the received initialization_vector using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(initialization_vector) is equal to initialization_vector_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		initializationVectorCrc32c: FormControl<string | null | undefined>,

		/** The length of the authentication tag that is appended to the end of the ciphertext. If unspecified (0), the default value for the key's algorithm will be used (for AES-GCM, the default value is 16). */
		tagLength: FormControl<number | null | undefined>,
	}
	export function CreateRawDecryptRequestFormGroup() {
		return new FormGroup<RawDecryptRequestFormProperties>({
			additionalAuthenticatedData: new FormControl<string | null | undefined>(undefined),
			additionalAuthenticatedDataCrc32c: new FormControl<string | null | undefined>(undefined),
			ciphertext: new FormControl<string | null | undefined>(undefined),
			ciphertextCrc32c: new FormControl<string | null | undefined>(undefined),
			initializationVector: new FormControl<string | null | undefined>(undefined),
			initializationVectorCrc32c: new FormControl<string | null | undefined>(undefined),
			tagLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.RawDecrypt. */
	export interface RawDecryptResponse {

		/** The decrypted data. */
		plaintext?: string | null;

		/** Integrity verification field. A CRC32C checksum of the returned RawDecryptResponse.plaintext. An integrity check of plaintext can be performed by computing the CRC32C checksum of plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		plaintextCrc32c?: string | null;

		/** The ProtectionLevel of the CryptoKeyVersion used in decryption. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;

		/** Integrity verification field. A flag indicating whether RawDecryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of additional_authenticated_data. A false value of this field indicates either that // RawDecryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawDecryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedAdditionalAuthenticatedDataCrc32c?: boolean | null;

		/** Integrity verification field. A flag indicating whether RawDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that RawDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedCiphertextCrc32c?: boolean | null;

		/** Integrity verification field. A flag indicating whether RawDecryptRequest.initialization_vector_crc32c was received by KeyManagementService and used for the integrity verification of initialization_vector. A false value of this field indicates either that RawDecryptRequest.initialization_vector_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawDecryptRequest.initialization_vector_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedInitializationVectorCrc32c?: boolean | null;
	}

	/** Response message for KeyManagementService.RawDecrypt. */
	export interface RawDecryptResponseFormProperties {

		/** The decrypted data. */
		plaintext: FormControl<string | null | undefined>,

		/** Integrity verification field. A CRC32C checksum of the returned RawDecryptResponse.plaintext. An integrity check of plaintext can be performed by computing the CRC32C checksum of plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		plaintextCrc32c: FormControl<string | null | undefined>,

		/** The ProtectionLevel of the CryptoKeyVersion used in decryption. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,

		/** Integrity verification field. A flag indicating whether RawDecryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of additional_authenticated_data. A false value of this field indicates either that // RawDecryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawDecryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedAdditionalAuthenticatedDataCrc32c: FormControl<boolean | null | undefined>,

		/** Integrity verification field. A flag indicating whether RawDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that RawDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedCiphertextCrc32c: FormControl<boolean | null | undefined>,

		/** Integrity verification field. A flag indicating whether RawDecryptRequest.initialization_vector_crc32c was received by KeyManagementService and used for the integrity verification of initialization_vector. A false value of this field indicates either that RawDecryptRequest.initialization_vector_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawDecryptRequest.initialization_vector_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedInitializationVectorCrc32c: FormControl<boolean | null | undefined>,
	}
	export function CreateRawDecryptResponseFormGroup() {
		return new FormGroup<RawDecryptResponseFormProperties>({
			plaintext: new FormControl<string | null | undefined>(undefined),
			plaintextCrc32c: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
			verifiedAdditionalAuthenticatedDataCrc32c: new FormControl<boolean | null | undefined>(undefined),
			verifiedCiphertextCrc32c: new FormControl<boolean | null | undefined>(undefined),
			verifiedInitializationVectorCrc32c: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for KeyManagementService.RawEncrypt. */
	export interface RawEncryptRequest {

		/** Optional. Optional data that, if specified, must also be provided during decryption through RawDecryptRequest.additional_authenticated_data. This field may only be used in conjunction with an algorithm that accepts additional authenticated data (for example, AES-GCM). The maximum size depends on the key version's protection_level. For SOFTWARE keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB. */
		additionalAuthenticatedData?: string | null;

		/** Optional. An optional CRC32C checksum of the RawEncryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(additional_authenticated_data) is equal to additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		additionalAuthenticatedDataCrc32c?: string | null;

		/** Optional. A customer-supplied initialization vector that will be used for encryption. If it is not provided for AES-CBC and AES-CTR, one will be generated. It will be returned in RawEncryptResponse.initialization_vector. */
		initializationVector?: string | null;

		/** Optional. An optional CRC32C checksum of the RawEncryptRequest.initialization_vector. If specified, KeyManagementService will verify the integrity of the received initialization_vector using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(initialization_vector) is equal to initialization_vector_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		initializationVectorCrc32c?: string | null;

		/** Required. The data to encrypt. Must be no larger than 64KiB. The maximum size depends on the key version's protection_level. For SOFTWARE keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB. */
		plaintext?: string | null;

		/** Optional. An optional CRC32C checksum of the RawEncryptRequest.plaintext. If specified, KeyManagementService will verify the integrity of the received plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(plaintext) is equal to plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		plaintextCrc32c?: string | null;
	}

	/** Request message for KeyManagementService.RawEncrypt. */
	export interface RawEncryptRequestFormProperties {

		/** Optional. Optional data that, if specified, must also be provided during decryption through RawDecryptRequest.additional_authenticated_data. This field may only be used in conjunction with an algorithm that accepts additional authenticated data (for example, AES-GCM). The maximum size depends on the key version's protection_level. For SOFTWARE keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB. */
		additionalAuthenticatedData: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the RawEncryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(additional_authenticated_data) is equal to additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		additionalAuthenticatedDataCrc32c: FormControl<string | null | undefined>,

		/** Optional. A customer-supplied initialization vector that will be used for encryption. If it is not provided for AES-CBC and AES-CTR, one will be generated. It will be returned in RawEncryptResponse.initialization_vector. */
		initializationVector: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the RawEncryptRequest.initialization_vector. If specified, KeyManagementService will verify the integrity of the received initialization_vector using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(initialization_vector) is equal to initialization_vector_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		initializationVectorCrc32c: FormControl<string | null | undefined>,

		/** Required. The data to encrypt. Must be no larger than 64KiB. The maximum size depends on the key version's protection_level. For SOFTWARE keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB. */
		plaintext: FormControl<string | null | undefined>,

		/** Optional. An optional CRC32C checksum of the RawEncryptRequest.plaintext. If specified, KeyManagementService will verify the integrity of the received plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(plaintext) is equal to plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		plaintextCrc32c: FormControl<string | null | undefined>,
	}
	export function CreateRawEncryptRequestFormGroup() {
		return new FormGroup<RawEncryptRequestFormProperties>({
			additionalAuthenticatedData: new FormControl<string | null | undefined>(undefined),
			additionalAuthenticatedDataCrc32c: new FormControl<string | null | undefined>(undefined),
			initializationVector: new FormControl<string | null | undefined>(undefined),
			initializationVectorCrc32c: new FormControl<string | null | undefined>(undefined),
			plaintext: new FormControl<string | null | undefined>(undefined),
			plaintextCrc32c: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for KeyManagementService.RawEncrypt. */
	export interface RawEncryptResponse {

		/** The encrypted data. In the case of AES-GCM, the authentication tag is the tag_length bytes at the end of this field. */
		ciphertext?: string | null;

		/** Integrity verification field. A CRC32C checksum of the returned RawEncryptResponse.ciphertext. An integrity check of ciphertext can be performed by computing the CRC32C checksum of ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		ciphertextCrc32c?: string | null;

		/** The initialization vector (IV) generated by the service during encryption. This value must be stored and provided in RawDecryptRequest.initialization_vector at decryption time. */
		initializationVector?: string | null;

		/** Integrity verification field. A CRC32C checksum of the returned RawEncryptResponse.initialization_vector. An integrity check of initialization_vector can be performed by computing the CRC32C checksum of initialization_vector and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		initializationVectorCrc32c?: string | null;

		/** The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption. */
		name?: string | null;

		/** The ProtectionLevel of the CryptoKeyVersion used in encryption. */
		protectionLevel?: AsymmetricDecryptResponseProtectionLevel | null;

		/** The length of the authentication tag that is appended to the end of the ciphertext. */
		tagLength?: number | null;

		/** Integrity verification field. A flag indicating whether RawEncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of additional_authenticated_data. A false value of this field indicates either that // RawEncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawEncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedAdditionalAuthenticatedDataCrc32c?: boolean | null;

		/** Integrity verification field. A flag indicating whether RawEncryptRequest.initialization_vector_crc32c was received by KeyManagementService and used for the integrity verification of initialization_vector. A false value of this field indicates either that RawEncryptRequest.initialization_vector_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawEncryptRequest.initialization_vector_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedInitializationVectorCrc32c?: boolean | null;

		/** Integrity verification field. A flag indicating whether RawEncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that RawEncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawEncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedPlaintextCrc32c?: boolean | null;
	}

	/** Response message for KeyManagementService.RawEncrypt. */
	export interface RawEncryptResponseFormProperties {

		/** The encrypted data. In the case of AES-GCM, the authentication tag is the tag_length bytes at the end of this field. */
		ciphertext: FormControl<string | null | undefined>,

		/** Integrity verification field. A CRC32C checksum of the returned RawEncryptResponse.ciphertext. An integrity check of ciphertext can be performed by computing the CRC32C checksum of ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		ciphertextCrc32c: FormControl<string | null | undefined>,

		/** The initialization vector (IV) generated by the service during encryption. This value must be stored and provided in RawDecryptRequest.initialization_vector at decryption time. */
		initializationVector: FormControl<string | null | undefined>,

		/** Integrity verification field. A CRC32C checksum of the returned RawEncryptResponse.initialization_vector. An integrity check of initialization_vector can be performed by computing the CRC32C checksum of initialization_vector and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. */
		initializationVectorCrc32c: FormControl<string | null | undefined>,

		/** The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption. */
		name: FormControl<string | null | undefined>,

		/** The ProtectionLevel of the CryptoKeyVersion used in encryption. */
		protectionLevel: FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>,

		/** The length of the authentication tag that is appended to the end of the ciphertext. */
		tagLength: FormControl<number | null | undefined>,

		/** Integrity verification field. A flag indicating whether RawEncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of additional_authenticated_data. A false value of this field indicates either that // RawEncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawEncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedAdditionalAuthenticatedDataCrc32c: FormControl<boolean | null | undefined>,

		/** Integrity verification field. A flag indicating whether RawEncryptRequest.initialization_vector_crc32c was received by KeyManagementService and used for the integrity verification of initialization_vector. A false value of this field indicates either that RawEncryptRequest.initialization_vector_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawEncryptRequest.initialization_vector_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedInitializationVectorCrc32c: FormControl<boolean | null | undefined>,

		/** Integrity verification field. A flag indicating whether RawEncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that RawEncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set RawEncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries. */
		verifiedPlaintextCrc32c: FormControl<boolean | null | undefined>,
	}
	export function CreateRawEncryptResponseFormGroup() {
		return new FormGroup<RawEncryptResponseFormProperties>({
			ciphertext: new FormControl<string | null | undefined>(undefined),
			ciphertextCrc32c: new FormControl<string | null | undefined>(undefined),
			initializationVector: new FormControl<string | null | undefined>(undefined),
			initializationVectorCrc32c: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protectionLevel: new FormControl<AsymmetricDecryptResponseProtectionLevel | null | undefined>(undefined),
			tagLength: new FormControl<number | null | undefined>(undefined),
			verifiedAdditionalAuthenticatedDataCrc32c: new FormControl<boolean | null | undefined>(undefined),
			verifiedInitializationVectorCrc32c: new FormControl<boolean | null | undefined>(undefined),
			verifiedPlaintextCrc32c: new FormControl<boolean | null | undefined>(undefined),
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

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
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


	/** Response message for EkmService.VerifyConnectivity. */
	export interface VerifyConnectivityResponse {
	}

	/** Response message for EkmService.VerifyConnectivity. */
	export interface VerifyConnectivityResponseFormProperties {
	}
	export function CreateVerifyConnectivityResponseFormGroup() {
		return new FormGroup<VerifyConnectivityResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Generate random bytes using the Cloud KMS randomness source in the provided location.
		 * Post v1/{location}:generateRandomBytes
		 * @param {string} location The project-specific location in which to generate random bytes. For example, "projects/my-project/locations/us-central1".
		 * @return {GenerateRandomBytesResponse} Successful response
		 */
		Cloudkms_projects_locations_generateRandomBytes(location: string, requestBody: GenerateRandomBytesRequest): Observable<GenerateRandomBytesResponse> {
			return this.http.post<GenerateRandomBytesResponse>(this.baseUri + 'v1/' + (location == null ? '' : encodeURIComponent(location)) + ':generateRandomBytes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata for a given ImportJob.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the ImportJob to get.
		 * @return {ImportJob} Successful response
		 */
		Cloudkms_projects_locations_keyRings_importJobs_get(name: string): Observable<ImportJob> {
			return this.http.get<ImportJob>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name for this CryptoKeyVersion in the format `projects/locations/keyRings/cryptoKeys/cryptoKeyVersions/*`.
		 * @param {string} updateMask Required. List of fields to be updated in this request.
		 * @return {CryptoKeyVersion} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_patch(name: string, updateMask: string | null | undefined, requestBody: CryptoKeyVersion): Observable<CryptoKeyVersion> {
			return this.http.patch<CryptoKeyVersion>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Cloudkms_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
		 * Get v1/{name}/publicKey
		 * @param {string} name Required. The name of the CryptoKeyVersion public key to get.
		 * @return {PublicKey} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_getPublicKey(name: string): Observable<PublicKey> {
			return this.http.get<PublicKey>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/publicKey', {});
		}

		/**
		 * Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
		 * Post v1/{name}:asymmetricDecrypt
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to use for decryption.
		 * @return {AsymmetricDecryptResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_asymmetricDecrypt(name: string, requestBody: AsymmetricDecryptRequest): Observable<AsymmetricDecryptResponse> {
			return this.http.post<AsymmetricDecryptResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':asymmetricDecrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
		 * Post v1/{name}:asymmetricSign
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to use for signing.
		 * @return {AsymmetricSignResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_asymmetricSign(name: string, requestBody: AsymmetricSignRequest): Observable<AsymmetricSignResponse> {
			return this.http.post<AsymmetricSignResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':asymmetricSign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
		 * Post v1/{name}:decrypt
		 * @param {string} name Required. The resource name of the CryptoKey to use for decryption. The server will choose the appropriate version.
		 * @return {DecryptResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_decrypt(name: string, requestBody: DecryptRequest): Observable<DecryptResponse> {
			return this.http.post<DecryptResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':decrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
		 * Post v1/{name}:destroy
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to destroy.
		 * @return {CryptoKeyVersion} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_destroy(name: string, requestBody: DestroyCryptoKeyVersionRequest): Observable<CryptoKeyVersion> {
			return this.http.post<CryptoKeyVersion>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':destroy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
		 * Post v1/{name}:encrypt
		 * @param {string} name Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption. If a CryptoKey is specified, the server will use its primary version.
		 * @return {EncryptResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_encrypt(name: string, requestBody: EncryptRequest): Observable<EncryptResponse> {
			return this.http.post<EncryptResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':encrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
		 * Post v1/{name}:macSign
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to use for signing.
		 * @return {MacSignResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_macSign(name: string, requestBody: MacSignRequest): Observable<MacSignResponse> {
			return this.http.post<MacSignResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':macSign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
		 * Post v1/{name}:macVerify
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to use for verification.
		 * @return {MacVerifyResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_macVerify(name: string, requestBody: MacVerifyRequest): Observable<MacVerifyResponse> {
			return this.http.post<MacVerifyResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':macVerify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Decrypts data that was originally encrypted using a raw cryptographic mechanism. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.
		 * Post v1/{name}:rawDecrypt
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to use for decryption.
		 * @return {RawDecryptResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_rawDecrypt(name: string, requestBody: RawDecryptRequest): Observable<RawDecryptResponse> {
			return this.http.post<RawDecryptResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':rawDecrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Encrypts data using portable cryptographic primitives. Most users should choose Encrypt and Decrypt rather than their raw counterparts. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.
		 * Post v1/{name}:rawEncrypt
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to use for encryption.
		 * @return {RawEncryptResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_rawEncrypt(name: string, requestBody: RawEncryptRequest): Observable<RawEncryptResponse> {
			return this.http.post<RawEncryptResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':rawEncrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
		 * Post v1/{name}:restore
		 * @param {string} name Required. The resource name of the CryptoKeyVersion to restore.
		 * @return {CryptoKeyVersion} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_restore(name: string, requestBody: RestoreCryptoKeyVersionRequest): Observable<CryptoKeyVersion> {
			return this.http.post<CryptoKeyVersion>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
		 * Post v1/{name}:updatePrimaryVersion
		 * @param {string} name Required. The resource name of the CryptoKey to update.
		 * @return {CryptoKey} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_updatePrimaryVersion(name: string, requestBody: UpdateCryptoKeyPrimaryVersionRequest): Observable<CryptoKey> {
			return this.http.post<CryptoKey>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':updatePrimaryVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.
		 * Get v1/{name}:verifyConnectivity
		 * @param {string} name Required. The name of the EkmConnection to verify.
		 * @return {VerifyConnectivityResponse} Successful response
		 */
		Cloudkms_projects_locations_ekmConnections_verifyConnectivity(name: string): Observable<VerifyConnectivityResponse> {
			return this.http.get<VerifyConnectivityResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':verifyConnectivity', {});
		}

		/**
		 * Lists CryptoKeyVersions.
		 * Get v1/{parent}/cryptoKeyVersions
		 * @param {string} parent Required. The resource name of the CryptoKey to list, in the format `projects/locations/keyRings/cryptoKeys/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {string} orderBy Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {number} pageSize Optional. Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token.
		 * @param {Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_listView} view The fields to include in the response.
		 * @return {ListCryptoKeyVersionsResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_listView | null | undefined): Observable<ListCryptoKeyVersionsResponse> {
			return this.http.get<ListCryptoKeyVersionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeyVersions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
		 * Post v1/{parent}/cryptoKeyVersions
		 * @param {string} parent Required. The name of the CryptoKey associated with the CryptoKeyVersions.
		 * @return {CryptoKeyVersion} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_create(parent: string, requestBody: CryptoKeyVersion): Observable<CryptoKeyVersion> {
			return this.http.post<CryptoKeyVersion>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeyVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
		 * Post v1/{parent}/cryptoKeyVersions:import
		 * @param {string} parent Required. The name of the CryptoKey to be imported into. The create permission is only required on this key when creating a new CryptoKeyVersion.
		 * @return {CryptoKeyVersion} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_import(parent: string, requestBody: ImportCryptoKeyVersionRequest): Observable<CryptoKeyVersion> {
			return this.http.post<CryptoKeyVersion>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeyVersions:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CryptoKeys.
		 * Get v1/{parent}/cryptoKeys
		 * @param {string} parent Required. The resource name of the KeyRing to list, in the format `projects/locations/keyRings/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {string} orderBy Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {number} pageSize Optional. Optional limit on the number of CryptoKeys to include in the response. Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token.
		 * @param {Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_listView} versionView The fields of the primary version to include in the response.
		 * @return {ListCryptoKeysResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, versionView: Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_listView | null | undefined): Observable<ListCryptoKeysResponse> {
			return this.http.get<ListCryptoKeysResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeys&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&versionView=' + versionView, {});
		}

		/**
		 * Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
		 * Post v1/{parent}/cryptoKeys
		 * @param {string} parent Required. The name of the KeyRing associated with the CryptoKeys.
		 * @param {string} cryptoKeyId Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
		 * @param {boolean} skipInitialVersionCreation If set to true, the request will create a CryptoKey without any CryptoKeyVersions. You must manually call CreateCryptoKeyVersion or ImportCryptoKeyVersion before you can use this CryptoKey.
		 * @return {CryptoKey} Successful response
		 */
		Cloudkms_projects_locations_keyRings_cryptoKeys_create(parent: string, cryptoKeyId: string | null | undefined, skipInitialVersionCreation: boolean | null | undefined, requestBody: CryptoKey): Observable<CryptoKey> {
			return this.http.post<CryptoKey>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cryptoKeys&cryptoKeyId=' + (cryptoKeyId == null ? '' : encodeURIComponent(cryptoKeyId)) + '&skipInitialVersionCreation=' + skipInitialVersionCreation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists EkmConnections.
		 * Get v1/{parent}/ekmConnections
		 * @param {string} parent Required. The resource name of the location associated with the EkmConnections to list, in the format `projects/locations/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {string} orderBy Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {number} pageSize Optional. Optional limit on the number of EkmConnections to include in the response. Further EkmConnections can subsequently be obtained by including the ListEkmConnectionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Optional pagination token, returned earlier via ListEkmConnectionsResponse.next_page_token.
		 * @return {ListEkmConnectionsResponse} Successful response
		 */
		Cloudkms_projects_locations_ekmConnections_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEkmConnectionsResponse> {
			return this.http.get<ListEkmConnectionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/ekmConnections&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new EkmConnection in a given Project and Location.
		 * Post v1/{parent}/ekmConnections
		 * @param {string} parent Required. The resource name of the location associated with the EkmConnection, in the format `projects/locations/*`.
		 * @param {string} ekmConnectionId Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`.
		 * @return {EkmConnection} Successful response
		 */
		Cloudkms_projects_locations_ekmConnections_create(parent: string, ekmConnectionId: string | null | undefined, requestBody: EkmConnection): Observable<EkmConnection> {
			return this.http.post<EkmConnection>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/ekmConnections&ekmConnectionId=' + (ekmConnectionId == null ? '' : encodeURIComponent(ekmConnectionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ImportJobs.
		 * Get v1/{parent}/importJobs
		 * @param {string} parent Required. The resource name of the KeyRing to list, in the format `projects/locations/keyRings/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {string} orderBy Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {number} pageSize Optional. Optional limit on the number of ImportJobs to include in the response. Further ImportJobs can subsequently be obtained by including the ListImportJobsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Optional pagination token, returned earlier via ListImportJobsResponse.next_page_token.
		 * @return {ListImportJobsResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_importJobs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListImportJobsResponse> {
			return this.http.get<ListImportJobsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/importJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
		 * Post v1/{parent}/importJobs
		 * @param {string} parent Required. The name of the KeyRing associated with the ImportJobs.
		 * @param {string} importJobId Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
		 * @return {ImportJob} Successful response
		 */
		Cloudkms_projects_locations_keyRings_importJobs_create(parent: string, importJobId: string | null | undefined, requestBody: ImportJob): Observable<ImportJob> {
			return this.http.post<ImportJob>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/importJobs&importJobId=' + (importJobId == null ? '' : encodeURIComponent(importJobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists KeyRings.
		 * Get v1/{parent}/keyRings
		 * @param {string} parent Required. The resource name of the location associated with the KeyRings, in the format `projects/locations/*`.
		 * @param {string} filter Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {string} orderBy Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).
		 * @param {number} pageSize Optional. Optional limit on the number of KeyRings to include in the response. Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token.
		 * @return {ListKeyRingsResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListKeyRingsResponse> {
			return this.http.get<ListKeyRingsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keyRings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new KeyRing in a given Project and Location.
		 * Post v1/{parent}/keyRings
		 * @param {string} parent Required. The resource name of the location associated with the KeyRings, in the format `projects/locations/*`.
		 * @param {string} keyRingId Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
		 * @return {KeyRing} Successful response
		 */
		Cloudkms_projects_locations_keyRings_create(parent: string, keyRingId: string | null | undefined, requestBody: KeyRing): Observable<KeyRing> {
			return this.http.post<KeyRing>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keyRings&keyRingId=' + (keyRingId == null ? '' : encodeURIComponent(keyRingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Cloudkms_projects_locations_keyRings_importJobs_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudkms_projects_locations_keyRings_importJobs_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Cloudkms_projects_locations_keyRings_importJobs_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Cloudkms_projects_locations_keyRings_cryptoKeys_cryptoKeyVersions_listView { CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED = 'CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED', FULL = 'FULL' }

}

