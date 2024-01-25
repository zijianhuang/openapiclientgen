import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelKeyDeletionResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;
	}
	export interface CancelKeyDeletionResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateCancelKeyDeletionResponseFormGroup() {
		return new FormGroup<CancelKeyDeletionResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface CancelKeyDeletionRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;
	}
	export interface CancelKeyDeletionRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateCancelKeyDeletionRequestFormGroup() {
		return new FormGroup<CancelKeyDeletionRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidArnException {
	}
	export interface InvalidArnExceptionFormProperties {
	}
	export function CreateInvalidArnExceptionFormGroup() {
		return new FormGroup<InvalidArnExceptionFormProperties>({
		});

	}

	export interface DependencyTimeoutException {
	}
	export interface DependencyTimeoutExceptionFormProperties {
	}
	export function CreateDependencyTimeoutExceptionFormGroup() {
		return new FormGroup<DependencyTimeoutExceptionFormProperties>({
		});

	}

	export interface KMSInternalException {
	}
	export interface KMSInternalExceptionFormProperties {
	}
	export function CreateKMSInternalExceptionFormGroup() {
		return new FormGroup<KMSInternalExceptionFormProperties>({
		});

	}

	export interface KMSInvalidStateException {
	}
	export interface KMSInvalidStateExceptionFormProperties {
	}
	export function CreateKMSInvalidStateExceptionFormGroup() {
		return new FormGroup<KMSInvalidStateExceptionFormProperties>({
		});

	}

	export interface ConnectCustomKeyStoreResponse {
	}
	export interface ConnectCustomKeyStoreResponseFormProperties {
	}
	export function CreateConnectCustomKeyStoreResponseFormGroup() {
		return new FormGroup<ConnectCustomKeyStoreResponseFormProperties>({
		});

	}

	export interface ConnectCustomKeyStoreRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: string;
	}
	export interface ConnectCustomKeyStoreRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateConnectCustomKeyStoreRequestFormGroup() {
		return new FormGroup<ConnectCustomKeyStoreRequestFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface CloudHsmClusterNotActiveException {
	}
	export interface CloudHsmClusterNotActiveExceptionFormProperties {
	}
	export function CreateCloudHsmClusterNotActiveExceptionFormGroup() {
		return new FormGroup<CloudHsmClusterNotActiveExceptionFormProperties>({
		});

	}

	export interface CustomKeyStoreInvalidStateException {
	}
	export interface CustomKeyStoreInvalidStateExceptionFormProperties {
	}
	export function CreateCustomKeyStoreInvalidStateExceptionFormGroup() {
		return new FormGroup<CustomKeyStoreInvalidStateExceptionFormProperties>({
		});

	}

	export interface CustomKeyStoreNotFoundException {
	}
	export interface CustomKeyStoreNotFoundExceptionFormProperties {
	}
	export function CreateCustomKeyStoreNotFoundExceptionFormGroup() {
		return new FormGroup<CustomKeyStoreNotFoundExceptionFormProperties>({
		});

	}

	export interface CloudHsmClusterInvalidConfigurationException {
	}
	export interface CloudHsmClusterInvalidConfigurationExceptionFormProperties {
	}
	export function CreateCloudHsmClusterInvalidConfigurationExceptionFormGroup() {
		return new FormGroup<CloudHsmClusterInvalidConfigurationExceptionFormProperties>({
		});

	}

	export interface CreateAliasRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AliasName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		TargetKeyId: string;
	}
	export interface CreateAliasRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AliasName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		TargetKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasRequestFormGroup() {
		return new FormGroup<CreateAliasRequestFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9:/_-]+$')]),
			TargetKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InvalidAliasNameException {
	}
	export interface InvalidAliasNameExceptionFormProperties {
	}
	export function CreateInvalidAliasNameExceptionFormGroup() {
		return new FormGroup<InvalidAliasNameExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateCustomKeyStoreResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId?: string | null;
	}
	export interface CreateCustomKeyStoreResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomKeyStoreResponseFormGroup() {
		return new FormGroup<CreateCustomKeyStoreResponseFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface CreateCustomKeyStoreRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		CustomKeyStoreName: string;

		/**
		 * Required
		 * Max length: 24
		 * Min length: 19
		 */
		CloudHsmClusterId: string;

		/**
		 * Required
		 * Max length: 5000
		 * Min length: 1
		 */
		TrustAnchorCertificate: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 7
		 */
		KeyStorePassword: string;
	}
	export interface CreateCustomKeyStoreRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		CustomKeyStoreName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 24
		 * Min length: 19
		 */
		CloudHsmClusterId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 5000
		 * Min length: 1
		 */
		TrustAnchorCertificate: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 7
		 */
		KeyStorePassword: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomKeyStoreRequestFormGroup() {
		return new FormGroup<CreateCustomKeyStoreRequestFormProperties>({
			CustomKeyStoreName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			CloudHsmClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(24)]),
			TrustAnchorCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(5000)]),
			KeyStorePassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(32)]),
		});

	}

	export interface CloudHsmClusterInUseException {
	}
	export interface CloudHsmClusterInUseExceptionFormProperties {
	}
	export function CreateCloudHsmClusterInUseExceptionFormGroup() {
		return new FormGroup<CloudHsmClusterInUseExceptionFormProperties>({
		});

	}

	export interface CustomKeyStoreNameInUseException {
	}
	export interface CustomKeyStoreNameInUseExceptionFormProperties {
	}
	export function CreateCustomKeyStoreNameInUseExceptionFormGroup() {
		return new FormGroup<CustomKeyStoreNameInUseExceptionFormProperties>({
		});

	}

	export interface CloudHsmClusterNotFoundException {
	}
	export interface CloudHsmClusterNotFoundExceptionFormProperties {
	}
	export function CreateCloudHsmClusterNotFoundExceptionFormGroup() {
		return new FormGroup<CloudHsmClusterNotFoundExceptionFormProperties>({
		});

	}

	export interface IncorrectTrustAnchorException {
	}
	export interface IncorrectTrustAnchorExceptionFormProperties {
	}
	export function CreateIncorrectTrustAnchorExceptionFormGroup() {
		return new FormGroup<IncorrectTrustAnchorExceptionFormProperties>({
		});

	}

	export interface CreateGrantResponse {

		/**
		 * Max length: 8192
		 * Min length: 1
		 */
		GrantToken?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		GrantId?: string | null;
	}
	export interface CreateGrantResponseFormProperties {

		/**
		 * Max length: 8192
		 * Min length: 1
		 */
		GrantToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		GrantId: FormControl<string | null | undefined>,
	}
	export function CreateCreateGrantResponseFormGroup() {
		return new FormGroup<CreateGrantResponseFormProperties>({
			GrantToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8192)]),
			GrantId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface CreateGrantRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		GranteePrincipal: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		RetiringPrincipal?: string | null;

		/** Required */
		Operations: Array<GrantOperation>;

		/** <p>Use this structure to allow <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. </p> <p>AWS KMS applies the grant constraints only to cryptographic operations that support an encryption context, that is, all cryptographic operations with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#symmetric-cmks">symmetric CMK</a>. Grant constraints are not applied to operations that do not support an encryption context, such as cryptographic operations with asymmetric CMKs and management operations, such as <a>DescribeKey</a> or <a>ScheduleKeyDeletion</a>.</p> <important> <p>In a cryptographic operation, the encryption context in the decryption operation must be an exact, case-sensitive match for the keys and values in the encryption context of the encryption operation. Only the order of the pairs can vary.</p> <p>However, in a grant constraint, the key in each key-value pair is not case sensitive, but the value is case sensitive.</p> <p>To avoid confusion, do not use multiple encryption context pairs that differ only by case. To require a fully case-sensitive encryption context, use the <code>kms:EncryptionContext:</code> and <code>kms:EncryptionContextKeys</code> conditions in an IAM or key policy. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context">kms:EncryptionContext:</a> in the <i> <i>AWS Key Management Service Developer Guide</i> </i>.</p> </important> */
		Constraints?: GrantConstraints;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface CreateGrantRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		GranteePrincipal: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		RetiringPrincipal: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateGrantRequestFormGroup() {
		return new FormGroup<CreateGrantRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			GranteePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w+=,.@:/-]+$')]),
			RetiringPrincipal: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w+=,.@:/-]+$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9:/_-]+$')]),
		});

	}

	export enum GrantOperation { Decrypt = 0, Encrypt = 1, GenerateDataKey = 2, GenerateDataKeyWithoutPlaintext = 3, ReEncryptFrom = 4, ReEncryptTo = 5, Sign = 6, Verify = 7, GetPublicKey = 8, CreateGrant = 9, RetireGrant = 10, DescribeKey = 11, GenerateDataKeyPair = 12, GenerateDataKeyPairWithoutPlaintext = 13 }


	/** <p>Use this structure to allow <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. </p> <p>AWS KMS applies the grant constraints only to cryptographic operations that support an encryption context, that is, all cryptographic operations with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#symmetric-cmks">symmetric CMK</a>. Grant constraints are not applied to operations that do not support an encryption context, such as cryptographic operations with asymmetric CMKs and management operations, such as <a>DescribeKey</a> or <a>ScheduleKeyDeletion</a>.</p> <important> <p>In a cryptographic operation, the encryption context in the decryption operation must be an exact, case-sensitive match for the keys and values in the encryption context of the encryption operation. Only the order of the pairs can vary.</p> <p>However, in a grant constraint, the key in each key-value pair is not case sensitive, but the value is case sensitive.</p> <p>To avoid confusion, do not use multiple encryption context pairs that differ only by case. To require a fully case-sensitive encryption context, use the <code>kms:EncryptionContext:</code> and <code>kms:EncryptionContextKeys</code> conditions in an IAM or key policy. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context">kms:EncryptionContext:</a> in the <i> <i>AWS Key Management Service Developer Guide</i> </i>.</p> </important> */
	export interface GrantConstraints {
		EncryptionContextSubset?: EncryptionContextType;
		EncryptionContextEquals?: EncryptionContextType;
	}

	/** <p>Use this structure to allow <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. </p> <p>AWS KMS applies the grant constraints only to cryptographic operations that support an encryption context, that is, all cryptographic operations with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#symmetric-cmks">symmetric CMK</a>. Grant constraints are not applied to operations that do not support an encryption context, such as cryptographic operations with asymmetric CMKs and management operations, such as <a>DescribeKey</a> or <a>ScheduleKeyDeletion</a>.</p> <important> <p>In a cryptographic operation, the encryption context in the decryption operation must be an exact, case-sensitive match for the keys and values in the encryption context of the encryption operation. Only the order of the pairs can vary.</p> <p>However, in a grant constraint, the key in each key-value pair is not case sensitive, but the value is case sensitive.</p> <p>To avoid confusion, do not use multiple encryption context pairs that differ only by case. To require a fully case-sensitive encryption context, use the <code>kms:EncryptionContext:</code> and <code>kms:EncryptionContextKeys</code> conditions in an IAM or key policy. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context">kms:EncryptionContext:</a> in the <i> <i>AWS Key Management Service Developer Guide</i> </i>.</p> </important> */
	export interface GrantConstraintsFormProperties {
	}
	export function CreateGrantConstraintsFormGroup() {
		return new FormGroup<GrantConstraintsFormProperties>({
		});

	}

	export interface EncryptionContextType {
	}
	export interface EncryptionContextTypeFormProperties {
	}
	export function CreateEncryptionContextTypeFormGroup() {
		return new FormGroup<EncryptionContextTypeFormProperties>({
		});

	}

	export interface DisabledException {
	}
	export interface DisabledExceptionFormProperties {
	}
	export function CreateDisabledExceptionFormGroup() {
		return new FormGroup<DisabledExceptionFormProperties>({
		});

	}

	export interface InvalidGrantTokenException {
	}
	export interface InvalidGrantTokenExceptionFormProperties {
	}
	export function CreateInvalidGrantTokenExceptionFormGroup() {
		return new FormGroup<InvalidGrantTokenExceptionFormProperties>({
		});

	}

	export interface CreateKeyResponse {

		/** <p>Contains metadata about a customer master key (CMK).</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p> */
		KeyMetadata?: KeyMetadata;
	}
	export interface CreateKeyResponseFormProperties {
	}
	export function CreateCreateKeyResponseFormGroup() {
		return new FormGroup<CreateKeyResponseFormProperties>({
		});

	}


	/** <p>Contains metadata about a customer master key (CMK).</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p> */
	export interface KeyMetadata {
		AWSAccountId?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn?: string | null;
		CreationDate?: Date | null;
		Enabled?: boolean | null;

		/**
		 * Max length: 8192
		 * Min length: 0
		 */
		Description?: string | null;
		KeyUsage?: KeyMetadataKeyUsage | null;
		KeyState?: KeyMetadataKeyState | null;
		DeletionDate?: Date | null;
		ValidTo?: Date | null;
		Origin?: KeyMetadataOrigin | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId?: string | null;

		/**
		 * Max length: 24
		 * Min length: 19
		 */
		CloudHsmClusterId?: string | null;
		ExpirationModel?: KeyMetadataExpirationModel | null;
		KeyManager?: KeyMetadataKeyManager | null;
		CustomerMasterKeySpec?: KeyMetadataCustomerMasterKeySpec | null;
		EncryptionAlgorithms?: Array<EncryptionAlgorithmSpec>;
		SigningAlgorithms?: Array<SigningAlgorithmSpec>;
	}

	/** <p>Contains metadata about a customer master key (CMK).</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p> */
	export interface KeyMetadataFormProperties {
		AWSAccountId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 8192
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		KeyUsage: FormControl<KeyMetadataKeyUsage | null | undefined>,
		KeyState: FormControl<KeyMetadataKeyState | null | undefined>,
		DeletionDate: FormControl<Date | null | undefined>,
		ValidTo: FormControl<Date | null | undefined>,
		Origin: FormControl<KeyMetadataOrigin | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: FormControl<string | null | undefined>,

		/**
		 * Max length: 24
		 * Min length: 19
		 */
		CloudHsmClusterId: FormControl<string | null | undefined>,
		ExpirationModel: FormControl<KeyMetadataExpirationModel | null | undefined>,
		KeyManager: FormControl<KeyMetadataKeyManager | null | undefined>,
		CustomerMasterKeySpec: FormControl<KeyMetadataCustomerMasterKeySpec | null | undefined>,
	}
	export function CreateKeyMetadataFormGroup() {
		return new FormGroup<KeyMetadataFormProperties>({
			AWSAccountId: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(8192)]),
			KeyUsage: new FormControl<KeyMetadataKeyUsage | null | undefined>(undefined),
			KeyState: new FormControl<KeyMetadataKeyState | null | undefined>(undefined),
			DeletionDate: new FormControl<Date | null | undefined>(undefined),
			ValidTo: new FormControl<Date | null | undefined>(undefined),
			Origin: new FormControl<KeyMetadataOrigin | null | undefined>(undefined),
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			CloudHsmClusterId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(19), Validators.maxLength(24)]),
			ExpirationModel: new FormControl<KeyMetadataExpirationModel | null | undefined>(undefined),
			KeyManager: new FormControl<KeyMetadataKeyManager | null | undefined>(undefined),
			CustomerMasterKeySpec: new FormControl<KeyMetadataCustomerMasterKeySpec | null | undefined>(undefined),
		});

	}

	export enum KeyMetadataKeyUsage { SIGN_VERIFY = 0, ENCRYPT_DECRYPT = 1 }

	export enum KeyMetadataKeyState { Enabled = 0, Disabled = 1, PendingDeletion = 2, PendingImport = 3, Unavailable = 4 }

	export enum KeyMetadataOrigin { AWS_KMS = 0, EXTERNAL = 1, AWS_CLOUDHSM = 2 }

	export enum KeyMetadataExpirationModel { KEY_MATERIAL_EXPIRES = 0, KEY_MATERIAL_DOES_NOT_EXPIRE = 1 }

	export enum KeyMetadataKeyManager { AWS = 0, CUSTOMER = 1 }

	export enum KeyMetadataCustomerMasterKeySpec { RSA_2048 = 0, RSA_3072 = 1, RSA_4096 = 2, ECC_NIST_P256 = 3, ECC_NIST_P384 = 4, ECC_NIST_P521 = 5, ECC_SECG_P256K1 = 6, SYMMETRIC_DEFAULT = 7 }

	export enum EncryptionAlgorithmSpec { SYMMETRIC_DEFAULT = 0, RSAES_OAEP_SHA_1 = 1, RSAES_OAEP_SHA_256 = 2 }

	export enum SigningAlgorithmSpec { RSASSA_PSS_SHA_256 = 0, RSASSA_PSS_SHA_384 = 1, RSASSA_PSS_SHA_512 = 2, RSASSA_PKCS1_V1_5_SHA_256 = 3, RSASSA_PKCS1_V1_5_SHA_384 = 4, RSASSA_PKCS1_V1_5_SHA_512 = 5, ECDSA_SHA_256 = 6, ECDSA_SHA_384 = 7, ECDSA_SHA_512 = 8 }

	export interface CreateKeyRequest {

		/**
		 * Max length: 131072
		 * Min length: 1
		 */
		Policy?: string | null;

		/**
		 * Max length: 8192
		 * Min length: 0
		 */
		Description?: string | null;
		KeyUsage?: KeyMetadataKeyUsage | null;
		CustomerMasterKeySpec?: KeyMetadataCustomerMasterKeySpec | null;
		Origin?: KeyMetadataOrigin | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId?: string | null;
		BypassPolicyLockoutSafetyCheck?: boolean | null;
		Tags?: Array<Tag>;
	}
	export interface CreateKeyRequestFormProperties {

		/**
		 * Max length: 131072
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,

		/**
		 * Max length: 8192
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		KeyUsage: FormControl<KeyMetadataKeyUsage | null | undefined>,
		CustomerMasterKeySpec: FormControl<KeyMetadataCustomerMasterKeySpec | null | undefined>,
		Origin: FormControl<KeyMetadataOrigin | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: FormControl<string | null | undefined>,
		BypassPolicyLockoutSafetyCheck: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateKeyRequestFormGroup() {
		return new FormGroup<CreateKeyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(8192)]),
			KeyUsage: new FormControl<KeyMetadataKeyUsage | null | undefined>(undefined),
			CustomerMasterKeySpec: new FormControl<KeyMetadataCustomerMasterKeySpec | null | undefined>(undefined),
			Origin: new FormControl<KeyMetadataOrigin | null | undefined>(undefined),
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			BypassPolicyLockoutSafetyCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TagKey: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		TagValue: string;
	}

	/** <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TagKey: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		TagValue: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			TagValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface MalformedPolicyDocumentException {
	}
	export interface MalformedPolicyDocumentExceptionFormProperties {
	}
	export function CreateMalformedPolicyDocumentExceptionFormGroup() {
		return new FormGroup<MalformedPolicyDocumentExceptionFormProperties>({
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface TagException {
	}
	export interface TagExceptionFormProperties {
	}
	export function CreateTagExceptionFormGroup() {
		return new FormGroup<TagExceptionFormProperties>({
		});

	}

	export interface DecryptResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		Plaintext?: string | null;
		EncryptionAlgorithm?: EncryptionAlgorithmSpec | null;
	}
	export interface DecryptResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		Plaintext: FormControl<string | null | undefined>,
		EncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
	}
	export function CreateDecryptResponseFormGroup() {
		return new FormGroup<DecryptResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			Plaintext: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			EncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface DecryptRequest {

		/**
		 * Required
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob: string;
		EncryptionContext?: EncryptionContextType;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;
		EncryptionAlgorithm?: EncryptionAlgorithmSpec | null;
	}
	export interface DecryptRequestFormProperties {

		/**
		 * Required
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		EncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
	}
	export function CreateDecryptRequestFormGroup() {
		return new FormGroup<DecryptRequestFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(6144)]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			EncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface InvalidCiphertextException {
	}
	export interface InvalidCiphertextExceptionFormProperties {
	}
	export function CreateInvalidCiphertextExceptionFormGroup() {
		return new FormGroup<InvalidCiphertextExceptionFormProperties>({
		});

	}

	export interface KeyUnavailableException {
	}
	export interface KeyUnavailableExceptionFormProperties {
	}
	export function CreateKeyUnavailableExceptionFormGroup() {
		return new FormGroup<KeyUnavailableExceptionFormProperties>({
		});

	}

	export interface IncorrectKeyException {
	}
	export interface IncorrectKeyExceptionFormProperties {
	}
	export function CreateIncorrectKeyExceptionFormGroup() {
		return new FormGroup<IncorrectKeyExceptionFormProperties>({
		});

	}

	export interface InvalidKeyUsageException {
	}
	export interface InvalidKeyUsageExceptionFormProperties {
	}
	export function CreateInvalidKeyUsageExceptionFormGroup() {
		return new FormGroup<InvalidKeyUsageExceptionFormProperties>({
		});

	}

	export interface DeleteAliasRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AliasName: string;
	}
	export interface DeleteAliasRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AliasName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAliasRequestFormGroup() {
		return new FormGroup<DeleteAliasRequestFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9:/_-]+$')]),
		});

	}

	export interface DeleteCustomKeyStoreResponse {
	}
	export interface DeleteCustomKeyStoreResponseFormProperties {
	}
	export function CreateDeleteCustomKeyStoreResponseFormGroup() {
		return new FormGroup<DeleteCustomKeyStoreResponseFormProperties>({
		});

	}

	export interface DeleteCustomKeyStoreRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: string;
	}
	export interface DeleteCustomKeyStoreRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomKeyStoreRequestFormGroup() {
		return new FormGroup<DeleteCustomKeyStoreRequestFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface CustomKeyStoreHasCMKsException {
	}
	export interface CustomKeyStoreHasCMKsExceptionFormProperties {
	}
	export function CreateCustomKeyStoreHasCMKsExceptionFormGroup() {
		return new FormGroup<CustomKeyStoreHasCMKsExceptionFormProperties>({
		});

	}

	export interface DeleteImportedKeyMaterialRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;
	}
	export interface DeleteImportedKeyMaterialRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImportedKeyMaterialRequestFormGroup() {
		return new FormGroup<DeleteImportedKeyMaterialRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeCustomKeyStoresResponse {
		CustomKeyStores?: Array<CustomKeyStoresListEntry>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker?: string | null;
		Truncated?: boolean | null;
	}
	export interface DescribeCustomKeyStoresResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeCustomKeyStoresResponseFormGroup() {
		return new FormGroup<DescribeCustomKeyStoresResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about each custom key store in the custom key store list. */
	export interface CustomKeyStoresListEntry {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CustomKeyStoreName?: string | null;

		/**
		 * Max length: 24
		 * Min length: 19
		 */
		CloudHsmClusterId?: string | null;

		/**
		 * Max length: 5000
		 * Min length: 1
		 */
		TrustAnchorCertificate?: string | null;
		ConnectionState?: CustomKeyStoresListEntryConnectionState | null;
		ConnectionErrorCode?: CustomKeyStoresListEntryConnectionErrorCode | null;
		CreationDate?: Date | null;
	}

	/** Contains information about each custom key store in the custom key store list. */
	export interface CustomKeyStoresListEntryFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CustomKeyStoreName: FormControl<string | null | undefined>,

		/**
		 * Max length: 24
		 * Min length: 19
		 */
		CloudHsmClusterId: FormControl<string | null | undefined>,

		/**
		 * Max length: 5000
		 * Min length: 1
		 */
		TrustAnchorCertificate: FormControl<string | null | undefined>,
		ConnectionState: FormControl<CustomKeyStoresListEntryConnectionState | null | undefined>,
		ConnectionErrorCode: FormControl<CustomKeyStoresListEntryConnectionErrorCode | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCustomKeyStoresListEntryFormGroup() {
		return new FormGroup<CustomKeyStoresListEntryFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			CustomKeyStoreName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			CloudHsmClusterId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(19), Validators.maxLength(24)]),
			TrustAnchorCertificate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(5000)]),
			ConnectionState: new FormControl<CustomKeyStoresListEntryConnectionState | null | undefined>(undefined),
			ConnectionErrorCode: new FormControl<CustomKeyStoresListEntryConnectionErrorCode | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CustomKeyStoresListEntryConnectionState { CONNECTED = 0, CONNECTING = 1, FAILED = 2, DISCONNECTED = 3, DISCONNECTING = 4 }

	export enum CustomKeyStoresListEntryConnectionErrorCode { INVALID_CREDENTIALS = 0, CLUSTER_NOT_FOUND = 1, NETWORK_ERRORS = 2, INTERNAL_ERROR = 3, INSUFFICIENT_CLOUDHSM_HSMS = 4, USER_LOCKED_OUT = 5, USER_NOT_FOUND = 6, USER_LOGGED_IN = 7, SUBNET_NOT_FOUND = 8 }

	export interface DescribeCustomKeyStoresRequest {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CustomKeyStoreName?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface DescribeCustomKeyStoresRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CustomKeyStoreName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCustomKeyStoresRequestFormGroup() {
		return new FormGroup<DescribeCustomKeyStoresRequestFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			CustomKeyStoreName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
		});

	}

	export interface DescribeKeyResponse {

		/** <p>Contains metadata about a customer master key (CMK).</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p> */
		KeyMetadata?: KeyMetadata;
	}
	export interface DescribeKeyResponseFormProperties {
	}
	export function CreateDescribeKeyResponseFormGroup() {
		return new FormGroup<DescribeKeyResponseFormProperties>({
		});

	}

	export interface DescribeKeyRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;
	}
	export interface DescribeKeyRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeKeyRequestFormGroup() {
		return new FormGroup<DescribeKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface DisableKeyRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;
	}
	export interface DisableKeyRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateDisableKeyRequestFormGroup() {
		return new FormGroup<DisableKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface DisableKeyRotationRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;
	}
	export interface DisableKeyRotationRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateDisableKeyRotationRequestFormGroup() {
		return new FormGroup<DisableKeyRotationRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface DisconnectCustomKeyStoreResponse {
	}
	export interface DisconnectCustomKeyStoreResponseFormProperties {
	}
	export function CreateDisconnectCustomKeyStoreResponseFormGroup() {
		return new FormGroup<DisconnectCustomKeyStoreResponseFormProperties>({
		});

	}

	export interface DisconnectCustomKeyStoreRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: string;
	}
	export interface DisconnectCustomKeyStoreRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectCustomKeyStoreRequestFormGroup() {
		return new FormGroup<DisconnectCustomKeyStoreRequestFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface EnableKeyRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;
	}
	export interface EnableKeyRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateEnableKeyRequestFormGroup() {
		return new FormGroup<EnableKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface EnableKeyRotationRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;
	}
	export interface EnableKeyRotationRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateEnableKeyRotationRequestFormGroup() {
		return new FormGroup<EnableKeyRotationRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface EncryptResponse {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;
		EncryptionAlgorithm?: EncryptionAlgorithmSpec | null;
	}
	export interface EncryptResponseFormProperties {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		EncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
	}
	export function CreateEncryptResponseFormGroup() {
		return new FormGroup<EncryptResponseFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144)]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			EncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface EncryptRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		Plaintext: string;
		EncryptionContext?: EncryptionContextType;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;
		EncryptionAlgorithm?: EncryptionAlgorithmSpec | null;
	}
	export interface EncryptRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		Plaintext: FormControl<string | null | undefined>,
		EncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
	}
	export function CreateEncryptRequestFormGroup() {
		return new FormGroup<EncryptRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Plaintext: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
			EncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface GenerateDataKeyResponse {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob?: string | null;

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		Plaintext?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;
	}
	export interface GenerateDataKeyResponseFormProperties {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob: FormControl<string | null | undefined>,

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		Plaintext: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateDataKeyResponseFormGroup() {
		return new FormGroup<GenerateDataKeyResponseFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144)]),
			Plaintext: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface GenerateDataKeyRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;
		EncryptionContext?: EncryptionContextType;

		/**
		 * Minimum: 1
		 * Maximum: 1024
		 */
		NumberOfBytes?: number | null;
		KeySpec?: GenerateDataKeyRequestKeySpec | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;
	}
	export interface GenerateDataKeyRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1024
		 */
		NumberOfBytes: FormControl<number | null | undefined>,
		KeySpec: FormControl<GenerateDataKeyRequestKeySpec | null | undefined>,
	}
	export function CreateGenerateDataKeyRequestFormGroup() {
		return new FormGroup<GenerateDataKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			NumberOfBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			KeySpec: new FormControl<GenerateDataKeyRequestKeySpec | null | undefined>(undefined),
		});

	}

	export enum GenerateDataKeyRequestKeySpec { AES_256 = 0, AES_128 = 1 }

	export interface GenerateDataKeyPairResponse {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		PrivateKeyCiphertextBlob?: string | null;

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		PrivateKeyPlaintext?: string | null;

		/**
		 * Max length: 8192
		 * Min length: 1
		 */
		PublicKey?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;
		KeyPairSpec?: GenerateDataKeyPairResponseKeyPairSpec | null;
	}
	export interface GenerateDataKeyPairResponseFormProperties {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		PrivateKeyCiphertextBlob: FormControl<string | null | undefined>,

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		PrivateKeyPlaintext: FormControl<string | null | undefined>,

		/**
		 * Max length: 8192
		 * Min length: 1
		 */
		PublicKey: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		KeyPairSpec: FormControl<GenerateDataKeyPairResponseKeyPairSpec | null | undefined>,
	}
	export function CreateGenerateDataKeyPairResponseFormGroup() {
		return new FormGroup<GenerateDataKeyPairResponseFormProperties>({
			PrivateKeyCiphertextBlob: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144)]),
			PrivateKeyPlaintext: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			PublicKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8192)]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			KeyPairSpec: new FormControl<GenerateDataKeyPairResponseKeyPairSpec | null | undefined>(undefined),
		});

	}

	export enum GenerateDataKeyPairResponseKeyPairSpec { RSA_2048 = 0, RSA_3072 = 1, RSA_4096 = 2, ECC_NIST_P256 = 3, ECC_NIST_P384 = 4, ECC_NIST_P521 = 5, ECC_SECG_P256K1 = 6 }

	export interface GenerateDataKeyPairRequest {
		EncryptionContext?: EncryptionContextType;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/** Required */
		KeyPairSpec: GenerateDataKeyPairResponseKeyPairSpec;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;
	}
	export interface GenerateDataKeyPairRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		KeyPairSpec: FormControl<GenerateDataKeyPairResponseKeyPairSpec | null | undefined>,
	}
	export function CreateGenerateDataKeyPairRequestFormGroup() {
		return new FormGroup<GenerateDataKeyPairRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			KeyPairSpec: new FormControl<GenerateDataKeyPairResponseKeyPairSpec | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateDataKeyPairWithoutPlaintextResponse {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		PrivateKeyCiphertextBlob?: string | null;

		/**
		 * Max length: 8192
		 * Min length: 1
		 */
		PublicKey?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;
		KeyPairSpec?: GenerateDataKeyPairResponseKeyPairSpec | null;
	}
	export interface GenerateDataKeyPairWithoutPlaintextResponseFormProperties {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		PrivateKeyCiphertextBlob: FormControl<string | null | undefined>,

		/**
		 * Max length: 8192
		 * Min length: 1
		 */
		PublicKey: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		KeyPairSpec: FormControl<GenerateDataKeyPairResponseKeyPairSpec | null | undefined>,
	}
	export function CreateGenerateDataKeyPairWithoutPlaintextResponseFormGroup() {
		return new FormGroup<GenerateDataKeyPairWithoutPlaintextResponseFormProperties>({
			PrivateKeyCiphertextBlob: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144)]),
			PublicKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8192)]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			KeyPairSpec: new FormControl<GenerateDataKeyPairResponseKeyPairSpec | null | undefined>(undefined),
		});

	}

	export interface GenerateDataKeyPairWithoutPlaintextRequest {
		EncryptionContext?: EncryptionContextType;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/** Required */
		KeyPairSpec: GenerateDataKeyPairResponseKeyPairSpec;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;
	}
	export interface GenerateDataKeyPairWithoutPlaintextRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		KeyPairSpec: FormControl<GenerateDataKeyPairResponseKeyPairSpec | null | undefined>,
	}
	export function CreateGenerateDataKeyPairWithoutPlaintextRequestFormGroup() {
		return new FormGroup<GenerateDataKeyPairWithoutPlaintextRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			KeyPairSpec: new FormControl<GenerateDataKeyPairResponseKeyPairSpec | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateDataKeyWithoutPlaintextResponse {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;
	}
	export interface GenerateDataKeyWithoutPlaintextResponseFormProperties {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateDataKeyWithoutPlaintextResponseFormGroup() {
		return new FormGroup<GenerateDataKeyWithoutPlaintextResponseFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144)]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface GenerateDataKeyWithoutPlaintextRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;
		EncryptionContext?: EncryptionContextType;
		KeySpec?: GenerateDataKeyRequestKeySpec | null;

		/**
		 * Minimum: 1
		 * Maximum: 1024
		 */
		NumberOfBytes?: number | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;
	}
	export interface GenerateDataKeyWithoutPlaintextRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		KeySpec: FormControl<GenerateDataKeyRequestKeySpec | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1024
		 */
		NumberOfBytes: FormControl<number | null | undefined>,
	}
	export function CreateGenerateDataKeyWithoutPlaintextRequestFormGroup() {
		return new FormGroup<GenerateDataKeyWithoutPlaintextRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			KeySpec: new FormControl<GenerateDataKeyRequestKeySpec | null | undefined>(undefined),
			NumberOfBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
		});

	}

	export interface GenerateRandomResponse {

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		Plaintext?: string | null;
	}
	export interface GenerateRandomResponseFormProperties {

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		Plaintext: FormControl<string | null | undefined>,
	}
	export function CreateGenerateRandomResponseFormGroup() {
		return new FormGroup<GenerateRandomResponseFormProperties>({
			Plaintext: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
		});

	}

	export interface GenerateRandomRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1024
		 */
		NumberOfBytes?: number | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId?: string | null;
	}
	export interface GenerateRandomRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1024
		 */
		NumberOfBytes: FormControl<number | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateRandomRequestFormGroup() {
		return new FormGroup<GenerateRandomRequestFormProperties>({
			NumberOfBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface GetKeyPolicyResponse {

		/**
		 * Max length: 131072
		 * Min length: 1
		 */
		Policy?: string | null;
	}
	export interface GetKeyPolicyResponseFormProperties {

		/**
		 * Max length: 131072
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyPolicyResponseFormGroup() {
		return new FormGroup<GetKeyPolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]+')]),
		});

	}

	export interface GetKeyPolicyRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		PolicyName: string;
	}
	export interface GetKeyPolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyPolicyRequestFormGroup() {
		return new FormGroup<GetKeyPolicyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w]+')]),
		});

	}

	export interface GetKeyRotationStatusResponse {
		KeyRotationEnabled?: boolean | null;
	}
	export interface GetKeyRotationStatusResponseFormProperties {
		KeyRotationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGetKeyRotationStatusResponseFormGroup() {
		return new FormGroup<GetKeyRotationStatusResponseFormProperties>({
			KeyRotationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetKeyRotationStatusRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;
	}
	export interface GetKeyRotationStatusRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyRotationStatusRequestFormGroup() {
		return new FormGroup<GetKeyRotationStatusRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface GetParametersForImportResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		ImportToken?: string | null;

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		PublicKey?: string | null;
		ParametersValidTo?: Date | null;
	}
	export interface GetParametersForImportResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		ImportToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		PublicKey: FormControl<string | null | undefined>,
		ParametersValidTo: FormControl<Date | null | undefined>,
	}
	export function CreateGetParametersForImportResponseFormGroup() {
		return new FormGroup<GetParametersForImportResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			ImportToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144)]),
			PublicKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			ParametersValidTo: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetParametersForImportRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/** Required */
		WrappingAlgorithm: GetParametersForImportRequestWrappingAlgorithm;

		/** Required */
		WrappingKeySpec: GetParametersForImportRequestWrappingKeySpec;
	}
	export interface GetParametersForImportRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		WrappingAlgorithm: FormControl<GetParametersForImportRequestWrappingAlgorithm | null | undefined>,

		/** Required */
		WrappingKeySpec: FormControl<GetParametersForImportRequestWrappingKeySpec | null | undefined>,
	}
	export function CreateGetParametersForImportRequestFormGroup() {
		return new FormGroup<GetParametersForImportRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			WrappingAlgorithm: new FormControl<GetParametersForImportRequestWrappingAlgorithm | null | undefined>(undefined, [Validators.required]),
			WrappingKeySpec: new FormControl<GetParametersForImportRequestWrappingKeySpec | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GetParametersForImportRequestWrappingAlgorithm { RSAES_PKCS1_V1_5 = 0, RSAES_OAEP_SHA_1 = 1, RSAES_OAEP_SHA_256 = 2 }

	export enum GetParametersForImportRequestWrappingKeySpec { RSA_2048 = 0 }

	export interface GetPublicKeyResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;

		/**
		 * Max length: 8192
		 * Min length: 1
		 */
		PublicKey?: string | null;
		CustomerMasterKeySpec?: KeyMetadataCustomerMasterKeySpec | null;
		KeyUsage?: KeyMetadataKeyUsage | null;
		EncryptionAlgorithms?: Array<EncryptionAlgorithmSpec>;
		SigningAlgorithms?: Array<SigningAlgorithmSpec>;
	}
	export interface GetPublicKeyResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 8192
		 * Min length: 1
		 */
		PublicKey: FormControl<string | null | undefined>,
		CustomerMasterKeySpec: FormControl<KeyMetadataCustomerMasterKeySpec | null | undefined>,
		KeyUsage: FormControl<KeyMetadataKeyUsage | null | undefined>,
	}
	export function CreateGetPublicKeyResponseFormGroup() {
		return new FormGroup<GetPublicKeyResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			PublicKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8192)]),
			CustomerMasterKeySpec: new FormControl<KeyMetadataCustomerMasterKeySpec | null | undefined>(undefined),
			KeyUsage: new FormControl<KeyMetadataKeyUsage | null | undefined>(undefined),
		});

	}

	export interface GetPublicKeyRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;
	}
	export interface GetPublicKeyRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateGetPublicKeyRequestFormGroup() {
		return new FormGroup<GetPublicKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface ImportKeyMaterialResponse {
	}
	export interface ImportKeyMaterialResponseFormProperties {
	}
	export function CreateImportKeyMaterialResponseFormGroup() {
		return new FormGroup<ImportKeyMaterialResponseFormProperties>({
		});

	}

	export interface ImportKeyMaterialRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Required
		 * Max length: 6144
		 * Min length: 1
		 */
		ImportToken: string;

		/**
		 * Required
		 * Max length: 6144
		 * Min length: 1
		 */
		EncryptedKeyMaterial: string;
		ValidTo?: Date | null;
		ExpirationModel?: KeyMetadataExpirationModel | null;
	}
	export interface ImportKeyMaterialRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 6144
		 * Min length: 1
		 */
		ImportToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 6144
		 * Min length: 1
		 */
		EncryptedKeyMaterial: FormControl<string | null | undefined>,
		ValidTo: FormControl<Date | null | undefined>,
		ExpirationModel: FormControl<KeyMetadataExpirationModel | null | undefined>,
	}
	export function CreateImportKeyMaterialRequestFormGroup() {
		return new FormGroup<ImportKeyMaterialRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			ImportToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(6144)]),
			EncryptedKeyMaterial: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(6144)]),
			ValidTo: new FormControl<Date | null | undefined>(undefined),
			ExpirationModel: new FormControl<KeyMetadataExpirationModel | null | undefined>(undefined),
		});

	}

	export interface IncorrectKeyMaterialException {
	}
	export interface IncorrectKeyMaterialExceptionFormProperties {
	}
	export function CreateIncorrectKeyMaterialExceptionFormGroup() {
		return new FormGroup<IncorrectKeyMaterialExceptionFormProperties>({
		});

	}

	export interface ExpiredImportTokenException {
	}
	export interface ExpiredImportTokenExceptionFormProperties {
	}
	export function CreateExpiredImportTokenExceptionFormGroup() {
		return new FormGroup<ExpiredImportTokenExceptionFormProperties>({
		});

	}

	export interface InvalidImportTokenException {
	}
	export interface InvalidImportTokenExceptionFormProperties {
	}
	export function CreateInvalidImportTokenExceptionFormGroup() {
		return new FormGroup<InvalidImportTokenExceptionFormProperties>({
		});

	}

	export interface ListAliasesResponse {
		Aliases?: Array<AliasListEntry>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker?: string | null;
		Truncated?: boolean | null;
	}
	export interface ListAliasesResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListAliasesResponseFormGroup() {
		return new FormGroup<ListAliasesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about an alias. */
	export interface AliasListEntry {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AliasName?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		AliasArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TargetKeyId?: string | null;
	}

	/** Contains information about an alias. */
	export interface AliasListEntryFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AliasName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		AliasArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TargetKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAliasListEntryFormGroup() {
		return new FormGroup<AliasListEntryFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9:/_-]+$')]),
			AliasArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			TargetKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface ListAliasesRequest {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface ListAliasesRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListAliasesRequestFormGroup() {
		return new FormGroup<ListAliasesRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
		});

	}

	export interface InvalidMarkerException {
	}
	export interface InvalidMarkerExceptionFormProperties {
	}
	export function CreateInvalidMarkerExceptionFormGroup() {
		return new FormGroup<InvalidMarkerExceptionFormProperties>({
		});

	}

	export interface ListGrantsResponse {
		Grants?: Array<GrantListEntry>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker?: string | null;
		Truncated?: boolean | null;
	}
	export interface ListGrantsResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListGrantsResponseFormGroup() {
		return new FormGroup<ListGrantsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about a grant. */
	export interface GrantListEntry {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		GrantId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;
		CreationDate?: Date | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		GranteePrincipal?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		RetiringPrincipal?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		IssuingAccount?: string | null;
		Operations?: Array<GrantOperation>;

		/** <p>Use this structure to allow <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. </p> <p>AWS KMS applies the grant constraints only to cryptographic operations that support an encryption context, that is, all cryptographic operations with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#symmetric-cmks">symmetric CMK</a>. Grant constraints are not applied to operations that do not support an encryption context, such as cryptographic operations with asymmetric CMKs and management operations, such as <a>DescribeKey</a> or <a>ScheduleKeyDeletion</a>.</p> <important> <p>In a cryptographic operation, the encryption context in the decryption operation must be an exact, case-sensitive match for the keys and values in the encryption context of the encryption operation. Only the order of the pairs can vary.</p> <p>However, in a grant constraint, the key in each key-value pair is not case sensitive, but the value is case sensitive.</p> <p>To avoid confusion, do not use multiple encryption context pairs that differ only by case. To require a fully case-sensitive encryption context, use the <code>kms:EncryptionContext:</code> and <code>kms:EncryptionContextKeys</code> conditions in an IAM or key policy. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context">kms:EncryptionContext:</a> in the <i> <i>AWS Key Management Service Developer Guide</i> </i>.</p> </important> */
		Constraints?: GrantConstraints;
	}

	/** Contains information about a grant. */
	export interface GrantListEntryFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		GrantId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		GranteePrincipal: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		RetiringPrincipal: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		IssuingAccount: FormControl<string | null | undefined>,
	}
	export function CreateGrantListEntryFormGroup() {
		return new FormGroup<GrantListEntryFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			GrantId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9:/_-]+$')]),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			GranteePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w+=,.@:/-]+$')]),
			RetiringPrincipal: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w+=,.@:/-]+$')]),
			IssuingAccount: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w+=,.@:/-]+$')]),
		});

	}

	export interface ListGrantsRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;
	}
	export interface ListGrantsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateListGrantsRequestFormGroup() {
		return new FormGroup<ListGrantsRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface ListKeyPoliciesResponse {
		PolicyNames?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker?: string | null;
		Truncated?: boolean | null;
	}
	export interface ListKeyPoliciesResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListKeyPoliciesResponseFormGroup() {
		return new FormGroup<ListKeyPoliciesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListKeyPoliciesRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface ListKeyPoliciesRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListKeyPoliciesRequestFormGroup() {
		return new FormGroup<ListKeyPoliciesRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
		});

	}

	export interface ListKeysResponse {
		Keys?: Array<KeyListEntry>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker?: string | null;
		Truncated?: boolean | null;
	}
	export interface ListKeysResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListKeysResponseFormGroup() {
		return new FormGroup<ListKeysResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about each entry in the key list. */
	export interface KeyListEntry {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		KeyArn?: string | null;
	}

	/** Contains information about each entry in the key list. */
	export interface KeyListEntryFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		KeyArn: FormControl<string | null | undefined>,
	}
	export function CreateKeyListEntryFormGroup() {
		return new FormGroup<KeyListEntryFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			KeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface ListKeysRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface ListKeysRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListKeysRequestFormGroup() {
		return new FormGroup<ListKeysRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
		});

	}

	export interface ListResourceTagsResponse {
		Tags?: Array<Tag>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker?: string | null;
		Truncated?: boolean | null;
	}
	export interface ListResourceTagsResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListResourceTagsResponseFormGroup() {
		return new FormGroup<ListResourceTagsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListResourceTagsRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface ListResourceTagsRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListResourceTagsRequestFormGroup() {
		return new FormGroup<ListResourceTagsRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
		});

	}

	export interface ListRetirableGrantsRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		RetiringPrincipal: string;
	}
	export interface ListRetirableGrantsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		RetiringPrincipal: FormControl<string | null | undefined>,
	}
	export function CreateListRetirableGrantsRequestFormGroup() {
		return new FormGroup<ListRetirableGrantsRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\u0020-\u00FF]*')]),
			RetiringPrincipal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w+=,.@:/-]+$')]),
		});

	}

	export interface PutKeyPolicyRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		PolicyName: string;

		/**
		 * Required
		 * Max length: 131072
		 * Min length: 1
		 */
		Policy: string;
		BypassPolicyLockoutSafetyCheck?: boolean | null;
	}
	export interface PutKeyPolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		PolicyName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 131072
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,
		BypassPolicyLockoutSafetyCheck: FormControl<boolean | null | undefined>,
	}
	export function CreatePutKeyPolicyRequestFormGroup() {
		return new FormGroup<PutKeyPolicyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w]+')]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(131072), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]+')]),
			BypassPolicyLockoutSafetyCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReEncryptResponse {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		SourceKeyId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;
		SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec | null;
		DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec | null;
	}
	export interface ReEncryptResponseFormProperties {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		SourceKeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		SourceEncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
		DestinationEncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
	}
	export function CreateReEncryptResponseFormGroup() {
		return new FormGroup<ReEncryptResponseFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144)]),
			SourceKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			SourceEncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
			DestinationEncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface ReEncryptRequest {

		/**
		 * Required
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob: string;
		SourceEncryptionContext?: EncryptionContextType;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		SourceKeyId?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		DestinationKeyId: string;
		DestinationEncryptionContext?: EncryptionContextType;
		SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec | null;
		DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;
	}
	export interface ReEncryptRequestFormProperties {

		/**
		 * Required
		 * Max length: 6144
		 * Min length: 1
		 */
		CiphertextBlob: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		SourceKeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		DestinationKeyId: FormControl<string | null | undefined>,
		SourceEncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
		DestinationEncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
	}
	export function CreateReEncryptRequestFormGroup() {
		return new FormGroup<ReEncryptRequestFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(6144)]),
			SourceKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			DestinationKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			SourceEncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
			DestinationEncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface RetireGrantRequest {

		/**
		 * Max length: 8192
		 * Min length: 1
		 */
		GrantToken?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		GrantId?: string | null;
	}
	export interface RetireGrantRequestFormProperties {

		/**
		 * Max length: 8192
		 * Min length: 1
		 */
		GrantToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		GrantId: FormControl<string | null | undefined>,
	}
	export function CreateRetireGrantRequestFormGroup() {
		return new FormGroup<RetireGrantRequestFormProperties>({
			GrantToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8192)]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			GrantId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface InvalidGrantIdException {
	}
	export interface InvalidGrantIdExceptionFormProperties {
	}
	export function CreateInvalidGrantIdExceptionFormGroup() {
		return new FormGroup<InvalidGrantIdExceptionFormProperties>({
		});

	}

	export interface RevokeGrantRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GrantId: string;
	}
	export interface RevokeGrantRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GrantId: FormControl<string | null | undefined>,
	}
	export function CreateRevokeGrantRequestFormGroup() {
		return new FormGroup<RevokeGrantRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			GrantId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface ScheduleKeyDeletionResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;
		DeletionDate?: Date | null;
	}
	export interface ScheduleKeyDeletionResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		DeletionDate: FormControl<Date | null | undefined>,
	}
	export function CreateScheduleKeyDeletionResponseFormGroup() {
		return new FormGroup<ScheduleKeyDeletionResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			DeletionDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ScheduleKeyDeletionRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Minimum: 1
		 * Maximum: 365
		 */
		PendingWindowInDays?: number | null;
	}
	export interface ScheduleKeyDeletionRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 365
		 */
		PendingWindowInDays: FormControl<number | null | undefined>,
	}
	export function CreateScheduleKeyDeletionRequestFormGroup() {
		return new FormGroup<ScheduleKeyDeletionRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			PendingWindowInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(365)]),
		});

	}

	export interface SignResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		Signature?: string | null;
		SigningAlgorithm?: SigningAlgorithmSpec | null;
	}
	export interface SignResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		Signature: FormControl<string | null | undefined>,
		SigningAlgorithm: FormControl<SigningAlgorithmSpec | null | undefined>,
	}
	export function CreateSignResponseFormGroup() {
		return new FormGroup<SignResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			Signature: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144)]),
			SigningAlgorithm: new FormControl<SigningAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface SignRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		Message: string;
		MessageType?: SignRequestMessageType | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;

		/** Required */
		SigningAlgorithm: SigningAlgorithmSpec;
	}
	export interface SignRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
		MessageType: FormControl<SignRequestMessageType | null | undefined>,

		/** Required */
		SigningAlgorithm: FormControl<SigningAlgorithmSpec | null | undefined>,
	}
	export function CreateSignRequestFormGroup() {
		return new FormGroup<SignRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
			MessageType: new FormControl<SignRequestMessageType | null | undefined>(undefined),
			SigningAlgorithm: new FormControl<SigningAlgorithmSpec | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SignRequestMessageType { RAW = 0, DIGEST = 1 }

	export interface TagResourceRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface UntagResourceRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateAliasRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AliasName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		TargetKeyId: string;
	}
	export interface UpdateAliasRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AliasName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		TargetKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAliasRequestFormGroup() {
		return new FormGroup<UpdateAliasRequestFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9:/_-]+$')]),
			TargetKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateCustomKeyStoreResponse {
	}
	export interface UpdateCustomKeyStoreResponseFormProperties {
	}
	export function CreateUpdateCustomKeyStoreResponseFormGroup() {
		return new FormGroup<UpdateCustomKeyStoreResponseFormProperties>({
		});

	}

	export interface UpdateCustomKeyStoreRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		NewCustomKeyStoreName?: string | null;

		/**
		 * Max length: 32
		 * Min length: 7
		 */
		KeyStorePassword?: string | null;

		/**
		 * Max length: 24
		 * Min length: 19
		 */
		CloudHsmClusterId?: string | null;
	}
	export interface UpdateCustomKeyStoreRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CustomKeyStoreId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		NewCustomKeyStoreName: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 7
		 */
		KeyStorePassword: FormControl<string | null | undefined>,

		/**
		 * Max length: 24
		 * Min length: 19
		 */
		CloudHsmClusterId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomKeyStoreRequestFormGroup() {
		return new FormGroup<UpdateCustomKeyStoreRequestFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			NewCustomKeyStoreName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			KeyStorePassword: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(32)]),
			CloudHsmClusterId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(19), Validators.maxLength(24)]),
		});

	}

	export interface CloudHsmClusterNotRelatedException {
	}
	export interface CloudHsmClusterNotRelatedExceptionFormProperties {
	}
	export function CreateCloudHsmClusterNotRelatedExceptionFormGroup() {
		return new FormGroup<CloudHsmClusterNotRelatedExceptionFormProperties>({
		});

	}

	export interface UpdateKeyDescriptionRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 0
		 */
		Description: string;
	}
	export interface UpdateKeyDescriptionRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKeyDescriptionRequestFormGroup() {
		return new FormGroup<UpdateKeyDescriptionRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(8192)]),
		});

	}

	export interface VerifyResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId?: string | null;
		SignatureValid?: boolean | null;
		SigningAlgorithm?: SigningAlgorithmSpec | null;
	}
	export interface VerifyResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,
		SignatureValid: FormControl<boolean | null | undefined>,
		SigningAlgorithm: FormControl<SigningAlgorithmSpec | null | undefined>,
	}
	export function CreateVerifyResponseFormGroup() {
		return new FormGroup<VerifyResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			SignatureValid: new FormControl<boolean | null | undefined>(undefined),
			SigningAlgorithm: new FormControl<SigningAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface VerifyRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: string;

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		Message: string;
		MessageType?: SignRequestMessageType | null;

		/**
		 * Required
		 * Max length: 6144
		 * Min length: 1
		 */
		Signature: string;

		/** Required */
		SigningAlgorithm: SigningAlgorithmSpec;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		GrantTokens?: Array<string>;
	}
	export interface VerifyRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
		MessageType: FormControl<SignRequestMessageType | null | undefined>,

		/**
		 * Required
		 * Max length: 6144
		 * Min length: 1
		 */
		Signature: FormControl<string | null | undefined>,

		/** Required */
		SigningAlgorithm: FormControl<SigningAlgorithmSpec | null | undefined>,
	}
	export function CreateVerifyRequestFormGroup() {
		return new FormGroup<VerifyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
			MessageType: new FormControl<SignRequestMessageType | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(6144)]),
			SigningAlgorithm: new FormControl<SigningAlgorithmSpec | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KMSInvalidSignatureException {
	}
	export interface KMSInvalidSignatureExceptionFormProperties {
	}
	export function CreateKMSInvalidSignatureExceptionFormGroup() {
		return new FormGroup<KMSInvalidSignatureExceptionFormProperties>({
		});

	}

	export enum AlgorithmSpec { RSAES_PKCS1_V1_5 = 0, RSAES_OAEP_SHA_1 = 1, RSAES_OAEP_SHA_256 = 2 }

	export enum ConnectionErrorCodeType { INVALID_CREDENTIALS = 0, CLUSTER_NOT_FOUND = 1, NETWORK_ERRORS = 2, INTERNAL_ERROR = 3, INSUFFICIENT_CLOUDHSM_HSMS = 4, USER_LOCKED_OUT = 5, USER_NOT_FOUND = 6, USER_LOGGED_IN = 7, SUBNET_NOT_FOUND = 8 }

	export enum ConnectionStateType { CONNECTED = 0, CONNECTING = 1, FAILED = 2, DISCONNECTED = 3, DISCONNECTING = 4 }

	export enum KeyUsageType { SIGN_VERIFY = 0, ENCRYPT_DECRYPT = 1 }

	export enum CustomerMasterKeySpec { RSA_2048 = 0, RSA_3072 = 1, RSA_4096 = 2, ECC_NIST_P256 = 3, ECC_NIST_P384 = 4, ECC_NIST_P521 = 5, ECC_SECG_P256K1 = 6, SYMMETRIC_DEFAULT = 7 }

	export enum OriginType { AWS_KMS = 0, EXTERNAL = 1, AWS_CLOUDHSM = 2 }

	export enum DataKeyPairSpec { RSA_2048 = 0, RSA_3072 = 1, RSA_4096 = 2, ECC_NIST_P256 = 3, ECC_NIST_P384 = 4, ECC_NIST_P521 = 5, ECC_SECG_P256K1 = 6 }

	export enum DataKeySpec { AES_256 = 0, AES_128 = 1 }

	export enum ExpirationModelType { KEY_MATERIAL_EXPIRES = 0, KEY_MATERIAL_DOES_NOT_EXPIRE = 1 }

	export enum WrappingKeySpec { RSA_2048 = 0 }

	export enum KeyManagerType { AWS = 0, CUSTOMER = 1 }

	export enum KeyState { Enabled = 0, Disabled = 1, PendingDeletion = 2, PendingImport = 3, Unavailable = 4 }

	export enum MessageType { RAW = 0, DIGEST = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Cancels the deletion of a customer master key (CMK). When this operation succeeds, the key state of the CMK is <code>Disabled</code>. To enable the CMK, use <a>EnableKey</a>. You cannot perform this operation on a CMK in a different AWS account.</p> <p>For more information about scheduling and canceling deletion of a CMK, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting Customer Master Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.CancelKeyDeletion
		 * @return {CancelKeyDeletionResponse} Success
		 */
		CancelKeyDeletion(requestBody: CancelKeyDeletionRequest): Observable<CancelKeyDeletionResponse> {
			return this.http.post<CancelKeyDeletionResponse>(this.baseUri + '#X-Amz-Target=TrentService.CancelKeyDeletion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Connects or reconnects a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> to its associated AWS CloudHSM cluster.</p> <p>The custom key store must be connected before you can create customer master keys (CMKs) in the key store or use the CMKs it contains. You can disconnect and reconnect a custom key store at any time.</p> <p>To connect a custom key store, its associated AWS CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation. To add HSMs to the cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation. Also, the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser"> <code>kmsuser</code> crypto user</a> (CU) must not be logged into the cluster. This prevents AWS KMS from using this account to log in.</p> <p>The connection process can take an extended amount of time to complete; up to 20 minutes. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p> <p>During the connection process, AWS KMS finds the AWS CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the AWS CloudHSM client as the <code>kmsuser</code> CU, and rotates its password.</p> <p>The <code>ConnectCustomKeyStore</code> operation might fail for various reasons. To find the reason, use the <a>DescribeCustomKeyStores</a> operation and see the <code>ConnectionErrorCode</code> in the response. For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p> <p>To fix the failure, use the <a>DisconnectCustomKeyStore</a> operation to disconnect the custom key store, correct the error, use the <a>UpdateCustomKeyStore</a> operation if necessary, and then use <code>ConnectCustomKeyStore</code> again.</p> <p>If you are having trouble connecting or disconnecting a custom key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a Custom Key Store</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.ConnectCustomKeyStore
		 * @return {ConnectCustomKeyStoreResponse} Success
		 */
		ConnectCustomKeyStore(requestBody: ConnectCustomKeyStoreRequest): Observable<ConnectCustomKeyStoreResponse> {
			return this.http.post<ConnectCustomKeyStoreResponse>(this.baseUri + '#X-Amz-Target=TrentService.ConnectCustomKeyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a display name for a customer managed customer master key (CMK). You can use an alias to identify a CMK in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>, such as <a>Encrypt</a> and <a>GenerateDataKey</a>. You can change the CMK associated with the alias at any time.</p> <p>Aliases are easier to remember than key IDs. They can also help to simplify your applications. For example, if you use an alias in your code, you can change the CMK your code uses by associating a given alias with a different CMK. </p> <p>To run the same code in multiple AWS regions, use an alias in your code, such as <code>alias/ApplicationKey</code>. Then, in each AWS Region, create an <code>alias/ApplicationKey</code> alias that is associated with a CMK in that Region. When you run your code, it uses the <code>alias/ApplicationKey</code> CMK for that AWS Region without any Region-specific code.</p> <p>This operation does not return a response. To get the alias that you created, use the <a>ListAliases</a> operation.</p> <p>To use aliases successfully, be aware of the following information.</p> <ul> <li> <p>Each alias points to only one CMK at a time, although a single CMK can have multiple aliases. The alias and its associated CMK must be in the same AWS account and Region. </p> </li> <li> <p>You can associate an alias with any customer managed CMK in the same AWS account and Region. However, you do not have permission to associate an alias with an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed CMK</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">AWS owned CMK</a>. </p> </li> <li> <p>To change the CMK associated with an alias, use the <a>UpdateAlias</a> operation. The current CMK and the new CMK must be the same type (both symmetric or both asymmetric) and they must have the same key usage (<code>ENCRYPT_DECRYPT</code> or <code>SIGN_VERIFY</code>). This restriction prevents cryptographic errors in code that uses aliases.</p> </li> <li> <p>The alias name must begin with <code>alias/</code> followed by a name, such as <code>alias/ExampleAlias</code>. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with <code>alias/aws/</code>. The <code>alias/aws/</code> prefix is reserved for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed CMKs</a>. </p> </li> <li> <p>The alias name must be unique within an AWS Region. However, you can use the same alias name in multiple Regions of the same AWS account. Each instance of the alias is associated with a CMK in its Region.</p> </li> <li> <p>After you create an alias, you cannot change its alias name. However, you can use the <a>DeleteAlias</a> operation to delete the alias and then create a new alias with the desired name.</p> </li> <li> <p>You can use an alias name or alias ARN to identify a CMK in AWS KMS <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> and in the <a>DescribeKey</a> operation. However, you cannot use alias names or alias ARNs in API operations that manage CMKs, such as <a>DisableKey</a> or <a>GetKeyPolicy</a>. For information about the valid CMK identifiers for each AWS KMS API operation, see the descriptions of the <code>KeyId</code> parameter in the API operation documentation.</p> </li> </ul> <p>Because an alias is not a property of a CMK, you can delete and change the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases and alias ARNs of CMKs in each AWS account and Region, use the <a>ListAliases</a> operation.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.CreateAlias
		 * @return {void} Success
		 */
		CreateAlias(requestBody: CreateAliasRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.CreateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> that is associated with an <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html">AWS CloudHSM cluster</a> that you own and manage.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.</p> <p>Before you create the custom key store, you must assemble the required elements, including an AWS CloudHSM cluster that fulfills the requirements for a custom key store. For details about the required elements, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the Prerequisites</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the <a>ConnectCustomKeyStore</a> operation to connect the new key store to its AWS CloudHSM cluster. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it.</p> <p>For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a Custom Key Store</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.CreateCustomKeyStore
		 * @return {CreateCustomKeyStoreResponse} Success
		 */
		CreateCustomKeyStore(requestBody: CreateCustomKeyStoreRequest): Observable<CreateCustomKeyStoreResponse> {
			return this.http.post<CreateCustomKeyStoreResponse>(this.baseUri + '#X-Amz-Target=TrentService.CreateCustomKeyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a grant to a customer master key (CMK). The grant allows the grantee principal to use the CMK when the conditions specified in the grant are met. When setting permissions, grants are an alternative to key policies. </p> <p>To create a grant that allows a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operation</a> only when the request includes a particular <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>, use the <code>Constraints</code> parameter. For details, see <a>GrantConstraints</a>.</p> <p>You can create grants on symmetric and asymmetric CMKs. However, if the grant allows an operation that the CMK does not support, <code>CreateGrant</code> fails with a <code>ValidationException</code>. </p> <ul> <li> <p>Grants for symmetric CMKs cannot allow operations that are not supported for symmetric CMKs, including <a>Sign</a>, <a>Verify</a>, and <a>GetPublicKey</a>. (There are limited exceptions to this rule for legacy operations, but you should not create a grant for an operation that AWS KMS does not support.)</p> </li> <li> <p>Grants for asymmetric CMKs cannot allow operations that are not supported for asymmetric CMKs, including operations that <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey">generate data keys</a> or <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPair">data key pairs</a>, or operations related to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic key rotation</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or CMKs in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a>.</p> </li> <li> <p>Grants for asymmetric CMKs with a <code>KeyUsage</code> of <code>ENCRYPT_DECRYPT</code> cannot allow the <a>Sign</a> or <a>Verify</a> operations. Grants for asymmetric CMKs with a <code>KeyUsage</code> of <code>SIGN_VERIFY</code> cannot allow the <a>Encrypt</a> or <a>Decrypt</a> operations.</p> </li> <li> <p>Grants for asymmetric CMKs cannot include an encryption context grant constraint. An encryption context is not supported on asymmetric CMKs.</p> </li> </ul> <p>For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the <code>KeyId</code> parameter. For more information about grants, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants</a> in the <i> <i>AWS Key Management Service Developer Guide</i> </i>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.CreateGrant
		 * @return {CreateGrantResponse} Success
		 */
		CreateGrant(requestBody: CreateGrantRequest): Observable<CreateGrantResponse> {
			return this.http.post<CreateGrantResponse>(this.baseUri + '#X-Amz-Target=TrentService.CreateGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a unique customer managed <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master-keys">customer master key</a> (CMK) in your AWS account and Region. You cannot use this operation to create a CMK in a different AWS account.</p> <p>You can use the <code>CreateKey</code> operation to create symmetric or asymmetric CMKs.</p> <ul> <li> <p> <b>Symmetric CMKs</b> contain a 256-bit symmetric key that never leaves AWS KMS unencrypted. To use the CMK, you must call AWS KMS. You can use a symmetric CMK to encrypt and decrypt small amounts of data, but they are typically used to generate <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data keys</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-key-pairs">data keys pairs</a>. For details, see <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a>.</p> </li> <li> <p> <b>Asymmetric CMKs</b> can contain an RSA key pair or an Elliptic Curve (ECC) key pair. The private key in an asymmetric CMK never leaves AWS KMS unencrypted. However, you can use the <a>GetPublicKey</a> operation to download the public key so it can be used outside of AWS KMS. CMKs with RSA key pairs can be used to encrypt or decrypt data or sign and verify messages (but not both). CMKs with ECC key pairs can be used only to sign and verify messages.</p> </li> </ul> <p>For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>To create different types of CMKs, use the following guidance:</p> <dl> <dt>Asymmetric CMKs</dt> <dd> <p>To create an asymmetric CMK, use the <code>CustomerMasterKeySpec</code> parameter to specify the type of key material in the CMK. Then, use the <code>KeyUsage</code> parameter to determine whether the CMK will be used to encrypt and decrypt or sign and verify. You can't change these properties after the CMK is created.</p> <p> </p> </dd> <dt>Symmetric CMKs</dt> <dd> <p>When creating a symmetric CMK, you don't need to specify the <code>CustomerMasterKeySpec</code> or <code>KeyUsage</code> parameters. The default value for <code>CustomerMasterKeySpec</code>, <code>SYMMETRIC_DEFAULT</code>, and the default value for <code>KeyUsage</code>, <code>ENCRYPT_DECRYPT</code>, are the only valid values for symmetric CMKs. </p> <p> </p> </dd> <dt>Imported Key Material</dt> <dd> <p>To import your own key material, begin by creating a symmetric CMK with no key material. To do this, use the <code>Origin</code> parameter of <code>CreateKey</code> with a value of <code>EXTERNAL</code>. Next, use <a>GetParametersForImport</a> operation to get a public key and import token, and use the public key to encrypt your key material. Then, use <a>ImportKeyMaterial</a> with your import token to import the key material. For step-by-step instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i> <i>AWS Key Management Service Developer Guide</i> </i>. You cannot import the key material into an asymmetric CMK.</p> <p> </p> </dd> <dt>Custom Key Stores</dt> <dd> <p>To create a symmetric CMK in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, use the <code>CustomKeyStoreId</code> parameter to specify the custom key store. You must also use the <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The AWS CloudHSM cluster that is associated with the custom key store must have at least two active HSMs in different Availability Zones in the AWS Region. </p> <p>You cannot create an asymmetric CMK in a custom key store. For information about custom key stores in AWS KMS see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Using Custom Key Stores</a> in the <i> <i>AWS Key Management Service Developer Guide</i> </i>.</p> </dd> </dl>
		 * Post #X-Amz-Target=TrentService.CreateKey
		 * @return {CreateKeyResponse} Success
		 */
		CreateKey(requestBody: CreateKeyRequest): Observable<CreateKeyResponse> {
			return this.http.post<CreateKeyResponse>(this.baseUri + '#X-Amz-Target=TrentService.CreateKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Decrypts ciphertext that was encrypted by a AWS KMS customer master key (CMK) using any of the following operations:</p> <ul> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> </ul> <p>You can use this operation to decrypt ciphertext that was encrypted under a symmetric or asymmetric CMK. When the CMK is asymmetric, you must specify the CMK and the encryption algorithm that was used to encrypt the ciphertext. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The Decrypt operation also decrypts ciphertext that was encrypted outside of AWS KMS by the public key in an AWS KMS asymmetric CMK. However, it cannot decrypt ciphertext produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">AWS Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that is incompatible with AWS KMS.</p> <p>If the ciphertext was encrypted under a symmetric CMK, you do not need to specify the CMK or the encryption algorithm. AWS KMS can get this information from metadata that it adds to the symmetric ciphertext blob. However, if you prefer, you can specify the <code>KeyId</code> to ensure that a particular CMK is used to decrypt the ciphertext. If you specify a different CMK than the one used to encrypt the ciphertext, the <code>Decrypt</code> operation fails.</p> <p>Whenever possible, use key policies to give users permission to call the Decrypt operation on a particular CMK, instead of using IAM policies. Otherwise, you might create an IAM user policy that gives the user Decrypt permission on all CMKs. This user could decrypt ciphertext that was encrypted by CMKs in other accounts if the key policy for the cross-account CMK permits it. If you must use an IAM policy for <code>Decrypt</code> permissions, limit the user to particular CMKs or particular trusted accounts.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.Decrypt
		 * @return {DecryptResponse} Success
		 */
		Decrypt(requestBody: DecryptRequest): Observable<DecryptResponse> {
			return this.http.post<DecryptResponse>(this.baseUri + '#X-Amz-Target=TrentService.Decrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified alias. You cannot perform this operation on an alias in a different AWS account. </p> <p>Because an alias is not a property of a CMK, you can delete and change the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all CMKs, use the <a>ListAliases</a> operation. </p> <p>Each CMK can have multiple aliases. To change the alias of a CMK, use <a>DeleteAlias</a> to delete the current alias and <a>CreateAlias</a> to create a new alias. To associate an existing alias with a different customer master key (CMK), call <a>UpdateAlias</a>.</p>
		 * Post #X-Amz-Target=TrentService.DeleteAlias
		 * @return {void} Success
		 */
		DeleteAlias(requestBody: DeleteAliasRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.DeleteAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. This operation does not delete the AWS CloudHSM cluster that is associated with the custom key store, or affect any users or keys in the cluster.</p> <p>The custom key store that you delete cannot contain any AWS KMS <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">customer master keys (CMKs)</a>. Before deleting the key store, verify that you will never need to use any of the CMKs in the key store for any <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. Then, use <a>ScheduleKeyDeletion</a> to delete the AWS KMS customer master keys (CMKs) from the key store. When the scheduled waiting period expires, the <code>ScheduleKeyDeletion</code> operation deletes the CMKs. Then it makes a best effort to delete the key material from the associated cluster. However, you might need to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key material</a> from the cluster and its backups.</p> <p>After all CMKs are deleted from AWS KMS, use <a>DisconnectCustomKeyStore</a> to disconnect the key store from AWS KMS. Then, you can delete the custom key store.</p> <p>Instead of deleting the custom key store, consider using <a>DisconnectCustomKeyStore</a> to disconnect it from AWS KMS. While the key store is disconnected, you cannot create or use the CMKs in the key store. But, you do not need to delete CMKs and you can reconnect a disconnected custom key store at any time.</p> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.</p>
		 * Post #X-Amz-Target=TrentService.DeleteCustomKeyStore
		 * @return {DeleteCustomKeyStoreResponse} Success
		 */
		DeleteCustomKeyStore(requestBody: DeleteCustomKeyStoreRequest): Observable<DeleteCustomKeyStoreResponse> {
			return this.http.post<DeleteCustomKeyStoreResponse>(this.baseUri + '#X-Amz-Target=TrentService.DeleteCustomKeyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes key material that you previously imported. This operation makes the specified customer master key (CMK) unusable. For more information about importing key material into AWS KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>AWS Key Management Service Developer Guide</i>. You cannot perform this operation on a CMK in a different AWS account.</p> <p>When the specified CMK is in the <code>PendingDeletion</code> state, this operation does not change the CMK's state. Otherwise, it changes the CMK's state to <code>PendingImport</code>.</p> <p>After you delete key material, you can use <a>ImportKeyMaterial</a> to reimport the same key material into the CMK.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.DeleteImportedKeyMaterial
		 * @return {void} Success
		 */
		DeleteImportedKeyMaterial(requestBody: DeleteImportedKeyMaterialRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.DeleteImportedKeyMaterial', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> in the account and region.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.</p> <p>By default, this operation returns information about all custom key stores in the account and region. To get only information about a particular custom key store, use either the <code>CustomKeyStoreName</code> or <code>CustomKeyStoreId</code> parameter (but not both).</p> <p>To determine whether the custom key store is connected to its AWS CloudHSM cluster, use the <code>ConnectionState</code> element in the response. If an attempt to connect the custom key store failed, the <code>ConnectionState</code> value is <code>FAILED</code> and the <code>ConnectionErrorCode</code> element in the response indicates the cause of the failure. For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p> <p>Custom key stores have a <code>DISCONNECTED</code> connection state if the key store has never been connected or you use the <a>DisconnectCustomKeyStore</a> operation to disconnect it. If your custom key store state is <code>CONNECTED</code> but you are having trouble using it, make sure that its associated AWS CloudHSM cluster is active and contains the minimum number of HSMs required for the operation, if any.</p> <p> For help repairing your custom key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting Custom Key Stores</a> topic in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.DescribeCustomKeyStores
		 * @return {DescribeCustomKeyStoresResponse} Success
		 */
		DescribeCustomKeyStores(requestBody: DescribeCustomKeyStoresRequest): Observable<DescribeCustomKeyStoresResponse> {
			return this.http.post<DescribeCustomKeyStoresResponse>(this.baseUri + '#X-Amz-Target=TrentService.DescribeCustomKeyStores', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides detailed information about a customer master key (CMK). You can run <code>DescribeKey</code> on a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed CMK</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed CMK</a>.</p> <p>This detailed information includes the key ARN, creation date (and deletion date, if applicable), the key state, and the origin and expiration date (if any) of the key material. For CMKs in custom key stores, it includes information about the custom key store, such as the key store ID and the AWS CloudHSM cluster ID. It includes fields, like <code>KeySpec</code>, that help you distinguish symmetric from asymmetric CMKs. It also provides information that is particularly important to asymmetric CMKs, such as the key usage (encryption or signing) and the encryption algorithms or signing algorithms that the CMK supports.</p> <p> <code>DescribeKey</code> does not return the following information:</p> <ul> <li> <p>Aliases associated with the CMK. To get this information, use <a>ListAliases</a>.</p> </li> <li> <p>Whether automatic key rotation is enabled on the CMK. To get this information, use <a>GetKeyRotationStatus</a>. Also, some key states prevent a CMK from being automatically rotated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-how-it-works">How Automatic Key Rotation Works</a> in <i>AWS Key Management Service Developer Guide</i>.</p> </li> <li> <p>Tags on the CMK. To get this information, use <a>ListResourceTags</a>.</p> </li> <li> <p>Key policies and grants on the CMK. To get this information, use <a>GetKeyPolicy</a> and <a>ListGrants</a>.</p> </li> </ul> <p>If you call the <code>DescribeKey</code> operation on a <i>predefined AWS alias</i>, that is, an AWS alias with no key ID, AWS KMS creates an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">AWS managed CMK</a>. Then, it associates the alias with the new CMK, and returns the <code>KeyId</code> and <code>Arn</code> of the new CMK in the response.</p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.</p>
		 * Post #X-Amz-Target=TrentService.DescribeKey
		 * @return {DescribeKeyResponse} Success
		 */
		DescribeKey(requestBody: DescribeKeyRequest): Observable<DescribeKeyResponse> {
			return this.http.post<DescribeKeyResponse>(this.baseUri + '#X-Amz-Target=TrentService.DescribeKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the state of a customer master key (CMK) to disabled, thereby preventing its use for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. You cannot perform this operation on a CMK in a different AWS account.</p> <p>For more information about how key state affects the use of a CMK, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects the Use of a Customer Master Key</a> in the <i> <i>AWS Key Management Service Developer Guide</i> </i>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.DisableKey
		 * @return {void} Success
		 */
		DisableKey(requestBody: DisableKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.DisableKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> for the specified symmetric customer master key (CMK).</p> <p> You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. You cannot perform this operation on a CMK in a different AWS account.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.DisableKeyRotation
		 * @return {void} Success
		 */
		DisableKeyRotation(requestBody: DisableKeyRotationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.DisableKeyRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disconnects the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> from its associated AWS CloudHSM cluster. While a custom key store is disconnected, you can manage the custom key store and its customer master keys (CMKs), but you cannot create or use CMKs in the custom key store. You can reconnect the custom key store at any time.</p> <note> <p>While a custom key store is disconnected, all attempts to create customer master keys (CMKs) in the custom key store or to use existing CMKs in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> will fail. This action can prevent users from storing and accessing sensitive data.</p> </note> <p/> <p>To find the connection state of a custom key store, use the <a>DescribeCustomKeyStores</a> operation. To reconnect a custom key store, use the <a>ConnectCustomKeyStore</a> operation.</p> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.</p>
		 * Post #X-Amz-Target=TrentService.DisconnectCustomKeyStore
		 * @return {DisconnectCustomKeyStoreResponse} Success
		 */
		DisconnectCustomKeyStore(requestBody: DisconnectCustomKeyStoreRequest): Observable<DisconnectCustomKeyStoreResponse> {
			return this.http.post<DisconnectCustomKeyStoreResponse>(this.baseUri + '#X-Amz-Target=TrentService.DisconnectCustomKeyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the key state of a customer master key (CMK) to enabled. This allows you to use the CMK for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. You cannot perform this operation on a CMK in a different AWS account.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.EnableKey
		 * @return {void} Success
		 */
		EnableKey(requestBody: EnableKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.EnableKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> for the specified symmetric customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.</p> <p>You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.EnableKeyRotation
		 * @return {void} Success
		 */
		EnableKeyRotation(requestBody: EnableKeyRotationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.EnableKeyRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Encrypts plaintext into ciphertext by using a customer master key (CMK). The <code>Encrypt</code> operation has two primary use cases:</p> <ul> <li> <p>You can encrypt small amounts of arbitrary data, such as a personal identifier or database password, or other sensitive information. </p> </li> <li> <p>You can use the <code>Encrypt</code> operation to move encrypted data from one AWS Region to another. For example, in Region A, generate a data key and use the plaintext key to encrypt your data. Then, in Region A, use the <code>Encrypt</code> operation to encrypt the plaintext data key under a CMK in Region B. Now, you can move the encrypted data and the encrypted data key to Region B. When necessary, you can decrypt the encrypted data key and the encrypted data entirely within in Region B.</p> </li> </ul> <p>You don't need to use the <code>Encrypt</code> operation to encrypt a data key. The <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a> operations return a plaintext data key and an encrypted copy of that data key.</p> <p>When you encrypt data, you must specify a symmetric or asymmetric CMK to use in the encryption operation. The CMK must have a <code>KeyUsage</code> value of <code>ENCRYPT_DECRYPT.</code> To find the <code>KeyUsage</code> of a CMK, use the <a>DescribeKey</a> operation. </p> <p>If you use a symmetric CMK, you can use an encryption context to add additional security to your encryption operation. If you specify an <code>EncryptionContext</code> when encrypting data, you must specify the same encryption context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>If you specify an asymmetric CMK, you must also specify the encryption algorithm. The algorithm must be compatible with the CMK type.</p> <important> <p>When you use an asymmetric CMK to encrypt or reencrypt data, be sure to record the CMK and encryption algorithm that you choose. You will be required to provide the same CMK and encryption algorithm when you decrypt the data. If the CMK and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p> <p>You are not required to supply the CMK ID and encryption algorithm when you decrypt with symmetric CMKs because AWS KMS stores this information in the ciphertext blob. AWS KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p> </important> <p>The maximum size of the data that you can encrypt varies with the type of CMK and the encryption algorithm that you choose.</p> <ul> <li> <p>Symmetric CMKs</p> <ul> <li> <p> <code>SYMMETRIC_DEFAULT</code>: 4096 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_2048</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 214 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 190 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_3072</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 342 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 318 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_4096</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 470 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 446 bytes</p> </li> </ul> </li> </ul> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.</p>
		 * Post #X-Amz-Target=TrentService.Encrypt
		 * @return {EncryptResponse} Success
		 */
		Encrypt(requestBody: EncryptRequest): Observable<EncryptResponse> {
			return this.http.post<EncryptResponse>(this.baseUri + '#X-Amz-Target=TrentService.Encrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a unique symmetric data key for client-side encryption. This operation returns a plaintext copy of the data key and a copy that is encrypted under a customer master key (CMK) that you specify. You can use the plaintext key to encrypt your data outside of AWS KMS and store the encrypted data key with the encrypted data.</p> <p> <code>GenerateDataKey</code> returns a unique data key for each request. The bytes in the plaintext key are not related to the caller or the CMK.</p> <p>To generate a data key, specify the symmetric CMK that will be used to encrypt the data key. You cannot use an asymmetric CMK to generate data keys. To get the type of your CMK, use the <a>DescribeKey</a> operation. You must also specify the length of the data key. Use either the <code>KeySpec</code> or <code>NumberOfBytes</code> parameters (but not both). For 128-bit and 256-bit data keys, use the <code>KeySpec</code> parameter. </p> <p>To get only an encrypted copy of the data key, use <a>GenerateDataKeyWithoutPlaintext</a>. To generate an asymmetric data key pair, use the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operation. To get a cryptographically secure random byte string, use <a>GenerateRandom</a>.</p> <p>You can use the optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p> <b>How to use your data key</b> </p> <p>We recommend that you use the following pattern to encrypt data locally in your application. You can write your own code or use a client-side encryption library, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">AWS Encryption SDK</a>, the <a href="https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/">Amazon DynamoDB Encryption Client</a>, or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a> to do these tasks for you.</p> <p>To encrypt data outside of AWS KMS:</p> <ol> <li> <p>Use the <code>GenerateDataKey</code> operation to get a data key.</p> </li> <li> <p>Use the plaintext data key (in the <code>Plaintext</code> field of the response) to encrypt your data outside of AWS KMS. Then erase the plaintext data key from memory.</p> </li> <li> <p>Store the encrypted data key (in the <code>CiphertextBlob</code> field of the response) with the encrypted data.</p> </li> </ol> <p>To decrypt data outside of AWS KMS:</p> <ol> <li> <p>Use the <a>Decrypt</a> operation to decrypt the encrypted data key. The operation returns a plaintext copy of the data key.</p> </li> <li> <p>Use the plaintext data key to decrypt data outside of AWS KMS, then erase the plaintext data key from memory.</p> </li> </ol>
		 * Post #X-Amz-Target=TrentService.GenerateDataKey
		 * @return {GenerateDataKeyResponse} Success
		 */
		GenerateDataKey(requestBody: GenerateDataKeyRequest): Observable<GenerateDataKeyResponse> {
			return this.http.post<GenerateDataKeyResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateDataKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a unique asymmetric data key pair. The <code>GenerateDataKeyPair</code> operation returns a plaintext public key, a plaintext private key, and a copy of the private key that is encrypted under the symmetric CMK you specify. You can use the data key pair to perform asymmetric cryptography outside of AWS KMS.</p> <p> <code>GenerateDataKeyPair</code> returns a unique data key pair for each request. The bytes in the keys are not related to the caller or the CMK that is used to encrypt the private key.</p> <p>You can use the public key that <code>GenerateDataKeyPair</code> returns to encrypt data or verify a signature outside of AWS KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p> <p>To generate a data key pair, you must specify a symmetric customer master key (CMK) to encrypt the private key in a data key pair. You cannot use an asymmetric CMK or a CMK in a custom key store. To get the type and origin of your CMK, use the <a>DescribeKey</a> operation. </p> <p>If you are using the data key pair to encrypt data, or for any operation where you don't immediately need a private key, consider using the <a>GenerateDataKeyPairWithoutPlaintext</a> operation. <code>GenerateDataKeyPairWithoutPlaintext</code> returns a plaintext public key and an encrypted private key, but omits the plaintext private key that you need only to decrypt ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use the <a>Decrypt</a> operation to decrypt the encrypted private key in the data key pair.</p> <p>You can use the optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.GenerateDataKeyPair
		 * @return {GenerateDataKeyPairResponse} Success
		 */
		GenerateDataKeyPair(requestBody: GenerateDataKeyPairRequest): Observable<GenerateDataKeyPairResponse> {
			return this.http.post<GenerateDataKeyPairResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateDataKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a unique asymmetric data key pair. The <code>GenerateDataKeyPairWithoutPlaintext</code> operation returns a plaintext public key and a copy of the private key that is encrypted under the symmetric CMK you specify. Unlike <a>GenerateDataKeyPair</a>, this operation does not return a plaintext private key. </p> <p>To generate a data key pair, you must specify a symmetric customer master key (CMK) to encrypt the private key in the data key pair. You cannot use an asymmetric CMK or a CMK in a custom key store. To get the type and origin of your CMK, use the <code>KeySpec</code> field in the <a>DescribeKey</a> response.</p> <p>You can use the public key that <code>GenerateDataKeyPairWithoutPlaintext</code> returns to encrypt data or verify a signature outside of AWS KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p> <p> <code>GenerateDataKeyPairWithoutPlaintext</code> returns a unique data key pair for each request. The bytes in the key are not related to the caller or CMK that is used to encrypt the private key.</p> <p>You can use the optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext
		 * @return {GenerateDataKeyPairWithoutPlaintextResponse} Success
		 */
		GenerateDataKeyPairWithoutPlaintext(requestBody: GenerateDataKeyPairWithoutPlaintextRequest): Observable<GenerateDataKeyPairWithoutPlaintextResponse> {
			return this.http.post<GenerateDataKeyPairWithoutPlaintextResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a unique symmetric data key. This operation returns a data key that is encrypted under a customer master key (CMK) that you specify. To request an asymmetric data key pair, use the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operations.</p> <p> <code>GenerateDataKeyWithoutPlaintext</code> is identical to the <a>GenerateDataKey</a> operation except that returns only the encrypted copy of the data key. This operation is useful for systems that need to encrypt data at some point, but not immediately. When you need to encrypt the data, you call the <a>Decrypt</a> operation on the encrypted copy of the key. </p> <p>It's also useful in distributed systems with different levels of trust. For example, you might store encrypted data in containers. One component of your system creates new containers and stores an encrypted data key with each container. Then, a different component puts the data into the containers. That component first decrypts the data key, uses the plaintext data key to encrypt data, puts the encrypted data into the container, and then destroys the plaintext data key. In this system, the component that creates the containers never sees the plaintext data key.</p> <p> <code>GenerateDataKeyWithoutPlaintext</code> returns a unique data key for each request. The bytes in the keys are not related to the caller or CMK that is used to encrypt the private key.</p> <p>To generate a data key, you must specify the symmetric customer master key (CMK) that is used to encrypt the data key. You cannot use an asymmetric CMK to generate a data key. To get the type of your CMK, use the <a>DescribeKey</a> operation.</p> <p>If the operation succeeds, you will find the encrypted copy of the data key in the <code>CiphertextBlob</code> field.</p> <p>You can use the optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext
		 * @return {GenerateDataKeyWithoutPlaintextResponse} Success
		 */
		GenerateDataKeyWithoutPlaintext(requestBody: GenerateDataKeyWithoutPlaintextRequest): Observable<GenerateDataKeyWithoutPlaintextResponse> {
			return this.http.post<GenerateDataKeyWithoutPlaintextResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a random byte string that is cryptographically secure.</p> <p>By default, the random byte string is generated in AWS KMS. To generate the byte string in the AWS CloudHSM cluster that is associated with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, specify the custom key store ID.</p> <p>For more information about entropy and random number generation, see the <a href="https://d0.awsstatic.com/whitepapers/KMS-Cryptographic-Details.pdf">AWS Key Management Service Cryptographic Details</a> whitepaper.</p>
		 * Post #X-Amz-Target=TrentService.GenerateRandom
		 * @return {GenerateRandomResponse} Success
		 */
		GenerateRandom(requestBody: GenerateRandomRequest): Observable<GenerateRandomResponse> {
			return this.http.post<GenerateRandomResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateRandom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a key policy attached to the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.
		 * Post #X-Amz-Target=TrentService.GetKeyPolicy
		 * @return {GetKeyPolicyResponse} Success
		 */
		GetKeyPolicy(requestBody: GetKeyPolicyRequest): Observable<GetKeyPolicyResponse> {
			return this.http.post<GetKeyPolicyResponse>(this.baseUri + '#X-Amz-Target=TrentService.GetKeyPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a Boolean value that indicates whether <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> is enabled for the specified customer master key (CMK).</p> <p>You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. The key rotation status for these CMKs is always <code>false</code>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <ul> <li> <p>Disabled: The key rotation status does not change when you disable a CMK. However, while the CMK is disabled, AWS KMS does not rotate the backing key.</p> </li> <li> <p>Pending deletion: While a CMK is pending deletion, its key rotation status is <code>false</code> and AWS KMS does not rotate the backing key. If you cancel the deletion, the original key rotation status is restored.</p> </li> </ul> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p>
		 * Post #X-Amz-Target=TrentService.GetKeyRotationStatus
		 * @return {GetKeyRotationStatusResponse} Success
		 */
		GetKeyRotationStatus(requestBody: GetKeyRotationStatusRequest): Observable<GetKeyRotationStatusResponse> {
			return this.http.post<GetKeyRotationStatusResponse>(this.baseUri + '#X-Amz-Target=TrentService.GetKeyRotationStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the items you need to import key material into a symmetric, customer managed customer master key (CMK). For more information about importing key material into AWS KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>This operation returns a public key and an import token. Use the public key to encrypt the symmetric key material. Store the import token to send with a subsequent <a>ImportKeyMaterial</a> request.</p> <p>You must specify the key ID of the symmetric CMK into which you will import key material. This CMK's <code>Origin</code> must be <code>EXTERNAL</code>. You must also specify the wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key material. You cannot perform this operation on an asymmetric CMK or on any CMK in a different AWS account.</p> <p>To import key material, you must use the public key and import token from the same response. These items are valid for 24 hours. The expiration date and time appear in the <code>GetParametersForImport</code> response. You cannot use an expired token in an <a>ImportKeyMaterial</a> request. If your key and token expire, send another <code>GetParametersForImport</code> request.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.GetParametersForImport
		 * @return {GetParametersForImportResponse} Success
		 */
		GetParametersForImport(requestBody: GetParametersForImportRequest): Observable<GetParametersForImportResponse> {
			return this.http.post<GetParametersForImportResponse>(this.baseUri + '#X-Amz-Target=TrentService.GetParametersForImport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the public key of an asymmetric CMK. Unlike the private key of a asymmetric CMK, which never leaves AWS KMS unencrypted, callers with <code>kms:GetPublicKey</code> permission can download the public key of an asymmetric CMK. You can share the public key to allow others to encrypt messages and verify signatures outside of AWS KMS. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>You do not need to download the public key. Instead, you can use the public key within AWS KMS by calling the <a>Encrypt</a>, <a>ReEncrypt</a>, or <a>Verify</a> operations with the identifier of an asymmetric CMK. When you use the public key within AWS KMS, you benefit from the authentication, authorization, and logging that are part of every AWS KMS operation. You also reduce of risk of encrypting data that cannot be decrypted. These features are not effective outside of AWS KMS. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/download-public-key.html#download-public-key-considerations">Special Considerations for Downloading Public Keys</a>.</p> <p>To help you use the public key safely outside of AWS KMS, <code>GetPublicKey</code> returns important information about the public key in the response, including:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-CustomerMasterKeySpec">CustomerMasterKeySpec</a>: The type of key material in the public key, such as <code>RSA_4096</code> or <code>ECC_NIST_P521</code>.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeyUsage">KeyUsage</a>: Whether the key is used for encryption or signing.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-EncryptionAlgorithms">EncryptionAlgorithms</a> or <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-SigningAlgorithms">SigningAlgorithms</a>: A list of the encryption algorithms or the signing algorithms for the key.</p> </li> </ul> <p>Although AWS KMS cannot enforce these restrictions on external operations, it is crucial that you use this information to prevent the public key from being used improperly. For example, you can prevent a public signing key from being used encrypt data, or prevent a public key from being used with an encryption algorithm that is not supported by AWS KMS. You can also avoid errors, such as using the wrong signing algorithm in a verification operation.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.GetPublicKey
		 * @return {GetPublicKeyResponse} Success
		 */
		GetPublicKey(requestBody: GetPublicKeyRequest): Observable<GetPublicKeyResponse> {
			return this.http.post<GetPublicKeyResponse>(this.baseUri + '#X-Amz-Target=TrentService.GetPublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports key material into an existing symmetric AWS KMS customer master key (CMK) that was created without key material. After you successfully import key material into a CMK, you can <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#reimport-key-material">reimport the same key material</a> into that CMK, but you cannot import different key material.</p> <p>You cannot perform this operation on an asymmetric CMK or on any CMK in a different AWS account. For more information about creating CMKs with no key material and then importing key material, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>Before using this operation, call <a>GetParametersForImport</a>. Its response includes a public key and an import token. Use the public key to encrypt the key material. Then, submit the import token from the same <code>GetParametersForImport</code> response.</p> <p>When calling this operation, you must specify the following values:</p> <ul> <li> <p>The key ID or key ARN of a CMK with no key material. Its <code>Origin</code> must be <code>EXTERNAL</code>.</p> <p>To create a CMK with no key material, call <a>CreateKey</a> and set the value of its <code>Origin</code> parameter to <code>EXTERNAL</code>. To get the <code>Origin</code> of a CMK, call <a>DescribeKey</a>.)</p> </li> <li> <p>The encrypted key material. To get the public key to encrypt the key material, call <a>GetParametersForImport</a>.</p> </li> <li> <p>The import token that <a>GetParametersForImport</a> returned. You must use a public key and token from the same <code>GetParametersForImport</code> response.</p> </li> <li> <p>Whether the key material expires and if so, when. If you set an expiration date, AWS KMS deletes the key material from the CMK on the specified date, and the CMK becomes unusable. To use the CMK again, you must reimport the same key material. The only way to change an expiration date is by reimporting the same key material and specifying a new expiration date. </p> </li> </ul> <p>When this operation is successful, the key state of the CMK changes from <code>PendingImport</code> to <code>Enabled</code>, and you can use the CMK.</p> <p>If this operation fails, use the exception to help determine the problem. If the error is related to the key material, the import token, or wrapping key, use <a>GetParametersForImport</a> to get a new public key and import token for the CMK and repeat the import procedure. For help, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#importing-keys-overview">How To Import Key Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.ImportKeyMaterial
		 * @return {ImportKeyMaterialResponse} Success
		 */
		ImportKeyMaterial(requestBody: ImportKeyMaterialRequest): Observable<ImportKeyMaterialResponse> {
			return this.http.post<ImportKeyMaterialResponse>(this.baseUri + '#X-Amz-Target=TrentService.ImportKeyMaterial', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of aliases in the caller's AWS account and region. You cannot list aliases in other accounts. For more information about aliases, see <a>CreateAlias</a>.</p> <p>By default, the ListAliases command returns all aliases in the account and region. To get only the aliases that point to a particular customer master key (CMK), use the <code>KeyId</code> parameter.</p> <p>The <code>ListAliases</code> response can include aliases that you created and associated with your customer managed CMKs, and aliases that AWS created and associated with AWS managed CMKs in your account. You can recognize AWS aliases because their names have the format <code>aws/&lt;service-name&gt;</code>, such as <code>aws/dynamodb</code>.</p> <p>The response might also include aliases that have no <code>TargetKeyId</code> field. These are predefined aliases that AWS has created but has not yet associated with a CMK. Aliases that AWS creates in your account, including predefined aliases, do not count against your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#aliases-limit">AWS KMS aliases quota</a>.</p>
		 * Post #X-Amz-Target=TrentService.ListAliases
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListAliasesResponse} Success
		 */
		ListAliases(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListAliasesRequest): Observable<ListAliasesResponse> {
			return this.http.post<ListAliasesResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListAliases?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of all grants for the specified customer master key (CMK).</p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p> <note> <p>The <code>GranteePrincipal</code> field in the <code>ListGrants</code> response usually contains the user or role designated as the grantee principal in the grant. However, when the grantee principal in the grant is an AWS service, the <code>GranteePrincipal</code> field contains the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">service principal</a>, which might represent several different grantee principals.</p> </note>
		 * Post #X-Amz-Target=TrentService.ListGrants
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListGrantsResponse} Success
		 */
		ListGrants(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListGrantsRequest): Observable<ListGrantsResponse> {
			return this.http.post<ListGrantsResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListGrants?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the names of the key policies that are attached to a customer master key (CMK). This operation is designed to get policy names that you can use in a <a>GetKeyPolicy</a> operation. However, the only valid policy name is <code>default</code>. You cannot perform this operation on a CMK in a different AWS account.
		 * Post #X-Amz-Target=TrentService.ListKeyPolicies
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListKeyPoliciesResponse} Success
		 */
		ListKeyPolicies(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListKeyPoliciesRequest): Observable<ListKeyPoliciesResponse> {
			return this.http.post<ListKeyPoliciesResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListKeyPolicies?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of all customer master keys (CMKs) in the caller's AWS account and Region.
		 * Post #X-Amz-Target=TrentService.ListKeys
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListKeysResponse} Success
		 */
		ListKeys(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListKeysRequest): Observable<ListKeysResponse> {
			return this.http.post<ListKeysResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListKeys?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of all tags for the specified customer master key (CMK).</p> <p>You cannot perform this operation on a CMK in a different AWS account.</p>
		 * Post #X-Amz-Target=TrentService.ListResourceTags
		 * @return {ListResourceTagsResponse} Success
		 */
		ListResourceTags(requestBody: ListResourceTagsRequest): Observable<ListResourceTagsResponse> {
			return this.http.post<ListResourceTagsResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListResourceTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of all grants for which the grant's <code>RetiringPrincipal</code> matches the one specified.</p> <p>A typical use is to list all grants that you are able to retire. To retire a grant, use <a>RetireGrant</a>.</p>
		 * Post #X-Amz-Target=TrentService.ListRetirableGrants
		 * @return {ListGrantsResponse} Success
		 */
		ListRetirableGrants(requestBody: ListRetirableGrantsRequest): Observable<ListGrantsResponse> {
			return this.http.post<ListGrantsResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListRetirableGrants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a key policy to the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.</p> <p>For more information about key policies, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Key Policies</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.PutKeyPolicy
		 * @return {void} Success
		 */
		PutKeyPolicy(requestBody: PutKeyPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.PutKeyPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Decrypts ciphertext and then reencrypts it entirely within AWS KMS. You can use this operation to change the customer master key (CMK) under which data is encrypted, such as when you <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-manually">manually rotate</a> a CMK or change the CMK that protects a ciphertext. You can also use it to reencrypt ciphertext under the same CMK, such as to change the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a> of a ciphertext.</p> <p>The <code>ReEncrypt</code> operation can decrypt ciphertext that was encrypted by using an AWS KMS CMK in an AWS KMS operation, such as <a>Encrypt</a> or <a>GenerateDataKey</a>. It can also decrypt ciphertext that was encrypted by using the public key of an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric CMK</a> outside of AWS KMS. However, it cannot decrypt ciphertext produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">AWS Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that is incompatible with AWS KMS.</p> <p>When you use the <code>ReEncrypt</code> operation, you need to provide information for the decrypt operation and the subsequent encrypt operation.</p> <ul> <li> <p>If your ciphertext was encrypted under an asymmetric CMK, you must identify the <i>source CMK</i>, that is, the CMK that encrypted the ciphertext. You must also supply the encryption algorithm that was used. This information is required to decrypt the data.</p> </li> <li> <p>It is optional, but you can specify a source CMK even when the ciphertext was encrypted under a symmetric CMK. This ensures that the ciphertext is decrypted only by using a particular CMK. If the CMK that you specify cannot decrypt the ciphertext, the <code>ReEncrypt</code> operation fails.</p> </li> <li> <p>To reencrypt the data, you must specify the <i>destination CMK</i>, that is, the CMK that re-encrypts the data after it is decrypted. You can select a symmetric or asymmetric CMK. If the destination CMK is an asymmetric CMK, you must also provide the encryption algorithm. The algorithm that you choose must be compatible with the CMK.</p> <important> <p>When you use an asymmetric CMK to encrypt or reencrypt data, be sure to record the CMK and encryption algorithm that you choose. You will be required to provide the same CMK and encryption algorithm when you decrypt the data. If the CMK and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p> <p>You are not required to supply the CMK ID and encryption algorithm when you decrypt with symmetric CMKs because AWS KMS stores this information in the ciphertext blob. AWS KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p> </important> </li> </ul> <p>Unlike other AWS KMS API operations, <code>ReEncrypt</code> callers must have two permissions:</p> <ul> <li> <p> <code>kms:ReEncryptFrom</code> permission on the source CMK</p> </li> <li> <p> <code>kms:ReEncryptTo</code> permission on the destination CMK</p> </li> </ul> <p>To permit reencryption from or to a CMK, include the <code>"kms:ReEncrypt*"</code> permission in your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>. This permission is automatically included in the key policy when you use the console to create a CMK. But you must include it manually when you create a CMK programmatically or when you use the <a>PutKeyPolicy</a> operation to set a key policy.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.ReEncrypt
		 * @return {ReEncryptResponse} Success
		 */
		ReEncrypt(requestBody: ReEncryptRequest): Observable<ReEncryptResponse> {
			return this.http.post<ReEncryptResponse>(this.baseUri + '#X-Amz-Target=TrentService.ReEncrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retires a grant. To clean up, you can retire a grant when you're done using it. You should revoke a grant when you intend to actively deny operations that depend on it. The following are permitted to call this API:</p> <ul> <li> <p>The AWS account (root user) under which the grant was created</p> </li> <li> <p>The <code>RetiringPrincipal</code>, if present in the grant</p> </li> <li> <p>The <code>GranteePrincipal</code>, if <code>RetireGrant</code> is an operation specified in the grant</p> </li> </ul> <p>You must identify the grant to retire by its grant token or by a combination of the grant ID and the Amazon Resource Name (ARN) of the customer master key (CMK). A grant token is a unique variable-length base64-encoded string. A grant ID is a 64 character unique identifier of a grant. The <a>CreateGrant</a> operation returns both.</p>
		 * Post #X-Amz-Target=TrentService.RetireGrant
		 * @return {void} Success
		 */
		RetireGrant(requestBody: RetireGrantRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.RetireGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Revokes the specified grant for the specified customer master key (CMK). You can revoke a grant to actively deny operations that depend on it.</p> <p>To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p>
		 * Post #X-Amz-Target=TrentService.RevokeGrant
		 * @return {void} Success
		 */
		RevokeGrant(requestBody: RevokeGrantRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.RevokeGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Schedules the deletion of a customer master key (CMK). You may provide a waiting period, specified in days, before deletion occurs. If you do not provide a waiting period, the default period of 30 days is used. When this operation is successful, the key state of the CMK changes to <code>PendingDeletion</code>. Before the waiting period ends, you can use <a>CancelKeyDeletion</a> to cancel the deletion of the CMK. After the waiting period ends, AWS KMS deletes the CMK and all AWS KMS data associated with it, including all aliases that refer to it.</p> <important> <p>Deleting a CMK is a destructive and potentially dangerous operation. When a CMK is deleted, all data that was encrypted under the CMK is unrecoverable. To prevent the use of a CMK without deleting it, use <a>DisableKey</a>.</p> </important> <p>If you schedule deletion of a CMK from a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, when the waiting period expires, <code>ScheduleKeyDeletion</code> deletes the CMK from AWS KMS. Then AWS KMS makes a best effort to delete the key material from the associated AWS CloudHSM cluster. However, you might need to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key material</a> from the cluster and its backups.</p> <p>You cannot perform this operation on a CMK in a different AWS account.</p> <p>For more information about scheduling a CMK for deletion, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting Customer Master Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.ScheduleKeyDeletion
		 * @return {ScheduleKeyDeletionResponse} Success
		 */
		ScheduleKeyDeletion(requestBody: ScheduleKeyDeletionRequest): Observable<ScheduleKeyDeletionResponse> {
			return this.http.post<ScheduleKeyDeletionResponse>(this.baseUri + '#X-Amz-Target=TrentService.ScheduleKeyDeletion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <a href="https://en.wikipedia.org/wiki/Digital_signature">digital signature</a> for a message or message digest by using the private key in an asymmetric CMK. To verify the signature, use the <a>Verify</a> operation, or use the public key in the same asymmetric CMK outside of AWS KMS. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>Digital signatures are generated and verified by using asymmetric key pair, such as an RSA or ECC pair that is represented by an asymmetric customer master key (CMK). The key owner (or an authorized user) uses their private key to sign a message. Anyone with the public key can verify that the message was signed with that particular private key and that the message hasn't changed since it was signed. </p> <p>To use the <code>Sign</code> operation, provide the following information:</p> <ul> <li> <p>Use the <code>KeyId</code> parameter to identify an asymmetric CMK with a <code>KeyUsage</code> value of <code>SIGN_VERIFY</code>. To get the <code>KeyUsage</code> value of a CMK, use the <a>DescribeKey</a> operation. The caller must have <code>kms:Sign</code> permission on the CMK.</p> </li> <li> <p>Use the <code>Message</code> parameter to specify the message or message digest to sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a hash digest of the message, and then provide the hash digest in the <code>Message</code> parameter. To indicate whether the message is a full message or a digest, use the <code>MessageType</code> parameter.</p> </li> <li> <p>Choose a signing algorithm that is compatible with the CMK. </p> </li> </ul> <important> <p>When signing a message, be sure to record the CMK and the signing algorithm. This information is required to verify the signature.</p> </important> <p>To verify the signature that this operation generates, use the <a>Verify</a> operation. Or use the <a>GetPublicKey</a> operation to download the public key and then use the public key to verify the signature outside of AWS KMS. </p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.Sign
		 * @return {SignResponse} Success
		 */
		Sign(requestBody: SignRequest): Observable<SignResponse> {
			return this.http.post<SignResponse>(this.baseUri + '#X-Amz-Target=TrentService.Sign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or edits tags for a customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>You can only use a tag key once for each CMK. If you use the tag key again, AWS KMS replaces the current tag value with the specified value.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified tags from the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a>TagResource</a>.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Associates an existing AWS KMS alias with a different customer master key (CMK). Each alias is associated with only one CMK at a time, although a CMK can have multiple aliases. The alias and the CMK must be in the same AWS account and region. You cannot perform this operation on an alias in a different AWS account. </p> <p>The current and new CMK must be the same type (both symmetric or both asymmetric), and they must have the same key usage (<code>ENCRYPT_DECRYPT</code> or <code>SIGN_VERIFY</code>). This restriction prevents errors in code that uses aliases. If you must assign an alias to a different type of CMK, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p> <p>You cannot use <code>UpdateAlias</code> to change an alias name. To change an alias name, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p> <p>Because an alias is not a property of a CMK, you can create, update, and delete the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all CMKs in the account, use the <a>ListAliases</a> operation. </p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.UpdateAlias
		 * @return {void} Success
		 */
		UpdateAlias(requestBody: UpdateAliasRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.UpdateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the properties of a custom key store. Use the <code>CustomKeyStoreId</code> parameter to identify the custom key store you want to edit. Use the remaining parameters to change the properties of the custom key store.</p> <p>You can only update a custom key store that is disconnected. To disconnect the custom key store, use <a>DisconnectCustomKeyStore</a>. To reconnect the custom key store after the update completes, use <a>ConnectCustomKeyStore</a>. To find the connection state of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p> <p>Use the parameters of <code>UpdateCustomKeyStore</code> to edit your keystore settings.</p> <ul> <li> <p>Use the <b>NewCustomKeyStoreName</b> parameter to change the friendly name of the custom key store to the value that you specify.</p> <p> </p> </li> <li> <p>Use the <b>KeyStorePassword</b> parameter tell AWS KMS the current password of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser"> <code>kmsuser</code> crypto user (CU)</a> in the associated AWS CloudHSM cluster. You can use this parameter to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-password">fix connection failures</a> that occur when AWS KMS cannot log into the associated cluster because the <code>kmsuser</code> password has changed. This value does not change the password in the AWS CloudHSM cluster.</p> <p> </p> </li> <li> <p>Use the <b>CloudHsmClusterId</b> parameter to associate the custom key store with a different, but related, AWS CloudHSM cluster. You can use this parameter to repair a custom key store if its AWS CloudHSM cluster becomes corrupted or is deleted, or when you need to create or restore a cluster from a backup. </p> </li> </ul> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.</p>
		 * Post #X-Amz-Target=TrentService.UpdateCustomKeyStore
		 * @return {UpdateCustomKeyStoreResponse} Success
		 */
		UpdateCustomKeyStore(requestBody: UpdateCustomKeyStoreRequest): Observable<UpdateCustomKeyStoreResponse> {
			return this.http.post<UpdateCustomKeyStoreResponse>(this.baseUri + '#X-Amz-Target=TrentService.UpdateCustomKeyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the description of a customer master key (CMK). To see the description of a CMK, use <a>DescribeKey</a>. </p> <p>You cannot perform this operation on a CMK in a different AWS account.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.UpdateKeyDescription
		 * @return {void} Success
		 */
		UpdateKeyDescription(requestBody: UpdateKeyDescriptionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.UpdateKeyDescription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Verifies a digital signature that was generated by the <a>Sign</a> operation. </p> <p/> <p>Verification confirms that an authorized user signed the message with the specified CMK and signing algorithm, and the message hasn't changed since it was signed. If the signature is verified, the value of the <code>SignatureValid</code> field in the response is <code>True</code>. If the signature verification fails, the <code>Verify</code> operation fails with an <code>KMSInvalidSignatureException</code> exception.</p> <p>A digital signature is generated by using the private key in an asymmetric CMK. The signature is verified by using the public key in the same asymmetric CMK. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>To verify a digital signature, you can use the <code>Verify</code> operation. Specify the same asymmetric CMK, message, and signing algorithm that were used to produce the signature.</p> <p>You can also verify the digital signature by using the public key of the CMK outside of AWS KMS. Use the <a>GetPublicKey</a> operation to download the public key in the asymmetric CMK and then use the public key to verify the signature outside of AWS KMS. The advantage of using the <code>Verify</code> operation is that it is performed within AWS KMS. As a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged in AWS CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use the CMK to verify signatures.</p> <p>The CMK that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=TrentService.Verify
		 * @return {VerifyResponse} Success
		 */
		Verify(requestBody: VerifyRequest): Observable<VerifyResponse> {
			return this.http.post<VerifyResponse>(this.baseUri + '#X-Amz-Target=TrentService.Verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CancelKeyDeletionX_Amz_Target { 'TrentService.CancelKeyDeletion' = 0 }

	export enum ConnectCustomKeyStoreX_Amz_Target { 'TrentService.ConnectCustomKeyStore' = 0 }

	export enum CreateAliasX_Amz_Target { 'TrentService.CreateAlias' = 0 }

	export enum CreateCustomKeyStoreX_Amz_Target { 'TrentService.CreateCustomKeyStore' = 0 }

	export enum CreateGrantX_Amz_Target { 'TrentService.CreateGrant' = 0 }

	export enum CreateKeyX_Amz_Target { 'TrentService.CreateKey' = 0 }

	export enum DecryptX_Amz_Target { 'TrentService.Decrypt' = 0 }

	export enum DeleteAliasX_Amz_Target { 'TrentService.DeleteAlias' = 0 }

	export enum DeleteCustomKeyStoreX_Amz_Target { 'TrentService.DeleteCustomKeyStore' = 0 }

	export enum DeleteImportedKeyMaterialX_Amz_Target { 'TrentService.DeleteImportedKeyMaterial' = 0 }

	export enum DescribeCustomKeyStoresX_Amz_Target { 'TrentService.DescribeCustomKeyStores' = 0 }

	export enum DescribeKeyX_Amz_Target { 'TrentService.DescribeKey' = 0 }

	export enum DisableKeyX_Amz_Target { 'TrentService.DisableKey' = 0 }

	export enum DisableKeyRotationX_Amz_Target { 'TrentService.DisableKeyRotation' = 0 }

	export enum DisconnectCustomKeyStoreX_Amz_Target { 'TrentService.DisconnectCustomKeyStore' = 0 }

	export enum EnableKeyX_Amz_Target { 'TrentService.EnableKey' = 0 }

	export enum EnableKeyRotationX_Amz_Target { 'TrentService.EnableKeyRotation' = 0 }

	export enum EncryptX_Amz_Target { 'TrentService.Encrypt' = 0 }

	export enum GenerateDataKeyX_Amz_Target { 'TrentService.GenerateDataKey' = 0 }

	export enum GenerateDataKeyPairX_Amz_Target { 'TrentService.GenerateDataKeyPair' = 0 }

	export enum GenerateDataKeyPairWithoutPlaintextX_Amz_Target { 'TrentService.GenerateDataKeyPairWithoutPlaintext' = 0 }

	export enum GenerateDataKeyWithoutPlaintextX_Amz_Target { 'TrentService.GenerateDataKeyWithoutPlaintext' = 0 }

	export enum GenerateRandomX_Amz_Target { 'TrentService.GenerateRandom' = 0 }

	export enum GetKeyPolicyX_Amz_Target { 'TrentService.GetKeyPolicy' = 0 }

	export enum GetKeyRotationStatusX_Amz_Target { 'TrentService.GetKeyRotationStatus' = 0 }

	export enum GetParametersForImportX_Amz_Target { 'TrentService.GetParametersForImport' = 0 }

	export enum GetPublicKeyX_Amz_Target { 'TrentService.GetPublicKey' = 0 }

	export enum ImportKeyMaterialX_Amz_Target { 'TrentService.ImportKeyMaterial' = 0 }

	export enum ListAliasesX_Amz_Target { 'TrentService.ListAliases' = 0 }

	export enum ListGrantsX_Amz_Target { 'TrentService.ListGrants' = 0 }

	export enum ListKeyPoliciesX_Amz_Target { 'TrentService.ListKeyPolicies' = 0 }

	export enum ListKeysX_Amz_Target { 'TrentService.ListKeys' = 0 }

	export enum ListResourceTagsX_Amz_Target { 'TrentService.ListResourceTags' = 0 }

	export enum ListRetirableGrantsX_Amz_Target { 'TrentService.ListRetirableGrants' = 0 }

	export enum PutKeyPolicyX_Amz_Target { 'TrentService.PutKeyPolicy' = 0 }

	export enum ReEncryptX_Amz_Target { 'TrentService.ReEncrypt' = 0 }

	export enum RetireGrantX_Amz_Target { 'TrentService.RetireGrant' = 0 }

	export enum RevokeGrantX_Amz_Target { 'TrentService.RevokeGrant' = 0 }

	export enum ScheduleKeyDeletionX_Amz_Target { 'TrentService.ScheduleKeyDeletion' = 0 }

	export enum SignX_Amz_Target { 'TrentService.Sign' = 0 }

	export enum TagResourceX_Amz_Target { 'TrentService.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'TrentService.UntagResource' = 0 }

	export enum UpdateAliasX_Amz_Target { 'TrentService.UpdateAlias' = 0 }

	export enum UpdateCustomKeyStoreX_Amz_Target { 'TrentService.UpdateCustomKeyStore' = 0 }

	export enum UpdateKeyDescriptionX_Amz_Target { 'TrentService.UpdateKeyDescription' = 0 }

	export enum VerifyX_Amz_Target { 'TrentService.Verify' = 0 }

}

