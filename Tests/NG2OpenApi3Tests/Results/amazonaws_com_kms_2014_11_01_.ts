import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelKeyDeletionResponse {
		KeyId?: string;
	}
	export interface CancelKeyDeletionResponseFormProperties {
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateCancelKeyDeletionResponseFormGroup() {
		return new FormGroup<CancelKeyDeletionResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelKeyDeletionRequest {

		/** Required */
		KeyId: string;
	}
	export interface CancelKeyDeletionRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateCancelKeyDeletionRequestFormGroup() {
		return new FormGroup<CancelKeyDeletionRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		CustomKeyStoreId: string;
	}
	export interface ConnectCustomKeyStoreRequestFormProperties {

		/** Required */
		CustomKeyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateConnectCustomKeyStoreRequestFormGroup() {
		return new FormGroup<ConnectCustomKeyStoreRequestFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		AliasName: string;

		/** Required */
		TargetKeyId: string;
	}
	export interface CreateAliasRequestFormProperties {

		/** Required */
		AliasName: FormControl<string | null | undefined>,

		/** Required */
		TargetKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasRequestFormGroup() {
		return new FormGroup<CreateAliasRequestFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		CustomKeyStoreId?: string;
	}
	export interface CreateCustomKeyStoreResponseFormProperties {
		CustomKeyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomKeyStoreResponseFormGroup() {
		return new FormGroup<CreateCustomKeyStoreResponseFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCustomKeyStoreRequest {

		/** Required */
		CustomKeyStoreName: string;
		CloudHsmClusterId?: string;
		TrustAnchorCertificate?: string;
		KeyStorePassword?: string;
		CustomKeyStoreType?: CustomKeyStoreType;
		XksProxyUriEndpoint?: string;
		XksProxyUriPath?: string;
		XksProxyVpcEndpointServiceName?: string;
		XksProxyAuthenticationCredential?: XksProxyAuthenticationCredentialType;
		XksProxyConnectivity?: XksProxyConnectivityType;
	}
	export interface CreateCustomKeyStoreRequestFormProperties {

		/** Required */
		CustomKeyStoreName: FormControl<string | null | undefined>,
		CloudHsmClusterId: FormControl<string | null | undefined>,
		TrustAnchorCertificate: FormControl<string | null | undefined>,
		KeyStorePassword: FormControl<string | null | undefined>,
		CustomKeyStoreType: FormControl<CustomKeyStoreType | null | undefined>,
		XksProxyUriEndpoint: FormControl<string | null | undefined>,
		XksProxyUriPath: FormControl<string | null | undefined>,
		XksProxyVpcEndpointServiceName: FormControl<string | null | undefined>,
		XksProxyConnectivity: FormControl<XksProxyConnectivityType | null | undefined>,
	}
	export function CreateCreateCustomKeyStoreRequestFormGroup() {
		return new FormGroup<CreateCustomKeyStoreRequestFormProperties>({
			CustomKeyStoreName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CloudHsmClusterId: new FormControl<string | null | undefined>(undefined),
			TrustAnchorCertificate: new FormControl<string | null | undefined>(undefined),
			KeyStorePassword: new FormControl<string | null | undefined>(undefined),
			CustomKeyStoreType: new FormControl<CustomKeyStoreType | null | undefined>(undefined),
			XksProxyUriEndpoint: new FormControl<string | null | undefined>(undefined),
			XksProxyUriPath: new FormControl<string | null | undefined>(undefined),
			XksProxyVpcEndpointServiceName: new FormControl<string | null | undefined>(undefined),
			XksProxyConnectivity: new FormControl<XksProxyConnectivityType | null | undefined>(undefined),
		});

	}

	export enum CustomKeyStoreType { AWS_CLOUDHSM = 'AWS_CLOUDHSM', EXTERNAL_KEY_STORE = 'EXTERNAL_KEY_STORE' }


	/** <p>KMS uses the authentication credential to sign requests that it sends to the external key store proxy (XKS proxy) on your behalf. You establish these credentials on your external key store proxy and report them to KMS.</p> <p>The <code>XksProxyAuthenticationCredential</code> includes two required elements.</p> */
	export interface XksProxyAuthenticationCredentialType {

		/** Required */
		AccessKeyId: string;

		/** Required */
		RawSecretAccessKey: string;
	}

	/** <p>KMS uses the authentication credential to sign requests that it sends to the external key store proxy (XKS proxy) on your behalf. You establish these credentials on your external key store proxy and report them to KMS.</p> <p>The <code>XksProxyAuthenticationCredential</code> includes two required elements.</p> */
	export interface XksProxyAuthenticationCredentialTypeFormProperties {

		/** Required */
		AccessKeyId: FormControl<string | null | undefined>,

		/** Required */
		RawSecretAccessKey: FormControl<string | null | undefined>,
	}
	export function CreateXksProxyAuthenticationCredentialTypeFormGroup() {
		return new FormGroup<XksProxyAuthenticationCredentialTypeFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RawSecretAccessKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum XksProxyConnectivityType { PUBLIC_ENDPOINT = 'PUBLIC_ENDPOINT', VPC_ENDPOINT_SERVICE = 'VPC_ENDPOINT_SERVICE' }

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

	export interface XksProxyUriInUseException {
	}
	export interface XksProxyUriInUseExceptionFormProperties {
	}
	export function CreateXksProxyUriInUseExceptionFormGroup() {
		return new FormGroup<XksProxyUriInUseExceptionFormProperties>({
		});

	}

	export interface XksProxyUriEndpointInUseException {
	}
	export interface XksProxyUriEndpointInUseExceptionFormProperties {
	}
	export function CreateXksProxyUriEndpointInUseExceptionFormGroup() {
		return new FormGroup<XksProxyUriEndpointInUseExceptionFormProperties>({
		});

	}

	export interface XksProxyUriUnreachableException {
	}
	export interface XksProxyUriUnreachableExceptionFormProperties {
	}
	export function CreateXksProxyUriUnreachableExceptionFormGroup() {
		return new FormGroup<XksProxyUriUnreachableExceptionFormProperties>({
		});

	}

	export interface XksProxyIncorrectAuthenticationCredentialException {
	}
	export interface XksProxyIncorrectAuthenticationCredentialExceptionFormProperties {
	}
	export function CreateXksProxyIncorrectAuthenticationCredentialExceptionFormGroup() {
		return new FormGroup<XksProxyIncorrectAuthenticationCredentialExceptionFormProperties>({
		});

	}

	export interface XksProxyVpcEndpointServiceInUseException {
	}
	export interface XksProxyVpcEndpointServiceInUseExceptionFormProperties {
	}
	export function CreateXksProxyVpcEndpointServiceInUseExceptionFormGroup() {
		return new FormGroup<XksProxyVpcEndpointServiceInUseExceptionFormProperties>({
		});

	}

	export interface XksProxyVpcEndpointServiceNotFoundException {
	}
	export interface XksProxyVpcEndpointServiceNotFoundExceptionFormProperties {
	}
	export function CreateXksProxyVpcEndpointServiceNotFoundExceptionFormGroup() {
		return new FormGroup<XksProxyVpcEndpointServiceNotFoundExceptionFormProperties>({
		});

	}

	export interface XksProxyVpcEndpointServiceInvalidConfigurationException {
	}
	export interface XksProxyVpcEndpointServiceInvalidConfigurationExceptionFormProperties {
	}
	export function CreateXksProxyVpcEndpointServiceInvalidConfigurationExceptionFormGroup() {
		return new FormGroup<XksProxyVpcEndpointServiceInvalidConfigurationExceptionFormProperties>({
		});

	}

	export interface XksProxyInvalidResponseException {
	}
	export interface XksProxyInvalidResponseExceptionFormProperties {
	}
	export function CreateXksProxyInvalidResponseExceptionFormGroup() {
		return new FormGroup<XksProxyInvalidResponseExceptionFormProperties>({
		});

	}

	export interface XksProxyInvalidConfigurationException {
	}
	export interface XksProxyInvalidConfigurationExceptionFormProperties {
	}
	export function CreateXksProxyInvalidConfigurationExceptionFormGroup() {
		return new FormGroup<XksProxyInvalidConfigurationExceptionFormProperties>({
		});

	}

	export interface CreateGrantResponse {
		GrantToken?: string;
		GrantId?: string;
	}
	export interface CreateGrantResponseFormProperties {
		GrantToken: FormControl<string | null | undefined>,
		GrantId: FormControl<string | null | undefined>,
	}
	export function CreateCreateGrantResponseFormGroup() {
		return new FormGroup<CreateGrantResponseFormProperties>({
			GrantToken: new FormControl<string | null | undefined>(undefined),
			GrantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGrantRequest {

		/** Required */
		KeyId: string;

		/** Required */
		GranteePrincipal: string;
		RetiringPrincipal?: string;

		/** Required */
		Operations: Array<GrantOperation>;
		Constraints?: GrantConstraints;
		GrantTokens?: Array<string>;
		Name?: string;
		DryRun?: boolean | null;
	}
	export interface CreateGrantRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		GranteePrincipal: FormControl<string | null | undefined>,
		RetiringPrincipal: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateGrantRequestFormGroup() {
		return new FormGroup<CreateGrantRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GranteePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RetiringPrincipal: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GrantOperation { Decrypt = 'Decrypt', Encrypt = 'Encrypt', GenerateDataKey = 'GenerateDataKey', GenerateDataKeyWithoutPlaintext = 'GenerateDataKeyWithoutPlaintext', ReEncryptFrom = 'ReEncryptFrom', ReEncryptTo = 'ReEncryptTo', Sign = 'Sign', Verify = 'Verify', GetPublicKey = 'GetPublicKey', CreateGrant = 'CreateGrant', RetireGrant = 'RetireGrant', DescribeKey = 'DescribeKey', GenerateDataKeyPair = 'GenerateDataKeyPair', GenerateDataKeyPairWithoutPlaintext = 'GenerateDataKeyPairWithoutPlaintext', GenerateMac = 'GenerateMac', VerifyMac = 'VerifyMac' }


	/** <p>Use this structure to allow <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. </p> <p>KMS applies the grant constraints only to cryptographic operations that support an encryption context, that is, all cryptographic operations with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#symmetric-cmks">symmetric KMS key</a>. Grant constraints are not applied to operations that do not support an encryption context, such as cryptographic operations with asymmetric KMS keys and management operations, such as <a>DescribeKey</a> or <a>RetireGrant</a>.</p> <important> <p>In a cryptographic operation, the encryption context in the decryption operation must be an exact, case-sensitive match for the keys and values in the encryption context of the encryption operation. Only the order of the pairs can vary.</p> <p>However, in a grant constraint, the key in each key-value pair is not case sensitive, but the value is case sensitive.</p> <p>To avoid confusion, do not use multiple encryption context pairs that differ only by case. To require a fully case-sensitive encryption context, use the <code>kms:EncryptionContext:</code> and <code>kms:EncryptionContextKeys</code> conditions in an IAM or key policy. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context">kms:EncryptionContext:</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> </important> */
	export interface GrantConstraints {
		EncryptionContextSubset?: EncryptionContextType;
		EncryptionContextEquals?: EncryptionContextType;
	}

	/** <p>Use this structure to allow <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. </p> <p>KMS applies the grant constraints only to cryptographic operations that support an encryption context, that is, all cryptographic operations with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#symmetric-cmks">symmetric KMS key</a>. Grant constraints are not applied to operations that do not support an encryption context, such as cryptographic operations with asymmetric KMS keys and management operations, such as <a>DescribeKey</a> or <a>RetireGrant</a>.</p> <important> <p>In a cryptographic operation, the encryption context in the decryption operation must be an exact, case-sensitive match for the keys and values in the encryption context of the encryption operation. Only the order of the pairs can vary.</p> <p>However, in a grant constraint, the key in each key-value pair is not case sensitive, but the value is case sensitive.</p> <p>To avoid confusion, do not use multiple encryption context pairs that differ only by case. To require a fully case-sensitive encryption context, use the <code>kms:EncryptionContext:</code> and <code>kms:EncryptionContextKeys</code> conditions in an IAM or key policy. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context">kms:EncryptionContext:</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> </important> */
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

	export interface DryRunOperationException {
	}
	export interface DryRunOperationExceptionFormProperties {
	}
	export function CreateDryRunOperationExceptionFormGroup() {
		return new FormGroup<DryRunOperationExceptionFormProperties>({
		});

	}

	export interface CreateKeyResponse {
		KeyMetadata?: KeyMetadata;
	}
	export interface CreateKeyResponseFormProperties {
	}
	export function CreateCreateKeyResponseFormGroup() {
		return new FormGroup<CreateKeyResponseFormProperties>({
		});

	}


	/** <p>Contains metadata about a KMS key.</p> <p>This data type is used as a response element for the <a>CreateKey</a>, <a>DescribeKey</a>, and <a>ReplicateKey</a> operations.</p> */
	export interface KeyMetadata {
		AWSAccountId?: string;

		/** Required */
		KeyId: string;
		Arn?: string;
		CreationDate?: Date;
		Enabled?: boolean | null;
		Description?: string;
		KeyUsage?: KeyUsageType;
		KeyState?: KeyState;
		DeletionDate?: Date;
		ValidTo?: Date;
		Origin?: OriginType;
		CustomKeyStoreId?: string;
		CloudHsmClusterId?: string;
		ExpirationModel?: ExpirationModelType;
		KeyManager?: KeyManagerType;
		CustomerMasterKeySpec?: CustomerMasterKeySpec;
		KeySpec?: CustomerMasterKeySpec;
		EncryptionAlgorithms?: Array<EncryptionAlgorithmSpec>;
		SigningAlgorithms?: Array<SigningAlgorithmSpec>;
		MultiRegion?: boolean | null;
		MultiRegionConfiguration?: MultiRegionConfiguration;
		PendingDeletionWindowInDays?: number | null;
		MacAlgorithms?: Array<MacAlgorithmSpec>;
		XksKeyConfiguration?: XksKeyConfigurationType;
	}

	/** <p>Contains metadata about a KMS key.</p> <p>This data type is used as a response element for the <a>CreateKey</a>, <a>DescribeKey</a>, and <a>ReplicateKey</a> operations.</p> */
	export interface KeyMetadataFormProperties {
		AWSAccountId: FormControl<string | null | undefined>,

		/** Required */
		KeyId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KeyUsage: FormControl<KeyUsageType | null | undefined>,
		KeyState: FormControl<KeyState | null | undefined>,
		DeletionDate: FormControl<Date | null | undefined>,
		ValidTo: FormControl<Date | null | undefined>,
		Origin: FormControl<OriginType | null | undefined>,
		CustomKeyStoreId: FormControl<string | null | undefined>,
		CloudHsmClusterId: FormControl<string | null | undefined>,
		ExpirationModel: FormControl<ExpirationModelType | null | undefined>,
		KeyManager: FormControl<KeyManagerType | null | undefined>,
		CustomerMasterKeySpec: FormControl<CustomerMasterKeySpec | null | undefined>,
		KeySpec: FormControl<CustomerMasterKeySpec | null | undefined>,
		MultiRegion: FormControl<boolean | null | undefined>,
		PendingDeletionWindowInDays: FormControl<number | null | undefined>,
	}
	export function CreateKeyMetadataFormGroup() {
		return new FormGroup<KeyMetadataFormProperties>({
			AWSAccountId: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KeyUsage: new FormControl<KeyUsageType | null | undefined>(undefined),
			KeyState: new FormControl<KeyState | null | undefined>(undefined),
			DeletionDate: new FormControl<Date | null | undefined>(undefined),
			ValidTo: new FormControl<Date | null | undefined>(undefined),
			Origin: new FormControl<OriginType | null | undefined>(undefined),
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined),
			CloudHsmClusterId: new FormControl<string | null | undefined>(undefined),
			ExpirationModel: new FormControl<ExpirationModelType | null | undefined>(undefined),
			KeyManager: new FormControl<KeyManagerType | null | undefined>(undefined),
			CustomerMasterKeySpec: new FormControl<CustomerMasterKeySpec | null | undefined>(undefined),
			KeySpec: new FormControl<CustomerMasterKeySpec | null | undefined>(undefined),
			MultiRegion: new FormControl<boolean | null | undefined>(undefined),
			PendingDeletionWindowInDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum KeyUsageType { SIGN_VERIFY = 'SIGN_VERIFY', ENCRYPT_DECRYPT = 'ENCRYPT_DECRYPT', GENERATE_VERIFY_MAC = 'GENERATE_VERIFY_MAC' }

	export enum KeyState { Creating = 'Creating', Enabled = 'Enabled', Disabled = 'Disabled', PendingDeletion = 'PendingDeletion', PendingImport = 'PendingImport', PendingReplicaDeletion = 'PendingReplicaDeletion', Unavailable = 'Unavailable', Updating = 'Updating' }

	export enum OriginType { AWS_KMS = 'AWS_KMS', EXTERNAL = 'EXTERNAL', AWS_CLOUDHSM = 'AWS_CLOUDHSM', EXTERNAL_KEY_STORE = 'EXTERNAL_KEY_STORE' }

	export enum ExpirationModelType { KEY_MATERIAL_EXPIRES = 'KEY_MATERIAL_EXPIRES', KEY_MATERIAL_DOES_NOT_EXPIRE = 'KEY_MATERIAL_DOES_NOT_EXPIRE' }

	export enum KeyManagerType { AWS = 'AWS', CUSTOMER = 'CUSTOMER' }


	/** This enum has been deprecated. Instead, use the KeySpec enum. */
	export enum CustomerMasterKeySpec { RSA_2048 = 'RSA_2048', RSA_3072 = 'RSA_3072', RSA_4096 = 'RSA_4096', ECC_NIST_P256 = 'ECC_NIST_P256', ECC_NIST_P384 = 'ECC_NIST_P384', ECC_NIST_P521 = 'ECC_NIST_P521', ECC_SECG_P256K1 = 'ECC_SECG_P256K1', SYMMETRIC_DEFAULT = 'SYMMETRIC_DEFAULT', HMAC_224 = 'HMAC_224', HMAC_256 = 'HMAC_256', HMAC_384 = 'HMAC_384', HMAC_512 = 'HMAC_512', SM2 = 'SM2' }

	export enum EncryptionAlgorithmSpec { SYMMETRIC_DEFAULT = 'SYMMETRIC_DEFAULT', RSAES_OAEP_SHA_1 = 'RSAES_OAEP_SHA_1', RSAES_OAEP_SHA_256 = 'RSAES_OAEP_SHA_256', SM2PKE = 'SM2PKE' }

	export enum SigningAlgorithmSpec { RSASSA_PSS_SHA_256 = 'RSASSA_PSS_SHA_256', RSASSA_PSS_SHA_384 = 'RSASSA_PSS_SHA_384', RSASSA_PSS_SHA_512 = 'RSASSA_PSS_SHA_512', RSASSA_PKCS1_V1_5_SHA_256 = 'RSASSA_PKCS1_V1_5_SHA_256', RSASSA_PKCS1_V1_5_SHA_384 = 'RSASSA_PKCS1_V1_5_SHA_384', RSASSA_PKCS1_V1_5_SHA_512 = 'RSASSA_PKCS1_V1_5_SHA_512', ECDSA_SHA_256 = 'ECDSA_SHA_256', ECDSA_SHA_384 = 'ECDSA_SHA_384', ECDSA_SHA_512 = 'ECDSA_SHA_512', SM2DSA = 'SM2DSA' }


	/** <p>Describes the configuration of this multi-Region key. This field appears only when the KMS key is a primary or replica of a multi-Region key.</p> <p>For more information about any listed KMS key, use the <a>DescribeKey</a> operation.</p> */
	export interface MultiRegionConfiguration {
		MultiRegionKeyType?: MultiRegionKeyType;
		PrimaryKey?: MultiRegionKey;
		ReplicaKeys?: Array<MultiRegionKey>;
	}

	/** <p>Describes the configuration of this multi-Region key. This field appears only when the KMS key is a primary or replica of a multi-Region key.</p> <p>For more information about any listed KMS key, use the <a>DescribeKey</a> operation.</p> */
	export interface MultiRegionConfigurationFormProperties {
		MultiRegionKeyType: FormControl<MultiRegionKeyType | null | undefined>,
	}
	export function CreateMultiRegionConfigurationFormGroup() {
		return new FormGroup<MultiRegionConfigurationFormProperties>({
			MultiRegionKeyType: new FormControl<MultiRegionKeyType | null | undefined>(undefined),
		});

	}

	export enum MultiRegionKeyType { PRIMARY = 'PRIMARY', REPLICA = 'REPLICA' }


	/** Describes the primary or replica key in a multi-Region key. */
	export interface MultiRegionKey {
		Arn?: string;
		Region?: string;
	}

	/** Describes the primary or replica key in a multi-Region key. */
	export interface MultiRegionKeyFormProperties {
		Arn: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateMultiRegionKeyFormGroup() {
		return new FormGroup<MultiRegionKeyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MacAlgorithmSpec { HMAC_SHA_224 = 'HMAC_SHA_224', HMAC_SHA_256 = 'HMAC_SHA_256', HMAC_SHA_384 = 'HMAC_SHA_384', HMAC_SHA_512 = 'HMAC_SHA_512' }


	/** <p>Information about the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">external key </a>that is associated with a KMS key in an external key store. </p> <p>This element appears in a <a>CreateKey</a> or <a>DescribeKey</a> response only for a KMS key in an external key store.</p> <p>The <i>external key</i> is a symmetric encryption key that is hosted by an external key manager outside of Amazon Web Services. When you use the KMS key in an external key store in a cryptographic operation, the cryptographic operation is performed in the external key manager using the specified external key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">External key</a> in the <i>Key Management Service Developer Guide</i>.</p> */
	export interface XksKeyConfigurationType {
		Id?: string;
	}

	/** <p>Information about the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">external key </a>that is associated with a KMS key in an external key store. </p> <p>This element appears in a <a>CreateKey</a> or <a>DescribeKey</a> response only for a KMS key in an external key store.</p> <p>The <i>external key</i> is a symmetric encryption key that is hosted by an external key manager outside of Amazon Web Services. When you use the KMS key in an external key store in a cryptographic operation, the cryptographic operation is performed in the external key manager using the specified external key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">External key</a> in the <i>Key Management Service Developer Guide</i>.</p> */
	export interface XksKeyConfigurationTypeFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateXksKeyConfigurationTypeFormGroup() {
		return new FormGroup<XksKeyConfigurationTypeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateKeyRequest {
		Policy?: string;
		Description?: string;
		KeyUsage?: KeyUsageType;
		CustomerMasterKeySpec?: CustomerMasterKeySpec;
		KeySpec?: CustomerMasterKeySpec;
		Origin?: OriginType;
		CustomKeyStoreId?: string;
		BypassPolicyLockoutSafetyCheck?: boolean | null;
		Tags?: Array<Tag>;
		MultiRegion?: boolean | null;
		XksKeyId?: string;
	}
	export interface CreateKeyRequestFormProperties {
		Policy: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KeyUsage: FormControl<KeyUsageType | null | undefined>,
		CustomerMasterKeySpec: FormControl<CustomerMasterKeySpec | null | undefined>,
		KeySpec: FormControl<CustomerMasterKeySpec | null | undefined>,
		Origin: FormControl<OriginType | null | undefined>,
		CustomKeyStoreId: FormControl<string | null | undefined>,
		BypassPolicyLockoutSafetyCheck: FormControl<boolean | null | undefined>,
		MultiRegion: FormControl<boolean | null | undefined>,
		XksKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateKeyRequestFormGroup() {
		return new FormGroup<CreateKeyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KeyUsage: new FormControl<KeyUsageType | null | undefined>(undefined),
			CustomerMasterKeySpec: new FormControl<CustomerMasterKeySpec | null | undefined>(undefined),
			KeySpec: new FormControl<CustomerMasterKeySpec | null | undefined>(undefined),
			Origin: new FormControl<OriginType | null | undefined>(undefined),
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined),
			BypassPolicyLockoutSafetyCheck: new FormControl<boolean | null | undefined>(undefined),
			MultiRegion: new FormControl<boolean | null | undefined>(undefined),
			XksKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <important> <p>Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p> </important> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p> */
	export interface Tag {

		/** Required */
		TagKey: string;

		/** Required */
		TagValue: string;
	}

	/** <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <important> <p>Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.</p> </important> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p> */
	export interface TagFormProperties {

		/** Required */
		TagKey: FormControl<string | null | undefined>,

		/** Required */
		TagValue: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TagValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface XksKeyInvalidConfigurationException {
	}
	export interface XksKeyInvalidConfigurationExceptionFormProperties {
	}
	export function CreateXksKeyInvalidConfigurationExceptionFormGroup() {
		return new FormGroup<XksKeyInvalidConfigurationExceptionFormProperties>({
		});

	}

	export interface XksKeyAlreadyInUseException {
	}
	export interface XksKeyAlreadyInUseExceptionFormProperties {
	}
	export function CreateXksKeyAlreadyInUseExceptionFormGroup() {
		return new FormGroup<XksKeyAlreadyInUseExceptionFormProperties>({
		});

	}

	export interface XksKeyNotFoundException {
	}
	export interface XksKeyNotFoundExceptionFormProperties {
	}
	export function CreateXksKeyNotFoundExceptionFormGroup() {
		return new FormGroup<XksKeyNotFoundExceptionFormProperties>({
		});

	}

	export interface DecryptResponse {
		KeyId?: string;
		Plaintext?: string;
		EncryptionAlgorithm?: EncryptionAlgorithmSpec;
		CiphertextForRecipient?: string;
	}
	export interface DecryptResponseFormProperties {
		KeyId: FormControl<string | null | undefined>,
		Plaintext: FormControl<string | null | undefined>,
		EncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
		CiphertextForRecipient: FormControl<string | null | undefined>,
	}
	export function CreateDecryptResponseFormGroup() {
		return new FormGroup<DecryptResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			Plaintext: new FormControl<string | null | undefined>(undefined),
			EncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
			CiphertextForRecipient: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DecryptRequest {

		/** Required */
		CiphertextBlob: string;
		EncryptionContext?: EncryptionContextType;
		GrantTokens?: Array<string>;
		KeyId?: string;
		EncryptionAlgorithm?: EncryptionAlgorithmSpec;
		Recipient?: RecipientInfo;
		DryRun?: boolean | null;
	}
	export interface DecryptRequestFormProperties {

		/** Required */
		CiphertextBlob: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		EncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateDecryptRequestFormGroup() {
		return new FormGroup<DecryptRequestFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyId: new FormControl<string | null | undefined>(undefined),
			EncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about the party that receives the response from the API operation.</p> <p>This data type is designed to support Amazon Web Services Nitro Enclaves, which lets you create an isolated compute environment in Amazon EC2. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> */
	export interface RecipientInfo {
		KeyEncryptionAlgorithm?: KeyEncryptionMechanism;
		AttestationDocument?: string;
	}

	/** <p>Contains information about the party that receives the response from the API operation.</p> <p>This data type is designed to support Amazon Web Services Nitro Enclaves, which lets you create an isolated compute environment in Amazon EC2. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> */
	export interface RecipientInfoFormProperties {
		KeyEncryptionAlgorithm: FormControl<KeyEncryptionMechanism | null | undefined>,
		AttestationDocument: FormControl<string | null | undefined>,
	}
	export function CreateRecipientInfoFormGroup() {
		return new FormGroup<RecipientInfoFormProperties>({
			KeyEncryptionAlgorithm: new FormControl<KeyEncryptionMechanism | null | undefined>(undefined),
			AttestationDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum KeyEncryptionMechanism { RSAES_OAEP_SHA_256 = 'RSAES_OAEP_SHA_256' }

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

		/** Required */
		AliasName: string;
	}
	export interface DeleteAliasRequestFormProperties {

		/** Required */
		AliasName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAliasRequestFormGroup() {
		return new FormGroup<DeleteAliasRequestFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		CustomKeyStoreId: string;
	}
	export interface DeleteCustomKeyStoreRequestFormProperties {

		/** Required */
		CustomKeyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomKeyStoreRequestFormGroup() {
		return new FormGroup<DeleteCustomKeyStoreRequestFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		KeyId: string;
	}
	export interface DeleteImportedKeyMaterialRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImportedKeyMaterialRequestFormGroup() {
		return new FormGroup<DeleteImportedKeyMaterialRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCustomKeyStoresResponse {
		CustomKeyStores?: Array<CustomKeyStoresListEntry>;
		NextMarker?: string;
		Truncated?: boolean | null;
	}
	export interface DescribeCustomKeyStoresResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeCustomKeyStoresResponseFormGroup() {
		return new FormGroup<DescribeCustomKeyStoresResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about each custom key store in the custom key store list. */
	export interface CustomKeyStoresListEntry {
		CustomKeyStoreId?: string;
		CustomKeyStoreName?: string;
		CloudHsmClusterId?: string;
		TrustAnchorCertificate?: string;
		ConnectionState?: ConnectionStateType;
		ConnectionErrorCode?: ConnectionErrorCodeType;
		CreationDate?: Date;
		CustomKeyStoreType?: CustomKeyStoreType;
		XksProxyConfiguration?: XksProxyConfigurationType;
	}

	/** Contains information about each custom key store in the custom key store list. */
	export interface CustomKeyStoresListEntryFormProperties {
		CustomKeyStoreId: FormControl<string | null | undefined>,
		CustomKeyStoreName: FormControl<string | null | undefined>,
		CloudHsmClusterId: FormControl<string | null | undefined>,
		TrustAnchorCertificate: FormControl<string | null | undefined>,
		ConnectionState: FormControl<ConnectionStateType | null | undefined>,
		ConnectionErrorCode: FormControl<ConnectionErrorCodeType | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		CustomKeyStoreType: FormControl<CustomKeyStoreType | null | undefined>,
	}
	export function CreateCustomKeyStoresListEntryFormGroup() {
		return new FormGroup<CustomKeyStoresListEntryFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined),
			CustomKeyStoreName: new FormControl<string | null | undefined>(undefined),
			CloudHsmClusterId: new FormControl<string | null | undefined>(undefined),
			TrustAnchorCertificate: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<ConnectionStateType | null | undefined>(undefined),
			ConnectionErrorCode: new FormControl<ConnectionErrorCodeType | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			CustomKeyStoreType: new FormControl<CustomKeyStoreType | null | undefined>(undefined),
		});

	}

	export enum ConnectionStateType { CONNECTED = 'CONNECTED', CONNECTING = 'CONNECTING', FAILED = 'FAILED', DISCONNECTED = 'DISCONNECTED', DISCONNECTING = 'DISCONNECTING' }

	export enum ConnectionErrorCodeType { INVALID_CREDENTIALS = 'INVALID_CREDENTIALS', CLUSTER_NOT_FOUND = 'CLUSTER_NOT_FOUND', NETWORK_ERRORS = 'NETWORK_ERRORS', INTERNAL_ERROR = 'INTERNAL_ERROR', INSUFFICIENT_CLOUDHSM_HSMS = 'INSUFFICIENT_CLOUDHSM_HSMS', USER_LOCKED_OUT = 'USER_LOCKED_OUT', USER_NOT_FOUND = 'USER_NOT_FOUND', USER_LOGGED_IN = 'USER_LOGGED_IN', SUBNET_NOT_FOUND = 'SUBNET_NOT_FOUND', INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET = 'INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET', XKS_PROXY_ACCESS_DENIED = 'XKS_PROXY_ACCESS_DENIED', XKS_PROXY_NOT_REACHABLE = 'XKS_PROXY_NOT_REACHABLE', XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND = 'XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND', XKS_PROXY_INVALID_RESPONSE = 'XKS_PROXY_INVALID_RESPONSE', XKS_PROXY_INVALID_CONFIGURATION = 'XKS_PROXY_INVALID_CONFIGURATION', XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION = 'XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION', XKS_PROXY_TIMED_OUT = 'XKS_PROXY_TIMED_OUT', XKS_PROXY_INVALID_TLS_CONFIGURATION = 'XKS_PROXY_INVALID_TLS_CONFIGURATION' }


	/** Detailed information about the external key store proxy (XKS proxy). Your external key store proxy translates KMS requests into a format that your external key manager can understand. These fields appear in a <a>DescribeCustomKeyStores</a> response only when the <code>CustomKeyStoreType</code> is <code>EXTERNAL_KEY_STORE</code>. */
	export interface XksProxyConfigurationType {
		Connectivity?: XksProxyConnectivityType;
		AccessKeyId?: string;
		UriEndpoint?: string;
		UriPath?: string;
		VpcEndpointServiceName?: string;
	}

	/** Detailed information about the external key store proxy (XKS proxy). Your external key store proxy translates KMS requests into a format that your external key manager can understand. These fields appear in a <a>DescribeCustomKeyStores</a> response only when the <code>CustomKeyStoreType</code> is <code>EXTERNAL_KEY_STORE</code>. */
	export interface XksProxyConfigurationTypeFormProperties {
		Connectivity: FormControl<XksProxyConnectivityType | null | undefined>,
		AccessKeyId: FormControl<string | null | undefined>,
		UriEndpoint: FormControl<string | null | undefined>,
		UriPath: FormControl<string | null | undefined>,
		VpcEndpointServiceName: FormControl<string | null | undefined>,
	}
	export function CreateXksProxyConfigurationTypeFormGroup() {
		return new FormGroup<XksProxyConfigurationTypeFormProperties>({
			Connectivity: new FormControl<XksProxyConnectivityType | null | undefined>(undefined),
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			UriEndpoint: new FormControl<string | null | undefined>(undefined),
			UriPath: new FormControl<string | null | undefined>(undefined),
			VpcEndpointServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCustomKeyStoresRequest {
		CustomKeyStoreId?: string;
		CustomKeyStoreName?: string;
		Limit?: number | null;
		Marker?: string;
	}
	export interface DescribeCustomKeyStoresRequestFormProperties {
		CustomKeyStoreId: FormControl<string | null | undefined>,
		CustomKeyStoreName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCustomKeyStoresRequestFormGroup() {
		return new FormGroup<DescribeCustomKeyStoresRequestFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined),
			CustomKeyStoreName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
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

	export interface DescribeKeyResponse {
		KeyMetadata?: KeyMetadata;
	}
	export interface DescribeKeyResponseFormProperties {
	}
	export function CreateDescribeKeyResponseFormGroup() {
		return new FormGroup<DescribeKeyResponseFormProperties>({
		});

	}

	export interface DescribeKeyRequest {

		/** Required */
		KeyId: string;
		GrantTokens?: Array<string>;
	}
	export interface DescribeKeyRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeKeyRequestFormGroup() {
		return new FormGroup<DescribeKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisableKeyRequest {

		/** Required */
		KeyId: string;
	}
	export interface DisableKeyRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateDisableKeyRequestFormGroup() {
		return new FormGroup<DisableKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisableKeyRotationRequest {

		/** Required */
		KeyId: string;
	}
	export interface DisableKeyRotationRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateDisableKeyRotationRequestFormGroup() {
		return new FormGroup<DisableKeyRotationRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		CustomKeyStoreId: string;
	}
	export interface DisconnectCustomKeyStoreRequestFormProperties {

		/** Required */
		CustomKeyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectCustomKeyStoreRequestFormGroup() {
		return new FormGroup<DisconnectCustomKeyStoreRequestFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableKeyRequest {

		/** Required */
		KeyId: string;
	}
	export interface EnableKeyRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateEnableKeyRequestFormGroup() {
		return new FormGroup<EnableKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableKeyRotationRequest {

		/** Required */
		KeyId: string;
	}
	export interface EnableKeyRotationRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateEnableKeyRotationRequestFormGroup() {
		return new FormGroup<EnableKeyRotationRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EncryptResponse {
		CiphertextBlob?: string;
		KeyId?: string;
		EncryptionAlgorithm?: EncryptionAlgorithmSpec;
	}
	export interface EncryptResponseFormProperties {
		CiphertextBlob: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		EncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
	}
	export function CreateEncryptResponseFormGroup() {
		return new FormGroup<EncryptResponseFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			EncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface EncryptRequest {

		/** Required */
		KeyId: string;

		/** Required */
		Plaintext: string;
		EncryptionContext?: EncryptionContextType;
		GrantTokens?: Array<string>;
		EncryptionAlgorithm?: EncryptionAlgorithmSpec;
		DryRun?: boolean | null;
	}
	export interface EncryptRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		Plaintext: FormControl<string | null | undefined>,
		EncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateEncryptRequestFormGroup() {
		return new FormGroup<EncryptRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Plaintext: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GenerateDataKeyResponse {
		CiphertextBlob?: string;
		Plaintext?: string;
		KeyId?: string;
		CiphertextForRecipient?: string;
	}
	export interface GenerateDataKeyResponseFormProperties {
		CiphertextBlob: FormControl<string | null | undefined>,
		Plaintext: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		CiphertextForRecipient: FormControl<string | null | undefined>,
	}
	export function CreateGenerateDataKeyResponseFormGroup() {
		return new FormGroup<GenerateDataKeyResponseFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined),
			Plaintext: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			CiphertextForRecipient: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateDataKeyRequest {

		/** Required */
		KeyId: string;
		EncryptionContext?: EncryptionContextType;
		NumberOfBytes?: number | null;
		KeySpec?: DataKeySpec;
		GrantTokens?: Array<string>;
		Recipient?: RecipientInfo;
		DryRun?: boolean | null;
	}
	export interface GenerateDataKeyRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
		NumberOfBytes: FormControl<number | null | undefined>,
		KeySpec: FormControl<DataKeySpec | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateGenerateDataKeyRequestFormGroup() {
		return new FormGroup<GenerateDataKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfBytes: new FormControl<number | null | undefined>(undefined),
			KeySpec: new FormControl<DataKeySpec | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DataKeySpec { AES_256 = 'AES_256', AES_128 = 'AES_128' }

	export interface GenerateDataKeyPairResponse {
		PrivateKeyCiphertextBlob?: string;
		PrivateKeyPlaintext?: string;
		PublicKey?: string;
		KeyId?: string;
		KeyPairSpec?: DataKeyPairSpec;
		CiphertextForRecipient?: string;
	}
	export interface GenerateDataKeyPairResponseFormProperties {
		PrivateKeyCiphertextBlob: FormControl<string | null | undefined>,
		PrivateKeyPlaintext: FormControl<string | null | undefined>,
		PublicKey: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		KeyPairSpec: FormControl<DataKeyPairSpec | null | undefined>,
		CiphertextForRecipient: FormControl<string | null | undefined>,
	}
	export function CreateGenerateDataKeyPairResponseFormGroup() {
		return new FormGroup<GenerateDataKeyPairResponseFormProperties>({
			PrivateKeyCiphertextBlob: new FormControl<string | null | undefined>(undefined),
			PrivateKeyPlaintext: new FormControl<string | null | undefined>(undefined),
			PublicKey: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			KeyPairSpec: new FormControl<DataKeyPairSpec | null | undefined>(undefined),
			CiphertextForRecipient: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataKeyPairSpec { RSA_2048 = 'RSA_2048', RSA_3072 = 'RSA_3072', RSA_4096 = 'RSA_4096', ECC_NIST_P256 = 'ECC_NIST_P256', ECC_NIST_P384 = 'ECC_NIST_P384', ECC_NIST_P521 = 'ECC_NIST_P521', ECC_SECG_P256K1 = 'ECC_SECG_P256K1', SM2 = 'SM2' }

	export interface GenerateDataKeyPairRequest {
		EncryptionContext?: EncryptionContextType;

		/** Required */
		KeyId: string;

		/** Required */
		KeyPairSpec: DataKeyPairSpec;
		GrantTokens?: Array<string>;
		Recipient?: RecipientInfo;
		DryRun?: boolean | null;
	}
	export interface GenerateDataKeyPairRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		KeyPairSpec: FormControl<DataKeyPairSpec | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateGenerateDataKeyPairRequestFormGroup() {
		return new FormGroup<GenerateDataKeyPairRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyPairSpec: new FormControl<DataKeyPairSpec | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GenerateDataKeyPairWithoutPlaintextResponse {
		PrivateKeyCiphertextBlob?: string;
		PublicKey?: string;
		KeyId?: string;
		KeyPairSpec?: DataKeyPairSpec;
	}
	export interface GenerateDataKeyPairWithoutPlaintextResponseFormProperties {
		PrivateKeyCiphertextBlob: FormControl<string | null | undefined>,
		PublicKey: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		KeyPairSpec: FormControl<DataKeyPairSpec | null | undefined>,
	}
	export function CreateGenerateDataKeyPairWithoutPlaintextResponseFormGroup() {
		return new FormGroup<GenerateDataKeyPairWithoutPlaintextResponseFormProperties>({
			PrivateKeyCiphertextBlob: new FormControl<string | null | undefined>(undefined),
			PublicKey: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			KeyPairSpec: new FormControl<DataKeyPairSpec | null | undefined>(undefined),
		});

	}

	export interface GenerateDataKeyPairWithoutPlaintextRequest {
		EncryptionContext?: EncryptionContextType;

		/** Required */
		KeyId: string;

		/** Required */
		KeyPairSpec: DataKeyPairSpec;
		GrantTokens?: Array<string>;
		DryRun?: boolean | null;
	}
	export interface GenerateDataKeyPairWithoutPlaintextRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		KeyPairSpec: FormControl<DataKeyPairSpec | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateGenerateDataKeyPairWithoutPlaintextRequestFormGroup() {
		return new FormGroup<GenerateDataKeyPairWithoutPlaintextRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyPairSpec: new FormControl<DataKeyPairSpec | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GenerateDataKeyWithoutPlaintextResponse {
		CiphertextBlob?: string;
		KeyId?: string;
	}
	export interface GenerateDataKeyWithoutPlaintextResponseFormProperties {
		CiphertextBlob: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateDataKeyWithoutPlaintextResponseFormGroup() {
		return new FormGroup<GenerateDataKeyWithoutPlaintextResponseFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateDataKeyWithoutPlaintextRequest {

		/** Required */
		KeyId: string;
		EncryptionContext?: EncryptionContextType;
		KeySpec?: DataKeySpec;
		NumberOfBytes?: number | null;
		GrantTokens?: Array<string>;
		DryRun?: boolean | null;
	}
	export interface GenerateDataKeyWithoutPlaintextRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
		KeySpec: FormControl<DataKeySpec | null | undefined>,
		NumberOfBytes: FormControl<number | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateGenerateDataKeyWithoutPlaintextRequestFormGroup() {
		return new FormGroup<GenerateDataKeyWithoutPlaintextRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeySpec: new FormControl<DataKeySpec | null | undefined>(undefined),
			NumberOfBytes: new FormControl<number | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GenerateMacResponse {
		Mac?: string;
		MacAlgorithm?: MacAlgorithmSpec;
		KeyId?: string;
	}
	export interface GenerateMacResponseFormProperties {
		Mac: FormControl<string | null | undefined>,
		MacAlgorithm: FormControl<MacAlgorithmSpec | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateMacResponseFormGroup() {
		return new FormGroup<GenerateMacResponseFormProperties>({
			Mac: new FormControl<string | null | undefined>(undefined),
			MacAlgorithm: new FormControl<MacAlgorithmSpec | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateMacRequest {

		/** Required */
		Message: string;

		/** Required */
		KeyId: string;

		/** Required */
		MacAlgorithm: MacAlgorithmSpec;
		GrantTokens?: Array<string>;
		DryRun?: boolean | null;
	}
	export interface GenerateMacRequestFormProperties {

		/** Required */
		Message: FormControl<string | null | undefined>,

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		MacAlgorithm: FormControl<MacAlgorithmSpec | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateGenerateMacRequestFormGroup() {
		return new FormGroup<GenerateMacRequestFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MacAlgorithm: new FormControl<MacAlgorithmSpec | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GenerateRandomResponse {
		Plaintext?: string;
		CiphertextForRecipient?: string;
	}
	export interface GenerateRandomResponseFormProperties {
		Plaintext: FormControl<string | null | undefined>,
		CiphertextForRecipient: FormControl<string | null | undefined>,
	}
	export function CreateGenerateRandomResponseFormGroup() {
		return new FormGroup<GenerateRandomResponseFormProperties>({
			Plaintext: new FormControl<string | null | undefined>(undefined),
			CiphertextForRecipient: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateRandomRequest {
		NumberOfBytes?: number | null;
		CustomKeyStoreId?: string;
		Recipient?: RecipientInfo;
	}
	export interface GenerateRandomRequestFormProperties {
		NumberOfBytes: FormControl<number | null | undefined>,
		CustomKeyStoreId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateRandomRequestFormGroup() {
		return new FormGroup<GenerateRandomRequestFormProperties>({
			NumberOfBytes: new FormControl<number | null | undefined>(undefined),
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetKeyPolicyResponse {
		Policy?: string;
	}
	export interface GetKeyPolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyPolicyResponseFormGroup() {
		return new FormGroup<GetKeyPolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetKeyPolicyRequest {

		/** Required */
		KeyId: string;

		/** Required */
		PolicyName: string;
	}
	export interface GetKeyPolicyRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyPolicyRequestFormGroup() {
		return new FormGroup<GetKeyPolicyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		KeyId: string;
	}
	export interface GetKeyRotationStatusRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyRotationStatusRequestFormGroup() {
		return new FormGroup<GetKeyRotationStatusRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetParametersForImportResponse {
		KeyId?: string;
		ImportToken?: string;
		PublicKey?: string;
		ParametersValidTo?: Date;
	}
	export interface GetParametersForImportResponseFormProperties {
		KeyId: FormControl<string | null | undefined>,
		ImportToken: FormControl<string | null | undefined>,
		PublicKey: FormControl<string | null | undefined>,
		ParametersValidTo: FormControl<Date | null | undefined>,
	}
	export function CreateGetParametersForImportResponseFormGroup() {
		return new FormGroup<GetParametersForImportResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			ImportToken: new FormControl<string | null | undefined>(undefined),
			PublicKey: new FormControl<string | null | undefined>(undefined),
			ParametersValidTo: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetParametersForImportRequest {

		/** Required */
		KeyId: string;

		/** Required */
		WrappingAlgorithm: AlgorithmSpec;

		/** Required */
		WrappingKeySpec: WrappingKeySpec;
	}
	export interface GetParametersForImportRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		WrappingAlgorithm: FormControl<AlgorithmSpec | null | undefined>,

		/** Required */
		WrappingKeySpec: FormControl<WrappingKeySpec | null | undefined>,
	}
	export function CreateGetParametersForImportRequestFormGroup() {
		return new FormGroup<GetParametersForImportRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WrappingAlgorithm: new FormControl<AlgorithmSpec | null | undefined>(undefined, [Validators.required]),
			WrappingKeySpec: new FormControl<WrappingKeySpec | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AlgorithmSpec { RSAES_PKCS1_V1_5 = 'RSAES_PKCS1_V1_5', RSAES_OAEP_SHA_1 = 'RSAES_OAEP_SHA_1', RSAES_OAEP_SHA_256 = 'RSAES_OAEP_SHA_256', RSA_AES_KEY_WRAP_SHA_1 = 'RSA_AES_KEY_WRAP_SHA_1', RSA_AES_KEY_WRAP_SHA_256 = 'RSA_AES_KEY_WRAP_SHA_256' }

	export enum WrappingKeySpec { RSA_2048 = 'RSA_2048', RSA_3072 = 'RSA_3072', RSA_4096 = 'RSA_4096' }

	export interface GetPublicKeyResponse {
		KeyId?: string;
		PublicKey?: string;
		CustomerMasterKeySpec?: CustomerMasterKeySpec;
		KeySpec?: CustomerMasterKeySpec;
		KeyUsage?: KeyUsageType;
		EncryptionAlgorithms?: Array<EncryptionAlgorithmSpec>;
		SigningAlgorithms?: Array<SigningAlgorithmSpec>;
	}
	export interface GetPublicKeyResponseFormProperties {
		KeyId: FormControl<string | null | undefined>,
		PublicKey: FormControl<string | null | undefined>,
		CustomerMasterKeySpec: FormControl<CustomerMasterKeySpec | null | undefined>,
		KeySpec: FormControl<CustomerMasterKeySpec | null | undefined>,
		KeyUsage: FormControl<KeyUsageType | null | undefined>,
	}
	export function CreateGetPublicKeyResponseFormGroup() {
		return new FormGroup<GetPublicKeyResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			PublicKey: new FormControl<string | null | undefined>(undefined),
			CustomerMasterKeySpec: new FormControl<CustomerMasterKeySpec | null | undefined>(undefined),
			KeySpec: new FormControl<CustomerMasterKeySpec | null | undefined>(undefined),
			KeyUsage: new FormControl<KeyUsageType | null | undefined>(undefined),
		});

	}

	export interface GetPublicKeyRequest {

		/** Required */
		KeyId: string;
		GrantTokens?: Array<string>;
	}
	export interface GetPublicKeyRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateGetPublicKeyRequestFormGroup() {
		return new FormGroup<GetPublicKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		KeyId: string;

		/** Required */
		ImportToken: string;

		/** Required */
		EncryptedKeyMaterial: string;
		ValidTo?: Date;
		ExpirationModel?: ExpirationModelType;
	}
	export interface ImportKeyMaterialRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		ImportToken: FormControl<string | null | undefined>,

		/** Required */
		EncryptedKeyMaterial: FormControl<string | null | undefined>,
		ValidTo: FormControl<Date | null | undefined>,
		ExpirationModel: FormControl<ExpirationModelType | null | undefined>,
	}
	export function CreateImportKeyMaterialRequestFormGroup() {
		return new FormGroup<ImportKeyMaterialRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImportToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptedKeyMaterial: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidTo: new FormControl<Date | null | undefined>(undefined),
			ExpirationModel: new FormControl<ExpirationModelType | null | undefined>(undefined),
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
		NextMarker?: string;
		Truncated?: boolean | null;
	}
	export interface ListAliasesResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListAliasesResponseFormGroup() {
		return new FormGroup<ListAliasesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about an alias. */
	export interface AliasListEntry {
		AliasName?: string;
		AliasArn?: string;
		TargetKeyId?: string;
		CreationDate?: Date;
		LastUpdatedDate?: Date;
	}

	/** Contains information about an alias. */
	export interface AliasListEntryFormProperties {
		AliasName: FormControl<string | null | undefined>,
		AliasArn: FormControl<string | null | undefined>,
		TargetKeyId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateAliasListEntryFormGroup() {
		return new FormGroup<AliasListEntryFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined),
			AliasArn: new FormControl<string | null | undefined>(undefined),
			TargetKeyId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAliasesRequest {
		KeyId?: string;
		Limit?: number | null;
		Marker?: string;
	}
	export interface ListAliasesRequestFormProperties {
		KeyId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListAliasesRequestFormGroup() {
		return new FormGroup<ListAliasesRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGrantsResponse {
		Grants?: Array<GrantListEntry>;
		NextMarker?: string;
		Truncated?: boolean | null;
	}
	export interface ListGrantsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListGrantsResponseFormGroup() {
		return new FormGroup<ListGrantsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about a grant. */
	export interface GrantListEntry {
		KeyId?: string;
		GrantId?: string;
		Name?: string;
		CreationDate?: Date;
		GranteePrincipal?: string;
		RetiringPrincipal?: string;
		IssuingAccount?: string;
		Operations?: Array<GrantOperation>;
		Constraints?: GrantConstraints;
	}

	/** Contains information about a grant. */
	export interface GrantListEntryFormProperties {
		KeyId: FormControl<string | null | undefined>,
		GrantId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		GranteePrincipal: FormControl<string | null | undefined>,
		RetiringPrincipal: FormControl<string | null | undefined>,
		IssuingAccount: FormControl<string | null | undefined>,
	}
	export function CreateGrantListEntryFormGroup() {
		return new FormGroup<GrantListEntryFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			GrantId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			GranteePrincipal: new FormControl<string | null | undefined>(undefined),
			RetiringPrincipal: new FormControl<string | null | undefined>(undefined),
			IssuingAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGrantsRequest {
		Limit?: number | null;
		Marker?: string;

		/** Required */
		KeyId: string;
		GrantId?: string;
		GranteePrincipal?: string;
	}
	export interface ListGrantsRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,

		/** Required */
		KeyId: FormControl<string | null | undefined>,
		GrantId: FormControl<string | null | undefined>,
		GranteePrincipal: FormControl<string | null | undefined>,
	}
	export function CreateListGrantsRequestFormGroup() {
		return new FormGroup<ListGrantsRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GrantId: new FormControl<string | null | undefined>(undefined),
			GranteePrincipal: new FormControl<string | null | undefined>(undefined),
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

	export interface ListKeyPoliciesResponse {
		PolicyNames?: Array<string>;
		NextMarker?: string;
		Truncated?: boolean | null;
	}
	export interface ListKeyPoliciesResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListKeyPoliciesResponseFormGroup() {
		return new FormGroup<ListKeyPoliciesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListKeyPoliciesRequest {

		/** Required */
		KeyId: string;
		Limit?: number | null;
		Marker?: string;
	}
	export interface ListKeyPoliciesRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListKeyPoliciesRequestFormGroup() {
		return new FormGroup<ListKeyPoliciesRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListKeysResponse {
		Keys?: Array<KeyListEntry>;
		NextMarker?: string;
		Truncated?: boolean | null;
	}
	export interface ListKeysResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListKeysResponseFormGroup() {
		return new FormGroup<ListKeysResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about each entry in the key list. */
	export interface KeyListEntry {
		KeyId?: string;
		KeyArn?: string;
	}

	/** Contains information about each entry in the key list. */
	export interface KeyListEntryFormProperties {
		KeyId: FormControl<string | null | undefined>,
		KeyArn: FormControl<string | null | undefined>,
	}
	export function CreateKeyListEntryFormGroup() {
		return new FormGroup<KeyListEntryFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			KeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListKeysRequest {
		Limit?: number | null;
		Marker?: string;
	}
	export interface ListKeysRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListKeysRequestFormGroup() {
		return new FormGroup<ListKeysRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceTagsResponse {
		Tags?: Array<Tag>;
		NextMarker?: string;
		Truncated?: boolean | null;
	}
	export interface ListResourceTagsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListResourceTagsResponseFormGroup() {
		return new FormGroup<ListResourceTagsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListResourceTagsRequest {

		/** Required */
		KeyId: string;
		Limit?: number | null;
		Marker?: string;
	}
	export interface ListResourceTagsRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListResourceTagsRequestFormGroup() {
		return new FormGroup<ListResourceTagsRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRetirableGrantsRequest {
		Limit?: number | null;
		Marker?: string;

		/** Required */
		RetiringPrincipal: string;
	}
	export interface ListRetirableGrantsRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,

		/** Required */
		RetiringPrincipal: FormControl<string | null | undefined>,
	}
	export function CreateListRetirableGrantsRequestFormGroup() {
		return new FormGroup<ListRetirableGrantsRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			RetiringPrincipal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutKeyPolicyRequest {

		/** Required */
		KeyId: string;

		/** Required */
		PolicyName: string;

		/** Required */
		Policy: string;
		BypassPolicyLockoutSafetyCheck?: boolean | null;
	}
	export interface PutKeyPolicyRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
		BypassPolicyLockoutSafetyCheck: FormControl<boolean | null | undefined>,
	}
	export function CreatePutKeyPolicyRequestFormGroup() {
		return new FormGroup<PutKeyPolicyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BypassPolicyLockoutSafetyCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReEncryptResponse {
		CiphertextBlob?: string;
		SourceKeyId?: string;
		KeyId?: string;
		SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec;
		DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec;
	}
	export interface ReEncryptResponseFormProperties {
		CiphertextBlob: FormControl<string | null | undefined>,
		SourceKeyId: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		SourceEncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
		DestinationEncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
	}
	export function CreateReEncryptResponseFormGroup() {
		return new FormGroup<ReEncryptResponseFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined),
			SourceKeyId: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			SourceEncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
			DestinationEncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface ReEncryptRequest {

		/** Required */
		CiphertextBlob: string;
		SourceEncryptionContext?: EncryptionContextType;
		SourceKeyId?: string;

		/** Required */
		DestinationKeyId: string;
		DestinationEncryptionContext?: EncryptionContextType;
		SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec;
		DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec;
		GrantTokens?: Array<string>;
		DryRun?: boolean | null;
	}
	export interface ReEncryptRequestFormProperties {

		/** Required */
		CiphertextBlob: FormControl<string | null | undefined>,
		SourceKeyId: FormControl<string | null | undefined>,

		/** Required */
		DestinationKeyId: FormControl<string | null | undefined>,
		SourceEncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
		DestinationEncryptionAlgorithm: FormControl<EncryptionAlgorithmSpec | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateReEncryptRequestFormGroup() {
		return new FormGroup<ReEncryptRequestFormProperties>({
			CiphertextBlob: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceKeyId: new FormControl<string | null | undefined>(undefined),
			DestinationKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceEncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
			DestinationEncryptionAlgorithm: new FormControl<EncryptionAlgorithmSpec | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReplicateKeyResponse {
		ReplicaKeyMetadata?: KeyMetadata;
		ReplicaPolicy?: string;
		ReplicaTags?: Array<Tag>;
	}
	export interface ReplicateKeyResponseFormProperties {
		ReplicaPolicy: FormControl<string | null | undefined>,
	}
	export function CreateReplicateKeyResponseFormGroup() {
		return new FormGroup<ReplicateKeyResponseFormProperties>({
			ReplicaPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplicateKeyRequest {

		/** Required */
		KeyId: string;

		/** Required */
		ReplicaRegion: string;
		Policy?: string;
		BypassPolicyLockoutSafetyCheck?: boolean | null;
		Description?: string;
		Tags?: Array<Tag>;
	}
	export interface ReplicateKeyRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		ReplicaRegion: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
		BypassPolicyLockoutSafetyCheck: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateReplicateKeyRequestFormGroup() {
		return new FormGroup<ReplicateKeyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicaRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined),
			BypassPolicyLockoutSafetyCheck: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetireGrantRequest {
		GrantToken?: string;
		KeyId?: string;
		GrantId?: string;
		DryRun?: boolean | null;
	}
	export interface RetireGrantRequestFormProperties {
		GrantToken: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		GrantId: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateRetireGrantRequestFormGroup() {
		return new FormGroup<RetireGrantRequestFormProperties>({
			GrantToken: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			GrantId: new FormControl<string | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RevokeGrantRequest {

		/** Required */
		KeyId: string;

		/** Required */
		GrantId: string;
		DryRun?: boolean | null;
	}
	export interface RevokeGrantRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		GrantId: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateRevokeGrantRequestFormGroup() {
		return new FormGroup<RevokeGrantRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GrantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ScheduleKeyDeletionResponse {
		KeyId?: string;
		DeletionDate?: Date;
		KeyState?: KeyState;
		PendingWindowInDays?: number | null;
	}
	export interface ScheduleKeyDeletionResponseFormProperties {
		KeyId: FormControl<string | null | undefined>,
		DeletionDate: FormControl<Date | null | undefined>,
		KeyState: FormControl<KeyState | null | undefined>,
		PendingWindowInDays: FormControl<number | null | undefined>,
	}
	export function CreateScheduleKeyDeletionResponseFormGroup() {
		return new FormGroup<ScheduleKeyDeletionResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			DeletionDate: new FormControl<Date | null | undefined>(undefined),
			KeyState: new FormControl<KeyState | null | undefined>(undefined),
			PendingWindowInDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScheduleKeyDeletionRequest {

		/** Required */
		KeyId: string;
		PendingWindowInDays?: number | null;
	}
	export interface ScheduleKeyDeletionRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
		PendingWindowInDays: FormControl<number | null | undefined>,
	}
	export function CreateScheduleKeyDeletionRequestFormGroup() {
		return new FormGroup<ScheduleKeyDeletionRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PendingWindowInDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SignResponse {
		KeyId?: string;
		Signature?: string;
		SigningAlgorithm?: SigningAlgorithmSpec;
	}
	export interface SignResponseFormProperties {
		KeyId: FormControl<string | null | undefined>,
		Signature: FormControl<string | null | undefined>,
		SigningAlgorithm: FormControl<SigningAlgorithmSpec | null | undefined>,
	}
	export function CreateSignResponseFormGroup() {
		return new FormGroup<SignResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined),
			SigningAlgorithm: new FormControl<SigningAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface SignRequest {

		/** Required */
		KeyId: string;

		/** Required */
		Message: string;
		MessageType?: MessageType;
		GrantTokens?: Array<string>;

		/** Required */
		SigningAlgorithm: SigningAlgorithmSpec;
		DryRun?: boolean | null;
	}
	export interface SignRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,

		/** Required */
		SigningAlgorithm: FormControl<SigningAlgorithmSpec | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateSignRequestFormGroup() {
		return new FormGroup<SignRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			SigningAlgorithm: new FormControl<SigningAlgorithmSpec | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MessageType { RAW = 'RAW', DIGEST = 'DIGEST' }

	export interface TagResourceRequest {

		/** Required */
		KeyId: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		KeyId: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAliasRequest {

		/** Required */
		AliasName: string;

		/** Required */
		TargetKeyId: string;
	}
	export interface UpdateAliasRequestFormProperties {

		/** Required */
		AliasName: FormControl<string | null | undefined>,

		/** Required */
		TargetKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAliasRequestFormGroup() {
		return new FormGroup<UpdateAliasRequestFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		CustomKeyStoreId: string;
		NewCustomKeyStoreName?: string;
		KeyStorePassword?: string;
		CloudHsmClusterId?: string;
		XksProxyUriEndpoint?: string;
		XksProxyUriPath?: string;
		XksProxyVpcEndpointServiceName?: string;
		XksProxyAuthenticationCredential?: XksProxyAuthenticationCredentialType;
		XksProxyConnectivity?: XksProxyConnectivityType;
	}
	export interface UpdateCustomKeyStoreRequestFormProperties {

		/** Required */
		CustomKeyStoreId: FormControl<string | null | undefined>,
		NewCustomKeyStoreName: FormControl<string | null | undefined>,
		KeyStorePassword: FormControl<string | null | undefined>,
		CloudHsmClusterId: FormControl<string | null | undefined>,
		XksProxyUriEndpoint: FormControl<string | null | undefined>,
		XksProxyUriPath: FormControl<string | null | undefined>,
		XksProxyVpcEndpointServiceName: FormControl<string | null | undefined>,
		XksProxyConnectivity: FormControl<XksProxyConnectivityType | null | undefined>,
	}
	export function CreateUpdateCustomKeyStoreRequestFormGroup() {
		return new FormGroup<UpdateCustomKeyStoreRequestFormProperties>({
			CustomKeyStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NewCustomKeyStoreName: new FormControl<string | null | undefined>(undefined),
			KeyStorePassword: new FormControl<string | null | undefined>(undefined),
			CloudHsmClusterId: new FormControl<string | null | undefined>(undefined),
			XksProxyUriEndpoint: new FormControl<string | null | undefined>(undefined),
			XksProxyUriPath: new FormControl<string | null | undefined>(undefined),
			XksProxyVpcEndpointServiceName: new FormControl<string | null | undefined>(undefined),
			XksProxyConnectivity: new FormControl<XksProxyConnectivityType | null | undefined>(undefined),
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

		/** Required */
		KeyId: string;

		/** Required */
		Description: string;
	}
	export interface UpdateKeyDescriptionRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKeyDescriptionRequestFormGroup() {
		return new FormGroup<UpdateKeyDescriptionRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePrimaryRegionRequest {

		/** Required */
		KeyId: string;

		/** Required */
		PrimaryRegion: string;
	}
	export interface UpdatePrimaryRegionRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		PrimaryRegion: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePrimaryRegionRequestFormGroup() {
		return new FormGroup<UpdatePrimaryRegionRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrimaryRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifyResponse {
		KeyId?: string;
		SignatureValid?: boolean | null;
		SigningAlgorithm?: SigningAlgorithmSpec;
	}
	export interface VerifyResponseFormProperties {
		KeyId: FormControl<string | null | undefined>,
		SignatureValid: FormControl<boolean | null | undefined>,
		SigningAlgorithm: FormControl<SigningAlgorithmSpec | null | undefined>,
	}
	export function CreateVerifyResponseFormGroup() {
		return new FormGroup<VerifyResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			SignatureValid: new FormControl<boolean | null | undefined>(undefined),
			SigningAlgorithm: new FormControl<SigningAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface VerifyRequest {

		/** Required */
		KeyId: string;

		/** Required */
		Message: string;
		MessageType?: MessageType;

		/** Required */
		Signature: string;

		/** Required */
		SigningAlgorithm: SigningAlgorithmSpec;
		GrantTokens?: Array<string>;
		DryRun?: boolean | null;
	}
	export interface VerifyRequestFormProperties {

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,

		/** Required */
		Signature: FormControl<string | null | undefined>,

		/** Required */
		SigningAlgorithm: FormControl<SigningAlgorithmSpec | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateVerifyRequestFormGroup() {
		return new FormGroup<VerifyRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SigningAlgorithm: new FormControl<SigningAlgorithmSpec | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
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

	export interface VerifyMacResponse {
		KeyId?: string;
		MacValid?: boolean | null;
		MacAlgorithm?: MacAlgorithmSpec;
	}
	export interface VerifyMacResponseFormProperties {
		KeyId: FormControl<string | null | undefined>,
		MacValid: FormControl<boolean | null | undefined>,
		MacAlgorithm: FormControl<MacAlgorithmSpec | null | undefined>,
	}
	export function CreateVerifyMacResponseFormGroup() {
		return new FormGroup<VerifyMacResponseFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			MacValid: new FormControl<boolean | null | undefined>(undefined),
			MacAlgorithm: new FormControl<MacAlgorithmSpec | null | undefined>(undefined),
		});

	}

	export interface VerifyMacRequest {

		/** Required */
		Message: string;

		/** Required */
		KeyId: string;

		/** Required */
		MacAlgorithm: MacAlgorithmSpec;

		/** Required */
		Mac: string;
		GrantTokens?: Array<string>;
		DryRun?: boolean | null;
	}
	export interface VerifyMacRequestFormProperties {

		/** Required */
		Message: FormControl<string | null | undefined>,

		/** Required */
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		MacAlgorithm: FormControl<MacAlgorithmSpec | null | undefined>,

		/** Required */
		Mac: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateVerifyMacRequestFormGroup() {
		return new FormGroup<VerifyMacRequestFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MacAlgorithm: new FormControl<MacAlgorithmSpec | null | undefined>(undefined, [Validators.required]),
			Mac: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface KMSInvalidMacException {
	}
	export interface KMSInvalidMacExceptionFormProperties {
	}
	export function CreateKMSInvalidMacExceptionFormGroup() {
		return new FormGroup<KMSInvalidMacExceptionFormProperties>({
		});

	}

	export enum KeySpec { RSA_2048 = 'RSA_2048', RSA_3072 = 'RSA_3072', RSA_4096 = 'RSA_4096', ECC_NIST_P256 = 'ECC_NIST_P256', ECC_NIST_P384 = 'ECC_NIST_P384', ECC_NIST_P521 = 'ECC_NIST_P521', ECC_SECG_P256K1 = 'ECC_SECG_P256K1', SYMMETRIC_DEFAULT = 'SYMMETRIC_DEFAULT', HMAC_224 = 'HMAC_224', HMAC_256 = 'HMAC_256', HMAC_384 = 'HMAC_384', HMAC_512 = 'HMAC_512', SM2 = 'SM2' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Cancels the deletion of a KMS key. When this operation succeeds, the key state of the KMS key is <code>Disabled</code>. To enable the KMS key, use <a>EnableKey</a>. </p> <p>For more information about scheduling and canceling deletion of a KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CancelKeyDeletion</a> (key policy)</p> <p> <b>Related operations</b>: <a>ScheduleKeyDeletion</a> </p>
		 * Post #X-Amz-Target=TrentService.CancelKeyDeletion
		 * @return {CancelKeyDeletionResponse} Success
		 */
		CancelKeyDeletion(requestBody: CancelKeyDeletionRequest): Observable<CancelKeyDeletionResponse> {
			return this.http.post<CancelKeyDeletionResponse>(this.baseUri + '#X-Amz-Target=TrentService.CancelKeyDeletion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Connects or reconnects a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> to its backing key store. For an CloudHSM key store, <code>ConnectCustomKeyStore</code> connects the key store to its associated CloudHSM cluster. For an external key store, <code>ConnectCustomKeyStore</code> connects the key store to the external key store proxy that communicates with your external key manager.</p> <p>The custom key store must be connected before you can create KMS keys in the key store or use the KMS keys it contains. You can disconnect and reconnect a custom key store at any time.</p> <p>The connection process for a custom key store can take an extended amount of time to complete. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <p>The <code>ConnectCustomKeyStore</code> operation might fail for various reasons. To find the reason, use the <a>DescribeCustomKeyStores</a> operation and see the <code>ConnectionErrorCode</code> in the response. For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p> <p>To fix the failure, use the <a>DisconnectCustomKeyStore</a> operation to disconnect the custom key store, correct the error, use the <a>UpdateCustomKeyStore</a> operation if necessary, and then use <code>ConnectCustomKeyStore</code> again.</p> <p> <b>CloudHSM key store</b> </p> <p>During the connection process for an CloudHSM key store, KMS finds the CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the CloudHSM client as the <code>kmsuser</code> CU, and rotates its password.</p> <p>To connect an CloudHSM key store, its associated CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation. To add HSMs to the cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation. Also, the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser"> <code>kmsuser</code> crypto user</a> (CU) must not be logged into the cluster. This prevents KMS from using this account to log in.</p> <p>If you are having trouble connecting or disconnecting a CloudHSM key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting an CloudHSM key store</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>External key store</b> </p> <p>When you connect an external key store that uses public endpoint connectivity, KMS tests its ability to communicate with your external key manager by sending a request via the external key store proxy.</p> <p>When you connect to an external key store that uses VPC endpoint service connectivity, KMS establishes the networking elements that it needs to communicate with your external key manager via the external key store proxy. This includes creating an interface endpoint to the VPC endpoint service and a private hosted zone for traffic between KMS and the VPC endpoint service.</p> <p>To connect an external key store, KMS must be able to connect to the external key store proxy, the external key store proxy must be able to communicate with your external key manager, and the external key manager must be available for cryptographic operations.</p> <p>If you are having trouble connecting or disconnecting an external key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting an external key store</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ConnectCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ConnectCustomKeyStore
		 * @return {ConnectCustomKeyStoreResponse} Success
		 */
		ConnectCustomKeyStore(requestBody: ConnectCustomKeyStoreRequest): Observable<ConnectCustomKeyStoreResponse> {
			return this.http.post<ConnectCustomKeyStoreResponse>(this.baseUri + '#X-Amz-Target=TrentService.ConnectCustomKeyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a friendly name for a KMS key. </p> <note> <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>You can use an alias to identify a KMS key in the KMS console, in the <a>DescribeKey</a> operation and in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>, such as <a>Encrypt</a> and <a>GenerateDataKey</a>. You can also change the KMS key that's associated with the alias (<a>UpdateAlias</a>) or delete the alias (<a>DeleteAlias</a>) at any time. These operations don't affect the underlying KMS key. </p> <p>You can associate the alias with any customer managed key in the same Amazon Web Services Region. Each alias is associated with only one KMS key at a time, but a KMS key can have multiple aliases. A valid KMS key is required. You can't create an alias without a KMS key.</p> <p>The alias must be unique in the account and Region, but you can have aliases with the same name in different Regions. For detailed information about aliases, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">Using aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>This operation does not return a response. To get the alias that you created, use the <a>ListAliases</a> operation.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on an alias in a different Amazon Web Services account.</p> <p> <b>Required permissions</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateAlias</a> on the alias (IAM policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateAlias</a> on the KMS key (key policy).</p> </li> </ul> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.CreateAlias
		 * @return {void} Success
		 */
		CreateAlias(requestBody: CreateAliasRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.CreateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> backed by a key store that you own and manage. When you use a KMS key in a custom key store for a cryptographic operation, the cryptographic operation is actually performed in your key store using your keys. KMS supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a> backed by an <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html">CloudHSM cluster</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key stores</a> backed by an external key store proxy and external key manager outside of Amazon Web Services.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <p>Before you create the custom key store, the required elements must be in place and operational. We recommend that you use the test tools that KMS provides to verify the configuration your external key store proxy. For details about the required elements and verification tests, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the prerequisites (for CloudHSM key stores)</a> or <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keystore.html#xks-requirements">Assemble the prerequisites (for external key stores)</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>To create a custom key store, use the following parameters.</p> <ul> <li> <p>To create an CloudHSM key store, specify the <code>CustomKeyStoreName</code>, <code>CloudHsmClusterId</code>, <code>KeyStorePassword</code>, and <code>TrustAnchorCertificate</code>. The <code>CustomKeyStoreType</code> parameter is optional for CloudHSM key stores. If you include it, set it to the default value, <code>AWS_CLOUDHSM</code>. For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting an CloudHSM key store</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> <li> <p>To create an external key store, specify the <code>CustomKeyStoreName</code> and a <code>CustomKeyStoreType</code> of <code>EXTERNAL_KEY_STORE</code>. Also, specify values for <code>XksProxyConnectivity</code>, <code>XksProxyAuthenticationCredential</code>, <code>XksProxyUriEndpoint</code>, and <code>XksProxyUriPath</code>. If your <code>XksProxyConnectivity</code> value is <code>VPC_ENDPOINT_SERVICE</code>, specify the <code>XksProxyVpcEndpointServiceName</code> parameter. For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting an external key store</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <note> <p>For external key stores:</p> <p>Some external key managers provide a simpler method for creating an external key store. For details, see your external key manager documentation.</p> <p>When creating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot use a proxy configuration with the <code>CreateCustomKeyStore</code> operation. However, you can use the values in the file to help you determine the correct values for the <code>CreateCustomKeyStore</code> parameters.</p> </note> <p>When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the <a>ConnectCustomKeyStore</a> operation to connect a new CloudHSM key store to its CloudHSM cluster, or to connect a new external key store to the external key store proxy for your external key manager. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it.</p> <p>For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a custom key store</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateCustomKeyStore</a> (IAM policy).</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.CreateCustomKeyStore
		 * @return {CreateCustomKeyStoreResponse} Success
		 */
		CreateCustomKeyStore(requestBody: CreateCustomKeyStoreRequest): Observable<CreateCustomKeyStoreResponse> {
			return this.http.post<CreateCustomKeyStoreResponse>(this.baseUri + '#X-Amz-Target=TrentService.CreateCustomKeyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a grant to a KMS key. </p> <p>A <i>grant</i> is a policy instrument that allows Amazon Web Services principals to use KMS keys in cryptographic operations. It also can allow them to view a KMS key (<a>DescribeKey</a>) and create and manage grants. When authorizing access to a KMS key, grants are considered along with key policies and IAM policies. Grants are often used for temporary permissions because you can create one, use its permissions, and delete it without changing your key policies or IAM policies. </p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p>The <code>CreateGrant</code> operation returns a <code>GrantToken</code> and a <code>GrantId</code>.</p> <ul> <li> <p>When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as <i>eventual consistency</i>. Once the grant has achieved eventual consistency, the grantee principal can use the permissions in the grant without identifying the grant. </p> <p>However, to use the permissions in the grant immediately, use the <code>GrantToken</code> that <code>CreateGrant</code> returns. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> </li> <li> <p>The <code>CreateGrant</code> operation also returns a <code>GrantId</code>. You can use the <code>GrantId</code> and a key identifier to identify the grant in the <a>RetireGrant</a> and <a>RevokeGrant</a> operations. To find the grant ID, use the <a>ListGrants</a> or <a>ListRetirableGrants</a> operations.</p> </li> </ul> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateGrant</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.CreateGrant
		 * @return {CreateGrantResponse} Success
		 */
		CreateGrant(requestBody: CreateGrantRequest): Observable<CreateGrantResponse> {
			return this.http.post<CreateGrantResponse>(this.baseUri + '#X-Amz-Target=TrentService.CreateGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a unique customer managed <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms-keys">KMS key</a> in your Amazon Web Services account and Region. You can use a KMS key in cryptographic operations, such as encryption and signing. Some Amazon Web Services services let you use KMS keys that you create and manage to protect your service resources.</p> <p>A KMS key is a logical representation of a cryptographic key. In addition to the key material used in cryptographic operations, a KMS key includes metadata, such as the key ID, key policy, creation date, description, and key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html">Managing keys</a> in the <i>Key Management Service Developer Guide</i> </p> <p>Use the parameters of <code>CreateKey</code> to specify the type of KMS key, the source of its key material, its key policy, description, tags, and other properties.</p> <note> <p>KMS has replaced the term <i>customer master key (CMK)</i> with <i>KMS key</i> and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p> </note> <p>To create different types of KMS keys, use the following guidance:</p> <dl> <dt>Symmetric encryption KMS key</dt> <dd> <p>By default, <code>CreateKey</code> creates a symmetric encryption KMS key with key material that KMS generates. This is the basic and most widely used type of KMS key, and provides the best performance.</p> <p>To create a symmetric encryption KMS key, you don't need to specify any parameters. The default value for <code>KeySpec</code>, <code>SYMMETRIC_DEFAULT</code>, the default value for <code>KeyUsage</code>, <code>ENCRYPT_DECRYPT</code>, and the default value for <code>Origin</code>, <code>AWS_KMS</code>, create a symmetric encryption KMS key with KMS key material.</p> <p>If you need a key for basic encryption and decryption or you are creating a KMS key to protect your resources in an Amazon Web Services service, create a symmetric encryption KMS key. The key material in a symmetric encryption key never leaves KMS unencrypted. You can use a symmetric encryption KMS key to encrypt and decrypt data up to 4,096 bytes, but they are typically used to generate data keys and data keys pairs. For details, see <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a>.</p> <p> </p> </dd> <dt>Asymmetric KMS keys</dt> <dd> <p>To create an asymmetric KMS key, use the <code>KeySpec</code> parameter to specify the type of key material in the KMS key. Then, use the <code>KeyUsage</code> parameter to determine whether the KMS key will be used to encrypt and decrypt or sign and verify. You can't change these properties after the KMS key is created.</p> <p>Asymmetric KMS keys contain an RSA key pair, Elliptic Curve (ECC) key pair, or an SM2 key pair (China Regions only). The private key in an asymmetric KMS key never leaves KMS unencrypted. However, you can use the <a>GetPublicKey</a> operation to download the public key so it can be used outside of KMS. KMS keys with RSA or SM2 key pairs can be used to encrypt or decrypt data or sign and verify messages (but not both). KMS keys with ECC key pairs can be used only to sign and verify messages. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> </p> </dd> <dt>HMAC KMS key</dt> <dd> <p>To create an HMAC KMS key, set the <code>KeySpec</code> parameter to a key spec value for HMAC KMS keys. Then set the <code>KeyUsage</code> parameter to <code>GENERATE_VERIFY_MAC</code>. You must set the key usage even though <code>GENERATE_VERIFY_MAC</code> is the only valid key usage value for HMAC KMS keys. You can't change these properties after the KMS key is created.</p> <p>HMAC KMS keys are symmetric keys that never leave KMS unencrypted. You can use HMAC keys to generate (<a>GenerateMac</a>) and verify (<a>VerifyMac</a>) HMAC codes for messages up to 4096 bytes.</p> <p> </p> </dd> <dt>Multi-Region primary keys</dt> <dt>Imported key material</dt> <dd> <p>To create a multi-Region <i>primary key</i> in the local Amazon Web Services Region, use the <code>MultiRegion</code> parameter with a value of <code>True</code>. To create a multi-Region <i>replica key</i>, that is, a KMS key with the same key ID and key material as a primary key, but in a different Amazon Web Services Region, use the <a>ReplicateKey</a> operation. To change a replica key to a primary key, and its primary key to a replica key, use the <a>UpdatePrimaryRegion</a> operation.</p> <p>You can create multi-Region KMS keys for all supported KMS key types: symmetric encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric signing KMS keys. You can also create multi-Region keys with imported key material. However, you can't create multi-Region keys in a custom key store.</p> <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> </p> </dd> <dd> <p>To import your own key material into a KMS key, begin by creating a KMS key with no key material. To do this, use the <code>Origin</code> parameter of <code>CreateKey</code> with a value of <code>EXTERNAL</code>. Next, use <a>GetParametersForImport</a> operation to get a public key and import token. Use the wrapping public key to encrypt your key material. Then, use <a>ImportKeyMaterial</a> with your import token to import the key material. For step-by-step instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> <p>You can import key material into KMS keys of all supported KMS key types: symmetric encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric signing KMS keys. You can also create multi-Region keys with imported key material. However, you can't import key material into a KMS key in a custom key store.</p> <p>To create a multi-Region primary key with imported key material, use the <code>Origin</code> parameter of <code>CreateKey</code> with a value of <code>EXTERNAL</code> and the <code>MultiRegion</code> parameter with a value of <code>True</code>. To create replicas of the multi-Region primary key, use the <a>ReplicateKey</a> operation. For instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-import.html ">Importing key material into multi-Region keys</a>. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> </p> </dd> <dt>Custom key store</dt> <dd> <p>A <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> lets you protect your Amazon Web Services resources using keys in a backing key store that you own and manage. When you request a cryptographic operation with a KMS key in a custom key store, the operation is performed in the backing key store using its cryptographic keys.</p> <p>KMS supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a> backed by an CloudHSM cluster and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key stores</a> backed by an external key manager outside of Amazon Web Services. When you create a KMS key in an CloudHSM key store, KMS generates an encryption key in the CloudHSM cluster and associates it with the KMS key. When you create a KMS key in an external key store, you specify an existing encryption key in the external key manager.</p> <note> <p>Some external key managers provide a simpler method for creating a KMS key in an external key store. For details, see your external key manager documentation.</p> </note> <p>Before you create a KMS key in a custom key store, the <code>ConnectionState</code> of the key store must be <code>CONNECTED</code>. To connect the custom key store, use the <a>ConnectCustomKeyStore</a> operation. To find the <code>ConnectionState</code>, use the <a>DescribeCustomKeyStores</a> operation.</p> <p>To create a KMS key in a custom key store, use the <code>CustomKeyStoreId</code>. Use the default <code>KeySpec</code> value, <code>SYMMETRIC_DEFAULT</code>, and the default <code>KeyUsage</code> value, <code>ENCRYPT_DECRYPT</code> to create a symmetric encryption key. No other key type is supported in a custom key store.</p> <p>To create a KMS key in an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key store</a>, use the <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The CloudHSM cluster that is associated with the custom key store must have at least two active HSMs in different Availability Zones in the Amazon Web Services Region.</p> <p>To create a KMS key in an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key store</a>, use the <code>Origin</code> parameter with a value of <code>EXTERNAL_KEY_STORE</code> and an <code>XksKeyId</code> parameter that identifies an existing external key.</p> <note> <p>Some external key managers provide a simpler method for creating a KMS key in an external key store. For details, see your external key manager documentation.</p> </note> </dd> </dl> <p> <b>Cross-account use</b>: No. You cannot use this operation to create a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateKey</a> (IAM policy). To use the <code>Tags</code> parameter, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> (IAM policy). For examples and information about related permissions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policy-example-create-key">Allow a user to create KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DescribeKey</a> </p> </li> <li> <p> <a>ListKeys</a> </p> </li> <li> <p> <a>ScheduleKeyDeletion</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.CreateKey
		 * @return {CreateKeyResponse} Success
		 */
		CreateKey(requestBody: CreateKeyRequest): Observable<CreateKeyResponse> {
			return this.http.post<CreateKeyResponse>(this.baseUri + '#X-Amz-Target=TrentService.CreateKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Decrypts ciphertext that was encrypted by a KMS key using any of the following operations:</p> <ul> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> </ul> <p>You can use this operation to decrypt ciphertext that was encrypted under a symmetric encryption KMS key or an asymmetric encryption KMS key. When the KMS key is asymmetric, you must specify the KMS key and the encryption algorithm that was used to encrypt the ciphertext. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The <code>Decrypt</code> operation also decrypts ciphertext that was encrypted outside of KMS by the public key in an KMS asymmetric KMS key. However, it cannot decrypt symmetric ciphertext produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that is incompatible with KMS.</p> <p>If the ciphertext was encrypted under a symmetric encryption KMS key, the <code>KeyId</code> parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the KMS key is always recommended as a best practice. When you use the <code>KeyId</code> parameter to specify a KMS key, KMS only uses the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the <code>Decrypt</code> operation fails. This practice ensures that you use the KMS key that you intend.</p> <p>Whenever possible, use key policies to give users permission to call the <code>Decrypt</code> operation on a particular KMS key, instead of using &amp;IAM; policies. Otherwise, you might create an &amp;IAM; policy that gives the user <code>Decrypt</code> permission on all KMS keys. This user could decrypt ciphertext that was encrypted by KMS keys in other accounts if the key policy for the cross-account KMS key permits it. If you must use an IAM policy for <code>Decrypt</code> permissions, limit the user to particular KMS keys or particular trusted accounts. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policies-best-practices">Best practices for IAM policies</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <code>Decrypt</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an isolated compute environment in Amazon EC2. To call <code>Decrypt</code> for a Nitro enclave, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the <code>Recipient</code> parameter to provide the attestation document for the enclave. Instead of the plaintext data, the response includes the plaintext data encrypted with the public key from the attestation document (<code>CiphertextForRecipient</code>).For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>..</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. If you use the <code>KeyId</code> parameter to identify a KMS key in a different Amazon Web Services account, specify the key ARN or the alias ARN of the KMS key.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Decrypt</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>ReEncrypt</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.Decrypt
		 * @return {DecryptResponse} Success
		 */
		Decrypt(requestBody: DecryptRequest): Observable<DecryptResponse> {
			return this.http.post<DecryptResponse>(this.baseUri + '#X-Amz-Target=TrentService.Decrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified alias. </p> <note> <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>Because an alias is not a property of a KMS key, you can delete and change the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all KMS keys, use the <a>ListAliases</a> operation. </p> <p>Each KMS key can have multiple aliases. To change the alias of a KMS key, use <a>DeleteAlias</a> to delete the current alias and <a>CreateAlias</a> to create a new alias. To associate an existing alias with a different KMS key, call <a>UpdateAlias</a>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on an alias in a different Amazon Web Services account.</p> <p> <b>Required permissions</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteAlias</a> on the alias (IAM policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteAlias</a> on the KMS key (key policy).</p> </li> </ul> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.DeleteAlias
		 * @return {void} Success
		 */
		DeleteAlias(requestBody: DeleteAliasRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.DeleteAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. This operation does not affect any backing elements of the custom key store. It does not delete the CloudHSM cluster that is associated with an CloudHSM key store, or affect any users or keys in the cluster. For an external key store, it does not affect the external key store proxy, external key manager, or any external keys.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <p>The custom key store that you delete cannot contain any <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys">KMS keys</a>. Before deleting the key store, verify that you will never need to use any of the KMS keys in the key store for any <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. Then, use <a>ScheduleKeyDeletion</a> to delete the KMS keys from the key store. After the required waiting period expires and all KMS keys are deleted from the custom key store, use <a>DisconnectCustomKeyStore</a> to disconnect the key store from KMS. Then, you can delete the custom key store.</p> <p>For keys in an CloudHSM key store, the <code>ScheduleKeyDeletion</code> operation makes a best effort to delete the key material from the associated cluster. However, you might need to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key material</a> from the cluster and its backups. KMS never creates, manages, or deletes cryptographic keys in the external key manager associated with an external key store. You must manage them using your external key manager tools.</p> <p>Instead of deleting the custom key store, consider using the <a>DisconnectCustomKeyStore</a> operation to disconnect the custom key store from its backing key store. While the key store is disconnected, you cannot create or use the KMS keys in the key store. But, you do not need to delete KMS keys and you can reconnect a disconnected custom key store at any time.</p> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.DeleteCustomKeyStore
		 * @return {DeleteCustomKeyStoreResponse} Success
		 */
		DeleteCustomKeyStore(requestBody: DeleteCustomKeyStoreRequest): Observable<DeleteCustomKeyStoreResponse> {
			return this.http.post<DeleteCustomKeyStoreResponse>(this.baseUri + '#X-Amz-Target=TrentService.DeleteCustomKeyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes key material that was previously imported. This operation makes the specified KMS key temporarily unusable. To restore the usability of the KMS key, reimport the same key material. For more information about importing key material into KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>When the specified KMS key is in the <code>PendingDeletion</code> state, this operation does not change the KMS key's state. Otherwise, it changes the KMS key's state to <code>PendingImport</code>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteImportedKeyMaterial</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetParametersForImport</a> </p> </li> <li> <p> <a>ImportKeyMaterial</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.DeleteImportedKeyMaterial
		 * @return {void} Success
		 */
		DeleteImportedKeyMaterial(requestBody: DeleteImportedKeyMaterialRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.DeleteImportedKeyMaterial', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> in the account and Region.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <p>By default, this operation returns information about all custom key stores in the account and Region. To get only information about a particular custom key store, use either the <code>CustomKeyStoreName</code> or <code>CustomKeyStoreId</code> parameter (but not both).</p> <p>To determine whether the custom key store is connected to its CloudHSM cluster or external key store proxy, use the <code>ConnectionState</code> element in the response. If an attempt to connect the custom key store failed, the <code>ConnectionState</code> value is <code>FAILED</code> and the <code>ConnectionErrorCode</code> element in the response indicates the cause of the failure. For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p> <p>Custom key stores have a <code>DISCONNECTED</code> connection state if the key store has never been connected or you used the <a>DisconnectCustomKeyStore</a> operation to disconnect it. Otherwise, the connection state is CONNECTED. If your custom key store connection state is <code>CONNECTED</code> but you are having trouble using it, verify that the backing store is active and available. For an CloudHSM key store, verify that the associated CloudHSM cluster is active and contains the minimum number of HSMs required for the operation, if any. For an external key store, verify that the external key store proxy and its associated external key manager are reachable and enabled.</p> <p> For help repairing your CloudHSM key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting CloudHSM key stores</a>. For help repairing your external key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting external key stores</a>. Both topics are in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeCustomKeyStores</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.DescribeCustomKeyStores
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeCustomKeyStoresResponse} Success
		 */
		DescribeCustomKeyStores(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeCustomKeyStoresRequest): Observable<DescribeCustomKeyStoresResponse> {
			return this.http.post<DescribeCustomKeyStoresResponse>(this.baseUri + '#X-Amz-Target=TrentService.DescribeCustomKeyStores?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides detailed information about a KMS key. You can run <code>DescribeKey</code> on a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>.</p> <p>This detailed information includes the key ARN, creation date (and deletion date, if applicable), the key state, and the origin and expiration date (if any) of the key material. It includes fields, like <code>KeySpec</code>, that help you distinguish different types of KMS keys. It also displays the key usage (encryption, signing, or generating and verifying MACs) and the algorithms that the KMS key supports. </p> <p>For <a href="kms/latest/developerguide/multi-region-keys-overview.html">multi-Region keys</a>, <code>DescribeKey</code> displays the primary key and all related replica keys. For KMS keys in <a href="kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a>, it includes information about the key store, such as the key store ID and the CloudHSM cluster ID. For KMS keys in <a href="kms/latest/developerguide/keystore-external.html">external key stores</a>, it includes the custom key store ID and the ID of the external key.</p> <p> <code>DescribeKey</code> does not return the following information:</p> <ul> <li> <p>Aliases associated with the KMS key. To get this information, use <a>ListAliases</a>.</p> </li> <li> <p>Whether automatic key rotation is enabled on the KMS key. To get this information, use <a>GetKeyRotationStatus</a>. Also, some key states prevent a KMS key from being automatically rotated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-how-it-works">How Automatic Key Rotation Works</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> <li> <p>Tags on the KMS key. To get this information, use <a>ListResourceTags</a>.</p> </li> <li> <p>Key policies and grants on the KMS key. To get this information, use <a>GetKeyPolicy</a> and <a>ListGrants</a>.</p> </li> </ul> <p>In general, <code>DescribeKey</code> is a non-mutating operation. It returns data about KMS keys, but doesn't change them. However, Amazon Web Services services use <code>DescribeKey</code> to create <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a> from a <i>predefined Amazon Web Services alias</i> with no key ID.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeKey</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetKeyPolicy</a> </p> </li> <li> <p> <a>GetKeyRotationStatus</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListKeys</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.DescribeKey
		 * @return {DescribeKeyResponse} Success
		 */
		DescribeKey(requestBody: DescribeKeyRequest): Observable<DescribeKeyResponse> {
			return this.http.post<DescribeKeyResponse>(this.baseUri + '#X-Amz-Target=TrentService.DescribeKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the state of a KMS key to disabled. This change temporarily prevents use of the KMS key for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. </p> <p>For more information about how key state affects the use of a KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisableKey</a> (key policy)</p> <p> <b>Related operations</b>: <a>EnableKey</a> </p>
		 * Post #X-Amz-Target=TrentService.DisableKey
		 * @return {void} Success
		 */
		DisableKey(requestBody: DisableKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.DisableKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> of the specified symmetric encryption KMS key.</p> <p>Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate">multi-Region keys</a>, set the property on the primary key.</p> <p>You can enable (<a>EnableKeyRotation</a>) and disable automatic rotation of the key material in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed KMS keys</a>. Key material rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a> is not configurable. KMS always rotates the key material for every year. Rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned KMS keys</a> varies.</p> <note> <p>In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see <a>EnableKeyRotation</a>.</p> </note> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisableKeyRotation</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>EnableKeyRotation</a> </p> </li> <li> <p> <a>GetKeyRotationStatus</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.DisableKeyRotation
		 * @return {void} Success
		 */
		DisableKeyRotation(requestBody: DisableKeyRotationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.DisableKeyRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disconnects the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> from its backing key store. This operation disconnects an CloudHSM key store from its associated CloudHSM cluster or disconnects an external key store from the external key store proxy that communicates with your external key manager.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <p>While a custom key store is disconnected, you can manage the custom key store and its KMS keys, but you cannot create or use its KMS keys. You can reconnect the custom key store at any time.</p> <note> <p>While a custom key store is disconnected, all attempts to create KMS keys in the custom key store or to use existing KMS keys in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> will fail. This action can prevent users from storing and accessing sensitive data.</p> </note> <p>When you disconnect a custom key store, its <code>ConnectionState</code> changes to <code>Disconnected</code>. To find the connection state of a custom key store, use the <a>DescribeCustomKeyStores</a> operation. To reconnect a custom key store, use the <a>ConnectCustomKeyStore</a> operation.</p> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisconnectCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.DisconnectCustomKeyStore
		 * @return {DisconnectCustomKeyStoreResponse} Success
		 */
		DisconnectCustomKeyStore(requestBody: DisconnectCustomKeyStoreRequest): Observable<DisconnectCustomKeyStoreResponse> {
			return this.http.post<DisconnectCustomKeyStoreResponse>(this.baseUri + '#X-Amz-Target=TrentService.DisconnectCustomKeyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the key state of a KMS key to enabled. This allows you to use the KMS key for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:EnableKey</a> (key policy)</p> <p> <b>Related operations</b>: <a>DisableKey</a> </p>
		 * Post #X-Amz-Target=TrentService.EnableKey
		 * @return {void} Success
		 */
		EnableKey(requestBody: EnableKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.EnableKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> of the specified symmetric encryption KMS key. </p> <p>When you enable automatic rotation of a<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed KMS key</a>, KMS rotates the key material of the KMS key one year (approximately 365 days) from the enable date and every year thereafter. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch. To disable rotation of the key material in a customer managed KMS key, use the <a>DisableKeyRotation</a> operation.</p> <p>Automatic key rotation is supported only on <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks">symmetric encryption KMS keys</a>. You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate">multi-Region keys</a>, set the property on the primary key. </p> <p>You cannot enable or disable automatic rotation <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a>. KMS always rotates the key material of Amazon Web Services managed keys every year. Rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned KMS keys</a> varies.</p> <note> <p>In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years (approximately 1,095 days) to every year (approximately 365 days).</p> <p>New Amazon Web Services managed keys are automatically rotated one year after they are created, and approximately every year thereafter. </p> <p>Existing Amazon Web Services managed keys are automatically rotated one year after their most recent rotation, and every year thereafter.</p> </note> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:EnableKeyRotation</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DisableKeyRotation</a> </p> </li> <li> <p> <a>GetKeyRotationStatus</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.EnableKeyRotation
		 * @return {void} Success
		 */
		EnableKeyRotation(requestBody: EnableKeyRotationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.EnableKeyRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Encrypts plaintext of up to 4,096 bytes using a KMS key. You can use a symmetric or asymmetric KMS key with a <code>KeyUsage</code> of <code>ENCRYPT_DECRYPT</code>.</p> <p>You can use this operation to encrypt small amounts of arbitrary data, such as a personal identifier or database password, or other sensitive information. You don't need to use the <code>Encrypt</code> operation to encrypt a data key. The <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a> operations return a plaintext data key and an encrypted copy of that data key.</p> <p>If you use a symmetric encryption KMS key, you can use an encryption context to add additional security to your encryption operation. If you specify an <code>EncryptionContext</code> when encrypting data, you must specify the same encryption context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>If you specify an asymmetric KMS key, you must also specify the encryption algorithm. The algorithm must be compatible with the KMS key spec.</p> <important> <p>When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p> <p>You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p> </important> <p>The maximum size of the data that you can encrypt varies with the type of KMS key and the encryption algorithm that you choose.</p> <ul> <li> <p>Symmetric encryption KMS keys</p> <ul> <li> <p> <code>SYMMETRIC_DEFAULT</code>: 4096 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_2048</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 214 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 190 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_3072</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 342 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 318 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_4096</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 470 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 446 bytes</p> </li> </ul> </li> <li> <p> <code>SM2PKE</code>: 1024 bytes (China Regions only)</p> </li> </ul> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Encrypt</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.Encrypt
		 * @return {EncryptResponse} Success
		 */
		Encrypt(requestBody: EncryptRequest): Observable<EncryptResponse> {
			return this.http.post<EncryptResponse>(this.baseUri + '#X-Amz-Target=TrentService.Encrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a unique symmetric data key for use outside of KMS. This operation returns a plaintext copy of the data key and a copy that is encrypted under a symmetric encryption KMS key that you specify. The bytes in the plaintext key are random; they are not related to the caller or the KMS key. You can use the plaintext key to encrypt your data outside of KMS and store the encrypted data key with the encrypted data.</p> <p>To generate a data key, specify the symmetric encryption KMS key that will be used to encrypt the data key. You cannot use an asymmetric KMS key to encrypt data keys. To get the type of your KMS key, use the <a>DescribeKey</a> operation.</p> <p>You must also specify the length of the data key. Use either the <code>KeySpec</code> or <code>NumberOfBytes</code> parameters (but not both). For 128-bit and 256-bit data keys, use the <code>KeySpec</code> parameter.</p> <p>To generate a 128-bit SM4 data key (China Regions only), specify a <code>KeySpec</code> value of <code>AES_128</code> or a <code>NumberOfBytes</code> value of <code>16</code>. The symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption key.</p> <p>To get only an encrypted copy of the data key, use <a>GenerateDataKeyWithoutPlaintext</a>. To generate an asymmetric data key pair, use the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operation. To get a cryptographically secure random byte string, use <a>GenerateRandom</a>.</p> <p>You can use an optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <code>GenerateDataKey</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an isolated compute environment in Amazon EC2. To call <code>GenerateDataKey</code> for an Amazon Web Services Nitro enclave, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the <code>Recipient</code> parameter to provide the attestation document for the enclave. <code>GenerateDataKey</code> returns a copy of the data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the data key, the response includes a copy of the data key encrypted under the public key from the attestation document (<code>CiphertextForRecipient</code>). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>..</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>How to use your data key</b> </p> <p>We recommend that you use the following pattern to encrypt data locally in your application. You can write your own code or use a client-side encryption library, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a>, the <a href="https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/">Amazon DynamoDB Encryption Client</a>, or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a> to do these tasks for you.</p> <p>To encrypt data outside of KMS:</p> <ol> <li> <p>Use the <code>GenerateDataKey</code> operation to get a data key.</p> </li> <li> <p>Use the plaintext data key (in the <code>Plaintext</code> field of the response) to encrypt your data outside of KMS. Then erase the plaintext data key from memory.</p> </li> <li> <p>Store the encrypted data key (in the <code>CiphertextBlob</code> field of the response) with the encrypted data.</p> </li> </ol> <p>To decrypt data outside of KMS:</p> <ol> <li> <p>Use the <a>Decrypt</a> operation to decrypt the encrypted data key. The operation returns a plaintext copy of the data key.</p> </li> <li> <p>Use the plaintext data key to decrypt data outside of KMS, then erase the plaintext data key from memory.</p> </li> </ol> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKey</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.GenerateDataKey
		 * @return {GenerateDataKeyResponse} Success
		 */
		GenerateDataKey(requestBody: GenerateDataKeyRequest): Observable<GenerateDataKeyResponse> {
			return this.http.post<GenerateDataKeyResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateDataKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key, a plaintext private key, and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. You can use the data key pair to perform asymmetric cryptography and implement digital signatures outside of KMS. The bytes in the keys are random; they not related to the caller or to the KMS key that is used to encrypt the private key. </p> <p>You can use the public key that <code>GenerateDataKeyPair</code> returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p> <p>To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p> <p>Use the <code>KeyPairSpec</code> parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS.</p> <p>If you are using the data key pair to encrypt data, or for any operation where you don't immediately need a private key, consider using the <a>GenerateDataKeyPairWithoutPlaintext</a> operation. <code>GenerateDataKeyPairWithoutPlaintext</code> returns a plaintext public key and an encrypted private key, but omits the plaintext private key that you need only to decrypt ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use the <a>Decrypt</a> operation to decrypt the encrypted private key in the data key pair.</p> <p> <code>GenerateDataKeyPair</code> returns a unique data key pair for each request. The bytes in the keys are random; they are not related to the caller or the KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. The private key is a DER-encoded PKCS8 PrivateKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5958">RFC 5958</a>.</p> <p> <code>GenerateDataKeyPair</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an isolated compute environment in Amazon EC2. To call <code>GenerateDataKeyPair</code> for an Amazon Web Services Nitro enclave, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the <code>Recipient</code> parameter to provide the attestation document for the enclave. <code>GenerateDataKeyPair</code> returns the public data key and a copy of the private data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the private data key (<code>PrivateKeyPlaintext</code>), the response includes a copy of the private data key encrypted under the public key from the attestation document (<code>CiphertextForRecipient</code>). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>..</p> <p>You can use an optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPair</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.GenerateDataKeyPair
		 * @return {GenerateDataKeyPairResponse} Success
		 */
		GenerateDataKeyPair(requestBody: GenerateDataKeyPairRequest): Observable<GenerateDataKeyPairResponse> {
			return this.http.post<GenerateDataKeyPairResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateDataKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. Unlike <a>GenerateDataKeyPair</a>, this operation does not return a plaintext private key. The bytes in the keys are random; they are not related to the caller or to the KMS key that is used to encrypt the private key. </p> <p>You can use the public key that <code>GenerateDataKeyPairWithoutPlaintext</code> returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p> <p>To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p> <p>Use the <code>KeyPairSpec</code> parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS.</p> <p> <code>GenerateDataKeyPairWithoutPlaintext</code> returns a unique data key pair for each request. The bytes in the key are not related to the caller or KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>.</p> <p>You can use an optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPairWithoutPlaintext</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext
		 * @return {GenerateDataKeyPairWithoutPlaintextResponse} Success
		 */
		GenerateDataKeyPairWithoutPlaintext(requestBody: GenerateDataKeyPairWithoutPlaintextRequest): Observable<GenerateDataKeyPairWithoutPlaintextResponse> {
			return this.http.post<GenerateDataKeyPairWithoutPlaintextResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a unique symmetric data key for use outside of KMS. This operation returns a data key that is encrypted under a symmetric encryption KMS key that you specify. The bytes in the key are random; they are not related to the caller or to the KMS key.</p> <p> <code>GenerateDataKeyWithoutPlaintext</code> is identical to the <a>GenerateDataKey</a> operation except that it does not return a plaintext copy of the data key. </p> <p>This operation is useful for systems that need to encrypt data at some point, but not immediately. When you need to encrypt the data, you call the <a>Decrypt</a> operation on the encrypted copy of the key.</p> <p>It's also useful in distributed systems with different levels of trust. For example, you might store encrypted data in containers. One component of your system creates new containers and stores an encrypted data key with each container. Then, a different component puts the data into the containers. That component first decrypts the data key, uses the plaintext data key to encrypt data, puts the encrypted data into the container, and then destroys the plaintext data key. In this system, the component that creates the containers never sees the plaintext data key.</p> <p>To request an asymmetric data key pair, use the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operations.</p> <p>To generate a data key, you must specify the symmetric encryption KMS key that is used to encrypt the data key. You cannot use an asymmetric KMS key or a key in a custom key store to generate a data key. To get the type of your KMS key, use the <a>DescribeKey</a> operation.</p> <p>You must also specify the length of the data key. Use either the <code>KeySpec</code> or <code>NumberOfBytes</code> parameters (but not both). For 128-bit and 256-bit data keys, use the <code>KeySpec</code> parameter.</p> <p>To generate an SM4 data key (China Regions only), specify a <code>KeySpec</code> value of <code>AES_128</code> or <code>NumberOfBytes</code> value of <code>16</code>. The symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption key.</p> <p>If the operation succeeds, you will find the encrypted copy of the data key in the <code>CiphertextBlob</code> field.</p> <p>You can use an optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyWithoutPlaintext</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext
		 * @return {GenerateDataKeyWithoutPlaintextResponse} Success
		 */
		GenerateDataKeyWithoutPlaintext(requestBody: GenerateDataKeyWithoutPlaintextRequest): Observable<GenerateDataKeyWithoutPlaintextResponse> {
			return this.http.post<GenerateDataKeyWithoutPlaintextResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a hash-based message authentication code (HMAC) for a message using an HMAC KMS key and a MAC algorithm that the key supports. HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in <a href="https://datatracker.ietf.org/doc/html/rfc2104">RFC 2104</a>.</p> <p>You can use value that GenerateMac returns in the <a>VerifyMac</a> operation to demonstrate that the original message has not changed. Also, because a secret key is used to create the hash, you can verify that the party that generated the hash has the required secret key. You can also use the raw result to implement HMAC-based algorithms such as key derivation functions. This operation is part of KMS support for HMAC KMS keys. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> <note> <p>Best practices recommend that you limit the time during which any signing mechanism, including an HMAC, is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. HMAC tags do not include a timestamp, but you can include a timestamp in the token or message to help you detect when its time to refresh the HMAC. </p> </note> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateMac</a> (key policy)</p> <p> <b>Related operations</b>: <a>VerifyMac</a> </p>
		 * Post #X-Amz-Target=TrentService.GenerateMac
		 * @return {GenerateMacResponse} Success
		 */
		GenerateMac(requestBody: GenerateMacRequest): Observable<GenerateMacResponse> {
			return this.http.post<GenerateMacResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateMac', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a random byte string that is cryptographically secure.</p> <p>You must use the <code>NumberOfBytes</code> parameter to specify the length of the random byte string. There is no default value for string length.</p> <p>By default, the random byte string is generated in KMS. To generate the byte string in the CloudHSM cluster associated with an CloudHSM key store, use the <code>CustomKeyStoreId</code> parameter.</p> <p> <code>GenerateRandom</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an isolated compute environment in Amazon EC2. To call <code>GenerateRandom</code> for a Nitro enclave, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the <code>Recipient</code> parameter to provide the attestation document for the enclave. Instead of plaintext bytes, the response includes the plaintext bytes encrypted under the public key from the attestation document (<code>CiphertextForRecipient</code>).For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>For more information about entropy and random number generation, see <a href="https://docs.aws.amazon.com/kms/latest/cryptographic-details/">Key Management Service Cryptographic Details</a>.</p> <p> <b>Cross-account use</b>: Not applicable. <code>GenerateRandom</code> does not use any account-specific resources, such as KMS keys.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateRandom</a> (IAM policy)</p>
		 * Post #X-Amz-Target=TrentService.GenerateRandom
		 * @return {GenerateRandomResponse} Success
		 */
		GenerateRandom(requestBody: GenerateRandomRequest): Observable<GenerateRandomResponse> {
			return this.http.post<GenerateRandomResponse>(this.baseUri + '#X-Amz-Target=TrentService.GenerateRandom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a key policy attached to the specified KMS key.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyPolicy</a> (key policy)</p> <p> <b>Related operations</b>: <a>PutKeyPolicy</a> </p>
		 * Post #X-Amz-Target=TrentService.GetKeyPolicy
		 * @return {GetKeyPolicyResponse} Success
		 */
		GetKeyPolicy(requestBody: GetKeyPolicyRequest): Observable<GetKeyPolicyResponse> {
			return this.http.post<GetKeyPolicyResponse>(this.baseUri + '#X-Amz-Target=TrentService.GetKeyPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a Boolean value that indicates whether <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> is enabled for the specified KMS key.</p> <p>When you enable automatic rotation for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed KMS keys</a>, KMS rotates the key material of the KMS key one year (approximately 365 days) from the enable date and every year thereafter. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch.</p> <p>Automatic key rotation is supported only on <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks">symmetric encryption KMS keys</a>. You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate">multi-Region keys</a>, set the property on the primary key..</p> <p>You can enable (<a>EnableKeyRotation</a>) and disable automatic rotation (<a>DisableKeyRotation</a>) of the key material in customer managed KMS keys. Key material rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a> is not configurable. KMS always rotates the key material in Amazon Web Services managed KMS keys every year. The key rotation status for Amazon Web Services managed KMS keys is always <code>true</code>.</p> <note> <p>In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see <a>EnableKeyRotation</a>.</p> </note> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <ul> <li> <p>Disabled: The key rotation status does not change when you disable a KMS key. However, while the KMS key is disabled, KMS does not rotate the key material. When you re-enable the KMS key, rotation resumes. If the key material in the re-enabled KMS key hasn't been rotated in one year, KMS rotates it immediately, and every year thereafter. If it's been less than a year since the key material in the re-enabled KMS key was rotated, the KMS key resumes its prior rotation schedule.</p> </li> <li> <p>Pending deletion: While a KMS key is pending deletion, its key rotation status is <code>false</code> and KMS does not rotate the key material. If you cancel the deletion, the original key rotation status returns to <code>true</code>.</p> </li> </ul> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyRotationStatus</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DisableKeyRotation</a> </p> </li> <li> <p> <a>EnableKeyRotation</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.GetKeyRotationStatus
		 * @return {GetKeyRotationStatusResponse} Success
		 */
		GetKeyRotationStatus(requestBody: GetKeyRotationStatusRequest): Observable<GetKeyRotationStatusResponse> {
			return this.http.post<GetKeyRotationStatusResponse>(this.baseUri + '#X-Amz-Target=TrentService.GetKeyRotationStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the public key and an import token you need to import or reimport key material for a KMS key. </p> <p>By default, KMS keys are created with key material that KMS generates. This operation supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key material</a>, an advanced feature that lets you generate and import the cryptographic key material for a KMS key. For more information about importing key material into KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Before calling <code>GetParametersForImport</code>, use the <a>CreateKey</a> operation with an <code>Origin</code> value of <code>EXTERNAL</code> to create a KMS key with no key material. You can import key material for a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material into a <a href="kms/latest/developerguide/multi-region-keys-overview.html">multi-Region key</a> of any supported type. However, you can't import key material into a KMS key in a <a href="kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. You can also use <code>GetParametersForImport</code> to get a public key and import token to <a href="kms/latest/developerguide/importing-keys.html#reimport-key-material">reimport the original key material</a> into a KMS key whose key material expired or was deleted.</p> <p> <code>GetParametersForImport</code> returns the items that you need to import your key material.</p> <ul> <li> <p>The public key (or "wrapping key") of an RSA key pair that KMS generates.</p> <p>You will use this public key to encrypt ("wrap") your key material while it's in transit to KMS. </p> </li> <li> <p>A import token that ensures that KMS can decrypt your key material and associate it with the correct KMS key.</p> </li> </ul> <p>The public key and its import token are permanently linked and must be used together. Each public key and import token set is valid for 24 hours. The expiration date and time appear in the <code>ParametersValidTo</code> field in the <code>GetParametersForImport</code> response. You cannot use an expired public key or import token in an <a>ImportKeyMaterial</a> request. If your key and token expire, send another <code>GetParametersForImport</code> request.</p> <p> <code>GetParametersForImport</code> requires the following information:</p> <ul> <li> <p>The key ID of the KMS key for which you are importing the key material.</p> </li> <li> <p>The key spec of the public key ("wrapping key") that you will use to encrypt your key material during import.</p> </li> <li> <p>The wrapping algorithm that you will use with the public key to encrypt your key material.</p> </li> </ul> <p>You can use the same or a different public key spec and wrapping algorithm each time you import or reimport the same key material. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetParametersForImport</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ImportKeyMaterial</a> </p> </li> <li> <p> <a>DeleteImportedKeyMaterial</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.GetParametersForImport
		 * @return {GetParametersForImportResponse} Success
		 */
		GetParametersForImport(requestBody: GetParametersForImportRequest): Observable<GetParametersForImportResponse> {
			return this.http.post<GetParametersForImportResponse>(this.baseUri + '#X-Amz-Target=TrentService.GetParametersForImport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the public key of an asymmetric KMS key. Unlike the private key of a asymmetric KMS key, which never leaves KMS unencrypted, callers with <code>kms:GetPublicKey</code> permission can download the public key of an asymmetric KMS key. You can share the public key to allow others to encrypt messages and verify signatures outside of KMS. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>You do not need to download the public key. Instead, you can use the public key within KMS by calling the <a>Encrypt</a>, <a>ReEncrypt</a>, or <a>Verify</a> operations with the identifier of an asymmetric KMS key. When you use the public key within KMS, you benefit from the authentication, authorization, and logging that are part of every KMS operation. You also reduce of risk of encrypting data that cannot be decrypted. These features are not effective outside of KMS.</p> <p>To help you use the public key safely outside of KMS, <code>GetPublicKey</code> returns important information about the public key in the response, including:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeySpec">KeySpec</a>: The type of key material in the public key, such as <code>RSA_4096</code> or <code>ECC_NIST_P521</code>.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeyUsage">KeyUsage</a>: Whether the key is used for encryption or signing.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-EncryptionAlgorithms">EncryptionAlgorithms</a> or <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-SigningAlgorithms">SigningAlgorithms</a>: A list of the encryption algorithms or the signing algorithms for the key.</p> </li> </ul> <p>Although KMS cannot enforce these restrictions on external operations, it is crucial that you use this information to prevent the public key from being used improperly. For example, you can prevent a public signing key from being used encrypt data, or prevent a public key from being used with an encryption algorithm that is not supported by KMS. You can also avoid errors, such as using the wrong signing algorithm in a verification operation.</p> <p>To verify a signature outside of KMS with an SM2 public key (China Regions only), you must specify the distinguishing ID. By default, KMS uses <code>1234567812345678</code> as the distinguishing ID. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-sm-offline-verification">Offline verification with SM2 key pairs</a>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetPublicKey</a> (key policy)</p> <p> <b>Related operations</b>: <a>CreateKey</a> </p>
		 * Post #X-Amz-Target=TrentService.GetPublicKey
		 * @return {GetPublicKeyResponse} Success
		 */
		GetPublicKey(requestBody: GetPublicKeyRequest): Observable<GetPublicKeyResponse> {
			return this.http.post<GetPublicKeyResponse>(this.baseUri + '#X-Amz-Target=TrentService.GetPublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports or reimports key material into an existing KMS key that was created without key material. <code>ImportKeyMaterial</code> also sets the expiration model and expiration date of the imported key material.</p> <p>By default, KMS keys are created with key material that KMS generates. This operation supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key material</a>, an advanced feature that lets you generate and import the cryptographic key material for a KMS key. For more information about importing key material into KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>After you successfully import key material into a KMS key, you can <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#reimport-key-material">reimport the same key material</a> into that KMS key, but you cannot import different key material. You might reimport key material to replace key material that expired or key material that you deleted. You might also reimport key material to change the expiration model or expiration date of the key material. Before reimporting key material, if necessary, call <a>DeleteImportedKeyMaterial</a> to delete the current imported key material. </p> <p>Each time you import key material into KMS, you can determine whether (<code>ExpirationModel</code>) and when (<code>ValidTo</code>) the key material expires. To change the expiration of your key material, you must import it again, either by calling <code>ImportKeyMaterial</code> or using the <a href="kms/latest/developerguide/importing-keys-import-key-material.html#importing-keys-import-key-material-console">import features</a> of the KMS console.</p> <p>Before calling <code>ImportKeyMaterial</code>:</p> <ul> <li> <p>Create or identify a KMS key with no key material. The KMS key must have an <code>Origin</code> value of <code>EXTERNAL</code>, which indicates that the KMS key is designed for imported key material. </p> <p>To create an new KMS key for imported key material, call the <a>CreateKey</a> operation with an <code>Origin</code> value of <code>EXTERNAL</code>. You can create a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material into a <a href="kms/latest/developerguide/multi-region-keys-overview.html">multi-Region key</a> of any supported type. However, you can't import key material into a KMS key in a <a href="kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>.</p> </li> <li> <p>Use the <a>DescribeKey</a> operation to verify that the <code>KeyState</code> of the KMS key is <code>PendingImport</code>, which indicates that the KMS key has no key material. </p> <p>If you are reimporting the same key material into an existing KMS key, you might need to call the <a>DeleteImportedKeyMaterial</a> to delete its existing key material.</p> </li> <li> <p>Call the <a>GetParametersForImport</a> operation to get a public key and import token set for importing key material. </p> </li> <li> <p>Use the public key in the <a>GetParametersForImport</a> response to encrypt your key material.</p> </li> </ul> <p> Then, in an <code>ImportKeyMaterial</code> request, you submit your encrypted key material and import token. When calling this operation, you must specify the following values:</p> <ul> <li> <p>The key ID or key ARN of the KMS key to associate with the imported key material. Its <code>Origin</code> must be <code>EXTERNAL</code> and its <code>KeyState</code> must be <code>PendingImport</code>. You cannot perform this operation on a KMS key in a <a href="kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, or on a KMS key in a different Amazon Web Services account. To get the <code>Origin</code> and <code>KeyState</code> of a KMS key, call <a>DescribeKey</a>.</p> </li> <li> <p>The encrypted key material. </p> </li> <li> <p>The import token that <a>GetParametersForImport</a> returned. You must use a public key and token from the same <code>GetParametersForImport</code> response.</p> </li> <li> <p>Whether the key material expires (<code>ExpirationModel</code>) and, if so, when (<code>ValidTo</code>). For help with this choice, see <a href="https://docs.aws.amazon.com/en_us/kms/latest/developerguide/importing-keys.html#importing-keys-expiration">Setting an expiration time</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>If you set an expiration date, KMS deletes the key material from the KMS key on the specified date, making the KMS key unusable. To use the KMS key in cryptographic operations again, you must reimport the same key material. However, you can delete and reimport the key material at any time, including before the key material expires. Each time you reimport, you can eliminate or reset the expiration time.</p> </li> </ul> <p>When this operation is successful, the key state of the KMS key changes from <code>PendingImport</code> to <code>Enabled</code>, and you can use the KMS key in cryptographic operations.</p> <p>If this operation fails, use the exception to help determine the problem. If the error is related to the key material, the import token, or wrapping key, use <a>GetParametersForImport</a> to get a new public key and import token for the KMS key and repeat the import procedure. For help, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#importing-keys-overview">How To Import Key Material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ImportKeyMaterial</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteImportedKeyMaterial</a> </p> </li> <li> <p> <a>GetParametersForImport</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ImportKeyMaterial
		 * @return {ImportKeyMaterialResponse} Success
		 */
		ImportKeyMaterial(requestBody: ImportKeyMaterialRequest): Observable<ImportKeyMaterialResponse> {
			return this.http.post<ImportKeyMaterialResponse>(this.baseUri + '#X-Amz-Target=TrentService.ImportKeyMaterial', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of aliases in the caller's Amazon Web Services account and region. For more information about aliases, see <a>CreateAlias</a>.</p> <p>By default, the <code>ListAliases</code> operation returns all aliases in the account and region. To get only the aliases associated with a particular KMS key, use the <code>KeyId</code> parameter.</p> <p>The <code>ListAliases</code> response can include aliases that you created and associated with your customer managed keys, and aliases that Amazon Web Services created and associated with Amazon Web Services managed keys in your account. You can recognize Amazon Web Services aliases because their names have the format <code>aws/&lt;service-name&gt;</code>, such as <code>aws/dynamodb</code>.</p> <p>The response might also include aliases that have no <code>TargetKeyId</code> field. These are predefined aliases that Amazon Web Services has created but has not yet associated with a KMS key. Aliases that Amazon Web Services creates in your account, including predefined aliases, do not count against your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#aliases-limit">KMS aliases quota</a>.</p> <p> <b>Cross-account use</b>: No. <code>ListAliases</code> does not return aliases in other Amazon Web Services accounts.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListAliases</a> (IAM policy)</p> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ListAliases
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListAliasesResponse} Success
		 */
		ListAliases(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListAliasesRequest): Observable<ListAliasesResponse> {
			return this.http.post<ListAliasesResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListAliases?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of all grants for the specified KMS key. </p> <p>You must specify the KMS key in all requests. You can filter the grant list by grant ID or grantee principal.</p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <note> <p>The <code>GranteePrincipal</code> field in the <code>ListGrants</code> response usually contains the user or role designated as the grantee principal in the grant. However, when the grantee principal in the grant is an Amazon Web Services service, the <code>GranteePrincipal</code> field contains the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">service principal</a>, which might represent several different grantee principals.</p> </note> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListGrants</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ListGrants
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListGrantsResponse} Success
		 */
		ListGrants(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListGrantsRequest): Observable<ListGrantsResponse> {
			return this.http.post<ListGrantsResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListGrants?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the names of the key policies that are attached to a KMS key. This operation is designed to get policy names that you can use in a <a>GetKeyPolicy</a> operation. However, the only valid policy name is <code>default</code>. </p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeyPolicies</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetKeyPolicy</a> </p> </li> <li> <p> <a>PutKeyPolicy</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ListKeyPolicies
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListKeyPoliciesResponse} Success
		 */
		ListKeyPolicies(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListKeyPoliciesRequest): Observable<ListKeyPoliciesResponse> {
			return this.http.post<ListKeyPoliciesResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListKeyPolicies?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of all KMS keys in the caller's Amazon Web Services account and Region.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeys</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>DescribeKey</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ListKeys
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListKeysResponse} Success
		 */
		ListKeys(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListKeysRequest): Observable<ListKeysResponse> {
			return this.http.post<ListKeysResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListKeys?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all tags on the specified KMS key.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. For information about using tags in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging keys</a>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListResourceTags</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> <li> <p> <a>TagResource</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ListResourceTags
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListResourceTagsResponse} Success
		 */
		ListResourceTags(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListResourceTagsRequest): Observable<ListResourceTagsResponse> {
			return this.http.post<ListResourceTagsResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListResourceTags?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about all grants in the Amazon Web Services account and Region that have the specified retiring principal. </p> <p>You can specify any principal in your Amazon Web Services account. The grants that are returned include grants for KMS keys in your Amazon Web Services account and other Amazon Web Services accounts. You might use this operation to determine which grants you may retire. To retire a grant, use the <a>RetireGrant</a> operation.</p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p> <b>Cross-account use</b>: You must specify a principal in your Amazon Web Services account. However, this operation can return grants in any Amazon Web Services account. You do not need <code>kms:ListRetirableGrants</code> permission (or any other additional permission) in any Amazon Web Services account other than your own.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListRetirableGrants</a> (IAM policy) in your Amazon Web Services account.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ListRetirableGrants
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListGrantsResponse} Success
		 */
		ListRetirableGrants(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: ListRetirableGrantsRequest): Observable<ListGrantsResponse> {
			return this.http.post<ListGrantsResponse>(this.baseUri + '#X-Amz-Target=TrentService.ListRetirableGrants?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a key policy to the specified KMS key. </p> <p>For more information about key policies, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Key Policies</a> in the <i>Key Management Service Developer Guide</i>. For help writing and formatting a JSON policy document, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON Policy Reference</a> in the <i> <i>Identity and Access Management User Guide</i> </i>. For examples of adding a key policy in multiple programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-key-policies.html#put-policy">Setting a key policy</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:PutKeyPolicy</a> (key policy)</p> <p> <b>Related operations</b>: <a>GetKeyPolicy</a> </p>
		 * Post #X-Amz-Target=TrentService.PutKeyPolicy
		 * @return {void} Success
		 */
		PutKeyPolicy(requestBody: PutKeyPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.PutKeyPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Decrypts ciphertext and then reencrypts it entirely within KMS. You can use this operation to change the KMS key under which data is encrypted, such as when you <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-manually">manually rotate</a> a KMS key or change the KMS key that protects a ciphertext. You can also use it to reencrypt ciphertext under the same KMS key, such as to change the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a> of a ciphertext.</p> <p>The <code>ReEncrypt</code> operation can decrypt ciphertext that was encrypted by using a KMS key in an KMS operation, such as <a>Encrypt</a> or <a>GenerateDataKey</a>. It can also decrypt ciphertext that was encrypted by using the public key of an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric KMS key</a> outside of KMS. However, it cannot decrypt ciphertext produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that is incompatible with KMS.</p> <p>When you use the <code>ReEncrypt</code> operation, you need to provide information for the decrypt operation and the subsequent encrypt operation.</p> <ul> <li> <p>If your ciphertext was encrypted under an asymmetric KMS key, you must use the <code>SourceKeyId</code> parameter to identify the KMS key that encrypted the ciphertext. You must also supply the encryption algorithm that was used. This information is required to decrypt the data.</p> </li> <li> <p>If your ciphertext was encrypted under a symmetric encryption KMS key, the <code>SourceKeyId</code> parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the source KMS key is always recommended as a best practice. When you use the <code>SourceKeyId</code> parameter to specify a KMS key, KMS uses only the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the <code>ReEncrypt</code> operation fails. This practice ensures that you use the KMS key that you intend.</p> </li> <li> <p>To reencrypt the data, you must use the <code>DestinationKeyId</code> parameter to specify the KMS key that re-encrypts the data after it is decrypted. If the destination KMS key is an asymmetric KMS key, you must also provide the encryption algorithm. The algorithm that you choose must be compatible with the KMS key.</p> <important> <p>When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p> <p>You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p> </important> </li> </ul> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. The source KMS key and destination KMS key can be in different Amazon Web Services accounts. Either or both KMS keys can be in a different account than the caller. To specify a KMS key in a different account, you must use its key ARN or alias ARN.</p> <p> <b>Required permissions</b>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptFrom</a> permission on the source KMS key (key policy)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptTo</a> permission on the destination KMS key (key policy)</p> </li> </ul> <p>To permit reencryption from or to a KMS key, include the <code>"kms:ReEncrypt*"</code> permission in your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>. This permission is automatically included in the key policy when you use the console to create a KMS key. But you must include it manually when you create a KMS key programmatically or when you use the <a>PutKeyPolicy</a> operation to set a key policy.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ReEncrypt
		 * @return {ReEncryptResponse} Success
		 */
		ReEncrypt(requestBody: ReEncryptRequest): Observable<ReEncryptResponse> {
			return this.http.post<ReEncryptResponse>(this.baseUri + '#X-Amz-Target=TrentService.ReEncrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Replicates a multi-Region key into the specified Region. This operation creates a multi-Region replica key based on a multi-Region primary key in a different Region of the same Amazon Web Services partition. You can create multiple replicas of a primary key, but each must be in a different Region. To create a multi-Region primary key, use the <a>CreateKey</a> operation.</p> <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>A <i>replica key</i> is a fully-functional KMS key that can be used independently of its primary and peer replica keys. A primary key and its replica keys share properties that make them interoperable. They have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key ID</a> and key material. They also have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec">key spec</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage">key usage</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin">key material origin</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic key rotation status</a>. KMS automatically synchronizes these shared properties among related multi-Region keys. All other properties of a replica key can differ, including its <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">tags</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">aliases</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a>. KMS pricing and quotas for KMS keys apply to each primary key and replica key.</p> <p>When this operation completes, the new replica key has a transient key state of <code>Creating</code>. This key state changes to <code>Enabled</code> (or <code>PendingImport</code>) after a few seconds when the process of creating the new replica key is complete. While the key state is <code>Creating</code>, you can manage key, but you cannot yet use it in cryptographic operations. If you are creating and using the replica key programmatically, retry on <code>KMSInvalidStateException</code> or call <code>DescribeKey</code> to check its <code>KeyState</code> value before using it. For details about the <code>Creating</code> key state, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>You cannot create more than one replica of a primary key in any Region. If the Region already includes a replica of the key you're trying to replicate, <code>ReplicateKey</code> returns an <code>AlreadyExistsException</code> error. If the key state of the existing replica is <code>PendingDeletion</code>, you can cancel the scheduled key deletion (<a>CancelKeyDeletion</a>) or wait for the key to be deleted. The new replica key you create will have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-sync-properties">shared properties</a> as the original replica key.</p> <p>The CloudTrail log of a <code>ReplicateKey</code> operation records a <code>ReplicateKey</code> operation in the primary key's Region and a <a>CreateKey</a> operation in the replica key's Region.</p> <p>If you replicate a multi-Region primary key with imported key material, the replica key is created with no key material. You must import the same key material that you imported into the primary key. For details, see <a href="kms/latest/developerguide/multi-region-keys-import.html">Importing key material into multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>To convert a replica key to a primary key, use the <a>UpdatePrimaryRegion</a> operation.</p> <note> <p> <code>ReplicateKey</code> uses different default values for the <code>KeyPolicy</code> and <code>Tags</code> parameters than those used in the KMS console. For details, see the parameter descriptions.</p> </note> <p> <b>Cross-account use</b>: No. You cannot use this operation to create a replica key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: </p> <ul> <li> <p> <code>kms:ReplicateKey</code> on the primary key (in the primary key's Region). Include this permission in the primary key's key policy.</p> </li> <li> <p> <code>kms:CreateKey</code> in an IAM policy in the replica Region.</p> </li> <li> <p>To use the <code>Tags</code> parameter, <code>kms:TagResource</code> in an IAM policy in the replica Region.</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>UpdatePrimaryRegion</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ReplicateKey
		 * @return {ReplicateKeyResponse} Success
		 */
		ReplicateKey(requestBody: ReplicateKeyRequest): Observable<ReplicateKeyResponse> {
			return this.http.post<ReplicateKeyResponse>(this.baseUri + '#X-Amz-Target=TrentService.ReplicateKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a grant. Typically, you retire a grant when you no longer need its permissions. To identify the grant to retire, use a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">grant token</a>, or both the grant ID and a key identifier (key ID or key ARN) of the KMS key. The <a>CreateGrant</a> operation returns both values.</p> <p>This operation can be called by the <i>retiring principal</i> for a grant, by the <i>grantee principal</i> if the grant allows the <code>RetireGrant</code> operation, and by the Amazon Web Services account in which the grant is created. It can also be called by principals to whom permission for retiring a grant is delegated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and revoking grants</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p> <b>Cross-account use</b>: Yes. You can retire a grant on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions:</b>:Permission to retire a grant is determined primarily by the grant. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and revoking grants</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.RetireGrant
		 * @return {void} Success
		 */
		RetireGrant(requestBody: RetireGrantRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.RetireGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified grant. You revoke a grant to terminate the permissions that the grant allows. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/managing-grants.html#grant-delete">Retiring and revoking grants</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> <p>When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as <i>eventual consistency</i>. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-eventual-consistency">Eventual consistency</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. </p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:RevokeGrant</a> (key policy).</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.RevokeGrant
		 * @return {void} Success
		 */
		RevokeGrant(requestBody: RevokeGrantRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.RevokeGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Schedules the deletion of a KMS key. By default, KMS applies a waiting period of 30 days, but you can specify a waiting period of 7-30 days. When this operation is successful, the key state of the KMS key changes to <code>PendingDeletion</code> and the key can't be used in any cryptographic operations. It remains in this state for the duration of the waiting period. Before the waiting period ends, you can use <a>CancelKeyDeletion</a> to cancel the deletion of the KMS key. After the waiting period ends, KMS deletes the KMS key, its key material, and all KMS data associated with it, including all aliases that refer to it.</p> <important> <p>Deleting a KMS key is a destructive and potentially dangerous operation. When a KMS key is deleted, all data that was encrypted under the KMS key is unrecoverable. (The only exception is a <a href="kms/latest/developerguide/multi-region-keys-delete.html">multi-Region replica key</a>, or an <a href="kms/latest/developerguide/importing-keys-managing.html#import-delete-key">asymmetric or HMAC KMS key with imported key material</a>.) To prevent the use of a KMS key without deleting it, use <a>DisableKey</a>. </p> </important> <p>You can schedule the deletion of a multi-Region primary key and its replica keys at any time. However, KMS will not delete a multi-Region primary key with existing replica keys. If you schedule the deletion of a primary key with replicas, its key state changes to <code>PendingReplicaDeletion</code> and it cannot be replicated or used in cryptographic operations. This status can continue indefinitely. When the last of its replicas keys is deleted (not just scheduled), the key state of the primary key changes to <code>PendingDeletion</code> and its waiting period (<code>PendingWindowInDays</code>) begins. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html">Deleting multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>When KMS <a href="https://docs.aws.amazon.com/kms/latest/developerguide/delete-cmk-keystore.html">deletes a KMS key from an CloudHSM key store</a>, it makes a best effort to delete the associated key material from the associated CloudHSM cluster. However, you might need to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key material</a> from the cluster and its backups. <a href="https://docs.aws.amazon.com/kms/latest/developerguide/delete-xks-key.html">Deleting a KMS key from an external key store</a> has no effect on the associated external key. However, for both types of custom key stores, deleting a KMS key is destructive and irreversible. You cannot decrypt ciphertext encrypted under the KMS key by using only its associated external key or CloudHSM key. Also, you cannot recreate a KMS key in an external key store by creating a new KMS key with the same key material.</p> <p>For more information about scheduling a KMS key for deletion, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: kms:ScheduleKeyDeletion (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CancelKeyDeletion</a> </p> </li> <li> <p> <a>DisableKey</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.ScheduleKeyDeletion
		 * @return {ScheduleKeyDeletionResponse} Success
		 */
		ScheduleKeyDeletion(requestBody: ScheduleKeyDeletionRequest): Observable<ScheduleKeyDeletionResponse> {
			return this.http.post<ScheduleKeyDeletionResponse>(this.baseUri + '#X-Amz-Target=TrentService.ScheduleKeyDeletion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <a href="https://en.wikipedia.org/wiki/Digital_signature">digital signature</a> for a message or message digest by using the private key in an asymmetric signing KMS key. To verify the signature, use the <a>Verify</a> operation, or use the public key in the same asymmetric KMS key outside of KMS. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Digital signatures are generated and verified by using asymmetric key pair, such as an RSA or ECC pair that is represented by an asymmetric KMS key. The key owner (or an authorized user) uses their private key to sign a message. Anyone with the public key can verify that the message was signed with that particular private key and that the message hasn't changed since it was signed. </p> <p>To use the <code>Sign</code> operation, provide the following information:</p> <ul> <li> <p>Use the <code>KeyId</code> parameter to identify an asymmetric KMS key with a <code>KeyUsage</code> value of <code>SIGN_VERIFY</code>. To get the <code>KeyUsage</code> value of a KMS key, use the <a>DescribeKey</a> operation. The caller must have <code>kms:Sign</code> permission on the KMS key.</p> </li> <li> <p>Use the <code>Message</code> parameter to specify the message or message digest to sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a hash digest of the message, and then provide the hash digest in the <code>Message</code> parameter. To indicate whether the message is a full message or a digest, use the <code>MessageType</code> parameter.</p> </li> <li> <p>Choose a signing algorithm that is compatible with the KMS key. </p> </li> </ul> <important> <p>When signing a message, be sure to record the KMS key and the signing algorithm. This information is required to verify the signature.</p> </important> <note> <p>Best practices recommend that you limit the time during which any signature is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. Signatures do not include a timestamp, but you can include a timestamp in the signed message to help you detect when its time to refresh the signature. </p> </note> <p>To verify the signature that this operation generates, use the <a>Verify</a> operation. Or use the <a>GetPublicKey</a> operation to download the public key and then use the public key to verify the signature outside of KMS. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Sign</a> (key policy)</p> <p> <b>Related operations</b>: <a>Verify</a> </p>
		 * Post #X-Amz-Target=TrentService.Sign
		 * @return {SignResponse} Success
		 */
		Sign(requestBody: SignRequest): Observable<SignResponse> {
			return this.http.post<SignResponse>(this.baseUri + '#X-Amz-Target=TrentService.Sign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or edits tags on a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>.</p> <note> <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>, but you cannot tag an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>, an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned key</a>, a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#keystore-concept">custom key store</a>, or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#alias-concept">alias</a>.</p> <p>You can also add tags to a KMS key while creating it (<a>CreateKey</a>) or replicating it (<a>ReplicateKey</a>).</p> <p>For information about using tags in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging keys</a>. For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes tags from a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>. To delete a tag, specify the tag key and the KMS key.</p> <note> <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>When it succeeds, the <code>UntagResource</code> operation doesn't return any output. Also, if the specified tag key isn't found on the KMS key, it doesn't throw an exception or return a response. To confirm that the operation worked, use the <a>ListResourceTags</a> operation.</p> <p>For information about using tags in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging keys</a>. For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UntagResource</a> (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> <li> <p> <a>TagResource</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Associates an existing KMS alias with a different KMS key. Each alias is associated with only one KMS key at a time, although a KMS key can have multiple aliases. The alias and the KMS key must be in the same Amazon Web Services account and Region.</p> <note> <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>The current and new KMS key must be the same type (both symmetric or both asymmetric or both HMAC), and they must have the same key usage. This restriction prevents errors in code that uses aliases. If you must assign an alias to a different type of KMS key, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p> <p>You cannot use <code>UpdateAlias</code> to change an alias name. To change an alias name, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p> <p>Because an alias is not a property of a KMS key, you can create, update, and delete the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all KMS keys in the account, use the <a>ListAliases</a> operation. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the alias (IAM policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the current KMS key (key policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the new KMS key (key policy).</p> </li> </ul> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.UpdateAlias
		 * @return {void} Success
		 */
		UpdateAlias(requestBody: UpdateAliasRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.UpdateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the properties of a custom key store. You can use this operation to change the properties of an CloudHSM key store or an external key store.</p> <p>Use the required <code>CustomKeyStoreId</code> parameter to identify the custom key store. Use the remaining optional parameters to change its properties. This operation does not return any property values. To verify the updated property values, use the <a>DescribeCustomKeyStores</a> operation.</p> <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.</p> <important> <p>When updating the properties of an external key store, verify that the updated settings connect your key store, via the external key store proxy, to the same external key manager as the previous settings, or to a backup or snapshot of the external key manager with the same cryptographic keys. If the updated connection settings fail, you can fix them and retry, although an extended delay might disrupt Amazon Web Services services. However, if KMS permanently loses its access to cryptographic keys, ciphertext encrypted under those keys is unrecoverable.</p> </important> <note> <p>For external key stores:</p> <p>Some external key managers provide a simpler method for updating an external key store. For details, see your external key manager documentation.</p> <p>When updating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot upload the proxy configuration file to the <code>UpdateCustomKeyStore</code> operation. However, you can use the file to help you determine the correct values for the <code>UpdateCustomKeyStore</code> parameters.</p> </note> <p>For an CloudHSM key store, you can use this operation to change the custom key store friendly name (<code>NewCustomKeyStoreName</code>), to tell KMS about a change to the <code>kmsuser</code> crypto user password (<code>KeyStorePassword</code>), or to associate the custom key store with a different, but related, CloudHSM cluster (<code>CloudHsmClusterId</code>). To update any property of an CloudHSM key store, the <code>ConnectionState</code> of the CloudHSM key store must be <code>DISCONNECTED</code>. </p> <p>For an external key store, you can use this operation to change the custom key store friendly name (<code>NewCustomKeyStoreName</code>), or to tell KMS about a change to the external key store proxy authentication credentials (<code>XksProxyAuthenticationCredential</code>), connection method (<code>XksProxyConnectivity</code>), external proxy endpoint (<code>XksProxyUriEndpoint</code>) and path (<code>XksProxyUriPath</code>). For external key stores with an <code>XksProxyConnectivity</code> of <code>VPC_ENDPOINT_SERVICE</code>, you can also update the Amazon VPC endpoint service name (<code>XksProxyVpcEndpointServiceName</code>). To update most properties of an external key store, the <code>ConnectionState</code> of the external key store must be <code>DISCONNECTED</code>. However, you can update the <code>CustomKeyStoreName</code>, <code>XksProxyAuthenticationCredential</code>, and <code>XksProxyUriPath</code> of an external key store when it is in the CONNECTED or DISCONNECTED state. </p> <p>If your update requires a <code>DISCONNECTED</code> state, before using <code>UpdateCustomKeyStore</code>, use the <a>DisconnectCustomKeyStore</a> operation to disconnect the custom key store. After the <code>UpdateCustomKeyStore</code> operation completes, use the <a>ConnectCustomKeyStore</a> to reconnect the custom key store. To find the <code>ConnectionState</code> of the custom key store, use the <a>DescribeCustomKeyStores</a> operation. </p> <p> </p> <p>Before updating the custom key store, verify that the new values allow KMS to connect the custom key store to its backing key store. For example, before you change the <code>XksProxyUriPath</code> value, verify that the external key store proxy is reachable at the new path.</p> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.UpdateCustomKeyStore
		 * @return {UpdateCustomKeyStoreResponse} Success
		 */
		UpdateCustomKeyStore(requestBody: UpdateCustomKeyStoreRequest): Observable<UpdateCustomKeyStoreResponse> {
			return this.http.post<UpdateCustomKeyStoreResponse>(this.baseUri + '#X-Amz-Target=TrentService.UpdateCustomKeyStore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the description of a KMS key. To see the description of a KMS key, use <a>DescribeKey</a>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateKeyDescription</a> (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>DescribeKey</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.UpdateKeyDescription
		 * @return {void} Success
		 */
		UpdateKeyDescription(requestBody: UpdateKeyDescriptionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.UpdateKeyDescription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the primary key of a multi-Region key. </p> <p>This operation changes the replica key in the specified Region to a primary key and changes the former primary key to a replica key. For example, suppose you have a primary key in <code>us-east-1</code> and a replica key in <code>eu-west-2</code>. If you run <code>UpdatePrimaryRegion</code> with a <code>PrimaryRegion</code> value of <code>eu-west-2</code>, the primary key is now the key in <code>eu-west-2</code>, and the key in <code>us-east-1</code> becomes a replica key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-update">Updating the primary Region</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The <i>primary key</i> of a multi-Region key is the source for properties that are always shared by primary and replica keys, including the key material, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key ID</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec">key spec</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage">key usage</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin">key material origin</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic key rotation</a>. It's the only key that can be replicated. You cannot <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html">delete the primary key</a> until all replica keys are deleted.</p> <p>The key ID and primary Region that you specify uniquely identify the replica key that will become the primary key. The primary Region must already have a replica key. This operation does not create a KMS key in the specified Region. To find the replica keys, use the <a>DescribeKey</a> operation on the primary key or any replica key. To create a replica key, use the <a>ReplicateKey</a> operation.</p> <p>You can run this operation while using the affected multi-Region keys in cryptographic operations. This operation should not delay, interrupt, or cause failures in cryptographic operations. </p> <p>Even after this operation completes, the process of updating the primary Region might still be in progress for a few more seconds. Operations such as <code>DescribeKey</code> might display both the old and new primary keys as replicas. The old and new primary keys have a transient key state of <code>Updating</code>. The original key state is restored when the update is complete. While the key state is <code>Updating</code>, you can use the keys in cryptographic operations, but you cannot replicate the new primary key or perform certain management operations, such as enabling or disabling these keys. For details about the <code>Updating</code> key state, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>This operation does not return any output. To verify that primary key is changed, use the <a>DescribeKey</a> operation.</p> <p> <b>Cross-account use</b>: No. You cannot use this operation in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: </p> <ul> <li> <p> <code>kms:UpdatePrimaryRegion</code> on the current primary key (in the primary key's Region). Include this permission primary key's key policy.</p> </li> <li> <p> <code>kms:UpdatePrimaryRegion</code> on the current replica key (in the replica key's Region). Include this permission in the replica key's key policy.</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> </ul>
		 * Post #X-Amz-Target=TrentService.UpdatePrimaryRegion
		 * @return {void} Success
		 */
		UpdatePrimaryRegion(requestBody: UpdatePrimaryRegionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TrentService.UpdatePrimaryRegion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Verifies a digital signature that was generated by the <a>Sign</a> operation. </p> <p/> <p>Verification confirms that an authorized user signed the message with the specified KMS key and signing algorithm, and the message hasn't changed since it was signed. If the signature is verified, the value of the <code>SignatureValid</code> field in the response is <code>True</code>. If the signature verification fails, the <code>Verify</code> operation fails with an <code>KMSInvalidSignatureException</code> exception.</p> <p>A digital signature is generated by using the private key in an asymmetric KMS key. The signature is verified by using the public key in the same asymmetric KMS key. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>To use the <code>Verify</code> operation, specify the same asymmetric KMS key, message, and signing algorithm that were used to produce the signature. The message type does not need to be the same as the one used for signing, but it must indicate whether the value of the <code>Message</code> parameter should be hashed as part of the verification process.</p> <p>You can also verify the digital signature by using the public key of the KMS key outside of KMS. Use the <a>GetPublicKey</a> operation to download the public key in the asymmetric KMS key and then use the public key to verify the signature outside of KMS. The advantage of using the <code>Verify</code> operation is that it is performed within KMS. As a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged in CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use the KMS key to verify signatures.</p> <p>To verify a signature outside of KMS with an SM2 public key (China Regions only), you must specify the distinguishing ID. By default, KMS uses <code>1234567812345678</code> as the distinguishing ID. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-sm-offline-verification">Offline verification with SM2 key pairs</a>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Verify</a> (key policy)</p> <p> <b>Related operations</b>: <a>Sign</a> </p>
		 * Post #X-Amz-Target=TrentService.Verify
		 * @return {VerifyResponse} Success
		 */
		Verify(requestBody: VerifyRequest): Observable<VerifyResponse> {
			return this.http.post<VerifyResponse>(this.baseUri + '#X-Amz-Target=TrentService.Verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Verifies the hash-based message authentication code (HMAC) for a specified message, HMAC KMS key, and MAC algorithm. To verify the HMAC, <code>VerifyMac</code> computes an HMAC using the message, HMAC KMS key, and MAC algorithm that you specify, and compares the computed HMAC to the HMAC that you specify. If the HMACs are identical, the verification succeeds; otherwise, it fails. Verification indicates that the message hasn't changed since the HMAC was calculated, and the specified key was used to generate and verify the HMAC.</p> <p>HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in <a href="https://datatracker.ietf.org/doc/html/rfc2104">RFC 2104</a>.</p> <p>This operation is part of KMS support for HMAC KMS keys. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:VerifyMac</a> (key policy)</p> <p> <b>Related operations</b>: <a>GenerateMac</a> </p>
		 * Post #X-Amz-Target=TrentService.VerifyMac
		 * @return {VerifyMacResponse} Success
		 */
		VerifyMac(requestBody: VerifyMacRequest): Observable<VerifyMacResponse> {
			return this.http.post<VerifyMacResponse>(this.baseUri + '#X-Amz-Target=TrentService.VerifyMac', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CancelKeyDeletionX_Amz_Target { 'TrentService.CancelKeyDeletion' = 'TrentService.CancelKeyDeletion' }

	export enum ConnectCustomKeyStoreX_Amz_Target { 'TrentService.ConnectCustomKeyStore' = 'TrentService.ConnectCustomKeyStore' }

	export enum CreateAliasX_Amz_Target { 'TrentService.CreateAlias' = 'TrentService.CreateAlias' }

	export enum CreateCustomKeyStoreX_Amz_Target { 'TrentService.CreateCustomKeyStore' = 'TrentService.CreateCustomKeyStore' }

	export enum CreateGrantX_Amz_Target { 'TrentService.CreateGrant' = 'TrentService.CreateGrant' }

	export enum CreateKeyX_Amz_Target { 'TrentService.CreateKey' = 'TrentService.CreateKey' }

	export enum DecryptX_Amz_Target { 'TrentService.Decrypt' = 'TrentService.Decrypt' }

	export enum DeleteAliasX_Amz_Target { 'TrentService.DeleteAlias' = 'TrentService.DeleteAlias' }

	export enum DeleteCustomKeyStoreX_Amz_Target { 'TrentService.DeleteCustomKeyStore' = 'TrentService.DeleteCustomKeyStore' }

	export enum DeleteImportedKeyMaterialX_Amz_Target { 'TrentService.DeleteImportedKeyMaterial' = 'TrentService.DeleteImportedKeyMaterial' }

	export enum DescribeCustomKeyStoresX_Amz_Target { 'TrentService.DescribeCustomKeyStores' = 'TrentService.DescribeCustomKeyStores' }

	export enum DescribeKeyX_Amz_Target { 'TrentService.DescribeKey' = 'TrentService.DescribeKey' }

	export enum DisableKeyX_Amz_Target { 'TrentService.DisableKey' = 'TrentService.DisableKey' }

	export enum DisableKeyRotationX_Amz_Target { 'TrentService.DisableKeyRotation' = 'TrentService.DisableKeyRotation' }

	export enum DisconnectCustomKeyStoreX_Amz_Target { 'TrentService.DisconnectCustomKeyStore' = 'TrentService.DisconnectCustomKeyStore' }

	export enum EnableKeyX_Amz_Target { 'TrentService.EnableKey' = 'TrentService.EnableKey' }

	export enum EnableKeyRotationX_Amz_Target { 'TrentService.EnableKeyRotation' = 'TrentService.EnableKeyRotation' }

	export enum EncryptX_Amz_Target { 'TrentService.Encrypt' = 'TrentService.Encrypt' }

	export enum GenerateDataKeyX_Amz_Target { 'TrentService.GenerateDataKey' = 'TrentService.GenerateDataKey' }

	export enum GenerateDataKeyPairX_Amz_Target { 'TrentService.GenerateDataKeyPair' = 'TrentService.GenerateDataKeyPair' }

	export enum GenerateDataKeyPairWithoutPlaintextX_Amz_Target { 'TrentService.GenerateDataKeyPairWithoutPlaintext' = 'TrentService.GenerateDataKeyPairWithoutPlaintext' }

	export enum GenerateDataKeyWithoutPlaintextX_Amz_Target { 'TrentService.GenerateDataKeyWithoutPlaintext' = 'TrentService.GenerateDataKeyWithoutPlaintext' }

	export enum GenerateMacX_Amz_Target { 'TrentService.GenerateMac' = 'TrentService.GenerateMac' }

	export enum GenerateRandomX_Amz_Target { 'TrentService.GenerateRandom' = 'TrentService.GenerateRandom' }

	export enum GetKeyPolicyX_Amz_Target { 'TrentService.GetKeyPolicy' = 'TrentService.GetKeyPolicy' }

	export enum GetKeyRotationStatusX_Amz_Target { 'TrentService.GetKeyRotationStatus' = 'TrentService.GetKeyRotationStatus' }

	export enum GetParametersForImportX_Amz_Target { 'TrentService.GetParametersForImport' = 'TrentService.GetParametersForImport' }

	export enum GetPublicKeyX_Amz_Target { 'TrentService.GetPublicKey' = 'TrentService.GetPublicKey' }

	export enum ImportKeyMaterialX_Amz_Target { 'TrentService.ImportKeyMaterial' = 'TrentService.ImportKeyMaterial' }

	export enum ListAliasesX_Amz_Target { 'TrentService.ListAliases' = 'TrentService.ListAliases' }

	export enum ListGrantsX_Amz_Target { 'TrentService.ListGrants' = 'TrentService.ListGrants' }

	export enum ListKeyPoliciesX_Amz_Target { 'TrentService.ListKeyPolicies' = 'TrentService.ListKeyPolicies' }

	export enum ListKeysX_Amz_Target { 'TrentService.ListKeys' = 'TrentService.ListKeys' }

	export enum ListResourceTagsX_Amz_Target { 'TrentService.ListResourceTags' = 'TrentService.ListResourceTags' }

	export enum ListRetirableGrantsX_Amz_Target { 'TrentService.ListRetirableGrants' = 'TrentService.ListRetirableGrants' }

	export enum PutKeyPolicyX_Amz_Target { 'TrentService.PutKeyPolicy' = 'TrentService.PutKeyPolicy' }

	export enum ReEncryptX_Amz_Target { 'TrentService.ReEncrypt' = 'TrentService.ReEncrypt' }

	export enum ReplicateKeyX_Amz_Target { 'TrentService.ReplicateKey' = 'TrentService.ReplicateKey' }

	export enum RetireGrantX_Amz_Target { 'TrentService.RetireGrant' = 'TrentService.RetireGrant' }

	export enum RevokeGrantX_Amz_Target { 'TrentService.RevokeGrant' = 'TrentService.RevokeGrant' }

	export enum ScheduleKeyDeletionX_Amz_Target { 'TrentService.ScheduleKeyDeletion' = 'TrentService.ScheduleKeyDeletion' }

	export enum SignX_Amz_Target { 'TrentService.Sign' = 'TrentService.Sign' }

	export enum TagResourceX_Amz_Target { 'TrentService.TagResource' = 'TrentService.TagResource' }

	export enum UntagResourceX_Amz_Target { 'TrentService.UntagResource' = 'TrentService.UntagResource' }

	export enum UpdateAliasX_Amz_Target { 'TrentService.UpdateAlias' = 'TrentService.UpdateAlias' }

	export enum UpdateCustomKeyStoreX_Amz_Target { 'TrentService.UpdateCustomKeyStore' = 'TrentService.UpdateCustomKeyStore' }

	export enum UpdateKeyDescriptionX_Amz_Target { 'TrentService.UpdateKeyDescription' = 'TrentService.UpdateKeyDescription' }

	export enum UpdatePrimaryRegionX_Amz_Target { 'TrentService.UpdatePrimaryRegion' = 'TrentService.UpdatePrimaryRegion' }

	export enum VerifyX_Amz_Target { 'TrentService.Verify' = 'TrentService.Verify' }

	export enum VerifyMacX_Amz_Target { 'TrentService.VerifyMac' = 'TrentService.VerifyMac' }

}

